const puppeteer = require('puppeteer');
const CREDS = require('./creds')

async function run() {
  const browser = await puppeteer.launch({
    headless: false, // "false" is set to see bot in action
    args: ["--disable-notifications"]
  });
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com');
  // await page.screenshot({ path: 'screenshots/github.png' });

  // dom element selectors for login page
  const USERNAME_SELECTOR = '#email';
  const PASSWORD_SELECTOR = '#pass';
  const BUTTON_SELECTOR = '[value="Log In"]';
  const LIKE_BTN_SELECTOR = '.likeButton'
  const NAV_BAR_SELECTOR = '#userNavigationLabel'
  const LOG_OUT_SELECTOR = 'form[action="https://www.facebook.com/login/device-based/regular/logout/?button_name=logout&button_location=settings"]'
  const RECURSHIP_PAGE_URI = 'https://www.facebook.com/recurship/'
  // Performing login action
  await page.click(USERNAME_SELECTOR);
  await page.keyboard.type(CREDS.username);
  await page.click(PASSWORD_SELECTOR);
  await page.keyboard.type(CREDS.password);
  await page.click(BUTTON_SELECTOR);

  await page.waitForNavigation();

  await page.goto(RECURSHIP_PAGE_URI)


  await page.click(LIKE_BTN_SELECTOR);

  await page.click(NAV_BAR_SELECTOR)
  await page.click(LOG_OUT_SELECTOR)

  //browser.close()
 }

run();
