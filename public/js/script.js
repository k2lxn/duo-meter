$( document ).ready( function() {

	var max = $( "progress" ).attr("max");
	console.log(max);

	var val = $( "progress" ).val();
	console.log(val);

	var val_remining = (max - val);

	var total_width = $( "progress" ).innerWidth();

	var left = ( Math.round((((val/max)/2 ) * total_width) - 30 )) + "px";
	console.log( left );

	var right = ( Math.round(((((max - val)/max)/2 ) * total_width) - 30 )) + "px";
	console.log( right );

	var div = $( "progress" )[0];
	div.pseudoStyle("before","left",left);
	//div.pseudoStyle("before","data-content",val.toString();
	div.pseudoStyle("after","right",right);
	//div.pseudoStyle("after","data-content",val_remining.toString());


});

// Funtion borrowed from http://mcgivery.com/htmlelement-pseudostyle-settingmodifying-before-and-after-in-javascript/
(function(){a={_b:0,c:function(){this._b++;return this.b;}};HTMLElement.prototype.pseudoStyle=function(d,e,f){var g="pseudoStyles";var h=document.head||document.getElementsByTagName('head')[0];var i=document.getElementById(g)||document.createElement('style');i.id=g;var j="pseudoStyle"+a.c();this.className+=" "+j;i.innerHTML+=" ."+j+":"+d+"{"+e+":"+f+"}";h.appendChild(i);return this;};})();

