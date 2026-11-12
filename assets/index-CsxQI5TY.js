const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hub-Cd5PH_yl.js","./minigames-BV5YX6Tn.js","./polina-B_qh8QU-.js","./common-DRrSUg4x.js","./ruben-BGUGoeGF.js","./matvey-CnNWG1GH.js","./erika-U3e0XQW6.js","./lisa-C45I5lBs.js","./angelina-DmT21MHr.js","./finale-BMmjuRpO.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const su="modulepreload",ru=function(i,t){return new URL(i,t).href},ul={},pn=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=l?.nonce||l?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=ru(c,n),c in ul)return;ul[c]=!0;const u=c.endsWith(".css"),h=u?'[rel="stylesheet"]':"";if(!!n)for(let p=o.length-1;p>=0;p--){const v=o[p];if(v.href===c&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${h}`))return;const m=document.createElement("link");if(m.rel=u?"stylesheet":su,u||(m.as="script"),m.crossOrigin="",m.href=c,a&&m.setAttribute("nonce",a),document.head.appendChild(m),u)return new Promise((p,v)=>{m.addEventListener("load",p),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ro="169",au=0,fl=1,ou=2,Oc=1,Bc=2,Cn=3,Wn=0,Ge=1,Ye=2,yn=0,ci=1,ws=2,dl=3,pl=4,lu=5,ii=100,cu=101,hu=102,uu=103,fu=104,du=200,pu=201,mu=202,gu=203,Da=204,Ia=205,vu=206,_u=207,xu=208,yu=209,Mu=210,bu=211,Su=212,wu=213,Eu=214,Ua=0,Na=1,Fa=2,$i=3,ka=4,Oa=5,Ba=6,za=7,Po=0,Tu=1,Au=2,Gn=0,zc=1,Vc=2,Gc=3,Lo=4,Cu=5,Hc=6,Wc=7,qc=300,Xi=301,Yi=302,Va=303,Ga=304,Dr=306,Sr=1e3,ai=1001,Ha=1002,we=1003,Ru=1004,Ns=1005,ln=1006,Gr=1007,oi=1008,Ln=1009,$c=1010,Xc=1011,Es=1012,Do=1013,hi=1014,xn=1015,un=1016,Io=1017,Uo=1018,Ki=1020,Yc=35902,Kc=1021,Zc=1022,cn=1023,jc=1024,Jc=1025,Hi=1026,Zi=1027,No=1028,Fo=1029,Qc=1030,ko=1031,Oo=1033,pr=33776,mr=33777,gr=33778,vr=33779,Wa=35840,qa=35841,$a=35842,Xa=35843,Ya=36196,Ka=37492,Za=37496,ja=37808,Ja=37809,Qa=37810,to=37811,eo=37812,no=37813,io=37814,so=37815,ro=37816,ao=37817,oo=37818,lo=37819,co=37820,ho=37821,_r=36492,uo=36494,fo=36495,th=36283,po=36284,mo=36285,go=36286,Pu=3200,eh=3201,Bo=0,Lu=1,zn="",tn="srgb",$n="srgb-linear",zo="display-p3",Ir="display-p3-linear",wr="linear",oe="srgb",Er="rec709",Tr="p3",gi=7680,ml=519,Du=512,Iu=513,Uu=514,nh=515,Nu=516,Fu=517,ku=518,Ou=519,vo=35044,gl="300 es",Rn=2e3,Ar=2001;class ns{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const De=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,Cr=180/Math.PI;function Pn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(De[i&255]+De[i>>8&255]+De[i>>16&255]+De[i>>24&255]+"-"+De[t&255]+De[t>>8&255]+"-"+De[t>>16&15|64]+De[t>>24&255]+"-"+De[e&63|128]+De[e>>8&255]+"-"+De[e>>16&255]+De[e>>24&255]+De[n&255]+De[n>>8&255]+De[n>>16&255]+De[n>>24&255]).toLowerCase()}function Pe(i,t,e){return Math.max(t,Math.min(e,i))}function Bu(i,t){return(i%t+t)%t}function Wr(i,t,e){return(1-e)*i+e*t}function _n(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function se(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(t=0,e=0){et.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,n,s,r,o,l,a,c){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,a,c)}set(t,e,n,s,r,o,l,a,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=a,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[3],a=n[6],c=n[1],u=n[4],h=n[7],d=n[2],m=n[5],p=n[8],v=s[0],f=s[3],g=s[6],x=s[1],M=s[4],y=s[7],R=s[2],w=s[5],A=s[8];return r[0]=o*v+l*x+a*R,r[3]=o*f+l*M+a*w,r[6]=o*g+l*y+a*A,r[1]=c*v+u*x+h*R,r[4]=c*f+u*M+h*w,r[7]=c*g+u*y+h*A,r[2]=d*v+m*x+p*R,r[5]=d*f+m*M+p*w,r[8]=d*g+m*y+p*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],u=t[8];return e*o*u-e*l*c-n*r*u+n*l*a+s*r*c-s*o*a}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],u=t[8],h=u*o-l*c,d=l*a-u*r,m=c*r-o*a,p=e*h+n*d+s*m;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return t[0]=h*v,t[1]=(s*c-u*n)*v,t[2]=(l*n-s*o)*v,t[3]=d*v,t[4]=(u*e-s*a)*v,t[5]=(s*r-l*e)*v,t[6]=m*v,t[7]=(n*a-c*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,l){const a=Math.cos(r),c=Math.sin(r);return this.set(n*a,n*c,-n*(a*o+c*l)+o+t,-s*c,s*a,-s*(-c*o+a*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(qr.makeScale(t,e)),this}rotate(t){return this.premultiply(qr.makeRotation(-t)),this}translate(t,e){return this.premultiply(qr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const qr=new Wt;function ih(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Rr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zu(){const i=Rr("canvas");return i.style.display="block",i}const vl={};function xr(i){i in vl||(vl[i]=!0,console.warn(i))}function Vu(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Gu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const _l=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),xl=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),rs={[$n]:{transfer:wr,primaries:Er,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[tn]:{transfer:oe,primaries:Er,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ir]:{transfer:wr,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(xl),fromReference:i=>i.applyMatrix3(_l)},[zo]:{transfer:oe,primaries:Tr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(xl),fromReference:i=>i.applyMatrix3(_l).convertLinearToSRGB()}},Wu=new Set([$n,Ir]),Qt={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Wu.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=rs[t].toReference,s=rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return rs[i].primaries},getTransfer:function(i){return i===zn?wr:rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(rs[t].luminanceCoefficients)}};function Wi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $r(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let vi;class qu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=Rr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Rr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Wi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wi(e[n]/255)*255):e[n]=Wi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $u=0;class sh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=Pn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,l=s.length;o<l;o++)s[o].isDataTexture?r.push(Xr(s[o].image)):r.push(Xr(s[o]))}else r=Xr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Xr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?qu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xu=0;class Fe extends ns{constructor(t=Fe.DEFAULT_IMAGE,e=Fe.DEFAULT_MAPPING,n=ai,s=ai,r=ln,o=oi,l=cn,a=Ln,c=Fe.DEFAULT_ANISOTROPY,u=zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Pn(),this.name="",this.source=new sh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=a,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Sr:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Ha:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Sr:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Ha:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=qc;Fe.DEFAULT_ANISOTROPY=1;class re{constructor(t=0,e=0,n=0,s=1){re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const a=t.elements,c=a[0],u=a[4],h=a[8],d=a[1],m=a[5],p=a[9],v=a[2],f=a[6],g=a[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-f)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+f)<.1&&Math.abs(c+m+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(c+1)/2,y=(m+1)/2,R=(g+1)/2,w=(u+d)/4,A=(h+v)/4,I=(p+f)/4;return M>y&&M>R?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=A/n):y>R?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=I/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=A/r,s=I/r),this.set(n,s,r,e),this}let x=Math.sqrt((f-p)*(f-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(f-p)/x,this.y=(h-v)/x,this.z=(d-u)/x,this.w=Math.acos((c+m+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yu extends ns{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Fe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let l=0;l<o;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new sh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ke extends Yu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class rh extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ku extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=we,this.minFilter=we,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,l){let a=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const d=r[o+0],m=r[o+1],p=r[o+2],v=r[o+3];if(l===0){t[e+0]=a,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(l===1){t[e+0]=d,t[e+1]=m,t[e+2]=p,t[e+3]=v;return}if(h!==v||a!==d||c!==m||u!==p){let f=1-l;const g=a*d+c*m+u*p+h*v,x=g>=0?1:-1,M=1-g*g;if(M>Number.EPSILON){const R=Math.sqrt(M),w=Math.atan2(R,g*x);f=Math.sin(f*w)/R,l=Math.sin(l*w)/R}const y=l*x;if(a=a*f+d*y,c=c*f+m*y,u=u*f+p*y,h=h*f+v*y,f===1-l){const R=1/Math.sqrt(a*a+c*c+u*u+h*h);a*=R,c*=R,u*=R,h*=R}}t[e]=a,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,o){const l=n[s],a=n[s+1],c=n[s+2],u=n[s+3],h=r[o],d=r[o+1],m=r[o+2],p=r[o+3];return t[e]=l*p+u*h+a*m-c*d,t[e+1]=a*p+u*d+c*h-l*m,t[e+2]=c*p+u*m+l*d-a*h,t[e+3]=u*p-l*h-a*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,l=Math.cos,a=Math.sin,c=l(n/2),u=l(s/2),h=l(r/2),d=a(n/2),m=a(s/2),p=a(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*p,this._y=c*m*h-d*u*p,this._z=c*u*p+d*m*h,this._w=c*u*h-d*m*p;break;case"YXZ":this._x=d*u*h+c*m*p,this._y=c*m*h-d*u*p,this._z=c*u*p-d*m*h,this._w=c*u*h+d*m*p;break;case"ZXY":this._x=d*u*h-c*m*p,this._y=c*m*h+d*u*p,this._z=c*u*p+d*m*h,this._w=c*u*h-d*m*p;break;case"ZYX":this._x=d*u*h-c*m*p,this._y=c*m*h+d*u*p,this._z=c*u*p-d*m*h,this._w=c*u*h+d*m*p;break;case"YZX":this._x=d*u*h+c*m*p,this._y=c*m*h+d*u*p,this._z=c*u*p-d*m*h,this._w=c*u*h-d*m*p;break;case"XZY":this._x=d*u*h-c*m*p,this._y=c*m*h-d*u*p,this._z=c*u*p+d*m*h,this._w=c*u*h+d*m*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],l=e[5],a=e[9],c=e[2],u=e[6],h=e[10],d=n+l+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-a)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(n>l&&n>h){const m=2*Math.sqrt(1+n-l-h);this._w=(u-a)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(l>h){const m=2*Math.sqrt(1+l-n-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(a+u)/m}else{const m=2*Math.sqrt(1+h-n-l);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(a+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pe(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,l=e._x,a=e._y,c=e._z,u=e._w;return this._x=n*u+o*l+s*c-r*a,this._y=s*u+o*a+r*l-n*c,this._z=r*u+o*c+n*a-s*l,this._w=o*u-n*l-s*a-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let l=o*t._w+n*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const a=1-l*l;if(a<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(a),u=Math.atan2(c,l),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,l=t.z,a=t.w,c=2*(o*s-l*n),u=2*(l*e-r*s),h=2*(r*n-o*e);return this.x=e+a*c+o*h-l*u,this.y=n+a*u+l*c-r*h,this.z=s+a*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,l=e.y,a=e.z;return this.x=s*a-r*l,this.y=r*o-n*a,this.z=n*l-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Yr.copy(this).projectOnVector(t),this.sub(Yr)}reflect(t){return this.sub(Yr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pe(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yr=new L,yl=new Ls;class di{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,l=r.count;o<l;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Fs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Fs.copy(n.boundingBox)),Fs.applyMatrix4(t.matrixWorld),this.union(Fs)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(as),ks.subVectors(this.max,as),_i.subVectors(t.a,as),xi.subVectors(t.b,as),yi.subVectors(t.c,as),In.subVectors(xi,_i),Un.subVectors(yi,xi),Kn.subVectors(_i,yi);let e=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Kn.z,Kn.y,In.z,0,-In.x,Un.z,0,-Un.x,Kn.z,0,-Kn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Kn.y,Kn.x,0];return!Kr(e,_i,xi,yi,ks)||(e=[1,0,0,0,1,0,0,0,1],!Kr(e,_i,xi,yi,ks))?!1:(Os.crossVectors(In,Un),e=[Os.x,Os.y,Os.z],Kr(e,_i,xi,yi,ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,Fs=new di,_i=new L,xi=new L,yi=new L,In=new L,Un=new L,Kn=new L,as=new L,ks=new L,Os=new L,Zn=new L;function Kr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zn.fromArray(i,r);const l=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),a=t.dot(Zn),c=e.dot(Zn),u=n.dot(Zn);if(Math.max(-Math.max(a,c,u),Math.min(a,c,u))>l)return!1}return!0}const Zu=new di,os=new L,Zr=new L;class is{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Zu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;os.subVectors(t,this.center);const e=os.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(os,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Zr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(os.copy(t.center).add(Zr)),this.expandByPoint(os.copy(t.center).sub(Zr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new L,jr=new L,Bs=new L,Nn=new L,Jr=new L,zs=new L,Qr=new L;class ah{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){jr.copy(t).add(e).multiplyScalar(.5),Bs.copy(e).sub(t).normalize(),Nn.copy(this.origin).sub(jr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Bs),l=Nn.dot(this.direction),a=-Nn.dot(Bs),c=Nn.lengthSq(),u=Math.abs(1-o*o);let h,d,m,p;if(u>0)if(h=o*a-l,d=o*l-a,p=r*u,h>=0)if(d>=-p)if(d<=p){const v=1/u;h*=v,d*=v,m=h*(h+o*d+2*l)+d*(o*h+d+2*a)+c}else d=r,h=Math.max(0,-(o*d+l)),m=-h*h+d*(d+2*a)+c;else d=-r,h=Math.max(0,-(o*d+l)),m=-h*h+d*(d+2*a)+c;else d<=-p?(h=Math.max(0,-(-o*r+l)),d=h>0?-r:Math.min(Math.max(-r,-a),r),m=-h*h+d*(d+2*a)+c):d<=p?(h=0,d=Math.min(Math.max(-r,-a),r),m=d*(d+2*a)+c):(h=Math.max(0,-(o*r+l)),d=h>0?r:Math.min(Math.max(-r,-a),r),m=-h*h+d*(d+2*a)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+l)),m=-h*h+d*(d+2*a)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(jr).addScaledVector(Bs,d),m}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),s=wn.dot(wn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),l=n-o,a=n+o;return a<0?null:l<0?this.at(a,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,l,a;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),h>=0?(l=(t.min.z-d.z)*h,a=(t.max.z-d.z)*h):(l=(t.max.z-d.z)*h,a=(t.min.z-d.z)*h),n>a||l>s)||((l>n||n!==n)&&(n=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,s,r){Jr.subVectors(e,t),zs.subVectors(n,t),Qr.crossVectors(Jr,zs);let o=this.direction.dot(Qr),l;if(o>0){if(s)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Nn.subVectors(this.origin,t);const a=l*this.direction.dot(zs.crossVectors(Nn,zs));if(a<0)return null;const c=l*this.direction.dot(Jr.cross(Nn));if(c<0||a+c>o)return null;const u=-l*Nn.dot(Qr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ie{constructor(t,e,n,s,r,o,l,a,c,u,h,d,m,p,v,f){ie.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,l,a,c,u,h,d,m,p,v,f)}set(t,e,n,s,r,o,l,a,c,u,h,d,m,p,v,f){const g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=l,g[13]=a,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=m,g[7]=p,g[11]=v,g[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ie().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),l=Math.sin(n),a=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*h,p=l*u,v=l*h;e[0]=a*u,e[4]=-a*h,e[8]=c,e[1]=m+p*c,e[5]=d-v*c,e[9]=-l*a,e[2]=v-d*c,e[6]=p+m*c,e[10]=o*a}else if(t.order==="YXZ"){const d=a*u,m=a*h,p=c*u,v=c*h;e[0]=d+v*l,e[4]=p*l-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-l,e[2]=m*l-p,e[6]=v+d*l,e[10]=o*a}else if(t.order==="ZXY"){const d=a*u,m=a*h,p=c*u,v=c*h;e[0]=d-v*l,e[4]=-o*h,e[8]=p+m*l,e[1]=m+p*l,e[5]=o*u,e[9]=v-d*l,e[2]=-o*c,e[6]=l,e[10]=o*a}else if(t.order==="ZYX"){const d=o*u,m=o*h,p=l*u,v=l*h;e[0]=a*u,e[4]=p*c-m,e[8]=d*c+v,e[1]=a*h,e[5]=v*c+d,e[9]=m*c-p,e[2]=-c,e[6]=l*a,e[10]=o*a}else if(t.order==="YZX"){const d=o*a,m=o*c,p=l*a,v=l*c;e[0]=a*u,e[4]=v-d*h,e[8]=p*h+m,e[1]=h,e[5]=o*u,e[9]=-l*u,e[2]=-c*u,e[6]=m*h+p,e[10]=d-v*h}else if(t.order==="XZY"){const d=o*a,m=o*c,p=l*a,v=l*c;e[0]=a*u,e[4]=-h,e[8]=c*u,e[1]=d*h+v,e[5]=o*u,e[9]=m*h-p,e[2]=p*h-m,e[6]=l*u,e[10]=v*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ju,t,Ju)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Fn.crossVectors(n,qe),Fn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Fn.crossVectors(n,qe)),Fn.normalize(),Vs.crossVectors(qe,Fn),s[0]=Fn.x,s[4]=Vs.x,s[8]=qe.x,s[1]=Fn.y,s[5]=Vs.y,s[9]=qe.y,s[2]=Fn.z,s[6]=Vs.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],l=n[4],a=n[8],c=n[12],u=n[1],h=n[5],d=n[9],m=n[13],p=n[2],v=n[6],f=n[10],g=n[14],x=n[3],M=n[7],y=n[11],R=n[15],w=s[0],A=s[4],I=s[8],D=s[12],_=s[1],S=s[5],V=s[9],O=s[13],U=s[2],B=s[6],F=s[10],nt=s[14],q=s[3],ot=s[7],pt=s[11],mt=s[15];return r[0]=o*w+l*_+a*U+c*q,r[4]=o*A+l*S+a*B+c*ot,r[8]=o*I+l*V+a*F+c*pt,r[12]=o*D+l*O+a*nt+c*mt,r[1]=u*w+h*_+d*U+m*q,r[5]=u*A+h*S+d*B+m*ot,r[9]=u*I+h*V+d*F+m*pt,r[13]=u*D+h*O+d*nt+m*mt,r[2]=p*w+v*_+f*U+g*q,r[6]=p*A+v*S+f*B+g*ot,r[10]=p*I+v*V+f*F+g*pt,r[14]=p*D+v*O+f*nt+g*mt,r[3]=x*w+M*_+y*U+R*q,r[7]=x*A+M*S+y*B+R*ot,r[11]=x*I+M*V+y*F+R*pt,r[15]=x*D+M*O+y*nt+R*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],l=t[5],a=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],p=t[3],v=t[7],f=t[11],g=t[15];return p*(+r*a*h-s*c*h-r*l*d+n*c*d+s*l*m-n*a*m)+v*(+e*a*m-e*c*d+r*o*d-s*o*m+s*c*u-r*a*u)+f*(+e*c*h-e*l*m-r*o*h+n*o*m+r*l*u-n*c*u)+g*(-s*l*u-e*a*h+e*l*d+s*o*h-n*o*d+n*a*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],l=t[5],a=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],p=t[12],v=t[13],f=t[14],g=t[15],x=h*f*c-v*d*c+v*a*m-l*f*m-h*a*g+l*d*g,M=p*d*c-u*f*c-p*a*m+o*f*m+u*a*g-o*d*g,y=u*v*c-p*h*c+p*l*m-o*v*m-u*l*g+o*h*g,R=p*h*a-u*v*a-p*l*d+o*v*d+u*l*f-o*h*f,w=e*x+n*M+s*y+r*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/w;return t[0]=x*A,t[1]=(v*d*r-h*f*r-v*s*m+n*f*m+h*s*g-n*d*g)*A,t[2]=(l*f*r-v*a*r+v*s*c-n*f*c-l*s*g+n*a*g)*A,t[3]=(h*a*r-l*d*r-h*s*c+n*d*c+l*s*m-n*a*m)*A,t[4]=M*A,t[5]=(u*f*r-p*d*r+p*s*m-e*f*m-u*s*g+e*d*g)*A,t[6]=(p*a*r-o*f*r-p*s*c+e*f*c+o*s*g-e*a*g)*A,t[7]=(o*d*r-u*a*r+u*s*c-e*d*c-o*s*m+e*a*m)*A,t[8]=y*A,t[9]=(p*h*r-u*v*r-p*n*m+e*v*m+u*n*g-e*h*g)*A,t[10]=(o*v*r-p*l*r+p*n*c-e*v*c-o*n*g+e*l*g)*A,t[11]=(u*l*r-o*h*r-u*n*c+e*h*c+o*n*m-e*l*m)*A,t[12]=R*A,t[13]=(u*v*s-p*h*s+p*n*d-e*v*d-u*n*f+e*h*f)*A,t[14]=(p*l*s-o*v*s-p*n*a+e*v*a+o*n*f-e*l*f)*A,t[15]=(o*h*s-u*l*s+u*n*a-e*h*a-o*n*d+e*l*d)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,l=t.y,a=t.z,c=r*o,u=r*l;return this.set(c*o+n,c*l-s*a,c*a+s*l,0,c*l+s*a,u*l+n,u*a-s*o,0,c*a-s*l,u*a+s*o,r*a*a+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,l=e._z,a=e._w,c=r+r,u=o+o,h=l+l,d=r*c,m=r*u,p=r*h,v=o*u,f=o*h,g=l*h,x=a*c,M=a*u,y=a*h,R=n.x,w=n.y,A=n.z;return s[0]=(1-(v+g))*R,s[1]=(m+y)*R,s[2]=(p-M)*R,s[3]=0,s[4]=(m-y)*w,s[5]=(1-(d+g))*w,s[6]=(f+x)*w,s[7]=0,s[8]=(p+M)*A,s[9]=(f-x)*A,s[10]=(1-(d+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Mi.set(s[0],s[1],s[2]).length();const o=Mi.set(s[4],s[5],s[6]).length(),l=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const c=1/r,u=1/o,h=1/l;return rn.elements[0]*=c,rn.elements[1]*=c,rn.elements[2]*=c,rn.elements[4]*=u,rn.elements[5]*=u,rn.elements[6]*=u,rn.elements[8]*=h,rn.elements[9]*=h,rn.elements[10]*=h,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,o,l=Rn){const a=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),d=(n+s)/(n-s);let m,p;if(l===Rn)m=-(o+r)/(o-r),p=-2*o*r/(o-r);else if(l===Ar)m=-o/(o-r),p=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=c,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=u,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=m,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,s,r,o,l=Rn){const a=this.elements,c=1/(e-t),u=1/(n-s),h=1/(o-r),d=(e+t)*c,m=(n+s)*u;let p,v;if(l===Rn)p=(o+r)*h,v=-2*h;else if(l===Ar)p=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*u,a[9]=0,a[13]=-m,a[2]=0,a[6]=0,a[10]=v,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Mi=new L,rn=new ie,ju=new L(0,0,0),Ju=new L(1,1,1),Fn=new L,Vs=new L,qe=new L,Ml=new ie,bl=new Ls;class dn{constructor(t=0,e=0,n=0,s=dn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],l=s[8],a=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Pe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Pe(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,m),this._z=Math.atan2(a,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Pe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(a,r));break;case"ZYX":this._y=Math.asin(-Pe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(a,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Pe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,m));break;case"XZY":this._z=Math.asin(-Pe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Ml.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ml,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return bl.setFromEuler(this),this.setFromQuaternion(bl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}dn.DEFAULT_ORDER="XYZ";class oh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Qu=0;const Sl=new L,bi=new Ls,En=new ie,Gs=new L,ls=new L,tf=new L,ef=new Ls,wl=new L(1,0,0),El=new L(0,1,0),Tl=new L(0,0,1),Al={type:"added"},nf={type:"removed"},Si={type:"childadded",child:null},ta={type:"childremoved",child:null};class me extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=Pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=me.DEFAULT_UP.clone();const t=new L,e=new dn,n=new Ls,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ie},normalMatrix:{value:new Wt}}),this.matrix=new ie,this.matrixWorld=new ie,this.matrixAutoUpdate=me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new oh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(wl,t)}rotateY(t){return this.rotateOnAxis(El,t)}rotateZ(t){return this.rotateOnAxis(Tl,t)}translateOnAxis(t,e){return Sl.copy(t).applyQuaternion(this.quaternion),this.position.add(Sl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(wl,t)}translateY(t){return this.translateOnAxis(El,t)}translateZ(t){return this.translateOnAxis(Tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Gs.copy(t):Gs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ls,Gs,this.up):En.lookAt(Gs,ls,this.up),this.quaternion.setFromRotationMatrix(En),s&&(En.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(En),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Al),Si.child=t,this.dispatchEvent(Si),Si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(nf),ta.child=t,this.dispatchEvent(ta),ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),En.multiply(t.parent.matrixWorld)),t.applyMatrix4(En),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Al),Si.child=t,this.dispatchEvent(Si),Si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,t,tf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ls,ef,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let c=0,u=a.length;c<u;c++){const h=a[c];r(t.shapes,h)}else r(t.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,c=this.material.length;a<c;a++)l.push(r(t.materials,this.material[a]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];s.animations.push(r(t.animations,a))}}if(e){const l=o(t.geometries),a=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),p=o(t.nodes);l.length>0&&(n.geometries=l),a.length>0&&(n.materials=a),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),p.length>0&&(n.nodes=p)}return n.object=s,n;function o(l){const a=[];for(const c in l){const u=l[c];delete u.metadata,a.push(u)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}me.DEFAULT_UP=new L(0,1,0);me.DEFAULT_MATRIX_AUTO_UPDATE=!0;me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const an=new L,Tn=new L,ea=new L,An=new L,wi=new L,Ei=new L,Cl=new L,na=new L,ia=new L,sa=new L,ra=new re,aa=new re,oa=new re;class en{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),an.subVectors(t,e),s.cross(an);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){an.subVectors(s,e),Tn.subVectors(n,e),ea.subVectors(t,e);const o=an.dot(an),l=an.dot(Tn),a=an.dot(ea),c=Tn.dot(Tn),u=Tn.dot(ea),h=o*c-l*l;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*a-l*u)*d,p=(o*u-l*a)*d;return r.set(1-m-p,p,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,n,s,r,o,l,a){return this.getBarycoord(t,e,n,s,An)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(r,An.x),a.addScaledVector(o,An.y),a.addScaledVector(l,An.z),a)}static getInterpolatedAttribute(t,e,n,s,r,o){return ra.setScalar(0),aa.setScalar(0),oa.setScalar(0),ra.fromBufferAttribute(t,e),aa.fromBufferAttribute(t,n),oa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(ra,r.x),o.addScaledVector(aa,r.y),o.addScaledVector(oa,r.z),o}static isFrontFacing(t,e,n,s){return an.subVectors(n,e),Tn.subVectors(t,e),an.cross(Tn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return an.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),an.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return en.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return en.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return en.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return en.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return en.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,l;wi.subVectors(s,n),Ei.subVectors(r,n),na.subVectors(t,n);const a=wi.dot(na),c=Ei.dot(na);if(a<=0&&c<=0)return e.copy(n);ia.subVectors(t,s);const u=wi.dot(ia),h=Ei.dot(ia);if(u>=0&&h<=u)return e.copy(s);const d=a*h-u*c;if(d<=0&&a>=0&&u<=0)return o=a/(a-u),e.copy(n).addScaledVector(wi,o);sa.subVectors(t,r);const m=wi.dot(sa),p=Ei.dot(sa);if(p>=0&&m<=p)return e.copy(r);const v=m*c-a*p;if(v<=0&&c>=0&&p<=0)return l=c/(c-p),e.copy(n).addScaledVector(Ei,l);const f=u*p-m*h;if(f<=0&&h-u>=0&&m-p>=0)return Cl.subVectors(r,s),l=(h-u)/(h-u+(m-p)),e.copy(s).addScaledVector(Cl,l);const g=1/(f+v+d);return o=v*g,l=d*g,e.copy(n).addScaledVector(wi,o).addScaledVector(Ei,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function la(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Bu(t,1),e=Pe(e,0,1),n=Pe(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=la(o,r,t+1/3),this.g=la(o,r,t),this.b=la(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=tn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],l=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){const n=lh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wi(t.r),this.g=Wi(t.g),this.b=Wi(t.b),this}copyLinearToSRGB(t){return this.r=$r(t.r),this.g=$r(t.g),this.b=$r(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return Qt.fromWorkingColorSpace(Ie.copy(this),t),Math.round(Pe(Ie.r*255,0,255))*65536+Math.round(Pe(Ie.g*255,0,255))*256+Math.round(Pe(Ie.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(Ie.copy(this),e);const n=Ie.r,s=Ie.g,r=Ie.b,o=Math.max(n,s,r),l=Math.min(n,s,r);let a,c;const u=(l+o)/2;if(l===o)a=0,c=0;else{const h=o-l;switch(c=u<=.5?h/(o+l):h/(2-o-l),o){case n:a=(s-r)/h+(s<r?6:0);break;case s:a=(r-n)/h+2;break;case r:a=(n-s)/h+4;break}a/=6}return t.h=a,t.s=c,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(Ie.copy(this),e),t.r=Ie.r,t.g=Ie.g,t.b=Ie.b,t}getStyle(t=tn){Qt.fromWorkingColorSpace(Ie.copy(this),t);const e=Ie.r,n=Ie.g,s=Ie.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(kn),this.setHSL(kn.h+t,kn.s+e,kn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kn),t.getHSL(Hs);const n=Wr(kn.h,Hs.h,e),s=Wr(kn.s,Hs.s,e),r=Wr(kn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ie=new zt;zt.NAMES=lh;let sf=0;class Xn extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=Pn(),this.name="",this.type="Material",this.blending=ci,this.side=Wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=Ia,this.blendEquation=ii,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ml,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ci&&(n.blending=this.blending),this.side!==Wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Da&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==ii&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ml&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const l in r){const a=r[l];delete a.metadata,o.push(a)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mn extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Me=new L,Ws=new et;class Ze{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=vo,this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ws.fromBufferAttribute(this,e),Ws.applyMatrix3(t),this.setXY(e,Ws.x,Ws.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix3(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyMatrix4(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.applyNormalMatrix(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Me.fromBufferAttribute(this,e),Me.transformDirection(t),this.setXYZ(e,Me.x,Me.y,Me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=_n(e,this.array)),e}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=_n(e,this.array)),e}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=_n(e,this.array)),e}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=_n(e,this.array)),e}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==vo&&(t.usage=this.usage),t}}class ch extends Ze{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hh extends Ze{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Ze{constructor(t,e,n){super(new Float32Array(t),e,n)}}let rf=0;const Qe=new ie,ca=new me,Ti=new L,$e=new di,cs=new di,Ce=new L;class Ae extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rf++}),this.uuid=Pn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ih(t)?hh:ch)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Wt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return ca.lookAt(t),ca.updateMatrix(),this.applyMatrix4(ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new di);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];$e.setFromBufferAttribute(r),this.morphTargetsRelative?(Ce.addVectors(this.boundingBox.min,$e.min),this.boundingBox.expandByPoint(Ce),Ce.addVectors(this.boundingBox.max,$e.max),this.boundingBox.expandByPoint(Ce)):(this.boundingBox.expandByPoint($e.min),this.boundingBox.expandByPoint($e.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if($e.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const l=e[r];cs.setFromBufferAttribute(l),this.morphTargetsRelative?(Ce.addVectors($e.min,cs.min),$e.expandByPoint(Ce),Ce.addVectors($e.max,cs.max),$e.expandByPoint(Ce)):($e.expandByPoint(cs.min),$e.expandByPoint(cs.max))}$e.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Ce.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ce));if(e)for(let r=0,o=e.length;r<o;r++){const l=e[r],a=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)Ce.fromBufferAttribute(l,c),a&&(Ti.fromBufferAttribute(t,c),Ce.add(Ti)),s=Math.max(s,n.distanceToSquared(Ce))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ze(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),l=[],a=[];for(let I=0;I<n.count;I++)l[I]=new L,a[I]=new L;const c=new L,u=new L,h=new L,d=new et,m=new et,p=new et,v=new L,f=new L;function g(I,D,_){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,D),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,D),p.fromBufferAttribute(r,_),u.sub(c),h.sub(c),m.sub(d),p.sub(d);const S=1/(m.x*p.y-p.x*m.y);isFinite(S)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-m.y).multiplyScalar(S),f.copy(h).multiplyScalar(m.x).addScaledVector(u,-p.x).multiplyScalar(S),l[I].add(v),l[D].add(v),l[_].add(v),a[I].add(f),a[D].add(f),a[_].add(f))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let I=0,D=x.length;I<D;++I){const _=x[I],S=_.start,V=_.count;for(let O=S,U=S+V;O<U;O+=3)g(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const M=new L,y=new L,R=new L,w=new L;function A(I){R.fromBufferAttribute(s,I),w.copy(R);const D=l[I];M.copy(D),M.sub(R.multiplyScalar(R.dot(D))).normalize(),y.crossVectors(w,D);const S=y.dot(a[I])<0?-1:1;o.setXYZW(I,M.x,M.y,M.z,S)}for(let I=0,D=x.length;I<D;++I){const _=x[I],S=_.start,V=_.count;for(let O=S,U=S+V;O<U;O+=3)A(t.getX(O+0)),A(t.getX(O+1)),A(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ze(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,l=new L,a=new L,c=new L,u=new L,h=new L;if(t)for(let d=0,m=t.count;d<m;d+=3){const p=t.getX(d+0),v=t.getX(d+1),f=t.getX(d+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,f),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(n,p),a.fromBufferAttribute(n,v),c.fromBufferAttribute(n,f),l.add(u),a.add(u),c.add(u),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(v,a.x,a.y,a.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ce.fromBufferAttribute(t,e),Ce.normalize(),t.setXYZ(e,Ce.x,Ce.y,Ce.z)}toNonIndexed(){function t(l,a){const c=l.array,u=l.itemSize,h=l.normalized,d=new c.constructor(a.length*u);let m=0,p=0;for(let v=0,f=a.length;v<f;v++){l.isInterleavedBufferAttribute?m=a[v]*l.data.stride+l.offset:m=a[v]*u;for(let g=0;g<u;g++)d[p++]=c[m++]}return new Ze(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ae,n=this.index.array,s=this.attributes;for(const l in s){const a=s[l],c=t(a,n);e.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const a=[],c=r[l];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,n);a.push(m)}e.morphAttributes[l]=a}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,a=o.length;l<a;l++){const c=o[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const c in a)a[c]!==void 0&&(t[c]=a[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const a in n){const c=n[a];t.data.attributes[a]=c.toJSON(t.data)}const s={};let r=!1;for(const a in this.morphAttributes){const c=this.morphAttributes[a],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[a]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Rl=new ie,jn=new ah,qs=new is,Pl=new L,$s=new L,Xs=new L,Ys=new L,ha=new L,Ks=new L,Ll=new L,Zs=new L;class xe extends me{constructor(t=new Ae,e=new mn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){Ks.set(0,0,0);for(let a=0,c=r.length;a<c;a++){const u=l[a],h=r[a];u!==0&&(ha.fromBufferAttribute(h,t),o?Ks.addScaledVector(ha,u):Ks.addScaledVector(ha.sub(e),u))}e.add(Ks)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),qs.copy(n.boundingSphere),qs.applyMatrix4(r),jn.copy(t.ray).recast(t.near),!(qs.containsPoint(jn.origin)===!1&&(jn.intersectSphere(qs,Pl)===null||jn.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Rl.copy(r).invert(),jn.copy(t.ray).applyMatrix4(Rl),!(n.boundingBox!==null&&jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,l=r.index,a=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(l!==null)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const f=d[p],g=o[f.materialIndex],x=Math.max(f.start,m.start),M=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let y=x,R=M;y<R;y+=3){const w=l.getX(y),A=l.getX(y+1),I=l.getX(y+2);s=js(this,g,t,n,c,u,h,w,A,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,m.start),v=Math.min(l.count,m.start+m.count);for(let f=p,g=v;f<g;f+=3){const x=l.getX(f),M=l.getX(f+1),y=l.getX(f+2);s=js(this,o,t,n,c,u,h,x,M,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(o))for(let p=0,v=d.length;p<v;p++){const f=d[p],g=o[f.materialIndex],x=Math.max(f.start,m.start),M=Math.min(a.count,Math.min(f.start+f.count,m.start+m.count));for(let y=x,R=M;y<R;y+=3){const w=y,A=y+1,I=y+2;s=js(this,g,t,n,c,u,h,w,A,I),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=f.materialIndex,e.push(s))}}else{const p=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let f=p,g=v;f<g;f+=3){const x=f,M=f+1,y=f+2;s=js(this,o,t,n,c,u,h,x,M,y),s&&(s.faceIndex=Math.floor(f/3),e.push(s))}}}}function af(i,t,e,n,s,r,o,l){let a;if(t.side===Ge?a=n.intersectTriangle(o,r,s,!0,l):a=n.intersectTriangle(s,r,o,t.side===Wn,l),a===null)return null;Zs.copy(l),Zs.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:i}}function js(i,t,e,n,s,r,o,l,a,c){i.getVertexPosition(l,$s),i.getVertexPosition(a,Xs),i.getVertexPosition(c,Ys);const u=af(i,t,e,n,$s,Xs,Ys,Ll);if(u){const h=new L;en.getBarycoord(Ll,$s,Xs,Ys,h),s&&(u.uv=en.getInterpolatedAttribute(s,l,a,c,h,new et)),r&&(u.uv1=en.getInterpolatedAttribute(r,l,a,c,h,new et)),o&&(u.normal=en.getInterpolatedAttribute(o,l,a,c,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:l,b:a,c,normal:new L,materialIndex:0};en.getNormal($s,Xs,Ys,d.normal),u.face=d,u.barycoord=h}return u}class ui extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const l=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const a=[],c=[],u=[],h=[];let d=0,m=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,s,o,2),p("x","z","y",1,-1,t,n,-e,s,o,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(a),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(h,2));function p(v,f,g,x,M,y,R,w,A,I,D){const _=y/A,S=R/I,V=y/2,O=R/2,U=w/2,B=A+1,F=I+1;let nt=0,q=0;const ot=new L;for(let pt=0;pt<F;pt++){const mt=pt*S-O;for(let Gt=0;Gt<B;Gt++){const qt=Gt*_-V;ot[v]=qt*x,ot[f]=mt*M,ot[g]=U,c.push(ot.x,ot.y,ot.z),ot[v]=0,ot[f]=0,ot[g]=w>0?1:-1,u.push(ot.x,ot.y,ot.z),h.push(Gt/A),h.push(1-pt/I),nt+=1}}for(let pt=0;pt<I;pt++)for(let mt=0;mt<A;mt++){const Gt=d+mt+B*pt,qt=d+mt+B*(pt+1),X=d+(mt+1)+B*(pt+1),tt=d+(mt+1)+B*pt;a.push(Gt,qt,tt),a.push(qt,X,tt),q+=6}l.addGroup(m,q,D),m+=q,d+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ui(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ji(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){const t={};for(let e=0;e<i.length;e++){const n=ji(i[e]);for(const s in n)t[s]=n[s]}return t}function of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function uh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Ji={clone:ji,merge:Oe};var lf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ne extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lf,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ji(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class fh extends me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ie,this.projectionMatrix=new ie,this.projectionMatrixInverse=new ie,this.coordinateSystem=Rn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const On=new L,Dl=new et,Il=new et;class Ve extends fh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Cr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Cr*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(On.x,On.y).multiplyScalar(-t/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-t/On.z)}getViewSize(t,e){return this.getViewBounds(t,Dl,Il),e.subVectors(Il,Dl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const a=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/a,e-=o.offsetY*n/c,s*=o.width/a,n*=o.height/c}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ai=-90,Ci=1;class hf extends me{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ve(Ai,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Ve(Ai,Ci,t,e);r.layers=this.layers,this.add(r);const o=new Ve(Ai,Ci,t,e);o.layers=this.layers,this.add(o);const l=new Ve(Ai,Ci,t,e);l.layers=this.layers,this.add(l);const a=new Ve(Ai,Ci,t,e);a.layers=this.layers,this.add(a);const c=new Ve(Ai,Ci,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,l,a]=e;for(const c of e)this.remove(c);if(t===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,l,a,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,a),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class dh extends Fe{constructor(t,e,n,s,r,o,l,a,c,u){t=t!==void 0?t:[],e=e!==void 0?e:Xi,super(t,e,n,s,r,o,l,a,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class uf extends Ke{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new dh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ui(5,5,5),r=new Ne({name:"CubemapFromEquirect",uniforms:ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ge,blending:yn});r.uniforms.tEquirect.value=e;const o=new xe(s,r),l=e.minFilter;return e.minFilter===oi&&(e.minFilter=ln),new hf(1,10,this).update(t,o),e.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ua=new L,ff=new L,df=new Wt;class ei{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ua.subVectors(n,e).cross(ff.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ua),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||df.getNormalMatrix(t),s=this.coplanarPoint(ua).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Jn=new is,Js=new L;class Vo{constructor(t=new ei,e=new ei,n=new ei,s=new ei,r=new ei,o=new ei){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Rn){const n=this.planes,s=t.elements,r=s[0],o=s[1],l=s[2],a=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],p=s[9],v=s[10],f=s[11],g=s[12],x=s[13],M=s[14],y=s[15];if(n[0].setComponents(a-r,d-c,f-m,y-g).normalize(),n[1].setComponents(a+r,d+c,f+m,y+g).normalize(),n[2].setComponents(a+o,d+u,f+p,y+x).normalize(),n[3].setComponents(a-o,d-u,f-p,y-x).normalize(),n[4].setComponents(a-l,d-h,f-v,y-M).normalize(),e===Rn)n[5].setComponents(a+l,d+h,f+v,y+M).normalize();else if(e===Ar)n[5].setComponents(l,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Jn)}intersectsSprite(t){return Jn.center.set(0,0,0),Jn.radius=.7071067811865476,Jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Js.x=s.normal.x>0?t.max.x:t.min.x,Js.y=s.normal.y>0?t.max.y:t.min.y,Js.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Js)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ph(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function pf(i){const t=new WeakMap;function e(l,a){const c=l.array,u=l.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(a,d),i.bufferData(a,c,u),l.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,a,c){const u=a.array,h=a.updateRanges;if(i.bindBuffer(c,l),h.length===0)i.bufferSubData(c,0,u);else{h.sort((m,p)=>m.start-p.start);let d=0;for(let m=1;m<h.length;m++){const p=h[d],v=h[m];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,p=h.length;m<p;m++){const v=h[m];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=t.get(l);a&&(i.deleteBuffer(a.buffer),t.delete(l))}function o(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,a));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,a),c.version=l.version}}return{get:s,remove:r,update:o}}class qn extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,l=Math.floor(n),a=Math.floor(s),c=l+1,u=a+1,h=t/l,d=e/a,m=[],p=[],v=[],f=[];for(let g=0;g<u;g++){const x=g*d-o;for(let M=0;M<c;M++){const y=M*h-r;p.push(y,-x,0),v.push(0,0,1),f.push(M/l),f.push(1-g/a)}}for(let g=0;g<a;g++)for(let x=0;x<l;x++){const M=x+c*g,y=x+c*(g+1),R=x+1+c*(g+1),w=x+1+c*g;m.push(M,y,w),m.push(y,R,w)}this.setIndex(m),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qn(t.width,t.height,t.widthSegments,t.heightSegments)}}var mf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gf=`#ifdef USE_ALPHAHASH
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
#endif`,vf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mf=`#ifdef USE_AOMAP
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
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sf=`#ifdef USE_BATCHING
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
#endif`,wf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Af=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Cf=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zf=`vec3 transformedNormal = objectNormal;
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
#endif`,Vf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qf="gl_FragColor = linearToOutputTexel( gl_FragColor );",$f=`
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
}`,Xf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,jf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,td=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nd=`#ifdef USE_GRADIENTMAP
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
}`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
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
#endif`,od=`#ifdef USE_ENVMAP
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
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
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
#endif`,dd=`struct PhysicalMaterial {
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
}`,pd=`
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
#endif`,md=`#if defined( RE_IndirectDiffuse )
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
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Md=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,wd=`#if defined( USE_POINTS_UV )
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
#endif`,Ed=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Td=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Cd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Pd=`#ifdef USE_MORPHTARGETS
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
#endif`,Ld=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Id=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kd=`#ifdef USE_NORMALMAP
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
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Vd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Wd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$d=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,jd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Jd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Qd=`float getShadowMask() {
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
}`,tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
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
#endif`,np=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ip=`#ifdef USE_SKINNING
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
#endif`,sp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ap=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,op=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,lp=`#ifdef USE_TRANSMISSION
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
#endif`,cp=`#ifdef USE_TRANSMISSION
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mp=`uniform sampler2D t2D;
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`#include <common>
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
}`,Mp=`#if DEPTH_PACKING == 3200
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
}`,bp=`#define DISTANCE
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
}`,Sp=`#define DISTANCE
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
}`,wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,Ap=`uniform vec3 diffuse;
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
}`,Cp=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Pp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Dp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Up=`#define NORMAL
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
}`,Np=`#define NORMAL
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
}`,Fp=`#define PHONG
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
}`,kp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,Bp=`#define STANDARD
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
}`,zp=`#define TOON
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
}`,Vp=`#define TOON
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
}`,Gp=`uniform float size;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Wp=`#include <common>
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
}`,qp=`uniform vec3 color;
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
}`,$p=`uniform float rotation;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:mf,alphahash_pars_fragment:gf,alphamap_fragment:vf,alphamap_pars_fragment:_f,alphatest_fragment:xf,alphatest_pars_fragment:yf,aomap_fragment:Mf,aomap_pars_fragment:bf,batching_pars_vertex:Sf,batching_vertex:wf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:Af,iridescence_fragment:Cf,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Df,clipping_planes_vertex:If,color_fragment:Uf,color_pars_fragment:Nf,color_pars_vertex:Ff,color_vertex:kf,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Vf,displacementmap_vertex:Gf,emissivemap_fragment:Hf,emissivemap_pars_fragment:Wf,colorspace_fragment:qf,colorspace_pars_fragment:$f,envmap_fragment:Xf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:Kf,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:od,envmap_vertex:jf,fog_vertex:Jf,fog_pars_vertex:Qf,fog_fragment:td,fog_pars_fragment:ed,gradientmap_pars_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:sd,lights_lambert_pars_fragment:rd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:hd,lights_phong_pars_fragment:ud,lights_physical_fragment:fd,lights_physical_pars_fragment:dd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:yd,map_fragment:Md,map_pars_fragment:bd,map_particle_fragment:Sd,map_particle_pars_fragment:wd,metalnessmap_fragment:Ed,metalnessmap_pars_fragment:Td,morphinstance_vertex:Ad,morphcolor_vertex:Cd,morphnormal_vertex:Rd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Ld,normal_fragment_begin:Dd,normal_fragment_maps:Id,normal_pars_fragment:Ud,normal_pars_vertex:Nd,normal_vertex:Fd,normalmap_pars_fragment:kd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Vd,opaque_fragment:Gd,packing:Hd,premultiplied_alpha_fragment:Wd,project_vertex:qd,dithering_fragment:$d,dithering_pars_fragment:Xd,roughnessmap_fragment:Yd,roughnessmap_pars_fragment:Kd,shadowmap_pars_fragment:Zd,shadowmap_pars_vertex:jd,shadowmap_vertex:Jd,shadowmask_pars_fragment:Qd,skinbase_vertex:tp,skinning_pars_vertex:ep,skinning_vertex:np,skinnormal_vertex:ip,specularmap_fragment:sp,specularmap_pars_fragment:rp,tonemapping_fragment:ap,tonemapping_pars_fragment:op,transmission_fragment:lp,transmission_pars_fragment:cp,uv_pars_fragment:hp,uv_pars_vertex:up,uv_vertex:fp,worldpos_vertex:dp,background_vert:pp,background_frag:mp,backgroundCube_vert:gp,backgroundCube_frag:vp,cube_vert:_p,cube_frag:xp,depth_vert:yp,depth_frag:Mp,distanceRGBA_vert:bp,distanceRGBA_frag:Sp,equirect_vert:wp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:Ap,meshbasic_vert:Cp,meshbasic_frag:Rp,meshlambert_vert:Pp,meshlambert_frag:Lp,meshmatcap_vert:Dp,meshmatcap_frag:Ip,meshnormal_vert:Up,meshnormal_frag:Np,meshphong_vert:Fp,meshphong_frag:kp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Vp,points_vert:Gp,points_frag:Hp,shadow_vert:Wp,shadow_frag:qp,sprite_vert:$p,sprite_frag:Xp},dt={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},envMapRotation:{value:new Wt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},gn={basic:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Oe([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Oe([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Oe([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Oe([dt.points,dt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Oe([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Oe([dt.common,dt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Oe([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Oe([dt.sprite,dt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Wt}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Oe([dt.common,dt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Oe([dt.lights,dt.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};gn.physical={uniforms:Oe([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new et},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const Qs={r:0,b:0,g:0},Qn=new dn,Yp=new ie;function Kp(i,t,e,n,s,r,o){const l=new zt(0);let a=r===!0?0:1,c,u,h=null,d=0,m=null;function p(x){let M=x.isScene===!0?x.background:null;return M&&M.isTexture&&(M=(x.backgroundBlurriness>0?e:t).get(M)),M}function v(x){let M=!1;const y=p(x);y===null?g(l,a):y&&y.isColor&&(g(y,1),M=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function f(x,M){const y=p(M);y&&(y.isCubeTexture||y.mapping===Dr)?(u===void 0&&(u=new xe(new ui(1,1,1),new Ne({name:"BackgroundCubeMaterial",uniforms:ji(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ge,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Qn.copy(M.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Qn)),u.material.toneMapped=Qt.getTransfer(y.colorSpace)!==oe,(h!==y||d!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new xe(new qn(2,2),new Ne({name:"BackgroundMaterial",uniforms:ji(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(y.colorSpace)!==oe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,m=i.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,M){x.getRGB(Qs,uh(i)),n.buffers.color.setClear(Qs.r,Qs.g,Qs.b,M,o)}return{getClearColor:function(){return l},setClearColor:function(x,M=1){l.set(x),a=M,g(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(x){a=x,g(l,a)},render:v,addToRenderList:f}}function Zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function l(_,S,V,O,U){let B=!1;const F=h(O,V,S);r!==F&&(r=F,c(r.object)),B=m(_,O,V,U),B&&p(_,O,V,U),U!==null&&t.update(U,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,y(_,S,V,O),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function a(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function u(_){return i.deleteVertexArray(_)}function h(_,S,V){const O=V.wireframe===!0;let U=n[_.id];U===void 0&&(U={},n[_.id]=U);let B=U[S.id];B===void 0&&(B={},U[S.id]=B);let F=B[O];return F===void 0&&(F=d(a()),B[O]=F),F}function d(_){const S=[],V=[],O=[];for(let U=0;U<e;U++)S[U]=0,V[U]=0,O[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:V,attributeDivisors:O,object:_,attributes:{},index:null}}function m(_,S,V,O){const U=r.attributes,B=S.attributes;let F=0;const nt=V.getAttributes();for(const q in nt)if(nt[q].location>=0){const pt=U[q];let mt=B[q];if(mt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(mt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(mt=_.instanceColor)),pt===void 0||pt.attribute!==mt||mt&&pt.data!==mt.data)return!0;F++}return r.attributesNum!==F||r.index!==O}function p(_,S,V,O){const U={},B=S.attributes;let F=0;const nt=V.getAttributes();for(const q in nt)if(nt[q].location>=0){let pt=B[q];pt===void 0&&(q==="instanceMatrix"&&_.instanceMatrix&&(pt=_.instanceMatrix),q==="instanceColor"&&_.instanceColor&&(pt=_.instanceColor));const mt={};mt.attribute=pt,pt&&pt.data&&(mt.data=pt.data),U[q]=mt,F++}r.attributes=U,r.attributesNum=F,r.index=O}function v(){const _=r.newAttributes;for(let S=0,V=_.length;S<V;S++)_[S]=0}function f(_){g(_,0)}function g(_,S){const V=r.newAttributes,O=r.enabledAttributes,U=r.attributeDivisors;V[_]=1,O[_]===0&&(i.enableVertexAttribArray(_),O[_]=1),U[_]!==S&&(i.vertexAttribDivisor(_,S),U[_]=S)}function x(){const _=r.newAttributes,S=r.enabledAttributes;for(let V=0,O=S.length;V<O;V++)S[V]!==_[V]&&(i.disableVertexAttribArray(V),S[V]=0)}function M(_,S,V,O,U,B,F){F===!0?i.vertexAttribIPointer(_,S,V,U,B):i.vertexAttribPointer(_,S,V,O,U,B)}function y(_,S,V,O){v();const U=O.attributes,B=V.getAttributes(),F=S.defaultAttributeValues;for(const nt in B){const q=B[nt];if(q.location>=0){let ot=U[nt];if(ot===void 0&&(nt==="instanceMatrix"&&_.instanceMatrix&&(ot=_.instanceMatrix),nt==="instanceColor"&&_.instanceColor&&(ot=_.instanceColor)),ot!==void 0){const pt=ot.normalized,mt=ot.itemSize,Gt=t.get(ot);if(Gt===void 0)continue;const qt=Gt.buffer,X=Gt.type,tt=Gt.bytesPerElement,gt=X===i.INT||X===i.UNSIGNED_INT||ot.gpuType===Do;if(ot.isInterleavedBufferAttribute){const ct=ot.data,Ut=ct.stride,Nt=ot.offset;if(ct.isInstancedInterleavedBuffer){for(let it=0;it<q.locationSize;it++)g(q.location+it,ct.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let it=0;it<q.locationSize;it++)f(q.location+it);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let it=0;it<q.locationSize;it++)M(q.location+it,mt/q.locationSize,X,pt,Ut*tt,(Nt+mt/q.locationSize*it)*tt,gt)}else{if(ot.isInstancedBufferAttribute){for(let ct=0;ct<q.locationSize;ct++)g(q.location+ct,ot.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let ct=0;ct<q.locationSize;ct++)f(q.location+ct);i.bindBuffer(i.ARRAY_BUFFER,qt);for(let ct=0;ct<q.locationSize;ct++)M(q.location+ct,mt/q.locationSize,X,pt,mt*tt,mt/q.locationSize*ct*tt,gt)}}else if(F!==void 0){const pt=F[nt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(q.location,pt);break;case 3:i.vertexAttrib3fv(q.location,pt);break;case 4:i.vertexAttrib4fv(q.location,pt);break;default:i.vertexAttrib1fv(q.location,pt)}}}}x()}function R(){I();for(const _ in n){const S=n[_];for(const V in S){const O=S[V];for(const U in O)u(O[U].object),delete O[U];delete S[V]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const S=n[_.id];for(const V in S){const O=S[V];for(const U in O)u(O[U].object),delete O[U];delete S[V]}delete n[_.id]}function A(_){for(const S in n){const V=n[S];if(V[_.id]===void 0)continue;const O=V[_.id];for(const U in O)u(O[U].object),delete O[U];delete V[_.id]}}function I(){D(),o=!0,r!==s&&(r=s,c(r.object))}function D(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:I,resetDefaultState:D,dispose:R,releaseStatesOfGeometry:w,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:f,disableUnusedAttributes:x}}function jp(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function l(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let m=0;for(let p=0;p<h;p++)m+=u[p];e.update(m,n,1)}function a(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<c.length;p++)o(c[p],u[p],d[p]);else{m.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];for(let v=0;v<d.length;v++)e.update(p,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function Jp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(A){return!(A!==cn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(A){const I=A===un&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Ln&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==xn&&!I)}function a(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=a(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const A=t.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),f=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=p>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:a,textureFormatReadable:o,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:f,maxAttributes:g,maxVertexUniforms:x,maxVaryings:M,maxFragmentUniforms:y,vertexTextures:R,maxSamples:w}}function Qp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ei,l=new Wt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||s;return s=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const p=h.clippingPlanes,v=h.clipIntersection,f=h.clipShadows,g=i.get(h);if(!s||p===null||p.length===0||r&&!f)r?u(null):c();else{const x=r?0:n,M=x*4;let y=g.clippingState||null;a.value=y,y=u(p,d,M,m);for(let R=0;R!==M;++R)y[R]=e[R];g.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=x}};function c(){a.value!==e&&(a.value=e,a.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,m,p){const v=h!==null?h.length:0;let f=null;if(v!==0){if(f=a.value,p!==!0||f===null){const g=m+v*4,x=d.matrixWorldInverse;l.getNormalMatrix(x),(f===null||f.length<g)&&(f=new Float32Array(g));for(let M=0,y=m;M!==v;++M,y+=4)o.copy(h[M]).applyMatrix4(x,l),o.normal.toArray(f,y),f[y+3]=o.constant}a.value=f,a.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,f}}function tm(i){let t=new WeakMap;function e(o,l){return l===Va?o.mapping=Xi:l===Ga&&(o.mapping=Yi),o}function n(o){if(o&&o.isTexture){const l=o.mapping;if(l===Va||l===Ga)if(t.has(o)){const a=t.get(o).texture;return e(a,o.mapping)}else{const a=o.image;if(a&&a.height>0){const c=new uf(a.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const l=o.target;l.removeEventListener("dispose",s);const a=t.get(l);a!==void 0&&(t.delete(l),a.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Go extends fh{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,l=s+e,a=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,l-=u*this.view.offsetY,a=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Bi=4,Ul=[.125,.215,.35,.446,.526,.582],si=20,fa=new Go,Nl=new zt;let da=null,pa=0,ma=0,ga=!1;const ni=(1+Math.sqrt(5))/2,Ri=1/ni,Fl=[new L(-ni,Ri,0),new L(ni,Ri,0),new L(-Ri,0,ni),new L(Ri,0,ni),new L(0,ni,-Ri),new L(0,ni,Ri),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class kl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(da,pa,ma),this._renderer.xr.enabled=ga,t.scissorTest=!1,tr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Xi||t.mapping===Yi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),da=this._renderer.getRenderTarget(),pa=this._renderer.getActiveCubeFace(),ma=this._renderer.getActiveMipmapLevel(),ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:un,format:cn,colorSpace:$n,depthBuffer:!1},s=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=em(r)),this._blurMaterial=nm(r,t,e)}return s}_compileMaterial(t){const e=new xe(this._lodPlanes[0],t);this._renderer.compile(e,fa)}_sceneToCubeUV(t,e,n,s){const l=new Ve(90,1,e,n),a=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Nl),u.toneMapping=Gn,u.autoClear=!1;const m=new mn({name:"PMREM.Background",side:Ge,depthWrite:!1,depthTest:!1}),p=new xe(new ui,m);let v=!1;const f=t.background;f?f.isColor&&(m.color.copy(f),t.background=null,v=!0):(m.color.copy(Nl),v=!0);for(let g=0;g<6;g++){const x=g%3;x===0?(l.up.set(0,a[g],0),l.lookAt(c[g],0,0)):x===1?(l.up.set(0,0,a[g]),l.lookAt(0,c[g],0)):(l.up.set(0,a[g],0),l.lookAt(0,0,c[g]));const M=this._cubeSize;tr(s,x*M,g>2?M:0,M,M),u.setRenderTarget(s),v&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=f}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Xi||t.mapping===Yi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new xe(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const a=this._cubeSize;tr(e,0,0,3*a,2*a),n.setRenderTarget(e),n.render(o,fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Fl[(s-r-1)%Fl.length];this._blur(t,r-1,r,o,l)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,l){const a=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new xe(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[n]-1,p=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*si-1),v=r/p,f=isFinite(r)?1+Math.floor(u*v):si;f>si&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${si}`);const g=[];let x=0;for(let A=0;A<si;++A){const I=A/v,D=Math.exp(-I*I/2);g.push(D),A===0?x+=D:A<f&&(x+=2*D)}for(let A=0;A<g.length;A++)g[A]=g[A]/x;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=g,d.latitudinal.value=o==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:M}=this;d.dTheta.value=p,d.mipInt.value=M-n;const y=this._sizeLods[s],R=3*y*(s>M-Bi?s-M+Bi:0),w=4*(this._cubeSize-y);tr(e,R,w,3*y,2*y),a.setRenderTarget(e),a.render(h,fa)}}function em(i){const t=[],e=[],n=[];let s=i;const r=i-Bi+1+Ul.length;for(let o=0;o<r;o++){const l=Math.pow(2,s);e.push(l);let a=1/l;o>i-Bi?a=Ul[o-i+Bi-1]:o===0&&(a=0),n.push(a);const c=1/(l-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,p=6,v=3,f=2,g=1,x=new Float32Array(v*p*m),M=new Float32Array(f*p*m),y=new Float32Array(g*p*m);for(let w=0;w<m;w++){const A=w%3*2/3-1,I=w>2?0:-1,D=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];x.set(D,v*p*w),M.set(d,f*p*w);const _=[w,w,w,w,w,w];y.set(_,g*p*w)}const R=new Ae;R.setAttribute("position",new Ze(x,v)),R.setAttribute("uv",new Ze(M,f)),R.setAttribute("faceIndex",new Ze(y,g)),t.push(R),s>Bi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ol(i,t,e){const n=new Ke(i,t,e);return n.texture.mapping=Dr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function tr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function nm(i,t,e){const n=new Float32Array(si),s=new L(0,1,0);return new Ne({name:"SphericalGaussianBlur",defines:{n:si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Bl(){return new Ne({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ho(),fragmentShader:`

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
		`,blending:yn,depthTest:!1,depthWrite:!1})}function zl(){return new Ne({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ho(){return`

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
	`}function im(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const a=l.mapping,c=a===Va||a===Ga,u=a===Xi||a===Yi;if(c||u){let h=t.get(l);const d=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return e===null&&(e=new kl(i)),h=c?e.fromEquirectangular(l,h):e.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,t.set(l,h),h.texture;if(h!==void 0)return h.texture;{const m=l.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new kl(i)),h=c?e.fromEquirectangular(l):e.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,t.set(l,h),l.addEventListener("dispose",r),h.texture):null}}}return l}function s(l){let a=0;const c=6;for(let u=0;u<c;u++)l[u]!==void 0&&a++;return a===c}function r(l){const a=l.target;a.removeEventListener("dispose",r);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function sm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&xr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rm(i,t,e,n){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let f=0,g=v.length;f<g;f++)t.remove(v[f])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function a(h){const d=h.attributes;for(const p in d)t.update(d[p],i.ARRAY_BUFFER);const m=h.morphAttributes;for(const p in m){const v=m[p];for(let f=0,g=v.length;f<g;f++)t.update(v[f],i.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,p=h.attributes.position;let v=0;if(m!==null){const x=m.array;v=m.version;for(let M=0,y=x.length;M<y;M+=3){const R=x[M+0],w=x[M+1],A=x[M+2];d.push(R,w,w,A,A,R)}}else if(p!==void 0){const x=p.array;v=p.version;for(let M=0,y=x.length/3-1;M<y;M+=3){const R=M+0,w=M+1,A=M+2;d.push(R,w,w,A,A,R)}}else return;const f=new(ih(d)?hh:ch)(d,1);f.version=v;const g=r.get(h);g&&t.remove(g),r.set(h,f)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:l,update:a,getWireframeAttribute:u}}function am(i,t,e){let n;function s(d){n=d}let r,o;function l(d){r=d.type,o=d.bytesPerElement}function a(d,m){i.drawElements(n,m,r,d*o),e.update(m,n,1)}function c(d,m,p){p!==0&&(i.drawElementsInstanced(n,m,r,d*o,p),e.update(m,n,p))}function u(d,m,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,p);let f=0;for(let g=0;g<p;g++)f+=m[g];e.update(f,n,1)}function h(d,m,p,v){if(p===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<d.length;g++)c(d[g]/o,m[g],v[g]);else{f.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,p);let g=0;for(let x=0;x<p;x++)g+=m[x];for(let x=0;x<v.length;x++)e.update(g,n,v[x])}}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function om(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,l){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,t,e){const n=new WeakMap,s=new re;function r(o,l,a){const c=o.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(l);if(d===void 0||d.count!==h){let D=function(){A.dispose(),n.delete(l),l.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();const m=l.morphAttributes.position!==void 0,p=l.morphAttributes.normal!==void 0,v=l.morphAttributes.color!==void 0,f=l.morphAttributes.position||[],g=l.morphAttributes.normal||[],x=l.morphAttributes.color||[];let M=0;m===!0&&(M=1),p===!0&&(M=2),v===!0&&(M=3);let y=l.attributes.position.count*M,R=1;y>t.maxTextureSize&&(R=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);const w=new Float32Array(y*R*4*h),A=new rh(w,y,R,h);A.type=xn,A.needsUpdate=!0;const I=M*4;for(let _=0;_<h;_++){const S=f[_],V=g[_],O=x[_],U=y*R*4*_;for(let B=0;B<S.count;B++){const F=B*I;m===!0&&(s.fromBufferAttribute(S,B),w[U+F+0]=s.x,w[U+F+1]=s.y,w[U+F+2]=s.z,w[U+F+3]=0),p===!0&&(s.fromBufferAttribute(V,B),w[U+F+4]=s.x,w[U+F+5]=s.y,w[U+F+6]=s.z,w[U+F+7]=0),v===!0&&(s.fromBufferAttribute(O,B),w[U+F+8]=s.x,w[U+F+9]=s.y,w[U+F+10]=s.z,w[U+F+11]=O.itemSize===4?s.w:1)}}d={count:h,texture:A,size:new et(y,R)},n.set(l,d),l.addEventListener("dispose",D)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)a.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let v=0;v<c.length;v++)m+=c[v];const p=l.morphTargetsRelative?1:1-m;a.getUniforms().setValue(i,"morphTargetBaseInfluence",p),a.getUniforms().setValue(i,"morphTargetInfluences",c)}a.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),a.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function cm(i,t,e,n){let s=new WeakMap;function r(a){const c=n.render.frame,u=a.geometry,h=t.get(a,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),s.get(a)!==c&&(e.update(a.instanceMatrix,i.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,i.ARRAY_BUFFER),s.set(a,c))),a.isSkinnedMesh){const d=a.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function l(a){const c=a.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class mh extends Fe{constructor(t,e,n,s,r,o,l,a,c,u=Hi){if(u!==Hi&&u!==Zi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Hi&&(n=hi),n===void 0&&u===Zi&&(n=Ki),super(null,s,r,o,l,a,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:we,this.minFilter=a!==void 0?a:we,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gh=new Fe,Vl=new mh(1,1),vh=new rh,_h=new Ku,xh=new dh,Gl=[],Hl=[],Wl=new Float32Array(16),ql=new Float32Array(9),$l=new Float32Array(4);function ss(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Gl[s];if(r===void 0&&(r=new Float32Array(s),Gl[s]=r),t!==0){n.toArray(r,0);for(let o=1,l=0;o!==t;++o)l+=e,i[o].toArray(r,l)}return r}function Ee(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Te(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ur(i,t){let e=Hl[t];e===void 0&&(e=new Int32Array(t),Hl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2fv(this.addr,t),Te(e,t)}}function fm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ee(e,t))return;i.uniform3fv(this.addr,t),Te(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4fv(this.addr,t),Te(e,t)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;$l.set(n),i.uniformMatrix2fv(this.addr,!1,$l),Te(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;ql.set(n),i.uniformMatrix3fv(this.addr,!1,ql),Te(e,n)}}function gm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ee(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Te(e,t)}else{if(Ee(e,n))return;Wl.set(n),i.uniformMatrix4fv(this.addr,!1,Wl),Te(e,n)}}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2iv(this.addr,t),Te(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3iv(this.addr,t),Te(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4iv(this.addr,t),Te(e,t)}}function Mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ee(e,t))return;i.uniform2uiv(this.addr,t),Te(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ee(e,t))return;i.uniform3uiv(this.addr,t),Te(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ee(e,t))return;i.uniform4uiv(this.addr,t),Te(e,t)}}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Vl.compareFunction=nh,r=Vl):r=gh,e.setTexture2D(t||r,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_h,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||xh,s)}function Cm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||vh,s)}function Rm(i){switch(i){case 5126:return hm;case 35664:return um;case 35665:return fm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return ym;case 5125:return Mm;case 36294:return bm;case 36295:return Sm;case 36296:return wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Cm}}function Pm(i,t){i.uniform1fv(this.addr,t)}function Lm(i,t){const e=ss(t,this.size,2);i.uniform2fv(this.addr,e)}function Dm(i,t){const e=ss(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){const e=ss(t,this.size,4);i.uniform4fv(this.addr,e)}function Um(i,t){const e=ss(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Nm(i,t){const e=ss(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Fm(i,t){const e=ss(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function km(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function Bm(i,t){i.uniform3iv(this.addr,t)}function zm(i,t){i.uniform4iv(this.addr,t)}function Vm(i,t){i.uniform1uiv(this.addr,t)}function Gm(i,t){i.uniform2uiv(this.addr,t)}function Hm(i,t){i.uniform3uiv(this.addr,t)}function Wm(i,t){i.uniform4uiv(this.addr,t)}function qm(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||gh,r[o])}function $m(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||_h,r[o])}function Xm(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||xh,r[o])}function Ym(i,t,e){const n=this.cache,s=t.length,r=Ur(e,s);Ee(n,r)||(i.uniform1iv(this.addr,r),Te(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||vh,r[o])}function Km(i){switch(i){case 5126:return Pm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return km;case 35667:case 35671:return Om;case 35668:case 35672:return Bm;case 35669:case 35673:return zm;case 5125:return Vm;case 36294:return Gm;case 36295:return Hm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return $m;case 35680:case 36300:case 36308:case 36293:return Xm;case 36289:case 36303:case 36311:case 36292:return Ym}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class jm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Km(e.type)}}class Jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const l=s[r];l.setValue(t,e[l.id],n)}}}const va=/(\w+)(\])?(\[|\.)?/g;function Xl(i,t){i.seq.push(t),i.map[t.id]=t}function Qm(i,t,e){const n=i.name,s=n.length;for(va.lastIndex=0;;){const r=va.exec(n),o=va.lastIndex;let l=r[1];const a=r[2]==="]",c=r[3];if(a&&(l=l|0),c===void 0||c==="["&&o+2===s){Xl(e,c===void 0?new Zm(l,i,t):new jm(l,i,t));break}else{let h=e.map[l];h===void 0&&(h=new Jm(l),Xl(e,h)),e=h}}}class yr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Qm(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const l=e[r],a=n[l.id];a.needsUpdate!==!1&&l.setValue(t,a.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Yl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const t0=37297;let e0=0;function n0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const l=o+1;n.push(`${l===t?">":" "} ${l}: ${e[o]}`)}return n.join(`
`)}function i0(i){const t=Qt.getPrimaries(Qt.workingColorSpace),e=Qt.getPrimaries(i);let n;switch(t===e?n="":t===Tr&&e===Er?n="LinearDisplayP3ToLinearSRGB":t===Er&&e===Tr&&(n="LinearSRGBToLinearDisplayP3"),i){case $n:case Ir:return[n,"LinearTransferOETF"];case tn:case zo:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Kl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+n0(i.getShaderSource(t),o)}else return s}function s0(i,t){const e=i0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function r0(i,t){let e;switch(t){case zc:e="Linear";break;case Vc:e="Reinhard";break;case Gc:e="Cineon";break;case Lo:e="ACESFilmic";break;case Hc:e="AgX";break;case Wc:e="Neutral";break;case Cu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const er=new L;function a0(){Qt.getLuminanceCoefficients(er);const i=er.x.toFixed(4),t=er.y.toFixed(4),e=er.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function o0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vs).join(`
`)}function l0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function c0(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:l}}return e}function vs(i){return i!==""}function Zl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function jl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const h0=/^[ \t]*#include +<([\w\d./]+)>/gm;function _o(i){return i.replace(h0,f0)}const u0=new Map;function f0(i,t){let e=Ht[t];if(e===void 0){const n=u0.get(t);if(n!==void 0)e=Ht[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _o(e)}const d0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(i){return i.replace(d0,p0)}function p0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ql(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function m0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Oc?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function g0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Xi:case Yi:t="ENVMAP_TYPE_CUBE";break;case Dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function v0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yi:t="ENVMAP_MODE_REFRACTION";break}return t}function _0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Po:t="ENVMAP_BLENDING_MULTIPLY";break;case Tu:t="ENVMAP_BLENDING_MIX";break;case Au:t="ENVMAP_BLENDING_ADD";break}return t}function x0(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function y0(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,l=e.fragmentShader;const a=m0(e),c=g0(e),u=v0(e),h=_0(e),d=x0(e),m=o0(e),p=l0(r),v=s.createProgram();let f,g,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(vs).join(`
`),f.length>0&&(f+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(vs).join(`
`),g.length>0&&(g+=`
`)):(f=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vs).join(`
`),g=[Ql(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Ht.tonemapping_pars_fragment:"",e.toneMapping!==Gn?r0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,s0("linearToOutputTexel",e.outputColorSpace),a0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vs).join(`
`)),o=_o(o),o=Zl(o,e),o=jl(o,e),l=_o(l),l=Zl(l,e),l=jl(l,e),o=Jl(o),l=Jl(l),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,f=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,g=["#define varying in",e.glslVersion===gl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===gl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const M=x+f+o,y=x+g+l,R=Yl(s,s.VERTEX_SHADER,M),w=Yl(s,s.FRAGMENT_SHADER,y);s.attachShader(v,R),s.attachShader(v,w),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(S){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),O=s.getShaderInfoLog(R).trim(),U=s.getShaderInfoLog(w).trim();let B=!0,F=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,R,w);else{const nt=Kl(s,R,"vertex"),q=Kl(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+V+`
`+nt+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(O===""||U==="")&&(F=!1);F&&(S.diagnostics={runnable:B,programLog:V,vertexShader:{log:O,prefix:f},fragmentShader:{log:U,prefix:g}})}s.deleteShader(R),s.deleteShader(w),I=new yr(s,v),D=c0(s,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let D;this.getAttributes=function(){return D===void 0&&A(this),D};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,t0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=e0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}let M0=0;class b0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new S0(t),e.set(t,n)),n}}class S0{constructor(t){this.id=M0++,this.code=t,this.usedTimes=0}}function w0(i,t,e,n,s,r,o){const l=new oh,a=new b0,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let p=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,V,O,U){const B=O.fog,F=U.geometry,nt=_.isMeshStandardMaterial?O.environment:null,q=(_.isMeshStandardMaterial?e:t).get(_.envMap||nt),ot=q&&q.mapping===Dr?q.image.height:null,pt=v[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));const mt=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Gt=mt!==void 0?mt.length:0;let qt=0;F.morphAttributes.position!==void 0&&(qt=1),F.morphAttributes.normal!==void 0&&(qt=2),F.morphAttributes.color!==void 0&&(qt=3);let X,tt,gt,ct;if(pt){const ze=gn[pt];X=ze.vertexShader,tt=ze.fragmentShader}else X=_.vertexShader,tt=_.fragmentShader,a.update(_),gt=a.getVertexShaderID(_),ct=a.getFragmentShaderID(_);const Ut=i.getRenderTarget(),Nt=U.isInstancedMesh===!0,it=U.isBatchedMesh===!0,wt=!!_.map,j=!!_.matcap,C=!!q,ht=!!_.aoMap,lt=!!_.lightMap,st=!!_.bumpMap,ut=!!_.normalMap,Lt=!!_.displacementMap,xt=!!_.emissiveMap,T=!!_.metalnessMap,b=!!_.roughnessMap,G=_.anisotropy>0,Y=_.clearcoat>0,J=_.dispersion>0,K=_.iridescence>0,At=_.sheen>0,ft=_.transmission>0,bt=G&&!!_.anisotropyMap,Yt=Y&&!!_.clearcoatMap,rt=Y&&!!_.clearcoatNormalMap,St=Y&&!!_.clearcoatRoughnessMap,Ot=K&&!!_.iridescenceMap,Bt=K&&!!_.iridescenceThicknessMap,Et=At&&!!_.sheenColorMap,Kt=At&&!!_.sheenRoughnessMap,Vt=!!_.specularMap,ae=!!_.specularColorMap,N=!!_.specularIntensityMap,yt=ft&&!!_.transmissionMap,$=ft&&!!_.thicknessMap,Q=!!_.gradientMap,vt=!!_.alphaMap,Mt=_.alphaTest>0,Zt=!!_.alphaHash,ye=!!_.extensions;let Be=Gn;_.toneMapped&&(Ut===null||Ut.isXRRenderTarget===!0)&&(Be=i.toneMapping);const Jt={shaderID:pt,shaderType:_.type,shaderName:_.name,vertexShader:X,fragmentShader:tt,defines:_.defines,customVertexShaderID:gt,customFragmentShaderID:ct,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:it,batchingColor:it&&U._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&U.instanceColor!==null,instancingMorph:Nt&&U.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Ut===null?i.outputColorSpace:Ut.isXRRenderTarget===!0?Ut.texture.colorSpace:$n,alphaToCoverage:!!_.alphaToCoverage,map:wt,matcap:j,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:ot,aoMap:ht,lightMap:lt,bumpMap:st,normalMap:ut,displacementMap:m&&Lt,emissiveMap:xt,normalMapObjectSpace:ut&&_.normalMapType===Lu,normalMapTangentSpace:ut&&_.normalMapType===Bo,metalnessMap:T,roughnessMap:b,anisotropy:G,anisotropyMap:bt,clearcoat:Y,clearcoatMap:Yt,clearcoatNormalMap:rt,clearcoatRoughnessMap:St,dispersion:J,iridescence:K,iridescenceMap:Ot,iridescenceThicknessMap:Bt,sheen:At,sheenColorMap:Et,sheenRoughnessMap:Kt,specularMap:Vt,specularColorMap:ae,specularIntensityMap:N,transmission:ft,transmissionMap:yt,thicknessMap:$,gradientMap:Q,opaque:_.transparent===!1&&_.blending===ci&&_.alphaToCoverage===!1,alphaMap:vt,alphaTest:Mt,alphaHash:Zt,combine:_.combine,mapUv:wt&&f(_.map.channel),aoMapUv:ht&&f(_.aoMap.channel),lightMapUv:lt&&f(_.lightMap.channel),bumpMapUv:st&&f(_.bumpMap.channel),normalMapUv:ut&&f(_.normalMap.channel),displacementMapUv:Lt&&f(_.displacementMap.channel),emissiveMapUv:xt&&f(_.emissiveMap.channel),metalnessMapUv:T&&f(_.metalnessMap.channel),roughnessMapUv:b&&f(_.roughnessMap.channel),anisotropyMapUv:bt&&f(_.anisotropyMap.channel),clearcoatMapUv:Yt&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:St&&f(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Ot&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Kt&&f(_.sheenRoughnessMap.channel),specularMapUv:Vt&&f(_.specularMap.channel),specularColorMapUv:ae&&f(_.specularColorMap.channel),specularIntensityMapUv:N&&f(_.specularIntensityMap.channel),transmissionMapUv:yt&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:vt&&f(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ut||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!F.attributes.uv&&(wt||vt),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:U.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Gt,morphTextureStride:qt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Be,decodeVideoTexture:wt&&_.map.isVideoTexture===!0&&Qt.getTransfer(_.map.colorSpace)===oe,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ye,flipSided:_.side===Ge,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ye&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function x(_){const S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)S.push(V),S.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(M(S,_),y(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function M(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapCubeUVHeight),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.morphAttributeCount),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function y(_,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),_.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.alphaToCoverage&&l.enable(20),_.push(l.mask)}function R(_){const S=v[_.type];let V;if(S){const O=gn[S];V=Ji.clone(O.uniforms)}else V=_.uniforms;return V}function w(_,S){let V;for(let O=0,U=u.length;O<U;O++){const B=u[O];if(B.cacheKey===S){V=B,++V.usedTimes;break}}return V===void 0&&(V=new y0(i,S,_,r),u.push(V)),V}function A(_){if(--_.usedTimes===0){const S=u.indexOf(_);u[S]=u[u.length-1],u.pop(),_.destroy()}}function I(_){a.remove(_)}function D(){a.dispose()}return{getParameters:g,getProgramCacheKey:x,getUniforms:R,acquireProgram:w,releaseProgram:A,releaseShaderCache:I,programs:u,dispose:D}}function E0(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let l=i.get(o);return l===void 0&&(l={},i.set(o,l)),l}function n(o){i.delete(o)}function s(o,l,a){i.get(o)[l]=a}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function T0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function tc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ec(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(h,d,m,p,v,f){let g=i[t];return g===void 0?(g={id:h.id,object:h,geometry:d,material:m,groupOrder:p,renderOrder:h.renderOrder,z:v,group:f},i[t]=g):(g.id=h.id,g.object=h,g.geometry=d,g.material=m,g.groupOrder=p,g.renderOrder=h.renderOrder,g.z=v,g.group=f),t++,g}function l(h,d,m,p,v,f){const g=o(h,d,m,p,v,f);m.transmission>0?n.push(g):m.transparent===!0?s.push(g):e.push(g)}function a(h,d,m,p,v,f){const g=o(h,d,m,p,v,f);m.transmission>0?n.unshift(g):m.transparent===!0?s.unshift(g):e.unshift(g)}function c(h,d){e.length>1&&e.sort(h||T0),n.length>1&&n.sort(d||tc),s.length>1&&s.sort(d||tc)}function u(){for(let h=t,d=i.length;h<d;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:a,finish:u,sort:c}}function A0(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ec,i.set(n,[o])):s>=r.length?(o=new ec,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function C0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new zt};break;case"SpotLight":e={position:new L,direction:new L,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function R0(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let P0=0;function L0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function D0(i){const t=new C0,e=R0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ie,o=new ie;function l(c){let u=0,h=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let m=0,p=0,v=0,f=0,g=0,x=0,M=0,y=0,R=0,w=0,A=0;c.sort(L0);for(let D=0,_=c.length;D<_;D++){const S=c[D],V=S.color,O=S.intensity,U=S.distance,B=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)u+=V.r*O,h+=V.g*O,d+=V.b*O;else if(S.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(S.sh.coefficients[F],O);A++}else if(S.isDirectionalLight){const F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const nt=S.shadow,q=e.get(S);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=S.shadow.matrix,x++}n.directional[m]=F,m++}else if(S.isSpotLight){const F=t.get(S);F.position.setFromMatrixPosition(S.matrixWorld),F.color.copy(V).multiplyScalar(O),F.distance=U,F.coneCos=Math.cos(S.angle),F.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),F.decay=S.decay,n.spot[v]=F;const nt=S.shadow;if(S.map&&(n.spotLightMap[R]=S.map,R++,nt.updateMatrices(S),S.castShadow&&w++),n.spotLightMatrix[v]=nt.matrix,S.castShadow){const q=e.get(S);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=B,y++}v++}else if(S.isRectAreaLight){const F=t.get(S);F.color.copy(V).multiplyScalar(O),F.halfWidth.set(S.width*.5,0,0),F.halfHeight.set(0,S.height*.5,0),n.rectArea[f]=F,f++}else if(S.isPointLight){const F=t.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,S.castShadow){const nt=S.shadow,q=e.get(S);q.shadowIntensity=nt.intensity,q.shadowBias=nt.bias,q.shadowNormalBias=nt.normalBias,q.shadowRadius=nt.radius,q.shadowMapSize=nt.mapSize,q.shadowCameraNear=nt.camera.near,q.shadowCameraFar=nt.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=B,n.pointShadowMatrix[p]=S.shadow.matrix,M++}n.point[p]=F,p++}else if(S.isHemisphereLight){const F=t.get(S);F.skyColor.copy(S.color).multiplyScalar(O),F.groundColor.copy(S.groundColor).multiplyScalar(O),n.hemi[g]=F,g++}}f>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==f||I.hemiLength!==g||I.numDirectionalShadows!==x||I.numPointShadows!==M||I.numSpotShadows!==y||I.numSpotMaps!==R||I.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=f,n.point.length=p,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+R-w,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=A,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=f,I.hemiLength=g,I.numDirectionalShadows=x,I.numPointShadows=M,I.numSpotShadows=y,I.numSpotMaps=R,I.numLightProbes=A,n.version=P0++)}function a(c,u){let h=0,d=0,m=0,p=0,v=0;const f=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const M=c[g];if(M.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),h++}else if(M.isSpotLight){const y=n.spot[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),y.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(f),m++}else if(M.isRectAreaLight){const y=n.rectArea[p];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),o.identity(),r.copy(M.matrixWorld),r.premultiply(f),o.extractRotation(r),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),p++}else if(M.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(f),d++}else if(M.isHemisphereLight){const y=n.hemi[v];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(f),v++}}}return{setup:l,setupView:a,state:n}}function nc(i){const t=new D0(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function o(u){n.push(u)}function l(){t.setup(e)}function a(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:a,pushLight:r,pushShadow:o}}function I0(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let l;return o===void 0?(l=new nc(i),t.set(s,[l])):r>=o.length?(l=new nc(i),o.push(l)):l=o[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class yh extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class U0 extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const N0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,F0=`uniform sampler2D shadow_pass;
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
}`;function k0(i,t,e){let n=new Vo;const s=new et,r=new et,o=new re,l=new yh({depthPacking:eh}),a=new U0,c={},u=e.maxTextureSize,h={[Wn]:Ge,[Ge]:Wn,[Ye]:Ye},d=new Ne({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:N0,fragmentShader:F0}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const p=new Ae;p.setAttribute("position",new Ze(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new xe(p,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Oc;let g=this.type;this.render=function(w,A,I){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||w.length===0)return;const D=i.getRenderTarget(),_=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),V=i.state;V.setBlending(yn),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const O=g!==Cn&&this.type===Cn,U=g===Cn&&this.type!==Cn;for(let B=0,F=w.length;B<F;B++){const nt=w[B],q=nt.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const ot=q.getFrameExtents();if(s.multiply(ot),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ot.x),s.x=r.x*ot.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ot.y),s.y=r.y*ot.y,q.mapSize.y=r.y)),q.map===null||O===!0||U===!0){const mt=this.type!==Cn?{minFilter:we,magFilter:we}:{};q.map!==null&&q.map.dispose(),q.map=new Ke(s.x,s.y,mt),q.map.texture.name=nt.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const pt=q.getViewportCount();for(let mt=0;mt<pt;mt++){const Gt=q.getViewport(mt);o.set(r.x*Gt.x,r.y*Gt.y,r.x*Gt.z,r.y*Gt.w),V.viewport(o),q.updateMatrices(nt,mt),n=q.getFrustum(),y(A,I,q.camera,nt,this.type)}q.isPointLightShadow!==!0&&this.type===Cn&&x(q,I),q.needsUpdate=!1}g=this.type,f.needsUpdate=!1,i.setRenderTarget(D,_,S)};function x(w,A){const I=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Ke(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(A,null,I,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(A,null,I,m,v,null)}function M(w,A,I,D){let _=null;const S=I.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(S!==void 0)_=S;else if(_=I.isPointLight===!0?a:l,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=_.uuid,O=A.uuid;let U=c[V];U===void 0&&(U={},c[V]=U);let B=U[O];B===void 0&&(B=_.clone(),U[O]=B,A.addEventListener("dispose",R)),_=B}if(_.visible=A.visible,_.wireframe=A.wireframe,D===Cn?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,I.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=i.properties.get(_);V.light=I}return _}function y(w,A,I,D,_){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===Cn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,w.matrixWorld);const O=t.update(w),U=w.material;if(Array.isArray(U)){const B=O.groups;for(let F=0,nt=B.length;F<nt;F++){const q=B[F],ot=U[q.materialIndex];if(ot&&ot.visible){const pt=M(w,ot,D,_);w.onBeforeShadow(i,w,A,I,O,pt,q),i.renderBufferDirect(I,null,O,pt,w,q),w.onAfterShadow(i,w,A,I,O,pt,q)}}}else if(U.visible){const B=M(w,U,D,_);w.onBeforeShadow(i,w,A,I,O,B,null),i.renderBufferDirect(I,null,O,B,w,null),w.onAfterShadow(i,w,A,I,O,B,null)}}const V=w.children;for(let O=0,U=V.length;O<U;O++)y(V[O],A,I,D,_)}function R(w){w.target.removeEventListener("dispose",R);for(const I in c){const D=c[I],_=w.target.uuid;_ in D&&(D[_].dispose(),delete D[_])}}}const O0={[Ua]:Na,[Fa]:Ba,[ka]:za,[$i]:Oa,[Na]:Ua,[Ba]:Fa,[za]:ka,[Oa]:$i};function B0(i){function t(){let N=!1;const yt=new re;let $=null;const Q=new re(0,0,0,0);return{setMask:function(vt){$!==vt&&!N&&(i.colorMask(vt,vt,vt,vt),$=vt)},setLocked:function(vt){N=vt},setClear:function(vt,Mt,Zt,ye,Be){Be===!0&&(vt*=ye,Mt*=ye,Zt*=ye),yt.set(vt,Mt,Zt,ye),Q.equals(yt)===!1&&(i.clearColor(vt,Mt,Zt,ye),Q.copy(yt))},reset:function(){N=!1,$=null,Q.set(-1,0,0,0)}}}function e(){let N=!1,yt=!1,$=null,Q=null,vt=null;return{setReversed:function(Mt){yt=Mt},setTest:function(Mt){Mt?gt(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(Mt){$!==Mt&&!N&&(i.depthMask(Mt),$=Mt)},setFunc:function(Mt){if(yt&&(Mt=O0[Mt]),Q!==Mt){switch(Mt){case Ua:i.depthFunc(i.NEVER);break;case Na:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case $i:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Oa:i.depthFunc(i.GEQUAL);break;case Ba:i.depthFunc(i.GREATER);break;case za:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=Mt}},setLocked:function(Mt){N=Mt},setClear:function(Mt){vt!==Mt&&(i.clearDepth(Mt),vt=Mt)},reset:function(){N=!1,$=null,Q=null,vt=null}}}function n(){let N=!1,yt=null,$=null,Q=null,vt=null,Mt=null,Zt=null,ye=null,Be=null;return{setTest:function(Jt){N||(Jt?gt(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(Jt){yt!==Jt&&!N&&(i.stencilMask(Jt),yt=Jt)},setFunc:function(Jt,ze,bn){($!==Jt||Q!==ze||vt!==bn)&&(i.stencilFunc(Jt,ze,bn),$=Jt,Q=ze,vt=bn)},setOp:function(Jt,ze,bn){(Mt!==Jt||Zt!==ze||ye!==bn)&&(i.stencilOp(Jt,ze,bn),Mt=Jt,Zt=ze,ye=bn)},setLocked:function(Jt){N=Jt},setClear:function(Jt){Be!==Jt&&(i.clearStencil(Jt),Be=Jt)},reset:function(){N=!1,yt=null,$=null,Q=null,vt=null,Mt=null,Zt=null,ye=null,Be=null}}}const s=new t,r=new e,o=new n,l=new WeakMap,a=new WeakMap;let c={},u={},h=new WeakMap,d=[],m=null,p=!1,v=null,f=null,g=null,x=null,M=null,y=null,R=null,w=new zt(0,0,0),A=0,I=!1,D=null,_=null,S=null,V=null,O=null;const U=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,F=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(nt)[1]),B=F>=1):nt.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),B=F>=2);let q=null,ot={};const pt=i.getParameter(i.SCISSOR_BOX),mt=i.getParameter(i.VIEWPORT),Gt=new re().fromArray(pt),qt=new re().fromArray(mt);function X(N,yt,$,Q){const vt=new Uint8Array(4),Mt=i.createTexture();i.bindTexture(N,Mt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<$;Zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(yt,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(yt+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return Mt}const tt={};tt[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),tt[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),tt[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),gt(i.DEPTH_TEST),r.setFunc($i),lt(!1),st(fl),gt(i.CULL_FACE),C(yn);function gt(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function ct(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function Ut(N,yt){return u[N]!==yt?(i.bindFramebuffer(N,yt),u[N]=yt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=yt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=yt),!0):!1}function Nt(N,yt){let $=d,Q=!1;if(N){$=h.get(yt),$===void 0&&($=[],h.set(yt,$));const vt=N.textures;if($.length!==vt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let Mt=0,Zt=vt.length;Mt<Zt;Mt++)$[Mt]=i.COLOR_ATTACHMENT0+Mt;$.length=vt.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function it(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const wt={[ii]:i.FUNC_ADD,[cu]:i.FUNC_SUBTRACT,[hu]:i.FUNC_REVERSE_SUBTRACT};wt[uu]=i.MIN,wt[fu]=i.MAX;const j={[du]:i.ZERO,[pu]:i.ONE,[mu]:i.SRC_COLOR,[Da]:i.SRC_ALPHA,[Mu]:i.SRC_ALPHA_SATURATE,[xu]:i.DST_COLOR,[vu]:i.DST_ALPHA,[gu]:i.ONE_MINUS_SRC_COLOR,[Ia]:i.ONE_MINUS_SRC_ALPHA,[yu]:i.ONE_MINUS_DST_COLOR,[_u]:i.ONE_MINUS_DST_ALPHA,[bu]:i.CONSTANT_COLOR,[Su]:i.ONE_MINUS_CONSTANT_COLOR,[wu]:i.CONSTANT_ALPHA,[Eu]:i.ONE_MINUS_CONSTANT_ALPHA};function C(N,yt,$,Q,vt,Mt,Zt,ye,Be,Jt){if(N===yn){p===!0&&(ct(i.BLEND),p=!1);return}if(p===!1&&(gt(i.BLEND),p=!0),N!==lu){if(N!==v||Jt!==I){if((f!==ii||M!==ii)&&(i.blendEquation(i.FUNC_ADD),f=ii,M=ii),Jt)switch(N){case ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.ONE,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ws:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case pl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}g=null,x=null,y=null,R=null,w.set(0,0,0),A=0,v=N,I=Jt}return}vt=vt||yt,Mt=Mt||$,Zt=Zt||Q,(yt!==f||vt!==M)&&(i.blendEquationSeparate(wt[yt],wt[vt]),f=yt,M=vt),($!==g||Q!==x||Mt!==y||Zt!==R)&&(i.blendFuncSeparate(j[$],j[Q],j[Mt],j[Zt]),g=$,x=Q,y=Mt,R=Zt),(ye.equals(w)===!1||Be!==A)&&(i.blendColor(ye.r,ye.g,ye.b,Be),w.copy(ye),A=Be),v=N,I=!1}function ht(N,yt){N.side===Ye?ct(i.CULL_FACE):gt(i.CULL_FACE);let $=N.side===Ge;yt&&($=!$),lt($),N.blending===ci&&N.transparent===!1?C(yn):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const Q=N.stencilWrite;o.setTest(Q),Q&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Lt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?gt(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function lt(N){D!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),D=N)}function st(N){N!==au?(gt(i.CULL_FACE),N!==_&&(N===fl?i.cullFace(i.BACK):N===ou?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),_=N}function ut(N){N!==S&&(B&&i.lineWidth(N),S=N)}function Lt(N,yt,$){N?(gt(i.POLYGON_OFFSET_FILL),(V!==yt||O!==$)&&(i.polygonOffset(yt,$),V=yt,O=$)):ct(i.POLYGON_OFFSET_FILL)}function xt(N){N?gt(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+U-1),q!==N&&(i.activeTexture(N),q=N)}function b(N,yt,$){$===void 0&&(q===null?$=i.TEXTURE0+U-1:$=q);let Q=ot[$];Q===void 0&&(Q={type:void 0,texture:void 0},ot[$]=Q),(Q.type!==N||Q.texture!==yt)&&(q!==$&&(i.activeTexture($),q=$),i.bindTexture(N,yt||tt[N]),Q.type=N,Q.texture=yt)}function G(){const N=ot[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function bt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ot(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Bt(N){Gt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Gt.copy(N))}function Et(N){qt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),qt.copy(N))}function Kt(N,yt){let $=a.get(yt);$===void 0&&($=new WeakMap,a.set(yt,$));let Q=$.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(yt,N.name),$.set(N,Q))}function Vt(N,yt){const Q=a.get(yt).get(N);l.get(yt)!==Q&&(i.uniformBlockBinding(yt,Q,N.__bindingPointIndex),l.set(yt,Q))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,ot={},u={},h=new WeakMap,d=[],m=null,p=!1,v=null,f=null,g=null,x=null,M=null,y=null,R=null,w=new zt(0,0,0),A=0,I=!1,D=null,_=null,S=null,V=null,O=null,Gt.set(0,0,i.canvas.width,i.canvas.height),qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:gt,disable:ct,bindFramebuffer:Ut,drawBuffers:Nt,useProgram:it,setBlending:C,setMaterial:ht,setFlipSided:lt,setCullFace:st,setLineWidth:ut,setPolygonOffset:Lt,setScissorTest:xt,activeTexture:T,bindTexture:b,unbindTexture:G,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:St,texImage3D:Ot,updateUBOMapping:Kt,uniformBlockBinding:Vt,texStorage2D:Yt,texStorage3D:rt,texSubImage2D:K,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:bt,scissor:Bt,viewport:Et,reset:ae}}function ic(i,t,e,n){const s=z0(n);switch(e){case Kc:return i*t;case jc:return i*t;case Jc:return i*t*2;case No:return i*t/s.components*s.byteLength;case Fo:return i*t/s.components*s.byteLength;case Qc:return i*t*2/s.components*s.byteLength;case ko:return i*t*2/s.components*s.byteLength;case Zc:return i*t*3/s.components*s.byteLength;case cn:return i*t*4/s.components*s.byteLength;case Oo:return i*t*4/s.components*s.byteLength;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case gr:case vr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:case Xa:return Math.max(i,16)*Math.max(t,8)/4;case Wa:case $a:return Math.max(i,8)*Math.max(t,8)/2;case Ya:case Ka:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case eo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case no:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case io:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case so:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ro:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ao:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case oo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case lo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ho:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case _r:case uo:case fo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case th:case po:return Math.ceil(i/4)*Math.ceil(t/4)*8;case mo:case go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function z0(i){switch(i){case Ln:case $c:return{byteLength:1,components:1};case Es:case Xc:case un:return{byteLength:2,components:1};case Io:case Uo:return{byteLength:2,components:4};case hi:case Do:case xn:return{byteLength:4,components:1};case Yc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function V0(i,t,e,n,s,r,o){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new et,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,b){return m?new OffscreenCanvas(T,b):Rr("canvas")}function v(T,b,G){let Y=1;const J=xt(T);if((J.width>G||J.height>G)&&(Y=G/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const K=Math.floor(Y*J.width),At=Math.floor(Y*J.height);h===void 0&&(h=p(K,At));const ft=b?p(K,At):h;return ft.width=K,ft.height=At,ft.getContext("2d").drawImage(T,0,0,K,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+At+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function f(T){return T.generateMipmaps&&T.minFilter!==we&&T.minFilter!==ln}function g(T){i.generateMipmap(T)}function x(T,b,G,Y,J=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=b;if(b===i.RED&&(G===i.FLOAT&&(K=i.R32F),G===i.HALF_FLOAT&&(K=i.R16F),G===i.UNSIGNED_BYTE&&(K=i.R8)),b===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.R8UI),G===i.UNSIGNED_SHORT&&(K=i.R16UI),G===i.UNSIGNED_INT&&(K=i.R32UI),G===i.BYTE&&(K=i.R8I),G===i.SHORT&&(K=i.R16I),G===i.INT&&(K=i.R32I)),b===i.RG&&(G===i.FLOAT&&(K=i.RG32F),G===i.HALF_FLOAT&&(K=i.RG16F),G===i.UNSIGNED_BYTE&&(K=i.RG8)),b===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RG8UI),G===i.UNSIGNED_SHORT&&(K=i.RG16UI),G===i.UNSIGNED_INT&&(K=i.RG32UI),G===i.BYTE&&(K=i.RG8I),G===i.SHORT&&(K=i.RG16I),G===i.INT&&(K=i.RG32I)),b===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGB8UI),G===i.UNSIGNED_SHORT&&(K=i.RGB16UI),G===i.UNSIGNED_INT&&(K=i.RGB32UI),G===i.BYTE&&(K=i.RGB8I),G===i.SHORT&&(K=i.RGB16I),G===i.INT&&(K=i.RGB32I)),b===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),G===i.UNSIGNED_INT&&(K=i.RGBA32UI),G===i.BYTE&&(K=i.RGBA8I),G===i.SHORT&&(K=i.RGBA16I),G===i.INT&&(K=i.RGBA32I)),b===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),b===i.RGBA){const At=J?wr:Qt.getTransfer(Y);G===i.FLOAT&&(K=i.RGBA32F),G===i.HALF_FLOAT&&(K=i.RGBA16F),G===i.UNSIGNED_BYTE&&(K=At===oe?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(T,b){let G;return T?b===null||b===hi||b===Ki?G=i.DEPTH24_STENCIL8:b===xn?G=i.DEPTH32F_STENCIL8:b===Es&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===hi||b===Ki?G=i.DEPTH_COMPONENT24:b===xn?G=i.DEPTH_COMPONENT32F:b===Es&&(G=i.DEPTH_COMPONENT16),G}function y(T,b){return f(T)===!0||T.isFramebufferTexture&&T.minFilter!==we&&T.minFilter!==ln?Math.log2(Math.max(b.width,b.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?b.mipmaps.length:1}function R(T){const b=T.target;b.removeEventListener("dispose",R),A(b),b.isVideoTexture&&u.delete(b)}function w(T){const b=T.target;b.removeEventListener("dispose",w),D(b)}function A(T){const b=n.get(T);if(b.__webglInit===void 0)return;const G=T.source,Y=d.get(G);if(Y){const J=Y[b.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(T),Object.keys(Y).length===0&&d.delete(G)}n.remove(T)}function I(T){const b=n.get(T);i.deleteTexture(b.__webglTexture);const G=T.source,Y=d.get(G);delete Y[b.__cacheKey],o.memory.textures--}function D(T){const b=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(b.__webglFramebuffer[Y]))for(let J=0;J<b.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(b.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(b.__webglFramebuffer[Y]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[Y])}else{if(Array.isArray(b.__webglFramebuffer))for(let Y=0;Y<b.__webglFramebuffer.length;Y++)i.deleteFramebuffer(b.__webglFramebuffer[Y]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Y=0;Y<b.__webglColorRenderbuffer.length;Y++)b.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[Y]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=T.textures;for(let Y=0,J=G.length;Y<J;Y++){const K=n.get(G[Y]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(G[Y])}n.remove(T)}let _=0;function S(){_=0}function V(){const T=_;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),_+=1,T}function O(T){const b=[];return b.push(T.wrapS),b.push(T.wrapT),b.push(T.wrapR||0),b.push(T.magFilter),b.push(T.minFilter),b.push(T.anisotropy),b.push(T.internalFormat),b.push(T.format),b.push(T.type),b.push(T.generateMipmaps),b.push(T.premultiplyAlpha),b.push(T.flipY),b.push(T.unpackAlignment),b.push(T.colorSpace),b.join()}function U(T,b){const G=n.get(T);if(T.isVideoTexture&&ut(T),T.isRenderTargetTexture===!1&&T.version>0&&G.__version!==T.version){const Y=T.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{qt(G,T,b);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+b)}function B(T,b){const G=n.get(T);if(T.version>0&&G.__version!==T.version){qt(G,T,b);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+b)}function F(T,b){const G=n.get(T);if(T.version>0&&G.__version!==T.version){qt(G,T,b);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+b)}function nt(T,b){const G=n.get(T);if(T.version>0&&G.__version!==T.version){X(G,T,b);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+b)}const q={[Sr]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Ha]:i.MIRRORED_REPEAT},ot={[we]:i.NEAREST,[Ru]:i.NEAREST_MIPMAP_NEAREST,[Ns]:i.NEAREST_MIPMAP_LINEAR,[ln]:i.LINEAR,[Gr]:i.LINEAR_MIPMAP_NEAREST,[oi]:i.LINEAR_MIPMAP_LINEAR},pt={[Du]:i.NEVER,[Ou]:i.ALWAYS,[Iu]:i.LESS,[nh]:i.LEQUAL,[Uu]:i.EQUAL,[ku]:i.GEQUAL,[Nu]:i.GREATER,[Fu]:i.NOTEQUAL};function mt(T,b){if(b.type===xn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ln||b.magFilter===Gr||b.magFilter===Ns||b.magFilter===oi||b.minFilter===ln||b.minFilter===Gr||b.minFilter===Ns||b.minFilter===oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,q[b.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,q[b.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,q[b.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ot[b.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ot[b.minFilter]),b.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,pt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===we||b.minFilter!==Ns&&b.minFilter!==oi||b.type===xn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Gt(T,b){let G=!1;T.__webglInit===void 0&&(T.__webglInit=!0,b.addEventListener("dispose",R));const Y=b.source;let J=d.get(Y);J===void 0&&(J={},d.set(Y,J));const K=O(b);if(K!==T.__cacheKey){J[K]===void 0&&(J[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,G=!0),J[K].usedTimes++;const At=J[T.__cacheKey];At!==void 0&&(J[T.__cacheKey].usedTimes--,At.usedTimes===0&&I(b)),T.__cacheKey=K,T.__webglTexture=J[K].texture}return G}function qt(T,b,G){let Y=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Y=i.TEXTURE_3D);const J=Gt(T,b),K=b.source;e.bindTexture(Y,T.__webglTexture,i.TEXTURE0+G);const At=n.get(K);if(K.version!==At.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const ft=Qt.getPrimaries(Qt.workingColorSpace),bt=b.colorSpace===zn?null:Qt.getPrimaries(b.colorSpace),Yt=b.colorSpace===zn||ft===bt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let rt=v(b.image,!1,s.maxTextureSize);rt=Lt(b,rt);const St=r.convert(b.format,b.colorSpace),Ot=r.convert(b.type);let Bt=x(b.internalFormat,St,Ot,b.colorSpace,b.isVideoTexture);mt(Y,b);let Et;const Kt=b.mipmaps,Vt=b.isVideoTexture!==!0,ae=At.__version===void 0||J===!0,N=K.dataReady,yt=y(b,rt);if(b.isDepthTexture)Bt=M(b.format===Zi,b.type),ae&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,Bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,St,Ot,null));else if(b.isDataTexture)if(Kt.length>0){Vt&&ae&&e.texStorage2D(i.TEXTURE_2D,yt,Bt,Kt[0].width,Kt[0].height);for(let $=0,Q=Kt.length;$<Q;$++)Et=Kt[$],Vt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,St,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,$,Bt,Et.width,Et.height,0,St,Ot,Et.data);b.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(i.TEXTURE_2D,yt,Bt,rt.width,rt.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,St,Ot,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,St,Ot,rt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Bt,Kt[0].width,Kt[0].height,rt.depth);for(let $=0,Q=Kt.length;$<Q;$++)if(Et=Kt[$],b.format!==cn)if(St!==null)if(Vt){if(N)if(b.layerUpdates.size>0){const vt=ic(Et.width,Et.height,b.format,b.type);for(const Mt of b.layerUpdates){const Zt=Et.data.subarray(Mt*vt/Et.data.BYTES_PER_ELEMENT,(Mt+1)*vt/Et.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,Mt,Et.width,Et.height,1,St,Zt,0,0)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,rt.depth,St,Et.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Bt,Et.width,Et.height,rt.depth,0,Et.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,Et.width,Et.height,rt.depth,St,Ot,Et.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Bt,Et.width,Et.height,rt.depth,0,St,Ot,Et.data)}else{Vt&&ae&&e.texStorage2D(i.TEXTURE_2D,yt,Bt,Kt[0].width,Kt[0].height);for(let $=0,Q=Kt.length;$<Q;$++)Et=Kt[$],b.format!==cn?St!==null?Vt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,St,Et.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Bt,Et.width,Et.height,0,Et.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,Et.width,Et.height,St,Ot,Et.data):e.texImage2D(i.TEXTURE_2D,$,Bt,Et.width,Et.height,0,St,Ot,Et.data)}else if(b.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,yt,Bt,rt.width,rt.height,rt.depth),N)if(b.layerUpdates.size>0){const $=ic(rt.width,rt.height,b.format,b.type);for(const Q of b.layerUpdates){const vt=rt.data.subarray(Q*$/rt.data.BYTES_PER_ELEMENT,(Q+1)*$/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,rt.width,rt.height,1,St,Ot,vt)}b.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,St,Ot,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,St,Ot,rt.data);else if(b.isData3DTexture)Vt?(ae&&e.texStorage3D(i.TEXTURE_3D,yt,Bt,rt.width,rt.height,rt.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,St,Ot,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,St,Ot,rt.data);else if(b.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(i.TEXTURE_2D,yt,Bt,rt.width,rt.height);else{let $=rt.width,Q=rt.height;for(let vt=0;vt<yt;vt++)e.texImage2D(i.TEXTURE_2D,vt,Bt,$,Q,0,St,Ot,null),$>>=1,Q>>=1}}else if(Kt.length>0){if(Vt&&ae){const $=xt(Kt[0]);e.texStorage2D(i.TEXTURE_2D,yt,Bt,$.width,$.height)}for(let $=0,Q=Kt.length;$<Q;$++)Et=Kt[$],Vt?N&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,St,Ot,Et):e.texImage2D(i.TEXTURE_2D,$,Bt,St,Ot,Et);b.generateMipmaps=!1}else if(Vt){if(ae){const $=xt(rt);e.texStorage2D(i.TEXTURE_2D,yt,Bt,$.width,$.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ot,rt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,St,Ot,rt);f(b)&&g(Y),At.__version=K.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function X(T,b,G){if(b.image.length!==6)return;const Y=Gt(T,b),J=b.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+G);const K=n.get(J);if(J.version!==K.__version||Y===!0){e.activeTexture(i.TEXTURE0+G);const At=Qt.getPrimaries(Qt.workingColorSpace),ft=b.colorSpace===zn?null:Qt.getPrimaries(b.colorSpace),bt=b.colorSpace===zn||At===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const Yt=b.isCompressedTexture||b.image[0].isCompressedTexture,rt=b.image[0]&&b.image[0].isDataTexture,St=[];for(let Q=0;Q<6;Q++)!Yt&&!rt?St[Q]=v(b.image[Q],!0,s.maxCubemapSize):St[Q]=rt?b.image[Q].image:b.image[Q],St[Q]=Lt(b,St[Q]);const Ot=St[0],Bt=r.convert(b.format,b.colorSpace),Et=r.convert(b.type),Kt=x(b.internalFormat,Bt,Et,b.colorSpace),Vt=b.isVideoTexture!==!0,ae=K.__version===void 0||Y===!0,N=J.dataReady;let yt=y(b,Ot);mt(i.TEXTURE_CUBE_MAP,b);let $;if(Yt){Vt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,Ot.width,Ot.height);for(let Q=0;Q<6;Q++){$=St[Q].mipmaps;for(let vt=0;vt<$.length;vt++){const Mt=$[vt];b.format!==cn?Bt!==null?Vt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,Mt.width,Mt.height,Bt,Mt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Kt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,0,0,Mt.width,Mt.height,Bt,Et,Mt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt,Kt,Mt.width,Mt.height,0,Bt,Et,Mt.data)}}}else{if($=b.mipmaps,Vt&&ae){$.length>0&&yt++;const Q=xt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,Kt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(rt){Vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,St[Q].width,St[Q].height,Bt,Et,St[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,St[Q].width,St[Q].height,0,Bt,Et,St[Q].data);for(let vt=0;vt<$.length;vt++){const Zt=$[vt].image[Q].image;Vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Zt.width,Zt.height,Bt,Et,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Kt,Zt.width,Zt.height,0,Bt,Et,Zt.data)}}else{Vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Bt,Et,St[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Kt,Bt,Et,St[Q]);for(let vt=0;vt<$.length;vt++){const Mt=$[vt];Vt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,0,0,Bt,Et,Mt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt+1,Kt,Bt,Et,Mt.image[Q])}}}f(b)&&g(i.TEXTURE_CUBE_MAP),K.__version=J.version,b.onUpdate&&b.onUpdate(b)}T.__version=b.version}function tt(T,b,G,Y,J,K){const At=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),bt=x(G.internalFormat,At,ft,G.colorSpace);if(!n.get(b).__hasExternalTextures){const rt=Math.max(1,b.width>>K),St=Math.max(1,b.height>>K);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,K,bt,rt,St,b.depth,0,At,ft,null):e.texImage2D(J,K,bt,rt,St,0,At,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),st(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,n.get(G).__webglTexture,0,lt(b)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,n.get(G).__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function gt(T,b,G){if(i.bindRenderbuffer(i.RENDERBUFFER,T),b.depthBuffer){const Y=b.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,K=M(b.stencilBuffer,J),At=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=lt(b);st(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,K,b.width,b.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,K,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,K,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,T)}else{const Y=b.textures;for(let J=0;J<Y.length;J++){const K=Y[J],At=r.convert(K.format,K.colorSpace),ft=r.convert(K.type),bt=x(K.internalFormat,At,ft,K.colorSpace),Yt=lt(b);G&&st(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,bt,b.width,b.height):st(b)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,bt,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,bt,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(T,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),U(b.depthTexture,0);const Y=n.get(b.depthTexture).__webglTexture,J=lt(b);if(b.depthTexture.format===Hi)st(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(b.depthTexture.format===Zi)st(b)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function Ut(T){const b=n.get(T),G=T.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==T.depthTexture){const Y=T.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Y){const J=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),b.__depthDisposeCallback=J}b.__boundDepthTexture=Y}if(T.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ct(b.__webglFramebuffer,T)}else if(G){b.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[Y]),b.__webglDepthbuffer[Y]===void 0)b.__webglDepthbuffer[Y]=i.createRenderbuffer(),gt(b.__webglDepthbuffer[Y],T,!1);else{const J=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=b.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),gt(b.__webglDepthbuffer,T,!1);else{const Y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(T,b,G){const Y=n.get(T);b!==void 0&&tt(Y.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ut(T)}function it(T){const b=T.texture,G=n.get(T),Y=n.get(b);T.addEventListener("dispose",w);const J=T.textures,K=T.isWebGLCubeRenderTarget===!0,At=J.length>1;if(At||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=b.version,o.memory.textures++),K){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let bt=0;bt<b.mipmaps.length;bt++)G.__webglFramebuffer[ft][bt]=i.createFramebuffer()}else G.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<b.mipmaps.length;ft++)G.__webglFramebuffer[ft]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let ft=0,bt=J.length;ft<bt;ft++){const Yt=n.get(J[ft]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&st(T)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<J.length;ft++){const bt=J[ft];G.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const Yt=r.convert(bt.format,bt.colorSpace),rt=r.convert(bt.type),St=x(bt.internalFormat,Yt,rt,bt.colorSpace,T.isXRRenderTarget===!0),Ot=lt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ot,St,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),gt(G.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),mt(i.TEXTURE_CUBE_MAP,b);for(let ft=0;ft<6;ft++)if(b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)tt(G.__webglFramebuffer[ft][bt],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,bt);else tt(G.__webglFramebuffer[ft],T,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);f(b)&&g(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,bt=J.length;ft<bt;ft++){const Yt=J[ft],rt=n.get(Yt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),mt(i.TEXTURE_2D,Yt),tt(G.__webglFramebuffer,T,Yt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),f(Yt)&&g(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,Y.__webglTexture),mt(ft,b),b.mipmaps&&b.mipmaps.length>0)for(let bt=0;bt<b.mipmaps.length;bt++)tt(G.__webglFramebuffer[bt],T,b,i.COLOR_ATTACHMENT0,ft,bt);else tt(G.__webglFramebuffer,T,b,i.COLOR_ATTACHMENT0,ft,0);f(b)&&g(ft),e.unbindTexture()}T.depthBuffer&&Ut(T)}function wt(T){const b=T.textures;for(let G=0,Y=b.length;G<Y;G++){const J=b[G];if(f(J)){const K=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,At=n.get(J).__webglTexture;e.bindTexture(K,At),g(K),e.unbindTexture()}}}const j=[],C=[];function ht(T){if(T.samples>0){if(st(T)===!1){const b=T.textures,G=T.width,Y=T.height;let J=i.COLOR_BUFFER_BIT;const K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(T),ft=b.length>1;if(ft)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const Yt=n.get(b[bt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,G,Y,0,0,G,Y,J,i.NEAREST),a===!0&&(j.length=0,C.length=0,j.push(i.COLOR_ATTACHMENT0+bt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(j.push(K),C.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.RENDERBUFFER,At.__webglColorRenderbuffer[bt]);const Yt=n.get(b[bt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+bt,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&a){const b=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function lt(T){return Math.min(s.maxSamples,T.samples)}function st(T){const b=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ut(T){const b=o.render.frame;u.get(T)!==b&&(u.set(T,b),T.update())}function Lt(T,b){const G=T.colorSpace,Y=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||G!==$n&&G!==zn&&(Qt.getTransfer(G)===oe?(Y!==cn||J!==Ln)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function xt(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=S,this.setTexture2D=U,this.setTexture2DArray=B,this.setTexture3D=F,this.setTextureCube=nt,this.rebindTextures=Nt,this.setupRenderTarget=it,this.updateRenderTargetMipmap=wt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=tt,this.useMultisampledRTT=st}function G0(i,t){function e(n,s=zn){let r;const o=Qt.getTransfer(s);if(n===Ln)return i.UNSIGNED_BYTE;if(n===Io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Uo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$c)return i.BYTE;if(n===Xc)return i.SHORT;if(n===Es)return i.UNSIGNED_SHORT;if(n===Do)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===xn)return i.FLOAT;if(n===un)return i.HALF_FLOAT;if(n===Kc)return i.ALPHA;if(n===Zc)return i.RGB;if(n===cn)return i.RGBA;if(n===jc)return i.LUMINANCE;if(n===Jc)return i.LUMINANCE_ALPHA;if(n===Hi)return i.DEPTH_COMPONENT;if(n===Zi)return i.DEPTH_STENCIL;if(n===No)return i.RED;if(n===Fo)return i.RED_INTEGER;if(n===Qc)return i.RG;if(n===ko)return i.RG_INTEGER;if(n===Oo)return i.RGBA_INTEGER;if(n===pr||n===mr||n===gr||n===vr)if(o===oe)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wa||n===qa||n===$a||n===Xa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ya||n===Ka||n===Za)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ya||n===Ka)return o===oe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Za)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ja||n===Ja||n===Qa||n===to||n===eo||n===no||n===io||n===so||n===ro||n===ao||n===oo||n===lo||n===co||n===ho)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ja)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qa)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===to)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===eo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===no)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===io)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===so)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ro)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ao)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===oo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lo)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===co)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ho)return o===oe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===uo||n===fo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return o===oe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===uo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===th||n===po||n===mo||n===go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===po)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ki?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class H0 extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class li extends me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class _a{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const l=this._targetRay,a=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const f=e.getJointPose(v,n),g=this._getHandJoint(c,v);f!==null&&(g.matrix.fromArray(f.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=f.radius),g.visible=f!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,p=.005;c.inputState.pinching&&d>m+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new li;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const q0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$0=`
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

}`;class X0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Fe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Ne({vertexShader:q0,fragmentShader:$0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new xe(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Y0 extends ns{constructor(t,e){super();const n=this;let s=null,r=1,o=null,l="local-floor",a=1,c=null,u=null,h=null,d=null,m=null,p=null;const v=new X0,f=e.getContextAttributes();let g=null,x=null;const M=[],y=[],R=new et;let w=null;const A=new Ve;A.layers.enable(1),A.viewport=new re;const I=new Ve;I.layers.enable(2),I.viewport=new re;const D=[A,I],_=new H0;_.layers.enable(1),_.layers.enable(2);let S=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let tt=M[X];return tt===void 0&&(tt=new _a,M[X]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(X){let tt=M[X];return tt===void 0&&(tt=new _a,M[X]=tt),tt.getGripSpace()},this.getHand=function(X){let tt=M[X];return tt===void 0&&(tt=new _a,M[X]=tt),tt.getHandSpace()};function O(X){const tt=y.indexOf(X.inputSource);if(tt===-1)return;const gt=M[tt];gt!==void 0&&(gt.update(X.inputSource,X.frame,c||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",U),s.removeEventListener("inputsourceschange",B);for(let X=0;X<M.length;X++){const tt=y[X];tt!==null&&(y[X]=null,M[X].disconnect(tt))}S=null,V=null,v.reset(),t.setRenderTarget(g),m=null,d=null,h=null,s=null,x=null,qt.stop(),n.isPresenting=!1,t.setPixelRatio(w),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){l=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",U),s.addEventListener("inputsourceschange",B),f.xrCompatible!==!0&&await e.makeXRCompatible(),w=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const tt={antialias:f.antialias,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,tt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ke(m.framebufferWidth,m.framebufferHeight,{format:cn,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:f.stencil})}else{let tt=null,gt=null,ct=null;f.depth&&(ct=f.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=f.stencil?Zi:Hi,gt=f.stencil?Ki:hi);const Ut={colorFormat:e.RGBA8,depthFormat:ct,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),x=new Ke(d.textureWidth,d.textureHeight,{format:cn,type:Ln,depthTexture:new mh(d.textureWidth,d.textureHeight,gt,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:f.stencil,colorSpace:t.outputColorSpace,samples:f.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(a),c=null,o=await s.requestReferenceSpace(l),qt.setContext(s),qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(X){for(let tt=0;tt<X.removed.length;tt++){const gt=X.removed[tt],ct=y.indexOf(gt);ct>=0&&(y[ct]=null,M[ct].disconnect(gt))}for(let tt=0;tt<X.added.length;tt++){const gt=X.added[tt];let ct=y.indexOf(gt);if(ct===-1){for(let Nt=0;Nt<M.length;Nt++)if(Nt>=y.length){y.push(gt),ct=Nt;break}else if(y[Nt]===null){y[Nt]=gt,ct=Nt;break}if(ct===-1)break}const Ut=M[ct];Ut&&Ut.connect(gt)}}const F=new L,nt=new L;function q(X,tt,gt){F.setFromMatrixPosition(tt.matrixWorld),nt.setFromMatrixPosition(gt.matrixWorld);const ct=F.distanceTo(nt),Ut=tt.projectionMatrix.elements,Nt=gt.projectionMatrix.elements,it=Ut[14]/(Ut[10]-1),wt=Ut[14]/(Ut[10]+1),j=(Ut[9]+1)/Ut[5],C=(Ut[9]-1)/Ut[5],ht=(Ut[8]-1)/Ut[0],lt=(Nt[8]+1)/Nt[0],st=it*ht,ut=it*lt,Lt=ct/(-ht+lt),xt=Lt*-ht;if(tt.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(xt),X.translateZ(Lt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ut[10]===-1)X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{const T=it+Lt,b=wt+Lt,G=st-xt,Y=ut+(ct-xt),J=j*wt/b*T,K=C*wt/b*T;X.projectionMatrix.makePerspective(G,Y,J,K,T,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ot(X,tt){tt===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(tt.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let tt=X.near,gt=X.far;v.texture!==null&&(v.depthNear>0&&(tt=v.depthNear),v.depthFar>0&&(gt=v.depthFar)),_.near=I.near=A.near=tt,_.far=I.far=A.far=gt,(S!==_.near||V!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),S=_.near,V=_.far);const ct=X.parent,Ut=_.cameras;ot(_,ct);for(let Nt=0;Nt<Ut.length;Nt++)ot(Ut[Nt],ct);Ut.length===2?q(_,A,I):_.projectionMatrix.copy(A.projectionMatrix),pt(X,_,ct)};function pt(X,tt,gt){gt===null?X.matrix.copy(tt.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(tt.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(tt.projectionMatrix),X.projectionMatrixInverse.copy(tt.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Cr*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return a},this.setFoveation=function(X){a=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let mt=null;function Gt(X,tt){if(u=tt.getViewerPose(c||o),p=tt,u!==null){const gt=u.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let ct=!1;gt.length!==_.cameras.length&&(_.cameras.length=0,ct=!0);for(let Nt=0;Nt<gt.length;Nt++){const it=gt[Nt];let wt=null;if(m!==null)wt=m.getViewport(it);else{const C=h.getViewSubImage(d,it);wt=C.viewport,Nt===0&&(t.setRenderTargetTextures(x,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(x))}let j=D[Nt];j===void 0&&(j=new Ve,j.layers.enable(Nt),j.viewport=new re,D[Nt]=j),j.matrix.fromArray(it.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(it.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(wt.x,wt.y,wt.width,wt.height),Nt===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ct===!0&&_.cameras.push(j)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const Nt=h.getDepthInformation(gt[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,s.renderState)}}for(let gt=0;gt<M.length;gt++){const ct=y[gt],Ut=M[gt];ct!==null&&Ut!==void 0&&Ut.update(ct,tt,c||o)}mt&&mt(X,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),p=null}const qt=new ph;qt.setAnimationLoop(Gt),this.setAnimationLoop=function(X){mt=X},this.dispose=function(){}}}const ti=new dn,K0=new ie;function Z0(i,t){function e(f,g){f.matrixAutoUpdate===!0&&f.updateMatrix(),g.value.copy(f.matrix)}function n(f,g){g.color.getRGB(f.fogColor.value,uh(i)),g.isFog?(f.fogNear.value=g.near,f.fogFar.value=g.far):g.isFogExp2&&(f.fogDensity.value=g.density)}function s(f,g,x,M,y){g.isMeshBasicMaterial||g.isMeshLambertMaterial?r(f,g):g.isMeshToonMaterial?(r(f,g),h(f,g)):g.isMeshPhongMaterial?(r(f,g),u(f,g)):g.isMeshStandardMaterial?(r(f,g),d(f,g),g.isMeshPhysicalMaterial&&m(f,g,y)):g.isMeshMatcapMaterial?(r(f,g),p(f,g)):g.isMeshDepthMaterial?r(f,g):g.isMeshDistanceMaterial?(r(f,g),v(f,g)):g.isMeshNormalMaterial?r(f,g):g.isLineBasicMaterial?(o(f,g),g.isLineDashedMaterial&&l(f,g)):g.isPointsMaterial?a(f,g,x,M):g.isSpriteMaterial?c(f,g):g.isShadowMaterial?(f.color.value.copy(g.color),f.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(f,g){f.opacity.value=g.opacity,g.color&&f.diffuse.value.copy(g.color),g.emissive&&f.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.bumpMap&&(f.bumpMap.value=g.bumpMap,e(g.bumpMap,f.bumpMapTransform),f.bumpScale.value=g.bumpScale,g.side===Ge&&(f.bumpScale.value*=-1)),g.normalMap&&(f.normalMap.value=g.normalMap,e(g.normalMap,f.normalMapTransform),f.normalScale.value.copy(g.normalScale),g.side===Ge&&f.normalScale.value.negate()),g.displacementMap&&(f.displacementMap.value=g.displacementMap,e(g.displacementMap,f.displacementMapTransform),f.displacementScale.value=g.displacementScale,f.displacementBias.value=g.displacementBias),g.emissiveMap&&(f.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,f.emissiveMapTransform)),g.specularMap&&(f.specularMap.value=g.specularMap,e(g.specularMap,f.specularMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest);const x=t.get(g),M=x.envMap,y=x.envMapRotation;M&&(f.envMap.value=M,ti.copy(y),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),f.envMapRotation.value.setFromMatrix4(K0.makeRotationFromEuler(ti)),f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=g.reflectivity,f.ior.value=g.ior,f.refractionRatio.value=g.refractionRatio),g.lightMap&&(f.lightMap.value=g.lightMap,f.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,f.lightMapTransform)),g.aoMap&&(f.aoMap.value=g.aoMap,f.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,f.aoMapTransform))}function o(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform))}function l(f,g){f.dashSize.value=g.dashSize,f.totalSize.value=g.dashSize+g.gapSize,f.scale.value=g.scale}function a(f,g,x,M){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.size.value=g.size*x,f.scale.value=M*.5,g.map&&(f.map.value=g.map,e(g.map,f.uvTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function c(f,g){f.diffuse.value.copy(g.color),f.opacity.value=g.opacity,f.rotation.value=g.rotation,g.map&&(f.map.value=g.map,e(g.map,f.mapTransform)),g.alphaMap&&(f.alphaMap.value=g.alphaMap,e(g.alphaMap,f.alphaMapTransform)),g.alphaTest>0&&(f.alphaTest.value=g.alphaTest)}function u(f,g){f.specular.value.copy(g.specular),f.shininess.value=Math.max(g.shininess,1e-4)}function h(f,g){g.gradientMap&&(f.gradientMap.value=g.gradientMap)}function d(f,g){f.metalness.value=g.metalness,g.metalnessMap&&(f.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,f.metalnessMapTransform)),f.roughness.value=g.roughness,g.roughnessMap&&(f.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,f.roughnessMapTransform)),g.envMap&&(f.envMapIntensity.value=g.envMapIntensity)}function m(f,g,x){f.ior.value=g.ior,g.sheen>0&&(f.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),f.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(f.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,f.sheenColorMapTransform)),g.sheenRoughnessMap&&(f.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,f.sheenRoughnessMapTransform))),g.clearcoat>0&&(f.clearcoat.value=g.clearcoat,f.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(f.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,f.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(f.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ge&&f.clearcoatNormalScale.value.negate())),g.dispersion>0&&(f.dispersion.value=g.dispersion),g.iridescence>0&&(f.iridescence.value=g.iridescence,f.iridescenceIOR.value=g.iridescenceIOR,f.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(f.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,f.iridescenceMapTransform)),g.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),g.transmission>0&&(f.transmission.value=g.transmission,f.transmissionSamplerMap.value=x.texture,f.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(f.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,f.transmissionMapTransform)),f.thickness.value=g.thickness,g.thicknessMap&&(f.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=g.attenuationDistance,f.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(f.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(f.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=g.specularIntensity,f.specularColor.value.copy(g.specularColor),g.specularColorMap&&(f.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,f.specularColorMapTransform)),g.specularIntensityMap&&(f.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,f.specularIntensityMapTransform))}function p(f,g){g.matcap&&(f.matcap.value=g.matcap)}function v(f,g){const x=t.get(g).light;f.referencePosition.value.setFromMatrixPosition(x.matrixWorld),f.nearDistance.value=x.shadow.camera.near,f.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function j0(i,t,e,n){let s={},r={},o=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function a(x,M){const y=M.program;n.uniformBlockBinding(x,y)}function c(x,M){let y=s[x.id];y===void 0&&(p(x),y=u(x),s[x.id]=y,x.addEventListener("dispose",f));const R=M.program;n.updateUBOMapping(x,R);const w=t.render.frame;r[x.id]!==w&&(d(x),r[x.id]=w)}function u(x){const M=h();x.__bindingPointIndex=M;const y=i.createBuffer(),R=x.__size,w=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,y),y}function h(){for(let x=0;x<l;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const M=s[x.id],y=x.uniforms,R=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let w=0,A=y.length;w<A;w++){const I=Array.isArray(y[w])?y[w]:[y[w]];for(let D=0,_=I.length;D<_;D++){const S=I[D];if(m(S,w,D,R)===!0){const V=S.__offset,O=Array.isArray(S.value)?S.value:[S.value];let U=0;for(let B=0;B<O.length;B++){const F=O[B],nt=v(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,V+U,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,U),U+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,S.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,M,y,R){const w=x.value,A=M+"_"+y;if(R[A]===void 0)return typeof w=="number"||typeof w=="boolean"?R[A]=w:R[A]=w.clone(),!0;{const I=R[A];if(typeof w=="number"||typeof w=="boolean"){if(I!==w)return R[A]=w,!0}else if(I.equals(w)===!1)return I.copy(w),!0}return!1}function p(x){const M=x.uniforms;let y=0;const R=16;for(let A=0,I=M.length;A<I;A++){const D=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,S=D.length;_<S;_++){const V=D[_],O=Array.isArray(V.value)?V.value:[V.value];for(let U=0,B=O.length;U<B;U++){const F=O[U],nt=v(F),q=y%R,ot=q%nt.boundary,pt=q+ot;y+=ot,pt!==0&&R-pt<nt.storage&&(y+=R-pt),V.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=y,y+=nt.storage}}}const w=y%R;return w>0&&(y+=R-w),x.__size=y,x.__cache={},this}function v(x){const M={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(M.boundary=4,M.storage=4):x.isVector2?(M.boundary=8,M.storage=8):x.isVector3||x.isColor?(M.boundary=16,M.storage=12):x.isVector4?(M.boundary=16,M.storage=16):x.isMatrix3?(M.boundary=48,M.storage=48):x.isMatrix4?(M.boundary=64,M.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),M}function f(x){const M=x.target;M.removeEventListener("dispose",f);const y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function g(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:a,update:c,dispose:g}}class J0{constructor(t={}){const{canvas:e=zu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),p=new Int32Array(4);let v=null,f=null;const g=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=Gn,this.toneMappingExposure=1;const M=this;let y=!1,R=0,w=0,A=null,I=-1,D=null;const _=new re,S=new re;let V=null;const O=new zt(0);let U=0,B=e.width,F=e.height,nt=1,q=null,ot=null;const pt=new re(0,0,B,F),mt=new re(0,0,B,F);let Gt=!1;const qt=new Vo;let X=!1,tt=!1;const gt=new ie,ct=new ie,Ut=new L,Nt=new re,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function j(){return A===null?nt:1}let C=n;function ht(E,k){return e.getContext(E,k)}try{const E={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ro}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",Mt,!1),C===null){const k="webgl2";if(C=ht(k,E),C===null)throw ht(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let lt,st,ut,Lt,xt,T,b,G,Y,J,K,At,ft,bt,Yt,rt,St,Ot,Bt,Et,Kt,Vt,ae,N;function yt(){lt=new sm(C),lt.init(),Vt=new G0(C,lt),st=new Jp(C,lt,t,Vt),ut=new B0(C),st.reverseDepthBuffer&&ut.buffers.depth.setReversed(!0),Lt=new om(C),xt=new E0,T=new V0(C,lt,ut,xt,st,Vt,Lt),b=new tm(M),G=new im(M),Y=new pf(C),ae=new Zp(C,Y),J=new rm(C,Y,Lt,ae),K=new cm(C,J,Y,Lt),Bt=new lm(C,st,T),rt=new Qp(xt),At=new w0(M,b,G,lt,st,ae,rt),ft=new Z0(M,xt),bt=new A0,Yt=new I0(lt),Ot=new Kp(M,b,G,ut,K,d,a),St=new k0(M,K,st),N=new j0(C,Lt,st,ut),Et=new jp(C,lt,Lt),Kt=new am(C,lt,Lt),Lt.programs=At.programs,M.capabilities=st,M.extensions=lt,M.properties=xt,M.renderLists=bt,M.shadowMap=St,M.state=ut,M.info=Lt}yt();const $=new Y0(M,C);this.xr=$,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=lt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=lt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(E){E!==void 0&&(nt=E,this.setSize(B,F,!1))},this.getSize=function(E){return E.set(B,F)},this.setSize=function(E,k,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=E,F=k,e.width=Math.floor(E*nt),e.height=Math.floor(k*nt),H===!0&&(e.style.width=E+"px",e.style.height=k+"px"),this.setViewport(0,0,E,k)},this.getDrawingBufferSize=function(E){return E.set(B*nt,F*nt).floor()},this.setDrawingBufferSize=function(E,k,H){B=E,F=k,nt=H,e.width=Math.floor(E*H),e.height=Math.floor(k*H),this.setViewport(0,0,E,k)},this.getCurrentViewport=function(E){return E.copy(_)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,k,H,W){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,k,H,W),ut.viewport(_.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(E){return E.copy(mt)},this.setScissor=function(E,k,H,W){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,k,H,W),ut.scissor(S.copy(mt).multiplyScalar(nt).round())},this.getScissorTest=function(){return Gt},this.setScissorTest=function(E){ut.setScissorTest(Gt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){ot=E},this.getClearColor=function(E){return E.copy(Ot.getClearColor())},this.setClearColor=function(){Ot.setClearColor.apply(Ot,arguments)},this.getClearAlpha=function(){return Ot.getClearAlpha()},this.setClearAlpha=function(){Ot.setClearAlpha.apply(Ot,arguments)},this.clear=function(E=!0,k=!0,H=!0){let W=0;if(E){let z=!1;if(A!==null){const at=A.texture.format;z=at===Oo||at===ko||at===Fo}if(z){const at=A.texture.type,_t=at===Ln||at===hi||at===Es||at===Ki||at===Io||at===Uo,Tt=Ot.getClearColor(),Ct=Ot.getClearAlpha(),Ft=Tt.r,kt=Tt.g,Pt=Tt.b;_t?(m[0]=Ft,m[1]=kt,m[2]=Pt,m[3]=Ct,C.clearBufferuiv(C.COLOR,0,m)):(p[0]=Ft,p[1]=kt,p[2]=Pt,p[3]=Ct,C.clearBufferiv(C.COLOR,0,p))}else W|=C.COLOR_BUFFER_BIT}k&&(W|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(W|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Mt,!1),bt.dispose(),Yt.dispose(),xt.dispose(),b.dispose(),G.dispose(),K.dispose(),ae.dispose(),N.dispose(),At.dispose(),$.dispose(),$.removeEventListener("sessionstart",il),$.removeEventListener("sessionend",sl),Yn.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Lt.autoReset,k=St.enabled,H=St.autoUpdate,W=St.needsUpdate,z=St.type;yt(),Lt.autoReset=E,St.enabled=k,St.autoUpdate=H,St.needsUpdate=W,St.type=z}function Mt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zt(E){const k=E.target;k.removeEventListener("dispose",Zt),ye(k)}function ye(E){Be(E),xt.remove(E)}function Be(E){const k=xt.get(E).programs;k!==void 0&&(k.forEach(function(H){At.releaseProgram(H)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,k,H,W,z,at){k===null&&(k=it);const _t=z.isMesh&&z.matrixWorld.determinant()<0,Tt=tu(E,k,H,W,z);ut.setMaterial(W,_t);let Ct=H.index,Ft=1;if(W.wireframe===!0){if(Ct=J.getWireframeAttribute(H),Ct===void 0)return;Ft=2}const kt=H.drawRange,Pt=H.attributes.position;let ne=kt.start*Ft,le=(kt.start+kt.count)*Ft;at!==null&&(ne=Math.max(ne,at.start*Ft),le=Math.min(le,(at.start+at.count)*Ft)),Ct!==null?(ne=Math.max(ne,0),le=Math.min(le,Ct.count)):Pt!=null&&(ne=Math.max(ne,0),le=Math.min(le,Pt.count));const de=le-ne;if(de<0||de===1/0)return;ae.setup(z,W,Tt,H,Ct);let He,te=Et;if(Ct!==null&&(He=Y.get(Ct),te=Kt,te.setIndex(He)),z.isMesh)W.wireframe===!0?(ut.setLineWidth(W.wireframeLinewidth*j()),te.setMode(C.LINES)):te.setMode(C.TRIANGLES);else if(z.isLine){let Dt=W.linewidth;Dt===void 0&&(Dt=1),ut.setLineWidth(Dt*j()),z.isLineSegments?te.setMode(C.LINES):z.isLineLoop?te.setMode(C.LINE_LOOP):te.setMode(C.LINE_STRIP)}else z.isPoints?te.setMode(C.POINTS):z.isSprite&&te.setMode(C.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)te.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(lt.get("WEBGL_multi_draw"))te.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Dt=z._multiDrawStarts,Re=z._multiDrawCounts,ee=z._multiDrawCount,nn=Ct?Y.get(Ct).bytesPerElement:1,mi=xt.get(W).currentProgram.getUniforms();for(let We=0;We<ee;We++)mi.setValue(C,"_gl_DrawID",We),te.render(Dt[We]/nn,Re[We])}else if(z.isInstancedMesh)te.renderInstances(ne,de,z.count);else if(H.isInstancedBufferGeometry){const Dt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Re=Math.min(H.instanceCount,Dt);te.renderInstances(ne,de,Re)}else te.render(ne,de)};function Jt(E,k,H){E.transparent===!0&&E.side===Ye&&E.forceSinglePass===!1?(E.side=Ge,E.needsUpdate=!0,Us(E,k,H),E.side=Wn,E.needsUpdate=!0,Us(E,k,H),E.side=Ye):Us(E,k,H)}this.compile=function(E,k,H=null){H===null&&(H=E),f=Yt.get(H),f.init(k),x.push(f),H.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),E!==H&&E.traverseVisible(function(z){z.isLight&&z.layers.test(k.layers)&&(f.pushLight(z),z.castShadow&&f.pushShadow(z))}),f.setupLights();const W=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let _t=0;_t<at.length;_t++){const Tt=at[_t];Jt(Tt,H,z),W.add(Tt)}else Jt(at,H,z),W.add(at)}),x.pop(),f=null,W},this.compileAsync=function(E,k,H=null){const W=this.compile(E,k,H);return new Promise(z=>{function at(){if(W.forEach(function(_t){xt.get(_t).currentProgram.isReady()&&W.delete(_t)}),W.size===0){z(E);return}setTimeout(at,10)}lt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let ze=null;function bn(E){ze&&ze(E)}function il(){Yn.stop()}function sl(){Yn.start()}const Yn=new ph;Yn.setAnimationLoop(bn),typeof self<"u"&&Yn.setContext(self),this.setAnimationLoop=function(E){ze=E,$.setAnimationLoop(E),E===null?Yn.stop():Yn.start()},$.addEventListener("sessionstart",il),$.addEventListener("sessionend",sl),this.render=function(E,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(k),k=$.getCamera()),E.isScene===!0&&E.onBeforeRender(M,E,k,A),f=Yt.get(E,x.length),f.init(k),x.push(f),ct.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),qt.setFromProjectionMatrix(ct),tt=this.localClippingEnabled,X=rt.init(this.clippingPlanes,tt),v=bt.get(E,g.length),v.init(),g.push(v),$.enabled===!0&&$.isPresenting===!0){const at=M.xr.getDepthSensingMesh();at!==null&&Or(at,k,-1/0,M.sortObjects)}Or(E,k,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(q,ot),wt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,wt&&Ot.addToRenderList(v,E),this.info.render.frame++,X===!0&&rt.beginShadows();const H=f.state.shadowsArray;St.render(H,E,k),X===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,z=v.transmissive;if(f.setupLights(),k.isArrayCamera){const at=k.cameras;if(z.length>0)for(let _t=0,Tt=at.length;_t<Tt;_t++){const Ct=at[_t];al(W,z,E,Ct)}wt&&Ot.render(E);for(let _t=0,Tt=at.length;_t<Tt;_t++){const Ct=at[_t];rl(v,E,Ct,Ct.viewport)}}else z.length>0&&al(W,z,E,k),wt&&Ot.render(E),rl(v,E,k);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(M,E,k),ae.resetDefaultState(),I=-1,D=null,x.pop(),x.length>0?(f=x[x.length-1],X===!0&&rt.setGlobalState(M.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?v=g[g.length-1]:v=null};function Or(E,k,H,W){if(E.visible===!1)return;if(E.layers.test(k.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(k);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||qt.intersectsSprite(E)){W&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(ct);const _t=K.update(E),Tt=E.material;Tt.visible&&v.push(E,_t,Tt,H,Nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||qt.intersectsObject(E))){const _t=K.update(E),Tt=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(_t.boundingSphere===null&&_t.computeBoundingSphere(),Nt.copy(_t.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(ct)),Array.isArray(Tt)){const Ct=_t.groups;for(let Ft=0,kt=Ct.length;Ft<kt;Ft++){const Pt=Ct[Ft],ne=Tt[Pt.materialIndex];ne&&ne.visible&&v.push(E,_t,ne,H,Nt.z,Pt)}}else Tt.visible&&v.push(E,_t,Tt,H,Nt.z,null)}}const at=E.children;for(let _t=0,Tt=at.length;_t<Tt;_t++)Or(at[_t],k,H,W)}function rl(E,k,H,W){const z=E.opaque,at=E.transmissive,_t=E.transparent;f.setupLightsView(H),X===!0&&rt.setGlobalState(M.clippingPlanes,H),W&&ut.viewport(_.copy(W)),z.length>0&&Is(z,k,H),at.length>0&&Is(at,k,H),_t.length>0&&Is(_t,k,H),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function al(E,k,H,W){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Ke(1,1,{generateMipmaps:!0,type:lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float")?un:Ln,minFilter:oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const at=f.state.transmissionRenderTarget[W.id],_t=W.viewport||_;at.setSize(_t.z,_t.w);const Tt=M.getRenderTarget();M.setRenderTarget(at),M.getClearColor(O),U=M.getClearAlpha(),U<1&&M.setClearColor(16777215,.5),M.clear(),wt&&Ot.render(H);const Ct=M.toneMapping;M.toneMapping=Gn;const Ft=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),X===!0&&rt.setGlobalState(M.clippingPlanes,W),Is(E,H,W),T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at),lt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let Pt=0,ne=k.length;Pt<ne;Pt++){const le=k[Pt],de=le.object,He=le.geometry,te=le.material,Dt=le.group;if(te.side===Ye&&de.layers.test(W.layers)){const Re=te.side;te.side=Ge,te.needsUpdate=!0,ol(de,H,W,He,te,Dt),te.side=Re,te.needsUpdate=!0,kt=!0}}kt===!0&&(T.updateMultisampleRenderTarget(at),T.updateRenderTargetMipmap(at))}M.setRenderTarget(Tt),M.setClearColor(O,U),Ft!==void 0&&(W.viewport=Ft),M.toneMapping=Ct}function Is(E,k,H){const W=k.isScene===!0?k.overrideMaterial:null;for(let z=0,at=E.length;z<at;z++){const _t=E[z],Tt=_t.object,Ct=_t.geometry,Ft=W===null?_t.material:W,kt=_t.group;Tt.layers.test(H.layers)&&ol(Tt,k,H,Ct,Ft,kt)}}function ol(E,k,H,W,z,at){E.onBeforeRender(M,k,H,W,z,at),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(M,k,H,W,E,at),z.transparent===!0&&z.side===Ye&&z.forceSinglePass===!1?(z.side=Ge,z.needsUpdate=!0,M.renderBufferDirect(H,k,W,z,E,at),z.side=Wn,z.needsUpdate=!0,M.renderBufferDirect(H,k,W,z,E,at),z.side=Ye):M.renderBufferDirect(H,k,W,z,E,at),E.onAfterRender(M,k,H,W,z,at)}function Us(E,k,H){k.isScene!==!0&&(k=it);const W=xt.get(E),z=f.state.lights,at=f.state.shadowsArray,_t=z.state.version,Tt=At.getParameters(E,z.state,at,k,H),Ct=At.getProgramCacheKey(Tt);let Ft=W.programs;W.environment=E.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||W.environment),W.envMapRotation=W.environment!==null&&E.envMap===null?k.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Zt),Ft=new Map,W.programs=Ft);let kt=Ft.get(Ct);if(kt!==void 0){if(W.currentProgram===kt&&W.lightsStateVersion===_t)return cl(E,Tt),kt}else Tt.uniforms=At.getUniforms(E),E.onBeforeCompile(Tt,M),kt=At.acquireProgram(Tt,Ct),Ft.set(Ct,kt),W.uniforms=Tt.uniforms;const Pt=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pt.clippingPlanes=rt.uniform),cl(E,Tt),W.needsLights=nu(E),W.lightsStateVersion=_t,W.needsLights&&(Pt.ambientLightColor.value=z.state.ambient,Pt.lightProbe.value=z.state.probe,Pt.directionalLights.value=z.state.directional,Pt.directionalLightShadows.value=z.state.directionalShadow,Pt.spotLights.value=z.state.spot,Pt.spotLightShadows.value=z.state.spotShadow,Pt.rectAreaLights.value=z.state.rectArea,Pt.ltc_1.value=z.state.rectAreaLTC1,Pt.ltc_2.value=z.state.rectAreaLTC2,Pt.pointLights.value=z.state.point,Pt.pointLightShadows.value=z.state.pointShadow,Pt.hemisphereLights.value=z.state.hemi,Pt.directionalShadowMap.value=z.state.directionalShadowMap,Pt.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Pt.spotShadowMap.value=z.state.spotShadowMap,Pt.spotLightMatrix.value=z.state.spotLightMatrix,Pt.spotLightMap.value=z.state.spotLightMap,Pt.pointShadowMap.value=z.state.pointShadowMap,Pt.pointShadowMatrix.value=z.state.pointShadowMatrix),W.currentProgram=kt,W.uniformsList=null,kt}function ll(E){if(E.uniformsList===null){const k=E.currentProgram.getUniforms();E.uniformsList=yr.seqWithValue(k.seq,E.uniforms)}return E.uniformsList}function cl(E,k){const H=xt.get(E);H.outputColorSpace=k.outputColorSpace,H.batching=k.batching,H.batchingColor=k.batchingColor,H.instancing=k.instancing,H.instancingColor=k.instancingColor,H.instancingMorph=k.instancingMorph,H.skinning=k.skinning,H.morphTargets=k.morphTargets,H.morphNormals=k.morphNormals,H.morphColors=k.morphColors,H.morphTargetsCount=k.morphTargetsCount,H.numClippingPlanes=k.numClippingPlanes,H.numIntersection=k.numClipIntersection,H.vertexAlphas=k.vertexAlphas,H.vertexTangents=k.vertexTangents,H.toneMapping=k.toneMapping}function tu(E,k,H,W,z){k.isScene!==!0&&(k=it),T.resetTextureUnits();const at=k.fog,_t=W.isMeshStandardMaterial?k.environment:null,Tt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:$n,Ct=(W.isMeshStandardMaterial?G:b).get(W.envMap||_t),Ft=W.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,kt=!!H.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Pt=!!H.morphAttributes.position,ne=!!H.morphAttributes.normal,le=!!H.morphAttributes.color;let de=Gn;W.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(de=M.toneMapping);const He=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,te=He!==void 0?He.length:0,Dt=xt.get(W),Re=f.state.lights;if(X===!0&&(tt===!0||E!==D)){const Je=E===D&&W.id===I;rt.setState(W,E,Je)}let ee=!1;W.version===Dt.__version?(Dt.needsLights&&Dt.lightsStateVersion!==Re.state.version||Dt.outputColorSpace!==Tt||z.isBatchedMesh&&Dt.batching===!1||!z.isBatchedMesh&&Dt.batching===!0||z.isBatchedMesh&&Dt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Dt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Dt.instancing===!1||!z.isInstancedMesh&&Dt.instancing===!0||z.isSkinnedMesh&&Dt.skinning===!1||!z.isSkinnedMesh&&Dt.skinning===!0||z.isInstancedMesh&&Dt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Dt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Dt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Dt.instancingMorph===!1&&z.morphTexture!==null||Dt.envMap!==Ct||W.fog===!0&&Dt.fog!==at||Dt.numClippingPlanes!==void 0&&(Dt.numClippingPlanes!==rt.numPlanes||Dt.numIntersection!==rt.numIntersection)||Dt.vertexAlphas!==Ft||Dt.vertexTangents!==kt||Dt.morphTargets!==Pt||Dt.morphNormals!==ne||Dt.morphColors!==le||Dt.toneMapping!==de||Dt.morphTargetsCount!==te)&&(ee=!0):(ee=!0,Dt.__version=W.version);let nn=Dt.currentProgram;ee===!0&&(nn=Us(W,k,z));let mi=!1,We=!1,Br=!1;const ge=nn.getUniforms(),Dn=Dt.uniforms;if(ut.useProgram(nn.program)&&(mi=!0,We=!0,Br=!0),W.id!==I&&(I=W.id,We=!0),mi||D!==E){st.reverseDepthBuffer?(gt.copy(E.projectionMatrix),Gu(gt),Hu(gt),ge.setValue(C,"projectionMatrix",gt)):ge.setValue(C,"projectionMatrix",E.projectionMatrix),ge.setValue(C,"viewMatrix",E.matrixWorldInverse);const Je=ge.map.cameraPosition;Je!==void 0&&Je.setValue(C,Ut.setFromMatrixPosition(E.matrixWorld)),st.logarithmicDepthBuffer&&ge.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ge.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),D!==E&&(D=E,We=!0,Br=!0)}if(z.isSkinnedMesh){ge.setOptional(C,z,"bindMatrix"),ge.setOptional(C,z,"bindMatrixInverse");const Je=z.skeleton;Je&&(Je.boneTexture===null&&Je.computeBoneTexture(),ge.setValue(C,"boneTexture",Je.boneTexture,T))}z.isBatchedMesh&&(ge.setOptional(C,z,"batchingTexture"),ge.setValue(C,"batchingTexture",z._matricesTexture,T),ge.setOptional(C,z,"batchingIdTexture"),ge.setValue(C,"batchingIdTexture",z._indirectTexture,T),ge.setOptional(C,z,"batchingColorTexture"),z._colorsTexture!==null&&ge.setValue(C,"batchingColorTexture",z._colorsTexture,T));const zr=H.morphAttributes;if((zr.position!==void 0||zr.normal!==void 0||zr.color!==void 0)&&Bt.update(z,H,nn),(We||Dt.receiveShadow!==z.receiveShadow)&&(Dt.receiveShadow=z.receiveShadow,ge.setValue(C,"receiveShadow",z.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Dn.envMap.value=Ct,Dn.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(Dn.envMapIntensity.value=k.environmentIntensity),We&&(ge.setValue(C,"toneMappingExposure",M.toneMappingExposure),Dt.needsLights&&eu(Dn,Br),at&&W.fog===!0&&ft.refreshFogUniforms(Dn,at),ft.refreshMaterialUniforms(Dn,W,nt,F,f.state.transmissionRenderTarget[E.id]),yr.upload(C,ll(Dt),Dn,T)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(yr.upload(C,ll(Dt),Dn,T),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ge.setValue(C,"center",z.center),ge.setValue(C,"modelViewMatrix",z.modelViewMatrix),ge.setValue(C,"normalMatrix",z.normalMatrix),ge.setValue(C,"modelMatrix",z.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Je=W.uniformsGroups;for(let Vr=0,iu=Je.length;Vr<iu;Vr++){const hl=Je[Vr];N.update(hl,nn),N.bind(hl,nn)}}return nn}function eu(E,k){E.ambientLightColor.needsUpdate=k,E.lightProbe.needsUpdate=k,E.directionalLights.needsUpdate=k,E.directionalLightShadows.needsUpdate=k,E.pointLights.needsUpdate=k,E.pointLightShadows.needsUpdate=k,E.spotLights.needsUpdate=k,E.spotLightShadows.needsUpdate=k,E.rectAreaLights.needsUpdate=k,E.hemisphereLights.needsUpdate=k}function nu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,k,H){xt.get(E.texture).__webglTexture=k,xt.get(E.depthTexture).__webglTexture=H;const W=xt.get(E);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=H===void 0,W.__autoAllocateDepthBuffer||lt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,k){const H=xt.get(E);H.__webglFramebuffer=k,H.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(E,k=0,H=0){A=E,R=k,w=H;let W=!0,z=null,at=!1,_t=!1;if(E){const Ct=xt.get(E);if(Ct.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(C.FRAMEBUFFER,null),W=!1;else if(Ct.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(Ct.__hasExternalTextures)T.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pt=E.depthTexture;if(Ct.__boundDepthTexture!==Pt){if(Pt!==null&&xt.has(Pt)&&(E.width!==Pt.image.width||E.height!==Pt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(_t=!0);const kt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(kt[k])?z=kt[k][H]:z=kt[k],at=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?z=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(kt)?z=kt[H]:z=kt,_.copy(E.viewport),S.copy(E.scissor),V=E.scissorTest}else _.copy(pt).multiplyScalar(nt).floor(),S.copy(mt).multiplyScalar(nt).floor(),V=Gt;if(ut.bindFramebuffer(C.FRAMEBUFFER,z)&&W&&ut.drawBuffers(E,z),ut.viewport(_),ut.scissor(S),ut.setScissorTest(V),at){const Ct=xt.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,H)}else if(_t){const Ct=xt.get(E.texture),Ft=k||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,Ct.__webglTexture,H||0,Ft)}I=-1},this.readRenderTargetPixels=function(E,k,H,W,z,at,_t){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){ut.bindFramebuffer(C.FRAMEBUFFER,Tt);try{const Ct=E.texture,Ft=Ct.format,kt=Ct.type;if(!st.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!st.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=E.width-W&&H>=0&&H<=E.height-z&&C.readPixels(k,H,W,z,Vt.convert(Ft),Vt.convert(kt),at)}finally{const Ct=A!==null?xt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(E,k,H,W,z,at,_t){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&_t!==void 0&&(Tt=Tt[_t]),Tt){const Ct=E.texture,Ft=Ct.format,kt=Ct.type;if(!st.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!st.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=E.width-W&&H>=0&&H<=E.height-z){ut.bindFramebuffer(C.FRAMEBUFFER,Tt);const Pt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Pt),C.bufferData(C.PIXEL_PACK_BUFFER,at.byteLength,C.STREAM_READ),C.readPixels(k,H,W,z,Vt.convert(Ft),Vt.convert(kt),0);const ne=A!==null?xt.get(A).__webglFramebuffer:null;ut.bindFramebuffer(C.FRAMEBUFFER,ne);const le=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await Vu(C,le,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Pt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,at),C.deleteBuffer(Pt),C.deleteSync(le),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,k=null,H=0){E.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,E=arguments[1]);const W=Math.pow(2,-H),z=Math.floor(E.image.width*W),at=Math.floor(E.image.height*W),_t=k!==null?k.x:0,Tt=k!==null?k.y:0;T.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,H,0,0,_t,Tt,z,at),ut.unbindTexture()},this.copyTextureToTexture=function(E,k,H=null,W=null,z=0){E.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1],k=arguments[2],z=arguments[3]||0,H=null);let at,_t,Tt,Ct,Ft,kt;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,Tt=H.min.x,Ct=H.min.y):(at=E.image.width,_t=E.image.height,Tt=0,Ct=0),W!==null?(Ft=W.x,kt=W.y):(Ft=0,kt=0);const Pt=Vt.convert(k.format),ne=Vt.convert(k.type);T.setTexture2D(k,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const le=C.getParameter(C.UNPACK_ROW_LENGTH),de=C.getParameter(C.UNPACK_IMAGE_HEIGHT),He=C.getParameter(C.UNPACK_SKIP_PIXELS),te=C.getParameter(C.UNPACK_SKIP_ROWS),Dt=C.getParameter(C.UNPACK_SKIP_IMAGES),Re=E.isCompressedTexture?E.mipmaps[z]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Re.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Re.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Tt),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ct),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,z,Ft,kt,at,_t,Pt,ne,Re.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,z,Ft,kt,Re.width,Re.height,Pt,Re.data):C.texSubImage2D(C.TEXTURE_2D,z,Ft,kt,at,_t,Pt,ne,Re),C.pixelStorei(C.UNPACK_ROW_LENGTH,le),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,de),C.pixelStorei(C.UNPACK_SKIP_PIXELS,He),C.pixelStorei(C.UNPACK_SKIP_ROWS,te),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Dt),z===0&&k.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),ut.unbindTexture()},this.copyTextureToTexture3D=function(E,k,H=null,W=null,z=0){E.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,W=arguments[1]||null,E=arguments[2],k=arguments[3],z=arguments[4]||0);let at,_t,Tt,Ct,Ft,kt,Pt,ne,le;const de=E.isCompressedTexture?E.mipmaps[z]:E.image;H!==null?(at=H.max.x-H.min.x,_t=H.max.y-H.min.y,Tt=H.max.z-H.min.z,Ct=H.min.x,Ft=H.min.y,kt=H.min.z):(at=de.width,_t=de.height,Tt=de.depth,Ct=0,Ft=0,kt=0),W!==null?(Pt=W.x,ne=W.y,le=W.z):(Pt=0,ne=0,le=0);const He=Vt.convert(k.format),te=Vt.convert(k.type);let Dt;if(k.isData3DTexture)T.setTexture3D(k,0),Dt=C.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)T.setTexture2DArray(k,0),Dt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,k.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,k.unpackAlignment);const Re=C.getParameter(C.UNPACK_ROW_LENGTH),ee=C.getParameter(C.UNPACK_IMAGE_HEIGHT),nn=C.getParameter(C.UNPACK_SKIP_PIXELS),mi=C.getParameter(C.UNPACK_SKIP_ROWS),We=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,de.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,de.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Ct),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ft),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(Dt,z,Pt,ne,le,at,_t,Tt,He,te,de.data):k.isCompressedArrayTexture?C.compressedTexSubImage3D(Dt,z,Pt,ne,le,at,_t,Tt,He,de.data):C.texSubImage3D(Dt,z,Pt,ne,le,at,_t,Tt,He,te,de),C.pixelStorei(C.UNPACK_ROW_LENGTH,Re),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ee),C.pixelStorei(C.UNPACK_SKIP_PIXELS,nn),C.pixelStorei(C.UNPACK_SKIP_ROWS,mi),C.pixelStorei(C.UNPACK_SKIP_IMAGES,We),z===0&&k.generateMipmaps&&C.generateMipmap(Dt),ut.unbindTexture()},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),ut.unbindTexture()},this.resetState=function(){R=0,w=0,A=null,ut.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===zo?"display-p3":"srgb",e.unpackColorSpace=Qt.workingColorSpace===Ir?"display-p3":"srgb"}}class Mh{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new zt(t),this.near=e,this.far=n}clone(){return new Mh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Q0 extends me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new dn,this.environmentIntensity=1,this.environmentRotation=new dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class tg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=vo,this.updateRanges=[],this.version=0,this.uuid=Pn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Pn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ke=new L;class Pr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=_n(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=se(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=_n(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=_n(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=_n(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=_n(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=se(e,this.array),n=se(n,this.array),s=se(s,this.array),r=se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Ze(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class eg extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Pi;const hs=new L,Li=new L,Di=new L,Ii=new et,us=new et,bh=new ie,nr=new L,fs=new L,ir=new L,sc=new et,xa=new et,rc=new et;class Xv extends me{constructor(t=new eg){if(super(),this.isSprite=!0,this.type="Sprite",Pi===void 0){Pi=new Ae;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tg(e,5);Pi.setIndex([0,1,2,0,2,3]),Pi.setAttribute("position",new Pr(n,3,0,!1)),Pi.setAttribute("uv",new Pr(n,2,3,!1))}this.geometry=Pi,this.material=t,this.center=new et(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Li.setFromMatrixScale(this.matrixWorld),bh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Di.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Li.multiplyScalar(-Di.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;sr(nr.set(-.5,-.5,0),Di,o,Li,s,r),sr(fs.set(.5,-.5,0),Di,o,Li,s,r),sr(ir.set(.5,.5,0),Di,o,Li,s,r),sc.set(0,0),xa.set(1,0),rc.set(1,1);let l=t.ray.intersectTriangle(nr,fs,ir,!1,hs);if(l===null&&(sr(fs.set(-.5,.5,0),Di,o,Li,s,r),xa.set(0,1),l=t.ray.intersectTriangle(nr,ir,fs,!1,hs),l===null))return;const a=t.ray.origin.distanceTo(hs);a<t.near||a>t.far||e.push({distance:a,point:hs.clone(),uv:en.getInterpolation(hs,nr,fs,ir,sc,xa,rc,new et),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function sr(i,t,e,n,s,r){Ii.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(us.x=r*Ii.x-s*Ii.y,us.y=s*Ii.x+r*Ii.y):us.copy(Ii),i.copy(t),i.x+=us.x,i.y+=us.y,i.applyMatrix4(bh)}class ng extends Fe{constructor(t=null,e=1,n=1,s,r,o,l,a,c=we,u=we,h,d){super(null,o,l,a,c,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ac extends Ze{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ui=new ie,oc=new ie,rr=[],lc=new di,ig=new ie,ds=new xe,ps=new is;class Yv extends xe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ig)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new di),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),lc.copy(t.boundingBox).applyMatrix4(Ui),this.boundingBox.union(lc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ui),ps.copy(t.boundingSphere).applyMatrix4(Ui),this.boundingSphere.union(ps)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let l=0;l<n.length;l++)n[l]=s[o+l]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ps.copy(this.boundingSphere),ps.applyMatrix4(n),t.ray.intersectsSphere(ps)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ui),oc.multiplyMatrices(n,Ui),ds.matrixWorld=oc,ds.raycast(t,rr);for(let o=0,l=rr.length;o<l;o++){const a=rr[o];a.instanceId=r,a.object=this,e.push(a)}rr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ng(new Float32Array(s*this.count),s,this.count,No,xn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const l=this.geometry.morphTargetsRelative?1:1-o,a=s*t;r[a]=l,r.set(n,a+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Sh extends Xn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const cc=new ie,xo=new ah,ar=new is,or=new L;class sg extends me{constructor(t=new Ae,e=new Sh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ar.copy(n.boundingSphere),ar.applyMatrix4(s),ar.radius+=r,t.ray.intersectsSphere(ar)===!1)return;cc.copy(s).invert(),xo.copy(t.ray).applyMatrix4(cc);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),m=Math.min(c.count,o.start+o.count);for(let p=d,v=m;p<v;p++){const f=c.getX(p);or.fromBufferAttribute(h,f),hc(or,f,a,s,t,e,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let p=d,v=m;p<v;p++)or.fromBufferAttribute(h,p),hc(or,p,a,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function hc(i,t,e,n,s,r,o){const l=xo.distanceSqToPoint(i);if(l<e){const a=new L;xo.closestPointToPoint(i,a),a.applyMatrix4(n);const c=s.ray.origin.distanceTo(a);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:a,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class wh extends Fe{constructor(t,e,n,s,r,o,l,a,c){super(t,e,n,s,r,o,l,a,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Mn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let l=0,a=r-1,c;for(;l<=a;)if(s=Math.floor(l+(a-l)/2),c=n[s]-o,c<0)l=s+1;else if(c>0)a=s-1;else{a=s;break}if(s=a,n[s]===o)return s/(r-1);const u=n[s],d=n[s+1]-u,m=(o-u)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),l=this.getPoint(r),a=e||(o.isVector2?new et:new L);return a.copy(l).sub(o).normalize(),a}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],l=new L,a=new ie;for(let m=0;m<=t;m++){const p=m/t;s[m]=this.getTangentAt(p,new L)}r[0]=new L,o[0]=new L;let c=Number.MAX_VALUE;const u=Math.abs(s[0].x),h=Math.abs(s[0].y),d=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),l.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],l),o[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),o[m]=o[m-1].clone(),l.crossVectors(s[m-1],s[m]),l.length()>Number.EPSILON){l.normalize();const p=Math.acos(Pe(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(a.makeRotationAxis(l,p))}o[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Pe(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(l.crossVectors(r[0],r[t]))>0&&(m=-m);for(let p=1;p<=t;p++)r[p].applyMatrix4(a.makeRotationAxis(s[p],m*p)),o[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wo extends Mn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,l=!1,a=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=l,this.aRotation=a}getPoint(t,e=new et){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const l=this.aStartAngle+t*r;let a=this.aX+this.xRadius*Math.cos(l),c=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=a-this.aX,m=c-this.aY;a=d*u-m*h+this.aX,c=d*h+m*u+this.aY}return n.set(a,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class rg extends Wo{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function qo(){let i=0,t=0,e=0,n=0;function s(r,o,l,a){i=r,t=l,e=-3*r+3*o-2*l-a,n=2*r-2*o+l+a}return{initCatmullRom:function(r,o,l,a,c){s(o,l,c*(l-r),c*(a-o))},initNonuniformCatmullRom:function(r,o,l,a,c,u,h){let d=(o-r)/c-(l-r)/(c+u)+(l-o)/u,m=(l-o)/u-(a-o)/(u+h)+(a-l)/h;d*=u,m*=u,s(o,l,d,m)},calc:function(r){const o=r*r,l=o*r;return i+t*r+e*o+n*l}}}const lr=new L,ya=new qo,Ma=new qo,ba=new qo;class ag extends Mn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let l=Math.floor(o),a=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/r)+1)*r:a===0&&l===r-1&&(l=r-2,a=1);let c,u;this.closed||l>0?c=s[(l-1)%r]:(lr.subVectors(s[0],s[1]).add(s[0]),c=lr);const h=s[l%r],d=s[(l+1)%r];if(this.closed||l+2<r?u=s[(l+2)%r]:(lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=lr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),m),v=Math.pow(h.distanceToSquared(d),m),f=Math.pow(d.distanceToSquared(u),m);v<1e-4&&(v=1),p<1e-4&&(p=v),f<1e-4&&(f=v),ya.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,f),Ma.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,f),ba.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,f)}else this.curveType==="catmullrom"&&(ya.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),Ma.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),ba.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(ya.calc(a),Ma.calc(a),ba.calc(a)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function uc(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,l=i*i,a=i*l;return(2*e-2*n+r+o)*a+(-3*e+3*n-2*r-o)*l+r*i+e}function og(i,t){const e=1-i;return e*e*t}function lg(i,t){return 2*(1-i)*i*t}function cg(i,t){return i*i*t}function ys(i,t,e,n){return og(i,t)+lg(i,e)+cg(i,n)}function hg(i,t){const e=1-i;return e*e*e*t}function ug(i,t){const e=1-i;return 3*e*e*i*t}function fg(i,t){return 3*(1-i)*i*i*t}function dg(i,t){return i*i*i*t}function Ms(i,t,e,n,s){return hg(i,t)+ug(i,e)+fg(i,n)+dg(i,s)}class Eh extends Mn{constructor(t=new et,e=new et,n=new et,s=new et){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ms(t,s.x,r.x,o.x,l.x),Ms(t,s.y,r.y,o.y,l.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class pg extends Mn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,l=this.v3;return n.set(Ms(t,s.x,r.x,o.x,l.x),Ms(t,s.y,r.y,o.y,l.y),Ms(t,s.z,r.z,o.z,l.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Th extends Mn{constructor(t=new et,e=new et){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new et){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new et){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class mg extends Mn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ah extends Mn{constructor(t=new et,e=new et,n=new et){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new et){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ys(t,s.x,r.x,o.x),ys(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gg extends Mn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ys(t,s.x,r.x,o.x),ys(t,s.y,r.y,o.y),ys(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ch extends Mn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new et){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),l=r-o,a=s[o===0?o:o-1],c=s[o],u=s[o>s.length-2?s.length-1:o+1],h=s[o>s.length-3?s.length-1:o+2];return n.set(uc(l,a.x,c.x,u.x,h.x),uc(l,a.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new et().fromArray(s))}return this}}var yo=Object.freeze({__proto__:null,ArcCurve:rg,CatmullRomCurve3:ag,CubicBezierCurve:Eh,CubicBezierCurve3:pg,EllipseCurve:Wo,LineCurve:Th,LineCurve3:mg,QuadraticBezierCurve:Ah,QuadraticBezierCurve3:gg,SplineCurve:Ch});class vg extends Mn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new yo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,l=this.curves[r],a=l.getLength(),c=a===0?0:1-o/a;return l.getPointAt(c,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],l=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,a=o.getPoints(l);for(let c=0;c<a.length;c++){const u=a[c];n&&n.equals(u)||(e.push(u),n=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new yo[s.type]().fromJSON(s))}return this}}class Mo extends vg{constructor(t){super(),this.type="Path",this.currentPoint=new et,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Th(this.currentPoint.clone(),new et(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Ah(this.currentPoint.clone(),new et(t,e),new et(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const l=new Eh(this.currentPoint.clone(),new et(t,e),new et(n,s),new et(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Ch(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const l=this.currentPoint.x,a=this.currentPoint.y;return this.absarc(t+l,e+a,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,l,a){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(t+c,e+u,n,s,r,o,l,a),this}absellipse(t,e,n,s,r,o,l,a){const c=new Wo(t,e,n,s,r,o,l,a);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $o extends Ae{constructor(t=[new et(0,-.5),new et(.5,0),new et(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Pe(s,0,Math.PI*2);const r=[],o=[],l=[],a=[],c=[],u=1/e,h=new L,d=new et,m=new L,p=new L,v=new L;let f=0,g=0;for(let x=0;x<=t.length-1;x++)switch(x){case 0:f=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,m.x=g*1,m.y=-f,m.z=g*0,v.copy(m),m.normalize(),a.push(m.x,m.y,m.z);break;case t.length-1:a.push(v.x,v.y,v.z);break;default:f=t[x+1].x-t[x].x,g=t[x+1].y-t[x].y,m.x=g*1,m.y=-f,m.z=g*0,p.copy(m),m.x+=v.x,m.y+=v.y,m.z+=v.z,m.normalize(),a.push(m.x,m.y,m.z),v.copy(p)}for(let x=0;x<=e;x++){const M=n+x*u*s,y=Math.sin(M),R=Math.cos(M);for(let w=0;w<=t.length-1;w++){h.x=t[w].x*y,h.y=t[w].y,h.z=t[w].x*R,o.push(h.x,h.y,h.z),d.x=x/e,d.y=w/(t.length-1),l.push(d.x,d.y);const A=a[3*w+0]*y,I=a[3*w+1],D=a[3*w+0]*R;c.push(A,I,D)}}for(let x=0;x<e;x++)for(let M=0;M<t.length-1;M++){const y=M+x*t.length,R=y,w=y+t.length,A=y+t.length+1,I=y+1;r.push(R,w,I),r.push(A,I,w)}this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("uv",new jt(l,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.points,t.segments,t.phiStart,t.phiLength)}}class Rh extends $o{constructor(t=1,e=1,n=4,s=8){const r=new Mo;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Rh(t.radius,t.length,t.capSegments,t.radialSegments)}}class Xo extends Ae{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],l=[],a=[],c=new L,u=new et;o.push(0,0,0),l.push(0,0,1),a.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){const m=n+h/e*s;c.x=t*Math.cos(m),c.y=t*Math.sin(m),o.push(c.x,c.y,c.z),l.push(0,0,1),u.x=(o[d]/t+1)/2,u.y=(o[d+1]/t+1)/2,a.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new jt(o,3)),this.setAttribute("normal",new jt(l,3)),this.setAttribute("uv",new jt(a,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xo(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Yo extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:l,thetaLength:a};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],d=[],m=[];let p=0;const v=[],f=n/2;let g=0;x(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new jt(h,3)),this.setAttribute("normal",new jt(d,3)),this.setAttribute("uv",new jt(m,2));function x(){const y=new L,R=new L;let w=0;const A=(e-t)/n;for(let I=0;I<=r;I++){const D=[],_=I/r,S=_*(e-t)+t;for(let V=0;V<=s;V++){const O=V/s,U=O*a+l,B=Math.sin(U),F=Math.cos(U);R.x=S*B,R.y=-_*n+f,R.z=S*F,h.push(R.x,R.y,R.z),y.set(B,A,F).normalize(),d.push(y.x,y.y,y.z),m.push(O,1-_),D.push(p++)}v.push(D)}for(let I=0;I<s;I++)for(let D=0;D<r;D++){const _=v[D][I],S=v[D+1][I],V=v[D+1][I+1],O=v[D][I+1];t>0&&(u.push(_,S,O),w+=3),e>0&&(u.push(S,V,O),w+=3)}c.addGroup(g,w,0),g+=w}function M(y){const R=p,w=new et,A=new L;let I=0;const D=y===!0?t:e,_=y===!0?1:-1;for(let V=1;V<=s;V++)h.push(0,f*_,0),d.push(0,_,0),m.push(.5,.5),p++;const S=p;for(let V=0;V<=s;V++){const U=V/s*a+l,B=Math.cos(U),F=Math.sin(U);A.x=D*F,A.y=f*_,A.z=D*B,h.push(A.x,A.y,A.z),d.push(0,_,0),w.x=B*.5+.5,w.y=F*.5*_+.5,m.push(w.x,w.y),p++}for(let V=0;V<s;V++){const O=R+V,U=S+V;y===!0?u.push(U,U+1,O):u.push(U+1,U,O),I+=3}c.addGroup(g,I,y===!0?1:2),g+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yo(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ko extends Yo{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,l=Math.PI*2){super(0,t,e,n,s,r,o,l),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:l}}static fromJSON(t){return new Ko(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Zo extends Ae{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];l(s),c(n),u(),this.setAttribute("position",new jt(r,3)),this.setAttribute("normal",new jt(r.slice(),3)),this.setAttribute("uv",new jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function l(x){const M=new L,y=new L,R=new L;for(let w=0;w<e.length;w+=3)m(e[w+0],M),m(e[w+1],y),m(e[w+2],R),a(M,y,R,x)}function a(x,M,y,R){const w=R+1,A=[];for(let I=0;I<=w;I++){A[I]=[];const D=x.clone().lerp(y,I/w),_=M.clone().lerp(y,I/w),S=w-I;for(let V=0;V<=S;V++)V===0&&I===w?A[I][V]=D:A[I][V]=D.clone().lerp(_,V/S)}for(let I=0;I<w;I++)for(let D=0;D<2*(w-I)-1;D++){const _=Math.floor(D/2);D%2===0?(d(A[I][_+1]),d(A[I+1][_]),d(A[I][_])):(d(A[I][_+1]),d(A[I+1][_+1]),d(A[I+1][_]))}}function c(x){const M=new L;for(let y=0;y<r.length;y+=3)M.x=r[y+0],M.y=r[y+1],M.z=r[y+2],M.normalize().multiplyScalar(x),r[y+0]=M.x,r[y+1]=M.y,r[y+2]=M.z}function u(){const x=new L;for(let M=0;M<r.length;M+=3){x.x=r[M+0],x.y=r[M+1],x.z=r[M+2];const y=f(x)/2/Math.PI+.5,R=g(x)/Math.PI+.5;o.push(y,1-R)}p(),h()}function h(){for(let x=0;x<o.length;x+=6){const M=o[x+0],y=o[x+2],R=o[x+4],w=Math.max(M,y,R),A=Math.min(M,y,R);w>.9&&A<.1&&(M<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),R<.2&&(o[x+4]+=1))}}function d(x){r.push(x.x,x.y,x.z)}function m(x,M){const y=x*3;M.x=t[y+0],M.y=t[y+1],M.z=t[y+2]}function p(){const x=new L,M=new L,y=new L,R=new L,w=new et,A=new et,I=new et;for(let D=0,_=0;D<r.length;D+=9,_+=6){x.set(r[D+0],r[D+1],r[D+2]),M.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),w.set(o[_+0],o[_+1]),A.set(o[_+2],o[_+3]),I.set(o[_+4],o[_+5]),R.copy(x).add(M).add(y).divideScalar(3);const S=f(R);v(w,_+0,x,S),v(A,_+2,M,S),v(I,_+4,y,S)}}function v(x,M,y,R){R<0&&x.x===1&&(o[M]=x.x-1),y.x===0&&y.z===0&&(o[M]=R/2/Math.PI+.5)}function f(x){return Math.atan2(x.z,-x.x)}function g(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zo(t.vertices,t.indices,t.radius,t.details)}}class Ph extends Mo{constructor(t){super(t),this.uuid=Pn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Mo().fromJSON(s))}return this}}const _g={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Lh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let l,a,c,u,h,d,m;if(n&&(r=Sg(i,t,r,e)),i.length>80*e){l=c=i[0],a=u=i[1];for(let p=e;p<s;p+=e)h=i[p],d=i[p+1],h<l&&(l=h),d<a&&(a=d),h>c&&(c=h),d>u&&(u=d);m=Math.max(c-l,u-a),m=m!==0?32767/m:0}return Ts(r,o,e,l,a,m,0),o}};function Lh(i,t,e,n,s){let r,o;if(s===Ug(i,t,e,n)>0)for(r=t;r<e;r+=n)o=fc(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=fc(r,i[r],i[r+1],o);return o&&Nr(o,o.next)&&(Cs(o),o=o.next),o}function fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Nr(e,e.next)||fe(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ts(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Cg(i,n,s,r);let l=i,a,c;for(;i.prev!==i.next;){if(a=i.prev,c=i.next,r?yg(i,n,s,r):xg(i)){t.push(a.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Cs(i),i=c.next,l=c.next;continue}if(i=c,i===l){o?o===1?(i=Mg(fi(i),t,e),Ts(i,t,e,n,s,r,2)):o===2&&bg(i,t,e,n,s,r):Ts(fi(i),t,e,n,s,r,1);break}}}function xg(i){const t=i.prev,e=i,n=i.next;if(fe(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,l=t.y,a=e.y,c=n.y,u=s<r?s<o?s:o:r<o?r:o,h=l<a?l<c?l:c:a<c?a:c,d=s>r?s>o?s:o:r>o?r:o,m=l>a?l>c?l:c:a>c?a:c;let p=n.next;for(;p!==t;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=m&&zi(s,l,r,a,o,c,p.x,p.y)&&fe(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function yg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(fe(s,r,o)>=0)return!1;const l=s.x,a=r.x,c=o.x,u=s.y,h=r.y,d=o.y,m=l<a?l<c?l:c:a<c?a:c,p=u<h?u<d?u:d:h<d?h:d,v=l>a?l>c?l:c:a>c?a:c,f=u>h?u>d?u:d:h>d?h:d,g=bo(m,p,t,e,n),x=bo(v,f,t,e,n);let M=i.prevZ,y=i.nextZ;for(;M&&M.z>=g&&y&&y.z<=x;){if(M.x>=m&&M.x<=v&&M.y>=p&&M.y<=f&&M!==s&&M!==o&&zi(l,u,a,h,c,d,M.x,M.y)&&fe(M.prev,M,M.next)>=0||(M=M.prevZ,y.x>=m&&y.x<=v&&y.y>=p&&y.y<=f&&y!==s&&y!==o&&zi(l,u,a,h,c,d,y.x,y.y)&&fe(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;M&&M.z>=g;){if(M.x>=m&&M.x<=v&&M.y>=p&&M.y<=f&&M!==s&&M!==o&&zi(l,u,a,h,c,d,M.x,M.y)&&fe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;y&&y.z<=x;){if(y.x>=m&&y.x<=v&&y.y>=p&&y.y<=f&&y!==s&&y!==o&&zi(l,u,a,h,c,d,y.x,y.y)&&fe(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Mg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Nr(s,r)&&Dh(s,n,n.next,r)&&As(s,r)&&As(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return fi(n)}function bg(i,t,e,n,s,r){let o=i;do{let l=o.next.next;for(;l!==o.prev;){if(o.i!==l.i&&Lg(o,l)){let a=Ih(o,l);o=fi(o,o.next),a=fi(a,a.next),Ts(o,t,e,n,s,r,0),Ts(a,t,e,n,s,r,0);return}l=l.next}o=o.next}while(o!==i)}function Sg(i,t,e,n){const s=[];let r,o,l,a,c;for(r=0,o=t.length;r<o;r++)l=t[r]*n,a=r<o-1?t[r+1]*n:i.length,c=Lh(i,l,a,n,!1),c===c.next&&(c.steiner=!0),s.push(Pg(c));for(s.sort(wg),r=0;r<s.length;r++)e=Eg(s[r],e);return e}function wg(i,t){return i.x-t.x}function Eg(i,t){const e=Tg(i,t);if(!e)return t;const n=Ih(e,i);return fi(n,n.next),fi(e,e.next)}function Tg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const l=s,a=s.x,c=s.y;let u=1/0,h;e=s;do r>=e.x&&e.x>=a&&r!==e.x&&zi(o<c?r:n,o,a,c,o<c?n:r,o,e.x,e.y)&&(h=Math.abs(o-e.y)/(r-e.x),As(e,i)&&(h<u||h===u&&(e.x>s.x||e.x===s.x&&Ag(s,e)))&&(s=e,u=h)),e=e.next;while(e!==l);return s}function Ag(i,t){return fe(i.prev,i,t.prev)<0&&fe(t.next,i,i.next)<0}function Cg(i,t,e,n){let s=i;do s.z===0&&(s.z=bo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Rg(s)}function Rg(i){let t,e,n,s,r,o,l,a,c=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,l=0,t=0;t<c&&(l++,n=n.nextZ,!!n);t++);for(a=c;l>0||a>0&&n;)l!==0&&(a===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,l--):(s=n,n=n.nextZ,a--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(o>1);return i}function bo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Pg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function zi(i,t,e,n,s,r,o,l){return(s-o)*(t-l)>=(i-o)*(r-l)&&(i-o)*(n-l)>=(e-o)*(t-l)&&(e-o)*(r-l)>=(s-o)*(n-l)}function Lg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Dg(i,t)&&(As(i,t)&&As(t,i)&&Ig(i,t)&&(fe(i.prev,i,t.prev)||fe(i,t.prev,t))||Nr(i,t)&&fe(i.prev,i,i.next)>0&&fe(t.prev,t,t.next)>0)}function fe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Nr(i,t){return i.x===t.x&&i.y===t.y}function Dh(i,t,e,n){const s=hr(fe(i,t,e)),r=hr(fe(i,t,n)),o=hr(fe(e,n,i)),l=hr(fe(e,n,t));return!!(s!==r&&o!==l||s===0&&cr(i,e,t)||r===0&&cr(i,n,t)||o===0&&cr(e,i,n)||l===0&&cr(e,t,n))}function cr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function hr(i){return i>0?1:i<0?-1:0}function Dg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Dh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function As(i,t){return fe(i.prev,i,i.next)<0?fe(i,t,i.next)>=0&&fe(i,i.prev,t)>=0:fe(i,t,i.prev)<0||fe(i,i.next,t)<0}function Ig(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ih(i,t){const e=new So(i.i,i.x,i.y),n=new So(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function fc(i,t,e,n){const s=new So(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function So(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ug(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Hn{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Hn.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];dc(t),pc(n,t);let o=t.length;e.forEach(dc);for(let a=0;a<e.length;a++)s.push(o),o+=e[a].length,pc(n,e[a]);const l=_g.triangulate(n,s);for(let a=0;a<l.length;a+=3)r.push(l.slice(a,a+3));return r}}function dc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function pc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Uh extends Ae{constructor(t=new Ph([new et(.5,.5),new et(-.5,.5),new et(-.5,-.5),new et(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let l=0,a=t.length;l<a;l++){const c=t[l];o(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function o(l){const a=[],c=e.curveSegments!==void 0?e.curveSegments:12,u=e.steps!==void 0?e.steps:1,h=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,f=e.bevelSegments!==void 0?e.bevelSegments:3;const g=e.extrudePath,x=e.UVGenerator!==void 0?e.UVGenerator:Ng;let M,y=!1,R,w,A,I;g&&(M=g.getSpacedPoints(u),y=!0,d=!1,R=g.computeFrenetFrames(u,!1),w=new L,A=new L,I=new L),d||(f=0,m=0,p=0,v=0);const D=l.extractPoints(c);let _=D.shape;const S=D.holes;if(!Hn.isClockWise(_)){_=_.reverse();for(let j=0,C=S.length;j<C;j++){const ht=S[j];Hn.isClockWise(ht)&&(S[j]=ht.reverse())}}const O=Hn.triangulateShape(_,S),U=_;for(let j=0,C=S.length;j<C;j++){const ht=S[j];_=_.concat(ht)}function B(j,C,ht){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(C,ht)}const F=_.length,nt=O.length;function q(j,C,ht){let lt,st,ut;const Lt=j.x-C.x,xt=j.y-C.y,T=ht.x-j.x,b=ht.y-j.y,G=Lt*Lt+xt*xt,Y=Lt*b-xt*T;if(Math.abs(Y)>Number.EPSILON){const J=Math.sqrt(G),K=Math.sqrt(T*T+b*b),At=C.x-xt/J,ft=C.y+Lt/J,bt=ht.x-b/K,Yt=ht.y+T/K,rt=((bt-At)*b-(Yt-ft)*T)/(Lt*b-xt*T);lt=At+Lt*rt-j.x,st=ft+xt*rt-j.y;const St=lt*lt+st*st;if(St<=2)return new et(lt,st);ut=Math.sqrt(St/2)}else{let J=!1;Lt>Number.EPSILON?T>Number.EPSILON&&(J=!0):Lt<-Number.EPSILON?T<-Number.EPSILON&&(J=!0):Math.sign(xt)===Math.sign(b)&&(J=!0),J?(lt=-xt,st=Lt,ut=Math.sqrt(G)):(lt=Lt,st=xt,ut=Math.sqrt(G/2))}return new et(lt/ut,st/ut)}const ot=[];for(let j=0,C=U.length,ht=C-1,lt=j+1;j<C;j++,ht++,lt++)ht===C&&(ht=0),lt===C&&(lt=0),ot[j]=q(U[j],U[ht],U[lt]);const pt=[];let mt,Gt=ot.concat();for(let j=0,C=S.length;j<C;j++){const ht=S[j];mt=[];for(let lt=0,st=ht.length,ut=st-1,Lt=lt+1;lt<st;lt++,ut++,Lt++)ut===st&&(ut=0),Lt===st&&(Lt=0),mt[lt]=q(ht[lt],ht[ut],ht[Lt]);pt.push(mt),Gt=Gt.concat(mt)}for(let j=0;j<f;j++){const C=j/f,ht=m*Math.cos(C*Math.PI/2),lt=p*Math.sin(C*Math.PI/2)+v;for(let st=0,ut=U.length;st<ut;st++){const Lt=B(U[st],ot[st],lt);ct(Lt.x,Lt.y,-ht)}for(let st=0,ut=S.length;st<ut;st++){const Lt=S[st];mt=pt[st];for(let xt=0,T=Lt.length;xt<T;xt++){const b=B(Lt[xt],mt[xt],lt);ct(b.x,b.y,-ht)}}}const qt=p+v;for(let j=0;j<F;j++){const C=d?B(_[j],Gt[j],qt):_[j];y?(A.copy(R.normals[0]).multiplyScalar(C.x),w.copy(R.binormals[0]).multiplyScalar(C.y),I.copy(M[0]).add(A).add(w),ct(I.x,I.y,I.z)):ct(C.x,C.y,0)}for(let j=1;j<=u;j++)for(let C=0;C<F;C++){const ht=d?B(_[C],Gt[C],qt):_[C];y?(A.copy(R.normals[j]).multiplyScalar(ht.x),w.copy(R.binormals[j]).multiplyScalar(ht.y),I.copy(M[j]).add(A).add(w),ct(I.x,I.y,I.z)):ct(ht.x,ht.y,h/u*j)}for(let j=f-1;j>=0;j--){const C=j/f,ht=m*Math.cos(C*Math.PI/2),lt=p*Math.sin(C*Math.PI/2)+v;for(let st=0,ut=U.length;st<ut;st++){const Lt=B(U[st],ot[st],lt);ct(Lt.x,Lt.y,h+ht)}for(let st=0,ut=S.length;st<ut;st++){const Lt=S[st];mt=pt[st];for(let xt=0,T=Lt.length;xt<T;xt++){const b=B(Lt[xt],mt[xt],lt);y?ct(b.x,b.y+M[u-1].y,M[u-1].x+ht):ct(b.x,b.y,h+ht)}}}X(),tt();function X(){const j=s.length/3;if(d){let C=0,ht=F*C;for(let lt=0;lt<nt;lt++){const st=O[lt];Ut(st[2]+ht,st[1]+ht,st[0]+ht)}C=u+f*2,ht=F*C;for(let lt=0;lt<nt;lt++){const st=O[lt];Ut(st[0]+ht,st[1]+ht,st[2]+ht)}}else{for(let C=0;C<nt;C++){const ht=O[C];Ut(ht[2],ht[1],ht[0])}for(let C=0;C<nt;C++){const ht=O[C];Ut(ht[0]+F*u,ht[1]+F*u,ht[2]+F*u)}}n.addGroup(j,s.length/3-j,0)}function tt(){const j=s.length/3;let C=0;gt(U,C),C+=U.length;for(let ht=0,lt=S.length;ht<lt;ht++){const st=S[ht];gt(st,C),C+=st.length}n.addGroup(j,s.length/3-j,1)}function gt(j,C){let ht=j.length;for(;--ht>=0;){const lt=ht;let st=ht-1;st<0&&(st=j.length-1);for(let ut=0,Lt=u+f*2;ut<Lt;ut++){const xt=F*ut,T=F*(ut+1),b=C+lt+xt,G=C+st+xt,Y=C+st+T,J=C+lt+T;Nt(b,G,Y,J)}}}function ct(j,C,ht){a.push(j),a.push(C),a.push(ht)}function Ut(j,C,ht){it(j),it(C),it(ht);const lt=s.length/3,st=x.generateTopUV(n,s,lt-3,lt-2,lt-1);wt(st[0]),wt(st[1]),wt(st[2])}function Nt(j,C,ht,lt){it(j),it(C),it(lt),it(C),it(ht),it(lt);const st=s.length/3,ut=x.generateSideWallUV(n,s,st-6,st-3,st-2,st-1);wt(ut[0]),wt(ut[1]),wt(ut[3]),wt(ut[1]),wt(ut[2]),wt(ut[3])}function it(j){s.push(a[j*3+0]),s.push(a[j*3+1]),s.push(a[j*3+2])}function wt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Fg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const l=e[t.shapes[r]];n.push(l)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new yo[s.type]().fromJSON(s)),new Uh(n,t.options)}}const Ng={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],l=t[n*3],a=t[n*3+1],c=t[s*3],u=t[s*3+1];return[new et(r,o),new et(l,a),new et(c,u)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],l=t[e*3+1],a=t[e*3+2],c=t[n*3],u=t[n*3+1],h=t[n*3+2],d=t[s*3],m=t[s*3+1],p=t[s*3+2],v=t[r*3],f=t[r*3+1],g=t[r*3+2];return Math.abs(l-u)<Math.abs(o-c)?[new et(o,1-a),new et(c,1-h),new et(d,1-p),new et(v,1-g)]:[new et(l,1-a),new et(u,1-h),new et(m,1-p),new et(f,1-g)]}};function Fg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class jo extends Zo{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new jo(t.radius,t.detail)}}class Nh extends Ae{constructor(t=new Ph([new et(0,.5),new et(-.5,-.5),new et(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};const n=[],s=[],r=[],o=[];let l=0,a=0;if(Array.isArray(t)===!1)c(t);else for(let u=0;u<t.length;u++)c(t[u]),this.addGroup(l,a,u),l+=a,a=0;this.setIndex(n),this.setAttribute("position",new jt(s,3)),this.setAttribute("normal",new jt(r,3)),this.setAttribute("uv",new jt(o,2));function c(u){const h=s.length/3,d=u.extractPoints(e);let m=d.shape;const p=d.holes;Hn.isClockWise(m)===!1&&(m=m.reverse());for(let f=0,g=p.length;f<g;f++){const x=p[f];Hn.isClockWise(x)===!0&&(p[f]=x.reverse())}const v=Hn.triangulateShape(m,p);for(let f=0,g=p.length;f<g;f++){const x=p[f];m=m.concat(x)}for(let f=0,g=m.length;f<g;f++){const x=m[f];s.push(x.x,x.y,0),r.push(0,0,1),o.push(x.x,x.y)}for(let f=0,g=v.length;f<g;f++){const x=v[f],M=x[0]+h,y=x[1]+h,R=x[2]+h;n.push(M,y,R),a+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes;return kg(e,t)}static fromJSON(t,e){const n=[];for(let s=0,r=t.shapes.length;s<r;s++){const o=e[t.shapes[s]];n.push(o)}return new Nh(n,t.curveSegments)}}function kg(i,t){if(t.shapes=[],Array.isArray(i))for(let e=0,n=i.length;e<n;e++){const s=i[e];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t}class Fh extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const a=Math.min(o+l,Math.PI);let c=0;const u=[],h=new L,d=new L,m=[],p=[],v=[],f=[];for(let g=0;g<=n;g++){const x=[],M=g/n;let y=0;g===0&&o===0?y=.5/e:g===n&&a===Math.PI&&(y=-.5/e);for(let R=0;R<=e;R++){const w=R/e;h.x=-t*Math.cos(s+w*r)*Math.sin(o+M*l),h.y=t*Math.cos(o+M*l),h.z=t*Math.sin(s+w*r)*Math.sin(o+M*l),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),f.push(w+y,1-M),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<e;x++){const M=u[g][x+1],y=u[g][x],R=u[g+1][x],w=u[g+1][x+1];(g!==0||o>0)&&m.push(M,y,w),(g!==n-1||a<Math.PI)&&m.push(y,R,w)}this.setIndex(m),this.setAttribute("position",new jt(p,3)),this.setAttribute("normal",new jt(v,3)),this.setAttribute("uv",new jt(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class kh extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],l=[],a=[],c=[],u=new L,h=new L,d=new L;for(let m=0;m<=n;m++)for(let p=0;p<=s;p++){const v=p/s*r,f=m/n*Math.PI*2;h.x=(t+e*Math.cos(f))*Math.cos(v),h.y=(t+e*Math.cos(f))*Math.sin(v),h.z=e*Math.sin(f),l.push(h.x,h.y,h.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),d.subVectors(h,u).normalize(),a.push(d.x,d.y,d.z),c.push(p/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let p=1;p<=s;p++){const v=(s+1)*m+p-1,f=(s+1)*(m-1)+p-1,g=(s+1)*(m-1)+p,x=(s+1)*m+p;o.push(v,f,x),o.push(f,g,x)}this.setIndex(o),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(a,3)),this.setAttribute("uv",new jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kh(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Og extends Ne{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kv extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class _s extends Xn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bo,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new dn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ds extends me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Bg extends Ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Sa=new ie,mc=new L,gc=new L;class Jo{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;mc.setFromMatrixPosition(t.matrixWorld),e.position.copy(mc),gc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gc),e.updateMatrixWorld(),Sa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class zg extends Jo{constructor(){super(new Ve(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Cr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class Vg extends Ds{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new zg}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const vc=new ie,ms=new L,wa=new L;class Gg extends Jo{constructor(){super(new Ve(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new et(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ms.setFromMatrixPosition(t.matrixWorld),n.position.copy(ms),wa.copy(n.position),wa.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(wa),n.updateMatrixWorld(),s.makeTranslation(-ms.x,-ms.y,-ms.z),vc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vc)}}class wo extends Ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Gg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Hg extends Jo{constructor(){super(new Go(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wg extends Ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(me.DEFAULT_UP),this.updateMatrix(),this.target=new me,this.shadow=new Hg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qg extends Ds{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class $g{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=_c(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=_c();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function _c(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);const Oh={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class pi{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Xg=new Go(-1,1,1,-1,0,1);class Yg extends Ae{constructor(){super(),this.setAttribute("position",new jt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new jt([0,2,0,0,2,0],2))}}const Kg=new Yg;class Fr{constructor(t){this._mesh=new xe(Kg,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Xg)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Bh extends pi{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Ne?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ji.clone(t.uniforms),this.material=new Ne({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Fr(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class xc extends pi{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Zg extends pi{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class jg{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new et);this._width=n.width,this._height=n.height,e=new Ke(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:un}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Bh(Oh),this.copyPass.material.blending=yn,this.clock=new $g}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}xc!==void 0&&(o instanceof xc?n=!0:o instanceof Zg&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new et);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Jg extends pi{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new zt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=s}}const Qg={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new zt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Qi extends pi{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new et(t.x,t.y):new et(256,256),this.clearColor=new zt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Ke(r,o,{type:un}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Ke(r,o,{type:un});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new Ke(r,o,{type:un});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const l=Qg;this.highPassUniforms=Ji.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ne({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new et(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Oh;this.copyUniforms=Ji.clone(u.uniforms),this.blendMaterial=new Ne({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ws,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new zt,this.oldClearAlpha=1,this.basic=new mn,this.fsQuad=new Fr(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new et(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=Qi.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[a]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=Qi.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[a]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new Ne({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new et(.5,.5)},direction:{value:new et(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Ne({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Qi.BlurDirectionX=new et(1,0);Qi.BlurDirectionY=new et(0,1);const tv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class ev extends pi{constructor(){super();const t=tv;this.uniforms=Ji.clone(t.uniforms),this.material=new Og({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Fr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===oe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Wc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const nv={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class iv extends pi{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,o=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new Ke(1,1,{minFilter:we,magFilter:we,type:un}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new yh,this.materialDepth.depthPacking=eh,this.materialDepth.blending=yn;const l=nv,a=Ji.clone(l.uniforms);a.tDepth.value=this.renderTargetDepth.texture,a.focus.value=s,a.aspect.value=e.aspect,a.aperture.value=r,a.maxblur.value=o,a.nearClip.value=e.near,a.farClip.value=e.far,this.materialBokeh=new Ne({defines:Object.assign({},l.defines),uniforms:a,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.uniforms=a,this.fsQuad=new Fr(this.materialBokeh),this._oldClearColor=new zt}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Eo=3,sv="the-other-me-applause",qi="saves",zh="tom-applause-settings";function Qo(){return{v:Eo,room:"hub_dressing",spot:"start",chapter:"Акт I · Приглашение",f:{},inv:[],notes:[],photos:[],seen:{},mask:null,time:0}}const yc={music:.7,sfx:.8,voice:.6,uiScale:1,quality:"med",textSpeed:45,reduceFlash:!1,reduceShake:!1,contrast:!1,rhythmEasy:!1,rhythmOffset:0,touch:typeof window<"u"&&"ontouchstart"in window&&matchMedia("(pointer: coarse)").matches,introAlways:!1},Se=rv();function rv(){try{const i=localStorage.getItem(zh);if(i)return{...yc,...JSON.parse(i)}}catch(i){console.warn("[settings] не удалось прочитать настройки, используются значения по умолчанию",i)}return{...yc}}function Mc(){try{localStorage.setItem(zh,JSON.stringify(Se))}catch(i){console.warn("[settings] не удалось сохранить настройки",i)}}let ur=null;function Vh(){return ur||(ur=new Promise(i=>{try{const t=indexedDB.open(sv,1);t.onupgradeneeded=()=>t.result.createObjectStore(qi),t.onsuccess=()=>i(t.result),t.onerror=()=>{console.warn("[save] IndexedDB недоступна, используется localStorage",t.error),i(null)}}catch(t){console.warn("[save] IndexedDB недоступна, используется localStorage",t),i(null)}}),ur)}async function Gh(i,t){const e=await Vh();if(!e){t===null?localStorage.removeItem("tom-save-"+i):localStorage.setItem("tom-save-"+i,t);return}return new Promise((n,s)=>{const r=e.transaction(qi,"readwrite");t===null?r.objectStore(qi).delete(i):r.objectStore(qi).put(t,i),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)})}async function av(i){const t=await Vh();return t?new Promise((e,n)=>{const s=t.transaction(qi).objectStore(qi).get(i);s.onsuccess=()=>e(s.result??null),s.onerror=()=>n(s.error)}):localStorage.getItem("tom-save-"+i)}const bc=["auto","slot1","slot2","slot3"],ov={auto:"Автосохранение",slot1:"Слот I",slot2:"Слот II",slot3:"Слот III"};function tl(i){if(!i||typeof i!="object"||typeof i.room!="string"||typeof i.f!="object")return null;const t={...Qo(),...i};return Array.isArray(t.inv)||(t.inv=[]),Array.isArray(t.notes)||(t.notes=[]),Array.isArray(t.photos)||(t.photos=[]),(!t.seen||typeof t.seen!="object")&&(t.seen={}),(i.v|0)>Eo?null:(t.v=Eo,t)}async function el(i,t){t.savedAt=Date.now(),await Gh(i,JSON.stringify(t))}async function Mr(i){const t=await av(i);if(!t)return{state:null,broken:!1};try{const e=tl(JSON.parse(t));return{state:e,broken:!e}}catch(e){return console.warn(`[save] слот ${i} повреждён`,e),{state:null,broken:!0}}}async function lv(i){await Gh(i,null)}function cv(i){return JSON.stringify(i)}function hv(i){try{return tl(JSON.parse(i))}catch(t){return console.warn("[save] импорт: файл не является сохранением",t),null}}typeof window<"u"&&(window.__S={readSave:Mr,writeSave:el,migrate:tl});const Ni={sat:1,tint:[1,1,1],vig:.35,glitch:0,bright:1,contrast:1,wave:0,bloom:.45},uv={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new L(1,1,1)},uVig:{value:.35},uGlitch:{value:0},uBright:{value:1},uContrast:{value:1},uWave:{value:0},uTime:{value:0},uFlash:{value:0},uDither:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash,uDither; uniform vec3 uTint; varying vec2 vUv;
    float h(vec2 p){ return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453); }
    void main(){ vec2 uv=vUv;
      if(uWave>0.0){ uv.x+=sin(uv.y*18.0+uTime*2.2)*0.006*uWave; uv.y+=sin(uv.x*14.0+uTime*1.7)*0.005*uWave; }
      float sh=0.0;
      if(uGlitch>0.0){ float band=floor(uv.y*24.0); float n=h(vec2(band,floor(uTime*9.0))); if(n>1.0-uGlitch*0.35){ uv.x+=(h(vec2(band,uTime))-0.5)*0.12*uGlitch; } sh=0.004*uGlitch; }
      vec3 c=texture2D(tDiffuse,uv).rgb;
      if(sh>0.0){ c.r=texture2D(tDiffuse,uv+vec2(sh,0.0)).r; c.b=texture2D(tDiffuse,uv-vec2(sh,0.0)).b; }
      float l=dot(c,vec3(0.3,0.59,0.11)); c=mix(vec3(l),c,uSat); c*=uTint*uBright; c=(c-0.5)*uContrast+0.5;
      float d=distance(vUv,vec2(0.5)); c*=1.0-uVig*smoothstep(0.35,0.85,d);
      c+=vec3(uFlash);
      vec2 fp=floor(mod(gl_FragCoord.xy,4.0)); float b=mod(fp.x*8.0+fp.y*2.0+mod(fp.y,2.0)*4.0,16.0)/16.0;
      c=floor(c*40.0+b*uDither)/40.0; gl_FragColor=vec4(c,1.0); }`};class fv{constructor(t){this.canvas=t,this.scene=new Q0,this.target={...Ni,tint:[...Ni.tint]},this.cur={...Ni,tint:[...Ni.tint]},this.flash=0,this.W=640,this.H=360,this.time=0,this.bokeh=null,this.dofFocus=0,this.pixelH=0,this.baseFov=30,this.r=new J0({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=Bc,this.r.toneMapping=Lo,this.r.toneMappingExposure=1.3,this.cam=new Ve(30,16/9,1,200),this.setup(),window.addEventListener("resize",()=>this.setup())}setup(t={}){t.pixelH!=null&&(this.pixelH=t.pixelH);const e=t.dof??!!this.bokeh,n=window.innerWidth,s=window.innerHeight,r=this.pixelH||(Se.quality==="low"?288:Se.quality==="med"?400:540),o=Math.max(1,Math.floor(s/r))||1;this.H=Math.max(180,Math.round(s/o)),this.W=Math.max(240,Math.round(n/o)),this.r.setPixelRatio(1),this.r.setSize(this.W,this.H,!1),this.r.shadowMap.enabled=Se.quality!=="low",this.cam.aspect=this.W/this.H,this.cam.fov=this.cam.aspect<1?this.baseFov*1.5:this.baseFov,this.cam.updateProjectionMatrix();const l=new Ke(this.W,this.H,{type:un});this.composer=new jg(this.r,l),this.composer.addPass(new Jg(this.scene,this.cam)),this.bloom=new Qi(new et(this.W,this.H),.45,.5,.9),this.bloom.enabled=Se.quality!=="low",this.composer.addPass(this.bloom),this.bokeh=null,e&&Se.quality!=="low"&&(this.bokeh=new iv(this.scene,this.cam,{focus:this.dofFocus||5,aperture:.004,maxblur:.006}),this.composer.addPass(this.bokeh)),this.composer.addPass(new ev),this.grade=new Bh(uv),this.composer.addPass(this.grade)}setGrade(t,e=!1){this.target={...Ni,...t,tint:t.tint?[...t.tint]:[...Ni.tint]},e&&(this.cur={...this.target,tint:[...this.target.tint]})}render(t){this.time+=t;const e=Math.min(1,t*4),n=this.cur,s=this.target;for(const o of["sat","vig","glitch","bright","contrast","wave","bloom"])n[o]+=(s[o]-n[o])*e;for(let o=0;o<3;o++)n.tint[o]+=(s.tint[o]-n.tint[o])*e;this.flash=Math.max(0,this.flash-t*2.5);const r=this.grade.uniforms;r.uSat.value=n.sat,r.uTint.value.set(n.tint[0],n.tint[1],n.tint[2]),r.uVig.value=n.vig,r.uGlitch.value=Se.reduceFlash?Math.min(n.glitch,.25):n.glitch,r.uBright.value=n.bright,r.uContrast.value=n.contrast*(Se.contrast?1.12:1),r.uWave.value=n.wave,r.uTime.value=this.time,r.uFlash.value=Se.reduceFlash?this.flash*.25:this.flash,this.bloom.strength=n.bloom*.65,this.composer.render(t)}snapshot(t=192){this.composer.render(0);const e=document.createElement("canvas");e.width=t,e.height=Math.round(t*this.H/this.W);const n=e.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.canvas,0,0,e.width,e.height),e.toDataURL("image/jpeg",.7)}}const vn=16,dv=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function _e(i,t,e=0){let n=i*374761393+t*668265263+e*982451653|0;return n=(n^n>>13)*1274126177|0,((n^n>>16)>>>0)/4294967295}function Ea(i,t,e,n=0){const s=Math.floor(i),r=Math.floor(t),o=i-s,l=t-r,a=v=>(v%e+e)%e,c=o*o*(3-2*o),u=l*l*(3-2*l),h=_e(a(s),a(r),n),d=_e(a(s+1),a(r),n),m=_e(a(s),a(r+1),n),p=_e(a(s+1),a(r+1),n);return h+(d-h)*c+(m-h)*u+(h-d-m+p)*c*u}function be(i,t,e,n=0){return Ea(i/e*4,t/e*4,4,n)*.55+Ea(i/e*8,t/e*8,8,n+1)*.3+Ea(i/e*16,t/e*16,16,n+2)*.15}const Hh=i=>{const t=parseInt(i,16);return[t>>16,t>>8&255,t&255]},ce=i=>i.split(" ").map(Hh),Bn={wood:ce("2e1f15 45301f 5a4029 6e5133 82623f 98764d"),floor:ce("3d2817 53371f 684628 7c5631 8f673c"),darkwood:ce("1c130e 2a1c14 38261a 453021 543b28"),velvet:ce("3a0810 560c18 721022 8e1830 a82840"),plaster:ce("8a7a68 9c8c78 ad9d88 bcae98 cabda8"),stone:ce("3c3a37 524f4a 69655e 807b72 978f84"),brick:ce("3a1c18 54261e 6e3226 86402e 9a5038"),gold:ce("5a4010 86641c b08a2c d4ae48 f0d478"),carpet:ce("4a0c14 62101c 7a1626 8e2030"),metal:ce("23262c 343841 484e59 5e6673 78818f"),black:ce("0c0a0c 141216 1c1a20 24222a"),neon:ce("0a0a18 12122a 1c1c40 2a2a5a"),asphalt:ce("16181c 1e2126 282c33 343943 444a56"),grass:ce("1f2e18 283a1e 334823 3e5629 4b6431"),dirt:ce("2b2019 35281e 403024 4b392a 574332"),paper:ce("c9b88a d6c79a e2d5ac ecdfbc f4eacb"),white:ce("b8b8c4 cacad4 dadae2 e8e8ee f4f4f8"),tileb:ce("18181c 26262c"),concrete:ce("4a4a4e 5a5a5e 6a6a6e 7a7a7e"),schoolfloor:ce("a88a5a b89a68 c8aa78 d6ba88"),pink:ce("c85a90 d870a4 e888b8 f4a4cc"),sky:ce("6a9ad8 82aee4 9cc2ee b8d6f6"),night:ce("0a0e1c 101628 182036 222c48"),green:ce("24402e 2e5038 3a6244 48745a"),blue:ce("1a2440 24325a 304274 3e548e")},bs=new Map;function Wh(i,t=!0){const e=new wh(i);return e.magFilter=we,e.minFilter=we,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=Sr),e.colorSpace=tn,e}const pv={floor:{size:64,ramp:"floor",fn:(i,t,e)=>{const n=Math.floor(t/8),s=n*23%32,r=(i+s)%32;return t%8===0||r===0?.05:.35+be(i*3,t+n*40,e,n)*.55+_e(Math.floor((i+s)/32),n)*.2}},parquet:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(i/16),s=Math.floor(t/16),r=(n+s)%2,o=r?i%16:t%16,l=r?t%4:i%4;return o===0||l===0?.1:.4+be(r?i:t*3,r?t*3:i,e,3)*.5+r*.08}},wood:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(t/8);return t%8===0?.05:.3+be(i*2,t+n*30,e,n+50)*.6}},darkwood:{size:32,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+be(i+n*30,t*2,e,n+60)*.6}},stage:{size:64,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+be(i+n*30,t*3,e,n)*.6}},woodwall:{size:32,ramp:"darkwood",fn:(i,t,e)=>i%16===0||t%32===31?.02:i%16===1?.9:.35+be(i*2,t,e,5)*.5},velvet:{size:32,ramp:"velvet",fn:(i,t)=>.5+Math.sin(i/32*Math.PI*6)*.42+_e(i,t)*.08},plaster:{size:64,ramp:"plaster",fn:(i,t,e)=>.3+be(i,t,e,7)*.6},wallpaper:{size:32,ramp:"velvet",dither:.1,fn:(i,t)=>{const e=i%16-8,n=(t+Math.floor(i/16)%2*8)%16-8,s=Math.abs(e)+Math.abs(n);return s<3?.75:s<5?.15:.35+_e(i,t)*.1}},wallgreen:{size:32,ramp:"green",dither:.1,fn:(i,t)=>{const e=i%16-8,n=t%16-8,s=Math.abs(e)+Math.abs(n);return i%16===0?.1:s<3?.85:.4+_e(i,t)*.15}},brick:{size:32,ramp:"brick",fn:(i,t,e)=>{const n=Math.floor(t/8),s=(i+n%2*8)%16;return t%8===0||s===0?[.3,Bn.stone]:.3+_e(Math.floor((i+n%2*8)/16),n)*.45+be(i,t,e,2)*.25}},stone:{size:32,ramp:"stone",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?.02:.3+_e(Math.floor((i+n%2*9)/18),n,4)*.4+be(i,t,e,9)*.3}},gold:{size:16,ramp:"gold",fn:(i,t)=>.5+Math.sin((i+t)/16*Math.PI*2)*.35+_e(i,t)*.15},carpet:{size:32,ramp:"carpet",dither:.4,fn:(i,t)=>Math.min(i%32,31-i%32)<2?[.7,Bn.gold]:.4+_e(i,t)*.4},metal:{size:32,ramp:"metal",fn:(i,t,e)=>i%32===0||t%32===0?.05:(i%32===3||i%32===28)&&(t%32===3||t%32===28)?.95:.45+be(i*4,t,e,11)*.35},black:{size:16,ramp:"black",fn:(i,t)=>.3+_e(i,t)*.5},neon:{size:32,ramp:"neon",dither:.05,fn:(i,t)=>i%16===0||t%16===0?[.9,[[30,220,230]]]:.3+_e(i,t)*.2},asphalt:{size:64,ramp:"asphalt",fn:(i,t,e)=>{const n=be(i,t,e,13);return n>.62?.95:.2+n*.6}},cobble:{size:32,ramp:"asphalt",fn:(i,t)=>{const e=Math.floor(t/8),n=(i+e%2*5)%10;return t%8===0||n===0?.02:.35+_e(Math.floor((i+e%2*5)/10),e,6)*.6}},grass:{size:64,ramp:"grass",dither:.35,fn:(i,t,e)=>.2+be(i,t,e,17)*.6+(_e(i,t)>.9?.25:0)},dirt:{size:64,ramp:"dirt",dither:.3,fn:(i,t,e)=>.2+be(i,t,e,19)*.7},paper:{size:64,ramp:"paper",dither:.3,fn:(i,t,e)=>.35+be(i,t,e,23)*.5+(_e(i,t)>.97?-.3:0)},paperstone:{size:32,ramp:"paper",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?[.4,Bn.wood]:.3+_e(Math.floor((i+n%2*9)/18),n,4)*.5}},white:{size:32,ramp:"white",fn:(i,t,e)=>.5+be(i,t,e,29)*.4},gloss:{size:32,ramp:"white",dither:.1,fn:(i,t)=>i%32===0||t%32===0?.1:.75+((i+t)%32<4?.25:0)},checker:{size:32,ramp:"tileb",dither:0,fn:(i,t)=>(Math.floor(i/16)+Math.floor(t/16))%2?[.5,Bn.white]:.5},concrete:{size:64,ramp:"concrete",fn:(i,t,e)=>.3+be(i,t,e,31)*.6},schoolfloor:{size:32,ramp:"schoolfloor",fn:(i,t,e)=>t%16===0||(i+Math.floor(t/16)*16)%32===0?.1:.45+be(i*3,t,e,37)*.45},schoolwall:{size:32,ramp:"white",dither:.15,fn:(i,t)=>.65+_e(i,t)*.2},led:{size:16,ramp:"pink",dither:0,fn:(i,t)=>i%4===0||t%4===0?[.2,Bn.black]:.3+_e(Math.floor(i/4),Math.floor(t/4),2)*.7},sky:{size:64,ramp:"sky",dither:.4,fn:(i,t,e)=>.2+(1-t/e)*.6+be(i,t,e,41)*.2},night:{size:64,ramp:"night",dither:.4,fn:(i,t,e)=>_e(i,t)>.992?[.9,Bn.white]:.2+t/e*.5+be(i,t,e,43)*.2},blue:{size:32,ramp:"blue",fn:(i,t,e)=>.3+be(i,t,e,47)*.6},mirror:{size:32,ramp:"white",dither:.2,fn:(i,t)=>{const e=(i+t*2)%32;return e<3?.95:e<14?.5:.3}}};function qh(i,t){const e=i+(t||"");let n=bs.get(e);if(n)return n;const s=pv[i];if(!s)return console.warn("[tex] нет текстуры",i),qh("plaster");const r=s.size,o=document.createElement("canvas");o.width=o.height=r;const l=o.getContext("2d"),a=l.createImageData(r,r),c=t?Hh(t.replace("#","")):null;for(let u=0;u<r;u++)for(let h=0;h<r;h++){let d=s.fn(h,u,r),m=Bn[s.ramp],p;Array.isArray(d)?(p=d[0],m=d[1]):p=d,p+=(dv[(u&3)*4+(h&3)]/16-.5)*(s.dither??.22);let v=m[Math.max(0,Math.min(m.length-1,Math.floor(p*m.length)))];if(c&&m===Bn[s.ramp]){const g=(v[0]*.3+v[1]*.6+v[2]*.1)/160;v=[Math.min(255,c[0]*g),Math.min(255,c[1]*g),Math.min(255,c[2]*g)]}const f=(u*r+h)*4;a.data[f]=v[0],a.data[f+1]=v[1],a.data[f+2]=v[2],a.data[f+3]=255}return l.putImageData(a,0,0),n=Wh(o),n.unit=r/vn,bs.set(e,n),n}function Rs(i,t,e,n){if(n&&bs.has(n))return bs.get(n);const s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");r.imageSmoothingEnabled=!1,e(r,i,t);const o=Wh(s,!1);return n&&bs.set(n,o),o}const mv='"Pixelify Sans", monospace';function To(i,t,e,n,s={}){const r=s.size||8;i.font=`${r}px ${s.font||mv}`,i.fillStyle=s.col||"#111",i.textAlign=s.align||"left",i.textBaseline="top";const o=[];for(const l of t.split(`
`)){if(!s.w){o.push(l);continue}let a="";for(const c of l.split(" ")){const u=a?a+" "+c:c;i.measureText(u).width>s.w&&a?(o.push(a),a=c):a=u}o.push(a)}return o.forEach((l,a)=>i.fillText(l,e,n+a*(s.lh||r+2))),o.length*(s.lh||r+2)}const P=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)};function gv(i,t="",e={}){const n=e.w||40,s=e.h||56;return Rs(n,s,r=>{P(r,0,0,n,s,e.frame||"#3a2a14"),P(r,1,1,n-2,s-2,e.bg||"#e2d5ac"),e.face&&(P(r,n/2-7,6,14,16,e.face),P(r,n/2-9,4,18,6,"#2a1512"),P(r,n/2-9,8,3,16,"#2a1512"),P(r,n/2+6,8,3,16,"#2a1512"),P(r,n/2-6,22,12,6,"#a3122a"));const o=e.face?30:5,l=To(r,i,n/2,o,{size:e.size||8,col:e.fg||"#5a0c18",w:n-6,align:"center"});t&&To(r,t,n/2,o+l+2,{size:6,col:"#3a2a14",w:n-6,align:"center",lh:7})},"poster|"+i+t+JSON.stringify(e))}const Ao={tree:{w:48,h:72,draw:i=>{P(i,21,40,6,32,"#2c2019"),P(i,23,40,2,32,"#3a2b21");for(const[t,e,n,s,r]of[[6,8,36,30,"#1c2a16"],[2,18,44,20,"#26381b"],[10,4,26,14,"#324820"],[8,14,18,12,"#405a27"],[26,22,14,10,"#324820"]])P(i,t,e,n,s,r)}},pine:{w:40,h:80,draw:i=>{P(i,18,60,4,20,"#1e1612");for(let t=0;t<6;t++)P(i,16-t*3,6+t*10,8+t*6,12,t%2?"#16241d":"#1d3024"),P(i,17-t*3,6+t*10,3,2,"#263c2c")}},bush:{w:24,h:16,draw:i=>{P(i,2,5,20,11,"#26381b"),P(i,5,2,14,6,"#324820"),P(i,6,3,4,2,"#405a27")}},sakura:{w:48,h:72,draw:i=>{P(i,21,40,6,32,"#4a382a");for(const[t,e,n,s,r]of[[6,8,36,28,"#e888b8"],[2,18,44,18,"#f4a4cc"],[10,4,26,14,"#f8c0dc"],[8,14,12,8,"#fde0ee"],[28,24,12,8,"#d870a4"]])P(i,t,e,n,s,r)}},lamp:{w:12,h:44,draw:i=>{P(i,5,10,2,32,"#2a2a2e"),P(i,2,42,8,2,"#2a2a2e"),P(i,1,2,10,9,"#f4d890"),P(i,2,1,8,1,"#c8a850"),P(i,3,4,6,5,"#fff4c8")}},streetlamp:{w:14,h:64,draw:i=>{P(i,6,10,2,54,"#1a1a1e"),P(i,3,62,8,2,"#1a1a1e"),P(i,2,2,10,9,"#f0f0d8"),P(i,1,0,12,2,"#1a1a1e")}},chair:{w:14,h:22,draw:i=>{P(i,2,0,10,12,"#721022"),P(i,1,0,1,22,"#86641c"),P(i,12,0,1,22,"#86641c"),P(i,1,12,12,3,"#8e1830"),P(i,3,2,8,8,"#8e1830")}},plant:{w:16,h:28,draw:i=>{P(i,4,20,8,8,"#7a4a2a"),P(i,7,8,2,12,"#2e5038"),P(i,2,4,5,10,"#3a6244"),P(i,9,2,5,12,"#48745a"),P(i,5,0,4,8,"#3a6244")}},bust:{w:16,h:30,draw:i=>{P(i,2,20,12,10,"#69655e"),P(i,1,19,14,2,"#807b72"),P(i,4,4,8,10,"#cabda8"),P(i,3,14,10,5,"#bcae98"),P(i,4,2,8,3,"#ad9d88"),P(i,6,8,1,1,"#555"),P(i,9,8,1,1,"#555"),P(i,6,11,4,1,"#8a7a68")}},bustfun:{w:16,h:30,draw:i=>{Ao.bust.draw(i),P(i,5,7,3,3,"#fff"),P(i,9,7,3,3,"#fff"),P(i,6,8,1,1,"#000"),P(i,10,8,1,1,"#000"),P(i,5,11,6,1,"#a22"),P(i,6,12,4,1,"#a22"),P(i,3,0,10,3,"#e84a6f"),P(i,6,-1,4,2,"#f2c230")}},masks:{w:30,h:14,draw:i=>{for(const[t,e,n]of[[0,"#f2c230",0],[10,"#6a8ad0",1],[20,"#d86a8a",2]])P(i,t+1,1,8,11,e),P(i,t+2,0,6,1,e),P(i,t+2,12,6,1,e),P(i,t+2,4,2,2,"#111"),P(i,t+6,4,2,2,"#111"),n===0&&(P(i,t+2,8,6,1,"#111"),P(i,t+3,9,4,1,"#111")),n===1&&(P(i,t+3,8,4,1,"#111"),P(i,t+2,9,1,1,"#111"),P(i,t+7,9,1,1,"#111")),n===2&&P(i,t+3,9,4,1,"#111")}},ladder:{w:20,h:60,draw:i=>{P(i,2,0,2,60,"#5a4029"),P(i,16,0,2,60,"#5a4029");for(let t=0;t<9;t++)P(i,2,4+t*6,16,2,"#6e5133")}},bridgecut:{w:72,h:30,draw:i=>{P(i,0,8,72,5,"#5a4029");for(let t=0;t<9;t++)P(i,2+t*8,0,3,30,"#45301f");P(i,0,0,72,3,"#6e5133"),P(i,30,13,12,17,"#45301f")}},marionette:{w:16,h:30,draw:i=>{P(i,2,0,12,2,"#5a4029"),P(i,7,0,2,3,"#5a4029");for(const t of[3,8,12])P(i,t,2,1,8,"#ddd");P(i,5,8,6,6,"#e8d8c0"),P(i,5,8,3,6,"#f4ecd8"),P(i,6,10,1,1,"#111"),P(i,9,10,1,1,"#111"),P(i,5,14,6,8,"#a3122a"),P(i,5,14,3,8,"#2f7f82"),P(i,3,14,2,7,"#e8d8c0"),P(i,11,14,2,7,"#e8d8c0"),P(i,5,22,2,7,"#333"),P(i,9,22,2,7,"#333"),P(i,6,15,4,2,"#f4d060")}},bookstand:{w:16,h:28,draw:i=>{P(i,7,10,2,16,"#2a1c14"),P(i,3,26,10,2,"#2a1c14"),P(i,1,4,14,7,"#4a0c14"),P(i,2,5,5,5,"#e2d5ac"),P(i,9,5,5,5,"#e2d5ac"),P(i,7,4,2,7,"#86641c")}},candle:{w:6,h:16,draw:i=>{P(i,2,6,2,8,"#e8e0c8"),P(i,1,14,4,2,"#86641c"),P(i,2,2,2,4,"#ffd060"),P(i,2,1,1,2,"#fff4c8")}},flowerpot:{w:12,h:16,draw:i=>{P(i,2,9,8,7,"#8a4a2a"),P(i,1,8,10,2,"#9a5a3a"),P(i,5,3,2,6,"#2e5038"),P(i,3,0,6,4,"#d86a8a"),P(i,5,1,2,2,"#f2c230")}},umbrella:{w:22,h:26,draw:i=>{P(i,10,6,2,18,"#333"),P(i,8,24,3,2,"#333"),P(i,1,4,20,5,"#e84a6f"),P(i,4,1,14,3,"#f06a88"),P(i,9,0,4,1,"#f06a88");for(const t of[1,7,13,19])P(i,t,9,2,1,"#c03050")}},cake:{w:26,h:26,draw:i=>{P(i,2,14,22,10,"#f4e8d8"),P(i,2,18,22,2,"#e888b8"),P(i,4,10,18,5,"#fff8f0"),P(i,0,24,26,2,"#d4ae48");for(let t=0;t<9;t++)P(i,3+t*2+t%2,5+t%2*2,1,6,["#5fd0c8","#f2c230","#e84a6f"][t%3]),P(i,3+t*2+t%2,3+t%2*2,1,2,"#ffd060");for(let t=0;t<9;t++)P(i,4+t*2,11,1,3,["#f2c230","#e84a6f","#5fd0c8"][t%3]),P(i,4+t*2,9,1,2,"#ffd060")}},cakeout:{w:26,h:26,draw:i=>{Ao.cake.draw(i);for(let t=0;t<9;t++)P(i,3+t*2+t%2,3+t%2*2,1,2,"#888"),P(i,4+t*2,9,1,2,"#888")}},bouquet:{w:24,h:30,draw:i=>{P(i,8,16,8,12,"#e2d5ac"),P(i,10,28,4,2,"#a3122a"),P(i,9,20,6,2,"#a3122a");const t=["#e84a6f","#f2c230","#f8c0dc","#fff","#c03050","#ff9a3c"];for(let e=0;e<14;e++){const n=2+e*7%18,s=1+e*5%13;P(i,n,s,5,5,t[e%6]),P(i,n+2,s+2,1,1,"#5a4010")}P(i,4,13,3,4,"#2e5038"),P(i,17,12,3,5,"#3a6244")}},mic:{w:8,h:34,draw:i=>{P(i,3,6,2,26,"#555"),P(i,1,32,6,2,"#333"),P(i,2,0,4,6,"#888"),P(i,2,1,4,1,"#bbb")}},speaker:{w:16,h:26,draw:i=>{P(i,0,0,16,26,"#18181c"),P(i,1,1,14,24,"#26262c"),P(i,4,3,8,8,"#111"),P(i,6,5,4,4,"#444"),P(i,3,13,10,10,"#111"),P(i,6,16,4,4,"#444")}},stagelight:{w:14,h:16,draw:i=>{P(i,2,2,10,9,"#222"),P(i,4,11,6,3,"#fff4c8"),P(i,6,0,2,2,"#444"),P(i,1,5,1,3,"#555"),P(i,12,5,1,3,"#555")}},stall:{w:56,h:52,draw:i=>{P(i,2,14,2,38,"#5a4029"),P(i,52,14,2,38,"#5a4029");for(let t=0;t<7;t++)P(i,t*8,2,8,12,t%2?"#e84a6f":"#fff8f0");for(let t=0;t<7;t++)P(i,t*8+1,14,6,2,t%2?"#c03050":"#ddd");P(i,2,34,52,18,"#6e5133"),P(i,2,32,52,3,"#98764d");for(let t=0;t<5;t++)P(i,8+t*9,26,5,6,["#f2c230","#e84a6f","#5fd0c8","#f8c0dc","#ff9a3c"][t]);for(let t=0;t<6;t++)P(i,5+t*9,17,3,4,["#f2c230","#e84a6f"][t%2])}},lantern:{w:10,h:14,draw:i=>{P(i,4,0,2,2,"#333"),P(i,1,2,8,10,"#e84a6f"),P(i,3,3,4,8,"#ffd060"),P(i,2,12,6,1,"#333")}},gear:{w:14,h:14,draw:i=>{P(i,3,3,8,8,"#b08a2c"),P(i,5,0,4,14,"#b08a2c"),P(i,0,5,14,4,"#b08a2c"),P(i,5,5,4,4,"#3a2a14"),P(i,1,1,3,3,"#86641c"),P(i,10,1,3,3,"#86641c"),P(i,1,10,3,3,"#86641c"),P(i,10,10,3,3,"#86641c")}},key:{w:12,h:8,draw:i=>{P(i,0,1,5,6,"#d4ae48"),P(i,1,3,2,2,"#000"),P(i,5,3,7,2,"#d4ae48"),P(i,9,5,1,2,"#d4ae48"),P(i,11,5,1,2,"#d4ae48"),i.clearRect(1,3,2,2)}},weight:{w:14,h:14,draw:i=>{P(i,1,4,12,10,"#484e59"),P(i,3,2,8,3,"#5e6673"),P(i,5,0,4,3,"#343841"),P(i,2,5,2,8,"#78818f")}},basket:{w:18,h:16,draw:i=>{P(i,1,6,16,10,"#8a6a3a");for(let t=0;t<4;t++)P(i,1,7+t*3,16,1,"#6a4a2a");P(i,0,5,18,2,"#a88a4a"),P(i,2,0,1,6,"#f0d98a"),P(i,15,0,1,6,"#f0d98a")}},hook:{w:10,h:12,draw:i=>{P(i,3,0,4,3,"#484e59"),P(i,4,3,2,5,"#78818f"),P(i,4,8,5,2,"#78818f"),P(i,8,6,1,2,"#78818f")}},slot:{w:16,h:30,draw:i=>{P(i,0,0,16,30,"#3a1a5a"),P(i,1,1,14,6,"#ff4fa0"),P(i,2,9,12,8,"#111");for(let t=0;t<3;t++)P(i,3+t*4,10,3,6,["#f2c230","#40e0d0","#f2c230"][t]);P(i,2,19,12,2,"#40e0d0"),P(i,4,23,8,5,"#222")}},holo:{w:24,h:30,draw:i=>{i.globalAlpha=.7,P(i,0,0,24,30,"#0a3a4a");for(let t=0;t<8;t++)P(i,2,2+t*3.5,4+t*7%16,1,"#40e0d0");P(i,14,16,8,10,"#40e0d0"),i.globalAlpha=1}},typewriter:{w:16,h:10,draw:i=>{P(i,1,4,14,6,"#2a2a2e"),P(i,3,0,10,4,"#e8e8e8");for(let t=0;t<5;t++)P(i,3+t*2,6,1,1,"#aaa");for(let t=0;t<5;t++)P(i,4+t*2,8,1,1,"#aaa")}},cam:{w:12,h:10,draw:i=>{P(i,0,2,12,8,"#222"),P(i,2,0,4,2,"#333"),P(i,4,3,5,5,"#557"),P(i,5,4,3,3,"#9bd"),P(i,10,3,1,1,"#f33")}},filmcam:{w:22,h:36,draw:i=>{P(i,4,6,14,10,"#2a2a2e"),P(i,0,8,4,6,"#444"),P(i,6,0,5,6,"#3a3a40"),P(i,12,1,5,5,"#3a3a40"),P(i,10,16,2,6,"#555"),P(i,10,22,1,14,"#555"),P(i,6,22,1,14,"#555"),P(i,15,22,1,14,"#555")}},suitcase:{w:16,h:12,draw:i=>{P(i,0,2,16,10,"#6a6a6a"),P(i,6,0,4,2,"#333"),P(i,0,6,16,1,"#333"),P(i,3,5,2,3,"#bbb"),P(i,11,5,2,3,"#bbb")}},book:{w:10,h:8,draw:i=>{P(i,0,1,10,7,"#4a0c14"),P(i,1,0,8,2,"#e2d5ac"),P(i,3,3,4,2,"#d4ae48")}},wheel:{w:20,h:20,draw:i=>{P(i,2,2,16,16,"#5a4029"),P(i,6,0,8,20,"#5a4029"),P(i,0,6,20,8,"#5a4029"),P(i,5,5,10,10,"#2a1c14"),P(i,9,2,2,16,"#98764d"),P(i,2,9,16,2,"#98764d")}},hoverbike:{w:36,h:18,draw:i=>{P(i,2,8,32,6,"#26262e"),P(i,6,4,14,5,"#ff9a3c"),P(i,20,2,6,6,"#343841"),P(i,0,10,4,3,"#40e0d0"),P(i,4,15,28,2,"#40e0d0"),P(i,28,6,6,3,"#78818f")}},horse:{w:36,h:30,draw:i=>{P(i,6,10,22,10,"#f0f0f0"),P(i,24,2,8,12,"#f0f0f0"),P(i,30,4,5,5,"#e0e0e0"),P(i,8,20,3,10,"#ddd"),P(i,22,20,3,10,"#ddd"),P(i,2,10,4,10,"#e8c36a"),P(i,23,0,3,10,"#e8c36a"),P(i,31,5,1,1,"#111"),P(i,10,9,12,3,"#3a6ab0")}},spotcone:{w:4,h:4,draw:i=>P(i,0,0,4,4,"#fff")}};function vv(i){const t=Ao[i];if(!t)throw new Error("Нет реквизита: "+i);const e=Rs(t.w,t.h,n=>t.draw(n),"prop|"+i);return e.pw=t.w,e.ph=t.h,e}const Fi="#d9a878",Ta="#c08458",ue="#f0cdb0",_v="#eac4a4",Sc="#d9a77e",xv=[{id:"varya",name:"Варя",color:"#5fd0c8",pitch:520,skin:Fi,hair:"#5a341f",style:"bob",eyes:"#5b3a1e",h:31,build:"thin",top:"#c41e3a",bottom:"#2a2430",shoes:"#1c1620",brows:"soft",acc:["offshoulder"],role:"Режиссёрка",bio:"Завтра ей восемнадцать. На ней красный лонгслив без плеч: Матвей подарил на прошлый день рождения. Умеет собрать людей вместе — и очень не любит, когда что-то идёт не по плану."},{id:"alla",name:"Алла Ева",color:"#ff5d6c",pitch:500,skin:Fi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#a3122a",bottom:"#8a0f24",skirt:"long",trim:"#e8c36a",shoes:"#3a0a12",acc:["pearls"],brows:"arch",lips:"#b3122e",shadow:"#6b2a55",role:"Прима",bio:"Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много."},{id:"kukolnik",name:"Кукольник",color:"#d8b56a",pitch:180,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:38,build:"mid",top:"#111",bottom:"#111",role:"Художественный руководитель",bio:"Его никто не видел. Он оставляет письма, пометки на полях и распоряжения — всегда вовремя."},{id:"polina",name:"Полина",color:"#c9a7ff",pitch:610,skin:ue,hair:"#f0d98a",style:"fluffy",eyes:"#3f9b57",h:32,build:"thin",top:"#8f7fc4",bottom:"#3b4a6b",shoes:"#eeeeee",brows:"soft",role:"Подруга",bio:"Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают."},{id:"ruben",name:"Рубен",color:"#ffb057",pitch:240,skin:Ta,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:40,build:"strong",top:"#26262e",bottom:"#2d3440",trim:"#ff9a3c",shoes:"#111",brows:"strict",role:"Друг",bio:"Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать."},{id:"matvey",name:"Матвей",color:"#ff8fd0",pitch:400,skin:_v,hair:"#6a4326",style:"curlyShort",eyes:"#5b3a1e",h:37,build:"thin",top:"#f2c230",bottom:"#3a62c9",trim:"#e84a6f",shoes:"#e84a6f",acc:["freckles","scarf","bracelets","pins"],brows:"soft",role:"Друг",bio:"Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет."},{id:"erika",name:"Эрика",color:"#9fc3e8",pitch:430,skin:ue,hair:"#6b452a",style:"ponytail",eyes:"#5b3a1e",h:34,build:"mid",top:"#8a7a5c",bottom:"#2b2f3a",shoes:"#22201f",brows:"soft",role:"Подруга",bio:"Спокойная. Сначала слушает, потом задаёт один вопрос — обычно самый неудобный."},{id:"liza",name:"Лиза",color:"#ffe27a",pitch:640,skin:ue,hair:"#8c6a45",style:"long",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#7ec4a4",bottom:"#f3ead8",skirt:"short",shoes:"#8a5a3a",brows:"soft",role:"Подруга",bio:"Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит — кем."},{id:"liza_long",name:"Лиза",color:"#ffe27a",pitch:640,skin:ue,hair:"#8c6a45",style:"rapunzel",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#c9a0dc",bottom:"#b58ad0",skirt:"long",shoes:"#8a5a3a",brows:"soft"},{id:"angelina",name:"Ангелина",color:"#ff7ab8",pitch:470,skin:Sc,hair:"#0f0d12",style:"longStyled",eyes:"#2a1a14",h:37,build:"thin",top:"#16141c",bottom:"#5a1f3d",skirt:"short",trim:"#d9d9e8",shoes:"#111",acc:["earrings"],brows:"arch",lips:"#b0405a",role:"Подруга",bio:"Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным, — и это не обсуждается."},{id:"artemiy",name:"Артемий",color:"#9ab0c8",pitch:260,skin:ue,hair:"#9a7450",style:"short",eyes:"#2a1a14",h:39,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",shoes:"#111",brows:"strict",role:"Одноклассник Матвея",bio:"Выглядит так, будто сейчас сделает замечание. На деле подкармливает школьного кота."},{id:"vasilisa",name:"Василиса",color:"#ffb48a",pitch:480,skin:ue,hair:"#c98a52",style:"long",eyes:"#5b6b4a",h:37,build:"thin",top:"#3d5a4a",bottom:"#2c2c34",acc:["camera"],brows:"soft",role:"Актриса труппы"},{id:"dana",name:"Дана",color:"#e8a0ff",pitch:500,skin:Fi,hair:"#2a1a14",style:"long",eyes:"#5b3a1e",h:33,build:"thin",top:"#c23a6a",bottom:"#18161c",skirt:"short",trim:"#f2c230",acc:["earrings"],brows:"arch",lips:"#a8324a",role:"Актриса труппы"},{id:"nina",name:"Нина",color:"#b8c0ff",pitch:540,skin:ue,hair:"#121016",style:"long",bangs:!0,eyes:"#3b2a22",h:33,build:"thin",top:"#4a4a6a",bottom:"#23232c",brows:"soft",role:"Актриса труппы"},{id:"anya",name:"Аня",color:"#ffd0a0",pitch:580,skin:ue,hair:"#7a6248",style:"twin",eyes:"#6a5238",h:33,build:"mid",top:"#d88a4a",bottom:"#4a5a7a",skirt:"short",brows:"soft",role:"Актриса труппы"},{id:"olya",name:"Оля",color:"#a0e0d0",pitch:520,skin:ue,hair:"#2a1e1a",style:"twin",bangs:!0,eyes:"#3b2a22",h:31,build:"mid",top:"#2f4a5a",bottom:"#2a2a33",brows:"strict",role:"Актриса труппы"},{id:"natasha",name:"Мама Наташа",color:"#ffd6c0",pitch:420,skin:ue,hair:"#9a7a58",style:"bob",eyes:"#2a1a14",h:37,build:"mid",top:"#7a9ab8",bottom:"#33384a",skirt:"long",brows:"soft"},{id:"sasha",name:"Саша",color:"#c0d6e8",pitch:220,skin:ue,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:39,build:"mid",top:"#4a5a4a",bottom:"#2c2c34",brows:"soft"},{id:"maxim",name:"Папа Максим",color:"#ffc070",pitch:250,skin:Ta,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:33,build:"mid",top:"#c2452d",bottom:"#2d3440",brows:"arch"},{id:"nastya",name:"Настя",color:"#d8c8e8",pitch:440,skin:ue,hair:"#9a7a58",style:"long",eyes:"#5b3a1e",h:37,build:"thin",top:"#b8a8c8",bottom:"#4a4458",skirt:"long",brows:"soft"},{id:"vasya",name:"Вася",color:"#a8e0ff",pitch:620,skin:ue,hair:"#6a4630",style:"bob",eyes:"#5b3a1e",h:30,build:"thin",top:"#e8884a",bottom:"#3a4a6a",brows:"soft"},{id:"sofa",name:"Софа",color:"#ffc0e0",pitch:540,skin:ue,hair:"#a88a5a",style:"longStyled",eyes:"#5a6a7a",h:33,build:"thin",top:"#e8b0c8",bottom:"#f0e8e8",skirt:"short",acc:["earrings"],brows:"arch",lips:"#c84a6a",shadow:"#b86a9a"},{id:"katya",name:"Катя",color:"#ffb090",pitch:560,skin:ue,hair:"#c8602a",style:"bobLong",eyes:"#5a7a5a",h:37,build:"big",top:"#6a9a7a",bottom:"#4a4a5a",brows:"soft"},{id:"owner",name:"Хозяин",color:"#b0b0b0",pitch:150,skin:"#e8e4d8",hair:"#111",style:"none",eyes:"#111",h:40,build:"strong",top:"#3a2a22",bottom:"#1c1614",acc:["maskface","hat","coat"],brows:"strict"},{id:"nol",name:"Ноль",color:"#7af0ff",pitch:560,skin:ue,hair:"#40e0d0",style:"short",eyes:"#222",h:33,build:"thin",top:"#22303a",bottom:"#151a22",trim:"#40e0d0",acc:["visor"],brows:"soft"},{id:"kasseta",name:"Кассета",color:"#ff7ad0",pitch:330,skin:Ta,hair:"#ff4fa0",style:"bob",eyes:"#222",h:36,build:"mid",top:"#5a2a6a",bottom:"#1a1a22",trim:"#ff4fa0",acc:["headphones"],brows:"arch"},{id:"guard",name:"Охранник",color:"#ff5050",pitch:140,skin:"#8a94a0",hair:"#444",style:"none",eyes:"#f33",h:38,build:"strong",top:"#39424e",bottom:"#252a33",trim:"#ff3030",acc:["visor"],brows:"strict"},{id:"teacher",name:"Руководительница драмкружка",color:"#ff5d6c",pitch:500,skin:Fi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#44375a",bottom:"#2a2238",skirt:"long",acc:["glasses"],brows:"arch",lips:"#b3122e"},{id:"barman",name:"Сол, бармен",color:"#cccccc",pitch:200,skin:"#b8b8b8",hair:"#333",style:"short",eyes:"#222",h:38,build:"big",top:"#e8e8e8",bottom:"#222",trim:"#111",brows:"strict"},{id:"singer",name:"Мэй, певица",color:"#e8e8e8",pitch:460,skin:"#d8d8d8",hair:"#1a1a1a",style:"longStyled",eyes:"#222",h:36,build:"thin",top:"#bbbbbb",bottom:"#aaaaaa",skirt:"long",acc:["earrings"],brows:"arch",lips:"#555"},{id:"director",name:"Грей, режиссёр",color:"#b0b0b0",pitch:230,skin:"#c8c8c8",hair:"#888",style:"short",eyes:"#222",h:37,build:"thin",top:"#555",bottom:"#333",acc:["glasses","scarf"],brows:"strict"},{id:"collector",name:"Аркадий Вейс",color:"#d0d0d0",pitch:170,skin:"#cfcfcf",hair:"#ddd",style:"short",eyes:"#222",h:38,build:"big",top:"#2a2a2a",bottom:"#1c1c1c",trim:"#999",brows:"strict"},{id:"lydia",name:"Лидия Вронская",color:"#ffffff",pitch:480,skin:"#e0e0e0",hair:"#2a2a2a",style:"bob",eyes:"#222",h:34,build:"thin",top:"#777",bottom:"#444",acc:["hat"],brows:"soft",lips:"#555"},{id:"cashier",name:"Кассир",color:"#bbbbbb",pitch:300,skin:"#c0c0c0",hair:"#555",style:"short",eyes:"#222",h:35,build:"mid",top:"#444",bottom:"#333",acc:["hat"],brows:"soft"},{id:"fairy",name:"Фея-крёстная",color:"#c8a0ff",pitch:600,skin:ue,hair:"#e8e0f0",style:"bun",eyes:"#6a5a9a",h:33,build:"big",top:"#b89ae0",bottom:"#9a7ac8",skirt:"long",acc:["wings","glasses"],brows:"arch"},{id:"prince",name:"Принц",color:"#8ab8ff",pitch:280,skin:ue,hair:"#e0b860",style:"bob",eyes:"#3a6ab0",h:39,build:"mid",top:"#3a6ab0",bottom:"#f0f0f0",trim:"#e8c36a",acc:["crown","cape"],brows:"soft"},{id:"narrator",name:"Рассказчик",color:"#e8d8a8",pitch:190,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:30,build:"mid",top:"#000",bottom:"#000"},{id:"glyants",name:"Директор Глянц",color:"#ff9ad8",pitch:210,skin:ue,hair:"#e8e8f0",style:"short",eyes:"#3a3a4a",h:38,build:"thin",top:"#f0f0f8",bottom:"#f0f0f8",trim:"#ff4fa0",acc:["glasses"],brows:"arch"},{id:"trainer",name:"Тренер Ми",color:"#a0f0c0",pitch:520,skin:Sc,hair:"#222",style:"ponytail",eyes:"#222",h:34,build:"mid",top:"#30c090",bottom:"#222",brows:"strict"},{id:"stylist",name:"Ассистентка",color:"#ff5d6c",pitch:500,skin:Fi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#f0f0f8",bottom:"#ff4fa0",skirt:"short",acc:["pearls","visor"],brows:"arch",lips:"#b3122e"},{id:"hostess",name:"Леди Фортуна",color:"#ff5d6c",pitch:500,skin:Fi,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#e8c36a",bottom:"#c9a040",skirt:"long",acc:["pearls","maskhalf"],brows:"arch",lips:"#b3122e"},{id:"student",name:"Школьник",color:"#cccccc",pitch:400,skin:ue,hair:"#3a2a22",style:"short",eyes:"#333",h:34,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",brows:"soft"},{id:"student2",name:"Школьница",color:"#cccccc",pitch:560,skin:ue,hair:"#5a3a2a",style:"twin",eyes:"#333",h:32,build:"thin",top:"#2c3550",bottom:"#8a2a3a",skirt:"short",trim:"#f0f0f0",brows:"soft"},{id:"dancer",name:"Трейни",color:"#cccccc",pitch:500,skin:ue,hair:"#ffb0d8",style:"bob",eyes:"#333",h:33,build:"thin",top:"#f0f0f8",bottom:"#ff9ad8",skirt:"short",brows:"soft"},{id:"courtier",name:"Придворный",color:"#cccccc",pitch:300,skin:ue,hair:"#e8e8e8",style:"bun",eyes:"#333",h:35,build:"mid",top:"#6a2a3a",bottom:"#3a1a22",trim:"#e8c36a",brows:"soft"}],hn={};for(const i of xv)hn[i.id]=i;function je(i,t,e){return hn[t]||(hn[t]={...hn[i],...e,id:t}),hn[t]}je("varya","varya_noir",{top:"#6a6a6a",bottom:"#2a2a2a",acc:["hat"]});je("varya","varya_pjm",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});je("erika","erika_noir",{top:"#9a9a8a",bottom:"#2a2a2a",acc:["hat","coat"]});je("ruben","ruben_heist",{top:"#16161c",bottom:"#1c2028",trim:"#40e0d0",acc:["visor"]});je("matvey","matvey_school",{top:"#2c3550",bottom:"#2a2a33",trim:"#f2c230",acc:["freckles","scarf","bracelets","pins"]});je("angelina","angelina_idol",{top:"#f0f0f8",bottom:"#ff9ad8",trim:"#ff4fa0"});je("angelina","angelina_own",{top:"#1a1420",bottom:"#7a1f3d",trim:"#e8c36a"});je("alla","queen",{name:"Королева",top:"#8a0f24",bottom:"#6a0a1a",trim:"#e8c36a",acc:["pearls","crown","cape"]});je("varya","girl",{name:"Молодая Девушка",top:"#f3ead8",bottom:"#e8dcc0",skirt:"long",trim:"#5fd0c8",acc:[]});je("varya","varya_queen",{name:"Варя",top:"#8a0f24",bottom:"#6a0a1a",skirt:"long",trim:"#e8c36a",acc:[]});je("liza","liza_short",{style:"bob"});je("polina","polina_coat",{top:"#e8c230",bottom:"#3b4a6b"});je("varya","varya_pj",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});const Ps=32,ts=48,Ss=["idle0","idle1","walk0","walk1","walk2","walk3","arms","bow","fear","sit","point","dance1","dance2","lie"],wc=["f","b","s"],Aa=[22,17,20];function he(i,t){const e=parseInt(i.slice(1),16);let n=e>>16,s=e>>8&255,r=e&255;return t<0?(n*=1+t,s*=1+t,r*=1+t*.8):(n+=(255-n)*t,s+=(255-s)*t,r+=(255-r)*t),`rgb(${n|0},${s|0},${r|0})`}function Z(i,t,e,n,s,r){n<=0||s<=0||(i.fillStyle=r,i.fillRect(Math.round(t),Math.round(e),Math.round(n),Math.round(s)))}function pe(i,t,e,n,s,r){Z(i,t,e,n,s,r),n>=3&&(Z(i,t,e,1,s,he(r,.16)),Z(i,t+n-1,e,1,s,he(r,-.22))),s>=4&&Z(i,t,e+s-1,n,1,he(r,-.25))}function yv(i,t,e,n,s,r){i.save(),i.translate(t,e);const o=16,l=47,a=n.h,c=n.build==="thin"?7:n.build==="mid"?8:(n.build==="strong",11),u=n.build==="thin"?2:3;let h=Math.round(a*.37),d=Math.round(a*.33);const m=9,p=n.acc||[],v=s.startsWith("walk")?parseInt(s[4]):-1;let f=s==="idle1"?1:v===1||v===3?-1:0,g=0,x="down",M=!1;(s==="arms"||s==="dance1")&&(x="up"),s==="dance2"&&(x="side",f=-1),s==="dance1"&&(f=1),s==="bow"&&(g=3,f=3,x="side"),s==="fear"&&(x="face",f=1),s==="point"&&(x="point"),s==="sit"&&(M=!0,h=Math.round(h*.45)),s==="lie"&&(i.translate(o,l-4),i.rotate(-Math.PI/2),i.translate(-o-10,-l+12));const y=l-h,R=y-d+f,w=R-m+(g?1:0),A=r==="s",I=r==="b",D=o-4+(A?1:0)+g,_=n.hair,S=he(_,-.3),V=he(_,.22),O=n.style,B={curls:15,long:16,longStyled:17,glam:19,rapunzel:a-9,bob:9,bobLong:11,curlyMid:10,fluffy:7,twin:6,ponytail:6,short:4,curlyShort:5,bun:5}[O]||0,F=O==="glam"||O==="curls"||O==="fluffy"||O==="curlyMid"||O==="rapunzel"?1:0;if(!A&&!I&&B>8&&(pe(i,D-1-F,w+2,10+F*2,Math.min(B,a-2),_),(O==="glam"||O==="rapunzel")&&(Z(i,D-2-F,w+8,1,B-10,S),Z(i,D+9+F,w+10,1,B-12,S)),O==="curls"))for(let it=0;it<3;it++)Z(i,D-2-it%2,w+6+it*3,2,2,it%2?V:_),Z(i,D+9+it%2,w+6+it*3,2,2,it%2?_:V);if(A&&B>8&&pe(i,D-2-F,w+2,5+F,B,_),p.includes("cape")){const it=c+4;pe(i,o-it/2+g,R+1,it,d+h-3,he(n.trim||"#a22",-.1))}p.includes("wings")&&!A&&(Z(i,o-c/2-5,R,5,7,"rgba(230,220,255,0.85)"),Z(i,o+c/2,R,5,7,"rgba(230,220,255,0.85)"),Z(i,o-c/2-4,R+7,3,3,"rgba(210,200,245,0.8)"),Z(i,o+c/2+1,R+7,3,3,"rgba(210,200,245,0.8)"));const nt=n.skirt?n.skirt==="long"?n.bottom:n.skin:n.bottom,q=n.shoes||"#222",ot=A?0:1;let pt=0,mt=0,Gt=0,qt=0;if(v===0&&(pt=-2,Gt=A?3:0,qt=A?-2:0),v===2&&(mt=-2,qt=A?3:0,Gt=A?-2:0),A?(pe(i,o-u+qt,y,u,h+mt-1,he(nt,-.15)),Z(i,o-u+qt,l-1+mt,u+1,1,q),pe(i,o-1+Gt,y,u,h+pt-1,nt),Z(i,o-1+Gt,l-1+pt,u+1,1,q)):M?(pe(i,o-u-ot,y,u,h,nt),pe(i,o+ot,y,u,h,nt),Z(i,o-u-ot,l-1,u,1,q),Z(i,o+ot,l-1,u,1,q)):(pe(i,o-u-ot+0,y,u,h+pt-1,nt),pe(i,o+ot,y,u,h+mt-1,nt),Z(i,o-u-ot,l-1+pt,u,1,q),Z(i,o+ot,l-1+mt,u,1,q)),n.skirt){const it=n.skirt==="long"?h-2:Math.round(h*.45);for(let wt=0;wt<it;wt++){const j=(A?c-2:c)+Math.min(3,Math.floor(wt/3)+1)*(n.skirt==="long",1);Z(i,o-j/2+g*(1-wt/it),y-1+wt,j,1,wt===it-1?he(n.bottom,-.25):n.bottom)}Z(i,o-c/2+g,y-1,1,it,he(n.bottom,.15))}const X=A?Math.max(5,c-3):c,tt=o-X/2+g;pe(i,tt,R,X,d+(n.skirt?0:1),n.top),p.includes("coat")&&pe(i,tt-1,R,X+2,d+6,n.top),p.includes("offshoulder")&&!I&&(Z(i,tt,R,X,2,n.skin),Z(i,tt,R+2,X,1,he(n.top,-.2))),n.trim&&!I&&(Z(i,o-1+g,R,A?1:2,n.skirt?2:1,n.trim),n.build==="strong"&&Z(i,tt+1,R+d-2,X-2,1,n.trim)),p.includes("scarf")&&(Z(i,tt,R,X,2,n.trim||"#e84a6f"),I||Z(i,tt+1,R+2,2,4,n.trim||"#e84a6f")),p.includes("pins")&&!I&&!A&&(Z(i,tt+X-3,R+3,1,1,"#fff"),Z(i,tt+X-2,R+5,1,1,"#4ae0c0")),p.includes("camera")&&!I&&(Z(i,o-2+g,R+4,4,3,"#222"),Z(i,o-1+g,R+5,2,1,"#8ac"),Z(i,tt+1,R,1,4,"#333"),Z(i,tt+X-2,R,1,4,"#333"));const gt=d-1,ct=v===0?1:v===2?-1:0,Ut=n.top,Nt=(it,wt,j)=>{wt==="up"?(pe(i,it,R-gt+3,2,gt-1,Ut),Z(i,it,R-gt+1,2,2,n.skin)):wt==="side"?(Z(i,it<o?it-3:it+1,R+1,4,2,Ut),Z(i,it<o?it-5:it+5,R+1,2,2,n.skin)):wt==="face"?(pe(i,it,R+1,2,3,Ut),Z(i,it<o?it+1:it-1,R-2,2,3,n.skin)):(pe(i,it,R+1+j,2,gt-2,Ut),Z(i,it,R+gt-1+j,2,2,n.skin),p.includes("bracelets")&&Z(i,it,R+gt-2+j,2,1,"#4ae0c0"))};if(A?Nt(o-1+g+(v>=0?ct*2:0),x==="point"?"side":x,0):(Nt(tt-2,x==="point"?"down":x,ct),Nt(tt+X,x==="point"?"side":x,-ct)),Z(i,D+3,w+m-1,2,2,he(n.skin,-.2)),(n.style!=="none"||n.id!=="kukolnik")&&(Z(i,D+1,w,6,1,n.skin),Z(i,D,w+1,8,m-3,n.skin),Z(i,D+1,w+m-2,6,1,n.skin),Z(i,D+7,w+2,1,m-5,he(n.skin,-.15))),!I){const it=w+4,wt=he(n.eyes,-.25);A?(Z(i,D+6,it,1,2,wt),Z(i,D+8,it+1,1,1,he(n.skin,-.12))):(Z(i,D+1,it,2,2,"#f4efe6"),Z(i,D+5,it,2,2,"#f4efe6"),Z(i,D+2,it,1,2,wt),Z(i,D+5,it,1,2,wt),n.brows==="strict"&&(Z(i,D+1,it-1,2,1,he(n.hair,-.4)),Z(i,D+5,it-1,2,1,he(n.hair,-.4))),n.lips?Z(i,D+3,w+7,2,1,n.lips):s==="fear"&&Z(i,D+3,w+7,2,1,"#412"),p.includes("freckles")&&(Z(i,D+1,it+2,1,1,he(n.skin,-.25)),Z(i,D+6,it+2,1,1,he(n.skin,-.25))),p.includes("mole")&&Z(i,D+6,it+3,1,1,"#3a1a14"),p.includes("glasses")&&(Z(i,D,it,8,1,"#222"),Z(i,D+1,it+1,2,1,"rgba(180,220,255,0.6)"),Z(i,D+5,it+1,2,1,"rgba(180,220,255,0.6)")),p.includes("visor")&&Z(i,D,it,8,2,n.trim||"#40e0d0"),p.includes("maskface")&&(Z(i,D,w+1,8,7,"#e8e4d8"),Z(i,D+1,it,2,2,"#111"),Z(i,D+5,it,2,2,"#111"),Z(i,D+2,w+7,4,1,"#111"),Z(i,D+1,w+6,1,1,"#111"),Z(i,D+6,w+6,1,1,"#111")),p.includes("maskhalf")&&(Z(i,D,it-1,8,3,"#e8c36a"),Z(i,D+2,it,1,1,"#111"),Z(i,D+5,it,1,1,"#111")))}if(O!=="none"){const it=O==="curlyMid"||O==="curlyShort";if(I)Z(i,D+1,w-1,6,1,_),pe(i,D-F,w,8+F*2,Math.max(m-2,Math.min(B,a-2)),_),B>9&&Z(i,D+3,w+4,1,B-6,S);else if(A)Z(i,D+1,w-1,6,1,_),Z(i,D-1-F,w,6+F,Math.min(Math.max(B,4),8),_),Z(i,D+5,w,3,n.bangs?3:2,_),Z(i,D,w,1,5,S);else{Z(i,D+1,w-1,6,1,_),Z(i,D-F,w,8+F*2,n.bangs?4:2,_),Z(i,D+1,w,3,1,V);const wt=Math.min(B,O==="ponytail"||O==="twin"||O==="short"||O==="bun"?4:B);Z(i,D-1-F,w+1,1+F,wt,_),Z(i,D+8,w+1,1+F,wt,S),!n.bangs&&(O==="bob"||O==="bobLong"||O==="longStyled"||O==="glam")&&(Z(i,D,w+2,2,2,_),Z(i,D+6,w+2,2,1,_)),O==="fluffy"&&(Z(i,D-2,w+1,1,4,V),Z(i,D+9,w+2,1,3,_),Z(i,D,w-2,7,1,V),Z(i,D+1,w+2,2,1,_),Z(i,D+5,w+2,2,1,_))}if(it){for(let wt=0;wt<6;wt++)Z(i,D-1+wt*2-wt%2,w-2+wt%2,2,2,wt%2?_:V);A||(Z(i,D-2,w+2,1,2,_),Z(i,D+9,w+4,1,2,_),O==="curlyMid"&&(Z(i,D-2,w+6,2,2,_),Z(i,D+8,w+7,2,2,S)))}O==="twin"&&(A?pe(i,D-2,w+2,2,8,_):(pe(i,D-3,w+2,2,8,_),pe(i,D+9,w+2,2,8,_),Z(i,D-2,w+2,1,1,"#e84a6f"),Z(i,D+9,w+2,1,1,"#e84a6f"))),O==="ponytail"&&(A?(pe(i,D-3,w+1,3,3,_),pe(i,D-4,w+3,2,9,_)):I?pe(i,D+3,w+2,2,12,S):Z(i,D+8,w-1,2,3,_)),O==="bun"&&Z(i,D+2,w-3,4,2,_),O==="rapunzel"&&!I&&(Z(i,D+8,w+a-12,6,2,_),Z(i,D+12,w+a-11,4,2,S)),(O==="longStyled"||O==="glam")&&Z(i,D+2,w,1,2,V)}p.includes("earrings")&&!I&&!A&&(Z(i,D-1,w+6,1,2,"#f4d060"),Z(i,D+8,w+6,1,2,"#f4d060")),p.includes("pearls")&&!I&&(A||(Z(i,D-1,w+6,1,1,"#f6f0e8"),Z(i,D+8,w+6,1,1,"#f6f0e8")),Z(i,o-2+g,R+1,4,1,"#f6f0e8")),p.includes("hat")&&(Z(i,D-2,w,12,1,"#2a2a2e"),pe(i,D,w-3,8,3,"#3a3a40"),Z(i,D,w-1,8,1,"#111")),p.includes("crown")&&(Z(i,D+1,w-2,6,2,"#f4d060"),Z(i,D+1,w-4,1,2,"#f4d060"),Z(i,D+3,w-4,2,2,"#f4d060"),Z(i,D+6,w-4,1,2,"#f4d060"),Z(i,D+3,w-2,2,1,"#d02040")),p.includes("headphones")&&(Z(i,D,w-2,8,1,"#222"),Z(i,D-2,w+2,2,4,"#222"),Z(i,D+8,w+2,2,4,"#222")),i.restore()}function Mv(i,t,e){const n=i.getImageData(0,0,t,e),s=n.data,r=new Uint8ClampedArray(s),o=(l,a)=>l>=0&&a>=0&&l<t&&a<e&&r[(a*t+l)*4+3]>40;for(let l=0;l<e;l++)for(let a=0;a<t;a++){if(o(a,l))continue;const c=a%Ps,u=l%ts;if(!(c===0||c===Ps-1||u===0||u===ts-1)&&(o(a-1,l)||o(a+1,l)||o(a,l-1)||o(a,l+1))){const h=(l*t+a)*4;s[h]=Aa[0],s[h+1]=Aa[1],s[h+2]=Aa[2],s[h+3]=255}}i.putImageData(n,0,0)}const Ec=new Map;function bv(i){let t=Ec.get(i);if(t)return t;const e=hn[i];if(!e)throw new Error("Нет персонажа: "+i);t=document.createElement("canvas"),t.width=Ps*Ss.length,t.height=ts*wc.length;const n=t.getContext("2d",{willReadFrequently:!0});return wc.forEach((s,r)=>Ss.forEach((o,l)=>{const a=l>=6;yv(n,l*Ps,r*ts,e,o,a&&s==="b"&&o!=="sit"&&o!=="arms"&&o!=="dance1"&&o!=="dance2"?"f":s)})),Mv(n,t.width,t.height),(i==="kukolnik"||i==="narrator")&&(n.globalCompositeOperation="source-in",n.fillStyle="#0a0808",n.fillRect(0,0,t.width,t.height)),Ec.set(i,t),t}const Tc=new Map;let Ca=null;function Sv(){return Ca||(Ca=Rs(32,32,i=>{const t=i.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,32,32)})),Ca}function $h(i){const t=i.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,0,.75,.66);t.needsUpdate=!0}class nl{constructor(t,e=t){this.id=e,this.x=0,this.z=0,this.y=0,this.dir="f",this.pose=null,this.moving=!1,this.t=Math.random()*3,this.target=null,this.hidden=!1,this.charId="",this.group=new li,this.roll=0,this.alpha=1,this.float=0,this.danceBeat=0;const n=new qn(Ps/vn,ts/vn);n.translate(0,ts/vn/2,0),$h(n),this.map=null,this.mesh=new xe(n,new _s({alphaTest:.5,side:Ye,transparent:!1})),this.mesh.castShadow=!0,this.setChar(t),this.shadow=new xe(new qn(1.5,.9),new mn({map:Sv(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.group.add(this.mesh,this.shadow)}setChar(t){if(this.charId===t)return;this.charId=t;let e=Tc.get(t);e||(e=new wh(bv(t)),e.magFilter=e.minFilter=we,e.generateMipmaps=!1,e.colorSpace=tn,Tc.set(t,e)),this.map&&this.map.dispose(),this.map=e.clone(),this.map.needsUpdate=!0,this.map.repeat.set(1/Ss.length,1/3),this.mesh.material.map=this.map,this.mesh.material.needsUpdate=!0}get def(){return hn[this.charId]}place(t,e,n){return this.x=t,this.z=e,n&&(this.dir=n),this.sync(),this}face(t,e){const n=t-this.x,s=e-this.z;this.dir=Math.abs(n)>Math.abs(s)?n>0?"r":"l":s>0?"f":"b"}walkTo(t,e,n=4){return this.target&&this.target.res(),new Promise(s=>{this.target={x:t,z:e,speed:n,res:s}})}stop(){if(this.target){const t=this.target.res;this.target=null,t()}this.moving=!1}update(t){if(this.t+=t,this.target){const e=this.target.x-this.x,n=this.target.z-this.z,s=Math.hypot(e,n),r=this.target.speed*t;if(s<=r){this.x=this.target.x,this.z=this.target.z;const o=this.target.res;this.target=null,this.moving=!1,o()}else this.x+=e/s*r,this.z+=n/s*r,this.face(this.target.x,this.target.z),this.moving=!0}this.sync()}sync(){let t=this.pose||(this.moving?"walk"+Math.floor(this.t*8)%4:"idle"+Math.floor(this.t*1.6)%2);this.pose==="dance"&&(t=Math.floor(this.danceBeat)%2?"dance1":"dance2");const e=Math.max(0,Ss.indexOf(t)),n=this.dir==="f"?0:this.dir==="b"?1:2,s=Ss.length,r=this.dir==="l";this.map.repeat.x=(r?-1:1)/s,this.map.offset.set((e+(r?1:0))/s,1-(n+1)/3),this.group.position.set(this.x,this.y+this.float,this.z),this.mesh.rotation.z=this.roll,this.group.visible=!this.hidden,this.shadow.visible=this.y+this.float<.6;const o=this.mesh.material;this.alpha<1?(o.transparent=!0,o.opacity=this.alpha,o.alphaTest=.05):o.transparent&&(o.transparent=!1,o.opacity=1,o.alphaTest=.5)}dispose(){this.map.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}class Xh{constructor(t,e){this.id=t,this.def=e,this.group=new li,this.boxes=[],this.inters=[],this.triggers=[],this.actors=[],this.spawns={},this.masked=[],this.updaters=[],this.photos=[],this.guards=[],this.lasers=[],this.occluders=[],this.flick=[],this.named={}}actor(t){return this.actors.find(e=>e.id===t)}inter(t){return this.inters.find(e=>e.id===t)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.userData.own&&n.map.dispose(),n.dispose()}});for(const t of this.actors)t.dispose()}}class Yh{constructor(t,e){this.room=t,this.G=e}get w(){return this.room.def.w}get d(){return this.room.def.d}mat(t,e="plaster"){return t.color&&!t.tex?new _s({color:t.color,emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1}):new _s({map:qh(t.tex||e,t.tint),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1})}texBox(t,e,n,s,r){const o=new ui(t,e,n),l=this.mat(s,r);if(l.map){const a=l.map.unit||2,c=o.attributes.uv,u=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let h=0;h<6;h++)for(let d=0;d<4;d++){const m=h*4+d;c.setXY(m,c.getX(m)*u[h][0]/a,c.getY(m)*u[h][1]/a)}}return new xe(o,l)}tag(t,e,n){e.mask&&this.room.masked.push({obj:t,mask:e.mask,box:n}),e.name&&(this.room.named[e.name]=t)}floor(t="floor",e={}){const n=e.apron??(e.d==null&&e.z==null&&!e.y?7:0),s=this.texBox(e.w||this.w,.4,(e.d||this.d)+n,{tex:t,...e});return s.position.set(e.x||0,-.2+(e.y||0),(e.z||0)+n/2),s.receiveShadow=!0,this.room.group.add(s),this.tag(s,e),s}walls(t="plaster",e={}){const n=e.h||5,s=this.w,r=this.d,o=.4,l=(a,c,u,h)=>{const d=this.texBox(a,n,c,{tex:t,...e});return d.position.set(u,n/2,h),d.receiveShadow=!0,this.room.group.add(d),d};if(e.n!==!1&&l(s+o*2,o,0,-r/2-o/2),e.w!==!1&&l(o,r,-s/2-o/2,0),e.e!==!1&&l(o,r,s/2+o/2,0),e.trim){const a=this.texBox(s,.5,.1,{tex:e.trim});a.position.set(0,.25,-r/2+.05),this.room.group.add(a);const c=this.texBox(s,.3,.15,{tex:e.trim});c.position.set(0,n-.15,-r/2+.07),this.room.group.add(c)}}collider(t,e,n,s){const r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),on:!0};return this.room.boxes.push(r),r}box(t,e,n,s,r,o={}){const l=this.texBox(n,r,s,o,"wood");l.position.set(t,(o.y||0)+r/2,e),l.castShadow=o.cast!==!1,l.receiveShadow=!0,o.ry&&(l.rotation.y=o.ry),this.room.group.add(l);let a;return o.solid!==!1&&!(o.y>2.2)&&(a=this.collider(t-n/2,e-s/2,t+n/2,e+s/2),l.userData.box=a),this.tag(l,o,a),l}decal(t,e={}){const n=t.image,s=e.w||n.width/vn,r=e.h||n.height/vn,o=e.glow?new mn({map:t,transparent:!0,alphaTest:.1,color:e.color||16777215}):new _s({map:t,transparent:!0,alphaTest:.1});e.opacity!=null&&(o.opacity=e.opacity,o.alphaTest=.01);const l=new xe(new qn(s,r),o),a=e.y??2.4;return e.wall==="w"?(l.position.set(-this.w/2+.03,a,e.at||0),l.rotation.y=Math.PI/2):e.wall==="e"?(l.position.set(this.w/2-.03,a,e.at||0),l.rotation.y=-Math.PI/2):e.flat?(l.position.set(e.x||0,e.y??.03,e.z||0),l.rotation.x=-Math.PI/2):l.position.set(e.x??e.at??0,a,e.z??-this.d/2+.03),e.ry&&(l.rotation.y=e.ry),l.receiveShadow=!e.glow,this.room.group.add(l),this.tag(l,e),l}poster(t,e,n={}){return this.decal(gv(t,e,n),n)}sprite(t,e,n,s={}){const r=typeof t=="string"?vv(t):t,o=r.image,l=s.scale||1,a=o.width/vn*l,c=o.height/vn*l,u=new qn(a,c);u.translate(0,c/2,0),s.glow||$h(u);const h=s.glow?new mn({map:r,alphaTest:.3,side:Ye,transparent:s.opacity!=null,opacity:s.opacity??1}):new _s({map:r,alphaTest:.3,side:Ye,emissive:s.emissive||0}),d=new xe(u,h);d.position.set(e,s.y||0,n),d.castShadow=s.cast!==!1&&!s.glow,s.flipX&&(d.scale.x=-1),this.room.group.add(d);let m;if(s.solid){const p=s.solid===!0?Math.min(a,1.2)/2:s.solid;m=this.collider(e-p,n-.3,e+p,n+.3),d.userData.box=m}return this.tag(d,s,m),d}actor(t,e,n,s={}){const r=new nl(t,s.id||t);return r.place(e,n,s.dir||"f"),s.pose&&(r.pose=s.pose),r.mask=s.mask,s.hidden&&(r.hidden=!0),this.room.actors.push(r),this.room.group.add(r.group),s.mask&&this.room.masked.push({obj:r.group,mask:s.mask}),r}inter(t,e,n,s){const r={id:t,x:e,z:n,r:s.r||1.7,label:s.label,fn:s.fn,mask:s.mask,cond:s.cond,y:s.y??2.2,enabled:!0,quiet:s.quiet};if(!s.quiet){const o=new xe(new jo(.13),new mn({color:16771488}));o.position.set(e,r.y+.5,n),r.marker=o,this.room.group.add(o)}return this.room.inters.push(r),s.photo&&this.photo(t,s.photo,e,n,{cond:s.cond,mask:s.mask}),r}look(t,e,n,s,r,o={}){return this.inter(t,e,n,{label:s,fn:typeof r=="function"?r:l=>l.run(r),...o})}npc(t,e,n,s={}){const r=this.actor(t,e,n,s),o=this.collider(e-.4,n-.25,e+.4,n+.25);return r.box=o,s.mask&&this.room.masked.push({obj:new me,mask:s.mask,box:o}),s.talk&&this.inter(s.id||t,e,n+.2,{label:s.label||"Поговорить: "+hn[t].name,fn:async l=>{r.face(l.player.x,l.player.z),l.player.face(r.x,r.z),await(typeof s.talk=="function"?s.talk(l,r):l.run(s.talk))},r:1.9,y:2.6,mask:s.mask,cond:s.cond}),r}door(t,e,n){const s=n.col||"#45301f",r=n.w||2.2,o=n.h||3.4,l=Rs(Math.round(r*vn),Math.round(o*vn),(h,d,m)=>{h.fillStyle="#1a120e",h.fillRect(0,0,d,m),h.fillStyle=s,h.fillRect(2,2,d-4,m-2),h.fillStyle="rgba(0,0,0,0.25)",h.fillRect(5,6,d-10,m*.4),h.fillRect(5,m*.52,d-10,m*.4),h.fillStyle="rgba(255,255,255,0.12)",h.fillRect(2,2,2,m),h.fillStyle="#d4ae48",h.fillRect(d-9,m*.5,3,3),n.sign&&(h.fillStyle="#e2d5ac",h.fillRect(6,9,d-12,9),To(h,n.sign,d/2,9,{size:7,align:"center",col:"#3a1a14"}))},"door|"+s+r+o+(n.sign||""));let a=e,c,u;if(n.wall==="w"||n.wall==="e")u=this.decal(l,{wall:n.wall,at:e,y:o/2,glow:!!n.glow,color:n.glow,mask:n.mask}),a=(n.wall==="w"?-1:1)*(this.w/2-.9),c=e;else if(n.wall==="s")u=this.decal(Rs(32,32,h=>{h.fillStyle="rgba(240,212,120,0.85)",h.beginPath(),h.moveTo(16,30),h.lineTo(4,14),h.lineTo(11,14),h.lineTo(11,2),h.lineTo(21,2),h.lineTo(21,14),h.lineTo(28,14),h.closePath(),h.fill()},"arrowS"),{flat:!0,x:e,z:this.d/2-.9,y:.03,w:1.4,h:1.4,glow:!0}),c=this.d/2-.9;else{const h=n.z??-this.d/2+.04;u=this.decal(l,{x:e,z:h,y:o/2,glow:!!n.glow,color:n.glow,mask:n.mask}),c=h+.9}return this.inter(t,a,c,{label:n.label,mask:n.mask,y:3.2,fn:async h=>{if(n.cond&&!n.cond()){h.sfx("locked"),n.locked&&await h.run(typeof n.locked=="string"?["~: "+n.locked]:n.locked);return}if(n.fn)return n.fn(h);h.sfx(n.wall==="s"?"step":"door"),await h.goto(n.to,n.spot||"start",{fade:n.fade})}}),u}wall(t,e,n,s,r={}){const o=Math.abs(n-t)||.4,l=Math.abs(s-e)||.4,a=r.h||4.2,c=this.box((t+n)/2,(e+s)/2,o,l,a,{tex:r.tex||"plaster",tint:r.tint,...r}),u=c.material;if(u.transparent=!0,this.room.occluders.push({mesh:c,x0:Math.min(t,n)-.4,x1:Math.max(t,n)+.4,z:Math.max(e,s),h:a}),r.trim!==!1){const h=this.box((t+n)/2,(e+s)/2,o+.06,l+.06,.25,{tex:"darkwood",y:a-.25,solid:!1,cast:!1}),d=h.material;d.transparent=!0,this.room.occluders.push({mesh:h,x0:Math.min(t,n)-.4,x1:Math.max(t,n)+.4,z:Math.max(e,s),h:a})}return c}stairs(t,e,n,s=8,r={}){const o=new li;for(let l=0;l<s;l++){const a=this.texBox(n,.28,.5,{tex:r.tex||"stage"});if(a.position.set(t,.14+l*.28,e-l*.5),a.receiveShadow=!0,a.castShadow=!0,o.add(a),r.runner!==!1){const c=this.texBox(n*.55,.02,.52,{tex:"carpet"});c.position.set(t,.29+l*.28,e-l*.5),o.add(c)}}return this.room.group.add(o),this.collider(t-n/2,e-s*.5,t+n/2,e-.6),o}spawn(t,e,n,s="f"){this.room.spawns[t]={x:e,z:n,dir:s}}ambient(t,e,n){const s=n!=null?new Bg(n,t,e):new qg(t,e);return this.room.group.add(s),s}sun(t,e,n=6,s=14,r=8){const o=new Wg(t,e);o.position.set(n,s,r),o.castShadow=!0,o.shadow.mapSize.set(1024,1024);const l=Math.max(this.w,this.d)/2+4;return Object.assign(o.shadow.camera,{left:-l,right:l,top:l,bottom:-l,near:1,far:60}),o.shadow.bias=-.002,this.room.group.add(o,o.target),o}light(t,e,n,s,r,o=12,l={}){const a=new wo(s,r,o,1.4);return a.position.set(t,e,n),this.room.group.add(a),l.flicker&&this.room.flick.push({l:a,base:r,s:l.flicker}),l.mask&&this.room.masked.push({obj:a,mask:l.mask}),l.name&&(this.room.named[l.name]=a),a}spot(t,e,n,s,r,o,l,a={}){const c=new Vg(o,l,a.dist||40,a.angle||.45,a.pen??.5,1.1);if(c.position.set(t,e,n),c.target.position.set(s,0,r),a.shadow!==!1&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.bias=-.003,c.shadow.camera.near=1,c.shadow.camera.far=50),this.room.group.add(c,c.target),a.cone){const u=Math.hypot(s-t,e,r-n),h=Math.tan(a.angle||.45)*u,d=new Ko(h,u,20,1,!0);d.translate(0,-u/2,0),d.rotateX(-Math.PI/2);const m=new xe(d,new mn({color:o,transparent:!0,opacity:a.cone===!0?.07:a.cone,side:Ye,depthWrite:!1,blending:ws}));m.position.set(t,e,n),m.lookAt(s,0,r),m.rotateY(Math.PI),this.room.group.add(m),c.cone=m}return a.name&&(this.room.named[a.name]=c),a.mask&&this.room.masked.push({obj:c,mask:a.mask}),c}trigger(t,e,n,s,r,o=!0){const l={x0:t,z0:e,x1:n,z1:s,fn:r,once:o,done:!1,inside:!1};return this.room.triggers.push(l),l}photo(t,e,n,s,r={}){this.room.photos.push({id:t,name:e,x:n,z:s,cond:r.cond,mask:r.mask})}onUpdate(t){this.room.updaters.push(t)}particles(t,e={}){const n=e.count||(t==="rain"?500:120),s=this.w+4,r=this.d+4,o=e.top||9,l=new Float32Array(n*3),a=new Float32Array(n);for(let m=0;m<n;m++)l[m*3]=(Math.random()-.5)*s,l[m*3+1]=Math.random()*o,l[m*3+2]=(Math.random()-.5)*r,a[m]=.5+Math.random();const c=new Ae;c.setAttribute("position",new Ze(l,3));const u={dust:16771264,rain:10139872,petals:16298192,sparks:16760928,snow:16777215,confetti:16765024,glitch:6356960}[t],h=new sg(c,new Sh({color:e.color||u,size:t==="rain"?.09:t==="dust"?.07:.14,transparent:!0,opacity:t==="dust"?.5:.8,depthWrite:!1,blending:t==="petals"||t==="snow"?ci:ws}));this.room.group.add(h);const d={dust:.15,rain:18,petals:1.2,sparks:-1.5,snow:1,confetti:2,glitch:-3}[t];return this.onUpdate((m,p)=>{if(h.visible){for(let v=0;v<n;v++)l[v*3+1]-=d*a[v]*m,t!=="rain"&&(l[v*3]+=Math.sin(p*a[v]+v)*m*.3),l[v*3+1]<0&&(l[v*3+1]=o),l[v*3+1]>o&&(l[v*3+1]=0);c.attributes.position.needsUpdate=!0}}),e.name&&(this.room.named[e.name]=h),this.tag(h,e),h}guard(t,e,n){const s=this.actor(t,e[0][0],e[0][1],{id:n.id});s.mesh.material.emissive.set(3814456);const r=new wo(n.color||16728128,3,3,1.5);r.position.set(0,2.6,.4),s.group.add(r);const o=n.range||5,l=n.half||.5,a=new Xo(o,16,-l,l*2);a.rotateX(-Math.PI/2);const c=new xe(a,new mn({color:n.color||16728128,transparent:!0,opacity:.14,depthWrite:!1}));c.position.y=.05,this.room.group.add(c);const u={actor:s,path:e,i:0,speed:n.speed||2.2,range:o,half:l,cone:c,wait:0,onCatch:n.onCatch,ang:0,off:0,pause:n.pause??.8,active:!0};return this.room.guards.push(u),u}laser(t,e,n,s,r){const o=Math.hypot(n-t,s-e),l=new xe(new ui(o,.08,.08),new mn({color:r.color||16719952}));l.position.set((t+n)/2,1,(e+s)/2),l.rotation.y=-Math.atan2(s-e,n-t),this.room.group.add(l);const a=l.clone();a.position.y=1.9,l.add(a),a.position.set(0,.9,0),a.rotation.set(0,0,0);const c={mesh:l,x0:t,z0:e,x1:n,z1:s,period:r.period||3,duty:r.duty??.5,phase:r.phase||0,on:!0,onHit:r.onHit,active:!0};return this.room.lasers.push(c),c}crowd(t,e,n,s,r=1.5,o=1.6,l="b"){t.forEach((a,c)=>this.actor(a,e+c%s*r+Math.floor(c/s)%2*.5,n+Math.floor(c/s)*o,{dir:l,id:"crowd_"+c+"_"+a}))}table(t,e,n=2.4,s=1.2,r={}){const o=this.box(t,e,n,s,.15,{tex:r.tex||"wood",y:1,...r});for(const[l,a]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(t+l*(n/2-.15),e+a*(s/2-.15),.15,.15,1,{tex:"darkwood",solid:!1,mask:r.mask});return o}curtain(t,e,n,s=6,r={}){return this.box(t,e,n,.3,s,{tex:"velvet",solid:r.solid??!1,...r})}}const Zv=Object.freeze(Object.defineProperty({__proto__:null,Actor:nl,Builder:Yh,Room:Xh},Symbol.toStringTag,{value:"Module"})),fr="e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12",Ra="e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12",Ac="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .",Cc=". a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .",wv="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .",Rc={theater:{bpm:92,parts:[{inst:"box",d:4,seq:fr+" | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12"},{inst:"upright",d:4,seq:Ac,vol:.8},{inst:"piano",d:4,seq:Cc,vol:.5},{inst:"drone",seq:"a1:96 .:96",vol:.5}]},backstage:{bpm:60,parts:[{inst:"drone",seq:"d2:40 .:24",vol:.7},{inst:"box",seq:"a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30",vol:.7},{inst:"piano",seq:".:50 d3:6 .:44 a2:6 .:21",vol:.5}]},horror:{bpm:50,parts:[{inst:"drone",seq:"c2:48 c#2:16",vol:.9},{inst:"piano",seq:"eb6:2 .:30 d6:2 .:14 f#5:2 .:53",vol:.5},{inst:"piano",seq:"c2:4 .:75",vol:.8},{inst:"box",seq:".:37 g5:1 gb5:1 f5:2 .:60",vol:.4}]},heist:{bpm:118,parts:[{inst:"drums",seq:"k.h.s.h.k.h.s.hhk.h.s.h.k.khs.h.",vol:.8},{inst:"bass",d:2,seq:"d2 d2 d3 d2 d2 d3 d2 f2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 | f2 f2 f3 f2 f2 f3 f2 e2 | c2 c2 c3 c2 c2 c3 c2 c#2"},{inst:"pluck",d:1,vol:.55,seq:"d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 a4 f4 d4 f4 a4 d5 | bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 f4 d4 bb3 d4 f4 bb4 | f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 c5 a4 f4 a4 c5 f5 | c4 e4 g4 c5 g4 e4 c4 e4 g4 c5 g4 e4 c4 e4 g4 c5"},{inst:"lead",d:2,vol:.8,seq:".:64 | a5:4 . f5 d5:4 .:4 | d5 f5 g5:4 f5:8 | a5:4 . c6 a5:4 f5:4 | g5:6 e5 c5:8"},{inst:"pad",seq:"d3+a3:16 bb2+f3:16 f3+c4:16 c3+g3:16"}]},chase:{bpm:140,parts:[{inst:"drums",seq:"k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs",vol:.9},{inst:"bass",d:1,seq:"d2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2"},{inst:"lead",d:2,vol:.8,seq:"d5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4"},{inst:"pad",seq:"d3+a3:32 bb2+f3:32"}]},school:{bpm:104,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 c3 a2 a2 f2 f2 g2 g2"},{inst:"pluck",d:2,vol:.7,seq:"e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},school_soft:{bpm:76,parts:[{inst:"piano",d:8,vol:.7,seq:"c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4"},{inst:"box",d:4,vol:.7,seq:".:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16"},{inst:"pad",seq:"c3+g3:32 f3+c4:16 g3+d4:16",vol:.8}]},noir:{bpm:96,swing:.33,parts:[{inst:"upright",d:4,seq:"d2 f2 a2 c3 | g2 bb2 d3 f3 | e2 g2 a2 c#3 | d3 a2 f2 a2 | d2 e2 f2 a2 | bb2 a2 g2 f2 | e2 bb2 a2 e2 | d2 a2 d2 ."},{inst:"drums",seq:"b..bb..bb..bb.rb",vol:.8},{inst:"piano",d:1,vol:.6,seq:".:6 f3+a3+c4+e4:2 .:8 | .:6 f3+bb3+d4:2 .:3 f3+bb3+d4:2 .:3 | .:6 g3+bb3+d4:2 .:2 g3+c#4+e4:2 .:4 | .:10 f3+a3+c4+e4:3 .:3"},{inst:"sax",d:2,vol:.8,seq:".:8 a4:6 c5 | d5:8 .:4 f5 e5 | d5:4 c5 a4 g4:8 | a4:12 .:4 | .:4 d5 f5 a5:6 g5 | f5:4 d5:4 c5 d5:6 | e5:4 g5 f5 e5:4 c#5:4 | d5:12 .:4"}]},fairy:{bpm:92,parts:[{inst:"box",d:4,seq:"c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12"},{inst:"upright",d:12,vol:.7,seq:"f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2"},{inst:"pluck",d:2,vol:.5,seq:"f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6"},{inst:"strings",vol:.6,seq:".:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12"}]},idol_agency:{bpm:128,parts:[{inst:"drums",seq:"k.h.k.h.k.h.k.h.",tag:"drums"},{inst:"drums",seq:"....c.......c...",tag:"drums",vol:.8},{inst:"bass",d:2,tag:"bass",seq:"c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1"},{inst:"pad",tag:"keys",seq:"c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16"},{inst:"lead",d:2,tag:"lead",seq:"e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8"}]},idol_own:{bpm:122,parts:[{inst:"drums",seq:"k..hs.hk.khhs.h.",tag:"drums"},{inst:"bass",d:2,tag:"bass",seq:"a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 ."},{inst:"pad",tag:"keys",seq:"a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16"},{inst:"pluck",d:1,tag:"arp",vol:.5,seq:"a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5"},{inst:"sax",d:2,tag:"lead",vol:.9,seq:"a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8"}]},diva:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"strings",d:2,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"drums",seq:"r..r..r.r..r..r.",vol:.6}]},collapse:{bpm:138,parts:[{inst:"box",d:3,seq:"e5 a5 c6 b5 g#5 a5 e5 c5 d5"},{inst:"bass",d:7,seq:"a1 d2 e2 c2"},{inst:"drums",seq:"k..k.s.k.h..s.kh",vol:.7},{inst:"drums",seq:"..h..h.h.t",vol:.5},{inst:"pad",seq:"a2+eb3:32 bb2+e3:32"},{inst:"sax",d:5,vol:.4,seq:"a4 . d5 . c#5 ."}]},dressing:{bpm:66,parts:[{inst:"box",d:4,seq:fr,vol:.8},{inst:"pad",seq:"a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12",vol:.9}]},fin_overture:{bpm:108,parts:[{inst:"strings",d:4,seq:fr,vol:1.2},{inst:"organ",d:4,seq:Cc,vol:.9},{inst:"upright",d:4,seq:Ac},{inst:"drums",seq:"t...h...h...",vol:.5}]},fin_queen:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"voice",d:2,vol:.9,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"strings",d:16,vol:.8,seq:"a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4"},{inst:"drums",seq:"r..r..r.r..r..r.k.......s.......",vol:.6}]},fin_girl:{bpm:100,parts:[{inst:"voice",d:4,seq:Ra,vol:.8},{inst:"pluck",d:2,vol:.6,seq:"a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6"},{inst:"upright",d:4,seq:wv,vol:.7},{inst:"strings",vol:.5,seq:".:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12"}]},fin_mirror:{bpm:126,parts:[{inst:"drums",seq:"k..hs..hk.k.s.hh",vol:.9},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3"},{inst:"strings",d:1,vol:.6,seq:"a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 ."},{inst:"lead",d:2,seq:"e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4"},{inst:"voice",d:16,vol:.5,seq:"a4 b4 a4 g#4 c5 b4 d5 c#5"}]},fin_reveal:{bpm:66,parts:[{inst:"box",d:4,seq:Ra},{inst:"pad",seq:".:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12",vol:.9},{inst:"voice",d:12,vol:.35,seq:".:96 e4 e4 e4 f#4 f#4 e4 d4 c#4"}]},fin_bows:{bpm:120,parts:[{inst:"drums",seq:"k.h.s.h.k.k.s.hh",vol:.8},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 ."},{inst:"organ",seq:"a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16"},{inst:"lead",d:2,seq:"e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4"},{inst:"strings",d:4,vol:.8,seq:"c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5"}]},party:{bpm:96,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 e3 f2 a2 g2 b2 c3 g2"},{inst:"box",d:2,seq:"g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},musicbox:{bpm:70,swing:.12,vol:.9,parts:[{inst:"box",d:4,seq:fr+" | .:12 | e6:4 c6:4 a5:4 | b5:8 g#5:4 | e5:12 | .:24"},{inst:"box",d:4,vol:.45,seq:"a3 . e4 | e3 . b3 | a3 . e4 | d3 . a3 | d3 . f3 | c3 . g3 | e3 . g#3 | a3 . c4 | a3 . e4 | a3 . e4 | e3 . b3 | e3 . g#3 | a3 . e4 | a3 . . | .:12"},{inst:"pad",seq:"a2+e3:96 .:96",vol:.35}]},morning:{bpm:60,parts:[{inst:"box",d:4,seq:Ra,vol:.7},{inst:"pad",seq:"a2+e3:48 d3+a3:24 e3+b3:24",vol:.7}]}},Ev={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function Tv(i){const t=/^([a-g])([#b]?)(-?\d)$/.exec(i);if(!t)return console.warn("[audio] неизвестная нота",i),440;const e=Ev[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)+(parseInt(t[3])+1)*12;return 440*Math.pow(2,(e-69)/12)}const Pc=new Map;function Lc(i){let t=Pc.get(i);if(t)return t;const e=[];let n=0;if(i.inst==="drums"&&!i.seq.includes(" "))for(const s of i.seq.replace(/\|/g,""))s!=="."&&e.push({step:n,len:1,notes:[s]}),n++;else for(const s of i.seq.split(/\s+/)){if(!s||s==="|")continue;const[r,o]=s.split(":"),l=o?parseFloat(o):i.d||1;r!=="."&&e.push({step:n,len:l,notes:r.split("+")}),n+=l}return t={evs:e,len:n},Pc.set(i,t),t}class Av{constructor(){this.ctx=null,this.cur=null,this.timer=null,this.amb=null,this.partFilter=null,this.musicFx=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[audio] WebAudio недоступен — игра продолжит работу без звука");return}const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),this.bMusic=e.createGain(),this.bSfx=e.createGain(),this.bVoice=e.createGain(),this.duckG=e.createGain(),this.musicFx=e.createBiquadFilter(),this.musicFx.type="lowpass",this.musicFx.frequency.value=2e4,this.bMusic.connect(this.musicFx),this.musicFx.connect(this.duckG),this.duckG.connect(n),this.bSfx.connect(n),this.bVoice.connect(n);const r=(this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate)).getChannelData(0);for(let l=0;l<r.length;l++)r[l]=Math.random()*2-1;const o=e.createBuffer(2,e.sampleRate*2.2,e.sampleRate);for(let l=0;l<2;l++){const a=o.getChannelData(l);for(let c=0;c<a.length;c++)a[c]=(Math.random()*2-1)*Math.pow(1-c/a.length,2.6)}this.rev=e.createConvolver(),this.rev.buffer=o,this.revG=e.createGain(),this.revG.gain.value=.22,this.rev.connect(this.revG),this.revG.connect(n),this.applyVolumes(),this.timer=setInterval(()=>this.tick(),40)}applyVolumes(){this.ctx&&(this.bMusic.gain.value=Se.music*.5,this.bSfx.gain.value=Se.sfx*.8,this.bVoice.gain.value=Se.voice*.5)}now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3}duck(t){this.ctx&&this.duckG.gain.setTargetAtTime(t?.55:1,this.ctx.currentTime,.15)}muffle(t){this.ctx&&this.musicFx&&this.musicFx.frequency.setTargetAtTime(t,this.ctx.currentTime,.2)}stepDur(t){return 60/t.bpm/4}music(t,e={}){if(!this.ctx)return this.now();if(this.cur&&this.cur.id===t&&!e.restart)return this.cur.t0;const n=this.ctx.currentTime,s=e.fade??1.2;if(this.cur){const a=this.cur.gain;a.gain.cancelScheduledValues(n),a.gain.setValueAtTime(a.gain.value,n),a.gain.linearRampToValueAtTime(0,n+s),setTimeout(()=>a.disconnect(),s*1e3+300),this.cur=null}if(!t)return n;const r=Rc[t];if(!r)return console.warn("[audio] нет трека",t),n;const o=this.ctx.createGain();o.gain.setValueAtTime(0,n),o.gain.linearRampToValueAtTime(r.vol??1,n+Math.min(s,.6)+.05),o.connect(this.bMusic);const l=n+(e.delay??.12);return this.cur={id:t,tr:r,t0:l,gain:o,next:r.parts.map(()=>0)},l}musicId(){return this.cur?this.cur.id:null}tick(){const t=this.cur;if(!t||!this.ctx)return;const e=this.ctx.currentTime+.25,n=this.stepDur(t.tr);t.tr.parts.forEach((s,r)=>{const{evs:o,len:l}=Lc(s);if(!(!o.length||!l))for(;;){const a=t.next[r],c=Math.floor(a/o.length),u=o[a%o.length];if(t.tr.once&&c>0)break;let h=t.t0+(c*l+u.step)*n;if(t.tr.swing&&u.step%2===1&&(h+=n*t.tr.swing),h>e)break;if(t.next[r]++,!(h<this.ctx.currentTime-.05)&&!(this.partFilter&&!this.partFilter(t.id,s)))for(const d of u.notes)this.voice(s.inst,d,h,u.len*n,s.vol??1,t.gain)}})}env(t,e,n,s,r,o,l,a){t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(a,e+n),t.exponentialRampToValueAtTime(Math.max(a*r,1e-4),e+n+s),t.setValueAtTime(Math.max(a*r,1e-4),Math.max(e+o,e+n+s)),t.exponentialRampToValueAtTime(1e-4,Math.max(e+o,e+n+s)+l)}osc(t,e,n,s,r,o=0){const l=this.ctx.createOscillator();return l.type=t,l.frequency.setValueAtTime(e,n),l.detune.value=o,l.connect(r),l.start(n),l.stop(s),l}noise(t,e,n,s=1){const r=this.ctx.createBufferSource();return r.buffer=this.noiseBuf,r.playbackRate.value=s,r.loop=!0,r.connect(n),r.start(t,Math.random()),r.stop(t+e),r}voice(t,e,n,s,r,o){const l=this.ctx;if(!l)return;const a=l.createGain();a.connect(o);const c=h=>{const d=l.createGain();d.gain.value=h,a.connect(d),d.connect(this.rev)};if(t==="drums"){if(e==="k"){const h=l.createOscillator();h.frequency.setValueAtTime(150,n),h.frequency.exponentialRampToValueAtTime(42,n+.12),h.connect(a),a.gain.setValueAtTime(.9*r,n),a.gain.exponentialRampToValueAtTime(.001,n+.22),h.start(n),h.stop(n+.25)}else if(e==="s"||e==="c"||e==="r"){const h=l.createBiquadFilter();h.type=e==="r"?"bandpass":"highpass",h.frequency.value=e==="c"?1200:e==="r"?1800:1500,h.connect(a),this.noise(n,.2,h),a.gain.setValueAtTime((e==="r"?.25:.5)*r,n),a.gain.exponentialRampToValueAtTime(.001,n+(e==="r"?.05:.16)),e!=="r"&&c(.2)}else if(e==="h"||e==="o"||e==="b"){const h=l.createBiquadFilter();h.type="highpass",h.frequency.value=e==="b"?4e3:7e3,h.connect(a),this.noise(n,.3,h);const d=e==="o"?.22:e==="b"?.12:.04;a.gain.setValueAtTime((e==="b"?.16:.2)*r,n),a.gain.exponentialRampToValueAtTime(.001,n+d)}else if(e==="t"){const h=l.createOscillator();h.frequency.setValueAtTime(200,n),h.frequency.exponentialRampToValueAtTime(90,n+.15),h.connect(a),a.gain.setValueAtTime(.5*r,n),a.gain.exponentialRampToValueAtTime(.001,n+.2),h.start(n),h.stop(n+.22)}return}const u=Tv(e);switch(t){case"piano":{this.env(a.gain,n,.005,.25,.25,s,.4,.26*r);const h=n+s+.6;this.osc("triangle",u,n,h,a);const d=l.createGain();d.gain.value=.3,d.connect(a),this.osc("sine",u*2,n,h,d),c(.35);break}case"box":{this.env(a.gain,n,.002,.5,.05,Math.min(s,.3),.9,.2*r);const h=n+1.6;this.osc("sine",u,n,h,a);const d=l.createGain();d.gain.value=.25,d.connect(a),this.osc("sine",u*3.01,n,h,d),c(.5);break}case"bass":{const h=l.createBiquadFilter();h.type="lowpass",h.frequency.setValueAtTime(900,n),h.frequency.exponentialRampToValueAtTime(220,n+.2),h.connect(a),this.env(a.gain,n,.005,.1,.7,s*.9,.08,.34*r),this.osc("sawtooth",u,n,n+s+.2,h),this.osc("square",u/2,n,n+s+.2,h,4);break}case"upright":{const h=l.createBiquadFilter();h.type="lowpass",h.frequency.value=600,h.connect(a),this.env(a.gain,n,.008,.25,.2,s*.8,.15,.5*r),this.osc("triangle",u,n,n+s+.3,h),this.osc("sine",u*2,n,n+s+.3,h);break}case"pad":case"strings":{const h=l.createBiquadFilter();h.type="lowpass",h.frequency.value=t==="pad"?900:2200,h.connect(a);const d=t==="pad"?.35:.12;this.env(a.gain,n,Math.min(d,s*.5),.2,.85,s,.5,.075*r);const m=n+s+.7;this.osc("sawtooth",u,n,m,h,-7),this.osc("sawtooth",u,n,m,h,8),c(.5);break}case"lead":case"pluck":{const h=l.createBiquadFilter();h.type="lowpass",h.Q.value=4,h.frequency.setValueAtTime(t==="pluck"?3500:2600,n),h.frequency.exponentialRampToValueAtTime(t==="pluck"?500:1400,n+.25),h.connect(a),this.env(a.gain,n,.006,.15,t==="pluck"?.15:.6,s*.95,.12,.13*r);const d=n+s+.3;this.osc(t==="pluck"?"sawtooth":"square",u,n,d,h),this.osc("sawtooth",u,n,d,h,9),c(.25);break}case"sax":case"voice":{const h=l.createOscillator();h.type="sawtooth",h.frequency.setValueAtTime(u*.985,n),h.frequency.linearRampToValueAtTime(u,n+.07);const d=l.createOscillator(),m=l.createGain();d.frequency.value=t==="sax"?5.2:5.8,m.gain.setValueAtTime(0,n),m.gain.linearRampToValueAtTime(u*.012,n+Math.min(.3,s)),d.connect(m),m.connect(h.frequency);const p=n+s+.25,v=l.createGain();v.connect(a);const f=t==="sax"?[[700,3,1],[1500,4,.5]]:[[800,6,1],[1150,7,.6],[2900,8,.25]];for(const[g,x,M]of f){const y=l.createBiquadFilter();y.type="bandpass",y.frequency.value=g,y.Q.value=x;const R=l.createGain();R.gain.value=M,h.connect(y),y.connect(R),R.connect(v)}this.env(a.gain,n,.05,.1,.85,s*.95,.18,(t==="sax"?.5:.55)*r),h.start(n),h.stop(p),d.start(n),d.stop(p),c(.4);break}case"organ":{this.env(a.gain,n,.02,.05,.9,s,.1,.07*r);const h=n+s+.2;for(const[d,m]of[[1,1],[2,.5],[3,.25],[4,.2]]){const p=l.createGain();p.gain.value=m,p.connect(a),this.osc("sine",u*d,n,h,p)}c(.3);break}case"drone":{const h=l.createBiquadFilter();h.type="lowpass",h.frequency.value=300,h.connect(a),this.env(a.gain,n,Math.min(1.2,s*.4),.3,.9,s,1.2,.2*r);const d=n+s+1.4;this.osc("sawtooth",u,n,d,h,-12),this.osc("sine",u,n,d,h,9),this.osc("sine",u*1.5,n,d,h,3),c(.6);break}default:console.warn("[audio] нет инструмента",t)}}sfx(t,e={}){const n=this.ctx;if(!n)return;const s=n.currentTime+.005,r=n.createGain();r.connect(this.bSfx);const o=c=>{const u=n.createGain();u.gain.value=c,r.connect(u),u.connect(this.rev)},l=(c,u,h,d,m=s,p=1,v)=>{const f=n.createBiquadFilter();f.type=c,f.frequency.setValueAtTime(u,m),v&&f.frequency.exponentialRampToValueAtTime(v,m+h),f.Q.value=p;const g=n.createGain();g.gain.setValueAtTime(d,m),g.gain.exponentialRampToValueAtTime(.001,m+h),f.connect(g),g.connect(r),this.noise(m,h+.05,f)},a=(c,u,h,d,m,p=s)=>{const v=n.createOscillator();v.type=c,v.frequency.setValueAtTime(u,p),h!==u&&v.frequency.exponentialRampToValueAtTime(h,p+d);const f=n.createGain();f.gain.setValueAtTime(m,p),f.gain.exponentialRampToValueAtTime(.001,p+d),v.connect(f),f.connect(r),v.start(p),v.stop(p+d+.02)};switch(t){case"step":{const c=e.mat||"wood";l(c==="metal"?"bandpass":"lowpass",(c==="wood"?300:c==="stone"?900:c==="metal"?2200:c==="grass"?2600:c==="carpet"?180:500)*(.9+Math.random()*.2),c==="grass"?.09:.05,c==="carpet"?.1:.16,s,c==="metal"?6:1),c==="wood"&&a("sine",110,70,.05,.1);break}case"click":a("square",900,700,.03,.08);break;case"hover":a("sine",1200,1200,.02,.03);break;case"paper":l("bandpass",3e3,.12,.2,s,.7,5e3);break;case"pencil":l("bandpass",5e3,.18,.1,s,2,3500);break;case"stamp":a("sine",140,50,.12,.6),l("lowpass",800,.06,.3);break;case"pickup":a("triangle",660,660,.08,.15),a("triangle",990,990,.14,.15,s+.07);break;case"note":a("sine",880,880,.1,.1),a("sine",1320,1320,.2,.08,s+.08),o(.4);break;case"switch":a("square",240,120,.04,.18),l("highpass",3e3,.02,.15);break;case"spot":a("square",180,90,.05,.2),a("sine",55,55,.5,.12,s+.02),o(.4);break;case"door":a("sawtooth",90,140,.35,.07),l("lowpass",400,.14,.4,s+.33),o(.3);break;case"creak":a("sawtooth",180,320,.5,.05),a("sawtooth",320,210,.4,.04,s+.45),o(.5);break;case"locked":a("square",160,160,.05,.14),a("square",160,160,.05,.14,s+.1);break;case"curtain":l("lowpass",500,1.6,.3,s,.5,1800),o(.4);break;case"whoosh":l("bandpass",400,.5,.3,s,1.2,2400);break;case"shutter":l("highpass",4e3,.03,.4),l("highpass",3e3,.05,.3,s+.08),a("square",1500,500,.03,.1);break;case"mask":a("sine",520,1040,.25,.12),a("sine",780,1560,.3,.08,s+.04),o(.6);break;case"error":a("square",200,150,.18,.14);break;case"ok":a("triangle",523,523,.1,.14),a("triangle",784,784,.2,.14,s+.09),o(.3);break;case"hit":a("triangle",e.f||880,e.f||880,.07,.12);break;case"miss":l("lowpass",300,.08,.2);break;case"knock":for(let c=0;c<(e.n||3);c++)a("sine",120,60,.18,.7,s+c*.7),l("lowpass",500,.05,.3,s+c*.7);o(.7);break;case"thunder":l("lowpass",200,2.4,.9,s,.5,60),o(.8);break;case"alarm":for(let c=0;c<3;c++)a("square",880,660,.22,.12,s+c*.26);break;case"laser":a("sawtooth",1800,300,.2,.1);break;case"emp":a("sawtooth",100,1600,.3,.12),l("bandpass",2e3,.3,.15,s,3,200);break;case"glitch":for(let c=0;c<5;c++)a("square",200+Math.random()*2e3,100+Math.random()*800,.04,.07,s+c*.045);break;case"heart":a("sine",70,40,.14,.7),a("sine",60,40,.14,.5,s+.22);break;case"laugh":{const c=e.n||6;for(let u=0;u<c;u++){const h=s+u*.17,d=(e.f||520)*(1-u*.05),m=n.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(d*1.2,h),m.frequency.exponentialRampToValueAtTime(d,h+.1);const p=n.createBiquadFilter();p.type="bandpass",p.frequency.value=900,p.Q.value=3;const v=n.createGain();v.gain.setValueAtTime(1e-4,h),v.gain.linearRampToValueAtTime(e.vol||.3,h+.02),v.gain.exponentialRampToValueAtTime(.001,h+.13),m.connect(p),p.connect(v),v.connect(r),m.start(h),m.stop(h+.15)}o(.7);break}case"applause":{const c=e.dur||3,u=e.dens||45;for(let h=0;h<c*u;h++){const d=s+Math.random()*c,m=Math.sin(Math.PI*Math.min(1,(d-s)/c))*.12+.03;l("bandpass",1200+Math.random()*2200,.03,m,d,1.5)}o(.6);break}case"clap":l("bandpass",1500+Math.random()*800,.04,.4,s,1.5),o(.5);break;case"gasp":l("bandpass",1800,.4,.12,s,2,900),o(.5);break;case"bell":a("sine",660,660,1.2,.2),a("sine",1320,1320,.8,.08),o(.7);break;case"crash":l("lowpass",1500,.9,.7,s,.5,100),a("sine",80,30,.5,.6),o(.5);break;case"snip":l("highpass",5e3,.04,.4),l("highpass",4e3,.05,.4,s+.09);break;case"rope":l("bandpass",900,.3,.2,s,3,1800);break;case"gear":for(let c=0;c<6;c++)a("square",300,200,.03,.08,s+c*.09);break;case"candle":l("bandpass",900,.25,.25,s,1,300);break;case"firework":l("bandpass",600,.4,.12,s,2,3e3),l("lowpass",2500,.8,.5,s+.45,.5,200),o(.6);break;case"engine":a("sawtooth",70,160,.9,.16);break;case"mechtick":a("square",2600,1900,.018,.05),l("highpass",5e3,.02,.06);break;case"keyin":a("triangle",1900,1500,.06,.16),a("triangle",2700,2500,.05,.1,s+.03),l("highpass",4e3,.04,.2,s+.02),o(.3);break;case"scrape":{const c=e.dur||1.6;l("bandpass",1400,c,.12,s,6,700);for(let u=0;u<7;u++)a("square",900+Math.random()*600,700,.03,.05,s+u*c/7+Math.random()*.05);break}case"hum":a("sine",55,52,2.2,.22),a("sine",110,108,2,.06),o(.4);break;case"windup":for(let c=0;c<14;c++)a("square",3e3,2200,.015,.05*(1-c/16),s+c*.07);break;case"clunk":a("sine",120,45,.25,.6),l("lowpass",900,.08,.4),o(.4);break;case"lighton":a("sine",70,40,.4,.5),l("lowpass",2400,.12,.45),l("highpass",6e3,.6,.05,s+.1),o(.5);break;case"buzz":a("sawtooth",100,100,e.dur||.6,.025);break;default:console.warn("[audio] нет эффекта",t)}}blip(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="triangle",s.frequency.setValueAtTime(t*(.96+Math.random()*.1),n),r.gain.setValueAtTime(.11,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(r),r.connect(this.bVoice),s.start(n),s.stop(n+.06)}ambience(t){if(!this.ctx||this.amb&&this.amb.id===t||(this.amb&&(this.amb.stop(),this.amb=null),!t))return;const e=this.ctx,n=e.createGain();n.gain.value=0,n.connect(this.bSfx);const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter(),o={rain:["highpass",1800,.16],hall:["lowpass",180,.22],crowd:["bandpass",700,.12],wind:["bandpass",350,.14],hum:["lowpass",90,.35],city:["lowpass",500,.12]}[t];if(!o){console.warn("[audio] нет атмосферы",t);return}r.type=o[0],r.frequency.value=o[1],s.connect(r),r.connect(n),s.start(),n.gain.linearRampToValueAtTime(o[2],e.currentTime+1),this.amb={id:t,stop:()=>{n.gain.cancelScheduledValues(e.currentTime),n.gain.setTargetAtTime(0,e.currentTime,.3),setTimeout(()=>{s.stop(),n.disconnect()},1500)}}}chart(t,e,n=1){const s=Rc[t],r=s.parts[e],{evs:o,len:l}=Lc(r),a=this.stepDur(s),c=[];for(let u=0;u<n;u++)for(const h of o)c.push({t:(u*l+h.step)*a,len:h.len*a,note:h.notes[0]});return c}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}const Xt=new Av,kr=new Set,Kh=new Set,Vn={x:0,y:0};let Zh=!1;function Dc(i){Zh=i}const jh={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyE:"act",Enter:"act",Space:"act",Escape:"pause",KeyP:"pause",Digit1:"mask1",Digit2:"mask2",Digit3:"mask3",Digit0:"mask0",KeyQ:"mask0",KeyC:"camera",KeyF:"camera",Tab:"notebook",KeyN:"notebook",KeyH:"history",KeyL:"history",ControlLeft:"skip",ControlRight:"skip",ShiftLeft:"run",ShiftRight:"run",KeyJ:"laneJ",KeyK:"laneK",KeyG:"laneG"},br=[];function Vi(i){return br.push(i),()=>{const t=br.indexOf(i);t>=0&&br.splice(t,1)}}function xs(i,t=""){Kh.add(i);for(const e of[...br])e(i,t)}window.addEventListener("keydown",i=>{const t=jh[i.code];if(!t)return;const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||(!Zh&&["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(kr.add(t),xs(t,i.code)))});window.addEventListener("keyup",i=>{const t=jh[i.code];t&&kr.delete(t)});window.addEventListener("blur",()=>{kr.clear(),Vn.x=Vn.y=0});const Gi=i=>kr.has(i);function Pa(){Kh.clear()}function Cv(){let i=(Gi("right")?1:0)-(Gi("left")?1:0)+Vn.x,t=(Gi("down")?1:0)-(Gi("up")?1:0)+Vn.y;const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t}}const La=new Map;function Jh(i,t="neutral"){const e=i+"|"+t,n=La.get(e);if(n)return n;const s=hn[i],r=200,o=240,l=document.createElement("canvas");l.width=r,l.height=o;const a=l.getContext("2d");if(!s)return"";if(i==="kukolnik"||i==="narrator"){if(a.fillStyle="#1a1210",a.fillRect(0,0,r,o),i==="kukolnik"){a.fillStyle="#050404",a.beginPath(),a.ellipse(100,100,44,54,0,0,7),a.fill(),a.fillRect(30,170,140,80),a.beginPath(),a.ellipse(100,190,80,40,0,0,7),a.fill(),a.fillRect(60,40,80,14),a.fillRect(74,4,52,44),a.strokeStyle="#d8b56a55",a.lineWidth=1;for(const B of[60,100,140])a.beginPath(),a.moveTo(B,0),a.lineTo(B+(B-100)*.3,60),a.stroke()}else{a.fillStyle="#e8d8a8",a.fillRect(30,60,140,120),a.fillStyle="#b89858",a.fillRect(97,60,6,120),a.fillStyle="#6a5a3a";for(let B=0;B<7;B++)a.fillRect(42,78+B*13,46,3),a.fillRect(112,78+B*13,46,3)}const U=l.toDataURL();return La.set(e,U),U}const c=s.acc||[],u=s.hair,h=he(u,-.3),d=he(u,.25),m=he(s.skin,-.18);he(s.skin,.12);const p=100,v=112,f=s.build==="big"?52:s.build==="strong"?50:46,g=58,x=s.style,M=x.startsWith("curly"),y=(U,B,F,nt,q)=>{a.fillStyle=q,a.beginPath(),a.ellipse(U,B,F,nt,0,0,7),a.fill()};if(a.fillStyle=u,x==="long"||x==="longStyled"||x==="glam"||x==="rapunzel"){const U=x==="glam"?84:x==="longStyled"?72:66;if(a.beginPath(),a.moveTo(p-U,240),a.quadraticCurveTo(p-U-8,80,p,44),a.quadraticCurveTo(p+U+8,80,p+U,240),a.fill(),x==="glam")for(let B=0;B<5;B++)y(p-78+B%2*8,110+B*28,16,18,B%2?u:h),y(p+78-B%2*8,110+B*28,16,18,B%2?h:u)}if(x==="bob"||x==="bobLong"){const U=x==="bob"?150:172;a.beginPath(),a.moveTo(p-62,U),a.quadraticCurveTo(p-70,60,p,46),a.quadraticCurveTo(p+70,60,p+62,U),a.fill()}if(x==="curlyMid")for(let U=0;U<16;U++){const B=Math.PI*(.95+U/15*1.1);y(p+Math.cos(B)*58,104+Math.sin(B)*56+(U<3||U>12?30:0),17,17,U%2?u:h)}if(x==="fluffy")for(let U=0;U<14;U++){const B=Math.PI*(.9+U/13*1.2);y(p+Math.cos(B)*58,100+Math.sin(B)*52,19,19,U%2?u:d)}if(x==="twin")for(const U of[-1,1])y(p+U*70,120,15,44,u),y(p+U*70,150,12,26,h),a.fillStyle="#e84a6f",a.fillRect(p+U*70-9,82,18,7);x==="ponytail"&&(y(p+52,70,18,16,u),a.fillStyle=h,a.beginPath(),a.moveTo(p+58,70),a.quadraticCurveTo(p+92,110,p+66,190),a.quadraticCurveTo(p+54,130,p+44,80),a.fill()),x==="bun"&&y(p,40,22,18,u),c.includes("wings")&&(y(30,200,34,50,"rgba(230,220,255,0.7)"),y(170,200,34,50,"rgba(230,220,255,0.7)"));const R=s.build==="strong"?96:s.build==="big"?100:s.build==="thin"?70:80;a.fillStyle=s.top,a.beginPath(),a.moveTo(p-R,240),a.quadraticCurveTo(p-R,186,p-26,180),a.lineTo(p+26,180),a.quadraticCurveTo(p+R,186,p+R,240),a.fill(),a.fillStyle=he(s.top,-.25),a.fillRect(p-R,232,R*2,8),c.includes("cape")&&(a.fillStyle=s.trim||"#a22",a.fillRect(p-R,196,30,44),a.fillRect(p+R-30,196,30,44)),a.fillStyle=m,a.fillRect(p-13,156,26,32),a.fillStyle=s.skin,a.beginPath(),a.moveTo(p-20,184),a.lineTo(p,200),a.lineTo(p+20,184),a.lineTo(p+13,176),a.lineTo(p-13,176),a.fill(),s.trim&&(a.strokeStyle=s.trim,a.lineWidth=5,a.beginPath(),a.moveTo(p-24,182),a.lineTo(p,204),a.lineTo(p+24,182),a.stroke()),c.includes("scarf")&&(a.fillStyle=s.trim||"#e84a6f",a.beginPath(),a.ellipse(p,186,40,14,0,0,7),a.fill(),a.fillRect(p+10,186,16,50)),c.includes("camera")&&(a.fillStyle="#222",a.fillRect(p-22,208,44,30),y(p,224,11,11,"#557"),y(p,224,6,6,"#9bd"),a.strokeStyle="#333",a.lineWidth=4,a.beginPath(),a.moveTo(p-30,184),a.lineTo(p-20,210),a.moveTo(p+30,184),a.lineTo(p+20,210),a.stroke()),c.includes("pins")&&(y(p+44,214,5,5,"#fff"),y(p+54,226,4,4,"#4ae0c0"),y(p+40,228,3,3,"#e84a6f")),y(p-f+2,v+4,7,11,m),y(p+f-2,v+4,7,11,m),a.fillStyle=s.skin,a.beginPath(),a.moveTo(p-f,v-20),a.quadraticCurveTo(p-f,v-g,p,v-g),a.quadraticCurveTo(p+f,v-g,p+f,v-20),a.quadraticCurveTo(p+f,v+34,p+16,v+g-4),a.quadraticCurveTo(p,v+g+4,p-16,v+g-4),a.quadraticCurveTo(p-f,v+34,p-f,v-20),a.fill(),y(p-26,v+22,10,6,"rgba(230,110,100,0.16)"),y(p+26,v+22,10,6,"rgba(230,110,100,0.16)"),c.includes("earrings")&&(y(p-f,v+22,4,8,"#f4d060"),y(p+f,v+22,4,8,"#f4d060"));const w=v+2,A=21;let I=1,D=0,_=0,S="flat",V=1;switch(t){case"smile":S="smile",I=.85;break;case"laugh":S="laugh",I=.25,D=-2;break;case"sad":S="sad",_=-5,I=.8;break;case"scared":S="o",_=-6,I=1.3,V=.7,D=-4;break;case"angry":S="sad",_=7,I=.8,D=3;break;case"worried":S="wavy",_=-5;break;case"smirk":S="smirk",I=.75,_=2;break;case"surprised":S="o",I=1.25,D=-5;break;case"blank":V=.8;break}if(s.brows==="strict"&&(_+=4),c.includes("maskface")){a.fillStyle="#e8e4d8",a.beginPath(),a.ellipse(p,v,f-2,g-2,0,0,7),a.fill(),y(p-20,v-4,9,12,"#111"),y(p+20,v-4,9,12,"#111"),a.strokeStyle="#111",a.lineWidth=4,a.beginPath(),a.moveTo(p-24,v+26),a.quadraticCurveTo(p,v+48,p+24,v+26),a.stroke();for(let U=-2;U<=2;U++)a.beginPath(),a.moveTo(p+U*9,v+30),a.lineTo(p+U*9,v+40),a.stroke()}else{for(const B of[-1,1]){const F=p+B*A;s.shadow&&y(F,w-4,13,9,s.shadow+"99"),a.save(),a.beginPath(),a.ellipse(F,w,11,8*Math.min(I,1.3),0,0,7),a.clip(),a.fillStyle="#f6f1ea",a.fillRect(F-12,w-12,24,24),y(F+(t==="smirk"?2:0),w+.5,7*V,7*V,s.eyes),y(F+(t==="smirk"?2:0),w+.5,3.4*V,3.4*V,"#120a08"),y(F-2.5,w-3,2,2,"#fff"),a.fillStyle=m,a.fillRect(F-12,w-12,24,5+(1-Math.min(I,1))*6),a.restore(),a.strokeStyle="#1a1010",a.lineWidth=s.lips||s.shadow?3:2.2,a.beginPath(),a.ellipse(F,w,11,8*Math.min(I,1.3),0,Math.PI*1.05,Math.PI*1.95),a.stroke(),(s.lips||s.shadow)&&(a.beginPath(),a.moveTo(F+B*10,w-3),a.lineTo(F+B*15,w-7),a.stroke()),t==="laugh"&&(a.strokeStyle="#1a1010",a.lineWidth=2.5,a.beginPath(),a.arc(F,w+4,9,Math.PI*1.15,Math.PI*1.85),a.stroke()),a.strokeStyle=he(u==="#f0d98a"||u==="#e8e0f0"||u==="#e8e8f0"?"#a88a4a":u,-.25),a.lineWidth=s.brows==="strict"?4.5:3.2,a.lineCap="round",a.beginPath();const nt=w-16+D;a.moveTo(F-B*10,nt+_*.5+(s.brows==="arch"?1:0)),a.quadraticCurveTo(F,nt-(s.brows==="arch"?5:2),F+B*11,nt-_*.5+(s.brows==="arch"?2:0)),a.stroke()}a.strokeStyle=m,a.lineWidth=2,a.beginPath(),a.moveTo(p-1,v+10),a.quadraticCurveTo(p-5,v+22,p+2,v+23),a.stroke();const U=v+37;if(a.strokeStyle=s.lips||"#7a3a34",a.fillStyle=s.lips||"#7a3a34",a.lineWidth=s.lips?4:2.6,a.lineCap="round",a.beginPath(),S==="flat"&&(a.moveTo(p-9,U),a.quadraticCurveTo(p,U+2,p+9,U),a.stroke()),S==="smile"&&(a.moveTo(p-12,U-2),a.quadraticCurveTo(p,U+8,p+12,U-2),a.stroke()),S==="smirk"&&(a.moveTo(p-9,U+1),a.quadraticCurveTo(p+2,U+4,p+13,U-4),a.stroke()),S==="sad"&&(a.moveTo(p-10,U+3),a.quadraticCurveTo(p,U-4,p+10,U+3),a.stroke()),S==="wavy"&&(a.moveTo(p-10,U),a.quadraticCurveTo(p-5,U-4,p,U),a.quadraticCurveTo(p+5,U+4,p+10,U),a.stroke()),S==="o"&&(a.fillStyle="#4a1a1a",a.ellipse(p,U+1,6,8,0,0,7),a.fill(),a.stroke()),S==="laugh"&&(a.fillStyle="#4a1a1a",a.moveTo(p-14,U-4),a.quadraticCurveTo(p,U+18,p+14,U-4),a.closePath(),a.fill(),a.stroke(),a.fillStyle="#fff",a.fillRect(p-8,U-3,16,4)),c.includes("freckles")){a.fillStyle=he(s.skin,-.3);for(const[B,F]of[[-30,14],[-24,18],[-18,13],[-26,10],[30,14],[24,18],[18,13],[26,10],[-4,16],[5,15]])a.beginPath(),a.arc(p+B,v+F,1.6,0,7),a.fill()}c.includes("mole")&&y(p+24,v+30,2.2,2.2,"#3a1a14")}if(c.includes("glasses")){a.strokeStyle="#222",a.lineWidth=3;for(const U of[-1,1])a.beginPath(),a.ellipse(p+U*A,w,15,13,0,0,7),a.stroke(),a.fillStyle="rgba(190,225,255,0.18)",a.fill();a.beginPath(),a.moveTo(p-6,w),a.lineTo(p+6,w),a.stroke()}if(c.includes("visor")&&(a.fillStyle=(s.trim||"#40e0d0")+"cc",a.fillRect(p-f-2,w-11,f*2+4,20),a.fillStyle="#ffffff55",a.fillRect(p-f+4,w-8,30,3)),c.includes("maskhalf")&&(a.fillStyle="#e8c36a",a.beginPath(),a.ellipse(p,w-2,f-2,18,0,0,7),a.fill(),y(p-A,w,8,5,"#120a08"),y(p+A,w,8,5,"#120a08")),a.fillStyle=u,x!=="none"){const U=v-g-8;if(a.beginPath(),a.moveTo(p-f-3,v-8),a.quadraticCurveTo(p-f-6,U,p,U-2),a.quadraticCurveTo(p+f+6,U,p+f+3,v-8),s.bangs?(a.quadraticCurveTo(p+f-6,v-18,p+f-10,v-14),a.lineTo(p-f+10,v-14),a.quadraticCurveTo(p-f+6,v-18,p-f-3,v-8)):x==="short"||x==="bun"||x==="ponytail"?(a.quadraticCurveTo(p+f-4,v-34,p+10,v-40),a.quadraticCurveTo(p-20,v-44,p-f-3,v-8)):(a.quadraticCurveTo(p+f-2,v-30,p-8,v-44),a.quadraticCurveTo(p-f+4,v-30,p-f-3,v-8+(x==="bob"||x==="bobLong"?30:10))),a.fill(),s.bangs){a.strokeStyle=h,a.lineWidth=1.5;for(let B=-3;B<=3;B++)a.beginPath(),a.moveTo(p+B*11,v-40),a.lineTo(p+B*12,v-15),a.stroke()}if(x==="bob"||x==="bobLong"||x==="long"||x==="longStyled"||x==="glam"||x==="rapunzel"){a.fillStyle=u;const B=x==="bob"?152:x==="bobLong"?172:236;a.fillRect(p-f-8,v-10,10,B-v+10),a.fillRect(p+f-2,v-10,10,B-v+10),(x==="bob"||x==="bobLong")&&(y(p-f-2,B-4,9,8,u),y(p+f+2,B-4,9,8,u))}if(M)for(let B=0;B<9;B++)y(p-48+B*12,v-g+2+B%2*6+Math.abs(B-4)*3,12,12,B%2?u:d);if(x==="fluffy")for(let B=0;B<8;B++)y(p-46+B*13,v-g+4+B%2*5+Math.abs(B-3.5)*3.5,13,12,B%2?d:u);a.strokeStyle=d,a.lineWidth=3,a.beginPath(),a.arc(p-8,v-30,30,Math.PI*1.15,Math.PI*1.5),a.stroke()}c.includes("hat")&&(a.fillStyle="#2a2a2e",a.beginPath(),a.ellipse(p,v-36,80,12,0,0,7),a.fill(),a.fillStyle="#3a3a40",a.beginPath(),a.moveTo(p-46,v-38),a.quadraticCurveTo(p-44,v-86,p,v-84),a.quadraticCurveTo(p+44,v-86,p+46,v-38),a.fill(),a.fillStyle="#111",a.fillRect(p-46,v-48,92,9)),c.includes("crown")&&(a.fillStyle="#f4d060",a.beginPath(),a.moveTo(p-38,v-52),a.lineTo(p-42,v-92),a.lineTo(p-20,v-70),a.lineTo(p,v-98),a.lineTo(p+20,v-70),a.lineTo(p+42,v-92),a.lineTo(p+38,v-52),a.fill(),y(p,v-62,6,6,"#d02040")),c.includes("headphones")&&(a.strokeStyle="#222",a.lineWidth=8,a.beginPath(),a.arc(p,v-8,f+8,Math.PI*1.08,Math.PI*1.92),a.stroke(),a.fillStyle="#222",a.fillRect(p-f-14,v-12,16,34),a.fillRect(p+f-2,v-12,16,34));const O=l.toDataURL();return La.set(e,O),O}const Rv={chars:"Персонажи",places:"Места",items:"Предметы",clues:"Улики",script:"Сценарий"},Lr={camera:{name:"Фотоаппарат Василисы",desc:"Запасная камера. «Плёнка здесь иногда видит больше, чем глаза». Клавиша C."},marionette:{name:"Двуликая марионетка",desc:"Добыча Рубена. У куклы два лица — спереди и сзади. Вырезана как ключ."},lantern:{name:"Бумажный фонарик",desc:"С фестиваля Матвея. Внутри записка: «Сто шагов — мои»."},archive_card:{name:"Каталожная карточка",desc:"Нашла Эрика. Шифр архива Театра имени М. Ковалевского."},braid:{name:"Коса Лизы",desc:"Сто локтей прекрасной верёвки. Лиза оставила башне волосы, а себе — свободу."},demo:{name:"Демо-запись Ангелины",desc:"Песня, которую не писал комитет."},flashlight:{name:"Фонарь",desc:"Старый, тяжёлый, с жёлтым лучом. Полина держит его двумя руками."},porch_key:{name:"Ключ из-под горшка",desc:"Конечно, под цветочным горшком. Где же ещё."},owner_mask:{name:"Маска Хозяина",desc:"Белая, пустая изнутри. На подкладке: «Алла Ева»."},e_photo:{name:"Фото: Мэй и Лидия",desc:"«Сестрёнке — от той, кто всегда в третьем ряду. Л.»"},e_contract:{name:"Контракт Вронской",desc:"Главную роль «передали» в четверг. Поручитель — Алла Ева."},e_letter:{name:"Записка Вейсу",desc:"«Спасибо за цветы… увидимся у моря. Л.»"},e_ticket:{name:"Квитанция камеры хранения",desc:"Суббота. Чемодан кожаный. Сдала: Вронская Л."},e_matches:{name:"Спички «Синей ноты»",desc:"Просто спички. Или нет."},gear:{name:"Шестерня",desc:"Латунная, от башенного механизма."},weight:{name:"Гиря",desc:"Противовес. Тяжёлая, но Лиза помогает волосами."},tower_key:{name:"Ключ с люстры",desc:"Висел там, где «принцессе не достать»."},emp:{name:"Глушилка",desc:"Гаджет Ноля. На пять секунд слепит охрану. Клавиша G. Зарядов мало."}},Rt=(i,t,e,n,s)=>({cat:i,title:t,text:e,char:n,expr:s}),Co={cast:Rt("chars","Труппа","Полина, Рубен, Матвей, Эрика, Лиза, Ангелина. Все получили письма: «Режиссёр — Варвара». Никто не удивился.","varya","smile"),c_alla:Rt("chars","Алла Ева","Прима. Опаздывает, требует, перебивает. Иногда права — и это раздражает сильнее всего.","alla","smirk"),c_polina:Rt("chars","Полина","Боялась весь особняк. И всё равно прошла его одна. Замечает узоры, которые я пропускаю.","polina","smile"),c_ruben:Rt("chars","Рубен","Отказался от моего плана и от золота. Вынес одну куклу и всю команду.","ruben","smile"),c_matvey:Rt("chars","Матвей","Сделал свои сто шагов сам. Мои сто — назад — были труднее, чем я думала.","matvey","smile"),c_erika:Rt("chars","Эрика","Закрыла дело так, как считала правильным. Проверяет факты, даже когда они ей не нравятся.","erika","neutral"),c_liza:Rt("chars","Лиза","Ушла из башни раньше, чем её успели спасти. Волосы оставила, косу забрала.","liza","laugh"),c_angelina:Rt("chars","Ангелина","Спела своё. Агентство осталось с фонограммой и чужим лицом на экранах.","angelina","smirk"),c_artemiy:Rt("chars","Артемий","Строгий только снаружи. Кормит школьного кота и не умеет врать.","artemiy","neutral"),troupe:Rt("chars","Второй состав","Василиса, Дана, Нина, Аня, Оля — на гастролях со «Снежной королевой». Это они рекомендовали меня. Вернутся к премьере; просили третий ряд.","vasilisa","smile"),doors:Rt("places","Шесть дверей","В кармане сцены — шесть дверей, каждая в свой жанр. Мокрая, неоновая, школьная, с матовым стеклом, книга и зеркало."),shadows:Rt("places","Тени держат","В этом театре по тени можно ходить, если её отбрасывает правильная декорация."),masks:Rt("places","Три маски","Комедия — что смешно. Трагедия — что сломано и спрятано. Драма — что чувствуют. Клавиши 1, 2, 3."),invite:Rt("clues","Приглашение Кукольника","Пометки на полях — знакомым почерком. Уверенным, немного командным."),camera:Rt("clues","Плёнка видит больше","Василиса советует снимать всё странное и сравнивать."),mirror:Rt("clues","Отражение опаздывает","В гримёрке отражение поправило серёжку. Я не ношу серёжки."),missing:Rt("clues","Труппа исчезла","Погас свет — и на сцене никого. Алла Ева не удивилась. Мокрые следы ведут за кулисы."),photo_inside:Rt("clues","Снимок «до»","Фото, где мы с Полиной уже внутри особняка, сделано с крыльца — до того, как мы вошли. В архиве оно числится неделю."),marionette:Rt("clues","Двуликая кукла","У марионетки два лица. Рубену это не понравилось. Мне тоже."),card:Rt("clues","Алла Ева в сороковых","В городе Эрики её имя — на афишах 1940-х. Она не может быть такой старой. Или «она» — не возраст."),alla_knows:Rt("clues","Она знает про утренник","Алла Ева помнит, как я в семь лет забыла слова. Этого не помнит даже мама."),one_shadow:Rt("clues","Одна тень","В маске Трагедии у Аллы Евы нет своей тени. Под ней лежит моя."),maquette:Rt("clues","Макет с коробочками","Для каждого из друзей заранее сделана коробка-жанр."),twins:Rt("clues","Склеенные фигурки","В центре макета стояли две фигурки спиной к спине: в красном платье и в красном лонгсливе. Их разломали."),timegap:Rt("clues","Пропавшие часы","Я потеряла два с половиной часа в мастерской. Что я делала в это время?"),handwriting:Rt("clues","Петля на «р»","Эрика: письма Кукольника, пометки в сценарии и мой блокнот написаны одной рукой."),ledger:Rt("clues","Протокол собрания","Труппа голосовала за меня. Худрук воздержался: «не могу голосовать за себя»."),contract:Rt("clues","Две подписи","«Алла Ева» и «К.» на контракте — один нажим, одни чернила, разные росчерки."),seating:Rt("clues","Третий ряд","«Рот открывать, звук не давать». На обороте — детским почерком: «Меня будет видно из любого ряда»."),drafts:Rt("clues","Черновики приглашения","Три черновика письма мне. Моим почерком."),puppets:Rt("clues","Одна вага","Шесть марионеток на одной ваге. Нитки не завязаны."),kukolnik:Rt("clues","Кабинет худрука","Жакет моего размера. Мятная конфета в кармане. Почерк с петлёй на «р». Совпадения копятся."),poses:Rt("clues","Одна поза","В большом зеркале мы с Аллой Евой стоим одинаково. Она — на моём месте."),knotes:Rt("clues","Записки К.","Кукольник всегда знает, где я и что я уже сделала. И всегда пишет «не благодари»."),casting:Rt("clues","Лист распределения","Можно вписать роль самой. Можно спросить. Второе выглядит неряшливо и честно."),act4:Rt("clues","Она расчистила сцену","Во всех шести мирах была Алла Ева — под разными масками. Каждому дала главную роль подальше от своей."),script:Rt("script","The Queen's Last Curtain","Королева, которой нужны аплодисменты, и Молодая Девушка. Страницы описывают то, что ещё не случилось."),program:Rt("script","Финал из программки","«…и когда декорации исчезают, зал видит, что на сцене стоит один человек»."),page8:Rt("script","Страница 8","Королева рассылает приглашённых по чужим пьесам. «Я всем дала по спектаклю. Себе — тоже»."),steps:Rt("script","Ремарка Матвея","«Режиссёр отходит на сто шагов. Сцена продолжается без него. Сцена становится лучше»."),braid:Rt("script","Ремарка Лизы","«Принцесса выходит сама. Спасатель опаздывает. Никто не пострадал, кроме сюжета»."),demo:Rt("script","Ремарка Ангелины","«Фонограмма выключена. Поёт та, чьё это лицо»."),n_pol_book:Rt("script","Проклятая книга","«Дом смеётся над тем, кто играет роль, которую ему назначили. Перестань играть — и он замолчит»."),n_pol_photos:Rt("clues","Невозможные фотографии","На трёх снимках в библиотеке — то, чего не бывает: тринадцатый час, человек без тени, отражение спиной. На рамках — годы, на обороте — знаки."),n_pol_wall:Rt("clues","Обои с цветами","Полина заметила: в каждой комнате цветок на обоях повёрнут по-своему — вверх или вниз."),n_pol_owner:Rt("clues","Маска Хозяина","Под маской никого не было. На подкладке — театральный штамп и буквы «Алла Ева»."),n_rub_plan:Rt("script","План ограбления","Мой план был поминутным. Рубен сказал: «План нужен, чтобы было от чего отступать»."),n_rub_fortuna:Rt("clues","Леди Фортуна","Хозяйка казино в золотой полумаске знала наш план заранее. Знакомое «дорогуша»."),n_mat_fake:Rt("script","Слишком красиво","Чем больше я ставлю «идеальных моментов», тем фальшивее они выглядят. Лепестки падают по команде."),n_mat_teacher:Rt("clues","Руководительница драмкружка","Вычёркивала Матвея из главных ролей. Видела меня сквозь стену. «Дорогуша»."),n_eri_case:Rt("clues","Дело Вронской","Актриса Лидия Вронская исчезла накануне премьеры. Показания противоречат уликам."),n_eri_alla:Rt("clues","Поручительница","В контракте Вронской поручителем значится Алла Ева. Афиши с её именем — по всему городу."),n_liz_role:Rt("script","Роль принцессы","Рассказчик, Фея и зеркальце хором объясняют Лизе, что принцессы ждут. Лиза не ждёт."),n_liz_voice:Rt("clues","Голос Рассказчика","Говорит басом, но ставит ударения как один мой знакомый человек в красном."),n_ang_concept:Rt("script","Концепт «ANGEL♡»","Агентство хочет розовые волосы, новое имя и песню, написанную комитетом."),n_ang_assist:Rt("clues","Ассистентка","Это она предложила «заменить лицо». И сказала про третий ряд."),n_diva:Rt("clues","Третий ряд Аллы Евы","Она боится не свиста. Она боится, что зал посмотрит сквозь неё. Это объясняет. Это не оправдывает."),guestbook:Rt("clues","Книга отзывов","Все восторженные отзывы об Алле Еве — одним почерком. Подписи разные."),n_collapse:Rt("places","Театр складывается","Коридоры ведут в комнаты из чужих жанров. Работает всё, чему мы научились, — и все, кто рядом.")},fn="#eadfc8",Le="#b9a888",Xe="#c9a35a",ki="#b3142c",ri="#6e0a18",es="#120c0d",Ic=(i,t,e,n=fn,s=.16)=>`<path d="M${i},${t-e} L${i+e*s},${t-e*s} L${i+e},${t} L${i+e*s},${t+e*s} L${i},${t+e} L${i-e*s},${t+e*s} L${i-e},${t} L${i-e*s},${t-e*s}Z" fill="${n}"/>`,Pv=(i,t,e,n=Xe)=>{let s="";for(let r=0;r<16;r++){const o=r*Math.PI/8,l=r%2?e*.55:e,a=.06;s+=`<path d="M${i},${t} L${i+Math.cos(o-a)*6},${t+Math.sin(o-a)*6} L${i+Math.cos(o)*l},${t+Math.sin(o)*l} L${i+Math.cos(o+a)*6},${t+Math.sin(o+a)*6}Z" fill="${n}"/>`}return s+`<circle cx="${i}" cy="${t}" r="${e*.17}" fill="${n}" stroke="${es}" stroke-width="1.5"/>`},Uc=(i,t)=>`<g><path d="${i}" stroke="${Le}" stroke-width="30" fill="none"/><path d="${i}" stroke="${es}" stroke-width="30" stroke-dasharray="3 9" fill="none"/><path d="${i}" stroke="#2a2220" stroke-width="16" fill="none"/><path d="${i}" stroke="${Le}" stroke-width="16" stroke-dasharray="2 22" fill="none" opacity=".8"/></g>`,Nc=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n}) scale(${e})">
  <path d="M0,0 C-10,40 -6,90 4,140" stroke="#3b4a34" stroke-width="5" fill="none"/><path d="M2,70 C-30,60 -52,72 -60,96 C-36,92 -14,86 2,74Z" fill="#3b4a34"/>
  ${[0,72,144,216,288].map(s=>`<path transform="rotate(${s})" d="M0,0 C-14,-20 -16,-52 0,-78 C16,-52 14,-20 0,0Z" fill="${fn}" stroke="${Le}" stroke-width="2"/><path transform="rotate(${s})" d="M0,-6 L0,-60" stroke="${Le}" stroke-width="1.5"/>`).join("")}
  ${[-30,-10,10,30].map(s=>`<path transform="rotate(${s})" d="M0,0 L0,-46" stroke="${Xe}" stroke-width="1.6"/><ellipse transform="rotate(${s})" cx="0" cy="-48" rx="3" ry="6" fill="#a0602a"/>`).join("")}</g>`,Lv=(i,t,e)=>`<g transform="translate(${i} ${t}) scale(${e})">
  <path d="M0,20 C6,70 -4,110 10,150" stroke="#2c3a2a" stroke-width="5" fill="none"/>
  ${[0,90,180,270].map((n,s)=>`<path transform="rotate(${n+20})" d="M0,0 C-44,-6 -58,-48 -30,-66 C-8,-80 22,-70 30,-50 C40,-24 22,-4 0,0Z" fill="${s%2?ki:"#c8202e"}" stroke="${ri}" stroke-width="2"/>`).join("")}
  ${[0,60,120,180,240,300].map(n=>`<path transform="rotate(${n})" d="M0,0 C-6,-14 -4,-30 0,-40" stroke="${ri}" stroke-width="1.5" fill="none" opacity=".7"/>`).join("")}
  <circle r="14" fill="#1c1416"/>${[0,45,90,135,180,225,270,315].map(n=>`<circle transform="rotate(${n})" cx="0" cy="-20" r="2.4" fill="#1c1416"/>`).join("")}</g>`,dr=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n})"><path d="M-6,0 C-6,${e*.3} -5,${e*.55} -4,${e*.62} L-3.4,${e*.66} C-4,${e*.8} -3,${e*.95} 0,${e} C3,${e*.95} 4,${e*.8} 3.4,${e*.66} L4,${e*.62} C5,${e*.55} 6,${e*.3} 6,0Z" fill="${fn}" stroke="#7a6a52" stroke-width="1.6"/>${[.3,.62].map(s=>`<path d="M-4,${e*s} C-1,${e*s+3} 1,${e*s+3} 4,${e*s}" stroke="#7a6a52" stroke-width="1.2" fill="none"/>`).join("")}<path d="M-2.4,${e-7} C-1,${e-3} 1,${e-3} 2.4,${e-7}" stroke="#a89878" stroke-width="1.2" fill="none"/></g>`,Dv=`<g transform="translate(1010 34) rotate(14)">
  <path d="M84,-40 C110,-30 140,-38 168,-60 L184,-20 C160,0 128,10 100,8Z" fill="#1c1416" stroke="${Le}" stroke-width="1.5"/>
  ${[0,1,2,3,4,5].map(i=>`<path d="M${84+i*3},${-38+i*8} l-10,4 l10,3" stroke="${Le}" stroke-width="1.4" fill="none"/>`).join("")}
  <path d="M86,-36 C60,-30 34,-24 10,-6 C0,4 -4,18 2,30 C18,44 46,46 70,38 C84,30 96,10 100,4Z" fill="${fn}" stroke="#7a6a52" stroke-width="2"/>
  ${[[20,-2],[36,-4],[52,-4],[66,0]].map(([i,t])=>`<path d="M${i},${t} C${i+4},${t+8} ${i+6},${t+16} ${i+4},${t+26}" stroke="#a89878" stroke-width="1.3" fill="none"/>`).join("")}
  ${dr(6,22,58,22)}${dr(24,32,70,10)}${dr(44,36,72,-2)}${dr(62,32,60,-14)}
  <g transform="translate(86 20) rotate(-58)"><path d="M-7,0 C-7,20 -5,34 0,40 C5,34 7,20 7,0Z" fill="${fn}" stroke="#7a6a52" stroke-width="1.6"/></g>
  ${[[10,10],[30,22],[50,26],[70,20]].map(([i,t])=>`<path d="M${i},${t} l4,2" stroke="#7a6a52" stroke-width="1.4"/>`).join("")}</g>`,Iv=`<g transform="translate(1046 232) rotate(-14) scale(.85)"><path d="M-46,-38 C-20,-56 26,-56 50,-40 C58,-12 54,26 38,52 C26,70 6,78 -6,70 C-16,62 -8,40 -26,30 C-44,20 -56,-12 -46,-38Z" fill="${fn}" stroke="${Le}" stroke-width="2.5"/>
  <path d="M-30,-14 C-20,-24 -4,-22 2,-10 C-6,-2 -22,-2 -30,-14Z" fill="${es}"/><path d="M14,-12 C22,-24 38,-22 42,-10 C36,0 22,0 14,-12Z" fill="${es}"/>
  <path d="M-48,-30 C-20,-46 26,-48 50,-34" stroke="${Xe}" stroke-width="2.5" fill="none"/><path d="M4,8 C6,20 10,30 18,34" stroke="${Le}" stroke-width="2" fill="none"/></g>`,Uv=`<g transform="translate(470 676) rotate(-12)"><rect x="-58" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Le}" stroke-width="3"/><rect x="14" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Le}" stroke-width="3"/>
  <ellipse cx="-36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${fn}" stroke-width="3"/><ellipse cx="36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${fn}" stroke-width="3"/><rect x="-14" y="-12" width="28" height="18" rx="4" fill="${Xe}"/>
  <path d="M-46,-22 L-46,18 M24,-22 L24,18" stroke="${fn}" stroke-width="3" opacity=".6"/><path d="M0,-12 C10,-50 60,-60 90,-48" stroke="${Xe}" stroke-width="3" fill="none"/></g>`,Nv=`<g transform="translate(890 668) rotate(-10)"><rect x="-74" y="-44" width="148" height="88" rx="6" fill="#d8ccb2" stroke="${Le}" stroke-width="3"/><rect x="-66" y="-36" width="132" height="72" fill="none" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M-46,20 L-46,-6 L0,-24 L46,-6 L46,20Z" fill="none" stroke="#5a4a3a" stroke-width="2"/>${[-34,-18,-2,14,30].map(i=>`<path d="M${i},20 L${i},0" stroke="#5a4a3a" stroke-width="2"/>`).join("")}<path d="M-56,24 L56,24" stroke="#5a4a3a" stroke-width="2"/>
  <text x="0" y="-27" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" fill="#5a4a3a" letter-spacing="2">ТЕАТРЪ</text><circle cx="-74" cy="0" r="8" fill="${es}"/><circle cx="74" cy="0" r="8" fill="${es}"/></g>`;function Qh(i="lg"){return`<svg class="logo-svg" viewBox="0 0 1200 800" role="img" aria-label="THE OTHER ME: APPLAUSE, PLEASE!" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="${i}iv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6eedc"/><stop offset=".55" stop-color="${fn}"/><stop offset="1" stop-color="#a8977a"/></linearGradient>
  <linearGradient id="${i}rd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2283c"/><stop offset=".6" stop-color="${ki}"/><stop offset="1" stop-color="${ri}"/></linearGradient>
  <linearGradient id="${i}cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${ri}"/><stop offset=".5" stop-color="${ki}"/><stop offset="1" stop-color="${ri}"/></linearGradient>
  <filter id="${i}worn" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -9 6.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <radialGradient id="${i}vig"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <clipPath id="${i}arch"><path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262Z"/></clipPath>
  <filter id="${i}glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="5" result="b0"/><feColorMatrix in="b0" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g class="lg-orn" stroke-linejoin="round"><g transform="translate(600 262) scale(1.32) translate(-600 -262)">
  <path d="M360,262 C360,170 440,118 520,112 C556,108 584,96 600,78 C616,96 644,108 680,112 C760,118 840,170 840,262" stroke="${Xe}" stroke-width="5" fill="none"/>
  <path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262" stroke="${Le}" stroke-width="2" fill="none"/>
  ${[400,470,730,800].map((t,e)=>`<circle cx="${t}" cy="${[196,142,142,196][e]}" r="5" fill="${Xe}"/>`).join("")}
  <ellipse cx="600" cy="420" rx="560" ry="330" fill="url(#${i}vig)"/>
  <g clip-path="url(#${i}arch)"><rect x="370" y="90" width="460" height="180" fill="#160a0c"/>
    <path d="M370,120 L830,120 L830,150 C800,206 760,214 730,170 C700,226 650,230 600,178 C550,230 500,226 470,170 C440,214 400,206 370,150Z" fill="url(#${i}cur)"/>
    <path d="M370,150 C400,206 440,214 470,170 C500,226 550,230 600,178 C650,230 700,226 730,170 C760,214 800,206 830,150" stroke="${ri}" stroke-width="3" fill="none"/>
    ${[420,530,670,780].map(t=>`<path d="M${t},128 C${t+10},160 ${t-6},180 ${t+4},200" stroke="#e2283c" stroke-width="2" fill="none" opacity=".5"/>`).join("")}
    <path d="M370,130 C410,170 420,230 400,270 L370,270Z" fill="${ki}"/><path d="M830,130 C790,170 780,230 800,270 L830,270Z" fill="${ki}"/></g>
  ${[470,730].map(t=>`<path d="M${t},170 L${t},214" stroke="${Xe}" stroke-width="2"/><path d="M${t-6},214 L${t+6},214 L${t+4},236 L${t-4},236Z" fill="${Xe}"/>`).join("")}
  ${Pv(600,92,40)}</g>
  <path d="M372,262 L828,262" stroke="${Xe}" stroke-width="4"/><path d="M386,268 L814,268" stroke="${Le}" stroke-width="1.5"/>
  ${Uc("M40,560 C90,520 160,540 190,600 C220,660 300,700 380,690")}
  ${Uc("M1060,420 C1100,392 1150,402 1162,444 C1172,480 1150,506 1124,504")}
  
  ${Nc(110,440,.85,-18)}${Nc(162,486,.55,24)}
  ${Lv(1104,610,.68)}
  ${Dv}
  ${[[1002,104,1030,196],[1026,120,1070,200],[1052,126,940,290],[1076,118,1140,420]].map(([t,e,n,s])=>`<path d="M${t},${e} L${n},${s}" stroke="${Le}" stroke-width="1.6" opacity=".85"/>`).join("")}
  ${Iv}
  <g stroke="${Le}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M268,372 C226,352 196,370 200,398 C204,422 236,424 244,404 C250,388 232,380 224,392"/><path d="M268,372 C240,330 260,300 290,300"/><path d="M262,440 C230,450 210,474 226,494"/>
    <path d="M940,372 C982,352 1012,370 1008,398 C1004,422 972,424 964,404 C958,388 976,380 984,392"/><path d="M940,440 C972,450 992,474 976,494"/>
    ${[[212,470],[236,316],[998,470]].map(([t,e])=>`<path d="M${t},${e} l-8,-10 M${t},${e} l10,-6"/>`).join("")}
  </g>
</g>
<g filter="url(#${i}worn)">
  <text x="248" y="246" font-family="Aurelia, serif" font-size="58" fill="url(#${i}iv)" letter-spacing="8">THE</text><path d="M246,258 L360,258" stroke="${Xe}" stroke-width="2"/>
  <text x="600" y="418" text-anchor="middle" font-family="Aurelia, serif" fill="url(#${i}iv)" stroke="#2a1e1a" stroke-width="1.5" paint-order="stroke"><tspan font-size="212" dy="10">O</tspan><tspan font-size="168" dy="-10" letter-spacing="4">THER</tspan><tspan font-size="212" dx="30" dy="10">M</tspan><tspan font-size="168" dy="-10">E</tspan><tspan font-size="150" fill="${Xe}" dx="10">:</tspan></text>
  </g>
<text x="612" y="528" text-anchor="middle" font-family="Cintarini, cursive" font-size="104" fill="url(#${i}rd)" stroke="url(#${i}rd)" stroke-width="3.2" transform="rotate(-4 600 510)" filter="url(#${i}glow)">Applause, Please!</text>
<g class="lg-orn2" transform="translate(0 -20)">
  <path d="M280,630 C380,612 470,640 540,626 C570,620 586,614 600,604 C614,614 630,620 660,626 C730,640 820,612 920,630" stroke="${Le}" stroke-width="2.5" fill="none"/>
  <path d="M330,618 C300,600 300,580 322,578 M870,618 C900,600 900,580 878,578" stroke="${Le}" stroke-width="2" fill="none"/>
  <path d="M560,640 L600,736 L640,640 C626,652 612,650 600,644 C588,650 574,652 560,640Z" fill="${ki}"/><path d="M582,650 L600,712 L618,650" stroke="${ri}" stroke-width="2" fill="none"/>
  ${Ic(600,640,40,fn,.12)}
  ${Uv}${Nv}
  ${[[300,150,16],[1030,190,10],[110,360,12],[1150,580,14],[250,520,9],[700,690,10],[1170,300,8],[60,700,10],[780,60,9],[420,70,7]].map(([t,e,n])=>Ic(t,e,n,Xe)).join("")}
</g></svg>`}const on=()=>document.getElementById("ui");function ve(i,t="",e="",n){const s=document.createElement(i);return t&&(s.className=t),e&&(s.innerHTML=e),n&&n.appendChild(s),s}const Ue=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;"),Fc=[["hub_mezz","Бельэтаж",30,20,240,40,"2"],["hub_rehearsal","Репетиционный",30,70,70,40,"2"],["hub_archive","Архив",105,70,55,40,"2"],["hub_box","Ложа 3",165,70,45,40,"2"],["hub_office","Кабинет К.",215,70,55,40,"2"],["hub_foyer","Фойе",30,160,110,70,"1"],["hub_stage","Сцена и зал",150,160,120,70,"1"],["hub_corridor","Служебный коридор",30,240,240,34,"1"],["hub_dressing","Гримёрка режиссёра",30,282,75,34,"1"],["hub_costume","Костюмерная",110,282,70,34,"1"],["hub_workshop","Мастерская",185,282,85,34,"1"],["hub_backstage","Карман сцены",280,160,70,114,"1"],["hub_trap","Трюм под сценой",150,370,200,40,"0"]];function Fv(i,t){const e=(o,l)=>`<text x="8" y="${o}" font-family="Playfair Display" font-size="10" fill="#8e1830" letter-spacing="2">${l}</text>`,n=Fc.map(([o,l,a,c,u,h])=>{const d=t[o]||o===i,m=o===i;return`<g><rect x="${a}" y="${c}" width="${u}" height="${h}" fill="${m?"#8e1830":d?"#efe0b8":"#d8cba8"}" stroke="#5a4029" stroke-width="${m?2:1}" ${d?"":'stroke-dasharray="3 2"'}/><text x="${a+u/2}" y="${c+h/2+3}" text-anchor="middle" font-family="Lora" font-size="8.5" fill="${m?"#fff4e0":d?"#2a1a14":"#9a8a6a"}">${d?l:"?"}</text></g>`}).join(""),s=[[150,60,150,160],[262,60,262,240],[250,274,250,370],[210,230,210,370],[85,230,85,240],[270,200,280,200],[55,274,55,282],[145,274,145,282],[228,274,228,282],[65,60,65,70],[132,60,132,70],[187,60,187,70],[242,60,242,70]].map(([o,l,a,c])=>`<line x1="${o}" y1="${l}" x2="${a}" y2="${c}" stroke="#a3122a" stroke-width="1.5" stroke-dasharray="2 2"/>`).join(""),r=Fc.some(o=>o[0]===i);return`<svg viewBox="0 0 360 420" style="width:100%;max-height:62vh;display:block" xmlns="http://www.w3.org/2000/svg">${e(14,"ЭТАЖ 2 · БЕЛЬЭТАЖ")}${e(150,"ЭТАЖ 1 · ПАРТЕР")}${e(362,"ПОД СЦЕНОЙ")}${s}${n}</svg><p class="warn">Пунктир — переходы и лестницы. «?» — там вы ещё не были.${r?"":" Сейчас вы за пределами театра — в чужой пьесе."}</p>`}const kv=i=>`${Math.floor(i/3600)}:${String(Math.floor(i/60)%60).padStart(2,"0")}`,Ov=Qh("m");class Bv{constructor(){this.modal=!1,this.dialogOpen=!1,this.modals=[],this.log=[],this.advance=null,this.auto=!1,this.placeEl=null,this.skipping=!1,this.introPlayed=!1}init(){const t=on();this.hudEl=ve("div","hud hidden","",t),this.maskRow=ve("div","masks","",this.hudEl),this.hudR=ve("div","hud-r","",this.hudEl),this.toasts=ve("div","toasts","",t),this.promptEl=ve("div","prompt hidden","",t),this.saveEl=ve("div","savemark","✎ сохранено",t),this.lyricEl=ve("div","lyric hidden","",t),this.dlg=ve("div","dlg hidden",'<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>',t),this.vf=ve("div","viewfinder hidden","<b>● REC</b><span>E / Enter — снимок · C / Esc — убрать камеру</span>",t),this.loadingEl=ve("div","savemark","Меняем декорации…",t),this.loadingEl.style.right="auto",this.loadingEl.style.left=".8rem",this.dlg.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="hist"?this.history():n==="auto"?(this.auto=!this.auto,e.target.style.background=this.auto?"#8e1830":"",this.auto&&this.advance&&this.advance()):n==="skip"?(this.skipping=!0,this.advance&&this.advance()):this.advance&&this.advance()}),Vi(e=>{if(this.modal){e==="pause"&&this.closeTop();return}e==="act"&&this.advance&&this.advance()}),this.hudR.innerHTML='<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="note" title="Блокнот (Tab)">✎</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>',this.hudR.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="cam"&&xs("camera"),n==="note"&&xs("notebook"),n==="pause"&&xs("pause")}),this.maskRow.addEventListener("click",e=>{const n=e.target.closest(".maskb");n&&It.setMask(n.dataset.m)}),this.buildTouch(),this.applySettings()}applySettings(){document.documentElement.style.setProperty("--s",String(Se.uiScale)),document.body.classList.toggle("contrast",Se.contrast),Xt.applyVolumes(),this.touchEl.classList.toggle("hidden",!Se.touch||!It.running)}say(t){this.dialogOpen=!0,this.dlg.classList.remove("hidden"),this.prompt(null);const e=this.dlg.querySelector(".port"),n=e.querySelector("img"),s=this.dlg.querySelector(".name"),r=this.dlg.querySelector(".text");return e.classList.toggle("none",!t.portrait),t.portrait&&(n.src=t.portrait),s.innerHTML=t.name?`<i style="background:${t.color}"></i>${Ue(t.name)}`:"",r.classList.toggle("it",t.italic),this.log.push({name:t.name,text:t.text,color:t.color}),this.log.length>250&&this.log.shift(),new Promise(o=>{const l=t.text;let a=0,c=!1,u,h;const d=Se.textSpeed,m=()=>{clearInterval(u),clearTimeout(h),this.advance=null,o()},p=()=>{a=l.length,r.textContent=l,c=!0,clearInterval(u),this.auto&&(h=setTimeout(m,900+l.length*45))};if(It.fast||this.skipping&&t.seen||Gi("skip")&&t.seen){r.textContent=l,setTimeout(m,It.fast?0:60);return}this.skipping=!1,d?(r.textContent="",u=setInterval(()=>{a=Math.min(l.length,a+Math.max(1,Math.round(d/30))),r.textContent=l.slice(0,a),a%3===0&&/[а-яa-z]/i.test(l[a-1]||"")&&Xt.blip(t.pitch),a>=l.length&&p()},33)):p(),this.advance=()=>{c?m():p()}})}sayHide(){this.dialogOpen=!1,this.dlg.classList.add("hidden"),this.skipping=!1}choice(t){if(It.fast)return Promise.resolve(It.autoChoice?It.autoChoice(t):0);const e=ve("div","choices"+(this.dialogOpen?"":" solo"),"",on());let n=0;return this.skipping=!1,new Promise(s=>{const r=t.map((u,h)=>{const d=ve("button","choice"+(u.mask?" mask":""),`<span class="n">${h+1}.</span>${Ue(u.text)}`,e);return d.onclick=m=>{m.stopPropagation(),c(h)},d.onmouseenter=()=>{n=h,o()},d}),o=()=>r.forEach((u,h)=>u.classList.toggle("on",h===n)),l=Vi((u,h)=>{if(!this.modal){if(u==="up")n=(n+t.length-1)%t.length,Xt.sfx("hover"),o();else if(u==="down")n=(n+1)%t.length,Xt.sfx("hover"),o();else if(u==="act")c(n);else if(/^Digit[1-9]$/.test(h)){const d=parseInt(h.slice(5))-1;d<t.length&&c(d)}}}),a=this.advance;this.advance=null;const c=u=>{l(),e.remove(),Xt.sfx("click"),this.advance=a,this.log.push({name:"→",text:t[u].text,color:"#d4ae48"}),setTimeout(()=>s(u),0)};o()})}history(){const e=this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map(n=>`<p>${n.name?`<b style="color:${n.name==="→"?"#8e1830":"#3a2a14"}">${Ue(n.name)}</b> `:""}${n.name?"":"<i>"}${Ue(n.text)}${n.name?"":"</i>"}</p>`).join("")||"<p><i>Пока никто ничего не сказал.</i></p>"}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`).querySelector(".body");e.scrollTop=e.scrollHeight}hudShow(t){this.hudEl.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!Se.touch),t||(this.sayHide(),this.prompt(null),this.lyric(null))}hud(){const t=It.state.f,e=It.room?.def.noMasks;this.maskRow.innerHTML=t.masks&&!e?Object.entries(Gv).map(([n,s],r)=>`<button class="maskb${It.state.mask===n?" on":""}" data-m="${n}" title="${s} (${r+1})">${n==="comedy"?"☺":n==="tragedy"?"☹":"❦"}<small>${r+1} ${s}</small></button>`).join(""):"",this.hudR.children[0].classList.toggle("hidden",!It.has("camera")||!!It.room?.def.noCamera)}prompt(t,e=0,n=0){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.dataset.l!==t&&(this.promptEl.dataset.l=t,this.promptEl.innerHTML=`<kbd>E</kbd>${Ue(t)}`),this.promptEl.style.left=e*100+"%",this.promptEl.style.top=Math.max(8,n*100)+"%"}toast(t,e="✦"){if(It.fast)return;const n=ve("div","toast",`<b>${e}</b>${Ue(t)}`,this.toasts);setTimeout(()=>n.remove(),4100)}place(t){if(this.placeEl&&this.placeEl.remove(),It.fast)return;const e=this.placeEl=ve("div","place",`<b>${Ue(t)}</b><i></i>`,on());setTimeout(()=>e.remove(),3700)}saved(t){this.saveEl.textContent=t==="auto"?"✎ автосохранение":"✎ сохранено",this.saveEl.classList.add("on"),setTimeout(()=>this.saveEl.classList.remove("on"),1600)}loading(t){this.loadingEl.classList.toggle("on",t)}lyric(t,e=""){if(!t){this.lyricEl.classList.add("hidden");return}this.lyricEl.classList.remove("hidden"),this.lyricEl.innerHTML=(e?`<small>${Ue(e)}</small>`:"")+Ue(t).replace(/\n/g,"<br>")}viewfinder(t){this.vf.classList.toggle("hidden",!t)}async transition(t,e){let n=on().querySelector(".trans");if(e==="out")n&&n.remove(),n=ve("div","trans "+t,"",on()),n.offsetWidth,n.classList.add("on"),t==="curtain"&&Xt.sfx("curtain"),t==="glitch"&&Xt.sfx("glitch"),(t==="mirror"||t==="page")&&Xt.sfx("whoosh"),await new Promise(s=>setTimeout(s,t==="curtain"?760:520));else if(n){n.classList.remove("on");const s=n;setTimeout(()=>s.remove(),800),await new Promise(r=>setTimeout(r,350))}}paper(t){return It.fast?Promise.resolve():(Xt.sfx("paper"),new Promise(e=>{this.open(`<div class="paper ${t.cls||""}">${t.stamp?`<div class="stamp">${t.stamp}</div>`:""}${t.title?`<h3>${t.title}</h3>`:""}<div class="${t.hand?"hand":""}">${t.body}</div>${t.sign?`<div class="sign">${t.sign}</div>`:""}<button class="btn small ok" data-x>${t.btn||"Отложить"}</button></div>`,{raw:!0,onClose:()=>{Xt.sfx("paper"),e()}}).querySelector(".ok").focus()}))}card(t,e={}){return It.fast?Promise.resolve():new Promise(n=>{const s=ve("div","card",t.map((a,c)=>{const[u,h]=Array.isArray(a)?a:[a,""];return`<p class="${h}" style="animation-delay:${c*.9}s">${u}</p>`}).join("")+'<div class="more">нажмите, чтобы продолжить</div>',on()),r=performance.now(),o=()=>{performance.now()-r<500||(l(),s.remove(),n())},l=Vi(a=>{a==="act"&&!this.modal&&o()});s.onclick=o})}open(t,e={}){const n=ve("div","modal",e.raw?t:`<div class="sheet ${e.cls||""}">${t}</div>`,on());return n.onCloseCb=e.onClose,n.noClose=e.noClose,this.modals.push(n),this.modal=!0,this.prompt(null),Dc(!0),n.addEventListener("click",s=>{s.target.closest("[data-x]")&&(Xt.sfx("click"),this.close(n))}),n}close(t){const e=this.modals.indexOf(t);if(e<0)return;this.modals.splice(e,1),t.remove(),this.modal=this.modals.length>0,this.modal||Dc(!1);const n=t.onCloseCb;n&&n()}closeTop(){const t=this.modals[this.modals.length-1];t&&!t.noClose&&(Xt.sfx("click"),this.close(t))}confirm(t,e="Да",n="Отмена"){return new Promise(s=>{let r=!1;const o=this.open(`<h2>Минутку</h2><div class="body"><p>${t}</p></div><div class="foot"><button class="btn small" data-x>${n}</button><button class="btn small red" data-y>${e}</button></div>`,{cls:"narrow",onClose:()=>s(r)});o.querySelector("[data-y]").onclick=()=>{r=!0,this.close(o)}})}pause(){if(this.modal)return;It.paused=!0,Xt.suspend(!0);const t=this.open(`<h2>Антракт <small>${Ue(It.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`,{cls:"narrow",onClose:()=>{It.paused=!1,Xt.suspend(!1),Xt.muffle(It.state.mask==="tragedy"?900:It.state.mask==="drama"?2600:2e4)}});t.addEventListener("click",async e=>{const n=e.target.dataset?.a;n&&(Xt.sfx("click"),n==="resume"&&this.close(t),n==="save"&&this.saveLoad("save"),n==="load"&&this.saveLoad("load"),n==="note"&&this.notebook(),n==="set"&&this.settings(),n==="menu"&&await this.confirm("Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.","Выйти")&&(this.close(t),It.stopToMenu(),this.mainMenu()))}),t.querySelector(".btn").focus()}settings(){const t=Se,e=(l,a,c="")=>`<div class="row-set"><label>${l}${c?`<small>${c}</small>`:""}</label><div>${a}</div></div>`,n=(l,a,c,u)=>`<input type="range" data-k="${l}" min="${a}" max="${c}" step="${u}" value="${t[l]}">`,s=l=>`<input type="checkbox" data-k="${l}" ${t[l]?"checked":""}>`,r=this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${e("Музыка",n("music",0,1,.05))}${e("Эффекты",n("sfx",0,1,.05))}${e("Голоса",n("voice",0,1,.05),"звуковой сигнал реплик; все реплики идут с субтитрами")}
      ${e("Скорость текста",n("textSpeed",0,120,5),"0 — мгновенно")}${e("Масштаб интерфейса",n("uiScale",.8,1.5,.05))}
      ${e("Качество графики",'<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>')}
      ${e("Меньше вспышек",s("reduceFlash"),"приглушает вспышки и глитч-эффекты")}${e("Без тряски камеры",s("reduceShake"))}${e("Повышенный контраст текста",s("contrast"))}
      ${e("Облегчённые ритм-сцены",s("rhythmEasy"),"широкие окна попадания, меньше нот, нельзя проиграть")}${e("Задержка звука, мс",n("rhythmOffset",-200,200,5)+" <span data-off></span>","для ритм-сцен")}
      ${e("",'<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${e("Сенсорное управление",s("touch"),"экспериментально: джойстик и кнопки на экране")}${e("Вступление при каждом запуске",s("introAlways"),"иначе — только при первом запуске")}
      <p class="warn">Управление: WASD или стрелки — ходьба, Shift — быстрее, E / Enter / Пробел — действие, 1–3 — маски, Q — снять маску, C — фотоаппарат, Tab — блокнот, H — история, Ctrl — пропуск прочитанного, Esc — пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);r.querySelector("[data-k=quality]").value=t.quality;const o=r.querySelector("[data-off]");o.textContent=t.rhythmOffset+"",r.addEventListener("input",l=>{const a=l.target,c=a.dataset.k;c&&(t[c]=a.type==="checkbox"?a.checked:a.tagName==="SELECT"?a.value:parseFloat(a.value),o.textContent=t.rhythmOffset+"",Mc(),this.applySettings(),c==="quality"&&It.R.setup(),c==="sfx"&&Xt.sfx("click"))}),r.addEventListener("click",async l=>{if(l.target.dataset?.a==="calib"){const{calibrate:a}=await pn(async()=>{const{calibrate:u}=await import("./minigames-BV5YX6Tn.js");return{calibrate:u}},[],import.meta.url),c=await a();c!=null&&(t.rhythmOffset=c,Mc(),r.querySelector("[data-k=rhythmOffset]").value=String(c),o.textContent=c+"")}})}async saveLoad(t){const e=this.open(`<h2>${t==="save"?"Сохранить":"Загрузить"} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс — для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${It.running?'<button class="btn small" data-a="exp">Экспорт в файл</button>':""}<button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-list]"),s=async()=>{const r=await Promise.all(bc.map(async o=>({s:o,...await Mr(o).catch(l=>(console.warn(l),{state:null,broken:!0}))})));n.innerHTML=r.map(({s:o,state:l,broken:a})=>`<div class="slot"><div><b>${ov[o]}</b>${l?`<small>${Ue(l.chapter)} · ${kv(l.time)} в театре · ${new Date(l.savedAt||0).toLocaleString("ru")}</small>`:`<small>${a?"⚠ данные повреждены или несовместимы":"пусто"}</small>`}</div><div class="acts">${t==="save"&&o!=="auto"&&It.running?`<button class="btn small" data-s="${o}" data-do="save">Записать</button>`:""}${l?`<button class="btn small" data-s="${o}" data-do="load">Загрузить</button>`:""}${l||a?`<button class="btn small red" data-s="${o}" data-do="del">✕</button>`:""}</div></div>`).join("")};await s(),e.addEventListener("click",async r=>{const o=r.target,l=o.dataset?.s,a=o.dataset?.do,c=o.dataset?.a;if(a==="save"&&l&&(await It.save(l),await s()),a==="del"&&l&&await this.confirm("Удалить это сохранение?","Удалить")&&(await lv(l),await s()),a==="load"&&l){const u=await Mr(l);if(!u.state){this.toast("Сохранение повреждено","⚠");return}if(It.running&&!await this.confirm("Загрузить сохранение? Текущий несохранённый прогресс будет потерян.","Загрузить"))return;this.closeAll(),It.stopToMenu(),document.querySelector(".menu-screen")?.remove(),await It.start(u.state)}if(c==="exp"){const u=new Blob([cv(It.state)],{type:"application/json"}),h=URL.createObjectURL(u),d=document.createElement("a");d.href=h,d.download="the-other-me-save.json",d.click(),setTimeout(()=>URL.revokeObjectURL(h),2e3)}if(c==="imp"){const u=document.createElement("input");u.type="file",u.accept=".json,application/json",u.onchange=async()=>{const h=u.files?.[0];if(!h)return;const d=hv(await h.text());if(!d){this.toast("Файл не похож на сохранение этой игры","⚠");return}await el("slot3",d),this.toast("Импортировано в «Слот III»","✎"),await s()},u.click()}})}closeAll(){for(;this.modals.length;){const t=this.modals[this.modals.length-1];t.onCloseCb=null,this.close(t)}It.paused=!1}notebook(t="chars"){if(!It.running)return;const e=this.open(`<h2>Блокнот режиссёра <small>В. — «не забыть ничего»</small></h2><div class="tabs">${Object.entries(Rv).map(([r,o])=>`<button class="tab" data-t="${r}">${o}</button>`).join("")}<button class="tab" data-t="photos">Фотоархив</button><button class="tab" data-t="map">План театра</button></div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-b]"),s=r=>{if(e.querySelectorAll(".tab").forEach(l=>l.classList.toggle("on",l.dataset.t===r)),r==="map"){n.innerHTML=Fv(It.state.room,It.state.f.visited||{});return}if(r==="photos"){n.innerHTML=It.state.photos.length?`<div class="photos">${It.state.photos.map((l,a)=>`<div class="photo" style="--r:${a*37%7-3}deg"><img src="${l.img}" alt=""><span>${Ue(l.caption)}</span></div>`).join("")}</div>`:"<p><i>Плёнка пока пуста. Фотоаппарат — клавиша C.</i></p>";return}let o="";r==="items"&&(o=It.state.inv.map(l=>`<div class="entry noimg"><div><h4>${Ue(Lr[l]?.name||l)}</h4><p>${Ue(Lr[l]?.desc||"")}</p></div></div>`).join("")),o+=It.state.notes.map(l=>Co[l]).filter(l=>l&&l.cat===r).map(l=>{const a=l.char?hn[l.char]:null;return`<div class="entry ${a?"":"noimg"}">${a?`<img src="${Jh(l.char,l.expr||"neutral")}" alt="">`:""}<div><h4>${Ue(l.title)}</h4>${a?.role?`<div class="role">${Ue(a.role)}</div>`:""}<p>${l.text}</p></div></div>`}).join(""),n.innerHTML=o||"<p><i>Здесь пока пусто.</i></p>"};e.addEventListener("click",r=>{const o=r.target.dataset?.t;o&&(Xt.sfx("paper"),s(o))}),s(t)}async mainMenu(){this.hudShow(!1),document.querySelector(".menu-screen")?.remove();const t=await Promise.all(bc.map(u=>Mr(u).catch(()=>({state:null,broken:!0}))));let e=null;for(const u of t)u.state&&(!e||(u.state.savedAt||0)>(e.savedAt||0))&&(e=u.state);let n=!1;try{n=localStorage.getItem("tom-intro-seen")==="1"}catch(u){console.warn("[intro] localStorage недоступен",u)}const s=!this.introPlayed&&(!n||Se.introAlways)&&!It.fast;this.introPlayed=!0;const{DressingRoom:r}=await pn(async()=>{const{DressingRoom:u}=await import("./dressing-B1DJN_Lj.js");return{DressingRoom:u}},[],import.meta.url);It.menuScene&&It.menuScene.dispose();const o=It.menuScene=new r(It.R,s),l=ve("div","menu-screen m3d"+(s?" intro":" ready"),`<div class="m3d-left"><div class="menu-logo">${Ov}</div><nav class="menu-list"><button class="btn" data-a="cont" ${e?"":"disabled"}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="cred">Создатели</button><button class="btn" data-a="exit">Выход</button></nav></div><div class="m3d-hint">нажмите или кликните, чтобы повернуть ключ</div><div class="m3d-skip">Esc — пропустить вступление</div>`,on());o.onState=u=>{if(l.classList.toggle("await",u==="await"),u==="logo"&&l.classList.add("logo-in"),u==="menu"){l.classList.remove("intro"),l.classList.add("ready","logo-in");try{localStorage.setItem("tom-intro-seen","1")}catch(h){console.warn(h)}l.querySelector(e?"[data-a=cont]":"[data-a=new]")?.focus({preventScroll:!0})}},o.build();const a=u=>{if(o.state==="menu"||this.modal)return;Xt.init();const h=u.code==="Escape";o.input(h?"skip":"act"),u.type==="keydown"&&u.preventDefault()};window.addEventListener("keydown",a,!0),l.addEventListener("pointerdown",a);const c=()=>{window.removeEventListener("keydown",a,!0),l.remove()};l.addEventListener("mouseover",u=>{const h=u.target.closest(".btn");h&&!h.disabled&&o.state==="menu"&&Xt.sfx("mechtick")}),l.addEventListener("click",async u=>{Xt.init();const h=u.target.dataset?.a;if(!(!h||o.state!=="menu")){if(Xt.sfx("click"),h==="cont"&&e&&(c(),await It.start(e)),h==="new"){if(e&&!await this.confirm("Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.","Начать"))return;c(),await It.start(Qo())}if(h==="load"&&this.saveLoad("load"),h==="set"&&this.settings(),h==="cred"&&this.credits(!1),h==="exit"){Xt.music(null),Xt.sfx("curtain");const d=ve("div","card",'<p class="act">ЗАНАВЕС</p><p>Спасибо, что заглянули в гримёрку.</p><p class="sm">Закройте вкладку — или нажмите, чтобы вернуться.</p>',on());d.onclick=()=>{d.remove(),Xt.music("musicbox")}}}})}credits(t){return new Promise(e=>{const n=(a,c)=>`<h3>${a}</h3>${c.map(u=>`<p>${u}</p>`).join("")}`,s=ve("div","credits",`<div class="roll" style="--dur:${t?70:55}s"><div class="cred-logo">${Qh("c")}</div>
        ${n("В РОЛЯХ",["Варя<small>режиссёрка, Молодая Девушка, Королева — и всё это одновременно</small>","Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>","Артемий<small>школьный кот одобряет</small>"])}
        ${n("ТРУППА ТЕАТРА",["Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма — их рук дело</small>"])}
        ${n("В ЗРИТЕЛЬНОМ ЗАЛЕ",["Мама Наташа и Саша","Папа Максим и Настя","Вася","Софа · Катя"])}
        ${n("ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ",["Кукольник<small>просил не указывать. Указан.</small>"])}
        ${n("МУЗЫКА, ДЕКОРАЦИИ, СВЕТ",["Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры","Three.js · TypeScript · Vite"])}
        ${n("ШРИФТЫ ЛОГОТИПА",["Aurelia Diamond · Cintarini · Highcrest · Lombardina Initial One<small>лицензии «для личного некоммерческого использования»; игра — подарок, не продукт</small>","Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>"])}
        ${n("ОСОБАЯ БЛАГОДАРНОСТЬ",["Третьему ряду.<small>Вас видно. Правда.</small>"])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`,on()),r=()=>{o(),s.remove(),e()},o=Vi(a=>{(a==="act"||a==="pause")&&r()}),l=performance.now();s.onclick=()=>{performance.now()-l>600&&r()},s.querySelector(".roll").addEventListener("animationend",r),It.fast&&r()})}buildTouch(){this.touchEl=ve("div","touch hidden",'<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="camera">◉</button><button class="tbtn" data-a="mask0">☺</button><button class="tbtn big" data-a="act">E</button></div>',on());const t=this.touchEl.querySelector(".stick"),e=t.querySelector("i");let n=null;const s=l=>{const a=t.getBoundingClientRect();let c=(l.clientX-a.left-a.width/2)/(a.width/2),u=(l.clientY-a.top-a.height/2)/(a.height/2);const h=Math.hypot(c,u);h>1&&(c/=h,u/=h),Vn.x=c,Vn.y=u,e.style.transform=`translate(${c*2.2}rem, ${u*2.2}rem)`};t.addEventListener("pointerdown",l=>{n=l.pointerId,t.setPointerCapture(n),s(l)}),t.addEventListener("pointermove",l=>{l.pointerId===n&&s(l)});const r=l=>{l.pointerId===n&&(n=null,Vn.x=Vn.y=0,e.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r);let o=0;this.touchEl.querySelector(".tbtns").addEventListener("pointerdown",l=>{const a=l.target.dataset?.a;if(a)if(l.preventDefault(),a==="mask0"){const c=[null,"comedy","tragedy","drama"];o=(o+1)%4,c[o]?It.setMask(c[o]):It.state.mask&&It.setMask(It.state.mask)}else xs(a)})}}const $t=new Bv,zv={hub:()=>pn(()=>import("./hub-Cd5PH_yl.js"),__vite__mapDeps([0,1]),import.meta.url),pol:()=>pn(()=>import("./polina-B_qh8QU-.js"),__vite__mapDeps([2,1,3]),import.meta.url),rub:()=>pn(()=>import("./ruben-BGUGoeGF.js"),__vite__mapDeps([4,1,3]),import.meta.url),mat:()=>pn(()=>import("./matvey-CnNWG1GH.js"),__vite__mapDeps([5,1,3]),import.meta.url),eri:()=>pn(()=>import("./erika-U3e0XQW6.js"),__vite__mapDeps([6,1,3]),import.meta.url),liz:()=>pn(()=>import("./lisa-C45I5lBs.js"),__vite__mapDeps([7,1,3]),import.meta.url),ang:()=>pn(()=>import("./angelina-DmT21MHr.js"),__vite__mapDeps([8,1,3]),import.meta.url),fin:()=>pn(()=>import("./finale-BMmjuRpO.js"),__vite__mapDeps([9,1,0]),import.meta.url)},Oi={},Vv={comedy:{sat:1.35,tint:[1.08,1.02,.86],vig:.2,bright:1.08},tragedy:{sat:.35,tint:[.82,.9,1.12],vig:.6,bright:.9,contrast:1.1},drama:{sat:.9,tint:[1.1,.9,.92],vig:.55,bright:1}},Gv={comedy:"Комедия",tragedy:"Трагедия",drama:"Драма"};class Hv{constructor(){this.state=Qo(),this.room=null,this.lock=0,this.paused=!1,this.running=!1,this.t=0,this.cam={x:0,z:0,dist:24,focus:null,shake:0,roll:0,pitch:.56,yOff:1.2},this.near=null,this.trail=[],this.followers=[],this.stepT=0,this.busy=!1,this.inPhoto=!1,this.fast=!1,this.playerSpeed=5.6,this.override=null,this.debug=!1,this.gradeBase={},this.audio=Xt,this.ui=$t,this.menuScene=null,this.waits=[],this.runDepth=0}boot(t){this.R=new fv(t),this.debug=new URLSearchParams(location.search).has("debug");let e=performance.now();const n=s=>{const r=Math.min(.05,(s-e)/1e3);e=s;try{this.frame(r)}catch(o){console.error("[game] ошибка кадра",o)}requestAnimationFrame(n)};requestAnimationFrame(n),Vi(s=>this.onAction(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.running&&!this.paused&&!$t.modal&&$t.pause()}),window.addEventListener("beforeunload",s=>{this.running&&this.lock>0&&!this.debug&&(s.preventDefault(),s.returnValue="")})}get f(){return this.state.f}flag(t){return this.state.f[t]}set(t,e=!0){typeof t=="string"?this.state.f[t]=e:Object.assign(this.state.f,t)}has(t){return this.state.inv.includes(t)}give(t,e=!1){this.has(t)||(this.state.inv.push(t),Lr[t]||console.warn("[game] нет описания предмета",t),e||(this.sfx("pickup"),$t.toast("Получено: "+(Lr[t]?.name||t),"✦")))}take(t){const e=this.state.inv.indexOf(t);e>=0&&this.state.inv.splice(e,1)}note(t){if(!this.state.notes.includes(t)){if(!Co[t]){console.warn("[game] нет записи блокнота",t);return}this.state.notes.push(t),this.sfx("pencil"),$t.toast("Блокнот: "+Co[t].title,"✎")}}done(t){return!!this.state.f["done_"+t]}doneCount(){return["polina","ruben","matvey","erika","liza","angelina"].filter(t=>this.done(t)).length}sfx(t,e){Xt.sfx(t,e)}toast(t,e){$t.toast(t,e)}wait(t){return this.fast?Promise.resolve():new Promise(e=>this.waits.push({t,res:e}))}async start(t){this.menuScene&&(this.menuScene.dispose(),this.menuScene=null),this.state=t,this.running=!0,this.lock=0,this.paused=!1,$t.hudShow(!0),await this.goto(t.room,t.spot,{fade:"fade",load:!0})}stopToMenu(){this.running=!1,this.clearRoom(),Xt.music(null),Xt.ambience(null),$t.hudShow(!1)}async save(t="auto"){if(!this.running)return;const e=this.state;this.player&&(e.px=this.player.x,e.pz=this.player.z);try{await el(t,e),$t.saved(t)}catch(n){console.error("[save] не удалось сохранить",n),$t.toast("Не удалось сохранить игру: хранилище браузера недоступно","⚠")}}clearRoom(){for(const t of this.waits)t.res();this.waits=[],this.room&&(this.R.scene.remove(this.room.group),this.room.dispose(),this.room=null),this.followers=[],this.trail=[],this.near=null,this.override=null,$t.prompt(null)}async loadRoom(t){if(Oi[t])return Oi[t];const e=t.split("_")[0],n=zv[e];if(!n)throw new Error("Неизвестная локация: "+t);$t.loading(!0);try{const s=await n();Object.assign(Oi,s.rooms)}finally{$t.loading(!1)}if(!Oi[t])throw new Error("Глава не содержит локацию: "+t);return Oi[t]}async goto(t,e="start",n={}){var l;this.lock++;const s=this.room?this.room.id:n.load?"load":"",r=this.fast?"none":n.fade||"fade";try{r!=="none"&&await $t.transition(r,"out");let a;try{a=await this.loadRoom(t)}catch(m){throw r!=="none"&&await $t.transition(r,"in"),m}this.clearRoom(),this.cam.focus=null,this.cam.roll=0;const c=this.room=new Xh(t,a),u=new Yh(c,this);this.player=new nl(this.state.f.playerChar||"varya","player"),a.build(u,this),c.actors.push(this.player),c.group.add(this.player.group);const h=new wo(16773340,2.2,4.5,1.5);h.position.set(.6,2.4,1.6),this.player.group.add(h);const d=c.spawns[e]||c.spawns.start||{x:0,z:0,dir:"f"};!c.spawns[e]&&e!=="start"&&console.warn(`[game] в ${t} нет точки появления ${e}`),n.load&&this.state.room===t&&this.state.px!=null&&!this.hits(this.state.px,this.state.pz)?this.player.place(this.state.px,this.state.pz,"f"):this.player.place(d.x,d.z,d.dir);{const m=this.freeSpot(this.player.x,this.player.z);(m.x!==this.player.x||m.z!==this.player.z)&&(this.debug&&console.warn(`[room] ${t}: точка «${e}» занята, героиня сдвинута`),this.player.place(m.x,m.z))}for(const m of this.followers){const p=this.freeSpot(this.player.x+.8,this.player.z+.3);m.place(p.x,p.z)}this.R.scene.add(c.group),this.R.scene.background=new zt(c.group.userData.bg??328710),this.R.scene.fog=c.group.userData.fog||null,this.gradeBase=a.grade||{},this.applyMask(!0),this.applyGrade(!0),this.cam.dist=a.camDist||24,this.camSnap(),a.music!==void 0&&Xt.music(a.music),Xt.ambience(a.amb??null),this.state.room=t,this.state.spot=e,((l=this.state.f).visited||(l.visited={}))[t]=1,a.chapter&&(this.state.chapter=a.chapter),$t.hud(),!n.load&&!this.fast&&await this.save("auto"),r!=="none"&&await $t.transition(r,"in"),!n.silent&&s!==t&&$t.place(a.name)}finally{this.lock--}const o=this.room.def;o.enter&&await this.cut(()=>o.enter(this,s))}async rebuild(){const t=this.player,e=t.x,n=t.z,s=t.dir;await this.goto(this.room.id,this.state.spot,{fade:"none",silent:!0}),this.player.place(e,n,s),this.camSnap()}async cut(t){this.lock++,$t.prompt(null);try{return await t()}finally{this.lock--}}async say(t,e,n="neutral",s){const r=t==="~",o=t==="*",l=r?"varya":t,a=hn[l];!o&&!a&&console.warn("[dialogue] неизвестный говорящий",t);const c=t+":"+e,u=!!this.state.seen[kc(c)];await $t.say({name:o?"":s||a?.name||t,color:a?.color||"#e8d8a8",portrait:o||!a?"":Jh(l,n),text:e,italic:r||o,pitch:a?.pitch||300,seen:u}),this.state.seen[kc(c)]=1}async line(t){const e=/^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(t);if(!e){console.warn("[dialogue] не разобрана реплика:",t);return}await this.say(e[1],e[4],e[3]||"neutral",e[2])}async choice(t){return $t.choice(t.map(e=>typeof e=="string"?{text:e}:e))}async run(t){this.lock++,this.runDepth++,Xt.duck(!0);try{for(const e of t)if(typeof e=="string")await this.line(e);else if(typeof e=="function"){const n=await e(this);Array.isArray(n)&&await this.run(n)}else if(e.c){const n=e.c.filter(o=>{const l=o[2]||{};return!(l.if&&!l.if(this.state.f,this)||l.mask&&this.state.mask!==l.mask)}),s=await this.choice(n.map(o=>({text:o[0],mask:!!(o[2]&&o[2].mask)}))),r=n[s];r[2]&&r[2].set&&this.set(r[2].set),await this.run(r[1]||[])}else if(e.if)await this.run(e.if(this.state.f,this)?e.t||[]:e.e||[]);else{if(e.set&&this.set(e.set),e.note&&this.note(e.note),e.give&&this.give(e.give),e.sfx&&this.sfx(e.sfx),e.music!==void 0&&Xt.music(e.music),e.wait&&await this.wait(e.wait),e.pose){const n=this.actor(e.pose[0]);n&&(n.pose=e.pose[1])}e.shake&&this.shake(e.shake),e.flash&&this.flash()}}finally{this.lock--,this.runDepth--,this.runDepth===0&&(Xt.duck(!1),$t.sayHide())}}actor(t){return t==="player"?this.player:this.room?.actor(t)}setMask(t){!this.state.f.masks||this.room?.def.noMasks||(this.state.mask===t&&(t=null),this.state.mask=t,this.sfx("mask"),this.applyMask(),this.applyGrade(),$t.hud(),Xt.muffle(t==="tragedy"?900:t==="drama"?2600:2e4))}applyMask(t=!1){const e=this.room;if(!e)return;const n=e.def.noMasks?null:this.state.mask;e.def.noMasks&&Xt.muffle(2e4);for(const s of e.masked){const r=s.mask==="none"?!n:s.mask===n;s.obj.visible=r,s.box&&(s.box.on=r)}for(const s of e.inters)s.mask&&(s.enabled=s.mask==="none"?!n:s.mask===n,s.marker&&(s.marker.visible=s.enabled))}applyGrade(t=!1){const e=this.room?.def.noMasks?null:this.state.mask,n={...this.gradeBase,...e?qv(this.gradeBase,Vv[e]):{}};this.R.setGrade(n,t)}grade(t,e=!1){this.gradeBase={...this.gradeBase,...t},this.applyGrade(e)}camBounds(){const t=this.room.def,e=Math.max(0,t.w/2-9),n=Math.min(0,-t.d/2+4.5),s=t.camZMax??Math.max(n,t.d/2-7);return{mx:e,z0:n,z1:s}}camSnap(){const t=this.player,e=this.camBounds();this.cam.x=gs(t.x,-e.mx,e.mx),this.cam.z=gs(t.z,e.z0,e.z1)}focus(t,e,n=18){this.cam.focus={x:t,z:e,dist:n}}unfocus(){this.cam.focus=null}shake(t=.4){Se.reduceShake||(this.cam.shake=Math.max(this.cam.shake,t))}flash(t=.9){this.R.flash=t}async photoMode(){if(!this.has("camera")||this.inPhoto||this.room?.def.noCamera)return;this.inPhoto=!0,this.lock++;const t=this.player,e=Wv(t.dir);this.focus(t.x+e.x*3,t.z+e.z*3,15),$t.viewfinder(!0);try{if(await this.key(["act","camera","pause"])==="act"){const s=this.room,r=s.def.noMasks?null:this.state.mask,o=s.photos.filter(c=>{if(c.cond&&!c.cond()||c.mask&&(c.mask==="none"?r:c.mask!==r))return!1;const u=c.x-t.x,h=c.z-t.z,d=Math.hypot(u,h);return d<1.8?!0:d<8&&(u*e.x+h*e.z)/d>.6});$t.viewfinder(!1);const l=this.R.snapshot();this.sfx("shutter"),this.flash(.8);const a=o.length?o.map(c=>c.name).join(", "):s.def.name;for(this.state.photos.push({id:"p"+Date.now().toString(36),img:l,caption:a,subjects:o.map(c=>c.id),room:s.id});this.state.photos.length>36;){const c=this.state.photos.findIndex(u=>!u.subjects.length);this.state.photos.splice(c>=0?c:0,1)}$t.toast("Снимок: "+a,"◉"),this.unfocus(),s.def.photo&&await s.def.photo(this,o.map(c=>c.id))}}finally{$t.viewfinder(!1),this.unfocus(),this.lock--,this.inPhoto=!1}}photographed(t){return this.state.photos.some(e=>e.subjects.includes(t))}key(t){return new Promise(e=>{const n=Vi(s=>{t.includes(s)&&(n(),setTimeout(()=>e(s),0))})})}follow(t){this.followers.push(t)}unfollow(t){t&&(this.followers=this.followers.filter(e=>e!==t),t.moving=!1)}setPlayerChar(t){this.state.f.playerChar=t,this.player.setChar(t)}onAction(t){if(!(!this.running||$t.modal||this.paused)){if(t==="pause"&&!this.inPhoto){$t.pause();return}if(t==="history"){$t.history();return}if(!(this.lock>0))if(t==="act"&&this.near){const e=this.near;this.sfx("click"),this.cut(()=>e.fn(this)).catch(n=>console.error("[game] ошибка взаимодействия",e.id,n))}else t==="mask1"?this.setMask("comedy"):t==="mask2"?this.setMask("tragedy"):t==="mask3"?this.setMask("drama"):t==="mask0"?this.state.mask&&this.setMask(this.state.mask):t==="camera"?this.photoMode():t==="notebook"?$t.notebook():this.room?.def.onKey&&this.room.def.onKey(this,t)}}freeSpot(t,e){if(!this.hits(t,e))return{x:t,z:e};for(let n=.25;n<8;n+=.25)for(let s=0;s<16;s++){const r=t+Math.cos(s/16*Math.PI*2)*n,o=e+Math.sin(s/16*Math.PI*2)*n;if(!this.hits(r,o))return{x:r,z:o}}return{x:t,z:e}}reachCheck(){const t=this.room,e=this.player,n=.25,s=t.def.w,r=t.def.d,o=Math.ceil(s/n),l=Math.ceil(r/n),a=new Uint8Array(o*l),c=(m,p)=>Math.floor((p+r/2)/n)*o+Math.floor((m+s/2)/n),u=[[e.x,e.z]],h=[];for(this.hits(e.x,e.z)&&h.push("героиня внутри коллизии");u.length;){const[m,p]=u.pop(),v=c(m,p);if(!(v<0||v>=a.length||a[v])){a[v]=1;for(const[f,g]of[[n,0],[-n,0],[0,n],[0,-n]]){const x=m+f,M=p+g;this.hits(x,M)||u.push([x,M])}}}const d=(m,p,v)=>{for(let f=p-v;f<=p+v;f+=n)for(let g=m-v;g<=m+v;g+=n){if(Math.hypot(g-m,f-p)>v-.2)continue;const x=c(g,f);if(x>=0&&x<a.length&&a[x])return!0}return!1};for(const m of t.inters)!m.mask&&!(m.cond&&!m.cond())&&!d(m.x,m.z,m.r)&&h.push("недостижимо: "+m.id+" ("+m.label+")");for(const[m,p]of Object.entries(t.spawns))this.hits(p.x,p.z)&&h.push("точка появления в коллизии: "+m);return h}hits(t,e,n=.38){const s=this.room,r=s.def.w/2-n,o=s.def.d/2-n;if(t<-r||t>r||e<-o||e>o)return!0;for(const l of s.boxes)if(l.on&&t>l.x0-n&&t<l.x1+n&&e>l.z0-n&&e<l.z1+n)return!0;return!1}los(t,e,n,s){for(let r=1;r<8;r++){const o=t+(n-t)*r/8,l=e+(s-e)*r/8;for(const a of this.room.boxes)if(a.on&&a.x1-a.x0>.9&&o>a.x0&&o<a.x1&&l>a.z0&&l<a.z1)return!1}return!0}frame(t){const e=this.room;if(!e||!this.running){this.menuScene&&!this.running&&(this.menuScene.update(t),this.R.render(t)),Pa();return}if(this.paused){this.R.render(0),Pa();return}this.t+=t,this.state.time+=t;const n=this.player;if(this.waits.length){for(const g of this.waits)g.t-=t;const f=this.waits.filter(g=>g.t<=0);this.waits=this.waits.filter(g=>g.t>0);for(const g of f)g.res()}if(this.override)this.override(t);else if(this.lock===0&&!$t.modal){const f=Cv(),g=Math.hypot(f.x,f.y)>.15;if(g){const x=this.playerSpeed*(Gi("run")?1.35:1)*t,M=n.x+f.x*x,y=n.z+f.y*x;this.hits(M,n.z)||(n.x=M),this.hits(n.x,y)||(n.z=y),n.dir=Math.abs(f.x)>Math.abs(f.y)?f.x>0?"r":"l":f.y>0?"f":"b",this.stepT-=t,this.stepT<=0&&(this.stepT=.3,this.sfx("step",{mat:e.def.step||"wood"}));const R=this.trail[this.trail.length-1];(!R||Math.hypot(R.x-n.x,R.z-n.z)>.35)&&(this.trail.push({x:n.x,z:n.z}),this.trail.length>40&&this.trail.shift())}n.moving=g;for(const x of e.triggers){const M=n.x>x.x0&&n.x<x.x1&&n.z>x.z0&&n.z<x.z1;if(M&&!x.inside&&!(x.once&&x.done)){x.done=!0,x.inside=!0,this.cut(()=>x.fn(this)).catch(y=>console.error("[game] ошибка триггера",y));break}x.inside=M}}else n.target||(n.moving=!1);this.followers.forEach((f,g)=>{const x=this.trail[this.trail.length-1-(g+1)*3];if(x&&Math.hypot(x.x-f.x,x.z-f.z)>.25&&Math.hypot(n.x-f.x,n.z-f.z)>1.3){const M=x.x-f.x,y=x.z-f.z,R=Math.hypot(M,y),w=Math.min(R,this.playerSpeed*1.05*t);f.x+=M/R*w,f.z+=y/R*w,f.face(x.x,x.z),f.moving=!0}else f.target||(f.moving=!1)});for(const f of e.actors)f.update(t);if(this.lock===0){for(const f of e.guards){if(!f.active){f.cone.visible=!1;continue}f.cone.visible=!0;const g=f.actor;if(f.off>0&&(f.off-=t,f.cone.visible=Math.floor(f.off*8)%2===0),f.wait>0)f.wait-=t;else if(!g.target&&f.path.length>1){f.i=(f.i+1)%f.path.length;const[x,M]=f.path[f.i];f.ang=Math.atan2(M-g.z,x-g.x),g.walkTo(x,M,f.speed).then(()=>{f.wait=f.pause})}if(f.cone.position.set(g.x,.05,g.z),f.cone.rotation.y=-f.ang,f.off<=0&&!n.hidden&&!n.stealth){const x=n.x-g.x,M=n.z-g.z,y=Math.hypot(x,M);let R=Math.atan2(M,x)-f.ang;for(;R>Math.PI;)R-=Math.PI*2;for(;R<-Math.PI;)R+=Math.PI*2;if(y<f.range&&Math.abs(R)<f.half&&this.los(g.x,g.z,n.x,n.z)){this.cut(()=>f.onCatch(this)).catch(w=>console.error(w));break}}}for(const f of e.lasers)if(f.on=f.active&&(this.t+f.phase)%f.period<f.duty*f.period,f.mesh.visible=f.on,f.on&&!n.hidden&&!n.stealth){const g=f.x1-f.x0,x=f.z1-f.z0,M=g*g+x*x;let y=((n.x-f.x0)*g+(n.z-f.z0)*x)/M;if(y=gs(y,0,1),Math.hypot(n.x-f.x0-g*y,n.z-f.z0-x*y)<.4){this.cut(()=>f.onHit(this)).catch(R=>console.error(R));break}}}else for(const f of e.actors)!f.target&&f!==n&&!this.followers.includes(f)&&(f.moving=!1);for(const f of e.flick)f.l.intensity=f.base*(1+(Math.sin(this.t*13+f.base)*.5+Math.sin(this.t*31)*.5)*f.s);for(const f of e.occluders){const g=n.z<f.z-.2&&n.z>f.z-7&&n.x>f.x0-.8&&n.x<f.x1+.8,x=f.mesh.material,M=g?.18:1;x.opacity+=(M-x.opacity)*Math.min(1,t*8),x.depthWrite=x.opacity>.9}for(const f of e.updaters)f(t,this.t);e.def.update&&e.def.update(this,t,this.t);let s=null,r=1e9;if(this.lock===0&&!$t.modal)for(const f of e.inters){if(!f.enabled||f.cond&&!f.cond()){f.marker&&(f.marker.visible=!1);continue}const g=Math.hypot(f.x-n.x,f.z-n.z);f.marker&&(f.marker.visible=g<5,f.marker.position.y=f.y+.5+Math.sin(this.t*3+f.x)*.08,f.marker.rotation.y=this.t*2),g<f.r&&g<r&&(r=g,s=f)}this.near=s;const o=this.cam,l=o.focus,a=this.camBounds(),c=l?l.x:gs(n.x,-a.mx,a.mx),u=l?l.z:gs(n.z,a.z0,a.z1),h=l?l.dist:e.def.camDist||24,d=Math.min(1,t*3.5);o.x+=(c-o.x)*d,o.z+=(u-o.z)*d,o.dist+=(h-o.dist)*d,o.shake=Math.max(0,o.shake-t*1.2);const m=(Math.random()-.5)*o.shake,p=(Math.random()-.5)*o.shake,v=this.R.cam.aspect<1?1.25:1;if(this.R.cam.position.set(o.x+m,o.yOff+Math.sin(o.pitch)*o.dist*v+p,o.z+Math.cos(o.pitch)*o.dist*v),this.R.cam.up.set(Math.sin(o.roll),Math.cos(o.roll),0),this.R.cam.lookAt(o.x+m,o.yOff,o.z),this.R.render(t),s){const f=new L(s.x,s.y+.9,s.z).project(this.R.cam);$t.prompt(s.label,(f.x+1)/2,(1-f.y)/2)}else $t.prompt(null);Pa()}}function gs(i,t,e){return Math.max(t,Math.min(e,i))}function Wv(i){return i==="l"?{x:-1,z:0}:i==="r"?{x:1,z:0}:i==="b"?{x:0,z:-1}:{x:0,z:1}}function kc(i){let t=5381;for(let e=0;e<i.length;e++)t=(t<<5)+t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function qv(i,t){const e=i.tint||[1,1,1],n=t.tint||[1,1,1];return{sat:(i.sat??1)*(t.sat??1),tint:[e[0]*n[0],e[1]*n[1],e[2]*n[2]],vig:Math.max(i.vig??.35,t.vig??0),bright:(i.bright??1)*(t.bright??1),contrast:(i.contrast??1)*(t.contrast??1)}}const It=new Hv;It.__rooms=()=>Oi;window.__G=It;async function $v(){const i=document.getElementById("boot"),t=document.getElementById("boot-s");try{await Promise.all(['8px "Pixelify Sans"',"16px Lora",'16px "Playfair Display"','16px "Marck Script"',"16px Aurelia","16px Cintarini","16px Highcrest","16px Lombardina"].map(n=>document.fonts.load(n,"AБя").catch(s=>console.warn("[fonts]",n,s)))),$t.init(),It.boot(document.getElementById("game"));const e=()=>{Xt.init()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),await $t.mainMenu(),i.style.opacity="0",setTimeout(()=>i.remove(),700)}catch(e){console.error("[boot] игра не запустилась",e),t.textContent="Не удалось запустить игру: "+(e?.message||e)+". Проверьте, что браузер поддерживает WebGL, и обновите страницу."}}$v();export{Ls as $,ws as A,ui as B,hn as C,Ye as D,Uh as E,Mh as F,li as G,Bg as H,Yv as I,Ze as J,sg as K,Sh as L,xe as M,et as N,jo as O,Mo as P,$o as Q,Sr as R,Ph as S,kh as T,ag as U,L as V,Ko as W,Xo as X,Nh as Y,Rh as Z,pn as _,qn as a,Zv as a0,ie as b,Rs as c,Yo as d,Xv as e,eg as f,Fh as g,_s as h,mn as i,Xt as j,It as k,ve as l,Tv as m,Q0 as n,Vi as o,To as p,Kv as q,Ge as r,Se as s,qh as t,$t as u,wo as v,zt as w,kl as x,Vg as y,Ae as z};
