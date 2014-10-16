var assert = require('assert');
var Backbone = require('backbone-1.1.x');

assert(/^1\.1\.\d$/.test(Backbone.VERSION));
