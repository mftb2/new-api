import { Item } from "react-native-paper/lib/typescript/components/List/List";
import sayHello from "../LaptopGithubITDevOps/helloworld.mjs";
import assert from "assert";

it("Tests Hello World", ()=>{
    
    const hello = sayHello();
    assert.equal(hello,"Hello Taylor");


})