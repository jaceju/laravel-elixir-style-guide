'use strict';

var gulp = require('gulp');
var elixir = require('laravel-elixir');
var _ = require('underscore');
var hologram = require('gulp-hologram');
var fs = require('fs');

elixir.extend('styleGuide', function (options) {

    options = _.extend({
        config: 'hologram.yml'
    }, options);

    gulp.task('style-guide', function (cb) {
        return gulp.src(options.config)
            .pipe(hologram({
                bundler: fs.existsSync('.bundle')
            }));
    });

    return this.queueTask('style-guide');
});
