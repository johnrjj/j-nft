pragma solidity ^0.5.0;
import "../node_modules/openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "./Metadata.sol";

contract Token is ERC721Full, Ownable {
    address public metadata;
    constructor(string memory name, string memory symbol, address _metadata) public ERC721Full(name, symbol) {
        metadata = _metadata;
    }
    function mint(address recepient, uint timeHash) public onlyOwner {
        _mint(recepient, timeHash);
    }
    function updateMetadata(address _metadata) public onlyOwner {
        metadata = _metadata;
    }
    function tokenURI(uint _tokenId) external view returns (string memory _infoUrl) {
        return Metadata(metadata).tokenURI(_tokenId);
    }

}