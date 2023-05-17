require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  solidity: "0.8.18",
  networks:{
  mumbai:{
    url: 'https://polygon-mumbai.g.alchemy.com/v2/CwEQG5td8sbxMqtjM-NzuThb5kljpYJK',
    accounts: [`0x${process.env.PRIVATE_KEY}`]
  }
 }
};
