import React, { useContext, createContext } from 'react';
import { ethers } from "./ethers";
import { ABI } from './Abi';
import { ERC20abi } from './ERC20ABI';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {


  // if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    const signer = provider.getSigner();
  // }
  const contractAddress = '0x4260bEf7EDE880845E8463209970bdC600B44D56';

  const contract = new ethers.Contract(
    contractAddress,
    ABI,
    signer
  );

  const connectWallet = async () =>  {
     return await provider.send("eth_requestAccounts");
    };
  
  //Read functions
  const getOwner = async () => {
    return await contract.owner()
  }

  const getICOTokenPrice = async () => {
    const data = await contract.priceForOneToken();

    return data;
  }

  const getTokenData = async (tokenAddress) => {
    try {
      // console.log(tokenAddress);
      const tokenContract = new ethers.Contract(
        tokenAddress,
        ERC20abi,
        provider
      );
  
      const tokenName = await tokenContract.name()
      const tokenSymbol = await tokenContract.symbol()
      let totalSupply = await tokenContract.totalSupply()
      const tokenDecimals = await tokenContract.decimals()

      totalSupply = ethers.utils.formatUnits(totalSupply, tokenDecimals);
      const res = {data: {
        tokenName, tokenSymbol, totalSupply
      }}
      // console.log(tokenName, tokenSymbol, totalSupply);
      // console.log(tokenName);
      return res;
    } catch (error) {
      // console.log('getTData', error)
      return {
        err: 'err',
        error,
      }
    }
  }

  //Write functions
  const claimProfits = async () => {
    const data = await contract.connect(signer).claimProfits();

    return data;
  }

  const buyICO = async () => {
    try {
      const data = await contract.buy({ value: ethers.utils.parseEther('0.1')});

      console.log('data', data);
      return data;
    } catch (error) {
      return error;
    }
  }

  const updatePriceForOneToken = async (amount) => {
    try {
      const data = await contract.updatePriceForOneToken({ value: ethers.utils.parseEther(amount)});

      return data;
    } catch (error) {
      return error;
    }
  }

  const ICOPayment = async () => {
    try {
      const tx = await signer.sendTransaction({
        to: "0x903D734B9DBB7541Da94746b404C668fB06Bc7d2",
        value: ethers.utils.parseEther("0.001")
    });
  
    console.log(tx);
    } catch (error) {
      console.log(error);
    }
  }

    // const signer = provider.getSigner();
    // console.log(await signer.getAddress())
    // console.log(provider, signer)
    // const { name, chainId } = await provider.getNetwork();

  return (
    <StateContext.Provider
      value={{
        connectWallet,
        getOwner,
        getICOTokenPrice,
        claimProfits,
        buyICO,
        updatePriceForOneToken,
        getTokenData,
        ICOPayment,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
