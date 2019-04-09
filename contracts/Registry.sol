pragma solidity >=0.4.22 <0.6.0;

contract Registry {
    mapping (address => bool) public registration;
    address owner;

    constructor() public {
        owner = msg.sender;
    }

    function register(address addr) public {
        require(msg.sender == owner);
        registration[addr] = true;
    }

    function changeAddr(address addr) public {
        require(registration[msg.sender] == true);
        registration[msg.sender] = false;
        registration[addr] = true;
    }
}