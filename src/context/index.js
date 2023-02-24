import React, { useContext, createContext } from 'react';
import { ethers } from "./ethers";
import { ABI } from './Abi';
import { ERC20abi } from './ERC20ABI';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  let provider;
  let signer;

  if (window.ethereum) {
    provider = new ethers.providers.Web3Provider(window.ethereum, "any");
    signer = provider.getSigner();
  }
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

  const getEthBal = async (addr) => {
    let balance = await provider.getBalance(addr);
    balance = ethers.utils.formatEther(balance);
    // console.log(balance);
    return balance;
  }

  const getUserICOTokenBal = async (tokenAddr, userAddr) => {
    try {
      const tokenContract = new ethers.Contract(
        tokenAddr,
        ERC20abi,
        provider
      );
  
      let UserTokenBalance = await tokenContract.balanceOf(userAddr);

      return UserTokenBalance.toString();
    } catch (error) {
      return error;
    }
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
  const claimProfits = async (amount) => {
    const data = await contract.connect(signer).claimProfits();

    return data;
  }

  const buyICO = async (contractAddr, amount) => {
    const ICOcontract = new ethers.Contract(
      contractAddr,
      ABI,
      signer
    );
    try {
      const data = await ICOcontract.buy({ value: ethers.utils.parseEther(amount)});

      console.log('data', data);
      return data;
    } catch (error) {
      return error;
    }
  }

  const updatePriceForOneToken = async (amount) => {
    try {
      const data = await contract.updatePriceForOneToken({ value: ethers.utils.parseEther(amount)});

      return {
        res: 'ok',
        data,
      }
    } catch (error) {
      return {error};
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

  const transferOwnership = async (CAddr, newOwner) => {
    const ICOcontract = new ethers.Contract(
      CAddr,
      ABI,
      signer
    );

    try {
      const data = await ICOcontract.connect(signer).transferOwnership(newOwner);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const connectToken = async (CAddr, tokenAddr) => {
    const ICOcontract = new ethers.Contract(
      CAddr,
      ABI,
      signer
    );

    try {
      const data = await ICOcontract.connect(signer).connectToOtherContracts([tokenAddr]);

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const updateTokenPrice = async (CAddr, pricePerToken) => {
    const ICOcontract = new ethers.Contract(
      CAddr,
      ABI,
      signer
    );

    try {
      const data = await ICOcontract.updatePriceForOneToken(ethers.utils.parseEther(pricePerToken));

      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return error
    }
  }

  const transferICOToken = async () => {
    
  }

  const withdrawRemainingToken = async (CAddr) => {
    const ICOcontract = new ethers.Contract(
      CAddr,
      ABI,
      signer
    );

    try {
      const data = await ICOcontract.claimTokensNotSold();

      console.log(data);
      return data;
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
        getUserICOTokenBal,
        getEthBal,
        transferOwnership,
        connectToken,
        updateTokenPrice,
        withdrawRemainingToken
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
