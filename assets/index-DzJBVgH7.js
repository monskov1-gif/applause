const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./hub-C_Sruc8O.js","./minigames-D6QggvY3.js","./decor-adbtWBcU.js","./polina-DnzAJdNT.js","./common-arSD5Ju9.js","./ruben-B7KPomr6.js","./matvey-CYt-8dz5.js","./erika-C5lhlCPG.js","./lisa-BepiX9db.js","./angelina-DR3yJqZO.js","./finale-Cfd3eHSZ.js"])))=>i.map(i=>d[i]);
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const Pu="modulepreload",Lu=function(i,t){return new URL(i,t).href},Dl={},An=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),c=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(h=>{if(h=Lu(h,n),h in Dl)return;Dl[h]=!0;const l=h.endsWith(".css"),f=l?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const v=a[g];if(v.href===h&&(!l||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${f}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":Pu,l||(m.as="script"),m.crossOrigin="",m.href=h,c&&m.setAttribute("nonce",c),document.head.appendChild(m),l)return new Promise((g,v)=>{m.addEventListener("load",g),m.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yo="169",Du=0,Il=1,Iu=2,jo=1,Uu=2,Bn=3,ei=0,sn=1,Ie=2,Ln=0,Mi=1,Si=2,Ul=3,Nl=4,Nu=5,mi=100,ku=101,Fu=102,Ou=103,Bu=104,zu=200,Vu=201,Hu=202,Gu=203,Ka=204,Za=205,Wu=206,qu=207,$u=208,Xu=209,Yu=210,ju=211,Ku=212,Zu=213,Ju=214,Ja=0,Qa=1,to=2,is=3,eo=4,no=5,io=6,so=7,Ko=0,Qu=1,tf=2,ti=0,dh=1,ph=2,mh=3,Zo=4,ef=5,gh=6,vh=7,_h=300,ss=301,rs=302,ro=303,ao=304,jr=306,Vr=1e3,_i=1001,oo=1002,Ue=1003,nf=1004,js=1005,bn=1006,oa=1007,xi=1008,Gn=1009,xh=1010,yh=1011,Os=1012,Jo=1013,wi=1014,Pn=1015,wn=1016,Qo=1017,tl=1018,as=1020,bh=35902,Mh=1021,Sh=1022,Mn=1023,wh=1024,Th=1025,ts=1026,os=1027,el=1028,nl=1029,Eh=1030,il=1031,sl=1033,Lr=33776,Dr=33777,Ir=33778,Ur=33779,lo=35840,co=35841,ho=35842,uo=35843,fo=36196,po=37492,mo=37496,go=37808,vo=37809,_o=37810,xo=37811,yo=37812,bo=37813,Mo=37814,So=37815,wo=37816,To=37817,Eo=37818,Ao=37819,Co=37820,Ro=37821,Nr=36492,Po=36494,Lo=36495,Ah=36283,Do=36284,Io=36285,Uo=36286,sf=3200,Ch=3201,rl=0,rf=1,Jn="",hn="srgb",ni="srgb-linear",al="display-p3",Kr="display-p3-linear",Hr="linear",_e="srgb",Gr="rec709",Wr="p3",Ci=7680,kl=519,af=512,of=513,lf=514,Rh=515,cf=516,hf=517,uf=518,ff=519,No=35044,Fl="300 es",Vn=2e3,qr=2001;class ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const $e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],la=Math.PI/180,$r=180/Math.PI;function Hn(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function He(i,t,e){return Math.max(t,Math.min(e,i))}function df(i,t){return(i%t+t)%t}function ca(i,t,e){return(1-e)*i+e*t}function Rn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function pe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class rt{constructor(t=0,e=0){rt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,r,a,o,c,h){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h)}set(t,e,n,s,r,a,o,c,h){const l=this.elements;return l[0]=t,l[1]=s,l[2]=o,l[3]=e,l[4]=r,l[5]=c,l[6]=n,l[7]=a,l[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],h=n[1],l=n[4],f=n[7],d=n[2],m=n[5],g=n[8],v=s[0],u=s[3],p=s[6],_=s[1],y=s[4],b=s[7],I=s[2],A=s[5],w=s[8];return r[0]=a*v+o*_+c*I,r[3]=a*u+o*y+c*A,r[6]=a*p+o*b+c*w,r[1]=h*v+l*_+f*I,r[4]=h*u+l*y+f*A,r[7]=h*p+l*b+f*w,r[2]=d*v+m*_+g*I,r[5]=d*u+m*y+g*A,r[8]=d*p+m*b+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8];return e*a*l-e*o*h-n*r*l+n*o*c+s*r*h-s*a*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],f=l*a-o*h,d=o*c-l*r,m=h*r-a*c,g=e*f+n*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=f*v,t[1]=(s*h-l*n)*v,t[2]=(o*n-s*a)*v,t[3]=d*v,t[4]=(l*e-s*c)*v,t[5]=(s*r-o*e)*v,t[6]=m*v,t[7]=(n*c-h*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const c=Math.cos(r),h=Math.sin(r);return this.set(n*c,n*h,-n*(c*a+h*o)+a+t,-s*h,s*c,-s*(-h*a+c*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Kt;function Ph(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pf(){const i=Bs("canvas");return i.style.display="block",i}const Ol={};function kr(i){i in Ol||(Ol[i]=!0,console.warn(i))}function mf(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Bl=new Kt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zl=new Kt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),gs={[ni]:{transfer:Hr,primaries:Gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[hn]:{transfer:_e,primaries:Gr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Kr]:{transfer:Hr,primaries:Wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(zl),fromReference:i=>i.applyMatrix3(Bl)},[al]:{transfer:_e,primaries:Wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(zl),fromReference:i=>i.applyMatrix3(Bl).convertLinearToSRGB()}},_f=new Set([ni,Kr]),oe={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_f.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=gs[t].toReference,s=gs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return gs[i].primaries},getTransfer:function(i){return i===Jn?Hr:gs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(gs[t].luminanceCoefficients)}};function es(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ua(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ri;class xf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ri===void 0&&(Ri=Bs("canvas")),Ri.width=t.width,Ri.height=t.height;const n=Ri.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ri}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Bs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=es(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(es(e[n]/255)*255):e[n]=es(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let yf=0;class Lh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yf++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fa(s[a].image)):r.push(fa(s[a]))}else r=fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let bf=0;class qe extends ds{constructor(t=qe.DEFAULT_IMAGE,e=qe.DEFAULT_MAPPING,n=_i,s=_i,r=bn,a=xi,o=Mn,c=Gn,h=qe.DEFAULT_ANISOTROPY,l=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:bf++}),this.uuid=Hn(),this.name="",this.source=new Lh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=o,this.internalFormat=null,this.type=c,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=l,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vr:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case oo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vr:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case oo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=_h;qe.DEFAULT_ANISOTROPY=1;class me{constructor(t=0,e=0,n=0,s=1){me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,h=c[0],l=c[4],f=c[8],d=c[1],m=c[5],g=c[9],v=c[2],u=c[6],p=c[10];if(Math.abs(l-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-u)<.01){if(Math.abs(l+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+u)<.1&&Math.abs(h+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,b=(m+1)/2,I=(p+1)/2,A=(l+d)/4,w=(f+v)/4,L=(g+u)/4;return y>b&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=w/n):b>I?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=L/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=w/r,s=L/r),this.set(n,s,r,e),this}let _=Math.sqrt((u-g)*(u-g)+(f-v)*(f-v)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(u-g)/_,this.y=(f-v)/_,this.z=(d-l)/_,this.w=Math.acos((h+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mf extends ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new qe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Lh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class un extends Mf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Dh extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sf extends qe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ue,this.minFilter=Ue,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ws{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],h=n[s+1],l=n[s+2],f=n[s+3];const d=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){t[e+0]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f;return}if(o===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||h!==m||l!==g){let u=1-o;const p=c*d+h*m+l*g+f*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const I=Math.sqrt(y),A=Math.atan2(I,p*_);u=Math.sin(u*A)/I,o=Math.sin(o*A)/I}const b=o*_;if(c=c*u+d*b,h=h*u+m*b,l=l*u+g*b,f=f*u+v*b,u===1-o){const I=1/Math.sqrt(c*c+h*h+l*l+f*f);c*=I,h*=I,l*=I,f*=I}}t[e]=c,t[e+1]=h,t[e+2]=l,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],c=n[s+1],h=n[s+2],l=n[s+3],f=r[a],d=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+l*f+c*m-h*d,t[e+1]=c*g+l*d+h*f-o*m,t[e+2]=h*g+l*m+o*d-c*f,t[e+3]=l*g-o*f-c*d-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,h=o(n/2),l=o(s/2),f=o(r/2),d=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*l*f+h*m*g,this._y=h*m*f-d*l*g,this._z=h*l*g+d*m*f,this._w=h*l*f-d*m*g;break;case"YXZ":this._x=d*l*f+h*m*g,this._y=h*m*f-d*l*g,this._z=h*l*g-d*m*f,this._w=h*l*f+d*m*g;break;case"ZXY":this._x=d*l*f-h*m*g,this._y=h*m*f+d*l*g,this._z=h*l*g+d*m*f,this._w=h*l*f-d*m*g;break;case"ZYX":this._x=d*l*f-h*m*g,this._y=h*m*f+d*l*g,this._z=h*l*g-d*m*f,this._w=h*l*f+d*m*g;break;case"YZX":this._x=d*l*f+h*m*g,this._y=h*m*f+d*l*g,this._z=h*l*g-d*m*f,this._w=h*l*f-d*m*g;break;case"XZY":this._x=d*l*f-h*m*g,this._y=h*m*f-d*l*g,this._z=h*l*g+d*m*f,this._w=h*l*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],h=e[2],l=e[6],f=e[10],d=n+o+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(l-c)*m,this._y=(r-h)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(l-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+h)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-h)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+l)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+h)/m,this._y=(c+l)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(He(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,h=e._z,l=e._w;return this._x=n*l+a*o+s*h-r*c,this._y=s*l+a*c+r*o-n*h,this._z=r*l+a*h+n*c-s*o,this._w=a*l-n*o-s*c-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const h=Math.sqrt(c),l=Math.atan2(h,o),f=Math.sin((1-e)*l)/h,d=Math.sin(e*l)/h;return this._w=a*f+this._w*d,this._x=n*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Vl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Vl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,h=2*(a*s-o*n),l=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+c*h+a*f-o*l,this.y=n+c*l+o*h-r*f,this.z=s+c*f+r*l-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(He(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new P,Vl=new Ws;class ii{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ks.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ks.copy(n.boundingBox)),Ks.applyMatrix4(t.matrixWorld),this.union(Ks)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(vs),Zs.subVectors(this.max,vs),Pi.subVectors(t.a,vs),Li.subVectors(t.b,vs),Di.subVectors(t.c,vs),qn.subVectors(Li,Pi),$n.subVectors(Di,Li),ai.subVectors(Pi,Di);let e=[0,-qn.z,qn.y,0,-$n.z,$n.y,0,-ai.z,ai.y,qn.z,0,-qn.x,$n.z,0,-$n.x,ai.z,0,-ai.x,-qn.y,qn.x,0,-$n.y,$n.x,0,-ai.y,ai.x,0];return!pa(e,Pi,Li,Di,Zs)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Pi,Li,Di,Zs))?!1:(Js.crossVectors(qn,$n),e=[Js.x,Js.y,Js.z],pa(e,Pi,Li,Di,Zs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Un),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Un=[new P,new P,new P,new P,new P,new P,new P,new P],_n=new P,Ks=new ii,Pi=new P,Li=new P,Di=new P,qn=new P,$n=new P,ai=new P,vs=new P,Zs=new P,Js=new P,oi=new P;function pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){oi.fromArray(i,r);const o=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),h=e.dot(oi),l=n.dot(oi);if(Math.max(-Math.max(c,h,l),Math.min(c,h,l))>o)return!1}return!0}const wf=new ii,_s=new P,ma=new P;class ps{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):wf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(ma)),this.expandByPoint(_s.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new P,ga=new P,Qs=new P,Xn=new P,va=new P,tr=new P,_a=new P;class ol{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Qs.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(ga);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Qs),o=Xn.dot(this.direction),c=-Xn.dot(Qs),h=Xn.lengthSq(),l=Math.abs(1-a*a);let f,d,m,g;if(l>0)if(f=a*c-o,d=a*o-c,g=r*l,f>=0)if(d>=-g)if(d<=g){const v=1/l;f*=v,d*=v,m=f*(f+a*d+2*o)+d*(a*f+d+2*c)+h}else d=r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+h;else d=-r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+h;else d<=-g?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+h):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+h):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+h);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),m=-f*f+d*(d+2*c)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ga).addScaledVector(Qs,d),m}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const n=Nn.dot(this.direction),s=Nn.dot(Nn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c;const h=1/this.direction.x,l=1/this.direction.y,f=1/this.direction.z,d=this.origin;return h>=0?(n=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(n=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),l>=0?(r=(t.min.y-d.y)*l,a=(t.max.y-d.y)*l):(r=(t.max.y-d.y)*l,a=(t.min.y-d.y)*l),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(o=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,n,s,r){va.subVectors(e,t),tr.subVectors(n,t),_a.crossVectors(va,tr);let a=this.direction.dot(_a),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Xn.subVectors(this.origin,t);const c=o*this.direction.dot(tr.crossVectors(Xn,tr));if(c<0)return null;const h=o*this.direction.dot(va.cross(Xn));if(h<0||c+h>a)return null;const l=-o*Xn.dot(_a);return l<0?null:this.at(l/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class se{constructor(t,e,n,s,r,a,o,c,h,l,f,d,m,g,v,u){se.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,h,l,f,d,m,g,v,u)}set(t,e,n,s,r,a,o,c,h,l,f,d,m,g,v,u){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=h,p[6]=l,p[10]=f,p[14]=d,p[3]=m,p[7]=g,p[11]=v,p[15]=u,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new se().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ii.setFromMatrixColumn(t,0).length(),r=1/Ii.setFromMatrixColumn(t,1).length(),a=1/Ii.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),h=Math.sin(s),l=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const d=a*l,m=a*f,g=o*l,v=o*f;e[0]=c*l,e[4]=-c*f,e[8]=h,e[1]=m+g*h,e[5]=d-v*h,e[9]=-o*c,e[2]=v-d*h,e[6]=g+m*h,e[10]=a*c}else if(t.order==="YXZ"){const d=c*l,m=c*f,g=h*l,v=h*f;e[0]=d+v*o,e[4]=g*o-m,e[8]=a*h,e[1]=a*f,e[5]=a*l,e[9]=-o,e[2]=m*o-g,e[6]=v+d*o,e[10]=a*c}else if(t.order==="ZXY"){const d=c*l,m=c*f,g=h*l,v=h*f;e[0]=d-v*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*l,e[9]=v-d*o,e[2]=-a*h,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){const d=a*l,m=a*f,g=o*l,v=o*f;e[0]=c*l,e[4]=g*h-m,e[8]=d*h+v,e[1]=c*f,e[5]=v*h+d,e[9]=m*h-g,e[2]=-h,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){const d=a*c,m=a*h,g=o*c,v=o*h;e[0]=c*l,e[4]=v-d*f,e[8]=g*f+m,e[1]=f,e[5]=a*l,e[9]=-o*l,e[2]=-h*l,e[6]=m*f+g,e[10]=d-v*f}else if(t.order==="XZY"){const d=a*c,m=a*h,g=o*c,v=o*h;e[0]=c*l,e[4]=-f,e[8]=h*l,e[1]=d*f+v,e[5]=a*l,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*l,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Tf,t,Ef)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),Yn.crossVectors(n,on),Yn.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),Yn.crossVectors(n,on)),Yn.normalize(),er.crossVectors(on,Yn),s[0]=Yn.x,s[4]=er.x,s[8]=on.x,s[1]=Yn.y,s[5]=er.y,s[9]=on.y,s[2]=Yn.z,s[6]=er.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],h=n[12],l=n[1],f=n[5],d=n[9],m=n[13],g=n[2],v=n[6],u=n[10],p=n[14],_=n[3],y=n[7],b=n[11],I=n[15],A=s[0],w=s[4],L=s[8],Y=s[12],x=s[1],M=s[5],V=s[9],H=s[13],W=s[2],Q=s[6],D=s[10],G=s[14],q=s[3],at=s[7],ct=s[11],vt=s[15];return r[0]=a*A+o*x+c*W+h*q,r[4]=a*w+o*M+c*Q+h*at,r[8]=a*L+o*V+c*D+h*ct,r[12]=a*Y+o*H+c*G+h*vt,r[1]=l*A+f*x+d*W+m*q,r[5]=l*w+f*M+d*Q+m*at,r[9]=l*L+f*V+d*D+m*ct,r[13]=l*Y+f*H+d*G+m*vt,r[2]=g*A+v*x+u*W+p*q,r[6]=g*w+v*M+u*Q+p*at,r[10]=g*L+v*V+u*D+p*ct,r[14]=g*Y+v*H+u*G+p*vt,r[3]=_*A+y*x+b*W+I*q,r[7]=_*w+y*M+b*Q+I*at,r[11]=_*L+y*V+b*D+I*ct,r[15]=_*Y+y*H+b*G+I*vt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],h=t[13],l=t[2],f=t[6],d=t[10],m=t[14],g=t[3],v=t[7],u=t[11],p=t[15];return g*(+r*c*f-s*h*f-r*o*d+n*h*d+s*o*m-n*c*m)+v*(+e*c*m-e*h*d+r*a*d-s*a*m+s*h*l-r*c*l)+u*(+e*h*f-e*o*m-r*a*f+n*a*m+r*o*l-n*h*l)+p*(-s*o*l-e*c*f+e*o*d+s*a*f-n*a*d+n*c*l)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],h=t[7],l=t[8],f=t[9],d=t[10],m=t[11],g=t[12],v=t[13],u=t[14],p=t[15],_=f*u*h-v*d*h+v*c*m-o*u*m-f*c*p+o*d*p,y=g*d*h-l*u*h-g*c*m+a*u*m+l*c*p-a*d*p,b=l*v*h-g*f*h+g*o*m-a*v*m-l*o*p+a*f*p,I=g*f*c-l*v*c-g*o*d+a*v*d+l*o*u-a*f*u,A=e*_+n*y+s*b+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=_*w,t[1]=(v*d*r-f*u*r-v*s*m+n*u*m+f*s*p-n*d*p)*w,t[2]=(o*u*r-v*c*r+v*s*h-n*u*h-o*s*p+n*c*p)*w,t[3]=(f*c*r-o*d*r-f*s*h+n*d*h+o*s*m-n*c*m)*w,t[4]=y*w,t[5]=(l*u*r-g*d*r+g*s*m-e*u*m-l*s*p+e*d*p)*w,t[6]=(g*c*r-a*u*r-g*s*h+e*u*h+a*s*p-e*c*p)*w,t[7]=(a*d*r-l*c*r+l*s*h-e*d*h-a*s*m+e*c*m)*w,t[8]=b*w,t[9]=(g*f*r-l*v*r-g*n*m+e*v*m+l*n*p-e*f*p)*w,t[10]=(a*v*r-g*o*r+g*n*h-e*v*h-a*n*p+e*o*p)*w,t[11]=(l*o*r-a*f*r-l*n*h+e*f*h+a*n*m-e*o*m)*w,t[12]=I*w,t[13]=(l*v*s-g*f*s+g*n*d-e*v*d-l*n*u+e*f*u)*w,t[14]=(g*o*s-a*v*s-g*n*c+e*v*c+a*n*u-e*o*u)*w,t[15]=(a*f*s-l*o*s+l*n*c-e*f*c-a*n*d+e*o*d)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,h=r*a,l=r*o;return this.set(h*a+n,h*o-s*c,h*c+s*o,0,h*o+s*c,l*o+n,l*c-s*a,0,h*c-s*o,l*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,h=r+r,l=a+a,f=o+o,d=r*h,m=r*l,g=r*f,v=a*l,u=a*f,p=o*f,_=c*h,y=c*l,b=c*f,I=n.x,A=n.y,w=n.z;return s[0]=(1-(v+p))*I,s[1]=(m+b)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(m-b)*A,s[5]=(1-(d+p))*A,s[6]=(u+_)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(u-_)*w,s[10]=(1-(d+v))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ii.set(s[0],s[1],s[2]).length();const a=Ii.set(s[4],s[5],s[6]).length(),o=Ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const h=1/r,l=1/a,f=1/o;return xn.elements[0]*=h,xn.elements[1]*=h,xn.elements[2]*=h,xn.elements[4]*=l,xn.elements[5]*=l,xn.elements[6]*=l,xn.elements[8]*=f,xn.elements[9]*=f,xn.elements[10]*=f,e.setFromRotationMatrix(xn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Vn){const c=this.elements,h=2*r/(e-t),l=2*r/(n-s),f=(e+t)/(e-t),d=(n+s)/(n-s);let m,g;if(o===Vn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===qr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=l,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn){const c=this.elements,h=1/(e-t),l=1/(n-s),f=1/(a-r),d=(e+t)*h,m=(n+s)*l;let g,v;if(o===Vn)g=(a+r)*f,v=-2*f;else if(o===qr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*h,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*l,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ii=new P,xn=new se,Tf=new P(0,0,0),Ef=new P(1,1,1),Yn=new P,er=new P,on=new P,Hl=new se,Gl=new Ws;class En{constructor(t=0,e=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],h=s[5],l=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(He(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-He(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,h)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(He(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-He(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(He(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-l,h),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-He(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-l,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gl.setFromEuler(this),this.setFromQuaternion(Gl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class ll{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Af=0;const Wl=new P,Ui=new Ws,kn=new se,nr=new P,xs=new P,Cf=new P,Rf=new Ws,ql=new P(1,0,0),$l=new P(0,1,0),Xl=new P(0,0,1),Yl={type:"added"},Pf={type:"removed"},Ni={type:"childadded",child:null},xa={type:"childremoved",child:null};class Ee extends ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Af++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ee.DEFAULT_UP.clone();const t=new P,e=new En,n=new Ws,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new se},normalMatrix:{value:new Kt}}),this.matrix=new se,this.matrixWorld=new se,this.matrixAutoUpdate=Ee.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ll,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.multiply(Ui),this}rotateOnWorldAxis(t,e){return Ui.setFromAxisAngle(t,e),this.quaternion.premultiply(Ui),this}rotateX(t){return this.rotateOnAxis(ql,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Wl.copy(t).applyQuaternion(this.quaternion),this.position.add(Wl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ql,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?nr.copy(t):nr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(xs,nr,this.up):kn.lookAt(nr,xs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Ui.setFromRotationMatrix(kn),this.quaternion.premultiply(Ui.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yl),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Pf),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),kn.multiply(t.parent.matrixWorld)),t.applyMatrix4(kn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yl),Ni.child=t,this.dispatchEvent(Ni),Ni.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,t,Cf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xs,Rf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let h=0,l=c.length;h<l;h++){const f=c[h];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,h=this.material.length;c<h;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){const o=a(t.geometries),c=a(t.materials),h=a(t.textures),l=a(t.images),f=a(t.shapes),d=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),h.length>0&&(n.textures=h),l.length>0&&(n.images=l),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const h in o){const l=o[h];delete l.metadata,c.push(l)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ee.DEFAULT_UP=new P(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new P,Fn=new P,ya=new P,On=new P,ki=new P,Fi=new P,jl=new P,ba=new P,Ma=new P,Sa=new P,wa=new me,Ta=new me,Ea=new me;class gn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),Fn.subVectors(n,e),ya.subVectors(t,e);const a=yn.dot(yn),o=yn.dot(Fn),c=yn.dot(ya),h=Fn.dot(Fn),l=Fn.dot(ya),f=a*h-o*o;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(h*c-o*l)*d,g=(a*l-o*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,On)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,On.x),c.addScaledVector(a,On.y),c.addScaledVector(o,On.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return wa.setScalar(0),Ta.setScalar(0),Ea.setScalar(0),wa.fromBufferAttribute(t,e),Ta.fromBufferAttribute(t,n),Ea.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(wa,r.x),a.addScaledVector(Ta,r.y),a.addScaledVector(Ea,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Fn.subVectors(t,e),yn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),yn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return gn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return gn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return gn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ki.subVectors(s,n),Fi.subVectors(r,n),ba.subVectors(t,n);const c=ki.dot(ba),h=Fi.dot(ba);if(c<=0&&h<=0)return e.copy(n);Ma.subVectors(t,s);const l=ki.dot(Ma),f=Fi.dot(Ma);if(l>=0&&f<=l)return e.copy(s);const d=c*f-l*h;if(d<=0&&c>=0&&l<=0)return a=c/(c-l),e.copy(n).addScaledVector(ki,a);Sa.subVectors(t,r);const m=ki.dot(Sa),g=Fi.dot(Sa);if(g>=0&&m<=g)return e.copy(r);const v=m*h-c*g;if(v<=0&&h>=0&&g<=0)return o=h/(h-g),e.copy(n).addScaledVector(Fi,o);const u=l*g-m*f;if(u<=0&&f-l>=0&&m-g>=0)return jl.subVectors(r,s),o=(f-l)/(f-l+(m-g)),e.copy(s).addScaledVector(jl,o);const p=1/(u+v+d);return a=v*p,o=d*p,e.copy(n).addScaledVector(ki,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ih={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},ir={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=df(t,1),e=He(e,0,1),n=He(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Aa(a,r,t+1/3),this.g=Aa(a,r,t),this.b=Aa(a,r,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=hn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=hn){const n=Ih[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=es(t.r),this.g=es(t.g),this.b=es(t.b),this}copyLinearToSRGB(t){return this.r=ua(t.r),this.g=ua(t.g),this.b=ua(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=hn){return oe.fromWorkingColorSpace(Xe.copy(this),t),Math.round(He(Xe.r*255,0,255))*65536+Math.round(He(Xe.g*255,0,255))*256+Math.round(He(Xe.b*255,0,255))}getHexString(t=hn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Xe.copy(this),e);const n=Xe.r,s=Xe.g,r=Xe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,h;const l=(o+a)/2;if(o===a)c=0,h=0;else{const f=a-o;switch(h=l<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return t.h=c,t.s=h,t.l=l,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Xe.copy(this),e),t.r=Xe.r,t.g=Xe.g,t.b=Xe.b,t}getStyle(t=hn){oe.fromWorkingColorSpace(Xe.copy(this),t);const e=Xe.r,n=Xe.g,s=Xe.b;return t!==hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(ir);const n=ca(jn.h,ir.h,e),s=ca(jn.s,ir.s,e),r=ca(jn.l,ir.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xe=new Ft;Ft.NAMES=Ih;let Lf=0;class si extends ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=Mi,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ka,this.blendDst=Za,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ci,this.stencilZFail=Ci,this.stencilZPass=Ci,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mi&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ka&&(n.blendSrc=this.blendSrc),this.blendDst!==Za&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ci&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ci&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ci&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Re extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Le=new P,sr=new rt;class fn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=No,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)sr.fromBufferAttribute(this,e),sr.applyMatrix3(t),this.setXY(e,sr.x,sr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix3(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyMatrix4(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.applyNormalMatrix(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Le.fromBufferAttribute(this,e),Le.transformDirection(t),this.setXYZ(e,Le.x,Le.y,Le.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rn(e,this.array)),e}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rn(e,this.array)),e}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rn(e,this.array)),e}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==No&&(t.usage=this.usage),t}}class Uh extends fn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nh extends fn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class re extends fn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Df=0;const mn=new se,Ca=new Ee,Oi=new P,ln=new ii,ys=new ii,Oe=new P;class Fe extends ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Df++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ph(t)?Nh:Uh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Ca.lookAt(t),Ca.updateMatrix(),this.applyMatrix4(Ca.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new re(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ii);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];ln.setFromBufferAttribute(r),this.morphTargetsRelative?(Oe.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Oe),Oe.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Oe)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];ys.setFromBufferAttribute(o),this.morphTargetsRelative?(Oe.addVectors(ln.min,ys.min),ln.expandByPoint(Oe),Oe.addVectors(ln.max,ys.max),ln.expandByPoint(Oe)):(ln.expandByPoint(ys.min),ln.expandByPoint(ys.max))}ln.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Oe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Oe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],c=this.morphTargetsRelative;for(let h=0,l=o.count;h<l;h++)Oe.fromBufferAttribute(o,h),c&&(Oi.fromBufferAttribute(t,h),Oe.add(Oi)),s=Math.max(s,n.distanceToSquared(Oe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<n.count;L++)o[L]=new P,c[L]=new P;const h=new P,l=new P,f=new P,d=new rt,m=new rt,g=new rt,v=new P,u=new P;function p(L,Y,x){h.fromBufferAttribute(n,L),l.fromBufferAttribute(n,Y),f.fromBufferAttribute(n,x),d.fromBufferAttribute(r,L),m.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,x),l.sub(h),f.sub(h),m.sub(d),g.sub(d);const M=1/(m.x*g.y-g.x*m.y);isFinite(M)&&(v.copy(l).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(M),u.copy(f).multiplyScalar(m.x).addScaledVector(l,-g.x).multiplyScalar(M),o[L].add(v),o[Y].add(v),o[x].add(v),c[L].add(u),c[Y].add(u),c[x].add(u))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let L=0,Y=_.length;L<Y;++L){const x=_[L],M=x.start,V=x.count;for(let H=M,W=M+V;H<W;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const y=new P,b=new P,I=new P,A=new P;function w(L){I.fromBufferAttribute(s,L),A.copy(I);const Y=o[L];y.copy(Y),y.sub(I.multiplyScalar(I.dot(Y))).normalize(),b.crossVectors(A,Y);const M=b.dot(c[L])<0?-1:1;a.setXYZW(L,y.x,y.y,y.z,M)}for(let L=0,Y=_.length;L<Y;++L){const x=_[L],M=x.start,V=x.count;for(let H=M,W=M+V;H<W;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const s=new P,r=new P,a=new P,o=new P,c=new P,h=new P,l=new P,f=new P;if(t)for(let d=0,m=t.count;d<m;d+=3){const g=t.getX(d+0),v=t.getX(d+1),u=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,u),l.subVectors(a,r),f.subVectors(s,r),l.cross(f),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,u),o.add(l),c.add(l),h.add(l),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(u,h.x,h.y,h.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),l.subVectors(a,r),f.subVectors(s,r),l.cross(f),n.setXYZ(d+0,l.x,l.y,l.z),n.setXYZ(d+1,l.x,l.y,l.z),n.setXYZ(d+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Oe.fromBufferAttribute(t,e),Oe.normalize(),t.setXYZ(e,Oe.x,Oe.y,Oe.z)}toNonIndexed(){function t(o,c){const h=o.array,l=o.itemSize,f=o.normalized,d=new h.constructor(c.length*l);let m=0,g=0;for(let v=0,u=c.length;v<u;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*l;for(let p=0;p<l;p++)d[g++]=h[m++]}return new fn(d,l,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],h=t(c,n);e.setAttribute(o,h)}const r=this.morphAttributes;for(const o in r){const c=[],h=r[o];for(let l=0,f=h.length;l<f;l++){const d=h[l],m=t(d,n);c.push(m)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const h=a[o];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const h in c)c[h]!==void 0&&(t[h]=c[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const h=n[c];t.data.attributes[c]=h.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const h=this.morphAttributes[c],l=[];for(let f=0,d=h.length;f<d;f++){const m=h[f];l.push(m.toJSON(t.data))}l.length>0&&(s[c]=l,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const h in s){const l=s[h];this.setAttribute(h,l.clone(e))}const r=t.morphAttributes;for(const h in r){const l=[],f=r[h];for(let d=0,m=f.length;d<m;d++)l.push(f[d].clone(e));this.morphAttributes[h]=l}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,l=a.length;h<l;h++){const f=a[h];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kl=new se,li=new ol,rr=new ps,Zl=new P,ar=new P,or=new P,lr=new P,Ra=new P,cr=new P,Jl=new P,hr=new P;class lt extends Ee{constructor(t=new Fe,e=new Re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){cr.set(0,0,0);for(let c=0,h=r.length;c<h;c++){const l=o[c],f=r[c];l!==0&&(Ra.fromBufferAttribute(f,t),a?cr.addScaledVector(Ra,l):cr.addScaledVector(Ra.sub(e),l))}e.add(cr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),rr.copy(n.boundingSphere),rr.applyMatrix4(r),li.copy(t.ray).recast(t.near),!(rr.containsPoint(li.origin)===!1&&(li.intersectSphere(rr,Zl)===null||li.origin.distanceToSquared(Zl)>(t.far-t.near)**2))&&(Kl.copy(r).invert(),li.copy(t.ray).applyMatrix4(Kl),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,h=r.attributes.uv,l=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const u=d[g],p=a[u.materialIndex],_=Math.max(u.start,m.start),y=Math.min(o.count,Math.min(u.start+u.count,m.start+m.count));for(let b=_,I=y;b<I;b+=3){const A=o.getX(b),w=o.getX(b+1),L=o.getX(b+2);s=ur(this,p,t,n,h,l,f,A,w,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let u=g,p=v;u<p;u+=3){const _=o.getX(u),y=o.getX(u+1),b=o.getX(u+2);s=ur(this,a,t,n,h,l,f,_,y,b),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){const u=d[g],p=a[u.materialIndex],_=Math.max(u.start,m.start),y=Math.min(c.count,Math.min(u.start+u.count,m.start+m.count));for(let b=_,I=y;b<I;b+=3){const A=b,w=b+1,L=b+2;s=ur(this,p,t,n,h,l,f,A,w,L),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=u.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let u=g,p=v;u<p;u+=3){const _=u,y=u+1,b=u+2;s=ur(this,a,t,n,h,l,f,_,y,b),s&&(s.faceIndex=Math.floor(u/3),e.push(s))}}}}function If(i,t,e,n,s,r,a,o){let c;if(t.side===sn?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ei,o),c===null)return null;hr.copy(o),hr.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(hr);return h<e.near||h>e.far?null:{distance:h,point:hr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,c,h){i.getVertexPosition(o,ar),i.getVertexPosition(c,or),i.getVertexPosition(h,lr);const l=If(i,t,e,n,ar,or,lr,Jl);if(l){const f=new P;gn.getBarycoord(Jl,ar,or,lr,f),s&&(l.uv=gn.getInterpolatedAttribute(s,o,c,h,f,new rt)),r&&(l.uv1=gn.getInterpolatedAttribute(r,o,c,h,f,new rt)),a&&(l.normal=gn.getInterpolatedAttribute(a,o,c,h,f,new P),l.normal.dot(n.direction)>0&&l.normal.multiplyScalar(-1));const d={a:o,b:c,c:h,normal:new P,materialIndex:0};gn.getNormal(ar,or,lr,d.normal),l.face=d,l.barycoord=f}return l}class Ze extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],h=[],l=[],f=[];let d=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new re(h,3)),this.setAttribute("normal",new re(l,3)),this.setAttribute("uv",new re(f,2));function g(v,u,p,_,y,b,I,A,w,L,Y){const x=b/w,M=I/L,V=b/2,H=I/2,W=A/2,Q=w+1,D=L+1;let G=0,q=0;const at=new P;for(let ct=0;ct<D;ct++){const vt=ct*M-H;for(let Zt=0;Zt<Q;Zt++){const xt=Zt*x-V;at[v]=xt*_,at[u]=vt*y,at[p]=W,h.push(at.x,at.y,at.z),at[v]=0,at[u]=0,at[p]=A>0?1:-1,l.push(at.x,at.y,at.z),f.push(Zt/w),f.push(1-ct/L),G+=1}}for(let ct=0;ct<L;ct++)for(let vt=0;vt<w;vt++){const Zt=d+vt+Q*ct,xt=d+vt+Q*(ct+1),tt=d+(vt+1)+Q*(ct+1),nt=d+(vt+1)+Q*ct;c.push(Zt,xt,nt),c.push(xt,tt,nt),q+=6}o.addGroup(m,q,Y),m+=q,d+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ze(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ls(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){const t={};for(let e=0;e<i.length;e++){const n=ls(i[e]);for(const s in n)t[s]=n[s]}return t}function Uf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function kh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const cs={clone:ls,merge:Ke};var Nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class We extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nf,this.fragmentShader=kf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ls(t.uniforms),this.uniformsGroups=Uf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Fh extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new se,this.projectionMatrix=new se,this.projectionMatrixInverse=new se,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Kn=new P,Ql=new rt,tc=new rt;class nn extends Fh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z),Kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Kn.x,Kn.y).multiplyScalar(-t/Kn.z)}getViewSize(t,e){return this.getViewBounds(t,Ql,tc),e.subVectors(tc,Ql)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(la*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/h,s*=a.width/c,n*=a.height/h}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Bi=-90,zi=1;class Ff extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new nn(Bi,zi,t,e);s.layers=this.layers,this.add(s);const r=new nn(Bi,zi,t,e);r.layers=this.layers,this.add(r);const a=new nn(Bi,zi,t,e);a.layers=this.layers,this.add(a);const o=new nn(Bi,zi,t,e);o.layers=this.layers,this.add(o);const c=new nn(Bi,zi,t,e);c.layers=this.layers,this.add(c);const h=new nn(Bi,zi,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(const h of e)this.remove(h);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,h,l]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,h),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,l),t.setRenderTarget(f,d,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Oh extends qe{constructor(t,e,n,s,r,a,o,c,h,l){t=t!==void 0?t:[],e=e!==void 0?e:ss,super(t,e,n,s,r,a,o,c,h,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Of extends un{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Oh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:bn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ze(5,5,5),r=new We({name:"CubemapFromEquirect",uniforms:ls(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:Ln});r.uniforms.tEquirect.value=e;const a=new lt(s,r),o=e.minFilter;return e.minFilter===xi&&(e.minFilter=bn),new Ff(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Pa=new P,Bf=new P,zf=new Kt;class fi{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Pa.subVectors(n,e).cross(Bf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||zf.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ps,fr=new P;class cl{constructor(t=new fi,e=new fi,n=new fi,s=new fi,r=new fi,a=new fi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],c=s[3],h=s[4],l=s[5],f=s[6],d=s[7],m=s[8],g=s[9],v=s[10],u=s[11],p=s[12],_=s[13],y=s[14],b=s[15];if(n[0].setComponents(c-r,d-h,u-m,b-p).normalize(),n[1].setComponents(c+r,d+h,u+m,b+p).normalize(),n[2].setComponents(c+a,d+l,u+g,b+_).normalize(),n[3].setComponents(c-a,d-l,u-g,b-_).normalize(),n[4].setComponents(c-o,d-f,u-v,b-y).normalize(),e===Vn)n[5].setComponents(c+o,d+f,u+v,b+y).normalize();else if(e===qr)n[5].setComponents(o,f,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(fr.x=s.normal.x>0?t.max.x:t.min.x,fr.y=s.normal.y>0?t.max.y:t.min.y,fr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Vf(i){const t=new WeakMap;function e(o,c){const h=o.array,l=o.usage,f=h.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,h,l),o.onUploadCallback();let m;if(h instanceof Float32Array)m=i.FLOAT;else if(h instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)m=i.SHORT;else if(h instanceof Uint32Array)m=i.UNSIGNED_INT;else if(h instanceof Int32Array)m=i.INT;else if(h instanceof Int8Array)m=i.BYTE;else if(h instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:m,bytesPerElement:h.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,h){const l=c.array,f=c.updateRanges;if(i.bindBuffer(h,o),f.length===0)i.bufferSubData(h,0,l);else{f.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<f.length;m++){const g=f[d],v=f[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,f[d]=v)}f.length=d+1;for(let m=0,g=f.length;m<g;m++){const v=f[m];i.bufferSubData(h,v.start*l.BYTES_PER_ELEMENT,l,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const l=t.get(o);(!l||l.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const h=t.get(o);if(h===void 0)t.set(o,e(o,c));else if(h.version<o.version){if(h.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,o,c),h.version=o.version}}return{get:s,remove:r,update:a}}class be extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),h=o+1,l=c+1,f=t/o,d=e/c,m=[],g=[],v=[],u=[];for(let p=0;p<l;p++){const _=p*d-a;for(let y=0;y<h;y++){const b=y*f-r;g.push(b,-_,0),v.push(0,0,1),u.push(y/o),u.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<o;_++){const y=_+h*p,b=_+h*(p+1),I=_+1+h*(p+1),A=_+1+h*p;m.push(y,b,A),m.push(b,I,A)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new be(t.width,t.height,t.widthSegments,t.heightSegments)}}var Hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gf=`#ifdef USE_ALPHAHASH
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
#endif`,Wf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,$f=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yf=`#ifdef USE_AOMAP
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
#endif`,jf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kf=`#ifdef USE_BATCHING
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
#endif`,Zf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ed=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ad=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,od=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ud=`#define PI 3.141592653589793
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
} // validated`,fd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`
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
}`,yd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Md=`#ifdef USE_ENVMAP
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
#endif`,Sd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,Td=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ed=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
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
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Id=`uniform bool receiveShadow;
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
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
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
#endif`,zd=`struct PhysicalMaterial {
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
}`,Vd=`
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
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$d=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zd=`#if defined( USE_POINTS_UV )
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
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ep=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,np=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ip=`#ifdef USE_MORPHTARGETS
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
#endif`,sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ap=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hp=`#ifdef USE_NORMALMAP
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
#endif`,up=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,fp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,_p=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ep=`float getShadowMask() {
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
}`,Ap=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Cp=`#ifdef USE_SKINNING
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
#endif`,Rp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pp=`#ifdef USE_SKINNING
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
#endif`,Lp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Dp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ip=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Up=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Np=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`#ifdef USE_TRANSMISSION
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
#endif`,Fp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Hp=`uniform sampler2D t2D;
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`#include <common>
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
}`,Yp=`#if DEPTH_PACKING == 3200
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
}`,jp=`#define DISTANCE
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
}`,Kp=`#define DISTANCE
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
}`,Zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qp=`uniform float scale;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 diffuse;
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define LAMBERT
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
}`,r0=`#define MATCAP
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
}`,a0=`#define MATCAP
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
}`,o0=`#define NORMAL
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
}`,l0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,h0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,f0=`#define STANDARD
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
}`,d0=`#define TOON
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
}`,p0=`#define TOON
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
}`,m0=`uniform float size;
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
}`,g0=`uniform vec3 diffuse;
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
}`,v0=`#include <common>
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
}`,_0=`uniform vec3 color;
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
}`,x0=`uniform float rotation;
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
}`,y0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Hf,alphahash_pars_fragment:Gf,alphamap_fragment:Wf,alphamap_pars_fragment:qf,alphatest_fragment:$f,alphatest_pars_fragment:Xf,aomap_fragment:Yf,aomap_pars_fragment:jf,batching_pars_vertex:Kf,batching_vertex:Zf,begin_vertex:Jf,beginnormal_vertex:Qf,bsdfs:td,iridescence_fragment:ed,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:rd,clipping_planes_vertex:ad,color_fragment:od,color_pars_fragment:ld,color_pars_vertex:cd,color_vertex:hd,common:ud,cube_uv_reflection_fragment:fd,defaultnormal_vertex:dd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,colorspace_fragment:_d,colorspace_pars_fragment:xd,envmap_fragment:yd,envmap_common_pars_fragment:bd,envmap_pars_fragment:Md,envmap_pars_vertex:Sd,envmap_physical_pars_fragment:Ud,envmap_vertex:wd,fog_vertex:Td,fog_pars_vertex:Ed,fog_fragment:Ad,fog_pars_fragment:Cd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Dd,lights_pars_begin:Id,lights_toon_fragment:Nd,lights_toon_pars_fragment:kd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:Vd,lights_fragment_maps:Hd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:qd,logdepthbuf_pars_vertex:$d,logdepthbuf_vertex:Xd,map_fragment:Yd,map_pars_fragment:jd,map_particle_fragment:Kd,map_particle_pars_fragment:Zd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:Qd,morphinstance_vertex:tp,morphcolor_vertex:ep,morphnormal_vertex:np,morphtarget_pars_vertex:ip,morphtarget_vertex:sp,normal_fragment_begin:rp,normal_fragment_maps:ap,normal_pars_fragment:op,normal_pars_vertex:lp,normal_vertex:cp,normalmap_pars_fragment:hp,clearcoat_normal_fragment_begin:up,clearcoat_normal_fragment_maps:fp,clearcoat_pars_fragment:dp,iridescence_pars_fragment:pp,opaque_fragment:mp,packing:gp,premultiplied_alpha_fragment:vp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:yp,roughnessmap_fragment:bp,roughnessmap_pars_fragment:Mp,shadowmap_pars_fragment:Sp,shadowmap_pars_vertex:wp,shadowmap_vertex:Tp,shadowmask_pars_fragment:Ep,skinbase_vertex:Ap,skinning_pars_vertex:Cp,skinning_vertex:Rp,skinnormal_vertex:Pp,specularmap_fragment:Lp,specularmap_pars_fragment:Dp,tonemapping_fragment:Ip,tonemapping_pars_fragment:Up,transmission_fragment:Np,transmission_pars_fragment:kp,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:Vp,background_frag:Hp,backgroundCube_vert:Gp,backgroundCube_frag:Wp,cube_vert:qp,cube_frag:$p,depth_vert:Xp,depth_frag:Yp,distanceRGBA_vert:jp,distanceRGBA_frag:Kp,equirect_vert:Zp,equirect_frag:Jp,linedashed_vert:Qp,linedashed_frag:t0,meshbasic_vert:e0,meshbasic_frag:n0,meshlambert_vert:i0,meshlambert_frag:s0,meshmatcap_vert:r0,meshmatcap_frag:a0,meshnormal_vert:o0,meshnormal_frag:l0,meshphong_vert:c0,meshphong_frag:h0,meshphysical_vert:u0,meshphysical_frag:f0,meshtoon_vert:d0,meshtoon_frag:p0,points_vert:m0,points_frag:g0,shadow_vert:v0,shadow_frag:_0,sprite_vert:x0,sprite_frag:y0},gt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},Cn={basic:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:Ke([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:Ke([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:Ke([gt.points,gt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:Ke([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:Ke([gt.common,gt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:Ke([gt.sprite,gt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:Ke([gt.common,gt.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:Ke([gt.lights,gt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};Cn.physical={uniforms:Ke([Cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const dr={r:0,b:0,g:0},hi=new En,b0=new se;function M0(i,t,e,n,s,r,a){const o=new Ft(0);let c=r===!0?0:1,h,l,f=null,d=0,m=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const b=g(_);b===null?p(o,c):b&&b.isColor&&(p(b,1),y=!0);const I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function u(_,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===jr)?(l===void 0&&(l=new lt(new Ze(1,1,1),new We({name:"BackgroundCubeMaterial",uniforms:ls(Cn.backgroundCube.uniforms),vertexShader:Cn.backgroundCube.vertexShader,fragmentShader:Cn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(I,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(l)),hi.copy(y.backgroundRotation),hi.x*=-1,hi.y*=-1,hi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),l.material.uniforms.envMap.value=b,l.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,l.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(b0.makeRotationFromEuler(hi)),l.material.toneMapped=oe.getTransfer(b.colorSpace)!==_e,(f!==b||d!==b.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,f=b,d=b.version,m=i.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(h===void 0&&(h=new lt(new be(2,2),new We({name:"BackgroundMaterial",uniforms:ls(Cn.background.uniforms),vertexShader:Cn.background.vertexShader,fragmentShader:Cn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=b,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=oe.getTransfer(b.colorSpace)!==_e,b.matrixAutoUpdate===!0&&b.updateMatrix(),h.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,m=i.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function p(_,y){_.getRGB(dr,kh(i)),n.buffers.color.setClear(dr.r,dr.g,dr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(_,y=1){o.set(_),c=y,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(o,c)},render:v,addToRenderList:u}}function S0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,a=!1;function o(x,M,V,H,W){let Q=!1;const D=f(H,V,M);r!==D&&(r=D,h(r.object)),Q=m(x,H,V,W),Q&&g(x,H,V,W),W!==null&&t.update(W,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,b(x,M,V,H),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(W).buffer))}function c(){return i.createVertexArray()}function h(x){return i.bindVertexArray(x)}function l(x){return i.deleteVertexArray(x)}function f(x,M,V){const H=V.wireframe===!0;let W=n[x.id];W===void 0&&(W={},n[x.id]=W);let Q=W[M.id];Q===void 0&&(Q={},W[M.id]=Q);let D=Q[H];return D===void 0&&(D=d(c()),Q[H]=D),D}function d(x){const M=[],V=[],H=[];for(let W=0;W<e;W++)M[W]=0,V[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:V,attributeDivisors:H,object:x,attributes:{},index:null}}function m(x,M,V,H){const W=r.attributes,Q=M.attributes;let D=0;const G=V.getAttributes();for(const q in G)if(G[q].location>=0){const ct=W[q];let vt=Q[q];if(vt===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(vt=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(vt=x.instanceColor)),ct===void 0||ct.attribute!==vt||vt&&ct.data!==vt.data)return!0;D++}return r.attributesNum!==D||r.index!==H}function g(x,M,V,H){const W={},Q=M.attributes;let D=0;const G=V.getAttributes();for(const q in G)if(G[q].location>=0){let ct=Q[q];ct===void 0&&(q==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),q==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor));const vt={};vt.attribute=ct,ct&&ct.data&&(vt.data=ct.data),W[q]=vt,D++}r.attributes=W,r.attributesNum=D,r.index=H}function v(){const x=r.newAttributes;for(let M=0,V=x.length;M<V;M++)x[M]=0}function u(x){p(x,0)}function p(x,M){const V=r.newAttributes,H=r.enabledAttributes,W=r.attributeDivisors;V[x]=1,H[x]===0&&(i.enableVertexAttribArray(x),H[x]=1),W[x]!==M&&(i.vertexAttribDivisor(x,M),W[x]=M)}function _(){const x=r.newAttributes,M=r.enabledAttributes;for(let V=0,H=M.length;V<H;V++)M[V]!==x[V]&&(i.disableVertexAttribArray(V),M[V]=0)}function y(x,M,V,H,W,Q,D){D===!0?i.vertexAttribIPointer(x,M,V,W,Q):i.vertexAttribPointer(x,M,V,H,W,Q)}function b(x,M,V,H){v();const W=H.attributes,Q=V.getAttributes(),D=M.defaultAttributeValues;for(const G in Q){const q=Q[G];if(q.location>=0){let at=W[G];if(at===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(at=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(at=x.instanceColor)),at!==void 0){const ct=at.normalized,vt=at.itemSize,Zt=t.get(at);if(Zt===void 0)continue;const xt=Zt.buffer,tt=Zt.type,nt=Zt.bytesPerElement,_t=tt===i.INT||tt===i.UNSIGNED_INT||at.gpuType===Jo;if(at.isInterleavedBufferAttribute){const z=at.data,et=z.stride,Ot=at.offset;if(z.isInstancedInterleavedBuffer){for(let Gt=0;Gt<q.locationSize;Gt++)p(q.location+Gt,z.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let Gt=0;Gt<q.locationSize;Gt++)u(q.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let Gt=0;Gt<q.locationSize;Gt++)y(q.location+Gt,vt/q.locationSize,tt,ct,et*nt,(Ot+vt/q.locationSize*Gt)*nt,_t)}else{if(at.isInstancedBufferAttribute){for(let z=0;z<q.locationSize;z++)p(q.location+z,at.meshPerAttribute);x.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let z=0;z<q.locationSize;z++)u(q.location+z);i.bindBuffer(i.ARRAY_BUFFER,xt);for(let z=0;z<q.locationSize;z++)y(q.location+z,vt/q.locationSize,tt,ct,vt*nt,vt/q.locationSize*z*nt,_t)}}else if(D!==void 0){const ct=D[G];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(q.location,ct);break;case 3:i.vertexAttrib3fv(q.location,ct);break;case 4:i.vertexAttrib4fv(q.location,ct);break;default:i.vertexAttrib1fv(q.location,ct)}}}}_()}function I(){L();for(const x in n){const M=n[x];for(const V in M){const H=M[V];for(const W in H)l(H[W].object),delete H[W];delete M[V]}delete n[x]}}function A(x){if(n[x.id]===void 0)return;const M=n[x.id];for(const V in M){const H=M[V];for(const W in H)l(H[W].object),delete H[W];delete M[V]}delete n[x.id]}function w(x){for(const M in n){const V=n[M];if(V[x.id]===void 0)continue;const H=V[x.id];for(const W in H)l(H[W].object),delete H[W];delete V[x.id]}}function L(){Y(),a=!0,r!==s&&(r=s,h(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:u,disableUnusedAttributes:_}}function w0(i,t,e){let n;function s(h){n=h}function r(h,l){i.drawArrays(n,h,l),e.update(l,n,1)}function a(h,l,f){f!==0&&(i.drawArraysInstanced(n,h,l,f),e.update(l,n,f))}function o(h,l,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,l,0,f);let m=0;for(let g=0;g<f;g++)m+=l[g];e.update(m,n,1)}function c(h,l,f,d){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<h.length;g++)a(h[g],l[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,h,0,l,0,d,0,f);let g=0;for(let v=0;v<f;v++)g+=l[v];for(let v=0;v<d.length;v++)e.update(g,n,d[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function T0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Mn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const L=w===wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Gn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pn&&!L)}function c(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const l=c(h);l!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",l,"instead."),h=l);const f=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(d===!0){const w=t.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),u=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),_=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:h,logarithmicDepthBuffer:f,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:u,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:I,maxSamples:A}}function E0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new fi,o=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||s;return s=d,n=f.length,m},this.beginShadows=function(){r=!0,l(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=l(f,d,0)},this.setState=function(f,d,m){const g=f.clippingPlanes,v=f.clipIntersection,u=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!u)r?l(null):h();else{const _=r?0:n,y=_*4;let b=p.clippingState||null;c.value=b,b=l(g,d,y,m);for(let I=0;I!==y;++I)b[I]=e[I];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function h(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function l(f,d,m,g){const v=f!==null?f.length:0;let u=null;if(v!==0){if(u=c.value,g!==!0||u===null){const p=m+v*4,_=d.matrixWorldInverse;o.getNormalMatrix(_),(u===null||u.length<p)&&(u=new Float32Array(p));for(let y=0,b=m;y!==v;++y,b+=4)a.copy(f[y]).applyMatrix4(_,o),a.normal.toArray(u,b),u[b+3]=a.constant}c.value=u,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,u}}function A0(i){let t=new WeakMap;function e(a,o){return o===ro?a.mapping=ss:o===ao&&(a.mapping=rs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===ro||o===ao)if(t.has(a)){const c=t.get(a).texture;return e(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const h=new Of(c.height);return h.fromEquirectangularTexture(i,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class hl extends Fh{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,l=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,o-=l*this.view.offsetY,c=o-l*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ki=4,ec=[.125,.215,.35,.446,.526,.582],gi=20,La=new hl,nc=new Ft;let Da=null,Ia=0,Ua=0,Na=!1;const di=(1+Math.sqrt(5))/2,Vi=1/di,ic=[new P(-di,Vi,0),new P(di,Vi,0),new P(-Vi,0,di),new P(Vi,0,di),new P(0,di,-Vi),new P(0,di,Vi),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=oc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ac(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Da,Ia,Ua),this._renderer.xr.enabled=Na,t.scissorTest=!1,pr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===rs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Da=this._renderer.getRenderTarget(),Ia=this._renderer.getActiveCubeFace(),Ua=this._renderer.getActiveMipmapLevel(),Na=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:wn,format:Mn,colorSpace:ni,depthBuffer:!1},s=rc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=C0(r)),this._blurMaterial=R0(r,t,e)}return s}_compileMaterial(t){const e=new lt(this._lodPlanes[0],t);this._renderer.compile(e,La)}_sceneToCubeUV(t,e,n,s){const o=new nn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],l=this._renderer,f=l.autoClear,d=l.toneMapping;l.getClearColor(nc),l.toneMapping=ti,l.autoClear=!1;const m=new Re({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new lt(new Ze,m);let v=!1;const u=t.background;u?u.isColor&&(m.color.copy(u),t.background=null,v=!0):(m.color.copy(nc),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(o.up.set(0,c[p],0),o.lookAt(h[p],0,0)):_===1?(o.up.set(0,0,c[p]),o.lookAt(0,h[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,h[p]));const y=this._cubeSize;pr(s,_*y,p>2?y:0,y,y),l.setRenderTarget(s),v&&l.render(g,o),l.render(t,o)}g.geometry.dispose(),g.material.dispose(),l.toneMapping=d,l.autoClear=f,t.background=u}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ss||t.mapping===rs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=oc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ac());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new lt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const c=this._cubeSize;pr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,La)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ic[(s-r-1)%ic.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const c=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const l=3,f=new lt(this._lodPlanes[s],h),d=h.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gi-1),v=r/g,u=isFinite(r)?1+Math.floor(l*v):gi;u>gi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${u} samples when the maximum is set to ${gi}`);const p=[];let _=0;for(let w=0;w<gi;++w){const L=w/v,Y=Math.exp(-L*L/2);p.push(Y),w===0?_+=Y:w<u&&(_+=2*Y)}for(let w=0;w<p.length;w++)p[w]=p[w]/_;d.envMap.value=t.texture,d.samples.value=u,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const b=this._sizeLods[s],I=3*b*(s>y-Ki?s-y+Ki:0),A=4*(this._cubeSize-b);pr(e,I,A,3*b,2*b),c.setRenderTarget(e),c.render(f,La)}}function C0(i){const t=[],e=[],n=[];let s=i;const r=i-Ki+1+ec.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let c=1/o;a>i-Ki?c=ec[a-i+Ki-1]:a===0&&(c=0),n.push(c);const h=1/(o-2),l=-h,f=1+h,d=[l,l,f,l,f,f,l,l,f,f,l,f],m=6,g=6,v=3,u=2,p=1,_=new Float32Array(v*g*m),y=new Float32Array(u*g*m),b=new Float32Array(p*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,L=A>2?0:-1,Y=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];_.set(Y,v*g*A),y.set(d,u*g*A);const x=[A,A,A,A,A,A];b.set(x,p*g*A)}const I=new Fe;I.setAttribute("position",new fn(_,v)),I.setAttribute("uv",new fn(y,u)),I.setAttribute("faceIndex",new fn(b,p)),t.push(I),s>Ki&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function rc(i,t,e){const n=new un(i,t,e);return n.texture.mapping=jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function pr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function R0(i,t,e){const n=new Float32Array(gi),s=new P(0,1,0);return new We({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ac(){return new We({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ul(),fragmentShader:`

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
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function oc(){return new We({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function ul(){return`

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
	`}function P0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const c=o.mapping,h=c===ro||c===ao,l=c===ss||c===rs;if(h||l){let f=t.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return e===null&&(e=new sc(i)),f=h?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return h&&m&&m.height>0||l&&m&&s(m)?(e===null&&(e=new sc(i)),f=h?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let c=0;const h=6;for(let l=0;l<h;l++)o[l]!==void 0&&c++;return c===h}function r(o){const c=o.target;c.removeEventListener("dispose",r);const h=t.get(c);h!==void 0&&(t.delete(c),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function L0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,t,e,n){const s={},r=new WeakMap;function a(f){const d=f.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let u=0,p=v.length;u<p;u++)t.remove(v[u])}d.removeEventListener("dispose",a),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(f){const d=f.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const m=f.morphAttributes;for(const g in m){const v=m[g];for(let u=0,p=v.length;u<p;u++)t.update(v[u],i.ARRAY_BUFFER)}}function h(f){const d=[],m=f.index,g=f.attributes.position;let v=0;if(m!==null){const _=m.array;v=m.version;for(let y=0,b=_.length;y<b;y+=3){const I=_[y+0],A=_[y+1],w=_[y+2];d.push(I,A,A,w,w,I)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,b=_.length/3-1;y<b;y+=3){const I=y+0,A=y+1,w=y+2;d.push(I,A,A,w,w,I)}}else return;const u=new(Ph(d)?Nh:Uh)(d,1);u.version=v;const p=r.get(f);p&&t.remove(p),r.set(f,u)}function l(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&h(f)}else h(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:l}}function I0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,m){i.drawElements(n,m,r,d*a),e.update(m,n,1)}function h(d,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,d*a,g),e.update(m,n,g))}function l(d,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let u=0;for(let p=0;p<g;p++)u+=m[p];e.update(u,n,1)}function f(d,m,g,v){if(g===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<d.length;p++)h(d[p]/a,m[p],v[p]);else{u.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=m[_];for(let _=0;_<v.length;_++)e.update(p,n,v[_])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=h,this.renderMultiDraw=l,this.renderMultiDrawInstances=f}function U0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function N0(i,t,e){const n=new WeakMap,s=new me;function r(a,o,c){const h=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=l!==void 0?l.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let Y=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],_=o.morphAttributes.color||[];let y=0;m===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let b=o.attributes.position.count*y,I=1;b>t.maxTextureSize&&(I=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const A=new Float32Array(b*I*4*f),w=new Dh(A,b,I,f);w.type=Pn,w.needsUpdate=!0;const L=y*4;for(let x=0;x<f;x++){const M=u[x],V=p[x],H=_[x],W=b*I*4*x;for(let Q=0;Q<M.count;Q++){const D=Q*L;m===!0&&(s.fromBufferAttribute(M,Q),A[W+D+0]=s.x,A[W+D+1]=s.y,A[W+D+2]=s.z,A[W+D+3]=0),g===!0&&(s.fromBufferAttribute(V,Q),A[W+D+4]=s.x,A[W+D+5]=s.y,A[W+D+6]=s.z,A[W+D+7]=0),v===!0&&(s.fromBufferAttribute(H,Q),A[W+D+8]=s.x,A[W+D+9]=s.y,A[W+D+10]=s.z,A[W+D+11]=H.itemSize===4?s.w:1)}}d={count:f,texture:w,size:new rt(b,I)},n.set(o,d),o.addEventListener("dispose",Y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let m=0;for(let v=0;v<h.length;v++)m+=h[v];const g=o.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",h)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function k0(i,t,e,n){let s=new WeakMap;function r(c){const h=n.render.frame,l=c.geometry,f=t.get(c,l);if(s.get(f)!==h&&(t.update(f),s.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,h))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return f}function a(){s=new WeakMap}function o(c){const h=c.target;h.removeEventListener("dispose",o),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class zh extends qe{constructor(t,e,n,s,r,a,o,c,h,l=ts){if(l!==ts&&l!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&l===ts&&(n=wi),n===void 0&&l===os&&(n=as),super(null,s,r,a,o,c,l,n,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ue,this.minFilter=c!==void 0?c:Ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Vh=new qe,lc=new zh(1,1),Hh=new Dh,Gh=new Sf,Wh=new Oh,cc=[],hc=[],uc=new Float32Array(16),fc=new Float32Array(9),dc=new Float32Array(4);function ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=cc[s];if(r===void 0&&(r=new Float32Array(s),cc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Ne(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ke(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Zr(i,t){let e=hc[t];e===void 0&&(e=new Int32Array(t),hc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function F0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2fv(this.addr,t),ke(e,t)}}function B0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ne(e,t))return;i.uniform3fv(this.addr,t),ke(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4fv(this.addr,t),ke(e,t)}}function V0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ke(e,t)}else{if(Ne(e,n))return;dc.set(n),i.uniformMatrix2fv(this.addr,!1,dc),ke(e,n)}}function H0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ke(e,t)}else{if(Ne(e,n))return;fc.set(n),i.uniformMatrix3fv(this.addr,!1,fc),ke(e,n)}}function G0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ne(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ke(e,t)}else{if(Ne(e,n))return;uc.set(n),i.uniformMatrix4fv(this.addr,!1,uc),ke(e,n)}}function W0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2iv(this.addr,t),ke(e,t)}}function $0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3iv(this.addr,t),ke(e,t)}}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4iv(this.addr,t),ke(e,t)}}function Y0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function j0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ne(e,t))return;i.uniform2uiv(this.addr,t),ke(e,t)}}function K0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ne(e,t))return;i.uniform3uiv(this.addr,t),ke(e,t)}}function Z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ne(e,t))return;i.uniform4uiv(this.addr,t),ke(e,t)}}function J0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(lc.compareFunction=Rh,r=lc):r=Vh,e.setTexture2D(t||r,s)}function Q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Gh,s)}function tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Wh,s)}function em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Hh,s)}function nm(i){switch(i){case 5126:return F0;case 35664:return O0;case 35665:return B0;case 35666:return z0;case 35674:return V0;case 35675:return H0;case 35676:return G0;case 5124:case 35670:return W0;case 35667:case 35671:return q0;case 35668:case 35672:return $0;case 35669:case 35673:return X0;case 5125:return Y0;case 36294:return j0;case 36295:return K0;case 36296:return Z0;case 35678:case 36198:case 36298:case 36306:case 35682:return J0;case 35679:case 36299:case 36307:return Q0;case 35680:case 36300:case 36308:case 36293:return tm;case 36289:case 36303:case 36311:case 36292:return em}}function im(i,t){i.uniform1fv(this.addr,t)}function sm(i,t){const e=ms(t,this.size,2);i.uniform2fv(this.addr,e)}function rm(i,t){const e=ms(t,this.size,3);i.uniform3fv(this.addr,e)}function am(i,t){const e=ms(t,this.size,4);i.uniform4fv(this.addr,e)}function om(i,t){const e=ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function lm(i,t){const e=ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function cm(i,t){const e=ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function hm(i,t){i.uniform1iv(this.addr,t)}function um(i,t){i.uniform2iv(this.addr,t)}function fm(i,t){i.uniform3iv(this.addr,t)}function dm(i,t){i.uniform4iv(this.addr,t)}function pm(i,t){i.uniform1uiv(this.addr,t)}function mm(i,t){i.uniform2uiv(this.addr,t)}function gm(i,t){i.uniform3uiv(this.addr,t)}function vm(i,t){i.uniform4uiv(this.addr,t)}function _m(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Vh,r[a])}function xm(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Gh,r[a])}function ym(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Wh,r[a])}function bm(i,t,e){const n=this.cache,s=t.length,r=Zr(e,s);Ne(n,r)||(i.uniform1iv(this.addr,r),ke(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Hh,r[a])}function Mm(i){switch(i){case 5126:return im;case 35664:return sm;case 35665:return rm;case 35666:return am;case 35674:return om;case 35675:return lm;case 35676:return cm;case 5124:case 35670:return hm;case 35667:case 35671:return um;case 35668:case 35672:return fm;case 35669:case 35673:return dm;case 5125:return pm;case 36294:return mm;case 36295:return gm;case 36296:return vm;case 35678:case 36198:case 36298:case 36306:case 35682:return _m;case 35679:case 36299:case 36307:return xm;case 35680:case 36300:case 36308:case 36293:return ym;case 36289:case 36303:case 36311:case 36292:return bm}}class Sm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=nm(e.type)}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Mm(e.type)}}class Tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function pc(i,t){i.seq.push(t),i.map[t.id]=t}function Em(i,t,e){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),a=ka.lastIndex;let o=r[1];const c=r[2]==="]",h=r[3];if(c&&(o=o|0),h===void 0||h==="["&&a+2===s){pc(e,h===void 0?new Sm(o,i,t):new wm(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new Tm(o),pc(e,f)),e=f}}}class Fr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Em(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function mc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Am=37297;let Cm=0;function Rm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function Pm(i){const t=oe.getPrimaries(oe.workingColorSpace),e=oe.getPrimaries(i);let n;switch(t===e?n="":t===Wr&&e===Gr?n="LinearDisplayP3ToLinearSRGB":t===Gr&&e===Wr&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case Kr:return[n,"LinearTransferOETF"];case hn:case al:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Rm(i.getShaderSource(t),a)}else return s}function Lm(i,t){const e=Pm(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Dm(i,t){let e;switch(t){case dh:e="Linear";break;case ph:e="Reinhard";break;case mh:e="Cineon";break;case Zo:e="ACESFilmic";break;case gh:e="AgX";break;case vh:e="Neutral";break;case ef:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const mr=new P;function Im(){oe.getLuminanceCoefficients(mr);const i=mr.x.toFixed(4),t=mr.y.toFixed(4),e=mr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Um(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function Nm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function km(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Rs(i){return i!==""}function vc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _c(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Fm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ko(i){return i.replace(Fm,Bm)}const Om=new Map;function Bm(i,t){let e=jt[t];if(e===void 0){const n=Om.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ko(e)}const zm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xc(i){return i.replace(zm,Vm)}function Vm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function yc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Hm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===jo?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Uu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function Gm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ss:case rs:t="ENVMAP_TYPE_CUBE";break;case jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case rs:t="ENVMAP_MODE_REFRACTION";break}return t}function qm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ko:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case tf:t="ENVMAP_BLENDING_ADD";break}return t}function $m(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const c=Hm(e),h=Gm(e),l=Wm(e),f=qm(e),d=$m(e),m=Um(e),g=Nm(r),v=s.createProgram();let u,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),u.length>0&&(u+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),p.length>0&&(p+=`
`)):(u=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),p=[yc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+l:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?jt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,Lm("linearToOutputTexel",e.outputColorSpace),Im(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),a=ko(a),a=vc(a,e),a=_c(a,e),o=ko(o),o=vc(o,e),o=_c(o,e),a=xc(a),o=xc(o),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,u=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,p=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+u+a,b=_+p+o,I=mc(s,s.VERTEX_SHADER,y),A=mc(s,s.FRAGMENT_SHADER,b);s.attachShader(v,I),s.attachShader(v,A),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function w(M){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(v).trim(),H=s.getShaderInfoLog(I).trim(),W=s.getShaderInfoLog(A).trim();let Q=!0,D=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,I,A);else{const G=gc(s,I,"vertex"),q=gc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+V+`
`+G+`
`+q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(H===""||W==="")&&(D=!1);D&&(M.diagnostics={runnable:Q,programLog:V,vertexShader:{log:H,prefix:u},fragmentShader:{log:W,prefix:p}})}s.deleteShader(I),s.deleteShader(A),L=new Fr(s,v),Y=km(s,v)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let Y;this.getAttributes=function(){return Y===void 0&&w(this),Y};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,Am)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Cm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=I,this.fragmentShader=A,this}let Ym=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=Ym++,this.code=t,this.usedTimes=0}}function Zm(i,t,e,n,s,r,a){const o=new ll,c=new jm,h=new Set,l=[],f=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function u(x){return h.add(x),x===0?"uv":`uv${x}`}function p(x,M,V,H,W){const Q=H.fog,D=W.geometry,G=x.isMeshStandardMaterial?H.environment:null,q=(x.isMeshStandardMaterial?e:t).get(x.envMap||G),at=q&&q.mapping===jr?q.image.height:null,ct=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const vt=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Zt=vt!==void 0?vt.length:0;let xt=0;D.morphAttributes.position!==void 0&&(xt=1),D.morphAttributes.normal!==void 0&&(xt=2),D.morphAttributes.color!==void 0&&(xt=3);let tt,nt,_t,z;if(ct){const en=Cn[ct];tt=en.vertexShader,nt=en.fragmentShader}else tt=x.vertexShader,nt=x.fragmentShader,c.update(x),_t=c.getVertexShaderID(x),z=c.getFragmentShaderID(x);const et=i.getRenderTarget(),Ot=W.isInstancedMesh===!0,Gt=W.isBatchedMesh===!0,Xt=!!x.map,it=!!x.matcap,C=!!q,pt=!!x.aoMap,ut=!!x.lightMap,K=!!x.bumpMap,mt=!!x.normalMap,Ut=!!x.displacementMap,k=!!x.emissiveMap,T=!!x.metalnessMap,S=!!x.roughnessMap,U=x.anisotropy>0,B=x.clearcoat>0,$=x.dispersion>0,Z=x.iridescence>0,yt=x.sheen>0,ft=x.transmission>0,St=U&&!!x.anisotropyMap,Qt=B&&!!x.clearcoatMap,ht=B&&!!x.clearcoatNormalMap,At=B&&!!x.clearcoatRoughnessMap,qt=Z&&!!x.iridescenceMap,$t=Z&&!!x.iridescenceThicknessMap,Pt=yt&&!!x.sheenColorMap,te=yt&&!!x.sheenRoughnessMap,Yt=!!x.specularMap,ve=!!x.specularColorMap,N=!!x.specularIntensityMap,wt=ft&&!!x.transmissionMap,J=ft&&!!x.thicknessMap,st=!!x.gradientMap,bt=!!x.alphaMap,Tt=x.alphaTest>0,ne=!!x.alphaHash,Pe=!!x.extensions;let tn=ti;x.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(tn=i.toneMapping);const ae={shaderID:ct,shaderType:x.type,shaderName:x.name,vertexShader:tt,fragmentShader:nt,defines:x.defines,customVertexShaderID:_t,customFragmentShaderID:z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Gt,batchingColor:Gt&&W._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&W.instanceColor!==null,instancingMorph:Ot&&W.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:et===null?i.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ni,alphaToCoverage:!!x.alphaToCoverage,map:Xt,matcap:it,envMap:C,envMapMode:C&&q.mapping,envMapCubeUVHeight:at,aoMap:pt,lightMap:ut,bumpMap:K,normalMap:mt,displacementMap:m&&Ut,emissiveMap:k,normalMapObjectSpace:mt&&x.normalMapType===rf,normalMapTangentSpace:mt&&x.normalMapType===rl,metalnessMap:T,roughnessMap:S,anisotropy:U,anisotropyMap:St,clearcoat:B,clearcoatMap:Qt,clearcoatNormalMap:ht,clearcoatRoughnessMap:At,dispersion:$,iridescence:Z,iridescenceMap:qt,iridescenceThicknessMap:$t,sheen:yt,sheenColorMap:Pt,sheenRoughnessMap:te,specularMap:Yt,specularColorMap:ve,specularIntensityMap:N,transmission:ft,transmissionMap:wt,thicknessMap:J,gradientMap:st,opaque:x.transparent===!1&&x.blending===Mi&&x.alphaToCoverage===!1,alphaMap:bt,alphaTest:Tt,alphaHash:ne,combine:x.combine,mapUv:Xt&&u(x.map.channel),aoMapUv:pt&&u(x.aoMap.channel),lightMapUv:ut&&u(x.lightMap.channel),bumpMapUv:K&&u(x.bumpMap.channel),normalMapUv:mt&&u(x.normalMap.channel),displacementMapUv:Ut&&u(x.displacementMap.channel),emissiveMapUv:k&&u(x.emissiveMap.channel),metalnessMapUv:T&&u(x.metalnessMap.channel),roughnessMapUv:S&&u(x.roughnessMap.channel),anisotropyMapUv:St&&u(x.anisotropyMap.channel),clearcoatMapUv:Qt&&u(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&u(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:At&&u(x.clearcoatRoughnessMap.channel),iridescenceMapUv:qt&&u(x.iridescenceMap.channel),iridescenceThicknessMapUv:$t&&u(x.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&u(x.sheenColorMap.channel),sheenRoughnessMapUv:te&&u(x.sheenRoughnessMap.channel),specularMapUv:Yt&&u(x.specularMap.channel),specularColorMapUv:ve&&u(x.specularColorMap.channel),specularIntensityMapUv:N&&u(x.specularIntensityMap.channel),transmissionMapUv:wt&&u(x.transmissionMap.channel),thicknessMapUv:J&&u(x.thicknessMap.channel),alphaMapUv:bt&&u(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||U),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!D.attributes.uv&&(Xt||bt),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Zt,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:tn,decodeVideoTexture:Xt&&x.map.isVideoTexture===!0&&oe.getTransfer(x.map.colorSpace)===_e,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ie,flipSided:x.side===sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Pe&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pe&&x.extensions.multiDraw===!0||Gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ae.vertexUv1s=h.has(1),ae.vertexUv2s=h.has(2),ae.vertexUv3s=h.has(3),h.clear(),ae}function _(x){const M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(const V in x.defines)M.push(V),M.push(x.defines[V]);return x.isRawShaderMaterial===!1&&(y(M,x),b(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function b(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),x.push(o.mask)}function I(x){const M=v[x.type];let V;if(M){const H=Cn[M];V=cs.clone(H.uniforms)}else V=x.uniforms;return V}function A(x,M){let V;for(let H=0,W=l.length;H<W;H++){const Q=l[H];if(Q.cacheKey===M){V=Q,++V.usedTimes;break}}return V===void 0&&(V=new Xm(i,M,x,r),l.push(V)),V}function w(x){if(--x.usedTimes===0){const M=l.indexOf(x);l[M]=l[l.length-1],l.pop(),x.destroy()}}function L(x){c.remove(x)}function Y(){c.dispose()}return{getParameters:p,getProgramCacheKey:_,getUniforms:I,acquireProgram:A,releaseProgram:w,releaseShaderCache:L,programs:l,dispose:Y}}function Jm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Qm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function bc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Mc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,d,m,g,v,u){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:u},i[t]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=u),t++,p}function o(f,d,m,g,v,u){const p=a(f,d,m,g,v,u);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function c(f,d,m,g,v,u){const p=a(f,d,m,g,v,u);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function h(f,d){e.length>1&&e.sort(f||Qm),n.length>1&&n.sort(d||bc),s.length>1&&s.sort(d||bc)}function l(){for(let f=t,d=i.length;f<d;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:l,sort:h}}function tg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Mc,i.set(n,[a])):s>=r.length?(a=new Mc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function eg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new Ft};break;case"SpotLight":e={position:new P,direction:new P,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function ng(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let ig=0;function sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function rg(i){const t=new eg,e=ng(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new P);const s=new P,r=new se,a=new se;function o(h){let l=0,f=0,d=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let m=0,g=0,v=0,u=0,p=0,_=0,y=0,b=0,I=0,A=0,w=0;h.sort(sg);for(let Y=0,x=h.length;Y<x;Y++){const M=h[Y],V=M.color,H=M.intensity,W=M.distance,Q=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)l+=V.r*H,f+=V.g*H,d+=V.b*H;else if(M.isLightProbe){for(let D=0;D<9;D++)n.probe[D].addScaledVector(M.sh.coefficients[D],H);w++}else if(M.isDirectionalLight){const D=t.get(M);if(D.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const G=M.shadow,q=e.get(M);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.directionalShadow[m]=q,n.directionalShadowMap[m]=Q,n.directionalShadowMatrix[m]=M.shadow.matrix,_++}n.directional[m]=D,m++}else if(M.isSpotLight){const D=t.get(M);D.position.setFromMatrixPosition(M.matrixWorld),D.color.copy(V).multiplyScalar(H),D.distance=W,D.coneCos=Math.cos(M.angle),D.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),D.decay=M.decay,n.spot[v]=D;const G=M.shadow;if(M.map&&(n.spotLightMap[I]=M.map,I++,G.updateMatrices(M),M.castShadow&&A++),n.spotLightMatrix[v]=G.matrix,M.castShadow){const q=e.get(M);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=Q,b++}v++}else if(M.isRectAreaLight){const D=t.get(M);D.color.copy(V).multiplyScalar(H),D.halfWidth.set(M.width*.5,0,0),D.halfHeight.set(0,M.height*.5,0),n.rectArea[u]=D,u++}else if(M.isPointLight){const D=t.get(M);if(D.color.copy(M.color).multiplyScalar(M.intensity),D.distance=M.distance,D.decay=M.decay,M.castShadow){const G=M.shadow,q=e.get(M);q.shadowIntensity=G.intensity,q.shadowBias=G.bias,q.shadowNormalBias=G.normalBias,q.shadowRadius=G.radius,q.shadowMapSize=G.mapSize,q.shadowCameraNear=G.camera.near,q.shadowCameraFar=G.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=Q,n.pointShadowMatrix[g]=M.shadow.matrix,y++}n.point[g]=D,g++}else if(M.isHemisphereLight){const D=t.get(M);D.skyColor.copy(M.color).multiplyScalar(H),D.groundColor.copy(M.groundColor).multiplyScalar(H),n.hemi[p]=D,p++}}u>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=l,n.ambient[1]=f,n.ambient[2]=d;const L=n.hash;(L.directionalLength!==m||L.pointLength!==g||L.spotLength!==v||L.rectAreaLength!==u||L.hemiLength!==p||L.numDirectionalShadows!==_||L.numPointShadows!==y||L.numSpotShadows!==b||L.numSpotMaps!==I||L.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=u,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,L.directionalLength=m,L.pointLength=g,L.spotLength=v,L.rectAreaLength=u,L.hemiLength=p,L.numDirectionalShadows=_,L.numPointShadows=y,L.numSpotShadows=b,L.numSpotMaps=I,L.numLightProbes=w,n.version=ig++)}function c(h,l){let f=0,d=0,m=0,g=0,v=0;const u=l.matrixWorldInverse;for(let p=0,_=h.length;p<_;p++){const y=h[p];if(y.isDirectionalLight){const b=n.directional[f];b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),f++}else if(y.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),b.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(u),m++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),a.identity(),r.copy(y.matrixWorld),r.premultiply(u),a.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(u),d++}else if(y.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(u),v++}}}return{setup:o,setupView:c,state:n}}function Sc(i){const t=new rg(i),e=[],n=[];function s(l){h.camera=l,e.length=0,n.length=0}function r(l){e.push(l)}function a(l){n.push(l)}function o(){t.setup(e)}function c(l){t.setupView(e,l)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ag(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Sc(i),t.set(s,[o])):r>=a.length?(o=new Sc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class qh extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class og extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const lg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cg=`uniform sampler2D shadow_pass;
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
}`;function hg(i,t,e){let n=new cl;const s=new rt,r=new rt,a=new me,o=new qh({depthPacking:Ch}),c=new og,h={},l=e.maxTextureSize,f={[ei]:sn,[sn]:ei,[Ie]:Ie},d=new We({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:lg,fragmentShader:cg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new lt(g,d),u=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jo;let p=this.type;this.render=function(A,w,L){if(u.enabled===!1||u.autoUpdate===!1&&u.needsUpdate===!1||A.length===0)return;const Y=i.getRenderTarget(),x=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Ln),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const H=p!==Bn&&this.type===Bn,W=p===Bn&&this.type!==Bn;for(let Q=0,D=A.length;Q<D;Q++){const G=A[Q],q=G.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);const at=q.getFrameExtents();if(s.multiply(at),r.copy(q.mapSize),(s.x>l||s.y>l)&&(s.x>l&&(r.x=Math.floor(l/at.x),s.x=r.x*at.x,q.mapSize.x=r.x),s.y>l&&(r.y=Math.floor(l/at.y),s.y=r.y*at.y,q.mapSize.y=r.y)),q.map===null||H===!0||W===!0){const vt=this.type!==Bn?{minFilter:Ue,magFilter:Ue}:{};q.map!==null&&q.map.dispose(),q.map=new un(s.x,s.y,vt),q.map.texture.name=G.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const ct=q.getViewportCount();for(let vt=0;vt<ct;vt++){const Zt=q.getViewport(vt);a.set(r.x*Zt.x,r.y*Zt.y,r.x*Zt.z,r.y*Zt.w),V.viewport(a),q.updateMatrices(G,vt),n=q.getFrustum(),b(w,L,q.camera,G,this.type)}q.isPointLightShadow!==!0&&this.type===Bn&&_(q,L),q.needsUpdate=!1}p=this.type,u.needsUpdate=!1,i.setRenderTarget(Y,x,M)};function _(A,w){const L=t.update(v);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new un(s.x,s.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,L,d,v,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,L,m,v,null)}function y(A,w,L,Y){let x=null;const M=L.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(M!==void 0)x=M;else if(x=L.isPointLight===!0?c:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=x.uuid,H=w.uuid;let W=h[V];W===void 0&&(W={},h[V]=W);let Q=W[H];Q===void 0&&(Q=x.clone(),W[H]=Q,w.addEventListener("dispose",I)),x=Q}if(x.visible=w.visible,x.wireframe=w.wireframe,Y===Bn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const V=i.properties.get(x);V.light=L}return x}function b(A,w,L,Y,x){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&x===Bn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,A.matrixWorld);const H=t.update(A),W=A.material;if(Array.isArray(W)){const Q=H.groups;for(let D=0,G=Q.length;D<G;D++){const q=Q[D],at=W[q.materialIndex];if(at&&at.visible){const ct=y(A,at,Y,x);A.onBeforeShadow(i,A,w,L,H,ct,q),i.renderBufferDirect(L,null,H,ct,A,q),A.onAfterShadow(i,A,w,L,H,ct,q)}}}else if(W.visible){const Q=y(A,W,Y,x);A.onBeforeShadow(i,A,w,L,H,Q,null),i.renderBufferDirect(L,null,H,Q,A,null),A.onAfterShadow(i,A,w,L,H,Q,null)}}const V=A.children;for(let H=0,W=V.length;H<W;H++)b(V[H],w,L,Y,x)}function I(A){A.target.removeEventListener("dispose",I);for(const L in h){const Y=h[L],x=A.target.uuid;x in Y&&(Y[x].dispose(),delete Y[x])}}}const ug={[Ja]:Qa,[to]:io,[eo]:so,[is]:no,[Qa]:Ja,[io]:to,[so]:eo,[no]:is};function fg(i){function t(){let N=!1;const wt=new me;let J=null;const st=new me(0,0,0,0);return{setMask:function(bt){J!==bt&&!N&&(i.colorMask(bt,bt,bt,bt),J=bt)},setLocked:function(bt){N=bt},setClear:function(bt,Tt,ne,Pe,tn){tn===!0&&(bt*=Pe,Tt*=Pe,ne*=Pe),wt.set(bt,Tt,ne,Pe),st.equals(wt)===!1&&(i.clearColor(bt,Tt,ne,Pe),st.copy(wt))},reset:function(){N=!1,J=null,st.set(-1,0,0,0)}}}function e(){let N=!1,wt=!1,J=null,st=null,bt=null;return{setReversed:function(Tt){wt=Tt},setTest:function(Tt){Tt?_t(i.DEPTH_TEST):z(i.DEPTH_TEST)},setMask:function(Tt){J!==Tt&&!N&&(i.depthMask(Tt),J=Tt)},setFunc:function(Tt){if(wt&&(Tt=ug[Tt]),st!==Tt){switch(Tt){case Ja:i.depthFunc(i.NEVER);break;case Qa:i.depthFunc(i.ALWAYS);break;case to:i.depthFunc(i.LESS);break;case is:i.depthFunc(i.LEQUAL);break;case eo:i.depthFunc(i.EQUAL);break;case no:i.depthFunc(i.GEQUAL);break;case io:i.depthFunc(i.GREATER);break;case so:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}st=Tt}},setLocked:function(Tt){N=Tt},setClear:function(Tt){bt!==Tt&&(i.clearDepth(Tt),bt=Tt)},reset:function(){N=!1,J=null,st=null,bt=null}}}function n(){let N=!1,wt=null,J=null,st=null,bt=null,Tt=null,ne=null,Pe=null,tn=null;return{setTest:function(ae){N||(ae?_t(i.STENCIL_TEST):z(i.STENCIL_TEST))},setMask:function(ae){wt!==ae&&!N&&(i.stencilMask(ae),wt=ae)},setFunc:function(ae,en,In){(J!==ae||st!==en||bt!==In)&&(i.stencilFunc(ae,en,In),J=ae,st=en,bt=In)},setOp:function(ae,en,In){(Tt!==ae||ne!==en||Pe!==In)&&(i.stencilOp(ae,en,In),Tt=ae,ne=en,Pe=In)},setLocked:function(ae){N=ae},setClear:function(ae){tn!==ae&&(i.clearStencil(ae),tn=ae)},reset:function(){N=!1,wt=null,J=null,st=null,bt=null,Tt=null,ne=null,Pe=null,tn=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,c=new WeakMap;let h={},l={},f=new WeakMap,d=[],m=null,g=!1,v=null,u=null,p=null,_=null,y=null,b=null,I=null,A=new Ft(0,0,0),w=0,L=!1,Y=null,x=null,M=null,V=null,H=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,D=0;const G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(D=parseFloat(/^WebGL (\d)/.exec(G)[1]),Q=D>=1):G.indexOf("OpenGL ES")!==-1&&(D=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Q=D>=2);let q=null,at={};const ct=i.getParameter(i.SCISSOR_BOX),vt=i.getParameter(i.VIEWPORT),Zt=new me().fromArray(ct),xt=new me().fromArray(vt);function tt(N,wt,J,st){const bt=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(N,Tt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ne=0;ne<J;ne++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,st,0,i.RGBA,i.UNSIGNED_BYTE,bt):i.texImage2D(wt+ne,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,bt);return Tt}const nt={};nt[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_t(i.DEPTH_TEST),r.setFunc(is),ut(!1),K(Il),_t(i.CULL_FACE),C(Ln);function _t(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function z(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function et(N,wt){return l[N]!==wt?(i.bindFramebuffer(N,wt),l[N]=wt,N===i.DRAW_FRAMEBUFFER&&(l[i.FRAMEBUFFER]=wt),N===i.FRAMEBUFFER&&(l[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ot(N,wt){let J=d,st=!1;if(N){J=f.get(wt),J===void 0&&(J=[],f.set(wt,J));const bt=N.textures;if(J.length!==bt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,ne=bt.length;Tt<ne;Tt++)J[Tt]=i.COLOR_ATTACHMENT0+Tt;J.length=bt.length,st=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,st=!0);st&&i.drawBuffers(J)}function Gt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const Xt={[mi]:i.FUNC_ADD,[ku]:i.FUNC_SUBTRACT,[Fu]:i.FUNC_REVERSE_SUBTRACT};Xt[Ou]=i.MIN,Xt[Bu]=i.MAX;const it={[zu]:i.ZERO,[Vu]:i.ONE,[Hu]:i.SRC_COLOR,[Ka]:i.SRC_ALPHA,[Yu]:i.SRC_ALPHA_SATURATE,[$u]:i.DST_COLOR,[Wu]:i.DST_ALPHA,[Gu]:i.ONE_MINUS_SRC_COLOR,[Za]:i.ONE_MINUS_SRC_ALPHA,[Xu]:i.ONE_MINUS_DST_COLOR,[qu]:i.ONE_MINUS_DST_ALPHA,[ju]:i.CONSTANT_COLOR,[Ku]:i.ONE_MINUS_CONSTANT_COLOR,[Zu]:i.CONSTANT_ALPHA,[Ju]:i.ONE_MINUS_CONSTANT_ALPHA};function C(N,wt,J,st,bt,Tt,ne,Pe,tn,ae){if(N===Ln){g===!0&&(z(i.BLEND),g=!1);return}if(g===!1&&(_t(i.BLEND),g=!0),N!==Nu){if(N!==v||ae!==L){if((u!==mi||y!==mi)&&(i.blendEquation(i.FUNC_ADD),u=mi,y=mi),ae)switch(N){case Mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.ONE,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Si:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}p=null,_=null,b=null,I=null,A.set(0,0,0),w=0,v=N,L=ae}return}bt=bt||wt,Tt=Tt||J,ne=ne||st,(wt!==u||bt!==y)&&(i.blendEquationSeparate(Xt[wt],Xt[bt]),u=wt,y=bt),(J!==p||st!==_||Tt!==b||ne!==I)&&(i.blendFuncSeparate(it[J],it[st],it[Tt],it[ne]),p=J,_=st,b=Tt,I=ne),(Pe.equals(A)===!1||tn!==w)&&(i.blendColor(Pe.r,Pe.g,Pe.b,tn),A.copy(Pe),w=tn),v=N,L=!1}function pt(N,wt){N.side===Ie?z(i.CULL_FACE):_t(i.CULL_FACE);let J=N.side===sn;wt&&(J=!J),ut(J),N.blending===Mi&&N.transparent===!1?C(Ln):C(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),s.setMask(N.colorWrite);const st=N.stencilWrite;a.setTest(st),st&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),Ut(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?_t(i.SAMPLE_ALPHA_TO_COVERAGE):z(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut(N){Y!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),Y=N)}function K(N){N!==Du?(_t(i.CULL_FACE),N!==x&&(N===Il?i.cullFace(i.BACK):N===Iu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):z(i.CULL_FACE),x=N}function mt(N){N!==M&&(Q&&i.lineWidth(N),M=N)}function Ut(N,wt,J){N?(_t(i.POLYGON_OFFSET_FILL),(V!==wt||H!==J)&&(i.polygonOffset(wt,J),V=wt,H=J)):z(i.POLYGON_OFFSET_FILL)}function k(N){N?_t(i.SCISSOR_TEST):z(i.SCISSOR_TEST)}function T(N){N===void 0&&(N=i.TEXTURE0+W-1),q!==N&&(i.activeTexture(N),q=N)}function S(N,wt,J){J===void 0&&(q===null?J=i.TEXTURE0+W-1:J=q);let st=at[J];st===void 0&&(st={type:void 0,texture:void 0},at[J]=st),(st.type!==N||st.texture!==wt)&&(q!==J&&(i.activeTexture(J),q=J),i.bindTexture(N,wt||nt[N]),st.type=N,st.texture=wt)}function U(){const N=at[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function B(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function $t(N){Zt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Zt.copy(N))}function Pt(N){xt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),xt.copy(N))}function te(N,wt){let J=c.get(wt);J===void 0&&(J=new WeakMap,c.set(wt,J));let st=J.get(N);st===void 0&&(st=i.getUniformBlockIndex(wt,N.name),J.set(N,st))}function Yt(N,wt){const st=c.get(wt).get(N);o.get(wt)!==st&&(i.uniformBlockBinding(wt,st,N.__bindingPointIndex),o.set(wt,st))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},q=null,at={},l={},f=new WeakMap,d=[],m=null,g=!1,v=null,u=null,p=null,_=null,y=null,b=null,I=null,A=new Ft(0,0,0),w=0,L=!1,Y=null,x=null,M=null,V=null,H=null,Zt.set(0,0,i.canvas.width,i.canvas.height),xt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_t,disable:z,bindFramebuffer:et,drawBuffers:Ot,useProgram:Gt,setBlending:C,setMaterial:pt,setFlipSided:ut,setCullFace:K,setLineWidth:mt,setPolygonOffset:Ut,setScissorTest:k,activeTexture:T,bindTexture:S,unbindTexture:U,compressedTexImage2D:B,compressedTexImage3D:$,texImage2D:At,texImage3D:qt,updateUBOMapping:te,uniformBlockBinding:Yt,texStorage2D:Qt,texStorage3D:ht,texSubImage2D:Z,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:St,scissor:$t,viewport:Pt,reset:ve}}function wc(i,t,e,n){const s=dg(n);switch(e){case Mh:return i*t;case wh:return i*t;case Th:return i*t*2;case el:return i*t/s.components*s.byteLength;case nl:return i*t/s.components*s.byteLength;case Eh:return i*t*2/s.components*s.byteLength;case il:return i*t*2/s.components*s.byteLength;case Sh:return i*t*3/s.components*s.byteLength;case Mn:return i*t*4/s.components*s.byteLength;case sl:return i*t*4/s.components*s.byteLength;case Lr:case Dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Ur:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case co:case uo:return Math.max(i,16)*Math.max(t,8)/4;case lo:case ho:return Math.max(i,8)*Math.max(t,8)/2;case fo:case po:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case xo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case yo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ro:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Nr:case Po:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ah:case Do:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Io:case Uo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function dg(i){switch(i){case Gn:case xh:return{byteLength:1,components:1};case Os:case yh:case wn:return{byteLength:2,components:1};case Qo:case tl:return{byteLength:2,components:4};case wi:case Jo:case Pn:return{byteLength:4,components:1};case bh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function pg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new rt,l=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,S){return m?new OffscreenCanvas(T,S):Bs("canvas")}function v(T,S,U){let B=1;const $=k(T);if(($.width>U||$.height>U)&&(B=U/Math.max($.width,$.height)),B<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const Z=Math.floor(B*$.width),yt=Math.floor(B*$.height);f===void 0&&(f=g(Z,yt));const ft=S?g(Z,yt):f;return ft.width=Z,ft.height=yt,ft.getContext("2d").drawImage(T,0,0,Z,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+Z+"x"+yt+")."),ft}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),T;return T}function u(T){return T.generateMipmaps&&T.minFilter!==Ue&&T.minFilter!==bn}function p(T){i.generateMipmap(T)}function _(T,S,U,B,$=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let Z=S;if(S===i.RED&&(U===i.FLOAT&&(Z=i.R32F),U===i.HALF_FLOAT&&(Z=i.R16F),U===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.R8UI),U===i.UNSIGNED_SHORT&&(Z=i.R16UI),U===i.UNSIGNED_INT&&(Z=i.R32UI),U===i.BYTE&&(Z=i.R8I),U===i.SHORT&&(Z=i.R16I),U===i.INT&&(Z=i.R32I)),S===i.RG&&(U===i.FLOAT&&(Z=i.RG32F),U===i.HALF_FLOAT&&(Z=i.RG16F),U===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RG8UI),U===i.UNSIGNED_SHORT&&(Z=i.RG16UI),U===i.UNSIGNED_INT&&(Z=i.RG32UI),U===i.BYTE&&(Z=i.RG8I),U===i.SHORT&&(Z=i.RG16I),U===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),U===i.UNSIGNED_INT&&(Z=i.RGB32UI),U===i.BYTE&&(Z=i.RGB8I),U===i.SHORT&&(Z=i.RGB16I),U===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),U===i.UNSIGNED_INT&&(Z=i.RGBA32UI),U===i.BYTE&&(Z=i.RGBA8I),U===i.SHORT&&(Z=i.RGBA16I),U===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){const yt=$?Hr:oe.getTransfer(B);U===i.FLOAT&&(Z=i.RGBA32F),U===i.HALF_FLOAT&&(Z=i.RGBA16F),U===i.UNSIGNED_BYTE&&(Z=yt===_e?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(T,S){let U;return T?S===null||S===wi||S===as?U=i.DEPTH24_STENCIL8:S===Pn?U=i.DEPTH32F_STENCIL8:S===Os&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===wi||S===as?U=i.DEPTH_COMPONENT24:S===Pn?U=i.DEPTH_COMPONENT32F:S===Os&&(U=i.DEPTH_COMPONENT16),U}function b(T,S){return u(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ue&&T.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?S.mipmaps.length:1}function I(T){const S=T.target;S.removeEventListener("dispose",I),w(S),S.isVideoTexture&&l.delete(S)}function A(T){const S=T.target;S.removeEventListener("dispose",A),Y(S)}function w(T){const S=n.get(T);if(S.__webglInit===void 0)return;const U=T.source,B=d.get(U);if(B){const $=B[S.__cacheKey];$.usedTimes--,$.usedTimes===0&&L(T),Object.keys(B).length===0&&d.delete(U)}n.remove(T)}function L(T){const S=n.get(T);i.deleteTexture(S.__webglTexture);const U=T.source,B=d.get(U);delete B[S.__cacheKey],a.memory.textures--}function Y(T){const S=n.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let B=0;B<6;B++){if(Array.isArray(S.__webglFramebuffer[B]))for(let $=0;$<S.__webglFramebuffer[B].length;$++)i.deleteFramebuffer(S.__webglFramebuffer[B][$]);else i.deleteFramebuffer(S.__webglFramebuffer[B]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[B])}else{if(Array.isArray(S.__webglFramebuffer))for(let B=0;B<S.__webglFramebuffer.length;B++)i.deleteFramebuffer(S.__webglFramebuffer[B]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let B=0;B<S.__webglColorRenderbuffer.length;B++)S.__webglColorRenderbuffer[B]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[B]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const U=T.textures;for(let B=0,$=U.length;B<$;B++){const Z=n.get(U[B]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(U[B])}n.remove(T)}let x=0;function M(){x=0}function V(){const T=x;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),x+=1,T}function H(T){const S=[];return S.push(T.wrapS),S.push(T.wrapT),S.push(T.wrapR||0),S.push(T.magFilter),S.push(T.minFilter),S.push(T.anisotropy),S.push(T.internalFormat),S.push(T.format),S.push(T.type),S.push(T.generateMipmaps),S.push(T.premultiplyAlpha),S.push(T.flipY),S.push(T.unpackAlignment),S.push(T.colorSpace),S.join()}function W(T,S){const U=n.get(T);if(T.isVideoTexture&&mt(T),T.isRenderTargetTexture===!1&&T.version>0&&U.__version!==T.version){const B=T.image;if(B===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(B.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{xt(U,T,S);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+S)}function Q(T,S){const U=n.get(T);if(T.version>0&&U.__version!==T.version){xt(U,T,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+S)}function D(T,S){const U=n.get(T);if(T.version>0&&U.__version!==T.version){xt(U,T,S);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+S)}function G(T,S){const U=n.get(T);if(T.version>0&&U.__version!==T.version){tt(U,T,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+S)}const q={[Vr]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[oo]:i.MIRRORED_REPEAT},at={[Ue]:i.NEAREST,[nf]:i.NEAREST_MIPMAP_NEAREST,[js]:i.NEAREST_MIPMAP_LINEAR,[bn]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},ct={[af]:i.NEVER,[ff]:i.ALWAYS,[of]:i.LESS,[Rh]:i.LEQUAL,[lf]:i.EQUAL,[uf]:i.GEQUAL,[cf]:i.GREATER,[hf]:i.NOTEQUAL};function vt(T,S){if(S.type===Pn&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===oa||S.magFilter===js||S.magFilter===xi||S.minFilter===bn||S.minFilter===oa||S.minFilter===js||S.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,q[S.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,at[S.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,at[S.minFilter]),S.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,ct[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Ue||S.minFilter!==js&&S.minFilter!==xi||S.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Zt(T,S){let U=!1;T.__webglInit===void 0&&(T.__webglInit=!0,S.addEventListener("dispose",I));const B=S.source;let $=d.get(B);$===void 0&&($={},d.set(B,$));const Z=H(S);if(Z!==T.__cacheKey){$[Z]===void 0&&($[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),$[Z].usedTimes++;const yt=$[T.__cacheKey];yt!==void 0&&($[T.__cacheKey].usedTimes--,yt.usedTimes===0&&L(S)),T.__cacheKey=Z,T.__webglTexture=$[Z].texture}return U}function xt(T,S,U){let B=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(B=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(B=i.TEXTURE_3D);const $=Zt(T,S),Z=S.source;e.bindTexture(B,T.__webglTexture,i.TEXTURE0+U);const yt=n.get(Z);if(Z.version!==yt.__version||$===!0){e.activeTexture(i.TEXTURE0+U);const ft=oe.getPrimaries(oe.workingColorSpace),St=S.colorSpace===Jn?null:oe.getPrimaries(S.colorSpace),Qt=S.colorSpace===Jn||ft===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let ht=v(S.image,!1,s.maxTextureSize);ht=Ut(S,ht);const At=r.convert(S.format,S.colorSpace),qt=r.convert(S.type);let $t=_(S.internalFormat,At,qt,S.colorSpace,S.isVideoTexture);vt(B,S);let Pt;const te=S.mipmaps,Yt=S.isVideoTexture!==!0,ve=yt.__version===void 0||$===!0,N=Z.dataReady,wt=b(S,ht);if(S.isDepthTexture)$t=y(S.format===os,S.type),ve&&(Yt?e.texStorage2D(i.TEXTURE_2D,1,$t,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,$t,ht.width,ht.height,0,At,qt,null));else if(S.isDataTexture)if(te.length>0){Yt&&ve&&e.texStorage2D(i.TEXTURE_2D,wt,$t,te[0].width,te[0].height);for(let J=0,st=te.length;J<st;J++)Pt=te[J],Yt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Pt.width,Pt.height,At,qt,Pt.data):e.texImage2D(i.TEXTURE_2D,J,$t,Pt.width,Pt.height,0,At,qt,Pt.data);S.generateMipmaps=!1}else Yt?(ve&&e.texStorage2D(i.TEXTURE_2D,wt,$t,ht.width,ht.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,At,qt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,$t,ht.width,ht.height,0,At,qt,ht.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Yt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,$t,te[0].width,te[0].height,ht.depth);for(let J=0,st=te.length;J<st;J++)if(Pt=te[J],S.format!==Mn)if(At!==null)if(Yt){if(N)if(S.layerUpdates.size>0){const bt=wc(Pt.width,Pt.height,S.format,S.type);for(const Tt of S.layerUpdates){const ne=Pt.data.subarray(Tt*bt/Pt.data.BYTES_PER_ELEMENT,(Tt+1)*bt/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Tt,Pt.width,Pt.height,1,At,ne,0,0)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,ht.depth,At,Pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,$t,Pt.width,Pt.height,ht.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Yt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Pt.width,Pt.height,ht.depth,At,qt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,$t,Pt.width,Pt.height,ht.depth,0,At,qt,Pt.data)}else{Yt&&ve&&e.texStorage2D(i.TEXTURE_2D,wt,$t,te[0].width,te[0].height);for(let J=0,st=te.length;J<st;J++)Pt=te[J],S.format!==Mn?At!==null?Yt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Pt.width,Pt.height,At,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,$t,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Yt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Pt.width,Pt.height,At,qt,Pt.data):e.texImage2D(i.TEXTURE_2D,J,$t,Pt.width,Pt.height,0,At,qt,Pt.data)}else if(S.isDataArrayTexture)if(Yt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,$t,ht.width,ht.height,ht.depth),N)if(S.layerUpdates.size>0){const J=wc(ht.width,ht.height,S.format,S.type);for(const st of S.layerUpdates){const bt=ht.data.subarray(st*J/ht.data.BYTES_PER_ELEMENT,(st+1)*J/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,st,ht.width,ht.height,1,At,qt,bt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,At,qt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$t,ht.width,ht.height,ht.depth,0,At,qt,ht.data);else if(S.isData3DTexture)Yt?(ve&&e.texStorage3D(i.TEXTURE_3D,wt,$t,ht.width,ht.height,ht.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,At,qt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,$t,ht.width,ht.height,ht.depth,0,At,qt,ht.data);else if(S.isFramebufferTexture){if(ve)if(Yt)e.texStorage2D(i.TEXTURE_2D,wt,$t,ht.width,ht.height);else{let J=ht.width,st=ht.height;for(let bt=0;bt<wt;bt++)e.texImage2D(i.TEXTURE_2D,bt,$t,J,st,0,At,qt,null),J>>=1,st>>=1}}else if(te.length>0){if(Yt&&ve){const J=k(te[0]);e.texStorage2D(i.TEXTURE_2D,wt,$t,J.width,J.height)}for(let J=0,st=te.length;J<st;J++)Pt=te[J],Yt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,At,qt,Pt):e.texImage2D(i.TEXTURE_2D,J,$t,At,qt,Pt);S.generateMipmaps=!1}else if(Yt){if(ve){const J=k(ht);e.texStorage2D(i.TEXTURE_2D,wt,$t,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,At,qt,ht)}else e.texImage2D(i.TEXTURE_2D,0,$t,At,qt,ht);u(S)&&p(B),yt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function tt(T,S,U){if(S.image.length!==6)return;const B=Zt(T,S),$=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+U);const Z=n.get($);if($.version!==Z.__version||B===!0){e.activeTexture(i.TEXTURE0+U);const yt=oe.getPrimaries(oe.workingColorSpace),ft=S.colorSpace===Jn?null:oe.getPrimaries(S.colorSpace),St=S.colorSpace===Jn||yt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Qt=S.isCompressedTexture||S.image[0].isCompressedTexture,ht=S.image[0]&&S.image[0].isDataTexture,At=[];for(let st=0;st<6;st++)!Qt&&!ht?At[st]=v(S.image[st],!0,s.maxCubemapSize):At[st]=ht?S.image[st].image:S.image[st],At[st]=Ut(S,At[st]);const qt=At[0],$t=r.convert(S.format,S.colorSpace),Pt=r.convert(S.type),te=_(S.internalFormat,$t,Pt,S.colorSpace),Yt=S.isVideoTexture!==!0,ve=Z.__version===void 0||B===!0,N=$.dataReady;let wt=b(S,qt);vt(i.TEXTURE_CUBE_MAP,S);let J;if(Qt){Yt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,te,qt.width,qt.height);for(let st=0;st<6;st++){J=At[st].mipmaps;for(let bt=0;bt<J.length;bt++){const Tt=J[bt];S.format!==Mn?$t!==null?Yt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,0,0,Tt.width,Tt.height,$t,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,te,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,0,0,Tt.width,Tt.height,$t,Pt,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt,te,Tt.width,Tt.height,0,$t,Pt,Tt.data)}}}else{if(J=S.mipmaps,Yt&&ve){J.length>0&&wt++;const st=k(At[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,te,st.width,st.height)}for(let st=0;st<6;st++)if(ht){Yt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,At[st].width,At[st].height,$t,Pt,At[st].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,At[st].width,At[st].height,0,$t,Pt,At[st].data);for(let bt=0;bt<J.length;bt++){const ne=J[bt].image[st].image;Yt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,0,0,ne.width,ne.height,$t,Pt,ne.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,te,ne.width,ne.height,0,$t,Pt,ne.data)}}else{Yt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,$t,Pt,At[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,te,$t,Pt,At[st]);for(let bt=0;bt<J.length;bt++){const Tt=J[bt];Yt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,0,0,$t,Pt,Tt.image[st]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+st,bt+1,te,$t,Pt,Tt.image[st])}}}u(S)&&p(i.TEXTURE_CUBE_MAP),Z.__version=$.version,S.onUpdate&&S.onUpdate(S)}T.__version=S.version}function nt(T,S,U,B,$,Z){const yt=r.convert(U.format,U.colorSpace),ft=r.convert(U.type),St=_(U.internalFormat,yt,ft,U.colorSpace);if(!n.get(S).__hasExternalTextures){const ht=Math.max(1,S.width>>Z),At=Math.max(1,S.height>>Z);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?e.texImage3D($,Z,St,ht,At,S.depth,0,yt,ft,null):e.texImage2D($,Z,St,ht,At,0,yt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),K(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,B,$,n.get(U).__webglTexture,0,ut(S)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,B,$,n.get(U).__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function _t(T,S,U){if(i.bindRenderbuffer(i.RENDERBUFFER,T),S.depthBuffer){const B=S.depthTexture,$=B&&B.isDepthTexture?B.type:null,Z=y(S.stencilBuffer,$),yt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=ut(S);K(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,S.width,S.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const B=S.textures;for(let $=0;$<B.length;$++){const Z=B[$],yt=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),St=_(Z.internalFormat,yt,ft,Z.colorSpace),Qt=ut(S);U&&K(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,St,S.width,S.height):K(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,St,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,St,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function z(T,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const B=n.get(S.depthTexture).__webglTexture,$=ut(S);if(S.depthTexture.format===ts)K(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,B,0);else if(S.depthTexture.format===os)K(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,B,0);else throw new Error("Unknown depthTexture format")}function et(T){const S=n.get(T),U=T.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==T.depthTexture){const B=T.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),B){const $=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,B.removeEventListener("dispose",$)};B.addEventListener("dispose",$),S.__depthDisposeCallback=$}S.__boundDepthTexture=B}if(T.depthTexture&&!S.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");z(S.__webglFramebuffer,T)}else if(U){S.__webglDepthbuffer=[];for(let B=0;B<6;B++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[B]),S.__webglDepthbuffer[B]===void 0)S.__webglDepthbuffer[B]=i.createRenderbuffer(),_t(S.__webglDepthbuffer[B],T,!1);else{const $=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[B];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),_t(S.__webglDepthbuffer,T,!1);else{const B=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,B,i.RENDERBUFFER,$)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(T,S,U){const B=n.get(T);S!==void 0&&nt(B.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&et(T)}function Gt(T){const S=T.texture,U=n.get(T),B=n.get(S);T.addEventListener("dispose",A);const $=T.textures,Z=T.isWebGLCubeRenderTarget===!0,yt=$.length>1;if(yt||(B.__webglTexture===void 0&&(B.__webglTexture=i.createTexture()),B.__version=S.version,a.memory.textures++),Z){U.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ft]=[];for(let St=0;St<S.mipmaps.length;St++)U.__webglFramebuffer[ft][St]=i.createFramebuffer()}else U.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ft=0;ft<S.mipmaps.length;ft++)U.__webglFramebuffer[ft]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(yt)for(let ft=0,St=$.length;ft<St;ft++){const Qt=n.get($[ft]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&K(T)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ft=0;ft<$.length;ft++){const St=$[ft];U.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[ft]);const Qt=r.convert(St.format,St.colorSpace),ht=r.convert(St.type),At=_(St.internalFormat,Qt,ht,St.colorSpace,T.isXRRenderTarget===!0),qt=ut(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,qt,At,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,U.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),_t(U.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture),vt(i.TEXTURE_CUBE_MAP,S);for(let ft=0;ft<6;ft++)if(S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)nt(U.__webglFramebuffer[ft][St],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,St);else nt(U.__webglFramebuffer[ft],T,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);u(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let ft=0,St=$.length;ft<St;ft++){const Qt=$[ft],ht=n.get(Qt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),vt(i.TEXTURE_2D,Qt),nt(U.__webglFramebuffer,T,Qt,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),u(Qt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ft=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,B.__webglTexture),vt(ft,S),S.mipmaps&&S.mipmaps.length>0)for(let St=0;St<S.mipmaps.length;St++)nt(U.__webglFramebuffer[St],T,S,i.COLOR_ATTACHMENT0,ft,St);else nt(U.__webglFramebuffer,T,S,i.COLOR_ATTACHMENT0,ft,0);u(S)&&p(ft),e.unbindTexture()}T.depthBuffer&&et(T)}function Xt(T){const S=T.textures;for(let U=0,B=S.length;U<B;U++){const $=S[U];if(u($)){const Z=T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,yt=n.get($).__webglTexture;e.bindTexture(Z,yt),p(Z),e.unbindTexture()}}}const it=[],C=[];function pt(T){if(T.samples>0){if(K(T)===!1){const S=T.textures,U=T.width,B=T.height;let $=i.COLOR_BUFFER_BIT;const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),ft=S.length>1;if(ft)for(let St=0;St<S.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let St=0;St<S.length;St++){if(T.resolveDepthBuffer&&(T.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Qt=n.get(S[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,U,B,0,0,U,B,$,i.NEAREST),c===!0&&(it.length=0,C.length=0,it.push(i.COLOR_ATTACHMENT0+St),T.depthBuffer&&T.resolveDepthBuffer===!1&&(it.push(Z),C.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,C)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let St=0;St<S.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,yt.__webglColorRenderbuffer[St]);const Qt=n.get(S[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const S=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(T){return Math.min(s.maxSamples,T.samples)}function K(T){const S=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function mt(T){const S=a.render.frame;l.get(T)!==S&&(l.set(T,S),T.update())}function Ut(T,S){const U=T.colorSpace,B=T.format,$=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||U!==ni&&U!==Jn&&(oe.getTransfer(U)===_e?(B!==Mn||$!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),S}function k(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(h.width=T.naturalWidth||T.width,h.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(h.width=T.displayWidth,h.height=T.displayHeight):(h.width=T.width,h.height=T.height),h}this.allocateTextureUnit=V,this.resetTextureUnits=M,this.setTexture2D=W,this.setTexture2DArray=Q,this.setTexture3D=D,this.setTextureCube=G,this.rebindTextures=Ot,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=et,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=K}function mg(i,t){function e(n,s=Jn){let r;const a=oe.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Qo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===tl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===xh)return i.BYTE;if(n===yh)return i.SHORT;if(n===Os)return i.UNSIGNED_SHORT;if(n===Jo)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Pn)return i.FLOAT;if(n===wn)return i.HALF_FLOAT;if(n===Mh)return i.ALPHA;if(n===Sh)return i.RGB;if(n===Mn)return i.RGBA;if(n===wh)return i.LUMINANCE;if(n===Th)return i.LUMINANCE_ALPHA;if(n===ts)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===el)return i.RED;if(n===nl)return i.RED_INTEGER;if(n===Eh)return i.RG;if(n===il)return i.RG_INTEGER;if(n===sl)return i.RGBA_INTEGER;if(n===Lr||n===Dr||n===Ir||n===Ur)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Dr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ur)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===lo||n===co||n===ho||n===uo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===lo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===co)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fo||n===po||n===mo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===fo||n===po)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===mo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===go||n===vo||n===_o||n===xo||n===yo||n===bo||n===Mo||n===So||n===wo||n===To||n===Eo||n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===go)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===vo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===_o)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===xo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===bo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Mo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===So)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===wo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===To)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Eo)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ao)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ro)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nr||n===Po||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Nr)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Po)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Do||n===Io||n===Uo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Nr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Do)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Io)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Uo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===as?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class gg extends nn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class le extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vg={type:"move"};class Fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new le,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new le,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new le,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const v of t.hand.values()){const u=e.getJointPose(v,n),p=this._getHandJoint(h,v);u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=u.radius),p.visible=u!==null}const l=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],d=l.position.distanceTo(f.position),m=.02,g=.005;h.inputState.pinching&&d>m+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=m-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vg)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new le;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const _g=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xg=`
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

}`;class yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new qe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new We({vertexShader:_g,fragmentShader:xg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new lt(new be(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bg extends ds{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,h=null,l=null,f=null,d=null,m=null,g=null;const v=new yg,u=e.getContextAttributes();let p=null,_=null;const y=[],b=[],I=new rt;let A=null;const w=new nn;w.layers.enable(1),w.viewport=new me;const L=new nn;L.layers.enable(2),L.viewport=new me;const Y=[w,L],x=new gg;x.layers.enable(1),x.layers.enable(2);let M=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let nt=y[tt];return nt===void 0&&(nt=new Fa,y[tt]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(tt){let nt=y[tt];return nt===void 0&&(nt=new Fa,y[tt]=nt),nt.getGripSpace()},this.getHand=function(tt){let nt=y[tt];return nt===void 0&&(nt=new Fa,y[tt]=nt),nt.getHandSpace()};function H(tt){const nt=b.indexOf(tt.inputSource);if(nt===-1)return;const _t=y[nt];_t!==void 0&&(_t.update(tt.inputSource,tt.frame,h||a),_t.dispatchEvent({type:tt.type,data:tt.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",Q);for(let tt=0;tt<y.length;tt++){const nt=b[tt];nt!==null&&(b[tt]=null,y[tt].disconnect(nt))}M=null,V=null,v.reset(),t.setRenderTarget(p),m=null,d=null,f=null,s=null,_=null,xt.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){o=tt,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(tt){h=tt},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",Q),u.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(I),s.renderState.layers===void 0){const nt={antialias:u.antialias,alpha:!0,depth:u.depth,stencil:u.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,nt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),_=new un(m.framebufferWidth,m.framebufferHeight,{format:Mn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:u.stencil})}else{let nt=null,_t=null,z=null;u.depth&&(z=u.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,nt=u.stencil?os:ts,_t=u.stencil?as:wi);const et={colorFormat:e.RGBA8,depthFormat:z,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new un(d.textureWidth,d.textureHeight,{format:Mn,type:Gn,depthTexture:new zh(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,nt),stencilBuffer:u.stencil,colorSpace:t.outputColorSpace,samples:u.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),h=null,a=await s.requestReferenceSpace(o),xt.setContext(s),xt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(tt){for(let nt=0;nt<tt.removed.length;nt++){const _t=tt.removed[nt],z=b.indexOf(_t);z>=0&&(b[z]=null,y[z].disconnect(_t))}for(let nt=0;nt<tt.added.length;nt++){const _t=tt.added[nt];let z=b.indexOf(_t);if(z===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=b.length){b.push(_t),z=Ot;break}else if(b[Ot]===null){b[Ot]=_t,z=Ot;break}if(z===-1)break}const et=y[z];et&&et.connect(_t)}}const D=new P,G=new P;function q(tt,nt,_t){D.setFromMatrixPosition(nt.matrixWorld),G.setFromMatrixPosition(_t.matrixWorld);const z=D.distanceTo(G),et=nt.projectionMatrix.elements,Ot=_t.projectionMatrix.elements,Gt=et[14]/(et[10]-1),Xt=et[14]/(et[10]+1),it=(et[9]+1)/et[5],C=(et[9]-1)/et[5],pt=(et[8]-1)/et[0],ut=(Ot[8]+1)/Ot[0],K=Gt*pt,mt=Gt*ut,Ut=z/(-pt+ut),k=Ut*-pt;if(nt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(k),tt.translateZ(Ut),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),et[10]===-1)tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const T=Gt+Ut,S=Xt+Ut,U=K-k,B=mt+(z-k),$=it*Xt/S*T,Z=C*Xt/S*T;tt.projectionMatrix.makePerspective(U,B,$,Z,T,S),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function at(tt,nt){nt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(nt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let nt=tt.near,_t=tt.far;v.texture!==null&&(v.depthNear>0&&(nt=v.depthNear),v.depthFar>0&&(_t=v.depthFar)),x.near=L.near=w.near=nt,x.far=L.far=w.far=_t,(M!==x.near||V!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,V=x.far);const z=tt.parent,et=x.cameras;at(x,z);for(let Ot=0;Ot<et.length;Ot++)at(et[Ot],z);et.length===2?q(x,w,L):x.projectionMatrix.copy(w.projectionMatrix),ct(tt,x,z)};function ct(tt,nt,_t){_t===null?tt.matrix.copy(nt.matrixWorld):(tt.matrix.copy(_t.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(nt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(nt.projectionMatrix),tt.projectionMatrixInverse.copy(nt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=$r*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(tt){c=tt,d!==null&&(d.fixedFoveation=tt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=tt)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let vt=null;function Zt(tt,nt){if(l=nt.getViewerPose(h||a),g=nt,l!==null){const _t=l.views;m!==null&&(t.setRenderTargetFramebuffer(_,m.framebuffer),t.setRenderTarget(_));let z=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,z=!0);for(let Ot=0;Ot<_t.length;Ot++){const Gt=_t[Ot];let Xt=null;if(m!==null)Xt=m.getViewport(Gt);else{const C=f.getViewSubImage(d,Gt);Xt=C.viewport,Ot===0&&(t.setRenderTargetTextures(_,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(_))}let it=Y[Ot];it===void 0&&(it=new nn,it.layers.enable(Ot),it.viewport=new me,Y[Ot]=it),it.matrix.fromArray(Gt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(Gt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),Ot===0&&(x.matrix.copy(it.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),z===!0&&x.cameras.push(it)}const et=s.enabledFeatures;if(et&&et.includes("depth-sensing")){const Ot=f.getDepthInformation(_t[0]);Ot&&Ot.isValid&&Ot.texture&&v.init(t,Ot,s.renderState)}}for(let _t=0;_t<y.length;_t++){const z=b[_t],et=y[_t];z!==null&&et!==void 0&&et.update(z,nt,h||a)}vt&&vt(tt,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),g=null}const xt=new Bh;xt.setAnimationLoop(Zt),this.setAnimationLoop=function(tt){vt=tt},this.dispose=function(){}}}const ui=new En,Mg=new se;function Sg(i,t){function e(u,p){u.matrixAutoUpdate===!0&&u.updateMatrix(),p.value.copy(u.matrix)}function n(u,p){p.color.getRGB(u.fogColor.value,kh(i)),p.isFog?(u.fogNear.value=p.near,u.fogFar.value=p.far):p.isFogExp2&&(u.fogDensity.value=p.density)}function s(u,p,_,y,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(u,p):p.isMeshToonMaterial?(r(u,p),f(u,p)):p.isMeshPhongMaterial?(r(u,p),l(u,p)):p.isMeshStandardMaterial?(r(u,p),d(u,p),p.isMeshPhysicalMaterial&&m(u,p,b)):p.isMeshMatcapMaterial?(r(u,p),g(u,p)):p.isMeshDepthMaterial?r(u,p):p.isMeshDistanceMaterial?(r(u,p),v(u,p)):p.isMeshNormalMaterial?r(u,p):p.isLineBasicMaterial?(a(u,p),p.isLineDashedMaterial&&o(u,p)):p.isPointsMaterial?c(u,p,_,y):p.isSpriteMaterial?h(u,p):p.isShadowMaterial?(u.color.value.copy(p.color),u.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(u,p){u.opacity.value=p.opacity,p.color&&u.diffuse.value.copy(p.color),p.emissive&&u.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(u.map.value=p.map,e(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,e(p.alphaMap,u.alphaMapTransform)),p.bumpMap&&(u.bumpMap.value=p.bumpMap,e(p.bumpMap,u.bumpMapTransform),u.bumpScale.value=p.bumpScale,p.side===sn&&(u.bumpScale.value*=-1)),p.normalMap&&(u.normalMap.value=p.normalMap,e(p.normalMap,u.normalMapTransform),u.normalScale.value.copy(p.normalScale),p.side===sn&&u.normalScale.value.negate()),p.displacementMap&&(u.displacementMap.value=p.displacementMap,e(p.displacementMap,u.displacementMapTransform),u.displacementScale.value=p.displacementScale,u.displacementBias.value=p.displacementBias),p.emissiveMap&&(u.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,u.emissiveMapTransform)),p.specularMap&&(u.specularMap.value=p.specularMap,e(p.specularMap,u.specularMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,b=_.envMapRotation;y&&(u.envMap.value=y,ui.copy(b),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),u.envMapRotation.value.setFromMatrix4(Mg.makeRotationFromEuler(ui)),u.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.reflectivity.value=p.reflectivity,u.ior.value=p.ior,u.refractionRatio.value=p.refractionRatio),p.lightMap&&(u.lightMap.value=p.lightMap,u.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,u.lightMapTransform)),p.aoMap&&(u.aoMap.value=p.aoMap,u.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,u.aoMapTransform))}function a(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,p.map&&(u.map.value=p.map,e(p.map,u.mapTransform))}function o(u,p){u.dashSize.value=p.dashSize,u.totalSize.value=p.dashSize+p.gapSize,u.scale.value=p.scale}function c(u,p,_,y){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.size.value=p.size*_,u.scale.value=y*.5,p.map&&(u.map.value=p.map,e(p.map,u.uvTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,e(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function h(u,p){u.diffuse.value.copy(p.color),u.opacity.value=p.opacity,u.rotation.value=p.rotation,p.map&&(u.map.value=p.map,e(p.map,u.mapTransform)),p.alphaMap&&(u.alphaMap.value=p.alphaMap,e(p.alphaMap,u.alphaMapTransform)),p.alphaTest>0&&(u.alphaTest.value=p.alphaTest)}function l(u,p){u.specular.value.copy(p.specular),u.shininess.value=Math.max(p.shininess,1e-4)}function f(u,p){p.gradientMap&&(u.gradientMap.value=p.gradientMap)}function d(u,p){u.metalness.value=p.metalness,p.metalnessMap&&(u.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,u.metalnessMapTransform)),u.roughness.value=p.roughness,p.roughnessMap&&(u.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,u.roughnessMapTransform)),p.envMap&&(u.envMapIntensity.value=p.envMapIntensity)}function m(u,p,_){u.ior.value=p.ior,p.sheen>0&&(u.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),u.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(u.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,u.sheenColorMapTransform)),p.sheenRoughnessMap&&(u.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,u.sheenRoughnessMapTransform))),p.clearcoat>0&&(u.clearcoat.value=p.clearcoat,u.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(u.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,u.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(u.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,u.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(u.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,u.clearcoatNormalMapTransform),u.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&u.clearcoatNormalScale.value.negate())),p.dispersion>0&&(u.dispersion.value=p.dispersion),p.iridescence>0&&(u.iridescence.value=p.iridescence,u.iridescenceIOR.value=p.iridescenceIOR,u.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],u.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(u.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,u.iridescenceMapTransform)),p.iridescenceThicknessMap&&(u.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,u.iridescenceThicknessMapTransform))),p.transmission>0&&(u.transmission.value=p.transmission,u.transmissionSamplerMap.value=_.texture,u.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(u.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,u.transmissionMapTransform)),u.thickness.value=p.thickness,p.thicknessMap&&(u.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,u.thicknessMapTransform)),u.attenuationDistance.value=p.attenuationDistance,u.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(u.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(u.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,u.anisotropyMapTransform))),u.specularIntensity.value=p.specularIntensity,u.specularColor.value.copy(p.specularColor),p.specularColorMap&&(u.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,u.specularColorMapTransform)),p.specularIntensityMap&&(u.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,u.specularIntensityMapTransform))}function g(u,p){p.matcap&&(u.matcap.value=p.matcap)}function v(u,p){const _=t.get(p).light;u.referencePosition.value.setFromMatrixPosition(_.matrixWorld),u.nearDistance.value=_.shadow.camera.near,u.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const b=y.program;n.uniformBlockBinding(_,b)}function h(_,y){let b=s[_.id];b===void 0&&(g(_),b=l(_),s[_.id]=b,_.addEventListener("dispose",u));const I=y.program;n.updateUBOMapping(_,I);const A=t.render.frame;r[_.id]!==A&&(d(_),r[_.id]=A)}function l(_){const y=f();_.__bindingPointIndex=y;const b=i.createBuffer(),I=_.__size,A=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,b),b}function f(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=s[_.id],b=_.uniforms,I=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=b.length;A<w;A++){const L=Array.isArray(b[A])?b[A]:[b[A]];for(let Y=0,x=L.length;Y<x;Y++){const M=L[Y];if(m(M,A,Y,I)===!0){const V=M.__offset,H=Array.isArray(M.value)?M.value:[M.value];let W=0;for(let Q=0;Q<H.length;Q++){const D=H[Q],G=v(D);typeof D=="number"||typeof D=="boolean"?(M.__data[0]=D,i.bufferSubData(i.UNIFORM_BUFFER,V+W,M.__data)):D.isMatrix3?(M.__data[0]=D.elements[0],M.__data[1]=D.elements[1],M.__data[2]=D.elements[2],M.__data[3]=0,M.__data[4]=D.elements[3],M.__data[5]=D.elements[4],M.__data[6]=D.elements[5],M.__data[7]=0,M.__data[8]=D.elements[6],M.__data[9]=D.elements[7],M.__data[10]=D.elements[8],M.__data[11]=0):(D.toArray(M.__data,W),W+=G.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(_,y,b,I){const A=_.value,w=y+"_"+b;if(I[w]===void 0)return typeof A=="number"||typeof A=="boolean"?I[w]=A:I[w]=A.clone(),!0;{const L=I[w];if(typeof A=="number"||typeof A=="boolean"){if(L!==A)return I[w]=A,!0}else if(L.equals(A)===!1)return L.copy(A),!0}return!1}function g(_){const y=_.uniforms;let b=0;const I=16;for(let w=0,L=y.length;w<L;w++){const Y=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,M=Y.length;x<M;x++){const V=Y[x],H=Array.isArray(V.value)?V.value:[V.value];for(let W=0,Q=H.length;W<Q;W++){const D=H[W],G=v(D),q=b%I,at=q%G.boundary,ct=q+at;b+=at,ct!==0&&I-ct<G.storage&&(b+=I-ct),V.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=G.storage}}}const A=b%I;return A>0&&(b+=I-A),_.__size=b,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function u(_){const y=_.target;y.removeEventListener("dispose",u);const b=a.indexOf(y.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:c,update:h,dispose:p}}class Tg{constructor(t={}){const{canvas:e=pf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:h=!1,powerPreference:l="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,u=null;const p=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=hn,this.toneMapping=ti,this.toneMappingExposure=1;const y=this;let b=!1,I=0,A=0,w=null,L=-1,Y=null;const x=new me,M=new me;let V=null;const H=new Ft(0);let W=0,Q=e.width,D=e.height,G=1,q=null,at=null;const ct=new me(0,0,Q,D),vt=new me(0,0,Q,D);let Zt=!1;const xt=new cl;let tt=!1,nt=!1;const _t=new se,z=new se,et=new P,Ot=new me,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function it(){return w===null?G:1}let C=n;function pt(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:h,powerPreference:l,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Yo}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",bt,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),C===null){const F="webgl2";if(C=pt(F,E),C===null)throw pt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ut,K,mt,Ut,k,T,S,U,B,$,Z,yt,ft,St,Qt,ht,At,qt,$t,Pt,te,Yt,ve,N;function wt(){ut=new L0(C),ut.init(),Yt=new mg(C,ut),K=new T0(C,ut,t,Yt),mt=new fg(C),K.reverseDepthBuffer&&mt.buffers.depth.setReversed(!0),Ut=new U0(C),k=new Jm,T=new pg(C,ut,mt,k,K,Yt,Ut),S=new A0(y),U=new P0(y),B=new Vf(C),ve=new S0(C,B),$=new D0(C,B,Ut,ve),Z=new k0(C,$,B,Ut),$t=new N0(C,K,T),ht=new E0(k),yt=new Zm(y,S,U,ut,K,ve,ht),ft=new Sg(y,k),St=new tg,Qt=new ag(ut),qt=new M0(y,S,U,mt,Z,d,c),At=new hg(y,Z,K),N=new wg(C,Ut,K,mt),Pt=new w0(C,ut,Ut),te=new I0(C,ut,Ut),Ut.programs=yt.programs,y.capabilities=K,y.extensions=ut,y.properties=k,y.renderLists=St,y.shadowMap=At,y.state=mt,y.info=Ut}wt();const J=new bg(y,C);this.xr=J,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const E=ut.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ut.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(E){E!==void 0&&(G=E,this.setSize(Q,D,!1))},this.getSize=function(E){return E.set(Q,D)},this.setSize=function(E,F,X=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=E,D=F,e.width=Math.floor(E*G),e.height=Math.floor(F*G),X===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(Q*G,D*G).floor()},this.setDrawingBufferSize=function(E,F,X){Q=E,D=F,G=X,e.width=Math.floor(E*X),e.height=Math.floor(F*X),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(ct)},this.setViewport=function(E,F,X,j){E.isVector4?ct.set(E.x,E.y,E.z,E.w):ct.set(E,F,X,j),mt.viewport(x.copy(ct).multiplyScalar(G).round())},this.getScissor=function(E){return E.copy(vt)},this.setScissor=function(E,F,X,j){E.isVector4?vt.set(E.x,E.y,E.z,E.w):vt.set(E,F,X,j),mt.scissor(M.copy(vt).multiplyScalar(G).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(E){mt.setScissorTest(Zt=E)},this.setOpaqueSort=function(E){q=E},this.setTransparentSort=function(E){at=E},this.getClearColor=function(E){return E.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(E=!0,F=!0,X=!0){let j=0;if(E){let O=!1;if(w!==null){const dt=w.texture.format;O=dt===sl||dt===il||dt===nl}if(O){const dt=w.texture.type,Mt=dt===Gn||dt===wi||dt===Os||dt===as||dt===Qo||dt===tl,Lt=qt.getClearColor(),It=qt.getClearAlpha(),zt=Lt.r,Wt=Lt.g,Nt=Lt.b;Mt?(m[0]=zt,m[1]=Wt,m[2]=Nt,m[3]=It,C.clearBufferuiv(C.COLOR,0,m)):(g[0]=zt,g[1]=Wt,g[2]=Nt,g[3]=It,C.clearBufferiv(C.COLOR,0,g))}else j|=C.COLOR_BUFFER_BIT}F&&(j|=C.DEPTH_BUFFER_BIT,C.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(j|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",bt,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),St.dispose(),Qt.dispose(),k.dispose(),S.dispose(),U.dispose(),Z.dispose(),ve.dispose(),N.dispose(),yt.dispose(),J.dispose(),J.removeEventListener("sessionstart",wl),J.removeEventListener("sessionend",Tl),ri.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function bt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Ut.autoReset,F=At.enabled,X=At.autoUpdate,j=At.needsUpdate,O=At.type;wt(),Ut.autoReset=E,At.enabled=F,At.autoUpdate=X,At.needsUpdate=j,At.type=O}function Tt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ne(E){const F=E.target;F.removeEventListener("dispose",ne),Pe(F)}function Pe(E){tn(E),k.remove(E)}function tn(E){const F=k.get(E).programs;F!==void 0&&(F.forEach(function(X){yt.releaseProgram(X)}),E.isShaderMaterial&&yt.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,X,j,O,dt){F===null&&(F=Gt);const Mt=O.isMesh&&O.matrixWorld.determinant()<0,Lt=Eu(E,F,X,j,O);mt.setMaterial(j,Mt);let It=X.index,zt=1;if(j.wireframe===!0){if(It=$.getWireframeAttribute(X),It===void 0)return;zt=2}const Wt=X.drawRange,Nt=X.attributes.position;let ue=Wt.start*zt,xe=(Wt.start+Wt.count)*zt;dt!==null&&(ue=Math.max(ue,dt.start*zt),xe=Math.min(xe,(dt.start+dt.count)*zt)),It!==null?(ue=Math.max(ue,0),xe=Math.min(xe,It.count)):Nt!=null&&(ue=Math.max(ue,0),xe=Math.min(xe,Nt.count));const Te=xe-ue;if(Te<0||Te===1/0)return;ve.setup(O,j,Lt,X,It);let rn,ce=Pt;if(It!==null&&(rn=B.get(It),ce=te,ce.setIndex(rn)),O.isMesh)j.wireframe===!0?(mt.setLineWidth(j.wireframeLinewidth*it()),ce.setMode(C.LINES)):ce.setMode(C.TRIANGLES);else if(O.isLine){let kt=j.linewidth;kt===void 0&&(kt=1),mt.setLineWidth(kt*it()),O.isLineSegments?ce.setMode(C.LINES):O.isLineLoop?ce.setMode(C.LINE_LOOP):ce.setMode(C.LINE_STRIP)}else O.isPoints?ce.setMode(C.POINTS):O.isSprite&&ce.setMode(C.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)ce.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))ce.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const kt=O._multiDrawStarts,Ve=O._multiDrawCounts,he=O._multiDrawCount,vn=It?B.get(It).bytesPerElement:1,Ai=k.get(j).currentProgram.getUniforms();for(let an=0;an<he;an++)Ai.setValue(C,"_gl_DrawID",an),ce.render(kt[an]/vn,Ve[an])}else if(O.isInstancedMesh)ce.renderInstances(ue,Te,O.count);else if(X.isInstancedBufferGeometry){const kt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ve=Math.min(X.instanceCount,kt);ce.renderInstances(ue,Te,Ve)}else ce.render(ue,Te)};function ae(E,F,X){E.transparent===!0&&E.side===Ie&&E.forceSinglePass===!1?(E.side=sn,E.needsUpdate=!0,Ys(E,F,X),E.side=ei,E.needsUpdate=!0,Ys(E,F,X),E.side=Ie):Ys(E,F,X)}this.compile=function(E,F,X=null){X===null&&(X=E),u=Qt.get(X),u.init(F),_.push(u),X.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),E!==X&&E.traverseVisible(function(O){O.isLight&&O.layers.test(F.layers)&&(u.pushLight(O),O.castShadow&&u.pushShadow(O))}),u.setupLights();const j=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const dt=O.material;if(dt)if(Array.isArray(dt))for(let Mt=0;Mt<dt.length;Mt++){const Lt=dt[Mt];ae(Lt,X,O),j.add(Lt)}else ae(dt,X,O),j.add(dt)}),_.pop(),u=null,j},this.compileAsync=function(E,F,X=null){const j=this.compile(E,F,X);return new Promise(O=>{function dt(){if(j.forEach(function(Mt){k.get(Mt).currentProgram.isReady()&&j.delete(Mt)}),j.size===0){O(E);return}setTimeout(dt,10)}ut.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let en=null;function In(E){en&&en(E)}function wl(){ri.stop()}function Tl(){ri.start()}const ri=new Bh;ri.setAnimationLoop(In),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){en=E,J.setAnimationLoop(E),E===null?ri.stop():ri.start()},J.addEventListener("sessionstart",wl),J.addEventListener("sessionend",Tl),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(F),F=J.getCamera()),E.isScene===!0&&E.onBeforeRender(y,E,F,w),u=Qt.get(E,_.length),u.init(F),_.push(u),z.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),xt.setFromProjectionMatrix(z),nt=this.localClippingEnabled,tt=ht.init(this.clippingPlanes,nt),v=St.get(E,p.length),v.init(),p.push(v),J.enabled===!0&&J.isPresenting===!0){const dt=y.xr.getDepthSensingMesh();dt!==null&&ia(dt,F,-1/0,y.sortObjects)}ia(E,F,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(q,at),Xt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,Xt&&qt.addToRenderList(v,E),this.info.render.frame++,tt===!0&&ht.beginShadows();const X=u.state.shadowsArray;At.render(X,E,F),tt===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const j=v.opaque,O=v.transmissive;if(u.setupLights(),F.isArrayCamera){const dt=F.cameras;if(O.length>0)for(let Mt=0,Lt=dt.length;Mt<Lt;Mt++){const It=dt[Mt];Al(j,O,E,It)}Xt&&qt.render(E);for(let Mt=0,Lt=dt.length;Mt<Lt;Mt++){const It=dt[Mt];El(v,E,It,It.viewport)}}else O.length>0&&Al(j,O,E,F),Xt&&qt.render(E),El(v,E,F);w!==null&&(T.updateMultisampleRenderTarget(w),T.updateRenderTargetMipmap(w)),E.isScene===!0&&E.onAfterRender(y,E,F),ve.resetDefaultState(),L=-1,Y=null,_.pop(),_.length>0?(u=_[_.length-1],tt===!0&&ht.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function ia(E,F,X,j){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)u.pushLight(E),E.castShadow&&u.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||xt.intersectsSprite(E)){j&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(z);const Mt=Z.update(E),Lt=E.material;Lt.visible&&v.push(E,Mt,Lt,X,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||xt.intersectsObject(E))){const Mt=Z.update(E),Lt=E.material;if(j&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),Ot.copy(Mt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(z)),Array.isArray(Lt)){const It=Mt.groups;for(let zt=0,Wt=It.length;zt<Wt;zt++){const Nt=It[zt],ue=Lt[Nt.materialIndex];ue&&ue.visible&&v.push(E,Mt,ue,X,Ot.z,Nt)}}else Lt.visible&&v.push(E,Mt,Lt,X,Ot.z,null)}}const dt=E.children;for(let Mt=0,Lt=dt.length;Mt<Lt;Mt++)ia(dt[Mt],F,X,j)}function El(E,F,X,j){const O=E.opaque,dt=E.transmissive,Mt=E.transparent;u.setupLightsView(X),tt===!0&&ht.setGlobalState(y.clippingPlanes,X),j&&mt.viewport(x.copy(j)),O.length>0&&Xs(O,F,X),dt.length>0&&Xs(dt,F,X),Mt.length>0&&Xs(Mt,F,X),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Al(E,F,X,j){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[j.id]===void 0&&(u.state.transmissionRenderTarget[j.id]=new un(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?wn:Gn,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const dt=u.state.transmissionRenderTarget[j.id],Mt=j.viewport||x;dt.setSize(Mt.z,Mt.w);const Lt=y.getRenderTarget();y.setRenderTarget(dt),y.getClearColor(H),W=y.getClearAlpha(),W<1&&y.setClearColor(16777215,.5),y.clear(),Xt&&qt.render(X);const It=y.toneMapping;y.toneMapping=ti;const zt=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),u.setupLightsView(j),tt===!0&&ht.setGlobalState(y.clippingPlanes,j),Xs(E,X,j),T.updateMultisampleRenderTarget(dt),T.updateRenderTargetMipmap(dt),ut.has("WEBGL_multisampled_render_to_texture")===!1){let Wt=!1;for(let Nt=0,ue=F.length;Nt<ue;Nt++){const xe=F[Nt],Te=xe.object,rn=xe.geometry,ce=xe.material,kt=xe.group;if(ce.side===Ie&&Te.layers.test(j.layers)){const Ve=ce.side;ce.side=sn,ce.needsUpdate=!0,Cl(Te,X,j,rn,ce,kt),ce.side=Ve,ce.needsUpdate=!0,Wt=!0}}Wt===!0&&(T.updateMultisampleRenderTarget(dt),T.updateRenderTargetMipmap(dt))}y.setRenderTarget(Lt),y.setClearColor(H,W),zt!==void 0&&(j.viewport=zt),y.toneMapping=It}function Xs(E,F,X){const j=F.isScene===!0?F.overrideMaterial:null;for(let O=0,dt=E.length;O<dt;O++){const Mt=E[O],Lt=Mt.object,It=Mt.geometry,zt=j===null?Mt.material:j,Wt=Mt.group;Lt.layers.test(X.layers)&&Cl(Lt,F,X,It,zt,Wt)}}function Cl(E,F,X,j,O,dt){E.onBeforeRender(y,F,X,j,O,dt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(y,F,X,j,E,dt),O.transparent===!0&&O.side===Ie&&O.forceSinglePass===!1?(O.side=sn,O.needsUpdate=!0,y.renderBufferDirect(X,F,j,O,E,dt),O.side=ei,O.needsUpdate=!0,y.renderBufferDirect(X,F,j,O,E,dt),O.side=Ie):y.renderBufferDirect(X,F,j,O,E,dt),E.onAfterRender(y,F,X,j,O,dt)}function Ys(E,F,X){F.isScene!==!0&&(F=Gt);const j=k.get(E),O=u.state.lights,dt=u.state.shadowsArray,Mt=O.state.version,Lt=yt.getParameters(E,O.state,dt,F,X),It=yt.getProgramCacheKey(Lt);let zt=j.programs;j.environment=E.isMeshStandardMaterial?F.environment:null,j.fog=F.fog,j.envMap=(E.isMeshStandardMaterial?U:S).get(E.envMap||j.environment),j.envMapRotation=j.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,zt===void 0&&(E.addEventListener("dispose",ne),zt=new Map,j.programs=zt);let Wt=zt.get(It);if(Wt!==void 0){if(j.currentProgram===Wt&&j.lightsStateVersion===Mt)return Pl(E,Lt),Wt}else Lt.uniforms=yt.getUniforms(E),E.onBeforeCompile(Lt,y),Wt=yt.acquireProgram(Lt,It),zt.set(It,Wt),j.uniforms=Lt.uniforms;const Nt=j.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Nt.clippingPlanes=ht.uniform),Pl(E,Lt),j.needsLights=Cu(E),j.lightsStateVersion=Mt,j.needsLights&&(Nt.ambientLightColor.value=O.state.ambient,Nt.lightProbe.value=O.state.probe,Nt.directionalLights.value=O.state.directional,Nt.directionalLightShadows.value=O.state.directionalShadow,Nt.spotLights.value=O.state.spot,Nt.spotLightShadows.value=O.state.spotShadow,Nt.rectAreaLights.value=O.state.rectArea,Nt.ltc_1.value=O.state.rectAreaLTC1,Nt.ltc_2.value=O.state.rectAreaLTC2,Nt.pointLights.value=O.state.point,Nt.pointLightShadows.value=O.state.pointShadow,Nt.hemisphereLights.value=O.state.hemi,Nt.directionalShadowMap.value=O.state.directionalShadowMap,Nt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Nt.spotShadowMap.value=O.state.spotShadowMap,Nt.spotLightMatrix.value=O.state.spotLightMatrix,Nt.spotLightMap.value=O.state.spotLightMap,Nt.pointShadowMap.value=O.state.pointShadowMap,Nt.pointShadowMatrix.value=O.state.pointShadowMatrix),j.currentProgram=Wt,j.uniformsList=null,Wt}function Rl(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=Fr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Pl(E,F){const X=k.get(E);X.outputColorSpace=F.outputColorSpace,X.batching=F.batching,X.batchingColor=F.batchingColor,X.instancing=F.instancing,X.instancingColor=F.instancingColor,X.instancingMorph=F.instancingMorph,X.skinning=F.skinning,X.morphTargets=F.morphTargets,X.morphNormals=F.morphNormals,X.morphColors=F.morphColors,X.morphTargetsCount=F.morphTargetsCount,X.numClippingPlanes=F.numClippingPlanes,X.numIntersection=F.numClipIntersection,X.vertexAlphas=F.vertexAlphas,X.vertexTangents=F.vertexTangents,X.toneMapping=F.toneMapping}function Eu(E,F,X,j,O){F.isScene!==!0&&(F=Gt),T.resetTextureUnits();const dt=F.fog,Mt=j.isMeshStandardMaterial?F.environment:null,Lt=w===null?y.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ni,It=(j.isMeshStandardMaterial?U:S).get(j.envMap||Mt),zt=j.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Wt=!!X.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Nt=!!X.morphAttributes.position,ue=!!X.morphAttributes.normal,xe=!!X.morphAttributes.color;let Te=ti;j.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Te=y.toneMapping);const rn=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ce=rn!==void 0?rn.length:0,kt=k.get(j),Ve=u.state.lights;if(tt===!0&&(nt===!0||E!==Y)){const pn=E===Y&&j.id===L;ht.setState(j,E,pn)}let he=!1;j.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Ve.state.version||kt.outputColorSpace!==Lt||O.isBatchedMesh&&kt.batching===!1||!O.isBatchedMesh&&kt.batching===!0||O.isBatchedMesh&&kt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&kt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&kt.instancing===!1||!O.isInstancedMesh&&kt.instancing===!0||O.isSkinnedMesh&&kt.skinning===!1||!O.isSkinnedMesh&&kt.skinning===!0||O.isInstancedMesh&&kt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&kt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&kt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&kt.instancingMorph===!1&&O.morphTexture!==null||kt.envMap!==It||j.fog===!0&&kt.fog!==dt||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ht.numPlanes||kt.numIntersection!==ht.numIntersection)||kt.vertexAlphas!==zt||kt.vertexTangents!==Wt||kt.morphTargets!==Nt||kt.morphNormals!==ue||kt.morphColors!==xe||kt.toneMapping!==Te||kt.morphTargetsCount!==ce)&&(he=!0):(he=!0,kt.__version=j.version);let vn=kt.currentProgram;he===!0&&(vn=Ys(j,F,O));let Ai=!1,an=!1,sa=!1;const Ae=vn.getUniforms(),Wn=kt.uniforms;if(mt.useProgram(vn.program)&&(Ai=!0,an=!0,sa=!0),j.id!==L&&(L=j.id,an=!0),Ai||Y!==E){K.reverseDepthBuffer?(_t.copy(E.projectionMatrix),gf(_t),vf(_t),Ae.setValue(C,"projectionMatrix",_t)):Ae.setValue(C,"projectionMatrix",E.projectionMatrix),Ae.setValue(C,"viewMatrix",E.matrixWorldInverse);const pn=Ae.map.cameraPosition;pn!==void 0&&pn.setValue(C,et.setFromMatrixPosition(E.matrixWorld)),K.logarithmicDepthBuffer&&Ae.setValue(C,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ae.setValue(C,"isOrthographic",E.isOrthographicCamera===!0),Y!==E&&(Y=E,an=!0,sa=!0)}if(O.isSkinnedMesh){Ae.setOptional(C,O,"bindMatrix"),Ae.setOptional(C,O,"bindMatrixInverse");const pn=O.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ae.setValue(C,"boneTexture",pn.boneTexture,T))}O.isBatchedMesh&&(Ae.setOptional(C,O,"batchingTexture"),Ae.setValue(C,"batchingTexture",O._matricesTexture,T),Ae.setOptional(C,O,"batchingIdTexture"),Ae.setValue(C,"batchingIdTexture",O._indirectTexture,T),Ae.setOptional(C,O,"batchingColorTexture"),O._colorsTexture!==null&&Ae.setValue(C,"batchingColorTexture",O._colorsTexture,T));const ra=X.morphAttributes;if((ra.position!==void 0||ra.normal!==void 0||ra.color!==void 0)&&$t.update(O,X,vn),(an||kt.receiveShadow!==O.receiveShadow)&&(kt.receiveShadow=O.receiveShadow,Ae.setValue(C,"receiveShadow",O.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Wn.envMap.value=It,Wn.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),j.isMeshStandardMaterial&&j.envMap===null&&F.environment!==null&&(Wn.envMapIntensity.value=F.environmentIntensity),an&&(Ae.setValue(C,"toneMappingExposure",y.toneMappingExposure),kt.needsLights&&Au(Wn,sa),dt&&j.fog===!0&&ft.refreshFogUniforms(Wn,dt),ft.refreshMaterialUniforms(Wn,j,G,D,u.state.transmissionRenderTarget[E.id]),Fr.upload(C,Rl(kt),Wn,T)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Fr.upload(C,Rl(kt),Wn,T),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ae.setValue(C,"center",O.center),Ae.setValue(C,"modelViewMatrix",O.modelViewMatrix),Ae.setValue(C,"normalMatrix",O.normalMatrix),Ae.setValue(C,"modelMatrix",O.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const pn=j.uniformsGroups;for(let aa=0,Ru=pn.length;aa<Ru;aa++){const Ll=pn[aa];N.update(Ll,vn),N.bind(Ll,vn)}}return vn}function Au(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Cu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(E,F,X){k.get(E.texture).__webglTexture=F,k.get(E.depthTexture).__webglTexture=X;const j=k.get(E);j.__hasExternalTextures=!0,j.__autoAllocateDepthBuffer=X===void 0,j.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const X=k.get(E);X.__webglFramebuffer=F,X.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,X=0){w=E,I=F,A=X;let j=!0,O=null,dt=!1,Mt=!1;if(E){const It=k.get(E);if(It.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(C.FRAMEBUFFER,null),j=!1;else if(It.__webglFramebuffer===void 0)T.setupRenderTarget(E);else if(It.__hasExternalTextures)T.rebindTextures(E,k.get(E.texture).__webglTexture,k.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Nt=E.depthTexture;if(It.__boundDepthTexture!==Nt){if(Nt!==null&&k.has(Nt)&&(E.width!==Nt.image.width||E.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(E)}}const zt=E.texture;(zt.isData3DTexture||zt.isDataArrayTexture||zt.isCompressedArrayTexture)&&(Mt=!0);const Wt=k.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Wt[F])?O=Wt[F][X]:O=Wt[F],dt=!0):E.samples>0&&T.useMultisampledRTT(E)===!1?O=k.get(E).__webglMultisampledFramebuffer:Array.isArray(Wt)?O=Wt[X]:O=Wt,x.copy(E.viewport),M.copy(E.scissor),V=E.scissorTest}else x.copy(ct).multiplyScalar(G).floor(),M.copy(vt).multiplyScalar(G).floor(),V=Zt;if(mt.bindFramebuffer(C.FRAMEBUFFER,O)&&j&&mt.drawBuffers(E,O),mt.viewport(x),mt.scissor(M),mt.setScissorTest(V),dt){const It=k.get(E.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,X)}else if(Mt){const It=k.get(E.texture),zt=F||0;C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,It.__webglTexture,X||0,zt)}L=-1},this.readRenderTargetPixels=function(E,F,X,j,O,dt,Mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){mt.bindFramebuffer(C.FRAMEBUFFER,Lt);try{const It=E.texture,zt=It.format,Wt=It.type;if(!K.textureFormatReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-j&&X>=0&&X<=E.height-O&&C.readPixels(F,X,j,O,Yt.convert(zt),Yt.convert(Wt),dt)}finally{const It=w!==null?k.get(w).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,F,X,j,O,dt,Mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=k.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Mt!==void 0&&(Lt=Lt[Mt]),Lt){const It=E.texture,zt=It.format,Wt=It.type;if(!K.textureFormatReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-j&&X>=0&&X<=E.height-O){mt.bindFramebuffer(C.FRAMEBUFFER,Lt);const Nt=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.bufferData(C.PIXEL_PACK_BUFFER,dt.byteLength,C.STREAM_READ),C.readPixels(F,X,j,O,Yt.convert(zt),Yt.convert(Wt),0);const ue=w!==null?k.get(w).__webglFramebuffer:null;mt.bindFramebuffer(C.FRAMEBUFFER,ue);const xe=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await mf(C,xe,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Nt),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,dt),C.deleteBuffer(Nt),C.deleteSync(xe),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,X=0){E.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const j=Math.pow(2,-X),O=Math.floor(E.image.width*j),dt=Math.floor(E.image.height*j),Mt=F!==null?F.x:0,Lt=F!==null?F.y:0;T.setTexture2D(E,0),C.copyTexSubImage2D(C.TEXTURE_2D,X,0,0,Mt,Lt,O,dt),mt.unbindTexture()},this.copyTextureToTexture=function(E,F,X=null,j=null,O=0){E.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),j=arguments[0]||null,E=arguments[1],F=arguments[2],O=arguments[3]||0,X=null);let dt,Mt,Lt,It,zt,Wt;X!==null?(dt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Lt=X.min.x,It=X.min.y):(dt=E.image.width,Mt=E.image.height,Lt=0,It=0),j!==null?(zt=j.x,Wt=j.y):(zt=0,Wt=0);const Nt=Yt.convert(F.format),ue=Yt.convert(F.type);T.setTexture2D(F,0),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const xe=C.getParameter(C.UNPACK_ROW_LENGTH),Te=C.getParameter(C.UNPACK_IMAGE_HEIGHT),rn=C.getParameter(C.UNPACK_SKIP_PIXELS),ce=C.getParameter(C.UNPACK_SKIP_ROWS),kt=C.getParameter(C.UNPACK_SKIP_IMAGES),Ve=E.isCompressedTexture?E.mipmaps[O]:E.image;C.pixelStorei(C.UNPACK_ROW_LENGTH,Ve.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ve.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,Lt),C.pixelStorei(C.UNPACK_SKIP_ROWS,It),E.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,O,zt,Wt,dt,Mt,Nt,ue,Ve.data):E.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,O,zt,Wt,Ve.width,Ve.height,Nt,Ve.data):C.texSubImage2D(C.TEXTURE_2D,O,zt,Wt,dt,Mt,Nt,ue,Ve),C.pixelStorei(C.UNPACK_ROW_LENGTH,xe),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te),C.pixelStorei(C.UNPACK_SKIP_PIXELS,rn),C.pixelStorei(C.UNPACK_SKIP_ROWS,ce),C.pixelStorei(C.UNPACK_SKIP_IMAGES,kt),O===0&&F.generateMipmaps&&C.generateMipmap(C.TEXTURE_2D),mt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,X=null,j=null,O=0){E.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,j=arguments[1]||null,E=arguments[2],F=arguments[3],O=arguments[4]||0);let dt,Mt,Lt,It,zt,Wt,Nt,ue,xe;const Te=E.isCompressedTexture?E.mipmaps[O]:E.image;X!==null?(dt=X.max.x-X.min.x,Mt=X.max.y-X.min.y,Lt=X.max.z-X.min.z,It=X.min.x,zt=X.min.y,Wt=X.min.z):(dt=Te.width,Mt=Te.height,Lt=Te.depth,It=0,zt=0,Wt=0),j!==null?(Nt=j.x,ue=j.y,xe=j.z):(Nt=0,ue=0,xe=0);const rn=Yt.convert(F.format),ce=Yt.convert(F.type);let kt;if(F.isData3DTexture)T.setTexture3D(F,0),kt=C.TEXTURE_3D;else if(F.isDataArrayTexture||F.isCompressedArrayTexture)T.setTexture2DArray(F,0),kt=C.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,F.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,F.unpackAlignment);const Ve=C.getParameter(C.UNPACK_ROW_LENGTH),he=C.getParameter(C.UNPACK_IMAGE_HEIGHT),vn=C.getParameter(C.UNPACK_SKIP_PIXELS),Ai=C.getParameter(C.UNPACK_SKIP_ROWS),an=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,Te.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Te.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,It),C.pixelStorei(C.UNPACK_SKIP_ROWS,zt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Wt),E.isDataTexture||E.isData3DTexture?C.texSubImage3D(kt,O,Nt,ue,xe,dt,Mt,Lt,rn,ce,Te.data):F.isCompressedArrayTexture?C.compressedTexSubImage3D(kt,O,Nt,ue,xe,dt,Mt,Lt,rn,Te.data):C.texSubImage3D(kt,O,Nt,ue,xe,dt,Mt,Lt,rn,ce,Te),C.pixelStorei(C.UNPACK_ROW_LENGTH,Ve),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,he),C.pixelStorei(C.UNPACK_SKIP_PIXELS,vn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Ai),C.pixelStorei(C.UNPACK_SKIP_IMAGES,an),O===0&&F.generateMipmaps&&C.generateMipmap(kt),mt.unbindTexture()},this.initRenderTarget=function(E){k.get(E).__webglFramebuffer===void 0&&T.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?T.setTextureCube(E,0):E.isData3DTexture?T.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?T.setTexture2DArray(E,0):T.setTexture2D(E,0),mt.unbindTexture()},this.resetState=function(){I=0,A=0,w=null,mt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===al?"display-p3":"srgb",e.unpackColorSpace=oe.workingColorSpace===Kr?"display-p3":"srgb"}}class $h{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ft(t),this.near=e,this.far=n}clone(){return new $h(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Eg extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ag{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=No,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const je=new P;class Xr{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Rn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=pe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=pe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Rn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Rn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Rn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Rn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=pe(e,this.array),n=pe(n,this.array),s=pe(s,this.array),r=pe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new fn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Xr(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cg extends si{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Hi;const bs=new P,Gi=new P,Wi=new P,qi=new rt,Ms=new rt,Xh=new se,gr=new P,Ss=new P,vr=new P,Tc=new rt,Oa=new rt,Ec=new rt;class Gv extends Ee{constructor(t=new Cg){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Fe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ag(e,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Xr(n,3,0,!1)),Hi.setAttribute("uv",new Xr(n,2,3,!1))}this.geometry=Hi,this.material=t,this.center=new rt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Gi.setFromMatrixScale(this.matrixWorld),Xh.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Wi.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Gi.multiplyScalar(-Wi.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;_r(gr.set(-.5,-.5,0),Wi,a,Gi,s,r),_r(Ss.set(.5,-.5,0),Wi,a,Gi,s,r),_r(vr.set(.5,.5,0),Wi,a,Gi,s,r),Tc.set(0,0),Oa.set(1,0),Ec.set(1,1);let o=t.ray.intersectTriangle(gr,Ss,vr,!1,bs);if(o===null&&(_r(Ss.set(-.5,.5,0),Wi,a,Gi,s,r),Oa.set(0,1),o=t.ray.intersectTriangle(gr,vr,Ss,!1,bs),o===null))return;const c=t.ray.origin.distanceTo(bs);c<t.near||c>t.far||e.push({distance:c,point:bs.clone(),uv:gn.getInterpolation(bs,gr,Ss,vr,Tc,Oa,Ec,new rt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function _r(i,t,e,n,s,r){qi.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ms.x=r*qi.x-s*qi.y,Ms.y=s*qi.x+r*qi.y):Ms.copy(qi),i.copy(t),i.x+=Ms.x,i.y+=Ms.y,i.applyMatrix4(Xh)}class Rg extends qe{constructor(t=null,e=1,n=1,s,r,a,o,c,h=Ue,l=Ue,f,d){super(null,a,o,c,h,l,s,r,f,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ac extends fn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const $i=new se,Cc=new se,xr=[],Rc=new ii,Pg=new se,ws=new lt,Ts=new ps;class fl extends lt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ac(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Pg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ii),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Rc.copy(t.boundingBox).applyMatrix4($i),this.boundingBox.union(Rc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ps),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,$i),Ts.copy(t.boundingSphere).applyMatrix4($i),this.boundingSphere.union(Ts)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(ws.geometry=this.geometry,ws.material=this.material,ws.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ts.copy(this.boundingSphere),Ts.applyMatrix4(n),t.ray.intersectsSphere(Ts)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,$i),Cc.multiplyMatrices(n,$i),ws.matrixWorld=Cc,ws.raycast(t,xr);for(let a=0,o=xr.length;a<o;a++){const c=xr[a];c.instanceId=r,c.object=this,e.push(c)}xr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ac(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Rg(new Float32Array(s*this.count),s,this.count,el,Pn));const r=this.morphTexture.source.data.data;let a=0;for(let h=0;h<n.length;h++)a+=n[h];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Yh extends si{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pc=new se,Fo=new ol,yr=new ps,br=new P;class Lg extends Ee{constructor(t=new Fe,e=new Yh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(s),yr.radius+=r,t.ray.intersectsSphere(yr)===!1)return;Pc.copy(s).invert(),Fo.copy(t.ray).applyMatrix4(Pc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,h=n.index,f=n.attributes.position;if(h!==null){const d=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let g=d,v=m;g<v;g++){const u=h.getX(g);br.fromBufferAttribute(f,u),Lc(br,u,c,s,t,e,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let g=d,v=m;g<v;g++)br.fromBufferAttribute(f,g),Lc(br,g,c,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Lc(i,t,e,n,s,r,a){const o=Fo.distanceSqToPoint(i);if(o<e){const c=new P;Fo.closestPointToPoint(i,c),c.applyMatrix4(n);const h=s.ray.origin.distanceTo(c);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class jh extends qe{constructor(t,e,n,s,r,a,o,c,h){super(t,e,n,s,r,a,o,c,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,c=r-1,h;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),h=n[s]-a,h<0)o=s+1;else if(h>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);const l=n[s],d=n[s+1]-l,m=(a-l)/d;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),c=e||(a.isVector2?new rt:new P);return c.copy(o).sub(a).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new P,s=[],r=[],a=[],o=new P,c=new se;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new P)}r[0]=new P,a[0]=new P;let h=Number.MAX_VALUE;const l=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);l<=h&&(h=l,n.set(1,0,0)),f<=h&&(h=f,n.set(0,1,0)),d<=h&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(He(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(c.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(He(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class dl extends Dn{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(t,e=new rt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(o),h=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const l=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,m=h-this.aY;c=d*l-m*f+this.aX,h=d*f+m*l+this.aY}return n.set(c,h)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Dg extends dl{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function pl(){let i=0,t=0,e=0,n=0;function s(r,a,o,c){i=r,t=o,e=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,h){s(a,o,h*(o-r),h*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,h,l,f){let d=(a-r)/h-(o-r)/(h+l)+(o-a)/l,m=(o-a)/l-(c-a)/(l+f)+(c-o)/f;d*=l,m*=l,s(a,o,d,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Mr=new P,Ba=new pl,za=new pl,Va=new pl;class Ig extends Dn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new P){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let h,l;this.closed||o>0?h=s[(o-1)%r]:(Mr.subVectors(s[0],s[1]).add(s[0]),h=Mr);const f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?l=s[(o+2)%r]:(Mr.subVectors(s[r-1],s[r-2]).add(s[r-1]),l=Mr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(h.distanceToSquared(f),m),v=Math.pow(f.distanceToSquared(d),m),u=Math.pow(d.distanceToSquared(l),m);v<1e-4&&(v=1),g<1e-4&&(g=v),u<1e-4&&(u=v),Ba.initNonuniformCatmullRom(h.x,f.x,d.x,l.x,g,v,u),za.initNonuniformCatmullRom(h.y,f.y,d.y,l.y,g,v,u),Va.initNonuniformCatmullRom(h.z,f.z,d.z,l.z,g,v,u)}else this.curveType==="catmullrom"&&(Ba.initCatmullRom(h.x,f.x,d.x,l.x,this.tension),za.initCatmullRom(h.y,f.y,d.y,l.y,this.tension),Va.initCatmullRom(h.z,f.z,d.z,l.z,this.tension));return n.set(Ba.calc(c),za.calc(c),Va.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new P().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Dc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,c=i*o;return(2*e-2*n+r+a)*c+(-3*e+3*n-2*r-a)*o+r*i+e}function Ug(i,t){const e=1-i;return e*e*t}function Ng(i,t){return 2*(1-i)*i*t}function kg(i,t){return i*i*t}function Ps(i,t,e,n){return Ug(i,t)+Ng(i,e)+kg(i,n)}function Fg(i,t){const e=1-i;return e*e*e*t}function Og(i,t){const e=1-i;return 3*e*e*i*t}function Bg(i,t){return 3*(1-i)*i*i*t}function zg(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return Fg(i,t)+Og(i,e)+Bg(i,n)+zg(i,s)}class Kh extends Dn{constructor(t=new rt,e=new rt,n=new rt,s=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Vg extends Dn{constructor(t=new P,e=new P,n=new P,s=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ls(t,s.x,r.x,a.x,o.x),Ls(t,s.y,r.y,a.y,o.y),Ls(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Zh extends Dn{constructor(t=new rt,e=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new rt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new rt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hg extends Dn{constructor(t=new P,e=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new P){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new P){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Jh extends Dn{constructor(t=new rt,e=new rt,n=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new rt){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Qh extends Dn{constructor(t=new P,e=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new P){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Ps(t,s.x,r.x,a.x),Ps(t,s.y,r.y,a.y),Ps(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class tu extends Dn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new rt){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],h=s[a],l=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Dc(o,c.x,h.x,l.x,f.x),Dc(o,c.y,h.y,l.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new rt().fromArray(s))}return this}}var Yr=Object.freeze({__proto__:null,ArcCurve:Dg,CatmullRomCurve3:Ig,CubicBezierCurve:Kh,CubicBezierCurve3:Vg,EllipseCurve:dl,LineCurve:Zh,LineCurve3:Hg,QuadraticBezierCurve:Jh,QuadraticBezierCurve3:Qh,SplineCurve:tu});class Gg extends Dn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Yr[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],c=o.getLength(),h=c===0?0:1-a/c;return o.getPointAt(h,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,c=a.getPoints(o);for(let h=0;h<c.length;h++){const l=c[h];n&&n.equals(l)||(e.push(l),n=l)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Yr[s.type]().fromJSON(s))}return this}}class Ic extends Gg{constructor(t){super(),this.type="Path",this.currentPoint=new rt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Zh(this.currentPoint.clone(),new rt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Jh(this.currentPoint.clone(),new rt(t,e),new rt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new Kh(this.currentPoint.clone(),new rt(t,e),new rt(n,s),new rt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new tu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+o,e+c,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,c){const h=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(t+h,e+l,n,s,r,a,o,c),this}absellipse(t,e,n,s,r,a,o,c){const h=new dl(t,e,n,s,r,a,o,c);if(this.curves.length>0){const f=h.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(h);const l=h.getPoint(1);return this.currentPoint.copy(l),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eu extends Fe{constructor(t=[new rt(0,-.5),new rt(.5,0),new rt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=He(s,0,Math.PI*2);const r=[],a=[],o=[],c=[],h=[],l=1/e,f=new P,d=new rt,m=new P,g=new P,v=new P;let u=0,p=0;for(let _=0;_<=t.length-1;_++)switch(_){case 0:u=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,m.x=p*1,m.y=-u,m.z=p*0,v.copy(m),m.normalize(),c.push(m.x,m.y,m.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:u=t[_+1].x-t[_].x,p=t[_+1].y-t[_].y,m.x=p*1,m.y=-u,m.z=p*0,g.copy(m),m.x+=v.x,m.y+=v.y,m.z+=v.z,m.normalize(),c.push(m.x,m.y,m.z),v.copy(g)}for(let _=0;_<=e;_++){const y=n+_*l*s,b=Math.sin(y),I=Math.cos(y);for(let A=0;A<=t.length-1;A++){f.x=t[A].x*b,f.y=t[A].y,f.z=t[A].x*I,a.push(f.x,f.y,f.z),d.x=_/e,d.y=A/(t.length-1),o.push(d.x,d.y);const w=c[3*A+0]*b,L=c[3*A+1],Y=c[3*A+0]*I;h.push(w,L,Y)}}for(let _=0;_<e;_++)for(let y=0;y<t.length-1;y++){const b=y+_*t.length,I=b,A=b+t.length,w=b+t.length+1,L=b+1;r.push(I,A,L),r.push(w,L,A)}this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("uv",new re(o,2)),this.setAttribute("normal",new re(h,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eu(t.points,t.segments,t.phiStart,t.phiLength)}}class qs extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],c=[],h=new P,l=new rt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=e;f++,d+=3){const m=n+f/e*s;h.x=t*Math.cos(m),h.y=t*Math.sin(m),a.push(h.x,h.y,h.z),o.push(0,0,1),l.x=(a[d]/t+1)/2,l.y=(a[d+1]/t+1)/2,c.push(l.x,l.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new re(a,3)),this.setAttribute("normal",new re(o,3)),this.setAttribute("uv",new re(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qs(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ee extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const h=this;s=Math.floor(s),r=Math.floor(r);const l=[],f=[],d=[],m=[];let g=0;const v=[],u=n/2;let p=0;_(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(l),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(m,2));function _(){const b=new P,I=new P;let A=0;const w=(e-t)/n;for(let L=0;L<=r;L++){const Y=[],x=L/r,M=x*(e-t)+t;for(let V=0;V<=s;V++){const H=V/s,W=H*c+o,Q=Math.sin(W),D=Math.cos(W);I.x=M*Q,I.y=-x*n+u,I.z=M*D,f.push(I.x,I.y,I.z),b.set(Q,w,D).normalize(),d.push(b.x,b.y,b.z),m.push(H,1-x),Y.push(g++)}v.push(Y)}for(let L=0;L<s;L++)for(let Y=0;Y<r;Y++){const x=v[Y][L],M=v[Y+1][L],V=v[Y+1][L+1],H=v[Y][L+1];t>0&&(l.push(x,M,H),A+=3),e>0&&(l.push(M,V,H),A+=3)}h.addGroup(p,A,0),p+=A}function y(b){const I=g,A=new rt,w=new P;let L=0;const Y=b===!0?t:e,x=b===!0?1:-1;for(let V=1;V<=s;V++)f.push(0,u*x,0),d.push(0,x,0),m.push(.5,.5),g++;const M=g;for(let V=0;V<=s;V++){const W=V/s*c+o,Q=Math.cos(W),D=Math.sin(W);w.x=Y*D,w.y=u*x,w.z=Y*Q,f.push(w.x,w.y,w.z),d.push(0,x,0),A.x=Q*.5+.5,A.y=D*.5*x+.5,m.push(A.x,A.y),g++}for(let V=0;V<s;V++){const H=I+V,W=M+V;b===!0?l.push(W,W+1,H):l.push(W+1,W,H),L+=3}h.addGroup(p,L,b===!0?1:2),p+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ee(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ml extends ee{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new ml(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Jr extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),h(n),l(),this.setAttribute("position",new re(r,3)),this.setAttribute("normal",new re(r.slice(),3)),this.setAttribute("uv",new re(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(_){const y=new P,b=new P,I=new P;for(let A=0;A<e.length;A+=3)m(e[A+0],y),m(e[A+1],b),m(e[A+2],I),c(y,b,I,_)}function c(_,y,b,I){const A=I+1,w=[];for(let L=0;L<=A;L++){w[L]=[];const Y=_.clone().lerp(b,L/A),x=y.clone().lerp(b,L/A),M=A-L;for(let V=0;V<=M;V++)V===0&&L===A?w[L][V]=Y:w[L][V]=Y.clone().lerp(x,V/M)}for(let L=0;L<A;L++)for(let Y=0;Y<2*(A-L)-1;Y++){const x=Math.floor(Y/2);Y%2===0?(d(w[L][x+1]),d(w[L+1][x]),d(w[L][x])):(d(w[L][x+1]),d(w[L+1][x+1]),d(w[L+1][x]))}}function h(_){const y=new P;for(let b=0;b<r.length;b+=3)y.x=r[b+0],y.y=r[b+1],y.z=r[b+2],y.normalize().multiplyScalar(_),r[b+0]=y.x,r[b+1]=y.y,r[b+2]=y.z}function l(){const _=new P;for(let y=0;y<r.length;y+=3){_.x=r[y+0],_.y=r[y+1],_.z=r[y+2];const b=u(_)/2/Math.PI+.5,I=p(_)/Math.PI+.5;a.push(b,1-I)}g(),f()}function f(){for(let _=0;_<a.length;_+=6){const y=a[_+0],b=a[_+2],I=a[_+4],A=Math.max(y,b,I),w=Math.min(y,b,I);A>.9&&w<.1&&(y<.2&&(a[_+0]+=1),b<.2&&(a[_+2]+=1),I<.2&&(a[_+4]+=1))}}function d(_){r.push(_.x,_.y,_.z)}function m(_,y){const b=_*3;y.x=t[b+0],y.y=t[b+1],y.z=t[b+2]}function g(){const _=new P,y=new P,b=new P,I=new P,A=new rt,w=new rt,L=new rt;for(let Y=0,x=0;Y<r.length;Y+=9,x+=6){_.set(r[Y+0],r[Y+1],r[Y+2]),y.set(r[Y+3],r[Y+4],r[Y+5]),b.set(r[Y+6],r[Y+7],r[Y+8]),A.set(a[x+0],a[x+1]),w.set(a[x+2],a[x+3]),L.set(a[x+4],a[x+5]),I.copy(_).add(y).add(b).divideScalar(3);const M=u(I);v(A,x+0,_,M),v(w,x+2,y,M),v(L,x+4,b,M)}}function v(_,y,b,I){I<0&&_.x===1&&(a[y]=_.x-1),b.x===0&&b.z===0&&(a[y]=I/2/Math.PI+.5)}function u(_){return Math.atan2(_.z,-_.x)}function p(_){return Math.atan2(-_.y,Math.sqrt(_.x*_.x+_.z*_.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.vertices,t.indices,t.radius,t.details)}}class Wg extends Ic{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ic().fromJSON(s))}return this}}const qg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=nu(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,c,h,l,f,d,m;if(n&&(r=Kg(i,t,r,e)),i.length>80*e){o=h=i[0],c=l=i[1];for(let g=e;g<s;g+=e)f=i[g],d=i[g+1],f<o&&(o=f),d<c&&(c=d),f>h&&(h=f),d>l&&(l=d);m=Math.max(h-o,l-c),m=m!==0?32767/m:0}return zs(r,a,e,o,c,m,0),a}};function nu(i,t,e,n,s){let r,a;if(s===o1(i,t,e,n)>0)for(r=t;r<e;r+=n)a=Uc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=Uc(r,i[r],i[r+1],a);return a&&Qr(a,a.next)&&(Hs(a),a=a.next),a}function Ti(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Qr(e,e.next)||Se(e.prev,e,e.next)===0)){if(Hs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function zs(i,t,e,n,s,r,a){if(!i)return;!a&&r&&e1(i,n,s,r);let o=i,c,h;for(;i.prev!==i.next;){if(c=i.prev,h=i.next,r?Xg(i,n,s,r):$g(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(h.i/e|0),Hs(i),i=h.next,o=h.next;continue}if(i=h,i===o){a?a===1?(i=Yg(Ti(i),t,e),zs(i,t,e,n,s,r,2)):a===2&&jg(i,t,e,n,s,r):zs(Ti(i),t,e,n,s,r,1);break}}}function $g(i){const t=i.prev,e=i,n=i.next;if(Se(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,h=n.y,l=s<r?s<a?s:a:r<a?r:a,f=o<c?o<h?o:h:c<h?c:h,d=s>r?s>a?s:a:r>a?r:a,m=o>c?o>h?o:h:c>h?c:h;let g=n.next;for(;g!==t;){if(g.x>=l&&g.x<=d&&g.y>=f&&g.y<=m&&Zi(s,o,r,c,a,h,g.x,g.y)&&Se(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Xg(i,t,e,n){const s=i.prev,r=i,a=i.next;if(Se(s,r,a)>=0)return!1;const o=s.x,c=r.x,h=a.x,l=s.y,f=r.y,d=a.y,m=o<c?o<h?o:h:c<h?c:h,g=l<f?l<d?l:d:f<d?f:d,v=o>c?o>h?o:h:c>h?c:h,u=l>f?l>d?l:d:f>d?f:d,p=Oo(m,g,t,e,n),_=Oo(v,u,t,e,n);let y=i.prevZ,b=i.nextZ;for(;y&&y.z>=p&&b&&b.z<=_;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=u&&y!==s&&y!==a&&Zi(o,l,c,f,h,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=m&&b.x<=v&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&Zi(o,l,c,f,h,d,b.x,b.y)&&Se(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=p;){if(y.x>=m&&y.x<=v&&y.y>=g&&y.y<=u&&y!==s&&y!==a&&Zi(o,l,c,f,h,d,y.x,y.y)&&Se(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=_;){if(b.x>=m&&b.x<=v&&b.y>=g&&b.y<=u&&b!==s&&b!==a&&Zi(o,l,c,f,h,d,b.x,b.y)&&Se(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Yg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Qr(s,r)&&iu(s,n,n.next,r)&&Vs(s,r)&&Vs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Hs(n),Hs(n.next),n=i=r),n=n.next}while(n!==i);return Ti(n)}function jg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&s1(a,o)){let c=su(a,o);a=Ti(a,a.next),c=Ti(c,c.next),zs(a,t,e,n,s,r,0),zs(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Kg(i,t,e,n){const s=[];let r,a,o,c,h;for(r=0,a=t.length;r<a;r++)o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,h=nu(i,o,c,n,!1),h===h.next&&(h.steiner=!0),s.push(i1(h));for(s.sort(Zg),r=0;r<s.length;r++)e=Jg(s[r],e);return e}function Zg(i,t){return i.x-t.x}function Jg(i,t){const e=Qg(i,t);if(!e)return t;const n=su(e,i);return Ti(n,n.next),Ti(e,e.next)}function Qg(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const d=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,c=s.x,h=s.y;let l=1/0,f;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Zi(a<h?r:n,a,c,h,a<h?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Vs(e,i)&&(f<l||f===l&&(e.x>s.x||e.x===s.x&&t1(s,e)))&&(s=e,l=f)),e=e.next;while(e!==o);return s}function t1(i,t){return Se(i.prev,i,t.prev)<0&&Se(t.next,i,i.next)<0}function e1(i,t,e,n){let s=i;do s.z===0&&(s.z=Oo(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,n1(s)}function n1(i){let t,e,n,s,r,a,o,c,h=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<h&&(o++,n=n.nextZ,!!n);t++);for(c=h;o>0||c>0&&n;)o!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,h*=2}while(a>1);return i}function Oo(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function i1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Zi(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function s1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!r1(i,t)&&(Vs(i,t)&&Vs(t,i)&&a1(i,t)&&(Se(i.prev,i,t.prev)||Se(i,t.prev,t))||Qr(i,t)&&Se(i.prev,i,i.next)>0&&Se(t.prev,t,t.next)>0)}function Se(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Qr(i,t){return i.x===t.x&&i.y===t.y}function iu(i,t,e,n){const s=wr(Se(i,t,e)),r=wr(Se(i,t,n)),a=wr(Se(e,n,i)),o=wr(Se(e,n,t));return!!(s!==r&&a!==o||s===0&&Sr(i,e,t)||r===0&&Sr(i,n,t)||a===0&&Sr(e,i,n)||o===0&&Sr(e,t,n))}function Sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function wr(i){return i>0?1:i<0?-1:0}function r1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&iu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Vs(i,t){return Se(i.prev,i,i.next)<0?Se(i,t,i.next)>=0&&Se(i,i.prev,t)>=0:Se(i,t,i.prev)<0||Se(i,i.next,t)<0}function a1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function su(i,t){const e=new Bo(i.i,i.x,i.y),n=new Bo(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Uc(i,t,e,n){const s=new Bo(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Hs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bo(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function o1(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Ds{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ds.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Nc(t),kc(n,t);let a=t.length;e.forEach(Nc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,kc(n,e[c]);const o=qg.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}}function Nc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function kc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class ru extends Fe{constructor(t=new Wg([new rt(.5,.5),new rt(-.5,.5),new rt(-.5,-.5),new rt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,c=t.length;o<c;o++){const h=t[o];a(h)}this.setAttribute("position",new re(s,3)),this.setAttribute("uv",new re(r,2)),this.computeVertexNormals();function a(o){const c=[],h=e.curveSegments!==void 0?e.curveSegments:12,l=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,m=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:m-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,u=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,_=e.UVGenerator!==void 0?e.UVGenerator:l1;let y,b=!1,I,A,w,L;p&&(y=p.getSpacedPoints(l),b=!0,d=!1,I=p.computeFrenetFrames(l,!1),A=new P,w=new P,L=new P),d||(u=0,m=0,g=0,v=0);const Y=o.extractPoints(h);let x=Y.shape;const M=Y.holes;if(!Ds.isClockWise(x)){x=x.reverse();for(let it=0,C=M.length;it<C;it++){const pt=M[it];Ds.isClockWise(pt)&&(M[it]=pt.reverse())}}const H=Ds.triangulateShape(x,M),W=x;for(let it=0,C=M.length;it<C;it++){const pt=M[it];x=x.concat(pt)}function Q(it,C,pt){return C||console.error("THREE.ExtrudeGeometry: vec does not exist"),it.clone().addScaledVector(C,pt)}const D=x.length,G=H.length;function q(it,C,pt){let ut,K,mt;const Ut=it.x-C.x,k=it.y-C.y,T=pt.x-it.x,S=pt.y-it.y,U=Ut*Ut+k*k,B=Ut*S-k*T;if(Math.abs(B)>Number.EPSILON){const $=Math.sqrt(U),Z=Math.sqrt(T*T+S*S),yt=C.x-k/$,ft=C.y+Ut/$,St=pt.x-S/Z,Qt=pt.y+T/Z,ht=((St-yt)*S-(Qt-ft)*T)/(Ut*S-k*T);ut=yt+Ut*ht-it.x,K=ft+k*ht-it.y;const At=ut*ut+K*K;if(At<=2)return new rt(ut,K);mt=Math.sqrt(At/2)}else{let $=!1;Ut>Number.EPSILON?T>Number.EPSILON&&($=!0):Ut<-Number.EPSILON?T<-Number.EPSILON&&($=!0):Math.sign(k)===Math.sign(S)&&($=!0),$?(ut=-k,K=Ut,mt=Math.sqrt(U)):(ut=Ut,K=k,mt=Math.sqrt(U/2))}return new rt(ut/mt,K/mt)}const at=[];for(let it=0,C=W.length,pt=C-1,ut=it+1;it<C;it++,pt++,ut++)pt===C&&(pt=0),ut===C&&(ut=0),at[it]=q(W[it],W[pt],W[ut]);const ct=[];let vt,Zt=at.concat();for(let it=0,C=M.length;it<C;it++){const pt=M[it];vt=[];for(let ut=0,K=pt.length,mt=K-1,Ut=ut+1;ut<K;ut++,mt++,Ut++)mt===K&&(mt=0),Ut===K&&(Ut=0),vt[ut]=q(pt[ut],pt[mt],pt[Ut]);ct.push(vt),Zt=Zt.concat(vt)}for(let it=0;it<u;it++){const C=it/u,pt=m*Math.cos(C*Math.PI/2),ut=g*Math.sin(C*Math.PI/2)+v;for(let K=0,mt=W.length;K<mt;K++){const Ut=Q(W[K],at[K],ut);z(Ut.x,Ut.y,-pt)}for(let K=0,mt=M.length;K<mt;K++){const Ut=M[K];vt=ct[K];for(let k=0,T=Ut.length;k<T;k++){const S=Q(Ut[k],vt[k],ut);z(S.x,S.y,-pt)}}}const xt=g+v;for(let it=0;it<D;it++){const C=d?Q(x[it],Zt[it],xt):x[it];b?(w.copy(I.normals[0]).multiplyScalar(C.x),A.copy(I.binormals[0]).multiplyScalar(C.y),L.copy(y[0]).add(w).add(A),z(L.x,L.y,L.z)):z(C.x,C.y,0)}for(let it=1;it<=l;it++)for(let C=0;C<D;C++){const pt=d?Q(x[C],Zt[C],xt):x[C];b?(w.copy(I.normals[it]).multiplyScalar(pt.x),A.copy(I.binormals[it]).multiplyScalar(pt.y),L.copy(y[it]).add(w).add(A),z(L.x,L.y,L.z)):z(pt.x,pt.y,f/l*it)}for(let it=u-1;it>=0;it--){const C=it/u,pt=m*Math.cos(C*Math.PI/2),ut=g*Math.sin(C*Math.PI/2)+v;for(let K=0,mt=W.length;K<mt;K++){const Ut=Q(W[K],at[K],ut);z(Ut.x,Ut.y,f+pt)}for(let K=0,mt=M.length;K<mt;K++){const Ut=M[K];vt=ct[K];for(let k=0,T=Ut.length;k<T;k++){const S=Q(Ut[k],vt[k],ut);b?z(S.x,S.y+y[l-1].y,y[l-1].x+pt):z(S.x,S.y,f+pt)}}}tt(),nt();function tt(){const it=s.length/3;if(d){let C=0,pt=D*C;for(let ut=0;ut<G;ut++){const K=H[ut];et(K[2]+pt,K[1]+pt,K[0]+pt)}C=l+u*2,pt=D*C;for(let ut=0;ut<G;ut++){const K=H[ut];et(K[0]+pt,K[1]+pt,K[2]+pt)}}else{for(let C=0;C<G;C++){const pt=H[C];et(pt[2],pt[1],pt[0])}for(let C=0;C<G;C++){const pt=H[C];et(pt[0]+D*l,pt[1]+D*l,pt[2]+D*l)}}n.addGroup(it,s.length/3-it,0)}function nt(){const it=s.length/3;let C=0;_t(W,C),C+=W.length;for(let pt=0,ut=M.length;pt<ut;pt++){const K=M[pt];_t(K,C),C+=K.length}n.addGroup(it,s.length/3-it,1)}function _t(it,C){let pt=it.length;for(;--pt>=0;){const ut=pt;let K=pt-1;K<0&&(K=it.length-1);for(let mt=0,Ut=l+u*2;mt<Ut;mt++){const k=D*mt,T=D*(mt+1),S=C+ut+k,U=C+K+k,B=C+K+T,$=C+ut+T;Ot(S,U,B,$)}}}function z(it,C,pt){c.push(it),c.push(C),c.push(pt)}function et(it,C,pt){Gt(it),Gt(C),Gt(pt);const ut=s.length/3,K=_.generateTopUV(n,s,ut-3,ut-2,ut-1);Xt(K[0]),Xt(K[1]),Xt(K[2])}function Ot(it,C,pt,ut){Gt(it),Gt(C),Gt(ut),Gt(C),Gt(pt),Gt(ut);const K=s.length/3,mt=_.generateSideWallUV(n,s,K-6,K-3,K-2,K-1);Xt(mt[0]),Xt(mt[1]),Xt(mt[3]),Xt(mt[1]),Xt(mt[2]),Xt(mt[3])}function Gt(it){s.push(c[it*3+0]),s.push(c[it*3+1]),s.push(c[it*3+2])}function Xt(it){r.push(it.x),r.push(it.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return c1(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Yr[s.type]().fromJSON(s)),new ru(n,t.options)}}const l1={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],c=t[n*3+1],h=t[s*3],l=t[s*3+1];return[new rt(r,a),new rt(o,c),new rt(h,l)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],c=t[e*3+2],h=t[n*3],l=t[n*3+1],f=t[n*3+2],d=t[s*3],m=t[s*3+1],g=t[s*3+2],v=t[r*3],u=t[r*3+1],p=t[r*3+2];return Math.abs(o-l)<Math.abs(a-h)?[new rt(a,1-c),new rt(h,1-f),new rt(d,1-g),new rt(v,1-p)]:[new rt(o,1-c),new rt(l,1-f),new rt(m,1-g),new rt(u,1-p)]}};function c1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class au extends Jr{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new au(t.radius,t.detail)}}class gl extends Jr{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new gl(t.radius,t.detail)}}class dn extends Fe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let h=0;const l=[],f=new P,d=new P,m=[],g=[],v=[],u=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let b=0;p===0&&a===0?b=.5/e:p===n&&c===Math.PI&&(b=-.5/e);for(let I=0;I<=e;I++){const A=I/e;f.x=-t*Math.cos(s+A*r)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(s+A*r)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),u.push(A+b,1-y),_.push(h++)}l.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=l[p][_+1],b=l[p][_],I=l[p+1][_],A=l[p+1][_+1];(p!==0||a>0)&&m.push(y,b,A),(p!==n-1||c<Math.PI)&&m.push(b,I,A)}this.setIndex(m),this.setAttribute("position",new re(g,3)),this.setAttribute("normal",new re(v,3)),this.setAttribute("uv",new re(u,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Gs extends Fe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],c=[],h=[],l=new P,f=new P,d=new P;for(let m=0;m<=n;m++)for(let g=0;g<=s;g++){const v=g/s*r,u=m/n*Math.PI*2;f.x=(t+e*Math.cos(u))*Math.cos(v),f.y=(t+e*Math.cos(u))*Math.sin(v),f.z=e*Math.sin(u),o.push(f.x,f.y,f.z),l.x=t*Math.cos(v),l.y=t*Math.sin(v),d.subVectors(f,l).normalize(),c.push(d.x,d.y,d.z),h.push(g/s),h.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=s;g++){const v=(s+1)*m+g-1,u=(s+1)*(m-1)+g-1,p=(s+1)*(m-1)+g,_=(s+1)*m+g;a.push(v,u,_),a.push(u,p,_)}this.setIndex(a),this.setAttribute("position",new re(o,3)),this.setAttribute("normal",new re(c,3)),this.setAttribute("uv",new re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gs(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ou extends Fe{constructor(t=new Qh(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};const a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new P,c=new P,h=new rt;let l=new P;const f=[],d=[],m=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new re(f,3)),this.setAttribute("normal",new re(d,3)),this.setAttribute("uv",new re(m,2));function v(){for(let y=0;y<e;y++)u(y);u(r===!1?e:0),_(),p()}function u(y){l=t.getPointAt(y/e,l);const b=a.normals[y],I=a.binormals[y];for(let A=0;A<=s;A++){const w=A/s*Math.PI*2,L=Math.sin(w),Y=-Math.cos(w);c.x=Y*b.x+L*I.x,c.y=Y*b.y+L*I.y,c.z=Y*b.z+L*I.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=l.x+n*c.x,o.y=l.y+n*c.y,o.z=l.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let y=1;y<=e;y++)for(let b=1;b<=s;b++){const I=(s+1)*(y-1)+(b-1),A=(s+1)*y+(b-1),w=(s+1)*y+b,L=(s+1)*(y-1)+b;g.push(I,A,L),g.push(A,w,L)}}function _(){for(let y=0;y<=e;y++)for(let b=0;b<=s;b++)h.x=y/e,h.y=b/s,m.push(h.x,h.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ou(new Yr[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class h1 extends We{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class lu extends si{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zn extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rl,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=Ko,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Fc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class u1{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,c;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(l){o++,r===!1&&s.onStart!==void 0&&s.onStart(l,a,o),r=!0},this.itemEnd=function(l){a++,s.onProgress!==void 0&&s.onProgress(l,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(l){s.onError!==void 0&&s.onError(l)},this.resolveURL=function(l){return c?c(l):l},this.setURLModifier=function(l){return c=l,this},this.addHandler=function(l,f){return h.push(l,f),this},this.removeHandler=function(l){const f=h.indexOf(l);return f!==-1&&h.splice(f,2),this},this.getHandler=function(l){for(let f=0,d=h.length;f<d;f+=2){const m=h[f],g=h[f+1];if(m.global&&(m.lastIndex=0),m.test(l))return g}return null}}}const f1=new u1;class vl{constructor(t){this.manager=t!==void 0?t:f1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vl.DEFAULT_MATERIAL_NAME="__DEFAULT";class d1 extends vl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Fc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Bs("img");function c(){l(),Fc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function h(f){l(),s&&s(f),r.manager.itemError(t),r.manager.itemEnd(t)}function l(){o.removeEventListener("load",c,!1),o.removeEventListener("error",h,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",h,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class p1 extends vl{constructor(t){super(t)}load(t,e,n,s){const r=new qe,a=new d1(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class $s extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class m1 extends $s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ft(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ha=new se,Oc=new P,Bc=new P;class _l{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.map=null,this.mapPass=null,this.matrix=new se,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),Ha.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ha),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ha)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class g1 extends _l{constructor(){super(new nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=$r*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class cu extends $s{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new g1}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const zc=new se,Es=new P,Ga=new P;class v1 extends _l{constructor(){super(new nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new rt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Es.setFromMatrixPosition(t.matrixWorld),n.position.copy(Es),Ga.copy(n.position),Ga.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ga),n.updateMatrixWorld(),s.makeTranslation(-Es.x,-Es.y,-Es.z),zc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zc)}}class Is extends $s{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new v1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class _1 extends _l{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class x1 extends $s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new _1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class y1 extends $s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class b1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Vc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Vc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Vc(){return performance.now()}const Hc=new se;class M1{constructor(t,e,n=0,s=1/0){this.ray=new ol(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ll,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Hc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hc),this}intersectObject(t,e=!0,n=[]){return zo(t,this,n,e),n.sort(Gc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)zo(t[s],this,n,e);return n.sort(Gc),n}}function Gc(i,t){return i.distance-t.distance}function zo(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)zo(r[a],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yo);const hu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ei{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const S1=new hl(-1,1,1,-1,0,1);class w1 extends Fe{constructor(){super(),this.setAttribute("position",new re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new re([0,2,0,0,2,0],2))}}const T1=new w1;class ta{constructor(t){this._mesh=new lt(T1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,S1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Vo extends Ei{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof We?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=cs.clone(t.uniforms),this.material=new We({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new ta(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wc extends Ei{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class E1 extends Ei{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class A1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new rt);this._width=n.width,this._height=n.height,e=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Vo(hu),this.copyPass.material.blending=Ln,this.clock=new b1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wc!==void 0&&(a instanceof Wc?n=!0:a instanceof E1&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new rt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class C1 extends Ei{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ft}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const R1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Ft(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class hs extends Ei{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new rt(t.x,t.y):new rt(256,256),this.clearColor=new Ft(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new un(r,a,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new un(r,a,{type:wn});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new un(r,a,{type:wn});m.texture.name="UnrealBloomPass.v"+f,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),a=Math.round(a/2)}const o=R1;this.highPassUniforms=cs.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new We({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new rt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const l=hu;this.copyUniforms=cs.clone(l.uniforms),this.blendMaterial=new We({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:Si,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Ft,this.oldClearAlpha=1,this.basic=new Re,this.fsQuad=new ta(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new rt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=hs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[c]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=hs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[c]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new We({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new rt(.5,.5)},direction:{value:new rt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new We({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}hs.BlurDirectionX=new rt(1,0);hs.BlurDirectionY=new rt(0,1);const P1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class L1 extends Ei{constructor(){super();const t=P1;this.uniforms=cs.clone(t.uniforms),this.material=new h1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new ta(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},oe.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===dh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ph?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===mh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Zo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===gh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const D1={defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

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

		}`};class I1 extends Ei{constructor(t,e,n){super(),this.scene=t,this.camera=e;const s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this.renderTargetDepth=new un(1,1,{minFilter:Ue,magFilter:Ue,type:wn}),this.renderTargetDepth.texture.name="BokehPass.depth",this.materialDepth=new qh,this.materialDepth.depthPacking=Ch,this.materialDepth.blending=Ln;const o=D1,c=cs.clone(o.uniforms);c.tDepth.value=this.renderTargetDepth.texture,c.focus.value=s,c.aspect.value=e.aspect,c.aperture.value=r,c.maxblur.value=a,c.nearClip.value=e.near,c.farClip.value=e.far,this.materialBokeh=new We({defines:Object.assign({},o.defines),uniforms:c,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.uniforms=c,this.fsQuad=new ta(this.materialBokeh),this._oldClearColor=new Ft}render(t,e,n){this.scene.overrideMaterial=this.materialDepth,t.getClearColor(this._oldClearColor);const s=t.getClearAlpha(),r=t.autoClear;t.autoClear=!1,t.setClearColor(16777215),t.setClearAlpha(1),t.setRenderTarget(this.renderTargetDepth),t.clear(),t.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),t.clear(),this.fsQuad.render(t)),this.scene.overrideMaterial=null,t.setClearColor(this._oldClearColor),t.setClearAlpha(s),t.autoClear=r}setSize(t,e){this.materialBokeh.uniforms.aspect.value=t/e,this.renderTargetDepth.setSize(t,e)}dispose(){this.renderTargetDepth.dispose(),this.materialDepth.dispose(),this.materialBokeh.dispose(),this.fsQuad.dispose()}}const Ho=3,U1="the-other-me-applause",ns="saves",uu="tom-applause-settings";function xl(){return{v:Ho,room:"hub_sydney",spot:"start",chapter:"Пролог",f:{},inv:[],notes:[],photos:[],seen:{},mask:null,time:0}}const qc={music:.7,sfx:.8,voice:.6,uiScale:1,quality:"med",textSpeed:45,reduceFlash:!1,reduceShake:!1,contrast:!1,rhythmEasy:!1,rhythmOffset:0,touch:typeof window<"u"&&"ontouchstart"in window&&matchMedia("(pointer: coarse)").matches,introAlways:!1},Me=N1();function N1(){try{const i=localStorage.getItem(uu);if(i)return{...qc,...JSON.parse(i)}}catch(i){console.warn("[settings] не удалось прочитать настройки, используются значения по умолчанию",i)}return{...qc}}function $c(){try{localStorage.setItem(uu,JSON.stringify(Me))}catch(i){console.warn("[settings] не удалось сохранить настройки",i)}}let Tr=null;function fu(){return Tr||(Tr=new Promise(i=>{try{const t=indexedDB.open(U1,1);t.onupgradeneeded=()=>t.result.createObjectStore(ns),t.onsuccess=()=>i(t.result),t.onerror=()=>{console.warn("[save] IndexedDB недоступна, используется localStorage",t.error),i(null)}}catch(t){console.warn("[save] IndexedDB недоступна, используется localStorage",t),i(null)}}),Tr)}async function du(i,t){const e=await fu();if(!e){t===null?localStorage.removeItem("tom-save-"+i):localStorage.setItem("tom-save-"+i,t);return}return new Promise((n,s)=>{const r=e.transaction(ns,"readwrite");t===null?r.objectStore(ns).delete(i):r.objectStore(ns).put(t,i),r.oncomplete=()=>n(),r.onerror=()=>s(r.error)})}async function k1(i){const t=await fu();return t?new Promise((e,n)=>{const s=t.transaction(ns).objectStore(ns).get(i);s.onsuccess=()=>e(s.result??null),s.onerror=()=>n(s.error)}):localStorage.getItem("tom-save-"+i)}const Xc=["auto","slot1","slot2","slot3"],F1={auto:"Автосохранение",slot1:"Слот I",slot2:"Слот II",slot3:"Слот III"};function yl(i){if(!i||typeof i!="object"||typeof i.room!="string"||typeof i.f!="object")return null;const t={...xl(),...i};return Array.isArray(t.inv)||(t.inv=[]),Array.isArray(t.notes)||(t.notes=[]),Array.isArray(t.photos)||(t.photos=[]),(!t.seen||typeof t.seen!="object")&&(t.seen={}),(i.v|0)>Ho?null:(t.v=Ho,t)}async function bl(i,t){t.savedAt=Date.now(),await du(i,JSON.stringify(t))}async function Or(i){const t=await k1(i);if(!t)return{state:null,broken:!1};try{const e=yl(JSON.parse(t));return{state:e,broken:!e}}catch(e){return console.warn(`[save] слот ${i} повреждён`,e),{state:null,broken:!0}}}async function O1(i){await du(i,null)}function B1(i){return JSON.stringify(i)}function z1(i){try{return yl(JSON.parse(i))}catch(t){return console.warn("[save] импорт: файл не является сохранением",t),null}}typeof window<"u"&&(window.__S={readSave:Or,writeSave:bl,migrate:yl});const Xi={sat:1,tint:[1,1,1],vig:.5,glitch:0,bright:1,contrast:1,wave:0,bloom:.45},V1={uniforms:{tDiffuse:{value:null},uSat:{value:1},uTint:{value:new P(1,1,1)},uVig:{value:.35},uGlitch:{value:0},uBright:{value:1},uContrast:{value:1},uWave:{value:0},uTime:{value:0},uFlash:{value:0},uDither:{value:1},uCA:{value:.0018},uGrain:{value:.035}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uSat,uVig,uGlitch,uBright,uContrast,uWave,uTime,uFlash,uDither,uCA,uGrain; uniform vec3 uTint; varying vec2 vUv;
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
      c=floor(c*40.0+b*uDither)/40.0; gl_FragColor=vec4(c,1.0); }`},H1={uniforms:{tDiffuse:{value:null},uFocus:{value:.5},uBand:{value:.16},uAmt:{value:1},uRes:{value:new rt(640,360)}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`uniform sampler2D tDiffuse; uniform float uFocus,uBand,uAmt; uniform vec2 uRes; varying vec2 vUv;
    void main(){ float d=abs(vUv.y-uFocus); float near=step(vUv.y,uFocus); float r=smoothstep(uBand, uBand+0.38, d)*uAmt*(near>0.5?4.2:3.0);
      if(r<0.05){ gl_FragColor=texture2D(tDiffuse,vUv); return; }
      vec3 acc=vec3(0.0); float w=0.0; for(int i=0;i<12;i++){ float a=float(i)*2.39996; float rr=sqrt(float(i)+0.5)/3.5; vec2 o=vec2(cos(a),sin(a))*rr*r/uRes; float k=1.0-rr*0.35; acc+=texture2D(tDiffuse,vUv+o).rgb*k; w+=k; }
      gl_FragColor=vec4(acc/w,1.0); }`};class G1{constructor(t){this.canvas=t,this.scene=new Eg,this.target={...Xi,tint:[...Xi.tint]},this.cur={...Xi,tint:[...Xi.tint]},this.flash=0,this.W=640,this.H=360,this.time=0,this.bokeh=null,this.dofFocus=0,this.pixelH=0,this.baseFov=30,this.tilt=null,this.tiltOn=!0,this.r=new Tg({canvas:t,antialias:!1,powerPreference:"high-performance"}),this.r.shadowMap.enabled=!0,this.r.shadowMap.type=jo,this.r.localClippingEnabled=!0,this.r.toneMapping=Zo,this.r.toneMappingExposure=1.3,this.cam=new nn(30,16/9,1,200),this.setup(),window.addEventListener("resize",()=>this.setup())}setup(t={}){t.pixelH!=null&&(this.pixelH=t.pixelH);const e=t.dof??!!this.bokeh,n=window.innerWidth,s=window.innerHeight,r=this.pixelH||(Me.quality==="low"?288:Me.quality==="med"?400:540),a=Math.max(1,Math.floor(s/r))||1;this.H=Math.max(180,Math.round(s/a)),this.W=Math.max(240,Math.round(n/a)),this.r.setPixelRatio(1),this.r.setSize(this.W,this.H,!1),this.r.shadowMap.enabled=Me.quality!=="low",this.cam.aspect=this.W/this.H,this.cam.fov=this.cam.aspect<1?this.baseFov*1.5:this.baseFov,this.cam.updateProjectionMatrix();const o=new un(this.W,this.H,{type:wn});this.composer=new A1(this.r,o),this.composer.addPass(new C1(this.scene,this.cam)),this.bloom=new hs(new rt(this.W,this.H),.45,.5,.9),this.bloom.enabled=Me.quality!=="low",this.composer.addPass(this.bloom),this.bokeh=null,e&&Me.quality!=="low"&&(this.bokeh=new I1(this.scene,this.cam,{focus:this.dofFocus||5,aperture:.004,maxblur:.006}),this.composer.addPass(this.bokeh)),this.tilt=new Vo(H1),this.tilt.uniforms.uRes.value.set(this.W,this.H),this.tilt.enabled=Me.quality!=="low"&&this.tiltOn,this.composer.addPass(this.tilt),this.composer.addPass(new L1),this.grade=new Vo(V1),this.composer.addPass(this.grade)}setGrade(t,e=!1){this.target={...Xi,...t,tint:t.tint?[...t.tint]:[...Xi.tint]},e&&(this.cur={...this.target,tint:[...this.target.tint]})}render(t){this.time+=t;const e=Math.min(1,t*4),n=this.cur,s=this.target;for(const a of["sat","vig","glitch","bright","contrast","wave","bloom"])n[a]+=(s[a]-n[a])*e;for(let a=0;a<3;a++)n.tint[a]+=(s.tint[a]-n.tint[a])*e;this.flash=Math.max(0,this.flash-t*2.5);const r=this.grade.uniforms;r.uSat.value=n.sat,r.uTint.value.set(n.tint[0],n.tint[1],n.tint[2]),r.uVig.value=n.vig,r.uGlitch.value=Me.reduceFlash?Math.min(n.glitch,.25):n.glitch,r.uBright.value=n.bright,r.uContrast.value=n.contrast*(Me.contrast?1.12:1),r.uWave.value=n.wave,r.uTime.value=this.time,r.uFlash.value=Me.reduceFlash?this.flash*.25:this.flash,this.bloom.strength=n.bloom*.65,this.composer.render(t)}snapshot(t=192){this.composer.render(0);const e=document.createElement("canvas");e.width=t,e.height=Math.round(t*this.H/this.W);const n=e.getContext("2d");return n.imageSmoothingEnabled=!1,n.drawImage(this.canvas,0,0,e.width,e.height),e.toDataURL("image/jpeg",.7)}}const Sn=16,W1=[0,8,2,10,12,4,14,6,3,11,1,9,15,7,13,5];function Ce(i,t,e=0){let n=i*374761393+t*668265263+e*982451653|0;return n=(n^n>>13)*1274126177|0,((n^n>>16)>>>0)/4294967295}function Wa(i,t,e,n=0){const s=Math.floor(i),r=Math.floor(t),a=i-s,o=t-r,c=v=>(v%e+e)%e,h=a*a*(3-2*a),l=o*o*(3-2*o),f=Ce(c(s),c(r),n),d=Ce(c(s+1),c(r),n),m=Ce(c(s),c(r+1),n),g=Ce(c(s+1),c(r+1),n);return f+(d-f)*h+(m-f)*l+(f-d-m+g)*h*l}function De(i,t,e,n=0){return Wa(i/e*4,t/e*4,4,n)*.55+Wa(i/e*8,t/e*8,8,n+1)*.3+Wa(i/e*16,t/e*16,16,n+2)*.15}const pu=i=>{const t=parseInt(i,16);return[t>>16,t>>8&255,t&255]},ye=i=>i.split(" ").map(pu),zn={wood:ye("2e1f15 45301f 5a4029 6e5133 82623f 98764d"),floor:ye("3d2817 53371f 684628 7c5631 8f673c"),darkwood:ye("1c130e 2a1c14 38261a 453021 543b28"),velvet:ye("3a0810 560c18 721022 8e1830 a82840"),plaster:ye("8a7a68 9c8c78 ad9d88 bcae98 cabda8"),stone:ye("3c3a37 524f4a 69655e 807b72 978f84"),brick:ye("3a1c18 54261e 6e3226 86402e 9a5038"),gold:ye("5a4010 86641c b08a2c d4ae48 f0d478"),carpet:ye("4a0c14 62101c 7a1626 8e2030"),metal:ye("23262c 343841 484e59 5e6673 78818f"),black:ye("0c0a0c 141216 1c1a20 24222a"),neon:ye("0a0a18 12122a 1c1c40 2a2a5a"),asphalt:ye("16181c 1e2126 282c33 343943 444a56"),grass:ye("1f2e18 283a1e 334823 3e5629 4b6431"),dirt:ye("2b2019 35281e 403024 4b392a 574332"),paper:ye("c9b88a d6c79a e2d5ac ecdfbc f4eacb"),white:ye("b8b8c4 cacad4 dadae2 e8e8ee f4f4f8"),tileb:ye("18181c 26262c"),concrete:ye("4a4a4e 5a5a5e 6a6a6e 7a7a7e"),schoolfloor:ye("a88a5a b89a68 c8aa78 d6ba88"),pink:ye("c85a90 d870a4 e888b8 f4a4cc"),sky:ye("6a9ad8 82aee4 9cc2ee b8d6f6"),night:ye("0a0e1c 101628 182036 222c48"),green:ye("24402e 2e5038 3a6244 48745a"),blue:ye("1a2440 24325a 304274 3e548e")},Us=new Map;function ea(i,t=!0){const e=new jh(i);return e.magFilter=Ue,e.minFilter=Ue,e.generateMipmaps=!1,t&&(e.wrapS=e.wrapT=Vr),e.colorSpace=hn,e}const q1={floor:{u:.6,size:64,ramp:"floor",fn:(i,t,e)=>{const n=Math.floor(t/8),s=n*23%32,r=(i+s)%32;return t%8===0||r===0?.05:.35+De(i*3,t+n*40,e,n)*.55+Ce(Math.floor((i+s)/32),n)*.2}},parquet:{u:.45,size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(i/16),s=Math.floor(t/16),r=(n+s)%2,a=r?i%16:t%16,o=r?t%4:i%4;return a===0||o===0?.1:.4+De(r?i:t*3,r?t*3:i,e,3)*.5+r*.08}},wood:{size:32,ramp:"wood",fn:(i,t,e)=>{const n=Math.floor(t/8);return t%8===0?.05:.3+De(i*2,t+n*30,e,n+50)*.6}},darkwood:{size:32,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+De(i+n*30,t*2,e,n+60)*.6}},stage:{size:64,ramp:"darkwood",fn:(i,t,e)=>{const n=Math.floor(i/8);return i%8===0?.05:.3+De(i+n*30,t*3,e,n)*.6}},woodwall:{size:32,ramp:"darkwood",fn:(i,t,e)=>i%16===0||t%32===31?.02:i%16===1?.9:.35+De(i*2,t,e,5)*.5},velvet:{size:32,ramp:"velvet",fn:(i,t)=>.5+Math.sin(i/32*Math.PI*6)*.42+Ce(i,t)*.08},plaster:{size:64,ramp:"plaster",fn:(i,t,e)=>.3+De(i,t,e,7)*.6},wallpaper:{size:32,ramp:"velvet",dither:.1,fn:(i,t)=>{const e=i%16-8,n=(t+Math.floor(i/16)%2*8)%16-8,s=Math.abs(e)+Math.abs(n);return s<3?.75:s<5?.15:.35+Ce(i,t)*.1}},wallgreen:{size:32,ramp:"green",dither:.1,fn:(i,t)=>{const e=i%16-8,n=t%16-8,s=Math.abs(e)+Math.abs(n);return i%16===0?.1:s<3?.85:.4+Ce(i,t)*.15}},brick:{size:32,ramp:"brick",fn:(i,t,e)=>{const n=Math.floor(t/8),s=(i+n%2*8)%16;return t%8===0||s===0?[.3,zn.stone]:.3+Ce(Math.floor((i+n%2*8)/16),n)*.45+De(i,t,e,2)*.25}},stone:{size:32,ramp:"stone",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?.02:.3+Ce(Math.floor((i+n%2*9)/18),n,4)*.4+De(i,t,e,9)*.3}},gold:{size:16,ramp:"gold",fn:(i,t)=>.5+Math.sin((i+t)/16*Math.PI*2)*.35+Ce(i,t)*.15},carpet:{u:.55,size:32,ramp:"carpet",dither:.35,fn:(i,t)=>{const e=(i+t)%16,n=(i-t+64)%16;return(e===0||n===0)&&i%16<8==t%16<8?[.45,zn.gold]:i%16===8&&t%16===0?[.8,zn.gold]:.42+Ce(i,t)*.32}},metal:{size:32,ramp:"metal",fn:(i,t,e)=>i%32===0||t%32===0?.05:(i%32===3||i%32===28)&&(t%32===3||t%32===28)?.95:.45+De(i*4,t,e,11)*.35},black:{size:16,ramp:"black",fn:(i,t)=>.3+Ce(i,t)*.5},neon:{size:32,ramp:"neon",dither:.05,fn:(i,t)=>i%16===0||t%16===0?[.9,[[30,220,230]]]:.3+Ce(i,t)*.2},asphalt:{size:64,ramp:"asphalt",fn:(i,t,e)=>{const n=De(i,t,e,13);return n>.62?.95:.2+n*.6}},cobble:{size:32,ramp:"asphalt",fn:(i,t)=>{const e=Math.floor(t/8),n=(i+e%2*5)%10;return t%8===0||n===0?.02:.35+Ce(Math.floor((i+e%2*5)/10),e,6)*.6}},grass:{size:64,ramp:"grass",dither:.35,fn:(i,t,e)=>.2+De(i,t,e,17)*.6+(Ce(i,t)>.9?.25:0)},dirt:{size:64,ramp:"dirt",dither:.3,fn:(i,t,e)=>.2+De(i,t,e,19)*.7},paper:{size:64,ramp:"paper",dither:.3,fn:(i,t,e)=>.35+De(i,t,e,23)*.5+(Ce(i,t)>.97?-.3:0)},paperstone:{size:32,ramp:"paper",fn:(i,t,e)=>{const n=Math.floor(t/11),s=(i+n%2*9)%18;return t%11===0||s===0?[.4,zn.wood]:.3+Ce(Math.floor((i+n%2*9)/18),n,4)*.5}},white:{size:32,ramp:"white",fn:(i,t,e)=>.5+De(i,t,e,29)*.4},gloss:{size:32,ramp:"white",dither:.1,fn:(i,t)=>i%32===0||t%32===0?.1:.75+((i+t)%32<4?.25:0)},checker:{u:.5,size:32,ramp:"tileb",dither:0,fn:(i,t)=>(Math.floor(i/16)+Math.floor(t/16))%2?[.5,zn.white]:.5},concrete:{size:64,ramp:"concrete",fn:(i,t,e)=>.3+De(i,t,e,31)*.6},schoolfloor:{size:32,ramp:"schoolfloor",fn:(i,t,e)=>t%16===0||(i+Math.floor(t/16)*16)%32===0?.1:.45+De(i*3,t,e,37)*.45},schoolwall:{size:32,ramp:"white",dither:.15,fn:(i,t)=>.65+Ce(i,t)*.2},led:{size:16,ramp:"pink",dither:0,fn:(i,t)=>i%4===0||t%4===0?[.2,zn.black]:.3+Ce(Math.floor(i/4),Math.floor(t/4),2)*.7},sky:{size:64,ramp:"sky",dither:.4,fn:(i,t,e)=>.2+(1-t/e)*.6+De(i,t,e,41)*.2},night:{size:64,ramp:"night",dither:.4,fn:(i,t,e)=>Ce(i,t)>.992?[.9,zn.white]:.2+t/e*.5+De(i,t,e,43)*.2},blue:{size:32,ramp:"blue",fn:(i,t,e)=>.3+De(i,t,e,47)*.6},mirror:{size:32,ramp:"white",dither:.2,fn:(i,t)=>{const e=(i+t*2)%32;return e<3?.95:e<14?.5:.3}}};function Ye(i,t){const e=i+(t||"");let n=Us.get(e);if(n)return n;const s=q1[i];if(!s)return console.warn("[tex] нет текстуры",i),Ye("plaster");const r=s.size,a=document.createElement("canvas");a.width=a.height=r;const o=a.getContext("2d"),c=o.createImageData(r,r),h=t?pu(t.replace("#","")):null;for(let l=0;l<r;l++)for(let f=0;f<r;f++){let d=s.fn(f,l,r),m=zn[s.ramp],g;Array.isArray(d)?(g=d[0],m=d[1]):g=d,g+=(W1[(l&3)*4+(f&3)]/16-.5)*(s.dither??.22);let v=m[Math.max(0,Math.min(m.length-1,Math.floor(g*m.length)))];if(h&&m===zn[s.ramp]){const p=(v[0]*.3+v[1]*.6+v[2]*.1)/160;v=[Math.min(255,h[0]*p),Math.min(255,h[1]*p),Math.min(255,h[2]*p)]}const u=(l*r+f)*4;c.data[u]=v[0],c.data[u+1]=v[1],c.data[u+2]=v[2],c.data[u+3]=255}return o.putImageData(c,0,0),n=ea(a),n.unit=r/Sn*(s.u??1),Us.set(e,n),n}function Je(i,t,e,n){if(n&&Us.has(n))return Us.get(n);let s=document.createElement("canvas");s.width=i,s.height=t;const r=s.getContext("2d");r.imageSmoothingEnabled=!1;let a=!1,o=!1;const c=r.fillText.bind(r),h=r.strokeText.bind(r),l=r.getImageData.bind(r);if(r.fillText=(...d)=>(a=!0,c(...d)),r.strokeText=(...d)=>(a=!0,h(...d)),r.getImageData=(...d)=>(o=!0,l(...d)),e(r,i,t),a&&!o&&i*t<=512*512){const m=document.createElement("canvas");m.width=i*3,m.height=t*3;const g=m.getContext("2d");g.imageSmoothingEnabled=!1,g.scale(3,3),e(g,i,t),s=m}const f=ea(s,!1);return f.userData.lw=i,f.userData.lh=t,n&&Us.set(n,f),f}const Yc=new Map;function $1(i){let t=Yc.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=16;const n=e.getContext("2d"),s=new Ft(i),r=c=>{const h=s.clone();return c>0?h.lerp(new Ft(1,1,1),c):h.multiplyScalar(1+c),"#"+h.getHexString()};let a=i%997+1;const o=()=>(a=a*16807%2147483647)/2147483647;n.fillStyle=r(0),n.fillRect(0,0,16,16);for(let c=0;c<16;c++)for(let h=0;h<16;h++){const l=o(),f=[[0,8,2,10],[12,4,14,6],[3,11,1,9],[15,7,13,5]][c%4][h%4]/16;l<.1?(n.fillStyle=r(-.12),n.fillRect(h,c,1,1)):l>.93?(n.fillStyle=r(.08),n.fillRect(h,c,1,1)):c>11&&f<(c-11)/6&&(n.fillStyle=r(-.18),n.fillRect(h,c,1,1))}return n.fillStyle=r(.14),n.fillRect(0,0,16,1),n.fillStyle=r(-.28),n.fillRect(0,15,16,1),t=ea(e,!0),t.unit=1,Yc.set(i,t),t}let Er=null;function X1(){if(Er)return Er;const i=document.createElement("canvas");i.width=i.height=32;const t=i.getContext("2d");for(let e=0;e<32;e++)for(let n=0;n<32;n++){const s=Math.hypot(n-15.5,e-15.5)/16,r=Math.max(0,1-s),a=Math.round(r*r*6)/6;t.fillStyle=`rgba(255,255,255,${a*.9})`,t.fillRect(n,e,1,1)}return Er=ea(i,!1),Er}const Y1='"Pixelify Sans", monospace';function us(i,t,e,n,s={}){const r=s.size||8;i.font=`${r}px ${s.font||Y1}`,i.fillStyle=s.col||"#111",i.textAlign=s.align||"left",i.textBaseline="top";const a=[];for(const o of t.split(`
`)){if(!s.w){a.push(o);continue}let c="";for(const h of o.split(" ")){const l=c?c+" "+h:h;i.measureText(l).width>s.w&&c?(a.push(c),c=h):c=l}a.push(c)}return a.forEach((o,c)=>i.fillText(o,e,n+c*(s.lh||r+2))),a.length*(s.lh||r+2)}const R=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)};function j1(i,t="",e={}){const n=e.w?Math.max(40,Math.round(e.w*22)):40,s=e.h?Math.max(56,Math.round(e.h*22)):56;let r=0;for(const o of i)r=r*31+o.charCodeAt(0)>>>0;const a=e.motif||["mask","crown","rose","dancer","moon","curtain"][r%6];return Je(n,s,o=>{R(o,0,0,n,s,e.frame||"#3a2a14");const c=o.createLinearGradient(0,0,0,s),h=e.bg||["#e2d5ac","#f0e0c0","#d8c8a0","#e8d0c0"][r%4];c.addColorStop(0,h),c.addColorStop(1,"#a8906a"),o.fillStyle=c,o.fillRect(1,1,n-2,s-2),o.strokeStyle="rgba(90,12,24,.6)",o.strokeRect(3.5,3.5,n-7,s-7);const l=n/2,f=s*.38,d=e.fg||"#5a0c18";if(o.fillStyle=d,e.face)R(o,l-7,f-10,14,16,e.face),R(o,l-9,f-12,18,6,"#2a1512"),R(o,l-10,f-8,3,18,"#2a1512"),R(o,l+7,f-8,3,18,"#2a1512"),R(o,l-8,f+6,16,9,"#a3122a"),R(o,l-4,f-4,2,2,"#2a1512"),R(o,l+2,f-4,2,2,"#2a1512"),R(o,l-2,f+1,4,1,"#b3122e");else if(a==="mask")o.beginPath(),o.ellipse(l-4,f,7,9,-.2,0,7),o.fill(),o.fillStyle=h,o.fillRect(l-8,f-3,3,2),o.fillRect(l-2,f-3,3,2),o.fillStyle="#b08a2c",o.beginPath(),o.ellipse(l+5,f+3,6,8,.3,0,7),o.fill();else if(a==="crown")o.beginPath(),o.moveTo(l-10,f+6),o.lineTo(l-10,f-6),o.lineTo(l-5,f),o.lineTo(l,f-9),o.lineTo(l+5,f),o.lineTo(l+10,f-6),o.lineTo(l+10,f+6),o.fill();else if(a==="rose"){for(let v=0;v<5;v++)o.beginPath(),o.arc(l+Math.cos(v*1.26)*4,f+Math.sin(v*1.26)*4,5,0,7),o.fill();R(o,l-1,f+6,2,12,"#2e5038")}else if(a==="dancer")R(o,l-1,f-10,3,3,d),R(o,l-1,f-7,3,9,d),R(o,l-7,f-9,6,1,d),R(o,l+2,f-12,1,6,d),o.beginPath(),o.ellipse(l,f+2,8,2,0,0,7),o.fill(),R(o,l-1,f+3,1,9,d),R(o,l+1,f+3,5,1,d);else if(a==="moon")o.beginPath(),o.arc(l,f,9,0,7),o.fill(),o.fillStyle=h,o.beginPath(),o.arc(l+4,f-2,8,0,7),o.fill();else for(let v=0;v<6;v++)R(o,5+v*((n-10)/6),5,(n-10)/12,s*.55,v%2?"#8e1830":"#5a0c18");const m=s*.6,g=us(o,i,l,m,{size:e.size||8,col:d,w:n-6,align:"center"});t&&us(o,t,l,m+g+1,{size:6,col:"#3a2a14",w:n-6,align:"center",lh:7}),R(o,6,s-7,n-12,1,"rgba(58,42,20,.5)"),R(o,9,s-5,n-18,1,"rgba(58,42,20,.35)")},"poster|"+i+t+JSON.stringify(e))}const Go={tree:{w:48,h:72,draw:i=>{R(i,21,40,6,32,"#2c2019"),R(i,23,40,2,32,"#3a2b21");for(const[t,e,n,s,r]of[[6,8,36,30,"#1c2a16"],[2,18,44,20,"#26381b"],[10,4,26,14,"#324820"],[8,14,18,12,"#405a27"],[26,22,14,10,"#324820"]])R(i,t,e,n,s,r)}},pine:{w:40,h:80,draw:i=>{R(i,18,60,4,20,"#1e1612");for(let t=0;t<6;t++)R(i,16-t*3,6+t*10,8+t*6,12,t%2?"#16241d":"#1d3024"),R(i,17-t*3,6+t*10,3,2,"#263c2c")}},bush:{w:24,h:16,draw:i=>{R(i,2,5,20,11,"#26381b"),R(i,5,2,14,6,"#324820"),R(i,6,3,4,2,"#405a27")}},sakura:{w:48,h:72,draw:i=>{R(i,21,40,6,32,"#4a382a");for(const[t,e,n,s,r]of[[6,8,36,28,"#e888b8"],[2,18,44,18,"#f4a4cc"],[10,4,26,14,"#f8c0dc"],[8,14,12,8,"#fde0ee"],[28,24,12,8,"#d870a4"]])R(i,t,e,n,s,r)}},lamp:{w:12,h:44,draw:i=>{R(i,5,10,2,32,"#2a2a2e"),R(i,2,42,8,2,"#2a2a2e"),R(i,1,2,10,9,"#f4d890"),R(i,2,1,8,1,"#c8a850"),R(i,3,4,6,5,"#fff4c8")}},streetlamp:{w:14,h:64,draw:i=>{R(i,6,10,2,54,"#1a1a1e"),R(i,3,62,8,2,"#1a1a1e"),R(i,2,2,10,9,"#f0f0d8"),R(i,1,0,12,2,"#1a1a1e")}},chair:{w:14,h:22,draw:i=>{R(i,2,0,10,12,"#721022"),R(i,1,0,1,22,"#86641c"),R(i,12,0,1,22,"#86641c"),R(i,1,12,12,3,"#8e1830"),R(i,3,2,8,8,"#8e1830")}},plant:{w:16,h:28,draw:i=>{R(i,4,20,8,8,"#7a4a2a"),R(i,7,8,2,12,"#2e5038"),R(i,2,4,5,10,"#3a6244"),R(i,9,2,5,12,"#48745a"),R(i,5,0,4,8,"#3a6244")}},bust:{w:16,h:30,draw:i=>{R(i,2,20,12,10,"#69655e"),R(i,1,19,14,2,"#807b72"),R(i,4,4,8,10,"#cabda8"),R(i,3,14,10,5,"#bcae98"),R(i,4,2,8,3,"#ad9d88"),R(i,6,8,1,1,"#555"),R(i,9,8,1,1,"#555"),R(i,6,11,4,1,"#8a7a68")}},bustfun:{w:16,h:30,draw:i=>{Go.bust.draw(i),R(i,5,7,3,3,"#fff"),R(i,9,7,3,3,"#fff"),R(i,6,8,1,1,"#000"),R(i,10,8,1,1,"#000"),R(i,5,11,6,1,"#a22"),R(i,6,12,4,1,"#a22"),R(i,3,0,10,3,"#e84a6f"),R(i,6,-1,4,2,"#f2c230")}},masks:{w:30,h:14,draw:i=>{for(const[t,e,n]of[[0,"#f2c230",0],[10,"#6a8ad0",1],[20,"#d86a8a",2]])R(i,t+1,1,8,11,e),R(i,t+2,0,6,1,e),R(i,t+2,12,6,1,e),R(i,t+2,4,2,2,"#111"),R(i,t+6,4,2,2,"#111"),n===0&&(R(i,t+2,8,6,1,"#111"),R(i,t+3,9,4,1,"#111")),n===1&&(R(i,t+3,8,4,1,"#111"),R(i,t+2,9,1,1,"#111"),R(i,t+7,9,1,1,"#111")),n===2&&R(i,t+3,9,4,1,"#111")}},ladder:{w:20,h:60,draw:i=>{R(i,2,0,2,60,"#5a4029"),R(i,16,0,2,60,"#5a4029");for(let t=0;t<9;t++)R(i,2,4+t*6,16,2,"#6e5133")}},bridgecut:{w:72,h:30,draw:i=>{R(i,0,8,72,5,"#5a4029");for(let t=0;t<9;t++)R(i,2+t*8,0,3,30,"#45301f");R(i,0,0,72,3,"#6e5133"),R(i,30,13,12,17,"#45301f")}},marionette:{w:16,h:30,draw:i=>{R(i,2,0,12,2,"#5a4029"),R(i,7,0,2,3,"#5a4029");for(const t of[3,8,12])R(i,t,2,1,8,"#ddd");R(i,5,8,6,6,"#e8d8c0"),R(i,5,8,3,6,"#f4ecd8"),R(i,6,10,1,1,"#111"),R(i,9,10,1,1,"#111"),R(i,5,14,6,8,"#a3122a"),R(i,5,14,3,8,"#2f7f82"),R(i,3,14,2,7,"#e8d8c0"),R(i,11,14,2,7,"#e8d8c0"),R(i,5,22,2,7,"#333"),R(i,9,22,2,7,"#333"),R(i,6,15,4,2,"#f4d060")}},bookstand:{w:16,h:28,draw:i=>{R(i,7,10,2,16,"#2a1c14"),R(i,3,26,10,2,"#2a1c14"),R(i,1,4,14,7,"#4a0c14"),R(i,2,5,5,5,"#e2d5ac"),R(i,9,5,5,5,"#e2d5ac"),R(i,7,4,2,7,"#86641c")}},candle:{w:6,h:16,draw:i=>{R(i,2,6,2,8,"#e8e0c8"),R(i,1,14,4,2,"#86641c"),R(i,2,2,2,4,"#ffd060"),R(i,2,1,1,2,"#fff4c8")}},flowerpot:{w:12,h:16,draw:i=>{R(i,2,9,8,7,"#8a4a2a"),R(i,1,8,10,2,"#9a5a3a"),R(i,5,3,2,6,"#2e5038"),R(i,3,0,6,4,"#d86a8a"),R(i,5,1,2,2,"#f2c230")}},umbrella:{w:22,h:26,draw:i=>{R(i,10,6,2,18,"#333"),R(i,8,24,3,2,"#333"),R(i,1,4,20,5,"#e84a6f"),R(i,4,1,14,3,"#f06a88"),R(i,9,0,4,1,"#f06a88");for(const t of[1,7,13,19])R(i,t,9,2,1,"#c03050")}},cake:{w:26,h:26,draw:i=>{R(i,2,14,22,10,"#f4e8d8"),R(i,2,18,22,2,"#e888b8"),R(i,4,10,18,5,"#fff8f0"),R(i,0,24,26,2,"#d4ae48");for(let t=0;t<9;t++)R(i,3+t*2+t%2,5+t%2*2,1,6,["#5fd0c8","#f2c230","#e84a6f"][t%3]),R(i,3+t*2+t%2,3+t%2*2,1,2,"#ffd060");for(let t=0;t<9;t++)R(i,4+t*2,11,1,3,["#f2c230","#e84a6f","#5fd0c8"][t%3]),R(i,4+t*2,9,1,2,"#ffd060")}},cakeout:{w:26,h:26,draw:i=>{Go.cake.draw(i);for(let t=0;t<9;t++)R(i,3+t*2+t%2,3+t%2*2,1,2,"#888"),R(i,4+t*2,9,1,2,"#888")}},bouquet:{w:24,h:30,draw:i=>{R(i,8,16,8,12,"#e2d5ac"),R(i,10,28,4,2,"#a3122a"),R(i,9,20,6,2,"#a3122a");const t=["#e84a6f","#f2c230","#f8c0dc","#fff","#c03050","#ff9a3c"];for(let e=0;e<14;e++){const n=2+e*7%18,s=1+e*5%13;R(i,n,s,5,5,t[e%6]),R(i,n+2,s+2,1,1,"#5a4010")}R(i,4,13,3,4,"#2e5038"),R(i,17,12,3,5,"#3a6244")}},mic:{w:8,h:34,draw:i=>{R(i,3,6,2,26,"#555"),R(i,1,32,6,2,"#333"),R(i,2,0,4,6,"#888"),R(i,2,1,4,1,"#bbb")}},speaker:{w:16,h:26,draw:i=>{R(i,0,0,16,26,"#18181c"),R(i,1,1,14,24,"#26262c"),R(i,4,3,8,8,"#111"),R(i,6,5,4,4,"#444"),R(i,3,13,10,10,"#111"),R(i,6,16,4,4,"#444")}},stagelight:{w:14,h:16,draw:i=>{R(i,2,2,10,9,"#222"),R(i,4,11,6,3,"#fff4c8"),R(i,6,0,2,2,"#444"),R(i,1,5,1,3,"#555"),R(i,12,5,1,3,"#555")}},stall:{w:56,h:52,draw:i=>{R(i,2,14,2,38,"#5a4029"),R(i,52,14,2,38,"#5a4029");for(let t=0;t<7;t++)R(i,t*8,2,8,12,t%2?"#e84a6f":"#fff8f0");for(let t=0;t<7;t++)R(i,t*8+1,14,6,2,t%2?"#c03050":"#ddd");R(i,2,34,52,18,"#6e5133"),R(i,2,32,52,3,"#98764d");for(let t=0;t<5;t++)R(i,8+t*9,26,5,6,["#f2c230","#e84a6f","#5fd0c8","#f8c0dc","#ff9a3c"][t]);for(let t=0;t<6;t++)R(i,5+t*9,17,3,4,["#f2c230","#e84a6f"][t%2])}},lantern:{w:10,h:14,draw:i=>{R(i,4,0,2,2,"#333"),R(i,1,2,8,10,"#e84a6f"),R(i,3,3,4,8,"#ffd060"),R(i,2,12,6,1,"#333")}},gear:{w:14,h:14,draw:i=>{R(i,3,3,8,8,"#b08a2c"),R(i,5,0,4,14,"#b08a2c"),R(i,0,5,14,4,"#b08a2c"),R(i,5,5,4,4,"#3a2a14"),R(i,1,1,3,3,"#86641c"),R(i,10,1,3,3,"#86641c"),R(i,1,10,3,3,"#86641c"),R(i,10,10,3,3,"#86641c")}},key:{w:12,h:8,draw:i=>{R(i,0,1,5,6,"#d4ae48"),R(i,1,3,2,2,"#000"),R(i,5,3,7,2,"#d4ae48"),R(i,9,5,1,2,"#d4ae48"),R(i,11,5,1,2,"#d4ae48"),i.clearRect(1,3,2,2)}},weight:{w:14,h:14,draw:i=>{R(i,1,4,12,10,"#484e59"),R(i,3,2,8,3,"#5e6673"),R(i,5,0,4,3,"#343841"),R(i,2,5,2,8,"#78818f")}},basket:{w:18,h:16,draw:i=>{R(i,1,6,16,10,"#8a6a3a");for(let t=0;t<4;t++)R(i,1,7+t*3,16,1,"#6a4a2a");R(i,0,5,18,2,"#a88a4a"),R(i,2,0,1,6,"#f0d98a"),R(i,15,0,1,6,"#f0d98a")}},hook:{w:10,h:12,draw:i=>{R(i,3,0,4,3,"#484e59"),R(i,4,3,2,5,"#78818f"),R(i,4,8,5,2,"#78818f"),R(i,8,6,1,2,"#78818f")}},slot:{w:16,h:30,draw:i=>{R(i,0,0,16,30,"#3a1a5a"),R(i,1,1,14,6,"#ff4fa0"),R(i,2,9,12,8,"#111");for(let t=0;t<3;t++)R(i,3+t*4,10,3,6,["#f2c230","#40e0d0","#f2c230"][t]);R(i,2,19,12,2,"#40e0d0"),R(i,4,23,8,5,"#222")}},holo:{w:24,h:30,draw:i=>{i.globalAlpha=.7,R(i,0,0,24,30,"#0a3a4a");for(let t=0;t<8;t++)R(i,2,2+t*3.5,4+t*7%16,1,"#40e0d0");R(i,14,16,8,10,"#40e0d0"),i.globalAlpha=1}},typewriter:{w:16,h:10,draw:i=>{R(i,1,4,14,6,"#2a2a2e"),R(i,3,0,10,4,"#e8e8e8");for(let t=0;t<5;t++)R(i,3+t*2,6,1,1,"#aaa");for(let t=0;t<5;t++)R(i,4+t*2,8,1,1,"#aaa")}},cam:{w:12,h:10,draw:i=>{R(i,0,2,12,8,"#222"),R(i,2,0,4,2,"#333"),R(i,4,3,5,5,"#557"),R(i,5,4,3,3,"#9bd"),R(i,10,3,1,1,"#f33")}},filmcam:{w:22,h:36,draw:i=>{R(i,4,6,14,10,"#2a2a2e"),R(i,0,8,4,6,"#444"),R(i,6,0,5,6,"#3a3a40"),R(i,12,1,5,5,"#3a3a40"),R(i,10,16,2,6,"#555"),R(i,10,22,1,14,"#555"),R(i,6,22,1,14,"#555"),R(i,15,22,1,14,"#555")}},suitcase:{w:16,h:12,draw:i=>{R(i,0,2,16,10,"#6a6a6a"),R(i,6,0,4,2,"#333"),R(i,0,6,16,1,"#333"),R(i,3,5,2,3,"#bbb"),R(i,11,5,2,3,"#bbb")}},book:{w:10,h:8,draw:i=>{R(i,0,1,10,7,"#4a0c14"),R(i,1,0,8,2,"#e2d5ac"),R(i,3,3,4,2,"#d4ae48")}},wheel:{w:20,h:20,draw:i=>{R(i,2,2,16,16,"#5a4029"),R(i,6,0,8,20,"#5a4029"),R(i,0,6,20,8,"#5a4029"),R(i,5,5,10,10,"#2a1c14"),R(i,9,2,2,16,"#98764d"),R(i,2,9,16,2,"#98764d")}},hoverbike:{w:36,h:18,draw:i=>{R(i,2,8,32,6,"#26262e"),R(i,6,4,14,5,"#ff9a3c"),R(i,20,2,6,6,"#343841"),R(i,0,10,4,3,"#40e0d0"),R(i,4,15,28,2,"#40e0d0"),R(i,28,6,6,3,"#78818f")}},horse:{w:36,h:30,draw:i=>{R(i,6,10,22,10,"#f0f0f0"),R(i,24,2,8,12,"#f0f0f0"),R(i,30,4,5,5,"#e0e0e0"),R(i,8,20,3,10,"#ddd"),R(i,22,20,3,10,"#ddd"),R(i,2,10,4,10,"#e8c36a"),R(i,23,0,3,10,"#e8c36a"),R(i,31,5,1,1,"#111"),R(i,10,9,12,3,"#3a6ab0")}},spotcone:{w:4,h:4,draw:i=>R(i,0,0,4,4,"#fff")}};function K1(i){const t=Go[i];if(!t)throw new Error("Нет реквизита: "+i);const e=Je(t.w,t.h,n=>t.draw(n),"prop|"+i);return e.pw=t.w,e.ph=t.h,e}const Ht=i=>new Zn(i),we={gold:()=>Ht({map:Ye("gold")}),wood:i=>Ht({map:Ye("darkwood"),color:i||16777215}),velvet:(i=16777215)=>Ht({map:Ye("velvet"),color:i})};function Rt(i,t,e,n,s,r,a,o,c=!0){const h=new lt(new Ze(t,e,n),o);return h.position.set(s,r,a),h.castShadow=c,h.receiveShadow=!0,i.add(h),h}const jc=i=>parseInt(i.replace("#",""),16);function Z1(i,t){return Je(16,32,e=>{const n=new Ft(i),s=a=>{const o=n.clone();return o.lerp(new Ft(1,.85,.65),a),"#"+o.getHexString()},r=a=>"#"+n.clone().multiplyScalar(a).getHexString();e.fillStyle=s(.22),e.fillRect(0,0,16,32);for(let a=0;a<32;a+=2)e.fillStyle=r(.92),e.fillRect(a*7%13,a,3,1);for(const[a,o,c,h]of[[2,2,12,12],[2,17,12,13]])e.fillStyle=r(.7),e.fillRect(a,o,c,h),e.fillStyle=s(.34),e.fillRect(a+1,o+1,c-2,h-2),e.fillStyle=s(.48),e.fillRect(a+1,o+1,c-2,1),e.fillRect(a+1,o+1,1,h-2),e.fillStyle=r(.8),e.fillRect(a+1,o+h-2,c-2,1);e.fillStyle="#e8c860",e.fillRect(t?1:13,15,2,2),e.fillStyle="#fff4b0",e.fillRect(t?1:13,15,1,1),e.fillStyle=r(.5),e.fillRect(0,31,16,1)},"leaf"+i+(t?"d":""))}function J1(i,t,e,n,s=!1,r){const a=new le,o=we.wood(),c=Ht({map:Z1(e,s)}),h=we.gold();Rt(a,i+.5,.3,.3,0,t+.15,.12,o),Rt(a,i+.8,.12,.38,0,t+.36,.14,h),Rt(a,i*.5,.35,.2,0,t+.55,.1,o);for(const d of[-1,1])Rt(a,.25,t,.3,d*(i/2+.12),t/2,.12,o),Rt(a,.32,.3,.36,d*(i/2+.12),.15,.14,o);const l=s?[-1,1]:[0],f=s?i/2-.02:i-.04;for(const d of l){const m=new le;m.name="leaf",m.position.set(s?d*(i/2-.01):-i/2+.02,0,.04),a.add(m);const g=s?-d*f/2:f/2;Rt(m,f,t-.04,.1,g,t/2,0,c);for(const[u,p]of[[t*.72,t*.36],[t*.27,t*.38]])Rt(m,f-.3,p,.05,g,u,.07,c),Rt(m,f-.46,p-.16,.05,g,u,.1,Ht({map:Ye("wood"),color:jc(e)|2105376}));const v=new lt(new dn(.07,8,6),h);v.position.set(s?g-d*(f/2-.15):g+f/2-.18,t*.48,.14),m.add(v)}if(n){const d=Math.max(48,Math.ceil(n.length*5.4+12)),m=Je(d,14,u=>{u.fillStyle="#e8d8b0",u.fillRect(0,0,d,14),u.strokeStyle="#86641c",u.strokeRect(.5,.5,d-1,13),us(u,n,d/2,3,{size:8,col:"#3a1a14",align:"center"})},"dsign"+n),g=Math.min(d*.03,i+1.4),v=new lt(new be(g,.42),Ht({map:m,emissive:2760720}));v.position.set(0,t+.15,.3),a.add(v)}{const d=new lt(new Ze(i-.2,.04,.04),new Re({color:16762992}));d.position.set(0,.03,.16),a.add(d)}if(r){const d=new Is(jc(r),3,4,1.6);d.position.set(0,t*.7,.8),a.add(d)}return a}function Q1(i){const t=i.children.filter(s=>s.name==="leaf");if(!t.length)return;let e=0;const n=()=>{e+=1/60;const s=Math.min(1,e/.4);t.forEach((r,a)=>{r.rotation.y=(t.length>1?a?-1:1:-1)*s*1.2}),s<1&&requestAnimationFrame(n)};n()}function Wv(i,t,e={}){const n=e.w||2,s=e.h||2.8,r=e.y??3,a=new le,o=we.wood(),c=we.gold(),h=Je(32,44,u=>{const p=u.createLinearGradient(0,0,0,44);if(e.night!==!1?(p.addColorStop(0,"#0c1430"),p.addColorStop(1,"#2a3a6a")):(p.addColorStop(0,"#6a9ad8"),p.addColorStop(1,"#cfe0f0")),u.fillStyle=p,u.fillRect(0,0,32,44),e.night!==!1){u.fillStyle="#fff";for(let _=0;_<14;_++)u.fillRect(_*37%32,_*17%26,1,1);u.fillStyle="#f0e8c8",u.beginPath(),u.arc(24,8,3,0,7),u.fill()}u.fillStyle="#1a1830";for(let _=0;_<8;_++){const y=6+_*7%12;u.fillRect(_*4,44-y,4,y),u.fillStyle=_%3?"#e8c060":"#1a1830",u.fillRect(_*4+1,44-y+2,1,1),u.fillStyle="#1a1830"}},"winview"+(e.night!==!1)),l=new lt(new be(n,s),new Re({map:h}));l.position.set(0,0,-.18),a.add(l),Rt(a,n+.3,.18,.4,0,s/2+.05,0,o),Rt(a,n+.5,.12,.55,0,-s/2-.06,.08,o),Rt(a,n+.6,.06,.6,0,-s/2-.14,.1,c);for(const u of[-1,1])Rt(a,.16,s+.2,.4,u*(n/2+.06),0,0,o);Rt(a,.08,s,.08,0,0,-.12,o);for(const u of[-s/6,s/6+.2])Rt(a,n,.07,.08,0,u,-.12,o);if(e.arch!==!1){const u=new lt(new Gs(n/2+.06,.1,6,16,Math.PI),o);u.position.set(0,s/2+.05,0),a.add(u);const p=new lt(new qs(n/2,16,0,Math.PI),new Re({map:h}));p.position.set(0,s/2+.05,-.18),a.add(p)}if(e.curtains!==!1)for(const u of[-1,1]){const p=new be(.9,s+1.2,8,1),_=p.attributes.position;for(let I=0;I<_.count;I++)_.setZ(I,Math.sin(_.getX(I)*14)*.06);p.computeVertexNormals();const y=new lt(p,Ht({map:Ye("velvet"),side:Ie}));y.position.set(u*(n/2+.35),.1,.32),a.add(y);const b=new lt(new Gs(.16,.03,4,10),c);b.position.set(u*(n/2+.35),-.3,.4),a.add(b)}Rt(a,n+2.2,.1,.12,0,s/2+.6,.38,c);const f=e.wall||"n",d=f==="w"?-1:1;if(f==="n"){const u=i.wallSlot("n",t,n+2,r,s+1.4,{fixed:!0,obj:a});a.position.set(u,r,-i.d/2+.2)}else{const u=i.wallSlot(f,t,n+2,r,s+1.4,{fixed:!0,obj:a});a.position.set(d*(i.w/2-.2),r,u),a.rotation.y=-d*Math.PI/2}i.room.group.add(a);const m=new cu(e.night!==!1?9087208:16773328,e.night!==!1?14:30,14,.5,.6,1.2),g=new P(0,.6,.5).applyEuler(a.rotation).add(a.position);m.position.copy(g);const v=new P(0,-r,3.2).applyEuler(a.rotation).add(a.position);return m.target.position.copy(v),i.room.group.add(m,m.target),a}function qv(i,t,e,n,s,r,a={}){const o=new le,c=we.gold(),h=new lt(new be(s,r),new lu({map:Je(24,32,f=>{const d=f.createLinearGradient(0,0,24,32);d.addColorStop(0,"#a89a90"),d.addColorStop(.5,"#5e524c"),d.addColorStop(1,"#847468"),f.fillStyle=d,f.fillRect(0,0,24,32),f.fillStyle="rgba(255,240,220,.22)",f.fillRect(3,1,2,30),f.fillRect(7,1,1,30)},"mirglass2"),metalness:.3,roughness:.25,emissive:5787722,emissiveIntensity:.55}));h.material.emissiveMap=h.material.map,h.position.z=.03,o.add(h);for(const[f,d,m,g]of[[s+.3,.16,0,r/2+.08],[s+.3,.16,0,-r/2-.08],[.16,r,-s/2-.08,0],[.16,r,s/2+.08,0]])Rt(o,f,d,.14,m,g,.05,c);const l=new lt(new Gs(.25,.05,6,12,Math.PI),c);if(l.position.set(0,r/2+.16,.06),o.add(l),a.bulbs){const f=Ht({color:16774360,emissive:16760944}),d=Math.max(3,Math.round(r/.4));for(const m of[-1,1])for(let g=0;g<d;g++){const v=new lt(new dn(.08,8,6),f);v.position.set(m*(s/2+.08),-r/2+.2+g*(r-.4)/(d-1),.15),o.add(v)}i.light(t,e,n+.8,16767392,5,6,{flicker:.04})}return o.position.set(t,e,n),a.ry&&(o.rotation.y=a.ry),i.room.group.add(o),o}function $v(i,t,e,n={}){const s=n.w||1.8,r=n.h||3.2,a=.9,o=new le,c=Ht({map:Ye("darkwood"),color:n.col??13146736}),h=we.gold();Rt(o,s,r,a,0,r/2,0,c),Rt(o,s+.2,.18,a+.15,0,r+.09,0,c),Rt(o,s+.3,.06,a+.2,0,r+.2,0,Ht({color:11569724})),Rt(o,s+.1,.15,a+.05,0,.08,0,c);for(const d of[-1,1]){Rt(o,s/2-.15,r-.6,.04,d*s/4,r/2,a/2+.01,Ht({map:Ye("darkwood"),color:(n.col??13146736)-1052688}));const m=new lt(new dn(.05,6,6),h);m.position.set(d*.12,r/2,a/2+.06),o.add(m)}o.position.set(t,0,e),n.ry&&(o.rotation.y=n.ry),i.room.group.add(o);const l=n.ry?a/2:s/2,f=n.ry?s/2:a/2;return i.collider(t-l,e-f,t+l,e+f),o}function Xv(i,t,e,n={}){const s=n.w||2.4,r=n.h||3.6,a=.6,o=n.shelves||5,c=new le,h=we.wood();Rt(c,s,r,.06,0,r/2,-a/2,h);for(const y of[-1,1])Rt(c,.08,r,a,y*s/2,r/2,0,h);for(let y=0;y<=o;y++)Rt(c,s,.07,a,0,.1+y*(r-.2)/o,0,h,!1);const l=[9312304,2771514,3816042,11569708,5913122,6957642,14207136],f=Ht({color:16777215}),d=o*Math.floor(s/.09),m=new fl(new Ze(.08,1,a-.15),f,d),g=new se,v=new Ft;let u=0;for(let y=0;y<o;y++){let b=-s/2+.1;for(;b<s/2-.15&&u<d;){const I=.32+u*37%13/60,A=.06+u*7%4/100,w=u%11===0?.25:0;g.makeRotationZ(w),g.scale(new P(A/.08,I,1)),g.setPosition(b+A/2,.14+y*(r-.2)/o+I/2,.02),m.setMatrixAt(u,g),m.setColorAt(u,v.setHex(l[(u*3+y)%l.length])),b+=A+.005+(u%9===0?.12:0),u++}}m.count=u,c.add(m),c.position.set(t,0,e),n.ry&&(c.rotation.y=n.ry),i.room.group.add(c);const p=n.ry?a/2:s/2,_=n.ry?s/2:a/2;return i.collider(t-p,e-_,t+p,e+_),c}function Yv(i,t,e,n={}){const s=n.w||2.8,r=new le,a=we.velvet(n.col??16777215);we.wood();const o=we.gold();Rt(r,s,.45,1,0,.45,0,a),Rt(r,s,1.1,.25,0,.95,-.4,a);for(const c of[-1,1]){Rt(r,.25,.75,1,c*(s/2-.12),.6,0,a);const h=new lt(new ee(.16,.16,1,10),a);h.rotation.x=Math.PI/2,h.position.set(c*(s/2-.12),1,0),r.add(h)}for(const c of[-1,1])for(const h of[-1,1]){const l=new lt(new ee(.05,.03,.25,6),o);l.position.set(c*(s/2-.15),.12,h*.38),r.add(l)}for(let c=0;c<Math.floor(s/.9);c++)Rt(r,.8,.12,.9,-s/2+.6+c*.85,.72,.03,a);if(Rt(r,s,.05,.05,0,1.5,-.4,o),r.position.set(t,0,e),n.ry&&(r.rotation.y=n.ry),i.room.group.add(r),n.solid!==!1){const c=n.ry?.5:s/2,h=n.ry?s/2:.5;i.collider(t-c,e-h,t+c,e+h)}return r}function jv(i,t,e,n={}){const s=new le,r=we.velvet(n.col??16777215),a=we.gold();Rt(s,1,.4,.9,0,.45,0,r),Rt(s,1,1,.2,0,.95,-.35,r);for(const o of[-1,1])Rt(s,.18,.55,.9,o*.48,.65,0,r);Rt(s,1.1,.06,.08,0,1.47,-.35,a);for(const o of[-1,1])for(const c of[-1,1]){const h=new lt(new ee(.04,.03,.26,6),a);h.position.set(o*.4,.13,c*.35),s.add(h)}return s.position.set(t,0,e),s.rotation.y=n.ry||0,i.room.group.add(s),i.collider(t-.5,e-.45,t+.5,e+.45),s}function Kv(i,t,e,n={}){const s=new le,r=we.wood(),a=Je(16,32,o=>{o.fillStyle=n.col||"#c8a888",o.fillRect(0,0,16,32),o.fillStyle="rgba(120,40,40,.45)";for(let c=0;c<7;c++)o.fillRect(3+c*5%9,3+c*4,4,2),o.fillRect(5+c*3%7,4+c*4,1,4)},"scr"+(n.col||""));for(let o=0;o<3;o++){const c=new le;c.position.set((o-1)*.72,0,o%2*.22),c.rotation.y=(o-1)*.35,Rt(c,.7,2.6,.05,0,1.4,0,Ht({map:a})),Rt(c,.76,.08,.08,0,2.72,0,r),Rt(c,.76,.08,.08,0,.08,0,r);for(const h of[-1,1])Rt(c,.06,2.72,.08,h*.36,1.36,0,r);s.add(c)}return s.position.set(t,0,e),s.rotation.y=n.ry||0,i.room.group.add(s),i.collider(t-1.1,e-.4,t+1.1,e+.4),s}function Zv(i,t,e,n=[3091002,12852794]){const s=new le,r=Ht({color:2759700}),a=new lt(new ee(.05,.06,3,8),r);a.position.y=1.5,s.add(a);const o=new lt(new ee(.4,.45,.08,12),r);o.position.y=.04,s.add(o),n.forEach((l,f)=>{const d=f*2.1,m=new lt(new ee(.18,.32,1.6,8,1,!0),Ht({color:l,side:Ie}));m.position.set(Math.cos(d)*.22,2.05,Math.sin(d)*.22),s.add(m)});const c=new lt(new ee(.22,.22,.25,12),Ht({color:1710622}));c.position.y=3.05,s.add(c);const h=new lt(new ee(.38,.38,.03,14),Ht({color:1710622}));return h.position.y=2.93,s.add(h),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-.35,e-.35,t+.35,e+.35),s}function Jv(i,t,e,n=0){const s=new le,r=we.wood(),a=we.gold();we.velvet(),Rt(s,3,1.2,1.4,0,.6,0,r),Rt(s,3.2,.1,1.6,0,1.25,.05,a),Rt(s,3,1.8,.12,0,2.2,-.6,r);for(const l of[-1,1])Rt(s,.15,1.8,1.4,l*1.42,2.2,0,r);Rt(s,3.4,.3,1.7,0,3.25,0,r),Rt(s,3.5,.08,1.8,0,3.42,0,a);const o=new le;for(let l=0;l<9;l++)Rt(o,.03,1.4,.03,-1.2+l*.3,2,.65,a,!1);s.add(o),Rt(s,.9,.5,.04,0,1.55,.67,Ht({color:1707530}));const c=new lt(new be(2.6,.5),Ht({map:Je(64,12,l=>{l.fillStyle="#5a0c18",l.fillRect(0,0,64,12),us(l,"К А С С А",32,2,{size:8,col:"#f0d478",align:"center"})},"kassa3d")}));c.position.set(0,3.25,.87),s.add(c);const h=new lt(new dn(.1,8,6,0,Math.PI*2,0,Math.PI/2),a);return h.position.set(.9,1.3,.4),s.add(h),s.position.set(t,0,e),s.rotation.y=n,i.room.group.add(s),i.collider(t-1.6,e-.8,t+1.6,e+.8),s}function Qv(i,t,e,n=6){const s=new le,r=we.wood(),a=we.gold();Rt(s,n,1.15,.7,0,.58,.9,r),Rt(s,n+.2,.08,.9,0,1.2,.9,a);for(const h of[-.4,-1.3]){Rt(s,n-.4,.05,.05,0,2.6,h,a,!1);const l=Math.floor((n-.6)/.32),f=new fl(new Ze(.22,1.5,.55),Ht({color:16777215}),l),d=new se,m=new Ft,g=[2763314,5913130,3820122,6957610,4868666,1976862,5921370,8018490];for(let v=0;v<l;v++)d.makeTranslation(-n/2+.45+v*.32,1.85-v%3*.08,h),f.setMatrixAt(v,d),f.setColorAt(v,m.setHex(g[(v*5+(h<-1?3:0))%g.length]));s.add(f)}const o=new lt(new be(n-.6,.6),Ht({map:Je(64,8,h=>{h.fillStyle="#3a2414",h.fillRect(0,0,64,8);for(let l=0;l<16;l++)h.fillStyle="#d4ae48",h.fillRect(2+l*4,2,2,4)},"tags"),transparent:!0}));o.position.set(0,3.2,-1.6),s.add(o);const c=new lt(new be(2.4,.45),Ht({map:Je(64,12,h=>{h.fillStyle="#2a1408",h.fillRect(0,0,64,12),us(h,"ГАРДЕРОБ",32,2,{size:8,col:"#f0d478",align:"center"})},"gardsign")}));return c.position.set(0,1.62,1.27),c.rotation.x=-.2,s.add(c),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e-1.8,t+n/2,e+1.25),s}function t2(i,t,e,n=7){const s=new le,r=we.wood(),a=we.gold();Rt(s,n,1.2,.9,0,.6,1.1,r),Rt(s,n+.2,.1,1.1,0,1.25,1.1,Ht({map:Ye("stone"),color:14207160}));const o=new lt(new ee(.04,.04,n,6),a);o.rotation.z=Math.PI/2,o.position.set(0,.25,1.62),s.add(o);for(let A=0;A<3;A++)Rt(s,n-.6,.06,.4,0,1.6+A*.7,-.9,r);const c=Math.floor((n-.8)/.22)*3,h=new fl(new ee(.06,.07,.42,6),Ht({color:16777215,transparent:!0,opacity:.9}),c),l=new se,f=new Ft,d=[2779706,9054762,14207120,3816042,11565610,15261904];for(let A=0;A<c;A++){const w=A%3,L=Math.floor(A/3);l.makeTranslation(-n/2+.5+L*.22,1.85+w*.7,-.9),h.setMatrixAt(A,l),h.setColorAt(A,f.setHex(d[A*7%d.length]))}s.add(h);const m=new lt(new be(n-.8,2.2),new lu({color:3811876,metalness:.8,roughness:.2}));m.position.set(0,2.5,-1.12),s.add(m);const g=Ht({color:15267071,transparent:!0,opacity:.45}),v=1.3,u=1.15,p=new le;p.position.set(-n/2+.8,v,u);const _=new lt(new ee(.22,.28,.55,12),a);_.position.y=.42,p.add(_);const y=new lt(new ee(.1,.18,.15,10),a);y.position.y=.08,p.add(y);const b=new lt(new dn(.12,8,6),a);b.position.y=.78,p.add(b),Rt(p,.18,.04,.04,.3,.3,0,a),s.add(p);const I=new le;I.position.set(n/2-.9,v,u),Rt(I,.6,.3,.45,0,.15,0,Ht({color:5917242})),Rt(I,.5,.22,.06,0,.42,-.12,a),Rt(I,.4,.06,.3,0,.32,.05,Ht({color:14209216})),s.add(I);for(const A of[-n/4,n/4-.4]){const w=new lt(new ee(.32,.32,.04,14),Ht({color:16052456}));w.position.set(A,v+.02,u),s.add(w);for(let Y=0;Y<3;Y++){const x=new lt(new ee(.08,.09,.12,8),Ht({color:[14183050,9067066,15786144][Y]}));x.position.set(A-.14+Y*.14,v+.1,u+Y%2*.08),s.add(x)}const L=new lt(new dn(.34,12,8,0,Math.PI*2,0,Math.PI/2),g);L.position.set(A,v+.04,u),s.add(L)}for(let A=0;A<8;A++){const w=new lt(new ee(.05,.02,.22,8),g);w.position.set(-.9+A*.24,v+.11,u-.25),s.add(w)}return s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e+.6,t+n/2,e+1.6),i.collider(t-n/2,e-1.2,t+n/2,e-.6),s}function e2(i,t,e){const n=new le,s=we.gold(),r=new lt(new ee(.55,.55,.06,16),Ht({map:Ye("stone"),color:15260880}));r.position.y=1,n.add(r);const a=new lt(new ee(.05,.05,1,8),s);a.position.y=.5,n.add(a);const o=new lt(new ee(.3,.35,.05,12),s);o.position.y=.03,n.add(o);const c=new lt(new ee(.06,.05,.1,8),Ht({color:16052456}));c.position.set(.15,1.08,.1),n.add(c);const h=new lt(new ee(.05,.02,.2,8),Ht({color:15266040,transparent:!0,opacity:.6}));h.position.set(-.2,1.13,-.05),n.add(h);for(const f of[0,Math.PI]){const d=new le;d.position.set(Math.cos(f)*.85,0,Math.sin(f)*.85),d.rotation.y=-f+Math.PI/2,Rt(d,.5,.06,.5,0,.6,0,we.velvet()),Rt(d,.5,.6,.05,0,.9,-.24,s);for(const m of[-1,1])for(const g of[-1,1])Rt(d,.04,.6,.04,m*.22,.3,g*.22,s);n.add(d)}const l=Math.abs(Math.round(t*3+e*7))%3;if(l===0){const f=new lt(new ee(.05,.07,.22,8),Ht({color:13164784,transparent:!0,opacity:.7}));f.position.set(0,1.14,-.1),n.add(f);for(let d=0;d<3;d++){const m=new lt(new dn(.06,6,5),Ht({color:[12852794,15786224,15245496][d]}));m.position.set(-.05+d*.05,1.3+d%2*.05,-.1),n.add(m)}}else if(l===1){const f=new lt(new Ze(.2,.28,.03),Ht({color:9312304}));f.position.set(0,1.17,-.15),f.rotation.x=-.25,n.add(f)}else{const f=new lt(new ee(.03,.03,.18,6),Ht({color:16051416,emissive:4206624}));f.position.set(0,1.12,-.1),n.add(f);const d=new lt(new dn(.035,6,4),new Re({color:16765056}));d.position.set(0,1.24,-.1),n.add(d)}return n.position.set(t,0,e),i.room.group.add(n),i.collider(t-1.1,e-.6,t+1.1,e+.6),n}function n2(i,t,e,n={}){const s=new le,r=Ht({map:Ye("white"),color:15788256});Rt(s,1.1,1.2,1.1,0,.6,0,Ht({map:Ye("stone"),color:13156536})),Rt(s,1.3,.15,1.3,0,1.25,0,r);const a=new lt(new ee(.22,.42,1.8,10),r);a.position.y=2.2,s.add(a);const o=new lt(new dn(.2,10,8),r);o.position.y=3.3,s.add(o);const c=new lt(new ee(.06,.07,.9,6),r);if(c.position.set(.3,2.9,.1),c.rotation.z=-.9,s.add(c),n.pose==="mask"){const h=new lt(new qs(.16,10),r);h.position.set(.65,3.25,.15),s.add(h)}return s.position.set(t,0,e),i.room.group.add(s),i.collider(t-.6,e-.6,t+.6,e+.6),s}function i2(i,t,e){const n=new le,s=new lt(new ee(.4,.3,.8,12),Ht({map:Ye("gold")}));s.position.y=.4,n.add(s);const r=new lt(new ee(.06,.09,1.6,6),Ht({color:6965802}));r.position.y=1.6,n.add(r);const a=Ht({color:3828282,side:Ie});for(let o=0;o<8;o++){const c=new lt(new be(.35,1.4),a);c.position.set(0,2.4,0),c.rotation.set(.9,o*.8,0),c.translateY(.6),n.add(c)}return n.position.set(t,0,e),i.room.group.add(n),i.collider(t-.4,e-.4,t+.4,e+.4),n}function s2(i,t,e,n=3.2){const s=new le,r=Ht({map:Ye("darkwood"),color:13672560}),a=we.gold();Rt(s,n,.12,1.5,0,1.12,0,r),Rt(s,n-.6,.02,1.1,0,1.19,0,Ht({color:3035192}));for(const m of[-1,1]){Rt(s,.9,1.06,1.4,m*(n/2-.5),.53,0,r);for(let g=0;g<3;g++){Rt(s,.75,.28,.03,m*(n/2-.5),.2+g*.33,.71,r);const v=new lt(new dn(.035,6,4),a);v.position.set(m*(n/2-.5),.2+g*.33,.75),s.add(v)}}Rt(s,n-1.8,.5,.04,0,.8,-.65,r);const o=new le;o.position.set(n/2-.4,1.18,-.35);const c=new lt(new ee(.03,.12,.5,8),a);c.position.y=.25,o.add(c);const h=new lt(new ee(.12,.28,.25,12,1,!0),Ht({color:3041864,emissive:666132,side:Ie}));h.position.y=.55,o.add(h),s.add(o);const l=Ht({color:15787728});for(let m=0;m<9;m++){const g=new lt(new Ze(.42,.012,.56),l);g.position.set(-n/2+.5+m%3*.55,1.2+Math.floor(m/3)*.02+m%4*.012,-.1+m*7%5*.06),g.rotation.y=(m*13%9-4)*.08,s.add(g)}const f=new lt(new ee(.06,.07,.1,8),Ht({color:1710634}));f.position.set(.2,1.24,-.35),s.add(f);const d=new lt(new be(.06,.45),Ht({color:16052456,side:Ie}));return d.position.set(.25,1.45,-.35),d.rotation.z=-.4,s.add(d),s.position.set(t,0,e),i.room.group.add(s),i.collider(t-n/2,e-.75,t+n/2,e+.75),i.light(t+n/2-.4,1.6,e,16769184,5,5),s}function r2(i,t,e,n,s,r=0,a={}){const o=Je(64,44,c=>{c.fillStyle="#5a4029",c.fillRect(0,0,64,44),c.fillStyle="#b08a5a",c.fillRect(2,2,60,40);for(let l=0;l<120;l++)c.fillStyle="rgba(90,60,30,.35)",c.fillRect((l*37+r)%60+2,l*23%40+2,1,1);[["#f4ecd4",0],["#fff8a0",1],["#f8d0d8",2],["#d8f0f8",3],["#ffffff",4],["#f4ecd4",5]].forEach(([l,f],d)=>{const m=4+d%3*20+(r+d)%3,g=4+Math.floor(d/3)*19+(r*3+d)%3;c.fillStyle=l,c.fillRect(m,g,16,15),c.fillStyle="#3a2a5a";for(let v=0;v<4;v++)c.fillRect(m+2,g+4+v*3,8+(d+v+r)%5,1);c.fillStyle=["#c41e3a","#2a6ad0","#2a8a3a"][d%3],c.fillRect(m+7,g+1,2,2),d===4&&(c.fillStyle="#6a5a4a",c.fillRect(m+2,g+3,12,9),c.fillStyle="#c8b8a0",c.fillRect(m+6,g+5,4,5))}),c.strokeStyle="#c41e3a",c.beginPath(),c.moveTo(12,6),c.lineTo(32,26),c.lineTo(52,8),c.stroke()},"cork"+r);return i.decal(o,{x:t,y:e,w:n,h:s,z:a.z,wall:a.wall,at:a.at})}const As="#d9a878",qa="#c08458",ge="#f0cdb0",tv="#eac4a4",Ar="#d9a77e",ev=[{id:"varya",name:"Варя",color:"#5fd0c8",pitch:520,skin:As,hair:"#8a4626",style:"bob",eyes:"#5b3a1e",h:31,build:"thin",top:"#8a1830",bottom:"#1e1a22",shoes:"#1c1620",brows:"soft",acc:["offshoulder","buckle"],role:"Режиссёрка",bio:"Завтра ей восемнадцать. На ней красный лонгслив без плеч: Матвей подарил на прошлый день рождения. Умеет собрать людей вместе, и очень не любит, когда что-то идёт не по плану."},{id:"alla",name:"Алла Ева",color:"#ff5d6c",pitch:500,skin:As,hair:"#7a2e16",style:"wavy",eyes:"#5b3a1e",h:31,build:"thin",top:"#a3122a",bottom:"#8a0f24",skirt:"long",trim:"#e8c36a",shoes:"#3a0a12",acc:["fur","gloves","necklace"],brows:"arch",lips:"#b3122e",shadow:"#6b2a55",role:"Прима",bio:"Ведущая актриса театра. Опаздывает, требует лучшую гримёрку и знает о Варе подозрительно много."},{id:"kukolnik",name:"Кукольник",color:"#d8b56a",pitch:180,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:38,build:"mid",top:"#111",bottom:"#111",role:"Художественный руководитель",bio:"Его никто не видел. Он оставляет письма, пометки на полях и распоряжения, всегда вовремя."},{id:"polina",acc:["hoodie","collar","tie"],name:"Полина",color:"#c9a7ff",pitch:610,skin:ge,hair:"#c27a3e",style:"shag",eyes:"#5a7a6a",h:32,build:"thin",top:"#3a2620",bottom:"#2a2c3a",shoes:"#1a1416",brows:"soft",role:"Подруга",bio:"Боится почти всего и смеётся, когда страшно. Замечает то, что другие пропускают."},{id:"ruben",name:"Рубен",color:"#ffb057",pitch:240,skin:qa,hair:"#3a2418",style:"curlyBig",eyes:"#3b2416",h:40,build:"strong",top:"#d6c2a2",bottom:"#33333c",trim:"#ff9a3c",shoes:"#111",brows:"strict",acc:["glasses","necklace","pendant"],role:"Друг",bio:"Спокойный и надёжный. Считает, что план нужен, чтобы было от чего отступать."},{inner:"#b8c8dc",id:"matvey",name:"Матвей",color:"#ff8fd0",pitch:400,skin:tv,hair:"#5a3a22",style:"mop",eyes:"#5b3a1e",h:37,build:"thin",top:"#e6dcc6",bottom:"#2c2a30",trim:"#e6dcc6",shoes:"#1a1416",acc:["open","stripes","suspenders","necklace","bracelets"],brows:"soft",role:"Друг",bio:"Яркий снаружи, осторожный внутри. Сто раз отрепетирует фразу и так её и не скажет."},{acc:["offshoulder","earrings"],id:"erika",name:"Эрика",color:"#9fc3e8",pitch:430,skin:ge,hair:"#4a2a1a",style:"wavy",eyes:"#5b3a1e",h:34,build:"mid",top:"#e8dcc8",bottom:"#2b2f3a",shoes:"#22201f",brows:"soft",role:"Подруга",bio:"Спокойная. Сначала слушает, потом задаёт один вопрос, обычно самый неудобный."},{id:"liza",acc:["pearls"],name:"Лиза",color:"#ffe27a",pitch:640,skin:ge,hair:"#7a5434",style:"halfup",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#1a1418",bottom:"#f3ead8",skirt:"short",shoes:"#8a5a3a",brows:"soft",role:"Подруга",bio:"Лёгкая и упрямая. Если ей сказать «так положено», обязательно спросит, кем."},{id:"liza_long",name:"Лиза",color:"#ffe27a",pitch:640,skin:ge,hair:"#7a5434",style:"halfup",bangs:!0,eyes:"#6b7f9a",h:31,build:"thin",top:"#c9a0dc",bottom:"#b58ad0",skirt:"long",shoes:"#8a5a3a",brows:"soft"},{id:"angelina",name:"Ангелина",color:"#ff7ab8",pitch:470,skin:Ar,hair:"#2e1c16",style:"wavy",eyes:"#2a1a14",h:37,build:"thin",top:"#141216",bottom:"#5a1f3d",skirt:"short",trim:"#d9d9e8",shoes:"#111",acc:["cross","bracelets"],brows:"arch",lips:"#b0405a",role:"Подруга",bio:"Точная, собранная, с идеальной укладкой. Поёт так, как считает нужным,, и это не обсуждается."},{id:"artemiy",name:"Арутеми",color:"#ffb48a",pitch:270,skin:ge,hair:"#b0703c",style:"curlyMid",eyes:"#2a1a14",h:39,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",shoes:"#111",brows:"soft",acc:["freckles"],role:"Одноклассник Матвея",bio:"Чуть выше Матвея, светлые почти рыжие кудри. Шутит каждые полминуты и улыбается так, что школьный кот мурлычет."},{id:"vasilisa",name:"Василиса",color:"#ffb48a",pitch:480,skin:ge,hair:"#b4521e",style:"wavy",eyes:"#5b6b4a",h:37,build:"thin",top:"#141216",bottom:"#2c2c34",acc:["tank","cross","freckles","camera"],brows:"soft",role:"Актриса труппы"},{id:"dana",name:"Дана",color:"#e8a0ff",pitch:500,skin:As,hair:"#5a2e1c",style:"wavy",eyes:"#5b3a1e",h:33,build:"thin",top:"#9a1a26",bottom:"#18161c",skirt:"short",trim:"#9a1a26",acc:["vneck","necklace","shadesup"],brows:"arch",lips:"#a8324a",role:"Актриса труппы"},{inner:"#ecebe6",id:"nina",acc:["open","stripes"],trim:"#4a2a1e",name:"Нина",color:"#b8c0ff",pitch:540,skin:ge,hair:"#3a2018",style:"long",bangs:"curtain",eyes:"#3b2a22",h:33,build:"thin",top:"#4a2a1e",bottom:"#23232c",brows:"soft",role:"Актриса труппы"},{acc:["necklace"],id:"anya",name:"Аня",color:"#ffd0a0",pitch:580,skin:ge,hair:"#6a3420",style:"longStraight",eyes:"#6a5238",h:33,build:"mid",top:"#18141a",bottom:"#2e3a52",skirt:"short",brows:"soft",role:"Актриса труппы"},{id:"olya",name:"Оля",color:"#a0e0d0",pitch:520,skin:ge,hair:"#4a2216",style:"shag",bangs:"curtain",eyes:"#3b2a22",h:31,build:"mid",top:"#5a1a20",bottom:"#2a2a33",brows:"strict",role:"Актриса труппы"},{id:"natasha",name:"Мама Наташа",color:"#ffd6c0",pitch:420,skin:ge,hair:"#9a7a58",style:"bob",eyes:"#2a1a14",h:37,build:"mid",top:"#7a9ab8",bottom:"#33384a",skirt:"long",brows:"soft"},{id:"sasha",name:"Саша",color:"#c0d6e8",pitch:220,skin:ge,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:39,build:"mid",top:"#4a5a4a",bottom:"#2c2c34",brows:"soft"},{id:"maxim",name:"Папа Максим",color:"#ffc070",pitch:250,skin:qa,hair:"#1d1512",style:"curlyMid",eyes:"#3b2416",h:33,build:"mid",top:"#c2452d",bottom:"#2d3440",brows:"arch"},{id:"nastya",name:"Настя",color:"#d8c8e8",pitch:440,skin:ge,hair:"#9a7a58",style:"long",eyes:"#5b3a1e",h:37,build:"thin",top:"#b8a8c8",bottom:"#4a4458",skirt:"long",brows:"soft"},{id:"matvey_bro",name:"Матвейка",color:"#fff0b0",pitch:760,skin:ge,hair:"#f0dca0",style:"short",eyes:"#5b6b8a",h:21,build:"mid",top:"#a8d0f0",bottom:"#f0f0f0",brows:"soft"},{id:"vanya",name:"Ваня",color:"#c8f0c0",pitch:740,skin:ge,hair:"#9a7a58",style:"short",eyes:"#4a5a6a",h:21,build:"mid",top:"#4a7a4a",bottom:"#2c3a5a",brows:"soft"},{id:"vasya",name:"Вася",color:"#a8e0ff",pitch:620,skin:ge,hair:"#6a4630",style:"bob",eyes:"#5b3a1e",h:30,build:"thin",top:"#e8884a",bottom:"#3a4a6a",brows:"soft"},{id:"sofa",name:"Софа",color:"#ffc0e0",pitch:540,skin:ge,hair:"#a88a5a",style:"longStyled",eyes:"#5a6a7a",h:33,build:"thin",top:"#e8b0c8",bottom:"#f0e8e8",skirt:"short",acc:["earrings"],brows:"arch",lips:"#c84a6a",shadow:"#b86a9a"},{id:"katya",name:"Катя",color:"#ffb090",pitch:560,skin:ge,hair:"#c8602a",style:"bobLong",eyes:"#5a7a5a",h:37,build:"big",top:"#6a9a7a",bottom:"#4a4a5a",brows:"soft"},{id:"owner",name:"Хозяин",color:"#b0b0b0",pitch:150,skin:"#e8e4d8",hair:"#111",style:"none",eyes:"#111",h:40,build:"strong",top:"#3a2a22",bottom:"#1c1614",acc:["maskface","hat","coat"],brows:"strict"},{id:"nol",name:"Ноль",color:"#7af0ff",pitch:560,skin:ge,hair:"#40e0d0",style:"short",eyes:"#222",h:33,build:"thin",top:"#22303a",bottom:"#151a22",trim:"#40e0d0",acc:["visor"],brows:"soft"},{id:"kasseta",name:"Кассета",color:"#ff7ad0",pitch:330,skin:qa,hair:"#ff4fa0",style:"bob",eyes:"#222",h:36,build:"mid",top:"#5a2a6a",bottom:"#1a1a22",trim:"#ff4fa0",acc:["headphones"],brows:"arch"},{id:"guard",name:"Охранник",color:"#ff5050",pitch:140,skin:"#8a94a0",hair:"#444",style:"none",eyes:"#f33",h:38,build:"strong",top:"#39424e",bottom:"#252a33",trim:"#ff3030",acc:["visor"],brows:"strict"},{id:"teacher",name:"Алёна-сэнсэй",color:"#ff5d6c",pitch:500,skin:ge,hair:"#a8865e",style:"bobLong",eyes:"#5b3a1e",h:33,build:"thin",top:"#44375a",bottom:"#2a2238",skirt:"long",acc:[],brows:"arch",lips:"#c0405a",role:"Руководительница драмкружка"},{id:"barman",name:"Сол, бармен",color:"#cccccc",pitch:200,skin:"#b8b8b8",hair:"#333",style:"short",eyes:"#222",h:38,build:"big",top:"#e8e8e8",bottom:"#222",trim:"#111",brows:"strict"},{id:"singer",name:"Мэй, певица",color:"#e8e8e8",pitch:460,skin:"#d8d8d8",hair:"#1a1a1a",style:"longStyled",eyes:"#222",h:36,build:"thin",top:"#bbbbbb",bottom:"#aaaaaa",skirt:"long",acc:["earrings"],brows:"arch",lips:"#555"},{id:"director",name:"Грей, режиссёр",color:"#b0b0b0",pitch:230,skin:"#c8c8c8",hair:"#888",style:"short",eyes:"#222",h:37,build:"thin",top:"#555",bottom:"#333",acc:["glasses","scarf"],brows:"strict"},{id:"collector",name:"Аркадий Вейс",color:"#d0d0d0",pitch:170,skin:"#cfcfcf",hair:"#ddd",style:"short",eyes:"#222",h:38,build:"big",top:"#2a2a2a",bottom:"#1c1c1c",trim:"#999",brows:"strict"},{id:"lydia",name:"Лидия Вронская",color:"#ffffff",pitch:480,skin:"#e0e0e0",hair:"#2a2a2a",style:"bob",eyes:"#222",h:34,build:"thin",top:"#777",bottom:"#444",acc:["hat"],brows:"soft",lips:"#555"},{id:"cashier",name:"Кассир",color:"#bbbbbb",pitch:300,skin:"#c0c0c0",hair:"#555",style:"short",eyes:"#222",h:35,build:"mid",top:"#444",bottom:"#333",acc:["hat"],brows:"soft"},{id:"fairy",name:"Фея-крёстная",color:"#c8a0ff",pitch:600,skin:ge,hair:"#e8e0f0",style:"bun",eyes:"#6a5a9a",h:33,build:"big",top:"#b89ae0",bottom:"#9a7ac8",skirt:"long",acc:["wings","glasses"],brows:"arch"},{id:"prince",name:"Принц Марк",color:"#8ab8ff",pitch:280,skin:ge,hair:"#6a4326",style:"bob",eyes:"#5b3a1e",h:39,build:"mid",top:"#3a6ab0",bottom:"#f0f0f0",trim:"#e8c36a",acc:["crown","cape"],brows:"soft"},{id:"narrator",name:"Рассказчик",color:"#e8d8a8",pitch:190,skin:"#000",hair:"#000",style:"none",eyes:"#000",h:30,build:"mid",top:"#000",bottom:"#000"},{id:"glyants",name:"Директор Глянц",color:"#ff9ad8",pitch:210,skin:ge,hair:"#e8e8f0",style:"short",eyes:"#3a3a4a",h:38,build:"thin",top:"#f0f0f8",bottom:"#f0f0f8",trim:"#ff4fa0",acc:["glasses"],brows:"arch"},{id:"trainer",name:"Тренер Ми",color:"#a0f0c0",pitch:520,skin:Ar,hair:"#222",style:"ponytail",eyes:"#222",h:34,build:"mid",top:"#30c090",bottom:"#222",brows:"strict"},{id:"stylist",name:"Ассистентка",color:"#ff5d6c",pitch:500,skin:As,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#f0f0f8",bottom:"#ff4fa0",skirt:"short",acc:["pearls","visor"],brows:"arch",lips:"#b3122e"},{id:"zero",name:"Мсье Зеро",color:"#e8e8f0",pitch:180,skin:"#e8d8c8",hair:"#d8d8d8",style:"short",eyes:"#6a7a8a",h:37,build:"mid",top:"#f0ece4",bottom:"#1a1a1e",shoes:"#111",acc:["bowtie","monocle"],brows:"strict"},{id:"croupier",name:"Крупье",color:"#c8c0b0",pitch:300,skin:ge,hair:"#2a1a14",style:"short",eyes:"#3a2a1a",h:35,build:"mid",top:"#1a1a1e",bottom:"#1a1a1e",acc:["bowtie"],brows:"soft"},{id:"ang_mom",name:"Мама Ангелины",color:"#ffb8c8",pitch:430,skin:Ar,hair:"#1a1214",style:"bun",eyes:"#2a1a14",h:35,build:"mid",top:"#3a2a3a",bottom:"#2a2a33",acc:["earrings"],brows:"arch",lips:"#b0405a",role:"Визажистка"},{id:"lusine",name:"Лусинэ",color:"#ffd0a0",pitch:620,skin:Ar,hair:"#2a1a14",style:"ponytail",eyes:"#2a1a14",h:29,build:"mid",top:"#ff9ad8",bottom:"#3a4a6a",brows:"soft",role:"Соседка, фанатка Энджел"},{id:"hostess",name:"Леди Фортуна",color:"#ff5d6c",pitch:500,skin:As,hair:"#2a1512",style:"curls",eyes:"#5b3a1e",h:31,build:"thin",top:"#e8c36a",bottom:"#c9a040",skirt:"long",acc:["pearls","maskhalf"],brows:"arch",lips:"#b3122e"},{id:"student",name:"Школьник",color:"#cccccc",pitch:400,skin:ge,hair:"#3a2a22",style:"short",eyes:"#333",h:34,build:"mid",top:"#2c3550",bottom:"#2a2a33",trim:"#f0f0f0",brows:"soft"},{id:"student2",name:"Школьница",color:"#cccccc",pitch:560,skin:ge,hair:"#5a3a2a",style:"twin",eyes:"#333",h:32,build:"thin",top:"#2c3550",bottom:"#8a2a3a",skirt:"short",trim:"#f0f0f0",brows:"soft"},{id:"dancer",name:"Трейни",color:"#cccccc",pitch:500,skin:ge,hair:"#ffb0d8",style:"bob",eyes:"#333",h:33,build:"thin",top:"#f0f0f8",bottom:"#ff9ad8",skirt:"short",brows:"soft"},{id:"courtier",name:"Придворный",color:"#cccccc",pitch:300,skin:ge,hair:"#e8e8e8",style:"bun",eyes:"#333",h:35,build:"mid",top:"#6a2a3a",bottom:"#3a1a22",trim:"#e8c36a",brows:"soft"}],ze={};for(const i of ev)ze[i.id]=i;function Qe(i,t,e){return ze[t]||(ze[t]={...ze[i],...e,id:t}),ze[t]}Qe("varya","varya_noir",{top:"#6a6a6a",bottom:"#2a2a2a",acc:["hat"]});Qe("varya","varya_pjm",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});Qe("erika","erika_noir",{top:"#9a9a8a",bottom:"#2a2a2a",acc:["hat","coat"]});Qe("ruben","ruben_tux",{top:"#141418",bottom:"#141418",trim:"#f4f0e8",acc:["glasses","bowtie","jacket"]});Qe("varya","varya_gown",{top:"#5a0c1c",bottom:"#4a0a18",skirt:"long",acc:["offshoulder","necklace"]});Qe("ruben","ruben_heist",{top:"#16161c",bottom:"#1c2028",trim:"#40e0d0",acc:["glasses"]});Qe("matvey","matvey_school",{top:"#2c3550",bottom:"#2a2a33",trim:"#f2c230",acc:["freckles","scarf","bracelets","pins"]});Qe("angelina","angelina_idol",{top:"#f0f0f8",bottom:"#ff9ad8",trim:"#ff4fa0"});Qe("angelina","angelina_own",{top:"#1a1420",bottom:"#7a1f3d",trim:"#e8c36a"});Qe("alla","queen",{name:"Королева",top:"#8a0f24",bottom:"#6a0a1a",trim:"#e8c36a",acc:["pearls","crown","cape"]});Qe("varya","girl",{name:"Молодая Девушка",top:"#f3ead8",bottom:"#e8dcc0",skirt:"long",trim:"#5fd0c8",acc:[]});Qe("varya","varya_queen",{name:"Варя",top:"#8a0f24",bottom:"#6a0a1a",skirt:"long",trim:"#e8c36a",acc:[]});Qe("liza","liza_short",{style:"bob"});Qe("polina","polina_coat",{top:"#e8c230",bottom:"#3b4a6b"});Qe("varya","varya_pj",{top:"#d8c8e8",bottom:"#b8a8d0",acc:[]});const mu=32,Wo=48,Ml=2,Ns=["idle0","idle1","walk0","walk1","walk2","walk3","arms","bow","fear","sit","point","dance1","dance2","lie","hug"],Kc=["f","b","s"],yi=mu*Ml,bi=Wo*Ml;function Jt(i,t){const e=parseInt(i.slice(1),16);let n=e>>16,s=e>>8&255,r=e&255;return t<0?(n*=1+t,s*=1+t,r*=1+t*.8):(n+=(255-n)*t,s+=(255-s)*t,r+=(255-r)*t),`rgb(${n|0},${s|0},${r|0})`}const nv={bob:0,lean:0,tilt:0,aL:.12,aR:.12,eL:.1,eR:.1,lL:0,lR:0,kL:0,kR:0,sit:!1,lie:!1,mouth:"n"};function iv(i,t){const e={...nv},n=t==="s";switch(i){case"idle1":e.bob=1,e.aL=e.aR=.16;break;case"walk0":case"walk2":{const s=i==="walk0"?1:-1;e.bob=0,n?(e.lL=.45*s,e.lR=-.45*s,e.kL=s<0?.5:.1,e.kR=s>0?.5:.1,e.aL=-.5*s,e.aR=.5*s):(e.kL=s>0?.9:0,e.kR=s<0?.9:0,e.aL=.12+.22*s,e.aR=.12-.22*s);break}case"walk1":case"walk3":e.bob=-2,e.aL=e.aR=.14;break;case"arms":e.aL=e.aR=2.7,e.eL=e.eR=.3,e.mouth="o";break;case"bow":e.lean=.5,e.bob=3,e.aL=e.aR=.5,e.tilt=.25;break;case"fear":e.aL=e.aR=2.3,e.eL=e.eR=2,e.kL=e.kR=.3,e.bob=2,e.mouth="o";break;case"sit":e.sit=!0,e.lL=e.lR=1.5,e.kL=e.kR=1.4,e.aL=e.aR=.35,e.eL=e.eR=.8;break;case"point":e.aR=1.35,e.eR=-.25,e.aL=.1;break;case"dance1":e.aL=2.5,e.aR=2.5,e.eL=e.eR=.5,e.bob=-1,e.lL=.3,e.kL=.6,e.mouth="s";break;case"dance2":e.aL=1.4,e.aR=1.4,e.bob=1,e.lR=-.3,e.kR=.6,e.mouth="s";break;case"lie":e.lie=!0;break;case"hug":e.aL=e.aR=1.25,e.eL=e.eR=1.35,e.lean=.12,e.mouth="s";break}return e}function Cr(i,t,e,n,s){i.fillStyle=n,i.beginPath(),i.moveTo(-e/2,0),i.lineTo(e/2,0),i.lineTo(e/2-.4,t),i.arc(0,t,e/2-.4,0,Math.PI),i.closePath(),i.fill(),s&&(i.fillStyle=s,i.fillRect(-e/2,0,1,t*.9))}function fe(i,t,e,n,s,r){i.fillStyle=r,i.beginPath(),i.ellipse(t,e,n,s,0,0,Math.PI*2),i.fill()}function Ct(i,t,e,n,s,r){i.fillStyle=r,i.fillRect(t,e,n,s)}function sv(i,t,e,n,s,r){const a=iv(s,r),o=r==="s",c=r==="b",h=n.acc||[],l=k=>h.includes(k),f=n.h*Ml,d=n.build,m=d==="thin"?14:d==="mid"?16:19,g=d==="thin"?10:d==="mid"?12:d==="strong"?15:16,v=d==="thin"?5.5:d==="strong"?7:6.5,u=d==="strong"?5:4,p=Math.round(f*.27),_=Math.round(p*.86),y=Math.round(f*.33),b=Math.round(f*.25),I=Math.round(f*.27),A=1.4,w=yi/2,L=bi-2;i.save(),i.translate(t,e),a.lie&&(i.translate(w,L-6),i.rotate(-Math.PI/2),i.translate(-w-4,-L+18));const Y=a.sit?y*.5:y,x=L-Y+a.bob,M=x-b,V=n.skin,H=Jt(V,-.16);Jt(V,.1);const W=n.top,Q=Jt(W,-.28),D=Jt(W,.14),G=n.bottom,q=Jt(G,-.3),at=n.hair,ct=Jt(at,-.32),vt=Jt(at,.3),Zt=n.shoes||"#221c22",xt=n.style,nt=Math.round(({curls:.62,long:.62,wavy:.72,halfup:.68,longStraight:.74,shag:.36,mop:.16,curlyBig:.22,longStyled:.66,glam:.7,rapunzel:1.2,bob:.26,bobLong:.38,curlyMid:.3,fluffy:.22,twin:.2,ponytail:.2,short:.1,curlyShort:.12,bun:.1}[xt]||0)*f*.45),_t=Math.sin(a.lean)*b,z=w+_t+(o?2:0),et=M-p+3+Math.round(a.lean*6),Ot=()=>{if(nt<6||xt==="ponytail"||xt==="twin"||xt==="bun")return;const k=_+(xt==="wavy"?5:xt==="curls"||xt==="glam"||xt==="curlyMid"||xt==="fluffy"?6:xt==="shag"?5:3),T=(o?z-3:z)-k/2,S=et+2;if(i.fillStyle=at,i.beginPath(),i.moveTo(T,S+4),i.quadraticCurveTo(T-1,S+p*.5+nt*.5,T+2,S+p*.4+nt),i.lineTo(T+k-2,S+p*.4+nt),i.quadraticCurveTo(T+k+1,S+p*.5+nt*.5,T+k,S+4),i.closePath(),i.fill(),i.fillStyle=ct,i.fillRect(T+k-3,S+6,2,nt*.8),xt==="curls"||xt==="curlyMid")for(let B=0;B<5;B++)fe(i,T+1,S+8+B*nt/5,2.5,3,B%2?ct:at),fe(i,T+k-1,S+10+B*nt/5,2.5,3,B%2?at:ct);if(xt==="rapunzel")for(let B=0;B<6;B++)Ct(i,T+k/2-2+B%2*2,S+p+B*7,4,5,B%2?vt:at);const U=S+p*.4+nt;if(xt==="wavy"||xt==="halfup"){for(let B=0;B<6;B++){const $=S+10+B*(nt+p*.3)/6;fe(i,T+(B%2?.4:1.4),$,1.6,2.4,B%2?ct:at),fe(i,T+k-(B%2?1.4:.4),$+2,1.6,2.4,B%2?at:ct)}for(let B=0;B<4;B++){i.strokeStyle=B%2?vt:ct,i.lineWidth=.9,i.beginPath();const $=T+3+B*(k-6)/3;i.moveTo($,S+8);for(let Z=S+8;Z<U-1;Z+=3)i.lineTo($+Math.sin(Z*.35+B)*1.4,Z);i.stroke()}for(let B=0;B<4;B++)fe(i,T+3+B*(k-6)/3,U-1,3,2.4,B%2?at:ct)}if(xt==="longStraight"&&(i.fillStyle=vt,i.fillRect(T+3,S+8,1,nt),i.fillStyle=ct,i.fillRect(T+k/2,S+10,1,nt-4)),xt==="shag")for(let B=0;B<5;B++){i.fillStyle=B%2?ct:at,i.beginPath();const $=T+B*k/5;i.moveTo($,U-3),i.lineTo($+k/10,U+2.5),i.lineTo($+k/5,U-3),i.closePath(),i.fill()}},Gt=()=>{const k=et+p;i.translate(z,k),i.scale(A,A),i.translate(-z,-k)};if(c||(i.save(),Gt(),Ot(),i.restore()),l("cape")){const k=m+6;i.fillStyle=Jt(n.trim||"#a22",-.1),i.beginPath(),i.moveTo(w-k/2+_t,M+1),i.lineTo(w+k/2+_t,M+1),i.lineTo(w+k/2+3,L-4),i.lineTo(w-k/2-3,L-4),i.closePath(),i.fill()}if(l("wings")&&!o)for(const k of[-1,1])i.fillStyle="rgba(230,220,255,0.85)",i.beginPath(),i.ellipse(w+k*(m/2+6),M+8,7,11,k*.4,0,Math.PI*2),i.fill();const Xt=n.skirt==="short"?V:G,it=n.skirt==="short"?H:q,C=(k,T,S,U)=>{i.save(),i.translate(k,x),i.rotate(-T);const B=Y*.5,$=Y*.5;Cr(i,B,v,U?Xt:it,U?Jt(Xt,.12):void 0),i.translate(0,B),i.rotate(o?S:0);const Z=o?$:$-S*3.2;Cr(i,Z,v-.6,U?Xt:it),i.fillStyle=Zt,o?(i.beginPath(),i.ellipse(1.6,Z+.5,v*.75,2,0,0,Math.PI*2),i.fill()):i.fillRect(-v/2-.5,Z-1,v+1,3),i.restore()};if(o)C(w+_t*.2,a.lR,a.kR,!1),C(w+_t*.2,a.lL,a.kL,!0);else if(a.sit)for(const k of[-1,1])Ct(i,w+k*3.5-v/2,x,v,Y-2,Xt),Ct(i,w+k*3.5-v/2-.5,L-3,v+1,3,Zt);else{const k=g*.24;C(w-k,-a.lL*.3,a.kL,!0),C(w+k,a.lR*.3,a.kR,!0)}if(n.skirt){const k=n.skirt==="long"?Y-4:Y*.42,T=o?g-3:g,S=T+(n.skirt==="long"?9:6);i.fillStyle=G,i.beginPath(),i.moveTo(w-T/2+_t*.3,x-2),i.lineTo(w+T/2+_t*.3,x-2),i.lineTo(w+S/2,x+k),i.lineTo(w-S/2,x+k),i.closePath(),i.fill(),i.fillStyle=q,i.fillRect(w+S/2-3,x+2,2,k-3),i.fillStyle=Jt(G,.15),i.fillRect(w-S/2+2,x+2,1,k-4),n.trim&&Ct(i,w-S/2,x+k-1.5,S,1.5,n.trim)}const pt=l("tank")?V:l("offshoulder")?W:n.id==="alla"||n.id==="queen"?V:W,ut=(k,T,S,U)=>{i.save();const B=o?w+_t*.7+(U?2:-2):w+_t*.6+k*(m/2+u/2-1.2);i.translate(B,M+2.5),i.rotate(o?-T:-k*T);const $=I*.52,Z=U?Jt(pt,-.25):Jt(pt,-.06);Cr(i,$,u,Z,U?void 0:Jt(pt,.12)),i.fillStyle=Jt(pt,-.32),i.fillRect(k>0?-u/2:u/2-1,0,1,$),i.translate(0,$),i.rotate(o?-S:-k*S),Cr(i,I*.5,u-.6,Z),i.fillStyle=Jt(pt,-.32),i.fillRect(k>0?-u/2+.3:u/2-1.3,0,1,I*.45);const yt=l("gloves")?"#16121a":U?H:V;fe(i,0,I*.5+1.2,u*.55,u*.6,yt),l("bracelets")&&!U&&(Ct(i,-u/2,I*.42,u,1.2,"#4ae0c0"),Ct(i,-u/2,I*.36,u,1,"#f2c230")),i.restore()};o&&ut(1,a.aR,a.eR,!0),c&&(ut(-1,a.aL,a.eL,!1),ut(1,a.aR,a.eR,!1));const K=o?m-5:m,mt=o?g-4:g;if(i.save(),i.translate(w,x),i.rotate(a.lean*(o?1:.35)),i.translate(-w,-x),i.fillStyle=W,i.beginPath(),i.moveTo(w-K/2,M+2),i.quadraticCurveTo(w-K/2-.5,M,w-K/2+2,M),i.lineTo(w+K/2-2,M),i.quadraticCurveTo(w+K/2+.5,M,w+K/2,M+2),i.lineTo(w+mt/2,x+(n.skirt?0:2)),i.lineTo(w-mt/2,x+(n.skirt?0:2)),i.closePath(),i.fill(),i.fillStyle=D,i.fillRect(w-K/2+1,M+2,1.5,b*.6),i.fillStyle=Q,i.beginPath(),i.moveTo(w+K/2-2,M+1),i.lineTo(w+K/2,M+2),i.lineTo(w+mt/2,x),i.lineTo(w+mt/2-2.5,x),i.closePath(),i.fill(),n.skirt||Ct(i,w-mt/2,x-1,mt,2.5,l("belt")?"#2a1a14":q),l("offshoulder")&&!c&&(i.fillStyle=V,i.beginPath(),i.moveTo(w-K/2+1,M+1),i.quadraticCurveTo(w,M+6,w+K/2-1,M+1),i.lineTo(w+K/2-1,M-1),i.lineTo(w-K/2+1,M-1),i.closePath(),i.fill(),Ct(i,w-K/2+1,M+4,K-2,1,Q),l("buckle"))){Ct(i,w-3.5,M+2,1,b-3,Q),Ct(i,w+2.5,M+2,1,b-3,Q);for(let k=M+6;k<x-2;k+=3)Ct(i,w-.5,k,1,1,"#d8c890");Ct(i,w-2.5,M+4,5,2.4,"#d8c890"),Ct(i,w-1.5,M+4.6,3,1.2,Q)}if(l("coat")&&(i.fillStyle=Jt(W,-.08),i.fillRect(w-K/2-1,M+1,3,b+Y*.55),i.fillRect(w+K/2-2,M+1,3,b+Y*.55)),l("jacket")&&!c&&(Ct(i,w-K/2,M+1,K*.32,b,n.trim||Jt(W,.25)),Ct(i,w+K/2-K*.32,M+1,K*.32,b,n.trim||Jt(W,.25))),l("open")&&!c){const k=o?K*.3:K*.38,T=o?w+K/2-k:w-k/2;if(Ct(i,T,M+1,k,b-1,n.inner||"#eee"),l("stripes"))for(let S=T+.5;S<T+k;S+=1.6)Ct(i,S,M+1,.6,b-1,Jt(n.inner||"#eee",-.28));o||(i.fillStyle=Q,i.fillRect(T-.8,M+1,.8,b),i.fillRect(T+k,M+1,.8,b))}if(l("suspenders")&&!c)for(const k of o?[.1]:[-.26,.26])Ct(i,w+k*K-.6,M+1,1.3,b+1,"#241c1c");if(l("hoodie")&&(o||(i.fillStyle=Q,i.beginPath(),i.ellipse(w,M+1,K/2-1.5,3.2,0,c?0:Math.PI,c?Math.PI:0),i.fill()),c||(Ct(i,w-2.2,M+2,.7,6,"#e8e0d0"),Ct(i,w+1.5,M+2,.7,6,"#e8e0d0"),Ct(i,w-K*.3,x-b*.38,K*.6,b*.26,Q))),l("collar")&&!c&&!o&&(i.fillStyle="#f2eee6",i.beginPath(),i.moveTo(w-3.5,M),i.lineTo(w,M+2.5),i.lineTo(w-1.2,M+3.6),i.closePath(),i.fill(),i.beginPath(),i.moveTo(w+3.5,M),i.lineTo(w,M+2.5),i.lineTo(w+1.2,M+3.6),i.closePath(),i.fill()),l("vneck")&&!c&&!o&&(i.fillStyle=V,i.beginPath(),i.moveTo(w-3,M),i.lineTo(w+3,M),i.lineTo(w,M+7),i.closePath(),i.fill()),l("tank")&&!c&&!o&&(i.fillStyle=V,i.beginPath(),i.moveTo(w-K/2,M-.5),i.lineTo(w-K/2+3,M-.5),i.quadraticCurveTo(w,M+5,w+K/2-3,M-.5),i.lineTo(w+K/2,M-.5),i.lineTo(w+K/2,M+3),i.lineTo(w+K/2-2.5,M+3),i.quadraticCurveTo(w,M+6,w-K/2+2.5,M+3),i.lineTo(w-K/2,M+3),i.closePath(),i.fill()),l("cross")&&!c&&(i.strokeStyle="#c8b070",i.lineWidth=.6,i.beginPath(),i.moveTo(w-3,M),i.quadraticCurveTo(w,M+9,w+3,M),i.stroke(),Ct(i,w-.4,M+7,.9,3.4,"#d8c080"),Ct(i,w-1.3,M+8,2.7,.8,"#d8c080")),l("pendant")&&!c&&Ct(i,w-.8,M+4.5,1.6,1.8,"#c8a050"),n.trim&&!c&&!l("jacket")&&!l("open")&&Ct(i,w-1,M+1,2,n.skirt?4:3,n.trim),l("scarf")&&(Ct(i,w-K/2+1,M-1,K-2,3,n.trim||"#e84a6f"),!c))for(let k=0;k<4;k++)Ct(i,w+1+k%2,M+2+k*2,3,2,k%2?"#2a2a2a":n.trim||"#e84a6f");if(l("bowtie")&&!c&&(i.fillStyle="#111",i.beginPath(),i.moveTo(w-3,M),i.lineTo(w,M+1.4),i.lineTo(w-3,M+2.8),i.closePath(),i.fill(),i.beginPath(),i.moveTo(w+3,M),i.lineTo(w,M+1.4),i.lineTo(w+3,M+2.8),i.closePath(),i.fill(),l("jacket")&&Ct(i,w-1.5,M+3,3,b-4,"#f4f0e8")),l("tie")&&!c&&Ct(i,w-1,M+1,2,7,"#a3122a"),l("pins")&&!c&&!o&&(fe(i,w+K/2-3,M+5,1.2,1.2,"#fff"),fe(i,w+K/2-4,M+8,1.2,1.2,"#4ae0c0"),fe(i,w-K/2+3,M+6,1.2,1.2,"#f2c230")),l("camera")&&!c&&(Ct(i,w-3.5,M+7,7,5,"#222"),fe(i,w,M+9.5,1.6,1.6,"#8ac"),i.strokeStyle="#333",i.lineWidth=1,i.beginPath(),i.moveTo(w-K/2+2,M),i.lineTo(w-3,M+7),i.moveTo(w+K/2-2,M),i.lineTo(w+3,M+7),i.stroke()),l("pearls")&&!c)for(let k=0;k<5;k++)fe(i,w-4+k*2,M+2+Math.sin(k/4*Math.PI)*1.5,.8,.8,"#f6f0e8");if(l("fur")&&!c)for(let k=0;k<7;k++)fe(i,w-K/2+k*K/6,M+2+k%2,3,2.6,k%2?"#f4f0ec":"#e0dcd8");l("necklace")&&!c&&(i.strokeStyle="#d8c890",i.lineWidth=.8,i.beginPath(),i.moveTo(w-3,M),i.quadraticCurveTo(w,M+6,w+3,M),i.stroke()),i.restore(),o?ut(1,a.aL,a.eL,!1):c||(ut(-1,a.aL,a.eL,!1),ut(1,a.aR,a.eR,!1)),Ct(i,z-2,et+p-3,4,5,H),i.save(),i.translate(z,et+p*.55),i.rotate(a.tilt),i.translate(-z,-(et+p*.55)),Gt();const Ut=z-_/2;if((xt!=="none"||n.id!=="kukolnik")&&(fe(i,z,et+p*.5,_/2,p/2,V),fe(i,z+(o?2:0),et+p*.62,_/2-1,p*.36,V),i.fillStyle=H,i.fillRect(z+_/2-2,et+p*.35,1.5,p*.35),o&&Ct(i,z+_/2-.5,et+p*.5,1.6,2,V)),!c){const k=et+Math.round(p*.48),T=Jt(n.eyes,-.2),S=n.pitch<=400,U=Jt(n.hair,-.55);i.fillStyle=Jt(V,-.1),i.fillRect(z-_/2+1,et+p*.28,_-2,1.2),o?Ct(i,z+_/2-.2,k+1.6,1.2,1.2,V):Ct(i,z-.2,k+2.4,.8,.8,H);const B=(ft,St)=>{Ct(i,ft-.2,k-1.4,3,4,"#f8f2ea"),Ct(i,ft+.4,k-1.2,2.2,3.8,T),Ct(i,ft+.4,k+1.2,2.2,1.2,Jt(n.eyes,.25)),Ct(i,ft+.9,k-.2,1.2,1.6,Jt(T,-.4)),Ct(i,ft+.5,k-.8,.9,.9,"#fff"),Ct(i,ft-.5,k-2,3.6,S?.9:1.2,U),S||Ct(i,St<0?ft-1.1:ft+3.1,k-2.2,.9,.9,U)};o||B(z-4.4,-1),B(z+1.6,1);const $=k-3;i.fillStyle=Jt(n.hair,-.4),o||(n.brows==="strict"?(i.fillRect(z-4.6,$,3.4,1),i.fillRect(z+1.4,$,3.4,1)):n.brows==="arch"?(i.fillRect(z-4.4,$-.4,3,.8),i.fillRect(z+1.6,$-.4,3,.8)):(i.fillRect(z-4,$+.2,2.6,.7),i.fillRect(z+1.6,$+.2,2.6,.7))),fe(i,z-4+(o?6:0),k+3.2,1.6,.9,"rgba(240,120,120,0.35)"),o||fe(i,z+4,k+3.2,1.6,.9,"rgba(240,120,120,0.35)");const Z=et+Math.round(p*.78),yt=o?z+3:z;if(a.mouth==="o"?fe(i,yt,Z,1,1.3,"#5a1a1a"):Ct(i,yt-1.2,Z,a.mouth==="s"?3:2.4,.9,n.lips||Jt(V,-.38)),l("freckles"))for(const ft of o?[3,5]:[-4,-2.5,2.5,4])Ct(i,z+ft,k+2.2,.8,.8,Jt(V,-.3));l("mole")&&Ct(i,z+3.5,k+4,.9,.9,"#3a1a14"),l("glasses")&&(i.strokeStyle="#1a1a1e",i.lineWidth=.9,o?i.strokeRect(z+1,k-1.6,3.4,3.6):(i.strokeRect(z-4.8,k-1.6,3.8,3.8),i.strokeRect(z+1,k-1.6,3.8,3.8),i.beginPath(),i.moveTo(z-1,k),i.lineTo(z+1,k),i.stroke())),l("visor")&&Ct(i,Ut,k-2,_,3.5,n.trim||"#40e0d0"),l("maskface")&&(fe(i,z,et+p*.55,_/2,p*.45,"#ece8dc"),Ct(i,z-4,k-1,2.6,2.6,"#111"),Ct(i,z+1.4,k-1,2.6,2.6,"#111"),i.strokeStyle="#111",i.lineWidth=.9,i.beginPath(),i.arc(z,Z-2,3.2,.2,Math.PI-.2),i.stroke()),l("maskhalf")&&(Ct(i,Ut,k-2.5,_,5,"#e8c36a"),Ct(i,z-3.6,k-1,2,2,"#111"),Ct(i,z+1.6,k-1,2,2,"#111"))}if(xt!=="none"){const k=et-1,T=_+2;if(i.fillStyle=at,i.beginPath(),i.ellipse(z+(o?-1:0),et+p*.36,T/2,p*.42,0,Math.PI,0),i.fill(),c)i.beginPath(),i.ellipse(z,et+p*.5,T/2,p*.52,0,0,Math.PI*2),i.fill(),nt>6&&(i.beginPath(),i.moveTo(z-T/2,et+p*.5),i.lineTo(z+T/2,et+p*.5),i.lineTo(z+T/2-1,et+p*.4+nt),i.lineTo(z-T/2+1,et+p*.4+nt),i.closePath(),i.fill(),Ct(i,z-.5,et+4,1,nt,ct));else{const U=n.bangs===!0?p*.38:p*.2;if(i.beginPath(),i.moveTo(z-T/2,et+p*.42),i.quadraticCurveTo(z-T/4,et+U+2,z-1,et+U),i.quadraticCurveTo(z+T/4,et+U+3,z+T/2,et+p*.45),i.lineTo(z+T/2,et+p*.2),i.lineTo(z-T/2,et+p*.2),i.closePath(),i.fill(),nt>4&&!o){const B=Math.min(nt,p*1.1);i.fillRect(z-T/2-.5,et+p*.3,2.6,B),i.fillStyle=ct,i.fillRect(z+T/2-2,et+p*.3,2.6,B)}o&&nt>4&&(i.fillStyle=at,i.fillRect(z-T/2-1,et+p*.3,4,Math.min(nt,p))),i.fillStyle=vt,i.beginPath(),i.ellipse(z-T/6,et+p*.14,T/5,1.2,-.2,0,Math.PI*2),i.fill()}if(!c&&!o&&(n.part==="center"||xt==="longStraight")&&Ct(i,z-.4,et-.5,.9,p*.22,ct),!c&&(xt==="shag"||n.bangs==="curtain")){i.fillStyle=at;for(const U of o?[1]:[-1,1])i.beginPath(),i.moveTo(z+U*.5,et+p*.12),i.quadraticCurveTo(z+U*T*.18,et+p*.46,z+U*(T/2+.5),et+p*.62),i.lineTo(z+U*(T/2+.5),et+p*.18),i.closePath(),i.fill();i.fillStyle=ct,i.fillRect(z+T/2-1.5,et+p*.3,1.2,p*.5)}if(xt==="curlyBig"||xt==="mop"){const U=T/2+(xt==="curlyBig"?1.6:.9),B=xt==="curlyBig"?13:11;for(let $=0;$<B;$++){const Z=Math.PI*(.92+$/(B-1)*1.16);fe(i,z+(o?-1:0)+Math.cos(Z)*U,et+p*.42+Math.sin(Z)*p*.56,2.4+$%2*.4,2.3+$*7%3*.25,$%3===0?Jt(at,.16):$%3===1?at:ct)}for(let $=0;$<5;$++)fe(i,z-T*.3+$*T*.15,et+p*.06-$%2,2.3,2.1,$%2?Jt(at,.16):at);if(!c){const $=et+p*(xt==="mop"?.36:.22),Z=o?3:5;for(let yt=0;yt<Z;yt++)fe(i,z+(o?1:-T*.36)+yt*T*.18,$+yt%2*1.6,2.4,xt==="mop"?3:2.2,yt%2?ct:at)}}if(xt==="curlyMid"||xt==="curlyShort"||xt==="curls"||xt==="fluffy"){const U=xt==="curlyShort"?6:8;for(let B=0;B<U;B++){const $=Math.PI*(1.05+B/(U-1)*.9),Z=T/2+(xt==="fluffy"?2.5:1.5);fe(i,z+Math.cos($)*Z,et+p*.42+Math.sin($)*p*.5,xt==="fluffy"?3.4:2.8,xt==="fluffy"?3.4:2.8,B%2?vt:at)}}if(xt==="twin")for(const U of o?[-1]:[-1,1])i.fillStyle=at,i.beginPath(),i.ellipse(z+U*(T/2+2),et+p*.75,2.6,7,U*.2,0,Math.PI*2),i.fill(),Ct(i,z+U*(T/2+2)-1.5,et+p*.32,3,2,"#e84a6f");if(xt==="ponytail"&&(i.fillStyle=at,o||c?(i.beginPath(),i.ellipse(z-(o?T/2:0),et+p*.9,2.8,9,.25,0,Math.PI*2),i.fill()):fe(i,z+T/2+1,et+p*.5,2,5,ct)),xt==="bun"&&fe(i,z,k-1,4,3.4,at),xt==="rapunzel"&&!c)for(let U=0;U<8;U++)fe(i,z+T/2+2+U%2,et+p+U*5,2.6,3,U%2?ct:vt)}if(l("earrings")&&!c&&!o&&(fe(i,z-_/2-.4,et+p*.68,.9,1.4,"#f4d060"),fe(i,z+_/2+.4,et+p*.68,.9,1.4,"#f4d060")),l("hat")&&(Ct(i,z-_/2-4,et+1,_+8,2,"#24242a"),Ct(i,z-_/2+1,et-5,_-2,6,"#34343c"),Ct(i,z-_/2+1,et-1,_-2,1.4,"#7a1a22")),l("crown")){i.fillStyle="#f4d060",i.beginPath(),i.moveTo(z-5,et+1);for(let k=0;k<=4;k++)i.lineTo(z-5+k*2.5,et-(k%2?1:4));i.lineTo(z+5,et+1),i.closePath(),i.fill(),fe(i,z,et-1,1,1,"#c41e3a")}l("headphones")&&(Ct(i,z-_/2,et-2,_,1.5,"#222"),Ct(i,z-_/2-2,et+p*.35,3,5,"#222"),Ct(i,z+_/2-1,et+p*.35,3,5,"#222")),l("monocle")&&!c&&!o&&(i.strokeStyle="#d8c890",i.lineWidth=.9,i.beginPath(),i.arc(z+2.9,et+Math.round(p*.48)+.4,2.4,0,Math.PI*2),i.stroke(),Ct(i,z+4.8,et+Math.round(p*.48)+2,.7,6,"#d8c890")),l("sunglasses")&&!c&&Ct(i,z-5,et+1,10,2,"#111"),l("shadesup")&&!c&&(Ct(i,z-5.5,et-.5,4.6,2.2,"#141014"),Ct(i,z+.9,et-.5,4.6,2.2,"#141014"),Ct(i,z-1,et,2,.8,"#141014"),Ct(i,z-4.6,et,1.2,.6,"#5a5a6a")),i.restore(),i.restore()}function rv(i,t,e){const n=i.getImageData(0,0,t,e),s=n.data;for(let c=3;c<s.length;c+=4)s[c]=s[c]>110?255:0;const r=new Uint8ClampedArray(s),a=(c,h)=>c>=0&&h>=0&&c<t&&h<e&&r[(h*t+c)*4+3]>0,o=[26,18,22];for(let c=0;c<e;c++)for(let h=0;h<t;h++){if(a(h,c))continue;const l=h%yi,f=c%bi;if(l===0||l===yi-1||f===0||f===bi-1)continue;const d=a(h,c-1)?(c-1)*t+h:a(h-1,c)?c*t+h-1:a(h+1,c)?c*t+h+1:a(h,c+1)?(c+1)*t+h:-1;if(d>=0){const m=(c*t+h)*4,g=d*4;s[m]=Math.round(r[g]*.3+o[0]*.5),s[m+1]=Math.round(r[g+1]*.25+o[1]*.5),s[m+2]=Math.round(r[g+2]*.3+o[2]*.5),s[m+3]=255}}i.putImageData(n,0,0)}const Zc=new Map;function gu(i){let t=Zc.get(i);if(t)return t;const e=ze[i];if(!e)throw new Error("Нет персонажа: "+i);t=document.createElement("canvas"),t.width=yi*Ns.length,t.height=bi*Kc.length;const n=t.getContext("2d",{willReadFrequently:!0});return n.imageSmoothingEnabled=!1,Kc.forEach((s,r)=>Ns.forEach((a,o)=>{const c=o>=6;n.save(),n.beginPath(),n.rect(o*yi,r*bi,yi,bi),n.clip(),sv(n,o*yi,r*bi,e,a,c&&s==="b"&&a!=="sit"&&a!=="arms"&&a!=="dance1"&&a!=="dance2"?"f":s),n.restore()})),rv(n,t.width,t.height),(i==="kukolnik"||i==="narrator")&&(n.globalCompositeOperation="source-in",n.fillStyle="#0a0808",n.fillRect(0,0,t.width,t.height)),Zc.set(i,t),t}const Jc=new Map;let $a=null;function av(){return $a||($a=Je(32,32,i=>{const t=i.createRadialGradient(16,16,2,16,16,16);t.addColorStop(0,"rgba(0,0,0,0.6)"),t.addColorStop(1,"rgba(0,0,0,0)"),i.fillStyle=t,i.fillRect(0,0,32,32)})),$a}function vu(i){const t=i.attributes.normal;for(let e=0;e<t.count;e++)t.setXYZ(e,0,.75,.66);t.needsUpdate=!0}class Sl{constructor(t,e=t){this.id=e,this.x=0,this.z=0,this.y=0,this.dir="f",this.pose=null,this.moving=!1,this.t=Math.random()*3,this.target=null,this.hidden=!1,this.charId="",this.group=new le,this.roll=0,this.alpha=1,this.float=0,this.danceBeat=0;const n=new be(mu/Sn,Wo/Sn);n.translate(0,Wo/Sn/2,0),vu(n),this.map=null,this.mesh=new lt(n,new Zn({alphaTest:.5,side:Ie,transparent:!1})),this.mesh.castShadow=!0,this.setChar(t),this.shadow=new lt(new be(1.5,.9),new Re({map:av(),transparent:!0,depthWrite:!1})),this.shadow.rotation.x=-Math.PI/2,this.shadow.position.y=.03,this.group.add(this.mesh,this.shadow)}setChar(t){if(this.charId===t)return;this.charId=t;let e=Jc.get(t);e||(e=new jh(gu(t)),e.magFilter=e.minFilter=Ue,e.generateMipmaps=!1,e.colorSpace=hn,Jc.set(t,e)),this.map&&this.map.dispose(),this.map=e.clone(),this.map.needsUpdate=!0,this.map.repeat.set(1/Ns.length,1/3),this.mesh.material.map=this.map,this.mesh.material.needsUpdate=!0}get def(){return ze[this.charId]}place(t,e,n){return this.x=t,this.z=e,n&&(this.dir=n),this.sync(),this}face(t,e){const n=t-this.x,s=e-this.z;this.dir=Math.abs(n)>Math.abs(s)?n>0?"r":"l":s>0?"f":"b"}walkTo(t,e,n=4){return this.target&&this.target.res(),globalThis.__G?.fast?(this.place(t,e,this.dir),Promise.resolve()):new Promise(s=>{this.target={x:t,z:e,speed:n,res:s}})}stop(){if(this.target){const t=this.target.res;this.target=null,t()}this.moving=!1}update(t){if(this.t+=t,this.target){const e=this.target.x-this.x,n=this.target.z-this.z,s=Math.hypot(e,n),r=this.target.speed*t;if(s<=r){this.x=this.target.x,this.z=this.target.z;const a=this.target.res;this.target=null,this.moving=!1,a()}else this.x+=e/s*r,this.z+=n/s*r,this.face(this.target.x,this.target.z),this.moving=!0}this.sync()}sync(){let t=this.pose||(this.moving?"walk"+Math.floor(this.t*8)%4:"idle"+Math.floor(this.t*1.6)%2);this.pose==="dance"&&(t=Math.floor(this.danceBeat)%2?"dance1":"dance2");const e=Math.max(0,Ns.indexOf(t)),n=this.dir==="f"?0:this.dir==="b"?1:2,s=Ns.length,r=this.dir==="l";this.map.repeat.x=(r?-1:1)/s,this.map.offset.set((e+(r?1:0))/s,1-(n+1)/3),this.group.position.set(this.x,this.y+this.float,this.z),this.mesh.rotation.z=this.roll,this.group.visible=!this.hidden,this.shadow.visible=this.y+this.float<.6;const a=this.mesh.material;this.alpha<1?(a.transparent=!0,a.opacity=this.alpha,a.alphaTest=.05):a.transparent&&(a.transparent=!1,a.opacity=1,a.alphaTest=.5)}dispose(){this.map.dispose(),this.mesh.geometry.dispose(),this.mesh.material.dispose(),this.shadow.geometry.dispose(),this.shadow.material.dispose()}}class _u{constructor(t,e){this.id=t,this.def=e,this.group=new le,this.boxes=[],this.inters=[],this.triggers=[],this.actors=[],this.spawns={},this.masked=[],this.updaters=[],this.photos=[],this.guards=[],this.lasers=[],this.occluders=[],this.props=[],this.flick=[],this.named={}}actor(t){return this.actors.find(e=>e.id===t)}inter(t){return this.inters.find(e=>e.id===t)}dispose(){this.group.traverse(t=>{if(t.geometry&&t.geometry.dispose(),t.material){const e=Array.isArray(t.material)?t.material:[t.material];for(const n of e)n.map&&n.map.userData.own&&n.map.dispose(),n.dispose()}});for(const t of this.actors)t.dispose()}}function ov(i,t){return new We({transparent:!0,depthWrite:!1,side:Ie,blending:Si,uniforms:{col:{value:new Ft(i)},k:{value:t},time:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; varying float vL; void main(){ vec4 wp = modelMatrix * vec4(position,1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - wp.xyz); vL = uv.y; gl_Position = projectionMatrix * viewMatrix * wp; }",fragmentShader:"uniform vec3 col; uniform float k; varying vec3 vN; varying vec3 vV; varying float vL; float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898,78.233))) * 43758.5453); } void main(){ float edge = pow(abs(dot(normalize(vN), vV)), 1.6); float along = pow(clamp(vL, 0.0, 1.0), 0.8); float n = 0.85 + 0.15 * h(floor(gl_FragCoord.xy / 3.0)); gl_FragColor = vec4(col * edge * along * k * n, 1.0); }"})}class xu{constructor(t,e){this.room=t,this.G=e,this.slots={n:[],w:[],e:[]},this.nLights=0}overlaps(t,e,n,s,r,a){return this.slots[t].some(o=>o!==a&&e<o.a1-.02&&n>o.a0+.02&&s<o.y1-.02&&r>o.y0+.02)}freeAlong(t,e,n,s,r,a){const o=(t==="n"?this.w:this.d)/2-n-.1;for(let c=0;c<60;c++){const h=(c%2?1:-1)*Math.ceil(c/2)*.2,l=Math.max(-o,Math.min(o,e+h));if(!this.overlaps(t,l-n,l+n,s,r,a))return l}return e}wallSlot(t,e,n,s,r,a={}){const o=n/2,c=s-r/2,h=s+r/2,l=this.slots[t],f=t==="n"?"x":"z";if(a.fixed){const g={a0:e-o,a1:e+o,y0:c,y1:h,fixed:!0,obj:a.obj,axis:f,follow:[]};l.push(g);for(const v of l)if(v!==g&&!v.fixed&&v.a0<g.a1&&v.a1>g.a0&&v.y0<h&&v.y1>c){const u=(v.a0+v.a1)/2,p=(v.a1-v.a0)/2,y=this.freeAlong(t,u,p,v.y0,v.y1,v)-u;v.a0+=y,v.a1+=y;for(const b of[v.obj,...v.follow])b&&(b.position[f]+=y)}return e}const d=this.freeAlong(t,e,o,c,h),m={a0:d-o,a1:d+o,y0:c,y1:h,fixed:!1,obj:a.obj,axis:f,follow:[]};return l.push(m),a.obj&&(a.obj.userData.slot=m),d}get w(){return this.room.def.w}get d(){return this.room.def.d}mat(t,e="plaster"){return t.color&&!t.tex?new Zn({map:$1(typeof t.color=="number"?t.color:new Ft(t.color).getHex()),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1}):new Zn({map:Ye(t.tex||e,t.tint),emissive:t.emissive||0,emissiveIntensity:t.ei??1,transparent:t.opacity!=null,opacity:t.opacity??1})}texBox(t,e,n,s,r){const a=new Ze(t,e,n),o=this.mat(s,r);if(o.map){const c=o.map.unit||2,h=a.attributes.uv,l=[[n,e],[n,e],[t,n],[t,n],[t,e],[t,e]];for(let f=0;f<6;f++)for(let d=0;d<4;d++){const m=f*4+d;h.setXY(m,h.getX(m)*l[f][0]/c,h.getY(m)*l[f][1]/c)}}return new lt(a,o)}tag(t,e,n){e.mask&&this.room.masked.push({obj:t,mask:e.mask,box:n}),e.name&&(this.room.named[e.name]=t)}floor(t="floor",e={}){const n=e.apron??(e.d==null&&e.z==null&&!e.y?7:0),s=this.texBox(e.w||this.w,.4,(e.d||this.d)+n,{tex:t,...e});return s.position.set(e.x||0,-.2+(e.y||0),(e.z||0)+n/2),s.receiveShadow=!0,this.room.group.add(s),this.tag(s,e),s}walls(t="plaster",e={}){const n=e.h||5,s=this.w,r=this.d,a=.4,o=(c,h,l,f)=>{const d=this.texBox(c,n,h,{tex:t,...e});return d.position.set(l,n/2,f),d.receiveShadow=!0,this.room.group.add(d),d};if(e.n!==!1&&o(s+a*2,a,0,-r/2-a/2),e.w!==!1&&o(a,r,-s/2-a/2,0),e.e!==!1&&o(a,r,s/2+a/2,0),e.skirt!==!1){const h=(g,v)=>{const u=this.texBox(a,n,9,{tex:t,...e});u.material.color.setHex(4866624),u.position.set(g,n/2,v),this.room.group.add(u)},l=(g,v,u,p,_,y,b)=>{const I=new lt(new Ze(g,v,u),b);return I.position.set(p,_,y),this.room.group.add(I),I};e.w!==!1&&h(-s/2-a/2,r/2+9/2),e.e!==!1&&h(s/2+a/2,r/2+9/2);const f=new Re({color:328452});e.w!==!1&&l(a,14,r+9,-s/2-a/2,n+7,9/2,f),e.e!==!1&&l(a,14,r+9,s/2+a/2,n+7,9/2,f);const d=this.texBox(s+a*2,.22,.5,{tex:"darkwood"});d.position.set(0,n-.11,-r/2+.05),this.room.group.add(d);const m=new lt(new be(s+80,r+80),new Re({color:328452}));m.rotation.x=-Math.PI/2,m.position.set(0,-.42,0),this.room.group.add(m)}if(e.trim){const c=this.texBox(s,.5,.1,{tex:e.trim});c.position.set(0,.25,-r/2+.05),this.room.group.add(c);const h=this.texBox(s,.3,.15,{tex:e.trim});h.position.set(0,n-.15,-r/2+.07),this.room.group.add(h)}}collider(t,e,n,s){const r={x0:Math.min(t,n),z0:Math.min(e,s),x1:Math.max(t,n),z1:Math.max(e,s),on:!0};return this.room.boxes.push(r),r}box(t,e,n,s,r,a={}){const o=this.texBox(n,r,s,a,"wood");o.position.set(t,(a.y||0)+r/2,e),o.castShadow=a.cast!==!1,o.receiveShadow=!0,a.ry&&(o.rotation.y=a.ry),this.room.group.add(o);let c;return a.solid!==!1&&!(a.y>2.2)&&(c=this.collider(t-n/2,e-s/2,t+n/2,e+s/2),o.userData.box=c),this.tag(o,a,c),o}decal(t,e={}){const n=t.image,s=e.w||(t.userData.lw??n.width)/Sn,r=e.h||(t.userData.lh??n.height)/Sn,a=e.glow?new Re({map:t,transparent:!0,alphaTest:.1,color:e.color||16777215}):new Zn({map:t,transparent:!0,alphaTest:.1});e.opacity!=null&&(a.opacity=e.opacity,a.alphaTest=.01);const o=new lt(new be(s,r),a),c=e.y??2.4,h=!e.flat&&!e.noSlot&&(e.wall==="w"||e.wall==="e"||e.z==null||Math.abs(e.z-(-this.d/2+.03))<.15);if(e.wall==="w")o.position.set(-this.w/2+.03,c,h?this.wallSlot("w",e.at||0,s,c,r,{obj:o}):e.at||0),o.rotation.y=Math.PI/2;else if(e.wall==="e")o.position.set(this.w/2-.03,c,h?this.wallSlot("e",e.at||0,s,c,r,{obj:o}):e.at||0),o.rotation.y=-Math.PI/2;else if(e.flat)o.position.set(e.x||0,e.y??.03,e.z||0),o.rotation.x=-Math.PI/2;else{const l=e.x??e.at??0;o.position.set(h&&s<this.w*.6?this.wallSlot("n",l,s,c,r,{obj:o}):l,c,e.z??-this.d/2+.03)}return e.ry&&(o.rotation.y=e.ry),o.receiveShadow=!e.glow,this.room.group.add(o),this.tag(o,e),o}poster(t,e,n={}){return this.decal(j1(t,e,n),n)}sprite(t,e,n,s={}){const r=typeof t=="string"?K1(t):t,a=r.image,o=s.scale||1,c=(r.userData.lw??a.width)/Sn*o,h=(r.userData.lh??a.height)/Sn*o,l=new be(c,h);l.translate(0,h/2,0),s.glow||vu(l);const f=s.glow?new Re({map:r,alphaTest:.3,side:Ie,transparent:s.opacity!=null,opacity:s.opacity??1}):new Zn({map:r,alphaTest:.3,side:Ie,emissive:s.emissive||0}),d=new lt(l,f);if(d.position.set(e,s.y||0,n),d.castShadow=s.cast!==!1&&!s.glow,s.flipX&&(d.scale.x=-1),this.room.group.add(d),!s.glow&&!s.thin&&h>.8&&!s.mask){const g=Math.min(4,2+Math.floor(h/2));for(let v=1;v<=g;v++){const u=new Zn({map:r,alphaTest:.3,side:Ie,color:new Ft().setScalar(.62-v*.07)}),p=new lt(l,u);p.position.z=-.055*v,p.castShadow=!1,d.add(p)}}let m;if(s.solid){const g=s.solid===!0?Math.min(c,1.2)/2:s.solid;m=this.collider(e-g,n-.3,e+g,n+.3),d.userData.box=m}return this.room.props.push({x:e,z:n,y:s.y||0,w:c,kind:typeof t=="string"?t:"tex",box:m}),this.tag(d,s,m),d}actor(t,e,n,s={}){const r=new Sl(t,s.id||t);return r.place(e,n,s.dir||"f"),s.pose&&(r.pose=s.pose),r.mask=s.mask,s.hidden&&(r.hidden=!0),this.room.actors.push(r),this.room.group.add(r.group),s.mask&&this.room.masked.push({obj:r.group,mask:s.mask}),r}inter(t,e,n,s){const r={id:t,x:e,z:n,r:s.r||1.7,label:s.label,fn:s.fn,mask:s.mask,cond:s.cond,y:s.y??2.2,enabled:!0,quiet:s.quiet};if(!s.quiet){const a=new lt(new gl(.13),new Re({color:16771488}));a.position.set(e,r.y+.5,n),r.marker=a,this.room.group.add(a)}return this.room.inters.push(r),s.photo&&this.photo(t,s.photo,e,n,{cond:s.cond,mask:s.mask}),r}look(t,e,n,s,r,a={}){const o=typeof r=="function"?r:l=>l.run(r),c=a.egg?async l=>{await o(l),l.egg(a.egg)}:o,h=this.inter(t,e,n,{label:s,...a,fn:c});return a.egg&&(h.egg=a.egg),h}npc(t,e,n,s={}){const r=this.actor(t,e,n,s),a=this.collider(e-.4,n-.25,e+.4,n+.25);return r.box=a,s.mask&&this.room.masked.push({obj:new Ee,mask:s.mask,box:a}),s.talk&&this.inter(s.id||t,e,n+.2,{label:s.label||"Поговорить: "+ze[t].name,fn:async o=>{r.face(o.player.x,o.player.z),o.player.face(r.x,r.z),await(typeof s.talk=="function"?s.talk(o,r):o.run(s.talk))},r:1.9,y:2.6,mask:s.mask,cond:s.cond}),r}door(t,e,n){const s=n.w||2.2,r=n.h||3.4;let a=e,o,c;if(n.wall==="s")c=this.southExit(e,n.sign||n.label),o=this.d/2-1.7;else{if(c=J1(s,r,n.col||"#5a3a22",n.sign,!!n.double||s>2.6,n.glow),n.wall==="w"||n.wall==="e"){const h=n.wall==="w"?-1:1,l=this.wallSlot(n.wall,e,s+.8,r/2,r+.6,{fixed:!0,obj:c});c.position.set(h*(this.w/2),0,l),c.rotation.y=-h*Math.PI/2,a=h*(this.w/2-.9),o=l}else{const h=n.z??-this.d/2;c.position.set(e,0,h),n.z==null&&this.wallSlot("n",e,s+.8,r/2,r+.6,{fixed:!0,obj:c}),o=h+.9}this.room.group.add(c),this.tag(c,{mask:n.mask})}return this.inter(t,a,o,{label:n.label,mask:n.mask,y:n.wall==="s"?2.7:3.2,fn:async h=>{if(n.cond&&!n.cond()){h.sfx("locked"),n.locked&&await h.run(typeof n.locked=="string"?["~: "+n.locked]:n.locked);return}if(n.fn)return n.fn(h);n.wall!=="s"?(h.sfx("door"),Q1(c)):h.sfx("step"),await h.goto(n.to,n.spot||"start",{fade:n.fade})}}),c}southExit(t,e){const n=new le,s=this.d/2-1.2,r=new Zn({map:Ye("gold")}),a=this.texBox(2.2,.03,3.2,{tex:"carpet"});a.position.set(t,.015,s+1.2),a.receiveShadow=!0,n.add(a);for(const m of[-1,1]){const g=new lt(new ee(.06,.06,.95,8),r);g.position.set(t+m*1.35,.48,s),g.castShadow=!0,n.add(g);const v=new lt(new ee(.2,.24,.06,12),r);v.position.set(t+m*1.35,.03,s),n.add(v);const u=new lt(new dn(.1,10,8),r);u.position.set(t+m*1.35,1,s),n.add(u)}const o=e.length>24?e.slice(0,23)+"…":e,c=Math.max(64,Math.min(140,o.length*6+26)),h=new lt(new be(c/40,.42),new Re({map:Je(c,17,m=>{m.fillStyle="#123a22",m.fillRect(0,0,c,17),m.strokeStyle="#d4ae48",m.strokeRect(.5,.5,c-1,16),m.fillStyle="#7dffb0",m.fillRect(4,7,7,3),m.fillRect(6,5,2,7),m.fillRect(5,6,4,5),us(m,o,c/2+5,5,{size:7,col:"#e8fff0",align:"center"})},"sexit2"+e)}));h.position.set(t,.32,s+.25),h.rotation.x=-1,n.add(h);const l=new lt(new Ze(c/40+.1,.06,.4),r);l.position.set(t,.1,s+.18),n.add(l);const f=new lt(new be(.9,.9),new Re({map:Je(16,16,m=>{m.fillStyle="#ffe9a8";for(let g=0;g<6;g++)m.fillRect(2+g,4+g,12-g*2,1);m.fillRect(6,0,4,5)},"sarrow"),transparent:!0,opacity:.85}));f.rotation.x=-Math.PI/2,f.position.set(t,.035,s+1.3),n.add(f);const d=new Is(10485704,3,4,1.6);return d.position.set(t,.8,s+.6),n.add(d),this.room.group.add(n),n}wall(t,e,n,s,r={}){const a=Math.abs(n-t)||.4,o=Math.abs(s-e)||.4,c=r.h||4.2,h=this.box((t+n)/2,(e+s)/2,a,o,c,{tex:r.tex||"plaster",tint:r.tint,...r}),l=h.material;l.transparent=!0;const f=r.wide?-this.w/2:Math.min(t,n)-.4,d=r.wide?this.w/2:Math.max(t,n)+.4;if(this.room.occluders.push({mesh:h,x0:f,x1:d,z:Math.max(e,s),h:c,depth:r.depth}),r.trim!==!1){const m=this.box((t+n)/2,(e+s)/2,a+.06,o+.06,.25,{tex:"darkwood",y:c-.25,solid:!1,cast:!1}),g=m.material;g.transparent=!0,this.room.occluders.push({mesh:m,x0:f,x1:d,z:Math.max(e,s),h:c,depth:r.depth})}return h}stairs(t,e,n,s=8,r={}){const a=new le;for(let o=0;o<s;o++){const c=this.texBox(n,.28,.5,{tex:r.tex||"stage"});if(c.position.set(t,.14+o*.28,e-o*.5),c.receiveShadow=!0,c.castShadow=!0,a.add(c),r.runner!==!1){const h=this.texBox(n*.55,.02,.52,{tex:"carpet"});h.position.set(t,.29+o*.28,e-o*.5),a.add(h)}}return this.room.group.add(a),this.collider(t-n/2,e-s*.5,t+n/2,e-.6),a}spawn(t,e,n,s="f"){this.room.spawns[t]={x:e,z:n,dir:s}}ambient(t,e,n){const s=n!=null?new m1(n,t,e):new y1(t,e);return this.room.group.add(s),s}sun(t,e,n=6,s=14,r=8){const a=new x1(t,e);a.position.set(n,s,r),a.castShadow=!0,a.shadow.mapSize.set(1024,1024);const o=Math.max(this.w,this.d)/2+4;return Object.assign(a.shadow.camera,{left:-o,right:o,top:o,bottom:-o,near:1,far:60}),a.shadow.bias=-.002,this.room.group.add(a,a.target),a}light(t,e,n,s,r,a=12,o={}){const c=new Is(s,r,a,1.4);if(c.position.set(t,e,n),o.pool||++this.nLights>10&&!o.force&&!o.name&&!o.mask){const h=Math.min(4,a*.32),l=new lt(new be(h*2,h*2),new Re({map:X1(),color:s,transparent:!0,opacity:Math.min(.55,.06*r),blending:Si,depthWrite:!1}));return l.rotation.x=-Math.PI/2,l.position.set(t,.03,n),l.renderOrder=2,this.room.group.add(l),c}return this.room.group.add(c),o.flicker&&this.room.flick.push({l:c,base:r,s:o.flicker}),o.mask&&this.room.masked.push({obj:c,mask:o.mask}),o.name&&(this.room.named[o.name]=c),c}spot(t,e,n,s,r,a,o,c={}){const h=new cu(a,o,c.dist||40,c.angle||.45,c.pen??.5,1.1);if(h.position.set(t,e,n),h.target.position.set(s,0,r),c.shadow!==!1&&(h.castShadow=!0,h.shadow.mapSize.set(1024,1024),h.shadow.bias=-.003,h.shadow.camera.near=1,h.shadow.camera.far=50),this.room.group.add(h,h.target),c.cone){const l=Math.hypot(s-t,e,r-n),f=Math.tan(c.angle||.45)*l,d=new ml(f,l,24,1,!0);d.translate(0,-l/2,0),d.rotateX(-Math.PI/2);const m=new lt(d,ov(a,(c.cone===!0?.07:c.cone)*2.2));m.position.set(t,e,n),m.lookAt(s,0,r),m.rotateY(Math.PI),this.room.group.add(m),h.cone=m}return c.name&&(this.room.named[c.name]=h),c.mask&&this.room.masked.push({obj:h,mask:c.mask}),h}trigger(t,e,n,s,r,a=!0){const o={x0:t,z0:e,x1:n,z1:s,fn:r,once:a,done:!1,inside:!1};return this.room.triggers.push(o),o}photo(t,e,n,s,r={}){this.room.photos.push({id:t,name:e,x:n,z:s,cond:r.cond,mask:r.mask,any:r.any})}onUpdate(t){this.room.updaters.push(t)}particles(t,e={}){const n=e.count||(t==="rain"?500:120),s=this.w+4,r=this.d+4,a=e.top||9,o=new Float32Array(n*3),c=new Float32Array(n);for(let m=0;m<n;m++)o[m*3]=(Math.random()-.5)*s,o[m*3+1]=Math.random()*a,o[m*3+2]=(Math.random()-.5)*r,c[m]=.5+Math.random();const h=new Fe;h.setAttribute("position",new fn(o,3));const l={dust:16771264,rain:10139872,petals:16298192,sparks:16760928,snow:16777215,confetti:16765024,glitch:6356960}[t],f=new Lg(h,new Yh({color:e.color||l,size:t==="rain"?.09:t==="dust"?.07:.14,transparent:!0,opacity:t==="dust"?.5:.8,depthWrite:!1,blending:t==="petals"||t==="snow"?Mi:Si}));this.room.group.add(f);const d={dust:.15,rain:18,petals:1.2,sparks:-1.5,snow:1,confetti:2,glitch:-3}[t];return this.onUpdate((m,g)=>{if(f.visible){for(let v=0;v<n;v++)o[v*3+1]-=d*c[v]*m,t!=="rain"&&(o[v*3]+=Math.sin(g*c[v]+v)*m*.3),o[v*3+1]<0&&(o[v*3+1]=a),o[v*3+1]>a&&(o[v*3+1]=0);h.attributes.position.needsUpdate=!0}}),e.name&&(this.room.named[e.name]=f),this.tag(f,e),f}guard(t,e,n){const s=this.actor(t,e[0][0],e[0][1],{id:n.id});s.mesh.material.emissive.set(3814456);const r=new Is(n.color||16728128,3,3,1.5);r.position.set(0,2.6,.4),s.group.add(r);const a=n.range||5,o=n.half||.5,c=new qs(a,16,-o,o*2);c.rotateX(-Math.PI/2);const h=new lt(c,new Re({color:n.color||16728128,transparent:!0,opacity:.14,depthWrite:!1}));h.position.y=.05,this.room.group.add(h);const l={actor:s,path:e,i:0,speed:n.speed||2.2,range:a,half:o,cone:h,wait:0,onCatch:n.onCatch,ang:0,off:0,pause:n.pause??.8,active:!0};return this.room.guards.push(l),l}laser(t,e,n,s,r){const a=Math.hypot(n-t,s-e),o=new lt(new Ze(a,.08,.08),new Re({color:r.color||16719952}));o.position.set((t+n)/2,1,(e+s)/2),o.rotation.y=-Math.atan2(s-e,n-t),this.room.group.add(o);const c=o.clone();c.position.y=1.9,o.add(c),c.position.set(0,.9,0),c.rotation.set(0,0,0);const h={mesh:o,x0:t,z0:e,x1:n,z1:s,period:r.period||3,duty:r.duty??.5,phase:r.phase||0,on:!0,onHit:r.onHit,active:!0};return this.room.lasers.push(h),h}crowd(t,e,n,s,r=1.5,a=1.6,o="b"){t.forEach((c,h)=>this.actor(c,e+h%s*r+Math.floor(h/s)%2*.5,n+Math.floor(h/s)*a,{dir:o,id:"crowd_"+h+"_"+c}))}table(t,e,n=2.4,s=1.2,r={}){const a=this.box(t,e,n,s,.15,{tex:r.tex||"wood",y:1,...r});for(const[o,c]of[[-1,-1],[1,-1],[-1,1],[1,1]])this.box(t+o*(n/2-.15),e+c*(s/2-.15),.15,.15,1,{tex:"darkwood",solid:!1,mask:r.mask});return a}curtain(t,e,n,s=6,r={}){return this.box(t,e,n,.3,s,{tex:"velvet",solid:r.solid??!1,...r})}}globalThis.__charSheet=gu;const a2=Object.freeze(Object.defineProperty({__proto__:null,Actor:Sl,Builder:xu,Room:_u},Symbol.toStringTag,{value:"Module"})),Rr="e5 a5 c6 | b5:8 g#5 | a5 e5 c5 | d5:12 | d5 f5 a5 | g5:8 e5 | f5 d5 b4 | a4:12",Xa="e5 a5 c#6 | b5:8 g#5 | a5 e5 c#5 | d5:12 | d5 f#5 a5 | g#5:8 e5 | f#5 d5 b4 | a4:12",Qc="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | c2 . . | e2 . . | a2 . .",th=". a3+c4+e4 a3+c4+e4 | . g#3+b3+e4 g#3+b3+e4 | . a3+c4+e4 . | . a3+d4+f4 a3+d4+f4 | . a3+d4+f4 . | . g3+c4+e4 g3+c4+e4 | . g#3+b3+d4 g#3+b3+d4 | . a3+c4+e4 .",lv="a2 . . | e2 . . | a2 . . | d2 . . | d2 . . | e2 . . | e2 . . | a2 . .",eh={theater:{bpm:92,parts:[{inst:"box",d:4,seq:Rr+" | .:12 | e5:8 c5 | .:12 | b4:8 g#4 | a4 c5 e5 | a5:12 | g#5:8 e5 | a5:12"},{inst:"upright",d:4,seq:Qc,vol:.8},{inst:"piano",d:4,seq:th,vol:.5},{inst:"drone",seq:"a1:96 .:96",vol:.5}]},backstage:{bpm:60,parts:[{inst:"drone",seq:"d2:40 .:24",vol:.7},{inst:"box",seq:"a5:6 .:10 f5:4 .:12 d5:8 .:24 e5:2 f5:2 e5:4 .:30",vol:.7},{inst:"piano",seq:".:50 d3:6 .:44 a2:6 .:21",vol:.5}]},horror:{bpm:50,parts:[{inst:"drone",seq:"c2:48 c#2:16",vol:.9},{inst:"piano",seq:"eb6:2 .:30 d6:2 .:14 f#5:2 .:53",vol:.5},{inst:"piano",seq:"c2:4 .:75",vol:.8},{inst:"box",seq:".:37 g5:1 gb5:1 f5:2 .:60",vol:.4}]},heist:{bpm:108,parts:[{inst:"drums",seq:"k...h.s.k.h.s.h.k...h.s.k.hks.hh",vol:.55},{inst:"bass",d:2,vol:.9,seq:"e2 e2 f2 f2 f#2 f#2 f2 f2 | e2 e2 f2 f2 f#2 f#2 f2 f2 | c2 c2 c#2 c#2 d2 d2 c#2 c#2 | b1 b1 c2 c2 c#2 c#2 c2 b1"},{inst:"strings",d:16,vol:.5,seq:"e3+g3+b3 | e3+g3+c4 | c3+e3+a3 | b2+d#3+f#3+a3"},{inst:"pluck",d:2,vol:.35,seq:".:8 b4 . b4 c5 . b4 . | .:8 b4 . b4 c5 . b4 . | .:8 a4 . a4 bb4 . a4 . | .:8 f#4 . f#4 g4 . a4 ."},{inst:"lead",vol:.75,seq:".:64 | e5:6 g5:2 f#5:8 | b4:6 e5:2 d#5:8 | e5:4 b5:4 g5:4 e5:4 | f#5:12 .:4 | a5:6 g5:2 e5:8 | c5:6 a4:2 b4:8 | e5:4 g5:2 f#5:2 d#5:4 b4:4 | e5:16"}]},chase:{bpm:140,parts:[{inst:"drums",seq:"k.hkk.h.k.hks.hhk.h.s.hkk.khs.hs",vol:.9},{inst:"bass",d:1,seq:"d2 d2 d3 d2 d2 d3 d2 d2 d2 d3 d2 d2 d3 d2 f2 e2 | bb1 bb1 bb2 bb1 bb1 bb2 bb1 bb1 bb1 bb2 bb1 bb1 bb2 bb1 c2 c#2"},{inst:"lead",d:2,vol:.8,seq:"d5 f5 a5 d6 c6 a5 f5 a5 | d5 f5 bb5 d6 c6 bb5 a5 g5 | f5 a5 c6 f6 e6 c6 a5 c6 | e5 g5 c6 e6 d6:4 c#6:4"},{inst:"pad",seq:"d3+a3:32 bb2+f3:32"}]},school:{bpm:104,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | a3+c4+e4 . c4+e4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 c3 a2 a2 f2 f2 g2 g2"},{inst:"pluck",d:2,vol:.7,seq:"e5 g5 c6:4 b5 g5 e5:4 | c5 e5 a5:4 g5 e5 c5:4 | a4 c5 f5:4 e5 c5 a4:4 | b4 d5 g5:4 .:8 | g5:4 e5 c5 d5:4 e5:4 | e5:6 c5 a4:8 | f5:4 e5 d5 c5:4 a4:4 | d5:4 b4:4 g4:8"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},school_soft:{bpm:76,parts:[{inst:"piano",d:8,vol:.7,seq:"c4+g4 e4+c5 | a3+e4 c4+a4 | f3+c4 a3+f4 | g3+d4 b3+g4"},{inst:"box",d:4,vol:.7,seq:".:16 | e5 g5 c6:8 | .:8 a5 g5 | f5:8 e5:8 | d5:16 | .:16 | c5 e5 a5:8 | g5:16"},{inst:"pad",seq:"c3+g3:32 f3+c4:16 g3+d4:16",vol:.8}]},noir:{bpm:62,swing:.25,parts:[{inst:"upright",d:4,vol:.9,seq:"d2 a1 d2 c2 | bb1 f2 bb1 a1 | g1 d2 g2 bb1 | a1 e2 a1 c#2 | d2 f2 a2 f2 | g1 bb1 d2 g2 | e2 bb1 a1 e2 | d2 a1 d2 ."},{inst:"drums",seq:"h.......s.......h.....h.s.....hh",vol:.32},{inst:"piano",d:16,vol:.42,seq:"d3+f3+a3+c4+e4 | bb2+d3+f3+a3+c4 | g2+bb2+d3+f3+a3 | a2+c#3+g3+bb3 | d3+f3+a3+c4 | g2+bb2+d3+f3+a3 | e3+g3+bb3+d4 | a2+c#3+g3+f4"},{inst:"sax",vol:.75,seq:".:8 a4:6 f4:2 | e4:10 d4:2 f4:4 | g4:6 ab4:2 g4:4 f4:2 d4:2 | c#4:12 .:4 | .:4 d5:4 f5:6 e5:2 | d5:8 c5:4 bb4:4 | a4:6 ab4:2 g4:6 e4:2 | d4:16"},{inst:"pad",vol:.22,seq:"d3+a3:64 g2+d3:32 a2+e3:32"}]},fairy:{bpm:92,parts:[{inst:"box",d:4,seq:"c5 f5 a5 | g5:8 e5 | f5 d5 a4 | bb4:8 d5 | c5 f5 a5 | c6:8 g5 | bb5 a5 g5 | f5:12"},{inst:"upright",d:12,vol:.7,seq:"f2 c2 d2 bb1 f2 c2 bb1:6 c2:6 f2"},{inst:"pluck",d:2,vol:.5,seq:"f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | d3 f3 a3 d4 a3 f3 | bb2 d3 f3 bb3 f3 d3 | f3 a3 c4 f4 c4 a3 | c3 e3 g3 c4 g3 e3 | bb2 d3 f3 c3 e3 g3 | f3 a3 c4 f4:6"},{inst:"strings",vol:.6,seq:".:96 f4+a4:24 e4+g4:24 d4+f4:24 e4+g4:12 f4+a4:12"}]},idol_agency:{bpm:128,parts:[{inst:"drums",seq:"k.h.k.h.k.h.k.h.",tag:"drums"},{inst:"drums",seq:"....c.......c...",tag:"drums",vol:.8},{inst:"bass",d:2,tag:"bass",seq:"c2 c2 c2 c2 c2 c2 c2 c2 | g1 g1 g1 g1 g1 g1 g1 g1 | a1 a1 a1 a1 a1 a1 a1 a1 | f1 f1 f1 f1 f1 f1 f1 f1"},{inst:"pad",tag:"keys",seq:"c4+e4+g4:16 b3+d4+g4:16 a3+c4+e4:16 a3+c4+f4:16"},{inst:"lead",d:2,tag:"lead",seq:"e5 e5 g5 e5 c6:4 b5:4 | d5 d5 g5 d5 b5:4 a5:4 | c5 c5 e5 c5 a5:4 g5:4 | f5 a5 c6 a5 g5:8"}]},idol_own:{bpm:122,parts:[{inst:"drums",seq:"k..hs.hk.khhs.h.",tag:"drums"},{inst:"bass",d:2,tag:"bass",seq:"a1 . a2 a1 . a1 a2 . | f1 . f2 f1 . f1 f2 . | d2 . d3 d2 . d2 d3 . | e2 . e3 e2 . e2 g#2 ."},{inst:"pad",tag:"keys",seq:"a3+c4+e4:16 a3+c4+f4:16 a3+d4+f4:16 g#3+b3+e4:16"},{inst:"pluck",d:1,tag:"arp",vol:.5,seq:"a4 e5 a5 e5 c5 e5 a5 e5 a4 e5 a5 e5 c5 e5 a5 e5 | a4 f5 a5 f5 c5 f5 a5 f5 a4 f5 a5 f5 c5 f5 a5 f5 | a4 d5 a5 d5 f5 d5 a5 d5 a4 d5 a5 d5 f5 d5 a5 d5 | g#4 e5 b5 e5 g#5 e5 b5 e5 g#4 e5 b5 e5 d5 e5 b5 e5"},{inst:"sax",d:2,tag:"lead",vol:.9,seq:"a4:4 c5 b4 a4:4 e5:4 | f5:6 e5 d5 c5 d5 . | d5:4 f5 e5 d5:4 a5:4 | g#5:6 f5 e5:8 | a5:4 g#5 a5 b5:4 c6:4 | a5:4 f5:4 e5 f5 e5 d5 | f5:4 e5 d5 c5:4 b4:4 | e5:4 g#5:4 a5:8"}]},diva:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"strings",d:2,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"drums",seq:"r..r..r.r..r..r.",vol:.6}]},collapse:{bpm:138,parts:[{inst:"box",d:3,seq:"e5 a5 c6 b5 g#5 a5 e5 c5 d5"},{inst:"bass",d:7,seq:"a1 d2 e2 c2"},{inst:"drums",seq:"k..k.s.k.h..s.kh",vol:.7},{inst:"drums",seq:"..h..h.h.t",vol:.5},{inst:"pad",seq:"a2+eb3:32 bb2+e3:32"},{inst:"sax",d:5,vol:.4,seq:"a4 . d5 . c#5 ."}]},dressing:{bpm:66,parts:[{inst:"box",d:4,seq:Rr,vol:.8},{inst:"pad",seq:"a2+e3:24 d3+a3:24 d3+f3:12 c3+e3:12 e3+b3:12 a2+e3:12",vol:.9}]},fin_argue:{bpm:84,parts:[{inst:"strings",d:1,vol:.55,seq:"d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 d3 eb3 | c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3 c#3 d3"},{inst:"drums",seq:"k..k............k..k...........",vol:.7},{inst:"organ",vol:.35,seq:"d2+ab2+c#3:32 eb2+a2+d3:32"},{inst:"strings",vol:.6,seq:".:12 f5+b5:2 .:18 g#5+d6:2 .:14 a5+eb6:2 .:14"},{inst:"drone",vol:.6,seq:"d1:64"}]},fin_overture:{bpm:108,parts:[{inst:"strings",d:4,seq:Rr,vol:1.2},{inst:"organ",d:4,seq:th,vol:.9},{inst:"upright",d:4,seq:Qc},{inst:"drums",seq:"t...h...h...",vol:.5}]},fin_queen:{bpm:112,parts:[{inst:"upright",d:1,seq:"a2:3 e3 a3:2 e3:2 a2:3 e3 a3:2 e3:2 | e2:3 b2 e3:2 b2:2 e2:3 b2 g#3:2 e3:2 | d2:3 a2 d3:2 a2:2 e2:3 b2 e3:2 b2:2 | a2:3 e3 a3:2 e3:2 a2:4 .:4"},{inst:"piano",d:4,vol:.7,seq:"a3+c4+e4 . . a3+c4+e4 | g#3+b3+d4 . . g#3+b3+d4 | a3+d4+f4 . g#3+b3+e4 . | a3+c4+e4 . a3+c4+e4 ."},{inst:"voice",d:2,vol:.9,seq:"e5:4 a5:4 c6:6 b5 | b5:8 g#5:4 e5:4 | f5:4 a5:4 g#5:6 b5 | a5:12 .:4"},{inst:"strings",d:16,vol:.8,seq:"a3+e4 g#3+e4 a3+f4:8 g#3+e4:8 a3+e4"},{inst:"drums",seq:"r..r..r.r..r..r.k.......s.......",vol:.6}]},fin_girl:{bpm:100,parts:[{inst:"voice",d:4,seq:Xa,vol:.8},{inst:"pluck",d:2,vol:.6,seq:"a3 c#4 e4 a4 e4 c#4 | e3 g#3 b3 e4 b3 g#3 | a3 c#4 e4 a4 e4 c#4 | d3 f#3 a3 d4 a3 f#3 | d3 f#3 a3 d4 a3 f#3 | e3 g#3 b3 e4 b3 g#3 | e3 g#3 b3 d4 b3 g#3 | a3 c#4 e4 a4:6"},{inst:"upright",d:4,seq:lv,vol:.7},{inst:"strings",vol:.5,seq:".:96 a4+c#5:12 g#4+b4:12 a4+c#5:12 a4+d5:12 a4+d5:12 g#4+b4:12 g#4+b4:12 a4+c#5:12"}]},fin_mirror:{bpm:126,parts:[{inst:"drums",seq:"k..hs..hk.k.s.hh",vol:.9},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 a1 a2 | e1 e2 e1 e2 e1 e2 g#1 g#2 | d2 d3 d2 d3 d2 d3 d2 d3 | e2 e3 e2 e3 e2 e3 e2 e3"},{inst:"strings",d:1,vol:.6,seq:"a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . c4 . | g#3 g#3 . g#3 g#3 . g#3 . g#3 g#3 . g#3 g#3 . b3 . | a3 a3 . a3 a3 . a3 . a3 a3 . a3 a3 . d4 . | b3 b3 . b3 b3 . b3 . g#3 g#3 . g#3 g#3 . e4 ."},{inst:"lead",d:2,seq:"e5:4 a5:4 c6:4 b5 a5 | b5:6 g#5 e5:4 g#5:4 | a5:4 e5:4 f5:4 d5 f5 | e5:4 g#5:4 b5:4 e6:4 | e6:4 c6:4 a5:4 c6 b5 | b5:6 g#5 e5:8 | f5:4 a5:4 d6:4 c6 b5 | a5:8 e5:4 a5:4"},{inst:"voice",d:16,vol:.5,seq:"a4 b4 a4 g#4 c5 b4 d5 c#5"}]},fin_reveal:{bpm:66,parts:[{inst:"box",d:4,seq:Xa},{inst:"pad",seq:".:96 a2+e3:24 d3+a3:24 d3+f#3:12 e3+g#3:12 e3+b3:12 a2+e3:12",vol:.9},{inst:"voice",d:12,vol:.35,seq:".:96 e4 e4 e4 f#4 f#4 e4 d4 c#4"}]},fin_minuet:{bpm:112,parts:[{inst:"pluck",d:2,vol:.7,seq:"g4 d4 g4 a4 b4 c5 | d5:4 g4:4 g4:4 | e5 c5 d5 e5 f#5 g5 | g4:4 g4:4 . . | c5 d5 c5 b4 a4 b4 | c5:4 b4 a4 b4 g4 | a4 b4 a4 g4 f#4 g4 | a4:12"},{inst:"upright",d:4,vol:.6,seq:"g2 b2 d3 | b2 d3 g3 | c3 e3 g3 | b2 d3 g3 | a2 c3 e3 | g2 b2 d3 | d3 f#3 a3 | d2 f#2 a2"},{inst:"strings",vol:.45,seq:"g3+b3+d4:12 g3+b3+d4:12 c4+e4+g4:12 g3+b3+d4:12 a3+c4+e4:12 g3+b3+d4:12 d4+f#4+a4:12 d4+f#4+a4:12"}]},fin_storm:{bpm:76,parts:[{inst:"drone",seq:"d2:64",vol:.8},{inst:"strings",d:2,vol:.6,seq:"d4 f4 d4 f4 d4 f4 d4 f4 | c#4 e4 c#4 e4 c#4 e4 c#4 e4 | d4 f4 d4 f4 d4 f4 d4 f4 | a3 c#4 e4 g4 a4 g4 e4 c#4"},{inst:"bass",d:4,seq:"d2 d2 d2 d2 | c#2 c#2 c#2 c#2 | d2 d2 d2 d2 | a1 a1 a1 a1"},{inst:"drums",seq:"k.......k..k....",vol:.7},{inst:"voice",d:16,vol:.4,seq:"d5 c#5 d5 e5"}]},fin_bows:{bpm:120,parts:[{inst:"drums",seq:"k.h.s.h.k.k.s.hh",vol:.8},{inst:"bass",d:2,seq:"a1 a2 a1 a2 a1 a2 c#2 e2 | d2 d3 d2 d3 d2 d3 f#2 a2 | e2 e3 e2 e3 e2 e3 g#2 b2 | a1 a2 a1 a2 a1 e2 a2 ."},{inst:"organ",seq:"a3+c#4+e4:16 a3+d4+f#4:16 g#3+b3+e4:16 a3+c#4+e4:16"},{inst:"lead",d:2,seq:"e5:4 a5:4 c#6:4 b5 a5 | b5:4 a5 f#5 d5:4 f#5:4 | e5:4 g#5:4 b5:4 e6 d6 | c#6:8 a5:4 .:4"},{inst:"strings",d:4,vol:.8,seq:"c#5 e5 a5 e5 | d5 f#5 a5 f#5 | b4 e5 g#5 e5 | a4 c#5 e5 a5"}]},party:{bpm:96,parts:[{inst:"piano",d:4,vol:.7,seq:"c4+e4+g4 . e4+g4 . | f3+a3+c4 . a3+c4 . | g3+b3+d4 . b3+d4 . | c4+e4+g4 . g3+c4+e4 ."},{inst:"upright",d:8,vol:.7,seq:"c3 e3 f2 a2 g2 b2 c3 g2"},{inst:"box",d:2,seq:"g5:4 c6:4 e6:4 d6 c6 | d6:6 c6 a5:8 | b5:4 g5:4 d6:4 b5 d6 | c6:12 .:4 | e5:4 g5:4 c6:6 b5 | a5:4 c6:4 f6:8 | e6:4 d6:4 b5:4 g5:4 | c6:12 .:4"},{inst:"drums",seq:"k...h...r...h.h.",vol:.4}]},musicbox:{bpm:70,swing:.12,vol:.9,parts:[{inst:"box",d:4,seq:Rr+" | .:12 | e6:4 c6:4 a5:4 | b5:8 g#5:4 | e5:12 | .:24"},{inst:"box",d:4,vol:.45,seq:"a3 . e4 | e3 . b3 | a3 . e4 | d3 . a3 | d3 . f3 | c3 . g3 | e3 . g#3 | a3 . c4 | a3 . e4 | a3 . e4 | e3 . b3 | e3 . g#3 | a3 . e4 | a3 . . | .:12"},{inst:"pad",seq:"a2+e3:96 .:96",vol:.35}]},morning:{bpm:60,parts:[{inst:"box",d:4,seq:Xa,vol:.7},{inst:"pad",seq:"a2+e3:48 d3+a3:24 e3+b3:24",vol:.7}]}},cv={c:0,d:2,e:4,f:5,g:7,a:9,b:11};function hv(i){const t=/^([a-g])([#b]?)(-?\d)$/.exec(i);if(!t)return console.warn("[audio] неизвестная нота",i),440;const e=cv[t[1]]+(t[2]==="#"?1:t[2]==="b"?-1:0)+(parseInt(t[3])+1)*12;return 440*Math.pow(2,(e-69)/12)}const nh=new Map;function ih(i){let t=nh.get(i);if(t)return t;const e=[];let n=0;if(i.inst==="drums"&&!i.seq.includes(" "))for(const s of i.seq.replace(/\|/g,""))s!=="."&&e.push({step:n,len:1,notes:[s]}),n++;else for(const s of i.seq.split(/\s+/)){if(!s||s==="|")continue;const[r,a]=s.split(":"),o=a?parseFloat(a):i.d||1;r!=="."&&e.push({step:n,len:o,notes:r.split("+")}),n+=o}return t={evs:e,len:n},nh.set(i,t),t}class uv{constructor(){this.ctx=null,this.cur=null,this.timer=null,this.amb=null,this.partFilter=null,this.musicFx=null,this.pendingMusic=null,this.pendingAmb=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;if(!t){console.warn("[audio] WebAudio недоступен — игра продолжит работу без звука");return}const e=this.ctx=new t;this.master=e.createGain(),this.master.connect(e.destination);const n=e.createDynamicsCompressor();n.connect(this.master),this.bMusic=e.createGain(),this.bSfx=e.createGain(),this.bVoice=e.createGain(),this.duckG=e.createGain(),this.musicFx=e.createBiquadFilter(),this.musicFx.type="lowpass",this.musicFx.frequency.value=2e4,this.bMusic.connect(this.musicFx),this.musicFx.connect(this.duckG),this.duckG.connect(n),this.bSfx.connect(n),this.bVoice.connect(n);const r=(this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate)).getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1;const a=e.createBuffer(2,e.sampleRate*2.2,e.sampleRate);for(let o=0;o<2;o++){const c=a.getChannelData(o);for(let h=0;h<c.length;h++)c[h]=(Math.random()*2-1)*Math.pow(1-h/c.length,2.6)}if(this.rev=e.createConvolver(),this.rev.buffer=a,this.revG=e.createGain(),this.revG.gain.value=.22,this.rev.connect(this.revG),this.revG.connect(n),this.applyVolumes(),this.timer=setInterval(()=>this.tick(),40),this.pendingMusic){const o=this.pendingMusic;this.pendingMusic=null,this.music(o)}if(this.pendingAmb){const o=this.pendingAmb;this.pendingAmb=null,this.ambience(o)}}applyVolumes(){this.ctx&&(this.bMusic.gain.value=Me.music*.5,this.bSfx.gain.value=Me.sfx*.8,this.bVoice.gain.value=Me.voice*.5)}now(){return this.ctx?this.ctx.currentTime:performance.now()/1e3}duck(t){this.ctx&&this.duckG.gain.setTargetAtTime(t?.55:1,this.ctx.currentTime,.15)}muffle(t){this.ctx&&this.musicFx&&this.musicFx.frequency.setTargetAtTime(t,this.ctx.currentTime,.2)}stepDur(t){return 60/t.bpm/4}music(t,e={}){if(!this.ctx)return this.pendingMusic=t,this.now();if(this.cur&&this.cur.id===t&&!e.restart)return this.cur.t0;const n=this.ctx.currentTime,s=e.fade??1.2;if(this.cur){const c=this.cur.gain;c.gain.cancelScheduledValues(n),c.gain.setValueAtTime(c.gain.value,n),c.gain.linearRampToValueAtTime(0,n+s),setTimeout(()=>c.disconnect(),s*1e3+300),this.cur=null}if(!t)return n;const r=eh[t];if(!r)return console.warn("[audio] нет трека",t),n;const a=this.ctx.createGain();a.gain.setValueAtTime(0,n),a.gain.linearRampToValueAtTime(r.vol??1,n+Math.min(s,.6)+.05),a.connect(this.bMusic);const o=n+(e.delay??.12);return this.cur={id:t,tr:r,t0:o,gain:a,next:r.parts.map(()=>0)},o}musicId(){return this.cur?this.cur.id:null}tick(){const t=this.cur;if(!t||!this.ctx)return;const e=this.ctx.currentTime+.25,n=this.stepDur(t.tr);t.tr.parts.forEach((s,r)=>{const{evs:a,len:o}=ih(s);if(!(!a.length||!o))for(;;){const c=t.next[r],h=Math.floor(c/a.length),l=a[c%a.length];if(t.tr.once&&h>0)break;let f=t.t0+(h*o+l.step)*n;if(t.tr.swing&&l.step%2===1&&(f+=n*t.tr.swing),f>e)break;if(t.next[r]++,!(f<this.ctx.currentTime-.05)&&!(this.partFilter&&!this.partFilter(t.id,s)))for(const d of l.notes)this.voice(s.inst,d,f,l.len*n,s.vol??1,t.gain)}})}env(t,e,n,s,r,a,o,c){t.setValueAtTime(1e-4,e),t.linearRampToValueAtTime(c,e+n),t.exponentialRampToValueAtTime(Math.max(c*r,1e-4),e+n+s),t.setValueAtTime(Math.max(c*r,1e-4),Math.max(e+a,e+n+s)),t.exponentialRampToValueAtTime(1e-4,Math.max(e+a,e+n+s)+o)}osc(t,e,n,s,r,a=0){const o=this.ctx.createOscillator();return o.type=t,o.frequency.setValueAtTime(e,n),o.detune.value=a,o.connect(r),o.start(n),o.stop(s),o}noise(t,e,n,s=1){const r=this.ctx.createBufferSource();return r.buffer=this.noiseBuf,r.playbackRate.value=s,r.loop=!0,r.connect(n),r.start(t,Math.random()),r.stop(t+e),r}voice(t,e,n,s,r,a){const o=this.ctx;if(!o)return;const c=o.createGain();c.connect(a);const h=f=>{const d=o.createGain();d.gain.value=f,c.connect(d),d.connect(this.rev)};if(t==="drums"){if(e==="k"){const f=o.createOscillator();f.frequency.setValueAtTime(150,n),f.frequency.exponentialRampToValueAtTime(42,n+.12),f.connect(c),c.gain.setValueAtTime(.9*r,n),c.gain.exponentialRampToValueAtTime(.001,n+.22),f.start(n),f.stop(n+.25)}else if(e==="s"||e==="c"||e==="r"){const f=o.createBiquadFilter();f.type=e==="r"?"bandpass":"highpass",f.frequency.value=e==="c"?1200:e==="r"?1800:1500,f.connect(c),this.noise(n,.2,f),c.gain.setValueAtTime((e==="r"?.25:.5)*r,n),c.gain.exponentialRampToValueAtTime(.001,n+(e==="r"?.05:.16)),e!=="r"&&h(.2)}else if(e==="h"||e==="o"||e==="b"){const f=o.createBiquadFilter();f.type="highpass",f.frequency.value=e==="b"?4e3:7e3,f.connect(c),this.noise(n,.3,f);const d=e==="o"?.22:e==="b"?.12:.04;c.gain.setValueAtTime((e==="b"?.16:.2)*r,n),c.gain.exponentialRampToValueAtTime(.001,n+d)}else if(e==="t"){const f=o.createOscillator();f.frequency.setValueAtTime(200,n),f.frequency.exponentialRampToValueAtTime(90,n+.15),f.connect(c),c.gain.setValueAtTime(.5*r,n),c.gain.exponentialRampToValueAtTime(.001,n+.2),f.start(n),f.stop(n+.22)}return}const l=hv(e);switch(t){case"piano":{this.env(c.gain,n,.005,.25,.25,s,.4,.26*r);const f=n+s+.6;this.osc("triangle",l,n,f,c);const d=o.createGain();d.gain.value=.3,d.connect(c),this.osc("sine",l*2,n,f,d),h(.35);break}case"box":{this.env(c.gain,n,.002,.5,.05,Math.min(s,.3),.9,.2*r);const f=n+1.6;this.osc("sine",l,n,f,c);const d=o.createGain();d.gain.value=.25,d.connect(c),this.osc("sine",l*3.01,n,f,d),h(.5);break}case"bass":{const f=o.createBiquadFilter();f.type="lowpass",f.frequency.setValueAtTime(900,n),f.frequency.exponentialRampToValueAtTime(220,n+.2),f.connect(c),this.env(c.gain,n,.005,.1,.7,s*.9,.08,.34*r),this.osc("sawtooth",l,n,n+s+.2,f),this.osc("square",l/2,n,n+s+.2,f,4);break}case"upright":{const f=o.createBiquadFilter();f.type="lowpass",f.frequency.value=600,f.connect(c),this.env(c.gain,n,.008,.25,.2,s*.8,.15,.5*r),this.osc("triangle",l,n,n+s+.3,f),this.osc("sine",l*2,n,n+s+.3,f);break}case"pad":case"strings":{const f=o.createBiquadFilter();f.type="lowpass",f.frequency.value=t==="pad"?900:2200,f.connect(c);const d=t==="pad"?.35:.12;this.env(c.gain,n,Math.min(d,s*.5),.2,.85,s,.5,.075*r);const m=n+s+.7;this.osc("sawtooth",l,n,m,f,-7),this.osc("sawtooth",l,n,m,f,8),h(.5);break}case"lead":case"pluck":{const f=o.createBiquadFilter();f.type="lowpass",f.Q.value=4,f.frequency.setValueAtTime(t==="pluck"?3500:2600,n),f.frequency.exponentialRampToValueAtTime(t==="pluck"?500:1400,n+.25),f.connect(c),this.env(c.gain,n,.006,.15,t==="pluck"?.15:.6,s*.95,.12,.13*r);const d=n+s+.3;this.osc(t==="pluck"?"sawtooth":"square",l,n,d,f),this.osc("sawtooth",l,n,d,f,9),h(.25);break}case"sax":case"voice":{const f=o.createOscillator();f.type="sawtooth",f.frequency.setValueAtTime(l*.985,n),f.frequency.linearRampToValueAtTime(l,n+.07);const d=o.createOscillator(),m=o.createGain();d.frequency.value=t==="sax"?5.2:5.8,m.gain.setValueAtTime(0,n),m.gain.linearRampToValueAtTime(l*.012,n+Math.min(.3,s)),d.connect(m),m.connect(f.frequency);const g=n+s+.25,v=o.createGain();v.connect(c);const u=t==="sax"?[[700,3,1],[1500,4,.5]]:[[800,6,1],[1150,7,.6],[2900,8,.25]];for(const[p,_,y]of u){const b=o.createBiquadFilter();b.type="bandpass",b.frequency.value=p,b.Q.value=_;const I=o.createGain();I.gain.value=y,f.connect(b),b.connect(I),I.connect(v)}this.env(c.gain,n,.05,.1,.85,s*.95,.18,(t==="sax"?.5:.55)*r),f.start(n),f.stop(g),d.start(n),d.stop(g),h(.4);break}case"organ":{this.env(c.gain,n,.02,.05,.9,s,.1,.07*r);const f=n+s+.2;for(const[d,m]of[[1,1],[2,.5],[3,.25],[4,.2]]){const g=o.createGain();g.gain.value=m,g.connect(c),this.osc("sine",l*d,n,f,g)}h(.3);break}case"drone":{const f=o.createBiquadFilter();f.type="lowpass",f.frequency.value=300,f.connect(c),this.env(c.gain,n,Math.min(1.2,s*.4),.3,.9,s,1.2,.2*r);const d=n+s+1.4;this.osc("sawtooth",l,n,d,f,-12),this.osc("sine",l,n,d,f,9),this.osc("sine",l*1.5,n,d,f,3),h(.6);break}default:console.warn("[audio] нет инструмента",t)}}sfx(t,e={}){const n=this.ctx;if(!n)return;const s=n.currentTime+.005,r=n.createGain();r.connect(this.bSfx);const a=h=>{const l=n.createGain();l.gain.value=h,r.connect(l),l.connect(this.rev)},o=(h,l,f,d,m=s,g=1,v)=>{const u=n.createBiquadFilter();u.type=h,u.frequency.setValueAtTime(l,m),v&&u.frequency.exponentialRampToValueAtTime(v,m+f),u.Q.value=g;const p=n.createGain();p.gain.setValueAtTime(d,m),p.gain.exponentialRampToValueAtTime(.001,m+f),u.connect(p),p.connect(r),this.noise(m,f+.05,u)},c=(h,l,f,d,m,g=s)=>{const v=n.createOscillator();v.type=h,v.frequency.setValueAtTime(l,g),f!==l&&v.frequency.exponentialRampToValueAtTime(f,g+d);const u=n.createGain();u.gain.setValueAtTime(m,g),u.gain.exponentialRampToValueAtTime(.001,g+d),v.connect(u),u.connect(r),v.start(g),v.stop(g+d+.02)};switch(t){case"step":{const h=e.mat||"wood";o(h==="metal"?"bandpass":"lowpass",(h==="wood"?300:h==="stone"?900:h==="metal"?2200:h==="grass"?2600:h==="carpet"?180:500)*(.9+Math.random()*.2),h==="grass"?.09:.05,h==="carpet"?.1:.16,s,h==="metal"?6:1),h==="wood"&&c("sine",110,70,.05,.1);break}case"click":c("square",900,700,.03,.08);break;case"hover":c("sine",1200,1200,.02,.03);break;case"paper":o("bandpass",3e3,.12,.2,s,.7,5e3);break;case"pencil":o("bandpass",5e3,.18,.1,s,2,3500);break;case"stamp":c("sine",140,50,.12,.6),o("lowpass",800,.06,.3);break;case"pickup":c("triangle",660,660,.08,.15),c("triangle",990,990,.14,.15,s+.07);break;case"note":c("sine",880,880,.1,.1),c("sine",1320,1320,.2,.08,s+.08),a(.4);break;case"switch":c("square",240,120,.04,.18),o("highpass",3e3,.02,.15);break;case"spot":c("square",180,90,.05,.2),c("sine",55,55,.5,.12,s+.02),a(.4);break;case"door":c("sawtooth",90,140,.35,.07),o("lowpass",400,.14,.4,s+.33),a(.3);break;case"creak":c("sawtooth",180,320,.5,.05),c("sawtooth",320,210,.4,.04,s+.45),a(.5);break;case"locked":c("square",160,160,.05,.14),c("square",160,160,.05,.14,s+.1);break;case"curtain":o("lowpass",500,1.6,.3,s,.5,1800),a(.4);break;case"whoosh":o("bandpass",400,.5,.3,s,1.2,2400);break;case"shutter":o("highpass",4e3,.03,.4),o("highpass",3e3,.05,.3,s+.08),c("square",1500,500,.03,.1);break;case"mask":c("sine",520,1040,.25,.12),c("sine",780,1560,.3,.08,s+.04),a(.6);break;case"error":c("square",200,150,.18,.14);break;case"ok":c("triangle",523,523,.1,.14),c("triangle",784,784,.2,.14,s+.09),a(.3);break;case"hit":c("triangle",e.f||880,e.f||880,.07,.12);break;case"miss":o("lowpass",300,.08,.2);break;case"knock":for(let h=0;h<(e.n||3);h++)c("sine",120,60,.18,.7,s+h*.7),o("lowpass",500,.05,.3,s+h*.7);a(.7);break;case"thunder":o("lowpass",200,2.4,.9,s,.5,60),a(.8);break;case"alarm":for(let h=0;h<3;h++)c("square",880,660,.22,.12,s+h*.26);break;case"laser":c("sawtooth",1800,300,.2,.1);break;case"emp":c("sawtooth",100,1600,.3,.12),o("bandpass",2e3,.3,.15,s,3,200);break;case"glitch":for(let h=0;h<5;h++)c("square",200+Math.random()*2e3,100+Math.random()*800,.04,.07,s+h*.045);break;case"heart":c("sine",70,40,.14,.7),c("sine",60,40,.14,.5,s+.22);break;case"laugh":{const h=e.n||6;for(let l=0;l<h;l++){const f=s+l*.17,d=(e.f||520)*(1-l*.05),m=n.createOscillator();m.type="sawtooth",m.frequency.setValueAtTime(d*1.2,f),m.frequency.exponentialRampToValueAtTime(d,f+.1);const g=n.createBiquadFilter();g.type="bandpass",g.frequency.value=900,g.Q.value=3;const v=n.createGain();v.gain.setValueAtTime(1e-4,f),v.gain.linearRampToValueAtTime(e.vol||.3,f+.02),v.gain.exponentialRampToValueAtTime(.001,f+.13),m.connect(g),g.connect(v),v.connect(r),m.start(f),m.stop(f+.15)}a(.7);break}case"applause":{const h=e.dur||3,l=e.dens||45;for(let f=0;f<h*l;f++){const d=s+Math.random()*h,m=Math.sin(Math.PI*Math.min(1,(d-s)/h))*.12+.03;o("bandpass",1200+Math.random()*2200,.03,m,d,1.5)}a(.6);break}case"clap":o("bandpass",1500+Math.random()*800,.04,.4,s,1.5),a(.5);break;case"gasp":o("bandpass",1800,.4,.12,s,2,900),a(.5);break;case"bell":c("sine",660,660,1.2,.2),c("sine",1320,1320,.8,.08),a(.7);break;case"crash":o("lowpass",1500,.9,.7,s,.5,100),c("sine",80,30,.5,.6),a(.5);break;case"snip":o("highpass",5e3,.04,.4),o("highpass",4e3,.05,.4,s+.09);break;case"rope":o("bandpass",900,.3,.2,s,3,1800);break;case"gear":for(let h=0;h<6;h++)c("square",300,200,.03,.08,s+h*.09);break;case"candle":o("bandpass",900,.25,.25,s,1,300);break;case"firework":o("bandpass",600,.4,.12,s,2,3e3),o("lowpass",2500,.8,.5,s+.45,.5,200),a(.6);break;case"engine":c("sawtooth",70,160,.9,.16);break;case"mechtick":c("square",2600,1900,.018,.05),o("highpass",5e3,.02,.06);break;case"keyin":c("triangle",1900,1500,.06,.16),c("triangle",2700,2500,.05,.1,s+.03),o("highpass",4e3,.04,.2,s+.02),a(.3);break;case"scrape":{const h=e.dur||1.6;o("bandpass",1400,h,.12,s,6,700);for(let l=0;l<7;l++)c("square",900+Math.random()*600,700,.03,.05,s+l*h/7+Math.random()*.05);break}case"hum":c("sine",55,52,2.2,.22),c("sine",110,108,2,.06),a(.4);break;case"windup":for(let h=0;h<14;h++)c("square",3e3,2200,.015,.05*(1-h/16),s+h*.07);break;case"clunk":c("sine",120,45,.25,.6),o("lowpass",900,.08,.4),a(.4);break;case"lighton":c("sine",70,40,.4,.5),o("lowpass",2400,.12,.45),o("highpass",6e3,.6,.05,s+.1),a(.5);break;case"buzz":c("sawtooth",100,100,e.dur||.6,.025);break;default:console.warn("[audio] нет эффекта",t)}}blip(t){const e=this.ctx;if(!e)return;const n=e.currentTime,s=e.createOscillator(),r=e.createGain();s.type="triangle",s.frequency.setValueAtTime(t*(.96+Math.random()*.1),n),r.gain.setValueAtTime(.11,n),r.gain.exponentialRampToValueAtTime(.001,n+.05),s.connect(r),r.connect(this.bVoice),s.start(n),s.stop(n+.06)}ambience(t){if(!this.ctx){this.pendingAmb=t;return}if(this.amb&&this.amb.id===t||(this.amb&&(this.amb.stop(),this.amb=null),!t))return;const e=this.ctx,n=e.createGain();n.gain.value=0,n.connect(this.bSfx);const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter(),a={rain:["highpass",1800,.16],hall:["lowpass",180,.22],crowd:["bandpass",700,.12],wind:["bandpass",350,.14],hum:["lowpass",90,.35],city:["lowpass",500,.12]}[t];if(!a){console.warn("[audio] нет атмосферы",t);return}r.type=a[0],r.frequency.value=a[1],s.connect(r),r.connect(n),s.start(),n.gain.linearRampToValueAtTime(a[2],e.currentTime+1),this.amb={id:t,stop:()=>{n.gain.cancelScheduledValues(e.currentTime),n.gain.setTargetAtTime(0,e.currentTime,.3),setTimeout(()=>{s.stop(),n.disconnect()},1500)}}}chart(t,e,n=1){const s=eh[t],r=s.parts[e],{evs:a,len:o}=ih(r),c=this.stepDur(s),h=[];for(let l=0;l<n;l++)for(const f of a)h.push({t:(l*o+f.step)*c,len:f.len*c,note:f.notes[0]});return h}suspend(t){this.ctx&&(t?this.ctx.suspend():this.ctx.resume())}}const Vt=new uv,na=new Set,yu=new Set,Qn={x:0,y:0};let bu=!1;function sh(i){bu=i}const Mu={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right",KeyE:"act",Enter:"act",Space:"act",Escape:"pause",KeyP:"pause",Digit1:"mask1",Digit2:"mask2",Digit3:"mask3",Digit0:"mask0",KeyQ:"mask0",KeyC:"camera",KeyF:"camera",Tab:"notebook",KeyN:"notebook",KeyJ0:"notebook",KeyI:"inventory",KeyB:"inventory",KeyH:"history",Slash:"help",F1:"help",KeyL:"history",ControlLeft:"skip",ControlRight:"skip",ShiftLeft:"run",ShiftRight:"run",KeyJ:"laneJ",KeyK:"laneK",KeyG:"laneG"},Br=[];function Ji(i){return Br.push(i),()=>{const t=Br.indexOf(i);t>=0&&Br.splice(t,1)}}function pi(i,t=""){yu.add(i);for(const e of[...Br])e(i,t)}window.addEventListener("keydown",i=>{const t=Mu[i.code];if(!t)return;const e=document.activeElement;e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA")||(!bu&&["Tab","Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(i.code)&&i.preventDefault(),!i.repeat&&(na.add(t),pi(t,i.code)))});window.addEventListener("keyup",i=>{const t=Mu[i.code];t&&na.delete(t)});window.addEventListener("blur",()=>{na.clear(),Qn.x=Qn.y=0});const Qi=i=>na.has(i);function Ya(){yu.clear()}function fv(){let i=(Qi("right")?1:0)-(Qi("left")?1:0)+Qn.x,t=(Qi("down")?1:0)-(Qi("up")?1:0)+Qn.y;const e=Math.hypot(i,t);return e>1&&(i/=e,t/=e),{x:i,y:t}}const ja=new Map,dv=new Set(["artemiy","varya","ruben","matvey","alla","dana","vasilisa","nina","angelina","liza","erika","olya","polina","anya"]),pv={queen:"alla",girl:"varya"};function Su(i,t="neutral",e=!1){const n=pv[i]||i.split("_")[0];if(dv.has(n))return"portraits/"+n+(e&&(n==="varya"||n==="matvey")&&["smile","laugh","surprised","blank"].includes(t)?"_heal":"")+".png"+(i.endsWith("_noir")?"#noir":"");const s=i+"|"+t,r=ja.get(s);if(r)return r;const a=ze[i],o=200,c=240,h=document.createElement("canvas");h.width=o,h.height=c;const l=h.getContext("2d");if(!a)return"";if(i==="kukolnik"||i==="narrator"){if(l.fillStyle="#1a1210",l.fillRect(0,0,o,c),i==="kukolnik"){l.fillStyle="#050404",l.beginPath(),l.ellipse(100,100,44,54,0,0,7),l.fill(),l.fillRect(30,170,140,80),l.beginPath(),l.ellipse(100,190,80,40,0,0,7),l.fill(),l.fillRect(60,40,80,14),l.fillRect(74,4,52,44),l.strokeStyle="#d8b56a55",l.lineWidth=1;for(const G of[60,100,140])l.beginPath(),l.moveTo(G,0),l.lineTo(G+(G-100)*.3,60),l.stroke()}else{l.fillStyle="#e8d8a8",l.fillRect(30,60,140,120),l.fillStyle="#b89858",l.fillRect(97,60,6,120),l.fillStyle="#6a5a3a";for(let G=0;G<7;G++)l.fillRect(42,78+G*13,46,3),l.fillRect(112,78+G*13,46,3)}const D=h.toDataURL();return ja.set(s,D),D}const f=a.acc||[],d=a.hair,m=Jt(d,-.3),g=Jt(d,.25),v=Jt(a.skin,-.18);Jt(a.skin,.12);const u=100,p=112,_=a.build==="big"?52:a.build==="strong"?50:46,y=58,b=a.style,I=b.startsWith("curly"),A=(D,G,q,at,ct)=>{l.fillStyle=ct,l.beginPath(),l.ellipse(D,G,q,at,0,0,7),l.fill()};if(l.fillStyle=d,b==="long"||b==="longStyled"||b==="glam"||b==="rapunzel"){const D=b==="glam"?84:b==="longStyled"?72:66;if(l.beginPath(),l.moveTo(u-D,240),l.quadraticCurveTo(u-D-8,80,u,44),l.quadraticCurveTo(u+D+8,80,u+D,240),l.fill(),b==="glam")for(let G=0;G<5;G++)A(u-78+G%2*8,110+G*28,16,18,G%2?d:m),A(u+78-G%2*8,110+G*28,16,18,G%2?m:d)}if(b==="curls"){l.beginPath(),l.moveTo(u-70,200),l.quadraticCurveTo(u-80,70,u,46),l.quadraticCurveTo(u+80,70,u+70,200),l.fill();for(let D=0;D<4;D++)for(const G of[-1,1]){const q=u+G*(64-D%2*6),at=120+D*24;l.fillStyle=D%2?m:d,l.beginPath(),l.ellipse(q,at,15,15,0,0,7),l.fill(),l.strokeStyle=g,l.lineWidth=2,l.beginPath(),l.arc(q-G*3,at-2,8,Math.PI*(G>0?1.1:1.6),Math.PI*(G>0?1.7:2.2)),l.stroke()}l.fillStyle=d}if(b==="bob"||b==="bobLong"){const D=b==="bob"?150:172;l.beginPath(),l.moveTo(u-62,D),l.quadraticCurveTo(u-70,60,u,46),l.quadraticCurveTo(u+70,60,u+62,D),l.fill()}if(b==="curlyMid")for(let D=0;D<16;D++){const G=Math.PI*(.95+D/15*1.1);A(u+Math.cos(G)*58,104+Math.sin(G)*56+(D<3||D>12?30:0),17,17,D%2?d:m)}if(b==="fluffy")for(let D=0;D<14;D++){const G=Math.PI*(.9+D/13*1.2);A(u+Math.cos(G)*58,100+Math.sin(G)*52,19,19,D%2?d:g)}if(b==="twin")for(const D of[-1,1])A(u+D*70,120,15,44,d),A(u+D*70,150,12,26,m),l.fillStyle="#e84a6f",l.fillRect(u+D*70-9,82,18,7);b==="ponytail"&&(A(u+52,70,18,16,d),l.fillStyle=m,l.beginPath(),l.moveTo(u+58,70),l.quadraticCurveTo(u+92,110,u+66,190),l.quadraticCurveTo(u+54,130,u+44,80),l.fill()),b==="bun"&&A(u,40,22,18,d),f.includes("wings")&&(A(30,200,34,50,"rgba(230,220,255,0.7)"),A(170,200,34,50,"rgba(230,220,255,0.7)"));const w=a.build==="strong"?96:a.build==="big"?100:a.build==="thin"?70:80;if(l.fillStyle=a.top,l.beginPath(),l.moveTo(u-w,240),l.quadraticCurveTo(u-w,186,u-26,180),l.lineTo(u+26,180),l.quadraticCurveTo(u+w,186,u+w,240),l.fill(),l.fillStyle=Jt(a.top,-.25),l.fillRect(u-w,232,w*2,8),f.includes("cape")&&(l.fillStyle=a.trim||"#a22",l.fillRect(u-w,196,30,44),l.fillRect(u+w-30,196,30,44)),l.fillStyle=v,l.fillRect(u-13,156,26,32),l.fillStyle=a.skin,l.beginPath(),l.moveTo(u-20,184),l.lineTo(u,200),l.lineTo(u+20,184),l.lineTo(u+13,176),l.lineTo(u-13,176),l.fill(),f.includes("offshoulder")){l.fillStyle=a.skin,l.beginPath(),l.moveTo(u-w+6,214),l.quadraticCurveTo(u-w+4,186,u-26,180),l.lineTo(u+26,180),l.quadraticCurveTo(u+w-4,186,u+w-6,214),l.closePath(),l.fill(),l.fillStyle=a.top,l.fillRect(u-w,214,w*2,26);for(const D of[-1,1])l.beginPath(),l.moveTo(u+D*w,240),l.lineTo(u+D*w,202),l.quadraticCurveTo(u+D*(w-10),200,u+D*(w-24),214),l.lineTo(u+D*(w-24),240),l.fill();l.fillStyle=Jt(a.top,-.22),l.fillRect(u-w+24,214,w*2-48,3),l.strokeStyle=v,l.lineWidth=1.5,l.beginPath(),l.moveTo(u-30,192),l.quadraticCurveTo(u-14,198,u-4,194),l.moveTo(u+30,192),l.quadraticCurveTo(u+14,198,u+4,194),l.stroke()}else a.trim&&(l.strokeStyle=a.trim,l.lineWidth=5,l.beginPath(),l.moveTo(u-24,182),l.lineTo(u,204),l.lineTo(u+24,182),l.stroke());if(f.includes("pearls")){l.fillStyle="#f6f0e8";for(let D=0;D<11;D++){const G=Math.PI*(.15+D*.07);l.beginPath(),l.arc(u+Math.cos(G)*30*(D<6,-1)*Math.cos(G)*0+(D-5)*5,196+Math.sin(D/10*Math.PI)*10,3,0,7),l.fill()}}f.includes("scarf")&&(l.fillStyle=a.trim||"#e84a6f",l.beginPath(),l.ellipse(u,186,40,14,0,0,7),l.fill(),l.fillRect(u+10,186,16,50)),f.includes("camera")&&(l.fillStyle="#222",l.fillRect(u-22,208,44,30),A(u,224,11,11,"#557"),A(u,224,6,6,"#9bd"),l.strokeStyle="#333",l.lineWidth=4,l.beginPath(),l.moveTo(u-30,184),l.lineTo(u-20,210),l.moveTo(u+30,184),l.lineTo(u+20,210),l.stroke()),f.includes("pins")&&(A(u+44,214,5,5,"#fff"),A(u+54,226,4,4,"#4ae0c0"),A(u+40,228,3,3,"#e84a6f")),A(u-_+2,p+4,7,11,v),A(u+_-2,p+4,7,11,v),l.fillStyle=a.skin,l.beginPath(),l.moveTo(u-_,p-20),l.quadraticCurveTo(u-_,p-y,u,p-y),l.quadraticCurveTo(u+_,p-y,u+_,p-20),l.quadraticCurveTo(u+_,p+34,u+16,p+y-4),l.quadraticCurveTo(u,p+y+4,u-16,p+y-4),l.quadraticCurveTo(u-_,p+34,u-_,p-20),l.fill(),A(u-26,p+22,10,6,"rgba(230,110,100,0.16)"),A(u+26,p+22,10,6,"rgba(230,110,100,0.16)"),f.includes("earrings")&&(A(u-_,p+22,4,8,"#f4d060"),A(u+_,p+22,4,8,"#f4d060")),f.includes("pearls")&&(A(u-_,p+18,4,4,"#f6f0e8"),A(u+_,p+18,4,4,"#f6f0e8"),A(u-_,p+26,5,5,"#f6f0e8"),A(u+_,p+26,5,5,"#f6f0e8"));const L=p+2,Y=21;let x=1,M=0,V=0,H="flat",W=1;switch(t){case"smile":H="smile",x=.85;break;case"laugh":H="laugh",x=.25,M=-2;break;case"sad":H="sad",V=-5,x=.8;break;case"scared":H="o",V=-6,x=1.3,W=.7,M=-4;break;case"angry":H="sad",V=7,x=.8,M=3;break;case"worried":H="wavy",V=-5;break;case"smirk":H="smirk",x=.75,V=2;break;case"surprised":H="o",x=1.25,M=-5;break;case"blank":W=.8;break}if(a.brows==="strict"&&(V+=4),f.includes("maskface")){l.fillStyle="#e8e4d8",l.beginPath(),l.ellipse(u,p,_-2,y-2,0,0,7),l.fill(),A(u-20,p-4,9,12,"#111"),A(u+20,p-4,9,12,"#111"),l.strokeStyle="#111",l.lineWidth=4,l.beginPath(),l.moveTo(u-24,p+26),l.quadraticCurveTo(u,p+48,u+24,p+26),l.stroke();for(let D=-2;D<=2;D++)l.beginPath(),l.moveTo(u+D*9,p+30),l.lineTo(u+D*9,p+40),l.stroke()}else{for(const G of[-1,1]){const q=u+G*Y;a.shadow&&A(q,L-4,13,9,a.shadow+"99"),l.save(),l.beginPath(),l.ellipse(q,L,11,8*Math.min(x,1.3),0,0,7),l.clip(),l.fillStyle="#f6f1ea",l.fillRect(q-12,L-12,24,24),A(q+(t==="smirk"?2:0),L+.5,7*W,7*W,a.eyes),A(q+(t==="smirk"?2:0),L+.5,3.4*W,3.4*W,"#120a08"),A(q-2.5,L-3,2,2,"#fff"),l.fillStyle=v,l.fillRect(q-12,L-12,24,5+(1-Math.min(x,1))*6),l.restore(),l.strokeStyle="#1a1010",l.lineWidth=a.lips||a.shadow?3:2.2,l.beginPath(),l.ellipse(q,L,11,8*Math.min(x,1.3),0,Math.PI*1.05,Math.PI*1.95),l.stroke(),(a.lips||a.shadow)&&(l.beginPath(),l.moveTo(q+G*10,L-3),l.lineTo(q+G*15,L-7),l.stroke()),t==="laugh"&&(l.strokeStyle="#1a1010",l.lineWidth=2.5,l.beginPath(),l.arc(q,L+4,9,Math.PI*1.15,Math.PI*1.85),l.stroke()),l.strokeStyle=Jt(d==="#f0d98a"||d==="#e8e0f0"||d==="#e8e8f0"?"#a88a4a":d,-.25),l.lineWidth=a.brows==="strict"?4.5:3.2,l.lineCap="round",l.beginPath();const at=L-16+M;l.moveTo(q-G*10,at+V*.5+(a.brows==="arch"?1:0)),l.quadraticCurveTo(q,at-(a.brows==="arch"?5:2),q+G*11,at-V*.5+(a.brows==="arch"?2:0)),l.stroke()}l.strokeStyle=v,l.lineWidth=2,l.beginPath(),l.moveTo(u-1,p+10),l.quadraticCurveTo(u-5,p+22,u+2,p+23),l.stroke();const D=p+37;if(l.strokeStyle=a.lips||"#7a3a34",l.fillStyle=a.lips||"#7a3a34",l.lineWidth=a.lips?4:2.6,l.lineCap="round",l.beginPath(),H==="flat"&&(l.moveTo(u-9,D),l.quadraticCurveTo(u,D+2,u+9,D),l.stroke()),H==="smile"&&(l.moveTo(u-12,D-2),l.quadraticCurveTo(u,D+8,u+12,D-2),l.stroke()),H==="smirk"&&(l.moveTo(u-9,D+1),l.quadraticCurveTo(u+2,D+4,u+13,D-4),l.stroke()),H==="sad"&&(l.moveTo(u-10,D+3),l.quadraticCurveTo(u,D-4,u+10,D+3),l.stroke()),H==="wavy"&&(l.moveTo(u-10,D),l.quadraticCurveTo(u-5,D-4,u,D),l.quadraticCurveTo(u+5,D+4,u+10,D),l.stroke()),H==="o"&&(l.fillStyle="#4a1a1a",l.ellipse(u,D+1,6,8,0,0,7),l.fill(),l.stroke()),H==="laugh"&&(l.fillStyle="#4a1a1a",l.moveTo(u-14,D-4),l.quadraticCurveTo(u,D+18,u+14,D-4),l.closePath(),l.fill(),l.stroke(),l.fillStyle="#fff",l.fillRect(u-8,D-3,16,4)),f.includes("freckles")){l.fillStyle=Jt(a.skin,-.3);for(const[G,q]of[[-30,14],[-24,18],[-18,13],[-26,10],[30,14],[24,18],[18,13],[26,10],[-4,16],[5,15]])l.beginPath(),l.arc(u+G,p+q,1.6,0,7),l.fill()}f.includes("mole")&&A(u+24,p+30,2.2,2.2,"#3a1a14")}if(f.includes("glasses")){l.strokeStyle="#222",l.lineWidth=3;for(const D of[-1,1])l.beginPath(),l.ellipse(u+D*Y,L,15,13,0,0,7),l.stroke(),l.fillStyle="rgba(190,225,255,0.18)",l.fill();l.beginPath(),l.moveTo(u-6,L),l.lineTo(u+6,L),l.stroke()}if(f.includes("visor")&&(l.fillStyle=(a.trim||"#40e0d0")+"cc",l.fillRect(u-_-2,L-11,_*2+4,20),l.fillStyle="#ffffff55",l.fillRect(u-_+4,L-8,30,3)),f.includes("maskhalf")&&(l.fillStyle="#e8c36a",l.beginPath(),l.ellipse(u,L-2,_-2,18,0,0,7),l.fill(),A(u-Y,L,8,5,"#120a08"),A(u+Y,L,8,5,"#120a08")),l.fillStyle=d,b!=="none"){const D=p-y-8;if(l.beginPath(),l.moveTo(u-_-3,p-8),l.quadraticCurveTo(u-_-6,D,u,D-2),l.quadraticCurveTo(u+_+6,D,u+_+3,p-8),a.bangs?(l.quadraticCurveTo(u+_-6,p-18,u+_-10,p-14),l.lineTo(u-_+10,p-14),l.quadraticCurveTo(u-_+6,p-18,u-_-3,p-8)):b==="short"||b==="bun"||b==="ponytail"?(l.quadraticCurveTo(u+_-4,p-34,u+10,p-40),l.quadraticCurveTo(u-20,p-44,u-_-3,p-8)):(l.quadraticCurveTo(u+_-2,p-30,u-8,p-44),l.quadraticCurveTo(u-_+4,p-30,u-_-3,p-8+(b==="bob"||b==="bobLong"?30:10))),l.fill(),a.bangs){l.strokeStyle=m,l.lineWidth=1.5;for(let G=-3;G<=3;G++)l.beginPath(),l.moveTo(u+G*11,p-40),l.lineTo(u+G*12,p-15),l.stroke()}if(b==="bob"||b==="bobLong"||b==="long"||b==="longStyled"||b==="glam"||b==="rapunzel"||b==="curls"){l.fillStyle=d;const G=b==="bob"?152:b==="bobLong"?172:b==="curls"?150:236;l.fillRect(u-_-8,p-10,10,G-p+10),l.fillRect(u+_-2,p-10,10,G-p+10),(b==="bob"||b==="bobLong")&&(A(u-_-2,G-4,9,8,d),A(u+_+2,G-4,9,8,d))}if(I)for(let G=0;G<9;G++)A(u-48+G*12,p-y+2+G%2*6+Math.abs(G-4)*3,12,12,G%2?d:g);if(b==="fluffy")for(let G=0;G<8;G++)A(u-46+G*13,p-y+4+G%2*5+Math.abs(G-3.5)*3.5,13,12,G%2?g:d);l.strokeStyle=g,l.lineWidth=3,l.beginPath(),l.arc(u-8,p-30,30,Math.PI*1.15,Math.PI*1.5),l.stroke()}f.includes("hat")&&(l.fillStyle="#2a2a2e",l.beginPath(),l.ellipse(u,p-36,80,12,0,0,7),l.fill(),l.fillStyle="#3a3a40",l.beginPath(),l.moveTo(u-46,p-38),l.quadraticCurveTo(u-44,p-86,u,p-84),l.quadraticCurveTo(u+44,p-86,u+46,p-38),l.fill(),l.fillStyle="#111",l.fillRect(u-46,p-48,92,9)),f.includes("crown")&&(l.fillStyle="#f4d060",l.beginPath(),l.moveTo(u-38,p-52),l.lineTo(u-42,p-92),l.lineTo(u-20,p-70),l.lineTo(u,p-98),l.lineTo(u+20,p-70),l.lineTo(u+42,p-92),l.lineTo(u+38,p-52),l.fill(),A(u,p-62,6,6,"#d02040")),f.includes("headphones")&&(l.strokeStyle="#222",l.lineWidth=8,l.beginPath(),l.arc(u,p-8,_+8,Math.PI*1.08,Math.PI*1.92),l.stroke(),l.fillStyle="#222",l.fillRect(u-_-14,p-12,16,34),l.fillRect(u+_-2,p-12,16,34));const Q=h.toDataURL();return ja.set(s,Q),Q}const mv={chars:"Персонажи",places:"Места",items:"Предметы",clues:"Улики",script:"Сценарий"},ks={camera:{name:"Фотоаппарат Василисы",desc:"Запасная камера. «Плёнка здесь иногда видит больше, чем глаза». Клавиша C."},marionette:{name:"Двуликая марионетка",desc:"Добыча Рубена. У куклы два лица, спереди и сзади, и вырезана она как ключ."},lantern:{name:"Бумажный фонарик",desc:"С фестиваля Матвея. Внутри записка: «Свою сцену я сыграл сам»."},mat_photo:{name:"Фото с фестиваля",desc:"Матвей и Арутеми смеются над пересоленным онигири. Не позируют. Лучший кадр, который я не ставила."},archive_card:{name:"Каталожная карточка",desc:"Нашла Эрика. Шифр архива Театра имени М. Ковалевского."},braid:{name:"Коса Лизы",desc:"Сто локтей прекрасной верёвки. Волосы Лиза оставила башне, а косу забрала себе."},demo:{name:"Демо-запись Ангелины",desc:"Песня, которую не писал комитет."},flashlight:{name:"Фонарь",desc:"Старый, тяжёлый, с жёлтым лучом. Полина держит его двумя руками."},porch_key:{name:"Ключ из-под горшка",desc:"Конечно, под цветочным горшком. Где же ещё."},owner_mask:{name:"Маска Хозяина",desc:"Белая, пустая изнутри. На подкладке: «Алла Ева»."},e_photo:{name:"Фото: Мэй и Лидия",desc:"«Сестрёнке от той, кто всегда в третьем ряду. Л.»"},e_contract:{name:"Контракт Вронской",desc:"Главную роль «передали» в четверг. В графе «поручитель» стоит Алла Ева."},e_letter:{name:"Записка Вейсу",desc:"«Спасибо за цветы… увидимся у моря. Л.»"},e_ticket:{name:"Квитанция камеры хранения",desc:"Суббота. Чемодан кожаный. Сдала: Вронская Л."},e_matches:{name:"Спички «Синей ноты»",desc:"Просто спички. Или нет."},gear:{name:"Шестерня",desc:"Латунная, от башенного механизма."},weight:{name:"Гиря",desc:"Противовес. Тяжёлая, но Лиза помогает волосами."},tower_key:{name:"Ключ с люстры",desc:"Висел там, где «принцессе не достать»."},emp:{name:"Глушилка",desc:"Гаджет Ноля. На пять секунд слепит охрану. Клавиша G. Зарядов мало."}},Dt=(i,t,e,n,s)=>({cat:i,title:t,text:e,char:n,expr:s}),qo={cast:Dt("chars","Труппа","Полина, Рубен, Матвей, Эрика, Лиза, Ангелина. Всем пришли письма «Режиссёр: Варвара», и никто особо не удивился.","varya","smile"),c_alla:Dt("chars","Алла Ева","Прима. Опаздывает, требует, перебивает. Иногда бывает права, и вот это раздражает сильнее всего.","alla","smirk"),c_polina:Dt("chars","Полина","Боялась весь особняк и всё равно прошла его одна. Замечает узоры, которые я пропускаю.","polina","smile"),c_ruben:Dt("chars","Рубен","Отказался и от моего плана, и от золота. Зато вынес куклу и вывел всю команду.","ruben","smile"),c_matvey:Dt("chars","Матвей","Сказал всё сам. А мои пятьдесят шагов из кадра дались мне труднее, чем я думала.","matvey","smile"),c_erika:Dt("chars","Эрика","Закрыла дело так, как считала правильным. Проверяет факты, даже когда они ей не нравятся.","erika","neutral"),c_liza:Dt("chars","Лиза","Ушла из башни раньше, чем её успели спасти. Волосы оставила, а косу забрала.","liza","laugh"),c_angelina:Dt("chars","Ангелина","Спела своё, а агентству остались фонограмма и чужое лицо на экранах.","angelina","smirk"),c_artemiy:Dt("chars","Арутеми","Шутит каждые полминуты, подкармливает школьного кота и совсем не умеет врать.","artemiy","neutral"),troupe:Dt("chars","Второй состав","Василиса, Дана, Нина, Аня и Оля уехали на гастроли со «Снежной королевой». Это они меня рекомендовали. К премьере вернутся и просили оставить им третий ряд.","vasilisa","smile"),doors:Dt("places","Шесть дверей","В кармане сцены шесть дверей, и каждая ведёт в свой жанр. Мокрая, неоновая, школьная, с матовым стеклом, книга и зеркало."),shadows:Dt("places","Тени держат","В этом театре по тени можно ходить, если её отбрасывает правильная декорация."),masks:Dt("places","Три маски","Комедия показывает смешное, Трагедия сломанное и спрятанное, а Драма то, что чувствуют. Клавиши 1, 2, 3."),invite:Dt("clues","Приглашение Кукольника","Пометки на полях сделаны знакомым почерком, уверенным и немного командным."),camera:Dt("clues","Плёнка видит больше","Василиса советует снимать всё странное и сравнивать."),mirror:Dt("clues","Отражение опаздывает","В гримёрке отражение поправило серёжку. Я не ношу серёжки."),missing:Dt("clues","Труппа исчезла","Погас свет, и на сцене никого не осталось. Алла Ева даже не удивилась. Мокрые следы ведут за кулисы."),photo_inside:Dt("clues","Снимок «до»","Фото, где мы с Полиной уже внутри особняка, сделано с крыльца, ещё до того, как мы вошли. А в архиве оно числится уже неделю."),marionette:Dt("clues","Двуликая кукла","У марионетки два лица. Рубену это не понравилось. Мне тоже."),card:Dt("clues","Алла Ева в сороковых","В городе Эрики её имя стоит на афишах 1940-х. Она не может быть такой старой. Если только дело тут вообще не в возрасте."),alla_knows:Dt("clues","Она знает про утренник","Алла Ева помнит, как я в семь лет забыла слова. Этого даже мама не помнит."),one_shadow:Dt("clues","Одна тень","В маске Трагедии видно, что у Аллы Евы нет своей тени. Под ней лежит моя."),maquette:Dt("clues","Макет с коробочками","Для каждого из друзей заранее сделали по коробке со своим жанром."),twins:Dt("clues","Склеенные фигурки","В центре макета стояли две фигурки спиной к спине, в красном платье и в красном лонгсливе. Потом их разломали."),timegap:Dt("clues","Пропавшие часы","Я потеряла два с половиной часа в мастерской. Что я делала в это время?"),handwriting:Dt("clues","Петля на «р»","Эрика говорит, что письма Кукольника, пометки в сценарии и мой блокнот написаны одной рукой."),ledger:Dt("clues","Протокол собрания","Труппа голосовала за меня. Худрук воздержался: «не могу голосовать за себя»."),contract:Dt("clues","Две подписи","«Алла Ева» и «К.» на контракте: нажим один, чернила одни, а росчерки разные."),seating:Dt("clues","Третий ряд","«Рот открывать, звук не давать». А на обороте детским почерком: «Меня будет видно из любого ряда»."),drafts:Dt("clues","Черновики приглашения","Три черновика письма мне. Моим почерком."),puppets:Dt("clues","Одна вага","Шесть марионеток на одной ваге, и нитки не завязаны."),kukolnik:Dt("clues","Кабинет худрука","Жакет моего размера, мятная конфета в кармане, почерк с петлёй на «р». Совпадений становится многовато."),poses:Dt("clues","Одна поза","В большом зеркале мы с Аллой Евой стоим одинаково. И стоит она на моём месте."),knotes:Dt("clues","Записки К.","Кукольник всегда знает, где я и что я уже сделала. И всегда пишет «не благодари»."),casting:Dt("clues","Лист распределения","Роль можно вписать самой, а можно спросить. Второе выглядит неряшливо, зато честно."),act4:Dt("clues","Она расчистила сцену","Во всех шести мирах была Алла Ева, только под разными масками. Каждому дала главную роль, подальше от своей."),script:Dt("script","The Queen's Last Curtain","Королева, которой нужны аплодисменты, и Молодая Девушка. На страницах описано то, что ещё не случилось."),program:Dt("script","Финал из программки","«…и когда декорации исчезают, зал видит, что на сцене стоит один человек»."),page8:Dt("script","Страница 8","Королева рассылает приглашённых по чужим пьесам. «Я всем дала по спектаклю. И себе тоже»."),steps:Dt("script","Ремарка Матвея","«Режиссёр уходит из кадра, и сцена продолжается без него. И становится только лучше»."),braid:Dt("script","Ремарка Лизы","«Принцесса выходит сама. Спасатель опаздывает. Никто не пострадал, кроме сюжета»."),demo:Dt("script","Ремарка Ангелины","«Фонограмма выключена. Поёт та, чьё это лицо»."),n_pol_book:Dt("script","Проклятая книга","«Дом смеётся над тем, кто играет назначенную ему роль. Перестанешь играть, и он замолчит»."),n_pol_photos:Dt("clues","Невозможные фотографии","На трёх снимках в библиотеке есть то, чего не бывает: тринадцатый час, человек без тени, отражение спиной. На рамках стоят годы, а на обороте нарисованы знаки."),n_pol_wall:Dt("clues","Обои с цветами","Полина заметила: в каждой комнате цветок на обоях повёрнут по-своему, то вверх, то вниз."),n_pol_owner:Dt("clues","Маска Хозяина","Под маской никого не было. А на подкладке театральный штамп и вышитое имя «Алла Ева»."),n_rub_plan:Dt("script","План ограбления","Мой план был расписан по минутам. Рубен сказал: «План нужен, чтобы было от чего отступать»."),n_rub_fortuna:Dt("clues","Леди Фортуна","Хозяйка казино в золотой полумаске заранее знала наш план. И сказала знакомое «дорогуша»."),n_ang_double:Dt("clues","Двойная жизнь","Соседка мечтает быть как Энджел и не знает, что Энджел живёт этажом ниже. Мама не узнала дочь на экране. Я вела Ангелину по пунктам и почти довела туда, где её не узнают."),n_mat_book:Dt("clues","Тетрадь «100 шагов»","Матвей сто дней расписывал идеальные сцены, чтобы не сделать ни одного настоящего шага. На полях шага 100 чей-то аккуратный почерк. Похож на мой."),n_mat_fake:Dt("script","Слишком красиво","Чем больше я ставлю «идеальных моментов», тем фальшивее они выглядят. Даже лепестки падают по команде."),n_mat_teacher:Dt("clues","Руководительница драмкружка","Вычёркивала Матвея из главных ролей и видела меня сквозь стену. Тоже говорит «дорогуша»."),n_eri_case:Dt("clues","Дело Вронской","Актриса Лидия Вронская исчезла накануне премьеры. Показания противоречат уликам."),n_eri_alla:Dt("clues","Поручительница","В контракте Вронской поручителем значится Алла Ева. Афиши с её именем висят по всему городу."),n_liz_role:Dt("script","Роль принцессы","Рассказчик, Фея и зеркальце хором объясняют Лизе, что принцессы должны ждать. А Лиза ждать не хочет."),n_liz_voice:Dt("clues","Голос Рассказчика","Говорит басом, но ставит ударения совсем как одна моя знакомая в красном."),n_ang_concept:Dt("script","Концепт «ANGEL♡»","Агентство хочет розовые волосы, новое имя и песню, написанную комитетом."),n_ang_assist:Dt("clues","Ассистентка","Это она предложила «заменить лицо». И она же сказала про третий ряд."),n_diva:Dt("clues","Третий ряд Аллы Евы","Она боится не свиста, а того, что зал посмотрит сквозь неё. Это многое объясняет, но ничего не оправдывает."),guestbook:Dt("clues","Книга отзывов","Все восторженные отзывы об Алле Еве написаны одним почерком, хотя подписи разные."),n_collapse:Dt("places","Театр складывается","Коридоры ведут в комнаты из чужих жанров. Здесь пригодилось всё, чему мы научились, и все, кто рядом.")},wu=["polina","ruben","matvey","erika","liza","angelina"],$o=(i,t)=>!!i["done_"+t],gv=i=>wu.filter(t=>$o(i,t)).length;function vv(i,t,e){const n=[];if(!i.woke)return{main:"Уснуть. Завтра большой день"};if(!i.read_invite)return{main:"Прочитать конверт на столе",hint:"Подойдите к столу у двери и нажмите E"};if(t.has("camera")||n.push("Осмотреть гримёрку: на шкафу что-то лежит"),!i.met_cast)return{main:"Найти дорогу на сцену",hint:"Из гримёрки в коридор, оттуда дверь «В кулисы сцены»",extra:n};if(!i.act1)return{main:"Поговорить с труппой и взять сценарий",hint:"Режиссёрский столик слева на сцене",extra:n};if(!i.back_seen)return{main:"Пойти по мокрым следам за кулисы",hint:"Дверь «За кулисы» в глубине сцены справа"};if(!i.masks)return{main:"Осмотреть реквизиторский стол за кулисами"};if(!i.bridge)return{main:"Перебраться через открытый люк",hint:"Маски показывают то, чего не видно. Прожектор и фанерный мостик стоят рядом"};if(!$o(i,"polina"))return{main:"Войти в мокрую дверь",hint:"Дверь за люком, из-под неё течёт вода"};const s=gv(i);return t.has("archive_card")&&!(i.a_ledger&&i.a_contract)?{main:"Акт III: изучить архив театра",hint:"Бельэтаж, дверь «Архив». Ключ-карта от Эрики уже у вас. Прочитать протокол собрания и ангажемент на столе",extra:n}:s>=6&&!i.office_open?{main:"Найти кабинет худрука",hint:"Бельэтаж, гобелен на западной стене. Наденьте маску Трагедии (клавиша 2) и подойдите к нему. Нужна марионетка Рубена",extra:n}:s>=6&&!i.know_k?{main:"Узнать правду о Кукольнике",hint:"Кабинет худрука: стол с черновиками и зеркало под тканью",extra:n}:s<6?(wu.some(r=>$o(i,r)&&!i["cast_"+r])&&n.push("Решить, кто кого играет: лист распределения на сцене"),t.has("marionette")&&!i.office_open&&n.push("Найти замок для марионетки: гобелен на бельэтаже в маске Трагедии"),t.has("braid")&&!i.braid_used&&n.push("Лиза ждёт за кулисами: блок со старым тросом"),i.foyer0||n.push("Осмотреть фойе"),{main:`Вернуть труппу: друзей в театре ${s} из 6`,hint:"Двери в жанровые миры в кармане сцены, за люком",extra:n}):i.act4?(i.know_k||n.push("Заглянуть в кабинет худрука"),{main:"Гримёрка примы в служебном коридоре: поговорить с Аллой Евой",extra:n}):{main:"Подняться на сцену: друзья ждут",extra:n}}function _v(i,t,e){return i.pol_light?{main:"Открыть засов подвала",hint:"Прихожая, железная дверь подвала на дальней стене"}:i.pol_dark?{main:"Полина: найти, откуда в доме берётся свет",hint:"Галерея. Цветы на обоях над дверями повёрнуты по-разному"}:i.pol_open?{main:"Спуститься в подвал"}:i.pol_photos?{main:"Открыть замок подвала",hint:"Знаки трёх лжецов, по году: от самого давнего к самому новому"}:i.pol_book?{main:"Найти трёх лжецов среди портретов",hint:"Осмотрите портрет (E), потом посмотрите на него через камеру (C). Лжец в видоискателе выглядит иначе. От Хозяина прячьтесь в шкафах"}:i.pol_in?{main:"Осмотреть дом. Смех доносится снизу",hint:"Библиотека: дверь на левой стене прихожей. Гостиная справа"}:e==="pol_road"?{main:"Найти помощь",hint:"Справа между ёлками тропинка к свету"}:t.has("porch_key")?{main:"Войти в дом"}:{main:"Попасть в дом",hint:"Полина знает, где в фильмах прячут ключи"}}function xv(i,t,e){return e==="rub_terrace"?{main:"Войти в казино",hint:"Дверь «CASINO» в фасаде справа"}:i.rub_rope?i.rub_won?{main:"Открыть сейф за картиной",hint:"Картина на стене салона справа"}:{main:"Сыграть три руки против Мсье Зеро",hint:"Сесть за стол: поговорить с Рубеном или Зеро. Маска Трагедии (2) показывает, что Зеро прячет"}:{main:"Попасть в частный салон",hint:"Дверь «SALON PRIVÉ» на дальней стене зала, у бархатной верёвки"}}function yv(i){return i.mat_c1?i.mat_book?i.mat_s1?i.mat_lock?i.mat_note?i.mat_bento?i.mat_break?i.mat_roof?{main:"Кабинет драмкружка",hint:"Лестница с крыши ведёт в коридор, дверь «Драмкружок». Не вмешиваться"}:{main:"Шаг 100: крыша",hint:"Лестница у тории, в конце улицы фестиваля"}:{main:"Вернуться к столу с бэнто",hint:"Что-то лежит на скамейке"}:{main:"Шаг 61: «Бэнто» на фестивале",hint:"Ворота во дворе ведут на мацури. Матвей и Арутеми у стола с бэнто"}:{main:"Шаг 38: «Записка в учебнике»",hint:"Учительский стол в классе 2-Б"}:{main:"Шаг 27: «Закрытый класс»",hint:"Класс 2-Б в коридоре: запереть дверь «случайно»"}:{main:"Шаг 12: «Один зонт»",hint:i.mat_umb?"У ворот во дворе: дать знак дождю":"Стойка с зонтами у входа в школу"}:{main:"Поднять тетрадь, которую уронил Матвей",hint:"Розовая тетрадь на полу коридора"}:{main:"Войти в школу за Матвеем",hint:"Дверь «Вход» во дворе. В коридоре второго этажа у окна сидит Арутеми-кун"}}function bv(i,t){const e=[1,2,3,4,5].filter(s=>i["eri_t"+s]).length,n=["e_photo","e_contract","e_letter","e_ticket","e_matches"].filter(s=>t.has(s)).length;return i.eri_board?{main:"Вокзал. Перрон, полночный поезд"}:e<5||n<5?{main:`Опросить свидетелей (${e}/5) и собрать улики (${n}/5)`,hint:"Клуб, гримёрка певицы, студия, особняк, вокзал. Одна улика видна только в маске Трагедии"}:{main:"Доска расследования в конторе",hint:"Свяжите ложное показание с уликой, которая ему противоречит"}}function Mv(i,t,e){return e==="liz_base"?i.liz_hair?{main:"Подняться по косе"}:{main:"Позвать Лизу у подножия башни"}:e==="liz_top"?t.has("tower_key")?{main:"Дверь вниз"}:{main:"Достать ключ с люстры"}:e==="liz_mid"?i.liz_bridge?!i.liz_gear||!i.liz_weight?{main:"Запустить лифт: нужны шестерня и груз",hint:"Обе вещи на этом ярусе"}:{main:"Лифт-противовес"}:{main:"Перебраться через провал"}:i.liz_cut?{main:"Выйти из башни"}:{main:"Поговорить с Феей"}}function Sv(i){if(!i.ang_aud)return{main:"Поехать с Ангелиной на кастинг",hint:"Поговорите с мамой у кейса визажиста, потом дверь «В агентство»"};const t=[!i.ang_dance&&"танец (зал тренировок, тренер Ми)",!i.ang_vocal&&"вокал (будка в зале тренировок)",!i.ang_photo&&"съёмка (фотостудия)",i.ang_photo&&!i.ang_double&&"заехать домой, к маме (дверь на левой стене холла)",!i.ang_mix&&"сведение демо (студия звукозаписи)"].filter(Boolean);return t.length?{main:`Подготовить дебют Энджел: осталось ${t.length}`,hint:"Любой порядок. "+t.join("; "),extra:i.ang_concept?[]:["Концепт дебюта висит на стене в холле"]}:{main:"Шоукейс: встать за пульт",hint:"Дверь DEBUT в холле, пульт справа"}}function wv(i,t,e){return e==="fin_void"?{main:"Догнать Аллу Еву",hint:"Бегите вправо по доскам. Назад дороги нет"}:e==="fin_collapse"?{main:"Пройти к сцене",hint:i.c_gap?i.c_lights?"Сфотографируйте двери: у настоящей есть тень":"Стена из особняка: маска Трагедии. Дальше ленты по ритму":"Лиза поможет с провалом"}:e==="fin_backstage"?{main:"Выйти на сцену"}:e==="fin_party"?i.cake_out?i.group_photo?{main:"Закончить вечер",hint:"Дверь справа"}:{main:"Общее фото",hint:"C: фотоаппарат"}:{main:"Задуть свечи на торте"}:e==="fin_bedroom"?{main:"Посмотреть в зеркало"}:{main:""}}function Xo(i){const t=i.state.f,e=i.state.room||"";switch(e.split("_")[0]){case"hub":return vv(t,i);case"pol":return _v(t,i,e);case"rub":return xv(t,i,e);case"mat":return yv(t);case"eri":return bv(t,i);case"liz":return Mv(t,i,e);case"ang":return Sv(t);case"fin":return wv(t,i,e)}return{main:""}}const Fs={move:{title:"Передвижение",text:"WASD или стрелки, с Shift быстрее. На телефоне джойстик слева."},act:{title:"Действие",text:"Подойдите к объекту с ромбиком и нажмите E (Enter, Пробел). Подсказка над объектом говорит, что произойдёт."},journal:{title:"Журнал",text:"Tab или кнопка ✎: задания, инвентарь, заметки, механики, фото, план театра и находки. Клавиша I сразу открывает инвентарь."},camera:{title:"Фотоаппарат",text:"C поднимает камеру, E делает снимок. Плёнка видит то, чего не видят глаза, так что сравнивайте снимки с реальностью сами."},masks:{title:"Маски",text:"1: Комедия (смешное), 2: Трагедия (сломанное и спрятанное), 3: Драма (чувства). Снять маску можно той же клавишей или Q. Комната остаётся той же, меняется только взгляд."},hide:{title:"Прятки",text:"В шкафу вас не видно. Подойдите и нажмите E, чтобы спрятаться или выйти."},stealth:{title:"Скрытность",text:"Цветной конус показывает поле зрения, не входите в него. Стены и крупная мебель закрывают обзор."},gadget:{title:"Гаджеты",text:"G: использовать гаджет из плана. Зарядов немного."},lasers:{title:"Лазеры",text:"Лазеры включаются по ритму. Дождитесь паузы и проходите."},pick:{title:"Листы выбора",text:"Выберите по одному варианту в каждой строке и подтвердите. Выбор влияет на дальнейшее."},timing:{title:"Тайминг",text:"Бегунок ходит туда-обратно. Нажмите E, когда он в красной зоне (в золотой будет идеально)."},rhythm:{title:"Ритм-сцены",text:"Ноты падают на линию: D F J K или стрелки. Облегчённый режим и калибровка задержки в настройках."},sequence:{title:"Хореография",text:"Запомните последовательность стрелок и повторите. В зеркальном раунде лево и право меняются местами."},board:{title:"Доска расследования",text:"Выберите показание слева и улику справа, которая ему противоречит, и свяжите ниткой."},runner:{title:"Погоня",text:"← → или A / D: менять полосу и уворачиваться."},storyboard:{title:"Раскадровка",text:"В сценах главы Матвея можно выбрать, как её поставить. Идеальные дубли делают мир глаже и фальшивее (Постановочность), паузы и ошибки оставляют его живым (Искренность). Дубль можно переиграть, но герои замечают повторы."},lock:{title:"Кодовые замки",text:"Стрелками на дисках выставьте символы и нажмите «Проверить». Подсказка где-то рядом."}},zr={family:{title:"Семейное фото",hint:"Гримёрка режиссёра",desc:"Мама с Сашей, папа с Настей, Вася, Софа и Катя. С моей полки."},hat:{title:"Болтливая шляпа",hint:"Гримёрка, вешалка. Смешнее в Комедии",desc:"Сорок лет позора задом наперёд."},plays1:{title:"Афиша «Люди любят»",hint:"Служебный коридор",desc:"Спектакль, в котором играла Варя. Роль маленькая, зато со смыслом."},plays2:{title:"Афиша «Глупее дурака, умнее умного»",hint:"Фойе",desc:"Ещё одна постановка с Варей. Название говорит само за себя."},hamlet:{title:"Гамлет одной актрисы",hint:"Служебный коридор",desc:"Алла Ева в роли Гамлета, Офелии и занавеса."},closet:{title:"Подсобка",hint:"Служебный коридор, дверь с табличкой «Инвентарь»",desc:"«Не забудь, что ты здесь уже была»."},matias:{title:"Матиас Ковалевский",hint:"Бельэтаж",desc:"Основатель театра. Подозрительно похож на Матвея."},cloak18:{title:"Номерок № 18",hint:"Гардероб в фойе",desc:"«Вернёшь после спектакля»."},guestbook:{title:"Книга отзывов",hint:"Фойе",desc:"Все отзывы одним почерком."},buffet:{title:"Бутафорские бутерброды",hint:"Буфет",desc:"Нарисованы. Даже шампанское крашеное."},piano:{title:"Мелодия шкатулки",hint:"Репетиционный зал",desc:"Рояль помнит ту же мелодию, что музыкальная шкатулка."},boxview:{title:"Вид из ложи",hint:"Ложа № 3 на бельэтаже",desc:"Прима репетирует поклон для пустого зала."},paint:{title:"Спор красок",hint:"Мастерская, в маске Комедии",desc:"Алая и красная. Ни малейшего сходства."},cat:{title:"Школьный кот",hint:"Глава Матвея, школьный двор",desc:"Самый мудрый персонаж этой истории."},manga:{title:"«Весна, которую я не сказал»",hint:"Глава Матвея, кабинет литературы",desc:"Сёдзё-манга на учительском столе. Закладка на последней главе."},donut:{title:"Пончик охранника",hint:"Глава Рубена, пост охраны",desc:"Я не чудовище."},clock13:{title:"Тринадцатый час",hint:"Глава Полины, прихожая, в Комедии",desc:"БОМ. Для тех, кто опоздал на все двенадцать."},mirror_tale:{title:"Зеркальце из соседней сказки",hint:"Глава Лизы, покои принцессы",desc:"У них сокращения."}};function Tv(i){const t=i.state.f,e=i.state.room||"",n=Xo(i),s=[];return n.hint&&s.push(n.hint),e==="hub_backstage"&&t.masks&&!t.bridge&&s.push("Подойдите к фанерному мостику на колёсах и нажмите E: он откатится к краю люка.","Подойдите к прожектору на треноге и нажимайте E, пока луч не ляжет через мостик на люк (третье положение).","Наденьте маску Трагедии (клавиша 2). Тень мостика станет плотной, по ней можно пройти."),e==="hub_backstage"&&t.bridge&&s.push("Мост из тени держит только в маске Трагедии (клавиша 2). Без маски это просто тень."),e.startsWith("hub")&&i.has("marionette")&&!t.office_open&&s.push("Кабинет худрука: бельэтаж, гобелен на западной (левой) стене. Наденьте маску Трагедии, за гобеленом проявится дверь. Марионетка Рубена работает как ключ."),e.startsWith("pol")&&(t.pol_in||s.push("От машины идите вправо по дороге: между ёлками тропинка к свету. Ключ от дома под вторым цветочным горшком справа от двери."),t.pol_book&&!t.pol_photos&&s.push("В библиотеке пять портретов. Подойдите к каждому и нажмите E: описание расскажет, что на нём нарисовано.","Поднимите камеру (C): в видоискателе лжецы выглядят иначе. Сделайте снимок (E) каждого, игра запишет год и знак.","Лжецы: «Дети на качелях» (1897, знак ♣), «Хозяин дома» (1922, знак ⚷), «Дама с веером» (1931, знак ☾).","Хозяин входит после книги и ходит вдоль портретов. Прячьтесь в шкафах у дальней стены (E)."),t.pol_book&&!t.pol_open&&s.push("Код замка подвала: знаки лгунов по году, от старого к новому: ♣ ⚷ ☾."),t.pol_dark&&!t.pol_light&&s.push("Играете за Полину. В галерее над каждой дверью цветок на обоях. Настоящая дверь там, где бутон смотрит вверх (вторая слева).","Хозяин ходит по галерее туда-обратно. Прячьтесь в шкафах (E), когда он близко.","За настоящей дверью кухня. Щиток на стене справа от плиты: поднимите рубильник."),t.pol_light&&s.push("Вернитесь в прихожую и откройте засов подвала.")),e.startsWith("rub")&&s.push("Оба способа пройти в салон работают. В покере подсказки Вари сначала неверны: Рубен читает стол лучше, когда она молчит.","Наденьте маску Трагедии (2) перед раздачей: появится скрытый жест Зеро и вариант точной подсказки.","В последней руке Рубен сам вынимает наушник. Любой выбор ведёт дальше."),e.startsWith("mat")&&(s.push("Любой вариант раскадровки проходим. Идеальные дубли делают мир картонным и ведут к другим финалам, это не ошибка."),t.mat_umb&&!t.mat_s1&&s.push("У ворот нажмите E на «Дать знак дождю» и поймайте момент на шкале (E в красной зоне)."),t.mat_bentoG&&!t.mat_bento&&s.push("Поднимите камеру (C) и снимите их у стола, или выберите «Не мешать»."),t.mat_roof&&!t.mat_done&&s.push("В кабинете драмкружка выбирайте «Промолчать», «Не трогать», «Пусть сбивается», чтобы не вмешиваться.")),e.startsWith("eri")&&s.push("Опросите пятерых свидетелей и соберите пять улик. Одна улика видна только в маске Трагедии.","Решение доски: Мэй ↔ Фото, Грей ↔ Контракт, Вейс ↔ Записка, Кассир ↔ Квитанция. Показание «танцовщицы» правдиво, спички ничего не опровергают."),e.startsWith("liz")&&s.push("У подножия башни позовите Лизу, по косе поднимитесь наверх.","На среднем ярусе: мост через провал, затем шестерня и груз для лифта-противовеса. Обе вещи лежат на том же ярусе.","Наверху ключ висит на люстре: опустите её."),e.startsWith("ang")&&s.push("Дома: мамин кейс и разговор с Ангелиной, потом кастинг в агентстве. После фотостудии заедьте домой: быстрое переодевание (E в зоне). Затем сведение демо и шоукейс.","В хореографии повторяйте стрелки. В зеркальном раунде лево и право меняются местами."),s.length||s.push("Осмотритесь: объекты с ромбиком можно изучить клавишей E. Задание и подсказки всегда в журнале (Tab)."),{title:n.main||"Что делать дальше",steps:s}}const rh=new Map,ot=(i,t,e,n,s,r)=>{i.fillStyle=r,i.fillRect(t,e,n,s)},Ev={camera:i=>{ot(i,4,10,24,16,"#26262c"),ot(i,6,7,7,3,"#34343c"),ot(i,22,8,4,2,"#c8c8d0"),ot(i,11,12,11,11,"#4a4a58"),ot(i,13,14,7,7,"#7aa0c8"),ot(i,14,15,3,2,"#d8f0ff"),ot(i,5,12,3,2,"#c41e3a")},marionette:i=>{ot(i,6,2,20,2,"#5a4029");for(const t of[8,16,24])ot(i,t,4,1,7,"#ddd");ot(i,12,10,8,7,"#e8d8c0"),ot(i,12,10,4,7,"#f4ecd8"),ot(i,13,12,1,1,"#111"),ot(i,18,12,1,1,"#111"),ot(i,12,17,8,7,"#a3122a"),ot(i,9,17,3,7,"#e8d8c0"),ot(i,20,17,3,7,"#e8d8c0"),ot(i,13,24,2,6,"#333"),ot(i,17,24,2,6,"#333")},lantern:i=>{ot(i,15,2,2,4,"#333"),ot(i,9,6,14,18,"#e84a6f"),ot(i,12,8,8,14,"#ffd060"),ot(i,9,10,14,1,"#b03050"),ot(i,9,18,14,1,"#b03050"),ot(i,11,24,10,2,"#333"),ot(i,14,26,4,4,"#f2c230")},archive_card:i=>{ot(i,3,7,26,18,"#efe3c4"),ot(i,3,7,26,3,"#8e1830");for(let t=0;t<4;t++)ot(i,6,13+t*3,18-t*3,1,"#5a4029");ot(i,22,18,4,4,"#3a2a14")},braid:i=>{for(let t=2;t<30;t++){const e=13+Math.sin(t/2.2)*4;ot(i,e,t,6,1,t%4<2?"#8c6a45":"#6a4a2a")}ot(i,12,26,8,3,"#c41e3a")},demo:i=>{ot(i,3,8,26,17,"#1a1420"),ot(i,6,10,20,7,"#ff9ad8"),ot(i,9,19,14,4,"#333"),ot(i,10,20,3,2,"#aaa"),ot(i,19,20,3,2,"#aaa"),ot(i,8,12,16,1,"#fff")},flashlight:i=>{ot(i,6,13,16,7,"#3a3a40"),ot(i,22,11,6,11,"#5a5a62"),ot(i,23,12,4,9,"#fff4c8"),ot(i,10,11,3,2,"#c41e3a")},porch_key:i=>{ot(i,4,10,9,10,"#b08a2c"),ot(i,6,12,5,6,"#000"),ot(i,13,14,15,3,"#b08a2c"),ot(i,22,17,2,4,"#b08a2c"),ot(i,26,17,2,3,"#b08a2c")},tower_key:i=>{ot(i,4,9,10,12,"#d4ae48"),ot(i,6,11,6,8,"#000"),ot(i,14,14,14,3,"#d4ae48"),ot(i,21,17,2,4,"#d4ae48"),ot(i,25,17,2,5,"#d4ae48"),ot(i,7,6,4,3,"#e84a6f")},gear:i=>{ot(i,8,8,16,16,"#b08a2c"),ot(i,13,3,6,26,"#b08a2c"),ot(i,3,13,26,6,"#b08a2c"),ot(i,13,13,6,6,"#3a2a14")},weight:i=>{ot(i,6,11,20,18,"#484e59"),ot(i,10,7,12,5,"#5e6673"),ot(i,13,3,6,5,"#343841"),ot(i,8,14,3,12,"#78818f")},emp:i=>{ot(i,6,9,20,15,"#22303a"),ot(i,9,12,14,6,"#40e0d0"),ot(i,13,4,2,5,"#888"),ot(i,12,20,8,2,"#ff4fa0")},owner_mask:i=>{ot(i,7,4,18,22,"#e8e4d8"),ot(i,10,10,4,4,"#111"),ot(i,18,10,4,4,"#111"),ot(i,11,19,10,2,"#111"),ot(i,9,17,2,2,"#111"),ot(i,21,17,2,2,"#111")},e_photo:i=>{ot(i,5,5,22,24,"#eee"),ot(i,7,7,18,15,"#666"),ot(i,10,11,4,9,"#222"),ot(i,18,11,4,9,"#222"),ot(i,11,9,3,3,"#bbb"),ot(i,19,9,3,3,"#bbb")},e_contract:i=>{ot(i,6,3,20,26,"#ececec");for(let t=0;t<6;t++)ot(i,9,7+t*3,14,1,"#888");ot(i,9,23,14,4,"#c41e3a")},e_letter:i=>{ot(i,4,8,24,17,"#e8e8e8"),ot(i,4,8,12,9,"#cfcfcf"),ot(i,16,8,12,9,"#d8d8d8"),ot(i,14,15,4,3,"#555")},e_ticket:i=>{ot(i,4,9,24,14,"#ddd"),ot(i,8,9,1,14,"#999");for(let t=0;t<3;t++)ot(i,11,12+t*3,14,1,"#666")},e_matches:i=>{ot(i,6,9,20,14,"#333"),ot(i,6,9,20,3,"#6a8ad0");for(let t=0;t<4;t++)ot(i,9+t*4,4,2,6,"#d8c8a0"),ot(i,9+t*4,3,2,2,"#a3122a")}};function ah(i){const t=rh.get(i);if(t)return t;const e=document.createElement("canvas");e.width=e.height=32;const n=e.getContext("2d");(Ev[i]||(h=>{ot(h,6,6,20,20,"#8a7a5a"),ot(h,9,9,14,14,"#d4ae48")}))(n);const s=n.getImageData(0,0,32,32),r=s.data,a=new Uint8ClampedArray(r),o=(h,l)=>h>=0&&l>=0&&h<32&&l<32&&a[(l*32+h)*4+3]>40;for(let h=0;h<32;h++)for(let l=0;l<32;l++)if(!o(l,h)&&(o(l-1,h)||o(l+1,h)||o(l,h-1)||o(l,h+1))){const f=(h*32+l)*4;r[f]=22,r[f+1]=17,r[f+2]=20,r[f+3]=255}n.putImageData(s,0,0);const c=e.toDataURL();return rh.set(i,c),c}const Tn="#eadfc8",Ge="#b9a888",cn="#c9a35a",Yi="#b3142c",vi="#6e0a18",fs="#120c0d",oh=(i,t,e,n=Tn,s=.16)=>`<path d="M${i},${t-e} L${i+e*s},${t-e*s} L${i+e},${t} L${i+e*s},${t+e*s} L${i},${t+e} L${i-e*s},${t+e*s} L${i-e},${t} L${i-e*s},${t-e*s}Z" fill="${n}"/>`,Av=(i,t,e,n=cn)=>{let s="";for(let r=0;r<16;r++){const a=r*Math.PI/8,o=r%2?e*.55:e,c=.06;s+=`<path d="M${i},${t} L${i+Math.cos(a-c)*6},${t+Math.sin(a-c)*6} L${i+Math.cos(a)*o},${t+Math.sin(a)*o} L${i+Math.cos(a+c)*6},${t+Math.sin(a+c)*6}Z" fill="${n}"/>`}return s+`<circle cx="${i}" cy="${t}" r="${e*.17}" fill="${n}" stroke="${fs}" stroke-width="1.5"/>`},lh=(i,t)=>`<g><path d="${i}" stroke="${Ge}" stroke-width="30" fill="none"/><path d="${i}" stroke="${fs}" stroke-width="30" stroke-dasharray="3 9" fill="none"/><path d="${i}" stroke="#2a2220" stroke-width="16" fill="none"/><path d="${i}" stroke="${Ge}" stroke-width="16" stroke-dasharray="2 22" fill="none" opacity=".8"/></g>`,ch=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n}) scale(${e})">
  <path d="M0,0 C-10,40 -6,90 4,140" stroke="#3b4a34" stroke-width="5" fill="none"/><path d="M2,70 C-30,60 -52,72 -60,96 C-36,92 -14,86 2,74Z" fill="#3b4a34"/>
  ${[0,72,144,216,288].map(s=>`<path transform="rotate(${s})" d="M0,0 C-14,-20 -16,-52 0,-78 C16,-52 14,-20 0,0Z" fill="${Tn}" stroke="${Ge}" stroke-width="2"/><path transform="rotate(${s})" d="M0,-6 L0,-60" stroke="${Ge}" stroke-width="1.5"/>`).join("")}
  ${[-30,-10,10,30].map(s=>`<path transform="rotate(${s})" d="M0,0 L0,-46" stroke="${cn}" stroke-width="1.6"/><ellipse transform="rotate(${s})" cx="0" cy="-48" rx="3" ry="6" fill="#a0602a"/>`).join("")}</g>`,Cv=(i,t,e)=>`<g transform="translate(${i} ${t}) scale(${e})">
  <path d="M0,20 C6,70 -4,110 10,150" stroke="#2c3a2a" stroke-width="5" fill="none"/>
  ${[0,90,180,270].map((n,s)=>`<path transform="rotate(${n+20})" d="M0,0 C-44,-6 -58,-48 -30,-66 C-8,-80 22,-70 30,-50 C40,-24 22,-4 0,0Z" fill="${s%2?Yi:"#c8202e"}" stroke="${vi}" stroke-width="2"/>`).join("")}
  ${[0,60,120,180,240,300].map(n=>`<path transform="rotate(${n})" d="M0,0 C-6,-14 -4,-30 0,-40" stroke="${vi}" stroke-width="1.5" fill="none" opacity=".7"/>`).join("")}
  <circle r="14" fill="#1c1416"/>${[0,45,90,135,180,225,270,315].map(n=>`<circle transform="rotate(${n})" cx="0" cy="-20" r="2.4" fill="#1c1416"/>`).join("")}</g>`,Pr=(i,t,e,n)=>`<g transform="translate(${i} ${t}) rotate(${n})"><path d="M-6,0 C-6,${e*.3} -5,${e*.55} -4,${e*.62} L-3.4,${e*.66} C-4,${e*.8} -3,${e*.95} 0,${e} C3,${e*.95} 4,${e*.8} 3.4,${e*.66} L4,${e*.62} C5,${e*.55} 6,${e*.3} 6,0Z" fill="${Tn}" stroke="#7a6a52" stroke-width="1.6"/>${[.3,.62].map(s=>`<path d="M-4,${e*s} C-1,${e*s+3} 1,${e*s+3} 4,${e*s}" stroke="#7a6a52" stroke-width="1.2" fill="none"/>`).join("")}<path d="M-2.4,${e-7} C-1,${e-3} 1,${e-3} 2.4,${e-7}" stroke="#a89878" stroke-width="1.2" fill="none"/></g>`,Rv=`<g transform="translate(1010 34) rotate(14)">
  <path d="M84,-40 C110,-30 140,-38 168,-60 L184,-20 C160,0 128,10 100,8Z" fill="#1c1416" stroke="${Ge}" stroke-width="1.5"/>
  ${[0,1,2,3,4,5].map(i=>`<path d="M${84+i*3},${-38+i*8} l-10,4 l10,3" stroke="${Ge}" stroke-width="1.4" fill="none"/>`).join("")}
  <path d="M86,-36 C60,-30 34,-24 10,-6 C0,4 -4,18 2,30 C18,44 46,46 70,38 C84,30 96,10 100,4Z" fill="${Tn}" stroke="#7a6a52" stroke-width="2"/>
  ${[[20,-2],[36,-4],[52,-4],[66,0]].map(([i,t])=>`<path d="M${i},${t} C${i+4},${t+8} ${i+6},${t+16} ${i+4},${t+26}" stroke="#a89878" stroke-width="1.3" fill="none"/>`).join("")}
  ${Pr(6,22,58,22)}${Pr(24,32,70,10)}${Pr(44,36,72,-2)}${Pr(62,32,60,-14)}
  <g transform="translate(86 20) rotate(-58)"><path d="M-7,0 C-7,20 -5,34 0,40 C5,34 7,20 7,0Z" fill="${Tn}" stroke="#7a6a52" stroke-width="1.6"/></g>
  ${[[10,10],[30,22],[50,26],[70,20]].map(([i,t])=>`<path d="M${i},${t} l4,2" stroke="#7a6a52" stroke-width="1.4"/>`).join("")}</g>`,Pv=`<g transform="translate(1046 232) rotate(-14) scale(.85)"><path d="M-46,-38 C-20,-56 26,-56 50,-40 C58,-12 54,26 38,52 C26,70 6,78 -6,70 C-16,62 -8,40 -26,30 C-44,20 -56,-12 -46,-38Z" fill="${Tn}" stroke="${Ge}" stroke-width="2.5"/>
  <path d="M-30,-14 C-20,-24 -4,-22 2,-10 C-6,-2 -22,-2 -30,-14Z" fill="${fs}"/><path d="M14,-12 C22,-24 38,-22 42,-10 C36,0 22,0 14,-12Z" fill="${fs}"/>
  <path d="M-48,-30 C-20,-46 26,-48 50,-34" stroke="${cn}" stroke-width="2.5" fill="none"/><path d="M4,8 C6,20 10,30 18,34" stroke="${Ge}" stroke-width="2" fill="none"/></g>`,Lv=`<g transform="translate(470 676) rotate(-12)"><rect x="-58" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Ge}" stroke-width="3"/><rect x="14" y="-26" width="44" height="52" rx="10" fill="#3a3436" stroke="${Ge}" stroke-width="3"/>
  <ellipse cx="-36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${Tn}" stroke-width="3"/><ellipse cx="36" cy="26" rx="22" ry="8" fill="#6a6466" stroke="${Tn}" stroke-width="3"/><rect x="-14" y="-12" width="28" height="18" rx="4" fill="${cn}"/>
  <path d="M-46,-22 L-46,18 M24,-22 L24,18" stroke="${Tn}" stroke-width="3" opacity=".6"/><path d="M0,-12 C10,-50 60,-60 90,-48" stroke="${cn}" stroke-width="3" fill="none"/></g>`,Dv=`<g transform="translate(890 668) rotate(-10)"><rect x="-74" y="-44" width="148" height="88" rx="6" fill="#d8ccb2" stroke="${Ge}" stroke-width="3"/><rect x="-66" y="-36" width="132" height="72" fill="none" stroke="#8a7a5a" stroke-width="2"/>
  <path d="M-46,20 L-46,-6 L0,-24 L46,-6 L46,20Z" fill="none" stroke="#5a4a3a" stroke-width="2"/>${[-34,-18,-2,14,30].map(i=>`<path d="M${i},20 L${i},0" stroke="#5a4a3a" stroke-width="2"/>`).join("")}<path d="M-56,24 L56,24" stroke="#5a4a3a" stroke-width="2"/>
  <text x="0" y="-27" text-anchor="middle" font-family="Playfair Display, serif" font-size="9" fill="#5a4a3a" letter-spacing="2">ТЕАТРЪ</text><circle cx="-74" cy="0" r="8" fill="${fs}"/><circle cx="74" cy="0" r="8" fill="${fs}"/></g>`;function Tu(i="lg"){return`<svg class="logo-svg" viewBox="0 0 1200 800" role="img" aria-label="THE OTHER ME: APPLAUSE, PLEASE!" xmlns="http://www.w3.org/2000/svg">
<defs>
  <linearGradient id="${i}iv" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6eedc"/><stop offset=".55" stop-color="${Tn}"/><stop offset="1" stop-color="#a8977a"/></linearGradient>
  <linearGradient id="${i}rd" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e2283c"/><stop offset=".6" stop-color="${Yi}"/><stop offset="1" stop-color="${vi}"/></linearGradient>
  <linearGradient id="${i}cur" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="${vi}"/><stop offset=".5" stop-color="${Yi}"/><stop offset="1" stop-color="${vi}"/></linearGradient>
  <filter id="${i}worn" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="1" seed="7" result="n"/><feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -9 6.6" result="m"/><feComposite in="SourceGraphic" in2="m" operator="in"/></filter>
  <radialGradient id="${i}vig"><stop offset="0" stop-color="#000" stop-opacity=".75"/><stop offset="1" stop-color="#000" stop-opacity="0"/></radialGradient>
  <clipPath id="${i}arch"><path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262Z"/></clipPath>
  <filter id="${i}glow" x="-10%" y="-30%" width="120%" height="160%"><feGaussianBlur stdDeviation="5" result="b0"/><feColorMatrix in="b0" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 .55 0" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
</defs>
<g class="lg-orn" stroke-linejoin="round"><g transform="translate(600 262) scale(1.32) translate(-600 -262)">
  <path d="M360,262 C360,170 440,118 520,112 C556,108 584,96 600,78 C616,96 644,108 680,112 C760,118 840,170 840,262" stroke="${cn}" stroke-width="5" fill="none"/>
  <path d="M376,262 C378,184 448,134 524,128 C560,124 586,114 600,100 C614,114 640,124 676,128 C752,134 822,184 824,262" stroke="${Ge}" stroke-width="2" fill="none"/>
  ${[400,470,730,800].map((t,e)=>`<circle cx="${t}" cy="${[196,142,142,196][e]}" r="5" fill="${cn}"/>`).join("")}
  <ellipse cx="600" cy="420" rx="560" ry="330" fill="url(#${i}vig)"/>
  <g clip-path="url(#${i}arch)"><rect x="370" y="90" width="460" height="180" fill="#160a0c"/>
    <path d="M370,120 L830,120 L830,150 C800,206 760,214 730,170 C700,226 650,230 600,178 C550,230 500,226 470,170 C440,214 400,206 370,150Z" fill="url(#${i}cur)"/>
    <path d="M370,150 C400,206 440,214 470,170 C500,226 550,230 600,178 C650,230 700,226 730,170 C760,214 800,206 830,150" stroke="${vi}" stroke-width="3" fill="none"/>
    ${[420,530,670,780].map(t=>`<path d="M${t},128 C${t+10},160 ${t-6},180 ${t+4},200" stroke="#e2283c" stroke-width="2" fill="none" opacity=".5"/>`).join("")}
    <path d="M370,130 C410,170 420,230 400,270 L370,270Z" fill="${Yi}"/><path d="M830,130 C790,170 780,230 800,270 L830,270Z" fill="${Yi}"/></g>
  ${[470,730].map(t=>`<path d="M${t},170 L${t},214" stroke="${cn}" stroke-width="2"/><path d="M${t-6},214 L${t+6},214 L${t+4},236 L${t-4},236Z" fill="${cn}"/>`).join("")}
  ${Av(600,92,40)}</g>
  <path d="M372,262 L828,262" stroke="${cn}" stroke-width="4"/><path d="M386,268 L814,268" stroke="${Ge}" stroke-width="1.5"/>
  ${lh("M40,560 C90,520 160,540 190,600 C220,660 300,700 380,690")}
  ${lh("M1060,420 C1100,392 1150,402 1162,444 C1172,480 1150,506 1124,504")}
  
  ${ch(110,440,.85,-18)}${ch(162,486,.55,24)}
  ${Cv(1104,610,.68)}
  ${Rv}
  ${[[1002,104,1030,196],[1026,120,1070,200],[1052,126,940,290],[1076,118,1140,420]].map(([t,e,n,s])=>`<path d="M${t},${e} L${n},${s}" stroke="${Ge}" stroke-width="1.6" opacity=".85"/>`).join("")}
  ${Pv}
  <g stroke="${Ge}" stroke-width="2.2" fill="none" stroke-linecap="round">
    <path d="M268,372 C226,352 196,370 200,398 C204,422 236,424 244,404 C250,388 232,380 224,392"/><path d="M268,372 C240,330 260,300 290,300"/><path d="M262,440 C230,450 210,474 226,494"/>
    <path d="M940,372 C982,352 1012,370 1008,398 C1004,422 972,424 964,404 C958,388 976,380 984,392"/><path d="M940,440 C972,450 992,474 976,494"/>
    ${[[212,470],[236,316],[998,470]].map(([t,e])=>`<path d="M${t},${e} l-8,-10 M${t},${e} l10,-6"/>`).join("")}
  </g>
</g>
<g filter="url(#${i}worn)">
  <text x="248" y="246" font-family="Aurelia, serif" font-size="58" fill="url(#${i}iv)" letter-spacing="8">THE</text><path d="M246,258 L360,258" stroke="${cn}" stroke-width="2"/>
  <text x="600" y="418" text-anchor="middle" font-family="Aurelia, serif" fill="url(#${i}iv)" stroke="#2a1e1a" stroke-width="1.5" paint-order="stroke"><tspan font-size="212" dy="10">O</tspan><tspan font-size="168" dy="-10" letter-spacing="4">THER</tspan><tspan font-size="212" dx="30" dy="10">M</tspan><tspan font-size="168" dy="-10">E</tspan><tspan font-size="150" fill="${cn}" dx="10">:</tspan></text>
  </g>
<text x="612" y="528" text-anchor="middle" font-family="Cintarini, cursive" font-size="104" fill="url(#${i}rd)" stroke="url(#${i}rd)" stroke-width="3.2" transform="rotate(-4 600 510)" filter="url(#${i}glow)">Applause, Please!</text>
<g class="lg-orn2" transform="translate(0 -20)">
  <path d="M280,630 C380,612 470,640 540,626 C570,620 586,614 600,604 C614,614 630,620 660,626 C730,640 820,612 920,630" stroke="${Ge}" stroke-width="2.5" fill="none"/>
  <path d="M330,618 C300,600 300,580 322,578 M870,618 C900,600 900,580 878,578" stroke="${Ge}" stroke-width="2" fill="none"/>
  <path d="M560,640 L600,736 L640,640 C626,652 612,650 600,644 C588,650 574,652 560,640Z" fill="${Yi}"/><path d="M582,650 L600,712 L618,650" stroke="${vi}" stroke-width="2" fill="none"/>
  ${oh(600,640,40,Tn,.12)}
  ${Lv}${Dv}
  ${[[300,150,16],[1030,190,10],[110,360,12],[1150,580,14],[250,520,9],[700,690,10],[1170,300,8],[60,700,10],[780,60,9],[420,70,7]].map(([t,e,n])=>oh(t,e,n,cn)).join("")}
</g></svg>`}const Be=()=>document.getElementById("ui");function de(i,t="",e="",n){const s=document.createElement(i);return t&&(s.className=t),e&&(s.innerHTML=e),n&&n.appendChild(s),s}const ie=i=>i.replace(/&/g,"&amp;").replace(/</g,"&lt;"),hh=[["hub_mezz","Бельэтаж",30,20,240,40,"2"],["hub_rehearsal","Репетиционный",30,70,70,40,"2"],["hub_archive","Архив",105,70,55,40,"2"],["hub_box","Ложа 3",165,70,45,40,"2"],["hub_office","Кабинет К.",215,70,55,40,"2"],["hub_foyer","Фойе",30,160,110,70,"1"],["hub_stage","Сцена и зал",150,160,120,70,"1"],["hub_corridor","Служебный коридор",30,240,240,34,"1"],["hub_dressing","Гримёрка режиссёра",30,282,75,34,"1"],["hub_costume","Костюмерная",110,282,70,34,"1"],["hub_workshop","Мастерская",185,282,85,34,"1"],["hub_backstage","Карман сцены",280,160,70,114,"1"],["hub_trap","Трюм под сценой",150,370,200,40,"0"]];function Iv(i,t){const e=(a,o)=>`<text x="8" y="${a}" font-family="Playfair Display" font-size="10" fill="#8e1830" letter-spacing="2">${o}</text>`,n=hh.map(([a,o,c,h,l,f])=>{const d=t[a]||a===i,m=a===i;return`<g><rect x="${c}" y="${h}" width="${l}" height="${f}" fill="${m?"#8e1830":d?"#efe0b8":"#d8cba8"}" stroke="#5a4029" stroke-width="${m?2:1}" ${d?"":'stroke-dasharray="3 2"'}/><text x="${c+l/2}" y="${h+f/2+3}" text-anchor="middle" font-family="Lora" font-size="8.5" fill="${m?"#fff4e0":d?"#2a1a14":"#9a8a6a"}">${d?o:"?"}</text></g>`}).join(""),s=[[150,60,150,160],[262,60,262,240],[250,274,250,370],[210,230,210,370],[85,230,85,240],[270,200,280,200],[55,274,55,282],[145,274,145,282],[228,274,228,282],[65,60,65,70],[132,60,132,70],[187,60,187,70],[242,60,242,70]].map(([a,o,c,h])=>`<line x1="${a}" y1="${o}" x2="${c}" y2="${h}" stroke="#a3122a" stroke-width="1.5" stroke-dasharray="2 2"/>`).join(""),r=hh.some(a=>a[0]===i);return`<svg viewBox="0 0 360 420" style="width:100%;max-height:62vh;display:block" xmlns="http://www.w3.org/2000/svg">${e(14,"ЭТАЖ 2 · БЕЛЬЭТАЖ")}${e(150,"ЭТАЖ 1 · ПАРТЕР")}${e(362,"ПОД СЦЕНОЙ")}${s}${n}</svg><p class="warn">Пунктир, переходы и лестницы. «?», там вы ещё не были.${r?"":" Сейчас вы за пределами театра, в чужой пьесе."}</p>`}const Uv=i=>`${Math.floor(i/3600)}:${String(Math.floor(i/60)%60).padStart(2,"0")}`,Nv=Tu("m");class kv{constructor(){this.modal=!1,this.dialogOpen=!1,this.modals=[],this.log=[],this.advance=null,this.auto=!1,this.placeEl=null,this.lastQuest="",this.qRoom="",this.qT=0,this.skipping=!1,this.toastAt=0,this.lbEl=null,this.lbOn=!1,this.introPlayed=!1}init(){const t=Be();this.hudEl=de("div","hud hidden","",t),this.maskRow=de("div","masks","",this.hudEl),this.hudR=de("div","hud-r","",this.hudEl),this.toasts=de("div","toasts","",t),this.promptEl=de("div","prompt hidden","",t),this.saveEl=de("div","savemark","✎ сохранено",t),this.lyricEl=de("div","lyric hidden","",t),this.dlg=de("div","dlg hidden",'<div class="port"><img alt=""></div><div class="box"><div class="name"></div><div class="tools"><button data-a="hist">История</button><button data-a="auto">Авто</button><button data-a="skip">Пропуск</button></div><div class="text"></div><div class="more">▼</div></div>',t),this.vf=de("div","viewfinder hidden","<b>● REC</b><span>E / Enter, снимок · C / Esc, убрать камеру</span>",t),this.loadingEl=de("div","savemark","Меняем декорации…",t),this.loadingEl.style.right="auto",this.loadingEl.style.left=".8rem",this.dlg.addEventListener("click",e=>{const n=e.target.dataset?.a;n==="hist"?this.history():n==="auto"?(this.auto=!this.auto,e.target.style.background=this.auto?"#8e1830":"",this.auto&&this.advance&&this.advance()):n==="skip"?(this.skipping=!0,this.advance&&this.advance()):this.advance&&this.advance()}),Ji(e=>{if(this.modal){e==="pause"&&this.closeTop();return}e==="act"&&this.advance&&this.advance()}),this.hudR.innerHTML='<button class="hbtn" data-a="cam" title="Фотоаппарат (C)">◉</button><button class="hbtn" data-a="inv" title="Инвентарь (I)">▣<span class="hb-n"></span></button><button class="hbtn" data-a="note" title="Журнал (Tab)">✎</button><button class="hbtn" data-a="help" title="Подсказка: что делать дальше (?)">?</button><button class="hbtn" data-a="pause" title="Пауза (Esc)">❚❚</button>',this.hudR.addEventListener("click",e=>{const n=e.target.closest("[data-a]")?.getAttribute("data-a");n==="cam"&&pi("camera"),n==="inv"&&pi("inventory"),n==="note"&&pi("notebook"),n==="pause"&&pi("pause"),n==="help"&&pi("help")}),this.questEl=de("div","questbox","",this.hudEl),this.questEl.addEventListener("click",()=>this.notebook("quests")),this.questEl.addEventListener("mouseenter",()=>this.questEl.classList.remove("mini")),this.maskRow.addEventListener("click",e=>{const n=e.target.closest("[data-m]");if(n){const s=n.dataset.m;s==="none"?Et.state.mask&&Et.setMask(Et.state.mask):Et.state.mask!==s&&Et.setMask(s),this.maskRow.classList.remove("open");return}e.target.closest(".maskmain")&&(this.maskRow.classList.toggle("open"),Vt.sfx("click"))}),this.buildTouch(),this.applySettings()}applySettings(){document.documentElement.style.setProperty("--s",String(Me.uiScale)),document.body.classList.toggle("contrast",Me.contrast),Vt.applyVolumes(),this.touchEl.classList.toggle("hidden",!Me.touch||!Et.running)}say(t){this.dialogOpen=!0,this.dlg.classList.remove("hidden"),this.prompt(null);const e=this.dlg.querySelector(".port"),n=e.querySelector("img"),s=this.dlg.querySelector(".name"),r=this.dlg.querySelector(".text");return e.classList.toggle("none",!t.portrait),t.portrait&&(n.src=t.portrait),e.classList.toggle("noir",t.portrait.endsWith("#noir")),e.classList.toggle("art",t.portrait.startsWith("portraits/")),s.innerHTML=t.name?`<i style="background:${t.color}"></i>${ie(t.name)}`:"",r.classList.toggle("it",t.italic),this.log.push({name:t.name,text:t.text,color:t.color}),this.log.length>250&&this.log.shift(),new Promise(a=>{const o=t.text;let c=0,h=!1,l,f;const d=Me.textSpeed,m=()=>{clearInterval(l),clearTimeout(f),this.advance=null,a()},g=()=>{c=o.length,r.textContent=o,h=!0,clearInterval(l),this.auto&&(f=setTimeout(m,900+o.length*45))};if(Et.fast||this.skipping&&t.seen||Qi("skip")&&t.seen){r.textContent=o,setTimeout(m,Et.fast?0:60);return}this.skipping=!1,d?(r.textContent="",l=setInterval(()=>{c=Math.min(o.length,c+Math.max(1,Math.round(d/30))),r.textContent=o.slice(0,c),c%3===0&&/[а-яa-z]/i.test(o[c-1]||"")&&Vt.blip(t.pitch),c>=o.length&&g()},33)):g(),this.advance=()=>{h?m():g()}})}sayHide(){this.dialogOpen=!1,this.dlg.classList.add("hidden"),this.skipping=!1}choice(t){if(Et.fast)return Promise.resolve(Et.autoChoice?Et.autoChoice(t):0);const e=de("div","choices"+(this.dialogOpen?"":" solo"),"",Be());let n=0;return this.skipping=!1,new Promise(s=>{const r=t.map((l,f)=>{const d=de("button","choice"+(l.mask?" mask":""),`<span class="n">${f+1}.</span>${ie(l.text)}`,e);return d.onclick=m=>{m.stopPropagation(),h(f)},d.onmouseenter=()=>{n=f,a()},d}),a=()=>r.forEach((l,f)=>l.classList.toggle("on",f===n)),o=Ji((l,f)=>{if(!this.modal){if(l==="up")n=(n+t.length-1)%t.length,Vt.sfx("hover"),a();else if(l==="down")n=(n+1)%t.length,Vt.sfx("hover"),a();else if(l==="act")h(n);else if(/^Digit[1-9]$/.test(f)){const d=parseInt(f.slice(5))-1;d<t.length&&h(d)}}}),c=this.advance;this.advance=null;const h=l=>{o(),e.remove(),Vt.sfx("click"),this.advance=c,this.log.push({name:"→",text:t[l].text,color:"#d4ae48"}),setTimeout(()=>s(l),0)};a()})}history(){const e=this.open(`<h2>История реплик <small>суфлёрский экземпляр</small></h2><div class="body hist">${this.log.map(n=>`<p>${n.name?`<b style="color:${n.name==="→"?"#8e1830":"#3a2a14"}">${ie(n.name)}</b> `:""}${n.name?"":"<i>"}${ie(n.text)}${n.name?"":"</i>"}</p>`).join("")||"<p><i>Пока никто ничего не сказал.</i></p>"}</div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`).querySelector(".body");e.scrollTop=e.scrollHeight}hudShow(t){this.hudEl.classList.toggle("hidden",!t),this.touchEl.classList.toggle("hidden",!t||!Me.touch),t||(this.sayHide(),this.prompt(null),this.lyric(null))}hud(){const t=Et.state.f,e=Et.room?.def.noMasks,n=a=>a==="comedy"?"☺":a==="tragedy"?"☹":a==="drama"?"❦":"◐",s=Et.state.mask;this.maskRow.innerHTML=t.masks&&!e?`<button class="maskb maskmain${s?" on m-"+s:""}" title="Маски: 1 Комедия, 2 Трагедия, 3 Драма, Q снять">${n(s)}<small>${s?uh[s]:"Маски"}</small></button><div class="maskmenu">${Object.entries(uh).map(([a,o],c)=>`<button class="maskopt${s===a?" on":""}" data-m="${a}"><b>${n(a)}</b>${o}<i>${c+1}</i></button>`).join("")}<button class="maskopt" data-m="none"><b>◐</b>Без маски<i>Q</i></button></div>`:"",this.hudR.children[0].classList.toggle("hidden",!Et.has("camera")||!!Et.room?.def.noCamera);const r=this.hudR.children[1];r.classList.toggle("hidden",!Et.state.inv.length),r.querySelector(".hb-n").textContent=String(Et.state.inv.length),this.quest()}quest(){if(!Et.running||!this.questEl)return;const t=Xo(Et),e=Et.room,n=e?e.inters.filter(o=>o.enabled&&!(o.cond&&!o.cond())&&!o.quiet&&!/^(d_|door|out|back|up|stair|stairs|lift|front)/.test(o.id)&&!(Et.state.f.used||{})[e.id+":"+o.id]).length:0,s=t.main+"|"+(t.hint||"")+"|"+n+"|"+(t.extra||[]).join("|");if(s===this.lastQuest)return;const r=this.lastQuest.split("|")[0]!==t.main;this.lastQuest=s,this.questEl.classList.toggle("hidden",!t.main),this.questEl.innerHTML=`<small>Задание</small><b>${ie(t.main)}</b>${t.hint?`<i>${ie(t.hint)}</i>`:""}${n?`<em>Здесь ещё можно осмотреть: ${n}</em>`:""}`;const a=e?e.id:"";(r||a!==this.qRoom)&&(this.qRoom=a,this.questEl.classList.remove("mini"),clearTimeout(this.qT),this.qT=setTimeout(()=>this.questEl.classList.add("mini"),6500)),r&&t.main&&!Et.fast&&(this.questEl.classList.remove("flash"),this.questEl.offsetWidth,this.questEl.classList.add("flash"),Vt.sfx("pencil"))}showItem(t){if(Et.fast)return;const e=ks[t];Vt.sfx("paper");const n=de("div","reveal",`<div class="reveal-card"><img src="${ah(t)}" alt=""><b>${ie(e?.name||t)}</b><span>${ie(e?.desc||"")}</span><small>в инвентаре · I</small></div>`,Be()),s=()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)};setTimeout(s,2600),n.onclick=s}photoZoom(t,e){Vt.sfx("paper");const n=de("div","reveal zoom",`<div class="reveal-card photo-pop big" style="--r:-1.5deg"><img class="ph" src="${t}" alt=""><span class="cap">${ie(e)}</span><small>нажмите, чтобы закрыть</small></div>`,Be());n.style.zIndex="90",n.onclick=s=>{s.stopPropagation(),n.classList.add("out"),setTimeout(()=>n.remove(),450)}}showPhoto(t,e){if(Et.fast)return;Vt.sfx("paper");const n=de("div","reveal",`<div class="reveal-card photo-pop" style="--r:-3deg"><img class="ph" src="${t}" alt=""><span class="cap">${ie(e)}</span><small>снимок в журнале · Tab</small></div>`,Be()),s=()=>{n.classList.add("out"),setTimeout(()=>n.remove(),450)};setTimeout(s,2400),n.onclick=s}prompt(t,e=0,n=0){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptEl.dataset.l!==t&&(this.promptEl.dataset.l=t,this.promptEl.innerHTML=`<kbd>E</kbd>${ie(t)}`),this.promptEl.style.left=Math.min(86,Math.max(14,e*100))+"%",this.promptEl.style.top=Math.max(8,n*100)+"%"}toast(t,e="✦"){if(Et.fast)return;const n=performance.now(),s=Math.max(n,this.toastAt);this.toastAt=s+1400,setTimeout(()=>{const r=de("div","toast",`<b>${e}</b>${ie(t)}`,this.toasts);setTimeout(()=>r.remove(),4100)},s-n)}place(t){if(this.placeEl&&this.placeEl.remove(),Et.fast)return;const e=this.placeEl=de("div","place",`<b>${ie(t)}</b><i></i>`,Be());setTimeout(()=>e.remove(),3700)}saved(t){this.saveEl.textContent=t==="auto"?"✎ автосохранение":"✎ сохранено",this.saveEl.classList.add("on"),setTimeout(()=>this.saveEl.classList.remove("on"),1600)}loading(t){this.loadingEl.classList.toggle("on",t)}lyric(t,e=""){if(!t){this.lyricEl.classList.add("hidden");return}this.lyricEl.classList.remove("hidden"),this.lyricEl.innerHTML=(e?`<small>${ie(e)}</small>`:"")+ie(t).replace(/\n/g,"<br>")}viewfinder(t){this.vf.classList.toggle("hidden",!t)}letterbox(t){t!==this.lbOn&&(this.lbOn=t,this.lbEl||(this.lbEl=de("div","letterbox","<i></i><i></i>",Be())),this.lbEl.classList.toggle("on",t))}curtainEl(){const e=n=>`<div class="cur-half ${n}">${Array.from({length:14},(s,r)=>`<b style="--i:${r};--n:14"></b>`).join("")}</div>`;return de("div","trans curtain2",`${e("l")}${e("r")}<div class="cur-val"></div>`,Be())}async transition(t,e){if(t==="curtain"){let s=Be().querySelector(".trans");if(e==="out")s&&s.remove(),s=this.curtainEl(),s.offsetWidth,s.classList.add("on"),Vt.sfx("curtain"),await new Promise(r=>setTimeout(r,1100));else if(s){s.classList.remove("on"),s.classList.add("open");const r=s;setTimeout(()=>r.remove(),1500),await new Promise(a=>setTimeout(a,500))}return}let n=Be().querySelector(".trans");if(e==="out")n&&n.remove(),n=de("div","trans "+t,"",Be()),n.offsetWidth,n.classList.add("on"),t==="curtain"&&Vt.sfx("curtain"),t==="glitch"&&Vt.sfx("glitch"),(t==="mirror"||t==="page")&&Vt.sfx("whoosh"),await new Promise(s=>setTimeout(s,t==="curtain"?760:520));else if(n){n.classList.remove("on");const s=n;setTimeout(()=>s.remove(),800),await new Promise(r=>setTimeout(r,350))}}help(){const t=Tv(Et);return Vt.sfx("paper"),this.paper({title:"Подсказка",cls:"help",body:`<p class="help-goal">${ie(t.title)}</p><ol class="help-steps">${t.steps.map(e=>`<li>${ie(e)}</li>`).join("")}</ol><p class="help-foot">Кнопка «?» доступна всегда. Подсказка меняется вместе с сюжетом.</p>`})}paper(t){return Et.fast?Promise.resolve():(Vt.sfx("paper"),new Promise(e=>{this.open(`<div class="paper ${t.cls||""}">${t.stamp?`<div class="stamp">${t.stamp}</div>`:""}${t.title?`<h3>${t.title}</h3>`:""}<div class="${t.hand?"hand":""}">${t.body}</div>${t.sign?`<div class="sign">${t.sign}</div>`:""}<button class="btn small ok" data-x>${t.btn||"Отложить"}</button></div>`,{raw:!0,onClose:()=>{Vt.sfx("paper"),e()}}).querySelector(".ok").focus({preventScroll:!0})}))}black(t){let e=document.getElementById("blackout");e||(e=de("div","","",Be()),e.id="blackout"),e.classList.toggle("on",t)}card(t,e={}){return Et.fast?Promise.resolve():new Promise(n=>{const s=de("div","card",t.map((h,l)=>{const[f,d]=Array.isArray(h)?h:[h,""];return`<p class="${d}" style="animation-delay:${l*.9}s">${f}</p>`}).join("")+'<div class="more">нажмите, чтобы продолжить</div>',Be()),r=performance.now();let a=!1;const o=()=>{a||performance.now()-r<900||(a=!0,c(),s.classList.add("out"),setTimeout(()=>{s.remove(),n()},650))},c=Ji(h=>{h==="act"&&!this.modal&&o()});s.onclick=o})}open(t,e={}){const n=de("div","modal",e.raw?t:`<div class="sheet ${e.cls||""}">${t}</div>`,Be());return n.onCloseCb=e.onClose,n.noClose=e.noClose,this.modals.push(n),this.modal=!0,this.prompt(null),sh(!0),n.addEventListener("click",s=>{s.target.closest("[data-x]")&&(Vt.sfx("click"),this.close(n))}),n}close(t){const e=this.modals.indexOf(t);if(e<0)return;this.modals.splice(e,1),t.classList.add("closing"),setTimeout(()=>t.remove(),280),this.modal=this.modals.length>0,this.modal||sh(!1);const n=t.onCloseCb;n&&n()}closeTop(){const t=this.modals[this.modals.length-1];t&&!t.noClose&&(Vt.sfx("click"),this.close(t))}confirm(t,e="Да",n="Отмена"){return new Promise(s=>{let r=!1;const a=this.open(`<h2>Минутку</h2><div class="body"><p>${t}</p></div><div class="foot"><button class="btn small" data-x>${n}</button><button class="btn small red" data-y>${e}</button></div>`,{cls:"narrow",onClose:()=>s(r)});a.querySelector("[data-y]").onclick=()=>{r=!0,this.close(a)}})}pause(){if(this.modal)return;Et.paused=!0,Vt.suspend(!0);const t=this.open(`<h2>Антракт <small>${ie(Et.state.chapter)}</small></h2><div class="body col"><button class="btn" data-a="resume">Продолжить</button><button class="btn" data-a="save">Сохранить</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="note">Блокнот режиссёра</button><button class="btn" data-a="set">Настройки</button><button class="btn red" data-a="menu">В главное меню</button></div>`,{cls:"narrow",onClose:()=>{Et.paused=!1,Vt.suspend(!1),Vt.muffle(Et.state.mask==="tragedy"?900:Et.state.mask==="drama"?2600:2e4)}});t.addEventListener("click",async e=>{const n=e.target.dataset?.a;n&&(Vt.sfx("click"),n==="resume"&&this.close(t),n==="save"&&this.saveLoad("save"),n==="load"&&this.saveLoad("load"),n==="note"&&this.notebook(),n==="set"&&this.settings(),n==="menu"&&await this.confirm("Вернуться в главное меню? Несохранённый прогресс после последнего автосохранения будет потерян.","Выйти")&&(this.close(t),Et.stopToMenu(),this.mainMenu()))}),t.querySelector(".btn").focus()}settings(){const t=Me,e=(o,c,h="")=>`<div class="row-set"><label>${o}${h?`<small>${h}</small>`:""}</label><div>${c}</div></div>`,n=(o,c,h,l)=>`<input type="range" data-k="${o}" min="${c}" max="${h}" step="${l}" value="${t[o]}">`,s=o=>`<input type="checkbox" data-k="${o}" ${t[o]?"checked":""}>`,r=this.open(`<h2>Настройки <small>пульт помрежа</small></h2><div class="body">
      ${e("Музыка",n("music",0,1,.05))}${e("Эффекты",n("sfx",0,1,.05))}${e("Голоса",n("voice",0,1,.05),"звуковой сигнал реплик; все реплики идут с субтитрами")}
      ${e("Скорость текста",n("textSpeed",0,120,5),"0: мгновенно")}${e("Масштаб интерфейса",n("uiScale",.8,1.5,.05))}
      ${e("Качество графики",'<select data-k="quality"><option value="low">Низкое (без bloom и теней)</option><option value="med">Среднее</option><option value="high">Высокое</option></select>')}
      ${e("Меньше вспышек",s("reduceFlash"),"приглушает вспышки и глитч-эффекты")}${e("Без тряски камеры",s("reduceShake"))}${e("Повышенный контраст текста",s("contrast"))}
      ${e("Облегчённые ритм-сцены",s("rhythmEasy"),"широкие окна попадания, меньше нот, нельзя проиграть")}${e("Задержка звука, мс",n("rhythmOffset",-200,200,5)+" <span data-off></span>","для ритм-сцен")}
      ${e("",'<button class="btn small" data-a="calib">Калибровка задержки</button>')}
      ${e("Сенсорное управление",s("touch"),"экспериментально: джойстик и кнопки на экране")}${e("Вступление при каждом запуске",s("introAlways"),"иначе, только при первом запуске")}
      <p class="warn">Управление: WASD или стрелки, ходьба, Shift, быстрее, E / Enter / Пробел, действие, 1–3, маски, Q: снять маску, C: фотоаппарат, Tab, блокнот, H: история, Ctrl, пропуск прочитанного, Esc, пауза.</p></div>
      <div class="foot"><button class="btn small" data-x>Готово</button></div>`);r.querySelector("[data-k=quality]").value=t.quality;const a=r.querySelector("[data-off]");a.textContent=t.rhythmOffset+"",r.addEventListener("input",o=>{const c=o.target,h=c.dataset.k;h&&(t[h]=c.type==="checkbox"?c.checked:c.tagName==="SELECT"?c.value:parseFloat(c.value),a.textContent=t.rhythmOffset+"",$c(),this.applySettings(),h==="quality"&&Et.R.setup(),h==="sfx"&&Vt.sfx("click"))}),r.addEventListener("click",async o=>{if(o.target.dataset?.a==="calib"){const{calibrate:c}=await An(async()=>{const{calibrate:l}=await import("./minigames-D6QggvY3.js");return{calibrate:l}},[],import.meta.url),h=await c();h!=null&&(t.rhythmOffset=h,$c(),r.querySelector("[data-k=rhythmOffset]").value=String(h),a.textContent=h+"")}})}async saveLoad(t){const e=this.open(`<h2>${t==="save"?"Сохранить":"Загрузить"} <small>журнал спектакля</small></h2><div class="body"><div data-list>…</div><p class="warn">Сохранения хранятся только в этом браузере (IndexedDB). Очистка данных сайта или режим инкогнито удалят прогресс, для надёжности экспортируйте файл.</p></div><div class="foot"><button class="btn small" data-a="imp">Импорт из файла</button>${Et.running?'<button class="btn small" data-a="exp">Экспорт в файл</button>':""}<button class="btn small" data-x>Закрыть</button></div>`),n=e.querySelector("[data-list]"),s=async()=>{const r=await Promise.all(Xc.map(async a=>({s:a,...await Or(a).catch(o=>(console.warn(o),{state:null,broken:!0}))})));n.innerHTML=r.map(({s:a,state:o,broken:c})=>`<div class="slot"><div><b>${F1[a]}</b>${o?`<small>${ie(o.chapter)} · ${Uv(o.time)} в театре · ${new Date(o.savedAt||0).toLocaleString("ru")}</small>`:`<small>${c?"⚠ данные повреждены или несовместимы":"пусто"}</small>`}</div><div class="acts">${t==="save"&&a!=="auto"&&Et.running?`<button class="btn small" data-s="${a}" data-do="save">Записать</button>`:""}${o?`<button class="btn small" data-s="${a}" data-do="load">Загрузить</button>`:""}${o||c?`<button class="btn small red" data-s="${a}" data-do="del">✕</button>`:""}</div></div>`).join("")};await s(),e.addEventListener("click",async r=>{const a=r.target,o=a.dataset?.s,c=a.dataset?.do,h=a.dataset?.a;if(c==="save"&&o&&(await Et.save(o),await s()),c==="del"&&o&&await this.confirm("Удалить это сохранение?","Удалить")&&(await O1(o),await s()),c==="load"&&o){const l=await Or(o);if(!l.state){this.toast("Сохранение повреждено","⚠");return}if(Et.running&&!await this.confirm("Загрузить сохранение? Текущий несохранённый прогресс будет потерян.","Загрузить"))return;this.closeAll(),Et.stopToMenu(),document.querySelector(".menu-screen")?.remove(),await Et.start(l.state)}if(h==="exp"){const l=new Blob([B1(Et.state)],{type:"application/json"}),f=URL.createObjectURL(l),d=document.createElement("a");d.href=f,d.download="the-other-me-save.json",d.click(),setTimeout(()=>URL.revokeObjectURL(f),2e3)}if(h==="imp"){const l=document.createElement("input");l.type="file",l.accept=".json,application/json",l.onchange=async()=>{const f=l.files?.[0];if(!f)return;const d=z1(await f.text());if(!d){this.toast("Файл не похож на сохранение этой игры","⚠");return}await bl("slot3",d),this.toast("Импортировано в «Слот III»","✎"),await s()},l.click()}})}closeAll(){for(;this.modals.length;){const t=this.modals[this.modals.length-1];t.onCloseCb=null,this.close(t)}Et.paused=!1}notebook(t="quests"){if(!Et.running)return;Vt.sfx("paper");const e=[["quests","Задания"],["items","Инвентарь"],["notes","Заметки"],["mech","Механики"],["photos","Фото"],["map","План театра"],["eggs","Находки"]],n=this.open(`<h2>Журнал режиссёра <small>«не забыть ничего»</small></h2><div class="tabs">${e.map(([o,c])=>`<button class="tab" data-t="${o}">${c}</button>`).join("")}</div><div class="body" data-b></div><div class="foot"><button class="btn small" data-x>Закрыть</button></div>`,{cls:"journal"}),s=n.querySelector("[data-b]"),r=Et.state.f,a=o=>{if(n.querySelectorAll(".tab").forEach(h=>h.classList.toggle("on",h.dataset.t===o)),o==="quests"){const h=Xo(Et);s.innerHTML=`<div class="q-main"><small>Сейчас</small><h3>${ie(h.main||"Смотреть спектакль")}</h3>${h.hint?`<p><i>${ie(h.hint)}</i></p>`:""}</div>${(h.extra||[]).length?`<h4 class="q-h">Можно сделать</h4><ul class="q-list">${h.extra.map(l=>`<li>${ie(l)}</li>`).join("")}</ul>`:""}<h4 class="q-h">Сыграно</h4><ul class="q-list done">${["polina","ruben","matvey","erika","liza","angelina"].filter(l=>r["done_"+l]).map(l=>`<li>${ie(ze[l].name)}: история сыграна</li>`).join("")||"<li><i>пока ничего</i></li>"}</ul>`;return}if(o==="items"){s.innerHTML=Et.state.inv.length?`<div class="inv">${Et.state.inv.map(h=>`<div class="inv-it"><img src="${ah(h)}" alt=""><b>${ie(ks[h]?.name||h)}</b><span>${ie(ks[h]?.desc||"")}</span></div>`).join("")}</div>`:"<p><i>Карманы пусты.</i></p>";return}if(o==="mech"){const h=Object.keys(r.mech||{});s.innerHTML=h.length?h.filter(l=>Fs[l]).map(l=>`<div class="entry noimg"><div><h4>${ie(Fs[l].title)}</h4><p>${ie(Fs[l].text)}</p></div></div>`).join(""):"<p><i>Механики появятся по ходу игры.</i></p>";return}if(o==="eggs"){const h=r.eggs||{},l=Object.entries(zr);s.innerHTML=`<p class="warn">Найдено ${Object.keys(h).length} из ${l.length}. Пасхалки, отсылки и мелкие радости.</p><div class="eggs">${l.map(([f,d])=>`<div class="egg ${h[f]?"on":""}"><b>${h[f]?"★ "+ie(d.title):"☆ ???"}</b><span>${h[f]?ie(d.desc):"Где искать: "+ie(d.hint)}</span></div>`).join("")}</div>`;return}if(o==="map"){s.innerHTML=Iv(Et.state.room,r.visited||{});return}if(o==="photos"){s.innerHTML=Et.state.photos.length?`<div class="photos">${Et.state.photos.map((h,l)=>`<div class="photo" data-ph="${l}" style="--r:${l*37%7-3}deg"><img src="${h.img}" alt=""><span>${ie(h.caption)}</span></div>`).join("")}</div>`:"<p><i>Плёнка пока пуста. Фотоаппарат, клавиша C.</i></p>";return}const c=(h,l)=>{const f=Et.state.notes.map(d=>qo[d]).filter(d=>d&&d.cat===h);return f.length?`<h4 class="q-h">${l}</h4>`+f.map(d=>{const m=d.char?ze[d.char]:null;return`<div class="entry ${m?"":"noimg"}">${m?`<img src="${Su(d.char,d.expr||"neutral")}" alt="">`:""}<div><h4>${ie(d.title)}</h4>${m?.role?`<div class="role">${ie(m.role)}</div>`:""}<p>${d.text}</p></div></div>`}).join(""):""};s.innerHTML=Object.entries(mv).filter(([h])=>h!=="items").map(([h,l])=>c(h,l)).join("")||"<p><i>Здесь пока пусто.</i></p>"};n.addEventListener("click",o=>{const c=o.target.dataset?.t;if(c){Vt.sfx("paper"),a(c);return}const h=o.target.closest("[data-ph]");if(h){const l=Et.state.photos[+h.dataset.ph];l&&this.photoZoom(l.img,l.caption)}}),a(t)}async mainMenu(){this.hudShow(!1),document.querySelector(".menu-screen")?.remove();const t=await Promise.all(Xc.map(l=>Or(l).catch(()=>({state:null,broken:!0}))));let e=null;for(const l of t)l.state&&(!e||(l.state.savedAt||0)>(e.savedAt||0))&&(e=l.state);let n=!1;try{n=localStorage.getItem("tom-intro-seen")==="1"}catch(l){console.warn("[intro] localStorage недоступен",l)}const s=!this.introPlayed&&(!n||Me.introAlways)&&!Et.fast;this.introPlayed=!0;const{DressingRoom:r}=await An(async()=>{const{DressingRoom:l}=await import("./dressing-BfMxi3i2.js");return{DressingRoom:l}},[],import.meta.url);Et.menuScene&&Et.menuScene.dispose();const a=Et.menuScene=new r(Et.R,s),o=de("div","menu-screen m3d"+(s?" intro":" ready"),`<div class="m3d-left"><div class="menu-logo">${Nv}</div><nav class="menu-list"><button class="btn" data-a="cont" ${e?"":"disabled"}>Продолжить</button><button class="btn" data-a="new">Новая игра</button><button class="btn" data-a="load">Загрузить</button><button class="btn" data-a="set">Настройки</button><button class="btn" data-a="cred">Создатели</button><button class="btn" data-a="exit">Выход</button></nav></div><div class="m3d-hint">нажмите или кликните, чтобы повернуть ключ</div><div class="m3d-skip">Esc, пропустить вступление</div>`,Be());a.onState=l=>{if(o.classList.toggle("await",l==="await"),l==="logo"&&o.classList.add("logo-in"),l==="menu"){o.classList.remove("intro"),o.classList.add("ready","logo-in");try{localStorage.setItem("tom-intro-seen","1")}catch(f){console.warn(f)}o.querySelector(e?"[data-a=cont]":"[data-a=new]")?.focus({preventScroll:!0})}},a.build();const c=l=>{if(a.state==="menu"||this.modal)return;Vt.init();const f=l.code==="Escape";a.input(f?"skip":"act"),l.type==="keydown"&&l.preventDefault()};window.addEventListener("keydown",c,!0),o.addEventListener("pointerdown",c);const h=()=>{window.removeEventListener("keydown",c,!0),o.remove()};o.addEventListener("mouseover",l=>{const f=l.target.closest(".btn");f&&!f.disabled&&a.state==="menu"&&Vt.sfx("mechtick")}),o.addEventListener("click",async l=>{Vt.init();const f=l.target.dataset?.a;if(!(!f||a.state!=="menu")){if(Vt.sfx("click"),f==="cont"&&e&&(h(),await Et.start(e)),f==="new"){if(e&&!await this.confirm("Начать новую игру? Автосохранение будет перезаписано, ручные слоты останутся.","Начать"))return;h(),await Et.start(xl())}if(f==="load"&&this.saveLoad("load"),f==="set"&&this.settings(),f==="cred"&&this.credits(!1),f==="exit"){Vt.music(null),Vt.sfx("curtain");const d=de("div","card",'<p class="act">ЗАНАВЕС</p><p>Спасибо, что заглянули в гримёрку.</p><p class="sm">Закройте вкладку, или нажмите, чтобы вернуться.</p>',Be());d.onclick=()=>{d.remove(),Vt.music("musicbox")}}}})}credits(t){if(t){try{localStorage.setItem("tom-done","1")}catch{}Vt.music("fin_bows",{restart:!0})}return new Promise(e=>{const n=(h,l)=>`<h3>${h}</h3>${l.map(f=>`<p>${f}</p>`).join("")}`,s=de("div","credits",`<div class="roll" style="--dur:${t?70:55}s"><div class="cred-logo">${Tu("c")}</div>
        ${n("В РОЛЯХ",["Варя<small>режиссёрка, Молодая Девушка, Королева, и всё это одновременно</small>","Полина · Рубен · Матвей · Эрика · Лиза · Ангелина<small>в ролях самих себя, наконец-то по собственному выбору</small>","Арутеми<small>школьный кот одобряет</small>"])}
        ${n("ТРУППА ТЕАТРА",["Василиса · Дана · Нина · Аня · Оля<small>второй состав, гастроли «Снежной королевы»; рекомендательные письма, их рук дело</small>"])}
        ${n("В ЗРИТЕЛЬНОМ ЗАЛЕ",["Мама Наташа и Саша","Папа Максим и Настя","Вася","Софа · Катя"])}
        ${n("ХУДОЖЕСТВЕННЫЙ РУКОВОДИТЕЛЬ",["Кукольник<small>просил не указывать. Указан.</small>"])}
        ${n("МУЗЫКА, ДЕКОРАЦИИ, СВЕТ",["Вся музыка, спрайты, портреты и текстуры созданы процедурно специально для этой игры","Three.js · TypeScript · Vite"])}
        ${n("ШРИФТЫ ЛОГОТИПА",["Aurelia Diamond · Cintarini · Highcrest · Lombardina Initial One<small>лицензии «для личного некоммерческого использования»; игра, подарок, не продукт</small>","Lora · Playfair Display · Marck Script · Pixelify Sans<small>SIL Open Font License</small>"])}
        ${n("ОСОБАЯ БЛАГОДАРНОСТЬ",["Третьему ряду.<small>Вас видно. Правда.</small>"])}
        <h3>С ДНЁМ РОЖДЕНИЯ, ВАРЯ</h3><p style="margin-top:3rem;opacity:.6">нажмите, чтобы закрыть</p></div>`,Be()),r=()=>{a(),s.remove(),e()},a=Ji(h=>{(h==="act"||h==="pause")&&r()}),o=performance.now();s.onclick=()=>{performance.now()-o>600&&r()};const c=s.querySelector(".roll");c.addEventListener("animationend",h=>{h.target===c&&r()}),Et.fast&&r()})}buildTouch(){this.touchEl=de("div","touch hidden",'<div class="stick"><i></i></div><div class="tbtns"><button class="tbtn" data-a="mask0">◐</button><button class="tbtn big" data-a="act">E</button></div>',Be());const t=this.touchEl.querySelector(".stick"),e=t.querySelector("i");let n=null;const s=a=>{const o=t.getBoundingClientRect();let c=(a.clientX-o.left-o.width/2)/(o.width/2),h=(a.clientY-o.top-o.height/2)/(o.height/2);const l=Math.hypot(c,h);l>1&&(c/=l,h/=l),Qn.x=c,Qn.y=h,e.style.transform=`translate(${c*2.2}rem, ${h*2.2}rem)`};t.addEventListener("pointerdown",a=>{n=a.pointerId,t.setPointerCapture(n),s(a)}),t.addEventListener("pointermove",a=>{a.pointerId===n&&s(a)});const r=a=>{a.pointerId===n&&(n=null,Qn.x=Qn.y=0,e.style.transform="")};t.addEventListener("pointerup",r),t.addEventListener("pointercancel",r),this.touchEl.querySelector(".tbtns").addEventListener("pointerdown",a=>{const o=a.target.dataset?.a;o&&(a.preventDefault(),o==="mask0"?Et.state.f.masks&&this.maskRow.classList.toggle("open"):pi(o))})}}const Bt=new kv,Fv={hub:()=>An(()=>import("./hub-C_Sruc8O.js"),__vite__mapDeps([0,1,2]),import.meta.url),pol:()=>An(()=>import("./polina-DnzAJdNT.js"),__vite__mapDeps([3,1,4,2]),import.meta.url),rub:()=>An(()=>import("./ruben-B7KPomr6.js"),__vite__mapDeps([5,1,4,2]),import.meta.url),mat:()=>An(()=>import("./matvey-CYt-8dz5.js"),__vite__mapDeps([6,1,4]),import.meta.url),eri:()=>An(()=>import("./erika-C5lhlCPG.js"),__vite__mapDeps([7,1,4]),import.meta.url),liz:()=>An(()=>import("./lisa-BepiX9db.js"),__vite__mapDeps([8,1,4,2]),import.meta.url),ang:()=>An(()=>import("./angelina-DR3yJqZO.js"),__vite__mapDeps([9,1,2,4]),import.meta.url),fin:()=>An(()=>import("./finale-Cfd3eHSZ.js"),__vite__mapDeps([10,2,4,1,0]),import.meta.url)},ji={},Ov={comedy:{sat:1.35,tint:[1.08,1.02,.86],vig:.2,bright:1.08},tragedy:{sat:.35,tint:[.82,.9,1.12],vig:.6,bright:.9,contrast:1.1},drama:{sat:.9,tint:[1.1,.9,.92],vig:.55,bright:1}},uh={comedy:"Комедия",tragedy:"Трагедия",drama:"Драма"};class Bv{constructor(){this.state=xl(),this.room=null,this.lock=0,this.paused=!1,this.running=!1,this.t=0,this.cam={x:0,z:0,dist:24,focus:null,shake:0,roll:0,pitch:.56,yOff:1.2},this.near=null,this.trail=[],this.followers=[],this.stepT=0,this.busy=!1,this.inPhoto=!1,this.fast=!1,this.playerSpeed=5.6,this.override=null,this.debug=!1,this.gradeBase={},this.audio=Vt,this.ui=Bt,this.menuScene=null,this.questT=0,this.waits=[],this.runDepth=0,this.fxTex={},this.maskMesh=null,this.maskTexs={},this.fadeCacheRoom=null,this.fadeCache=[],this.fpsT=0,this.fpsN=0,this.fpsLow=0,this.fadeT=0,this.faded=new Map,this.ray=new M1}boot(t){this.R=new G1(t),this.debug=new URLSearchParams(location.search).has("debug");let e=performance.now();const n=s=>{const r=Math.min(.05,(s-e)/1e3);e=s;try{this.frame(r)}catch(a){console.error("[game] ошибка кадра",a)}requestAnimationFrame(n)};requestAnimationFrame(n),Ji(s=>this.onAction(s)),document.addEventListener("visibilitychange",()=>{document.hidden&&this.running&&!this.paused&&!Bt.modal&&Bt.pause()}),window.addEventListener("beforeunload",s=>{this.running&&this.lock>0&&!this.debug&&(s.preventDefault(),s.returnValue="")})}get f(){return this.state.f}flag(t){return this.state.f[t]}set(t,e=!0){typeof t=="string"?this.state.f[t]=e:Object.assign(this.state.f,t)}has(t){return this.state.inv.includes(t)}give(t,e=!1){this.has(t)||(this.state.inv.push(t),ks[t]||console.warn("[game] нет описания предмета",t),t==="camera"&&this.mech("camera"),e?Bt.toast("В инвентаре: "+(ks[t]?.name||t),"✦"):(this.sfx("pickup"),Bt.showItem(t)),Bt.hud())}mech(t){var n;const e=(n=this.state.f).mech||(n.mech={});e[t]||!Fs[t]||(e[t]=1,this.fast||Bt.toast(`Механика: ${Fs[t].title}. Подробнее в журнале (Tab)`,"❖"))}egg(t){var n;const e=(n=this.state.f).eggs||(n.eggs={});e[t]||!zr[t]||(e[t]=1,this.sfx("note"),Bt.toast(`Находка: ${zr[t].title} (${Object.keys(e).length}/${Object.keys(zr).length})`,"★"))}take(t){const e=this.state.inv.indexOf(t);e>=0&&this.state.inv.splice(e,1)}note(t){if(!this.state.notes.includes(t)){if(!qo[t]){console.warn("[game] нет записи блокнота",t);return}this.state.notes.push(t),this.sfx("pencil"),Bt.toast("Блокнот: "+qo[t].title,"✎")}}done(t){return!!this.state.f["done_"+t]}doneCount(){return["polina","ruben","matvey","erika","liza","angelina"].filter(t=>this.done(t)).length}sfx(t,e){Vt.sfx(t,e)}toast(t,e){Bt.toast(t,e)}wait(t){return this.fast?Promise.resolve():new Promise(e=>this.waits.push({t,res:e}))}async start(t){this.menuScene&&(this.menuScene.dispose(),this.menuScene=null),this.state=t,this.running=!0,this.lock=0,this.paused=!1,Bt.hudShow(!0),setTimeout(()=>{this.mech("move"),this.mech("act"),this.mech("journal")},4e3),await this.goto(t.room,t.spot,{fade:"fade",load:!0})}stopToMenu(){this.running=!1,this.clearRoom(),Vt.music(null),Vt.ambience(null),Bt.hudShow(!1)}async save(t="auto"){if(!this.running)return;const e=this.state;this.player&&(e.px=this.player.x,e.pz=this.player.z);try{await bl(t,e),Bt.saved(t)}catch(n){console.error("[save] не удалось сохранить",n),Bt.toast("Не удалось сохранить игру: хранилище браузера недоступно","⚠")}}clearRoom(){this.faded.clear();for(const t of this.waits)t.res();this.waits=[],this.room&&(this.R.scene.remove(this.room.group),this.room.dispose(),this.room=null),this.followers=[],this.trail=[],this.near=null,this.override=null,Bt.prompt(null)}async loadRoom(t){if(ji[t])return ji[t];const e=t.split("_")[0],n=Fv[e];if(!n)throw new Error("Неизвестная локация: "+t);Bt.loading(!0);try{const s=await n();Object.assign(ji,s.rooms)}finally{Bt.loading(!1)}if(!ji[t])throw new Error("Глава не содержит локацию: "+t);return ji[t]}async goto(t,e="start",n={}){var o;this.lock++;const s=this.room?this.room.id:n.load?"load":"",r=this.fast?"none":n.fade||"fade";try{r!=="none"&&await Bt.transition(r,"out");let c;try{c=await this.loadRoom(t)}catch(g){throw r!=="none"&&await Bt.transition(r,"in"),g}this.clearRoom(),this.cam.focus=null,this.cam.roll=0,this.cam.pitch=.56,this.cam.yOff=1.2;const h=this.room=new _u(t,c),l=new xu(h,this);this.player=new Sl(this.state.f.playerChar||"varya","player"),c.build(l,this),h.actors.push(this.player),h.group.add(this.player.group);const f=new Is(16773340,2.2,4.5,1.5);f.position.set(.6,2.4,1.6),this.player.group.add(f);const d=h.spawns[e]||h.spawns.start||{x:0,z:0,dir:"f"};!h.spawns[e]&&e!=="start"&&console.warn(`[game] в ${t} нет точки появления ${e}`),n.load&&this.state.room===t&&this.state.px!=null&&!this.hits(this.state.px,this.state.pz)?this.player.place(this.state.px,this.state.pz,"f"):this.player.place(d.x,d.z,d.dir);{const g=this.freeSpot(this.player.x,this.player.z);(g.x!==this.player.x||g.z!==this.player.z)&&(this.debug&&console.warn(`[room] ${t}: точка «${e}» занята, героиня сдвинута`),this.player.place(g.x,g.z))}for(const g of this.followers){const v=this.freeSpot(this.player.x+.8,this.player.z+.3);g.place(v.x,v.z)}h.guards.length&&this.mech("stealth"),h.lasers.length&&this.mech("lasers"),this.R.scene.add(h.group),this.R.scene.background=new Ft(h.group.userData.bg??328710),this.R.scene.fog=h.group.userData.fog||null,this.gradeBase=c.grade||{},this.applyMask(!0),this.applyGrade(!0),document.body.classList.toggle("noir-mode",(c.grade?.sat??1)<.15),this.cam.dist=c.camDist||24,this.camSnap(),c.music!==void 0&&Vt.music(c.music),Vt.ambience(c.amb??null),this.state.room=t,this.state.spot=e,((o=this.state.f).visited||(o.visited={}))[t]=1,c.chapter&&(this.state.chapter=c.chapter),Bt.hud(),!n.load&&!this.fast&&await this.save("auto");const m=c.card?.(this);m&&await Bt.card(m),r!=="none"&&await Bt.transition(r,"in"),!n.silent&&s!==t&&Bt.place(c.name)}finally{this.lock--}const a=this.room.def;a.enter&&await this.cut(()=>a.enter(this,s))}async rebuild(){const t=this.player,e=t.x,n=t.z,s=t.dir;await this.goto(this.room.id,this.state.spot,{fade:"none",silent:!0}),this.player.place(e,n,s),this.camSnap()}async cut(t){this.lock++,Bt.prompt(null);try{return await t()}finally{this.lock--}}async say(t,e,n="neutral",s){const r=t==="~",a=t==="*",o=this.player?.charId||"varya";let c=r?o:t;if(r&&(e=e.replace(/^\[[^\]]+\]\s*/,"")),!r&&!a&&this.room){const m=this.room.actors.find(g=>g.id===t&&!g.hidden)||(this.player?.id===t?this.player:null);m&&m.charId&&m.charId!==t&&ze[m.charId]&&(c=m.charId)}const h=ze[c],l=ze[c.split("_")[0]]||h;!a&&!h&&console.warn("[dialogue] неизвестный говорящий",t);const f=t+":"+e,d=!!this.state.seen[fh(f)];await Bt.say({name:a?"":s||(r?(l||h)?.name:ze[t]?.name||h?.name)||t,color:h?.color||"#e8d8a8",portrait:a||!h?"":Su(c,n,!!this.room?.id.startsWith("mat_")),text:e,italic:r||a,pitch:h?.pitch||300,seen:d}),this.state.seen[fh(f)]=1}async line(t){const e=/^([\w*~]+)(?:=([^/:]+))?(?:\/(\w+))?:\s([\s\S]*)$/.exec(t);if(!e){console.warn("[dialogue] не разобрана реплика:",t);return}await this.say(e[1],e[4],e[3]||"neutral",e[2])}async choice(t){return Bt.choice(t.map(e=>typeof e=="string"?{text:e}:e))}async run(t){this.lock++,this.runDepth++,Vt.duck(!0);try{for(const e of t)if(typeof e=="string")await this.line(e);else if(typeof e=="function"){const n=await e(this);Array.isArray(n)&&await this.run(n)}else if(e.c){const n=e.c.filter(a=>{const o=a[2]||{};return!(o.if&&!o.if(this.state.f,this)||o.mask&&this.state.mask!==o.mask)}),s=await this.choice(n.map(a=>({text:a[0],mask:!!(a[2]&&a[2].mask)}))),r=n[s];r[2]&&r[2].set&&this.set(r[2].set),await this.run(r[1]||[])}else if(e.if)await this.run(e.if(this.state.f,this)?e.t||[]:e.e||[]);else{if(e.set&&this.set(e.set),e.note&&this.note(e.note),e.give&&this.give(e.give),e.sfx&&this.sfx(e.sfx),e.music!==void 0&&Vt.music(e.music),e.wait&&await this.wait(e.wait),e.pose){const n=this.actor(e.pose[0]);n&&(n.pose=e.pose[1])}e.shake&&this.shake(e.shake),e.flash&&this.flash(),e.fx&&this.fx(e.fx[0],e.fx[1]),e.eyes&&this.eyes(e.eyes)}}finally{this.lock--,this.runDepth--,this.runDepth===0&&(Vt.duck(!1),Bt.sayHide())}}actor(t){return t==="player"?this.player:this.room?.actor(t)}setMask(t){!this.state.f.masks||this.room?.def.noMasks||(this.mech("masks"),this.state.mask===t&&(t=null),this.state.mask=t,this.sfx("mask"),this.applyMask(),this.applyGrade(),Bt.hud(),Vt.muffle(t==="tragedy"?900:t==="drama"?2600:2e4))}applyMask(t=!1){const e=this.room;if(!e)return;const n=e.def.noMasks?null:this.state.mask;e.def.noMasks&&Vt.muffle(2e4);for(const s of e.masked){const r=s.mask==="none"?!n:s.mask===n;s.obj.visible=r,s.box&&(s.box.on=r)}for(const s of e.inters)s.mask&&(s.enabled=s.mask==="none"?!n:s.mask===n,s.marker&&(s.marker.visible=s.enabled))}applyGrade(t=!1){const e=this.room?.def.noMasks?null:this.state.mask,n={...this.gradeBase,...e?Vv(this.gradeBase,(this.room?.def).maskGrade?.[e]||Ov[e]):{}};this.R.setGrade(n,t)}grade(t,e=!1){this.gradeBase={...this.gradeBase,...t},this.applyGrade(e)}camBounds(){const t=this.room.def,e=t.camDist||24,n=Math.tan(this.R.cam.fov*Math.PI/180/2)*e*this.R.cam.aspect*.9,s=Math.max(0,t.w/2-Math.min(n-2,Math.max(9,n*.5))),r=Math.min(0,-t.d/2+4.5),a=t.camZMax??Math.max(r,t.d/2-7);return{mx:s,z0:r,z1:a}}fxT(t){if(!this.fxTex[t]){const e=new p1().load("fx/"+t+".png");e.colorSpace=hn,this.fxTex[t]=e}return this.fxTex[t]}who(t){return t==="player"?this.player:this.actor(t)}fx(t,e){const n=this.who(t);if(!n||!this.room||this.fast)return;const s=(ze[n.charId]?.h||32)/Sn,r=this.fxT("m_"+e),o=e==="tears"||e==="haha"||e==="burst"?1.5:.8,c=new lt(new be(o,o),new Re({map:r,transparent:!0,depthWrite:!1,depthTest:!1}));c.renderOrder=20;const h=e==="tears"?[0,s-.7]:e==="blush"?[.25,s-.55]:e==="sweat"?[.45,s-.1]:e==="haha"?[.9,s+.2]:[.55,s+.25];c.position.set(h[0],h[1],.2),n.group.add(c),this.sfx(e==="anger"||e==="anger2"?"hit":"note");let l=0;const f=d=>{l+=d;const m=Math.min(1,l/.18);if(c.scale.setScalar(m<1?m*1.25:1+Math.sin(l*9)*.04),c.material.opacity=l>1.6?Math.max(0,1-(l-1.6)/.4):1,l>2){n.group.remove(c);const g=this.room.updaters.indexOf(f);g>=0&&this.room.updaters.splice(g,1)}};this.room.updaters.push(f)}eyes(t,e=3){const n=this.who(t);if(!n||!this.room||this.fast)return;const s=(ze[n.charId]?.h||32)/Sn,r=new lt(new be(.78,.34),new Re({map:this.fxT("healing_eyes"),transparent:!0,depthWrite:!1}));r.renderOrder=19,r.position.set(0,s-.4,.08),n.group.add(r),this.sfx("note");let a=0;const o=c=>{if(a+=c,r.scale.y=1+Math.sin(a*6)*.06,r.visible=n.dir!=="b",a>e){n.group.remove(r);const h=this.room.updaters.indexOf(o);h>=0&&this.room.updaters.splice(h,1)}};this.room.updaters.push(o)}faceMask(){const t=this.player;if(!t)return;const e=this.room?.def.noMasks?null:this.state.mask;if(!this.maskMesh||this.maskMesh.parent!==t.group){const r=new lt(new be(.62,.62),new Re({transparent:!0,alphaTest:.3,side:Ie}));t.group.add(r),this.maskMesh=r}const n=this.maskMesh;if(n.visible=!!e&&!t.hidden&&t.dir!=="b",!e)return;this.maskTexs[e]||(this.maskTexs[e]=Je(12,12,r=>{const a=e==="comedy"?"#f2c230":e==="tragedy"?"#b8ccf0":"#f4f0e8";r.fillStyle=a,r.fillRect(2,1,8,10),r.fillRect(1,2,10,7),r.fillRect(3,11,6,1),e==="drama"&&(r.fillStyle="#c41e3a",r.fillRect(6,1,4,10),r.fillRect(6,2,5,7),r.fillRect(6,11,3,1)),r.fillStyle="#1a1014",e==="comedy"?(r.fillRect(3,4,2,1),r.fillRect(7,4,2,1),r.fillRect(3,7,6,1),r.fillRect(2,6,1,1),r.fillRect(9,6,1,1)):e==="tragedy"?(r.fillRect(3,4,2,2),r.fillRect(7,4,2,2),r.fillRect(3,8,6,1),r.fillRect(2,9,1,1),r.fillRect(9,9,1,1),r.fillStyle="#4a6ad0",r.fillRect(4,6,1,2)):(r.fillRect(3,4,2,2),r.fillRect(7,4,2,2),r.fillRect(4,8,4,1)),r.fillStyle="rgba(255,255,255,.5)",r.fillRect(2,2,2,1)},"facemask"+e)),n.material.map=this.maskTexs[e],n.material.needsUpdate=!0;const s=(ze[t.charId]?.h||31)/Sn;n.position.set(t.dir==="l"?-.08:t.dir==="r"?.08:0,s-.42,.06),n.scale.x=t.dir==="l"?-.85:t.dir==="r"?.85:1}fadeBlockers(t){const e=this.room;if(!e)return;const n=this.R.cam,s=this.player;if(this.fadeT-=t,this.fadeT<=0){this.fadeT=.12;const r=new Set,a=new Set(e.occluders.map(h=>h.mesh));for(const h of e.actors)a.add(h.group);a.add(s.group);const o=h=>{if(!h.isMesh||h.isInstancedMesh&&!1)return!1;let l=h;for(;l;){if(a.has(l))return!1;l=l.parent}const f=h.material;if(!f||Array.isArray(f)||f.isShaderMaterial||f.blending===Si)return!1;const d=h.geometry;d.boundingBox||d.computeBoundingBox();const m=d.boundingBox,g=(m.max.y-m.min.y)*h.scale.y,v=h.getWorldPosition(new P).y;return!(g<.5&&v<.6)};this.ray.camera=n;const c=n.position.clone();for(const h of[.5,1.3,2.1]){const f=new P(s.x,h,s.z).clone().sub(c),d=f.length();this.ray.set(c,f.normalize()),this.ray.far=d-.6;for(const m of this.ray.intersectObjects(e.group.children,!0))o(m.object)&&r.add(m.object)}this.fadeCacheRoom!==e&&(this.fadeCacheRoom=e,this.fadeCache=[],e.group.updateMatrixWorld(),e.group.traverse(h=>{if(h.isMesh&&o(h)){const l=new P;h.getWorldPosition(l),this.fadeCache.push({m:h,p:l,bb:new ii().setFromObject(h)})}}));for(const h of this.fadeCache){if(!h.m.visible)continue;if(h.p.distanceToSquared(c)<56.25){r.add(h.m);continue}const l=h.bb;l.min.y>3.8&&l.max.z>s.z+.5&&l.max.z-l.min.z<12&&Math.max(l.min.x-s.x,s.x-l.max.x,0)<7&&r.add(h.m)}for(const h of r){let l=this.faded.get(h);if(!l){const f=h.material,d=f.clone();d.transparent=!0,l={orig:f,clone:d,a:1,tgt:.1},h.material=d,this.faded.set(h,l)}l.tgt=.1}for(const[h,l]of this.faded)r.has(h)||(l.tgt=1)}for(const[r,a]of this.faded)a.a+=(a.tgt-a.a)*Math.min(1,t*8),a.clone.opacity=a.a*(a.orig.opacity??1),a.clone.depthWrite=a.a>.9,a.tgt===1&&a.a>.98&&(r.material=a.orig,a.clone.dispose(),this.faded.delete(r))}camSnap(){const t=this.player,e=this.camBounds();this.cam.x=Cs(t.x,-e.mx,e.mx),this.cam.z=Cs(t.z,e.z0,e.z1)}focus(t,e,n=18){this.cam.focus={x:t,z:e,dist:n}}unfocus(){this.cam.focus=null}shake(t=.4){Me.reduceShake||(this.cam.shake=Math.max(this.cam.shake,t))}flash(t=.9){this.R.flash=t}async photoMode(){if(!this.has("camera")||this.inPhoto||this.room?.def.noCamera)return;this.inPhoto=!0,this.lock++;const t=this.player,e=zv(t.dir);this.focus(t.x+e.x*3,t.z+e.z*3,15),Bt.viewfinder(!0);try{if(await this.key(["act","camera","pause"])==="act"){const s=this.room,r=s.def.noMasks?null:this.state.mask,a=s.photos.filter(h=>{if(h.cond&&!h.cond())return!1;if(h.any)return!0;if(h.mask&&(h.mask==="none"?r:h.mask!==r))return!1;const l=h.x-t.x,f=h.z-t.z,d=Math.hypot(l,f);return d<1.8?!0:d<8&&(l*e.x+f*e.z)/d>.6});Bt.viewfinder(!1);const o=this.R.snapshot();this.sfx("shutter"),this.flash(.8);const c=a.length?a.map(h=>h.name).join(", "):s.def.name;for(this.state.photos.push({id:"p"+Date.now().toString(36),img:o,caption:c,subjects:a.map(h=>h.id),room:s.id});this.state.photos.length>36;){const h=this.state.photos.findIndex(l=>!l.subjects.length);this.state.photos.splice(h>=0?h:0,1)}Bt.showPhoto(o,c),this.unfocus(),s.def.photo&&await s.def.photo(this,a.map(h=>h.id))}}finally{Bt.viewfinder(!1),this.unfocus(),this.lock--,this.inPhoto=!1}}photographed(t){return this.state.photos.some(e=>e.subjects.includes(t))}key(t){return new Promise(e=>{const n=Ji(s=>{t.includes(s)&&(n(),setTimeout(()=>e(s),0))})})}follow(t){this.followers.push(t)}unfollow(t){t&&(this.followers=this.followers.filter(e=>e!==t),t.moving=!1)}setPlayerChar(t){this.state.f.playerChar=t,this.player.setChar(t)}onAction(t){var e;if(!(!this.running||Bt.modal||this.paused)){if(t==="pause"&&!this.inPhoto){Bt.pause();return}if(t==="history"){Bt.history();return}if(!(this.lock>0))if(t==="act"&&this.near){const n=this.near;this.sfx("click"),((e=this.state.f).used||(e.used={}))[this.room.id+":"+n.id]=1,this.cut(()=>n.fn(this)).catch(s=>console.error("[game] ошибка взаимодействия",n.id,s))}else t==="mask1"?this.setMask("comedy"):t==="mask2"?this.setMask("tragedy"):t==="mask3"?this.setMask("drama"):t==="mask0"?this.state.mask&&this.setMask(this.state.mask):t==="help"?Bt.modal||this.cut(()=>Bt.help()):t==="camera"?this.photoMode():t==="notebook"?Bt.notebook():t==="inventory"?Bt.notebook("items"):this.room?.def.onKey&&this.room.def.onKey(this,t)}}freeSpot(t,e){if(!this.hits(t,e))return{x:t,z:e};for(let n=.25;n<8;n+=.25)for(let s=0;s<16;s++){const r=t+Math.cos(s/16*Math.PI*2)*n,a=e+Math.sin(s/16*Math.PI*2)*n;if(!this.hits(r,a))return{x:r,z:a}}return{x:t,z:e}}reachCheck(){const t=this.room,e=this.player,n=.25,s=t.def.w,r=t.def.d,a=Math.ceil(s/n),o=Math.ceil(r/n),c=new Uint8Array(a*o),h=(v,u)=>Math.floor((u+r/2)/n)*a+Math.floor((v+s/2)/n),l=[[e.x,e.z]],f=[];for(this.hits(e.x,e.z)&&f.push("героиня внутри коллизии");l.length;){const[v,u]=l.pop(),p=h(v,u);if(!(p<0||p>=c.length||c[p])){c[p]=1;for(const[_,y]of[[n,0],[-n,0],[0,n],[0,-n]]){const b=v+_,I=u+y;this.hits(b,I)||l.push([b,I])}}}const d=(v,u,p)=>{for(let _=u-p;_<=u+p;_+=n)for(let y=v-p;y<=v+p;y+=n){if(Math.hypot(y-v,_-u)>p-.2)continue;const b=h(y,_);if(b>=0&&b<c.length&&c[b])return!0}return!1};for(const v of t.inters)!v.mask&&!(v.cond&&!v.cond())&&!d(v.x,v.z,v.r)&&f.push("недостижимо: "+v.id+" ("+v.label+")");for(const[v,u]of Object.entries(t.spawns))this.hits(u.x,u.z)&&f.push("точка появления в коллизии: "+v);const m=s/2,g=r/2;for(const v of t.props)if((v.x<-m-.2||v.x>m+.2||v.z<-g-.2||v.z>g+.6)&&f.push(`предмет за пределами комнаты: ${v.kind} (${v.x.toFixed(1)}, ${v.z.toFixed(1)})`),v.y>-.5&&v.y<.3&&!v.box&&!t.props.some(u=>u.box&&Math.abs(u.x-v.x)<.05&&Math.abs(u.z-v.z)<.05)){for(const u of t.boxes)if(u.on&&u.x1-u.x0>.5&&u.z1-u.z0>.5&&v.x>u.x0+.15&&v.x<u.x1-.15&&v.z>u.z0+.15&&v.z<u.z1-.15){f.push(`предмет внутри мебели/стены: ${v.kind} (${v.x.toFixed(1)}, ${v.z.toFixed(1)})`);break}}for(const v of t.inters)for(const u of t.actors)u.id!=="player"&&!u.hidden&&v.id!==u.id&&Math.hypot(u.x-v.x,u.z-v.z)<.5&&!(v.label||"").includes(u.def?.name||"@@")&&f.push(`персонаж стоит на точке взаимодействия: ${u.id} на ${v.id}`);return f}hits(t,e,n=.38){const s=this.room,r=s.def.w/2-n,a=s.def.d/2-n;if(t<-r||t>r||e<-a||e>a)return!0;for(const o of s.boxes)if(o.on&&t>o.x0-n&&t<o.x1+n&&e>o.z0-n&&e<o.z1+n)return!0;return!1}los(t,e,n,s){for(let r=1;r<8;r++){const a=t+(n-t)*r/8,o=e+(s-e)*r/8;for(const c of this.room.boxes)if(c.on&&c.x1-c.x0>.9&&a>c.x0&&a<c.x1&&o>c.z0&&o<c.z1)return!1}return!0}frame(t){const e=this.room;if(!e||!this.running){this.menuScene&&!this.running&&(this.menuScene.update(t),this.R.render(t)),Ya();return}if(this.paused){this.R.render(0),Ya();return}this.t+=t,this.state.time+=t;const n=this.player;if(this.waits.length){for(const p of this.waits)p.t-=t;const u=this.waits.filter(p=>p.t<=0);this.waits=this.waits.filter(p=>p.t>0);for(const p of u)p.res()}if(this.lock===0&&(this.runDepth!==0&&(this.runDepth=0),Bt.dialogOpen&&Bt.sayHide()),this.override)this.override(t);else if(this.lock===0&&!Bt.modal){if(!n.hidden&&this.hits(n.x,n.z)){const _=this.freeSpot(n.x,n.z);n.x=_.x,n.z=_.z}const u=fv(),p=Math.hypot(u.x,u.y)>.15;if(p){const _=this.playerSpeed*(Qi("run")?1.35:1)*t,y=n.x+u.x*_,b=n.z+u.y*_;this.hits(y,n.z)||(n.x=y),this.hits(n.x,b)||(n.z=b),n.dir=Math.abs(u.x)>Math.abs(u.y)?u.x>0?"r":"l":u.y>0?"f":"b",this.stepT-=t,this.stepT<=0&&(this.stepT=.3,this.sfx("step",{mat:e.def.step||"wood"}));const I=this.trail[this.trail.length-1];(!I||Math.hypot(I.x-n.x,I.z-n.z)>.35)&&(this.trail.push({x:n.x,z:n.z}),this.trail.length>40&&this.trail.shift())}n.moving=p;for(const _ of e.triggers){const y=n.x>_.x0&&n.x<_.x1&&n.z>_.z0&&n.z<_.z1;if(y&&!_.inside&&!(_.once&&_.done)){_.done=!0,_.inside=!0,this.cut(()=>_.fn(this)).catch(b=>console.error("[game] ошибка триггера",b));break}_.inside=y}}else n.target||(n.moving=!1);this.followers.forEach((u,p)=>{const _=this.trail[this.trail.length-1-(p+1)*3];if(_&&Math.hypot(_.x-u.x,_.z-u.z)>.25&&Math.hypot(n.x-u.x,n.z-u.z)>1.3){const y=_.x-u.x,b=_.z-u.z,I=Math.hypot(y,b),A=Math.min(I,this.playerSpeed*1.05*t);u.x+=y/I*A,u.z+=b/I*A,u.face(_.x,_.z),u.moving=!0}else u.target||(u.moving=!1)});for(const u of e.actors)u.update(t);if(this.lock===0){for(const u of e.guards){if(!u.active){u.cone.visible=!1;continue}u.cone.visible=!0;const p=u.actor;if(u.off>0&&(u.off-=t,u.cone.visible=Math.floor(u.off*8)%2===0),u.wait>0)u.wait-=t;else if(!p.target&&u.path.length>1){u.i=(u.i+1)%u.path.length;const[_,y]=u.path[u.i];u.ang=Math.atan2(y-p.z,_-p.x),p.walkTo(_,y,u.speed).then(()=>{u.wait=u.pause})}if(u.cone.position.set(p.x,.05,p.z),u.cone.rotation.y=-u.ang,u.off<=0&&!n.hidden&&!n.stealth){const _=n.x-p.x,y=n.z-p.z,b=Math.hypot(_,y);let I=Math.atan2(y,_)-u.ang;for(;I>Math.PI;)I-=Math.PI*2;for(;I<-Math.PI;)I+=Math.PI*2;if(b<u.range&&Math.abs(I)<u.half&&this.los(p.x,p.z,n.x,n.z)){this.cut(()=>u.onCatch(this)).catch(A=>console.error(A));break}}}for(const u of e.lasers)if(u.on=u.active&&(this.t+u.phase)%u.period<u.duty*u.period,u.mesh.visible=u.on,u.on&&!n.hidden&&!n.stealth){const p=u.x1-u.x0,_=u.z1-u.z0,y=p*p+_*_;let b=((n.x-u.x0)*p+(n.z-u.z0)*_)/y;if(b=Cs(b,0,1),Math.hypot(n.x-u.x0-p*b,n.z-u.z0-_*b)<.4){this.cut(()=>u.onHit(this)).catch(I=>console.error(I));break}}}else for(const u of e.actors)!u.target&&u!==n&&!this.followers.includes(u)&&(u.moving=!1);for(const u of e.flick)u.l.intensity=u.base*(1+(Math.sin(this.t*13+u.base)*.5+Math.sin(this.t*31)*.5)*u.s);for(const u of e.occluders){const p=n.z<u.z-.2&&n.z>u.z-(u.depth||12)&&n.x>u.x0-.8&&n.x<u.x1+.8,_=u;_.by==null&&(_.by=u.mesh.position.y,_.k=1);const y=p?.14:1;_.k+=(y-_.k)*Math.min(1,t*7),u.mesh.scale.y=_.k,u.mesh.position.y=_.by*_.k;const b=u.mesh.material;b.opacity=1,b.depthWrite=!0}{const u=e;if(u.cutFollow){const p=e.occluders.some(_=>_.k!=null&&_.k<.6);for(const _ of u.cutFollow)_.visible=!p}}for(const u of e.updaters)u(t,this.t);e.def.update&&e.def.update(this,t,this.t),this.questT-=t,this.questT<0&&(this.questT=.5,Bt.quest());let s=null,r=1e9;if(this.lock===0&&!Bt.modal)for(const u of e.inters){if(!u.enabled||u.cond&&!u.cond()){u.marker&&(u.marker.visible=!1);continue}const p=Math.hypot(u.x-n.x,u.z-n.z);u.marker&&(u.marker.visible=p<5,u.marker.position.y=u.y+.5+Math.sin(this.t*3+u.x)*.08,u.marker.rotation.y=this.t*2),p<u.r&&p<r&&(r=p,s=u)}this.near=s;const a=this.cam,o=a.focus,c=this.camBounds(),h=o?o.x:Cs(n.x,-c.mx,c.mx),l=o?o.z:Cs(n.z,c.z0,c.z1),f=o?o.dist:e.def.camDist||24,d=Math.min(1,t*3.5);a.x+=(h-a.x)*d,a.z+=(l-a.z)*d,a.dist+=(f-a.dist)*d,a.shake=Math.max(0,a.shake-t*1.2);const m=(Math.random()-.5)*a.shake,g=(Math.random()-.5)*a.shake,v=this.R.cam.aspect<1?1.25:1;if(this.R.cam.position.set(a.x+m,a.yOff+Math.sin(a.pitch)*a.dist*v+g,a.z+Math.cos(a.pitch)*a.dist*v),this.R.cam.up.set(Math.sin(a.roll),Math.cos(a.roll),0),this.R.cam.lookAt(a.x+m,a.yOff,a.z),this.faceMask(),this.R.tilt){const p=(new P(n.x,1.2,n.z).project(this.R.cam).y+1)/2,_=this.R.tilt.uniforms;_.uFocus.value+=(Math.max(.15,Math.min(.85,p))-_.uFocus.value)*Math.min(1,t*6),_.uAmt.value=this.room?.def.noTilt?0:this.cam.focus?1.25:1}if(this.fadeBlockers(t),this.fpsT+=t,this.fpsN++,this.fpsT>4){const u=this.fpsN/this.fpsT;this.fpsT=0,this.fpsN=0,u<24&&!this.fast&&document.visibilityState==="visible"?++this.fpsLow>=2&&Me.quality!=="low"&&(Me.quality=Me.quality==="high"?"med":"low",this.fpsLow=0,this.R.setup(),Bt.toast("Графика упрощена для плавности","⚙")):this.fpsLow=0}if(this.R.render(t),Bt.letterbox(!!this.cam.focus&&this.lock>0),s){const u=new P(s.x,s.y+.9,s.z).project(this.R.cam);Bt.prompt(s.label,(u.x+1)/2,(1-u.y)/2)}else Bt.prompt(null);Ya()}}function Cs(i,t,e){return Math.max(t,Math.min(e,i))}function zv(i){return i==="l"?{x:-1,z:0}:i==="r"?{x:1,z:0}:i==="b"?{x:0,z:-1}:{x:0,z:1}}function fh(i){let t=5381;for(let e=0;e<i.length;e++)t=(t<<5)+t+i.charCodeAt(e)|0;return(t>>>0).toString(36)}function Vv(i,t){const e=i.tint||[1,1,1],n=t.tint||[1,1,1];return{sat:(i.sat??1)*(t.sat??1),tint:[e[0]*n[0],e[1]*n[1],e[2]*n[2]],vig:Math.max(i.vig??.35,t.vig??0),bright:(i.bright??1)*(t.bright??1),contrast:(i.contrast??1)*(t.contrast??1)}}const Et=new Bv;Et.__rooms=()=>ji;window.__G=Et;async function Hv(){const i=document.getElementById("boot"),t=document.getElementById("boot-s");try{await Promise.all(['8px "Pixelify Sans"',"16px Lora",'16px "Playfair Display"','16px "Marck Script"',"16px Aurelia","16px Cintarini","16px Highcrest","16px Lombardina","16px Caveat",'16px "Bad Script"',"16px Neucha",'700 16px "Amatic SC"'].map(n=>document.fonts.load(n,"AБя").catch(s=>console.warn("[fonts]",n,s)))),Bt.init(),Et.boot(document.getElementById("game"));const e=()=>{Vt.init()};window.addEventListener("pointerdown",e),window.addEventListener("keydown",e),t.innerHTML='<span class="boot-enter">нажмите, чтобы войти в театр</span>',i.classList.add("ready"),await new Promise(n=>{const s=()=>{window.removeEventListener("keydown",s,!0),i.removeEventListener("pointerdown",s),Vt.init();const r=document.documentElement;try{const a=(r.requestFullscreen||r.webkitRequestFullscreen)?.call(r,{navigationUI:"hide"});a&&a.catch&&a.catch(o=>console.warn("[fullscreen]",o))}catch(a){console.warn("[fullscreen] недоступен",a)}n()};window.addEventListener("keydown",s,!0),i.addEventListener("pointerdown",s)}),await Bt.mainMenu(),i.style.opacity="0",setTimeout(()=>i.remove(),700)}catch(e){console.error("[boot] игра не запустилась",e),t.textContent="Не удалось запустить игру: "+(e?.message||e)+". Проверьте, что браузер поддерживает WebGL, и обновите страницу."}}Hv();export{Cg as $,Ye as A,Ze as B,ee as C,Ie as D,fi as E,mu as F,le as G,ze as H,au as I,qh as J,Ch as K,Kv as L,lt as M,Ue as N,Jv as O,Sn as P,Qv as Q,Vr as R,Ml as S,Gs as T,e2 as U,P as V,qs as W,s2 as X,r2 as Y,Gv as Z,An as _,be as a,gl as a0,Wg as a1,Ic as a2,ru as a3,fl as a4,se as a5,$h as a6,Bt as a7,Vt as a8,Et as a9,de as aa,Ji as ab,Me as ac,hv as ad,Ft as ae,Eg as af,sn as ag,sc as ah,Si as ai,m1 as aj,Fe as ak,fn as al,Lg as am,Yh as an,rt as ao,eu as ap,a2 as aq,Zn as b,gu as c,Je as d,$v as e,Xv as f,jv as g,Zv as h,Wo as i,jh as j,hn as k,Re as l,qv as m,cu as n,Is as o,us as p,t2 as q,i2 as r,Yv as s,n2 as t,ml as u,dn as v,Wv as w,Ig as x,ou as y,lu as z};
