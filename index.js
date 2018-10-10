// Write your solution in this file!

const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value});
}

// returns an driver with the original key value pairs and the new key value pair
//  THIS IS IN MY NOTES - HOW TO CREATE IN NON DESTRUCTIVE WAY 

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// straightforward Update job

function deleteFromDriverByKey(driver, key) {
    const new_driver = Object.assign({}, driver);

    delete new_driver[key];
    // why do we need to use the bracket notation here?
    return new_driver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];

    return driver;

}