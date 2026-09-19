// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ChefPlanWasteProof {

    mapping(bytes32 => uint256) public verifiedReports;

    event ReportVerified(
        bytes32 indexed reportHash,
        uint256 timestamp
    );

    function verifyWasteReport(bytes32 reportHash) external {
        require(
            verifiedReports[reportHash] == 0,
            "Report already verified"
        );

        verifiedReports[reportHash] = block.timestamp;

        emit ReportVerified(
            reportHash,
            block.timestamp
        );
    }

    function isVerified(bytes32 reportHash)
        external
        view
        returns (bool)
    {
        return verifiedReports[reportHash] != 0;
    }
}
