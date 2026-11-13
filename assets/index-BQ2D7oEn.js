const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hub-CiUZ4RIf.js","./minigames-DEPAC5jg.js","./decor-k-5cayOr.js","./polina-DGipJA-f.js","./common-DzN2v4Zp.js","./ruben-CE8x-Y0-.js","./matvey-CLaHpyrK.js","./erika-BCLDhCmo.js","./lisa-DTROqQhs.js","./angelina-DPvaPN7U.js","./finale-k4FfX_RW.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Ju="modulepreload",Qu=function(i,t){return new URL(i,t).href},ql={},Vn=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(h=>{if(h=Qu(h,n),h in ql)return;ql[h]=!0;const l=h.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===h&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${d}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Ju,l||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),l)return new Promise((g,v)=>{m.addEventListener("load",g),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cl="169",tf=0,Xl=1,ef=2,hl=1,nf=2,Wn=3,li=0,ln=1,Pe=2,kn=0,Ti=1,Ai=2,Yl=3,jl=4,sf=5,Si=100,rf=101,af=102,of=103,lf=104,cf=200,hf=201,uf=202,ff=203,fo=204,po=205,df=206,pf=207,mf=208,gf=209,vf=210,_f=211,xf=212,yf=213,bf=214,mo=0,go=1,vo=2,cs=3,_o=4,xo=5,yo=6,bo=7,ul=0,Sf=1,Mf=2,oi=0,Dh=1,Ih=2,Uh=3,fl=4,wf=5,kh=6,Nh=7,Fh=300,hs=301,us=302,So=303,Mo=304,ca=306,fs=1e3,Ci=1001,wo=1002,Ne=1003,Cf=1004,rr=1005,En=1006,ba=1007,Ei=1008,Kn=1009,Oh=1010,Bh=1011,Ys=1012,dl=1013,Li=1014,Un=1015,Ln=1016,pl=1017,ml=1018,ds=1020,zh=35902,Hh=1021,Gh=1022,Tn=1023,Wh=1024,$h=1025,as=1026,ps=1027,gl=1028,vl=1029,qh=1030,_l=1031,xl=1033,Hr=33776,Gr=33777,Wr=33778,$r=33779,Co=35840,Eo=35841,To=35842,Ao=35843,Lo=36196,Ro=37492,Po=37496,Vo=37808,Do=37809,Io=37810,Uo=37811,ko=37812,No=37813,Fo=37814,Oo=37815,Bo=37816,zo=37817,Ho=37818,Go=37819,Wo=37820,$o=37821,qr=36492,qo=36494,Xo=36495,Xh=36283,Yo=36284,jo=36285,Ko=36286,Ef=3200,Yh=3201,yl=0,Tf=1,ri="",pn="srgb",ci="srgb-linear",bl="display-p3",ha="display-p3-linear",ta="linear",_e="srgb",ea="rec709",na="p3",Ii=7680,Kl=519,Af=512,Lf=513,Rf=514,jh=515,Pf=516,Vf=517,Df=518,If=519,Zo=35044,Zl="300 es",Yn=2e3,ia=2001;class ys{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,sa=180/Math.PI;function jn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ye[i&255]+Ye[i>>8&255]+Ye[i>>16&255]+Ye[i>>24&255]+"-"+Ye[t&255]+Ye[t>>8&255]+"-"+Ye[t>>16&15|64]+Ye[t>>24&255]+"-"+Ye[e&63|128]+Ye[e>>8&255]+"-"+Ye[e>>16&255]+Ye[e>>24&255]+Ye[n&255]+Ye[n>>8&255]+Ye[n>>16&255]+Ye[n>>24&255]).toLowerCase()}function We(i,t,e){return Math.max(t,Math.min(e,i))}function Uf(i,t){return(i%t+t)%t}function Ma(i,t,e){return(1-e)*i+e*t}function In(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function me(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class at{constructor(t=0,e=0){at.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class te{constructor(t,e,n,s,r,a,o,c,h){te.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],d=n[7],p=n[2],m=n[5],g=n[8],v=s[0],u=s[3],f=s[6],_=s[1],x=s[4],b=s[7],U=s[2],E=s[5],R=s[8];return r[0]=a*v+o*_+c*U,r[3]=a*u+o*x+c*E,r[6]=a*f+o*b+c*R,r[1]=h*v+l*_+d*U,r[4]=h*u+l*x+d*E,r[7]=h*f+l*b+d*R,r[2]=p*v+m*_+g*U,r[5]=p*u+m*x+g*E,r[8]=p*f+m*b+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=l*a-o*h,p=o*c-l*r,m=h*r-a*c,g=e*d+n*p+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=d*v,t[1]=(s*h-l*n)*v,t[2]=(o*n-s*a)*v,t[3]=p*v,t[4]=(l*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(wa.makeScale(t,e)),this}rotate(t){return this.premultiply(wa.makeRotation(-t)),this}translate(t,e){return this.premultiply(wa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wa=new te;function Kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kf(){const i=js("canvas");return i.style.display="block",i}const Jl={};function Xr(i){i in Jl||(Jl[i]=!0,console.warn(i))}function Nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ff(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Of(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ql=new te().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),tc=new te().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ss={[ci]:{transfer:ta,primaries:ea,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[pn]:{transfer:_e,primaries:ea,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ha]:{transfer:ta,primaries:na,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(tc),fromReference:i=>i.applyMatrix3(Ql)},[bl]:{transfer:_e,primaries:na,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(tc),fromReference:i=>i.applyMatrix3(Ql).convertLinearToSRGB()}},Bf=new Set([ci,ha]),le={enabled:!0,_workingColorSpace:ci,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Bf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Ss[t].toReference,s=Ss[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Ss[i].primaries},getTransfer:function(i){return i===ri?ta:Ss[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Ss[t].luminanceCoefficients)}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ca(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ui;class zf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ui===void 0&&(Ui=js("canvas")),Ui.width=t.width,Ui.height=t.height;const n=Ui.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ui}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Hf=0;class Zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ea(s[a].image)):r.push(Ea(s[a]))}else r=Ea(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ea(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?zf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gf=0;class Xe extends ys{constructor(t=Xe.DEFAULT_IMAGE,e=Xe.DEFAULT_MAPPING,n=Ci,s=Ci,r=En,a=Ei,o=Tn,c=Kn,h=Xe.DEFAULT_ANISOTROPY,l=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=jn(),this.name="",this.source=new Zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case wo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case wo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xe.DEFAULT_IMAGE=null;Xe.DEFAULT_MAPPING=Fh;Xe.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],l=c[4],d=c[8],p=c[1],m=c[5],g=c[9],v=c[2],u=c[6],f=c[10];if(Math.abs(l-p)<.01&&Math.abs(d-v)<.01&&Math.abs(g-u)<.01){if(Math.abs(l+p)<.1&&Math.abs(d+v)<.1&&Math.abs(g+u)<.1&&Math.abs(h+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(h+1)/2,b=(m+1)/2,U=(f+1)/2,E=(l+p)/4,R=(d+v)/4,P=(g+u)/4;return x>b&&x>U?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=E/n,r=R/n):b>U?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=E/s,r=P/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=P/r),this.set(n,s,r,e),this}let _=Math.sqrt((u-g)*(u-g)+(d-v)*(d-v)+(p-l)*(p-l));return Math.abs(_)<.001&&(_=1),this.x=(u-g)/_,this.y=(d-v)/_,this.z=(p-l)/_,this.w=Math.acos((h+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wf extends ys{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Xe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Zh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mn extends Wf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Jh extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class $f extends Xe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],d=n[s+3];const p=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d;return}if(o===1){t[e+0]=p,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(d!==v||c!==p||h!==m||l!==g){let u=1-o;const f=c*p+h*m+l*g+d*v,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const U=Math.sqrt(x),E=Math.atan2(U,f*_);u=Math.sin(u*E)/U,o=Math.sin(o*E)/U}const b=o*_;if(c=c*u+p*b,h=h*u+m*b,l=l*u+g*b,d=d*u+v*b,u===1-o){const U=1/Math.sqrt(c*c+h*h+l*l+d*d);c*=U,h*=U,l*=U,d*=U}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],d=r[a],p=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+l*d+c*m-h*p,t[e+1]=c*g+l*p+h*d-o*m,t[e+2]=h*g+l*m+o*p-c*d,t[e+3]=l*g-o*d-c*p-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),d=o(r/2),p=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=p*l*d+h*m*g,this._y=h*m*d-p*l*g,this._z=h*l*g+p*m*d,this._w=h*l*d-p*m*g;break;case"YXZ":this._x=p*l*d+h*m*g,this._y=h*m*d-p*l*g,this._z=h*l*g-p*m*d,this._w=h*l*d+p*m*g;break;case"ZXY":this._x=p*l*d-h*m*g,this._y=h*m*d+p*l*g,this._z=h*l*g+p*m*d,this._w=h*l*d-p*m*g;break;case"ZYX":this._x=p*l*d-h*m*g,this._y=h*m*d+p*l*g,this._z=h*l*g-p*m*d,this._w=h*l*d+p*m*g;break;case"YZX":this._x=p*l*d+h*m*g,this._y=h*m*d+p*l*g,this._z=h*l*g-p*m*d,this._w=h*l*d-p*m*g;break;case"XZY":this._x=p*l*d-h*m*g,this._y=h*m*d-p*l*g,this._z=h*l*g+p*m*d,this._w=h*l*d+p*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],d=e[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(l-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(l-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(We(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),d=Math.sin((1-e)*l)/h,p=Math.sin(e*l)/h;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class k{constructor(t=0,e=0,n=0){k.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ec.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ec.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),l=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+c*h+a*d-o*l,this.y=n+c*l+o*h-r*d,this.z=s+c*d+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ta.copy(this).projectOnVector(t),this.sub(Ta)}reflect(t){return this.sub(Ta.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(We(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ta=new k,ec=new tr;class hi{constructor(t=new k(1/0,1/0,1/0),e=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Sn):Sn.fromBufferAttribute(r,a),Sn.applyMatrix4(t.matrixWorld),this.expandByPoint(Sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(t.matrixWorld),this.union(ar)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Sn),Sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ms),or.subVectors(this.max,Ms),ki.subVectors(t.a,Ms),Ni.subVectors(t.b,Ms),Fi.subVectors(t.c,Ms),Qn.subVectors(Ni,ki),ti.subVectors(Fi,Ni),fi.subVectors(ki,Fi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-fi.z,fi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,fi.z,0,-fi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-fi.y,fi.x,0];return!Aa(e,ki,Ni,Fi,or)||(e=[1,0,0,0,1,0,0,0,1],!Aa(e,ki,Ni,Fi,or))?!1:(lr.crossVectors(Qn,ti),e=[lr.x,lr.y,lr.z],Aa(e,ki,Ni,Fi,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(On),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const On=[new k,new k,new k,new k,new k,new k,new k,new k],Sn=new k,ar=new hi,ki=new k,Ni=new k,Fi=new k,Qn=new k,ti=new k,fi=new k,Ms=new k,or=new k,lr=new k,di=new k;function Aa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){di.fromArray(i,r);const o=s.x*Math.abs(di.x)+s.y*Math.abs(di.y)+s.z*Math.abs(di.z),c=t.dot(di),h=e.dot(di),l=n.dot(di);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const qf=new hi,ws=new k,La=new k;class Pi{constructor(t=new k,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):qf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ws.subVectors(t,this.center);const e=ws.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ws,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(La.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ws.copy(t.center).add(La)),this.expandByPoint(ws.copy(t.center).sub(La))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Bn=new k,Ra=new k,cr=new k,ei=new k,Pa=new k,hr=new k,Va=new k;class ua{constructor(t=new k,e=new k(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Bn.copy(this.origin).addScaledVector(this.direction,e),Bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ra.copy(t).add(e).multiplyScalar(.5),cr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(Ra);const r=t.distanceTo(e)*.5,a=-this.direction.dot(cr),o=ei.dot(this.direction),c=-ei.dot(cr),h=ei.lengthSq(),l=Math.abs(1-a*a);let d,p,m,g;if(l>0)if(d=a*c-o,p=a*o-c,g=r*l,d>=0)if(p>=-g)if(p<=g){const v=1/l;d*=v,p*=v,m=d*(d+a*p+2*o)+p*(a*d+p+2*c)+h}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+h;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+h;else p<=-g?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+h):p<=g?(d=0,p=Math.min(Math.max(-r,-c),r),m=p*(p+2*c)+h):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-c),r),m=-d*d+p*(p+2*c)+h);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Ra).addScaledVector(cr,p),m}intersectSphere(t,e){Bn.subVectors(t.center,this.origin);const n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,d=1/this.direction.z,p=this.origin;return h>=0?(n=(t.min.x-p.x)*h,s=(t.max.x-p.x)*h):(n=(t.max.x-p.x)*h,s=(t.min.x-p.x)*h),l>=0?(r=(t.min.y-p.y)*l,a=(t.max.y-p.y)*l):(r=(t.max.y-p.y)*l,a=(t.min.y-p.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-p.z)*d,c=(t.max.z-p.z)*d):(o=(t.max.z-p.z)*d,c=(t.min.z-p.z)*d),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Bn)!==null}intersectTriangle(t,e,n,s,r){Pa.subVectors(e,t),hr.subVectors(n,t),Va.crossVectors(Pa,hr);let a=this.direction.dot(Va),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ei.subVectors(this.origin,t);const c=o*this.direction.dot(hr.crossVectors(ei,hr));if(c<0)return null;const h=o*this.direction.dot(Pa.cross(ei));if(h<0||c+h>a)return null;const l=-o*ei.dot(Va);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,a,o,c,h,l,d,p,m,g,v,u){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,l,d,p,m,g,v,u)}set(t,e,n,s,r,a,o,c,h,l,d,p,m,g,v,u){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=h,f[6]=l,f[10]=d,f[14]=p,f[3]=m,f[7]=g,f[11]=v,f[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Oi.setFromMatrixColumn(t,0).length(),r=1/Oi.setFromMatrixColumn(t,1).length(),a=1/Oi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const p=a*l,m=a*d,g=o*l,v=o*d;e[0]=c*l,e[4]=-c*d,e[8]=h,e[1]=m+g*h,e[5]=p-v*h,e[9]=-o*c,e[2]=v-p*h,e[6]=g+m*h,e[10]=a*c}else if(t.order==="YXZ"){const p=c*l,m=c*d,g=h*l,v=h*d;e[0]=p+v*o,e[4]=g*o-m,e[8]=a*h,e[1]=a*d,e[5]=a*l,e[9]=-o,e[2]=m*o-g,e[6]=v+p*o,e[10]=a*c}else if(t.order==="ZXY"){const p=c*l,m=c*d,g=h*l,v=h*d;e[0]=p-v*o,e[4]=-a*d,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*l,e[9]=v-p*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const p=a*l,m=a*d,g=o*l,v=o*d;e[0]=c*l,e[4]=g*h-m,e[8]=p*h+v,e[1]=c*d,e[5]=v*h+p,e[9]=m*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const p=a*c,m=a*h,g=o*c,v=o*h;e[0]=c*l,e[4]=v-p*d,e[8]=g*d+m,e[1]=d,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=m*d+g,e[10]=p-v*d}else if(t.order==="XZY"){const p=a*c,m=a*h,g=o*c,v=o*h;e[0]=c*l,e[4]=-d,e[8]=h*l,e[1]=p*d+v,e[5]=a*l,e[9]=m*d-g,e[2]=g*d-m,e[6]=o*l,e[10]=v*d+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xf,t,Yf)}lookAt(t,e,n){const s=this.elements;return un.subVectors(t,e),un.lengthSq()===0&&(un.z=1),un.normalize(),ni.crossVectors(n,un),ni.lengthSq()===0&&(Math.abs(n.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),ni.crossVectors(n,un)),ni.normalize(),ur.crossVectors(un,ni),s[0]=ni.x,s[4]=ur.x,s[8]=un.x,s[1]=ni.y,s[5]=ur.y,s[9]=un.y,s[2]=ni.z,s[6]=ur.z,s[10]=un.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],d=n[5],p=n[9],m=n[13],g=n[2],v=n[6],u=n[10],f=n[14],_=n[3],x=n[7],b=n[11],U=n[15],E=s[0],R=s[4],P=s[8],H=s[12],S=s[1],w=s[5],X=s[9],W=s[13],Y=s[2],it=s[6],V=s[10],j=s[14],q=s[3],xt=s[7],Ct=s[11],St=s[15];return r[0]=a*E+o*S+c*Y+h*q,r[4]=a*R+o*w+c*it+h*xt,r[8]=a*P+o*X+c*V+h*Ct,r[12]=a*H+o*W+c*j+h*St,r[1]=l*E+d*S+p*Y+m*q,r[5]=l*R+d*w+p*it+m*xt,r[9]=l*P+d*X+p*V+m*Ct,r[13]=l*H+d*W+p*j+m*St,r[2]=g*E+v*S+u*Y+f*q,r[6]=g*R+v*w+u*it+f*xt,r[10]=g*P+v*X+u*V+f*Ct,r[14]=g*H+v*W+u*j+f*St,r[3]=_*E+x*S+b*Y+U*q,r[7]=_*R+x*w+b*it+U*xt,r[11]=_*P+x*X+b*V+U*Ct,r[15]=_*H+x*W+b*j+U*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],d=t[6],p=t[10],m=t[14],g=t[3],v=t[7],u=t[11],f=t[15];return g*(+r*c*d-s*h*d-r*o*p+n*h*p+s*o*m-n*c*m)+v*(+e*c*m-e*h*p+r*a*p-s*a*m+s*h*l-r*c*l)+u*(+e*h*d-e*o*m-r*a*d+n*a*m+r*o*l-n*h*l)+f*(-s*o*l-e*c*d+e*o*p+s*a*d-n*a*p+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],d=t[9],p=t[10],m=t[11],g=t[12],v=t[13],u=t[14],f=t[15],_=d*u*h-v*p*h+v*c*m-o*u*m-d*c*f+o*p*f,x=g*p*h-l*u*h-g*c*m+a*u*m+l*c*f-a*p*f,b=l*v*h-g*d*h+g*o*m-a*v*m-l*o*f+a*d*f,U=g*d*c-l*v*c-g*o*p+a*v*p+l*o*u-a*d*u,E=e*_+n*x+s*b+r*U;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=_*R,t[1]=(v*p*r-d*u*r-v*s*m+n*u*m+d*s*f-n*p*f)*R,t[2]=(o*u*r-v*c*r+v*s*h-n*u*h-o*s*f+n*c*f)*R,t[3]=(d*c*r-o*p*r-d*s*h+n*p*h+o*s*m-n*c*m)*R,t[4]=x*R,t[5]=(l*u*r-g*p*r+g*s*m-e*u*m-l*s*f+e*p*f)*R,t[6]=(g*c*r-a*u*r-g*s*h+e*u*h+a*s*f-e*c*f)*R,t[7]=(a*p*r-l*c*r+l*s*h-e*p*h-a*s*m+e*c*m)*R,t[8]=b*R,t[9]=(g*d*r-l*v*r-g*n*m+e*v*m+l*n*f-e*d*f)*R,t[10]=(a*v*r-g*o*r+g*n*h-e*v*h-a*n*f+e*o*f)*R,t[11]=(l*o*r-a*d*r-l*n*h+e*d*h+a*n*m-e*o*m)*R,t[12]=U*R,t[13]=(l*v*s-g*d*s+g*n*p-e*v*p-l*n*u+e*d*u)*R,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*u-e*o*u)*R,t[15]=(a*d*s-l*o*s+l*n*c-e*d*c-a*n*p+e*o*p)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,d=o+o,p=r*h,m=r*l,g=r*d,v=a*l,u=a*d,f=o*d,_=c*h,x=c*l,b=c*d,U=n.x,E=n.y,R=n.z;return s[0]=(1-(v+f))*U,s[1]=(m+b)*U,s[2]=(g-x)*U,s[3]=0,s[4]=(m-b)*E,s[5]=(1-(p+f))*E,s[6]=(u+_)*E,s[7]=0,s[8]=(g+x)*R,s[9]=(u-_)*R,s[10]=(1-(p+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Oi.set(s[0],s[1],s[2]).length();const a=Oi.set(s[4],s[5],s[6]).length(),o=Oi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Mn.copy(this);const h=1/r,l=1/a,d=1/o;return Mn.elements[0]*=h,Mn.elements[1]*=h,Mn.elements[2]*=h,Mn.elements[4]*=l,Mn.elements[5]*=l,Mn.elements[6]*=l,Mn.elements[8]*=d,Mn.elements[9]*=d,Mn.elements[10]*=d,e.setFromRotationMatrix(Mn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Yn){const c=this.elements,h=2*r/(e-t),l=2*r/(n-s),d=(e+t)/(e-t),p=(n+s)/(n-s);let m,g;if(o===Yn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ia)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=l,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Yn){const c=this.elements,h=1/(e-t),l=1/(n-s),d=1/(a-r),p=(e+t)*h,m=(n+s)*l;let g,v;if(o===Yn)g=(a+r)*d,v=-2*d;else if(o===ia)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Oi=new k,Mn=new ie,Xf=new k(0,0,0),Yf=new k(1,1,1),ni=new k,ur=new k,un=new k,nc=new ie,ic=new tr;class Pn{constructor(t=0,e=0,n=0,s=Pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],d=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(We(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-We(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(We(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-We(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(We(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-We(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ic.setFromEuler(this),this.setFromQuaternion(ic,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pn.DEFAULT_ORDER="XYZ";class Sl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let jf=0;const sc=new k,Bi=new tr,zn=new ie,fr=new k,Cs=new k,Kf=new k,Zf=new tr,rc=new k(1,0,0),ac=new k(0,1,0),oc=new k(0,0,1),lc={type:"added"},Jf={type:"removed"},zi={type:"childadded",child:null},Da={type:"childremoved",child:null};class Ce extends ys{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jf++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new k,e=new Pn,n=new tr,s=new k(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new te}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(t,e){return Bi.setFromAxisAngle(t,e),this.quaternion.premultiply(Bi),this}rotateX(t){return this.rotateOnAxis(rc,t)}rotateY(t){return this.rotateOnAxis(ac,t)}rotateZ(t){return this.rotateOnAxis(oc,t)}translateOnAxis(t,e){return sc.copy(t).applyQuaternion(this.quaternion),this.position.add(sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rc,t)}translateY(t){return this.translateOnAxis(ac,t)}translateZ(t){return this.translateOnAxis(oc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fr.copy(t):fr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Cs,fr,this.up):zn.lookAt(fr,Cs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(zn),this.quaternion.premultiply(Bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(lc),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Jf),Da.child=t,this.dispatchEvent(Da),Da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(lc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Kf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Zf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const d=c[h];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),d=a(t.shapes),p=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new k(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wn=new k,Hn=new k,Ia=new k,Gn=new k,Hi=new k,Gi=new k,cc=new k,Ua=new k,ka=new k,Na=new k,Fa=new ge,Oa=new ge,Ba=new ge;class yn{constructor(t=new k,e=new k,n=new k){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),wn.subVectors(t,e),s.cross(wn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){wn.subVectors(s,e),Hn.subVectors(n,e),Ia.subVectors(t,e);const a=wn.dot(wn),o=wn.dot(Hn),c=wn.dot(Ia),h=Hn.dot(Hn),l=Hn.dot(Ia),d=a*h-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(h*c-o*l)*p,g=(a*l-o*c)*p;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Gn)===null?!1:Gn.x>=0&&Gn.y>=0&&Gn.x+Gn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Gn.x),c.addScaledVector(a,Gn.y),c.addScaledVector(o,Gn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Fa.setScalar(0),Oa.setScalar(0),Ba.setScalar(0),Fa.fromBufferAttribute(t,e),Oa.fromBufferAttribute(t,n),Ba.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Fa,r.x),a.addScaledVector(Oa,r.y),a.addScaledVector(Ba,r.z),a}static isFrontFacing(t,e,n,s){return wn.subVectors(n,e),Hn.subVectors(t,e),wn.cross(Hn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return wn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),wn.cross(Hn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Hi.subVectors(s,n),Gi.subVectors(r,n),Ua.subVectors(t,n);const c=Hi.dot(Ua),h=Gi.dot(Ua);if(c<=0&&h<=0)return e.copy(n);ka.subVectors(t,s);const l=Hi.dot(ka),d=Gi.dot(ka);if(l>=0&&d<=l)return e.copy(s);const p=c*d-l*h;if(p<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(Hi,a);Na.subVectors(t,r);const m=Hi.dot(Na),g=Gi.dot(Na);if(g>=0&&m<=g)return e.copy(r);const v=m*h-c*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Gi,o);const u=l*g-m*d;if(u<=0&&d-l>=0&&m-g>=0)return cc.subVectors(r,s),o=(d-l)/(d-l+(m-g)),e.copy(s).addScaledVector(cc,o);const f=1/(u+v+p);return a=v*f,o=p*f,e.copy(n).addScaledVector(Hi,a).addScaledVector(Gi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Qh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},dr={h:0,s:0,l:0};function za(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=pn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,le.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=le.workingColorSpace){return this.r=t,this.g=e,this.b=n,le.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=le.workingColorSpace){if(t=Uf(t,1),e=We(e,0,1),n=We(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=za(a,r,t+1/3),this.g=za(a,r,t),this.b=za(a,r,t-1/3)}return le.toWorkingColorSpace(this,s),this}setStyle(t,e=pn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=pn){const n=Qh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=pn){return le.fromWorkingColorSpace(je.copy(this),t),Math.round(We(je.r*255,0,255))*65536+Math.round(We(je.g*255,0,255))*256+Math.round(We(je.b*255,0,255))}getHexString(t=pn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=le.workingColorSpace){le.fromWorkingColorSpace(je.copy(this),e);const n=je.r,s=je.g,r=je.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const d=a-o;switch(h=l<=.5?d/(a+o):d/(2-a-o),a){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=le.workingColorSpace){return le.fromWorkingColorSpace(je.copy(this),e),t.r=je.r,t.g=je.g,t.b=je.b,t}getStyle(t=pn){le.fromWorkingColorSpace(je.copy(this),t);const e=je.r,n=je.g,s=je.b;return t!==pn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(dr);const n=Ma(ii.h,dr.h,e),s=Ma(ii.s,dr.s,e),r=Ma(ii.l,dr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const je=new zt;zt.NAMES=Qh;let Qf=0;class Zn extends ys{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qf++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=Ti,this.side=li,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fo,this.blendDst=po,this.blendEquation=Si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ii,this.stencilZFail=Ii,this.stencilZPass=Ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ti&&(n.blending=this.blending),this.side!==li&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fo&&(n.blendSrc=this.blendSrc),this.blendDst!==po&&(n.blendDst=this.blendDst),this.blendEquation!==Si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new k,pr=new at;class gn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zo,this.updateRanges=[],this.gpuType=Un,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)pr.fromBufferAttribute(this,e),pr.applyMatrix3(t),this.setXY(e,pr.x,pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=In(e,this.array)),e}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=In(e,this.array)),e}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=In(e,this.array)),e}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=In(e,this.array)),e}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zo&&(t.usage=this.usage),t}}class tu extends gn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class eu extends gn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class se extends gn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let td=0;const xn=new ie,Ha=new Ce,Wi=new k,fn=new hi,Es=new hi,Be=new k;class Ue extends ys{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kh(t)?eu:tu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new te().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return xn.makeRotationFromQuaternion(t),this.applyMatrix4(xn),this}rotateX(t){return xn.makeRotationX(t),this.applyMatrix4(xn),this}rotateY(t){return xn.makeRotationY(t),this.applyMatrix4(xn),this}rotateZ(t){return xn.makeRotationZ(t),this.applyMatrix4(xn),this}translate(t,e,n){return xn.makeTranslation(t,e,n),this.applyMatrix4(xn),this}scale(t,e,n){return xn.makeScale(t,e,n),this.applyMatrix4(xn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Wi).negate(),this.translate(Wi.x,Wi.y,Wi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new se(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];fn.setFromBufferAttribute(r),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,fn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,fn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(fn.min),this.boundingBox.expandByPoint(fn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(t){const n=this.boundingSphere.center;if(fn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(fn.min,Es.min),fn.expandByPoint(Be),Be.addVectors(fn.max,Es.max),fn.expandByPoint(Be)):(fn.expandByPoint(Es.min),fn.expandByPoint(Es.max))}fn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Be.fromBufferAttribute(o,h),c&&(Wi.fromBufferAttribute(t,h),Be.add(Wi)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let P=0;P<n.count;P++)o[P]=new k,c[P]=new k;const h=new k,l=new k,d=new k,p=new at,m=new at,g=new at,v=new k,u=new k;function f(P,H,S){h.fromBufferAttribute(n,P),l.fromBufferAttribute(n,H),d.fromBufferAttribute(n,S),p.fromBufferAttribute(r,P),m.fromBufferAttribute(r,H),g.fromBufferAttribute(r,S),l.sub(h),d.sub(h),m.sub(p),g.sub(p);const w=1/(m.x*g.y-g.x*m.y);isFinite(w)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(d,-m.y).multiplyScalar(w),u.copy(d).multiplyScalar(m.x).addScaledVector(l,-g.x).multiplyScalar(w),o[P].add(v),o[H].add(v),o[S].add(v),c[P].add(u),c[H].add(u),c[S].add(u))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let P=0,H=_.length;P<H;++P){const S=_[P],w=S.start,X=S.count;for(let W=w,Y=w+X;W<Y;W+=3)f(t.getX(W+0),t.getX(W+1),t.getX(W+2))}const x=new k,b=new k,U=new k,E=new k;function R(P){U.fromBufferAttribute(s,P),E.copy(U);const H=o[P];x.copy(H),x.sub(U.multiplyScalar(U.dot(H))).normalize(),b.crossVectors(E,H);const w=b.dot(c[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,w)}for(let P=0,H=_.length;P<H;++P){const S=_[P],w=S.start,X=S.count;for(let W=w,Y=w+X;W<Y;W+=3)R(t.getX(W+0)),R(t.getX(W+1)),R(t.getX(W+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new k,r=new k,a=new k,o=new k,c=new k,h=new k,l=new k,d=new k;if(t)for(let p=0,m=t.count;p<m;p+=3){const g=t.getX(p+0),v=t.getX(p+1),u=t.getX(p+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,u),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,u),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),a.fromBufferAttribute(e,p+2),l.subVectors(a,r),d.subVectors(s,r),l.cross(d),n.setXYZ(p+0,l.x,l.y,l.z),n.setXYZ(p+1,l.x,l.y,l.z),n.setXYZ(p+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(o,c){const h=o.array,l=o.itemSize,d=o.normalized,p=new h.constructor(c.length*l);let m=0,g=0;for(let v=0,u=c.length;v<u;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*l;for(let f=0;f<l;f++)p[g++]=h[m++]}return new gn(p,l,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ue,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,d=h.length;l<d;l++){const p=h[l],m=t(p,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let d=0,p=h.length;d<p;d++){const m=h[d];l.push(m.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],d=r[h];for(let p=0,m=d.length;p<m;p++)l.push(d[p].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,l=a.length;h<l;h++){const d=a[h];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const hc=new ie,pi=new ua,mr=new Pi,uc=new k,gr=new k,vr=new k,_r=new k,Ga=new k,xr=new k,fc=new k,yr=new k;class ht extends Ce{constructor(t=new Ue,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){xr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],d=r[c];l!==0&&(Ga.fromBufferAttribute(d,t),a?xr.addScaledVector(Ga,l):xr.addScaledVector(Ga.sub(e),l))}e.add(xr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),pi.copy(t.ray).recast(t.near),!(mr.containsPoint(pi.origin)===!1&&(pi.intersectSphere(mr,uc)===null||pi.origin.distanceToSquared(uc)>(t.far-t.near)**2))&&(hc.copy(r).invert(),pi.copy(t.ray).applyMatrix4(hc),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,pi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const u=p[g],f=a[u.materialIndex],_=Math.max(u.start,m.start),x=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let b=_,U=x;b<U;b+=3){const E=o.getX(b),R=o.getX(b+1),P=o.getX(b+2);s=br(this,f,t,n,h,l,d,E,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let u=g,f=v;u<f;u+=3){const _=o.getX(u),x=o.getX(u+1),b=o.getX(u+2);s=br(this,a,t,n,h,l,d,_,x,b),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=p.length;g<v;g++){const u=p[g],f=a[u.materialIndex],_=Math.max(u.start,m.start),x=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let b=_,U=x;b<U;b+=3){const E=b,R=b+1,P=b+2;s=br(this,f,t,n,h,l,d,E,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let u=g,f=v;u<f;u+=3){const _=u,x=u+1,b=u+2;s=br(this,a,t,n,h,l,d,_,x,b),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function ed(i,t,e,n,s,r,a,o){let c;if(t.side===ln?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===li,o),c===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(yr);return h<e.near||h>e.far?null:{distance:h,point:yr.clone(),object:i}}function br(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,gr),i.getVertexPosition(c,vr),i.getVertexPosition(h,_r);const l=ed(i,t,e,n,gr,vr,_r,fc);if(l){const d=new k;yn.getBarycoord(fc,gr,vr,_r,d),s&&(l.uv=yn.getInterpolatedAttribute(s,o,c,h,d,new at)),r&&(l.uv1=yn.getInterpolatedAttribute(r,o,c,h,d,new at)),a&&(l.normal=yn.getInterpolatedAttribute(a,o,c,h,d,new k),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const p={a:o,b:c,c:h,normal:new k,materialIndex:0};yn.getNormal(gr,vr,_r,p.normal),l.face=p,l.barycoord=d}return l}class Ke extends Ue{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],d=[];let p=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new se(h,3)),this.setAttribute("normal",new se(l,3)),this.setAttribute("uv",new se(d,2));function g(v,u,f,_,x,b,U,E,R,P,H){const S=b/R,w=U/P,X=b/2,W=U/2,Y=E/2,it=R+1,V=P+1;let j=0,q=0;const xt=new k;for(let Ct=0;Ct<V;Ct++){const St=Ct*w-W;for(let Ut=0;Ut<it;Ut++){const Ht=Ut*S-X;xt[v]=Ht*_,xt[u]=St*x,xt[f]=Y,h.push(xt.x,xt.y,xt.z),xt[v]=0,xt[u]=0,xt[f]=E>0?1:-1,l.push(xt.x,xt.y,xt.z),d.push(Ut/R),d.push(1-Ct/P),j+=1}}for(let Ct=0;Ct<P;Ct++)for(let St=0;St<R;St++){const Ut=p+St+it*Ct,Ht=p+St+it*(Ct+1),nt=p+(St+1)+it*(Ct+1),ut=p+(St+1)+it*Ct;c.push(Ut,Ht,ut),c.push(Ht,nt,ut),q+=6}o.addGroup(m,q,H),m+=q,p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ke(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ms(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=ms(i[e]);for(const s in n)t[s]=n[s]}return t}function nd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function nu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:le.workingColorSpace}const gs={clone:ms,merge:tn};var id=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=id,this.fragmentShader=sd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=nd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class iu extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new k,dc=new at,pc=new at;class an extends iu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=sa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return sa*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,dc,pc),e.subVectors(pc,dc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const $i=-90,qi=1;class rd extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new an($i,qi,t,e);s.layers=this.layers,this.add(s);const r=new an($i,qi,t,e);r.layers=this.layers,this.add(r);const a=new an($i,qi,t,e);a.layers=this.layers,this.add(a);const o=new an($i,qi,t,e);o.layers=this.layers,this.add(o);const c=new an($i,qi,t,e);c.layers=this.layers,this.add(c);const h=new an($i,qi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===Yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ia)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,d=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(d,p,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class su extends Xe{constructor(t,e,n,s,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:hs,super(t,e,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ad extends mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new su(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:En}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:kn});r.uniforms.tEquirect.value=e;const a=new ht(s,r),o=e.minFilter;return e.minFilter===Ei&&(e.minFilter=En),new rd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Wa=new k,od=new k,ld=new te;class xi{constructor(t=new k(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Wa.subVectors(n,e).cross(od.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ld.getNormalMatrix(t),s=this.coplanarPoint(Wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mi=new Pi,Sr=new k;class Ml{constructor(t=new xi,e=new xi,n=new xi,s=new xi,r=new xi,a=new xi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Yn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],l=s[5],d=s[6],p=s[7],m=s[8],g=s[9],v=s[10],u=s[11],f=s[12],_=s[13],x=s[14],b=s[15];if(n[0].setComponents(c-r,p-h,u-m,b-f).normalize(),n[1].setComponents(c+r,p+h,u+m,b+f).normalize(),n[2].setComponents(c+a,p+l,u+g,b+_).normalize(),n[3].setComponents(c-a,p-l,u-g,b-_).normalize(),n[4].setComponents(c-o,p-d,u-v,b-x).normalize(),e===Yn)n[5].setComponents(c+o,p+d,u+v,b+x).normalize();else if(e===ia)n[5].setComponents(o,d,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(t){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Sr.x=s.normal.x>0?t.max.x:t.min.x,Sr.y=s.normal.y>0?t.max.y:t.min.y,Sr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ru(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function cd(i){const t=new WeakMap;function e(o,c){const h=o.array,l=o.usage,d=h.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,h,l),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,h){const l=c.array,d=c.updateRanges;if(i.bindBuffer(h,o),d.length===0)i.bufferSubData(h,0,l);else{d.sort((m,g)=>m.start-g.start);let p=0;for(let m=1;m<d.length;m++){const g=d[p],v=d[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++p,d[p]=v)}d.length=p+1;for(let m=0,g=d.length;m<g;m++){const v=d[m];i.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}class ye extends Ue{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,d=t/o,p=e/c,m=[],g=[],v=[],u=[];for(let f=0;f<l;f++){const _=f*p-a;for(let x=0;x<h;x++){const b=x*d-r;g.push(b,-_,0),v.push(0,0,1),u.push(x/o),u.push(1-f/c)}}for(let f=0;f<c;f++)for(let _=0;_<o;_++){const x=_+h*f,b=_+h*(f+1),U=_+1+h*(f+1),E=_+1+h*f;m.push(x,b,E),m.push(b,U,E)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ye(t.width,t.height,t.widthSegments,t.heightSegments)}}var hd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ud=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,md=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_d=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,xd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Md=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Td=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ld=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Id=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ud=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bd="gl_FragColor = linearToOutputTexel( gl_FragColor );",zd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Kd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ep=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,np=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ip=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ap=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,op=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,up=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,vp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_p=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ep=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Dp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Up=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,kp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Np=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Bp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$p=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Yp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,jp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Kp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Zp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Jp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,t0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,e0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,i0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,s0=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,r0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,a0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,o0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,l0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const c0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h0=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,d0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,p0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,m0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,g0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,v0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,x0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,y0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,S0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,M0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,w0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,C0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,E0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,T0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,A0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,L0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,R0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,P0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,D0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,I0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,k0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,F0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,O0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,z0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,H0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qt={alphahash_fragment:hd,alphahash_pars_fragment:ud,alphamap_fragment:fd,alphamap_pars_fragment:dd,alphatest_fragment:pd,alphatest_pars_fragment:md,aomap_fragment:gd,aomap_pars_fragment:vd,batching_pars_vertex:_d,batching_vertex:xd,begin_vertex:yd,beginnormal_vertex:bd,bsdfs:Sd,iridescence_fragment:Md,bumpmap_pars_fragment:wd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Ed,clipping_planes_pars_vertex:Td,clipping_planes_vertex:Ad,color_fragment:Ld,color_pars_fragment:Rd,color_pars_vertex:Pd,color_vertex:Vd,common:Dd,cube_uv_reflection_fragment:Id,defaultnormal_vertex:Ud,displacementmap_pars_vertex:kd,displacementmap_vertex:Nd,emissivemap_fragment:Fd,emissivemap_pars_fragment:Od,colorspace_fragment:Bd,colorspace_pars_fragment:zd,envmap_fragment:Hd,envmap_common_pars_fragment:Gd,envmap_pars_fragment:Wd,envmap_pars_vertex:$d,envmap_physical_pars_fragment:np,envmap_vertex:qd,fog_vertex:Xd,fog_pars_vertex:Yd,fog_fragment:jd,fog_pars_fragment:Kd,gradientmap_pars_fragment:Zd,lightmap_pars_fragment:Jd,lights_lambert_fragment:Qd,lights_lambert_pars_fragment:tp,lights_pars_begin:ep,lights_toon_fragment:ip,lights_toon_pars_fragment:sp,lights_phong_fragment:rp,lights_phong_pars_fragment:ap,lights_physical_fragment:op,lights_physical_pars_fragment:lp,lights_fragment_begin:cp,lights_fragment_maps:hp,lights_fragment_end:up,logdepthbuf_fragment:fp,logdepthbuf_pars_fragment:dp,logdepthbuf_pars_vertex:pp,logdepthbuf_vertex:mp,map_fragment:gp,map_pars_fragment:vp,map_particle_fragment:_p,map_particle_pars_fragment:xp,metalnessmap_fragment:yp,metalnessmap_pars_fragment:bp,morphinstance_vertex:Sp,morphcolor_vertex:Mp,morphnormal_vertex:wp,morphtarget_pars_vertex:Cp,morphtarget_vertex:Ep,normal_fragment_begin:Tp,normal_fragment_maps:Ap,normal_pars_fragment:Lp,normal_pars_vertex:Rp,normal_vertex:Pp,normalmap_pars_fragment:Vp,clearcoat_normal_fragment_begin:Dp,clearcoat_normal_fragment_maps:Ip,clearcoat_pars_fragment:Up,iridescence_pars_fragment:kp,opaque_fragment:Np,packing:Fp,premultiplied_alpha_fragment:Op,project_vertex:Bp,dithering_fragment:zp,dithering_pars_fragment:Hp,roughnessmap_fragment:Gp,roughnessmap_pars_fragment:Wp,shadowmap_pars_fragment:$p,shadowmap_pars_vertex:qp,shadowmap_vertex:Xp,shadowmask_pars_fragment:Yp,skinbase_vertex:jp,skinning_pars_vertex:Kp,skinning_vertex:Zp,skinnormal_vertex:Jp,specularmap_fragment:Qp,specularmap_pars_fragment:t0,tonemapping_fragment:e0,tonemapping_pars_fragment:n0,transmission_fragment:i0,transmission_pars_fragment:s0,uv_pars_fragment:r0,uv_pars_vertex:a0,uv_vertex:o0,worldpos_vertex:l0,background_vert:c0,background_frag:h0,backgroundCube_vert:u0,backgroundCube_frag:f0,cube_vert:d0,cube_frag:p0,depth_vert:m0,depth_frag:g0,distanceRGBA_vert:v0,distanceRGBA_frag:_0,equirect_vert:x0,equirect_frag:y0,linedashed_vert:b0,linedashed_frag:S0,meshbasic_vert:M0,meshbasic_frag:w0,meshlambert_vert:C0,meshlambert_frag:E0,meshmatcap_vert:T0,meshmatcap_frag:A0,meshnormal_vert:L0,meshnormal_frag:R0,meshphong_vert:P0,meshphong_frag:V0,meshphysical_vert:D0,meshphysical_frag:I0,meshtoon_vert:U0,meshtoon_frag:k0,points_vert:N0,points_frag:F0,shadow_vert:O0,shadow_frag:B0,sprite_vert:z0,sprite_frag:H0},wt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},Dn={basic:{uniforms:tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:Qt.meshbasic_vert,fragmentShader:Qt.meshbasic_frag},lambert:{uniforms:tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Qt.meshlambert_vert,fragmentShader:Qt.meshlambert_frag},phong:{uniforms:tn([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Qt.meshphong_vert,fragmentShader:Qt.meshphong_frag},standard:{uniforms:tn([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag},toon:{uniforms:tn([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Qt.meshtoon_vert,fragmentShader:Qt.meshtoon_frag},matcap:{uniforms:tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:Qt.meshmatcap_vert,fragmentShader:Qt.meshmatcap_frag},points:{uniforms:tn([wt.points,wt.fog]),vertexShader:Qt.points_vert,fragmentShader:Qt.points_frag},dashed:{uniforms:tn([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qt.linedashed_vert,fragmentShader:Qt.linedashed_frag},depth:{uniforms:tn([wt.common,wt.displacementmap]),vertexShader:Qt.depth_vert,fragmentShader:Qt.depth_frag},normal:{uniforms:tn([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:Qt.meshnormal_vert,fragmentShader:Qt.meshnormal_frag},sprite:{uniforms:tn([wt.sprite,wt.fog]),vertexShader:Qt.sprite_vert,fragmentShader:Qt.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qt.background_vert,fragmentShader:Qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:Qt.backgroundCube_vert,fragmentShader:Qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qt.cube_vert,fragmentShader:Qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qt.equirect_vert,fragmentShader:Qt.equirect_frag},distanceRGBA:{uniforms:tn([wt.common,wt.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qt.distanceRGBA_vert,fragmentShader:Qt.distanceRGBA_frag},shadow:{uniforms:tn([wt.lights,wt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Qt.shadow_vert,fragmentShader:Qt.shadow_frag}};Dn.physical={uniforms:tn([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:Qt.meshphysical_vert,fragmentShader:Qt.meshphysical_frag};const Mr={r:0,b:0,g:0},gi=new Pn,G0=new ie;function W0(i,t,e,n,s,r,a){const o=new zt(0);let c=r===!0?0:1,h,l,d=null,p=0,m=null;function g(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?e:t).get(x)),x}function v(_){let x=!1;const b=g(_);b===null?f(o,c):b&&b.isColor&&(f(b,1),x=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,a):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(_,x){const b=g(x);b&&(b.isCubeTexture||b.mapping===ca)?(l===void 0&&(l=new ht(new Ke(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:ms(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(U,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),gi.copy(x.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(G0.makeRotationFromEuler(gi)),l.material.toneMapped=le.getTransfer(b.colorSpace)!==_e,(d!==b||p!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,d=b,p=b.version,m=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new ht(new ye(2,2),new qe({name:"BackgroundMaterial",uniforms:ms(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:li,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.toneMapped=le.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||p!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,d=b,p=b.version,m=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function f(_,x){_.getRGB(Mr,nu(i)),n.buffers.color.setClear(Mr.r,Mr.g,Mr.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(_,x=1){o.set(_),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,f(o,c)},render:v,addToRenderList:u}}function $0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,a=!1;function o(S,w,X,W,Y){let it=!1;const V=d(W,X,w);r!==V&&(r=V,h(r.object)),it=m(S,W,X,Y),it&&g(S,W,X,Y),Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(it||a)&&(a=!1,b(S,w,X,W),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function c(){return i.createVertexArray()}function h(S){return i.bindVertexArray(S)}function l(S){return i.deleteVertexArray(S)}function d(S,w,X){const W=X.wireframe===!0;let Y=n[S.id];Y===void 0&&(Y={},n[S.id]=Y);let it=Y[w.id];it===void 0&&(it={},Y[w.id]=it);let V=it[W];return V===void 0&&(V=p(c()),it[W]=V),V}function p(S){const w=[],X=[],W=[];for(let Y=0;Y<e;Y++)w[Y]=0,X[Y]=0,W[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:X,attributeDivisors:W,object:S,attributes:{},index:null}}function m(S,w,X,W){const Y=r.attributes,it=w.attributes;let V=0;const j=X.getAttributes();for(const q in j)if(j[q].location>=0){const Ct=Y[q];let St=it[q];if(St===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(St=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(St=S.instanceColor)),Ct===void 0||Ct.attribute!==St||St&&Ct.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==W}function g(S,w,X,W){const Y={},it=w.attributes;let V=0;const j=X.getAttributes();for(const q in j)if(j[q].location>=0){let Ct=it[q];Ct===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(Ct=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(Ct=S.instanceColor));const St={};St.attribute=Ct,Ct&&Ct.data&&(St.data=Ct.data),Y[q]=St,V++}r.attributes=Y,r.attributesNum=V,r.index=W}function v(){const S=r.newAttributes;for(let w=0,X=S.length;w<X;w++)S[w]=0}function u(S){f(S,0)}function f(S,w){const X=r.newAttributes,W=r.enabledAttributes,Y=r.attributeDivisors;X[S]=1,W[S]===0&&(i.enableVertexAttribArray(S),W[S]=1),Y[S]!==w&&(i.vertexAttribDivisor(S,w),Y[S]=w)}function _(){const S=r.newAttributes,w=r.enabledAttributes;for(let X=0,W=w.length;X<W;X++)w[X]!==S[X]&&(i.disableVertexAttribArray(X),w[X]=0)}function x(S,w,X,W,Y,it,V){V===!0?i.vertexAttribIPointer(S,w,X,Y,it):i.vertexAttribPointer(S,w,X,W,Y,it)}function b(S,w,X,W){v();const Y=W.attributes,it=X.getAttributes(),V=w.defaultAttributeValues;for(const j in it){const q=it[j];if(q.location>=0){let xt=Y[j];if(xt===void 0&&(j==="instanceMatrix"&&S.instanceMatrix&&(xt=S.instanceMatrix),j==="instanceColor"&&S.instanceColor&&(xt=S.instanceColor)),xt!==void 0){const Ct=xt.normalized,St=xt.itemSize,Ut=t.get(xt);if(Ut===void 0)continue;const Ht=Ut.buffer,nt=Ut.type,ut=Ut.bytesPerElement,Et=nt===i.INT||nt===i.UNSIGNED_INT||xt.gpuType===dl;if(xt.isInterleavedBufferAttribute){const Mt=xt.data,$t=Mt.stride,Gt=xt.offset;if(Mt.isInstancedInterleavedBuffer){for(let Kt=0;Kt<q.locationSize;Kt++)f(q.location+Kt,Mt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Mt.meshPerAttribute*Mt.count)}else for(let Kt=0;Kt<q.locationSize;Kt++)u(q.location+Kt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Kt=0;Kt<q.locationSize;Kt++)x(q.location+Kt,St/q.locationSize,nt,Ct,$t*ut,(Gt+St/q.locationSize*Kt)*ut,Et)}else{if(xt.isInstancedBufferAttribute){for(let Mt=0;Mt<q.locationSize;Mt++)f(q.location+Mt,xt.meshPerAttribute);S.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Mt=0;Mt<q.locationSize;Mt++)u(q.location+Mt);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let Mt=0;Mt<q.locationSize;Mt++)x(q.location+Mt,St/q.locationSize,nt,Ct,St*ut,St/q.locationSize*Mt*ut,Et)}}else if(V!==void 0){const Ct=V[j];if(Ct!==void 0)switch(Ct.length){case 2:i.vertexAttrib2fv(q.location,Ct);break;case 3:i.vertexAttrib3fv(q.location,Ct);break;case 4:i.vertexAttrib4fv(q.location,Ct);break;default:i.vertexAttrib1fv(q.location,Ct)}}}}_()}function U(){P();for(const S in n){const w=n[S];for(const X in w){const W=w[X];for(const Y in W)l(W[Y].object),delete W[Y];delete w[X]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const w=n[S.id];for(const X in w){const W=w[X];for(const Y in W)l(W[Y].object),delete W[Y];delete w[X]}delete n[S.id]}function R(S){for(const w in n){const X=n[w];if(X[S.id]===void 0)continue;const W=X[S.id];for(const Y in W)l(W[Y].object),delete W[Y];delete X[S.id]}}function P(){H(),a=!0,r!==s&&(r=s,h(r.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:H,dispose:U,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:u,disableUnusedAttributes:_}}function q0(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,d){d!==0&&(i.drawArraysInstanced(n,h,l,d),e.update(l,n,d))}function o(h,l,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,d);let m=0;for(let g=0;g<d;g++)m+=l[g];e.update(m,n,1)}function c(h,l,d,p){if(d===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],l[g],p[g]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,l,0,p,0,d);let g=0;for(let v=0;v<d;v++)g+=l[v];for(let v=0;v<p.length;v++)e.update(g,n,p[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function X0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(R){return!(R!==Tn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const P=R===Ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Kn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==Un&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const d=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const R=t.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:d,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:u,maxAttributes:f,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:b,vertexTextures:U,maxSamples:E}}function Y0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new xi,o=new te,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){e=l(d,p,0)},this.setState=function(d,p,m){const g=d.clippingPlanes,v=d.clipIntersection,u=d.clipShadows,f=i.get(d);if(!s||g===null||g.length===0||r&&!u)r?l(null):h();else{const _=r?0:n,x=_*4;let b=f.clippingState||null;c.value=b,b=l(g,p,x,m);for(let U=0;U!==x;++U)b[U]=e[U];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(d,p,m,g){const v=d!==null?d.length:0;let u=null;if(v!==0){if(u=c.value,g!==!0||u===null){const f=m+v*4,_=p.matrixWorldInverse;o.getNormalMatrix(_),(u===null||u.length<f)&&(u=new Float32Array(f));for(let x=0,b=m;x!==v;++x,b+=4)a.copy(d[x]).applyMatrix4(_,o),a.normal.toArray(u,b),u[b+3]=a.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,u}}function j0(i){let t=new WeakMap;function e(a,o){return o===So?a.mapping=hs:o===Mo&&(a.mapping=us),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===So||o===Mo)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new ad(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class wl extends iu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ns=4,mc=[.125,.215,.35,.446,.526,.582],Mi=20,$a=new wl,gc=new zt;let qa=null,Xa=0,Ya=0,ja=!1;const yi=(1+Math.sqrt(5))/2,Xi=1/yi,vc=[new k(-yi,Xi,0),new k(yi,Xi,0),new k(-Xi,0,yi),new k(Xi,0,yi),new k(0,yi,-Xi),new k(0,yi,Xi),new k(-1,1,-1),new k(1,1,-1),new k(-1,1,1),new k(1,1,1)];class _c{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){qa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(qa,Xa,Ya),this._renderer.xr.enabled=ja,t.scissorTest=!1,wr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hs||t.mapping===us?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qa=this._renderer.getRenderTarget(),Xa=this._renderer.getActiveCubeFace(),Ya=this._renderer.getActiveMipmapLevel(),ja=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:Ln,format:Tn,colorSpace:ci,depthBuffer:!1},s=xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=K0(r)),this._blurMaterial=Z0(r,t,e)}return s}_compileMaterial(t){const e=new ht(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,n,s){const o=new an(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,d=l.autoClear,p=l.toneMapping;l.getClearColor(gc),l.toneMapping=oi,l.autoClear=!1;const m=new Re({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new ht(new Ke,m);let v=!1;const u=t.background;u?u.isColor&&(m.color.copy(u),t.background=null,v=!0):(m.color.copy(gc),v=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(o.up.set(0,c[f],0),o.lookAt(h[f],0,0)):_===1?(o.up.set(0,0,c[f]),o.lookAt(0,h[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,h[f]));const x=this._cubeSize;wr(s,_*x,f>2?x:0,x,x),l.setRenderTarget(s),v&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=p,l.autoClear=d,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===hs||t.mapping===us;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new ht(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;wr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,$a)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vc[(s-r-1)%vc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,d=new ht(this._lodPlanes[s],h),p=h.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Mi-1),v=r/g,u=isFinite(r)?1+Math.floor(l*v):Mi;u>Mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${Mi}`);const f=[];let _=0;for(let R=0;R<Mi;++R){const P=R/v,H=Math.exp(-P*P/2);f.push(H),R===0?_+=H:R<u&&(_+=2*H)}for(let R=0;R<f.length;R++)f[R]=f[R]/_;p.envMap.value=t.texture,p.samples.value=u,p.weights.value=f,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:x}=this;p.dTheta.value=g,p.mipInt.value=x-n;const b=this._sizeLods[s],U=3*b*(s>x-ns?s-x+ns:0),E=4*(this._cubeSize-b);wr(e,U,E,3*b,2*b),c.setRenderTarget(e),c.render(d,$a)}}function K0(i){const t=[],e=[],n=[];let s=i;const r=i-ns+1+mc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-ns?c=mc[a-i+ns-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,d=1+h,p=[l,l,d,l,d,d,l,l,d,d,l,d],m=6,g=6,v=3,u=2,f=1,_=new Float32Array(v*g*m),x=new Float32Array(u*g*m),b=new Float32Array(f*g*m);for(let E=0;E<m;E++){const R=E%3*2/3-1,P=E>2?0:-1,H=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];_.set(H,v*g*E),x.set(p,u*g*E);const S=[E,E,E,E,E,E];b.set(S,f*g*E)}const U=new Ue;U.setAttribute("position",new gn(_,v)),U.setAttribute("uv",new gn(x,u)),U.setAttribute("faceIndex",new gn(b,f)),t.push(U),s>ns&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xc(i,t,e){const n=new mn(i,t,e);return n.texture.mapping=ca,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Z0(i,t,e){const n=new Float32Array(Mi),s=new k(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function yc(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function bc(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Cl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:kn,depthTest:!1,depthWrite:!1})}function Cl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function J0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===So||c===Mo,l=c===hs||c===us;if(h||l){let d=t.get(o);const p=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==p)return e===null&&(e=new _c(i)),d=h?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const m=o.image;return h&&m&&m.height>0||l&&m&&s(m)?(e===null&&(e=new _c(i)),d=h?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Q0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function tm(i,t,e,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&t.remove(p.index);for(const g in p.attributes)t.remove(p.attributes[g]);for(const g in p.morphAttributes){const v=p.morphAttributes[g];for(let u=0,f=v.length;u<f;u++)t.remove(v[u])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,e.memory.geometries++),p}function c(d){const p=d.attributes;for(const g in p)t.update(p[g],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const g in m){const v=m[g];for(let u=0,f=v.length;u<f;u++)t.update(v[u],i.ARRAY_BUFFER)}}function h(d){const p=[],m=d.index,g=d.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let x=0,b=_.length;x<b;x+=3){const U=_[x+0],E=_[x+1],R=_[x+2];p.push(U,E,E,R,R,U)}}else if(g!==void 0){const _=g.array;v=g.version;for(let x=0,b=_.length/3-1;x<b;x+=3){const U=x+0,E=x+1,R=x+2;p.push(U,E,E,R,R,U)}}else return;const u=new(Kh(p)?eu:tu)(p,1);u.version=v;const f=r.get(d);f&&t.remove(f),r.set(d,u)}function l(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&h(d)}else h(d);return r.get(d)}return{get:o,update:c,getWireframeAttribute:l}}function em(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,m){i.drawElements(n,m,r,p*a),e.update(m,n,1)}function h(p,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,p*a,g),e.update(m,n,g))}function l(p,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,g);let u=0;for(let f=0;f<g;f++)u+=m[f];e.update(u,n,1)}function d(p,m,g,v){if(g===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<p.length;f++)h(p[f]/a,m[f],v[f]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,v,0,g);let f=0;for(let _=0;_<g;_++)f+=m[_];for(let _=0;_<v.length;_++)e.update(f,n,v[_])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=d}function nm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function im(i,t,e){const n=new WeakMap,s=new ge;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=l!==void 0?l.length:0;let p=n.get(o);if(p===void 0||p.count!==d){let H=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",H)};p!==void 0&&p.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let x=0;m===!0&&(x=1),g===!0&&(x=2),v===!0&&(x=3);let b=o.attributes.position.count*x,U=1;b>t.maxTextureSize&&(U=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const E=new Float32Array(b*U*4*d),R=new Jh(E,b,U,d);R.type=Un,R.needsUpdate=!0;const P=x*4;for(let S=0;S<d;S++){const w=u[S],X=f[S],W=_[S],Y=b*U*4*S;for(let it=0;it<w.count;it++){const V=it*P;m===!0&&(s.fromBufferAttribute(w,it),E[Y+V+0]=s.x,E[Y+V+1]=s.y,E[Y+V+2]=s.z,E[Y+V+3]=0),g===!0&&(s.fromBufferAttribute(X,it),E[Y+V+4]=s.x,E[Y+V+5]=s.y,E[Y+V+6]=s.z,E[Y+V+7]=0),v===!0&&(s.fromBufferAttribute(W,it),E[Y+V+8]=s.x,E[Y+V+9]=s.y,E[Y+V+10]=s.z,E[Y+V+11]=W.itemSize===4?s.w:1)}}p={count:d,texture:R,size:new at(b,U)},n.set(o,p),o.addEventListener("dispose",H)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<h.length;v++)m+=h[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function sm(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,d=t.get(c,l);if(s.get(d)!==h&&(t.update(d),s.set(d,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;s.get(p)!==h&&(p.update(),s.set(p,h))}return d}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class au extends Xe{constructor(t,e,n,s,r,a,o,c,h,l=as){if(l!==as&&l!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===as&&(n=Li),n===void 0&&l===ps&&(n=ds),super(null,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ne,this.minFilter=c!==void 0?c:Ne,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ou=new Xe,Sc=new au(1,1),lu=new Jh,cu=new $f,hu=new su,Mc=[],wc=[],Cc=new Float32Array(16),Ec=new Float32Array(9),Tc=new Float32Array(4);function bs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Mc[s];if(r===void 0&&(r=new Float32Array(s),Mc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Fe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Oe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fa(i,t){let e=wc[t];e===void 0&&(e=new Int32Array(t),wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function rm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2fv(this.addr,t),Oe(e,t)}}function om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Fe(e,t))return;i.uniform3fv(this.addr,t),Oe(e,t)}}function lm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4fv(this.addr,t),Oe(e,t)}}function cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Tc.set(n),i.uniformMatrix2fv(this.addr,!1,Tc),Oe(e,n)}}function hm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Ec.set(n),i.uniformMatrix3fv(this.addr,!1,Ec),Oe(e,n)}}function um(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Fe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Oe(e,t)}else{if(Fe(e,n))return;Cc.set(n),i.uniformMatrix4fv(this.addr,!1,Cc),Oe(e,n)}}function fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2iv(this.addr,t),Oe(e,t)}}function pm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3iv(this.addr,t),Oe(e,t)}}function mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4iv(this.addr,t),Oe(e,t)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Fe(e,t))return;i.uniform2uiv(this.addr,t),Oe(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Fe(e,t))return;i.uniform3uiv(this.addr,t),Oe(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Fe(e,t))return;i.uniform4uiv(this.addr,t),Oe(e,t)}}function ym(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Sc.compareFunction=jh,r=Sc):r=ou,e.setTexture2D(t||r,s)}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||cu,s)}function Sm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||hu,s)}function Mm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||lu,s)}function wm(i){switch(i){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return lm;case 35674:return cm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return vm;case 36295:return _m;case 36296:return xm;case 35678:case 36198:case 36298:case 36306:case 35682:return ym;case 35679:case 36299:case 36307:return bm;case 35680:case 36300:case 36308:case 36293:return Sm;case 36289:case 36303:case 36311:case 36292:return Mm}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Em(i,t){const e=bs(t,this.size,2);i.uniform2fv(this.addr,e)}function Tm(i,t){const e=bs(t,this.size,3);i.uniform3fv(this.addr,e)}function Am(i,t){const e=bs(t,this.size,4);i.uniform4fv(this.addr,e)}function Lm(i,t){const e=bs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Rm(i,t){const e=bs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pm(i,t){const e=bs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vm(i,t){i.uniform1iv(this.addr,t)}function Dm(i,t){i.uniform2iv(this.addr,t)}function Im(i,t){i.uniform3iv(this.addr,t)}function Um(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Nm(i,t){i.uniform2uiv(this.addr,t)}function Fm(i,t){i.uniform3uiv(this.addr,t)}function Om(i,t){i.uniform4uiv(this.addr,t)}function Bm(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ou,r[a])}function zm(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||cu,r[a])}function Hm(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||hu,r[a])}function Gm(i,t,e){const n=this.cache,s=t.length,r=fa(e,s);Fe(n,r)||(i.uniform1iv(this.addr,r),Oe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||lu,r[a])}function Wm(i){switch(i){case 5126:return Cm;case 35664:return Em;case 35665:return Tm;case 35666:return Am;case 35674:return Lm;case 35675:return Rm;case 35676:return Pm;case 5124:case 35670:return Vm;case 35667:case 35671:return Dm;case 35668:case 35672:return Im;case 35669:case 35673:return Um;case 5125:return km;case 36294:return Nm;case 36295:return Fm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}class $m{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wm(e.type)}}class qm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Wm(e.type)}}class Xm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Ka=/(\w+)(\])?(\[|\.)?/g;function Ac(i,t){i.seq.push(t),i.map[t.id]=t}function Ym(i,t,e){const n=i.name,s=n.length;for(Ka.lastIndex=0;;){const r=Ka.exec(n),a=Ka.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){Ac(e,h===void 0?new $m(o,i,t):new qm(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Xm(o),Ac(e,d)),e=d}}}class Yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ym(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const jm=37297;let Km=0;function Zm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Jm(i){const t=le.getPrimaries(le.workingColorSpace),e=le.getPrimaries(i);let n;switch(t===e?n="":t===na&&e===ea?n="LinearDisplayP3ToLinearSRGB":t===ea&&e===na&&(n="LinearSRGBToLinearDisplayP3"),i){case ci:case ha:return[n,"LinearTransferOETF"];case pn:case bl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Rc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Zm(i.getShaderSource(t),a)}else return s}function Qm(i,t){const e=Jm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function t2(i,t){let e;switch(t){case Dh:e="Linear";break;case Ih:e="Reinhard";break;case Uh:e="Cineon";break;case fl:e="ACESFilmic";break;case kh:e="AgX";break;case Nh:e="Neutral";break;case wf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new k;function e2(){le.getLuminanceCoefficients(Cr);const i=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fs).join(`
`)}function i2(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function s2(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fs(i){return i!==""}function Pc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const r2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jo(i){return i.replace(r2,o2)}const a2=new Map;function o2(i,t){let e=Qt[t];if(e===void 0){const n=a2.get(t);if(n!==void 0)e=Qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jo(e)}const l2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dc(i){return i.replace(l2,c2)}function c2(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ic(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function h2(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===nf?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Wn&&(t="SHADOWMAP_TYPE_VSM"),t}function u2(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case hs:case us:t="ENVMAP_TYPE_CUBE";break;case ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function f2(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case us:t="ENVMAP_MODE_REFRACTION";break}return t}function d2(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ul:t="ENVMAP_BLENDING_MULTIPLY";break;case Sf:t="ENVMAP_BLENDING_MIX";break;case Mf:t="ENVMAP_BLENDING_ADD";break}return t}function p2(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function m2(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=h2(e),h=u2(e),l=f2(e),d=d2(e),p=p2(e),m=n2(e),g=i2(r),v=s.createProgram();let u,f,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),u.length>0&&(u+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Fs).join(`
`),f.length>0&&(f+=`
`)):(u=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fs).join(`
`),f=[Ic(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==oi?"#define TONE_MAPPING":"",e.toneMapping!==oi?Qt.tonemapping_pars_fragment:"",e.toneMapping!==oi?t2("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Qt.colorspace_pars_fragment,Qm("linearToOutputTexel",e.outputColorSpace),e2(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fs).join(`
`)),a=Jo(a),a=Pc(a,e),a=Vc(a,e),o=Jo(o),o=Pc(o,e),o=Vc(o,e),a=Dc(a),o=Dc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,f=["#define varying in",e.glslVersion===Zl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+u+a,b=_+f+o,U=Lc(s,s.VERTEX_SHADER,x),E=Lc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,U),s.attachShader(v,E),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(w){if(i.debug.checkShaderErrors){const X=s.getProgramInfoLog(v).trim(),W=s.getShaderInfoLog(U).trim(),Y=s.getShaderInfoLog(E).trim();let it=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(it=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,E);else{const j=Rc(s,U,"vertex"),q=Rc(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+j+`
`+q)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(W===""||Y==="")&&(V=!1);V&&(w.diagnostics={runnable:it,programLog:X,vertexShader:{log:W,prefix:u},fragmentShader:{log:Y,prefix:f}})}s.deleteShader(U),s.deleteShader(E),P=new Yr(s,v),H=s2(s,v)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let H;this.getAttributes=function(){return H===void 0&&R(this),H};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(v,jm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Km++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=E,this}let g2=0;class v2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new _2(t),e.set(t,n)),n}}class _2{constructor(t){this.id=g2++,this.code=t,this.usedTimes=0}}function x2(i,t,e,n,s,r,a){const o=new Sl,c=new v2,h=new Set,l=[],d=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(S){return h.add(S),S===0?"uv":`uv${S}`}function f(S,w,X,W,Y){const it=W.fog,V=Y.geometry,j=S.isMeshStandardMaterial?W.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||j),xt=q&&q.mapping===ca?q.image.height:null,Ct=v[S.type];S.precision!==null&&(g=s.getMaxPrecision(S.precision),g!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",g,"instead."));const St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ut=St!==void 0?St.length:0;let Ht=0;V.morphAttributes.position!==void 0&&(Ht=1),V.morphAttributes.normal!==void 0&&(Ht=2),V.morphAttributes.color!==void 0&&(Ht=3);let nt,ut,Et,Mt;if(Ct){const rn=Dn[Ct];nt=rn.vertexShader,ut=rn.fragmentShader}else nt=S.vertexShader,ut=S.fragmentShader,c.update(S),Et=c.getVertexShaderID(S),Mt=c.getFragmentShaderID(S);const $t=i.getRenderTarget(),Gt=Y.isInstancedMesh===!0,Kt=Y.isBatchedMesh===!0,Jt=!!S.map,st=!!S.matcap,D=!!q,vt=!!S.aoMap,_t=!!S.lightMap,ft=!!S.bumpMap,bt=!!S.normalMap,Ft=!!S.displacementMap,Tt=!!S.emissiveMap,M=!!S.metalnessMap,y=!!S.roughnessMap,N=S.anisotropy>0,C=S.clearcoat>0,A=S.dispersion>0,T=S.iridescence>0,O=S.sheen>0,K=S.transmission>0,et=N&&!!S.anisotropyMap,At=C&&!!S.clearcoatMap,B=C&&!!S.clearcoatNormalMap,tt=C&&!!S.clearcoatRoughnessMap,lt=T&&!!S.iridescenceMap,mt=T&&!!S.iridescenceThicknessMap,ot=O&&!!S.sheenColorMap,ct=O&&!!S.sheenRoughnessMap,pt=!!S.specularMap,Zt=!!S.specularColorMap,z=!!S.specularIntensityMap,yt=K&&!!S.transmissionMap,Q=K&&!!S.thicknessMap,rt=!!S.gradientMap,Lt=!!S.alphaMap,Pt=S.alphaTest>0,re=!!S.alphaHash,Ve=!!S.extensions;let sn=oi;S.toneMapped&&($t===null||$t.isXRRenderTarget===!0)&&(sn=i.toneMapping);const oe={shaderID:Ct,shaderType:S.type,shaderName:S.name,vertexShader:nt,fragmentShader:ut,defines:S.defines,customVertexShaderID:Et,customFragmentShaderID:Mt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:g,batching:Kt,batchingColor:Kt&&Y._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&Y.instanceColor!==null,instancingMorph:Gt&&Y.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:$t===null?i.outputColorSpace:$t.isXRRenderTarget===!0?$t.texture.colorSpace:ci,alphaToCoverage:!!S.alphaToCoverage,map:Jt,matcap:st,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:xt,aoMap:vt,lightMap:_t,bumpMap:ft,normalMap:bt,displacementMap:m&&Ft,emissiveMap:Tt,normalMapObjectSpace:bt&&S.normalMapType===Tf,normalMapTangentSpace:bt&&S.normalMapType===yl,metalnessMap:M,roughnessMap:y,anisotropy:N,anisotropyMap:et,clearcoat:C,clearcoatMap:At,clearcoatNormalMap:B,clearcoatRoughnessMap:tt,dispersion:A,iridescence:T,iridescenceMap:lt,iridescenceThicknessMap:mt,sheen:O,sheenColorMap:ot,sheenRoughnessMap:ct,specularMap:pt,specularColorMap:Zt,specularIntensityMap:z,transmission:K,transmissionMap:yt,thicknessMap:Q,gradientMap:rt,opaque:S.transparent===!1&&S.blending===Ti&&S.alphaToCoverage===!1,alphaMap:Lt,alphaTest:Pt,alphaHash:re,combine:S.combine,mapUv:Jt&&u(S.map.channel),aoMapUv:vt&&u(S.aoMap.channel),lightMapUv:_t&&u(S.lightMap.channel),bumpMapUv:ft&&u(S.bumpMap.channel),normalMapUv:bt&&u(S.normalMap.channel),displacementMapUv:Ft&&u(S.displacementMap.channel),emissiveMapUv:Tt&&u(S.emissiveMap.channel),metalnessMapUv:M&&u(S.metalnessMap.channel),roughnessMapUv:y&&u(S.roughnessMap.channel),anisotropyMapUv:et&&u(S.anisotropyMap.channel),clearcoatMapUv:At&&u(S.clearcoatMap.channel),clearcoatNormalMapUv:B&&u(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&u(S.clearcoatRoughnessMap.channel),iridescenceMapUv:lt&&u(S.iridescenceMap.channel),iridescenceThicknessMapUv:mt&&u(S.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&u(S.sheenColorMap.channel),sheenRoughnessMapUv:ct&&u(S.sheenRoughnessMap.channel),specularMapUv:pt&&u(S.specularMap.channel),specularColorMapUv:Zt&&u(S.specularColorMap.channel),specularIntensityMapUv:z&&u(S.specularIntensityMap.channel),transmissionMapUv:yt&&u(S.transmissionMap.channel),thicknessMapUv:Q&&u(S.thicknessMap.channel),alphaMapUv:Lt&&u(S.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(bt||N),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!V.attributes.uv&&(Jt||Lt),fog:!!it,useFog:S.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:p,skinning:Y.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:Ut,morphTextureStride:Ht,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&X.length>0,shadowMapType:i.shadowMap.type,toneMapping:sn,decodeVideoTexture:Jt&&S.map.isVideoTexture===!0&&le.getTransfer(S.map.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Pe,flipSided:S.side===ln,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ve&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ve&&S.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return oe.vertexUv1s=h.has(1),oe.vertexUv2s=h.has(2),oe.vertexUv3s=h.has(3),h.clear(),oe}function _(S){const w=[];if(S.shaderID?w.push(S.shaderID):(w.push(S.customVertexShaderID),w.push(S.customFragmentShaderID)),S.defines!==void 0)for(const X in S.defines)w.push(X),w.push(S.defines[X]);return S.isRawShaderMaterial===!1&&(x(w,S),b(w,S),w.push(i.outputColorSpace)),w.push(S.customProgramCacheKey),w.join()}function x(S,w){S.push(w.precision),S.push(w.outputColorSpace),S.push(w.envMapMode),S.push(w.envMapCubeUVHeight),S.push(w.mapUv),S.push(w.alphaMapUv),S.push(w.lightMapUv),S.push(w.aoMapUv),S.push(w.bumpMapUv),S.push(w.normalMapUv),S.push(w.displacementMapUv),S.push(w.emissiveMapUv),S.push(w.metalnessMapUv),S.push(w.roughnessMapUv),S.push(w.anisotropyMapUv),S.push(w.clearcoatMapUv),S.push(w.clearcoatNormalMapUv),S.push(w.clearcoatRoughnessMapUv),S.push(w.iridescenceMapUv),S.push(w.iridescenceThicknessMapUv),S.push(w.sheenColorMapUv),S.push(w.sheenRoughnessMapUv),S.push(w.specularMapUv),S.push(w.specularColorMapUv),S.push(w.specularIntensityMapUv),S.push(w.transmissionMapUv),S.push(w.thicknessMapUv),S.push(w.combine),S.push(w.fogExp2),S.push(w.sizeAttenuation),S.push(w.morphTargetsCount),S.push(w.morphAttributeCount),S.push(w.numDirLights),S.push(w.numPointLights),S.push(w.numSpotLights),S.push(w.numSpotLightMaps),S.push(w.numHemiLights),S.push(w.numRectAreaLights),S.push(w.numDirLightShadows),S.push(w.numPointLightShadows),S.push(w.numSpotLightShadows),S.push(w.numSpotLightShadowsWithMaps),S.push(w.numLightProbes),S.push(w.shadowMapType),S.push(w.toneMapping),S.push(w.numClippingPlanes),S.push(w.numClipIntersection),S.push(w.depthPacking)}function b(S,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),S.push(o.mask)}function U(S){const w=v[S.type];let X;if(w){const W=Dn[w];X=gs.clone(W.uniforms)}else X=S.uniforms;return X}function E(S,w){let X;for(let W=0,Y=l.length;W<Y;W++){const it=l[W];if(it.cacheKey===w){X=it,++X.usedTimes;break}}return X===void 0&&(X=new m2(i,w,S,r),l.push(X)),X}function R(S){if(--S.usedTimes===0){const w=l.indexOf(S);l[w]=l[l.length-1],l.pop(),S.destroy()}}function P(S){c.remove(S)}function H(){c.dispose()}return{getParameters:f,getProgramCacheKey:_,getUniforms:U,acquireProgram:E,releaseProgram:R,releaseShaderCache:P,programs:l,dispose:H}}function y2(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function b2(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Uc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function kc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,p,m,g,v,u){let f=i[t];return f===void 0?(f={id:d.id,object:d,geometry:p,material:m,groupOrder:g,renderOrder:d.renderOrder,z:v,group:u},i[t]=f):(f.id=d.id,f.object=d,f.geometry=p,f.material=m,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=v,f.group=u),t++,f}function o(d,p,m,g,v,u){const f=a(d,p,m,g,v,u);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):e.push(f)}function c(d,p,m,g,v,u){const f=a(d,p,m,g,v,u);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function h(d,p){e.length>1&&e.sort(d||b2),n.length>1&&n.sort(p||Uc),s.length>1&&s.sort(p||Uc)}function l(){for(let d=t,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function S2(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new kc,i.set(n,[a])):s>=r.length?(a=new kc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function M2(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new k,color:new zt};break;case"SpotLight":e={position:new k,direction:new k,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new k,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new k,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new k,halfWidth:new k,halfHeight:new k};break}return i[t.id]=e,e}}}function w2(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let C2=0;function E2(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function T2(i){const t=new M2,e=w2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new k);const s=new k,r=new ie,a=new ie;function o(h){let l=0,d=0,p=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let m=0,g=0,v=0,u=0,f=0,_=0,x=0,b=0,U=0,E=0,R=0;h.sort(E2);for(let H=0,S=h.length;H<S;H++){const w=h[H],X=w.color,W=w.intensity,Y=w.distance,it=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)l+=X.r*W,d+=X.g*W,p+=X.b*W;else if(w.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(w.sh.coefficients[V],W);R++}else if(w.isDirectionalLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const j=w.shadow,q=e.get(w);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=it,n.directionalShadowMatrix[m]=w.shadow.matrix,_++}n.directional[m]=V,m++}else if(w.isSpotLight){const V=t.get(w);V.position.setFromMatrixPosition(w.matrixWorld),V.color.copy(X).multiplyScalar(W),V.distance=Y,V.coneCos=Math.cos(w.angle),V.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),V.decay=w.decay,n.spot[v]=V;const j=w.shadow;if(w.map&&(n.spotLightMap[U]=w.map,U++,j.updateMatrices(w),w.castShadow&&E++),n.spotLightMatrix[v]=j.matrix,w.castShadow){const q=e.get(w);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=it,b++}v++}else if(w.isRectAreaLight){const V=t.get(w);V.color.copy(X).multiplyScalar(W),V.halfWidth.set(w.width*.5,0,0),V.halfHeight.set(0,w.height*.5,0),n.rectArea[u]=V,u++}else if(w.isPointLight){const V=t.get(w);if(V.color.copy(w.color).multiplyScalar(w.intensity),V.distance=w.distance,V.decay=w.decay,w.castShadow){const j=w.shadow,q=e.get(w);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=it,n.pointShadowMatrix[g]=w.shadow.matrix,x++}n.point[g]=V,g++}else if(w.isHemisphereLight){const V=t.get(w);V.skyColor.copy(w.color).multiplyScalar(W),V.groundColor.copy(w.groundColor).multiplyScalar(W),n.hemi[f]=V,f++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=wt.LTC_FLOAT_1,n.rectAreaLTC2=wt.LTC_FLOAT_2):(n.rectAreaLTC1=wt.LTC_HALF_1,n.rectAreaLTC2=wt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=d,n.ambient[2]=p;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==v||P.rectAreaLength!==u||P.hemiLength!==f||P.numDirectionalShadows!==_||P.numPointShadows!==x||P.numSpotShadows!==b||P.numSpotMaps!==U||P.numLightProbes!==R)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=u,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=b+U-E,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,P.directionalLength=m,P.pointLength=g,P.spotLength=v,P.rectAreaLength=u,P.hemiLength=f,P.numDirectionalShadows=_,P.numPointShadows=x,P.numSpotShadows=b,P.numSpotMaps=U,P.numLightProbes=R,n.version=C2++)}function c(h,l){let d=0,p=0,m=0,g=0,v=0;const u=l.matrixWorldInverse;for(let f=0,_=h.length;f<_;f++){const x=h[f];if(x.isDirectionalLight){const b=n.directional[d];b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),d++}else if(x.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),m++}else if(x.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),a.identity(),r.copy(x.matrixWorld),r.premultiply(u),a.extractRotation(r),b.halfWidth.set(x.width*.5,0,0),b.halfHeight.set(0,x.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(x.matrixWorld),b.position.applyMatrix4(u),p++}else if(x.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(x.matrixWorld),b.direction.transformDirection(u),v++}}}return{setup:o,setupView:c,state:n}}function Nc(i){const t=new T2(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function A2(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Nc(i),t.set(s,[o])):r>=a.length?(o=new Nc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class uu extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class L2 extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const R2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,P2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function V2(i,t,e){let n=new Ml;const s=new at,r=new at,a=new ge,o=new uu({depthPacking:Yh}),c=new L2,h={},l=e.maxTextureSize,d={[li]:ln,[ln]:li,[Pe]:Pe},p=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:R2,fragmentShader:P2}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ue;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ht(g,p),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let f=this.type;this.render=function(E,R,P){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||E.length===0)return;const H=i.getRenderTarget(),S=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),X=i.state;X.setBlending(kn),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const W=f!==Wn&&this.type===Wn,Y=f===Wn&&this.type!==Wn;for(let it=0,V=E.length;it<V;it++){const j=E[it],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const xt=q.getFrameExtents();if(s.multiply(xt),r.copy(q.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/xt.x),s.x=r.x*xt.x,q.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/xt.y),s.y=r.y*xt.y,q.mapSize.y=r.y)),q.map===null||W===!0||Y===!0){const St=this.type!==Wn?{minFilter:Ne,magFilter:Ne}:{};q.map!==null&&q.map.dispose(),q.map=new mn(s.x,s.y,St),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Ct=q.getViewportCount();for(let St=0;St<Ct;St++){const Ut=q.getViewport(St);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),X.viewport(a),q.updateMatrices(j,St),n=q.getFrustum(),b(R,P,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===Wn&&_(q,P),q.needsUpdate=!1}f=this.type,u.needsUpdate=!1,i.setRenderTarget(H,S,w)};function _(E,R){const P=t.update(v);p.defines.VSM_SAMPLES!==E.blurSamples&&(p.defines.VSM_SAMPLES=E.blurSamples,m.defines.VSM_SAMPLES=E.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new mn(s.x,s.y)),p.uniforms.shadow_pass.value=E.map.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,P,p,v,null),m.uniforms.shadow_pass.value=E.mapPass.texture,m.uniforms.resolution.value=E.mapSize,m.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,P,m,v,null)}function x(E,R,P,H){let S=null;const w=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(w!==void 0)S=w;else if(S=P.isPointLight===!0?c:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const X=S.uuid,W=R.uuid;let Y=h[X];Y===void 0&&(Y={},h[X]=Y);let it=Y[W];it===void 0&&(it=S.clone(),Y[W]=it,R.addEventListener("dispose",U)),S=it}if(S.visible=R.visible,S.wireframe=R.wireframe,H===Wn?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:d[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=i.properties.get(S);X.light=P}return S}function b(E,R,P,H,S){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Wn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const W=t.update(E),Y=E.material;if(Array.isArray(Y)){const it=W.groups;for(let V=0,j=it.length;V<j;V++){const q=it[V],xt=Y[q.materialIndex];if(xt&&xt.visible){const Ct=x(E,xt,H,S);E.onBeforeShadow(i,E,R,P,W,Ct,q),i.renderBufferDirect(P,null,W,Ct,E,q),E.onAfterShadow(i,E,R,P,W,Ct,q)}}}else if(Y.visible){const it=x(E,Y,H,S);E.onBeforeShadow(i,E,R,P,W,it,null),i.renderBufferDirect(P,null,W,it,E,null),E.onAfterShadow(i,E,R,P,W,it,null)}}const X=E.children;for(let W=0,Y=X.length;W<Y;W++)b(X[W],R,P,H,S)}function U(E){E.target.removeEventListener("dispose",U);for(const P in h){const H=h[P],S=E.target.uuid;S in H&&(H[S].dispose(),delete H[S])}}}const D2={[mo]:go,[vo]:yo,[_o]:bo,[cs]:xo,[go]:mo,[yo]:vo,[bo]:_o,[xo]:cs};function I2(i){function t(){let z=!1;const yt=new ge;let Q=null;const rt=new ge(0,0,0,0);return{setMask:function(Lt){Q!==Lt&&!z&&(i.colorMask(Lt,Lt,Lt,Lt),Q=Lt)},setLocked:function(Lt){z=Lt},setClear:function(Lt,Pt,re,Ve,sn){sn===!0&&(Lt*=Ve,Pt*=Ve,re*=Ve),yt.set(Lt,Pt,re,Ve),rt.equals(yt)===!1&&(i.clearColor(Lt,Pt,re,Ve),rt.copy(yt))},reset:function(){z=!1,Q=null,rt.set(-1,0,0,0)}}}function e(){let z=!1,yt=!1,Q=null,rt=null,Lt=null;return{setReversed:function(Pt){yt=Pt},setTest:function(Pt){Pt?Et(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Pt){Q!==Pt&&!z&&(i.depthMask(Pt),Q=Pt)},setFunc:function(Pt){if(yt&&(Pt=D2[Pt]),rt!==Pt){switch(Pt){case mo:i.depthFunc(i.NEVER);break;case go:i.depthFunc(i.ALWAYS);break;case vo:i.depthFunc(i.LESS);break;case cs:i.depthFunc(i.LEQUAL);break;case _o:i.depthFunc(i.EQUAL);break;case xo:i.depthFunc(i.GEQUAL);break;case yo:i.depthFunc(i.GREATER);break;case bo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}rt=Pt}},setLocked:function(Pt){z=Pt},setClear:function(Pt){Lt!==Pt&&(i.clearDepth(Pt),Lt=Pt)},reset:function(){z=!1,Q=null,rt=null,Lt=null}}}function n(){let z=!1,yt=null,Q=null,rt=null,Lt=null,Pt=null,re=null,Ve=null,sn=null;return{setTest:function(oe){z||(oe?Et(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function(oe){yt!==oe&&!z&&(i.stencilMask(oe),yt=oe)},setFunc:function(oe,rn,Fn){(Q!==oe||rt!==rn||Lt!==Fn)&&(i.stencilFunc(oe,rn,Fn),Q=oe,rt=rn,Lt=Fn)},setOp:function(oe,rn,Fn){(Pt!==oe||re!==rn||Ve!==Fn)&&(i.stencilOp(oe,rn,Fn),Pt=oe,re=rn,Ve=Fn)},setLocked:function(oe){z=oe},setClear:function(oe){sn!==oe&&(i.clearStencil(oe),sn=oe)},reset:function(){z=!1,yt=null,Q=null,rt=null,Lt=null,Pt=null,re=null,Ve=null,sn=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let h={},l={},d=new WeakMap,p=[],m=null,g=!1,v=null,u=null,f=null,_=null,x=null,b=null,U=null,E=new zt(0,0,0),R=0,P=!1,H=null,S=null,w=null,X=null,W=null;const Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let it=!1,V=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(j)[1]),it=V>=1):j.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),it=V>=2);let q=null,xt={};const Ct=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),Ut=new ge().fromArray(Ct),Ht=new ge().fromArray(St);function nt(z,yt,Q,rt){const Lt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(z,Pt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let re=0;re<Q;re++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,rt,0,i.RGBA,i.UNSIGNED_BYTE,Lt):i.texImage2D(yt+re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Lt);return Pt}const ut={};ut[i.TEXTURE_2D]=nt(i.TEXTURE_2D,i.TEXTURE_2D,1),ut[i.TEXTURE_CUBE_MAP]=nt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ut[i.TEXTURE_2D_ARRAY]=nt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ut[i.TEXTURE_3D]=nt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Et(i.DEPTH_TEST),r.setFunc(cs),_t(!1),ft(Xl),Et(i.CULL_FACE),D(kn);function Et(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Mt(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function $t(z,yt){return l[z]!==yt?(i.bindFramebuffer(z,yt),l[z]=yt,z===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=yt),z===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function Gt(z,yt){let Q=p,rt=!1;if(z){Q=d.get(yt),Q===void 0&&(Q=[],d.set(yt,Q));const Lt=z.textures;if(Q.length!==Lt.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,re=Lt.length;Pt<re;Pt++)Q[Pt]=i.COLOR_ATTACHMENT0+Pt;Q.length=Lt.length,rt=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,rt=!0);rt&&i.drawBuffers(Q)}function Kt(z){return m!==z?(i.useProgram(z),m=z,!0):!1}const Jt={[Si]:i.FUNC_ADD,[rf]:i.FUNC_SUBTRACT,[af]:i.FUNC_REVERSE_SUBTRACT};Jt[of]=i.MIN,Jt[lf]=i.MAX;const st={[cf]:i.ZERO,[hf]:i.ONE,[uf]:i.SRC_COLOR,[fo]:i.SRC_ALPHA,[vf]:i.SRC_ALPHA_SATURATE,[mf]:i.DST_COLOR,[df]:i.DST_ALPHA,[ff]:i.ONE_MINUS_SRC_COLOR,[po]:i.ONE_MINUS_SRC_ALPHA,[gf]:i.ONE_MINUS_DST_COLOR,[pf]:i.ONE_MINUS_DST_ALPHA,[_f]:i.CONSTANT_COLOR,[xf]:i.ONE_MINUS_CONSTANT_COLOR,[yf]:i.CONSTANT_ALPHA,[bf]:i.ONE_MINUS_CONSTANT_ALPHA};function D(z,yt,Q,rt,Lt,Pt,re,Ve,sn,oe){if(z===kn){g===!0&&(Mt(i.BLEND),g=!1);return}if(g===!1&&(Et(i.BLEND),g=!0),z!==sf){if(z!==v||oe!==P){if((u!==Si||x!==Si)&&(i.blendEquation(i.FUNC_ADD),u=Si,x=Si),oe)switch(z){case Ti:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ti:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ai:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}f=null,_=null,b=null,U=null,E.set(0,0,0),R=0,v=z,P=oe}return}Lt=Lt||yt,Pt=Pt||Q,re=re||rt,(yt!==u||Lt!==x)&&(i.blendEquationSeparate(Jt[yt],Jt[Lt]),u=yt,x=Lt),(Q!==f||rt!==_||Pt!==b||re!==U)&&(i.blendFuncSeparate(st[Q],st[rt],st[Pt],st[re]),f=Q,_=rt,b=Pt,U=re),(Ve.equals(E)===!1||sn!==R)&&(i.blendColor(Ve.r,Ve.g,Ve.b,sn),E.copy(Ve),R=sn),v=z,P=!1}function vt(z,yt){z.side===Pe?Mt(i.CULL_FACE):Et(i.CULL_FACE);let Q=z.side===ln;yt&&(Q=!Q),_t(Q),z.blending===Ti&&z.transparent===!1?D(kn):D(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),s.setMask(z.colorWrite);const rt=z.stencilWrite;a.setTest(rt),rt&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ft(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?Et(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function _t(z){H!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),H=z)}function ft(z){z!==tf?(Et(i.CULL_FACE),z!==S&&(z===Xl?i.cullFace(i.BACK):z===ef?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),S=z}function bt(z){z!==w&&(it&&i.lineWidth(z),w=z)}function Ft(z,yt,Q){z?(Et(i.POLYGON_OFFSET_FILL),(X!==yt||W!==Q)&&(i.polygonOffset(yt,Q),X=yt,W=Q)):Mt(i.POLYGON_OFFSET_FILL)}function Tt(z){z?Et(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function M(z){z===void 0&&(z=i.TEXTURE0+Y-1),q!==z&&(i.activeTexture(z),q=z)}function y(z,yt,Q){Q===void 0&&(q===null?Q=i.TEXTURE0+Y-1:Q=q);let rt=xt[Q];rt===void 0&&(rt={type:void 0,texture:void 0},xt[Q]=rt),(rt.type!==z||rt.texture!==yt)&&(q!==Q&&(i.activeTexture(Q),q=Q),i.bindTexture(z,yt||ut[z]),rt.type=z,rt.texture=yt)}function N(){const z=xt[q];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function C(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function A(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function T(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function O(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function K(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function At(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function B(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function mt(z){Ut.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ut.copy(z))}function ot(z){Ht.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),Ht.copy(z))}function ct(z,yt){let Q=c.get(yt);Q===void 0&&(Q=new WeakMap,c.set(yt,Q));let rt=Q.get(z);rt===void 0&&(rt=i.getUniformBlockIndex(yt,z.name),Q.set(z,rt))}function pt(z,yt){const rt=c.get(yt).get(z);o.get(yt)!==rt&&(i.uniformBlockBinding(yt,rt,z.__bindingPointIndex),o.set(yt,rt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,xt={},l={},d=new WeakMap,p=[],m=null,g=!1,v=null,u=null,f=null,_=null,x=null,b=null,U=null,E=new zt(0,0,0),R=0,P=!1,H=null,S=null,w=null,X=null,W=null,Ut.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Et,disable:Mt,bindFramebuffer:$t,drawBuffers:Gt,useProgram:Kt,setBlending:D,setMaterial:vt,setFlipSided:_t,setCullFace:ft,setLineWidth:bt,setPolygonOffset:Ft,setScissorTest:Tt,activeTexture:M,bindTexture:y,unbindTexture:N,compressedTexImage2D:C,compressedTexImage3D:A,texImage2D:tt,texImage3D:lt,updateUBOMapping:ct,uniformBlockBinding:pt,texStorage2D:At,texStorage3D:B,texSubImage2D:T,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:et,scissor:mt,viewport:ot,reset:Zt}}function Fc(i,t,e,n){const s=U2(n);switch(e){case Hh:return i*t;case Wh:return i*t;case $h:return i*t*2;case gl:return i*t/s.components*s.byteLength;case vl:return i*t/s.components*s.byteLength;case qh:return i*t*2/s.components*s.byteLength;case _l:return i*t*2/s.components*s.byteLength;case Gh:return i*t*3/s.components*s.byteLength;case Tn:return i*t*4/s.components*s.byteLength;case xl:return i*t*4/s.components*s.byteLength;case Hr:case Gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wr:case $r:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:case Ao:return Math.max(i,16)*Math.max(t,8)/4;case Co:case To:return Math.max(i,8)*Math.max(t,8)/2;case Lo:case Ro:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Do:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ko:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ho:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Go:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case $o:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qr:case qo:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Xh:case Yo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case jo:case Ko:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function U2(i){switch(i){case Kn:case Oh:return{byteLength:1,components:1};case Ys:case Bh:case Ln:return{byteLength:2,components:1};case pl:case ml:return{byteLength:2,components:4};case Li:case dl:case Un:return{byteLength:4,components:1};case zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function k2(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new at,l=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(M,y){return m?new OffscreenCanvas(M,y):js("canvas")}function v(M,y,N){let C=1;const A=Tt(M);if((A.width>N||A.height>N)&&(C=N/Math.max(A.width,A.height)),C<1)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap||typeof VideoFrame<"u"&&M instanceof VideoFrame){const T=Math.floor(C*A.width),O=Math.floor(C*A.height);d===void 0&&(d=g(T,O));const K=y?g(T,O):d;return K.width=T,K.height=O,K.getContext("2d").drawImage(M,0,0,T,O),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+T+"x"+O+")."),K}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),M;return M}function u(M){return M.generateMipmaps&&M.minFilter!==Ne&&M.minFilter!==En}function f(M){i.generateMipmap(M)}function _(M,y,N,C,A=!1){if(M!==null){if(i[M]!==void 0)return i[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let T=y;if(y===i.RED&&(N===i.FLOAT&&(T=i.R32F),N===i.HALF_FLOAT&&(T=i.R16F),N===i.UNSIGNED_BYTE&&(T=i.R8)),y===i.RED_INTEGER&&(N===i.UNSIGNED_BYTE&&(T=i.R8UI),N===i.UNSIGNED_SHORT&&(T=i.R16UI),N===i.UNSIGNED_INT&&(T=i.R32UI),N===i.BYTE&&(T=i.R8I),N===i.SHORT&&(T=i.R16I),N===i.INT&&(T=i.R32I)),y===i.RG&&(N===i.FLOAT&&(T=i.RG32F),N===i.HALF_FLOAT&&(T=i.RG16F),N===i.UNSIGNED_BYTE&&(T=i.RG8)),y===i.RG_INTEGER&&(N===i.UNSIGNED_BYTE&&(T=i.RG8UI),N===i.UNSIGNED_SHORT&&(T=i.RG16UI),N===i.UNSIGNED_INT&&(T=i.RG32UI),N===i.BYTE&&(T=i.RG8I),N===i.SHORT&&(T=i.RG16I),N===i.INT&&(T=i.RG32I)),y===i.RGB_INTEGER&&(N===i.UNSIGNED_BYTE&&(T=i.RGB8UI),N===i.UNSIGNED_SHORT&&(T=i.RGB16UI),N===i.UNSIGNED_INT&&(T=i.RGB32UI),N===i.BYTE&&(T=i.RGB8I),N===i.SHORT&&(T=i.RGB16I),N===i.INT&&(T=i.RGB32I)),y===i.RGBA_INTEGER&&(N===i.UNSIGNED_BYTE&&(T=i.RGBA8UI),N===i.UNSIGNED_SHORT&&(T=i.RGBA16UI),N===i.UNSIGNED_INT&&(T=i.RGBA32UI),N===i.BYTE&&(T=i.RGBA8I),N===i.SHORT&&(T=i.RGBA16I),N===i.INT&&(T=i.RGBA32I)),y===i.RGB&&N===i.UNSIGNED_INT_5_9_9_9_REV&&(T=i.RGB9_E5),y===i.RGBA){const O=A?ta:le.getTransfer(C);N===i.FLOAT&&(T=i.RGBA32F),N===i.HALF_FLOAT&&(T=i.RGBA16F),N===i.UNSIGNED_BYTE&&(T=O===_e?i.SRGB8_ALPHA8:i.RGBA8),N===i.UNSIGNED_SHORT_4_4_4_4&&(T=i.RGBA4),N===i.UNSIGNED_SHORT_5_5_5_1&&(T=i.RGB5_A1)}return(T===i.R16F||T===i.R32F||T===i.RG16F||T===i.RG32F||T===i.RGBA16F||T===i.RGBA32F)&&t.get("EXT_color_buffer_float"),T}function x(M,y){let N;return M?y===null||y===Li||y===ds?N=i.DEPTH24_STENCIL8:y===Un?N=i.DEPTH32F_STENCIL8:y===Ys&&(N=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Li||y===ds?N=i.DEPTH_COMPONENT24:y===Un?N=i.DEPTH_COMPONENT32F:y===Ys&&(N=i.DEPTH_COMPONENT16),N}function b(M,y){return u(M)===!0||M.isFramebufferTexture&&M.minFilter!==Ne&&M.minFilter!==En?Math.log2(Math.max(y.width,y.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?y.mipmaps.length:1}function U(M){const y=M.target;y.removeEventListener("dispose",U),R(y),y.isVideoTexture&&l.delete(y)}function E(M){const y=M.target;y.removeEventListener("dispose",E),H(y)}function R(M){const y=n.get(M);if(y.__webglInit===void 0)return;const N=M.source,C=p.get(N);if(C){const A=C[y.__cacheKey];A.usedTimes--,A.usedTimes===0&&P(M),Object.keys(C).length===0&&p.delete(N)}n.remove(M)}function P(M){const y=n.get(M);i.deleteTexture(y.__webglTexture);const N=M.source,C=p.get(N);delete C[y.__cacheKey],a.memory.textures--}function H(M){const y=n.get(M);if(M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let C=0;C<6;C++){if(Array.isArray(y.__webglFramebuffer[C]))for(let A=0;A<y.__webglFramebuffer[C].length;A++)i.deleteFramebuffer(y.__webglFramebuffer[C][A]);else i.deleteFramebuffer(y.__webglFramebuffer[C]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[C])}else{if(Array.isArray(y.__webglFramebuffer))for(let C=0;C<y.__webglFramebuffer.length;C++)i.deleteFramebuffer(y.__webglFramebuffer[C]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let C=0;C<y.__webglColorRenderbuffer.length;C++)y.__webglColorRenderbuffer[C]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[C]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const N=M.textures;for(let C=0,A=N.length;C<A;C++){const T=n.get(N[C]);T.__webglTexture&&(i.deleteTexture(T.__webglTexture),a.memory.textures--),n.remove(N[C])}n.remove(M)}let S=0;function w(){S=0}function X(){const M=S;return M>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+s.maxTextures),S+=1,M}function W(M){const y=[];return y.push(M.wrapS),y.push(M.wrapT),y.push(M.wrapR||0),y.push(M.magFilter),y.push(M.minFilter),y.push(M.anisotropy),y.push(M.internalFormat),y.push(M.format),y.push(M.type),y.push(M.generateMipmaps),y.push(M.premultiplyAlpha),y.push(M.flipY),y.push(M.unpackAlignment),y.push(M.colorSpace),y.join()}function Y(M,y){const N=n.get(M);if(M.isVideoTexture&&bt(M),M.isRenderTargetTexture===!1&&M.version>0&&N.__version!==M.version){const C=M.image;if(C===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(C.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(N,M,y);return}}e.bindTexture(i.TEXTURE_2D,N.__webglTexture,i.TEXTURE0+y)}function it(M,y){const N=n.get(M);if(M.version>0&&N.__version!==M.version){Ht(N,M,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,N.__webglTexture,i.TEXTURE0+y)}function V(M,y){const N=n.get(M);if(M.version>0&&N.__version!==M.version){Ht(N,M,y);return}e.bindTexture(i.TEXTURE_3D,N.__webglTexture,i.TEXTURE0+y)}function j(M,y){const N=n.get(M);if(M.version>0&&N.__version!==M.version){nt(N,M,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+y)}const q={[fs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[wo]:i.MIRRORED_REPEAT},xt={[Ne]:i.NEAREST,[Cf]:i.NEAREST_MIPMAP_NEAREST,[rr]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Ei]:i.LINEAR_MIPMAP_LINEAR},Ct={[Af]:i.NEVER,[If]:i.ALWAYS,[Lf]:i.LESS,[jh]:i.LEQUAL,[Rf]:i.EQUAL,[Df]:i.GEQUAL,[Pf]:i.GREATER,[Vf]:i.NOTEQUAL};function St(M,y){if(y.type===Un&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===En||y.magFilter===ba||y.magFilter===rr||y.magFilter===Ei||y.minFilter===En||y.minFilter===ba||y.minFilter===rr||y.minFilter===Ei)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(M,i.TEXTURE_WRAP_S,q[y.wrapS]),i.texParameteri(M,i.TEXTURE_WRAP_T,q[y.wrapT]),(M===i.TEXTURE_3D||M===i.TEXTURE_2D_ARRAY)&&i.texParameteri(M,i.TEXTURE_WRAP_R,q[y.wrapR]),i.texParameteri(M,i.TEXTURE_MAG_FILTER,xt[y.magFilter]),i.texParameteri(M,i.TEXTURE_MIN_FILTER,xt[y.minFilter]),y.compareFunction&&(i.texParameteri(M,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(M,i.TEXTURE_COMPARE_FUNC,Ct[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ne||y.minFilter!==rr&&y.minFilter!==Ei||y.type===Un&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const N=t.get("EXT_texture_filter_anisotropic");i.texParameterf(M,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ut(M,y){let N=!1;M.__webglInit===void 0&&(M.__webglInit=!0,y.addEventListener("dispose",U));const C=y.source;let A=p.get(C);A===void 0&&(A={},p.set(C,A));const T=W(y);if(T!==M.__cacheKey){A[T]===void 0&&(A[T]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,N=!0),A[T].usedTimes++;const O=A[M.__cacheKey];O!==void 0&&(A[M.__cacheKey].usedTimes--,O.usedTimes===0&&P(y)),M.__cacheKey=T,M.__webglTexture=A[T].texture}return N}function Ht(M,y,N){let C=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(C=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(C=i.TEXTURE_3D);const A=Ut(M,y),T=y.source;e.bindTexture(C,M.__webglTexture,i.TEXTURE0+N);const O=n.get(T);if(T.version!==O.__version||A===!0){e.activeTexture(i.TEXTURE0+N);const K=le.getPrimaries(le.workingColorSpace),et=y.colorSpace===ri?null:le.getPrimaries(y.colorSpace),At=y.colorSpace===ri||K===et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let B=v(y.image,!1,s.maxTextureSize);B=Ft(y,B);const tt=r.convert(y.format,y.colorSpace),lt=r.convert(y.type);let mt=_(y.internalFormat,tt,lt,y.colorSpace,y.isVideoTexture);St(C,y);let ot;const ct=y.mipmaps,pt=y.isVideoTexture!==!0,Zt=O.__version===void 0||A===!0,z=T.dataReady,yt=b(y,B);if(y.isDepthTexture)mt=x(y.format===ps,y.type),Zt&&(pt?e.texStorage2D(i.TEXTURE_2D,1,mt,B.width,B.height):e.texImage2D(i.TEXTURE_2D,0,mt,B.width,B.height,0,tt,lt,null));else if(y.isDataTexture)if(ct.length>0){pt&&Zt&&e.texStorage2D(i.TEXTURE_2D,yt,mt,ct[0].width,ct[0].height);for(let Q=0,rt=ct.length;Q<rt;Q++)ot=ct[Q],pt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,tt,lt,ot.data):e.texImage2D(i.TEXTURE_2D,Q,mt,ot.width,ot.height,0,tt,lt,ot.data);y.generateMipmaps=!1}else pt?(Zt&&e.texStorage2D(i.TEXTURE_2D,yt,mt,B.width,B.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,B.width,B.height,tt,lt,B.data)):e.texImage2D(i.TEXTURE_2D,0,mt,B.width,B.height,0,tt,lt,B.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){pt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,mt,ct[0].width,ct[0].height,B.depth);for(let Q=0,rt=ct.length;Q<rt;Q++)if(ot=ct[Q],y.format!==Tn)if(tt!==null)if(pt){if(z)if(y.layerUpdates.size>0){const Lt=Fc(ot.width,ot.height,y.format,y.type);for(const Pt of y.layerUpdates){const re=ot.data.subarray(Pt*Lt/ot.data.BYTES_PER_ELEMENT,(Pt+1)*Lt/ot.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,Pt,ot.width,ot.height,1,tt,re,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,B.depth,tt,ot.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,mt,ot.width,ot.height,B.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,ot.width,ot.height,B.depth,tt,lt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,Q,mt,ot.width,ot.height,B.depth,0,tt,lt,ot.data)}else{pt&&Zt&&e.texStorage2D(i.TEXTURE_2D,yt,mt,ct[0].width,ct[0].height);for(let Q=0,rt=ct.length;Q<rt;Q++)ot=ct[Q],y.format!==Tn?tt!==null?pt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,tt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,Q,mt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,ot.width,ot.height,tt,lt,ot.data):e.texImage2D(i.TEXTURE_2D,Q,mt,ot.width,ot.height,0,tt,lt,ot.data)}else if(y.isDataArrayTexture)if(pt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,mt,B.width,B.height,B.depth),z)if(y.layerUpdates.size>0){const Q=Fc(B.width,B.height,y.format,y.type);for(const rt of y.layerUpdates){const Lt=B.data.subarray(rt*Q/B.data.BYTES_PER_ELEMENT,(rt+1)*Q/B.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,rt,B.width,B.height,1,tt,lt,Lt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,B.width,B.height,B.depth,tt,lt,B.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,mt,B.width,B.height,B.depth,0,tt,lt,B.data);else if(y.isData3DTexture)pt?(Zt&&e.texStorage3D(i.TEXTURE_3D,yt,mt,B.width,B.height,B.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,B.width,B.height,B.depth,tt,lt,B.data)):e.texImage3D(i.TEXTURE_3D,0,mt,B.width,B.height,B.depth,0,tt,lt,B.data);else if(y.isFramebufferTexture){if(Zt)if(pt)e.texStorage2D(i.TEXTURE_2D,yt,mt,B.width,B.height);else{let Q=B.width,rt=B.height;for(let Lt=0;Lt<yt;Lt++)e.texImage2D(i.TEXTURE_2D,Lt,mt,Q,rt,0,tt,lt,null),Q>>=1,rt>>=1}}else if(ct.length>0){if(pt&&Zt){const Q=Tt(ct[0]);e.texStorage2D(i.TEXTURE_2D,yt,mt,Q.width,Q.height)}for(let Q=0,rt=ct.length;Q<rt;Q++)ot=ct[Q],pt?z&&e.texSubImage2D(i.TEXTURE_2D,Q,0,0,tt,lt,ot):e.texImage2D(i.TEXTURE_2D,Q,mt,tt,lt,ot);y.generateMipmaps=!1}else if(pt){if(Zt){const Q=Tt(B);e.texStorage2D(i.TEXTURE_2D,yt,mt,Q.width,Q.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,tt,lt,B)}else e.texImage2D(i.TEXTURE_2D,0,mt,tt,lt,B);u(y)&&f(C),O.__version=T.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function nt(M,y,N){if(y.image.length!==6)return;const C=Ut(M,y),A=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,M.__webglTexture,i.TEXTURE0+N);const T=n.get(A);if(A.version!==T.__version||C===!0){e.activeTexture(i.TEXTURE0+N);const O=le.getPrimaries(le.workingColorSpace),K=y.colorSpace===ri?null:le.getPrimaries(y.colorSpace),et=y.colorSpace===ri||O===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);const At=y.isCompressedTexture||y.image[0].isCompressedTexture,B=y.image[0]&&y.image[0].isDataTexture,tt=[];for(let rt=0;rt<6;rt++)!At&&!B?tt[rt]=v(y.image[rt],!0,s.maxCubemapSize):tt[rt]=B?y.image[rt].image:y.image[rt],tt[rt]=Ft(y,tt[rt]);const lt=tt[0],mt=r.convert(y.format,y.colorSpace),ot=r.convert(y.type),ct=_(y.internalFormat,mt,ot,y.colorSpace),pt=y.isVideoTexture!==!0,Zt=T.__version===void 0||C===!0,z=A.dataReady;let yt=b(y,lt);St(i.TEXTURE_CUBE_MAP,y);let Q;if(At){pt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ct,lt.width,lt.height);for(let rt=0;rt<6;rt++){Q=tt[rt].mipmaps;for(let Lt=0;Lt<Q.length;Lt++){const Pt=Q[Lt];y.format!==Tn?mt!==null?pt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,0,0,Pt.width,Pt.height,mt,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,ct,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):pt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,0,0,Pt.width,Pt.height,mt,ot,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt,ct,Pt.width,Pt.height,0,mt,ot,Pt.data)}}}else{if(Q=y.mipmaps,pt&&Zt){Q.length>0&&yt++;const rt=Tt(tt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,ct,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(B){pt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,tt[rt].width,tt[rt].height,mt,ot,tt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ct,tt[rt].width,tt[rt].height,0,mt,ot,tt[rt].data);for(let Lt=0;Lt<Q.length;Lt++){const re=Q[Lt].image[rt].image;pt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,0,0,re.width,re.height,mt,ot,re.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,ct,re.width,re.height,0,mt,ot,re.data)}}else{pt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,mt,ot,tt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,ct,mt,ot,tt[rt]);for(let Lt=0;Lt<Q.length;Lt++){const Pt=Q[Lt];pt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,0,0,mt,ot,Pt.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Lt+1,ct,mt,ot,Pt.image[rt])}}}u(y)&&f(i.TEXTURE_CUBE_MAP),T.__version=A.version,y.onUpdate&&y.onUpdate(y)}M.__version=y.version}function ut(M,y,N,C,A,T){const O=r.convert(N.format,N.colorSpace),K=r.convert(N.type),et=_(N.internalFormat,O,K,N.colorSpace);if(!n.get(y).__hasExternalTextures){const B=Math.max(1,y.width>>T),tt=Math.max(1,y.height>>T);A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY?e.texImage3D(A,T,et,B,tt,y.depth,0,O,K,null):e.texImage2D(A,T,et,B,tt,0,O,K,null)}e.bindFramebuffer(i.FRAMEBUFFER,M),ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,C,A,n.get(N).__webglTexture,0,_t(y)):(A===i.TEXTURE_2D||A>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&A<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,C,A,n.get(N).__webglTexture,T),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(M,y,N){if(i.bindRenderbuffer(i.RENDERBUFFER,M),y.depthBuffer){const C=y.depthTexture,A=C&&C.isDepthTexture?C.type:null,T=x(y.stencilBuffer,A),O=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_t(y);ft(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,K,T,y.width,y.height):N?i.renderbufferStorageMultisample(i.RENDERBUFFER,K,T,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,T,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,O,i.RENDERBUFFER,M)}else{const C=y.textures;for(let A=0;A<C.length;A++){const T=C[A],O=r.convert(T.format,T.colorSpace),K=r.convert(T.type),et=_(T.internalFormat,O,K,T.colorSpace),At=_t(y);N&&ft(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,At,et,y.width,y.height):ft(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,At,et,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,et,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Mt(M,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,M),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Y(y.depthTexture,0);const C=n.get(y.depthTexture).__webglTexture,A=_t(y);if(y.depthTexture.format===as)ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,C,0,A):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,C,0);else if(y.depthTexture.format===ps)ft(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,C,0,A):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,C,0);else throw new Error("Unknown depthTexture format")}function $t(M){const y=n.get(M),N=M.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==M.depthTexture){const C=M.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),C){const A=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,C.removeEventListener("dispose",A)};C.addEventListener("dispose",A),y.__depthDisposeCallback=A}y.__boundDepthTexture=C}if(M.depthTexture&&!y.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");Mt(y.__webglFramebuffer,M)}else if(N){y.__webglDepthbuffer=[];for(let C=0;C<6;C++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[C]),y.__webglDepthbuffer[C]===void 0)y.__webglDepthbuffer[C]=i.createRenderbuffer(),Et(y.__webglDepthbuffer[C],M,!1);else{const A=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,T=y.__webglDepthbuffer[C];i.bindRenderbuffer(i.RENDERBUFFER,T),i.framebufferRenderbuffer(i.FRAMEBUFFER,A,i.RENDERBUFFER,T)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Et(y.__webglDepthbuffer,M,!1);else{const C=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,A=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,A),i.framebufferRenderbuffer(i.FRAMEBUFFER,C,i.RENDERBUFFER,A)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Gt(M,y,N){const C=n.get(M);y!==void 0&&ut(C.__webglFramebuffer,M,M.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),N!==void 0&&$t(M)}function Kt(M){const y=M.texture,N=n.get(M),C=n.get(y);M.addEventListener("dispose",E);const A=M.textures,T=M.isWebGLCubeRenderTarget===!0,O=A.length>1;if(O||(C.__webglTexture===void 0&&(C.__webglTexture=i.createTexture()),C.__version=y.version,a.memory.textures++),T){N.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer[K]=[];for(let et=0;et<y.mipmaps.length;et++)N.__webglFramebuffer[K][et]=i.createFramebuffer()}else N.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){N.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)N.__webglFramebuffer[K]=i.createFramebuffer()}else N.__webglFramebuffer=i.createFramebuffer();if(O)for(let K=0,et=A.length;K<et;K++){const At=n.get(A[K]);At.__webglTexture===void 0&&(At.__webglTexture=i.createTexture(),a.memory.textures++)}if(M.samples>0&&ft(M)===!1){N.__webglMultisampledFramebuffer=i.createFramebuffer(),N.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let K=0;K<A.length;K++){const et=A[K];N.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,N.__webglColorRenderbuffer[K]);const At=r.convert(et.format,et.colorSpace),B=r.convert(et.type),tt=_(et.internalFormat,At,B,et.colorSpace,M.isXRRenderTarget===!0),lt=_t(M);i.renderbufferStorageMultisample(i.RENDERBUFFER,lt,tt,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,N.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),M.depthBuffer&&(N.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(N.__webglDepthRenderbuffer,M,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(T){e.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture),St(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)ut(N.__webglFramebuffer[K][et],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,et);else ut(N.__webglFramebuffer[K],M,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);u(y)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(O){for(let K=0,et=A.length;K<et;K++){const At=A[K],B=n.get(At);e.bindTexture(i.TEXTURE_2D,B.__webglTexture),St(i.TEXTURE_2D,At),ut(N.__webglFramebuffer,M,At,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),u(At)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let K=i.TEXTURE_2D;if((M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(K=M.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(K,C.__webglTexture),St(K,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)ut(N.__webglFramebuffer[et],M,y,i.COLOR_ATTACHMENT0,K,et);else ut(N.__webglFramebuffer,M,y,i.COLOR_ATTACHMENT0,K,0);u(y)&&f(K),e.unbindTexture()}M.depthBuffer&&$t(M)}function Jt(M){const y=M.textures;for(let N=0,C=y.length;N<C;N++){const A=y[N];if(u(A)){const T=M.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,O=n.get(A).__webglTexture;e.bindTexture(T,O),f(T),e.unbindTexture()}}}const st=[],D=[];function vt(M){if(M.samples>0){if(ft(M)===!1){const y=M.textures,N=M.width,C=M.height;let A=i.COLOR_BUFFER_BIT;const T=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,O=n.get(M),K=y.length>1;if(K)for(let et=0;et<y.length;et++)e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,O.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,O.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglFramebuffer);for(let et=0;et<y.length;et++){if(M.resolveDepthBuffer&&(M.depthBuffer&&(A|=i.DEPTH_BUFFER_BIT),M.stencilBuffer&&M.resolveStencilBuffer&&(A|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,O.__webglColorRenderbuffer[et]);const At=n.get(y[et]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,At,0)}i.blitFramebuffer(0,0,N,C,0,0,N,C,A,i.NEAREST),c===!0&&(st.length=0,D.length=0,st.push(i.COLOR_ATTACHMENT0+et),M.depthBuffer&&M.resolveDepthBuffer===!1&&(st.push(T),D.push(T),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let et=0;et<y.length;et++){e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.RENDERBUFFER,O.__webglColorRenderbuffer[et]);const At=n.get(y[et]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,O.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+et,i.TEXTURE_2D,At,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,O.__webglMultisampledFramebuffer)}else if(M.depthBuffer&&M.resolveDepthBuffer===!1&&c){const y=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function _t(M){return Math.min(s.maxSamples,M.samples)}function ft(M){const y=n.get(M);return M.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function bt(M){const y=a.render.frame;l.get(M)!==y&&(l.set(M,y),M.update())}function Ft(M,y){const N=M.colorSpace,C=M.format,A=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||N!==ci&&N!==ri&&(le.getTransfer(N)===_e?(C!==Tn||A!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),y}function Tt(M){return typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement?(h.width=M.naturalWidth||M.width,h.height=M.naturalHeight||M.height):typeof VideoFrame<"u"&&M instanceof VideoFrame?(h.width=M.displayWidth,h.height=M.displayHeight):(h.width=M.width,h.height=M.height),h}this.allocateTextureUnit=X,this.resetTextureUnits=w,this.setTexture2D=Y,this.setTexture2DArray=it,this.setTexture3D=V,this.setTextureCube=j,this.rebindTextures=Gt,this.setupRenderTarget=Kt,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=$t,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ft}function N2(i,t){function e(n,s=ri){let r;const a=le.getTransfer(s);if(n===Kn)return i.UNSIGNED_BYTE;if(n===pl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ml)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Oh)return i.BYTE;if(n===Bh)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===dl)return i.INT;if(n===Li)return i.UNSIGNED_INT;if(n===Un)return i.FLOAT;if(n===Ln)return i.HALF_FLOAT;if(n===Hh)return i.ALPHA;if(n===Gh)return i.RGB;if(n===Tn)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===$h)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===gl)return i.RED;if(n===vl)return i.RED_INTEGER;if(n===qh)return i.RG;if(n===_l)return i.RG_INTEGER;if(n===xl)return i.RGBA_INTEGER;if(n===Hr||n===Gr||n===Wr||n===$r)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$r)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Co||n===Eo||n===To||n===Ao)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ao)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Lo||n===Ro||n===Po)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Lo||n===Ro)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Po)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vo||n===Do||n===Io||n===Uo||n===ko||n===No||n===Fo||n===Oo||n===Bo||n===zo||n===Ho||n===Go||n===Wo||n===$o)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Vo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Do)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Uo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ko)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ho)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qr||n===qo||n===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===qr)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===qo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Xh||n===Yo||n===jo||n===Ko)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===qr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===jo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class F2 extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O2={type:"move"};class Za{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const u=e.getJointPose(v,n),f=this._getHandJoint(h,v);u!==null&&(f.matrix.fromArray(u.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=u.radius),f.visible=u!==null}const l=h.joints["index-finger-tip"],d=h.joints["thumb-tip"],p=l.position.distanceTo(d.position),m=.02,g=.005;h.inputState.pinching&&p>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&p<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(O2)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const B2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,z2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class H2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Xe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:B2,fragmentShader:z2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ht(new ye(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G2 extends ys{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,d=null,p=null,m=null,g=null;const v=new H2,u=e.getContextAttributes();let f=null,_=null;const x=[],b=[],U=new at;let E=null;const R=new an;R.layers.enable(1),R.viewport=new ge;const P=new an;P.layers.enable(2),P.viewport=new ge;const H=[R,P],S=new F2;S.layers.enable(1),S.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let ut=x[nt];return ut===void 0&&(ut=new Za,x[nt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(nt){let ut=x[nt];return ut===void 0&&(ut=new Za,x[nt]=ut),ut.getGripSpace()},this.getHand=function(nt){let ut=x[nt];return ut===void 0&&(ut=new Za,x[nt]=ut),ut.getHandSpace()};function W(nt){const ut=b.indexOf(nt.inputSource);if(ut===-1)return;const Et=x[ut];Et!==void 0&&(Et.update(nt.inputSource,nt.frame,h||a),Et.dispatchEvent({type:nt.type,data:nt.inputSource}))}function Y(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",it);for(let nt=0;nt<x.length;nt++){const ut=b[nt];ut!==null&&(b[nt]=null,x[nt].disconnect(ut))}w=null,X=null,v.reset(),t.setRenderTarget(f),m=null,p=null,d=null,s=null,_=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){r=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){o=nt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(nt){if(s=nt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",it),u.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const ut={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new mn(m.framebufferWidth,m.framebufferHeight,{format:Tn,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let ut=null,Et=null,Mt=null;u.depth&&(Mt=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=u.stencil?ps:as,Et=u.stencil?ds:Li);const $t={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};d=new XRWebGLBinding(s,e),p=d.createProjectionLayer($t),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),_=new mn(p.textureWidth,p.textureHeight,{format:Tn,type:Kn,depthTexture:new au(p.textureWidth,p.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function it(nt){for(let ut=0;ut<nt.removed.length;ut++){const Et=nt.removed[ut],Mt=b.indexOf(Et);Mt>=0&&(b[Mt]=null,x[Mt].disconnect(Et))}for(let ut=0;ut<nt.added.length;ut++){const Et=nt.added[ut];let Mt=b.indexOf(Et);if(Mt===-1){for(let Gt=0;Gt<x.length;Gt++)if(Gt>=b.length){b.push(Et),Mt=Gt;break}else if(b[Gt]===null){b[Gt]=Et,Mt=Gt;break}if(Mt===-1)break}const $t=x[Mt];$t&&$t.connect(Et)}}const V=new k,j=new k;function q(nt,ut,Et){V.setFromMatrixPosition(ut.matrixWorld),j.setFromMatrixPosition(Et.matrixWorld);const Mt=V.distanceTo(j),$t=ut.projectionMatrix.elements,Gt=Et.projectionMatrix.elements,Kt=$t[14]/($t[10]-1),Jt=$t[14]/($t[10]+1),st=($t[9]+1)/$t[5],D=($t[9]-1)/$t[5],vt=($t[8]-1)/$t[0],_t=(Gt[8]+1)/Gt[0],ft=Kt*vt,bt=Kt*_t,Ft=Mt/(-vt+_t),Tt=Ft*-vt;if(ut.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(Tt),nt.translateZ(Ft),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),$t[10]===-1)nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const M=Kt+Ft,y=Jt+Ft,N=ft-Tt,C=bt+(Mt-Tt),A=st*Jt/y*M,T=D*Jt/y*M;nt.projectionMatrix.makePerspective(N,C,A,T,M,y),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function xt(nt,ut){ut===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(ut.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(s===null)return;let ut=nt.near,Et=nt.far;v.texture!==null&&(v.depthNear>0&&(ut=v.depthNear),v.depthFar>0&&(Et=v.depthFar)),S.near=P.near=R.near=ut,S.far=P.far=R.far=Et,(w!==S.near||X!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),w=S.near,X=S.far);const Mt=nt.parent,$t=S.cameras;xt(S,Mt);for(let Gt=0;Gt<$t.length;Gt++)xt($t[Gt],Mt);$t.length===2?q(S,R,P):S.projectionMatrix.copy(R.projectionMatrix),Ct(nt,S,Mt)};function Ct(nt,ut,Et){Et===null?nt.matrix.copy(ut.matrixWorld):(nt.matrix.copy(Et.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(ut.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(ut.projectionMatrix),nt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=sa*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(p===null&&m===null))return c},this.setFoveation=function(nt){c=nt,p!==null&&(p.fixedFoveation=nt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=nt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let St=null;function Ut(nt,ut){if(l=ut.getViewerPose(h||a),g=ut,l!==null){const Et=l.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let Mt=!1;Et.length!==S.cameras.length&&(S.cameras.length=0,Mt=!0);for(let Gt=0;Gt<Et.length;Gt++){const Kt=Et[Gt];let Jt=null;if(m!==null)Jt=m.getViewport(Kt);else{const D=d.getViewSubImage(p,Kt);Jt=D.viewport,Gt===0&&(t.setRenderTargetTextures(_,D.colorTexture,p.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(_))}let st=H[Gt];st===void 0&&(st=new an,st.layers.enable(Gt),st.viewport=new ge,H[Gt]=st),st.matrix.fromArray(Kt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(Kt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Gt===0&&(S.matrix.copy(st.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),Mt===!0&&S.cameras.push(st)}const $t=s.enabledFeatures;if($t&&$t.includes("depth-sensing")){const Gt=d.getDepthInformation(Et[0]);Gt&&Gt.isValid&&Gt.texture&&v.init(t,Gt,s.renderState)}}for(let Et=0;Et<x.length;Et++){const Mt=b[Et],$t=x[Et];Mt!==null&&$t!==void 0&&$t.update(Mt,ut,h||a)}St&&St(nt,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),g=null}const Ht=new ru;Ht.setAnimationLoop(Ut),this.setAnimationLoop=function(nt){St=nt},this.dispose=function(){}}}const vi=new Pn,W2=new ie;function $2(i,t){function e(u,f){u.matrixAutoUpdate===!0&&u.updateMatrix(),f.value.copy(u.matrix)}function n(u,f){f.color.getRGB(u.fogColor.value,nu(i)),f.isFog?(u.fogNear.value=f.near,u.fogFar.value=f.far):f.isFogExp2&&(u.fogDensity.value=f.density)}function s(u,f,_,x,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(u,f):f.isMeshToonMaterial?(r(u,f),d(u,f)):f.isMeshPhongMaterial?(r(u,f),l(u,f)):f.isMeshStandardMaterial?(r(u,f),p(u,f),f.isMeshPhysicalMaterial&&m(u,f,b)):f.isMeshMatcapMaterial?(r(u,f),g(u,f)):f.isMeshDepthMaterial?r(u,f):f.isMeshDistanceMaterial?(r(u,f),v(u,f)):f.isMeshNormalMaterial?r(u,f):f.isLineBasicMaterial?(a(u,f),f.isLineDashedMaterial&&o(u,f)):f.isPointsMaterial?c(u,f,_,x):f.isSpriteMaterial?h(u,f):f.isShadowMaterial?(u.color.value.copy(f.color),u.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(u,f){u.opacity.value=f.opacity,f.color&&u.diffuse.value.copy(f.color),f.emissive&&u.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(u.map.value=f.map,e(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.bumpMap&&(u.bumpMap.value=f.bumpMap,e(f.bumpMap,u.bumpMapTransform),u.bumpScale.value=f.bumpScale,f.side===ln&&(u.bumpScale.value*=-1)),f.normalMap&&(u.normalMap.value=f.normalMap,e(f.normalMap,u.normalMapTransform),u.normalScale.value.copy(f.normalScale),f.side===ln&&u.normalScale.value.negate()),f.displacementMap&&(u.displacementMap.value=f.displacementMap,e(f.displacementMap,u.displacementMapTransform),u.displacementScale.value=f.displacementScale,u.displacementBias.value=f.displacementBias),f.emissiveMap&&(u.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,u.emissiveMapTransform)),f.specularMap&&(u.specularMap.value=f.specularMap,e(f.specularMap,u.specularMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest);const _=t.get(f),x=_.envMap,b=_.envMapRotation;x&&(u.envMap.value=x,vi.copy(b),vi.x*=-1,vi.y*=-1,vi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vi.y*=-1,vi.z*=-1),u.envMapRotation.value.setFromMatrix4(W2.makeRotationFromEuler(vi)),u.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=f.reflectivity,u.ior.value=f.ior,u.refractionRatio.value=f.refractionRatio),f.lightMap&&(u.lightMap.value=f.lightMap,u.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,u.lightMapTransform)),f.aoMap&&(u.aoMap.value=f.aoMap,u.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,u.aoMapTransform))}function a(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,f.map&&(u.map.value=f.map,e(f.map,u.mapTransform))}function o(u,f){u.dashSize.value=f.dashSize,u.totalSize.value=f.dashSize+f.gapSize,u.scale.value=f.scale}function c(u,f,_,x){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.size.value=f.size*_,u.scale.value=x*.5,f.map&&(u.map.value=f.map,e(f.map,u.uvTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function h(u,f){u.diffuse.value.copy(f.color),u.opacity.value=f.opacity,u.rotation.value=f.rotation,f.map&&(u.map.value=f.map,e(f.map,u.mapTransform)),f.alphaMap&&(u.alphaMap.value=f.alphaMap,e(f.alphaMap,u.alphaMapTransform)),f.alphaTest>0&&(u.alphaTest.value=f.alphaTest)}function l(u,f){u.specular.value.copy(f.specular),u.shininess.value=Math.max(f.shininess,1e-4)}function d(u,f){f.gradientMap&&(u.gradientMap.value=f.gradientMap)}function p(u,f){u.metalness.value=f.metalness,f.metalnessMap&&(u.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,u.metalnessMapTransform)),u.roughness.value=f.roughness,f.roughnessMap&&(u.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,u.roughnessMapTransform)),f.envMap&&(u.envMapIntensity.value=f.envMapIntensity)}function m(u,f,_){u.ior.value=f.ior,f.sheen>0&&(u.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),u.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(u.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,u.sheenColorMapTransform)),f.sheenRoughnessMap&&(u.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,u.sheenRoughnessMapTransform))),f.clearcoat>0&&(u.clearcoat.value=f.clearcoat,u.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(u.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,u.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(u.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===ln&&u.clearcoatNormalScale.value.negate())),f.dispersion>0&&(u.dispersion.value=f.dispersion),f.iridescence>0&&(u.iridescence.value=f.iridescence,u.iridescenceIOR.value=f.iridescenceIOR,u.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(u.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,u.iridescenceMapTransform)),f.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),f.transmission>0&&(u.transmission.value=f.transmission,u.transmissionSamplerMap.value=_.texture,u.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(u.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,u.transmissionMapTransform)),u.thickness.value=f.thickness,f.thicknessMap&&(u.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=f.attenuationDistance,u.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(u.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(u.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=f.specularIntensity,u.specularColor.value.copy(f.specularColor),f.specularColorMap&&(u.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,u.specularColorMapTransform)),f.specularIntensityMap&&(u.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,f){f.matcap&&(u.matcap.value=f.matcap)}function v(u,f){const _=t.get(f).light;u.referencePosition.value.setFromMatrixPosition(_.matrixWorld),u.nearDistance.value=_.shadow.camera.near,u.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function q2(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,x){const b=x.program;n.uniformBlockBinding(_,b)}function h(_,x){let b=s[_.id];b===void 0&&(g(_),b=l(_),s[_.id]=b,_.addEventListener("dispose",u));const U=x.program;n.updateUBOMapping(_,U);const E=t.render.frame;r[_.id]!==E&&(p(_),r[_.id]=E)}function l(_){const x=d();_.__bindingPointIndex=x;const b=i.createBuffer(),U=_.__size,E=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,U,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,b),b}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){const x=s[_.id],b=_.uniforms,U=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let E=0,R=b.length;E<R;E++){const P=Array.isArray(b[E])?b[E]:[b[E]];for(let H=0,S=P.length;H<S;H++){const w=P[H];if(m(w,E,H,U)===!0){const X=w.__offset,W=Array.isArray(w.value)?w.value:[w.value];let Y=0;for(let it=0;it<W.length;it++){const V=W[it],j=v(V);typeof V=="number"||typeof V=="boolean"?(w.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,X+Y,w.__data)):V.isMatrix3?(w.__data[0]=V.elements[0],w.__data[1]=V.elements[1],w.__data[2]=V.elements[2],w.__data[3]=0,w.__data[4]=V.elements[3],w.__data[5]=V.elements[4],w.__data[6]=V.elements[5],w.__data[7]=0,w.__data[8]=V.elements[6],w.__data[9]=V.elements[7],w.__data[10]=V.elements[8],w.__data[11]=0):(V.toArray(w.__data,Y),Y+=j.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,X,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(_,x,b,U){const E=_.value,R=x+"_"+b;if(U[R]===void 0)return typeof E=="number"||typeof E=="boolean"?U[R]=E:U[R]=E.clone(),!0;{const P=U[R];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return U[R]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function g(_){const x=_.uniforms;let b=0;const U=16;for(let R=0,P=x.length;R<P;R++){const H=Array.isArray(x[R])?x[R]:[x[R]];for(let S=0,w=H.length;S<w;S++){const X=H[S],W=Array.isArray(X.value)?X.value:[X.value];for(let Y=0,it=W.length;Y<it;Y++){const V=W[Y],j=v(V),q=b%U,xt=q%j.boundary,Ct=q+xt;b+=xt,Ct!==0&&U-Ct<j.storage&&(b+=U-Ct),X.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=b,b+=j.storage}}}const E=b%U;return E>0&&(b+=U-E),_.__size=b,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function u(_){const x=_.target;x.removeEventListener("dispose",u);const b=a.indexOf(x.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:h,dispose:f}}class X2{constructor(t={}){const{canvas:e=kf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,u=null;const f=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pn,this.toneMapping=oi,this.toneMappingExposure=1;const x=this;let b=!1,U=0,E=0,R=null,P=-1,H=null;const S=new ge,w=new ge;let X=null;const W=new zt(0);let Y=0,it=e.width,V=e.height,j=1,q=null,xt=null;const Ct=new ge(0,0,it,V),St=new ge(0,0,it,V);let Ut=!1;const Ht=new Ml;let nt=!1,ut=!1;const Et=new ie,Mt=new ie,$t=new k,Gt=new ge,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Jt=!1;function st(){return R===null?j:1}let D=n;function vt(L,G){return e.getContext(L,G)}try{const L={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cl}`),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",Lt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),D===null){const G="webgl2";if(D=vt(G,L),D===null)throw vt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let _t,ft,bt,Ft,Tt,M,y,N,C,A,T,O,K,et,At,B,tt,lt,mt,ot,ct,pt,Zt,z;function yt(){_t=new Q0(D),_t.init(),pt=new N2(D,_t),ft=new X0(D,_t,t,pt),bt=new I2(D),ft.reverseDepthBuffer&&bt.buffers.depth.setReversed(!0),Ft=new nm(D),Tt=new y2,M=new k2(D,_t,bt,Tt,ft,pt,Ft),y=new j0(x),N=new J0(x),C=new cd(D),Zt=new $0(D,C),A=new tm(D,C,Ft,Zt),T=new sm(D,A,C,Ft),mt=new im(D,ft,M),B=new Y0(Tt),O=new x2(x,y,N,_t,ft,Zt,B),K=new $2(x,Tt),et=new S2,At=new A2(_t),lt=new W0(x,y,N,bt,T,p,c),tt=new V2(x,T,ft),z=new q2(D,Ft,ft,bt),ot=new q0(D,_t,Ft),ct=new em(D,_t,Ft),Ft.programs=O.programs,x.capabilities=ft,x.extensions=_t,x.properties=Tt,x.renderLists=et,x.shadowMap=tt,x.state=bt,x.info=Ft}yt();const Q=new G2(x,D);this.xr=Q,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const L=_t.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=_t.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(L){L!==void 0&&(j=L,this.setSize(it,V,!1))},this.getSize=function(L){return L.set(it,V)},this.setSize=function(L,G,Z=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}it=L,V=G,e.width=Math.floor(L*j),e.height=Math.floor(G*j),Z===!0&&(e.style.width=L+"px",e.style.height=G+"px"),this.setViewport(0,0,L,G)},this.getDrawingBufferSize=function(L){return L.set(it*j,V*j).floor()},this.setDrawingBufferSize=function(L,G,Z){it=L,V=G,j=Z,e.width=Math.floor(L*Z),e.height=Math.floor(G*Z),this.setViewport(0,0,L,G)},this.getCurrentViewport=function(L){return L.copy(S)},this.getViewport=function(L){return L.copy(Ct)},this.setViewport=function(L,G,Z,J){L.isVector4?Ct.set(L.x,L.y,L.z,L.w):Ct.set(L,G,Z,J),bt.viewport(S.copy(Ct).multiplyScalar(j).round())},this.getScissor=function(L){return L.copy(St)},this.setScissor=function(L,G,Z,J){L.isVector4?St.set(L.x,L.y,L.z,L.w):St.set(L,G,Z,J),bt.scissor(w.copy(St).multiplyScalar(j).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(L){bt.setScissorTest(Ut=L)},this.setOpaqueSort=function(L){q=L},this.setTransparentSort=function(L){xt=L},this.getClearColor=function(L){return L.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor.apply(lt,arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha.apply(lt,arguments)},this.clear=function(L=!0,G=!0,Z=!0){let J=0;if(L){let $=!1;if(R!==null){const gt=R.texture.format;$=gt===xl||gt===_l||gt===vl}if($){const gt=R.texture.type,Rt=gt===Kn||gt===Li||gt===Ys||gt===ds||gt===pl||gt===ml,kt=lt.getClearColor(),Nt=lt.getClearAlpha(),Xt=kt.r,jt=kt.g,Ot=kt.b;Rt?(m[0]=Xt,m[1]=jt,m[2]=Ot,m[3]=Nt,D.clearBufferuiv(D.COLOR,0,m)):(g[0]=Xt,g[1]=jt,g[2]=Ot,g[3]=Nt,D.clearBufferiv(D.COLOR,0,g))}else J|=D.COLOR_BUFFER_BIT}G&&(J|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),Z&&(J|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",Lt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),et.dispose(),At.dispose(),Tt.dispose(),y.dispose(),N.dispose(),T.dispose(),Zt.dispose(),z.dispose(),O.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Fl),Q.removeEventListener("sessionend",Ol),ui.stop()};function rt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const L=Ft.autoReset,G=tt.enabled,Z=tt.autoUpdate,J=tt.needsUpdate,$=tt.type;yt(),Ft.autoReset=L,tt.enabled=G,tt.autoUpdate=Z,tt.needsUpdate=J,tt.type=$}function Pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function re(L){const G=L.target;G.removeEventListener("dispose",re),Ve(G)}function Ve(L){sn(L),Tt.remove(L)}function sn(L){const G=Tt.get(L).programs;G!==void 0&&(G.forEach(function(Z){O.releaseProgram(Z)}),L.isShaderMaterial&&O.releaseShaderCache(L))}this.renderBufferDirect=function(L,G,Z,J,$,gt){G===null&&(G=Kt);const Rt=$.isMesh&&$.matrixWorld.determinant()<0,kt=Yu(L,G,Z,J,$);bt.setMaterial(J,Rt);let Nt=Z.index,Xt=1;if(J.wireframe===!0){if(Nt=A.getWireframeAttribute(Z),Nt===void 0)return;Xt=2}const jt=Z.drawRange,Ot=Z.attributes.position;let de=jt.start*Xt,be=(jt.start+jt.count)*Xt;gt!==null&&(de=Math.max(de,gt.start*Xt),be=Math.min(be,(gt.start+gt.count)*Xt)),Nt!==null?(de=Math.max(de,0),be=Math.min(be,Nt.count)):Ot!=null&&(de=Math.max(de,0),be=Math.min(be,Ot.count));const Te=be-de;if(Te<0||Te===1/0)return;Zt.setup($,J,kt,Z,Nt);let cn,he=ot;if(Nt!==null&&(cn=C.get(Nt),he=ct,he.setIndex(cn)),$.isMesh)J.wireframe===!0?(bt.setLineWidth(J.wireframeLinewidth*st()),he.setMode(D.LINES)):he.setMode(D.TRIANGLES);else if($.isLine){let Bt=J.linewidth;Bt===void 0&&(Bt=1),bt.setLineWidth(Bt*st()),$.isLineSegments?he.setMode(D.LINES):$.isLineLoop?he.setMode(D.LINE_LOOP):he.setMode(D.LINE_STRIP)}else $.isPoints?he.setMode(D.POINTS):$.isSprite&&he.setMode(D.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)he.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))he.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const Bt=$._multiDrawStarts,Ge=$._multiDrawCounts,ue=$._multiDrawCount,bn=Nt?C.get(Nt).bytesPerElement:1,Di=Tt.get(J).currentProgram.getUniforms();for(let hn=0;hn<ue;hn++)Di.setValue(D,"_gl_DrawID",hn),he.render(Bt[hn]/bn,Ge[hn])}else if($.isInstancedMesh)he.renderInstances(de,Te,$.count);else if(Z.isInstancedBufferGeometry){const Bt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ge=Math.min(Z.instanceCount,Bt);he.renderInstances(de,Te,Ge)}else he.render(de,Te)};function oe(L,G,Z){L.transparent===!0&&L.side===Pe&&L.forceSinglePass===!1?(L.side=ln,L.needsUpdate=!0,sr(L,G,Z),L.side=li,L.needsUpdate=!0,sr(L,G,Z),L.side=Pe):sr(L,G,Z)}this.compile=function(L,G,Z=null){Z===null&&(Z=L),u=At.get(Z),u.init(G),_.push(u),Z.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(u.pushLight($),$.castShadow&&u.pushShadow($))}),L!==Z&&L.traverseVisible(function($){$.isLight&&$.layers.test(G.layers)&&(u.pushLight($),$.castShadow&&u.pushShadow($))}),u.setupLights();const J=new Set;return L.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const gt=$.material;if(gt)if(Array.isArray(gt))for(let Rt=0;Rt<gt.length;Rt++){const kt=gt[Rt];oe(kt,Z,$),J.add(kt)}else oe(gt,Z,$),J.add(gt)}),_.pop(),u=null,J},this.compileAsync=function(L,G,Z=null){const J=this.compile(L,G,Z);return new Promise($=>{function gt(){if(J.forEach(function(Rt){Tt.get(Rt).currentProgram.isReady()&&J.delete(Rt)}),J.size===0){$(L);return}setTimeout(gt,10)}_t.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let rn=null;function Fn(L){rn&&rn(L)}function Fl(){ui.stop()}function Ol(){ui.start()}const ui=new ru;ui.setAnimationLoop(Fn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(L){rn=L,Q.setAnimationLoop(L),L===null?ui.stop():ui.start()},Q.addEventListener("sessionstart",Fl),Q.addEventListener("sessionend",Ol),this.render=function(L,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,G,R),u=At.get(L,_.length),u.init(G),_.push(u),Mt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Ht.setFromProjectionMatrix(Mt),ut=this.localClippingEnabled,nt=B.init(this.clippingPlanes,ut),v=et.get(L,f.length),v.init(),f.push(v),Q.enabled===!0&&Q.isPresenting===!0){const gt=x.xr.getDepthSensingMesh();gt!==null&&va(gt,G,-1/0,x.sortObjects)}va(L,G,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,xt),Jt=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Jt&&lt.addToRenderList(v,L),this.info.render.frame++,nt===!0&&B.beginShadows();const Z=u.state.shadowsArray;tt.render(Z,L,G),nt===!0&&B.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=v.opaque,$=v.transmissive;if(u.setupLights(),G.isArrayCamera){const gt=G.cameras;if($.length>0)for(let Rt=0,kt=gt.length;Rt<kt;Rt++){const Nt=gt[Rt];zl(J,$,L,Nt)}Jt&&lt.render(L);for(let Rt=0,kt=gt.length;Rt<kt;Rt++){const Nt=gt[Rt];Bl(v,L,Nt,Nt.viewport)}}else $.length>0&&zl(J,$,L,G),Jt&&lt.render(L),Bl(v,L,G);R!==null&&(M.updateMultisampleRenderTarget(R),M.updateRenderTargetMipmap(R)),L.isScene===!0&&L.onAfterRender(x,L,G),Zt.resetDefaultState(),P=-1,H=null,_.pop(),_.length>0?(u=_[_.length-1],nt===!0&&B.setGlobalState(x.clippingPlanes,u.state.camera)):u=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function va(L,G,Z,J){if(L.visible===!1)return;if(L.layers.test(G.layers)){if(L.isGroup)Z=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(G);else if(L.isLight)u.pushLight(L),L.castShadow&&u.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Ht.intersectsSprite(L)){J&&Gt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(Mt);const Rt=T.update(L),kt=L.material;kt.visible&&v.push(L,Rt,kt,Z,Gt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Ht.intersectsObject(L))){const Rt=T.update(L),kt=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Gt.copy(L.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Gt.copy(Rt.boundingSphere.center)),Gt.applyMatrix4(L.matrixWorld).applyMatrix4(Mt)),Array.isArray(kt)){const Nt=Rt.groups;for(let Xt=0,jt=Nt.length;Xt<jt;Xt++){const Ot=Nt[Xt],de=kt[Ot.materialIndex];de&&de.visible&&v.push(L,Rt,de,Z,Gt.z,Ot)}}else kt.visible&&v.push(L,Rt,kt,Z,Gt.z,null)}}const gt=L.children;for(let Rt=0,kt=gt.length;Rt<kt;Rt++)va(gt[Rt],G,Z,J)}function Bl(L,G,Z,J){const $=L.opaque,gt=L.transmissive,Rt=L.transparent;u.setupLightsView(Z),nt===!0&&B.setGlobalState(x.clippingPlanes,Z),J&&bt.viewport(S.copy(J)),$.length>0&&ir($,G,Z),gt.length>0&&ir(gt,G,Z),Rt.length>0&&ir(Rt,G,Z),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function zl(L,G,Z,J){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[J.id]===void 0&&(u.state.transmissionRenderTarget[J.id]=new mn(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Ln:Kn,minFilter:Ei,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:le.workingColorSpace}));const gt=u.state.transmissionRenderTarget[J.id],Rt=J.viewport||S;gt.setSize(Rt.z,Rt.w);const kt=x.getRenderTarget();x.setRenderTarget(gt),x.getClearColor(W),Y=x.getClearAlpha(),Y<1&&x.setClearColor(16777215,.5),x.clear(),Jt&&lt.render(Z);const Nt=x.toneMapping;x.toneMapping=oi;const Xt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),u.setupLightsView(J),nt===!0&&B.setGlobalState(x.clippingPlanes,J),ir(L,Z,J),M.updateMultisampleRenderTarget(gt),M.updateRenderTargetMipmap(gt),_t.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let Ot=0,de=G.length;Ot<de;Ot++){const be=G[Ot],Te=be.object,cn=be.geometry,he=be.material,Bt=be.group;if(he.side===Pe&&Te.layers.test(J.layers)){const Ge=he.side;he.side=ln,he.needsUpdate=!0,Hl(Te,Z,J,cn,he,Bt),he.side=Ge,he.needsUpdate=!0,jt=!0}}jt===!0&&(M.updateMultisampleRenderTarget(gt),M.updateRenderTargetMipmap(gt))}x.setRenderTarget(kt),x.setClearColor(W,Y),Xt!==void 0&&(J.viewport=Xt),x.toneMapping=Nt}function ir(L,G,Z){const J=G.isScene===!0?G.overrideMaterial:null;for(let $=0,gt=L.length;$<gt;$++){const Rt=L[$],kt=Rt.object,Nt=Rt.geometry,Xt=J===null?Rt.material:J,jt=Rt.group;kt.layers.test(Z.layers)&&Hl(kt,G,Z,Nt,Xt,jt)}}function Hl(L,G,Z,J,$,gt){L.onBeforeRender(x,G,Z,J,$,gt),L.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),$.onBeforeRender(x,G,Z,J,L,gt),$.transparent===!0&&$.side===Pe&&$.forceSinglePass===!1?($.side=ln,$.needsUpdate=!0,x.renderBufferDirect(Z,G,J,$,L,gt),$.side=li,$.needsUpdate=!0,x.renderBufferDirect(Z,G,J,$,L,gt),$.side=Pe):x.renderBufferDirect(Z,G,J,$,L,gt),L.onAfterRender(x,G,Z,J,$,gt)}function sr(L,G,Z){G.isScene!==!0&&(G=Kt);const J=Tt.get(L),$=u.state.lights,gt=u.state.shadowsArray,Rt=$.state.version,kt=O.getParameters(L,$.state,gt,G,Z),Nt=O.getProgramCacheKey(kt);let Xt=J.programs;J.environment=L.isMeshStandardMaterial?G.environment:null,J.fog=G.fog,J.envMap=(L.isMeshStandardMaterial?N:y).get(L.envMap||J.environment),J.envMapRotation=J.environment!==null&&L.envMap===null?G.environmentRotation:L.envMapRotation,Xt===void 0&&(L.addEventListener("dispose",re),Xt=new Map,J.programs=Xt);let jt=Xt.get(Nt);if(jt!==void 0){if(J.currentProgram===jt&&J.lightsStateVersion===Rt)return Wl(L,kt),jt}else kt.uniforms=O.getUniforms(L),L.onBeforeCompile(kt,x),jt=O.acquireProgram(kt,Nt),Xt.set(Nt,jt),J.uniforms=kt.uniforms;const Ot=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ot.clippingPlanes=B.uniform),Wl(L,kt),J.needsLights=Ku(L),J.lightsStateVersion=Rt,J.needsLights&&(Ot.ambientLightColor.value=$.state.ambient,Ot.lightProbe.value=$.state.probe,Ot.directionalLights.value=$.state.directional,Ot.directionalLightShadows.value=$.state.directionalShadow,Ot.spotLights.value=$.state.spot,Ot.spotLightShadows.value=$.state.spotShadow,Ot.rectAreaLights.value=$.state.rectArea,Ot.ltc_1.value=$.state.rectAreaLTC1,Ot.ltc_2.value=$.state.rectAreaLTC2,Ot.pointLights.value=$.state.point,Ot.pointLightShadows.value=$.state.pointShadow,Ot.hemisphereLights.value=$.state.hemi,Ot.directionalShadowMap.value=$.state.directionalShadowMap,Ot.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Ot.spotShadowMap.value=$.state.spotShadowMap,Ot.spotLightMatrix.value=$.state.spotLightMatrix,Ot.spotLightMap.value=$.state.spotLightMap,Ot.pointShadowMap.value=$.state.pointShadowMap,Ot.pointShadowMatrix.value=$.state.pointShadowMatrix),J.currentProgram=jt,J.uniformsList=null,jt}function Gl(L){if(L.uniformsList===null){const G=L.currentProgram.getUniforms();L.uniformsList=Yr.seqWithValue(G.seq,L.uniforms)}return L.uniformsList}function Wl(L,G){const Z=Tt.get(L);Z.outputColorSpace=G.outputColorSpace,Z.batching=G.batching,Z.batchingColor=G.batchingColor,Z.instancing=G.instancing,Z.instancingColor=G.instancingColor,Z.instancingMorph=G.instancingMorph,Z.skinning=G.skinning,Z.morphTargets=G.morphTargets,Z.morphNormals=G.morphNormals,Z.morphColors=G.morphColors,Z.morphTargetsCount=G.morphTargetsCount,Z.numClippingPlanes=G.numClippingPlanes,Z.numIntersection=G.numClipIntersection,Z.vertexAlphas=G.vertexAlphas,Z.vertexTangents=G.vertexTangents,Z.toneMapping=G.toneMapping}function Yu(L,G,Z,J,$){G.isScene!==!0&&(G=Kt),M.resetTextureUnits();const gt=G.fog,Rt=J.isMeshStandardMaterial?G.environment:null,kt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ci,Nt=(J.isMeshStandardMaterial?N:y).get(J.envMap||Rt),Xt=J.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,jt=!!Z.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ot=!!Z.morphAttributes.position,de=!!Z.morphAttributes.normal,be=!!Z.morphAttributes.color;let Te=oi;J.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Te=x.toneMapping);const cn=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,he=cn!==void 0?cn.length:0,Bt=Tt.get(J),Ge=u.state.lights;if(nt===!0&&(ut===!0||L!==H)){const _n=L===H&&J.id===P;B.setState(J,L,_n)}let ue=!1;J.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==Ge.state.version||Bt.outputColorSpace!==kt||$.isBatchedMesh&&Bt.batching===!1||!$.isBatchedMesh&&Bt.batching===!0||$.isBatchedMesh&&Bt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&Bt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&Bt.instancing===!1||!$.isInstancedMesh&&Bt.instancing===!0||$.isSkinnedMesh&&Bt.skinning===!1||!$.isSkinnedMesh&&Bt.skinning===!0||$.isInstancedMesh&&Bt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Bt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Bt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Bt.instancingMorph===!1&&$.morphTexture!==null||Bt.envMap!==Nt||J.fog===!0&&Bt.fog!==gt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==B.numPlanes||Bt.numIntersection!==B.numIntersection)||Bt.vertexAlphas!==Xt||Bt.vertexTangents!==jt||Bt.morphTargets!==Ot||Bt.morphNormals!==de||Bt.morphColors!==be||Bt.toneMapping!==Te||Bt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Bt.__version=J.version);let bn=Bt.currentProgram;ue===!0&&(bn=sr(J,G,$));let Di=!1,hn=!1,_a=!1;const Ae=bn.getUniforms(),Jn=Bt.uniforms;if(bt.useProgram(bn.program)&&(Di=!0,hn=!0,_a=!0),J.id!==P&&(P=J.id,hn=!0),Di||H!==L){ft.reverseDepthBuffer?(Et.copy(L.projectionMatrix),Ff(Et),Of(Et),Ae.setValue(D,"projectionMatrix",Et)):Ae.setValue(D,"projectionMatrix",L.projectionMatrix),Ae.setValue(D,"viewMatrix",L.matrixWorldInverse);const _n=Ae.map.cameraPosition;_n!==void 0&&_n.setValue(D,$t.setFromMatrixPosition(L.matrixWorld)),ft.logarithmicDepthBuffer&&Ae.setValue(D,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ae.setValue(D,"isOrthographic",L.isOrthographicCamera===!0),H!==L&&(H=L,hn=!0,_a=!0)}if($.isSkinnedMesh){Ae.setOptional(D,$,"bindMatrix"),Ae.setOptional(D,$,"bindMatrixInverse");const _n=$.skeleton;_n&&(_n.boneTexture===null&&_n.computeBoneTexture(),Ae.setValue(D,"boneTexture",_n.boneTexture,M))}$.isBatchedMesh&&(Ae.setOptional(D,$,"batchingTexture"),Ae.setValue(D,"batchingTexture",$._matricesTexture,M),Ae.setOptional(D,$,"batchingIdTexture"),Ae.setValue(D,"batchingIdTexture",$._indirectTexture,M),Ae.setOptional(D,$,"batchingColorTexture"),$._colorsTexture!==null&&Ae.setValue(D,"batchingColorTexture",$._colorsTexture,M));const xa=Z.morphAttributes;if((xa.position!==void 0||xa.normal!==void 0||xa.color!==void 0)&&mt.update($,Z,bn),(hn||Bt.receiveShadow!==$.receiveShadow)&&(Bt.receiveShadow=$.receiveShadow,Ae.setValue(D,"receiveShadow",$.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(Jn.envMap.value=Nt,Jn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&G.environment!==null&&(Jn.envMapIntensity.value=G.environmentIntensity),hn&&(Ae.setValue(D,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&ju(Jn,_a),gt&&J.fog===!0&&K.refreshFogUniforms(Jn,gt),K.refreshMaterialUniforms(Jn,J,j,V,u.state.transmissionRenderTarget[L.id]),Yr.upload(D,Gl(Bt),Jn,M)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Yr.upload(D,Gl(Bt),Jn,M),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ae.setValue(D,"center",$.center),Ae.setValue(D,"modelViewMatrix",$.modelViewMatrix),Ae.setValue(D,"normalMatrix",$.normalMatrix),Ae.setValue(D,"modelMatrix",$.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const _n=J.uniformsGroups;for(let ya=0,Zu=_n.length;ya<Zu;ya++){const $l=_n[ya];z.update($l,bn),z.bind($l,bn)}}return bn}function ju(L,G){L.ambientLightColor.needsUpdate=G,L.lightProbe.needsUpdate=G,L.directionalLights.needsUpdate=G,L.directionalLightShadows.needsUpdate=G,L.pointLights.needsUpdate=G,L.pointLightShadows.needsUpdate=G,L.spotLights.needsUpdate=G,L.spotLightShadows.needsUpdate=G,L.rectAreaLights.needsUpdate=G,L.hemisphereLights.needsUpdate=G}function Ku(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return U},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(L,G,Z){Tt.get(L.texture).__webglTexture=G,Tt.get(L.depthTexture).__webglTexture=Z;const J=Tt.get(L);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=Z===void 0,J.__autoAllocateDepthBuffer||_t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,G){const Z=Tt.get(L);Z.__webglFramebuffer=G,Z.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(L,G=0,Z=0){R=L,U=G,E=Z;let J=!0,$=null,gt=!1,Rt=!1;if(L){const Nt=Tt.get(L);if(Nt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(D.FRAMEBUFFER,null),J=!1;else if(Nt.__webglFramebuffer===void 0)M.setupRenderTarget(L);else if(Nt.__hasExternalTextures)M.rebindTextures(L,Tt.get(L.texture).__webglTexture,Tt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const Ot=L.depthTexture;if(Nt.__boundDepthTexture!==Ot){if(Ot!==null&&Tt.has(Ot)&&(L.width!==Ot.image.width||L.height!==Ot.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");M.setupDepthRenderbuffer(L)}}const Xt=L.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Rt=!0);const jt=Tt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(jt[G])?$=jt[G][Z]:$=jt[G],gt=!0):L.samples>0&&M.useMultisampledRTT(L)===!1?$=Tt.get(L).__webglMultisampledFramebuffer:Array.isArray(jt)?$=jt[Z]:$=jt,S.copy(L.viewport),w.copy(L.scissor),X=L.scissorTest}else S.copy(Ct).multiplyScalar(j).floor(),w.copy(St).multiplyScalar(j).floor(),X=Ut;if(bt.bindFramebuffer(D.FRAMEBUFFER,$)&&J&&bt.drawBuffers(L,$),bt.viewport(S),bt.scissor(w),bt.setScissorTest(X),gt){const Nt=Tt.get(L.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+G,Nt.__webglTexture,Z)}else if(Rt){const Nt=Tt.get(L.texture),Xt=G||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Nt.__webglTexture,Z||0,Xt)}P=-1},this.readRenderTargetPixels=function(L,G,Z,J,$,gt,Rt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Rt!==void 0&&(kt=kt[Rt]),kt){bt.bindFramebuffer(D.FRAMEBUFFER,kt);try{const Nt=L.texture,Xt=Nt.format,jt=Nt.type;if(!ft.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=L.width-J&&Z>=0&&Z<=L.height-$&&D.readPixels(G,Z,J,$,pt.convert(Xt),pt.convert(jt),gt)}finally{const Nt=R!==null?Tt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(L,G,Z,J,$,gt,Rt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Tt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Rt!==void 0&&(kt=kt[Rt]),kt){const Nt=L.texture,Xt=Nt.format,jt=Nt.type;if(!ft.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=L.width-J&&Z>=0&&Z<=L.height-$){bt.bindFramebuffer(D.FRAMEBUFFER,kt);const Ot=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ot),D.bufferData(D.PIXEL_PACK_BUFFER,gt.byteLength,D.STREAM_READ),D.readPixels(G,Z,J,$,pt.convert(Xt),pt.convert(jt),0);const de=R!==null?Tt.get(R).__webglFramebuffer:null;bt.bindFramebuffer(D.FRAMEBUFFER,de);const be=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Nf(D,be,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ot),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,gt),D.deleteBuffer(Ot),D.deleteSync(be),gt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,G=null,Z=0){L.isTexture!==!0&&(Xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,L=arguments[1]);const J=Math.pow(2,-Z),$=Math.floor(L.image.width*J),gt=Math.floor(L.image.height*J),Rt=G!==null?G.x:0,kt=G!==null?G.y:0;M.setTexture2D(L,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Rt,kt,$,gt),bt.unbindTexture()},this.copyTextureToTexture=function(L,G,Z=null,J=null,$=0){L.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,L=arguments[1],G=arguments[2],$=arguments[3]||0,Z=null);let gt,Rt,kt,Nt,Xt,jt;Z!==null?(gt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,kt=Z.min.x,Nt=Z.min.y):(gt=L.image.width,Rt=L.image.height,kt=0,Nt=0),J!==null?(Xt=J.x,jt=J.y):(Xt=0,jt=0);const Ot=pt.convert(G.format),de=pt.convert(G.type);M.setTexture2D(G,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const be=D.getParameter(D.UNPACK_ROW_LENGTH),Te=D.getParameter(D.UNPACK_IMAGE_HEIGHT),cn=D.getParameter(D.UNPACK_SKIP_PIXELS),he=D.getParameter(D.UNPACK_SKIP_ROWS),Bt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ge=L.isCompressedTexture?L.mipmaps[$]:L.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ge.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ge.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,kt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Nt),L.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,$,Xt,jt,gt,Rt,Ot,de,Ge.data):L.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,$,Xt,jt,Ge.width,Ge.height,Ot,Ge.data):D.texSubImage2D(D.TEXTURE_2D,$,Xt,jt,gt,Rt,Ot,de,Ge),D.pixelStorei(D.UNPACK_ROW_LENGTH,be),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te),D.pixelStorei(D.UNPACK_SKIP_PIXELS,cn),D.pixelStorei(D.UNPACK_SKIP_ROWS,he),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Bt),$===0&&G.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),bt.unbindTexture()},this.copyTextureToTexture3D=function(L,G,Z=null,J=null,$=0){L.isTexture!==!0&&(Xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Z=arguments[0]||null,J=arguments[1]||null,L=arguments[2],G=arguments[3],$=arguments[4]||0);let gt,Rt,kt,Nt,Xt,jt,Ot,de,be;const Te=L.isCompressedTexture?L.mipmaps[$]:L.image;Z!==null?(gt=Z.max.x-Z.min.x,Rt=Z.max.y-Z.min.y,kt=Z.max.z-Z.min.z,Nt=Z.min.x,Xt=Z.min.y,jt=Z.min.z):(gt=Te.width,Rt=Te.height,kt=Te.depth,Nt=0,Xt=0,jt=0),J!==null?(Ot=J.x,de=J.y,be=J.z):(Ot=0,de=0,be=0);const cn=pt.convert(G.format),he=pt.convert(G.type);let Bt;if(G.isData3DTexture)M.setTexture3D(G,0),Bt=D.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)M.setTexture2DArray(G,0),Bt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,G.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,G.unpackAlignment);const Ge=D.getParameter(D.UNPACK_ROW_LENGTH),ue=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bn=D.getParameter(D.UNPACK_SKIP_PIXELS),Di=D.getParameter(D.UNPACK_SKIP_ROWS),hn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Te.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Te.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Nt),D.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,jt),L.isDataTexture||L.isData3DTexture?D.texSubImage3D(Bt,$,Ot,de,be,gt,Rt,kt,cn,he,Te.data):G.isCompressedArrayTexture?D.compressedTexSubImage3D(Bt,$,Ot,de,be,gt,Rt,kt,cn,Te.data):D.texSubImage3D(Bt,$,Ot,de,be,gt,Rt,kt,cn,he,Te),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ge),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ue),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Di),D.pixelStorei(D.UNPACK_SKIP_IMAGES,hn),$===0&&G.generateMipmaps&&D.generateMipmap(Bt),bt.unbindTexture()},this.initRenderTarget=function(L){Tt.get(L).__webglFramebuffer===void 0&&M.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?M.setTextureCube(L,0):L.isData3DTexture?M.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?M.setTexture2DArray(L,0):M.setTexture2D(L,0),bt.unbindTexture()},this.resetState=function(){U=0,E=0,R=null,bt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===bl?"display-p3":"srgb",e.unpackColorSpace=le.workingColorSpace===ha?"display-p3":"srgb"}}class fu{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new fu(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Y2 extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pn,this.environmentIntensity=1,this.environmentRotation=new Pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class j2{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zo,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new k;class ra{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=In(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=me(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=me(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=In(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=In(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=In(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=In(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=me(e,this.array),n=me(n,this.array),s=me(s,this.array),r=me(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ra(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class K2 extends Zn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Yi;const Ts=new k,ji=new k,Ki=new k,Zi=new at,As=new at,du=new ie,Er=new k,Ls=new k,Tr=new k,Oc=new at,Ja=new at,Bc=new at;class Tv extends Ce{constructor(t=new K2){if(super(),this.isSprite=!0,this.type="Sprite",Yi===void 0){Yi=new Ue;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new j2(e,5);Yi.setIndex([0,1,2,0,2,3]),Yi.setAttribute("position",new ra(n,3,0,!1)),Yi.setAttribute("uv",new ra(n,2,3,!1))}this.geometry=Yi,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),du.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ki.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-Ki.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;Ar(Er.set(-.5,-.5,0),Ki,a,ji,s,r),Ar(Ls.set(.5,-.5,0),Ki,a,ji,s,r),Ar(Tr.set(.5,.5,0),Ki,a,ji,s,r),Oc.set(0,0),Ja.set(1,0),Bc.set(1,1);let o=t.ray.intersectTriangle(Er,Ls,Tr,!1,Ts);if(o===null&&(Ar(Ls.set(-.5,.5,0),Ki,a,ji,s,r),Ja.set(0,1),o=t.ray.intersectTriangle(Er,Tr,Ls,!1,Ts),o===null))return;const c=t.ray.origin.distanceTo(Ts);c<t.near||c>t.far||e.push({distance:c,point:Ts.clone(),uv:yn.getInterpolation(Ts,Er,Ls,Tr,Oc,Ja,Bc,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ar(i,t,e,n,s,r){Zi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(As.x=r*Zi.x-s*Zi.y,As.y=s*Zi.x+r*Zi.y):As.copy(Zi),i.copy(t),i.x+=As.x,i.y+=As.y,i.applyMatrix4(du)}class Z2 extends Xe{constructor(t=null,e=1,n=1,s,r,a,o,c,h=Ne,l=Ne,d,p){super(null,a,o,c,h,l,s,r,d,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zc extends gn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ji=new ie,Hc=new ie,Lr=[],Gc=new hi,J2=new ie,Rs=new ht,Ps=new Pi;class El extends ht{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,J2)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new hi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Gc.copy(t.boundingBox).applyMatrix4(Ji),this.boundingBox.union(Gc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Pi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ji),Ps.copy(t.boundingSphere).applyMatrix4(Ji),this.boundingSphere.union(Ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Rs.geometry=this.geometry,Rs.material=this.material,Rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ps.copy(this.boundingSphere),Ps.applyMatrix4(n),t.ray.intersectsSphere(Ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ji),Hc.multiplyMatrices(n,Ji),Rs.matrixWorld=Hc,Rs.raycast(t,Lr);for(let a=0,o=Lr.length;a<o;a++){const c=Lr[a];c.instanceId=r,c.object=this,e.push(c)}Lr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Z2(new Float32Array(s*this.count),s,this.count,gl,Un));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Q2 extends Zn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const aa=new k,oa=new k,Wc=new ie,Vs=new ua,Rr=new Pi,Qa=new k,$c=new k;class t1 extends Ce{constructor(t=new Ue,e=new Q2){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)aa.fromBufferAttribute(e,s-1),oa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=aa.distanceTo(oa);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(s),Rr.radius+=r,t.ray.intersectsSphere(Rr)===!1)return;Wc.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(Wc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=this.isLineSegments?2:1,l=n.index,p=n.attributes.position;if(l!==null){const m=Math.max(0,a.start),g=Math.min(l.count,a.start+a.count);for(let v=m,u=g-1;v<u;v+=h){const f=l.getX(v),_=l.getX(v+1),x=Pr(this,t,Vs,c,f,_);x&&e.push(x)}if(this.isLineLoop){const v=l.getX(g-1),u=l.getX(m),f=Pr(this,t,Vs,c,v,u);f&&e.push(f)}}else{const m=Math.max(0,a.start),g=Math.min(p.count,a.start+a.count);for(let v=m,u=g-1;v<u;v+=h){const f=Pr(this,t,Vs,c,v,v+1);f&&e.push(f)}if(this.isLineLoop){const v=Pr(this,t,Vs,c,g-1,m);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Pr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(aa.fromBufferAttribute(a,s),oa.fromBufferAttribute(a,r),e.distanceSqToSegment(aa,oa,Qa,$c)>n)return;Qa.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Qa);if(!(c<t.near||c>t.far))return{distance:c,point:$c.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const qc=new k,Xc=new k;class Av extends t1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)qc.fromBufferAttribute(e,s),Xc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+qc.distanceTo(Xc);t.setAttribute("lineDistance",new se(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pu extends Zn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yc=new ie,Qo=new ua,Vr=new Pi,Dr=new k;class e1 extends Ce{constructor(t=new Ue,e=new pu){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Vr.copy(n.boundingSphere),Vr.applyMatrix4(s),Vr.radius+=r,t.ray.intersectsSphere(Vr)===!1)return;Yc.copy(s).invert(),Qo.copy(t.ray).applyMatrix4(Yc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=p,v=m;g<v;g++){const u=h.getX(g);Dr.fromBufferAttribute(d,u),jc(Dr,u,c,s,t,e,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let g=p,v=m;g<v;g++)Dr.fromBufferAttribute(d,g),jc(Dr,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function jc(i,t,e,n,s,r,a){const o=Qo.distanceSqToPoint(i);if(o<e){const c=new k;Qo.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class mu extends Xe{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Nn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const l=n[s],p=n[s+1]-l,m=(a-l)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new at:new k);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new k,s=[],r=[],a=[],o=new k,c=new ie;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new k)}r[0]=new k,a[0]=new k;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),d=Math.abs(s[0].y),p=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),d<=h&&(h=d,n.set(0,1,0)),p<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(We(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(We(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Tl extends Nn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new at){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),d=Math.sin(this.aRotation),p=c-this.aX,m=h-this.aY;c=p*l-m*d+this.aX,h=p*d+m*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n1 extends Tl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function Al(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,d){let p=(a-r)/h-(o-r)/(h+l)+(o-a)/l,m=(o-a)/l-(c-a)/(l+d)+(c-o)/d;p*=l,m*=l,s(a,o,p,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Ir=new k,to=new Al,eo=new Al,no=new Al;class i1 extends Nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new k){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%r]:(Ir.subVectors(s[0],s[1]).add(s[0]),h=Ir);const d=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(Ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Ir),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(d),m),v=Math.pow(d.distanceToSquared(p),m),u=Math.pow(p.distanceToSquared(l),m);v<1e-4&&(v=1),g<1e-4&&(g=v),u<1e-4&&(u=v),to.initNonuniformCatmullRom(h.x,d.x,p.x,l.x,g,v,u),eo.initNonuniformCatmullRom(h.y,d.y,p.y,l.y,g,v,u),no.initNonuniformCatmullRom(h.z,d.z,p.z,l.z,g,v,u)}else this.curveType==="catmullrom"&&(to.initCatmullRom(h.x,d.x,p.x,l.x,this.tension),eo.initCatmullRom(h.y,d.y,p.y,l.y,this.tension),no.initCatmullRom(h.z,d.z,p.z,l.z,this.tension));return n.set(to.calc(c),eo.calc(c),no.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new k().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Kc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function s1(i,t){const e=1-i;return e*e*t}function r1(i,t){return 2*(1-i)*i*t}function a1(i,t){return i*i*t}function Bs(i,t,e,n){return s1(i,t)+r1(i,e)+a1(i,n)}function o1(i,t){const e=1-i;return e*e*e*t}function l1(i,t){const e=1-i;return 3*e*e*i*t}function c1(i,t){return 3*(1-i)*i*i*t}function h1(i,t){return i*i*i*t}function zs(i,t,e,n,s){return o1(i,t)+l1(i,e)+c1(i,n)+h1(i,s)}class gu extends Nn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u1 extends Nn{constructor(t=new k,e=new k,n=new k,s=new k){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new k){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y),zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class vu extends Nn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f1 extends Nn{constructor(t=new k,e=new k){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new k){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new k){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _u extends Nn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends Nn{constructor(t=new k,e=new k,n=new k){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new k){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y),Bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yu extends Nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],l=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Kc(o,c.x,h.x,l.x,d.x),Kc(o,c.y,h.y,l.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new at().fromArray(s))}return this}}var la=Object.freeze({__proto__:null,ArcCurve:n1,CatmullRomCurve3:i1,CubicBezierCurve:gu,CubicBezierCurve3:u1,EllipseCurve:Tl,LineCurve:vu,LineCurve3:f1,QuadraticBezierCurve:_u,QuadraticBezierCurve3:xu,SplineCurve:yu});class d1 extends Nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new la[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){const l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new la[s.type]().fromJSON(s))}return this}}class Zc extends d1{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new vu(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new _u(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new gu(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const h=new Tl(t,e,n,s,r,a,o,c);if(this.curves.length>0){const d=h.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class bu extends Ue{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=We(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],h=[],l=1/e,d=new k,p=new at,m=new k,g=new k,v=new k;let u=0,f=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:u=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,m.x=f*1,m.y=-u,m.z=f*0,v.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:u=t[_+1].x-t[_].x,f=t[_+1].y-t[_].y,m.x=f*1,m.y=-u,m.z=f*0,g.copy(m),m.x+=v.x,m.y+=v.y,m.z+=v.z,m.normalize(),c.push(m.x,m.y,m.z),v.copy(g)}for(let _=0;_<=e;_++){const x=n+_*l*s,b=Math.sin(x),U=Math.cos(x);for(let E=0;E<=t.length-1;E++){d.x=t[E].x*b,d.y=t[E].y,d.z=t[E].x*U,a.push(d.x,d.y,d.z),p.x=_/e,p.y=E/(t.length-1),o.push(p.x,p.y);const R=c[3*E+0]*b,P=c[3*E+1],H=c[3*E+0]*U;h.push(R,P,H)}}for(let _=0;_<e;_++)for(let x=0;x<t.length-1;x++){const b=x+_*t.length,U=b,E=b+t.length,R=b+t.length+1,P=b+1;r.push(U,E,P),r.push(R,P,E)}this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("uv",new se(o,2)),this.setAttribute("normal",new se(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new bu(t.points,t.segments,t.phiStart,t.phiLength)}}class er extends Ue{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new k,l=new at;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,p=3;d<=e;d++,p+=3){const m=n+d/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[p]/t+1)/2,l.y=(a[p+1]/t+1)/2,c.push(l.x,l.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new se(a,3)),this.setAttribute("normal",new se(o,3)),this.setAttribute("uv",new se(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new er(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ne extends Ue{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],d=[],p=[],m=[];let g=0;const v=[],u=n/2;let f=0;_(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(l),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(m,2));function _(){const b=new k,U=new k;let E=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const H=[],S=P/r,w=S*(e-t)+t;for(let X=0;X<=s;X++){const W=X/s,Y=W*c+o,it=Math.sin(Y),V=Math.cos(Y);U.x=w*it,U.y=-S*n+u,U.z=w*V,d.push(U.x,U.y,U.z),b.set(it,R,V).normalize(),p.push(b.x,b.y,b.z),m.push(W,1-S),H.push(g++)}v.push(H)}for(let P=0;P<s;P++)for(let H=0;H<r;H++){const S=v[H][P],w=v[H+1][P],X=v[H+1][P+1],W=v[H][P+1];t>0&&(l.push(S,w,W),E+=3),e>0&&(l.push(w,X,W),E+=3)}h.addGroup(f,E,0),f+=E}function x(b){const U=g,E=new at,R=new k;let P=0;const H=b===!0?t:e,S=b===!0?1:-1;for(let X=1;X<=s;X++)d.push(0,u*S,0),p.push(0,S,0),m.push(.5,.5),g++;const w=g;for(let X=0;X<=s;X++){const Y=X/s*c+o,it=Math.cos(Y),V=Math.sin(Y);R.x=H*V,R.y=u*S,R.z=H*it,d.push(R.x,R.y,R.z),p.push(0,S,0),E.x=it*.5+.5,E.y=V*.5*S+.5,m.push(E.x,E.y),g++}for(let X=0;X<s;X++){const W=U+X,Y=w+X;b===!0?l.push(Y,Y+1,W):l.push(Y+1,Y,W),P+=3}h.addGroup(f,P,b===!0?1:2),f+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ne(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ll extends ne{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new Ll(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rl extends Ue{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),h(n),l(),this.setAttribute("position",new se(r,3)),this.setAttribute("normal",new se(r.slice(),3)),this.setAttribute("uv",new se(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const x=new k,b=new k,U=new k;for(let E=0;E<e.length;E+=3)m(e[E+0],x),m(e[E+1],b),m(e[E+2],U),c(x,b,U,_)}function c(_,x,b,U){const E=U+1,R=[];for(let P=0;P<=E;P++){R[P]=[];const H=_.clone().lerp(b,P/E),S=x.clone().lerp(b,P/E),w=E-P;for(let X=0;X<=w;X++)X===0&&P===E?R[P][X]=H:R[P][X]=H.clone().lerp(S,X/w)}for(let P=0;P<E;P++)for(let H=0;H<2*(E-P)-1;H++){const S=Math.floor(H/2);H%2===0?(p(R[P][S+1]),p(R[P+1][S]),p(R[P][S])):(p(R[P][S+1]),p(R[P+1][S+1]),p(R[P+1][S]))}}function h(_){const x=new k;for(let b=0;b<r.length;b+=3)x.x=r[b+0],x.y=r[b+1],x.z=r[b+2],x.normalize().multiplyScalar(_),r[b+0]=x.x,r[b+1]=x.y,r[b+2]=x.z}function l(){const _=new k;for(let x=0;x<r.length;x+=3){_.x=r[x+0],_.y=r[x+1],_.z=r[x+2];const b=u(_)/2/Math.PI+.5,U=f(_)/Math.PI+.5;a.push(b,1-U)}g(),d()}function d(){for(let _=0;_<a.length;_+=6){const x=a[_+0],b=a[_+2],U=a[_+4],E=Math.max(x,b,U),R=Math.min(x,b,U);E>.9&&R<.1&&(x<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),U<.2&&(a[_+4]+=1))}}function p(_){r.push(_.x,_.y,_.z)}function m(_,x){const b=_*3;x.x=t[b+0],x.y=t[b+1],x.z=t[b+2]}function g(){const _=new k,x=new k,b=new k,U=new k,E=new at,R=new at,P=new at;for(let H=0,S=0;H<r.length;H+=9,S+=6){_.set(r[H+0],r[H+1],r[H+2]),x.set(r[H+3],r[H+4],r[H+5]),b.set(r[H+6],r[H+7],r[H+8]),E.set(a[S+0],a[S+1]),R.set(a[S+2],a[S+3]),P.set(a[S+4],a[S+5]),U.copy(_).add(x).add(b).divideScalar(3);const w=u(U);v(E,S+0,_,w),v(R,S+2,x,w),v(P,S+4,b,w)}}function v(_,x,b,U){U<0&&_.x===1&&(a[x]=_.x-1),b.x===0&&b.z===0&&(a[x]=U/2/Math.PI+.5)}function u(_){return Math.atan2(_.z,-_.x)}function f(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rl(t.vertices,t.indices,t.radius,t.details)}}class p1 extends Zc{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Zc().fromJSON(s))}return this}}const m1={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Su(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h,l,d,p,m;if(n&&(r=y1(i,t,r,e)),i.length>80*e){o=h=i[0],c=l=i[1];for(let g=e;g<s;g+=e)d=i[g],p=i[g+1],d<o&&(o=d),p<c&&(c=p),d>h&&(h=d),p>l&&(l=p);m=Math.max(h-o,l-c),m=m!==0?32767/m:0}return Ks(r,a,e,o,c,m,0),a}};function Su(i,t,e,n,s){let r,a;if(s===P1(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Jc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Jc(r,i[r],i[r+1],a);return a&&da(a,a.next)&&(Js(a),a=a.next),a}function Ri(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(da(e,e.next)||we(e.prev,e,e.next)===0)){if(Js(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(i,t,e,n,s,r,a){if(!i)return;!a&&r&&C1(i,n,s,r);let o=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?v1(i,n,s,r):g1(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Js(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=_1(Ri(i),t,e),Ks(i,t,e,n,s,r,2)):a===2&&x1(i,t,e,n,s,r):Ks(Ri(i),t,e,n,s,r,1);break}}}function g1(i){const t=i.prev,e=i,n=i.next;if(we(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,l=s<r?s<a?s:a:r<a?r:a,d=o<c?o<h?o:h:c<h?c:h,p=s>r?s>a?s:a:r>a?r:a,m=o>c?o>h?o:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=p&&g.y>=d&&g.y<=m&&is(s,o,r,c,a,h,g.x,g.y)&&we(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function v1(i,t,e,n){const s=i.prev,r=i,a=i.next;if(we(s,r,a)>=0)return!1;const o=s.x,c=r.x,h=a.x,l=s.y,d=r.y,p=a.y,m=o<c?o<h?o:h:c<h?c:h,g=l<d?l<p?l:p:d<p?d:p,v=o>c?o>h?o:h:c>h?c:h,u=l>d?l>p?l:p:d>p?d:p,f=tl(m,g,t,e,n),_=tl(v,u,t,e,n);let x=i.prevZ,b=i.nextZ;for(;x&&x.z>=f&&b&&b.z<=_;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=u&&x!==s&&x!==a&&is(o,l,c,d,h,p,x.x,x.y)&&we(x.prev,x,x.next)>=0||(x=x.prevZ,b.x>=m&&b.x<=v&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&is(o,l,c,d,h,p,b.x,b.y)&&we(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;x&&x.z>=f;){if(x.x>=m&&x.x<=v&&x.y>=g&&x.y<=u&&x!==s&&x!==a&&is(o,l,c,d,h,p,x.x,x.y)&&we(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&is(o,l,c,d,h,p,b.x,b.y)&&we(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function _1(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!da(s,r)&&Mu(s,n,n.next,r)&&Zs(s,r)&&Zs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Js(n),Js(n.next),n=i=r),n=n.next}while(n!==i);return Ri(n)}function x1(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&A1(a,o)){let c=wu(a,o);a=Ri(a,a.next),c=Ri(c,c.next),Ks(a,t,e,n,s,r,0),Ks(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function y1(i,t,e,n){const s=[];let r,a,o,c,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=Su(i,o,c,n,!1),h===h.next&&(h.steiner=!0),s.push(T1(h));for(s.sort(b1),r=0;r<s.length;r++)e=S1(s[r],e);return e}function b1(i,t){return i.x-t.x}function S1(i,t){const e=M1(i,t);if(!e)return t;const n=wu(e,i);return Ri(n,n.next),Ri(e,e.next)}function M1(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const p=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,h=s.y;let l=1/0,d;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&is(a<h?r:n,a,c,h,a<h?n:r,a,e.x,e.y)&&(d=Math.abs(a-e.y)/(r-e.x),Zs(e,i)&&(d<l||d===l&&(e.x>s.x||e.x===s.x&&w1(s,e)))&&(s=e,l=d)),e=e.next;while(e!==o);return s}function w1(i,t){return we(i.prev,i,t.prev)<0&&we(t.next,i,i.next)<0}function C1(i,t,e,n){let s=i;do s.z===0&&(s.z=tl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,E1(s)}function E1(i){let t,e,n,s,r,a,o,c,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function tl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function T1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function is(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function A1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!L1(i,t)&&(Zs(i,t)&&Zs(t,i)&&R1(i,t)&&(we(i.prev,i,t.prev)||we(i,t.prev,t))||da(i,t)&&we(i.prev,i,i.next)>0&&we(t.prev,t,t.next)>0)}function we(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function da(i,t){return i.x===t.x&&i.y===t.y}function Mu(i,t,e,n){const s=kr(we(i,t,e)),r=kr(we(i,t,n)),a=kr(we(e,n,i)),o=kr(we(e,n,t));return!!(s!==r&&a!==o||s===0&&Ur(i,e,t)||r===0&&Ur(i,n,t)||a===0&&Ur(e,i,n)||o===0&&Ur(e,t,n))}function Ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function kr(i){return i>0?1:i<0?-1:0}function L1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Zs(i,t){return we(i.prev,i,i.next)<0?we(i,t,i.next)>=0&&we(i,i.prev,t)>=0:we(i,t,i.prev)<0||we(i,i.next,t)<0}function R1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){const e=new el(i.i,i.x,i.y),n=new el(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Jc(i,t,e,n){const s=new el(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Js(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function el(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P1(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Hs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Qc(t),th(n,t);let a=t.length;e.forEach(Qc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,th(n,e[c]);const o=m1.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Qc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function th(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Cu extends Ue{constructor(t=new p1([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const h=t[o];a(h)}this.setAttribute("position",new se(s,3)),this.setAttribute("uv",new se(r,2)),this.computeVertexNormals();function a(o){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,u=e.bevelSegments!==void 0?e.bevelSegments:3;const f=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:V1;let x,b=!1,U,E,R,P;f&&(x=f.getSpacedPoints(l),b=!0,p=!1,U=f.computeFrenetFrames(l,!1),E=new k,R=new k,P=new k),p||(u=0,m=0,g=0,v=0);const H=o.extractPoints(h);let S=H.shape;const w=H.holes;if(!Hs.isClockWise(S)){S=S.reverse();for(let st=0,D=w.length;st<D;st++){const vt=w[st];Hs.isClockWise(vt)&&(w[st]=vt.reverse())}}const W=Hs.triangulateShape(S,w),Y=S;for(let st=0,D=w.length;st<D;st++){const vt=w[st];S=S.concat(vt)}function it(st,D,vt){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),st.clone().addScaledVector(D,vt)}const V=S.length,j=W.length;function q(st,D,vt){let _t,ft,bt;const Ft=st.x-D.x,Tt=st.y-D.y,M=vt.x-st.x,y=vt.y-st.y,N=Ft*Ft+Tt*Tt,C=Ft*y-Tt*M;if(Math.abs(C)>Number.EPSILON){const A=Math.sqrt(N),T=Math.sqrt(M*M+y*y),O=D.x-Tt/A,K=D.y+Ft/A,et=vt.x-y/T,At=vt.y+M/T,B=((et-O)*y-(At-K)*M)/(Ft*y-Tt*M);_t=O+Ft*B-st.x,ft=K+Tt*B-st.y;const tt=_t*_t+ft*ft;if(tt<=2)return new at(_t,ft);bt=Math.sqrt(tt/2)}else{let A=!1;Ft>Number.EPSILON?M>Number.EPSILON&&(A=!0):Ft<-Number.EPSILON?M<-Number.EPSILON&&(A=!0):Math.sign(Tt)===Math.sign(y)&&(A=!0),A?(_t=-Tt,ft=Ft,bt=Math.sqrt(N)):(_t=Ft,ft=Tt,bt=Math.sqrt(N/2))}return new at(_t/bt,ft/bt)}const xt=[];for(let st=0,D=Y.length,vt=D-1,_t=st+1;st<D;st++,vt++,_t++)vt===D&&(vt=0),_t===D&&(_t=0),xt[st]=q(Y[st],Y[vt],Y[_t]);const Ct=[];let St,Ut=xt.concat();for(let st=0,D=w.length;st<D;st++){const vt=w[st];St=[];for(let _t=0,ft=vt.length,bt=ft-1,Ft=_t+1;_t<ft;_t++,bt++,Ft++)bt===ft&&(bt=0),Ft===ft&&(Ft=0),St[_t]=q(vt[_t],vt[bt],vt[Ft]);Ct.push(St),Ut=Ut.concat(St)}for(let st=0;st<u;st++){const D=st/u,vt=m*Math.cos(D*Math.PI/2),_t=g*Math.sin(D*Math.PI/2)+v;for(let ft=0,bt=Y.length;ft<bt;ft++){const Ft=it(Y[ft],xt[ft],_t);Mt(Ft.x,Ft.y,-vt)}for(let ft=0,bt=w.length;ft<bt;ft++){const Ft=w[ft];St=Ct[ft];for(let Tt=0,M=Ft.length;Tt<M;Tt++){const y=it(Ft[Tt],St[Tt],_t);Mt(y.x,y.y,-vt)}}}const Ht=g+v;for(let st=0;st<V;st++){const D=p?it(S[st],Ut[st],Ht):S[st];b?(R.copy(U.normals[0]).multiplyScalar(D.x),E.copy(U.binormals[0]).multiplyScalar(D.y),P.copy(x[0]).add(R).add(E),Mt(P.x,P.y,P.z)):Mt(D.x,D.y,0)}for(let st=1;st<=l;st++)for(let D=0;D<V;D++){const vt=p?it(S[D],Ut[D],Ht):S[D];b?(R.copy(U.normals[st]).multiplyScalar(vt.x),E.copy(U.binormals[st]).multiplyScalar(vt.y),P.copy(x[st]).add(R).add(E),Mt(P.x,P.y,P.z)):Mt(vt.x,vt.y,d/l*st)}for(let st=u-1;st>=0;st--){const D=st/u,vt=m*Math.cos(D*Math.PI/2),_t=g*Math.sin(D*Math.PI/2)+v;for(let ft=0,bt=Y.length;ft<bt;ft++){const Ft=it(Y[ft],xt[ft],_t);Mt(Ft.x,Ft.y,d+vt)}for(let ft=0,bt=w.length;ft<bt;ft++){const Ft=w[ft];St=Ct[ft];for(let Tt=0,M=Ft.length;Tt<M;Tt++){const y=it(Ft[Tt],St[Tt],_t);b?Mt(y.x,y.y+x[l-1].y,x[l-1].x+vt):Mt(y.x,y.y,d+vt)}}}nt(),ut();function nt(){const st=s.length/3;if(p){let D=0,vt=V*D;for(let _t=0;_t<j;_t++){const ft=W[_t];$t(ft[2]+vt,ft[1]+vt,ft[0]+vt)}D=l+u*2,vt=V*D;for(let _t=0;_t<j;_t++){const ft=W[_t];$t(ft[0]+vt,ft[1]+vt,ft[2]+vt)}}else{for(let D=0;D<j;D++){const vt=W[D];$t(vt[2],vt[1],vt[0])}for(let D=0;D<j;D++){const vt=W[D];$t(vt[0]+V*l,vt[1]+V*l,vt[2]+V*l)}}n.addGroup(st,s.length/3-st,0)}function ut(){const st=s.length/3;let D=0;Et(Y,D),D+=Y.length;for(let vt=0,_t=w.length;vt<_t;vt++){const ft=w[vt];Et(ft,D),D+=ft.length}n.addGroup(st,s.length/3-st,1)}function Et(st,D){let vt=st.length;for(;--vt>=0;){const _t=vt;let ft=vt-1;ft<0&&(ft=st.length-1);for(let bt=0,Ft=l+u*2;bt<Ft;bt++){const Tt=V*bt,M=V*(bt+1),y=D+_t+Tt,N=D+ft+Tt,C=D+ft+M,A=D+_t+M;Gt(y,N,C,A)}}}function Mt(st,D,vt){c.push(st),c.push(D),c.push(vt)}function $t(st,D,vt){Kt(st),Kt(D),Kt(vt);const _t=s.length/3,ft=_.generateTopUV(n,s,_t-3,_t-2,_t-1);Jt(ft[0]),Jt(ft[1]),Jt(ft[2])}function Gt(st,D,vt,_t){Kt(st),Kt(D),Kt(_t),Kt(D),Kt(vt),Kt(_t);const ft=s.length/3,bt=_.generateSideWallUV(n,s,ft-6,ft-3,ft-2,ft-1);Jt(bt[0]),Jt(bt[1]),Jt(bt[3]),Jt(bt[1]),Jt(bt[2]),Jt(bt[3])}function Kt(st){s.push(c[st*3+0]),s.push(c[st*3+1]),s.push(c[st*3+2])}function Jt(st){r.push(st.x),r.push(st.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return D1(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new la[s.type]().fromJSON(s)),new Cu(n,t.options)}}const V1={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],l=t[s*3+1];return[new at(r,a),new at(o,c),new at(h,l)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],d=t[n*3+2],p=t[s*3],m=t[s*3+1],g=t[s*3+2],v=t[r*3],u=t[r*3+1],f=t[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new at(a,1-c),new at(h,1-d),new at(p,1-g),new at(v,1-f)]:[new at(o,1-c),new at(l,1-d),new at(m,1-g),new at(u,1-f)]}};function D1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Pl extends Rl{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Pl(t.radius,t.detail)}}class vn extends Ue{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],d=new k,p=new k,m=[],g=[],v=[],u=[];for(let f=0;f<=n;f++){const _=[],x=f/n;let b=0;f===0&&a===0?b=.5/e:f===n&&c===Math.PI&&(b=-.5/e);for(let U=0;U<=e;U++){const E=U/e;d.x=-t*Math.cos(s+E*r)*Math.sin(a+x*o),d.y=t*Math.cos(a+x*o),d.z=t*Math.sin(s+E*r)*Math.sin(a+x*o),g.push(d.x,d.y,d.z),p.copy(d).normalize(),v.push(p.x,p.y,p.z),u.push(E+b,1-x),_.push(h++)}l.push(_)}for(let f=0;f<n;f++)for(let _=0;_<e;_++){const x=l[f][_+1],b=l[f][_],U=l[f+1][_],E=l[f+1][_+1];(f!==0||a>0)&&m.push(x,b,E),(f!==n-1||c<Math.PI)&&m.push(b,U,E)}this.setIndex(m),this.setAttribute("position",new se(g,3)),this.setAttribute("normal",new se(v,3)),this.setAttribute("uv",new se(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Qs extends Ue{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],h=[],l=new k,d=new k,p=new k;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,u=m/n*Math.PI*2;d.x=(t+e*Math.cos(u))*Math.cos(v),d.y=(t+e*Math.cos(u))*Math.sin(v),d.z=e*Math.sin(u),o.push(d.x,d.y,d.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),p.subVectors(d,l).normalize(),c.push(p.x,p.y,p.z),h.push(g/s),h.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,u=(s+1)*(m-1)+g-1,f=(s+1)*(m-1)+g,_=(s+1)*m+g;a.push(v,u,_),a.push(u,f,_)}this.setIndex(a),this.setAttribute("position",new se(o,3)),this.setAttribute("normal",new se(c,3)),this.setAttribute("uv",new se(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Eu extends Ue{constructor(t=new xu(new k(-1,-1,0),new k(-1,1,0),new k(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new k,c=new k,h=new at;let l=new k;const d=[],p=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new se(d,3)),this.setAttribute("normal",new se(p,3)),this.setAttribute("uv",new se(m,2));function v(){for(let x=0;x<e;x++)u(x);u(r===!1?e:0),_(),f()}function u(x){l=t.getPointAt(x/e,l);const b=a.normals[x],U=a.binormals[x];for(let E=0;E<=s;E++){const R=E/s*Math.PI*2,P=Math.sin(R),H=-Math.cos(R);c.x=H*b.x+P*U.x,c.y=H*b.y+P*U.y,c.z=H*b.z+P*U.z,c.normalize(),p.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,d.push(o.x,o.y,o.z)}}function f(){for(let x=1;x<=e;x++)for(let b=1;b<=s;b++){const U=(s+1)*(x-1)+(b-1),E=(s+1)*x+(b-1),R=(s+1)*x+b,P=(s+1)*(x-1)+b;g.push(U,E,P),g.push(E,R,P)}}function _(){for(let x=0;x<=e;x++)for(let b=0;b<=s;b++)h.x=x/e,h.y=b/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new Eu(new la[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class I1 extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Tu extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qn extends Zn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yl,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pn,this.combine=ul,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const eh={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class U1{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,d){return h.push(l,d),this},this.removeHandler=function(l){const d=h.indexOf(l);return d!==-1&&h.splice(d,2),this},this.getHandler=function(l){for(let d=0,p=h.length;d<p;d+=2){const m=h[d],g=h[d+1];if(m.global&&(m.lastIndex=0),m.test(l))return g}return null}}}const k1=new U1;class Vl{constructor(t){this.manager=t!==void 0?t:k1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";class N1 extends Vl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=eh.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=js("img");function c(){l(),eh.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(d){l(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class F1 extends Vl{constructor(t){super(t)}load(t,e,n,s){const r=new Xe,a=new N1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class nr extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class O1 extends nr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const io=new ie,nh=new k,ih=new k;class Dl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ml,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;nh.setFromMatrixPosition(t.matrixWorld),e.position.copy(nh),ih.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ih),e.updateMatrixWorld(),io.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(io),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(io)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class B1 extends Dl{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=sa*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Au extends nr{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new B1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const sh=new ie,Ds=new k,so=new k;class z1 extends Dl{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new k(1,0,0),new k(-1,0,0),new k(0,0,1),new k(0,0,-1),new k(0,1,0),new k(0,-1,0)],this._cubeUps=[new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,1,0),new k(0,0,1),new k(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ds.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ds),so.copy(n.position),so.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(so),n.updateMatrixWorld(),s.makeTranslation(-Ds.x,-Ds.y,-Ds.z),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh)}}class Gs extends nr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new z1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class H1 extends Dl{constructor(){super(new wl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class G1 extends nr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new H1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W1 extends nr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rh(){return performance.now()}const ah=new ie;class q1{constructor(t,e,n=0,s=1/0){this.ray=new ua(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Sl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ah.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ah),this}intersectObject(t,e=!0,n=[]){return nl(t,this,n,e),n.sort(oh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)nl(t[s],this,n,e);return n.sort(oh),n}}function oh(i,t){return i.distance-t.distance}function nl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)nl(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cl);const Lu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Vi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const X1=new wl(-1,1,1,-1,0,1);class Y1 extends Ue{constructor(){super(),this.setAttribute("position",new se([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new se([0,2,0,0,2,0],2))}}const j1=new Y1;class pa{constructor(t){this._mesh=new ht(j1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,X1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class il extends Vi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=gs.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new pa(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lh extends Vi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class K1 extends Vi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Z1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new at);this._width=n.width,this._height=n.height,e=new mn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new il(Lu),this.copyPass.material.blending=kn,this.clock=new $1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}lh!==void 0&&(a instanceof lh?n=!0:a instanceof K1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new at);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class J1 extends Vi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new zt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Q1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class vs extends Vi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new at(t.x,t.y):new at(256,256),this.clearColor=new zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new mn(r,a,{type:Ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let d=0;d<this.nMips;d++){const p=new mn(r,a,{type:Ln});p.texture.name="UnrealBloomPass.h"+d,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const m=new mn(r,a,{type:Ln});m.texture.name="UnrealBloomPass.v"+d,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=Q1;this.highPassUniforms=gs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let d=0;d<this.nMips;d++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[d])),this.separableBlurMaterials[d].uniforms.invSize.value=new at(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1),new k(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=Lu;this.copyUniforms=gs.clone(l.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:Ai,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new zt,this.oldClearAlpha=1,this.basic=new Re,this.fsQuad=new pa(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new at(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=vs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=vs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new at(.5,.5)},direction:{value:new at(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new qe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}vs.BlurDirectionX=new at(1,0);vs.BlurDirectionY=new at(0,1);const tg={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class eg extends Vi{constructor(){super();const t=tg;this.uniforms=gs.clone(t.uniforms),this.material=new I1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new pa(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},le.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Dh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ih?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Uh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===fl?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Nh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ng={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};class ig extends Vi{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new mn(1,1,{minFilter:Ne,magFilter:Ne,type:Ln}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new uu,this.materialDepth.depthPacking=Yh,this.materialDepth.blending=kn;const o=ng,c=gs.clone(o.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=s,c.aspect.value=e.aspect,c.aperture.value=r,c.maxblur.value=a,c.nearClip.value=e.near,c.farClip.value=e.far,this.materialBokeh=new qe({defines:Object.assign({},o.defines),uniforms:c,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=c,this.fsQuad=new pa(this.materialBokeh),this._oldClearColor=new zt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const sl=3,sg="the-other-me-applause",ls="saves",Ru="tom-applause-settings";function Il(){return{v:sl,room:"hub_sydney",spot:"start",chapter:"Пролог",f:{},inv:[],notes:[],photos:[],seen:{},mask:null,time:0}}const ch={music:.7,sfx:.8,voice:.6,uiScale:1,quality:"med",textSpeed:45,reduceFlash:!1,reduceShake:!1,contrast:!1,rhythmEasy:!1,rhythmOffset:0,touch:typeof window<"u"&&"ontouchstart"in window&&matchMedia("(pointer: coarse)").matches,introAlways:!1},Me=rg();function rg(){try{const i=localStorage.getItem(Ru);if(i)return{...ch,...JSON.parse(i)}}catch(i){console.warn("[settings] не удалось прочитать настройки, используются значения по умолчанию",i)}return{...ch}}function hh(){try{localStorage.setItem(Ru,JSON.stringify(Me))}catch(i){console.warn("[settings] не удалось сохранить настройки",i)}}let Nr=null;function Pu(){return Nr||(Nr=new Promise(i=>{try{const t=indexedDB.open(sg,1);t.onupgradeneeded=()=>t.result.createObjectStore(ls),t.onsuccess=()=>i(t.result),t.onerror=()=>{console.warn("[save] IndexedDB недоступна, используется localStorage",t.error),i(null)}}catch(t){console.warn("[save] IndexedDB недоступна, используется localStorage",t),i(null)}}),Nr)}async function Vu(i,t){const e=await Pu();if(!e){t===null?localStorage.removeItem("tom-save-"+i):localStorage.setItem("tom-save-"+i,t);return}return new Promise((n,s)=>{const r=e.transaction(ls,"readwrite");t===null?r.objectStore(ls).delete(i):r.objectStore(ls).put(t,i),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)})}async function ag(i){const t=await Pu();return t?new Promise((e,n)=>{const s=t.transaction(ls).objectStore(ls).get(i);s.onsuccess=()=>e(s.result??null),s.onerror=()=>n(s.error)}):localStorage.getItem("tom-save-"+i)}const uh=["auto","slot1","slot2","slot3"],og={auto:"Автосохранение",slot1:"Слот I",slot2:"Слот II",slot3:"Слот III"};function Ul(i){if(!i||typeof i!="object"||typeof i.room!="string"||typeof i.f!="object")return null;const t={...Il(),...i};return Array.isArray(t.inv)||(t.inv=[]),Array.isArray(t.notes)||(t.notes=[]),Array.isArray(t.photos)||(t.photos=[]),(!t.seen||typeof t.seen!="object")&&(t.seen={}),(i.v|0)>sl?null:(t.v=sl,t)}async function kl(i,t){t.savedAt=Date.now(),await Vu(i,JSON.stringify(t))}async function jr(i){const t=await ag(i);if(!t)return{state:null,broken:!1};try{const e=Ul(JSON.parse(t));return{state:e,broken:!e}}catch(e){return console.warn(`[save] слот ${i} повреждён`,e),{state:null,broken:!0}}}async function lg(i){await Vu(i,null)}function cg(i){return JSON.stringify(i)}function hg(i){try{return Ul(JSON.parse(i))}catch(t){return console.warn("[save] импорт: файл не является сохранением",t),null}}typeof window<"u"&&(window.__S={readSave:jr,writeSave:kl,migrate:Ul});const Qi={sat:1,tint:[1,1,1],vig:.5,glitch:0,bright:1,contrast:1,wave:0,bloom:.45},ug={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new k(1,1,1)},uVig:{value:.35},uGlitch:{value:0},uBright:{value:1},uContrast:{value:1},uWave:{value:0},uTime:{value:0},uFlash:{value:0},uDither:{value:1},uCA:{value:.0018},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash,uDither,uCA,uGrain; uniform vec3 uTint; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec2 uv=vUv;
      if(uWave>0.0){ uv.x+=sin(uv.y*18.0+uTime*2.2)*0.006*uWave; uv.y+=sin(uv.x*14.0+uTime*1.7)*0.005*uWave; }
      float sh=0.0;
      if(uGlitch>0.0){ float band=floor(uv.y*24.0); float n=h(vec2(band,floor(uTime*9.0))); if(n>1.0-uGlitch*0.35){ uv.x+=(h(vec2(band,uTime))-0.5)*0.12*uGlitch; } sh=0.004*uGlitch; }
      vec2 dc=uv-0.5; float ca=uCA*dot(dc,dc)*4.0; vec3 c=vec3(texture2D(tDiffuse,uv+dc*ca).r, texture2D(tDiffuse,uv).g, texture2D(tDiffuse,uv-dc*ca).b);
      if(sh>0.0){ c.r=texture2D(tDiffuse,uv+vec2(sh,0.0)).r; c.b=texture2D(tDiffuse,uv-vec2(sh,0.0)).b; }
      float l=dot(c,vec3(0.3,0.59,0.11)); c=mix(vec3(l),c,uSat); c*=uTint*uBright; c=(c-0.5)*uContrast+0.5;
      vec2 vq=(vUv-0.5)*vec2(1.12,1.0); float d=length(vq); float vg=smoothstep(0.26,0.8,d)+0.35*smoothstep(0.36,0.5,abs(vUv.y-0.5)); c=mix(c,c*vec3(0.16,0.1,0.09),clamp(uVig*vg*1.3,0.0,0.95));
      float lum=dot(c,vec3(0.3,0.59,0.11)); c=mix(c*vec3(0.94,0.98,1.06), c*vec3(1.06,1.0,0.92), smoothstep(0.15,0.75,lum));
      c+=(h(gl_FragCoord.xy+floor(uTime*24.0))-0.5)*uGrain; c+=vec3(uFlash);
      vec2 fp=floor(mod(gl_FragCoord.xy,4.0)); float b=mod(fp.x*8.0+fp.y*2.0+mod(fp.y,2.0)*4.0,16.0)/16.0;
      c=floor(c*40.0+b*uDither)/40.0; gl_FragColor=vec4(c,1.0); }`},fg={uniforms:{tDiffuse:{value:null},uFocus:{value:.5},uBand:{value:.16},uAmt:{value:1},uRes:{value:new at(640,360)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uFocus,uBand,uAmt; uniform vec2 uRes; varying vec2 vUv;
    void main(){ float d=abs(vUv.y-uFocus); float near=step(vUv.y,uFocus); float r=smoothstep(uBand, uBand+0.38, d)*uAmt*(near>0.5?4.2:3.0);
      if(r<0.05){ gl_FragColor=texture2D(tDiffuse,vUv); return; }
      vec3 acc=vec3(0.0); float w=0.0; for(int i=0;i<12;i++){ float a=float(i)*2.39996; float rr=sqrt(float(i)+0.5)/3.5; vec2 o=vec2(cos(a),sin(a))*rr*r/uRes; float k=1.0-rr*0.35; acc+=texture2D(tDiffuse,vUv+o).rgb*k; w+=k; }
      gl_FragColor=vec4(acc/w,1.0); }`};class dg{constructor(t){this.canvas=t,this.scene=new Y2,this.target={...Qi,tint:[...Qi.tint]},this.cur={...Qi,tint:[...Qi.tint]},this.flash=0,this.W=640,this.H=360,this.time=0,this.bokeh=null,this.dofFocus=0,this.pixelH=0,this.baseFov=30,this.tilt=null,this.tiltOn=!0,this.r=new X2({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=hl,this.r.localClippingEnabled=!0,this.r.toneMapping=fl,this.r.toneMappingExposure=1.3,this.cam=new an(30,16/9,1,200),this.setup(),window.addEventListener("resize",()=>this.setup())}setup(t={}){t.pixelH!=null&&(this.pixelH=t.pixelH);const e=t.dof??!!this.bokeh,n=window.innerWidth,s=window.innerHeight,r=this.pixelH||(Me.quality==="low"?288:Me.quality==="med"?400:540),a=Math.max(1,Math.floor(s/r))||1;this.H=Math.max(180,Math.round(s/a)),this.W=Math.max(240,Math.round(n/a)),this.r.setPixelRatio(1),this.r.setSize(this.W,this.H,!1),this.r.shadowMap.enabled=Me.quality!=="low",this.cam.aspect=this.W/this.H,this.cam.fov=this.cam.aspect<1?this.baseFov*1.5:this.baseFov,this.cam.updateProjectionMatrix();const o=new mn(this.W,this.H,{type:Ln});this.composer=new Z1(this.r,o),this.composer.addPass(new J1(this.scene,this.cam)),this.bloom=new vs(new at(this.W,this.H),.45,.5,.9),this.bloom.enabled=Me.quality!=="low",this.composer.addPass(this.bloom),this.bokeh=null,e&&Me.quality!=="low"&&(this.bokeh=new ig(this.scene,this.cam,{focus:this.dofFocus||5,aperture:.004,maxblur:.006}),this.composer.addPass(this.bokeh)),this.tilt=new il(fg),this.tilt.uniforms.uRes.value.set(this.W,this.H),this.tilt.enabled=Me.quality!=="low"&&this.tiltOn,this.composer.addPass(this.tilt),this.composer.addPass(new eg),this.grade=new il(ug),this.composer.addPass(this.grade)}setGrade(t,e=!1){this.target={...Qi,...t,tint:t.tint?[...t.tint]:[...Qi.tint]},e&&(this.cur={...this.target,tint:[...this.target.tint]})}render(t){this.time+=t;const e=Math.min(1,t*4),n=this.cur,s=this.target;for(const a of["sat","vig","glitch","bright","contrast","wave","bloom"])n[a]+=(s[a]-n[a])*e;for(let a=0;a<3;a++)n.tint[a]+=(s.tint[a]-n.tint[a])*e;this.flash=Math.max(0,this.flash-t*2.5);const r=this.grade.uniforms;r.uSat.value=n.sat,r.uTint.value.set(n.tint[0],n.tint[1],n.tint[2]),r.uVig.value=n.vig,r.uGlitch.value=Me.reduceFlash?Math.min(n.glitch,.25):n.glitch,r.uBright.value=n.bright,r.uContrast.value=n.contrast*(Me.contrast?1.12:1),r.uWave.value=n.wave,r.uTime.value=this.time,r.uFlash.value=Me.reduceFlash?this.flash*.25:this.flash,this.bloom.strength=n.bloom*.65,this.composer.render(t)}snapshot(t=192){this.composer.render(0);const e=document.createElement("canvas");e.width=t,e.height=Math.round(t*this.H/this.W);const n=e.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.canvas,0,0,e.width,e.height),e.toDataURL("image/jpeg",.7)}}const An=16,pg=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Le(i,t,e=0){let n=i*374761393+t*668265263+e*982451653|0;return n=(n^n>>13)*1274126177|0,((n^n>>16)>>>0)/4294967295}function ro(i,t,e,n=0){const s=Math.floor(i),r=Math.floor(t),a=i-s,o=t-r,c=v=>(v%e+e)%e,h=a*a*(3-2*a),l=o*o*(3-2*o),d=Le(c(s),c(r),n),p=Le(c(s+1),c(r),n),m=Le(c(s),c(r+1),n),g=Le(c(s+1),c(r+1),n);return d+(p-d)*h+(m-d)*l+(d-p-m+g)*h*l}function Ie(i,t,e,n=0){return ro(i/e*4,t/e*4,4,n)*.55+ro(i/e*8,t/e*8,8,n+1)*.3+ro(i/e*16,t/e*16,16,n+2)*.15}const Du=i=>{const t=parseInt(i,16);return[t>>16,t>>8&255,t&255]},Se=i=>i.split(" ").map(Du),Xn={wood:Se("2e1f15 45301f 5a4029 6e5133 82623f 98764d"),floor:Se("3d2817 53371f 684628 7c5631 8f673c"),darkwood:Se("1c130e 2a1c14 38261a 453021 543b28"),velvet:Se("3a0810 560c18 721022 8e1830 a82840"),plaster:Se("8a7a68 9c8c78 ad9d88 bcae98 cabda8"),stone:Se("3c3a37 524f4a 69655e 807b72 978f84"),brick:Se("3a1c18 54261e 6e3226 86402e 9a5038"),gold:Se("5a4010 86641c b08a2c d4ae48 f0d478"),carpet:Se("4a0c14 62101c 7a1626 8e2030"),metal:Se("23262c 343841 484e59 5e6673 78818f"),black:Se("0c0a0c 141216 1c1a20 24222a"),neon:Se("0a0a18 12122a 1c1c40 2a2a5a"),asphalt:Se("16181c 1e2126 282c33 343943 444a56"),grass:Se("1f2e18 283a1e 334823 3e5629 4b6431"),dirt:Se("2b2019 35281e 403024 4b392a 574332"),paper:Se("c9b88a d6c79a e2d5ac ecdfbc f4eacb"),white:Se("b8b8c4 cacad4 dadae2 e8e8ee f4f4f8"),tileb:Se("18181c 26262c"),concrete:Se("4a4a4e 5a5a5e 6a6a6e 7a7a7e"),schoolfloor:Se("a88a5a b89a68 c8aa78 d6ba88"),pink:Se("c85a90 d870a4 e888b8 f4a4cc"),sky:Se("6a9ad8 82aee4 9cc2ee b8d6f6"),night:Se("0a0e1c 101628 182036 222c48"),green:Se("24402e 2e5038 3a6244 48745a"),blue:Se("1a2440 24325a 304274 3e548e")},Ws=new Map;function ma(i,t=!0){const e=new mu(i);return e.magFilter=Ne,e.minFilter=Ne,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=fs),e.colorSpace=pn,e}const mg={floor:{u:.6,size:64,ramp:"floor",fn:(i,t,e)=>{const n=Math.floor(t/8),s=n*23%32,r=(i+s)%32;return t%8===0||r===0?.05:.35+Ie(i*3,t+n*40,e,n)*.55+Le(Math.floor((i+s)/32),n)*.2}},parquet:{u:.45,size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(i/16),s=Math.floor(t/16),r=(n+s)%2,a=r?i%16:t%16,o=r?t%4:i%4;return a===0||o===0?.1:.4+Ie(r?i:t*3,r?t*3:i,e,3)*.5+r*.08}},wood:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(t/8);return t%8===0?.05:.3+Ie(i*2,t+n*30,e,n+50)*.6}},darkwood:{size:32,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+Ie(i+n*30,t*2,e,n+60)*.6}},stage:{size:64,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+Ie(i+n*30,t*3,e,n)*.6}},woodwall:{size:32,ramp:"darkwood",fn:(i,t,e)=>i%16===0||t%32===31?.02:i%16===1?.9:.35+Ie(i*2,t,e,5)*.5},velvet:{size:32,ramp:"velvet",fn:(i,t)=>.5+Math.sin(i/32*Math.PI*6)*.42+Le(i,t)*.08},plaster:{size:64,ramp:"plaster",fn:(i,t,e)=>.3+Ie(i,t,e,7)*.6},wallpaper:{size:32,ramp:"velvet",dither:.1,fn:(i,t)=>{const e=i%16-8,n=(t+Math.floor(i/16)%2*8)%16-8,s=Math.abs(e)+Math.abs(n);return s<3?.75:s<5?.15:.35+Le(i,t)*.1}},wallgreen:{size:32,ramp:"green",dither:.1,fn:(i,t)=>{const e=i%16-8,n=t%16-8,s=Math.abs(e)+Math.abs(n);return i%16===0?.1:s<3?.85:.4+Le(i,t)*.15}},brick:{size:32,ramp:"brick",fn:(i,t,e)=>{const n=Math.floor(t/8),s=(i+n%2*8)%16;return t%8===0||s===0?[.3,Xn.stone]:.3+Le(Math.floor((i+n%2*8)/16),n)*.45+Ie(i,t,e,2)*.25}},stone:{size:32,ramp:"stone",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?.02:.3+Le(Math.floor((i+n%2*9)/18),n,4)*.4+Ie(i,t,e,9)*.3}},gold:{size:16,ramp:"gold",fn:(i,t)=>.5+Math.sin((i+t)/16*Math.PI*2)*.35+Le(i,t)*.15},carpet:{u:.55,size:32,ramp:"carpet",dither:.35,fn:(i,t)=>{const e=(i+t)%16,n=(i-t+64)%16;return(e===0||n===0)&&i%16<8==t%16<8?[.45,Xn.gold]:i%16===8&&t%16===0?[.8,Xn.gold]:.42+Le(i,t)*.32}},metal:{size:32,ramp:"metal",fn:(i,t,e)=>i%32===0||t%32===0?.05:(i%32===3||i%32===28)&&(t%32===3||t%32===28)?.95:.45+Ie(i*4,t,e,11)*.35},black:{size:16,ramp:"black",fn:(i,t)=>.3+Le(i,t)*.5},neon:{size:32,ramp:"neon",dither:.05,fn:(i,t)=>i%16===0||t%16===0?[.9,[[30,220,230]]]:.3+Le(i,t)*.2},asphalt:{size:64,ramp:"asphalt",fn:(i,t,e)=>{const n=Ie(i,t,e,13);return n>.62?.95:.2+n*.6}},cobble:{size:32,ramp:"asphalt",fn:(i,t)=>{const e=Math.floor(t/8),n=(i+e%2*5)%10;return t%8===0||n===0?.02:.35+Le(Math.floor((i+e%2*5)/10),e,6)*.6}},grass:{size:64,ramp:"grass",dither:.35,fn:(i,t,e)=>.2+Ie(i,t,e,17)*.6+(Le(i,t)>.9?.25:0)},dirt:{size:64,ramp:"dirt",dither:.3,fn:(i,t,e)=>.2+Ie(i,t,e,19)*.7},paper:{size:64,ramp:"paper",dither:.3,fn:(i,t,e)=>.35+Ie(i,t,e,23)*.5+(Le(i,t)>.97?-.3:0)},paperstone:{size:32,ramp:"paper",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?[.4,Xn.wood]:.3+Le(Math.floor((i+n%2*9)/18),n,4)*.5}},white:{size:32,ramp:"white",fn:(i,t,e)=>.5+Ie(i,t,e,29)*.4},gloss:{size:32,ramp:"white",dither:.1,fn:(i,t)=>i%32===0||t%32===0?.1:.75+((i+t)%32<4?.25:0)},checker:{u:.5,size:32,ramp:"tileb",dither:0,fn:(i,t)=>(Math.floor(i/16)+Math.floor(t/16))%2?[.5,Xn.white]:.5},concrete:{size:64,ramp:"concrete",fn:(i,t,e)=>.3+Ie(i,t,e,31)*.6},schoolfloor:{size:32,ramp:"schoolfloor",fn:(i,t,e)=>t%16===0||(i+Math.floor(t/16)*16)%32===0?.1:.45+Ie(i*3,t,e,37)*.45},schoolwall:{size:32,ramp:"white",dither:.15,fn:(i,t)=>.65+Le(i,t)*.2},led:{size:16,ramp:"pink",dither:0,fn:(i,t)=>i%4===0||t%4===0?[.2,Xn.black]:.3+Le(Math.floor(i/4),Math.floor(t/4),2)*.7},sky:{size:64,ramp:"sky",dither:.4,fn:(i,t,e)=>.2+(1-t/e)*.6+Ie(i,t,e,41)*.2},night:{size:64,ramp:"night",dither:.4,fn:(i,t,e)=>Le(i,t)>.992?[.9,Xn.white]:.2+t/e*.5+Ie(i,t,e,43)*.2},blue:{size:32,ramp:"blue",fn:(i,t,e)=>.3+Ie(i,t,e,47)*.6},mirror:{size:32,ramp:"white",dither:.2,fn:(i,t)=>{const e=(i+t*2)%32;return e<3?.95:e<14?.5:.3}}};function Ze(i,t){const e=i+(t||"");let n=Ws.get(e);if(n)return n;const s=mg[i];if(!s)return console.warn("[tex] нет текстуры",i),Ze("plaster");const r=s.size,a=document.createElement("canvas");a.width=a.height=r;const o=a.getContext("2d"),c=o.createImageData(r,r),h=t?Du(t.replace("#","")):null;for(let l=0;l<r;l++)for(let d=0;d<r;d++){let p=s.fn(d,l,r),m=Xn[s.ramp],g;Array.isArray(p)?(g=p[0],m=p[1]):g=p,g+=(pg[(l&3)*4+(d&3)]/16-.5)*(s.dither??.22);let v=m[Math.max(0,Math.min(m.length-1,Math.floor(g*m.length)))];if(h&&m===Xn[s.ramp]){const f=(v[0]*.3+v[1]*.6+v[2]*.1)/160;v=[Math.min(255,h[0]*f),Math.min(255,h[1]*f),Math.min(255,h[2]*f)]}const u=(l*r+d)*4;c.data[u]=v[0],c.data[u+1]=v[1],c.data[u+2]=v[2],c.data[u+3]=255}return o.putImageData(c,0,0),n=ma(a),n.unit=r/An*(s.u??1),Ws.set(e,n),n}function Je(i,t,e,n){if(n&&Ws.has(n))return Ws.get(n);let s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");r.imageSmoothingEnabled=!1;let a=!1,o=!1;const c=r.fillText.bind(r),h=r.strokeText.bind(r),l=r.getImageData.bind(r);if(r.fillText=(...p)=>(a=!0,c(...p)),r.strokeText=(...p)=>(a=!0,h(...p)),r.getImageData=(...p)=>(o=!0,l(...p)),e(r,i,t),a&&!o&&i*t<=512*512){const m=document.createElement("canvas");m.width=i*3,m.height=t*3;const g=m.getContext("2d");g.imageSmoothingEnabled=!1,g.scale(3,3),e(g,i,t),s=m}const d=ma(s,!1);return d.userData.lw=i,d.userData.lh=t,n&&Ws.set(n,d),d}const fh=new Map;function gg(i){let t=fh.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=16;const n=e.getContext("2d"),s=new zt(i),r=c=>{const h=s.clone();return c>0?h.lerp(new zt(1,1,1),c):h.multiplyScalar(1+c),"#"+h.getHexString()};let a=i%997+1;const o=()=>(a=a*16807%2147483647)/2147483647;n.fillStyle=r(0),n.fillRect(0,0,16,16);for(let c=0;c<16;c++)for(let h=0;h<16;h++){const l=o(),d=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]][c%4][h%4]/16;l<.1?(n.fillStyle=r(-.12),n.fillRect(h,c,1,1)):l>.93?(n.fillStyle=r(.08),n.fillRect(h,c,1,1)):c>11&&d<(c-11)/6&&(n.fillStyle=r(-.18),n.fillRect(h,c,1,1))}return n.fillStyle=r(.14),n.fillRect(0,0,16,1),n.fillStyle=r(-.28),n.fillRect(0,15,16,1),t=ma(e,!0),t.unit=1,fh.set(i,t),t}let Fr=null;function vg(){if(Fr)return Fr;const i=document.createElement("canvas");i.width=i.height=32;const t=i.getContext("2d");for(let e=0;e<32;e++)for(let n=0;n<32;n++){const s=Math.hypot(n-15.5,e-15.5)/16,r=Math.max(0,1-s),a=Math.round(r*r*6)/6;t.fillStyle=`rgba(255,255,255,${a*.9})`,t.fillRect(n,e,1,1)}return Fr=ma(i,!1),Fr}const _g='"Pixelify Sans", monospace';function _s(i,t,e,n,s={}){const r=s.size||8;i.font=`${r}px ${s.font||_g}`,i.fillStyle=s.col||"#111",i.textAlign=s.align||"left",i.textBaseline="top";const a=[];for(const o of t.split(`
`)){if(!s.w){a.push(o);continue}let c="";for(const h of o.split(" ")){const l=c?c+" "+h:h;i.measureText(l).width>s.w&&c?(a.push(c),c=h):c=l}a.push(c)}return a.forEach((o,c)=>i.fillText(o,e,n+c*(s.lh||r+2))),a.length*(s.lh||r+2)}const I=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)};function xg(i,t="",e={}){const n=e.w?Math.max(40,Math.round(e.w*22)):40,s=e.h?Math.max(56,Math.round(e.h*22)):56;let r=0;for(const o of i)r=r*31+o.charCodeAt(0)>>>0;const a=e.motif||["mask","crown","rose","dancer","moon","curtain"][r%6];return Je(n,s,o=>{I(o,0,0,n,s,e.frame||"#3a2a14");const c=o.createLinearGradient(0,0,0,s),h=e.bg||["#e2d5ac","#f0e0c0","#d8c8a0","#e8d0c0"][r%4];c.addColorStop(0,h),c.addColorStop(1,"#a8906a"),o.fillStyle=c,o.fillRect(1,1,n-2,s-2),o.strokeStyle="rgba(90,12,24,.6)",o.strokeRect(3.5,3.5,n-7,s-7);const l=n/2,d=s*.38,p=e.fg||"#5a0c18";if(o.fillStyle=p,e.face)I(o,l-7,d-10,14,16,e.face),I(o,l-9,d-12,18,6,"#2a1512"),I(o,l-10,d-8,3,18,"#2a1512"),I(o,l+7,d-8,3,18,"#2a1512"),I(o,l-8,d+6,16,9,"#a3122a"),I(o,l-4,d-4,2,2,"#2a1512"),I(o,l+2,d-4,2,2,"#2a1512"),I(o,l-2,d+1,4,1,"#b3122e");else if(a==="mask")o.beginPath(),o.ellipse(l-4,d,7,9,-.2,0,7),o.fill(),o.fillStyle=h,o.fillRect(l-8,d-3,3,2),o.fillRect(l-2,d-3,3,2),o.fillStyle="#b08a2c",o.beginPath(),o.ellipse(l+5,d+3,6,8,.3,0,7),o.fill();else if(a==="crown")o.beginPath(),o.moveTo(l-10,d+6),o.lineTo(l-10,d-6),o.lineTo(l-5,d),o.lineTo(l,d-9),o.lineTo(l+5,d),o.lineTo(l+10,d-6),o.lineTo(l+10,d+6),o.fill();else if(a==="rose"){for(let v=0;v<5;v++)o.beginPath(),o.arc(l+Math.cos(v*1.26)*4,d+Math.sin(v*1.26)*4,5,0,7),o.fill();I(o,l-1,d+6,2,12,"#2e5038")}else if(a==="dancer")I(o,l-1,d-10,3,3,p),I(o,l-1,d-7,3,9,p),I(o,l-7,d-9,6,1,p),I(o,l+2,d-12,1,6,p),o.beginPath(),o.ellipse(l,d+2,8,2,0,0,7),o.fill(),I(o,l-1,d+3,1,9,p),I(o,l+1,d+3,5,1,p);else if(a==="moon")o.beginPath(),o.arc(l,d,9,0,7),o.fill(),o.fillStyle=h,o.beginPath(),o.arc(l+4,d-2,8,0,7),o.fill();else for(let v=0;v<6;v++)I(o,5+v*((n-10)/6),5,(n-10)/12,s*.55,v%2?"#8e1830":"#5a0c18");const m=s*.6,g=_s(o,i,l,m,{size:e.size||8,col:p,w:n-6,align:"center"});t&&_s(o,t,l,m+g+1,{size:6,col:"#3a2a14",w:n-6,align:"center",lh:7}),I(o,6,s-7,n-12,1,"rgba(58,42,20,.5)"),I(o,9,s-5,n-18,1,"rgba(58,42,20,.35)")},"poster|"+i+t+JSON.stringify(e))}const rl={tree:{w:48,h:72,draw:i=>{I(i,21,40,6,32,"#2c2019"),I(i,23,40,2,32,"#3a2b21");for(const[t,e,n,s,r]of[[6,8,36,30,"#1c2a16"],[2,18,44,20,"#26381b"],[10,4,26,14,"#324820"],[8,14,18,12,"#405a27"],[26,22,14,10,"#324820"]])I(i,t,e,n,s,r)}},pine:{w:40,h:80,draw:i=>{I(i,18,60,4,20,"#1e1612");for(let t=0;t<6;t++)I(i,16-t*3,6+t*10,8+t*6,12,t%2?"#16241d":"#1d3024"),I(i,17-t*3,6+t*10,3,2,"#263c2c")}},bush:{w:24,h:16,draw:i=>{I(i,2,5,20,11,"#26381b"),I(i,5,2,14,6,"#324820"),I(i,6,3,4,2,"#405a27")}},sakura:{w:48,h:72,draw:i=>{I(i,21,40,6,32,"#4a382a");for(const[t,e,n,s,r]of[[6,8,36,28,"#e888b8"],[2,18,44,18,"#f4a4cc"],[10,4,26,14,"#f8c0dc"],[8,14,12,8,"#fde0ee"],[28,24,12,8,"#d870a4"]])I(i,t,e,n,s,r)}},lamp:{w:12,h:44,draw:i=>{I(i,5,10,2,32,"#2a2a2e"),I(i,2,42,8,2,"#2a2a2e"),I(i,1,2,10,9,"#f4d890"),I(i,2,1,8,1,"#c8a850"),I(i,3,4,6,5,"#fff4c8")}},streetlamp:{w:14,h:64,draw:i=>{I(i,6,10,2,54,"#1a1a1e"),I(i,3,62,8,2,"#1a1a1e"),I(i,2,2,10,9,"#f0f0d8"),I(i,1,0,12,2,"#1a1a1e")}},chair:{w:14,h:22,draw:i=>{I(i,2,0,10,12,"#721022"),I(i,1,0,1,22,"#86641c"),I(i,12,0,1,22,"#86641c"),I(i,1,12,12,3,"#8e1830"),I(i,3,2,8,8,"#8e1830")}},plant:{w:16,h:28,draw:i=>{I(i,4,20,8,8,"#7a4a2a"),I(i,7,8,2,12,"#2e5038"),I(i,2,4,5,10,"#3a6244"),I(i,9,2,5,12,"#48745a"),I(i,5,0,4,8,"#3a6244")}},bust:{w:16,h:30,draw:i=>{I(i,2,20,12,10,"#69655e"),I(i,1,19,14,2,"#807b72"),I(i,4,4,8,10,"#cabda8"),I(i,3,14,10,5,"#bcae98"),I(i,4,2,8,3,"#ad9d88"),I(i,6,8,1,1,"#555"),I(i,9,8,1,1,"#555"),I(i,6,11,4,1,"#8a7a68")}},bustfun:{w:16,h:30,draw:i=>{rl.bust.draw(i),I(i,5,7,3,3,"#fff"),I(i,9,7,3,3,"#fff"),I(i,6,8,1,1,"#000"),I(i,10,8,1,1,"#000"),I(i,5,11,6,1,"#a22"),I(i,6,12,4,1,"#a22"),I(i,3,0,10,3,"#e84a6f"),I(i,6,-1,4,2,"#f2c230")}},masks:{w:30,h:14,draw:i=>{for(const[t,e,n]of[[0,"#f2c230",0],[10,"#6a8ad0",1],[20,"#d86a8a",2]])I(i,t+1,1,8,11,e),I(i,t+2,0,6,1,e),I(i,t+2,12,6,1,e),I(i,t+2,4,2,2,"#111"),I(i,t+6,4,2,2,"#111"),n===0&&(I(i,t+2,8,6,1,"#111"),I(i,t+3,9,4,1,"#111")),n===1&&(I(i,t+3,8,4,1,"#111"),I(i,t+2,9,1,1,"#111"),I(i,t+7,9,1,1,"#111")),n===2&&I(i,t+3,9,4,1,"#111")}},ladder:{w:20,h:60,draw:i=>{I(i,2,0,2,60,"#5a4029"),I(i,16,0,2,60,"#5a4029");for(let t=0;t<9;t++)I(i,2,4+t*6,16,2,"#6e5133")}},bridgecut:{w:72,h:30,draw:i=>{I(i,0,8,72,5,"#5a4029");for(let t=0;t<9;t++)I(i,2+t*8,0,3,30,"#45301f");I(i,0,0,72,3,"#6e5133"),I(i,30,13,12,17,"#45301f")}},marionette:{w:16,h:30,draw:i=>{I(i,2,0,12,2,"#5a4029"),I(i,7,0,2,3,"#5a4029");for(const t of[3,8,12])I(i,t,2,1,8,"#ddd");I(i,5,8,6,6,"#e8d8c0"),I(i,5,8,3,6,"#f4ecd8"),I(i,6,10,1,1,"#111"),I(i,9,10,1,1,"#111"),I(i,5,14,6,8,"#a3122a"),I(i,5,14,3,8,"#2f7f82"),I(i,3,14,2,7,"#e8d8c0"),I(i,11,14,2,7,"#e8d8c0"),I(i,5,22,2,7,"#333"),I(i,9,22,2,7,"#333"),I(i,6,15,4,2,"#f4d060")}},bookstand:{w:16,h:28,draw:i=>{I(i,7,10,2,16,"#2a1c14"),I(i,3,26,10,2,"#2a1c14"),I(i,1,4,14,7,"#4a0c14"),I(i,2,5,5,5,"#e2d5ac"),I(i,9,5,5,5,"#e2d5ac"),I(i,7,4,2,7,"#86641c")}},candle:{w:6,h:16,draw:i=>{I(i,2,6,2,8,"#e8e0c8"),I(i,1,14,4,2,"#86641c"),I(i,2,2,2,4,"#ffd060"),I(i,2,1,1,2,"#fff4c8")}},flowerpot:{w:12,h:16,draw:i=>{I(i,2,9,8,7,"#8a4a2a"),I(i,1,8,10,2,"#9a5a3a"),I(i,5,3,2,6,"#2e5038"),I(i,3,0,6,4,"#d86a8a"),I(i,5,1,2,2,"#f2c230")}},umbrella:{w:22,h:26,draw:i=>{I(i,10,6,2,18,"#333"),I(i,8,24,3,2,"#333"),I(i,1,4,20,5,"#e84a6f"),I(i,4,1,14,3,"#f06a88"),I(i,9,0,4,1,"#f06a88");for(const t of[1,7,13,19])I(i,t,9,2,1,"#c03050")}},cake:{w:26,h:26,draw:i=>{I(i,2,14,22,10,"#f4e8d8"),I(i,2,18,22,2,"#e888b8"),I(i,4,10,18,5,"#fff8f0"),I(i,0,24,26,2,"#d4ae48");for(let t=0;t<9;t++)I(i,3+t*2+t%2,5+t%2*2,1,6,["#5fd0c8","#f2c230","#e84a6f"][t%3]),I(i,3+t*2+t%2,3+t%2*2,1,2,"#ffd060");for(let t=0;t<9;t++)I(i,4+t*2,11,1,3,["#f2c230","#e84a6f","#5fd0c8"][t%3]),I(i,4+t*2,9,1,2,"#ffd060")}},cakeout:{w:26,h:26,draw:i=>{rl.cake.draw(i);for(let t=0;t<9;t++)I(i,3+t*2+t%2,3+t%2*2,1,2,"#888"),I(i,4+t*2,9,1,2,"#888")}},bouquet:{w:24,h:30,draw:i=>{I(i,8,16,8,12,"#e2d5ac"),I(i,10,28,4,2,"#a3122a"),I(i,9,20,6,2,"#a3122a");const t=["#e84a6f","#f2c230","#f8c0dc","#fff","#c03050","#ff9a3c"];for(let e=0;e<14;e++){const n=2+e*7%18,s=1+e*5%13;I(i,n,s,5,5,t[e%6]),I(i,n+2,s+2,1,1,"#5a4010")}I(i,4,13,3,4,"#2e5038"),I(i,17,12,3,5,"#3a6244")}},mic:{w:8,h:34,draw:i=>{I(i,3,6,2,26,"#555"),I(i,1,32,6,2,"#333"),I(i,2,0,4,6,"#888"),I(i,2,1,4,1,"#bbb")}},speaker:{w:16,h:26,draw:i=>{I(i,0,0,16,26,"#18181c"),I(i,1,1,14,24,"#26262c"),I(i,4,3,8,8,"#111"),I(i,6,5,4,4,"#444"),I(i,3,13,10,10,"#111"),I(i,6,16,4,4,"#444")}},stagelight:{w:14,h:16,draw:i=>{I(i,2,2,10,9,"#222"),I(i,4,11,6,3,"#fff4c8"),I(i,6,0,2,2,"#444"),I(i,1,5,1,3,"#555"),I(i,12,5,1,3,"#555")}},stall:{w:56,h:52,draw:i=>{I(i,2,14,2,38,"#5a4029"),I(i,52,14,2,38,"#5a4029");for(let t=0;t<7;t++)I(i,t*8,2,8,12,t%2?"#e84a6f":"#fff8f0");for(let t=0;t<7;t++)I(i,t*8+1,14,6,2,t%2?"#c03050":"#ddd");I(i,2,34,52,18,"#6e5133"),I(i,2,32,52,3,"#98764d");for(let t=0;t<5;t++)I(i,8+t*9,26,5,6,["#f2c230","#e84a6f","#5fd0c8","#f8c0dc","#ff9a3c"][t]);for(let t=0;t<6;t++)I(i,5+t*9,17,3,4,["#f2c230","#e84a6f"][t%2])}},lantern:{w:10,h:14,draw:i=>{I(i,4,0,2,2,"#333"),I(i,1,2,8,10,"#e84a6f"),I(i,3,3,4,8,"#ffd060"),I(i,2,12,6,1,"#333")}},gear:{w:14,h:14,draw:i=>{I(i,3,3,8,8,"#b08a2c"),I(i,5,0,4,14,"#b08a2c"),I(i,0,5,14,4,"#b08a2c"),I(i,5,5,4,4,"#3a2a14"),I(i,1,1,3,3,"#86641c"),I(i,10,1,3,3,"#86641c"),I(i,1,10,3,3,"#86641c"),I(i,10,10,3,3,"#86641c")}},key:{w:12,h:8,draw:i=>{I(i,0,1,5,6,"#d4ae48"),I(i,1,3,2,2,"#000"),I(i,5,3,7,2,"#d4ae48"),I(i,9,5,1,2,"#d4ae48"),I(i,11,5,1,2,"#d4ae48"),i.clearRect(1,3,2,2)}},weight:{w:14,h:14,draw:i=>{I(i,1,4,12,10,"#484e59"),I(i,3,2,8,3,"#5e6673"),I(i,5,0,4,3,"#343841"),I(i,2,5,2,8,"#78818f")}},basket:{w:18,h:16,draw:i=>{I(i,1,6,16,10,"#8a6a3a");for(let t=0;t<4;t++)I(i,1,7+t*3,16,1,"#6a4a2a");I(i,0,5,18,2,"#a88a4a"),I(i,2,0,1,6,"#f0d98a"),I(i,15,0,1,6,"#f0d98a")}},hook:{w:10,h:12,draw:i=>{I(i,3,0,4,3,"#484e59"),I(i,4,3,2,5,"#78818f"),I(i,4,8,5,2,"#78818f"),I(i,8,6,1,2,"#78818f")}},slot:{w:16,h:30,draw:i=>{I(i,0,0,16,30,"#3a1a5a"),I(i,1,1,14,6,"#ff4fa0"),I(i,2,9,12,8,"#111");for(let t=0;t<3;t++)I(i,3+t*4,10,3,6,["#f2c230","#40e0d0","#f2c230"][t]);I(i,2,19,12,2,"#40e0d0"),I(i,4,23,8,5,"#222")}},holo:{w:24,h:30,draw:i=>{i.globalAlpha=.7,I(i,0,0,24,30,"#0a3a4a");for(let t=0;t<8;t++)I(i,2,2+t*3.5,4+t*7%16,1,"#40e0d0");I(i,14,16,8,10,"#40e0d0"),i.globalAlpha=1}},typewriter:{w:16,h:10,draw:i=>{I(i,1,4,14,6,"#2a2a2e"),I(i,3,0,10,4,"#e8e8e8");for(let t=0;t<5;t++)I(i,3+t*2,6,1,1,"#aaa");for(let t=0;t<5;t++)I(i,4+t*2,8,1,1,"#aaa")}},cam:{w:12,h:10,draw:i=>{I(i,0,2,12,8,"#222"),I(i,2,0,4,2,"#333"),I(i,4,3,5,5,"#557"),I(i,5,4,3,3,"#9bd"),I(i,10,3,1,1,"#f33")}},filmcam:{w:22,h:36,draw:i=>{I(i,4,6,14,10,"#2a2a2e"),I(i,0,8,4,6,"#444"),I(i,6,0,5,6,"#3a3a40"),I(i,12,1,5,5,"#3a3a40"),I(i,10,16,2,6,"#555"),I(i,10,22,1,14,"#555"),I(i,6,22,1,14,"#555"),I(i,15,22,1,14,"#555")}},suitcase:{w:16,h:12,draw:i=>{I(i,0,2,16,10,"#6a6a6a"),I(i,6,0,4,2,"#333"),I(i,0,6,16,1,"#333"),I(i,3,5,2,3,"#bbb"),I(i,11,5,2,3,"#bbb")}},book:{w:10,h:8,draw:i=>{I(i,0,1,10,7,"#4a0c14"),I(i,1,0,8,2,"#e2d5ac"),I(i,3,3,4,2,"#d4ae48")}},wheel:{w:20,h:20,draw:i=>{I(i,2,2,16,16,"#5a4029"),I(i,6,0,8,20,"#5a4029"),I(i,0,6,20,8,"#5a4029"),I(i,5,5,10,10,"#2a1c14"),I(i,9,2,2,16,"#98764d"),I(i,2,9,16,2,"#98764d")}},hoverbike:{w:36,h:18,draw:i=>{I(i,2,8,32,6,"#26262e"),I(i,6,4,14,5,"#ff9a3c"),I(i,20,2,6,6,"#343841"),I(i,0,10,4,3,"#40e0d0"),I(i,4,15,28,2,"#40e0d0"),I(i,28,6,6,3,"#78818f")}},horse:{w:36,h:30,draw:i=>{I(i,6,10,22,10,"#f0f0f0"),I(i,24,2,8,12,"#f0f0f0"),I(i,30,4,5,5,"#e0e0e0"),I(i,8,20,3,10,"#ddd"),I(i,22,20,3,10,"#ddd"),I(i,2,10,4,10,"#e8c36a"),I(i,23,0,3,10,"#e8c36a"),I(i,31,5,1,1,"#111"),I(i,10,9,12,3,"#3a6ab0")}},spotcone:{w:4,h:4,draw:i=>I(i,0,0,4,4,"#fff")}};function yg(i){const t=rl[i];if(!t)throw new Error("Нет реквизита: "+i);const e=Je(t.w,t.h,n=>t.draw(n),"prop|"+i);return e.pw=t.w,e.ph=t.h,e}const Yt=i=>new qn(i),Ee={gold:()=>Yt({map:Ze("gold")}),wood:i=>Yt({map:Ze("darkwood"),color:i||16777215}),velvet:(i=16777215)=>Yt({map:Ze("velvet"),color:i})};function Dt(i,t,e,n,s,r,a,o,c=!0){const h=new ht(new Ke(t,e,n),o);return h.position.set(s,r,a),h.castShadow=c,h.receiveShadow=!0,i.add(h),h}const dh=i=>parseInt(i.replace("#",""),16);function bg(i,t){return Je(16,32,e=>{const n=new zt(i),s=a=>{const o=n.clone();return o.lerp(new zt(1,.85,.65),a),"#"+o.getHexString()},r=a=>"#"+n.clone().multiplyScalar(a).getHexString();e.fillStyle=s(.36),e.fillRect(0,0,16,32);for(let a=0;a<32;a+=2)e.fillStyle=r(.92),e.fillRect(a*7%13,a,3,1);for(const[a,o,c,h]of[[2,2,12,12],[2,17,12,13]])e.fillStyle=r(.7),e.fillRect(a,o,c,h),e.fillStyle=s(.46),e.fillRect(a+1,o+1,c-2,h-2),e.fillStyle=s(.6),e.fillRect(a+1,o+1,c-2,1),e.fillRect(a+1,o+1,1,h-2),e.fillStyle=r(.8),e.fillRect(a+1,o+h-2,c-2,1);e.fillStyle="#e8c860",e.fillRect(t?1:13,15,2,2),e.fillStyle="#fff4b0",e.fillRect(t?1:13,15,1,1),e.fillStyle=r(.5),e.fillRect(0,31,16,1)},"leaf"+i+(t?"d":""))}function Sg(i,t,e,n,s=!1,r){const a=new ce,o=Ee.wood(),c=Yt({map:bg(e,s)}),h=Ee.gold();Dt(a,i+.5,.3,.3,0,t+.15,.12,o),Dt(a,i+.8,.12,.38,0,t+.36,.14,h),Dt(a,i*.5,.35,.2,0,t+.55,.1,o);for(const p of[-1,1])Dt(a,.25,t,.3,p*(i/2+.12),t/2,.12,o),Dt(a,.32,.3,.36,p*(i/2+.12),.15,.14,o);const l=s?[-1,1]:[0],d=s?i/2-.02:i-.04;for(const p of l){const m=new ce;m.name="leaf",m.position.set(s?p*(i/2-.01):-i/2+.02,0,.04),a.add(m);const g=s?-p*d/2:d/2;Dt(m,d,t-.04,.1,g,t/2,0,c);for(const[u,f]of[[t*.72,t*.36],[t*.27,t*.38]])Dt(m,d-.3,f,.05,g,u,.07,c),Dt(m,d-.46,f-.16,.05,g,u,.1,Yt({map:Ze("wood"),color:dh(e)|2105376}));const v=new ht(new vn(.07,8,6),h);v.position.set(s?g-p*(d/2-.15):g+d/2-.18,t*.48,.14),m.add(v)}if(n){const p=Math.max(48,Math.ceil(n.length*5.4+12)),m=Je(p,14,u=>{u.fillStyle="#e8d8b0",u.fillRect(0,0,p,14),u.strokeStyle="#86641c",u.strokeRect(.5,.5,p-1,13),_s(u,n,p/2,3,{size:8,col:"#3a1a14",align:"center"})},"dsign"+n),g=Math.min(p*.03,i+1.4),v=new ht(new ye(g,.42),Yt({map:m,emissive:2760720}));v.position.set(0,t+.15,.3),a.add(v)}{const p=new ht(new Ke(i-.2,.04,.04),new Re({color:16762992}));p.position.set(0,.03,.16),a.add(p)}if(r){const p=new Gs(dh(r),3,4,1.6);p.position.set(0,t*.7,.8),a.add(p)}return a}function Mg(i){const t=i.children.filter(s=>s.name==="leaf");if(!t.length)return;let e=0;const n=()=>{e+=1/60;const s=Math.min(1,e/.4);t.forEach((r,a)=>{r.rotation.y=(t.length>1?a?-1:1:-1)*s*1.2}),s<1&&requestAnimationFrame(n)};n()}function Lv(i,t,e={}){const n=e.w||2,s=e.h||2.8,r=e.y??3,a=new ce,o=Ee.wood(),c=Ee.gold(),h=Je(32,44,u=>{const f=u.createLinearGradient(0,0,0,44);if(e.night!==!1?(f.addColorStop(0,"#0c1430"),f.addColorStop(1,"#2a3a6a")):(f.addColorStop(0,"#6a9ad8"),f.addColorStop(1,"#cfe0f0")),u.fillStyle=f,u.fillRect(0,0,32,44),e.night!==!1){u.fillStyle="#fff";for(let _=0;_<14;_++)u.fillRect(_*37%32,_*17%26,1,1);u.fillStyle="#f0e8c8",u.beginPath(),u.arc(24,8,3,0,7),u.fill()}u.fillStyle="#1a1830";for(let _=0;_<8;_++){const x=6+_*7%12;u.fillRect(_*4,44-x,4,x),u.fillStyle=_%3?"#e8c060":"#1a1830",u.fillRect(_*4+1,44-x+2,1,1),u.fillStyle="#1a1830"}},"winview"+(e.night!==!1)),l=new ht(new ye(n,s),new Re({map:h}));l.position.set(0,0,-.18),a.add(l),Dt(a,n+.3,.18,.4,0,s/2+.05,0,o),Dt(a,n+.5,.12,.55,0,-s/2-.06,.08,o),Dt(a,n+.6,.06,.6,0,-s/2-.14,.1,c);for(const u of[-1,1])Dt(a,.16,s+.2,.4,u*(n/2+.06),0,0,o);Dt(a,.08,s,.08,0,0,-.12,o);for(const u of[-s/6,s/6+.2])Dt(a,n,.07,.08,0,u,-.12,o);if(e.arch!==!1){const u=new ht(new Qs(n/2+.06,.1,6,16,Math.PI),o);u.position.set(0,s/2+.05,0),a.add(u);const f=new ht(new er(n/2,16,0,Math.PI),new Re({map:h}));f.position.set(0,s/2+.05,-.18),a.add(f)}if(e.curtains!==!1){const u=s/2+(e.arch!==!1?n/2+.3:.45),f=-s/2-.55,_=u-f,x=.95,b=Yt({map:Ze("velvet"),side:Pe});for(const E of[-1,1]){const R=new ye(x,_,10,6),P=R.attributes.position;for(let w=0;w<P.count;w++){const X=P.getX(w),W=P.getY(w),Y=(W- -_/2)/_,it=1-.35*Math.exp(-((W+_/2-s*.45)**2)/.3);P.setX(w,X*(Y>.4?1:it)),P.setZ(w,Math.sin((X+.5)*13)*.07)}R.computeVertexNormals();const H=new ht(R,b);H.position.set(E*(n/2+.12),(u+f)/2,.36),a.add(H);const S=new ht(new Qs(.12,.035,4,10),c);S.scale.set(1.6,.6,1),S.position.set(E*(n/2+.12),f+s*.45,.44),a.add(S)}Dt(a,n+1.9,.08,.1,0,u+.06,.4,c);const U=new ht(new Ke(n+1.7,.42,.12),b);U.position.set(0,u-.14,.46),a.add(U),Dt(a,n+1.75,.06,.14,0,u-.36,.47,c)}else Dt(a,n+2.2,.1,.12,0,s/2+.6,.38,c);const d=e.wall||"n",p=d==="w"?-1:1;if(d==="n"){const u=i.wallSlot("n",t,n+2,r,s+1.4,{fixed:!0,obj:a});a.position.set(u,r,-i.d/2+.2)}else{const u=i.wallSlot(d,t,n+2,r,s+1.4,{fixed:!0,obj:a});a.position.set(p*(i.w/2-.2),r,u),a.rotation.y=-p*Math.PI/2}i.room.group.add(a);const m=new Au(e.night!==!1?9087208:16773328,e.night!==!1?14:30,14,.5,.6,1.2),g=new k(0,.6,.5).applyEuler(a.rotation).add(a.position);m.position.copy(g);const v=new k(0,-r,3.2).applyEuler(a.rotation).add(a.position);return m.target.position.copy(v),i.room.group.add(m,m.target),a}function Rv(i,t,e,n,s,r,a={}){const o=new ce,c=Ee.gold(),h=new ht(new ye(s,r),new Tu({map:Je(24,32,d=>{const p=d.createLinearGradient(0,0,24,32);p.addColorStop(0,"#a89a90"),p.addColorStop(.5,"#5e524c"),p.addColorStop(1,"#847468"),d.fillStyle=p,d.fillRect(0,0,24,32),d.fillStyle="rgba(255,240,220,.22)",d.fillRect(3,1,2,30),d.fillRect(7,1,1,30)},"mirglass2"),metalness:.3,roughness:.25,emissive:5787722,emissiveIntensity:.55}));h.material.emissiveMap=h.material.map,h.position.z=.03,o.add(h);for(const[d,p,m,g]of[[s+.3,.16,0,r/2+.08],[s+.3,.16,0,-r/2-.08],[.16,r,-s/2-.08,0],[.16,r,s/2+.08,0]])Dt(o,d,p,.14,m,g,.05,c);const l=new ht(new Qs(.25,.05,6,12,Math.PI),c);if(l.position.set(0,r/2+.16,.06),o.add(l),a.bulbs){const d=Yt({color:16774360,emissive:16760944}),p=Math.max(3,Math.round(r/.4));for(const m of[-1,1])for(let g=0;g<p;g++){const v=new ht(new vn(.08,8,6),d);v.position.set(m*(s/2+.08),-r/2+.2+g*(r-.4)/(p-1),.15),o.add(v)}i.light(t,e,n+.8,16767392,5,6,{flicker:.04})}return o.position.set(t,e,n),a.ry&&(o.rotation.y=a.ry),i.room.group.add(o),o}function Pv(i,t,e,n={}){const s=n.w||1.8,r=n.h||3.2,a=.9,o=new ce,c=Yt({map:Ze("darkwood"),color:n.col??13146736}),h=Ee.gold();Dt(o,s,r,a,0,r/2,0,c),Dt(o,s+.2,.18,a+.15,0,r+.09,0,c),Dt(o,s+.3,.06,a+.2,0,r+.2,0,Yt({color:11569724})),Dt(o,s+.1,.15,a+.05,0,.08,0,c);for(const p of[-1,1]){Dt(o,s/2-.15,r-.6,.04,p*s/4,r/2,a/2+.01,Yt({map:Ze("darkwood"),color:(n.col??13146736)-1052688}));const m=new ht(new vn(.05,6,6),h);m.position.set(p*.12,r/2,a/2+.06),o.add(m)}o.position.set(t,0,e),n.ry&&(o.rotation.y=n.ry),i.room.group.add(o);const l=n.ry?a/2:s/2,d=n.ry?s/2:a/2;return i.collider(t-l,e-d,t+l,e+d),o}function Vv(i,t,e,n={}){const s=n.w||2.4,r=n.h||3.6,a=.6,o=n.shelves||5,c=new ce,h=Ee.wood();Dt(c,s,r,.06,0,r/2,-a/2,h);for(const x of[-1,1])Dt(c,.08,r,a,x*s/2,r/2,0,h);for(let x=0;x<=o;x++)Dt(c,s,.07,a,0,.1+x*(r-.2)/o,0,h,!1);const l=[9312304,2771514,3816042,11569708,5913122,6957642,14207136],d=Yt({color:16777215}),p=o*Math.floor(s/.09),m=new El(new Ke(.08,1,a-.15),d,p),g=new ie,v=new zt;let u=0;for(let x=0;x<o;x++){let b=-s/2+.1;for(;b<s/2-.15&&u<p;){const U=.32+u*37%13/60,E=.06+u*7%4/100,R=u%11===0?.25:0;g.makeRotationZ(R),g.scale(new k(E/.08,U,1)),g.setPosition(b+E/2,.14+x*(r-.2)/o+U/2,.02),m.setMatrixAt(u,g),m.setColorAt(u,v.setHex(l[(u*3+x)%l.length])),b+=E+.005+(u%9===0?.12:0),u++}}m.count=u,c.add(m),c.position.set(t,0,e),n.ry&&(c.rotation.y=n.ry),i.room.group.add(c);const f=n.ry?a/2:s/2,_=n.ry?s/2:a/2;return i.collider(t-f,e-_,t+f,e+_),c}function Dv(i,t,e,n={}){const s=n.w||2.8,r=new ce,a=Ee.velvet(n.col??16777215);Ee.wood();const o=Ee.gold();Dt(r,s,.45,1,0,.45,0,a),Dt(r,s,1.1,.25,0,.95,-.4,a);for(const c of[-1,1]){Dt(r,.25,.75,1,c*(s/2-.12),.6,0,a);const h=new ht(new ne(.16,.16,1,10),a);h.rotation.x=Math.PI/2,h.position.set(c*(s/2-.12),1,0),r.add(h)}for(const c of[-1,1])for(const h of[-1,1]){const l=new ht(new ne(.05,.03,.25,6),o);l.position.set(c*(s/2-.15),.12,h*.38),r.add(l)}for(let c=0;c<Math.floor(s/.9);c++)Dt(r,.8,.12,.9,-s/2+.6+c*.85,.72,.03,a);if(Dt(r,s,.05,.05,0,1.5,-.4,o),r.position.set(t,0,e),n.ry&&(r.rotation.y=n.ry),i.room.group.add(r),n.solid!==!1){const c=n.ry?.5:s/2,h=n.ry?s/2:.5;i.collider(t-c,e-h,t+c,e+h)}return r}function Iv(i,t,e,n={}){const s=new ce,r=Ee.velvet(n.col??16777215),a=Ee.gold();Dt(s,1,.4,.9,0,.45,0,r),Dt(s,1,1,.2,0,.95,-.35,r);for(const o of[-1,1])Dt(s,.18,.55,.9,o*.48,.65,0,r);Dt(s,1.1,.06,.08,0,1.47,-.35,a);for(const o of[-1,1])for(const c of[-1,1]){const h=new ht(new ne(.04,.03,.26,6),a);h.position.set(o*.4,.13,c*.35),s.add(h)}return s.position.set(t,0,e),s.rotation.y=n.ry||0,i.room.group.add(s),i.collider(t-.5,e-.45,t+.5,e+.45),s}function Uv(i,t,e,n={}){const s=new ce,r=Ee.wood(),a=Je(16,32,o=>{o.fillStyle=n.col||"#c8a888",o.fillRect(0,0,16,32),o.fillStyle="rgba(120,40,40,.45)";for(let c=0;c<7;c++)o.fillRect(3+c*5%9,3+c*4,4,2),o.fillRect(5+c*3%7,4+c*4,1,4)},"scr"+(n.col||""));for(let o=0;o<3;o++){const c=new ce;c.position.set((o-1)*.72,0,o%2*.22),c.rotation.y=(o-1)*.35,Dt(c,.7,2.6,.05,0,1.4,0,Yt({map:a})),Dt(c,.76,.08,.08,0,2.72,0,r),Dt(c,.76,.08,.08,0,.08,0,r);for(const h of[-1,1])Dt(c,.06,2.72,.08,h*.36,1.36,0,r);s.add(c)}return s.position.set(t,0,e),s.rotation.y=n.ry||0,i.room.group.add(s),i.collider(t-1.1,e-.4,t+1.1,e+.4),s}function kv(i,t,e,n=[3091002,12852794]){const s=new ce,r=Yt({color:2759700}),a=new ht(new ne(.05,.06,3,8),r);a.position.y=1.5,s.add(a);const o=new ht(new ne(.4,.45,.08,12),r);o.position.y=.04,s.add(o),n.forEach((l,d)=>{const p=d*2.1,m=new ht(new ne(.18,.32,1.6,8,1,!0),Yt({color:l,side:Pe}));m.position.set(Math.cos(p)*.22,2.05,Math.sin(p)*.22),s.add(m)});const c=new ht(new ne(.22,.22,.25,12),Yt({color:1710622}));c.position.y=3.05,s.add(c);const h=new ht(new ne(.38,.38,.03,14),Yt({color:1710622}));return h.position.y=2.93,s.add(h),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-.35,e-.35,t+.35,e+.35),s}function Nv(i,t,e,n=0){const s=new ce,r=Ee.wood(),a=Ee.gold();Ee.velvet(),Dt(s,3,1.2,1.4,0,.6,0,r),Dt(s,3.2,.1,1.6,0,1.25,.05,a),Dt(s,3,1.8,.12,0,2.2,-.6,r);for(const l of[-1,1])Dt(s,.15,1.8,1.4,l*1.42,2.2,0,r);Dt(s,3.4,.3,1.7,0,3.25,0,r),Dt(s,3.5,.08,1.8,0,3.42,0,a);const o=new ce;for(let l=0;l<9;l++)Dt(o,.03,1.4,.03,-1.2+l*.3,2,.65,a,!1);s.add(o),Dt(s,.9,.5,.04,0,1.55,.67,Yt({color:1707530}));const c=new ht(new ye(2.6,.5),Yt({map:Je(64,12,l=>{l.fillStyle="#5a0c18",l.fillRect(0,0,64,12),_s(l,"К А С С А",32,2,{size:8,col:"#f0d478",align:"center"})},"kassa3d")}));c.position.set(0,3.25,.87),s.add(c);const h=new ht(new vn(.1,8,6,0,Math.PI*2,0,Math.PI/2),a);return h.position.set(.9,1.3,.4),s.add(h),s.position.set(t,0,e),s.rotation.y=n,i.room.group.add(s),i.collider(t-1.6,e-.8,t+1.6,e+.8),s}function Fv(i,t,e,n=6){const s=new ce,r=Ee.wood(),a=Ee.gold();Dt(s,n,1.15,.7,0,.58,.9,r),Dt(s,n+.2,.08,.9,0,1.2,.9,a);for(const h of[-.4,-1.3]){Dt(s,n-.4,.05,.05,0,2.6,h,a,!1);const l=Math.floor((n-.6)/.32),d=new El(new Ke(.22,1.5,.55),Yt({color:16777215}),l),p=new ie,m=new zt,g=[2763314,5913130,3820122,6957610,4868666,1976862,5921370,8018490];for(let v=0;v<l;v++)p.makeTranslation(-n/2+.45+v*.32,1.85-v%3*.08,h),d.setMatrixAt(v,p),d.setColorAt(v,m.setHex(g[(v*5+(h<-1?3:0))%g.length]));s.add(d)}const o=new ht(new ye(n-.6,.6),Yt({map:Je(64,8,h=>{h.fillStyle="#3a2414",h.fillRect(0,0,64,8);for(let l=0;l<16;l++)h.fillStyle="#d4ae48",h.fillRect(2+l*4,2,2,4)},"tags"),transparent:!0}));o.position.set(0,3.2,-1.6),s.add(o);const c=new ht(new ye(2.4,.45),Yt({map:Je(64,12,h=>{h.fillStyle="#2a1408",h.fillRect(0,0,64,12),_s(h,"ГАРДЕРОБ",32,2,{size:8,col:"#f0d478",align:"center"})},"gardsign")}));return c.position.set(0,1.62,1.27),c.rotation.x=-.2,s.add(c),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e-1.8,t+n/2,e+1.25),s}function Ov(i,t,e,n=7){const s=new ce,r=Ee.wood(),a=Ee.gold();Dt(s,n,1.2,.9,0,.6,1.1,r),Dt(s,n+.2,.1,1.1,0,1.25,1.1,Yt({map:Ze("stone"),color:14207160}));const o=new ht(new ne(.04,.04,n,6),a);o.rotation.z=Math.PI/2,o.position.set(0,.25,1.62),s.add(o);for(let E=0;E<3;E++)Dt(s,n-.6,.06,.4,0,1.6+E*.7,-.9,r);const c=Math.floor((n-.8)/.22)*3,h=new El(new ne(.06,.07,.42,6),Yt({color:16777215,transparent:!0,opacity:.9}),c),l=new ie,d=new zt,p=[2779706,9054762,14207120,3816042,11565610,15261904];for(let E=0;E<c;E++){const R=E%3,P=Math.floor(E/3);l.makeTranslation(-n/2+.5+P*.22,1.85+R*.7,-.9),h.setMatrixAt(E,l),h.setColorAt(E,d.setHex(p[E*7%p.length]))}s.add(h);const m=new ht(new ye(n-.8,2.2),new Tu({color:3811876,metalness:.8,roughness:.2}));m.position.set(0,2.5,-1.12),s.add(m);const g=Yt({color:15267071,transparent:!0,opacity:.45}),v=1.3,u=1.15,f=new ce;f.position.set(-n/2+.8,v,u);const _=new ht(new ne(.22,.28,.55,12),a);_.position.y=.42,f.add(_);const x=new ht(new ne(.1,.18,.15,10),a);x.position.y=.08,f.add(x);const b=new ht(new vn(.12,8,6),a);b.position.y=.78,f.add(b),Dt(f,.18,.04,.04,.3,.3,0,a),s.add(f);const U=new ce;U.position.set(n/2-.9,v,u),Dt(U,.6,.3,.45,0,.15,0,Yt({color:5917242})),Dt(U,.5,.22,.06,0,.42,-.12,a),Dt(U,.4,.06,.3,0,.32,.05,Yt({color:14209216})),s.add(U);for(const E of[-n/4,n/4-.4]){const R=new ht(new ne(.32,.32,.04,14),Yt({color:16052456}));R.position.set(E,v+.02,u),s.add(R);for(let H=0;H<3;H++){const S=new ht(new ne(.08,.09,.12,8),Yt({color:[14183050,9067066,15786144][H]}));S.position.set(E-.14+H*.14,v+.1,u+H%2*.08),s.add(S)}const P=new ht(new vn(.34,12,8,0,Math.PI*2,0,Math.PI/2),g);P.position.set(E,v+.04,u),s.add(P)}for(let E=0;E<8;E++){const R=new ht(new ne(.05,.02,.22,8),g);R.position.set(-.9+E*.24,v+.11,u-.25),s.add(R)}return s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e+.6,t+n/2,e+1.6),i.collider(t-n/2,e-1.2,t+n/2,e-.6),s}function Bv(i,t,e){const n=new ce,s=Ee.gold(),r=new ht(new ne(.55,.55,.06,16),Yt({map:Ze("stone"),color:15260880}));r.position.y=1,n.add(r);const a=new ht(new ne(.05,.05,1,8),s);a.position.y=.5,n.add(a);const o=new ht(new ne(.3,.35,.05,12),s);o.position.y=.03,n.add(o);const c=new ht(new ne(.06,.05,.1,8),Yt({color:16052456}));c.position.set(.15,1.08,.1),n.add(c);const h=new ht(new ne(.05,.02,.2,8),Yt({color:15266040,transparent:!0,opacity:.6}));h.position.set(-.2,1.13,-.05),n.add(h);for(const d of[0,Math.PI]){const p=new ce;p.position.set(Math.cos(d)*.85,0,Math.sin(d)*.85),p.rotation.y=-d+Math.PI/2,Dt(p,.5,.06,.5,0,.6,0,Ee.velvet()),Dt(p,.5,.6,.05,0,.9,-.24,s);for(const m of[-1,1])for(const g of[-1,1])Dt(p,.04,.6,.04,m*.22,.3,g*.22,s);n.add(p)}const l=Math.abs(Math.round(t*3+e*7))%3;if(l===0){const d=new ht(new ne(.05,.07,.22,8),Yt({color:13164784,transparent:!0,opacity:.7}));d.position.set(0,1.14,-.1),n.add(d);for(let p=0;p<3;p++){const m=new ht(new vn(.06,6,5),Yt({color:[12852794,15786224,15245496][p]}));m.position.set(-.05+p*.05,1.3+p%2*.05,-.1),n.add(m)}}else if(l===1){const d=new ht(new Ke(.2,.28,.03),Yt({color:9312304}));d.position.set(0,1.17,-.15),d.rotation.x=-.25,n.add(d)}else{const d=new ht(new ne(.03,.03,.18,6),Yt({color:16051416,emissive:4206624}));d.position.set(0,1.12,-.1),n.add(d);const p=new ht(new vn(.035,6,4),new Re({color:16765056}));p.position.set(0,1.24,-.1),n.add(p)}return n.position.set(t,0,e),i.room.group.add(n),i.collider(t-1.1,e-.6,t+1.1,e+.6),n}function zv(i,t,e,n={}){const s=new ce,r=Yt({map:Ze("white"),color:15788256});Dt(s,1.1,1.2,1.1,0,.6,0,Yt({map:Ze("stone"),color:13156536})),Dt(s,1.3,.15,1.3,0,1.25,0,r);const a=new ht(new ne(.22,.42,1.8,10),r);a.position.y=2.2,s.add(a);const o=new ht(new vn(.2,10,8),r);o.position.y=3.3,s.add(o);const c=new ht(new ne(.06,.07,.9,6),r);if(c.position.set(.3,2.9,.1),c.rotation.z=-.9,s.add(c),n.pose==="mask"){const h=new ht(new er(.16,10),r);h.position.set(.65,3.25,.15),s.add(h)}return s.position.set(t,0,e),i.room.group.add(s),i.collider(t-.6,e-.6,t+.6,e+.6),s}function Hv(i,t,e){const n=new ce,s=new ht(new ne(.4,.3,.8,12),Yt({map:Ze("gold")}));s.position.y=.4,n.add(s);const r=new ht(new ne(.06,.09,1.6,6),Yt({color:6965802}));r.position.y=1.6,n.add(r);const a=Yt({color:3828282,side:Pe});for(let o=0;o<8;o++){const c=new ht(new ye(.35,1.4),a);c.position.set(0,2.4,0),c.rotation.set(.9,o*.8,0),c.translateY(.6),n.add(c)}return n.position.set(t,0,e),i.room.group.add(n),i.collider(t-.4,e-.4,t+.4,e+.4),n}function Gv(i,t,e,n=3.2){const s=new ce,r=Yt({map:Ze("darkwood"),color:13672560}),a=Ee.gold();Dt(s,n,.12,1.5,0,1.12,0,r),Dt(s,n-.6,.02,1.1,0,1.19,0,Yt({color:3035192}));for(const m of[-1,1]){Dt(s,.9,1.06,1.4,m*(n/2-.5),.53,0,r);for(let g=0;g<3;g++){Dt(s,.75,.28,.03,m*(n/2-.5),.2+g*.33,.71,r);const v=new ht(new vn(.035,6,4),a);v.position.set(m*(n/2-.5),.2+g*.33,.75),s.add(v)}}Dt(s,n-1.8,.5,.04,0,.8,-.65,r);const o=new ce;o.position.set(n/2-.4,1.18,-.35);const c=new ht(new ne(.03,.12,.5,8),a);c.position.y=.25,o.add(c);const h=new ht(new ne(.12,.28,.25,12,1,!0),Yt({color:3041864,emissive:666132,side:Pe}));h.position.y=.55,o.add(h),s.add(o);const l=Yt({color:15787728});for(let m=0;m<9;m++){const g=new ht(new Ke(.42,.012,.56),l);g.position.set(-n/2+.5+m%3*.55,1.2+Math.floor(m/3)*.02+m%4*.012,-.1+m*7%5*.06),g.rotation.y=(m*13%9-4)*.08,s.add(g)}const d=new ht(new ne(.06,.07,.1,8),Yt({color:1710634}));d.position.set(.2,1.24,-.35),s.add(d);const p=new ht(new ye(.06,.45),Yt({color:16052456,side:Pe}));return p.position.set(.25,1.45,-.35),p.rotation.z=-.4,s.add(p),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e-.75,t+n/2,e+.75),i.light(t+n/2-.4,1.6,e,16769184,5,5),s}function Wv(i,t,e,n,s,r=0,a={}){const o=Je(64,44,c=>{c.fillStyle="#5a4029",c.fillRect(0,0,64,44),c.fillStyle="#b08a5a",c.fillRect(2,2,60,40);for(let l=0;l<120;l++)c.fillStyle="rgba(90,60,30,.35)",c.fillRect((l*37+r)%60+2,l*23%40+2,1,1);[["#f4ecd4",0],["#fff8a0",1],["#f8d0d8",2],["#d8f0f8",3],["#ffffff",4],["#f4ecd4",5]].forEach(([l,d],p)=>{const m=4+p%3*20+(r+p)%3,g=4+Math.floor(p/3)*19+(r*3+p)%3;c.fillStyle=l,c.fillRect(m,g,16,15),c.fillStyle="#3a2a5a";for(let v=0;v<4;v++)c.fillRect(m+2,g+4+v*3,8+(p+v+r)%5,1);c.fillStyle=["#c41e3a","#2a6ad0","#2a8a3a"][p%3],c.fillRect(m+7,g+1,2,2),p===4&&(c.fillStyle="#6a5a4a",c.fillRect(m+2,g+3,12,9),c.fillStyle="#c8b8a0",c.fillRect(m+6,g+5,4,5))}),c.strokeStyle="#c41e3a",c.beginPath(),c.moveTo(12,6),c.lineTo(32,26),c.lineTo(52,8),c.stroke()},"cork"+r);return i.decal(o,{x:t,y:e,w:n,h:s,z:a.z,wall:a.wall,at:a.at})}const Is="#d9a878",ao="#c08458",ve="#f0cdb0",wg="#eac4a4",Or="#d9a77e",Cg=[{id:"varya",name:"Варя",color:"#5fd0c8",pitch:520,skin:Is,hair:"#7e3a20",style:"bob",eyes:"#5b3a1e",h:31,build:"thin",top:"#8a1830",bottom:"#1e1a22",shoes:"#1c1620",brows:"soft",acc:["offshoulder","buckle"],role:"Режиссёрка",bio:"Завтра ей восемнадцать. На ней красный лонгслив без плеч: Матвей подарил на прошлый день рождения. Умеет собрать людей вместе, и очень не любит, когда что-то идёт не по плану."},{id:"alla",sleeve:"none",name:"Алла Ева",color:"#ff5d6c",pitch:500,skin:Is,hair:"#7a2e16",style:"wavy",eyes:"#5b3a1e",h:31,build:"thin",top:"#a3122a",bottom:"#8a0f24",skirt:"long",trim:"#e8c36a",shoes:"#3a0a12",acc:["fur","gloves","necklace"],brows:"arch",lips:"#b3122e",shadow:"#6b2a55",role:"Прима",bio:"Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много."},{id:"kukolnik",male:!0,name:"Кукольник",color:"#d8b56a",pitch:180,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:38,build:"mid",top:"#111",bottom:"#111",role:"Художественный руководитель",bio:"Его никто не видел. Он оставляет письма, пометки на полях и распоряжения, всегда вовремя."},{id:"polina",acc:["hoodie","collar","tie"],name:"Полина",color:"#c9a7ff",pitch:610,skin:ve,hair:"#b8632c",style:"shag",eyes:"#5a7a6a",h:32,build:"thin",top:"#3a2620",bottom:"#2a2c3a",shoes:"#1a1416",brows:"soft",role:"Подруга",bio:"Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают."},{id:"ruben",sleeve:"short",male:!0,name:"Рубен",color:"#ffb057",pitch:240,skin:ao,hair:"#3a2418",style:"curlyBig",eyes:"#3b2416",h:40,build:"strong",top:"#d6c2a2",bottom:"#33333c",trim:"#ff9a3c",shoes:"#111",brows:"strict",acc:["glasses","necklace","pendant"],role:"Друг",bio:"Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать."},{inner:"#b8c8dc",id:"matvey",male:!0,name:"Матвей",color:"#ff8fd0",pitch:400,skin:wg,hair:"#64412a",style:"mop",eyes:"#5b3a1e",h:37,build:"thin",top:"#e6dcc6",bottom:"#2c2a30",trim:"#e6dcc6",shoes:"#1a1416",acc:["open","stripes","suspenders","necklace","bracelets"],brows:"soft",role:"Друг",bio:"Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет."},{acc:["offshoulder","earrings"],id:"erika",name:"Эрика",color:"#9fc3e8",pitch:430,skin:ve,hair:"#4a2a1a",style:"wavy",eyes:"#5b3a1e",h:34,build:"mid",top:"#e8dcc8",bottom:"#2b2f3a",shoes:"#22201f",brows:"soft",role:"Подруга",bio:"Спокойная. Сначала слушает, потом задаёт один вопрос, обычно самый неудобный."},{id:"liza",acc:["pearls"],name:"Лиза",color:"#ffe27a",pitch:640,skin:ve,hair:"#8e5c32",style:"halfup",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#1a1418",bottom:"#f3ead8",skirt:"short",shoes:"#8a5a3a",brows:"soft",role:"Подруга",bio:"Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит, кем."},{id:"liza_long",hairMask:"liza",name:"Лиза",color:"#ffe27a",pitch:640,skin:ve,hair:"#8e5c32",style:"halfup",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#c9a0dc",bottom:"#b58ad0",skirt:"long",shoes:"#8a5a3a",brows:"soft"},{id:"angelina",sleeve:"short",name:"Ангелина",color:"#ff7ab8",pitch:470,skin:Or,hair:"#2e1c16",style:"wavy",eyes:"#2a1a14",h:37,build:"thin",top:"#141216",bottom:"#5a1f3d",skirt:"short",trim:"#d9d9e8",shoes:"#111",acc:["cross","bracelets"],brows:"arch",lips:"#b0405a",role:"Подруга",bio:"Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным,, и это не обсуждается."},{id:"artemiy",male:!0,name:"Арутеми",color:"#ffb48a",pitch:270,skin:ve,hair:"#b0703c",style:"curlyMid",eyes:"#2a1a14",h:39,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",shoes:"#111",brows:"soft",acc:["freckles"],role:"Одноклассник Матвея",bio:"Чуть выше Матвея, светлые почти рыжие кудри. Шутит каждые полминуты и улыбается так, что школьный кот мурлычет."},{id:"vasilisa",sleeve:"none",name:"Василиса",color:"#ffb48a",pitch:480,skin:ve,hair:"#b4521e",style:"wavy",eyes:"#5b6b4a",h:37,build:"thin",top:"#141216",bottom:"#2c2c34",acc:["tank","cross","freckles","camera"],brows:"soft",role:"Актриса труппы"},{id:"dana",sleeve:"none",name:"Дана",color:"#e8a0ff",pitch:500,skin:Is,hair:"#5a2e1c",style:"wavy",eyes:"#5b3a1e",h:33,build:"thin",top:"#9a1a26",bottom:"#18161c",skirt:"short",trim:"#9a1a26",acc:["vneck","necklace","shadesup"],brows:"arch",lips:"#a8324a",role:"Актриса труппы"},{inner:"#ecebe6",id:"nina",acc:["open","stripes"],trim:"#4a2a1e",name:"Нина",color:"#b8c0ff",pitch:540,skin:ve,hair:"#3a2018",style:"long",bangs:"curtain",eyes:"#3b2a22",h:33,build:"thin",top:"#4a2a1e",bottom:"#23232c",brows:"soft",role:"Актриса труппы"},{acc:["necklace"],id:"anya",sleeve:"short",name:"Аня",color:"#ffd0a0",pitch:580,skin:ve,hair:"#6a3420",style:"longStraight",eyes:"#6a5238",h:33,build:"mid",top:"#18141a",bottom:"#2e3a52",skirt:"short",brows:"soft",role:"Актриса труппы"},{id:"olya",sleeve:"short",name:"Оля",color:"#a0e0d0",pitch:520,skin:ve,hair:"#4a2216",style:"shag",bangs:"curtain",eyes:"#3b2a22",h:31,build:"mid",top:"#5a1a20",bottom:"#2a2a33",brows:"strict",role:"Актриса труппы"},{id:"natasha",name:"Мама Наташа",color:"#ffd6c0",pitch:420,skin:ve,hair:"#9a7a58",style:"bob",eyes:"#2a1a14",h:37,build:"mid",top:"#7a9ab8",bottom:"#33384a",skirt:"long",brows:"soft"},{id:"sasha",male:!0,name:"Саша",color:"#c0d6e8",pitch:220,skin:ve,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:39,build:"mid",top:"#4a5a4a",bottom:"#2c2c34",brows:"soft"},{id:"maxim",male:!0,name:"Папа Максим",color:"#ffc070",pitch:250,skin:ao,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:33,build:"mid",top:"#c2452d",bottom:"#2d3440",brows:"arch"},{id:"nastya",name:"Настя",color:"#d8c8e8",pitch:440,skin:ve,hair:"#9a7a58",style:"long",eyes:"#5b3a1e",h:37,build:"thin",top:"#b8a8c8",bottom:"#4a4458",skirt:"long",brows:"soft"},{id:"matvey_bro",male:!0,name:"Матвейка",color:"#fff0b0",pitch:760,skin:ve,hair:"#f0dca0",style:"short",eyes:"#5b6b8a",h:21,build:"mid",top:"#a8d0f0",bottom:"#f0f0f0",brows:"soft"},{id:"vanya",male:!0,name:"Ваня",color:"#c8f0c0",pitch:740,skin:ve,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:21,build:"mid",top:"#4a7a4a",bottom:"#2c3a5a",brows:"soft"},{id:"vasya",name:"Вася",color:"#a8e0ff",pitch:620,skin:ve,hair:"#6a4630",style:"bob",eyes:"#5b3a1e",h:30,build:"thin",top:"#e8884a",bottom:"#3a4a6a",brows:"soft"},{id:"sofa",name:"Софа",color:"#ffc0e0",pitch:540,skin:ve,hair:"#a88a5a",style:"longStyled",eyes:"#5a6a7a",h:33,build:"thin",top:"#e8b0c8",bottom:"#f0e8e8",skirt:"short",acc:["earrings"],brows:"arch",lips:"#c84a6a",shadow:"#b86a9a"},{id:"katya",name:"Катя",color:"#ffb090",pitch:560,skin:ve,hair:"#c8602a",style:"bobLong",eyes:"#5a7a5a",h:37,build:"big",top:"#6a9a7a",bottom:"#4a4a5a",brows:"soft"},{id:"owner",male:!0,name:"Хозяин",color:"#b0b0b0",pitch:150,skin:"#e8e4d8",hair:"#111",style:"none",eyes:"#111",h:40,build:"strong",top:"#3a2a22",bottom:"#1c1614",acc:["maskface","hat","coat"],brows:"strict"},{id:"nol",male:!0,name:"Ноль",color:"#7af0ff",pitch:560,skin:ve,hair:"#40e0d0",style:"short",eyes:"#222",h:33,build:"thin",top:"#22303a",bottom:"#151a22",trim:"#40e0d0",acc:["visor"],brows:"soft"},{id:"kasseta",name:"Кассета",color:"#ff7ad0",pitch:330,skin:ao,hair:"#ff4fa0",style:"bob",eyes:"#222",h:36,build:"mid",top:"#5a2a6a",bottom:"#1a1a22",trim:"#ff4fa0",acc:["headphones"],brows:"arch"},{id:"guard",male:!0,name:"Охранник",color:"#ff5050",pitch:140,skin:"#8a94a0",hair:"#444",style:"none",eyes:"#f33",h:38,build:"strong",top:"#39424e",bottom:"#252a33",trim:"#ff3030",acc:["visor"],brows:"strict"},{id:"usher",name:"Зинаида Петровна",color:"#c8b0d0",pitch:430,skin:"#ead0b8",hair:"#c8c4c8",style:"bun",eyes:"#4a4a5a",h:30,build:"mid",top:"#5a2a3a",bottom:"#2a2228",skirt:"long",acc:["glasses","pearls"],brows:"soft",role:"Билетёрша"},{id:"stagehand",name:"Коля",color:"#a0c0a0",pitch:210,skin:"#d8a880",hair:"#3a2a1e",style:"short",eyes:"#3a2a1e",h:37,build:"strong",top:"#2a3a4a",bottom:"#1e2228",acc:["headphones"],brows:"strict",role:"Машинист сцены"},{id:"prompter",name:"Суфлёр",color:"#b0b0c8",pitch:300,skin:"#e0ccc0",hair:"#8a8a8a",style:"short",eyes:"#2a2a3a",h:32,build:"thin",top:"#1e1e2a",bottom:"#1a1a22",acc:["glasses","scarf"],trim:"#5a5a7a",brows:"soft",role:"Суфлёр"},{id:"teacher",name:"Алёна-сэнсэй",color:"#ff5d6c",pitch:500,skin:ve,hair:"#a8865e",style:"bobLong",eyes:"#5b3a1e",h:33,build:"thin",top:"#44375a",bottom:"#2a2238",skirt:"long",acc:[],brows:"arch",lips:"#c0405a",role:"Руководительница драмкружка"},{id:"barman",sleeve:"short",male:!0,name:"Сол, бармен",color:"#cccccc",pitch:200,skin:"#b8b8b8",hair:"#333",style:"short",eyes:"#222",h:38,build:"big",top:"#e8e8e8",bottom:"#222",trim:"#111",brows:"strict"},{id:"singer",name:"Мэй, певица",color:"#e8e8e8",pitch:460,skin:"#d8d8d8",hair:"#1a1a1a",style:"longStyled",eyes:"#222",h:36,build:"thin",top:"#bbbbbb",bottom:"#aaaaaa",skirt:"long",acc:["earrings"],brows:"arch",lips:"#555"},{id:"director",male:!0,name:"Грей, режиссёр",color:"#b0b0b0",pitch:230,skin:"#c8c8c8",hair:"#888",style:"short",eyes:"#222",h:37,build:"thin",top:"#555",bottom:"#333",acc:["glasses","scarf"],brows:"strict"},{id:"collector",male:!0,name:"Аркадий Вейс",color:"#d0d0d0",pitch:170,skin:"#cfcfcf",hair:"#ddd",style:"short",eyes:"#222",h:38,build:"big",top:"#2a2a2a",bottom:"#1c1c1c",trim:"#999",brows:"strict"},{id:"lydia",name:"Лидия Вронская",color:"#ffffff",pitch:480,skin:"#e0e0e0",hair:"#2a2a2a",style:"bob",eyes:"#222",h:34,build:"thin",top:"#777",bottom:"#444",acc:["hat"],brows:"soft",lips:"#555"},{id:"cashier",male:!0,name:"Кассир",color:"#bbbbbb",pitch:300,skin:"#c0c0c0",hair:"#555",style:"short",eyes:"#222",h:35,build:"mid",top:"#444",bottom:"#333",acc:["hat"],brows:"soft"},{id:"fairy",name:"Фея-крёстная",color:"#c8a0ff",pitch:600,skin:ve,hair:"#e8e0f0",style:"bun",eyes:"#6a5a9a",h:33,build:"big",top:"#b89ae0",bottom:"#9a7ac8",skirt:"long",acc:["wings","glasses"],brows:"arch"},{id:"prince",male:!0,name:"Принц Марк",color:"#8ab8ff",pitch:280,skin:ve,hair:"#6a4326",style:"bob",eyes:"#5b3a1e",h:39,build:"mid",top:"#3a6ab0",bottom:"#f0f0f0",trim:"#e8c36a",acc:["crown","cape"],brows:"soft"},{id:"narrator",male:!0,name:"Рассказчик",color:"#e8d8a8",pitch:190,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:30,build:"mid",top:"#000",bottom:"#000"},{id:"glyants",male:!0,name:"Директор Глянц",color:"#ff9ad8",pitch:210,skin:ve,hair:"#e8e8f0",style:"short",eyes:"#3a3a4a",h:38,build:"thin",top:"#f0f0f8",bottom:"#f0f0f8",trim:"#ff4fa0",acc:["glasses"],brows:"arch"},{id:"trainer",sleeve:"short",name:"Тренер Ми",color:"#a0f0c0",pitch:520,skin:Or,hair:"#222",style:"ponytail",eyes:"#222",h:34,build:"mid",top:"#30c090",bottom:"#222",brows:"strict"},{id:"stylist",name:"Ассистентка",color:"#ff5d6c",pitch:500,skin:Is,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#f0f0f8",bottom:"#ff4fa0",skirt:"short",acc:["pearls","visor"],brows:"arch",lips:"#b3122e"},{id:"zero",male:!0,name:"Мсье Зеро",color:"#e8e8f0",pitch:180,skin:"#e8d8c8",hair:"#d8d8d8",style:"short",eyes:"#6a7a8a",h:37,build:"mid",top:"#f0ece4",bottom:"#1a1a1e",shoes:"#111",acc:["bowtie","monocle"],brows:"strict"},{id:"croupier",male:!0,name:"Крупье",color:"#c8c0b0",pitch:300,skin:ve,hair:"#2a1a14",style:"short",eyes:"#3a2a1a",h:35,build:"mid",top:"#1a1a1e",bottom:"#1a1a1e",acc:["bowtie"],brows:"soft"},{id:"ang_mom",name:"Мама Ангелины",color:"#ffb8c8",pitch:430,skin:Or,hair:"#1a1214",style:"bun",eyes:"#2a1a14",h:35,build:"mid",top:"#3a2a3a",bottom:"#2a2a33",acc:["earrings"],brows:"arch",lips:"#b0405a",role:"Визажистка"},{id:"lusine",sleeve:"short",name:"Лусинэ",color:"#ffd0a0",pitch:620,skin:Or,hair:"#2a1a14",style:"ponytail",eyes:"#2a1a14",h:29,build:"mid",top:"#ff9ad8",bottom:"#3a4a6a",brows:"soft",role:"Соседка, фанатка Энджел"},{id:"hostess",name:"Леди Фортуна",color:"#ff5d6c",pitch:500,skin:Is,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#e8c36a",bottom:"#c9a040",skirt:"long",acc:["pearls","maskhalf"],brows:"arch",lips:"#b3122e"},{id:"student",male:!0,name:"Школьник",color:"#cccccc",pitch:400,skin:ve,hair:"#3a2a22",style:"short",eyes:"#333",h:34,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",brows:"soft"},{id:"student2",name:"Школьница",color:"#cccccc",pitch:560,skin:ve,hair:"#5a3a2a",style:"twin",eyes:"#333",h:32,build:"thin",top:"#2c3550",bottom:"#8a2a3a",skirt:"short",trim:"#f0f0f0",brows:"soft"},{id:"dancer",sleeve:"short",name:"Трейни",color:"#cccccc",pitch:500,skin:ve,hair:"#ffb0d8",style:"bob",eyes:"#333",h:33,build:"thin",top:"#f0f0f8",bottom:"#ff9ad8",skirt:"short",brows:"soft"},{id:"courtier",male:!0,name:"Придворный",color:"#cccccc",pitch:300,skin:ve,hair:"#e8e8e8",style:"bun",eyes:"#333",h:35,build:"mid",top:"#6a2a3a",bottom:"#3a1a22",trim:"#e8c36a",brows:"soft"}],He={};for(const i of Cg)He[i.id]=i;function nn(i,t,e){return He[t]||(He[t]={...He[i],...e,id:t}),He[t]}nn("varya","varya_noir",{top:"#6a6a6a",bottom:"#2a2a2a",acc:["hat"]});nn("varya","varya_pjm",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});nn("erika","erika_noir",{top:"#9a9a8a",bottom:"#2a2a2a",acc:["hat","coat"]});nn("ruben","ruben_tux",{top:"#141418",bottom:"#141418",trim:"#f4f0e8",acc:["glasses","bowtie","jacket"]});nn("varya","varya_gown",{top:"#5a0c1c",bottom:"#4a0a18",skirt:"long",acc:["offshoulder","necklace"]});nn("ruben","ruben_heist",{top:"#16161c",bottom:"#1c2028",trim:"#40e0d0",acc:["glasses"]});nn("matvey","matvey_school",{top:"#2c3550",bottom:"#2a2a33",trim:"#f2c230",acc:["freckles","scarf","bracelets","pins"]});nn("angelina","angelina_idol",{top:"#f0f0f8",bottom:"#ff9ad8",trim:"#ff4fa0"});nn("angelina","angelina_own",{top:"#1a1420",bottom:"#7a1f3d",trim:"#e8c36a"});nn("alla","queen",{name:"Королева",top:"#8a0f24",bottom:"#6a0a1a",trim:"#e8c36a",acc:["pearls","crown","cape"]});nn("varya","girl",{name:"Молодая Девушка",top:"#f3ead8",bottom:"#e8dcc0",skirt:"long",trim:"#5fd0c8",acc:[]});nn("varya","varya_queen",{name:"Варя",top:"#8a0f24",bottom:"#6a0a1a",skirt:"long",trim:"#e8c36a",acc:[]});nn("liza","liza_short",{style:"bob",hairMask:"bobLong"});nn("polina","polina_coat",{top:"#e8c230",bottom:"#3b4a6b"});nn("varya","varya_pj",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});function en(i){const t=[];for(let e of i.split(`
`)){if(e=e.trim(),!e)continue;let n=1;const s=e.match(/^(\S+)\s+\*(\d+)$/);s&&(e=s[1],n=+s[2]);for(let r=0;r<n;r++)t.push(e.padEnd(20,"."))}return t}const ke=(i,t,e)=>({f:en(i),b:en(t),s:en(e)}),Eg=en(`
....LLLSSS....
..LLLSSSSSSD..
..LLSSSSSSSD..
.LLSSSSSSSSDD.
.LSSSSSSSSSSD.
.LSSSSSSSSSSD.
ELSSSSSSSSSSDE
ELSSSSSSSSSSDE
.LSSSSSSSSSSD.
..SSSSSSSSSD..
..SSSSSSSSDD..
...DSSSSSSD...
....DSSSSD....
`).map(i=>i.slice(0,14)),Tg=en(`
....LLSSSS....
..LLLSSSSSSS..
.LLSSSSSSSSSS.
.LSSSSSSSSSSS.
LSSSSSSSSSSSS.
LSSSSSSSSSSSS.
LSSSSDDSSSSSS.
SSSSSDDSSSSSSS
SSSSSSSSSSSSD.
.SSSSSSSSSSSS.
..DSSSSSSSSSS.
...DSSSSSSSS..
.....DDSSSD...
`).map(i=>i.slice(0,14)),Ag=en(`
....SSSSSS....
..SSSSSSSSSS..
..SSSSSSSSSS..
.SSSSSSSSSSSS.
.SSSSSSSSSSSS.
.SSSSSSSSSSSS.
DSSSSSSSSSSSSD
DSSSSSSSSSSSSD
.SSSSSSSSSSSS.
..SSSSSSSSSS..
..SSSSSSSSSS..
...SSSSSSSS...
....DDDDDD....
`).map(i=>i.slice(0,14)),Lg=[en(`
......12222223
.....1222222223
.....1222222223
.....bbbbbbbbbc
..1122222222222233
...33333333333333
`),en(`
......12222223
.....1222222223
.....1222222223
.....bbbbbbbbbc
..1122222222222233
...33333333333333
`),en(`
.....1222223
....122222223
....122222223
....bbbbbbbbc
.112222222222222233
..333333333333333
`)],Rg=[en(`
.
.....1222222223
....122222222223
....bbbbbbbbbbbc
....333333333333
`),en(`
.
.....1222222223
....122222222223
....bbbbbbbbbbbc
`),en(`
.
....12222223
...1222222222
...bbbbbbbbb22222
............3333
`)],Pg=[en(`
......1..2..2..3
......1r22w22r23
......1222222223
`),en(`
......1..2..2..3
......1222222223
......3333333333
`),en(`
.....1..2..3
.....12r2w23
.....12222223
`)],oo={varya:ke(`
....................
......22222222......
.....2211112222.....
...22111122222233...
..2211122222222233..
..2112222222222333..
..21222223..222333..
..2122223....22333..
..21223.......2333..
..2123........2333.. *5
..2223cccccccc2334..
..3233dccccccd3344..
...334dddddddd433...
`,`
....................
......22222222......
....221111122222....
...22111112222233...
..2211112222222233..
..2111222222222333..
..2112222222222333..
..2122222222222333..
..2122223222223333.. *2
..2122232222232333..
..2222232222232333..
..2222322222322333..
..2223322223322334..
..3223322233223334..
..3333433333433344..
...43344334433443...
`,`
....................
......2222222.......
....22211112222.....
...2221111122222....
..22211122222223....
..221122222222223...
..2212222222223.....
..21222222223.......
..2212222223........
..221222223......... *2
..22122223.......... *2
..2212223...........
..2222233...........
..3333344...........
...4334.............
`),ruben:ke(`
.....CC..CCC..CC....
...CCCCCCCCCCCCCC...
..CCCCCCCCCCCCCCCC..
.CCCCCCCCCCCCCCCCCC. *2
CCCCCCCCCCCCCCCCCCCC
CCCCC3CCC4CC3CCCCCC.
.CCCC4.3..4...4CCCC.
.CCCC..........CCCC. *4
.CCC4..........4CCC.
..CC4cccccccccc4CC..
...4cccccccccccc4...
`,`
.....CC..CCC..CC....
...CCCCCCCCCCCCCC...
..CCCCCCCCCCCCCCCC..
.CCCCCCCCCCCCCCCCCC. *2
CCCCCCCCCCCCCCCCCCCC *3
.CCCCCCCCCCCCCCCCCC. *5
..CCCCCCCCCCCCCCCC..
...CCCCCCCCCCCCCC...
.....CC4CCC4CC4.....
`,`
.....CCCCCC.........
...CCCCCCCCCC.......
..CCCCCCCCCCCCC.....
.CCCCCCCCCCCCCCC....
CCCCCCCCCCCCCCCCC...
CCCCCCCCCCCCCCCCC...
CCCCCCCCCCCCCCCC....
CCCCCCCCCCCC3.4.....
CCCCCCCCCCC.........
CCCCCCCCCC.......... *3
.CCCCCCCCC..........
.CCCCCCCC...........
..CCCCCC............
...CC4C.............
`),matvey:ke(`
.....2..22..2.......
...2.21221121222....
..2VVVVVVVVVVVVVV2..
.VVVVVVVVVVVVVVVVVV.
VVVVVVVVVVVVVVVVVVV.
VV1VVVVVVVVVVVVVVVVV
VV1VVVVVVVVVVVVVVVV.
V11VVV3VV4VVV3VV4VV.
.V1VV4.34..43.4VVVV.
VVVV4..........4VVV.
.VVV............VVVV
VVV3............3VV.
.VV3............3VVV
..3v............v3V.
...vvvvvvvvvvvvvv4..
...4vvvvvvvvvvvv....
`,`
.....2..22..2.......
...2.21221121222....
..2VVVVVVVVVVVVVV2..
.VVVVVVVVVVVVVVVVVV.
VVVVVVVVVVVVVVVVVVV. *9
.VVVVVVVVVVVVVVVVVVV
.VVVVVVVVVVVVVVVVVV.
..VVV3VVVV3VVVV3VV..
..3.4V3.4V3.4VV.4...
`,`
.....2..22..........
...2.2122112........
..2VVVVVVVVVV2......
.VVVVVVVVVVVVVV.....
VVVVVVVVVVVVVVV.....
VVVVVVVVVVVVVVVV....
VVVVVVVVVVVVVVVV3...
VVVVVVVVVVVVV3V4....
.VVVVVVVVVV..34.....
VVVVVVVVVV..........
.VVVVVVVVVV.........
VVVVVVVVVV..........
.VVVVVVVVV..........
..VVVVVVV3..........
..3V3VV4............
...4..4.............
`),alla:ke(`
....................
......2222222.......
....22112222222.....
...221112222222223..
..2211222222222233..
..2122222222222333..
..213..22222222333..
..213...22222223333.
..213........VVVVV..
..VV.........VVVVVV. *4
..vv.........VVVVVV.
..vvvvvvvvvvvVVVVVV. *3
..vv........VVVVVVV.
..vv.......VVVVVVV.. *3
...v.......VVVVVV... *4
...........VVVVVV... *3
............VVVV....
............3V3.....
.............4......
`,`
....................
......2222222.......
....221112222222....
...22111122222223...
..2211112222222233..
..VVVVVVVVVVVVVVVV.. *13
....VVVVVVVVVVVV.... *7
.....VVVVVVVVVV..... *3
.....3VV3VV3VV3.....
......4..4..4.......
`,`
....................
......222222........
....2211112222......
...2211112222222....
..22111222222223....
..221222222222223...
..22122222222223....
..21222222223.......
..VVVVVVVVV.........
..VVVVVVVV.......... *6
.VVVVVVVV...........
.VVVVVVV............
.VVVVVV............. *6
..VVVVV............. *4
..3V3V..............
...4................
`),polina:ke(`
....................
......222112222.....
....2221121122222...
...221112111222223..
..22111222222222233.
..21122222222222333.
.221222223222223333.
.21222232..32222333.
.2123.4......42333..
.2123..........3233. *2
.223............323.
.323............323.
.33cccccccccccccc33.
..4.cccccccccccc.4..
....dccccccccccd....
`,`
....................
......222112222.....
....2221121122222...
...221112111222223..
..22111222222222233.
.VVVVVVVVVVVVVVVVVV. *8
..VVVVVVVVVVVVVVVV..
..3VV3VVVV3VVV3VV3..
..4.3.4V3.4.V3.4.4..
`,`
....................
.....222122.........
...22211122222......
..2211112222223.....
.2211122222222223...
.21122222222223223..
.2122222222223.4....
.VVVVVVVVVVV3.......
.VVVVVVVVVV.........
.VVVVVVVVV.......... *3
.VVVVVVVV...........
.3VVVVV3............
..4V3.4.............
`),erika:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111241122223...
..2211222412222333..
..2112223..1222333..
..211223....222333..
..2V123......32VV3..
..VVVV........VVVV.. *6
..VVVVvvvvvvvvVVVV..
.vVVVVVvvvvvvVVVVVv.
.vv.VVVV....VVVV.vv.
.vv..VVV....VVV..vv. *6
..v..VVV....VVV..v.. *2
.....VVV....VVV.....
.....3V3....3V3.....
......4......4......
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
..VVVVVVVVVVVVVVVV.. *10
...VVVVVVVVVVVVVV...
....VVVVVVVVVVVV....
.....VVVVVVVVVV..... *9
.....3VV3VVV3V3.....
.......4....4.......
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
..2122222222223.....
..21222222223.......
..VVVVVVVVV.........
..VVVVVVVV.......... *6
..VVVVVVV...........
..VVVVVV............
..VVVVV............. *12
..3VV3V.............
...4..4.............
`),liza:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111141122223...
..2211122412222333..
..21123....1222333..
..2123......32233...
..213........3233...
...L3..........3L...
.llL3..........3Lll. *6
.llLLllllllllllLLll. *2
.ll.LLL......LLL.ll.
.ll..LLL....LLL..ll. *4
.ll..VVV....VVV..ll. *2
..v..VVV....VVV..v.. *2
.....VVV....VVV.....
.....3V3....3V3.....
......4......4......
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111112222223...
..2211122222222233..
..2112222222222233..
..2122223kk3222233..
..222223kkk3222333..
..LLLLLLL4LLLLLLLL..
..LLLLLLLLLLLLLLLL.. *7
...LLLLLLLLLLLLLL...
....LLLLLLLLLLLL....
.....LLLLLLLLLL..... *4
.....VVVVVVVVVV..... *4
.....3VV3VVV3V3.....
.......4....4.......
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
..2122222222223.....
..2k22222223........
..kLLLLLLL..........
..LLLLLLLL.......... *6
..LLLLLLL...........
..LLLLLL............
..LLLLL............. *10
..3LL3L.............
...4..4.............
`),angelina:ke(`
....................
.......2222222......
.....22112222222....
...22111222222222...
..2211222222222223..
..2122222222222233..
..21223.22222222333.
..2123...2222222333.
..VVV........VVVVVV.
..VVV.........VVVVVV *4
.vVVVvvvvvvvvvVVVVVV *2
.vVVVVvvvvvvvVVVVVV.
.vv.VVVV...VVVVVVV..
.vv..VVV...VVVVVV... *5
..v..VVV....VVVVV... *3
.....VVV....VVVV....
.....3V3....3VV3....
......4......4......
`,`
....................
.......2222222......
.....2211122222.....
...221111222222223..
..2211122222222233..
..VVVVVVVVVVVVVVVVVV *11
.VVVVVVVVVVVVVVVVVV.
..VVVVVVVVVVVVVVVVV.
....VVVVVVVVVVVVV... *9
.....VVVVVVVVVVV.... *2
.....3VV3VVV3V3.....
.......4...4........
`,`
....................
......2222222.......
....221111222222....
...22111122222222...
..221111222222222...
..2211222222222223..
..22122222222223....
..2122222222223.....
.VVVVVVVVVV.........
.VVVVVVVVV.......... *6
VVVVVVVVV...........
VVVVVVVV............
VVVVVVV............. *8
.VVVVVV............. *3
..3VV3..............
...4................
`),dana:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111241122223...
..2211222412222333..
..2112223..1222333..
..211223....222333..
..21123......32233..
..LLLL........LLLL.. *6
..LLLLllllllllLLLL..
.lLLLLLllllllLLLLLl.
.ll.LLLL....LLLL.ll.
.ll..LLL....LLL..ll. *5
.....LLL....LLL..... *2
.....3L3....3L3.....
......4......4......
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
..LLLLLLLLLLLLLLLL.. *10
...LLLLLLLLLLLLLL...
....LLLLLLLLLLLL....
.....LLLLLLLLLL..... *6
.....3LL3LLL3L3.....
.......4....4.......
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
..2122222222223.....
..21222222223.......
..LLLLLLLLL.........
..LLLLLLLL.......... *6
..LLLLLLL...........
..LLLLLL............
..LLLLL............. *10
..3LL3L.............
...4..4.............
`),vasilisa:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111241122223...
..2211222412222333..
..2112223.31222333..
..21123.4..4.22333..
.VVVVV........VVVVV.
.VVVV..........VVVV. *5
.VVVVVvvvvvvvvVVVVV.
vVVVVVVvvvvvvVVVVVVv
vv.VVVVV....VVVVV.vv
vv..VVVV....VVVV..vv *5
.v..VVVV....VVVV..v. *4
....VVV......VVV....
....3V3......3V3....
.....4........4.....
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
.VVVVVVVVVVVVVVVVVV. *11
..VVVVVVVVVVVVVVVV..
....VVVVVVVVVVVV.... *9
....3VVV3VVVV3VV....
.....4...4...4......
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
..2122222222233.....
..2122222223.4......
.VVVVVVVVVV.........
.VVVVVVVVV.......... *6
VVVVVVVVV...........
VVVVVVVV............
VVVVVVV............. *8
.VVVVVV............. *3
..3VV3..............
...4................
`),nina:ke(`
....................
.......222222.......
.....2211122222.....
....2211122222222...
...22111222222223...
..2211222222222233..
..21122234322222333.
..2122234..43222333.
..21223......32233..
..L23..........3LL..
..LL3..........3LL.. *4
..LLLllllllllllLLL..
.lLLLLLllllllLLLLLl.
.ll.LLLL....LLLL.ll.
.ll..LLL....LLL..ll. *5
..l..LLL....LLL..l.. *2
.....LLL....LLL.....
.....3L3....3L3.....
......4......4......
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
..LLLLLLLLLLLLLLLL.. *10
...LLLLLLLLLLLLLL...
....LLLLLLLLLLLL....
.....LLLLLLLLLL..... *7
.....3LL3LLL3L3.....
.......4....4.......
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222222....
..2211222222222233..
..21222222222234....
..2122222222.3......
..LLLLLLLLL.........
..LLLLLLLL.......... *6
..LLLLLLL...........
..LLLLLL............
..LLLLL............. *8
..3LL3L.............
...4..4.............
`),olya:ke(`
....................
.......222222.......
.....2211122222.....
....221112222222....
...22111222222223...
..2211222222222233..
..2112222232222233..
..2122224..42222333.
..21223......32233..
.V2123........3VVV..
.VVV3..........3VVV. *4
.VVV3vvvvvvvvvv3VVV. *2
.VVVV..........VVVV.
VVVV............VVVV
3V3V............V3V3
.4.4............4.4.
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
.VVVVVVVVVVVVVVVVVV. *10
.VVVVVVVVVVVVVVVVVV.
VVVVVVVVVVVVVVVVVVVV
3V3VV3VVV3VVV3VV3V3V
.4..4...4...4...4.4.
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222222....
..2211222222222233..
..21222222222234....
..2122222222.3......
..VVVVVVVVV.........
..VVVVVVVV.......... *6
.VVVVVVVV...........
.VVVVVVV............
VVVVVVV.............
VV3VV3..............
.4..4...............
`),anya:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111241122223...
..2211222412222333..
..2112223..1222333..
..211223....222333..
..21123......32233..
..LLLL........LLLL.. *6
..LLLLllllllllLLLL..
.lLLLLLllllllLLLLLl.
.ll.LLLL....LLLL.ll.
.ll..LLL....LLL..ll. *6
..l..LLL....LLL..l.. *5
.....LLL....LLL.....
.....3L3....3L3.....
......4......4......
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
..LLLLLLLLLLLLLLLL.. *10
...LLLLLLLLLLLLLL...
....LLLLLLLLLLLL....
.....LLLLLLLLLL..... *11
.....3LL3LLL3L3.....
.......4....4.......
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
..2122222222223.....
..21222222223.......
..LLLLLLLLL.........
..LLLLLLLL.......... *6
..LLLLLLL...........
..LLLLLL............
..LLLLL............. *13
..3LL3L.............
...4..4.............
`),artemiy:ke(`
....................
.....CC.CCCC.CC.....
...CCCCCCCCCCCCCC...
..CCCCCCCCCCCCCCCC.. *2
.CCCCCCCCCCCCCCCCCC.
.CCCCC3CCC4CCC3CCCC.
.CCCC.4.3...4..CCCC.
.CCC4..........4CCC.
.CCC............CCC. *2
..CC............CC..
..c4cccccccccccc4c..
`,`
....................
.....CC.CCCC.CC.....
...CCCCCCCCCCCCCC...
..CCCCCCCCCCCCCCCC.. *2
.CCCCCCCCCCCCCCCCCC. *6
..CCCCCCCCCCCCCCCC..
...CCCCCCCCCCCCCC...
....CC4CCCC4CC4C....
`,`
....................
....CCCCCC..........
..CCCCCCCCCCC.......
.CCCCCCCCCCCCC......
.CCCCCCCCCCCCCC.....
CCCCCCCCCCCCCCCC....
CCCCCCCCCCCC3.4.....
CCCCCCCCCCC.........
CCCCCCCCCC..........
.CCCCCCCCC.......... *3
..CCCCCCC...........
...CC4CC............
`)},Us={short:ke(`
....................
....................
......22222222......
....221111222222....
...22112222222223...
...21222222222223...
...21322222322233...
...23..........32...
...23..........32...
...3............3...
`,`
....................
....................
......22222222......
....221111222222....
...22112222222223...
...21222222222223... *5
...22222222222233... *2
....333333333333....
`,`
....................
....................
.....22222222.......
...2211112222.......
..221122222222......
..2122222222223.....
..212222222233......
..2122222223........
..222222223.........
..222223............
..22223.............
..3223..............
...33...............
`),bobLong:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111241122223...
..2211222412222333..
..2112223..1222333..
..211223....222333..
..21123......22333..
..2123........2333.. *5
..2223cccccccc2333..
..2223cccccccc2333..
..2223........2333..
..3223........3233..
..3333........3343..
...44..........44...
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
..2112222222222233.. *12
..3223223223223233..
...4..4..4..4..4....
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
..2122222222223.....
..21222222223.......
..2212222223........
..221222223......... *5
..2212223........... *2
..3223..............
..3343..............
...44...............
`),ponytail:ke(`
....................
.......222222.......
.....2211112222.....
....221111222222....
...22112222222223...
..221222222222223.b.
..2122222222222233b.
..2122.......22233b.
..212..........233c.
..22............23c.
...3............3.c.
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
..2112222rr222223...
..21222223322222333.
..2122222222222233..
..2222222222222233..
...222222222222233..
....3322222233333...
........2222........
........2222........ *3
........1223........ *2
........2223........ *3
........3233........
.........33.........
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111222222223....
..21122222222223....
.r212222222223......
1222222222223.......
22222222223.........
2223222223..........
2223.2223...........
2223................ *3
.223................ *2
.233................
..3.................
`),bun:ke(`
.......222222.......
......21112222......
.......222222.......
....221111222222....
...22111222222223...
..2212222222222333..
..2122222222222233..
..2122.......22233..
..212..........233..
..22............23..
...3............3...
`,`
.......222222.......
......21112222......
......2222r2223.....
....221111122222....
...22111122222223...
..2211122222222233..
..2122222222222333.. *5
..2222222222222233..
...222222222222233..
....333333333333....
`,`
....................
..12222.............
.122223.............
..2222r.222.........
...2211112222.......
..22111222222223....
..21122222222223....
..212222222223......
..2222222222........
..222223............
..22223.............
..3223..............
...33...............
`),twin:ke(`
....................
.......222222.......
.....2211411222.....
....221114112222....
...22111241122223...
..2211222412222333..
.r212223..1222333r..
1221223....222332223
2221123....22333223
22223..........32223 *2
2223............3223 *2
2223............3223
2233............3233
.233............323.
.23..............32.
.33..............33.
..3..............3..
`,`
....................
.......222222.......
.....2211112222.....
....221111122222....
...22111122222223...
..2211122222222233..
.r2112222222222333r.
12221222222222233223
22222222222222233223 *2
22232222222222333223
2223.22222222223.3223
2223..33333333...3223 *2
2233.............3233
.233.............323.
.23...............32.
.33...............33.
..3...............3..
`,`
....................
......222222........
....2211112222......
...221111122222.....
..22111122222223....
..221122222222223...
.r2122222222223.....
12212222222.........
2221222223..........
2222222223..........
2223.2223...........
2223................ *3
.223................ *2
.233................
..3.................
`)},Vg={bob:"varya",curlyBig:"ruben",mop:"matvey",shag:"polina",wavy:"vasilisa",long:"anya",longStraight:"anya",halfup:"liza",longStyled:"angelina",glam:"alla",curls:"alla",curlyMid:"artemiy",curlyShort:"artemiy",fluffy:"artemiy",rapunzel:"anya"},Dg={f:[],b:[],s:[]};function Ig(i){if(i.style==="none")return Dg;const t=i.hairMask||i.id;if(oo[t])return oo[t];if(Us[t])return Us[t];if(Us[i.style])return Us[i.style];const e=Vg[i.style];return e?oo[e]:Us.short}const xe=32,on=48,$v=1,$s=["idle0","idle1","walk0","walk1","walk2","walk3","arms","bow","fear","sit","point","dance1","dance2","lie","hug"],ph=["f","b","s"];function $n(i,t){const e=parseInt(i.slice(1),16);let n=e>>16,s=e>>8&255,r=e&255;return t<0?(n*=1+t,s*=1+t,r*=1+t*.8):(n+=(255-n)*t,s+=(255-s)*t,r+=(255-r)*t),`rgb(${n|0},${s|0},${r|0})`}function al(i){i.length===4&&(i="#"+i[1]+i[1]+i[2]+i[2]+i[3]+i[3]);const t=parseInt(i.slice(1),16);return[t>>16,t>>8&255,t&255]}function Iu([i,t,e]){i/=255,t/=255,e/=255;const n=Math.max(i,t,e),s=Math.min(i,t,e);let r=0,a=0;const o=(n+s)/2;if(n!==s){const c=n-s;a=o>.5?c/(2-n-s):c/(n+s),r=n===i?(t-e)/c+(t<e?6:0):n===t?(e-i)/c+2:(i-t)/c+4,r*=60}return[r,a,o]}function Kr([i,t,e]){i=(i%360+360)%360,t=Math.max(0,Math.min(1,t)),e=Math.max(0,Math.min(1,e));const n=(1-Math.abs(2*e-1))*t,s=n*(1-Math.abs(i/60%2-1)),r=e-n/2,[a,o,c]=i<60?[n,s,0]:i<120?[s,n,0]:i<180?[0,n,s]:i<240?[0,s,n]:i<300?[s,0,n]:[n,0,s];return[Math.round((a+r)*255),Math.round((o+r)*255),Math.round((c+r)*255)]}function Zr(i,t,e){let n=(t-i+540)%360-180;return i+Math.sign(n)*Math.min(Math.abs(n),e)}function Ug(i){const t=al(i),[e,n,s]=Iu(t),r=n<.08,a=Math.min(.12,s*.3),o=Math.min(.24,s*.5),c=Kr([r?e:Zr(e,48,10),n*(r?1:.95),s+(s>.85?.06:Math.max(.08,.12*(1-s)))]),h=Kr([r?e:Zr(e,265,9),Math.min(1,n*1.05+(r?0:.04)),s-(s>.8?.13:a)]),l=Kr([r?e:Zr(e,270,16),Math.min(1,n*1.08+(r?0:.05)),s-(s>.8?.26:o)]);return[c,t,h,l]}function kg(i){const[t,e,n]=Iu(i);return Kr([Zr(t,280,20),Math.min(1,e*.9+.1),Math.min(.2,n*.42)])}class Uu{constructor(){this.m=new Int16Array(xe*on).fill(-1),this.t=new Int8Array(xe*on)}get(t,e){return t<0||e<0||t>=xe||e>=on?-1:this.m[e*xe+t]}set(t,e,n,s){t<0||e<0||t>=xe||e>=on||(this.m[e*xe+t]=n,this.t[e*xe+t]=s)}clear(t,e){t<0||e<0||t>=xe||e>=on||(this.m[e*xe+t]=-1)}tone(t,e,n){if(this.get(t,e)<0)return;const s=e*xe+t;this.t[s]=Math.max(0,Math.min(3,this.t[s]+n))}}class Cn{constructor(t=!1,e=!1){this.wide=t,this.flat=e,this.px=new Map}k(t,e){return(e+64)*256+(t+64)}has(t,e){return this.px.has(this.k(t,e))}add(t,e,n,s=-1){this.px.set(this.k(t,e),[n,s])}rect(t,e,n,s,r,a=-1){for(let o=0;o<s;o++)for(let c=0;c<n;c++)this.add(t+c,e+o,r,a)}hline(t,e,n,s,r=-1){for(let a=Math.min(t,e);a<=Math.max(t,e);a++)this.add(a,n,s,r)}line(t,e,n,s,r,a,o=-1){const c=Math.abs(n-t),h=Math.abs(s-e),l=t<n?1:-1,d=e<s?1:-1;let p=c-h,m=t,g=e;const v=Math.max(c,h)||1;let u=0;for(;;){const f=typeof a=="number"?a:a(u/v);if(this.rect(m,g,r,r,f,o),m===n&&g===s)break;const _=2*p;_>-h&&(p-=h,m+=l),_<c&&(p+=c,g+=d),u++}}commit(t,e=0){for(const[n,[s,r]]of this.px){const a=n%256-64,o=Math.floor(n/256)-64;let c=r;if(c<0){if(this.flat)c=1;else{const h=!this.has(a-1,o),l=!this.has(a+1,o),d=!this.has(a,o-1),p=!this.has(a,o+1);c=1,(h||d&&!l)&&(c=0),(l||this.wide&&!this.has(a+2,o))&&(c=2),l&&p&&(c=3)}c=Math.min(3,c+e)}t.set(a,o,s,c)}}}function Ng(){const i=[],t=new Map;return{list:i,id:e=>{let n=t.get(e);return n===void 0&&(n=i.length,i.push(Ug(e)),t.set(e,n)),n}}}const fe=(i,t,e,n)=>({e:[i,t],h:[e,n]});function Fg(i,t,e){const n=t==="s",s=fe(0,e>>1,0,e),r={bob:0,legs:"stand",aL:s,aR:s,eyes:"o",mouth:"n",lean:0,headDy:0,armsOver:!1,sit:!1};switch(i){case"idle1":r.bob=1;break;case"walk0":case"walk2":{const a=i==="walk0"?1:-1;r.legs=i,n?(r.aL=fe(-1*a,e>>1,-3*a,e-1),r.aR=fe(1*a,e>>1,3*a,e-1)):(r.aL=fe(0,e>>1,a>0?1:-1,a>0?e-1:e),r.aR=fe(0,e>>1,a>0?1:-1,a>0?e:e-1));break}case"walk1":case"walk3":r.bob=-1,r.legs=i;break;case"arms":r.aL=n?fe(1,-4,2,-e+1):fe(-2,-3,-4,-e+1),r.aR=n?fe(-1,-4,-1,-e+1):fe(-2,-3,-4,-e+1),r.mouth="o",r.armsOver=!0;break;case"bow":r.eyes="c",n?(r.lean=1,r.aL=fe(1,e>>1,2,e),r.aR=r.aL):(r.headDy=3,r.bob=1);break;case"fear":r.bob=2,r.legs="crouch",r.mouth="o",r.eyes="w",r.armsOver=!0,r.aL=n?fe(2,3,4,-2):fe(-1,3,3,-3),r.aR=n?fe(1,3,3,-1):fe(-1,3,3,-3);break;case"sit":r.sit=!0,r.legs="sit",r.aL=n?fe(1,4,3,5):fe(0,4,2,5),r.aR=r.aL;break;case"point":r.aR=n?fe(4,1,9,1):fe(-3,1,-8,1),n&&(r.aL=s),r.armsOver=!0;break;case"dance1":r.bob=-1,r.legs="kickL",r.mouth="s",r.armsOver=!0,r.aL=n?fe(-2,2,-5,4):fe(-2,-4,-3,-e+1),r.aR=n?fe(1,-4,3,-e+1):fe(-3,1,-6,3);break;case"dance2":r.bob=1,r.legs="kickR",r.mouth="s",r.armsOver=!0,r.aL=n?fe(-3,1,-7,0):fe(-3,1,-7,1),r.aR=n?fe(3,1,7,0):fe(-3,1,-7,1);break;case"lie":r.eyes="c";break;case"hug":r.mouth="s",r.eyes="c",r.armsOver=!0,r.aL=n?fe(3,3,7,3):fe(-1,4,4,5),r.aR=n?fe(2,4,6,4):fe(-1,4,4,5),n&&(r.lean=0);break}return r}function ku(i){const t=i.h<26,e=!!i.male,n=t?"kid":i.build,s=t?7:i.h>=37||i.build==="strong"||i.build==="big"?10:9,r=t?7:Math.max(11,Math.min(16,Math.round(12+(i.h-31)*.42))),a=n==="strong"?5:n==="big"?6:n==="kid"?3:4,o=n==="thin"||n==="kid"?2:3,c=n==="thin"?10:n==="mid"?12:n==="kid"?8:14,h=[];for(let d=0;d<s;d++)n==="thin"?h.push(d===0?8:d<4||e?10:8):n==="mid"?h.push(d===0?10:d<4?12:10):n==="strong"?h.push(d===0?12:d<5?14:12):n==="big"?h.push(d===0?12:14):h.push(8);return{T:s,L:r,lw:a,aw:o,ws:c,rows:h,depth:n==="thin"||n==="kid"?6:n==="mid"?7:n==="strong"?8:10,kid:t,male:e}}const F=16,ee=46,Og="#fff6ec";function Nu(i,t,e,n,s,r){const a=n,o=a==="s",c=a==="b",h=a==="f",l=ku(i),d=s??l.L,p=r??l.T,m=p-1,g=Fg(e,a,m),v=i.acc||[],u=M=>v.includes(M),f=new Uu,_=t.id(i.skin),x=t.id(i.top),b=t.id(i.bottom),U=t.id(i.shoes||"#2a2228"),E=t.id(i.hair),R=i.trim?t.id(i.trim):x,P=t.id("#1c1820"),H=t.id("#e8c060"),S=t.id("#d8dce8"),w=t.id("#f2ece2"),X=u("tank")?"none":u("jacket")||u("coat")||u("hoodie")?"long":i.sleeve||"long",W=u("coat"),Y=W?i.id.startsWith("owner")?x:t.id(_i(i.top,-.05)):x,it=W?Y:x;let V=ee-d+1;g.sit&&(V=ee-Math.ceil(d*.5)+1),V+=g.legs==="crouch"?1:0;const j=g.bob,q=V-p+j,xt=q-14+g.headDy,Ct=o&&g.lean?1:0,St=M=>Ct?Math.round((p-1-M)*.6):0,Ut=F-7+(o?1:0)+(Ct?St(0)+1:0),Ht=xt+(Ct?3:0),nt=Ig(i),ut=M=>{const y=o?nt.s:c?nt.b:nt.f;if(!y)return;const N=Ut-3,C=Ht-3;for(let A=0;A<y.length;A++){const T=y[A];for(let O=0;O<T.length;O++){const K=T[O];let et=-1,At=!1;if(K>="1"&&K<="4")et=K.charCodeAt(0)-49;else if(K>="a"&&K<="d")et=K.charCodeAt(0)-97,At=!0;else if("LlVvCc".includes(K))At=K==="l"||K==="v"||K==="c",et=Bg(y,O,A,K.toUpperCase());else if(K==="k"){M==="front"&&f.set(N+O,C+A,H,1);continue}else if(K==="w"){M==="front"&&f.set(N+O,C+A,w,1);continue}else if(K==="r"){M==="front"&&f.set(N+O,C+A,t.id(i.trim||"#e84a6f"),1);continue}et<0||M==="back"===At&&f.set(N+O,C+A,E,et)}}};if(u("cape")){const M=new Cn(!0),y=t.id(i.trim&&i.trim!=="#e8c36a"?i.trim:"#8a1426"),N=l.ws+2,C=l.ws+8;for(let A=q;A<=ee-1;A++){const T=(A-q)/(ee-q),O=Math.round(N+(C-N)*T)&-2;o?M.hline(F-4-Math.round(T*5),F+1,A,y):M.hline(F-O/2,F+O/2-1,A,y)}if(!c&&!o)for(let A=q+2;A<=ee-1;A++)M.add(F-1,A,t.id("#d8c8b0"),2);if(M.commit(f),h){const A=t.id("#e8d8c0");for(let T=q+3;T<=ee-1;T++){const O=(T-q)/(ee-q),K=Math.round(l.ws+2+6*O)&-2;f.set(F-K/2,T,A,2),f.set(F+K/2-1,T,A,3)}}}if(u("wings")&&!o){const M=t.id("#d8ccf4"),y=new Cn(!0);for(const N of[-1,1])for(let C=0;C<12;C++){const A=C<2?3+C*2:C<8?7:7-(C-7);for(let T=0;T<A;T++)y.add(F+(N<0?-l.ws/2-2-T:l.ws/2+1+T),q-2+C,M)}y.commit(f)}c||ut("back");const Et=i.skirt==="short"||i.skirt==="long"?_:b,Mt=()=>{const M=l.lw,y=(K,et,At,B=!1)=>{const tt=new Cn;for(let lt=et;lt<=At-2;lt++)tt.hline(K,K+M-1,lt,Et);tt.rect(K,At-1,M,2,U),(h||c)&&tt.add(K+(K<F?-1:M),At,U),tt.commit(f,B?1:0)};if(h||c){if(g.legs==="sit"){const lt=new Cn(!0);lt.rect(F-M-1,V,M*2+2,3,Et),lt.commit(f),y(F-M,V+3,ee),y(F,V+3,ee);return}if(!i.skirt){const lt=new Cn(!0),mt=l.rows[p-1];lt.rect(F-mt/2,V,mt,2,b),lt.commit(f)}let K=ee,et=ee,At=F-M,B=F;g.legs==="walk0"&&(K=ee-2),g.legs==="walk2"&&(et=ee-2),g.legs==="crouch"&&(At-=1,B+=1),g.legs==="kickL"&&(K=ee-3,At-=2),g.legs==="kickR"&&(et=ee-3,B+=2);const tt=V+(g.legs.startsWith("walk1")||g.legs==="walk3"?-1:0);y(At,tt,K),y(B,tt,et);return}const N=Math.max(3,M-1),C=F-(N>>1)-1,A=Math.floor((d-2)/2),T=V+(g.legs==="walk1"||g.legs==="walk3"?-1:0),O=(K,et,At,B,tt)=>{const lt=new Cn;lt.line(C,T,C+K,T+et,N,Et),lt.line(C+K,T+et,C+At,B-1,N,Et),lt.rect(C+At,B-1,N+2,2,U),lt.rect(C+At-1,B,1,1,U),lt.commit(f,tt?1:0)};switch(g.legs){case"walk0":O(-1,A,-3,ee,!0),O(1,A,3,ee,!1);break;case"walk2":O(1,A,3,ee,!0),O(-1,A,-3,ee,!1);break;case"walk1":O(-1,A,-2,ee-1,!0),O(0,A,0,ee,!1);break;case"walk3":O(0,A,0,ee,!0),O(-1,A,-2,ee-1,!1);break;case"sit":{const K=new Cn;K.rect(C,V,N+6,N,Et),K.rect(C+5,V,N,ee-V-1,Et),K.rect(C+5,ee-1,N+2,2,U),K.commit(f);break}case"crouch":O(2,A,0,ee,!0),O(3,A,1,ee,!1);break;case"kickL":O(0,A,0,ee,!0),O(3,A-1,6,ee-3,!1);break;case"kickR":O(-3,A-1,-5,ee-3,!0),O(0,A,0,ee,!1);break;default:O(0,A,0,ee,!0),O(0,A,0,ee,!1)}},$t=()=>{if(!i.skirt)return;const M=new Cn(!0),y=i.skirt==="long",N=o?l.depth+1:l.rows[p-1]+(y?2:0),C=V-1+(g.bob>0,0),A=y?g.sit?ee-1:ee-2:V+(l.kid?3:5);for(let T=C;T<=A;T++){const O=(T-C)/Math.max(1,A-C);let K=Math.round(N+O*(y?8:4));if(o){const et=F-(l.depth>>1)-1-Math.round(O*(y?3:1));M.hline(et,et+K-1-Math.round(O*2),T,b)}else K+=K&1,M.hline(F-K/2,F+K/2-1,T,b)}if(M.commit(f),i.trim&&y&&i.trim!==i.bottom)for(let T=0;T<xe;T++)f.get(T,A)===b&&f.set(T,A,R,1);if(!o)for(let T=C+2;T<=A;T++)f.get(F-3,T)===b&&f.tone(F-3,T,1),y&&f.get(F+2,T)===b&&f.tone(F+2,T,1)},Gt=()=>{const M=new Cn(!0),y=W?Y:x;for(let C=0;C<p;C++){const A=q+C;let T,O;if(o){const et=l.depth;T=F-(et>>1)-1,O=T+et-1,C===0&&(T++,O--),!l.male&&!l.kid&&C>=2&&C<=3&&O++,T+=St(C),O+=St(C)}else{const et=l.rows[C];T=F-et/2,O=F+et/2-1}const K=!i.skirt&&!W&&C>=p-1;M.hline(T,O,A,K?b:y)}if(W&&!g.sit){const C=V+Math.floor(d*.6);for(let A=V;A<=C;A++){const T=(A-V)/(C-V);if(o){const O=F-(l.depth>>1)-2-Math.round(T*2);M.hline(O,O+l.depth+1+Math.round(T*2),A,Y)}else{const O=l.rows[p-1]+2+Math.round(T*3)*2;M.hline(F-O/2,F+O/2-1,A,Y)}}}M.commit(f);const N=(C,A)=>f.get(C,A)>=0;if(h){const C=q;if(u("offshoulder")){const A=l.rows[1];for(let T=F-A/2;T<F+A/2;T++)f.set(T,C,_,T<F-2?0:1),f.set(T,C+1,_,1);f.set(F-A/2,C+1,_,0),f.set(F+A/2-1,C+1,_,2),f.set(F+A/2-1,C,_,2);for(let T=F-A/2;T<F+A/2;T++)f.set(T,C+2,x,0);if(u("buckle")){for(let T=C+2;T<V;T++)f.set(F-3,T,x,3),f.set(F+2,T,x,3);f.set(F-4,C+4,H,0),f.set(F-3,C+4,H,1),f.set(F-4,C+5,H,2),f.set(F-3,C+5,x,3);for(let T=C+3;T<V-1;T++)f.set(F-1,T,x,T%2?2:1);for(let T=C+4;T<V-1;T+=2)f.set(F-1,T,x,3)}else for(let T=C+3;T<V;T++)for(let O=F-4;O<F+4;O+=2)f.get(O,T)===x&&f.t[T*xe+O]===1&&f.tone(O,T,1)}else if(u("tank")){for(let A=F-3;A<F+3;A++)f.set(A,C,_,1);for(let A=F-2;A<F+2;A++)f.set(A,C+1,_,1);f.set(F-l.ws/2+1,C,x,2),f.set(F+l.ws/2-2,C,x,2)}else if(i.id==="alla"||i.id==="queen"||u("strapless")){const A=l.rows[1];for(let T=F-A/2;T<F+A/2;T++)f.set(T,C,_,1),f.set(T,C+1,_,T<F-3?0:1);f.set(F-1,C+2,_,2),f.set(F,C+2,_,2);for(let T=F-A/2;T<F+A/2;T++)T!==F-1&&T!==F&&f.set(T,C+2,x,0)}else if(u("vneck"))for(let A=0;A<4;A++)for(let T=F-3+A;T<F+3-A;T++)f.set(T,C+A,_,A===3?2:1);else if(u("open")){const A=t.id(i.inner||"#ecebe6"),T=(l.rows[1]>=12,4);for(let O=C;O<V-(i.skirt?0:1);O++)for(let K=F-T/2;K<F+T/2;K++)f.set(K,O,A,u("stripes")&&K&1?2:K===F-T/2?0:1);for(let O=C+1;O<V-1;O++)f.set(F-T/2-1,O,x,2),f.set(F+T/2,O,x,3);if(f.set(F-1,C,_,1),f.set(F,C,_,2),f.set(F-3,C,A,0),f.set(F+2,C,A,1),u("suspenders"))for(let O=C+1;O<V;O++)f.set(F-T/2,O,P,1),f.set(F+T/2-1,O,P,1)}else if(u("jacket")){const A=t.id(i.trim||"#f4f0e8");for(let T=0;T<p-2;T++){const O=Math.max(2,6-T);for(let K=F-O/2;K<F+O/2;K++)f.set(K,C+T,A,K===F-O/2?0:1)}for(let T=0;T<5;T++)f.set(F-3+(T>>1),C+T+1,x,0),f.set(F+2-(T>>1),C+T+1,x,2)}else if(u("hoodie")){const A=t.id(_i(i.top,-.1));for(let O=F-5;O<F+5;O++)f.set(O,C-1,A,O<F-2?1:2);for(let O=F-4;O<F+4;O++)f.set(O,C,A,O<F?2:3);f.set(F-5,C,A,2),f.set(F+4,C,A,3);const T=V-4;for(let O=F-3;O<F+3;O++)f.set(O,T,x,2);for(let O=T+1;O<V-1;O++)f.set(F-4,O,x,2),f.set(F+3,O,x,3);f.set(F-2,C+1,w,1),f.set(F-2,C+2,w,1),f.set(F+1,C+1,w,1),f.set(F+1,C+2,w,2),f.set(F-2,C+3,w,2),f.set(F+1,C+3,w,2)}else f.set(F-2,C,_,1),f.set(F-1,C,_,1),f.set(F,C,_,2),f.set(F+1,C,_,2),i.trim&&i.trim!==i.top&&!u("scarf")&&!u("bowtie")&&!u("tie")&&(f.set(F-3,C,R,0),f.set(F+2,C,R,1),f.set(F-2,C+1,R,1),f.set(F+1,C+1,R,1),f.set(F-1,C+1,_,2),f.set(F,C+1,_,2));if(u("collar")&&(f.set(F-2,C,w,0),f.set(F-1,C,w,1),f.set(F,C,w,1),f.set(F+1,C,w,2),f.set(F-2,C+1,w,1),f.set(F+1,C+1,w,2)),u("tie")){const A=t.id("#b3172e");f.set(F-1,C+1,A,0),f.set(F,C+1,A,1);for(let T=2;T<7;T++)f.set(F-1,C+T,A,1),f.set(F,C+T,A,2);f.set(F-1,C+7,A,2)}if(u("bowtie")){const A=(u("jacket"),P);f.set(F-2,C+1,A,1),f.set(F-1,C+1,A,2),f.set(F,C+1,A,2),f.set(F+1,C+1,A,1),f.set(F-2,C,A,1),f.set(F+1,C,A,1)}if(u("scarf")){const A=t.id(i.trim||"#e84a6f");for(let T=F-l.ws/2+1;T<F+l.ws/2-1;T++)f.set(T,C,A,T<F?0:1);for(let T=1;T<6;T++)f.set(F+1,C+T,A,T&1?1:2),f.set(F+2,C+T,A,2);f.set(F+1,C+6,A,3)}if(u("suspenders")&&!u("open"))for(let A=C+1;A<V;A++)f.set(F-3,A,P,1),f.set(F+2,A,P,1);if(u("stripes")&&!u("open"))for(let A=C+1;A<V-1;A++)for(let T=F-4;T<F+4;T+=2)f.get(T,A)===x&&f.tone(T,A,1);if(u("pins")&&(f.set(F+3,C+3,w,0),f.set(F-4,C+4,H,0),f.set(F+4,C+5,t.id("#4ae0c0"),0)),u("belt")||!i.skirt&&!W&&!u("open")&&p>0,W){for(let A=C+1;A<=V+Math.floor(d*.6)&&!g.sit;A++)N(F-1,A)&&f.set(F-1,A,Y,3);f.set(F-3,V-1,P,1),f.set(F-2,V-1,P,1),f.set(F+1,V-1,P,1),f.set(F+2,V-1,P,1),f.set(F-2,C,Y,0),f.set(F+1,C,Y,2),f.set(F-1,C,x===Y?w:x,1),f.set(F,C,x===Y?w:x,2)}}else if(c){if(u("offshoulder")||i.id==="alla"||i.id==="queen"){const C=l.rows[1];for(let A=F-C/2;A<F+C/2;A++)f.set(A,q,_,A<F-2?0:1);for(let A=F-C/2;A<F+C/2;A++)f.set(A,q+1,x,0)}if(u("hoodie")){const C=t.id(_i(i.top,-.1));for(let A=0;A<4;A++)for(let T=F-4+A;T<F+4-A;T++)f.set(T,q+A,C,A===0?1:2)}if(u("suspenders"))for(let C=q+1;C<V;C++)f.set(F-3,C,P,1),f.set(F+2,C,P,1);if(u("tank"))for(let C=F-3;C<F+3;C++)f.set(C,q,_,1)}else{const C=q,A=T=>{let O=-99;for(let K=0;K<xe;K++)f.get(K,C+T)>=0&&(O=K);return O};if(u("offshoulder")||i.id==="alla"||i.id==="queen"){for(let T=F-4+St(0);T<=A(0);T++)f.set(T,C,_,1);for(let T=F-4+St(1);T<=A(1);T++)f.set(T,C+1,_,1);for(let T=F-4+St(2);T<=A(2);T++)f.set(T,C+2,x,0)}if((u("tank")||u("vneck"))&&(f.set(A(0),C,_,1),f.set(A(0)-1,C,_,1),f.set(A(1),C+1,_,2)),u("open")){const T=t.id(i.inner||"#ecebe6");for(let O=0;O<p-1;O++){const K=A(O);f.set(K,C+O,T,u("stripes")&&O&1?2:1),f.set(K-1,C+O,x,3)}}if(u("tie"))for(let T=1;T<7;T++)f.set(A(T),C+T,t.id("#b3172e"),1);if(u("collar")&&(f.set(A(0),C,w,1),f.set(A(0)-1,C,w,1)),u("hoodie")){const T=t.id(_i(i.top,-.1));for(let O=0;O<4;O++)f.set(F-4+St(O)+(O>1,0),C+O,T,2);f.set(F-3,C,T,2),f.set(F-2,C,T,1)}if(u("jacket")){const T=t.id(i.trim||"#f4f0e8");for(let O=0;O<4;O++)f.set(A(O),C+O,T,1)}if(u("suspenders"))for(let T=C+1;T<V;T++)f.set(F+St(T-C),T,P,1);if(u("scarf")){const T=t.id(i.trim||"#e84a6f");for(let O=F-3;O<=A(0);O++)f.set(O,C,T,1);f.set(A(1),C+1,T,2),f.set(A(2),C+2,T,2)}}},Kt=()=>{const M=new Cn,y=o?Ut+5:F-2;M.rect(y,q-2,o?3:4,2,_,2),M.commit(f)},Jt=q,st=[],D=()=>{const M=t.id("#f4efe8");for(const[y,N,C]of st)for(let A=-2;A<=3;A++)for(let T=-1;T<=C;T++)(A===-2||A===3)&&(T===-1||T===C)||f.set(y+T,N+A,M,A===-2?0:(T+A*2)%3===0||T===C?2:1)},vt=(M,y,N)=>{const C=l.aw;let A;o?A=F-(C>>1)-1+St(1)+(N?1:0):A=M<0?F-l.ws/2-C+1:F+l.ws/2-1;const T=yt=>o||M<0?yt:-yt,O=A+T(y.e[0]),K=Jt+y.e[1],et=A+T(y.h[0])+(o||M<0,0),At=Jt+y.h[1],B=new Cn,tt=u("gloves")?P:_,lt=u("offshoulder")||i.id==="alla"||i.id==="queen"||u("strapless"),mt=yt=>lt&&yt<.3||X==="none"||X==="short"&&yt>.75?_:it,ot=yt=>X==="long"?it:u("gloves")&&(yt>.1||X==="none")?P:_;B.line(A,Jt,O,K,C,mt),B.line(O,K,et,At,C,ot);const ct=Math.sign(et-O),pt=Math.sign(At-K),Zt=et+(Math.abs(et-O)>Math.abs(At-K)?ct*C:0)+(C===3&&Math.abs(et-O)<=Math.abs(At-K)?o?1:M<0?0:1:0),z=At+(Math.abs(et-O)>Math.abs(At-K)?0:pt*C);if(B.rect(Zt,z,2,2,tt),B.commit(f,N?1:0),u("fur")&&!N&&!c&&st.push([O,K,C]),u("bracelets")&&!N){const yt=X==="long"?-1:0;Math.abs(et-O)<=Math.abs(At-K)&&(f.set(et,At+C-1+yt,H,0),f.set(et+1,At+C-1+yt,t.id("#4ae0c0"),1))}},_t=()=>{o?vt(1,g.aL,!1):(vt(-1,g.aL,!1),vt(1,g.aR,!1))},ft=()=>{const M=o?Tg:c?Ag:Eg,y=Ut,N=Ht;for(let B=0;B<M.length;B++)for(let tt=0;tt<M[B].length;tt++){const lt=M[B][tt];if(lt===".")continue;const mt=lt==="L"?0:lt==="S"?1:lt==="D"||lt==="E"?2:lt==="X"?3:1;f.set(y+tt,N+B,_,mt)}if(c)return;const C=t.id(i.eyes),A=t.id(_i(gh(i.eyes,i.hair,.5),-.55)),T=t.id(i.lips||_i(i.skin,-.28)),O=t.id(Og),K=t.id(gh(i.skin,"#e86a70",.45)),et=t.id(_i(i.hair,-.35)),At=!l.male;if(h){const B=N+5,tt=y+4,lt=y+8,mt=B-1;if(i.brows==="arch"?(f.set(tt,mt,et,1),f.set(tt+1,mt-1,et,1),f.set(lt+1,mt,et,1),f.set(lt,mt-1,et,1)):i.brows==="strict"?(f.set(tt,mt,et,2),f.set(tt+1,mt,et,2),f.set(lt,mt,et,2),f.set(lt+1,mt,et,2)):(f.set(tt,mt,et,0),f.set(tt+1,mt,et,0),f.set(lt,mt,et,0),f.set(lt+1,mt,et,0)),g.eyes==="c"){for(const ct of[tt,lt])f.set(ct,B+1,A,1),f.set(ct+1,B+1,A,1);At&&(f.set(tt-1,B+1,A,1),f.set(lt+2,B+1,A,1))}else for(const[ct,pt]of[[tt,-1],[lt,1]])f.set(ct,B,A,1),f.set(ct+1,B,A,1),At&&f.set(pt<0?ct-1:ct+2,B,A,1),f.set(ct,B+1,pt<0?O:C,pt<0?1:3),f.set(ct+1,B+1,pt<0?C:O,pt<0?3:1),f.set(ct,B+2,C,1),f.set(ct+1,B+2,C,2),g.eyes==="w"&&(f.set(ct,B+2,O,1),f.set(ct+1,B+2,C,3));f.set(y+3,B+3,K,1),f.set(y+10,B+3,K,1),f.set(y+7,B+3,_,2);const ot=N+10;if(g.mouth==="o"?(f.set(y+6,ot-1,t.id("#6a1a24"),2),f.set(y+7,ot-1,t.id("#6a1a24"),2),f.set(y+6,ot,t.id("#6a1a24"),1),f.set(y+7,ot,t.id("#6a1a24"),1)):g.mouth==="s"?(f.set(y+5,ot-1,T,2),f.set(y+6,ot,T,2),f.set(y+7,ot,T,2),f.set(y+8,ot-1,T,2)):(f.set(y+6,ot,T,i.lips?1:2),f.set(y+7,ot,T,i.lips?1:2)),u("freckles"))for(const ct of[3,5,8,10])f.set(y+ct,B+3+(ct===5||ct===8?1:0),_,3);if(u("mole")&&f.set(y+9,B+4,t.id("#3a1a14"),1),u("glasses")){const ct=t.id("#3a2a32");for(const[pt,Zt]of[[tt,-1],[lt,2]]){for(let z=0;z<=1;z++)f.set(pt+z,B+3,ct,1);f.set(pt+Zt,B+2,ct,1),f.set(pt+Zt,B+1,ct,0)}f.set(y+6,B+1,ct,1),f.set(y+7,B+1,ct,1)}if(u("visor")){const ct=t.id(i.trim||"#40e0d0");for(let pt=y+1;pt<=y+12;pt++)f.set(pt,B,ct,0),f.set(pt,B+1,ct,1),f.set(pt,B+2,ct,2)}if(u("maskface")){const ct=t.id("#ece8dc");for(let pt=2;pt<13;pt++)for(let Zt=0;Zt<14;Zt++)M[pt][Zt]!=="."&&M[pt][Zt]!=="E"&&f.set(y+Zt,N+pt,ct,Zt<4?0:Zt>10?2:1);for(const pt of[tt,lt])f.set(pt,B+1,P,1),f.set(pt+1,B+1,P,1),f.set(pt,B+2,P,1),f.set(pt+1,B+2,P,1);for(let pt=y+5;pt<=y+8;pt++)f.set(pt,ot,P,1);f.set(y+4,ot-1,P,1),f.set(y+9,ot-1,P,1)}if(u("maskhalf")){const ct=H;for(let pt=y+1;pt<=y+12;pt++)for(let Zt=-1;Zt<=3;Zt++)f.set(pt,B+Zt,ct,Zt<0?0:Zt>2?2:1);for(const pt of[tt,lt])f.set(pt,B+1,P,1),f.set(pt+1,B+1,P,1);f.set(y+12,B-2,t.id("#c41e3a"),1),f.set(y+13,B-3,t.id("#c41e3a"),1)}if(u("monocle")){for(let ct=-1;ct<=2;ct++)f.set(lt+ct,B-1,H,0),f.set(lt+ct,B+3,H,1);for(let ct=0;ct<3;ct++)f.set(lt-1,B+ct,H,1),f.set(lt+2,B+ct,H,1);for(let ct=4;ct<9;ct++)f.set(lt+2,B+ct,H,2)}if(u("sunglasses"))for(const ct of[tt,lt])for(let pt=-1;pt<=2;pt++)f.set(ct+pt,B,P,1),f.set(ct+pt,B+1,P,0)}else{const B=N+5,tt=y+10;g.eyes==="c"?(f.set(tt,B+1,A,1),f.set(tt-1,B+1,A,1)):(f.set(tt,B,A,1),f.set(tt+1,B,A,1),At&&f.set(tt-1,B,A,1),f.set(tt,B+1,C,3),f.set(tt+1,B+1,O,1),f.set(tt,B+2,C,1),g.eyes==="w"&&f.set(tt+1,B+2,O,1)),i.brows==="strict"?(f.set(tt,B-1,et,2),f.set(tt+1,B-1,et,2)):(f.set(tt,B-1,et,0),f.set(tt+1,B-1,et,0)),f.set(tt-1,B+3,K,1);const lt=N+10;if(g.mouth==="o"?(f.set(y+11,lt,t.id("#6a1a24"),1),f.set(y+12,lt,t.id("#6a1a24"),1)):f.set(y+11,lt,T,i.lips?1:2),g.mouth==="s"&&f.set(y+10,lt-1,T,2),u("freckles")&&(f.set(tt-1,B+3,_,3),f.set(tt+1,B+3,_,3)),u("glasses")){const mt=t.id("#2a2028");for(let ot=y+6;ot<tt-1;ot++)f.set(ot,B,mt,1);f.set(tt-1,B+1,mt,1),f.set(tt-1,B+2,mt,1),f.set(tt,B+3,mt,1),f.set(tt+1,B+3,mt,1),f.set(tt+2,B+2,mt,1)}if(u("visor")){const mt=t.id(i.trim||"#40e0d0");for(let ot=y+6;ot<=y+13;ot++)for(let ct=0;ct<3;ct++)f.set(ot,B+ct,mt,ct)}if(u("maskface")){const mt=t.id("#ece8dc");for(let ot=2;ot<13;ot++)for(let ct=7;ct<14;ct++)M[ot][ct]!=="."&&f.set(y+ct,N+ot,mt,1);f.set(tt,B+1,P,1),f.set(tt,B+2,P,1),f.set(y+11,lt,P,1)}if(u("maskhalf"))for(let mt=y+7;mt<=y+13;mt++)for(let ot=-1;ot<=3;ot++)f.get(mt,B+ot)===_&&f.set(mt,B+ot,H,1);if(u("monocle")&&(f.set(tt+1,B,H,0),f.set(tt+1,B+2,H,1),f.set(tt+2,B+1,H,1)),u("sunglasses"))for(let mt=0;mt<3;mt++)f.set(tt-1+mt,B+1,P,0)}},bt=()=>{const M=q;if(o){const y=N=>{let C=-99;for(let A=0;A<xe;A++){const T=f.get(A,M+N);(T===x||T===_||T===Y)&&(C=A)}return C};if((u("necklace")||u("cross")||u("pearls")||u("pendant"))&&f.set(y(1),M+1,u("pearls")?w:H,0),u("camera")){const N=t.id("#2a2a30");for(let C=0;C<4;C++)for(let A=0;A<3;A++)f.set(y(4)-1+A,M+4+C,N,C===0?0:1);f.set(y(4)+2,M+5,t.id("#7ab0d0"),0)}if(u("fur")){const N=t.id("#f4efe8");for(let C=F-4;C<=F+2;C++)f.set(C,M,N,0);for(let C=F-5;C<=F+3;C++)f.set(C,M+1,N,C>F?2:1)}return}if(c){if(u("fur")){const y=t.id("#f4efe8");for(let N=F-l.ws/2-1;N<F+l.ws/2+1;N++)f.set(N,M+1,y,0),f.set(N,M+2,y,N&1?1:2)}return}if(u("fur")&&t.id("#f4efe8"),u("necklace")&&!u("cross")&&!u("pendant"))if(i.id==="alla"||i.id==="queen"||u("fur")){for(const y of[F-2,F-1,F,F+1])f.set(y,M+1,S,y===F-1?0:1);f.set(F-1,M+2,S,0),f.set(F,M+2,t.id("#bfe8ff"),0)}else{const y=u("open")?S:H;f.set(F-2,M,y,1),f.set(F+1,M,y,1),f.set(F-1,M+1,y,0),f.set(F,M+1,y,1),u("open")&&(f.set(F-1,M+3,y,1),f.set(F,M+2,y,0))}if(u("pendant")&&(f.set(F-2,M,P,1),f.set(F+1,M,P,1),f.set(F-1,M+1,P,1),f.set(F,M+1,P,1),f.set(F-1,M+2,H,0),f.set(F,M+2,H,1)),u("pearls"))for(const[y,N]of[[F-3,0],[F-2,1],[F-1,1],[F,1],[F+1,1],[F+2,0]])f.set(y,M+N,w,0);if(u("cross")&&(f.set(F-2,M,H,1),f.set(F+1,M,H,1),f.set(F-1,M+1,H,2),f.set(F-1,M+2,H,0),f.set(F-2,M+3,H,1),f.set(F-1,M+3,H,0),f.set(F,M+3,H,1),f.set(F-1,M+4,H,1)),u("camera")){const y=t.id("#2a2a30");for(let N=F-3;N<F+3;N++)for(let C=0;C<4;C++)f.set(N,M+5+C,y,C===0?0:N===F+2?2:1);f.set(F-1,M+6,t.id("#7ab0d0"),0),f.set(F,M+6,t.id("#7ab0d0"),1),f.set(F-1,M+7,t.id("#7ab0d0"),2),f.set(F,M+7,t.id("#7ab0d0"),2),f.set(F+1,M+5,t.id("#c8c8d0"),0);for(let N=1;N<5;N++)f.set(F-4+(N>>2),M+N,P,2),f.set(F+3-(N>>2),M+N,P,2)}},Ft=()=>{const M=(C,A,T,O)=>{if(!C)return;const K=o?C[2]:c?C[1]:C[0];if(K)for(let et=0;et<K.length;et++)for(let At=0;At<K[et].length;At++){const B=O[K[et][At]];B&&f.set(A+At,T+et,B[0],B[1])}},y=Ut-3,N=Ht-3;if(u("hat")){const C=t.id(i.id.startsWith("cashier")?"#3a4a6a":"#2c2a30"),A=t.id(i.id.startsWith("cashier")?"#e8e8e8":"#7a1a22");M(i.id.startsWith("cashier")?Rg:Lg,y,N,{1:[C,0],2:[C,1],3:[C,2],4:[C,3],b:[A,1],c:[A,2]})}if(u("crown")&&M(Pg,y,N,{1:[H,0],2:[H,1],3:[H,2],r:[t.id("#c41e3a"),1],w:[w,0]}),u("headphones")){const C=t.id("#26242a");if(o){for(let A=0;A<4;A++)for(let T=0;T<3;T++)f.set(Ut+4+T,Ht+5+A,C,T===0?0:1);for(let A=-2;A<5;A++)f.set(Ut+5,Ht+A,C,1)}else{for(let A=Ut;A<=Ut+13;A++)f.set(A,Ht-2+(A===Ut||A===Ut+13?1:0),C,1);for(const A of[Ut-1,Ut+13])for(let T=0;T<4;T++)f.set(A,Ht+5+T,C,1),f.set(A+1,Ht+5+T,C,2)}}if(u("shadesup")){if(h){for(const C of[Ut+3,Ut+8])for(let A=0;A<3;A++)f.set(C+A,Ht-1,P,0),f.set(C+A,Ht,P,1);f.set(Ut+6,Ht-1,P,1),f.set(Ut+7,Ht-1,P,1),f.set(Ut+4,Ht-1,t.id("#6a6a7a"),0),f.set(Ut+9,Ht-1,t.id("#6a6a7a"),0)}else if(o){for(let C=0;C<4;C++)f.set(Ut+8+C,Ht-1,P,C===3?0:1);f.set(Ut+7,Ht-1,P,1),f.set(Ut+9,Ht,P,1)}}u("earrings")&&h&&(f.set(Ut,Ht+8,H,0),f.set(Ut+13,Ht+8,H,1)),u("earrings")&&o&&f.set(Ut+5,Ht+9,H,0)};if(o&&e!=="lie"){const M={...g.aR};Tt(M)}function Tt(M){vt(1,M,!0)}return Mt(),$t(),Gt(),Kt(),g.armsOver||_t(),bt(),h&&!u("fur")&&u("fur"),ft(),ut("front"),Ft(),g.armsOver&&_t(),D(),f}const ks=(i,t,e)=>{const n=i[e]?.[t];return!!n&&n!=="."&&n!=="k"&&n!=="w"&&n!=="r"};function Bg(i,t,e,n){let s;if(n==="L")s=t%3===2?2:e%9===1&&t%3===0?0:1;else if(n==="V"){const d=Math.floor((t+1)/4)*3%8,p=[0,0,1,1,1,1,0,0][(e+d)%8],m=((t+p)%4+4)%4;s=m===3?2:m===1&&(e+d)%8===1?0:1,m===3&&(e+d)%8===4&&(s=3),e>=6&&e<=7&&m!==3&&(s=0)}else{const l=Math.floor(e/3),d=mh(l,3)%4,p=Math.floor((t+d)/4),m=mh(p,l)%3,g=(t+d)%4,v=(e+(m===2?1:0))%3;s=[[2,1,0,1],[1,1,1,2],[3,2,2,3]][v][g],m===1&&v===2&&g===1&&(s=1)}const r=!ks(i,t-1,e),a=!ks(i,t+1,e),o=!ks(i,t+2,e),c=!ks(i,t,e+1),h=!ks(i,t,e-1);return r&&(s=Math.max(0,s-1)),h&&!a&&(s=Math.max(0,s-1)),a?s=Math.min(3,Math.max(s,2)+(s>=2?1:0)):o&&(s=Math.max(s,2)),c&&(s=Math.min(3,s+1)),s}function mh(i,t){let e=i*374761393+t*668265263|0;return e=(e^e>>>13)*1274126177,(e^e>>>16)>>>0}function _i(i,t){return"#"+$n(i,t).match(/\d+/g).map(Number).map(n=>n.toString(16).padStart(2,"0")).join("")}function gh(i,t,e){const n=al(i),s=al(t);return"#"+n.map((r,a)=>Math.round(r+(s[a]-r)*e).toString(16).padStart(2,"0")).join("")}function zg(i,t){const e=ku(i),n=Math.max(6,e.T-2),s=Math.max(4,Math.min(e.L,13-n)),r=Nu(i,t,"lie","s",s,n);let a=xe,o=on;for(let h=0;h<on;h++)for(let l=0;l<xe;l++)r.get(l,h)>=0&&(a=Math.min(a,l),o=Math.min(o,h));const c=new Uu;for(let h=0;h<on;h++)for(let l=0;l<xe;l++){const d=r.get(l,h);if(d<0)continue;const p=h-o+1,m=ee-(l-a);p>=1&&p<xe-1&&c.set(p,m,d,r.t[h*xe+l])}return c}function Hg(i,t,e,n,s,r){for(let a=0;a<on;a++)for(let o=0;o<xe;o++){const c=(s+a)*r+n+o,h=i.get(o,a);if(h>=0){const p=t.list[h][i.t[a*xe+o]];e[c*4]=p[0],e[c*4+1]=p[1],e[c*4+2]=p[2],e[c*4+3]=255;continue}let l=-1;for(const[p,m]of[[0,1],[0,-1],[-1,0],[1,0]]){const g=i.get(o+p,a+m);if(g>=0){l=g,i.t[(a+m)*xe+o+p];break}}if(l<0||o===0||a===0||o===xe-1||a===on-1)continue;const d=kg(t.list[l][2]);e[c*4]=d[0],e[c*4+1]=d[1],e[c*4+2]=d[2],e[c*4+3]=255}}function Gg(i){const t=xe*$s.length,e=on*ph.length,n=new Uint8ClampedArray(t*e*4),s=Ng();if(ph.forEach((r,a)=>$s.forEach((o,c)=>{const l=c>=6&&r==="b"&&o!=="sit"&&o!=="arms"&&o!=="dance1"&&o!=="dance2"?"f":r,d=o==="lie"?zg(i,s):Nu(i,s,o,l);Hg(d,s,n,c*xe,a*on,t)})),i.id==="kukolnik"||i.id==="narrator")for(let r=0;r<n.length;r+=4)n[r+3]&&(n[r]=10,n[r+1]=8,n[r+2]=8);return{w:t,h:e,data:n}}const vh=new Map;function Fu(i){let t=vh.get(i);if(t)return t;const e=He[i];if(!e)throw new Error("Нет персонажа: "+i);const n=Gg(e);t=document.createElement("canvas"),t.width=n.w,t.height=n.h;const s=t.getContext("2d",{willReadFrequently:!0});s.imageSmoothingEnabled=!1;const r=s.createImageData(n.w,n.h);return r.data.set(n.data),s.putImageData(r,0,0),vh.set(i,t),t}const _h=new Map;let lo=null;function Wg(){return lo||(lo=Je(32,32,i=>{const t=i.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,32,32)})),lo}function Ou(i){const t=i.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,0,.75,.66);t.needsUpdate=!0}class Nl{constructor(t,e=t){this.id=e,this.x=0,this.z=0,this.y=0,this.dir="f",this.pose=null,this.moving=!1,this.t=Math.random()*3,this.target=null,this.hidden=!1,this.charId="",this.group=new ce,this.roll=0,this.alpha=1,this.float=0,this.danceBeat=0;const n=new ye(xe/An,on/An);n.translate(0,on/An/2,0),Ou(n),this.map=null,this.mesh=new ht(n,new qn({alphaTest:.5,side:Pe,transparent:!1})),this.mesh.castShadow=!0,this.setChar(t),this.shadow=new ht(new ye(1.5,.9),new Re({map:Wg(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.group.add(this.mesh,this.shadow)}setChar(t){if(this.charId===t)return;this.charId=t;let e=_h.get(t);e||(e=new mu(Fu(t)),e.magFilter=e.minFilter=Ne,e.generateMipmaps=!1,e.colorSpace=pn,_h.set(t,e)),this.map&&this.map.dispose(),this.map=e.clone(),this.map.needsUpdate=!0,this.map.repeat.set(1/$s.length,1/3),this.mesh.material.map=this.map,this.mesh.material.needsUpdate=!0}get def(){return He[this.charId]}place(t,e,n){return this.x=t,this.z=e,n&&(this.dir=n),this.sync(),this}face(t,e){const n=t-this.x,s=e-this.z;this.dir=Math.abs(n)>Math.abs(s)?n>0?"r":"l":s>0?"f":"b"}walkTo(t,e,n=4){return this.target&&this.target.res(),globalThis.__G?.fast?(this.place(t,e,this.dir),Promise.resolve()):new Promise(s=>{this.target={x:t,z:e,speed:n,res:s}})}stop(){if(this.target){const t=this.target.res;this.target=null,t()}this.moving=!1}update(t){if(this.t+=t,this.target){const e=this.target.x-this.x,n=this.target.z-this.z,s=Math.hypot(e,n),r=this.target.speed*t;if(s<=r){this.x=this.target.x,this.z=this.target.z;const a=this.target.res;this.target=null,this.moving=!1,a()}else this.x+=e/s*r,this.z+=n/s*r,this.face(this.target.x,this.target.z),this.moving=!0}this.sync()}sync(){let t=this.pose||(this.moving?"walk"+Math.floor(this.t*8)%4:"idle"+Math.floor(this.t*1.6)%2);this.pose==="dance"&&(t=Math.floor(this.danceBeat)%2?"dance1":"dance2");const e=Math.max(0,$s.indexOf(t)),n=this.dir==="f"?0:this.dir==="b"?1:2,s=$s.length,r=this.dir==="l";this.map.repeat.x=(r?-1:1)/s,this.map.offset.set((e+(r?1:0))/s,1-(n+1)/3),this.group.position.set(this.x,this.y+this.float,this.z),this.mesh.rotation.z=this.roll,this.group.visible=!this.hidden,this.shadow.visible=this.y+this.float<.6;const a=this.mesh.material;this.alpha<1?(a.transparent=!0,a.opacity=this.alpha,a.alphaTest=.05):a.transparent&&(a.transparent=!1,a.opacity=1,a.alphaTest=.5)}dispose(){this.map.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}class Bu{constructor(t,e){this.id=t,this.def=e,this.group=new ce,this.boxes=[],this.inters=[],this.triggers=[],this.actors=[],this.spawns={},this.masked=[],this.updaters=[],this.photos=[],this.guards=[],this.lasers=[],this.occluders=[],this.props=[],this.flick=[],this.named={}}actor(t){return this.actors.find(e=>e.id===t)}inter(t){return this.inters.find(e=>e.id===t)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.userData.own&&n.map.dispose(),n.dispose()}});for(const t of this.actors)t.dispose()}}function $g(i,t){return new qe({transparent:!0,depthWrite:!1,side:Pe,blending:Ai,uniforms:{col:{value:new zt(i)},k:{value:t},time:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying float vL; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vL = uv.y; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 col; uniform float k; varying vec3 vN; varying vec3 vV; varying float vL; float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); } void main(){ float edge = pow(abs(dot(normalize(vN), vV)), 1.6); float along = pow(clamp(vL, 0.0, 1.0), 0.8); float n = 0.85 + 0.15 * h(floor(gl_FragCoord.xy / 3.0)); gl_FragColor = vec4(col * edge * along * k * n, 1.0); }"})}class zu{constructor(t,e){this.room=t,this.G=e,this.slots={n:[],w:[],e:[]},this.nLights=0}overlaps(t,e,n,s,r,a){return this.slots[t].some(o=>o!==a&&e<o.a1-.02&&n>o.a0+.02&&s<o.y1-.02&&r>o.y0+.02)}freeAlong(t,e,n,s,r,a){const o=(t==="n"?this.w:this.d)/2-n-.1;for(let c=0;c<60;c++){const h=(c%2?1:-1)*Math.ceil(c/2)*.2,l=Math.max(-o,Math.min(o,e+h));if(!this.overlaps(t,l-n,l+n,s,r,a))return l}return e}wallSlot(t,e,n,s,r,a={}){const o=n/2,c=s-r/2,h=s+r/2,l=this.slots[t],d=t==="n"?"x":"z";if(a.fixed){const g={a0:e-o,a1:e+o,y0:c,y1:h,fixed:!0,obj:a.obj,axis:d,follow:[]};l.push(g);for(const v of l)if(v!==g&&!v.fixed&&v.a0<g.a1&&v.a1>g.a0&&v.y0<h&&v.y1>c){const u=(v.a0+v.a1)/2,f=(v.a1-v.a0)/2,x=this.freeAlong(t,u,f,v.y0,v.y1,v)-u;v.a0+=x,v.a1+=x;for(const b of[v.obj,...v.follow])b&&(b.position[d]+=x)}return e}const p=this.freeAlong(t,e,o,c,h),m={a0:p-o,a1:p+o,y0:c,y1:h,fixed:!1,obj:a.obj,axis:d,follow:[]};return l.push(m),a.obj&&(a.obj.userData.slot=m),p}get w(){return this.room.def.w}get d(){return this.room.def.d}mat(t,e="plaster"){return t.color&&!t.tex?new qn({map:gg(typeof t.color=="number"?t.color:new zt(t.color).getHex()),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1}):new qn({map:Ze(t.tex||e,t.tint),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1})}texBox(t,e,n,s,r){const a=new Ke(t,e,n),o=this.mat(s,r);if(o.map){const c=o.map.unit||2,h=a.attributes.uv,l=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let d=0;d<6;d++)for(let p=0;p<4;p++){const m=d*4+p;h.setXY(m,h.getX(m)*l[d][0]/c,h.getY(m)*l[d][1]/c)}}return new ht(a,o)}tag(t,e,n){e.mask&&this.room.masked.push({obj:t,mask:e.mask,box:n}),e.name&&(this.room.named[e.name]=t)}floor(t="floor",e={}){const n=e.apron??(e.d==null&&e.z==null&&!e.y?7:0),s=this.texBox(e.w||this.w,.4,(e.d||this.d)+n,{tex:t,...e});return s.position.set(e.x||0,-.2+(e.y||0),(e.z||0)+n/2),s.receiveShadow=!0,this.room.group.add(s),this.tag(s,e),s}walls(t="plaster",e={}){const n=e.h||5,s=this.w,r=this.d,a=.4,o=(c,h,l,d)=>{const p=this.texBox(c,n,h,{tex:t,...e});return p.position.set(l,n/2,d),p.receiveShadow=!0,this.room.group.add(p),p};if(e.n!==!1&&o(s+a*2,a,0,-r/2-a/2),e.w!==!1&&o(a,r,-s/2-a/2,0),e.e!==!1&&o(a,r,s/2+a/2,0),e.skirt!==!1){const h=(g,v)=>{const u=this.texBox(a,n,9,{tex:t,...e});u.material.color.setHex(4866624),u.position.set(g,n/2,v),this.room.group.add(u)},l=(g,v,u,f,_,x,b)=>{const U=new ht(new Ke(g,v,u),b);return U.position.set(f,_,x),this.room.group.add(U),U};e.w!==!1&&h(-s/2-a/2,r/2+9/2),e.e!==!1&&h(s/2+a/2,r/2+9/2);const d=new Re({color:328452});e.w!==!1&&l(a,14,r+9,-s/2-a/2,n+7,9/2,d),e.e!==!1&&l(a,14,r+9,s/2+a/2,n+7,9/2,d);const p=this.texBox(s+a*2,.22,.5,{tex:"darkwood"});p.position.set(0,n-.11,-r/2+.05),this.room.group.add(p);const m=new ht(new ye(s+80,r+80),new Re({color:328452}));m.rotation.x=-Math.PI/2,m.position.set(0,-.42,0),this.room.group.add(m)}if(e.trim){const c=this.texBox(s,.5,.1,{tex:e.trim});c.position.set(0,.25,-r/2+.05),this.room.group.add(c);const h=this.texBox(s,.3,.15,{tex:e.trim});h.position.set(0,n-.15,-r/2+.07),this.room.group.add(h)}}collider(t,e,n,s){const r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),on:!0};return this.room.boxes.push(r),r}box(t,e,n,s,r,a={}){const o=this.texBox(n,r,s,a,"wood");o.position.set(t,(a.y||0)+r/2,e),o.castShadow=a.cast!==!1,o.receiveShadow=!0,a.ry&&(o.rotation.y=a.ry),this.room.group.add(o);let c;return a.solid!==!1&&!(a.y>2.2)&&(c=this.collider(t-n/2,e-s/2,t+n/2,e+s/2),o.userData.box=c),this.tag(o,a,c),o}decal(t,e={}){const n=t.image,s=e.w||(t.userData.lw??n.width)/An,r=e.h||(t.userData.lh??n.height)/An,a=e.glow?new Re({map:t,transparent:!0,alphaTest:.1,color:e.color||16777215}):new qn({map:t,transparent:!0,alphaTest:.1});e.opacity!=null&&(a.opacity=e.opacity,a.alphaTest=.01);const o=new ht(new ye(s,r),a),c=e.y??2.4,h=!e.flat&&!e.noSlot&&(e.wall==="w"||e.wall==="e"||e.z==null||Math.abs(e.z-(-this.d/2+.03))<.15);if(e.wall==="w")o.position.set(-this.w/2+.03,c,h?this.wallSlot("w",e.at||0,s,c,r,{obj:o}):e.at||0),o.rotation.y=Math.PI/2;else if(e.wall==="e")o.position.set(this.w/2-.03,c,h?this.wallSlot("e",e.at||0,s,c,r,{obj:o}):e.at||0),o.rotation.y=-Math.PI/2;else if(e.flat)o.position.set(e.x||0,e.y??.03,e.z||0),o.rotation.x=-Math.PI/2;else{const l=e.x??e.at??0;o.position.set(h&&s<this.w*.6?this.wallSlot("n",l,s,c,r,{obj:o}):l,c,e.z??-this.d/2+.03)}return e.ry&&(o.rotation.y=e.ry),o.receiveShadow=!e.glow,this.room.group.add(o),this.tag(o,e),o}poster(t,e,n={}){return this.decal(xg(t,e,n),n)}sprite(t,e,n,s={}){const r=typeof t=="string"?yg(t):t,a=r.image,o=s.scale||1,c=(r.userData.lw??a.width)/An*o,h=(r.userData.lh??a.height)/An*o,l=new ye(c,h);l.translate(0,h/2,0),s.glow||Ou(l);const d=s.glow?new Re({map:r,alphaTest:.3,side:Pe,transparent:s.opacity!=null,opacity:s.opacity??1}):new qn({map:r,alphaTest:.3,side:Pe,emissive:s.emissive||0}),p=new ht(l,d);if(p.position.set(e,s.y||0,n),p.castShadow=s.cast!==!1&&!s.glow,s.flipX&&(p.scale.x=-1),this.room.group.add(p),!s.glow&&!s.thin&&h>.8&&!s.mask){const g=Math.min(4,2+Math.floor(h/2));for(let v=1;v<=g;v++){const u=new qn({map:r,alphaTest:.3,side:Pe,color:new zt().setScalar(.62-v*.07)}),f=new ht(l,u);f.position.z=-.055*v,f.castShadow=!1,p.add(f)}}let m;if(s.solid){const g=s.solid===!0?Math.min(c,1.2)/2:s.solid;m=this.collider(e-g,n-.3,e+g,n+.3),p.userData.box=m}return this.room.props.push({x:e,z:n,y:s.y||0,w:c,kind:typeof t=="string"?t:"tex",box:m}),this.tag(p,s,m),p}actor(t,e,n,s={}){const r=new Nl(t,s.id||t);return r.place(e,n,s.dir||"f"),s.pose&&(r.pose=s.pose),r.mask=s.mask,s.hidden&&(r.hidden=!0),this.room.actors.push(r),this.room.group.add(r.group),s.mask&&this.room.masked.push({obj:r.group,mask:s.mask}),r}inter(t,e,n,s){const r={id:t,x:e,z:n,r:s.r||1.7,label:s.label,fn:s.fn,mask:s.mask,cond:s.cond,y:s.y??2.2,enabled:!0,quiet:s.quiet};if(!s.quiet){const a=new ht(new Pl(.13),new Re({color:16771488}));a.position.set(e,r.y+.5,n),r.marker=a,this.room.group.add(a)}return this.room.inters.push(r),s.photo&&this.photo(t,s.photo,e,n,{cond:s.cond,mask:s.mask}),r}look(t,e,n,s,r,a={}){const o=typeof r=="function"?r:l=>l.run(r),c=a.egg?async l=>{await o(l),l.egg(a.egg)}:o,h=this.inter(t,e,n,{label:s,...a,fn:c});return a.egg&&(h.egg=a.egg),h}npc(t,e,n,s={}){const r=this.actor(t,e,n,s),a=this.collider(e-.4,n-.25,e+.4,n+.25);return r.box=a,s.mask&&this.room.masked.push({obj:new Ce,mask:s.mask,box:a}),s.talk&&this.inter(s.id||t,e,n+.2,{label:s.label||"Поговорить: "+He[t].name,fn:async o=>{r.face(o.player.x,o.player.z),o.player.face(r.x,r.z),await(typeof s.talk=="function"?s.talk(o,r):o.run(s.talk))},r:1.9,y:2.6,mask:s.mask,cond:s.cond}),r}door(t,e,n){const s=n.w||2.2,r=n.h||3.4;let a=e,o,c;if(n.wall==="s")c=this.southExit(e,n.sign||n.label),o=this.d/2-1.7;else{if(c=Sg(s,r,n.col||"#5a3a22",n.sign,!!n.double||s>2.6,n.glow),n.wall==="w"||n.wall==="e"){const h=n.wall==="w"?-1:1,l=this.wallSlot(n.wall,e,s+.8,r/2,r+.6,{fixed:!0,obj:c});c.position.set(h*(this.w/2),0,l),c.rotation.y=-h*Math.PI/2,a=h*(this.w/2-.9),o=l}else{const h=n.z??-this.d/2;c.position.set(e,0,h),n.z==null&&this.wallSlot("n",e,s+.8,r/2,r+.6,{fixed:!0,obj:c}),o=h+.9}this.room.group.add(c),this.tag(c,{mask:n.mask})}return this.inter(t,a,o,{label:n.label,mask:n.mask,y:n.wall==="s"?2.7:3.2,fn:async h=>{if(n.cond&&!n.cond()){h.sfx("locked"),n.locked&&await h.run(typeof n.locked=="string"?["~: "+n.locked]:n.locked);return}if(n.fn)return n.fn(h);n.wall!=="s"?(h.sfx("door"),Mg(c)):h.sfx("step"),await h.goto(n.to,n.spot||"start",{fade:n.fade})}}),c}southExit(t,e){const n=new ce,s=this.d/2-1.2,r=new qn({map:Ze("gold")}),a=this.texBox(2.2,.03,3.2,{tex:"carpet"});a.position.set(t,.015,s+1.2),a.receiveShadow=!0,n.add(a);for(const m of[-1,1]){const g=new ht(new ne(.06,.06,.95,8),r);g.position.set(t+m*1.35,.48,s),g.castShadow=!0,n.add(g);const v=new ht(new ne(.2,.24,.06,12),r);v.position.set(t+m*1.35,.03,s),n.add(v);const u=new ht(new vn(.1,10,8),r);u.position.set(t+m*1.35,1,s),n.add(u)}const o=e.length>24?e.slice(0,23)+"…":e,c=Math.max(64,Math.min(140,o.length*6+26)),h=new ht(new ye(c/40,.42),new Re({map:Je(c,17,m=>{m.fillStyle="#123a22",m.fillRect(0,0,c,17),m.strokeStyle="#d4ae48",m.strokeRect(.5,.5,c-1,16),m.fillStyle="#7dffb0",m.fillRect(4,7,7,3),m.fillRect(6,5,2,7),m.fillRect(5,6,4,5),_s(m,o,c/2+5,5,{size:7,col:"#e8fff0",align:"center"})},"sexit2"+e)}));h.position.set(t,.32,s+.25),h.rotation.x=-1,n.add(h);const l=new ht(new Ke(c/40+.1,.06,.4),r);l.position.set(t,.1,s+.18),n.add(l);const d=new ht(new ye(.9,.9),new Re({map:Je(16,16,m=>{m.fillStyle="#ffe9a8";for(let g=0;g<6;g++)m.fillRect(2+g,4+g,12-g*2,1);m.fillRect(6,0,4,5)},"sarrow"),transparent:!0,opacity:.85}));d.rotation.x=-Math.PI/2,d.position.set(t,.035,s+1.3),n.add(d);const p=new Gs(10485704,3,4,1.6);return p.position.set(t,.8,s+.6),n.add(p),this.room.group.add(n),n}wall(t,e,n,s,r={}){const a=Math.abs(n-t)||.4,o=Math.abs(s-e)||.4,c=r.h||4.2,h=this.box((t+n)/2,(e+s)/2,a,o,c,{tex:r.tex||"plaster",tint:r.tint,...r}),l=h.material;l.transparent=!0;const d=r.wide?-this.w/2:Math.min(t,n)-.4,p=r.wide?this.w/2:Math.max(t,n)+.4;if(this.room.occluders.push({mesh:h,x0:d,x1:p,z:Math.max(e,s),h:c,depth:r.depth}),r.trim!==!1){const m=this.box((t+n)/2,(e+s)/2,a+.06,o+.06,.25,{tex:"darkwood",y:c-.25,solid:!1,cast:!1}),g=m.material;g.transparent=!0,this.room.occluders.push({mesh:m,x0:d,x1:p,z:Math.max(e,s),h:c,depth:r.depth})}return h}stairs(t,e,n,s=8,r={}){const a=new ce;for(let o=0;o<s;o++){const c=this.texBox(n,.28,.5,{tex:r.tex||"stage"});if(c.position.set(t,.14+o*.28,e-o*.5),c.receiveShadow=!0,c.castShadow=!0,a.add(c),r.runner!==!1){const h=this.texBox(n*.55,.02,.52,{tex:"carpet"});h.position.set(t,.29+o*.28,e-o*.5),a.add(h)}}return this.room.group.add(a),this.collider(t-n/2,e-s*.5,t+n/2,e-.6),a}spawn(t,e,n,s="f"){this.room.spawns[t]={x:e,z:n,dir:s}}ambient(t,e,n){const s=n!=null?new O1(n,t,e):new W1(t,e);return this.room.group.add(s),s}sun(t,e,n=6,s=14,r=8){const a=new G1(t,e);a.position.set(n,s,r),a.castShadow=!0,a.shadow.mapSize.set(1024,1024);const o=Math.max(this.w,this.d)/2+4;return Object.assign(a.shadow.camera,{left:-o,right:o,top:o,bottom:-o,near:1,far:60}),a.shadow.bias=-.002,this.room.group.add(a,a.target),a}light(t,e,n,s,r,a=12,o={}){const c=new Gs(s,r,a,1.4);if(c.position.set(t,e,n),o.pool||++this.nLights>10&&!o.force&&!o.name&&!o.mask){const h=Math.min(4,a*.32),l=new ht(new ye(h*2,h*2),new Re({map:vg(),color:s,transparent:!0,opacity:Math.min(.55,.06*r),blending:Ai,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,.03,n),l.renderOrder=2,this.room.group.add(l),c}return this.room.group.add(c),o.flicker&&this.room.flick.push({l:c,base:r,s:o.flicker}),o.mask&&this.room.masked.push({obj:c,mask:o.mask}),o.name&&(this.room.named[o.name]=c),c}spot(t,e,n,s,r,a,o,c={}){const h=new Au(a,o,c.dist||40,c.angle||.45,c.pen??.5,1.1);if(h.position.set(t,e,n),h.target.position.set(s,0,r),c.shadow!==!1&&(h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-.003,h.shadow.camera.near=1,h.shadow.camera.far=50),this.room.group.add(h,h.target),c.cone){const l=Math.hypot(s-t,e,r-n),d=Math.tan(c.angle||.45)*l,p=new Ll(d,l,24,1,!0);p.translate(0,-l/2,0),p.rotateX(-Math.PI/2);const m=new ht(p,$g(a,(c.cone===!0?.07:c.cone)*2.2));m.position.set(t,e,n),m.lookAt(s,0,r),this.room.group.add(m),h.cone=m}return c.name&&(this.room.named[c.name]=h),c.mask&&this.room.masked.push({obj:h,mask:c.mask}),h}trigger(t,e,n,s,r,a=!0){const o={x0:t,z0:e,x1:n,z1:s,fn:r,once:a,done:!1,inside:!1};return this.room.triggers.push(o),o}photo(t,e,n,s,r={}){this.room.photos.push({id:t,name:e,x:n,z:s,cond:r.cond,mask:r.mask,any:r.any})}onUpdate(t){this.room.updaters.push(t)}particles(t,e={}){const n=e.count||(t==="rain"?500:120),s=this.w+4,r=this.d+4,a=e.top||9,o=new Float32Array(n*3),c=new Float32Array(n);for(let m=0;m<n;m++)o[m*3]=(Math.random()-.5)*s,o[m*3+1]=Math.random()*a,o[m*3+2]=(Math.random()-.5)*r,c[m]=.5+Math.random();const h=new Ue;h.setAttribute("position",new gn(o,3));const l={dust:16771264,rain:10139872,petals:16298192,sparks:16760928,snow:16777215,confetti:16765024,glitch:6356960}[t],d=new e1(h,new pu({color:e.color||l,size:t==="rain"?.09:t==="dust"?.07:.14,transparent:!0,opacity:t==="dust"?.5:.8,depthWrite:!1,blending:t==="petals"||t==="snow"?Ti:Ai}));this.room.group.add(d);const p={dust:.15,rain:18,petals:1.2,sparks:-1.5,snow:1,confetti:2,glitch:-3}[t];return this.onUpdate((m,g)=>{if(d.visible){for(let v=0;v<n;v++)o[v*3+1]-=p*c[v]*m,t!=="rain"&&(o[v*3]+=Math.sin(g*c[v]+v)*m*.3),o[v*3+1]<0&&(o[v*3+1]=a),o[v*3+1]>a&&(o[v*3+1]=0);h.attributes.position.needsUpdate=!0}}),e.name&&(this.room.named[e.name]=d),this.tag(d,e),d}guard(t,e,n){const s=this.actor(t,e[0][0],e[0][1],{id:n.id});s.mesh.material.emissive.set(3814456);const r=new Gs(n.color||16728128,3,3,1.5);r.position.set(0,2.6,.4),s.group.add(r);const a=n.range||5,o=n.half||.5,c=new er(a,16,-o,o*2);c.rotateX(-Math.PI/2);const h=new ht(c,new Re({color:n.color||16728128,transparent:!0,opacity:.14,depthWrite:!1}));h.position.y=.05,this.room.group.add(h);const l={actor:s,path:e,i:0,speed:n.speed||2.2,range:a,half:o,cone:h,wait:0,onCatch:n.onCatch,ang:0,off:0,pause:n.pause??.8,active:!0};return this.room.guards.push(l),l}laser(t,e,n,s,r){const a=Math.hypot(n-t,s-e),o=new ht(new Ke(a,.08,.08),new Re({color:r.color||16719952}));o.position.set((t+n)/2,1,(e+s)/2),o.rotation.y=-Math.atan2(s-e,n-t),this.room.group.add(o);const c=o.clone();c.position.y=1.9,o.add(c),c.position.set(0,.9,0),c.rotation.set(0,0,0);const h={mesh:o,x0:t,z0:e,x1:n,z1:s,period:r.period||3,duty:r.duty??.5,phase:r.phase||0,on:!0,onHit:r.onHit,active:!0};return this.room.lasers.push(h),h}crowd(t,e,n,s,r=1.5,a=1.6,o="b"){t.forEach((c,h)=>this.actor(c,e+h%s*r+Math.floor(h/s)%2*.5,n+Math.floor(h/s)*a,{dir:o,id:"crowd_"+h+"_"+c}))}table(t,e,n=2.4,s=1.2,r={}){const a=this.box(t,e,n,s,.15,{tex:r.tex||"wood",y:1,...r});for(const[o,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(t+o*(n/2-.15),e+c*(s/2-.15),.15,.15,1,{tex:"darkwood",solid:!1,mask:r.mask});return a}curtain(t,e,n,s=6,r={}){const a=this.box(t,e-.06,n,.12,s,{color:r.lining??2754056,solid:r.solid??!1,cast:!1,y:r.y});return this.drape(t,e+.05,n,s,{y:r.y,tint:r.tint,folds:r.folds,parent:r.parent}),a}drape(t,e,n,s,r={}){const a=r.folds??Math.max(3,Math.round(n*1.6)),o=new ye(n,s,a*6,r.scallop?6:1),c=o.attributes.position;for(let p=0;p<c.count;p++){const m=c.getX(p),g=c.getY(p),v=(m/n+.5)*a*Math.PI*2;c.setZ(p,Math.sin(v)*.09),r.scallop&&g<-s/2+.01&&c.setY(p,g+(1-Math.abs(Math.cos(v/2)))*.35)}o.computeVertexNormals();const h=Je(32,32,p=>{const m=new zt(r.tint||"#8e1424");for(let g=0;g<32;g++)for(let v=0;v<32;v++){const u=.82+.18*Math.sin(v/32*Math.PI*2)+((v*7+g*13)%11===0?.06:0)-g/32*.12,f=m.clone().multiplyScalar(u);p.fillStyle="#"+f.getHexString(),p.fillRect(v,g,1,1)}},"drapeTex"+(r.tint||""));h.wrapS=fs,h.repeat.set(a,1);const l=h.clone();l.needsUpdate=!0,l.wrapS=fs,l.repeat.set(a,1);const d=new ht(o,new qn({map:l,side:Pe}));return d.position.set(t,(r.y||0)+s/2,e),d.receiveShadow=!0,(r.parent||this.room.group).add(d),d}}globalThis.__charSheet=Fu;const qv=Object.freeze(Object.defineProperty({__proto__:null,Actor:Nl,Builder:zu,Room:Bu},Symbol.toStringTag,{value:"Module"})),Br="e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12",co="e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12",xh="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .",yh=". a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .",qg="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .",bh={theater:{bpm:92,parts:[{inst:"box",d:4,seq:Br+" | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12"},{inst:"upright",d:4,seq:xh,vol:.8},{inst:"piano",d:4,seq:yh,vol:.5},{inst:"drone",seq:"a1:96 .:96",vol:.5}]},backstage:{bpm:60,parts:[{inst:"drone",seq:"d2:40 .:24",vol:.7},{inst:"box",seq:"a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30",vol:.7},{inst:"piano",seq:".:50 d3:6 .:44 a2:6 .:21",vol:.5}]},horror:{bpm:50,parts:[{inst:"drone",seq:"c2:48 c#2:16",vol:.9},{inst:"piano",seq:"eb6:2 .:30 d6:2 .:14 f#5:2 .:53",vol:.5},{inst:"piano",seq:"c2:4 .:75",vol:.8},{inst:"box",seq:".:37 g5:1 gb5:1 f5:2 .:60",vol:.4}]},heist:{bpm:108,parts:[{inst:"drums",seq:"k...h.s.k.h.s.h.k...h.s.k.hks.hh",vol:.55},{inst:"bass",d:2,vol:.9,seq:"e2 e2 f2 f2 f#2 f#2 f2 f2 | e2 e2 f2 f2 f#2 f#2 f2 f2 | c2 c2 c#2 c#2 d2 d2 c#2 c#2 | b1 b1 c2 c2 c#2 c#2 c2 b1"},{inst:"strings",d:16,vol:.5,seq:"e3+g3+b3 | e3+g3+c4 | c3+e3+a3 | b2+d#3+f#3+a3"},{inst:"pluck",d:2,vol:.35,seq:".:8 b4 . b4 c5 . b4 . | .:8 b4 . b4 c5 . b4 . | .:8 a4 . a4 bb4 . a4 . | .:8 f#4 . f#4 g4 . a4 ."},{inst:"lead",vol:.75,seq:".:64 | e5:6 g5:2 f#5:8 | b4:6 e5:2 d#5:8 | e5:4 b5:4 g5:4 e5:4 | f#5:12 .:4 | a5:6 g5:2 e5:8 | c5:6 a4:2 b4:8 | e5:4 g5:2 f#5:2 d#5:4 b4:4 | e5:16"}]},chase:{bpm:140,parts:[{inst:"drums",seq:"k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs",vol:.9},{inst:"bass",d:1,seq:"d2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2"},{inst:"lead",d:2,vol:.8,seq:"d5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4"},{inst:"pad",seq:"d3+a3:32 bb2+f3:32"}]},school:{bpm:104,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 c3 a2 a2 f2 f2 g2 g2"},{inst:"pluck",d:2,vol:.7,seq:"e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},school_soft:{bpm:76,parts:[{inst:"piano",d:8,vol:.7,seq:"c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4"},{inst:"box",d:4,vol:.7,seq:".:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16"},{inst:"pad",seq:"c3+g3:32 f3+c4:16 g3+d4:16",vol:.8}]},noir:{bpm:62,swing:.25,parts:[{inst:"upright",d:4,vol:.9,seq:"d2 a1 d2 c2 | bb1 f2 bb1 a1 | g1 d2 g2 bb1 | a1 e2 a1 c#2 | d2 f2 a2 f2 | g1 bb1 d2 g2 | e2 bb1 a1 e2 | d2 a1 d2 ."},{inst:"drums",seq:"h.......s.......h.....h.s.....hh",vol:.32},{inst:"piano",d:16,vol:.42,seq:"d3+f3+a3+c4+e4 | bb2+d3+f3+a3+c4 | g2+bb2+d3+f3+a3 | a2+c#3+g3+bb3 | d3+f3+a3+c4 | g2+bb2+d3+f3+a3 | e3+g3+bb3+d4 | a2+c#3+g3+f4"},{inst:"sax",vol:.75,seq:".:8 a4:6 f4:2 | e4:10 d4:2 f4:4 | g4:6 ab4:2 g4:4 f4:2 d4:2 | c#4:12 .:4 | .:4 d5:4 f5:6 e5:2 | d5:8 c5:4 bb4:4 | a4:6 ab4:2 g4:6 e4:2 | d4:16"},{inst:"pad",vol:.22,seq:"d3+a3:64 g2+d3:32 a2+e3:32"}]},fairy:{bpm:92,parts:[{inst:"box",d:4,seq:"c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12"},{inst:"upright",d:12,vol:.7,seq:"f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2"},{inst:"pluck",d:2,vol:.5,seq:"f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6"},{inst:"strings",vol:.6,seq:".:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12"}]},idol_agency:{bpm:128,parts:[{inst:"drums",seq:"k.h.k.h.k.h.k.h.",tag:"drums"},{inst:"drums",seq:"....c.......c...",tag:"drums",vol:.8},{inst:"bass",d:2,tag:"bass",seq:"c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1"},{inst:"pad",tag:"keys",seq:"c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16"},{inst:"lead",d:2,tag:"lead",seq:"e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8"}]},idol_own:{bpm:122,parts:[{inst:"drums",seq:"k..hs.hk.khhs.h.",tag:"drums"},{inst:"bass",d:2,tag:"bass",seq:"a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 ."},{inst:"pad",tag:"keys",seq:"a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16"},{inst:"pluck",d:1,tag:"arp",vol:.5,seq:"a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5"},{inst:"sax",d:2,tag:"lead",vol:.9,seq:"a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8"}]},diva:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"strings",d:2,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"drums",seq:"r..r..r.r..r..r.",vol:.6}]},collapse:{bpm:138,parts:[{inst:"box",d:3,seq:"e5 a5 c6 b5 g#5 a5 e5 c5 d5"},{inst:"bass",d:7,seq:"a1 d2 e2 c2"},{inst:"drums",seq:"k..k.s.k.h..s.kh",vol:.7},{inst:"drums",seq:"..h..h.h.t",vol:.5},{inst:"pad",seq:"a2+eb3:32 bb2+e3:32"},{inst:"sax",d:5,vol:.4,seq:"a4 . d5 . c#5 ."}]},dressing:{bpm:66,parts:[{inst:"box",d:4,seq:Br,vol:.8},{inst:"pad",seq:"a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12",vol:.9}]},fin_argue:{bpm:84,parts:[{inst:"strings",d:1,vol:.55,seq:"d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 | c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3"},{inst:"drums",seq:"k..k............k..k...........",vol:.7},{inst:"organ",vol:.35,seq:"d2+ab2+c#3:32 eb2+a2+d3:32"},{inst:"strings",vol:.6,seq:".:12 f5+b5:2 .:18 g#5+d6:2 .:14 a5+eb6:2 .:14"},{inst:"drone",vol:.6,seq:"d1:64"}]},fin_overture:{bpm:108,parts:[{inst:"strings",d:4,seq:Br,vol:1.2},{inst:"organ",d:4,seq:yh,vol:.9},{inst:"upright",d:4,seq:xh},{inst:"drums",seq:"t...h...h...",vol:.5}]},fin_queen:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"voice",d:2,vol:.9,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"strings",d:16,vol:.8,seq:"a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4"},{inst:"drums",seq:"r..r..r.r..r..r.k.......s.......",vol:.6}]},fin_girl:{bpm:100,parts:[{inst:"voice",d:4,seq:co,vol:.8},{inst:"pluck",d:2,vol:.6,seq:"a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6"},{inst:"upright",d:4,seq:qg,vol:.7},{inst:"strings",vol:.5,seq:".:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12"}]},fin_mirror:{bpm:126,parts:[{inst:"drums",seq:"k..hs..hk.k.s.hh",vol:.9},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3"},{inst:"strings",d:1,vol:.6,seq:"a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 ."},{inst:"lead",d:2,seq:"e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4"},{inst:"voice",d:16,vol:.5,seq:"a4 b4 a4 g#4 c5 b4 d5 c#5"}]},fin_reveal:{bpm:66,parts:[{inst:"box",d:4,seq:co},{inst:"pad",seq:".:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12",vol:.9},{inst:"voice",d:12,vol:.35,seq:".:96 e4 e4 e4 f#4 f#4 e4 d4 c#4"}]},fin_minuet:{bpm:112,parts:[{inst:"pluck",d:2,vol:.7,seq:"g4 d4 g4 a4 b4 c5 | d5:4 g4:4 g4:4 | e5 c5 d5 e5 f#5 g5 | g4:4 g4:4 . . | c5 d5 c5 b4 a4 b4 | c5:4 b4 a4 b4 g4 | a4 b4 a4 g4 f#4 g4 | a4:12"},{inst:"upright",d:4,vol:.6,seq:"g2 b2 d3 | b2 d3 g3 | c3 e3 g3 | b2 d3 g3 | a2 c3 e3 | g2 b2 d3 | d3 f#3 a3 | d2 f#2 a2"},{inst:"strings",vol:.45,seq:"g3+b3+d4:12 g3+b3+d4:12 c4+e4+g4:12 g3+b3+d4:12 a3+c4+e4:12 g3+b3+d4:12 d4+f#4+a4:12 d4+f#4+a4:12"}]},fin_storm:{bpm:76,parts:[{inst:"drone",seq:"d2:64",vol:.8},{inst:"strings",d:2,vol:.6,seq:"d4 f4 d4 f4 d4 f4 d4 f4 | c#4 e4 c#4 e4 c#4 e4 c#4 e4 | d4 f4 d4 f4 d4 f4 d4 f4 | a3 c#4 e4 g4 a4 g4 e4 c#4"},{inst:"bass",d:4,seq:"d2 d2 d2 d2 | c#2 c#2 c#2 c#2 | d2 d2 d2 d2 | a1 a1 a1 a1"},{inst:"drums",seq:"k.......k..k....",vol:.7},{inst:"voice",d:16,vol:.4,seq:"d5 c#5 d5 e5"}]},fin_bows:{bpm:120,parts:[{inst:"drums",seq:"k.h.s.h.k.k.s.hh",vol:.8},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 ."},{inst:"organ",seq:"a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16"},{inst:"lead",d:2,seq:"e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4"},{inst:"strings",d:4,vol:.8,seq:"c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5"}]},party:{bpm:96,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 e3 f2 a2 g2 b2 c3 g2"},{inst:"box",d:2,seq:"g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},menu_box:{bpm:132,vol:.85,parts:[{inst:"box",d:1,seq:".:8 .:3 g#4:8 g#4:5 f#4:4 f4:2 f#4:3 g#4:6 f#4:4 f4:2 f#4:4 g#4:6 f#4:4 f4:2 f#4:4 g#4:7 .:3 f4:2 f#4:4 g#4:6 f#4:4 f4:2 f#4:4 f4:7 c#4:4 f4:2 f#4:3 f4:6 f#4:3 f4:5 f#4:3 d#4:5 c#4:4 f4:3 f#4:3 g#4:6 f#4:5 f4:2 f#4:3 g#4:6 f#4:10 g#4:6 c#5:3 c5:4 c#5:3 f#4:2 f4:5 d#4:2 c#4:3 d#4:7 f4:3 f#4:2 f4:6 f#4:2 f4:5 a#3:2 g#3:7 g#3:8 g#3:5 .:4"},{inst:"box",d:4,vol:.3,seq:"c#3:4 g#3:4 f4:4 g#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | f#3:4 c#4:4 a#4:4 c#4:4 | f#3:4 c#4:4 a#4:4 c#4:4 | c#3:4 g#3:4 f4:4 g#3:4 | c#3:4 g#3:4 f4:4 g#3:4 | g#2:4 d#3:4 c4:4 d#3:4 | g#2:4 d#3:4 c4:4 d#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | d#3:4 a#3:4 f#4:4 a#3:4 | f#3:4 c#4:4 a#4:4 c#4:4 | f#3:4 c#4:4 a#4:4 c#4:4 | c#3:4 g#3:4 f4:4 g#3:4 | c#3:4 g#3:4 f4:4 g#3:4 | g#2:4 d#3:4 c4:4 d#3:4"},{inst:"pad",d:16,vol:.16,seq:"c#3+f3+g#3:16 d#3+f#3+a#3:16 d#3+f#3+a#3:16 f#3+a#3+c#4:16 f#3+a#3+c#4:16 c#3+f3+g#3:16 c#3+f3+g#3:16 g#2+c3+d#3:16 g#2+c3+d#3:16 d#3+f#3+a#3:16 d#3+f#3+a#3:16 f#3+a#3+c#4:16 f#3+a#3+c#4:16 c#3+f3+g#3:16 c#3+f3+g#3:16 g#2+c3+d#3:16"}]},musicbox:{bpm:70,swing:.12,vol:.9,parts:[{inst:"box",d:4,seq:Br+" | .:12 | e6:4 c6:4 a5:4 | b5:8 g#5:4 | e5:12 | .:24"},{inst:"box",d:4,vol:.45,seq:"a3 . e4 | e3 . b3 | a3 . e4 | d3 . a3 | d3 . f3 | c3 . g3 | e3 . g#3 | a3 . c4 | a3 . e4 | a3 . e4 | e3 . b3 | e3 . g#3 | a3 . e4 | a3 . . | .:12"},{inst:"pad",seq:"a2+e3:96 .:96",vol:.35}]},morning:{bpm:60,parts:[{inst:"box",d:4,seq:co,vol:.7},{inst:"pad",seq:"a2+e3:48 d3+a3:24 e3+b3:24",vol:.7}]}},Xg={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function Yg(i){const t=/^([a-g])([#b]?)(-?\d)$/.exec(i);if(!t)return console.warn("[audio] неизвестная нота",i),440;const e=Xg[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)+(parseInt(t[3])+1)*12;return 440*Math.pow(2,(e-69)/12)}const Sh=new Map;function Mh(i){let t=Sh.get(i);if(t)return t;const e=[];let n=0;if(i.inst==="drums"&&!i.seq.includes(" "))for(const s of i.seq.replace(/\|/g,""))s!=="."&&e.push({step:n,len:1,notes:[s]}),n++;else for(const s of i.seq.split(/\s+/)){if(!s||s==="|")continue;const[r,a]=s.split(":"),o=a?parseFloat(a):i.d||1;r!=="."&&e.push({step:n,len:o,notes:r.split("+")}),n+=o}return t={evs:e,len:n},Sh.set(i,t),t}class jg{constructor(){this.ctx=null,this.cur=null,this.timer=null,this.amb=null,this.partFilter=null,this.musicFx=null,this.pendingMusic=null,this.pendingAmb=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[audio] WebAudio недоступен — игра продолжит работу без звука");return}const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),this.bMusic=e.createGain(),this.bSfx=e.createGain(),this.bVoice=e.createGain(),this.duckG=e.createGain(),this.musicFx=e.createBiquadFilter(),this.musicFx.type="lowpass",this.musicFx.frequency.value=2e4,this.bMusic.connect(this.musicFx),this.musicFx.connect(this.duckG),this.duckG.connect(n),this.bSfx.connect(n),this.bVoice.connect(n);const r=(this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate)).getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;const a=e.createBuffer(2,e.sampleRate*2.2,e.sampleRate);for(let o=0;o<2;o++){const c=a.getChannelData(o);for(let h=0;h<c.length;h++)c[h]=(Math.random()*2-1)*Math.pow(1-h/c.length,2.6)}if(this.rev=e.createConvolver(),this.rev.buffer=a,this.revG=e.createGain(),this.revG.gain.value=.22,this.rev.connect(this.revG),this.revG.connect(n),this.applyVolumes(),this.timer=setInterval(()=>this.tick(),40),this.pendingMusic){const o=this.pendingMusic;this.pendingMusic=null,this.music(o)}if(this.pendingAmb){const o=this.pendingAmb;this.pendingAmb=null,this.ambience(o)}}applyVolumes(){this.ctx&&(this.bMusic.gain.value=Me.music*.5,this.bSfx.gain.value=Me.sfx*.8,this.bVoice.gain.value=Me.voice*.5)}now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3}duck(t){this.ctx&&this.duckG.gain.setTargetAtTime(t?.55:1,this.ctx.currentTime,.15)}muffle(t){this.ctx&&this.musicFx&&this.musicFx.frequency.setTargetAtTime(t,this.ctx.currentTime,.2)}stepDur(t){return 60/t.bpm/4}music(t,e={}){if(t)try{const c=new Set(JSON.parse(localStorage.getItem("tom-tracks")||"[]"));c.has(t)||(c.add(t),localStorage.setItem("tom-tracks",JSON.stringify([...c])))}catch{}if(!this.ctx)return this.pendingMusic=t,this.now();if(this.cur&&this.cur.id===t&&!e.restart)return this.cur.t0;const n=this.ctx.currentTime,s=e.fade??1.2;if(this.cur){const c=this.cur.gain;c.gain.cancelScheduledValues(n),c.gain.setValueAtTime(c.gain.value,n),c.gain.linearRampToValueAtTime(0,n+s),setTimeout(()=>c.disconnect(),s*1e3+300),this.cur=null}if(!t)return n;const r=bh[t];if(!r)return console.warn("[audio] нет трека",t),n;const a=this.ctx.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r.vol??1,n+Math.min(s,.6)+.05),a.connect(this.bMusic);const o=n+(e.delay??.12);return this.cur={id:t,tr:r,t0:o,gain:a,next:r.parts.map(()=>0)},o}musicId(){return this.cur?this.cur.id:null}tick(){const t=this.cur;if(!t||!this.ctx)return;const e=this.ctx.currentTime+.25,n=this.stepDur(t.tr);t.tr.parts.forEach((s,r)=>{const{evs:a,len:o}=Mh(s);if(!(!a.length||!o))for(;;){const c=t.next[r],h=Math.floor(c/a.length),l=a[c%a.length];if(t.tr.once&&h>0)break;let d=t.t0+(h*o+l.step)*n;if(t.tr.swing&&l.step%2===1&&(d+=n*t.tr.swing),d>e)break;if(t.next[r]++,!(d<this.ctx.currentTime-.05)&&!(this.partFilter&&!this.partFilter(t.id,s)))for(const p of l.notes)this.voice(s.inst,p,d,l.len*n,s.vol??1,t.gain)}})}env(t,e,n,s,r,a,o,c){t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(c,e+n),t.exponentialRampToValueAtTime(Math.max(c*r,1e-4),e+n+s),t.setValueAtTime(Math.max(c*r,1e-4),Math.max(e+a,e+n+s)),t.exponentialRampToValueAtTime(1e-4,Math.max(e+a,e+n+s)+o)}osc(t,e,n,s,r,a=0){const o=this.ctx.createOscillator();return o.type=t,o.frequency.setValueAtTime(e,n),o.detune.value=a,o.connect(r),o.start(n),o.stop(s),o}noise(t,e,n,s=1){const r=this.ctx.createBufferSource();return r.buffer=this.noiseBuf,r.playbackRate.value=s,r.loop=!0,r.connect(n),r.start(t,Math.random()),r.stop(t+e),r}voice(t,e,n,s,r,a){const o=this.ctx;if(!o)return;const c=o.createGain();c.connect(a);const h=d=>{const p=o.createGain();p.gain.value=d,c.connect(p),p.connect(this.rev)};if(t==="drums"){if(e==="k"){const d=o.createOscillator();d.frequency.setValueAtTime(150,n),d.frequency.exponentialRampToValueAtTime(42,n+.12),d.connect(c),c.gain.setValueAtTime(.9*r,n),c.gain.exponentialRampToValueAtTime(.001,n+.22),d.start(n),d.stop(n+.25)}else if(e==="s"||e==="c"||e==="r"){const d=o.createBiquadFilter();d.type=e==="r"?"bandpass":"highpass",d.frequency.value=e==="c"?1200:e==="r"?1800:1500,d.connect(c),this.noise(n,.2,d),c.gain.setValueAtTime((e==="r"?.25:.5)*r,n),c.gain.exponentialRampToValueAtTime(.001,n+(e==="r"?.05:.16)),e!=="r"&&h(.2)}else if(e==="h"||e==="o"||e==="b"){const d=o.createBiquadFilter();d.type="highpass",d.frequency.value=e==="b"?4e3:7e3,d.connect(c),this.noise(n,.3,d);const p=e==="o"?.22:e==="b"?.12:.04;c.gain.setValueAtTime((e==="b"?.16:.2)*r,n),c.gain.exponentialRampToValueAtTime(.001,n+p)}else if(e==="t"){const d=o.createOscillator();d.frequency.setValueAtTime(200,n),d.frequency.exponentialRampToValueAtTime(90,n+.15),d.connect(c),c.gain.setValueAtTime(.5*r,n),c.gain.exponentialRampToValueAtTime(.001,n+.2),d.start(n),d.stop(n+.22)}return}const l=Yg(e);switch(t){case"piano":{this.env(c.gain,n,.005,.25,.25,s,.4,.26*r);const d=n+s+.6;this.osc("triangle",l,n,d,c);const p=o.createGain();p.gain.value=.3,p.connect(c),this.osc("sine",l*2,n,d,p),h(.35);break}case"box":{this.env(c.gain,n,.002,.5,.05,Math.min(s,.3),.9,.2*r);const d=n+1.6;this.osc("sine",l,n,d,c);const p=o.createGain();p.gain.value=.25,p.connect(c),this.osc("sine",l*3.01,n,d,p),h(.5);break}case"bass":{const d=o.createBiquadFilter();d.type="lowpass",d.frequency.setValueAtTime(900,n),d.frequency.exponentialRampToValueAtTime(220,n+.2),d.connect(c),this.env(c.gain,n,.005,.1,.7,s*.9,.08,.34*r),this.osc("sawtooth",l,n,n+s+.2,d),this.osc("square",l/2,n,n+s+.2,d,4);break}case"upright":{const d=o.createBiquadFilter();d.type="lowpass",d.frequency.value=600,d.connect(c),this.env(c.gain,n,.008,.25,.2,s*.8,.15,.5*r),this.osc("triangle",l,n,n+s+.3,d),this.osc("sine",l*2,n,n+s+.3,d);break}case"pad":case"strings":{const d=o.createBiquadFilter();d.type="lowpass",d.frequency.value=t==="pad"?900:2200,d.connect(c);const p=t==="pad"?.35:.12;this.env(c.gain,n,Math.min(p,s*.5),.2,.85,s,.5,.075*r);const m=n+s+.7;this.osc("sawtooth",l,n,m,d,-7),this.osc("sawtooth",l,n,m,d,8),h(.5);break}case"lead":case"pluck":{const d=o.createBiquadFilter();d.type="lowpass",d.Q.value=4,d.frequency.setValueAtTime(t==="pluck"?3500:2600,n),d.frequency.exponentialRampToValueAtTime(t==="pluck"?500:1400,n+.25),d.connect(c),this.env(c.gain,n,.006,.15,t==="pluck"?.15:.6,s*.95,.12,.13*r);const p=n+s+.3;this.osc(t==="pluck"?"sawtooth":"square",l,n,p,d),this.osc("sawtooth",l,n,p,d,9),h(.25);break}case"sax":case"voice":{const d=o.createOscillator();d.type="sawtooth",d.frequency.setValueAtTime(l*.985,n),d.frequency.linearRampToValueAtTime(l,n+.07);const p=o.createOscillator(),m=o.createGain();p.frequency.value=t==="sax"?5.2:5.8,m.gain.setValueAtTime(0,n),m.gain.linearRampToValueAtTime(l*.012,n+Math.min(.3,s)),p.connect(m),m.connect(d.frequency);const g=n+s+.25,v=o.createGain();v.connect(c);const u=t==="sax"?[[700,3,1],[1500,4,.5]]:[[800,6,1],[1150,7,.6],[2900,8,.25]];for(const[f,_,x]of u){const b=o.createBiquadFilter();b.type="bandpass",b.frequency.value=f,b.Q.value=_;const U=o.createGain();U.gain.value=x,d.connect(b),b.connect(U),U.connect(v)}this.env(c.gain,n,.05,.1,.85,s*.95,.18,(t==="sax"?.5:.55)*r),d.start(n),d.stop(g),p.start(n),p.stop(g),h(.4);break}case"organ":{this.env(c.gain,n,.02,.05,.9,s,.1,.07*r);const d=n+s+.2;for(const[p,m]of[[1,1],[2,.5],[3,.25],[4,.2]]){const g=o.createGain();g.gain.value=m,g.connect(c),this.osc("sine",l*p,n,d,g)}h(.3);break}case"drone":{const d=o.createBiquadFilter();d.type="lowpass",d.frequency.value=300,d.connect(c),this.env(c.gain,n,Math.min(1.2,s*.4),.3,.9,s,1.2,.2*r);const p=n+s+1.4;this.osc("sawtooth",l,n,p,d,-12),this.osc("sine",l,n,p,d,9),this.osc("sine",l*1.5,n,p,d,3),h(.6);break}default:console.warn("[audio] нет инструмента",t)}}sfx(t,e={}){const n=this.ctx;if(!n)return;const s=n.currentTime+.005,r=n.createGain();r.connect(this.bSfx);const a=h=>{const l=n.createGain();l.gain.value=h,r.connect(l),l.connect(this.rev)},o=(h,l,d,p,m=s,g=1,v)=>{const u=n.createBiquadFilter();u.type=h,u.frequency.setValueAtTime(l,m),v&&u.frequency.exponentialRampToValueAtTime(v,m+d),u.Q.value=g;const f=n.createGain();f.gain.setValueAtTime(p,m),f.gain.exponentialRampToValueAtTime(.001,m+d),u.connect(f),f.connect(r),this.noise(m,d+.05,u)},c=(h,l,d,p,m,g=s)=>{const v=n.createOscillator();v.type=h,v.frequency.setValueAtTime(l,g),d!==l&&v.frequency.exponentialRampToValueAtTime(d,g+p);const u=n.createGain();u.gain.setValueAtTime(m,g),u.gain.exponentialRampToValueAtTime(.001,g+p),v.connect(u),u.connect(r),v.start(g),v.stop(g+p+.02)};switch(t){case"step":{const h=e.mat||"wood";o(h==="metal"?"bandpass":"lowpass",(h==="wood"?300:h==="stone"?900:h==="metal"?2200:h==="grass"?2600:h==="carpet"?180:500)*(.9+Math.random()*.2),h==="grass"?.09:.05,h==="carpet"?.1:.16,s,h==="metal"?6:1),h==="wood"&&c("sine",110,70,.05,.1);break}case"click":c("square",900,700,.03,.08);break;case"hover":c("sine",1200,1200,.02,.03);break;case"paper":o("bandpass",3e3,.12,.2,s,.7,5e3);break;case"pencil":o("bandpass",5e3,.18,.1,s,2,3500);break;case"stamp":c("sine",140,50,.12,.6),o("lowpass",800,.06,.3);break;case"pickup":c("triangle",660,660,.08,.15),c("triangle",990,990,.14,.15,s+.07);break;case"note":c("sine",880,880,.1,.1),c("sine",1320,1320,.2,.08,s+.08),a(.4);break;case"switch":c("square",240,120,.04,.18),o("highpass",3e3,.02,.15);break;case"spot":c("square",180,90,.05,.2),c("sine",55,55,.5,.12,s+.02),a(.4);break;case"door":c("sawtooth",90,140,.35,.07),o("lowpass",400,.14,.4,s+.33),a(.3);break;case"creak":c("sawtooth",180,320,.5,.05),c("sawtooth",320,210,.4,.04,s+.45),a(.5);break;case"locked":c("square",160,160,.05,.14),c("square",160,160,.05,.14,s+.1);break;case"curtain":o("lowpass",500,1.6,.3,s,.5,1800),a(.4);break;case"whoosh":o("bandpass",400,.5,.3,s,1.2,2400);break;case"shutter":o("highpass",4e3,.03,.4),o("highpass",3e3,.05,.3,s+.08),c("square",1500,500,.03,.1);break;case"mask":c("sine",520,1040,.25,.12),c("sine",780,1560,.3,.08,s+.04),a(.6);break;case"error":c("square",200,150,.18,.14);break;case"ok":c("triangle",523,523,.1,.14),c("triangle",784,784,.2,.14,s+.09),a(.3);break;case"hit":c("triangle",e.f||880,e.f||880,.07,.12);break;case"miss":o("lowpass",300,.08,.2);break;case"knock":for(let h=0;h<(e.n||3);h++)c("sine",120,60,.18,.7,s+h*.7),o("lowpass",500,.05,.3,s+h*.7);a(.7);break;case"thunder":o("lowpass",200,2.4,.9,s,.5,60),a(.8);break;case"alarm":for(let h=0;h<3;h++)c("square",880,660,.22,.12,s+h*.26);break;case"laser":c("sawtooth",1800,300,.2,.1);break;case"emp":c("sawtooth",100,1600,.3,.12),o("bandpass",2e3,.3,.15,s,3,200);break;case"glitch":for(let h=0;h<5;h++)c("square",200+Math.random()*2e3,100+Math.random()*800,.04,.07,s+h*.045);break;case"heart":c("sine",70,40,.14,.7),c("sine",60,40,.14,.5,s+.22);break;case"laugh":{const h=e.n||6;for(let l=0;l<h;l++){const d=s+l*.17,p=(e.f||520)*(1-l*.05),m=n.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(p*1.2,d),m.frequency.exponentialRampToValueAtTime(p,d+.1);const g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=900,g.Q.value=3;const v=n.createGain();v.gain.setValueAtTime(1e-4,d),v.gain.linearRampToValueAtTime(e.vol||.3,d+.02),v.gain.exponentialRampToValueAtTime(.001,d+.13),m.connect(g),g.connect(v),v.connect(r),m.start(d),m.stop(d+.15)}a(.7);break}case"applause":{const h=e.dur||3,l=e.dens||45;for(let d=0;d<h*l;d++){const p=s+Math.random()*h,m=Math.sin(Math.PI*Math.min(1,(p-s)/h))*.12+.03;o("bandpass",1200+Math.random()*2200,.03,m,p,1.5)}a(.6);break}case"clap":o("bandpass",1500+Math.random()*800,.04,.4,s,1.5),a(.5);break;case"gasp":o("bandpass",1800,.4,.12,s,2,900),a(.5);break;case"bell":c("sine",660,660,1.2,.2),c("sine",1320,1320,.8,.08),a(.7);break;case"crash":o("lowpass",1500,.9,.7,s,.5,100),c("sine",80,30,.5,.6),a(.5);break;case"snip":o("highpass",5e3,.04,.4),o("highpass",4e3,.05,.4,s+.09);break;case"rope":o("bandpass",900,.3,.2,s,3,1800);break;case"gear":for(let h=0;h<6;h++)c("square",300,200,.03,.08,s+h*.09);break;case"candle":o("bandpass",900,.25,.25,s,1,300);break;case"firework":o("bandpass",600,.4,.12,s,2,3e3),o("lowpass",2500,.8,.5,s+.45,.5,200),a(.6);break;case"engine":c("sawtooth",70,160,.9,.16);break;case"mechtick":c("square",2600,1900,.018,.05),o("highpass",5e3,.02,.06);break;case"keyin":c("triangle",1900,1500,.06,.16),c("triangle",2700,2500,.05,.1,s+.03),o("highpass",4e3,.04,.2,s+.02),a(.3);break;case"scrape":{const h=e.dur||1.6;o("bandpass",1400,h,.12,s,6,700);for(let l=0;l<7;l++)c("square",900+Math.random()*600,700,.03,.05,s+l*h/7+Math.random()*.05);break}case"hum":c("sine",55,52,2.2,.22),c("sine",110,108,2,.06),a(.4);break;case"windup":for(let h=0;h<14;h++)c("square",3e3,2200,.015,.05*(1-h/16),s+h*.07);break;case"clunk":c("sine",120,45,.25,.6),o("lowpass",900,.08,.4),a(.4);break;case"lighton":c("sine",70,40,.4,.5),o("lowpass",2400,.12,.45),o("highpass",6e3,.6,.05,s+.1),a(.5);break;case"buzz":c("sawtooth",100,100,e.dur||.6,.025);break;default:console.warn("[audio] нет эффекта",t)}}blip(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="triangle",s.frequency.setValueAtTime(t*(.96+Math.random()*.1),n),r.gain.setValueAtTime(.11,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(r),r.connect(this.bVoice),s.start(n),s.stop(n+.06)}ambience(t){if(!this.ctx){this.pendingAmb=t;return}if(this.amb&&this.amb.id===t||(this.amb&&(this.amb.stop(),this.amb=null),!t))return;const e=this.ctx,n=e.createGain();n.gain.value=0,n.connect(this.bSfx);const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter(),a={rain:["highpass",1800,.16],hall:["lowpass",180,.22],crowd:["bandpass",700,.12],wind:["bandpass",350,.14],hum:["lowpass",90,.35],city:["lowpass",500,.12]}[t];if(!a){console.warn("[audio] нет атмосферы",t);return}r.type=a[0],r.frequency.value=a[1],s.connect(r),r.connect(n),s.start(),n.gain.linearRampToValueAtTime(a[2],e.currentTime+1),this.amb={id:t,stop:()=>{n.gain.cancelScheduledValues(e.currentTime),n.gain.setTargetAtTime(0,e.currentTime,.3),setTimeout(()=>{s.stop(),n.disconnect()},1500)}}}chart(t,e,n=1){const s=bh[t],r=s.parts[e],{evs:a,len:o}=Mh(r),c=this.stepDur(s),h=[];for(let l=0;l<n;l++)for(const d of a)h.push({t:(l*o+d.step)*c,len:d.len*c,note:d.notes[0]});return h}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}const qt=new jg,ga=new Set,Hu=new Set,ai={x:0,y:0};let Gu=!1;function wh(i){Gu=i}const Wu={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyE:"act",Enter:"act",Space:"act",Escape:"pause",KeyP:"pause",Digit1:"mask1",Digit2:"mask2",Digit3:"mask3",Digit0:"mask0",KeyQ:"mask0",KeyC:"camera",KeyF:"camera",Tab:"notebook",KeyN:"notebook",KeyJ0:"notebook",KeyI:"inventory",KeyB:"inventory",KeyH:"history",Slash:"help",F1:"help",KeyL:"history",ControlLeft:"skip",ControlRight:"skip",ShiftLeft:"run",ShiftRight:"run",KeyJ:"laneJ",KeyK:"laneK",KeyG:"laneG"},Jr=[];function ss(i){return Jr.push(i),()=>{const t=Jr.indexOf(i);t>=0&&Jr.splice(t,1)}}function bi(i,t=""){Hu.add(i);for(const e of[...Jr])e(i,t)}window.addEventListener("keydown",i=>{const t=Wu[i.code];if(!t)return;const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||(!Gu&&["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(ga.add(t),bi(t,i.code)))});window.addEventListener("keyup",i=>{const t=Wu[i.code];t&&ga.delete(t)});window.addEventListener("blur",()=>{ga.clear(),ai.x=ai.y=0});const rs=i=>ga.has(i);function ho(){Hu.clear()}function Kg(){let i=(rs("right")?1:0)-(rs("left")?1:0)+ai.x,t=(rs("down")?1:0)-(rs("up")?1:0)+ai.y;const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t}}const uo=new Map,Zg=new Set(["artemiy","varya","ruben","matvey","alla","dana","vasilisa","nina","angelina","liza","erika","olya","polina","anya"]),Jg={queen:"alla",girl:"varya"};function $u(i,t="neutral",e=!1){const n=Jg[i]||i.split("_")[0];if(Zg.has(n))return"portraits/"+n+(e&&(n==="varya"||n==="matvey")&&["smile","laugh","surprised","blank"].includes(t)?"_heal":"")+".png"+(i.endsWith("_noir")?"#noir":"");const s=i+"|"+t,r=uo.get(s);if(r)return r;const a=He[i],o=200,c=240,h=document.createElement("canvas");h.width=o,h.height=c;const l=h.getContext("2d");if(!a)return"";if(i==="kukolnik"||i==="narrator"){if(l.fillStyle="#1a1210",l.fillRect(0,0,o,c),i==="kukolnik"){l.fillStyle="#050404",l.beginPath(),l.ellipse(100,100,44,54,0,0,7),l.fill(),l.fillRect(30,170,140,80),l.beginPath(),l.ellipse(100,190,80,40,0,0,7),l.fill(),l.fillRect(60,40,80,14),l.fillRect(74,4,52,44),l.strokeStyle="#d8b56a55",l.lineWidth=1;for(const j of[60,100,140])l.beginPath(),l.moveTo(j,0),l.lineTo(j+(j-100)*.3,60),l.stroke()}else{l.fillStyle="#e8d8a8",l.fillRect(30,60,140,120),l.fillStyle="#b89858",l.fillRect(97,60,6,120),l.fillStyle="#6a5a3a";for(let j=0;j<7;j++)l.fillRect(42,78+j*13,46,3),l.fillRect(112,78+j*13,46,3)}const V=h.toDataURL();return uo.set(s,V),V}const d=a.acc||[],p=a.hair,m=$n(p,-.3),g=$n(p,.25),v=$n(a.skin,-.18);$n(a.skin,.12);const u=100,f=112,_=a.build==="big"?52:a.build==="strong"?50:46,x=58,b=a.style,U=b.startsWith("curly"),E=(V,j,q,xt,Ct)=>{l.fillStyle=Ct,l.beginPath(),l.ellipse(V,j,q,xt,0,0,7),l.fill()};if(l.fillStyle=p,b==="long"||b==="longStyled"||b==="glam"||b==="rapunzel"){const V=b==="glam"?84:b==="longStyled"?72:66;if(l.beginPath(),l.moveTo(u-V,240),l.quadraticCurveTo(u-V-8,80,u,44),l.quadraticCurveTo(u+V+8,80,u+V,240),l.fill(),b==="glam")for(let j=0;j<5;j++)E(u-78+j%2*8,110+j*28,16,18,j%2?p:m),E(u+78-j%2*8,110+j*28,16,18,j%2?m:p)}if(b==="curls"){l.beginPath(),l.moveTo(u-70,200),l.quadraticCurveTo(u-80,70,u,46),l.quadraticCurveTo(u+80,70,u+70,200),l.fill();for(let V=0;V<4;V++)for(const j of[-1,1]){const q=u+j*(64-V%2*6),xt=120+V*24;l.fillStyle=V%2?m:p,l.beginPath(),l.ellipse(q,xt,15,15,0,0,7),l.fill(),l.strokeStyle=g,l.lineWidth=2,l.beginPath(),l.arc(q-j*3,xt-2,8,Math.PI*(j>0?1.1:1.6),Math.PI*(j>0?1.7:2.2)),l.stroke()}l.fillStyle=p}if(b==="bob"||b==="bobLong"){const V=b==="bob"?150:172;l.beginPath(),l.moveTo(u-62,V),l.quadraticCurveTo(u-70,60,u,46),l.quadraticCurveTo(u+70,60,u+62,V),l.fill()}if(b==="curlyMid")for(let V=0;V<16;V++){const j=Math.PI*(.95+V/15*1.1);E(u+Math.cos(j)*58,104+Math.sin(j)*56+(V<3||V>12?30:0),17,17,V%2?p:m)}if(b==="fluffy")for(let V=0;V<14;V++){const j=Math.PI*(.9+V/13*1.2);E(u+Math.cos(j)*58,100+Math.sin(j)*52,19,19,V%2?p:g)}if(b==="twin")for(const V of[-1,1])E(u+V*70,120,15,44,p),E(u+V*70,150,12,26,m),l.fillStyle="#e84a6f",l.fillRect(u+V*70-9,82,18,7);b==="ponytail"&&(E(u+52,70,18,16,p),l.fillStyle=m,l.beginPath(),l.moveTo(u+58,70),l.quadraticCurveTo(u+92,110,u+66,190),l.quadraticCurveTo(u+54,130,u+44,80),l.fill()),b==="bun"&&E(u,40,22,18,p),d.includes("wings")&&(E(30,200,34,50,"rgba(230,220,255,0.7)"),E(170,200,34,50,"rgba(230,220,255,0.7)"));const R=a.build==="strong"?96:a.build==="big"?100:a.build==="thin"?70:80;if(l.fillStyle=a.top,l.beginPath(),l.moveTo(u-R,240),l.quadraticCurveTo(u-R,186,u-26,180),l.lineTo(u+26,180),l.quadraticCurveTo(u+R,186,u+R,240),l.fill(),l.fillStyle=$n(a.top,-.25),l.fillRect(u-R,232,R*2,8),d.includes("cape")&&(l.fillStyle=a.trim||"#a22",l.fillRect(u-R,196,30,44),l.fillRect(u+R-30,196,30,44)),l.fillStyle=v,l.fillRect(u-13,156,26,32),l.fillStyle=a.skin,l.beginPath(),l.moveTo(u-20,184),l.lineTo(u,200),l.lineTo(u+20,184),l.lineTo(u+13,176),l.lineTo(u-13,176),l.fill(),d.includes("offshoulder")){l.fillStyle=a.skin,l.beginPath(),l.moveTo(u-R+6,214),l.quadraticCurveTo(u-R+4,186,u-26,180),l.lineTo(u+26,180),l.quadraticCurveTo(u+R-4,186,u+R-6,214),l.closePath(),l.fill(),l.fillStyle=a.top,l.fillRect(u-R,214,R*2,26);for(const V of[-1,1])l.beginPath(),l.moveTo(u+V*R,240),l.lineTo(u+V*R,202),l.quadraticCurveTo(u+V*(R-10),200,u+V*(R-24),214),l.lineTo(u+V*(R-24),240),l.fill();l.fillStyle=$n(a.top,-.22),l.fillRect(u-R+24,214,R*2-48,3),l.strokeStyle=v,l.lineWidth=1.5,l.beginPath(),l.moveTo(u-30,192),l.quadraticCurveTo(u-14,198,u-4,194),l.moveTo(u+30,192),l.quadraticCurveTo(u+14,198,u+4,194),l.stroke()}else a.trim&&(l.strokeStyle=a.trim,l.lineWidth=5,l.beginPath(),l.moveTo(u-24,182),l.lineTo(u,204),l.lineTo(u+24,182),l.stroke());if(d.includes("pearls")){l.fillStyle="#f6f0e8";for(let V=0;V<11;V++){const j=Math.PI*(.15+V*.07);l.beginPath(),l.arc(u+Math.cos(j)*30*(V<6,-1)*Math.cos(j)*0+(V-5)*5,196+Math.sin(V/10*Math.PI)*10,3,0,7),l.fill()}}d.includes("scarf")&&(l.fillStyle=a.trim||"#e84a6f",l.beginPath(),l.ellipse(u,186,40,14,0,0,7),l.fill(),l.fillRect(u+10,186,16,50)),d.includes("camera")&&(l.fillStyle="#222",l.fillRect(u-22,208,44,30),E(u,224,11,11,"#557"),E(u,224,6,6,"#9bd"),l.strokeStyle="#333",l.lineWidth=4,l.beginPath(),l.moveTo(u-30,184),l.lineTo(u-20,210),l.moveTo(u+30,184),l.lineTo(u+20,210),l.stroke()),d.includes("pins")&&(E(u+44,214,5,5,"#fff"),E(u+54,226,4,4,"#4ae0c0"),E(u+40,228,3,3,"#e84a6f")),E(u-_+2,f+4,7,11,v),E(u+_-2,f+4,7,11,v),l.fillStyle=a.skin,l.beginPath(),l.moveTo(u-_,f-20),l.quadraticCurveTo(u-_,f-x,u,f-x),l.quadraticCurveTo(u+_,f-x,u+_,f-20),l.quadraticCurveTo(u+_,f+34,u+16,f+x-4),l.quadraticCurveTo(u,f+x+4,u-16,f+x-4),l.quadraticCurveTo(u-_,f+34,u-_,f-20),l.fill(),E(u-26,f+22,10,6,"rgba(230,110,100,0.16)"),E(u+26,f+22,10,6,"rgba(230,110,100,0.16)"),d.includes("earrings")&&(E(u-_,f+22,4,8,"#f4d060"),E(u+_,f+22,4,8,"#f4d060")),d.includes("pearls")&&(E(u-_,f+18,4,4,"#f6f0e8"),E(u+_,f+18,4,4,"#f6f0e8"),E(u-_,f+26,5,5,"#f6f0e8"),E(u+_,f+26,5,5,"#f6f0e8"));const P=f+2,H=21;let S=1,w=0,X=0,W="flat",Y=1;switch(t){case"smile":W="smile",S=.85;break;case"laugh":W="laugh",S=.25,w=-2;break;case"sad":W="sad",X=-5,S=.8;break;case"scared":W="o",X=-6,S=1.3,Y=.7,w=-4;break;case"angry":W="sad",X=7,S=.8,w=3;break;case"worried":W="wavy",X=-5;break;case"smirk":W="smirk",S=.75,X=2;break;case"surprised":W="o",S=1.25,w=-5;break;case"blank":Y=.8;break}if(a.brows==="strict"&&(X+=4),d.includes("maskface")){l.fillStyle="#e8e4d8",l.beginPath(),l.ellipse(u,f,_-2,x-2,0,0,7),l.fill(),E(u-20,f-4,9,12,"#111"),E(u+20,f-4,9,12,"#111"),l.strokeStyle="#111",l.lineWidth=4,l.beginPath(),l.moveTo(u-24,f+26),l.quadraticCurveTo(u,f+48,u+24,f+26),l.stroke();for(let V=-2;V<=2;V++)l.beginPath(),l.moveTo(u+V*9,f+30),l.lineTo(u+V*9,f+40),l.stroke()}else{for(const j of[-1,1]){const q=u+j*H;a.shadow&&E(q,P-4,13,9,a.shadow+"99"),l.save(),l.beginPath(),l.ellipse(q,P,11,8*Math.min(S,1.3),0,0,7),l.clip(),l.fillStyle="#f6f1ea",l.fillRect(q-12,P-12,24,24),E(q+(t==="smirk"?2:0),P+.5,7*Y,7*Y,a.eyes),E(q+(t==="smirk"?2:0),P+.5,3.4*Y,3.4*Y,"#120a08"),E(q-2.5,P-3,2,2,"#fff"),l.fillStyle=v,l.fillRect(q-12,P-12,24,5+(1-Math.min(S,1))*6),l.restore(),l.strokeStyle="#1a1010",l.lineWidth=a.lips||a.shadow?3:2.2,l.beginPath(),l.ellipse(q,P,11,8*Math.min(S,1.3),0,Math.PI*1.05,Math.PI*1.95),l.stroke(),(a.lips||a.shadow)&&(l.beginPath(),l.moveTo(q+j*10,P-3),l.lineTo(q+j*15,P-7),l.stroke()),t==="laugh"&&(l.strokeStyle="#1a1010",l.lineWidth=2.5,l.beginPath(),l.arc(q,P+4,9,Math.PI*1.15,Math.PI*1.85),l.stroke()),l.strokeStyle=$n(p==="#f0d98a"||p==="#e8e0f0"||p==="#e8e8f0"?"#a88a4a":p,-.25),l.lineWidth=a.brows==="strict"?4.5:3.2,l.lineCap="round",l.beginPath();const xt=P-16+w;l.moveTo(q-j*10,xt+X*.5+(a.brows==="arch"?1:0)),l.quadraticCurveTo(q,xt-(a.brows==="arch"?5:2),q+j*11,xt-X*.5+(a.brows==="arch"?2:0)),l.stroke()}l.strokeStyle=v,l.lineWidth=2,l.beginPath(),l.moveTo(u-1,f+10),l.quadraticCurveTo(u-5,f+22,u+2,f+23),l.stroke();const V=f+37;if(l.strokeStyle=a.lips||"#7a3a34",l.fillStyle=a.lips||"#7a3a34",l.lineWidth=a.lips?4:2.6,l.lineCap="round",l.beginPath(),W==="flat"&&(l.moveTo(u-9,V),l.quadraticCurveTo(u,V+2,u+9,V),l.stroke()),W==="smile"&&(l.moveTo(u-12,V-2),l.quadraticCurveTo(u,V+8,u+12,V-2),l.stroke()),W==="smirk"&&(l.moveTo(u-9,V+1),l.quadraticCurveTo(u+2,V+4,u+13,V-4),l.stroke()),W==="sad"&&(l.moveTo(u-10,V+3),l.quadraticCurveTo(u,V-4,u+10,V+3),l.stroke()),W==="wavy"&&(l.moveTo(u-10,V),l.quadraticCurveTo(u-5,V-4,u,V),l.quadraticCurveTo(u+5,V+4,u+10,V),l.stroke()),W==="o"&&(l.fillStyle="#4a1a1a",l.ellipse(u,V+1,6,8,0,0,7),l.fill(),l.stroke()),W==="laugh"&&(l.fillStyle="#4a1a1a",l.moveTo(u-14,V-4),l.quadraticCurveTo(u,V+18,u+14,V-4),l.closePath(),l.fill(),l.stroke(),l.fillStyle="#fff",l.fillRect(u-8,V-3,16,4)),d.includes("freckles")){l.fillStyle=$n(a.skin,-.3);for(const[j,q]of[[-30,14],[-24,18],[-18,13],[-26,10],[30,14],[24,18],[18,13],[26,10],[-4,16],[5,15]])l.beginPath(),l.arc(u+j,f+q,1.6,0,7),l.fill()}d.includes("mole")&&E(u+24,f+30,2.2,2.2,"#3a1a14")}if(d.includes("glasses")){l.strokeStyle="#222",l.lineWidth=3;for(const V of[-1,1])l.beginPath(),l.ellipse(u+V*H,P,15,13,0,0,7),l.stroke(),l.fillStyle="rgba(190,225,255,0.18)",l.fill();l.beginPath(),l.moveTo(u-6,P),l.lineTo(u+6,P),l.stroke()}if(d.includes("visor")&&(l.fillStyle=(a.trim||"#40e0d0")+"cc",l.fillRect(u-_-2,P-11,_*2+4,20),l.fillStyle="#ffffff55",l.fillRect(u-_+4,P-8,30,3)),d.includes("maskhalf")&&(l.fillStyle="#e8c36a",l.beginPath(),l.ellipse(u,P-2,_-2,18,0,0,7),l.fill(),E(u-H,P,8,5,"#120a08"),E(u+H,P,8,5,"#120a08")),l.fillStyle=p,b!=="none"){const V=f-x-8;if(l.beginPath(),l.moveTo(u-_-3,f-8),l.quadraticCurveTo(u-_-6,V,u,V-2),l.quadraticCurveTo(u+_+6,V,u+_+3,f-8),a.bangs?(l.quadraticCurveTo(u+_-6,f-18,u+_-10,f-14),l.lineTo(u-_+10,f-14),l.quadraticCurveTo(u-_+6,f-18,u-_-3,f-8)):b==="short"||b==="bun"||b==="ponytail"?(l.quadraticCurveTo(u+_-4,f-34,u+10,f-40),l.quadraticCurveTo(u-20,f-44,u-_-3,f-8)):(l.quadraticCurveTo(u+_-2,f-30,u-8,f-44),l.quadraticCurveTo(u-_+4,f-30,u-_-3,f-8+(b==="bob"||b==="bobLong"?30:10))),l.fill(),a.bangs){l.strokeStyle=m,l.lineWidth=1.5;for(let j=-3;j<=3;j++)l.beginPath(),l.moveTo(u+j*11,f-40),l.lineTo(u+j*12,f-15),l.stroke()}if(b==="bob"||b==="bobLong"||b==="long"||b==="longStyled"||b==="glam"||b==="rapunzel"||b==="curls"){l.fillStyle=p;const j=b==="bob"?152:b==="bobLong"?172:b==="curls"?150:236;l.fillRect(u-_-8,f-10,10,j-f+10),l.fillRect(u+_-2,f-10,10,j-f+10),(b==="bob"||b==="bobLong")&&(E(u-_-2,j-4,9,8,p),E(u+_+2,j-4,9,8,p))}if(U)for(let j=0;j<9;j++)E(u-48+j*12,f-x+2+j%2*6+Math.abs(j-4)*3,12,12,j%2?p:g);if(b==="fluffy")for(let j=0;j<8;j++)E(u-46+j*13,f-x+4+j%2*5+Math.abs(j-3.5)*3.5,13,12,j%2?g:p);l.strokeStyle=g,l.lineWidth=3,l.beginPath(),l.arc(u-8,f-30,30,Math.PI*1.15,Math.PI*1.5),l.stroke()}d.includes("hat")&&(l.fillStyle="#2a2a2e",l.beginPath(),l.ellipse(u,f-36,80,12,0,0,7),l.fill(),l.fillStyle="#3a3a40",l.beginPath(),l.moveTo(u-46,f-38),l.quadraticCurveTo(u-44,f-86,u,f-84),l.quadraticCurveTo(u+44,f-86,u+46,f-38),l.fill(),l.fillStyle="#111",l.fillRect(u-46,f-48,92,9)),d.includes("crown")&&(l.fillStyle="#f4d060",l.beginPath(),l.moveTo(u-38,f-52),l.lineTo(u-42,f-92),l.lineTo(u-20,f-70),l.lineTo(u,f-98),l.lineTo(u+20,f-70),l.lineTo(u+42,f-92),l.lineTo(u+38,f-52),l.fill(),E(u,f-62,6,6,"#d02040")),d.includes("headphones")&&(l.strokeStyle="#222",l.lineWidth=8,l.beginPath(),l.arc(u,f-8,_+8,Math.PI*1.08,Math.PI*1.92),l.stroke(),l.fillStyle="#222",l.fillRect(u-_-14,f-12,16,34),l.fillRect(u+_-2,f-12,16,34));const it=h.toDataURL();return uo.set(s,it),it}const Qg={chars:"Персонажи",places:"Места",items:"Предметы",clues:"Улики",script:"Сценарий"},qs={camera:{name:"Фотоаппарат Василисы",desc:"Запасная камера. «Плёнка здесь иногда видит больше, чем глаза». Клавиша C."},marionette:{name:"Двуликая марионетка",desc:"Добыча Рубена. У куклы два лица, спереди и сзади, и вырезана она как ключ."},lantern:{name:"Бумажный фонарик",desc:"С фестиваля Матвея. Внутри записка: «Свою сцену я сыграл сам»."},mat_photo:{name:"Фото с фестиваля",desc:"Матвей и Арутеми смеются над пересоленным онигири. Не позируют. Лучший кадр, который я не ставила."},c_photo:{name:"Фото из особняка",desc:"Мы внутри особняка раньше, чем вошли. На обороте розовая пудра."},c_powder:{name:"Пудреница примы",desc:"Розовая пудра. Та же, что на конверте с фото Полины."},c_fortuna:{name:"Слова Леди Фортуны",desc:"«Удача не любит подсказок, дорогуша»."},c_darling:{name:"Оговорка Рассказчика",desc:"«Дорогуша, с тобой невозможно работать»."},c_contract:{name:"Поручительство Аллы",desc:"Контракт Вронской. Поручитель: Алла Ева."},c_poster:{name:"Перекленная афиша",desc:"«ВРОНСКАЯ» заклеено, поверх напечатано «АЛЛА ЕВА»."},c_mirror:{name:"Призрак в зеркале",desc:"Девушка в красном стоит в моей позе."},c_usher:{name:"Рассказ билетёрши",desc:"Аллочка выучила чужую роль до последнего вздоха и так и не вернулась в свою позу."},c_light:{name:"Световая партитура",desc:"«Мой луч не делить. Остальных в тень». Тридцать лет назад."},c_prompter:{name:"Последняя реплика",desc:"«Роль держит крепче человека». Строчка из моего сценария."},c_script:{name:"Страница сценария",desc:"Пометки на полях командным почерком."},c_letters:{name:"Шесть писем",desc:"Одинаковый нажим, одинаковые хвостики."},c_loop:{name:"Петля на «р»",desc:"Моя петля. Та же, что в письмах."},archive_card:{name:"Каталожная карточка",desc:"Нашла Эрика. Шифр архива Театра имени М. Ковалевского."},braid:{name:"Коса Лизы",desc:"Сто локтей прекрасной верёвки. Волосы Лиза оставила башне, а косу забрала себе."},demo:{name:"Демо-запись Ангелины",desc:"Песня, которую не писал комитет."},flashlight:{name:"Фонарь",desc:"Старый, тяжёлый, с жёлтым лучом. Полина держит его двумя руками."},porch_key:{name:"Ключ из-под горшка",desc:"Конечно, под цветочным горшком. Где же ещё."},owner_mask:{name:"Маска Хозяина",desc:"Белая, пустая изнутри. На подкладке: «Алла Ева»."},e_photo:{name:"Фото: Мэй и Лидия",desc:"«Сестрёнке от той, кто всегда в третьем ряду. Л.»"},e_contract:{name:"Контракт Вронской",desc:"Главную роль «передали» в четверг. В графе «поручитель» стоит Алла Ева."},e_letter:{name:"Записка Вейсу",desc:"«Спасибо за цветы… увидимся у моря. Л.»"},e_ticket:{name:"Квитанция камеры хранения",desc:"Суббота. Чемодан кожаный. Сдала: Вронская Л."},e_matches:{name:"Спички «Синей ноты»",desc:"Просто спички. Или нет."},gear:{name:"Шестерня",desc:"Латунная, от башенного механизма."},weight:{name:"Гиря",desc:"Противовес. Тяжёлая, но Лиза помогает волосами."},tower_key:{name:"Ключ с люстры",desc:"Висел там, где «принцессе не достать»."},emp:{name:"Глушилка",desc:"Гаджет Ноля. На пять секунд слепит охрану. Клавиша G. Зарядов мало."}},It=(i,t,e,n,s)=>({cat:i,title:t,text:e,char:n,expr:s}),ol={cast:It("chars","Труппа","Полина, Рубен, Матвей, Эрика, Лиза, Ангелина. Всем пришли письма «Режиссёр: Варвара», и никто особо не удивился.","varya","smile"),c_alla:It("chars","Алла Ева","Прима. Опаздывает, требует, перебивает. Иногда бывает права, и вот это раздражает сильнее всего.","alla","smirk"),c_polina:It("chars","Полина","Боялась весь особняк и всё равно прошла его одна. Замечает узоры, которые я пропускаю.","polina","smile"),c_ruben:It("chars","Рубен","Отказался и от моего плана, и от золота. Зато вынес куклу и вывел всю команду.","ruben","smile"),c_matvey:It("chars","Матвей","Сказал всё сам. А мои пятьдесят шагов из кадра дались мне труднее, чем я думала.","matvey","smile"),c_erika:It("chars","Эрика","Закрыла дело так, как считала правильным. Проверяет факты, даже когда они ей не нравятся.","erika","neutral"),c_liza:It("chars","Лиза","Ушла из башни раньше, чем её успели спасти. Волосы оставила, а косу забрала.","liza","laugh"),c_angelina:It("chars","Ангелина","Спела своё, а агентству остались фонограмма и чужое лицо на экранах.","angelina","smirk"),c_artemiy:It("chars","Арутеми","Шутит каждые полминуты, подкармливает школьного кота и совсем не умеет врать.","artemiy","neutral"),troupe:It("chars","Второй состав","Василиса, Дана, Нина, Аня и Оля уехали на гастроли со «Снежной королевой». Это они меня рекомендовали. К премьере вернутся и просили оставить им третий ряд.","vasilisa","smile"),doors:It("places","Шесть дверей","В кармане сцены шесть дверей, и каждая ведёт в свой жанр. Мокрая, неоновая, школьная, с матовым стеклом, книга и зеркало."),shadows:It("places","Тени держат","В этом театре по тени можно ходить, если её отбрасывает правильная декорация."),masks:It("places","Три маски","Комедия показывает смешное, Трагедия сломанное и спрятанное, а Драма то, что чувствуют. Клавиши 1, 2, 3."),invite:It("clues","Приглашение Кукольника","Пометки на полях сделаны знакомым почерком, уверенным и немного командным."),camera:It("clues","Плёнка видит больше","Василиса советует снимать всё странное и сравнивать."),mirror:It("clues","Отражение опаздывает","В гримёрке отражение поправило серёжку. Я не ношу серёжки."),missing:It("clues","Труппа исчезла","Погас свет, и на сцене никого не осталось. Алла Ева даже не удивилась. Мокрые следы ведут за кулисы."),photo_inside:It("clues","Снимок «до»","Фото, где мы с Полиной уже внутри особняка, сделано с крыльца, ещё до того, как мы вошли. А в архиве оно числится уже неделю."),marionette:It("clues","Двуликая кукла","У марионетки два лица. Рубену это не понравилось. Мне тоже."),card:It("clues","Алла Ева в сороковых","В городе Эрики её имя стоит на афишах 1940-х. Она не может быть такой старой. Если только дело тут вообще не в возрасте."),alla_knows:It("clues","Она знает про утренник","Алла Ева помнит, как я в семь лет забыла слова. Этого даже мама не помнит."),one_shadow:It("clues","Одна тень","В маске Трагедии видно, что у Аллы Евы нет своей тени. Под ней лежит моя."),maquette:It("clues","Макет с коробочками","Для каждого из друзей заранее сделали по коробке со своим жанром."),twins:It("clues","Склеенные фигурки","В центре макета стояли две фигурки спиной к спине, в красном платье и в красном лонгсливе. Потом их разломали."),timegap:It("clues","Пропавшие часы","Я потеряла два с половиной часа в мастерской. Что я делала в это время?"),handwriting:It("clues","Петля на «р»","Эрика говорит, что письма Кукольника, пометки в сценарии и мой блокнот написаны одной рукой."),ledger:It("clues","Протокол собрания","Труппа голосовала за меня. Худрук воздержался: «не могу голосовать за себя»."),contract:It("clues","Две подписи","«Алла Ева» и «К.» на контракте: нажим один, чернила одни, а росчерки разные."),seating:It("clues","Третий ряд","«Рот открывать, звук не давать». А на обороте детским почерком: «Меня будет видно из любого ряда»."),drafts:It("clues","Черновики приглашения","Три черновика письма мне. Моим почерком."),puppets:It("clues","Одна вага","Шесть марионеток на одной ваге, и нитки не завязаны."),case_board:It("clues","Дело Аллы Евы","Доска улик в гримёрке. Нити от фото, пудры, писем и чужих ролей сходятся в одну точку. Соединять улики нужно по две.","varya","worried"),kukolnik:It("clues","Кабинет худрука","Жакет моего размера, мятная конфета в кармане, почерк с петлёй на «р». Совпадений становится многовато."),poses:It("clues","Одна поза","В большом зеркале мы с Аллой Евой стоим одинаково. И стоит она на моём месте."),knotes:It("clues","Записки К.","Кукольник всегда знает, где я и что я уже сделала. И всегда пишет «не благодари»."),casting:It("clues","Лист распределения","Роль можно вписать самой, а можно спросить. Второе выглядит неряшливо, зато честно."),act4:It("clues","Она расчистила сцену","Во всех шести мирах была Алла Ева, только под разными масками. Каждому дала главную роль, подальше от своей."),script:It("script","The Queen's Last Curtain","Королева, которой нужны аплодисменты, и Молодая Девушка. На страницах описано то, что ещё не случилось."),program:It("script","Финал из программки","«…и когда декорации исчезают, зал видит, что на сцене стоит один человек»."),page8:It("script","Страница 8","Королева рассылает приглашённых по чужим пьесам. «Я всем дала по спектаклю. И себе тоже»."),steps:It("script","Ремарка Матвея","«Режиссёр уходит из кадра, и сцена продолжается без него. И становится только лучше»."),braid:It("script","Ремарка Лизы","«Принцесса выходит сама. Спасатель опаздывает. Никто не пострадал, кроме сюжета»."),demo:It("script","Ремарка Ангелины","«Фонограмма выключена. Поёт та, чьё это лицо»."),n_pol_book:It("script","Проклятая книга","«Дом смеётся над тем, кто играет назначенную ему роль. Перестанешь играть, и он замолчит»."),n_pol_photos:It("clues","Невозможные фотографии","На трёх снимках в библиотеке есть то, чего не бывает: тринадцатый час, человек без тени, отражение спиной. На рамках стоят годы, а на обороте нарисованы знаки."),n_pol_wall:It("clues","Обои с цветами","Полина заметила: в каждой комнате цветок на обоях повёрнут по-своему, то вверх, то вниз."),n_pol_owner:It("clues","Маска Хозяина","Под маской никого не было. А на подкладке театральный штамп и вышитое имя «Алла Ева»."),n_rub_plan:It("script","План ограбления","Мой план был расписан по минутам. Рубен сказал: «План нужен, чтобы было от чего отступать»."),n_rub_fortuna:It("clues","Леди Фортуна","Хозяйка казино в золотой полумаске заранее знала наш план. И сказала знакомое «дорогуша»."),n_ang_double:It("clues","Двойная жизнь","Соседка мечтает быть как Энджел и не знает, что Энджел живёт этажом ниже. Мама не узнала дочь на экране. Я вела Ангелину по пунктам и почти довела туда, где её не узнают."),n_mat_book:It("clues","Тетрадь «100 шагов»","Матвей сто дней расписывал идеальные сцены, чтобы не сделать ни одного настоящего шага. На полях шага 100 чей-то аккуратный почерк. Похож на мой."),n_mat_fake:It("script","Слишком красиво","Чем больше я ставлю «идеальных моментов», тем фальшивее они выглядят. Даже лепестки падают по команде."),n_mat_teacher:It("clues","Руководительница драмкружка","Вычёркивала Матвея из главных ролей и видела меня сквозь стену. Тоже говорит «дорогуша»."),n_eri_case:It("clues","Дело Вронской","Актриса Лидия Вронская исчезла накануне премьеры. Показания противоречат уликам."),n_eri_alla:It("clues","Поручительница","В контракте Вронской поручителем значится Алла Ева. Афиши с её именем висят по всему городу."),n_liz_role:It("script","Роль принцессы","Рассказчик, Фея и зеркальце хором объясняют Лизе, что принцессы должны ждать. А Лиза ждать не хочет."),n_liz_voice:It("clues","Голос Рассказчика","Говорит басом, но ставит ударения совсем как одна моя знакомая в красном."),n_ang_concept:It("script","Концепт «ANGEL♡»","Агентство хочет розовые волосы, новое имя и песню, написанную комитетом."),n_ang_assist:It("clues","Ассистентка","Это она предложила «заменить лицо». И она же сказала про третий ряд."),n_diva:It("clues","Третий ряд Аллы Евы","Она боится не свиста, а того, что зал посмотрит сквозь неё. Это многое объясняет, но ничего не оправдывает."),guestbook:It("clues","Книга отзывов","Все восторженные отзывы об Алле Еве написаны одним почерком, хотя подписи разные."),n_collapse:It("places","Театр складывается","Коридоры ведут в комнаты из чужих жанров. Здесь пригодилось всё, чему мы научились, и все, кто рядом.")},qu=["polina","ruben","matvey","erika","liza","angelina"],Os=(i,t)=>!!i["done_"+t],tv=i=>qu.filter(t=>Os(i,t)).length;function ev(i,t,e){const n=[];if(!i.woke)return{main:"Уснуть. Завтра большой день"};if(!i.read_invite)return{main:"Прочитать конверт на столе",hint:"Подойдите к столу у двери и нажмите E"};if(t.has("camera")||n.push("Осмотреть гримёрку: на шкафу что-то лежит"),!i.met_cast)return{main:"Найти дорогу на сцену",hint:"Из гримёрки в коридор, оттуда дверь «В кулисы сцены»",extra:n};if(!i.act1)return{main:"Поговорить с труппой и взять сценарий",hint:"Режиссёрский столик слева на сцене",extra:n};if(!i.back_seen)return{main:"Пойти по мокрым следам за кулисы",hint:"Дверь «За кулисы» в глубине сцены справа"};if(!i.masks)return{main:"Осмотреть реквизиторский стол за кулисами"};if(!i.bridge)return{main:"Перебраться через открытый люк",hint:"Маски показывают то, чего не видно. Прожектор и фанерный мостик стоят рядом"};if(!Os(i,"polina"))return{main:"Войти в мокрую дверь",hint:"Дверь за люком, из-под неё течёт вода"};const s=tv(i);if(t.has("archive_card")&&!(i.a_ledger&&i.a_contract))return{main:"Акт III: изучить архив театра",hint:"Бельэтаж, дверь «Архив». Ключ-карта от Эрики уже у вас. Прочитать протокол собрания и ангажемент на столе",extra:n};if(s>=6&&!i.office_open)return{main:"Найти кабинет худрука",hint:"Бельэтаж, гобелен на западной стене. Наденьте маску Трагедии (клавиша 2) и подойдите к нему. Нужна марионетка Рубена",extra:n};if(s>=6&&!i.know_k)return{main:"Узнать правду о Кукольнике",hint:"Кабинет худрука: стол с черновиками и зеркало под тканью",extra:n};if(s<6){qu.some(o=>Os(i,o)&&!i["cast_"+o])&&n.push("Решить, кто кого играет: лист распределения на сцене"),t.has("marionette")&&!i.office_open&&n.push("Найти замок для марионетки: гобелен на бельэтаже в маске Трагедии"),t.has("braid")&&!i.braid_used&&n.push("Лиза ждёт за кулисами: блок со старым тросом"),i.foyer0||n.push("Осмотреть фойе");const r=["c_photo","c_powder","c_fortuna","c_darling","c_contract","c_poster","c_mirror","c_usher","c_letters","c_loop","c_prompter","c_script","c_light"].filter(o=>t.has(o)).length,a=["ded_1","ded_2","ded_3","ded_4","ded_5","ded_6"].filter(o=>i[o]).length;return s>=1&&r>=2&&a<6&&n.push(`Дело Аллы Евы: улик ${r}, выводов ${a} из 6. Доска улик в гримёрке, соединяйте улики по две`),s>=1&&!t.has("c_powder")&&n.push("На сцене, где обычно стоит Алла, что-то блестит на полу"),i.w_usher?t.has("c_usher")||n.push("Билетёрша разговорится, если её рассмешить: попробуйте маску Комедии"):n.push("В фойе у кассы дежурит пожилая билетёрша. Она здесь сорок лет"),Os(i,"polina")&&i.w_stagehand&&!t.has("c_light")&&n.push("Машинист Коля что-то прячет: маска Трагедии показывает спрятанное"),Os(i,"polina")&&i.w_prompter&&!t.has("c_prompter")&&n.push("Суфлёр не помнит последний вечер Аллы. Маска Драмы показывает, как было на самом деле"),{main:`Вернуть труппу: друзей в театре ${s} из 6`,hint:"Двери в жанровые миры в кармане сцены, за люком",extra:n}}return i.act4?(i.know_k||n.push("Заглянуть в кабинет худрука"),{main:"Гримёрка примы в служебном коридоре: поговорить с Аллой Евой",extra:n}):{main:"Подняться на сцену: друзья ждут",extra:n}}function nv(i,t,e){return i.pol_light?{main:"Открыть засов подвала",hint:"Прихожая, железная дверь подвала на дальней стене"}:i.pol_dark?{main:"Полина: найти, откуда в доме берётся свет",hint:"Галерея. Цветы на обоях над дверями повёрнуты по-разному"}:i.pol_open?{main:"Спуститься в подвал"}:i.pol_photos?{main:"Открыть замок подвала",hint:"Знаки трёх лжецов, по году: от самого давнего к самому новому"}:i.pol_book?{main:"Найти трёх лжецов среди портретов",hint:"Осмотрите портрет (E), потом посмотрите на него через камеру (C). Лжец в видоискателе выглядит иначе. От Хозяина прячьтесь в шкафах"}:i.pol_in?{main:"Осмотреть дом. Смех доносится снизу",hint:"Библиотека: дверь на левой стене прихожей. Гостиная справа"}:e==="pol_road"?{main:"Найти помощь",hint:"Справа между ёлками тропинка к свету"}:t.has("porch_key")?{main:"Войти в дом"}:{main:"Попасть в дом",hint:"Полина знает, где в фильмах прячут ключи"}}function iv(i,t,e){return e==="rub_terrace"?{main:"Войти в казино",hint:"Дверь «CASINO» в фасаде справа"}:i.rub_rope?i.rub_won?{main:"Открыть сейф за картиной",hint:"Картина на стене салона справа"}:{main:"Сыграть три руки против Мсье Зеро",hint:"Сесть за стол: поговорить с Рубеном или Зеро. Маска Трагедии (2) показывает, что Зеро прячет"}:{main:"Попасть в частный салон",hint:"Дверь «SALON PRIVÉ» на дальней стене зала, у бархатной верёвки"}}function sv(i){return i.mat_c1?i.mat_book?i.mat_s1?i.mat_lock?i.mat_note?i.mat_bento?i.mat_break?i.mat_roof?{main:"Кабинет драмкружка",hint:"Лестница с крыши ведёт в коридор, дверь «Драмкружок». Не вмешиваться"}:{main:"Шаг 100: крыша",hint:"Лестница у тории, в конце улицы фестиваля"}:{main:"Вернуться к столу с бэнто",hint:"Что-то лежит на скамейке"}:{main:"Шаг 61: «Бэнто» на фестивале",hint:"Ворота во дворе ведут на мацури. Матвей и Арутеми у стола с бэнто"}:{main:"Шаг 38: «Записка в учебнике»",hint:"Учительский стол в классе 2-Б"}:{main:"Шаг 27: «Закрытый класс»",hint:"Класс 2-Б в коридоре: запереть дверь «случайно»"}:{main:"Шаг 12: «Один зонт»",hint:i.mat_umb?"У ворот во дворе: дать знак дождю":"Стойка с зонтами у входа в школу"}:{main:"Поднять тетрадь, которую уронил Матвей",hint:"Розовая тетрадь на полу коридора"}:{main:"Войти в школу за Матвеем",hint:"Дверь «Вход» во дворе. В коридоре второго этажа у окна сидит Арутеми-кун"}}function rv(i,t){const e=[1,2,3,4,5].filter(s=>i["eri_t"+s]).length,n=["e_photo","e_contract","e_letter","e_ticket","e_matches"].filter(s=>t.has(s)).length;return i.eri_board?{main:"Вокзал. Перрон, полночный поезд"}:e<5||n<5?{main:`Опросить свидетелей (${e}/5) и собрать улики (${n}/5)`,hint:"Клуб, гримёрка певицы, студия, особняк, вокзал. Одна улика видна только в маске Трагедии"}:{main:"Доска расследования в конторе",hint:"Свяжите ложное показание с уликой, которая ему противоречит"}}function av(i,t,e){return e==="liz_base"?i.liz_hair?{main:"Подняться по косе"}:{main:"Позвать Лизу у подножия башни"}:e==="liz_top"?t.has("tower_key")?{main:"Дверь вниз"}:{main:"Достать ключ с люстры"}:e==="liz_mid"?i.liz_bridge?!i.liz_gear||!i.liz_weight?{main:"Запустить лифт: нужны шестерня и груз",hint:"Обе вещи на этом ярусе"}:{main:"Лифт-противовес"}:{main:"Перебраться через провал"}:i.liz_cut?{main:"Выйти из башни"}:{main:"Поговорить с Феей"}}function ov(i){if(!i.ang_aud)return{main:"Поехать с Ангелиной на кастинг",hint:"Поговорите с мамой у кейса визажиста, потом дверь «В агентство»"};const t=[!i.ang_dance&&"танец (зал тренировок, тренер Ми)",!i.ang_vocal&&"вокал (будка в зале тренировок)",!i.ang_photo&&"съёмка (фотостудия)",i.ang_photo&&!i.ang_double&&"заехать домой, к маме (дверь на левой стене холла)",!i.ang_mix&&"сведение демо (студия звукозаписи)"].filter(Boolean);return t.length?{main:`Подготовить дебют Энджел: осталось ${t.length}`,hint:"Любой порядок. "+t.join("; "),extra:i.ang_concept?[]:["Концепт дебюта висит на стене в холле"]}:{main:"Шоукейс: встать за пульт",hint:"Дверь DEBUT в холле, пульт справа"}}function lv(i,t,e){return e==="fin_void"?{main:"Догнать Аллу Еву",hint:"Бегите вправо по доскам. Назад дороги нет"}:e==="fin_collapse"?{main:"Пройти к сцене",hint:i.c_gap?i.c_lights?"Сфотографируйте двери: у настоящей есть тень":"Стена из особняка: маска Трагедии. Дальше ленты по ритму":"Лиза поможет с провалом"}:e==="fin_backstage"?{main:"Выйти на сцену"}:e==="fin_party"?i.cake_out?i.group_photo?{main:"Закончить вечер",hint:"Дверь справа"}:{main:"Общее фото",hint:"C: фотоаппарат"}:{main:"Задуть свечи на торте"}:e==="fin_bedroom"?{main:"Посмотреть в зеркало"}:{main:""}}function ll(i){const t=i.state.f,e=i.state.room||"";switch(e.split("_")[0]){case"hub":return ev(t,i);case"pol":return nv(t,i,e);case"rub":return iv(t,i,e);case"mat":return sv(t);case"eri":return rv(t,i);case"liz":return av(t,i,e);case"ang":return ov(t);case"fin":return lv(t,i,e)}return{main:""}}const Xs={move:{title:"Передвижение",text:"WASD или стрелки, с Shift быстрее. На телефоне джойстик слева."},act:{title:"Действие",text:"Подойдите к объекту с ромбиком и нажмите E (Enter, Пробел). Подсказка над объектом говорит, что произойдёт."},journal:{title:"Журнал",text:"Tab или кнопка ✎: задания, инвентарь, заметки, механики, фото, план театра и находки. Клавиша I сразу открывает инвентарь."},camera:{title:"Фотоаппарат",text:"C поднимает камеру, E делает снимок. Плёнка видит то, чего не видят глаза, так что сравнивайте снимки с реальностью сами."},masks:{title:"Маски",text:"1: Комедия (смешное), 2: Трагедия (сломанное и спрятанное), 3: Драма (чувства). Снять маску можно той же клавишей или Q. Комната остаётся той же, меняется только взгляд."},hide:{title:"Прятки",text:"В шкафу вас не видно. Подойдите и нажмите E, чтобы спрятаться или выйти."},stealth:{title:"Скрытность",text:"Цветной конус показывает поле зрения, не входите в него. Стены и крупная мебель закрывают обзор."},gadget:{title:"Гаджеты",text:"G: использовать гаджет из плана. Зарядов немного."},lasers:{title:"Лазеры",text:"Лазеры включаются по ритму. Дождитесь паузы и проходите."},pick:{title:"Листы выбора",text:"Выберите по одному варианту в каждой строке и подтвердите. Выбор влияет на дальнейшее."},timing:{title:"Тайминг",text:"Бегунок ходит туда-обратно. Нажмите E, когда он в красной зоне (в золотой будет идеально)."},rhythm:{title:"Ритм-сцены",text:"Ноты падают на линию: D F J K или стрелки. Облегчённый режим и калибровка задержки в настройках."},sequence:{title:"Хореография",text:"Запомните последовательность стрелок и повторите. В зеркальном раунде лево и право меняются местами."},board:{title:"Доска расследования",text:"Выберите показание слева и улику справа, которая ему противоречит, и свяжите ниткой."},runner:{title:"Погоня",text:"← → или A / D: менять полосу и уворачиваться."},storyboard:{title:"Раскадровка",text:"В сценах главы Матвея можно выбрать, как её поставить. Идеальные дубли делают мир глаже и фальшивее (Постановочность), паузы и ошибки оставляют его живым (Искренность). Дубль можно переиграть, но герои замечают повторы."},lock:{title:"Кодовые замки",text:"Стрелками на дисках выставьте символы и нажмите «Проверить». Подсказка где-то рядом."}},Qr={family:{title:"Семейное фото",hint:"Гримёрка режиссёра",desc:"Мама с Сашей, папа с Настей, Вася, Софа и Катя. С моей полки."},hat:{title:"Болтливая шляпа",hint:"Гримёрка, вешалка. Смешнее в Комедии",desc:"Сорок лет позора задом наперёд."},plays1:{title:"Афиша «Люди любят»",hint:"Служебный коридор",desc:"Спектакль, в котором играла Варя. Роль маленькая, зато со смыслом."},plays2:{title:"Афиша «Глупее дурака, умнее умного»",hint:"Фойе",desc:"Ещё одна постановка с Варей. Название говорит само за себя."},hamlet:{title:"Гамлет одной актрисы",hint:"Служебный коридор",desc:"Алла Ева в роли Гамлета, Офелии и занавеса."},closet:{title:"Подсобка",hint:"Служебный коридор, дверь с табличкой «Инвентарь»",desc:"«Не забудь, что ты здесь уже была»."},matias:{title:"Матиас Ковалевский",hint:"Бельэтаж",desc:"Основатель театра. Подозрительно похож на Матвея."},cloak18:{title:"Номерок № 18",hint:"Гардероб в фойе",desc:"«Вернёшь после спектакля»."},guestbook:{title:"Книга отзывов",hint:"Фойе",desc:"Все отзывы одним почерком."},buffet:{title:"Бутафорские бутерброды",hint:"Буфет",desc:"Нарисованы. Даже шампанское крашеное."},piano:{title:"Мелодия шкатулки",hint:"Репетиционный зал",desc:"Рояль помнит ту же мелодию, что музыкальная шкатулка."},boxview:{title:"Вид из ложи",hint:"Ложа № 3 на бельэтаже",desc:"Прима репетирует поклон для пустого зала."},paint:{title:"Спор красок",hint:"Мастерская, в маске Комедии",desc:"Алая и красная. Ни малейшего сходства."},cat:{title:"Школьный кот",hint:"Глава Матвея, школьный двор",desc:"Самый мудрый персонаж этой истории."},manga:{title:"«Весна, которую я не сказал»",hint:"Глава Матвея, кабинет литературы",desc:"Сёдзё-манга на учительском столе. Закладка на последней главе."},donut:{title:"Пончик охранника",hint:"Глава Рубена, пост охраны",desc:"Я не чудовище."},clock13:{title:"Тринадцатый час",hint:"Глава Полины, прихожая, в Комедии",desc:"БОМ. Для тех, кто опоздал на все двенадцать."},mirror_tale:{title:"Зеркальце из соседней сказки",hint:"Глава Лизы, покои принцессы",desc:"У них сокращения."}};function cv(i){const t=i.state.f,e=i.state.room||"",n=ll(i),s=[];return n.hint&&s.push(n.hint),e==="hub_backstage"&&t.masks&&!t.bridge&&s.push("Подойдите к фанерному мостику на колёсах и нажмите E: он откатится к краю люка.","Подойдите к прожектору на треноге и нажимайте E, пока луч не ляжет через мостик на люк (третье положение).","Наденьте маску Трагедии (клавиша 2). Тень мостика станет плотной, по ней можно пройти."),e==="hub_backstage"&&t.bridge&&s.push("Мост из тени держит только в маске Трагедии (клавиша 2). Без маски это просто тень."),e.startsWith("hub")&&i.has("marionette")&&!t.office_open&&s.push("Кабинет худрука: бельэтаж, гобелен на западной (левой) стене. Наденьте маску Трагедии, за гобеленом проявится дверь. Марионетка Рубена работает как ключ."),e.startsWith("pol")&&(t.pol_in||s.push("От машины идите вправо по дороге: между ёлками тропинка к свету. Ключ от дома под вторым цветочным горшком справа от двери."),t.pol_book&&!t.pol_photos&&s.push("В библиотеке пять портретов. Подойдите к каждому и нажмите E: описание расскажет, что на нём нарисовано.","Поднимите камеру (C): в видоискателе лжецы выглядят иначе. Сделайте снимок (E) каждого, игра запишет год и знак.","Лжецы: «Дети на качелях» (1897, знак ♣), «Хозяин дома» (1922, знак ⚷), «Дама с веером» (1931, знак ☾).","Хозяин входит после книги и ходит вдоль портретов. Прячьтесь в шкафах у дальней стены (E)."),t.pol_book&&!t.pol_open&&s.push("Код замка подвала: знаки лгунов по году, от старого к новому: ♣ ⚷ ☾."),t.pol_dark&&!t.pol_light&&s.push("Играете за Полину. В галерее над каждой дверью цветок на обоях. Настоящая дверь там, где бутон смотрит вверх (вторая слева).","Хозяин ходит по галерее туда-обратно. Прячьтесь в шкафах (E), когда он близко.","За настоящей дверью кухня. Щиток на стене справа от плиты: поднимите рубильник."),t.pol_light&&s.push("Вернитесь в прихожую и откройте засов подвала.")),e.startsWith("rub")&&s.push("Оба способа пройти в салон работают. В покере подсказки Вари сначала неверны: Рубен читает стол лучше, когда она молчит.","Наденьте маску Трагедии (2) перед раздачей: появится скрытый жест Зеро и вариант точной подсказки.","В последней руке Рубен сам вынимает наушник. Любой выбор ведёт дальше."),e.startsWith("mat")&&(s.push("Любой вариант раскадровки проходим. Идеальные дубли делают мир картонным и ведут к другим финалам, это не ошибка."),t.mat_umb&&!t.mat_s1&&s.push("У ворот нажмите E на «Дать знак дождю» и поймайте момент на шкале (E в красной зоне)."),t.mat_bentoG&&!t.mat_bento&&s.push("Поднимите камеру (C) и снимите их у стола, или выберите «Не мешать»."),t.mat_roof&&!t.mat_done&&s.push("В кабинете драмкружка выбирайте «Промолчать», «Не трогать», «Пусть сбивается», чтобы не вмешиваться.")),e.startsWith("eri")&&s.push("Опросите пятерых свидетелей и соберите пять улик. Одна улика видна только в маске Трагедии.","Решение доски: Мэй ↔ Фото, Грей ↔ Контракт, Вейс ↔ Записка, Кассир ↔ Квитанция. Показание «танцовщицы» правдиво, спички ничего не опровергают."),e.startsWith("liz")&&s.push("У подножия башни позовите Лизу, по косе поднимитесь наверх.","На среднем ярусе: мост через провал, затем шестерня и груз для лифта-противовеса. Обе вещи лежат на том же ярусе.","Наверху ключ висит на люстре: опустите её."),e.startsWith("ang")&&s.push("Дома: мамин кейс и разговор с Ангелиной, потом кастинг в агентстве. После фотостудии заедьте домой: быстрое переодевание (E в зоне). Затем сведение демо и шоукейс.","В хореографии повторяйте стрелки. В зеркальном раунде лево и право меняются местами."),s.length||s.push("Осмотритесь: объекты с ромбиком можно изучить клавишей E. Задание и подсказки всегда в журнале (Tab)."),{title:n.main||"Что делать дальше",steps:s}}const Ch=new Map,dt=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)},hv={camera:i=>{dt(i,4,10,24,16,"#26262c"),dt(i,6,7,7,3,"#34343c"),dt(i,22,8,4,2,"#c8c8d0"),dt(i,11,12,11,11,"#4a4a58"),dt(i,13,14,7,7,"#7aa0c8"),dt(i,14,15,3,2,"#d8f0ff"),dt(i,5,12,3,2,"#c41e3a")},marionette:i=>{dt(i,6,2,20,2,"#5a4029");for(const t of[8,16,24])dt(i,t,4,1,7,"#ddd");dt(i,12,10,8,7,"#e8d8c0"),dt(i,12,10,4,7,"#f4ecd8"),dt(i,13,12,1,1,"#111"),dt(i,18,12,1,1,"#111"),dt(i,12,17,8,7,"#a3122a"),dt(i,9,17,3,7,"#e8d8c0"),dt(i,20,17,3,7,"#e8d8c0"),dt(i,13,24,2,6,"#333"),dt(i,17,24,2,6,"#333")},lantern:i=>{dt(i,15,2,2,4,"#333"),dt(i,9,6,14,18,"#e84a6f"),dt(i,12,8,8,14,"#ffd060"),dt(i,9,10,14,1,"#b03050"),dt(i,9,18,14,1,"#b03050"),dt(i,11,24,10,2,"#333"),dt(i,14,26,4,4,"#f2c230")},archive_card:i=>{dt(i,3,7,26,18,"#efe3c4"),dt(i,3,7,26,3,"#8e1830");for(let t=0;t<4;t++)dt(i,6,13+t*3,18-t*3,1,"#5a4029");dt(i,22,18,4,4,"#3a2a14")},braid:i=>{for(let t=2;t<30;t++){const e=13+Math.sin(t/2.2)*4;dt(i,e,t,6,1,t%4<2?"#8c6a45":"#6a4a2a")}dt(i,12,26,8,3,"#c41e3a")},demo:i=>{dt(i,3,8,26,17,"#1a1420"),dt(i,6,10,20,7,"#ff9ad8"),dt(i,9,19,14,4,"#333"),dt(i,10,20,3,2,"#aaa"),dt(i,19,20,3,2,"#aaa"),dt(i,8,12,16,1,"#fff")},flashlight:i=>{dt(i,6,13,16,7,"#3a3a40"),dt(i,22,11,6,11,"#5a5a62"),dt(i,23,12,4,9,"#fff4c8"),dt(i,10,11,3,2,"#c41e3a")},porch_key:i=>{dt(i,4,10,9,10,"#b08a2c"),dt(i,6,12,5,6,"#000"),dt(i,13,14,15,3,"#b08a2c"),dt(i,22,17,2,4,"#b08a2c"),dt(i,26,17,2,3,"#b08a2c")},tower_key:i=>{dt(i,4,9,10,12,"#d4ae48"),dt(i,6,11,6,8,"#000"),dt(i,14,14,14,3,"#d4ae48"),dt(i,21,17,2,4,"#d4ae48"),dt(i,25,17,2,5,"#d4ae48"),dt(i,7,6,4,3,"#e84a6f")},gear:i=>{dt(i,8,8,16,16,"#b08a2c"),dt(i,13,3,6,26,"#b08a2c"),dt(i,3,13,26,6,"#b08a2c"),dt(i,13,13,6,6,"#3a2a14")},weight:i=>{dt(i,6,11,20,18,"#484e59"),dt(i,10,7,12,5,"#5e6673"),dt(i,13,3,6,5,"#343841"),dt(i,8,14,3,12,"#78818f")},emp:i=>{dt(i,6,9,20,15,"#22303a"),dt(i,9,12,14,6,"#40e0d0"),dt(i,13,4,2,5,"#888"),dt(i,12,20,8,2,"#ff4fa0")},owner_mask:i=>{dt(i,7,4,18,22,"#e8e4d8"),dt(i,10,10,4,4,"#111"),dt(i,18,10,4,4,"#111"),dt(i,11,19,10,2,"#111"),dt(i,9,17,2,2,"#111"),dt(i,21,17,2,2,"#111")},e_photo:i=>{dt(i,5,5,22,24,"#eee"),dt(i,7,7,18,15,"#666"),dt(i,10,11,4,9,"#222"),dt(i,18,11,4,9,"#222"),dt(i,11,9,3,3,"#bbb"),dt(i,19,9,3,3,"#bbb")},e_contract:i=>{dt(i,6,3,20,26,"#ececec");for(let t=0;t<6;t++)dt(i,9,7+t*3,14,1,"#888");dt(i,9,23,14,4,"#c41e3a")},e_letter:i=>{dt(i,4,8,24,17,"#e8e8e8"),dt(i,4,8,12,9,"#cfcfcf"),dt(i,16,8,12,9,"#d8d8d8"),dt(i,14,15,4,3,"#555")},e_ticket:i=>{dt(i,4,9,24,14,"#ddd"),dt(i,8,9,1,14,"#999");for(let t=0;t<3;t++)dt(i,11,12+t*3,14,1,"#666")},e_matches:i=>{dt(i,6,9,20,14,"#333"),dt(i,6,9,20,3,"#6a8ad0");for(let t=0;t<4;t++)dt(i,9+t*4,4,2,6,"#d8c8a0"),dt(i,9+t*4,3,2,2,"#a3122a")}};function Eh(i){const t=Ch.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=32;const n=e.getContext("2d");(hv[i]||(h=>{dt(h,6,6,20,20,"#8a7a5a"),dt(h,9,9,14,14,"#d4ae48")}))(n);const s=n.getImageData(0,0,32,32),r=s.data,a=new Uint8ClampedArray(r),o=(h,l)=>h>=0&&l>=0&&h<32&&l<32&&a[(l*32+h)*4+3]>40;for(let h=0;h<32;h++)for(let l=0;l<32;l++)if(!o(l,h)&&(o(l-1,h)||o(l+1,h)||o(l,h-1)||o(l,h+1))){const d=(h*32+l)*4;r[d]=22,r[d+1]=17,r[d+2]=20,r[d+3]=255}n.putImageData(s,0,0);const c=e.toDataURL();return Ch.set(i,c),c}const Rn="#eadfc8",$e="#b9a888",dn="#c9a35a",ts="#b3142c",wi="#6e0a18",xs="#120c0d",Th=(i,t,e,n=Rn,s=.16)=>`<path d="M${i},${t-e} L${i+e*s},${t-e*s} L${i+e},${t} L${i+e*s},${t+e*s} L${i},${t+e} L${i-e*s},${t+e*s} L${i-e},${t} L${i-e*s},${t-e*s}Z" fill="${n}"/>`,uv=(i,t,e,n=dn)=>{let s="";for(let r=0;r<16;r++){const a=r*Math.PI/8,o=r%2?e*.55:e,c=.06;s+=`<path d="M${i},${t} L${i+Math.cos(a-c)*6},${t+Math.sin(a-c)*6} L${i+Math.cos(a)*o},${t+Math.sin(a)*o} L${i+Math.cos(a+c)*6},${t+Math.sin(a+c)*6}Z" fill="${n}"/>`}return s+`<circle cx="${i}" cy="${t}" r="${e*.17}" fill="${n}" stroke="${xs}" stroke-width="1.5"/>`},Ah=(i,t)=>`<g><path d="${i}" stroke="${$e}" stroke-width="30" fill="none"/><path d="${i}" stroke="${xs}" stroke-width="30" stroke-dasharray="3 9" fill="none"/><path d="${i}" stroke="#2a2220" stroke-width="16" fill="none"/><path d="${i}" stroke="${$e}" stroke-width="16" stroke-dasharray="2 22" fill="none" opacity=".8"/></g>`,Lh=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n}) scale(${e})">
  <path d="M0,0 C-10,40 -6,90 4,140" stroke="#3b4a34" stroke-width="5" fill="none"/><path d="M2,70 C-30,60 -52,72 -60,96 C-36,92 -14,86 2,74Z" fill="#3b4a34"/>
  ${[0,72,144,216,288].map(s=>`<path transform="rotate(${s})" d="M0,0 C-14,-20 -16,-52 0,-78 C16,-52 14,-20 0,0Z" fill="${Rn}" stroke="${$e}" stroke-width="2"/><path transform="rotate(${s})" d="M0,-6 L0,-60" stroke="${$e}" stroke-width="1.5"/>`).join("")}
  ${[-30,-10,10,30].map(s=>`<path transform="rotate(${s})" d="M0,0 L0,-46" stroke="${dn}" stroke-width="1.6"/><ellipse transform="rotate(${s})" cx="0" cy="-48" rx="3" ry="6" fill="#a0602a"/>`).join("")}</g>`,fv=(i,t,e)=>`<g transform="translate(${i} ${t}) scale(${e})">
  <path d="M0,20 C6,70 -4,110 10,150" stroke="#2c3a2a" stroke-width="5" fill="none"/>
  ${[0,90,180,270].map((n,s)=>`<path transform="rotate(${n+20})" d="M0,0 C-44,-6 -58,-48 -30,-66 C-8,-80 22,-70 30,-50 C40,-24 22,-4 0,0Z" fill="${s%2?ts:"#c8202e"}" stroke="${wi}" stroke-width="2"/>`).join("")}
  ${[0,60,120,180,240,300].map(n=>`<path transform="rotate(${n})" d="M0,0 C-6,-14 -4,-30 0,-40" stroke="${wi}" stroke-width="1.5" fill="none" opacity=".7"/>`).join("")}
  <circle r="14" fill="#1c1416"/>${[0,45,90,135,180,225,270,315].map(n=>`<circle transform="rotate(${n})" cx="0" cy="-20" r="2.4" fill="#1c1416"/>`).join("")}</g>`,zr=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n})"><path d="M-6,0 C-6,${e*.3} -5,${e*.55} -4,${e*.62} L-3.4,${e*.66} C-4,${e*.8} -3,${e*.95} 0,${e} C3,${e*.95} 4,${e*.8} 3.4,${e*.66} L4,${e*.62} C5,${e*.55} 6,${e*.3} 6,0Z" fill="${Rn}" stroke="#7a6a52" stroke-width="1.6"/>${[.3,.62].map(s=>`<path d="M-4,${e*s} C-1,${e*s+3} 1,${e*s+3} 4,${e*s}" stroke="#7a6a52" stroke-width="1.2" fill="none"/>`).join("")}<path d="M-2.4,${e-7} C-1,${e-3} 1,${e-3} 2.4,${e-7}" stroke="#a89878" stroke-width="1.2" fill="none"/></g>`,dv=`<g transform="translate(1010 34) rotate(14)">
  <path d="M84,-40 C110,-30 140,-38 168,-60 L184,-20 C160,0 128,10 100,8Z" fill="#1c1416" stroke="${$e}" stroke-width="1.5"/>
  ${[0,1,2,3,4,5].map(i=>`<path d="M${84+i*3},${-38+i*8} l-10,4 l10,3" stroke="${$e}" stroke-width="1.4" fill="none"/>`).join("")}
  <path d="M86,-36 C60,-30 34,-24 10,-6 C0,4 -4,18 2,30 C18,44 46,46 70,38 C84,30 96,10 100,4Z" fill="${Rn}" stroke="#7a6a52" stroke-width="2"/>
  ${[[20,-2],[36,-4],[52,-4],[66,0]].map(([i,t])=>`<path d="M${i},${t} C${i+4},${t+8} ${i+6},${t+16} ${i+4},${t+26}" stroke="#a89878" stroke-width="1.3" fill="none"/>`).join("")}
  ${zr(6,22,58,22)}${zr(24,32,70,10)}${zr(44,36,72,-2)}${zr(62,32,60,-14)}
  <g transform="translate(86 20) rotate(-58)"><path d="M-7,0 C-7,20 -5,34 0,40 C5,34 7,20 7,0Z" fill="${Rn}" stroke="#7a6a52" stroke-width="1.6"/></g>
  ${[[10,10],[30,22],[50,26],[70,20]].map(([i,t])=>`<path d="M${i},${t} l4,2" stroke="#7a6a52" stroke-width="1.4"/>`).join("")}</g>`,pv=`<g transform="translate(1046 232) rotate(-14) scale(.85)"><path d="M-46,-38 C-20,-56 26,-56 50,-40 C58,-12 54,26 38,52 C26,70 6,78 -6,70 C-16,62 -8,40 -26,30 C-44,20 -56,-12 -46,-38Z" fill="${Rn}" stroke="${$e}" stroke-width="2.5"/>
  <path d="M-30,-14 C-20,-24 -4,-22 2,-10 C-6,-2 -22,-2 -30,-14Z" fill="${xs}"/><path d="M14,-12 C22,-24 38,-22 42,-10 C36,0 22,0 14,-12Z" fill="${xs}"/>
  <path d="M-48,-30 C-20,-46 26,-48 50,-34" stroke="${dn}" stroke-width="2.5" fill="none"/><path d="M4,8 C6,20 10,30 18,34" stroke="${$e}" stroke-width="2" fill="none"/></g>`,mv=`<g transform="translate(470 676) rotate(-12)"><rect x="-58" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${$e}" stroke-width="3"/><rect x="14" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${$e}" stroke-width="3"/>
  <ellipse cx="-36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${Rn}" stroke-width="3"/><ellipse cx="36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${Rn}" stroke-width="3"/><rect x="-14" y="-12" width="28" height="18" rx="4" fill="${dn}"/>
  <path d="M-46,-22 L-46,18 M24,-22 L24,18" stroke="${Rn}" stroke-width="3" opacity=".6"/><path d="M0,-12 C10,-50 60,-60 90,-48" stroke="${dn}" stroke-width="3" fill="none"/></g>`,gv=`<g transform="translate(890 668) rotate(-10)"><rect x="-74" y="-44" width="148" height="88" rx="6" fill="#d8ccb2" stroke="${$e}" stroke-width="3"/><rect x="-66" y="-36" width="132" height="72" fill="none" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M-46,20 L-46,-6 L0,-24 L46,-6 L46,20Z" fill="none" stroke="#5a4a3a" stroke-width="2"/>${[-34,-18,-2,14,30].map(i=>`<path d="M${i},20 L${i},0" stroke="#5a4a3a" stroke-width="2"/>`).join("")}<path d="M-56,24 L56,24" stroke="#5a4a3a" stroke-width="2"/>
  <text x="0" y="-27" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" fill="#5a4a3a" letter-spacing="2">ТЕАТРЪ</text><circle cx="-74" cy="0" r="8" fill="${xs}"/><circle cx="74" cy="0" r="8" fill="${xs}"/></g>`;function Xu(i="lg"){return`<svg class="logo-svg" viewBox="0 0 1200 800" role="img" aria-label="THE OTHER ME: APPLAUSE, PLEASE!" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="${i}iv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6eedc"/><stop offset=".55" stop-color="${Rn}"/><stop offset="1" stop-color="#a8977a"/></linearGradient>
  <linearGradient id="${i}rd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2283c"/><stop offset=".6" stop-color="${ts}"/><stop offset="1" stop-color="${wi}"/></linearGradient>
  <linearGradient id="${i}cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${wi}"/><stop offset=".5" stop-color="${ts}"/><stop offset="1" stop-color="${wi}"/></linearGradient>
  <filter id="${i}worn" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -9 6.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <radialGradient id="${i}vig"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <clipPath id="${i}arch"><path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262Z"/></clipPath>
  <filter id="${i}glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="5" result="b0"/><feColorMatrix in="b0" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g class="lg-orn" stroke-linejoin="round"><g transform="translate(600 262) scale(1.32) translate(-600 -262)">
  <path d="M360,262 C360,170 440,118 520,112 C556,108 584,96 600,78 C616,96 644,108 680,112 C760,118 840,170 840,262" stroke="${dn}" stroke-width="5" fill="none"/>
  <path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262" stroke="${$e}" stroke-width="2" fill="none"/>
  ${[400,470,730,800].map((t,e)=>`<circle cx="${t}" cy="${[196,142,142,196][e]}" r="5" fill="${dn}"/>`).join("")}
  <ellipse cx="600" cy="420" rx="560" ry="330" fill="url(#${i}vig)"/>
  <g clip-path="url(#${i}arch)"><rect x="370" y="90" width="460" height="180" fill="#160a0c"/>
    <path d="M370,120 L830,120 L830,150 C800,206 760,214 730,170 C700,226 650,230 600,178 C550,230 500,226 470,170 C440,214 400,206 370,150Z" fill="url(#${i}cur)"/>
    <path d="M370,150 C400,206 440,214 470,170 C500,226 550,230 600,178 C650,230 700,226 730,170 C760,214 800,206 830,150" stroke="${wi}" stroke-width="3" fill="none"/>
    ${[420,530,670,780].map(t=>`<path d="M${t},128 C${t+10},160 ${t-6},180 ${t+4},200" stroke="#e2283c" stroke-width="2" fill="none" opacity=".5"/>`).join("")}
    <path d="M370,130 C410,170 420,230 400,270 L370,270Z" fill="${ts}"/><path d="M830,130 C790,170 780,230 800,270 L830,270Z" fill="${ts}"/></g>
  ${[470,730].map(t=>`<path d="M${t},170 L${t},214" stroke="${dn}" stroke-width="2"/><path d="M${t-6},214 L${t+6},214 L${t+4},236 L${t-4},236Z" fill="${dn}"/>`).join("")}
  ${uv(600,92,40)}</g>
  <path d="M372,262 L828,262" stroke="${dn}" stroke-width="4"/><path d="M386,268 L814,268" stroke="${$e}" stroke-width="1.5"/>
  ${Ah("M40,560 C90,520 160,540 190,600 C220,660 300,700 380,690")}
  ${Ah("M1060,420 C1100,392 1150,402 1162,444 C1172,480 1150,506 1124,504")}
  
  ${Lh(110,440,.85,-18)}${Lh(162,486,.55,24)}
  ${fv(1104,610,.68)}
  ${dv}
  ${[[1002,104,1030,196],[1026,120,1070,200],[1052,126,940,290],[1076,118,1140,420]].map(([t,e,n,s])=>`<path d="M${t},${e} L${n},${s}" stroke="${$e}" stroke-width="1.6" opacity=".85"/>`).join("")}
  ${pv}
  <g stroke="${$e}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M268,372 C226,352 196,370 200,398 C204,422 236,424 244,404 C250,388 232,380 224,392"/><path d="M268,372 C240,330 260,300 290,300"/><path d="M262,440 C230,450 210,474 226,494"/>
    <path d="M940,372 C982,352 1012,370 1008,398 C1004,422 972,424 964,404 C958,388 976,380 984,392"/><path d="M940,440 C972,450 992,474 976,494"/>
    ${[[212,470],[236,316],[998,470]].map(([t,e])=>`<path d="M${t},${e} l-8,-10 M${t},${e} l10,-6"/>`).join("")}
  </g>
</g>
<g filter="url(#${i}worn)">
  <text x="248" y="246" font-family="Aurelia, serif" font-size="58" fill="url(#${i}iv)" letter-spacing="8">THE</text><path d="M246,258 L360,258" stroke="${dn}" stroke-width="2"/>
  <text x="600" y="418" text-anchor="middle" font-family="Aurelia, serif" fill="url(#${i}iv)" stroke="#2a1e1a" stroke-width="1.5" paint-order="stroke"><tspan font-size="212" dy="10">O</tspan><tspan font-size="168" dy="-10" letter-spacing="4">THER</tspan><tspan font-size="212" dx="30" dy="10">M</tspan><tspan font-size="168" dy="-10">E</tspan><tspan font-size="150" fill="${dn}" dx="10">:</tspan></text>
  </g>
<text x="612" y="528" text-anchor="middle" font-family="Cintarini, cursive" font-size="104" fill="url(#${i}rd)" stroke="url(#${i}rd)" stroke-width="3.2" transform="rotate(-4 600 510)" filter="url(#${i}glow)">Applause, Please!</text>
<g class="lg-orn2" transform="translate(0 -20)">
  <path d="M280,630 C380,612 470,640 540,626 C570,620 586,614 600,604 C614,614 630,620 660,626 C730,640 820,612 920,630" stroke="${$e}" stroke-width="2.5" fill="none"/>
  <path d="M330,618 C300,600 300,580 322,578 M870,618 C900,600 900,580 878,578" stroke="${$e}" stroke-width="2" fill="none"/>
  <path d="M560,640 L600,736 L640,640 C626,652 612,650 600,644 C588,650 574,652 560,640Z" fill="${ts}"/><path d="M582,650 L600,712 L618,650" stroke="${wi}" stroke-width="2" fill="none"/>
  ${Th(600,640,40,Rn,.12)}
  ${mv}${gv}
  ${[[300,150,16],[1030,190,10],[110,360,12],[1150,580,14],[250,520,9],[700,690,10],[1170,300,8],[60,700,10],[780,60,9],[420,70,7]].map(([t,e,n])=>Th(t,e,n,dn)).join("")}
</g></svg>`}const ze=()=>document.getElementById("ui");function pe(i,t="",e="",n){const s=document.createElement(i);return t&&(s.className=t),e&&(s.innerHTML=e),n&&n.appendChild(s),s}const ae=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;"),Rh=[["hub_mezz","Бельэтаж",40,44,250,34,"2","✦"],["hub_rehearsal","Репетиционный",40,86,62,40,"2","♪"],["hub_archive","Архив",108,86,56,40,"2","❦"],["hub_box","Ложа 3",170,86,50,40,"2","◎"],["hub_office","Кабинет К.",226,86,64,40,"2","✎"],["hub_foyer","Фойе",40,176,98,62,"1","❖"],["hub_buffet","Буфет",40,244,98,26,"1","☕"],["hub_stage","Сцена и зал",146,176,144,94,"1",""],["hub_backstage","Карман сцены",298,176,62,132,"1","⚙"],["hub_corridor","Служебный коридор",40,278,250,30,"1",""],["hub_dressing","Гримёрка",40,314,60,32,"1","★"],["hub_costume","Костюмерная",104,314,62,32,"1","♛"],["hub_props","Реквизит",170,314,56,32,"1","⚔"],["hub_workshop","Мастерская",230,314,60,32,"1","⚒"],["hub_trap","Трюм под сценой",146,400,214,34,"0","⚙"]];function vv(i,t){const e=window.__G,n=e?.f||{},s="#3a2414",r="#8e1830",a="#efe2c0",o=(b,U)=>`<g><path d="M95 ${b-9} h146 l8 9 l-8 9 h-146 l-6 -9 z" fill="#e4d0a4" stroke="${s}" stroke-width=".8"/><text x="168" y="${b+3.5}" text-anchor="middle" font-family="Playfair Display" font-size="9" fill="${r}" letter-spacing="2.5">${U}</text></g>`,c=([b,U,E,R,P,H,,S])=>{const w=t[b]||b===i,X=b===i,W=X?"#f6d9a8":w?a:"#dccba4";let Y="";b==="hub_stage"&&(Y=`<rect x="${E+6}" y="${R+6}" width="${P-12}" height="22" fill="#c8a670" stroke="${s}" stroke-width=".6"/><path d="M${E+6} ${R+28} q${(P-12)/2} 14 ${P-12} 0" fill="none" stroke="${r}" stroke-width="1.4"/>`+[0,1,2,3,4].map(V=>`<path d="M${E+14+V*3} ${R+44+V*9} q${(P-28-V*6)/2} 12 ${P-28-V*6} 0" fill="none" stroke="${r}" stroke-width="2.2" stroke-dasharray="2.2 1.2" opacity="${w?.75:.35}"/>`).join("")+`<text x="${E+P/2}" y="${R+20}" text-anchor="middle" font-family="Playfair Display" font-size="7.5" fill="${s}" letter-spacing="1.5">СЦЕНА</text>`);const it=w?U:"?";return`<g>${X?`<rect x="${E-3}" y="${R-3}" width="${P+6}" height="${H+6}" fill="none" stroke="${r}" stroke-width="1.2" stroke-dasharray="1 2"><animate attributeName="stroke-dashoffset" from="0" to="6" dur="1s" repeatCount="indefinite"/></rect>`:""}
      <rect x="${E}" y="${R}" width="${P}" height="${H}" fill="${W}" stroke="${s}" stroke-width="${X?1.6:.9}" ${w?"":'stroke-dasharray="3 2"'}/>
      <rect x="${E+2}" y="${R+2}" width="${P-4}" height="${H-4}" fill="none" stroke="${s}" stroke-width=".3" opacity=".5"/>${Y}
      ${S&&w?`<text x="${E+7}" y="${R+11}" font-size="8" fill="${r}">${S}</text>`:""}
      <text x="${E+P/2}" y="${b==="hub_stage"||b==="hub_backstage"?R+H-6:R+H/2+3}" text-anchor="middle" font-family="Lora" font-style="italic" font-size="${P<66?7:8.5}" fill="${w?s:"#9a8a6a"}">${it}</text></g>`},h=(b,U,E)=>`<g stroke="${r}" stroke-width="1.1">${Array.from({length:Math.max(2,Math.round((E-U)/5))},(R,P)=>`<line x1="${b-4}" y1="${U+P*5}" x2="${b+4}" y2="${U+P*5}"/>`).join("")}</g>`,l=h(70,126,176)+h(262,126,278)+h(320,308,400)+h(214,270,278)+`<g stroke="${r}" stroke-width="1.2" stroke-dasharray="2 2">`+[[85,238,85,244],[138,210,146,210],[290,220,298,220],[70,308,70,314],[135,308,135,314],[198,308,198,314],[260,308,260,314],[71,78,71,86],[136,78,136,86],[195,78,195,86],[258,78,258,86],[240,270,240,278]].map(([b,U,E,R])=>`<line x1="${b}" y1="${U}" x2="${E}" y2="${R}"/>`).join("")+"</g>",p=[["polina","П"],["ruben","Р"],["matvey","М"],["erika","Э"],["liza","Л"],["angelina","А"]].map(([b,U],E)=>{const R=!!n["done_"+b],P=196+E*18;return`<g><rect x="306" y="${P}" width="12" height="14" rx="5" fill="${R?"#e8c060":"#5a3a28"}" stroke="${s}" stroke-width=".6"/><text x="312" y="${P+10}" text-anchor="middle" font-family="Lora" font-size="7" fill="${R?s:"#e8d8b0"}">${U}</text></g>`}).join(""),m=Rh.find(b=>b[0]===i),g=m?`<g transform="translate(${m[2]+m[4]-9} ${m[3]+4})"><path d="M0 0 c-5 0 -6 6 0 12 c6 -6 5 -12 0 -12z" fill="${r}" stroke="#fff4e0" stroke-width=".8"/><circle cx="0" cy="4" r="1.6" fill="#fff4e0"/><animateTransform attributeName="transform" type="translate" additive="sum" values="0 0;0 -2;0 0" dur="1.2s" repeatCount="indefinite"/></g>`:"",v=`<g transform="translate(345 34)" font-family="Playfair Display" font-size="7" fill="${s}"><circle r="14" fill="none" stroke="${s}" stroke-width=".6"/><path d="M0 -13 L3 0 L0 13 L-3 0 Z" fill="${r}"/><path d="M-13 0 L0 3 L13 0 L0 -3 Z" fill="${s}" opacity=".6"/><text y="-16" text-anchor="middle">С</text></g>`,u='<circle cx="300" cy="380" r="26" fill="#c8a870" opacity=".12"/><circle cx="60" cy="140" r="18" fill="#b89860" opacity=".1"/><circle cx="210" cy="30" r="12" fill="#b89860" opacity=".08"/>',f=`<rect x="4" y="4" width="372" height="444" fill="${a}" stroke="${s}" stroke-width="1.6"/><rect x="9" y="9" width="362" height="434" fill="none" stroke="${r}" stroke-width=".7"/>`+[[9,9],[371,9],[9,443],[371,443]].map(([b,U])=>`<circle cx="${b}" cy="${U}" r="3.2" fill="${r}"/>`).join(""),_=`<text x="190" y="462" text-anchor="middle" font-family="Playfair Display" font-size="9" fill="${s}" letter-spacing="3">ТЕАТР ИМ. М. КОВАЛЕВСКОГО · ПЛАН ЗДАНИЯ</text>`,x=!!m;return`<svg viewBox="0 0 380 470" style="width:100%;max-height:66vh;display:block" xmlns="http://www.w3.org/2000/svg">${f}${u}${v}${o(26,"ЭТАЖ II · БЕЛЬЭТАЖ")}${o(160,"ЭТАЖ I · ПАРТЕР")}${o(388,"ПОДВАЛ · ТРЮМ")}${l}${Rh.map(c).join("")}${p}${g}${_}</svg><p class="warn">Красные ступени, лестницы. «?», там вы ещё не были. В кармане сцены, двери в пьесы друзей: золотые уже пройдены.${x?"":" Сейчас вы за пределами театра, в чужой пьесе."}</p>`}const _v=i=>`${Math.floor(i/3600)}:${String(Math.floor(i/60)%60).padStart(2,"0")}`,xv=Xu("m");class yv{constructor(){this.modal=!1,this.dialogOpen=!1,this.modals=[],this.log=[],this.advance=null,this.auto=!1,this.placeEl=null,this.lastQuest="",this.qRoom="",this.qT=0,this.skipping=!1,this.toastAt=0,this.lbEl=null,this.lbOn=!1,this.introPlayed=!1}init(){const t=ze();this.hudEl=pe("div","hud hidden","",t),this.maskRow=pe("div","masks","",this.hudEl),this.hudR=pe("div","hud-r","",this.hudEl),this.toasts=pe("div","toasts","",t),this.promptEl=pe("div","prompt hidden","",t),this.saveEl=pe("div","savemark","✎ сохранено",t),this.lyricEl=pe("div","lyric hidden","",t),this.dlg=pe("div","dlg hidden",'<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>',t),this.vf=pe("div","viewfinder hidden","<b>● REC</b><span>E / Enter, снимок · C / Esc, убрать камеру</span>",t),this.loadingEl=pe("div","savemark","Меняем декорации…",t),this.loadingEl.style.right="auto",this.loadingEl.style.left=".8rem",this.dlg.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="hist"?this.history():n==="auto"?(this.auto=!this.auto,e.target.style.background=this.auto?"#8e1830":"",this.auto&&this.advance&&this.advance()):n==="skip"?(this.skipping=!0,this.advance&&this.advance()):this.advance&&this.advance()}),ss(e=>{if(this.modal){e==="pause"&&this.closeTop();return}e==="act"&&this.advance&&this.advance()}),this.hudR.innerHTML='<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="inv" title="Инвентарь (I)">▣<span class="hb-n"></span></button><button class="hbtn" data-a="note" title="Журнал (Tab)">✎</button><button class="hbtn" data-a="help" title="Подсказка: что делать дальше (?)">?</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>',this.hudR.addEventListener("click",e=>{const n=e.target.closest("[data-a]")?.getAttribute("data-a");n==="cam"&&bi("camera"),n==="inv"&&bi("inventory"),n==="note"&&bi("notebook"),n==="pause"&&bi("pause"),n==="help"&&bi("help")}),this.questEl=pe("div","questbox","",this.hudEl),this.questEl.addEventListener("click",()=>this.notebook("quests")),this.questEl.addEventListener("mouseenter",()=>this.questEl.classList.remove("mini")),this.maskRow.addEventListener("click",e=>{const n=e.target.closest("[data-m]");if(n){const s=n.dataset.m;s==="none"?Vt.state.mask&&Vt.setMask(Vt.state.mask):Vt.state.mask!==s&&Vt.setMask(s),this.maskRow.classList.remove("open");return}e.target.closest(".maskmain")&&(this.maskRow.classList.toggle("open"),qt.sfx("click"))}),this.buildTouch(),this.applySettings()}applySettings(){document.documentElement.style.setProperty("--s",String(Me.uiScale)),document.body.classList.toggle("contrast",Me.contrast),qt.applyVolumes(),this.touchEl.classList.toggle("hidden",!Me.touch||!Vt.running)}say(t){this.dialogOpen=!0,this.dlg.classList.remove("hidden"),this.prompt(null);const e=this.dlg.querySelector(".port"),n=e.querySelector("img"),s=this.dlg.querySelector(".name"),r=this.dlg.querySelector(".text");return e.classList.toggle("none",!t.portrait),t.portrait&&(n.src=t.portrait),e.classList.toggle("noir",t.portrait.endsWith("#noir")),e.classList.toggle("art",t.portrait.startsWith("portraits/")),s.innerHTML=t.name?`<i style="background:${t.color}"></i>${ae(t.name)}`:"",r.classList.toggle("it",t.italic),this.log.push({name:t.name,text:t.text,color:t.color}),this.log.length>250&&this.log.shift(),new Promise(a=>{const o=t.text;let c=0,h=!1,l,d;const p=Me.textSpeed,m=()=>{clearInterval(l),clearTimeout(d),this.advance=null,a()},g=()=>{c=o.length,r.textContent=o,h=!0,clearInterval(l),this.auto&&(d=setTimeout(m,900+o.length*45))};if(Vt.fast||this.skipping&&t.seen||rs("skip")&&t.seen){r.textContent=o,setTimeout(m,Vt.fast?0:60);return}this.skipping=!1,p?(r.textContent="",l=setInterval(()=>{c=Math.min(o.length,c+Math.max(1,Math.round(p/30))),r.textContent=o.slice(0,c),c%3===0&&/[а-яa-z]/i.test(o[c-1]||"")&&qt.blip(t.pitch),c>=o.length&&g()},33)):g(),this.advance=()=>{h?m():g()}})}sayHide(){this.dialogOpen=!1,this.dlg.classList.add("hidden"),this.skipping=!1}choice(t){if(Vt.fast)return Promise.resolve(Vt.autoChoice?Vt.autoChoice(t):0);const e=pe("div","choices"+(this.dialogOpen?"":" solo"),"",ze());let n=0;return this.skipping=!1,new Promise(s=>{const r=t.map((l,d)=>{const p=pe("button","choice"+(l.mask?" mask":""),`<span class="n">${d+1}.</span>${ae(l.text)}`,e);return p.onclick=m=>{m.stopPropagation(),h(d)},p.onmouseenter=()=>{n=d,a()},p}),a=()=>r.forEach((l,d)=>l.classList.toggle("on",d===n)),o=ss((l,d)=>{if(!this.modal){if(l==="up")n=(n+t.length-1)%t.length,qt.sfx("hover"),a();else if(l==="down")n=(n+1)%t.length,qt.sfx("hover"),a();else if(l==="act")h(n);else if(/^Digit[1-9]$/.test(d)){const p=parseInt(d.slice(5))-1;p<t.length&&h(p)}}}),c=this.advance;this.advance=null;const h=l=>{o(),e.remove(),qt.sfx("click"),this.advance=c,this.log.push({name:"→",text:t[l].text,color:"#d4ae48"}),setTimeout(()=>s(l),0)};a()})}history(){const e=this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map(n=>`<p>${n.name?`<b style="color:${n.name==="→"?"#8e1830":"#3a2a14"}">${ae(n.name)}</b> `:""}${n.name?"":"<i>"}${ae(n.text)}${n.name?"":"</i>"}</p>`).join("")||"<p><i>Пока никто ничего не сказал.</i></p>"}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`).querySelector(".body");e.scrollTop=e.scrollHeight}hudShow(t){this.hudEl.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!Me.touch),t||(this.sayHide(),this.prompt(null),this.lyric(null))}hud(){const t=Vt.state.f,e=Vt.room?.def.noMasks,n=a=>a==="comedy"?"☺":a==="tragedy"?"☹":a==="drama"?"❦":"◐",s=Vt.state.mask;this.maskRow.innerHTML=t.masks&&!e?`<button class="maskb maskmain${s?" on m-"+s:""}" title="Маски: 1 Комедия, 2 Трагедия, 3 Драма, Q снять">${n(s)}<small>${s?Ph[s]:"Маски"}</small></button><div class="maskmenu">${Object.entries(Ph).map(([a,o],c)=>`<button class="maskopt${s===a?" on":""}" data-m="${a}"><b>${n(a)}</b>${o}<i>${c+1}</i></button>`).join("")}<button class="maskopt" data-m="none"><b>◐</b>Без маски<i>Q</i></button></div>`:"",this.hudR.children[0].classList.toggle("hidden",!Vt.has("camera")||!!Vt.room?.def.noCamera);const r=this.hudR.children[1];r.classList.toggle("hidden",!Vt.state.inv.length),r.querySelector(".hb-n").textContent=String(Vt.state.inv.length),this.quest()}quest(){if(!Vt.running||!this.questEl)return;const t=ll(Vt),e=Vt.room,n=e?e.inters.filter(o=>o.enabled&&!(o.cond&&!o.cond())&&!o.quiet&&!/^(d_|door|out|back|up|stair|stairs|lift|front)/.test(o.id)&&!(Vt.state.f.used||{})[e.id+":"+o.id]).length:0,s=t.main+"|"+(t.hint||"")+"|"+n+"|"+(t.extra||[]).join("|");if(s===this.lastQuest)return;const r=this.lastQuest.split("|")[0]!==t.main;this.lastQuest=s,this.questEl.classList.toggle("hidden",!t.main),this.questEl.innerHTML=`<small>Задание</small><b>${ae(t.main)}</b>${t.hint?`<i>${ae(t.hint)}</i>`:""}${n?`<em>Здесь ещё можно осмотреть: ${n}</em>`:""}`;const a=e?e.id:"";(r||a!==this.qRoom)&&(this.qRoom=a,this.questEl.classList.remove("mini"),clearTimeout(this.qT),this.qT=setTimeout(()=>this.questEl.classList.add("mini"),6500)),r&&t.main&&!Vt.fast&&(this.questEl.classList.remove("flash"),this.questEl.offsetWidth,this.questEl.classList.add("flash"),qt.sfx("pencil"))}showItem(t){if(Vt.fast)return;const e=qs[t];qt.sfx("paper");const n=pe("div","reveal",`<div class="reveal-card"><img src="${Eh(t)}" alt=""><b>${ae(e?.name||t)}</b><span>${ae(e?.desc||"")}</span><small>в инвентаре · I</small></div>`,ze()),s=()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)};setTimeout(s,2600),n.onclick=s}photoZoom(t,e){qt.sfx("paper");const n=pe("div","reveal zoom",`<div class="reveal-card photo-pop big" style="--r:-1.5deg"><img class="ph" src="${t}" alt=""><span class="cap">${ae(e)}</span><small>нажмите, чтобы закрыть</small></div>`,ze());n.style.zIndex="90",n.onclick=s=>{s.stopPropagation(),n.classList.add("out"),setTimeout(()=>n.remove(),450)}}showPhoto(t,e){if(Vt.fast)return;qt.sfx("paper");const n=pe("div","reveal",`<div class="reveal-card photo-pop" style="--r:-3deg"><img class="ph" src="${t}" alt=""><span class="cap">${ae(e)}</span><small>снимок в журнале · Tab</small></div>`,ze()),s=()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)};setTimeout(s,2400),n.onclick=s}prompt(t,e=0,n=0){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.dataset.l!==t&&(this.promptEl.dataset.l=t,this.promptEl.innerHTML=`<kbd>E</kbd>${ae(t)}`),this.promptEl.style.left=Math.min(86,Math.max(14,e*100))+"%",this.promptEl.style.top=Math.max(8,n*100)+"%"}toast(t,e="✦"){if(Vt.fast)return;const n=performance.now(),s=Math.max(n,this.toastAt);this.toastAt=s+1400,setTimeout(()=>{const r=pe("div","toast",`<b>${e}</b>${ae(t)}`,this.toasts);setTimeout(()=>r.remove(),4100)},s-n)}place(t){if(this.placeEl&&this.placeEl.remove(),Vt.fast)return;const e=this.placeEl=pe("div","place",`<b>${ae(t)}</b><i></i>`,ze());setTimeout(()=>e.remove(),3700)}saved(t){this.saveEl.textContent=t==="auto"?"✎ автосохранение":"✎ сохранено",this.saveEl.classList.add("on"),setTimeout(()=>this.saveEl.classList.remove("on"),1600)}loading(t){this.loadingEl.classList.toggle("on",t)}lyric(t,e=""){if(!t){this.lyricEl.classList.add("hidden");return}this.lyricEl.classList.remove("hidden"),this.lyricEl.innerHTML=(e?`<small>${ae(e)}</small>`:"")+ae(t).replace(/\n/g,"<br>")}viewfinder(t){this.vf.classList.toggle("hidden",!t)}letterbox(t){t!==this.lbOn&&(this.lbOn=t,this.lbEl||(this.lbEl=pe("div","letterbox","<i></i><i></i>",ze())),this.lbEl.classList.toggle("on",t))}curtainEl(){const e=n=>`<div class="cur-half ${n}">${Array.from({length:14},(s,r)=>`<b style="--i:${r};--n:14"></b>`).join("")}</div>`;return pe("div","trans curtain2",`${e("l")}${e("r")}<div class="cur-val"></div>`,ze())}async transition(t,e){if(t==="curtain"){let s=ze().querySelector(".trans");if(e==="out")s&&s.remove(),s=this.curtainEl(),s.offsetWidth,s.classList.add("on"),qt.sfx("curtain"),await new Promise(r=>setTimeout(r,1100));else if(s){s.classList.remove("on"),s.classList.add("open");const r=s;setTimeout(()=>r.remove(),1500),await new Promise(a=>setTimeout(a,500))}return}let n=ze().querySelector(".trans");if(e==="out")n&&n.remove(),n=pe("div","trans "+t,"",ze()),n.offsetWidth,n.classList.add("on"),t==="curtain"&&qt.sfx("curtain"),t==="glitch"&&qt.sfx("glitch"),(t==="mirror"||t==="page")&&qt.sfx("whoosh"),await new Promise(s=>setTimeout(s,t==="curtain"?760:520));else if(n){n.classList.remove("on");const s=n;setTimeout(()=>s.remove(),800),await new Promise(r=>setTimeout(r,350))}}help(){const t=cv(Vt);return qt.sfx("paper"),this.paper({title:"Подсказка",cls:"help",body:`<p class="help-goal">${ae(t.title)}</p><ol class="help-steps">${t.steps.map(e=>`<li>${ae(e)}</li>`).join("")}</ol><p class="help-foot">Кнопка «?» доступна всегда. Подсказка меняется вместе с сюжетом.</p>`})}paper(t){return Vt.fast?Promise.resolve():(qt.sfx("paper"),new Promise(e=>{this.open(`<div class="paper ${t.cls||""}">${t.stamp?`<div class="stamp">${t.stamp}</div>`:""}${t.title?`<h3>${t.title}</h3>`:""}<div class="${t.hand?"hand":""}">${t.body}</div>${t.sign?`<div class="sign">${t.sign}</div>`:""}<button class="btn small ok" data-x>${t.btn||"Отложить"}</button></div>`,{raw:!0,onClose:()=>{qt.sfx("paper"),e()}}).querySelector(".ok").focus({preventScroll:!0})}))}black(t){let e=document.getElementById("blackout");e||(e=pe("div","","",ze()),e.id="blackout"),e.classList.toggle("on",t)}card(t,e={}){return Vt.fast?Promise.resolve():new Promise(n=>{const s=pe("div","card",t.map((h,l)=>{const[d,p]=Array.isArray(h)?h:[h,""];return`<p class="${p}" style="animation-delay:${l*.9}s">${d}</p>`}).join("")+'<div class="more">нажмите, чтобы продолжить</div>',ze()),r=performance.now();let a=!1;const o=()=>{a||performance.now()-r<900||(a=!0,c(),s.classList.add("out"),setTimeout(()=>{s.remove(),n()},650))},c=ss(h=>{h==="act"&&!this.modal&&o()});s.onclick=o})}open(t,e={}){const n=pe("div","modal",e.raw?t:`<div class="sheet ${e.cls||""}">${t}</div>`,ze());return n.onCloseCb=e.onClose,n.noClose=e.noClose,this.modals.push(n),this.modal=!0,this.prompt(null),wh(!0),n.addEventListener("click",s=>{s.target.closest("[data-x]")&&(qt.sfx("click"),this.close(n))}),n}close(t){const e=this.modals.indexOf(t);if(e<0)return;this.modals.splice(e,1),t.classList.add("closing"),setTimeout(()=>t.remove(),280),this.modal=this.modals.length>0,this.modal||wh(!1);const n=t.onCloseCb;n&&n()}closeTop(){const t=this.modals[this.modals.length-1];t&&!t.noClose&&(qt.sfx("click"),this.close(t))}confirm(t,e="Да",n="Отмена"){return new Promise(s=>{let r=!1;const a=this.open(`<h2>Минутку</h2><div class="body"><p>${t}</p></div><div class="foot"><button class="btn small" data-x>${n}</button><button class="btn small red" data-y>${e}</button></div>`,{cls:"narrow",onClose:()=>s(r)});a.querySelector("[data-y]").onclick=()=>{r=!0,this.close(a)}})}pause(){if(this.modal)return;Vt.paused=!0,qt.suspend(!0);const t=this.open(`<h2>Антракт <small>${ae(Vt.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`,{cls:"narrow",onClose:()=>{Vt.paused=!1,qt.suspend(!1),qt.muffle(Vt.state.mask==="tragedy"?900:Vt.state.mask==="drama"?2600:2e4)}});t.addEventListener("click",async e=>{const n=e.target.dataset?.a;n&&(qt.sfx("click"),n==="resume"&&this.close(t),n==="save"&&this.saveLoad("save"),n==="load"&&this.saveLoad("load"),n==="note"&&this.notebook(),n==="set"&&this.settings(),n==="menu"&&await this.confirm("Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.","Выйти")&&(this.close(t),Vt.stopToMenu(),this.mainMenu()))}),t.querySelector(".btn").focus()}settings(){const t=Me,e=(o,c,h="")=>`<div class="row-set"><label>${o}${h?`<small>${h}</small>`:""}</label><div>${c}</div></div>`,n=(o,c,h,l)=>`<input type="range" data-k="${o}" min="${c}" max="${h}" step="${l}" value="${t[o]}">`,s=o=>`<input type="checkbox" data-k="${o}" ${t[o]?"checked":""}>`,r=this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${e("Музыка",n("music",0,1,.05))}${e("Эффекты",n("sfx",0,1,.05))}${e("Голоса",n("voice",0,1,.05),"звуковой сигнал реплик; все реплики идут с субтитрами")}
      ${e("Скорость текста",n("textSpeed",0,120,5),"0: мгновенно")}${e("Масштаб интерфейса",n("uiScale",.8,1.5,.05))}
      ${e("Качество графики",'<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>')}
      ${e("Меньше вспышек",s("reduceFlash"),"приглушает вспышки и глитч-эффекты")}${e("Без тряски камеры",s("reduceShake"))}${e("Повышенный контраст текста",s("contrast"))}
      ${e("Облегчённые ритм-сцены",s("rhythmEasy"),"широкие окна попадания, меньше нот, нельзя проиграть")}${e("Задержка звука, мс",n("rhythmOffset",-200,200,5)+" <span data-off></span>","для ритм-сцен")}
      ${e("",'<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${e("Сенсорное управление",s("touch"),"экспериментально: джойстик и кнопки на экране")}${e("Вступление при каждом запуске",s("introAlways"),"иначе, только при первом запуске")}
      <p class="warn">Управление: WASD или стрелки, ходьба, Shift, быстрее, E / Enter / Пробел, действие, 1–3, маски, Q: снять маску, C: фотоаппарат, Tab, блокнот, H: история, Ctrl, пропуск прочитанного, Esc, пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);r.querySelector("[data-k=quality]").value=t.quality;const a=r.querySelector("[data-off]");a.textContent=t.rhythmOffset+"",r.addEventListener("input",o=>{const c=o.target,h=c.dataset.k;h&&(t[h]=c.type==="checkbox"?c.checked:c.tagName==="SELECT"?c.value:parseFloat(c.value),a.textContent=t.rhythmOffset+"",hh(),this.applySettings(),h==="quality"&&Vt.R.setup(),h==="sfx"&&qt.sfx("click"))}),r.addEventListener("click",async o=>{if(o.target.dataset?.a==="calib"){const{calibrate:c}=await Vn(async()=>{const{calibrate:l}=await import("./minigames-DEPAC5jg.js");return{calibrate:l}},[],import.meta.url),h=await c();h!=null&&(t.rhythmOffset=h,hh(),r.querySelector("[data-k=rhythmOffset]").value=String(h),a.textContent=h+"")}})}async saveLoad(t){const e=this.open(`<h2>${t==="save"?"Сохранить":"Загрузить"} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс, для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${Vt.running?'<button class="btn small" data-a="exp">Экспорт в файл</button>':""}<button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-list]"),s=async()=>{const r=await Promise.all(uh.map(async a=>({s:a,...await jr(a).catch(o=>(console.warn(o),{state:null,broken:!0}))})));n.innerHTML=r.map(({s:a,state:o,broken:c})=>`<div class="slot"><div><b>${og[a]}</b>${o?`<small>${ae(o.chapter)} · ${_v(o.time)} в театре · ${new Date(o.savedAt||0).toLocaleString("ru")}</small>`:`<small>${c?"⚠ данные повреждены или несовместимы":"пусто"}</small>`}</div><div class="acts">${t==="save"&&a!=="auto"&&Vt.running?`<button class="btn small" data-s="${a}" data-do="save">Записать</button>`:""}${o?`<button class="btn small" data-s="${a}" data-do="load">Загрузить</button>`:""}${o||c?`<button class="btn small red" data-s="${a}" data-do="del">✕</button>`:""}</div></div>`).join("")};await s(),e.addEventListener("click",async r=>{const a=r.target,o=a.dataset?.s,c=a.dataset?.do,h=a.dataset?.a;if(c==="save"&&o&&(await Vt.save(o),await s()),c==="del"&&o&&await this.confirm("Удалить это сохранение?","Удалить")&&(await lg(o),await s()),c==="load"&&o){const l=await jr(o);if(!l.state){this.toast("Сохранение повреждено","⚠");return}if(Vt.running&&!await this.confirm("Загрузить сохранение? Текущий несохранённый прогресс будет потерян.","Загрузить"))return;this.closeAll(),Vt.stopToMenu(),document.querySelector(".menu-screen")?.remove(),await Vt.start(l.state)}if(h==="exp"){const l=new Blob([cg(Vt.state)],{type:"application/json"}),d=URL.createObjectURL(l),p=document.createElement("a");p.href=d,p.download="the-other-me-save.json",p.click(),setTimeout(()=>URL.revokeObjectURL(d),2e3)}if(h==="imp"){const l=document.createElement("input");l.type="file",l.accept=".json,application/json",l.onchange=async()=>{const d=l.files?.[0];if(!d)return;const p=hg(await d.text());if(!p){this.toast("Файл не похож на сохранение этой игры","⚠");return}await kl("slot3",p),this.toast("Импортировано в «Слот III»","✎"),await s()},l.click()}})}closeAll(){for(;this.modals.length;){const t=this.modals[this.modals.length-1];t.onCloseCb=null,this.close(t)}Vt.paused=!1}notebook(t="quests"){if(!Vt.running)return;qt.sfx("paper");const e=[["quests","Задания"],["items","Инвентарь"],["notes","Заметки"],["mech","Механики"],["photos","Фото"],["map","План театра"],["eggs","Находки"]],n=this.open(`<h2>Журнал режиссёра <small>«не забыть ничего»</small></h2><div class="tabs">${e.map(([o,c])=>`<button class="tab" data-t="${o}">${c}</button>`).join("")}</div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`,{cls:"journal"}),s=n.querySelector("[data-b]"),r=Vt.state.f,a=o=>{if(n.querySelectorAll(".tab").forEach(h=>h.classList.toggle("on",h.dataset.t===o)),o==="quests"){const h=ll(Vt);s.innerHTML=`<div class="q-main"><small>Сейчас</small><h3>${ae(h.main||"Смотреть спектакль")}</h3>${h.hint?`<p><i>${ae(h.hint)}</i></p>`:""}</div>${(h.extra||[]).length?`<h4 class="q-h">Можно сделать</h4><ul class="q-list">${h.extra.map(l=>`<li>${ae(l)}</li>`).join("")}</ul>`:""}<h4 class="q-h">Сыграно</h4><ul class="q-list done">${["polina","ruben","matvey","erika","liza","angelina"].filter(l=>r["done_"+l]).map(l=>`<li>${ae(He[l].name)}: история сыграна</li>`).join("")||"<li><i>пока ничего</i></li>"}</ul>`;return}if(o==="items"){s.innerHTML=Vt.state.inv.length?`<div class="inv">${Vt.state.inv.map(h=>`<div class="inv-it"><img src="${Eh(h)}" alt=""><b>${ae(qs[h]?.name||h)}</b><span>${ae(qs[h]?.desc||"")}</span></div>`).join("")}</div>`:"<p><i>Карманы пусты.</i></p>";return}if(o==="mech"){const h=Object.keys(r.mech||{});s.innerHTML=h.length?h.filter(l=>Xs[l]).map(l=>`<div class="entry noimg"><div><h4>${ae(Xs[l].title)}</h4><p>${ae(Xs[l].text)}</p></div></div>`).join(""):"<p><i>Механики появятся по ходу игры.</i></p>";return}if(o==="eggs"){const h=r.eggs||{},l=Object.entries(Qr);s.innerHTML=`<p class="warn">Найдено ${Object.keys(h).length} из ${l.length}. Пасхалки, отсылки и мелкие радости.</p><div class="eggs">${l.map(([d,p])=>`<div class="egg ${h[d]?"on":""}"><b>${h[d]?"★ "+ae(p.title):"☆ ???"}</b><span>${h[d]?ae(p.desc):"Где искать: "+ae(p.hint)}</span></div>`).join("")}</div>`;return}if(o==="map"){s.innerHTML=vv(Vt.state.room,r.visited||{});return}if(o==="photos"){s.innerHTML=Vt.state.photos.length?`<div class="photos">${Vt.state.photos.map((h,l)=>`<div class="photo" data-ph="${l}" style="--r:${l*37%7-3}deg"><img src="${h.img}" alt=""><span>${ae(h.caption)}</span></div>`).join("")}</div>`:"<p><i>Плёнка пока пуста. Фотоаппарат, клавиша C.</i></p>";return}const c=(h,l)=>{const d=Vt.state.notes.map(p=>ol[p]).filter(p=>p&&p.cat===h);return d.length?`<h4 class="q-h">${l}</h4>`+d.map(p=>{const m=p.char?He[p.char]:null;return`<div class="entry ${m?"":"noimg"}">${m?`<img src="${$u(p.char,p.expr||"neutral")}" alt="">`:""}<div><h4>${ae(p.title)}</h4>${m?.role?`<div class="role">${ae(m.role)}</div>`:""}<p>${p.text}</p></div></div>`}).join(""):""};s.innerHTML=Object.entries(Qg).filter(([h])=>h!=="items").map(([h,l])=>c(h,l)).join("")||"<p><i>Здесь пока пусто.</i></p>"};n.addEventListener("click",o=>{const c=o.target.dataset?.t;if(c){qt.sfx("paper"),a(c);return}const h=o.target.closest("[data-ph]");if(h){const l=Vt.state.photos[+h.dataset.ph];l&&this.photoZoom(l.img,l.caption)}}),a(t)}async mainMenu(){this.hudShow(!1),document.querySelector(".menu-screen")?.remove();const t=await Promise.all(uh.map(l=>jr(l).catch(()=>({state:null,broken:!0}))));let e=null;for(const l of t)l.state&&(!e||(l.state.savedAt||0)>(e.savedAt||0))&&(e=l.state);let n=!1;try{n=localStorage.getItem("tom-intro-seen")==="1"}catch(l){console.warn("[intro] localStorage недоступен",l)}const s=!this.introPlayed&&(!n||Me.introAlways)&&!Vt.fast;this.introPlayed=!0;const{DressingRoom:r}=await Vn(async()=>{const{DressingRoom:l}=await import("./dressing-DlJxeDnd.js");return{DressingRoom:l}},[],import.meta.url);Vt.menuScene&&Vt.menuScene.dispose();const a=Vt.menuScene=new r(Vt.R,s),o=pe("div","menu-screen m3d"+(s?" intro":" ready"),`<div class="m3d-left"><div class="menu-logo">${xv}</div><nav class="menu-list"><button class="btn" data-a="cont" ${e?"":"disabled"}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="extra" ${(()=>{try{return JSON.parse(localStorage.getItem("tom-unlock")||"[]").length?"":"disabled"}catch{return"disabled"}})()}>Закулисье</button><button class="btn" data-a="cred">Создатели</button><button class="btn" data-a="exit">Выход</button></nav></div><div class="m3d-hint">нажмите или кликните, чтобы повернуть ключ</div><div class="m3d-skip">Esc, пропустить вступление</div>`,ze());a.onState=l=>{if(o.classList.toggle("await",l==="await"),l==="logo"&&o.classList.add("logo-in"),l==="menu"){o.classList.remove("intro"),o.classList.add("ready","logo-in");try{localStorage.setItem("tom-intro-seen","1")}catch(d){console.warn(d)}o.querySelector(e?"[data-a=cont]":"[data-a=new]")?.focus({preventScroll:!0})}},a.build();const c=l=>{if(a.state==="menu"||this.modal)return;qt.init();const d=l.code==="Escape";a.input(d?"skip":"act"),l.type==="keydown"&&l.preventDefault()};window.addEventListener("keydown",c,!0),o.addEventListener("pointerdown",c);const h=()=>{window.removeEventListener("keydown",c,!0),o.remove()};o.addEventListener("mouseover",l=>{const d=l.target.closest(".btn");d&&!d.disabled&&a.state==="menu"&&qt.sfx("mechtick")}),o.addEventListener("click",async l=>{qt.init();const d=l.target.dataset?.a;if(!(!d||a.state!=="menu")){if(qt.sfx("click"),d==="cont"&&e&&(h(),await Vt.start(e)),d==="new"){if(e&&!await this.confirm("Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.","Начать"))return;h(),await Vt.start(Il())}if(d==="load"&&this.saveLoad("load"),d==="set"&&this.settings(),d==="cred"&&this.credits(!1),d==="extra"&&this.extras(),d==="exit"){qt.music(null),qt.sfx("curtain");const p=pe("div","card",'<p class="act">ЗАНАВЕС</p><p>Спасибо, что заглянули в гримёрку.</p><p class="sm">Закройте вкладку, или нажмите, чтобы вернуться.</p>',ze());p.onclick=()=>{p.remove(),qt.music("musicbox")}}}})}extras(){let t=[],e=[];try{t=JSON.parse(localStorage.getItem("tom-unlock")||"[]"),e=JSON.parse(localStorage.getItem("tom-tracks")||"[]")}catch{}const n=(()=>{try{return!!localStorage.getItem("tom-done")}catch{return!1}})(),s=[["polina","Полина","Дом, который смотрит"],["ruben","Рубен","Royal Flush"],["matvey","Матвей","100 шагов к неизбежному"],["erika","Эрика","Город, который не спит"],["liza","Лиза","Башня не дом"],["angelina","Ангелина","Ангел без нимба"],["alla","Алла Ева","Прима"]],r=([h,l,d])=>{const p=t.includes(h)||h==="alla"&&n;return`<figure class="xcard ${p?"":"locked"}"><div class="xport">${p?`<img src="portraits/${h}.png" alt="">`:"<span>?</span>"}</div><figcaption><b>${p?l:"???"}</b><small>${p?d:"сыграйте главу"}</small></figcaption></figure>`},a={menu_box:"Музыкальная шкатулка",theater:"Театр ночью",backstage:"За кулисами",horror:"Дом, который смотрит",heist:"Ограбление",noir:"Нуар под дождём",school:"Школьное утро",fairy:"Сказка",idol_own:"Свой голос",diva:"Прима",fin_argue:"Ссора",fin_overture:"Увертюра",fin_queen:"Хлопайте!",fin_girl:"Песня Девушки",fin_minuet:"Менуэт",fin_mirror:"Зеркальный танец",fin_reveal:"Один человек",fin_bows:"Поклоны",party:"Восемнадцать",morning:"Утро в Сиднее"},o=Object.keys(a).filter(h=>e.includes(h)).map(h=>`<button class="btn xtrack" data-t="${h}">♪ ${a[h]}</button>`).join(""),c=this.open(`<h2>Закулисье <small>то, что остаётся после спектакля</small></h2><div class="body"><h3>Труппа</h3><div class="xgal">${s.map(r).join("")}</div><h3>Музыкальная комната</h3><div class="xtracks">${o||'<p class="warn">Пока здесь тихо.</p>'}</div></div><div class="foot"><button class="btn" data-x="close">Закрыть</button></div>`,{onClose:()=>{qt.music(localStorage.getItem("tom-done")?"fin_bows":"menu_box",{fade:1})}});c.addEventListener("click",h=>{const l=h.target.closest("[data-t]");l&&(qt.music(l.dataset.t,{fade:.6,restart:!0}),c.querySelectorAll(".xtrack").forEach(d=>d.classList.toggle("on",d===l)))})}credits(t){if(t){try{localStorage.setItem("tom-done","1")}catch{}qt.music("fin_bows",{restart:!0})}return new Promise(e=>{const n=(h,l)=>`<h3>${h}</h3>${l.map(d=>`<p>${d}</p>`).join("")}`,s=pe("div","credits",`<div class="roll" style="--dur:${t?70:55}s"><div class="cred-logo">${Xu("c")}</div>
        ${n("В РОЛЯХ",["Варя<small>режиссёрка, Молодая Девушка, Королева, и всё это одновременно</small>","Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>","Арутеми<small>школьный кот одобряет</small>"])}
        ${n("ТРУППА ТЕАТРА",["Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма, их рук дело</small>"])}
        ${n("В ЗРИТЕЛЬНОМ ЗАЛЕ",["Мама Наташа и Саша","Папа Максим и Настя","Вася","Софа · Катя"])}
        ${n("ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ",["Кукольник<small>просил не указывать. Указан.</small>"])}
        ${n("МУЗЫКА, ДЕКОРАЦИИ, СВЕТ",["Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры","Three.js · TypeScript · Vite"])}
        ${n("ШРИФТЫ ЛОГОТИПА",["Aurelia Diamond · Cintarini · Highcrest · Lombardina Initial One<small>лицензии «для личного некоммерческого использования»; игра, подарок, не продукт</small>","Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>"])}
        ${n("ОСОБАЯ БЛАГОДАРНОСТЬ",["Третьему ряду.<small>Вас видно. Правда.</small>"])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`,ze()),r=()=>{a(),s.remove(),e()},a=ss(h=>{(h==="act"||h==="pause")&&r()}),o=performance.now();s.onclick=()=>{performance.now()-o>600&&r()};const c=s.querySelector(".roll");c.addEventListener("animationend",h=>{h.target===c&&r()}),Vt.fast&&r()})}buildTouch(){this.touchEl=pe("div","touch hidden",'<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="mask0">◐</button><button class="tbtn big" data-a="act">E</button></div>',ze());const t=this.touchEl.querySelector(".stick"),e=t.querySelector("i");let n=null;const s=a=>{const o=t.getBoundingClientRect();let c=(a.clientX-o.left-o.width/2)/(o.width/2),h=(a.clientY-o.top-o.height/2)/(o.height/2);const l=Math.hypot(c,h);l>1&&(c/=l,h/=l),ai.x=c,ai.y=h,e.style.transform=`translate(${c*2.2}rem, ${h*2.2}rem)`};t.addEventListener("pointerdown",a=>{n=a.pointerId,t.setPointerCapture(n),s(a)}),t.addEventListener("pointermove",a=>{a.pointerId===n&&s(a)});const r=a=>{a.pointerId===n&&(n=null,ai.x=ai.y=0,e.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),this.touchEl.querySelector(".tbtns").addEventListener("pointerdown",a=>{const o=a.target.dataset?.a;o&&(a.preventDefault(),o==="mask0"?Vt.state.f.masks&&this.maskRow.classList.toggle("open"):bi(o))})}}const Wt=new yv,bv={hub:()=>Vn(()=>import("./hub-CiUZ4RIf.js").then(i=>i.c),__vite__mapDeps([0,1,2]),import.meta.url),pol:()=>Vn(()=>import("./polina-DGipJA-f.js"),__vite__mapDeps([3,1,4,2]),import.meta.url),rub:()=>Vn(()=>import("./ruben-CE8x-Y0-.js"),__vite__mapDeps([5,1,4,2]),import.meta.url),mat:()=>Vn(()=>import("./matvey-CLaHpyrK.js"),__vite__mapDeps([6,1,4,2]),import.meta.url),eri:()=>Vn(()=>import("./erika-BCLDhCmo.js"),__vite__mapDeps([7,1,4,2]),import.meta.url),liz:()=>Vn(()=>import("./lisa-DTROqQhs.js"),__vite__mapDeps([8,1,4,2]),import.meta.url),ang:()=>Vn(()=>import("./angelina-DPvaPN7U.js"),__vite__mapDeps([9,1,2,4]),import.meta.url),fin:()=>Vn(()=>import("./finale-k4FfX_RW.js"),__vite__mapDeps([10,2,4,1,0]),import.meta.url)},es={},Sv={comedy:{sat:1.35,tint:[1.08,1.02,.86],vig:.2,bright:1.08},tragedy:{sat:.35,tint:[.82,.9,1.12],vig:.6,bright:.9,contrast:1.1},drama:{sat:.9,tint:[1.1,.9,.92],vig:.55,bright:1}},Ph={comedy:"Комедия",tragedy:"Трагедия",drama:"Драма"};class Mv{constructor(){this.state=Il(),this.room=null,this.lock=0,this.paused=!1,this.running=!1,this.t=0,this.cam={x:0,z:0,dist:24,focus:null,shake:0,roll:0,pitch:.56,yOff:1.2},this.near=null,this.trail=[],this.followers=[],this.stepT=0,this.busy=!1,this.inPhoto=!1,this.fast=!1,this.playerSpeed=5.6,this.override=null,this.debug=!1,this.gradeBase={},this.audio=qt,this.ui=Wt,this.menuScene=null,this.questT=0,this.waits=[],this.runDepth=0,this.fxTex={},this.maskMesh=null,this.maskTexs={},this.fadeCacheRoom=null,this.fadeCache=[],this.fpsT=0,this.fpsN=0,this.fpsLow=0,this.fadeT=0,this.faded=new Map,this.ray=new q1}boot(t){this.R=new dg(t),this.debug=new URLSearchParams(location.search).has("debug");let e=performance.now();const n=s=>{const r=Math.min(.05,(s-e)/1e3);e=s;try{this.frame(r)}catch(a){console.error("[game] ошибка кадра",a)}requestAnimationFrame(n)};requestAnimationFrame(n),ss(s=>this.onAction(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.running&&!this.paused&&!Wt.modal&&Wt.pause()}),window.addEventListener("beforeunload",s=>{this.running&&this.lock>0&&!this.debug&&(s.preventDefault(),s.returnValue="")})}get f(){return this.state.f}flag(t){return this.state.f[t]}set(t,e=!0){typeof t=="string"?this.state.f[t]=e:Object.assign(this.state.f,t)}has(t){return this.state.inv.includes(t)}give(t,e=!1){this.has(t)||(this.state.inv.push(t),qs[t]||console.warn("[game] нет описания предмета",t),t==="camera"&&this.mech("camera"),e?Wt.toast("В инвентаре: "+(qs[t]?.name||t),"✦"):(this.sfx("pickup"),Wt.showItem(t)),Wt.hud())}mech(t){var n;const e=(n=this.state.f).mech||(n.mech={});e[t]||!Xs[t]||(e[t]=1,this.fast||Wt.toast(`Механика: ${Xs[t].title}. Подробнее в журнале (Tab)`,"❖"))}egg(t){var n;const e=(n=this.state.f).eggs||(n.eggs={});e[t]||!Qr[t]||(e[t]=1,this.sfx("note"),Wt.toast(`Находка: ${Qr[t].title} (${Object.keys(e).length}/${Object.keys(Qr).length})`,"★"))}take(t){const e=this.state.inv.indexOf(t);e>=0&&this.state.inv.splice(e,1)}note(t){if(!this.state.notes.includes(t)){if(!ol[t]){console.warn("[game] нет записи блокнота",t);return}this.state.notes.push(t),this.sfx("pencil"),Wt.toast("Блокнот: "+ol[t].title,"✎")}}done(t){return!!this.state.f["done_"+t]}doneCount(){return["polina","ruben","matvey","erika","liza","angelina"].filter(t=>this.done(t)).length}sfx(t,e){qt.sfx(t,e)}toast(t,e){Wt.toast(t,e)}wait(t){return this.fast?Promise.resolve():new Promise(e=>this.waits.push({t,res:e}))}async start(t){this.menuScene&&(this.menuScene.dispose(),this.menuScene=null),this.state=t,this.running=!0,this.lock=0,this.paused=!1,Wt.hudShow(!0),setTimeout(()=>{this.mech("move"),this.mech("act"),this.mech("journal")},4e3),await this.goto(t.room,t.spot,{fade:"fade",load:!0})}stopToMenu(){this.running=!1,this.clearRoom(),qt.music(null),qt.ambience(null),Wt.hudShow(!1)}async save(t="auto"){if(!this.running)return;const e=this.state;this.player&&(e.px=this.player.x,e.pz=this.player.z);try{await kl(t,e),Wt.saved(t)}catch(n){console.error("[save] не удалось сохранить",n),Wt.toast("Не удалось сохранить игру: хранилище браузера недоступно","⚠")}}clearRoom(){this.faded.clear();for(const t of this.waits)t.res();this.waits=[],this.room&&(this.R.scene.remove(this.room.group),this.room.dispose(),this.room=null),this.followers=[],this.trail=[],this.near=null,this.override=null,Wt.prompt(null)}async loadRoom(t){if(es[t])return es[t];const e=t.split("_")[0],n=bv[e];if(!n)throw new Error("Неизвестная локация: "+t);Wt.loading(!0);try{const s=await n();Object.assign(es,s.rooms)}finally{Wt.loading(!1)}if(!es[t])throw new Error("Глава не содержит локацию: "+t);return es[t]}async goto(t,e="start",n={}){var o;this.lock++;const s=this.room?this.room.id:n.load?"load":"",r=this.fast?"none":n.fade||"fade";try{r!=="none"&&await Wt.transition(r,"out");let c;try{c=await this.loadRoom(t)}catch(g){throw r!=="none"&&await Wt.transition(r,"in"),g}this.clearRoom(),this.cam.focus=null,this.cam.roll=0,this.cam.pitch=.56,this.cam.yOff=1.2;const h=this.room=new Bu(t,c),l=new zu(h,this);this.player=new Nl(this.state.f.playerChar||"varya","player"),c.build(l,this),h.actors.push(this.player),h.group.add(this.player.group);const d=new Gs(16773340,2.2,4.5,1.5);d.position.set(.6,2.4,1.6),this.player.group.add(d);const p=h.spawns[e]||h.spawns.start||{x:0,z:0,dir:"f"};!h.spawns[e]&&e!=="start"&&console.warn(`[game] в ${t} нет точки появления ${e}`),n.load&&this.state.room===t&&this.state.px!=null&&!this.hits(this.state.px,this.state.pz)?this.player.place(this.state.px,this.state.pz,"f"):this.player.place(p.x,p.z,p.dir);{const g=this.freeSpot(this.player.x,this.player.z);(g.x!==this.player.x||g.z!==this.player.z)&&(this.debug&&console.warn(`[room] ${t}: точка «${e}» занята, героиня сдвинута`),this.player.place(g.x,g.z))}for(const g of this.followers){const v=this.freeSpot(this.player.x+.8,this.player.z+.3);g.place(v.x,v.z)}h.guards.length&&this.mech("stealth"),h.lasers.length&&this.mech("lasers"),this.R.scene.add(h.group),this.R.scene.background=new zt(h.group.userData.bg??328710),this.R.scene.fog=h.group.userData.fog||null,this.gradeBase=c.grade||{},this.applyMask(!0),this.applyGrade(!0),document.body.classList.toggle("noir-mode",(c.grade?.sat??1)<.15),this.cam.dist=c.camDist||24,this.camSnap(),c.music!==void 0&&qt.music(c.music),qt.ambience(c.amb??null),this.state.room=t,this.state.spot=e,((o=this.state.f).visited||(o.visited={}))[t]=1,c.chapter&&(this.state.chapter=c.chapter),Wt.hud(),!n.load&&!this.fast&&await this.save("auto");const m=c.card?.(this);m&&await Wt.card(m),r!=="none"&&await Wt.transition(r,"in"),!n.silent&&s!==t&&Wt.place(c.name)}finally{this.lock--}const a=this.room.def;a.enter&&await this.cut(()=>a.enter(this,s))}async rebuild(){const t=this.player,e=t.x,n=t.z,s=t.dir;await this.goto(this.room.id,this.state.spot,{fade:"none",silent:!0}),this.player.place(e,n,s),this.camSnap()}async cut(t){this.lock++,Wt.prompt(null);try{return await t()}finally{this.lock--}}async say(t,e,n="neutral",s){const r=t==="~",a=t==="*",o=this.player?.charId||"varya";let c=r?o:t;if(r&&(e=e.replace(/^\[[^\]]+\]\s*/,"")),!r&&!a&&this.room){const m=this.room.actors.find(g=>g.id===t&&!g.hidden)||(this.player?.id===t?this.player:null);m&&m.charId&&m.charId!==t&&He[m.charId]&&(c=m.charId)}const h=He[c],l=He[c.split("_")[0]]||h;!a&&!h&&console.warn("[dialogue] неизвестный говорящий",t);const d=t+":"+e,p=!!this.state.seen[Vh(d)];await Wt.say({name:a?"":s||(r?(l||h)?.name:He[t]?.name||h?.name)||t,color:h?.color||"#e8d8a8",portrait:a||!h?"":$u(c,n,!!this.room?.id.startsWith("mat_")),text:e,italic:r||a,pitch:h?.pitch||300,seen:p}),this.state.seen[Vh(d)]=1}async line(t){const e=/^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(t);if(!e){console.warn("[dialogue] не разобрана реплика:",t);return}await this.say(e[1],e[4],e[3]||"neutral",e[2])}async choice(t){return Wt.choice(t.map(e=>typeof e=="string"?{text:e}:e))}async run(t){this.lock++,this.runDepth++,qt.duck(!0);try{for(const e of t)if(typeof e=="string")await this.line(e);else if(typeof e=="function"){const n=await e(this);Array.isArray(n)&&await this.run(n)}else if(e.c){const n=e.c.filter(a=>{const o=a[2]||{};return!(o.if&&!o.if(this.state.f,this)||o.mask&&this.state.mask!==o.mask)}),s=await this.choice(n.map(a=>({text:a[0],mask:!!(a[2]&&a[2].mask)}))),r=n[s];r[2]&&r[2].set&&this.set(r[2].set),await this.run(r[1]||[])}else if(e.if)await this.run(e.if(this.state.f,this)?e.t||[]:e.e||[]);else{if(e.set&&this.set(e.set),e.note&&this.note(e.note),e.give&&this.give(e.give),e.sfx&&this.sfx(e.sfx),e.music!==void 0&&qt.music(e.music),e.wait&&await this.wait(e.wait),e.pose){const n=this.actor(e.pose[0]);n&&(n.pose=e.pose[1])}e.shake&&this.shake(e.shake),e.flash&&this.flash(),e.fx&&this.fx(e.fx[0],e.fx[1]),e.eyes&&this.eyes(e.eyes)}}finally{this.lock--,this.runDepth--,this.runDepth===0&&(qt.duck(!1),Wt.sayHide())}}actor(t){return t==="player"?this.player:this.room?.actor(t)}setMask(t){!this.state.f.masks||this.room?.def.noMasks||(this.mech("masks"),this.state.mask===t&&(t=null),this.state.mask=t,this.sfx("mask"),this.applyMask(),this.applyGrade(),Wt.hud(),qt.muffle(t==="tragedy"?900:t==="drama"?2600:2e4))}applyMask(t=!1){const e=this.room;if(!e)return;const n=e.def.noMasks?null:this.state.mask;e.def.noMasks&&qt.muffle(2e4);for(const s of e.masked){const r=s.mask==="none"?!n:s.mask===n;s.obj.visible=r,s.box&&(s.box.on=r)}for(const s of e.inters)s.mask&&(s.enabled=s.mask==="none"?!n:s.mask===n,s.marker&&(s.marker.visible=s.enabled))}applyGrade(t=!1){const e=this.room?.def.noMasks?null:this.state.mask,n={...this.gradeBase,...e?Cv(this.gradeBase,(this.room?.def).maskGrade?.[e]||Sv[e]):{}};this.R.setGrade(n,t)}grade(t,e=!1){this.gradeBase={...this.gradeBase,...t},this.applyGrade(e)}camBounds(){const t=this.room.def,e=t.camDist||24,n=Math.tan(this.R.cam.fov*Math.PI/180/2)*e*this.R.cam.aspect*.9,s=Math.max(0,t.w/2-Math.min(n-2,Math.max(9,n*.5))),r=Math.min(0,-t.d/2+4.5),a=t.camZMax??Math.max(r,t.d/2-7);return{mx:s,z0:r,z1:a}}fxT(t){if(!this.fxTex[t]){const e=new F1().load("fx/"+t+".png");e.colorSpace=pn,this.fxTex[t]=e}return this.fxTex[t]}who(t){return t==="player"?this.player:this.actor(t)}fx(t,e){const n=this.who(t);if(!n||!this.room||this.fast)return;const s=(He[n.charId]?.h||32)/An,r=this.fxT("m_"+e),o=e==="tears"||e==="haha"||e==="burst"?1.5:.8,c=new ht(new ye(o,o),new Re({map:r,transparent:!0,depthWrite:!1,depthTest:!1}));c.renderOrder=20;const h=e==="tears"?[0,s-.7]:e==="blush"?[.25,s-.55]:e==="sweat"?[.45,s-.1]:e==="haha"?[.9,s+.2]:[.55,s+.25];c.position.set(h[0],h[1],.2),n.group.add(c),this.sfx(e==="anger"||e==="anger2"?"hit":"note");let l=0;const d=p=>{l+=p;const m=Math.min(1,l/.18);if(c.scale.setScalar(m<1?m*1.25:1+Math.sin(l*9)*.04),c.material.opacity=l>1.6?Math.max(0,1-(l-1.6)/.4):1,l>2){n.group.remove(c);const g=this.room.updaters.indexOf(d);g>=0&&this.room.updaters.splice(g,1)}};this.room.updaters.push(d)}eyes(t,e=3){const n=this.who(t);if(!n||!this.room||this.fast)return;const s=(He[n.charId]?.h||32)/An,r=new ht(new ye(.78,.34),new Re({map:this.fxT("healing_eyes"),transparent:!0,depthWrite:!1}));r.renderOrder=19,r.position.set(0,s-.4,.08),n.group.add(r),this.sfx("note");let a=0;const o=c=>{if(a+=c,r.scale.y=1+Math.sin(a*6)*.06,r.visible=n.dir!=="b",a>e){n.group.remove(r);const h=this.room.updaters.indexOf(o);h>=0&&this.room.updaters.splice(h,1)}};this.room.updaters.push(o)}faceMask(){const t=this.player;if(!t)return;const e=this.room?.def.noMasks?null:this.state.mask;if(!this.maskMesh||this.maskMesh.parent!==t.group){const r=new ht(new ye(.62,.62),new Re({transparent:!0,alphaTest:.3,side:Pe}));t.group.add(r),this.maskMesh=r}const n=this.maskMesh;if(n.visible=!!e&&!t.hidden&&t.dir!=="b",!e)return;this.maskTexs[e]||(this.maskTexs[e]=Je(12,12,r=>{const a=e==="comedy"?"#f2c230":e==="tragedy"?"#b8ccf0":"#f4f0e8";r.fillStyle=a,r.fillRect(2,1,8,10),r.fillRect(1,2,10,7),r.fillRect(3,11,6,1),e==="drama"&&(r.fillStyle="#c41e3a",r.fillRect(6,1,4,10),r.fillRect(6,2,5,7),r.fillRect(6,11,3,1)),r.fillStyle="#1a1014",e==="comedy"?(r.fillRect(3,4,2,1),r.fillRect(7,4,2,1),r.fillRect(3,7,6,1),r.fillRect(2,6,1,1),r.fillRect(9,6,1,1)):e==="tragedy"?(r.fillRect(3,4,2,2),r.fillRect(7,4,2,2),r.fillRect(3,8,6,1),r.fillRect(2,9,1,1),r.fillRect(9,9,1,1),r.fillStyle="#4a6ad0",r.fillRect(4,6,1,2)):(r.fillRect(3,4,2,2),r.fillRect(7,4,2,2),r.fillRect(4,8,4,1)),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(2,2,2,1)},"facemask"+e)),n.material.map=this.maskTexs[e],n.material.needsUpdate=!0;const s=(He[t.charId]?.h||31)/An;n.position.set(t.dir==="l"?-.08:t.dir==="r"?.08:0,s-.42,.06),n.scale.x=t.dir==="l"?-.85:t.dir==="r"?.85:1}fadeBlockers(t){const e=this.room;if(!e)return;const n=this.R.cam,s=this.player;if(this.fadeT-=t,this.fadeT<=0){this.fadeT=.12;const r=new Set,a=new Set(e.occluders.map(h=>h.mesh));for(const h of e.actors)a.add(h.group);a.add(s.group);const o=h=>{if(!h.isMesh||h.isInstancedMesh&&!1)return!1;let l=h;for(;l;){if(a.has(l))return!1;l=l.parent}const d=h.material;if(!d||Array.isArray(d)||d.isShaderMaterial||d.blending===Ai)return!1;const p=h.geometry;p.boundingBox||p.computeBoundingBox();const m=p.boundingBox,g=(m.max.y-m.min.y)*h.scale.y,v=h.getWorldPosition(new k).y;return!(g<.5&&v<.6)};this.ray.camera=n;const c=n.position.clone();for(const h of[.5,1.3,2.1]){const d=new k(s.x,h,s.z).clone().sub(c),p=d.length();this.ray.set(c,d.normalize()),this.ray.far=p-.6;for(const m of this.ray.intersectObjects(e.group.children,!0))o(m.object)&&r.add(m.object)}this.fadeCacheRoom!==e&&(this.fadeCacheRoom=e,this.fadeCache=[],e.group.updateMatrixWorld(),e.group.traverse(h=>{if(h.isMesh&&o(h)){const l=new k;h.getWorldPosition(l),this.fadeCache.push({m:h,p:l,bb:new hi().setFromObject(h)})}}));for(const h of this.fadeCache){if(!h.m.visible)continue;if(h.bb.max.y>1.7&&h.p.distanceToSquared(c)<56.25){r.add(h.m);continue}const l=h.bb;l.min.y>3.8&&l.max.z>s.z+.5&&l.max.z-l.min.z<12&&Math.max(l.min.x-s.x,s.x-l.max.x,0)<7&&r.add(h.m)}for(const h of r){let l=this.faded.get(h);if(!l){const d=h.material,p=d.clone();p.transparent=!0,l={orig:d,clone:p,a:1,tgt:.3},h.material=p,this.faded.set(h,l)}l.tgt=.3}for(const[h,l]of this.faded)r.has(h)||(l.tgt=1)}for(const[r,a]of this.faded)a.a+=(a.tgt-a.a)*Math.min(1,t*8),a.clone.opacity=a.a*(a.orig.opacity??1),a.clone.depthWrite=a.a>.9,a.tgt===1&&a.a>.98&&(r.material=a.orig,a.clone.dispose(),this.faded.delete(r))}camSnap(){const t=this.player,e=this.camBounds();this.cam.x=Ns(t.x,-e.mx,e.mx),this.cam.z=Ns(t.z,e.z0,e.z1)}focus(t,e,n=18){this.cam.focus={x:t,z:e,dist:n}}unfocus(){this.cam.focus=null}shake(t=.4){Me.reduceShake||(this.cam.shake=Math.max(this.cam.shake,t))}flash(t=.9){this.R.flash=t}async photoMode(){if(!this.has("camera")||this.inPhoto||this.room?.def.noCamera)return;this.inPhoto=!0,this.lock++;const t=this.player,e=wv(t.dir);this.focus(t.x+e.x*3,t.z+e.z*3,15),Wt.viewfinder(!0);try{if(await this.key(["act","camera","pause"])==="act"){const s=this.room,r=s.def.noMasks?null:this.state.mask,a=s.photos.filter(h=>{if(h.cond&&!h.cond())return!1;if(h.any)return!0;if(h.mask&&(h.mask==="none"?r:h.mask!==r))return!1;const l=h.x-t.x,d=h.z-t.z,p=Math.hypot(l,d);return p<1.8?!0:p<8&&(l*e.x+d*e.z)/p>.6});Wt.viewfinder(!1);const o=this.R.snapshot();this.sfx("shutter"),this.flash(.8);const c=a.length?a.map(h=>h.name).join(", "):s.def.name;for(this.state.photos.push({id:"p"+Date.now().toString(36),img:o,caption:c,subjects:a.map(h=>h.id),room:s.id});this.state.photos.length>36;){const h=this.state.photos.findIndex(l=>!l.subjects.length);this.state.photos.splice(h>=0?h:0,1)}Wt.showPhoto(o,c),this.unfocus(),s.def.photo&&await s.def.photo(this,a.map(h=>h.id))}}finally{Wt.viewfinder(!1),this.unfocus(),this.lock--,this.inPhoto=!1}}photographed(t){return this.state.photos.some(e=>e.subjects.includes(t))}key(t){return new Promise(e=>{const n=ss(s=>{t.includes(s)&&(n(),setTimeout(()=>e(s),0))})})}follow(t){this.followers.push(t)}unfollow(t){t&&(this.followers=this.followers.filter(e=>e!==t),t.moving=!1)}setPlayerChar(t){this.state.f.playerChar=t,this.player.setChar(t)}onAction(t){var e;if(!(!this.running||Wt.modal||this.paused)){if(t==="pause"&&!this.inPhoto){Wt.pause();return}if(t==="history"){Wt.history();return}if(!(this.lock>0))if(t==="act"&&this.near){const n=this.near;this.sfx("click"),((e=this.state.f).used||(e.used={}))[this.room.id+":"+n.id]=1,this.cut(()=>n.fn(this)).catch(s=>console.error("[game] ошибка взаимодействия",n.id,s))}else t==="mask1"?this.setMask("comedy"):t==="mask2"?this.setMask("tragedy"):t==="mask3"?this.setMask("drama"):t==="mask0"?this.state.mask&&this.setMask(this.state.mask):t==="help"?Wt.modal||this.cut(()=>Wt.help()):t==="camera"?this.photoMode():t==="notebook"?Wt.notebook():t==="inventory"?Wt.notebook("items"):this.room?.def.onKey&&this.room.def.onKey(this,t)}}freeSpot(t,e){if(!this.hits(t,e))return{x:t,z:e};for(let n=.25;n<8;n+=.25)for(let s=0;s<16;s++){const r=t+Math.cos(s/16*Math.PI*2)*n,a=e+Math.sin(s/16*Math.PI*2)*n;if(!this.hits(r,a))return{x:r,z:a}}return{x:t,z:e}}reachCheck(){const t=this.room,e=this.player,n=.25,s=t.def.w,r=t.def.d,a=Math.ceil(s/n),o=Math.ceil(r/n),c=new Uint8Array(a*o),h=(v,u)=>Math.floor((u+r/2)/n)*a+Math.floor((v+s/2)/n),l=[[e.x,e.z]],d=[];for(this.hits(e.x,e.z)&&d.push("героиня внутри коллизии");l.length;){const[v,u]=l.pop(),f=h(v,u);if(!(f<0||f>=c.length||c[f])){c[f]=1;for(const[_,x]of[[n,0],[-n,0],[0,n],[0,-n]]){const b=v+_,U=u+x;this.hits(b,U)||l.push([b,U])}}}const p=(v,u,f)=>{for(let _=u-f;_<=u+f;_+=n)for(let x=v-f;x<=v+f;x+=n){if(Math.hypot(x-v,_-u)>f-.2)continue;const b=h(x,_);if(b>=0&&b<c.length&&c[b])return!0}return!1};for(const v of t.inters)!v.mask&&!(v.cond&&!v.cond())&&!p(v.x,v.z,v.r)&&d.push("недостижимо: "+v.id+" ("+v.label+")");for(const[v,u]of Object.entries(t.spawns))this.hits(u.x,u.z)&&d.push("точка появления в коллизии: "+v);const m=s/2,g=r/2;for(const v of t.props)if((v.x<-m-.2||v.x>m+.2||v.z<-g-.2||v.z>g+.6)&&d.push(`предмет за пределами комнаты: ${v.kind} (${v.x.toFixed(1)}, ${v.z.toFixed(1)})`),v.y>-.5&&v.y<.3&&!v.box&&!t.props.some(u=>u.box&&Math.abs(u.x-v.x)<.05&&Math.abs(u.z-v.z)<.05)){for(const u of t.boxes)if(u.on&&u.x1-u.x0>.5&&u.z1-u.z0>.5&&v.x>u.x0+.15&&v.x<u.x1-.15&&v.z>u.z0+.15&&v.z<u.z1-.15){d.push(`предмет внутри мебели/стены: ${v.kind} (${v.x.toFixed(1)}, ${v.z.toFixed(1)})`);break}}for(const v of t.inters)for(const u of t.actors)u.id!=="player"&&!u.hidden&&v.id!==u.id&&Math.hypot(u.x-v.x,u.z-v.z)<.5&&!(v.label||"").includes(u.def?.name||"@@")&&d.push(`персонаж стоит на точке взаимодействия: ${u.id} на ${v.id}`);return d}hits(t,e,n=.38){const s=this.room,r=s.def.w/2-n,a=s.def.d/2-n;if(t<-r||t>r||e<-a||e>a)return!0;for(const o of s.boxes)if(o.on&&t>o.x0-n&&t<o.x1+n&&e>o.z0-n&&e<o.z1+n)return!0;return!1}los(t,e,n,s){for(let r=1;r<8;r++){const a=t+(n-t)*r/8,o=e+(s-e)*r/8;for(const c of this.room.boxes)if(c.on&&c.x1-c.x0>.9&&a>c.x0&&a<c.x1&&o>c.z0&&o<c.z1)return!1}return!0}frame(t){const e=this.room;if(!e||!this.running){this.menuScene&&!this.running&&(this.menuScene.update(t),this.R.render(t)),ho();return}if(this.paused){this.R.render(0),ho();return}this.t+=t,this.state.time+=t;const n=this.player;if(this.waits.length){for(const f of this.waits)f.t-=t;const u=this.waits.filter(f=>f.t<=0);this.waits=this.waits.filter(f=>f.t>0);for(const f of u)f.res()}if(this.lock===0&&(this.runDepth!==0&&(this.runDepth=0),Wt.dialogOpen&&Wt.sayHide()),this.override)this.override(t);else if(this.lock===0&&!Wt.modal){if(!n.hidden&&this.hits(n.x,n.z)){const _=this.freeSpot(n.x,n.z);n.x=_.x,n.z=_.z}const u=Kg(),f=Math.hypot(u.x,u.y)>.15;if(f){const _=this.playerSpeed*(rs("run")?1.35:1)*t,x=n.x+u.x*_,b=n.z+u.y*_;this.hits(x,n.z)||(n.x=x),this.hits(n.x,b)||(n.z=b),n.dir=Math.abs(u.x)>Math.abs(u.y)?u.x>0?"r":"l":u.y>0?"f":"b",this.stepT-=t,this.stepT<=0&&(this.stepT=.3,this.sfx("step",{mat:e.def.step||"wood"}));const U=this.trail[this.trail.length-1];(!U||Math.hypot(U.x-n.x,U.z-n.z)>.35)&&(this.trail.push({x:n.x,z:n.z}),this.trail.length>40&&this.trail.shift())}n.moving=f;for(const _ of e.triggers){const x=n.x>_.x0&&n.x<_.x1&&n.z>_.z0&&n.z<_.z1;if(x&&!_.inside&&!(_.once&&_.done)){_.done=!0,_.inside=!0,this.cut(()=>_.fn(this)).catch(b=>console.error("[game] ошибка триггера",b));break}_.inside=x}}else n.target||(n.moving=!1);this.followers.forEach((u,f)=>{const _=this.trail[this.trail.length-1-(f+1)*3];if(_&&Math.hypot(_.x-u.x,_.z-u.z)>.25&&Math.hypot(n.x-u.x,n.z-u.z)>1.3){const x=_.x-u.x,b=_.z-u.z,U=Math.hypot(x,b),E=Math.min(U,this.playerSpeed*1.05*t);u.x+=x/U*E,u.z+=b/U*E,u.face(_.x,_.z),u.moving=!0}else u.target||(u.moving=!1)});for(const u of e.actors)u.update(t);if(this.lock===0){for(const u of e.guards){if(!u.active){u.cone.visible=!1;continue}u.cone.visible=!0;const f=u.actor;if(u.off>0&&(u.off-=t,u.cone.visible=Math.floor(u.off*8)%2===0),u.wait>0)u.wait-=t;else if(!f.target&&u.path.length>1){u.i=(u.i+1)%u.path.length;const[_,x]=u.path[u.i];u.ang=Math.atan2(x-f.z,_-f.x),f.walkTo(_,x,u.speed).then(()=>{u.wait=u.pause})}if(u.cone.position.set(f.x,.05,f.z),u.cone.rotation.y=-u.ang,u.off<=0&&!n.hidden&&!n.stealth){const _=n.x-f.x,x=n.z-f.z,b=Math.hypot(_,x);let U=Math.atan2(x,_)-u.ang;for(;U>Math.PI;)U-=Math.PI*2;for(;U<-Math.PI;)U+=Math.PI*2;if(b<u.range&&Math.abs(U)<u.half&&this.los(f.x,f.z,n.x,n.z)){this.cut(()=>u.onCatch(this)).catch(E=>console.error(E));break}}}for(const u of e.lasers)if(u.on=u.active&&(this.t+u.phase)%u.period<u.duty*u.period,u.mesh.visible=u.on,u.on&&!n.hidden&&!n.stealth){const f=u.x1-u.x0,_=u.z1-u.z0,x=f*f+_*_;let b=((n.x-u.x0)*f+(n.z-u.z0)*_)/x;if(b=Ns(b,0,1),Math.hypot(n.x-u.x0-f*b,n.z-u.z0-_*b)<.4){this.cut(()=>u.onHit(this)).catch(U=>console.error(U));break}}}else for(const u of e.actors)!u.target&&u!==n&&!this.followers.includes(u)&&(u.moving=!1);for(const u of e.flick)u.l.intensity=u.base*(1+(Math.sin(this.t*13+u.base)*.5+Math.sin(this.t*31)*.5)*u.s);for(const u of e.occluders){const f=n.z<u.z-.2&&n.z>u.z-(u.depth||12)&&n.x>u.x0-.8&&n.x<u.x1+.8,_=u;_.by==null&&(_.by=u.mesh.position.y,_.k=1);const x=f?.14:1;_.k+=(x-_.k)*Math.min(1,t*7),u.mesh.scale.y=_.k,u.mesh.position.y=_.by*_.k;const b=u.mesh.material;b.opacity=1,b.depthWrite=!0}{const u=e;if(u.cutFollow){const f=e.occluders.some(_=>_.k!=null&&_.k<.6);for(const _ of u.cutFollow)_.visible=!f}}for(const u of e.updaters)u(t,this.t);e.def.update&&e.def.update(this,t,this.t),this.questT-=t,this.questT<0&&(this.questT=.5,Wt.quest());let s=null,r=1e9;if(this.lock===0&&!Wt.modal)for(const u of e.inters){if(!u.enabled||u.cond&&!u.cond()){u.marker&&(u.marker.visible=!1);continue}const f=Math.hypot(u.x-n.x,u.z-n.z);u.marker&&(u.marker.visible=f<5,u.marker.position.y=u.y+.5+Math.sin(this.t*3+u.x)*.08,u.marker.rotation.y=this.t*2),f<u.r&&f<r&&(r=f,s=u)}this.near=s;const a=this.cam,o=a.focus,c=this.camBounds(),h=o?o.x:Ns(n.x,-c.mx,c.mx),l=o?o.z:Ns(n.z,c.z0,c.z1),d=o?o.dist:e.def.camDist||24,p=Math.min(1,t*3.5);a.x+=(h-a.x)*p,a.z+=(l-a.z)*p,a.dist+=(d-a.dist)*p,a.shake=Math.max(0,a.shake-t*1.2);const m=(Math.random()-.5)*a.shake,g=(Math.random()-.5)*a.shake,v=this.R.cam.aspect<1?1.25:1;if(this.R.cam.position.set(a.x+m,a.yOff+Math.sin(a.pitch)*a.dist*v+g,a.z+Math.cos(a.pitch)*a.dist*v),this.R.cam.up.set(Math.sin(a.roll),Math.cos(a.roll),0),this.R.cam.lookAt(a.x+m,a.yOff,a.z),this.faceMask(),this.R.tilt){const f=(new k(n.x,1.2,n.z).project(this.R.cam).y+1)/2,_=this.R.tilt.uniforms;_.uFocus.value+=(Math.max(.15,Math.min(.85,f))-_.uFocus.value)*Math.min(1,t*6),_.uAmt.value=this.room?.def.noTilt?0:this.cam.focus?1.25:1}if(this.fadeBlockers(t),this.fpsT+=t,this.fpsN++,this.fpsT>4){const u=this.fpsN/this.fpsT;this.fpsT=0,this.fpsN=0,u<24&&!this.fast&&document.visibilityState==="visible"?++this.fpsLow>=2&&Me.quality!=="low"&&(Me.quality=Me.quality==="high"?"med":"low",this.fpsLow=0,this.R.setup(),Wt.toast("Графика упрощена для плавности","⚙")):this.fpsLow=0}if(this.R.render(t),Wt.letterbox(!!this.cam.focus&&this.lock>0),s){const u=new k(s.x,s.y+.9,s.z).project(this.R.cam);Wt.prompt(s.label,(u.x+1)/2,(1-u.y)/2)}else Wt.prompt(null);ho()}}function Ns(i,t,e){return Math.max(t,Math.min(e,i))}function wv(i){return i==="l"?{x:-1,z:0}:i==="r"?{x:1,z:0}:i==="b"?{x:0,z:-1}:{x:0,z:1}}function Vh(i){let t=5381;for(let e=0;e<i.length;e++)t=(t<<5)+t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function Cv(i,t){const e=i.tint||[1,1,1],n=t.tint||[1,1,1];return{sat:(i.sat??1)*(t.sat??1),tint:[e[0]*n[0],e[1]*n[1],e[2]*n[2]],vig:Math.max(i.vig??.35,t.vig??0),bright:(i.bright??1)*(t.bright??1),contrast:(i.contrast??1)*(t.contrast??1)}}const Vt=new Mv;Vt.__rooms=()=>es;window.__G=Vt;async function Ev(){const i=document.getElementById("boot"),t=document.getElementById("boot-s");try{await Promise.all(['8px "Pixelify Sans"',"16px Lora",'16px "Playfair Display"','16px "Marck Script"',"16px Aurelia","16px Cintarini","16px Highcrest","16px Lombardina","16px Caveat",'16px "Bad Script"',"16px Neucha",'700 16px "Amatic SC"'].map(n=>document.fonts.load(n,"AБя").catch(s=>console.warn("[fonts]",n,s)))),Wt.init(),Vt.boot(document.getElementById("game"));const e=()=>{qt.init()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),t.innerHTML='<span class="boot-enter">нажмите, чтобы войти в театр</span>',i.classList.add("ready"),await new Promise(n=>{const s=()=>{window.removeEventListener("keydown",s,!0),i.removeEventListener("pointerdown",s),qt.init();const r=document.documentElement;try{const a=(r.requestFullscreen||r.webkitRequestFullscreen)?.call(r,{navigationUI:"hide"});a&&a.catch&&a.catch(o=>console.warn("[fullscreen]",o))}catch(a){console.warn("[fullscreen] недоступен",a)}n()};window.addEventListener("keydown",s,!0),i.addEventListener("pointerdown",s)}),await Wt.mainMenu(),i.style.opacity="0",setTimeout(()=>i.remove(),700)}catch(e){console.error("[boot] игра не запустилась",e),t.textContent="Не удалось запустить игру: "+(e?.message||e)+". Проверьте, что браузер поддерживает WebGL, и обновите страницу."}}Ev();export{Eu as $,Wv as A,Ue as B,ne as C,Pe as D,Cu as E,xe as F,ce as G,Ll as H,er as I,Xe as J,F1 as K,Av as L,ht as M,Ne as N,ln as O,An as P,Pv as Q,fs as R,$v as S,Qs as T,Uv as U,k as V,Bv as W,Ai as X,Ti as Y,i1 as Z,Vn as _,ye as a,Zc as a0,Hv as a1,xi as a2,He as a3,uu as a4,Yh as a5,qs as a6,Nv as a7,Fv as a8,t1 as a9,Gv as aa,El as ab,ie as ac,fu as ad,Tv as ae,K2 as af,Pl as ag,Wt as ah,qt as ai,Vt as aj,pe as ak,ss as al,Me as am,Yg as an,zt as ao,Y2 as ap,_c as aq,Tu as ar,O1 as as,e1 as at,pu as au,at as av,bu as aw,qv as ax,qn as b,Fu as c,Je as d,Vv as e,Iv as f,kv as g,gn as h,Q2 as i,on as j,mu as k,pn as l,Rv as m,Ke as n,Re as o,_s as p,se as q,Au as r,Dv as s,Ze as t,Gs as u,p1 as v,Lv as w,Ov as x,vn as y,zv as z};
