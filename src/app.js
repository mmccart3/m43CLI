const yargs = require('yargs');
// console.log(yargs.argv);
// console.log(yargs.argv.firstfield);
// console.log(yargs.argv.secondfield);

const input = yargs.argv;

if (input.actor) {
    console.log(`Its's ${input.actor}`);
};