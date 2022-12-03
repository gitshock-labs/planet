require("@nomiclabs/hardhat-waffle");

const { privateKey } = require("./secrets.json");

require("./tasks/openBox");

module.exports = {
  solidity: "0.8.4",
  networks: {
    gitshock: {
      url: "https://rpc-cartenz.gitshock.com",
      chainId: 212,
      gasPrice: 20000000000,
      accounts: [privateKey],
    },
  },
};
