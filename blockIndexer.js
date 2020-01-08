const Web3 = require("web3");
const {addBlock} = require("./services/dbService");
const rinkebyAPI = 'https://kovan.infura.io/v3/5e66f831443940ed88e9adca82578c2b';

const web3 = new Web3(rinkebyAPI);

web3.eth.getBlockNumber().then((result,err)=>{
    for(i=result-3;i<=result;i++){
        web3.eth.getBlock(i).then(addBlock);
    }
})