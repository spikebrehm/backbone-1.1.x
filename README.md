backbone-1.1.x
==============

A package that exports `backbone@1.1.x`, to allow including multiple versions
of Backbone in an app via NPM.

## Why? Isn't this a terrible anti-pattern?

Yep! It sure is. But, NPM doesn't by default allow including multiple versions
of Backbone in the same project, for example, `0.9.10` and `1.1.2`. This is a
terrible hack that makes this possible, by allowing this in a Node program or
Browserify bundle. Let's say your `package.json`'s `dependencies` field contains this:

    "backbone": "0.9.10",
    "backbone-1.1.x": "0.1.0",

Now, in the part of your app that needs `backbone@0.9.10`:

    var Backbone = require('backbone');

And in the part of your app that needs `backbone@1.1.2`:

    var Backbone = require('backbone-1.1.x');
