import path from 'path';
import fs from 'fs';
import solc from 'solc';

class Compiler {
    
    constructor() {
        this.inboxPath = path.resolve(__dirname,"contracts","Inbox.sol");
        this.inboxSource = fs.readFileSync(this.inboxPath, 'utf8');
        console.log();
    }

    compileContract(contractName){
        if(contractName == "Inbox") {
            return solc.compile(this.inboxSource,1).contracts[":Inbox"];
        } else {
            return null;
        }
        
    }
}

export default new Compiler();