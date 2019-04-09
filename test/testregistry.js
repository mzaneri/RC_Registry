const Registry = artifacts.require("Registry");

contract('Registry', async function(accounts){
    it("should register new address", async () =>{
        let reg = await Registry.deployed();
        let tx = await reg.register(accounts[1]);
        let isRegistered = await reg.registration(accounts[1]);
        assert(isRegistered);
    })

    it("new address is false", async () =>{
        let reg = await Registry.deployed();
        let newAddr = accounts[2];
        let isRegistered = await reg.registration(newAddr);
        assert.isFalse(isRegistered);
    })

    it("should change address", async () =>{
        let reg = await Registry.deployed();
        let newAddr = accounts[3];
        let successfullyChanged = await reg.changeAddr(newAddr, {from:accounts[1]});
        let oldAccount = await reg.registration(accounts[1]);
        let newAccount = await reg.registration(accounts[3]);
        assert(successfullyChanged);
        assert(!oldAccount);
        assert(newAccount);
    })
})