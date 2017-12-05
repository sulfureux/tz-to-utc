const tzToUtc = require('./index')

console.log(tzToUtc('America/Los_Angeles'))
console.log(tzToUtc('Asia/Ho_Chi_Minh'))
console.log(tzToUtc('Asia/Ha_Noi')) // Invalid DateTime
console.log(tzToUtc('Asia/Tokyo', true))
