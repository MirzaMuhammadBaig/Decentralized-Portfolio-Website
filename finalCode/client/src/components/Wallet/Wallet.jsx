import { useState } from "react";
import ABI from "./ABI.json";
import Web3 from "web3";
import './Wallet.css';

const Wallet = ({ saveState }) => {
  const [connected, setConnected] = useState(true);
  const isAndroid = /android/i.test(navigator.userAgent);
  const init = async () => {
    try {
      const web3 = new Web3(window.ethereum);
      const networkId = await ethereum.request({ method: 'net_version' });

      // if (networkId !== '80001') {
      //   // Prompt the user to switch networks
      //   alert('Please switch to the Polygon Mumbai testnet in MetaMask to use this dApp.');
      //   // You can also provide a button to initiate the network switch using ethereum.request('wallet_addEthereumChain', <chain details>);
      // }

      // Assuming the user clicks on a button to switch networks
      ethereum.request({
  method: 'wallet_addEthereumChain',
  params: [
    {
      chainId: '0x61', // Network ID for BSC Testnet
      chainName: 'Binance Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://data-seed-prebsc-1-s1.binance.org:8545'], // RPC endpoint for BSC Testnet
      blockExplorerUrls: ['https://testnet.bscscan.com'], // Block explorer URL
    },
  ],
});

      const contract = new web3.eth.Contract(
        ABI,
        "0x0Ea81f7eb4D0bBF4eF336D4f365aC1f5dAa59648"
      );
      setConnected(false);
      saveState({ web3: web3, contract: contract });
    } catch (error) {
      alert("Please Install Metamask");
    }

  }
  return <>
    <div className="header">
      {isAndroid && <button className="connectBTN">
        <a href="https://metamask.app.link/dapp/sriche.netlify.app/">Click For Mobile</a>
      </button>}
      <button className="connectBTN" onClick={init} disabled={!connected}> {connected ? "Connect Metamask" : "Connected"}</button>
    </div>
  </>
}
export default Wallet;
