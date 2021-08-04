## escpos-roach
To be used with [Roach](https://github.com/sanchezand/roach) escpos server.

#### Printer(address)
```javascript
const Printer = require('escpos-roach');
const printer = new Printer('http://localhost:3000'); // or whatever your Roach server is on.

printer.font('a')
	.align('ct')
	.style('bu')
	.size(0,0)
	.text('The quick brown fox jumps over the lazy dog')
	.table(["One", "Two", "Three"])
	.tableCustom(
		[
		{ text:"Left", align:"LEFT", width:0.33, style: 'B' },
		{ text:"Center", align:"CENTER", width:0.33},
		{ text:"Right", align:"RIGHT", width:0.33 }
		],
		{ encoding: 'cp857', size: [1, 1] } // Optional
	)
	.qrimage('https://github.com/song940/node-escpos').cut().close();
```
