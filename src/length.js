import { Length, length } from './lib/length';
import { to, add, getString, getUnit, getValue, toPrecision } from './lib/functions';

// Initialize Length object prototype.
var proto = Length.prototype = {};

// Current length.js version.
proto.version = '0.0.7';

// Insert functions into Length object prototype.
proto.to = to;
proto.add = add;
proto.getValue = getValue;
proto.getUnit = getUnit;
proto.getString = getString;
proto.toString = getString;
proto.toPrecision = toPrecision;

// Expose Length prototype if user wants to add new functions.
length.fn = proto;

export default length;
