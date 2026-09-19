
const { ethers } = require("ethers");

const CONTRACT_ADDRESS = "0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47";
const FUJI_RPC = "https://api.avax-test.network/ext/bc/C/rpc";

const ABI = [
  "function verifyWasteReport(bytes32 reportHash) external",
  "function isVerified(bytes32 reportHash) external view returns (bool)"
];

module.exports = async (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { reportHash } = req.body;

    if (!reportHash || !ethers.isHexString(reportHash, 32)) {
      return res.status(400).json({
        error: "Invalid reportHash"
      });
    }

    if (!process.env.AVALANCHE_PRIVATE_KEY) {
      return res.status(500).json({
        error: "Wallet not configured"
      });
    }

    const provider = new ethers.JsonRpcProvider(FUJI_RPC);

    const wallet = new ethers.Wallet(
      process.env.AVALANCHE_PRIVATE_KEY,
      provider
    );

    const contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      ABI,
      wallet
    );

    const alreadyVerified = await contract.isVerified(reportHash);

    if (alreadyVerified) {
      return res.status(200).json({
        success: true,
        alreadyVerified: true,
        reportHash
      });
    }

    const tx = await contract.verifyWasteReport(reportHash);
    const receipt = await tx.wait();

    return res.status(200).json({
      success: true,
      alreadyVerified: false,
      reportHash,
      transactionHash: receipt.hash
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
