import HomePage from './pages/HomePage';
import { Routes, Route } from "react-router-dom";
import './DashboardCss/Dashboard.css';
import Dashboard from './DashboardComponent/Dashboard';
import SwapPage from '../src/DashboardPage/SwapPage';
import PoolPage from '../src/DashboardPage/PoolPage';
import VeMercuryPage from '../src/DashboardPage/VeMercuryPage';
import FaucetPage from '../src/DashboardPage/FaucetPage';
import Sidebar from './DashboardComponent/Sidebar';
import Header from './DashboardComponent/Header';
import Launchpad from '../src/DashboardPage/Launchpad';
import AirDrop from '../src/DashboardPage/AirdropPage';
import Wallet from './DashboardComponent/wallet';
import SettingsPage from '../src/DashboardPage/SettingsPage';
import Profile from './DashboardPage/Profile';
import TokenMint from './DashboardPage/TokenMint';
import DashboardFooter from './DashboardComponent/DashboardFooter';
import Listing from './DashboardPage/TokenMintLists';

import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { BLACKTokenABI, BLACKTokenAddress, BurnVaultAddress, BurnVaultABI, USDCAddress } from './abi/abi';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import { useWeb3ModalAccount } from '@web3modal/ethers5/react';
import { ProfileProvider, SignatureProvider } from './SignatureContext';

const projectId = 'a0566b417a74c151a64e8e2f9c911652'



const metadata = {
  name: 'My Website',
  description: 'My Website description',
  url: 'https://mywebsite.com',
  icons: ['https://avatars.mywebsite.com/']
}
const testnet = {
  chainId: 84532,
  name: 'Base Sepolia',
  currency: 'ETH',
  explorerUrl: 'https://sepolia.basescan.org/',
  rpcUrl: 'https://base-sepolia-rpc.publicnode.com/'
}
createWeb3Modal({
  ethersConfig: defaultConfig({ 
    metadata,
    defaultChainId: 84532,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: 'https://base-sepolia-rpc.publicnode.com/' // used for the Coinbase SDK
  }),
  chains: [testnet],
  projectId
})

function App() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  console.log("app.js",localStorage.getItem("walletAddress"))
  if(isConnected){
    localStorage.setItem("walletAddress",address);
  }else{
    localStorage.setItem("walletAddress","");
  }

  const [totalSupply, setTotalSupply] = useState(0.00);
  const [totalBurned, setTotalBurned] = useState(0.00);

  const [balances, setBalances] = useState({
    me: 0.00,
    eth: 0.00,
    usdc: 0.00
  });

  const balanceOfTokens = async () => {
    if (isConnected) {
      try {
        const url = "https://sepolia.base.org";
        const provider = new ethers.providers.JsonRpcProvider(url);
        const MEContract =  new ethers.Contract(BLACKTokenAddress,BLACKTokenABI,provider);
        const USDCContract =  new ethers.Contract(USDCAddress,BLACKTokenABI,provider);
        const eth = await provider.getBalance(address);
        
        let MEBalance = ethers.utils.formatUnits(await MEContract.balanceOf(localStorage.getItem("walletAddress")),9);
        let USDCBalance  = ethers.utils.formatUnits(await USDCContract.balanceOf(localStorage.getItem("walletAddress")),6);
        setBalances({
          me : MEBalance,
          eth: eth,
          usdc: USDCBalance
        });

        console.log("Balances updated:", balances);
      } catch (error) {
        console.error("Error fetching token balances:", error);
      }
    }
    else{
      setBalances({
        me: 0.00,
        eth: 0.00,
        usdc:0.00
      });
    }
  };

  const asset = async() => {
    if (isConnected) {
      try {
    const url = "https://sepolia.base.org";
    const provider = new ethers.providers.JsonRpcProvider(url);
    const JOKERContract = new ethers.Contract(BLACKTokenAddress, BLACKTokenABI, provider);
    const burnvaultcontract = new ethers.Contract(BurnVaultAddress, BurnVaultABI, provider);

    let Jokerbalancecontract = ethers.utils.formatUnits(await JOKERContract.totalSupply(),0);
    let Jokerburnedcontract = ethers.utils.formatUnits(await JOKERContract.totalBurn(),0);
    let circulatingSupply = parseFloat(Jokerbalancecontract) - parseFloat(Jokerburnedcontract);
    setTotalSupply(Jokerbalancecontract);
    setTotalBurned(Jokerburnedcontract);
    console.log("AppPage:",Jokerbalancecontract,Jokerburnedcontract)
      } catch (error) {
        console.error("Error fetching token balances:", error);
      }
    }
    else{
      setTotalSupply(0.00);
      setTotalBurned(0.00);
    }
  }

  useEffect(() => {
      balanceOfTokens();
      asset();
  }, [isConnected, address]);
  
  return (
    <div className='main_wrapper'>
      <ProfileProvider>
      <SignatureProvider>
     {/* <Header gbalances={balances} balanceOfTokens={balanceOfTokens}/> */}
     {/* <Sidebar/> */}
      <Routes>
        <Route index path="/" element={<HomePage />} />
        {/* <Route path="/home" element={<Dashboard balanceOfTokens={balanceOfTokens} totalSupply={totalSupply} totalBurn={totalBurned}/>} /> 

        <Route path="/dashboard" element={<Dashboard balanceOfTokens={balanceOfTokens} totalSupply={totalSupply} totalBurn={totalBurned}/>} /> 
        <Route path="/wallet" element={<Wallet gbalances={balances} balanceOfTokens={balanceOfTokens}/>} />
        <Route path="/swap" element={<SwapPage balanceOfTokens={balanceOfTokens}/>} />
        <Route path="/pools" element={<PoolPage balanceOfTokens={balanceOfTokens}/>} />
        <Route path="/ME" element={<VeMercuryPage balanceOfTokens={balanceOfTokens}/>} />
        <Route path="/faucet" element={<FaucetPage gbalances={balances} balanceOfTokens={balanceOfTokens}/>} /> 
        <Route path="/launchpad" element={<Launchpad balanceOfTokens={balanceOfTokens}/>} /> 
        <Route index path="/port3reward" element={<AirDrop balanceOfTokens={balanceOfTokens}/>} /> 
        <Route index path="/profile" element={<Profile balanceOfTokens={balanceOfTokens}/>} /> 
        <Route index path="/mint" element={<TokenMint balanceOfTokens={balanceOfTokens}/>} /> 
        <Route index path="/list" element={<Listing balanceOfTokens={balanceOfTokens}/>} />  */}
        {/* <Route path="/settingspage" element={<SettingsPage />} /> */}
      </Routes>
     {/* <DashboardFooter /> */}
     </SignatureProvider>
     </ProfileProvider>
    </div>
  );
}

export default App;
