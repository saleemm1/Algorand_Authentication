import React, { useState, useEffect } from 'react';
import algosdk from 'algosdk';

const App = () => {
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(null);

  useEffect(() => {
    const getAccountInfo = async () => {
      try {
        const algodClient = new algosdk.Algodv2('', 'https://testnet-algorand.api.purestake.io/ps2', '');
        const accountInfo = await algodClient.accountInformation(address).do();
        setBalance(accountInfo.amount / 1000000); // Balance in ALGO
      } catch (error) {
        console.error(error);
      }
    };

    if (address) {
      getAccountInfo();
    }
  }, [address]);

  return (
    <div>
      <h1>Algorand Authentication</h1>
      <input
        type="text"
        placeholder="Enter Algorand address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      {balance !== null && <p>Balance: {balance} ALGO</p>}
    </div>
  );
};

export default App;
