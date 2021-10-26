const {expect} = require('chai');

const {BN, expectEvent, expectRevert} = require('@openzeppelin/test-helpers');

const Box = artifacts.require('Box');

contract('Box', function([owner, other]){

    const value = new BN('42');

    beforeEach(async function(){
        this.box = await Box.deployed({from: owner});
    });


    //Test case
    it('retreive return a value prevousl store ', async function(){
        await this.box.store(value, {from: owner});

        expect((await this.box.retrieve())).to.be.bignumber.equal(value);
    })


})