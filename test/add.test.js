import { use, expect } from "chai"
import add from "../src/add.js"


describe("Add utility function", () => {
 it("test addition 1", () =>{
     expect(add(5,10)).to.equal(15)
 });
 it("test addition 2", () =>{
    expect(add(-1,2)).to.equal(1)
});
it("test addition 3", () =>{
    expect(add(0,0)).to.equal(0)
});
it("test addition 4", () =>{
    expect(add(-1,-1)).to.equal(-2)
});
it("test addition 5", () =>{
    expect(add(-1,0)).to.equal(-1)
});
})
