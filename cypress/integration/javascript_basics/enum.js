const browsers = {
    CHROME: 'chrome',
    FF: 'firefox',
    EDGE: 'Edge',
    Safari: 'safari'
}

let browser = browsers.CHROME;

function execute() {
    switch (browser) {
        case browsers.CHROME:
            console.log('execute chrome');
            break;

        case browsers.FF:
            console.log('execute firefox');
            break;

        case browsers.EDGE:
            console.log('execute Edge');
            break;

        case browsers.Safari:
            console.log('execute safari');
            break;
    }
}

console.log(execute());