module.exports = {
  plugin: {
    init: ({ program }) => {
      program
        .command('hello')
        .action(() => {
          console.log(`Hello from your custom GraphQL CLI plugin!`);
          console.log(`Start by changing "src/index.js" file.`);
          console.log(`* Use "yarn test" to test your plugin it locally`);
        });
    }
  }
};
