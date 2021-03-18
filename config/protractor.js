// config/protractor.js

exports.config = {
    specs: ['../test/e2e/**/*Spec.js'],
    onPrepare: function() {
        browser.ignoreSynchronization = true;
        browser.driver.get('http://localhost:3000');
        browser.driver.findElement(by.id('entrar')).click();
        browser.driver.findElement(by.id('login_field'))
            .sendKeys('viniciusseus@gmail.com');
        browser.driver.findElement(by.id('password'))
            .sendKeys('V&rmelho1112');
        browser.driver.findElement(by.name('commit')).click();
    }
}