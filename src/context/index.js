import React, { useContext, createContext } from 'react';
import { ethers } from "./ethers";
import { ABI } from './Abi';


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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
