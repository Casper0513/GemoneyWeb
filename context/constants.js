// GemoneycoinToken: 0x3A61E507e4d38036aE58aF1087e6c123eC956669
//  ICOGemoneycoinToken: 0x4ec87f7C6d353F8DE3aC78ad2D5eFa7D8Dd3084F
//  Liqudity: 0xBE400D1a967F93A985a2da03c79241d45b7fCcd1

import { ethers } from "ethers";
import Web3Modal from "web3modal";

//INTERNAL IMPORT
import factoryAbi from "./factoryAbi.json";
import ERC20ABI from "./abi.json";

import GemoneycoinToken from "./GemoneycoinToken.json";
import ICOGemoneycoinToken from "./ICOGemoneycoinToken.json";
import Liqudity from "./Liquidity.json";

//TOKEN
export const GemoneycoinToken_ADDRESS = "0x3A61E507e4d38036aE58aF1087e6c123eC956669";
export const GemoneycoinToken_ABI = GemoneycoinToken.abi;

//TOKEN SALE
export const ICOGemoneycoinToken_ADDRESS = "0x4ec87f7C6d353F8DE3aC78ad2D5eFa7D8Dd3084F";
export const ICOGemoneycoinToken_ABI = ICOGemoneycoinToken.abi;
//LIQUDITY
export const Liqudity_address = "0xBE400D1a967F93A985a2da03c79241d45b7fCcd1";
export const Liqudity_abi = Liqudity.abi;

export const FACTORY_ABI = factoryAbi;
export const FACTORY_ADDRESS = "0x1F98431c8aD98523631AE4a59f267346ea31F984";
export const positionManagerAddress =
  "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";

const fetchContract = (signer, ABI, ADDRESS) =>
  new ethers.Contract(ADDRESS, ABI, signer);

export const web3Provider = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    return provider;
  } catch (error) {
    console.log(error);
  }
};

export const CONNECTING_CONTRACT = async (ADDRESS) => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const newtork = await provider.getNetwork();

    const signer = provider.getSigner();
    const contract = fetchContract(signer, ERC20ABI, ADDRESS);

    //USER ADDRESS
    const userAddress = signer.getAddress();
    const balance = await contract.balanceOf(userAddress);

    const name = await contract.name();
    const symbol = await contract.symbol();
    const supply = await contract.totalSupply();
    const decimals = await contract.decimals();
    const address = await contract.address;

    const token = {
      address: address,
      name: name,
      symbol: symbol,
      decimals: decimals,
      supply: ethers.utils.formatEther(supply.toString()),
      balance: ethers.utils.formatEther(balance.toString()),
      chainId: newtork.chainId,
    };

    return token;
  } catch (error) {
    console.log(error);
  }
};

export const internalGemoneycoinTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, GemoneycoinToken_ABI, GemoneycoinToken_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const internalICOGemoneycoinTokenContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, ICOGemoneycoinToken_ABI, ICOGemoneycoinToken_ADDRESS);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const internalAddLiqudity = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);

    const contract = fetchContract(provider, Liqudity_abi, Liqudity_address);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

export const getBalance = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();

    return await signer.getBalance();
  } catch (error) {
    console.log(error);
  }
};
