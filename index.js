const { DateTime } = require('luxon');

module.exports = function(tz, withPrefix = false) {
  const time = DateTime.local().setZone(tz)
  if (time.toString() === 'Invalid DateTime') return false;
  return ((withPrefix) ? 'UTC' : '') + time.toFormat('Z');
}
