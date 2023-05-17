const hre = require("hardhat");

async function main() {
  const INFKTCoin = await hre.ethers.getContractFactory("INFKTCoin");
  const INFKT = await INFKTCoin.deploy("1000000000000000000000000000");

  await INFKT.deployed();

  console.log("Token deployed to:", INFKT.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });