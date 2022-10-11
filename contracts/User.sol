// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract User {
    string _user;
    string _password;

    constructor(string memory user, string memory password) {
        _user = user;
        _password = password;
    }

    function updatePassword(
        string memory old_password,
        string memory new_password
    ) public {
        require(compareStrings(old_password, _password), "Wrong password");
        _password = new_password;
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }
}
