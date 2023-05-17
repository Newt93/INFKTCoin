// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.14;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract INFKTCoin is ERC20{
    constructor(uint256 totalSupply) ERC20("INFKTCoin", "INFKT"){
        _mint(msg.sender, totalSupply);
    }
}