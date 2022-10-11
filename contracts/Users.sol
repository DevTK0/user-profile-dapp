// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Users {
    struct UserData {
        string user;
        string password;
    }

    mapping(string => UserData) private users;
    string[] lookup;

    constructor() {}

    function getUser(string memory key)
        public
        view
        returns (string memory user, string memory password)
    {
        return (users[key].user, users[key].password);
    }

    function getAllUsers() public view returns (UserData[] memory) {
        UserData[] memory allUsers = new UserData[](lookup.length);
        for (uint256 i = 0; i < lookup.length; i++) {
            allUsers[i] = users[lookup[i]];
        }
        return allUsers;
    }

    function addUser(string memory user, string memory password) public {
        UserData memory newUser = UserData(user, password);
        users[user] = newUser;
        lookup.push(user);
    }

    // function updateUser(string memory user, string memory role) public {
    //     UserData storage updated = users[user];
    //     users[user].role = role;
    //     users[user] = updated;
    // }

    function updatePassword(
        string memory user,
        string memory old_password,
        string memory new_password
    ) public {
        require(
            compareStrings(old_password, users[user].password),
            "Wrong password"
        );
        users[user].password = new_password;
    }

    function compareStrings(string memory a, string memory b)
        public
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    function deleteUser(string memory user) public {
        delete users[user];
        for (uint256 i = 0; i < lookup.length; i++) {
            if (compareStrings(lookup[i], user)) {
                lookup[i] = lookup[lookup.length - 1];
                lookup.pop();
            }
        }
    }
}
