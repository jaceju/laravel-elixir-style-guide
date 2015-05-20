'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var hologram = require('gulp-hologram');
var fs = require('fs');
var taskName = 'style-guide';

elixir.extend('styleGuide', function (options) {

    options = options || {};

    var config = 'hologram.yml';

    if (options.config) {
        config = options.config;
        delete options.config;
    }

    var opts = _.extend({
        bundler: fs.existsSync('.bundle')
    }, options);

    gulp.task(taskName, function () {
        return gulp.src(config)
            .pipe(hologram(opts));
    });

    return this.queueTask(taskName);
});
