/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageInsert from '@ckeditor/ckeditor5-image/src/imageinsert';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import RemoveFormat from '@ckeditor/ckeditor5-remove-format/src/removeformat';
import SimpleUploadImagePlugin from '@samhammer/ckeditor5-simple-image-upload-plugin/src/simple-upload-image-plugin';
import SimpleButton from '@samhammer/ckeditor5-simple-button-plugin/src/simple-button-plugin';
import FontColor from '@ckeditor/ckeditor5-font/src/fontcolor';
import FontBackgroundColor from '@ckeditor/ckeditor5-font/src/fontbackgroundcolor';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	SimpleUploadImagePlugin,
	Alignment,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Image,
	ImageStyle,
	ImageToolbar,
	ImageInsert,
	Link,
	List,
	Table,
	TableToolbar,
	RemoveFormat,
	SimpleButton,
	FontColor,
	FontBackgroundColor
];
