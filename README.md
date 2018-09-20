CKEditor 5 classic editor build
========================================


[![npm version](https://badge.fury.io/js/%40samhammer%2Fhd-ckeditor5-build-classic.svg)](https://www.npmjs.com/package/@samhammer/hd-ckeditor5-build-classic)

The classic editor build for HD.

## Installation

First, install the build from npm:

```bash
npm install --save @samhammer/hd-ckeditor5-build-classic
```

Use it in your JavaScript application:

```js
import ClassicEditor from '@samhammer/hd-ckeditor5-build-classic';

// Or using the CommonJS version:
// const ClassicEditor = require( '@ckeditor/ckeditor5-build-classic' );

ClassicEditor
	.create( document.querySelector( '#editor' ) )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( err => {
		console.error( err.stack );
	} );
```


## Local development

To test your changes to this build locally with the application you can use [npm link](https://docs.npmjs.com/cli/link).


## Publish new version

1. Apply all changes to the source files.
2. Run `npm run build`.
3. The compiled files are located in the "build" folder now.
4. Raise the version-number in package.json.
5. Commit all changes and create a git tag with the specific version number.
6. Run `npm publish --access public` to publish the compiled source as new package version to npm. This step can only be done from a member of the "Samhammer" npm Org.
7. Install the new package version in the application as dependency.


## License

Licensed under the terms of [GNU General Public License Version 2 or later](http://www.gnu.org/licenses/gpl.html). For full details about the license, please check the `LICENSE.md` file.
