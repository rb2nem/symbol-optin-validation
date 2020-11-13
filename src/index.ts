import {
    Account,
    Address,
    Deadline,
    Mosaic,
    MosaicId,
    NetworkType,
    PlainMessage,
    RepositoryFactoryHttp,
    TransferTransaction,
    UInt64,
} from 'symbol-sdk';


var ask = require('prompt-sync')();

var validatedAddresses:string[] = [];
var unusableAddresses:string[] = []

while (true) {

    var symbolAddress = ask('Which SYMBOL address do you want validate as opt-in? (empty answer to stop) :');
    if (symbolAddress == "") { break; }
    const addressToValidate = Address.createFromRawAddress(symbolAddress);
    var privateKey = ask.hide('secret_key: ');
    const account = Account.createFromPrivateKey(privateKey, NetworkType.MAIN_NET);

    if (account.address.pretty() == addressToValidate.pretty()) {
        process.stdout.write("ok\n")
        validatedAddresses.push(account.address.pretty());
    }
    else {
        process.stdout.write("********************************************************************************\n")
        process.stdout.write("WRONG KEY !! THIS IS NOT GOOD!!\n")
        process.stdout.write("With the key you entered you don't have access to the Symbol address " + symbolAddress + "\n")
        process.stdout.write("The private key you entered is for address" + account.address.pretty() + "\n")
        process.stdout.write("********************************************************************************\n")
        unusableAddresses.push(addressToValidate.pretty());
    }

}

process.stdout.write("-------------------\n");
process.stdout.write("Validated addresses\n");
process.stdout.write("-------------------\n");
for (var okAddress of validatedAddresses) {
    process.stdout.write("\t"+okAddress+"\n");
}
if (unusableAddresses.length>0) {
    process.stdout.write("!!!!!!!!!!!!!!!!!!\n");
    process.stdout.write("Unusable addresses\n");
    process.stdout.write("!!!!!!!!!!!!!!!!!!\n");
    for (var errorAddress of unusableAddresses) {
        process.stdout.write("\t ERROR: "+errorAddress+"\n");
    }
}
