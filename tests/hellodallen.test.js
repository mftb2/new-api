import sayHello from '../utils/helloworld.mjs';
import assert from 'assert';

it("should say Dallen", ()=>{

    const hello = sayHello();
    console.log(hello)

    assert.equal(hello,"hello");

    expect(hello).toBe("Dallen");

});