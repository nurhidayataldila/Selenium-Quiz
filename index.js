const { Builder, By, Key, util } = require("selenium-webdriver");
const assert = require('assert');

async function testcasequiz() {
  
  //buka browser
  // var assert = require('assert');
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    // buka url google
    await driver.get("https://s2.demo.opensourcecms.com/orangehrm/symfony/web/index.php/auth/login");
    // await driver.findElement(By.linkText("3. Add a User")).click();
    await driver.findElement(By.id("txtUsername")).sendKeys("opensourcecms");
    await driver.findElement(By.id("txtPassword")).sendKeys("opensourcecms");
    await driver.findElement(By.name("Submit")).click();

    const getLi = await driver.findElement(By.xpath("//li")).getText();
    assert.equal(getLi, "Welcome Admin", "Gagal");
    console.log("Sukses");
  } catch (error) {
    console.log(error);
  }
}

testcasequiz();
