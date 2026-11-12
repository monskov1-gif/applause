const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hub-Dke9kPrT.js","./minigames-DnosK753.js","./polina-Doywjisu.js","./common-B1Or5pjn.js","./ruben-CEzXrAKz.js","./matvey-Z390SAJ-.js","./erika-BSlSS1Fu.js","./lisa-LAGFHGVM.js","./angelina-DeyGrSJR.js","./finale-DRPTLO2n.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const xu="modulepreload",yu=function(i,t){return new URL(i,t).href},Sl={},En=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=l?.nonce||l?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=yu(c,n),c in Sl)return;Sl[c]=!0;const h=c.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(!!n)for(let d=o.length-1;d>=0;d--){const v=o[d];if(v.href===c&&(!h||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${u}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":xu,h||(m.as="script"),m.crossOrigin="",m.href=c,a&&m.setAttribute("nonce",a),document.head.appendChild(m),h)return new Promise((d,v)=>{m.addEventListener("load",d),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Go="169",bu=0,wl=1,Mu=2,Qc=1,th=2,Fn=3,ei=0,Qe=1,Fe=2,Rn=0,xi=1,Ns=2,El=3,Tl=4,Su=5,pi=100,wu=101,Eu=102,Tu=103,Au=104,Cu=200,Ru=201,Pu=202,Lu=203,$a=204,Xa=205,Du=206,Iu=207,Uu=208,Nu=209,ku=210,Fu=211,Ou=212,Bu=213,zu=214,Ya=0,ja=1,Ka=2,ns=3,Za=4,Ja=5,Qa=6,to=7,Ho=0,Vu=1,Gu=2,Qn=0,eh=1,nh=2,ih=3,Wo=4,Hu=5,sh=6,rh=7,ah=300,is=301,ss=302,eo=303,no=304,qr=306,kr=1e3,vi=1001,io=1002,Le=1003,Wu=1004,Xs=1005,yn=1006,ea=1007,_i=1008,zn=1009,oh=1010,lh=1011,ks=1012,qo=1013,yi=1014,Cn=1015,Mn=1016,$o=1017,Xo=1018,rs=1020,ch=35902,hh=1021,uh=1022,bn=1023,fh=1024,dh=1025,Qi=1026,as=1027,Yo=1028,jo=1029,ph=1030,Ko=1031,Zo=1033,Tr=33776,Ar=33777,Cr=33778,Rr=33779,so=35840,ro=35841,ao=35842,oo=35843,lo=36196,co=37492,ho=37496,uo=37808,fo=37809,po=37810,mo=37811,go=37812,vo=37813,_o=37814,xo=37815,yo=37816,bo=37817,Mo=37818,So=37819,wo=37820,Eo=37821,Pr=36492,To=36494,Ao=36495,mh=36283,Co=36284,Ro=36285,Po=36286,qu=3200,gh=3201,Jo=0,$u=1,Kn="",fn="srgb",ni="srgb-linear",Qo="display-p3",$r="display-p3-linear",Fr="linear",pe="srgb",Or="rec709",Br="p3",Ei=7680,Al=519,Xu=512,Yu=513,ju=514,vh=515,Ku=516,Zu=517,Ju=518,Qu=519,Lo=35044,Cl="300 es",On=2e3,zr=2001;class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ge=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],na=Math.PI/180,Vr=180/Math.PI;function Bn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ge[i&255]+Ge[i>>8&255]+Ge[i>>16&255]+Ge[i>>24&255]+"-"+Ge[t&255]+Ge[t>>8&255]+"-"+Ge[t>>16&15|64]+Ge[t>>24&255]+"-"+Ge[e&63|128]+Ge[e>>8&255]+"-"+Ge[e>>16&255]+Ge[e>>24&255]+Ge[n&255]+Ge[n>>8&255]+Ge[n>>16&255]+Ge[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function tf(i,t){return(i%t+t)%t}function ia(i,t,e){return(1-e)*i+e*t}function An(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class nt{constructor(t=0,e=0){nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,r,o,l,a,c){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,a,c)}set(t,e,n,s,r,o,l,a,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=l,h[3]=e,h[4]=r,h[5]=a,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],h=n[4],u=n[7],p=n[2],m=n[5],d=n[8],v=s[0],f=s[3],g=s[6],x=s[1],y=s[4],b=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*v+l*x+a*R,r[3]=o*f+l*y+a*w,r[6]=o*g+l*b+a*A,r[1]=c*v+h*x+u*R,r[4]=c*f+h*y+u*w,r[7]=c*g+h*b+u*A,r[2]=p*v+m*x+d*R,r[5]=p*f+m*y+d*w,r[8]=p*g+m*b+d*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],h=t[8];return e*o*h-e*l*c-n*r*h+n*l*a+s*r*c-s*o*a}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],h=t[8],u=h*o-l*c,p=l*a-h*r,m=c*r-o*a,d=e*u+n*p+s*m;if(d===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/d;return t[0]=u*v,t[1]=(s*c-h*n)*v,t[2]=(l*n-s*o)*v,t[3]=p*v,t[4]=(h*e-s*a)*v,t[5]=(s*r-l*e)*v,t[6]=m*v,t[7]=(n*a-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,l){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+t,-s*c,s*a,-s*(-c*o+a*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(sa.makeScale(t,e)),this}rotate(t){return this.premultiply(sa.makeRotation(-t)),this}translate(t,e){return this.premultiply(sa.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const sa=new jt;function _h(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=Gr("canvas");return i.style.display="block",i}const Rl={};function Lr(i){i in Rl||(Rl[i]=!0,console.warn(i))}function nf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function sf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function rf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Pl=new jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Ll=new jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[ni]:{transfer:Fr,primaries:Or,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[fn]:{transfer:pe,primaries:Or,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$r]:{transfer:Fr,primaries:Br,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl)},[Qo]:{transfer:pe,primaries:Br,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Ll),fromReference:i=>i.applyMatrix3(Pl).convertLinearToSRGB()}},af=new Set([ni,$r]),se={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!af.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=gs[t].toReference,s=gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===Kn?Fr:gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(gs[t].luminanceCoefficients)}};function ts(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ra(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ti;class of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ti===void 0&&(Ti=Gr("canvas")),Ti.width=t.width,Ti.height=t.height;const n=Ti.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ti}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Gr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ts(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ts(e[n]/255)*255):e[n]=ts(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lf=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(aa(s[o].image)):r.push(aa(s[o]))}else r=aa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function aa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cf=0;class $e extends ds{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,n=vi,s=vi,r=yn,o=_i,l=bn,a=zn,c=$e.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Bn(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kr:t.x=t.x-Math.floor(t.x);break;case vi:t.x=t.x<0?0:1;break;case io:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kr:t.y=t.y-Math.floor(t.y);break;case vi:t.y=t.y<0?0:1;break;case io:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=ah;$e.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const a=t.elements,c=a[0],h=a[4],u=a[8],p=a[1],m=a[5],d=a[9],v=a[2],f=a[6],g=a[10];if(Math.abs(h-p)<.01&&Math.abs(u-v)<.01&&Math.abs(d-f)<.01){if(Math.abs(h+p)<.1&&Math.abs(u+v)<.1&&Math.abs(d+f)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,b=(m+1)/2,R=(g+1)/2,w=(h+p)/4,A=(u+v)/4,U=(d+f)/4;return y>b&&y>R?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=w/n,r=A/n):b>R?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=w/s,r=U/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=U/r),this.set(n,s,r,e),this}let x=Math.sqrt((f-d)*(f-d)+(u-v)*(u-v)+(p-h)*(p-h));return Math.abs(x)<.001&&(x=1),this.x=(f-d)/x,this.y=(u-v)/x,this.z=(p-h)/x,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hf extends ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new $e(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class on extends hf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yh extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class uf extends $e{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Le,this.minFilter=Le,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,l){let a=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const p=r[o+0],m=r[o+1],d=r[o+2],v=r[o+3];if(l===0){t[e+0]=a,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(l===1){t[e+0]=p,t[e+1]=m,t[e+2]=d,t[e+3]=v;return}if(u!==v||a!==p||c!==m||h!==d){let f=1-l;const g=a*p+c*m+h*d+u*v,x=g>=0?1:-1,y=1-g*g;if(y>Number.EPSILON){const R=Math.sqrt(y),w=Math.atan2(R,g*x);f=Math.sin(f*w)/R,l=Math.sin(l*w)/R}const b=l*x;if(a=a*f+p*b,c=c*f+m*b,h=h*f+d*b,u=u*f+v*b,f===1-l){const R=1/Math.sqrt(a*a+c*c+h*h+u*u);a*=R,c*=R,h*=R,u*=R}}t[e]=a,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const l=n[s],a=n[s+1],c=n[s+2],h=n[s+3],u=r[o],p=r[o+1],m=r[o+2],d=r[o+3];return t[e]=l*d+h*u+a*m-c*p,t[e+1]=a*d+h*p+c*u-l*m,t[e+2]=c*d+h*m+l*p-a*u,t[e+3]=h*d-l*u-a*p-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,a=Math.sin,c=l(n/2),h=l(s/2),u=l(r/2),p=a(n/2),m=a(s/2),d=a(r/2);switch(o){case"XYZ":this._x=p*h*u+c*m*d,this._y=c*m*u-p*h*d,this._z=c*h*d+p*m*u,this._w=c*h*u-p*m*d;break;case"YXZ":this._x=p*h*u+c*m*d,this._y=c*m*u-p*h*d,this._z=c*h*d-p*m*u,this._w=c*h*u+p*m*d;break;case"ZXY":this._x=p*h*u-c*m*d,this._y=c*m*u+p*h*d,this._z=c*h*d+p*m*u,this._w=c*h*u-p*m*d;break;case"ZYX":this._x=p*h*u-c*m*d,this._y=c*m*u+p*h*d,this._z=c*h*d-p*m*u,this._w=c*h*u+p*m*d;break;case"YZX":this._x=p*h*u+c*m*d,this._y=c*m*u+p*h*d,this._z=c*h*d-p*m*u,this._w=c*h*u-p*m*d;break;case"XZY":this._x=p*h*u-c*m*d,this._y=c*m*u-p*h*d,this._z=c*h*d+p*m*u,this._w=c*h*u+p*m*d;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],l=e[5],a=e[9],c=e[2],h=e[6],u=e[10],p=n+l+u;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(h-a)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>l&&n>u){const m=2*Math.sqrt(1+n-l-u);this._w=(h-a)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(l>u){const m=2*Math.sqrt(1+l-n-u);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(a+h)/m}else{const m=2*Math.sqrt(1+u-n-l);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(a+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,l=e._x,a=e._y,c=e._z,h=e._w;return this._x=n*h+o*l+s*c-r*a,this._y=s*h+o*a+r*l-n*c,this._z=r*h+o*c+n*a-s*l,this._w=o*h-n*l-s*a-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let l=o*t._w+n*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const a=1-l*l;if(a<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(a),h=Math.atan2(c,l),u=Math.sin((1-e)*h)/c,p=Math.sin(e*h)/c;return this._w=o*u+this._w*p,this._x=n*u+this._x*p,this._y=s*u+this._y*p,this._z=r*u+this._z*p,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Dl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Dl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,l=t.z,a=t.w,c=2*(o*s-l*n),h=2*(l*e-r*s),u=2*(r*n-o*e);return this.x=e+a*c+o*u-l*h,this.y=n+a*h+l*c-r*u,this.z=s+a*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,l=e.y,a=e.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return oa.copy(this).projectOnVector(t),this.sub(oa)}reflect(t){return this.sub(oa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const oa=new D,Dl=new Gs;class Mi{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,vn):vn.fromBufferAttribute(r,o),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),js.subVectors(this.max,vs),Ai.subVectors(t.a,vs),Ci.subVectors(t.b,vs),Ri.subVectors(t.c,vs),Gn.subVectors(Ci,Ai),Hn.subVectors(Ri,Ci),ai.subVectors(Ai,Ri);let e=[0,-Gn.z,Gn.y,0,-Hn.z,Hn.y,0,-ai.z,ai.y,Gn.z,0,-Gn.x,Hn.z,0,-Hn.x,ai.z,0,-ai.x,-Gn.y,Gn.x,0,-Hn.y,Hn.x,0,-ai.y,ai.x,0];return!la(e,Ai,Ci,Ri,js)||(e=[1,0,0,0,1,0,0,0,1],!la(e,Ai,Ci,Ri,js))?!1:(Ks.crossVectors(Gn,Hn),e=[Ks.x,Ks.y,Ks.z],la(e,Ai,Ci,Ri,js))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new D,new D,new D,new D,new D,new D,new D,new D],vn=new D,Ys=new Mi,Ai=new D,Ci=new D,Ri=new D,Gn=new D,Hn=new D,ai=new D,vs=new D,js=new D,Ks=new D,oi=new D;function la(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const l=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),a=t.dot(oi),c=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(a,c,h),Math.min(a,c,h))>l)return!1}return!0}const ff=new Mi,_s=new D,ca=new D;class ps{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):ff.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ca.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(ca)),this.expandByPoint(_s.copy(t.center).sub(ca))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new D,ha=new D,Zs=new D,Wn=new D,ua=new D,Js=new D,fa=new D;class bh{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ha.copy(t).add(e).multiplyScalar(.5),Zs.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(ha);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Zs),l=Wn.dot(this.direction),a=-Wn.dot(Zs),c=Wn.lengthSq(),h=Math.abs(1-o*o);let u,p,m,d;if(h>0)if(u=o*a-l,p=o*l-a,d=r*h,u>=0)if(p>=-d)if(p<=d){const v=1/h;u*=v,p*=v,m=u*(u+o*p+2*l)+p*(o*u+p+2*a)+c}else p=r,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*a)+c;else p=-r,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*a)+c;else p<=-d?(u=Math.max(0,-(-o*r+l)),p=u>0?-r:Math.min(Math.max(-r,-a),r),m=-u*u+p*(p+2*a)+c):p<=d?(u=0,p=Math.min(Math.max(-r,-a),r),m=p*(p+2*a)+c):(u=Math.max(0,-(o*r+l)),p=u>0?r:Math.min(Math.max(-r,-a),r),m=-u*u+p*(p+2*a)+c);else p=o>0?-r:r,u=Math.max(0,-(o*p+l)),m=-u*u+p*(p+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ha).addScaledVector(Zs,p),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);const n=In.dot(this.direction),s=In.dot(In)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,l,a;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,p=this.origin;return c>=0?(n=(t.min.x-p.x)*c,s=(t.max.x-p.x)*c):(n=(t.max.x-p.x)*c,s=(t.min.x-p.x)*c),h>=0?(r=(t.min.y-p.y)*h,o=(t.max.y-p.y)*h):(r=(t.max.y-p.y)*h,o=(t.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(l=(t.min.z-p.z)*u,a=(t.max.z-p.z)*u):(l=(t.max.z-p.z)*u,a=(t.min.z-p.z)*u),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,n,s,r){ua.subVectors(e,t),Js.subVectors(n,t),fa.crossVectors(ua,Js);let o=this.direction.dot(fa),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Wn.subVectors(this.origin,t);const a=l*this.direction.dot(Js.crossVectors(Wn,Js));if(a<0)return null;const c=l*this.direction.dot(ua.cross(Wn));if(c<0||a+c>o)return null;const h=-l*Wn.dot(fa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ee{constructor(t,e,n,s,r,o,l,a,c,h,u,p,m,d,v,f){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,a,c,h,u,p,m,d,v,f)}set(t,e,n,s,r,o,l,a,c,h,u,p,m,d,v,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=l,g[13]=a,g[2]=c,g[6]=h,g[10]=u,g[14]=p,g[3]=m,g[7]=d,g[11]=v,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Pi.setFromMatrixColumn(t,0).length(),r=1/Pi.setFromMatrixColumn(t,1).length(),o=1/Pi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const p=o*h,m=o*u,d=l*h,v=l*u;e[0]=a*h,e[4]=-a*u,e[8]=c,e[1]=m+d*c,e[5]=p-v*c,e[9]=-l*a,e[2]=v-p*c,e[6]=d+m*c,e[10]=o*a}else if(t.order==="YXZ"){const p=a*h,m=a*u,d=c*h,v=c*u;e[0]=p+v*l,e[4]=d*l-m,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-l,e[2]=m*l-d,e[6]=v+p*l,e[10]=o*a}else if(t.order==="ZXY"){const p=a*h,m=a*u,d=c*h,v=c*u;e[0]=p-v*l,e[4]=-o*u,e[8]=d+m*l,e[1]=m+d*l,e[5]=o*h,e[9]=v-p*l,e[2]=-o*c,e[6]=l,e[10]=o*a}else if(t.order==="ZYX"){const p=o*h,m=o*u,d=l*h,v=l*u;e[0]=a*h,e[4]=d*c-m,e[8]=p*c+v,e[1]=a*u,e[5]=v*c+p,e[9]=m*c-d,e[2]=-c,e[6]=l*a,e[10]=o*a}else if(t.order==="YZX"){const p=o*a,m=o*c,d=l*a,v=l*c;e[0]=a*h,e[4]=v-p*u,e[8]=d*u+m,e[1]=u,e[5]=o*h,e[9]=-l*h,e[2]=-c*h,e[6]=m*u+d,e[10]=p-v*u}else if(t.order==="XZY"){const p=o*a,m=o*c,d=l*a,v=l*c;e[0]=a*h,e[4]=-u,e[8]=c*h,e[1]=p*u+v,e[5]=o*h,e[9]=m*u-d,e[2]=d*u-m,e[6]=l*h,e[10]=v*u+p}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,pf)}lookAt(t,e,n){const s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),qn.crossVectors(n,nn),qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),qn.crossVectors(n,nn)),qn.normalize(),Qs.crossVectors(nn,qn),s[0]=qn.x,s[4]=Qs.x,s[8]=nn.x,s[1]=qn.y,s[5]=Qs.y,s[9]=nn.y,s[2]=qn.z,s[6]=Qs.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],h=n[1],u=n[5],p=n[9],m=n[13],d=n[2],v=n[6],f=n[10],g=n[14],x=n[3],y=n[7],b=n[11],R=n[15],w=s[0],A=s[4],U=s[8],I=s[12],_=s[1],S=s[5],V=s[9],B=s[13],L=s[2],k=s[6],N=s[10],J=s[14],q=s[3],lt=s[7],mt=s[11],gt=s[15];return r[0]=o*w+l*_+a*L+c*q,r[4]=o*A+l*S+a*k+c*lt,r[8]=o*U+l*V+a*N+c*mt,r[12]=o*I+l*B+a*J+c*gt,r[1]=h*w+u*_+p*L+m*q,r[5]=h*A+u*S+p*k+m*lt,r[9]=h*U+u*V+p*N+m*mt,r[13]=h*I+u*B+p*J+m*gt,r[2]=d*w+v*_+f*L+g*q,r[6]=d*A+v*S+f*k+g*lt,r[10]=d*U+v*V+f*N+g*mt,r[14]=d*I+v*B+f*J+g*gt,r[3]=x*w+y*_+b*L+R*q,r[7]=x*A+y*S+b*k+R*lt,r[11]=x*U+y*V+b*N+R*mt,r[15]=x*I+y*B+b*J+R*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],l=t[5],a=t[9],c=t[13],h=t[2],u=t[6],p=t[10],m=t[14],d=t[3],v=t[7],f=t[11],g=t[15];return d*(+r*a*u-s*c*u-r*l*p+n*c*p+s*l*m-n*a*m)+v*(+e*a*m-e*c*p+r*o*p-s*o*m+s*c*h-r*a*h)+f*(+e*c*u-e*l*m-r*o*u+n*o*m+r*l*h-n*c*h)+g*(-s*l*h-e*a*u+e*l*p+s*o*u-n*o*p+n*a*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],h=t[8],u=t[9],p=t[10],m=t[11],d=t[12],v=t[13],f=t[14],g=t[15],x=u*f*c-v*p*c+v*a*m-l*f*m-u*a*g+l*p*g,y=d*p*c-h*f*c-d*a*m+o*f*m+h*a*g-o*p*g,b=h*v*c-d*u*c+d*l*m-o*v*m-h*l*g+o*u*g,R=d*u*a-h*v*a-d*l*p+o*v*p+h*l*f-o*u*f,w=e*x+n*y+s*b+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(v*p*r-u*f*r-v*s*m+n*f*m+u*s*g-n*p*g)*A,t[2]=(l*f*r-v*a*r+v*s*c-n*f*c-l*s*g+n*a*g)*A,t[3]=(u*a*r-l*p*r-u*s*c+n*p*c+l*s*m-n*a*m)*A,t[4]=y*A,t[5]=(h*f*r-d*p*r+d*s*m-e*f*m-h*s*g+e*p*g)*A,t[6]=(d*a*r-o*f*r-d*s*c+e*f*c+o*s*g-e*a*g)*A,t[7]=(o*p*r-h*a*r+h*s*c-e*p*c-o*s*m+e*a*m)*A,t[8]=b*A,t[9]=(d*u*r-h*v*r-d*n*m+e*v*m+h*n*g-e*u*g)*A,t[10]=(o*v*r-d*l*r+d*n*c-e*v*c-o*n*g+e*l*g)*A,t[11]=(h*l*r-o*u*r-h*n*c+e*u*c+o*n*m-e*l*m)*A,t[12]=R*A,t[13]=(h*v*s-d*u*s+d*n*p-e*v*p-h*n*f+e*u*f)*A,t[14]=(d*l*s-o*v*s-d*n*a+e*v*a+o*n*f-e*l*f)*A,t[15]=(o*u*s-h*l*s+h*n*a-e*u*a-o*n*p+e*l*p)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,l=t.y,a=t.z,c=r*o,h=r*l;return this.set(c*o+n,c*l-s*a,c*a+s*l,0,c*l+s*a,h*l+n,h*a-s*o,0,c*a-s*l,h*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,l=e._z,a=e._w,c=r+r,h=o+o,u=l+l,p=r*c,m=r*h,d=r*u,v=o*h,f=o*u,g=l*u,x=a*c,y=a*h,b=a*u,R=n.x,w=n.y,A=n.z;return s[0]=(1-(v+g))*R,s[1]=(m+b)*R,s[2]=(d-y)*R,s[3]=0,s[4]=(m-b)*w,s[5]=(1-(p+g))*w,s[6]=(f+x)*w,s[7]=0,s[8]=(d+y)*A,s[9]=(f-x)*A,s[10]=(1-(p+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Pi.set(s[0],s[1],s[2]).length();const o=Pi.set(s[4],s[5],s[6]).length(),l=Pi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const c=1/r,h=1/o,u=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,o,l=On){const a=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),p=(n+s)/(n-s);let m,d;if(l===On)m=-(o+r)/(o-r),d=-2*o*r/(o-r);else if(l===zr)m=-o/(o-r),d=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=h,a[9]=p,a[13]=0,a[2]=0,a[6]=0,a[10]=m,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,s,r,o,l=On){const a=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),p=(e+t)*c,m=(n+s)*h;let d,v;if(l===On)d=(o+r)*u,v=-2*u;else if(l===zr)d=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-p,a[1]=0,a[5]=2*h,a[9]=0,a[13]=-m,a[2]=0,a[6]=0,a[10]=v,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Pi=new D,_n=new ee,df=new D(0,0,0),pf=new D(1,1,1),qn=new D,Qs=new D,nn=new D,Il=new ee,Ul=new Gs;class wn{constructor(t=0,e=0,n=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],l=s[8],a=s[1],c=s[5],h=s[9],u=s[2],p=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ul.setFromEuler(this),this.setFromQuaternion(Ul,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class Mh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mf=0;const Nl=new D,Li=new Gs,Un=new ee,tr=new D,xs=new D,gf=new D,vf=new Gs,kl=new D(1,0,0),Fl=new D(0,1,0),Ol=new D(0,0,1),Bl={type:"added"},_f={type:"removed"},Di={type:"childadded",child:null},da={type:"childremoved",child:null};class Se extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mf++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new D,e=new wn,n=new Gs,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new jt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Mh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.multiply(Li),this}rotateOnWorldAxis(t,e){return Li.setFromAxisAngle(t,e),this.quaternion.premultiply(Li),this}rotateX(t){return this.rotateOnAxis(kl,t)}rotateY(t){return this.rotateOnAxis(Fl,t)}rotateZ(t){return this.rotateOnAxis(Ol,t)}translateOnAxis(t,e){return Nl.copy(t).applyQuaternion(this.quaternion),this.position.add(Nl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kl,t)}translateY(t){return this.translateOnAxis(Fl,t)}translateZ(t){return this.translateOnAxis(Ol,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?tr.copy(t):tr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(xs,tr,this.up):Un.lookAt(tr,xs,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Li.setFromRotationMatrix(Un),this.quaternion.premultiply(Li.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bl),Di.child=t,this.dispatchEvent(Di),Di.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),da.child=t,this.dispatchEvent(da),da.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bl),Di.child=t,this.dispatchEvent(Di),Di.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,gf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,vf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,h=a.length;c<h;c++){const u=a[c];r(t.shapes,u)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(t.materials,this.material[a]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];s.animations.push(r(t.animations,a))}}if(e){const l=o(t.geometries),a=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),p=o(t.skeletons),m=o(t.animations),d=o(t.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),d.length>0&&(n.nodes=d)}return n.object=s,n;function o(l){const a=[];for(const c in l){const h=l[c];delete h.metadata,a.push(h)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Se.DEFAULT_UP=new D(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,Nn=new D,pa=new D,kn=new D,Ii=new D,Ui=new D,zl=new D,ma=new D,ga=new D,va=new D,_a=new ue,xa=new ue,ya=new ue;class dn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),Nn.subVectors(n,e),pa.subVectors(t,e);const o=xn.dot(xn),l=xn.dot(Nn),a=xn.dot(pa),c=Nn.dot(Nn),h=Nn.dot(pa),u=o*c-l*l;if(u===0)return r.set(0,0,0),null;const p=1/u,m=(c*a-l*h)*p,d=(o*h-l*a)*p;return r.set(1-m-d,d,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,kn)===null?!1:kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getInterpolation(t,e,n,s,r,o,l,a){return this.getBarycoord(t,e,n,s,kn)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,kn.x),a.addScaledVector(o,kn.y),a.addScaledVector(l,kn.z),a)}static getInterpolatedAttribute(t,e,n,s,r,o){return _a.setScalar(0),xa.setScalar(0),ya.setScalar(0),_a.fromBufferAttribute(t,e),xa.fromBufferAttribute(t,n),ya.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(_a,r.x),o.addScaledVector(xa,r.y),o.addScaledVector(ya,r.z),o}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),Nn.subVectors(t,e),xn.cross(Nn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),xn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,l;Ii.subVectors(s,n),Ui.subVectors(r,n),ma.subVectors(t,n);const a=Ii.dot(ma),c=Ui.dot(ma);if(a<=0&&c<=0)return e.copy(n);ga.subVectors(t,s);const h=Ii.dot(ga),u=Ui.dot(ga);if(h>=0&&u<=h)return e.copy(s);const p=a*u-h*c;if(p<=0&&a>=0&&h<=0)return o=a/(a-h),e.copy(n).addScaledVector(Ii,o);va.subVectors(t,r);const m=Ii.dot(va),d=Ui.dot(va);if(d>=0&&m<=d)return e.copy(r);const v=m*c-a*d;if(v<=0&&c>=0&&d<=0)return l=c/(c-d),e.copy(n).addScaledVector(Ui,l);const f=h*d-m*u;if(f<=0&&u-h>=0&&m-d>=0)return zl.subVectors(r,s),l=(u-h)/(u-h+(m-d)),e.copy(s).addScaledVector(zl,l);const g=1/(f+v+p);return o=v*g,l=p*g,e.copy(n).addScaledVector(Ii,o).addScaledVector(Ui,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},er={h:0,s:0,l:0};function ba(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Vt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=fn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=tf(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ba(o,r,t+1/3),this.g=ba(o,r,t),this.b=ba(o,r,t-1/3)}return se.toWorkingColorSpace(this,s),this}setStyle(t,e=fn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=fn){const n=Sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ts(t.r),this.g=ts(t.g),this.b=ts(t.b),this}copyLinearToSRGB(t){return this.r=ra(t.r),this.g=ra(t.g),this.b=ra(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fn){return se.fromWorkingColorSpace(He.copy(this),t),Math.round(ze(He.r*255,0,255))*65536+Math.round(ze(He.g*255,0,255))*256+Math.round(ze(He.b*255,0,255))}getHexString(t=fn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.fromWorkingColorSpace(He.copy(this),e);const n=He.r,s=He.g,r=He.b,o=Math.max(n,s,r),l=Math.min(n,s,r);let a,c;const h=(l+o)/2;if(l===o)a=0,c=0;else{const u=o-l;switch(c=h<=.5?u/(o+l):u/(2-o-l),o){case n:a=(s-r)/u+(s<r?6:0);break;case s:a=(r-n)/u+2;break;case r:a=(n-s)/u+4;break}a/=6}return t.h=a,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=fn){se.fromWorkingColorSpace(He.copy(this),t);const e=He.r,n=He.g,s=He.b;return t!==fn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL($n),this.setHSL($n.h+t,$n.s+e,$n.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($n),t.getHSL(er);const n=ia($n.h,er.h,e),s=ia($n.s,er.s,e),r=ia($n.l,er.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const He=new Vt;Vt.NAMES=Sh;let xf=0;class ii extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=xi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$a,this.blendDst=Xa,this.blendEquation=pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ei,this.stencilZFail=Ei,this.stencilZPass=Ei,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$a&&(n.blendSrc=this.blendSrc),this.blendDst!==Xa&&(n.blendDst=this.blendDst),this.blendEquation!==pi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ns&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ei&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ei&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ei&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const l in r){const a=r[l];delete a.metadata,o.push(a)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class an extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ce=new D,nr=new nt;class ln{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lo,this.updateRanges=[],this.gpuType=Cn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)nr.fromBufferAttribute(this,e),nr.applyMatrix3(t),this.setXY(e,nr.x,nr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix3(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyMatrix4(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.applyNormalMatrix(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ce.fromBufferAttribute(this,e),Ce.transformDirection(t),this.setXYZ(e,Ce.x,Ce.y,Ce.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lo&&(t.usage=this.usage),t}}class wh extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yf=0;const un=new ee,Ma=new Se,Ni=new D,sn=new Mi,ys=new Mi,ke=new D;class Ne extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_h(t)?Eh:wh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new jt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Ma.lookAt(t),Ma.updateMatrix(),this.applyMatrix4(Ma.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ne(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(ke.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(ke),ke.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(ke)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const l=e[r];ys.setFromBufferAttribute(l),this.morphTargetsRelative?(ke.addVectors(sn.min,ys.min),sn.expandByPoint(ke),ke.addVectors(sn.max,ys.max),sn.expandByPoint(ke)):(sn.expandByPoint(ys.min),sn.expandByPoint(ys.max))}sn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ke.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ke));if(e)for(let r=0,o=e.length;r<o;r++){const l=e[r],a=this.morphTargetsRelative;for(let c=0,h=l.count;c<h;c++)ke.fromBufferAttribute(l,c),a&&(Ni.fromBufferAttribute(t,c),ke.add(Ni)),s=Math.max(s,n.distanceToSquared(ke))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],a=[];for(let U=0;U<n.count;U++)l[U]=new D,a[U]=new D;const c=new D,h=new D,u=new D,p=new nt,m=new nt,d=new nt,v=new D,f=new D;function g(U,I,_){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,I),u.fromBufferAttribute(n,_),p.fromBufferAttribute(r,U),m.fromBufferAttribute(r,I),d.fromBufferAttribute(r,_),h.sub(c),u.sub(c),m.sub(p),d.sub(p);const S=1/(m.x*d.y-d.x*m.y);isFinite(S)&&(v.copy(h).multiplyScalar(d.y).addScaledVector(u,-m.y).multiplyScalar(S),f.copy(u).multiplyScalar(m.x).addScaledVector(h,-d.x).multiplyScalar(S),l[U].add(v),l[I].add(v),l[_].add(v),a[U].add(f),a[I].add(f),a[_].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let U=0,I=x.length;U<I;++U){const _=x[U],S=_.start,V=_.count;for(let B=S,L=S+V;B<L;B+=3)g(t.getX(B+0),t.getX(B+1),t.getX(B+2))}const y=new D,b=new D,R=new D,w=new D;function A(U){R.fromBufferAttribute(s,U),w.copy(R);const I=l[U];y.copy(I),y.sub(R.multiplyScalar(R.dot(I))).normalize(),b.crossVectors(w,I);const S=b.dot(a[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,S)}for(let U=0,I=x.length;U<I;++U){const _=x[U],S=_.start,V=_.count;for(let B=S,L=S+V;B<L;B+=3)A(t.getX(B+0)),A(t.getX(B+1)),A(t.getX(B+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new D,r=new D,o=new D,l=new D,a=new D,c=new D,h=new D,u=new D;if(t)for(let p=0,m=t.count;p<m;p+=3){const d=t.getX(p+0),v=t.getX(p+1),f=t.getX(p+2);s.fromBufferAttribute(e,d),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),l.fromBufferAttribute(n,d),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),l.add(h),a.add(h),c.add(h),n.setXYZ(d,l.x,l.y,l.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=e.count;p<m;p+=3)s.fromBufferAttribute(e,p+0),r.fromBufferAttribute(e,p+1),o.fromBufferAttribute(e,p+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ke.fromBufferAttribute(t,e),ke.normalize(),t.setXYZ(e,ke.x,ke.y,ke.z)}toNonIndexed(){function t(l,a){const c=l.array,h=l.itemSize,u=l.normalized,p=new c.constructor(a.length*h);let m=0,d=0;for(let v=0,f=a.length;v<f;v++){l.isInterleavedBufferAttribute?m=a[v]*l.data.stride+l.offset:m=a[v]*h;for(let g=0;g<h;g++)p[d++]=c[m++]}return new ln(p,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ne,n=this.index.array,s=this.attributes;for(const l in s){const a=s[l],c=t(a,n);e.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const a=[],c=r[l];for(let h=0,u=c.length;h<u;h++){const p=c[h],m=t(p,n);a.push(m)}e.morphAttributes[l]=a}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a];t.data.attributes[a]=c.toJSON(t.data)}const s={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],h=[];for(let u=0,p=c.length;u<p;u++){const m=c[u];h.push(m.toJSON(t.data))}h.length>0&&(s[a]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let p=0,m=u.length;p<m;p++)h.push(u[p].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Vl=new ee,li=new bh,ir=new ps,Gl=new D,sr=new D,rr=new D,ar=new D,Sa=new D,or=new D,Hl=new D,lr=new D;class _t extends Se{constructor(t=new Ne,e=new an){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){or.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const h=l[a],u=r[a];h!==0&&(Sa.fromBufferAttribute(u,t),o?or.addScaledVector(Sa,h):or.addScaledVector(Sa.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(ir.containsPoint(li.origin)===!1&&(li.intersectSphere(ir,Gl)===null||li.origin.distanceToSquared(Gl)>(t.far-t.near)**2))&&(Vl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Vl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,p=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(o))for(let d=0,v=p.length;d<v;d++){const f=p[d],g=o[f.materialIndex],x=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let b=x,R=y;b<R;b+=3){const w=l.getX(b),A=l.getX(b+1),U=l.getX(b+2);s=cr(this,g,t,n,c,h,u,w,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const d=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=d,g=v;f<g;f+=3){const x=l.getX(f),y=l.getX(f+1),b=l.getX(f+2);s=cr(this,o,t,n,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let d=0,v=p.length;d<v;d++){const f=p[d],g=o[f.materialIndex],x=Math.max(f.start,m.start),y=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let b=x,R=y;b<R;b+=3){const w=b,A=b+1,U=b+2;s=cr(this,g,t,n,c,h,u,w,A,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const d=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=d,g=v;f<g;f+=3){const x=f,y=f+1,b=f+2;s=cr(this,o,t,n,c,h,u,x,y,b),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function bf(i,t,e,n,s,r,o,l){let a;if(t.side===Qe?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,t.side===ei,l),a===null)return null;lr.copy(l),lr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(lr);return c<e.near||c>e.far?null:{distance:c,point:lr.clone(),object:i}}function cr(i,t,e,n,s,r,o,l,a,c){i.getVertexPosition(l,sr),i.getVertexPosition(a,rr),i.getVertexPosition(c,ar);const h=bf(i,t,e,n,sr,rr,ar,Hl);if(h){const u=new D;dn.getBarycoord(Hl,sr,rr,ar,u),s&&(h.uv=dn.getInterpolatedAttribute(s,l,a,c,u,new nt)),r&&(h.uv1=dn.getInterpolatedAttribute(r,l,a,c,u,new nt)),o&&(h.normal=dn.getInterpolatedAttribute(o,l,a,c,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const p={a:l,b:a,c,normal:new D,materialIndex:0};dn.getNormal(sr,rr,ar,p.normal),h.face=p,h.barycoord=u}return h}class je extends Ne{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],h=[],u=[];let p=0,m=0;d("z","y","x",-1,-1,n,e,t,o,r,0),d("z","y","x",1,-1,n,e,-t,o,r,1),d("x","z","y",1,1,t,n,e,s,o,2),d("x","z","y",1,-1,t,n,-e,s,o,3),d("x","y","z",1,-1,t,e,n,s,r,4),d("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function d(v,f,g,x,y,b,R,w,A,U,I){const _=b/A,S=R/U,V=b/2,B=R/2,L=w/2,k=A+1,N=U+1;let J=0,q=0;const lt=new D;for(let mt=0;mt<N;mt++){const gt=mt*S-B;for(let Xt=0;Xt<k;Xt++){const Kt=Xt*_-V;lt[v]=Kt*x,lt[f]=gt*y,lt[g]=L,c.push(lt.x,lt.y,lt.z),lt[v]=0,lt[f]=0,lt[g]=w>0?1:-1,h.push(lt.x,lt.y,lt.z),u.push(Xt/A),u.push(1-mt/U),J+=1}}for(let mt=0;mt<U;mt++)for(let gt=0;gt<A;gt++){const Xt=p+gt+k*mt,Kt=p+gt+k*(mt+1),X=p+(gt+1)+k*(mt+1),et=p+(gt+1)+k*mt;a.push(Xt,Kt,et),a.push(Kt,X,et),q+=6}l.addGroup(m,q,I),m+=q,p+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new je(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function os(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ye(i){const t={};for(let e=0;e<i.length;e++){const n=os(i[e]);for(const s in n)t[s]=n[s]}return t}function Mf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Th(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}const ls={clone:os,merge:Ye};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qe extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=wf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=os(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Ah extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=On}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new D,Wl=new nt,ql=new nt;class Je extends Ah{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Vr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(na*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vr*2*Math.atan(Math.tan(na*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Wl,ql),e.subVectors(ql,Wl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(na*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/a,e-=o.offsetY*n/c,s*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ki=-90,Fi=1;class Ef extends Se{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Je(ki,Fi,t,e);s.layers=this.layers,this.add(s);const r=new Je(ki,Fi,t,e);r.layers=this.layers,this.add(r);const o=new Je(ki,Fi,t,e);o.layers=this.layers,this.add(o);const l=new Je(ki,Fi,t,e);l.layers=this.layers,this.add(l);const a=new Je(ki,Fi,t,e);a.layers=this.layers,this.add(a);const c=new Je(ki,Fi,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,l,a]=e;for(const c of e)this.remove(c);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===zr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,a,c,h]=this.children,u=t.getRenderTarget(),p=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),d=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,a),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,p,m),t.xr.enabled=d,n.texture.needsPMREMUpdate=!0}}class Ch extends $e{constructor(t,e,n,s,r,o,l,a,c,h){t=t!==void 0?t:[],e=e!==void 0?e:is,super(t,e,n,s,r,o,l,a,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Tf extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ch(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new je(5,5,5),r=new qe({name:"CubemapFromEquirect",uniforms:os(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Qe,blending:Rn});r.uniforms.tEquirect.value=e;const o=new _t(s,r),l=e.minFilter;return e.minFilter===_i&&(e.minFilter=yn),new Ef(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const wa=new D,Af=new D,Cf=new jt;class fi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=wa.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(wa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Cf.getNormalMatrix(t),s=this.coplanarPoint(wa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ps,hr=new D;class tl{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,o=new fi){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On){const n=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],a=s[3],c=s[4],h=s[5],u=s[6],p=s[7],m=s[8],d=s[9],v=s[10],f=s[11],g=s[12],x=s[13],y=s[14],b=s[15];if(n[0].setComponents(a-r,p-c,f-m,b-g).normalize(),n[1].setComponents(a+r,p+c,f+m,b+g).normalize(),n[2].setComponents(a+o,p+h,f+d,b+x).normalize(),n[3].setComponents(a-o,p-h,f-d,b-x).normalize(),n[4].setComponents(a-l,p-u,f-v,b-y).normalize(),e===On)n[5].setComponents(a+l,p+u,f+v,b+y).normalize();else if(e===zr)n[5].setComponents(l,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rf(i){const t=new WeakMap;function e(l,a){const c=l.array,h=l.usage,u=c.byteLength,p=i.createBuffer();i.bindBuffer(a,p),i.bufferData(a,c,h),l.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:u}}function n(l,a,c){const h=a.array,u=a.updateRanges;if(i.bindBuffer(c,l),u.length===0)i.bufferSubData(c,0,h);else{u.sort((m,d)=>m.start-d.start);let p=0;for(let m=1;m<u.length;m++){const d=u[p],v=u[m];v.start<=d.start+d.count+1?d.count=Math.max(d.count,v.start+v.count-d.start):(++p,u[p]=v)}u.length=p+1;for(let m=0,d=u.length;m<d;m++){const v=u[m];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=t.get(l);a&&(i.deleteBuffer(a.buffer),t.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const h=t.get(l);(!h||h.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:s,remove:r,update:o}}class De extends Ne{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,l=Math.floor(n),a=Math.floor(s),c=l+1,h=a+1,u=t/l,p=e/a,m=[],d=[],v=[],f=[];for(let g=0;g<h;g++){const x=g*p-o;for(let y=0;y<c;y++){const b=y*u-r;d.push(b,-x,0),v.push(0,0,1),f.push(y/l),f.push(1-g/a)}}for(let g=0;g<a;g++)for(let x=0;x<l;x++){const y=x+c*g,b=x+c*(g+1),R=x+1+c*(g+1),w=x+1+c*g;m.push(y,b,w),m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new De(t.width,t.height,t.widthSegments,t.heightSegments)}}var Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,If=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,kf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Of=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
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
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bd=`uniform bool receiveShadow;
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
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ad=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ld=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Id=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`#ifdef USE_MORPHTARGETS
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
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jd=`#ifdef USE_NORMALMAP
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
#endif`,Qd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,vp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Mp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,kp=`#if DEPTH_PACKING == 3200
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
}`,Fp=`#define DISTANCE
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
}`,Op=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Hp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,qp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,Xp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Kp=`#define NORMAL
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
}`,Zp=`#define PHONG
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
}`,Jp=`#define PHONG
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,em=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,lm=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Pf,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:If,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:kf,aomap_pars_fragment:Ff,batching_pars_vertex:Of,batching_vertex:Bf,begin_vertex:zf,beginnormal_vertex:Vf,bsdfs:Gf,iridescence_fragment:Hf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:Xf,clipping_planes_vertex:Yf,color_fragment:jf,color_pars_fragment:Kf,color_pars_vertex:Zf,color_vertex:Jf,common:Qf,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:Md,envmap_vertex:fd,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:vd,lightmap_pars_fragment:_d,lights_lambert_fragment:xd,lights_lambert_pars_fragment:yd,lights_pars_begin:bd,lights_toon_fragment:Sd,lights_toon_pars_fragment:wd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:Ad,lights_physical_pars_fragment:Cd,lights_fragment_begin:Rd,lights_fragment_maps:Pd,lights_fragment_end:Ld,logdepthbuf_fragment:Dd,logdepthbuf_pars_fragment:Id,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:kd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Gd,morphcolor_vertex:Hd,morphnormal_vertex:Wd,morphtarget_pars_vertex:qd,morphtarget_vertex:$d,normal_fragment_begin:Xd,normal_fragment_maps:Yd,normal_pars_fragment:jd,normal_pars_vertex:Kd,normal_vertex:Zd,normalmap_pars_fragment:Jd,clearcoat_normal_fragment_begin:Qd,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:vp,skinnormal_vertex:_p,specularmap_fragment:xp,specularmap_pars_fragment:yp,tonemapping_fragment:bp,tonemapping_pars_fragment:Mp,transmission_fragment:Sp,transmission_pars_fragment:wp,uv_pars_fragment:Ep,uv_pars_vertex:Tp,uv_vertex:Ap,worldpos_vertex:Cp,background_vert:Rp,background_frag:Pp,backgroundCube_vert:Lp,backgroundCube_frag:Dp,cube_vert:Ip,cube_frag:Up,depth_vert:Np,depth_frag:kp,distanceRGBA_vert:Fp,distanceRGBA_frag:Op,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:Vp,linedashed_frag:Gp,meshbasic_vert:Hp,meshbasic_frag:Wp,meshlambert_vert:qp,meshlambert_frag:$p,meshmatcap_vert:Xp,meshmatcap_frag:Yp,meshnormal_vert:jp,meshnormal_frag:Kp,meshphong_vert:Zp,meshphong_frag:Jp,meshphysical_vert:Qp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:am,sprite_vert:om,sprite_frag:lm},pt={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},Tn={basic:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:Ye([pt.common,pt.specularmap,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:Ye([pt.common,pt.envmap,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.roughnessmap,pt.metalnessmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:Ye([pt.common,pt.aomap,pt.lightmap,pt.emissivemap,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.gradientmap,pt.fog,pt.lights,{emissive:{value:new Vt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,pt.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:Ye([pt.points,pt.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:Ye([pt.common,pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:Ye([pt.common,pt.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:Ye([pt.common,pt.bumpmap,pt.normalmap,pt.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:Ye([pt.sprite,pt.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:Ye([pt.common,pt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:Ye([pt.lights,pt.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};Tn.physical={uniforms:Ye([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const ur={r:0,b:0,g:0},hi=new wn,cm=new ee;function hm(i,t,e,n,s,r,o){const l=new Vt(0);let a=r===!0?0:1,c,h,u=null,p=0,m=null;function d(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?e:t).get(y)),y}function v(x){let y=!1;const b=d(x);b===null?g(l,a):b&&b.isColor&&(g(b,1),y=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,y){const b=d(y);b&&(b.isCubeTexture||b.mapping===qr)?(h===void 0&&(h=new _t(new je(1,1,1),new qe({name:"BackgroundCubeMaterial",uniforms:os(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Qe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(hi)),h.material.toneMapped=se.getTransfer(b.colorSpace)!==pe,(u!==b||p!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,u=b,p=b.version,m=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new _t(new De(2,2),new qe({name:"BackgroundMaterial",uniforms:os(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=se.getTransfer(b.colorSpace)!==pe,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(u!==b||p!==b.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,u=b,p=b.version,m=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,y){x.getRGB(ur,Th(i)),n.buffers.color.setClear(ur.r,ur.g,ur.b,y,o)}return{getClearColor:function(){return l},setClearColor:function(x,y=1){l.set(x),a=y,g(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(l,a)},render:v,addToRenderList:f}}function um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null);let r=s,o=!1;function l(_,S,V,B,L){let k=!1;const N=u(B,V,S);r!==N&&(r=N,c(r.object)),k=m(_,B,V,L),k&&d(_,B,V,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(k||o)&&(o=!1,b(_,S,V,B),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function a(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function u(_,S,V){const B=V.wireframe===!0;let L=n[_.id];L===void 0&&(L={},n[_.id]=L);let k=L[S.id];k===void 0&&(k={},L[S.id]=k);let N=k[B];return N===void 0&&(N=p(a()),k[B]=N),N}function p(_){const S=[],V=[],B=[];for(let L=0;L<e;L++)S[L]=0,V[L]=0,B[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:V,attributeDivisors:B,object:_,attributes:{},index:null}}function m(_,S,V,B){const L=r.attributes,k=S.attributes;let N=0;const J=V.getAttributes();for(const q in J)if(J[q].location>=0){const mt=L[q];let gt=k[q];if(gt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(gt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(gt=_.instanceColor)),mt===void 0||mt.attribute!==gt||gt&&mt.data!==gt.data)return!0;N++}return r.attributesNum!==N||r.index!==B}function d(_,S,V,B){const L={},k=S.attributes;let N=0;const J=V.getAttributes();for(const q in J)if(J[q].location>=0){let mt=k[q];mt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor));const gt={};gt.attribute=mt,mt&&mt.data&&(gt.data=mt.data),L[q]=gt,N++}r.attributes=L,r.attributesNum=N,r.index=B}function v(){const _=r.newAttributes;for(let S=0,V=_.length;S<V;S++)_[S]=0}function f(_){g(_,0)}function g(_,S){const V=r.newAttributes,B=r.enabledAttributes,L=r.attributeDivisors;V[_]=1,B[_]===0&&(i.enableVertexAttribArray(_),B[_]=1),L[_]!==S&&(i.vertexAttribDivisor(_,S),L[_]=S)}function x(){const _=r.newAttributes,S=r.enabledAttributes;for(let V=0,B=S.length;V<B;V++)S[V]!==_[V]&&(i.disableVertexAttribArray(V),S[V]=0)}function y(_,S,V,B,L,k,N){N===!0?i.vertexAttribIPointer(_,S,V,L,k):i.vertexAttribPointer(_,S,V,B,L,k)}function b(_,S,V,B){v();const L=B.attributes,k=V.getAttributes(),N=S.defaultAttributeValues;for(const J in k){const q=k[J];if(q.location>=0){let lt=L[J];if(lt===void 0&&(J==="instanceMatrix"&&_.instanceMatrix&&(lt=_.instanceMatrix),J==="instanceColor"&&_.instanceColor&&(lt=_.instanceColor)),lt!==void 0){const mt=lt.normalized,gt=lt.itemSize,Xt=t.get(lt);if(Xt===void 0)continue;const Kt=Xt.buffer,X=Xt.type,et=Xt.bytesPerElement,vt=X===i.INT||X===i.UNSIGNED_INT||lt.gpuType===qo;if(lt.isInterleavedBufferAttribute){const ht=lt.data,Ft=ht.stride,Ot=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let it=0;it<q.locationSize;it++)g(q.location+it,ht.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let it=0;it<q.locationSize;it++)f(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let it=0;it<q.locationSize;it++)y(q.location+it,gt/q.locationSize,X,mt,Ft*et,(Ot+gt/q.locationSize*it)*et,vt)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<q.locationSize;ht++)g(q.location+ht,lt.meshPerAttribute);_.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<q.locationSize;ht++)f(q.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Kt);for(let ht=0;ht<q.locationSize;ht++)y(q.location+ht,gt/q.locationSize,X,mt,gt*et,gt/q.locationSize*ht*et,vt)}}else if(N!==void 0){const mt=N[J];if(mt!==void 0)switch(mt.length){case 2:i.vertexAttrib2fv(q.location,mt);break;case 3:i.vertexAttrib3fv(q.location,mt);break;case 4:i.vertexAttrib4fv(q.location,mt);break;default:i.vertexAttrib1fv(q.location,mt)}}}}x()}function R(){U();for(const _ in n){const S=n[_];for(const V in S){const B=S[V];for(const L in B)h(B[L].object),delete B[L];delete S[V]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const V in S){const B=S[V];for(const L in B)h(B[L].object),delete B[L];delete S[V]}delete n[_.id]}function A(_){for(const S in n){const V=n[S];if(V[_.id]===void 0)continue;const B=V[_.id];for(const L in B)h(B[L].object),delete B[L];delete V[_.id]}}function U(){I(),o=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:U,resetDefaultState:I,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function fm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function l(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let m=0;for(let d=0;d<u;d++)m+=h[d];e.update(m,n,1)}function a(c,h,u,p){if(u===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<c.length;d++)o(c[d],h[d],p[d]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,h,0,p,0,u);let d=0;for(let v=0;v<u;v++)d+=h[v];for(let v=0;v<p.length;v++)e.update(d,n,p[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==bn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const U=A===Mn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Cn&&!U)}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=a(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,p=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(p===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=d>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:p,maxTextures:m,maxVertexTextures:d,maxTextureSize:v,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:R,maxSamples:w}}function pm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new fi,l=new jt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(u,p){const m=u.length!==0||p||n!==0||s;return s=p,n=u.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,p){e=h(u,p,0)},this.setState=function(u,p,m){const d=u.clippingPlanes,v=u.clipIntersection,f=u.clipShadows,g=i.get(u);if(!s||d===null||d.length===0||r&&!f)r?h(null):c();else{const x=r?0:n,y=x*4;let b=g.clippingState||null;a.value=b,b=h(d,p,y,m);for(let R=0;R!==y;++R)b[R]=e[R];g.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,p,m,d){const v=u!==null?u.length:0;let f=null;if(v!==0){if(f=a.value,d!==!0||f===null){const g=m+v*4,x=p.matrixWorldInverse;l.getNormalMatrix(x),(f===null||f.length<g)&&(f=new Float32Array(g));for(let y=0,b=m;y!==v;++y,b+=4)o.copy(u[y]).applyMatrix4(x,l),o.normal.toArray(f,b),f[b+3]=o.constant}a.value=f,a.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function mm(i){let t=new WeakMap;function e(o,l){return l===eo?o.mapping=is:l===no&&(o.mapping=ss),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===eo||l===no)if(t.has(o)){const a=t.get(o).texture;return e(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const c=new Tf(a.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const a=t.get(l);a!==void 0&&(t.delete(l),a.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class el extends Ah{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,l=s+e,a=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=h*this.view.offsetY,a=l-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ji=4,$l=[.125,.215,.35,.446,.526,.582],mi=20,Ea=new el,Xl=new Vt;let Ta=null,Aa=0,Ca=0,Ra=!1;const di=(1+Math.sqrt(5))/2,Oi=1/di,Yl=[new D(-di,Oi,0),new D(di,Oi,0),new D(-Oi,0,di),new D(Oi,0,di),new D(0,di,-Oi),new D(0,di,Oi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class jl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ta,Aa,Ca),this._renderer.xr.enabled=Ra,t.scissorTest=!1,fr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===is||t.mapping===ss?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ta=this._renderer.getRenderTarget(),Aa=this._renderer.getActiveCubeFace(),Ca=this._renderer.getActiveMipmapLevel(),Ra=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:Mn,format:bn,colorSpace:ni,depthBuffer:!1},s=Kl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(r)),this._blurMaterial=vm(r,t,e)}return s}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,Ea)}_sceneToCubeUV(t,e,n,s){const l=new Je(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,p=h.toneMapping;h.getClearColor(Xl),h.toneMapping=Qn,h.autoClear=!1;const m=new an({name:"PMREM.Background",side:Qe,depthWrite:!1,depthTest:!1}),d=new _t(new je,m);let v=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,v=!0):(m.color.copy(Xl),v=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(l.up.set(0,a[g],0),l.lookAt(c[g],0,0)):x===1?(l.up.set(0,0,a[g]),l.lookAt(0,c[g],0)):(l.up.set(0,a[g],0),l.lookAt(0,0,c[g]));const y=this._cubeSize;fr(s,x*y,g>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(d,l),h.render(t,l)}d.geometry.dispose(),d.material.dispose(),h.toneMapping=p,h.autoClear=u,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===is||t.mapping===ss;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new _t(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const a=this._cubeSize;fr(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(o,Ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Yl[(s-r-1)%Yl.length];this._blur(t,r-1,r,o,l)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,l){const a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new _t(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,d=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*mi-1),v=r/d,f=isFinite(r)?1+Math.floor(h*v):mi;f>mi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${mi}`);const g=[];let x=0;for(let A=0;A<mi;++A){const U=A/v,I=Math.exp(-U*U/2);g.push(I),A===0?x+=I:A<f&&(x+=2*I)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;p.envMap.value=t.texture,p.samples.value=f,p.weights.value=g,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:y}=this;p.dTheta.value=d,p.mipInt.value=y-n;const b=this._sizeLods[s],R=3*b*(s>y-ji?s-y+ji:0),w=4*(this._cubeSize-b);fr(e,R,w,3*b,2*b),a.setRenderTarget(e),a.render(u,Ea)}}function gm(i){const t=[],e=[],n=[];let s=i;const r=i-ji+1+$l.length;for(let o=0;o<r;o++){const l=Math.pow(2,s);e.push(l);let a=1/l;o>i-ji?a=$l[o-i+ji-1]:o===0&&(a=0),n.push(a);const c=1/(l-2),h=-c,u=1+c,p=[h,h,u,h,u,u,h,h,u,u,h,u],m=6,d=6,v=3,f=2,g=1,x=new Float32Array(v*d*m),y=new Float32Array(f*d*m),b=new Float32Array(g*d*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,U=w>2?0:-1,I=[A,U,0,A+2/3,U,0,A+2/3,U+1,0,A,U,0,A+2/3,U+1,0,A,U+1,0];x.set(I,v*d*w),y.set(p,f*d*w);const _=[w,w,w,w,w,w];b.set(_,g*d*w)}const R=new Ne;R.setAttribute("position",new ln(x,v)),R.setAttribute("uv",new ln(y,f)),R.setAttribute("faceIndex",new ln(b,g)),t.push(R),s>ji&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kl(i,t,e){const n=new on(i,t,e);return n.texture.mapping=qr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function vm(i,t,e){const n=new Float32Array(mi),s=new D(0,1,0);return new qe({name:"SphericalGaussianBlur",defines:{n:mi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Zl(){return new qe({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nl(),fragmentShader:`

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
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function Jl(){return new qe({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function nl(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const a=l.mapping,c=a===eo||a===no,h=a===is||a===ss;if(c||h){let u=t.get(l);const p=u!==void 0?u.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==p)return e===null&&(e=new jl(i)),u=c?e.fromEquirectangular(l,u):e.fromCubemap(l,u),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),u.texture;if(u!==void 0)return u.texture;{const m=l.image;return c&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new jl(i)),u=c?e.fromEquirectangular(l):e.fromCubemap(l),u.texture.pmremVersion=l.pmremVersion,t.set(l,u),l.addEventListener("dispose",r),u.texture):null}}}return l}function s(l){let a=0;const c=6;for(let h=0;h<c;h++)l[h]!==void 0&&a++;return a===c}function r(l){const a=l.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Lr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,t,e,n){const s={},r=new WeakMap;function o(u){const p=u.target;p.index!==null&&t.remove(p.index);for(const d in p.attributes)t.remove(p.attributes[d]);for(const d in p.morphAttributes){const v=p.morphAttributes[d];for(let f=0,g=v.length;f<g;f++)t.remove(v[f])}p.removeEventListener("dispose",o),delete s[p.id];const m=r.get(p);m&&(t.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function l(u,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,e.memory.geometries++),p}function a(u){const p=u.attributes;for(const d in p)t.update(p[d],i.ARRAY_BUFFER);const m=u.morphAttributes;for(const d in m){const v=m[d];for(let f=0,g=v.length;f<g;f++)t.update(v[f],i.ARRAY_BUFFER)}}function c(u){const p=[],m=u.index,d=u.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let y=0,b=x.length;y<b;y+=3){const R=x[y+0],w=x[y+1],A=x[y+2];p.push(R,w,w,A,A,R)}}else if(d!==void 0){const x=d.array;v=d.version;for(let y=0,b=x.length/3-1;y<b;y+=3){const R=y+0,w=y+1,A=y+2;p.push(R,w,w,A,A,R)}}else return;const f=new(_h(p)?Eh:wh)(p,1);f.version=v;const g=r.get(u);g&&t.remove(g),r.set(u,f)}function h(u){const p=r.get(u);if(p){const m=u.index;m!==null&&p.version<m.version&&c(u)}else c(u);return r.get(u)}return{get:l,update:a,getWireframeAttribute:h}}function bm(i,t,e){let n;function s(p){n=p}let r,o;function l(p){r=p.type,o=p.bytesPerElement}function a(p,m){i.drawElements(n,m,r,p*o),e.update(m,n,1)}function c(p,m,d){d!==0&&(i.drawElementsInstanced(n,m,r,p*o,d),e.update(m,n,d))}function h(p,m,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,p,0,d);let f=0;for(let g=0;g<d;g++)f+=m[g];e.update(f,n,1)}function u(p,m,d,v){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<p.length;g++)c(p[g]/o,m[g],v[g]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,p,0,v,0,d);let g=0;for(let x=0;x<d;x++)g+=m[x];for(let x=0;x<v.length;x++)e.update(g,n,v[x])}}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Mm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){const n=new WeakMap,s=new ue;function r(o,l,a){const c=o.morphTargetInfluences,h=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,u=h!==void 0?h.length:0;let p=n.get(l);if(p===void 0||p.count!==u){let I=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",I)};p!==void 0&&p.texture.dispose();const m=l.morphAttributes.position!==void 0,d=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],x=l.morphAttributes.color||[];let y=0;m===!0&&(y=1),d===!0&&(y=2),v===!0&&(y=3);let b=l.attributes.position.count*y,R=1;b>t.maxTextureSize&&(R=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*R*4*u),A=new yh(w,b,R,u);A.type=Cn,A.needsUpdate=!0;const U=y*4;for(let _=0;_<u;_++){const S=f[_],V=g[_],B=x[_],L=b*R*4*_;for(let k=0;k<S.count;k++){const N=k*U;m===!0&&(s.fromBufferAttribute(S,k),w[L+N+0]=s.x,w[L+N+1]=s.y,w[L+N+2]=s.z,w[L+N+3]=0),d===!0&&(s.fromBufferAttribute(V,k),w[L+N+4]=s.x,w[L+N+5]=s.y,w[L+N+6]=s.z,w[L+N+7]=0),v===!0&&(s.fromBufferAttribute(B,k),w[L+N+8]=s.x,w[L+N+9]=s.y,w[L+N+10]=s.z,w[L+N+11]=B.itemSize===4?s.w:1)}}p={count:u,texture:A,size:new nt(b,R)},n.set(l,p),l.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const d=l.morphTargetsRelative?1:1-m;a.getUniforms().setValue(i,"morphTargetBaseInfluence",d),a.getUniforms().setValue(i,"morphTargetInfluences",c)}a.getUniforms().setValue(i,"morphTargetsTexture",p.texture,e),a.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function wm(i,t,e,n){let s=new WeakMap;function r(a){const c=n.render.frame,h=a.geometry,u=t.get(a,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),s.get(a)!==c&&(e.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,i.ARRAY_BUFFER),s.set(a,c))),a.isSkinnedMesh){const p=a.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return u}function o(){s=new WeakMap}function l(a){const c=a.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class Ph extends $e{constructor(t,e,n,s,r,o,l,a,c,h=Qi){if(h!==Qi&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Qi&&(n=yi),n===void 0&&h===as&&(n=rs),super(null,s,r,o,l,a,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:Le,this.minFilter=a!==void 0?a:Le,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lh=new $e,Ql=new Ph(1,1),Dh=new yh,Ih=new uf,Uh=new Ch,tc=[],ec=[],nc=new Float32Array(16),ic=new Float32Array(9),sc=new Float32Array(4);function ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=tc[s];if(r===void 0&&(r=new Float32Array(s),tc[s]=r),t!==0){n.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(r,l)}return r}function Ie(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ue(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Xr(i,t){let e=ec[t];e===void 0&&(e=new Int32Array(t),ec[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Em(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2fv(this.addr,t),Ue(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ie(e,t))return;i.uniform3fv(this.addr,t),Ue(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4fv(this.addr,t),Ue(e,t)}}function Rm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;sc.set(n),i.uniformMatrix2fv(this.addr,!1,sc),Ue(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;ic.set(n),i.uniformMatrix3fv(this.addr,!1,ic),Ue(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ie(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ue(e,t)}else{if(Ie(e,n))return;nc.set(n),i.uniformMatrix4fv(this.addr,!1,nc),Ue(e,n)}}function Dm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2iv(this.addr,t),Ue(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3iv(this.addr,t),Ue(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4iv(this.addr,t),Ue(e,t)}}function km(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ie(e,t))return;i.uniform2uiv(this.addr,t),Ue(e,t)}}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ie(e,t))return;i.uniform3uiv(this.addr,t),Ue(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ie(e,t))return;i.uniform4uiv(this.addr,t),Ue(e,t)}}function zm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=vh,r=Ql):r=Lh,e.setTexture2D(t||r,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uh,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Dh,s)}function Wm(i){switch(i){case 5126:return Em;case 35664:return Tm;case 35665:return Am;case 35666:return Cm;case 35674:return Rm;case 35675:return Pm;case 35676:return Lm;case 5124:case 35670:return Dm;case 35667:case 35671:return Im;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return km;case 36294:return Fm;case 36295:return Om;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Hm}}function qm(i,t){i.uniform1fv(this.addr,t)}function $m(i,t){const e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Xm(i,t){const e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){const e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function jm(i,t){const e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Km(i,t){const e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Zm(i,t){const e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Jm(i,t){i.uniform1iv(this.addr,t)}function Qm(i,t){i.uniform2iv(this.addr,t)}function t0(i,t){i.uniform3iv(this.addr,t)}function e0(i,t){i.uniform4iv(this.addr,t)}function n0(i,t){i.uniform1uiv(this.addr,t)}function i0(i,t){i.uniform2uiv(this.addr,t)}function s0(i,t){i.uniform3uiv(this.addr,t)}function r0(i,t){i.uniform4uiv(this.addr,t)}function a0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Lh,r[o])}function o0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ih,r[o])}function l0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Uh,r[o])}function c0(i,t,e){const n=this.cache,s=t.length,r=Xr(e,s);Ie(n,r)||(i.uniform1iv(this.addr,r),Ue(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Dh,r[o])}function h0(i){switch(i){case 5126:return qm;case 35664:return $m;case 35665:return Xm;case 35666:return Ym;case 35674:return jm;case 35675:return Km;case 35676:return Zm;case 5124:case 35670:return Jm;case 35667:case 35671:return Qm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}class u0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}}class f0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}}class d0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(t,e[l.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function rc(i,t){i.seq.push(t),i.map[t.id]=t}function p0(i,t,e){const n=i.name,s=n.length;for(Pa.lastIndex=0;;){const r=Pa.exec(n),o=Pa.lastIndex;let l=r[1];const a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===s){rc(e,c===void 0?new u0(l,i,t):new f0(l,i,t));break}else{let u=e.map[l];u===void 0&&(u=new d0(l),rc(e,u)),e=u}}}class Dr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);p0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const l=e[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(t,a.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ac(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const m0=37297;let g0=0;function v0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}function _0(i){const t=se.getPrimaries(se.workingColorSpace),e=se.getPrimaries(i);let n;switch(t===e?n="":t===Br&&e===Or?n="LinearDisplayP3ToLinearSRGB":t===Or&&e===Br&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case $r:return[n,"LinearTransferOETF"];case fn:case Qo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function oc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+v0(i.getShaderSource(t),o)}else return s}function x0(i,t){const e=_0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function y0(i,t){let e;switch(t){case eh:e="Linear";break;case nh:e="Reinhard";break;case ih:e="Cineon";break;case Wo:e="ACESFilmic";break;case sh:e="AgX";break;case rh:e="Neutral";break;case Hu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new D;function b0(){se.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function M0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cs).join(`
`)}function S0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function w0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function Cs(i){return i!==""}function lc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function cc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const E0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Do(i){return i.replace(E0,A0)}const T0=new Map;function A0(i,t){let e=Yt[t];if(e===void 0){const n=T0.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Do(e)}const C0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hc(i){return i.replace(C0,R0)}function R0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function P0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Qc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function L0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case is:case ss:t="ENVMAP_TYPE_CUBE";break;case qr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ss:t="ENVMAP_MODE_REFRACTION";break}return t}function I0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ho:t="ENVMAP_BLENDING_MULTIPLY";break;case Vu:t="ENVMAP_BLENDING_MIX";break;case Gu:t="ENVMAP_BLENDING_ADD";break}return t}function U0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function N0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,l=e.fragmentShader;const a=P0(e),c=L0(e),h=D0(e),u=I0(e),p=U0(e),m=M0(e),d=S0(r),v=s.createProgram();let f,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Cs).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d].filter(Cs).join(`
`),g.length>0&&(g+=`
`)):(f=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cs).join(`
`),g=[uc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,d,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?y0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,x0("linearToOutputTexel",e.outputColorSpace),b0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Cs).join(`
`)),o=Do(o),o=lc(o,e),o=cc(o,e),l=Do(l),l=lc(l,e),l=cc(l,e),o=hc(o),l=hc(l),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===Cl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Cl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const y=x+f+o,b=x+g+l,R=ac(s,s.VERTEX_SHADER,y),w=ac(s,s.FRAGMENT_SHADER,b);s.attachShader(v,R),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),B=s.getShaderInfoLog(R).trim(),L=s.getShaderInfoLog(w).trim();let k=!0,N=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,w);else{const J=oc(s,R,"vertex"),q=oc(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+V+`
`+J+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(B===""||L==="")&&(N=!1);N&&(S.diagnostics={runnable:k,programLog:V,vertexShader:{log:B,prefix:f},fragmentShader:{log:L,prefix:g}})}s.deleteShader(R),s.deleteShader(w),U=new Dr(s,v),I=w0(s,v)}let U;this.getUniforms=function(){return U===void 0&&A(this),U};let I;this.getAttributes=function(){return I===void 0&&A(this),I};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,m0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=g0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}let k0=0;class F0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new O0(t),e.set(t,n)),n}}class O0{constructor(t){this.id=k0++,this.code=t,this.usedTimes=0}}function B0(i,t,e,n,s,r,o){const l=new Mh,a=new F0,c=new Set,h=[],u=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,m=s.vertexTextures;let d=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,V,B,L){const k=B.fog,N=L.geometry,J=_.isMeshStandardMaterial?B.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||J),lt=q&&q.mapping===qr?q.image.height:null,mt=v[_.type];_.precision!==null&&(d=s.getMaxPrecision(_.precision),d!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const gt=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Xt=gt!==void 0?gt.length:0;let Kt=0;N.morphAttributes.position!==void 0&&(Kt=1),N.morphAttributes.normal!==void 0&&(Kt=2),N.morphAttributes.color!==void 0&&(Kt=3);let X,et,vt,ht;if(mt){const Ze=Tn[mt];X=Ze.vertexShader,et=Ze.fragmentShader}else X=_.vertexShader,et=_.fragmentShader,a.update(_),vt=a.getVertexShaderID(_),ht=a.getFragmentShaderID(_);const Ft=i.getRenderTarget(),Ot=L.isInstancedMesh===!0,it=L.isBatchedMesh===!0,At=!!_.map,Z=!!_.matcap,C=!!q,ut=!!_.aoMap,ct=!!_.lightMap,rt=!!_.bumpMap,ft=!!_.normalMap,Nt=!!_.displacementMap,bt=!!_.emissiveMap,T=!!_.metalnessMap,M=!!_.roughnessMap,G=_.anisotropy>0,j=_.clearcoat>0,Q=_.dispersion>0,K=_.iridescence>0,Lt=_.sheen>0,dt=_.transmission>0,wt=G&&!!_.anisotropyMap,Jt=j&&!!_.clearcoatMap,at=j&&!!_.clearcoatNormalMap,Et=j&&!!_.clearcoatRoughnessMap,Gt=K&&!!_.iridescenceMap,Ht=K&&!!_.iridescenceThicknessMap,Ct=Lt&&!!_.sheenColorMap,Qt=Lt&&!!_.sheenRoughnessMap,$t=!!_.specularMap,fe=!!_.specularColorMap,F=!!_.specularIntensityMap,Mt=dt&&!!_.transmissionMap,$=dt&&!!_.thicknessMap,tt=!!_.gradientMap,xt=!!_.alphaMap,St=_.alphaTest>0,te=!!_.alphaHash,Ae=!!_.extensions;let Ke=Qn;_.toneMapped&&(Ft===null||Ft.isXRRenderTarget===!0)&&(Ke=i.toneMapping);const ie={shaderID:mt,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:et,defines:_.defines,customVertexShaderID:vt,customFragmentShaderID:ht,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:it,batchingColor:it&&L._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&L.instanceColor!==null,instancingMorph:Ot&&L.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ft===null?i.outputColorSpace:Ft.isXRRenderTarget===!0?Ft.texture.colorSpace:ni,alphaToCoverage:!!_.alphaToCoverage,map:At,matcap:Z,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:lt,aoMap:ut,lightMap:ct,bumpMap:rt,normalMap:ft,displacementMap:m&&Nt,emissiveMap:bt,normalMapObjectSpace:ft&&_.normalMapType===$u,normalMapTangentSpace:ft&&_.normalMapType===Jo,metalnessMap:T,roughnessMap:M,anisotropy:G,anisotropyMap:wt,clearcoat:j,clearcoatMap:Jt,clearcoatNormalMap:at,clearcoatRoughnessMap:Et,dispersion:Q,iridescence:K,iridescenceMap:Gt,iridescenceThicknessMap:Ht,sheen:Lt,sheenColorMap:Ct,sheenRoughnessMap:Qt,specularMap:$t,specularColorMap:fe,specularIntensityMap:F,transmission:dt,transmissionMap:Mt,thicknessMap:$,gradientMap:tt,opaque:_.transparent===!1&&_.blending===xi&&_.alphaToCoverage===!1,alphaMap:xt,alphaTest:St,alphaHash:te,combine:_.combine,mapUv:At&&f(_.map.channel),aoMapUv:ut&&f(_.aoMap.channel),lightMapUv:ct&&f(_.lightMap.channel),bumpMapUv:rt&&f(_.bumpMap.channel),normalMapUv:ft&&f(_.normalMap.channel),displacementMapUv:Nt&&f(_.displacementMap.channel),emissiveMapUv:bt&&f(_.emissiveMap.channel),metalnessMapUv:T&&f(_.metalnessMap.channel),roughnessMapUv:M&&f(_.roughnessMap.channel),anisotropyMapUv:wt&&f(_.anisotropyMap.channel),clearcoatMapUv:Jt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:at&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ct&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Qt&&f(_.sheenRoughnessMap.channel),specularMapUv:$t&&f(_.specularMap.channel),specularColorMapUv:fe&&f(_.specularColorMap.channel),specularIntensityMapUv:F&&f(_.specularIntensityMap.channel),transmissionMapUv:Mt&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:xt&&f(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ft||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!N.attributes.uv&&(At||xt),fog:!!k,useFog:_.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:p,skinning:L.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:Xt,morphTextureStride:Kt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:At&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===pe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Fe,flipSided:_.side===Qe,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ae&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ie.vertexUv1s=c.has(1),ie.vertexUv2s=c.has(2),ie.vertexUv3s=c.has(3),c.clear(),ie}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)S.push(V),S.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(y(S,_),b(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function y(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function b(_,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),_.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.alphaToCoverage&&l.enable(20),_.push(l.mask)}function R(_){const S=v[_.type];let V;if(S){const B=Tn[S];V=ls.clone(B.uniforms)}else V=_.uniforms;return V}function w(_,S){let V;for(let B=0,L=h.length;B<L;B++){const k=h[B];if(k.cacheKey===S){V=k,++V.usedTimes;break}}return V===void 0&&(V=new N0(i,S,_,r),h.push(V)),V}function A(_){if(--_.usedTimes===0){const S=h.indexOf(_);h[S]=h[h.length-1],h.pop(),_.destroy()}}function U(_){a.remove(_)}function I(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:R,acquireProgram:w,releaseProgram:A,releaseShaderCache:U,programs:h,dispose:I}}function z0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function V0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function dc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,p,m,d,v,f){let g=i[t];return g===void 0?(g={id:u.id,object:u,geometry:p,material:m,groupOrder:d,renderOrder:u.renderOrder,z:v,group:f},i[t]=g):(g.id=u.id,g.object=u,g.geometry=p,g.material=m,g.groupOrder=d,g.renderOrder=u.renderOrder,g.z=v,g.group=f),t++,g}function l(u,p,m,d,v,f){const g=o(u,p,m,d,v,f);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):e.push(g)}function a(u,p,m,d,v,f){const g=o(u,p,m,d,v,f);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function c(u,p){e.length>1&&e.sort(u||V0),n.length>1&&n.sort(p||fc),s.length>1&&s.sort(p||fc)}function h(){for(let u=t,p=i.length;u<p;u++){const m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:a,finish:h,sort:c}}function G0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new dc,i.set(n,[o])):s>=r.length?(o=new dc,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function H0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Vt};break;case"SpotLight":e={position:new D,direction:new D,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":e={color:new Vt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function W0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let q0=0;function $0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function X0(i){const t=new H0,e=W0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const s=new D,r=new ee,o=new ee;function l(c){let h=0,u=0,p=0;for(let I=0;I<9;I++)n.probe[I].set(0,0,0);let m=0,d=0,v=0,f=0,g=0,x=0,y=0,b=0,R=0,w=0,A=0;c.sort($0);for(let I=0,_=c.length;I<_;I++){const S=c[I],V=S.color,B=S.intensity,L=S.distance,k=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=V.r*B,u+=V.g*B,p+=V.b*B;else if(S.isLightProbe){for(let N=0;N<9;N++)n.probe[N].addScaledVector(S.sh.coefficients[N],B);A++}else if(S.isDirectionalLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const J=S.shadow,q=e.get(S);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=k,n.directionalShadowMatrix[m]=S.shadow.matrix,x++}n.directional[m]=N,m++}else if(S.isSpotLight){const N=t.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(V).multiplyScalar(B),N.distance=L,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,n.spot[v]=N;const J=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,J.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[v]=J.matrix,S.castShadow){const q=e.get(S);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=k,b++}v++}else if(S.isRectAreaLight){const N=t.get(S);N.color.copy(V).multiplyScalar(B),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=N,f++}else if(S.isPointLight){const N=t.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){const J=S.shadow,q=e.get(S);q.shadowIntensity=J.intensity,q.shadowBias=J.bias,q.shadowNormalBias=J.normalBias,q.shadowRadius=J.radius,q.shadowMapSize=J.mapSize,q.shadowCameraNear=J.camera.near,q.shadowCameraFar=J.camera.far,n.pointShadow[d]=q,n.pointShadowMap[d]=k,n.pointShadowMatrix[d]=S.shadow.matrix,y++}n.point[d]=N,d++}else if(S.isHemisphereLight){const N=t.get(S);N.skyColor.copy(S.color).multiplyScalar(B),N.groundColor.copy(S.groundColor).multiplyScalar(B),n.hemi[g]=N,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pt.LTC_FLOAT_1,n.rectAreaLTC2=pt.LTC_FLOAT_2):(n.rectAreaLTC1=pt.LTC_HALF_1,n.rectAreaLTC2=pt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=p;const U=n.hash;(U.directionalLength!==m||U.pointLength!==d||U.spotLength!==v||U.rectAreaLength!==f||U.hemiLength!==g||U.numDirectionalShadows!==x||U.numPointShadows!==y||U.numSpotShadows!==b||U.numSpotMaps!==R||U.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=f,n.point.length=d,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,U.directionalLength=m,U.pointLength=d,U.spotLength=v,U.rectAreaLength=f,U.hemiLength=g,U.numDirectionalShadows=x,U.numPointShadows=y,U.numSpotShadows=b,U.numSpotMaps=R,U.numLightProbes=A,n.version=q0++)}function a(c,h){let u=0,p=0,m=0,d=0,v=0;const f=h.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const y=c[g];if(y.isDirectionalLight){const b=n.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),u++}else if(y.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),m++}else if(y.isRectAreaLight){const b=n.rectArea[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),o.identity(),r.copy(y.matrixWorld),r.premultiply(f),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),d++}else if(y.isPointLight){const b=n.point[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(f),v++}}}return{setup:l,setupView:a,state:n}}function pc(i){const t=new X0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function l(){t.setup(e)}function a(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:a,pushLight:r,pushShadow:o}}function Y0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new pc(i),t.set(s,[l])):r>=o.length?(l=new pc(i),o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class Nh extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class j0 extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const K0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
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
}`;function J0(i,t,e){let n=new tl;const s=new nt,r=new nt,o=new ue,l=new Nh({depthPacking:gh}),a=new j0,c={},h=e.maxTextureSize,u={[ei]:Qe,[Qe]:ei,[Fe]:Fe},p=new qe({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:K0,fragmentShader:Z0}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const d=new Ne;d.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new _t(d,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Qc;let g=this.type;this.render=function(w,A,U){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const I=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Rn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const B=g!==Fn&&this.type===Fn,L=g===Fn&&this.type!==Fn;for(let k=0,N=w.length;k<N;k++){const J=w[k],q=J.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const lt=q.getFrameExtents();if(s.multiply(lt),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/lt.x),s.x=r.x*lt.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/lt.y),s.y=r.y*lt.y,q.mapSize.y=r.y)),q.map===null||B===!0||L===!0){const gt=this.type!==Fn?{minFilter:Le,magFilter:Le}:{};q.map!==null&&q.map.dispose(),q.map=new on(s.x,s.y,gt),q.map.texture.name=J.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const mt=q.getViewportCount();for(let gt=0;gt<mt;gt++){const Xt=q.getViewport(gt);o.set(r.x*Xt.x,r.y*Xt.y,r.x*Xt.z,r.y*Xt.w),V.viewport(o),q.updateMatrices(J,gt),n=q.getFrustum(),b(A,U,q.camera,J,this.type)}q.isPointLightShadow!==!0&&this.type===Fn&&x(q,U),q.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(I,_,S)};function x(w,A){const U=t.update(v);p.defines.VSM_SAMPLES!==w.blurSamples&&(p.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new on(s.x,s.y)),p.uniforms.shadow_pass.value=w.map.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,U,p,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,U,m,v,null)}function y(w,A,U,I){let _=null;const S=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)_=S;else if(_=U.isPointLight===!0?a:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=_.uuid,B=A.uuid;let L=c[V];L===void 0&&(L={},c[V]=L);let k=L[B];k===void 0&&(k=_.clone(),L[B]=k,A.addEventListener("dispose",R)),_=k}if(_.visible=A.visible,_.wireframe=A.wireframe,I===Fn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:u[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,U.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=U}return _}function b(w,A,U,I,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Fn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);const B=t.update(w),L=w.material;if(Array.isArray(L)){const k=B.groups;for(let N=0,J=k.length;N<J;N++){const q=k[N],lt=L[q.materialIndex];if(lt&&lt.visible){const mt=y(w,lt,I,_);w.onBeforeShadow(i,w,A,U,B,mt,q),i.renderBufferDirect(U,null,B,mt,w,q),w.onAfterShadow(i,w,A,U,B,mt,q)}}}else if(L.visible){const k=y(w,L,I,_);w.onBeforeShadow(i,w,A,U,B,k,null),i.renderBufferDirect(U,null,B,k,w,null),w.onAfterShadow(i,w,A,U,B,k,null)}}const V=w.children;for(let B=0,L=V.length;B<L;B++)b(V[B],A,U,I,_)}function R(w){w.target.removeEventListener("dispose",R);for(const U in c){const I=c[U],_=w.target.uuid;_ in I&&(I[_].dispose(),delete I[_])}}}const Q0={[Ya]:ja,[Ka]:Qa,[Za]:to,[ns]:Ja,[ja]:Ya,[Qa]:Ka,[to]:Za,[Ja]:ns};function tg(i){function t(){let F=!1;const Mt=new ue;let $=null;const tt=new ue(0,0,0,0);return{setMask:function(xt){$!==xt&&!F&&(i.colorMask(xt,xt,xt,xt),$=xt)},setLocked:function(xt){F=xt},setClear:function(xt,St,te,Ae,Ke){Ke===!0&&(xt*=Ae,St*=Ae,te*=Ae),Mt.set(xt,St,te,Ae),tt.equals(Mt)===!1&&(i.clearColor(xt,St,te,Ae),tt.copy(Mt))},reset:function(){F=!1,$=null,tt.set(-1,0,0,0)}}}function e(){let F=!1,Mt=!1,$=null,tt=null,xt=null;return{setReversed:function(St){Mt=St},setTest:function(St){St?vt(i.DEPTH_TEST):ht(i.DEPTH_TEST)},setMask:function(St){$!==St&&!F&&(i.depthMask(St),$=St)},setFunc:function(St){if(Mt&&(St=Q0[St]),tt!==St){switch(St){case Ya:i.depthFunc(i.NEVER);break;case ja:i.depthFunc(i.ALWAYS);break;case Ka:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case Za:i.depthFunc(i.EQUAL);break;case Ja:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=St}},setLocked:function(St){F=St},setClear:function(St){xt!==St&&(i.clearDepth(St),xt=St)},reset:function(){F=!1,$=null,tt=null,xt=null}}}function n(){let F=!1,Mt=null,$=null,tt=null,xt=null,St=null,te=null,Ae=null,Ke=null;return{setTest:function(ie){F||(ie?vt(i.STENCIL_TEST):ht(i.STENCIL_TEST))},setMask:function(ie){Mt!==ie&&!F&&(i.stencilMask(ie),Mt=ie)},setFunc:function(ie,Ze,Ln){($!==ie||tt!==Ze||xt!==Ln)&&(i.stencilFunc(ie,Ze,Ln),$=ie,tt=Ze,xt=Ln)},setOp:function(ie,Ze,Ln){(St!==ie||te!==Ze||Ae!==Ln)&&(i.stencilOp(ie,Ze,Ln),St=ie,te=Ze,Ae=Ln)},setLocked:function(ie){F=ie},setClear:function(ie){Ke!==ie&&(i.clearStencil(ie),Ke=ie)},reset:function(){F=!1,Mt=null,$=null,tt=null,xt=null,St=null,te=null,Ae=null,Ke=null}}}const s=new t,r=new e,o=new n,l=new WeakMap,a=new WeakMap;let c={},h={},u=new WeakMap,p=[],m=null,d=!1,v=null,f=null,g=null,x=null,y=null,b=null,R=null,w=new Vt(0,0,0),A=0,U=!1,I=null,_=null,S=null,V=null,B=null;const L=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,N=0;const J=i.getParameter(i.VERSION);J.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(J)[1]),k=N>=1):J.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),k=N>=2);let q=null,lt={};const mt=i.getParameter(i.SCISSOR_BOX),gt=i.getParameter(i.VIEWPORT),Xt=new ue().fromArray(mt),Kt=new ue().fromArray(gt);function X(F,Mt,$,tt){const xt=new Uint8Array(4),St=i.createTexture();i.bindTexture(F,St),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let te=0;te<$;te++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Mt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,xt):i.texImage2D(Mt+te,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xt);return St}const et={};et[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),et[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),et[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),vt(i.DEPTH_TEST),r.setFunc(ns),ct(!1),rt(wl),vt(i.CULL_FACE),C(Rn);function vt(F){c[F]!==!0&&(i.enable(F),c[F]=!0)}function ht(F){c[F]!==!1&&(i.disable(F),c[F]=!1)}function Ft(F,Mt){return h[F]!==Mt?(i.bindFramebuffer(F,Mt),h[F]=Mt,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Mt),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Ot(F,Mt){let $=p,tt=!1;if(F){$=u.get(Mt),$===void 0&&($=[],u.set(Mt,$));const xt=F.textures;if($.length!==xt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let St=0,te=xt.length;St<te;St++)$[St]=i.COLOR_ATTACHMENT0+St;$.length=xt.length,tt=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,tt=!0);tt&&i.drawBuffers($)}function it(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const At={[pi]:i.FUNC_ADD,[wu]:i.FUNC_SUBTRACT,[Eu]:i.FUNC_REVERSE_SUBTRACT};At[Tu]=i.MIN,At[Au]=i.MAX;const Z={[Cu]:i.ZERO,[Ru]:i.ONE,[Pu]:i.SRC_COLOR,[$a]:i.SRC_ALPHA,[ku]:i.SRC_ALPHA_SATURATE,[Uu]:i.DST_COLOR,[Du]:i.DST_ALPHA,[Lu]:i.ONE_MINUS_SRC_COLOR,[Xa]:i.ONE_MINUS_SRC_ALPHA,[Nu]:i.ONE_MINUS_DST_COLOR,[Iu]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Ou]:i.ONE_MINUS_CONSTANT_COLOR,[Bu]:i.CONSTANT_ALPHA,[zu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(F,Mt,$,tt,xt,St,te,Ae,Ke,ie){if(F===Rn){d===!0&&(ht(i.BLEND),d=!1);return}if(d===!1&&(vt(i.BLEND),d=!0),F!==Su){if(F!==v||ie!==U){if((f!==pi||y!==pi)&&(i.blendEquation(i.FUNC_ADD),f=pi,y=pi),ie)switch(F){case xi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case xi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ns:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}g=null,x=null,b=null,R=null,w.set(0,0,0),A=0,v=F,U=ie}return}xt=xt||Mt,St=St||$,te=te||tt,(Mt!==f||xt!==y)&&(i.blendEquationSeparate(At[Mt],At[xt]),f=Mt,y=xt),($!==g||tt!==x||St!==b||te!==R)&&(i.blendFuncSeparate(Z[$],Z[tt],Z[St],Z[te]),g=$,x=tt,b=St,R=te),(Ae.equals(w)===!1||Ke!==A)&&(i.blendColor(Ae.r,Ae.g,Ae.b,Ke),w.copy(Ae),A=Ke),v=F,U=!1}function ut(F,Mt){F.side===Fe?ht(i.CULL_FACE):vt(i.CULL_FACE);let $=F.side===Qe;Mt&&($=!$),ct($),F.blending===xi&&F.transparent===!1?C(Rn):C(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);const tt=F.stencilWrite;o.setTest(tt),tt&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Nt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?vt(i.SAMPLE_ALPHA_TO_COVERAGE):ht(i.SAMPLE_ALPHA_TO_COVERAGE)}function ct(F){I!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),I=F)}function rt(F){F!==bu?(vt(i.CULL_FACE),F!==_&&(F===wl?i.cullFace(i.BACK):F===Mu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ht(i.CULL_FACE),_=F}function ft(F){F!==S&&(k&&i.lineWidth(F),S=F)}function Nt(F,Mt,$){F?(vt(i.POLYGON_OFFSET_FILL),(V!==Mt||B!==$)&&(i.polygonOffset(Mt,$),V=Mt,B=$)):ht(i.POLYGON_OFFSET_FILL)}function bt(F){F?vt(i.SCISSOR_TEST):ht(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+L-1),q!==F&&(i.activeTexture(F),q=F)}function M(F,Mt,$){$===void 0&&(q===null?$=i.TEXTURE0+L-1:$=q);let tt=lt[$];tt===void 0&&(tt={type:void 0,texture:void 0},lt[$]=tt),(tt.type!==F||tt.texture!==Mt)&&(q!==$&&(i.activeTexture($),q=$),i.bindTexture(F,Mt||et[F]),tt.type=F,tt.texture=Mt)}function G(){const F=lt[q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function wt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(F){Xt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Xt.copy(F))}function Ct(F){Kt.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Kt.copy(F))}function Qt(F,Mt){let $=a.get(Mt);$===void 0&&($=new WeakMap,a.set(Mt,$));let tt=$.get(F);tt===void 0&&(tt=i.getUniformBlockIndex(Mt,F.name),$.set(F,tt))}function $t(F,Mt){const tt=a.get(Mt).get(F);l.get(Mt)!==tt&&(i.uniformBlockBinding(Mt,tt,F.__bindingPointIndex),l.set(Mt,tt))}function fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,lt={},h={},u=new WeakMap,p=[],m=null,d=!1,v=null,f=null,g=null,x=null,y=null,b=null,R=null,w=new Vt(0,0,0),A=0,U=!1,I=null,_=null,S=null,V=null,B=null,Xt.set(0,0,i.canvas.width,i.canvas.height),Kt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:vt,disable:ht,bindFramebuffer:Ft,drawBuffers:Ot,useProgram:it,setBlending:C,setMaterial:ut,setFlipSided:ct,setCullFace:rt,setLineWidth:ft,setPolygonOffset:Nt,setScissorTest:bt,activeTexture:T,bindTexture:M,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:Et,texImage3D:Gt,updateUBOMapping:Qt,uniformBlockBinding:$t,texStorage2D:Jt,texStorage3D:at,texSubImage2D:K,texSubImage3D:Lt,compressedTexSubImage2D:dt,compressedTexSubImage3D:wt,scissor:Ht,viewport:Ct,reset:fe}}function mc(i,t,e,n){const s=eg(n);switch(e){case hh:return i*t;case fh:return i*t;case dh:return i*t*2;case Yo:return i*t/s.components*s.byteLength;case jo:return i*t/s.components*s.byteLength;case ph:return i*t*2/s.components*s.byteLength;case Ko:return i*t*2/s.components*s.byteLength;case uh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Zo:return i*t*4/s.components*s.byteLength;case Tr:case Ar:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Cr:case Rr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ro:case oo:return Math.max(i,16)*Math.max(t,8)/4;case so:case ao:return Math.max(i,8)*Math.max(t,8)/2;case lo:case co:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case uo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case fo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case po:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case mo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case go:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case vo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case xo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Mo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case So:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Eo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Pr:case To:case Ao:return Math.ceil(i/4)*Math.ceil(t/4)*16;case mh:case Co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ro:case Po:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function eg(i){switch(i){case zn:case oh:return{byteLength:1,components:1};case ks:case lh:case Mn:return{byteLength:2,components:1};case $o:case Xo:return{byteLength:2,components:4};case yi:case qo:case Cn:return{byteLength:4,components:1};case ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function ng(i,t,e,n,s,r,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,h=new WeakMap;let u;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(T,M){return m?new OffscreenCanvas(T,M):Gr("canvas")}function v(T,M,G){let j=1;const Q=bt(T);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(j*Q.width),Lt=Math.floor(j*Q.height);u===void 0&&(u=d(K,Lt));const dt=M?d(K,Lt):u;return dt.width=K,dt.height=Lt,dt.getContext("2d").drawImage(T,0,0,K,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+K+"x"+Lt+")."),dt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==Le&&T.minFilter!==yn}function g(T){i.generateMipmap(T)}function x(T,M,G,j,Q=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=M;if(M===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),M===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),M===i.RGBA){const Lt=Q?Fr:se.getTransfer(j);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=Lt===pe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function y(T,M){let G;return T?M===null||M===yi||M===rs?G=i.DEPTH24_STENCIL8:M===Cn?G=i.DEPTH32F_STENCIL8:M===ks&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===yi||M===rs?G=i.DEPTH_COMPONENT24:M===Cn?G=i.DEPTH_COMPONENT32F:M===ks&&(G=i.DEPTH_COMPONENT16),G}function b(T,M){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==Le&&T.minFilter!==yn?Math.log2(Math.max(M.width,M.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?M.mipmaps.length:1}function R(T){const M=T.target;M.removeEventListener("dispose",R),A(M),M.isVideoTexture&&h.delete(M)}function w(T){const M=T.target;M.removeEventListener("dispose",w),I(M)}function A(T){const M=n.get(T);if(M.__webglInit===void 0)return;const G=T.source,j=p.get(G);if(j){const Q=j[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&U(T),Object.keys(j).length===0&&p.delete(G)}n.remove(T)}function U(T){const M=n.get(T);i.deleteTexture(M.__webglTexture);const G=T.source,j=p.get(G);delete j[M.__cacheKey],o.memory.textures--}function I(T){const M=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let Q=0;Q<M.__webglFramebuffer[j].length;Q++)i.deleteFramebuffer(M.__webglFramebuffer[j][Q]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=T.textures;for(let j=0,Q=G.length;j<Q;j++){const K=n.get(G[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(T)}let _=0;function S(){_=0}function V(){const T=_;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),_+=1,T}function B(T){const M=[];return M.push(T.wrapS),M.push(T.wrapT),M.push(T.wrapR||0),M.push(T.magFilter),M.push(T.minFilter),M.push(T.anisotropy),M.push(T.internalFormat),M.push(T.format),M.push(T.type),M.push(T.generateMipmaps),M.push(T.premultiplyAlpha),M.push(T.flipY),M.push(T.unpackAlignment),M.push(T.colorSpace),M.join()}function L(T,M){const G=n.get(T);if(T.isVideoTexture&&ft(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Kt(G,T,M);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function k(T,M){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Kt(G,T,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function N(T,M){const G=n.get(T);if(T.version>0&&G.__version!==T.version){Kt(G,T,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function J(T,M){const G=n.get(T);if(T.version>0&&G.__version!==T.version){X(G,T,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const q={[kr]:i.REPEAT,[vi]:i.CLAMP_TO_EDGE,[io]:i.MIRRORED_REPEAT},lt={[Le]:i.NEAREST,[Wu]:i.NEAREST_MIPMAP_NEAREST,[Xs]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[_i]:i.LINEAR_MIPMAP_LINEAR},mt={[Xu]:i.NEVER,[Qu]:i.ALWAYS,[Yu]:i.LESS,[vh]:i.LEQUAL,[ju]:i.EQUAL,[Ju]:i.GEQUAL,[Ku]:i.GREATER,[Zu]:i.NOTEQUAL};function gt(T,M){if(M.type===Cn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===yn||M.magFilter===ea||M.magFilter===Xs||M.magFilter===_i||M.minFilter===yn||M.minFilter===ea||M.minFilter===Xs||M.minFilter===_i)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,q[M.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,q[M.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,q[M.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,lt[M.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,lt[M.minFilter]),M.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,mt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Le||M.minFilter!==Xs&&M.minFilter!==_i||M.type===Cn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Xt(T,M){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,M.addEventListener("dispose",R));const j=M.source;let Q=p.get(j);Q===void 0&&(Q={},p.set(j,Q));const K=B(M);if(K!==T.__cacheKey){Q[K]===void 0&&(Q[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[K].usedTimes++;const Lt=Q[T.__cacheKey];Lt!==void 0&&(Q[T.__cacheKey].usedTimes--,Lt.usedTimes===0&&U(M)),T.__cacheKey=K,T.__webglTexture=Q[K].texture}return G}function Kt(T,M,G){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const Q=Xt(T,M),K=M.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+G);const Lt=n.get(K);if(K.version!==Lt.__version||Q===!0){e.activeTexture(i.TEXTURE0+G);const dt=se.getPrimaries(se.workingColorSpace),wt=M.colorSpace===Kn?null:se.getPrimaries(M.colorSpace),Jt=M.colorSpace===Kn||dt===wt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let at=v(M.image,!1,s.maxTextureSize);at=Nt(M,at);const Et=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let Ht=x(M.internalFormat,Et,Gt,M.colorSpace,M.isVideoTexture);gt(j,M);let Ct;const Qt=M.mipmaps,$t=M.isVideoTexture!==!0,fe=Lt.__version===void 0||Q===!0,F=K.dataReady,Mt=b(M,at);if(M.isDepthTexture)Ht=y(M.format===as,M.type),fe&&($t?e.texStorage2D(i.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,Et,Gt,null));else if(M.isDataTexture)if(Qt.length>0){$t&&fe&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,Qt[0].width,Qt[0].height);for(let $=0,tt=Qt.length;$<tt;$++)Ct=Qt[$],$t?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Et,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,$,Ht,Ct.width,Ct.height,0,Et,Gt,Ct.data);M.generateMipmaps=!1}else $t?(fe&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,at.width,at.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,Et,Gt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,Et,Gt,at.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){$t&&fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ht,Qt[0].width,Qt[0].height,at.depth);for(let $=0,tt=Qt.length;$<tt;$++)if(Ct=Qt[$],M.format!==bn)if(Et!==null)if($t){if(F)if(M.layerUpdates.size>0){const xt=mc(Ct.width,Ct.height,M.format,M.type);for(const St of M.layerUpdates){const te=Ct.data.subarray(St*xt/Ct.data.BYTES_PER_ELEMENT,(St+1)*xt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,St,Ct.width,Ct.height,1,Et,te,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,at.depth,Et,Ct.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Ht,Ct.width,Ct.height,at.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Ct.width,Ct.height,at.depth,Et,Gt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Ht,Ct.width,Ct.height,at.depth,0,Et,Gt,Ct.data)}else{$t&&fe&&e.texStorage2D(i.TEXTURE_2D,Mt,Ht,Qt[0].width,Qt[0].height);for(let $=0,tt=Qt.length;$<tt;$++)Ct=Qt[$],M.format!==bn?Et!==null?$t?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Et,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Ht,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Ct.width,Ct.height,Et,Gt,Ct.data):e.texImage2D(i.TEXTURE_2D,$,Ht,Ct.width,Ct.height,0,Et,Gt,Ct.data)}else if(M.isDataArrayTexture)if($t){if(fe&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Mt,Ht,at.width,at.height,at.depth),F)if(M.layerUpdates.size>0){const $=mc(at.width,at.height,M.format,M.type);for(const tt of M.layerUpdates){const xt=at.data.subarray(tt*$/at.data.BYTES_PER_ELEMENT,(tt+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,at.width,at.height,1,Et,Gt,xt)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,Et,Gt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,Et,Gt,at.data);else if(M.isData3DTexture)$t?(fe&&e.texStorage3D(i.TEXTURE_3D,Mt,Ht,at.width,at.height,at.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,Et,Gt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,Et,Gt,at.data);else if(M.isFramebufferTexture){if(fe)if($t)e.texStorage2D(i.TEXTURE_2D,Mt,Ht,at.width,at.height);else{let $=at.width,tt=at.height;for(let xt=0;xt<Mt;xt++)e.texImage2D(i.TEXTURE_2D,xt,Ht,$,tt,0,Et,Gt,null),$>>=1,tt>>=1}}else if(Qt.length>0){if($t&&fe){const $=bt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Mt,Ht,$.width,$.height)}for(let $=0,tt=Qt.length;$<tt;$++)Ct=Qt[$],$t?F&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et,Gt,Ct):e.texImage2D(i.TEXTURE_2D,$,Ht,Et,Gt,Ct);M.generateMipmaps=!1}else if($t){if(fe){const $=bt(at);e.texStorage2D(i.TEXTURE_2D,Mt,Ht,$.width,$.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Et,Gt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ht,Et,Gt,at);f(M)&&g(j),Lt.__version=K.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function X(T,M,G){if(M.image.length!==6)return;const j=Xt(T,M),Q=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const K=n.get(Q);if(Q.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+G);const Lt=se.getPrimaries(se.workingColorSpace),dt=M.colorSpace===Kn?null:se.getPrimaries(M.colorSpace),wt=M.colorSpace===Kn||Lt===dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);const Jt=M.isCompressedTexture||M.image[0].isCompressedTexture,at=M.image[0]&&M.image[0].isDataTexture,Et=[];for(let tt=0;tt<6;tt++)!Jt&&!at?Et[tt]=v(M.image[tt],!0,s.maxCubemapSize):Et[tt]=at?M.image[tt].image:M.image[tt],Et[tt]=Nt(M,Et[tt]);const Gt=Et[0],Ht=r.convert(M.format,M.colorSpace),Ct=r.convert(M.type),Qt=x(M.internalFormat,Ht,Ct,M.colorSpace),$t=M.isVideoTexture!==!0,fe=K.__version===void 0||j===!0,F=Q.dataReady;let Mt=b(M,Gt);gt(i.TEXTURE_CUBE_MAP,M);let $;if(Jt){$t&&fe&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Qt,Gt.width,Gt.height);for(let tt=0;tt<6;tt++){$=Et[tt].mipmaps;for(let xt=0;xt<$.length;xt++){const St=$[xt];M.format!==bn?Ht!==null?$t?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,St.width,St.height,Ht,St.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,Qt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,0,0,St.width,St.height,Ht,Ct,St.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt,Qt,St.width,St.height,0,Ht,Ct,St.data)}}}else{if($=M.mipmaps,$t&&fe){$.length>0&&Mt++;const tt=bt(Et[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Mt,Qt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(at){$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Et[tt].width,Et[tt].height,Ht,Ct,Et[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Et[tt].width,Et[tt].height,0,Ht,Ct,Et[tt].data);for(let xt=0;xt<$.length;xt++){const te=$[xt].image[tt].image;$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,te.width,te.height,Ht,Ct,te.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,Qt,te.width,te.height,0,Ht,Ct,te.data)}}else{$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Ht,Ct,Et[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Qt,Ht,Ct,Et[tt]);for(let xt=0;xt<$.length;xt++){const St=$[xt];$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,0,0,Ht,Ct,St.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,xt+1,Qt,Ht,Ct,St.image[tt])}}}f(M)&&g(i.TEXTURE_CUBE_MAP),K.__version=Q.version,M.onUpdate&&M.onUpdate(M)}T.__version=M.version}function et(T,M,G,j,Q,K){const Lt=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),wt=x(G.internalFormat,Lt,dt,G.colorSpace);if(!n.get(M).__hasExternalTextures){const at=Math.max(1,M.width>>K),Et=Math.max(1,M.height>>K);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?e.texImage3D(Q,K,wt,at,Et,M.depth,0,Lt,dt,null):e.texImage2D(Q,K,wt,at,Et,0,Lt,dt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Q,n.get(G).__webglTexture,0,ct(M)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Q,n.get(G).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(T,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),M.depthBuffer){const j=M.depthTexture,Q=j&&j.isDepthTexture?j.type:null,K=y(M.stencilBuffer,Q),Lt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,dt=ct(M);rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,dt,K,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,dt,K,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,K,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Lt,i.RENDERBUFFER,T)}else{const j=M.textures;for(let Q=0;Q<j.length;Q++){const K=j[Q],Lt=r.convert(K.format,K.colorSpace),dt=r.convert(K.type),wt=x(K.internalFormat,Lt,dt,K.colorSpace),Jt=ct(M);G&&rt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,wt,M.width,M.height):rt(M)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,wt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,wt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(T,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,Q=ct(M);if(M.depthTexture.format===Qi)rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===as)rt(M)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ft(T){const M=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==T.depthTexture){const j=T.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const Q=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),M.__depthDisposeCallback=Q}M.__boundDepthTexture=j}if(T.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ht(M.__webglFramebuffer,T)}else if(G){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),vt(M.__webglDepthbuffer[j],T,!1);else{const Q=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),vt(M.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Q=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Q)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(T,M,G){const j=n.get(T);M!==void 0&&et(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ft(T)}function it(T){const M=T.texture,G=n.get(T),j=n.get(M);T.addEventListener("dispose",w);const Q=T.textures,K=T.isWebGLCubeRenderTarget===!0,Lt=Q.length>1;if(Lt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let wt=0;wt<M.mipmaps.length;wt++)G.__webglFramebuffer[dt][wt]=i.createFramebuffer()}else G.__webglFramebuffer[dt]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<M.mipmaps.length;dt++)G.__webglFramebuffer[dt]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Lt)for(let dt=0,wt=Q.length;dt<wt;dt++){const Jt=n.get(Q[dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&rt(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<Q.length;dt++){const wt=Q[dt];G.__webglColorRenderbuffer[dt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const Jt=r.convert(wt.format,wt.colorSpace),at=r.convert(wt.type),Et=x(wt.internalFormat,Jt,at,wt.colorSpace,T.isXRRenderTarget===!0),Gt=ct(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Et,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+dt,i.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),vt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),gt(i.TEXTURE_CUBE_MAP,M);for(let dt=0;dt<6;dt++)if(M.mipmaps&&M.mipmaps.length>0)for(let wt=0;wt<M.mipmaps.length;wt++)et(G.__webglFramebuffer[dt][wt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,wt);else et(G.__webglFramebuffer[dt],T,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);f(M)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let dt=0,wt=Q.length;dt<wt;dt++){const Jt=Q[dt],at=n.get(Jt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),gt(i.TEXTURE_2D,Jt),et(G.__webglFramebuffer,T,Jt,i.COLOR_ATTACHMENT0+dt,i.TEXTURE_2D,0),f(Jt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let dt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(dt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(dt,j.__webglTexture),gt(dt,M),M.mipmaps&&M.mipmaps.length>0)for(let wt=0;wt<M.mipmaps.length;wt++)et(G.__webglFramebuffer[wt],T,M,i.COLOR_ATTACHMENT0,dt,wt);else et(G.__webglFramebuffer,T,M,i.COLOR_ATTACHMENT0,dt,0);f(M)&&g(dt),e.unbindTexture()}T.depthBuffer&&Ft(T)}function At(T){const M=T.textures;for(let G=0,j=M.length;G<j;G++){const Q=M[G];if(f(Q)){const K=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Lt=n.get(Q).__webglTexture;e.bindTexture(K,Lt),g(K),e.unbindTexture()}}}const Z=[],C=[];function ut(T){if(T.samples>0){if(rt(T)===!1){const M=T.textures,G=T.width,j=T.height;let Q=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Lt=n.get(T),dt=M.length>1;if(dt)for(let wt=0;wt<M.length;wt++)e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let wt=0;wt<M.length;wt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),dt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[wt]);const Jt=n.get(M[wt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,Q,i.NEAREST),a===!0&&(Z.length=0,C.length=0,Z.push(i.COLOR_ATTACHMENT0+wt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Z.push(K),C.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Z))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),dt)for(let wt=0;wt<M.length;wt++){e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.RENDERBUFFER,Lt.__webglColorRenderbuffer[wt]);const Jt=n.get(M[wt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Lt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+wt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&a){const M=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function ct(T){return Math.min(s.maxSamples,T.samples)}function rt(T){const M=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ft(T){const M=o.render.frame;h.get(T)!==M&&(h.set(T,M),T.update())}function Nt(T,M){const G=T.colorSpace,j=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==ni&&G!==Kn&&(se.getTransfer(G)===pe?(j!==bn||Q!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function bt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=J,this.rebindTextures=Ot,this.setupRenderTarget=it,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ft,this.setupFrameBufferTexture=et,this.useMultisampledRTT=rt}function ig(i,t){function e(n,s=Kn){let r;const o=se.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===$o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===oh)return i.BYTE;if(n===lh)return i.SHORT;if(n===ks)return i.UNSIGNED_SHORT;if(n===qo)return i.INT;if(n===yi)return i.UNSIGNED_INT;if(n===Cn)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===hh)return i.ALPHA;if(n===uh)return i.RGB;if(n===bn)return i.RGBA;if(n===fh)return i.LUMINANCE;if(n===dh)return i.LUMINANCE_ALPHA;if(n===Qi)return i.DEPTH_COMPONENT;if(n===as)return i.DEPTH_STENCIL;if(n===Yo)return i.RED;if(n===jo)return i.RED_INTEGER;if(n===ph)return i.RG;if(n===Ko)return i.RG_INTEGER;if(n===Zo)return i.RGBA_INTEGER;if(n===Tr||n===Ar||n===Cr||n===Rr)if(o===pe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Tr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Tr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Rr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===so||n===ro||n===ao||n===oo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===so)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ro)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ao)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===lo||n===co)return o===pe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ho)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===uo||n===fo||n===po||n===mo||n===go||n===vo||n===_o||n===xo||n===yo||n===bo||n===Mo||n===So||n===wo||n===Eo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===uo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===fo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===po)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===go)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===vo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_o)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===xo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===bo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Mo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===So)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Eo)return o===pe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pr||n===To||n===Ao)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Pr)return o===pe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===To)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mh||n===Co||n===Ro||n===Po)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ro)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Po)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class sg extends Je{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ce extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rg={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),g=this._getHandJoint(c,v);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],p=h.position.distanceTo(u.position),m=.02,d=.005;c.inputState.pinching&&p>m+d?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&p<=m-d&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(rg)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const ag=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,og=`
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

}`;class lg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new $e,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new qe({vertexShader:ag,fragmentShader:og,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new De(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class cg extends ds{constructor(t,e){super();const n=this;let s=null,r=1,o=null,l="local-floor",a=1,c=null,h=null,u=null,p=null,m=null,d=null;const v=new lg,f=e.getContextAttributes();let g=null,x=null;const y=[],b=[],R=new nt;let w=null;const A=new Je;A.layers.enable(1),A.viewport=new ue;const U=new Je;U.layers.enable(2),U.viewport=new ue;const I=[A,U],_=new sg;_.layers.enable(1),_.layers.enable(2);let S=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let et=y[X];return et===void 0&&(et=new La,y[X]=et),et.getTargetRaySpace()},this.getControllerGrip=function(X){let et=y[X];return et===void 0&&(et=new La,y[X]=et),et.getGripSpace()},this.getHand=function(X){let et=y[X];return et===void 0&&(et=new La,y[X]=et),et.getHandSpace()};function B(X){const et=b.indexOf(X.inputSource);if(et===-1)return;const vt=y[et];vt!==void 0&&(vt.update(X.inputSource,X.frame,c||o),vt.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",k);for(let X=0;X<y.length;X++){const et=b[X];et!==null&&(b[X]=null,y[X].disconnect(et))}S=null,V=null,v.reset(),t.setRenderTarget(g),m=null,p=null,u=null,s=null,x=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",L),s.addEventListener("inputsourceschange",k),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const et={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new on(m.framebufferWidth,m.framebufferHeight,{format:bn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let et=null,vt=null,ht=null;f.depth&&(ht=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=f.stencil?as:Qi,vt=f.stencil?rs:yi);const Ft={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),p=u.createProjectionLayer(Ft),s.updateRenderState({layers:[p]}),t.setPixelRatio(1),t.setSize(p.textureWidth,p.textureHeight,!1),x=new on(p.textureWidth,p.textureHeight,{format:bn,type:zn,depthTexture:new Ph(p.textureWidth,p.textureHeight,vt,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await s.requestReferenceSpace(l),Kt.setContext(s),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function k(X){for(let et=0;et<X.removed.length;et++){const vt=X.removed[et],ht=b.indexOf(vt);ht>=0&&(b[ht]=null,y[ht].disconnect(vt))}for(let et=0;et<X.added.length;et++){const vt=X.added[et];let ht=b.indexOf(vt);if(ht===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=b.length){b.push(vt),ht=Ot;break}else if(b[Ot]===null){b[Ot]=vt,ht=Ot;break}if(ht===-1)break}const Ft=y[ht];Ft&&Ft.connect(vt)}}const N=new D,J=new D;function q(X,et,vt){N.setFromMatrixPosition(et.matrixWorld),J.setFromMatrixPosition(vt.matrixWorld);const ht=N.distanceTo(J),Ft=et.projectionMatrix.elements,Ot=vt.projectionMatrix.elements,it=Ft[14]/(Ft[10]-1),At=Ft[14]/(Ft[10]+1),Z=(Ft[9]+1)/Ft[5],C=(Ft[9]-1)/Ft[5],ut=(Ft[8]-1)/Ft[0],ct=(Ot[8]+1)/Ot[0],rt=it*ut,ft=it*ct,Nt=ht/(-ut+ct),bt=Nt*-ut;if(et.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(bt),X.translateZ(Nt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ft[10]===-1)X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const T=it+Nt,M=At+Nt,G=rt-bt,j=ft+(ht-bt),Q=Z*At/M*T,K=C*At/M*T;X.projectionMatrix.makePerspective(G,j,Q,K,T,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function lt(X,et){et===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(et.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let et=X.near,vt=X.far;v.texture!==null&&(v.depthNear>0&&(et=v.depthNear),v.depthFar>0&&(vt=v.depthFar)),_.near=U.near=A.near=et,_.far=U.far=A.far=vt,(S!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,V=_.far);const ht=X.parent,Ft=_.cameras;lt(_,ht);for(let Ot=0;Ot<Ft.length;Ot++)lt(Ft[Ot],ht);Ft.length===2?q(_,A,U):_.projectionMatrix.copy(A.projectionMatrix),mt(X,_,ht)};function mt(X,et,vt){vt===null?X.matrix.copy(et.matrixWorld):(X.matrix.copy(vt.matrixWorld),X.matrix.invert(),X.matrix.multiply(et.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(et.projectionMatrix),X.projectionMatrixInverse.copy(et.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Vr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(p===null&&m===null))return a},this.setFoveation=function(X){a=X,p!==null&&(p.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let gt=null;function Xt(X,et){if(h=et.getViewerPose(c||o),d=et,h!==null){const vt=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let ht=!1;vt.length!==_.cameras.length&&(_.cameras.length=0,ht=!0);for(let Ot=0;Ot<vt.length;Ot++){const it=vt[Ot];let At=null;if(m!==null)At=m.getViewport(it);else{const C=u.getViewSubImage(p,it);At=C.viewport,Ot===0&&(t.setRenderTargetTextures(x,C.colorTexture,p.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(x))}let Z=I[Ot];Z===void 0&&(Z=new Je,Z.layers.enable(Ot),Z.viewport=new ue,I[Ot]=Z),Z.matrix.fromArray(it.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(it.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(At.x,At.y,At.width,At.height),Ot===0&&(_.matrix.copy(Z.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ht===!0&&_.cameras.push(Z)}const Ft=s.enabledFeatures;if(Ft&&Ft.includes("depth-sensing")){const Ot=u.getDepthInformation(vt[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let vt=0;vt<y.length;vt++){const ht=b[vt],Ft=y[vt];ht!==null&&Ft!==void 0&&Ft.update(ht,et,c||o)}gt&&gt(X,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),d=null}const Kt=new Rh;Kt.setAnimationLoop(Xt),this.setAnimationLoop=function(X){gt=X},this.dispose=function(){}}}const ui=new wn,hg=new ee;function ug(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,Th(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,x,y,b){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),u(f,g)):g.isMeshPhongMaterial?(r(f,g),h(f,g)):g.isMeshStandardMaterial?(r(f,g),p(f,g),g.isMeshPhysicalMaterial&&m(f,g,b)):g.isMeshMatcapMaterial?(r(f,g),d(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),v(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(o(f,g),g.isLineDashedMaterial&&l(f,g)):g.isPointsMaterial?a(f,g,x,y):g.isSpriteMaterial?c(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Qe&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Qe&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const x=t.get(g),y=x.envMap,b=x.envMapRotation;y&&(f.envMap.value=y,ui.copy(b),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),f.envMapRotation.value.setFromMatrix4(hg.makeRotationFromEuler(ui)),f.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function o(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function l(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function a(f,g,x,y){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*x,f.scale.value=y*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function c(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function h(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function u(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function p(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function m(f,g,x){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Qe&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function d(f,g){g.matcap&&(f.matcap.value=g.matcap)}function v(f,g){const x=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function fg(i,t,e,n){let s={},r={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(x,y){const b=y.program;n.uniformBlockBinding(x,b)}function c(x,y){let b=s[x.id];b===void 0&&(d(x),b=h(x),s[x.id]=b,x.addEventListener("dispose",f));const R=y.program;n.updateUBOMapping(x,R);const w=t.render.frame;r[x.id]!==w&&(p(x),r[x.id]=w)}function h(x){const y=u();x.__bindingPointIndex=y;const b=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function u(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(x){const y=s[x.id],b=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let w=0,A=b.length;w<A;w++){const U=Array.isArray(b[w])?b[w]:[b[w]];for(let I=0,_=U.length;I<_;I++){const S=U[I];if(m(S,w,I,R)===!0){const V=S.__offset,B=Array.isArray(S.value)?S.value:[S.value];let L=0;for(let k=0;k<B.length;k++){const N=B[k],J=v(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,i.bufferSubData(i.UNIFORM_BUFFER,V+L,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,L),L+=J.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,y,b,R){const w=x.value,A=y+"_"+b;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const U=R[A];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return R[A]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function d(x){const y=x.uniforms;let b=0;const R=16;for(let A=0,U=y.length;A<U;A++){const I=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,S=I.length;_<S;_++){const V=I[_],B=Array.isArray(V.value)?V.value:[V.value];for(let L=0,k=B.length;L<k;L++){const N=B[L],J=v(N),q=b%R,lt=q%J.boundary,mt=q+lt;b+=lt,mt!==0&&R-mt<J.storage&&(b+=R-mt),V.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=J.storage}}}const w=b%R;return w>0&&(b+=R-w),x.__size=b,x.__cache={},this}function v(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function f(x){const y=x.target;y.removeEventListener("dispose",f);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:a,update:c,dispose:g}}class dg{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const m=new Uint32Array(4),d=new Int32Array(4);let v=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=fn,this.toneMapping=Qn,this.toneMappingExposure=1;const y=this;let b=!1,R=0,w=0,A=null,U=-1,I=null;const _=new ue,S=new ue;let V=null;const B=new Vt(0);let L=0,k=e.width,N=e.height,J=1,q=null,lt=null;const mt=new ue(0,0,k,N),gt=new ue(0,0,k,N);let Xt=!1;const Kt=new tl;let X=!1,et=!1;const vt=new ee,ht=new ee,Ft=new D,Ot=new ue,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Z(){return A===null?J:1}let C=n;function ut(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Go}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",St,!1),C===null){const O="webgl2";if(C=ut(O,E),C===null)throw ut(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ct,rt,ft,Nt,bt,T,M,G,j,Q,K,Lt,dt,wt,Jt,at,Et,Gt,Ht,Ct,Qt,$t,fe,F;function Mt(){ct=new xm(C),ct.init(),$t=new ig(C,ct),rt=new dm(C,ct,t,$t),ft=new tg(C),rt.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Nt=new Mm(C),bt=new z0,T=new ng(C,ct,ft,bt,rt,$t,Nt),M=new mm(y),G=new _m(y),j=new Rf(C),fe=new um(C,j),Q=new ym(C,j,Nt,fe),K=new wm(C,Q,j,Nt),Ht=new Sm(C,rt,T),at=new pm(bt),Lt=new B0(y,M,G,ct,rt,fe,at),dt=new ug(y,bt),wt=new G0,Jt=new Y0(ct),Gt=new hm(y,M,G,ft,K,p,a),Et=new J0(y,K,rt),F=new fg(C,Nt,rt,ft),Ct=new fm(C,ct,Nt),Qt=new bm(C,ct,Nt),Nt.programs=Lt.programs,y.capabilities=rt,y.extensions=ct,y.properties=bt,y.renderLists=wt,y.shadowMap=Et,y.state=ft,y.info=Nt}Mt();const $=new cg(y,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=ct.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ct.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(E){E!==void 0&&(J=E,this.setSize(k,N,!1))},this.getSize=function(E){return E.set(k,N)},this.setSize=function(E,O,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,N=O,e.width=Math.floor(E*J),e.height=Math.floor(O*J),H===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(k*J,N*J).floor()},this.setDrawingBufferSize=function(E,O,H){k=E,N=O,J=H,e.width=Math.floor(E*H),e.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,O,H,W){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,O,H,W),ft.viewport(_.copy(mt).multiplyScalar(J).round())},this.getScissor=function(E){return E.copy(gt)},this.setScissor=function(E,O,H,W){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,O,H,W),ft.scissor(S.copy(gt).multiplyScalar(J).round())},this.getScissorTest=function(){return Xt},this.setScissorTest=function(E){ft.setScissorTest(Xt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){lt=E},this.getClearColor=function(E){return E.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(E=!0,O=!0,H=!0){let W=0;if(E){let z=!1;if(A!==null){const ot=A.texture.format;z=ot===Zo||ot===Ko||ot===jo}if(z){const ot=A.texture.type,yt=ot===zn||ot===yi||ot===ks||ot===rs||ot===$o||ot===Xo,Rt=Gt.getClearColor(),Dt=Gt.getClearAlpha(),Bt=Rt.r,zt=Rt.g,Ut=Rt.b;yt?(m[0]=Bt,m[1]=zt,m[2]=Ut,m[3]=Dt,C.clearBufferuiv(C.COLOR,0,m)):(d[0]=Bt,d[1]=zt,d[2]=Ut,d[3]=Dt,C.clearBufferiv(C.COLOR,0,d))}else W|=C.COLOR_BUFFER_BIT}O&&(W|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",St,!1),wt.dispose(),Jt.dispose(),bt.dispose(),M.dispose(),G.dispose(),K.dispose(),fe.dispose(),F.dispose(),Lt.dispose(),$.dispose(),$.removeEventListener("sessionstart",ml),$.removeEventListener("sessionend",gl),ri.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Nt.autoReset,O=Et.enabled,H=Et.autoUpdate,W=Et.needsUpdate,z=Et.type;Mt(),Nt.autoReset=E,Et.enabled=O,Et.autoUpdate=H,Et.needsUpdate=W,Et.type=z}function St(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function te(E){const O=E.target;O.removeEventListener("dispose",te),Ae(O)}function Ae(E){Ke(E),bt.remove(E)}function Ke(E){const O=bt.get(E).programs;O!==void 0&&(O.forEach(function(H){Lt.releaseProgram(H)}),E.isShaderMaterial&&Lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,W,z,ot){O===null&&(O=it);const yt=z.isMesh&&z.matrixWorld.determinant()<0,Rt=mu(E,O,H,W,z);ft.setMaterial(W,yt);let Dt=H.index,Bt=1;if(W.wireframe===!0){if(Dt=Q.getWireframeAttribute(H),Dt===void 0)return;Bt=2}const zt=H.drawRange,Ut=H.attributes.position;let le=zt.start*Bt,ge=(zt.start+zt.count)*Bt;ot!==null&&(le=Math.max(le,ot.start*Bt),ge=Math.min(ge,(ot.start+ot.count)*Bt)),Dt!==null?(le=Math.max(le,0),ge=Math.min(ge,Dt.count)):Ut!=null&&(le=Math.max(le,0),ge=Math.min(ge,Ut.count));const Me=ge-le;if(Me<0||Me===1/0)return;fe.setup(z,W,Rt,H,Dt);let tn,re=Ct;if(Dt!==null&&(tn=j.get(Dt),re=Qt,re.setIndex(tn)),z.isMesh)W.wireframe===!0?(ft.setLineWidth(W.wireframeLinewidth*Z()),re.setMode(C.LINES)):re.setMode(C.TRIANGLES);else if(z.isLine){let kt=W.linewidth;kt===void 0&&(kt=1),ft.setLineWidth(kt*Z()),z.isLineSegments?re.setMode(C.LINES):z.isLineLoop?re.setMode(C.LINE_LOOP):re.setMode(C.LINE_STRIP)}else z.isPoints?re.setMode(C.POINTS):z.isSprite&&re.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)re.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))re.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const kt=z._multiDrawStarts,Be=z._multiDrawCounts,ae=z._multiDrawCount,gn=Dt?j.get(Dt).bytesPerElement:1,wi=bt.get(W).currentProgram.getUniforms();for(let en=0;en<ae;en++)wi.setValue(C,"_gl_DrawID",en),re.render(kt[en]/gn,Be[en])}else if(z.isInstancedMesh)re.renderInstances(le,Me,z.count);else if(H.isInstancedBufferGeometry){const kt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Be=Math.min(H.instanceCount,kt);re.renderInstances(le,Me,Be)}else re.render(le,Me)};function ie(E,O,H){E.transparent===!0&&E.side===Fe&&E.forceSinglePass===!1?(E.side=Qe,E.needsUpdate=!0,$s(E,O,H),E.side=ei,E.needsUpdate=!0,$s(E,O,H),E.side=Fe):$s(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),f=Jt.get(H),f.init(O),x.push(f),H.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(O.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const ot=z.material;if(ot)if(Array.isArray(ot))for(let yt=0;yt<ot.length;yt++){const Rt=ot[yt];ie(Rt,H,z),W.add(Rt)}else ie(ot,H,z),W.add(ot)}),x.pop(),f=null,W},this.compileAsync=function(E,O,H=null){const W=this.compile(E,O,H);return new Promise(z=>{function ot(){if(W.forEach(function(yt){bt.get(yt).currentProgram.isReady()&&W.delete(yt)}),W.size===0){z(E);return}setTimeout(ot,10)}ct.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let Ze=null;function Ln(E){Ze&&Ze(E)}function ml(){ri.stop()}function gl(){ri.start()}const ri=new Rh;ri.setAnimationLoop(Ln),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){Ze=E,$.setAnimationLoop(E),E===null?ri.stop():ri.start()},$.addEventListener("sessionstart",ml),$.addEventListener("sessionend",gl),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,O,A),f=Jt.get(E,x.length),f.init(O),x.push(f),ht.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Kt.setFromProjectionMatrix(ht),et=this.localClippingEnabled,X=at.init(this.clippingPlanes,et),v=wt.get(E,g.length),v.init(),g.push(v),$.enabled===!0&&$.isPresenting===!0){const ot=y.xr.getDepthSensingMesh();ot!==null&&Zr(ot,O,-1/0,y.sortObjects)}Zr(E,O,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(q,lt),At=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,At&&Gt.addToRenderList(v,E),this.info.render.frame++,X===!0&&at.beginShadows();const H=f.state.shadowsArray;Et.render(H,E,O),X===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,z=v.transmissive;if(f.setupLights(),O.isArrayCamera){const ot=O.cameras;if(z.length>0)for(let yt=0,Rt=ot.length;yt<Rt;yt++){const Dt=ot[yt];_l(W,z,E,Dt)}At&&Gt.render(E);for(let yt=0,Rt=ot.length;yt<Rt;yt++){const Dt=ot[yt];vl(v,E,Dt,Dt.viewport)}}else z.length>0&&_l(W,z,E,O),At&&Gt.render(E),vl(v,E,O);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(y,E,O),fe.resetDefaultState(),U=-1,I=null,x.pop(),x.length>0?(f=x[x.length-1],X===!0&&at.setGlobalState(y.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Zr(E,O,H,W){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Kt.intersectsSprite(E)){W&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ht);const yt=K.update(E),Rt=E.material;Rt.visible&&v.push(E,yt,Rt,H,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Kt.intersectsObject(E))){const yt=K.update(E),Rt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(yt.boundingSphere===null&&yt.computeBoundingSphere(),Ot.copy(yt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(ht)),Array.isArray(Rt)){const Dt=yt.groups;for(let Bt=0,zt=Dt.length;Bt<zt;Bt++){const Ut=Dt[Bt],le=Rt[Ut.materialIndex];le&&le.visible&&v.push(E,yt,le,H,Ot.z,Ut)}}else Rt.visible&&v.push(E,yt,Rt,H,Ot.z,null)}}const ot=E.children;for(let yt=0,Rt=ot.length;yt<Rt;yt++)Zr(ot[yt],O,H,W)}function vl(E,O,H,W){const z=E.opaque,ot=E.transmissive,yt=E.transparent;f.setupLightsView(H),X===!0&&at.setGlobalState(y.clippingPlanes,H),W&&ft.viewport(_.copy(W)),z.length>0&&qs(z,O,H),ot.length>0&&qs(ot,O,H),yt.length>0&&qs(yt,O,H),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function _l(E,O,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new on(1,1,{generateMipmaps:!0,type:ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float")?Mn:zn,minFilter:_i,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:se.workingColorSpace}));const ot=f.state.transmissionRenderTarget[W.id],yt=W.viewport||_;ot.setSize(yt.z,yt.w);const Rt=y.getRenderTarget();y.setRenderTarget(ot),y.getClearColor(B),L=y.getClearAlpha(),L<1&&y.setClearColor(16777215,.5),y.clear(),At&&Gt.render(H);const Dt=y.toneMapping;y.toneMapping=Qn;const Bt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),X===!0&&at.setGlobalState(y.clippingPlanes,W),qs(E,H,W),T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot),ct.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ut=0,le=O.length;Ut<le;Ut++){const ge=O[Ut],Me=ge.object,tn=ge.geometry,re=ge.material,kt=ge.group;if(re.side===Fe&&Me.layers.test(W.layers)){const Be=re.side;re.side=Qe,re.needsUpdate=!0,xl(Me,H,W,tn,re,kt),re.side=Be,re.needsUpdate=!0,zt=!0}}zt===!0&&(T.updateMultisampleRenderTarget(ot),T.updateRenderTargetMipmap(ot))}y.setRenderTarget(Rt),y.setClearColor(B,L),Bt!==void 0&&(W.viewport=Bt),y.toneMapping=Dt}function qs(E,O,H){const W=O.isScene===!0?O.overrideMaterial:null;for(let z=0,ot=E.length;z<ot;z++){const yt=E[z],Rt=yt.object,Dt=yt.geometry,Bt=W===null?yt.material:W,zt=yt.group;Rt.layers.test(H.layers)&&xl(Rt,O,H,Dt,Bt,zt)}}function xl(E,O,H,W,z,ot){E.onBeforeRender(y,O,H,W,z,ot),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(y,O,H,W,E,ot),z.transparent===!0&&z.side===Fe&&z.forceSinglePass===!1?(z.side=Qe,z.needsUpdate=!0,y.renderBufferDirect(H,O,W,z,E,ot),z.side=ei,z.needsUpdate=!0,y.renderBufferDirect(H,O,W,z,E,ot),z.side=Fe):y.renderBufferDirect(H,O,W,z,E,ot),E.onAfterRender(y,O,H,W,z,ot)}function $s(E,O,H){O.isScene!==!0&&(O=it);const W=bt.get(E),z=f.state.lights,ot=f.state.shadowsArray,yt=z.state.version,Rt=Lt.getParameters(E,z.state,ot,O,H),Dt=Lt.getProgramCacheKey(Rt);let Bt=W.programs;W.environment=E.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(E.isMeshStandardMaterial?G:M).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",te),Bt=new Map,W.programs=Bt);let zt=Bt.get(Dt);if(zt!==void 0){if(W.currentProgram===zt&&W.lightsStateVersion===yt)return bl(E,Rt),zt}else Rt.uniforms=Lt.getUniforms(E),E.onBeforeCompile(Rt,y),zt=Lt.acquireProgram(Rt,Dt),Bt.set(Dt,zt),W.uniforms=Rt.uniforms;const Ut=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ut.clippingPlanes=at.uniform),bl(E,Rt),W.needsLights=vu(E),W.lightsStateVersion=yt,W.needsLights&&(Ut.ambientLightColor.value=z.state.ambient,Ut.lightProbe.value=z.state.probe,Ut.directionalLights.value=z.state.directional,Ut.directionalLightShadows.value=z.state.directionalShadow,Ut.spotLights.value=z.state.spot,Ut.spotLightShadows.value=z.state.spotShadow,Ut.rectAreaLights.value=z.state.rectArea,Ut.ltc_1.value=z.state.rectAreaLTC1,Ut.ltc_2.value=z.state.rectAreaLTC2,Ut.pointLights.value=z.state.point,Ut.pointLightShadows.value=z.state.pointShadow,Ut.hemisphereLights.value=z.state.hemi,Ut.directionalShadowMap.value=z.state.directionalShadowMap,Ut.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ut.spotShadowMap.value=z.state.spotShadowMap,Ut.spotLightMatrix.value=z.state.spotLightMatrix,Ut.spotLightMap.value=z.state.spotLightMap,Ut.pointShadowMap.value=z.state.pointShadowMap,Ut.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=zt,W.uniformsList=null,zt}function yl(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Dr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function bl(E,O){const H=bt.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function mu(E,O,H,W,z){O.isScene!==!0&&(O=it),T.resetTextureUnits();const ot=O.fog,yt=W.isMeshStandardMaterial?O.environment:null,Rt=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:ni,Dt=(W.isMeshStandardMaterial?G:M).get(W.envMap||yt),Bt=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,zt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ut=!!H.morphAttributes.position,le=!!H.morphAttributes.normal,ge=!!H.morphAttributes.color;let Me=Qn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(Me=y.toneMapping);const tn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,re=tn!==void 0?tn.length:0,kt=bt.get(W),Be=f.state.lights;if(X===!0&&(et===!0||E!==I)){const hn=E===I&&W.id===U;at.setState(W,E,hn)}let ae=!1;W.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Be.state.version||kt.outputColorSpace!==Rt||z.isBatchedMesh&&kt.batching===!1||!z.isBatchedMesh&&kt.batching===!0||z.isBatchedMesh&&kt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&kt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&kt.instancing===!1||!z.isInstancedMesh&&kt.instancing===!0||z.isSkinnedMesh&&kt.skinning===!1||!z.isSkinnedMesh&&kt.skinning===!0||z.isInstancedMesh&&kt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&kt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&kt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&kt.instancingMorph===!1&&z.morphTexture!==null||kt.envMap!==Dt||W.fog===!0&&kt.fog!==ot||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==at.numPlanes||kt.numIntersection!==at.numIntersection)||kt.vertexAlphas!==Bt||kt.vertexTangents!==zt||kt.morphTargets!==Ut||kt.morphNormals!==le||kt.morphColors!==ge||kt.toneMapping!==Me||kt.morphTargetsCount!==re)&&(ae=!0):(ae=!0,kt.__version=W.version);let gn=kt.currentProgram;ae===!0&&(gn=$s(W,O,z));let wi=!1,en=!1,Jr=!1;const we=gn.getUniforms(),Vn=kt.uniforms;if(ft.useProgram(gn.program)&&(wi=!0,en=!0,Jr=!0),W.id!==U&&(U=W.id,en=!0),wi||I!==E){rt.reverseDepthBuffer?(vt.copy(E.projectionMatrix),sf(vt),rf(vt),we.setValue(C,"projectionMatrix",vt)):we.setValue(C,"projectionMatrix",E.projectionMatrix),we.setValue(C,"viewMatrix",E.matrixWorldInverse);const hn=we.map.cameraPosition;hn!==void 0&&hn.setValue(C,Ft.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&we.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&we.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),I!==E&&(I=E,en=!0,Jr=!0)}if(z.isSkinnedMesh){we.setOptional(C,z,"bindMatrix"),we.setOptional(C,z,"bindMatrixInverse");const hn=z.skeleton;hn&&(hn.boneTexture===null&&hn.computeBoneTexture(),we.setValue(C,"boneTexture",hn.boneTexture,T))}z.isBatchedMesh&&(we.setOptional(C,z,"batchingTexture"),we.setValue(C,"batchingTexture",z._matricesTexture,T),we.setOptional(C,z,"batchingIdTexture"),we.setValue(C,"batchingIdTexture",z._indirectTexture,T),we.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&we.setValue(C,"batchingColorTexture",z._colorsTexture,T));const Qr=H.morphAttributes;if((Qr.position!==void 0||Qr.normal!==void 0||Qr.color!==void 0)&&Ht.update(z,H,gn),(en||kt.receiveShadow!==z.receiveShadow)&&(kt.receiveShadow=z.receiveShadow,we.setValue(C,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Vn.envMap.value=Dt,Vn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Vn.envMapIntensity.value=O.environmentIntensity),en&&(we.setValue(C,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&gu(Vn,Jr),ot&&W.fog===!0&&dt.refreshFogUniforms(Vn,ot),dt.refreshMaterialUniforms(Vn,W,J,N,f.state.transmissionRenderTarget[E.id]),Dr.upload(C,yl(kt),Vn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Dr.upload(C,yl(kt),Vn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&we.setValue(C,"center",z.center),we.setValue(C,"modelViewMatrix",z.modelViewMatrix),we.setValue(C,"normalMatrix",z.normalMatrix),we.setValue(C,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const hn=W.uniformsGroups;for(let ta=0,_u=hn.length;ta<_u;ta++){const Ml=hn[ta];F.update(Ml,gn),F.bind(Ml,gn)}}return gn}function gu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function vu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,O,H){bt.get(E.texture).__webglTexture=O,bt.get(E.depthTexture).__webglTexture=H;const W=bt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||ct.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=bt.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){A=E,R=O,w=H;let W=!0,z=null,ot=!1,yt=!1;if(E){const Dt=bt.get(E);if(Dt.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Dt.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Dt.__hasExternalTextures)T.rebindTextures(E,bt.get(E.texture).__webglTexture,bt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ut=E.depthTexture;if(Dt.__boundDepthTexture!==Ut){if(Ut!==null&&bt.has(Ut)&&(E.width!==Ut.image.width||E.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(yt=!0);const zt=bt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(zt[O])?z=zt[O][H]:z=zt[O],ot=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?z=bt.get(E).__webglMultisampledFramebuffer:Array.isArray(zt)?z=zt[H]:z=zt,_.copy(E.viewport),S.copy(E.scissor),V=E.scissorTest}else _.copy(mt).multiplyScalar(J).floor(),S.copy(gt).multiplyScalar(J).floor(),V=Xt;if(ft.bindFramebuffer(C.FRAMEBUFFER,z)&&W&&ft.drawBuffers(E,z),ft.viewport(_),ft.scissor(S),ft.setScissorTest(V),ot){const Dt=bt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Dt.__webglTexture,H)}else if(yt){const Dt=bt.get(E.texture),Bt=O||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Dt.__webglTexture,H||0,Bt)}U=-1},this.readRenderTargetPixels=function(E,O,H,W,z,ot,yt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){ft.bindFramebuffer(C.FRAMEBUFFER,Rt);try{const Dt=E.texture,Bt=Dt.format,zt=Dt.type;if(!rt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!rt.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-W&&H>=0&&H<=E.height-z&&C.readPixels(O,H,W,z,$t.convert(Bt),$t.convert(zt),ot)}finally{const Dt=A!==null?bt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,W,z,ot,yt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=bt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&yt!==void 0&&(Rt=Rt[yt]),Rt){const Dt=E.texture,Bt=Dt.format,zt=Dt.type;if(!rt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!rt.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-W&&H>=0&&H<=E.height-z){ft.bindFramebuffer(C.FRAMEBUFFER,Rt);const Ut=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.bufferData(C.PIXEL_PACK_BUFFER,ot.byteLength,C.STREAM_READ),C.readPixels(O,H,W,z,$t.convert(Bt),$t.convert(zt),0);const le=A!==null?bt.get(A).__webglFramebuffer:null;ft.bindFramebuffer(C.FRAMEBUFFER,le);const ge=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await nf(C,ge,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Ut),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,ot),C.deleteBuffer(Ut),C.deleteSync(ge),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-H),z=Math.floor(E.image.width*W),ot=Math.floor(E.image.height*W),yt=O!==null?O.x:0,Rt=O!==null?O.y:0;T.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,yt,Rt,z,ot),ft.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,W=null,z=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],O=arguments[2],z=arguments[3]||0,H=null);let ot,yt,Rt,Dt,Bt,zt;H!==null?(ot=H.max.x-H.min.x,yt=H.max.y-H.min.y,Rt=H.min.x,Dt=H.min.y):(ot=E.image.width,yt=E.image.height,Rt=0,Dt=0),W!==null?(Bt=W.x,zt=W.y):(Bt=0,zt=0);const Ut=$t.convert(O.format),le=$t.convert(O.type);T.setTexture2D(O,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const ge=C.getParameter(C.UNPACK_ROW_LENGTH),Me=C.getParameter(C.UNPACK_IMAGE_HEIGHT),tn=C.getParameter(C.UNPACK_SKIP_PIXELS),re=C.getParameter(C.UNPACK_SKIP_ROWS),kt=C.getParameter(C.UNPACK_SKIP_IMAGES),Be=E.isCompressedTexture?E.mipmaps[z]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Be.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Be.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Rt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Dt),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,Bt,zt,ot,yt,Ut,le,Be.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,Bt,zt,Be.width,Be.height,Ut,Be.data):C.texSubImage2D(C.TEXTURE_2D,z,Bt,zt,ot,yt,Ut,le,Be),C.pixelStorei(C.UNPACK_ROW_LENGTH,ge),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Me),C.pixelStorei(C.UNPACK_SKIP_PIXELS,tn),C.pixelStorei(C.UNPACK_SKIP_ROWS,re),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),z===0&&O.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,W=null,z=0){E.isTexture!==!0&&(Lr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,E=arguments[2],O=arguments[3],z=arguments[4]||0);let ot,yt,Rt,Dt,Bt,zt,Ut,le,ge;const Me=E.isCompressedTexture?E.mipmaps[z]:E.image;H!==null?(ot=H.max.x-H.min.x,yt=H.max.y-H.min.y,Rt=H.max.z-H.min.z,Dt=H.min.x,Bt=H.min.y,zt=H.min.z):(ot=Me.width,yt=Me.height,Rt=Me.depth,Dt=0,Bt=0,zt=0),W!==null?(Ut=W.x,le=W.y,ge=W.z):(Ut=0,le=0,ge=0);const tn=$t.convert(O.format),re=$t.convert(O.type);let kt;if(O.isData3DTexture)T.setTexture3D(O,0),kt=C.TEXTURE_3D;else if(O.isDataArrayTexture||O.isCompressedArrayTexture)T.setTexture2DArray(O,0),kt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const Be=C.getParameter(C.UNPACK_ROW_LENGTH),ae=C.getParameter(C.UNPACK_IMAGE_HEIGHT),gn=C.getParameter(C.UNPACK_SKIP_PIXELS),wi=C.getParameter(C.UNPACK_SKIP_ROWS),en=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Me.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Me.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Dt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Bt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,zt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(kt,z,Ut,le,ge,ot,yt,Rt,tn,re,Me.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,z,Ut,le,ge,ot,yt,Rt,tn,Me.data):C.texSubImage3D(kt,z,Ut,le,ge,ot,yt,Rt,tn,re,Me),C.pixelStorei(C.UNPACK_ROW_LENGTH,Be),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ae),C.pixelStorei(C.UNPACK_SKIP_PIXELS,gn),C.pixelStorei(C.UNPACK_SKIP_ROWS,wi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,en),z===0&&O.generateMipmaps&&C.generateMipmap(kt),ft.unbindTexture()},this.initRenderTarget=function(E){bt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ft.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,ft.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Qo?"display-p3":"srgb",e.unpackColorSpace=se.workingColorSpace===$r?"display-p3":"srgb"}}class kh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Vt(t),this.near=e,this.far=n}clone(){return new kh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pg extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Lo,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xe=new D;class Hr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyMatrix4(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.applyNormalMatrix(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Xe.fromBufferAttribute(this,e),Xe.transformDirection(t),this.setXYZ(e,Xe.x,Xe.y,Xe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=An(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Hr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class gg extends ii{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Bi;const bs=new D,zi=new D,Vi=new D,Gi=new nt,Ms=new nt,Fh=new ee,pr=new D,Ss=new D,mr=new D,gc=new nt,Da=new nt,vc=new nt;class x1 extends Se{constructor(t=new gg){if(super(),this.isSprite=!0,this.type="Sprite",Bi===void 0){Bi=new Ne;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new mg(e,5);Bi.setIndex([0,1,2,0,2,3]),Bi.setAttribute("position",new Hr(n,3,0,!1)),Bi.setAttribute("uv",new Hr(n,2,3,!1))}this.geometry=Bi,this.material=t,this.center=new nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zi.setFromMatrixScale(this.matrixWorld),Fh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Vi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zi.multiplyScalar(-Vi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;gr(pr.set(-.5,-.5,0),Vi,o,zi,s,r),gr(Ss.set(.5,-.5,0),Vi,o,zi,s,r),gr(mr.set(.5,.5,0),Vi,o,zi,s,r),gc.set(0,0),Da.set(1,0),vc.set(1,1);let l=t.ray.intersectTriangle(pr,Ss,mr,!1,bs);if(l===null&&(gr(Ss.set(-.5,.5,0),Vi,o,zi,s,r),Da.set(0,1),l=t.ray.intersectTriangle(pr,mr,Ss,!1,bs),l===null))return;const a=t.ray.origin.distanceTo(bs);a<t.near||a>t.far||e.push({distance:a,point:bs.clone(),uv:dn.getInterpolation(bs,pr,Ss,mr,gc,Da,vc,new nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function gr(i,t,e,n,s,r){Gi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*Gi.x-s*Gi.y,Ms.y=s*Gi.x+r*Gi.y):Ms.copy(Gi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(Fh)}class vg extends $e{constructor(t=null,e=1,n=1,s,r,o,l,a,c=Le,h=Le,u,p){super(null,o,l,a,c,h,s,r,u,p),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _c extends ln{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Hi=new ee,xc=new ee,vr=[],yc=new Mi,_g=new ee,ws=new _t,Es=new ps;class il extends _t{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _c(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_g)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Mi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),yc.copy(t.boundingBox).applyMatrix4(Hi),this.boundingBox.union(yc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Hi),Es.copy(t.boundingSphere).applyMatrix4(Hi),this.boundingSphere.union(Es)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Es.copy(this.boundingSphere),Es.applyMatrix4(n),t.ray.intersectsSphere(Es)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Hi),xc.multiplyMatrices(n,Hi),ws.matrixWorld=xc,ws.raycast(t,vr);for(let o=0,l=vr.length;o<l;o++){const a=vr[o];a.instanceId=r,a.object=this,e.push(a)}vr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _c(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new vg(new Float32Array(s*this.count),s,this.count,Yo,Cn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=s*t;r[a]=l,r.set(n,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Oh extends ii{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const bc=new ee,Io=new bh,_r=new ps,xr=new D;class xg extends Se{constructor(t=new Ne,e=new Oh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere),_r.applyMatrix4(s),_r.radius+=r,t.ray.intersectsSphere(_r)===!1)return;bc.copy(s).invert(),Io.copy(t.ray).applyMatrix4(bc);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,u=n.attributes.position;if(c!==null){const p=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let d=p,v=m;d<v;d++){const f=c.getX(d);xr.fromBufferAttribute(u,f),Mc(xr,f,a,s,t,e,this)}}else{const p=Math.max(0,o.start),m=Math.min(u.count,o.start+o.count);for(let d=p,v=m;d<v;d++)xr.fromBufferAttribute(u,d),Mc(xr,d,a,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function Mc(i,t,e,n,s,r,o){const l=Io.distanceSqToPoint(i);if(l<e){const a=new D;Io.closestPointToPoint(i,a),a.applyMatrix4(n);const c=s.ray.origin.distanceTo(a);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Bh extends $e{constructor(t,e,n,s,r,o,l,a,c){super(t,e,n,s,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),c=n[s]-o,c<0)l=s+1;else if(c>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);const h=n[s],p=n[s+1]-h,m=(o-h)/p;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),l=this.getPoint(r),a=e||(o.isVector2?new nt:new D);return a.copy(l).sub(o).normalize(),a}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],o=[],l=new D,a=new ee;for(let m=0;m<=t;m++){const d=m/t;s[m]=this.getTangentAt(d,new D)}r[0]=new D,o[0]=new D;let c=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),p<=c&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(s[m-1],s[m]),l.length()>Number.EPSILON){l.normalize();const d=Math.acos(ze(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(a.makeRotationAxis(l,d))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(ze(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(m=-m);for(let d=1;d<=t;d++)r[d].applyMatrix4(a.makeRotationAxis(s[d],m*d)),o[d].crossVectors(s[d],r[d])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class sl extends Pn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(t,e=new nt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),p=a-this.aX,m=c-this.aY;a=p*h-m*u+this.aX,c=p*u+m*h+this.aY}return n.set(a,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends sl{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function rl(){let i=0,t=0,e=0,n=0;function s(r,o,l,a){i=r,t=l,e=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){s(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,h,u){let p=(o-r)/c-(l-r)/(c+h)+(l-o)/h,m=(l-o)/h-(a-o)/(h+u)+(a-l)/u;p*=h,m*=h,s(o,l,p,m)},calc:function(r){const o=r*r,l=o*r;return i+t*r+e*o+n*l}}}const yr=new D,Ia=new rl,Ua=new rl,Na=new rl;class bg extends Pn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,h;this.closed||l>0?c=s[(l-1)%r]:(yr.subVectors(s[0],s[1]).add(s[0]),c=yr);const u=s[l%r],p=s[(l+1)%r];if(this.closed||l+2<r?h=s[(l+2)%r]:(yr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let d=Math.pow(c.distanceToSquared(u),m),v=Math.pow(u.distanceToSquared(p),m),f=Math.pow(p.distanceToSquared(h),m);v<1e-4&&(v=1),d<1e-4&&(d=v),f<1e-4&&(f=v),Ia.initNonuniformCatmullRom(c.x,u.x,p.x,h.x,d,v,f),Ua.initNonuniformCatmullRom(c.y,u.y,p.y,h.y,d,v,f),Na.initNonuniformCatmullRom(c.z,u.z,p.z,h.z,d,v,f)}else this.curveType==="catmullrom"&&(Ia.initCatmullRom(c.x,u.x,p.x,h.x,this.tension),Ua.initCatmullRom(c.y,u.y,p.y,h.y,this.tension),Na.initCatmullRom(c.z,u.z,p.z,h.z,this.tension));return n.set(Ia.calc(a),Ua.calc(a),Na.calc(a)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Sc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,l=i*i,a=i*l;return(2*e-2*n+r+o)*a+(-3*e+3*n-2*r-o)*l+r*i+e}function Mg(i,t){const e=1-i;return e*e*t}function Sg(i,t){return 2*(1-i)*i*t}function wg(i,t){return i*i*t}function Rs(i,t,e,n){return Mg(i,t)+Sg(i,e)+wg(i,n)}function Eg(i,t){const e=1-i;return e*e*e*t}function Tg(i,t){const e=1-i;return 3*e*e*i*t}function Ag(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Ps(i,t,e,n,s){return Eg(i,t)+Tg(i,e)+Ag(i,n)+Cg(i,s)}class zh extends Pn{constructor(t=new nt,e=new nt,n=new nt,s=new nt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ps(t,s.x,r.x,o.x,l.x),Ps(t,s.y,r.y,o.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Rg extends Pn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ps(t,s.x,r.x,o.x,l.x),Ps(t,s.y,r.y,o.y,l.y),Ps(t,s.z,r.z,o.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vh extends Pn{constructor(t=new nt,e=new nt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new nt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new nt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Pg extends Pn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Gh extends Pn{constructor(t=new nt,e=new nt,n=new nt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new nt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends Pn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y),Rs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hh extends Pn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new nt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],c=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Sc(l,a.x,c.x,h.x,u.x),Sc(l,a.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new nt().fromArray(s))}return this}}var Uo=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:bg,CubicBezierCurve:zh,CubicBezierCurve3:Rg,EllipseCurve:sl,LineCurve:Vh,LineCurve3:Pg,QuadraticBezierCurve:Gh,QuadraticBezierCurve3:Lg,SplineCurve:Hh});class Dg extends Pn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],l=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,a=o.getPoints(l);for(let c=0;c<a.length;c++){const h=a[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Uo[s.type]().fromJSON(s))}return this}}class No extends Dg{constructor(t){super(),this.type="Path",this.currentPoint=new nt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Vh(this.currentPoint.clone(),new nt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Gh(this.currentPoint.clone(),new nt(t,e),new nt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const l=new zh(this.currentPoint.clone(),new nt(t,e),new nt(n,s),new nt(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Hh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+l,e+a,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,l,a){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,o,l,a),this}absellipse(t,e,n,s,r,o,l,a){const c=new sl(t,e,n,s,r,o,l,a);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class al extends Ne{constructor(t=[new nt(0,-.5),new nt(.5,0),new nt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const r=[],o=[],l=[],a=[],c=[],h=1/e,u=new D,p=new nt,m=new D,d=new D,v=new D;let f=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,m.x=g*1,m.y=-f,m.z=g*0,v.copy(m),m.normalize(),a.push(m.x,m.y,m.z);break;case t.length-1:a.push(v.x,v.y,v.z);break;default:f=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,m.x=g*1,m.y=-f,m.z=g*0,d.copy(m),m.x+=v.x,m.y+=v.y,m.z+=v.z,m.normalize(),a.push(m.x,m.y,m.z),v.copy(d)}for(let x=0;x<=e;x++){const y=n+x*h*s,b=Math.sin(y),R=Math.cos(y);for(let w=0;w<=t.length-1;w++){u.x=t[w].x*b,u.y=t[w].y,u.z=t[w].x*R,o.push(u.x,u.y,u.z),p.x=x/e,p.y=w/(t.length-1),l.push(p.x,p.y);const A=a[3*w+0]*b,U=a[3*w+1],I=a[3*w+0]*R;c.push(A,U,I)}}for(let x=0;x<e;x++)for(let y=0;y<t.length-1;y++){const b=y+x*t.length,R=b,w=b+t.length,A=b+t.length+1,U=b+1;r.push(R,w,U),r.push(A,U,w)}this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("uv",new ne(l,2)),this.setAttribute("normal",new ne(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.points,t.segments,t.phiStart,t.phiLength)}}class Wh extends al{constructor(t=1,e=1,n=4,s=8){const r=new No;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Wh(t.radius,t.length,t.capSegments,t.radialSegments)}}class Hs extends Ne{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],l=[],a=[],c=new D,h=new nt;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let u=0,p=3;u<=e;u++,p+=3){const m=n+u/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),l.push(0,0,1),h.x=(o[p]/t+1)/2,h.y=(o[p+1]/t+1)/2,a.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class _e extends Ne{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],p=[],m=[];let d=0;const v=[],f=n/2;let g=0;x(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(p,3)),this.setAttribute("uv",new ne(m,2));function x(){const b=new D,R=new D;let w=0;const A=(e-t)/n;for(let U=0;U<=r;U++){const I=[],_=U/r,S=_*(e-t)+t;for(let V=0;V<=s;V++){const B=V/s,L=B*a+l,k=Math.sin(L),N=Math.cos(L);R.x=S*k,R.y=-_*n+f,R.z=S*N,u.push(R.x,R.y,R.z),b.set(k,A,N).normalize(),p.push(b.x,b.y,b.z),m.push(B,1-_),I.push(d++)}v.push(I)}for(let U=0;U<s;U++)for(let I=0;I<r;I++){const _=v[I][U],S=v[I+1][U],V=v[I+1][U+1],B=v[I][U+1];t>0&&(h.push(_,S,B),w+=3),e>0&&(h.push(S,V,B),w+=3)}c.addGroup(g,w,0),g+=w}function y(b){const R=d,w=new nt,A=new D;let U=0;const I=b===!0?t:e,_=b===!0?1:-1;for(let V=1;V<=s;V++)u.push(0,f*_,0),p.push(0,_,0),m.push(.5,.5),d++;const S=d;for(let V=0;V<=s;V++){const L=V/s*a+l,k=Math.cos(L),N=Math.sin(L);A.x=I*N,A.y=f*_,A.z=I*k,u.push(A.x,A.y,A.z),p.push(0,_,0),w.x=k*.5+.5,w.y=N*.5*_+.5,m.push(w.x,w.y),d++}for(let V=0;V<s;V++){const B=R+V,L=S+V;b===!0?h.push(L,L+1,B):h.push(L+1,L,B),U+=3}c.addGroup(g,U,b===!0?1:2),g+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ol extends _e{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,t,e,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(t){return new ol(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ll extends Ne{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];l(s),c(n),h(),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(r.slice(),3)),this.setAttribute("uv",new ne(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const y=new D,b=new D,R=new D;for(let w=0;w<e.length;w+=3)m(e[w+0],y),m(e[w+1],b),m(e[w+2],R),a(y,b,R,x)}function a(x,y,b,R){const w=R+1,A=[];for(let U=0;U<=w;U++){A[U]=[];const I=x.clone().lerp(b,U/w),_=y.clone().lerp(b,U/w),S=w-U;for(let V=0;V<=S;V++)V===0&&U===w?A[U][V]=I:A[U][V]=I.clone().lerp(_,V/S)}for(let U=0;U<w;U++)for(let I=0;I<2*(w-U)-1;I++){const _=Math.floor(I/2);I%2===0?(p(A[U][_+1]),p(A[U+1][_]),p(A[U][_])):(p(A[U][_+1]),p(A[U+1][_+1]),p(A[U+1][_]))}}function c(x){const y=new D;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(x),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function h(){const x=new D;for(let y=0;y<r.length;y+=3){x.x=r[y+0],x.y=r[y+1],x.z=r[y+2];const b=f(x)/2/Math.PI+.5,R=g(x)/Math.PI+.5;o.push(b,1-R)}d(),u()}function u(){for(let x=0;x<o.length;x+=6){const y=o[x+0],b=o[x+2],R=o[x+4],w=Math.max(y,b,R),A=Math.min(y,b,R);w>.9&&A<.1&&(y<.2&&(o[x+0]+=1),b<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function p(x){r.push(x.x,x.y,x.z)}function m(x,y){const b=x*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function d(){const x=new D,y=new D,b=new D,R=new D,w=new nt,A=new nt,U=new nt;for(let I=0,_=0;I<r.length;I+=9,_+=6){x.set(r[I+0],r[I+1],r[I+2]),y.set(r[I+3],r[I+4],r[I+5]),b.set(r[I+6],r[I+7],r[I+8]),w.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),U.set(o[_+4],o[_+5]),R.copy(x).add(y).add(b).divideScalar(3);const S=f(R);v(w,_+0,x,S),v(A,_+2,y,S),v(U,_+4,b,S)}}function v(x,y,b,R){R<0&&x.x===1&&(o[y]=x.x-1),b.x===0&&b.z===0&&(o[y]=R/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.vertices,t.indices,t.radius,t.details)}}class qh extends No{constructor(t){super(t),this.uuid=Bn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new No().fromJSON(s))}return this}}const Ig={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=$h(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let l,a,c,h,u,p,m;if(n&&(r=Og(i,t,r,e)),i.length>80*e){l=c=i[0],a=h=i[1];for(let d=e;d<s;d+=e)u=i[d],p=i[d+1],u<l&&(l=u),p<a&&(a=p),u>c&&(c=u),p>h&&(h=p);m=Math.max(c-l,h-a),m=m!==0?32767/m:0}return Fs(r,o,e,l,a,m,0),o}};function $h(i,t,e,n,s){let r,o;if(s===jg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=wc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=wc(r,i[r],i[r+1],o);return o&&Yr(o,o.next)&&(Bs(o),o=o.next),o}function bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Yr(e,e.next)||ye(e.prev,e,e.next)===0)){if(Bs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Fs(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Hg(i,n,s,r);let l=i,a,c;for(;i.prev!==i.next;){if(a=i.prev,c=i.next,r?Ng(i,n,s,r):Ug(i)){t.push(a.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Bs(i),i=c.next,l=c.next;continue}if(i=c,i===l){o?o===1?(i=kg(bi(i),t,e),Fs(i,t,e,n,s,r,2)):o===2&&Fg(i,t,e,n,s,r):Fs(bi(i),t,e,n,s,r,1);break}}}function Ug(i){const t=i.prev,e=i,n=i.next;if(ye(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,l=t.y,a=e.y,c=n.y,h=s<r?s<o?s:o:r<o?r:o,u=l<a?l<c?l:c:a<c?a:c,p=s>r?s>o?s:o:r>o?r:o,m=l>a?l>c?l:c:a>c?a:c;let d=n.next;for(;d!==t;){if(d.x>=h&&d.x<=p&&d.y>=u&&d.y<=m&&Ki(s,l,r,a,o,c,d.x,d.y)&&ye(d.prev,d,d.next)>=0)return!1;d=d.next}return!0}function Ng(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ye(s,r,o)>=0)return!1;const l=s.x,a=r.x,c=o.x,h=s.y,u=r.y,p=o.y,m=l<a?l<c?l:c:a<c?a:c,d=h<u?h<p?h:p:u<p?u:p,v=l>a?l>c?l:c:a>c?a:c,f=h>u?h>p?h:p:u>p?u:p,g=ko(m,d,t,e,n),x=ko(v,f,t,e,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=g&&b&&b.z<=x;){if(y.x>=m&&y.x<=v&&y.y>=d&&y.y<=f&&y!==s&&y!==o&&Ki(l,h,a,u,c,p,y.x,y.y)&&ye(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=m&&b.x<=v&&b.y>=d&&b.y<=f&&b!==s&&b!==o&&Ki(l,h,a,u,c,p,b.x,b.y)&&ye(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=g;){if(y.x>=m&&y.x<=v&&y.y>=d&&y.y<=f&&y!==s&&y!==o&&Ki(l,h,a,u,c,p,y.x,y.y)&&ye(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=x;){if(b.x>=m&&b.x<=v&&b.y>=d&&b.y<=f&&b!==s&&b!==o&&Ki(l,h,a,u,c,p,b.x,b.y)&&ye(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function kg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Yr(s,r)&&Xh(s,n,n.next,r)&&Os(s,r)&&Os(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Bs(n),Bs(n.next),n=i=r),n=n.next}while(n!==i);return bi(n)}function Fg(i,t,e,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&$g(o,l)){let a=Yh(o,l);o=bi(o,o.next),a=bi(a,a.next),Fs(o,t,e,n,s,r,0),Fs(a,t,e,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Og(i,t,e,n){const s=[];let r,o,l,a,c;for(r=0,o=t.length;r<o;r++)l=t[r]*n,a=r<o-1?t[r+1]*n:i.length,c=$h(i,l,a,n,!1),c===c.next&&(c.steiner=!0),s.push(qg(c));for(s.sort(Bg),r=0;r<s.length;r++)e=zg(s[r],e);return e}function Bg(i,t){return i.x-t.x}function zg(i,t){const e=Vg(i,t);if(!e)return t;const n=Yh(e,i);return bi(n,n.next),bi(e,e.next)}function Vg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const p=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=r&&p>n&&(n=p,s=e.x<e.next.x?e:e.next,p===r))return s}e=e.next}while(e!==t);if(!s)return null;const l=s,a=s.x,c=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=a&&r!==e.x&&Ki(o<c?r:n,o,a,c,o<c?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Os(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Gg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==l);return s}function Gg(i,t){return ye(i.prev,i,t.prev)<0&&ye(t.next,i,i.next)<0}function Hg(i,t,e,n){let s=i;do s.z===0&&(s.z=ko(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Wg(s)}function Wg(i){let t,e,n,s,r,o,l,a,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,l=0,t=0;t<c&&(l++,n=n.nextZ,!!n);t++);for(a=c;l>0||a>0&&n;)l!==0&&(a===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,l--):(s=n,n=n.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function ko(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Ki(i,t,e,n,s,r,o,l){return(s-o)*(t-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(e-o)*(t-l)&&(e-o)*(r-l)>=(s-o)*(n-l)}function $g(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Xg(i,t)&&(Os(i,t)&&Os(t,i)&&Yg(i,t)&&(ye(i.prev,i,t.prev)||ye(i,t.prev,t))||Yr(i,t)&&ye(i.prev,i,i.next)>0&&ye(t.prev,t,t.next)>0)}function ye(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Yr(i,t){return i.x===t.x&&i.y===t.y}function Xh(i,t,e,n){const s=Mr(ye(i,t,e)),r=Mr(ye(i,t,n)),o=Mr(ye(e,n,i)),l=Mr(ye(e,n,t));return!!(s!==r&&o!==l||s===0&&br(i,e,t)||r===0&&br(i,n,t)||o===0&&br(e,i,n)||l===0&&br(e,t,n))}function br(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Mr(i){return i>0?1:i<0?-1:0}function Xg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Xh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Os(i,t){return ye(i.prev,i,i.next)<0?ye(i,t,i.next)>=0&&ye(i,i.prev,t)>=0:ye(i,t,i.prev)<0||ye(i,i.next,t)<0}function Yg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Yh(i,t){const e=new Fo(i.i,i.x,i.y),n=new Fo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function wc(i,t,e,n){const s=new Fo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Bs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function jg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class ti{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return ti.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Ec(t),Tc(n,t);let o=t.length;e.forEach(Ec);for(let a=0;a<e.length;a++)s.push(o),o+=e[a].length,Tc(n,e[a]);const l=Ig.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}}function Ec(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Tc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class jh extends Ne{constructor(t=new qh([new nt(.5,.5),new nt(-.5,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let l=0,a=t.length;l<a;l++){const c=t[l];o(c)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(r,2)),this.computeVertexNormals();function o(l){const a=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let p=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,d=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Kg;let y,b=!1,R,w,A,U;g&&(y=g.getSpacedPoints(h),b=!0,p=!1,R=g.computeFrenetFrames(h,!1),w=new D,A=new D,U=new D),p||(f=0,m=0,d=0,v=0);const I=l.extractPoints(c);let _=I.shape;const S=I.holes;if(!ti.isClockWise(_)){_=_.reverse();for(let Z=0,C=S.length;Z<C;Z++){const ut=S[Z];ti.isClockWise(ut)&&(S[Z]=ut.reverse())}}const B=ti.triangulateShape(_,S),L=_;for(let Z=0,C=S.length;Z<C;Z++){const ut=S[Z];_=_.concat(ut)}function k(Z,C,ut){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),Z.clone().addScaledVector(C,ut)}const N=_.length,J=B.length;function q(Z,C,ut){let ct,rt,ft;const Nt=Z.x-C.x,bt=Z.y-C.y,T=ut.x-Z.x,M=ut.y-Z.y,G=Nt*Nt+bt*bt,j=Nt*M-bt*T;if(Math.abs(j)>Number.EPSILON){const Q=Math.sqrt(G),K=Math.sqrt(T*T+M*M),Lt=C.x-bt/Q,dt=C.y+Nt/Q,wt=ut.x-M/K,Jt=ut.y+T/K,at=((wt-Lt)*M-(Jt-dt)*T)/(Nt*M-bt*T);ct=Lt+Nt*at-Z.x,rt=dt+bt*at-Z.y;const Et=ct*ct+rt*rt;if(Et<=2)return new nt(ct,rt);ft=Math.sqrt(Et/2)}else{let Q=!1;Nt>Number.EPSILON?T>Number.EPSILON&&(Q=!0):Nt<-Number.EPSILON?T<-Number.EPSILON&&(Q=!0):Math.sign(bt)===Math.sign(M)&&(Q=!0),Q?(ct=-bt,rt=Nt,ft=Math.sqrt(G)):(ct=Nt,rt=bt,ft=Math.sqrt(G/2))}return new nt(ct/ft,rt/ft)}const lt=[];for(let Z=0,C=L.length,ut=C-1,ct=Z+1;Z<C;Z++,ut++,ct++)ut===C&&(ut=0),ct===C&&(ct=0),lt[Z]=q(L[Z],L[ut],L[ct]);const mt=[];let gt,Xt=lt.concat();for(let Z=0,C=S.length;Z<C;Z++){const ut=S[Z];gt=[];for(let ct=0,rt=ut.length,ft=rt-1,Nt=ct+1;ct<rt;ct++,ft++,Nt++)ft===rt&&(ft=0),Nt===rt&&(Nt=0),gt[ct]=q(ut[ct],ut[ft],ut[Nt]);mt.push(gt),Xt=Xt.concat(gt)}for(let Z=0;Z<f;Z++){const C=Z/f,ut=m*Math.cos(C*Math.PI/2),ct=d*Math.sin(C*Math.PI/2)+v;for(let rt=0,ft=L.length;rt<ft;rt++){const Nt=k(L[rt],lt[rt],ct);ht(Nt.x,Nt.y,-ut)}for(let rt=0,ft=S.length;rt<ft;rt++){const Nt=S[rt];gt=mt[rt];for(let bt=0,T=Nt.length;bt<T;bt++){const M=k(Nt[bt],gt[bt],ct);ht(M.x,M.y,-ut)}}}const Kt=d+v;for(let Z=0;Z<N;Z++){const C=p?k(_[Z],Xt[Z],Kt):_[Z];b?(A.copy(R.normals[0]).multiplyScalar(C.x),w.copy(R.binormals[0]).multiplyScalar(C.y),U.copy(y[0]).add(A).add(w),ht(U.x,U.y,U.z)):ht(C.x,C.y,0)}for(let Z=1;Z<=h;Z++)for(let C=0;C<N;C++){const ut=p?k(_[C],Xt[C],Kt):_[C];b?(A.copy(R.normals[Z]).multiplyScalar(ut.x),w.copy(R.binormals[Z]).multiplyScalar(ut.y),U.copy(y[Z]).add(A).add(w),ht(U.x,U.y,U.z)):ht(ut.x,ut.y,u/h*Z)}for(let Z=f-1;Z>=0;Z--){const C=Z/f,ut=m*Math.cos(C*Math.PI/2),ct=d*Math.sin(C*Math.PI/2)+v;for(let rt=0,ft=L.length;rt<ft;rt++){const Nt=k(L[rt],lt[rt],ct);ht(Nt.x,Nt.y,u+ut)}for(let rt=0,ft=S.length;rt<ft;rt++){const Nt=S[rt];gt=mt[rt];for(let bt=0,T=Nt.length;bt<T;bt++){const M=k(Nt[bt],gt[bt],ct);b?ht(M.x,M.y+y[h-1].y,y[h-1].x+ut):ht(M.x,M.y,u+ut)}}}X(),et();function X(){const Z=s.length/3;if(p){let C=0,ut=N*C;for(let ct=0;ct<J;ct++){const rt=B[ct];Ft(rt[2]+ut,rt[1]+ut,rt[0]+ut)}C=h+f*2,ut=N*C;for(let ct=0;ct<J;ct++){const rt=B[ct];Ft(rt[0]+ut,rt[1]+ut,rt[2]+ut)}}else{for(let C=0;C<J;C++){const ut=B[C];Ft(ut[2],ut[1],ut[0])}for(let C=0;C<J;C++){const ut=B[C];Ft(ut[0]+N*h,ut[1]+N*h,ut[2]+N*h)}}n.addGroup(Z,s.length/3-Z,0)}function et(){const Z=s.length/3;let C=0;vt(L,C),C+=L.length;for(let ut=0,ct=S.length;ut<ct;ut++){const rt=S[ut];vt(rt,C),C+=rt.length}n.addGroup(Z,s.length/3-Z,1)}function vt(Z,C){let ut=Z.length;for(;--ut>=0;){const ct=ut;let rt=ut-1;rt<0&&(rt=Z.length-1);for(let ft=0,Nt=h+f*2;ft<Nt;ft++){const bt=N*ft,T=N*(ft+1),M=C+ct+bt,G=C+rt+bt,j=C+rt+T,Q=C+ct+T;Ot(M,G,j,Q)}}}function ht(Z,C,ut){a.push(Z),a.push(C),a.push(ut)}function Ft(Z,C,ut){it(Z),it(C),it(ut);const ct=s.length/3,rt=x.generateTopUV(n,s,ct-3,ct-2,ct-1);At(rt[0]),At(rt[1]),At(rt[2])}function Ot(Z,C,ut,ct){it(Z),it(C),it(ct),it(C),it(ut),it(ct);const rt=s.length/3,ft=x.generateSideWallUV(n,s,rt-6,rt-3,rt-2,rt-1);At(ft[0]),At(ft[1]),At(ft[3]),At(ft[1]),At(ft[2]),At(ft[3])}function it(Z){s.push(a[Z*3+0]),s.push(a[Z*3+1]),s.push(a[Z*3+2])}function At(Z){r.push(Z.x),r.push(Z.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Zg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const l=e[t.shapes[r]];n.push(l)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Uo[s.type]().fromJSON(s)),new jh(n,t.options)}}const Kg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],l=t[n*3],a=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new nt(r,o),new nt(l,a),new nt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],l=t[e*3+1],a=t[e*3+2],c=t[n*3],h=t[n*3+1],u=t[n*3+2],p=t[s*3],m=t[s*3+1],d=t[s*3+2],v=t[r*3],f=t[r*3+1],g=t[r*3+2];return Math.abs(l-h)<Math.abs(o-c)?[new nt(o,1-a),new nt(c,1-u),new nt(p,1-d),new nt(v,1-g)]:[new nt(l,1-a),new nt(h,1-u),new nt(m,1-d),new nt(f,1-g)]}};function Zg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class cl extends ll{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new cl(t.radius,t.detail)}}class Kh extends Ne{constructor(t=new qh([new nt(0,.5),new nt(-.5,-.5),new nt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let l=0,a=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(l,a,h),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new ne(s,3)),this.setAttribute("normal",new ne(r,3)),this.setAttribute("uv",new ne(o,2));function c(h){const u=s.length/3,p=h.extractPoints(e);let m=p.shape;const d=p.holes;ti.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,g=d.length;f<g;f++){const x=d[f];ti.isClockWise(x)===!0&&(d[f]=x.reverse())}const v=ti.triangulateShape(m,d);for(let f=0,g=d.length;f<g;f++){const x=d[f];m=m.concat(x)}for(let f=0,g=m.length;f<g;f++){const x=m[f];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let f=0,g=v.length;f<g;f++){const x=v[f],y=x[0]+u,b=x[1]+u,R=x[2]+u;n.push(y,b,R),a+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return Jg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Kh(n,t.curveSegments)}}function Jg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class si extends Ne{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const a=Math.min(o+l,Math.PI);let c=0;const h=[],u=new D,p=new D,m=[],d=[],v=[],f=[];for(let g=0;g<=n;g++){const x=[],y=g/n;let b=0;g===0&&o===0?b=.5/e:g===n&&a===Math.PI&&(b=-.5/e);for(let R=0;R<=e;R++){const w=R/e;u.x=-t*Math.cos(s+w*r)*Math.sin(o+y*l),u.y=t*Math.cos(o+y*l),u.z=t*Math.sin(s+w*r)*Math.sin(o+y*l),d.push(u.x,u.y,u.z),p.copy(u).normalize(),v.push(p.x,p.y,p.z),f.push(w+b,1-y),x.push(c++)}h.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const y=h[g][x+1],b=h[g][x],R=h[g+1][x],w=h[g+1][x+1];(g!==0||o>0)&&m.push(y,b,w),(g!==n-1||a<Math.PI)&&m.push(b,R,w)}this.setIndex(m),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(v,3)),this.setAttribute("uv",new ne(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new si(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class zs extends Ne{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],a=[],c=[],h=new D,u=new D,p=new D;for(let m=0;m<=n;m++)for(let d=0;d<=s;d++){const v=d/s*r,f=m/n*Math.PI*2;u.x=(t+e*Math.cos(f))*Math.cos(v),u.y=(t+e*Math.cos(f))*Math.sin(v),u.z=e*Math.sin(f),l.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),p.subVectors(u,h).normalize(),a.push(p.x,p.y,p.z),c.push(d/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let d=1;d<=s;d++){const v=(s+1)*m+d-1,f=(s+1)*(m-1)+d-1,g=(s+1)*(m-1)+d,x=(s+1)*m+d;o.push(v,f,x),o.push(f,g,x)}this.setIndex(o),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Qg extends qe{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Zh extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Yn extends ii{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jo,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Ho,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ws extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Vt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class tv extends Ws{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Vt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const ka=new ee,Ac=new D,Cc=new D;class hl{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new tl,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ac.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ac),Cc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Cc),e.updateMatrixWorld(),ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ka),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ev extends hl{constructor(){super(new Je(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Vr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Jh extends Ws{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new ev}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const Rc=new ee,Ts=new D,Fa=new D;class nv extends hl{constructor(){super(new Je(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ts),Fa.copy(n.position),Fa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fa),n.updateMatrixWorld(),s.makeTranslation(-Ts.x,-Ts.y,-Ts.z),Rc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rc)}}class Wr extends Ws{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new nv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iv extends hl{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class sv extends Ws{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rv extends Ws{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class av{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Pc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Pc(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Go}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Go);const Qh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Si{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const ov=new el(-1,1,1,-1,0,1);class lv extends Ne{constructor(){super(),this.setAttribute("position",new ne([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ne([0,2,0,0,2,0],2))}}const cv=new lv;class jr{constructor(t){this._mesh=new _t(cv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,ov)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class tu extends Si{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof qe?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ls.clone(t.uniforms),this.material=new qe({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new jr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lc extends Si{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class hv extends Si{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class uv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new nt);this._width=n.width,this._height=n.height,e=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Mn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new tu(Qh),this.copyPass.material.blending=Rn,this.clock=new av}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Lc!==void 0&&(o instanceof Lc?n=!0:o instanceof hv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class fv extends Si{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Vt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const dv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Vt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class cs extends Si{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new nt(t.x,t.y):new nt(256,256),this.clearColor=new Vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,o,{type:Mn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const p=new on(r,o,{type:Mn});p.texture.name="UnrealBloomPass.h"+u,p.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(p);const m=new on(r,o,{type:Mn});m.texture.name="UnrealBloomPass.v"+u,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const l=dv;this.highPassUniforms=ls.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new qe({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new nt(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Qh;this.copyUniforms=ls.clone(h.uniforms),this.blendMaterial=new qe({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Ns,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Vt,this.oldClearAlpha=1,this.basic=new an,this.fsQuad=new jr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new nt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=cs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[a]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=cs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[a]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new qe({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new nt(.5,.5)},direction:{value:new nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}}cs.BlurDirectionX=new nt(1,0);cs.BlurDirectionY=new nt(0,1);const pv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class mv extends Si{constructor(){super();const t=pv;this.uniforms=ls.clone(t.uniforms),this.material=new Qg({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new jr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},se.getTransfer(this._outputColorSpace)===pe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===eh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===nh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ih?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Wo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===sh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===rh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const gv={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class vv extends Si{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new on(1,1,{minFilter:Le,magFilter:Le,type:Mn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new Nh,this.materialDepth.depthPacking=gh,this.materialDepth.blending=Rn;const l=gv,a=ls.clone(l.uniforms);a.tDepth.value=this.renderTargetDepth.texture,a.focus.value=s,a.aspect.value=e.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=e.near,a.farClip.value=e.far,this.materialBokeh=new qe({defines:Object.assign({},l.defines),uniforms:a,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=a,this.fsQuad=new jr(this.materialBokeh),this._oldClearColor=new Vt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Oo=3,_v="the-other-me-applause",es="saves",eu="tom-applause-settings";function ul(){return{v:Oo,room:"hub_sydney",spot:"start",chapter:"Пролог",f:{},inv:[],notes:[],photos:[],seen:{},mask:null,time:0}}const Dc={music:.7,sfx:.8,voice:.6,uiScale:1,quality:"med",textSpeed:45,reduceFlash:!1,reduceShake:!1,contrast:!1,rhythmEasy:!1,rhythmOffset:0,touch:typeof window<"u"&&"ontouchstart"in window&&matchMedia("(pointer: coarse)").matches,introAlways:!1},Pe=xv();function xv(){try{const i=localStorage.getItem(eu);if(i)return{...Dc,...JSON.parse(i)}}catch(i){console.warn("[settings] не удалось прочитать настройки, используются значения по умолчанию",i)}return{...Dc}}function Ic(){try{localStorage.setItem(eu,JSON.stringify(Pe))}catch(i){console.warn("[settings] не удалось сохранить настройки",i)}}let Sr=null;function nu(){return Sr||(Sr=new Promise(i=>{try{const t=indexedDB.open(_v,1);t.onupgradeneeded=()=>t.result.createObjectStore(es),t.onsuccess=()=>i(t.result),t.onerror=()=>{console.warn("[save] IndexedDB недоступна, используется localStorage",t.error),i(null)}}catch(t){console.warn("[save] IndexedDB недоступна, используется localStorage",t),i(null)}}),Sr)}async function iu(i,t){const e=await nu();if(!e){t===null?localStorage.removeItem("tom-save-"+i):localStorage.setItem("tom-save-"+i,t);return}return new Promise((n,s)=>{const r=e.transaction(es,"readwrite");t===null?r.objectStore(es).delete(i):r.objectStore(es).put(t,i),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)})}async function yv(i){const t=await nu();return t?new Promise((e,n)=>{const s=t.transaction(es).objectStore(es).get(i);s.onsuccess=()=>e(s.result??null),s.onerror=()=>n(s.error)}):localStorage.getItem("tom-save-"+i)}const Uc=["auto","slot1","slot2","slot3"],bv={auto:"Автосохранение",slot1:"Слот I",slot2:"Слот II",slot3:"Слот III"};function fl(i){if(!i||typeof i!="object"||typeof i.room!="string"||typeof i.f!="object")return null;const t={...ul(),...i};return Array.isArray(t.inv)||(t.inv=[]),Array.isArray(t.notes)||(t.notes=[]),Array.isArray(t.photos)||(t.photos=[]),(!t.seen||typeof t.seen!="object")&&(t.seen={}),(i.v|0)>Oo?null:(t.v=Oo,t)}async function dl(i,t){t.savedAt=Date.now(),await iu(i,JSON.stringify(t))}async function Ir(i){const t=await yv(i);if(!t)return{state:null,broken:!1};try{const e=fl(JSON.parse(t));return{state:e,broken:!e}}catch(e){return console.warn(`[save] слот ${i} повреждён`,e),{state:null,broken:!0}}}async function Mv(i){await iu(i,null)}function Sv(i){return JSON.stringify(i)}function wv(i){try{return fl(JSON.parse(i))}catch(t){return console.warn("[save] импорт: файл не является сохранением",t),null}}typeof window<"u"&&(window.__S={readSave:Ir,writeSave:dl,migrate:fl});const Wi={sat:1,tint:[1,1,1],vig:.35,glitch:0,bright:1,contrast:1,wave:0,bloom:.45},Ev={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new D(1,1,1)},uVig:{value:.35},uGlitch:{value:0},uBright:{value:1},uContrast:{value:1},uWave:{value:0},uTime:{value:0},uFlash:{value:0},uDither:{value:1},uCA:{value:.0018},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash,uDither,uCA,uGrain; uniform vec3 uTint; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec2 uv=vUv;
      if(uWave>0.0){ uv.x+=sin(uv.y*18.0+uTime*2.2)*0.006*uWave; uv.y+=sin(uv.x*14.0+uTime*1.7)*0.005*uWave; }
      float sh=0.0;
      if(uGlitch>0.0){ float band=floor(uv.y*24.0); float n=h(vec2(band,floor(uTime*9.0))); if(n>1.0-uGlitch*0.35){ uv.x+=(h(vec2(band,uTime))-0.5)*0.12*uGlitch; } sh=0.004*uGlitch; }
      vec2 dc=uv-0.5; float ca=uCA*dot(dc,dc)*4.0; vec3 c=vec3(texture2D(tDiffuse,uv+dc*ca).r, texture2D(tDiffuse,uv).g, texture2D(tDiffuse,uv-dc*ca).b);
      if(sh>0.0){ c.r=texture2D(tDiffuse,uv+vec2(sh,0.0)).r; c.b=texture2D(tDiffuse,uv-vec2(sh,0.0)).b; }
      float l=dot(c,vec3(0.3,0.59,0.11)); c=mix(vec3(l),c,uSat); c*=uTint*uBright; c=(c-0.5)*uContrast+0.5;
      float d=distance(vUv,vec2(0.5)); c*=1.0-uVig*smoothstep(0.35,0.85,d);
      float lum=dot(c,vec3(0.3,0.59,0.11)); c=mix(c*vec3(0.94,0.98,1.06), c*vec3(1.06,1.0,0.92), smoothstep(0.15,0.75,lum));
      c+=(h(gl_FragCoord.xy+floor(uTime*24.0))-0.5)*uGrain; c+=vec3(uFlash);
      vec2 fp=floor(mod(gl_FragCoord.xy,4.0)); float b=mod(fp.x*8.0+fp.y*2.0+mod(fp.y,2.0)*4.0,16.0)/16.0;
      c=floor(c*40.0+b*uDither)/40.0; gl_FragColor=vec4(c,1.0); }`};class Tv{constructor(t){this.canvas=t,this.scene=new pg,this.target={...Wi,tint:[...Wi.tint]},this.cur={...Wi,tint:[...Wi.tint]},this.flash=0,this.W=640,this.H=360,this.time=0,this.bokeh=null,this.dofFocus=0,this.pixelH=0,this.baseFov=30,this.r=new dg({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=th,this.r.toneMapping=Wo,this.r.toneMappingExposure=1.3,this.cam=new Je(30,16/9,1,200),this.setup(),window.addEventListener("resize",()=>this.setup())}setup(t={}){t.pixelH!=null&&(this.pixelH=t.pixelH);const e=t.dof??!!this.bokeh,n=window.innerWidth,s=window.innerHeight,r=this.pixelH||(Pe.quality==="low"?288:Pe.quality==="med"?400:540),o=Math.max(1,Math.floor(s/r))||1;this.H=Math.max(180,Math.round(s/o)),this.W=Math.max(240,Math.round(n/o)),this.r.setPixelRatio(1),this.r.setSize(this.W,this.H,!1),this.r.shadowMap.enabled=Pe.quality!=="low",this.cam.aspect=this.W/this.H,this.cam.fov=this.cam.aspect<1?this.baseFov*1.5:this.baseFov,this.cam.updateProjectionMatrix();const l=new on(this.W,this.H,{type:Mn});this.composer=new uv(this.r,l),this.composer.addPass(new fv(this.scene,this.cam)),this.bloom=new cs(new nt(this.W,this.H),.45,.5,.9),this.bloom.enabled=Pe.quality!=="low",this.composer.addPass(this.bloom),this.bokeh=null,e&&Pe.quality!=="low"&&(this.bokeh=new vv(this.scene,this.cam,{focus:this.dofFocus||5,aperture:.004,maxblur:.006}),this.composer.addPass(this.bokeh)),this.composer.addPass(new mv),this.grade=new tu(Ev),this.composer.addPass(this.grade)}setGrade(t,e=!1){this.target={...Wi,...t,tint:t.tint?[...t.tint]:[...Wi.tint]},e&&(this.cur={...this.target,tint:[...this.target.tint]})}render(t){this.time+=t;const e=Math.min(1,t*4),n=this.cur,s=this.target;for(const o of["sat","vig","glitch","bright","contrast","wave","bloom"])n[o]+=(s[o]-n[o])*e;for(let o=0;o<3;o++)n.tint[o]+=(s.tint[o]-n.tint[o])*e;this.flash=Math.max(0,this.flash-t*2.5);const r=this.grade.uniforms;r.uSat.value=n.sat,r.uTint.value.set(n.tint[0],n.tint[1],n.tint[2]),r.uVig.value=n.vig,r.uGlitch.value=Pe.reduceFlash?Math.min(n.glitch,.25):n.glitch,r.uBright.value=n.bright,r.uContrast.value=n.contrast*(Pe.contrast?1.12:1),r.uWave.value=n.wave,r.uTime.value=this.time,r.uFlash.value=Pe.reduceFlash?this.flash*.25:this.flash,this.bloom.strength=n.bloom*.65,this.composer.render(t)}snapshot(t=192){this.composer.render(0);const e=document.createElement("canvas");e.width=t,e.height=Math.round(t*this.H/this.W);const n=e.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.canvas,0,0,e.width,e.height),e.toDataURL("image/jpeg",.7)}}const Zn=16,Av=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Te(i,t,e=0){let n=i*374761393+t*668265263+e*982451653|0;return n=(n^n>>13)*1274126177|0,((n^n>>16)>>>0)/4294967295}function Oa(i,t,e,n=0){const s=Math.floor(i),r=Math.floor(t),o=i-s,l=t-r,a=v=>(v%e+e)%e,c=o*o*(3-2*o),h=l*l*(3-2*l),u=Te(a(s),a(r),n),p=Te(a(s+1),a(r),n),m=Te(a(s),a(r+1),n),d=Te(a(s+1),a(r+1),n);return u+(p-u)*c+(m-u)*h+(u-p-m+d)*c*h}function Re(i,t,e,n=0){return Oa(i/e*4,t/e*4,4,n)*.55+Oa(i/e*8,t/e*8,8,n+1)*.3+Oa(i/e*16,t/e*16,16,n+2)*.15}const su=i=>{const t=parseInt(i,16);return[t>>16,t>>8&255,t&255]},ve=i=>i.split(" ").map(su),jn={wood:ve("2e1f15 45301f 5a4029 6e5133 82623f 98764d"),floor:ve("3d2817 53371f 684628 7c5631 8f673c"),darkwood:ve("1c130e 2a1c14 38261a 453021 543b28"),velvet:ve("3a0810 560c18 721022 8e1830 a82840"),plaster:ve("8a7a68 9c8c78 ad9d88 bcae98 cabda8"),stone:ve("3c3a37 524f4a 69655e 807b72 978f84"),brick:ve("3a1c18 54261e 6e3226 86402e 9a5038"),gold:ve("5a4010 86641c b08a2c d4ae48 f0d478"),carpet:ve("4a0c14 62101c 7a1626 8e2030"),metal:ve("23262c 343841 484e59 5e6673 78818f"),black:ve("0c0a0c 141216 1c1a20 24222a"),neon:ve("0a0a18 12122a 1c1c40 2a2a5a"),asphalt:ve("16181c 1e2126 282c33 343943 444a56"),grass:ve("1f2e18 283a1e 334823 3e5629 4b6431"),dirt:ve("2b2019 35281e 403024 4b392a 574332"),paper:ve("c9b88a d6c79a e2d5ac ecdfbc f4eacb"),white:ve("b8b8c4 cacad4 dadae2 e8e8ee f4f4f8"),tileb:ve("18181c 26262c"),concrete:ve("4a4a4e 5a5a5e 6a6a6e 7a7a7e"),schoolfloor:ve("a88a5a b89a68 c8aa78 d6ba88"),pink:ve("c85a90 d870a4 e888b8 f4a4cc"),sky:ve("6a9ad8 82aee4 9cc2ee b8d6f6"),night:ve("0a0e1c 101628 182036 222c48"),green:ve("24402e 2e5038 3a6244 48745a"),blue:ve("1a2440 24325a 304274 3e548e")},Ls=new Map;function ru(i,t=!0){const e=new Bh(i);return e.magFilter=Le,e.minFilter=Le,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=kr),e.colorSpace=fn,e}const Cv={floor:{size:64,ramp:"floor",fn:(i,t,e)=>{const n=Math.floor(t/8),s=n*23%32,r=(i+s)%32;return t%8===0||r===0?.05:.35+Re(i*3,t+n*40,e,n)*.55+Te(Math.floor((i+s)/32),n)*.2}},parquet:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(i/16),s=Math.floor(t/16),r=(n+s)%2,o=r?i%16:t%16,l=r?t%4:i%4;return o===0||l===0?.1:.4+Re(r?i:t*3,r?t*3:i,e,3)*.5+r*.08}},wood:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(t/8);return t%8===0?.05:.3+Re(i*2,t+n*30,e,n+50)*.6}},darkwood:{size:32,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+Re(i+n*30,t*2,e,n+60)*.6}},stage:{size:64,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+Re(i+n*30,t*3,e,n)*.6}},woodwall:{size:32,ramp:"darkwood",fn:(i,t,e)=>i%16===0||t%32===31?.02:i%16===1?.9:.35+Re(i*2,t,e,5)*.5},velvet:{size:32,ramp:"velvet",fn:(i,t)=>.5+Math.sin(i/32*Math.PI*6)*.42+Te(i,t)*.08},plaster:{size:64,ramp:"plaster",fn:(i,t,e)=>.3+Re(i,t,e,7)*.6},wallpaper:{size:32,ramp:"velvet",dither:.1,fn:(i,t)=>{const e=i%16-8,n=(t+Math.floor(i/16)%2*8)%16-8,s=Math.abs(e)+Math.abs(n);return s<3?.75:s<5?.15:.35+Te(i,t)*.1}},wallgreen:{size:32,ramp:"green",dither:.1,fn:(i,t)=>{const e=i%16-8,n=t%16-8,s=Math.abs(e)+Math.abs(n);return i%16===0?.1:s<3?.85:.4+Te(i,t)*.15}},brick:{size:32,ramp:"brick",fn:(i,t,e)=>{const n=Math.floor(t/8),s=(i+n%2*8)%16;return t%8===0||s===0?[.3,jn.stone]:.3+Te(Math.floor((i+n%2*8)/16),n)*.45+Re(i,t,e,2)*.25}},stone:{size:32,ramp:"stone",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?.02:.3+Te(Math.floor((i+n%2*9)/18),n,4)*.4+Re(i,t,e,9)*.3}},gold:{size:16,ramp:"gold",fn:(i,t)=>.5+Math.sin((i+t)/16*Math.PI*2)*.35+Te(i,t)*.15},carpet:{size:32,ramp:"carpet",dither:.4,fn:(i,t)=>Math.min(i%32,31-i%32)<2?[.7,jn.gold]:.4+Te(i,t)*.4},metal:{size:32,ramp:"metal",fn:(i,t,e)=>i%32===0||t%32===0?.05:(i%32===3||i%32===28)&&(t%32===3||t%32===28)?.95:.45+Re(i*4,t,e,11)*.35},black:{size:16,ramp:"black",fn:(i,t)=>.3+Te(i,t)*.5},neon:{size:32,ramp:"neon",dither:.05,fn:(i,t)=>i%16===0||t%16===0?[.9,[[30,220,230]]]:.3+Te(i,t)*.2},asphalt:{size:64,ramp:"asphalt",fn:(i,t,e)=>{const n=Re(i,t,e,13);return n>.62?.95:.2+n*.6}},cobble:{size:32,ramp:"asphalt",fn:(i,t)=>{const e=Math.floor(t/8),n=(i+e%2*5)%10;return t%8===0||n===0?.02:.35+Te(Math.floor((i+e%2*5)/10),e,6)*.6}},grass:{size:64,ramp:"grass",dither:.35,fn:(i,t,e)=>.2+Re(i,t,e,17)*.6+(Te(i,t)>.9?.25:0)},dirt:{size:64,ramp:"dirt",dither:.3,fn:(i,t,e)=>.2+Re(i,t,e,19)*.7},paper:{size:64,ramp:"paper",dither:.3,fn:(i,t,e)=>.35+Re(i,t,e,23)*.5+(Te(i,t)>.97?-.3:0)},paperstone:{size:32,ramp:"paper",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?[.4,jn.wood]:.3+Te(Math.floor((i+n%2*9)/18),n,4)*.5}},white:{size:32,ramp:"white",fn:(i,t,e)=>.5+Re(i,t,e,29)*.4},gloss:{size:32,ramp:"white",dither:.1,fn:(i,t)=>i%32===0||t%32===0?.1:.75+((i+t)%32<4?.25:0)},checker:{size:32,ramp:"tileb",dither:0,fn:(i,t)=>(Math.floor(i/16)+Math.floor(t/16))%2?[.5,jn.white]:.5},concrete:{size:64,ramp:"concrete",fn:(i,t,e)=>.3+Re(i,t,e,31)*.6},schoolfloor:{size:32,ramp:"schoolfloor",fn:(i,t,e)=>t%16===0||(i+Math.floor(t/16)*16)%32===0?.1:.45+Re(i*3,t,e,37)*.45},schoolwall:{size:32,ramp:"white",dither:.15,fn:(i,t)=>.65+Te(i,t)*.2},led:{size:16,ramp:"pink",dither:0,fn:(i,t)=>i%4===0||t%4===0?[.2,jn.black]:.3+Te(Math.floor(i/4),Math.floor(t/4),2)*.7},sky:{size:64,ramp:"sky",dither:.4,fn:(i,t,e)=>.2+(1-t/e)*.6+Re(i,t,e,41)*.2},night:{size:64,ramp:"night",dither:.4,fn:(i,t,e)=>Te(i,t)>.992?[.9,jn.white]:.2+t/e*.5+Re(i,t,e,43)*.2},blue:{size:32,ramp:"blue",fn:(i,t,e)=>.3+Re(i,t,e,47)*.6},mirror:{size:32,ramp:"white",dither:.2,fn:(i,t)=>{const e=(i+t*2)%32;return e<3?.95:e<14?.5:.3}}};function Oe(i,t){const e=i+(t||"");let n=Ls.get(e);if(n)return n;const s=Cv[i];if(!s)return console.warn("[tex] нет текстуры",i),Oe("plaster");const r=s.size,o=document.createElement("canvas");o.width=o.height=r;const l=o.getContext("2d"),a=l.createImageData(r,r),c=t?su(t.replace("#","")):null;for(let h=0;h<r;h++)for(let u=0;u<r;u++){let p=s.fn(u,h,r),m=jn[s.ramp],d;Array.isArray(p)?(d=p[0],m=p[1]):d=p,d+=(Av[(h&3)*4+(u&3)]/16-.5)*(s.dither??.22);let v=m[Math.max(0,Math.min(m.length-1,Math.floor(d*m.length)))];if(c&&m===jn[s.ramp]){const g=(v[0]*.3+v[1]*.6+v[2]*.1)/160;v=[Math.min(255,c[0]*g),Math.min(255,c[1]*g),Math.min(255,c[2]*g)]}const f=(h*r+u)*4;a.data[f]=v[0],a.data[f+1]=v[1],a.data[f+2]=v[2],a.data[f+3]=255}return l.putImageData(a,0,0),n=ru(o),n.unit=r/Zn,Ls.set(e,n),n}function mn(i,t,e,n){if(n&&Ls.has(n))return Ls.get(n);const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");r.imageSmoothingEnabled=!1,e(r,i,t);const o=ru(s,!1);return n&&Ls.set(n,o),o}const Rv='"Pixelify Sans", monospace';function hs(i,t,e,n,s={}){const r=s.size||8;i.font=`${r}px ${s.font||Rv}`,i.fillStyle=s.col||"#111",i.textAlign=s.align||"left",i.textBaseline="top";const o=[];for(const l of t.split(`
`)){if(!s.w){o.push(l);continue}let a="";for(const c of l.split(" ")){const h=a?a+" "+c:c;i.measureText(h).width>s.w&&a?(o.push(a),a=c):a=h}o.push(a)}return o.forEach((l,a)=>i.fillText(l,e,n+a*(s.lh||r+2))),o.length*(s.lh||r+2)}const P=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)};function Pv(i,t="",e={}){const n=e.w?Math.max(40,Math.round(e.w*22)):40,s=e.h?Math.max(56,Math.round(e.h*22)):56;let r=0;for(const l of i)r=r*31+l.charCodeAt(0)>>>0;const o=e.motif||["mask","crown","rose","dancer","moon","curtain"][r%6];return mn(n,s,l=>{P(l,0,0,n,s,e.frame||"#3a2a14");const a=l.createLinearGradient(0,0,0,s),c=e.bg||["#e2d5ac","#f0e0c0","#d8c8a0","#e8d0c0"][r%4];a.addColorStop(0,c),a.addColorStop(1,"#a8906a"),l.fillStyle=a,l.fillRect(1,1,n-2,s-2),l.strokeStyle="rgba(90,12,24,.6)",l.strokeRect(3.5,3.5,n-7,s-7);const h=n/2,u=s*.38,p=e.fg||"#5a0c18";if(l.fillStyle=p,e.face)P(l,h-7,u-10,14,16,e.face),P(l,h-9,u-12,18,6,"#2a1512"),P(l,h-10,u-8,3,18,"#2a1512"),P(l,h+7,u-8,3,18,"#2a1512"),P(l,h-8,u+6,16,9,"#a3122a"),P(l,h-4,u-4,2,2,"#2a1512"),P(l,h+2,u-4,2,2,"#2a1512"),P(l,h-2,u+1,4,1,"#b3122e");else if(o==="mask")l.beginPath(),l.ellipse(h-4,u,7,9,-.2,0,7),l.fill(),l.fillStyle=c,l.fillRect(h-8,u-3,3,2),l.fillRect(h-2,u-3,3,2),l.fillStyle="#b08a2c",l.beginPath(),l.ellipse(h+5,u+3,6,8,.3,0,7),l.fill();else if(o==="crown")l.beginPath(),l.moveTo(h-10,u+6),l.lineTo(h-10,u-6),l.lineTo(h-5,u),l.lineTo(h,u-9),l.lineTo(h+5,u),l.lineTo(h+10,u-6),l.lineTo(h+10,u+6),l.fill();else if(o==="rose"){for(let v=0;v<5;v++)l.beginPath(),l.arc(h+Math.cos(v*1.26)*4,u+Math.sin(v*1.26)*4,5,0,7),l.fill();P(l,h-1,u+6,2,12,"#2e5038")}else if(o==="dancer")P(l,h-1,u-10,3,3,p),P(l,h-1,u-7,3,9,p),P(l,h-7,u-9,6,1,p),P(l,h+2,u-12,1,6,p),l.beginPath(),l.ellipse(h,u+2,8,2,0,0,7),l.fill(),P(l,h-1,u+3,1,9,p),P(l,h+1,u+3,5,1,p);else if(o==="moon")l.beginPath(),l.arc(h,u,9,0,7),l.fill(),l.fillStyle=c,l.beginPath(),l.arc(h+4,u-2,8,0,7),l.fill();else for(let v=0;v<6;v++)P(l,5+v*((n-10)/6),5,(n-10)/12,s*.55,v%2?"#8e1830":"#5a0c18");const m=s*.6,d=hs(l,i,h,m,{size:e.size||8,col:p,w:n-6,align:"center"});t&&hs(l,t,h,m+d+1,{size:6,col:"#3a2a14",w:n-6,align:"center",lh:7}),P(l,6,s-7,n-12,1,"rgba(58,42,20,.5)"),P(l,9,s-5,n-18,1,"rgba(58,42,20,.35)")},"poster|"+i+t+JSON.stringify(e))}const Bo={tree:{w:48,h:72,draw:i=>{P(i,21,40,6,32,"#2c2019"),P(i,23,40,2,32,"#3a2b21");for(const[t,e,n,s,r]of[[6,8,36,30,"#1c2a16"],[2,18,44,20,"#26381b"],[10,4,26,14,"#324820"],[8,14,18,12,"#405a27"],[26,22,14,10,"#324820"]])P(i,t,e,n,s,r)}},pine:{w:40,h:80,draw:i=>{P(i,18,60,4,20,"#1e1612");for(let t=0;t<6;t++)P(i,16-t*3,6+t*10,8+t*6,12,t%2?"#16241d":"#1d3024"),P(i,17-t*3,6+t*10,3,2,"#263c2c")}},bush:{w:24,h:16,draw:i=>{P(i,2,5,20,11,"#26381b"),P(i,5,2,14,6,"#324820"),P(i,6,3,4,2,"#405a27")}},sakura:{w:48,h:72,draw:i=>{P(i,21,40,6,32,"#4a382a");for(const[t,e,n,s,r]of[[6,8,36,28,"#e888b8"],[2,18,44,18,"#f4a4cc"],[10,4,26,14,"#f8c0dc"],[8,14,12,8,"#fde0ee"],[28,24,12,8,"#d870a4"]])P(i,t,e,n,s,r)}},lamp:{w:12,h:44,draw:i=>{P(i,5,10,2,32,"#2a2a2e"),P(i,2,42,8,2,"#2a2a2e"),P(i,1,2,10,9,"#f4d890"),P(i,2,1,8,1,"#c8a850"),P(i,3,4,6,5,"#fff4c8")}},streetlamp:{w:14,h:64,draw:i=>{P(i,6,10,2,54,"#1a1a1e"),P(i,3,62,8,2,"#1a1a1e"),P(i,2,2,10,9,"#f0f0d8"),P(i,1,0,12,2,"#1a1a1e")}},chair:{w:14,h:22,draw:i=>{P(i,2,0,10,12,"#721022"),P(i,1,0,1,22,"#86641c"),P(i,12,0,1,22,"#86641c"),P(i,1,12,12,3,"#8e1830"),P(i,3,2,8,8,"#8e1830")}},plant:{w:16,h:28,draw:i=>{P(i,4,20,8,8,"#7a4a2a"),P(i,7,8,2,12,"#2e5038"),P(i,2,4,5,10,"#3a6244"),P(i,9,2,5,12,"#48745a"),P(i,5,0,4,8,"#3a6244")}},bust:{w:16,h:30,draw:i=>{P(i,2,20,12,10,"#69655e"),P(i,1,19,14,2,"#807b72"),P(i,4,4,8,10,"#cabda8"),P(i,3,14,10,5,"#bcae98"),P(i,4,2,8,3,"#ad9d88"),P(i,6,8,1,1,"#555"),P(i,9,8,1,1,"#555"),P(i,6,11,4,1,"#8a7a68")}},bustfun:{w:16,h:30,draw:i=>{Bo.bust.draw(i),P(i,5,7,3,3,"#fff"),P(i,9,7,3,3,"#fff"),P(i,6,8,1,1,"#000"),P(i,10,8,1,1,"#000"),P(i,5,11,6,1,"#a22"),P(i,6,12,4,1,"#a22"),P(i,3,0,10,3,"#e84a6f"),P(i,6,-1,4,2,"#f2c230")}},masks:{w:30,h:14,draw:i=>{for(const[t,e,n]of[[0,"#f2c230",0],[10,"#6a8ad0",1],[20,"#d86a8a",2]])P(i,t+1,1,8,11,e),P(i,t+2,0,6,1,e),P(i,t+2,12,6,1,e),P(i,t+2,4,2,2,"#111"),P(i,t+6,4,2,2,"#111"),n===0&&(P(i,t+2,8,6,1,"#111"),P(i,t+3,9,4,1,"#111")),n===1&&(P(i,t+3,8,4,1,"#111"),P(i,t+2,9,1,1,"#111"),P(i,t+7,9,1,1,"#111")),n===2&&P(i,t+3,9,4,1,"#111")}},ladder:{w:20,h:60,draw:i=>{P(i,2,0,2,60,"#5a4029"),P(i,16,0,2,60,"#5a4029");for(let t=0;t<9;t++)P(i,2,4+t*6,16,2,"#6e5133")}},bridgecut:{w:72,h:30,draw:i=>{P(i,0,8,72,5,"#5a4029");for(let t=0;t<9;t++)P(i,2+t*8,0,3,30,"#45301f");P(i,0,0,72,3,"#6e5133"),P(i,30,13,12,17,"#45301f")}},marionette:{w:16,h:30,draw:i=>{P(i,2,0,12,2,"#5a4029"),P(i,7,0,2,3,"#5a4029");for(const t of[3,8,12])P(i,t,2,1,8,"#ddd");P(i,5,8,6,6,"#e8d8c0"),P(i,5,8,3,6,"#f4ecd8"),P(i,6,10,1,1,"#111"),P(i,9,10,1,1,"#111"),P(i,5,14,6,8,"#a3122a"),P(i,5,14,3,8,"#2f7f82"),P(i,3,14,2,7,"#e8d8c0"),P(i,11,14,2,7,"#e8d8c0"),P(i,5,22,2,7,"#333"),P(i,9,22,2,7,"#333"),P(i,6,15,4,2,"#f4d060")}},bookstand:{w:16,h:28,draw:i=>{P(i,7,10,2,16,"#2a1c14"),P(i,3,26,10,2,"#2a1c14"),P(i,1,4,14,7,"#4a0c14"),P(i,2,5,5,5,"#e2d5ac"),P(i,9,5,5,5,"#e2d5ac"),P(i,7,4,2,7,"#86641c")}},candle:{w:6,h:16,draw:i=>{P(i,2,6,2,8,"#e8e0c8"),P(i,1,14,4,2,"#86641c"),P(i,2,2,2,4,"#ffd060"),P(i,2,1,1,2,"#fff4c8")}},flowerpot:{w:12,h:16,draw:i=>{P(i,2,9,8,7,"#8a4a2a"),P(i,1,8,10,2,"#9a5a3a"),P(i,5,3,2,6,"#2e5038"),P(i,3,0,6,4,"#d86a8a"),P(i,5,1,2,2,"#f2c230")}},umbrella:{w:22,h:26,draw:i=>{P(i,10,6,2,18,"#333"),P(i,8,24,3,2,"#333"),P(i,1,4,20,5,"#e84a6f"),P(i,4,1,14,3,"#f06a88"),P(i,9,0,4,1,"#f06a88");for(const t of[1,7,13,19])P(i,t,9,2,1,"#c03050")}},cake:{w:26,h:26,draw:i=>{P(i,2,14,22,10,"#f4e8d8"),P(i,2,18,22,2,"#e888b8"),P(i,4,10,18,5,"#fff8f0"),P(i,0,24,26,2,"#d4ae48");for(let t=0;t<9;t++)P(i,3+t*2+t%2,5+t%2*2,1,6,["#5fd0c8","#f2c230","#e84a6f"][t%3]),P(i,3+t*2+t%2,3+t%2*2,1,2,"#ffd060");for(let t=0;t<9;t++)P(i,4+t*2,11,1,3,["#f2c230","#e84a6f","#5fd0c8"][t%3]),P(i,4+t*2,9,1,2,"#ffd060")}},cakeout:{w:26,h:26,draw:i=>{Bo.cake.draw(i);for(let t=0;t<9;t++)P(i,3+t*2+t%2,3+t%2*2,1,2,"#888"),P(i,4+t*2,9,1,2,"#888")}},bouquet:{w:24,h:30,draw:i=>{P(i,8,16,8,12,"#e2d5ac"),P(i,10,28,4,2,"#a3122a"),P(i,9,20,6,2,"#a3122a");const t=["#e84a6f","#f2c230","#f8c0dc","#fff","#c03050","#ff9a3c"];for(let e=0;e<14;e++){const n=2+e*7%18,s=1+e*5%13;P(i,n,s,5,5,t[e%6]),P(i,n+2,s+2,1,1,"#5a4010")}P(i,4,13,3,4,"#2e5038"),P(i,17,12,3,5,"#3a6244")}},mic:{w:8,h:34,draw:i=>{P(i,3,6,2,26,"#555"),P(i,1,32,6,2,"#333"),P(i,2,0,4,6,"#888"),P(i,2,1,4,1,"#bbb")}},speaker:{w:16,h:26,draw:i=>{P(i,0,0,16,26,"#18181c"),P(i,1,1,14,24,"#26262c"),P(i,4,3,8,8,"#111"),P(i,6,5,4,4,"#444"),P(i,3,13,10,10,"#111"),P(i,6,16,4,4,"#444")}},stagelight:{w:14,h:16,draw:i=>{P(i,2,2,10,9,"#222"),P(i,4,11,6,3,"#fff4c8"),P(i,6,0,2,2,"#444"),P(i,1,5,1,3,"#555"),P(i,12,5,1,3,"#555")}},stall:{w:56,h:52,draw:i=>{P(i,2,14,2,38,"#5a4029"),P(i,52,14,2,38,"#5a4029");for(let t=0;t<7;t++)P(i,t*8,2,8,12,t%2?"#e84a6f":"#fff8f0");for(let t=0;t<7;t++)P(i,t*8+1,14,6,2,t%2?"#c03050":"#ddd");P(i,2,34,52,18,"#6e5133"),P(i,2,32,52,3,"#98764d");for(let t=0;t<5;t++)P(i,8+t*9,26,5,6,["#f2c230","#e84a6f","#5fd0c8","#f8c0dc","#ff9a3c"][t]);for(let t=0;t<6;t++)P(i,5+t*9,17,3,4,["#f2c230","#e84a6f"][t%2])}},lantern:{w:10,h:14,draw:i=>{P(i,4,0,2,2,"#333"),P(i,1,2,8,10,"#e84a6f"),P(i,3,3,4,8,"#ffd060"),P(i,2,12,6,1,"#333")}},gear:{w:14,h:14,draw:i=>{P(i,3,3,8,8,"#b08a2c"),P(i,5,0,4,14,"#b08a2c"),P(i,0,5,14,4,"#b08a2c"),P(i,5,5,4,4,"#3a2a14"),P(i,1,1,3,3,"#86641c"),P(i,10,1,3,3,"#86641c"),P(i,1,10,3,3,"#86641c"),P(i,10,10,3,3,"#86641c")}},key:{w:12,h:8,draw:i=>{P(i,0,1,5,6,"#d4ae48"),P(i,1,3,2,2,"#000"),P(i,5,3,7,2,"#d4ae48"),P(i,9,5,1,2,"#d4ae48"),P(i,11,5,1,2,"#d4ae48"),i.clearRect(1,3,2,2)}},weight:{w:14,h:14,draw:i=>{P(i,1,4,12,10,"#484e59"),P(i,3,2,8,3,"#5e6673"),P(i,5,0,4,3,"#343841"),P(i,2,5,2,8,"#78818f")}},basket:{w:18,h:16,draw:i=>{P(i,1,6,16,10,"#8a6a3a");for(let t=0;t<4;t++)P(i,1,7+t*3,16,1,"#6a4a2a");P(i,0,5,18,2,"#a88a4a"),P(i,2,0,1,6,"#f0d98a"),P(i,15,0,1,6,"#f0d98a")}},hook:{w:10,h:12,draw:i=>{P(i,3,0,4,3,"#484e59"),P(i,4,3,2,5,"#78818f"),P(i,4,8,5,2,"#78818f"),P(i,8,6,1,2,"#78818f")}},slot:{w:16,h:30,draw:i=>{P(i,0,0,16,30,"#3a1a5a"),P(i,1,1,14,6,"#ff4fa0"),P(i,2,9,12,8,"#111");for(let t=0;t<3;t++)P(i,3+t*4,10,3,6,["#f2c230","#40e0d0","#f2c230"][t]);P(i,2,19,12,2,"#40e0d0"),P(i,4,23,8,5,"#222")}},holo:{w:24,h:30,draw:i=>{i.globalAlpha=.7,P(i,0,0,24,30,"#0a3a4a");for(let t=0;t<8;t++)P(i,2,2+t*3.5,4+t*7%16,1,"#40e0d0");P(i,14,16,8,10,"#40e0d0"),i.globalAlpha=1}},typewriter:{w:16,h:10,draw:i=>{P(i,1,4,14,6,"#2a2a2e"),P(i,3,0,10,4,"#e8e8e8");for(let t=0;t<5;t++)P(i,3+t*2,6,1,1,"#aaa");for(let t=0;t<5;t++)P(i,4+t*2,8,1,1,"#aaa")}},cam:{w:12,h:10,draw:i=>{P(i,0,2,12,8,"#222"),P(i,2,0,4,2,"#333"),P(i,4,3,5,5,"#557"),P(i,5,4,3,3,"#9bd"),P(i,10,3,1,1,"#f33")}},filmcam:{w:22,h:36,draw:i=>{P(i,4,6,14,10,"#2a2a2e"),P(i,0,8,4,6,"#444"),P(i,6,0,5,6,"#3a3a40"),P(i,12,1,5,5,"#3a3a40"),P(i,10,16,2,6,"#555"),P(i,10,22,1,14,"#555"),P(i,6,22,1,14,"#555"),P(i,15,22,1,14,"#555")}},suitcase:{w:16,h:12,draw:i=>{P(i,0,2,16,10,"#6a6a6a"),P(i,6,0,4,2,"#333"),P(i,0,6,16,1,"#333"),P(i,3,5,2,3,"#bbb"),P(i,11,5,2,3,"#bbb")}},book:{w:10,h:8,draw:i=>{P(i,0,1,10,7,"#4a0c14"),P(i,1,0,8,2,"#e2d5ac"),P(i,3,3,4,2,"#d4ae48")}},wheel:{w:20,h:20,draw:i=>{P(i,2,2,16,16,"#5a4029"),P(i,6,0,8,20,"#5a4029"),P(i,0,6,20,8,"#5a4029"),P(i,5,5,10,10,"#2a1c14"),P(i,9,2,2,16,"#98764d"),P(i,2,9,16,2,"#98764d")}},hoverbike:{w:36,h:18,draw:i=>{P(i,2,8,32,6,"#26262e"),P(i,6,4,14,5,"#ff9a3c"),P(i,20,2,6,6,"#343841"),P(i,0,10,4,3,"#40e0d0"),P(i,4,15,28,2,"#40e0d0"),P(i,28,6,6,3,"#78818f")}},horse:{w:36,h:30,draw:i=>{P(i,6,10,22,10,"#f0f0f0"),P(i,24,2,8,12,"#f0f0f0"),P(i,30,4,5,5,"#e0e0e0"),P(i,8,20,3,10,"#ddd"),P(i,22,20,3,10,"#ddd"),P(i,2,10,4,10,"#e8c36a"),P(i,23,0,3,10,"#e8c36a"),P(i,31,5,1,1,"#111"),P(i,10,9,12,3,"#3a6ab0")}},spotcone:{w:4,h:4,draw:i=>P(i,0,0,4,4,"#fff")}};function Lv(i){const t=Bo[i];if(!t)throw new Error("Нет реквизита: "+i);const e=mn(t.w,t.h,n=>t.draw(n),"prop|"+i);return e.pw=t.w,e.ph=t.h,e}const Zt=i=>new Yn(i),be={gold:()=>Zt({map:Oe("gold")}),wood:i=>Zt({map:Oe("darkwood"),color:i||16777215}),velvet:(i=16777215)=>Zt({map:Oe("velvet"),color:i})};function Pt(i,t,e,n,s,r,o,l,a=!0){const c=new _t(new je(t,e,n),l);return c.position.set(s,r,o),c.castShadow=a,c.receiveShadow=!0,i.add(c),c}const Ba=i=>parseInt(i.replace("#",""),16);function Dv(i,t,e,n,s=!1,r){const o=new ce,l=be.wood(),a=Zt({map:Oe("wood"),color:Ba(e)|2105376}),c=be.gold();Pt(o,i+.5,.3,.3,0,t+.15,.12,l),Pt(o,i+.8,.12,.38,0,t+.36,.14,c),Pt(o,i*.5,.35,.2,0,t+.55,.1,l);for(const p of[-1,1])Pt(o,.25,t,.3,p*(i/2+.12),t/2,.12,l),Pt(o,.32,.3,.36,p*(i/2+.12),.15,.14,l);const h=s?[-1,1]:[0],u=s?i/2-.02:i-.04;for(const p of h){const m=new ce;m.name="leaf",m.position.set(s?p*(i/2-.01):-i/2+.02,0,.04),o.add(m);const d=s?-p*u/2:u/2;Pt(m,u,t-.04,.1,d,t/2,0,a);for(const[f,g]of[[t*.72,t*.36],[t*.27,t*.38]])Pt(m,u-.3,g,.05,d,f,.07,a),Pt(m,u-.46,g-.16,.05,d,f,.1,Zt({map:Oe("wood"),color:Ba(e)|2105376}));const v=new _t(new si(.07,8,6),c);v.position.set(s?d-p*(u/2-.15):d+u/2-.18,t*.48,.14),m.add(v)}if(n){const p=mn(64,14,d=>{d.fillStyle="#e8d8b0",d.fillRect(0,0,64,14),d.strokeStyle="#86641c",d.strokeRect(.5,.5,63,13),hs(d,n,32,3,{size:8,col:"#3a1a14",align:"center"})},"dsign"+n),m=new _t(new De(Math.min(i,1.8),.4),Zt({map:p}));m.position.set(0,t+.15,.28),o.add(m)}if(r){const p=new Wr(Ba(r),3,4,1.6);p.position.set(0,t*.7,.8),o.add(p)}return o}function Iv(i){const t=i.children.filter(s=>s.name==="leaf");if(!t.length)return;let e=0;const n=()=>{e+=1/60;const s=Math.min(1,e/.4);t.forEach((r,o)=>{r.rotation.y=(t.length>1?o?-1:1:-1)*s*1.2}),s<1&&requestAnimationFrame(n)};n()}function y1(i,t,e={}){const n=e.w||2,s=e.h||2.8,r=e.y??3,o=new ce,l=be.wood(),a=be.gold(),c=mn(32,44,f=>{const g=f.createLinearGradient(0,0,0,44);if(e.night!==!1?(g.addColorStop(0,"#0c1430"),g.addColorStop(1,"#2a3a6a")):(g.addColorStop(0,"#6a9ad8"),g.addColorStop(1,"#cfe0f0")),f.fillStyle=g,f.fillRect(0,0,32,44),e.night!==!1){f.fillStyle="#fff";for(let x=0;x<14;x++)f.fillRect(x*37%32,x*17%26,1,1);f.fillStyle="#f0e8c8",f.beginPath(),f.arc(24,8,3,0,7),f.fill()}f.fillStyle="#1a1830";for(let x=0;x<8;x++){const y=6+x*7%12;f.fillRect(x*4,44-y,4,y),f.fillStyle=x%3?"#e8c060":"#1a1830",f.fillRect(x*4+1,44-y+2,1,1),f.fillStyle="#1a1830"}},"winview"+(e.night!==!1)),h=new _t(new De(n,s),new an({map:c}));h.position.set(0,0,-.18),o.add(h),Pt(o,n+.3,.18,.4,0,s/2+.05,0,l),Pt(o,n+.5,.12,.55,0,-s/2-.06,.08,l),Pt(o,n+.6,.06,.6,0,-s/2-.14,.1,a);for(const f of[-1,1])Pt(o,.16,s+.2,.4,f*(n/2+.06),0,0,l);Pt(o,.08,s,.08,0,0,-.12,l);for(const f of[-s/6,s/6+.2])Pt(o,n,.07,.08,0,f,-.12,l);if(e.arch!==!1){const f=new _t(new zs(n/2+.06,.1,6,16,Math.PI),l);f.position.set(0,s/2+.05,0),o.add(f);const g=new _t(new Hs(n/2,16,0,Math.PI),new an({map:c}));g.position.set(0,s/2+.05,-.18),o.add(g)}if(e.curtains!==!1)for(const f of[-1,1]){const g=new De(.9,s+1.2,8,1),x=g.attributes.position;for(let R=0;R<x.count;R++)x.setZ(R,Math.sin(x.getX(R)*14)*.06);g.computeVertexNormals();const y=new _t(g,Zt({map:Oe("velvet"),side:Fe}));y.position.set(f*(n/2+.35),.1,.32),o.add(y);const b=new _t(new zs(.16,.03,4,10),a);b.position.set(f*(n/2+.35),-.3,.4),o.add(b)}Pt(o,n+2.2,.1,.12,0,s/2+.6,.38,a);const u=e.wall||"n",p=u==="w"?-1:1;if(u==="n"){const f=i.wallSlot("n",t,n+2,r,s+1.4,{fixed:!0,obj:o});o.position.set(f,r,-i.d/2+.2)}else{const f=i.wallSlot(u,t,n+2,r,s+1.4,{fixed:!0,obj:o});o.position.set(p*(i.w/2-.2),r,f),o.rotation.y=-p*Math.PI/2}i.room.group.add(o);const m=new Jh(e.night!==!1?9087208:16773328,e.night!==!1?14:30,14,.5,.6,1.2),d=new D(0,.6,.5).applyEuler(o.rotation).add(o.position);m.position.copy(d);const v=new D(0,-r,3.2).applyEuler(o.rotation).add(o.position);return m.target.position.copy(v),i.room.group.add(m,m.target),o}function b1(i,t,e,n,s,r,o={}){const l=new ce,a=be.gold(),c=new _t(new De(s,r),new Zh({map:mn(24,32,u=>{const p=u.createLinearGradient(0,0,24,32);p.addColorStop(0,"#6a5a50"),p.addColorStop(.5,"#2e2622"),p.addColorStop(1,"#4a3c34"),u.fillStyle=p,u.fillRect(0,0,24,32),u.fillStyle="rgba(255,240,220,.22)",u.fillRect(3,1,2,30),u.fillRect(7,1,1,30)},"mirglass"),metalness:.6,roughness:.2}));c.position.z=.03,l.add(c);for(const[u,p,m,d]of[[s+.3,.16,0,r/2+.08],[s+.3,.16,0,-r/2-.08],[.16,r,-s/2-.08,0],[.16,r,s/2+.08,0]])Pt(l,u,p,.14,m,d,.05,a);const h=new _t(new zs(.25,.05,6,12,Math.PI),a);if(h.position.set(0,r/2+.16,.06),l.add(h),o.bulbs){const u=Zt({color:16774360,emissive:16760944}),p=Math.max(3,Math.round(r/.4));for(const m of[-1,1])for(let d=0;d<p;d++){const v=new _t(new si(.08,8,6),u);v.position.set(m*(s/2+.08),-r/2+.2+d*(r-.4)/(p-1),.15),l.add(v)}i.light(t,e,n+.8,16767392,5,6,{flicker:.04})}return l.position.set(t,e,n),o.ry&&(l.rotation.y=o.ry),i.room.group.add(l),l}function M1(i,t,e,n={}){const s=n.w||1.8,r=n.h||3.2,o=.9,l=new ce,a=Zt({map:Oe("darkwood"),color:n.col??13146736}),c=be.gold();Pt(l,s,r,o,0,r/2,0,a),Pt(l,s+.2,.18,o+.15,0,r+.09,0,a),Pt(l,s+.3,.06,o+.2,0,r+.2,0,c),Pt(l,s+.1,.15,o+.05,0,.08,0,a);for(const p of[-1,1]){Pt(l,s/2-.15,r-.6,.04,p*s/4,r/2,o/2+.01,Zt({map:Oe("darkwood"),color:(n.col??13146736)-1052688}));const m=new _t(new si(.05,6,6),c);m.position.set(p*.12,r/2,o/2+.06),l.add(m)}l.position.set(t,0,e),n.ry&&(l.rotation.y=n.ry),i.room.group.add(l);const h=n.ry?o/2:s/2,u=n.ry?s/2:o/2;return i.collider(t-h,e-u,t+h,e+u),l}function S1(i,t,e,n={}){const s=n.w||2.4,r=n.h||3.6,o=.6,l=n.shelves||5,a=new ce,c=be.wood();Pt(a,s,r,.06,0,r/2,-o/2,c);for(const y of[-1,1])Pt(a,.08,r,o,y*s/2,r/2,0,c);for(let y=0;y<=l;y++)Pt(a,s,.07,o,0,.1+y*(r-.2)/l,0,c,!1);const h=[9312304,2771514,3816042,11569708,5913122,6957642,14207136],u=Zt({color:16777215}),p=l*Math.floor(s/.09),m=new il(new je(.08,1,o-.15),u,p),d=new ee,v=new Vt;let f=0;for(let y=0;y<l;y++){let b=-s/2+.1;for(;b<s/2-.15&&f<p;){const R=.32+f*37%13/60,w=.06+f*7%4/100,A=f%11===0?.25:0;d.makeRotationZ(A),d.scale(new D(w/.08,R,1)),d.setPosition(b+w/2,.14+y*(r-.2)/l+R/2,.02),m.setMatrixAt(f,d),m.setColorAt(f,v.setHex(h[(f*3+y)%h.length])),b+=w+.005+(f%9===0?.12:0),f++}}m.count=f,a.add(m),a.position.set(t,0,e),n.ry&&(a.rotation.y=n.ry),i.room.group.add(a);const g=n.ry?o/2:s/2,x=n.ry?s/2:o/2;return i.collider(t-g,e-x,t+g,e+x),a}function w1(i,t,e,n={}){const s=n.w||2.8,r=new ce,o=be.velvet(n.col??16777215);be.wood();const l=be.gold();Pt(r,s,.45,1,0,.45,0,o),Pt(r,s,1.1,.25,0,.95,-.4,o);for(const a of[-1,1]){Pt(r,.25,.75,1,a*(s/2-.12),.6,0,o);const c=new _t(new _e(.16,.16,1,10),o);c.rotation.x=Math.PI/2,c.position.set(a*(s/2-.12),1,0),r.add(c)}for(const a of[-1,1])for(const c of[-1,1]){const h=new _t(new _e(.05,.03,.25,6),l);h.position.set(a*(s/2-.15),.12,c*.38),r.add(h)}for(let a=0;a<Math.floor(s/.9);a++)Pt(r,.8,.12,.9,-s/2+.6+a*.85,.72,.03,o);if(Pt(r,s,.05,.05,0,1.5,-.4,l),r.position.set(t,0,e),n.ry&&(r.rotation.y=n.ry),i.room.group.add(r),n.solid!==!1){const a=n.ry?.5:s/2,c=n.ry?s/2:.5;i.collider(t-a,e-c,t+a,e+c)}return r}function E1(i,t,e,n={}){const s=new ce,r=be.velvet(n.col??16777215),o=be.gold();Pt(s,1,.4,.9,0,.45,0,r),Pt(s,1,1,.2,0,.95,-.35,r);for(const l of[-1,1])Pt(s,.18,.55,.9,l*.48,.65,0,r);Pt(s,1.1,.06,.08,0,1.47,-.35,o);for(const l of[-1,1])for(const a of[-1,1]){const c=new _t(new _e(.04,.03,.26,6),o);c.position.set(l*.4,.13,a*.35),s.add(c)}return s.position.set(t,0,e),s.rotation.y=n.ry||0,i.room.group.add(s),i.collider(t-.5,e-.45,t+.5,e+.45),s}function T1(i,t,e,n={}){const s=new ce,r=be.wood(),o=mn(16,32,l=>{l.fillStyle=n.col||"#c8a888",l.fillRect(0,0,16,32),l.fillStyle="rgba(120,40,40,.45)";for(let a=0;a<7;a++)l.fillRect(3+a*5%9,3+a*4,4,2),l.fillRect(5+a*3%7,4+a*4,1,4)},"scr"+(n.col||""));for(let l=0;l<3;l++){const a=new ce;a.position.set((l-1)*.72,0,l%2*.22),a.rotation.y=(l-1)*.35,Pt(a,.7,2.6,.05,0,1.4,0,Zt({map:o})),Pt(a,.76,.08,.08,0,2.72,0,r),Pt(a,.76,.08,.08,0,.08,0,r);for(const c of[-1,1])Pt(a,.06,2.72,.08,c*.36,1.36,0,r);s.add(a)}return s.position.set(t,0,e),s.rotation.y=n.ry||0,i.room.group.add(s),i.collider(t-1.1,e-.4,t+1.1,e+.4),s}function A1(i,t,e,n=[3091002,12852794]){const s=new ce,r=Zt({color:2759700}),o=new _t(new _e(.05,.06,3,8),r);o.position.y=1.5,s.add(o);const l=new _t(new _e(.4,.45,.08,12),r);l.position.y=.04,s.add(l),n.forEach((h,u)=>{const p=u*2.1,m=new _t(new _e(.18,.32,1.6,8,1,!0),Zt({color:h,side:Fe}));m.position.set(Math.cos(p)*.22,2.05,Math.sin(p)*.22),s.add(m)});const a=new _t(new _e(.22,.22,.25,12),Zt({color:1710622}));a.position.y=3.05,s.add(a);const c=new _t(new _e(.38,.38,.03,14),Zt({color:1710622}));return c.position.y=2.93,s.add(c),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-.35,e-.35,t+.35,e+.35),s}function C1(i,t,e,n=0){const s=new ce,r=be.wood(),o=be.gold();be.velvet(),Pt(s,3,1.2,1.4,0,.6,0,r),Pt(s,3.2,.1,1.6,0,1.25,.05,o),Pt(s,3,1.8,.12,0,2.2,-.6,r);for(const h of[-1,1])Pt(s,.15,1.8,1.4,h*1.42,2.2,0,r);Pt(s,3.4,.3,1.7,0,3.25,0,r),Pt(s,3.5,.08,1.8,0,3.42,0,o);const l=new ce;for(let h=0;h<9;h++)Pt(l,.03,1.4,.03,-1.2+h*.3,2,.65,o,!1);s.add(l),Pt(s,.9,.5,.04,0,1.55,.67,Zt({color:1707530}));const a=new _t(new De(2.6,.5),Zt({map:mn(64,12,h=>{h.fillStyle="#5a0c18",h.fillRect(0,0,64,12),hs(h,"К А С С А",32,2,{size:8,col:"#f0d478",align:"center"})},"kassa3d")}));a.position.set(0,3.25,.87),s.add(a);const c=new _t(new si(.1,8,6,0,Math.PI*2,0,Math.PI/2),o);return c.position.set(.9,1.3,.4),s.add(c),s.position.set(t,0,e),s.rotation.y=n,i.room.group.add(s),i.collider(t-1.6,e-.8,t+1.6,e+.8),s}function R1(i,t,e,n=6){const s=new ce,r=be.wood(),o=be.gold();Pt(s,n,1.15,.7,0,.58,.9,r),Pt(s,n+.2,.08,.9,0,1.2,.9,o);for(const c of[-.4,-1.3]){Pt(s,n-.4,.05,.05,0,2.6,c,o,!1);const h=Math.floor((n-.6)/.32),u=new il(new je(.22,1.5,.55),Zt({color:16777215}),h),p=new ee,m=new Vt,d=[2763314,5913130,3820122,6957610,4868666,1976862,5921370,8018490];for(let v=0;v<h;v++)p.makeTranslation(-n/2+.45+v*.32,1.85-v%3*.08,c),u.setMatrixAt(v,p),u.setColorAt(v,m.setHex(d[(v*5+(c<-1?3:0))%d.length]));s.add(u)}const l=new _t(new De(n-.6,.6),Zt({map:mn(64,8,c=>{c.fillStyle="#3a2414",c.fillRect(0,0,64,8);for(let h=0;h<16;h++)c.fillStyle="#d4ae48",c.fillRect(2+h*4,2,2,4)},"tags"),transparent:!0}));l.position.set(0,3.2,-1.6),s.add(l);const a=new _t(new De(2.4,.45),Zt({map:mn(64,12,c=>{c.fillStyle="#2a1408",c.fillRect(0,0,64,12),hs(c,"ГАРДЕРОБ",32,2,{size:8,col:"#f0d478",align:"center"})},"gardsign")}));return a.position.set(0,1.62,1.27),a.rotation.x=-.2,s.add(a),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e-1.8,t+n/2,e+1.25),s}function P1(i,t,e,n=7){const s=new ce,r=be.wood(),o=be.gold();Pt(s,n,1.2,.9,0,.6,1.1,r),Pt(s,n+.2,.1,1.1,0,1.25,1.1,Zt({map:Oe("stone"),color:14207160}));const l=new _t(new _e(.04,.04,n,6),o);l.rotation.z=Math.PI/2,l.position.set(0,.25,1.62),s.add(l);for(let d=0;d<3;d++)Pt(s,n-.6,.06,.4,0,1.6+d*.7,-.9,r);const a=Math.floor((n-.8)/.22)*3,c=new il(new _e(.06,.07,.42,6),Zt({color:16777215,transparent:!0,opacity:.9}),a),h=new ee,u=new Vt,p=[2779706,9054762,14207120,3816042,11565610,15261904];for(let d=0;d<a;d++){const v=d%3,f=Math.floor(d/3);h.makeTranslation(-n/2+.5+f*.22,1.85+v*.7,-.9),c.setMatrixAt(d,h),c.setColorAt(d,u.setHex(p[d*7%p.length]))}s.add(c);const m=new _t(new De(n-.8,2.2),new Zh({color:3811876,metalness:.8,roughness:.2}));return m.position.set(0,2.5,-1.12),s.add(m),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e+.6,t+n/2,e+1.6),i.collider(t-n/2,e-1.2,t+n/2,e-.6),s}function L1(i,t,e){const n=new ce,s=be.gold(),r=new _t(new _e(.55,.55,.06,16),Zt({map:Oe("stone"),color:15260880}));r.position.y=1,n.add(r);const o=new _t(new _e(.05,.05,1,8),s);o.position.y=.5,n.add(o);const l=new _t(new _e(.3,.35,.05,12),s);l.position.y=.03,n.add(l);const a=new _t(new _e(.06,.05,.1,8),Zt({color:16052456}));a.position.set(.15,1.08,.1),n.add(a);const c=new _t(new _e(.05,.02,.2,8),Zt({color:15266040,transparent:!0,opacity:.6}));c.position.set(-.2,1.13,-.05),n.add(c);for(const h of[0,Math.PI]){const u=new ce;u.position.set(Math.cos(h)*.85,0,Math.sin(h)*.85),u.rotation.y=-h+Math.PI/2,Pt(u,.5,.06,.5,0,.6,0,be.velvet()),Pt(u,.5,.6,.05,0,.9,-.24,s);for(const p of[-1,1])for(const m of[-1,1])Pt(u,.04,.6,.04,p*.22,.3,m*.22,s);n.add(u)}return n.position.set(t,0,e),i.room.group.add(n),i.collider(t-1.1,e-.6,t+1.1,e+.6),n}function D1(i,t,e,n={}){const s=new ce,r=Zt({map:Oe("white"),color:15788256});Pt(s,1.1,1.2,1.1,0,.6,0,Zt({map:Oe("stone"),color:13156536})),Pt(s,1.3,.15,1.3,0,1.25,0,r);const o=new _t(new _e(.22,.42,1.8,10),r);o.position.y=2.2,s.add(o);const l=new _t(new si(.2,10,8),r);l.position.y=3.3,s.add(l);const a=new _t(new _e(.06,.07,.9,6),r);if(a.position.set(.3,2.9,.1),a.rotation.z=-.9,s.add(a),n.pose==="mask"){const c=new _t(new Hs(.16,10),r);c.position.set(.65,3.25,.15),s.add(c)}return s.position.set(t,0,e),i.room.group.add(s),i.collider(t-.6,e-.6,t+.6,e+.6),s}function I1(i,t,e){const n=new ce,s=new _t(new _e(.4,.3,.8,12),Zt({map:Oe("gold")}));s.position.y=.4,n.add(s);const r=new _t(new _e(.06,.09,1.6,6),Zt({color:6965802}));r.position.y=1.6,n.add(r);const o=Zt({color:3828282,side:Fe});for(let l=0;l<8;l++){const a=new _t(new De(.35,1.4),o);a.position.set(0,2.4,0),a.rotation.set(.9,l*.8,0),a.translateY(.6),n.add(a)}return n.position.set(t,0,e),i.room.group.add(n),i.collider(t-.4,e-.4,t+.4,e+.4),n}function U1(i,t,e,n=3.2){const s=new ce,r=Zt({map:Oe("darkwood"),color:13672560}),o=be.gold();Pt(s,n,.12,1.5,0,1.12,0,r),Pt(s,n-.6,.02,1.1,0,1.19,0,Zt({color:3035192}));for(const m of[-1,1]){Pt(s,.9,1.06,1.4,m*(n/2-.5),.53,0,r);for(let d=0;d<3;d++){Pt(s,.75,.28,.03,m*(n/2-.5),.2+d*.33,.71,r);const v=new _t(new si(.035,6,4),o);v.position.set(m*(n/2-.5),.2+d*.33,.75),s.add(v)}}Pt(s,n-1.8,.5,.04,0,.8,-.65,r);const l=new ce;l.position.set(n/2-.4,1.18,-.35);const a=new _t(new _e(.03,.12,.5,8),o);a.position.y=.25,l.add(a);const c=new _t(new _e(.12,.28,.25,12,1,!0),Zt({color:3041864,emissive:666132,side:Fe}));c.position.y=.55,l.add(c),s.add(l);const h=Zt({color:15787728});for(let m=0;m<9;m++){const d=new _t(new je(.42,.012,.56),h);d.position.set(-n/2+.5+m%3*.55,1.2+Math.floor(m/3)*.02+m%4*.012,-.1+m*7%5*.06),d.rotation.y=(m*13%9-4)*.08,s.add(d)}const u=new _t(new _e(.06,.07,.1,8),Zt({color:1710634}));u.position.set(.2,1.24,-.35),s.add(u);const p=new _t(new De(.06,.45),Zt({color:16052456,side:Fe}));return p.position.set(.25,1.45,-.35),p.rotation.z=-.4,s.add(p),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e-.75,t+n/2,e+.75),i.light(t+n/2-.4,1.6,e,16769184,5,5),s}function N1(i,t,e,n,s,r=0,o={}){const l=mn(64,44,a=>{a.fillStyle="#5a4029",a.fillRect(0,0,64,44),a.fillStyle="#b08a5a",a.fillRect(2,2,60,40);for(let h=0;h<120;h++)a.fillStyle="rgba(90,60,30,.35)",a.fillRect((h*37+r)%60+2,h*23%40+2,1,1);[["#f4ecd4",0],["#fff8a0",1],["#f8d0d8",2],["#d8f0f8",3],["#ffffff",4],["#f4ecd4",5]].forEach(([h,u],p)=>{const m=4+p%3*20+(r+p)%3,d=4+Math.floor(p/3)*19+(r*3+p)%3;a.fillStyle=h,a.fillRect(m,d,16,15),a.fillStyle="#3a2a5a";for(let v=0;v<4;v++)a.fillRect(m+2,d+4+v*3,8+(p+v+r)%5,1);a.fillStyle=["#c41e3a","#2a6ad0","#2a8a3a"][p%3],a.fillRect(m+7,d+1,2,2),p===4&&(a.fillStyle="#6a5a4a",a.fillRect(m+2,d+3,12,9),a.fillStyle="#c8b8a0",a.fillRect(m+6,d+5,4,5))}),a.strokeStyle="#c41e3a",a.beginPath(),a.moveTo(12,6),a.lineTo(32,26),a.lineTo(52,8),a.stroke()},"cork"+r);return i.decal(l,{x:t,y:e,w:n,h:s,z:o.z,wall:o.wall,at:o.at})}const qi="#d9a878",za="#c08458",xe="#f0cdb0",Uv="#eac4a4",Nc="#d9a77e",Nv=[{id:"varya",name:"Варя",color:"#5fd0c8",pitch:520,skin:qi,hair:"#5a341f",style:"bob",eyes:"#5b3a1e",h:31,build:"thin",top:"#c41e3a",bottom:"#2a2430",shoes:"#1c1620",brows:"soft",acc:["offshoulder"],role:"Режиссёрка",bio:"Завтра ей восемнадцать. На ней красный лонгслив без плеч: Матвей подарил на прошлый день рождения. Умеет собрать людей вместе, и очень не любит, когда что-то идёт не по плану."},{id:"alla",name:"Алла Ева",color:"#ff5d6c",pitch:500,skin:qi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#a3122a",bottom:"#8a0f24",skirt:"long",trim:"#e8c36a",shoes:"#3a0a12",acc:["pearls"],brows:"arch",lips:"#b3122e",shadow:"#6b2a55",role:"Прима",bio:"Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много."},{id:"kukolnik",name:"Кукольник",color:"#d8b56a",pitch:180,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:38,build:"mid",top:"#111",bottom:"#111",role:"Художественный руководитель",bio:"Его никто не видел. Он оставляет письма, пометки на полях и распоряжения, всегда вовремя."},{id:"polina",name:"Полина",color:"#c9a7ff",pitch:610,skin:xe,hair:"#f0d98a",style:"fluffy",eyes:"#3f9b57",h:32,build:"thin",top:"#8f7fc4",bottom:"#3b4a6b",shoes:"#eeeeee",brows:"soft",role:"Подруга",bio:"Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают."},{id:"ruben",name:"Рубен",color:"#ffb057",pitch:240,skin:za,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:40,build:"strong",top:"#26262e",bottom:"#2d3440",trim:"#ff9a3c",shoes:"#111",brows:"strict",role:"Друг",bio:"Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать."},{id:"matvey",name:"Матвей",color:"#ff8fd0",pitch:400,skin:Uv,hair:"#6a4326",style:"curlyShort",eyes:"#5b3a1e",h:37,build:"thin",top:"#f2c230",bottom:"#3a62c9",trim:"#e84a6f",shoes:"#e84a6f",acc:["freckles","scarf","bracelets","pins"],brows:"soft",role:"Друг",bio:"Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет."},{id:"erika",name:"Эрика",color:"#9fc3e8",pitch:430,skin:xe,hair:"#6b452a",style:"ponytail",eyes:"#5b3a1e",h:34,build:"mid",top:"#8a7a5c",bottom:"#2b2f3a",shoes:"#22201f",brows:"soft",role:"Подруга",bio:"Спокойная. Сначала слушает, потом задаёт один вопрос, обычно самый неудобный."},{id:"liza",name:"Лиза",color:"#ffe27a",pitch:640,skin:xe,hair:"#8c6a45",style:"long",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#7ec4a4",bottom:"#f3ead8",skirt:"short",shoes:"#8a5a3a",brows:"soft",role:"Подруга",bio:"Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит, кем."},{id:"liza_long",name:"Лиза",color:"#ffe27a",pitch:640,skin:xe,hair:"#8c6a45",style:"rapunzel",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#c9a0dc",bottom:"#b58ad0",skirt:"long",shoes:"#8a5a3a",brows:"soft"},{id:"angelina",name:"Ангелина",color:"#ff7ab8",pitch:470,skin:Nc,hair:"#0f0d12",style:"longStyled",eyes:"#2a1a14",h:37,build:"thin",top:"#16141c",bottom:"#5a1f3d",skirt:"short",trim:"#d9d9e8",shoes:"#111",acc:["earrings"],brows:"arch",lips:"#b0405a",role:"Подруга",bio:"Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным,, и это не обсуждается."},{id:"artemiy",name:"Артемий",color:"#9ab0c8",pitch:260,skin:xe,hair:"#9a7450",style:"short",eyes:"#2a1a14",h:39,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",shoes:"#111",brows:"strict",role:"Одноклассник Матвея",bio:"Выглядит так, будто сейчас сделает замечание. На деле подкармливает школьного кота."},{id:"vasilisa",name:"Василиса",color:"#ffb48a",pitch:480,skin:xe,hair:"#c98a52",style:"long",eyes:"#5b6b4a",h:37,build:"thin",top:"#3d5a4a",bottom:"#2c2c34",acc:["camera"],brows:"soft",role:"Актриса труппы"},{id:"dana",name:"Дана",color:"#e8a0ff",pitch:500,skin:qi,hair:"#2a1a14",style:"long",eyes:"#5b3a1e",h:33,build:"thin",top:"#c23a6a",bottom:"#18161c",skirt:"short",trim:"#f2c230",acc:["earrings"],brows:"arch",lips:"#a8324a",role:"Актриса труппы"},{id:"nina",name:"Нина",color:"#b8c0ff",pitch:540,skin:xe,hair:"#121016",style:"long",bangs:!0,eyes:"#3b2a22",h:33,build:"thin",top:"#4a4a6a",bottom:"#23232c",brows:"soft",role:"Актриса труппы"},{id:"anya",name:"Аня",color:"#ffd0a0",pitch:580,skin:xe,hair:"#7a6248",style:"twin",eyes:"#6a5238",h:33,build:"mid",top:"#d88a4a",bottom:"#4a5a7a",skirt:"short",brows:"soft",role:"Актриса труппы"},{id:"olya",name:"Оля",color:"#a0e0d0",pitch:520,skin:xe,hair:"#2a1e1a",style:"twin",bangs:!0,eyes:"#3b2a22",h:31,build:"mid",top:"#2f4a5a",bottom:"#2a2a33",brows:"strict",role:"Актриса труппы"},{id:"natasha",name:"Мама Наташа",color:"#ffd6c0",pitch:420,skin:xe,hair:"#9a7a58",style:"bob",eyes:"#2a1a14",h:37,build:"mid",top:"#7a9ab8",bottom:"#33384a",skirt:"long",brows:"soft"},{id:"sasha",name:"Саша",color:"#c0d6e8",pitch:220,skin:xe,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:39,build:"mid",top:"#4a5a4a",bottom:"#2c2c34",brows:"soft"},{id:"maxim",name:"Папа Максим",color:"#ffc070",pitch:250,skin:za,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:33,build:"mid",top:"#c2452d",bottom:"#2d3440",brows:"arch"},{id:"nastya",name:"Настя",color:"#d8c8e8",pitch:440,skin:xe,hair:"#9a7a58",style:"long",eyes:"#5b3a1e",h:37,build:"thin",top:"#b8a8c8",bottom:"#4a4458",skirt:"long",brows:"soft"},{id:"vasya",name:"Вася",color:"#a8e0ff",pitch:620,skin:xe,hair:"#6a4630",style:"bob",eyes:"#5b3a1e",h:30,build:"thin",top:"#e8884a",bottom:"#3a4a6a",brows:"soft"},{id:"sofa",name:"Софа",color:"#ffc0e0",pitch:540,skin:xe,hair:"#a88a5a",style:"longStyled",eyes:"#5a6a7a",h:33,build:"thin",top:"#e8b0c8",bottom:"#f0e8e8",skirt:"short",acc:["earrings"],brows:"arch",lips:"#c84a6a",shadow:"#b86a9a"},{id:"katya",name:"Катя",color:"#ffb090",pitch:560,skin:xe,hair:"#c8602a",style:"bobLong",eyes:"#5a7a5a",h:37,build:"big",top:"#6a9a7a",bottom:"#4a4a5a",brows:"soft"},{id:"owner",name:"Хозяин",color:"#b0b0b0",pitch:150,skin:"#e8e4d8",hair:"#111",style:"none",eyes:"#111",h:40,build:"strong",top:"#3a2a22",bottom:"#1c1614",acc:["maskface","hat","coat"],brows:"strict"},{id:"nol",name:"Ноль",color:"#7af0ff",pitch:560,skin:xe,hair:"#40e0d0",style:"short",eyes:"#222",h:33,build:"thin",top:"#22303a",bottom:"#151a22",trim:"#40e0d0",acc:["visor"],brows:"soft"},{id:"kasseta",name:"Кассета",color:"#ff7ad0",pitch:330,skin:za,hair:"#ff4fa0",style:"bob",eyes:"#222",h:36,build:"mid",top:"#5a2a6a",bottom:"#1a1a22",trim:"#ff4fa0",acc:["headphones"],brows:"arch"},{id:"guard",name:"Охранник",color:"#ff5050",pitch:140,skin:"#8a94a0",hair:"#444",style:"none",eyes:"#f33",h:38,build:"strong",top:"#39424e",bottom:"#252a33",trim:"#ff3030",acc:["visor"],brows:"strict"},{id:"teacher",name:"Руководительница драмкружка",color:"#ff5d6c",pitch:500,skin:qi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#44375a",bottom:"#2a2238",skirt:"long",acc:["glasses"],brows:"arch",lips:"#b3122e"},{id:"barman",name:"Сол, бармен",color:"#cccccc",pitch:200,skin:"#b8b8b8",hair:"#333",style:"short",eyes:"#222",h:38,build:"big",top:"#e8e8e8",bottom:"#222",trim:"#111",brows:"strict"},{id:"singer",name:"Мэй, певица",color:"#e8e8e8",pitch:460,skin:"#d8d8d8",hair:"#1a1a1a",style:"longStyled",eyes:"#222",h:36,build:"thin",top:"#bbbbbb",bottom:"#aaaaaa",skirt:"long",acc:["earrings"],brows:"arch",lips:"#555"},{id:"director",name:"Грей, режиссёр",color:"#b0b0b0",pitch:230,skin:"#c8c8c8",hair:"#888",style:"short",eyes:"#222",h:37,build:"thin",top:"#555",bottom:"#333",acc:["glasses","scarf"],brows:"strict"},{id:"collector",name:"Аркадий Вейс",color:"#d0d0d0",pitch:170,skin:"#cfcfcf",hair:"#ddd",style:"short",eyes:"#222",h:38,build:"big",top:"#2a2a2a",bottom:"#1c1c1c",trim:"#999",brows:"strict"},{id:"lydia",name:"Лидия Вронская",color:"#ffffff",pitch:480,skin:"#e0e0e0",hair:"#2a2a2a",style:"bob",eyes:"#222",h:34,build:"thin",top:"#777",bottom:"#444",acc:["hat"],brows:"soft",lips:"#555"},{id:"cashier",name:"Кассир",color:"#bbbbbb",pitch:300,skin:"#c0c0c0",hair:"#555",style:"short",eyes:"#222",h:35,build:"mid",top:"#444",bottom:"#333",acc:["hat"],brows:"soft"},{id:"fairy",name:"Фея-крёстная",color:"#c8a0ff",pitch:600,skin:xe,hair:"#e8e0f0",style:"bun",eyes:"#6a5a9a",h:33,build:"big",top:"#b89ae0",bottom:"#9a7ac8",skirt:"long",acc:["wings","glasses"],brows:"arch"},{id:"prince",name:"Принц",color:"#8ab8ff",pitch:280,skin:xe,hair:"#e0b860",style:"bob",eyes:"#3a6ab0",h:39,build:"mid",top:"#3a6ab0",bottom:"#f0f0f0",trim:"#e8c36a",acc:["crown","cape"],brows:"soft"},{id:"narrator",name:"Рассказчик",color:"#e8d8a8",pitch:190,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:30,build:"mid",top:"#000",bottom:"#000"},{id:"glyants",name:"Директор Глянц",color:"#ff9ad8",pitch:210,skin:xe,hair:"#e8e8f0",style:"short",eyes:"#3a3a4a",h:38,build:"thin",top:"#f0f0f8",bottom:"#f0f0f8",trim:"#ff4fa0",acc:["glasses"],brows:"arch"},{id:"trainer",name:"Тренер Ми",color:"#a0f0c0",pitch:520,skin:Nc,hair:"#222",style:"ponytail",eyes:"#222",h:34,build:"mid",top:"#30c090",bottom:"#222",brows:"strict"},{id:"stylist",name:"Ассистентка",color:"#ff5d6c",pitch:500,skin:qi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#f0f0f8",bottom:"#ff4fa0",skirt:"short",acc:["pearls","visor"],brows:"arch",lips:"#b3122e"},{id:"hostess",name:"Леди Фортуна",color:"#ff5d6c",pitch:500,skin:qi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#e8c36a",bottom:"#c9a040",skirt:"long",acc:["pearls","maskhalf"],brows:"arch",lips:"#b3122e"},{id:"student",name:"Школьник",color:"#cccccc",pitch:400,skin:xe,hair:"#3a2a22",style:"short",eyes:"#333",h:34,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",brows:"soft"},{id:"student2",name:"Школьница",color:"#cccccc",pitch:560,skin:xe,hair:"#5a3a2a",style:"twin",eyes:"#333",h:32,build:"thin",top:"#2c3550",bottom:"#8a2a3a",skirt:"short",trim:"#f0f0f0",brows:"soft"},{id:"dancer",name:"Трейни",color:"#cccccc",pitch:500,skin:xe,hair:"#ffb0d8",style:"bob",eyes:"#333",h:33,build:"thin",top:"#f0f0f8",bottom:"#ff9ad8",skirt:"short",brows:"soft"},{id:"courtier",name:"Придворный",color:"#cccccc",pitch:300,skin:xe,hair:"#e8e8e8",style:"bun",eyes:"#333",h:35,build:"mid",top:"#6a2a3a",bottom:"#3a1a22",trim:"#e8c36a",brows:"soft"}],pn={};for(const i of Nv)pn[i.id]=i;function cn(i,t,e){return pn[t]||(pn[t]={...pn[i],...e,id:t}),pn[t]}cn("varya","varya_noir",{top:"#6a6a6a",bottom:"#2a2a2a",acc:["hat"]});cn("varya","varya_pjm",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});cn("erika","erika_noir",{top:"#9a9a8a",bottom:"#2a2a2a",acc:["hat","coat"]});cn("ruben","ruben_heist",{top:"#16161c",bottom:"#1c2028",trim:"#40e0d0",acc:["visor"]});cn("matvey","matvey_school",{top:"#2c3550",bottom:"#2a2a33",trim:"#f2c230",acc:["freckles","scarf","bracelets","pins"]});cn("angelina","angelina_idol",{top:"#f0f0f8",bottom:"#ff9ad8",trim:"#ff4fa0"});cn("angelina","angelina_own",{top:"#1a1420",bottom:"#7a1f3d",trim:"#e8c36a"});cn("alla","queen",{name:"Королева",top:"#8a0f24",bottom:"#6a0a1a",trim:"#e8c36a",acc:["pearls","crown","cape"]});cn("varya","girl",{name:"Молодая Девушка",top:"#f3ead8",bottom:"#e8dcc0",skirt:"long",trim:"#5fd0c8",acc:[]});cn("varya","varya_queen",{name:"Варя",top:"#8a0f24",bottom:"#6a0a1a",skirt:"long",trim:"#e8c36a",acc:[]});cn("liza","liza_short",{style:"bob"});cn("polina","polina_coat",{top:"#e8c230",bottom:"#3b4a6b"});cn("varya","varya_pj",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});const Vs=32,us=48,Ds=["idle0","idle1","walk0","walk1","walk2","walk3","arms","bow","fear","sit","point","dance1","dance2","lie"],kc=["f","b","s"],Va=[22,17,20];function me(i,t){const e=parseInt(i.slice(1),16);let n=e>>16,s=e>>8&255,r=e&255;return t<0?(n*=1+t,s*=1+t,r*=1+t*.8):(n+=(255-n)*t,s+=(255-s)*t,r+=(255-r)*t),`rgb(${n|0},${s|0},${r|0})`}function Y(i,t,e,n,s,r){n<=0||s<=0||(i.fillStyle=r,i.fillRect(Math.round(t),Math.round(e),Math.round(n),Math.round(s)))}function Ee(i,t,e,n,s,r){Y(i,t,e,n,s,r),n>=3&&(Y(i,t,e,1,s,me(r,.16)),Y(i,t+n-1,e,1,s,me(r,-.22))),s>=4&&Y(i,t,e+s-1,n,1,me(r,-.25))}function kv(i,t,e,n,s,r){i.save(),i.translate(t,e);const o=16,l=47,a=n.h,c=n.build==="thin"?7:n.build==="mid"?8:(n.build==="strong",11),h=n.build==="thin"?2:3;let u=Math.round(a*.37),p=Math.round(a*.33);const m=9,d=n.acc||[],v=s.startsWith("walk")?parseInt(s[4]):-1;let f=s==="idle1"?1:v===1||v===3?-1:0,g=0,x="down",y=!1;(s==="arms"||s==="dance1")&&(x="up"),s==="dance2"&&(x="side",f=-1),s==="dance1"&&(f=1),s==="bow"&&(g=3,f=3,x="side"),s==="fear"&&(x="face",f=1),s==="point"&&(x="point"),s==="sit"&&(y=!0,u=Math.round(u*.45)),s==="lie"&&(i.translate(o,l-4),i.rotate(-Math.PI/2),i.translate(-o-10,-l+12));const b=l-u,R=b-p+f,w=R-m+(g?1:0),A=r==="s",U=r==="b",I=o-4+(A?1:0)+g,_=n.hair,S=me(_,-.3),V=me(_,.22),B=n.style,k={curls:15,long:16,longStyled:17,glam:19,rapunzel:a-9,bob:9,bobLong:11,curlyMid:10,fluffy:7,twin:6,ponytail:6,short:4,curlyShort:5,bun:5}[B]||0,N=B==="glam"||B==="curls"||B==="fluffy"||B==="curlyMid"||B==="rapunzel"?1:0;if(!A&&!U&&k>8&&(Ee(i,I-1-N,w+2,10+N*2,Math.min(k,a-2),_),(B==="glam"||B==="rapunzel")&&(Y(i,I-2-N,w+8,1,k-10,S),Y(i,I+9+N,w+10,1,k-12,S)),B==="curls"))for(let it=0;it<3;it++)Y(i,I-2-it%2,w+6+it*3,2,2,it%2?V:_),Y(i,I+9+it%2,w+6+it*3,2,2,it%2?_:V);if(A&&k>8&&(Y(i,I-2-N,w+2,5+N,k,_),Y(i,I-2-N,w+2+k-1,5+N,1,S)),d.includes("cape")){const it=c+4;Ee(i,o-it/2+g,R+1,it,p+u-3,me(n.trim||"#a22",-.1))}d.includes("wings")&&!A&&(Y(i,o-c/2-5,R,5,7,"rgba(230,220,255,0.85)"),Y(i,o+c/2,R,5,7,"rgba(230,220,255,0.85)"),Y(i,o-c/2-4,R+7,3,3,"rgba(210,200,245,0.8)"),Y(i,o+c/2+1,R+7,3,3,"rgba(210,200,245,0.8)"));const J=n.skirt?n.skirt==="long"?n.bottom:n.skin:n.bottom,q=n.shoes||"#222",lt=A?0:1;let mt=0,gt=0,Xt=0,Kt=0;if(v===0&&(mt=-2,Xt=A?3:0,Kt=A?-2:0),v===2&&(gt=-2,Kt=A?3:0,Xt=A?-2:0),A?(Ee(i,o-h+Kt,b,h,u+gt-1,me(J,-.15)),Y(i,o-h+Kt,l-1+gt,h+1,1,q),Ee(i,o-1+Xt,b,h,u+mt-1,J),Y(i,o-1+Xt,l-1+mt,h+1,1,q)):y?(Ee(i,o-h-lt,b,h,u,J),Ee(i,o+lt,b,h,u,J),Y(i,o-h-lt,l-1,h,1,q),Y(i,o+lt,l-1,h,1,q)):(Ee(i,o-h-lt+0,b,h,u+mt-1,J),Ee(i,o+lt,b,h,u+gt-1,J),Y(i,o-h-lt,l-1+mt,h,1,q),Y(i,o+lt,l-1+gt,h,1,q)),n.skirt){const it=n.skirt==="long"?u-2:Math.round(u*.45);for(let At=0;At<it;At++){const Z=(A?c-2:c)+Math.min(3,Math.floor(At/3)+1)*(n.skirt==="long",1);Y(i,o-Z/2+g*(1-At/it),b-1+At,Z,1,At===it-1?me(n.bottom,-.25):n.bottom)}Y(i,o-c/2+g,b-1,1,it,me(n.bottom,.15))}const X=A?Math.max(5,c-3):c,et=o-X/2+g;Ee(i,et,R,X,p+(n.skirt?0:1),n.top),d.includes("coat")&&Ee(i,et-1,R,X+2,p+6,n.top),d.includes("offshoulder")&&!U&&(Y(i,et,R,X,2,n.skin),Y(i,et,R+2,X,1,me(n.top,-.2))),n.trim&&!U&&(Y(i,o-1+g,R,A?1:2,n.skirt?2:1,n.trim),n.build==="strong"&&Y(i,et+1,R+p-2,X-2,1,n.trim)),d.includes("scarf")&&(Y(i,et,R,X,2,n.trim||"#e84a6f"),U||Y(i,et+1,R+2,2,4,n.trim||"#e84a6f")),d.includes("pins")&&!U&&!A&&(Y(i,et+X-3,R+3,1,1,"#fff"),Y(i,et+X-2,R+5,1,1,"#4ae0c0")),d.includes("camera")&&!U&&(Y(i,o-2+g,R+4,4,3,"#222"),Y(i,o-1+g,R+5,2,1,"#8ac"),Y(i,et+1,R,1,4,"#333"),Y(i,et+X-2,R,1,4,"#333"));const vt=p-1,ht=v===0?1:v===2?-1:0,Ft=n.top,Ot=(it,At,Z)=>{At==="up"?(Ee(i,it,R-vt+3,2,vt-1,Ft),Y(i,it,R-vt+1,2,2,n.skin)):At==="side"?(Y(i,it<o?it-3:it+1,R+1,4,2,Ft),Y(i,it<o?it-5:it+5,R+1,2,2,n.skin)):At==="face"?(Ee(i,it,R+1,2,3,Ft),Y(i,it<o?it+1:it-1,R-2,2,3,n.skin)):(Ee(i,it,R+1+Z,2,vt-2,Ft),Y(i,it,R+vt-1+Z,2,2,n.skin),d.includes("bracelets")&&Y(i,it,R+vt-2+Z,2,1,"#4ae0c0"))};if(A?Ot(o-1+g+(v>=0?ht*2:0),x==="point"?"side":x,0):(Ot(et-2,x==="point"?"down":x,ht),Ot(et+X,x==="point"?"side":x,-ht)),Y(i,I+3,w+m-1,2,2,me(n.skin,-.2)),(n.style!=="none"||n.id!=="kukolnik")&&(Y(i,I+1,w,6,1,n.skin),Y(i,I,w+1,8,m-3,n.skin),Y(i,I+1,w+m-2,6,1,n.skin),Y(i,I+7,w+2,1,m-5,me(n.skin,-.15))),!U){const it=w+4,At=me(n.eyes,-.25);A?(Y(i,I+6,it,1,2,At),Y(i,I+8,it+1,1,1,me(n.skin,-.12))):(Y(i,I+1,it,2,2,"#f4efe6"),Y(i,I+5,it,2,2,"#f4efe6"),Y(i,I+2,it,1,2,At),Y(i,I+5,it,1,2,At),n.brows==="strict"&&(Y(i,I+1,it-1,2,1,me(n.hair,-.4)),Y(i,I+5,it-1,2,1,me(n.hair,-.4))),n.lips?Y(i,I+3,w+7,2,1,n.lips):s==="fear"&&Y(i,I+3,w+7,2,1,"#412"),d.includes("freckles")&&(Y(i,I+1,it+2,1,1,me(n.skin,-.25)),Y(i,I+6,it+2,1,1,me(n.skin,-.25))),d.includes("mole")&&Y(i,I+6,it+3,1,1,"#3a1a14"),d.includes("glasses")&&(Y(i,I,it,8,1,"#222"),Y(i,I+1,it+1,2,1,"rgba(180,220,255,0.6)"),Y(i,I+5,it+1,2,1,"rgba(180,220,255,0.6)")),d.includes("visor")&&Y(i,I,it,8,2,n.trim||"#40e0d0"),d.includes("maskface")&&(Y(i,I,w+1,8,7,"#e8e4d8"),Y(i,I+1,it,2,2,"#111"),Y(i,I+5,it,2,2,"#111"),Y(i,I+2,w+7,4,1,"#111"),Y(i,I+1,w+6,1,1,"#111"),Y(i,I+6,w+6,1,1,"#111")),d.includes("maskhalf")&&(Y(i,I,it-1,8,3,"#e8c36a"),Y(i,I+2,it,1,1,"#111"),Y(i,I+5,it,1,1,"#111")))}if(B!=="none"){const it=B==="curlyMid"||B==="curlyShort";if(U)Y(i,I+1,w-1,6,1,_),Ee(i,I-N,w,8+N*2,Math.max(m-2,Math.min(k,a-2)),_),k>9&&Y(i,I+3,w+4,1,k-6,S);else if(A)Y(i,I+1,w-1,6,1,_),Y(i,I-1-N,w,6+N,Math.min(Math.max(k,4),8),_),Y(i,I+5,w,3,n.bangs?3:2,_),Y(i,I+1,w,3,1,V);else{Y(i,I+1,w-1,6,1,_),Y(i,I-N,w,8+N*2,n.bangs?4:2,_),Y(i,I+1,w,3,1,V);const At=Math.min(k,B==="ponytail"||B==="twin"||B==="short"||B==="bun"?4:k);Y(i,I-1-N,w+1,1+N,At,_),Y(i,I+8,w+1,1+N,At,S),!n.bangs&&(B==="bob"||B==="bobLong"||B==="longStyled"||B==="glam")&&(Y(i,I,w+2,2,2,_),Y(i,I+6,w+2,2,1,_)),B==="fluffy"&&(Y(i,I-2,w+1,1,4,V),Y(i,I+9,w+2,1,3,_),Y(i,I,w-2,7,1,V),Y(i,I+1,w+2,2,1,_),Y(i,I+5,w+2,2,1,_))}if(it){for(let At=0;At<6;At++)Y(i,I-1+At*2-At%2,w-2+At%2,2,2,At%2?_:V);A||(Y(i,I-2,w+2,1,2,_),Y(i,I+9,w+4,1,2,_),B==="curlyMid"&&(Y(i,I-2,w+6,2,2,_),Y(i,I+8,w+7,2,2,S)))}B==="twin"&&(A?Ee(i,I-2,w+2,2,8,_):(Ee(i,I-3,w+2,2,8,_),Ee(i,I+9,w+2,2,8,_),Y(i,I-2,w+2,1,1,"#e84a6f"),Y(i,I+9,w+2,1,1,"#e84a6f"))),B==="ponytail"&&(A?(Ee(i,I-3,w+1,3,3,_),Ee(i,I-4,w+3,2,9,_)):U?Ee(i,I+3,w+2,2,12,S):Y(i,I+8,w-1,2,3,_)),B==="bun"&&Y(i,I+2,w-3,4,2,_),B==="rapunzel"&&!U&&(Y(i,I+8,w+a-12,6,2,_),Y(i,I+12,w+a-11,4,2,S)),(B==="longStyled"||B==="glam")&&Y(i,I+2,w,1,2,V)}d.includes("earrings")&&!U&&!A&&(Y(i,I-1,w+6,1,2,"#f4d060"),Y(i,I+8,w+6,1,2,"#f4d060")),d.includes("pearls")&&!U&&(A||(Y(i,I-1,w+6,1,1,"#f6f0e8"),Y(i,I+8,w+6,1,1,"#f6f0e8")),Y(i,o-2+g,R+1,4,1,"#f6f0e8")),d.includes("hat")&&(Y(i,I-2,w,12,1,"#2a2a2e"),Ee(i,I,w-3,8,3,"#3a3a40"),Y(i,I,w-1,8,1,"#111")),d.includes("crown")&&(Y(i,I+1,w-2,6,2,"#f4d060"),Y(i,I+1,w-4,1,2,"#f4d060"),Y(i,I+3,w-4,2,2,"#f4d060"),Y(i,I+6,w-4,1,2,"#f4d060"),Y(i,I+3,w-2,2,1,"#d02040")),d.includes("headphones")&&(Y(i,I,w-2,8,1,"#222"),Y(i,I-2,w+2,2,4,"#222"),Y(i,I+8,w+2,2,4,"#222")),i.restore()}function Fv(i,t,e){const n=i.getImageData(0,0,t,e),s=n.data,r=new Uint8ClampedArray(s),o=(l,a)=>l>=0&&a>=0&&l<t&&a<e&&r[(a*t+l)*4+3]>40;for(let l=0;l<e;l++)for(let a=0;a<t;a++){if(o(a,l))continue;const c=a%Vs,h=l%us;if(!(c===0||c===Vs-1||h===0||h===us-1)&&(o(a-1,l)||o(a+1,l)||o(a,l-1)||o(a,l+1))){const u=(l*t+a)*4;s[u]=Va[0],s[u+1]=Va[1],s[u+2]=Va[2],s[u+3]=255}}i.putImageData(n,0,0)}const Fc=new Map;function Ov(i){let t=Fc.get(i);if(t)return t;const e=pn[i];if(!e)throw new Error("Нет персонажа: "+i);t=document.createElement("canvas"),t.width=Vs*Ds.length,t.height=us*kc.length;const n=t.getContext("2d",{willReadFrequently:!0});return kc.forEach((s,r)=>Ds.forEach((o,l)=>{const a=l>=6;kv(n,l*Vs,r*us,e,o,a&&s==="b"&&o!=="sit"&&o!=="arms"&&o!=="dance1"&&o!=="dance2"?"f":s)})),Fv(n,t.width,t.height),(i==="kukolnik"||i==="narrator")&&(n.globalCompositeOperation="source-in",n.fillStyle="#0a0808",n.fillRect(0,0,t.width,t.height)),Fc.set(i,t),t}const Oc=new Map;let Ga=null;function Bv(){return Ga||(Ga=mn(32,32,i=>{const t=i.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,32,32)})),Ga}function au(i){const t=i.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,0,.75,.66);t.needsUpdate=!0}class pl{constructor(t,e=t){this.id=e,this.x=0,this.z=0,this.y=0,this.dir="f",this.pose=null,this.moving=!1,this.t=Math.random()*3,this.target=null,this.hidden=!1,this.charId="",this.group=new ce,this.roll=0,this.alpha=1,this.float=0,this.danceBeat=0;const n=new De(Vs/Zn,us/Zn);n.translate(0,us/Zn/2,0),au(n),this.map=null,this.mesh=new _t(n,new Yn({alphaTest:.5,side:Fe,transparent:!1})),this.mesh.castShadow=!0,this.setChar(t),this.shadow=new _t(new De(1.5,.9),new an({map:Bv(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.group.add(this.mesh,this.shadow)}setChar(t){if(this.charId===t)return;this.charId=t;let e=Oc.get(t);e||(e=new Bh(Ov(t)),e.magFilter=e.minFilter=Le,e.generateMipmaps=!1,e.colorSpace=fn,Oc.set(t,e)),this.map&&this.map.dispose(),this.map=e.clone(),this.map.needsUpdate=!0,this.map.repeat.set(1/Ds.length,1/3),this.mesh.material.map=this.map,this.mesh.material.needsUpdate=!0}get def(){return pn[this.charId]}place(t,e,n){return this.x=t,this.z=e,n&&(this.dir=n),this.sync(),this}face(t,e){const n=t-this.x,s=e-this.z;this.dir=Math.abs(n)>Math.abs(s)?n>0?"r":"l":s>0?"f":"b"}walkTo(t,e,n=4){return this.target&&this.target.res(),new Promise(s=>{this.target={x:t,z:e,speed:n,res:s}})}stop(){if(this.target){const t=this.target.res;this.target=null,t()}this.moving=!1}update(t){if(this.t+=t,this.target){const e=this.target.x-this.x,n=this.target.z-this.z,s=Math.hypot(e,n),r=this.target.speed*t;if(s<=r){this.x=this.target.x,this.z=this.target.z;const o=this.target.res;this.target=null,this.moving=!1,o()}else this.x+=e/s*r,this.z+=n/s*r,this.face(this.target.x,this.target.z),this.moving=!0}this.sync()}sync(){let t=this.pose||(this.moving?"walk"+Math.floor(this.t*8)%4:"idle"+Math.floor(this.t*1.6)%2);this.pose==="dance"&&(t=Math.floor(this.danceBeat)%2?"dance1":"dance2");const e=Math.max(0,Ds.indexOf(t)),n=this.dir==="f"?0:this.dir==="b"?1:2,s=Ds.length,r=this.dir==="l";this.map.repeat.x=(r?-1:1)/s,this.map.offset.set((e+(r?1:0))/s,1-(n+1)/3),this.group.position.set(this.x,this.y+this.float,this.z),this.mesh.rotation.z=this.roll,this.group.visible=!this.hidden,this.shadow.visible=this.y+this.float<.6;const o=this.mesh.material;this.alpha<1?(o.transparent=!0,o.opacity=this.alpha,o.alphaTest=.05):o.transparent&&(o.transparent=!1,o.opacity=1,o.alphaTest=.5)}dispose(){this.map.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}class ou{constructor(t,e){this.id=t,this.def=e,this.group=new ce,this.boxes=[],this.inters=[],this.triggers=[],this.actors=[],this.spawns={},this.masked=[],this.updaters=[],this.photos=[],this.guards=[],this.lasers=[],this.occluders=[],this.props=[],this.flick=[],this.named={}}actor(t){return this.actors.find(e=>e.id===t)}inter(t){return this.inters.find(e=>e.id===t)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.userData.own&&n.map.dispose(),n.dispose()}});for(const t of this.actors)t.dispose()}}class lu{constructor(t,e){this.room=t,this.G=e,this.slots={n:[],w:[],e:[]}}overlaps(t,e,n,s,r,o){return this.slots[t].some(l=>l!==o&&e<l.a1-.02&&n>l.a0+.02&&s<l.y1-.02&&r>l.y0+.02)}freeAlong(t,e,n,s,r,o){const l=(t==="n"?this.w:this.d)/2-n-.1;for(let a=0;a<60;a++){const c=(a%2?1:-1)*Math.ceil(a/2)*.2,h=Math.max(-l,Math.min(l,e+c));if(!this.overlaps(t,h-n,h+n,s,r,o))return h}return e}wallSlot(t,e,n,s,r,o={}){const l=n/2,a=s-r/2,c=s+r/2,h=this.slots[t],u=t==="n"?"x":"z";if(o.fixed){const d={a0:e-l,a1:e+l,y0:a,y1:c,fixed:!0,obj:o.obj,axis:u,follow:[]};h.push(d);for(const v of h)if(v!==d&&!v.fixed&&v.a0<d.a1&&v.a1>d.a0&&v.y0<c&&v.y1>a){const f=(v.a0+v.a1)/2,g=(v.a1-v.a0)/2,y=this.freeAlong(t,f,g,v.y0,v.y1,v)-f;v.a0+=y,v.a1+=y;for(const b of[v.obj,...v.follow])b&&(b.position[u]+=y)}return e}const p=this.freeAlong(t,e,l,a,c),m={a0:p-l,a1:p+l,y0:a,y1:c,fixed:!1,obj:o.obj,axis:u,follow:[]};return h.push(m),o.obj&&(o.obj.userData.slot=m),p}get w(){return this.room.def.w}get d(){return this.room.def.d}mat(t,e="plaster"){return t.color&&!t.tex?new Yn({color:t.color,emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1}):new Yn({map:Oe(t.tex||e,t.tint),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1})}texBox(t,e,n,s,r){const o=new je(t,e,n),l=this.mat(s,r);if(l.map){const a=l.map.unit||2,c=o.attributes.uv,h=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let u=0;u<6;u++)for(let p=0;p<4;p++){const m=u*4+p;c.setXY(m,c.getX(m)*h[u][0]/a,c.getY(m)*h[u][1]/a)}}return new _t(o,l)}tag(t,e,n){e.mask&&this.room.masked.push({obj:t,mask:e.mask,box:n}),e.name&&(this.room.named[e.name]=t)}floor(t="floor",e={}){const n=e.apron??(e.d==null&&e.z==null&&!e.y?7:0),s=this.texBox(e.w||this.w,.4,(e.d||this.d)+n,{tex:t,...e});return s.position.set(e.x||0,-.2+(e.y||0),(e.z||0)+n/2),s.receiveShadow=!0,this.room.group.add(s),this.tag(s,e),s}walls(t="plaster",e={}){const n=e.h||5,s=this.w,r=this.d,o=.4,l=(a,c,h,u)=>{const p=this.texBox(a,n,c,{tex:t,...e});return p.position.set(h,n/2,u),p.receiveShadow=!0,this.room.group.add(p),p};if(e.n!==!1&&l(s+o*2,o,0,-r/2-o/2),e.w!==!1&&l(o,r,-s/2-o/2,0),e.e!==!1&&l(o,r,s/2+o/2,0),e.trim){const a=this.texBox(s,.5,.1,{tex:e.trim});a.position.set(0,.25,-r/2+.05),this.room.group.add(a);const c=this.texBox(s,.3,.15,{tex:e.trim});c.position.set(0,n-.15,-r/2+.07),this.room.group.add(c)}}collider(t,e,n,s){const r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),on:!0};return this.room.boxes.push(r),r}box(t,e,n,s,r,o={}){const l=this.texBox(n,r,s,o,"wood");l.position.set(t,(o.y||0)+r/2,e),l.castShadow=o.cast!==!1,l.receiveShadow=!0,o.ry&&(l.rotation.y=o.ry),this.room.group.add(l);let a;return o.solid!==!1&&!(o.y>2.2)&&(a=this.collider(t-n/2,e-s/2,t+n/2,e+s/2),l.userData.box=a),this.tag(l,o,a),l}decal(t,e={}){const n=t.image,s=e.w||n.width/Zn,r=e.h||n.height/Zn,o=e.glow?new an({map:t,transparent:!0,alphaTest:.1,color:e.color||16777215}):new Yn({map:t,transparent:!0,alphaTest:.1});e.opacity!=null&&(o.opacity=e.opacity,o.alphaTest=.01);const l=new _t(new De(s,r),o),a=e.y??2.4,c=!e.flat&&!e.noSlot&&(e.wall==="w"||e.wall==="e"||e.z==null||Math.abs(e.z-(-this.d/2+.03))<.15);if(e.wall==="w")l.position.set(-this.w/2+.03,a,c?this.wallSlot("w",e.at||0,s,a,r,{obj:l}):e.at||0),l.rotation.y=Math.PI/2;else if(e.wall==="e")l.position.set(this.w/2-.03,a,c?this.wallSlot("e",e.at||0,s,a,r,{obj:l}):e.at||0),l.rotation.y=-Math.PI/2;else if(e.flat)l.position.set(e.x||0,e.y??.03,e.z||0),l.rotation.x=-Math.PI/2;else{const h=e.x??e.at??0;l.position.set(c&&s<this.w*.6?this.wallSlot("n",h,s,a,r,{obj:l}):h,a,e.z??-this.d/2+.03)}return e.ry&&(l.rotation.y=e.ry),l.receiveShadow=!e.glow,this.room.group.add(l),this.tag(l,e),l}poster(t,e,n={}){return this.decal(Pv(t,e,n),n)}sprite(t,e,n,s={}){const r=typeof t=="string"?Lv(t):t,o=r.image,l=s.scale||1,a=o.width/Zn*l,c=o.height/Zn*l,h=new De(a,c);h.translate(0,c/2,0),s.glow||au(h);const u=s.glow?new an({map:r,alphaTest:.3,side:Fe,transparent:s.opacity!=null,opacity:s.opacity??1}):new Yn({map:r,alphaTest:.3,side:Fe,emissive:s.emissive||0}),p=new _t(h,u);p.position.set(e,s.y||0,n),p.castShadow=s.cast!==!1&&!s.glow,s.flipX&&(p.scale.x=-1),this.room.group.add(p);let m;if(s.solid){const d=s.solid===!0?Math.min(a,1.2)/2:s.solid;m=this.collider(e-d,n-.3,e+d,n+.3),p.userData.box=m}return this.room.props.push({x:e,z:n,y:s.y||0,w:a,kind:typeof t=="string"?t:"tex",box:m}),this.tag(p,s,m),p}actor(t,e,n,s={}){const r=new pl(t,s.id||t);return r.place(e,n,s.dir||"f"),s.pose&&(r.pose=s.pose),r.mask=s.mask,s.hidden&&(r.hidden=!0),this.room.actors.push(r),this.room.group.add(r.group),s.mask&&this.room.masked.push({obj:r.group,mask:s.mask}),r}inter(t,e,n,s){const r={id:t,x:e,z:n,r:s.r||1.7,label:s.label,fn:s.fn,mask:s.mask,cond:s.cond,y:s.y??2.2,enabled:!0,quiet:s.quiet};if(!s.quiet){const o=new _t(new cl(.13),new an({color:16771488}));o.position.set(e,r.y+.5,n),r.marker=o,this.room.group.add(o)}return this.room.inters.push(r),s.photo&&this.photo(t,s.photo,e,n,{cond:s.cond,mask:s.mask}),r}look(t,e,n,s,r,o={}){const l=typeof r=="function"?r:h=>h.run(r),a=o.egg?async h=>{await l(h),h.egg(o.egg)}:l,c=this.inter(t,e,n,{label:s,...o,fn:a});return o.egg&&(c.egg=o.egg),c}npc(t,e,n,s={}){const r=this.actor(t,e,n,s),o=this.collider(e-.4,n-.25,e+.4,n+.25);return r.box=o,s.mask&&this.room.masked.push({obj:new Se,mask:s.mask,box:o}),s.talk&&this.inter(s.id||t,e,n+.2,{label:s.label||"Поговорить: "+pn[t].name,fn:async l=>{r.face(l.player.x,l.player.z),l.player.face(r.x,r.z),await(typeof s.talk=="function"?s.talk(l,r):l.run(s.talk))},r:1.9,y:2.6,mask:s.mask,cond:s.cond}),r}door(t,e,n){const s=n.w||2.2,r=n.h||3.4;let o=e,l,a;if(n.wall==="s")a=this.southExit(e,n.sign||n.label),l=this.d/2-.9;else{if(a=Dv(s,r,n.col||"#5a3a22",n.sign,!!n.double||s>2.6,n.glow),n.wall==="w"||n.wall==="e"){const c=n.wall==="w"?-1:1,h=this.wallSlot(n.wall,e,s+.8,r/2,r+.6,{fixed:!0,obj:a});a.position.set(c*(this.w/2),0,h),a.rotation.y=-c*Math.PI/2,o=c*(this.w/2-.9),l=h}else{const c=n.z??-this.d/2;a.position.set(e,0,c),n.z==null&&this.wallSlot("n",e,s+.8,r/2,r+.6,{fixed:!0,obj:a}),l=c+.9}this.room.group.add(a),this.tag(a,{mask:n.mask})}return this.inter(t,o,l,{label:n.label,mask:n.mask,y:n.wall==="s"?1.6:3.2,fn:async c=>{if(n.cond&&!n.cond()){c.sfx("locked"),n.locked&&await c.run(typeof n.locked=="string"?["~: "+n.locked]:n.locked);return}if(n.fn)return n.fn(c);n.wall!=="s"?(c.sfx("door"),Iv(a)):c.sfx("step"),await c.goto(n.to,n.spot||"start",{fade:n.fade})}}),a}southExit(t,e){const n=new ce,s=this.d/2-.25,r=new Yn({map:Oe("darkwood")}),o=new Yn({map:Oe("gold")});for(const c of[-1,1]){const h=new _t(new je(.25,2.6,.25),r);h.position.set(t+c*1.15,1.3,s),h.castShadow=!0,n.add(h);const u=new _t(new je(.4,.15,.4),o);u.position.set(t+c*1.15,2.65,s),n.add(u)}const l=new _t(new je(2.7,.22,.3),r);l.position.set(t,2.75,s),n.add(l);const a=new _t(new De(2.2,.42),new an({map:mn(88,16,c=>{c.fillStyle="#2a1408",c.fillRect(0,0,88,16),c.strokeStyle="#d4ae48",c.strokeRect(.5,.5,87,15),hs(c,e.length>22?e.slice(0,21)+"…":e,44,4,{size:7,col:"#f0d478",align:"center"})},"sexit"+e)}));a.position.set(t,2.75,s+.16),n.add(a);for(let c=0;c<3;c++){const h=new _t(new je(2.1,.08,.35),r);h.position.set(t,.04-c*.12,s+.1+c*.3),n.add(h)}return this.room.group.add(n),n}wall(t,e,n,s,r={}){const o=Math.abs(n-t)||.4,l=Math.abs(s-e)||.4,a=r.h||4.2,c=this.box((t+n)/2,(e+s)/2,o,l,a,{tex:r.tex||"plaster",tint:r.tint,...r}),h=c.material;if(h.transparent=!0,this.room.occluders.push({mesh:c,x0:Math.min(t,n)-.4,x1:Math.max(t,n)+.4,z:Math.max(e,s),h:a}),r.trim!==!1){const u=this.box((t+n)/2,(e+s)/2,o+.06,l+.06,.25,{tex:"darkwood",y:a-.25,solid:!1,cast:!1}),p=u.material;p.transparent=!0,this.room.occluders.push({mesh:u,x0:Math.min(t,n)-.4,x1:Math.max(t,n)+.4,z:Math.max(e,s),h:a})}return c}stairs(t,e,n,s=8,r={}){const o=new ce;for(let l=0;l<s;l++){const a=this.texBox(n,.28,.5,{tex:r.tex||"stage"});if(a.position.set(t,.14+l*.28,e-l*.5),a.receiveShadow=!0,a.castShadow=!0,o.add(a),r.runner!==!1){const c=this.texBox(n*.55,.02,.52,{tex:"carpet"});c.position.set(t,.29+l*.28,e-l*.5),o.add(c)}}return this.room.group.add(o),this.collider(t-n/2,e-s*.5,t+n/2,e-.6),o}spawn(t,e,n,s="f"){this.room.spawns[t]={x:e,z:n,dir:s}}ambient(t,e,n){const s=n!=null?new tv(n,t,e):new rv(t,e);return this.room.group.add(s),s}sun(t,e,n=6,s=14,r=8){const o=new sv(t,e);o.position.set(n,s,r),o.castShadow=!0,o.shadow.mapSize.set(1024,1024);const l=Math.max(this.w,this.d)/2+4;return Object.assign(o.shadow.camera,{left:-l,right:l,top:l,bottom:-l,near:1,far:60}),o.shadow.bias=-.002,this.room.group.add(o,o.target),o}light(t,e,n,s,r,o=12,l={}){const a=new Wr(s,r,o,1.4);return a.position.set(t,e,n),this.room.group.add(a),l.flicker&&this.room.flick.push({l:a,base:r,s:l.flicker}),l.mask&&this.room.masked.push({obj:a,mask:l.mask}),l.name&&(this.room.named[l.name]=a),a}spot(t,e,n,s,r,o,l,a={}){const c=new Jh(o,l,a.dist||40,a.angle||.45,a.pen??.5,1.1);if(c.position.set(t,e,n),c.target.position.set(s,0,r),a.shadow!==!1&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-.003,c.shadow.camera.near=1,c.shadow.camera.far=50),this.room.group.add(c,c.target),a.cone){const h=Math.hypot(s-t,e,r-n),u=Math.tan(a.angle||.45)*h,p=new ol(u,h,20,1,!0);p.translate(0,-h/2,0),p.rotateX(-Math.PI/2);const m=new _t(p,new an({color:o,transparent:!0,opacity:a.cone===!0?.07:a.cone,side:Fe,depthWrite:!1,blending:Ns}));m.position.set(t,e,n),m.lookAt(s,0,r),m.rotateY(Math.PI),this.room.group.add(m),c.cone=m}return a.name&&(this.room.named[a.name]=c),a.mask&&this.room.masked.push({obj:c,mask:a.mask}),c}trigger(t,e,n,s,r,o=!0){const l={x0:t,z0:e,x1:n,z1:s,fn:r,once:o,done:!1,inside:!1};return this.room.triggers.push(l),l}photo(t,e,n,s,r={}){this.room.photos.push({id:t,name:e,x:n,z:s,cond:r.cond,mask:r.mask})}onUpdate(t){this.room.updaters.push(t)}particles(t,e={}){const n=e.count||(t==="rain"?500:120),s=this.w+4,r=this.d+4,o=e.top||9,l=new Float32Array(n*3),a=new Float32Array(n);for(let m=0;m<n;m++)l[m*3]=(Math.random()-.5)*s,l[m*3+1]=Math.random()*o,l[m*3+2]=(Math.random()-.5)*r,a[m]=.5+Math.random();const c=new Ne;c.setAttribute("position",new ln(l,3));const h={dust:16771264,rain:10139872,petals:16298192,sparks:16760928,snow:16777215,confetti:16765024,glitch:6356960}[t],u=new xg(c,new Oh({color:e.color||h,size:t==="rain"?.09:t==="dust"?.07:.14,transparent:!0,opacity:t==="dust"?.5:.8,depthWrite:!1,blending:t==="petals"||t==="snow"?xi:Ns}));this.room.group.add(u);const p={dust:.15,rain:18,petals:1.2,sparks:-1.5,snow:1,confetti:2,glitch:-3}[t];return this.onUpdate((m,d)=>{if(u.visible){for(let v=0;v<n;v++)l[v*3+1]-=p*a[v]*m,t!=="rain"&&(l[v*3]+=Math.sin(d*a[v]+v)*m*.3),l[v*3+1]<0&&(l[v*3+1]=o),l[v*3+1]>o&&(l[v*3+1]=0);c.attributes.position.needsUpdate=!0}}),e.name&&(this.room.named[e.name]=u),this.tag(u,e),u}guard(t,e,n){const s=this.actor(t,e[0][0],e[0][1],{id:n.id});s.mesh.material.emissive.set(3814456);const r=new Wr(n.color||16728128,3,3,1.5);r.position.set(0,2.6,.4),s.group.add(r);const o=n.range||5,l=n.half||.5,a=new Hs(o,16,-l,l*2);a.rotateX(-Math.PI/2);const c=new _t(a,new an({color:n.color||16728128,transparent:!0,opacity:.14,depthWrite:!1}));c.position.y=.05,this.room.group.add(c);const h={actor:s,path:e,i:0,speed:n.speed||2.2,range:o,half:l,cone:c,wait:0,onCatch:n.onCatch,ang:0,off:0,pause:n.pause??.8,active:!0};return this.room.guards.push(h),h}laser(t,e,n,s,r){const o=Math.hypot(n-t,s-e),l=new _t(new je(o,.08,.08),new an({color:r.color||16719952}));l.position.set((t+n)/2,1,(e+s)/2),l.rotation.y=-Math.atan2(s-e,n-t),this.room.group.add(l);const a=l.clone();a.position.y=1.9,l.add(a),a.position.set(0,.9,0),a.rotation.set(0,0,0);const c={mesh:l,x0:t,z0:e,x1:n,z1:s,period:r.period||3,duty:r.duty??.5,phase:r.phase||0,on:!0,onHit:r.onHit,active:!0};return this.room.lasers.push(c),c}crowd(t,e,n,s,r=1.5,o=1.6,l="b"){t.forEach((a,c)=>this.actor(a,e+c%s*r+Math.floor(c/s)%2*.5,n+Math.floor(c/s)*o,{dir:l,id:"crowd_"+c+"_"+a}))}table(t,e,n=2.4,s=1.2,r={}){const o=this.box(t,e,n,s,.15,{tex:r.tex||"wood",y:1,...r});for(const[l,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(t+l*(n/2-.15),e+a*(s/2-.15),.15,.15,1,{tex:"darkwood",solid:!1,mask:r.mask});return o}curtain(t,e,n,s=6,r={}){return this.box(t,e,n,.3,s,{tex:"velvet",solid:r.solid??!1,...r})}}const k1=Object.freeze(Object.defineProperty({__proto__:null,Actor:pl,Builder:lu,Room:ou},Symbol.toStringTag,{value:"Module"})),wr="e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12",Ha="e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12",Bc="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .",zc=". a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .",zv="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .",Vc={theater:{bpm:92,parts:[{inst:"box",d:4,seq:wr+" | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12"},{inst:"upright",d:4,seq:Bc,vol:.8},{inst:"piano",d:4,seq:zc,vol:.5},{inst:"drone",seq:"a1:96 .:96",vol:.5}]},backstage:{bpm:60,parts:[{inst:"drone",seq:"d2:40 .:24",vol:.7},{inst:"box",seq:"a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30",vol:.7},{inst:"piano",seq:".:50 d3:6 .:44 a2:6 .:21",vol:.5}]},horror:{bpm:50,parts:[{inst:"drone",seq:"c2:48 c#2:16",vol:.9},{inst:"piano",seq:"eb6:2 .:30 d6:2 .:14 f#5:2 .:53",vol:.5},{inst:"piano",seq:"c2:4 .:75",vol:.8},{inst:"box",seq:".:37 g5:1 gb5:1 f5:2 .:60",vol:.4}]},heist:{bpm:118,parts:[{inst:"drums",seq:"k.h.s.h.k.h.s.hhk.h.s.h.k.khs.h.",vol:.8},{inst:"bass",d:2,seq:"d2 d2 d3 d2 d2 d3 d2 f2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 | f2 f2 f3 f2 f2 f3 f2 e2 | c2 c2 c3 c2 c2 c3 c2 c#2"},{inst:"pluck",d:1,vol:.55,seq:"d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 | bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 | f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 | c4 e4 g4 c5 g4 e4 c4 e4 g4 c5 g4 e4 c4 e4 g4 c5"},{inst:"lead",d:2,vol:.8,seq:".:64 | a5:4 . f5 d5:4 .:4 | d5 f5 g5:4 f5:8 | a5:4 . c6 a5:4 f5:4 | g5:6 e5 c5:8"},{inst:"pad",seq:"d3+a3:16 bb2+f3:16 f3+c4:16 c3+g3:16"}]},chase:{bpm:140,parts:[{inst:"drums",seq:"k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs",vol:.9},{inst:"bass",d:1,seq:"d2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2"},{inst:"lead",d:2,vol:.8,seq:"d5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4"},{inst:"pad",seq:"d3+a3:32 bb2+f3:32"}]},school:{bpm:104,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 c3 a2 a2 f2 f2 g2 g2"},{inst:"pluck",d:2,vol:.7,seq:"e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},school_soft:{bpm:76,parts:[{inst:"piano",d:8,vol:.7,seq:"c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4"},{inst:"box",d:4,vol:.7,seq:".:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16"},{inst:"pad",seq:"c3+g3:32 f3+c4:16 g3+d4:16",vol:.8}]},noir:{bpm:96,swing:.33,parts:[{inst:"upright",d:4,seq:"d2 f2 a2 c3 | g2 bb2 d3 f3 | e2 g2 a2 c#3 | d3 a2 f2 a2 | d2 e2 f2 a2 | bb2 a2 g2 f2 | e2 bb2 a2 e2 | d2 a2 d2 ."},{inst:"drums",seq:"b..bb..bb..bb.rb",vol:.8},{inst:"piano",d:1,vol:.6,seq:".:6 f3+a3+c4+e4:2 .:8 | .:6 f3+bb3+d4:2 .:3 f3+bb3+d4:2 .:3 | .:6 g3+bb3+d4:2 .:2 g3+c#4+e4:2 .:4 | .:10 f3+a3+c4+e4:3 .:3"},{inst:"sax",d:2,vol:.8,seq:".:8 a4:6 c5 | d5:8 .:4 f5 e5 | d5:4 c5 a4 g4:8 | a4:12 .:4 | .:4 d5 f5 a5:6 g5 | f5:4 d5:4 c5 d5:6 | e5:4 g5 f5 e5:4 c#5:4 | d5:12 .:4"}]},fairy:{bpm:92,parts:[{inst:"box",d:4,seq:"c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12"},{inst:"upright",d:12,vol:.7,seq:"f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2"},{inst:"pluck",d:2,vol:.5,seq:"f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6"},{inst:"strings",vol:.6,seq:".:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12"}]},idol_agency:{bpm:128,parts:[{inst:"drums",seq:"k.h.k.h.k.h.k.h.",tag:"drums"},{inst:"drums",seq:"....c.......c...",tag:"drums",vol:.8},{inst:"bass",d:2,tag:"bass",seq:"c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1"},{inst:"pad",tag:"keys",seq:"c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16"},{inst:"lead",d:2,tag:"lead",seq:"e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8"}]},idol_own:{bpm:122,parts:[{inst:"drums",seq:"k..hs.hk.khhs.h.",tag:"drums"},{inst:"bass",d:2,tag:"bass",seq:"a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 ."},{inst:"pad",tag:"keys",seq:"a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16"},{inst:"pluck",d:1,tag:"arp",vol:.5,seq:"a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5"},{inst:"sax",d:2,tag:"lead",vol:.9,seq:"a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8"}]},diva:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"strings",d:2,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"drums",seq:"r..r..r.r..r..r.",vol:.6}]},collapse:{bpm:138,parts:[{inst:"box",d:3,seq:"e5 a5 c6 b5 g#5 a5 e5 c5 d5"},{inst:"bass",d:7,seq:"a1 d2 e2 c2"},{inst:"drums",seq:"k..k.s.k.h..s.kh",vol:.7},{inst:"drums",seq:"..h..h.h.t",vol:.5},{inst:"pad",seq:"a2+eb3:32 bb2+e3:32"},{inst:"sax",d:5,vol:.4,seq:"a4 . d5 . c#5 ."}]},dressing:{bpm:66,parts:[{inst:"box",d:4,seq:wr,vol:.8},{inst:"pad",seq:"a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12",vol:.9}]},fin_overture:{bpm:108,parts:[{inst:"strings",d:4,seq:wr,vol:1.2},{inst:"organ",d:4,seq:zc,vol:.9},{inst:"upright",d:4,seq:Bc},{inst:"drums",seq:"t...h...h...",vol:.5}]},fin_queen:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"voice",d:2,vol:.9,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"strings",d:16,vol:.8,seq:"a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4"},{inst:"drums",seq:"r..r..r.r..r..r.k.......s.......",vol:.6}]},fin_girl:{bpm:100,parts:[{inst:"voice",d:4,seq:Ha,vol:.8},{inst:"pluck",d:2,vol:.6,seq:"a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6"},{inst:"upright",d:4,seq:zv,vol:.7},{inst:"strings",vol:.5,seq:".:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12"}]},fin_mirror:{bpm:126,parts:[{inst:"drums",seq:"k..hs..hk.k.s.hh",vol:.9},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3"},{inst:"strings",d:1,vol:.6,seq:"a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 ."},{inst:"lead",d:2,seq:"e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4"},{inst:"voice",d:16,vol:.5,seq:"a4 b4 a4 g#4 c5 b4 d5 c#5"}]},fin_reveal:{bpm:66,parts:[{inst:"box",d:4,seq:Ha},{inst:"pad",seq:".:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12",vol:.9},{inst:"voice",d:12,vol:.35,seq:".:96 e4 e4 e4 f#4 f#4 e4 d4 c#4"}]},fin_bows:{bpm:120,parts:[{inst:"drums",seq:"k.h.s.h.k.k.s.hh",vol:.8},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 ."},{inst:"organ",seq:"a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16"},{inst:"lead",d:2,seq:"e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4"},{inst:"strings",d:4,vol:.8,seq:"c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5"}]},party:{bpm:96,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 e3 f2 a2 g2 b2 c3 g2"},{inst:"box",d:2,seq:"g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},musicbox:{bpm:70,swing:.12,vol:.9,parts:[{inst:"box",d:4,seq:wr+" | .:12 | e6:4 c6:4 a5:4 | b5:8 g#5:4 | e5:12 | .:24"},{inst:"box",d:4,vol:.45,seq:"a3 . e4 | e3 . b3 | a3 . e4 | d3 . a3 | d3 . f3 | c3 . g3 | e3 . g#3 | a3 . c4 | a3 . e4 | a3 . e4 | e3 . b3 | e3 . g#3 | a3 . e4 | a3 . . | .:12"},{inst:"pad",seq:"a2+e3:96 .:96",vol:.35}]},morning:{bpm:60,parts:[{inst:"box",d:4,seq:Ha,vol:.7},{inst:"pad",seq:"a2+e3:48 d3+a3:24 e3+b3:24",vol:.7}]}},Vv={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function Gv(i){const t=/^([a-g])([#b]?)(-?\d)$/.exec(i);if(!t)return console.warn("[audio] неизвестная нота",i),440;const e=Vv[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)+(parseInt(t[3])+1)*12;return 440*Math.pow(2,(e-69)/12)}const Gc=new Map;function Hc(i){let t=Gc.get(i);if(t)return t;const e=[];let n=0;if(i.inst==="drums"&&!i.seq.includes(" "))for(const s of i.seq.replace(/\|/g,""))s!=="."&&e.push({step:n,len:1,notes:[s]}),n++;else for(const s of i.seq.split(/\s+/)){if(!s||s==="|")continue;const[r,o]=s.split(":"),l=o?parseFloat(o):i.d||1;r!=="."&&e.push({step:n,len:l,notes:r.split("+")}),n+=l}return t={evs:e,len:n},Gc.set(i,t),t}class Hv{constructor(){this.ctx=null,this.cur=null,this.timer=null,this.amb=null,this.partFilter=null,this.musicFx=null,this.pendingMusic=null,this.pendingAmb=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[audio] WebAudio недоступен — игра продолжит работу без звука");return}const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),this.bMusic=e.createGain(),this.bSfx=e.createGain(),this.bVoice=e.createGain(),this.duckG=e.createGain(),this.musicFx=e.createBiquadFilter(),this.musicFx.type="lowpass",this.musicFx.frequency.value=2e4,this.bMusic.connect(this.musicFx),this.musicFx.connect(this.duckG),this.duckG.connect(n),this.bSfx.connect(n),this.bVoice.connect(n);const r=(this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate)).getChannelData(0);for(let l=0;l<r.length;l++)r[l]=Math.random()*2-1;const o=e.createBuffer(2,e.sampleRate*2.2,e.sampleRate);for(let l=0;l<2;l++){const a=o.getChannelData(l);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/a.length,2.6)}if(this.rev=e.createConvolver(),this.rev.buffer=o,this.revG=e.createGain(),this.revG.gain.value=.22,this.rev.connect(this.revG),this.revG.connect(n),this.applyVolumes(),this.timer=setInterval(()=>this.tick(),40),this.pendingMusic){const l=this.pendingMusic;this.pendingMusic=null,this.music(l)}if(this.pendingAmb){const l=this.pendingAmb;this.pendingAmb=null,this.ambience(l)}}applyVolumes(){this.ctx&&(this.bMusic.gain.value=Pe.music*.5,this.bSfx.gain.value=Pe.sfx*.8,this.bVoice.gain.value=Pe.voice*.5)}now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3}duck(t){this.ctx&&this.duckG.gain.setTargetAtTime(t?.55:1,this.ctx.currentTime,.15)}muffle(t){this.ctx&&this.musicFx&&this.musicFx.frequency.setTargetAtTime(t,this.ctx.currentTime,.2)}stepDur(t){return 60/t.bpm/4}music(t,e={}){if(!this.ctx)return this.pendingMusic=t,this.now();if(this.cur&&this.cur.id===t&&!e.restart)return this.cur.t0;const n=this.ctx.currentTime,s=e.fade??1.2;if(this.cur){const a=this.cur.gain;a.gain.cancelScheduledValues(n),a.gain.setValueAtTime(a.gain.value,n),a.gain.linearRampToValueAtTime(0,n+s),setTimeout(()=>a.disconnect(),s*1e3+300),this.cur=null}if(!t)return n;const r=Vc[t];if(!r)return console.warn("[audio] нет трека",t),n;const o=this.ctx.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r.vol??1,n+Math.min(s,.6)+.05),o.connect(this.bMusic);const l=n+(e.delay??.12);return this.cur={id:t,tr:r,t0:l,gain:o,next:r.parts.map(()=>0)},l}musicId(){return this.cur?this.cur.id:null}tick(){const t=this.cur;if(!t||!this.ctx)return;const e=this.ctx.currentTime+.25,n=this.stepDur(t.tr);t.tr.parts.forEach((s,r)=>{const{evs:o,len:l}=Hc(s);if(!(!o.length||!l))for(;;){const a=t.next[r],c=Math.floor(a/o.length),h=o[a%o.length];if(t.tr.once&&c>0)break;let u=t.t0+(c*l+h.step)*n;if(t.tr.swing&&h.step%2===1&&(u+=n*t.tr.swing),u>e)break;if(t.next[r]++,!(u<this.ctx.currentTime-.05)&&!(this.partFilter&&!this.partFilter(t.id,s)))for(const p of h.notes)this.voice(s.inst,p,u,h.len*n,s.vol??1,t.gain)}})}env(t,e,n,s,r,o,l,a){t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(a,e+n),t.exponentialRampToValueAtTime(Math.max(a*r,1e-4),e+n+s),t.setValueAtTime(Math.max(a*r,1e-4),Math.max(e+o,e+n+s)),t.exponentialRampToValueAtTime(1e-4,Math.max(e+o,e+n+s)+l)}osc(t,e,n,s,r,o=0){const l=this.ctx.createOscillator();return l.type=t,l.frequency.setValueAtTime(e,n),l.detune.value=o,l.connect(r),l.start(n),l.stop(s),l}noise(t,e,n,s=1){const r=this.ctx.createBufferSource();return r.buffer=this.noiseBuf,r.playbackRate.value=s,r.loop=!0,r.connect(n),r.start(t,Math.random()),r.stop(t+e),r}voice(t,e,n,s,r,o){const l=this.ctx;if(!l)return;const a=l.createGain();a.connect(o);const c=u=>{const p=l.createGain();p.gain.value=u,a.connect(p),p.connect(this.rev)};if(t==="drums"){if(e==="k"){const u=l.createOscillator();u.frequency.setValueAtTime(150,n),u.frequency.exponentialRampToValueAtTime(42,n+.12),u.connect(a),a.gain.setValueAtTime(.9*r,n),a.gain.exponentialRampToValueAtTime(.001,n+.22),u.start(n),u.stop(n+.25)}else if(e==="s"||e==="c"||e==="r"){const u=l.createBiquadFilter();u.type=e==="r"?"bandpass":"highpass",u.frequency.value=e==="c"?1200:e==="r"?1800:1500,u.connect(a),this.noise(n,.2,u),a.gain.setValueAtTime((e==="r"?.25:.5)*r,n),a.gain.exponentialRampToValueAtTime(.001,n+(e==="r"?.05:.16)),e!=="r"&&c(.2)}else if(e==="h"||e==="o"||e==="b"){const u=l.createBiquadFilter();u.type="highpass",u.frequency.value=e==="b"?4e3:7e3,u.connect(a),this.noise(n,.3,u);const p=e==="o"?.22:e==="b"?.12:.04;a.gain.setValueAtTime((e==="b"?.16:.2)*r,n),a.gain.exponentialRampToValueAtTime(.001,n+p)}else if(e==="t"){const u=l.createOscillator();u.frequency.setValueAtTime(200,n),u.frequency.exponentialRampToValueAtTime(90,n+.15),u.connect(a),a.gain.setValueAtTime(.5*r,n),a.gain.exponentialRampToValueAtTime(.001,n+.2),u.start(n),u.stop(n+.22)}return}const h=Gv(e);switch(t){case"piano":{this.env(a.gain,n,.005,.25,.25,s,.4,.26*r);const u=n+s+.6;this.osc("triangle",h,n,u,a);const p=l.createGain();p.gain.value=.3,p.connect(a),this.osc("sine",h*2,n,u,p),c(.35);break}case"box":{this.env(a.gain,n,.002,.5,.05,Math.min(s,.3),.9,.2*r);const u=n+1.6;this.osc("sine",h,n,u,a);const p=l.createGain();p.gain.value=.25,p.connect(a),this.osc("sine",h*3.01,n,u,p),c(.5);break}case"bass":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.setValueAtTime(900,n),u.frequency.exponentialRampToValueAtTime(220,n+.2),u.connect(a),this.env(a.gain,n,.005,.1,.7,s*.9,.08,.34*r),this.osc("sawtooth",h,n,n+s+.2,u),this.osc("square",h/2,n,n+s+.2,u,4);break}case"upright":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=600,u.connect(a),this.env(a.gain,n,.008,.25,.2,s*.8,.15,.5*r),this.osc("triangle",h,n,n+s+.3,u),this.osc("sine",h*2,n,n+s+.3,u);break}case"pad":case"strings":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=t==="pad"?900:2200,u.connect(a);const p=t==="pad"?.35:.12;this.env(a.gain,n,Math.min(p,s*.5),.2,.85,s,.5,.075*r);const m=n+s+.7;this.osc("sawtooth",h,n,m,u,-7),this.osc("sawtooth",h,n,m,u,8),c(.5);break}case"lead":case"pluck":{const u=l.createBiquadFilter();u.type="lowpass",u.Q.value=4,u.frequency.setValueAtTime(t==="pluck"?3500:2600,n),u.frequency.exponentialRampToValueAtTime(t==="pluck"?500:1400,n+.25),u.connect(a),this.env(a.gain,n,.006,.15,t==="pluck"?.15:.6,s*.95,.12,.13*r);const p=n+s+.3;this.osc(t==="pluck"?"sawtooth":"square",h,n,p,u),this.osc("sawtooth",h,n,p,u,9),c(.25);break}case"sax":case"voice":{const u=l.createOscillator();u.type="sawtooth",u.frequency.setValueAtTime(h*.985,n),u.frequency.linearRampToValueAtTime(h,n+.07);const p=l.createOscillator(),m=l.createGain();p.frequency.value=t==="sax"?5.2:5.8,m.gain.setValueAtTime(0,n),m.gain.linearRampToValueAtTime(h*.012,n+Math.min(.3,s)),p.connect(m),m.connect(u.frequency);const d=n+s+.25,v=l.createGain();v.connect(a);const f=t==="sax"?[[700,3,1],[1500,4,.5]]:[[800,6,1],[1150,7,.6],[2900,8,.25]];for(const[g,x,y]of f){const b=l.createBiquadFilter();b.type="bandpass",b.frequency.value=g,b.Q.value=x;const R=l.createGain();R.gain.value=y,u.connect(b),b.connect(R),R.connect(v)}this.env(a.gain,n,.05,.1,.85,s*.95,.18,(t==="sax"?.5:.55)*r),u.start(n),u.stop(d),p.start(n),p.stop(d),c(.4);break}case"organ":{this.env(a.gain,n,.02,.05,.9,s,.1,.07*r);const u=n+s+.2;for(const[p,m]of[[1,1],[2,.5],[3,.25],[4,.2]]){const d=l.createGain();d.gain.value=m,d.connect(a),this.osc("sine",h*p,n,u,d)}c(.3);break}case"drone":{const u=l.createBiquadFilter();u.type="lowpass",u.frequency.value=300,u.connect(a),this.env(a.gain,n,Math.min(1.2,s*.4),.3,.9,s,1.2,.2*r);const p=n+s+1.4;this.osc("sawtooth",h,n,p,u,-12),this.osc("sine",h,n,p,u,9),this.osc("sine",h*1.5,n,p,u,3),c(.6);break}default:console.warn("[audio] нет инструмента",t)}}sfx(t,e={}){const n=this.ctx;if(!n)return;const s=n.currentTime+.005,r=n.createGain();r.connect(this.bSfx);const o=c=>{const h=n.createGain();h.gain.value=c,r.connect(h),h.connect(this.rev)},l=(c,h,u,p,m=s,d=1,v)=>{const f=n.createBiquadFilter();f.type=c,f.frequency.setValueAtTime(h,m),v&&f.frequency.exponentialRampToValueAtTime(v,m+u),f.Q.value=d;const g=n.createGain();g.gain.setValueAtTime(p,m),g.gain.exponentialRampToValueAtTime(.001,m+u),f.connect(g),g.connect(r),this.noise(m,u+.05,f)},a=(c,h,u,p,m,d=s)=>{const v=n.createOscillator();v.type=c,v.frequency.setValueAtTime(h,d),u!==h&&v.frequency.exponentialRampToValueAtTime(u,d+p);const f=n.createGain();f.gain.setValueAtTime(m,d),f.gain.exponentialRampToValueAtTime(.001,d+p),v.connect(f),f.connect(r),v.start(d),v.stop(d+p+.02)};switch(t){case"step":{const c=e.mat||"wood";l(c==="metal"?"bandpass":"lowpass",(c==="wood"?300:c==="stone"?900:c==="metal"?2200:c==="grass"?2600:c==="carpet"?180:500)*(.9+Math.random()*.2),c==="grass"?.09:.05,c==="carpet"?.1:.16,s,c==="metal"?6:1),c==="wood"&&a("sine",110,70,.05,.1);break}case"click":a("square",900,700,.03,.08);break;case"hover":a("sine",1200,1200,.02,.03);break;case"paper":l("bandpass",3e3,.12,.2,s,.7,5e3);break;case"pencil":l("bandpass",5e3,.18,.1,s,2,3500);break;case"stamp":a("sine",140,50,.12,.6),l("lowpass",800,.06,.3);break;case"pickup":a("triangle",660,660,.08,.15),a("triangle",990,990,.14,.15,s+.07);break;case"note":a("sine",880,880,.1,.1),a("sine",1320,1320,.2,.08,s+.08),o(.4);break;case"switch":a("square",240,120,.04,.18),l("highpass",3e3,.02,.15);break;case"spot":a("square",180,90,.05,.2),a("sine",55,55,.5,.12,s+.02),o(.4);break;case"door":a("sawtooth",90,140,.35,.07),l("lowpass",400,.14,.4,s+.33),o(.3);break;case"creak":a("sawtooth",180,320,.5,.05),a("sawtooth",320,210,.4,.04,s+.45),o(.5);break;case"locked":a("square",160,160,.05,.14),a("square",160,160,.05,.14,s+.1);break;case"curtain":l("lowpass",500,1.6,.3,s,.5,1800),o(.4);break;case"whoosh":l("bandpass",400,.5,.3,s,1.2,2400);break;case"shutter":l("highpass",4e3,.03,.4),l("highpass",3e3,.05,.3,s+.08),a("square",1500,500,.03,.1);break;case"mask":a("sine",520,1040,.25,.12),a("sine",780,1560,.3,.08,s+.04),o(.6);break;case"error":a("square",200,150,.18,.14);break;case"ok":a("triangle",523,523,.1,.14),a("triangle",784,784,.2,.14,s+.09),o(.3);break;case"hit":a("triangle",e.f||880,e.f||880,.07,.12);break;case"miss":l("lowpass",300,.08,.2);break;case"knock":for(let c=0;c<(e.n||3);c++)a("sine",120,60,.18,.7,s+c*.7),l("lowpass",500,.05,.3,s+c*.7);o(.7);break;case"thunder":l("lowpass",200,2.4,.9,s,.5,60),o(.8);break;case"alarm":for(let c=0;c<3;c++)a("square",880,660,.22,.12,s+c*.26);break;case"laser":a("sawtooth",1800,300,.2,.1);break;case"emp":a("sawtooth",100,1600,.3,.12),l("bandpass",2e3,.3,.15,s,3,200);break;case"glitch":for(let c=0;c<5;c++)a("square",200+Math.random()*2e3,100+Math.random()*800,.04,.07,s+c*.045);break;case"heart":a("sine",70,40,.14,.7),a("sine",60,40,.14,.5,s+.22);break;case"laugh":{const c=e.n||6;for(let h=0;h<c;h++){const u=s+h*.17,p=(e.f||520)*(1-h*.05),m=n.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(p*1.2,u),m.frequency.exponentialRampToValueAtTime(p,u+.1);const d=n.createBiquadFilter();d.type="bandpass",d.frequency.value=900,d.Q.value=3;const v=n.createGain();v.gain.setValueAtTime(1e-4,u),v.gain.linearRampToValueAtTime(e.vol||.3,u+.02),v.gain.exponentialRampToValueAtTime(.001,u+.13),m.connect(d),d.connect(v),v.connect(r),m.start(u),m.stop(u+.15)}o(.7);break}case"applause":{const c=e.dur||3,h=e.dens||45;for(let u=0;u<c*h;u++){const p=s+Math.random()*c,m=Math.sin(Math.PI*Math.min(1,(p-s)/c))*.12+.03;l("bandpass",1200+Math.random()*2200,.03,m,p,1.5)}o(.6);break}case"clap":l("bandpass",1500+Math.random()*800,.04,.4,s,1.5),o(.5);break;case"gasp":l("bandpass",1800,.4,.12,s,2,900),o(.5);break;case"bell":a("sine",660,660,1.2,.2),a("sine",1320,1320,.8,.08),o(.7);break;case"crash":l("lowpass",1500,.9,.7,s,.5,100),a("sine",80,30,.5,.6),o(.5);break;case"snip":l("highpass",5e3,.04,.4),l("highpass",4e3,.05,.4,s+.09);break;case"rope":l("bandpass",900,.3,.2,s,3,1800);break;case"gear":for(let c=0;c<6;c++)a("square",300,200,.03,.08,s+c*.09);break;case"candle":l("bandpass",900,.25,.25,s,1,300);break;case"firework":l("bandpass",600,.4,.12,s,2,3e3),l("lowpass",2500,.8,.5,s+.45,.5,200),o(.6);break;case"engine":a("sawtooth",70,160,.9,.16);break;case"mechtick":a("square",2600,1900,.018,.05),l("highpass",5e3,.02,.06);break;case"keyin":a("triangle",1900,1500,.06,.16),a("triangle",2700,2500,.05,.1,s+.03),l("highpass",4e3,.04,.2,s+.02),o(.3);break;case"scrape":{const c=e.dur||1.6;l("bandpass",1400,c,.12,s,6,700);for(let h=0;h<7;h++)a("square",900+Math.random()*600,700,.03,.05,s+h*c/7+Math.random()*.05);break}case"hum":a("sine",55,52,2.2,.22),a("sine",110,108,2,.06),o(.4);break;case"windup":for(let c=0;c<14;c++)a("square",3e3,2200,.015,.05*(1-c/16),s+c*.07);break;case"clunk":a("sine",120,45,.25,.6),l("lowpass",900,.08,.4),o(.4);break;case"lighton":a("sine",70,40,.4,.5),l("lowpass",2400,.12,.45),l("highpass",6e3,.6,.05,s+.1),o(.5);break;case"buzz":a("sawtooth",100,100,e.dur||.6,.025);break;default:console.warn("[audio] нет эффекта",t)}}blip(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="triangle",s.frequency.setValueAtTime(t*(.96+Math.random()*.1),n),r.gain.setValueAtTime(.11,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(r),r.connect(this.bVoice),s.start(n),s.stop(n+.06)}ambience(t){if(!this.ctx){this.pendingAmb=t;return}if(this.amb&&this.amb.id===t||(this.amb&&(this.amb.stop(),this.amb=null),!t))return;const e=this.ctx,n=e.createGain();n.gain.value=0,n.connect(this.bSfx);const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter(),o={rain:["highpass",1800,.16],hall:["lowpass",180,.22],crowd:["bandpass",700,.12],wind:["bandpass",350,.14],hum:["lowpass",90,.35],city:["lowpass",500,.12]}[t];if(!o){console.warn("[audio] нет атмосферы",t);return}r.type=o[0],r.frequency.value=o[1],s.connect(r),r.connect(n),s.start(),n.gain.linearRampToValueAtTime(o[2],e.currentTime+1),this.amb={id:t,stop:()=>{n.gain.cancelScheduledValues(e.currentTime),n.gain.setTargetAtTime(0,e.currentTime,.3),setTimeout(()=>{s.stop(),n.disconnect()},1500)}}}chart(t,e,n=1){const s=Vc[t],r=s.parts[e],{evs:o,len:l}=Hc(r),a=this.stepDur(s),c=[];for(let h=0;h<n;h++)for(const u of o)c.push({t:(h*l+u.step)*a,len:u.len*a,note:u.notes[0]});return c}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}const qt=new Hv,Kr=new Set,cu=new Set,Jn={x:0,y:0};let hu=!1;function Wc(i){hu=i}const uu={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyE:"act",Enter:"act",Space:"act",Escape:"pause",KeyP:"pause",Digit1:"mask1",Digit2:"mask2",Digit3:"mask3",Digit0:"mask0",KeyQ:"mask0",KeyC:"camera",KeyF:"camera",Tab:"notebook",KeyN:"notebook",KeyJ0:"notebook",KeyI:"inventory",KeyB:"inventory",KeyH:"history",KeyL:"history",ControlLeft:"skip",ControlRight:"skip",ShiftLeft:"run",ShiftRight:"run",KeyJ:"laneJ",KeyK:"laneK",KeyG:"laneG"},Ur=[];function Zi(i){return Ur.push(i),()=>{const t=Ur.indexOf(i);t>=0&&Ur.splice(t,1)}}function $i(i,t=""){cu.add(i);for(const e of[...Ur])e(i,t)}window.addEventListener("keydown",i=>{const t=uu[i.code];if(!t)return;const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||(!hu&&["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(Kr.add(t),$i(t,i.code)))});window.addEventListener("keyup",i=>{const t=uu[i.code];t&&Kr.delete(t)});window.addEventListener("blur",()=>{Kr.clear(),Jn.x=Jn.y=0});const Ji=i=>Kr.has(i);function Wa(){cu.clear()}function Wv(){let i=(Ji("right")?1:0)-(Ji("left")?1:0)+Jn.x,t=(Ji("down")?1:0)-(Ji("up")?1:0)+Jn.y;const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t}}const qa=new Map;function fu(i,t="neutral"){const e=i+"|"+t,n=qa.get(e);if(n)return n;const s=pn[i],r=200,o=240,l=document.createElement("canvas");l.width=r,l.height=o;const a=l.getContext("2d");if(!s)return"";if(i==="kukolnik"||i==="narrator"){if(a.fillStyle="#1a1210",a.fillRect(0,0,r,o),i==="kukolnik"){a.fillStyle="#050404",a.beginPath(),a.ellipse(100,100,44,54,0,0,7),a.fill(),a.fillRect(30,170,140,80),a.beginPath(),a.ellipse(100,190,80,40,0,0,7),a.fill(),a.fillRect(60,40,80,14),a.fillRect(74,4,52,44),a.strokeStyle="#d8b56a55",a.lineWidth=1;for(const k of[60,100,140])a.beginPath(),a.moveTo(k,0),a.lineTo(k+(k-100)*.3,60),a.stroke()}else{a.fillStyle="#e8d8a8",a.fillRect(30,60,140,120),a.fillStyle="#b89858",a.fillRect(97,60,6,120),a.fillStyle="#6a5a3a";for(let k=0;k<7;k++)a.fillRect(42,78+k*13,46,3),a.fillRect(112,78+k*13,46,3)}const L=l.toDataURL();return qa.set(e,L),L}const c=s.acc||[],h=s.hair,u=me(h,-.3),p=me(h,.25),m=me(s.skin,-.18);me(s.skin,.12);const d=100,v=112,f=s.build==="big"?52:s.build==="strong"?50:46,g=58,x=s.style,y=x.startsWith("curly"),b=(L,k,N,J,q)=>{a.fillStyle=q,a.beginPath(),a.ellipse(L,k,N,J,0,0,7),a.fill()};if(a.fillStyle=h,x==="long"||x==="longStyled"||x==="glam"||x==="rapunzel"){const L=x==="glam"?84:x==="longStyled"?72:66;if(a.beginPath(),a.moveTo(d-L,240),a.quadraticCurveTo(d-L-8,80,d,44),a.quadraticCurveTo(d+L+8,80,d+L,240),a.fill(),x==="glam")for(let k=0;k<5;k++)b(d-78+k%2*8,110+k*28,16,18,k%2?h:u),b(d+78-k%2*8,110+k*28,16,18,k%2?u:h)}if(x==="curls"){a.beginPath(),a.moveTo(d-70,200),a.quadraticCurveTo(d-80,70,d,46),a.quadraticCurveTo(d+80,70,d+70,200),a.fill();for(let L=0;L<4;L++)for(const k of[-1,1]){const N=d+k*(64-L%2*6),J=120+L*24;a.fillStyle=L%2?u:h,a.beginPath(),a.ellipse(N,J,15,15,0,0,7),a.fill(),a.strokeStyle=p,a.lineWidth=2,a.beginPath(),a.arc(N-k*3,J-2,8,Math.PI*(k>0?1.1:1.6),Math.PI*(k>0?1.7:2.2)),a.stroke()}a.fillStyle=h}if(x==="bob"||x==="bobLong"){const L=x==="bob"?150:172;a.beginPath(),a.moveTo(d-62,L),a.quadraticCurveTo(d-70,60,d,46),a.quadraticCurveTo(d+70,60,d+62,L),a.fill()}if(x==="curlyMid")for(let L=0;L<16;L++){const k=Math.PI*(.95+L/15*1.1);b(d+Math.cos(k)*58,104+Math.sin(k)*56+(L<3||L>12?30:0),17,17,L%2?h:u)}if(x==="fluffy")for(let L=0;L<14;L++){const k=Math.PI*(.9+L/13*1.2);b(d+Math.cos(k)*58,100+Math.sin(k)*52,19,19,L%2?h:p)}if(x==="twin")for(const L of[-1,1])b(d+L*70,120,15,44,h),b(d+L*70,150,12,26,u),a.fillStyle="#e84a6f",a.fillRect(d+L*70-9,82,18,7);x==="ponytail"&&(b(d+52,70,18,16,h),a.fillStyle=u,a.beginPath(),a.moveTo(d+58,70),a.quadraticCurveTo(d+92,110,d+66,190),a.quadraticCurveTo(d+54,130,d+44,80),a.fill()),x==="bun"&&b(d,40,22,18,h),c.includes("wings")&&(b(30,200,34,50,"rgba(230,220,255,0.7)"),b(170,200,34,50,"rgba(230,220,255,0.7)"));const R=s.build==="strong"?96:s.build==="big"?100:s.build==="thin"?70:80;if(a.fillStyle=s.top,a.beginPath(),a.moveTo(d-R,240),a.quadraticCurveTo(d-R,186,d-26,180),a.lineTo(d+26,180),a.quadraticCurveTo(d+R,186,d+R,240),a.fill(),a.fillStyle=me(s.top,-.25),a.fillRect(d-R,232,R*2,8),c.includes("cape")&&(a.fillStyle=s.trim||"#a22",a.fillRect(d-R,196,30,44),a.fillRect(d+R-30,196,30,44)),a.fillStyle=m,a.fillRect(d-13,156,26,32),a.fillStyle=s.skin,a.beginPath(),a.moveTo(d-20,184),a.lineTo(d,200),a.lineTo(d+20,184),a.lineTo(d+13,176),a.lineTo(d-13,176),a.fill(),c.includes("offshoulder")){a.fillStyle=s.skin,a.beginPath(),a.moveTo(d-R+6,214),a.quadraticCurveTo(d-R+4,186,d-26,180),a.lineTo(d+26,180),a.quadraticCurveTo(d+R-4,186,d+R-6,214),a.closePath(),a.fill(),a.fillStyle=s.top,a.fillRect(d-R,214,R*2,26);for(const L of[-1,1])a.beginPath(),a.moveTo(d+L*R,240),a.lineTo(d+L*R,202),a.quadraticCurveTo(d+L*(R-10),200,d+L*(R-24),214),a.lineTo(d+L*(R-24),240),a.fill();a.fillStyle=me(s.top,-.22),a.fillRect(d-R+24,214,R*2-48,3),a.strokeStyle=m,a.lineWidth=1.5,a.beginPath(),a.moveTo(d-30,192),a.quadraticCurveTo(d-14,198,d-4,194),a.moveTo(d+30,192),a.quadraticCurveTo(d+14,198,d+4,194),a.stroke()}else s.trim&&(a.strokeStyle=s.trim,a.lineWidth=5,a.beginPath(),a.moveTo(d-24,182),a.lineTo(d,204),a.lineTo(d+24,182),a.stroke());if(c.includes("pearls")){a.fillStyle="#f6f0e8";for(let L=0;L<11;L++){const k=Math.PI*(.15+L*.07);a.beginPath(),a.arc(d+Math.cos(k)*30*(L<6,-1)*Math.cos(k)*0+(L-5)*5,196+Math.sin(L/10*Math.PI)*10,3,0,7),a.fill()}}c.includes("scarf")&&(a.fillStyle=s.trim||"#e84a6f",a.beginPath(),a.ellipse(d,186,40,14,0,0,7),a.fill(),a.fillRect(d+10,186,16,50)),c.includes("camera")&&(a.fillStyle="#222",a.fillRect(d-22,208,44,30),b(d,224,11,11,"#557"),b(d,224,6,6,"#9bd"),a.strokeStyle="#333",a.lineWidth=4,a.beginPath(),a.moveTo(d-30,184),a.lineTo(d-20,210),a.moveTo(d+30,184),a.lineTo(d+20,210),a.stroke()),c.includes("pins")&&(b(d+44,214,5,5,"#fff"),b(d+54,226,4,4,"#4ae0c0"),b(d+40,228,3,3,"#e84a6f")),b(d-f+2,v+4,7,11,m),b(d+f-2,v+4,7,11,m),a.fillStyle=s.skin,a.beginPath(),a.moveTo(d-f,v-20),a.quadraticCurveTo(d-f,v-g,d,v-g),a.quadraticCurveTo(d+f,v-g,d+f,v-20),a.quadraticCurveTo(d+f,v+34,d+16,v+g-4),a.quadraticCurveTo(d,v+g+4,d-16,v+g-4),a.quadraticCurveTo(d-f,v+34,d-f,v-20),a.fill(),b(d-26,v+22,10,6,"rgba(230,110,100,0.16)"),b(d+26,v+22,10,6,"rgba(230,110,100,0.16)"),c.includes("earrings")&&(b(d-f,v+22,4,8,"#f4d060"),b(d+f,v+22,4,8,"#f4d060")),c.includes("pearls")&&(b(d-f,v+18,4,4,"#f6f0e8"),b(d+f,v+18,4,4,"#f6f0e8"),b(d-f,v+26,5,5,"#f6f0e8"),b(d+f,v+26,5,5,"#f6f0e8"));const w=v+2,A=21;let U=1,I=0,_=0,S="flat",V=1;switch(t){case"smile":S="smile",U=.85;break;case"laugh":S="laugh",U=.25,I=-2;break;case"sad":S="sad",_=-5,U=.8;break;case"scared":S="o",_=-6,U=1.3,V=.7,I=-4;break;case"angry":S="sad",_=7,U=.8,I=3;break;case"worried":S="wavy",_=-5;break;case"smirk":S="smirk",U=.75,_=2;break;case"surprised":S="o",U=1.25,I=-5;break;case"blank":V=.8;break}if(s.brows==="strict"&&(_+=4),c.includes("maskface")){a.fillStyle="#e8e4d8",a.beginPath(),a.ellipse(d,v,f-2,g-2,0,0,7),a.fill(),b(d-20,v-4,9,12,"#111"),b(d+20,v-4,9,12,"#111"),a.strokeStyle="#111",a.lineWidth=4,a.beginPath(),a.moveTo(d-24,v+26),a.quadraticCurveTo(d,v+48,d+24,v+26),a.stroke();for(let L=-2;L<=2;L++)a.beginPath(),a.moveTo(d+L*9,v+30),a.lineTo(d+L*9,v+40),a.stroke()}else{for(const k of[-1,1]){const N=d+k*A;s.shadow&&b(N,w-4,13,9,s.shadow+"99"),a.save(),a.beginPath(),a.ellipse(N,w,11,8*Math.min(U,1.3),0,0,7),a.clip(),a.fillStyle="#f6f1ea",a.fillRect(N-12,w-12,24,24),b(N+(t==="smirk"?2:0),w+.5,7*V,7*V,s.eyes),b(N+(t==="smirk"?2:0),w+.5,3.4*V,3.4*V,"#120a08"),b(N-2.5,w-3,2,2,"#fff"),a.fillStyle=m,a.fillRect(N-12,w-12,24,5+(1-Math.min(U,1))*6),a.restore(),a.strokeStyle="#1a1010",a.lineWidth=s.lips||s.shadow?3:2.2,a.beginPath(),a.ellipse(N,w,11,8*Math.min(U,1.3),0,Math.PI*1.05,Math.PI*1.95),a.stroke(),(s.lips||s.shadow)&&(a.beginPath(),a.moveTo(N+k*10,w-3),a.lineTo(N+k*15,w-7),a.stroke()),t==="laugh"&&(a.strokeStyle="#1a1010",a.lineWidth=2.5,a.beginPath(),a.arc(N,w+4,9,Math.PI*1.15,Math.PI*1.85),a.stroke()),a.strokeStyle=me(h==="#f0d98a"||h==="#e8e0f0"||h==="#e8e8f0"?"#a88a4a":h,-.25),a.lineWidth=s.brows==="strict"?4.5:3.2,a.lineCap="round",a.beginPath();const J=w-16+I;a.moveTo(N-k*10,J+_*.5+(s.brows==="arch"?1:0)),a.quadraticCurveTo(N,J-(s.brows==="arch"?5:2),N+k*11,J-_*.5+(s.brows==="arch"?2:0)),a.stroke()}a.strokeStyle=m,a.lineWidth=2,a.beginPath(),a.moveTo(d-1,v+10),a.quadraticCurveTo(d-5,v+22,d+2,v+23),a.stroke();const L=v+37;if(a.strokeStyle=s.lips||"#7a3a34",a.fillStyle=s.lips||"#7a3a34",a.lineWidth=s.lips?4:2.6,a.lineCap="round",a.beginPath(),S==="flat"&&(a.moveTo(d-9,L),a.quadraticCurveTo(d,L+2,d+9,L),a.stroke()),S==="smile"&&(a.moveTo(d-12,L-2),a.quadraticCurveTo(d,L+8,d+12,L-2),a.stroke()),S==="smirk"&&(a.moveTo(d-9,L+1),a.quadraticCurveTo(d+2,L+4,d+13,L-4),a.stroke()),S==="sad"&&(a.moveTo(d-10,L+3),a.quadraticCurveTo(d,L-4,d+10,L+3),a.stroke()),S==="wavy"&&(a.moveTo(d-10,L),a.quadraticCurveTo(d-5,L-4,d,L),a.quadraticCurveTo(d+5,L+4,d+10,L),a.stroke()),S==="o"&&(a.fillStyle="#4a1a1a",a.ellipse(d,L+1,6,8,0,0,7),a.fill(),a.stroke()),S==="laugh"&&(a.fillStyle="#4a1a1a",a.moveTo(d-14,L-4),a.quadraticCurveTo(d,L+18,d+14,L-4),a.closePath(),a.fill(),a.stroke(),a.fillStyle="#fff",a.fillRect(d-8,L-3,16,4)),c.includes("freckles")){a.fillStyle=me(s.skin,-.3);for(const[k,N]of[[-30,14],[-24,18],[-18,13],[-26,10],[30,14],[24,18],[18,13],[26,10],[-4,16],[5,15]])a.beginPath(),a.arc(d+k,v+N,1.6,0,7),a.fill()}c.includes("mole")&&b(d+24,v+30,2.2,2.2,"#3a1a14")}if(c.includes("glasses")){a.strokeStyle="#222",a.lineWidth=3;for(const L of[-1,1])a.beginPath(),a.ellipse(d+L*A,w,15,13,0,0,7),a.stroke(),a.fillStyle="rgba(190,225,255,0.18)",a.fill();a.beginPath(),a.moveTo(d-6,w),a.lineTo(d+6,w),a.stroke()}if(c.includes("visor")&&(a.fillStyle=(s.trim||"#40e0d0")+"cc",a.fillRect(d-f-2,w-11,f*2+4,20),a.fillStyle="#ffffff55",a.fillRect(d-f+4,w-8,30,3)),c.includes("maskhalf")&&(a.fillStyle="#e8c36a",a.beginPath(),a.ellipse(d,w-2,f-2,18,0,0,7),a.fill(),b(d-A,w,8,5,"#120a08"),b(d+A,w,8,5,"#120a08")),a.fillStyle=h,x!=="none"){const L=v-g-8;if(a.beginPath(),a.moveTo(d-f-3,v-8),a.quadraticCurveTo(d-f-6,L,d,L-2),a.quadraticCurveTo(d+f+6,L,d+f+3,v-8),s.bangs?(a.quadraticCurveTo(d+f-6,v-18,d+f-10,v-14),a.lineTo(d-f+10,v-14),a.quadraticCurveTo(d-f+6,v-18,d-f-3,v-8)):x==="short"||x==="bun"||x==="ponytail"?(a.quadraticCurveTo(d+f-4,v-34,d+10,v-40),a.quadraticCurveTo(d-20,v-44,d-f-3,v-8)):(a.quadraticCurveTo(d+f-2,v-30,d-8,v-44),a.quadraticCurveTo(d-f+4,v-30,d-f-3,v-8+(x==="bob"||x==="bobLong"?30:10))),a.fill(),s.bangs){a.strokeStyle=u,a.lineWidth=1.5;for(let k=-3;k<=3;k++)a.beginPath(),a.moveTo(d+k*11,v-40),a.lineTo(d+k*12,v-15),a.stroke()}if(x==="bob"||x==="bobLong"||x==="long"||x==="longStyled"||x==="glam"||x==="rapunzel"||x==="curls"){a.fillStyle=h;const k=x==="bob"?152:x==="bobLong"?172:x==="curls"?150:236;a.fillRect(d-f-8,v-10,10,k-v+10),a.fillRect(d+f-2,v-10,10,k-v+10),(x==="bob"||x==="bobLong")&&(b(d-f-2,k-4,9,8,h),b(d+f+2,k-4,9,8,h))}if(y)for(let k=0;k<9;k++)b(d-48+k*12,v-g+2+k%2*6+Math.abs(k-4)*3,12,12,k%2?h:p);if(x==="fluffy")for(let k=0;k<8;k++)b(d-46+k*13,v-g+4+k%2*5+Math.abs(k-3.5)*3.5,13,12,k%2?p:h);a.strokeStyle=p,a.lineWidth=3,a.beginPath(),a.arc(d-8,v-30,30,Math.PI*1.15,Math.PI*1.5),a.stroke()}c.includes("hat")&&(a.fillStyle="#2a2a2e",a.beginPath(),a.ellipse(d,v-36,80,12,0,0,7),a.fill(),a.fillStyle="#3a3a40",a.beginPath(),a.moveTo(d-46,v-38),a.quadraticCurveTo(d-44,v-86,d,v-84),a.quadraticCurveTo(d+44,v-86,d+46,v-38),a.fill(),a.fillStyle="#111",a.fillRect(d-46,v-48,92,9)),c.includes("crown")&&(a.fillStyle="#f4d060",a.beginPath(),a.moveTo(d-38,v-52),a.lineTo(d-42,v-92),a.lineTo(d-20,v-70),a.lineTo(d,v-98),a.lineTo(d+20,v-70),a.lineTo(d+42,v-92),a.lineTo(d+38,v-52),a.fill(),b(d,v-62,6,6,"#d02040")),c.includes("headphones")&&(a.strokeStyle="#222",a.lineWidth=8,a.beginPath(),a.arc(d,v-8,f+8,Math.PI*1.08,Math.PI*1.92),a.stroke(),a.fillStyle="#222",a.fillRect(d-f-14,v-12,16,34),a.fillRect(d+f-2,v-12,16,34));const B=l.toDataURL();return qa.set(e,B),B}const qv={chars:"Персонажи",places:"Места",items:"Предметы",clues:"Улики",script:"Сценарий"},Is={camera:{name:"Фотоаппарат Василисы",desc:"Запасная камера. «Плёнка здесь иногда видит больше, чем глаза». Клавиша C."},marionette:{name:"Двуликая марионетка",desc:"Добыча Рубена. У куклы два лица, спереди и сзади, и вырезана она как ключ."},lantern:{name:"Бумажный фонарик",desc:"С фестиваля Матвея. Внутри записка: «Свои сто шагов я прошёл сам»."},archive_card:{name:"Каталожная карточка",desc:"Нашла Эрика. Шифр архива Театра имени М. Ковалевского."},braid:{name:"Коса Лизы",desc:"Сто локтей прекрасной верёвки. Волосы Лиза оставила башне, а косу забрала себе."},demo:{name:"Демо-запись Ангелины",desc:"Песня, которую не писал комитет."},flashlight:{name:"Фонарь",desc:"Старый, тяжёлый, с жёлтым лучом. Полина держит его двумя руками."},porch_key:{name:"Ключ из-под горшка",desc:"Конечно, под цветочным горшком. Где же ещё."},owner_mask:{name:"Маска Хозяина",desc:"Белая, пустая изнутри. На подкладке: «Алла Ева»."},e_photo:{name:"Фото: Мэй и Лидия",desc:"«Сестрёнке от той, кто всегда в третьем ряду. Л.»"},e_contract:{name:"Контракт Вронской",desc:"Главную роль «передали» в четверг. В графе «поручитель» стоит Алла Ева."},e_letter:{name:"Записка Вейсу",desc:"«Спасибо за цветы… увидимся у моря. Л.»"},e_ticket:{name:"Квитанция камеры хранения",desc:"Суббота. Чемодан кожаный. Сдала: Вронская Л."},e_matches:{name:"Спички «Синей ноты»",desc:"Просто спички. Или нет."},gear:{name:"Шестерня",desc:"Латунная, от башенного механизма."},weight:{name:"Гиря",desc:"Противовес. Тяжёлая, но Лиза помогает волосами."},tower_key:{name:"Ключ с люстры",desc:"Висел там, где «принцессе не достать»."},emp:{name:"Глушилка",desc:"Гаджет Ноля. На пять секунд слепит охрану. Клавиша G. Зарядов мало."}},It=(i,t,e,n,s)=>({cat:i,title:t,text:e,char:n,expr:s}),zo={cast:It("chars","Труппа","Полина, Рубен, Матвей, Эрика, Лиза, Ангелина. Всем пришли письма «Режиссёр: Варвара», и никто особо не удивился.","varya","smile"),c_alla:It("chars","Алла Ева","Прима. Опаздывает, требует, перебивает. Иногда бывает права, и вот это раздражает сильнее всего.","alla","smirk"),c_polina:It("chars","Полина","Боялась весь особняк и всё равно прошла его одна. Замечает узоры, которые я пропускаю.","polina","smile"),c_ruben:It("chars","Рубен","Отказался и от моего плана, и от золота. Зато вынес куклу и вывел всю команду.","ruben","smile"),c_matvey:It("chars","Матвей","Сделал свои сто шагов сам. А мои сто шагов назад дались мне труднее, чем я думала.","matvey","smile"),c_erika:It("chars","Эрика","Закрыла дело так, как считала правильным. Проверяет факты, даже когда они ей не нравятся.","erika","neutral"),c_liza:It("chars","Лиза","Ушла из башни раньше, чем её успели спасти. Волосы оставила, а косу забрала.","liza","laugh"),c_angelina:It("chars","Ангелина","Спела своё, а агентству остались фонограмма и чужое лицо на экранах.","angelina","smirk"),c_artemiy:It("chars","Артемий","Строгий он только снаружи. Кормит школьного кота и совсем не умеет врать.","artemiy","neutral"),troupe:It("chars","Второй состав","Василиса, Дана, Нина, Аня и Оля уехали на гастроли со «Снежной королевой». Это они меня рекомендовали. К премьере вернутся и просили оставить им третий ряд.","vasilisa","smile"),doors:It("places","Шесть дверей","В кармане сцены шесть дверей, и каждая ведёт в свой жанр. Мокрая, неоновая, школьная, с матовым стеклом, книга и зеркало."),shadows:It("places","Тени держат","В этом театре по тени можно ходить, если её отбрасывает правильная декорация."),masks:It("places","Три маски","Комедия показывает смешное, Трагедия сломанное и спрятанное, а Драма то, что чувствуют. Клавиши 1, 2, 3."),invite:It("clues","Приглашение Кукольника","Пометки на полях сделаны знакомым почерком, уверенным и немного командным."),camera:It("clues","Плёнка видит больше","Василиса советует снимать всё странное и сравнивать."),mirror:It("clues","Отражение опаздывает","В гримёрке отражение поправило серёжку. Я не ношу серёжки."),missing:It("clues","Труппа исчезла","Погас свет, и на сцене никого не осталось. Алла Ева даже не удивилась. Мокрые следы ведут за кулисы."),photo_inside:It("clues","Снимок «до»","Фото, где мы с Полиной уже внутри особняка, сделано с крыльца, ещё до того, как мы вошли. А в архиве оно числится уже неделю."),marionette:It("clues","Двуликая кукла","У марионетки два лица. Рубену это не понравилось. Мне тоже."),card:It("clues","Алла Ева в сороковых","В городе Эрики её имя стоит на афишах 1940-х. Она не может быть такой старой. Если только дело тут вообще не в возрасте."),alla_knows:It("clues","Она знает про утренник","Алла Ева помнит, как я в семь лет забыла слова. Этого даже мама не помнит."),one_shadow:It("clues","Одна тень","В маске Трагедии видно, что у Аллы Евы нет своей тени. Под ней лежит моя."),maquette:It("clues","Макет с коробочками","Для каждого из друзей заранее сделали по коробке со своим жанром."),twins:It("clues","Склеенные фигурки","В центре макета стояли две фигурки спиной к спине, в красном платье и в красном лонгсливе. Потом их разломали."),timegap:It("clues","Пропавшие часы","Я потеряла два с половиной часа в мастерской. Что я делала в это время?"),handwriting:It("clues","Петля на «р»","Эрика говорит, что письма Кукольника, пометки в сценарии и мой блокнот написаны одной рукой."),ledger:It("clues","Протокол собрания","Труппа голосовала за меня. Худрук воздержался: «не могу голосовать за себя»."),contract:It("clues","Две подписи","«Алла Ева» и «К.» на контракте: нажим один, чернила одни, а росчерки разные."),seating:It("clues","Третий ряд","«Рот открывать, звук не давать». А на обороте детским почерком: «Меня будет видно из любого ряда»."),drafts:It("clues","Черновики приглашения","Три черновика письма мне. Моим почерком."),puppets:It("clues","Одна вага","Шесть марионеток на одной ваге, и нитки не завязаны."),kukolnik:It("clues","Кабинет худрука","Жакет моего размера, мятная конфета в кармане, почерк с петлёй на «р». Совпадений становится многовато."),poses:It("clues","Одна поза","В большом зеркале мы с Аллой Евой стоим одинаково. И стоит она на моём месте."),knotes:It("clues","Записки К.","Кукольник всегда знает, где я и что я уже сделала. И всегда пишет «не благодари»."),casting:It("clues","Лист распределения","Роль можно вписать самой, а можно спросить. Второе выглядит неряшливо, зато честно."),act4:It("clues","Она расчистила сцену","Во всех шести мирах была Алла Ева, только под разными масками. Каждому дала главную роль, подальше от своей."),script:It("script","The Queen's Last Curtain","Королева, которой нужны аплодисменты, и Молодая Девушка. На страницах описано то, что ещё не случилось."),program:It("script","Финал из программки","«…и когда декорации исчезают, зал видит, что на сцене стоит один человек»."),page8:It("script","Страница 8","Королева рассылает приглашённых по чужим пьесам. «Я всем дала по спектаклю. И себе тоже»."),steps:It("script","Ремарка Матвея","«Режиссёр отходит на сто шагов, и сцена продолжается без него. И становится только лучше»."),braid:It("script","Ремарка Лизы","«Принцесса выходит сама. Спасатель опаздывает. Никто не пострадал, кроме сюжета»."),demo:It("script","Ремарка Ангелины","«Фонограмма выключена. Поёт та, чьё это лицо»."),n_pol_book:It("script","Проклятая книга","«Дом смеётся над тем, кто играет назначенную ему роль. Перестанешь играть, и он замолчит»."),n_pol_photos:It("clues","Невозможные фотографии","На трёх снимках в библиотеке есть то, чего не бывает: тринадцатый час, человек без тени, отражение спиной. На рамках стоят годы, а на обороте нарисованы знаки."),n_pol_wall:It("clues","Обои с цветами","Полина заметила: в каждой комнате цветок на обоях повёрнут по-своему, то вверх, то вниз."),n_pol_owner:It("clues","Маска Хозяина","Под маской никого не было. А на подкладке театральный штамп и вышитое имя «Алла Ева»."),n_rub_plan:It("script","План ограбления","Мой план был расписан по минутам. Рубен сказал: «План нужен, чтобы было от чего отступать»."),n_rub_fortuna:It("clues","Леди Фортуна","Хозяйка казино в золотой полумаске заранее знала наш план. И сказала знакомое «дорогуша»."),n_mat_fake:It("script","Слишком красиво","Чем больше я ставлю «идеальных моментов», тем фальшивее они выглядят. Даже лепестки падают по команде."),n_mat_teacher:It("clues","Руководительница драмкружка","Вычёркивала Матвея из главных ролей и видела меня сквозь стену. Тоже говорит «дорогуша»."),n_eri_case:It("clues","Дело Вронской","Актриса Лидия Вронская исчезла накануне премьеры. Показания противоречат уликам."),n_eri_alla:It("clues","Поручительница","В контракте Вронской поручителем значится Алла Ева. Афиши с её именем висят по всему городу."),n_liz_role:It("script","Роль принцессы","Рассказчик, Фея и зеркальце хором объясняют Лизе, что принцессы должны ждать. А Лиза ждать не хочет."),n_liz_voice:It("clues","Голос Рассказчика","Говорит басом, но ставит ударения совсем как одна моя знакомая в красном."),n_ang_concept:It("script","Концепт «ANGEL♡»","Агентство хочет розовые волосы, новое имя и песню, написанную комитетом."),n_ang_assist:It("clues","Ассистентка","Это она предложила «заменить лицо». И она же сказала про третий ряд."),n_diva:It("clues","Третий ряд Аллы Евы","Она боится не свиста, а того, что зал посмотрит сквозь неё. Это многое объясняет, но ничего не оправдывает."),guestbook:It("clues","Книга отзывов","Все восторженные отзывы об Алле Еве написаны одним почерком, хотя подписи разные."),n_collapse:It("places","Театр складывается","Коридоры ведут в комнаты из чужих жанров. Здесь пригодилось всё, чему мы научились, и все, кто рядом.")},du=["polina","ruben","matvey","erika","liza","angelina"],Vo=(i,t)=>!!i["done_"+t],$v=i=>du.filter(t=>Vo(i,t)).length;function Xv(i,t,e){const n=[];if(!i.woke)return{main:"Уснуть. Завтра большой день"};if(!i.read_invite)return{main:"Прочитать конверт на столе",hint:"Подойдите к столу у двери и нажмите E"};if(t.has("camera")||n.push("Осмотреть гримёрку: на шкафу что-то лежит"),!i.met_cast)return{main:"Найти дорогу на сцену",hint:"Из гримёрки в коридор, оттуда дверь «В кулисы сцены»",extra:n};if(!i.act1)return{main:"Поговорить с труппой и взять сценарий",hint:"Режиссёрский столик слева на сцене",extra:n};if(!i.back_seen)return{main:"Пойти по мокрым следам за кулисы",hint:"Дверь «За кулисы» в глубине сцены справа"};if(!i.masks)return{main:"Осмотреть реквизиторский стол за кулисами"};if(!i.bridge)return{main:"Перебраться через открытый люк",hint:"Маски показывают то, чего не видно. Прожектор и фанерный мостик стоят рядом"};if(!Vo(i,"polina"))return{main:"Войти в мокрую дверь",hint:"Дверь за люком, из-под неё течёт вода"};const s=$v(i);return s<6?(du.some(r=>Vo(i,r)&&!i["cast_"+r])&&n.push("Решить, кто кого играет: лист распределения на сцене"),t.has("archive_card")&&!i.a_ledger&&n.push("Изучить архив на бельэтаже"),t.has("marionette")&&!i.office_open&&n.push("Найти замок для марионетки. Гобелен на бельэтаже стоит рассмотреть в маске Трагедии"),t.has("braid")&&!i.braid_used&&n.push("Лиза ждёт за кулисами: блок со старым тросом"),i.foyer0||n.push("Осмотреть фойе"),{main:`Вернуть труппу: друзей в театре ${s} из 6`,hint:"Двери в жанровые миры в кармане сцены, за люком",extra:n}):i.act4?(i.know_k||n.push("Заглянуть в кабинет худрука"),{main:"Гримёрка примы в служебном коридоре: поговорить с Аллой Евой",extra:n}):{main:"Подняться на сцену: друзья ждут",extra:n}}function Yv(i,t,e){return i.pol_light?{main:"Открыть засов подвала",hint:"Прихожая, дверь подвала"}:i.pol_dark?{main:"Полина: найти, откуда в доме берётся свет",hint:"Цветы на обоях над дверями повёрнуты по-разному"}:i.pol_open?{main:"Спуститься в подвал"}:i.pol_photos?{main:"Открыть замок подвала",hint:"Знаки с обратной стороны трёх «лгунов», по году от старшего к младшему"}:i.pol_book?{main:"Сфотографировать портреты и найти три аномалии",hint:"C: фотоаппарат. Не попадайтесь Хозяину, в шкафах можно спрятаться"}:t.has("porch_key")||e!=="pol_porch"?{main:"Осмотреть дом. Смех доносится снизу",hint:"Библиотека слева в прихожей"}:{main:"Попасть в дом",hint:"Полина знает, где в фильмах прячут ключи"}}function jv(i,t,e){return e==="rub_vault"?{main:"Взять марионетку"}:e==="rub_lasers"?{main:"Пройти коридор с лазерами",hint:"Лазеры мигают по ритму. Идите в паузе"}:i.rub_plan?e==="rub_hideout"?{main:"Лифт в «Фортуну»"}:!i.rub_card&&i.rub_gadget!=="key"?{main:"Взять ключ-карту на посту охраны, не попавшись",hint:i.rub_gadget==="emp"||i.rub_gadget==="holo"?"G: гаджет":"Красные конусы: зрение охраны"}:{main:"Лифт в хранилище",hint:"Справа в зале"}:{main:"Составить план на доске",hint:"Стол в центре гаража"}}function Kv(i){return i.mat_s1?i.mat_s2?i.mat_both?i.mat_arch_down?i.mat_steps?{main:"Отойти на сто шагов",hint:"Не оборачиваться"}:{main:"Подойти к Матвею у последнего фонаря"}:{main:"Поймать «идеальный кадр»",hint:"C: фотоаппарат. Оба должны попасть в объектив"}:{main:"Сцена 3: поставить Матвея и Артемия под арку фонариков"}:{main:"Сцена 2: кабинет литературы",hint:"Вход в школу"}:i.mat_umb?{main:"Дать знак дождю у ворот",hint:"Нужен точный момент"}:{main:"Сцена 1: «один зонт»",hint:"Стойка с зонтами у школы"}}function Zv(i,t){const e=[1,2,3,4,5].filter(s=>i["eri_t"+s]).length,n=["e_photo","e_contract","e_letter","e_ticket","e_matches"].filter(s=>t.has(s)).length;return i.eri_board?{main:"Вокзал. Перрон, полночный поезд"}:e<5||n<5?{main:`Опросить свидетелей (${e}/5) и собрать улики (${n}/5)`,hint:"Клуб, гримёрка певицы, студия, особняк, вокзал. Одна улика видна только в маске Трагедии"}:{main:"Доска расследования в конторе",hint:"Свяжите ложное показание с уликой, которая ему противоречит"}}function Jv(i,t,e){return e==="liz_base"?i.liz_hair?{main:"Подняться по косе"}:{main:"Позвать Лизу у подножия башни"}:e==="liz_top"?t.has("tower_key")?{main:"Дверь вниз"}:{main:"Достать ключ с люстры"}:e==="liz_mid"?i.liz_bridge?!i.liz_gear||!i.liz_weight?{main:"Запустить лифт: нужны шестерня и груз",hint:"Обе вещи на этом ярусе"}:{main:"Лифт-противовес"}:{main:"Перебраться через провал"}:i.liz_cut?{main:"Выйти из башни"}:{main:"Поговорить с Феей"}}function Qv(i){return i.ang_concept?i.ang_dance?i.ang_vocal?i.ang_photo?i.ang_mix?{main:"Шоукейс: встать за пульт"}:{main:"Студия звукозаписи: свести демо"}:{main:"Фотостудия: выбрать образ"}:{main:"Вокальная будка в зале тренировок"}:{main:"Зал тренировок: выучить связку",hint:"Тренер Ми"}:{main:"Прочитать концепт дебюта на стене"}}function t1(i,t,e){return e==="fin_collapse"?{main:"Пройти к сцене",hint:i.c_gap?i.c_lights?"Сфотографируйте двери: у настоящей есть тень":"Стена из особняка: маска Трагедии. Дальше ленты по ритму":"Лиза поможет с провалом"}:e==="fin_backstage"?{main:"Выйти на сцену"}:e==="fin_party"?i.cake_out?i.group_photo?{main:"Закончить вечер",hint:"Дверь справа"}:{main:"Общее фото",hint:"C: фотоаппарат"}:{main:"Задуть свечи на торте"}:e==="fin_bedroom"?{main:"Посмотреть в зеркало"}:{main:""}}function qc(i){const t=i.state.f,e=i.state.room||"";switch(e.split("_")[0]){case"hub":return Xv(t,i);case"pol":return Yv(t,i,e);case"rub":return jv(t,i,e);case"mat":return Kv(t);case"eri":return Zv(t,i);case"liz":return Jv(t,i,e);case"ang":return Qv(t);case"fin":return t1(t,i,e)}return{main:""}}const Us={move:{title:"Передвижение",text:"WASD или стрелки, с Shift быстрее. На телефоне джойстик слева."},act:{title:"Действие",text:"Подойдите к объекту с ромбиком и нажмите E (Enter, Пробел). Подсказка над объектом говорит, что произойдёт."},journal:{title:"Журнал",text:"Tab или кнопка ✎: задания, инвентарь, заметки, механики, фото, план театра и находки. Клавиша I сразу открывает инвентарь."},camera:{title:"Фотоаппарат",text:"C поднимает камеру, E делает снимок. Плёнка видит то, чего не видят глаза, так что сравнивайте снимки с реальностью сами."},masks:{title:"Маски",text:"1: Комедия (смешное), 2: Трагедия (сломанное и спрятанное), 3: Драма (чувства). Снять маску можно той же клавишей или Q. Комната остаётся той же, меняется только взгляд."},hide:{title:"Прятки",text:"В шкафу вас не видно. Подойдите и нажмите E, чтобы спрятаться или выйти."},stealth:{title:"Скрытность",text:"Цветной конус показывает поле зрения, не входите в него. Стены и крупная мебель закрывают обзор."},gadget:{title:"Гаджеты",text:"G: использовать гаджет из плана. Зарядов немного."},lasers:{title:"Лазеры",text:"Лазеры включаются по ритму. Дождитесь паузы и проходите."},pick:{title:"Листы выбора",text:"Выберите по одному варианту в каждой строке и подтвердите. Выбор влияет на дальнейшее."},timing:{title:"Тайминг",text:"Бегунок ходит туда-обратно. Нажмите E, когда он в красной зоне (в золотой будет идеально)."},rhythm:{title:"Ритм-сцены",text:"Ноты падают на линию: D F J K или стрелки. Облегчённый режим и калибровка задержки в настройках."},sequence:{title:"Хореография",text:"Запомните последовательность стрелок и повторите. В зеркальном раунде лево и право меняются местами."},board:{title:"Доска расследования",text:"Выберите показание слева и улику справа, которая ему противоречит, и свяжите ниткой."},runner:{title:"Погоня",text:"← → или A / D: менять полосу и уворачиваться."},lock:{title:"Кодовые замки",text:"Стрелками на дисках выставьте символы и нажмите «Проверить». Подсказка где-то рядом."}},Nr={family:{title:"Семейное фото",hint:"Гримёрка режиссёра",desc:"Мама с Сашей, папа с Настей, Вася, Софа и Катя. С моей полки."},hat:{title:"Болтливая шляпа",hint:"Гримёрка, вешалка. Смешнее в Комедии",desc:"Сорок лет позора задом наперёд."},plays1:{title:"Афиша «Люди любят»",hint:"Служебный коридор",desc:"Спектакль, в котором играла Варя. Роль маленькая, зато со смыслом."},plays2:{title:"Афиша «Глупее дурака, умнее умного»",hint:"Фойе",desc:"Ещё одна постановка с Варей. Название говорит само за себя."},hamlet:{title:"Гамлет одной актрисы",hint:"Служебный коридор",desc:"Алла Ева в роли Гамлета, Офелии и занавеса."},closet:{title:"Подсобка",hint:"Служебный коридор, дверь с табличкой «Инвентарь»",desc:"«Не забудь, что ты здесь уже была»."},matias:{title:"Матиас Ковалевский",hint:"Бельэтаж",desc:"Основатель театра. Подозрительно похож на Матвея."},cloak18:{title:"Номерок № 18",hint:"Гардероб в фойе",desc:"«Вернёшь после спектакля»."},guestbook:{title:"Книга отзывов",hint:"Фойе",desc:"Все отзывы одним почерком."},buffet:{title:"Бутафорские бутерброды",hint:"Буфет",desc:"Нарисованы. Даже шампанское крашеное."},piano:{title:"Мелодия шкатулки",hint:"Репетиционный зал",desc:"Рояль помнит ту же мелодию, что музыкальная шкатулка."},boxview:{title:"Вид из ложи",hint:"Ложа № 3 на бельэтаже",desc:"Прима репетирует поклон для пустого зала."},paint:{title:"Спор красок",hint:"Мастерская, в маске Комедии",desc:"Алая и красная. Ни малейшего сходства."},cat:{title:"Школьный кот",hint:"Глава Матвея, школьный двор",desc:"Самый мудрый персонаж этой истории."},manga:{title:"«100 шагов к неизбежному»",hint:"Глава Матвея, кабинет литературы",desc:"Томик манги на учительском столе. Закладка на сотой странице."},donut:{title:"Пончик охранника",hint:"Глава Рубена, пост охраны",desc:"Я не чудовище."},clock13:{title:"Тринадцатый час",hint:"Глава Полины, прихожая, в Комедии",desc:"БОМ. Для тех, кто опоздал на все двенадцать."},mirror_tale:{title:"Зеркальце из соседней сказки",hint:"Глава Лизы, покои принцессы",desc:"У них сокращения."}},$c=new Map,st=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)},e1={camera:i=>{st(i,4,10,24,16,"#26262c"),st(i,6,7,7,3,"#34343c"),st(i,22,8,4,2,"#c8c8d0"),st(i,11,12,11,11,"#4a4a58"),st(i,13,14,7,7,"#7aa0c8"),st(i,14,15,3,2,"#d8f0ff"),st(i,5,12,3,2,"#c41e3a")},marionette:i=>{st(i,6,2,20,2,"#5a4029");for(const t of[8,16,24])st(i,t,4,1,7,"#ddd");st(i,12,10,8,7,"#e8d8c0"),st(i,12,10,4,7,"#f4ecd8"),st(i,13,12,1,1,"#111"),st(i,18,12,1,1,"#111"),st(i,12,17,8,7,"#a3122a"),st(i,9,17,3,7,"#e8d8c0"),st(i,20,17,3,7,"#e8d8c0"),st(i,13,24,2,6,"#333"),st(i,17,24,2,6,"#333")},lantern:i=>{st(i,15,2,2,4,"#333"),st(i,9,6,14,18,"#e84a6f"),st(i,12,8,8,14,"#ffd060"),st(i,9,10,14,1,"#b03050"),st(i,9,18,14,1,"#b03050"),st(i,11,24,10,2,"#333"),st(i,14,26,4,4,"#f2c230")},archive_card:i=>{st(i,3,7,26,18,"#efe3c4"),st(i,3,7,26,3,"#8e1830");for(let t=0;t<4;t++)st(i,6,13+t*3,18-t*3,1,"#5a4029");st(i,22,18,4,4,"#3a2a14")},braid:i=>{for(let t=2;t<30;t++){const e=13+Math.sin(t/2.2)*4;st(i,e,t,6,1,t%4<2?"#8c6a45":"#6a4a2a")}st(i,12,26,8,3,"#c41e3a")},demo:i=>{st(i,3,8,26,17,"#1a1420"),st(i,6,10,20,7,"#ff9ad8"),st(i,9,19,14,4,"#333"),st(i,10,20,3,2,"#aaa"),st(i,19,20,3,2,"#aaa"),st(i,8,12,16,1,"#fff")},flashlight:i=>{st(i,6,13,16,7,"#3a3a40"),st(i,22,11,6,11,"#5a5a62"),st(i,23,12,4,9,"#fff4c8"),st(i,10,11,3,2,"#c41e3a")},porch_key:i=>{st(i,4,10,9,10,"#b08a2c"),st(i,6,12,5,6,"#000"),st(i,13,14,15,3,"#b08a2c"),st(i,22,17,2,4,"#b08a2c"),st(i,26,17,2,3,"#b08a2c")},tower_key:i=>{st(i,4,9,10,12,"#d4ae48"),st(i,6,11,6,8,"#000"),st(i,14,14,14,3,"#d4ae48"),st(i,21,17,2,4,"#d4ae48"),st(i,25,17,2,5,"#d4ae48"),st(i,7,6,4,3,"#e84a6f")},gear:i=>{st(i,8,8,16,16,"#b08a2c"),st(i,13,3,6,26,"#b08a2c"),st(i,3,13,26,6,"#b08a2c"),st(i,13,13,6,6,"#3a2a14")},weight:i=>{st(i,6,11,20,18,"#484e59"),st(i,10,7,12,5,"#5e6673"),st(i,13,3,6,5,"#343841"),st(i,8,14,3,12,"#78818f")},emp:i=>{st(i,6,9,20,15,"#22303a"),st(i,9,12,14,6,"#40e0d0"),st(i,13,4,2,5,"#888"),st(i,12,20,8,2,"#ff4fa0")},owner_mask:i=>{st(i,7,4,18,22,"#e8e4d8"),st(i,10,10,4,4,"#111"),st(i,18,10,4,4,"#111"),st(i,11,19,10,2,"#111"),st(i,9,17,2,2,"#111"),st(i,21,17,2,2,"#111")},e_photo:i=>{st(i,5,5,22,24,"#eee"),st(i,7,7,18,15,"#666"),st(i,10,11,4,9,"#222"),st(i,18,11,4,9,"#222"),st(i,11,9,3,3,"#bbb"),st(i,19,9,3,3,"#bbb")},e_contract:i=>{st(i,6,3,20,26,"#ececec");for(let t=0;t<6;t++)st(i,9,7+t*3,14,1,"#888");st(i,9,23,14,4,"#c41e3a")},e_letter:i=>{st(i,4,8,24,17,"#e8e8e8"),st(i,4,8,12,9,"#cfcfcf"),st(i,16,8,12,9,"#d8d8d8"),st(i,14,15,4,3,"#555")},e_ticket:i=>{st(i,4,9,24,14,"#ddd"),st(i,8,9,1,14,"#999");for(let t=0;t<3;t++)st(i,11,12+t*3,14,1,"#666")},e_matches:i=>{st(i,6,9,20,14,"#333"),st(i,6,9,20,3,"#6a8ad0");for(let t=0;t<4;t++)st(i,9+t*4,4,2,6,"#d8c8a0"),st(i,9+t*4,3,2,2,"#a3122a")}};function Xc(i){const t=$c.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=32;const n=e.getContext("2d");(e1[i]||(c=>{st(c,6,6,20,20,"#8a7a5a"),st(c,9,9,14,14,"#d4ae48")}))(n);const s=n.getImageData(0,0,32,32),r=s.data,o=new Uint8ClampedArray(r),l=(c,h)=>c>=0&&h>=0&&c<32&&h<32&&o[(h*32+c)*4+3]>40;for(let c=0;c<32;c++)for(let h=0;h<32;h++)if(!l(h,c)&&(l(h-1,c)||l(h+1,c)||l(h,c-1)||l(h,c+1))){const u=(c*32+h)*4;r[u]=22,r[u+1]=17,r[u+2]=20,r[u+3]=255}n.putImageData(s,0,0);const a=e.toDataURL();return $c.set(i,a),a}const Sn="#eadfc8",Ve="#b9a888",rn="#c9a35a",Xi="#b3142c",gi="#6e0a18",fs="#120c0d",Yc=(i,t,e,n=Sn,s=.16)=>`<path d="M${i},${t-e} L${i+e*s},${t-e*s} L${i+e},${t} L${i+e*s},${t+e*s} L${i},${t+e} L${i-e*s},${t+e*s} L${i-e},${t} L${i-e*s},${t-e*s}Z" fill="${n}"/>`,n1=(i,t,e,n=rn)=>{let s="";for(let r=0;r<16;r++){const o=r*Math.PI/8,l=r%2?e*.55:e,a=.06;s+=`<path d="M${i},${t} L${i+Math.cos(o-a)*6},${t+Math.sin(o-a)*6} L${i+Math.cos(o)*l},${t+Math.sin(o)*l} L${i+Math.cos(o+a)*6},${t+Math.sin(o+a)*6}Z" fill="${n}"/>`}return s+`<circle cx="${i}" cy="${t}" r="${e*.17}" fill="${n}" stroke="${fs}" stroke-width="1.5"/>`},jc=(i,t)=>`<g><path d="${i}" stroke="${Ve}" stroke-width="30" fill="none"/><path d="${i}" stroke="${fs}" stroke-width="30" stroke-dasharray="3 9" fill="none"/><path d="${i}" stroke="#2a2220" stroke-width="16" fill="none"/><path d="${i}" stroke="${Ve}" stroke-width="16" stroke-dasharray="2 22" fill="none" opacity=".8"/></g>`,Kc=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n}) scale(${e})">
  <path d="M0,0 C-10,40 -6,90 4,140" stroke="#3b4a34" stroke-width="5" fill="none"/><path d="M2,70 C-30,60 -52,72 -60,96 C-36,92 -14,86 2,74Z" fill="#3b4a34"/>
  ${[0,72,144,216,288].map(s=>`<path transform="rotate(${s})" d="M0,0 C-14,-20 -16,-52 0,-78 C16,-52 14,-20 0,0Z" fill="${Sn}" stroke="${Ve}" stroke-width="2"/><path transform="rotate(${s})" d="M0,-6 L0,-60" stroke="${Ve}" stroke-width="1.5"/>`).join("")}
  ${[-30,-10,10,30].map(s=>`<path transform="rotate(${s})" d="M0,0 L0,-46" stroke="${rn}" stroke-width="1.6"/><ellipse transform="rotate(${s})" cx="0" cy="-48" rx="3" ry="6" fill="#a0602a"/>`).join("")}</g>`,i1=(i,t,e)=>`<g transform="translate(${i} ${t}) scale(${e})">
  <path d="M0,20 C6,70 -4,110 10,150" stroke="#2c3a2a" stroke-width="5" fill="none"/>
  ${[0,90,180,270].map((n,s)=>`<path transform="rotate(${n+20})" d="M0,0 C-44,-6 -58,-48 -30,-66 C-8,-80 22,-70 30,-50 C40,-24 22,-4 0,0Z" fill="${s%2?Xi:"#c8202e"}" stroke="${gi}" stroke-width="2"/>`).join("")}
  ${[0,60,120,180,240,300].map(n=>`<path transform="rotate(${n})" d="M0,0 C-6,-14 -4,-30 0,-40" stroke="${gi}" stroke-width="1.5" fill="none" opacity=".7"/>`).join("")}
  <circle r="14" fill="#1c1416"/>${[0,45,90,135,180,225,270,315].map(n=>`<circle transform="rotate(${n})" cx="0" cy="-20" r="2.4" fill="#1c1416"/>`).join("")}</g>`,Er=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n})"><path d="M-6,0 C-6,${e*.3} -5,${e*.55} -4,${e*.62} L-3.4,${e*.66} C-4,${e*.8} -3,${e*.95} 0,${e} C3,${e*.95} 4,${e*.8} 3.4,${e*.66} L4,${e*.62} C5,${e*.55} 6,${e*.3} 6,0Z" fill="${Sn}" stroke="#7a6a52" stroke-width="1.6"/>${[.3,.62].map(s=>`<path d="M-4,${e*s} C-1,${e*s+3} 1,${e*s+3} 4,${e*s}" stroke="#7a6a52" stroke-width="1.2" fill="none"/>`).join("")}<path d="M-2.4,${e-7} C-1,${e-3} 1,${e-3} 2.4,${e-7}" stroke="#a89878" stroke-width="1.2" fill="none"/></g>`,s1=`<g transform="translate(1010 34) rotate(14)">
  <path d="M84,-40 C110,-30 140,-38 168,-60 L184,-20 C160,0 128,10 100,8Z" fill="#1c1416" stroke="${Ve}" stroke-width="1.5"/>
  ${[0,1,2,3,4,5].map(i=>`<path d="M${84+i*3},${-38+i*8} l-10,4 l10,3" stroke="${Ve}" stroke-width="1.4" fill="none"/>`).join("")}
  <path d="M86,-36 C60,-30 34,-24 10,-6 C0,4 -4,18 2,30 C18,44 46,46 70,38 C84,30 96,10 100,4Z" fill="${Sn}" stroke="#7a6a52" stroke-width="2"/>
  ${[[20,-2],[36,-4],[52,-4],[66,0]].map(([i,t])=>`<path d="M${i},${t} C${i+4},${t+8} ${i+6},${t+16} ${i+4},${t+26}" stroke="#a89878" stroke-width="1.3" fill="none"/>`).join("")}
  ${Er(6,22,58,22)}${Er(24,32,70,10)}${Er(44,36,72,-2)}${Er(62,32,60,-14)}
  <g transform="translate(86 20) rotate(-58)"><path d="M-7,0 C-7,20 -5,34 0,40 C5,34 7,20 7,0Z" fill="${Sn}" stroke="#7a6a52" stroke-width="1.6"/></g>
  ${[[10,10],[30,22],[50,26],[70,20]].map(([i,t])=>`<path d="M${i},${t} l4,2" stroke="#7a6a52" stroke-width="1.4"/>`).join("")}</g>`,r1=`<g transform="translate(1046 232) rotate(-14) scale(.85)"><path d="M-46,-38 C-20,-56 26,-56 50,-40 C58,-12 54,26 38,52 C26,70 6,78 -6,70 C-16,62 -8,40 -26,30 C-44,20 -56,-12 -46,-38Z" fill="${Sn}" stroke="${Ve}" stroke-width="2.5"/>
  <path d="M-30,-14 C-20,-24 -4,-22 2,-10 C-6,-2 -22,-2 -30,-14Z" fill="${fs}"/><path d="M14,-12 C22,-24 38,-22 42,-10 C36,0 22,0 14,-12Z" fill="${fs}"/>
  <path d="M-48,-30 C-20,-46 26,-48 50,-34" stroke="${rn}" stroke-width="2.5" fill="none"/><path d="M4,8 C6,20 10,30 18,34" stroke="${Ve}" stroke-width="2" fill="none"/></g>`,a1=`<g transform="translate(470 676) rotate(-12)"><rect x="-58" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Ve}" stroke-width="3"/><rect x="14" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Ve}" stroke-width="3"/>
  <ellipse cx="-36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${Sn}" stroke-width="3"/><ellipse cx="36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${Sn}" stroke-width="3"/><rect x="-14" y="-12" width="28" height="18" rx="4" fill="${rn}"/>
  <path d="M-46,-22 L-46,18 M24,-22 L24,18" stroke="${Sn}" stroke-width="3" opacity=".6"/><path d="M0,-12 C10,-50 60,-60 90,-48" stroke="${rn}" stroke-width="3" fill="none"/></g>`,o1=`<g transform="translate(890 668) rotate(-10)"><rect x="-74" y="-44" width="148" height="88" rx="6" fill="#d8ccb2" stroke="${Ve}" stroke-width="3"/><rect x="-66" y="-36" width="132" height="72" fill="none" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M-46,20 L-46,-6 L0,-24 L46,-6 L46,20Z" fill="none" stroke="#5a4a3a" stroke-width="2"/>${[-34,-18,-2,14,30].map(i=>`<path d="M${i},20 L${i},0" stroke="#5a4a3a" stroke-width="2"/>`).join("")}<path d="M-56,24 L56,24" stroke="#5a4a3a" stroke-width="2"/>
  <text x="0" y="-27" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" fill="#5a4a3a" letter-spacing="2">ТЕАТРЪ</text><circle cx="-74" cy="0" r="8" fill="${fs}"/><circle cx="74" cy="0" r="8" fill="${fs}"/></g>`;function pu(i="lg"){return`<svg class="logo-svg" viewBox="0 0 1200 800" role="img" aria-label="THE OTHER ME: APPLAUSE, PLEASE!" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="${i}iv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6eedc"/><stop offset=".55" stop-color="${Sn}"/><stop offset="1" stop-color="#a8977a"/></linearGradient>
  <linearGradient id="${i}rd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2283c"/><stop offset=".6" stop-color="${Xi}"/><stop offset="1" stop-color="${gi}"/></linearGradient>
  <linearGradient id="${i}cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${gi}"/><stop offset=".5" stop-color="${Xi}"/><stop offset="1" stop-color="${gi}"/></linearGradient>
  <filter id="${i}worn" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -9 6.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <radialGradient id="${i}vig"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <clipPath id="${i}arch"><path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262Z"/></clipPath>
  <filter id="${i}glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="5" result="b0"/><feColorMatrix in="b0" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g class="lg-orn" stroke-linejoin="round"><g transform="translate(600 262) scale(1.32) translate(-600 -262)">
  <path d="M360,262 C360,170 440,118 520,112 C556,108 584,96 600,78 C616,96 644,108 680,112 C760,118 840,170 840,262" stroke="${rn}" stroke-width="5" fill="none"/>
  <path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262" stroke="${Ve}" stroke-width="2" fill="none"/>
  ${[400,470,730,800].map((t,e)=>`<circle cx="${t}" cy="${[196,142,142,196][e]}" r="5" fill="${rn}"/>`).join("")}
  <ellipse cx="600" cy="420" rx="560" ry="330" fill="url(#${i}vig)"/>
  <g clip-path="url(#${i}arch)"><rect x="370" y="90" width="460" height="180" fill="#160a0c"/>
    <path d="M370,120 L830,120 L830,150 C800,206 760,214 730,170 C700,226 650,230 600,178 C550,230 500,226 470,170 C440,214 400,206 370,150Z" fill="url(#${i}cur)"/>
    <path d="M370,150 C400,206 440,214 470,170 C500,226 550,230 600,178 C650,230 700,226 730,170 C760,214 800,206 830,150" stroke="${gi}" stroke-width="3" fill="none"/>
    ${[420,530,670,780].map(t=>`<path d="M${t},128 C${t+10},160 ${t-6},180 ${t+4},200" stroke="#e2283c" stroke-width="2" fill="none" opacity=".5"/>`).join("")}
    <path d="M370,130 C410,170 420,230 400,270 L370,270Z" fill="${Xi}"/><path d="M830,130 C790,170 780,230 800,270 L830,270Z" fill="${Xi}"/></g>
  ${[470,730].map(t=>`<path d="M${t},170 L${t},214" stroke="${rn}" stroke-width="2"/><path d="M${t-6},214 L${t+6},214 L${t+4},236 L${t-4},236Z" fill="${rn}"/>`).join("")}
  ${n1(600,92,40)}</g>
  <path d="M372,262 L828,262" stroke="${rn}" stroke-width="4"/><path d="M386,268 L814,268" stroke="${Ve}" stroke-width="1.5"/>
  ${jc("M40,560 C90,520 160,540 190,600 C220,660 300,700 380,690")}
  ${jc("M1060,420 C1100,392 1150,402 1162,444 C1172,480 1150,506 1124,504")}
  
  ${Kc(110,440,.85,-18)}${Kc(162,486,.55,24)}
  ${i1(1104,610,.68)}
  ${s1}
  ${[[1002,104,1030,196],[1026,120,1070,200],[1052,126,940,290],[1076,118,1140,420]].map(([t,e,n,s])=>`<path d="M${t},${e} L${n},${s}" stroke="${Ve}" stroke-width="1.6" opacity=".85"/>`).join("")}
  ${r1}
  <g stroke="${Ve}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M268,372 C226,352 196,370 200,398 C204,422 236,424 244,404 C250,388 232,380 224,392"/><path d="M268,372 C240,330 260,300 290,300"/><path d="M262,440 C230,450 210,474 226,494"/>
    <path d="M940,372 C982,352 1012,370 1008,398 C1004,422 972,424 964,404 C958,388 976,380 984,392"/><path d="M940,440 C972,450 992,474 976,494"/>
    ${[[212,470],[236,316],[998,470]].map(([t,e])=>`<path d="M${t},${e} l-8,-10 M${t},${e} l10,-6"/>`).join("")}
  </g>
</g>
<g filter="url(#${i}worn)">
  <text x="248" y="246" font-family="Aurelia, serif" font-size="58" fill="url(#${i}iv)" letter-spacing="8">THE</text><path d="M246,258 L360,258" stroke="${rn}" stroke-width="2"/>
  <text x="600" y="418" text-anchor="middle" font-family="Aurelia, serif" fill="url(#${i}iv)" stroke="#2a1e1a" stroke-width="1.5" paint-order="stroke"><tspan font-size="212" dy="10">O</tspan><tspan font-size="168" dy="-10" letter-spacing="4">THER</tspan><tspan font-size="212" dx="30" dy="10">M</tspan><tspan font-size="168" dy="-10">E</tspan><tspan font-size="150" fill="${rn}" dx="10">:</tspan></text>
  </g>
<text x="612" y="528" text-anchor="middle" font-family="Cintarini, cursive" font-size="104" fill="url(#${i}rd)" stroke="url(#${i}rd)" stroke-width="3.2" transform="rotate(-4 600 510)" filter="url(#${i}glow)">Applause, Please!</text>
<g class="lg-orn2" transform="translate(0 -20)">
  <path d="M280,630 C380,612 470,640 540,626 C570,620 586,614 600,604 C614,614 630,620 660,626 C730,640 820,612 920,630" stroke="${Ve}" stroke-width="2.5" fill="none"/>
  <path d="M330,618 C300,600 300,580 322,578 M870,618 C900,600 900,580 878,578" stroke="${Ve}" stroke-width="2" fill="none"/>
  <path d="M560,640 L600,736 L640,640 C626,652 612,650 600,644 C588,650 574,652 560,640Z" fill="${Xi}"/><path d="M582,650 L600,712 L618,650" stroke="${gi}" stroke-width="2" fill="none"/>
  ${Yc(600,640,40,Sn,.12)}
  ${a1}${o1}
  ${[[300,150,16],[1030,190,10],[110,360,12],[1150,580,14],[250,520,9],[700,690,10],[1170,300,8],[60,700,10],[780,60,9],[420,70,7]].map(([t,e,n])=>Yc(t,e,n,rn)).join("")}
</g></svg>`}const We=()=>document.getElementById("ui");function de(i,t="",e="",n){const s=document.createElement(i);return t&&(s.className=t),e&&(s.innerHTML=e),n&&n.appendChild(s),s}const oe=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;"),Zc=[["hub_mezz","Бельэтаж",30,20,240,40,"2"],["hub_rehearsal","Репетиционный",30,70,70,40,"2"],["hub_archive","Архив",105,70,55,40,"2"],["hub_box","Ложа 3",165,70,45,40,"2"],["hub_office","Кабинет К.",215,70,55,40,"2"],["hub_foyer","Фойе",30,160,110,70,"1"],["hub_stage","Сцена и зал",150,160,120,70,"1"],["hub_corridor","Служебный коридор",30,240,240,34,"1"],["hub_dressing","Гримёрка режиссёра",30,282,75,34,"1"],["hub_costume","Костюмерная",110,282,70,34,"1"],["hub_workshop","Мастерская",185,282,85,34,"1"],["hub_backstage","Карман сцены",280,160,70,114,"1"],["hub_trap","Трюм под сценой",150,370,200,40,"0"]];function l1(i,t){const e=(o,l)=>`<text x="8" y="${o}" font-family="Playfair Display" font-size="10" fill="#8e1830" letter-spacing="2">${l}</text>`,n=Zc.map(([o,l,a,c,h,u])=>{const p=t[o]||o===i,m=o===i;return`<g><rect x="${a}" y="${c}" width="${h}" height="${u}" fill="${m?"#8e1830":p?"#efe0b8":"#d8cba8"}" stroke="#5a4029" stroke-width="${m?2:1}" ${p?"":'stroke-dasharray="3 2"'}/><text x="${a+h/2}" y="${c+u/2+3}" text-anchor="middle" font-family="Lora" font-size="8.5" fill="${m?"#fff4e0":p?"#2a1a14":"#9a8a6a"}">${p?l:"?"}</text></g>`}).join(""),s=[[150,60,150,160],[262,60,262,240],[250,274,250,370],[210,230,210,370],[85,230,85,240],[270,200,280,200],[55,274,55,282],[145,274,145,282],[228,274,228,282],[65,60,65,70],[132,60,132,70],[187,60,187,70],[242,60,242,70]].map(([o,l,a,c])=>`<line x1="${o}" y1="${l}" x2="${a}" y2="${c}" stroke="#a3122a" stroke-width="1.5" stroke-dasharray="2 2"/>`).join(""),r=Zc.some(o=>o[0]===i);return`<svg viewBox="0 0 360 420" style="width:100%;max-height:62vh;display:block" xmlns="http://www.w3.org/2000/svg">${e(14,"ЭТАЖ 2 · БЕЛЬЭТАЖ")}${e(150,"ЭТАЖ 1 · ПАРТЕР")}${e(362,"ПОД СЦЕНОЙ")}${s}${n}</svg><p class="warn">Пунктир, переходы и лестницы. «?», там вы ещё не были.${r?"":" Сейчас вы за пределами театра, в чужой пьесе."}</p>`}const c1=i=>`${Math.floor(i/3600)}:${String(Math.floor(i/60)%60).padStart(2,"0")}`,h1=pu("m");class u1{constructor(){this.modal=!1,this.dialogOpen=!1,this.modals=[],this.log=[],this.advance=null,this.auto=!1,this.placeEl=null,this.lastQuest="",this.skipping=!1,this.toastAt=0,this.lbEl=null,this.lbOn=!1,this.introPlayed=!1}init(){const t=We();this.hudEl=de("div","hud hidden","",t),this.maskRow=de("div","masks","",this.hudEl),this.hudR=de("div","hud-r","",this.hudEl),this.toasts=de("div","toasts","",t),this.promptEl=de("div","prompt hidden","",t),this.saveEl=de("div","savemark","✎ сохранено",t),this.lyricEl=de("div","lyric hidden","",t),this.dlg=de("div","dlg hidden",'<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>',t),this.vf=de("div","viewfinder hidden","<b>● REC</b><span>E / Enter, снимок · C / Esc, убрать камеру</span>",t),this.loadingEl=de("div","savemark","Меняем декорации…",t),this.loadingEl.style.right="auto",this.loadingEl.style.left=".8rem",this.dlg.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="hist"?this.history():n==="auto"?(this.auto=!this.auto,e.target.style.background=this.auto?"#8e1830":"",this.auto&&this.advance&&this.advance()):n==="skip"?(this.skipping=!0,this.advance&&this.advance()):this.advance&&this.advance()}),Zi(e=>{if(this.modal){e==="pause"&&this.closeTop();return}e==="act"&&this.advance&&this.advance()}),this.hudR.innerHTML='<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="inv" title="Инвентарь (I)">▣<span class="hb-n"></span></button><button class="hbtn" data-a="note" title="Журнал (Tab)">✎</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>',this.hudR.addEventListener("click",e=>{const n=e.target.closest("[data-a]")?.getAttribute("data-a");n==="cam"&&$i("camera"),n==="inv"&&$i("inventory"),n==="note"&&$i("notebook"),n==="pause"&&$i("pause")}),this.questEl=de("div","questbox","",this.hudEl),this.questEl.addEventListener("click",()=>this.notebook("quests")),this.maskRow.addEventListener("click",e=>{const n=e.target.closest(".maskb");n&&Tt.setMask(n.dataset.m)}),this.buildTouch(),this.applySettings()}applySettings(){document.documentElement.style.setProperty("--s",String(Pe.uiScale)),document.body.classList.toggle("contrast",Pe.contrast),qt.applyVolumes(),this.touchEl.classList.toggle("hidden",!Pe.touch||!Tt.running)}say(t){this.dialogOpen=!0,this.dlg.classList.remove("hidden"),this.prompt(null);const e=this.dlg.querySelector(".port"),n=e.querySelector("img"),s=this.dlg.querySelector(".name"),r=this.dlg.querySelector(".text");return e.classList.toggle("none",!t.portrait),t.portrait&&(n.src=t.portrait),s.innerHTML=t.name?`<i style="background:${t.color}"></i>${oe(t.name)}`:"",r.classList.toggle("it",t.italic),this.log.push({name:t.name,text:t.text,color:t.color}),this.log.length>250&&this.log.shift(),new Promise(o=>{const l=t.text;let a=0,c=!1,h,u;const p=Pe.textSpeed,m=()=>{clearInterval(h),clearTimeout(u),this.advance=null,o()},d=()=>{a=l.length,r.textContent=l,c=!0,clearInterval(h),this.auto&&(u=setTimeout(m,900+l.length*45))};if(Tt.fast||this.skipping&&t.seen||Ji("skip")&&t.seen){r.textContent=l,setTimeout(m,Tt.fast?0:60);return}this.skipping=!1,p?(r.textContent="",h=setInterval(()=>{a=Math.min(l.length,a+Math.max(1,Math.round(p/30))),r.textContent=l.slice(0,a),a%3===0&&/[а-яa-z]/i.test(l[a-1]||"")&&qt.blip(t.pitch),a>=l.length&&d()},33)):d(),this.advance=()=>{c?m():d()}})}sayHide(){this.dialogOpen=!1,this.dlg.classList.add("hidden"),this.skipping=!1}choice(t){if(Tt.fast)return Promise.resolve(Tt.autoChoice?Tt.autoChoice(t):0);const e=de("div","choices"+(this.dialogOpen?"":" solo"),"",We());let n=0;return this.skipping=!1,new Promise(s=>{const r=t.map((h,u)=>{const p=de("button","choice"+(h.mask?" mask":""),`<span class="n">${u+1}.</span>${oe(h.text)}`,e);return p.onclick=m=>{m.stopPropagation(),c(u)},p.onmouseenter=()=>{n=u,o()},p}),o=()=>r.forEach((h,u)=>h.classList.toggle("on",u===n)),l=Zi((h,u)=>{if(!this.modal){if(h==="up")n=(n+t.length-1)%t.length,qt.sfx("hover"),o();else if(h==="down")n=(n+1)%t.length,qt.sfx("hover"),o();else if(h==="act")c(n);else if(/^Digit[1-9]$/.test(u)){const p=parseInt(u.slice(5))-1;p<t.length&&c(p)}}}),a=this.advance;this.advance=null;const c=h=>{l(),e.remove(),qt.sfx("click"),this.advance=a,this.log.push({name:"→",text:t[h].text,color:"#d4ae48"}),setTimeout(()=>s(h),0)};o()})}history(){const e=this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map(n=>`<p>${n.name?`<b style="color:${n.name==="→"?"#8e1830":"#3a2a14"}">${oe(n.name)}</b> `:""}${n.name?"":"<i>"}${oe(n.text)}${n.name?"":"</i>"}</p>`).join("")||"<p><i>Пока никто ничего не сказал.</i></p>"}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`).querySelector(".body");e.scrollTop=e.scrollHeight}hudShow(t){this.hudEl.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!Pe.touch),t||(this.sayHide(),this.prompt(null),this.lyric(null))}hud(){const t=Tt.state.f,e=Tt.room?.def.noMasks;this.maskRow.innerHTML=t.masks&&!e?Object.entries(p1).map(([s,r],o)=>`<button class="maskb${Tt.state.mask===s?" on":""}" data-m="${s}" title="${r} (${o+1})">${s==="comedy"?"☺":s==="tragedy"?"☹":"❦"}<small>${o+1} ${r}</small></button>`).join(""):"",this.hudR.children[0].classList.toggle("hidden",!Tt.has("camera")||!!Tt.room?.def.noCamera);const n=this.hudR.children[1];n.classList.toggle("hidden",!Tt.state.inv.length),n.querySelector(".hb-n").textContent=String(Tt.state.inv.length),this.quest()}quest(){if(!Tt.running||!this.questEl)return;const t=qc(Tt),e=Tt.room,n=e?e.inters.filter(o=>o.enabled&&!(o.cond&&!o.cond())&&!o.quiet&&!/^(d_|door|out|back|up|stair|stairs|lift|front)/.test(o.id)&&!(Tt.state.f.used||{})[e.id+":"+o.id]).length:0,s=t.main+"|"+(t.hint||"")+"|"+n+"|"+(t.extra||[]).join("|");if(s===this.lastQuest)return;const r=this.lastQuest.split("|")[0]!==t.main;this.lastQuest=s,this.questEl.classList.toggle("hidden",!t.main),this.questEl.innerHTML=`<small>Задание</small><b>${oe(t.main)}</b>${t.hint?`<i>${oe(t.hint)}</i>`:""}${n?`<em>Здесь ещё можно осмотреть: ${n}</em>`:""}`,r&&t.main&&!Tt.fast&&(this.questEl.classList.remove("flash"),this.questEl.offsetWidth,this.questEl.classList.add("flash"),qt.sfx("pencil"))}showItem(t){if(Tt.fast)return;const e=Is[t];qt.sfx("paper");const n=de("div","reveal",`<div class="reveal-card"><img src="${Xc(t)}" alt=""><b>${oe(e?.name||t)}</b><span>${oe(e?.desc||"")}</span><small>в инвентаре · I</small></div>`,We()),s=()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)};setTimeout(s,2600),n.onclick=s}showPhoto(t,e){if(Tt.fast)return;qt.sfx("paper");const n=de("div","reveal",`<div class="reveal-card photo-pop" style="--r:-3deg"><img class="ph" src="${t}" alt=""><span class="cap">${oe(e)}</span><small>снимок в журнале · Tab</small></div>`,We()),s=()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)};setTimeout(s,2400),n.onclick=s}prompt(t,e=0,n=0){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.dataset.l!==t&&(this.promptEl.dataset.l=t,this.promptEl.innerHTML=`<kbd>E</kbd>${oe(t)}`),this.promptEl.style.left=Math.min(86,Math.max(14,e*100))+"%",this.promptEl.style.top=Math.max(8,n*100)+"%"}toast(t,e="✦"){if(Tt.fast)return;const n=performance.now(),s=Math.max(n,this.toastAt);this.toastAt=s+1400,setTimeout(()=>{const r=de("div","toast",`<b>${e}</b>${oe(t)}`,this.toasts);setTimeout(()=>r.remove(),4100)},s-n)}place(t){if(this.placeEl&&this.placeEl.remove(),Tt.fast)return;const e=this.placeEl=de("div","place",`<b>${oe(t)}</b><i></i>`,We());setTimeout(()=>e.remove(),3700)}saved(t){this.saveEl.textContent=t==="auto"?"✎ автосохранение":"✎ сохранено",this.saveEl.classList.add("on"),setTimeout(()=>this.saveEl.classList.remove("on"),1600)}loading(t){this.loadingEl.classList.toggle("on",t)}lyric(t,e=""){if(!t){this.lyricEl.classList.add("hidden");return}this.lyricEl.classList.remove("hidden"),this.lyricEl.innerHTML=(e?`<small>${oe(e)}</small>`:"")+oe(t).replace(/\n/g,"<br>")}viewfinder(t){this.vf.classList.toggle("hidden",!t)}letterbox(t){t!==this.lbOn&&(this.lbOn=t,this.lbEl||(this.lbEl=de("div","letterbox","<i></i><i></i>",We())),this.lbEl.classList.toggle("on",t))}curtainEl(){const e=n=>`<div class="cur-half ${n}">${Array.from({length:14},(s,r)=>`<b style="--i:${r};--n:14"></b>`).join("")}</div>`;return de("div","trans curtain2",`${e("l")}${e("r")}<div class="cur-val"></div>`,We())}async transition(t,e){if(t==="curtain"){let s=We().querySelector(".trans");if(e==="out")s&&s.remove(),s=this.curtainEl(),s.offsetWidth,s.classList.add("on"),qt.sfx("curtain"),await new Promise(r=>setTimeout(r,1100));else if(s){s.classList.remove("on"),s.classList.add("open");const r=s;setTimeout(()=>r.remove(),1500),await new Promise(o=>setTimeout(o,500))}return}let n=We().querySelector(".trans");if(e==="out")n&&n.remove(),n=de("div","trans "+t,"",We()),n.offsetWidth,n.classList.add("on"),t==="curtain"&&qt.sfx("curtain"),t==="glitch"&&qt.sfx("glitch"),(t==="mirror"||t==="page")&&qt.sfx("whoosh"),await new Promise(s=>setTimeout(s,t==="curtain"?760:520));else if(n){n.classList.remove("on");const s=n;setTimeout(()=>s.remove(),800),await new Promise(r=>setTimeout(r,350))}}paper(t){return Tt.fast?Promise.resolve():(qt.sfx("paper"),new Promise(e=>{this.open(`<div class="paper ${t.cls||""}">${t.stamp?`<div class="stamp">${t.stamp}</div>`:""}${t.title?`<h3>${t.title}</h3>`:""}<div class="${t.hand?"hand":""}">${t.body}</div>${t.sign?`<div class="sign">${t.sign}</div>`:""}<button class="btn small ok" data-x>${t.btn||"Отложить"}</button></div>`,{raw:!0,onClose:()=>{qt.sfx("paper"),e()}}).querySelector(".ok").focus({preventScroll:!0})}))}card(t,e={}){return Tt.fast?Promise.resolve():new Promise(n=>{const s=de("div","card",t.map((c,h)=>{const[u,p]=Array.isArray(c)?c:[c,""];return`<p class="${p}" style="animation-delay:${h*.9}s">${u}</p>`}).join("")+'<div class="more">нажмите, чтобы продолжить</div>',We()),r=performance.now();let o=!1;const l=()=>{o||performance.now()-r<900||(o=!0,a(),s.classList.add("out"),setTimeout(()=>{s.remove(),n()},650))},a=Zi(c=>{c==="act"&&!this.modal&&l()});s.onclick=l})}open(t,e={}){const n=de("div","modal",e.raw?t:`<div class="sheet ${e.cls||""}">${t}</div>`,We());return n.onCloseCb=e.onClose,n.noClose=e.noClose,this.modals.push(n),this.modal=!0,this.prompt(null),Wc(!0),n.addEventListener("click",s=>{s.target.closest("[data-x]")&&(qt.sfx("click"),this.close(n))}),n}close(t){const e=this.modals.indexOf(t);if(e<0)return;this.modals.splice(e,1),t.classList.add("closing"),setTimeout(()=>t.remove(),280),this.modal=this.modals.length>0,this.modal||Wc(!1);const n=t.onCloseCb;n&&n()}closeTop(){const t=this.modals[this.modals.length-1];t&&!t.noClose&&(qt.sfx("click"),this.close(t))}confirm(t,e="Да",n="Отмена"){return new Promise(s=>{let r=!1;const o=this.open(`<h2>Минутку</h2><div class="body"><p>${t}</p></div><div class="foot"><button class="btn small" data-x>${n}</button><button class="btn small red" data-y>${e}</button></div>`,{cls:"narrow",onClose:()=>s(r)});o.querySelector("[data-y]").onclick=()=>{r=!0,this.close(o)}})}pause(){if(this.modal)return;Tt.paused=!0,qt.suspend(!0);const t=this.open(`<h2>Антракт <small>${oe(Tt.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`,{cls:"narrow",onClose:()=>{Tt.paused=!1,qt.suspend(!1),qt.muffle(Tt.state.mask==="tragedy"?900:Tt.state.mask==="drama"?2600:2e4)}});t.addEventListener("click",async e=>{const n=e.target.dataset?.a;n&&(qt.sfx("click"),n==="resume"&&this.close(t),n==="save"&&this.saveLoad("save"),n==="load"&&this.saveLoad("load"),n==="note"&&this.notebook(),n==="set"&&this.settings(),n==="menu"&&await this.confirm("Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.","Выйти")&&(this.close(t),Tt.stopToMenu(),this.mainMenu()))}),t.querySelector(".btn").focus()}settings(){const t=Pe,e=(l,a,c="")=>`<div class="row-set"><label>${l}${c?`<small>${c}</small>`:""}</label><div>${a}</div></div>`,n=(l,a,c,h)=>`<input type="range" data-k="${l}" min="${a}" max="${c}" step="${h}" value="${t[l]}">`,s=l=>`<input type="checkbox" data-k="${l}" ${t[l]?"checked":""}>`,r=this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${e("Музыка",n("music",0,1,.05))}${e("Эффекты",n("sfx",0,1,.05))}${e("Голоса",n("voice",0,1,.05),"звуковой сигнал реплик; все реплики идут с субтитрами")}
      ${e("Скорость текста",n("textSpeed",0,120,5),"0: мгновенно")}${e("Масштаб интерфейса",n("uiScale",.8,1.5,.05))}
      ${e("Качество графики",'<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>')}
      ${e("Меньше вспышек",s("reduceFlash"),"приглушает вспышки и глитч-эффекты")}${e("Без тряски камеры",s("reduceShake"))}${e("Повышенный контраст текста",s("contrast"))}
      ${e("Облегчённые ритм-сцены",s("rhythmEasy"),"широкие окна попадания, меньше нот, нельзя проиграть")}${e("Задержка звука, мс",n("rhythmOffset",-200,200,5)+" <span data-off></span>","для ритм-сцен")}
      ${e("",'<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${e("Сенсорное управление",s("touch"),"экспериментально: джойстик и кнопки на экране")}${e("Вступление при каждом запуске",s("introAlways"),"иначе, только при первом запуске")}
      <p class="warn">Управление: WASD или стрелки, ходьба, Shift, быстрее, E / Enter / Пробел, действие, 1–3, маски, Q: снять маску, C: фотоаппарат, Tab, блокнот, H: история, Ctrl, пропуск прочитанного, Esc, пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);r.querySelector("[data-k=quality]").value=t.quality;const o=r.querySelector("[data-off]");o.textContent=t.rhythmOffset+"",r.addEventListener("input",l=>{const a=l.target,c=a.dataset.k;c&&(t[c]=a.type==="checkbox"?a.checked:a.tagName==="SELECT"?a.value:parseFloat(a.value),o.textContent=t.rhythmOffset+"",Ic(),this.applySettings(),c==="quality"&&Tt.R.setup(),c==="sfx"&&qt.sfx("click"))}),r.addEventListener("click",async l=>{if(l.target.dataset?.a==="calib"){const{calibrate:a}=await En(async()=>{const{calibrate:h}=await import("./minigames-DnosK753.js");return{calibrate:h}},[],import.meta.url),c=await a();c!=null&&(t.rhythmOffset=c,Ic(),r.querySelector("[data-k=rhythmOffset]").value=String(c),o.textContent=c+"")}})}async saveLoad(t){const e=this.open(`<h2>${t==="save"?"Сохранить":"Загрузить"} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс, для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${Tt.running?'<button class="btn small" data-a="exp">Экспорт в файл</button>':""}<button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-list]"),s=async()=>{const r=await Promise.all(Uc.map(async o=>({s:o,...await Ir(o).catch(l=>(console.warn(l),{state:null,broken:!0}))})));n.innerHTML=r.map(({s:o,state:l,broken:a})=>`<div class="slot"><div><b>${bv[o]}</b>${l?`<small>${oe(l.chapter)} · ${c1(l.time)} в театре · ${new Date(l.savedAt||0).toLocaleString("ru")}</small>`:`<small>${a?"⚠ данные повреждены или несовместимы":"пусто"}</small>`}</div><div class="acts">${t==="save"&&o!=="auto"&&Tt.running?`<button class="btn small" data-s="${o}" data-do="save">Записать</button>`:""}${l?`<button class="btn small" data-s="${o}" data-do="load">Загрузить</button>`:""}${l||a?`<button class="btn small red" data-s="${o}" data-do="del">✕</button>`:""}</div></div>`).join("")};await s(),e.addEventListener("click",async r=>{const o=r.target,l=o.dataset?.s,a=o.dataset?.do,c=o.dataset?.a;if(a==="save"&&l&&(await Tt.save(l),await s()),a==="del"&&l&&await this.confirm("Удалить это сохранение?","Удалить")&&(await Mv(l),await s()),a==="load"&&l){const h=await Ir(l);if(!h.state){this.toast("Сохранение повреждено","⚠");return}if(Tt.running&&!await this.confirm("Загрузить сохранение? Текущий несохранённый прогресс будет потерян.","Загрузить"))return;this.closeAll(),Tt.stopToMenu(),document.querySelector(".menu-screen")?.remove(),await Tt.start(h.state)}if(c==="exp"){const h=new Blob([Sv(Tt.state)],{type:"application/json"}),u=URL.createObjectURL(h),p=document.createElement("a");p.href=u,p.download="the-other-me-save.json",p.click(),setTimeout(()=>URL.revokeObjectURL(u),2e3)}if(c==="imp"){const h=document.createElement("input");h.type="file",h.accept=".json,application/json",h.onchange=async()=>{const u=h.files?.[0];if(!u)return;const p=wv(await u.text());if(!p){this.toast("Файл не похож на сохранение этой игры","⚠");return}await dl("slot3",p),this.toast("Импортировано в «Слот III»","✎"),await s()},h.click()}})}closeAll(){for(;this.modals.length;){const t=this.modals[this.modals.length-1];t.onCloseCb=null,this.close(t)}Tt.paused=!1}notebook(t="quests"){if(!Tt.running)return;qt.sfx("paper");const e=[["quests","Задания"],["items","Инвентарь"],["notes","Заметки"],["mech","Механики"],["photos","Фото"],["map","План театра"],["eggs","Находки"]],n=this.open(`<h2>Журнал режиссёра <small>«не забыть ничего»</small></h2><div class="tabs">${e.map(([l,a])=>`<button class="tab" data-t="${l}">${a}</button>`).join("")}</div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`,{cls:"journal"}),s=n.querySelector("[data-b]"),r=Tt.state.f,o=l=>{if(n.querySelectorAll(".tab").forEach(c=>c.classList.toggle("on",c.dataset.t===l)),l==="quests"){const c=qc(Tt);s.innerHTML=`<div class="q-main"><small>Сейчас</small><h3>${oe(c.main||"Смотреть спектакль")}</h3>${c.hint?`<p><i>${oe(c.hint)}</i></p>`:""}</div>${(c.extra||[]).length?`<h4 class="q-h">Можно сделать</h4><ul class="q-list">${c.extra.map(h=>`<li>${oe(h)}</li>`).join("")}</ul>`:""}<h4 class="q-h">Сыграно</h4><ul class="q-list done">${["polina","ruben","matvey","erika","liza","angelina"].filter(h=>r["done_"+h]).map(h=>`<li>${oe(pn[h].name)}: история сыграна</li>`).join("")||"<li><i>пока ничего</i></li>"}</ul>`;return}if(l==="items"){s.innerHTML=Tt.state.inv.length?`<div class="inv">${Tt.state.inv.map(c=>`<div class="inv-it"><img src="${Xc(c)}" alt=""><b>${oe(Is[c]?.name||c)}</b><span>${oe(Is[c]?.desc||"")}</span></div>`).join("")}</div>`:"<p><i>Карманы пусты.</i></p>";return}if(l==="mech"){const c=Object.keys(r.mech||{});s.innerHTML=c.length?c.filter(h=>Us[h]).map(h=>`<div class="entry noimg"><div><h4>${oe(Us[h].title)}</h4><p>${oe(Us[h].text)}</p></div></div>`).join(""):"<p><i>Механики появятся по ходу игры.</i></p>";return}if(l==="eggs"){const c=r.eggs||{},h=Object.entries(Nr);s.innerHTML=`<p class="warn">Найдено ${Object.keys(c).length} из ${h.length}. Пасхалки, отсылки и мелкие радости.</p><div class="eggs">${h.map(([u,p])=>`<div class="egg ${c[u]?"on":""}"><b>${c[u]?"★ "+oe(p.title):"☆ ???"}</b><span>${c[u]?oe(p.desc):"Где искать: "+oe(p.hint)}</span></div>`).join("")}</div>`;return}if(l==="map"){s.innerHTML=l1(Tt.state.room,r.visited||{});return}if(l==="photos"){s.innerHTML=Tt.state.photos.length?`<div class="photos">${Tt.state.photos.map((c,h)=>`<div class="photo" style="--r:${h*37%7-3}deg"><img src="${c.img}" alt=""><span>${oe(c.caption)}</span></div>`).join("")}</div>`:"<p><i>Плёнка пока пуста. Фотоаппарат, клавиша C.</i></p>";return}const a=(c,h)=>{const u=Tt.state.notes.map(p=>zo[p]).filter(p=>p&&p.cat===c);return u.length?`<h4 class="q-h">${h}</h4>`+u.map(p=>{const m=p.char?pn[p.char]:null;return`<div class="entry ${m?"":"noimg"}">${m?`<img src="${fu(p.char,p.expr||"neutral")}" alt="">`:""}<div><h4>${oe(p.title)}</h4>${m?.role?`<div class="role">${oe(m.role)}</div>`:""}<p>${p.text}</p></div></div>`}).join(""):""};s.innerHTML=Object.entries(qv).filter(([c])=>c!=="items").map(([c,h])=>a(c,h)).join("")||"<p><i>Здесь пока пусто.</i></p>"};n.addEventListener("click",l=>{const a=l.target.dataset?.t;a&&(qt.sfx("paper"),o(a))}),o(t)}async mainMenu(){this.hudShow(!1),document.querySelector(".menu-screen")?.remove();const t=await Promise.all(Uc.map(h=>Ir(h).catch(()=>({state:null,broken:!0}))));let e=null;for(const h of t)h.state&&(!e||(h.state.savedAt||0)>(e.savedAt||0))&&(e=h.state);let n=!1;try{n=localStorage.getItem("tom-intro-seen")==="1"}catch(h){console.warn("[intro] localStorage недоступен",h)}const s=!this.introPlayed&&(!n||Pe.introAlways)&&!Tt.fast;this.introPlayed=!0;const{DressingRoom:r}=await En(async()=>{const{DressingRoom:h}=await import("./dressing-cJgpOwBd.js");return{DressingRoom:h}},[],import.meta.url);Tt.menuScene&&Tt.menuScene.dispose();const o=Tt.menuScene=new r(Tt.R,s),l=de("div","menu-screen m3d"+(s?" intro":" ready"),`<div class="m3d-left"><div class="menu-logo">${h1}</div><nav class="menu-list"><button class="btn" data-a="cont" ${e?"":"disabled"}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="cred">Создатели</button><button class="btn" data-a="exit">Выход</button></nav></div><div class="m3d-hint">нажмите или кликните, чтобы повернуть ключ</div><div class="m3d-skip">Esc, пропустить вступление</div>`,We());o.onState=h=>{if(l.classList.toggle("await",h==="await"),h==="logo"&&l.classList.add("logo-in"),h==="menu"){l.classList.remove("intro"),l.classList.add("ready","logo-in");try{localStorage.setItem("tom-intro-seen","1")}catch(u){console.warn(u)}l.querySelector(e?"[data-a=cont]":"[data-a=new]")?.focus({preventScroll:!0})}},o.build();const a=h=>{if(o.state==="menu"||this.modal)return;qt.init();const u=h.code==="Escape";o.input(u?"skip":"act"),h.type==="keydown"&&h.preventDefault()};window.addEventListener("keydown",a,!0),l.addEventListener("pointerdown",a);const c=()=>{window.removeEventListener("keydown",a,!0),l.remove()};l.addEventListener("mouseover",h=>{const u=h.target.closest(".btn");u&&!u.disabled&&o.state==="menu"&&qt.sfx("mechtick")}),l.addEventListener("click",async h=>{qt.init();const u=h.target.dataset?.a;if(!(!u||o.state!=="menu")){if(qt.sfx("click"),u==="cont"&&e&&(c(),await Tt.start(e)),u==="new"){if(e&&!await this.confirm("Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.","Начать"))return;c(),await Tt.start(ul())}if(u==="load"&&this.saveLoad("load"),u==="set"&&this.settings(),u==="cred"&&this.credits(!1),u==="exit"){qt.music(null),qt.sfx("curtain");const p=de("div","card",'<p class="act">ЗАНАВЕС</p><p>Спасибо, что заглянули в гримёрку.</p><p class="sm">Закройте вкладку, или нажмите, чтобы вернуться.</p>',We());p.onclick=()=>{p.remove(),qt.music("musicbox")}}}})}credits(t){return new Promise(e=>{const n=(c,h)=>`<h3>${c}</h3>${h.map(u=>`<p>${u}</p>`).join("")}`,s=de("div","credits",`<div class="roll" style="--dur:${t?70:55}s"><div class="cred-logo">${pu("c")}</div>
        ${n("В РОЛЯХ",["Варя<small>режиссёрка, Молодая Девушка, Королева, и всё это одновременно</small>","Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>","Артемий<small>школьный кот одобряет</small>"])}
        ${n("ТРУППА ТЕАТРА",["Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма, их рук дело</small>"])}
        ${n("В ЗРИТЕЛЬНОМ ЗАЛЕ",["Мама Наташа и Саша","Папа Максим и Настя","Вася","Софа · Катя"])}
        ${n("ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ",["Кукольник<small>просил не указывать. Указан.</small>"])}
        ${n("МУЗЫКА, ДЕКОРАЦИИ, СВЕТ",["Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры","Three.js · TypeScript · Vite"])}
        ${n("ШРИФТЫ ЛОГОТИПА",["Aurelia Diamond · Cintarini · Highcrest · Lombardina Initial One<small>лицензии «для личного некоммерческого использования»; игра, подарок, не продукт</small>","Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>"])}
        ${n("ОСОБАЯ БЛАГОДАРНОСТЬ",["Третьему ряду.<small>Вас видно. Правда.</small>"])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`,We()),r=()=>{o(),s.remove(),e()},o=Zi(c=>{(c==="act"||c==="pause")&&r()}),l=performance.now();s.onclick=()=>{performance.now()-l>600&&r()};const a=s.querySelector(".roll");a.addEventListener("animationend",c=>{c.target===a&&r()}),Tt.fast&&r()})}buildTouch(){this.touchEl=de("div","touch hidden",'<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="camera">◉</button><button class="tbtn" data-a="mask0">☺</button><button class="tbtn big" data-a="act">E</button></div>',We());const t=this.touchEl.querySelector(".stick"),e=t.querySelector("i");let n=null;const s=l=>{const a=t.getBoundingClientRect();let c=(l.clientX-a.left-a.width/2)/(a.width/2),h=(l.clientY-a.top-a.height/2)/(a.height/2);const u=Math.hypot(c,h);u>1&&(c/=u,h/=u),Jn.x=c,Jn.y=h,e.style.transform=`translate(${c*2.2}rem, ${h*2.2}rem)`};t.addEventListener("pointerdown",l=>{n=l.pointerId,t.setPointerCapture(n),s(l)}),t.addEventListener("pointermove",l=>{l.pointerId===n&&s(l)});const r=l=>{l.pointerId===n&&(n=null,Jn.x=Jn.y=0,e.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);let o=0;this.touchEl.querySelector(".tbtns").addEventListener("pointerdown",l=>{const a=l.target.dataset?.a;if(a)if(l.preventDefault(),a==="mask0"){const c=[null,"comedy","tragedy","drama"];o=(o+1)%4,c[o]?Tt.setMask(c[o]):Tt.state.mask&&Tt.setMask(Tt.state.mask)}else $i(a)})}}const Wt=new u1,f1={hub:()=>En(()=>import("./hub-Dke9kPrT.js"),__vite__mapDeps([0,1]),import.meta.url),pol:()=>En(()=>import("./polina-Doywjisu.js"),__vite__mapDeps([2,1,3]),import.meta.url),rub:()=>En(()=>import("./ruben-CEzXrAKz.js"),__vite__mapDeps([4,1,3]),import.meta.url),mat:()=>En(()=>import("./matvey-Z390SAJ-.js"),__vite__mapDeps([5,1,3]),import.meta.url),eri:()=>En(()=>import("./erika-BSlSS1Fu.js"),__vite__mapDeps([6,1,3]),import.meta.url),liz:()=>En(()=>import("./lisa-LAGFHGVM.js"),__vite__mapDeps([7,1,3]),import.meta.url),ang:()=>En(()=>import("./angelina-DeyGrSJR.js"),__vite__mapDeps([8,1,3]),import.meta.url),fin:()=>En(()=>import("./finale-DRPTLO2n.js"),__vite__mapDeps([9,1,0]),import.meta.url)},Yi={},d1={comedy:{sat:1.35,tint:[1.08,1.02,.86],vig:.2,bright:1.08},tragedy:{sat:.35,tint:[.82,.9,1.12],vig:.6,bright:.9,contrast:1.1},drama:{sat:.9,tint:[1.1,.9,.92],vig:.55,bright:1}},p1={comedy:"Комедия",tragedy:"Трагедия",drama:"Драма"};class m1{constructor(){this.state=ul(),this.room=null,this.lock=0,this.paused=!1,this.running=!1,this.t=0,this.cam={x:0,z:0,dist:24,focus:null,shake:0,roll:0,pitch:.56,yOff:1.2},this.near=null,this.trail=[],this.followers=[],this.stepT=0,this.busy=!1,this.inPhoto=!1,this.fast=!1,this.playerSpeed=5.6,this.override=null,this.debug=!1,this.gradeBase={},this.audio=qt,this.ui=Wt,this.menuScene=null,this.questT=0,this.waits=[],this.runDepth=0}boot(t){this.R=new Tv(t),this.debug=new URLSearchParams(location.search).has("debug");let e=performance.now();const n=s=>{const r=Math.min(.05,(s-e)/1e3);e=s;try{this.frame(r)}catch(o){console.error("[game] ошибка кадра",o)}requestAnimationFrame(n)};requestAnimationFrame(n),Zi(s=>this.onAction(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.running&&!this.paused&&!Wt.modal&&Wt.pause()}),window.addEventListener("beforeunload",s=>{this.running&&this.lock>0&&!this.debug&&(s.preventDefault(),s.returnValue="")})}get f(){return this.state.f}flag(t){return this.state.f[t]}set(t,e=!0){typeof t=="string"?this.state.f[t]=e:Object.assign(this.state.f,t)}has(t){return this.state.inv.includes(t)}give(t,e=!1){this.has(t)||(this.state.inv.push(t),Is[t]||console.warn("[game] нет описания предмета",t),t==="camera"&&this.mech("camera"),e?Wt.toast("В инвентаре: "+(Is[t]?.name||t),"✦"):(this.sfx("pickup"),Wt.showItem(t)),Wt.hud())}mech(t){var n;const e=(n=this.state.f).mech||(n.mech={});e[t]||!Us[t]||(e[t]=1,this.fast||Wt.toast(`Механика: ${Us[t].title}. Гайд — в журнале (Tab)`,"❖"))}egg(t){var n;const e=(n=this.state.f).eggs||(n.eggs={});e[t]||!Nr[t]||(e[t]=1,this.sfx("note"),Wt.toast(`Находка: ${Nr[t].title} (${Object.keys(e).length}/${Object.keys(Nr).length})`,"★"))}take(t){const e=this.state.inv.indexOf(t);e>=0&&this.state.inv.splice(e,1)}note(t){if(!this.state.notes.includes(t)){if(!zo[t]){console.warn("[game] нет записи блокнота",t);return}this.state.notes.push(t),this.sfx("pencil"),Wt.toast("Блокнот: "+zo[t].title,"✎")}}done(t){return!!this.state.f["done_"+t]}doneCount(){return["polina","ruben","matvey","erika","liza","angelina"].filter(t=>this.done(t)).length}sfx(t,e){qt.sfx(t,e)}toast(t,e){Wt.toast(t,e)}wait(t){return this.fast?Promise.resolve():new Promise(e=>this.waits.push({t,res:e}))}async start(t){this.menuScene&&(this.menuScene.dispose(),this.menuScene=null),this.state=t,this.running=!0,this.lock=0,this.paused=!1,Wt.hudShow(!0),setTimeout(()=>{this.mech("move"),this.mech("act"),this.mech("journal")},4e3),await this.goto(t.room,t.spot,{fade:"fade",load:!0})}stopToMenu(){this.running=!1,this.clearRoom(),qt.music(null),qt.ambience(null),Wt.hudShow(!1)}async save(t="auto"){if(!this.running)return;const e=this.state;this.player&&(e.px=this.player.x,e.pz=this.player.z);try{await dl(t,e),Wt.saved(t)}catch(n){console.error("[save] не удалось сохранить",n),Wt.toast("Не удалось сохранить игру: хранилище браузера недоступно","⚠")}}clearRoom(){for(const t of this.waits)t.res();this.waits=[],this.room&&(this.R.scene.remove(this.room.group),this.room.dispose(),this.room=null),this.followers=[],this.trail=[],this.near=null,this.override=null,Wt.prompt(null)}async loadRoom(t){if(Yi[t])return Yi[t];const e=t.split("_")[0],n=f1[e];if(!n)throw new Error("Неизвестная локация: "+t);Wt.loading(!0);try{const s=await n();Object.assign(Yi,s.rooms)}finally{Wt.loading(!1)}if(!Yi[t])throw new Error("Глава не содержит локацию: "+t);return Yi[t]}async goto(t,e="start",n={}){var l;this.lock++;const s=this.room?this.room.id:n.load?"load":"",r=this.fast?"none":n.fade||"fade";try{r!=="none"&&await Wt.transition(r,"out");let a;try{a=await this.loadRoom(t)}catch(d){throw r!=="none"&&await Wt.transition(r,"in"),d}this.clearRoom(),this.cam.focus=null,this.cam.roll=0;const c=this.room=new ou(t,a),h=new lu(c,this);this.player=new pl(this.state.f.playerChar||"varya","player"),a.build(h,this),c.actors.push(this.player),c.group.add(this.player.group);const u=new Wr(16773340,2.2,4.5,1.5);u.position.set(.6,2.4,1.6),this.player.group.add(u);const p=c.spawns[e]||c.spawns.start||{x:0,z:0,dir:"f"};!c.spawns[e]&&e!=="start"&&console.warn(`[game] в ${t} нет точки появления ${e}`),n.load&&this.state.room===t&&this.state.px!=null&&!this.hits(this.state.px,this.state.pz)?this.player.place(this.state.px,this.state.pz,"f"):this.player.place(p.x,p.z,p.dir);{const d=this.freeSpot(this.player.x,this.player.z);(d.x!==this.player.x||d.z!==this.player.z)&&(this.debug&&console.warn(`[room] ${t}: точка «${e}» занята, героиня сдвинута`),this.player.place(d.x,d.z))}for(const d of this.followers){const v=this.freeSpot(this.player.x+.8,this.player.z+.3);d.place(v.x,v.z)}c.guards.length&&this.mech("stealth"),c.lasers.length&&this.mech("lasers"),this.R.scene.add(c.group),this.R.scene.background=new Vt(c.group.userData.bg??328710),this.R.scene.fog=c.group.userData.fog||null,this.gradeBase=a.grade||{},this.applyMask(!0),this.applyGrade(!0),this.cam.dist=a.camDist||24,this.camSnap(),a.music!==void 0&&qt.music(a.music),qt.ambience(a.amb??null),this.state.room=t,this.state.spot=e,((l=this.state.f).visited||(l.visited={}))[t]=1,a.chapter&&(this.state.chapter=a.chapter),Wt.hud(),!n.load&&!this.fast&&await this.save("auto");const m=a.card?.(this);m&&await Wt.card(m),r!=="none"&&await Wt.transition(r,"in"),!n.silent&&s!==t&&Wt.place(a.name)}finally{this.lock--}const o=this.room.def;o.enter&&await this.cut(()=>o.enter(this,s))}async rebuild(){const t=this.player,e=t.x,n=t.z,s=t.dir;await this.goto(this.room.id,this.state.spot,{fade:"none",silent:!0}),this.player.place(e,n,s),this.camSnap()}async cut(t){this.lock++,Wt.prompt(null);try{return await t()}finally{this.lock--}}async say(t,e,n="neutral",s){const r=t==="~",o=t==="*",l=r?"varya":t,a=pn[l];!o&&!a&&console.warn("[dialogue] неизвестный говорящий",t);const c=t+":"+e,h=!!this.state.seen[Jc(c)];await Wt.say({name:o?"":s||a?.name||t,color:a?.color||"#e8d8a8",portrait:o||!a?"":fu(l,n),text:e,italic:r||o,pitch:a?.pitch||300,seen:h}),this.state.seen[Jc(c)]=1}async line(t){const e=/^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(t);if(!e){console.warn("[dialogue] не разобрана реплика:",t);return}await this.say(e[1],e[4],e[3]||"neutral",e[2])}async choice(t){return Wt.choice(t.map(e=>typeof e=="string"?{text:e}:e))}async run(t){this.lock++,this.runDepth++,qt.duck(!0);try{for(const e of t)if(typeof e=="string")await this.line(e);else if(typeof e=="function"){const n=await e(this);Array.isArray(n)&&await this.run(n)}else if(e.c){const n=e.c.filter(o=>{const l=o[2]||{};return!(l.if&&!l.if(this.state.f,this)||l.mask&&this.state.mask!==l.mask)}),s=await this.choice(n.map(o=>({text:o[0],mask:!!(o[2]&&o[2].mask)}))),r=n[s];r[2]&&r[2].set&&this.set(r[2].set),await this.run(r[1]||[])}else if(e.if)await this.run(e.if(this.state.f,this)?e.t||[]:e.e||[]);else{if(e.set&&this.set(e.set),e.note&&this.note(e.note),e.give&&this.give(e.give),e.sfx&&this.sfx(e.sfx),e.music!==void 0&&qt.music(e.music),e.wait&&await this.wait(e.wait),e.pose){const n=this.actor(e.pose[0]);n&&(n.pose=e.pose[1])}e.shake&&this.shake(e.shake),e.flash&&this.flash()}}finally{this.lock--,this.runDepth--,this.runDepth===0&&(qt.duck(!1),Wt.sayHide())}}actor(t){return t==="player"?this.player:this.room?.actor(t)}setMask(t){!this.state.f.masks||this.room?.def.noMasks||(this.mech("masks"),this.state.mask===t&&(t=null),this.state.mask=t,this.sfx("mask"),this.applyMask(),this.applyGrade(),Wt.hud(),qt.muffle(t==="tragedy"?900:t==="drama"?2600:2e4))}applyMask(t=!1){const e=this.room;if(!e)return;const n=e.def.noMasks?null:this.state.mask;e.def.noMasks&&qt.muffle(2e4);for(const s of e.masked){const r=s.mask==="none"?!n:s.mask===n;s.obj.visible=r,s.box&&(s.box.on=r)}for(const s of e.inters)s.mask&&(s.enabled=s.mask==="none"?!n:s.mask===n,s.marker&&(s.marker.visible=s.enabled))}applyGrade(t=!1){const e=this.room?.def.noMasks?null:this.state.mask,n={...this.gradeBase,...e?v1(this.gradeBase,d1[e]):{}};this.R.setGrade(n,t)}grade(t,e=!1){this.gradeBase={...this.gradeBase,...t},this.applyGrade(e)}camBounds(){const t=this.room.def,e=Math.max(0,t.w/2-9),n=Math.min(0,-t.d/2+4.5),s=t.camZMax??Math.max(n,t.d/2-7);return{mx:e,z0:n,z1:s}}camSnap(){const t=this.player,e=this.camBounds();this.cam.x=As(t.x,-e.mx,e.mx),this.cam.z=As(t.z,e.z0,e.z1)}focus(t,e,n=18){this.cam.focus={x:t,z:e,dist:n}}unfocus(){this.cam.focus=null}shake(t=.4){Pe.reduceShake||(this.cam.shake=Math.max(this.cam.shake,t))}flash(t=.9){this.R.flash=t}async photoMode(){if(!this.has("camera")||this.inPhoto||this.room?.def.noCamera)return;this.inPhoto=!0,this.lock++;const t=this.player,e=g1(t.dir);this.focus(t.x+e.x*3,t.z+e.z*3,15),Wt.viewfinder(!0);try{if(await this.key(["act","camera","pause"])==="act"){const s=this.room,r=s.def.noMasks?null:this.state.mask,o=s.photos.filter(c=>{if(c.cond&&!c.cond()||c.mask&&(c.mask==="none"?r:c.mask!==r))return!1;const h=c.x-t.x,u=c.z-t.z,p=Math.hypot(h,u);return p<1.8?!0:p<8&&(h*e.x+u*e.z)/p>.6});Wt.viewfinder(!1);const l=this.R.snapshot();this.sfx("shutter"),this.flash(.8);const a=o.length?o.map(c=>c.name).join(", "):s.def.name;for(this.state.photos.push({id:"p"+Date.now().toString(36),img:l,caption:a,subjects:o.map(c=>c.id),room:s.id});this.state.photos.length>36;){const c=this.state.photos.findIndex(h=>!h.subjects.length);this.state.photos.splice(c>=0?c:0,1)}Wt.showPhoto(l,a),this.unfocus(),s.def.photo&&await s.def.photo(this,o.map(c=>c.id))}}finally{Wt.viewfinder(!1),this.unfocus(),this.lock--,this.inPhoto=!1}}photographed(t){return this.state.photos.some(e=>e.subjects.includes(t))}key(t){return new Promise(e=>{const n=Zi(s=>{t.includes(s)&&(n(),setTimeout(()=>e(s),0))})})}follow(t){this.followers.push(t)}unfollow(t){t&&(this.followers=this.followers.filter(e=>e!==t),t.moving=!1)}setPlayerChar(t){this.state.f.playerChar=t,this.player.setChar(t)}onAction(t){var e;if(!(!this.running||Wt.modal||this.paused)){if(t==="pause"&&!this.inPhoto){Wt.pause();return}if(t==="history"){Wt.history();return}if(!(this.lock>0))if(t==="act"&&this.near){const n=this.near;this.sfx("click"),((e=this.state.f).used||(e.used={}))[this.room.id+":"+n.id]=1,this.cut(()=>n.fn(this)).catch(s=>console.error("[game] ошибка взаимодействия",n.id,s))}else t==="mask1"?this.setMask("comedy"):t==="mask2"?this.setMask("tragedy"):t==="mask3"?this.setMask("drama"):t==="mask0"?this.state.mask&&this.setMask(this.state.mask):t==="camera"?this.photoMode():t==="notebook"?Wt.notebook():t==="inventory"?Wt.notebook("items"):this.room?.def.onKey&&this.room.def.onKey(this,t)}}freeSpot(t,e){if(!this.hits(t,e))return{x:t,z:e};for(let n=.25;n<8;n+=.25)for(let s=0;s<16;s++){const r=t+Math.cos(s/16*Math.PI*2)*n,o=e+Math.sin(s/16*Math.PI*2)*n;if(!this.hits(r,o))return{x:r,z:o}}return{x:t,z:e}}reachCheck(){const t=this.room,e=this.player,n=.25,s=t.def.w,r=t.def.d,o=Math.ceil(s/n),l=Math.ceil(r/n),a=new Uint8Array(o*l),c=(v,f)=>Math.floor((f+r/2)/n)*o+Math.floor((v+s/2)/n),h=[[e.x,e.z]],u=[];for(this.hits(e.x,e.z)&&u.push("героиня внутри коллизии");h.length;){const[v,f]=h.pop(),g=c(v,f);if(!(g<0||g>=a.length||a[g])){a[g]=1;for(const[x,y]of[[n,0],[-n,0],[0,n],[0,-n]]){const b=v+x,R=f+y;this.hits(b,R)||h.push([b,R])}}}const p=(v,f,g)=>{for(let x=f-g;x<=f+g;x+=n)for(let y=v-g;y<=v+g;y+=n){if(Math.hypot(y-v,x-f)>g-.2)continue;const b=c(y,x);if(b>=0&&b<a.length&&a[b])return!0}return!1};for(const v of t.inters)!v.mask&&!(v.cond&&!v.cond())&&!p(v.x,v.z,v.r)&&u.push("недостижимо: "+v.id+" ("+v.label+")");for(const[v,f]of Object.entries(t.spawns))this.hits(f.x,f.z)&&u.push("точка появления в коллизии: "+v);const m=s/2,d=r/2;for(const v of t.props)if((v.x<-m-.2||v.x>m+.2||v.z<-d-.2||v.z>d+.6)&&u.push(`предмет за пределами комнаты: ${v.kind} (${v.x.toFixed(1)}, ${v.z.toFixed(1)})`),v.y<.3&&!v.box&&!t.props.some(f=>f.box&&Math.abs(f.x-v.x)<.05&&Math.abs(f.z-v.z)<.05)){for(const f of t.boxes)if(f.on&&f.x1-f.x0>.5&&f.z1-f.z0>.5&&v.x>f.x0+.15&&v.x<f.x1-.15&&v.z>f.z0+.15&&v.z<f.z1-.15){u.push(`предмет внутри мебели/стены: ${v.kind} (${v.x.toFixed(1)}, ${v.z.toFixed(1)})`);break}}for(const v of t.inters)for(const f of t.actors)f.id!=="player"&&!f.hidden&&v.id!==f.id&&Math.hypot(f.x-v.x,f.z-v.z)<.5&&!(v.label||"").includes(f.def?.name||"@@")&&u.push(`персонаж стоит на точке взаимодействия: ${f.id} на ${v.id}`);return u}hits(t,e,n=.38){const s=this.room,r=s.def.w/2-n,o=s.def.d/2-n;if(t<-r||t>r||e<-o||e>o)return!0;for(const l of s.boxes)if(l.on&&t>l.x0-n&&t<l.x1+n&&e>l.z0-n&&e<l.z1+n)return!0;return!1}los(t,e,n,s){for(let r=1;r<8;r++){const o=t+(n-t)*r/8,l=e+(s-e)*r/8;for(const a of this.room.boxes)if(a.on&&a.x1-a.x0>.9&&o>a.x0&&o<a.x1&&l>a.z0&&l<a.z1)return!1}return!0}frame(t){const e=this.room;if(!e||!this.running){this.menuScene&&!this.running&&(this.menuScene.update(t),this.R.render(t)),Wa();return}if(this.paused){this.R.render(0),Wa();return}this.t+=t,this.state.time+=t;const n=this.player;if(this.waits.length){for(const g of this.waits)g.t-=t;const f=this.waits.filter(g=>g.t<=0);this.waits=this.waits.filter(g=>g.t>0);for(const g of f)g.res()}if(this.override)this.override(t);else if(this.lock===0&&!Wt.modal){const f=Wv(),g=Math.hypot(f.x,f.y)>.15;if(g){const x=this.playerSpeed*(Ji("run")?1.35:1)*t,y=n.x+f.x*x,b=n.z+f.y*x;this.hits(y,n.z)||(n.x=y),this.hits(n.x,b)||(n.z=b),n.dir=Math.abs(f.x)>Math.abs(f.y)?f.x>0?"r":"l":f.y>0?"f":"b",this.stepT-=t,this.stepT<=0&&(this.stepT=.3,this.sfx("step",{mat:e.def.step||"wood"}));const R=this.trail[this.trail.length-1];(!R||Math.hypot(R.x-n.x,R.z-n.z)>.35)&&(this.trail.push({x:n.x,z:n.z}),this.trail.length>40&&this.trail.shift())}n.moving=g;for(const x of e.triggers){const y=n.x>x.x0&&n.x<x.x1&&n.z>x.z0&&n.z<x.z1;if(y&&!x.inside&&!(x.once&&x.done)){x.done=!0,x.inside=!0,this.cut(()=>x.fn(this)).catch(b=>console.error("[game] ошибка триггера",b));break}x.inside=y}}else n.target||(n.moving=!1);this.followers.forEach((f,g)=>{const x=this.trail[this.trail.length-1-(g+1)*3];if(x&&Math.hypot(x.x-f.x,x.z-f.z)>.25&&Math.hypot(n.x-f.x,n.z-f.z)>1.3){const y=x.x-f.x,b=x.z-f.z,R=Math.hypot(y,b),w=Math.min(R,this.playerSpeed*1.05*t);f.x+=y/R*w,f.z+=b/R*w,f.face(x.x,x.z),f.moving=!0}else f.target||(f.moving=!1)});for(const f of e.actors)f.update(t);if(this.lock===0){for(const f of e.guards){if(!f.active){f.cone.visible=!1;continue}f.cone.visible=!0;const g=f.actor;if(f.off>0&&(f.off-=t,f.cone.visible=Math.floor(f.off*8)%2===0),f.wait>0)f.wait-=t;else if(!g.target&&f.path.length>1){f.i=(f.i+1)%f.path.length;const[x,y]=f.path[f.i];f.ang=Math.atan2(y-g.z,x-g.x),g.walkTo(x,y,f.speed).then(()=>{f.wait=f.pause})}if(f.cone.position.set(g.x,.05,g.z),f.cone.rotation.y=-f.ang,f.off<=0&&!n.hidden&&!n.stealth){const x=n.x-g.x,y=n.z-g.z,b=Math.hypot(x,y);let R=Math.atan2(y,x)-f.ang;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;if(b<f.range&&Math.abs(R)<f.half&&this.los(g.x,g.z,n.x,n.z)){this.cut(()=>f.onCatch(this)).catch(w=>console.error(w));break}}}for(const f of e.lasers)if(f.on=f.active&&(this.t+f.phase)%f.period<f.duty*f.period,f.mesh.visible=f.on,f.on&&!n.hidden&&!n.stealth){const g=f.x1-f.x0,x=f.z1-f.z0,y=g*g+x*x;let b=((n.x-f.x0)*g+(n.z-f.z0)*x)/y;if(b=As(b,0,1),Math.hypot(n.x-f.x0-g*b,n.z-f.z0-x*b)<.4){this.cut(()=>f.onHit(this)).catch(R=>console.error(R));break}}}else for(const f of e.actors)!f.target&&f!==n&&!this.followers.includes(f)&&(f.moving=!1);for(const f of e.flick)f.l.intensity=f.base*(1+(Math.sin(this.t*13+f.base)*.5+Math.sin(this.t*31)*.5)*f.s);for(const f of e.occluders){const g=n.z<f.z-.2&&n.z>f.z-12&&n.x>f.x0-.8&&n.x<f.x1+.8,x=f.mesh.material,y=g?.18:1;x.opacity+=(y-x.opacity)*Math.min(1,t*8),x.depthWrite=x.opacity>.9}for(const f of e.updaters)f(t,this.t);e.def.update&&e.def.update(this,t,this.t),this.questT-=t,this.questT<0&&(this.questT=.5,Wt.quest());let s=null,r=1e9;if(this.lock===0&&!Wt.modal)for(const f of e.inters){if(!f.enabled||f.cond&&!f.cond()){f.marker&&(f.marker.visible=!1);continue}const g=Math.hypot(f.x-n.x,f.z-n.z);f.marker&&(f.marker.visible=g<5,f.marker.position.y=f.y+.5+Math.sin(this.t*3+f.x)*.08,f.marker.rotation.y=this.t*2),g<f.r&&g<r&&(r=g,s=f)}this.near=s;const o=this.cam,l=o.focus,a=this.camBounds(),c=l?l.x:As(n.x,-a.mx,a.mx),h=l?l.z:As(n.z,a.z0,a.z1),u=l?l.dist:e.def.camDist||24,p=Math.min(1,t*3.5);o.x+=(c-o.x)*p,o.z+=(h-o.z)*p,o.dist+=(u-o.dist)*p,o.shake=Math.max(0,o.shake-t*1.2);const m=(Math.random()-.5)*o.shake,d=(Math.random()-.5)*o.shake,v=this.R.cam.aspect<1?1.25:1;if(this.R.cam.position.set(o.x+m,o.yOff+Math.sin(o.pitch)*o.dist*v+d,o.z+Math.cos(o.pitch)*o.dist*v),this.R.cam.up.set(Math.sin(o.roll),Math.cos(o.roll),0),this.R.cam.lookAt(o.x+m,o.yOff,o.z),this.R.render(t),Wt.letterbox(!!this.cam.focus&&this.lock>0),s){const f=new D(s.x,s.y+.9,s.z).project(this.R.cam);Wt.prompt(s.label,(f.x+1)/2,(1-f.y)/2)}else Wt.prompt(null);Wa()}}function As(i,t,e){return Math.max(t,Math.min(e,i))}function g1(i){return i==="l"?{x:-1,z:0}:i==="r"?{x:1,z:0}:i==="b"?{x:0,z:-1}:{x:0,z:1}}function Jc(i){let t=5381;for(let e=0;e<i.length;e++)t=(t<<5)+t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function v1(i,t){const e=i.tint||[1,1,1],n=t.tint||[1,1,1];return{sat:(i.sat??1)*(t.sat??1),tint:[e[0]*n[0],e[1]*n[1],e[2]*n[2]],vig:Math.max(i.vig??.35,t.vig??0),bright:(i.bright??1)*(t.bright??1),contrast:(i.contrast??1)*(t.contrast??1)}}const Tt=new m1;Tt.__rooms=()=>Yi;window.__G=Tt;async function _1(){const i=document.getElementById("boot"),t=document.getElementById("boot-s");try{await Promise.all(['8px "Pixelify Sans"',"16px Lora",'16px "Playfair Display"','16px "Marck Script"',"16px Aurelia","16px Cintarini","16px Highcrest","16px Lombardina","16px Caveat",'16px "Bad Script"',"16px Neucha",'700 16px "Amatic SC"'].map(n=>document.fonts.load(n,"AБя").catch(s=>console.warn("[fonts]",n,s)))),Wt.init(),Tt.boot(document.getElementById("game"));const e=()=>{qt.init()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),t.innerHTML='<span class="boot-enter">нажмите, чтобы войти в театр</span>',i.classList.add("ready"),await new Promise(n=>{const s=()=>{window.removeEventListener("keydown",s,!0),i.removeEventListener("pointerdown",s),qt.init();const r=document.documentElement;try{const o=(r.requestFullscreen||r.webkitRequestFullscreen)?.call(r,{navigationUI:"hide"});o&&o.catch&&o.catch(l=>console.warn("[fullscreen]",l))}catch(o){console.warn("[fullscreen] недоступен",o)}n()};window.addEventListener("keydown",s,!0),i.addEventListener("pointerdown",s)}),await Wt.mainMenu(),i.style.opacity="0",setTimeout(()=>i.remove(),700)}catch(e){console.error("[boot] игра не запустилась",e),t.textContent="Не удалось запустить игру: "+(e?.message||e)+". Проверьте, что браузер поддерживает WebGL, и обновите страницу."}}_1();export{jl as $,A1 as A,je as B,pn as C,Fe as D,jh as E,kh as F,ce as G,Wt as H,il as I,qt as J,Tt as K,de as L,_t as M,Zi as N,cl as O,No as P,Pe as Q,Gv as R,qh as S,zs as T,pg as U,Zh as V,Qe as W,Wr as X,D as Y,Vt as Z,En as _,_e as a,kr as a0,tv as a1,Jh as a2,Ns as a3,Ne as a4,ln as a5,xg as a6,Oh as a7,nt as a8,al as a9,bg as aa,ol as ab,Hs as ac,Kh as ad,Wh as ae,Gs as af,k1 as ag,ee as b,mn as c,De as d,x1 as e,gg as f,si as g,Yn as h,D1 as i,I1 as j,w1 as k,E1 as l,b1 as m,C1 as n,R1 as o,hs as p,S1 as q,M1 as r,T1 as s,Oe as t,P1 as u,L1 as v,y1 as w,an as x,U1 as y,N1 as z};
