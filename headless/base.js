class baseHeadless() {

    constructor() {
         const browser = await puppeteer.launch({
            headless: false // "false" is set to see bot in action
           });
    }
}