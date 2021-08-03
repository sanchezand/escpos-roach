const axios = require('axios').default;

/**
* [function ESC/POS Printer]
* @param  {String} address [Address of the printer]
* @return {Printer} printer  [the escpos printer instance]
*/
function Printer(address) {
	if (!(this instanceof Printer)) {
		return new Printer(adapter);
	}
	this._address = address;
	this._cmds = [];
};

/**
* Set printer model to recognize model-specific commands.
* Supported models: [ null, 'qsprinter' ]
*
* For generic printers, set model to null
*
* [function set printer model]
* @param  {String}  model [mandatory]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.model = function (_model) {
	this._cmds.push([['model', [_model]]]);
	return this;
};

/**
* Set character code table
* @param  {Number} codeTable
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.setCharacterCodeTable = function (codeTable) {
	this._cmds.push([['setCharacterCodeTable', [codeTable]]]);
	return this;
};

/**
* Fix bottom margin
* @param  {String} size
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.marginBottom = function (size) {
	this._cmds.push([['marginBottom', [size]]]);
	return this;
};

/**
* Fix left margin
* @param  {String} size
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.marginLeft = function (size) {
	this._cmds.push(['marginLeft', [size]]);
	return this;
};

/**
* Fix right margin
* @param  {String} size
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.marginRight = function (size) {
	this._cmds.push(['marginRight', [size]]);
	return this;
};

/**
* [function print]
* @param  {String}  content  [mandatory]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.print = function (content) {
	this._cmds.push(['content', [content]]);
	return this;
};
/**
* [function print pure content with End Of Line]
* @param  {String}  content  [mandatory]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.println = function (content) {
	this._cmds.push(['println', [content]]);
	return this;
};

/**
* [function print pure content with End Of Line]
* @param  {String}  content  [mandatory]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.newLine = function () {
	this._cmds.push(['newLine']);
	return this;
};

/**
* [function Print encoded alpha-numeric text with End Of Line]
* @param  {String}  content  [mandatory]
* @param  {String}  encoding [optional]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.text = function (content, encoding) {
	this._cmds.push(['text', [content, encoding]]);
	return this;
};


/**
* [function Print draw line End Of Line]
* @param  {String}  character [optional]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.drawLine = function (character) {
	this._cmds.push(['drawLine', [character]]);
	return this;
};



/**
* [function Print  table   with End Of Line]
* @param  {List}  data  [mandatory]
* @param  {String}  encoding [optional]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.table = function (data, encoding) {
	this._cmds.push(['table', [data, encoding]]);
	return this;
};

/**
* [function Print  custom table  with End Of Line]
* @param  {List}  data  [mandatory]
* @param  {String}  encoding [optional]
* @param  {Array}  size [optional]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.tableCustom = function (data, options = {}) {
	this._cmds.push(['tableCustom', [data, options]]);
	return this
}


/**
* [function Print encoded alpha-numeric text without End Of Line]
* @param  {String}  content  [mandatory]
* @param  {String}  encoding [optional]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.pureText = function (content, encoding) {
	this._cmds.push(['pureText', [content, encoding]]);
	return this;
};

/**
* [function encode text]
* @param  {String}  encoding [mandatory]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.encode = function (encoding) {
	this._cmds.push(['encode', [encoding]]);
	return this;
}

/**
* [line feed]
* @param  {type}    lines   [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.feed = function (n) {
	this._cmds.push(['feed', [n]]);
	return this;
};

/**
* [feed control sequences]
* @param  {type}    ctrl     [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.control = function (ctrl) {
	this._cmds.push(['control', [ctrl]]);
	return this;
};
/**
* [text align]
* @param  {type}    align    [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.align = function (align) {
	this._cmds.push(['align', [align]]);
	return this;
};
/**
* [font family]
* @param  {type}    family  [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.font = function (family) {
	this._cmds.push(['font', [family]]);
	return this;
};

/**
* [font style]
* @param  {type}    type     [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.style = function (type) {
	this._cmds.push(['style', [type]]);
	return this;
};

/**
* [font size]
* @param  {String}  width   [description]
* @param  {String}  height  [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.size = function (width, height) {
	this._cmds.push(['size', [width, height]]);
	return this;
};

/**
* [set character spacing]
* @param  {type}    n     [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.spacing = function (n) {
	this._cmds.push(['spacing', [n]]);
	return this;
}

/**
* [set line spacing]
* @param  {type} n [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.lineSpace = function (n) {
	this._cmds.push(['lineSpace', [n]]);
	return this;
};

/**
* [hardware]
* @param  {type}    hw       [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.hardware = function (hw) {
	this._cmds.push(['hardware', [hw]]);
	return this;
};
/**
* [barcode]
* @param  {type}    code     [description]
* @param  {type}    type     [description]
* @param  {type}    options  [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.barcode = function (code, type, options) {
	this._cmds.push(['barcode', [code, type, options]]);
	return this;
};

/**
* [print qrcode]
* @param  {type} code    [description]
* @param  {type} version [description]
* @param  {type} level   [description]
* @param  {type} size    [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.qrcode = function (code, version, level, size) {
	this._cmds.push(['qrcode', [code, version, level, size]]);
	return this;
};

/**
* [print qrcode image]
* @param  {type}   content  [description]
* @param  {type}   options  [description]
* @param  {Function} callback [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.qrimage = function (content, options) {
	this._cmds.push(['qrimage', [content, options]]);
	return this;
};

/**
* [image description]
* @param  {type} image   [description]
* @param  {type} density [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.image = async function (image, density) {
	this._cmds.push(['image', [image, density]]);
	return this;
};

/**
* [raster description]
* @param  {type} image [description]
* @param  {type} mode  [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.raster = function (image, mode) {
	this._cmds.push(['raster', [image, mode]]);
	return this;
};

/**
* [function Send pulse to kick the cash drawer]
* @param  {type} pin [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.cashdraw = function (pin) {
	this._cmds.push(['cashdraw', [pin]]);
	return this;
};

/**
* Printer Buzzer (Beep sound)
* @param  {Number} n Refers to the number of buzzer times
* @param  {Number} t Refers to the buzzer sound length in (t * 100) milliseconds.
*/
Printer.prototype.beep = function (n, t) {
	this._cmds.push(['beep', [n, t]]);
	return this;
};

/**
* Send data to hardware and flush buffer
* @param  {Function} callback
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.flush = async function () {
	this._cmds.push(['flush', []]);
	var opts = [...this._cmds];
	this._cmds = [];
	var res = await axios.post(this._address, { opts });
	if(res.data.error){
		throw new Error(res.data.message || 'Unepected error with roach.')
	}
	return this;
};

/**
* [function Cut paper]
* @param  {type} part [description]
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.cut = function (part, feed) {
	this._cmds.push(['cut', [part, feed]]);
	return this;
};

/**
* [close description]
* @param  {Function} callback [description]
* @param  {type}   options  [description]
* @return {type}            [description]
*/
Printer.prototype.close = async function () {
	return this.flush();
};

/**
* [color select between two print color modes, if your printer supports it]
* @param  {Number} color - 0 for primary color (black) 1 for secondary color (red)
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.color = function (color) {
	this._cmds.push(['color', [color]]);
	return this;
};

/**
* [reverse colors, if your printer supports it]
* @param {Boolean} bool - True for reverse, false otherwise
* @return {Printer} printer  [the escpos printer instance]
*/
Printer.prototype.setReverseColors = function (bool) {
	this._cmds.push(['setReverseColors', [bool]]);
	return this;
};


/**
* [writes a low level command to the printer buffer]
*
* @usage
* 1) raw('1d:77:06:1d:6b:02:32:32:30:30:30:30:32:30:30:30:35:30:35:00:0a')
* 2) raw('1d 77 06 1d 6b 02 32 32 30 30 30 30 32 30 30 30 35 30 35 00 0a')
* 3) raw(Buffer.from('1d77061d6b0232323030303032303030353035000a','hex'))
*
* @param data {Buffer|string}
* @returns {Printer}
*/
Printer.prototype.raw = function raw(data) {
	this._cmds.push(['raw', [data]]);
	return this;
};

module.exports = Printer;
