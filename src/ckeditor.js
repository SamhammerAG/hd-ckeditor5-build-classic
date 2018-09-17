/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import SimpleUploadImagePlugin from '@samhammer/ckeditor5-simple-image-upload-plugin/src/simple-upload-image-plugin';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	SimpleUploadImagePlugin,
	Alignment,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Heading,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Table,
	TableToolbar,
	Paragraph
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'alignment',
			'|',
			'bulletedList',
			'numberedList',
			'|',
			'link',
			'imageUpload',
			'insertTable',
			'|',
			'undo',
			'redo'
		]
	},
	alignment: {
		options: ['left', 'center', 'right', 'justify']
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side'
		]
	},
	table: {
		toolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
