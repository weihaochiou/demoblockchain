pragma solidity ^0.6.0;

contract Auth{
    address private administrator;

    constructor() public {
        administrator = msg.sender;
    }

    function isAdministraotr(address user) public view returns (bool) {
        return user == administrator;
    }
}