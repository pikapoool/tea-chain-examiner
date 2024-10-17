const evm = require("./evm/EVM");

class ChainExaminer {
  constructor(config) {
    this.config = config;
    this.evm = new evm(config);


  }
}
  
module.exports = ChainExaminer;
  