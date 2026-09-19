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

0xfB952e9814288A90E6C6EDEf6bc0554435e21c5C

## Current status

- Smart contract deployed on Avalanche Fuji
- Waste report verification tested successfully
- Base44 integration in development

- ## Live Demo

Live demo: chefplan-avalanche-waste-proof.vercel.app

Network: Avalanche Fuji C-Chain

Contract address:
0xfB952e9814288A90E6C6EDEf6bc0554435e21c5C
