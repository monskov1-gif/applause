const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hub-BLMUMRRg.js","./minigames-BQH63eHi.js","./polina-Cjh_qcmq.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=e(s);fetch(s.href,a)}})();const Ic="modulepreload",Nc=function(i,t){return new URL(i,t).href},ho={},vn=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),r=l?.nonce||l?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=Nc(c,n),c in ho)return;ho[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const v=o[p];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const g=document.createElement("link");if(g.rel=h?"stylesheet":Ic,h||(g.as="script"),g.crossOrigin="",g.href=c,r&&g.setAttribute("nonce",r),document.head.appendChild(g),h)return new Promise((p,v)=>{g.addEventListener("load",p),g.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ir="169",Fc=0,uo=1,Oc=2,Al=1,Rl=2,xn=3,Nn=0,Oe=1,Ge=2,Sn=0,Zn=1,ji=2,fo=3,po=4,kc=5,$n=100,Bc=101,zc=102,Vc=103,Hc=104,Gc=200,Wc=201,qc=202,Xc=203,Wa=204,qa=205,$c=206,Yc=207,Kc=208,jc=209,Zc=210,Jc=211,Qc=212,th=213,eh=214,Xa=0,$a=1,Ya=2,Ei=3,Ka=4,ja=5,Za=6,Ja=7,Nr=0,nh=1,ih=2,In=0,Cl=1,Pl=2,Ll=3,Fr=4,sh=5,Dl=6,Ul=7,Il=300,Ti=301,wi=302,Qa=303,tr=304,Xs=306,ks=1e3,Kn=1001,er=1002,Ce=1003,ah=1004,rs=1005,Qe=1006,na=1007,jn=1008,yn=1009,Nl=1010,Fl=1011,Zi=1012,Or=1013,Jn=1014,Mn=1015,hn=1016,kr=1017,Br=1018,Ai=1020,Ol=35902,kl=1021,Bl=1022,en=1023,zl=1024,Vl=1025,bi=1026,Ri=1027,Hl=1028,zr=1029,Gl=1030,Vr=1031,Hr=1033,Ps=33776,Ls=33777,Ds=33778,Us=33779,nr=35840,ir=35841,sr=35842,ar=35843,rr=36196,or=37492,lr=37496,cr=37808,hr=37809,ur=37810,fr=37811,dr=37812,pr=37813,mr=37814,gr=37815,_r=37816,vr=37817,xr=37818,Mr=37819,br=37820,Sr=37821,Is=36492,yr=36494,Er=36495,Wl=36283,Tr=36284,wr=36285,Ar=36286,rh=3200,oh=3201,ql=0,lh=1,Dn="",$e="srgb",On="srgb-linear",Gr="display-p3",$s="display-p3-linear",Bs="linear",ne="srgb",zs="rec709",Vs="p3",ei=7680,mo=519,ch=512,hh=513,uh=514,Xl=515,fh=516,dh=517,ph=518,mh=519,go=35044,_o="300 es",bn=2e3,Hs=2001;class Di{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const a=s.indexOf(e);a!==-1&&s.splice(a,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let a=0,o=s.length;a<o;a++)s[a].call(this,t);t.target=null}}}const Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ia=Math.PI/180,Gs=180/Math.PI;function ts(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function gh(i,t){return(i%t+t)%t}function sa(i,t,e){return(1-e)*i+e*t}function Fi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ie(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Rt{constructor(t=0,e=0){Rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),a=this.x-t.x,o=this.y-t.y;return this.x=a*n-o*s+t.x,this.y=a*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,a,o,l,r,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,l,r,c)}set(t,e,n,s,a,o,l,r,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=a,h[5]=r,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],l=n[3],r=n[6],c=n[1],h=n[4],u=n[7],d=n[2],g=n[5],p=n[8],v=s[0],m=s[3],f=s[6],b=s[1],M=s[4],S=s[7],C=s[2],T=s[5],w=s[8];return a[0]=o*v+l*b+r*C,a[3]=o*m+l*M+r*T,a[6]=o*f+l*S+r*w,a[1]=c*v+h*b+u*C,a[4]=c*m+h*M+u*T,a[7]=c*f+h*S+u*w,a[2]=d*v+g*b+p*C,a[5]=d*m+g*M+p*T,a[8]=d*f+g*S+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],r=t[6],c=t[7],h=t[8];return e*o*h-e*l*c-n*a*h+n*l*r+s*a*c-s*o*r}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],r=t[6],c=t[7],h=t[8],u=h*o-l*c,d=l*r-h*a,g=c*a-o*r,p=e*u+n*d+s*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(l*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*r)*v,t[5]=(s*a-l*e)*v,t[6]=g*v,t[7]=(n*r-c*e)*v,t[8]=(o*e-n*a)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,a,o,l){const r=Math.cos(a),c=Math.sin(a);return this.set(n*r,n*c,-n*(r*o+c*l)+o+t,-s*c,s*r,-s*(-c*o+r*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(aa.makeScale(t,e)),this}rotate(t){return this.premultiply(aa.makeRotation(-t)),this}translate(t,e){return this.premultiply(aa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const aa=new kt;function $l(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ws(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function _h(){const i=Ws("canvas");return i.style.display="block",i}const vo={};function Ns(i){i in vo||(vo[i]=!0,console.warn(i))}function vh(i,t,e){return new Promise(function(n,s){function a(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(a,e);break;default:n()}}setTimeout(a,e)})}function xh(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Mh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xo=new kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Mo=new kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Oi={[On]:{transfer:Bs,primaries:zs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[$e]:{transfer:ne,primaries:zs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$s]:{transfer:Bs,primaries:Vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Mo),fromReference:i=>i.applyMatrix3(xo)},[Gr]:{transfer:ne,primaries:Vs,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Mo),fromReference:i=>i.applyMatrix3(xo).convertLinearToSRGB()}},bh=new Set([On,$s]),jt={enabled:!0,_workingColorSpace:On,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!bh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Oi[t].toReference,s=Oi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Oi[i].primaries},getTransfer:function(i){return i===Dn?Bs:Oi[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Oi[t].luminanceCoefficients)}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ni;class Sh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ni===void 0&&(ni=Ws("canvas")),ni.width=t.width,ni.height=t.height;const n=ni.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ni}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ws("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),a=s.data;for(let o=0;o<a.length;o++)a[o]=Si(a[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yh=0;class Yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yh++}),this.uuid=ts(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?a.push(oa(s[o].image)):a.push(oa(s[o]))}else a=oa(s);n.url=a}return e||(t.images[this.uuid]=n),n}}function oa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Sh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Eh=0;class Le extends Di{constructor(t=Le.DEFAULT_IMAGE,e=Le.DEFAULT_MAPPING,n=Kn,s=Kn,a=Qe,o=jn,l=en,r=yn,c=Le.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=ts(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=r,this.offset=new Rt(0,0),this.repeat=new Rt(1,1),this.center=new Rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Il)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ks:t.x=t.x-Math.floor(t.x);break;case Kn:t.x=t.x<0?0:1;break;case er:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ks:t.y=t.y-Math.floor(t.y);break;case Kn:t.y=t.y<0?0:1;break;case er:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Le.DEFAULT_IMAGE=null;Le.DEFAULT_MAPPING=Il;Le.DEFAULT_ANISOTROPY=1;class te{constructor(t=0,e=0,n=0,s=1){te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*a,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*a,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*a,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*a,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,a;const r=t.elements,c=r[0],h=r[4],u=r[8],d=r[1],g=r[5],p=r[9],v=r[2],m=r[6],f=r[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,S=(g+1)/2,C=(f+1)/2,T=(h+d)/4,w=(u+v)/4,L=(p+m)/4;return M>S&&M>C?M<.01?(n=0,s=.707106781,a=.707106781):(n=Math.sqrt(M),s=T/n,a=w/n):S>C?S<.01?(n=.707106781,s=0,a=.707106781):(s=Math.sqrt(S),n=T/s,a=L/s):C<.01?(n=.707106781,s=.707106781,a=0):(a=Math.sqrt(C),n=w/a,s=L/a),this.set(n,s,a,e),this}let b=Math.sqrt((m-p)*(m-p)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-p)/b,this.y=(u-v)/b,this.z=(d-h)/b,this.w=Math.acos((c+g+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Th extends Di{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new te(0,0,t,e),this.scissorTest=!1,this.viewport=new te(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const a=new Le(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);a.flipY=!1,a.generateMipmaps=n.generateMipmaps,a.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=a.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Yl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ye extends Th{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Kl extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wh extends Le{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class es{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,a,o,l){let r=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=a[o+0],g=a[o+1],p=a[o+2],v=a[o+3];if(l===0){t[e+0]=r,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(l===1){t[e+0]=d,t[e+1]=g,t[e+2]=p,t[e+3]=v;return}if(u!==v||r!==d||c!==g||h!==p){let m=1-l;const f=r*d+c*g+h*p+u*v,b=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const C=Math.sqrt(M),T=Math.atan2(C,f*b);m=Math.sin(m*T)/C,l=Math.sin(l*T)/C}const S=l*b;if(r=r*m+d*S,c=c*m+g*S,h=h*m+p*S,u=u*m+v*S,m===1-l){const C=1/Math.sqrt(r*r+c*c+h*h+u*u);r*=C,c*=C,h*=C,u*=C}}t[e]=r,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,a,o){const l=n[s],r=n[s+1],c=n[s+2],h=n[s+3],u=a[o],d=a[o+1],g=a[o+2],p=a[o+3];return t[e]=l*p+h*u+r*g-c*d,t[e+1]=r*p+h*d+c*u-l*g,t[e+2]=c*p+h*g+l*d-r*u,t[e+3]=h*p-l*u-r*d-c*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,a=t._z,o=t._order,l=Math.cos,r=Math.sin,c=l(n/2),h=l(s/2),u=l(a/2),d=r(n/2),g=r(s/2),p=r(a/2);switch(o){case"XYZ":this._x=d*h*u+c*g*p,this._y=c*g*u-d*h*p,this._z=c*h*p+d*g*u,this._w=c*h*u-d*g*p;break;case"YXZ":this._x=d*h*u+c*g*p,this._y=c*g*u-d*h*p,this._z=c*h*p-d*g*u,this._w=c*h*u+d*g*p;break;case"ZXY":this._x=d*h*u-c*g*p,this._y=c*g*u+d*h*p,this._z=c*h*p+d*g*u,this._w=c*h*u-d*g*p;break;case"ZYX":this._x=d*h*u-c*g*p,this._y=c*g*u+d*h*p,this._z=c*h*p-d*g*u,this._w=c*h*u+d*g*p;break;case"YZX":this._x=d*h*u+c*g*p,this._y=c*g*u+d*h*p,this._z=c*h*p-d*g*u,this._w=c*h*u-d*g*p;break;case"XZY":this._x=d*h*u-c*g*p,this._y=c*g*u-d*h*p,this._z=c*h*p+d*g*u,this._w=c*h*u+d*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],a=e[8],o=e[1],l=e[5],r=e[9],c=e[2],h=e[6],u=e[10],d=n+l+u;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-r)*g,this._y=(a-c)*g,this._z=(o-s)*g}else if(n>l&&n>u){const g=2*Math.sqrt(1+n-l-u);this._w=(h-r)/g,this._x=.25*g,this._y=(s+o)/g,this._z=(a+c)/g}else if(l>u){const g=2*Math.sqrt(1+l-n-u);this._w=(a-c)/g,this._x=(s+o)/g,this._y=.25*g,this._z=(r+h)/g}else{const g=2*Math.sqrt(1+u-n-l);this._w=(o-s)/g,this._x=(a+c)/g,this._y=(r+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,a=t._z,o=t._w,l=e._x,r=e._y,c=e._z,h=e._w;return this._x=n*h+o*l+s*c-a*r,this._y=s*h+o*r+a*l-n*c,this._z=a*h+o*c+n*r-s*l,this._w=o*h-n*l-s*r-a*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,a=this._z,o=this._w;let l=o*t._w+n*t._x+s*t._y+a*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=s,this._z=a,this;const r=1-l*l;if(r<=Number.EPSILON){const g=1-e;return this._w=g*o+e*this._w,this._x=g*n+e*this._x,this._y=g*s+e*this._y,this._z=g*a+e*this._z,this.normalize(),this}const c=Math.sqrt(r),h=Math.atan2(c,l),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=a*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),a=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),a*Math.sin(e),a*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,e=0,n=0){F.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[3]*n+a[6]*s,this.y=a[1]*e+a[4]*n+a[7]*s,this.z=a[2]*e+a[5]*n+a[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,a=t.elements,o=1/(a[3]*e+a[7]*n+a[11]*s+a[15]);return this.x=(a[0]*e+a[4]*n+a[8]*s+a[12])*o,this.y=(a[1]*e+a[5]*n+a[9]*s+a[13])*o,this.z=(a[2]*e+a[6]*n+a[10]*s+a[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,a=t.x,o=t.y,l=t.z,r=t.w,c=2*(o*s-l*n),h=2*(l*e-a*s),u=2*(a*n-o*e);return this.x=e+r*c+o*u-l*h,this.y=n+r*h+l*c-a*u,this.z=s+r*u+a*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s,this.y=a[1]*e+a[5]*n+a[9]*s,this.z=a[2]*e+a[6]*n+a[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,a=t.z,o=e.x,l=e.y,r=e.z;return this.x=s*r-a*l,this.y=a*o-n*r,this.z=n*l-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return la.copy(this).projectOnVector(t),this.sub(la)}reflect(t){return this.sub(la.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const la=new F,bo=new es;class ns{constructor(t=new F(1/0,1/0,1/0),e=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const a=n.getAttribute("position");if(e===!0&&a!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=a.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,je):je.fromBufferAttribute(a,o),je.applyMatrix4(t.matrixWorld),this.expandByPoint(je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),os.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),os.copy(n.boundingBox)),os.applyMatrix4(t.matrixWorld),this.union(os)}const s=t.children;for(let a=0,o=s.length;a<o;a++)this.expandByObject(s[a],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,je),je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ki),ls.subVectors(this.max,ki),ii.subVectors(t.a,ki),si.subVectors(t.b,ki),ai.subVectors(t.c,ki),Tn.subVectors(si,ii),wn.subVectors(ai,si),Bn.subVectors(ii,ai);let e=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-Bn.z,Bn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,Bn.z,0,-Bn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-Bn.y,Bn.x,0];return!ca(e,ii,si,ai,ls)||(e=[1,0,0,0,1,0,0,0,1],!ca(e,ii,si,ai,ls))?!1:(cs.crossVectors(Tn,wn),e=[cs.x,cs.y,cs.z],ca(e,ii,si,ai,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new F,new F,new F,new F,new F,new F,new F,new F],je=new F,os=new ns,ii=new F,si=new F,ai=new F,Tn=new F,wn=new F,Bn=new F,ki=new F,ls=new F,cs=new F,zn=new F;function ca(i,t,e,n,s){for(let a=0,o=i.length-3;a<=o;a+=3){zn.fromArray(i,a);const l=s.x*Math.abs(zn.x)+s.y*Math.abs(zn.y)+s.z*Math.abs(zn.z),r=t.dot(zn),c=e.dot(zn),h=n.dot(zn);if(Math.max(-Math.max(r,c,h),Math.min(r,c,h))>l)return!1}return!0}const Ah=new ns,Bi=new F,ha=new F;class Ys{constructor(t=new F,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ah.setFromPoints(t).getCenter(n);let s=0;for(let a=0,o=t.length;a<o;a++)s=Math.max(s,n.distanceToSquared(t[a]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Bi.subVectors(t,this.center);const e=Bi.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Bi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ha.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Bi.copy(t.center).add(ha)),this.expandByPoint(Bi.copy(t.center).sub(ha))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new F,ua=new F,hs=new F,An=new F,fa=new F,us=new F,da=new F;class jl{constructor(t=new F,e=new F(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ua.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),An.copy(this.origin).sub(ua);const a=t.distanceTo(e)*.5,o=-this.direction.dot(hs),l=An.dot(this.direction),r=-An.dot(hs),c=An.lengthSq(),h=Math.abs(1-o*o);let u,d,g,p;if(h>0)if(u=o*r-l,d=o*l-r,p=a*h,u>=0)if(d>=-p)if(d<=p){const v=1/h;u*=v,d*=v,g=u*(u+o*d+2*l)+d*(o*u+d+2*r)+c}else d=a,u=Math.max(0,-(o*d+l)),g=-u*u+d*(d+2*r)+c;else d=-a,u=Math.max(0,-(o*d+l)),g=-u*u+d*(d+2*r)+c;else d<=-p?(u=Math.max(0,-(-o*a+l)),d=u>0?-a:Math.min(Math.max(-a,-r),a),g=-u*u+d*(d+2*r)+c):d<=p?(u=0,d=Math.min(Math.max(-a,-r),a),g=d*(d+2*r)+c):(u=Math.max(0,-(o*a+l)),d=u>0?a:Math.min(Math.max(-a,-r),a),g=-u*u+d*(d+2*r)+c);else d=o>0?-a:a,u=Math.max(0,-(o*d+l)),g=-u*u+d*(d+2*r)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ua).addScaledVector(hs,d),g}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,a=t.radius*t.radius;if(s>a)return null;const o=Math.sqrt(a-s),l=n-o,r=n+o;return r<0?null:l<0?this.at(r,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,a,o,l,r;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),h>=0?(a=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(a=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||a>s||((a>n||isNaN(n))&&(n=a),(o<s||isNaN(s))&&(s=o),u>=0?(l=(t.min.z-d.z)*u,r=(t.max.z-d.z)*u):(l=(t.max.z-d.z)*u,r=(t.min.z-d.z)*u),n>r||l>s)||((l>n||n!==n)&&(n=l),(r<s||s!==s)&&(s=r),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,n,s,a){fa.subVectors(e,t),us.subVectors(n,t),da.crossVectors(fa,us);let o=this.direction.dot(da),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;An.subVectors(this.origin,t);const r=l*this.direction.dot(us.crossVectors(An,us));if(r<0)return null;const c=l*this.direction.dot(fa.cross(An));if(c<0||r+c>o)return null;const h=-l*An.dot(da);return h<0?null:this.at(h/o,a)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,a,o,l,r,c,h,u,d,g,p,v,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,a,o,l,r,c,h,u,d,g,p,v,m)}set(t,e,n,s,a,o,l,r,c,h,u,d,g,p,v,m){const f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=a,f[5]=o,f[9]=l,f[13]=r,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=g,f[7]=p,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ri.setFromMatrixColumn(t,0).length(),a=1/ri.setFromMatrixColumn(t,1).length(),o=1/ri.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*a,e[5]=n[5]*a,e[6]=n[6]*a,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,a=t.z,o=Math.cos(n),l=Math.sin(n),r=Math.cos(s),c=Math.sin(s),h=Math.cos(a),u=Math.sin(a);if(t.order==="XYZ"){const d=o*h,g=o*u,p=l*h,v=l*u;e[0]=r*h,e[4]=-r*u,e[8]=c,e[1]=g+p*c,e[5]=d-v*c,e[9]=-l*r,e[2]=v-d*c,e[6]=p+g*c,e[10]=o*r}else if(t.order==="YXZ"){const d=r*h,g=r*u,p=c*h,v=c*u;e[0]=d+v*l,e[4]=p*l-g,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-l,e[2]=g*l-p,e[6]=v+d*l,e[10]=o*r}else if(t.order==="ZXY"){const d=r*h,g=r*u,p=c*h,v=c*u;e[0]=d-v*l,e[4]=-o*u,e[8]=p+g*l,e[1]=g+p*l,e[5]=o*h,e[9]=v-d*l,e[2]=-o*c,e[6]=l,e[10]=o*r}else if(t.order==="ZYX"){const d=o*h,g=o*u,p=l*h,v=l*u;e[0]=r*h,e[4]=p*c-g,e[8]=d*c+v,e[1]=r*u,e[5]=v*c+d,e[9]=g*c-p,e[2]=-c,e[6]=l*r,e[10]=o*r}else if(t.order==="YZX"){const d=o*r,g=o*c,p=l*r,v=l*c;e[0]=r*h,e[4]=v-d*u,e[8]=p*u+g,e[1]=u,e[5]=o*h,e[9]=-l*h,e[2]=-c*h,e[6]=g*u+p,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*r,g=o*c,p=l*r,v=l*c;e[0]=r*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=g*u-p,e[2]=p*u-g,e[6]=l*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Rh,t,Ch)}lookAt(t,e,n){const s=this.elements;return Ve.subVectors(t,e),Ve.lengthSq()===0&&(Ve.z=1),Ve.normalize(),Rn.crossVectors(n,Ve),Rn.lengthSq()===0&&(Math.abs(n.z)===1?Ve.x+=1e-4:Ve.z+=1e-4,Ve.normalize(),Rn.crossVectors(n,Ve)),Rn.normalize(),fs.crossVectors(Ve,Rn),s[0]=Rn.x,s[4]=fs.x,s[8]=Ve.x,s[1]=Rn.y,s[5]=fs.y,s[9]=Ve.y,s[2]=Rn.z,s[6]=fs.z,s[10]=Ve.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,a=this.elements,o=n[0],l=n[4],r=n[8],c=n[12],h=n[1],u=n[5],d=n[9],g=n[13],p=n[2],v=n[6],m=n[10],f=n[14],b=n[3],M=n[7],S=n[11],C=n[15],T=s[0],w=s[4],L=s[8],P=s[12],_=s[1],y=s[5],V=s[9],B=s[13],U=s[2],z=s[6],k=s[10],Q=s[14],q=s[3],at=s[7],ot=s[11],pt=s[15];return a[0]=o*T+l*_+r*U+c*q,a[4]=o*w+l*y+r*z+c*at,a[8]=o*L+l*V+r*k+c*ot,a[12]=o*P+l*B+r*Q+c*pt,a[1]=h*T+u*_+d*U+g*q,a[5]=h*w+u*y+d*z+g*at,a[9]=h*L+u*V+d*k+g*ot,a[13]=h*P+u*B+d*Q+g*pt,a[2]=p*T+v*_+m*U+f*q,a[6]=p*w+v*y+m*z+f*at,a[10]=p*L+v*V+m*k+f*ot,a[14]=p*P+v*B+m*Q+f*pt,a[3]=b*T+M*_+S*U+C*q,a[7]=b*w+M*y+S*z+C*at,a[11]=b*L+M*V+S*k+C*ot,a[15]=b*P+M*B+S*Q+C*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],a=t[12],o=t[1],l=t[5],r=t[9],c=t[13],h=t[2],u=t[6],d=t[10],g=t[14],p=t[3],v=t[7],m=t[11],f=t[15];return p*(+a*r*u-s*c*u-a*l*d+n*c*d+s*l*g-n*r*g)+v*(+e*r*g-e*c*d+a*o*d-s*o*g+s*c*h-a*r*h)+m*(+e*c*u-e*l*g-a*o*u+n*o*g+a*l*h-n*c*h)+f*(-s*l*h-e*r*u+e*l*d+s*o*u-n*o*d+n*r*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],a=t[3],o=t[4],l=t[5],r=t[6],c=t[7],h=t[8],u=t[9],d=t[10],g=t[11],p=t[12],v=t[13],m=t[14],f=t[15],b=u*m*c-v*d*c+v*r*g-l*m*g-u*r*f+l*d*f,M=p*d*c-h*m*c-p*r*g+o*m*g+h*r*f-o*d*f,S=h*v*c-p*u*c+p*l*g-o*v*g-h*l*f+o*u*f,C=p*u*r-h*v*r-p*l*d+o*v*d+h*l*m-o*u*m,T=e*b+n*M+s*S+a*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=b*w,t[1]=(v*d*a-u*m*a-v*s*g+n*m*g+u*s*f-n*d*f)*w,t[2]=(l*m*a-v*r*a+v*s*c-n*m*c-l*s*f+n*r*f)*w,t[3]=(u*r*a-l*d*a-u*s*c+n*d*c+l*s*g-n*r*g)*w,t[4]=M*w,t[5]=(h*m*a-p*d*a+p*s*g-e*m*g-h*s*f+e*d*f)*w,t[6]=(p*r*a-o*m*a-p*s*c+e*m*c+o*s*f-e*r*f)*w,t[7]=(o*d*a-h*r*a+h*s*c-e*d*c-o*s*g+e*r*g)*w,t[8]=S*w,t[9]=(p*u*a-h*v*a-p*n*g+e*v*g+h*n*f-e*u*f)*w,t[10]=(o*v*a-p*l*a+p*n*c-e*v*c-o*n*f+e*l*f)*w,t[11]=(h*l*a-o*u*a-h*n*c+e*u*c+o*n*g-e*l*g)*w,t[12]=C*w,t[13]=(h*v*s-p*u*s+p*n*d-e*v*d-h*n*m+e*u*m)*w,t[14]=(p*l*s-o*v*s-p*n*r+e*v*r+o*n*m-e*l*m)*w,t[15]=(o*u*s-h*l*s+h*n*r-e*u*r-o*n*d+e*l*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,a=t.z;return e[0]*=n,e[4]*=s,e[8]*=a,e[1]*=n,e[5]*=s,e[9]*=a,e[2]*=n,e[6]*=s,e[10]*=a,e[3]*=n,e[7]*=s,e[11]*=a,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),a=1-n,o=t.x,l=t.y,r=t.z,c=a*o,h=a*l;return this.set(c*o+n,c*l-s*r,c*r+s*l,0,c*l+s*r,h*l+n,h*r-s*o,0,c*r-s*l,h*r+s*o,a*r*r+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,a,o){return this.set(1,n,a,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,a=e._x,o=e._y,l=e._z,r=e._w,c=a+a,h=o+o,u=l+l,d=a*c,g=a*h,p=a*u,v=o*h,m=o*u,f=l*u,b=r*c,M=r*h,S=r*u,C=n.x,T=n.y,w=n.z;return s[0]=(1-(v+f))*C,s[1]=(g+S)*C,s[2]=(p-M)*C,s[3]=0,s[4]=(g-S)*T,s[5]=(1-(d+f))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(p+M)*w,s[9]=(m-b)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let a=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),l=ri.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),t.x=s[12],t.y=s[13],t.z=s[14],Ze.copy(this);const c=1/a,h=1/o,u=1/l;return Ze.elements[0]*=c,Ze.elements[1]*=c,Ze.elements[2]*=c,Ze.elements[4]*=h,Ze.elements[5]*=h,Ze.elements[6]*=h,Ze.elements[8]*=u,Ze.elements[9]*=u,Ze.elements[10]*=u,e.setFromRotationMatrix(Ze),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,a,o,l=bn){const r=this.elements,c=2*a/(e-t),h=2*a/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let g,p;if(l===bn)g=-(o+a)/(o-a),p=-2*o*a/(o-a);else if(l===Hs)g=-o/(o-a),p=-o*a/(o-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return r[0]=c,r[4]=0,r[8]=u,r[12]=0,r[1]=0,r[5]=h,r[9]=d,r[13]=0,r[2]=0,r[6]=0,r[10]=g,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,n,s,a,o,l=bn){const r=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-a),d=(e+t)*c,g=(n+s)*h;let p,v;if(l===bn)p=(o+a)*u,v=-2*u;else if(l===Hs)p=a*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return r[0]=2*c,r[4]=0,r[8]=0,r[12]=-d,r[1]=0,r[5]=2*h,r[9]=0,r[13]=-g,r[2]=0,r[6]=0,r[10]=v,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ri=new F,Ze=new oe,Rh=new F(0,0,0),Ch=new F(1,1,1),Rn=new F,fs=new F,Ve=new F,So=new oe,yo=new es;class un{constructor(t=0,e=0,n=0,s=un.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,a=s[0],o=s[4],l=s[8],r=s[1],c=s[5],h=s[9],u=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,g),this._z=Math.atan2(r,c)):(this._y=Math.atan2(-u,a),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(r,a));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(r,a)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,a)):(this._x=0,this._y=Math.atan2(l,g));break;case"XZY":this._z=Math.asin(-Ne(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,a)):(this._x=Math.atan2(-h,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return So.makeRotationFromQuaternion(t),this.setFromRotationMatrix(So,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yo.setFromEuler(this),this.setFromQuaternion(yo,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}un.DEFAULT_ORDER="XYZ";class Zl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ph=0;const Eo=new F,oi=new es,mn=new oe,ds=new F,zi=new F,Lh=new F,Dh=new es,To=new F(1,0,0),wo=new F(0,1,0),Ao=new F(0,0,1),Ro={type:"added"},Uh={type:"removed"},li={type:"childadded",child:null},pa={type:"childremoved",child:null};class de extends Di{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ph++}),this.uuid=ts(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=de.DEFAULT_UP.clone();const t=new F,e=new un,n=new es,s=new F(1,1,1);function a(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(a),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new kt}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=de.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.multiply(oi),this}rotateOnWorldAxis(t,e){return oi.setFromAxisAngle(t,e),this.quaternion.premultiply(oi),this}rotateX(t){return this.rotateOnAxis(To,t)}rotateY(t){return this.rotateOnAxis(wo,t)}rotateZ(t){return this.rotateOnAxis(Ao,t)}translateOnAxis(t,e){return Eo.copy(t).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(To,t)}translateY(t){return this.translateOnAxis(wo,t)}translateZ(t){return this.translateOnAxis(Ao,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ds.copy(t):ds.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(zi,ds,this.up):mn.lookAt(ds,zi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),oi.setFromRotationMatrix(mn),this.quaternion.premultiply(oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ro),li.child=t,this.dispatchEvent(li),li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Uh),pa.child=t,this.dispatchEvent(pa),pa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ro),li.child=t,this.dispatchEvent(li),li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,t,Lh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zi,Dh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function a(l,r){return l[r.uuid]===void 0&&(l[r.uuid]=r.toJSON(t)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const r=l.shapes;if(Array.isArray(r))for(let c=0,h=r.length;c<h;c++){const u=r[c];a(t.shapes,u)}else a(t.shapes,r)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let r=0,c=this.material.length;r<c;r++)l.push(a(t.materials,this.material[r]));s.material=l}else s.material=a(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const r=this.animations[l];s.animations.push(a(t.animations,r))}}if(e){const l=o(t.geometries),r=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),g=o(t.animations),p=o(t.nodes);l.length>0&&(n.geometries=l),r.length>0&&(n.materials=r),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){const r=[];for(const c in l){const h=l[c];delete h.metadata,r.push(h)}return r}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}de.DEFAULT_UP=new F(0,1,0);de.DEFAULT_MATRIX_AUTO_UPDATE=!0;de.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Je=new F,gn=new F,ma=new F,_n=new F,ci=new F,hi=new F,Co=new F,ga=new F,_a=new F,va=new F,xa=new te,Ma=new te,ba=new te;class tn{constructor(t=new F,e=new F,n=new F){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Je.subVectors(t,e),s.cross(Je);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(t,e,n,s,a){Je.subVectors(s,e),gn.subVectors(n,e),ma.subVectors(t,e);const o=Je.dot(Je),l=Je.dot(gn),r=Je.dot(ma),c=gn.dot(gn),h=gn.dot(ma),u=o*c-l*l;if(u===0)return a.set(0,0,0),null;const d=1/u,g=(c*r-l*h)*d,p=(o*h-l*r)*d;return a.set(1-g-p,p,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,n,s,a,o,l,r){return this.getBarycoord(t,e,n,s,_n)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(a,_n.x),r.addScaledVector(o,_n.y),r.addScaledVector(l,_n.z),r)}static getInterpolatedAttribute(t,e,n,s,a,o){return xa.setScalar(0),Ma.setScalar(0),ba.setScalar(0),xa.fromBufferAttribute(t,e),Ma.fromBufferAttribute(t,n),ba.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(xa,a.x),o.addScaledVector(Ma,a.y),o.addScaledVector(ba,a.z),o}static isFrontFacing(t,e,n,s){return Je.subVectors(n,e),gn.subVectors(t,e),Je.cross(gn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Je.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Je.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,a){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,a)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,a=this.c;let o,l;ci.subVectors(s,n),hi.subVectors(a,n),ga.subVectors(t,n);const r=ci.dot(ga),c=hi.dot(ga);if(r<=0&&c<=0)return e.copy(n);_a.subVectors(t,s);const h=ci.dot(_a),u=hi.dot(_a);if(h>=0&&u<=h)return e.copy(s);const d=r*u-h*c;if(d<=0&&r>=0&&h<=0)return o=r/(r-h),e.copy(n).addScaledVector(ci,o);va.subVectors(t,a);const g=ci.dot(va),p=hi.dot(va);if(p>=0&&g<=p)return e.copy(a);const v=g*c-r*p;if(v<=0&&c>=0&&p<=0)return l=c/(c-p),e.copy(n).addScaledVector(hi,l);const m=h*p-g*u;if(m<=0&&u-h>=0&&g-p>=0)return Co.subVectors(a,s),l=(u-h)/(u-h+(g-p)),e.copy(s).addScaledVector(Co,l);const f=1/(m+v+d);return o=v*f,l=d*f,e.copy(n).addScaledVector(ci,o).addScaledVector(hi,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Jl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function Sa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=jt.workingColorSpace){if(t=gh(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const a=n<=.5?n*(1+e):n+e-n*e,o=2*n-a;this.r=Sa(o,a,t+1/3),this.g=Sa(o,a,t),this.b=Sa(o,a,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let a;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,e);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,e);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const a=s[1],o=a.length;if(o===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(a,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=Jl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return jt.fromWorkingColorSpace(we.copy(this),t),Math.round(Ne(we.r*255,0,255))*65536+Math.round(Ne(we.g*255,0,255))*256+Math.round(Ne(we.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,a=we.b,o=Math.max(n,s,a),l=Math.min(n,s,a);let r,c;const h=(l+o)/2;if(l===o)r=0,c=0;else{const u=o-l;switch(c=h<=.5?u/(o+l):u/(2-o-l),o){case n:r=(s-a)/u+(s<a?6:0);break;case s:r=(a-n)/u+2;break;case a:r=(n-s)/u+4;break}r/=6}return t.h=r,t.s=c,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=$e){jt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Cn),this.setHSL(Cn.h+t,Cn.s+e,Cn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Cn),t.getHSL(ps);const n=sa(Cn.h,ps.h,e),s=sa(Cn.s,ps.s,e),a=sa(Cn.l,ps.l,e);return this.setHSL(n,s,a),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,a=t.elements;return this.r=a[0]*e+a[3]*n+a[6]*s,this.g=a[1]*e+a[4]*n+a[7]*s,this.b=a[2]*e+a[5]*n+a[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Bt;Bt.NAMES=Jl;let Ih=0;class Ui extends Di{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ih++}),this.uuid=ts(),this.name="",this.type="Material",this.blending=Zn,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wa,this.blendDst=qa,this.blendEquation=$n,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Ei,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mo,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ei,this.stencilZFail=ei,this.stencilZPass=ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zn&&(n.blending=this.blending),this.side!==Nn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wa&&(n.blendSrc=this.blendSrc),this.blendDst!==qa&&(n.blendDst=this.blendDst),this.blendEquation!==$n&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ei&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mo&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(a){const o=[];for(const l in a){const r=a[l];delete r.metadata,o.push(r)}return o}if(e){const a=s(t.textures),o=s(t.images);a.length>0&&(n.textures=a),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let a=0;a!==s;++a)n[a]=e[a].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class on extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new F,ms=new Rt;class sn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=go,this.updateRanges=[],this.gpuType=Mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ms.fromBufferAttribute(this,e),ms.applyMatrix3(t),this.setXY(e,ms.x,ms.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ie(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Fi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Fi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Fi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Fi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ie(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,a){return t*=this.itemSize,this.normalized&&(e=Ie(e,this.array),n=Ie(n,this.array),s=Ie(s,this.array),a=Ie(a,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=a,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==go&&(t.usage=this.usage),t}}class Ql extends sn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class tc extends sn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends sn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Nh=0;const Xe=new oe,ya=new de,ui=new F,He=new ns,Vi=new ns,be=new F;class We extends Di{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nh++}),this.uuid=ts(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($l(t)?tc:Ql)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const a=new kt().getNormalMatrix(t);n.applyNormalMatrix(a),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,n){return Xe.makeTranslation(t,e,n),this.applyMatrix4(Xe),this}scale(t,e,n){return Xe.makeScale(t,e,n),this.applyMatrix4(Xe),this}lookAt(t){return ya.lookAt(t),ya.updateMatrix(),this.applyMatrix4(ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ui).negate(),this.translate(ui.x,ui.y,ui.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const a=t[n];e.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const a=e[n];He.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const n=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let a=0,o=e.length;a<o;a++){const l=e[a];Vi.setFromBufferAttribute(l),this.morphTargetsRelative?(be.addVectors(He.min,Vi.min),He.expandByPoint(be),be.addVectors(He.max,Vi.max),He.expandByPoint(be)):(He.expandByPoint(Vi.min),He.expandByPoint(Vi.max))}He.getCenter(n);let s=0;for(let a=0,o=t.count;a<o;a++)be.fromBufferAttribute(t,a),s=Math.max(s,n.distanceToSquared(be));if(e)for(let a=0,o=e.length;a<o;a++){const l=e[a],r=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)be.fromBufferAttribute(l,c),r&&(ui.fromBufferAttribute(t,c),be.add(ui)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,a=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],r=[];for(let L=0;L<n.count;L++)l[L]=new F,r[L]=new F;const c=new F,h=new F,u=new F,d=new Rt,g=new Rt,p=new Rt,v=new F,m=new F;function f(L,P,_){c.fromBufferAttribute(n,L),h.fromBufferAttribute(n,P),u.fromBufferAttribute(n,_),d.fromBufferAttribute(a,L),g.fromBufferAttribute(a,P),p.fromBufferAttribute(a,_),h.sub(c),u.sub(c),g.sub(d),p.sub(d);const y=1/(g.x*p.y-p.x*g.y);isFinite(y)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(u,-g.y).multiplyScalar(y),m.copy(u).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(y),l[L].add(v),l[P].add(v),l[_].add(v),r[L].add(m),r[P].add(m),r[_].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let L=0,P=b.length;L<P;++L){const _=b[L],y=_.start,V=_.count;for(let B=y,U=y+V;B<U;B+=3)f(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const M=new F,S=new F,C=new F,T=new F;function w(L){C.fromBufferAttribute(s,L),T.copy(C);const P=l[L];M.copy(P),M.sub(C.multiplyScalar(C.dot(P))).normalize(),S.crossVectors(T,P);const y=S.dot(r[L])<0?-1:1;o.setXYZW(L,M.x,M.y,M.z,y)}for(let L=0,P=b.length;L<P;++L){const _=b[L],y=_.start,V=_.count;for(let B=y,U=y+V;B<U;B+=3)w(t.getX(B+0)),w(t.getX(B+1)),w(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const s=new F,a=new F,o=new F,l=new F,r=new F,c=new F,h=new F,u=new F;if(t)for(let d=0,g=t.count;d<g;d+=3){const p=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),a.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),l.fromBufferAttribute(n,p),r.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),l.add(h),r.add(h),c.add(h),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,r.x,r.y,r.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),a.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,a),u.subVectors(s,a),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(l,r){const c=l.array,h=l.itemSize,u=l.normalized,d=new c.constructor(r.length*h);let g=0,p=0;for(let v=0,m=r.length;v<m;v++){l.isInterleavedBufferAttribute?g=r[v]*l.data.stride+l.offset:g=r[v]*h;for(let f=0;f<h;f++)d[p++]=c[g++]}return new sn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new We,n=this.index.array,s=this.attributes;for(const l in s){const r=s[l],c=t(r,n);e.setAttribute(l,c)}const a=this.morphAttributes;for(const l in a){const r=[],c=a[l];for(let h=0,u=c.length;h<u;h++){const d=c[h],g=t(d,n);r.push(g)}e.morphAttributes[l]=r}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,r=o.length;l<r;l++){const c=o[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const r=this.parameters;for(const c in r)r[c]!==void 0&&(t[c]=r[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const r in n){const c=n[r];t.data.attributes[r]=c.toJSON(t.data)}const s={};let a=!1;for(const r in this.morphAttributes){const c=this.morphAttributes[r],h=[];for(let u=0,d=c.length;u<d;u++){const g=c[u];h.push(g.toJSON(t.data))}h.length>0&&(s[r]=h,a=!0)}a&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const a=t.morphAttributes;for(const c in a){const h=[],u=a[c];for(let d=0,g=u.length;d<g;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const r=t.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Po=new oe,Vn=new jl,gs=new Ys,Lo=new F,_s=new F,vs=new F,xs=new F,Ea=new F,Ms=new F,Do=new F,bs=new F;class ve extends de{constructor(t=new We,e=new on){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,a=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(a&&l){Ms.set(0,0,0);for(let r=0,c=a.length;r<c;r++){const h=l[r],u=a[r];h!==0&&(Ea.fromBufferAttribute(u,t),o?Ms.addScaledVector(Ea,h):Ms.addScaledVector(Ea.sub(e),h))}e.add(Ms)}return e}raycast(t,e){const n=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),gs.copy(n.boundingSphere),gs.applyMatrix4(a),Vn.copy(t.ray).recast(t.near),!(gs.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(gs,Lo)===null||Vn.origin.distanceToSquared(Lo)>(t.far-t.near)**2))&&(Po.copy(a).invert(),Vn.copy(t.ray).applyMatrix4(Po),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Vn)))}_computeIntersections(t,e,n){let s;const a=this.geometry,o=this.material,l=a.index,r=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,u=a.attributes.normal,d=a.groups,g=a.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const m=d[p],f=o[m.materialIndex],b=Math.max(m.start,g.start),M=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=b,C=M;S<C;S+=3){const T=l.getX(S),w=l.getX(S+1),L=l.getX(S+2);s=Ss(this,f,t,n,c,h,u,T,w,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=p,f=v;m<f;m+=3){const b=l.getX(m),M=l.getX(m+1),S=l.getX(m+2);s=Ss(this,o,t,n,c,h,u,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(r!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const m=d[p],f=o[m.materialIndex],b=Math.max(m.start,g.start),M=Math.min(r.count,Math.min(m.start+m.count,g.start+g.count));for(let S=b,C=M;S<C;S+=3){const T=S,w=S+1,L=S+2;s=Ss(this,f,t,n,c,h,u,T,w,L),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,g.start),v=Math.min(r.count,g.start+g.count);for(let m=p,f=v;m<f;m+=3){const b=m,M=m+1,S=m+2;s=Ss(this,o,t,n,c,h,u,b,M,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Fh(i,t,e,n,s,a,o,l){let r;if(t.side===Oe?r=n.intersectTriangle(o,a,s,!0,l):r=n.intersectTriangle(s,a,o,t.side===Nn,l),r===null)return null;bs.copy(l),bs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(bs);return c<e.near||c>e.far?null:{distance:c,point:bs.clone(),object:i}}function Ss(i,t,e,n,s,a,o,l,r,c){i.getVertexPosition(l,_s),i.getVertexPosition(r,vs),i.getVertexPosition(c,xs);const h=Fh(i,t,e,n,_s,vs,xs,Do);if(h){const u=new F;tn.getBarycoord(Do,_s,vs,xs,u),s&&(h.uv=tn.getInterpolatedAttribute(s,l,r,c,u,new Rt)),a&&(h.uv1=tn.getInterpolatedAttribute(a,l,r,c,u,new Rt)),o&&(h.normal=tn.getInterpolatedAttribute(o,l,r,c,u,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:l,b:r,c,normal:new F,materialIndex:0};tn.getNormal(_s,vs,xs,d.normal),h.face=d,h.barycoord=u}return h}class Qn extends We{constructor(t=1,e=1,n=1,s=1,a=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:a,depthSegments:o};const l=this;s=Math.floor(s),a=Math.floor(a),o=Math.floor(o);const r=[],c=[],h=[],u=[];let d=0,g=0;p("z","y","x",-1,-1,n,e,t,o,a,0),p("z","y","x",1,-1,n,e,-t,o,a,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,a,4),p("x","y","z",-1,-1,t,e,-n,s,a,5),this.setIndex(r),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(u,2));function p(v,m,f,b,M,S,C,T,w,L,P){const _=S/w,y=C/L,V=S/2,B=C/2,U=T/2,z=w+1,k=L+1;let Q=0,q=0;const at=new F;for(let ot=0;ot<k;ot++){const pt=ot*y-B;for(let Vt=0;Vt<z;Vt++){const Ht=Vt*_-V;at[v]=Ht*b,at[m]=pt*M,at[f]=U,c.push(at.x,at.y,at.z),at[v]=0,at[m]=0,at[f]=T>0?1:-1,h.push(at.x,at.y,at.z),u.push(Vt/w),u.push(1-ot/L),Q+=1}}for(let ot=0;ot<L;ot++)for(let pt=0;pt<w;pt++){const Vt=d+pt+z*ot,Ht=d+pt+z*(ot+1),$=d+(pt+1)+z*(ot+1),J=d+(pt+1)+z*ot;r.push(Vt,Ht,J),r.push(Ht,$,J),q+=6}l.addGroup(g,q,P),g+=q,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Ci(i[e]);for(const s in n)t[s]=n[s]}return t}function Oh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ec(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:jt.workingColorSpace}const Ji={clone:Ci,merge:Re};var kh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pe extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kh,this.fragmentShader=Bh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=Oh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nc extends de{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new F,Uo=new Rt,Io=new Rt;class Fe extends nc{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ia*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gs*2*Math.atan(Math.tan(ia*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-t/Pn.z)}getViewSize(t,e){return this.getViewBounds(t,Uo,Io),e.subVectors(Io,Uo)}setViewOffset(t,e,n,s,a,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ia*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,a=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const r=o.fullWidth,c=o.fullHeight;a+=o.offsetX*s/r,e-=o.offsetY*n/c,s*=o.width/r,n*=o.height/c}const l=this.filmOffset;l!==0&&(a+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const fi=-90,di=1;class zh extends de{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fe(fi,di,t,e);s.layers=this.layers,this.add(s);const a=new Fe(fi,di,t,e);a.layers=this.layers,this.add(a);const o=new Fe(fi,di,t,e);o.layers=this.layers,this.add(o);const l=new Fe(fi,di,t,e);l.layers=this.layers,this.add(l);const r=new Fe(fi,di,t,e);r.layers=this.layers,this.add(r);const c=new Fe(fi,di,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,a,o,l,r]=e;for(const c of e)this.remove(c);if(t===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(t===Hs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[a,o,l,r,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,a),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,r),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,g),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class ic extends Le{constructor(t,e,n,s,a,o,l,r,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ti,super(t,e,n,s,a,o,l,r,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vh extends Ye{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ic(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Qe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qn(5,5,5),a=new Pe({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:Sn});a.uniforms.tEquirect.value=e;const o=new ve(s,a),l=e.minFilter;return e.minFilter===jn&&(e.minFilter=Qe),new zh(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const a=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(a)}}const Ta=new F,Hh=new F,Gh=new kt;class qn{constructor(t=new F(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ta.subVectors(n,e).cross(Hh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ta),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const a=-(t.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:e.copy(t.start).addScaledVector(n,a)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Gh.getNormalMatrix(t),s=this.coplanarPoint(Ta).applyMatrix4(t),a=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(a),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Hn=new Ys,ys=new F;class Wr{constructor(t=new qn,e=new qn,n=new qn,s=new qn,a=new qn,o=new qn){this.planes=[t,e,n,s,a,o]}set(t,e,n,s,a,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(a),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=bn){const n=this.planes,s=t.elements,a=s[0],o=s[1],l=s[2],r=s[3],c=s[4],h=s[5],u=s[6],d=s[7],g=s[8],p=s[9],v=s[10],m=s[11],f=s[12],b=s[13],M=s[14],S=s[15];if(n[0].setComponents(r-a,d-c,m-g,S-f).normalize(),n[1].setComponents(r+a,d+c,m+g,S+f).normalize(),n[2].setComponents(r+o,d+h,m+p,S+b).normalize(),n[3].setComponents(r-o,d-h,m-p,S-b).normalize(),n[4].setComponents(r-l,d-u,m-v,S-M).normalize(),e===bn)n[5].setComponents(r+l,d+u,m+v,S+M).normalize();else if(e===Hs)n[5].setComponents(l,u,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Hn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Hn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Hn)}intersectsSprite(t){return Hn.center.set(0,0,0),Hn.radius=.7071067811865476,Hn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Hn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let a=0;a<6;a++)if(e[a].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(ys.x=s.normal.x>0?t.max.x:t.min.x,ys.y=s.normal.y>0?t.max.y:t.min.y,ys.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function sc(){let i=null,t=!1,e=null,n=null;function s(a,o){e(a,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(a){e=a},setContext:function(a){i=a}}}function Wh(i){const t=new WeakMap;function e(l,r){const c=l.array,h=l.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(r,d),i.bufferData(r,c,h),l.onUploadCallback();let g;if(c instanceof Float32Array)g=i.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=i.SHORT;else if(c instanceof Uint32Array)g=i.UNSIGNED_INT;else if(c instanceof Int32Array)g=i.INT;else if(c instanceof Int8Array)g=i.BYTE;else if(c instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,r,c){const h=r.array,u=r.updateRanges;if(i.bindBuffer(c,l),u.length===0)i.bufferSubData(c,0,h);else{u.sort((g,p)=>g.start-p.start);let d=0;for(let g=1;g<u.length;g++){const p=u[d],v=u[g];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,u[d]=v)}u.length=d+1;for(let g=0,p=u.length;g<p;g++){const v=u[g];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}r.clearUpdateRanges()}r.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const r=t.get(l);r&&(i.deleteBuffer(r.buffer),t.delete(l))}function o(l,r){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,r));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,r),c.version=l.version}}return{get:s,remove:a,update:o}}class Fn extends We{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const a=t/2,o=e/2,l=Math.floor(n),r=Math.floor(s),c=l+1,h=r+1,u=t/l,d=e/r,g=[],p=[],v=[],m=[];for(let f=0;f<h;f++){const b=f*d-o;for(let M=0;M<c;M++){const S=M*u-a;p.push(S,-b,0),v.push(0,0,1),m.push(M/l),m.push(1-f/r)}}for(let f=0;f<r;f++)for(let b=0;b<l;b++){const M=b+c*f,S=b+c*(f+1),C=b+1+c*(f+1),T=b+1+c*f;g.push(M,S,T),g.push(S,C,T)}this.setIndex(g),this.setAttribute("position",new ye(p,3)),this.setAttribute("normal",new ye(v,3)),this.setAttribute("uv",new ye(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var qh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Xh=`#ifdef USE_ALPHAHASH
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
#endif`,$h=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Yh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Kh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zh=`#ifdef USE_AOMAP
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
#endif`,Jh=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qh=`#ifdef USE_BATCHING
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
#endif`,tu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,su=`#ifdef USE_IRIDESCENCE
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
#endif`,au=`#ifdef USE_BUMPMAP
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
#endif`,ru=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ou=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,uu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,du=`#if defined( USE_COLOR_ALPHA )
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
#endif`,pu=`#define PI 3.141592653589793
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
} // validated`,mu=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gu=`vec3 transformedNormal = objectNormal;
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
#endif`,_u=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Su=`
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
}`,yu=`#ifdef USE_ENVMAP
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
#endif`,Eu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Tu=`#ifdef USE_ENVMAP
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
#endif`,wu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Au=`#ifdef USE_ENVMAP
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
#endif`,Ru=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Cu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Du=`#ifdef USE_GRADIENTMAP
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
}`,Uu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fu=`uniform bool receiveShadow;
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
#endif`,Ou=`#ifdef USE_ENVMAP
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
#endif`,ku=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Vu=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Hu=`PhysicalMaterial material;
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
#endif`,Gu=`struct PhysicalMaterial {
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
}`,Wu=`
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
#endif`,qu=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$u=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Yu=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ku=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ju=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ju=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qu=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tf=`#if defined( USE_POINTS_UV )
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
#endif`,ef=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,af=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,rf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`#ifdef USE_MORPHTARGETS
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
#endif`,lf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,hf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ff=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,df=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pf=`#ifdef USE_NORMALMAP
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
#endif`,mf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,_f=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ef=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Af=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pf=`float getShadowMask() {
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
}`,Lf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Df=`#ifdef USE_SKINNING
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
#endif`,Uf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,If=`#ifdef USE_SKINNING
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
#endif`,Nf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ff=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Of=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Bf=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#ifdef USE_TRANSMISSION
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
#endif`,Vf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Gf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Xf=`uniform sampler2D t2D;
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
}`,$f=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
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
}`,Jf=`#if DEPTH_PACKING == 3200
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
}`,Qf=`#define DISTANCE
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
}`,td=`#define DISTANCE
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
}`,ed=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,id=`uniform float scale;
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
}`,sd=`uniform vec3 diffuse;
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
}`,ad=`#include <common>
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
}`,rd=`uniform vec3 diffuse;
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
}`,od=`#define LAMBERT
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
}`,ld=`#define LAMBERT
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
}`,cd=`#define MATCAP
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
}`,hd=`#define MATCAP
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
}`,ud=`#define NORMAL
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
}`,fd=`#define NORMAL
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
}`,dd=`#define PHONG
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
}`,pd=`#define PHONG
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
}`,md=`#define STANDARD
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
}`,gd=`#define STANDARD
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
}`,_d=`#define TOON
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
}`,vd=`#define TOON
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
}`,xd=`uniform float size;
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
}`,Md=`uniform vec3 diffuse;
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
}`,bd=`#include <common>
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
}`,Sd=`uniform vec3 color;
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
}`,yd=`uniform float rotation;
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
}`,Ed=`uniform vec3 diffuse;
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
}`,Ot={alphahash_fragment:qh,alphahash_pars_fragment:Xh,alphamap_fragment:$h,alphamap_pars_fragment:Yh,alphatest_fragment:Kh,alphatest_pars_fragment:jh,aomap_fragment:Zh,aomap_pars_fragment:Jh,batching_pars_vertex:Qh,batching_vertex:tu,begin_vertex:eu,beginnormal_vertex:nu,bsdfs:iu,iridescence_fragment:su,bumpmap_pars_fragment:au,clipping_planes_fragment:ru,clipping_planes_pars_fragment:ou,clipping_planes_pars_vertex:lu,clipping_planes_vertex:cu,color_fragment:hu,color_pars_fragment:uu,color_pars_vertex:fu,color_vertex:du,common:pu,cube_uv_reflection_fragment:mu,defaultnormal_vertex:gu,displacementmap_pars_vertex:_u,displacementmap_vertex:vu,emissivemap_fragment:xu,emissivemap_pars_fragment:Mu,colorspace_fragment:bu,colorspace_pars_fragment:Su,envmap_fragment:yu,envmap_common_pars_fragment:Eu,envmap_pars_fragment:Tu,envmap_pars_vertex:wu,envmap_physical_pars_fragment:Ou,envmap_vertex:Au,fog_vertex:Ru,fog_pars_vertex:Cu,fog_fragment:Pu,fog_pars_fragment:Lu,gradientmap_pars_fragment:Du,lightmap_pars_fragment:Uu,lights_lambert_fragment:Iu,lights_lambert_pars_fragment:Nu,lights_pars_begin:Fu,lights_toon_fragment:ku,lights_toon_pars_fragment:Bu,lights_phong_fragment:zu,lights_phong_pars_fragment:Vu,lights_physical_fragment:Hu,lights_physical_pars_fragment:Gu,lights_fragment_begin:Wu,lights_fragment_maps:qu,lights_fragment_end:Xu,logdepthbuf_fragment:$u,logdepthbuf_pars_fragment:Yu,logdepthbuf_pars_vertex:Ku,logdepthbuf_vertex:ju,map_fragment:Zu,map_pars_fragment:Ju,map_particle_fragment:Qu,map_particle_pars_fragment:tf,metalnessmap_fragment:ef,metalnessmap_pars_fragment:nf,morphinstance_vertex:sf,morphcolor_vertex:af,morphnormal_vertex:rf,morphtarget_pars_vertex:of,morphtarget_vertex:lf,normal_fragment_begin:cf,normal_fragment_maps:hf,normal_pars_fragment:uf,normal_pars_vertex:ff,normal_vertex:df,normalmap_pars_fragment:pf,clearcoat_normal_fragment_begin:mf,clearcoat_normal_fragment_maps:gf,clearcoat_pars_fragment:_f,iridescence_pars_fragment:vf,opaque_fragment:xf,packing:Mf,premultiplied_alpha_fragment:bf,project_vertex:Sf,dithering_fragment:yf,dithering_pars_fragment:Ef,roughnessmap_fragment:Tf,roughnessmap_pars_fragment:wf,shadowmap_pars_fragment:Af,shadowmap_pars_vertex:Rf,shadowmap_vertex:Cf,shadowmask_pars_fragment:Pf,skinbase_vertex:Lf,skinning_pars_vertex:Df,skinning_vertex:Uf,skinnormal_vertex:If,specularmap_fragment:Nf,specularmap_pars_fragment:Ff,tonemapping_fragment:Of,tonemapping_pars_fragment:kf,transmission_fragment:Bf,transmission_pars_fragment:zf,uv_pars_fragment:Vf,uv_pars_vertex:Hf,uv_vertex:Gf,worldpos_vertex:Wf,background_vert:qf,background_frag:Xf,backgroundCube_vert:$f,backgroundCube_frag:Yf,cube_vert:Kf,cube_frag:jf,depth_vert:Zf,depth_frag:Jf,distanceRGBA_vert:Qf,distanceRGBA_frag:td,equirect_vert:ed,equirect_frag:nd,linedashed_vert:id,linedashed_frag:sd,meshbasic_vert:ad,meshbasic_frag:rd,meshlambert_vert:od,meshlambert_frag:ld,meshmatcap_vert:cd,meshmatcap_frag:hd,meshnormal_vert:ud,meshnormal_frag:fd,meshphong_vert:dd,meshphong_frag:pd,meshphysical_vert:md,meshphysical_frag:gd,meshtoon_vert:_d,meshtoon_frag:vd,points_vert:xd,points_frag:Md,shadow_vert:bd,shadow_frag:Sd,sprite_vert:yd,sprite_frag:Ed},st={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},ln={basic:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Ot.meshbasic_vert,fragmentShader:Ot.meshbasic_frag},lambert:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshlambert_vert,fragmentShader:Ot.meshlambert_frag},phong:{uniforms:Re([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:Ot.meshphong_vert,fragmentShader:Ot.meshphong_frag},standard:{uniforms:Re([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag},toon:{uniforms:Re([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Bt(0)}}]),vertexShader:Ot.meshtoon_vert,fragmentShader:Ot.meshtoon_frag},matcap:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Ot.meshmatcap_vert,fragmentShader:Ot.meshmatcap_frag},points:{uniforms:Re([st.points,st.fog]),vertexShader:Ot.points_vert,fragmentShader:Ot.points_frag},dashed:{uniforms:Re([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ot.linedashed_vert,fragmentShader:Ot.linedashed_frag},depth:{uniforms:Re([st.common,st.displacementmap]),vertexShader:Ot.depth_vert,fragmentShader:Ot.depth_frag},normal:{uniforms:Re([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Ot.meshnormal_vert,fragmentShader:Ot.meshnormal_frag},sprite:{uniforms:Re([st.sprite,st.fog]),vertexShader:Ot.sprite_vert,fragmentShader:Ot.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ot.background_vert,fragmentShader:Ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Ot.backgroundCube_vert,fragmentShader:Ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ot.cube_vert,fragmentShader:Ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ot.equirect_vert,fragmentShader:Ot.equirect_frag},distanceRGBA:{uniforms:Re([st.common,st.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ot.distanceRGBA_vert,fragmentShader:Ot.distanceRGBA_frag},shadow:{uniforms:Re([st.lights,st.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:Ot.shadow_vert,fragmentShader:Ot.shadow_frag}};ln.physical={uniforms:Re([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Ot.meshphysical_vert,fragmentShader:Ot.meshphysical_frag};const Es={r:0,b:0,g:0},Gn=new un,Td=new oe;function wd(i,t,e,n,s,a,o){const l=new Bt(0);let r=a===!0?0:1,c,h,u=null,d=0,g=null;function p(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?e:t).get(M)),M}function v(b){let M=!1;const S=p(b);S===null?f(l,r):S&&S.isColor&&(f(S,1),M=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,M){const S=p(M);S&&(S.isCubeTexture||S.mapping===Xs)?(h===void 0&&(h=new ve(new Qn(1,1,1),new Pe({name:"BackgroundCubeMaterial",uniforms:Ci(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Gn.copy(M.backgroundRotation),Gn.x*=-1,Gn.y*=-1,Gn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Gn.y*=-1,Gn.z*=-1),h.material.uniforms.envMap.value=S,h.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Td.makeRotationFromEuler(Gn)),h.material.toneMapped=jt.getTransfer(S.colorSpace)!==ne,(u!==S||d!==S.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,u=S,d=S.version,g=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ve(new Fn(2,2),new Pe({name:"BackgroundMaterial",uniforms:Ci(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=jt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||d!==S.version||g!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,d=S.version,g=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function f(b,M){b.getRGB(Es,ec(i)),n.buffers.color.setClear(Es.r,Es.g,Es.b,M,o)}return{getClearColor:function(){return l},setClearColor:function(b,M=1){l.set(b),r=M,f(l,r)},getClearAlpha:function(){return r},setClearAlpha:function(b){r=b,f(l,r)},render:v,addToRenderList:m}}function Ad(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let a=s,o=!1;function l(_,y,V,B,U){let z=!1;const k=u(B,V,y);a!==k&&(a=k,c(a.object)),z=g(_,B,V,U),z&&p(_,B,V,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,S(_,y,V,B),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function r(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,y,V){const B=V.wireframe===!0;let U=n[_.id];U===void 0&&(U={},n[_.id]=U);let z=U[y.id];z===void 0&&(z={},U[y.id]=z);let k=z[B];return k===void 0&&(k=d(r()),z[B]=k),k}function d(_){const y=[],V=[],B=[];for(let U=0;U<e;U++)y[U]=0,V[U]=0,B[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:V,attributeDivisors:B,object:_,attributes:{},index:null}}function g(_,y,V,B){const U=a.attributes,z=y.attributes;let k=0;const Q=V.getAttributes();for(const q in Q)if(Q[q].location>=0){const ot=U[q];let pt=z[q];if(pt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor)),ot===void 0||ot.attribute!==pt||pt&&ot.data!==pt.data)return!0;k++}return a.attributesNum!==k||a.index!==B}function p(_,y,V,B){const U={},z=y.attributes;let k=0;const Q=V.getAttributes();for(const q in Q)if(Q[q].location>=0){let ot=z[q];ot===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor));const pt={};pt.attribute=ot,ot&&ot.data&&(pt.data=ot.data),U[q]=pt,k++}a.attributes=U,a.attributesNum=k,a.index=B}function v(){const _=a.newAttributes;for(let y=0,V=_.length;y<V;y++)_[y]=0}function m(_){f(_,0)}function f(_,y){const V=a.newAttributes,B=a.enabledAttributes,U=a.attributeDivisors;V[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),U[_]!==y&&(i.vertexAttribDivisor(_,y),U[_]=y)}function b(){const _=a.newAttributes,y=a.enabledAttributes;for(let V=0,B=y.length;V<B;V++)y[V]!==_[V]&&(i.disableVertexAttribArray(V),y[V]=0)}function M(_,y,V,B,U,z,k){k===!0?i.vertexAttribIPointer(_,y,V,U,z):i.vertexAttribPointer(_,y,V,B,U,z)}function S(_,y,V,B){v();const U=B.attributes,z=V.getAttributes(),k=y.defaultAttributeValues;for(const Q in z){const q=z[Q];if(q.location>=0){let at=U[Q];if(at===void 0&&(Q==="instanceMatrix"&&_.instanceMatrix&&(at=_.instanceMatrix),Q==="instanceColor"&&_.instanceColor&&(at=_.instanceColor)),at!==void 0){const ot=at.normalized,pt=at.itemSize,Vt=t.get(at);if(Vt===void 0)continue;const Ht=Vt.buffer,$=Vt.type,J=Vt.bytesPerElement,ut=$===i.INT||$===i.UNSIGNED_INT||at.gpuType===Or;if(at.isInterleavedBufferAttribute){const ht=at.data,wt=ht.stride,Tt=at.offset;if(ht.isInstancedInterleavedBuffer){for(let it=0;it<q.locationSize;it++)f(q.location+it,ht.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let it=0;it<q.locationSize;it++)m(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let it=0;it<q.locationSize;it++)M(q.location+it,pt/q.locationSize,$,ot,wt*J,(Tt+pt/q.locationSize*it)*J,ut)}else{if(at.isInstancedBufferAttribute){for(let ht=0;ht<q.locationSize;ht++)f(q.location+ht,at.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let ht=0;ht<q.locationSize;ht++)m(q.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Ht);for(let ht=0;ht<q.locationSize;ht++)M(q.location+ht,pt/q.locationSize,$,ot,pt*J,pt/q.locationSize*ht*J,ut)}}else if(k!==void 0){const ot=k[Q];if(ot!==void 0)switch(ot.length){case 2:i.vertexAttrib2fv(q.location,ot);break;case 3:i.vertexAttrib3fv(q.location,ot);break;case 4:i.vertexAttrib4fv(q.location,ot);break;default:i.vertexAttrib1fv(q.location,ot)}}}}b()}function C(){L();for(const _ in n){const y=n[_];for(const V in y){const B=y[V];for(const U in B)h(B[U].object),delete B[U];delete y[V]}delete n[_]}}function T(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const V in y){const B=y[V];for(const U in B)h(B[U].object),delete B[U];delete y[V]}delete n[_.id]}function w(_){for(const y in n){const V=n[y];if(V[_.id]===void 0)continue;const B=V[_.id];for(const U in B)h(B[U].object),delete B[U];delete V[_.id]}}function L(){P(),o=!0,a!==s&&(a=s,c(a.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:L,resetDefaultState:P,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Rd(i,t,e){let n;function s(c){n=c}function a(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function l(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let g=0;for(let p=0;p<u;p++)g+=h[p];e.update(g,n,1)}function r(c,h,u,d){if(u===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)o(c[p],h[p],d[p]);else{g.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let p=0;for(let v=0;v<u;v++)p+=h[v];for(let v=0;v<d.length;v++)e.update(p,n,d[v])}}this.setMode=s,this.render=a,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=r}function Cd(i,t,e,n){let s;function a(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(w){return!(w!==en&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const L=w===hn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==yn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mn&&!L)}function r(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=r(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:r,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:S,vertexTextures:C,maxSamples:T}}function Pd(i){const t=this;let e=null,n=0,s=!1,a=!1;const o=new qn,l=new kt,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const g=u.length!==0||d||n!==0||s;return s=d,n=u.length,g},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,g){const p=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||p===null||p.length===0||a&&!m)a?h(null):c();else{const b=a?0:n,M=b*4;let S=f.clippingState||null;r.value=S,S=h(p,d,M,g);for(let C=0;C!==M;++C)S[C]=e[C];f.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){r.value!==e&&(r.value=e,r.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,g,p){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=r.value,p!==!0||m===null){const f=g+v*4,b=d.matrixWorldInverse;l.getNormalMatrix(b),(m===null||m.length<f)&&(m=new Float32Array(f));for(let M=0,S=g;M!==v;++M,S+=4)o.copy(u[M]).applyMatrix4(b,l),o.normal.toArray(m,S),m[S+3]=o.constant}r.value=m,r.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Ld(i){let t=new WeakMap;function e(o,l){return l===Qa?o.mapping=Ti:l===tr&&(o.mapping=wi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Qa||l===tr)if(t.has(o)){const r=t.get(o).texture;return e(r,o.mapping)}else{const r=o.image;if(r&&r.height>0){const c=new Vh(r.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const r=t.get(l);r!==void 0&&(t.delete(l),r.dispose())}function a(){t=new WeakMap}return{get:n,dispose:a}}class qr extends nc{constructor(t=-1,e=1,n=1,s=-1,a=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=a,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,a,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=a,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=n-t,o=n+t,l=s+e,r=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,o=a+c*this.view.width,l-=h*this.view.offsetY,r=l-h*this.view.height}this.projectionMatrix.makeOrthographic(a,o,l,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const _i=4,No=[.125,.215,.35,.446,.526,.582],Yn=20,wa=new qr,Fo=new Bt;let Aa=null,Ra=0,Ca=0,Pa=!1;const Xn=(1+Math.sqrt(5))/2,pi=1/Xn,Oo=[new F(-Xn,pi,0),new F(Xn,pi,0),new F(-pi,0,Xn),new F(pi,0,Xn),new F(0,Xn,-pi),new F(0,Xn,pi),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)];class ko{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(t,n,s,a),e>0&&this._blur(a,0,0,e),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Aa,Ra,Ca),this._renderer.xr.enabled=Pa,t.scissorTest=!1,Ts(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ti||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Aa=this._renderer.getRenderTarget(),Ra=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Pa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Qe,minFilter:Qe,generateMipmaps:!1,type:hn,format:en,colorSpace:On,depthBuffer:!1},s=Bo(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bo(t,e,n);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dd(a)),this._blurMaterial=Ud(a,t,e)}return s}_compileMaterial(t){const e=new ve(this._lodPlanes[0],t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,s){const l=new Fe(90,1,e,n),r=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Fo),h.toneMapping=In,h.autoClear=!1;const g=new on({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),p=new ve(new Qn,g);let v=!1;const m=t.background;m?m.isColor&&(g.color.copy(m),t.background=null,v=!0):(g.color.copy(Fo),v=!0);for(let f=0;f<6;f++){const b=f%3;b===0?(l.up.set(0,r[f],0),l.lookAt(c[f],0,0)):b===1?(l.up.set(0,0,r[f]),l.lookAt(0,c[f],0)):(l.up.set(0,r[f],0),l.lookAt(0,0,c[f]));const M=this._cubeSize;Ts(s,b*M,f>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(p,l),h.render(t,l)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ti||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zo());const a=s?this._cubemapMaterial:this._equirectMaterial,o=new ve(this._lodPlanes[0],a),l=a.uniforms;l.envMap.value=t;const r=this._cubeSize;Ts(e,0,0,3*r,2*r),n.setRenderTarget(e),n.render(o,wa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const o=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),l=Oo[(s-a-1)%Oo.length];this._blur(t,a-1,a,o,l)}e.autoClear=n}_blur(t,e,n,s,a){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",a),this._halfBlur(o,t,n,n,s,"longitudinal",a)}_halfBlur(t,e,n,s,a,o,l){const r=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ve(this._lodPlanes[s],c),d=c.uniforms,g=this._sizeLods[n]-1,p=isFinite(a)?Math.PI/(2*g):2*Math.PI/(2*Yn-1),v=a/p,m=isFinite(a)?1+Math.floor(h*v):Yn;m>Yn&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Yn}`);const f=[];let b=0;for(let w=0;w<Yn;++w){const L=w/v,P=Math.exp(-L*L/2);f.push(P),w===0?b+=P:w<m&&(b+=2*P)}for(let w=0;w<f.length;w++)f[w]=f[w]/b;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;const S=this._sizeLods[s],C=3*S*(s>M-_i?s-M+_i:0),T=4*(this._cubeSize-S);Ts(e,C,T,3*S,2*S),r.setRenderTarget(e),r.render(u,wa)}}function Dd(i){const t=[],e=[],n=[];let s=i;const a=i-_i+1+No.length;for(let o=0;o<a;o++){const l=Math.pow(2,s);e.push(l);let r=1/l;o>i-_i?r=No[o-i+_i-1]:o===0&&(r=0),n.push(r);const c=1/(l-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],g=6,p=6,v=3,m=2,f=1,b=new Float32Array(v*p*g),M=new Float32Array(m*p*g),S=new Float32Array(f*p*g);for(let T=0;T<g;T++){const w=T%3*2/3-1,L=T>2?0:-1,P=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];b.set(P,v*p*T),M.set(d,m*p*T);const _=[T,T,T,T,T,T];S.set(_,f*p*T)}const C=new We;C.setAttribute("position",new sn(b,v)),C.setAttribute("uv",new sn(M,m)),C.setAttribute("faceIndex",new sn(S,f)),t.push(C),s>_i&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Bo(i,t,e){const n=new Ye(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ud(i,t,e){const n=new Float32Array(Yn),s=new F(0,1,0);return new Pe({name:"SphericalGaussianBlur",defines:{n:Yn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function zo(){return new Pe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Vo(){return new Pe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Sn,depthTest:!1,depthWrite:!1})}function Xr(){return`

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
	`}function Id(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const r=l.mapping,c=r===Qa||r===tr,h=r===Ti||r===wi;if(c||h){let u=t.get(l);const d=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return e===null&&(e=new ko(i)),u=c?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const g=l.image;return c&&g&&g.height>0||h&&g&&s(g)?(e===null&&(e=new ko(i)),u=c?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",a),u.texture):null}}}return l}function s(l){let r=0;const c=6;for(let h=0;h<c;h++)l[h]!==void 0&&r++;return r===c}function a(l){const r=l.target;r.removeEventListener("dispose",a);const c=t.get(r);c!==void 0&&(t.delete(r),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Nd(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ns("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Fd(i,t,e,n){const s={},a=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let m=0,f=v.length;m<f;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete s[d.id];const g=a.get(d);g&&(t.remove(g),a.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function r(u){const d=u.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const g=u.morphAttributes;for(const p in g){const v=g[p];for(let m=0,f=v.length;m<f;m++)t.update(v[m],i.ARRAY_BUFFER)}}function c(u){const d=[],g=u.index,p=u.attributes.position;let v=0;if(g!==null){const b=g.array;v=g.version;for(let M=0,S=b.length;M<S;M+=3){const C=b[M+0],T=b[M+1],w=b[M+2];d.push(C,T,T,w,w,C)}}else if(p!==void 0){const b=p.array;v=p.version;for(let M=0,S=b.length/3-1;M<S;M+=3){const C=M+0,T=M+1,w=M+2;d.push(C,T,T,w,w,C)}}else return;const m=new($l(d)?tc:Ql)(d,1);m.version=v;const f=a.get(u);f&&t.remove(f),a.set(u,m)}function h(u){const d=a.get(u);if(d){const g=u.index;g!==null&&d.version<g.version&&c(u)}else c(u);return a.get(u)}return{get:l,update:r,getWireframeAttribute:h}}function Od(i,t,e){let n;function s(d){n=d}let a,o;function l(d){a=d.type,o=d.bytesPerElement}function r(d,g){i.drawElements(n,g,a,d*o),e.update(g,n,1)}function c(d,g,p){p!==0&&(i.drawElementsInstanced(n,g,a,d*o,p),e.update(g,n,p))}function h(d,g,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,g,0,a,d,0,p);let m=0;for(let f=0;f<p;f++)m+=g[f];e.update(m,n,1)}function u(d,g,p,v){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,g[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,g,0,a,d,0,v,0,p);let f=0;for(let b=0;b<p;b++)f+=g[b];for(let b=0;b<v.length;b++)e.update(f,n,v[b])}}this.setMode=s,this.setIndex=l,this.render=r,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function kd(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(a,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(a/3);break;case i.LINES:e.lines+=l*(a/2);break;case i.LINE_STRIP:e.lines+=l*(a-1);break;case i.LINE_LOOP:e.lines+=l*a;break;case i.POINTS:e.points+=l*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bd(i,t,e){const n=new WeakMap,s=new te;function a(o,l,r){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(l);if(d===void 0||d.count!==u){let P=function(){w.dispose(),n.delete(l),l.removeEventListener("dispose",P)};d!==void 0&&d.texture.dispose();const g=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],f=l.morphAttributes.normal||[],b=l.morphAttributes.color||[];let M=0;g===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let S=l.attributes.position.count*M,C=1;S>t.maxTextureSize&&(C=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*C*4*u),w=new Kl(T,S,C,u);w.type=Mn,w.needsUpdate=!0;const L=M*4;for(let _=0;_<u;_++){const y=m[_],V=f[_],B=b[_],U=S*C*4*_;for(let z=0;z<y.count;z++){const k=z*L;g===!0&&(s.fromBufferAttribute(y,z),T[U+k+0]=s.x,T[U+k+1]=s.y,T[U+k+2]=s.z,T[U+k+3]=0),p===!0&&(s.fromBufferAttribute(V,z),T[U+k+4]=s.x,T[U+k+5]=s.y,T[U+k+6]=s.z,T[U+k+7]=0),v===!0&&(s.fromBufferAttribute(B,z),T[U+k+8]=s.x,T[U+k+9]=s.y,T[U+k+10]=s.z,T[U+k+11]=B.itemSize===4?s.w:1)}}d={count:u,texture:w,size:new Rt(S,C)},n.set(l,d),l.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)r.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let v=0;v<c.length;v++)g+=c[v];const p=l.morphTargetsRelative?1:1-g;r.getUniforms().setValue(i,"morphTargetBaseInfluence",p),r.getUniforms().setValue(i,"morphTargetInfluences",c)}r.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),r.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:a}}function zd(i,t,e,n){let s=new WeakMap;function a(r){const c=n.render.frame,h=r.geometry,u=t.get(r,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),r.isInstancedMesh&&(r.hasEventListener("dispose",l)===!1&&r.addEventListener("dispose",l),s.get(r)!==c&&(e.update(r.instanceMatrix,i.ARRAY_BUFFER),r.instanceColor!==null&&e.update(r.instanceColor,i.ARRAY_BUFFER),s.set(r,c))),r.isSkinnedMesh){const d=r.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function l(r){const c=r.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:a,dispose:o}}class ac extends Le{constructor(t,e,n,s,a,o,l,r,c,h=bi){if(h!==bi&&h!==Ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===bi&&(n=Jn),n===void 0&&h===Ri&&(n=Ai),super(null,s,a,o,l,r,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Ce,this.minFilter=r!==void 0?r:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const rc=new Le,Ho=new ac(1,1),oc=new Kl,lc=new wh,cc=new ic,Go=[],Wo=[],qo=new Float32Array(16),Xo=new Float32Array(9),$o=new Float32Array(4);function Ii(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let a=Go[s];if(a===void 0&&(a=new Float32Array(s),Go[s]=a),t!==0){n.toArray(a,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(a,l)}return a}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=Wo[t];e===void 0&&(e=new Int32Array(t),Wo[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Vd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),Me(e,t)}}function Gd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),Me(e,t)}}function Wd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),Me(e,t)}}function qd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;$o.set(n),i.uniformMatrix2fv(this.addr,!1,$o),Me(e,n)}}function Xd(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;Xo.set(n),i.uniformMatrix3fv(this.addr,!1,Xo),Me(e,n)}}function $d(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(xe(e,n))return;qo.set(n),i.uniformMatrix4fv(this.addr,!1,qo),Me(e,n)}}function Yd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Kd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),Me(e,t)}}function jd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),Me(e,t)}}function Zd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),Me(e,t)}}function Jd(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Qd(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),Me(e,t)}}function tp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),Me(e,t)}}function ep(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),Me(e,t)}}function np(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let a;this.type===i.SAMPLER_2D_SHADOW?(Ho.compareFunction=Xl,a=Ho):a=rc,e.setTexture2D(t||a,s)}function ip(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||lc,s)}function sp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||cc,s)}function ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||oc,s)}function rp(i){switch(i){case 5126:return Vd;case 35664:return Hd;case 35665:return Gd;case 35666:return Wd;case 35674:return qd;case 35675:return Xd;case 35676:return $d;case 5124:case 35670:return Yd;case 35667:case 35671:return Kd;case 35668:case 35672:return jd;case 35669:case 35673:return Zd;case 5125:return Jd;case 36294:return Qd;case 36295:return tp;case 36296:return ep;case 35678:case 36198:case 36298:case 36306:case 35682:return np;case 35679:case 36299:case 36307:return ip;case 35680:case 36300:case 36308:case 36293:return sp;case 36289:case 36303:case 36311:case 36292:return ap}}function op(i,t){i.uniform1fv(this.addr,t)}function lp(i,t){const e=Ii(t,this.size,2);i.uniform2fv(this.addr,e)}function cp(i,t){const e=Ii(t,this.size,3);i.uniform3fv(this.addr,e)}function hp(i,t){const e=Ii(t,this.size,4);i.uniform4fv(this.addr,e)}function up(i,t){const e=Ii(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fp(i,t){const e=Ii(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function dp(i,t){const e=Ii(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function pp(i,t){i.uniform1iv(this.addr,t)}function mp(i,t){i.uniform2iv(this.addr,t)}function gp(i,t){i.uniform3iv(this.addr,t)}function _p(i,t){i.uniform4iv(this.addr,t)}function vp(i,t){i.uniform1uiv(this.addr,t)}function xp(i,t){i.uniform2uiv(this.addr,t)}function Mp(i,t){i.uniform3uiv(this.addr,t)}function bp(i,t){i.uniform4uiv(this.addr,t)}function Sp(i,t,e){const n=this.cache,s=t.length,a=Ks(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||rc,a[o])}function yp(i,t,e){const n=this.cache,s=t.length,a=Ks(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||lc,a[o])}function Ep(i,t,e){const n=this.cache,s=t.length,a=Ks(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||cc,a[o])}function Tp(i,t,e){const n=this.cache,s=t.length,a=Ks(e,s);xe(n,a)||(i.uniform1iv(this.addr,a),Me(n,a));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||oc,a[o])}function wp(i){switch(i){case 5126:return op;case 35664:return lp;case 35665:return cp;case 35666:return hp;case 35674:return up;case 35675:return fp;case 35676:return dp;case 5124:case 35670:return pp;case 35667:case 35671:return mp;case 35668:case 35672:return gp;case 35669:case 35673:return _p;case 5125:return vp;case 36294:return xp;case 36295:return Mp;case 36296:return bp;case 35678:case 36198:case 36298:case 36306:case 35682:return Sp;case 35679:case 36299:case 36307:return yp;case 35680:case 36300:case 36308:case 36293:return Ep;case 36289:case 36303:case 36311:case 36292:return Tp}}class Ap{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=rp(e.type)}}class Rp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=wp(e.type)}}class Cp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let a=0,o=s.length;a!==o;++a){const l=s[a];l.setValue(t,e[l.id],n)}}}const La=/(\w+)(\])?(\[|\.)?/g;function Yo(i,t){i.seq.push(t),i.map[t.id]=t}function Pp(i,t,e){const n=i.name,s=n.length;for(La.lastIndex=0;;){const a=La.exec(n),o=La.lastIndex;let l=a[1];const r=a[2]==="]",c=a[3];if(r&&(l=l|0),c===void 0||c==="["&&o+2===s){Yo(e,c===void 0?new Ap(l,i,t):new Rp(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new Cp(l),Yo(e,u)),e=u}}}class Fs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const a=t.getActiveUniform(e,s),o=t.getUniformLocation(e,a.name);Pp(a,o,this)}}setValue(t,e,n,s){const a=this.map[e];a!==void 0&&a.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let a=0,o=e.length;a!==o;++a){const l=e[a],r=n[l.id];r.needsUpdate!==!1&&l.setValue(t,r.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,a=t.length;s!==a;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Ko(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Lp=37297;let Dp=0;function Up(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),a=Math.min(t+6,e.length);for(let o=s;o<a;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}function Ip(i){const t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(i);let n;switch(t===e?n="":t===Vs&&e===zs?n="LinearDisplayP3ToLinearSRGB":t===zs&&e===Vs&&(n="LinearSRGBToLinearDisplayP3"),i){case On:case $s:return[n,"LinearTransferOETF"];case $e:case Gr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function jo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Up(i.getShaderSource(t),o)}else return s}function Np(i,t){const e=Ip(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Fp(i,t){let e;switch(t){case Cl:e="Linear";break;case Pl:e="Reinhard";break;case Ll:e="Cineon";break;case Fr:e="ACESFilmic";break;case Dl:e="AgX";break;case Ul:e="Neutral";break;case sh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ws=new F;function Op(){jt.getLuminanceCoefficients(ws);const i=ws.x.toFixed(4),t=ws.y.toFixed(4),e=ws.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function kp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qi).join(`
`)}function Bp(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zp(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const a=i.getActiveAttrib(t,s),o=a.name;let l=1;a.type===i.FLOAT_MAT2&&(l=2),a.type===i.FLOAT_MAT3&&(l=3),a.type===i.FLOAT_MAT4&&(l=4),e[o]={type:a.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function qi(i){return i!==""}function Zo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Jo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Vp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rr(i){return i.replace(Vp,Gp)}const Hp=new Map;function Gp(i,t){let e=Ot[t];if(e===void 0){const n=Hp.get(t);if(n!==void 0)e=Ot[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Rr(e)}const Wp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qo(i){return i.replace(Wp,qp)}function qp(i,t,e,n){let s="";for(let a=parseInt(t);a<parseInt(e);a++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function tl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Xp(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Al?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Rl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function $p(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ti:case wi:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yp(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function Kp(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Nr:t="ENVMAP_BLENDING_MULTIPLY";break;case nh:t="ENVMAP_BLENDING_MIX";break;case ih:t="ENVMAP_BLENDING_ADD";break}return t}function jp(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Zp(i,t,e,n){const s=i.getContext(),a=e.defines;let o=e.vertexShader,l=e.fragmentShader;const r=Xp(e),c=$p(e),h=Yp(e),u=Kp(e),d=jp(e),g=kp(e),p=Bp(a),v=s.createProgram();let m,f,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(qi).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(qi).join(`
`),f.length>0&&(f+=`
`)):(m=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qi).join(`
`),f=[tl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?Ot.tonemapping_pars_fragment:"",e.toneMapping!==In?Fp("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ot.colorspace_pars_fragment,Np("linearToOutputTexel",e.outputColorSpace),Op(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qi).join(`
`)),o=Rr(o),o=Zo(o,e),o=Jo(o,e),l=Rr(l),l=Zo(l,e),l=Jo(l,e),o=Qo(o),l=Qo(l),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===_o?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===_o?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=b+m+o,S=b+f+l,C=Ko(s,s.VERTEX_SHADER,M),T=Ko(s,s.FRAGMENT_SHADER,S);s.attachShader(v,C),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(y){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(C).trim(),U=s.getShaderInfoLog(T).trim();let z=!0,k=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,T);else{const Q=jo(s,C,"vertex"),q=jo(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+V+`
`+Q+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||U==="")&&(k=!1);k&&(y.diagnostics={runnable:z,programLog:V,vertexShader:{log:B,prefix:m},fragmentShader:{log:U,prefix:f}})}s.deleteShader(C),s.deleteShader(T),L=new Fs(s,v),P=zp(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let P;this.getAttributes=function(){return P===void 0&&w(this),P};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,Lp)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dp++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=T,this}let Jp=0;class Qp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),a=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new tm(t),e.set(t,n)),n}}class tm{constructor(t){this.id=Jp++,this.code=t,this.usedTimes=0}}function em(i,t,e,n,s,a,o){const l=new Zl,r=new Qp,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,g=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,y,V,B,U){const z=B.fog,k=U.geometry,Q=_.isMeshStandardMaterial?B.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||Q),at=q&&q.mapping===Xs?q.image.height:null,ot=v[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const pt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Vt=pt!==void 0?pt.length:0;let Ht=0;k.morphAttributes.position!==void 0&&(Ht=1),k.morphAttributes.normal!==void 0&&(Ht=2),k.morphAttributes.color!==void 0&&(Ht=3);let $,J,ut,ht;if(ot){const Ue=ln[ot];$=Ue.vertexShader,J=Ue.fragmentShader}else $=_.vertexShader,J=_.fragmentShader,r.update(_),ut=r.getVertexShaderID(_),ht=r.getFragmentShaderID(_);const wt=i.getRenderTarget(),Tt=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,Et=!!_.map,Ft=!!_.matcap,D=!!q,ke=!!_.aoMap,Gt=!!_.lightMap,$t=!!_.bumpMap,Pt=!!_.normalMap,ie=!!_.displacementMap,It=!!_.emissiveMap,A=!!_.metalnessMap,x=!!_.roughnessMap,H=_.anisotropy>0,K=_.clearcoat>0,tt=_.dispersion>0,Y=_.iridescence>0,bt=_.sheen>0,rt=_.transmission>0,mt=H&&!!_.anisotropyMap,Yt=K&&!!_.clearcoatMap,et=K&&!!_.clearcoatNormalMap,gt=K&&!!_.clearcoatRoughnessMap,Lt=Y&&!!_.iridescenceMap,Dt=Y&&!!_.iridescenceThicknessMap,_t=bt&&!!_.sheenColorMap,Wt=bt&&!!_.sheenRoughnessMap,Nt=!!_.specularMap,ee=!!_.specularColorMap,I=!!_.specularIntensityMap,ft=rt&&!!_.transmissionMap,X=rt&&!!_.thicknessMap,Z=!!_.gradientMap,lt=!!_.alphaMap,dt=_.alphaTest>0,qt=!!_.alphaHash,pe=!!_.extensions;let De=In;_.toneMapped&&(wt===null||wt.isXRRenderTarget===!0)&&(De=i.toneMapping);const Kt={shaderID:ot,shaderType:_.type,shaderName:_.name,vertexShader:$,fragmentShader:J,defines:_.defines,customVertexShaderID:ut,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:it,batchingColor:it&&U._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&U.instanceColor!==null,instancingMorph:Tt&&U.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:wt===null?i.outputColorSpace:wt.isXRRenderTarget===!0?wt.texture.colorSpace:On,alphaToCoverage:!!_.alphaToCoverage,map:Et,matcap:Ft,envMap:D,envMapMode:D&&q.mapping,envMapCubeUVHeight:at,aoMap:ke,lightMap:Gt,bumpMap:$t,normalMap:Pt,displacementMap:g&&ie,emissiveMap:It,normalMapObjectSpace:Pt&&_.normalMapType===lh,normalMapTangentSpace:Pt&&_.normalMapType===ql,metalnessMap:A,roughnessMap:x,anisotropy:H,anisotropyMap:mt,clearcoat:K,clearcoatMap:Yt,clearcoatNormalMap:et,clearcoatRoughnessMap:gt,dispersion:tt,iridescence:Y,iridescenceMap:Lt,iridescenceThicknessMap:Dt,sheen:bt,sheenColorMap:_t,sheenRoughnessMap:Wt,specularMap:Nt,specularColorMap:ee,specularIntensityMap:I,transmission:rt,transmissionMap:ft,thicknessMap:X,gradientMap:Z,opaque:_.transparent===!1&&_.blending===Zn&&_.alphaToCoverage===!1,alphaMap:lt,alphaTest:dt,alphaHash:qt,combine:_.combine,mapUv:Et&&m(_.map.channel),aoMapUv:ke&&m(_.aoMap.channel),lightMapUv:Gt&&m(_.lightMap.channel),bumpMapUv:$t&&m(_.bumpMap.channel),normalMapUv:Pt&&m(_.normalMap.channel),displacementMapUv:ie&&m(_.displacementMap.channel),emissiveMapUv:It&&m(_.emissiveMap.channel),metalnessMapUv:A&&m(_.metalnessMap.channel),roughnessMapUv:x&&m(_.roughnessMap.channel),anisotropyMapUv:mt&&m(_.anisotropyMap.channel),clearcoatMapUv:Yt&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:et&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Lt&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:_t&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:Wt&&m(_.sheenRoughnessMap.channel),specularMapUv:Nt&&m(_.specularMap.channel),specularColorMapUv:ee&&m(_.specularColorMap.channel),specularIntensityMapUv:I&&m(_.specularIntensityMap.channel),transmissionMapUv:ft&&m(_.transmissionMap.channel),thicknessMapUv:X&&m(_.thicknessMap.channel),alphaMapUv:lt&&m(_.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Pt||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!k.attributes.uv&&(Et||lt),fog:!!z,useFog:_.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:Vt,morphTextureStride:Ht,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:De,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&jt.getTransfer(_.map.colorSpace)===ne,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ge,flipSided:_.side===Oe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:pe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(pe&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Kt.vertexUv1s=c.has(1),Kt.vertexUv2s=c.has(2),Kt.vertexUv3s=c.has(3),c.clear(),Kt}function b(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)y.push(V),y.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(M(y,_),S(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function M(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function S(_,y){l.disableAll(),y.supportsVertexTextures&&l.enable(0),y.instancing&&l.enable(1),y.instancingColor&&l.enable(2),y.instancingMorph&&l.enable(3),y.matcap&&l.enable(4),y.envMap&&l.enable(5),y.normalMapObjectSpace&&l.enable(6),y.normalMapTangentSpace&&l.enable(7),y.clearcoat&&l.enable(8),y.iridescence&&l.enable(9),y.alphaTest&&l.enable(10),y.vertexColors&&l.enable(11),y.vertexAlphas&&l.enable(12),y.vertexUv1s&&l.enable(13),y.vertexUv2s&&l.enable(14),y.vertexUv3s&&l.enable(15),y.vertexTangents&&l.enable(16),y.anisotropy&&l.enable(17),y.alphaHash&&l.enable(18),y.batching&&l.enable(19),y.dispersion&&l.enable(20),y.batchingColor&&l.enable(21),_.push(l.mask),l.disableAll(),y.fog&&l.enable(0),y.useFog&&l.enable(1),y.flatShading&&l.enable(2),y.logarithmicDepthBuffer&&l.enable(3),y.reverseDepthBuffer&&l.enable(4),y.skinning&&l.enable(5),y.morphTargets&&l.enable(6),y.morphNormals&&l.enable(7),y.morphColors&&l.enable(8),y.premultipliedAlpha&&l.enable(9),y.shadowMapEnabled&&l.enable(10),y.doubleSided&&l.enable(11),y.flipSided&&l.enable(12),y.useDepthPacking&&l.enable(13),y.dithering&&l.enable(14),y.transmission&&l.enable(15),y.sheen&&l.enable(16),y.opaque&&l.enable(17),y.pointsUvs&&l.enable(18),y.decodeVideoTexture&&l.enable(19),y.alphaToCoverage&&l.enable(20),_.push(l.mask)}function C(_){const y=v[_.type];let V;if(y){const B=ln[y];V=Ji.clone(B.uniforms)}else V=_.uniforms;return V}function T(_,y){let V;for(let B=0,U=h.length;B<U;B++){const z=h[B];if(z.cacheKey===y){V=z,++V.usedTimes;break}}return V===void 0&&(V=new Zp(i,y,_,a),h.push(V)),V}function w(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function L(_){r.remove(_)}function P(){r.dispose()}return{getParameters:f,getProgramCacheKey:b,getUniforms:C,acquireProgram:T,releaseProgram:w,releaseShaderCache:L,programs:h,dispose:P}}function nm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,r){i.get(o)[l]=r}function a(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:a}}function im(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function el(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function nl(){const i=[];let t=0;const e=[],n=[],s=[];function a(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,g,p,v,m){let f=i[t];return f===void 0?(f={id:u.id,object:u,geometry:d,material:g,groupOrder:p,renderOrder:u.renderOrder,z:v,group:m},i[t]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=g,f.groupOrder=p,f.renderOrder=u.renderOrder,f.z=v,f.group=m),t++,f}function l(u,d,g,p,v,m){const f=o(u,d,g,p,v,m);g.transmission>0?n.push(f):g.transparent===!0?s.push(f):e.push(f)}function r(u,d,g,p,v,m){const f=o(u,d,g,p,v,m);g.transmission>0?n.unshift(f):g.transparent===!0?s.unshift(f):e.unshift(f)}function c(u,d){e.length>1&&e.sort(u||im),n.length>1&&n.sort(d||el),s.length>1&&s.sort(d||el)}function h(){for(let u=t,d=i.length;u<d;u++){const g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:s,init:a,push:l,unshift:r,finish:h,sort:c}}function sm(){let i=new WeakMap;function t(n,s){const a=i.get(n);let o;return a===void 0?(o=new nl,i.set(n,[o])):s>=a.length?(o=new nl,a.push(o)):o=a[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new F,color:new Bt};break;case"SpotLight":e={position:new F,direction:new F,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new F,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new F,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new F,halfWidth:new F,halfHeight:new F};break}return i[t.id]=e,e}}}function rm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let om=0;function lm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function cm(i){const t=new am,e=rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);const s=new F,a=new oe,o=new oe;function l(c){let h=0,u=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let g=0,p=0,v=0,m=0,f=0,b=0,M=0,S=0,C=0,T=0,w=0;c.sort(lm);for(let P=0,_=c.length;P<_;P++){const y=c[P],V=y.color,B=y.intensity,U=y.distance,z=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=V.r*B,u+=V.g*B,d+=V.b*B;else if(y.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(y.sh.coefficients[k],B);w++}else if(y.isDirectionalLight){const k=t.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const Q=y.shadow,q=e.get(y);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.directionalShadow[g]=q,n.directionalShadowMap[g]=z,n.directionalShadowMatrix[g]=y.shadow.matrix,b++}n.directional[g]=k,g++}else if(y.isSpotLight){const k=t.get(y);k.position.setFromMatrixPosition(y.matrixWorld),k.color.copy(V).multiplyScalar(B),k.distance=U,k.coneCos=Math.cos(y.angle),k.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),k.decay=y.decay,n.spot[v]=k;const Q=y.shadow;if(y.map&&(n.spotLightMap[C]=y.map,C++,Q.updateMatrices(y),y.castShadow&&T++),n.spotLightMatrix[v]=Q.matrix,y.castShadow){const q=e.get(y);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=z,S++}v++}else if(y.isRectAreaLight){const k=t.get(y);k.color.copy(V).multiplyScalar(B),k.halfWidth.set(y.width*.5,0,0),k.halfHeight.set(0,y.height*.5,0),n.rectArea[m]=k,m++}else if(y.isPointLight){const k=t.get(y);if(k.color.copy(y.color).multiplyScalar(y.intensity),k.distance=y.distance,k.decay=y.decay,y.castShadow){const Q=y.shadow,q=e.get(y);q.shadowIntensity=Q.intensity,q.shadowBias=Q.bias,q.shadowNormalBias=Q.normalBias,q.shadowRadius=Q.radius,q.shadowMapSize=Q.mapSize,q.shadowCameraNear=Q.camera.near,q.shadowCameraFar=Q.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=z,n.pointShadowMatrix[p]=y.shadow.matrix,M++}n.point[p]=k,p++}else if(y.isHemisphereLight){const k=t.get(y);k.skyColor.copy(y.color).multiplyScalar(B),k.groundColor.copy(y.groundColor).multiplyScalar(B),n.hemi[f]=k,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=st.LTC_FLOAT_1,n.rectAreaLTC2=st.LTC_FLOAT_2):(n.rectAreaLTC1=st.LTC_HALF_1,n.rectAreaLTC2=st.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==g||L.pointLength!==p||L.spotLength!==v||L.rectAreaLength!==m||L.hemiLength!==f||L.numDirectionalShadows!==b||L.numPointShadows!==M||L.numSpotShadows!==S||L.numSpotMaps!==C||L.numLightProbes!==w)&&(n.directional.length=g,n.spot.length=v,n.rectArea.length=m,n.point.length=p,n.hemi.length=f,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=S+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,L.directionalLength=g,L.pointLength=p,L.spotLength=v,L.rectAreaLength=m,L.hemiLength=f,L.numDirectionalShadows=b,L.numPointShadows=M,L.numSpotShadows=S,L.numSpotMaps=C,L.numLightProbes=w,n.version=om++)}function r(c,h){let u=0,d=0,g=0,p=0,v=0;const m=h.matrixWorldInverse;for(let f=0,b=c.length;f<b;f++){const M=c[f];if(M.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),u++}else if(M.isSpotLight){const S=n.spot[g];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),g++}else if(M.isRectAreaLight){const S=n.rectArea[p];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),o.identity(),a.copy(M.matrixWorld),a.premultiply(m),o.extractRotation(a),S.halfWidth.set(M.width*.5,0,0),S.halfHeight.set(0,M.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const S=n.point[d];S.position.setFromMatrixPosition(M.matrixWorld),S.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const S=n.hemi[v];S.direction.setFromMatrixPosition(M.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:l,setupView:r,state:n}}function il(i){const t=new cm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function l(){t.setup(e)}function r(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:r,pushLight:a,pushShadow:o}}function hm(i){let t=new WeakMap;function e(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new il(i),t.set(s,[l])):a>=o.length?(l=new il(i),o.push(l)):l=o[a],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class um extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class fm extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const dm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,pm=`uniform sampler2D shadow_pass;
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
}`;function mm(i,t,e){let n=new Wr;const s=new Rt,a=new Rt,o=new te,l=new um({depthPacking:oh}),r=new fm,c={},h=e.maxTextureSize,u={[Nn]:Oe,[Oe]:Nn,[Ge]:Ge},d=new Pe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Rt},radius:{value:4}},vertexShader:dm,fragmentShader:pm}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const p=new We;p.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ve(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Al;let f=this.type;this.render=function(T,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const P=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Sn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=f!==xn&&this.type===xn,U=f===xn&&this.type!==xn;for(let z=0,k=T.length;z<k;z++){const Q=T[z],q=Q.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();if(s.multiply(at),a.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/at.x),s.x=a.x*at.x,q.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/at.y),s.y=a.y*at.y,q.mapSize.y=a.y)),q.map===null||B===!0||U===!0){const pt=this.type!==xn?{minFilter:Ce,magFilter:Ce}:{};q.map!==null&&q.map.dispose(),q.map=new Ye(s.x,s.y,pt),q.map.texture.name=Q.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ot=q.getViewportCount();for(let pt=0;pt<ot;pt++){const Vt=q.getViewport(pt);o.set(a.x*Vt.x,a.y*Vt.y,a.x*Vt.z,a.y*Vt.w),V.viewport(o),q.updateMatrices(Q,pt),n=q.getFrustum(),S(w,L,q.camera,Q,this.type)}q.isPointLightShadow!==!0&&this.type===xn&&b(q,L),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(P,_,y)};function b(T,w){const L=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,g.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ye(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,v,null),g.uniforms.shadow_pass.value=T.mapPass.texture,g.uniforms.resolution.value=T.mapSize,g.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,L,g,v,null)}function M(T,w,L,P){let _=null;const y=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(y!==void 0)_=y;else if(_=L.isPointLight===!0?r:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=_.uuid,B=w.uuid;let U=c[V];U===void 0&&(U={},c[V]=U);let z=U[B];z===void 0&&(z=_.clone(),U[B]=z,w.addEventListener("dispose",C)),_=z}if(_.visible=w.visible,_.wireframe=w.wireframe,P===xn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:u[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,L.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=L}return _}function S(T,w,L,P,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);const B=t.update(T),U=T.material;if(Array.isArray(U)){const z=B.groups;for(let k=0,Q=z.length;k<Q;k++){const q=z[k],at=U[q.materialIndex];if(at&&at.visible){const ot=M(T,at,P,_);T.onBeforeShadow(i,T,w,L,B,ot,q),i.renderBufferDirect(L,null,B,ot,T,q),T.onAfterShadow(i,T,w,L,B,ot,q)}}}else if(U.visible){const z=M(T,U,P,_);T.onBeforeShadow(i,T,w,L,B,z,null),i.renderBufferDirect(L,null,B,z,T,null),T.onAfterShadow(i,T,w,L,B,z,null)}}const V=T.children;for(let B=0,U=V.length;B<U;B++)S(V[B],w,L,P,_)}function C(T){T.target.removeEventListener("dispose",C);for(const L in c){const P=c[L],_=T.target.uuid;_ in P&&(P[_].dispose(),delete P[_])}}}const gm={[Xa]:$a,[Ya]:Za,[Ka]:Ja,[Ei]:ja,[$a]:Xa,[Za]:Ya,[Ja]:Ka,[ja]:Ei};function _m(i){function t(){let I=!1;const ft=new te;let X=null;const Z=new te(0,0,0,0);return{setMask:function(lt){X!==lt&&!I&&(i.colorMask(lt,lt,lt,lt),X=lt)},setLocked:function(lt){I=lt},setClear:function(lt,dt,qt,pe,De){De===!0&&(lt*=pe,dt*=pe,qt*=pe),ft.set(lt,dt,qt,pe),Z.equals(ft)===!1&&(i.clearColor(lt,dt,qt,pe),Z.copy(ft))},reset:function(){I=!1,X=null,Z.set(-1,0,0,0)}}}function e(){let I=!1,ft=!1,X=null,Z=null,lt=null;return{setReversed:function(dt){ft=dt},setTest:function(dt){dt?ut(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(dt){X!==dt&&!I&&(i.depthMask(dt),X=dt)},setFunc:function(dt){if(ft&&(dt=gm[dt]),Z!==dt){switch(dt){case Xa:i.depthFunc(i.NEVER);break;case $a:i.depthFunc(i.ALWAYS);break;case Ya:i.depthFunc(i.LESS);break;case Ei:i.depthFunc(i.LEQUAL);break;case Ka:i.depthFunc(i.EQUAL);break;case ja:i.depthFunc(i.GEQUAL);break;case Za:i.depthFunc(i.GREATER);break;case Ja:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=dt}},setLocked:function(dt){I=dt},setClear:function(dt){lt!==dt&&(i.clearDepth(dt),lt=dt)},reset:function(){I=!1,X=null,Z=null,lt=null}}}function n(){let I=!1,ft=null,X=null,Z=null,lt=null,dt=null,qt=null,pe=null,De=null;return{setTest:function(Kt){I||(Kt?ut(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(Kt){ft!==Kt&&!I&&(i.stencilMask(Kt),ft=Kt)},setFunc:function(Kt,Ue,fn){(X!==Kt||Z!==Ue||lt!==fn)&&(i.stencilFunc(Kt,Ue,fn),X=Kt,Z=Ue,lt=fn)},setOp:function(Kt,Ue,fn){(dt!==Kt||qt!==Ue||pe!==fn)&&(i.stencilOp(Kt,Ue,fn),dt=Kt,qt=Ue,pe=fn)},setLocked:function(Kt){I=Kt},setClear:function(Kt){De!==Kt&&(i.clearStencil(Kt),De=Kt)},reset:function(){I=!1,ft=null,X=null,Z=null,lt=null,dt=null,qt=null,pe=null,De=null}}}const s=new t,a=new e,o=new n,l=new WeakMap,r=new WeakMap;let c={},h={},u=new WeakMap,d=[],g=null,p=!1,v=null,m=null,f=null,b=null,M=null,S=null,C=null,T=new Bt(0,0,0),w=0,L=!1,P=null,_=null,y=null,V=null,B=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,k=0;const Q=i.getParameter(i.VERSION);Q.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Q)[1]),z=k>=1):Q.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),z=k>=2);let q=null,at={};const ot=i.getParameter(i.SCISSOR_BOX),pt=i.getParameter(i.VIEWPORT),Vt=new te().fromArray(ot),Ht=new te().fromArray(pt);function $(I,ft,X,Z){const lt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(I,dt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let qt=0;qt<X;qt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ft,0,i.RGBA,1,1,Z,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(ft+qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return dt}const J={};J[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ut(i.DEPTH_TEST),a.setFunc(Ei),Gt(!1),$t(uo),ut(i.CULL_FACE),D(Sn);function ut(I){c[I]!==!0&&(i.enable(I),c[I]=!0)}function ht(I){c[I]!==!1&&(i.disable(I),c[I]=!1)}function wt(I,ft){return h[I]!==ft?(i.bindFramebuffer(I,ft),h[I]=ft,I===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ft),I===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ft),!0):!1}function Tt(I,ft){let X=d,Z=!1;if(I){X=u.get(ft),X===void 0&&(X=[],u.set(ft,X));const lt=I.textures;if(X.length!==lt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,qt=lt.length;dt<qt;dt++)X[dt]=i.COLOR_ATTACHMENT0+dt;X.length=lt.length,Z=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Z=!0);Z&&i.drawBuffers(X)}function it(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Et={[$n]:i.FUNC_ADD,[Bc]:i.FUNC_SUBTRACT,[zc]:i.FUNC_REVERSE_SUBTRACT};Et[Vc]=i.MIN,Et[Hc]=i.MAX;const Ft={[Gc]:i.ZERO,[Wc]:i.ONE,[qc]:i.SRC_COLOR,[Wa]:i.SRC_ALPHA,[Zc]:i.SRC_ALPHA_SATURATE,[Kc]:i.DST_COLOR,[$c]:i.DST_ALPHA,[Xc]:i.ONE_MINUS_SRC_COLOR,[qa]:i.ONE_MINUS_SRC_ALPHA,[jc]:i.ONE_MINUS_DST_COLOR,[Yc]:i.ONE_MINUS_DST_ALPHA,[Jc]:i.CONSTANT_COLOR,[Qc]:i.ONE_MINUS_CONSTANT_COLOR,[th]:i.CONSTANT_ALPHA,[eh]:i.ONE_MINUS_CONSTANT_ALPHA};function D(I,ft,X,Z,lt,dt,qt,pe,De,Kt){if(I===Sn){p===!0&&(ht(i.BLEND),p=!1);return}if(p===!1&&(ut(i.BLEND),p=!0),I!==kc){if(I!==v||Kt!==L){if((m!==$n||M!==$n)&&(i.blendEquation(i.FUNC_ADD),m=$n,M=$n),Kt)switch(I){case Zn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.ONE,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Zn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ji:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case po:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}f=null,b=null,S=null,C=null,T.set(0,0,0),w=0,v=I,L=Kt}return}lt=lt||ft,dt=dt||X,qt=qt||Z,(ft!==m||lt!==M)&&(i.blendEquationSeparate(Et[ft],Et[lt]),m=ft,M=lt),(X!==f||Z!==b||dt!==S||qt!==C)&&(i.blendFuncSeparate(Ft[X],Ft[Z],Ft[dt],Ft[qt]),f=X,b=Z,S=dt,C=qt),(pe.equals(T)===!1||De!==w)&&(i.blendColor(pe.r,pe.g,pe.b,De),T.copy(pe),w=De),v=I,L=!1}function ke(I,ft){I.side===Ge?ht(i.CULL_FACE):ut(i.CULL_FACE);let X=I.side===Oe;ft&&(X=!X),Gt(X),I.blending===Zn&&I.transparent===!1?D(Sn):D(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),s.setMask(I.colorWrite);const Z=I.stencilWrite;o.setTest(Z),Z&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(I){P!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),P=I)}function $t(I){I!==Fc?(ut(i.CULL_FACE),I!==_&&(I===uo?i.cullFace(i.BACK):I===Oc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),_=I}function Pt(I){I!==y&&(z&&i.lineWidth(I),y=I)}function ie(I,ft,X){I?(ut(i.POLYGON_OFFSET_FILL),(V!==ft||B!==X)&&(i.polygonOffset(ft,X),V=ft,B=X)):ht(i.POLYGON_OFFSET_FILL)}function It(I){I?ut(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+U-1),q!==I&&(i.activeTexture(I),q=I)}function x(I,ft,X){X===void 0&&(q===null?X=i.TEXTURE0+U-1:X=q);let Z=at[X];Z===void 0&&(Z={type:void 0,texture:void 0},at[X]=Z),(Z.type!==I||Z.texture!==ft)&&(q!==X&&(i.activeTexture(X),q=X),i.bindTexture(I,ft||J[I]),Z.type=I,Z.texture=ft)}function H(){const I=at[q];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function K(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function bt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function rt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function et(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(I){Vt.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),Vt.copy(I))}function _t(I){Ht.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),Ht.copy(I))}function Wt(I,ft){let X=r.get(ft);X===void 0&&(X=new WeakMap,r.set(ft,X));let Z=X.get(I);Z===void 0&&(Z=i.getUniformBlockIndex(ft,I.name),X.set(I,Z))}function Nt(I,ft){const Z=r.get(ft).get(I);l.get(ft)!==Z&&(i.uniformBlockBinding(ft,Z,I.__bindingPointIndex),l.set(ft,Z))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,at={},h={},u=new WeakMap,d=[],g=null,p=!1,v=null,m=null,f=null,b=null,M=null,S=null,C=null,T=new Bt(0,0,0),w=0,L=!1,P=null,_=null,y=null,V=null,B=null,Vt.set(0,0,i.canvas.width,i.canvas.height),Ht.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ut,disable:ht,bindFramebuffer:wt,drawBuffers:Tt,useProgram:it,setBlending:D,setMaterial:ke,setFlipSided:Gt,setCullFace:$t,setLineWidth:Pt,setPolygonOffset:ie,setScissorTest:It,activeTexture:A,bindTexture:x,unbindTexture:H,compressedTexImage2D:K,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Lt,updateUBOMapping:Wt,uniformBlockBinding:Nt,texStorage2D:Yt,texStorage3D:et,texSubImage2D:Y,texSubImage3D:bt,compressedTexSubImage2D:rt,compressedTexSubImage3D:mt,scissor:Dt,viewport:_t,reset:ee}}function sl(i,t,e,n){const s=vm(n);switch(e){case kl:return i*t;case zl:return i*t;case Vl:return i*t*2;case Hl:return i*t/s.components*s.byteLength;case zr:return i*t/s.components*s.byteLength;case Gl:return i*t*2/s.components*s.byteLength;case Vr:return i*t*2/s.components*s.byteLength;case Bl:return i*t*3/s.components*s.byteLength;case en:return i*t*4/s.components*s.byteLength;case Hr:return i*t*4/s.components*s.byteLength;case Ps:case Ls:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ds:case Us:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ir:case ar:return Math.max(i,16)*Math.max(t,8)/4;case nr:case sr:return Math.max(i,8)*Math.max(t,8)/2;case rr:case or:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case lr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hr:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ur:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fr:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case dr:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case pr:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case mr:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case gr:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case _r:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case vr:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case xr:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Mr:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case br:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sr:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Is:case yr:case Er:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Wl:case Tr:return Math.ceil(i/4)*Math.ceil(t/4)*8;case wr:case Ar:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vm(i){switch(i){case yn:case Nl:return{byteLength:1,components:1};case Zi:case Fl:case hn:return{byteLength:2,components:1};case kr:case Br:return{byteLength:2,components:4};case Jn:case Or:case Mn:return{byteLength:4,components:1};case Ol:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function xm(i,t,e,n,s,a,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Rt,h=new WeakMap;let u;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,x){return g?new OffscreenCanvas(A,x):Ws("canvas")}function v(A,x,H){let K=1;const tt=It(A);if((tt.width>H||tt.height>H)&&(K=H/Math.max(tt.width,tt.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Y=Math.floor(K*tt.width),bt=Math.floor(K*tt.height);u===void 0&&(u=p(Y,bt));const rt=x?p(Y,bt):u;return rt.width=Y,rt.height=bt,rt.getContext("2d").drawImage(A,0,0,Y,bt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Y+"x"+bt+")."),rt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==Ce&&A.minFilter!==Qe}function f(A){i.generateMipmap(A)}function b(A,x,H,K,tt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Y=x;if(x===i.RED&&(H===i.FLOAT&&(Y=i.R32F),H===i.HALF_FLOAT&&(Y=i.R16F),H===i.UNSIGNED_BYTE&&(Y=i.R8)),x===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.R8UI),H===i.UNSIGNED_SHORT&&(Y=i.R16UI),H===i.UNSIGNED_INT&&(Y=i.R32UI),H===i.BYTE&&(Y=i.R8I),H===i.SHORT&&(Y=i.R16I),H===i.INT&&(Y=i.R32I)),x===i.RG&&(H===i.FLOAT&&(Y=i.RG32F),H===i.HALF_FLOAT&&(Y=i.RG16F),H===i.UNSIGNED_BYTE&&(Y=i.RG8)),x===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RG8UI),H===i.UNSIGNED_SHORT&&(Y=i.RG16UI),H===i.UNSIGNED_INT&&(Y=i.RG32UI),H===i.BYTE&&(Y=i.RG8I),H===i.SHORT&&(Y=i.RG16I),H===i.INT&&(Y=i.RG32I)),x===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),H===i.UNSIGNED_INT&&(Y=i.RGB32UI),H===i.BYTE&&(Y=i.RGB8I),H===i.SHORT&&(Y=i.RGB16I),H===i.INT&&(Y=i.RGB32I)),x===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),H===i.UNSIGNED_INT&&(Y=i.RGBA32UI),H===i.BYTE&&(Y=i.RGBA8I),H===i.SHORT&&(Y=i.RGBA16I),H===i.INT&&(Y=i.RGBA32I)),x===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),x===i.RGBA){const bt=tt?Bs:jt.getTransfer(K);H===i.FLOAT&&(Y=i.RGBA32F),H===i.HALF_FLOAT&&(Y=i.RGBA16F),H===i.UNSIGNED_BYTE&&(Y=bt===ne?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function M(A,x){let H;return A?x===null||x===Jn||x===Ai?H=i.DEPTH24_STENCIL8:x===Mn?H=i.DEPTH32F_STENCIL8:x===Zi&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Jn||x===Ai?H=i.DEPTH_COMPONENT24:x===Mn?H=i.DEPTH_COMPONENT32F:x===Zi&&(H=i.DEPTH_COMPONENT16),H}function S(A,x){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ce&&A.minFilter!==Qe?Math.log2(Math.max(x.width,x.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?x.mipmaps.length:1}function C(A){const x=A.target;x.removeEventListener("dispose",C),w(x),x.isVideoTexture&&h.delete(x)}function T(A){const x=A.target;x.removeEventListener("dispose",T),P(x)}function w(A){const x=n.get(A);if(x.__webglInit===void 0)return;const H=A.source,K=d.get(H);if(K){const tt=K[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&L(A),Object.keys(K).length===0&&d.delete(H)}n.remove(A)}function L(A){const x=n.get(A);i.deleteTexture(x.__webglTexture);const H=A.source,K=d.get(H);delete K[x.__cacheKey],o.memory.textures--}function P(A){const x=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let tt=0;tt<x.__webglFramebuffer[K].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[K][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const H=A.textures;for(let K=0,tt=H.length;K<tt;K++){const Y=n.get(H[K]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(H[K])}n.remove(A)}let _=0;function y(){_=0}function V(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function B(A){const x=[];return x.push(A.wrapS),x.push(A.wrapT),x.push(A.wrapR||0),x.push(A.magFilter),x.push(A.minFilter),x.push(A.anisotropy),x.push(A.internalFormat),x.push(A.format),x.push(A.type),x.push(A.generateMipmaps),x.push(A.premultiplyAlpha),x.push(A.flipY),x.push(A.unpackAlignment),x.push(A.colorSpace),x.join()}function U(A,x){const H=n.get(A);if(A.isVideoTexture&&Pt(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ht(H,A,x);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+x)}function z(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Ht(H,A,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+x)}function k(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Ht(H,A,x);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+x)}function Q(A,x){const H=n.get(A);if(A.version>0&&H.__version!==A.version){$(H,A,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+x)}const q={[ks]:i.REPEAT,[Kn]:i.CLAMP_TO_EDGE,[er]:i.MIRRORED_REPEAT},at={[Ce]:i.NEAREST,[ah]:i.NEAREST_MIPMAP_NEAREST,[rs]:i.NEAREST_MIPMAP_LINEAR,[Qe]:i.LINEAR,[na]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},ot={[ch]:i.NEVER,[mh]:i.ALWAYS,[hh]:i.LESS,[Xl]:i.LEQUAL,[uh]:i.EQUAL,[ph]:i.GEQUAL,[fh]:i.GREATER,[dh]:i.NOTEQUAL};function pt(A,x){if(x.type===Mn&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Qe||x.magFilter===na||x.magFilter===rs||x.magFilter===jn||x.minFilter===Qe||x.minFilter===na||x.minFilter===rs||x.minFilter===jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,q[x.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,q[x.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,q[x.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,at[x.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,at[x.minFilter]),x.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ot[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ce||x.minFilter!==rs&&x.minFilter!==jn||x.type===Mn&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Vt(A,x){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,x.addEventListener("dispose",C));const K=x.source;let tt=d.get(K);tt===void 0&&(tt={},d.set(K,tt));const Y=B(x);if(Y!==A.__cacheKey){tt[Y]===void 0&&(tt[Y]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),tt[Y].usedTimes++;const bt=tt[A.__cacheKey];bt!==void 0&&(tt[A.__cacheKey].usedTimes--,bt.usedTimes===0&&L(x)),A.__cacheKey=Y,A.__webglTexture=tt[Y].texture}return H}function Ht(A,x,H){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);const tt=Vt(A,x),Y=x.source;e.bindTexture(K,A.__webglTexture,i.TEXTURE0+H);const bt=n.get(Y);if(Y.version!==bt.__version||tt===!0){e.activeTexture(i.TEXTURE0+H);const rt=jt.getPrimaries(jt.workingColorSpace),mt=x.colorSpace===Dn?null:jt.getPrimaries(x.colorSpace),Yt=x.colorSpace===Dn||rt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let et=v(x.image,!1,s.maxTextureSize);et=ie(x,et);const gt=a.convert(x.format,x.colorSpace),Lt=a.convert(x.type);let Dt=b(x.internalFormat,gt,Lt,x.colorSpace,x.isVideoTexture);pt(K,x);let _t;const Wt=x.mipmaps,Nt=x.isVideoTexture!==!0,ee=bt.__version===void 0||tt===!0,I=Y.dataReady,ft=S(x,et);if(x.isDepthTexture)Dt=M(x.format===Ri,x.type),ee&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,Dt,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,gt,Lt,null));else if(x.isDataTexture)if(Wt.length>0){Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Wt[0].width,Wt[0].height);for(let X=0,Z=Wt.length;X<Z;X++)_t=Wt[X],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Lt,_t.data):e.texImage2D(i.TEXTURE_2D,X,Dt,_t.width,_t.height,0,gt,Lt,_t.data);x.generateMipmaps=!1}else Nt?(ee&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,et.width,et.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,gt,Lt,et.data)):e.texImage2D(i.TEXTURE_2D,0,Dt,et.width,et.height,0,gt,Lt,et.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Nt&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,Wt[0].width,Wt[0].height,et.depth);for(let X=0,Z=Wt.length;X<Z;X++)if(_t=Wt[X],x.format!==en)if(gt!==null)if(Nt){if(I)if(x.layerUpdates.size>0){const lt=sl(_t.width,_t.height,x.format,x.type);for(const dt of x.layerUpdates){const qt=_t.data.subarray(dt*lt/_t.data.BYTES_PER_ELEMENT,(dt+1)*lt/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,dt,_t.width,_t.height,1,gt,qt,0,0)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,gt,_t.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Dt,_t.width,_t.height,et.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,et.depth,gt,Lt,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Dt,_t.width,_t.height,et.depth,0,gt,Lt,_t.data)}else{Nt&&ee&&e.texStorage2D(i.TEXTURE_2D,ft,Dt,Wt[0].width,Wt[0].height);for(let X=0,Z=Wt.length;X<Z;X++)_t=Wt[X],x.format!==en?gt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Dt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Lt,_t.data):e.texImage2D(i.TEXTURE_2D,X,Dt,_t.width,_t.height,0,gt,Lt,_t.data)}else if(x.isDataArrayTexture)if(Nt){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ft,Dt,et.width,et.height,et.depth),I)if(x.layerUpdates.size>0){const X=sl(et.width,et.height,x.format,x.type);for(const Z of x.layerUpdates){const lt=et.data.subarray(Z*X/et.data.BYTES_PER_ELEMENT,(Z+1)*X/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,et.width,et.height,1,gt,Lt,lt)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,gt,Lt,et.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Dt,et.width,et.height,et.depth,0,gt,Lt,et.data);else if(x.isData3DTexture)Nt?(ee&&e.texStorage3D(i.TEXTURE_3D,ft,Dt,et.width,et.height,et.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,gt,Lt,et.data)):e.texImage3D(i.TEXTURE_3D,0,Dt,et.width,et.height,et.depth,0,gt,Lt,et.data);else if(x.isFramebufferTexture){if(ee)if(Nt)e.texStorage2D(i.TEXTURE_2D,ft,Dt,et.width,et.height);else{let X=et.width,Z=et.height;for(let lt=0;lt<ft;lt++)e.texImage2D(i.TEXTURE_2D,lt,Dt,X,Z,0,gt,Lt,null),X>>=1,Z>>=1}}else if(Wt.length>0){if(Nt&&ee){const X=It(Wt[0]);e.texStorage2D(i.TEXTURE_2D,ft,Dt,X.width,X.height)}for(let X=0,Z=Wt.length;X<Z;X++)_t=Wt[X],Nt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Lt,_t):e.texImage2D(i.TEXTURE_2D,X,Dt,gt,Lt,_t);x.generateMipmaps=!1}else if(Nt){if(ee){const X=It(et);e.texStorage2D(i.TEXTURE_2D,ft,Dt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Lt,et)}else e.texImage2D(i.TEXTURE_2D,0,Dt,gt,Lt,et);m(x)&&f(K),bt.__version=Y.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function $(A,x,H){if(x.image.length!==6)return;const K=Vt(A,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const Y=n.get(tt);if(tt.version!==Y.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const bt=jt.getPrimaries(jt.workingColorSpace),rt=x.colorSpace===Dn?null:jt.getPrimaries(x.colorSpace),mt=x.colorSpace===Dn||bt===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Yt=x.isCompressedTexture||x.image[0].isCompressedTexture,et=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let Z=0;Z<6;Z++)!Yt&&!et?gt[Z]=v(x.image[Z],!0,s.maxCubemapSize):gt[Z]=et?x.image[Z].image:x.image[Z],gt[Z]=ie(x,gt[Z]);const Lt=gt[0],Dt=a.convert(x.format,x.colorSpace),_t=a.convert(x.type),Wt=b(x.internalFormat,Dt,_t,x.colorSpace),Nt=x.isVideoTexture!==!0,ee=Y.__version===void 0||K===!0,I=tt.dataReady;let ft=S(x,Lt);pt(i.TEXTURE_CUBE_MAP,x);let X;if(Yt){Nt&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,Lt.width,Lt.height);for(let Z=0;Z<6;Z++){X=gt[Z].mipmaps;for(let lt=0;lt<X.length;lt++){const dt=X[lt];x.format!==en?Dt!==null?Nt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Dt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,0,0,dt.width,dt.height,Dt,_t,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt,Wt,dt.width,dt.height,0,Dt,_t,dt.data)}}}else{if(X=x.mipmaps,Nt&&ee){X.length>0&&ft++;const Z=It(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ft,Wt,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(et){Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,gt[Z].width,gt[Z].height,Dt,_t,gt[Z].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,gt[Z].width,gt[Z].height,0,Dt,_t,gt[Z].data);for(let lt=0;lt<X.length;lt++){const qt=X[lt].image[Z].image;Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,qt.width,qt.height,Dt,_t,qt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,qt.width,qt.height,0,Dt,_t,qt.data)}}else{Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Dt,_t,gt[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Wt,Dt,_t,gt[Z]);for(let lt=0;lt<X.length;lt++){const dt=X[lt];Nt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,0,0,Dt,_t,dt.image[Z]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,lt+1,Wt,Dt,_t,dt.image[Z])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),Y.__version=tt.version,x.onUpdate&&x.onUpdate(x)}A.__version=x.version}function J(A,x,H,K,tt,Y){const bt=a.convert(H.format,H.colorSpace),rt=a.convert(H.type),mt=b(H.internalFormat,bt,rt,H.colorSpace);if(!n.get(x).__hasExternalTextures){const et=Math.max(1,x.width>>Y),gt=Math.max(1,x.height>>Y);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Y,mt,et,gt,x.depth,0,bt,rt,null):e.texImage2D(tt,Y,mt,et,gt,0,bt,rt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),$t(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,tt,n.get(H).__webglTexture,0,Gt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,tt,n.get(H).__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,x,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),x.depthBuffer){const K=x.depthTexture,tt=K&&K.isDepthTexture?K.type:null,Y=M(x.stencilBuffer,tt),bt=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,rt=Gt(x);$t(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,rt,Y,x.width,x.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,rt,Y,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Y,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,bt,i.RENDERBUFFER,A)}else{const K=x.textures;for(let tt=0;tt<K.length;tt++){const Y=K[tt],bt=a.convert(Y.format,Y.colorSpace),rt=a.convert(Y.type),mt=b(Y.internalFormat,bt,rt,Y.colorSpace),Yt=Gt(x);H&&$t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,mt,x.width,x.height):$t(x)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(A,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),U(x.depthTexture,0);const K=n.get(x.depthTexture).__webglTexture,tt=Gt(x);if(x.depthTexture.format===bi)$t(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(x.depthTexture.format===Ri)$t(x)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(A){const x=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",tt)};K.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=K}if(A.depthTexture&&!x.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ht(x.__webglFramebuffer,A)}else if(H){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),ut(x.__webglDepthbuffer[K],A,!1);else{const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),ut(x.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(A,x,H){const K=n.get(A);x!==void 0&&J(K.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&wt(A)}function it(A){const x=A.texture,H=n.get(A),K=n.get(x);A.addEventListener("dispose",T);const tt=A.textures,Y=A.isWebGLCubeRenderTarget===!0,bt=tt.length>1;if(bt||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),Y){H.__webglFramebuffer=[];for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer[rt]=[];for(let mt=0;mt<x.mipmaps.length;mt++)H.__webglFramebuffer[rt][mt]=i.createFramebuffer()}else H.__webglFramebuffer[rt]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){H.__webglFramebuffer=[];for(let rt=0;rt<x.mipmaps.length;rt++)H.__webglFramebuffer[rt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(bt)for(let rt=0,mt=tt.length;rt<mt;rt++){const Yt=n.get(tt[rt]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&$t(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let rt=0;rt<tt.length;rt++){const mt=tt[rt];H.__webglColorRenderbuffer[rt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[rt]);const Yt=a.convert(mt.format,mt.colorSpace),et=a.convert(mt.type),gt=b(mt.internalFormat,Yt,et,mt.colorSpace,A.isXRRenderTarget===!0),Lt=Gt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,H.__webglColorRenderbuffer[rt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),pt(i.TEXTURE_CUBE_MAP,x);for(let rt=0;rt<6;rt++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)J(H.__webglFramebuffer[rt][mt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,mt);else J(H.__webglFramebuffer[rt],A,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0);m(x)&&f(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let rt=0,mt=tt.length;rt<mt;rt++){const Yt=tt[rt],et=n.get(Yt);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),pt(i.TEXTURE_2D,Yt),J(H.__webglFramebuffer,A,Yt,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,0),m(Yt)&&f(i.TEXTURE_2D)}e.unbindTexture()}else{let rt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(rt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(rt,K.__webglTexture),pt(rt,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)J(H.__webglFramebuffer[mt],A,x,i.COLOR_ATTACHMENT0,rt,mt);else J(H.__webglFramebuffer,A,x,i.COLOR_ATTACHMENT0,rt,0);m(x)&&f(rt),e.unbindTexture()}A.depthBuffer&&wt(A)}function Et(A){const x=A.textures;for(let H=0,K=x.length;H<K;H++){const tt=x[H];if(m(tt)){const Y=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,bt=n.get(tt).__webglTexture;e.bindTexture(Y,bt),f(Y),e.unbindTexture()}}}const Ft=[],D=[];function ke(A){if(A.samples>0){if($t(A)===!1){const x=A.textures,H=A.width,K=A.height;let tt=i.COLOR_BUFFER_BIT;const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,bt=n.get(A),rt=x.length>1;if(rt)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),rt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Yt=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,H,K,0,0,H,K,tt,i.NEAREST),r===!0&&(Ft.length=0,D.length=0,Ft.push(i.COLOR_ATTACHMENT0+mt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ft.push(Y),D.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,D)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ft))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),rt)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,bt.__webglColorRenderbuffer[mt]);const Yt=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,bt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&r){const x=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Gt(A){return Math.min(s.maxSamples,A.samples)}function $t(A){const x=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Pt(A){const x=o.render.frame;h.get(A)!==x&&(h.set(A,x),A.update())}function ie(A,x){const H=A.colorSpace,K=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==On&&H!==Dn&&(jt.getTransfer(H)===ne?(K!==en||tt!==yn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),x}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=y,this.setTexture2D=U,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Q,this.rebindTextures=Tt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=$t}function Mm(i,t){function e(n,s=Dn){let a;const o=jt.getTransfer(s);if(n===yn)return i.UNSIGNED_BYTE;if(n===kr)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Br)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ol)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.BYTE;if(n===Fl)return i.SHORT;if(n===Zi)return i.UNSIGNED_SHORT;if(n===Or)return i.INT;if(n===Jn)return i.UNSIGNED_INT;if(n===Mn)return i.FLOAT;if(n===hn)return i.HALF_FLOAT;if(n===kl)return i.ALPHA;if(n===Bl)return i.RGB;if(n===en)return i.RGBA;if(n===zl)return i.LUMINANCE;if(n===Vl)return i.LUMINANCE_ALPHA;if(n===bi)return i.DEPTH_COMPONENT;if(n===Ri)return i.DEPTH_STENCIL;if(n===Hl)return i.RED;if(n===zr)return i.RED_INTEGER;if(n===Gl)return i.RG;if(n===Vr)return i.RG_INTEGER;if(n===Hr)return i.RGBA_INTEGER;if(n===Ps||n===Ls||n===Ds||n===Us)if(o===ne)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(n===Ps)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ls)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ds)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Us)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(n===Ps)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ls)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ds)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Us)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nr||n===ir||n===sr||n===ar)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(n===nr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ir)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ar)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rr||n===or||n===lr)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(n===rr||n===or)return o===ne?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(n===lr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cr||n===hr||n===ur||n===fr||n===dr||n===pr||n===mr||n===gr||n===_r||n===vr||n===xr||n===Mr||n===br||n===Sr)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(n===cr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ur)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===dr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_r)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===br)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sr)return o===ne?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Is||n===yr||n===Er)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(n===Is)return o===ne?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Er)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Wl||n===Tr||n===wr||n===Ar)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(n===Is)return a.COMPRESSED_RED_RGTC1_EXT;if(n===Tr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ar)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ai?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class bm extends Fe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class vi extends de{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Sm={type:"move"};class Da{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,a=null,o=null;const l=this._targetRay,r=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),g=.02,p=.005;c.inputState.pinching&&d>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else r!==null&&t.gripSpace&&(a=e.getPose(t.gripSpace,n),a!==null&&(r.matrix.fromArray(a.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,a.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(a.linearVelocity)):r.hasLinearVelocity=!1,a.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(a.angularVelocity)):r.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&a!==null&&(s=a),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Sm)))}return l!==null&&(l.visible=s!==null),r!==null&&(r.visible=a!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new vi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ym=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Em=`
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

}`;class Tm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Le,a=t.properties.get(s);a.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Pe({vertexShader:ym,fragmentShader:Em,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ve(new Fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class wm extends Di{constructor(t,e){super();const n=this;let s=null,a=1,o=null,l="local-floor",r=1,c=null,h=null,u=null,d=null,g=null,p=null;const v=new Tm,m=e.getContextAttributes();let f=null,b=null;const M=[],S=[],C=new Rt;let T=null;const w=new Fe;w.layers.enable(1),w.viewport=new te;const L=new Fe;L.layers.enable(2),L.viewport=new te;const P=[w,L],_=new bm;_.layers.enable(1),_.layers.enable(2);let y=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=M[$];return J===void 0&&(J=new Da,M[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=M[$];return J===void 0&&(J=new Da,M[$]=J),J.getGripSpace()},this.getHand=function($){let J=M[$];return J===void 0&&(J=new Da,M[$]=J),J.getHandSpace()};function B($){const J=S.indexOf($.inputSource);if(J===-1)return;const ut=M[J];ut!==void 0&&(ut.update($.inputSource,$.frame,c||o),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function U(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",z);for(let $=0;$<M.length;$++){const J=S[$];J!==null&&(S[$]=null,M[$].disconnect(J))}y=null,V=null,v.reset(),t.setRenderTarget(f),g=null,d=null,u=null,s=null,b=null,Ht.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){l=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return u},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",U),s.addEventListener("inputsourceschange",z),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),s.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:a};g=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),b=new Ye(g.framebufferWidth,g.framebufferHeight,{format:en,type:yn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,ut=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Ri:bi,ut=m.stencil?Ai:Jn);const wt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:a};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(wt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),b=new Ye(d.textureWidth,d.textureHeight,{format:en,type:yn,depthTexture:new ac(d.textureWidth,d.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(r),c=null,o=await s.requestReferenceSpace(l),Ht.setContext(s),Ht.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function z($){for(let J=0;J<$.removed.length;J++){const ut=$.removed[J],ht=S.indexOf(ut);ht>=0&&(S[ht]=null,M[ht].disconnect(ut))}for(let J=0;J<$.added.length;J++){const ut=$.added[J];let ht=S.indexOf(ut);if(ht===-1){for(let Tt=0;Tt<M.length;Tt++)if(Tt>=S.length){S.push(ut),ht=Tt;break}else if(S[Tt]===null){S[Tt]=ut,ht=Tt;break}if(ht===-1)break}const wt=M[ht];wt&&wt.connect(ut)}}const k=new F,Q=new F;function q($,J,ut){k.setFromMatrixPosition(J.matrixWorld),Q.setFromMatrixPosition(ut.matrixWorld);const ht=k.distanceTo(Q),wt=J.projectionMatrix.elements,Tt=ut.projectionMatrix.elements,it=wt[14]/(wt[10]-1),Et=wt[14]/(wt[10]+1),Ft=(wt[9]+1)/wt[5],D=(wt[9]-1)/wt[5],ke=(wt[8]-1)/wt[0],Gt=(Tt[8]+1)/Tt[0],$t=it*ke,Pt=it*Gt,ie=ht/(-ke+Gt),It=ie*-ke;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(ie),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),wt[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const A=it+ie,x=Et+ie,H=$t-It,K=Pt+(ht-It),tt=Ft*Et/x*A,Y=D*Et/x*A;$.projectionMatrix.makePerspective(H,K,tt,Y,A,x),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function at($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,ut=$.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(ut=v.depthFar)),_.near=L.near=w.near=J,_.far=L.far=w.far=ut,(y!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,V=_.far);const ht=$.parent,wt=_.cameras;at(_,ht);for(let Tt=0;Tt<wt.length;Tt++)at(wt[Tt],ht);wt.length===2?q(_,w,L):_.projectionMatrix.copy(w.projectionMatrix),ot($,_,ht)};function ot($,J,ut){ut===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Gs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&g===null))return r},this.setFoveation=function($){r=$,d!==null&&(d.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let pt=null;function Vt($,J){if(h=J.getViewerPose(c||o),p=J,h!==null){const ut=h.views;g!==null&&(t.setRenderTargetFramebuffer(b,g.framebuffer),t.setRenderTarget(b));let ht=!1;ut.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Tt=0;Tt<ut.length;Tt++){const it=ut[Tt];let Et=null;if(g!==null)Et=g.getViewport(it);else{const D=u.getViewSubImage(d,it);Et=D.viewport,Tt===0&&(t.setRenderTargetTextures(b,D.colorTexture,d.ignoreDepthValues?void 0:D.depthStencilTexture),t.setRenderTarget(b))}let Ft=P[Tt];Ft===void 0&&(Ft=new Fe,Ft.layers.enable(Tt),Ft.viewport=new te,P[Tt]=Ft),Ft.matrix.fromArray(it.transform.matrix),Ft.matrix.decompose(Ft.position,Ft.quaternion,Ft.scale),Ft.projectionMatrix.fromArray(it.projectionMatrix),Ft.projectionMatrixInverse.copy(Ft.projectionMatrix).invert(),Ft.viewport.set(Et.x,Et.y,Et.width,Et.height),Tt===0&&(_.matrix.copy(Ft.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Ft)}const wt=s.enabledFeatures;if(wt&&wt.includes("depth-sensing")){const Tt=u.getDepthInformation(ut[0]);Tt&&Tt.isValid&&Tt.texture&&v.init(t,Tt,s.renderState)}}for(let ut=0;ut<M.length;ut++){const ht=S[ut],wt=M[ut];ht!==null&&wt!==void 0&&wt.update(ht,J,c||o)}pt&&pt($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),p=null}const Ht=new sc;Ht.setAnimationLoop(Vt),this.setAnimationLoop=function($){pt=$},this.dispose=function(){}}}const Wn=new un,Am=new oe;function Rm(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,ec(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,b,M,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?a(m,f):f.isMeshToonMaterial?(a(m,f),u(m,f)):f.isMeshPhongMaterial?(a(m,f),h(m,f)):f.isMeshStandardMaterial?(a(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,S)):f.isMeshMatcapMaterial?(a(m,f),p(m,f)):f.isMeshDepthMaterial?a(m,f):f.isMeshDistanceMaterial?(a(m,f),v(m,f)):f.isMeshNormalMaterial?a(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&l(m,f)):f.isPointsMaterial?r(m,f,b,M):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function a(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Oe&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Oe&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const b=t.get(f),M=b.envMap,S=b.envMapRotation;M&&(m.envMap.value=M,Wn.copy(S),Wn.x*=-1,Wn.y*=-1,Wn.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Wn.y*=-1,Wn.z*=-1),m.envMapRotation.value.setFromMatrix4(Am.makeRotationFromEuler(Wn)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function l(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function r(m,f,b,M){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*b,m.scale.value=M*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,b){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const b=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Cm(i,t,e,n){let s={},a={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function r(b,M){const S=M.program;n.uniformBlockBinding(b,S)}function c(b,M){let S=s[b.id];S===void 0&&(p(b),S=h(b),s[b.id]=S,b.addEventListener("dispose",m));const C=M.program;n.updateUBOMapping(b,C);const T=t.render.frame;a[b.id]!==T&&(d(b),a[b.id]=T)}function h(b){const M=u();b.__bindingPointIndex=M;const S=i.createBuffer(),C=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,C,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,S),S}function u(){for(let b=0;b<l;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){const M=s[b.id],S=b.uniforms,C=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,w=S.length;T<w;T++){const L=Array.isArray(S[T])?S[T]:[S[T]];for(let P=0,_=L.length;P<_;P++){const y=L[P];if(g(y,T,P,C)===!0){const V=y.__offset,B=Array.isArray(y.value)?y.value:[y.value];let U=0;for(let z=0;z<B.length;z++){const k=B[z],Q=v(k);typeof k=="number"||typeof k=="boolean"?(y.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,V+U,y.__data)):k.isMatrix3?(y.__data[0]=k.elements[0],y.__data[1]=k.elements[1],y.__data[2]=k.elements[2],y.__data[3]=0,y.__data[4]=k.elements[3],y.__data[5]=k.elements[4],y.__data[6]=k.elements[5],y.__data[7]=0,y.__data[8]=k.elements[6],y.__data[9]=k.elements[7],y.__data[10]=k.elements[8],y.__data[11]=0):(k.toArray(y.__data,U),U+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(b,M,S,C){const T=b.value,w=M+"_"+S;if(C[w]===void 0)return typeof T=="number"||typeof T=="boolean"?C[w]=T:C[w]=T.clone(),!0;{const L=C[w];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[w]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function p(b){const M=b.uniforms;let S=0;const C=16;for(let w=0,L=M.length;w<L;w++){const P=Array.isArray(M[w])?M[w]:[M[w]];for(let _=0,y=P.length;_<y;_++){const V=P[_],B=Array.isArray(V.value)?V.value:[V.value];for(let U=0,z=B.length;U<z;U++){const k=B[U],Q=v(k),q=S%C,at=q%Q.boundary,ot=q+at;S+=at,ot!==0&&C-ot<Q.storage&&(S+=C-ot),V.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=Q.storage}}}const T=S%C;return T>0&&(S+=C-T),b.__size=S,b.__cache={},this}function v(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function m(b){const M=b.target;M.removeEventListener("dispose",m);const S=o.indexOf(M.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete a[M.id]}function f(){for(const b in s)i.deleteBuffer(s[b]);o=[],s={},a={}}return{bind:r,update:c,dispose:f}}class Pm{constructor(t={}){const{canvas:e=_h(),context:n=null,depth:s=!0,stencil:a=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),p=new Int32Array(4);let v=null,m=null;const f=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=In,this.toneMappingExposure=1;const M=this;let S=!1,C=0,T=0,w=null,L=-1,P=null;const _=new te,y=new te;let V=null;const B=new Bt(0);let U=0,z=e.width,k=e.height,Q=1,q=null,at=null;const ot=new te(0,0,z,k),pt=new te(0,0,z,k);let Vt=!1;const Ht=new Wr;let $=!1,J=!1;const ut=new oe,ht=new oe,wt=new F,Tt=new te,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Ft(){return w===null?Q:1}let D=n;function ke(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:a,antialias:l,premultipliedAlpha:r,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ir}`),e.addEventListener("webglcontextlost",Z,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),D===null){const N="webgl2";if(D=ke(N,E),D===null)throw ke(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Gt,$t,Pt,ie,It,A,x,H,K,tt,Y,bt,rt,mt,Yt,et,gt,Lt,Dt,_t,Wt,Nt,ee,I;function ft(){Gt=new Nd(D),Gt.init(),Nt=new Mm(D,Gt),$t=new Cd(D,Gt,t,Nt),Pt=new _m(D),$t.reverseDepthBuffer&&Pt.buffers.depth.setReversed(!0),ie=new kd(D),It=new nm,A=new xm(D,Gt,Pt,It,$t,Nt,ie),x=new Ld(M),H=new Id(M),K=new Wh(D),ee=new Ad(D,K),tt=new Fd(D,K,ie,ee),Y=new zd(D,tt,K,ie),Dt=new Bd(D,$t,A),et=new Pd(It),bt=new em(M,x,H,Gt,$t,ee,et),rt=new Rm(M,It),mt=new sm,Yt=new hm(Gt),Lt=new wd(M,x,H,Pt,Y,d,r),gt=new mm(M,Y,$t),I=new Cm(D,ie,$t,Pt),_t=new Rd(D,Gt,ie),Wt=new Od(D,Gt,ie),ie.programs=bt.programs,M.capabilities=$t,M.extensions=Gt,M.properties=It,M.renderLists=mt,M.shadowMap=gt,M.state=Pt,M.info=ie}ft();const X=new wm(M,D);this.xr=X,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=Gt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Gt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(z,k,!1))},this.getSize=function(E){return E.set(z,k)},this.setSize=function(E,N,G=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=E,k=N,e.width=Math.floor(E*Q),e.height=Math.floor(N*Q),G===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(z*Q,k*Q).floor()},this.setDrawingBufferSize=function(E,N,G){z=E,k=N,Q=G,e.width=Math.floor(E*G),e.height=Math.floor(N*G),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(ot)},this.setViewport=function(E,N,G,W){E.isVector4?ot.set(E.x,E.y,E.z,E.w):ot.set(E,N,G,W),Pt.viewport(_.copy(ot).multiplyScalar(Q).round())},this.getScissor=function(E){return E.copy(pt)},this.setScissor=function(E,N,G,W){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,N,G,W),Pt.scissor(y.copy(pt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(E){Pt.setScissorTest(Vt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,N=!0,G=!0){let W=0;if(E){let O=!1;if(w!==null){const nt=w.texture.format;O=nt===Hr||nt===Vr||nt===zr}if(O){const nt=w.texture.type,ct=nt===yn||nt===Jn||nt===Zi||nt===Ai||nt===kr||nt===Br,vt=Lt.getClearColor(),xt=Lt.getClearAlpha(),At=vt.r,Ct=vt.g,St=vt.b;ct?(g[0]=At,g[1]=Ct,g[2]=St,g[3]=xt,D.clearBufferuiv(D.COLOR,0,g)):(p[0]=At,p[1]=Ct,p[2]=St,p[3]=xt,D.clearBufferiv(D.COLOR,0,p))}else W|=D.COLOR_BUFFER_BIT}N&&(W|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),G&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Z,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),mt.dispose(),Yt.dispose(),It.dispose(),x.dispose(),H.dispose(),Y.dispose(),ee.dispose(),I.dispose(),bt.dispose(),X.dispose(),X.removeEventListener("sessionstart",no),X.removeEventListener("sessionend",io),kn.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const E=ie.autoReset,N=gt.enabled,G=gt.autoUpdate,W=gt.needsUpdate,O=gt.type;ft(),ie.autoReset=E,gt.enabled=N,gt.autoUpdate=G,gt.needsUpdate=W,gt.type=O}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function qt(E){const N=E.target;N.removeEventListener("dispose",qt),pe(N)}function pe(E){De(E),It.remove(E)}function De(E){const N=It.get(E).programs;N!==void 0&&(N.forEach(function(G){bt.releaseProgram(G)}),E.isShaderMaterial&&bt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,G,W,O,nt){N===null&&(N=it);const ct=O.isMesh&&O.matrixWorld.determinant()<0,vt=Pc(E,N,G,W,O);Pt.setMaterial(W,ct);let xt=G.index,At=1;if(W.wireframe===!0){if(xt=tt.getWireframeAttribute(G),xt===void 0)return;At=2}const Ct=G.drawRange,St=G.attributes.position;let Qt=Ct.start*At,se=(Ct.start+Ct.count)*At;nt!==null&&(Qt=Math.max(Qt,nt.start*At),se=Math.min(se,(nt.start+nt.count)*At)),xt!==null?(Qt=Math.max(Qt,0),se=Math.min(se,xt.count)):St!=null&&(Qt=Math.max(Qt,0),se=Math.min(se,St.count));const ce=se-Qt;if(ce<0||ce===1/0)return;ee.setup(O,W,vt,G,xt);let Be,Zt=_t;if(xt!==null&&(Be=K.get(xt),Zt=Wt,Zt.setIndex(Be)),O.isMesh)W.wireframe===!0?(Pt.setLineWidth(W.wireframeLinewidth*Ft()),Zt.setMode(D.LINES)):Zt.setMode(D.TRIANGLES);else if(O.isLine){let yt=W.linewidth;yt===void 0&&(yt=1),Pt.setLineWidth(yt*Ft()),O.isLineSegments?Zt.setMode(D.LINES):O.isLineLoop?Zt.setMode(D.LINE_LOOP):Zt.setMode(D.LINE_STRIP)}else O.isPoints?Zt.setMode(D.POINTS):O.isSprite&&Zt.setMode(D.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(Gt.get("WEBGL_multi_draw"))Zt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const yt=O._multiDrawStarts,Ee=O._multiDrawCounts,Jt=O._multiDrawCount,Ke=xt?K.get(xt).bytesPerElement:1,ti=It.get(W).currentProgram.getUniforms();for(let ze=0;ze<Jt;ze++)ti.setValue(D,"_gl_DrawID",ze),Zt.render(yt[ze]/Ke,Ee[ze])}else if(O.isInstancedMesh)Zt.renderInstances(Qt,ce,O.count);else if(G.isInstancedBufferGeometry){const yt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Ee=Math.min(G.instanceCount,yt);Zt.renderInstances(Qt,ce,Ee)}else Zt.render(Qt,ce)};function Kt(E,N,G){E.transparent===!0&&E.side===Ge&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,as(E,N,G),E.side=Nn,E.needsUpdate=!0,as(E,N,G),E.side=Ge):as(E,N,G)}this.compile=function(E,N,G=null){G===null&&(G=E),m=Yt.get(G),m.init(N),b.push(m),G.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),E!==G&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(m.pushLight(O),O.castShadow&&m.pushShadow(O))}),m.setupLights();const W=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const nt=O.material;if(nt)if(Array.isArray(nt))for(let ct=0;ct<nt.length;ct++){const vt=nt[ct];Kt(vt,G,O),W.add(vt)}else Kt(nt,G,O),W.add(nt)}),b.pop(),m=null,W},this.compileAsync=function(E,N,G=null){const W=this.compile(E,N,G);return new Promise(O=>{function nt(){if(W.forEach(function(ct){It.get(ct).currentProgram.isReady()&&W.delete(ct)}),W.size===0){O(E);return}setTimeout(nt,10)}Gt.get("KHR_parallel_shader_compile")!==null?nt():setTimeout(nt,10)})};let Ue=null;function fn(E){Ue&&Ue(E)}function no(){kn.stop()}function io(){kn.start()}const kn=new sc;kn.setAnimationLoop(fn),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(E){Ue=E,X.setAnimationLoop(E),E===null?kn.stop():kn.start()},X.addEventListener("sessionstart",no),X.addEventListener("sessionend",io),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,N,w),m=Yt.get(E,b.length),m.init(N),b.push(m),ht.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ht.setFromProjectionMatrix(ht),J=this.localClippingEnabled,$=et.init(this.clippingPlanes,J),v=mt.get(E,f.length),v.init(),f.push(v),X.enabled===!0&&X.isPresenting===!0){const nt=M.xr.getDepthSensingMesh();nt!==null&&Js(nt,N,-1/0,M.sortObjects)}Js(E,N,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(q,at),Et=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Et&&Lt.addToRenderList(v,E),this.info.render.frame++,$===!0&&et.beginShadows();const G=m.state.shadowsArray;gt.render(G,E,N),$===!0&&et.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,O=v.transmissive;if(m.setupLights(),N.isArrayCamera){const nt=N.cameras;if(O.length>0)for(let ct=0,vt=nt.length;ct<vt;ct++){const xt=nt[ct];ao(W,O,E,xt)}Et&&Lt.render(E);for(let ct=0,vt=nt.length;ct<vt;ct++){const xt=nt[ct];so(v,E,xt,xt.viewport)}}else O.length>0&&ao(W,O,E,N),Et&&Lt.render(E),so(v,E,N);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(M,E,N),ee.resetDefaultState(),L=-1,P=null,b.pop(),b.length>0?(m=b[b.length-1],$===!0&&et.setGlobalState(M.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Js(E,N,G,W){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ht.intersectsSprite(E)){W&&Tt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const ct=Y.update(E),vt=E.material;vt.visible&&v.push(E,ct,vt,G,Tt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ht.intersectsObject(E))){const ct=Y.update(E),vt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Tt.copy(E.boundingSphere.center)):(ct.boundingSphere===null&&ct.computeBoundingSphere(),Tt.copy(ct.boundingSphere.center)),Tt.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(vt)){const xt=ct.groups;for(let At=0,Ct=xt.length;At<Ct;At++){const St=xt[At],Qt=vt[St.materialIndex];Qt&&Qt.visible&&v.push(E,ct,Qt,G,Tt.z,St)}}else vt.visible&&v.push(E,ct,vt,G,Tt.z,null)}}const nt=E.children;for(let ct=0,vt=nt.length;ct<vt;ct++)Js(nt[ct],N,G,W)}function so(E,N,G,W){const O=E.opaque,nt=E.transmissive,ct=E.transparent;m.setupLightsView(G),$===!0&&et.setGlobalState(M.clippingPlanes,G),W&&Pt.viewport(_.copy(W)),O.length>0&&ss(O,N,G),nt.length>0&&ss(nt,N,G),ct.length>0&&ss(ct,N,G),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function ao(E,N,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Ye(1,1,{generateMipmaps:!0,type:Gt.has("EXT_color_buffer_half_float")||Gt.has("EXT_color_buffer_float")?hn:yn,minFilter:jn,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:jt.workingColorSpace}));const nt=m.state.transmissionRenderTarget[W.id],ct=W.viewport||_;nt.setSize(ct.z,ct.w);const vt=M.getRenderTarget();M.setRenderTarget(nt),M.getClearColor(B),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear(),Et&&Lt.render(G);const xt=M.toneMapping;M.toneMapping=In;const At=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),$===!0&&et.setGlobalState(M.clippingPlanes,W),ss(E,G,W),A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt),Gt.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let St=0,Qt=N.length;St<Qt;St++){const se=N[St],ce=se.object,Be=se.geometry,Zt=se.material,yt=se.group;if(Zt.side===Ge&&ce.layers.test(W.layers)){const Ee=Zt.side;Zt.side=Oe,Zt.needsUpdate=!0,ro(ce,G,W,Be,Zt,yt),Zt.side=Ee,Zt.needsUpdate=!0,Ct=!0}}Ct===!0&&(A.updateMultisampleRenderTarget(nt),A.updateRenderTargetMipmap(nt))}M.setRenderTarget(vt),M.setClearColor(B,U),At!==void 0&&(W.viewport=At),M.toneMapping=xt}function ss(E,N,G){const W=N.isScene===!0?N.overrideMaterial:null;for(let O=0,nt=E.length;O<nt;O++){const ct=E[O],vt=ct.object,xt=ct.geometry,At=W===null?ct.material:W,Ct=ct.group;vt.layers.test(G.layers)&&ro(vt,N,G,xt,At,Ct)}}function ro(E,N,G,W,O,nt){E.onBeforeRender(M,N,G,W,O,nt),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(M,N,G,W,E,nt),O.transparent===!0&&O.side===Ge&&O.forceSinglePass===!1?(O.side=Oe,O.needsUpdate=!0,M.renderBufferDirect(G,N,W,O,E,nt),O.side=Nn,O.needsUpdate=!0,M.renderBufferDirect(G,N,W,O,E,nt),O.side=Ge):M.renderBufferDirect(G,N,W,O,E,nt),E.onAfterRender(M,N,G,W,O,nt)}function as(E,N,G){N.isScene!==!0&&(N=it);const W=It.get(E),O=m.state.lights,nt=m.state.shadowsArray,ct=O.state.version,vt=bt.getParameters(E,O.state,nt,N,G),xt=bt.getProgramCacheKey(vt);let At=W.programs;W.environment=E.isMeshStandardMaterial?N.environment:null,W.fog=N.fog,W.envMap=(E.isMeshStandardMaterial?H:x).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,At===void 0&&(E.addEventListener("dispose",qt),At=new Map,W.programs=At);let Ct=At.get(xt);if(Ct!==void 0){if(W.currentProgram===Ct&&W.lightsStateVersion===ct)return lo(E,vt),Ct}else vt.uniforms=bt.getUniforms(E),E.onBeforeCompile(vt,M),Ct=bt.acquireProgram(vt,xt),At.set(xt,Ct),W.uniforms=vt.uniforms;const St=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=et.uniform),lo(E,vt),W.needsLights=Dc(E),W.lightsStateVersion=ct,W.needsLights&&(St.ambientLightColor.value=O.state.ambient,St.lightProbe.value=O.state.probe,St.directionalLights.value=O.state.directional,St.directionalLightShadows.value=O.state.directionalShadow,St.spotLights.value=O.state.spot,St.spotLightShadows.value=O.state.spotShadow,St.rectAreaLights.value=O.state.rectArea,St.ltc_1.value=O.state.rectAreaLTC1,St.ltc_2.value=O.state.rectAreaLTC2,St.pointLights.value=O.state.point,St.pointLightShadows.value=O.state.pointShadow,St.hemisphereLights.value=O.state.hemi,St.directionalShadowMap.value=O.state.directionalShadowMap,St.directionalShadowMatrix.value=O.state.directionalShadowMatrix,St.spotShadowMap.value=O.state.spotShadowMap,St.spotLightMatrix.value=O.state.spotLightMatrix,St.spotLightMap.value=O.state.spotLightMap,St.pointShadowMap.value=O.state.pointShadowMap,St.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Ct,W.uniformsList=null,Ct}function oo(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Fs.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function lo(E,N){const G=It.get(E);G.outputColorSpace=N.outputColorSpace,G.batching=N.batching,G.batchingColor=N.batchingColor,G.instancing=N.instancing,G.instancingColor=N.instancingColor,G.instancingMorph=N.instancingMorph,G.skinning=N.skinning,G.morphTargets=N.morphTargets,G.morphNormals=N.morphNormals,G.morphColors=N.morphColors,G.morphTargetsCount=N.morphTargetsCount,G.numClippingPlanes=N.numClippingPlanes,G.numIntersection=N.numClipIntersection,G.vertexAlphas=N.vertexAlphas,G.vertexTangents=N.vertexTangents,G.toneMapping=N.toneMapping}function Pc(E,N,G,W,O){N.isScene!==!0&&(N=it),A.resetTextureUnits();const nt=N.fog,ct=W.isMeshStandardMaterial?N.environment:null,vt=w===null?M.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:On,xt=(W.isMeshStandardMaterial?H:x).get(W.envMap||ct),At=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Ct=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),St=!!G.morphAttributes.position,Qt=!!G.morphAttributes.normal,se=!!G.morphAttributes.color;let ce=In;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ce=M.toneMapping);const Be=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Zt=Be!==void 0?Be.length:0,yt=It.get(W),Ee=m.state.lights;if($===!0&&(J===!0||E!==P)){const qe=E===P&&W.id===L;et.setState(W,E,qe)}let Jt=!1;W.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==Ee.state.version||yt.outputColorSpace!==vt||O.isBatchedMesh&&yt.batching===!1||!O.isBatchedMesh&&yt.batching===!0||O.isBatchedMesh&&yt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&yt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&yt.instancing===!1||!O.isInstancedMesh&&yt.instancing===!0||O.isSkinnedMesh&&yt.skinning===!1||!O.isSkinnedMesh&&yt.skinning===!0||O.isInstancedMesh&&yt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&yt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&yt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&yt.instancingMorph===!1&&O.morphTexture!==null||yt.envMap!==xt||W.fog===!0&&yt.fog!==nt||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==et.numPlanes||yt.numIntersection!==et.numIntersection)||yt.vertexAlphas!==At||yt.vertexTangents!==Ct||yt.morphTargets!==St||yt.morphNormals!==Qt||yt.morphColors!==se||yt.toneMapping!==ce||yt.morphTargetsCount!==Zt)&&(Jt=!0):(Jt=!0,yt.__version=W.version);let Ke=yt.currentProgram;Jt===!0&&(Ke=as(W,N,O));let ti=!1,ze=!1,Qs=!1;const ue=Ke.getUniforms(),En=yt.uniforms;if(Pt.useProgram(Ke.program)&&(ti=!0,ze=!0,Qs=!0),W.id!==L&&(L=W.id,ze=!0),ti||P!==E){$t.reverseDepthBuffer?(ut.copy(E.projectionMatrix),xh(ut),Mh(ut),ue.setValue(D,"projectionMatrix",ut)):ue.setValue(D,"projectionMatrix",E.projectionMatrix),ue.setValue(D,"viewMatrix",E.matrixWorldInverse);const qe=ue.map.cameraPosition;qe!==void 0&&qe.setValue(D,wt.setFromMatrixPosition(E.matrixWorld)),$t.logarithmicDepthBuffer&&ue.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ue.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),P!==E&&(P=E,ze=!0,Qs=!0)}if(O.isSkinnedMesh){ue.setOptional(D,O,"bindMatrix"),ue.setOptional(D,O,"bindMatrixInverse");const qe=O.skeleton;qe&&(qe.boneTexture===null&&qe.computeBoneTexture(),ue.setValue(D,"boneTexture",qe.boneTexture,A))}O.isBatchedMesh&&(ue.setOptional(D,O,"batchingTexture"),ue.setValue(D,"batchingTexture",O._matricesTexture,A),ue.setOptional(D,O,"batchingIdTexture"),ue.setValue(D,"batchingIdTexture",O._indirectTexture,A),ue.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&ue.setValue(D,"batchingColorTexture",O._colorsTexture,A));const ta=G.morphAttributes;if((ta.position!==void 0||ta.normal!==void 0||ta.color!==void 0)&&Dt.update(O,G,Ke),(ze||yt.receiveShadow!==O.receiveShadow)&&(yt.receiveShadow=O.receiveShadow,ue.setValue(D,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(En.envMap.value=xt,En.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&N.environment!==null&&(En.envMapIntensity.value=N.environmentIntensity),ze&&(ue.setValue(D,"toneMappingExposure",M.toneMappingExposure),yt.needsLights&&Lc(En,Qs),nt&&W.fog===!0&&rt.refreshFogUniforms(En,nt),rt.refreshMaterialUniforms(En,W,Q,k,m.state.transmissionRenderTarget[E.id]),Fs.upload(D,oo(yt),En,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Fs.upload(D,oo(yt),En,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ue.setValue(D,"center",O.center),ue.setValue(D,"modelViewMatrix",O.modelViewMatrix),ue.setValue(D,"normalMatrix",O.normalMatrix),ue.setValue(D,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const qe=W.uniformsGroups;for(let ea=0,Uc=qe.length;ea<Uc;ea++){const co=qe[ea];I.update(co,Ke),I.bind(co,Ke)}}return Ke}function Lc(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Dc(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,N,G){It.get(E.texture).__webglTexture=N,It.get(E.depthTexture).__webglTexture=G;const W=It.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=G===void 0,W.__autoAllocateDepthBuffer||Gt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const G=It.get(E);G.__webglFramebuffer=N,G.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,G=0){w=E,C=N,T=G;let W=!0,O=null,nt=!1,ct=!1;if(E){const xt=It.get(E);if(xt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(D.FRAMEBUFFER,null),W=!1;else if(xt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xt.__hasExternalTextures)A.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(xt.__boundDepthTexture!==St){if(St!==null&&It.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const At=E.texture;(At.isData3DTexture||At.isDataArrayTexture||At.isCompressedArrayTexture)&&(ct=!0);const Ct=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ct[N])?O=Ct[N][G]:O=Ct[N],nt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?O=It.get(E).__webglMultisampledFramebuffer:Array.isArray(Ct)?O=Ct[G]:O=Ct,_.copy(E.viewport),y.copy(E.scissor),V=E.scissorTest}else _.copy(ot).multiplyScalar(Q).floor(),y.copy(pt).multiplyScalar(Q).floor(),V=Vt;if(Pt.bindFramebuffer(D.FRAMEBUFFER,O)&&W&&Pt.drawBuffers(E,O),Pt.viewport(_),Pt.scissor(y),Pt.setScissorTest(V),nt){const xt=It.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+N,xt.__webglTexture,G)}else if(ct){const xt=It.get(E.texture),At=N||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,xt.__webglTexture,G||0,At)}L=-1},this.readRenderTargetPixels=function(E,N,G,W,O,nt,ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){Pt.bindFramebuffer(D.FRAMEBUFFER,vt);try{const xt=E.texture,At=xt.format,Ct=xt.type;if(!$t.textureFormatReadable(At)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-W&&G>=0&&G<=E.height-O&&D.readPixels(N,G,W,O,Nt.convert(At),Nt.convert(Ct),nt)}finally{const xt=w!==null?It.get(w).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(E,N,G,W,O,nt,ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ct!==void 0&&(vt=vt[ct]),vt){const xt=E.texture,At=xt.format,Ct=xt.type;if(!$t.textureFormatReadable(At))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-W&&G>=0&&G<=E.height-O){Pt.bindFramebuffer(D.FRAMEBUFFER,vt);const St=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.bufferData(D.PIXEL_PACK_BUFFER,nt.byteLength,D.STREAM_READ),D.readPixels(N,G,W,O,Nt.convert(At),Nt.convert(Ct),0);const Qt=w!==null?It.get(w).__webglFramebuffer:null;Pt.bindFramebuffer(D.FRAMEBUFFER,Qt);const se=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await vh(D,se,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,St),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,nt),D.deleteBuffer(St),D.deleteSync(se),nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,G=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-G),O=Math.floor(E.image.width*W),nt=Math.floor(E.image.height*W),ct=N!==null?N.x:0,vt=N!==null?N.y:0;A.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ct,vt,O,nt),Pt.unbindTexture()},this.copyTextureToTexture=function(E,N,G=null,W=null,O=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],N=arguments[2],O=arguments[3]||0,G=null);let nt,ct,vt,xt,At,Ct;G!==null?(nt=G.max.x-G.min.x,ct=G.max.y-G.min.y,vt=G.min.x,xt=G.min.y):(nt=E.image.width,ct=E.image.height,vt=0,xt=0),W!==null?(At=W.x,Ct=W.y):(At=0,Ct=0);const St=Nt.convert(N.format),Qt=Nt.convert(N.type);A.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const se=D.getParameter(D.UNPACK_ROW_LENGTH),ce=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Be=D.getParameter(D.UNPACK_SKIP_PIXELS),Zt=D.getParameter(D.UNPACK_SKIP_ROWS),yt=D.getParameter(D.UNPACK_SKIP_IMAGES),Ee=E.isCompressedTexture?E.mipmaps[O]:E.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ee.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,vt),D.pixelStorei(D.UNPACK_SKIP_ROWS,xt),E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,At,Ct,nt,ct,St,Qt,Ee.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,At,Ct,Ee.width,Ee.height,St,Ee.data):D.texSubImage2D(D.TEXTURE_2D,O,At,Ct,nt,ct,St,Qt,Ee),D.pixelStorei(D.UNPACK_ROW_LENGTH,se),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Be),D.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,yt),O===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),Pt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,G=null,W=null,O=0){E.isTexture!==!0&&(Ns("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,W=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0);let nt,ct,vt,xt,At,Ct,St,Qt,se;const ce=E.isCompressedTexture?E.mipmaps[O]:E.image;G!==null?(nt=G.max.x-G.min.x,ct=G.max.y-G.min.y,vt=G.max.z-G.min.z,xt=G.min.x,At=G.min.y,Ct=G.min.z):(nt=ce.width,ct=ce.height,vt=ce.depth,xt=0,At=0,Ct=0),W!==null?(St=W.x,Qt=W.y,se=W.z):(St=0,Qt=0,se=0);const Be=Nt.convert(N.format),Zt=Nt.convert(N.type);let yt;if(N.isData3DTexture)A.setTexture3D(N,0),yt=D.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)A.setTexture2DArray(N,0),yt=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment);const Ee=D.getParameter(D.UNPACK_ROW_LENGTH),Jt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ke=D.getParameter(D.UNPACK_SKIP_PIXELS),ti=D.getParameter(D.UNPACK_SKIP_ROWS),ze=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ce.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,xt),D.pixelStorei(D.UNPACK_SKIP_ROWS,At),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ct),E.isDataTexture||E.isData3DTexture?D.texSubImage3D(yt,O,St,Qt,se,nt,ct,vt,Be,Zt,ce.data):N.isCompressedArrayTexture?D.compressedTexSubImage3D(yt,O,St,Qt,se,nt,ct,vt,Be,ce.data):D.texSubImage3D(yt,O,St,Qt,se,nt,ct,vt,Be,Zt,ce),D.pixelStorei(D.UNPACK_ROW_LENGTH,Ee),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Jt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ke),D.pixelStorei(D.UNPACK_SKIP_ROWS,ti),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ze),O===0&&N.generateMipmaps&&D.generateMipmap(yt),Pt.unbindTexture()},this.initRenderTarget=function(E){It.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Pt.unbindTexture()},this.resetState=function(){C=0,T=0,w=null,Pt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Gr?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===$s?"display-p3":"srgb"}}class hc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new hc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Lm extends de{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class uc extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const al=new oe,Cr=new jl,As=new Ys,Rs=new F;class Dm extends de{constructor(t=new We,e=new uc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,a=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(s),As.radius+=a,t.ray.intersectsSphere(As)===!1)return;al.copy(s).invert(),Cr.copy(t.ray).applyMatrix4(al);const l=a/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),g=Math.min(c.count,o.start+o.count);for(let p=d,v=g;p<v;p++){const m=c.getX(p);Rs.fromBufferAttribute(u,m),rl(Rs,m,r,s,t,e,this)}}else{const d=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let p=d,v=g;p<v;p++)Rs.fromBufferAttribute(u,p),rl(Rs,p,r,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,o=s.length;a<o;a++){const l=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=a}}}}}function rl(i,t,e,n,s,a,o){const l=Cr.distanceSqToPoint(i);if(l<e){const r=new F;Cr.closestPointToPoint(i,r),r.applyMatrix4(n);const c=s.ray.origin.distanceTo(r);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(l),point:r,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class fc extends Le{constructor(t,e,n,s,a,o,l,r,c){super(t,e,n,s,a,o,l,r,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class $r extends We{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const a=[],o=[],l=[],r=[],c=new F,h=new Rt;o.push(0,0,0),l.push(0,0,1),r.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const g=n+u/e*s;c.x=t*Math.cos(g),c.y=t*Math.sin(g),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,r.push(h.x,h.y)}for(let u=1;u<=e;u++)a.push(u,u+1,0);this.setIndex(a),this.setAttribute("position",new ye(o,3)),this.setAttribute("normal",new ye(l,3)),this.setAttribute("uv",new ye(r,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $r(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yr extends We{constructor(t=1,e=1,n=1,s=32,a=1,o=!1,l=0,r=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:a,openEnded:o,thetaStart:l,thetaLength:r};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],u=[],d=[],g=[];let p=0;const v=[],m=n/2;let f=0;b(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(d,3)),this.setAttribute("uv",new ye(g,2));function b(){const S=new F,C=new F;let T=0;const w=(e-t)/n;for(let L=0;L<=a;L++){const P=[],_=L/a,y=_*(e-t)+t;for(let V=0;V<=s;V++){const B=V/s,U=B*r+l,z=Math.sin(U),k=Math.cos(U);C.x=y*z,C.y=-_*n+m,C.z=y*k,u.push(C.x,C.y,C.z),S.set(z,w,k).normalize(),d.push(S.x,S.y,S.z),g.push(B,1-_),P.push(p++)}v.push(P)}for(let L=0;L<s;L++)for(let P=0;P<a;P++){const _=v[P][L],y=v[P+1][L],V=v[P+1][L+1],B=v[P][L+1];t>0&&(h.push(_,y,B),T+=3),e>0&&(h.push(y,V,B),T+=3)}c.addGroup(f,T,0),f+=T}function M(S){const C=p,T=new Rt,w=new F;let L=0;const P=S===!0?t:e,_=S===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,m*_,0),d.push(0,_,0),g.push(.5,.5),p++;const y=p;for(let V=0;V<=s;V++){const U=V/s*r+l,z=Math.cos(U),k=Math.sin(U);w.x=P*k,w.y=m*_,w.z=P*z,u.push(w.x,w.y,w.z),d.push(0,_,0),T.x=z*.5+.5,T.y=k*.5*_+.5,g.push(T.x,T.y),p++}for(let V=0;V<s;V++){const B=C+V,U=y+V;S===!0?h.push(U,U+1,B):h.push(U+1,U,B),L+=3}c.addGroup(f,L,S===!0?1:2),f+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Kr extends Yr{constructor(t=1,e=1,n=32,s=1,a=!1,o=0,l=Math.PI*2){super(0,t,e,n,s,a,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l}}static fromJSON(t){return new Kr(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jr extends We{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const a=[],o=[];l(s),c(n),h(),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(a.slice(),3)),this.setAttribute("uv",new ye(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(b){const M=new F,S=new F,C=new F;for(let T=0;T<e.length;T+=3)g(e[T+0],M),g(e[T+1],S),g(e[T+2],C),r(M,S,C,b)}function r(b,M,S,C){const T=C+1,w=[];for(let L=0;L<=T;L++){w[L]=[];const P=b.clone().lerp(S,L/T),_=M.clone().lerp(S,L/T),y=T-L;for(let V=0;V<=y;V++)V===0&&L===T?w[L][V]=P:w[L][V]=P.clone().lerp(_,V/y)}for(let L=0;L<T;L++)for(let P=0;P<2*(T-L)-1;P++){const _=Math.floor(P/2);P%2===0?(d(w[L][_+1]),d(w[L+1][_]),d(w[L][_])):(d(w[L][_+1]),d(w[L+1][_+1]),d(w[L+1][_]))}}function c(b){const M=new F;for(let S=0;S<a.length;S+=3)M.x=a[S+0],M.y=a[S+1],M.z=a[S+2],M.normalize().multiplyScalar(b),a[S+0]=M.x,a[S+1]=M.y,a[S+2]=M.z}function h(){const b=new F;for(let M=0;M<a.length;M+=3){b.x=a[M+0],b.y=a[M+1],b.z=a[M+2];const S=m(b)/2/Math.PI+.5,C=f(b)/Math.PI+.5;o.push(S,1-C)}p(),u()}function u(){for(let b=0;b<o.length;b+=6){const M=o[b+0],S=o[b+2],C=o[b+4],T=Math.max(M,S,C),w=Math.min(M,S,C);T>.9&&w<.1&&(M<.2&&(o[b+0]+=1),S<.2&&(o[b+2]+=1),C<.2&&(o[b+4]+=1))}}function d(b){a.push(b.x,b.y,b.z)}function g(b,M){const S=b*3;M.x=t[S+0],M.y=t[S+1],M.z=t[S+2]}function p(){const b=new F,M=new F,S=new F,C=new F,T=new Rt,w=new Rt,L=new Rt;for(let P=0,_=0;P<a.length;P+=9,_+=6){b.set(a[P+0],a[P+1],a[P+2]),M.set(a[P+3],a[P+4],a[P+5]),S.set(a[P+6],a[P+7],a[P+8]),T.set(o[_+0],o[_+1]),w.set(o[_+2],o[_+3]),L.set(o[_+4],o[_+5]),C.copy(b).add(M).add(S).divideScalar(3);const y=m(C);v(T,_+0,b,y),v(w,_+2,M,y),v(L,_+4,S,y)}}function v(b,M,S,C){C<0&&b.x===1&&(o[M]=b.x-1),S.x===0&&S.z===0&&(o[M]=C/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function f(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jr(t.vertices,t.indices,t.radius,t.details)}}class Zr extends jr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zr(t.radius,t.detail)}}class Um extends Pe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Xi extends Ui{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=Nr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class is extends de{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Im extends is{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ua=new oe,ol=new F,ll=new F;class Jr{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Rt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new Rt(1,1),this._viewportCount=1,this._viewports=[new te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ol.setFromMatrixPosition(t.matrixWorld),e.position.copy(ol),ll.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ll),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nm extends Jr{constructor(){super(new Fe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Gs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,a=t.distance||e.far;(n!==e.fov||s!==e.aspect||a!==e.far)&&(e.fov=n,e.aspect=s,e.far=a,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Fm extends is{constructor(t,e,n=0,s=Math.PI/3,a=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.distance=n,this.angle=s,this.penumbra=a,this.decay=o,this.map=null,this.shadow=new Nm}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const cl=new oe,Hi=new F,Ia=new F;class Om extends Jr{constructor(){super(new Fe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Rt(4,2),this._viewportCount=6,this._viewports=[new te(2,1,1,1),new te(0,1,1,1),new te(3,1,1,1),new te(1,1,1,1),new te(3,0,1,1),new te(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,a=t.distance||n.far;a!==n.far&&(n.far=a,n.updateProjectionMatrix()),Hi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Hi),Ia.copy(n.position),Ia.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ia),n.updateMatrixWorld(),s.makeTranslation(-Hi.x,-Hi.y,-Hi.z),cl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(cl)}}class km extends is{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Om}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Bm extends Jr{constructor(){super(new qr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zm extends is{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(de.DEFAULT_UP),this.updateMatrix(),this.target=new de,this.shadow=new Bm}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vm extends is{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Hm{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=hl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function hl(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ir);const dc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Gm=new qr(-1,1,1,-1,0,1);class Wm extends We{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}const qm=new Wm;class Qr{constructor(t){this._mesh=new ve(qm,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Gm)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class pc extends Ni{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Pe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ji.clone(t.uniforms),this.material=new Pe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Qr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class ul extends Ni{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),a=t.state;a.buffers.color.setMask(!1),a.buffers.depth.setMask(!1),a.buffers.color.setLocked(!0),a.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),a.buffers.stencil.setTest(!0),a.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),a.buffers.stencil.setClear(l),a.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),a.buffers.color.setLocked(!1),a.buffers.depth.setLocked(!1),a.buffers.color.setMask(!0),a.buffers.depth.setMask(!0),a.buffers.stencil.setLocked(!1),a.buffers.stencil.setFunc(s.EQUAL,1,4294967295),a.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.buffers.stencil.setLocked(!0)}}class Xm extends Ni{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class $m{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Rt);this._width=n.width,this._height=n.height,e=new Ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:hn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pc(dc),this.copyPass.material.blending=Sn,this.clock=new Hm}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,a=this.passes.length;s<a;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const l=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),r.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}ul!==void 0&&(o instanceof ul?n=!0:o instanceof Xm&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let a=0;a<this.passes.length;a++)this.passes[a].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ym extends Ni{constructor(t,e,n=null,s=null,a=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Bt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let a,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(a=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(a),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Km={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Bt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Pi extends Ni{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Rt(t.x,t.y):new Rt(256,256),this.clearColor=new Bt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ye(a,o,{type:hn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new Ye(a,o,{type:hn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const g=new Ye(a,o,{type:hn});g.texture.name="UnrealBloomPass.v"+u,g.texture.generateMipmaps=!1,this.renderTargetsVertical.push(g),a=Math.round(a/2),o=Math.round(o/2)}const l=Km;this.highPassUniforms=Ji.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Pe({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const r=[3,5,7,9,11];a=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Rt(1/a,1/o),a=Math.round(a/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=dc;this.copyUniforms=Ji.clone(h.uniforms),this.blendMaterial=new Pe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ji,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Bt,this.oldClearAlpha=1,this.basic=new on,this.fsQuad=new Qr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let a=0;a<this.nMips;a++)this.renderTargetsHorizontal[a].setSize(n,s),this.renderTargetsVertical[a].setSize(n,s),this.separableBlurMaterials[a].uniforms.invSize.value=new Rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this.fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[r].uniforms.direction.value=Pi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[r]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=Pi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[r]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[r];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Pe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Rt(.5,.5)},direction:{value:new Rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Pe({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Pi.BlurDirectionX=new Rt(1,0);Pi.BlurDirectionY=new Rt(0,1);const jm={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Zm extends Ni{constructor(){super();const t=jm;this.uniforms=Ji.clone(t.uniforms),this.material=new Um({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Qr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},jt.getTransfer(this._outputColorSpace)===ne&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Cl?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Pl?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ll?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Fr?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Dl?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ul&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Pr=3,Jm="the-other-me-applause",yi="saves",mc="tom-applause-settings";function to(){return{v:Pr,room:"hub_dressing",spot:"start",chapter:"Акт I · Приглашение",f:{},inv:[],notes:[],photos:[],seen:{},mask:null,time:0}}const fl={music:.7,sfx:.8,voice:.6,uiScale:1,quality:"med",textSpeed:45,reduceFlash:!1,reduceShake:!1,contrast:!1,rhythmEasy:!1,rhythmOffset:0,touch:typeof window<"u"&&"ontouchstart"in window&&matchMedia("(pointer: coarse)").matches},Se=Qm();function Qm(){try{const i=localStorage.getItem(mc);if(i)return{...fl,...JSON.parse(i)}}catch(i){console.warn("[settings] не удалось прочитать настройки, используются значения по умолчанию",i)}return{...fl}}function dl(){try{localStorage.setItem(mc,JSON.stringify(Se))}catch(i){console.warn("[settings] не удалось сохранить настройки",i)}}let Cs=null;function gc(){return Cs||(Cs=new Promise(i=>{try{const t=indexedDB.open(Jm,1);t.onupgradeneeded=()=>t.result.createObjectStore(yi),t.onsuccess=()=>i(t.result),t.onerror=()=>{console.warn("[save] IndexedDB недоступна, используется localStorage",t.error),i(null)}}catch(t){console.warn("[save] IndexedDB недоступна, используется localStorage",t),i(null)}}),Cs)}async function _c(i,t){const e=await gc();if(!e){t===null?localStorage.removeItem("tom-save-"+i):localStorage.setItem("tom-save-"+i,t);return}return new Promise((n,s)=>{const a=e.transaction(yi,"readwrite");t===null?a.objectStore(yi).delete(i):a.objectStore(yi).put(t,i),a.oncomplete=()=>n(),a.onerror=()=>s(a.error)})}async function t0(i){const t=await gc();return t?new Promise((e,n)=>{const s=t.transaction(yi).objectStore(yi).get(i);s.onsuccess=()=>e(s.result??null),s.onerror=()=>n(s.error)}):localStorage.getItem("tom-save-"+i)}const pl=["auto","slot1","slot2","slot3"],e0={auto:"Автосохранение",slot1:"Слот I",slot2:"Слот II",slot3:"Слот III"};function vc(i){if(!i||typeof i!="object"||typeof i.room!="string"||typeof i.f!="object")return null;const t={...to(),...i};return Array.isArray(t.inv)||(t.inv=[]),Array.isArray(t.notes)||(t.notes=[]),Array.isArray(t.photos)||(t.photos=[]),(!t.seen||typeof t.seen!="object")&&(t.seen={}),(i.v|0)>Pr?null:(t.v=Pr,t)}async function xc(i,t){t.savedAt=Date.now(),await _c(i,JSON.stringify(t))}async function Na(i){const t=await t0(i);if(!t)return{state:null,broken:!1};try{const e=vc(JSON.parse(t));return{state:e,broken:!e}}catch(e){return console.warn(`[save] слот ${i} повреждён`,e),{state:null,broken:!0}}}async function n0(i){await _c(i,null)}function i0(i){return JSON.stringify(i)}function s0(i){try{return vc(JSON.parse(i))}catch(t){return console.warn("[save] импорт: файл не является сохранением",t),null}}const mi={sat:1,tint:[1,1,1],vig:.35,glitch:0,bright:1,contrast:1,wave:0,bloom:.45},a0={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new F(1,1,1)},uVig:{value:.35},uGlitch:{value:0},uBright:{value:1},uContrast:{value:1},uWave:{value:0},uTime:{value:0},uFlash:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash; uniform vec3 uTint; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec2 uv=vUv;
      if(uWave>0.0){ uv.x+=sin(uv.y*18.0+uTime*2.2)*0.006*uWave; uv.y+=sin(uv.x*14.0+uTime*1.7)*0.005*uWave; }
      float sh=0.0;
      if(uGlitch>0.0){ float band=floor(uv.y*24.0); float n=h(vec2(band,floor(uTime*9.0))); if(n>1.0-uGlitch*0.35){ uv.x+=(h(vec2(band,uTime))-0.5)*0.12*uGlitch; } sh=0.004*uGlitch; }
      vec3 c=texture2D(tDiffuse,uv).rgb;
      if(sh>0.0){ c.r=texture2D(tDiffuse,uv+vec2(sh,0.0)).r; c.b=texture2D(tDiffuse,uv-vec2(sh,0.0)).b; }
      float l=dot(c,vec3(0.3,0.59,0.11)); c=mix(vec3(l),c,uSat); c*=uTint*uBright; c=(c-0.5)*uContrast+0.5;
      float d=distance(vUv,vec2(0.5)); c*=1.0-uVig*smoothstep(0.35,0.85,d);
      c+=vec3(uFlash); gl_FragColor=vec4(c,1.0); }`};class r0{constructor(t){this.canvas=t,this.scene=new Lm,this.target={...mi,tint:[...mi.tint]},this.cur={...mi,tint:[...mi.tint]},this.flash=0,this.W=640,this.H=360,this.time=0,this.r=new Pm({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=Rl,this.r.toneMapping=Fr,this.r.toneMappingExposure=1.3,this.cam=new Fe(30,16/9,1,200),this.setup(),window.addEventListener("resize",()=>this.setup())}setup(){const t=window.innerWidth,e=window.innerHeight,n=Se.quality==="low"?288:Se.quality==="med"?400:540,s=Math.max(1,Math.floor(e/n))||1;this.H=Math.max(180,Math.round(e/s)),this.W=Math.max(240,Math.round(t/s)),this.r.setPixelRatio(1),this.r.setSize(this.W,this.H,!1),this.r.shadowMap.enabled=Se.quality!=="low",this.cam.aspect=this.W/this.H,this.cam.fov=this.cam.aspect<1?46:30,this.cam.updateProjectionMatrix();const a=new Ye(this.W,this.H,{type:hn});this.composer=new $m(this.r,a),this.composer.addPass(new Ym(this.scene,this.cam)),this.bloom=new Pi(new Rt(this.W,this.H),.45,.6,.82),this.bloom.enabled=Se.quality!=="low",this.composer.addPass(this.bloom),this.composer.addPass(new Zm),this.grade=new pc(a0),this.composer.addPass(this.grade)}setGrade(t,e=!1){this.target={...mi,...t,tint:t.tint?[...t.tint]:[...mi.tint]},e&&(this.cur={...this.target,tint:[...this.target.tint]})}render(t){this.time+=t;const e=Math.min(1,t*4),n=this.cur,s=this.target;for(const o of["sat","vig","glitch","bright","contrast","wave","bloom"])n[o]+=(s[o]-n[o])*e;for(let o=0;o<3;o++)n.tint[o]+=(s.tint[o]-n.tint[o])*e;this.flash=Math.max(0,this.flash-t*2.5);const a=this.grade.uniforms;a.uSat.value=n.sat,a.uTint.value.set(n.tint[0],n.tint[1],n.tint[2]),a.uVig.value=n.vig,a.uGlitch.value=Se.reduceFlash?Math.min(n.glitch,.25):n.glitch,a.uBright.value=n.bright,a.uContrast.value=n.contrast*(Se.contrast?1.12:1),a.uWave.value=n.wave,a.uTime.value=this.time,a.uFlash.value=Se.reduceFlash?this.flash*.25:this.flash,this.bloom.strength=n.bloom,this.composer.render(t)}snapshot(t=192){this.composer.render(0);const e=document.createElement("canvas");e.width=t,e.height=Math.round(t*this.H/this.W);const n=e.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.canvas,0,0,e.width,e.height),e.toDataURL("image/jpeg",.7)}}const cn=16,o0=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function fe(i,t,e=0){let n=i*374761393+t*668265263+e*982451653|0;return n=(n^n>>13)*1274126177|0,((n^n>>16)>>>0)/4294967295}function Fa(i,t,e,n=0){const s=Math.floor(i),a=Math.floor(t),o=i-s,l=t-a,r=v=>(v%e+e)%e,c=o*o*(3-2*o),h=l*l*(3-2*l),u=fe(r(s),r(a),n),d=fe(r(s+1),r(a),n),g=fe(r(s),r(a+1),n),p=fe(r(s+1),r(a+1),n);return u+(d-u)*c+(g-u)*h+(u-d-g+p)*c*h}function ge(i,t,e,n=0){return Fa(i/e*4,t/e*4,4,n)*.55+Fa(i/e*8,t/e*8,8,n+1)*.3+Fa(i/e*16,t/e*16,16,n+2)*.15}const Mc=i=>{const t=parseInt(i,16);return[t>>16,t>>8&255,t&255]},ae=i=>i.split(" ").map(Mc),Ln={wood:ae("2e1f15 45301f 5a4029 6e5133 82623f 98764d"),floor:ae("3d2817 53371f 684628 7c5631 8f673c"),darkwood:ae("1c130e 2a1c14 38261a 453021 543b28"),velvet:ae("3a0810 560c18 721022 8e1830 a82840"),plaster:ae("8a7a68 9c8c78 ad9d88 bcae98 cabda8"),stone:ae("3c3a37 524f4a 69655e 807b72 978f84"),brick:ae("3a1c18 54261e 6e3226 86402e 9a5038"),gold:ae("5a4010 86641c b08a2c d4ae48 f0d478"),carpet:ae("4a0c14 62101c 7a1626 8e2030"),metal:ae("23262c 343841 484e59 5e6673 78818f"),black:ae("0c0a0c 141216 1c1a20 24222a"),neon:ae("0a0a18 12122a 1c1c40 2a2a5a"),asphalt:ae("16181c 1e2126 282c33 343943 444a56"),grass:ae("1f2e18 283a1e 334823 3e5629 4b6431"),dirt:ae("2b2019 35281e 403024 4b392a 574332"),paper:ae("c9b88a d6c79a e2d5ac ecdfbc f4eacb"),white:ae("b8b8c4 cacad4 dadae2 e8e8ee f4f4f8"),tileb:ae("18181c 26262c"),concrete:ae("4a4a4e 5a5a5e 6a6a6e 7a7a7e"),schoolfloor:ae("a88a5a b89a68 c8aa78 d6ba88"),pink:ae("c85a90 d870a4 e888b8 f4a4cc"),sky:ae("6a9ad8 82aee4 9cc2ee b8d6f6"),night:ae("0a0e1c 101628 182036 222c48"),green:ae("24402e 2e5038 3a6244 48745a"),blue:ae("1a2440 24325a 304274 3e548e")},Yi=new Map;function bc(i,t=!0){const e=new fc(i);return e.magFilter=Ce,e.minFilter=Ce,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=ks),e.colorSpace=$e,e}const l0={floor:{size:64,ramp:"floor",fn:(i,t,e)=>{const n=Math.floor(t/8),s=n*23%32,a=(i+s)%32;return t%8===0||a===0?.05:.35+ge(i*3,t+n*40,e,n)*.55+fe(Math.floor((i+s)/32),n)*.2}},parquet:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(i/16),s=Math.floor(t/16),a=(n+s)%2,o=a?i%16:t%16,l=a?t%4:i%4;return o===0||l===0?.1:.4+ge(a?i:t*3,a?t*3:i,e,3)*.5+a*.08}},wood:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(t/8);return t%8===0?.05:.3+ge(i*2,t+n*30,e,n+50)*.6}},darkwood:{size:32,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+ge(i+n*30,t*2,e,n+60)*.6}},stage:{size:64,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+ge(i+n*30,t*3,e,n)*.6}},woodwall:{size:32,ramp:"darkwood",fn:(i,t,e)=>i%16===0||t%32===31?.02:i%16===1?.9:.35+ge(i*2,t,e,5)*.5},velvet:{size:32,ramp:"velvet",fn:(i,t)=>.5+Math.sin(i/32*Math.PI*6)*.42+fe(i,t)*.08},plaster:{size:64,ramp:"plaster",fn:(i,t,e)=>.3+ge(i,t,e,7)*.6},wallpaper:{size:32,ramp:"velvet",dither:.1,fn:(i,t)=>{const e=i%16-8,n=(t+Math.floor(i/16)%2*8)%16-8,s=Math.abs(e)+Math.abs(n);return s<3?.75:s<5?.15:.35+fe(i,t)*.1}},wallgreen:{size:32,ramp:"green",dither:.1,fn:(i,t)=>{const e=i%16-8,n=t%16-8,s=Math.abs(e)+Math.abs(n);return i%16===0?.1:s<3?.85:.4+fe(i,t)*.15}},brick:{size:32,ramp:"brick",fn:(i,t,e)=>{const n=Math.floor(t/8),s=(i+n%2*8)%16;return t%8===0||s===0?[.3,Ln.stone]:.3+fe(Math.floor((i+n%2*8)/16),n)*.45+ge(i,t,e,2)*.25}},stone:{size:32,ramp:"stone",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?.02:.3+fe(Math.floor((i+n%2*9)/18),n,4)*.4+ge(i,t,e,9)*.3}},gold:{size:16,ramp:"gold",fn:(i,t)=>.5+Math.sin((i+t)/16*Math.PI*2)*.35+fe(i,t)*.15},carpet:{size:32,ramp:"carpet",dither:.4,fn:(i,t)=>Math.min(i%32,31-i%32)<2?[.7,Ln.gold]:.4+fe(i,t)*.4},metal:{size:32,ramp:"metal",fn:(i,t,e)=>i%32===0||t%32===0?.05:(i%32===3||i%32===28)&&(t%32===3||t%32===28)?.95:.45+ge(i*4,t,e,11)*.35},black:{size:16,ramp:"black",fn:(i,t)=>.3+fe(i,t)*.5},neon:{size:32,ramp:"neon",dither:.05,fn:(i,t)=>i%16===0||t%16===0?[.9,[[30,220,230]]]:.3+fe(i,t)*.2},asphalt:{size:64,ramp:"asphalt",fn:(i,t,e)=>{const n=ge(i,t,e,13);return n>.62?.95:.2+n*.6}},cobble:{size:32,ramp:"asphalt",fn:(i,t)=>{const e=Math.floor(t/8),n=(i+e%2*5)%10;return t%8===0||n===0?.02:.35+fe(Math.floor((i+e%2*5)/10),e,6)*.6}},grass:{size:64,ramp:"grass",dither:.35,fn:(i,t,e)=>.2+ge(i,t,e,17)*.6+(fe(i,t)>.9?.25:0)},dirt:{size:64,ramp:"dirt",dither:.3,fn:(i,t,e)=>.2+ge(i,t,e,19)*.7},paper:{size:64,ramp:"paper",dither:.3,fn:(i,t,e)=>.35+ge(i,t,e,23)*.5+(fe(i,t)>.97?-.3:0)},paperstone:{size:32,ramp:"paper",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?[.4,Ln.wood]:.3+fe(Math.floor((i+n%2*9)/18),n,4)*.5}},white:{size:32,ramp:"white",fn:(i,t,e)=>.5+ge(i,t,e,29)*.4},gloss:{size:32,ramp:"white",dither:.1,fn:(i,t)=>i%32===0||t%32===0?.1:.75+((i+t)%32<4?.25:0)},checker:{size:32,ramp:"tileb",dither:0,fn:(i,t)=>(Math.floor(i/16)+Math.floor(t/16))%2?[.5,Ln.white]:.5},concrete:{size:64,ramp:"concrete",fn:(i,t,e)=>.3+ge(i,t,e,31)*.6},schoolfloor:{size:32,ramp:"schoolfloor",fn:(i,t,e)=>t%16===0||(i+Math.floor(t/16)*16)%32===0?.1:.45+ge(i*3,t,e,37)*.45},schoolwall:{size:32,ramp:"white",dither:.15,fn:(i,t)=>.65+fe(i,t)*.2},led:{size:16,ramp:"pink",dither:0,fn:(i,t)=>i%4===0||t%4===0?[.2,Ln.black]:.3+fe(Math.floor(i/4),Math.floor(t/4),2)*.7},sky:{size:64,ramp:"sky",dither:.4,fn:(i,t,e)=>.2+(1-t/e)*.6+ge(i,t,e,41)*.2},night:{size:64,ramp:"night",dither:.4,fn:(i,t,e)=>fe(i,t)>.992?[.9,Ln.white]:.2+t/e*.5+ge(i,t,e,43)*.2},blue:{size:32,ramp:"blue",fn:(i,t,e)=>.3+ge(i,t,e,47)*.6},mirror:{size:32,ramp:"white",dither:.2,fn:(i,t)=>{const e=(i+t*2)%32;return e<3?.95:e<14?.5:.3}}};function Sc(i,t){const e=i+(t||"");let n=Yi.get(e);if(n)return n;const s=l0[i];if(!s)return console.warn("[tex] нет текстуры",i),Sc("plaster");const a=s.size,o=document.createElement("canvas");o.width=o.height=a;const l=o.getContext("2d"),r=l.createImageData(a,a),c=t?Mc(t.replace("#","")):null;for(let h=0;h<a;h++)for(let u=0;u<a;u++){let d=s.fn(u,h,a),g=Ln[s.ramp],p;Array.isArray(d)?(p=d[0],g=d[1]):p=d,p+=(o0[(h&3)*4+(u&3)]/16-.5)*(s.dither??.22);let v=g[Math.max(0,Math.min(g.length-1,Math.floor(p*g.length)))];if(c&&g===Ln[s.ramp]){const f=(v[0]*.3+v[1]*.6+v[2]*.1)/160;v=[Math.min(255,c[0]*f),Math.min(255,c[1]*f),Math.min(255,c[2]*f)]}const m=(h*a+u)*4;r.data[m]=v[0],r.data[m+1]=v[1],r.data[m+2]=v[2],r.data[m+3]=255}return l.putImageData(r,0,0),n=bc(o),n.unit=a/cn,Yi.set(e,n),n}function js(i,t,e,n){if(n&&Yi.has(n))return Yi.get(n);const s=document.createElement("canvas");s.width=i,s.height=t;const a=s.getContext("2d");a.imageSmoothingEnabled=!1,e(a,i,t);const o=bc(s,!1);return n&&Yi.set(n,o),o}const c0='"Pixelify Sans", monospace';function Lr(i,t,e,n,s={}){const a=s.size||8;i.font=`${a}px ${s.font||c0}`,i.fillStyle=s.col||"#111",i.textAlign=s.align||"left",i.textBaseline="top";const o=[];for(const l of t.split(`
`)){if(!s.w){o.push(l);continue}let r="";for(const c of l.split(" ")){const h=r?r+" "+c:c;i.measureText(h).width>s.w&&r?(o.push(r),r=c):r=h}o.push(r)}return o.forEach((l,r)=>i.fillText(l,e,n+r*(s.lh||a+2))),o.length*(s.lh||a+2)}const R=(i,t,e,n,s,a)=>{i.fillStyle=a,i.fillRect(t,e,n,s)};function h0(i,t="",e={}){const n=e.w||40,s=e.h||56;return js(n,s,a=>{R(a,0,0,n,s,e.frame||"#3a2a14"),R(a,1,1,n-2,s-2,e.bg||"#e2d5ac"),e.face&&(R(a,n/2-7,6,14,16,e.face),R(a,n/2-9,4,18,6,"#2a1512"),R(a,n/2-9,8,3,16,"#2a1512"),R(a,n/2+6,8,3,16,"#2a1512"),R(a,n/2-6,22,12,6,"#a3122a"));const o=e.face?30:5,l=Lr(a,i,n/2,o,{size:e.size||8,col:e.fg||"#5a0c18",w:n-6,align:"center"});t&&Lr(a,t,n/2,o+l+2,{size:6,col:"#3a2a14",w:n-6,align:"center",lh:7})},"poster|"+i+t+JSON.stringify(e))}const Dr={tree:{w:48,h:72,draw:i=>{R(i,21,40,6,32,"#2c2019"),R(i,23,40,2,32,"#3a2b21");for(const[t,e,n,s,a]of[[6,8,36,30,"#1c2a16"],[2,18,44,20,"#26381b"],[10,4,26,14,"#324820"],[8,14,18,12,"#405a27"],[26,22,14,10,"#324820"]])R(i,t,e,n,s,a)}},pine:{w:40,h:80,draw:i=>{R(i,18,60,4,20,"#1e1612");for(let t=0;t<6;t++)R(i,16-t*3,6+t*10,8+t*6,12,t%2?"#16241d":"#1d3024"),R(i,17-t*3,6+t*10,3,2,"#263c2c")}},bush:{w:24,h:16,draw:i=>{R(i,2,5,20,11,"#26381b"),R(i,5,2,14,6,"#324820"),R(i,6,3,4,2,"#405a27")}},sakura:{w:48,h:72,draw:i=>{R(i,21,40,6,32,"#4a382a");for(const[t,e,n,s,a]of[[6,8,36,28,"#e888b8"],[2,18,44,18,"#f4a4cc"],[10,4,26,14,"#f8c0dc"],[8,14,12,8,"#fde0ee"],[28,24,12,8,"#d870a4"]])R(i,t,e,n,s,a)}},lamp:{w:12,h:44,draw:i=>{R(i,5,10,2,32,"#2a2a2e"),R(i,2,42,8,2,"#2a2a2e"),R(i,1,2,10,9,"#f4d890"),R(i,2,1,8,1,"#c8a850"),R(i,3,4,6,5,"#fff4c8")}},streetlamp:{w:14,h:64,draw:i=>{R(i,6,10,2,54,"#1a1a1e"),R(i,3,62,8,2,"#1a1a1e"),R(i,2,2,10,9,"#f0f0d8"),R(i,1,0,12,2,"#1a1a1e")}},chair:{w:14,h:22,draw:i=>{R(i,2,0,10,12,"#721022"),R(i,1,0,1,22,"#86641c"),R(i,12,0,1,22,"#86641c"),R(i,1,12,12,3,"#8e1830"),R(i,3,2,8,8,"#8e1830")}},plant:{w:16,h:28,draw:i=>{R(i,4,20,8,8,"#7a4a2a"),R(i,7,8,2,12,"#2e5038"),R(i,2,4,5,10,"#3a6244"),R(i,9,2,5,12,"#48745a"),R(i,5,0,4,8,"#3a6244")}},bust:{w:16,h:30,draw:i=>{R(i,2,20,12,10,"#69655e"),R(i,1,19,14,2,"#807b72"),R(i,4,4,8,10,"#cabda8"),R(i,3,14,10,5,"#bcae98"),R(i,4,2,8,3,"#ad9d88"),R(i,6,8,1,1,"#555"),R(i,9,8,1,1,"#555"),R(i,6,11,4,1,"#8a7a68")}},bustfun:{w:16,h:30,draw:i=>{Dr.bust.draw(i),R(i,5,7,3,3,"#fff"),R(i,9,7,3,3,"#fff"),R(i,6,8,1,1,"#000"),R(i,10,8,1,1,"#000"),R(i,5,11,6,1,"#a22"),R(i,6,12,4,1,"#a22"),R(i,3,0,10,3,"#e84a6f"),R(i,6,-1,4,2,"#f2c230")}},masks:{w:30,h:14,draw:i=>{for(const[t,e,n]of[[0,"#f2c230",0],[10,"#6a8ad0",1],[20,"#d86a8a",2]])R(i,t+1,1,8,11,e),R(i,t+2,0,6,1,e),R(i,t+2,12,6,1,e),R(i,t+2,4,2,2,"#111"),R(i,t+6,4,2,2,"#111"),n===0&&(R(i,t+2,8,6,1,"#111"),R(i,t+3,9,4,1,"#111")),n===1&&(R(i,t+3,8,4,1,"#111"),R(i,t+2,9,1,1,"#111"),R(i,t+7,9,1,1,"#111")),n===2&&R(i,t+3,9,4,1,"#111")}},ladder:{w:20,h:60,draw:i=>{R(i,2,0,2,60,"#5a4029"),R(i,16,0,2,60,"#5a4029");for(let t=0;t<9;t++)R(i,2,4+t*6,16,2,"#6e5133")}},bridgecut:{w:72,h:30,draw:i=>{R(i,0,8,72,5,"#5a4029");for(let t=0;t<9;t++)R(i,2+t*8,0,3,30,"#45301f");R(i,0,0,72,3,"#6e5133"),R(i,30,13,12,17,"#45301f")}},marionette:{w:16,h:30,draw:i=>{R(i,2,0,12,2,"#5a4029"),R(i,7,0,2,3,"#5a4029");for(const t of[3,8,12])R(i,t,2,1,8,"#ddd");R(i,5,8,6,6,"#e8d8c0"),R(i,5,8,3,6,"#f4ecd8"),R(i,6,10,1,1,"#111"),R(i,9,10,1,1,"#111"),R(i,5,14,6,8,"#a3122a"),R(i,5,14,3,8,"#2f7f82"),R(i,3,14,2,7,"#e8d8c0"),R(i,11,14,2,7,"#e8d8c0"),R(i,5,22,2,7,"#333"),R(i,9,22,2,7,"#333"),R(i,6,15,4,2,"#f4d060")}},bookstand:{w:16,h:28,draw:i=>{R(i,7,10,2,16,"#2a1c14"),R(i,3,26,10,2,"#2a1c14"),R(i,1,4,14,7,"#4a0c14"),R(i,2,5,5,5,"#e2d5ac"),R(i,9,5,5,5,"#e2d5ac"),R(i,7,4,2,7,"#86641c")}},candle:{w:6,h:16,draw:i=>{R(i,2,6,2,8,"#e8e0c8"),R(i,1,14,4,2,"#86641c"),R(i,2,2,2,4,"#ffd060"),R(i,2,1,1,2,"#fff4c8")}},flowerpot:{w:12,h:16,draw:i=>{R(i,2,9,8,7,"#8a4a2a"),R(i,1,8,10,2,"#9a5a3a"),R(i,5,3,2,6,"#2e5038"),R(i,3,0,6,4,"#d86a8a"),R(i,5,1,2,2,"#f2c230")}},umbrella:{w:22,h:26,draw:i=>{R(i,10,6,2,18,"#333"),R(i,8,24,3,2,"#333"),R(i,1,4,20,5,"#e84a6f"),R(i,4,1,14,3,"#f06a88"),R(i,9,0,4,1,"#f06a88");for(const t of[1,7,13,19])R(i,t,9,2,1,"#c03050")}},cake:{w:26,h:26,draw:i=>{R(i,2,14,22,10,"#f4e8d8"),R(i,2,18,22,2,"#e888b8"),R(i,4,10,18,5,"#fff8f0"),R(i,0,24,26,2,"#d4ae48");for(let t=0;t<9;t++)R(i,3+t*2+t%2,5+t%2*2,1,6,["#5fd0c8","#f2c230","#e84a6f"][t%3]),R(i,3+t*2+t%2,3+t%2*2,1,2,"#ffd060");for(let t=0;t<9;t++)R(i,4+t*2,11,1,3,["#f2c230","#e84a6f","#5fd0c8"][t%3]),R(i,4+t*2,9,1,2,"#ffd060")}},cakeout:{w:26,h:26,draw:i=>{Dr.cake.draw(i);for(let t=0;t<9;t++)R(i,3+t*2+t%2,3+t%2*2,1,2,"#888"),R(i,4+t*2,9,1,2,"#888")}},bouquet:{w:24,h:30,draw:i=>{R(i,8,16,8,12,"#e2d5ac"),R(i,10,28,4,2,"#a3122a"),R(i,9,20,6,2,"#a3122a");const t=["#e84a6f","#f2c230","#f8c0dc","#fff","#c03050","#ff9a3c"];for(let e=0;e<14;e++){const n=2+e*7%18,s=1+e*5%13;R(i,n,s,5,5,t[e%6]),R(i,n+2,s+2,1,1,"#5a4010")}R(i,4,13,3,4,"#2e5038"),R(i,17,12,3,5,"#3a6244")}},mic:{w:8,h:34,draw:i=>{R(i,3,6,2,26,"#555"),R(i,1,32,6,2,"#333"),R(i,2,0,4,6,"#888"),R(i,2,1,4,1,"#bbb")}},speaker:{w:16,h:26,draw:i=>{R(i,0,0,16,26,"#18181c"),R(i,1,1,14,24,"#26262c"),R(i,4,3,8,8,"#111"),R(i,6,5,4,4,"#444"),R(i,3,13,10,10,"#111"),R(i,6,16,4,4,"#444")}},stagelight:{w:14,h:16,draw:i=>{R(i,2,2,10,9,"#222"),R(i,4,11,6,3,"#fff4c8"),R(i,6,0,2,2,"#444"),R(i,1,5,1,3,"#555"),R(i,12,5,1,3,"#555")}},stall:{w:56,h:52,draw:i=>{R(i,2,14,2,38,"#5a4029"),R(i,52,14,2,38,"#5a4029");for(let t=0;t<7;t++)R(i,t*8,2,8,12,t%2?"#e84a6f":"#fff8f0");for(let t=0;t<7;t++)R(i,t*8+1,14,6,2,t%2?"#c03050":"#ddd");R(i,2,34,52,18,"#6e5133"),R(i,2,32,52,3,"#98764d");for(let t=0;t<5;t++)R(i,8+t*9,26,5,6,["#f2c230","#e84a6f","#5fd0c8","#f8c0dc","#ff9a3c"][t]);for(let t=0;t<6;t++)R(i,5+t*9,17,3,4,["#f2c230","#e84a6f"][t%2])}},lantern:{w:10,h:14,draw:i=>{R(i,4,0,2,2,"#333"),R(i,1,2,8,10,"#e84a6f"),R(i,3,3,4,8,"#ffd060"),R(i,2,12,6,1,"#333")}},gear:{w:14,h:14,draw:i=>{R(i,3,3,8,8,"#b08a2c"),R(i,5,0,4,14,"#b08a2c"),R(i,0,5,14,4,"#b08a2c"),R(i,5,5,4,4,"#3a2a14"),R(i,1,1,3,3,"#86641c"),R(i,10,1,3,3,"#86641c"),R(i,1,10,3,3,"#86641c"),R(i,10,10,3,3,"#86641c")}},key:{w:12,h:8,draw:i=>{R(i,0,1,5,6,"#d4ae48"),R(i,1,3,2,2,"#000"),R(i,5,3,7,2,"#d4ae48"),R(i,9,5,1,2,"#d4ae48"),R(i,11,5,1,2,"#d4ae48"),i.clearRect(1,3,2,2)}},weight:{w:14,h:14,draw:i=>{R(i,1,4,12,10,"#484e59"),R(i,3,2,8,3,"#5e6673"),R(i,5,0,4,3,"#343841"),R(i,2,5,2,8,"#78818f")}},basket:{w:18,h:16,draw:i=>{R(i,1,6,16,10,"#8a6a3a");for(let t=0;t<4;t++)R(i,1,7+t*3,16,1,"#6a4a2a");R(i,0,5,18,2,"#a88a4a"),R(i,2,0,1,6,"#f0d98a"),R(i,15,0,1,6,"#f0d98a")}},hook:{w:10,h:12,draw:i=>{R(i,3,0,4,3,"#484e59"),R(i,4,3,2,5,"#78818f"),R(i,4,8,5,2,"#78818f"),R(i,8,6,1,2,"#78818f")}},slot:{w:16,h:30,draw:i=>{R(i,0,0,16,30,"#3a1a5a"),R(i,1,1,14,6,"#ff4fa0"),R(i,2,9,12,8,"#111");for(let t=0;t<3;t++)R(i,3+t*4,10,3,6,["#f2c230","#40e0d0","#f2c230"][t]);R(i,2,19,12,2,"#40e0d0"),R(i,4,23,8,5,"#222")}},holo:{w:24,h:30,draw:i=>{i.globalAlpha=.7,R(i,0,0,24,30,"#0a3a4a");for(let t=0;t<8;t++)R(i,2,2+t*3.5,4+t*7%16,1,"#40e0d0");R(i,14,16,8,10,"#40e0d0"),i.globalAlpha=1}},typewriter:{w:16,h:10,draw:i=>{R(i,1,4,14,6,"#2a2a2e"),R(i,3,0,10,4,"#e8e8e8");for(let t=0;t<5;t++)R(i,3+t*2,6,1,1,"#aaa");for(let t=0;t<5;t++)R(i,4+t*2,8,1,1,"#aaa")}},cam:{w:12,h:10,draw:i=>{R(i,0,2,12,8,"#222"),R(i,2,0,4,2,"#333"),R(i,4,3,5,5,"#557"),R(i,5,4,3,3,"#9bd"),R(i,10,3,1,1,"#f33")}},filmcam:{w:22,h:36,draw:i=>{R(i,4,6,14,10,"#2a2a2e"),R(i,0,8,4,6,"#444"),R(i,6,0,5,6,"#3a3a40"),R(i,12,1,5,5,"#3a3a40"),R(i,10,16,2,6,"#555"),R(i,10,22,1,14,"#555"),R(i,6,22,1,14,"#555"),R(i,15,22,1,14,"#555")}},suitcase:{w:16,h:12,draw:i=>{R(i,0,2,16,10,"#6a6a6a"),R(i,6,0,4,2,"#333"),R(i,0,6,16,1,"#333"),R(i,3,5,2,3,"#bbb"),R(i,11,5,2,3,"#bbb")}},book:{w:10,h:8,draw:i=>{R(i,0,1,10,7,"#4a0c14"),R(i,1,0,8,2,"#e2d5ac"),R(i,3,3,4,2,"#d4ae48")}},wheel:{w:20,h:20,draw:i=>{R(i,2,2,16,16,"#5a4029"),R(i,6,0,8,20,"#5a4029"),R(i,0,6,20,8,"#5a4029"),R(i,5,5,10,10,"#2a1c14"),R(i,9,2,2,16,"#98764d"),R(i,2,9,16,2,"#98764d")}},hoverbike:{w:36,h:18,draw:i=>{R(i,2,8,32,6,"#26262e"),R(i,6,4,14,5,"#ff9a3c"),R(i,20,2,6,6,"#343841"),R(i,0,10,4,3,"#40e0d0"),R(i,4,15,28,2,"#40e0d0"),R(i,28,6,6,3,"#78818f")}},horse:{w:36,h:30,draw:i=>{R(i,6,10,22,10,"#f0f0f0"),R(i,24,2,8,12,"#f0f0f0"),R(i,30,4,5,5,"#e0e0e0"),R(i,8,20,3,10,"#ddd"),R(i,22,20,3,10,"#ddd"),R(i,2,10,4,10,"#e8c36a"),R(i,23,0,3,10,"#e8c36a"),R(i,31,5,1,1,"#111"),R(i,10,9,12,3,"#3a6ab0")}},spotcone:{w:4,h:4,draw:i=>R(i,0,0,4,4,"#fff")}};function u0(i){const t=Dr[i];if(!t)throw new Error("Нет реквизита: "+i);const e=js(t.w,t.h,n=>t.draw(n),"prop|"+i);return e.pw=t.w,e.ph=t.h,e}const gi="#b9794f",Oa="#c08458",le="#f0cdb0",f0="#eac4a4",ml="#d9a77e",d0=[{id:"varya",name:"Варя",color:"#5fd0c8",pitch:520,skin:gi,hair:"#5a341f",style:"bob",eyes:"#5b3a1e",h:31,build:"thin",top:"#2f7f82",bottom:"#33293f",trim:"#e8c36a",shoes:"#1c1620",brows:"soft",role:"Режиссёрка",bio:"Завтра ей восемнадцать. Умеет собрать людей вместе — и очень не любит, когда что-то идёт не по плану."},{id:"alla",name:"Алла Ева",color:"#ff5d6c",pitch:500,skin:gi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#a3122a",bottom:"#8a0f24",skirt:"long",trim:"#e8c36a",shoes:"#3a0a12",acc:["earrings","mole"],brows:"arch",lips:"#b3122e",shadow:"#6b2a55",role:"Прима",bio:"Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много."},{id:"kukolnik",name:"Кукольник",color:"#d8b56a",pitch:180,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:38,build:"mid",top:"#111",bottom:"#111",role:"Художественный руководитель",bio:"Его никто не видел. Он оставляет письма, пометки на полях и распоряжения — всегда вовремя."},{id:"polina",name:"Полина",color:"#c9a7ff",pitch:610,skin:le,hair:"#8c6a45",style:"long",bangs:!0,eyes:"#6b7f9a",h:32,build:"thin",top:"#8f7fc4",bottom:"#3b4a6b",shoes:"#eeeeee",brows:"soft",role:"Подруга",bio:"Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают."},{id:"ruben",name:"Рубен",color:"#ffb057",pitch:240,skin:Oa,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:40,build:"strong",top:"#26262e",bottom:"#2d3440",trim:"#ff9a3c",shoes:"#111",brows:"strict",role:"Друг",bio:"Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать."},{id:"matvey",name:"Матвей",color:"#ff8fd0",pitch:400,skin:f0,hair:"#6a4326",style:"curlyShort",eyes:"#5b3a1e",h:37,build:"thin",top:"#f2c230",bottom:"#3a62c9",trim:"#e84a6f",shoes:"#e84a6f",acc:["freckles","scarf","bracelets","pins"],brows:"soft",role:"Друг",bio:"Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет."},{id:"erika",name:"Эрика",color:"#9fc3e8",pitch:430,skin:le,hair:"#6b452a",style:"ponytail",eyes:"#5b3a1e",h:34,build:"mid",top:"#8a7a5c",bottom:"#2b2f3a",shoes:"#22201f",brows:"soft",role:"Подруга",bio:"Спокойная. Сначала слушает, потом задаёт один вопрос — обычно самый неудобный."},{id:"liza",name:"Лиза",color:"#ffe27a",pitch:640,skin:le,hair:"#f0d98a",style:"fluffy",eyes:"#3f9b57",h:31,build:"thin",top:"#7ec4a4",bottom:"#f3ead8",skirt:"short",shoes:"#8a5a3a",brows:"soft",role:"Подруга",bio:"Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит — кем."},{id:"liza_long",name:"Лиза",color:"#ffe27a",pitch:640,skin:le,hair:"#f0d98a",style:"rapunzel",eyes:"#3f9b57",h:31,build:"thin",top:"#c9a0dc",bottom:"#b58ad0",skirt:"long",shoes:"#8a5a3a",brows:"soft"},{id:"angelina",name:"Ангелина",color:"#ff7ab8",pitch:470,skin:ml,hair:"#0f0d12",style:"longStyled",eyes:"#2a1a14",h:37,build:"thin",top:"#16141c",bottom:"#5a1f3d",skirt:"short",trim:"#d9d9e8",shoes:"#111",acc:["earrings"],brows:"arch",lips:"#b0405a",role:"Подруга",bio:"Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным, — и это не обсуждается."},{id:"artemiy",name:"Артемий",color:"#9ab0c8",pitch:260,skin:le,hair:"#9a7450",style:"short",eyes:"#2a1a14",h:39,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",shoes:"#111",brows:"strict",role:"Одноклассник Матвея",bio:"Выглядит так, будто сейчас сделает замечание. На деле подкармливает школьного кота."},{id:"vasilisa",name:"Василиса",color:"#ffb48a",pitch:480,skin:le,hair:"#c98a52",style:"long",eyes:"#5b6b4a",h:37,build:"thin",top:"#3d5a4a",bottom:"#2c2c34",acc:["camera"],brows:"soft",role:"Актриса труппы"},{id:"dana",name:"Дана",color:"#e8a0ff",pitch:500,skin:gi,hair:"#2a1a14",style:"long",eyes:"#5b3a1e",h:33,build:"thin",top:"#c23a6a",bottom:"#18161c",skirt:"short",trim:"#f2c230",acc:["earrings"],brows:"arch",lips:"#a8324a",role:"Актриса труппы"},{id:"nina",name:"Нина",color:"#b8c0ff",pitch:540,skin:le,hair:"#121016",style:"long",bangs:!0,eyes:"#3b2a22",h:33,build:"thin",top:"#4a4a6a",bottom:"#23232c",brows:"soft",role:"Актриса труппы"},{id:"anya",name:"Аня",color:"#ffd0a0",pitch:580,skin:le,hair:"#7a6248",style:"twin",eyes:"#6a5238",h:33,build:"mid",top:"#d88a4a",bottom:"#4a5a7a",skirt:"short",brows:"soft",role:"Актриса труппы"},{id:"olya",name:"Оля",color:"#a0e0d0",pitch:520,skin:le,hair:"#2a1e1a",style:"twin",bangs:!0,eyes:"#3b2a22",h:31,build:"mid",top:"#2f4a5a",bottom:"#2a2a33",brows:"strict",role:"Актриса труппы"},{id:"natasha",name:"Мама Наташа",color:"#ffd6c0",pitch:420,skin:le,hair:"#9a7a58",style:"bob",eyes:"#2a1a14",h:37,build:"mid",top:"#7a9ab8",bottom:"#33384a",skirt:"long",brows:"soft"},{id:"sasha",name:"Саша",color:"#c0d6e8",pitch:220,skin:le,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:39,build:"mid",top:"#4a5a4a",bottom:"#2c2c34",brows:"soft"},{id:"maxim",name:"Папа Максим",color:"#ffc070",pitch:250,skin:Oa,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:33,build:"mid",top:"#c2452d",bottom:"#2d3440",brows:"arch"},{id:"nastya",name:"Настя",color:"#d8c8e8",pitch:440,skin:le,hair:"#9a7a58",style:"long",eyes:"#5b3a1e",h:37,build:"thin",top:"#b8a8c8",bottom:"#4a4458",skirt:"long",brows:"soft"},{id:"vasya",name:"Вася",color:"#a8e0ff",pitch:620,skin:le,hair:"#6a4630",style:"bob",eyes:"#5b3a1e",h:30,build:"thin",top:"#e8884a",bottom:"#3a4a6a",brows:"soft"},{id:"sofa",name:"Софа",color:"#ffc0e0",pitch:540,skin:le,hair:"#a88a5a",style:"longStyled",eyes:"#5a6a7a",h:33,build:"thin",top:"#e8b0c8",bottom:"#f0e8e8",skirt:"short",acc:["earrings"],brows:"arch",lips:"#c84a6a",shadow:"#b86a9a"},{id:"katya",name:"Катя",color:"#ffb090",pitch:560,skin:le,hair:"#c8602a",style:"bobLong",eyes:"#5a7a5a",h:37,build:"big",top:"#6a9a7a",bottom:"#4a4a5a",brows:"soft"},{id:"owner",name:"Хозяин",color:"#b0b0b0",pitch:150,skin:"#e8e4d8",hair:"#111",style:"none",eyes:"#111",h:40,build:"strong",top:"#3a2a22",bottom:"#1c1614",acc:["maskface","hat","coat"],brows:"strict"},{id:"nol",name:"Ноль",color:"#7af0ff",pitch:560,skin:le,hair:"#40e0d0",style:"short",eyes:"#222",h:33,build:"thin",top:"#22303a",bottom:"#151a22",trim:"#40e0d0",acc:["visor"],brows:"soft"},{id:"kasseta",name:"Кассета",color:"#ff7ad0",pitch:330,skin:Oa,hair:"#ff4fa0",style:"bob",eyes:"#222",h:36,build:"mid",top:"#5a2a6a",bottom:"#1a1a22",trim:"#ff4fa0",acc:["headphones"],brows:"arch"},{id:"guard",name:"Охранник",color:"#ff5050",pitch:140,skin:"#8a94a0",hair:"#444",style:"none",eyes:"#f33",h:38,build:"strong",top:"#39424e",bottom:"#252a33",trim:"#ff3030",acc:["visor"],brows:"strict"},{id:"teacher",name:"Руководительница драмкружка",color:"#ff5d6c",pitch:500,skin:gi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#44375a",bottom:"#2a2238",skirt:"long",acc:["glasses","mole"],brows:"arch",lips:"#b3122e"},{id:"barman",name:"Сол, бармен",color:"#cccccc",pitch:200,skin:"#b8b8b8",hair:"#333",style:"short",eyes:"#222",h:38,build:"big",top:"#e8e8e8",bottom:"#222",trim:"#111",brows:"strict"},{id:"singer",name:"Мэй, певица",color:"#e8e8e8",pitch:460,skin:"#d8d8d8",hair:"#1a1a1a",style:"longStyled",eyes:"#222",h:36,build:"thin",top:"#bbbbbb",bottom:"#aaaaaa",skirt:"long",acc:["earrings"],brows:"arch",lips:"#555"},{id:"director",name:"Грей, режиссёр",color:"#b0b0b0",pitch:230,skin:"#c8c8c8",hair:"#888",style:"short",eyes:"#222",h:37,build:"thin",top:"#555",bottom:"#333",acc:["glasses","scarf"],brows:"strict"},{id:"collector",name:"Аркадий Вейс",color:"#d0d0d0",pitch:170,skin:"#cfcfcf",hair:"#ddd",style:"short",eyes:"#222",h:38,build:"big",top:"#2a2a2a",bottom:"#1c1c1c",trim:"#999",brows:"strict"},{id:"lydia",name:"Лидия Вронская",color:"#ffffff",pitch:480,skin:"#e0e0e0",hair:"#2a2a2a",style:"bob",eyes:"#222",h:34,build:"thin",top:"#777",bottom:"#444",acc:["hat"],brows:"soft",lips:"#555"},{id:"cashier",name:"Кассир",color:"#bbbbbb",pitch:300,skin:"#c0c0c0",hair:"#555",style:"short",eyes:"#222",h:35,build:"mid",top:"#444",bottom:"#333",acc:["hat"],brows:"soft"},{id:"fairy",name:"Фея-крёстная",color:"#c8a0ff",pitch:600,skin:le,hair:"#e8e0f0",style:"bun",eyes:"#6a5a9a",h:33,build:"big",top:"#b89ae0",bottom:"#9a7ac8",skirt:"long",acc:["wings","glasses"],brows:"arch"},{id:"prince",name:"Принц",color:"#8ab8ff",pitch:280,skin:le,hair:"#e0b860",style:"bob",eyes:"#3a6ab0",h:39,build:"mid",top:"#3a6ab0",bottom:"#f0f0f0",trim:"#e8c36a",acc:["crown","cape"],brows:"soft"},{id:"narrator",name:"Рассказчик",color:"#e8d8a8",pitch:190,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:30,build:"mid",top:"#000",bottom:"#000"},{id:"glyants",name:"Директор Глянц",color:"#ff9ad8",pitch:210,skin:le,hair:"#e8e8f0",style:"short",eyes:"#3a3a4a",h:38,build:"thin",top:"#f0f0f8",bottom:"#f0f0f8",trim:"#ff4fa0",acc:["glasses"],brows:"arch"},{id:"trainer",name:"Тренер Ми",color:"#a0f0c0",pitch:520,skin:ml,hair:"#222",style:"ponytail",eyes:"#222",h:34,build:"mid",top:"#30c090",bottom:"#222",brows:"strict"},{id:"stylist",name:"Ассистентка",color:"#ff5d6c",pitch:500,skin:gi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#f0f0f8",bottom:"#ff4fa0",skirt:"short",acc:["earrings","mole","visor"],brows:"arch",lips:"#b3122e"},{id:"hostess",name:"Леди Фортуна",color:"#ff5d6c",pitch:500,skin:gi,hair:"#2a1512",style:"glam",eyes:"#5b3a1e",h:31,build:"thin",top:"#e8c36a",bottom:"#c9a040",skirt:"long",acc:["earrings","mole","maskhalf"],brows:"arch",lips:"#b3122e"},{id:"student",name:"Школьник",color:"#cccccc",pitch:400,skin:le,hair:"#3a2a22",style:"short",eyes:"#333",h:34,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",brows:"soft"},{id:"student2",name:"Школьница",color:"#cccccc",pitch:560,skin:le,hair:"#5a3a2a",style:"twin",eyes:"#333",h:32,build:"thin",top:"#2c3550",bottom:"#8a2a3a",skirt:"short",trim:"#f0f0f0",brows:"soft"},{id:"dancer",name:"Трейни",color:"#cccccc",pitch:500,skin:le,hair:"#ffb0d8",style:"bob",eyes:"#333",h:33,build:"thin",top:"#f0f0f8",bottom:"#ff9ad8",skirt:"short",brows:"soft"},{id:"courtier",name:"Придворный",color:"#cccccc",pitch:300,skin:le,hair:"#e8e8e8",style:"bun",eyes:"#333",h:35,build:"mid",top:"#6a2a3a",bottom:"#3a1a22",trim:"#e8c36a",brows:"soft"}],nn={};for(const i of d0)nn[i.id]=i;function an(i,t,e){return nn[t]||(nn[t]={...nn[i],...e,id:t}),nn[t]}an("varya","varya_noir",{top:"#6a6a6a",bottom:"#2a2a2a",acc:["hat"]});an("erika","erika_noir",{top:"#9a9a8a",bottom:"#2a2a2a",acc:["hat","coat"]});an("ruben","ruben_heist",{top:"#16161c",bottom:"#1c2028",trim:"#40e0d0",acc:["visor"]});an("matvey","matvey_school",{top:"#2c3550",bottom:"#2a2a33",trim:"#f2c230",acc:["freckles","scarf","bracelets","pins"]});an("angelina","angelina_idol",{top:"#f0f0f8",bottom:"#ff9ad8",trim:"#ff4fa0"});an("angelina","angelina_own",{top:"#1a1420",bottom:"#7a1f3d",trim:"#e8c36a"});an("alla","queen",{name:"Королева",top:"#8a0f24",bottom:"#6a0a1a",trim:"#e8c36a",acc:["earrings","mole","crown","cape"]});an("varya","girl",{name:"Молодая Девушка",top:"#f3ead8",bottom:"#e8dcc0",skirt:"long",trim:"#5fd0c8"});an("varya","varya_queen",{name:"Варя",top:"#8a0f24",bottom:"#6a0a1a",skirt:"long",trim:"#e8c36a"});an("polina","polina_coat",{top:"#e8c230",bottom:"#3b4a6b"});an("varya","varya_pj",{top:"#d8c8e8",bottom:"#b8a8d0"});const Qi=32,Li=48,Ki=["idle0","idle1","walk0","walk1","walk2","walk3","arms","bow","fear","sit","point","dance1","dance2","lie"],gl=["f","b","s"],ka=[22,17,20];function re(i,t){const e=parseInt(i.slice(1),16);let n=e>>16,s=e>>8&255,a=e&255;return t<0?(n*=1+t,s*=1+t,a*=1+t*.8):(n+=(255-n)*t,s+=(255-s)*t,a+=(255-a)*t),`rgb(${n|0},${s|0},${a|0})`}function j(i,t,e,n,s,a){n<=0||s<=0||(i.fillStyle=a,i.fillRect(Math.round(t),Math.round(e),Math.round(n),Math.round(s)))}function he(i,t,e,n,s,a){j(i,t,e,n,s,a),n>=3&&(j(i,t,e,1,s,re(a,.16)),j(i,t+n-1,e,1,s,re(a,-.22))),s>=4&&j(i,t,e+s-1,n,1,re(a,-.25))}function p0(i,t,e,n,s,a){i.save(),i.translate(t,e);const o=16,l=47,r=n.h,c=n.build==="thin"?7:n.build==="mid"?8:(n.build==="strong",11),h=n.build==="thin"?2:3;let u=Math.round(r*.37),d=Math.round(r*.33);const g=9,p=n.acc||[],v=s.startsWith("walk")?parseInt(s[4]):-1;let m=s==="idle1"?1:v===1||v===3?-1:0,f=0,b="down",M=!1;(s==="arms"||s==="dance1")&&(b="up"),s==="dance2"&&(b="side",m=-1),s==="dance1"&&(m=1),s==="bow"&&(f=3,m=3,b="side"),s==="fear"&&(b="face",m=1),s==="point"&&(b="point"),s==="sit"&&(M=!0,u=Math.round(u*.45)),s==="lie"&&(i.translate(o,l-4),i.rotate(-Math.PI/2),i.translate(-o-10,-l+12));const S=l-u,C=S-d+m,T=C-g+(f?1:0),w=a==="s",L=a==="b",P=o-4+(w?1:0)+f,_=n.hair,y=re(_,-.3),V=re(_,.22),B=n.style,z={long:16,longStyled:17,glam:19,rapunzel:r-9,bob:9,bobLong:11,curlyMid:10,fluffy:7,twin:6,ponytail:6,short:4,curlyShort:5,bun:5}[B]||0,k=B==="glam"||B==="fluffy"||B==="curlyMid"||B==="rapunzel"?1:0;if(!w&&!L&&z>8&&(he(i,P-1-k,T+2,10+k*2,Math.min(z,r-2),_),(B==="glam"||B==="rapunzel")&&(j(i,P-2-k,T+8,1,z-10,y),j(i,P+9+k,T+10,1,z-12,y))),w&&z>8&&he(i,P-2-k,T+2,5+k,z,_),p.includes("cape")){const it=c+4;he(i,o-it/2+f,C+1,it,d+u-3,re(n.trim||"#a22",-.1))}p.includes("wings")&&!w&&(j(i,o-c/2-5,C,5,7,"rgba(230,220,255,0.85)"),j(i,o+c/2,C,5,7,"rgba(230,220,255,0.85)"),j(i,o-c/2-4,C+7,3,3,"rgba(210,200,245,0.8)"),j(i,o+c/2+1,C+7,3,3,"rgba(210,200,245,0.8)"));const Q=n.skirt?n.skirt==="long"?n.bottom:n.skin:n.bottom,q=n.shoes||"#222",at=w?0:1;let ot=0,pt=0,Vt=0,Ht=0;if(v===0&&(ot=-2,Vt=w?3:0,Ht=w?-2:0),v===2&&(pt=-2,Ht=w?3:0,Vt=w?-2:0),w?(he(i,o-h+Ht,S,h,u+pt-1,re(Q,-.15)),j(i,o-h+Ht,l-1+pt,h+1,1,q),he(i,o-1+Vt,S,h,u+ot-1,Q),j(i,o-1+Vt,l-1+ot,h+1,1,q)):M?(he(i,o-h-at,S,h,u,Q),he(i,o+at,S,h,u,Q),j(i,o-h-at,l-1,h,1,q),j(i,o+at,l-1,h,1,q)):(he(i,o-h-at+0,S,h,u+ot-1,Q),he(i,o+at,S,h,u+pt-1,Q),j(i,o-h-at,l-1+ot,h,1,q),j(i,o+at,l-1+pt,h,1,q)),n.skirt){const it=n.skirt==="long"?u-2:Math.round(u*.45);for(let Et=0;Et<it;Et++){const Ft=(w?c-2:c)+Math.min(3,Math.floor(Et/3)+1)*(n.skirt==="long",1);j(i,o-Ft/2+f*(1-Et/it),S-1+Et,Ft,1,Et===it-1?re(n.bottom,-.25):n.bottom)}j(i,o-c/2+f,S-1,1,it,re(n.bottom,.15))}const $=w?Math.max(5,c-3):c,J=o-$/2+f;he(i,J,C,$,d+(n.skirt?0:1),n.top),p.includes("coat")&&he(i,J-1,C,$+2,d+6,n.top),n.trim&&!L&&(j(i,o-1+f,C,w?1:2,n.skirt?2:1,n.trim),n.build==="strong"&&j(i,J+1,C+d-2,$-2,1,n.trim)),p.includes("scarf")&&(j(i,J,C,$,2,n.trim||"#e84a6f"),L||j(i,J+1,C+2,2,4,n.trim||"#e84a6f")),p.includes("pins")&&!L&&!w&&(j(i,J+$-3,C+3,1,1,"#fff"),j(i,J+$-2,C+5,1,1,"#4ae0c0")),p.includes("camera")&&!L&&(j(i,o-2+f,C+4,4,3,"#222"),j(i,o-1+f,C+5,2,1,"#8ac"),j(i,J+1,C,1,4,"#333"),j(i,J+$-2,C,1,4,"#333"));const ut=d-1,ht=v===0?1:v===2?-1:0,wt=(n.build==="strong"&&!p.includes("visor"),n.top),Tt=(it,Et,Ft)=>{Et==="up"?(he(i,it,C-ut+3,2,ut-1,wt),j(i,it,C-ut+1,2,2,n.skin)):Et==="side"?(j(i,it<o?it-3:it+1,C+1,4,2,wt),j(i,it<o?it-5:it+5,C+1,2,2,n.skin)):Et==="face"?(he(i,it,C+1,2,3,wt),j(i,it<o?it+1:it-1,C-2,2,3,n.skin)):(he(i,it,C+1+Ft,2,ut-2,wt),j(i,it,C+ut-1+Ft,2,2,n.skin),p.includes("bracelets")&&j(i,it,C+ut-2+Ft,2,1,"#4ae0c0"))};if(w?Tt(o-1+f+(v>=0?ht*2:0),b==="point"?"side":b,0):(Tt(J-2,b==="point"?"down":b,ht),Tt(J+$,b==="point"?"side":b,-ht)),j(i,P+3,T+g-1,2,2,re(n.skin,-.2)),(n.style!=="none"||n.id!=="kukolnik")&&(j(i,P+1,T,6,1,n.skin),j(i,P,T+1,8,g-3,n.skin),j(i,P+1,T+g-2,6,1,n.skin),j(i,P+7,T+2,1,g-5,re(n.skin,-.15))),!L){const it=T+4,Et=re(n.eyes,-.25);w?(j(i,P+6,it,1,2,Et),j(i,P+8,it+1,1,1,re(n.skin,-.12))):(j(i,P+1,it,2,2,"#f4efe6"),j(i,P+5,it,2,2,"#f4efe6"),j(i,P+2,it,1,2,Et),j(i,P+5,it,1,2,Et),n.brows==="strict"&&(j(i,P+1,it-1,2,1,re(n.hair,-.4)),j(i,P+5,it-1,2,1,re(n.hair,-.4))),n.lips?j(i,P+3,T+7,2,1,n.lips):s==="fear"&&j(i,P+3,T+7,2,1,"#412"),p.includes("freckles")&&(j(i,P+1,it+2,1,1,re(n.skin,-.25)),j(i,P+6,it+2,1,1,re(n.skin,-.25))),p.includes("mole")&&j(i,P+6,it+3,1,1,"#3a1a14"),p.includes("glasses")&&(j(i,P,it,8,1,"#222"),j(i,P+1,it+1,2,1,"rgba(180,220,255,0.6)"),j(i,P+5,it+1,2,1,"rgba(180,220,255,0.6)")),p.includes("visor")&&j(i,P,it,8,2,n.trim||"#40e0d0"),p.includes("maskface")&&(j(i,P,T+1,8,7,"#e8e4d8"),j(i,P+1,it,2,2,"#111"),j(i,P+5,it,2,2,"#111"),j(i,P+2,T+7,4,1,"#111"),j(i,P+1,T+6,1,1,"#111"),j(i,P+6,T+6,1,1,"#111")),p.includes("maskhalf")&&(j(i,P,it-1,8,3,"#e8c36a"),j(i,P+2,it,1,1,"#111"),j(i,P+5,it,1,1,"#111")))}if(B!=="none"){const it=B==="curlyMid"||B==="curlyShort";if(L)j(i,P+1,T-1,6,1,_),he(i,P-k,T,8+k*2,Math.max(g-2,Math.min(z,r-2)),_),z>9&&j(i,P+3,T+4,1,z-6,y);else if(w)j(i,P+1,T-1,6,1,_),j(i,P-1-k,T,6+k,Math.min(Math.max(z,4),8),_),j(i,P+5,T,3,n.bangs?3:2,_),j(i,P,T,1,5,y);else{j(i,P+1,T-1,6,1,_),j(i,P-k,T,8+k*2,n.bangs?4:2,_),j(i,P+1,T,3,1,V);const Et=Math.min(z,B==="ponytail"||B==="twin"||B==="short"||B==="bun"?4:z);j(i,P-1-k,T+1,1+k,Et,_),j(i,P+8,T+1,1+k,Et,y),!n.bangs&&(B==="bob"||B==="bobLong"||B==="longStyled"||B==="glam")&&(j(i,P,T+2,2,2,_),j(i,P+6,T+2,2,1,_)),B==="fluffy"&&(j(i,P-2,T+1,1,4,V),j(i,P+9,T+2,1,3,_),j(i,P,T-2,7,1,V),j(i,P+1,T+2,2,1,_),j(i,P+5,T+2,2,1,_))}if(it){for(let Et=0;Et<6;Et++)j(i,P-1+Et*2-Et%2,T-2+Et%2,2,2,Et%2?_:V);w||(j(i,P-2,T+2,1,2,_),j(i,P+9,T+4,1,2,_),B==="curlyMid"&&(j(i,P-2,T+6,2,2,_),j(i,P+8,T+7,2,2,y)))}B==="twin"&&(w?he(i,P-2,T+2,2,8,_):(he(i,P-3,T+2,2,8,_),he(i,P+9,T+2,2,8,_),j(i,P-2,T+2,1,1,"#e84a6f"),j(i,P+9,T+2,1,1,"#e84a6f"))),B==="ponytail"&&(w?(he(i,P-3,T+1,3,3,_),he(i,P-4,T+3,2,9,_)):L?he(i,P+3,T+2,2,12,y):j(i,P+8,T-1,2,3,_)),B==="bun"&&j(i,P+2,T-3,4,2,_),B==="rapunzel"&&!L&&(j(i,P+8,T+r-12,6,2,_),j(i,P+12,T+r-11,4,2,y)),(B==="longStyled"||B==="glam")&&j(i,P+2,T,1,2,V)}p.includes("earrings")&&!L&&!w&&(j(i,P-1,T+6,1,2,"#f4d060"),j(i,P+8,T+6,1,2,"#f4d060")),p.includes("hat")&&(j(i,P-2,T,12,1,"#2a2a2e"),he(i,P,T-3,8,3,"#3a3a40"),j(i,P,T-1,8,1,"#111")),p.includes("crown")&&(j(i,P+1,T-2,6,2,"#f4d060"),j(i,P+1,T-4,1,2,"#f4d060"),j(i,P+3,T-4,2,2,"#f4d060"),j(i,P+6,T-4,1,2,"#f4d060"),j(i,P+3,T-2,2,1,"#d02040")),p.includes("headphones")&&(j(i,P,T-2,8,1,"#222"),j(i,P-2,T+2,2,4,"#222"),j(i,P+8,T+2,2,4,"#222")),i.restore()}function m0(i,t,e){const n=i.getImageData(0,0,t,e),s=n.data,a=new Uint8ClampedArray(s),o=(l,r)=>l>=0&&r>=0&&l<t&&r<e&&a[(r*t+l)*4+3]>40;for(let l=0;l<e;l++)for(let r=0;r<t;r++){if(o(r,l))continue;const c=r%Qi,h=l%Li;if(!(c===0||c===Qi-1||h===0||h===Li-1)&&(o(r-1,l)||o(r+1,l)||o(r,l-1)||o(r,l+1))){const u=(l*t+r)*4;s[u]=ka[0],s[u+1]=ka[1],s[u+2]=ka[2],s[u+3]=255}}i.putImageData(n,0,0)}const _l=new Map;function g0(i){let t=_l.get(i);if(t)return t;const e=nn[i];if(!e)throw new Error("Нет персонажа: "+i);t=document.createElement("canvas"),t.width=Qi*Ki.length,t.height=Li*gl.length;const n=t.getContext("2d",{willReadFrequently:!0});return gl.forEach((s,a)=>Ki.forEach((o,l)=>{const r=l>=6;p0(n,l*Qi,a*Li,e,o,r&&s==="b"&&o!=="sit"&&o!=="arms"&&o!=="dance1"&&o!=="dance2"?"f":s)})),m0(n,t.width,t.height),(i==="kukolnik"||i==="narrator")&&(n.globalCompositeOperation="source-in",n.fillStyle="#0a0808",n.fillRect(0,0,t.width,t.height)),_l.set(i,t),t}const vl=new Map;let Ba=null;function _0(){return Ba||(Ba=js(32,32,i=>{const t=i.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,32,32)})),Ba}function yc(i){const t=i.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,0,.75,.66);t.needsUpdate=!0}class eo{constructor(t,e=t){this.id=e,this.x=0,this.z=0,this.y=0,this.dir="f",this.pose=null,this.moving=!1,this.t=Math.random()*3,this.target=null,this.hidden=!1,this.charId="",this.group=new vi,this.roll=0,this.alpha=1,this.float=0,this.danceBeat=0;const n=new Fn(Qi/cn,Li/cn);n.translate(0,Li/cn/2,0),yc(n),this.map=null,this.mesh=new ve(n,new Xi({alphaTest:.5,side:Ge,transparent:!1})),this.mesh.castShadow=!0,this.setChar(t),this.shadow=new ve(new Fn(1.5,.9),new on({map:_0(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.group.add(this.mesh,this.shadow)}setChar(t){if(this.charId===t)return;this.charId=t;let e=vl.get(t);e||(e=new fc(g0(t)),e.magFilter=e.minFilter=Ce,e.generateMipmaps=!1,e.colorSpace=$e,vl.set(t,e)),this.map&&this.map.dispose(),this.map=e.clone(),this.map.needsUpdate=!0,this.map.repeat.set(1/Ki.length,1/3),this.mesh.material.map=this.map,this.mesh.material.needsUpdate=!0}get def(){return nn[this.charId]}place(t,e,n){return this.x=t,this.z=e,n&&(this.dir=n),this.sync(),this}face(t,e){const n=t-this.x,s=e-this.z;this.dir=Math.abs(n)>Math.abs(s)?n>0?"r":"l":s>0?"f":"b"}walkTo(t,e,n=4){return this.target&&this.target.res(),new Promise(s=>{this.target={x:t,z:e,speed:n,res:s}})}stop(){if(this.target){const t=this.target.res;this.target=null,t()}this.moving=!1}update(t){if(this.t+=t,this.target){const e=this.target.x-this.x,n=this.target.z-this.z,s=Math.hypot(e,n),a=this.target.speed*t;if(s<=a){this.x=this.target.x,this.z=this.target.z;const o=this.target.res;this.target=null,this.moving=!1,o()}else this.x+=e/s*a,this.z+=n/s*a,this.face(this.target.x,this.target.z),this.moving=!0}this.sync()}sync(){let t=this.pose||(this.moving?"walk"+Math.floor(this.t*8)%4:"idle"+Math.floor(this.t*1.6)%2);this.pose==="dance"&&(t=Math.floor(this.danceBeat)%2?"dance1":"dance2");const e=Math.max(0,Ki.indexOf(t)),n=this.dir==="f"?0:this.dir==="b"?1:2,s=Ki.length,a=this.dir==="l";this.map.repeat.x=(a?-1:1)/s,this.map.offset.set((e+(a?1:0))/s,1-(n+1)/3),this.group.position.set(this.x,this.y+this.float,this.z),this.mesh.rotation.z=this.roll,this.group.visible=!this.hidden,this.shadow.visible=this.y+this.float<.6;const o=this.mesh.material;this.alpha<1?(o.transparent=!0,o.opacity=this.alpha,o.alphaTest=.05):o.transparent&&(o.transparent=!1,o.opacity=1,o.alphaTest=.5)}dispose(){this.map.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}class Ec{constructor(t,e){this.id=t,this.def=e,this.group=new vi,this.boxes=[],this.inters=[],this.triggers=[],this.actors=[],this.spawns={},this.masked=[],this.updaters=[],this.photos=[],this.guards=[],this.lasers=[],this.flick=[],this.named={}}actor(t){return this.actors.find(e=>e.id===t)}inter(t){return this.inters.find(e=>e.id===t)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.userData.own&&n.map.dispose(),n.dispose()}});for(const t of this.actors)t.dispose()}}class Tc{constructor(t,e){this.room=t,this.G=e}get w(){return this.room.def.w}get d(){return this.room.def.d}mat(t,e="plaster"){return t.color&&!t.tex?new Xi({color:t.color,emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1}):new Xi({map:Sc(t.tex||e,t.tint),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1})}texBox(t,e,n,s,a){const o=new Qn(t,e,n),l=this.mat(s,a);if(l.map){const r=l.map.unit||2,c=o.attributes.uv,h=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let u=0;u<6;u++)for(let d=0;d<4;d++){const g=u*4+d;c.setXY(g,c.getX(g)*h[u][0]/r,c.getY(g)*h[u][1]/r)}}return new ve(o,l)}tag(t,e,n){e.mask&&this.room.masked.push({obj:t,mask:e.mask,box:n}),e.name&&(this.room.named[e.name]=t)}floor(t="floor",e={}){const n=this.texBox(e.w||this.w,.4,e.d||this.d,{tex:t,...e});return n.position.set(e.x||0,-.2+(e.y||0),e.z||0),n.receiveShadow=!0,this.room.group.add(n),this.tag(n,e),n}walls(t="plaster",e={}){const n=e.h||5,s=this.w,a=this.d,o=.4,l=(r,c,h,u)=>{const d=this.texBox(r,n,c,{tex:t,...e});return d.position.set(h,n/2,u),d.receiveShadow=!0,this.room.group.add(d),d};if(e.n!==!1&&l(s+o*2,o,0,-a/2-o/2),e.w!==!1&&l(o,a,-s/2-o/2,0),e.e!==!1&&l(o,a,s/2+o/2,0),e.trim){const r=this.texBox(s,.5,.1,{tex:e.trim});r.position.set(0,.25,-a/2+.05),this.room.group.add(r);const c=this.texBox(s,.3,.15,{tex:e.trim});c.position.set(0,n-.15,-a/2+.07),this.room.group.add(c)}}collider(t,e,n,s){const a={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),on:!0};return this.room.boxes.push(a),a}box(t,e,n,s,a,o={}){const l=this.texBox(n,a,s,o,"wood");l.position.set(t,(o.y||0)+a/2,e),l.castShadow=o.cast!==!1,l.receiveShadow=!0,o.ry&&(l.rotation.y=o.ry),this.room.group.add(l);let r;return o.solid!==!1&&!(o.y>2.2)&&(r=this.collider(t-n/2,e-s/2,t+n/2,e+s/2),l.userData.box=r),this.tag(l,o,r),l}decal(t,e={}){const n=t.image,s=e.w||n.width/cn,a=e.h||n.height/cn,o=e.glow?new on({map:t,transparent:!0,alphaTest:.1,color:e.color||16777215}):new Xi({map:t,transparent:!0,alphaTest:.1});e.opacity!=null&&(o.opacity=e.opacity,o.alphaTest=.01);const l=new ve(new Fn(s,a),o),r=e.y??2.4;return e.wall==="w"?(l.position.set(-this.w/2+.03,r,e.at||0),l.rotation.y=Math.PI/2):e.wall==="e"?(l.position.set(this.w/2-.03,r,e.at||0),l.rotation.y=-Math.PI/2):e.flat?(l.position.set(e.x||0,e.y??.03,e.z||0),l.rotation.x=-Math.PI/2):l.position.set(e.x??e.at??0,r,e.z??-this.d/2+.03),e.ry&&(l.rotation.y=e.ry),l.receiveShadow=!e.glow,this.room.group.add(l),this.tag(l,e),l}poster(t,e,n={}){return this.decal(h0(t,e,n),n)}sprite(t,e,n,s={}){const a=typeof t=="string"?u0(t):t,o=a.image,l=s.scale||1,r=o.width/cn*l,c=o.height/cn*l,h=new Fn(r,c);h.translate(0,c/2,0),s.glow||yc(h);const u=s.glow?new on({map:a,alphaTest:.3,side:Ge,transparent:s.opacity!=null,opacity:s.opacity??1}):new Xi({map:a,alphaTest:.3,side:Ge,emissive:s.emissive||0}),d=new ve(h,u);d.position.set(e,s.y||0,n),d.castShadow=s.cast!==!1&&!s.glow,s.flipX&&(d.scale.x=-1),this.room.group.add(d);let g;if(s.solid){const p=s.solid===!0?Math.min(r,1.2)/2:s.solid;g=this.collider(e-p,n-.3,e+p,n+.3),d.userData.box=g}return this.tag(d,s,g),d}actor(t,e,n,s={}){const a=new eo(t,s.id||t);return a.place(e,n,s.dir||"f"),s.pose&&(a.pose=s.pose),a.mask=s.mask,s.hidden&&(a.hidden=!0),this.room.actors.push(a),this.room.group.add(a.group),s.mask&&this.room.masked.push({obj:a.group,mask:s.mask}),a}inter(t,e,n,s){const a={id:t,x:e,z:n,r:s.r||1.7,label:s.label,fn:s.fn,mask:s.mask,cond:s.cond,y:s.y??2.2,enabled:!0,quiet:s.quiet};if(!s.quiet){const o=new ve(new Zr(.13),new on({color:16771488}));o.position.set(e,a.y+.5,n),a.marker=o,this.room.group.add(o)}return this.room.inters.push(a),s.photo&&this.photo(t,s.photo,e,n,{cond:s.cond,mask:s.mask}),a}look(t,e,n,s,a,o={}){return this.inter(t,e,n,{label:s,fn:typeof a=="function"?a:l=>l.run(a),...o})}npc(t,e,n,s={}){const a=this.actor(t,e,n,s),o=this.collider(e-.4,n-.25,e+.4,n+.25);return a.box=o,s.mask&&this.room.masked.push({obj:new de,mask:s.mask,box:o}),s.talk&&this.inter(s.id||t,e,n+.2,{label:s.label||"Поговорить: "+nn[t].name,fn:async l=>{a.face(l.player.x,l.player.z),l.player.face(a.x,a.z),await(typeof s.talk=="function"?s.talk(l,a):l.run(s.talk))},r:1.9,y:2.6,mask:s.mask,cond:s.cond}),a}door(t,e,n){const s=n.col||"#45301f",a=n.w||2.2,o=n.h||3.4,l=js(Math.round(a*cn),Math.round(o*cn),(h,u,d)=>{h.fillStyle="#1a120e",h.fillRect(0,0,u,d),h.fillStyle=s,h.fillRect(2,2,u-4,d-2),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(5,6,u-10,d*.4),h.fillRect(5,d*.52,u-10,d*.4),h.fillStyle="rgba(255,255,255,0.12)",h.fillRect(2,2,2,d),h.fillStyle="#d4ae48",h.fillRect(u-9,d*.5,3,3),n.sign&&(h.fillStyle="#e2d5ac",h.fillRect(6,9,u-12,9),Lr(h,n.sign,u/2,9,{size:7,align:"center",col:"#3a1a14"}))},"door|"+s+a+o+(n.sign||"")),r=n.z??-this.d/2+.04,c=this.decal(l,{x:e,z:r,y:o/2,glow:!!n.glow,color:n.glow,mask:n.mask});return this.inter(t,e,r+.9,{label:n.label,mask:n.mask,y:3.2,fn:async h=>{if(n.cond&&!n.cond()){h.sfx("locked"),n.locked&&await h.run(typeof n.locked=="string"?["~: "+n.locked]:n.locked);return}if(n.fn)return n.fn(h);h.sfx("door"),await h.goto(n.to,n.spot||"start",{fade:n.fade})}}),c}spawn(t,e,n,s="f"){this.room.spawns[t]={x:e,z:n,dir:s}}ambient(t,e,n){const s=n!=null?new Im(n,t,e):new Vm(t,e);return this.room.group.add(s),s}sun(t,e,n=6,s=14,a=8){const o=new zm(t,e);o.position.set(n,s,a),o.castShadow=!0,o.shadow.mapSize.set(1024,1024);const l=Math.max(this.w,this.d)/2+4;return Object.assign(o.shadow.camera,{left:-l,right:l,top:l,bottom:-l,near:1,far:60}),o.shadow.bias=-.002,this.room.group.add(o,o.target),o}light(t,e,n,s,a,o=12,l={}){const r=new km(s,a,o,1.4);return r.position.set(t,e,n),this.room.group.add(r),l.flicker&&this.room.flick.push({l:r,base:a,s:l.flicker}),l.mask&&this.room.masked.push({obj:r,mask:l.mask}),l.name&&(this.room.named[l.name]=r),r}spot(t,e,n,s,a,o,l,r={}){const c=new Fm(o,l,r.dist||40,r.angle||.45,r.pen??.5,1.1);if(c.position.set(t,e,n),c.target.position.set(s,0,a),r.shadow!==!1&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-.003,c.shadow.camera.near=1,c.shadow.camera.far=50),this.room.group.add(c,c.target),r.cone){const h=Math.hypot(s-t,e,a-n),u=Math.tan(r.angle||.45)*h,d=new Kr(u,h,20,1,!0);d.translate(0,-h/2,0),d.rotateX(-Math.PI/2);const g=new ve(d,new on({color:o,transparent:!0,opacity:r.cone===!0?.07:r.cone,side:Ge,depthWrite:!1,blending:ji}));g.position.set(t,e,n),g.lookAt(s,0,a),g.rotateY(Math.PI),this.room.group.add(g),c.cone=g}return r.name&&(this.room.named[r.name]=c),r.mask&&this.room.masked.push({obj:c,mask:r.mask}),c}trigger(t,e,n,s,a,o=!0){const l={x0:t,z0:e,x1:n,z1:s,fn:a,once:o,done:!1,inside:!1};return this.room.triggers.push(l),l}photo(t,e,n,s,a={}){this.room.photos.push({id:t,name:e,x:n,z:s,cond:a.cond,mask:a.mask})}onUpdate(t){this.room.updaters.push(t)}particles(t,e={}){const n=e.count||(t==="rain"?500:120),s=this.w+4,a=this.d+4,o=e.top||9,l=new Float32Array(n*3),r=new Float32Array(n);for(let g=0;g<n;g++)l[g*3]=(Math.random()-.5)*s,l[g*3+1]=Math.random()*o,l[g*3+2]=(Math.random()-.5)*a,r[g]=.5+Math.random();const c=new We;c.setAttribute("position",new sn(l,3));const h={dust:16771264,rain:10139872,petals:16298192,sparks:16760928,snow:16777215,confetti:16765024,glitch:6356960}[t],u=new Dm(c,new uc({color:e.color||h,size:t==="rain"?.09:t==="dust"?.07:.14,transparent:!0,opacity:t==="dust"?.5:.8,depthWrite:!1,blending:t==="petals"||t==="snow"?Zn:ji}));this.room.group.add(u);const d={dust:.15,rain:18,petals:1.2,sparks:-1.5,snow:1,confetti:2,glitch:-3}[t];return this.onUpdate((g,p)=>{if(u.visible){for(let v=0;v<n;v++)l[v*3+1]-=d*r[v]*g,t!=="rain"&&(l[v*3]+=Math.sin(p*r[v]+v)*g*.3),l[v*3+1]<0&&(l[v*3+1]=o),l[v*3+1]>o&&(l[v*3+1]=0);c.attributes.position.needsUpdate=!0}}),e.name&&(this.room.named[e.name]=u),this.tag(u,e),u}guard(t,e,n){const s=this.actor(t,e[0][0],e[0][1],{id:n.id}),a=n.range||5,o=n.half||.5,l=new $r(a,16,-o,o*2);l.rotateX(-Math.PI/2);const r=new ve(l,new on({color:n.color||16728128,transparent:!0,opacity:.22,depthWrite:!1}));r.position.y=.05,this.room.group.add(r);const c={actor:s,path:e,i:0,speed:n.speed||2.2,range:a,half:o,cone:r,wait:0,onCatch:n.onCatch,ang:0,off:0,pause:n.pause??.8,active:!0};return this.room.guards.push(c),c}laser(t,e,n,s,a){const o=Math.hypot(n-t,s-e),l=new ve(new Qn(o,.08,.08),new on({color:a.color||16719952}));l.position.set((t+n)/2,1,(e+s)/2),l.rotation.y=-Math.atan2(s-e,n-t),this.room.group.add(l);const r=l.clone();r.position.y=1.9,l.add(r),r.position.set(0,.9,0),r.rotation.set(0,0,0);const c={mesh:l,x0:t,z0:e,x1:n,z1:s,period:a.period||3,duty:a.duty??.5,phase:a.phase||0,on:!0,onHit:a.onHit,active:!0};return this.room.lasers.push(c),c}crowd(t,e,n,s,a=1.5,o=1.6,l="b"){t.forEach((r,c)=>this.actor(r,e+c%s*a+Math.floor(c/s)%2*.5,n+Math.floor(c/s)*o,{dir:l,id:"crowd_"+c+"_"+r}))}table(t,e,n=2.4,s=1.2,a={}){const o=this.box(t,e,n,s,.15,{tex:a.tex||"wood",y:1,...a});for(const[l,r]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(t+l*(n/2-.15),e+r*(s/2-.15),.15,.15,1,{tex:"darkwood",solid:!1,mask:a.mask});return o}curtain(t,e,n,s=6,a={}){return this.box(t,e,n,.3,s,{tex:"velvet",solid:a.solid??!1,...a})}}const I0=Object.freeze(Object.defineProperty({__proto__:null,Actor:eo,Builder:Tc,Room:Ec},Symbol.toStringTag,{value:"Module"})),za="e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12",Va="e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12",xl="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .",Ml=". a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .",v0="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .",bl={theater:{bpm:92,parts:[{inst:"box",d:4,seq:za+" | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12"},{inst:"upright",d:4,seq:xl,vol:.8},{inst:"piano",d:4,seq:Ml,vol:.5},{inst:"drone",seq:"a1:96 .:96",vol:.5}]},backstage:{bpm:60,parts:[{inst:"drone",seq:"d2:40 .:24",vol:.7},{inst:"box",seq:"a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30",vol:.7},{inst:"piano",seq:".:50 d3:6 .:44 a2:6 .:21",vol:.5}]},horror:{bpm:50,parts:[{inst:"drone",seq:"c2:48 c#2:16",vol:.9},{inst:"piano",seq:"eb6:2 .:30 d6:2 .:14 f#5:2 .:53",vol:.5},{inst:"piano",seq:"c2:4 .:75",vol:.8},{inst:"box",seq:".:37 g5:1 gb5:1 f5:2 .:60",vol:.4}]},heist:{bpm:118,parts:[{inst:"drums",seq:"k.h.s.h.k.h.s.hhk.h.s.h.k.khs.h.",vol:.8},{inst:"bass",d:2,seq:"d2 d2 d3 d2 d2 d3 d2 f2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 | f2 f2 f3 f2 f2 f3 f2 e2 | c2 c2 c3 c2 c2 c3 c2 c#2"},{inst:"pluck",d:1,vol:.55,seq:"d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 | bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 | f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 | c4 e4 g4 c5 g4 e4 c4 e4 g4 c5 g4 e4 c4 e4 g4 c5"},{inst:"lead",d:2,vol:.8,seq:".:64 | a5:4 . f5 d5:4 .:4 | d5 f5 g5:4 f5:8 | a5:4 . c6 a5:4 f5:4 | g5:6 e5 c5:8"},{inst:"pad",seq:"d3+a3:16 bb2+f3:16 f3+c4:16 c3+g3:16"}]},chase:{bpm:140,parts:[{inst:"drums",seq:"k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs",vol:.9},{inst:"bass",d:1,seq:"d2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2"},{inst:"lead",d:2,vol:.8,seq:"d5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4"},{inst:"pad",seq:"d3+a3:32 bb2+f3:32"}]},school:{bpm:104,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 c3 a2 a2 f2 f2 g2 g2"},{inst:"pluck",d:2,vol:.7,seq:"e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},school_soft:{bpm:76,parts:[{inst:"piano",d:8,vol:.7,seq:"c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4"},{inst:"box",d:4,vol:.7,seq:".:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16"},{inst:"pad",seq:"c3+g3:32 f3+c4:16 g3+d4:16",vol:.8}]},noir:{bpm:96,swing:.33,parts:[{inst:"upright",d:4,seq:"d2 f2 a2 c3 | g2 bb2 d3 f3 | e2 g2 a2 c#3 | d3 a2 f2 a2 | d2 e2 f2 a2 | bb2 a2 g2 f2 | e2 bb2 a2 e2 | d2 a2 d2 ."},{inst:"drums",seq:"b..bb..bb..bb.rb",vol:.8},{inst:"piano",d:1,vol:.6,seq:".:6 f3+a3+c4+e4:2 .:8 | .:6 f3+bb3+d4:2 .:3 f3+bb3+d4:2 .:3 | .:6 g3+bb3+d4:2 .:2 g3+c#4+e4:2 .:4 | .:10 f3+a3+c4+e4:3 .:3"},{inst:"sax",d:2,vol:.8,seq:".:8 a4:6 c5 | d5:8 .:4 f5 e5 | d5:4 c5 a4 g4:8 | a4:12 .:4 | .:4 d5 f5 a5:6 g5 | f5:4 d5:4 c5 d5:6 | e5:4 g5 f5 e5:4 c#5:4 | d5:12 .:4"}]},fairy:{bpm:92,parts:[{inst:"box",d:4,seq:"c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12"},{inst:"upright",d:12,vol:.7,seq:"f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2"},{inst:"pluck",d:2,vol:.5,seq:"f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6"},{inst:"strings",vol:.6,seq:".:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12"}]},idol_agency:{bpm:128,parts:[{inst:"drums",seq:"k.h.k.h.k.h.k.h.",tag:"drums"},{inst:"drums",seq:"....c.......c...",tag:"drums",vol:.8},{inst:"bass",d:2,tag:"bass",seq:"c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1"},{inst:"pad",tag:"keys",seq:"c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16"},{inst:"lead",d:2,tag:"lead",seq:"e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8"}]},idol_own:{bpm:122,parts:[{inst:"drums",seq:"k..hs.hk.khhs.h.",tag:"drums"},{inst:"bass",d:2,tag:"bass",seq:"a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 ."},{inst:"pad",tag:"keys",seq:"a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16"},{inst:"pluck",d:1,tag:"arp",vol:.5,seq:"a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5"},{inst:"sax",d:2,tag:"lead",vol:.9,seq:"a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8"}]},diva:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"strings",d:2,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"drums",seq:"r..r..r.r..r..r.",vol:.6}]},collapse:{bpm:138,parts:[{inst:"box",d:3,seq:"e5 a5 c6 b5 g#5 a5 e5 c5 d5"},{inst:"bass",d:7,seq:"a1 d2 e2 c2"},{inst:"drums",seq:"k..k.s.k.h..s.kh",vol:.7},{inst:"drums",seq:"..h..h.h.t",vol:.5},{inst:"pad",seq:"a2+eb3:32 bb2+e3:32"},{inst:"sax",d:5,vol:.4,seq:"a4 . d5 . c#5 ."}]},dressing:{bpm:66,parts:[{inst:"box",d:4,seq:za,vol:.8},{inst:"pad",seq:"a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12",vol:.9}]},fin_overture:{bpm:108,parts:[{inst:"strings",d:4,seq:za,vol:1.2},{inst:"organ",d:4,seq:Ml,vol:.9},{inst:"upright",d:4,seq:xl},{inst:"drums",seq:"t...h...h...",vol:.5}]},fin_queen:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"voice",d:2,vol:.9,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"strings",d:16,vol:.8,seq:"a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4"},{inst:"drums",seq:"r..r..r.r..r..r.k.......s.......",vol:.6}]},fin_girl:{bpm:100,parts:[{inst:"voice",d:4,seq:Va,vol:.8},{inst:"pluck",d:2,vol:.6,seq:"a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6"},{inst:"upright",d:4,seq:v0,vol:.7},{inst:"strings",vol:.5,seq:".:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12"}]},fin_mirror:{bpm:126,parts:[{inst:"drums",seq:"k..hs..hk.k.s.hh",vol:.9},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3"},{inst:"strings",d:1,vol:.6,seq:"a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 ."},{inst:"lead",d:2,seq:"e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4"},{inst:"voice",d:16,vol:.5,seq:"a4 b4 a4 g#4 c5 b4 d5 c#5"}]},fin_reveal:{bpm:66,parts:[{inst:"box",d:4,seq:Va},{inst:"pad",seq:".:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12",vol:.9},{inst:"voice",d:12,vol:.35,seq:".:96 e4 e4 e4 f#4 f#4 e4 d4 c#4"}]},fin_bows:{bpm:120,parts:[{inst:"drums",seq:"k.h.s.h.k.k.s.hh",vol:.8},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 ."},{inst:"organ",seq:"a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16"},{inst:"lead",d:2,seq:"e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4"},{inst:"strings",d:4,vol:.8,seq:"c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5"}]},party:{bpm:96,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 e3 f2 a2 g2 b2 c3 g2"},{inst:"box",d:2,seq:"g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},morning:{bpm:60,parts:[{inst:"box",d:4,seq:Va,vol:.7},{inst:"pad",seq:"a2+e3:48 d3+a3:24 e3+b3:24",vol:.7}]}},x0={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function M0(i){const t=/^([a-g])([#b]?)(-?\d)$/.exec(i);if(!t)return console.warn("[audio] неизвестная нота",i),440;const e=x0[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)+(parseInt(t[3])+1)*12;return 440*Math.pow(2,(e-69)/12)}const Sl=new Map;function yl(i){let t=Sl.get(i);if(t)return t;const e=[];let n=0;if(i.inst==="drums"&&!i.seq.includes(" "))for(const s of i.seq.replace(/\|/g,""))s!=="."&&e.push({step:n,len:1,notes:[s]}),n++;else for(const s of i.seq.split(/\s+/)){if(!s||s==="|")continue;const[a,o]=s.split(":"),l=o?parseFloat(o):i.d||1;a!=="."&&e.push({step:n,len:l,notes:a.split("+")}),n+=l}return t={evs:e,len:n},Sl.set(i,t),t}class b0{constructor(){this.ctx=null,this.cur=null,this.timer=null,this.amb=null,this.partFilter=null,this.musicFx=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[audio] WebAudio недоступен — игра продолжит работу без звука");return}const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),this.bMusic=e.createGain(),this.bSfx=e.createGain(),this.bVoice=e.createGain(),this.duckG=e.createGain(),this.musicFx=e.createBiquadFilter(),this.musicFx.type="lowpass",this.musicFx.frequency.value=2e4,this.bMusic.connect(this.musicFx),this.musicFx.connect(this.duckG),this.duckG.connect(n),this.bSfx.connect(n),this.bVoice.connect(n);const a=(this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate)).getChannelData(0);for(let l=0;l<a.length;l++)a[l]=Math.random()*2-1;const o=e.createBuffer(2,e.sampleRate*2.2,e.sampleRate);for(let l=0;l<2;l++){const r=o.getChannelData(l);for(let c=0;c<r.length;c++)r[c]=(Math.random()*2-1)*Math.pow(1-c/r.length,2.6)}this.rev=e.createConvolver(),this.rev.buffer=o,this.revG=e.createGain(),this.revG.gain.value=.22,this.rev.connect(this.revG),this.revG.connect(n),this.applyVolumes(),this.timer=setInterval(()=>this.tick(),40)}applyVolumes(){this.ctx&&(this.bMusic.gain.value=Se.music*.5,this.bSfx.gain.value=Se.sfx*.8,this.bVoice.gain.value=Se.voice*.5)}now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3}duck(t){this.ctx&&this.duckG.gain.setTargetAtTime(t?.55:1,this.ctx.currentTime,.15)}muffle(t){this.ctx&&this.musicFx&&this.musicFx.frequency.setTargetAtTime(t,this.ctx.currentTime,.2)}stepDur(t){return 60/t.bpm/4}music(t,e={}){if(!this.ctx)return this.now();if(this.cur&&this.cur.id===t&&!e.restart)return this.cur.t0;const n=this.ctx.currentTime,s=e.fade??1.2;if(this.cur){const r=this.cur.gain;r.gain.cancelScheduledValues(n),r.gain.setValueAtTime(r.gain.value,n),r.gain.linearRampToValueAtTime(0,n+s),setTimeout(()=>r.disconnect(),s*1e3+300),this.cur=null}if(!t)return n;const a=bl[t];if(!a)return console.warn("[audio] нет трека",t),n;const o=this.ctx.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(a.vol??1,n+Math.min(s,.6)+.05),o.connect(this.bMusic);const l=n+(e.delay??.12);return this.cur={id:t,tr:a,t0:l,gain:o,next:a.parts.map(()=>0)},l}musicId(){return this.cur?this.cur.id:null}tick(){const t=this.cur;if(!t||!this.ctx)return;const e=this.ctx.currentTime+.25,n=this.stepDur(t.tr);t.tr.parts.forEach((s,a)=>{const{evs:o,len:l}=yl(s);if(!(!o.length||!l))for(;;){const r=t.next[a],c=Math.floor(r/o.length),h=o[r%o.length];if(t.tr.once&&c>0)break;let u=t.t0+(c*l+h.step)*n;if(t.tr.swing&&h.step%2===1&&(u+=n*t.tr.swing),u>e)break;if(t.next[a]++,!(u<this.ctx.currentTime-.05)&&!(this.partFilter&&!this.partFilter(t.id,s)))for(const d of h.notes)this.voice(s.inst,d,u,h.len*n,s.vol??1,t.gain)}})}env(t,e,n,s,a,o,l,r){t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(r,e+n),t.exponentialRampToValueAtTime(Math.max(r*a,1e-4),e+n+s),t.setValueAtTime(Math.max(r*a,1e-4),Math.max(e+o,e+n+s)),t.exponentialRampToValueAtTime(1e-4,Math.max(e+o,e+n+s)+l)}osc(t,e,n,s,a,o=0){const l=this.ctx.createOscillator();return l.type=t,l.frequency.setValueAtTime(e,n),l.detune.value=o,l.connect(a),l.start(n),l.stop(s),l}noise(t,e,n,s=1){const a=this.ctx.createBufferSource();return a.buffer=this.noiseBuf,a.playbackRate.value=s,a.loop=!0,a.connect(n),a.start(t,Math.random()),a.stop(t+e),a}voice(t,e,n,s,a,o){const l=this.ctx;if(!l)return;const r=l.createGain();r.connect(o);const c=u=>{const d=l.createGain();d.gain.value=u,r.connect(d),d.connect(this.rev)};if(t==="drums"){if(e==="k"){const u=l.createOscillator();u.frequency.setValueAtTime(150,n),u.frequency.exponentialRampToValueAtTime(42,n+.12),u.connect(r),r.gain.setValueAtTime(.9*a,n),r.gain.exponentialRampToValueAtTime(.001,n+.22),u.start(n),u.stop(n+.25)}else if(e==="s"||e==="c"||e==="r"){const u=l.createBiquadFilter();u.type=e==="r"?"bandpass":"highpass",u.frequency.value=e==="c"?1200:e==="r"?1800:1500,u.connect(r),this.noise(n,.2,u),r.gain.setValueAtTime((e==="r"?.25:.5)*a,n),r.gain.exponentialRampToValueAtTime(.001,n+(e==="r"?.05:.16)),e!=="r"&&c(.2)}else if(e==="h"||e==="o"||e==="b"){const u=l.createBiquadFilter();u.type="highpass",u.frequency.value=e==="b"?4e3:7e3,u.connect(r),this.noise(n,.3,u);const d=e==="o"?.22:e==="b"?.12:.04;r.gain.setValueAtTime((e==="b"?.16:.2)*a,n),r.gain.exponentialRampToValueAtTime(.001,n+d)}else if(e==="t"){const u=l.createOscillator();u.frequency.setValueAtTime(200,n),u.frequency.exponentialRampToValueAtTime(90,n+.15),u.connect(r),r.gain.setValueAtTime(.5*a,n),r.gain.exponentialRampToValueAtTime(.001,n+.2),u.start(n),u.stop(n+.22)}return}const h=M0(e);switch(t){case"piano":{this.env(r.gain,n,.005,.25,.25,s,.4,.26*a);const u=n+s+.6;this.osc("triangle",h,n,u,r);const d=l.createGain();d.gain.value=.3,d.connect(r),this.osc("sine",h*2,n,u,d),c(.35);break}case"box":{this.env(r.gain,n,.002,.5,.05,Math.min(s,.3),.9,.2*a);const u=n+1.6;this.osc("sine",h,n,u,r);const d=l.createGain();d.gain.value=.25,d.connect(r),this.osc("sine",h*3.01,n,u,d),c(.5);break}case"bass":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(900,n),u.frequency.exponentialRampToValueAtTime(220,n+.2),u.connect(r),this.env(r.gain,n,.005,.1,.7,s*.9,.08,.34*a),this.osc("sawtooth",h,n,n+s+.2,u),this.osc("square",h/2,n,n+s+.2,u,4);break}case"upright":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=600,u.connect(r),this.env(r.gain,n,.008,.25,.2,s*.8,.15,.5*a),this.osc("triangle",h,n,n+s+.3,u),this.osc("sine",h*2,n,n+s+.3,u);break}case"pad":case"strings":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=t==="pad"?900:2200,u.connect(r);const d=t==="pad"?.35:.12;this.env(r.gain,n,Math.min(d,s*.5),.2,.85,s,.5,.075*a);const g=n+s+.7;this.osc("sawtooth",h,n,g,u,-7),this.osc("sawtooth",h,n,g,u,8),c(.5);break}case"lead":case"pluck":{const u=l.createBiquadFilter();u.type="lowpass",u.Q.value=4,u.frequency.setValueAtTime(t==="pluck"?3500:2600,n),u.frequency.exponentialRampToValueAtTime(t==="pluck"?500:1400,n+.25),u.connect(r),this.env(r.gain,n,.006,.15,t==="pluck"?.15:.6,s*.95,.12,.13*a);const d=n+s+.3;this.osc(t==="pluck"?"sawtooth":"square",h,n,d,u),this.osc("sawtooth",h,n,d,u,9),c(.25);break}case"sax":case"voice":{const u=l.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(h*.985,n),u.frequency.linearRampToValueAtTime(h,n+.07);const d=l.createOscillator(),g=l.createGain();d.frequency.value=t==="sax"?5.2:5.8,g.gain.setValueAtTime(0,n),g.gain.linearRampToValueAtTime(h*.012,n+Math.min(.3,s)),d.connect(g),g.connect(u.frequency);const p=n+s+.25,v=l.createGain();v.connect(r);const m=t==="sax"?[[700,3,1],[1500,4,.5]]:[[800,6,1],[1150,7,.6],[2900,8,.25]];for(const[f,b,M]of m){const S=l.createBiquadFilter();S.type="bandpass",S.frequency.value=f,S.Q.value=b;const C=l.createGain();C.gain.value=M,u.connect(S),S.connect(C),C.connect(v)}this.env(r.gain,n,.05,.1,.85,s*.95,.18,(t==="sax"?.5:.55)*a),u.start(n),u.stop(p),d.start(n),d.stop(p),c(.4);break}case"organ":{this.env(r.gain,n,.02,.05,.9,s,.1,.07*a);const u=n+s+.2;for(const[d,g]of[[1,1],[2,.5],[3,.25],[4,.2]]){const p=l.createGain();p.gain.value=g,p.connect(r),this.osc("sine",h*d,n,u,p)}c(.3);break}case"drone":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=300,u.connect(r),this.env(r.gain,n,Math.min(1.2,s*.4),.3,.9,s,1.2,.2*a);const d=n+s+1.4;this.osc("sawtooth",h,n,d,u,-12),this.osc("sine",h,n,d,u,9),this.osc("sine",h*1.5,n,d,u,3),c(.6);break}default:console.warn("[audio] нет инструмента",t)}}sfx(t,e={}){const n=this.ctx;if(!n)return;const s=n.currentTime+.005,a=n.createGain();a.connect(this.bSfx);const o=c=>{const h=n.createGain();h.gain.value=c,a.connect(h),h.connect(this.rev)},l=(c,h,u,d,g=s,p=1,v)=>{const m=n.createBiquadFilter();m.type=c,m.frequency.setValueAtTime(h,g),v&&m.frequency.exponentialRampToValueAtTime(v,g+u),m.Q.value=p;const f=n.createGain();f.gain.setValueAtTime(d,g),f.gain.exponentialRampToValueAtTime(.001,g+u),m.connect(f),f.connect(a),this.noise(g,u+.05,m)},r=(c,h,u,d,g,p=s)=>{const v=n.createOscillator();v.type=c,v.frequency.setValueAtTime(h,p),u!==h&&v.frequency.exponentialRampToValueAtTime(u,p+d);const m=n.createGain();m.gain.setValueAtTime(g,p),m.gain.exponentialRampToValueAtTime(.001,p+d),v.connect(m),m.connect(a),v.start(p),v.stop(p+d+.02)};switch(t){case"step":{const c=e.mat||"wood";l(c==="metal"?"bandpass":"lowpass",(c==="wood"?300:c==="stone"?900:c==="metal"?2200:c==="grass"?2600:c==="carpet"?180:500)*(.9+Math.random()*.2),c==="grass"?.09:.05,c==="carpet"?.1:.16,s,c==="metal"?6:1),c==="wood"&&r("sine",110,70,.05,.1);break}case"click":r("square",900,700,.03,.08);break;case"hover":r("sine",1200,1200,.02,.03);break;case"paper":l("bandpass",3e3,.12,.2,s,.7,5e3);break;case"pencil":l("bandpass",5e3,.18,.1,s,2,3500);break;case"stamp":r("sine",140,50,.12,.6),l("lowpass",800,.06,.3);break;case"pickup":r("triangle",660,660,.08,.15),r("triangle",990,990,.14,.15,s+.07);break;case"note":r("sine",880,880,.1,.1),r("sine",1320,1320,.2,.08,s+.08),o(.4);break;case"switch":r("square",240,120,.04,.18),l("highpass",3e3,.02,.15);break;case"spot":r("square",180,90,.05,.2),r("sine",55,55,.5,.12,s+.02),o(.4);break;case"door":r("sawtooth",90,140,.35,.07),l("lowpass",400,.14,.4,s+.33),o(.3);break;case"creak":r("sawtooth",180,320,.5,.05),r("sawtooth",320,210,.4,.04,s+.45),o(.5);break;case"locked":r("square",160,160,.05,.14),r("square",160,160,.05,.14,s+.1);break;case"curtain":l("lowpass",500,1.6,.3,s,.5,1800),o(.4);break;case"whoosh":l("bandpass",400,.5,.3,s,1.2,2400);break;case"shutter":l("highpass",4e3,.03,.4),l("highpass",3e3,.05,.3,s+.08),r("square",1500,500,.03,.1);break;case"mask":r("sine",520,1040,.25,.12),r("sine",780,1560,.3,.08,s+.04),o(.6);break;case"error":r("square",200,150,.18,.14);break;case"ok":r("triangle",523,523,.1,.14),r("triangle",784,784,.2,.14,s+.09),o(.3);break;case"hit":r("triangle",e.f||880,e.f||880,.07,.12);break;case"miss":l("lowpass",300,.08,.2);break;case"knock":for(let c=0;c<(e.n||3);c++)r("sine",120,60,.18,.7,s+c*.7),l("lowpass",500,.05,.3,s+c*.7);o(.7);break;case"thunder":l("lowpass",200,2.4,.9,s,.5,60),o(.8);break;case"alarm":for(let c=0;c<3;c++)r("square",880,660,.22,.12,s+c*.26);break;case"laser":r("sawtooth",1800,300,.2,.1);break;case"emp":r("sawtooth",100,1600,.3,.12),l("bandpass",2e3,.3,.15,s,3,200);break;case"glitch":for(let c=0;c<5;c++)r("square",200+Math.random()*2e3,100+Math.random()*800,.04,.07,s+c*.045);break;case"heart":r("sine",70,40,.14,.7),r("sine",60,40,.14,.5,s+.22);break;case"laugh":{const c=e.n||6;for(let h=0;h<c;h++){const u=s+h*.17,d=(e.f||520)*(1-h*.05),g=n.createOscillator();g.type="sawtooth",g.frequency.setValueAtTime(d*1.2,u),g.frequency.exponentialRampToValueAtTime(d,u+.1);const p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=900,p.Q.value=3;const v=n.createGain();v.gain.setValueAtTime(1e-4,u),v.gain.linearRampToValueAtTime(e.vol||.3,u+.02),v.gain.exponentialRampToValueAtTime(.001,u+.13),g.connect(p),p.connect(v),v.connect(a),g.start(u),g.stop(u+.15)}o(.7);break}case"applause":{const c=e.dur||3,h=e.dens||45;for(let u=0;u<c*h;u++){const d=s+Math.random()*c,g=Math.sin(Math.PI*Math.min(1,(d-s)/c))*.12+.03;l("bandpass",1200+Math.random()*2200,.03,g,d,1.5)}o(.6);break}case"clap":l("bandpass",1500+Math.random()*800,.04,.4,s,1.5),o(.5);break;case"gasp":l("bandpass",1800,.4,.12,s,2,900),o(.5);break;case"bell":r("sine",660,660,1.2,.2),r("sine",1320,1320,.8,.08),o(.7);break;case"crash":l("lowpass",1500,.9,.7,s,.5,100),r("sine",80,30,.5,.6),o(.5);break;case"snip":l("highpass",5e3,.04,.4),l("highpass",4e3,.05,.4,s+.09);break;case"rope":l("bandpass",900,.3,.2,s,3,1800);break;case"gear":for(let c=0;c<6;c++)r("square",300,200,.03,.08,s+c*.09);break;case"candle":l("bandpass",900,.25,.25,s,1,300);break;case"firework":l("bandpass",600,.4,.12,s,2,3e3),l("lowpass",2500,.8,.5,s+.45,.5,200),o(.6);break;case"engine":r("sawtooth",70,160,.9,.16);break;default:console.warn("[audio] нет эффекта",t)}}blip(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator(),a=e.createGain();s.type="triangle",s.frequency.setValueAtTime(t*(.96+Math.random()*.1),n),a.gain.setValueAtTime(.11,n),a.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(a),a.connect(this.bVoice),s.start(n),s.stop(n+.06)}ambience(t){if(!this.ctx||this.amb&&this.amb.id===t||(this.amb&&(this.amb.stop(),this.amb=null),!t))return;const e=this.ctx,n=e.createGain();n.gain.value=0,n.connect(this.bSfx);const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const a=e.createBiquadFilter(),o={rain:["highpass",1800,.16],hall:["lowpass",180,.22],crowd:["bandpass",700,.12],wind:["bandpass",350,.14],hum:["lowpass",90,.35],city:["lowpass",500,.12]}[t];if(!o){console.warn("[audio] нет атмосферы",t);return}a.type=o[0],a.frequency.value=o[1],s.connect(a),a.connect(n),s.start(),n.gain.linearRampToValueAtTime(o[2],e.currentTime+1),this.amb={id:t,stop:()=>{n.gain.cancelScheduledValues(e.currentTime),n.gain.setTargetAtTime(0,e.currentTime,.3),setTimeout(()=>{s.stop(),n.disconnect()},1500)}}}chart(t,e,n=1){const s=bl[t],a=s.parts[e],{evs:o,len:l}=yl(a),r=this.stepDur(s),c=[];for(let h=0;h<n;h++)for(const u of o)c.push({t:(h*l+u.step)*r,len:u.len*r,note:u.notes[0]});return c}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}const Xt=new b0,Zs=new Set,wc=new Set,Un={x:0,y:0};let Ac=!1;function El(i){Ac=i}const Rc={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyE:"act",Enter:"act",Space:"act",Escape:"pause",KeyP:"pause",Digit1:"mask1",Digit2:"mask2",Digit3:"mask3",Digit0:"mask0",KeyQ:"mask0",KeyC:"camera",KeyF:"camera",Tab:"notebook",KeyN:"notebook",KeyH:"history",KeyL:"history",ControlLeft:"skip",ControlRight:"skip",ShiftLeft:"run",ShiftRight:"run",KeyJ:"laneJ",KeyK:"laneK",KeyG:"laneG"},Os=[];function xi(i){return Os.push(i),()=>{const t=Os.indexOf(i);t>=0&&Os.splice(t,1)}}function $i(i,t=""){wc.add(i);for(const e of[...Os])e(i,t)}window.addEventListener("keydown",i=>{const t=Rc[i.code];if(!t)return;const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||(!Ac&&["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(Zs.add(t),$i(t,i.code)))});window.addEventListener("keyup",i=>{const t=Rc[i.code];t&&Zs.delete(t)});window.addEventListener("blur",()=>{Zs.clear(),Un.x=Un.y=0});const Mi=i=>Zs.has(i);function Ha(){wc.clear()}function S0(){let i=(Mi("right")?1:0)-(Mi("left")?1:0)+Un.x,t=(Mi("down")?1:0)-(Mi("up")?1:0)+Un.y;const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t}}const Ga=new Map;function Cc(i,t="neutral"){const e=i+"|"+t,n=Ga.get(e);if(n)return n;const s=nn[i],a=200,o=240,l=document.createElement("canvas");l.width=a,l.height=o;const r=l.getContext("2d");if(!s)return"";if(i==="kukolnik"||i==="narrator"){if(r.fillStyle="#1a1210",r.fillRect(0,0,a,o),i==="kukolnik"){r.fillStyle="#050404",r.beginPath(),r.ellipse(100,100,44,54,0,0,7),r.fill(),r.fillRect(30,170,140,80),r.beginPath(),r.ellipse(100,190,80,40,0,0,7),r.fill(),r.fillRect(60,40,80,14),r.fillRect(74,4,52,44),r.strokeStyle="#d8b56a55",r.lineWidth=1;for(const z of[60,100,140])r.beginPath(),r.moveTo(z,0),r.lineTo(z+(z-100)*.3,60),r.stroke()}else{r.fillStyle="#e8d8a8",r.fillRect(30,60,140,120),r.fillStyle="#b89858",r.fillRect(97,60,6,120),r.fillStyle="#6a5a3a";for(let z=0;z<7;z++)r.fillRect(42,78+z*13,46,3),r.fillRect(112,78+z*13,46,3)}const U=l.toDataURL();return Ga.set(e,U),U}const c=s.acc||[],h=s.hair,u=re(h,-.3),d=re(h,.25),g=re(s.skin,-.18);re(s.skin,.12);const p=100,v=112,m=s.build==="big"?52:s.build==="strong"?50:46,f=58,b=s.style,M=b.startsWith("curly"),S=(U,z,k,Q,q)=>{r.fillStyle=q,r.beginPath(),r.ellipse(U,z,k,Q,0,0,7),r.fill()};if(r.fillStyle=h,b==="long"||b==="longStyled"||b==="glam"||b==="rapunzel"){const U=b==="glam"?84:b==="longStyled"?72:66;if(r.beginPath(),r.moveTo(p-U,240),r.quadraticCurveTo(p-U-8,80,p,44),r.quadraticCurveTo(p+U+8,80,p+U,240),r.fill(),b==="glam")for(let z=0;z<5;z++)S(p-78+z%2*8,110+z*28,16,18,z%2?h:u),S(p+78-z%2*8,110+z*28,16,18,z%2?u:h)}if(b==="bob"||b==="bobLong"){const U=b==="bob"?150:172;r.beginPath(),r.moveTo(p-62,U),r.quadraticCurveTo(p-70,60,p,46),r.quadraticCurveTo(p+70,60,p+62,U),r.fill()}if(b==="curlyMid")for(let U=0;U<16;U++){const z=Math.PI*(.95+U/15*1.1);S(p+Math.cos(z)*58,104+Math.sin(z)*56+(U<3||U>12?30:0),17,17,U%2?h:u)}if(b==="fluffy")for(let U=0;U<14;U++){const z=Math.PI*(.9+U/13*1.2);S(p+Math.cos(z)*58,100+Math.sin(z)*52,19,19,U%2?h:d)}if(b==="twin")for(const U of[-1,1])S(p+U*70,120,15,44,h),S(p+U*70,150,12,26,u),r.fillStyle="#e84a6f",r.fillRect(p+U*70-9,82,18,7);b==="ponytail"&&(S(p+52,70,18,16,h),r.fillStyle=u,r.beginPath(),r.moveTo(p+58,70),r.quadraticCurveTo(p+92,110,p+66,190),r.quadraticCurveTo(p+54,130,p+44,80),r.fill()),b==="bun"&&S(p,40,22,18,h),c.includes("wings")&&(S(30,200,34,50,"rgba(230,220,255,0.7)"),S(170,200,34,50,"rgba(230,220,255,0.7)"));const C=s.build==="strong"?96:s.build==="big"?100:s.build==="thin"?70:80;r.fillStyle=s.top,r.beginPath(),r.moveTo(p-C,240),r.quadraticCurveTo(p-C,186,p-26,180),r.lineTo(p+26,180),r.quadraticCurveTo(p+C,186,p+C,240),r.fill(),r.fillStyle=re(s.top,-.25),r.fillRect(p-C,232,C*2,8),c.includes("cape")&&(r.fillStyle=s.trim||"#a22",r.fillRect(p-C,196,30,44),r.fillRect(p+C-30,196,30,44)),r.fillStyle=g,r.fillRect(p-13,156,26,32),r.fillStyle=s.skin,r.beginPath(),r.moveTo(p-20,184),r.lineTo(p,200),r.lineTo(p+20,184),r.lineTo(p+13,176),r.lineTo(p-13,176),r.fill(),s.trim&&(r.strokeStyle=s.trim,r.lineWidth=5,r.beginPath(),r.moveTo(p-24,182),r.lineTo(p,204),r.lineTo(p+24,182),r.stroke()),c.includes("scarf")&&(r.fillStyle=s.trim||"#e84a6f",r.beginPath(),r.ellipse(p,186,40,14,0,0,7),r.fill(),r.fillRect(p+10,186,16,50)),c.includes("camera")&&(r.fillStyle="#222",r.fillRect(p-22,208,44,30),S(p,224,11,11,"#557"),S(p,224,6,6,"#9bd"),r.strokeStyle="#333",r.lineWidth=4,r.beginPath(),r.moveTo(p-30,184),r.lineTo(p-20,210),r.moveTo(p+30,184),r.lineTo(p+20,210),r.stroke()),c.includes("pins")&&(S(p+44,214,5,5,"#fff"),S(p+54,226,4,4,"#4ae0c0"),S(p+40,228,3,3,"#e84a6f")),S(p-m+2,v+4,7,11,g),S(p+m-2,v+4,7,11,g),r.fillStyle=s.skin,r.beginPath(),r.moveTo(p-m,v-20),r.quadraticCurveTo(p-m,v-f,p,v-f),r.quadraticCurveTo(p+m,v-f,p+m,v-20),r.quadraticCurveTo(p+m,v+34,p+16,v+f-4),r.quadraticCurveTo(p,v+f+4,p-16,v+f-4),r.quadraticCurveTo(p-m,v+34,p-m,v-20),r.fill(),S(p-26,v+22,10,6,"rgba(230,110,100,0.16)"),S(p+26,v+22,10,6,"rgba(230,110,100,0.16)"),c.includes("earrings")&&(S(p-m,v+22,4,8,"#f4d060"),S(p+m,v+22,4,8,"#f4d060"));const T=v+2,w=21;let L=1,P=0,_=0,y="flat",V=1;switch(t){case"smile":y="smile",L=.85;break;case"laugh":y="laugh",L=.25,P=-2;break;case"sad":y="sad",_=-5,L=.8;break;case"scared":y="o",_=-6,L=1.3,V=.7,P=-4;break;case"angry":y="sad",_=7,L=.8,P=3;break;case"worried":y="wavy",_=-5;break;case"smirk":y="smirk",L=.75,_=2;break;case"surprised":y="o",L=1.25,P=-5;break;case"blank":V=.8;break}if(s.brows==="strict"&&(_+=4),c.includes("maskface")){r.fillStyle="#e8e4d8",r.beginPath(),r.ellipse(p,v,m-2,f-2,0,0,7),r.fill(),S(p-20,v-4,9,12,"#111"),S(p+20,v-4,9,12,"#111"),r.strokeStyle="#111",r.lineWidth=4,r.beginPath(),r.moveTo(p-24,v+26),r.quadraticCurveTo(p,v+48,p+24,v+26),r.stroke();for(let U=-2;U<=2;U++)r.beginPath(),r.moveTo(p+U*9,v+30),r.lineTo(p+U*9,v+40),r.stroke()}else{for(const z of[-1,1]){const k=p+z*w;s.shadow&&S(k,T-4,13,9,s.shadow+"99"),r.save(),r.beginPath(),r.ellipse(k,T,11,8*Math.min(L,1.3),0,0,7),r.clip(),r.fillStyle="#f6f1ea",r.fillRect(k-12,T-12,24,24),S(k+(t==="smirk"?2:0),T+.5,7*V,7*V,s.eyes),S(k+(t==="smirk"?2:0),T+.5,3.4*V,3.4*V,"#120a08"),S(k-2.5,T-3,2,2,"#fff"),r.fillStyle=g,r.fillRect(k-12,T-12,24,5+(1-Math.min(L,1))*6),r.restore(),r.strokeStyle="#1a1010",r.lineWidth=s.lips||s.shadow?3:2.2,r.beginPath(),r.ellipse(k,T,11,8*Math.min(L,1.3),0,Math.PI*1.05,Math.PI*1.95),r.stroke(),(s.lips||s.shadow)&&(r.beginPath(),r.moveTo(k+z*10,T-3),r.lineTo(k+z*15,T-7),r.stroke()),t==="laugh"&&(r.strokeStyle="#1a1010",r.lineWidth=2.5,r.beginPath(),r.arc(k,T+4,9,Math.PI*1.15,Math.PI*1.85),r.stroke()),r.strokeStyle=re(h==="#f0d98a"||h==="#e8e0f0"||h==="#e8e8f0"?"#a88a4a":h,-.25),r.lineWidth=s.brows==="strict"?4.5:3.2,r.lineCap="round",r.beginPath();const Q=T-16+P;r.moveTo(k-z*10,Q+_*.5+(s.brows==="arch"?1:0)),r.quadraticCurveTo(k,Q-(s.brows==="arch"?5:2),k+z*11,Q-_*.5+(s.brows==="arch"?2:0)),r.stroke()}r.strokeStyle=g,r.lineWidth=2,r.beginPath(),r.moveTo(p-1,v+10),r.quadraticCurveTo(p-5,v+22,p+2,v+23),r.stroke();const U=v+37;if(r.strokeStyle=s.lips||"#7a3a34",r.fillStyle=s.lips||"#7a3a34",r.lineWidth=s.lips?4:2.6,r.lineCap="round",r.beginPath(),y==="flat"&&(r.moveTo(p-9,U),r.quadraticCurveTo(p,U+2,p+9,U),r.stroke()),y==="smile"&&(r.moveTo(p-12,U-2),r.quadraticCurveTo(p,U+8,p+12,U-2),r.stroke()),y==="smirk"&&(r.moveTo(p-9,U+1),r.quadraticCurveTo(p+2,U+4,p+13,U-4),r.stroke()),y==="sad"&&(r.moveTo(p-10,U+3),r.quadraticCurveTo(p,U-4,p+10,U+3),r.stroke()),y==="wavy"&&(r.moveTo(p-10,U),r.quadraticCurveTo(p-5,U-4,p,U),r.quadraticCurveTo(p+5,U+4,p+10,U),r.stroke()),y==="o"&&(r.fillStyle="#4a1a1a",r.ellipse(p,U+1,6,8,0,0,7),r.fill(),r.stroke()),y==="laugh"&&(r.fillStyle="#4a1a1a",r.moveTo(p-14,U-4),r.quadraticCurveTo(p,U+18,p+14,U-4),r.closePath(),r.fill(),r.stroke(),r.fillStyle="#fff",r.fillRect(p-8,U-3,16,4)),c.includes("freckles")){r.fillStyle=re(s.skin,-.3);for(const[z,k]of[[-30,14],[-24,18],[-18,13],[-26,10],[30,14],[24,18],[18,13],[26,10],[-4,16],[5,15]])r.beginPath(),r.arc(p+z,v+k,1.6,0,7),r.fill()}c.includes("mole")&&S(p+24,v+30,2.2,2.2,"#3a1a14")}if(c.includes("glasses")){r.strokeStyle="#222",r.lineWidth=3;for(const U of[-1,1])r.beginPath(),r.ellipse(p+U*w,T,15,13,0,0,7),r.stroke(),r.fillStyle="rgba(190,225,255,0.18)",r.fill();r.beginPath(),r.moveTo(p-6,T),r.lineTo(p+6,T),r.stroke()}if(c.includes("visor")&&(r.fillStyle=(s.trim||"#40e0d0")+"cc",r.fillRect(p-m-2,T-11,m*2+4,20),r.fillStyle="#ffffff55",r.fillRect(p-m+4,T-8,30,3)),c.includes("maskhalf")&&(r.fillStyle="#e8c36a",r.beginPath(),r.ellipse(p,T-2,m-2,18,0,0,7),r.fill(),S(p-w,T,8,5,"#120a08"),S(p+w,T,8,5,"#120a08")),r.fillStyle=h,b!=="none"){const U=v-f-8;if(r.beginPath(),r.moveTo(p-m-3,v-8),r.quadraticCurveTo(p-m-6,U,p,U-2),r.quadraticCurveTo(p+m+6,U,p+m+3,v-8),s.bangs?(r.quadraticCurveTo(p+m-6,v-18,p+m-10,v-14),r.lineTo(p-m+10,v-14),r.quadraticCurveTo(p-m+6,v-18,p-m-3,v-8)):b==="short"||b==="bun"||b==="ponytail"?(r.quadraticCurveTo(p+m-4,v-34,p+10,v-40),r.quadraticCurveTo(p-20,v-44,p-m-3,v-8)):(r.quadraticCurveTo(p+m-2,v-30,p-8,v-44),r.quadraticCurveTo(p-m+4,v-30,p-m-3,v-8+(b==="bob"||b==="bobLong"?30:10))),r.fill(),s.bangs){r.strokeStyle=u,r.lineWidth=1.5;for(let z=-3;z<=3;z++)r.beginPath(),r.moveTo(p+z*11,v-40),r.lineTo(p+z*12,v-15),r.stroke()}if(b==="bob"||b==="bobLong"||b==="long"||b==="longStyled"||b==="glam"||b==="rapunzel"){r.fillStyle=h;const z=b==="bob"?152:b==="bobLong"?172:236;r.fillRect(p-m-8,v-10,10,z-v+10),r.fillRect(p+m-2,v-10,10,z-v+10),(b==="bob"||b==="bobLong")&&(S(p-m-2,z-4,9,8,h),S(p+m+2,z-4,9,8,h))}if(M)for(let z=0;z<9;z++)S(p-48+z*12,v-f+2+z%2*6+Math.abs(z-4)*3,12,12,z%2?h:d);if(b==="fluffy")for(let z=0;z<8;z++)S(p-46+z*13,v-f+4+z%2*5+Math.abs(z-3.5)*3.5,13,12,z%2?d:h);r.strokeStyle=d,r.lineWidth=3,r.beginPath(),r.arc(p-8,v-30,30,Math.PI*1.15,Math.PI*1.5),r.stroke()}c.includes("hat")&&(r.fillStyle="#2a2a2e",r.beginPath(),r.ellipse(p,v-36,80,12,0,0,7),r.fill(),r.fillStyle="#3a3a40",r.beginPath(),r.moveTo(p-46,v-38),r.quadraticCurveTo(p-44,v-86,p,v-84),r.quadraticCurveTo(p+44,v-86,p+46,v-38),r.fill(),r.fillStyle="#111",r.fillRect(p-46,v-48,92,9)),c.includes("crown")&&(r.fillStyle="#f4d060",r.beginPath(),r.moveTo(p-38,v-52),r.lineTo(p-42,v-92),r.lineTo(p-20,v-70),r.lineTo(p,v-98),r.lineTo(p+20,v-70),r.lineTo(p+42,v-92),r.lineTo(p+38,v-52),r.fill(),S(p,v-62,6,6,"#d02040")),c.includes("headphones")&&(r.strokeStyle="#222",r.lineWidth=8,r.beginPath(),r.arc(p,v-8,m+8,Math.PI*1.08,Math.PI*1.92),r.stroke(),r.fillStyle="#222",r.fillRect(p-m-14,v-12,16,34),r.fillRect(p+m-2,v-12,16,34));const B=l.toDataURL();return Ga.set(e,B),B}const y0={chars:"Персонажи",places:"Места",items:"Предметы",clues:"Улики",script:"Сценарий"},qs={camera:{name:"Фотоаппарат Василисы",desc:"Запасная камера. «Плёнка здесь иногда видит больше, чем глаза». Клавиша C."},marionette:{name:"Двуликая марионетка",desc:"Добыча Рубена. У куклы два лица — спереди и сзади. Вырезана как ключ."},lantern:{name:"Бумажный фонарик",desc:"С фестиваля Матвея. Внутри записка: «Сто шагов — мои»."},archive_card:{name:"Каталожная карточка",desc:"Нашла Эрика. Шифр архива Театра имени М. Ковалевского."},braid:{name:"Коса Лизы",desc:"Сто локтей прекрасной верёвки. Лиза оставила башне волосы, а себе — свободу."},demo:{name:"Демо-запись Ангелины",desc:"Песня, которую не писал комитет."},flashlight:{name:"Фонарь",desc:"Старый, тяжёлый, с жёлтым лучом. Полина держит его двумя руками."},porch_key:{name:"Ключ из-под горшка",desc:"Конечно, под цветочным горшком. Где же ещё."},owner_mask:{name:"Маска Хозяина",desc:"Белая, пустая изнутри. На подкладке: «А. Е.»."},gear:{name:"Шестерня",desc:"Латунная, от башенного механизма."},weight:{name:"Гиря",desc:"Противовес. Тяжёлая, но Лиза помогает волосами."},tower_key:{name:"Ключ с люстры",desc:"Висел там, где «принцессе не достать»."},emp:{name:"Глушилка",desc:"Гаджет Ноля. На пять секунд слепит охрану. Клавиша G. Зарядов мало."}},Mt=(i,t,e,n,s)=>({cat:i,title:t,text:e,char:n,expr:s}),Ur={cast:Mt("chars","Труппа","Полина, Рубен, Матвей, Эрика, Лиза, Ангелина. Все получили письма: «Режиссёр — Варвара». Никто не удивился.","varya","smile"),c_alla:Mt("chars","Алла Ева","Прима. Опаздывает, требует, перебивает. Иногда права — и это раздражает сильнее всего.","alla","smirk"),c_polina:Mt("chars","Полина","Боялась весь особняк. И всё равно прошла его одна. Замечает узоры, которые я пропускаю.","polina","smile"),c_ruben:Mt("chars","Рубен","Отказался от моего плана и от золота. Вынес одну куклу и всю команду.","ruben","smile"),c_matvey:Mt("chars","Матвей","Сделал свои сто шагов сам. Мои сто — назад — были труднее, чем я думала.","matvey","smile"),c_erika:Mt("chars","Эрика","Закрыла дело так, как считала правильным. Проверяет факты, даже когда они ей не нравятся.","erika","neutral"),c_liza:Mt("chars","Лиза","Ушла из башни раньше, чем её успели спасти. Волосы оставила, косу забрала.","liza","laugh"),c_angelina:Mt("chars","Ангелина","Спела своё. Агентство осталось с фонограммой и чужим лицом на экранах.","angelina","smirk"),c_artemiy:Mt("chars","Артемий","Строгий только снаружи. Кормит школьного кота и не умеет врать.","artemiy","neutral"),troupe:Mt("chars","Второй состав","Василиса, Дана, Нина, Аня, Оля — на гастролях со «Снежной королевой». Это они рекомендовали меня. Вернутся к премьере; просили третий ряд.","vasilisa","smile"),doors:Mt("places","Шесть дверей","В кармане сцены — шесть дверей, каждая в свой жанр. Мокрая, неоновая, школьная, с матовым стеклом, книга и зеркало."),shadows:Mt("places","Тени держат","В этом театре по тени можно ходить, если её отбрасывает правильная декорация."),masks:Mt("places","Три маски","Комедия — что смешно. Трагедия — что сломано и спрятано. Драма — что чувствуют. Клавиши 1, 2, 3."),invite:Mt("clues","Приглашение Кукольника","Пометки на полях — знакомым почерком. Уверенным, немного командным."),camera:Mt("clues","Плёнка видит больше","Василиса советует снимать всё странное и сравнивать."),mirror:Mt("clues","Отражение опаздывает","В гримёрке отражение поправило серёжку. Я не ношу серёжки."),missing:Mt("clues","Труппа исчезла","Погас свет — и на сцене никого. Алла Ева не удивилась. Мокрые следы ведут за кулисы."),photo_inside:Mt("clues","Снимок «до»","Фото, где мы с Полиной уже внутри особняка, сделано с крыльца — до того, как мы вошли. В архиве оно числится неделю."),marionette:Mt("clues","Двуликая кукла","У марионетки два лица. Рубену это не понравилось. Мне тоже."),card:Mt("clues","Алла Ева в сороковых","В городе Эрики её имя — на афишах 1940-х. Она не может быть такой старой. Или «она» — не возраст."),alla_knows:Mt("clues","Она знает про утренник","Алла Ева помнит, как я в семь лет забыла слова. Этого не помнит даже мама."),one_shadow:Mt("clues","Одна тень","В маске Трагедии у Аллы Евы нет своей тени. Под ней лежит моя."),maquette:Mt("clues","Макет с коробочками","Для каждого из друзей заранее сделана коробка-жанр."),twins:Mt("clues","Склеенные фигурки","В центре макета стояли две фигурки спиной к спине: красная и бирюзовая. С одинаковым каре."),timegap:Mt("clues","Пропавшие часы","Я потеряла два с половиной часа в мастерской. Что я делала в это время?"),handwriting:Mt("clues","Петля на «р»","Эрика: письма Кукольника, пометки в сценарии и мой блокнот написаны одной рукой."),ledger:Mt("clues","Протокол собрания","Труппа голосовала за меня. Худрук воздержался: «не могу голосовать за себя»."),contract:Mt("clues","Две подписи","«А. Ева» и «К.» на контракте — один нажим, одни чернила, разные росчерки."),seating:Mt("clues","Третий ряд","«Рот открывать, звук не давать». И на обороте: «Меня будет видно из любого ряда»."),drafts:Mt("clues","Черновики приглашения","Три черновика письма мне. Моим почерком."),puppets:Mt("clues","Одна вага","Шесть марионеток, нити сходятся к одной ваге — перед креслом худрука."),kukolnik:Mt("clues","Кто такой Кукольник","Худрук — не человек, а должность. Кто-то должен был всех собрать. Я всегда беру это на себя."),poses:Mt("clues","Одна поза","В большом зеркале мы с Аллой Евой стоим одинаково. Она — на моём месте."),knotes:Mt("clues","Записки К.","«Это я тебе. То есть себе. То есть — тебе». Кукольник путается в местоимениях."),casting:Mt("clues","Лист распределения","Можно вписать роль самой. Можно спросить. Второе выглядит неряшливо и честно."),act4:Mt("clues","Она расчистила сцену","Во всех шести мирах была Алла Ева — под разными масками. Каждому дала главную роль подальше от своей."),script:Mt("script","The Queen's Last Curtain","Королева, которой нужны аплодисменты, и Молодая Девушка. Страницы описывают то, что ещё не случилось."),program:Mt("script","Финал из программки","«…и когда декорации исчезают, зал видит, что на сцене стоит один человек»."),page8:Mt("script","Страница 8","Королева рассылает приглашённых по чужим пьесам. «Я всем дала по спектаклю. Себе — тоже»."),steps:Mt("script","Ремарка Матвея","«Режиссёр отходит на сто шагов. Сцена продолжается без него. Сцена становится лучше»."),braid:Mt("script","Ремарка Лизы","«Принцесса выходит сама. Спасатель опаздывает. Никто не пострадал, кроме сюжета»."),demo:Mt("script","Ремарка Ангелины","«Фонограмма выключена. Поёт та, чьё это лицо»."),n_pol_book:Mt("script","Проклятая книга","«Дом смеётся над тем, кто играет роль, которую ему назначили. Перестань играть — и он замолчит»."),n_pol_photos:Mt("clues","Невозможные фотографии","На трёх снимках в библиотеке — то, чего не бывает: тринадцатый час, человек без тени, отражение спиной. На рамках — годы, на обороте — знаки."),n_pol_wall:Mt("clues","Обои с цветами","Полина заметила: в каждой комнате цветок на обоях повёрнут по-своему — вверх или вниз."),n_pol_owner:Mt("clues","Маска Хозяина","Под маской никого не было. На подкладке — театральный штамп и буквы «А. Е.»."),n_rub_plan:Mt("script","План ограбления","Мой план был поминутным. Рубен сказал: «План нужен, чтобы было от чего отступать»."),n_rub_fortuna:Mt("clues","Леди Фортуна","Хозяйка казино в золотой полумаске знала наш план заранее. Родинка под глазом. Знакомая манера говорить «дорогуша»."),n_mat_fake:Mt("script","Слишком красиво","Чем больше я ставлю «идеальных моментов», тем фальшивее они выглядят. Лепестки падают по команде."),n_mat_teacher:Mt("clues","Руководительница драмкружка","Строгая, в очках. Вычёркивала Матвея из главных ролей. Родинка под глазом."),n_eri_case:Mt("clues","Дело Вронской","Актриса Лидия Вронская исчезла накануне премьеры. Показания противоречат уликам."),n_eri_alla:Mt("clues","Поручительница","В контракте Вронской поручителем значится Алла Ева. Афиши с её именем — по всему городу."),n_liz_role:Mt("script","Роль принцессы","Рассказчик, Фея и зеркальце хором объясняют Лизе, что принцессы ждут. Лиза не ждёт."),n_liz_voice:Mt("clues","Голос Рассказчика","Говорит басом, но ставит ударения как один мой знакомый человек в красном."),n_ang_concept:Mt("script","Концепт «ANGEL♡»","Агентство хочет розовые волосы, новое имя и песню, написанную комитетом."),n_ang_assist:Mt("clues","Ассистентка","Розовый козырёк, родинка под глазом. Это она предложила «заменить лицо»."),n_diva:Mt("clues","Третий ряд Аллы Евы","Она боится не свиста. Она боится, что зал посмотрит сквозь неё. Это объясняет. Это не оправдывает."),n_collapse:Mt("places","Театр складывается","Коридоры ведут в комнаты из чужих жанров. Работает всё, чему мы научились, — и все, кто рядом.")},rn=()=>document.getElementById("ui");function _e(i,t="",e="",n){const s=document.createElement(i);return t&&(s.className=t),e&&(s.innerHTML=e),n&&n.appendChild(s),s}const Ae=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;"),E0=i=>`${Math.floor(i/3600)}:${String(Math.floor(i/60)%60).padStart(2,"0")}`,Tl='<h1 class="logo" aria-label="THE OTHER ME: APPLAUSE, PLEASE!"><span class="row r1"><span class="l-the">THE</span><span class="l-other">Other</span><span class="l-me">ME<span class="l-colon">:</span></span></span><span class="row r2"><span class="l-app"><b>A</b>PPLAUSE<span class="l-comma">,</span></span></span><span class="row r3"><span class="l-please">Please</span><span class="l-bang">!</span></span></h1>';class T0{constructor(){this.modal=!1,this.dialogOpen=!1,this.modals=[],this.log=[],this.advance=null,this.auto=!1,this.placeEl=null,this.skipping=!1}init(){const t=rn();this.hudEl=_e("div","hud hidden","",t),this.maskRow=_e("div","masks","",this.hudEl),this.hudR=_e("div","hud-r","",this.hudEl),this.toasts=_e("div","toasts","",t),this.promptEl=_e("div","prompt hidden","",t),this.saveEl=_e("div","savemark","✎ сохранено",t),this.lyricEl=_e("div","lyric hidden","",t),this.dlg=_e("div","dlg hidden",'<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>',t),this.vf=_e("div","viewfinder hidden","<b>● REC</b><span>E / Enter — снимок · C / Esc — убрать камеру</span>",t),this.loadingEl=_e("div","savemark","Меняем декорации…",t),this.loadingEl.style.right="auto",this.loadingEl.style.left=".8rem",this.dlg.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="hist"?this.history():n==="auto"?(this.auto=!this.auto,e.target.style.background=this.auto?"#8e1830":"",this.auto&&this.advance&&this.advance()):n==="skip"?(this.skipping=!0,this.advance&&this.advance()):this.advance&&this.advance()}),xi(e=>{if(this.modal){e==="pause"&&this.closeTop();return}e==="act"&&this.advance&&this.advance()}),this.hudR.innerHTML='<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="note" title="Блокнот (Tab)">✎</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>',this.hudR.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="cam"&&$i("camera"),n==="note"&&$i("notebook"),n==="pause"&&$i("pause")}),this.maskRow.addEventListener("click",e=>{const n=e.target.closest(".maskb");n&&Ut.setMask(n.dataset.m)}),this.buildTouch(),this.applySettings()}applySettings(){document.documentElement.style.setProperty("--s",String(Se.uiScale)),document.body.classList.toggle("contrast",Se.contrast),Xt.applyVolumes(),this.touchEl.classList.toggle("hidden",!Se.touch||!Ut.running)}say(t){this.dialogOpen=!0,this.dlg.classList.remove("hidden"),this.prompt(null);const e=this.dlg.querySelector(".port"),n=e.querySelector("img"),s=this.dlg.querySelector(".name"),a=this.dlg.querySelector(".text");return e.classList.toggle("none",!t.portrait),t.portrait&&(n.src=t.portrait),s.innerHTML=t.name?`<i style="background:${t.color}"></i>${Ae(t.name)}`:"",a.classList.toggle("it",t.italic),this.log.push({name:t.name,text:t.text,color:t.color}),this.log.length>250&&this.log.shift(),new Promise(o=>{const l=t.text;let r=0,c=!1,h,u;const d=Se.textSpeed,g=()=>{clearInterval(h),clearTimeout(u),this.advance=null,o()},p=()=>{r=l.length,a.textContent=l,c=!0,clearInterval(h),this.auto&&(u=setTimeout(g,900+l.length*45))};if(Ut.fast||this.skipping&&t.seen||Mi("skip")&&t.seen){a.textContent=l,setTimeout(g,Ut.fast?0:60);return}this.skipping=!1,d?(a.textContent="",h=setInterval(()=>{r=Math.min(l.length,r+Math.max(1,Math.round(d/30))),a.textContent=l.slice(0,r),r%3===0&&/[а-яa-z]/i.test(l[r-1]||"")&&Xt.blip(t.pitch),r>=l.length&&p()},33)):p(),this.advance=()=>{c?g():p()}})}sayHide(){this.dialogOpen=!1,this.dlg.classList.add("hidden"),this.skipping=!1}choice(t){if(Ut.fast)return Promise.resolve(Ut.autoChoice?Ut.autoChoice(t):0);const e=_e("div","choices"+(this.dialogOpen?"":" solo"),"",rn());let n=0;return this.skipping=!1,new Promise(s=>{const a=t.map((h,u)=>{const d=_e("button","choice"+(h.mask?" mask":""),`<span class="n">${u+1}.</span>${Ae(h.text)}`,e);return d.onclick=g=>{g.stopPropagation(),c(u)},d.onmouseenter=()=>{n=u,o()},d}),o=()=>a.forEach((h,u)=>h.classList.toggle("on",u===n)),l=xi((h,u)=>{if(!this.modal){if(h==="up")n=(n+t.length-1)%t.length,Xt.sfx("hover"),o();else if(h==="down")n=(n+1)%t.length,Xt.sfx("hover"),o();else if(h==="act")c(n);else if(/^Digit[1-9]$/.test(u)){const d=parseInt(u.slice(5))-1;d<t.length&&c(d)}}}),r=this.advance;this.advance=null;const c=h=>{l(),e.remove(),Xt.sfx("click"),this.advance=r,this.log.push({name:"→",text:t[h].text,color:"#d4ae48"}),setTimeout(()=>s(h),0)};o()})}history(){const e=this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map(n=>`<p>${n.name?`<b style="color:${n.name==="→"?"#8e1830":"#3a2a14"}">${Ae(n.name)}</b> `:""}${n.name?"":"<i>"}${Ae(n.text)}${n.name?"":"</i>"}</p>`).join("")||"<p><i>Пока никто ничего не сказал.</i></p>"}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`).querySelector(".body");e.scrollTop=e.scrollHeight}hudShow(t){this.hudEl.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!Se.touch),t||(this.sayHide(),this.prompt(null),this.lyric(null))}hud(){const t=Ut.state.f,e=Ut.room?.def.noMasks;this.maskRow.innerHTML=t.masks&&!e?Object.entries(R0).map(([n,s],a)=>`<button class="maskb${Ut.state.mask===n?" on":""}" data-m="${n}" title="${s} (${a+1})">${n==="comedy"?"☺":n==="tragedy"?"☹":"❦"}<small>${a+1} ${s}</small></button>`).join(""):"",this.hudR.children[0].classList.toggle("hidden",!Ut.has("camera")||!!Ut.room?.def.noCamera)}prompt(t,e=0,n=0){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.dataset.l!==t&&(this.promptEl.dataset.l=t,this.promptEl.innerHTML=`<kbd>E</kbd>${Ae(t)}`),this.promptEl.style.left=e*100+"%",this.promptEl.style.top=Math.max(8,n*100)+"%"}toast(t,e="✦"){if(Ut.fast)return;const n=_e("div","toast",`<b>${e}</b>${Ae(t)}`,this.toasts);setTimeout(()=>n.remove(),4100)}place(t){if(this.placeEl&&this.placeEl.remove(),Ut.fast)return;const e=this.placeEl=_e("div","place",`<b>${Ae(t)}</b><i></i>`,rn());setTimeout(()=>e.remove(),3700)}saved(t){this.saveEl.textContent=t==="auto"?"✎ автосохранение":"✎ сохранено",this.saveEl.classList.add("on"),setTimeout(()=>this.saveEl.classList.remove("on"),1600)}loading(t){this.loadingEl.classList.toggle("on",t)}lyric(t,e=""){if(!t){this.lyricEl.classList.add("hidden");return}this.lyricEl.classList.remove("hidden"),this.lyricEl.innerHTML=(e?`<small>${Ae(e)}</small>`:"")+Ae(t).replace(/\n/g,"<br>")}viewfinder(t){this.vf.classList.toggle("hidden",!t)}async transition(t,e){let n=rn().querySelector(".trans");if(e==="out")n&&n.remove(),n=_e("div","trans "+t,"",rn()),n.offsetWidth,n.classList.add("on"),t==="curtain"&&Xt.sfx("curtain"),t==="glitch"&&Xt.sfx("glitch"),(t==="mirror"||t==="page")&&Xt.sfx("whoosh"),await new Promise(s=>setTimeout(s,t==="curtain"?760:520));else if(n){n.classList.remove("on");const s=n;setTimeout(()=>s.remove(),800),await new Promise(a=>setTimeout(a,350))}}paper(t){return Ut.fast?Promise.resolve():(Xt.sfx("paper"),new Promise(e=>{this.open(`<div class="paper ${t.cls||""}">${t.stamp?`<div class="stamp">${t.stamp}</div>`:""}${t.title?`<h3>${t.title}</h3>`:""}<div class="${t.hand?"hand":""}">${t.body}</div>${t.sign?`<div class="sign">${t.sign}</div>`:""}<button class="btn small ok" data-x>${t.btn||"Отложить"}</button></div>`,{raw:!0,onClose:()=>{Xt.sfx("paper"),e()}}).querySelector(".ok").focus()}))}card(t,e={}){return Ut.fast?Promise.resolve():new Promise(n=>{const s=_e("div","card",t.map((r,c)=>{const[h,u]=Array.isArray(r)?r:[r,""];return`<p class="${u}" style="animation-delay:${c*.9}s">${h}</p>`}).join("")+'<div class="more">нажмите, чтобы продолжить</div>',rn()),a=performance.now(),o=()=>{performance.now()-a<500||(l(),s.remove(),n())},l=xi(r=>{r==="act"&&!this.modal&&o()});s.onclick=o})}open(t,e={}){const n=_e("div","modal",e.raw?t:`<div class="sheet ${e.cls||""}">${t}</div>`,rn());return n.onCloseCb=e.onClose,n.noClose=e.noClose,this.modals.push(n),this.modal=!0,this.prompt(null),El(!0),n.addEventListener("click",s=>{s.target.closest("[data-x]")&&(Xt.sfx("click"),this.close(n))}),n}close(t){const e=this.modals.indexOf(t);if(e<0)return;this.modals.splice(e,1),t.remove(),this.modal=this.modals.length>0,this.modal||El(!1);const n=t.onCloseCb;n&&n()}closeTop(){const t=this.modals[this.modals.length-1];t&&!t.noClose&&(Xt.sfx("click"),this.close(t))}confirm(t,e="Да",n="Отмена"){return new Promise(s=>{let a=!1;const o=this.open(`<h2>Минутку</h2><div class="body"><p>${t}</p></div><div class="foot"><button class="btn small" data-x>${n}</button><button class="btn small red" data-y>${e}</button></div>`,{cls:"narrow",onClose:()=>s(a)});o.querySelector("[data-y]").onclick=()=>{a=!0,this.close(o)}})}pause(){if(this.modal)return;Ut.paused=!0,Xt.muffle(600);const t=this.open(`<h2>Антракт <small>${Ae(Ut.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`,{cls:"narrow",onClose:()=>{Ut.paused=!1,Xt.muffle(Ut.state.mask==="tragedy"?900:Ut.state.mask==="drama"?2600:2e4)}});t.addEventListener("click",async e=>{const n=e.target.dataset?.a;n&&(Xt.sfx("click"),n==="resume"&&this.close(t),n==="save"&&this.saveLoad("save"),n==="load"&&this.saveLoad("load"),n==="note"&&this.notebook(),n==="set"&&this.settings(),n==="menu"&&await this.confirm("Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.","Выйти")&&(this.close(t),Ut.stopToMenu(),this.mainMenu()))}),t.querySelector(".btn").focus()}settings(){const t=Se,e=(l,r,c="")=>`<div class="row-set"><label>${l}${c?`<small>${c}</small>`:""}</label><div>${r}</div></div>`,n=(l,r,c,h)=>`<input type="range" data-k="${l}" min="${r}" max="${c}" step="${h}" value="${t[l]}">`,s=l=>`<input type="checkbox" data-k="${l}" ${t[l]?"checked":""}>`,a=this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${e("Музыка",n("music",0,1,.05))}${e("Эффекты",n("sfx",0,1,.05))}${e("Голоса",n("voice",0,1,.05),"звуковой сигнал реплик; все реплики идут с субтитрами")}
      ${e("Скорость текста",n("textSpeed",0,120,5),"0 — мгновенно")}${e("Масштаб интерфейса",n("uiScale",.8,1.5,.05))}
      ${e("Качество графики",'<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>')}
      ${e("Меньше вспышек",s("reduceFlash"),"приглушает вспышки и глитч-эффекты")}${e("Без тряски камеры",s("reduceShake"))}${e("Повышенный контраст текста",s("contrast"))}
      ${e("Облегчённые ритм-сцены",s("rhythmEasy"),"широкие окна попадания, меньше нот, нельзя проиграть")}${e("Задержка звука, мс",n("rhythmOffset",-200,200,5)+" <span data-off></span>","для ритм-сцен")}
      ${e("",'<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${e("Сенсорное управление",s("touch"),"экспериментально: джойстик и кнопки на экране")}
      <p class="warn">Управление: WASD или стрелки — ходьба, Shift — быстрее, E / Enter / Пробел — действие, 1–3 — маски, Q — снять маску, C — фотоаппарат, Tab — блокнот, H — история, Ctrl — пропуск прочитанного, Esc — пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);a.querySelector("[data-k=quality]").value=t.quality;const o=a.querySelector("[data-off]");o.textContent=t.rhythmOffset+"",a.addEventListener("input",l=>{const r=l.target,c=r.dataset.k;c&&(t[c]=r.type==="checkbox"?r.checked:r.tagName==="SELECT"?r.value:parseFloat(r.value),o.textContent=t.rhythmOffset+"",dl(),this.applySettings(),c==="quality"&&Ut.R.setup(),c==="sfx"&&Xt.sfx("click"))}),a.addEventListener("click",async l=>{if(l.target.dataset?.a==="calib"){const{calibrate:r}=await vn(async()=>{const{calibrate:h}=await import("./minigames-BQH63eHi.js");return{calibrate:h}},[],import.meta.url),c=await r();c!=null&&(t.rhythmOffset=c,dl(),a.querySelector("[data-k=rhythmOffset]").value=String(c),o.textContent=c+"")}})}async saveLoad(t){const e=this.open(`<h2>${t==="save"?"Сохранить":"Загрузить"} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс — для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${Ut.running?'<button class="btn small" data-a="exp">Экспорт в файл</button>':""}<button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-list]"),s=async()=>{const a=await Promise.all(pl.map(async o=>({s:o,...await Na(o).catch(l=>(console.warn(l),{state:null,broken:!0}))})));n.innerHTML=a.map(({s:o,state:l,broken:r})=>`<div class="slot"><div><b>${e0[o]}</b>${l?`<small>${Ae(l.chapter)} · ${E0(l.time)} в театре · ${new Date(l.savedAt||0).toLocaleString("ru")}</small>`:`<small>${r?"⚠ данные повреждены или несовместимы":"пусто"}</small>`}</div><div class="acts">${t==="save"&&o!=="auto"&&Ut.running?`<button class="btn small" data-s="${o}" data-do="save">Записать</button>`:""}${l?`<button class="btn small" data-s="${o}" data-do="load">Загрузить</button>`:""}${l||r?`<button class="btn small red" data-s="${o}" data-do="del">✕</button>`:""}</div></div>`).join("")};await s(),e.addEventListener("click",async a=>{const o=a.target,l=o.dataset?.s,r=o.dataset?.do,c=o.dataset?.a;if(r==="save"&&l&&(await Ut.save(l),await s()),r==="del"&&l&&await this.confirm("Удалить это сохранение?","Удалить")&&(await n0(l),await s()),r==="load"&&l){const h=await Na(l);if(!h.state){this.toast("Сохранение повреждено","⚠");return}if(Ut.running&&!await this.confirm("Загрузить сохранение? Текущий несохранённый прогресс будет потерян.","Загрузить"))return;this.closeAll(),Ut.stopToMenu(),document.querySelector(".menu-screen")?.remove(),await Ut.start(h.state)}if(c==="exp"){const h=new Blob([i0(Ut.state)],{type:"application/json"}),u=URL.createObjectURL(h),d=document.createElement("a");d.href=u,d.download="the-other-me-save.json",d.click(),setTimeout(()=>URL.revokeObjectURL(u),2e3)}if(c==="imp"){const h=document.createElement("input");h.type="file",h.accept=".json,application/json",h.onchange=async()=>{const u=h.files?.[0];if(!u)return;const d=s0(await u.text());if(!d){this.toast("Файл не похож на сохранение этой игры","⚠");return}await xc("slot3",d),this.toast("Импортировано в «Слот III»","✎"),await s()},h.click()}})}closeAll(){for(;this.modals.length;){const t=this.modals[this.modals.length-1];t.onCloseCb=null,this.close(t)}Ut.paused=!1}notebook(t="chars"){if(!Ut.running)return;const e=this.open(`<h2>Блокнот режиссёра <small>В. — «не забыть ничего»</small></h2><div class="tabs">${Object.entries(y0).map(([a,o])=>`<button class="tab" data-t="${a}">${o}</button>`).join("")}<button class="tab" data-t="photos">Фотоархив</button></div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-b]"),s=a=>{if(e.querySelectorAll(".tab").forEach(l=>l.classList.toggle("on",l.dataset.t===a)),a==="photos"){n.innerHTML=Ut.state.photos.length?`<div class="photos">${Ut.state.photos.map((l,r)=>`<div class="photo" style="--r:${r*37%7-3}deg"><img src="${l.img}" alt=""><span>${Ae(l.caption)}</span></div>`).join("")}</div>`:"<p><i>Плёнка пока пуста. Фотоаппарат — клавиша C.</i></p>";return}let o="";a==="items"&&(o=Ut.state.inv.map(l=>`<div class="entry noimg"><div><h4>${Ae(qs[l]?.name||l)}</h4><p>${Ae(qs[l]?.desc||"")}</p></div></div>`).join("")),o+=Ut.state.notes.map(l=>Ur[l]).filter(l=>l&&l.cat===a).map(l=>{const r=l.char?nn[l.char]:null;return`<div class="entry ${r?"":"noimg"}">${r?`<img src="${Cc(l.char,l.expr||"neutral")}" alt="">`:""}<div><h4>${Ae(l.title)}</h4>${r?.role?`<div class="role">${Ae(r.role)}</div>`:""}<p>${l.text}</p></div></div>`}).join(""),n.innerHTML=o||"<p><i>Здесь пока пусто.</i></p>"};e.addEventListener("click",a=>{const o=a.target.dataset?.t;o&&(Xt.sfx("paper"),s(o))}),s(t)}async mainMenu(){this.hudShow(!1),document.querySelector(".menu-screen")?.remove();const t=await Promise.all(pl.map(s=>Na(s).catch(()=>({state:null,broken:!0}))));let e=null;for(const s of t)s.state&&(!e||(s.state.savedAt||0)>(e.savedAt||0))&&(e=s.state);const n=_e("div","menu-screen",`<div class="menu-valance"></div><div class="menu-spot"></div><div class="menu-logo">${Tl}</div><div class="menu-list"><button class="btn" data-a="cont" ${e?"":"disabled"}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="cred">Создатели</button></div><div class="menu-foot">Театр имени М. Ковалевского · сезон восемнадцатый · лучше всего — в наушниках</div>`,rn());Xt.music("theater"),n.addEventListener("click",async s=>{Xt.init(),Xt.music("theater");const a=s.target.dataset?.a;if(a){if(Xt.sfx("click"),a==="cont"&&e&&(n.remove(),await Ut.start(e)),a==="new"){if(e&&!await this.confirm("Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.","Начать"))return;n.remove(),await Ut.start(to())}a==="load"&&this.saveLoad("load"),a==="set"&&this.settings(),a==="cred"&&this.credits(!1)}}),n.querySelector(e?"[data-a=cont]":"[data-a=new]").focus()}credits(t){return new Promise(e=>{const n=(r,c)=>`<h3>${r}</h3>${c.map(h=>`<p>${h}</p>`).join("")}`,s=_e("div","credits",`<div class="roll" style="--dur:${t?70:55}s"><div style="display:inline-block">${Tl}</div>
        ${n("В РОЛЯХ",["Варя<small>режиссёрка, Молодая Девушка, Королева — и всё это одновременно</small>","Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>","Артемий<small>школьный кот одобряет</small>"])}
        ${n("ТРУППА ТЕАТРА",["Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма — их рук дело</small>"])}
        ${n("В ЗРИТЕЛЬНОМ ЗАЛЕ",["Мама Наташа и Саша","Папа Максим и Настя","Вася","Софа · Катя"])}
        ${n("ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ",["Кукольник<small>просил не указывать. Указан.</small>"])}
        ${n("МУЗЫКА, ДЕКОРАЦИИ, СВЕТ",["Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры","Three.js · TypeScript · Vite"])}
        ${n("ШРИФТЫ ЛОГОТИПА",["Aurelia Diamond · Bastliga One · Cintarini · Highcrest · Lombardina Initial One · Zaslia<small>лицензии «для личного некоммерческого использования»; игра — подарок, не продукт</small>","Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>"])}
        ${n("ОСОБАЯ БЛАГОДАРНОСТЬ",["Третьему ряду.<small>Вас видно. Правда.</small>"])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`,rn()),a=()=>{o(),s.remove(),e()},o=xi(r=>{(r==="act"||r==="pause")&&a()}),l=performance.now();s.onclick=()=>{performance.now()-l>600&&a()},s.querySelector(".roll").addEventListener("animationend",a),Ut.fast&&a()})}buildTouch(){this.touchEl=_e("div","touch hidden",'<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="camera">◉</button><button class="tbtn" data-a="mask0">☺</button><button class="tbtn big" data-a="act">E</button></div>',rn());const t=this.touchEl.querySelector(".stick"),e=t.querySelector("i");let n=null;const s=l=>{const r=t.getBoundingClientRect();let c=(l.clientX-r.left-r.width/2)/(r.width/2),h=(l.clientY-r.top-r.height/2)/(r.height/2);const u=Math.hypot(c,h);u>1&&(c/=u,h/=u),Un.x=c,Un.y=h,e.style.transform=`translate(${c*2.2}rem, ${h*2.2}rem)`};t.addEventListener("pointerdown",l=>{n=l.pointerId,t.setPointerCapture(n),s(l)}),t.addEventListener("pointermove",l=>{l.pointerId===n&&s(l)});const a=l=>{l.pointerId===n&&(n=null,Un.x=Un.y=0,e.style.transform="")};t.addEventListener("pointerup",a),t.addEventListener("pointercancel",a);let o=0;this.touchEl.querySelector(".tbtns").addEventListener("pointerdown",l=>{const r=l.target.dataset?.a;if(r)if(l.preventDefault(),r==="mask0"){const c=[null,"comedy","tragedy","drama"];o=(o+1)%4,c[o]?Ut.setMask(c[o]):Ut.state.mask&&Ut.setMask(Ut.state.mask)}else $i(r)})}}const zt=new T0,w0={hub:()=>vn(()=>import("./hub-BLMUMRRg.js"),__vite__mapDeps([0,1]),import.meta.url),pol:()=>vn(()=>import("./polina-Cjh_qcmq.js"),__vite__mapDeps([2,1]),import.meta.url),rub:()=>vn(()=>import("./ruben-Bw20tNkg.js"),[],import.meta.url),mat:()=>vn(()=>import("./matvey-Bw20tNkg.js"),[],import.meta.url),eri:()=>vn(()=>import("./erika-Bw20tNkg.js"),[],import.meta.url),liz:()=>vn(()=>import("./lisa-Bw20tNkg.js"),[],import.meta.url),ang:()=>vn(()=>import("./angelina-Bw20tNkg.js"),[],import.meta.url),fin:()=>vn(()=>import("./finale-Bw20tNkg.js"),[],import.meta.url)},Gi={},A0={comedy:{sat:1.35,tint:[1.08,1.02,.86],vig:.2,bright:1.08},tragedy:{sat:.35,tint:[.82,.9,1.12],vig:.6,bright:.9,contrast:1.1},drama:{sat:.9,tint:[1.1,.9,.92],vig:.55,bright:1}},R0={comedy:"Комедия",tragedy:"Трагедия",drama:"Драма"},C0=i=>new Promise(t=>setTimeout(t,i));class P0{constructor(){this.state=to(),this.room=null,this.lock=0,this.paused=!1,this.running=!1,this.t=0,this.cam={x:0,z:0,dist:24,focus:null,shake:0,roll:0,pitch:.56,yOff:1.2},this.near=null,this.trail=[],this.followers=[],this.stepT=0,this.busy=!1,this.inPhoto=!1,this.fast=!1,this.playerSpeed=5.6,this.override=null,this.debug=!1,this.gradeBase={},this.audio=Xt,this.ui=zt}boot(t){this.R=new r0(t),this.debug=new URLSearchParams(location.search).has("debug");let e=performance.now();const n=s=>{const a=Math.min(.05,(s-e)/1e3);e=s;try{this.frame(a)}catch(o){console.error("[game] ошибка кадра",o)}requestAnimationFrame(n)};requestAnimationFrame(n),xi(s=>this.onAction(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.running&&!this.paused&&!zt.modal&&zt.pause()}),window.addEventListener("beforeunload",s=>{this.running&&this.lock>0&&!this.debug&&(s.preventDefault(),s.returnValue="")})}get f(){return this.state.f}flag(t){return this.state.f[t]}set(t,e=!0){typeof t=="string"?this.state.f[t]=e:Object.assign(this.state.f,t)}has(t){return this.state.inv.includes(t)}give(t,e=!1){this.has(t)||(this.state.inv.push(t),qs[t]||console.warn("[game] нет описания предмета",t),e||(this.sfx("pickup"),zt.toast("Получено: "+(qs[t]?.name||t),"✦")))}take(t){const e=this.state.inv.indexOf(t);e>=0&&this.state.inv.splice(e,1)}note(t){if(!this.state.notes.includes(t)){if(!Ur[t]){console.warn("[game] нет записи блокнота",t);return}this.state.notes.push(t),this.sfx("pencil"),zt.toast("Блокнот: "+Ur[t].title,"✎")}}done(t){return!!this.state.f["done_"+t]}doneCount(){return["polina","ruben","matvey","erika","liza","angelina"].filter(t=>this.done(t)).length}sfx(t,e){Xt.sfx(t,e)}toast(t,e){zt.toast(t,e)}wait(t){return C0(this.fast?0:t*1e3)}async start(t){this.state=t,this.running=!0,this.lock=0,this.paused=!1,zt.hudShow(!0),await this.goto(t.room,t.spot,{fade:"fade",load:!0})}stopToMenu(){this.running=!1,this.clearRoom(),Xt.music(null),Xt.ambience(null),zt.hudShow(!1)}async save(t="auto"){if(!this.running)return;const e=this.state;this.player&&(e.px=this.player.x,e.pz=this.player.z);try{await xc(t,e),zt.saved(t)}catch(n){console.error("[save] не удалось сохранить",n),zt.toast("Не удалось сохранить игру: хранилище браузера недоступно","⚠")}}clearRoom(){this.room&&(this.R.scene.remove(this.room.group),this.room.dispose(),this.room=null),this.followers=[],this.trail=[],this.near=null,this.override=null,zt.prompt(null)}async loadRoom(t){if(Gi[t])return Gi[t];const e=t.split("_")[0],n=w0[e];if(!n)throw new Error("Неизвестная локация: "+t);zt.loading(!0);try{const s=await n();Object.assign(Gi,s.rooms)}finally{zt.loading(!1)}if(!Gi[t])throw new Error("Глава не содержит локацию: "+t);return Gi[t]}async goto(t,e="start",n={}){this.lock++;const s=this.room?this.room.id:n.load?"load":"",a=this.fast?"none":n.fade||"fade";try{a!=="none"&&await zt.transition(a,"out");let l;try{l=await this.loadRoom(t)}catch(u){throw a!=="none"&&await zt.transition(a,"in"),u}this.clearRoom(),this.cam.focus=null,this.cam.roll=0;const r=this.room=new Ec(t,l),c=new Tc(r,this);this.player=new eo(this.state.f.playerChar||"varya","player"),l.build(c,this),r.actors.push(this.player),r.group.add(this.player.group);const h=r.spawns[e]||r.spawns.start||{x:0,z:0,dir:"f"};!r.spawns[e]&&e!=="start"&&console.warn(`[game] в ${t} нет точки появления ${e}`),n.load&&this.state.room===t&&this.state.px!=null&&!this.hits(this.state.px,this.state.pz)?this.player.place(this.state.px,this.state.pz,"f"):this.player.place(h.x,h.z,h.dir);for(const u of this.followers)u.place(this.player.x+.8,this.player.z+.3);this.R.scene.add(r.group),this.R.scene.background=new Bt(r.group.userData.bg??328710),this.R.scene.fog=r.group.userData.fog||null,this.gradeBase=l.grade||{},this.applyMask(!0),this.applyGrade(!0),this.cam.dist=l.camDist||24,this.camSnap(),l.music!==void 0&&Xt.music(l.music),Xt.ambience(l.amb??null),this.state.room=t,this.state.spot=e,l.chapter&&(this.state.chapter=l.chapter),zt.hud(),!n.load&&!this.fast&&await this.save("auto"),a!=="none"&&await zt.transition(a,"in"),!n.silent&&s!==t&&zt.place(l.name)}finally{this.lock--}const o=this.room.def;o.enter&&await this.cut(()=>o.enter(this,s))}async rebuild(){const t=this.player,e=t.x,n=t.z,s=t.dir;await this.goto(this.room.id,this.state.spot,{fade:"none",silent:!0}),this.player.place(e,n,s),this.camSnap()}async cut(t){this.lock++,zt.prompt(null);try{return await t()}finally{this.lock--}}async say(t,e,n="neutral",s){const a=t==="~",o=t==="*",l=a?"varya":t,r=nn[l];!o&&!r&&console.warn("[dialogue] неизвестный говорящий",t);const c=t+":"+e,h=!!this.state.seen[wl(c)];await zt.say({name:o?"":s||r?.name||t,color:r?.color||"#e8d8a8",portrait:o||!r?"":Cc(l,n),text:e,italic:a||o,pitch:r?.pitch||300,seen:h}),this.state.seen[wl(c)]=1}async line(t){const e=/^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(t);if(!e){console.warn("[dialogue] не разобрана реплика:",t);return}await this.say(e[1],e[4],e[3]||"neutral",e[2])}async choice(t){return zt.choice(t.map(e=>typeof e=="string"?{text:e}:e))}async run(t){this.lock++,Xt.duck(!0);try{for(const e of t)if(typeof e=="string")await this.line(e);else if(typeof e=="function"){const n=await e(this);Array.isArray(n)&&await this.run(n)}else if(e.c){const n=e.c.filter(o=>{const l=o[2]||{};return!(l.if&&!l.if(this.state.f,this)||l.mask&&this.state.mask!==l.mask)}),s=await this.choice(n.map(o=>({text:o[0],mask:!!(o[2]&&o[2].mask)}))),a=n[s];a[2]&&a[2].set&&this.set(a[2].set),await this.run(a[1]||[])}else if(e.if)await this.run(e.if(this.state.f,this)?e.t||[]:e.e||[]);else{if(e.set&&this.set(e.set),e.note&&this.note(e.note),e.give&&this.give(e.give),e.sfx&&this.sfx(e.sfx),e.music!==void 0&&Xt.music(e.music),e.wait&&await this.wait(e.wait),e.pose){const n=this.actor(e.pose[0]);n&&(n.pose=e.pose[1])}e.shake&&this.shake(e.shake),e.flash&&this.flash()}}finally{this.lock--,Xt.duck(!1),this.lock===0&&zt.sayHide()}}actor(t){return t==="player"?this.player:this.room?.actor(t)}setMask(t){!this.state.f.masks||this.room?.def.noMasks||(this.state.mask===t&&(t=null),this.state.mask=t,this.sfx("mask"),this.applyMask(),this.applyGrade(),zt.hud(),Xt.muffle(t==="tragedy"?900:t==="drama"?2600:2e4))}applyMask(t=!1){const e=this.room;if(!e)return;const n=e.def.noMasks?null:this.state.mask;e.def.noMasks&&Xt.muffle(2e4);for(const s of e.masked){const a=s.mask==="none"?!n:s.mask===n;s.obj.visible=a,s.box&&(s.box.on=a)}for(const s of e.inters)s.mask&&(s.enabled=s.mask==="none"?!n:s.mask===n,s.marker&&(s.marker.visible=s.enabled))}applyGrade(t=!1){const e=this.room?.def.noMasks?null:this.state.mask,n={...this.gradeBase,...e?D0(this.gradeBase,A0[e]):{}};this.R.setGrade(n,t)}grade(t,e=!1){this.gradeBase={...this.gradeBase,...t},this.applyGrade(e)}camSnap(){const t=this.player,e=this.room,n=Math.max(0,e.def.w/2-9),s=Math.max(0,e.def.d/2-4.5);this.cam.x=Wi(t.x,-n,n),this.cam.z=Wi(t.z,-s,s)}focus(t,e,n=18){this.cam.focus={x:t,z:e,dist:n}}unfocus(){this.cam.focus=null}shake(t=.4){Se.reduceShake||(this.cam.shake=Math.max(this.cam.shake,t))}flash(t=.9){this.R.flash=t}async photoMode(){if(!this.has("camera")||this.inPhoto||this.room?.def.noCamera)return;this.inPhoto=!0,this.lock++;const t=this.player,e=L0(t.dir);this.focus(t.x+e.x*3,t.z+e.z*3,15),zt.viewfinder(!0);try{if(await this.key(["act","camera","pause"])==="act"){const s=this.room,a=s.def.noMasks?null:this.state.mask,o=s.photos.filter(c=>{if(c.cond&&!c.cond()||c.mask&&(c.mask==="none"?a:c.mask!==a))return!1;const h=c.x-t.x,u=c.z-t.z,d=Math.hypot(h,u);return d<1.8?!0:d<8&&(h*e.x+u*e.z)/d>.6});zt.viewfinder(!1);const l=this.R.snapshot();this.sfx("shutter"),this.flash(.8);const r=o.length?o.map(c=>c.name).join(", "):s.def.name;for(this.state.photos.push({id:"p"+Date.now().toString(36),img:l,caption:r,subjects:o.map(c=>c.id),room:s.id});this.state.photos.length>36;){const c=this.state.photos.findIndex(h=>!h.subjects.length);this.state.photos.splice(c>=0?c:0,1)}zt.toast("Снимок: "+r,"◉"),this.unfocus(),s.def.photo&&await s.def.photo(this,o.map(c=>c.id))}}finally{zt.viewfinder(!1),this.unfocus(),this.lock--,this.inPhoto=!1}}photographed(t){return this.state.photos.some(e=>e.subjects.includes(t))}key(t){return new Promise(e=>{const n=xi(s=>{t.includes(s)&&(n(),setTimeout(()=>e(s),0))})})}follow(t){this.followers.push(t)}unfollow(t){this.followers=this.followers.filter(e=>e!==t),t.moving=!1}setPlayerChar(t){this.state.f.playerChar=t,this.player.setChar(t)}onAction(t){if(!(!this.running||zt.modal||this.paused)){if(t==="pause"&&!this.inPhoto){(this.lock===0||zt.dialogOpen)&&zt.pause();return}if(t==="history"){zt.history();return}if(!(this.lock>0))if(t==="act"&&this.near){const e=this.near;this.sfx("click"),this.cut(()=>e.fn(this)).catch(n=>console.error("[game] ошибка взаимодействия",e.id,n))}else t==="mask1"?this.setMask("comedy"):t==="mask2"?this.setMask("tragedy"):t==="mask3"?this.setMask("drama"):t==="mask0"?this.state.mask&&this.setMask(this.state.mask):t==="camera"?this.photoMode():t==="notebook"?zt.notebook():this.room?.def.onKey&&this.room.def.onKey(this,t)}}hits(t,e,n=.38){const s=this.room,a=s.def.w/2-n,o=s.def.d/2-n;if(t<-a||t>a||e<-o||e>o)return!0;for(const l of s.boxes)if(l.on&&t>l.x0-n&&t<l.x1+n&&e>l.z0-n&&e<l.z1+n)return!0;return!1}los(t,e,n,s){for(let a=1;a<8;a++){const o=t+(n-t)*a/8,l=e+(s-e)*a/8;for(const r of this.room.boxes)if(r.on&&r.x1-r.x0>.9&&o>r.x0&&o<r.x1&&l>r.z0&&l<r.z1)return!1}return!0}frame(t){const e=this.room;if(!e||!this.running){this.R&&this.running,Ha();return}if(this.paused){this.R.render(0),Ha();return}this.t+=t,this.state.time+=t;const n=this.player;if(this.override)this.override(t);else if(this.lock===0&&!zt.modal){const f=S0(),b=Math.hypot(f.x,f.y)>.15;if(b){const M=this.playerSpeed*(Mi("run")?1.35:1)*t,S=n.x+f.x*M,C=n.z+f.y*M;this.hits(S,n.z)||(n.x=S),this.hits(n.x,C)||(n.z=C),n.dir=Math.abs(f.x)>Math.abs(f.y)?f.x>0?"r":"l":f.y>0?"f":"b",this.stepT-=t,this.stepT<=0&&(this.stepT=.3,this.sfx("step",{mat:e.def.step||"wood"}));const T=this.trail[this.trail.length-1];(!T||Math.hypot(T.x-n.x,T.z-n.z)>.35)&&(this.trail.push({x:n.x,z:n.z}),this.trail.length>40&&this.trail.shift())}n.moving=b;for(const M of e.triggers){const S=n.x>M.x0&&n.x<M.x1&&n.z>M.z0&&n.z<M.z1;if(S&&!M.inside&&!(M.once&&M.done)){M.done=!0,M.inside=!0,this.cut(()=>M.fn(this)).catch(C=>console.error("[game] ошибка триггера",C));break}M.inside=S}}else n.target||(n.moving=!1);this.followers.forEach((f,b)=>{const M=this.trail[this.trail.length-1-(b+1)*3];if(M&&Math.hypot(M.x-f.x,M.z-f.z)>.25&&Math.hypot(n.x-f.x,n.z-f.z)>1.3){const S=M.x-f.x,C=M.z-f.z,T=Math.hypot(S,C),w=Math.min(T,this.playerSpeed*1.05*t);f.x+=S/T*w,f.z+=C/T*w,f.face(M.x,M.z),f.moving=!0}else f.target||(f.moving=!1)});for(const f of e.actors)f.update(t);if(this.lock===0){for(const f of e.guards){if(!f.active){f.cone.visible=!1;continue}f.cone.visible=!0;const b=f.actor;if(f.off>0&&(f.off-=t,f.cone.visible=Math.floor(f.off*8)%2===0),f.wait>0)f.wait-=t;else if(!b.target&&f.path.length>1){f.i=(f.i+1)%f.path.length;const[M,S]=f.path[f.i];f.ang=Math.atan2(S-b.z,M-b.x),b.walkTo(M,S,f.speed).then(()=>{f.wait=f.pause})}if(f.cone.position.set(b.x,.05,b.z),f.cone.rotation.y=-f.ang,f.off<=0&&!n.hidden){const M=n.x-b.x,S=n.z-b.z,C=Math.hypot(M,S);let T=Math.atan2(S,M)-f.ang;for(;T>Math.PI;)T-=Math.PI*2;for(;T<-Math.PI;)T+=Math.PI*2;if(C<f.range&&Math.abs(T)<f.half&&this.los(b.x,b.z,n.x,n.z)){this.cut(()=>f.onCatch(this)).catch(w=>console.error(w));break}}}for(const f of e.lasers)if(f.on=f.active&&(this.t+f.phase)%f.period<f.duty*f.period,f.mesh.visible=f.on,f.on&&!n.hidden){const b=f.x1-f.x0,M=f.z1-f.z0,S=b*b+M*M;let C=((n.x-f.x0)*b+(n.z-f.z0)*M)/S;if(C=Wi(C,0,1),Math.hypot(n.x-f.x0-b*C,n.z-f.z0-M*C)<.4){this.cut(()=>f.onHit(this)).catch(T=>console.error(T));break}}}else for(const f of e.actors)!f.target&&f!==n&&!this.followers.includes(f)&&(f.moving=!1);for(const f of e.flick)f.l.intensity=f.base*(1+(Math.sin(this.t*13+f.base)*.5+Math.sin(this.t*31)*.5)*f.s);for(const f of e.updaters)f(t,this.t);e.def.update&&e.def.update(this,t,this.t);let s=null,a=1e9;if(this.lock===0&&!zt.modal)for(const f of e.inters){if(!f.enabled||f.cond&&!f.cond()){f.marker&&(f.marker.visible=!1);continue}const b=Math.hypot(f.x-n.x,f.z-n.z);f.marker&&(f.marker.visible=b<9,f.marker.position.y=f.y+.5+Math.sin(this.t*3+f.x)*.08,f.marker.rotation.y=this.t*2),b<f.r&&b<a&&(a=b,s=f)}this.near=s;const o=this.cam,l=o.focus,r=Math.max(0,e.def.w/2-9),c=Math.max(0,e.def.d/2-4.5),h=l?l.x:Wi(n.x,-r,r),u=l?l.z:Wi(n.z,-c,c),d=l?l.dist:e.def.camDist||24,g=Math.min(1,t*3.5);o.x+=(h-o.x)*g,o.z+=(u-o.z)*g,o.dist+=(d-o.dist)*g,o.shake=Math.max(0,o.shake-t*1.2);const p=(Math.random()-.5)*o.shake,v=(Math.random()-.5)*o.shake,m=this.R.cam.aspect<1?1.25:1;if(this.R.cam.position.set(o.x+p,o.yOff+Math.sin(o.pitch)*o.dist*m+v,o.z+Math.cos(o.pitch)*o.dist*m),this.R.cam.up.set(Math.sin(o.roll),Math.cos(o.roll),0),this.R.cam.lookAt(o.x+p,o.yOff,o.z),this.R.render(t),s){const f=new F(s.x,s.y+.9,s.z).project(this.R.cam);zt.prompt(s.label,(f.x+1)/2,(1-f.y)/2)}else zt.prompt(null);Ha()}}function Wi(i,t,e){return Math.max(t,Math.min(e,i))}function L0(i){return i==="l"?{x:-1,z:0}:i==="r"?{x:1,z:0}:i==="b"?{x:0,z:-1}:{x:0,z:1}}function wl(i){let t=5381;for(let e=0;e<i.length;e++)t=(t<<5)+t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function D0(i,t){const e=i.tint||[1,1,1],n=t.tint||[1,1,1];return{sat:(i.sat??1)*(t.sat??1),tint:[e[0]*n[0],e[1]*n[1],e[2]*n[2]],vig:Math.max(i.vig??.35,t.vig??0),bright:(i.bright??1)*(t.bright??1),contrast:(i.contrast??1)*(t.contrast??1)}}const Ut=new P0;window.__G=Ut;async function U0(){const i=document.getElementById("boot"),t=document.getElementById("boot-s");try{await Promise.all(['8px "Pixelify Sans"',"16px Lora",'16px "Playfair Display"','16px "Marck Script"',"16px Zaslia","16px Aurelia","16px Cintarini","16px Bastliga","16px Highcrest","16px Lombardina"].map(n=>document.fonts.load(n,"AБя").catch(s=>console.warn("[fonts]",n,s)))),zt.init(),Ut.boot(document.getElementById("game"));const e=()=>{Xt.init()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),await zt.mainMenu(),i.style.opacity="0",setTimeout(()=>i.remove(),700)}catch(e){console.error("[boot] игра не запустилась",e),t.textContent="Не удалось запустить игру: "+(e?.message||e)+". Проверьте, что браузер поддерживает WebGL, и обновите страницу."}}U0();export{nn as C,hc as F,Ut as G,ve as M,Fn as P,vn as _,on as a,Xt as b,js as c,Lr as p,I0 as r,zt as u};
