require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip notice crime remember attitude grace person bottom skull'; 
let testAccounts = [
"0x650100f8453221a45e43d9daf2e84ecce78b8ec7bb88d157317214c978221ab2",
"0xbbe277659703b0e7d0a5b2f37134b4e0e3e1a02e3f096ffe0153397860ab2440",
"0x44b47dace98c103ade7320c2f69f0f902fd03509577612e034ebacbf2bee5a0f",
"0x2027f292f4c9cafb5f9db416dfc72acc5c3f97f66bb630ceb5f4d58cea0d8c9b",
"0x426931658aa4ccf16616a23593cee45e4ccd2e3d53ab1f91f7269f182da70480",
"0xc103951b9a00f0aba373100c9b025aa758e178b0ef872058a33f2aeffbbe223e",
"0x9d064712a5603553b26cdbbd10eebc54f7ef142bab811f2498402d43a4efa04d",
"0xeab6d995d7c1b563973944c9a75146bd16ddb79a3481eee991ee2d1bb1864d1c",
"0xa2a40babf613d2f1de6763ba89524a9e7bcd4ff8198deb00d919e1e6f4a03f1e",
"0xe6e0b71ce3546ac3f03d24d82bb575c8c30d085d02059767d2a6062aec53c9a7"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
