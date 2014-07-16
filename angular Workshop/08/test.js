// Dokumentation
// https://github.com/angular/protractor/blob/master/docs/getting-started.md

describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    // Load the AngularJS homepage.
    browser.get('http://www.angularjs.org');

    // Find the element with ng-model matching 'yourName' - this will
    // find the <input type="text" ng-model="yourName"/> element - and then
    // type 'Jonathan' into it.
    element(by.model('yourName')).sendKeys('Jonathan');

    // Find the element with binding matching 'yourName' - this will
    // find the <h1>Hello {{yourName}}!</h1> element.
    var greeting = element(by.binding('yourName'));

    // Assert that the text element has the expected value.
    // Protractor patches 'expect' to understand promises.
    expect(greeting.getText()).toEqual('Hello Jonathan!');
  });
});
