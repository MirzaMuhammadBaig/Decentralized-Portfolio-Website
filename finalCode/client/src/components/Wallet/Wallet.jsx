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
            chainId: '0x13881', // Network ID for Polygon Mumbai
            chainName: 'Polygon Mumbai Testnet',
            nativeCurrency: {
              name: 'MATIC',
              symbol: 'MATIC',
              decimals: 18,
            },
            rpcUrls: ['https://rpc-mumbai.maticvigil.com'], // RPC endpoint for Polygon Mumbai
            blockExplorerUrls: ['https://explorer-mumbai.maticvigil.com'], // Block explorer URL
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
