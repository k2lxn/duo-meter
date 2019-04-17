$( document ).ready( function() {

	var max = $( "progress" ).attr("max");
	var val = $( "progress" ).val();
	var total_width = $( "progress" ).innerWidth();
	var left = ( Math.round((((val/max)/2 ) * total_width) - 30 )) + "px";
	var right = ( Math.round(((((max - val)/max)/2 ) * total_width) - 30 )) + "px";

	var val_string = ( "\"" + val + "\"" );
	var val_remaining = ( "\"" + (max - val) + "\"");


	var div = $( "progress" )[0];
	div.pseudoStyle("before","content",val_string);
	div.pseudoStyle("before","left",left);
	div.pseudoStyle("after","content",val_remaining);
	div.pseudoStyle("after","right",right);



});

// Funtion borrowed from http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/
(function(){a={_b:0,c:function(){this._b++;return this.b;}};HTMLElement.prototype.pseudoStyle=function(d,e,f){var g="pseudoStyles";var h=document.head||document.getElementsByTagName('head')[0];var i=document.getElementById(g)||document.createElement('style');i.id=g;var j="pseudoStyle"+a.c();this.className+=" "+j;i.innerHTML+=" ."+j+":"+d+"{"+e+":"+f+"}";h.appendChild(i);return this;};})();

