import React, { useContext, createContext } from 'react';
import { ethers } from "./ethers";
import { ABI } from './Abi';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {

  const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
  const contractAddress = ''

  const contract = new ethers.Contract(
    contractAddress,
    ABI,
    provider
  );

  const connectWallet = async () =>  {
     return await provider.send("eth_requestAccounts");

    };

    // const signer = provider.getSigner();
    // console.log(await signer.getAddress())
    // console.log(provider, signer)
    // const { name, chainId } = await provider.getNetwork();

  return (
    <StateContext.Provider
      value={{
        connectWallet,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
