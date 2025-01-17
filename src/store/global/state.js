export default {
  //
  networks:[
    { 
      name: 'jungle',
      blockchain:'eos',
      host:'jungle2.cryptolions.io',
      port:443,
      protocol:'https',
      chainId:'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473'
    },
    { 
      name: 'mainnet',
      blockchain:'eos',
      host:'eos.greymass.com',
      port:443,
      protocol:'https',
      chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906'
    }
  ],
  dapp_version: null,
  active_network: 'mainnet',
  scatter: null,
  eosApi: false,
  eosScatter: false,

}
