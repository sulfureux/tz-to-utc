# TZ to UTC

> Convert TZ to UTC number

## Install

```
npm install tz-to-utc
```

## Usage

### parameters

| Field      |                             | Description                      |
|------------|-----------------------------|----------------------------------|
|`tz`        | Required                    | Timezone (`America/Los_Angeles`) |
|`withPrefix`| Optional (default: `false`) | Prefix `UTC` or not              |


```js
const tzToUtc = require('tz-to-utc');

let tz = 'America/Los_Angeles'
let utc = tzToUtc(tz, true)

if (utc) {
  console.log(`UTC: ${utc}`)
} else {
  // Invalid TimeZone
}

console.log(tzToUtc('America/Los_Angeles')) // return: -8
console.log(tzToUtc('Asia/Ho_Chi_Minh')) // return: +7
console.log(tzToUtc('Asia/Ha_Noi')) // Invalid TimeZone, return false
console.log(tzToUtc('Asia/Tokyo', true)) // return: UTC+9

```

## License

MIT