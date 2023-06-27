#!/usr/bin/env node

import App from "./App";
import CliHelper from "./utils/CliHelper";

(async () => {
    let cliHelper = new CliHelper()
    const argv = await cliHelper.getArgv();
    let userConfig = await cliHelper.getConfig(argv);

    console.log('Starting code-narrator')

    let app = new App();
    await app.run(userConfig);

})().catch((e: any) => {
    console.error(e);
});