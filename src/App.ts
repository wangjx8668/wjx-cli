export default class App {
  appArgs: string[];
  cwd: string;
  command: string;
  constructor(args: string[], cwd: string) {
    this.appArgs = args;
    this.cwd = cwd;
    this.command = this.appArgs[0];
  }

  async run(): Promise<number> {
    return 0;
  }
}
