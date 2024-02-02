
const teamNames = ["Jacob McEwan", "Dallen Harmon", "Taylor Cazier"];

module.exports = teamNames;

function sayHello() {
    teamNames.forEach(name => {
        console.log(`Hello ${name}`);
    });
}

sayHello();
