const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const compiler = require('../compile');

let accounts;
let compiledContract;
let contractInterface;
let bytecode;
let inbox;

beforeEach(async ()=> {
    //get a list of all accounts
    accounts = await web3.eth.getAccounts();
    compiledContract = compiler.default.compileContract("Inbox");
    contractInterface = compiledContract.interface;
    bytecode = compiledContract.runtimeBytecode;

    inbox = await new web3.eth.Contract(JSON.parse(contractInterface))
        .deploy({data: bytecode, arguments: ['Hi There!']})
        .send({from: accounts[0], gas: '100001'})
});

describe('Inbox', ()=> {
    it('deploys a contract', () => {
        console.log(inbox);
    })
})