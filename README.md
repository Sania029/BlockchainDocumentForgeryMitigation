# Blockchain-Based Document Forgery Mitigation System

A decentralized application designed to eliminate document forgery using blockchain technology. This system allows secure verification of documents by storing their digital fingerprints (hashes) on an immutable blockchain.

## 🚀 Features

- 🔒 **Forgery-Resistant**: Stores document hashes on the blockchain for tamper-proof verification.
- 📜 **Smart Contract Integration**: Manages document registrations and verifications.
- 🌐 **Verification Portal**: Enables public users to validate document authenticity using the document hash.
- 🗂️ **IPFS Support**: Optionally stores documents on decentralized storage (e.g., IPFS).
- 👤 **User Roles**: Users can register documents; users can verify them.
- 📊 **Audit Trail**: Ensures full traceability of document issuance and validation.

## 🛠️ Tech Stack

- **Frontend**:  React 
- **Backend**: Node.js, Express
- **Blockchain**: Ethereum, Solidity, Web3.js
- **Storage**: IPFS, Firebase
- **Tools**: Ganache, Truffle

**##🧪 How It Works**
- User uploads a document → hash is generated.

- Hash is stored on the blockchain via a smart contract.

- To verify, re-upload the document → hash is compared against the one on-chain.

- Match = Valid ✅ | Mismatch = Forged ❌


