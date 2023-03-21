#! /usr/bin/env node
const program = require("commander");
const figlet = require("figlet");
const chalk = require("chalk");
const { version } = require("../package.json");

// 查看版本号
program.name("wjx").version(version).option("-v, --version", "查看版本号");

program
  .command("split")
  .description("Split a string into substrings and display as an array")
  .argument("<string>", "string to split")
  .option("--first", "display just the first substring")
  .option("-s, --separator <char>", "separator character", ",")
  .action((str, options) => {
    console.log(str);
    console.log(options);
    const limit = options.first ? 1 : undefined;
    console.log(str.split(options.separator, limit));
  });

program.on("--help", () => {
  // 使用 figlet 绘制 Logo
  console.log(
    figlet.textSync("WJX  CLI", {
      font: "Standard",
      horizontalLayout: "fitted",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
  // 新增说明信息
  console.log(`\r\nRun ${chalk.cyan(`wjx <command> --help`)} show details\r\n`);
});

program.parse(process.argv);

// try {
//   var app = new App(process.argv, process.cwd());
// } catch (err) {
//   process.exit(1);
// }

// app
//   .run()
//   .then((code) => {
//     end();
//     process.exit(code);
//   })
//   .catch((err) => {
//     console.error(err);
//     end();
//     process.exit(1);
//   });
