// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts@4.8.2/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts@4.8.2/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts@4.8.2/utils/Counters.sol";
// Removed the onlyOwner logic to ensure people can mint there own NFTs.

// Contracts are very similar to classes in Java
contract LewisNFTs is ERC721, ERC721Enumerable, ERC721URIStorage {
    using Counters for Counters.Counter;

    // private - only visible and usable by its parent smart contract
    Counters.Counter private _tokenIdCounter;

    uint256 MAX_SUPPLY = 10000;

    // instantiates the contract
    constructor() ERC721("LewisNFTs", "LNFT") {}

    // Mint is th process of creating a new NFT
    // public - function is accessible anywhere
    // onlyOwner modifier - only the owner address can use this contract
    function safeMint(address to, string memory uri) public {

        // Stores current tokenId
        uint256 tokenId = _tokenIdCounter.current();

        // require - prerequisite for the function to run and for the NFT to be minted
        require(tokenId <= MAX_SUPPLY, "Error, all NFTs have been minted.");

        // incrementing number to ensure the next NFT with have a different tokenId
        _tokenIdCounter.increment();

        // Calling the safe mint function, inputting the adress and tokenId
        _safeMint(to, tokenId);

        // Adding metadata to NFT such as description, title, image, etc.
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    // internal - similar to private, but contracts inheriting from this contract can read this function
    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize)
        internal
        override(ERC721, ERC721Enumerable)
    {
        super._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    // view - specifying that we are reading from blockchain, not writing. Doesn't cost us gas
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
