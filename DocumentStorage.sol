// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DocumentStorage {
    struct Document {
        string hash;       // SHA-256 Hash of the document
        string ipfsCID;    // IPFS CID for downloading the document
        string email;      // Email ID of the uploader
        address owner;     // Owner (wallet address, unused in your case)
        uint256 timestamp; // Timestamp of when the document was stored
    }

    mapping(string => Document) private documents;  // Map hash → Document

    event DocumentStored(string hash, string ipfsCID, string email, address owner, uint256 timestamp);

    // Store a document hash along with its IPFS CID and uploader's email
    function storeDocument(string memory _hash, string memory _ipfsCID, string memory _email) public {
        require(bytes(documents[_hash].hash).length == 0, "Document already exists!");
        documents[_hash] = Document(_hash, _ipfsCID, _email, msg.sender, block.timestamp);
        emit DocumentStored(_hash, _ipfsCID, _email, msg.sender, block.timestamp);
    }

    // Check if a document already exists
    function checkDocumentExists(string memory _hash) public view returns (bool) {
        return bytes(documents[_hash].hash).length > 0;
    }

    // Get document details (owner, timestamp, IPFS CID, email)
    function getDocument(string memory _hash) public view returns (address, uint256, string memory, string memory) {
        require(bytes(documents[_hash].hash).length > 0, "Document does not exist!");
        return (
            documents[_hash].owner, 
            documents[_hash].timestamp, 
            documents[_hash].ipfsCID, 
            documents[_hash].email // ✅ Email is now last, matching frontend expectation
        );
    }
}
