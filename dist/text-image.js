module.exports=function(a,t){var e,o=require("fs"),y=a.createElement("pre"),c=a.createElement("canvas"),d=c.getContext("2d"),g={font:"Sans-serif",align:"left",color:"#000000",size:16,background:"rgba(0, 0, 0, 0)",stroke:0,strokeColor:"#FFFFFF",lineHeight:"1.2em",bold:!1,italic:!1};function h(t){t=(t=String(t)).replace(/\\n/g,"\n"),y.innerHTML=t,y.innerText=t,y.setAttribute("style",this._style),a.body.append(y);var i,e=t.split("\n"),s=this.style.stroke,l=y.offsetHeight/e.length||this.style.size,n=this.style.paddingTop||2*this.style.size,o=this.style.paddingLeft||n,h=.1*l;c.width=y.offsetWidth+function(t){var e,i=0,s=-1;for(e in t)t[e].length>i&&(i=t[s=e].length);return t[s].length}(e)*(.6*this.style.size),c.height=y.offsetHeight||g.size*e.length,c.width+=2*o,c.height+=2*n,d.clearRect(0,0,c.width,c.height),d.fillStyle=this.style.background,d.beginPath(),d.fillRect(0,0,c.width,c.height),d.fill();var r="";switch(this.style.italic&&(r+="italic "),this.style.bold&&(r+="bold "),r+=this.style.size+"px "+this.style.font,d.font=r,d.textAlign=this.style.align,d.lineWidth=this.style.stroke,d.strokeStyle=this.style.strokeColor,d.fillStyle=this.style.color,d.textAlign){case"center":s=c.width/2;break;case"right":s=c.width-(s+o);break;case"left":s+=o}i=(c.height-l*e.length)/2,e.forEach(function(t,e){this.style.stroke&&d.strokeText(t,s,l*(e+1)-h),d.fillText(t,s,l*(e+1)-h+i)}.bind(this)),d.fill(),a.body.removeChild(y)}return(e=function(t){return this instanceof e?(this.setStyle(t),this):new e(t)}).prototype.setStyle=function(t){for(var e in this.style=t||{},this.style.paddingTop=0,this.style.paddingLeft=0,g)this.style[e]||(this.style[e]=g[e]);return this._style="font: ",this.style.italic&&(this._style+="italic "),this.style.bold&&(this._style+="bold "),this._style+=this.style.size+"px "+this.style.font+";",this._style+="line-height:"+this.style.lineHeight+";",this._style+="text-align: "+this.style.align+";",this._style+="color: "+this.style.color+";",this._style+="background-color: "+this.style.background+";",this._style+=";padding: 10x; display: block; position: fixed; top: 100%; overflow: hidden;",this},e.prototype.setPadding=function(t,e){this.style.paddingLeft=t,this.style.paddingTop=e},e.prototype.toDataURL=function(t){return t&&h.call(this,t),c.toDataURL()},e.prototype.toImage=function(t,e){h.call(this,t);var i=new Image;return e&&(i.onload=e),i.src=c.toDataURL(),i},e.prototype.toFile=function(t,e,i){h.call(this,t);var s=new Image;s.src=c.toDataURL();var l=s.src.replace(/^data:image\/\w+;base64,/,""),n=new Buffer(l,"base64");o.writeFile(e,n,function(t,e){if(t)throw t;i&&i()})},t.TextImage=e};