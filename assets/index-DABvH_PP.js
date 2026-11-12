const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hub-K-5LSKFR.js","./minigames-C6lfeNM4.js","./polina-B6ycY_US.js","./common-BKgWdzpx.js","./ruben-DiRYpVS0.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const qc="modulepreload",$c=function(i,t){return new URL(i,t).href},vo={},bn=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),r=l?.nonce||l?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=$c(c,n),c in vo)return;vo[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const v=o[p];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":qc,h||(g.as="script"),g.crossOrigin="",g.href=c,r&&g.setAttribute("nonce",r),document.head.appendChild(g),h)return new Promise((p,v)=>{g.addEventListener("load",p),g.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Gr="169",Xc=0,xo=1,Yc=2,kl=1,Ol=2,Sn=3,On=0,Oe=1,qe=2,Tn=0,ei=1,ns=2,Mo=3,bo=4,Kc=5,jn=100,jc=101,Zc=102,Jc=103,Qc=104,th=200,eh=201,nh=202,ih=203,Za=204,Ja=205,sh=206,ah=207,rh=208,oh=209,lh=210,ch=211,hh=212,uh=213,fh=214,Qa=0,tr=1,er=2,Ri=3,nr=4,ir=5,sr=6,ar=7,Vr=0,dh=1,ph=2,kn=0,Bl=1,zl=2,Gl=3,Hr=4,mh=5,Vl=6,Hl=7,Wl=300,Pi=301,Li=302,rr=303,or=304,Qs=306,qs=1e3,Qn=1001,lr=1002,Pe=1003,gh=1004,fs=1005,en=1006,ca=1007,ti=1008,wn=1009,ql=1010,$l=1011,is=1012,Wr=1013,ni=1014,yn=1015,dn=1016,qr=1017,$r=1018,Di=1020,Xl=35902,Yl=1021,Kl=1022,sn=1023,jl=1024,Zl=1025,wi=1026,Ii=1027,Jl=1028,Xr=1029,Ql=1030,Yr=1031,Kr=1033,ks=33776,Os=33777,Bs=33778,zs=33779,cr=35840,hr=35841,ur=35842,fr=35843,dr=36196,pr=37492,mr=37496,gr=37808,_r=37809,vr=37810,xr=37811,Mr=37812,br=37813,Sr=37814,yr=37815,Er=37816,Tr=37817,wr=37818,Ar=37819,Cr=37820,Rr=37821,Gs=36492,Pr=36494,Lr=36495,tc=36283,Dr=36284,Ir=36285,Ur=36286,_h=3200,vh=3201,ec=0,xh=1,Nn="",Ke="srgb",zn="srgb-linear",jr="display-p3",ta="display-p3-linear",$s="linear",ne="srgb",Xs="rec709",Ys="p3",ai=7680,So=519,Mh=512,bh=513,Sh=514,nc=515,yh=516,Eh=517,Th=518,wh=519,yo=35044,Eo="300 es",En=2e3,Ks=2001;class Oi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const we=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ha=Math.PI/180,js=180/Math.PI;function rs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(we[i&255]+we[i>>8&255]+we[i>>16&255]+we[i>>24&255]+"-"+we[t&255]+we[t>>8&255]+"-"+we[t>>16&15|64]+we[t>>24&255]+"-"+we[e&63|128]+we[e>>8&255]+"-"+we[e>>16&255]+we[e>>24&255]+we[n&255]+we[n>>8&255]+we[n>>16&255]+we[n>>24&255]).toLowerCase()}function Fe(i,t,e){return Math.max(t,Math.min(e,i))}function Ah(i,t){return(i%t+t)%t}function ua(i,t,e){return(1-e)*i+e*t}function Vi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ot{constructor(t,e,n,s,a,o,l,r,c){Ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,l,r,c)}set(t,e,n,s,a,o,l,r,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=a,h[5]=r,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],l=n[3],r=n[6],c=n[1],h=n[4],u=n[7],d=n[2],g=n[5],p=n[8],v=s[0],f=s[3],m=s[6],x=s[1],y=s[4],b=s[7],R=s[2],T=s[5],A=s[8];return a[0]=o*v+l*x+r*R,a[3]=o*f+l*y+r*T,a[6]=o*m+l*b+r*A,a[1]=c*v+h*x+u*R,a[4]=c*f+h*y+u*T,a[7]=c*m+h*b+u*A,a[2]=d*v+g*x+p*R,a[5]=d*f+g*y+p*T,a[8]=d*m+g*b+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],r=t[6],c=t[7],h=t[8];return e*o*h-e*l*c-n*a*h+n*l*r+s*a*c-s*o*r}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],r=t[6],c=t[7],h=t[8],u=h*o-l*c,d=l*r-h*a,g=c*a-o*r,p=e*u+n*d+s*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(l*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*r)*v,t[5]=(s*a-l*e)*v,t[6]=g*v,t[7]=(n*r-c*e)*v,t[8]=(o*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,l){const r=Math.cos(a),c=Math.sin(a);return this.set(n*r,n*c,-n*(r*o+c*l)+o+t,-s*c,s*r,-s*(-c*o+r*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(fa.makeScale(t,e)),this}rotate(t){return this.premultiply(fa.makeRotation(-t)),this}translate(t,e){return this.premultiply(fa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fa=new Ot;function ic(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ch(){const i=Zs("canvas");return i.style.display="block",i}const To={};function Vs(i){i in To||(To[i]=!0,console.warn(i))}function Rh(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function Ph(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Lh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const wo=new Ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ao=new Ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Hi={[zn]:{transfer:$s,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ke]:{transfer:ne,primaries:Xs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ta]:{transfer:$s,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(wo)},[jr]:{transfer:ne,primaries:Ys,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ao),fromReference:i=>i.applyMatrix3(wo).convertLinearToSRGB()}},Dh=new Set([zn,ta]),jt={enabled:!0,_workingColorSpace:zn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Dh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Hi[t].toReference,s=Hi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Hi[i].primaries},getTransfer:function(i){return i===Nn?$s:Hi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Hi[t].luminanceCoefficients)}};function Ai(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function da(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Ih{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ri===void 0&&(ri=Zs("canvas")),ri.width=t.width,ri.height=t.height;const n=ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Zs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Ai(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ai(e[n]/255)*255):e[n]=Ai(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uh=0;class sc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=rs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(pa(s[o].image)):a.push(pa(s[o]))}else a=pa(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function pa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Ih.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nh=0;class De extends Oi{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=Qn,s=Qn,a=en,o=ti,l=sn,r=wn,c=De.DEFAULT_ANISOTROPY,h=Nn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=rs(),this.name="",this.source=new sc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=r,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case qs:t.x=t.x-Math.floor(t.x);break;case Qn:t.x=t.x<0?0:1;break;case lr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case qs:t.y=t.y-Math.floor(t.y);break;case Qn:t.y=t.y<0?0:1;break;case lr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Wl;De.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,s=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const r=t.elements,c=r[0],h=r[4],u=r[8],d=r[1],g=r[5],p=r[9],v=r[2],f=r[6],m=r[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+f)<.1&&Math.abs(c+g+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(g+1)/2,R=(m+1)/2,T=(h+d)/4,A=(u+v)/4,L=(p+f)/4;return y>b&&y>R?y<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(y),s=T/n,a=A/n):b>R?b<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(b),n=T/s,a=L/s):R<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(R),n=A/a,s=L/a),this.set(n,s,a,e),this}let x=Math.sqrt((f-p)*(f-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(f-p)/x,this.y=(u-v)/x,this.z=(d-h)/x,this.w=Math.acos((c+g+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Fh extends Oi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new De(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class je extends Fh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ac extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kh extends De{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Pe,this.minFilter=Pe,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,l){let r=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=a[o+0],g=a[o+1],p=a[o+2],v=a[o+3];if(l===0){t[e+0]=r,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(l===1){t[e+0]=d,t[e+1]=g,t[e+2]=p,t[e+3]=v;return}if(u!==v||r!==d||c!==g||h!==p){let f=1-l;const m=r*d+c*g+h*p+u*v,x=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const R=Math.sqrt(y),T=Math.atan2(R,m*x);f=Math.sin(f*T)/R,l=Math.sin(l*T)/R}const b=l*x;if(r=r*f+d*b,c=c*f+g*b,h=h*f+p*b,u=u*f+v*b,f===1-l){const R=1/Math.sqrt(r*r+c*c+h*h+u*u);r*=R,c*=R,h*=R,u*=R}}t[e]=r,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,o){const l=n[s],r=n[s+1],c=n[s+2],h=n[s+3],u=a[o],d=a[o+1],g=a[o+2],p=a[o+3];return t[e]=l*p+h*u+r*g-c*d,t[e+1]=r*p+h*d+c*u-l*g,t[e+2]=c*p+h*g+l*d-r*u,t[e+3]=h*p-l*u-r*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,o=t._order,l=Math.cos,r=Math.sin,c=l(n/2),h=l(s/2),u=l(a/2),d=r(n/2),g=r(s/2),p=r(a/2);switch(o){case"XYZ":this._x=d*h*u+c*g*p,this._y=c*g*u-d*h*p,this._z=c*h*p+d*g*u,this._w=c*h*u-d*g*p;break;case"YXZ":this._x=d*h*u+c*g*p,this._y=c*g*u-d*h*p,this._z=c*h*p-d*g*u,this._w=c*h*u+d*g*p;break;case"ZXY":this._x=d*h*u-c*g*p,this._y=c*g*u+d*h*p,this._z=c*h*p+d*g*u,this._w=c*h*u-d*g*p;break;case"ZYX":this._x=d*h*u-c*g*p,this._y=c*g*u+d*h*p,this._z=c*h*p-d*g*u,this._w=c*h*u+d*g*p;break;case"YZX":this._x=d*h*u+c*g*p,this._y=c*g*u+d*h*p,this._z=c*h*p-d*g*u,this._w=c*h*u-d*g*p;break;case"XZY":this._x=d*h*u-c*g*p,this._y=c*g*u-d*h*p,this._z=c*h*p+d*g*u,this._w=c*h*u+d*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],l=e[5],r=e[9],c=e[2],h=e[6],u=e[10],d=n+l+u;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-r)*g,this._y=(a-c)*g,this._z=(o-s)*g}else if(n>l&&n>u){const g=2*Math.sqrt(1+n-l-u);this._w=(h-r)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(a+c)/g}else if(l>u){const g=2*Math.sqrt(1+l-n-u);this._w=(a-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(r+h)/g}else{const g=2*Math.sqrt(1+u-n-l);this._w=(o-s)/g,this._x=(a+c)/g,this._y=(r+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Fe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,l=e._x,r=e._y,c=e._z,h=e._w;return this._x=n*h+o*l+s*c-a*r,this._y=s*h+o*r+a*l-n*c,this._z=a*h+o*c+n*r-s*l,this._w=o*h-n*l-s*r-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let l=o*t._w+n*t._x+s*t._y+a*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const r=1-l*l;if(r<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}const c=Math.sqrt(r),h=Math.atan2(c,l),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Co.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Co.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,l=t.z,r=t.w,c=2*(o*s-l*n),h=2*(l*e-a*s),u=2*(a*n-o*e);return this.x=e+r*c+o*u-l*h,this.y=n+r*h+l*c-a*u,this.z=s+r*u+a*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,l=e.y,r=e.z;return this.x=s*r-a*l,this.y=a*o-n*r,this.z=n*l-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ma.copy(this).projectOnVector(t),this.sub(ma)}reflect(t){return this.sub(ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Fe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ma=new F,Co=new os;class ls{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(a,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ds.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ds.copy(n.boundingBox)),ds.applyMatrix4(t.matrixWorld),this.union(ds)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Wi),ps.subVectors(this.max,Wi),oi.subVectors(t.a,Wi),li.subVectors(t.b,Wi),ci.subVectors(t.c,Wi),Cn.subVectors(li,oi),Rn.subVectors(ci,li),Vn.subVectors(oi,ci);let e=[0,-Cn.z,Cn.y,0,-Rn.z,Rn.y,0,-Vn.z,Vn.y,Cn.z,0,-Cn.x,Rn.z,0,-Rn.x,Vn.z,0,-Vn.x,-Cn.y,Cn.x,0,-Rn.y,Rn.x,0,-Vn.y,Vn.x,0];return!ga(e,oi,li,ci,ps)||(e=[1,0,0,0,1,0,0,0,1],!ga(e,oi,li,ci,ps))?!1:(ms.crossVectors(Cn,Rn),e=[ms.x,ms.y,ms.z],ga(e,oi,li,ci,ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new F,new F,new F,new F,new F,new F,new F,new F],Je=new F,ds=new ls,oi=new F,li=new F,ci=new F,Cn=new F,Rn=new F,Vn=new F,Wi=new F,ps=new F,ms=new F,Hn=new F;function ga(i,t,e,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){Hn.fromArray(i,a);const l=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),r=t.dot(Hn),c=e.dot(Hn),h=n.dot(Hn);if(Math.max(-Math.max(r,c,h),Math.min(r,c,h))>l)return!1}return!0}const Oh=new ls,qi=new F,_a=new F;class ea{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Oh.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qi.subVectors(t,this.center);const e=qi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(qi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_a.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qi.copy(t.center).add(_a)),this.expandByPoint(qi.copy(t.center).sub(_a))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new F,va=new F,gs=new F,Pn=new F,xa=new F,_s=new F,Ma=new F;class rc{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){va.copy(t).add(e).multiplyScalar(.5),gs.copy(e).sub(t).normalize(),Pn.copy(this.origin).sub(va);const a=t.distanceTo(e)*.5,o=-this.direction.dot(gs),l=Pn.dot(this.direction),r=-Pn.dot(gs),c=Pn.lengthSq(),h=Math.abs(1-o*o);let u,d,g,p;if(h>0)if(u=o*r-l,d=o*l-r,p=a*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,g=u*(u+o*d+2*l)+d*(o*u+d+2*r)+c}else d=a,u=Math.max(0,-(o*d+l)),g=-u*u+d*(d+2*r)+c;else d=-a,u=Math.max(0,-(o*d+l)),g=-u*u+d*(d+2*r)+c;else d<=-p?(u=Math.max(0,-(-o*a+l)),d=u>0?-a:Math.min(Math.max(-a,-r),a),g=-u*u+d*(d+2*r)+c):d<=p?(u=0,d=Math.min(Math.max(-a,-r),a),g=d*(d+2*r)+c):(u=Math.max(0,-(o*a+l)),d=u>0?a:Math.min(Math.max(-a,-r),a),g=-u*u+d*(d+2*r)+c);else d=o>0?-a:a,u=Math.max(0,-(o*d+l)),g=-u*u+d*(d+2*r)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(va).addScaledVector(gs,d),g}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),s=_n.dot(_n)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),l=n-o,r=n+o;return r<0?null:l<0?this.at(r,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,l,r;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),u>=0?(l=(t.min.z-d.z)*u,r=(t.max.z-d.z)*u):(l=(t.max.z-d.z)*u,r=(t.min.z-d.z)*u),n>r||l>s)||((l>n||n!==n)&&(n=l),(r<s||s!==s)&&(s=r),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,s,a){xa.subVectors(e,t),_s.subVectors(n,t),Ma.crossVectors(xa,_s);let o=this.direction.dot(Ma),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Pn.subVectors(this.origin,t);const r=l*this.direction.dot(_s.crossVectors(Pn,_s));if(r<0)return null;const c=l*this.direction.dot(xa.cross(Pn));if(c<0||r+c>o)return null;const h=-l*Pn.dot(Ma);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,a,o,l,r,c,h,u,d,g,p,v,f){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,l,r,c,h,u,d,g,p,v,f)}set(t,e,n,s,a,o,l,r,c,h,u,d,g,p,v,f){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=a,m[5]=o,m[9]=l,m[13]=r,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=g,m[7]=p,m[11]=v,m[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/hi.setFromMatrixColumn(t,0).length(),a=1/hi.setFromMatrixColumn(t,1).length(),o=1/hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),l=Math.sin(n),r=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=o*h,g=o*u,p=l*h,v=l*u;e[0]=r*h,e[4]=-r*u,e[8]=c,e[1]=g+p*c,e[5]=d-v*c,e[9]=-l*r,e[2]=v-d*c,e[6]=p+g*c,e[10]=o*r}else if(t.order==="YXZ"){const d=r*h,g=r*u,p=c*h,v=c*u;e[0]=d+v*l,e[4]=p*l-g,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-l,e[2]=g*l-p,e[6]=v+d*l,e[10]=o*r}else if(t.order==="ZXY"){const d=r*h,g=r*u,p=c*h,v=c*u;e[0]=d-v*l,e[4]=-o*u,e[8]=p+g*l,e[1]=g+p*l,e[5]=o*h,e[9]=v-d*l,e[2]=-o*c,e[6]=l,e[10]=o*r}else if(t.order==="ZYX"){const d=o*h,g=o*u,p=l*h,v=l*u;e[0]=r*h,e[4]=p*c-g,e[8]=d*c+v,e[1]=r*u,e[5]=v*c+d,e[9]=g*c-p,e[2]=-c,e[6]=l*r,e[10]=o*r}else if(t.order==="YZX"){const d=o*r,g=o*c,p=l*r,v=l*c;e[0]=r*h,e[4]=v-d*u,e[8]=p*u+g,e[1]=u,e[5]=o*h,e[9]=-l*h,e[2]=-c*h,e[6]=g*u+p,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*r,g=o*c,p=l*r,v=l*c;e[0]=r*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=g*u-p,e[2]=p*u-g,e[6]=l*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bh,t,zh)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Ln.crossVectors(n,Ve),Ln.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Ln.crossVectors(n,Ve)),Ln.normalize(),vs.crossVectors(Ve,Ln),s[0]=Ln.x,s[4]=vs.x,s[8]=Ve.x,s[1]=Ln.y,s[5]=vs.y,s[9]=Ve.y,s[2]=Ln.z,s[6]=vs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],l=n[4],r=n[8],c=n[12],h=n[1],u=n[5],d=n[9],g=n[13],p=n[2],v=n[6],f=n[10],m=n[14],x=n[3],y=n[7],b=n[11],R=n[15],T=s[0],A=s[4],L=s[8],P=s[12],_=s[1],S=s[5],G=s[9],B=s[13],I=s[2],z=s[6],O=s[10],Q=s[14],q=s[3],at=s[7],ot=s[11],pt=s[15];return a[0]=o*T+l*_+r*I+c*q,a[4]=o*A+l*S+r*z+c*at,a[8]=o*L+l*G+r*O+c*ot,a[12]=o*P+l*B+r*Q+c*pt,a[1]=h*T+u*_+d*I+g*q,a[5]=h*A+u*S+d*z+g*at,a[9]=h*L+u*G+d*O+g*ot,a[13]=h*P+u*B+d*Q+g*pt,a[2]=p*T+v*_+f*I+m*q,a[6]=p*A+v*S+f*z+m*at,a[10]=p*L+v*G+f*O+m*ot,a[14]=p*P+v*B+f*Q+m*pt,a[3]=x*T+y*_+b*I+R*q,a[7]=x*A+y*S+b*z+R*at,a[11]=x*L+y*G+b*O+R*ot,a[15]=x*P+y*B+b*Q+R*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],l=t[5],r=t[9],c=t[13],h=t[2],u=t[6],d=t[10],g=t[14],p=t[3],v=t[7],f=t[11],m=t[15];return p*(+a*r*u-s*c*u-a*l*d+n*c*d+s*l*g-n*r*g)+v*(+e*r*g-e*c*d+a*o*d-s*o*g+s*c*h-a*r*h)+f*(+e*c*u-e*l*g-a*o*u+n*o*g+a*l*h-n*c*h)+m*(-s*l*h-e*r*u+e*l*d+s*o*u-n*o*d+n*r*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],r=t[6],c=t[7],h=t[8],u=t[9],d=t[10],g=t[11],p=t[12],v=t[13],f=t[14],m=t[15],x=u*f*c-v*d*c+v*r*g-l*f*g-u*r*m+l*d*m,y=p*d*c-h*f*c-p*r*g+o*f*g+h*r*m-o*d*m,b=h*v*c-p*u*c+p*l*g-o*v*g-h*l*m+o*u*m,R=p*u*r-h*v*r-p*l*d+o*v*d+h*l*f-o*u*f,T=e*x+n*y+s*b+a*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=x*A,t[1]=(v*d*a-u*f*a-v*s*g+n*f*g+u*s*m-n*d*m)*A,t[2]=(l*f*a-v*r*a+v*s*c-n*f*c-l*s*m+n*r*m)*A,t[3]=(u*r*a-l*d*a-u*s*c+n*d*c+l*s*g-n*r*g)*A,t[4]=y*A,t[5]=(h*f*a-p*d*a+p*s*g-e*f*g-h*s*m+e*d*m)*A,t[6]=(p*r*a-o*f*a-p*s*c+e*f*c+o*s*m-e*r*m)*A,t[7]=(o*d*a-h*r*a+h*s*c-e*d*c-o*s*g+e*r*g)*A,t[8]=b*A,t[9]=(p*u*a-h*v*a-p*n*g+e*v*g+h*n*m-e*u*m)*A,t[10]=(o*v*a-p*l*a+p*n*c-e*v*c-o*n*m+e*l*m)*A,t[11]=(h*l*a-o*u*a-h*n*c+e*u*c+o*n*g-e*l*g)*A,t[12]=R*A,t[13]=(h*v*s-p*u*s+p*n*d-e*v*d-h*n*f+e*u*f)*A,t[14]=(p*l*s-o*v*s-p*n*r+e*v*r+o*n*f-e*l*f)*A,t[15]=(o*u*s-h*l*s+h*n*r-e*u*r-o*n*d+e*l*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,l=t.y,r=t.z,c=a*o,h=a*l;return this.set(c*o+n,c*l-s*r,c*r+s*l,0,c*l+s*r,h*l+n,h*r-s*o,0,c*r-s*l,h*r+s*o,a*r*r+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,l=e._z,r=e._w,c=a+a,h=o+o,u=l+l,d=a*c,g=a*h,p=a*u,v=o*h,f=o*u,m=l*u,x=r*c,y=r*h,b=r*u,R=n.x,T=n.y,A=n.z;return s[0]=(1-(v+m))*R,s[1]=(g+b)*R,s[2]=(p-y)*R,s[3]=0,s[4]=(g-b)*T,s[5]=(1-(d+m))*T,s[6]=(f+x)*T,s[7]=0,s[8]=(p+y)*A,s[9]=(f-x)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=hi.set(s[0],s[1],s[2]).length();const o=hi.set(s[4],s[5],s[6]).length(),l=hi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Qe.copy(this);const c=1/a,h=1/o,u=1/l;return Qe.elements[0]*=c,Qe.elements[1]*=c,Qe.elements[2]*=c,Qe.elements[4]*=h,Qe.elements[5]*=h,Qe.elements[6]*=h,Qe.elements[8]*=u,Qe.elements[9]*=u,Qe.elements[10]*=u,e.setFromRotationMatrix(Qe),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,a,o,l=En){const r=this.elements,c=2*a/(e-t),h=2*a/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let g,p;if(l===En)g=-(o+a)/(o-a),p=-2*o*a/(o-a);else if(l===Ks)g=-o/(o-a),p=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return r[0]=c,r[4]=0,r[8]=u,r[12]=0,r[1]=0,r[5]=h,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=g,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,s,a,o,l=En){const r=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-a),d=(e+t)*c,g=(n+s)*h;let p,v;if(l===En)p=(o+a)*u,v=-2*u;else if(l===Ks)p=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-g,r[2]=0,r[6]=0,r[10]=v,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const hi=new F,Qe=new oe,Bh=new F(0,0,0),zh=new F(1,1,1),Ln=new F,vs=new F,Ve=new F,Ro=new oe,Po=new os;class pn{constructor(t=0,e=0,n=0,s=pn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],l=s[8],r=s[1],c=s[5],h=s[9],u=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Fe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Fe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(r,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Fe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(r,a));break;case"ZYX":this._y=Math.asin(-Fe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(r,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Fe(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Fe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ro.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ro,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Po.setFromEuler(this),this.setFromQuaternion(Po,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}pn.DEFAULT_ORDER="XYZ";class oc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Gh=0;const Lo=new F,ui=new os,vn=new oe,xs=new F,$i=new F,Vh=new F,Hh=new os,Do=new F(1,0,0),Io=new F(0,1,0),Uo=new F(0,0,1),No={type:"added"},Wh={type:"removed"},fi={type:"childadded",child:null},ba={type:"childremoved",child:null};class de extends Oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new F,e=new pn,n=new os,s=new F(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new Ot}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.multiply(ui),this}rotateOnWorldAxis(t,e){return ui.setFromAxisAngle(t,e),this.quaternion.premultiply(ui),this}rotateX(t){return this.rotateOnAxis(Do,t)}rotateY(t){return this.rotateOnAxis(Io,t)}rotateZ(t){return this.rotateOnAxis(Uo,t)}translateOnAxis(t,e){return Lo.copy(t).applyQuaternion(this.quaternion),this.position.add(Lo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Do,t)}translateY(t){return this.translateOnAxis(Io,t)}translateZ(t){return this.translateOnAxis(Uo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(vn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xs.copy(t):xs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),$i.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vn.lookAt($i,xs,this.up):vn.lookAt(xs,$i,this.up),this.quaternion.setFromRotationMatrix(vn),s&&(vn.extractRotation(s.matrixWorld),ui.setFromRotationMatrix(vn),this.quaternion.premultiply(ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(No),fi.child=t,this.dispatchEvent(fi),fi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Wh),ba.child=t,this.dispatchEvent(ba),ba.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(vn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(No),fi.child=t,this.dispatchEvent(fi),fi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,t,Vh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($i,Hh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,r){return l[r.uuid]===void 0&&(l[r.uuid]=r.toJSON(t)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const r=l.shapes;if(Array.isArray(r))for(let c=0,h=r.length;c<h;c++){const u=r[c];a(t.shapes,u)}else a(t.shapes,r)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let r=0,c=this.material.length;r<c;r++)l.push(a(t.materials,this.material[r]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const r=this.animations[l];s.animations.push(a(t.animations,r))}}if(e){const l=o(t.geometries),r=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),g=o(t.animations),p=o(t.nodes);l.length>0&&(n.geometries=l),r.length>0&&(n.materials=r),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){const r=[];for(const c in l){const h=l[c];delete h.metadata,r.push(h)}return r}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new F(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new F,xn=new F,Sa=new F,Mn=new F,di=new F,pi=new F,Fo=new F,ya=new F,Ea=new F,Ta=new F,wa=new te,Aa=new te,Ca=new te;class nn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),tn.subVectors(t,e),s.cross(tn);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){tn.subVectors(s,e),xn.subVectors(n,e),Sa.subVectors(t,e);const o=tn.dot(tn),l=tn.dot(xn),r=tn.dot(Sa),c=xn.dot(xn),h=xn.dot(Sa),u=o*c-l*l;if(u===0)return a.set(0,0,0),null;const d=1/u,g=(c*r-l*h)*d,p=(o*h-l*r)*d;return a.set(1-g-p,p,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,s,a,o,l,r){return this.getBarycoord(t,e,n,s,Mn)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(a,Mn.x),r.addScaledVector(o,Mn.y),r.addScaledVector(l,Mn.z),r)}static getInterpolatedAttribute(t,e,n,s,a,o){return wa.setScalar(0),Aa.setScalar(0),Ca.setScalar(0),wa.fromBufferAttribute(t,e),Aa.fromBufferAttribute(t,n),Ca.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(wa,a.x),o.addScaledVector(Aa,a.y),o.addScaledVector(Ca,a.z),o}static isFrontFacing(t,e,n,s){return tn.subVectors(n,e),xn.subVectors(t,e),tn.cross(xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return tn.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),tn.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return nn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return nn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return nn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return nn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return nn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,l;di.subVectors(s,n),pi.subVectors(a,n),ya.subVectors(t,n);const r=di.dot(ya),c=pi.dot(ya);if(r<=0&&c<=0)return e.copy(n);Ea.subVectors(t,s);const h=di.dot(Ea),u=pi.dot(Ea);if(h>=0&&u<=h)return e.copy(s);const d=r*u-h*c;if(d<=0&&r>=0&&h<=0)return o=r/(r-h),e.copy(n).addScaledVector(di,o);Ta.subVectors(t,a);const g=di.dot(Ta),p=pi.dot(Ta);if(p>=0&&g<=p)return e.copy(a);const v=g*c-r*p;if(v<=0&&c>=0&&p<=0)return l=c/(c-p),e.copy(n).addScaledVector(pi,l);const f=h*p-g*u;if(f<=0&&u-h>=0&&g-p>=0)return Fo.subVectors(a,s),l=(u-h)/(u-h+(g-p)),e.copy(s).addScaledVector(Fo,l);const m=1/(f+v+d);return o=v*m,l=d*m,e.copy(n).addScaledVector(di,o).addScaledVector(pi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function Ra(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=Ah(t,1),e=Fe(e,0,1),n=Fe(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Ra(o,a,t+1/3),this.g=Ra(o,a,t),this.b=Ra(o,a,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=lc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ai(t.r),this.g=Ai(t.g),this.b=Ai(t.b),this}copyLinearToSRGB(t){return this.r=da(t.r),this.g=da(t.g),this.b=da(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return jt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Fe(Ae.r*255,0,255))*65536+Math.round(Fe(Ae.g*255,0,255))*256+Math.round(Fe(Ae.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ae.copy(this),e);const n=Ae.r,s=Ae.g,a=Ae.b,o=Math.max(n,s,a),l=Math.min(n,s,a);let r,c;const h=(l+o)/2;if(l===o)r=0,c=0;else{const u=o-l;switch(c=h<=.5?u/(o+l):u/(2-o-l),o){case n:r=(s-a)/u+(s<a?6:0);break;case s:r=(a-n)/u+2;break;case a:r=(n-s)/u+4;break}r/=6}return t.h=r,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Ke){jt.fromWorkingColorSpace(Ae.copy(this),t);const e=Ae.r,n=Ae.g,s=Ae.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Ms);const n=ua(Dn.h,Ms.h,e),s=ua(Dn.s,Ms.s,e),a=ua(Dn.l,Ms.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ae=new Bt;Bt.NAMES=lc;let qh=0;class Bi extends Oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ei,this.side=On,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Za,this.blendDst=Ja,this.blendEquation=jn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ri,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=So,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ai,this.stencilZFail=ai,this.stencilZPass=ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ei&&(n.blending=this.blending),this.side!==On&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Za&&(n.blendSrc=this.blendSrc),this.blendDst!==Ja&&(n.blendDst=this.blendDst),this.blendEquation!==jn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ri&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==So&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const l in a){const r=a[l];delete r.metadata,o.push(r)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class hn extends Bi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new F,bs=new Ct;class rn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=yo,this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)bs.fromBufferAttribute(this,e),bs.applyMatrix3(t),this.setXY(e,bs.x,bs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Vi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Vi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Vi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Vi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Vi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),a=Ne(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==yo&&(t.usage=this.usage),t}}class cc extends rn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hc extends rn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends rn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $h=0;const Ye=new oe,Pa=new de,mi=new F,He=new ls,Xi=new ls,be=new F;class $e extends Oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ic(t)?hc:cc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new Ot().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ye.makeRotationFromQuaternion(t),this.applyMatrix4(Ye),this}rotateX(t){return Ye.makeRotationX(t),this.applyMatrix4(Ye),this}rotateY(t){return Ye.makeRotationY(t),this.applyMatrix4(Ye),this}rotateZ(t){return Ye.makeRotationZ(t),this.applyMatrix4(Ye),this}translate(t,e,n){return Ye.makeTranslation(t,e,n),this.applyMatrix4(Ye),this}scale(t,e,n){return Ye.makeScale(t,e,n),this.applyMatrix4(Ye),this}lookAt(t){return Pa.lookAt(t),Pa.updateMatrix(),this.applyMatrix4(Pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mi).negate(),this.translate(mi.x,mi.y,mi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];He.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const l=e[a];Xi.setFromBufferAttribute(l),this.morphTargetsRelative?(be.addVectors(He.min,Xi.min),He.expandByPoint(be),be.addVectors(He.max,Xi.max),He.expandByPoint(be)):(He.expandByPoint(Xi.min),He.expandByPoint(Xi.max))}He.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)be.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(be));if(e)for(let a=0,o=e.length;a<o;a++){const l=e[a],r=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)be.fromBufferAttribute(l,c),r&&(mi.fromBufferAttribute(t,c),be.add(mi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],r=[];for(let L=0;L<n.count;L++)l[L]=new F,r[L]=new F;const c=new F,h=new F,u=new F,d=new Ct,g=new Ct,p=new Ct,v=new F,f=new F;function m(L,P,_){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,_),d.fromBufferAttribute(a,L),g.fromBufferAttribute(a,P),p.fromBufferAttribute(a,_),h.sub(c),u.sub(c),g.sub(d),p.sub(d);const S=1/(g.x*p.y-p.x*g.y);isFinite(S)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-g.y).multiplyScalar(S),f.copy(u).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(S),l[L].add(v),l[P].add(v),l[_].add(v),r[L].add(f),r[P].add(f),r[_].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let L=0,P=x.length;L<P;++L){const _=x[L],S=_.start,G=_.count;for(let B=S,I=S+G;B<I;B+=3)m(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new F,b=new F,R=new F,T=new F;function A(L){R.fromBufferAttribute(s,L),T.copy(R);const P=l[L];y.copy(P),y.sub(R.multiplyScalar(R.dot(P))).normalize(),b.crossVectors(T,P);const S=b.dot(r[L])<0?-1:1;o.setXYZW(L,y.x,y.y,y.z,S)}for(let L=0,P=x.length;L<P;++L){const _=x[L],S=_.start,G=_.count;for(let B=S,I=S+G;B<I;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new rn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new F,a=new F,o=new F,l=new F,r=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,g=t.count;d<g;d+=3){const p=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,p),a.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),l.fromBufferAttribute(n,p),r.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),l.add(h),r.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(l,r){const c=l.array,h=l.itemSize,u=l.normalized,d=new c.constructor(r.length*h);let g=0,p=0;for(let v=0,f=r.length;v<f;v++){l.isInterleavedBufferAttribute?g=r[v]*l.data.stride+l.offset:g=r[v]*h;for(let m=0;m<h;m++)d[p++]=c[g++]}return new rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new $e,n=this.index.array,s=this.attributes;for(const l in s){const r=s[l],c=t(r,n);e.setAttribute(l,c)}const a=this.morphAttributes;for(const l in a){const r=[],c=a[l];for(let h=0,u=c.length;h<u;h++){const d=c[h],g=t(d,n);r.push(g)}e.morphAttributes[l]=r}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,r=o.length;l<r;l++){const c=o[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const r=this.parameters;for(const c in r)r[c]!==void 0&&(t[c]=r[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const r in n){const c=n[r];t.data.attributes[r]=c.toJSON(t.data)}const s={};let a=!1;for(const r in this.morphAttributes){const c=this.morphAttributes[r],h=[];for(let u=0,d=c.length;u<d;u++){const g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[r]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const r=t.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ko=new oe,Wn=new rc,Ss=new ea,Oo=new F,ys=new F,Es=new F,Ts=new F,La=new F,ws=new F,Bo=new F,As=new F;class ve extends de{constructor(t=new $e,e=new hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(a&&l){ws.set(0,0,0);for(let r=0,c=a.length;r<c;r++){const h=l[r],u=a[r];h!==0&&(La.fromBufferAttribute(u,t),o?ws.addScaledVector(La,h):ws.addScaledVector(La.sub(e),h))}e.add(ws)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(a),Wn.copy(t.ray).recast(t.near),!(Ss.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(Ss,Oo)===null||Wn.origin.distanceToSquared(Oo)>(t.far-t.near)**2))&&(ko.copy(a).invert(),Wn.copy(t.ray).applyMatrix4(ko),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Wn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,l=a.index,r=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,g=a.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const f=d[p],m=o[f.materialIndex],x=Math.max(f.start,g.start),y=Math.min(l.count,Math.min(f.start+f.count,g.start+g.count));for(let b=x,R=y;b<R;b+=3){const T=l.getX(b),A=l.getX(b+1),L=l.getX(b+2);s=Cs(this,m,t,n,c,h,u,T,A,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let f=p,m=v;f<m;f+=3){const x=l.getX(f),y=l.getX(f+1),b=l.getX(f+2);s=Cs(this,o,t,n,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(r!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const f=d[p],m=o[f.materialIndex],x=Math.max(f.start,g.start),y=Math.min(r.count,Math.min(f.start+f.count,g.start+g.count));for(let b=x,R=y;b<R;b+=3){const T=b,A=b+1,L=b+2;s=Cs(this,m,t,n,c,h,u,T,A,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,g.start),v=Math.min(r.count,g.start+g.count);for(let f=p,m=v;f<m;f+=3){const x=f,y=f+1,b=f+2;s=Cs(this,o,t,n,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function Xh(i,t,e,n,s,a,o,l){let r;if(t.side===Oe?r=n.intersectTriangle(o,a,s,!0,l):r=n.intersectTriangle(s,a,o,t.side===On,l),r===null)return null;As.copy(l),As.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(As);return c<e.near||c>e.far?null:{distance:c,point:As.clone(),object:i}}function Cs(i,t,e,n,s,a,o,l,r,c){i.getVertexPosition(l,ys),i.getVertexPosition(r,Es),i.getVertexPosition(c,Ts);const h=Xh(i,t,e,n,ys,Es,Ts,Bo);if(h){const u=new F;nn.getBarycoord(Bo,ys,Es,Ts,u),s&&(h.uv=nn.getInterpolatedAttribute(s,l,r,c,u,new Ct)),a&&(h.uv1=nn.getInterpolatedAttribute(a,l,r,c,u,new Ct)),o&&(h.normal=nn.getInterpolatedAttribute(o,l,r,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:l,b:r,c,normal:new F,materialIndex:0};nn.getNormal(ys,Es,Ts,d.normal),h.face=d,h.barycoord=u}return h}class ii extends $e{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const l=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const r=[],c=[],h=[],u=[];let d=0,g=0;p("z","y","x",-1,-1,n,e,t,o,a,0),p("z","y","x",1,-1,n,e,-t,o,a,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,a,4),p("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(r),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function p(v,f,m,x,y,b,R,T,A,L,P){const _=b/A,S=R/L,G=b/2,B=R/2,I=T/2,z=A+1,O=L+1;let Q=0,q=0;const at=new F;for(let ot=0;ot<O;ot++){const pt=ot*S-B;for(let Gt=0;Gt<z;Gt++){const Vt=Gt*_-G;at[v]=Vt*x,at[f]=pt*y,at[m]=I,c.push(at.x,at.y,at.z),at[v]=0,at[f]=0,at[m]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(Gt/A),u.push(1-ot/L),Q+=1}}for(let ot=0;ot<L;ot++)for(let pt=0;pt<A;pt++){const Gt=d+pt+z*ot,Vt=d+pt+z*(ot+1),X=d+(pt+1)+z*(ot+1),J=d+(pt+1)+z*ot;r.push(Gt,Vt,J),r.push(Vt,X,J),q+=6}l.addGroup(g,q,P),g+=q,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ii(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ui(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Ui(i[e]);for(const s in n)t[s]=n[s]}return t}function Yh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uc(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const ss={clone:Ui,merge:Re};var Kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Le extends Bi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Kh,this.fragmentShader=jh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ui(t.uniforms),this.uniformsGroups=Yh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fc extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const In=new F,zo=new Ct,Go=new Ct;class ke extends fc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ha*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ha*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){In.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(In.x,In.y).multiplyScalar(-t/In.z),In.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(In.x,In.y).multiplyScalar(-t/In.z)}getViewSize(t,e){return this.getViewBounds(t,zo,Go),e.subVectors(Go,zo)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ha*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const r=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/r,e-=o.offsetY*n/c,s*=o.width/r,n*=o.height/c}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const gi=-90,_i=1;class Zh extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ke(gi,_i,t,e);s.layers=this.layers,this.add(s);const a=new ke(gi,_i,t,e);a.layers=this.layers,this.add(a);const o=new ke(gi,_i,t,e);o.layers=this.layers,this.add(o);const l=new ke(gi,_i,t,e);l.layers=this.layers,this.add(l);const r=new ke(gi,_i,t,e);r.layers=this.layers,this.add(r);const c=new ke(gi,_i,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,l,r]=e;for(const c of e)this.remove(c);if(t===En)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(t===Ks)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,r,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,r),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class dc extends De{constructor(t,e,n,s,a,o,l,r,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Pi,super(t,e,n,s,a,o,l,r,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jh extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dc(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:en}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ii(5,5,5),a=new Le({name:"CubemapFromEquirect",uniforms:Ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Tn});a.uniforms.tEquirect.value=e;const o=new ve(s,a),l=e.minFilter;return e.minFilter===ti&&(e.minFilter=en),new Zh(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}const Da=new F,Qh=new F,tu=new Ot;class Yn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Da.subVectors(n,e).cross(Qh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Da),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||tu.getNormalMatrix(t),s=this.coplanarPoint(Da).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qn=new ea,Rs=new F;class Zr{constructor(t=new Yn,e=new Yn,n=new Yn,s=new Yn,a=new Yn,o=new Yn){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=En){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],r=s[3],c=s[4],h=s[5],u=s[6],d=s[7],g=s[8],p=s[9],v=s[10],f=s[11],m=s[12],x=s[13],y=s[14],b=s[15];if(n[0].setComponents(r-a,d-c,f-g,b-m).normalize(),n[1].setComponents(r+a,d+c,f+g,b+m).normalize(),n[2].setComponents(r+o,d+h,f+p,b+x).normalize(),n[3].setComponents(r-o,d-h,f-p,b-x).normalize(),n[4].setComponents(r-l,d-u,f-v,b-y).normalize(),e===En)n[5].setComponents(r+l,d+u,f+v,b+y).normalize();else if(e===Ks)n[5].setComponents(l,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),qn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),qn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(qn)}intersectsSprite(t){return qn.center.set(0,0,0),qn.radius=.7071067811865476,qn.applyMatrix4(t.matrixWorld),this.intersectsSphere(qn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Rs.x=s.normal.x>0?t.max.x:t.min.x,Rs.y=s.normal.y>0?t.max.y:t.min.y,Rs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Rs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pc(){let i=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function eu(i){const t=new WeakMap;function e(l,r){const c=l.array,h=l.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(r,d),i.bufferData(r,c,h),l.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,r,c){const h=r.array,u=r.updateRanges;if(i.bindBuffer(c,l),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,p)=>g.start-p.start);let d=0;for(let g=1;g<u.length;g++){const p=u[d],v=u[g];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let g=0,p=u.length;g<p;g++){const v=u[g];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}r.clearUpdateRanges()}r.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const r=t.get(l);r&&(i.deleteBuffer(r.buffer),t.delete(l))}function o(l,r){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,r));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,r),c.version=l.version}}return{get:s,remove:a,update:o}}class Bn extends $e{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,l=Math.floor(n),r=Math.floor(s),c=l+1,h=r+1,u=t/l,d=e/r,g=[],p=[],v=[],f=[];for(let m=0;m<h;m++){const x=m*d-o;for(let y=0;y<c;y++){const b=y*u-a;p.push(b,-x,0),v.push(0,0,1),f.push(y/l),f.push(1-m/r)}}for(let m=0;m<r;m++)for(let x=0;x<l;x++){const y=x+c*m,b=x+c*(m+1),R=x+1+c*(m+1),T=x+1+c*m;g.push(y,b,T),g.push(b,R,T)}this.setIndex(g),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bn(t.width,t.height,t.widthSegments,t.heightSegments)}}var nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iu=`#ifdef USE_ALPHAHASH
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
#endif`,su=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,au=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ru=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ou=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lu=`#ifdef USE_AOMAP
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
#endif`,cu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hu=`#ifdef USE_BATCHING
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
#endif`,uu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,du=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,mu=`#ifdef USE_IRIDESCENCE
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
#endif`,gu=`#ifdef USE_BUMPMAP
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
#endif`,_u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Su=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Tu=`#define PI 3.141592653589793
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
} // validated`,wu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Au=`vec3 transformedNormal = objectNormal;
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
#endif`,Cu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Pu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Du="gl_FragColor = linearToOutputTexel( gl_FragColor );",Iu=`
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
}`,Uu=`#ifdef USE_ENVMAP
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
#endif`,Nu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fu=`#ifdef USE_ENVMAP
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
#endif`,ku=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,Bu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Vu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hu=`#ifdef USE_GRADIENTMAP
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
}`,Wu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,qu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Xu=`uniform bool receiveShadow;
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
#endif`,Yu=`#ifdef USE_ENVMAP
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
#endif`,Ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ju=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qu=`PhysicalMaterial material;
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
#endif`,tf=`struct PhysicalMaterial {
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
}`,ef=`
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
#endif`,nf=`#if defined( RE_IndirectDiffuse )
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
#endif`,sf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,af=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,rf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,uf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ff=`#if defined( USE_POINTS_UV )
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
#endif`,df=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_f=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vf=`#ifdef USE_MORPHTARGETS
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
#endif`,xf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ef=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Tf=`#ifdef USE_NORMALMAP
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
#endif`,wf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Af=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Pf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Lf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,If=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Uf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ff=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Of=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Gf=`float getShadowMask() {
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
}`,Vf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hf=`#ifdef USE_SKINNING
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
#endif`,Wf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jf=`#ifdef USE_TRANSMISSION
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
#endif`,Zf=`#ifdef USE_TRANSMISSION
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
#endif`,Jf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Qf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ed=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,id=`uniform sampler2D t2D;
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
}`,sd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ad=`#ifdef ENVMAP_TYPE_CUBE
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
}`,rd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ld=`#include <common>
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
}`,cd=`#if DEPTH_PACKING == 3200
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
}`,hd=`#define DISTANCE
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
}`,ud=`#define DISTANCE
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
}`,fd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pd=`uniform float scale;
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
}`,md=`uniform vec3 diffuse;
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
}`,gd=`#include <common>
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
}`,_d=`uniform vec3 diffuse;
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
}`,vd=`#define LAMBERT
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
}`,xd=`#define LAMBERT
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
}`,Md=`#define MATCAP
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
}`,bd=`#define MATCAP
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
}`,Sd=`#define NORMAL
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
}`,yd=`#define NORMAL
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
}`,Ed=`#define PHONG
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
}`,Td=`#define PHONG
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
}`,wd=`#define STANDARD
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
}`,Ad=`#define STANDARD
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
}`,Cd=`#define TOON
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
}`,Rd=`#define TOON
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
}`,Pd=`uniform float size;
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
}`,Ld=`uniform vec3 diffuse;
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
}`,Dd=`#include <common>
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
}`,Id=`uniform vec3 color;
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
}`,Ud=`uniform float rotation;
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
}`,Nd=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:nu,alphahash_pars_fragment:iu,alphamap_fragment:su,alphamap_pars_fragment:au,alphatest_fragment:ru,alphatest_pars_fragment:ou,aomap_fragment:lu,aomap_pars_fragment:cu,batching_pars_vertex:hu,batching_vertex:uu,begin_vertex:fu,beginnormal_vertex:du,bsdfs:pu,iridescence_fragment:mu,bumpmap_pars_fragment:gu,clipping_planes_fragment:_u,clipping_planes_pars_fragment:vu,clipping_planes_pars_vertex:xu,clipping_planes_vertex:Mu,color_fragment:bu,color_pars_fragment:Su,color_pars_vertex:yu,color_vertex:Eu,common:Tu,cube_uv_reflection_fragment:wu,defaultnormal_vertex:Au,displacementmap_pars_vertex:Cu,displacementmap_vertex:Ru,emissivemap_fragment:Pu,emissivemap_pars_fragment:Lu,colorspace_fragment:Du,colorspace_pars_fragment:Iu,envmap_fragment:Uu,envmap_common_pars_fragment:Nu,envmap_pars_fragment:Fu,envmap_pars_vertex:ku,envmap_physical_pars_fragment:Yu,envmap_vertex:Ou,fog_vertex:Bu,fog_pars_vertex:zu,fog_fragment:Gu,fog_pars_fragment:Vu,gradientmap_pars_fragment:Hu,lightmap_pars_fragment:Wu,lights_lambert_fragment:qu,lights_lambert_pars_fragment:$u,lights_pars_begin:Xu,lights_toon_fragment:Ku,lights_toon_pars_fragment:ju,lights_phong_fragment:Zu,lights_phong_pars_fragment:Ju,lights_physical_fragment:Qu,lights_physical_pars_fragment:tf,lights_fragment_begin:ef,lights_fragment_maps:nf,lights_fragment_end:sf,logdepthbuf_fragment:af,logdepthbuf_pars_fragment:rf,logdepthbuf_pars_vertex:of,logdepthbuf_vertex:lf,map_fragment:cf,map_pars_fragment:hf,map_particle_fragment:uf,map_particle_pars_fragment:ff,metalnessmap_fragment:df,metalnessmap_pars_fragment:pf,morphinstance_vertex:mf,morphcolor_vertex:gf,morphnormal_vertex:_f,morphtarget_pars_vertex:vf,morphtarget_vertex:xf,normal_fragment_begin:Mf,normal_fragment_maps:bf,normal_pars_fragment:Sf,normal_pars_vertex:yf,normal_vertex:Ef,normalmap_pars_fragment:Tf,clearcoat_normal_fragment_begin:wf,clearcoat_normal_fragment_maps:Af,clearcoat_pars_fragment:Cf,iridescence_pars_fragment:Rf,opaque_fragment:Pf,packing:Lf,premultiplied_alpha_fragment:Df,project_vertex:If,dithering_fragment:Uf,dithering_pars_fragment:Nf,roughnessmap_fragment:Ff,roughnessmap_pars_fragment:kf,shadowmap_pars_fragment:Of,shadowmap_pars_vertex:Bf,shadowmap_vertex:zf,shadowmask_pars_fragment:Gf,skinbase_vertex:Vf,skinning_pars_vertex:Hf,skinning_vertex:Wf,skinnormal_vertex:qf,specularmap_fragment:$f,specularmap_pars_fragment:Xf,tonemapping_fragment:Yf,tonemapping_pars_fragment:Kf,transmission_fragment:jf,transmission_pars_fragment:Zf,uv_pars_fragment:Jf,uv_pars_vertex:Qf,uv_vertex:td,worldpos_vertex:ed,background_vert:nd,background_frag:id,backgroundCube_vert:sd,backgroundCube_frag:ad,cube_vert:rd,cube_frag:od,depth_vert:ld,depth_frag:cd,distanceRGBA_vert:hd,distanceRGBA_frag:ud,equirect_vert:fd,equirect_frag:dd,linedashed_vert:pd,linedashed_frag:md,meshbasic_vert:gd,meshbasic_frag:_d,meshlambert_vert:vd,meshlambert_frag:xd,meshmatcap_vert:Md,meshmatcap_frag:bd,meshnormal_vert:Sd,meshnormal_frag:yd,meshphong_vert:Ed,meshphong_frag:Td,meshphysical_vert:wd,meshphysical_frag:Ad,meshtoon_vert:Cd,meshtoon_frag:Rd,points_vert:Pd,points_frag:Ld,shadow_vert:Dd,shadow_frag:Id,sprite_vert:Ud,sprite_frag:Nd},st={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ot}},envmap:{envMap:{value:null},envMapRotation:{value:new Ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ot},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0},uvTransform:{value:new Ot}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ot},alphaMap:{value:null},alphaMapTransform:{value:new Ot},alphaTest:{value:0}}},un={basic:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Re([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Re([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Re([st.points,st.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Re([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Re([st.common,st.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Re([st.sprite,st.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ot}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Re([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Re([st.lights,st.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};un.physical={uniforms:Re([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ot},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ot},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ot},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ot},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ot},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ot}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ps={r:0,b:0,g:0},$n=new pn,Fd=new oe;function kd(i,t,e,n,s,a,o){const l=new Bt(0);let r=a===!0?0:1,c,h,u=null,d=0,g=null;function p(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const b=p(x);b===null?m(l,r):b&&b.isColor&&(m(b,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,y){const b=p(y);b&&(b.isCubeTexture||b.mapping===Qs)?(h===void 0&&(h=new ve(new ii(1,1,1),new Le({name:"BackgroundCubeMaterial",uniforms:Ui(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$n.copy(y.backgroundRotation),$n.x*=-1,$n.y*=-1,$n.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&($n.y*=-1,$n.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fd.makeRotationFromEuler($n)),h.material.toneMapped=jt.getTransfer(b.colorSpace)!==ne,(u!==b||d!==b.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,d=b.version,g=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ve(new Bn(2,2),new Le({name:"BackgroundMaterial",uniforms:Ui(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:On,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=jt.getTransfer(b.colorSpace)!==ne,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||d!==b.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,d=b.version,g=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,y){x.getRGB(Ps,uc(i)),n.buffers.color.setClear(Ps.r,Ps.g,Ps.b,y,o)}return{getClearColor:function(){return l},setClearColor:function(x,y=1){l.set(x),r=y,m(l,r)},getClearAlpha:function(){return r},setClearAlpha:function(x){r=x,m(l,r)},render:v,addToRenderList:f}}function Od(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,o=!1;function l(_,S,G,B,I){let z=!1;const O=u(B,G,S);a!==O&&(a=O,c(a.object)),z=g(_,B,G,I),z&&p(_,B,G,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(_,S,G,B),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function r(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,G){const B=G.wireframe===!0;let I=n[_.id];I===void 0&&(I={},n[_.id]=I);let z=I[S.id];z===void 0&&(z={},I[S.id]=z);let O=z[B];return O===void 0&&(O=d(r()),z[B]=O),O}function d(_){const S=[],G=[],B=[];for(let I=0;I<e;I++)S[I]=0,G[I]=0,B[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:G,attributeDivisors:B,object:_,attributes:{},index:null}}function g(_,S,G,B){const I=a.attributes,z=S.attributes;let O=0;const Q=G.getAttributes();for(const q in Q)if(Q[q].location>=0){const ot=I[q];let pt=z[q];if(pt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor)),ot===void 0||ot.attribute!==pt||pt&&ot.data!==pt.data)return!0;O++}return a.attributesNum!==O||a.index!==B}function p(_,S,G,B){const I={},z=S.attributes;let O=0;const Q=G.getAttributes();for(const q in Q)if(Q[q].location>=0){let ot=z[q];ot===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));const pt={};pt.attribute=ot,ot&&ot.data&&(pt.data=ot.data),I[q]=pt,O++}a.attributes=I,a.attributesNum=O,a.index=B}function v(){const _=a.newAttributes;for(let S=0,G=_.length;S<G;S++)_[S]=0}function f(_){m(_,0)}function m(_,S){const G=a.newAttributes,B=a.enabledAttributes,I=a.attributeDivisors;G[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),I[_]!==S&&(i.vertexAttribDivisor(_,S),I[_]=S)}function x(){const _=a.newAttributes,S=a.enabledAttributes;for(let G=0,B=S.length;G<B;G++)S[G]!==_[G]&&(i.disableVertexAttribArray(G),S[G]=0)}function y(_,S,G,B,I,z,O){O===!0?i.vertexAttribIPointer(_,S,G,I,z):i.vertexAttribPointer(_,S,G,B,I,z)}function b(_,S,G,B){v();const I=B.attributes,z=G.getAttributes(),O=S.defaultAttributeValues;for(const Q in z){const q=z[Q];if(q.location>=0){let at=I[Q];if(at===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){const ot=at.normalized,pt=at.itemSize,Gt=t.get(at);if(Gt===void 0)continue;const Vt=Gt.buffer,X=Gt.type,J=Gt.bytesPerElement,ut=X===i.INT||X===i.UNSIGNED_INT||at.gpuType===Wr;if(at.isInterleavedBufferAttribute){const ht=at.data,wt=ht.stride,Tt=at.offset;if(ht.isInstancedInterleavedBuffer){for(let it=0;it<q.locationSize;it++)m(q.location+it,ht.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let it=0;it<q.locationSize;it++)f(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let it=0;it<q.locationSize;it++)y(q.location+it,pt/q.locationSize,X,ot,wt*J,(Tt+pt/q.locationSize*it)*J,ut)}else{if(at.isInstancedBufferAttribute){for(let ht=0;ht<q.locationSize;ht++)m(q.location+ht,at.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ht=0;ht<q.locationSize;ht++)f(q.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Vt);for(let ht=0;ht<q.locationSize;ht++)y(q.location+ht,pt/q.locationSize,X,ot,pt*J,pt/q.locationSize*ht*J,ut)}}else if(O!==void 0){const ot=O[Q];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(q.location,ot);break;case 3:i.vertexAttrib3fv(q.location,ot);break;case 4:i.vertexAttrib4fv(q.location,ot);break;default:i.vertexAttrib1fv(q.location,ot)}}}}x()}function R(){L();for(const _ in n){const S=n[_];for(const G in S){const B=S[G];for(const I in B)h(B[I].object),delete B[I];delete S[G]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const G in S){const B=S[G];for(const I in B)h(B[I].object),delete B[I];delete S[G]}delete n[_.id]}function A(_){for(const S in n){const G=n[S];if(G[_.id]===void 0)continue;const B=G[_.id];for(const I in B)h(B[I].object),delete B[I];delete G[_.id]}}function L(){P(),o=!0,a!==s&&(a=s,c(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:L,resetDefaultState:P,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function Bd(i,t,e){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function l(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let p=0;p<u;p++)g+=h[p];e.update(g,n,1)}function r(c,h,u,d){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];for(let v=0;v<d.length;v++)e.update(p,n,d[v])}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=r}function zd(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==sn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const L=A===dn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==wn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==yn&&!L)}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=r(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:r,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:f,maxAttributes:m,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:R,maxSamples:T}}function Gd(i){const t=this;let e=null,n=0,s=!1,a=!1;const o=new Yn,l=new Ot,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const g=u.length!==0||d||n!==0||s;return s=d,n=u.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){const p=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,m=i.get(u);if(!s||p===null||p.length===0||a&&!f)a?h(null):c();else{const x=a?0:n,y=x*4;let b=m.clippingState||null;r.value=b,b=h(p,d,y,g);for(let R=0;R!==y;++R)b[R]=e[R];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){r.value!==e&&(r.value=e,r.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,g,p){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=r.value,p!==!0||f===null){const m=g+v*4,x=d.matrixWorldInverse;l.getNormalMatrix(x),(f===null||f.length<m)&&(f=new Float32Array(m));for(let y=0,b=g;y!==v;++y,b+=4)o.copy(u[y]).applyMatrix4(x,l),o.normal.toArray(f,b),f[b+3]=o.constant}r.value=f,r.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function Vd(i){let t=new WeakMap;function e(o,l){return l===rr?o.mapping=Pi:l===or&&(o.mapping=Li),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===rr||l===or)if(t.has(o)){const r=t.get(o).texture;return e(r,o.mapping)}else{const r=o.image;if(r&&r.height>0){const c=new Jh(r.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const r=t.get(l);r!==void 0&&(t.delete(l),r.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class Jr extends fc{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,l=s+e,r=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,l-=h*this.view.offsetY,r=l-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Si=4,Vo=[.125,.215,.35,.446,.526,.582],Zn=20,Ia=new Jr,Ho=new Bt;let Ua=null,Na=0,Fa=0,ka=!1;const Kn=(1+Math.sqrt(5))/2,vi=1/Kn,Wo=[new F(-Kn,vi,0),new F(Kn,vi,0),new F(-vi,0,Kn),new F(vi,0,Kn),new F(0,Kn,-vi),new F(0,Kn,vi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class qo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ua,Na,Fa),this._renderer.xr.enabled=ka,t.scissorTest=!1,Ls(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Pi||t.mapping===Li?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ua=this._renderer.getRenderTarget(),Na=this._renderer.getActiveCubeFace(),Fa=this._renderer.getActiveMipmapLevel(),ka=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:dn,format:sn,colorSpace:zn,depthBuffer:!1},s=$o(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$o(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hd(a)),this._blurMaterial=Wd(a,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,Ia)}_sceneToCubeUV(t,e,n,s){const l=new ke(90,1,e,n),r=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Ho),h.toneMapping=kn,h.autoClear=!1;const g=new hn({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),p=new ve(new ii,g);let v=!1;const f=t.background;f?f.isColor&&(g.color.copy(f),t.background=null,v=!0):(g.color.copy(Ho),v=!0);for(let m=0;m<6;m++){const x=m%3;x===0?(l.up.set(0,r[m],0),l.lookAt(c[m],0,0)):x===1?(l.up.set(0,0,r[m]),l.lookAt(0,c[m],0)):(l.up.set(0,r[m],0),l.lookAt(0,0,c[m]));const y=this._cubeSize;Ls(s,x*y,m>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(p,l),h.render(t,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Pi||t.mapping===Li;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xo());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=t;const r=this._cubeSize;Ls(e,0,0,3*r,2*r),n.setRenderTarget(e),n.render(o,Ia)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Wo[(s-a-1)%Wo.length];this._blur(t,a-1,a,o,l)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,l){const r=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Zn-1),v=a/p,f=isFinite(a)?1+Math.floor(h*v):Zn;f>Zn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${Zn}`);const m=[];let x=0;for(let A=0;A<Zn;++A){const L=A/v,P=Math.exp(-L*L/2);m.push(P),A===0?x+=P:A<f&&(x+=2*P)}for(let A=0;A<m.length;A++)m[A]=m[A]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=m,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:y}=this;d.dTheta.value=p,d.mipInt.value=y-n;const b=this._sizeLods[s],R=3*b*(s>y-Si?s-y+Si:0),T=4*(this._cubeSize-b);Ls(e,R,T,3*b,2*b),r.setRenderTarget(e),r.render(u,Ia)}}function Hd(i){const t=[],e=[],n=[];let s=i;const a=i-Si+1+Vo.length;for(let o=0;o<a;o++){const l=Math.pow(2,s);e.push(l);let r=1/l;o>i-Si?r=Vo[o-i+Si-1]:o===0&&(r=0),n.push(r);const c=1/(l-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,p=6,v=3,f=2,m=1,x=new Float32Array(v*p*g),y=new Float32Array(f*p*g),b=new Float32Array(m*p*g);for(let T=0;T<g;T++){const A=T%3*2/3-1,L=T>2?0:-1,P=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];x.set(P,v*p*T),y.set(d,f*p*T);const _=[T,T,T,T,T,T];b.set(_,m*p*T)}const R=new $e;R.setAttribute("position",new rn(x,v)),R.setAttribute("uv",new rn(y,f)),R.setAttribute("faceIndex",new rn(b,m)),t.push(R),s>Si&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function $o(i,t,e){const n=new je(i,t,e);return n.texture.mapping=Qs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ls(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Wd(i,t,e){const n=new Float32Array(Zn),s=new F(0,1,0);return new Le({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Qr(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Xo(){return new Le({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qr(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Yo(){return new Le({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Qr(){return`

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
	`}function qd(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const r=l.mapping,c=r===rr||r===or,h=r===Pi||r===Li;if(c||h){let u=t.get(l);const d=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return e===null&&(e=new qo(i)),u=c?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const g=l.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new qo(i)),u=c?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",a),u.texture):null}}}return l}function s(l){let r=0;const c=6;for(let h=0;h<c;h++)l[h]!==void 0&&r++;return r===c}function a(l){const r=l.target;r.removeEventListener("dispose",a);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $d(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Vs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Xd(i,t,e,n){const s={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let f=0,m=v.length;f<m;f++)t.remove(v[f])}d.removeEventListener("dispose",o),delete s[d.id];const g=a.get(d);g&&(t.remove(g),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function r(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const g=u.morphAttributes;for(const p in g){const v=g[p];for(let f=0,m=v.length;f<m;f++)t.update(v[f],i.ARRAY_BUFFER)}}function c(u){const d=[],g=u.index,p=u.attributes.position;let v=0;if(g!==null){const x=g.array;v=g.version;for(let y=0,b=x.length;y<b;y+=3){const R=x[y+0],T=x[y+1],A=x[y+2];d.push(R,T,T,A,A,R)}}else if(p!==void 0){const x=p.array;v=p.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const R=y+0,T=y+1,A=y+2;d.push(R,T,T,A,A,R)}}else return;const f=new(ic(d)?hc:cc)(d,1);f.version=v;const m=a.get(u);m&&t.remove(m),a.set(u,f)}function h(u){const d=a.get(u);if(d){const g=u.index;g!==null&&d.version<g.version&&c(u)}else c(u);return a.get(u)}return{get:l,update:r,getWireframeAttribute:h}}function Yd(i,t,e){let n;function s(d){n=d}let a,o;function l(d){a=d.type,o=d.bytesPerElement}function r(d,g){i.drawElements(n,g,a,d*o),e.update(g,n,1)}function c(d,g,p){p!==0&&(i.drawElementsInstanced(n,g,a,d*o,p),e.update(g,n,p))}function h(d,g,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,d,0,p);let f=0;for(let m=0;m<p;m++)f+=g[m];e.update(f,n,1)}function u(d,g,p,v){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<d.length;m++)c(d[m]/o,g[m],v[m]);else{f.multiDrawElementsInstancedWEBGL(n,g,0,a,d,0,v,0,p);let m=0;for(let x=0;x<p;x++)m+=g[x];for(let x=0;x<v.length;x++)e.update(m,n,v[x])}}this.setMode=s,this.setIndex=l,this.render=r,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Kd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(a/3);break;case i.LINES:e.lines+=l*(a/2);break;case i.LINE_STRIP:e.lines+=l*(a-1);break;case i.LINE_LOOP:e.lines+=l*a;break;case i.POINTS:e.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function jd(i,t,e){const n=new WeakMap,s=new te;function a(o,l,r){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(l);if(d===void 0||d.count!==u){let P=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const g=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],m=l.morphAttributes.normal||[],x=l.morphAttributes.color||[];let y=0;g===!0&&(y=1),p===!0&&(y=2),v===!0&&(y=3);let b=l.attributes.position.count*y,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const T=new Float32Array(b*R*4*u),A=new ac(T,b,R,u);A.type=yn,A.needsUpdate=!0;const L=y*4;for(let _=0;_<u;_++){const S=f[_],G=m[_],B=x[_],I=b*R*4*_;for(let z=0;z<S.count;z++){const O=z*L;g===!0&&(s.fromBufferAttribute(S,z),T[I+O+0]=s.x,T[I+O+1]=s.y,T[I+O+2]=s.z,T[I+O+3]=0),p===!0&&(s.fromBufferAttribute(G,z),T[I+O+4]=s.x,T[I+O+5]=s.y,T[I+O+6]=s.z,T[I+O+7]=0),v===!0&&(s.fromBufferAttribute(B,z),T[I+O+8]=s.x,T[I+O+9]=s.y,T[I+O+10]=s.z,T[I+O+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:A,size:new Ct(b,R)},n.set(l,d),l.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)r.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const p=l.morphTargetsRelative?1:1-g;r.getUniforms().setValue(i,"morphTargetBaseInfluence",p),r.getUniforms().setValue(i,"morphTargetInfluences",c)}r.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),r.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function Zd(i,t,e,n){let s=new WeakMap;function a(r){const c=n.render.frame,h=r.geometry,u=t.get(r,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),r.isInstancedMesh&&(r.hasEventListener("dispose",l)===!1&&r.addEventListener("dispose",l),s.get(r)!==c&&(e.update(r.instanceMatrix,i.ARRAY_BUFFER),r.instanceColor!==null&&e.update(r.instanceColor,i.ARRAY_BUFFER),s.set(r,c))),r.isSkinnedMesh){const d=r.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function l(r){const c=r.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}class mc extends De{constructor(t,e,n,s,a,o,l,r,c,h=wi){if(h!==wi&&h!==Ii)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===wi&&(n=ni),n===void 0&&h===Ii&&(n=Di),super(null,s,a,o,l,r,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Pe,this.minFilter=r!==void 0?r:Pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gc=new De,Ko=new mc(1,1),_c=new ac,vc=new kh,xc=new dc,jo=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),tl=new Float32Array(4);function zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=jo[s];if(a===void 0&&(a=new Float32Array(s),jo[s]=a),t!==0){n.toArray(a,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(a,l)}return a}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function na(i,t){let e=Zo[t];e===void 0&&(e=new Int32Array(t),Zo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function np(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;tl.set(n),i.uniformMatrix2fv(this.addr,!1,tl),Me(e,n)}}function ip(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Qo.set(n),i.uniformMatrix3fv(this.addr,!1,Qo),Me(e,n)}}function sp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Jo.set(n),i.uniformMatrix4fv(this.addr,!1,Jo),Me(e,n)}}function ap(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function rp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function op(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function lp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function cp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function dp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Ko.compareFunction=nc,a=Ko):a=gc,e.setTexture2D(t||a,s)}function pp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||vc,s)}function mp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xc,s)}function gp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_c,s)}function _p(i){switch(i){case 5126:return Jd;case 35664:return Qd;case 35665:return tp;case 35666:return ep;case 35674:return np;case 35675:return ip;case 35676:return sp;case 5124:case 35670:return ap;case 35667:case 35671:return rp;case 35668:case 35672:return op;case 35669:case 35673:return lp;case 5125:return cp;case 36294:return hp;case 36295:return up;case 36296:return fp;case 35678:case 36198:case 36298:case 36306:case 35682:return dp;case 35679:case 36299:case 36307:return pp;case 35680:case 36300:case 36308:case 36293:return mp;case 36289:case 36303:case 36311:case 36292:return gp}}function vp(i,t){i.uniform1fv(this.addr,t)}function xp(i,t){const e=zi(t,this.size,2);i.uniform2fv(this.addr,e)}function Mp(i,t){const e=zi(t,this.size,3);i.uniform3fv(this.addr,e)}function bp(i,t){const e=zi(t,this.size,4);i.uniform4fv(this.addr,e)}function Sp(i,t){const e=zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function yp(i,t){const e=zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Ep(i,t){const e=zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Tp(i,t){i.uniform1iv(this.addr,t)}function wp(i,t){i.uniform2iv(this.addr,t)}function Ap(i,t){i.uniform3iv(this.addr,t)}function Cp(i,t){i.uniform4iv(this.addr,t)}function Rp(i,t){i.uniform1uiv(this.addr,t)}function Pp(i,t){i.uniform2uiv(this.addr,t)}function Lp(i,t){i.uniform3uiv(this.addr,t)}function Dp(i,t){i.uniform4uiv(this.addr,t)}function Ip(i,t,e){const n=this.cache,s=t.length,a=na(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gc,a[o])}function Up(i,t,e){const n=this.cache,s=t.length,a=na(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||vc,a[o])}function Np(i,t,e){const n=this.cache,s=t.length,a=na(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xc,a[o])}function Fp(i,t,e){const n=this.cache,s=t.length,a=na(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||_c,a[o])}function kp(i){switch(i){case 5126:return vp;case 35664:return xp;case 35665:return Mp;case 35666:return bp;case 35674:return Sp;case 35675:return yp;case 35676:return Ep;case 5124:case 35670:return Tp;case 35667:case 35671:return wp;case 35668:case 35672:return Ap;case 35669:case 35673:return Cp;case 5125:return Rp;case 36294:return Pp;case 36295:return Lp;case 36296:return Dp;case 35678:case 36198:case 36298:case 36306:case 35682:return Ip;case 35679:case 36299:case 36307:return Up;case 35680:case 36300:case 36308:case 36293:return Np;case 36289:case 36303:case 36311:case 36292:return Fp}}class Op{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_p(e.type)}}class Bp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kp(e.type)}}class zp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const l=s[a];l.setValue(t,e[l.id],n)}}}const Oa=/(\w+)(\])?(\[|\.)?/g;function el(i,t){i.seq.push(t),i.map[t.id]=t}function Gp(i,t,e){const n=i.name,s=n.length;for(Oa.lastIndex=0;;){const a=Oa.exec(n),o=Oa.lastIndex;let l=a[1];const r=a[2]==="]",c=a[3];if(r&&(l=l|0),c===void 0||c==="["&&o+2===s){el(e,c===void 0?new Op(l,i,t):new Bp(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new zp(l),el(e,u)),e=u}}}class Hs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);Gp(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const l=e[a],r=n[l.id];r.needsUpdate!==!1&&l.setValue(t,r.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function nl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Vp=37297;let Hp=0;function Wp(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}function qp(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===Ys&&e===Xs?n="LinearDisplayP3ToLinearSRGB":t===Xs&&e===Ys&&(n="LinearSRGBToLinearDisplayP3"),i){case zn:case ta:return[n,"LinearTransferOETF"];case Ke:case jr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function il(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Wp(i.getShaderSource(t),o)}else return s}function $p(i,t){const e=qp(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Xp(i,t){let e;switch(t){case Bl:e="Linear";break;case zl:e="Reinhard";break;case Gl:e="Cineon";break;case Hr:e="ACESFilmic";break;case Vl:e="AgX";break;case Hl:e="Neutral";break;case mh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Ds=new F;function Yp(){jt.getLuminanceCoefficients(Ds);const i=Ds.x.toFixed(4),t=Ds.y.toFixed(4),e=Ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function jp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Zp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Zi(i){return i!==""}function sl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Jp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nr(i){return i.replace(Jp,tm)}const Qp=new Map;function tm(i,t){let e=kt[t];if(e===void 0){const n=Qp.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Nr(e)}const em=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rl(i){return i.replace(em,nm)}function nm(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function ol(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function im(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ol?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function sm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Pi:case Li:t="ENVMAP_TYPE_CUBE";break;case Qs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function am(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Li:t="ENVMAP_MODE_REFRACTION";break}return t}function rm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vr:t="ENVMAP_BLENDING_MULTIPLY";break;case dh:t="ENVMAP_BLENDING_MIX";break;case ph:t="ENVMAP_BLENDING_ADD";break}return t}function om(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function lm(i,t,e,n){const s=i.getContext(),a=e.defines;let o=e.vertexShader,l=e.fragmentShader;const r=im(e),c=sm(e),h=am(e),u=rm(e),d=om(e),g=Kp(e),p=jp(a),v=s.createProgram();let f,m,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zi).join(`
`),f.length>0&&(f+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Zi).join(`
`),m.length>0&&(m+=`
`)):(f=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),m=[ol(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==kn?"#define TONE_MAPPING":"",e.toneMapping!==kn?kt.tonemapping_pars_fragment:"",e.toneMapping!==kn?Xp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,$p("linearToOutputTexel",e.outputColorSpace),Yp(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),o=Nr(o),o=sl(o,e),o=al(o,e),l=Nr(l),l=sl(l,e),l=al(l,e),o=rl(o),l=rl(l),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,m=["#define varying in",e.glslVersion===Eo?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Eo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=x+f+o,b=x+m+l,R=nl(s,s.VERTEX_SHADER,y),T=nl(s,s.FRAGMENT_SHADER,b);s.attachShader(v,R),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(R).trim(),I=s.getShaderInfoLog(T).trim();let z=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,T);else{const Q=il(s,R,"vertex"),q=il(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+G+`
`+Q+`
`+q)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(B===""||I==="")&&(O=!1);O&&(S.diagnostics={runnable:z,programLog:G,vertexShader:{log:B,prefix:f},fragmentShader:{log:I,prefix:m}})}s.deleteShader(R),s.deleteShader(T),L=new Hs(s,v),P=Zp(s,v)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let P;this.getAttributes=function(){return P===void 0&&A(this),P};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Vp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Hp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=T,this}let cm=0;class hm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new um(t),e.set(t,n)),n}}class um{constructor(t){this.id=cm++,this.code=t,this.usedTimes=0}}function fm(i,t,e,n,s,a,o){const l=new oc,r=new hm,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,g=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,G,B,I){const z=B.fog,O=I.geometry,Q=_.isMeshStandardMaterial?B.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||Q),at=q&&q.mapping===Qs?q.image.height:null,ot=v[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const pt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Gt=pt!==void 0?pt.length:0;let Vt=0;O.morphAttributes.position!==void 0&&(Vt=1),O.morphAttributes.normal!==void 0&&(Vt=2),O.morphAttributes.color!==void 0&&(Vt=3);let X,J,ut,ht;if(ot){const Ue=un[ot];X=Ue.vertexShader,J=Ue.fragmentShader}else X=_.vertexShader,J=_.fragmentShader,r.update(_),ut=r.getVertexShaderID(_),ht=r.getFragmentShaderID(_);const wt=i.getRenderTarget(),Tt=I.isInstancedMesh===!0,it=I.isBatchedMesh===!0,Et=!!_.map,Ft=!!_.matcap,D=!!q,Be=!!_.aoMap,Ht=!!_.lightMap,Xt=!!_.bumpMap,Pt=!!_.normalMap,ie=!!_.displacementMap,Ut=!!_.emissiveMap,w=!!_.metalnessMap,M=!!_.roughnessMap,V=_.anisotropy>0,K=_.clearcoat>0,tt=_.dispersion>0,Y=_.iridescence>0,bt=_.sheen>0,rt=_.transmission>0,mt=V&&!!_.anisotropyMap,Yt=K&&!!_.clearcoatMap,et=K&&!!_.clearcoatNormalMap,gt=K&&!!_.clearcoatRoughnessMap,Lt=Y&&!!_.iridescenceMap,Dt=Y&&!!_.iridescenceThicknessMap,_t=bt&&!!_.sheenColorMap,Wt=bt&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,ee=!!_.specularColorMap,U=!!_.specularIntensityMap,ft=rt&&!!_.transmissionMap,$=rt&&!!_.thicknessMap,Z=!!_.gradientMap,lt=!!_.alphaMap,dt=_.alphaTest>0,qt=!!_.alphaHash,pe=!!_.extensions;let Ie=kn;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(Ie=i.toneMapping);const Kt={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:J,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:it,batchingColor:it&&I._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&I.instanceColor!==null,instancingMorph:Tt&&I.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:zn,alphaToCoverage:!!_.alphaToCoverage,map:Et,matcap:Ft,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:at,aoMap:Be,lightMap:Ht,bumpMap:Xt,normalMap:Pt,displacementMap:g&&ie,emissiveMap:Ut,normalMapObjectSpace:Pt&&_.normalMapType===xh,normalMapTangentSpace:Pt&&_.normalMapType===ec,metalnessMap:w,roughnessMap:M,anisotropy:V,anisotropyMap:mt,clearcoat:K,clearcoatMap:Yt,clearcoatNormalMap:et,clearcoatRoughnessMap:gt,dispersion:tt,iridescence:Y,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:bt,sheenColorMap:_t,sheenRoughnessMap:Wt,specularMap:Nt,specularColorMap:ee,specularIntensityMap:U,transmission:rt,transmissionMap:ft,thicknessMap:$,gradientMap:Z,opaque:_.transparent===!1&&_.blending===ei&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:qt,combine:_.combine,mapUv:Et&&f(_.map.channel),aoMapUv:Be&&f(_.aoMap.channel),lightMapUv:Ht&&f(_.lightMap.channel),bumpMapUv:Xt&&f(_.bumpMap.channel),normalMapUv:Pt&&f(_.normalMap.channel),displacementMapUv:ie&&f(_.displacementMap.channel),emissiveMapUv:Ut&&f(_.emissiveMap.channel),metalnessMapUv:w&&f(_.metalnessMap.channel),roughnessMapUv:M&&f(_.roughnessMap.channel),anisotropyMapUv:mt&&f(_.anisotropyMap.channel),clearcoatMapUv:Yt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&f(_.sheenRoughnessMap.channel),specularMapUv:Nt&&f(_.specularMap.channel),specularColorMapUv:ee&&f(_.specularColorMap.channel),specularIntensityMapUv:U&&f(_.specularIntensityMap.channel),transmissionMapUv:ft&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:lt&&f(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Pt||V),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!O.attributes.uv&&(Et||lt),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:I.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ie,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===qe,flipSided:_.side===Oe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const G in _.defines)S.push(G),S.push(_.defines[G]);return _.isRawShaderMaterial===!1&&(y(S,_),b(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function b(_,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),_.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.alphaToCoverage&&l.enable(20),_.push(l.mask)}function R(_){const S=v[_.type];let G;if(S){const B=un[S];G=ss.clone(B.uniforms)}else G=_.uniforms;return G}function T(_,S){let G;for(let B=0,I=h.length;B<I;B++){const z=h[B];if(z.cacheKey===S){G=z,++G.usedTimes;break}}return G===void 0&&(G=new lm(i,S,_,a),h.push(G)),G}function A(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function L(_){r.remove(_)}function P(){r.dispose()}return{getParameters:m,getProgramCacheKey:x,getUniforms:R,acquireProgram:T,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:P}}function dm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,r){i.get(o)[l]=r}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function pm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function ll(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function cl(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,g,p,v,f){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:d,material:g,groupOrder:p,renderOrder:u.renderOrder,z:v,group:f},i[t]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=g,m.groupOrder=p,m.renderOrder=u.renderOrder,m.z=v,m.group=f),t++,m}function l(u,d,g,p,v,f){const m=o(u,d,g,p,v,f);g.transmission>0?n.push(m):g.transparent===!0?s.push(m):e.push(m)}function r(u,d,g,p,v,f){const m=o(u,d,g,p,v,f);g.transmission>0?n.unshift(m):g.transparent===!0?s.unshift(m):e.unshift(m)}function c(u,d){e.length>1&&e.sort(u||pm),n.length>1&&n.sort(d||ll),s.length>1&&s.sort(d||ll)}function h(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:l,unshift:r,finish:h,sort:c}}function mm(){let i=new WeakMap;function t(n,s){const a=i.get(n);let o;return a===void 0?(o=new cl,i.set(n,[o])):s>=a.length?(o=new cl,a.push(o)):o=a[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function gm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Bt};break;case"SpotLight":e={position:new F,direction:new F,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function _m(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let vm=0;function xm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Mm(i){const t=new gm,e=_m(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,a=new oe,o=new oe;function l(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,p=0,v=0,f=0,m=0,x=0,y=0,b=0,R=0,T=0,A=0;c.sort(xm);for(let P=0,_=c.length;P<_;P++){const S=c[P],G=S.color,B=S.intensity,I=S.distance,z=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=G.r*B,u+=G.g*B,d+=G.b*B;else if(S.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(S.sh.coefficients[O],B);A++}else if(S.isDirectionalLight){const O=t.get(S);if(O.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const Q=S.shadow,q=e.get(S);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=S.shadow.matrix,x++}n.directional[g]=O,g++}else if(S.isSpotLight){const O=t.get(S);O.position.setFromMatrixPosition(S.matrixWorld),O.color.copy(G).multiplyScalar(B),O.distance=I,O.coneCos=Math.cos(S.angle),O.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),O.decay=S.decay,n.spot[v]=O;const Q=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,Q.updateMatrices(S),S.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,S.castShadow){const q=e.get(S);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=z,b++}v++}else if(S.isRectAreaLight){const O=t.get(S);O.color.copy(G).multiplyScalar(B),O.halfWidth.set(S.width*.5,0,0),O.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=O,f++}else if(S.isPointLight){const O=t.get(S);if(O.color.copy(S.color).multiplyScalar(S.intensity),O.distance=S.distance,O.decay=S.decay,S.castShadow){const Q=S.shadow,q=e.get(S);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=S.shadow.matrix,y++}n.point[p]=O,p++}else if(S.isHemisphereLight){const O=t.get(S);O.skyColor.copy(S.color).multiplyScalar(B),O.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[m]=O,m++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==g||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==f||L.hemiLength!==m||L.numDirectionalShadows!==x||L.numPointShadows!==y||L.numSpotShadows!==b||L.numSpotMaps!==R||L.numLightProbes!==A)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=f,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,L.directionalLength=g,L.pointLength=p,L.spotLength=v,L.rectAreaLength=f,L.hemiLength=m,L.numDirectionalShadows=x,L.numPointShadows=y,L.numSpotShadows=b,L.numSpotMaps=R,L.numLightProbes=A,n.version=vm++)}function r(c,h){let u=0,d=0,g=0,p=0,v=0;const f=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){const y=c[m];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(y.isSpotLight){const b=n.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),g++}else if(y.isRectAreaLight){const b=n.rectArea[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),o.identity(),a.copy(y.matrixWorld),a.premultiply(f),o.extractRotation(a),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),p++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),d++}else if(y.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),v++}}}return{setup:l,setupView:r,state:n}}function hl(i){const t=new Mm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(){t.setup(e)}function r(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:r,pushLight:a,pushShadow:o}}function bm(i){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new hl(i),t.set(s,[l])):a>=o.length?(l=new hl(i),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class Sm extends Bi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ym extends Bi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Em=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Tm=`uniform sampler2D shadow_pass;
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
}`;function wm(i,t,e){let n=new Zr;const s=new Ct,a=new Ct,o=new te,l=new Sm({depthPacking:vh}),r=new ym,c={},h=e.maxTextureSize,u={[On]:Oe,[Oe]:On,[qe]:qe},d=new Le({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:Em,fragmentShader:Tm}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const p=new $e;p.setAttribute("position",new rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ve(p,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let m=this.type;this.render=function(T,A,L){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||T.length===0)return;const P=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Tn),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const B=m!==Sn&&this.type===Sn,I=m===Sn&&this.type!==Sn;for(let z=0,O=T.length;z<O;z++){const Q=T[z],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();if(s.multiply(at),a.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/at.x),s.x=a.x*at.x,q.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/at.y),s.y=a.y*at.y,q.mapSize.y=a.y)),q.map===null||B===!0||I===!0){const pt=this.type!==Sn?{minFilter:Pe,magFilter:Pe}:{};q.map!==null&&q.map.dispose(),q.map=new je(s.x,s.y,pt),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ot=q.getViewportCount();for(let pt=0;pt<ot;pt++){const Gt=q.getViewport(pt);o.set(a.x*Gt.x,a.y*Gt.y,a.x*Gt.z,a.y*Gt.w),G.viewport(o),q.updateMatrices(Q,pt),n=q.getFrustum(),b(A,L,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===Sn&&x(q,L),q.needsUpdate=!1}m=this.type,f.needsUpdate=!1,i.setRenderTarget(P,_,S)};function x(T,A){const L=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new je(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,L,d,v,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,L,g,v,null)}function y(T,A,L,P){let _=null;const S=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)_=S;else if(_=L.isPointLight===!0?r:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const G=_.uuid,B=A.uuid;let I=c[G];I===void 0&&(I={},c[G]=I);let z=I[B];z===void 0&&(z=_.clone(),I[B]=z,A.addEventListener("dispose",R)),_=z}if(_.visible=A.visible,_.wireframe=A.wireframe,P===Sn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const G=i.properties.get(_);G.light=L}return _}function b(T,A,L,P,_){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===Sn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),I=T.material;if(Array.isArray(I)){const z=B.groups;for(let O=0,Q=z.length;O<Q;O++){const q=z[O],at=I[q.materialIndex];if(at&&at.visible){const ot=y(T,at,P,_);T.onBeforeShadow(i,T,A,L,B,ot,q),i.renderBufferDirect(L,null,B,ot,T,q),T.onAfterShadow(i,T,A,L,B,ot,q)}}}else if(I.visible){const z=y(T,I,P,_);T.onBeforeShadow(i,T,A,L,B,z,null),i.renderBufferDirect(L,null,B,z,T,null),T.onAfterShadow(i,T,A,L,B,z,null)}}const G=T.children;for(let B=0,I=G.length;B<I;B++)b(G[B],A,L,P,_)}function R(T){T.target.removeEventListener("dispose",R);for(const L in c){const P=c[L],_=T.target.uuid;_ in P&&(P[_].dispose(),delete P[_])}}}const Am={[Qa]:tr,[er]:sr,[nr]:ar,[Ri]:ir,[tr]:Qa,[sr]:er,[ar]:nr,[ir]:Ri};function Cm(i){function t(){let U=!1;const ft=new te;let $=null;const Z=new te(0,0,0,0);return{setMask:function(lt){$!==lt&&!U&&(i.colorMask(lt,lt,lt,lt),$=lt)},setLocked:function(lt){U=lt},setClear:function(lt,dt,qt,pe,Ie){Ie===!0&&(lt*=pe,dt*=pe,qt*=pe),ft.set(lt,dt,qt,pe),Z.equals(ft)===!1&&(i.clearColor(lt,dt,qt,pe),Z.copy(ft))},reset:function(){U=!1,$=null,Z.set(-1,0,0,0)}}}function e(){let U=!1,ft=!1,$=null,Z=null,lt=null;return{setReversed:function(dt){ft=dt},setTest:function(dt){dt?ut(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(dt){$!==dt&&!U&&(i.depthMask(dt),$=dt)},setFunc:function(dt){if(ft&&(dt=Am[dt]),Z!==dt){switch(dt){case Qa:i.depthFunc(i.NEVER);break;case tr:i.depthFunc(i.ALWAYS);break;case er:i.depthFunc(i.LESS);break;case Ri:i.depthFunc(i.LEQUAL);break;case nr:i.depthFunc(i.EQUAL);break;case ir:i.depthFunc(i.GEQUAL);break;case sr:i.depthFunc(i.GREATER);break;case ar:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=dt}},setLocked:function(dt){U=dt},setClear:function(dt){lt!==dt&&(i.clearDepth(dt),lt=dt)},reset:function(){U=!1,$=null,Z=null,lt=null}}}function n(){let U=!1,ft=null,$=null,Z=null,lt=null,dt=null,qt=null,pe=null,Ie=null;return{setTest:function(Kt){U||(Kt?ut(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Kt){ft!==Kt&&!U&&(i.stencilMask(Kt),ft=Kt)},setFunc:function(Kt,Ue,mn){($!==Kt||Z!==Ue||lt!==mn)&&(i.stencilFunc(Kt,Ue,mn),$=Kt,Z=Ue,lt=mn)},setOp:function(Kt,Ue,mn){(dt!==Kt||qt!==Ue||pe!==mn)&&(i.stencilOp(Kt,Ue,mn),dt=Kt,qt=Ue,pe=mn)},setLocked:function(Kt){U=Kt},setClear:function(Kt){Ie!==Kt&&(i.clearStencil(Kt),Ie=Kt)},reset:function(){U=!1,ft=null,$=null,Z=null,lt=null,dt=null,qt=null,pe=null,Ie=null}}}const s=new t,a=new e,o=new n,l=new WeakMap,r=new WeakMap;let c={},h={},u=new WeakMap,d=[],g=null,p=!1,v=null,f=null,m=null,x=null,y=null,b=null,R=null,T=new Bt(0,0,0),A=0,L=!1,P=null,_=null,S=null,G=null,B=null;const I=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=O>=1):Q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=O>=2);let q=null,at={};const ot=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Gt=new te().fromArray(ot),Vt=new te().fromArray(pt);function X(U,ft,$,Z){const lt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(U,dt),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<$;qt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ft+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return dt}const J={};J[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Ri),Ht(!1),Xt(xo),ut(i.CULL_FACE),D(Tn);function ut(U){c[U]!==!0&&(i.enable(U),c[U]=!0)}function ht(U){c[U]!==!1&&(i.disable(U),c[U]=!1)}function wt(U,ft){return h[U]!==ft?(i.bindFramebuffer(U,ft),h[U]=ft,U===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),U===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Tt(U,ft){let $=d,Z=!1;if(U){$=u.get(ft),$===void 0&&($=[],u.set(ft,$));const lt=U.textures;if($.length!==lt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,qt=lt.length;dt<qt;dt++)$[dt]=i.COLOR_ATTACHMENT0+dt;$.length=lt.length,Z=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Z=!0);Z&&i.drawBuffers($)}function it(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Et={[jn]:i.FUNC_ADD,[jc]:i.FUNC_SUBTRACT,[Zc]:i.FUNC_REVERSE_SUBTRACT};Et[Jc]=i.MIN,Et[Qc]=i.MAX;const Ft={[th]:i.ZERO,[eh]:i.ONE,[nh]:i.SRC_COLOR,[Za]:i.SRC_ALPHA,[lh]:i.SRC_ALPHA_SATURATE,[rh]:i.DST_COLOR,[sh]:i.DST_ALPHA,[ih]:i.ONE_MINUS_SRC_COLOR,[Ja]:i.ONE_MINUS_SRC_ALPHA,[oh]:i.ONE_MINUS_DST_COLOR,[ah]:i.ONE_MINUS_DST_ALPHA,[ch]:i.CONSTANT_COLOR,[hh]:i.ONE_MINUS_CONSTANT_COLOR,[uh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(U,ft,$,Z,lt,dt,qt,pe,Ie,Kt){if(U===Tn){p===!0&&(ht(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),U!==Kc){if(U!==v||Kt!==L){if((f!==jn||y!==jn)&&(i.blendEquation(i.FUNC_ADD),f=jn,y=jn),Kt)switch(U){case ei:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ns:i.blendFunc(i.ONE,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bo:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case ei:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ns:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Mo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case bo:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}m=null,x=null,b=null,R=null,T.set(0,0,0),A=0,v=U,L=Kt}return}lt=lt||ft,dt=dt||$,qt=qt||Z,(ft!==f||lt!==y)&&(i.blendEquationSeparate(Et[ft],Et[lt]),f=ft,y=lt),($!==m||Z!==x||dt!==b||qt!==R)&&(i.blendFuncSeparate(Ft[$],Ft[Z],Ft[dt],Ft[qt]),m=$,x=Z,b=dt,R=qt),(pe.equals(T)===!1||Ie!==A)&&(i.blendColor(pe.r,pe.g,pe.b,Ie),T.copy(pe),A=Ie),v=U,L=!1}function Be(U,ft){U.side===qe?ht(i.CULL_FACE):ut(i.CULL_FACE);let $=U.side===Oe;ft&&($=!$),Ht($),U.blending===ei&&U.transparent===!1?D(Tn):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),s.setMask(U.colorWrite);const Z=U.stencilWrite;o.setTest(Z),Z&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ht(U){P!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),P=U)}function Xt(U){U!==Xc?(ut(i.CULL_FACE),U!==_&&(U===xo?i.cullFace(i.BACK):U===Yc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),_=U}function Pt(U){U!==S&&(z&&i.lineWidth(U),S=U)}function ie(U,ft,$){U?(ut(i.POLYGON_OFFSET_FILL),(G!==ft||B!==$)&&(i.polygonOffset(ft,$),G=ft,B=$)):ht(i.POLYGON_OFFSET_FILL)}function Ut(U){U?ut(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function w(U){U===void 0&&(U=i.TEXTURE0+I-1),q!==U&&(i.activeTexture(U),q=U)}function M(U,ft,$){$===void 0&&(q===null?$=i.TEXTURE0+I-1:$=q);let Z=at[$];Z===void 0&&(Z={type:void 0,texture:void 0},at[$]=Z),(Z.type!==U||Z.texture!==ft)&&(q!==$&&(i.activeTexture($),q=$),i.bindTexture(U,ft||J[U]),Z.type=U,Z.texture=ft)}function V(){const U=at[q];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Dt(U){Gt.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),Gt.copy(U))}function _t(U){Vt.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),Vt.copy(U))}function Wt(U,ft){let $=r.get(ft);$===void 0&&($=new WeakMap,r.set(ft,$));let Z=$.get(U);Z===void 0&&(Z=i.getUniformBlockIndex(ft,U.name),$.set(U,Z))}function Nt(U,ft){const Z=r.get(ft).get(U);l.get(ft)!==Z&&(i.uniformBlockBinding(ft,Z,U.__bindingPointIndex),l.set(ft,Z))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,at={},h={},u=new WeakMap,d=[],g=null,p=!1,v=null,f=null,m=null,x=null,y=null,b=null,R=null,T=new Bt(0,0,0),A=0,L=!1,P=null,_=null,S=null,G=null,B=null,Gt.set(0,0,i.canvas.width,i.canvas.height),Vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:ht,bindFramebuffer:wt,drawBuffers:Tt,useProgram:it,setBlending:D,setMaterial:Be,setFlipSided:Ht,setCullFace:Xt,setLineWidth:Pt,setPolygonOffset:ie,setScissorTest:Ut,activeTexture:w,bindTexture:M,unbindTexture:V,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Lt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Yt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:mt,scissor:Dt,viewport:_t,reset:ee}}function ul(i,t,e,n){const s=Rm(n);switch(e){case Yl:return i*t;case jl:return i*t;case Zl:return i*t*2;case Jl:return i*t/s.components*s.byteLength;case Xr:return i*t/s.components*s.byteLength;case Ql:return i*t*2/s.components*s.byteLength;case Yr:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case sn:return i*t*4/s.components*s.byteLength;case Kr:return i*t*4/s.components*s.byteLength;case ks:case Os:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bs:case zs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hr:case fr:return Math.max(i,16)*Math.max(t,8)/4;case cr:case ur:return Math.max(i,8)*Math.max(t,8)/2;case dr:case pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case gr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _r:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case vr:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case br:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Sr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case yr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Er:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Tr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case wr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ar:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Cr:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Rr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Gs:case Pr:case Lr:return Math.ceil(i/4)*Math.ceil(t/4)*16;case tc:case Dr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ir:case Ur:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Rm(i){switch(i){case wn:case ql:return{byteLength:1,components:1};case is:case $l:case dn:return{byteLength:2,components:1};case qr:case $r:return{byteLength:2,components:4};case ni:case Wr:case yn:return{byteLength:4,components:1};case Xl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Pm(i,t,e,n,s,a,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(w,M){return g?new OffscreenCanvas(w,M):Zs("canvas")}function v(w,M,V){let K=1;const tt=Ut(w);if((tt.width>V||tt.height>V)&&(K=V/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Y=Math.floor(K*tt.width),bt=Math.floor(K*tt.height);u===void 0&&(u=p(Y,bt));const rt=M?p(Y,bt):u;return rt.width=Y,rt.height=bt,rt.getContext("2d").drawImage(w,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+bt+")."),rt}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function f(w){return w.generateMipmaps&&w.minFilter!==Pe&&w.minFilter!==en}function m(w){i.generateMipmap(w)}function x(w,M,V,K,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Y=M;if(M===i.RED&&(V===i.FLOAT&&(Y=i.R32F),V===i.HALF_FLOAT&&(Y=i.R16F),V===i.UNSIGNED_BYTE&&(Y=i.R8)),M===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.R8UI),V===i.UNSIGNED_SHORT&&(Y=i.R16UI),V===i.UNSIGNED_INT&&(Y=i.R32UI),V===i.BYTE&&(Y=i.R8I),V===i.SHORT&&(Y=i.R16I),V===i.INT&&(Y=i.R32I)),M===i.RG&&(V===i.FLOAT&&(Y=i.RG32F),V===i.HALF_FLOAT&&(Y=i.RG16F),V===i.UNSIGNED_BYTE&&(Y=i.RG8)),M===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RG8UI),V===i.UNSIGNED_SHORT&&(Y=i.RG16UI),V===i.UNSIGNED_INT&&(Y=i.RG32UI),V===i.BYTE&&(Y=i.RG8I),V===i.SHORT&&(Y=i.RG16I),V===i.INT&&(Y=i.RG32I)),M===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),V===i.UNSIGNED_INT&&(Y=i.RGB32UI),V===i.BYTE&&(Y=i.RGB8I),V===i.SHORT&&(Y=i.RGB16I),V===i.INT&&(Y=i.RGB32I)),M===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),V===i.UNSIGNED_INT&&(Y=i.RGBA32UI),V===i.BYTE&&(Y=i.RGBA8I),V===i.SHORT&&(Y=i.RGBA16I),V===i.INT&&(Y=i.RGBA32I)),M===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),M===i.RGBA){const bt=tt?$s:jt.getTransfer(K);V===i.FLOAT&&(Y=i.RGBA32F),V===i.HALF_FLOAT&&(Y=i.RGBA16F),V===i.UNSIGNED_BYTE&&(Y=bt===ne?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function y(w,M){let V;return w?M===null||M===ni||M===Di?V=i.DEPTH24_STENCIL8:M===yn?V=i.DEPTH32F_STENCIL8:M===is&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ni||M===Di?V=i.DEPTH_COMPONENT24:M===yn?V=i.DEPTH_COMPONENT32F:M===is&&(V=i.DEPTH_COMPONENT16),V}function b(w,M){return f(w)===!0||w.isFramebufferTexture&&w.minFilter!==Pe&&w.minFilter!==en?Math.log2(Math.max(M.width,M.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?M.mipmaps.length:1}function R(w){const M=w.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&h.delete(M)}function T(w){const M=w.target;M.removeEventListener("dispose",T),P(M)}function A(w){const M=n.get(w);if(M.__webglInit===void 0)return;const V=w.source,K=d.get(V);if(K){const tt=K[M.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(w),Object.keys(K).length===0&&d.delete(V)}n.remove(w)}function L(w){const M=n.get(w);i.deleteTexture(M.__webglTexture);const V=w.source,K=d.get(V);delete K[M.__cacheKey],o.memory.textures--}function P(w){const M=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let tt=0;tt<M.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(M.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)i.deleteFramebuffer(M.__webglFramebuffer[K]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const V=w.textures;for(let K=0,tt=V.length;K<tt;K++){const Y=n.get(V[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(V[K])}n.remove(w)}let _=0;function S(){_=0}function G(){const w=_;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),_+=1,w}function B(w){const M=[];return M.push(w.wrapS),M.push(w.wrapT),M.push(w.wrapR||0),M.push(w.magFilter),M.push(w.minFilter),M.push(w.anisotropy),M.push(w.internalFormat),M.push(w.format),M.push(w.type),M.push(w.generateMipmaps),M.push(w.premultiplyAlpha),M.push(w.flipY),M.push(w.unpackAlignment),M.push(w.colorSpace),M.join()}function I(w,M){const V=n.get(w);if(w.isVideoTexture&&Pt(w),w.isRenderTargetTexture===!1&&w.version>0&&V.__version!==w.version){const K=w.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Vt(V,w,M);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+M)}function z(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Vt(V,w,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+M)}function O(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){Vt(V,w,M);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+M)}function Q(w,M){const V=n.get(w);if(w.version>0&&V.__version!==w.version){X(V,w,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+M)}const q={[qs]:i.REPEAT,[Qn]:i.CLAMP_TO_EDGE,[lr]:i.MIRRORED_REPEAT},at={[Pe]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[fs]:i.NEAREST_MIPMAP_LINEAR,[en]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},ot={[Mh]:i.NEVER,[wh]:i.ALWAYS,[bh]:i.LESS,[nc]:i.LEQUAL,[Sh]:i.EQUAL,[Th]:i.GEQUAL,[yh]:i.GREATER,[Eh]:i.NOTEQUAL};function pt(w,M){if(M.type===yn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===en||M.magFilter===ca||M.magFilter===fs||M.magFilter===ti||M.minFilter===en||M.minFilter===ca||M.minFilter===fs||M.minFilter===ti)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,q[M.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,at[M.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,at[M.minFilter]),M.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,ot[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Pe||M.minFilter!==fs&&M.minFilter!==ti||M.type===yn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Gt(w,M){let V=!1;w.__webglInit===void 0&&(w.__webglInit=!0,M.addEventListener("dispose",R));const K=M.source;let tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));const Y=B(M);if(Y!==w.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),tt[Y].usedTimes++;const bt=tt[w.__cacheKey];bt!==void 0&&(tt[w.__cacheKey].usedTimes--,bt.usedTimes===0&&L(M)),w.__cacheKey=Y,w.__webglTexture=tt[Y].texture}return V}function Vt(w,M,V){let K=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=i.TEXTURE_3D);const tt=Gt(w,M),Y=M.source;e.bindTexture(K,w.__webglTexture,i.TEXTURE0+V);const bt=n.get(Y);if(Y.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+V);const rt=jt.getPrimaries(jt.workingColorSpace),mt=M.colorSpace===Nn?null:jt.getPrimaries(M.colorSpace),Yt=M.colorSpace===Nn||rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=v(M.image,!1,s.maxTextureSize);et=ie(M,et);const gt=a.convert(M.format,M.colorSpace),Lt=a.convert(M.type);let Dt=x(M.internalFormat,gt,Lt,M.colorSpace,M.isVideoTexture);pt(K,M);let _t;const Wt=M.mipmaps,Nt=M.isVideoTexture!==!0,ee=bt.__version===void 0||tt===!0,U=Y.dataReady,ft=b(M,et);if(M.isDepthTexture)Dt=y(M.format===Ii,M.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,gt,Lt,null));else if(M.isDataTexture)if(Wt.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Wt[0].width,Wt[0].height);for(let $=0,Z=Wt.length;$<Z;$++)_t=Wt[$],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,_t.width,_t.height,gt,Lt,_t.data):e.texImage2D(i.TEXTURE_2D,$,Dt,_t.width,_t.height,0,gt,Lt,_t.data);M.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,et.width,et.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,gt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,gt,Lt,et.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,Wt[0].width,Wt[0].height,et.depth);for(let $=0,Z=Wt.length;$<Z;$++)if(_t=Wt[$],M.format!==sn)if(gt!==null)if(Nt){if(U)if(M.layerUpdates.size>0){const lt=ul(_t.width,_t.height,M.format,M.type);for(const dt of M.layerUpdates){const qt=_t.data.subarray(dt*lt/_t.data.BYTES_PER_ELEMENT,(dt+1)*lt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,dt,_t.width,_t.height,1,gt,qt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,_t.width,_t.height,et.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Dt,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,_t.width,_t.height,et.depth,gt,Lt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Dt,_t.width,_t.height,et.depth,0,gt,Lt,_t.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Wt[0].width,Wt[0].height);for(let $=0,Z=Wt.length;$<Z;$++)_t=Wt[$],M.format!==sn?gt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,_t.width,_t.height,gt,Lt,_t.data):e.texImage2D(i.TEXTURE_2D,$,Dt,_t.width,_t.height,0,gt,Lt,_t.data)}else if(M.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,et.width,et.height,et.depth),U)if(M.layerUpdates.size>0){const $=ul(et.width,et.height,M.format,M.type);for(const Z of M.layerUpdates){const lt=et.data.subarray(Z*$/et.data.BYTES_PER_ELEMENT,(Z+1)*$/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,gt,Lt,lt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,gt,Lt,et.data);else if(M.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,ft,Dt,et.width,et.height,et.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,gt,Lt,et.data);else if(M.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,ft,Dt,et.width,et.height);else{let $=et.width,Z=et.height;for(let lt=0;lt<ft;lt++)e.texImage2D(i.TEXTURE_2D,lt,Dt,$,Z,0,gt,Lt,null),$>>=1,Z>>=1}}else if(Wt.length>0){if(Nt&&ee){const $=Ut(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Dt,$.width,$.height)}for(let $=0,Z=Wt.length;$<Z;$++)_t=Wt[$],Nt?U&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,gt,Lt,_t):e.texImage2D(i.TEXTURE_2D,$,Dt,gt,Lt,_t);M.generateMipmaps=!1}else if(Nt){if(ee){const $=Ut(et);e.texStorage2D(i.TEXTURE_2D,ft,Dt,$.width,$.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Dt,gt,Lt,et);f(M)&&m(K),bt.__version=Y.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function X(w,M,V){if(M.image.length!==6)return;const K=Gt(w,M),tt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+V);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+V);const bt=jt.getPrimaries(jt.workingColorSpace),rt=M.colorSpace===Nn?null:jt.getPrimaries(M.colorSpace),mt=M.colorSpace===Nn||bt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,et=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!Yt&&!et?gt[Z]=v(M.image[Z],!0,s.maxCubemapSize):gt[Z]=et?M.image[Z].image:M.image[Z],gt[Z]=ie(M,gt[Z]);const Lt=gt[0],Dt=a.convert(M.format,M.colorSpace),_t=a.convert(M.type),Wt=x(M.internalFormat,Dt,_t,M.colorSpace),Nt=M.isVideoTexture!==!0,ee=Y.__version===void 0||K===!0,U=tt.dataReady;let ft=b(M,Lt);pt(i.TEXTURE_CUBE_MAP,M);let $;if(Yt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){$=gt[Z].mipmaps;for(let lt=0;lt<$.length;lt++){const dt=$[lt];M.format!==sn?Dt!==null?Nt?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Dt,_t,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,dt.width,dt.height,0,Dt,_t,dt.data)}}}else{if($=M.mipmaps,Nt&&ee){$.length>0&&ft++;const Z=Ut(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Dt,_t,gt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,gt[Z].width,gt[Z].height,0,Dt,_t,gt[Z].data);for(let lt=0;lt<$.length;lt++){const qt=$[lt].image[Z].image;Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,qt.width,qt.height,Dt,_t,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,qt.width,qt.height,0,Dt,_t,qt.data)}}else{Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,_t,gt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Dt,_t,gt[Z]);for(let lt=0;lt<$.length;lt++){const dt=$[lt];Nt?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Dt,_t,dt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,Dt,_t,dt.image[Z])}}}f(M)&&m(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,M.onUpdate&&M.onUpdate(M)}w.__version=M.version}function J(w,M,V,K,tt,Y){const bt=a.convert(V.format,V.colorSpace),rt=a.convert(V.type),mt=x(V.internalFormat,bt,rt,V.colorSpace);if(!n.get(M).__hasExternalTextures){const et=Math.max(1,M.width>>Y),gt=Math.max(1,M.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,mt,et,gt,M.depth,0,bt,rt,null):e.texImage2D(tt,Y,mt,et,gt,0,bt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),Xt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,n.get(V).__webglTexture,0,Ht(M)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,n.get(V).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,M,V){if(i.bindRenderbuffer(i.RENDERBUFFER,w),M.depthBuffer){const K=M.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=y(M.stencilBuffer,tt),bt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Ht(M);Xt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Y,M.width,M.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Y,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Y,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,w)}else{const K=M.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],bt=a.convert(Y.format,Y.colorSpace),rt=a.convert(Y.type),mt=x(Y.internalFormat,bt,rt,Y.colorSpace),Yt=Ht(M);V&&Xt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,mt,M.width,M.height):Xt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,mt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,mt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(w,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),I(M.depthTexture,0);const K=n.get(M.depthTexture).__webglTexture,tt=Ht(M);if(M.depthTexture.format===wi)Xt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(M.depthTexture.format===Ii)Xt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(w){const M=n.get(w),V=w.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==w.depthTexture){const K=w.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const tt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),M.__depthDisposeCallback=tt}M.__boundDepthTexture=K}if(w.depthTexture&&!M.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,w)}else if(V){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=i.createRenderbuffer(),ut(M.__webglDepthbuffer[K],w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),ut(M.__webglDepthbuffer,w,!1);else{const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(w,M,V){const K=n.get(w);M!==void 0&&J(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&wt(w)}function it(w){const M=w.texture,V=n.get(w),K=n.get(M);w.addEventListener("dispose",T);const tt=w.textures,Y=w.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=M.version,o.memory.textures++),Y){V.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer[rt]=[];for(let mt=0;mt<M.mipmaps.length;mt++)V.__webglFramebuffer[rt][mt]=i.createFramebuffer()}else V.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){V.__webglFramebuffer=[];for(let rt=0;rt<M.mipmaps.length;rt++)V.__webglFramebuffer[rt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(bt)for(let rt=0,mt=tt.length;rt<mt;rt++){const Yt=n.get(tt[rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&Xt(w)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){const mt=tt[rt];V.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[rt]);const Yt=a.convert(mt.format,mt.colorSpace),et=a.convert(mt.type),gt=x(mt.internalFormat,Yt,et,mt.colorSpace,w.isXRRenderTarget===!0),Lt=Ht(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,V.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),pt(i.TEXTURE_CUBE_MAP,M);for(let rt=0;rt<6;rt++)if(M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)J(V.__webglFramebuffer[rt][mt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else J(V.__webglFramebuffer[rt],w,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);f(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,mt=tt.length;rt<mt;rt++){const Yt=tt[rt],et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),pt(i.TEXTURE_2D,Yt),J(V.__webglFramebuffer,w,Yt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),f(Yt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(rt=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),pt(rt,M),M.mipmaps&&M.mipmaps.length>0)for(let mt=0;mt<M.mipmaps.length;mt++)J(V.__webglFramebuffer[mt],w,M,i.COLOR_ATTACHMENT0,rt,mt);else J(V.__webglFramebuffer,w,M,i.COLOR_ATTACHMENT0,rt,0);f(M)&&m(rt),e.unbindTexture()}w.depthBuffer&&wt(w)}function Et(w){const M=w.textures;for(let V=0,K=M.length;V<K;V++){const tt=M[V];if(f(tt)){const Y=w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(tt).__webglTexture;e.bindTexture(Y,bt),m(Y),e.unbindTexture()}}}const Ft=[],D=[];function Be(w){if(w.samples>0){if(Xt(w)===!1){const M=w.textures,V=w.width,K=w.height;let tt=i.COLOR_BUFFER_BIT;const Y=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(w),rt=M.length>1;if(rt)for(let mt=0;mt<M.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<M.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Yt=n.get(M[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,V,K,0,0,V,K,tt,i.NEAREST),r===!0&&(Ft.length=0,D.length=0,Ft.push(i.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(Ft.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let mt=0;mt<M.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Yt=n.get(M[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&r){const M=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Ht(w){return Math.min(s.maxSamples,w.samples)}function Xt(w){const M=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Pt(w){const M=o.render.frame;h.get(w)!==M&&(h.set(w,M),w.update())}function ie(w,M){const V=w.colorSpace,K=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||V!==zn&&V!==Nn&&(jt.getTransfer(V)===ne?(K!==sn||tt!==wn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),M}function Ut(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=S,this.setTexture2D=I,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=Q,this.rebindTextures=Tt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=Xt}function Lm(i,t){function e(n,s=Nn){let a;const o=jt.getTransfer(s);if(n===wn)return i.UNSIGNED_BYTE;if(n===qr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$r)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ql)return i.BYTE;if(n===$l)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===Wr)return i.INT;if(n===ni)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===dn)return i.HALF_FLOAT;if(n===Yl)return i.ALPHA;if(n===Kl)return i.RGB;if(n===sn)return i.RGBA;if(n===jl)return i.LUMINANCE;if(n===Zl)return i.LUMINANCE_ALPHA;if(n===wi)return i.DEPTH_COMPONENT;if(n===Ii)return i.DEPTH_STENCIL;if(n===Jl)return i.RED;if(n===Xr)return i.RED_INTEGER;if(n===Ql)return i.RG;if(n===Yr)return i.RG_INTEGER;if(n===Kr)return i.RGBA_INTEGER;if(n===ks||n===Os||n===Bs||n===zs)if(o===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===ks)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===ks)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Os)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Bs)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===cr||n===hr||n===ur||n===fr)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===cr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hr)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ur)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===dr||n===pr||n===mr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===dr||n===pr)return o===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===mr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===gr||n===_r||n===vr||n===xr||n===Mr||n===br||n===Sr||n===yr||n===Er||n===Tr||n===wr||n===Ar||n===Cr||n===Rr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===gr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===_r)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===br)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===yr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Er)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Tr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ar)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Cr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Rr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gs||n===Pr||n===Lr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Gs)return o===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Pr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===tc||n===Dr||n===Ir||n===Ur)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Gs)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Dr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ir)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ur)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Di?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Dm extends ke{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class yi extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Im={type:"move"};class Ba{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const l=this._targetRay,r=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),m=this._getHandJoint(c,v);f!==null&&(m.matrix.fromArray(f.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=f.radius),m.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,p=.005;c.inputState.pinching&&d>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else r!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Im)))}return l!==null&&(l.visible=s!==null),r!==null&&(r.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Um=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Nm=`
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

}`;class Fm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new De,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Le({vertexShader:Um,fragmentShader:Nm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new Bn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class km extends Oi{constructor(t,e){super();const n=this;let s=null,a=1,o=null,l="local-floor",r=1,c=null,h=null,u=null,d=null,g=null,p=null;const v=new Fm,f=e.getContextAttributes();let m=null,x=null;const y=[],b=[],R=new Ct;let T=null;const A=new ke;A.layers.enable(1),A.viewport=new te;const L=new ke;L.layers.enable(2),L.viewport=new te;const P=[A,L],_=new Dm;_.layers.enable(1),_.layers.enable(2);let S=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=y[X];return J===void 0&&(J=new Ba,y[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=y[X];return J===void 0&&(J=new Ba,y[X]=J),J.getGripSpace()},this.getHand=function(X){let J=y[X];return J===void 0&&(J=new Ba,y[X]=J),J.getHandSpace()};function B(X){const J=b.indexOf(X.inputSource);if(J===-1)return;const ut=y[J];ut!==void 0&&(ut.update(X.inputSource,X.frame,c||o),ut.dispatchEvent({type:X.type,data:X.inputSource}))}function I(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",z);for(let X=0;X<y.length;X++){const J=b[X];J!==null&&(b[X]=null,y[X].disconnect(J))}S=null,G=null,v.reset(),t.setRenderTarget(m),g=null,d=null,u=null,s=null,x=null,Vt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",I),s.addEventListener("inputsourceschange",z),f.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const J={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),x=new je(g.framebufferWidth,g.framebufferHeight,{format:sn,type:wn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let J=null,ut=null,ht=null;f.depth&&(ht=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=f.stencil?Ii:wi,ut=f.stencil?Di:ni);const wt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:a};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new je(d.textureWidth,d.textureHeight,{format:sn,type:wn,depthTexture:new mc(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(r),c=null,o=await s.requestReferenceSpace(l),Vt.setContext(s),Vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z(X){for(let J=0;J<X.removed.length;J++){const ut=X.removed[J],ht=b.indexOf(ut);ht>=0&&(b[ht]=null,y[ht].disconnect(ut))}for(let J=0;J<X.added.length;J++){const ut=X.added[J];let ht=b.indexOf(ut);if(ht===-1){for(let Tt=0;Tt<y.length;Tt++)if(Tt>=b.length){b.push(ut),ht=Tt;break}else if(b[Tt]===null){b[Tt]=ut,ht=Tt;break}if(ht===-1)break}const wt=y[ht];wt&&wt.connect(ut)}}const O=new F,Q=new F;function q(X,J,ut){O.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(ut.matrixWorld);const ht=O.distanceTo(Q),wt=J.projectionMatrix.elements,Tt=ut.projectionMatrix.elements,it=wt[14]/(wt[10]-1),Et=wt[14]/(wt[10]+1),Ft=(wt[9]+1)/wt[5],D=(wt[9]-1)/wt[5],Be=(wt[8]-1)/wt[0],Ht=(Tt[8]+1)/Tt[0],Xt=it*Be,Pt=it*Ht,ie=ht/(-Be+Ht),Ut=ie*-Be;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Ut),X.translateZ(ie),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),wt[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const w=it+ie,M=Et+ie,V=Xt-Ut,K=Pt+(ht-Ut),tt=Ft*Et/M*w,Y=D*Et/M*w;X.projectionMatrix.makePerspective(V,K,tt,Y,w,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function at(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,ut=X.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ut=v.depthFar)),_.near=L.near=A.near=J,_.far=L.far=A.far=ut,(S!==_.near||G!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,G=_.far);const ht=X.parent,wt=_.cameras;at(_,ht);for(let Tt=0;Tt<wt.length;Tt++)at(wt[Tt],ht);wt.length===2?q(_,A,L):_.projectionMatrix.copy(A.projectionMatrix),ot(X,_,ht)};function ot(X,J,ut){ut===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ut.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=js*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&g===null))return r},this.setFoveation=function(X){r=X,d!==null&&(d.fixedFoveation=X),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let pt=null;function Gt(X,J){if(h=J.getViewerPose(c||o),p=J,h!==null){const ut=h.views;g!==null&&(t.setRenderTargetFramebuffer(x,g.framebuffer),t.setRenderTarget(x));let ht=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Tt=0;Tt<ut.length;Tt++){const it=ut[Tt];let Et=null;if(g!==null)Et=g.getViewport(it);else{const D=u.getViewSubImage(d,it);Et=D.viewport,Tt===0&&(t.setRenderTargetTextures(x,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(x))}let Ft=P[Tt];Ft===void 0&&(Ft=new ke,Ft.layers.enable(Tt),Ft.viewport=new te,P[Tt]=Ft),Ft.matrix.fromArray(it.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(it.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Et.x,Et.y,Et.width,Et.height),Tt===0&&(_.matrix.copy(Ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Ft)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Tt=u.getDepthInformation(ut[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let ut=0;ut<y.length;ut++){const ht=b[ut],wt=y[ut];ht!==null&&wt!==void 0&&wt.update(ht,J,c||o)}pt&&pt(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const Vt=new pc;Vt.setAnimationLoop(Gt),this.setAnimationLoop=function(X){pt=X},this.dispose=function(){}}}const Xn=new pn,Om=new oe;function Bm(i,t){function e(f,m){f.matrixAutoUpdate===!0&&f.updateMatrix(),m.value.copy(f.matrix)}function n(f,m){m.color.getRGB(f.fogColor.value,uc(i)),m.isFog?(f.fogNear.value=m.near,f.fogFar.value=m.far):m.isFogExp2&&(f.fogDensity.value=m.density)}function s(f,m,x,y,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(f,m):m.isMeshToonMaterial?(a(f,m),u(f,m)):m.isMeshPhongMaterial?(a(f,m),h(f,m)):m.isMeshStandardMaterial?(a(f,m),d(f,m),m.isMeshPhysicalMaterial&&g(f,m,b)):m.isMeshMatcapMaterial?(a(f,m),p(f,m)):m.isMeshDepthMaterial?a(f,m):m.isMeshDistanceMaterial?(a(f,m),v(f,m)):m.isMeshNormalMaterial?a(f,m):m.isLineBasicMaterial?(o(f,m),m.isLineDashedMaterial&&l(f,m)):m.isPointsMaterial?r(f,m,x,y):m.isSpriteMaterial?c(f,m):m.isShadowMaterial?(f.color.value.copy(m.color),f.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(f,m){f.opacity.value=m.opacity,m.color&&f.diffuse.value.copy(m.color),m.emissive&&f.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.bumpMap&&(f.bumpMap.value=m.bumpMap,e(m.bumpMap,f.bumpMapTransform),f.bumpScale.value=m.bumpScale,m.side===Oe&&(f.bumpScale.value*=-1)),m.normalMap&&(f.normalMap.value=m.normalMap,e(m.normalMap,f.normalMapTransform),f.normalScale.value.copy(m.normalScale),m.side===Oe&&f.normalScale.value.negate()),m.displacementMap&&(f.displacementMap.value=m.displacementMap,e(m.displacementMap,f.displacementMapTransform),f.displacementScale.value=m.displacementScale,f.displacementBias.value=m.displacementBias),m.emissiveMap&&(f.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,f.emissiveMapTransform)),m.specularMap&&(f.specularMap.value=m.specularMap,e(m.specularMap,f.specularMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest);const x=t.get(m),y=x.envMap,b=x.envMapRotation;y&&(f.envMap.value=y,Xn.copy(b),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),f.envMapRotation.value.setFromMatrix4(Om.makeRotationFromEuler(Xn)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=m.reflectivity,f.ior.value=m.ior,f.refractionRatio.value=m.refractionRatio),m.lightMap&&(f.lightMap.value=m.lightMap,f.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,f.lightMapTransform)),m.aoMap&&(f.aoMap.value=m.aoMap,f.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,f.aoMapTransform))}function o(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform))}function l(f,m){f.dashSize.value=m.dashSize,f.totalSize.value=m.dashSize+m.gapSize,f.scale.value=m.scale}function r(f,m,x,y){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.size.value=m.size*x,f.scale.value=y*.5,m.map&&(f.map.value=m.map,e(m.map,f.uvTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function c(f,m){f.diffuse.value.copy(m.color),f.opacity.value=m.opacity,f.rotation.value=m.rotation,m.map&&(f.map.value=m.map,e(m.map,f.mapTransform)),m.alphaMap&&(f.alphaMap.value=m.alphaMap,e(m.alphaMap,f.alphaMapTransform)),m.alphaTest>0&&(f.alphaTest.value=m.alphaTest)}function h(f,m){f.specular.value.copy(m.specular),f.shininess.value=Math.max(m.shininess,1e-4)}function u(f,m){m.gradientMap&&(f.gradientMap.value=m.gradientMap)}function d(f,m){f.metalness.value=m.metalness,m.metalnessMap&&(f.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,f.metalnessMapTransform)),f.roughness.value=m.roughness,m.roughnessMap&&(f.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,f.roughnessMapTransform)),m.envMap&&(f.envMapIntensity.value=m.envMapIntensity)}function g(f,m,x){f.ior.value=m.ior,m.sheen>0&&(f.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),f.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(f.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,f.sheenColorMapTransform)),m.sheenRoughnessMap&&(f.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,f.sheenRoughnessMapTransform))),m.clearcoat>0&&(f.clearcoat.value=m.clearcoat,f.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(f.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,f.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(f.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Oe&&f.clearcoatNormalScale.value.negate())),m.dispersion>0&&(f.dispersion.value=m.dispersion),m.iridescence>0&&(f.iridescence.value=m.iridescence,f.iridescenceIOR.value=m.iridescenceIOR,f.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(f.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,f.iridescenceMapTransform)),m.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),m.transmission>0&&(f.transmission.value=m.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(f.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,f.transmissionMapTransform)),f.thickness.value=m.thickness,m.thicknessMap&&(f.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=m.attenuationDistance,f.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(f.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(f.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=m.specularIntensity,f.specularColor.value.copy(m.specularColor),m.specularColorMap&&(f.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,f.specularColorMapTransform)),m.specularIntensityMap&&(f.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,f.specularIntensityMapTransform))}function p(f,m){m.matcap&&(f.matcap.value=m.matcap)}function v(f,m){const x=t.get(m).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function zm(i,t,e,n){let s={},a={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function r(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=s[x.id];b===void 0&&(p(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",f));const R=y.program;n.updateUBOMapping(x,R);const T=t.render.frame;a[x.id]!==T&&(d(x),a[x.id]=T)}function h(x){const y=u();x.__bindingPointIndex=y;const b=i.createBuffer(),R=x.__size,T=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=b.length;T<A;T++){const L=Array.isArray(b[T])?b[T]:[b[T]];for(let P=0,_=L.length;P<_;P++){const S=L[P];if(g(S,T,P,R)===!0){const G=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let I=0;for(let z=0;z<B.length;z++){const O=B[z],Q=v(O);typeof O=="number"||typeof O=="boolean"?(S.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,G+I,S.__data)):O.isMatrix3?(S.__data[0]=O.elements[0],S.__data[1]=O.elements[1],S.__data[2]=O.elements[2],S.__data[3]=0,S.__data[4]=O.elements[3],S.__data[5]=O.elements[4],S.__data[6]=O.elements[5],S.__data[7]=0,S.__data[8]=O.elements[6],S.__data[9]=O.elements[7],S.__data[10]=O.elements[8],S.__data[11]=0):(O.toArray(S.__data,I),I+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(x,y,b,R){const T=x.value,A=y+"_"+b;if(R[A]===void 0)return typeof T=="number"||typeof T=="boolean"?R[A]=T:R[A]=T.clone(),!0;{const L=R[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function p(x){const y=x.uniforms;let b=0;const R=16;for(let A=0,L=y.length;A<L;A++){const P=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,S=P.length;_<S;_++){const G=P[_],B=Array.isArray(G.value)?G.value:[G.value];for(let I=0,z=B.length;I<z;I++){const O=B[I],Q=v(O),q=b%R,at=q%Q.boundary,ot=q+at;b+=at,ot!==0&&R-ot<Q.storage&&(b+=R-ot),G.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=b,b+=Q.storage}}}const T=b%R;return T>0&&(b+=R-T),x.__size=b,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function f(x){const y=x.target;y.removeEventListener("dispose",f);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete a[y.id]}function m(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},a={}}return{bind:r,update:c,dispose:m}}class Gm{constructor(t={}){const{canvas:e=Ch(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),p=new Int32Array(4);let v=null,f=null;const m=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=kn,this.toneMappingExposure=1;const y=this;let b=!1,R=0,T=0,A=null,L=-1,P=null;const _=new te,S=new te;let G=null;const B=new Bt(0);let I=0,z=e.width,O=e.height,Q=1,q=null,at=null;const ot=new te(0,0,z,O),pt=new te(0,0,z,O);let Gt=!1;const Vt=new Zr;let X=!1,J=!1;const ut=new oe,ht=new oe,wt=new F,Tt=new te,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ft(){return A===null?Q:1}let D=n;function Be(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:r,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Gr}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const N="webgl2";if(D=Be(N,E),D===null)throw Be(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ht,Xt,Pt,ie,Ut,w,M,V,K,tt,Y,bt,rt,mt,Yt,et,gt,Lt,Dt,_t,Wt,Nt,ee,U;function ft(){Ht=new $d(D),Ht.init(),Nt=new Lm(D,Ht),Xt=new zd(D,Ht,t,Nt),Pt=new Cm(D),Xt.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),ie=new Kd(D),Ut=new dm,w=new Pm(D,Ht,Pt,Ut,Xt,Nt,ie),M=new Vd(y),V=new qd(y),K=new eu(D),ee=new Od(D,K),tt=new Xd(D,K,ie,ee),Y=new Zd(D,tt,K,ie),Dt=new jd(D,Xt,w),et=new Gd(Ut),bt=new fm(y,M,V,Ht,Xt,ee,et),rt=new Bm(y,Ut),mt=new mm,Yt=new bm(Ht),Lt=new kd(y,M,V,Pt,Y,d,r),gt=new wm(y,Y,Xt),U=new zm(D,ie,Xt,Pt),_t=new Bd(D,Ht,ie),Wt=new Yd(D,Ht,ie),ie.programs=bt.programs,y.capabilities=Xt,y.extensions=Ht,y.properties=Ut,y.renderLists=mt,y.shadowMap=gt,y.state=Pt,y.info=ie}ft();const $=new km(y,D);this.xr=$,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Ht.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ht.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(z,O,!1))},this.getSize=function(E){return E.set(z,O)},this.setSize=function(E,N,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,O=N,e.width=Math.floor(E*Q),e.height=Math.floor(N*Q),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(z*Q,O*Q).floor()},this.setDrawingBufferSize=function(E,N,H){z=E,O=N,Q=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(ot)},this.setViewport=function(E,N,H,W){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,N,H,W),Pt.viewport(_.copy(ot).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,N,H,W){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,N,H,W),Pt.scissor(S.copy(pt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(E){Pt.setScissorTest(Gt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,N=!0,H=!0){let W=0;if(E){let k=!1;if(A!==null){const nt=A.texture.format;k=nt===Kr||nt===Yr||nt===Xr}if(k){const nt=A.texture.type,ct=nt===wn||nt===ni||nt===is||nt===Di||nt===qr||nt===$r,vt=Lt.getClearColor(),xt=Lt.getClearAlpha(),At=vt.r,Rt=vt.g,St=vt.b;ct?(g[0]=At,g[1]=Rt,g[2]=St,g[3]=xt,D.clearBufferuiv(D.COLOR,0,g)):(p[0]=At,p[1]=Rt,p[2]=St,p[3]=xt,D.clearBufferiv(D.COLOR,0,p))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),Yt.dispose(),Ut.dispose(),M.dispose(),V.dispose(),Y.dispose(),ee.dispose(),U.dispose(),bt.dispose(),$.dispose(),$.removeEventListener("sessionstart",co),$.removeEventListener("sessionend",ho),Gn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ie.autoReset,N=gt.enabled,H=gt.autoUpdate,W=gt.needsUpdate,k=gt.type;ft(),ie.autoReset=E,gt.enabled=N,gt.autoUpdate=H,gt.needsUpdate=W,gt.type=k}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){const N=E.target;N.removeEventListener("dispose",qt),pe(N)}function pe(E){Ie(E),Ut.remove(E)}function Ie(E){const N=Ut.get(E).programs;N!==void 0&&(N.forEach(function(H){bt.releaseProgram(H)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,W,k,nt){N===null&&(N=it);const ct=k.isMesh&&k.matrixWorld.determinant()<0,vt=Gc(E,N,H,W,k);Pt.setMaterial(W,ct);let xt=H.index,At=1;if(W.wireframe===!0){if(xt=tt.getWireframeAttribute(H),xt===void 0)return;At=2}const Rt=H.drawRange,St=H.attributes.position;let Qt=Rt.start*At,se=(Rt.start+Rt.count)*At;nt!==null&&(Qt=Math.max(Qt,nt.start*At),se=Math.min(se,(nt.start+nt.count)*At)),xt!==null?(Qt=Math.max(Qt,0),se=Math.min(se,xt.count)):St!=null&&(Qt=Math.max(Qt,0),se=Math.min(se,St.count));const ce=se-Qt;if(ce<0||ce===1/0)return;ee.setup(k,W,vt,H,xt);let ze,Zt=_t;if(xt!==null&&(ze=K.get(xt),Zt=Wt,Zt.setIndex(ze)),k.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*Ft()),Zt.setMode(D.LINES)):Zt.setMode(D.TRIANGLES);else if(k.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),Pt.setLineWidth(yt*Ft()),k.isLineSegments?Zt.setMode(D.LINES):k.isLineLoop?Zt.setMode(D.LINE_LOOP):Zt.setMode(D.LINE_STRIP)}else k.isPoints?Zt.setMode(D.POINTS):k.isSprite&&Zt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)Zt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Ht.get("WEBGL_multi_draw"))Zt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const yt=k._multiDrawStarts,Ee=k._multiDrawCounts,Jt=k._multiDrawCount,Ze=xt?K.get(xt).bytesPerElement:1,si=Ut.get(W).currentProgram.getUniforms();for(let Ge=0;Ge<Jt;Ge++)si.setValue(D,"_gl_DrawID",Ge),Zt.render(yt[Ge]/Ze,Ee[Ge])}else if(k.isInstancedMesh)Zt.renderInstances(Qt,ce,k.count);else if(H.isInstancedBufferGeometry){const yt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Ee=Math.min(H.instanceCount,yt);Zt.renderInstances(Qt,ce,Ee)}else Zt.render(Qt,ce)};function Kt(E,N,H){E.transparent===!0&&E.side===qe&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,us(E,N,H),E.side=On,E.needsUpdate=!0,us(E,N,H),E.side=qe):us(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),f=Yt.get(H),f.init(N),x.push(f),H.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),E!==H&&E.traverseVisible(function(k){k.isLight&&k.layers.test(N.layers)&&(f.pushLight(k),k.castShadow&&f.pushShadow(k))}),f.setupLights();const W=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const nt=k.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const vt=nt[ct];Kt(vt,H,k),W.add(vt)}else Kt(nt,H,k),W.add(nt)}),x.pop(),f=null,W},this.compileAsync=function(E,N,H=null){const W=this.compile(E,N,H);return new Promise(k=>{function nt(){if(W.forEach(function(ct){Ut.get(ct).currentProgram.isReady()&&W.delete(ct)}),W.size===0){k(E);return}setTimeout(nt,10)}Ht.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ue=null;function mn(E){Ue&&Ue(E)}function co(){Gn.stop()}function ho(){Gn.start()}const Gn=new pc;Gn.setAnimationLoop(mn),typeof self<"u"&&Gn.setContext(self),this.setAnimationLoop=function(E){Ue=E,$.setAnimationLoop(E),E===null?Gn.stop():Gn.start()},$.addEventListener("sessionstart",co),$.addEventListener("sessionend",ho),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(N),N=$.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,N,A),f=Yt.get(E,x.length),f.init(N),x.push(f),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Vt.setFromProjectionMatrix(ht),J=this.localClippingEnabled,X=et.init(this.clippingPlanes,J),v=mt.get(E,m.length),v.init(),m.push(v),$.enabled===!0&&$.isPresenting===!0){const nt=y.xr.getDepthSensingMesh();nt!==null&&aa(nt,N,-1/0,y.sortObjects)}aa(E,N,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(q,at),Et=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Et&&Lt.addToRenderList(v,E),this.info.render.frame++,X===!0&&et.beginShadows();const H=f.state.shadowsArray;gt.render(H,E,N),X===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,k=v.transmissive;if(f.setupLights(),N.isArrayCamera){const nt=N.cameras;if(k.length>0)for(let ct=0,vt=nt.length;ct<vt;ct++){const xt=nt[ct];fo(W,k,E,xt)}Et&&Lt.render(E);for(let ct=0,vt=nt.length;ct<vt;ct++){const xt=nt[ct];uo(v,E,xt,xt.viewport)}}else k.length>0&&fo(W,k,E,N),Et&&Lt.render(E),uo(v,E,N);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(y,E,N),ee.resetDefaultState(),L=-1,P=null,x.pop(),x.length>0?(f=x[x.length-1],X===!0&&et.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function aa(E,N,H,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Vt.intersectsSprite(E)){W&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const ct=Y.update(E),vt=E.material;vt.visible&&v.push(E,ct,vt,H,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Vt.intersectsObject(E))){const ct=Y.update(E),vt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Tt.copy(ct.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(vt)){const xt=ct.groups;for(let At=0,Rt=xt.length;At<Rt;At++){const St=xt[At],Qt=vt[St.materialIndex];Qt&&Qt.visible&&v.push(E,ct,Qt,H,Tt.z,St)}}else vt.visible&&v.push(E,ct,vt,H,Tt.z,null)}}const nt=E.children;for(let ct=0,vt=nt.length;ct<vt;ct++)aa(nt[ct],N,H,W)}function uo(E,N,H,W){const k=E.opaque,nt=E.transmissive,ct=E.transparent;f.setupLightsView(H),X===!0&&et.setGlobalState(y.clippingPlanes,H),W&&Pt.viewport(_.copy(W)),k.length>0&&hs(k,N,H),nt.length>0&&hs(nt,N,H),ct.length>0&&hs(ct,N,H),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function fo(E,N,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new je(1,1,{generateMipmaps:!0,type:Ht.has("EXT_color_buffer_half_float")||Ht.has("EXT_color_buffer_float")?dn:wn,minFilter:ti,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=f.state.transmissionRenderTarget[W.id],ct=W.viewport||_;nt.setSize(ct.z,ct.w);const vt=y.getRenderTarget();y.setRenderTarget(nt),y.getClearColor(B),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear(),Et&&Lt.render(H);const xt=y.toneMapping;y.toneMapping=kn;const At=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),X===!0&&et.setGlobalState(y.clippingPlanes,W),hs(E,H,W),w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt),Ht.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let St=0,Qt=N.length;St<Qt;St++){const se=N[St],ce=se.object,ze=se.geometry,Zt=se.material,yt=se.group;if(Zt.side===qe&&ce.layers.test(W.layers)){const Ee=Zt.side;Zt.side=Oe,Zt.needsUpdate=!0,po(ce,H,W,ze,Zt,yt),Zt.side=Ee,Zt.needsUpdate=!0,Rt=!0}}Rt===!0&&(w.updateMultisampleRenderTarget(nt),w.updateRenderTargetMipmap(nt))}y.setRenderTarget(vt),y.setClearColor(B,I),At!==void 0&&(W.viewport=At),y.toneMapping=xt}function hs(E,N,H){const W=N.isScene===!0?N.overrideMaterial:null;for(let k=0,nt=E.length;k<nt;k++){const ct=E[k],vt=ct.object,xt=ct.geometry,At=W===null?ct.material:W,Rt=ct.group;vt.layers.test(H.layers)&&po(vt,N,H,xt,At,Rt)}}function po(E,N,H,W,k,nt){E.onBeforeRender(y,N,H,W,k,nt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(y,N,H,W,E,nt),k.transparent===!0&&k.side===qe&&k.forceSinglePass===!1?(k.side=Oe,k.needsUpdate=!0,y.renderBufferDirect(H,N,W,k,E,nt),k.side=On,k.needsUpdate=!0,y.renderBufferDirect(H,N,W,k,E,nt),k.side=qe):y.renderBufferDirect(H,N,W,k,E,nt),E.onAfterRender(y,N,H,W,k,nt)}function us(E,N,H){N.isScene!==!0&&(N=it);const W=Ut.get(E),k=f.state.lights,nt=f.state.shadowsArray,ct=k.state.version,vt=bt.getParameters(E,k.state,nt,N,H),xt=bt.getProgramCacheKey(vt);let At=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?V:M).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,At===void 0&&(E.addEventListener("dispose",qt),At=new Map,W.programs=At);let Rt=At.get(xt);if(Rt!==void 0){if(W.currentProgram===Rt&&W.lightsStateVersion===ct)return go(E,vt),Rt}else vt.uniforms=bt.getUniforms(E),E.onBeforeCompile(vt,y),Rt=bt.acquireProgram(vt,xt),At.set(xt,Rt),W.uniforms=vt.uniforms;const St=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=et.uniform),go(E,vt),W.needsLights=Hc(E),W.lightsStateVersion=ct,W.needsLights&&(St.ambientLightColor.value=k.state.ambient,St.lightProbe.value=k.state.probe,St.directionalLights.value=k.state.directional,St.directionalLightShadows.value=k.state.directionalShadow,St.spotLights.value=k.state.spot,St.spotLightShadows.value=k.state.spotShadow,St.rectAreaLights.value=k.state.rectArea,St.ltc_1.value=k.state.rectAreaLTC1,St.ltc_2.value=k.state.rectAreaLTC2,St.pointLights.value=k.state.point,St.pointLightShadows.value=k.state.pointShadow,St.hemisphereLights.value=k.state.hemi,St.directionalShadowMap.value=k.state.directionalShadowMap,St.directionalShadowMatrix.value=k.state.directionalShadowMatrix,St.spotShadowMap.value=k.state.spotShadowMap,St.spotLightMatrix.value=k.state.spotLightMatrix,St.spotLightMap.value=k.state.spotLightMap,St.pointShadowMap.value=k.state.pointShadowMap,St.pointShadowMatrix.value=k.state.pointShadowMatrix),W.currentProgram=Rt,W.uniformsList=null,Rt}function mo(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Hs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function go(E,N){const H=Ut.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Gc(E,N,H,W,k){N.isScene!==!0&&(N=it),w.resetTextureUnits();const nt=N.fog,ct=W.isMeshStandardMaterial?N.environment:null,vt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:zn,xt=(W.isMeshStandardMaterial?V:M).get(W.envMap||ct),At=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Rt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!H.morphAttributes.position,Qt=!!H.morphAttributes.normal,se=!!H.morphAttributes.color;let ce=kn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(ce=y.toneMapping);const ze=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Zt=ze!==void 0?ze.length:0,yt=Ut.get(W),Ee=f.state.lights;if(X===!0&&(J===!0||E!==P)){const Xe=E===P&&W.id===L;et.setState(W,E,Xe)}let Jt=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ee.state.version||yt.outputColorSpace!==vt||k.isBatchedMesh&&yt.batching===!1||!k.isBatchedMesh&&yt.batching===!0||k.isBatchedMesh&&yt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&yt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&yt.instancing===!1||!k.isInstancedMesh&&yt.instancing===!0||k.isSkinnedMesh&&yt.skinning===!1||!k.isSkinnedMesh&&yt.skinning===!0||k.isInstancedMesh&&yt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&yt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&yt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&yt.instancingMorph===!1&&k.morphTexture!==null||yt.envMap!==xt||W.fog===!0&&yt.fog!==nt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==et.numPlanes||yt.numIntersection!==et.numIntersection)||yt.vertexAlphas!==At||yt.vertexTangents!==Rt||yt.morphTargets!==St||yt.morphNormals!==Qt||yt.morphColors!==se||yt.toneMapping!==ce||yt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,yt.__version=W.version);let Ze=yt.currentProgram;Jt===!0&&(Ze=us(W,N,k));let si=!1,Ge=!1,ra=!1;const ue=Ze.getUniforms(),An=yt.uniforms;if(Pt.useProgram(Ze.program)&&(si=!0,Ge=!0,ra=!0),W.id!==L&&(L=W.id,Ge=!0),si||P!==E){Xt.reverseDepthBuffer?(ut.copy(E.projectionMatrix),Ph(ut),Lh(ut),ue.setValue(D,"projectionMatrix",ut)):ue.setValue(D,"projectionMatrix",E.projectionMatrix),ue.setValue(D,"viewMatrix",E.matrixWorldInverse);const Xe=ue.map.cameraPosition;Xe!==void 0&&Xe.setValue(D,wt.setFromMatrixPosition(E.matrixWorld)),Xt.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,Ge=!0,ra=!0)}if(k.isSkinnedMesh){ue.setOptional(D,k,"bindMatrix"),ue.setOptional(D,k,"bindMatrixInverse");const Xe=k.skeleton;Xe&&(Xe.boneTexture===null&&Xe.computeBoneTexture(),ue.setValue(D,"boneTexture",Xe.boneTexture,w))}k.isBatchedMesh&&(ue.setOptional(D,k,"batchingTexture"),ue.setValue(D,"batchingTexture",k._matricesTexture,w),ue.setOptional(D,k,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",k._indirectTexture,w),ue.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",k._colorsTexture,w));const oa=H.morphAttributes;if((oa.position!==void 0||oa.normal!==void 0||oa.color!==void 0)&&Dt.update(k,H,Ze),(Ge||yt.receiveShadow!==k.receiveShadow)&&(yt.receiveShadow=k.receiveShadow,ue.setValue(D,"receiveShadow",k.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(An.envMap.value=xt,An.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(An.envMapIntensity.value=N.environmentIntensity),Ge&&(ue.setValue(D,"toneMappingExposure",y.toneMappingExposure),yt.needsLights&&Vc(An,ra),nt&&W.fog===!0&&rt.refreshFogUniforms(An,nt),rt.refreshMaterialUniforms(An,W,Q,O,f.state.transmissionRenderTarget[E.id]),Hs.upload(D,mo(yt),An,w)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Hs.upload(D,mo(yt),An,w),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(D,"center",k.center),ue.setValue(D,"modelViewMatrix",k.modelViewMatrix),ue.setValue(D,"normalMatrix",k.normalMatrix),ue.setValue(D,"modelMatrix",k.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Xe=W.uniformsGroups;for(let la=0,Wc=Xe.length;la<Wc;la++){const _o=Xe[la];U.update(_o,Ze),U.bind(_o,Ze)}}return Ze}function Vc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Hc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,N,H){Ut.get(E.texture).__webglTexture=N,Ut.get(E.depthTexture).__webglTexture=H;const W=Ut.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||Ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=Ut.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,H=0){A=E,R=N,T=H;let W=!0,k=null,nt=!1,ct=!1;if(E){const xt=Ut.get(E);if(xt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(xt.__hasExternalTextures)w.rebindTextures(E,Ut.get(E.texture).__webglTexture,Ut.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&Ut.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);const Rt=Ut.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?k=Rt[N][H]:k=Rt[N],nt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?k=Ut.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?k=Rt[H]:k=Rt,_.copy(E.viewport),S.copy(E.scissor),G=E.scissorTest}else _.copy(ot).multiplyScalar(Q).floor(),S.copy(pt).multiplyScalar(Q).floor(),G=Gt;if(Pt.bindFramebuffer(D.FRAMEBUFFER,k)&&W&&Pt.drawBuffers(E,k),Pt.viewport(_),Pt.scissor(S),Pt.setScissorTest(G),nt){const xt=Ut.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,H)}else if(ct){const xt=Ut.get(E.texture),At=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,H||0,At)}L=-1},this.readRenderTargetPixels=function(E,N,H,W,k,nt,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=Ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){Pt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const xt=E.texture,At=xt.format,Rt=xt.type;if(!Xt.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&H>=0&&H<=E.height-k&&D.readPixels(N,H,W,k,Nt.convert(At),Nt.convert(Rt),nt)}finally{const xt=A!==null?Ut.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,W,k,nt,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=Ut.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){const xt=E.texture,At=xt.format,Rt=xt.type;if(!Xt.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&H>=0&&H<=E.height-k){Pt.bindFramebuffer(D.FRAMEBUFFER,vt);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(N,H,W,k,Nt.convert(At),Nt.convert(Rt),0);const Qt=A!==null?Ut.get(A).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,Qt);const se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Rh(D,se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(St),D.deleteSync(se),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(Vs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-H),k=Math.floor(E.image.width*W),nt=Math.floor(E.image.height*W),ct=N!==null?N.x:0,vt=N!==null?N.y:0;w.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,ct,vt,k,nt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,N,H=null,W=null,k=0){E.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],k=arguments[3]||0,H=null);let nt,ct,vt,xt,At,Rt;H!==null?(nt=H.max.x-H.min.x,ct=H.max.y-H.min.y,vt=H.min.x,xt=H.min.y):(nt=E.image.width,ct=E.image.height,vt=0,xt=0),W!==null?(At=W.x,Rt=W.y):(At=0,Rt=0);const St=Nt.convert(N.format),Qt=Nt.convert(N.type);w.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ze=D.getParameter(D.UNPACK_SKIP_PIXELS),Zt=D.getParameter(D.UNPACK_SKIP_ROWS),yt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ee=E.isCompressedTexture?E.mipmaps[k]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,At,Rt,nt,ct,St,Qt,Ee.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,At,Rt,Ee.width,Ee.height,St,Ee.data):D.texSubImage2D(D.TEXTURE_2D,k,At,Rt,nt,ct,St,Qt,Ee),D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt),k===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,W=null,k=0){E.isTexture!==!0&&(Vs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],k=arguments[4]||0);let nt,ct,vt,xt,At,Rt,St,Qt,se;const ce=E.isCompressedTexture?E.mipmaps[k]:E.image;H!==null?(nt=H.max.x-H.min.x,ct=H.max.y-H.min.y,vt=H.max.z-H.min.z,xt=H.min.x,At=H.min.y,Rt=H.min.z):(nt=ce.width,ct=ce.height,vt=ce.depth,xt=0,At=0,Rt=0),W!==null?(St=W.x,Qt=W.y,se=W.z):(St=0,Qt=0,se=0);const ze=Nt.convert(N.format),Zt=Nt.convert(N.type);let yt;if(N.isData3DTexture)w.setTexture3D(N,0),yt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)w.setTexture2DArray(N,0),yt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ee=D.getParameter(D.UNPACK_ROW_LENGTH),Jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ze=D.getParameter(D.UNPACK_SKIP_PIXELS),si=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Rt),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(yt,k,St,Qt,se,nt,ct,vt,ze,Zt,ce.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,k,St,Qt,se,nt,ct,vt,ze,ce.data):D.texSubImage3D(yt,k,St,Qt,se,nt,ct,vt,ze,Zt,ce),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,si),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),k===0&&N.generateMipmaps&&D.generateMipmap(yt),Pt.unbindTexture()},this.initRenderTarget=function(E){Ut.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){R=0,T=0,A=null,Pt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===jr?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===ta?"display-p3":"srgb"}}class Mc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new Mc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vm extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new pn,this.environmentIntensity=1,this.environmentRotation=new pn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class bc extends Bi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fl=new oe,Fr=new rc,Is=new ea,Us=new F;class Hm extends de{constructor(t=new $e,e=new bc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Is.copy(n.boundingSphere),Is.applyMatrix4(s),Is.radius+=a,t.ray.intersectsSphere(Is)===!1)return;fl.copy(s).invert(),Fr.copy(t.ray).applyMatrix4(fl);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let p=d,v=g;p<v;p++){const f=c.getX(p);Us.fromBufferAttribute(u,f),dl(Us,f,r,s,t,e,this)}}else{const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let p=d,v=g;p<v;p++)Us.fromBufferAttribute(u,p),dl(Us,p,r,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function dl(i,t,e,n,s,a,o){const l=Fr.distanceSqToPoint(i);if(l<e){const r=new F;Fr.closestPointToPoint(i,r),r.applyMatrix4(n);const c=s.ray.origin.distanceTo(r);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(l),point:r,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Sc extends De{constructor(t,e,n,s,a,o,l,r,c){super(t,e,n,s,a,o,l,r,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class to extends $e{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],o=[],l=[],r=[],c=new F,h=new Ct;o.push(0,0,0),l.push(0,0,1),r.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const g=n+u/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,r.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(r,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new to(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class eo extends $e{constructor(t=1,e=1,n=1,s=32,a=1,o=!1,l=0,r=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:r};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],g=[];let p=0;const v=[],f=n/2;let m=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(g,2));function x(){const b=new F,R=new F;let T=0;const A=(e-t)/n;for(let L=0;L<=a;L++){const P=[],_=L/a,S=_*(e-t)+t;for(let G=0;G<=s;G++){const B=G/s,I=B*r+l,z=Math.sin(I),O=Math.cos(I);R.x=S*z,R.y=-_*n+f,R.z=S*O,u.push(R.x,R.y,R.z),b.set(z,A,O).normalize(),d.push(b.x,b.y,b.z),g.push(B,1-_),P.push(p++)}v.push(P)}for(let L=0;L<s;L++)for(let P=0;P<a;P++){const _=v[P][L],S=v[P+1][L],G=v[P+1][L+1],B=v[P][L+1];t>0&&(h.push(_,S,B),T+=3),e>0&&(h.push(S,G,B),T+=3)}c.addGroup(m,T,0),m+=T}function y(b){const R=p,T=new Ct,A=new F;let L=0;const P=b===!0?t:e,_=b===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,f*_,0),d.push(0,_,0),g.push(.5,.5),p++;const S=p;for(let G=0;G<=s;G++){const I=G/s*r+l,z=Math.cos(I),O=Math.sin(I);A.x=P*O,A.y=f*_,A.z=P*z,u.push(A.x,A.y,A.z),d.push(0,_,0),T.x=z*.5+.5,T.y=O*.5*_+.5,g.push(T.x,T.y),p++}for(let G=0;G<s;G++){const B=R+G,I=S+G;b===!0?h.push(I,I+1,B):h.push(I+1,I,B),L+=3}c.addGroup(m,L,b===!0?1:2),m+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends eo{constructor(t=1,e=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(0,t,e,n,s,a,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(t){return new no(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class io extends $e{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],o=[];l(s),c(n),h(),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(a.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const y=new F,b=new F,R=new F;for(let T=0;T<e.length;T+=3)g(e[T+0],y),g(e[T+1],b),g(e[T+2],R),r(y,b,R,x)}function r(x,y,b,R){const T=R+1,A=[];for(let L=0;L<=T;L++){A[L]=[];const P=x.clone().lerp(b,L/T),_=y.clone().lerp(b,L/T),S=T-L;for(let G=0;G<=S;G++)G===0&&L===T?A[L][G]=P:A[L][G]=P.clone().lerp(_,G/S)}for(let L=0;L<T;L++)for(let P=0;P<2*(T-L)-1;P++){const _=Math.floor(P/2);P%2===0?(d(A[L][_+1]),d(A[L+1][_]),d(A[L][_])):(d(A[L][_+1]),d(A[L+1][_+1]),d(A[L+1][_]))}}function c(x){const y=new F;for(let b=0;b<a.length;b+=3)y.x=a[b+0],y.y=a[b+1],y.z=a[b+2],y.normalize().multiplyScalar(x),a[b+0]=y.x,a[b+1]=y.y,a[b+2]=y.z}function h(){const x=new F;for(let y=0;y<a.length;y+=3){x.x=a[y+0],x.y=a[y+1],x.z=a[y+2];const b=f(x)/2/Math.PI+.5,R=m(x)/Math.PI+.5;o.push(b,1-R)}p(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],b=o[x+2],R=o[x+4],T=Math.max(y,b,R),A=Math.min(y,b,R);T>.9&&A<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){a.push(x.x,x.y,x.z)}function g(x,y){const b=x*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function p(){const x=new F,y=new F,b=new F,R=new F,T=new Ct,A=new Ct,L=new Ct;for(let P=0,_=0;P<a.length;P+=9,_+=6){x.set(a[P+0],a[P+1],a[P+2]),y.set(a[P+3],a[P+4],a[P+5]),b.set(a[P+6],a[P+7],a[P+8]),T.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),R.copy(x).add(y).add(b).divideScalar(3);const S=f(R);v(T,_+0,x,S),v(A,_+2,y,S),v(L,_+4,b,S)}}function v(x,y,b,R){R<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new io(t.vertices,t.indices,t.radius,t.details)}}class so extends io{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new so(t.radius,t.detail)}}class Wm extends Le{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Ji extends Bi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ec,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new pn,this.combine=Vr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class cs extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class qm extends cs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const za=new oe,pl=new F,ml=new F;class ao{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zr,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;pl.setFromMatrixPosition(t.matrixWorld),e.position.copy(pl),ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ml),e.updateMatrixWorld(),za.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(za),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(za)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class $m extends ao{constructor(){super(new ke(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=js*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Xm extends cs{constructor(t,e,n=0,s=Math.PI/3,a=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new $m}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const gl=new oe,Yi=new F,Ga=new F;class Ym extends ao{constructor(){super(new ke(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Yi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Yi),Ga.copy(n.position),Ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ga),n.updateMatrixWorld(),s.makeTranslation(-Yi.x,-Yi.y,-Yi.z),gl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl)}}class _l extends cs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ym}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Km extends ao{constructor(){super(new Jr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jm extends cs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new Km}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Zm extends cs{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Jm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=vl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function vl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Gr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Gr);const yc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Gi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qm=new Jr(-1,1,1,-1,0,1);class t0 extends $e{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}const e0=new t0;class ro{constructor(t){this._mesh=new ve(e0,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Qm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ec extends Gi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Le?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ss.clone(t.uniforms),this.material=new Le({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ro(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xl extends Gi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class n0 extends Gi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class i0{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new je(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ec(yc),this.copyPass.material.blending=Tn,this.clock=new Jm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const l=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),r.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}xl!==void 0&&(o instanceof xl?n=!0:o instanceof n0&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class s0 extends Gi{constructor(t,e,n=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const a0={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ni extends Gi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new je(a,o,{type:dn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new je(a,o,{type:dn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new je(a,o,{type:dn});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),a=Math.round(a/2),o=Math.round(o/2)}const l=a0;this.highPassUniforms=ss.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Le({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const r=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=yc;this.copyUniforms=ss.clone(h.uniforms),this.blendMaterial=new Le({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ns,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new hn,this.fsQuad=new ro(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this.fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[r].uniforms.direction.value=Ni.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[r]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=Ni.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[r]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[r];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Le({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Le({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ni.BlurDirectionX=new Ct(1,0);Ni.BlurDirectionY=new Ct(0,1);const r0={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class o0 extends Gi{constructor(){super();const t=r0;this.uniforms=ss.clone(t.uniforms),this.material=new Wm({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ro(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Bl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===zl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gl?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Vl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Hl&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const kr=3,l0="the-other-me-applause",Ci="saves",Tc="tom-applause-settings";function oo(){return{v:kr,room:"hub_dressing",spot:"start",chapter:"Акт I · Приглашение",f:{},inv:[],notes:[],photos:[],seen:{},mask:null,time:0}}const Ml={music:.7,sfx:.8,voice:.6,uiScale:1,quality:"med",textSpeed:45,reduceFlash:!1,reduceShake:!1,contrast:!1,rhythmEasy:!1,rhythmOffset:0,touch:typeof window<"u"&&"ontouchstart"in window&&matchMedia("(pointer: coarse)").matches},Se=c0();function c0(){try{const i=localStorage.getItem(Tc);if(i)return{...Ml,...JSON.parse(i)}}catch(i){console.warn("[settings] не удалось прочитать настройки, используются значения по умолчанию",i)}return{...Ml}}function bl(){try{localStorage.setItem(Tc,JSON.stringify(Se))}catch(i){console.warn("[settings] не удалось сохранить настройки",i)}}let Ns=null;function wc(){return Ns||(Ns=new Promise(i=>{try{const t=indexedDB.open(l0,1);t.onupgradeneeded=()=>t.result.createObjectStore(Ci),t.onsuccess=()=>i(t.result),t.onerror=()=>{console.warn("[save] IndexedDB недоступна, используется localStorage",t.error),i(null)}}catch(t){console.warn("[save] IndexedDB недоступна, используется localStorage",t),i(null)}}),Ns)}async function Ac(i,t){const e=await wc();if(!e){t===null?localStorage.removeItem("tom-save-"+i):localStorage.setItem("tom-save-"+i,t);return}return new Promise((n,s)=>{const a=e.transaction(Ci,"readwrite");t===null?a.objectStore(Ci).delete(i):a.objectStore(Ci).put(t,i),a.oncomplete=()=>n(),a.onerror=()=>s(a.error)})}async function h0(i){const t=await wc();return t?new Promise((e,n)=>{const s=t.transaction(Ci).objectStore(Ci).get(i);s.onsuccess=()=>e(s.result??null),s.onerror=()=>n(s.error)}):localStorage.getItem("tom-save-"+i)}const Sl=["auto","slot1","slot2","slot3"],u0={auto:"Автосохранение",slot1:"Слот I",slot2:"Слот II",slot3:"Слот III"};function Cc(i){if(!i||typeof i!="object"||typeof i.room!="string"||typeof i.f!="object")return null;const t={...oo(),...i};return Array.isArray(t.inv)||(t.inv=[]),Array.isArray(t.notes)||(t.notes=[]),Array.isArray(t.photos)||(t.photos=[]),(!t.seen||typeof t.seen!="object")&&(t.seen={}),(i.v|0)>kr?null:(t.v=kr,t)}async function Rc(i,t){t.savedAt=Date.now(),await Ac(i,JSON.stringify(t))}async function Va(i){const t=await h0(i);if(!t)return{state:null,broken:!1};try{const e=Cc(JSON.parse(t));return{state:e,broken:!e}}catch(e){return console.warn(`[save] слот ${i} повреждён`,e),{state:null,broken:!0}}}async function f0(i){await Ac(i,null)}function d0(i){return JSON.stringify(i)}function p0(i){try{return Cc(JSON.parse(i))}catch(t){return console.warn("[save] импорт: файл не является сохранением",t),null}}const xi={sat:1,tint:[1,1,1],vig:.35,glitch:0,bright:1,contrast:1,wave:0,bloom:.45},m0={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new F(1,1,1)},uVig:{value:.35},uGlitch:{value:0},uBright:{value:1},uContrast:{value:1},uWave:{value:0},uTime:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash; uniform vec3 uTint; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec2 uv=vUv;
      if(uWave>0.0){ uv.x+=sin(uv.y*18.0+uTime*2.2)*0.006*uWave; uv.y+=sin(uv.x*14.0+uTime*1.7)*0.005*uWave; }
      float sh=0.0;
      if(uGlitch>0.0){ float band=floor(uv.y*24.0); float n=h(vec2(band,floor(uTime*9.0))); if(n>1.0-uGlitch*0.35){ uv.x+=(h(vec2(band,uTime))-0.5)*0.12*uGlitch; } sh=0.004*uGlitch; }
      vec3 c=texture2D(tDiffuse,uv).rgb;
      if(sh>0.0){ c.r=texture2D(tDiffuse,uv+vec2(sh,0.0)).r; c.b=texture2D(tDiffuse,uv-vec2(sh,0.0)).b; }
      float l=dot(c,vec3(0.3,0.59,0.11)); c=mix(vec3(l),c,uSat); c*=uTint*uBright; c=(c-0.5)*uContrast+0.5;
      float d=distance(vUv,vec2(0.5)); c*=1.0-uVig*smoothstep(0.35,0.85,d);
      c+=vec3(uFlash); gl_FragColor=vec4(c,1.0); }`};class g0{constructor(t){this.canvas=t,this.scene=new Vm,this.target={...xi,tint:[...xi.tint]},this.cur={...xi,tint:[...xi.tint]},this.flash=0,this.W=640,this.H=360,this.time=0,this.r=new Gm({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=Ol,this.r.toneMapping=Hr,this.r.toneMappingExposure=1.3,this.cam=new ke(30,16/9,1,200),this.setup(),window.addEventListener("resize",()=>this.setup())}setup(){const t=window.innerWidth,e=window.innerHeight,n=Se.quality==="low"?288:Se.quality==="med"?400:540,s=Math.max(1,Math.floor(e/n))||1;this.H=Math.max(180,Math.round(e/s)),this.W=Math.max(240,Math.round(t/s)),this.r.setPixelRatio(1),this.r.setSize(this.W,this.H,!1),this.r.shadowMap.enabled=Se.quality!=="low",this.cam.aspect=this.W/this.H,this.cam.fov=this.cam.aspect<1?46:30,this.cam.updateProjectionMatrix();const a=new je(this.W,this.H,{type:dn});this.composer=new i0(this.r,a),this.composer.addPass(new s0(this.scene,this.cam)),this.bloom=new Ni(new Ct(this.W,this.H),.45,.6,.82),this.bloom.enabled=Se.quality!=="low",this.composer.addPass(this.bloom),this.composer.addPass(new o0),this.grade=new Ec(m0),this.composer.addPass(this.grade)}setGrade(t,e=!1){this.target={...xi,...t,tint:t.tint?[...t.tint]:[...xi.tint]},e&&(this.cur={...this.target,tint:[...this.target.tint]})}render(t){this.time+=t;const e=Math.min(1,t*4),n=this.cur,s=this.target;for(const o of["sat","vig","glitch","bright","contrast","wave","bloom"])n[o]+=(s[o]-n[o])*e;for(let o=0;o<3;o++)n.tint[o]+=(s.tint[o]-n.tint[o])*e;this.flash=Math.max(0,this.flash-t*2.5);const a=this.grade.uniforms;a.uSat.value=n.sat,a.uTint.value.set(n.tint[0],n.tint[1],n.tint[2]),a.uVig.value=n.vig,a.uGlitch.value=Se.reduceFlash?Math.min(n.glitch,.25):n.glitch,a.uBright.value=n.bright,a.uContrast.value=n.contrast*(Se.contrast?1.12:1),a.uWave.value=n.wave,a.uTime.value=this.time,a.uFlash.value=Se.reduceFlash?this.flash*.25:this.flash,this.bloom.strength=n.bloom,this.composer.render(t)}snapshot(t=192){this.composer.render(0);const e=document.createElement("canvas");e.width=t,e.height=Math.round(t*this.H/this.W);const n=e.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.canvas,0,0,e.width,e.height),e.toDataURL("image/jpeg",.7)}}const fn=16,_0=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function fe(i,t,e=0){let n=i*374761393+t*668265263+e*982451653|0;return n=(n^n>>13)*1274126177|0,((n^n>>16)>>>0)/4294967295}function Ha(i,t,e,n=0){const s=Math.floor(i),a=Math.floor(t),o=i-s,l=t-a,r=v=>(v%e+e)%e,c=o*o*(3-2*o),h=l*l*(3-2*l),u=fe(r(s),r(a),n),d=fe(r(s+1),r(a),n),g=fe(r(s),r(a+1),n),p=fe(r(s+1),r(a+1),n);return u+(d-u)*c+(g-u)*h+(u-d-g+p)*c*h}function ge(i,t,e,n=0){return Ha(i/e*4,t/e*4,4,n)*.55+Ha(i/e*8,t/e*8,8,n+1)*.3+Ha(i/e*16,t/e*16,16,n+2)*.15}const Pc=i=>{const t=parseInt(i,16);return[t>>16,t>>8&255,t&255]},ae=i=>i.split(" ").map(Pc),Un={wood:ae("2e1f15 45301f 5a4029 6e5133 82623f 98764d"),floor:ae("3d2817 53371f 684628 7c5631 8f673c"),darkwood:ae("1c130e 2a1c14 38261a 453021 543b28"),velvet:ae("3a0810 560c18 721022 8e1830 a82840"),plaster:ae("8a7a68 9c8c78 ad9d88 bcae98 cabda8"),stone:ae("3c3a37 524f4a 69655e 807b72 978f84"),brick:ae("3a1c18 54261e 6e3226 86402e 9a5038"),gold:ae("5a4010 86641c b08a2c d4ae48 f0d478"),carpet:ae("4a0c14 62101c 7a1626 8e2030"),metal:ae("23262c 343841 484e59 5e6673 78818f"),black:ae("0c0a0c 141216 1c1a20 24222a"),neon:ae("0a0a18 12122a 1c1c40 2a2a5a"),asphalt:ae("16181c 1e2126 282c33 343943 444a56"),grass:ae("1f2e18 283a1e 334823 3e5629 4b6431"),dirt:ae("2b2019 35281e 403024 4b392a 574332"),paper:ae("c9b88a d6c79a e2d5ac ecdfbc f4eacb"),white:ae("b8b8c4 cacad4 dadae2 e8e8ee f4f4f8"),tileb:ae("18181c 26262c"),concrete:ae("4a4a4e 5a5a5e 6a6a6e 7a7a7e"),schoolfloor:ae("a88a5a b89a68 c8aa78 d6ba88"),pink:ae("c85a90 d870a4 e888b8 f4a4cc"),sky:ae("6a9ad8 82aee4 9cc2ee b8d6f6"),night:ae("0a0e1c 101628 182036 222c48"),green:ae("24402e 2e5038 3a6244 48745a"),blue:ae("1a2440 24325a 304274 3e548e")},ts=new Map;function Lc(i,t=!0){const e=new Sc(i);return e.magFilter=Pe,e.minFilter=Pe,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=qs),e.colorSpace=Ke,e}const v0={floor:{size:64,ramp:"floor",fn:(i,t,e)=>{const n=Math.floor(t/8),s=n*23%32,a=(i+s)%32;return t%8===0||a===0?.05:.35+ge(i*3,t+n*40,e,n)*.55+fe(Math.floor((i+s)/32),n)*.2}},parquet:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(i/16),s=Math.floor(t/16),a=(n+s)%2,o=a?i%16:t%16,l=a?t%4:i%4;return o===0||l===0?.1:.4+ge(a?i:t*3,a?t*3:i,e,3)*.5+a*.08}},wood:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(t/8);return t%8===0?.05:.3+ge(i*2,t+n*30,e,n+50)*.6}},darkwood:{size:32,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+ge(i+n*30,t*2,e,n+60)*.6}},stage:{size:64,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+ge(i+n*30,t*3,e,n)*.6}},woodwall:{size:32,ramp:"darkwood",fn:(i,t,e)=>i%16===0||t%32===31?.02:i%16===1?.9:.35+ge(i*2,t,e,5)*.5},velvet:{size:32,ramp:"velvet",fn:(i,t)=>.5+Math.sin(i/32*Math.PI*6)*.42+fe(i,t)*.08},plaster:{size:64,ramp:"plaster",fn:(i,t,e)=>.3+ge(i,t,e,7)*.6},wallpaper:{size:32,ramp:"velvet",dither:.1,fn:(i,t)=>{const e=i%16-8,n=(t+Math.floor(i/16)%2*8)%16-8,s=Math.abs(e)+Math.abs(n);return s<3?.75:s<5?.15:.35+fe(i,t)*.1}},wallgreen:{size:32,ramp:"green",dither:.1,fn:(i,t)=>{const e=i%16-8,n=t%16-8,s=Math.abs(e)+Math.abs(n);return i%16===0?.1:s<3?.85:.4+fe(i,t)*.15}},brick:{size:32,ramp:"brick",fn:(i,t,e)=>{const n=Math.floor(t/8),s=(i+n%2*8)%16;return t%8===0||s===0?[.3,Un.stone]:.3+fe(Math.floor((i+n%2*8)/16),n)*.45+ge(i,t,e,2)*.25}},stone:{size:32,ramp:"stone",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?.02:.3+fe(Math.floor((i+n%2*9)/18),n,4)*.4+ge(i,t,e,9)*.3}},gold:{size:16,ramp:"gold",fn:(i,t)=>.5+Math.sin((i+t)/16*Math.PI*2)*.35+fe(i,t)*.15},carpet:{size:32,ramp:"carpet",dither:.4,fn:(i,t)=>Math.min(i%32,31-i%32)<2?[.7,Un.gold]:.4+fe(i,t)*.4},metal:{size:32,ramp:"metal",fn:(i,t,e)=>i%32===0||t%32===0?.05:(i%32===3||i%32===28)&&(t%32===3||t%32===28)?.95:.45+ge(i*4,t,e,11)*.35},black:{size:16,ramp:"black",fn:(i,t)=>.3+fe(i,t)*.5},neon:{size:32,ramp:"neon",dither:.05,fn:(i,t)=>i%16===0||t%16===0?[.9,[[30,220,230]]]:.3+fe(i,t)*.2},asphalt:{size:64,ramp:"asphalt",fn:(i,t,e)=>{const n=ge(i,t,e,13);return n>.62?.95:.2+n*.6}},cobble:{size:32,ramp:"asphalt",fn:(i,t)=>{const e=Math.floor(t/8),n=(i+e%2*5)%10;return t%8===0||n===0?.02:.35+fe(Math.floor((i+e%2*5)/10),e,6)*.6}},grass:{size:64,ramp:"grass",dither:.35,fn:(i,t,e)=>.2+ge(i,t,e,17)*.6+(fe(i,t)>.9?.25:0)},dirt:{size:64,ramp:"dirt",dither:.3,fn:(i,t,e)=>.2+ge(i,t,e,19)*.7},paper:{size:64,ramp:"paper",dither:.3,fn:(i,t,e)=>.35+ge(i,t,e,23)*.5+(fe(i,t)>.97?-.3:0)},paperstone:{size:32,ramp:"paper",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?[.4,Un.wood]:.3+fe(Math.floor((i+n%2*9)/18),n,4)*.5}},white:{size:32,ramp:"white",fn:(i,t,e)=>.5+ge(i,t,e,29)*.4},gloss:{size:32,ramp:"white",dither:.1,fn:(i,t)=>i%32===0||t%32===0?.1:.75+((i+t)%32<4?.25:0)},checker:{size:32,ramp:"tileb",dither:0,fn:(i,t)=>(Math.floor(i/16)+Math.floor(t/16))%2?[.5,Un.white]:.5},concrete:{size:64,ramp:"concrete",fn:(i,t,e)=>.3+ge(i,t,e,31)*.6},schoolfloor:{size:32,ramp:"schoolfloor",fn:(i,t,e)=>t%16===0||(i+Math.floor(t/16)*16)%32===0?.1:.45+ge(i*3,t,e,37)*.45},schoolwall:{size:32,ramp:"white",dither:.15,fn:(i,t)=>.65+fe(i,t)*.2},led:{size:16,ramp:"pink",dither:0,fn:(i,t)=>i%4===0||t%4===0?[.2,Un.black]:.3+fe(Math.floor(i/4),Math.floor(t/4),2)*.7},sky:{size:64,ramp:"sky",dither:.4,fn:(i,t,e)=>.2+(1-t/e)*.6+ge(i,t,e,41)*.2},night:{size:64,ramp:"night",dither:.4,fn:(i,t,e)=>fe(i,t)>.992?[.9,Un.white]:.2+t/e*.5+ge(i,t,e,43)*.2},blue:{size:32,ramp:"blue",fn:(i,t,e)=>.3+ge(i,t,e,47)*.6},mirror:{size:32,ramp:"white",dither:.2,fn:(i,t)=>{const e=(i+t*2)%32;return e<3?.95:e<14?.5:.3}}};function Dc(i,t){const e=i+(t||"");let n=ts.get(e);if(n)return n;const s=v0[i];if(!s)return console.warn("[tex] нет текстуры",i),Dc("plaster");const a=s.size,o=document.createElement("canvas");o.width=o.height=a;const l=o.getContext("2d"),r=l.createImageData(a,a),c=t?Pc(t.replace("#","")):null;for(let h=0;h<a;h++)for(let u=0;u<a;u++){let d=s.fn(u,h,a),g=Un[s.ramp],p;Array.isArray(d)?(p=d[0],g=d[1]):p=d,p+=(_0[(h&3)*4+(u&3)]/16-.5)*(s.dither??.22);let v=g[Math.max(0,Math.min(g.length-1,Math.floor(p*g.length)))];if(c&&g===Un[s.ramp]){const m=(v[0]*.3+v[1]*.6+v[2]*.1)/160;v=[Math.min(255,c[0]*m),Math.min(255,c[1]*m),Math.min(255,c[2]*m)]}const f=(h*a+u)*4;r.data[f]=v[0],r.data[f+1]=v[1],r.data[f+2]=v[2],r.data[f+3]=255}return l.putImageData(r,0,0),n=Lc(o),n.unit=a/fn,ts.set(e,n),n}function ia(i,t,e,n){if(n&&ts.has(n))return ts.get(n);const s=document.createElement("canvas");s.width=i,s.height=t;const a=s.getContext("2d");a.imageSmoothingEnabled=!1,e(a,i,t);const o=Lc(s,!1);return n&&ts.set(n,o),o}const x0='"Pixelify Sans", monospace';function Or(i,t,e,n,s={}){const a=s.size||8;i.font=`${a}px ${s.font||x0}`,i.fillStyle=s.col||"#111",i.textAlign=s.align||"left",i.textBaseline="top";const o=[];for(const l of t.split(`
`)){if(!s.w){o.push(l);continue}let r="";for(const c of l.split(" ")){const h=r?r+" "+c:c;i.measureText(h).width>s.w&&r?(o.push(r),r=c):r=h}o.push(r)}return o.forEach((l,r)=>i.fillText(l,e,n+r*(s.lh||a+2))),o.length*(s.lh||a+2)}const C=(i,t,e,n,s,a)=>{i.fillStyle=a,i.fillRect(t,e,n,s)};function M0(i,t="",e={}){const n=e.w||40,s=e.h||56;return ia(n,s,a=>{C(a,0,0,n,s,e.frame||"#3a2a14"),C(a,1,1,n-2,s-2,e.bg||"#e2d5ac"),e.face&&(C(a,n/2-7,6,14,16,e.face),C(a,n/2-9,4,18,6,"#2a1512"),C(a,n/2-9,8,3,16,"#2a1512"),C(a,n/2+6,8,3,16,"#2a1512"),C(a,n/2-6,22,12,6,"#a3122a"));const o=e.face?30:5,l=Or(a,i,n/2,o,{size:e.size||8,col:e.fg||"#5a0c18",w:n-6,align:"center"});t&&Or(a,t,n/2,o+l+2,{size:6,col:"#3a2a14",w:n-6,align:"center",lh:7})},"poster|"+i+t+JSON.stringify(e))}const Br={tree:{w:48,h:72,draw:i=>{C(i,21,40,6,32,"#2c2019"),C(i,23,40,2,32,"#3a2b21");for(const[t,e,n,s,a]of[[6,8,36,30,"#1c2a16"],[2,18,44,20,"#26381b"],[10,4,26,14,"#324820"],[8,14,18,12,"#405a27"],[26,22,14,10,"#324820"]])C(i,t,e,n,s,a)}},pine:{w:40,h:80,draw:i=>{C(i,18,60,4,20,"#1e1612");for(let t=0;t<6;t++)C(i,16-t*3,6+t*10,8+t*6,12,t%2?"#16241d":"#1d3024"),C(i,17-t*3,6+t*10,3,2,"#263c2c")}},bush:{w:24,h:16,draw:i=>{C(i,2,5,20,11,"#26381b"),C(i,5,2,14,6,"#324820"),C(i,6,3,4,2,"#405a27")}},sakura:{w:48,h:72,draw:i=>{C(i,21,40,6,32,"#4a382a");for(const[t,e,n,s,a]of[[6,8,36,28,"#e888b8"],[2,18,44,18,"#f4a4cc"],[10,4,26,14,"#f8c0dc"],[8,14,12,8,"#fde0ee"],[28,24,12,8,"#d870a4"]])C(i,t,e,n,s,a)}},lamp:{w:12,h:44,draw:i=>{C(i,5,10,2,32,"#2a2a2e"),C(i,2,42,8,2,"#2a2a2e"),C(i,1,2,10,9,"#f4d890"),C(i,2,1,8,1,"#c8a850"),C(i,3,4,6,5,"#fff4c8")}},streetlamp:{w:14,h:64,draw:i=>{C(i,6,10,2,54,"#1a1a1e"),C(i,3,62,8,2,"#1a1a1e"),C(i,2,2,10,9,"#f0f0d8"),C(i,1,0,12,2,"#1a1a1e")}},chair:{w:14,h:22,draw:i=>{C(i,2,0,10,12,"#721022"),C(i,1,0,1,22,"#86641c"),C(i,12,0,1,22,"#86641c"),C(i,1,12,12,3,"#8e1830"),C(i,3,2,8,8,"#8e1830")}},plant:{w:16,h:28,draw:i=>{C(i,4,20,8,8,"#7a4a2a"),C(i,7,8,2,12,"#2e5038"),C(i,2,4,5,10,"#3a6244"),C(i,9,2,5,12,"#48745a"),C(i,5,0,4,8,"#3a6244")}},bust:{w:16,h:30,draw:i=>{C(i,2,20,12,10,"#69655e"),C(i,1,19,14,2,"#807b72"),C(i,4,4,8,10,"#cabda8"),C(i,3,14,10,5,"#bcae98"),C(i,4,2,8,3,"#ad9d88"),C(i,6,8,1,1,"#555"),C(i,9,8,1,1,"#555"),C(i,6,11,4,1,"#8a7a68")}},bustfun:{w:16,h:30,draw:i=>{Br.bust.draw(i),C(i,5,7,3,3,"#fff"),C(i,9,7,3,3,"#fff"),C(i,6,8,1,1,"#000"),C(i,10,8,1,1,"#000"),C(i,5,11,6,1,"#a22"),C(i,6,12,4,1,"#a22"),C(i,3,0,10,3,"#e84a6f"),C(i,6,-1,4,2,"#f2c230")}},masks:{w:30,h:14,draw:i=>{for(const[t,e,n]of[[0,"#f2c230",0],[10,"#6a8ad0",1],[20,"#d86a8a",2]])C(i,t+1,1,8,11,e),C(i,t+2,0,6,1,e),C(i,t+2,12,6,1,e),C(i,t+2,4,2,2,"#111"),C(i,t+6,4,2,2,"#111"),n===0&&(C(i,t+2,8,6,1,"#111"),C(i,t+3,9,4,1,"#111")),n===1&&(C(i,t+3,8,4,1,"#111"),C(i,t+2,9,1,1,"#111"),C(i,t+7,9,1,1,"#111")),n===2&&C(i,t+3,9,4,1,"#111")}},ladder:{w:20,h:60,draw:i=>{C(i,2,0,2,60,"#5a4029"),C(i,16,0,2,60,"#5a4029");for(let t=0;t<9;t++)C(i,2,4+t*6,16,2,"#6e5133")}},bridgecut:{w:72,h:30,draw:i=>{C(i,0,8,72,5,"#5a4029");for(let t=0;t<9;t++)C(i,2+t*8,0,3,30,"#45301f");C(i,0,0,72,3,"#6e5133"),C(i,30,13,12,17,"#45301f")}},marionette:{w:16,h:30,draw:i=>{C(i,2,0,12,2,"#5a4029"),C(i,7,0,2,3,"#5a4029");for(const t of[3,8,12])C(i,t,2,1,8,"#ddd");C(i,5,8,6,6,"#e8d8c0"),C(i,5,8,3,6,"#f4ecd8"),C(i,6,10,1,1,"#111"),C(i,9,10,1,1,"#111"),C(i,5,14,6,8,"#a3122a"),C(i,5,14,3,8,"#2f7f82"),C(i,3,14,2,7,"#e8d8c0"),C(i,11,14,2,7,"#e8d8c0"),C(i,5,22,2,7,"#333"),C(i,9,22,2,7,"#333"),C(i,6,15,4,2,"#f4d060")}},bookstand:{w:16,h:28,draw:i=>{C(i,7,10,2,16,"#2a1c14"),C(i,3,26,10,2,"#2a1c14"),C(i,1,4,14,7,"#4a0c14"),C(i,2,5,5,5,"#e2d5ac"),C(i,9,5,5,5,"#e2d5ac"),C(i,7,4,2,7,"#86641c")}},candle:{w:6,h:16,draw:i=>{C(i,2,6,2,8,"#e8e0c8"),C(i,1,14,4,2,"#86641c"),C(i,2,2,2,4,"#ffd060"),C(i,2,1,1,2,"#fff4c8")}},flowerpot:{w:12,h:16,draw:i=>{C(i,2,9,8,7,"#8a4a2a"),C(i,1,8,10,2,"#9a5a3a"),C(i,5,3,2,6,"#2e5038"),C(i,3,0,6,4,"#d86a8a"),C(i,5,1,2,2,"#f2c230")}},umbrella:{w:22,h:26,draw:i=>{C(i,10,6,2,18,"#333"),C(i,8,24,3,2,"#333"),C(i,1,4,20,5,"#e84a6f"),C(i,4,1,14,3,"#f06a88"),C(i,9,0,4,1,"#f06a88");for(const t of[1,7,13,19])C(i,t,9,2,1,"#c03050")}},cake:{w:26,h:26,draw:i=>{C(i,2,14,22,10,"#f4e8d8"),C(i,2,18,22,2,"#e888b8"),C(i,4,10,18,5,"#fff8f0"),C(i,0,24,26,2,"#d4ae48");for(let t=0;t<9;t++)C(i,3+t*2+t%2,5+t%2*2,1,6,["#5fd0c8","#f2c230","#e84a6f"][t%3]),C(i,3+t*2+t%2,3+t%2*2,1,2,"#ffd060");for(let t=0;t<9;t++)C(i,4+t*2,11,1,3,["#f2c230","#e84a6f","#5fd0c8"][t%3]),C(i,4+t*2,9,1,2,"#ffd060")}},cakeout:{w:26,h:26,draw:i=>{Br.cake.draw(i);for(let t=0;t<9;t++)C(i,3+t*2+t%2,3+t%2*2,1,2,"#888"),C(i,4+t*2,9,1,2,"#888")}},bouquet:{w:24,h:30,draw:i=>{C(i,8,16,8,12,"#e2d5ac"),C(i,10,28,4,2,"#a3122a"),C(i,9,20,6,2,"#a3122a");const t=["#e84a6f","#f2c230","#f8c0dc","#fff","#c03050","#ff9a3c"];for(let e=0;e<14;e++){const n=2+e*7%18,s=1+e*5%13;C(i,n,s,5,5,t[e%6]),C(i,n+2,s+2,1,1,"#5a4010")}C(i,4,13,3,4,"#2e5038"),C(i,17,12,3,5,"#3a6244")}},mic:{w:8,h:34,draw:i=>{C(i,3,6,2,26,"#555"),C(i,1,32,6,2,"#333"),C(i,2,0,4,6,"#888"),C(i,2,1,4,1,"#bbb")}},speaker:{w:16,h:26,draw:i=>{C(i,0,0,16,26,"#18181c"),C(i,1,1,14,24,"#26262c"),C(i,4,3,8,8,"#111"),C(i,6,5,4,4,"#444"),C(i,3,13,10,10,"#111"),C(i,6,16,4,4,"#444")}},stagelight:{w:14,h:16,draw:i=>{C(i,2,2,10,9,"#222"),C(i,4,11,6,3,"#fff4c8"),C(i,6,0,2,2,"#444"),C(i,1,5,1,3,"#555"),C(i,12,5,1,3,"#555")}},stall:{w:56,h:52,draw:i=>{C(i,2,14,2,38,"#5a4029"),C(i,52,14,2,38,"#5a4029");for(let t=0;t<7;t++)C(i,t*8,2,8,12,t%2?"#e84a6f":"#fff8f0");for(let t=0;t<7;t++)C(i,t*8+1,14,6,2,t%2?"#c03050":"#ddd");C(i,2,34,52,18,"#6e5133"),C(i,2,32,52,3,"#98764d");for(let t=0;t<5;t++)C(i,8+t*9,26,5,6,["#f2c230","#e84a6f","#5fd0c8","#f8c0dc","#ff9a3c"][t]);for(let t=0;t<6;t++)C(i,5+t*9,17,3,4,["#f2c230","#e84a6f"][t%2])}},lantern:{w:10,h:14,draw:i=>{C(i,4,0,2,2,"#333"),C(i,1,2,8,10,"#e84a6f"),C(i,3,3,4,8,"#ffd060"),C(i,2,12,6,1,"#333")}},gear:{w:14,h:14,draw:i=>{C(i,3,3,8,8,"#b08a2c"),C(i,5,0,4,14,"#b08a2c"),C(i,0,5,14,4,"#b08a2c"),C(i,5,5,4,4,"#3a2a14"),C(i,1,1,3,3,"#86641c"),C(i,10,1,3,3,"#86641c"),C(i,1,10,3,3,"#86641c"),C(i,10,10,3,3,"#86641c")}},key:{w:12,h:8,draw:i=>{C(i,0,1,5,6,"#d4ae48"),C(i,1,3,2,2,"#000"),C(i,5,3,7,2,"#d4ae48"),C(i,9,5,1,2,"#d4ae48"),C(i,11,5,1,2,"#d4ae48"),i.clearRect(1,3,2,2)}},weight:{w:14,h:14,draw:i=>{C(i,1,4,12,10,"#484e59"),C(i,3,2,8,3,"#5e6673"),C(i,5,0,4,3,"#343841"),C(i,2,5,2,8,"#78818f")}},basket:{w:18,h:16,draw:i=>{C(i,1,6,16,10,"#8a6a3a");for(let t=0;t<4;t++)C(i,1,7+t*3,16,1,"#6a4a2a");C(i,0,5,18,2,"#a88a4a"),C(i,2,0,1,6,"#f0d98a"),C(i,15,0,1,6,"#f0d98a")}},hook:{w:10,h:12,draw:i=>{C(i,3,0,4,3,"#484e59"),C(i,4,3,2,5,"#78818f"),C(i,4,8,5,2,"#78818f"),C(i,8,6,1,2,"#78818f")}},slot:{w:16,h:30,draw:i=>{C(i,0,0,16,30,"#3a1a5a"),C(i,1,1,14,6,"#ff4fa0"),C(i,2,9,12,8,"#111");for(let t=0;t<3;t++)C(i,3+t*4,10,3,6,["#f2c230","#40e0d0","#f2c230"][t]);C(i,2,19,12,2,"#40e0d0"),C(i,4,23,8,5,"#222")}},holo:{w:24,h:30,draw:i=>{i.globalAlpha=.7,C(i,0,0,24,30,"#0a3a4a");for(let t=0;t<8;t++)C(i,2,2+t*3.5,4+t*7%16,1,"#40e0d0");C(i,14,16,8,10,"#40e0d0"),i.globalAlpha=1}},typewriter:{w:16,h:10,draw:i=>{C(i,1,4,14,6,"#2a2a2e"),C(i,3,0,10,4,"#e8e8e8");for(let t=0;t<5;t++)C(i,3+t*2,6,1,1,"#aaa");for(let t=0;t<5;t++)C(i,4+t*2,8,1,1,"#aaa")}},cam:{w:12,h:10,draw:i=>{C(i,0,2,12,8,"#222"),C(i,2,0,4,2,"#333"),C(i,4,3,5,5,"#557"),C(i,5,4,3,3,"#9bd"),C(i,10,3,1,1,"#f33")}},filmcam:{w:22,h:36,draw:i=>{C(i,4,6,14,10,"#2a2a2e"),C(i,0,8,4,6,"#444"),C(i,6,0,5,6,"#3a3a40"),C(i,12,1,5,5,"#3a3a40"),C(i,10,16,2,6,"#555"),C(i,10,22,1,14,"#555"),C(i,6,22,1,14,"#555"),C(i,15,22,1,14,"#555")}},suitcase:{w:16,h:12,draw:i=>{C(i,0,2,16,10,"#6a6a6a"),C(i,6,0,4,2,"#333"),C(i,0,6,16,1,"#333"),C(i,3,5,2,3,"#bbb"),C(i,11,5,2,3,"#bbb")}},book:{w:10,h:8,draw:i=>{C(i,0,1,10,7,"#4a0c14"),C(i,1,0,8,2,"#e2d5ac"),C(i,3,3,4,2,"#d4ae48")}},wheel:{w:20,h:20,draw:i=>{C(i,2,2,16,16,"#5a4029"),C(i,6,0,8,20,"#5a4029"),C(i,0,6,20,8,"#5a4029"),C(i,5,5,10,10,"#2a1c14"),C(i,9,2,2,16,"#98764d"),C(i,2,9,16,2,"#98764d")}},hoverbike:{w:36,h:18,draw:i=>{C(i,2,8,32,6,"#26262e"),C(i,6,4,14,5,"#ff9a3c"),C(i,20,2,6,6,"#343841"),C(i,0,10,4,3,"#40e0d0"),C(i,4,15,28,2,"#40e0d0"),C(i,28,6,6,3,"#78818f")}},horse:{w:36,h:30,draw:i=>{C(i,6,10,22,10,"#f0f0f0"),C(i,24,2,8,12,"#f0f0f0"),C(i,30,4,5,5,"#e0e0e0"),C(i,8,20,3,10,"#ddd"),C(i,22,20,3,10,"#ddd"),C(i,2,10,4,10,"#e8c36a"),C(i,23,0,3,10,"#e8c36a"),C(i,31,5,1,1,"#111"),C(i,10,9,12,3,"#3a6ab0")}},spotcone:{w:4,h:4,draw:i=>C(i,0,0,4,4,"#fff")}};function b0(i){const t=Br[i];if(!t)throw new Error("Нет реквизита: "+i);const e=ia(t.w,t.h,n=>t.draw(n),"prop|"+i);return e.pw=t.w,e.ph=t.h,e}const Mi="#b9794f",Wa="#c08458",le="#f0cdb0",S0="#eac4a4",yl="#d9a77e",y0=[{id:"varya",name:"Варя",color:"#5fd0c8",pitch:520,skin:Mi,hair:"#5a341f",style:"bob",eyes:"#5b3a1e",h:31,build:"thin",top:"#2f7f82",bottom:"#33293f",trim:"#e8c36a",shoes:"#1c1620",brows:"soft",role:"Режиссёрка",bio:"Завтра ей восемнадцать. Умеет собрать людей вместе — и очень не любит, когда что-то идёт не по плану."},{id:"alla",name:"Алла Ева",color:"#ff5d6c",pitch:500,skin:Mi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#a3122a",bottom:"#8a0f24",skirt:"long",trim:"#e8c36a",shoes:"#3a0a12",acc:["earrings","mole"],brows:"arch",lips:"#b3122e",shadow:"#6b2a55",role:"Прима",bio:"Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много."},{id:"kukolnik",name:"Кукольник",color:"#d8b56a",pitch:180,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:38,build:"mid",top:"#111",bottom:"#111",role:"Художественный руководитель",bio:"Его никто не видел. Он оставляет письма, пометки на полях и распоряжения — всегда вовремя."},{id:"polina",name:"Полина",color:"#c9a7ff",pitch:610,skin:le,hair:"#8c6a45",style:"long",bangs:!0,eyes:"#6b7f9a",h:32,build:"thin",top:"#8f7fc4",bottom:"#3b4a6b",shoes:"#eeeeee",brows:"soft",role:"Подруга",bio:"Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают."},{id:"ruben",name:"Рубен",color:"#ffb057",pitch:240,skin:Wa,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:40,build:"strong",top:"#26262e",bottom:"#2d3440",trim:"#ff9a3c",shoes:"#111",brows:"strict",role:"Друг",bio:"Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать."},{id:"matvey",name:"Матвей",color:"#ff8fd0",pitch:400,skin:S0,hair:"#6a4326",style:"curlyShort",eyes:"#5b3a1e",h:37,build:"thin",top:"#f2c230",bottom:"#3a62c9",trim:"#e84a6f",shoes:"#e84a6f",acc:["freckles","scarf","bracelets","pins"],brows:"soft",role:"Друг",bio:"Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет."},{id:"erika",name:"Эрика",color:"#9fc3e8",pitch:430,skin:le,hair:"#6b452a",style:"ponytail",eyes:"#5b3a1e",h:34,build:"mid",top:"#8a7a5c",bottom:"#2b2f3a",shoes:"#22201f",brows:"soft",role:"Подруга",bio:"Спокойная. Сначала слушает, потом задаёт один вопрос — обычно самый неудобный."},{id:"liza",name:"Лиза",color:"#ffe27a",pitch:640,skin:le,hair:"#f0d98a",style:"fluffy",eyes:"#3f9b57",h:31,build:"thin",top:"#7ec4a4",bottom:"#f3ead8",skirt:"short",shoes:"#8a5a3a",brows:"soft",role:"Подруга",bio:"Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит — кем."},{id:"liza_long",name:"Лиза",color:"#ffe27a",pitch:640,skin:le,hair:"#f0d98a",style:"rapunzel",eyes:"#3f9b57",h:31,build:"thin",top:"#c9a0dc",bottom:"#b58ad0",skirt:"long",shoes:"#8a5a3a",brows:"soft"},{id:"angelina",name:"Ангелина",color:"#ff7ab8",pitch:470,skin:yl,hair:"#0f0d12",style:"longStyled",eyes:"#2a1a14",h:37,build:"thin",top:"#16141c",bottom:"#5a1f3d",skirt:"short",trim:"#d9d9e8",shoes:"#111",acc:["earrings"],brows:"arch",lips:"#b0405a",role:"Подруга",bio:"Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным, — и это не обсуждается."},{id:"artemiy",name:"Артемий",color:"#9ab0c8",pitch:260,skin:le,hair:"#9a7450",style:"short",eyes:"#2a1a14",h:39,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",shoes:"#111",brows:"strict",role:"Одноклассник Матвея",bio:"Выглядит так, будто сейчас сделает замечание. На деле подкармливает школьного кота."},{id:"vasilisa",name:"Василиса",color:"#ffb48a",pitch:480,skin:le,hair:"#c98a52",style:"long",eyes:"#5b6b4a",h:37,build:"thin",top:"#3d5a4a",bottom:"#2c2c34",acc:["camera"],brows:"soft",role:"Актриса труппы"},{id:"dana",name:"Дана",color:"#e8a0ff",pitch:500,skin:Mi,hair:"#2a1a14",style:"long",eyes:"#5b3a1e",h:33,build:"thin",top:"#c23a6a",bottom:"#18161c",skirt:"short",trim:"#f2c230",acc:["earrings"],brows:"arch",lips:"#a8324a",role:"Актриса труппы"},{id:"nina",name:"Нина",color:"#b8c0ff",pitch:540,skin:le,hair:"#121016",style:"long",bangs:!0,eyes:"#3b2a22",h:33,build:"thin",top:"#4a4a6a",bottom:"#23232c",brows:"soft",role:"Актриса труппы"},{id:"anya",name:"Аня",color:"#ffd0a0",pitch:580,skin:le,hair:"#7a6248",style:"twin",eyes:"#6a5238",h:33,build:"mid",top:"#d88a4a",bottom:"#4a5a7a",skirt:"short",brows:"soft",role:"Актриса труппы"},{id:"olya",name:"Оля",color:"#a0e0d0",pitch:520,skin:le,hair:"#2a1e1a",style:"twin",bangs:!0,eyes:"#3b2a22",h:31,build:"mid",top:"#2f4a5a",bottom:"#2a2a33",brows:"strict",role:"Актриса труппы"},{id:"natasha",name:"Мама Наташа",color:"#ffd6c0",pitch:420,skin:le,hair:"#9a7a58",style:"bob",eyes:"#2a1a14",h:37,build:"mid",top:"#7a9ab8",bottom:"#33384a",skirt:"long",brows:"soft"},{id:"sasha",name:"Саша",color:"#c0d6e8",pitch:220,skin:le,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:39,build:"mid",top:"#4a5a4a",bottom:"#2c2c34",brows:"soft"},{id:"maxim",name:"Папа Максим",color:"#ffc070",pitch:250,skin:Wa,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:33,build:"mid",top:"#c2452d",bottom:"#2d3440",brows:"arch"},{id:"nastya",name:"Настя",color:"#d8c8e8",pitch:440,skin:le,hair:"#9a7a58",style:"long",eyes:"#5b3a1e",h:37,build:"thin",top:"#b8a8c8",bottom:"#4a4458",skirt:"long",brows:"soft"},{id:"vasya",name:"Вася",color:"#a8e0ff",pitch:620,skin:le,hair:"#6a4630",style:"bob",eyes:"#5b3a1e",h:30,build:"thin",top:"#e8884a",bottom:"#3a4a6a",brows:"soft"},{id:"sofa",name:"Софа",color:"#ffc0e0",pitch:540,skin:le,hair:"#a88a5a",style:"longStyled",eyes:"#5a6a7a",h:33,build:"thin",top:"#e8b0c8",bottom:"#f0e8e8",skirt:"short",acc:["earrings"],brows:"arch",lips:"#c84a6a",shadow:"#b86a9a"},{id:"katya",name:"Катя",color:"#ffb090",pitch:560,skin:le,hair:"#c8602a",style:"bobLong",eyes:"#5a7a5a",h:37,build:"big",top:"#6a9a7a",bottom:"#4a4a5a",brows:"soft"},{id:"owner",name:"Хозяин",color:"#b0b0b0",pitch:150,skin:"#e8e4d8",hair:"#111",style:"none",eyes:"#111",h:40,build:"strong",top:"#3a2a22",bottom:"#1c1614",acc:["maskface","hat","coat"],brows:"strict"},{id:"nol",name:"Ноль",color:"#7af0ff",pitch:560,skin:le,hair:"#40e0d0",style:"short",eyes:"#222",h:33,build:"thin",top:"#22303a",bottom:"#151a22",trim:"#40e0d0",acc:["visor"],brows:"soft"},{id:"kasseta",name:"Кассета",color:"#ff7ad0",pitch:330,skin:Wa,hair:"#ff4fa0",style:"bob",eyes:"#222",h:36,build:"mid",top:"#5a2a6a",bottom:"#1a1a22",trim:"#ff4fa0",acc:["headphones"],brows:"arch"},{id:"guard",name:"Охранник",color:"#ff5050",pitch:140,skin:"#8a94a0",hair:"#444",style:"none",eyes:"#f33",h:38,build:"strong",top:"#39424e",bottom:"#252a33",trim:"#ff3030",acc:["visor"],brows:"strict"},{id:"teacher",name:"Руководительница драмкружка",color:"#ff5d6c",pitch:500,skin:Mi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#44375a",bottom:"#2a2238",skirt:"long",acc:["glasses","mole"],brows:"arch",lips:"#b3122e"},{id:"barman",name:"Сол, бармен",color:"#cccccc",pitch:200,skin:"#b8b8b8",hair:"#333",style:"short",eyes:"#222",h:38,build:"big",top:"#e8e8e8",bottom:"#222",trim:"#111",brows:"strict"},{id:"singer",name:"Мэй, певица",color:"#e8e8e8",pitch:460,skin:"#d8d8d8",hair:"#1a1a1a",style:"longStyled",eyes:"#222",h:36,build:"thin",top:"#bbbbbb",bottom:"#aaaaaa",skirt:"long",acc:["earrings"],brows:"arch",lips:"#555"},{id:"director",name:"Грей, режиссёр",color:"#b0b0b0",pitch:230,skin:"#c8c8c8",hair:"#888",style:"short",eyes:"#222",h:37,build:"thin",top:"#555",bottom:"#333",acc:["glasses","scarf"],brows:"strict"},{id:"collector",name:"Аркадий Вейс",color:"#d0d0d0",pitch:170,skin:"#cfcfcf",hair:"#ddd",style:"short",eyes:"#222",h:38,build:"big",top:"#2a2a2a",bottom:"#1c1c1c",trim:"#999",brows:"strict"},{id:"lydia",name:"Лидия Вронская",color:"#ffffff",pitch:480,skin:"#e0e0e0",hair:"#2a2a2a",style:"bob",eyes:"#222",h:34,build:"thin",top:"#777",bottom:"#444",acc:["hat"],brows:"soft",lips:"#555"},{id:"cashier",name:"Кассир",color:"#bbbbbb",pitch:300,skin:"#c0c0c0",hair:"#555",style:"short",eyes:"#222",h:35,build:"mid",top:"#444",bottom:"#333",acc:["hat"],brows:"soft"},{id:"fairy",name:"Фея-крёстная",color:"#c8a0ff",pitch:600,skin:le,hair:"#e8e0f0",style:"bun",eyes:"#6a5a9a",h:33,build:"big",top:"#b89ae0",bottom:"#9a7ac8",skirt:"long",acc:["wings","glasses"],brows:"arch"},{id:"prince",name:"Принц",color:"#8ab8ff",pitch:280,skin:le,hair:"#e0b860",style:"bob",eyes:"#3a6ab0",h:39,build:"mid",top:"#3a6ab0",bottom:"#f0f0f0",trim:"#e8c36a",acc:["crown","cape"],brows:"soft"},{id:"narrator",name:"Рассказчик",color:"#e8d8a8",pitch:190,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:30,build:"mid",top:"#000",bottom:"#000"},{id:"glyants",name:"Директор Глянц",color:"#ff9ad8",pitch:210,skin:le,hair:"#e8e8f0",style:"short",eyes:"#3a3a4a",h:38,build:"thin",top:"#f0f0f8",bottom:"#f0f0f8",trim:"#ff4fa0",acc:["glasses"],brows:"arch"},{id:"trainer",name:"Тренер Ми",color:"#a0f0c0",pitch:520,skin:yl,hair:"#222",style:"ponytail",eyes:"#222",h:34,build:"mid",top:"#30c090",bottom:"#222",brows:"strict"},{id:"stylist",name:"Ассистентка",color:"#ff5d6c",pitch:500,skin:Mi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#f0f0f8",bottom:"#ff4fa0",skirt:"short",acc:["earrings","mole","visor"],brows:"arch",lips:"#b3122e"},{id:"hostess",name:"Леди Фортуна",color:"#ff5d6c",pitch:500,skin:Mi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#e8c36a",bottom:"#c9a040",skirt:"long",acc:["earrings","mole","maskhalf"],brows:"arch",lips:"#b3122e"},{id:"student",name:"Школьник",color:"#cccccc",pitch:400,skin:le,hair:"#3a2a22",style:"short",eyes:"#333",h:34,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",brows:"soft"},{id:"student2",name:"Школьница",color:"#cccccc",pitch:560,skin:le,hair:"#5a3a2a",style:"twin",eyes:"#333",h:32,build:"thin",top:"#2c3550",bottom:"#8a2a3a",skirt:"short",trim:"#f0f0f0",brows:"soft"},{id:"dancer",name:"Трейни",color:"#cccccc",pitch:500,skin:le,hair:"#ffb0d8",style:"bob",eyes:"#333",h:33,build:"thin",top:"#f0f0f8",bottom:"#ff9ad8",skirt:"short",brows:"soft"},{id:"courtier",name:"Придворный",color:"#cccccc",pitch:300,skin:le,hair:"#e8e8e8",style:"bun",eyes:"#333",h:35,build:"mid",top:"#6a2a3a",bottom:"#3a1a22",trim:"#e8c36a",brows:"soft"}],an={};for(const i of y0)an[i.id]=i;function ln(i,t,e){return an[t]||(an[t]={...an[i],...e,id:t}),an[t]}ln("varya","varya_noir",{top:"#6a6a6a",bottom:"#2a2a2a",acc:["hat"]});ln("erika","erika_noir",{top:"#9a9a8a",bottom:"#2a2a2a",acc:["hat","coat"]});ln("ruben","ruben_heist",{top:"#16161c",bottom:"#1c2028",trim:"#40e0d0",acc:["visor"]});ln("matvey","matvey_school",{top:"#2c3550",bottom:"#2a2a33",trim:"#f2c230",acc:["freckles","scarf","bracelets","pins"]});ln("angelina","angelina_idol",{top:"#f0f0f8",bottom:"#ff9ad8",trim:"#ff4fa0"});ln("angelina","angelina_own",{top:"#1a1420",bottom:"#7a1f3d",trim:"#e8c36a"});ln("alla","queen",{name:"Королева",top:"#8a0f24",bottom:"#6a0a1a",trim:"#e8c36a",acc:["earrings","mole","crown","cape"]});ln("varya","girl",{name:"Молодая Девушка",top:"#f3ead8",bottom:"#e8dcc0",skirt:"long",trim:"#5fd0c8"});ln("varya","varya_queen",{name:"Варя",top:"#8a0f24",bottom:"#6a0a1a",skirt:"long",trim:"#e8c36a"});ln("polina","polina_coat",{top:"#e8c230",bottom:"#3b4a6b"});ln("varya","varya_pj",{top:"#d8c8e8",bottom:"#b8a8d0"});const as=32,Fi=48,es=["idle0","idle1","walk0","walk1","walk2","walk3","arms","bow","fear","sit","point","dance1","dance2","lie"],El=["f","b","s"],qa=[22,17,20];function re(i,t){const e=parseInt(i.slice(1),16);let n=e>>16,s=e>>8&255,a=e&255;return t<0?(n*=1+t,s*=1+t,a*=1+t*.8):(n+=(255-n)*t,s+=(255-s)*t,a+=(255-a)*t),`rgb(${n|0},${s|0},${a|0})`}function j(i,t,e,n,s,a){n<=0||s<=0||(i.fillStyle=a,i.fillRect(Math.round(t),Math.round(e),Math.round(n),Math.round(s)))}function he(i,t,e,n,s,a){j(i,t,e,n,s,a),n>=3&&(j(i,t,e,1,s,re(a,.16)),j(i,t+n-1,e,1,s,re(a,-.22))),s>=4&&j(i,t,e+s-1,n,1,re(a,-.25))}function E0(i,t,e,n,s,a){i.save(),i.translate(t,e);const o=16,l=47,r=n.h,c=n.build==="thin"?7:n.build==="mid"?8:(n.build==="strong",11),h=n.build==="thin"?2:3;let u=Math.round(r*.37),d=Math.round(r*.33);const g=9,p=n.acc||[],v=s.startsWith("walk")?parseInt(s[4]):-1;let f=s==="idle1"?1:v===1||v===3?-1:0,m=0,x="down",y=!1;(s==="arms"||s==="dance1")&&(x="up"),s==="dance2"&&(x="side",f=-1),s==="dance1"&&(f=1),s==="bow"&&(m=3,f=3,x="side"),s==="fear"&&(x="face",f=1),s==="point"&&(x="point"),s==="sit"&&(y=!0,u=Math.round(u*.45)),s==="lie"&&(i.translate(o,l-4),i.rotate(-Math.PI/2),i.translate(-o-10,-l+12));const b=l-u,R=b-d+f,T=R-g+(m?1:0),A=a==="s",L=a==="b",P=o-4+(A?1:0)+m,_=n.hair,S=re(_,-.3),G=re(_,.22),B=n.style,z={long:16,longStyled:17,glam:19,rapunzel:r-9,bob:9,bobLong:11,curlyMid:10,fluffy:7,twin:6,ponytail:6,short:4,curlyShort:5,bun:5}[B]||0,O=B==="glam"||B==="fluffy"||B==="curlyMid"||B==="rapunzel"?1:0;if(!A&&!L&&z>8&&(he(i,P-1-O,T+2,10+O*2,Math.min(z,r-2),_),(B==="glam"||B==="rapunzel")&&(j(i,P-2-O,T+8,1,z-10,S),j(i,P+9+O,T+10,1,z-12,S))),A&&z>8&&he(i,P-2-O,T+2,5+O,z,_),p.includes("cape")){const it=c+4;he(i,o-it/2+m,R+1,it,d+u-3,re(n.trim||"#a22",-.1))}p.includes("wings")&&!A&&(j(i,o-c/2-5,R,5,7,"rgba(230,220,255,0.85)"),j(i,o+c/2,R,5,7,"rgba(230,220,255,0.85)"),j(i,o-c/2-4,R+7,3,3,"rgba(210,200,245,0.8)"),j(i,o+c/2+1,R+7,3,3,"rgba(210,200,245,0.8)"));const Q=n.skirt?n.skirt==="long"?n.bottom:n.skin:n.bottom,q=n.shoes||"#222",at=A?0:1;let ot=0,pt=0,Gt=0,Vt=0;if(v===0&&(ot=-2,Gt=A?3:0,Vt=A?-2:0),v===2&&(pt=-2,Vt=A?3:0,Gt=A?-2:0),A?(he(i,o-h+Vt,b,h,u+pt-1,re(Q,-.15)),j(i,o-h+Vt,l-1+pt,h+1,1,q),he(i,o-1+Gt,b,h,u+ot-1,Q),j(i,o-1+Gt,l-1+ot,h+1,1,q)):y?(he(i,o-h-at,b,h,u,Q),he(i,o+at,b,h,u,Q),j(i,o-h-at,l-1,h,1,q),j(i,o+at,l-1,h,1,q)):(he(i,o-h-at+0,b,h,u+ot-1,Q),he(i,o+at,b,h,u+pt-1,Q),j(i,o-h-at,l-1+ot,h,1,q),j(i,o+at,l-1+pt,h,1,q)),n.skirt){const it=n.skirt==="long"?u-2:Math.round(u*.45);for(let Et=0;Et<it;Et++){const Ft=(A?c-2:c)+Math.min(3,Math.floor(Et/3)+1)*(n.skirt==="long",1);j(i,o-Ft/2+m*(1-Et/it),b-1+Et,Ft,1,Et===it-1?re(n.bottom,-.25):n.bottom)}j(i,o-c/2+m,b-1,1,it,re(n.bottom,.15))}const X=A?Math.max(5,c-3):c,J=o-X/2+m;he(i,J,R,X,d+(n.skirt?0:1),n.top),p.includes("coat")&&he(i,J-1,R,X+2,d+6,n.top),n.trim&&!L&&(j(i,o-1+m,R,A?1:2,n.skirt?2:1,n.trim),n.build==="strong"&&j(i,J+1,R+d-2,X-2,1,n.trim)),p.includes("scarf")&&(j(i,J,R,X,2,n.trim||"#e84a6f"),L||j(i,J+1,R+2,2,4,n.trim||"#e84a6f")),p.includes("pins")&&!L&&!A&&(j(i,J+X-3,R+3,1,1,"#fff"),j(i,J+X-2,R+5,1,1,"#4ae0c0")),p.includes("camera")&&!L&&(j(i,o-2+m,R+4,4,3,"#222"),j(i,o-1+m,R+5,2,1,"#8ac"),j(i,J+1,R,1,4,"#333"),j(i,J+X-2,R,1,4,"#333"));const ut=d-1,ht=v===0?1:v===2?-1:0,wt=(n.build==="strong"&&!p.includes("visor"),n.top),Tt=(it,Et,Ft)=>{Et==="up"?(he(i,it,R-ut+3,2,ut-1,wt),j(i,it,R-ut+1,2,2,n.skin)):Et==="side"?(j(i,it<o?it-3:it+1,R+1,4,2,wt),j(i,it<o?it-5:it+5,R+1,2,2,n.skin)):Et==="face"?(he(i,it,R+1,2,3,wt),j(i,it<o?it+1:it-1,R-2,2,3,n.skin)):(he(i,it,R+1+Ft,2,ut-2,wt),j(i,it,R+ut-1+Ft,2,2,n.skin),p.includes("bracelets")&&j(i,it,R+ut-2+Ft,2,1,"#4ae0c0"))};if(A?Tt(o-1+m+(v>=0?ht*2:0),x==="point"?"side":x,0):(Tt(J-2,x==="point"?"down":x,ht),Tt(J+X,x==="point"?"side":x,-ht)),j(i,P+3,T+g-1,2,2,re(n.skin,-.2)),(n.style!=="none"||n.id!=="kukolnik")&&(j(i,P+1,T,6,1,n.skin),j(i,P,T+1,8,g-3,n.skin),j(i,P+1,T+g-2,6,1,n.skin),j(i,P+7,T+2,1,g-5,re(n.skin,-.15))),!L){const it=T+4,Et=re(n.eyes,-.25);A?(j(i,P+6,it,1,2,Et),j(i,P+8,it+1,1,1,re(n.skin,-.12))):(j(i,P+1,it,2,2,"#f4efe6"),j(i,P+5,it,2,2,"#f4efe6"),j(i,P+2,it,1,2,Et),j(i,P+5,it,1,2,Et),n.brows==="strict"&&(j(i,P+1,it-1,2,1,re(n.hair,-.4)),j(i,P+5,it-1,2,1,re(n.hair,-.4))),n.lips?j(i,P+3,T+7,2,1,n.lips):s==="fear"&&j(i,P+3,T+7,2,1,"#412"),p.includes("freckles")&&(j(i,P+1,it+2,1,1,re(n.skin,-.25)),j(i,P+6,it+2,1,1,re(n.skin,-.25))),p.includes("mole")&&j(i,P+6,it+3,1,1,"#3a1a14"),p.includes("glasses")&&(j(i,P,it,8,1,"#222"),j(i,P+1,it+1,2,1,"rgba(180,220,255,0.6)"),j(i,P+5,it+1,2,1,"rgba(180,220,255,0.6)")),p.includes("visor")&&j(i,P,it,8,2,n.trim||"#40e0d0"),p.includes("maskface")&&(j(i,P,T+1,8,7,"#e8e4d8"),j(i,P+1,it,2,2,"#111"),j(i,P+5,it,2,2,"#111"),j(i,P+2,T+7,4,1,"#111"),j(i,P+1,T+6,1,1,"#111"),j(i,P+6,T+6,1,1,"#111")),p.includes("maskhalf")&&(j(i,P,it-1,8,3,"#e8c36a"),j(i,P+2,it,1,1,"#111"),j(i,P+5,it,1,1,"#111")))}if(B!=="none"){const it=B==="curlyMid"||B==="curlyShort";if(L)j(i,P+1,T-1,6,1,_),he(i,P-O,T,8+O*2,Math.max(g-2,Math.min(z,r-2)),_),z>9&&j(i,P+3,T+4,1,z-6,S);else if(A)j(i,P+1,T-1,6,1,_),j(i,P-1-O,T,6+O,Math.min(Math.max(z,4),8),_),j(i,P+5,T,3,n.bangs?3:2,_),j(i,P,T,1,5,S);else{j(i,P+1,T-1,6,1,_),j(i,P-O,T,8+O*2,n.bangs?4:2,_),j(i,P+1,T,3,1,G);const Et=Math.min(z,B==="ponytail"||B==="twin"||B==="short"||B==="bun"?4:z);j(i,P-1-O,T+1,1+O,Et,_),j(i,P+8,T+1,1+O,Et,S),!n.bangs&&(B==="bob"||B==="bobLong"||B==="longStyled"||B==="glam")&&(j(i,P,T+2,2,2,_),j(i,P+6,T+2,2,1,_)),B==="fluffy"&&(j(i,P-2,T+1,1,4,G),j(i,P+9,T+2,1,3,_),j(i,P,T-2,7,1,G),j(i,P+1,T+2,2,1,_),j(i,P+5,T+2,2,1,_))}if(it){for(let Et=0;Et<6;Et++)j(i,P-1+Et*2-Et%2,T-2+Et%2,2,2,Et%2?_:G);A||(j(i,P-2,T+2,1,2,_),j(i,P+9,T+4,1,2,_),B==="curlyMid"&&(j(i,P-2,T+6,2,2,_),j(i,P+8,T+7,2,2,S)))}B==="twin"&&(A?he(i,P-2,T+2,2,8,_):(he(i,P-3,T+2,2,8,_),he(i,P+9,T+2,2,8,_),j(i,P-2,T+2,1,1,"#e84a6f"),j(i,P+9,T+2,1,1,"#e84a6f"))),B==="ponytail"&&(A?(he(i,P-3,T+1,3,3,_),he(i,P-4,T+3,2,9,_)):L?he(i,P+3,T+2,2,12,S):j(i,P+8,T-1,2,3,_)),B==="bun"&&j(i,P+2,T-3,4,2,_),B==="rapunzel"&&!L&&(j(i,P+8,T+r-12,6,2,_),j(i,P+12,T+r-11,4,2,S)),(B==="longStyled"||B==="glam")&&j(i,P+2,T,1,2,G)}p.includes("earrings")&&!L&&!A&&(j(i,P-1,T+6,1,2,"#f4d060"),j(i,P+8,T+6,1,2,"#f4d060")),p.includes("hat")&&(j(i,P-2,T,12,1,"#2a2a2e"),he(i,P,T-3,8,3,"#3a3a40"),j(i,P,T-1,8,1,"#111")),p.includes("crown")&&(j(i,P+1,T-2,6,2,"#f4d060"),j(i,P+1,T-4,1,2,"#f4d060"),j(i,P+3,T-4,2,2,"#f4d060"),j(i,P+6,T-4,1,2,"#f4d060"),j(i,P+3,T-2,2,1,"#d02040")),p.includes("headphones")&&(j(i,P,T-2,8,1,"#222"),j(i,P-2,T+2,2,4,"#222"),j(i,P+8,T+2,2,4,"#222")),i.restore()}function T0(i,t,e){const n=i.getImageData(0,0,t,e),s=n.data,a=new Uint8ClampedArray(s),o=(l,r)=>l>=0&&r>=0&&l<t&&r<e&&a[(r*t+l)*4+3]>40;for(let l=0;l<e;l++)for(let r=0;r<t;r++){if(o(r,l))continue;const c=r%as,h=l%Fi;if(!(c===0||c===as-1||h===0||h===Fi-1)&&(o(r-1,l)||o(r+1,l)||o(r,l-1)||o(r,l+1))){const u=(l*t+r)*4;s[u]=qa[0],s[u+1]=qa[1],s[u+2]=qa[2],s[u+3]=255}}i.putImageData(n,0,0)}const Tl=new Map;function w0(i){let t=Tl.get(i);if(t)return t;const e=an[i];if(!e)throw new Error("Нет персонажа: "+i);t=document.createElement("canvas"),t.width=as*es.length,t.height=Fi*El.length;const n=t.getContext("2d",{willReadFrequently:!0});return El.forEach((s,a)=>es.forEach((o,l)=>{const r=l>=6;E0(n,l*as,a*Fi,e,o,r&&s==="b"&&o!=="sit"&&o!=="arms"&&o!=="dance1"&&o!=="dance2"?"f":s)})),T0(n,t.width,t.height),(i==="kukolnik"||i==="narrator")&&(n.globalCompositeOperation="source-in",n.fillStyle="#0a0808",n.fillRect(0,0,t.width,t.height)),Tl.set(i,t),t}const wl=new Map;let $a=null;function A0(){return $a||($a=ia(32,32,i=>{const t=i.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,32,32)})),$a}function Ic(i){const t=i.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,0,.75,.66);t.needsUpdate=!0}class lo{constructor(t,e=t){this.id=e,this.x=0,this.z=0,this.y=0,this.dir="f",this.pose=null,this.moving=!1,this.t=Math.random()*3,this.target=null,this.hidden=!1,this.charId="",this.group=new yi,this.roll=0,this.alpha=1,this.float=0,this.danceBeat=0;const n=new Bn(as/fn,Fi/fn);n.translate(0,Fi/fn/2,0),Ic(n),this.map=null,this.mesh=new ve(n,new Ji({alphaTest:.5,side:qe,transparent:!1})),this.mesh.castShadow=!0,this.setChar(t),this.shadow=new ve(new Bn(1.5,.9),new hn({map:A0(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.group.add(this.mesh,this.shadow)}setChar(t){if(this.charId===t)return;this.charId=t;let e=wl.get(t);e||(e=new Sc(w0(t)),e.magFilter=e.minFilter=Pe,e.generateMipmaps=!1,e.colorSpace=Ke,wl.set(t,e)),this.map&&this.map.dispose(),this.map=e.clone(),this.map.needsUpdate=!0,this.map.repeat.set(1/es.length,1/3),this.mesh.material.map=this.map,this.mesh.material.needsUpdate=!0}get def(){return an[this.charId]}place(t,e,n){return this.x=t,this.z=e,n&&(this.dir=n),this.sync(),this}face(t,e){const n=t-this.x,s=e-this.z;this.dir=Math.abs(n)>Math.abs(s)?n>0?"r":"l":s>0?"f":"b"}walkTo(t,e,n=4){return this.target&&this.target.res(),new Promise(s=>{this.target={x:t,z:e,speed:n,res:s}})}stop(){if(this.target){const t=this.target.res;this.target=null,t()}this.moving=!1}update(t){if(this.t+=t,this.target){const e=this.target.x-this.x,n=this.target.z-this.z,s=Math.hypot(e,n),a=this.target.speed*t;if(s<=a){this.x=this.target.x,this.z=this.target.z;const o=this.target.res;this.target=null,this.moving=!1,o()}else this.x+=e/s*a,this.z+=n/s*a,this.face(this.target.x,this.target.z),this.moving=!0}this.sync()}sync(){let t=this.pose||(this.moving?"walk"+Math.floor(this.t*8)%4:"idle"+Math.floor(this.t*1.6)%2);this.pose==="dance"&&(t=Math.floor(this.danceBeat)%2?"dance1":"dance2");const e=Math.max(0,es.indexOf(t)),n=this.dir==="f"?0:this.dir==="b"?1:2,s=es.length,a=this.dir==="l";this.map.repeat.x=(a?-1:1)/s,this.map.offset.set((e+(a?1:0))/s,1-(n+1)/3),this.group.position.set(this.x,this.y+this.float,this.z),this.mesh.rotation.z=this.roll,this.group.visible=!this.hidden,this.shadow.visible=this.y+this.float<.6;const o=this.mesh.material;this.alpha<1?(o.transparent=!0,o.opacity=this.alpha,o.alphaTest=.05):o.transparent&&(o.transparent=!1,o.opacity=1,o.alphaTest=.5)}dispose(){this.map.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}class Uc{constructor(t,e){this.id=t,this.def=e,this.group=new yi,this.boxes=[],this.inters=[],this.triggers=[],this.actors=[],this.spawns={},this.masked=[],this.updaters=[],this.photos=[],this.guards=[],this.lasers=[],this.flick=[],this.named={}}actor(t){return this.actors.find(e=>e.id===t)}inter(t){return this.inters.find(e=>e.id===t)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.userData.own&&n.map.dispose(),n.dispose()}});for(const t of this.actors)t.dispose()}}class Nc{constructor(t,e){this.room=t,this.G=e}get w(){return this.room.def.w}get d(){return this.room.def.d}mat(t,e="plaster"){return t.color&&!t.tex?new Ji({color:t.color,emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1}):new Ji({map:Dc(t.tex||e,t.tint),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1})}texBox(t,e,n,s,a){const o=new ii(t,e,n),l=this.mat(s,a);if(l.map){const r=l.map.unit||2,c=o.attributes.uv,h=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let u=0;u<6;u++)for(let d=0;d<4;d++){const g=u*4+d;c.setXY(g,c.getX(g)*h[u][0]/r,c.getY(g)*h[u][1]/r)}}return new ve(o,l)}tag(t,e,n){e.mask&&this.room.masked.push({obj:t,mask:e.mask,box:n}),e.name&&(this.room.named[e.name]=t)}floor(t="floor",e={}){const n=this.texBox(e.w||this.w,.4,e.d||this.d,{tex:t,...e});return n.position.set(e.x||0,-.2+(e.y||0),e.z||0),n.receiveShadow=!0,this.room.group.add(n),this.tag(n,e),n}walls(t="plaster",e={}){const n=e.h||5,s=this.w,a=this.d,o=.4,l=(r,c,h,u)=>{const d=this.texBox(r,n,c,{tex:t,...e});return d.position.set(h,n/2,u),d.receiveShadow=!0,this.room.group.add(d),d};if(e.n!==!1&&l(s+o*2,o,0,-a/2-o/2),e.w!==!1&&l(o,a,-s/2-o/2,0),e.e!==!1&&l(o,a,s/2+o/2,0),e.trim){const r=this.texBox(s,.5,.1,{tex:e.trim});r.position.set(0,.25,-a/2+.05),this.room.group.add(r);const c=this.texBox(s,.3,.15,{tex:e.trim});c.position.set(0,n-.15,-a/2+.07),this.room.group.add(c)}}collider(t,e,n,s){const a={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),on:!0};return this.room.boxes.push(a),a}box(t,e,n,s,a,o={}){const l=this.texBox(n,a,s,o,"wood");l.position.set(t,(o.y||0)+a/2,e),l.castShadow=o.cast!==!1,l.receiveShadow=!0,o.ry&&(l.rotation.y=o.ry),this.room.group.add(l);let r;return o.solid!==!1&&!(o.y>2.2)&&(r=this.collider(t-n/2,e-s/2,t+n/2,e+s/2),l.userData.box=r),this.tag(l,o,r),l}decal(t,e={}){const n=t.image,s=e.w||n.width/fn,a=e.h||n.height/fn,o=e.glow?new hn({map:t,transparent:!0,alphaTest:.1,color:e.color||16777215}):new Ji({map:t,transparent:!0,alphaTest:.1});e.opacity!=null&&(o.opacity=e.opacity,o.alphaTest=.01);const l=new ve(new Bn(s,a),o),r=e.y??2.4;return e.wall==="w"?(l.position.set(-this.w/2+.03,r,e.at||0),l.rotation.y=Math.PI/2):e.wall==="e"?(l.position.set(this.w/2-.03,r,e.at||0),l.rotation.y=-Math.PI/2):e.flat?(l.position.set(e.x||0,e.y??.03,e.z||0),l.rotation.x=-Math.PI/2):l.position.set(e.x??e.at??0,r,e.z??-this.d/2+.03),e.ry&&(l.rotation.y=e.ry),l.receiveShadow=!e.glow,this.room.group.add(l),this.tag(l,e),l}poster(t,e,n={}){return this.decal(M0(t,e,n),n)}sprite(t,e,n,s={}){const a=typeof t=="string"?b0(t):t,o=a.image,l=s.scale||1,r=o.width/fn*l,c=o.height/fn*l,h=new Bn(r,c);h.translate(0,c/2,0),s.glow||Ic(h);const u=s.glow?new hn({map:a,alphaTest:.3,side:qe,transparent:s.opacity!=null,opacity:s.opacity??1}):new Ji({map:a,alphaTest:.3,side:qe,emissive:s.emissive||0}),d=new ve(h,u);d.position.set(e,s.y||0,n),d.castShadow=s.cast!==!1&&!s.glow,s.flipX&&(d.scale.x=-1),this.room.group.add(d);let g;if(s.solid){const p=s.solid===!0?Math.min(r,1.2)/2:s.solid;g=this.collider(e-p,n-.3,e+p,n+.3),d.userData.box=g}return this.tag(d,s,g),d}actor(t,e,n,s={}){const a=new lo(t,s.id||t);return a.place(e,n,s.dir||"f"),s.pose&&(a.pose=s.pose),a.mask=s.mask,s.hidden&&(a.hidden=!0),this.room.actors.push(a),this.room.group.add(a.group),s.mask&&this.room.masked.push({obj:a.group,mask:s.mask}),a}inter(t,e,n,s){const a={id:t,x:e,z:n,r:s.r||1.7,label:s.label,fn:s.fn,mask:s.mask,cond:s.cond,y:s.y??2.2,enabled:!0,quiet:s.quiet};if(!s.quiet){const o=new ve(new so(.13),new hn({color:16771488}));o.position.set(e,a.y+.5,n),a.marker=o,this.room.group.add(o)}return this.room.inters.push(a),s.photo&&this.photo(t,s.photo,e,n,{cond:s.cond,mask:s.mask}),a}look(t,e,n,s,a,o={}){return this.inter(t,e,n,{label:s,fn:typeof a=="function"?a:l=>l.run(a),...o})}npc(t,e,n,s={}){const a=this.actor(t,e,n,s),o=this.collider(e-.4,n-.25,e+.4,n+.25);return a.box=o,s.mask&&this.room.masked.push({obj:new de,mask:s.mask,box:o}),s.talk&&this.inter(s.id||t,e,n+.2,{label:s.label||"Поговорить: "+an[t].name,fn:async l=>{a.face(l.player.x,l.player.z),l.player.face(a.x,a.z),await(typeof s.talk=="function"?s.talk(l,a):l.run(s.talk))},r:1.9,y:2.6,mask:s.mask,cond:s.cond}),a}door(t,e,n){const s=n.col||"#45301f",a=n.w||2.2,o=n.h||3.4,l=ia(Math.round(a*fn),Math.round(o*fn),(h,u,d)=>{h.fillStyle="#1a120e",h.fillRect(0,0,u,d),h.fillStyle=s,h.fillRect(2,2,u-4,d-2),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(5,6,u-10,d*.4),h.fillRect(5,d*.52,u-10,d*.4),h.fillStyle="rgba(255,255,255,0.12)",h.fillRect(2,2,2,d),h.fillStyle="#d4ae48",h.fillRect(u-9,d*.5,3,3),n.sign&&(h.fillStyle="#e2d5ac",h.fillRect(6,9,u-12,9),Or(h,n.sign,u/2,9,{size:7,align:"center",col:"#3a1a14"}))},"door|"+s+a+o+(n.sign||"")),r=n.z??-this.d/2+.04,c=this.decal(l,{x:e,z:r,y:o/2,glow:!!n.glow,color:n.glow,mask:n.mask});return this.inter(t,e,r+.9,{label:n.label,mask:n.mask,y:3.2,fn:async h=>{if(n.cond&&!n.cond()){h.sfx("locked"),n.locked&&await h.run(typeof n.locked=="string"?["~: "+n.locked]:n.locked);return}if(n.fn)return n.fn(h);h.sfx("door"),await h.goto(n.to,n.spot||"start",{fade:n.fade})}}),c}spawn(t,e,n,s="f"){this.room.spawns[t]={x:e,z:n,dir:s}}ambient(t,e,n){const s=n!=null?new qm(n,t,e):new Zm(t,e);return this.room.group.add(s),s}sun(t,e,n=6,s=14,a=8){const o=new jm(t,e);o.position.set(n,s,a),o.castShadow=!0,o.shadow.mapSize.set(1024,1024);const l=Math.max(this.w,this.d)/2+4;return Object.assign(o.shadow.camera,{left:-l,right:l,top:l,bottom:-l,near:1,far:60}),o.shadow.bias=-.002,this.room.group.add(o,o.target),o}light(t,e,n,s,a,o=12,l={}){const r=new _l(s,a,o,1.4);return r.position.set(t,e,n),this.room.group.add(r),l.flicker&&this.room.flick.push({l:r,base:a,s:l.flicker}),l.mask&&this.room.masked.push({obj:r,mask:l.mask}),l.name&&(this.room.named[l.name]=r),r}spot(t,e,n,s,a,o,l,r={}){const c=new Xm(o,l,r.dist||40,r.angle||.45,r.pen??.5,1.1);if(c.position.set(t,e,n),c.target.position.set(s,0,a),r.shadow!==!1&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-.003,c.shadow.camera.near=1,c.shadow.camera.far=50),this.room.group.add(c,c.target),r.cone){const h=Math.hypot(s-t,e,a-n),u=Math.tan(r.angle||.45)*h,d=new no(u,h,20,1,!0);d.translate(0,-h/2,0),d.rotateX(-Math.PI/2);const g=new ve(d,new hn({color:o,transparent:!0,opacity:r.cone===!0?.07:r.cone,side:qe,depthWrite:!1,blending:ns}));g.position.set(t,e,n),g.lookAt(s,0,a),g.rotateY(Math.PI),this.room.group.add(g),c.cone=g}return r.name&&(this.room.named[r.name]=c),r.mask&&this.room.masked.push({obj:c,mask:r.mask}),c}trigger(t,e,n,s,a,o=!0){const l={x0:t,z0:e,x1:n,z1:s,fn:a,once:o,done:!1,inside:!1};return this.room.triggers.push(l),l}photo(t,e,n,s,a={}){this.room.photos.push({id:t,name:e,x:n,z:s,cond:a.cond,mask:a.mask})}onUpdate(t){this.room.updaters.push(t)}particles(t,e={}){const n=e.count||(t==="rain"?500:120),s=this.w+4,a=this.d+4,o=e.top||9,l=new Float32Array(n*3),r=new Float32Array(n);for(let g=0;g<n;g++)l[g*3]=(Math.random()-.5)*s,l[g*3+1]=Math.random()*o,l[g*3+2]=(Math.random()-.5)*a,r[g]=.5+Math.random();const c=new $e;c.setAttribute("position",new rn(l,3));const h={dust:16771264,rain:10139872,petals:16298192,sparks:16760928,snow:16777215,confetti:16765024,glitch:6356960}[t],u=new Hm(c,new bc({color:e.color||h,size:t==="rain"?.09:t==="dust"?.07:.14,transparent:!0,opacity:t==="dust"?.5:.8,depthWrite:!1,blending:t==="petals"||t==="snow"?ei:ns}));this.room.group.add(u);const d={dust:.15,rain:18,petals:1.2,sparks:-1.5,snow:1,confetti:2,glitch:-3}[t];return this.onUpdate((g,p)=>{if(u.visible){for(let v=0;v<n;v++)l[v*3+1]-=d*r[v]*g,t!=="rain"&&(l[v*3]+=Math.sin(p*r[v]+v)*g*.3),l[v*3+1]<0&&(l[v*3+1]=o),l[v*3+1]>o&&(l[v*3+1]=0);c.attributes.position.needsUpdate=!0}}),e.name&&(this.room.named[e.name]=u),this.tag(u,e),u}guard(t,e,n){const s=this.actor(t,e[0][0],e[0][1],{id:n.id});s.mesh.material.emissive.set(3814456);const a=new _l(n.color||16728128,3,3,1.5);a.position.set(0,2.6,.4),s.group.add(a);const o=n.range||5,l=n.half||.5,r=new to(o,16,-l,l*2);r.rotateX(-Math.PI/2);const c=new ve(r,new hn({color:n.color||16728128,transparent:!0,opacity:.14,depthWrite:!1}));c.position.y=.05,this.room.group.add(c);const h={actor:s,path:e,i:0,speed:n.speed||2.2,range:o,half:l,cone:c,wait:0,onCatch:n.onCatch,ang:0,off:0,pause:n.pause??.8,active:!0};return this.room.guards.push(h),h}laser(t,e,n,s,a){const o=Math.hypot(n-t,s-e),l=new ve(new ii(o,.08,.08),new hn({color:a.color||16719952}));l.position.set((t+n)/2,1,(e+s)/2),l.rotation.y=-Math.atan2(s-e,n-t),this.room.group.add(l);const r=l.clone();r.position.y=1.9,l.add(r),r.position.set(0,.9,0),r.rotation.set(0,0,0);const c={mesh:l,x0:t,z0:e,x1:n,z1:s,period:a.period||3,duty:a.duty??.5,phase:a.phase||0,on:!0,onHit:a.onHit,active:!0};return this.room.lasers.push(c),c}crowd(t,e,n,s,a=1.5,o=1.6,l="b"){t.forEach((r,c)=>this.actor(r,e+c%s*a+Math.floor(c/s)%2*.5,n+Math.floor(c/s)*o,{dir:l,id:"crowd_"+c+"_"+r}))}table(t,e,n=2.4,s=1.2,a={}){const o=this.box(t,e,n,s,.15,{tex:a.tex||"wood",y:1,...a});for(const[l,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(t+l*(n/2-.15),e+r*(s/2-.15),.15,.15,1,{tex:"darkwood",solid:!1,mask:a.mask});return o}curtain(t,e,n,s=6,a={}){return this.box(t,e,n,.3,s,{tex:"velvet",solid:a.solid??!1,...a})}}const Z0=Object.freeze(Object.defineProperty({__proto__:null,Actor:lo,Builder:Nc,Room:Uc},Symbol.toStringTag,{value:"Module"})),Xa="e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12",Ya="e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12",Al="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .",Cl=". a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .",C0="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .",Rl={theater:{bpm:92,parts:[{inst:"box",d:4,seq:Xa+" | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12"},{inst:"upright",d:4,seq:Al,vol:.8},{inst:"piano",d:4,seq:Cl,vol:.5},{inst:"drone",seq:"a1:96 .:96",vol:.5}]},backstage:{bpm:60,parts:[{inst:"drone",seq:"d2:40 .:24",vol:.7},{inst:"box",seq:"a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30",vol:.7},{inst:"piano",seq:".:50 d3:6 .:44 a2:6 .:21",vol:.5}]},horror:{bpm:50,parts:[{inst:"drone",seq:"c2:48 c#2:16",vol:.9},{inst:"piano",seq:"eb6:2 .:30 d6:2 .:14 f#5:2 .:53",vol:.5},{inst:"piano",seq:"c2:4 .:75",vol:.8},{inst:"box",seq:".:37 g5:1 gb5:1 f5:2 .:60",vol:.4}]},heist:{bpm:118,parts:[{inst:"drums",seq:"k.h.s.h.k.h.s.hhk.h.s.h.k.khs.h.",vol:.8},{inst:"bass",d:2,seq:"d2 d2 d3 d2 d2 d3 d2 f2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 | f2 f2 f3 f2 f2 f3 f2 e2 | c2 c2 c3 c2 c2 c3 c2 c#2"},{inst:"pluck",d:1,vol:.55,seq:"d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 | bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 | f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 | c4 e4 g4 c5 g4 e4 c4 e4 g4 c5 g4 e4 c4 e4 g4 c5"},{inst:"lead",d:2,vol:.8,seq:".:64 | a5:4 . f5 d5:4 .:4 | d5 f5 g5:4 f5:8 | a5:4 . c6 a5:4 f5:4 | g5:6 e5 c5:8"},{inst:"pad",seq:"d3+a3:16 bb2+f3:16 f3+c4:16 c3+g3:16"}]},chase:{bpm:140,parts:[{inst:"drums",seq:"k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs",vol:.9},{inst:"bass",d:1,seq:"d2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2"},{inst:"lead",d:2,vol:.8,seq:"d5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4"},{inst:"pad",seq:"d3+a3:32 bb2+f3:32"}]},school:{bpm:104,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 c3 a2 a2 f2 f2 g2 g2"},{inst:"pluck",d:2,vol:.7,seq:"e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},school_soft:{bpm:76,parts:[{inst:"piano",d:8,vol:.7,seq:"c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4"},{inst:"box",d:4,vol:.7,seq:".:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16"},{inst:"pad",seq:"c3+g3:32 f3+c4:16 g3+d4:16",vol:.8}]},noir:{bpm:96,swing:.33,parts:[{inst:"upright",d:4,seq:"d2 f2 a2 c3 | g2 bb2 d3 f3 | e2 g2 a2 c#3 | d3 a2 f2 a2 | d2 e2 f2 a2 | bb2 a2 g2 f2 | e2 bb2 a2 e2 | d2 a2 d2 ."},{inst:"drums",seq:"b..bb..bb..bb.rb",vol:.8},{inst:"piano",d:1,vol:.6,seq:".:6 f3+a3+c4+e4:2 .:8 | .:6 f3+bb3+d4:2 .:3 f3+bb3+d4:2 .:3 | .:6 g3+bb3+d4:2 .:2 g3+c#4+e4:2 .:4 | .:10 f3+a3+c4+e4:3 .:3"},{inst:"sax",d:2,vol:.8,seq:".:8 a4:6 c5 | d5:8 .:4 f5 e5 | d5:4 c5 a4 g4:8 | a4:12 .:4 | .:4 d5 f5 a5:6 g5 | f5:4 d5:4 c5 d5:6 | e5:4 g5 f5 e5:4 c#5:4 | d5:12 .:4"}]},fairy:{bpm:92,parts:[{inst:"box",d:4,seq:"c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12"},{inst:"upright",d:12,vol:.7,seq:"f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2"},{inst:"pluck",d:2,vol:.5,seq:"f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6"},{inst:"strings",vol:.6,seq:".:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12"}]},idol_agency:{bpm:128,parts:[{inst:"drums",seq:"k.h.k.h.k.h.k.h.",tag:"drums"},{inst:"drums",seq:"....c.......c...",tag:"drums",vol:.8},{inst:"bass",d:2,tag:"bass",seq:"c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1"},{inst:"pad",tag:"keys",seq:"c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16"},{inst:"lead",d:2,tag:"lead",seq:"e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8"}]},idol_own:{bpm:122,parts:[{inst:"drums",seq:"k..hs.hk.khhs.h.",tag:"drums"},{inst:"bass",d:2,tag:"bass",seq:"a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 ."},{inst:"pad",tag:"keys",seq:"a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16"},{inst:"pluck",d:1,tag:"arp",vol:.5,seq:"a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5"},{inst:"sax",d:2,tag:"lead",vol:.9,seq:"a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8"}]},diva:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"strings",d:2,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"drums",seq:"r..r..r.r..r..r.",vol:.6}]},collapse:{bpm:138,parts:[{inst:"box",d:3,seq:"e5 a5 c6 b5 g#5 a5 e5 c5 d5"},{inst:"bass",d:7,seq:"a1 d2 e2 c2"},{inst:"drums",seq:"k..k.s.k.h..s.kh",vol:.7},{inst:"drums",seq:"..h..h.h.t",vol:.5},{inst:"pad",seq:"a2+eb3:32 bb2+e3:32"},{inst:"sax",d:5,vol:.4,seq:"a4 . d5 . c#5 ."}]},dressing:{bpm:66,parts:[{inst:"box",d:4,seq:Xa,vol:.8},{inst:"pad",seq:"a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12",vol:.9}]},fin_overture:{bpm:108,parts:[{inst:"strings",d:4,seq:Xa,vol:1.2},{inst:"organ",d:4,seq:Cl,vol:.9},{inst:"upright",d:4,seq:Al},{inst:"drums",seq:"t...h...h...",vol:.5}]},fin_queen:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"voice",d:2,vol:.9,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"strings",d:16,vol:.8,seq:"a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4"},{inst:"drums",seq:"r..r..r.r..r..r.k.......s.......",vol:.6}]},fin_girl:{bpm:100,parts:[{inst:"voice",d:4,seq:Ya,vol:.8},{inst:"pluck",d:2,vol:.6,seq:"a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6"},{inst:"upright",d:4,seq:C0,vol:.7},{inst:"strings",vol:.5,seq:".:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12"}]},fin_mirror:{bpm:126,parts:[{inst:"drums",seq:"k..hs..hk.k.s.hh",vol:.9},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3"},{inst:"strings",d:1,vol:.6,seq:"a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 ."},{inst:"lead",d:2,seq:"e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4"},{inst:"voice",d:16,vol:.5,seq:"a4 b4 a4 g#4 c5 b4 d5 c#5"}]},fin_reveal:{bpm:66,parts:[{inst:"box",d:4,seq:Ya},{inst:"pad",seq:".:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12",vol:.9},{inst:"voice",d:12,vol:.35,seq:".:96 e4 e4 e4 f#4 f#4 e4 d4 c#4"}]},fin_bows:{bpm:120,parts:[{inst:"drums",seq:"k.h.s.h.k.k.s.hh",vol:.8},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 ."},{inst:"organ",seq:"a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16"},{inst:"lead",d:2,seq:"e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4"},{inst:"strings",d:4,vol:.8,seq:"c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5"}]},party:{bpm:96,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 e3 f2 a2 g2 b2 c3 g2"},{inst:"box",d:2,seq:"g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},morning:{bpm:60,parts:[{inst:"box",d:4,seq:Ya,vol:.7},{inst:"pad",seq:"a2+e3:48 d3+a3:24 e3+b3:24",vol:.7}]}},R0={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function P0(i){const t=/^([a-g])([#b]?)(-?\d)$/.exec(i);if(!t)return console.warn("[audio] неизвестная нота",i),440;const e=R0[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)+(parseInt(t[3])+1)*12;return 440*Math.pow(2,(e-69)/12)}const Pl=new Map;function Ll(i){let t=Pl.get(i);if(t)return t;const e=[];let n=0;if(i.inst==="drums"&&!i.seq.includes(" "))for(const s of i.seq.replace(/\|/g,""))s!=="."&&e.push({step:n,len:1,notes:[s]}),n++;else for(const s of i.seq.split(/\s+/)){if(!s||s==="|")continue;const[a,o]=s.split(":"),l=o?parseFloat(o):i.d||1;a!=="."&&e.push({step:n,len:l,notes:a.split("+")}),n+=l}return t={evs:e,len:n},Pl.set(i,t),t}class L0{constructor(){this.ctx=null,this.cur=null,this.timer=null,this.amb=null,this.partFilter=null,this.musicFx=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[audio] WebAudio недоступен — игра продолжит работу без звука");return}const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),this.bMusic=e.createGain(),this.bSfx=e.createGain(),this.bVoice=e.createGain(),this.duckG=e.createGain(),this.musicFx=e.createBiquadFilter(),this.musicFx.type="lowpass",this.musicFx.frequency.value=2e4,this.bMusic.connect(this.musicFx),this.musicFx.connect(this.duckG),this.duckG.connect(n),this.bSfx.connect(n),this.bVoice.connect(n);const a=(this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate)).getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;const o=e.createBuffer(2,e.sampleRate*2.2,e.sampleRate);for(let l=0;l<2;l++){const r=o.getChannelData(l);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,2.6)}this.rev=e.createConvolver(),this.rev.buffer=o,this.revG=e.createGain(),this.revG.gain.value=.22,this.rev.connect(this.revG),this.revG.connect(n),this.applyVolumes(),this.timer=setInterval(()=>this.tick(),40)}applyVolumes(){this.ctx&&(this.bMusic.gain.value=Se.music*.5,this.bSfx.gain.value=Se.sfx*.8,this.bVoice.gain.value=Se.voice*.5)}now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3}duck(t){this.ctx&&this.duckG.gain.setTargetAtTime(t?.55:1,this.ctx.currentTime,.15)}muffle(t){this.ctx&&this.musicFx&&this.musicFx.frequency.setTargetAtTime(t,this.ctx.currentTime,.2)}stepDur(t){return 60/t.bpm/4}music(t,e={}){if(!this.ctx)return this.now();if(this.cur&&this.cur.id===t&&!e.restart)return this.cur.t0;const n=this.ctx.currentTime,s=e.fade??1.2;if(this.cur){const r=this.cur.gain;r.gain.cancelScheduledValues(n),r.gain.setValueAtTime(r.gain.value,n),r.gain.linearRampToValueAtTime(0,n+s),setTimeout(()=>r.disconnect(),s*1e3+300),this.cur=null}if(!t)return n;const a=Rl[t];if(!a)return console.warn("[audio] нет трека",t),n;const o=this.ctx.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(a.vol??1,n+Math.min(s,.6)+.05),o.connect(this.bMusic);const l=n+(e.delay??.12);return this.cur={id:t,tr:a,t0:l,gain:o,next:a.parts.map(()=>0)},l}musicId(){return this.cur?this.cur.id:null}tick(){const t=this.cur;if(!t||!this.ctx)return;const e=this.ctx.currentTime+.25,n=this.stepDur(t.tr);t.tr.parts.forEach((s,a)=>{const{evs:o,len:l}=Ll(s);if(!(!o.length||!l))for(;;){const r=t.next[a],c=Math.floor(r/o.length),h=o[r%o.length];if(t.tr.once&&c>0)break;let u=t.t0+(c*l+h.step)*n;if(t.tr.swing&&h.step%2===1&&(u+=n*t.tr.swing),u>e)break;if(t.next[a]++,!(u<this.ctx.currentTime-.05)&&!(this.partFilter&&!this.partFilter(t.id,s)))for(const d of h.notes)this.voice(s.inst,d,u,h.len*n,s.vol??1,t.gain)}})}env(t,e,n,s,a,o,l,r){t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(r,e+n),t.exponentialRampToValueAtTime(Math.max(r*a,1e-4),e+n+s),t.setValueAtTime(Math.max(r*a,1e-4),Math.max(e+o,e+n+s)),t.exponentialRampToValueAtTime(1e-4,Math.max(e+o,e+n+s)+l)}osc(t,e,n,s,a,o=0){const l=this.ctx.createOscillator();return l.type=t,l.frequency.setValueAtTime(e,n),l.detune.value=o,l.connect(a),l.start(n),l.stop(s),l}noise(t,e,n,s=1){const a=this.ctx.createBufferSource();return a.buffer=this.noiseBuf,a.playbackRate.value=s,a.loop=!0,a.connect(n),a.start(t,Math.random()),a.stop(t+e),a}voice(t,e,n,s,a,o){const l=this.ctx;if(!l)return;const r=l.createGain();r.connect(o);const c=u=>{const d=l.createGain();d.gain.value=u,r.connect(d),d.connect(this.rev)};if(t==="drums"){if(e==="k"){const u=l.createOscillator();u.frequency.setValueAtTime(150,n),u.frequency.exponentialRampToValueAtTime(42,n+.12),u.connect(r),r.gain.setValueAtTime(.9*a,n),r.gain.exponentialRampToValueAtTime(.001,n+.22),u.start(n),u.stop(n+.25)}else if(e==="s"||e==="c"||e==="r"){const u=l.createBiquadFilter();u.type=e==="r"?"bandpass":"highpass",u.frequency.value=e==="c"?1200:e==="r"?1800:1500,u.connect(r),this.noise(n,.2,u),r.gain.setValueAtTime((e==="r"?.25:.5)*a,n),r.gain.exponentialRampToValueAtTime(.001,n+(e==="r"?.05:.16)),e!=="r"&&c(.2)}else if(e==="h"||e==="o"||e==="b"){const u=l.createBiquadFilter();u.type="highpass",u.frequency.value=e==="b"?4e3:7e3,u.connect(r),this.noise(n,.3,u);const d=e==="o"?.22:e==="b"?.12:.04;r.gain.setValueAtTime((e==="b"?.16:.2)*a,n),r.gain.exponentialRampToValueAtTime(.001,n+d)}else if(e==="t"){const u=l.createOscillator();u.frequency.setValueAtTime(200,n),u.frequency.exponentialRampToValueAtTime(90,n+.15),u.connect(r),r.gain.setValueAtTime(.5*a,n),r.gain.exponentialRampToValueAtTime(.001,n+.2),u.start(n),u.stop(n+.22)}return}const h=P0(e);switch(t){case"piano":{this.env(r.gain,n,.005,.25,.25,s,.4,.26*a);const u=n+s+.6;this.osc("triangle",h,n,u,r);const d=l.createGain();d.gain.value=.3,d.connect(r),this.osc("sine",h*2,n,u,d),c(.35);break}case"box":{this.env(r.gain,n,.002,.5,.05,Math.min(s,.3),.9,.2*a);const u=n+1.6;this.osc("sine",h,n,u,r);const d=l.createGain();d.gain.value=.25,d.connect(r),this.osc("sine",h*3.01,n,u,d),c(.5);break}case"bass":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(900,n),u.frequency.exponentialRampToValueAtTime(220,n+.2),u.connect(r),this.env(r.gain,n,.005,.1,.7,s*.9,.08,.34*a),this.osc("sawtooth",h,n,n+s+.2,u),this.osc("square",h/2,n,n+s+.2,u,4);break}case"upright":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=600,u.connect(r),this.env(r.gain,n,.008,.25,.2,s*.8,.15,.5*a),this.osc("triangle",h,n,n+s+.3,u),this.osc("sine",h*2,n,n+s+.3,u);break}case"pad":case"strings":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=t==="pad"?900:2200,u.connect(r);const d=t==="pad"?.35:.12;this.env(r.gain,n,Math.min(d,s*.5),.2,.85,s,.5,.075*a);const g=n+s+.7;this.osc("sawtooth",h,n,g,u,-7),this.osc("sawtooth",h,n,g,u,8),c(.5);break}case"lead":case"pluck":{const u=l.createBiquadFilter();u.type="lowpass",u.Q.value=4,u.frequency.setValueAtTime(t==="pluck"?3500:2600,n),u.frequency.exponentialRampToValueAtTime(t==="pluck"?500:1400,n+.25),u.connect(r),this.env(r.gain,n,.006,.15,t==="pluck"?.15:.6,s*.95,.12,.13*a);const d=n+s+.3;this.osc(t==="pluck"?"sawtooth":"square",h,n,d,u),this.osc("sawtooth",h,n,d,u,9),c(.25);break}case"sax":case"voice":{const u=l.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(h*.985,n),u.frequency.linearRampToValueAtTime(h,n+.07);const d=l.createOscillator(),g=l.createGain();d.frequency.value=t==="sax"?5.2:5.8,g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(h*.012,n+Math.min(.3,s)),d.connect(g),g.connect(u.frequency);const p=n+s+.25,v=l.createGain();v.connect(r);const f=t==="sax"?[[700,3,1],[1500,4,.5]]:[[800,6,1],[1150,7,.6],[2900,8,.25]];for(const[m,x,y]of f){const b=l.createBiquadFilter();b.type="bandpass",b.frequency.value=m,b.Q.value=x;const R=l.createGain();R.gain.value=y,u.connect(b),b.connect(R),R.connect(v)}this.env(r.gain,n,.05,.1,.85,s*.95,.18,(t==="sax"?.5:.55)*a),u.start(n),u.stop(p),d.start(n),d.stop(p),c(.4);break}case"organ":{this.env(r.gain,n,.02,.05,.9,s,.1,.07*a);const u=n+s+.2;for(const[d,g]of[[1,1],[2,.5],[3,.25],[4,.2]]){const p=l.createGain();p.gain.value=g,p.connect(r),this.osc("sine",h*d,n,u,p)}c(.3);break}case"drone":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=300,u.connect(r),this.env(r.gain,n,Math.min(1.2,s*.4),.3,.9,s,1.2,.2*a);const d=n+s+1.4;this.osc("sawtooth",h,n,d,u,-12),this.osc("sine",h,n,d,u,9),this.osc("sine",h*1.5,n,d,u,3),c(.6);break}default:console.warn("[audio] нет инструмента",t)}}sfx(t,e={}){const n=this.ctx;if(!n)return;const s=n.currentTime+.005,a=n.createGain();a.connect(this.bSfx);const o=c=>{const h=n.createGain();h.gain.value=c,a.connect(h),h.connect(this.rev)},l=(c,h,u,d,g=s,p=1,v)=>{const f=n.createBiquadFilter();f.type=c,f.frequency.setValueAtTime(h,g),v&&f.frequency.exponentialRampToValueAtTime(v,g+u),f.Q.value=p;const m=n.createGain();m.gain.setValueAtTime(d,g),m.gain.exponentialRampToValueAtTime(.001,g+u),f.connect(m),m.connect(a),this.noise(g,u+.05,f)},r=(c,h,u,d,g,p=s)=>{const v=n.createOscillator();v.type=c,v.frequency.setValueAtTime(h,p),u!==h&&v.frequency.exponentialRampToValueAtTime(u,p+d);const f=n.createGain();f.gain.setValueAtTime(g,p),f.gain.exponentialRampToValueAtTime(.001,p+d),v.connect(f),f.connect(a),v.start(p),v.stop(p+d+.02)};switch(t){case"step":{const c=e.mat||"wood";l(c==="metal"?"bandpass":"lowpass",(c==="wood"?300:c==="stone"?900:c==="metal"?2200:c==="grass"?2600:c==="carpet"?180:500)*(.9+Math.random()*.2),c==="grass"?.09:.05,c==="carpet"?.1:.16,s,c==="metal"?6:1),c==="wood"&&r("sine",110,70,.05,.1);break}case"click":r("square",900,700,.03,.08);break;case"hover":r("sine",1200,1200,.02,.03);break;case"paper":l("bandpass",3e3,.12,.2,s,.7,5e3);break;case"pencil":l("bandpass",5e3,.18,.1,s,2,3500);break;case"stamp":r("sine",140,50,.12,.6),l("lowpass",800,.06,.3);break;case"pickup":r("triangle",660,660,.08,.15),r("triangle",990,990,.14,.15,s+.07);break;case"note":r("sine",880,880,.1,.1),r("sine",1320,1320,.2,.08,s+.08),o(.4);break;case"switch":r("square",240,120,.04,.18),l("highpass",3e3,.02,.15);break;case"spot":r("square",180,90,.05,.2),r("sine",55,55,.5,.12,s+.02),o(.4);break;case"door":r("sawtooth",90,140,.35,.07),l("lowpass",400,.14,.4,s+.33),o(.3);break;case"creak":r("sawtooth",180,320,.5,.05),r("sawtooth",320,210,.4,.04,s+.45),o(.5);break;case"locked":r("square",160,160,.05,.14),r("square",160,160,.05,.14,s+.1);break;case"curtain":l("lowpass",500,1.6,.3,s,.5,1800),o(.4);break;case"whoosh":l("bandpass",400,.5,.3,s,1.2,2400);break;case"shutter":l("highpass",4e3,.03,.4),l("highpass",3e3,.05,.3,s+.08),r("square",1500,500,.03,.1);break;case"mask":r("sine",520,1040,.25,.12),r("sine",780,1560,.3,.08,s+.04),o(.6);break;case"error":r("square",200,150,.18,.14);break;case"ok":r("triangle",523,523,.1,.14),r("triangle",784,784,.2,.14,s+.09),o(.3);break;case"hit":r("triangle",e.f||880,e.f||880,.07,.12);break;case"miss":l("lowpass",300,.08,.2);break;case"knock":for(let c=0;c<(e.n||3);c++)r("sine",120,60,.18,.7,s+c*.7),l("lowpass",500,.05,.3,s+c*.7);o(.7);break;case"thunder":l("lowpass",200,2.4,.9,s,.5,60),o(.8);break;case"alarm":for(let c=0;c<3;c++)r("square",880,660,.22,.12,s+c*.26);break;case"laser":r("sawtooth",1800,300,.2,.1);break;case"emp":r("sawtooth",100,1600,.3,.12),l("bandpass",2e3,.3,.15,s,3,200);break;case"glitch":for(let c=0;c<5;c++)r("square",200+Math.random()*2e3,100+Math.random()*800,.04,.07,s+c*.045);break;case"heart":r("sine",70,40,.14,.7),r("sine",60,40,.14,.5,s+.22);break;case"laugh":{const c=e.n||6;for(let h=0;h<c;h++){const u=s+h*.17,d=(e.f||520)*(1-h*.05),g=n.createOscillator();g.type="sawtooth",g.frequency.setValueAtTime(d*1.2,u),g.frequency.exponentialRampToValueAtTime(d,u+.1);const p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=900,p.Q.value=3;const v=n.createGain();v.gain.setValueAtTime(1e-4,u),v.gain.linearRampToValueAtTime(e.vol||.3,u+.02),v.gain.exponentialRampToValueAtTime(.001,u+.13),g.connect(p),p.connect(v),v.connect(a),g.start(u),g.stop(u+.15)}o(.7);break}case"applause":{const c=e.dur||3,h=e.dens||45;for(let u=0;u<c*h;u++){const d=s+Math.random()*c,g=Math.sin(Math.PI*Math.min(1,(d-s)/c))*.12+.03;l("bandpass",1200+Math.random()*2200,.03,g,d,1.5)}o(.6);break}case"clap":l("bandpass",1500+Math.random()*800,.04,.4,s,1.5),o(.5);break;case"gasp":l("bandpass",1800,.4,.12,s,2,900),o(.5);break;case"bell":r("sine",660,660,1.2,.2),r("sine",1320,1320,.8,.08),o(.7);break;case"crash":l("lowpass",1500,.9,.7,s,.5,100),r("sine",80,30,.5,.6),o(.5);break;case"snip":l("highpass",5e3,.04,.4),l("highpass",4e3,.05,.4,s+.09);break;case"rope":l("bandpass",900,.3,.2,s,3,1800);break;case"gear":for(let c=0;c<6;c++)r("square",300,200,.03,.08,s+c*.09);break;case"candle":l("bandpass",900,.25,.25,s,1,300);break;case"firework":l("bandpass",600,.4,.12,s,2,3e3),l("lowpass",2500,.8,.5,s+.45,.5,200),o(.6);break;case"engine":r("sawtooth",70,160,.9,.16);break;default:console.warn("[audio] нет эффекта",t)}}blip(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator(),a=e.createGain();s.type="triangle",s.frequency.setValueAtTime(t*(.96+Math.random()*.1),n),a.gain.setValueAtTime(.11,n),a.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(a),a.connect(this.bVoice),s.start(n),s.stop(n+.06)}ambience(t){if(!this.ctx||this.amb&&this.amb.id===t||(this.amb&&(this.amb.stop(),this.amb=null),!t))return;const e=this.ctx,n=e.createGain();n.gain.value=0,n.connect(this.bSfx);const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const a=e.createBiquadFilter(),o={rain:["highpass",1800,.16],hall:["lowpass",180,.22],crowd:["bandpass",700,.12],wind:["bandpass",350,.14],hum:["lowpass",90,.35],city:["lowpass",500,.12]}[t];if(!o){console.warn("[audio] нет атмосферы",t);return}a.type=o[0],a.frequency.value=o[1],s.connect(a),a.connect(n),s.start(),n.gain.linearRampToValueAtTime(o[2],e.currentTime+1),this.amb={id:t,stop:()=>{n.gain.cancelScheduledValues(e.currentTime),n.gain.setTargetAtTime(0,e.currentTime,.3),setTimeout(()=>{s.stop(),n.disconnect()},1500)}}}chart(t,e,n=1){const s=Rl[t],a=s.parts[e],{evs:o,len:l}=Ll(a),r=this.stepDur(s),c=[];for(let h=0;h<n;h++)for(const u of o)c.push({t:(h*l+u.step)*r,len:u.len*r,note:u.notes[0]});return c}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}const $t=new L0,sa=new Set,Fc=new Set,Fn={x:0,y:0};let kc=!1;function Dl(i){kc=i}const Oc={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyE:"act",Enter:"act",Space:"act",Escape:"pause",KeyP:"pause",Digit1:"mask1",Digit2:"mask2",Digit3:"mask3",Digit0:"mask0",KeyQ:"mask0",KeyC:"camera",KeyF:"camera",Tab:"notebook",KeyN:"notebook",KeyH:"history",KeyL:"history",ControlLeft:"skip",ControlRight:"skip",ShiftLeft:"run",ShiftRight:"run",KeyJ:"laneJ",KeyK:"laneK",KeyG:"laneG"},Ws=[];function Ei(i){return Ws.push(i),()=>{const t=Ws.indexOf(i);t>=0&&Ws.splice(t,1)}}function Qi(i,t=""){Fc.add(i);for(const e of[...Ws])e(i,t)}window.addEventListener("keydown",i=>{const t=Oc[i.code];if(!t)return;const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||(!kc&&["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(sa.add(t),Qi(t,i.code)))});window.addEventListener("keyup",i=>{const t=Oc[i.code];t&&sa.delete(t)});window.addEventListener("blur",()=>{sa.clear(),Fn.x=Fn.y=0});const Ti=i=>sa.has(i);function Ka(){Fc.clear()}function D0(){let i=(Ti("right")?1:0)-(Ti("left")?1:0)+Fn.x,t=(Ti("down")?1:0)-(Ti("up")?1:0)+Fn.y;const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t}}const ja=new Map;function Bc(i,t="neutral"){const e=i+"|"+t,n=ja.get(e);if(n)return n;const s=an[i],a=200,o=240,l=document.createElement("canvas");l.width=a,l.height=o;const r=l.getContext("2d");if(!s)return"";if(i==="kukolnik"||i==="narrator"){if(r.fillStyle="#1a1210",r.fillRect(0,0,a,o),i==="kukolnik"){r.fillStyle="#050404",r.beginPath(),r.ellipse(100,100,44,54,0,0,7),r.fill(),r.fillRect(30,170,140,80),r.beginPath(),r.ellipse(100,190,80,40,0,0,7),r.fill(),r.fillRect(60,40,80,14),r.fillRect(74,4,52,44),r.strokeStyle="#d8b56a55",r.lineWidth=1;for(const z of[60,100,140])r.beginPath(),r.moveTo(z,0),r.lineTo(z+(z-100)*.3,60),r.stroke()}else{r.fillStyle="#e8d8a8",r.fillRect(30,60,140,120),r.fillStyle="#b89858",r.fillRect(97,60,6,120),r.fillStyle="#6a5a3a";for(let z=0;z<7;z++)r.fillRect(42,78+z*13,46,3),r.fillRect(112,78+z*13,46,3)}const I=l.toDataURL();return ja.set(e,I),I}const c=s.acc||[],h=s.hair,u=re(h,-.3),d=re(h,.25),g=re(s.skin,-.18);re(s.skin,.12);const p=100,v=112,f=s.build==="big"?52:s.build==="strong"?50:46,m=58,x=s.style,y=x.startsWith("curly"),b=(I,z,O,Q,q)=>{r.fillStyle=q,r.beginPath(),r.ellipse(I,z,O,Q,0,0,7),r.fill()};if(r.fillStyle=h,x==="long"||x==="longStyled"||x==="glam"||x==="rapunzel"){const I=x==="glam"?84:x==="longStyled"?72:66;if(r.beginPath(),r.moveTo(p-I,240),r.quadraticCurveTo(p-I-8,80,p,44),r.quadraticCurveTo(p+I+8,80,p+I,240),r.fill(),x==="glam")for(let z=0;z<5;z++)b(p-78+z%2*8,110+z*28,16,18,z%2?h:u),b(p+78-z%2*8,110+z*28,16,18,z%2?u:h)}if(x==="bob"||x==="bobLong"){const I=x==="bob"?150:172;r.beginPath(),r.moveTo(p-62,I),r.quadraticCurveTo(p-70,60,p,46),r.quadraticCurveTo(p+70,60,p+62,I),r.fill()}if(x==="curlyMid")for(let I=0;I<16;I++){const z=Math.PI*(.95+I/15*1.1);b(p+Math.cos(z)*58,104+Math.sin(z)*56+(I<3||I>12?30:0),17,17,I%2?h:u)}if(x==="fluffy")for(let I=0;I<14;I++){const z=Math.PI*(.9+I/13*1.2);b(p+Math.cos(z)*58,100+Math.sin(z)*52,19,19,I%2?h:d)}if(x==="twin")for(const I of[-1,1])b(p+I*70,120,15,44,h),b(p+I*70,150,12,26,u),r.fillStyle="#e84a6f",r.fillRect(p+I*70-9,82,18,7);x==="ponytail"&&(b(p+52,70,18,16,h),r.fillStyle=u,r.beginPath(),r.moveTo(p+58,70),r.quadraticCurveTo(p+92,110,p+66,190),r.quadraticCurveTo(p+54,130,p+44,80),r.fill()),x==="bun"&&b(p,40,22,18,h),c.includes("wings")&&(b(30,200,34,50,"rgba(230,220,255,0.7)"),b(170,200,34,50,"rgba(230,220,255,0.7)"));const R=s.build==="strong"?96:s.build==="big"?100:s.build==="thin"?70:80;r.fillStyle=s.top,r.beginPath(),r.moveTo(p-R,240),r.quadraticCurveTo(p-R,186,p-26,180),r.lineTo(p+26,180),r.quadraticCurveTo(p+R,186,p+R,240),r.fill(),r.fillStyle=re(s.top,-.25),r.fillRect(p-R,232,R*2,8),c.includes("cape")&&(r.fillStyle=s.trim||"#a22",r.fillRect(p-R,196,30,44),r.fillRect(p+R-30,196,30,44)),r.fillStyle=g,r.fillRect(p-13,156,26,32),r.fillStyle=s.skin,r.beginPath(),r.moveTo(p-20,184),r.lineTo(p,200),r.lineTo(p+20,184),r.lineTo(p+13,176),r.lineTo(p-13,176),r.fill(),s.trim&&(r.strokeStyle=s.trim,r.lineWidth=5,r.beginPath(),r.moveTo(p-24,182),r.lineTo(p,204),r.lineTo(p+24,182),r.stroke()),c.includes("scarf")&&(r.fillStyle=s.trim||"#e84a6f",r.beginPath(),r.ellipse(p,186,40,14,0,0,7),r.fill(),r.fillRect(p+10,186,16,50)),c.includes("camera")&&(r.fillStyle="#222",r.fillRect(p-22,208,44,30),b(p,224,11,11,"#557"),b(p,224,6,6,"#9bd"),r.strokeStyle="#333",r.lineWidth=4,r.beginPath(),r.moveTo(p-30,184),r.lineTo(p-20,210),r.moveTo(p+30,184),r.lineTo(p+20,210),r.stroke()),c.includes("pins")&&(b(p+44,214,5,5,"#fff"),b(p+54,226,4,4,"#4ae0c0"),b(p+40,228,3,3,"#e84a6f")),b(p-f+2,v+4,7,11,g),b(p+f-2,v+4,7,11,g),r.fillStyle=s.skin,r.beginPath(),r.moveTo(p-f,v-20),r.quadraticCurveTo(p-f,v-m,p,v-m),r.quadraticCurveTo(p+f,v-m,p+f,v-20),r.quadraticCurveTo(p+f,v+34,p+16,v+m-4),r.quadraticCurveTo(p,v+m+4,p-16,v+m-4),r.quadraticCurveTo(p-f,v+34,p-f,v-20),r.fill(),b(p-26,v+22,10,6,"rgba(230,110,100,0.16)"),b(p+26,v+22,10,6,"rgba(230,110,100,0.16)"),c.includes("earrings")&&(b(p-f,v+22,4,8,"#f4d060"),b(p+f,v+22,4,8,"#f4d060"));const T=v+2,A=21;let L=1,P=0,_=0,S="flat",G=1;switch(t){case"smile":S="smile",L=.85;break;case"laugh":S="laugh",L=.25,P=-2;break;case"sad":S="sad",_=-5,L=.8;break;case"scared":S="o",_=-6,L=1.3,G=.7,P=-4;break;case"angry":S="sad",_=7,L=.8,P=3;break;case"worried":S="wavy",_=-5;break;case"smirk":S="smirk",L=.75,_=2;break;case"surprised":S="o",L=1.25,P=-5;break;case"blank":G=.8;break}if(s.brows==="strict"&&(_+=4),c.includes("maskface")){r.fillStyle="#e8e4d8",r.beginPath(),r.ellipse(p,v,f-2,m-2,0,0,7),r.fill(),b(p-20,v-4,9,12,"#111"),b(p+20,v-4,9,12,"#111"),r.strokeStyle="#111",r.lineWidth=4,r.beginPath(),r.moveTo(p-24,v+26),r.quadraticCurveTo(p,v+48,p+24,v+26),r.stroke();for(let I=-2;I<=2;I++)r.beginPath(),r.moveTo(p+I*9,v+30),r.lineTo(p+I*9,v+40),r.stroke()}else{for(const z of[-1,1]){const O=p+z*A;s.shadow&&b(O,T-4,13,9,s.shadow+"99"),r.save(),r.beginPath(),r.ellipse(O,T,11,8*Math.min(L,1.3),0,0,7),r.clip(),r.fillStyle="#f6f1ea",r.fillRect(O-12,T-12,24,24),b(O+(t==="smirk"?2:0),T+.5,7*G,7*G,s.eyes),b(O+(t==="smirk"?2:0),T+.5,3.4*G,3.4*G,"#120a08"),b(O-2.5,T-3,2,2,"#fff"),r.fillStyle=g,r.fillRect(O-12,T-12,24,5+(1-Math.min(L,1))*6),r.restore(),r.strokeStyle="#1a1010",r.lineWidth=s.lips||s.shadow?3:2.2,r.beginPath(),r.ellipse(O,T,11,8*Math.min(L,1.3),0,Math.PI*1.05,Math.PI*1.95),r.stroke(),(s.lips||s.shadow)&&(r.beginPath(),r.moveTo(O+z*10,T-3),r.lineTo(O+z*15,T-7),r.stroke()),t==="laugh"&&(r.strokeStyle="#1a1010",r.lineWidth=2.5,r.beginPath(),r.arc(O,T+4,9,Math.PI*1.15,Math.PI*1.85),r.stroke()),r.strokeStyle=re(h==="#f0d98a"||h==="#e8e0f0"||h==="#e8e8f0"?"#a88a4a":h,-.25),r.lineWidth=s.brows==="strict"?4.5:3.2,r.lineCap="round",r.beginPath();const Q=T-16+P;r.moveTo(O-z*10,Q+_*.5+(s.brows==="arch"?1:0)),r.quadraticCurveTo(O,Q-(s.brows==="arch"?5:2),O+z*11,Q-_*.5+(s.brows==="arch"?2:0)),r.stroke()}r.strokeStyle=g,r.lineWidth=2,r.beginPath(),r.moveTo(p-1,v+10),r.quadraticCurveTo(p-5,v+22,p+2,v+23),r.stroke();const I=v+37;if(r.strokeStyle=s.lips||"#7a3a34",r.fillStyle=s.lips||"#7a3a34",r.lineWidth=s.lips?4:2.6,r.lineCap="round",r.beginPath(),S==="flat"&&(r.moveTo(p-9,I),r.quadraticCurveTo(p,I+2,p+9,I),r.stroke()),S==="smile"&&(r.moveTo(p-12,I-2),r.quadraticCurveTo(p,I+8,p+12,I-2),r.stroke()),S==="smirk"&&(r.moveTo(p-9,I+1),r.quadraticCurveTo(p+2,I+4,p+13,I-4),r.stroke()),S==="sad"&&(r.moveTo(p-10,I+3),r.quadraticCurveTo(p,I-4,p+10,I+3),r.stroke()),S==="wavy"&&(r.moveTo(p-10,I),r.quadraticCurveTo(p-5,I-4,p,I),r.quadraticCurveTo(p+5,I+4,p+10,I),r.stroke()),S==="o"&&(r.fillStyle="#4a1a1a",r.ellipse(p,I+1,6,8,0,0,7),r.fill(),r.stroke()),S==="laugh"&&(r.fillStyle="#4a1a1a",r.moveTo(p-14,I-4),r.quadraticCurveTo(p,I+18,p+14,I-4),r.closePath(),r.fill(),r.stroke(),r.fillStyle="#fff",r.fillRect(p-8,I-3,16,4)),c.includes("freckles")){r.fillStyle=re(s.skin,-.3);for(const[z,O]of[[-30,14],[-24,18],[-18,13],[-26,10],[30,14],[24,18],[18,13],[26,10],[-4,16],[5,15]])r.beginPath(),r.arc(p+z,v+O,1.6,0,7),r.fill()}c.includes("mole")&&b(p+24,v+30,2.2,2.2,"#3a1a14")}if(c.includes("glasses")){r.strokeStyle="#222",r.lineWidth=3;for(const I of[-1,1])r.beginPath(),r.ellipse(p+I*A,T,15,13,0,0,7),r.stroke(),r.fillStyle="rgba(190,225,255,0.18)",r.fill();r.beginPath(),r.moveTo(p-6,T),r.lineTo(p+6,T),r.stroke()}if(c.includes("visor")&&(r.fillStyle=(s.trim||"#40e0d0")+"cc",r.fillRect(p-f-2,T-11,f*2+4,20),r.fillStyle="#ffffff55",r.fillRect(p-f+4,T-8,30,3)),c.includes("maskhalf")&&(r.fillStyle="#e8c36a",r.beginPath(),r.ellipse(p,T-2,f-2,18,0,0,7),r.fill(),b(p-A,T,8,5,"#120a08"),b(p+A,T,8,5,"#120a08")),r.fillStyle=h,x!=="none"){const I=v-m-8;if(r.beginPath(),r.moveTo(p-f-3,v-8),r.quadraticCurveTo(p-f-6,I,p,I-2),r.quadraticCurveTo(p+f+6,I,p+f+3,v-8),s.bangs?(r.quadraticCurveTo(p+f-6,v-18,p+f-10,v-14),r.lineTo(p-f+10,v-14),r.quadraticCurveTo(p-f+6,v-18,p-f-3,v-8)):x==="short"||x==="bun"||x==="ponytail"?(r.quadraticCurveTo(p+f-4,v-34,p+10,v-40),r.quadraticCurveTo(p-20,v-44,p-f-3,v-8)):(r.quadraticCurveTo(p+f-2,v-30,p-8,v-44),r.quadraticCurveTo(p-f+4,v-30,p-f-3,v-8+(x==="bob"||x==="bobLong"?30:10))),r.fill(),s.bangs){r.strokeStyle=u,r.lineWidth=1.5;for(let z=-3;z<=3;z++)r.beginPath(),r.moveTo(p+z*11,v-40),r.lineTo(p+z*12,v-15),r.stroke()}if(x==="bob"||x==="bobLong"||x==="long"||x==="longStyled"||x==="glam"||x==="rapunzel"){r.fillStyle=h;const z=x==="bob"?152:x==="bobLong"?172:236;r.fillRect(p-f-8,v-10,10,z-v+10),r.fillRect(p+f-2,v-10,10,z-v+10),(x==="bob"||x==="bobLong")&&(b(p-f-2,z-4,9,8,h),b(p+f+2,z-4,9,8,h))}if(y)for(let z=0;z<9;z++)b(p-48+z*12,v-m+2+z%2*6+Math.abs(z-4)*3,12,12,z%2?h:d);if(x==="fluffy")for(let z=0;z<8;z++)b(p-46+z*13,v-m+4+z%2*5+Math.abs(z-3.5)*3.5,13,12,z%2?d:h);r.strokeStyle=d,r.lineWidth=3,r.beginPath(),r.arc(p-8,v-30,30,Math.PI*1.15,Math.PI*1.5),r.stroke()}c.includes("hat")&&(r.fillStyle="#2a2a2e",r.beginPath(),r.ellipse(p,v-36,80,12,0,0,7),r.fill(),r.fillStyle="#3a3a40",r.beginPath(),r.moveTo(p-46,v-38),r.quadraticCurveTo(p-44,v-86,p,v-84),r.quadraticCurveTo(p+44,v-86,p+46,v-38),r.fill(),r.fillStyle="#111",r.fillRect(p-46,v-48,92,9)),c.includes("crown")&&(r.fillStyle="#f4d060",r.beginPath(),r.moveTo(p-38,v-52),r.lineTo(p-42,v-92),r.lineTo(p-20,v-70),r.lineTo(p,v-98),r.lineTo(p+20,v-70),r.lineTo(p+42,v-92),r.lineTo(p+38,v-52),r.fill(),b(p,v-62,6,6,"#d02040")),c.includes("headphones")&&(r.strokeStyle="#222",r.lineWidth=8,r.beginPath(),r.arc(p,v-8,f+8,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#222",r.fillRect(p-f-14,v-12,16,34),r.fillRect(p+f-2,v-12,16,34));const B=l.toDataURL();return ja.set(e,B),B}const I0={chars:"Персонажи",places:"Места",items:"Предметы",clues:"Улики",script:"Сценарий"},Js={camera:{name:"Фотоаппарат Василисы",desc:"Запасная камера. «Плёнка здесь иногда видит больше, чем глаза». Клавиша C."},marionette:{name:"Двуликая марионетка",desc:"Добыча Рубена. У куклы два лица — спереди и сзади. Вырезана как ключ."},lantern:{name:"Бумажный фонарик",desc:"С фестиваля Матвея. Внутри записка: «Сто шагов — мои»."},archive_card:{name:"Каталожная карточка",desc:"Нашла Эрика. Шифр архива Театра имени М. Ковалевского."},braid:{name:"Коса Лизы",desc:"Сто локтей прекрасной верёвки. Лиза оставила башне волосы, а себе — свободу."},demo:{name:"Демо-запись Ангелины",desc:"Песня, которую не писал комитет."},flashlight:{name:"Фонарь",desc:"Старый, тяжёлый, с жёлтым лучом. Полина держит его двумя руками."},porch_key:{name:"Ключ из-под горшка",desc:"Конечно, под цветочным горшком. Где же ещё."},owner_mask:{name:"Маска Хозяина",desc:"Белая, пустая изнутри. На подкладке: «А. Е.»."},gear:{name:"Шестерня",desc:"Латунная, от башенного механизма."},weight:{name:"Гиря",desc:"Противовес. Тяжёлая, но Лиза помогает волосами."},tower_key:{name:"Ключ с люстры",desc:"Висел там, где «принцессе не достать»."},emp:{name:"Глушилка",desc:"Гаджет Ноля. На пять секунд слепит охрану. Клавиша G. Зарядов мало."}},Mt=(i,t,e,n,s)=>({cat:i,title:t,text:e,char:n,expr:s}),zr={cast:Mt("chars","Труппа","Полина, Рубен, Матвей, Эрика, Лиза, Ангелина. Все получили письма: «Режиссёр — Варвара». Никто не удивился.","varya","smile"),c_alla:Mt("chars","Алла Ева","Прима. Опаздывает, требует, перебивает. Иногда права — и это раздражает сильнее всего.","alla","smirk"),c_polina:Mt("chars","Полина","Боялась весь особняк. И всё равно прошла его одна. Замечает узоры, которые я пропускаю.","polina","smile"),c_ruben:Mt("chars","Рубен","Отказался от моего плана и от золота. Вынес одну куклу и всю команду.","ruben","smile"),c_matvey:Mt("chars","Матвей","Сделал свои сто шагов сам. Мои сто — назад — были труднее, чем я думала.","matvey","smile"),c_erika:Mt("chars","Эрика","Закрыла дело так, как считала правильным. Проверяет факты, даже когда они ей не нравятся.","erika","neutral"),c_liza:Mt("chars","Лиза","Ушла из башни раньше, чем её успели спасти. Волосы оставила, косу забрала.","liza","laugh"),c_angelina:Mt("chars","Ангелина","Спела своё. Агентство осталось с фонограммой и чужим лицом на экранах.","angelina","smirk"),c_artemiy:Mt("chars","Артемий","Строгий только снаружи. Кормит школьного кота и не умеет врать.","artemiy","neutral"),troupe:Mt("chars","Второй состав","Василиса, Дана, Нина, Аня, Оля — на гастролях со «Снежной королевой». Это они рекомендовали меня. Вернутся к премьере; просили третий ряд.","vasilisa","smile"),doors:Mt("places","Шесть дверей","В кармане сцены — шесть дверей, каждая в свой жанр. Мокрая, неоновая, школьная, с матовым стеклом, книга и зеркало."),shadows:Mt("places","Тени держат","В этом театре по тени можно ходить, если её отбрасывает правильная декорация."),masks:Mt("places","Три маски","Комедия — что смешно. Трагедия — что сломано и спрятано. Драма — что чувствуют. Клавиши 1, 2, 3."),invite:Mt("clues","Приглашение Кукольника","Пометки на полях — знакомым почерком. Уверенным, немного командным."),camera:Mt("clues","Плёнка видит больше","Василиса советует снимать всё странное и сравнивать."),mirror:Mt("clues","Отражение опаздывает","В гримёрке отражение поправило серёжку. Я не ношу серёжки."),missing:Mt("clues","Труппа исчезла","Погас свет — и на сцене никого. Алла Ева не удивилась. Мокрые следы ведут за кулисы."),photo_inside:Mt("clues","Снимок «до»","Фото, где мы с Полиной уже внутри особняка, сделано с крыльца — до того, как мы вошли. В архиве оно числится неделю."),marionette:Mt("clues","Двуликая кукла","У марионетки два лица. Рубену это не понравилось. Мне тоже."),card:Mt("clues","Алла Ева в сороковых","В городе Эрики её имя — на афишах 1940-х. Она не может быть такой старой. Или «она» — не возраст."),alla_knows:Mt("clues","Она знает про утренник","Алла Ева помнит, как я в семь лет забыла слова. Этого не помнит даже мама."),one_shadow:Mt("clues","Одна тень","В маске Трагедии у Аллы Евы нет своей тени. Под ней лежит моя."),maquette:Mt("clues","Макет с коробочками","Для каждого из друзей заранее сделана коробка-жанр."),twins:Mt("clues","Склеенные фигурки","В центре макета стояли две фигурки спиной к спине: красная и бирюзовая. С одинаковым каре."),timegap:Mt("clues","Пропавшие часы","Я потеряла два с половиной часа в мастерской. Что я делала в это время?"),handwriting:Mt("clues","Петля на «р»","Эрика: письма Кукольника, пометки в сценарии и мой блокнот написаны одной рукой."),ledger:Mt("clues","Протокол собрания","Труппа голосовала за меня. Худрук воздержался: «не могу голосовать за себя»."),contract:Mt("clues","Две подписи","«А. Ева» и «К.» на контракте — один нажим, одни чернила, разные росчерки."),seating:Mt("clues","Третий ряд","«Рот открывать, звук не давать». И на обороте: «Меня будет видно из любого ряда»."),drafts:Mt("clues","Черновики приглашения","Три черновика письма мне. Моим почерком."),puppets:Mt("clues","Одна вага","Шесть марионеток, нити сходятся к одной ваге — перед креслом худрука."),kukolnik:Mt("clues","Кто такой Кукольник","Худрук — не человек, а должность. Кто-то должен был всех собрать. Я всегда беру это на себя."),poses:Mt("clues","Одна поза","В большом зеркале мы с Аллой Евой стоим одинаково. Она — на моём месте."),knotes:Mt("clues","Записки К.","«Это я тебе. То есть себе. То есть — тебе». Кукольник путается в местоимениях."),casting:Mt("clues","Лист распределения","Можно вписать роль самой. Можно спросить. Второе выглядит неряшливо и честно."),act4:Mt("clues","Она расчистила сцену","Во всех шести мирах была Алла Ева — под разными масками. Каждому дала главную роль подальше от своей."),script:Mt("script","The Queen's Last Curtain","Королева, которой нужны аплодисменты, и Молодая Девушка. Страницы описывают то, что ещё не случилось."),program:Mt("script","Финал из программки","«…и когда декорации исчезают, зал видит, что на сцене стоит один человек»."),page8:Mt("script","Страница 8","Королева рассылает приглашённых по чужим пьесам. «Я всем дала по спектаклю. Себе — тоже»."),steps:Mt("script","Ремарка Матвея","«Режиссёр отходит на сто шагов. Сцена продолжается без него. Сцена становится лучше»."),braid:Mt("script","Ремарка Лизы","«Принцесса выходит сама. Спасатель опаздывает. Никто не пострадал, кроме сюжета»."),demo:Mt("script","Ремарка Ангелины","«Фонограмма выключена. Поёт та, чьё это лицо»."),n_pol_book:Mt("script","Проклятая книга","«Дом смеётся над тем, кто играет роль, которую ему назначили. Перестань играть — и он замолчит»."),n_pol_photos:Mt("clues","Невозможные фотографии","На трёх снимках в библиотеке — то, чего не бывает: тринадцатый час, человек без тени, отражение спиной. На рамках — годы, на обороте — знаки."),n_pol_wall:Mt("clues","Обои с цветами","Полина заметила: в каждой комнате цветок на обоях повёрнут по-своему — вверх или вниз."),n_pol_owner:Mt("clues","Маска Хозяина","Под маской никого не было. На подкладке — театральный штамп и буквы «А. Е.»."),n_rub_plan:Mt("script","План ограбления","Мой план был поминутным. Рубен сказал: «План нужен, чтобы было от чего отступать»."),n_rub_fortuna:Mt("clues","Леди Фортуна","Хозяйка казино в золотой полумаске знала наш план заранее. Родинка под глазом. Знакомая манера говорить «дорогуша»."),n_mat_fake:Mt("script","Слишком красиво","Чем больше я ставлю «идеальных моментов», тем фальшивее они выглядят. Лепестки падают по команде."),n_mat_teacher:Mt("clues","Руководительница драмкружка","Строгая, в очках. Вычёркивала Матвея из главных ролей. Родинка под глазом."),n_eri_case:Mt("clues","Дело Вронской","Актриса Лидия Вронская исчезла накануне премьеры. Показания противоречат уликам."),n_eri_alla:Mt("clues","Поручительница","В контракте Вронской поручителем значится Алла Ева. Афиши с её именем — по всему городу."),n_liz_role:Mt("script","Роль принцессы","Рассказчик, Фея и зеркальце хором объясняют Лизе, что принцессы ждут. Лиза не ждёт."),n_liz_voice:Mt("clues","Голос Рассказчика","Говорит басом, но ставит ударения как один мой знакомый человек в красном."),n_ang_concept:Mt("script","Концепт «ANGEL♡»","Агентство хочет розовые волосы, новое имя и песню, написанную комитетом."),n_ang_assist:Mt("clues","Ассистентка","Розовый козырёк, родинка под глазом. Это она предложила «заменить лицо»."),n_diva:Mt("clues","Третий ряд Аллы Евы","Она боится не свиста. Она боится, что зал посмотрит сквозь неё. Это объясняет. Это не оправдывает."),n_collapse:Mt("places","Театр складывается","Коридоры ведут в комнаты из чужих жанров. Работает всё, чему мы научились, — и все, кто рядом.")},on="#eadfc8",Te="#b9a888",We="#c9a35a",bi="#b3142c",Jn="#6e0a18",ki="#120c0d",Il=(i,t,e,n=on,s=.16)=>`<path d="M${i},${t-e} L${i+e*s},${t-e*s} L${i+e},${t} L${i+e*s},${t+e*s} L${i},${t+e} L${i-e*s},${t+e*s} L${i-e},${t} L${i-e*s},${t-e*s}Z" fill="${n}"/>`,U0=(i,t,e,n=We)=>{let s="";for(let a=0;a<16;a++){const o=a*Math.PI/8,l=a%2?e*.55:e,r=.06;s+=`<path d="M${i},${t} L${i+Math.cos(o-r)*6},${t+Math.sin(o-r)*6} L${i+Math.cos(o)*l},${t+Math.sin(o)*l} L${i+Math.cos(o+r)*6},${t+Math.sin(o+r)*6}Z" fill="${n}"/>`}return s+`<circle cx="${i}" cy="${t}" r="${e*.17}" fill="${n}" stroke="${ki}" stroke-width="1.5"/>`},Ul=(i,t)=>`<g><path d="${i}" stroke="${Te}" stroke-width="30" fill="none"/><path d="${i}" stroke="${ki}" stroke-width="30" stroke-dasharray="3 9" fill="none"/><path d="${i}" stroke="#2a2220" stroke-width="16" fill="none"/><path d="${i}" stroke="${Te}" stroke-width="16" stroke-dasharray="2 22" fill="none" opacity=".8"/></g>`,Nl=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n}) scale(${e})">
  <path d="M0,0 C-10,40 -6,90 4,140" stroke="#3b4a34" stroke-width="5" fill="none"/><path d="M2,70 C-30,60 -52,72 -60,96 C-36,92 -14,86 2,74Z" fill="#3b4a34"/>
  ${[0,72,144,216,288].map(s=>`<path transform="rotate(${s})" d="M0,0 C-14,-20 -16,-52 0,-78 C16,-52 14,-20 0,0Z" fill="${on}" stroke="${Te}" stroke-width="2"/><path transform="rotate(${s})" d="M0,-6 L0,-60" stroke="${Te}" stroke-width="1.5"/>`).join("")}
  ${[-30,-10,10,30].map(s=>`<path transform="rotate(${s})" d="M0,0 L0,-46" stroke="${We}" stroke-width="1.6"/><ellipse transform="rotate(${s})" cx="0" cy="-48" rx="3" ry="6" fill="#a0602a"/>`).join("")}</g>`,N0=(i,t,e)=>`<g transform="translate(${i} ${t}) scale(${e})">
  <path d="M0,20 C6,70 -4,110 10,150" stroke="#2c3a2a" stroke-width="5" fill="none"/>
  ${[0,90,180,270].map((n,s)=>`<path transform="rotate(${n+20})" d="M0,0 C-44,-6 -58,-48 -30,-66 C-8,-80 22,-70 30,-50 C40,-24 22,-4 0,0Z" fill="${s%2?bi:"#c8202e"}" stroke="${Jn}" stroke-width="2"/>`).join("")}
  ${[0,60,120,180,240,300].map(n=>`<path transform="rotate(${n})" d="M0,0 C-6,-14 -4,-30 0,-40" stroke="${Jn}" stroke-width="1.5" fill="none" opacity=".7"/>`).join("")}
  <circle r="14" fill="#1c1416"/>${[0,45,90,135,180,225,270,315].map(n=>`<circle transform="rotate(${n})" cx="0" cy="-20" r="2.4" fill="#1c1416"/>`).join("")}</g>`,Fs=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n})"><path d="M-6,0 C-6,${e*.3} -5,${e*.55} -4,${e*.62} L-3.4,${e*.66} C-4,${e*.8} -3,${e*.95} 0,${e} C3,${e*.95} 4,${e*.8} 3.4,${e*.66} L4,${e*.62} C5,${e*.55} 6,${e*.3} 6,0Z" fill="${on}" stroke="#7a6a52" stroke-width="1.6"/>${[.3,.62].map(s=>`<path d="M-4,${e*s} C-1,${e*s+3} 1,${e*s+3} 4,${e*s}" stroke="#7a6a52" stroke-width="1.2" fill="none"/>`).join("")}<path d="M-2.4,${e-7} C-1,${e-3} 1,${e-3} 2.4,${e-7}" stroke="#a89878" stroke-width="1.2" fill="none"/></g>`,F0=`<g transform="translate(1010 34) rotate(14)">
  <path d="M84,-40 C110,-30 140,-38 168,-60 L184,-20 C160,0 128,10 100,8Z" fill="#1c1416" stroke="${Te}" stroke-width="1.5"/>
  ${[0,1,2,3,4,5].map(i=>`<path d="M${84+i*3},${-38+i*8} l-10,4 l10,3" stroke="${Te}" stroke-width="1.4" fill="none"/>`).join("")}
  <path d="M86,-36 C60,-30 34,-24 10,-6 C0,4 -4,18 2,30 C18,44 46,46 70,38 C84,30 96,10 100,4Z" fill="${on}" stroke="#7a6a52" stroke-width="2"/>
  ${[[20,-2],[36,-4],[52,-4],[66,0]].map(([i,t])=>`<path d="M${i},${t} C${i+4},${t+8} ${i+6},${t+16} ${i+4},${t+26}" stroke="#a89878" stroke-width="1.3" fill="none"/>`).join("")}
  ${Fs(6,22,58,22)}${Fs(24,32,70,10)}${Fs(44,36,72,-2)}${Fs(62,32,60,-14)}
  <g transform="translate(86 20) rotate(-58)"><path d="M-7,0 C-7,20 -5,34 0,40 C5,34 7,20 7,0Z" fill="${on}" stroke="#7a6a52" stroke-width="1.6"/></g>
  ${[[10,10],[30,22],[50,26],[70,20]].map(([i,t])=>`<path d="M${i},${t} l4,2" stroke="#7a6a52" stroke-width="1.4"/>`).join("")}</g>`,k0=`<g transform="translate(1046 232) rotate(-14) scale(.85)"><path d="M-46,-38 C-20,-56 26,-56 50,-40 C58,-12 54,26 38,52 C26,70 6,78 -6,70 C-16,62 -8,40 -26,30 C-44,20 -56,-12 -46,-38Z" fill="${on}" stroke="${Te}" stroke-width="2.5"/>
  <path d="M-30,-14 C-20,-24 -4,-22 2,-10 C-6,-2 -22,-2 -30,-14Z" fill="${ki}"/><path d="M14,-12 C22,-24 38,-22 42,-10 C36,0 22,0 14,-12Z" fill="${ki}"/>
  <path d="M-48,-30 C-20,-46 26,-48 50,-34" stroke="${We}" stroke-width="2.5" fill="none"/><path d="M4,8 C6,20 10,30 18,34" stroke="${Te}" stroke-width="2" fill="none"/></g>`,O0=`<g transform="translate(470 676) rotate(-12)"><rect x="-58" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Te}" stroke-width="3"/><rect x="14" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Te}" stroke-width="3"/>
  <ellipse cx="-36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${on}" stroke-width="3"/><ellipse cx="36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${on}" stroke-width="3"/><rect x="-14" y="-12" width="28" height="18" rx="4" fill="${We}"/>
  <path d="M-46,-22 L-46,18 M24,-22 L24,18" stroke="${on}" stroke-width="3" opacity=".6"/><path d="M0,-12 C10,-50 60,-60 90,-48" stroke="${We}" stroke-width="3" fill="none"/></g>`,B0=`<g transform="translate(890 668) rotate(-10)"><rect x="-74" y="-44" width="148" height="88" rx="6" fill="#d8ccb2" stroke="${Te}" stroke-width="3"/><rect x="-66" y="-36" width="132" height="72" fill="none" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M-46,20 L-46,-6 L0,-24 L46,-6 L46,20Z" fill="none" stroke="#5a4a3a" stroke-width="2"/>${[-34,-18,-2,14,30].map(i=>`<path d="M${i},20 L${i},0" stroke="#5a4a3a" stroke-width="2"/>`).join("")}<path d="M-56,24 L56,24" stroke="#5a4a3a" stroke-width="2"/>
  <text x="0" y="-27" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" fill="#5a4a3a" letter-spacing="2">ТЕАТРЪ</text><circle cx="-74" cy="0" r="8" fill="${ki}"/><circle cx="74" cy="0" r="8" fill="${ki}"/></g>`;function zc(i="lg"){return`<svg class="logo-svg" viewBox="0 0 1200 800" role="img" aria-label="THE OTHER ME: APPLAUSE, PLEASE!" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="${i}iv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6eedc"/><stop offset=".55" stop-color="${on}"/><stop offset="1" stop-color="#a8977a"/></linearGradient>
  <linearGradient id="${i}rd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2283c"/><stop offset=".6" stop-color="${bi}"/><stop offset="1" stop-color="${Jn}"/></linearGradient>
  <linearGradient id="${i}cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${Jn}"/><stop offset=".5" stop-color="${bi}"/><stop offset="1" stop-color="${Jn}"/></linearGradient>
  <filter id="${i}worn" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -9 6.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <radialGradient id="${i}vig"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <clipPath id="${i}arch"><path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262Z"/></clipPath>
  <filter id="${i}glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="5" result="b0"/><feColorMatrix in="b0" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g class="lg-orn" stroke-linejoin="round"><g transform="translate(600 262) scale(1.32) translate(-600 -262)">
  <path d="M360,262 C360,170 440,118 520,112 C556,108 584,96 600,78 C616,96 644,108 680,112 C760,118 840,170 840,262" stroke="${We}" stroke-width="5" fill="none"/>
  <path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262" stroke="${Te}" stroke-width="2" fill="none"/>
  ${[400,470,730,800].map((t,e)=>`<circle cx="${t}" cy="${[196,142,142,196][e]}" r="5" fill="${We}"/>`).join("")}
  <ellipse cx="600" cy="420" rx="560" ry="330" fill="url(#${i}vig)"/>
  <g clip-path="url(#${i}arch)"><rect x="370" y="90" width="460" height="180" fill="#160a0c"/>
    <path d="M370,120 L830,120 L830,150 C800,206 760,214 730,170 C700,226 650,230 600,178 C550,230 500,226 470,170 C440,214 400,206 370,150Z" fill="url(#${i}cur)"/>
    <path d="M370,150 C400,206 440,214 470,170 C500,226 550,230 600,178 C650,230 700,226 730,170 C760,214 800,206 830,150" stroke="${Jn}" stroke-width="3" fill="none"/>
    ${[420,530,670,780].map(t=>`<path d="M${t},128 C${t+10},160 ${t-6},180 ${t+4},200" stroke="#e2283c" stroke-width="2" fill="none" opacity=".5"/>`).join("")}
    <path d="M370,130 C410,170 420,230 400,270 L370,270Z" fill="${bi}"/><path d="M830,130 C790,170 780,230 800,270 L830,270Z" fill="${bi}"/></g>
  ${[470,730].map(t=>`<path d="M${t},170 L${t},214" stroke="${We}" stroke-width="2"/><path d="M${t-6},214 L${t+6},214 L${t+4},236 L${t-4},236Z" fill="${We}"/>`).join("")}
  ${U0(600,92,40)}</g>
  <path d="M372,262 L828,262" stroke="${We}" stroke-width="4"/><path d="M386,268 L814,268" stroke="${Te}" stroke-width="1.5"/>
  ${Ul("M40,560 C90,520 160,540 190,600 C220,660 300,700 380,690")}
  ${Ul("M1060,420 C1100,392 1150,402 1162,444 C1172,480 1150,506 1124,504")}
  
  ${Nl(110,440,.85,-18)}${Nl(162,486,.55,24)}
  ${N0(1104,610,.68)}
  ${F0}
  ${[[1002,104,1030,196],[1026,120,1070,200],[1052,126,940,290],[1076,118,1140,420]].map(([t,e,n,s])=>`<path d="M${t},${e} L${n},${s}" stroke="${Te}" stroke-width="1.6" opacity=".85"/>`).join("")}
  ${k0}
  <g stroke="${Te}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M268,372 C226,352 196,370 200,398 C204,422 236,424 244,404 C250,388 232,380 224,392"/><path d="M268,372 C240,330 260,300 290,300"/><path d="M262,440 C230,450 210,474 226,494"/>
    <path d="M940,372 C982,352 1012,370 1008,398 C1004,422 972,424 964,404 C958,388 976,380 984,392"/><path d="M940,440 C972,450 992,474 976,494"/>
    ${[[212,470],[236,316],[998,470]].map(([t,e])=>`<path d="M${t},${e} l-8,-10 M${t},${e} l10,-6"/>`).join("")}
  </g>
</g>
<g filter="url(#${i}worn)">
  <text x="248" y="246" font-family="Aurelia, serif" font-size="58" fill="url(#${i}iv)" letter-spacing="8">THE</text><path d="M246,258 L360,258" stroke="${We}" stroke-width="2"/>
  <text x="600" y="418" text-anchor="middle" font-family="Aurelia, serif" fill="url(#${i}iv)" stroke="#2a1e1a" stroke-width="1.5" paint-order="stroke"><tspan font-size="212" dy="10">O</tspan><tspan font-size="168" dy="-10" letter-spacing="4">THER</tspan><tspan font-size="212" dx="30" dy="10">M</tspan><tspan font-size="168" dy="-10">E</tspan><tspan font-size="150" fill="${We}" dx="10">:</tspan></text>
  </g>
<text x="612" y="528" text-anchor="middle" font-family="Cintarini, cursive" font-size="104" fill="url(#${i}rd)" stroke="url(#${i}rd)" stroke-width="3.2" transform="rotate(-4 600 510)" filter="url(#${i}glow)">Applause, Please!</text>
<g class="lg-orn2" transform="translate(0 -20)">
  <path d="M280,630 C380,612 470,640 540,626 C570,620 586,614 600,604 C614,614 630,620 660,626 C730,640 820,612 920,630" stroke="${Te}" stroke-width="2.5" fill="none"/>
  <path d="M330,618 C300,600 300,580 322,578 M870,618 C900,600 900,580 878,578" stroke="${Te}" stroke-width="2" fill="none"/>
  <path d="M560,640 L600,736 L640,640 C626,652 612,650 600,644 C588,650 574,652 560,640Z" fill="${bi}"/><path d="M582,650 L600,712 L618,650" stroke="${Jn}" stroke-width="2" fill="none"/>
  ${Il(600,640,40,on,.12)}
  ${O0}${B0}
  ${[[300,150,16],[1030,190,10],[110,360,12],[1150,580,14],[250,520,9],[700,690,10],[1170,300,8],[60,700,10],[780,60,9],[420,70,7]].map(([t,e,n])=>Il(t,e,n,We)).join("")}
</g></svg>`}const cn=()=>document.getElementById("ui");function _e(i,t="",e="",n){const s=document.createElement(i);return t&&(s.className=t),e&&(s.innerHTML=e),n&&n.appendChild(s),s}const Ce=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;"),z0=i=>`${Math.floor(i/3600)}:${String(Math.floor(i/60)%60).padStart(2,"0")}`,G0=zc("m");class V0{constructor(){this.modal=!1,this.dialogOpen=!1,this.modals=[],this.log=[],this.advance=null,this.auto=!1,this.placeEl=null,this.skipping=!1}init(){const t=cn();this.hudEl=_e("div","hud hidden","",t),this.maskRow=_e("div","masks","",this.hudEl),this.hudR=_e("div","hud-r","",this.hudEl),this.toasts=_e("div","toasts","",t),this.promptEl=_e("div","prompt hidden","",t),this.saveEl=_e("div","savemark","✎ сохранено",t),this.lyricEl=_e("div","lyric hidden","",t),this.dlg=_e("div","dlg hidden",'<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>',t),this.vf=_e("div","viewfinder hidden","<b>● REC</b><span>E / Enter — снимок · C / Esc — убрать камеру</span>",t),this.loadingEl=_e("div","savemark","Меняем декорации…",t),this.loadingEl.style.right="auto",this.loadingEl.style.left=".8rem",this.dlg.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="hist"?this.history():n==="auto"?(this.auto=!this.auto,e.target.style.background=this.auto?"#8e1830":"",this.auto&&this.advance&&this.advance()):n==="skip"?(this.skipping=!0,this.advance&&this.advance()):this.advance&&this.advance()}),Ei(e=>{if(this.modal){e==="pause"&&this.closeTop();return}e==="act"&&this.advance&&this.advance()}),this.hudR.innerHTML='<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="note" title="Блокнот (Tab)">✎</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>',this.hudR.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="cam"&&Qi("camera"),n==="note"&&Qi("notebook"),n==="pause"&&Qi("pause")}),this.maskRow.addEventListener("click",e=>{const n=e.target.closest(".maskb");n&&It.setMask(n.dataset.m)}),this.buildTouch(),this.applySettings()}applySettings(){document.documentElement.style.setProperty("--s",String(Se.uiScale)),document.body.classList.toggle("contrast",Se.contrast),$t.applyVolumes(),this.touchEl.classList.toggle("hidden",!Se.touch||!It.running)}say(t){this.dialogOpen=!0,this.dlg.classList.remove("hidden"),this.prompt(null);const e=this.dlg.querySelector(".port"),n=e.querySelector("img"),s=this.dlg.querySelector(".name"),a=this.dlg.querySelector(".text");return e.classList.toggle("none",!t.portrait),t.portrait&&(n.src=t.portrait),s.innerHTML=t.name?`<i style="background:${t.color}"></i>${Ce(t.name)}`:"",a.classList.toggle("it",t.italic),this.log.push({name:t.name,text:t.text,color:t.color}),this.log.length>250&&this.log.shift(),new Promise(o=>{const l=t.text;let r=0,c=!1,h,u;const d=Se.textSpeed,g=()=>{clearInterval(h),clearTimeout(u),this.advance=null,o()},p=()=>{r=l.length,a.textContent=l,c=!0,clearInterval(h),this.auto&&(u=setTimeout(g,900+l.length*45))};if(It.fast||this.skipping&&t.seen||Ti("skip")&&t.seen){a.textContent=l,setTimeout(g,It.fast?0:60);return}this.skipping=!1,d?(a.textContent="",h=setInterval(()=>{r=Math.min(l.length,r+Math.max(1,Math.round(d/30))),a.textContent=l.slice(0,r),r%3===0&&/[а-яa-z]/i.test(l[r-1]||"")&&$t.blip(t.pitch),r>=l.length&&p()},33)):p(),this.advance=()=>{c?g():p()}})}sayHide(){this.dialogOpen=!1,this.dlg.classList.add("hidden"),this.skipping=!1}choice(t){if(It.fast)return Promise.resolve(It.autoChoice?It.autoChoice(t):0);const e=_e("div","choices"+(this.dialogOpen?"":" solo"),"",cn());let n=0;return this.skipping=!1,new Promise(s=>{const a=t.map((h,u)=>{const d=_e("button","choice"+(h.mask?" mask":""),`<span class="n">${u+1}.</span>${Ce(h.text)}`,e);return d.onclick=g=>{g.stopPropagation(),c(u)},d.onmouseenter=()=>{n=u,o()},d}),o=()=>a.forEach((h,u)=>h.classList.toggle("on",u===n)),l=Ei((h,u)=>{if(!this.modal){if(h==="up")n=(n+t.length-1)%t.length,$t.sfx("hover"),o();else if(h==="down")n=(n+1)%t.length,$t.sfx("hover"),o();else if(h==="act")c(n);else if(/^Digit[1-9]$/.test(u)){const d=parseInt(u.slice(5))-1;d<t.length&&c(d)}}}),r=this.advance;this.advance=null;const c=h=>{l(),e.remove(),$t.sfx("click"),this.advance=r,this.log.push({name:"→",text:t[h].text,color:"#d4ae48"}),setTimeout(()=>s(h),0)};o()})}history(){const e=this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map(n=>`<p>${n.name?`<b style="color:${n.name==="→"?"#8e1830":"#3a2a14"}">${Ce(n.name)}</b> `:""}${n.name?"":"<i>"}${Ce(n.text)}${n.name?"":"</i>"}</p>`).join("")||"<p><i>Пока никто ничего не сказал.</i></p>"}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`).querySelector(".body");e.scrollTop=e.scrollHeight}hudShow(t){this.hudEl.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!Se.touch),t||(this.sayHide(),this.prompt(null),this.lyric(null))}hud(){const t=It.state.f,e=It.room?.def.noMasks;this.maskRow.innerHTML=t.masks&&!e?Object.entries(q0).map(([n,s],a)=>`<button class="maskb${It.state.mask===n?" on":""}" data-m="${n}" title="${s} (${a+1})">${n==="comedy"?"☺":n==="tragedy"?"☹":"❦"}<small>${a+1} ${s}</small></button>`).join(""):"",this.hudR.children[0].classList.toggle("hidden",!It.has("camera")||!!It.room?.def.noCamera)}prompt(t,e=0,n=0){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.dataset.l!==t&&(this.promptEl.dataset.l=t,this.promptEl.innerHTML=`<kbd>E</kbd>${Ce(t)}`),this.promptEl.style.left=e*100+"%",this.promptEl.style.top=Math.max(8,n*100)+"%"}toast(t,e="✦"){if(It.fast)return;const n=_e("div","toast",`<b>${e}</b>${Ce(t)}`,this.toasts);setTimeout(()=>n.remove(),4100)}place(t){if(this.placeEl&&this.placeEl.remove(),It.fast)return;const e=this.placeEl=_e("div","place",`<b>${Ce(t)}</b><i></i>`,cn());setTimeout(()=>e.remove(),3700)}saved(t){this.saveEl.textContent=t==="auto"?"✎ автосохранение":"✎ сохранено",this.saveEl.classList.add("on"),setTimeout(()=>this.saveEl.classList.remove("on"),1600)}loading(t){this.loadingEl.classList.toggle("on",t)}lyric(t,e=""){if(!t){this.lyricEl.classList.add("hidden");return}this.lyricEl.classList.remove("hidden"),this.lyricEl.innerHTML=(e?`<small>${Ce(e)}</small>`:"")+Ce(t).replace(/\n/g,"<br>")}viewfinder(t){this.vf.classList.toggle("hidden",!t)}async transition(t,e){let n=cn().querySelector(".trans");if(e==="out")n&&n.remove(),n=_e("div","trans "+t,"",cn()),n.offsetWidth,n.classList.add("on"),t==="curtain"&&$t.sfx("curtain"),t==="glitch"&&$t.sfx("glitch"),(t==="mirror"||t==="page")&&$t.sfx("whoosh"),await new Promise(s=>setTimeout(s,t==="curtain"?760:520));else if(n){n.classList.remove("on");const s=n;setTimeout(()=>s.remove(),800),await new Promise(a=>setTimeout(a,350))}}paper(t){return It.fast?Promise.resolve():($t.sfx("paper"),new Promise(e=>{this.open(`<div class="paper ${t.cls||""}">${t.stamp?`<div class="stamp">${t.stamp}</div>`:""}${t.title?`<h3>${t.title}</h3>`:""}<div class="${t.hand?"hand":""}">${t.body}</div>${t.sign?`<div class="sign">${t.sign}</div>`:""}<button class="btn small ok" data-x>${t.btn||"Отложить"}</button></div>`,{raw:!0,onClose:()=>{$t.sfx("paper"),e()}}).querySelector(".ok").focus()}))}card(t,e={}){return It.fast?Promise.resolve():new Promise(n=>{const s=_e("div","card",t.map((r,c)=>{const[h,u]=Array.isArray(r)?r:[r,""];return`<p class="${u}" style="animation-delay:${c*.9}s">${h}</p>`}).join("")+'<div class="more">нажмите, чтобы продолжить</div>',cn()),a=performance.now(),o=()=>{performance.now()-a<500||(l(),s.remove(),n())},l=Ei(r=>{r==="act"&&!this.modal&&o()});s.onclick=o})}open(t,e={}){const n=_e("div","modal",e.raw?t:`<div class="sheet ${e.cls||""}">${t}</div>`,cn());return n.onCloseCb=e.onClose,n.noClose=e.noClose,this.modals.push(n),this.modal=!0,this.prompt(null),Dl(!0),n.addEventListener("click",s=>{s.target.closest("[data-x]")&&($t.sfx("click"),this.close(n))}),n}close(t){const e=this.modals.indexOf(t);if(e<0)return;this.modals.splice(e,1),t.remove(),this.modal=this.modals.length>0,this.modal||Dl(!1);const n=t.onCloseCb;n&&n()}closeTop(){const t=this.modals[this.modals.length-1];t&&!t.noClose&&($t.sfx("click"),this.close(t))}confirm(t,e="Да",n="Отмена"){return new Promise(s=>{let a=!1;const o=this.open(`<h2>Минутку</h2><div class="body"><p>${t}</p></div><div class="foot"><button class="btn small" data-x>${n}</button><button class="btn small red" data-y>${e}</button></div>`,{cls:"narrow",onClose:()=>s(a)});o.querySelector("[data-y]").onclick=()=>{a=!0,this.close(o)}})}pause(){if(this.modal)return;It.paused=!0,$t.muffle(600);const t=this.open(`<h2>Антракт <small>${Ce(It.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`,{cls:"narrow",onClose:()=>{It.paused=!1,$t.muffle(It.state.mask==="tragedy"?900:It.state.mask==="drama"?2600:2e4)}});t.addEventListener("click",async e=>{const n=e.target.dataset?.a;n&&($t.sfx("click"),n==="resume"&&this.close(t),n==="save"&&this.saveLoad("save"),n==="load"&&this.saveLoad("load"),n==="note"&&this.notebook(),n==="set"&&this.settings(),n==="menu"&&await this.confirm("Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.","Выйти")&&(this.close(t),It.stopToMenu(),this.mainMenu()))}),t.querySelector(".btn").focus()}settings(){const t=Se,e=(l,r,c="")=>`<div class="row-set"><label>${l}${c?`<small>${c}</small>`:""}</label><div>${r}</div></div>`,n=(l,r,c,h)=>`<input type="range" data-k="${l}" min="${r}" max="${c}" step="${h}" value="${t[l]}">`,s=l=>`<input type="checkbox" data-k="${l}" ${t[l]?"checked":""}>`,a=this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${e("Музыка",n("music",0,1,.05))}${e("Эффекты",n("sfx",0,1,.05))}${e("Голоса",n("voice",0,1,.05),"звуковой сигнал реплик; все реплики идут с субтитрами")}
      ${e("Скорость текста",n("textSpeed",0,120,5),"0 — мгновенно")}${e("Масштаб интерфейса",n("uiScale",.8,1.5,.05))}
      ${e("Качество графики",'<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>')}
      ${e("Меньше вспышек",s("reduceFlash"),"приглушает вспышки и глитч-эффекты")}${e("Без тряски камеры",s("reduceShake"))}${e("Повышенный контраст текста",s("contrast"))}
      ${e("Облегчённые ритм-сцены",s("rhythmEasy"),"широкие окна попадания, меньше нот, нельзя проиграть")}${e("Задержка звука, мс",n("rhythmOffset",-200,200,5)+" <span data-off></span>","для ритм-сцен")}
      ${e("",'<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${e("Сенсорное управление",s("touch"),"экспериментально: джойстик и кнопки на экране")}
      <p class="warn">Управление: WASD или стрелки — ходьба, Shift — быстрее, E / Enter / Пробел — действие, 1–3 — маски, Q — снять маску, C — фотоаппарат, Tab — блокнот, H — история, Ctrl — пропуск прочитанного, Esc — пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);a.querySelector("[data-k=quality]").value=t.quality;const o=a.querySelector("[data-off]");o.textContent=t.rhythmOffset+"",a.addEventListener("input",l=>{const r=l.target,c=r.dataset.k;c&&(t[c]=r.type==="checkbox"?r.checked:r.tagName==="SELECT"?r.value:parseFloat(r.value),o.textContent=t.rhythmOffset+"",bl(),this.applySettings(),c==="quality"&&It.R.setup(),c==="sfx"&&$t.sfx("click"))}),a.addEventListener("click",async l=>{if(l.target.dataset?.a==="calib"){const{calibrate:r}=await bn(async()=>{const{calibrate:h}=await import("./minigames-C6lfeNM4.js");return{calibrate:h}},[],import.meta.url),c=await r();c!=null&&(t.rhythmOffset=c,bl(),a.querySelector("[data-k=rhythmOffset]").value=String(c),o.textContent=c+"")}})}async saveLoad(t){const e=this.open(`<h2>${t==="save"?"Сохранить":"Загрузить"} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс — для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${It.running?'<button class="btn small" data-a="exp">Экспорт в файл</button>':""}<button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-list]"),s=async()=>{const a=await Promise.all(Sl.map(async o=>({s:o,...await Va(o).catch(l=>(console.warn(l),{state:null,broken:!0}))})));n.innerHTML=a.map(({s:o,state:l,broken:r})=>`<div class="slot"><div><b>${u0[o]}</b>${l?`<small>${Ce(l.chapter)} · ${z0(l.time)} в театре · ${new Date(l.savedAt||0).toLocaleString("ru")}</small>`:`<small>${r?"⚠ данные повреждены или несовместимы":"пусто"}</small>`}</div><div class="acts">${t==="save"&&o!=="auto"&&It.running?`<button class="btn small" data-s="${o}" data-do="save">Записать</button>`:""}${l?`<button class="btn small" data-s="${o}" data-do="load">Загрузить</button>`:""}${l||r?`<button class="btn small red" data-s="${o}" data-do="del">✕</button>`:""}</div></div>`).join("")};await s(),e.addEventListener("click",async a=>{const o=a.target,l=o.dataset?.s,r=o.dataset?.do,c=o.dataset?.a;if(r==="save"&&l&&(await It.save(l),await s()),r==="del"&&l&&await this.confirm("Удалить это сохранение?","Удалить")&&(await f0(l),await s()),r==="load"&&l){const h=await Va(l);if(!h.state){this.toast("Сохранение повреждено","⚠");return}if(It.running&&!await this.confirm("Загрузить сохранение? Текущий несохранённый прогресс будет потерян.","Загрузить"))return;this.closeAll(),It.stopToMenu(),document.querySelector(".menu-screen")?.remove(),await It.start(h.state)}if(c==="exp"){const h=new Blob([d0(It.state)],{type:"application/json"}),u=URL.createObjectURL(h),d=document.createElement("a");d.href=u,d.download="the-other-me-save.json",d.click(),setTimeout(()=>URL.revokeObjectURL(u),2e3)}if(c==="imp"){const h=document.createElement("input");h.type="file",h.accept=".json,application/json",h.onchange=async()=>{const u=h.files?.[0];if(!u)return;const d=p0(await u.text());if(!d){this.toast("Файл не похож на сохранение этой игры","⚠");return}await Rc("slot3",d),this.toast("Импортировано в «Слот III»","✎"),await s()},h.click()}})}closeAll(){for(;this.modals.length;){const t=this.modals[this.modals.length-1];t.onCloseCb=null,this.close(t)}It.paused=!1}notebook(t="chars"){if(!It.running)return;const e=this.open(`<h2>Блокнот режиссёра <small>В. — «не забыть ничего»</small></h2><div class="tabs">${Object.entries(I0).map(([a,o])=>`<button class="tab" data-t="${a}">${o}</button>`).join("")}<button class="tab" data-t="photos">Фотоархив</button></div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-b]"),s=a=>{if(e.querySelectorAll(".tab").forEach(l=>l.classList.toggle("on",l.dataset.t===a)),a==="photos"){n.innerHTML=It.state.photos.length?`<div class="photos">${It.state.photos.map((l,r)=>`<div class="photo" style="--r:${r*37%7-3}deg"><img src="${l.img}" alt=""><span>${Ce(l.caption)}</span></div>`).join("")}</div>`:"<p><i>Плёнка пока пуста. Фотоаппарат — клавиша C.</i></p>";return}let o="";a==="items"&&(o=It.state.inv.map(l=>`<div class="entry noimg"><div><h4>${Ce(Js[l]?.name||l)}</h4><p>${Ce(Js[l]?.desc||"")}</p></div></div>`).join("")),o+=It.state.notes.map(l=>zr[l]).filter(l=>l&&l.cat===a).map(l=>{const r=l.char?an[l.char]:null;return`<div class="entry ${r?"":"noimg"}">${r?`<img src="${Bc(l.char,l.expr||"neutral")}" alt="">`:""}<div><h4>${Ce(l.title)}</h4>${r?.role?`<div class="role">${Ce(r.role)}</div>`:""}<p>${l.text}</p></div></div>`}).join(""),n.innerHTML=o||"<p><i>Здесь пока пусто.</i></p>"};e.addEventListener("click",a=>{const o=a.target.dataset?.t;o&&($t.sfx("paper"),s(o))}),s(t)}async mainMenu(){this.hudShow(!1),document.querySelector(".menu-screen")?.remove();const t=await Promise.all(Sl.map(s=>Va(s).catch(()=>({state:null,broken:!0}))));let e=null;for(const s of t)s.state&&(!e||(s.state.savedAt||0)>(e.savedAt||0))&&(e=s.state);const n=_e("div","menu-screen",`<div class="menu-valance"></div><div class="menu-spot"></div><div class="menu-logo">${G0}</div><div class="menu-list"><button class="btn" data-a="cont" ${e?"":"disabled"}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="cred">Создатели</button></div><div class="menu-foot">Театр имени М. Ковалевского · сезон восемнадцатый · лучше всего — в наушниках</div>`,cn());$t.music("theater"),n.addEventListener("click",async s=>{$t.init(),$t.music("theater");const a=s.target.dataset?.a;if(a){if($t.sfx("click"),a==="cont"&&e&&(n.remove(),await It.start(e)),a==="new"){if(e&&!await this.confirm("Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.","Начать"))return;n.remove(),await It.start(oo())}a==="load"&&this.saveLoad("load"),a==="set"&&this.settings(),a==="cred"&&this.credits(!1)}}),n.querySelector(e?"[data-a=cont]":"[data-a=new]").focus()}credits(t){return new Promise(e=>{const n=(r,c)=>`<h3>${r}</h3>${c.map(h=>`<p>${h}</p>`).join("")}`,s=_e("div","credits",`<div class="roll" style="--dur:${t?70:55}s"><div class="cred-logo">${zc("c")}</div>
        ${n("В РОЛЯХ",["Варя<small>режиссёрка, Молодая Девушка, Королева — и всё это одновременно</small>","Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>","Артемий<small>школьный кот одобряет</small>"])}
        ${n("ТРУППА ТЕАТРА",["Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма — их рук дело</small>"])}
        ${n("В ЗРИТЕЛЬНОМ ЗАЛЕ",["Мама Наташа и Саша","Папа Максим и Настя","Вася","Софа · Катя"])}
        ${n("ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ",["Кукольник<small>просил не указывать. Указан.</small>"])}
        ${n("МУЗЫКА, ДЕКОРАЦИИ, СВЕТ",["Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры","Three.js · TypeScript · Vite"])}
        ${n("ШРИФТЫ ЛОГОТИПА",["Aurelia Diamond · Cintarini · Highcrest · Lombardina Initial One<small>лицензии «для личного некоммерческого использования»; игра — подарок, не продукт</small>","Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>"])}
        ${n("ОСОБАЯ БЛАГОДАРНОСТЬ",["Третьему ряду.<small>Вас видно. Правда.</small>"])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`,cn()),a=()=>{o(),s.remove(),e()},o=Ei(r=>{(r==="act"||r==="pause")&&a()}),l=performance.now();s.onclick=()=>{performance.now()-l>600&&a()},s.querySelector(".roll").addEventListener("animationend",a),It.fast&&a()})}buildTouch(){this.touchEl=_e("div","touch hidden",'<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="camera">◉</button><button class="tbtn" data-a="mask0">☺</button><button class="tbtn big" data-a="act">E</button></div>',cn());const t=this.touchEl.querySelector(".stick"),e=t.querySelector("i");let n=null;const s=l=>{const r=t.getBoundingClientRect();let c=(l.clientX-r.left-r.width/2)/(r.width/2),h=(l.clientY-r.top-r.height/2)/(r.height/2);const u=Math.hypot(c,h);u>1&&(c/=u,h/=u),Fn.x=c,Fn.y=h,e.style.transform=`translate(${c*2.2}rem, ${h*2.2}rem)`};t.addEventListener("pointerdown",l=>{n=l.pointerId,t.setPointerCapture(n),s(l)}),t.addEventListener("pointermove",l=>{l.pointerId===n&&s(l)});const a=l=>{l.pointerId===n&&(n=null,Fn.x=Fn.y=0,e.style.transform="")};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a);let o=0;this.touchEl.querySelector(".tbtns").addEventListener("pointerdown",l=>{const r=l.target.dataset?.a;if(r)if(l.preventDefault(),r==="mask0"){const c=[null,"comedy","tragedy","drama"];o=(o+1)%4,c[o]?It.setMask(c[o]):It.state.mask&&It.setMask(It.state.mask)}else Qi(r)})}}const zt=new V0,H0={hub:()=>bn(()=>import("./hub-K-5LSKFR.js"),__vite__mapDeps([0,1]),import.meta.url),pol:()=>bn(()=>import("./polina-B6ycY_US.js"),__vite__mapDeps([2,1,3]),import.meta.url),rub:()=>bn(()=>import("./ruben-DiRYpVS0.js"),__vite__mapDeps([4,1,3]),import.meta.url),mat:()=>bn(()=>import("./matvey-Bw20tNkg.js"),[],import.meta.url),eri:()=>bn(()=>import("./erika-Bw20tNkg.js"),[],import.meta.url),liz:()=>bn(()=>import("./lisa-Bw20tNkg.js"),[],import.meta.url),ang:()=>bn(()=>import("./angelina-Bw20tNkg.js"),[],import.meta.url),fin:()=>bn(()=>import("./finale-Bw20tNkg.js"),[],import.meta.url)},Ki={},W0={comedy:{sat:1.35,tint:[1.08,1.02,.86],vig:.2,bright:1.08},tragedy:{sat:.35,tint:[.82,.9,1.12],vig:.6,bright:.9,contrast:1.1},drama:{sat:.9,tint:[1.1,.9,.92],vig:.55,bright:1}},q0={comedy:"Комедия",tragedy:"Трагедия",drama:"Драма"},$0=i=>new Promise(t=>setTimeout(t,i));class X0{constructor(){this.state=oo(),this.room=null,this.lock=0,this.paused=!1,this.running=!1,this.t=0,this.cam={x:0,z:0,dist:24,focus:null,shake:0,roll:0,pitch:.56,yOff:1.2},this.near=null,this.trail=[],this.followers=[],this.stepT=0,this.busy=!1,this.inPhoto=!1,this.fast=!1,this.playerSpeed=5.6,this.override=null,this.debug=!1,this.gradeBase={},this.audio=$t,this.ui=zt}boot(t){this.R=new g0(t),this.debug=new URLSearchParams(location.search).has("debug");let e=performance.now();const n=s=>{const a=Math.min(.05,(s-e)/1e3);e=s;try{this.frame(a)}catch(o){console.error("[game] ошибка кадра",o)}requestAnimationFrame(n)};requestAnimationFrame(n),Ei(s=>this.onAction(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.running&&!this.paused&&!zt.modal&&zt.pause()}),window.addEventListener("beforeunload",s=>{this.running&&this.lock>0&&!this.debug&&(s.preventDefault(),s.returnValue="")})}get f(){return this.state.f}flag(t){return this.state.f[t]}set(t,e=!0){typeof t=="string"?this.state.f[t]=e:Object.assign(this.state.f,t)}has(t){return this.state.inv.includes(t)}give(t,e=!1){this.has(t)||(this.state.inv.push(t),Js[t]||console.warn("[game] нет описания предмета",t),e||(this.sfx("pickup"),zt.toast("Получено: "+(Js[t]?.name||t),"✦")))}take(t){const e=this.state.inv.indexOf(t);e>=0&&this.state.inv.splice(e,1)}note(t){if(!this.state.notes.includes(t)){if(!zr[t]){console.warn("[game] нет записи блокнота",t);return}this.state.notes.push(t),this.sfx("pencil"),zt.toast("Блокнот: "+zr[t].title,"✎")}}done(t){return!!this.state.f["done_"+t]}doneCount(){return["polina","ruben","matvey","erika","liza","angelina"].filter(t=>this.done(t)).length}sfx(t,e){$t.sfx(t,e)}toast(t,e){zt.toast(t,e)}wait(t){return $0(this.fast?0:t*1e3)}async start(t){this.state=t,this.running=!0,this.lock=0,this.paused=!1,zt.hudShow(!0),await this.goto(t.room,t.spot,{fade:"fade",load:!0})}stopToMenu(){this.running=!1,this.clearRoom(),$t.music(null),$t.ambience(null),zt.hudShow(!1)}async save(t="auto"){if(!this.running)return;const e=this.state;this.player&&(e.px=this.player.x,e.pz=this.player.z);try{await Rc(t,e),zt.saved(t)}catch(n){console.error("[save] не удалось сохранить",n),zt.toast("Не удалось сохранить игру: хранилище браузера недоступно","⚠")}}clearRoom(){this.room&&(this.R.scene.remove(this.room.group),this.room.dispose(),this.room=null),this.followers=[],this.trail=[],this.near=null,this.override=null,zt.prompt(null)}async loadRoom(t){if(Ki[t])return Ki[t];const e=t.split("_")[0],n=H0[e];if(!n)throw new Error("Неизвестная локация: "+t);zt.loading(!0);try{const s=await n();Object.assign(Ki,s.rooms)}finally{zt.loading(!1)}if(!Ki[t])throw new Error("Глава не содержит локацию: "+t);return Ki[t]}async goto(t,e="start",n={}){this.lock++;const s=this.room?this.room.id:n.load?"load":"",a=this.fast?"none":n.fade||"fade";try{a!=="none"&&await zt.transition(a,"out");let l;try{l=await this.loadRoom(t)}catch(u){throw a!=="none"&&await zt.transition(a,"in"),u}this.clearRoom(),this.cam.focus=null,this.cam.roll=0;const r=this.room=new Uc(t,l),c=new Nc(r,this);this.player=new lo(this.state.f.playerChar||"varya","player"),l.build(c,this),r.actors.push(this.player),r.group.add(this.player.group);const h=r.spawns[e]||r.spawns.start||{x:0,z:0,dir:"f"};!r.spawns[e]&&e!=="start"&&console.warn(`[game] в ${t} нет точки появления ${e}`),n.load&&this.state.room===t&&this.state.px!=null&&!this.hits(this.state.px,this.state.pz)?this.player.place(this.state.px,this.state.pz,"f"):this.player.place(h.x,h.z,h.dir);for(const u of this.followers)u.place(this.player.x+.8,this.player.z+.3);this.R.scene.add(r.group),this.R.scene.background=new Bt(r.group.userData.bg??328710),this.R.scene.fog=r.group.userData.fog||null,this.gradeBase=l.grade||{},this.applyMask(!0),this.applyGrade(!0),this.cam.dist=l.camDist||24,this.camSnap(),l.music!==void 0&&$t.music(l.music),$t.ambience(l.amb??null),this.state.room=t,this.state.spot=e,l.chapter&&(this.state.chapter=l.chapter),zt.hud(),!n.load&&!this.fast&&await this.save("auto"),a!=="none"&&await zt.transition(a,"in"),!n.silent&&s!==t&&zt.place(l.name)}finally{this.lock--}const o=this.room.def;o.enter&&await this.cut(()=>o.enter(this,s))}async rebuild(){const t=this.player,e=t.x,n=t.z,s=t.dir;await this.goto(this.room.id,this.state.spot,{fade:"none",silent:!0}),this.player.place(e,n,s),this.camSnap()}async cut(t){this.lock++,zt.prompt(null);try{return await t()}finally{this.lock--}}async say(t,e,n="neutral",s){const a=t==="~",o=t==="*",l=a?"varya":t,r=an[l];!o&&!r&&console.warn("[dialogue] неизвестный говорящий",t);const c=t+":"+e,h=!!this.state.seen[Fl(c)];await zt.say({name:o?"":s||r?.name||t,color:r?.color||"#e8d8a8",portrait:o||!r?"":Bc(l,n),text:e,italic:a||o,pitch:r?.pitch||300,seen:h}),this.state.seen[Fl(c)]=1}async line(t){const e=/^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(t);if(!e){console.warn("[dialogue] не разобрана реплика:",t);return}await this.say(e[1],e[4],e[3]||"neutral",e[2])}async choice(t){return zt.choice(t.map(e=>typeof e=="string"?{text:e}:e))}async run(t){this.lock++,$t.duck(!0);try{for(const e of t)if(typeof e=="string")await this.line(e);else if(typeof e=="function"){const n=await e(this);Array.isArray(n)&&await this.run(n)}else if(e.c){const n=e.c.filter(o=>{const l=o[2]||{};return!(l.if&&!l.if(this.state.f,this)||l.mask&&this.state.mask!==l.mask)}),s=await this.choice(n.map(o=>({text:o[0],mask:!!(o[2]&&o[2].mask)}))),a=n[s];a[2]&&a[2].set&&this.set(a[2].set),await this.run(a[1]||[])}else if(e.if)await this.run(e.if(this.state.f,this)?e.t||[]:e.e||[]);else{if(e.set&&this.set(e.set),e.note&&this.note(e.note),e.give&&this.give(e.give),e.sfx&&this.sfx(e.sfx),e.music!==void 0&&$t.music(e.music),e.wait&&await this.wait(e.wait),e.pose){const n=this.actor(e.pose[0]);n&&(n.pose=e.pose[1])}e.shake&&this.shake(e.shake),e.flash&&this.flash()}}finally{this.lock--,$t.duck(!1),this.lock===0&&zt.sayHide()}}actor(t){return t==="player"?this.player:this.room?.actor(t)}setMask(t){!this.state.f.masks||this.room?.def.noMasks||(this.state.mask===t&&(t=null),this.state.mask=t,this.sfx("mask"),this.applyMask(),this.applyGrade(),zt.hud(),$t.muffle(t==="tragedy"?900:t==="drama"?2600:2e4))}applyMask(t=!1){const e=this.room;if(!e)return;const n=e.def.noMasks?null:this.state.mask;e.def.noMasks&&$t.muffle(2e4);for(const s of e.masked){const a=s.mask==="none"?!n:s.mask===n;s.obj.visible=a,s.box&&(s.box.on=a)}for(const s of e.inters)s.mask&&(s.enabled=s.mask==="none"?!n:s.mask===n,s.marker&&(s.marker.visible=s.enabled))}applyGrade(t=!1){const e=this.room?.def.noMasks?null:this.state.mask,n={...this.gradeBase,...e?K0(this.gradeBase,W0[e]):{}};this.R.setGrade(n,t)}grade(t,e=!1){this.gradeBase={...this.gradeBase,...t},this.applyGrade(e)}camBounds(){const t=this.room.def,e=Math.max(0,t.w/2-9),n=Math.min(0,-t.d/2+4.5),s=t.camZMax??Math.max(n,t.d/2-7);return{mx:e,z0:n,z1:s}}camSnap(){const t=this.player,e=this.camBounds();this.cam.x=ji(t.x,-e.mx,e.mx),this.cam.z=ji(t.z,e.z0,e.z1)}focus(t,e,n=18){this.cam.focus={x:t,z:e,dist:n}}unfocus(){this.cam.focus=null}shake(t=.4){Se.reduceShake||(this.cam.shake=Math.max(this.cam.shake,t))}flash(t=.9){this.R.flash=t}async photoMode(){if(!this.has("camera")||this.inPhoto||this.room?.def.noCamera)return;this.inPhoto=!0,this.lock++;const t=this.player,e=Y0(t.dir);this.focus(t.x+e.x*3,t.z+e.z*3,15),zt.viewfinder(!0);try{if(await this.key(["act","camera","pause"])==="act"){const s=this.room,a=s.def.noMasks?null:this.state.mask,o=s.photos.filter(c=>{if(c.cond&&!c.cond()||c.mask&&(c.mask==="none"?a:c.mask!==a))return!1;const h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,u);return d<1.8?!0:d<8&&(h*e.x+u*e.z)/d>.6});zt.viewfinder(!1);const l=this.R.snapshot();this.sfx("shutter"),this.flash(.8);const r=o.length?o.map(c=>c.name).join(", "):s.def.name;for(this.state.photos.push({id:"p"+Date.now().toString(36),img:l,caption:r,subjects:o.map(c=>c.id),room:s.id});this.state.photos.length>36;){const c=this.state.photos.findIndex(h=>!h.subjects.length);this.state.photos.splice(c>=0?c:0,1)}zt.toast("Снимок: "+r,"◉"),this.unfocus(),s.def.photo&&await s.def.photo(this,o.map(c=>c.id))}}finally{zt.viewfinder(!1),this.unfocus(),this.lock--,this.inPhoto=!1}}photographed(t){return this.state.photos.some(e=>e.subjects.includes(t))}key(t){return new Promise(e=>{const n=Ei(s=>{t.includes(s)&&(n(),setTimeout(()=>e(s),0))})})}follow(t){this.followers.push(t)}unfollow(t){this.followers=this.followers.filter(e=>e!==t),t.moving=!1}setPlayerChar(t){this.state.f.playerChar=t,this.player.setChar(t)}onAction(t){if(!(!this.running||zt.modal||this.paused)){if(t==="pause"&&!this.inPhoto){(this.lock===0||zt.dialogOpen)&&zt.pause();return}if(t==="history"){zt.history();return}if(!(this.lock>0))if(t==="act"&&this.near){const e=this.near;this.sfx("click"),this.cut(()=>e.fn(this)).catch(n=>console.error("[game] ошибка взаимодействия",e.id,n))}else t==="mask1"?this.setMask("comedy"):t==="mask2"?this.setMask("tragedy"):t==="mask3"?this.setMask("drama"):t==="mask0"?this.state.mask&&this.setMask(this.state.mask):t==="camera"?this.photoMode():t==="notebook"?zt.notebook():this.room?.def.onKey&&this.room.def.onKey(this,t)}}hits(t,e,n=.38){const s=this.room,a=s.def.w/2-n,o=s.def.d/2-n;if(t<-a||t>a||e<-o||e>o)return!0;for(const l of s.boxes)if(l.on&&t>l.x0-n&&t<l.x1+n&&e>l.z0-n&&e<l.z1+n)return!0;return!1}los(t,e,n,s){for(let a=1;a<8;a++){const o=t+(n-t)*a/8,l=e+(s-e)*a/8;for(const r of this.room.boxes)if(r.on&&r.x1-r.x0>.9&&o>r.x0&&o<r.x1&&l>r.z0&&l<r.z1)return!1}return!0}frame(t){const e=this.room;if(!e||!this.running){this.R&&this.running,Ka();return}if(this.paused){this.R.render(0),Ka();return}this.t+=t,this.state.time+=t;const n=this.player;if(this.override)this.override(t);else if(this.lock===0&&!zt.modal){const f=D0(),m=Math.hypot(f.x,f.y)>.15;if(m){const x=this.playerSpeed*(Ti("run")?1.35:1)*t,y=n.x+f.x*x,b=n.z+f.y*x;this.hits(y,n.z)||(n.x=y),this.hits(n.x,b)||(n.z=b),n.dir=Math.abs(f.x)>Math.abs(f.y)?f.x>0?"r":"l":f.y>0?"f":"b",this.stepT-=t,this.stepT<=0&&(this.stepT=.3,this.sfx("step",{mat:e.def.step||"wood"}));const R=this.trail[this.trail.length-1];(!R||Math.hypot(R.x-n.x,R.z-n.z)>.35)&&(this.trail.push({x:n.x,z:n.z}),this.trail.length>40&&this.trail.shift())}n.moving=m;for(const x of e.triggers){const y=n.x>x.x0&&n.x<x.x1&&n.z>x.z0&&n.z<x.z1;if(y&&!x.inside&&!(x.once&&x.done)){x.done=!0,x.inside=!0,this.cut(()=>x.fn(this)).catch(b=>console.error("[game] ошибка триггера",b));break}x.inside=y}}else n.target||(n.moving=!1);this.followers.forEach((f,m)=>{const x=this.trail[this.trail.length-1-(m+1)*3];if(x&&Math.hypot(x.x-f.x,x.z-f.z)>.25&&Math.hypot(n.x-f.x,n.z-f.z)>1.3){const y=x.x-f.x,b=x.z-f.z,R=Math.hypot(y,b),T=Math.min(R,this.playerSpeed*1.05*t);f.x+=y/R*T,f.z+=b/R*T,f.face(x.x,x.z),f.moving=!0}else f.target||(f.moving=!1)});for(const f of e.actors)f.update(t);if(this.lock===0){for(const f of e.guards){if(!f.active){f.cone.visible=!1;continue}f.cone.visible=!0;const m=f.actor;if(f.off>0&&(f.off-=t,f.cone.visible=Math.floor(f.off*8)%2===0),f.wait>0)f.wait-=t;else if(!m.target&&f.path.length>1){f.i=(f.i+1)%f.path.length;const[x,y]=f.path[f.i];f.ang=Math.atan2(y-m.z,x-m.x),m.walkTo(x,y,f.speed).then(()=>{f.wait=f.pause})}if(f.cone.position.set(m.x,.05,m.z),f.cone.rotation.y=-f.ang,f.off<=0&&!n.hidden&&!n.stealth){const x=n.x-m.x,y=n.z-m.z,b=Math.hypot(x,y);let R=Math.atan2(y,x)-f.ang;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;if(b<f.range&&Math.abs(R)<f.half&&this.los(m.x,m.z,n.x,n.z)){this.cut(()=>f.onCatch(this)).catch(T=>console.error(T));break}}}for(const f of e.lasers)if(f.on=f.active&&(this.t+f.phase)%f.period<f.duty*f.period,f.mesh.visible=f.on,f.on&&!n.hidden&&!n.stealth){const m=f.x1-f.x0,x=f.z1-f.z0,y=m*m+x*x;let b=((n.x-f.x0)*m+(n.z-f.z0)*x)/y;if(b=ji(b,0,1),Math.hypot(n.x-f.x0-m*b,n.z-f.z0-x*b)<.4){this.cut(()=>f.onHit(this)).catch(R=>console.error(R));break}}}else for(const f of e.actors)!f.target&&f!==n&&!this.followers.includes(f)&&(f.moving=!1);for(const f of e.flick)f.l.intensity=f.base*(1+(Math.sin(this.t*13+f.base)*.5+Math.sin(this.t*31)*.5)*f.s);for(const f of e.updaters)f(t,this.t);e.def.update&&e.def.update(this,t,this.t);let s=null,a=1e9;if(this.lock===0&&!zt.modal)for(const f of e.inters){if(!f.enabled||f.cond&&!f.cond()){f.marker&&(f.marker.visible=!1);continue}const m=Math.hypot(f.x-n.x,f.z-n.z);f.marker&&(f.marker.visible=m<5,f.marker.position.y=f.y+.5+Math.sin(this.t*3+f.x)*.08,f.marker.rotation.y=this.t*2),m<f.r&&m<a&&(a=m,s=f)}this.near=s;const o=this.cam,l=o.focus,r=this.camBounds(),c=l?l.x:ji(n.x,-r.mx,r.mx),h=l?l.z:ji(n.z,r.z0,r.z1),u=l?l.dist:e.def.camDist||24,d=Math.min(1,t*3.5);o.x+=(c-o.x)*d,o.z+=(h-o.z)*d,o.dist+=(u-o.dist)*d,o.shake=Math.max(0,o.shake-t*1.2);const g=(Math.random()-.5)*o.shake,p=(Math.random()-.5)*o.shake,v=this.R.cam.aspect<1?1.25:1;if(this.R.cam.position.set(o.x+g,o.yOff+Math.sin(o.pitch)*o.dist*v+p,o.z+Math.cos(o.pitch)*o.dist*v),this.R.cam.up.set(Math.sin(o.roll),Math.cos(o.roll),0),this.R.cam.lookAt(o.x+g,o.yOff,o.z),this.R.render(t),s){const f=new F(s.x,s.y+.9,s.z).project(this.R.cam);zt.prompt(s.label,(f.x+1)/2,(1-f.y)/2)}else zt.prompt(null);Ka()}}function ji(i,t,e){return Math.max(t,Math.min(e,i))}function Y0(i){return i==="l"?{x:-1,z:0}:i==="r"?{x:1,z:0}:i==="b"?{x:0,z:-1}:{x:0,z:1}}function Fl(i){let t=5381;for(let e=0;e<i.length;e++)t=(t<<5)+t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function K0(i,t){const e=i.tint||[1,1,1],n=t.tint||[1,1,1];return{sat:(i.sat??1)*(t.sat??1),tint:[e[0]*n[0],e[1]*n[1],e[2]*n[2]],vig:Math.max(i.vig??.35,t.vig??0),bright:(i.bright??1)*(t.bright??1),contrast:(i.contrast??1)*(t.contrast??1)}}const It=new X0;window.__G=It;async function j0(){const i=document.getElementById("boot"),t=document.getElementById("boot-s");try{await Promise.all(['8px "Pixelify Sans"',"16px Lora",'16px "Playfair Display"','16px "Marck Script"',"16px Aurelia","16px Cintarini","16px Highcrest","16px Lombardina"].map(n=>document.fonts.load(n,"AБя").catch(s=>console.warn("[fonts]",n,s)))),zt.init(),It.boot(document.getElementById("game"));const e=()=>{$t.init()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),await zt.mainMenu(),i.style.opacity="0",setTimeout(()=>i.remove(),700)}catch(e){console.error("[boot] игра не запустилась",e),t.textContent="Не удалось запустить игру: "+(e?.message||e)+". Проверьте, что браузер поддерживает WebGL, и обновите страницу."}}j0();export{an as C,Mc as F,It as G,ve as M,Bn as P,bn as _,hn as a,$t as b,ia as c,_e as e,Or as p,Z0 as r,Se as s,zt as u};
