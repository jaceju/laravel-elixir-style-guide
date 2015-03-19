# laravel-elixir-style-guide

Build style guide with [Hologram](https://github.com/trulia/hologram) and [groo-theme](https://github.com/jaceju/groot-theme).

## Install

```sh
$ npm install laravel-elixir-style-guide --save-dev
$ bower install groot-theme --save
```

## Usage

Create the `hologram.yml` in root path:

```yaml
source: ./resources/assets/less
destination: ./docs/style-guide
documentation_assets: ./public/bower_components/groot-theme
dependencies:
  - ./public/images
css_include:
  - 'css/vendor.css'
  - 'css/main.css'
js_include:
  - 'js/vendor.js'
  - 'js/index.js'
```

Add document block in each style file, for example:

<pre lang="less">
/*doc
---
title: "Color"
name: basic-color
category: "Basics"
---

Proin nec justo faucibus, pulvinar dolor vitae, tristique est.

```html_example
&lt;p&gt;Vestibulum at quam fermentum, accumsan odio sit amet, varius justo.&lt;/p&gt;
&lt;p&gt;Nullam venenatis neque non sem accumsan, vitae laoreet urna condimentum.&lt;/p&gt;
```

Phasellus auctor egestas auctor. Aliquam a neque a nunc tincidunt sodales sit amet a sapien.

In hac habitasse platea dictumst.
*/
</pre>

And create a `index.md` file in style folder (ex: `resources/assets/less`):

```md
# Style Guide

... Description of style guide ...
```

Then invoke the `styelGuide` extension in your `gulpfile.js`:

```javascript
var elixir = require('laravel-elixir');
require('laravel-elixir-style-guide');

elixir(function(mix) {
  mix.styleGuide();
});
```

Finally run gulp tasks:

```bash
gulp
```

Or rebuild style-guide only:

```bash
gulp style-guide
```

## License

MIT
