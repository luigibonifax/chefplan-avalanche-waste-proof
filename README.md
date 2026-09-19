# ChefPlan Avalanche Waste Proof

Open-source Avalanche integration for ChefPlan.

This project allows ChefPlan to create a verifiable proof of a restaurant food-waste report on Avalanche Fuji Testnet without publishing sensitive restaurant data on-chain.

## How it works

ChefPlan generates a waste report.

The report is converted into a unique hash.

The hash is registered on Avalanche through the `ChefPlanWasteProof` smart contract.

The original report remains private inside ChefPlan.

## Network

Avalanche Fuji Testnet

## Smart Contract

Contract address:

0x7EF2e0048f5bAeDe046f6BF797943daF4ED8CB47

## Current status

- Smart contract deployed on Avalanche Fuji
- Waste report verification tested successfully
- Base44 integration in development
