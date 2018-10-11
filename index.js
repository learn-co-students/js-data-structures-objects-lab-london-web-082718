// Write your solution in this file!
var driver = {}

function updateDriverWithKeyAndValue(driverValue, key, value) {
  return Object.assign({}, driverValue, {[key]:value})
}

function destructivelyUpdateDriverWithKeyAndValue(driverValue, key, value) {
  return Object.assign(driverValue, {[key]:value})
}

function deleteFromDriverByKey(driverValue, key) {
  newDriver = delete driverValue.key
  return newDriver
}

function destructivelyDeleteFromDriverByKey(driverValue, key) {
  driver = delete driverValue.key
  return driver
}
