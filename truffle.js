var HDWalletProvider = require("truffle-hdwallet-provider");
var mnemonic = "screen zebra doctor sweet bonus goat move switch main stairs point clever";

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*',
    },
    ropsten: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "	https://ropsten.infura.io/Kuo1lxDBsFtMnaw6GiN2")
      },
      gas: 4698712,
      network_id: 3
    },
    rinkeby: {
      provider: function() {
        return new HDWalletProvider(mnemonic, "	https://ropsten.infura.io/Kuo1lxDBsFtMnaw6GiN2")
      },
      gas: 4698712,
      network_id: 4
    }
  },
  solc: {
      optimizer: {
          enabled: true,
          runs: 200
      },
  },
};
