require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner argue tackle skull guard render remain hole just process oppose skin'; 
let testAccounts = [
"0x4d7240865b34d627463525f7489d1de460e38a4d2e6124d0cfd4d1d627a9eeca",
"0x1f2ca67a033a1e870c9554523655e6e186a21ecffa80c5775d120802c5e00434",
"0x9dae1edec7372d543bb4b8f2b4a0e1394a47d59462885f019542a82d3db60c4f",
"0x20cfc334e484ae0c1a35127e46c0e324a9465b18051d9edeccc4f900fa35dbc0",
"0x20292fd2069263c815b4f6b35b86e6c882efbd091e68700223b62566a3f30c31",
"0x5da3135de03953e959148765ae5e98964a59f0ac3c8dda59d873fdb2f53e3343",
"0x13195bbac7f20f06f6366737499a9ad75bde6ed9c362a1dad692d94e749a8bbd",
"0x5cbb66e29943d75adcb91060deb2f4180938476d74b46503be33006806d579f8",
"0xf05da9226e507abf61735b3f61ca9e4f48d7a6604400b902a89fbee1b37993a2",
"0xb7bf59aa1bc58d299e633a46c4588517e0584ff97c738c247d176b11abf39dd0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
