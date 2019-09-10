import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  console.log("We are in the browser and metamask is running...")

  web3 = new Web3(window.ethereum);
  window.addEventListener('load', async () => {
      try {
          // Request account access if needed
          await window.ethereum.enable();
      } catch (error) {
          // User denied account access...
          console.log("Why you deny?")
      }
  })
} else {
  console.log("We are on the server *OR* the user is not running metamask");

  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/orDImgKRzwNrVCDrAk5Q'
  );
  web3 = new Web3(provider);
}

export default web3;