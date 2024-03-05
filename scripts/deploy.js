const hre = require("hardhat");

const tokens = (nToken) => {
  return ethers.utils.parseUnits(nToken.toString(), "ether");
};

async function main() {
  //GemoneycoinToken TOKEN
  const _initialSupply = tokens(500000000000);
  const GemoneycoinToken = await hre.ethers.getContractFactory("GemoneycoinToken");
  const gemoneycoinToken = await GemoneycoinToken.deploy(_initialSupply);

  await GemoneycoinToken.deployed();
  console.log(` GemoneycoinToken: ${GemoneycoinToken.address}`);

  //ICO GemoneycoinToken
  const _tokenPrice = tokens(0.0001);
  const ICOGemoneycoinToken = await hre.ethers.getContractFactory("ICOGemoneycoinToken");
  const icoGemoneycoinToken = await ICOGemoneycoinToken.deploy(GemoneycoinToken.address, _tokenPrice);

  await ICOGemoneycoinToken.deployed();
  console.log(` ICOGemoneycoinToken: ${ICOGemoneycoinToken.address}`);

  //LIQUIDITY
  const Liqudity = await hre.ethers.getContractFactory("Liqudity");
  const liqudity = await Liqudity.deploy();

  await liqudity.deployed();
  console.log(` Liqudity: ${liqudity.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
