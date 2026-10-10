var fn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},wn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Hc=0,ll=1,Wc=2;var Ai=1,Xc=2,ps=3,ci=0,Ke=1,Nn=2,Un=0,ms=1,cl=2,hl=3,ul=4,qc=5;var Ci=100,Yc=101,Zc=102,$c=103,Jc=104,Kc=200,jc=201,Qc=202,th=203,dl=204,fl=205,eh=206,nh=207,ih=208,sh=209,rh=210,ah=211,oh=212,lh=213,ch=214,Zr=0,$r=1,Jr=2,ts=3,Kr=4,jr=5,Qr=6,ta=7,wa=0,hh=1,uh=2,En=0,pl=1,ml=2,gl=3,_l=4,xl=5,yl=6,cr=7;var vl=300,hi=301,Ri=302,Ea=303,Ta=304,hr=306,Si=1e3,dn=1001,ea=1002,Oe=1003,dh=1004;var ur=1005;var Ce=1006,Aa=1007;var Fn=1008;var Qe=1009,Sl=1010,Ml=1011,gs=1012,Ca=1013,Tn=1014,pn=1015,An=1016,Ra=1017,Pa=1018,_s=1020,bl=35902,wl=35899,El=1021,Tl=1022,mn=1023,Ln=1026,ui=1027,Ia=1028,La=1029,di=1030,Da=1031;var Na=1033,dr=33776,fr=33777,pr=33778,mr=33779,Ua=35840,Fa=35841,Oa=35842,Ba=35843,za=36196,ka=37492,Va=37496,Ga=37488,Ha=37489,gr=37490,Wa=37491,Xa=37808,qa=37809,Ya=37810,Za=37811,$a=37812,Ja=37813,Ka=37814,ja=37815,Qa=37816,to=37817,eo=37818,no=37819,io=37820,so=37821,ro=36492,ao=36494,oo=36495,lo=36283,co=36284,_r=36285,ho=36286;var Os=2300,na=2301,qr=2302,Ko=2303,jo=2400,Qo=2401,tl=2402;var fh=3200;var uo=0,ph=1,qn="",ze="srgb",Bs="srgb-linear",zs="linear",le="srgb";var Yr=7680;var mh=519,gh=512,_h=513,xh=514,fo=515,yh=516,vh=517,po=518,Sh=519,Mh=35044;var Al="300 es",Sn=2e3,es=2001;function bu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ks(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bh(){let i=ks("canvas");return i.style.display="block",i}var pc={},ns=null;function Cl(...i){let t="THREE."+i.shift();ns?ns("log",t,...i):console.log(t,...i)}function wh(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function zt(...i){i=wh(i);let t="THREE."+i.shift();if(ns)ns("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function kt(...i){i=wh(i);let t="THREE."+i.shift();if(ns)ns("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function vi(...i){let t=i.join(" ");t in pc||(pc[t]=!0,zt(...i))}function Eh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Th={[Zr]:$r,[Jr]:Qr,[Kr]:ta,[ts]:jr,[$r]:Zr,[Qr]:Jr,[ta]:Kr,[jr]:ts},Mn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],mc=1234567,Us=Math.PI/180,is=180/Math.PI;function xs(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function jt(i,t,e){return Math.max(t,Math.min(e,i))}function Rl(i,t){return(i%t+t)%t}function Eu(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Tu(i,t,e){return i!==t?(e-i)/(t-i):0}function Fs(i,t,e){return(1-e)*i+e*t}function Au(i,t,e,n){return Fs(i,t,1-Math.exp(-e*n))}function Cu(i,t=1){return t-Math.abs(Rl(i,t*2)-t)}function Ru(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Pu(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Iu(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lu(i,t){return i+Math.random()*(t-i)}function Du(i){return i*(.5-Math.random())}function Nu(i){i!==void 0&&(mc=i);let t=mc+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Uu(i){return i*Us}function Fu(i){return i*is}function Ou(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),p=r((t-n)/2),d=a((t-n)/2),g=r((n-t)/2),y=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*p,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*p,o*l);break;case"ZXZ":i.set(c*p,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*y,c*g,o*l);break;case"YXY":i.set(c*g,o*u,c*y,o*l);break;case"ZYZ":i.set(c*y,c*g,o*u,o*l);break;default:zt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ji(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ze(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Pl={DEG2RAD:Us,RAD2DEG:is,generateUUID:xs,clamp:jt,euclideanModulo:Rl,mapLinear:Eu,inverseLerp:Tu,lerp:Fs,damp:Au,pingpong:Cu,smoothstep:Ru,smootherstep:Pu,randInt:Iu,randFloat:Lu,randFloatSpread:Du,seededRandom:Nu,degToRad:Uu,radToDeg:Fu,isPowerOfTwo:Ou,ceilPowerOfTwo:Bu,floorPowerOfTwo:zu,setQuaternionFromProperEuler:ku,normalize:Ze,denormalize:ji},Ul=class Ul{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ul.prototype.isVector2=!0;var Ut=Ul,$e=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],p=n[s+3],d=r[a+0],g=r[a+1],y=r[a+2],T=r[a+3];if(p!==T||c!==d||l!==g||u!==y){let m=c*d+l*g+u*y+p*T;m<0&&(d=-d,g=-g,y=-y,T=-T,m=-m);let f=1-o;if(m<.9995){let w=Math.acos(m),C=Math.sin(w);f=Math.sin(f*w)/C,o=Math.sin(o*w)/C,c=c*f+d*o,l=l*f+g*o,u=u*f+y*o,p=p*f+T*o}else{c=c*f+d*o,l=l*f+g*o,u=u*f+y*o,p=p*f+T*o;let w=1/Math.sqrt(c*c+l*l+u*u+p*p);c*=w,l*=w,u*=w,p*=w}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=p}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],p=r[a],d=r[a+1],g=r[a+2],y=r[a+3];return t[e]=o*y+u*p+c*g-l*d,t[e+1]=c*y+u*d+l*p-o*g,t[e+2]=l*y+u*g+o*d-c*p,t[e+3]=u*y-o*p-c*d-l*g,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),p=o(r/2),d=c(n/2),g=c(s/2),y=c(r/2);switch(a){case"XYZ":this._x=d*u*p+l*g*y,this._y=l*g*p-d*u*y,this._z=l*u*y+d*g*p,this._w=l*u*p-d*g*y;break;case"YXZ":this._x=d*u*p+l*g*y,this._y=l*g*p-d*u*y,this._z=l*u*y-d*g*p,this._w=l*u*p+d*g*y;break;case"ZXY":this._x=d*u*p-l*g*y,this._y=l*g*p+d*u*y,this._z=l*u*y+d*g*p,this._w=l*u*p-d*g*y;break;case"ZYX":this._x=d*u*p-l*g*y,this._y=l*g*p+d*u*y,this._z=l*u*y-d*g*p,this._w=l*u*p+d*g*y;break;case"YZX":this._x=d*u*p+l*g*y,this._y=l*g*p+d*u*y,this._z=l*u*y-d*g*p,this._w=l*u*p-d*g*y;break;case"XZY":this._x=d*u*p-l*g*y,this._y=l*g*p-d*u*y,this._z=l*u*y+d*g*p,this._w=l*u*p+d*g*y;break;default:zt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],p=e[10],d=n+o+p;if(d>0){let g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(u-c)*g,this._y=(r-l)*g,this._z=(a-s)*g}else if(n>o&&n>p){let g=2*Math.sqrt(1+n-o-p);this._w=(u-c)/g,this._x=.25*g,this._y=(s+a)/g,this._z=(r+l)/g}else if(o>p){let g=2*Math.sqrt(1+o-n-p);this._w=(r-l)/g,this._x=(s+a)/g,this._y=.25*g,this._z=(c+u)/g}else{let g=2*Math.sqrt(1+p-n-o);this._w=(a-s)/g,this._x=(r+l)/g,this._y=(c+u)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(jt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fl=class Fl{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),p=2*(r*n-a*e);return this.x=e+c*l+a*p-o*u,this.y=n+c*u+o*l-r*p,this.z=s+c*p+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Po.copy(this).projectOnVector(t),this.sub(Po)}reflect(t){return this.sub(Po.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(jt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fl.prototype.isVector3=!0;var B=Fl,Po=new B,gc=new $e,Ol=class Ol{constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],p=n[7],d=n[2],g=n[5],y=n[8],T=s[0],m=s[3],f=s[6],w=s[1],C=s[4],S=s[7],b=s[2],v=s[5],A=s[8];return r[0]=a*T+o*w+c*b,r[3]=a*m+o*C+c*v,r[6]=a*f+o*S+c*A,r[1]=l*T+u*w+p*b,r[4]=l*m+u*C+p*v,r[7]=l*f+u*S+p*A,r[2]=d*T+g*w+y*b,r[5]=d*m+g*C+y*v,r[8]=d*f+g*S+y*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=u*a-o*l,d=o*c-u*r,g=l*r-a*c,y=e*p+n*d+s*g;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);let T=1/y;return t[0]=p*T,t[1]=(s*l-u*n)*T,t[2]=(o*n-s*a)*T,t[3]=d*T,t[4]=(u*e-s*c)*T,t[5]=(s*r-o*e)*T,t[6]=g*T,t[7]=(n*c-l*e)*T,t[8]=(a*e-n*r)*T,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return vi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Io.makeScale(t,e)),this}rotate(t){return vi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return vi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ol.prototype.isMatrix3=!0;var Ht=Ol,Io=new Ht,_c=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xc=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){let i={enabled:!0,workingColorSpace:Bs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===le&&(s.r=Wn(s.r),s.g=Wn(s.g),s.b=Wn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===le&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?zs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return vi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return vi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Bs]:{primaries:t,whitePoint:n,transfer:zs,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ze},outputColorSpaceConfig:{drawingBufferColorSpace:ze}},[ze]:{primaries:t,whitePoint:n,transfer:le,toXYZ:_c,fromXYZ:xc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ze}}}),i}var Qt=Vu();function Wn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Bi,ia=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=ks("canvas")),Bi.width=t.width,Bi.height=t.height;let s=Bi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ks("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Wn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Wn(e[n]/255)*255):e[n]=Wn(e[n]);return{data:e,width:t.width,height:t.height}}else return zt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Gu=0,ss=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Lo(s[a].image)):r.push(Lo(s[a]))}else r=Lo(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ia.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(zt("Texture: Unable to serialize Texture."),{})}var Hu=0,Do=new B,Je=class i extends Mn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=dn,s=dn,r=Ce,a=Fn,o=mn,c=Qe,l=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=xs(),this.name="",this.source=new ss(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Do).x}get height(){return this.source.getSize(Do).y}get depth(){return this.source.getSize(Do).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){zt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==vl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Si:t.x=t.x-Math.floor(t.x);break;case dn:t.x=t.x<0?0:1;break;case ea:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Si:t.y=t.y-Math.floor(t.y);break;case dn:t.y=t.y<0?0:1;break;case ea:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Je.DEFAULT_IMAGE=null;Je.DEFAULT_MAPPING=vl;Je.DEFAULT_ANISOTROPY=1;var Bl=class Bl{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],p=c[8],d=c[1],g=c[5],y=c[9],T=c[2],m=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(p-T)<.01&&Math.abs(y-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(p+T)<.1&&Math.abs(y+m)<.1&&Math.abs(l+g+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let C=(l+1)/2,S=(g+1)/2,b=(f+1)/2,v=(u+d)/4,A=(p+T)/4,h=(y+m)/4;return C>S&&C>b?C<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(C),s=v/n,r=A/n):S>b?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=v/s,r=h/s):b<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(b),n=A/r,s=h/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-y)*(m-y)+(p-T)*(p-T)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(m-y)/w,this.y=(p-T)/w,this.z=(d-u)/w,this.w=Math.acos((l+g+f-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=jt(this.x,t.x,e.x),this.y=jt(this.y,t.y,e.y),this.z=jt(this.z,t.z,e.z),this.w=jt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=jt(this.x,t,e),this.y=jt(this.y,t,e),this.z=jt(this.z,t,e),this.w=jt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(jt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bl.prototype.isVector4=!0;var Se=Bl,sa=class extends Mn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ce,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Se(0,0,t,e),this.scissorTest=!1,this.viewport=new Se(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Je(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ce,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new ss(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},je=class extends sa{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Mi=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var ra=class extends Je{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=dn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var ba=class ba{constructor(t,e,n,s,r,a,o,c,l,u,p,d,g,y,T,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,p,d,g,y,T,m)}set(t,e,n,s,r,a,o,c,l,u,p,d,g,y,T,m){let f=this.elements;return f[0]=t,f[4]=e,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=u,f[10]=p,f[14]=d,f[3]=g,f[7]=y,f[11]=T,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ba().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/zi.setFromMatrixColumn(t,0).length(),r=1/zi.setFromMatrixColumn(t,1).length(),a=1/zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),p=Math.sin(r);if(t.order==="XYZ"){let d=a*u,g=a*p,y=o*u,T=o*p;e[0]=c*u,e[4]=-c*p,e[8]=l,e[1]=g+y*l,e[5]=d-T*l,e[9]=-o*c,e[2]=T-d*l,e[6]=y+g*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,g=c*p,y=l*u,T=l*p;e[0]=d+T*o,e[4]=y*o-g,e[8]=a*l,e[1]=a*p,e[5]=a*u,e[9]=-o,e[2]=g*o-y,e[6]=T+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,g=c*p,y=l*u,T=l*p;e[0]=d-T*o,e[4]=-a*p,e[8]=y+g*o,e[1]=g+y*o,e[5]=a*u,e[9]=T-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,g=a*p,y=o*u,T=o*p;e[0]=c*u,e[4]=y*l-g,e[8]=d*l+T,e[1]=c*p,e[5]=T*l+d,e[9]=g*l-y,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,g=a*l,y=o*c,T=o*l;e[0]=c*u,e[4]=T-d*p,e[8]=y*p+g,e[1]=p,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=g*p+y,e[10]=d-T*p}else if(t.order==="XZY"){let d=a*c,g=a*l,y=o*c,T=o*l;e[0]=c*u,e[4]=-p,e[8]=l*u,e[1]=d*p+T,e[5]=a*u,e[9]=g*p-y,e[2]=y*p-g,e[6]=o*u,e[10]=T*p+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Wu,t,Xu)}lookAt(t,e,n){let s=this.elements;return sn.subVectors(t,e),sn.lengthSq()===0&&(sn.z=1),sn.normalize(),Kn.crossVectors(n,sn),Kn.lengthSq()===0&&(Math.abs(n.z)===1?sn.x+=1e-4:sn.z+=1e-4,sn.normalize(),Kn.crossVectors(n,sn)),Kn.normalize(),wr.crossVectors(sn,Kn),s[0]=Kn.x,s[4]=wr.x,s[8]=sn.x,s[1]=Kn.y,s[5]=wr.y,s[9]=sn.y,s[2]=Kn.z,s[6]=wr.z,s[10]=sn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],p=n[5],d=n[9],g=n[13],y=n[2],T=n[6],m=n[10],f=n[14],w=n[3],C=n[7],S=n[11],b=n[15],v=s[0],A=s[4],h=s[8],x=s[12],E=s[1],P=s[5],D=s[9],F=s[13],L=s[2],N=s[6],G=s[10],q=s[14],j=s[3],Z=s[7],$=s[11],J=s[15];return r[0]=a*v+o*E+c*L+l*j,r[4]=a*A+o*P+c*N+l*Z,r[8]=a*h+o*D+c*G+l*$,r[12]=a*x+o*F+c*q+l*J,r[1]=u*v+p*E+d*L+g*j,r[5]=u*A+p*P+d*N+g*Z,r[9]=u*h+p*D+d*G+g*$,r[13]=u*x+p*F+d*q+g*J,r[2]=y*v+T*E+m*L+f*j,r[6]=y*A+T*P+m*N+f*Z,r[10]=y*h+T*D+m*G+f*$,r[14]=y*x+T*F+m*q+f*J,r[3]=w*v+C*E+S*L+b*j,r[7]=w*A+C*P+S*N+b*Z,r[11]=w*h+C*D+S*G+b*$,r[15]=w*x+C*F+S*q+b*J,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],p=t[6],d=t[10],g=t[14],y=t[3],T=t[7],m=t[11],f=t[15],w=c*g-l*d,C=o*g-l*p,S=o*d-c*p,b=a*g-l*u,v=a*d-c*u,A=a*p-o*u;return e*(T*w-m*C+f*S)-n*(y*w-m*b+f*v)+s*(y*C-T*b+f*A)-r*(y*S-T*v+m*A)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],p=t[9],d=t[10],g=t[11],y=t[12],T=t[13],m=t[14],f=t[15],w=e*o-n*a,C=e*c-s*a,S=e*l-r*a,b=n*c-s*o,v=n*l-r*o,A=s*l-r*c,h=u*T-p*y,x=u*m-d*y,E=u*f-g*y,P=p*m-d*T,D=p*f-g*T,F=d*f-g*m,L=w*F-C*D+S*P+b*E-v*x+A*h;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/L;return t[0]=(o*F-c*D+l*P)*N,t[1]=(s*D-n*F-r*P)*N,t[2]=(T*A-m*v+f*b)*N,t[3]=(d*v-p*A-g*b)*N,t[4]=(c*E-a*F-l*x)*N,t[5]=(e*F-s*E+r*x)*N,t[6]=(m*S-y*A-f*C)*N,t[7]=(u*A-d*S+g*C)*N,t[8]=(a*D-o*E+l*h)*N,t[9]=(n*E-e*D-r*h)*N,t[10]=(y*v-T*S+f*w)*N,t[11]=(p*S-u*v-g*w)*N,t[12]=(o*x-a*P-c*h)*N,t[13]=(e*P-n*x+s*h)*N,t[14]=(T*C-y*b-m*w)*N,t[15]=(u*b-p*C+d*w)*N,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,p=o+o,d=r*l,g=r*u,y=r*p,T=a*u,m=a*p,f=o*p,w=c*l,C=c*u,S=c*p,b=n.x,v=n.y,A=n.z;return s[0]=(1-(T+f))*b,s[1]=(g+S)*b,s[2]=(y-C)*b,s[3]=0,s[4]=(g-S)*v,s[5]=(1-(d+f))*v,s[6]=(m+w)*v,s[7]=0,s[8]=(y+C)*A,s[9]=(m-w)*A,s[10]=(1-(d+T))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=zi.set(s[0],s[1],s[2]).length(),o=zi.set(s[4],s[5],s[6]).length(),c=zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),xn.copy(this);let l=1/a,u=1/o,p=1/c;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=u,xn.elements[5]*=u,xn.elements[6]*=u,xn.elements[8]*=p,xn.elements[9]*=p,xn.elements[10]*=p,e.setFromRotationMatrix(xn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=Sn,c=!1){let l=this.elements,u=2*r/(e-t),p=2*r/(n-s),d=(e+t)/(e-t),g=(n+s)/(n-s),y,T;if(c)y=r/(a-r),T=a*r/(a-r);else if(o===Sn)y=-(a+r)/(a-r),T=-2*a*r/(a-r);else if(o===es)y=-a/(a-r),T=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=y,l[14]=T,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Sn,c=!1){let l=this.elements,u=2/(e-t),p=2/(n-s),d=-(e+t)/(e-t),g=-(n+s)/(n-s),y,T;if(c)y=1/(a-r),T=a/(a-r);else if(o===Sn)y=-2/(a-r),T=-(a+r)/(a-r);else if(o===es)y=-1/(a-r),T=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=y,l[14]=T,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};ba.prototype.isMatrix4=!0;var he=ba,zi=new B,xn=new he,Wu=new B(0,0,0),Xu=new B(1,1,1),Kn=new B,wr=new B,sn=new B,yc=new he,vc=new $e,Xn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],p=s[2],d=s[6],g=s[10];switch(e){case"XYZ":this._y=Math.asin(jt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,g),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-jt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(jt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-jt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(jt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-jt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,g),this._y=0);break;default:zt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return yc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(yc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vc.setFromEuler(this),this.setFromQuaternion(vc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var rs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},qu=0,Sc=new B,ki=new $e,zn=new he,Er=new B,Cs=new B,Yu=new B,Zu=new $e,Mc=new B(1,0,0),bc=new B(0,1,0),wc=new B(0,0,1),Ec={type:"added"},$u={type:"removed"},Vi={type:"childadded",child:null},No={type:"childremoved",child:null},We=class i extends Mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new B,e=new Xn,n=new $e,s=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Ht}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Mc,t)}rotateY(t){return this.rotateOnAxis(bc,t)}rotateZ(t){return this.rotateOnAxis(wc,t)}translateOnAxis(t,e){return Sc.copy(t).applyQuaternion(this.quaternion),this.position.add(Sc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mc,t)}translateY(t){return this.translateOnAxis(bc,t)}translateZ(t){return this.translateOnAxis(wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Er.copy(t):Er.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Cs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?zn.lookAt(Cs,Er,this.up):zn.lookAt(Er,Cs,this.up),this.quaternion.setFromRotationMatrix(zn),s&&(zn.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(zn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ec),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($u),No.child=t,this.dispatchEvent(No),No.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ec),Vi.child=t,this.dispatchEvent(Vi),Vi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,t,Yu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cs,Zu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let p=c[l];r(t.shapes,p)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),p=a(t.shapes),d=a(t.skeletons),g=a(t.animations),y=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),y.length>0&&(n.nodes=y)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};We.DEFAULT_UP=new B(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var yi=class extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}},Ju={type:"move"},as=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let T of t.hand.values()){let m=e.getJointPose(T,n),f=this._getHandJoint(l,T);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let u=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=u.position.distanceTo(p.position),g=.02,y=.005;l.inputState.pinching&&d>g+y?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=g-y&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ju)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function Uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Rl(t,1),e=jt(e,0,1),n=jt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Uo(a,r,t+1/3),this.g=Uo(a,r,t),this.b=Uo(a,r,t-1/3)}return Qt.colorSpaceToWorking(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&zt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:zt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);zt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){let n=Ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):zt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Wn(t.r),this.g=Wn(t.g),this.b=Wn(t.b),this}copyLinearToSRGB(t){return this.r=Qi(t.r),this.g=Qi(t.g),this.b=Qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Qt.workingToColorSpace(Ge.copy(this),t),Math.round(jt(Ge.r*255,0,255))*65536+Math.round(jt(Ge.g*255,0,255))*256+Math.round(jt(Ge.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.workingToColorSpace(Ge.copy(this),e);let n=Ge.r,s=Ge.g,r=Ge.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let p=a-o;switch(l=u<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=Qt.workingColorSpace){return Qt.workingToColorSpace(Ge.copy(this),e),t.r=Ge.r,t.g=Ge.g,t.b=Ge.b,t}getStyle(t=ze){Qt.workingToColorSpace(Ge.copy(this),t);let e=Ge.r,n=Ge.g,s=Ge.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Tr);let n=Fs(jn.h,Tr.h,e),s=Fs(jn.s,Tr.s,e),r=Fs(jn.l,Tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ge=new Bt;Bt.NAMES=Ah;var Vs=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gs=class extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},yn=new B,kn=new B,Fo=new B,Vn=new B,Gi=new B,Hi=new B,Tc=new B,Oo=new B,Bo=new B,zo=new B,ko=new Se,Vo=new Se,Go=new Se,ni=class i{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){yn.subVectors(s,e),kn.subVectors(n,e),Fo.subVectors(t,e);let a=yn.dot(yn),o=yn.dot(kn),c=yn.dot(Fo),l=kn.dot(kn),u=kn.dot(Fo),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;let d=1/p,g=(l*c-o*u)*d,y=(a*u-o*c)*d;return r.set(1-g-y,y,g)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return ko.setScalar(0),Vo.setScalar(0),Go.setScalar(0),ko.fromBufferAttribute(t,e),Vo.fromBufferAttribute(t,n),Go.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),kn.subVectors(t,e),yn.cross(kn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),kn.subVectors(this.a,this.b),yn.cross(kn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Gi.subVectors(s,n),Hi.subVectors(r,n),Oo.subVectors(t,n);let c=Gi.dot(Oo),l=Hi.dot(Oo);if(c<=0&&l<=0)return e.copy(n);Bo.subVectors(t,s);let u=Gi.dot(Bo),p=Hi.dot(Bo);if(u>=0&&p<=u)return e.copy(s);let d=c*p-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Gi,a);zo.subVectors(t,r);let g=Gi.dot(zo),y=Hi.dot(zo);if(y>=0&&g<=y)return e.copy(r);let T=g*l-c*y;if(T<=0&&l>=0&&y<=0)return o=l/(l-y),e.copy(n).addScaledVector(Hi,o);let m=u*y-g*p;if(m<=0&&p-u>=0&&g-y>=0)return Tc.subVectors(r,s),o=(p-u)/(p-u+(g-y)),e.copy(s).addScaledVector(Tc,o);let f=1/(m+T+d);return a=T*f,o=d*f,e.copy(n).addScaledVector(Gi,a).addScaledVector(Hi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dn=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ar.copy(n.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Rs),Cr.subVectors(this.max,Rs),Wi.subVectors(t.a,Rs),Xi.subVectors(t.b,Rs),qi.subVectors(t.c,Rs),Qn.subVectors(Xi,Wi),ti.subVectors(qi,Xi),mi.subVectors(Wi,qi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-mi.z,mi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,mi.z,0,-mi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-mi.y,mi.x,0];return!Ho(e,Wi,Xi,qi,Cr)||(e=[1,0,0,0,1,0,0,0,1],!Ho(e,Wi,Xi,qi,Cr))?!1:(Rr.crossVectors(Qn,ti),e=[Rr.x,Rr.y,Rr.z],Ho(e,Wi,Xi,qi,Cr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Gn=[new B,new B,new B,new B,new B,new B,new B,new B],vn=new B,Ar=new Dn,Wi=new B,Xi=new B,qi=new B,Qn=new B,ti=new B,mi=new B,Rs=new B,Cr=new B,Rr=new B,gi=new B;function Ho(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){gi.fromArray(i,r);let o=s.x*Math.abs(gi.x)+s.y*Math.abs(gi.y)+s.z*Math.abs(gi.z),c=t.dot(gi),l=e.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Ae=new B,Pr=new Ut,Ku=0,on=class extends Mn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ku++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Mh,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Pr.fromBufferAttribute(this,e),Pr.applyMatrix3(t),this.setXY(e,Pr.x,Pr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix3(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ze(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ze(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ze(e,this.array),n=Ze(n,this.array),s=Ze(s,this.array),r=Ze(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var Hs=class extends on{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ws=class extends on{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ue=class extends on{constructor(t,e,n){super(new Float32Array(t),e,n)}},ju=new Dn,Ps=new B,Wo=new B,ii=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):ju.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ps.subVectors(t,this.center);let e=Ps.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ps,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ps.copy(t.center).add(Wo)),this.expandByPoint(Ps.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Qu=0,un=new he,Xo=new We,Yi=new B,rn=new Dn,Is=new Dn,Fe=new B,Be=class i extends Mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qu++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Ws:Hs)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ht().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return un.makeRotationFromQuaternion(t),this.applyMatrix4(un),this}rotateX(t){return un.makeRotationX(t),this.applyMatrix4(un),this}rotateY(t){return un.makeRotationY(t),this.applyMatrix4(un),this}rotateZ(t){return un.makeRotationZ(t),this.applyMatrix4(un),this}translate(t,e,n){return un.makeTranslation(t,e,n),this.applyMatrix4(un),this}scale(t,e,n){return un.makeScale(t,e,n),this.applyMatrix4(un),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Yi).negate(),this.translate(Yi.x,Yi.y,Yi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ue(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&zt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];rn.setFromBufferAttribute(r),this.morphTargetsRelative?(Fe.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Fe),Fe.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Fe)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ii);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Is.setFromBufferAttribute(o),this.morphTargetsRelative?(Fe.addVectors(rn.min,Is.min),rn.expandByPoint(Fe),Fe.addVectors(rn.max,Is.max),rn.expandByPoint(Fe)):(rn.expandByPoint(Is.min),rn.expandByPoint(Is.max))}rn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Fe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Fe));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)Fe.fromBufferAttribute(o,l),c&&(Yi.fromBufferAttribute(t,l),Fe.add(Yi)),s=Math.max(s,n.distanceToSquared(Fe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new on(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let h=0;h<n.count;h++)o[h]=new B,c[h]=new B;let l=new B,u=new B,p=new B,d=new Ut,g=new Ut,y=new Ut,T=new B,m=new B;function f(h,x,E){l.fromBufferAttribute(n,h),u.fromBufferAttribute(n,x),p.fromBufferAttribute(n,E),d.fromBufferAttribute(r,h),g.fromBufferAttribute(r,x),y.fromBufferAttribute(r,E),u.sub(l),p.sub(l),g.sub(d),y.sub(d);let P=1/(g.x*y.y-y.x*g.y);isFinite(P)&&(T.copy(u).multiplyScalar(y.y).addScaledVector(p,-g.y).multiplyScalar(P),m.copy(p).multiplyScalar(g.x).addScaledVector(u,-y.x).multiplyScalar(P),o[h].add(T),o[x].add(T),o[E].add(T),c[h].add(m),c[x].add(m),c[E].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let h=0,x=w.length;h<x;++h){let E=w[h],P=E.start,D=E.count;for(let F=P,L=P+D;F<L;F+=3)f(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let C=new B,S=new B,b=new B,v=new B;function A(h){b.fromBufferAttribute(s,h),v.copy(b);let x=o[h];C.copy(x),C.sub(b.multiplyScalar(b.dot(x))).normalize(),S.crossVectors(v,x);let P=S.dot(c[h])<0?-1:1;a.setXYZW(h,C.x,C.y,C.z,P)}for(let h=0,x=w.length;h<x;++h){let E=w[h],P=E.start,D=E.count;for(let F=P,L=P+D;F<L;F+=3)A(t.getX(F+0)),A(t.getX(F+1)),A(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new on(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,a=new B,o=new B,c=new B,l=new B,u=new B,p=new B;if(t)for(let d=0,g=t.count;d<g;d+=3){let y=t.getX(d+0),T=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,y),r.fromBufferAttribute(e,T),a.fromBufferAttribute(e,m),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),o.fromBufferAttribute(n,y),c.fromBufferAttribute(n,T),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(y,o.x,o.y,o.z),n.setXYZ(T,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,g=e.count;d<g;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),p.subVectors(s,r),u.cross(p),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Fe.fromBufferAttribute(t,e),Fe.normalize(),t.setXYZ(e,Fe.x,Fe.y,Fe.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,p=o.normalized,d=new l.constructor(c.length*u),g=0,y=0;for(let T=0,m=c.length;T<m;T++){o.isInterleavedBufferAttribute?g=c[T]*o.data.stride+o.offset:g=c[T]*u;for(let f=0;f<u;f++)d[y++]=l[g++]}return new on(d,u,p)}if(this.index===null)return zt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,p=l.length;u<p;u++){let d=l[u],g=t(d,n);c.push(g)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let p=0,d=l.length;p<d;p++){let g=l[p];u.push(g.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],p=r[l];for(let d=0,g=p.length;d<g;d++)u.push(p[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qo=new B,td=new B,ed=new Ht,an=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=qo.subVectors(n,e).cross(td.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||ed.getNormalMatrix(t),s=this.coplanarPoint(qo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},nd=0,si=class extends Mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=ms,this.side=ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=fl,this.blendEquation=Ci,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){zt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){zt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Bt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new an().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ut().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var Hn=new B,Yo=new B,Ir=new B,Lr=new B,bi=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Yo.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),Lr.copy(this.origin).sub(Yo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=Lr.dot(this.direction),c=-Lr.dot(Ir),l=Lr.lengthSq(),u=Math.abs(1-a*a),p,d,g,y;if(u>0)if(p=a*c-o,d=a*o-c,y=r*u,p>=0)if(d>=-y)if(d<=y){let T=1/u;p*=T,d*=T,g=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=r,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+l;else d=-r,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+l;else d<=-y?(p=Math.max(0,-(-a*r+o)),d=p>0?-r:Math.min(Math.max(-r,-c),r),g=-p*p+d*(d+2*c)+l):d<=y?(p=0,d=Math.min(Math.max(-r,-c),r),g=d*(d+2*c)+l):(p=Math.max(0,-(a*r+o)),d=p>0?r:Math.min(Math.max(-r,-c),r),g=-p*p+d*(d+2*c)+l);else d=a>0?-r:r,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Yo).addScaledVector(Ir,d),g}intersectSphere(t,e){if(t.radius<0)return null;Hn.subVectors(t.center,this.origin);let n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(t.min.z-d.z)*p,c=(t.max.z-d.z)*p):(o=(t.max.z-d.z)*p,c=(t.min.z-d.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,p=t.x-a.x,d=t.y-a.y,g=t.z-a.z,y=e.x-a.x,T=e.y-a.y,m=e.z-a.z,f=n.x-a.x,w=n.y-a.y,C=n.z-a.z,S=Math.abs(c),b=Math.abs(l),v=Math.abs(u),A,h,x,E,P,D,F,L,N,G,q,j;if(S>=b&&S>=v?(x=c,D=p,N=y,j=f,c>=0?(A=l,h=u,E=d,P=g,F=T,L=m,G=w,q=C):(A=u,h=l,E=g,P=d,F=m,L=T,G=C,q=w)):b>=v?(x=l,D=d,N=T,j=w,l>=0?(A=u,h=c,E=g,P=p,F=m,L=y,G=C,q=f):(A=c,h=u,E=p,P=g,F=y,L=m,G=f,q=C)):(x=u,D=g,N=m,j=C,u>=0?(A=c,h=l,E=p,P=d,F=y,L=T,G=f,q=w):(A=l,h=c,E=d,P=p,F=T,L=y,G=w,q=f)),x===0)return null;let Z=A/x,$=h/x,J=1/x,dt=E-Z*D,Mt=P-$*D,Ot=F-Z*N,Zt=L-$*N,ee=G-Z*j,Q=q-$*j,st=ee*Zt-Q*Ot,ct=dt*Q-Mt*ee,Vt=Ot*Mt-Zt*dt;if(s){if(st<0||ct<0||Vt<0)return null}else if((st<0||ct<0||Vt<0)&&(st>0||ct>0||Vt>0))return null;let bt=st+ct+Vt;if(bt===0)return null;let qt=J*(st*D+ct*N+Vt*j);return(bt>0?qt<0:qt>0)?null:this.at(qt/bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wi=class extends si{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Ac=new he,_i=new bi,Dr=new ii,Cc=new B,Nr=new B,Ur=new B,Fr=new B,Zo=new B,Or=new B,Rc=new B,Br=new B,Re=class extends We{constructor(t=new Be,e=new wi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],p=r[c];u!==0&&(Zo.fromBufferAttribute(p,t),a?Or.addScaledVector(Zo,u):Or.addScaledVector(Zo.sub(e),u))}e.add(Or)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(r),_i.copy(t.ray).recast(t.near),!(Dr.containsPoint(_i.origin)===!1&&(_i.intersectSphere(Dr,Cc)===null||_i.origin.distanceToSquared(Cc)>(t.far-t.near)**2))&&(Ac.copy(r).invert(),_i.copy(t.ray).applyMatrix4(Ac),!(n.boundingBox!==null&&_i.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,_i)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,p=r.attributes.normal,d=r.groups,g=r.drawRange;if(o!==null)if(Array.isArray(a))for(let y=0,T=d.length;y<T;y++){let m=d[y],f=a[m.materialIndex],w=Math.max(m.start,g.start),C=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,b=C;S<b;S+=3){let v=o.getX(S),A=o.getX(S+1),h=o.getX(S+2);s=zr(this,f,t,n,l,u,p,v,A,h),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,g.start),T=Math.min(o.count,g.start+g.count);for(let m=y,f=T;m<f;m+=3){let w=o.getX(m),C=o.getX(m+1),S=o.getX(m+2);s=zr(this,a,t,n,l,u,p,w,C,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let y=0,T=d.length;y<T;y++){let m=d[y],f=a[m.materialIndex],w=Math.max(m.start,g.start),C=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let S=w,b=C;S<b;S+=3){let v=S,A=S+1,h=S+2;s=zr(this,f,t,n,l,u,p,v,A,h),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let y=Math.max(0,g.start),T=Math.min(c.count,g.start+g.count);for(let m=y,f=T;m<f;m+=3){let w=m,C=m+1,S=m+2;s=zr(this,a,t,n,l,u,p,w,C,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function id(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===ci,o),c===null)return null;Br.copy(o),Br.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Br);return l<e.near||l>e.far?null:{distance:l,point:Br.clone(),object:i}}function zr(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Nr),i.getVertexPosition(c,Ur),i.getVertexPosition(l,Fr);let u=id(i,t,e,n,Nr,Ur,Fr,Rc);if(u){let p=new B;ni.getBarycoord(Rc,Nr,Ur,Fr,p),s&&(u.uv=ni.getInterpolatedAttribute(s,o,c,l,p,new Ut)),r&&(u.uv1=ni.getInterpolatedAttribute(r,o,c,l,p,new Ut)),a&&(u.normal=ni.getInterpolatedAttribute(a,o,c,l,p,new B),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new B,materialIndex:0};ni.getNormal(Nr,Ur,Fr,d.normal),u.face=d,u.barycoord=p}return u}var Xs=class extends Je{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Oe,u=Oe,p,d){super(null,a,o,c,l,u,s,r,p,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var qs=class extends on{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Zi=new he,Pc=new he,kr=[],Ic=new Dn,sd=new he,Ls=new Re,Ds=new ii,os=class extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new qs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,sd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Ic.copy(t.boundingBox).applyMatrix4(Zi),this.boundingBox.union(Ic)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ii),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Zi),Ds.copy(t.boundingSphere).applyMatrix4(Zi),this.boundingSphere.union(Ds)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ls.geometry=this.geometry,Ls.material=this.material,Ls.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ds.copy(this.boundingSphere),Ds.applyMatrix4(n),t.ray.intersectsSphere(Ds)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Zi),Pc.multiplyMatrices(n,Zi),Ls.matrixWorld=Pc,Ls.raycast(t,kr);for(let a=0,o=kr.length;a<o;a++){let c=kr[a];c.instanceId=r,c.object=this,e.push(c)}kr.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new qs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Xs(new Float32Array(s*this.count),s,this.count,Ia,pn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xi=new ii,rd=new Ut(.5,.5),Vr=new B,ls=class{constructor(t=new an,e=new an,n=new an,s=new an,r=new an,a=new an){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Sn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],p=r[5],d=r[6],g=r[7],y=r[8],T=r[9],m=r[10],f=r[11],w=r[12],C=r[13],S=r[14],b=r[15];if(s[0].setComponents(l-a,g-u,f-y,b-w).normalize(),s[1].setComponents(l+a,g+u,f+y,b+w).normalize(),s[2].setComponents(l+o,g+p,f+T,b+C).normalize(),s[3].setComponents(l-o,g-p,f-T,b-C).normalize(),n)s[4].setComponents(c,d,m,S).normalize(),s[5].setComponents(l-c,g-d,f-m,b-S).normalize();else if(s[4].setComponents(l-c,g-d,f-m,b-S).normalize(),e===Sn)s[5].setComponents(l+c,g+d,f+m,b+S).normalize();else if(e===es)s[5].setComponents(c,d,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),xi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),xi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(xi)}intersectsSprite(t){xi.center.set(0,0,0);let e=rd.distanceTo(t.center);return xi.radius=.7071067811865476+e,xi.applyMatrix4(t.matrixWorld),this.intersectsSphere(xi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Vr.x=s.normal.x>0?t.max.x:t.min.x,Vr.y=s.normal.y>0?t.max.y:t.min.y,Vr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ys=class extends Je{constructor(t=[],e=hi,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Zs=class extends Je{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class extends Je{constructor(t,e,n=Tn,s,r,a,o=Oe,c=Oe,l,u=Ln,p=1){if(u!==Ln&&u!==ui)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:p};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ss(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},aa=class extends ri{constructor(t,e=Tn,n=hi,s,r,a=Oe,o=Oe,c,l=Ln){let u={width:t,height:t,depth:1},p=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},$s=class extends Je{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},cs=class i extends Be{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],p=[],d=0,g=0;y("z","y","x",-1,-1,n,e,t,a,r,0),y("z","y","x",1,-1,n,e,-t,a,r,1),y("x","z","y",1,1,t,n,e,s,a,2),y("x","z","y",1,-1,t,n,-e,s,a,3),y("x","y","z",1,-1,t,e,n,s,r,4),y("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ue(l,3)),this.setAttribute("normal",new ue(u,3)),this.setAttribute("uv",new ue(p,2));function y(T,m,f,w,C,S,b,v,A,h,x){let E=S/A,P=b/h,D=S/2,F=b/2,L=v/2,N=A+1,G=h+1,q=0,j=0,Z=new B;for(let $=0;$<G;$++){let J=$*P-F;for(let dt=0;dt<N;dt++){let Mt=dt*E-D;Z[T]=Mt*w,Z[m]=J*C,Z[f]=L,l.push(Z.x,Z.y,Z.z),Z[T]=0,Z[m]=0,Z[f]=v>0?1:-1,u.push(Z.x,Z.y,Z.z),p.push(dt/A),p.push(1-$/h),q+=1}}for(let $=0;$<h;$++)for(let J=0;J<A;J++){let dt=d+J+N*$,Mt=d+J+N*($+1),Ot=d+(J+1)+N*($+1),Zt=d+(J+1)+N*$;c.push(dt,Mt,Zt),c.push(Mt,Ot,Zt),j+=6}o.addGroup(g,j,x),g+=j,d+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Js=class i extends Be{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let u=[],p=[],d=[],g=[],y=0,T=[],m=n/2,f=0;w(),a===!1&&(t>0&&C(!0),e>0&&C(!1)),this.setIndex(u),this.setAttribute("position",new ue(p,3)),this.setAttribute("normal",new ue(d,3)),this.setAttribute("uv",new ue(g,2));function w(){let S=new B,b=new B,v=0,A=(e-t)/n;for(let h=0;h<=r;h++){let x=[],E=h/r,P=E*(e-t)+t;for(let D=0;D<=s;D++){let F=D/s,L=F*c+o,N=Math.sin(L),G=Math.cos(L);b.x=P*N,b.y=-E*n+m,b.z=P*G,p.push(b.x,b.y,b.z),S.set(N,A,G).normalize(),d.push(S.x,S.y,S.z),g.push(F,1-E),x.push(y++)}T.push(x)}for(let h=0;h<s;h++)for(let x=0;x<r;x++){let E=T[x][h],P=T[x+1][h],D=T[x+1][h+1],F=T[x][h+1];(t>0||x!==0)&&(u.push(E,P,F),v+=3),(e>0||x!==r-1)&&(u.push(P,D,F),v+=3)}l.addGroup(f,v,0),f+=v}function C(S){let b=y,v=new Ut,A=new B,h=0,x=S===!0?t:e,E=S===!0?1:-1;for(let D=1;D<=s;D++)p.push(0,m*E,0),d.push(0,E,0),g.push(.5,.5),y++;let P=y;for(let D=0;D<=s;D++){let L=D/s*c+o,N=Math.cos(L),G=Math.sin(L);A.x=x*G,A.y=m*E,A.z=x*N,p.push(A.x,A.y,A.z),d.push(0,E,0),v.x=N*.5+.5,v.y=G*.5*E+.5,g.push(v.x,v.y),y++}for(let D=0;D<s;D++){let F=b+D,L=P+D;S===!0?u.push(L,L+1,F):u.push(L+1,L,F),h+=3}l.addGroup(f,h,S===!0?1:2),f+=h}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var oa=class i extends Be{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};let r=[],a=[];o(s),l(n),u(),this.setAttribute("position",new ue(r,3)),this.setAttribute("normal",new ue(r.slice(),3)),this.setAttribute("uv",new ue(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(w){let C=new B,S=new B,b=new B;for(let v=0;v<e.length;v+=3)g(e[v+0],C),g(e[v+1],S),g(e[v+2],b),c(C,S,b,w)}function c(w,C,S,b){let v=b+1,A=[];for(let h=0;h<=v;h++){A[h]=[];let x=w.clone().lerp(S,h/v),E=C.clone().lerp(S,h/v),P=v-h;for(let D=0;D<=P;D++)D===0&&h===v?A[h][D]=x:A[h][D]=x.clone().lerp(E,D/P)}for(let h=0;h<v;h++)for(let x=0;x<2*(v-h)-1;x++){let E=Math.floor(x/2);x%2===0?(d(A[h][E+1]),d(A[h+1][E]),d(A[h][E])):(d(A[h][E+1]),d(A[h+1][E+1]),d(A[h+1][E]))}}function l(w){let C=new B;for(let S=0;S<r.length;S+=3)C.x=r[S+0],C.y=r[S+1],C.z=r[S+2],C.normalize().multiplyScalar(w),r[S+0]=C.x,r[S+1]=C.y,r[S+2]=C.z}function u(){let w=new B;for(let C=0;C<r.length;C+=3){w.x=r[C+0],w.y=r[C+1],w.z=r[C+2];let S=m(w)/2/Math.PI+.5,b=f(w)/Math.PI+.5;a.push(S,1-b)}y(),p()}function p(){for(let w=0;w<a.length;w+=6){let C=a[w+0],S=a[w+2],b=a[w+4],v=Math.max(C,S,b),A=Math.min(C,S,b);v>.9&&A<.1&&(C<.2&&(a[w+0]+=1),S<.2&&(a[w+2]+=1),b<.2&&(a[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function g(w,C){let S=w*3;C.x=t[S+0],C.y=t[S+1],C.z=t[S+2]}function y(){let w=new B,C=new B,S=new B,b=new B,v=new Ut,A=new Ut,h=new Ut;for(let x=0,E=0;x<r.length;x+=9,E+=6){w.set(r[x+0],r[x+1],r[x+2]),C.set(r[x+3],r[x+4],r[x+5]),S.set(r[x+6],r[x+7],r[x+8]),v.set(a[E+0],a[E+1]),A.set(a[E+2],a[E+3]),h.set(a[E+4],a[E+5]),b.copy(w).add(C).add(S).divideScalar(3);let P=m(b);T(v,E+0,w,P),T(A,E+2,C,P),T(h,E+4,S,P)}}function T(w,C,S,b){b<0&&w.x===1&&(a[C]=w.x-1),S.x===0&&S.z===0&&(a[C]=b/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function f(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.vertices,t.indices,t.radius,t.detail)}};function ad(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Ch(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(n&&(r=ud(i,t,r,e)),i.length>80*e){o=i[0],c=i[1];let u=o,p=c;for(let d=e;d<s;d+=e){let g=i[d],y=i[d+1];g<o&&(o=g),y<c&&(c=y),g>u&&(u=g),y>p&&(p=y)}l=Math.max(u-o,p-c),l=l!==0?32767/l:0}return Ks(r,a,e,o,c,l,0),a}function Ch(i,t,e,n,s){let r;if(s===Md(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Lc(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Lc(a/n|0,i[a],i[a+1],r);return r&&hs(r,r.next)&&(Qs(r),r=r.next),r}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(hs(e,e.next)||Me(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ks(i,t,e,n,s,r,a){if(!i)return;!a&&r&&gd(i,n,s,r);let o=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?ld(i,n,s,r):od(i)){t.push(c.i,i.i,l.i),Qs(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=cd(Ei(i),t),Ks(i,t,e,n,s,r,2)):a===2&&hd(i,t,e,n,s,r):Ks(Ei(i),t,e,n,s,r,1);break}}}function od(i){let t=i.prev,e=i,n=i.next;if(Me(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,c=e.y,l=n.y,u=Math.min(s,r,a),p=Math.min(o,c,l),d=Math.max(s,r,a),g=Math.max(o,c,l),y=n.next;for(;y!==t;){if(y.x>=u&&y.x<=d&&y.y>=p&&y.y<=g&&Ns(s,o,r,c,a,l,y.x,y.y)&&Me(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function ld(i,t,e,n){let s=i.prev,r=i,a=i.next;if(Me(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,u=s.y,p=r.y,d=a.y,g=Math.min(o,c,l),y=Math.min(u,p,d),T=Math.max(o,c,l),m=Math.max(u,p,d),f=el(g,y,t,e,n),w=el(T,m,t,e,n),C=i.prevZ,S=i.nextZ;for(;C&&C.z>=f&&S&&S.z<=w;){if(C.x>=g&&C.x<=T&&C.y>=y&&C.y<=m&&C!==s&&C!==a&&Ns(o,u,c,p,l,d,C.x,C.y)&&Me(C.prev,C,C.next)>=0||(C=C.prevZ,S.x>=g&&S.x<=T&&S.y>=y&&S.y<=m&&S!==s&&S!==a&&Ns(o,u,c,p,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;C&&C.z>=f;){if(C.x>=g&&C.x<=T&&C.y>=y&&C.y<=m&&C!==s&&C!==a&&Ns(o,u,c,p,l,d,C.x,C.y)&&Me(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;S&&S.z<=w;){if(S.x>=g&&S.x<=T&&S.y>=y&&S.y<=m&&S!==s&&S!==a&&Ns(o,u,c,p,l,d,S.x,S.y)&&Me(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function cd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!hs(n,s)&&Ph(n,e,e.next,s)&&js(n,s)&&js(s,n)&&(t.push(n.i,e.i,s.i),Qs(e),Qs(e.next),e=i=s),e=e.next}while(e!==i);return Ei(e)}function hd(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&yd(a,o)){let c=Ih(a,o);a=Ei(a,a.next),c=Ei(c,c.next),Ks(a,t,e,n,s,r,0),Ks(c,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function ud(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,c=r<a-1?t[r+1]*n:i.length,l=Ch(i,o,c,n,!1);l===l.next&&(l.steiner=!0),s.push(xd(l))}s.sort(dd);for(let r=0;r<s.length;r++)e=fd(s[r],e);return e}function dd(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function fd(i,t){let e=pd(i,t);if(!e)return t;let n=Ih(e,i);return Ei(n,n.next),Ei(e,e.next)}function pd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(hs(i,e))return e;do{if(hs(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let p=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(p<=n&&p>r&&(r=p,a=e.x<e.next.x?e:e.next,p===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,c=a.x,l=a.y,u=1/0;e=a;do{if(n>=e.x&&e.x>=c&&n!==e.x&&Rh(s<l?n:r,s,c,l,s<l?r:n,s,e.x,e.y)){let p=Math.abs(s-e.y)/(n-e.x);js(e,i)&&(p<u||p===u&&(e.x>a.x||e.x===a.x&&md(a,e)))&&(a=e,u=p)}e=e.next}while(e!==o);return a}function md(i,t){return Me(i.prev,i,t.prev)<0&&Me(t.next,i,i.next)<0}function gd(i,t,e,n){let s=i;do s.z===0&&(s.z=el(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,_d(s)}function _d(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let l=0;l<e&&(o++,a=a.nextZ,!!a);l++);let c=e;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function el(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function xd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Rh(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ns(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Rh(i,t,e,n,s,r,a,o)}function yd(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!vd(i,t)&&(js(i,t)&&js(t,i)&&Sd(i,t)&&(Me(i.prev,i,t.prev)||Me(i,t.prev,t))||hs(i,t)&&Me(i.prev,i,i.next)>0&&Me(t.prev,t,t.next)>0)}function Me(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function hs(i,t){return i.x===t.x&&i.y===t.y}function Ph(i,t,e,n){let s=Hr(Me(i,t,e)),r=Hr(Me(i,t,n)),a=Hr(Me(e,n,i)),o=Hr(Me(e,n,t));return!!(s!==r&&a!==o||s===0&&Gr(i,e,t)||r===0&&Gr(i,n,t)||a===0&&Gr(e,i,n)||o===0&&Gr(e,t,n))}function Gr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Hr(i){return i>0?1:i<0?-1:0}function vd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ph(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function js(i,t){return Me(i.prev,i,i.next)<0?Me(i,t,i.next)>=0&&Me(i,i.prev,t)>=0:Me(i,t,i.prev)<0||Me(i,i.next,t)<0}function Sd(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Ih(i,t){let e=nl(i.i,i.x,i.y),n=nl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Lc(i,t,e,n){let s=nl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function nl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Md(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var il=class{static triangulate(t,e,n=2){return ad(t,e,n)}},tr=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Dc(t),Nc(n,t);let a=t.length;e.forEach(Dc);for(let c=0;c<e.length;c++)s.push(a),a+=e[c].length,Nc(n,e[c]);let o=il.triangulate(n,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Dc(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Nc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var er=class i extends oa{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new i(t.radius,t.detail)}};var Ti=class i extends Be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,p=t/o,d=e/c,g=[],y=[],T=[],m=[];for(let f=0;f<u;f++){let w=f*d-a;for(let C=0;C<l;C++){let S=C*p-r;y.push(S,-w,0),T.push(0,0,1),m.push(C/o),m.push(1-f/c)}}for(let f=0;f<c;f++)for(let w=0;w<o;w++){let C=w+l*f,S=w+l*(f+1),b=w+1+l*(f+1),v=w+1+l*f;g.push(C,S,v),g.push(S,b,v)}this.setIndex(g),this.setAttribute("position",new ue(y,3)),this.setAttribute("normal",new ue(T,3)),this.setAttribute("uv",new ue(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};function Pi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Uc(s))s.isRenderTargetTexture?(zt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Uc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function Xe(i){let t={};for(let e=0;e<i.length;e++){let n=Pi(i[e]);for(let s in n)t[s]=n[s]}return t}function Uc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function bd(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Il(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}var Lh={clone:Pi,merge:Xe},wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ed=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends si{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wd,this.fragmentShader=Ed,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pi(t.uniforms),this.uniformsGroups=bd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Bt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ut().fromArray(s.value);break;case"v3":this.uniforms[n].value=new B().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Se().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ht().fromArray(s.value);break;case"m4":this.uniforms[n].value=new he().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},la=class extends ln{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var bn=class extends si{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=uo,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=wa,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},us=class extends si{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},ca=class extends si{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function $i(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function $o(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ai=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ha=class extends ai{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:jo,endingEnd:jo}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Qo:r=t,o=2*e-n;break;case tl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Qo:a=t,c=2*n-e;break;case tl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,p=this._offsetNext,d=this._weightPrev,g=this._weightNext,y=(n-e)/(s-e),T=y*y,m=T*y,f=-d*m+2*d*T-d*y,w=(1+d)*m+(-1.5-2*d)*T+(-.5+d)*y+1,C=(-1-g)*m+(1.5+g)*T+.5*y,S=g*m-g*T;for(let b=0;b!==o;++b)r[b]=f*a[u+b]+w*a[l+b]+C*a[c+b]+S*a[p+b];return r}},ua=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),p=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*p+a[c+d]*u;return r}},da=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},fa=class extends ai{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,p=this.outTangents;if(!u||!p){let y=(n-e)/(s-e),T=1-y;for(let m=0;m!==o;++m)r[m]=a[l+m]*T+a[c+m]*y;return r}let d=o*2,g=t-1;for(let y=0;y!==o;++y){let T=a[l+y],m=a[c+y],f=g*d+y*2,w=p[f],C=p[f+1],S=t*d+y*2,b=u[S],v=u[S+1],A=Ad(n,e,w,b,s);r[y]=Dh(A,T,C,v,m)}return r}};function Dh(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Td(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Ad(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Dh(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Td(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var cn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=$i(e,this.TimeBufferType),this.values=$i(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:$i(t.times,Array),values:$i(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),$o(t.settings)&&(n.settings={inTangents:$i(t.settings.inTangents,Array),outTangents:$i(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new da(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ua(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ha(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new fa(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Os:e=this.InterpolantFactoryMethodDiscrete;break;case na:e=this.InterpolantFactoryMethodLinear;break;case qr:e=this.InterpolantFactoryMethodSmooth;break;case Ko:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return zt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Os;case this.InterpolantFactoryMethodLinear:return na;case this.InterpolantFactoryMethodSmooth:return qr;case this.InterpolantFactoryMethodBezier:return Ko}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;$o(this.settings)&&(Fc(this.settings.inTangents,t),Fc(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){kt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){kt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&wu(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){kt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qr,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let p=o*n,d=p-n,g=p+n;for(let y=0;y!==n;++y){let T=e[p+y];if(T!==e[d+y]||T!==e[g+y]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let p=o*n,d=a*n;for(let g=0;g!==n;++g)e[d+g]=e[p+g]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,$o(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Fc(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}cn.prototype.ValueTypeName="";cn.prototype.TimeBufferType=Float32Array;cn.prototype.ValueBufferType=Float32Array;cn.prototype.DefaultInterpolation=na;var oi=class extends cn{constructor(t,e,n){super(t,e,n)}};oi.prototype.ValueTypeName="bool";oi.prototype.ValueBufferType=Array;oi.prototype.DefaultInterpolation=Os;oi.prototype.InterpolantFactoryMethodLinear=void 0;oi.prototype.InterpolantFactoryMethodSmooth=void 0;var pa=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};pa.prototype.ValueTypeName="color";var ma=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};ma.prototype.ValueTypeName="number";var ga=class extends ai{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)$e.slerpFlat(r,0,a,l-o,a,l,c);return r}},nr=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new ga(this.times,this.values,this.getValueSize(),t)}};nr.prototype.ValueTypeName="quaternion";nr.prototype.InterpolantFactoryMethodSmooth=void 0;var li=class extends cn{constructor(t,e,n){super(t,e,n)}};li.prototype.ValueTypeName="string";li.prototype.ValueBufferType=Array;li.prototype.DefaultInterpolation=Os;li.prototype.InterpolantFactoryMethodLinear=void 0;li.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends cn{constructor(t,e,n,s){super(t,e,n,s)}};_a.prototype.ValueTypeName="vector";var xa=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,p){return l.push(u,p),this},this.removeHandler=function(u){let p=l.indexOf(u);return p!==-1&&l.splice(p,2),this},this.getHandler=function(u){for(let p=0,d=l.length;p<d;p+=2){let g=l[p],y=l[p+1];if(g.global&&(g.lastIndex=0),g.test(u))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Nh=new xa,ya=class{constructor(t){this.manager=t!==void 0?t:Nh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ya.DEFAULT_MATERIAL_NAME="__DEFAULT";var ir=class extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},sr=class extends ir{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Jo=new he,Oc=new B,Bc=new B,va=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ls,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new Se(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Oc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Oc),Bc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bc),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Jo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Jo,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===es||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Jo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Wr=new B,Xr=new $e,In=new B,rr=class extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Sn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Wr,Xr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,In.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Wr,Xr,In),In.x===1&&In.y===1&&In.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wr,Xr,In.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ei=new B,zc=new Ut,kc=new Ut,He=class extends rr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=is*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return is*2*Math.atan(Math.tan(Us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ei.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ei.x,ei.y).multiplyScalar(-t/ei.z),ei.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ei.x,ei.y).multiplyScalar(-t/ei.z)}getViewSize(t,e){return this.getViewBounds(t,zc,kc),e.subVectors(kc,zc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ds=class extends rr{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},sl=class extends va{constructor(){super(new ds(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ar=class extends ir{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new sl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Ji=-90,Ki=1,Sa=class extends We{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new He(Ji,Ki,t,e);s.layers=this.layers,this.add(s);let r=new He(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let a=new He(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let o=new He(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let c=new He(Ji,Ki,t,e);c.layers=this.layers,this.add(c);let l=new He(Ji,Ki,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===Sn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,p=t.getRenderTarget(),d=t.getActiveCubeFace(),g=t.getActiveMipmapLevel(),y=t.xr.enabled;t.xr.enabled=!1;let T=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=T,t.setRenderTarget(n,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(p,d,g),t.xr.enabled=y,n.texture.needsPMREMUpdate=!0}},Ma=class extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ll="\\[\\]\\.:\\/",Cd=new RegExp("["+Ll+"]","g"),Dl="[^"+Ll+"]",Rd="[^"+Ll.replace("\\.","")+"]",Pd=/((?:WC+[\/:])*)/.source.replace("WC",Dl),Id=/(WCOD+)?/.source.replace("WCOD",Rd),Ld=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dl),Dd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dl),Nd=new RegExp("^"+Pd+Id+Ld+Dd+"$"),Ud=["material","materials","bones","map"],rl=class{constructor(t,e,n){let s=n||ve.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ve=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Cd,"")}static parseTrackName(t){let e=Nd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Ud.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){zt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ve.Composite=rl;ve.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ve.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ve.prototype.GetterByBindingType=[ve.prototype._getValue_direct,ve.prototype._getValue_array,ve.prototype._getValue_arrayElement,ve.prototype._getValue_toArray];ve.prototype.SetterByBindingTypeAndVersioning=[[ve.prototype._setValue_direct,ve.prototype._setValue_direct_setNeedsUpdate,ve.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_array,ve.prototype._setValue_array_setNeedsUpdate,ve.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_arrayElement,ve.prototype._setValue_arrayElement_setNeedsUpdate,ve.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ve.prototype._setValue_fromArray,ve.prototype._setValue_fromArray_setNeedsUpdate,ve.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var e_=new Float32Array(1);var Vc=new he,or=class{constructor(t,e,n=0,s=1/0){this.ray=new bi(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new rs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):kt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Vc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vc),this}intersectObject(t,e=!0,n=[]){return al(t,this,n,e),n.sort(Gc),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)al(t[s],this,n,e);return n.sort(Gc),n}};function Gc(i,t){return i.distance-t.distance}function al(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)al(r[a],t,e,!0)}}var fs=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=jt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(jt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var zl=class zl{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};zl.prototype.isMatrix2=!0;var ol=zl;var lr=class extends Mn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Nl(i,t,e,n){let s=Fd(n);switch(e){case El:return i*t;case Ia:return i*t/s.components*s.byteLength;case La:return i*t/s.components*s.byteLength;case di:return i*t*2/s.components*s.byteLength;case Da:return i*t*2/s.components*s.byteLength;case Tl:return i*t*3/s.components*s.byteLength;case mn:return i*t*4/s.components*s.byteLength;case Na:return i*t*4/s.components*s.byteLength;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case pr:case mr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fa:case Ba:return Math.max(i,16)*Math.max(t,8)/4;case Ua:case Oa:return Math.max(i,8)*Math.max(t,8)/2;case za:case ka:case Ga:case Ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Va:case gr:case Wa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Xa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ya:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case $a:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ja:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case to:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case no:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case so:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ro:case ao:case oo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case lo:case co:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _r:case ho:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Fd(i){switch(i){case Qe:case Sl:return{byteLength:1,components:1};case gs:case Ml:case An:return{byteLength:2,components:1};case Ra:case Pa:return{byteLength:2,components:4};case Tn:case Ca:case pn:return{byteLength:4,components:1};case bl:case wl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?zt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function nu(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Bd(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){let u=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,u);else{p.sort((g,y)=>g.start-y.start);let d=0;for(let g=1;g<p.length;g++){let y=p[d],T=p[g];T.start<=y.start+y.count+1?y.count=Math.max(y.count,T.start+T.count-y.start):(++d,p[d]=T)}p.length=d+1;for(let g=0,y=p.length;g<y;g++){let T=p[g];i.bufferSubData(l,T.start*u.BYTES_PER_ELEMENT,u,T.start,T.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kd=`#ifdef USE_ALPHAHASH
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
#endif`,Vd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xd=`#ifdef USE_AOMAP
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
#endif`,qd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yd=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$d=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Jd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jd=`#ifdef USE_IRIDESCENCE
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
#endif`,Qd=`#ifdef USE_BUMPMAP
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
#endif`,tf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ef=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,af=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`#define PI 3.141592653589793
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
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
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
} // validated`,hf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,uf=`vec3 transformedNormal = objectNormal;
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
#endif`,df=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ff=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gf="gl_FragColor = linearToOutputTexel( gl_FragColor );",_f=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vf=`#ifdef USE_ENVMAP
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
#endif`,Sf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ef=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Tf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Af=`#ifdef USE_GRADIENTMAP
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
}`,Cf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Rf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,If=`uniform bool receiveShadow;
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
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
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
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
#endif
#include <lightprobes_pars_fragment>`,Lf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
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
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Df=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Uf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ff=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Of=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,Bf=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
		return 0.5 / max( gv + gl, EPSILON );
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,zf=`
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
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
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
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vf=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Hf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$f=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jf=`#if defined( USE_POINTS_UV )
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
#endif`,Kf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ep=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,np=`#ifdef USE_MORPHTARGETS
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
#endif`,ip=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#ifdef DOUBLE_SIDED
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
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ap=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,op=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,cp=`#ifdef USE_NORMALMAP
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
#endif`,hp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,up=`#ifdef USE_CLEARCOAT_NORMALMAP
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
#endif`,fp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,gp=`#ifdef PREMULTIPLIED_ALPHA
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
#endif`,vp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
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
#endif`,wp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,Tp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ap=`#ifdef USE_SKINNING
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
#endif`,Cp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Rp=`#ifdef USE_SKINNING
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
#endif`,Pp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ip=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Lp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Dp=`#ifndef saturate
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
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Up=`#ifdef USE_TRANSMISSION
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
#endif`,kp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vp=`uniform sampler2D t2D;
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
}`,Hp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qp=`#include <common>
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Zp=`#define DISTANCE
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
}`,$p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Jp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jp=`uniform float scale;
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
}`,Qp=`uniform vec3 diffuse;
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
}`,tm=`#include <common>
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
}`,em=`uniform vec3 diffuse;
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
}`,nm=`#define LAMBERT
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
}`,im=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,sm=`#define MATCAP
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
}`,rm=`#define MATCAP
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
}`,am=`#define NORMAL
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
}`,om=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,lm=`#define PHONG
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
}`,cm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,hm=`#define STANDARD
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
}`,um=`#define STANDARD
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
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,dm=`#define TOON
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
}`,fm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,pm=`uniform float size;
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
}`,mm=`uniform vec3 diffuse;
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
}`,gm=`#include <common>
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
}`,_m=`uniform vec3 color;
uniform float opacity;
#include <common>
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
	#include <premultiplied_alpha_fragment>
}`,xm=`uniform float rotation;
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
}`,ym=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:zd,alphahash_pars_fragment:kd,alphamap_fragment:Vd,alphamap_pars_fragment:Gd,alphatest_fragment:Hd,alphatest_pars_fragment:Wd,aomap_fragment:Xd,aomap_pars_fragment:qd,batching_pars_vertex:Yd,batching_vertex:Zd,begin_vertex:$d,beginnormal_vertex:Jd,bsdfs:Kd,iridescence_fragment:jd,bumpmap_pars_fragment:Qd,clipping_planes_fragment:tf,clipping_planes_pars_fragment:ef,clipping_planes_pars_vertex:nf,clipping_planes_vertex:sf,color_fragment:rf,color_pars_fragment:af,color_pars_vertex:of,color_vertex:lf,common:cf,cube_uv_reflection_fragment:hf,defaultnormal_vertex:uf,displacementmap_pars_vertex:df,displacementmap_vertex:ff,emissivemap_fragment:pf,emissivemap_pars_fragment:mf,colorspace_fragment:gf,colorspace_pars_fragment:_f,envmap_fragment:xf,envmap_common_pars_fragment:yf,envmap_pars_fragment:vf,envmap_pars_vertex:Sf,envmap_physical_pars_fragment:Lf,envmap_vertex:Mf,fog_vertex:bf,fog_pars_vertex:wf,fog_fragment:Ef,fog_pars_fragment:Tf,gradientmap_pars_fragment:Af,lightmap_pars_fragment:Cf,lights_lambert_fragment:Rf,lights_lambert_pars_fragment:Pf,lights_pars_begin:If,lights_toon_fragment:Df,lights_toon_pars_fragment:Nf,lights_phong_fragment:Uf,lights_phong_pars_fragment:Ff,lights_physical_fragment:Of,lights_physical_pars_fragment:Bf,lights_fragment_begin:zf,lights_fragment_maps:kf,lights_fragment_end:Vf,lightprobes_pars_fragment:Gf,logdepthbuf_fragment:Hf,logdepthbuf_pars_fragment:Wf,logdepthbuf_pars_vertex:Xf,logdepthbuf_vertex:qf,map_fragment:Yf,map_pars_fragment:Zf,map_particle_fragment:$f,map_particle_pars_fragment:Jf,metalnessmap_fragment:Kf,metalnessmap_pars_fragment:jf,morphinstance_vertex:Qf,morphcolor_vertex:tp,morphnormal_vertex:ep,morphtarget_pars_vertex:np,morphtarget_vertex:ip,normal_fragment_begin:sp,normal_fragment_maps:rp,normal_pars_fragment:ap,normal_pars_vertex:op,normal_vertex:lp,normalmap_pars_fragment:cp,clearcoat_normal_fragment_begin:hp,clearcoat_normal_fragment_maps:up,clearcoat_pars_fragment:dp,iridescence_pars_fragment:fp,opaque_fragment:pp,packing:mp,premultiplied_alpha_fragment:gp,project_vertex:_p,dithering_fragment:xp,dithering_pars_fragment:yp,roughnessmap_fragment:vp,roughnessmap_pars_fragment:Sp,shadowmap_pars_fragment:Mp,shadowmap_pars_vertex:bp,shadowmap_vertex:wp,shadowmask_pars_fragment:Ep,skinbase_vertex:Tp,skinning_pars_vertex:Ap,skinning_vertex:Cp,skinnormal_vertex:Rp,specularmap_fragment:Pp,specularmap_pars_fragment:Ip,tonemapping_fragment:Lp,tonemapping_pars_fragment:Dp,transmission_fragment:Np,transmission_pars_fragment:Up,uv_pars_fragment:Fp,uv_pars_vertex:Op,uv_vertex:Bp,worldpos_vertex:zp,background_vert:kp,background_frag:Vp,backgroundCube_vert:Gp,backgroundCube_frag:Hp,cube_vert:Wp,cube_frag:Xp,depth_vert:qp,depth_frag:Yp,distance_vert:Zp,distance_frag:$p,equirect_vert:Jp,equirect_frag:Kp,linedashed_vert:jp,linedashed_frag:Qp,meshbasic_vert:tm,meshbasic_frag:em,meshlambert_vert:nm,meshlambert_frag:im,meshmatcap_vert:sm,meshmatcap_frag:rm,meshnormal_vert:am,meshnormal_frag:om,meshphong_vert:lm,meshphong_frag:cm,meshphysical_vert:hm,meshphysical_frag:um,meshtoon_vert:dm,meshtoon_frag:fm,points_vert:pm,points_frag:mm,shadow_vert:gm,shadow_frag:_m,sprite_vert:xm,sprite_frag:ym},yt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new B},probesMax:{value:new B},probesResolution:{value:new B}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},Bn={basic:{uniforms:Xe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Xe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},envMapIntensity:{value:1}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Xe([yt.common,yt.specularmap,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Xe([yt.common,yt.envmap,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.roughnessmap,yt.metalnessmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Xe([yt.common,yt.aomap,yt.lightmap,yt.emissivemap,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.gradientmap,yt.fog,yt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Xe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,yt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Xe([yt.points,yt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Xe([yt.common,yt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Xe([yt.common,yt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Xe([yt.common,yt.bumpmap,yt.normalmap,yt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Xe([yt.sprite,yt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distance:{uniforms:Xe([yt.common,yt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distance_vert,fragmentShader:$t.distance_frag},shadow:{uniforms:Xe([yt.lights,yt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Bn.physical={uniforms:Xe([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var mo={r:0,b:0,g:0},vm=new he,iu=new Ht;iu.set(-1,0,0,0,1,0,0,0,1);function Sm(i,t,e,n,s,r){let a=new Bt(0),o=s===!0?0:1,c,l,u=null,p=0,d=null;function g(w){let C=w.isScene===!0?w.background:null;if(C&&C.isTexture){let S=w.backgroundBlurriness>0;C=t.get(C,S)}return C}function y(w){let C=!1,S=g(w);S===null?m(a,o):S&&S.isColor&&(m(S,1),C=!0);let b=i.xr.getEnvironmentBlendMode();b==="additive"?e.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||C)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function T(w,C){let S=g(C);S&&(S.isCubeTexture||S.mapping===hr)?(l===void 0&&(l=new Re(new cs(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Pi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(b,v,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(vm.makeRotationFromEuler(C.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(iu),l.material.toneMapped=Qt.getTransfer(S.colorSpace)!==le,(u!==S||p!==S.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Re(new Ti(2,2),new ln({name:"BackgroundMaterial",uniforms:Pi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:ci,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(S.colorSpace)!==le,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||p!==S.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,p=S.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,C){w.getRGB(mo,Il(i)),e.buffers.color.setClear(mo.r,mo.g,mo.b,C,r)}function f(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,C=1){a.set(w),o=C,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:y,addToRenderList:T,dispose:f}}function Mm(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(P,D,F,L,N){let G=!1,q=p(P,L,F,D);r!==q&&(r=q,l(r.object)),G=g(P,L,F,N),G&&y(P,L,F,N),N!==null&&t.update(N,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,S(P,D,F,L),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(N).buffer))}function c(){return i.createVertexArray()}function l(P){return i.bindVertexArray(P)}function u(P){return i.deleteVertexArray(P)}function p(P,D,F,L){let N=L.wireframe===!0,G=n[D.id];G===void 0&&(G={},n[D.id]=G);let q=P.isInstancedMesh===!0?P.id:0,j=G[q];j===void 0&&(j={},G[q]=j);let Z=j[F.id];Z===void 0&&(Z={},j[F.id]=Z);let $=Z[N];return $===void 0&&($=d(c()),Z[N]=$),$}function d(P){let D=[],F=[],L=[];for(let N=0;N<e;N++)D[N]=0,F[N]=0,L[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:F,attributeDivisors:L,object:P,attributes:{},index:null}}function g(P,D,F,L){let N=r.attributes,G=D.attributes,q=0,j=F.getAttributes();for(let Z in j)if(j[Z].location>=0){let J=N[Z],dt=G[Z];if(dt===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(dt=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(dt=P.instanceColor)),J===void 0||J.attribute!==dt||dt&&J.data!==dt.data)return!0;q++}return r.attributesNum!==q||r.index!==L}function y(P,D,F,L){let N={},G=D.attributes,q=0,j=F.getAttributes();for(let Z in j)if(j[Z].location>=0){let J=G[Z];J===void 0&&(Z==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),Z==="instanceColor"&&P.instanceColor&&(J=P.instanceColor));let dt={};dt.attribute=J,J&&J.data&&(dt.data=J.data),N[Z]=dt,q++}r.attributes=N,r.attributesNum=q,r.index=L}function T(){let P=r.newAttributes;for(let D=0,F=P.length;D<F;D++)P[D]=0}function m(P){f(P,0)}function f(P,D){let F=r.newAttributes,L=r.enabledAttributes,N=r.attributeDivisors;F[P]=1,L[P]===0&&(i.enableVertexAttribArray(P),L[P]=1),N[P]!==D&&(i.vertexAttribDivisor(P,D),N[P]=D)}function w(){let P=r.newAttributes,D=r.enabledAttributes;for(let F=0,L=D.length;F<L;F++)D[F]!==P[F]&&(i.disableVertexAttribArray(F),D[F]=0)}function C(P,D,F,L,N,G,q){q===!0?i.vertexAttribIPointer(P,D,F,N,G):i.vertexAttribPointer(P,D,F,L,N,G)}function S(P,D,F,L){T();let N=L.attributes,G=F.getAttributes(),q=D.defaultAttributeValues;for(let j in G){let Z=G[j];if(Z.location>=0){let $=N[j];if($===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&($=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&($=P.instanceColor)),$!==void 0){let J=$.normalized,dt=$.itemSize,Mt=t.get($);if(Mt===void 0)continue;let Ot=Mt.buffer,Zt=Mt.type,ee=Mt.bytesPerElement,Q=Zt===i.INT||Zt===i.UNSIGNED_INT||$.gpuType===Ca;if($.isInterleavedBufferAttribute){let st=$.data,ct=st.stride,Vt=$.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<Z.locationSize;bt++)f(Z.location+bt,st.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<Z.locationSize;bt++)m(Z.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let bt=0;bt<Z.locationSize;bt++)C(Z.location+bt,dt/Z.locationSize,Zt,J,ct*ee,(Vt+dt/Z.locationSize*bt)*ee,Q)}else{if($.isInstancedBufferAttribute){for(let st=0;st<Z.locationSize;st++)f(Z.location+st,$.meshPerAttribute);P.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let st=0;st<Z.locationSize;st++)m(Z.location+st);i.bindBuffer(i.ARRAY_BUFFER,Ot);for(let st=0;st<Z.locationSize;st++)C(Z.location+st,dt/Z.locationSize,Zt,J,dt*ee,dt/Z.locationSize*st*ee,Q)}}else if(q!==void 0){let J=q[j];if(J!==void 0)switch(J.length){case 2:i.vertexAttrib2fv(Z.location,J);break;case 3:i.vertexAttrib3fv(Z.location,J);break;case 4:i.vertexAttrib4fv(Z.location,J);break;default:i.vertexAttrib1fv(Z.location,J)}}}}w()}function b(){x();for(let P in n){let D=n[P];for(let F in D){let L=D[F];for(let N in L){let G=L[N];for(let q in G)u(G[q].object),delete G[q];delete L[N]}}delete n[P]}}function v(P){if(n[P.id]===void 0)return;let D=n[P.id];for(let F in D){let L=D[F];for(let N in L){let G=L[N];for(let q in G)u(G[q].object),delete G[q];delete L[N]}}delete n[P.id]}function A(P){for(let D in n){let F=n[D];for(let L in F){let N=F[L];if(N[P.id]===void 0)continue;let G=N[P.id];for(let q in G)u(G[q].object),delete G[q];delete N[P.id]}}}function h(P){for(let D in n){let F=n[D],L=P.isInstancedMesh===!0?P.id:0,N=F[L];if(N!==void 0){for(let G in N){let q=N[G];for(let j in q)u(q[j].object),delete q[j];delete N[G]}delete F[L],Object.keys(F).length===0&&delete n[D]}}}function x(){E(),a=!0,r!==s&&(r=s,l(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:x,resetDefaultState:E,dispose:b,releaseStatesOfGeometry:v,releaseStatesOfObject:h,releaseStatesOfProgram:A,initAttributes:T,enableAttribute:m,disableUnusedAttributes:w}}function bm(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let g=0;g<u;g++)d+=l[g];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function wm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==mn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let h=A===An&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Qe&&A!==pn&&!h&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(zt("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let p=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&zt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),C=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:y,maxTextureSize:T,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:S,maxSamples:b,samples:v}}function Em(i){let t=this,e=null,n=0,s=!1,r=!1,a=new an,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){let g=p.length!==0||d||n!==0||s;return s=d,n=p.length,g},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,d){e=u(p,d,0)},this.setState=function(p,d,g){let y=p.clippingPlanes,T=p.clipIntersection,m=p.clipShadows,f=i.get(p);if(!s||y===null||y.length===0||r&&!m)r?u(null):l();else{let w=r?0:n,C=w*4,S=f.clippingState||null;c.value=S,S=u(y,d,C,g);for(let b=0;b!==C;++b)S[b]=e[b];f.clippingState=S,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(p,d,g,y){let T=p!==null?p.length:0,m=null;if(T!==0){if(m=c.value,y!==!0||m===null){let f=g+T*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<f)&&(m=new Float32Array(f));for(let C=0,S=g;C!==T;++C,S+=4)a.copy(p[C]).applyMatrix4(w,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,m}}var vs=4,Tm=6,Am=20,Cm=256,xr=new ds,Uh=new Bt,kl=null,Vl=0,Gl=0,Hl=!1,Rm=new B,Ii=new B,_o=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Rm}=r;kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Bh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(kl,Vl,Gl),this._renderer.xr.enabled=Hl,t.scissorTest=!1,ys(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hi||t.mapping===Ri?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),kl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Hl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ce,minFilter:Ce,generateMipmaps:!1,type:An,format:mn,colorSpace:Bs,depthBuffer:!1},s=Fh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fh(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pm(r)),this._blurMaterial=Lm(r,t,e),this._ggxMaterial=Im(r,t,e)}return s}_compileMaterial(t){let e=new Re(new Be,t);this._renderer.compile(e,xr)}_sceneToCubeUV(t,e,n,s,r){let c=new He(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(Uh),p.toneMapping=En,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(s),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new cs,new wi({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let T=this._backgroundBox,m=T.material,f=!1,w=t.background;w?w.isColor&&(m.color.copy(w),t.background=null,f=!0):(m.color.copy(Uh),f=!0);for(let C=0;C<6;C++){let S=C%3;S===0?(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[C],r.y,r.z)):S===1?(c.up.set(0,0,l[C]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[C],r.z)):(c.up.set(0,l[C],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[C]));let b=this._cubeSize;ys(s,S*b,C>2?b:0,b,b),p.setRenderTarget(s),f&&p.render(T,c),p.render(t,c)}p.toneMapping=g,p.autoClear=d,t.background=w}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===hi||t.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Bh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Oh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;ys(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,xr)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),p=Math.sqrt(l*l-u*u),d=l*1.25,g=p*d,{_lodMax:y}=this,T=this._sizeLods[n],m=3*T*(n>y-vs?n-y+vs:0),f=4*(this._cubeSize-T);c.envMap.value=t.texture,c.roughness.value=g,c.mipInt.value=y-e,ys(r,m,f,3*T,2*T),s.setRenderTarget(r),s.render(o,xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=y-n,ys(t,m,f,3*T,2*T),s.setRenderTarget(t),s.render(o,xr)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],p=3*u*(s>this._lodMax-vs?s-this._lodMax+vs:0),d=4*(this._cubeSize-u);ys(e,p,d,3*u,2*u),a.setRenderTarget(e),a.render(c,xr)}};function Pm(i){let t=[],e=[],n=i,s=i-vs+1+Tm;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,d=6,g=3,y=new Float32Array(g*d*p),T=new Float32Array(g*d*p);for(let f=0;f<p;f++){let w=f%3*2/3-1,C=f>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(S,g*d*f);for(let b=0;b<d;b++){let v=u[b*2]*2-1,A=u[b*2+1]*2-1;f===0?Ii.set(1,A,v):f===1?Ii.set(-v,1,-A):f===2?Ii.set(-v,A,1):f===3?Ii.set(-1,A,-v):f===4?Ii.set(-v,-1,A):Ii.set(v,A,-1),Ii.toArray(T,(f*d+b)*g)}}let m=new Be;m.setAttribute("position",new on(y,g)),m.setAttribute("outputDirection",new on(T,g)),e.push(new Re(m,null)),n>vs&&n--}return{lodMeshes:e,sizeLods:t}}function Fh(i,t,e){let n=new je(i,t,e);return n.texture.mapping=hr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ys(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Im(i,t,e){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Cm,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Lm(i,t,e){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:Am,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:vo(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Oh(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vo(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Bh(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function vo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xo=class extends je{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ys(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new cs(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Pi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:Un});r.uniforms.tEquirect.value=e;let a=new Re(s,r),o=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Ce),new Sa(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Dm(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,g=!1){return d==null?null:g?a(d):r(d)}function r(d){if(d&&d.isTexture){let g=d.mapping;if(g===Ea||g===Ta)if(t.has(d)){let y=t.get(d).texture;return o(y,d.mapping)}else{let y=d.image;if(y&&y.height>0){let T=new xo(y.height);return T.fromEquirectangularTexture(i,d),t.set(d,T),d.addEventListener("dispose",l),o(T.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let g=d.mapping,y=g===Ea||g===Ta,T=g===hi||g===Ri;if(y||T){let m=e.get(d),f=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return n===null&&(n=new _o(i)),m=y?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{let w=d.image;return y&&w&&w.height>0||T&&w&&c(w)?(n===null&&(n=new _o(i)),m=y?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function o(d,g){return g===Ea?d.mapping=hi:g===Ta&&(d.mapping=Ri),d}function c(d){let g=0,y=6;for(let T=0;T<y;T++)d[T]!==void 0&&g++;return g===y}function l(d){let g=d.target;g.removeEventListener("dispose",l);let y=t.get(g);y!==void 0&&(t.delete(g),y.dispose())}function u(d){let g=d.target;g.removeEventListener("dispose",u);let y=e.get(g);y!==void 0&&(e.delete(g),y.dispose())}function p(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:p}}function Nm(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&vi("WebGLRenderer: "+n+" extension not supported."),s}}}function Um(i,t,e,n){let s={},r=new WeakMap;function a(p){let d=p.target;d.index!==null&&t.remove(d.index);for(let y in d.attributes)t.remove(d.attributes[y]);d.removeEventListener("dispose",a),delete s[d.id];let g=r.get(d);g&&(t.remove(g),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(p,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(p){let d=p.attributes;for(let g in d)t.update(d[g],i.ARRAY_BUFFER)}function l(p){let d=[],g=p.index,y=p.attributes.position,T=0;if(y===void 0)return;if(g!==null){let w=g.array;T=g.version;for(let C=0,S=w.length;C<S;C+=3){let b=w[C+0],v=w[C+1],A=w[C+2];d.push(b,v,v,A,A,b)}}else{let w=y.array;T=y.version;for(let C=0,S=w.length/3-1;C<S;C+=3){let b=C+0,v=C+1,A=C+2;d.push(b,v,v,A,A,b)}}let m=new(y.count>=65535?Ws:Hs)(d,1);m.version=T;let f=r.get(p);f&&t.remove(f),r.set(p,m)}function u(p){let d=r.get(p);if(d){let g=p.index;g!==null&&d.version<g.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:u}}function Fm(i,t,e){let n;function s(p){n=p}let r,a;function o(p){r=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*a),e.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*a,g),e.update(d,n,g))}function u(p,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let T=0;for(let m=0;m<g;m++)T+=d[m];e.update(T,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Om(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Bm(i,t,e){let n=new WeakMap,s=new Se;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==p){let x=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();let g=o.morphAttributes.position!==void 0,y=o.morphAttributes.normal!==void 0,T=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],C=0;g===!0&&(C=1),y===!0&&(C=2),T===!0&&(C=3);let S=o.attributes.position.count*C,b=1;S>t.maxTextureSize&&(b=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let v=new Float32Array(S*b*4*p),A=new Mi(v,S,b,p);A.type=pn,A.needsUpdate=!0;let h=C*4;for(let E=0;E<p;E++){let P=m[E],D=f[E],F=w[E],L=S*b*4*E;for(let N=0;N<P.count;N++){let G=N*h;g===!0&&(s.fromBufferAttribute(P,N),v[L+G+0]=s.x,v[L+G+1]=s.y,v[L+G+2]=s.z,v[L+G+3]=0),y===!0&&(s.fromBufferAttribute(D,N),v[L+G+4]=s.x,v[L+G+5]=s.y,v[L+G+6]=s.z,v[L+G+7]=0),T===!0&&(s.fromBufferAttribute(F,N),v[L+G+8]=s.x,v[L+G+9]=s.y,v[L+G+10]=s.z,v[L+G+11]=F.itemSize===4?s.w:1)}}d={count:p,texture:A,size:new Ut(S,b)},n.set(o,d),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let T=0;T<l.length;T++)g+=l[T];let y=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",y),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function zm(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,p=l.geometry,d=t.get(l,p);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let g=l.skeleton;r.get(g)!==u&&(g.update(),r.set(g,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var km={[pl]:"LINEAR_TONE_MAPPING",[ml]:"REINHARD_TONE_MAPPING",[gl]:"CINEON_TONE_MAPPING",[_l]:"ACES_FILMIC_TONE_MAPPING",[yl]:"AGX_TONE_MAPPING",[cr]:"NEUTRAL_TONE_MAPPING",[xl]:"CUSTOM_TONE_MAPPING"};function Vm(i,t,e,n,s,r){let a=new je(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Be;l.setAttribute("position",new ue([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ue([0,2,0,0,2,0],2));let u=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

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
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Re(l,u),d=new ds(-1,1,1,-1,0,1),g=null,y=null,T=!1,m,f=null,w=[],C=!1;this.setSize=function(S,b){a.setSize(S,b),o!==null&&o.setSize(S,b),c!==null&&c.setSize(S,b);for(let v=0;v<w.length;v++){let A=w[v];A.setSize&&A.setSize(S,b)}},this.setEffects=function(S){w=S,C=w.length>0&&w[0].isRenderPass===!0;let b=a.width,v=a.height;w.length>0&&o===null&&(o=new je(b,v,{type:An,depthBuffer:!1,stencilBuffer:!1}),c=new je(b,v,{type:An,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<w.length;A++){let h=w[A];h.setSize&&h.setSize(b,v)}},this.begin=function(S,b){if(T||S.toneMapping===En&&w.length===0)return!1;if(f=b,b!==null){let v=b.width,A=b.height;(a.width!==v||a.height!==A)&&this.setSize(v,A)}return C===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=En,!0},this.hasRenderPass=function(){return C},this.end=function(S,b){S.toneMapping=m,T=!0;let v=a,A=o;for(let h=0;h<w.length;h++){let x=w[h];x.enabled!==!1&&(x.render(S,A,v,b),x.needsSwap!==!1&&(v=A,A=A===o?c:o))}if(g!==S.outputColorSpace||y!==S.toneMapping){g=S.outputColorSpace,y=S.toneMapping,u.defines={},Qt.getTransfer(g)===le&&(u.defines.SRGB_TRANSFER="");let h=km[y];h&&(u.defines[h]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,S.setRenderTarget(f),S.render(p,d),f=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var su=new Je,ql=new ri(1,1),ru=new Mi,au=new ra,ou=new Ys,zh=[],kh=[],Vh=new Float32Array(16),Gh=new Float32Array(9),Hh=new Float32Array(4);function Ms(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=zh[s];if(r===void 0&&(r=new Float32Array(s),zh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function So(i,t){let e=kh[t];e===void 0&&(e=new Int32Array(t),kh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Gm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Hm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Wm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Xm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function qm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Hh.set(n),i.uniformMatrix2fv(this.addr,!1,Hh),Ie(e,n)}}function Ym(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Gh.set(n),i.uniformMatrix3fv(this.addr,!1,Gh),Ie(e,n)}}function Zm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;Vh.set(n),i.uniformMatrix4fv(this.addr,!1,Vh),Ie(e,n)}}function $m(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function jm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Qm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function ng(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function ig(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ql.compareFunction=e.isReversedDepthBuffer()?po:fo,r=ql):r=su,e.setTexture2D(t||r,s)}function sg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||au,s)}function rg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||ou,s)}function ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ru,s)}function og(i){switch(i){case 5126:return Gm;case 35664:return Hm;case 35665:return Wm;case 35666:return Xm;case 35674:return qm;case 35675:return Ym;case 35676:return Zm;case 5124:case 35670:return $m;case 35667:case 35671:return Jm;case 35668:case 35672:return Km;case 35669:case 35673:return jm;case 5125:return Qm;case 36294:return tg;case 36295:return eg;case 36296:return ng;case 35678:case 36198:case 36298:case 36306:case 35682:return ig;case 35679:case 36299:case 36307:return sg;case 35680:case 36300:case 36308:case 36293:return rg;case 36289:case 36303:case 36311:case 36292:return ag}}function lg(i,t){i.uniform1fv(this.addr,t)}function cg(i,t){let e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function hg(i,t){let e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function ug(i,t){let e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function dg(i,t){let e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function fg(i,t){let e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function pg(i,t){let e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function mg(i,t){i.uniform1iv(this.addr,t)}function gg(i,t){i.uniform2iv(this.addr,t)}function _g(i,t){i.uniform3iv(this.addr,t)}function xg(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function vg(i,t){i.uniform2uiv(this.addr,t)}function Sg(i,t){i.uniform3uiv(this.addr,t)}function Mg(i,t){i.uniform4uiv(this.addr,t)}function bg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=ql:a=su;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function wg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||au,r[a])}function Eg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ou,r[a])}function Tg(i,t,e){let n=this.cache,s=t.length,r=So(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||ru,r[a])}function Ag(i){switch(i){case 5126:return lg;case 35664:return cg;case 35665:return hg;case 35666:return ug;case 35674:return dg;case 35675:return fg;case 35676:return pg;case 5124:case 35670:return mg;case 35667:case 35671:return gg;case 35668:case 35672:return _g;case 35669:case 35673:return xg;case 5125:return yg;case 36294:return vg;case 36295:return Sg;case 36296:return Mg;case 35678:case 36198:case 36298:case 36306:case 35682:return bg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Eg;case 36289:case 36303:case 36311:case 36292:return Tg}}var Yl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=og(e.type)}},Zl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Ag(e.type)}},$l=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Wl=/(\w+)(\])?(\[|\.)?/g;function Wh(i,t){i.seq.push(t),i.map[t.id]=t}function Cg(i,t,e){let n=i.name,s=n.length;for(Wl.lastIndex=0;;){let r=Wl.exec(n),a=Wl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Wh(e,l===void 0?new Yl(o,i,t):new Zl(o,i,t));break}else{let p=e.map[o];p===void 0&&(p=new $l(o),Wh(e,p)),e=p}}}var Ss=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Cg(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Xh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Rg=37297,Pg=0;function Ig(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var qh=new Ht;function Lg(i){Qt._getMatrix(qh,Qt.workingColorSpace,i);let t=`mat3( ${qh.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case zs:return[t,"LinearTransferOETF"];case le:return[t,"sRGBTransferOETF"];default:return zt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Yh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Ig(i.getShaderSource(t),o)}else return r}function Dg(i,t){let e=Lg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ng={[pl]:"Linear",[ml]:"Reinhard",[gl]:"Cineon",[_l]:"ACESFilmic",[yl]:"AgX",[cr]:"Neutral",[xl]:"Custom"};function Ug(i,t){let e=Ng[t];return e===void 0?(zt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var go=new B;function Fg(){Qt.getLuminanceCoefficients(go);let i=go.x.toFixed(4),t=go.y.toFixed(4),e=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Og(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(vr).join(`
`)}function Bg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function zg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function vr(i){return i!==""}function Zh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function $h(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var kg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(kg,Gg)}var Vg=new Map;function Gg(i,t){let e=$t[t];if(e===void 0){let n=Vg.get(t);if(n!==void 0)e=$t[n],zt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return Jl(e)}var Hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jh(i){return i.replace(Hg,Wg)}function Wg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}var Xg={[Ai]:"SHADOWMAP_TYPE_PCF",[ps]:"SHADOWMAP_TYPE_VSM"};function qg(i){return Xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yg={[hi]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[hr]:"ENVMAP_TYPE_CUBE_UV"};function Zg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $g={[Ri]:"ENVMAP_MODE_REFRACTION"};function Jg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$g[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Kg={[wa]:"ENVMAP_BLENDING_MULTIPLY",[hh]:"ENVMAP_BLENDING_MIX",[uh]:"ENVMAP_BLENDING_ADD"};function jg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Kg[i.combine]||"ENVMAP_BLENDING_NONE"}function Qg(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function t0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=qg(e),l=Zg(e),u=Jg(e),p=jg(e),d=Qg(e),g=Og(e),y=Bg(r),T=s.createProgram(),m,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(vr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y].filter(vr).join(`
`),f.length>0&&(f+=`
`)):(m=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(vr).join(`
`),f=[Kh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,y,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?$t.tonemapping_pars_fragment:"",e.toneMapping!==En?Ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,Dg("linearToOutputTexel",e.outputColorSpace),Fg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(vr).join(`
`)),a=Jl(a),a=Zh(a,e),a=$h(a,e),o=Jl(o),o=Zh(o,e),o=$h(o,e),a=Jh(a),o=Jh(o),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",e.glslVersion===Al?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let C=w+m+a,S=w+f+o,b=Xh(s,s.VERTEX_SHADER,C),v=Xh(s,s.FRAGMENT_SHADER,S);s.attachShader(T,b),s.attachShader(T,v),e.index0AttributeName!==void 0?s.bindAttribLocation(T,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(T,0,"position"),s.linkProgram(T);function A(P){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(T)||"",F=s.getShaderInfoLog(b)||"",L=s.getShaderInfoLog(v)||"",N=D.trim(),G=F.trim(),q=L.trim(),j=!0,Z=!0;if(s.getProgramParameter(T,s.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,T,b,v);else{let $=Yh(s,b,"vertex"),J=Yh(s,v,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(T,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+$+`
`+J)}else N!==""?zt("WebGLProgram: Program Info Log:",N):(G===""||q==="")&&(Z=!1);Z&&(P.diagnostics={runnable:j,programLog:N,vertexShader:{log:G,prefix:m},fragmentShader:{log:q,prefix:f}})}s.deleteShader(b),s.deleteShader(v),h=new Ss(s,T),x=zg(s,T)}let h;this.getUniforms=function(){return h===void 0&&A(this),h};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(T,Rg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(T),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Pg++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=b,this.fragmentShader=v,this}var e0=0,Kl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new jl(t),e.set(t,n)),n}},jl=class{constructor(t){this.id=e0++,this.code=t,this.usedTimes=0}};function n0(i){return i===di||i===gr||i===_r}function i0(i,t,e,n,s,r){let a=new rs,o=new Kl,c=new Set,l=[],u=new Map,p=n.logarithmicDepthBuffer,d=n.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(h){return c.add(h),h===0?"uv":`uv${h}`}function T(h,x,E,P,D,F){let L=P.fog,N=D.geometry,G=h.isMeshStandardMaterial||h.isMeshLambertMaterial||h.isMeshPhongMaterial?P.environment:null,q=h.isMeshStandardMaterial||h.isMeshLambertMaterial&&!h.envMap||h.isMeshPhongMaterial&&!h.envMap,j=t.get(h.envMap||G,q),Z=j&&j.mapping===hr?j.image.height:null,$=g[h.type];h.precision!==null&&(d=n.getMaxPrecision(h.precision),d!==h.precision&&zt("WebGLProgram.getParameters:",h.precision,"not supported, using",d,"instead."));let J=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,dt=J!==void 0?J.length:0,Mt=0;N.morphAttributes.position!==void 0&&(Mt=1),N.morphAttributes.normal!==void 0&&(Mt=2),N.morphAttributes.color!==void 0&&(Mt=3);let Ot,Zt,ee,Q;if($){let fe=Bn[$];Ot=fe.vertexShader,Zt=fe.fragmentShader}else{Ot=h.vertexShader,Zt=h.fragmentShader;let fe=o.getVertexShaderStage(h),ne=o.getFragmentShaderStage(h);o.update(h,fe,ne),ee=fe.id,Q=ne.id}let st=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),Vt=D.isInstancedMesh===!0,bt=D.isBatchedMesh===!0,qt=!!h.map,be=!!h.matcap,Yt=!!j,te=!!h.aoMap,ce=!!h.lightMap,Jt=!!h.bumpMap&&h.wireframe===!1,ie=!!h.normalMap,Ee=!!h.displacementMap,Ne=!!h.emissiveMap,xe=!!h.metalnessMap,re=!!h.roughnessMap,z=h.anisotropy>0,Ue=h.clearcoat>0,Ft=h.dispersion>0,R=h.retroreflectivity>0,_=h.iridescence>0,V=h.sheen>0,Y=h.transmission>0,K=z&&!!h.anisotropyMap,ot=Ue&&!!h.clearcoatMap,ut=Ue&&!!h.clearcoatNormalMap,tt=Ue&&!!h.clearcoatRoughnessMap,it=_&&!!h.iridescenceMap,ft=_&&!!h.iridescenceThicknessMap,It=V&&!!h.sheenColorMap,pt=V&&!!h.sheenRoughnessMap,mt=!!h.specularMap,Lt=!!h.specularColorMap,Nt=!!h.specularIntensityMap,Wt=Y&&!!h.transmissionMap,O=Y&&!!h.thicknessMap,lt=!!h.gradientMap,nt=!!h.alphaMap,ht=h.alphaTest>0,vt=!!h.alphaHash,rt=!!h.extensions,Dt=En;h.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Dt=i.toneMapping);let At={shaderID:$,shaderType:h.type,shaderName:h.name,vertexShader:Ot,fragmentShader:Zt,defines:h.defines,customVertexShaderID:ee,customFragmentShaderID:Q,isRawShaderMaterial:h.isRawShaderMaterial===!0,glslVersion:h.glslVersion,precision:d,batching:bt,batchingColor:bt&&D._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&D.instanceColor!==null,instancingMorph:Vt&&D.morphTexture!==null,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Qt.workingColorSpace,alphaToCoverage:!!h.alphaToCoverage,map:qt,matcap:be,envMap:Yt,envMapMode:Yt&&j.mapping,envMapCubeUVHeight:Z,aoMap:te,lightMap:ce,bumpMap:Jt,normalMap:ie,displacementMap:Ee,emissiveMap:Ne,normalMapObjectSpace:ie&&h.normalMapType===ph,normalMapTangentSpace:ie&&h.normalMapType===uo,packedNormalMap:ie&&h.normalMapType===uo&&n0(h.normalMap.format),metalnessMap:xe,roughnessMap:re,anisotropy:z,anisotropyMap:K,clearcoat:Ue,clearcoatMap:ot,clearcoatNormalMap:ut,clearcoatRoughnessMap:tt,dispersion:Ft,retroreflection:R,iridescence:_,iridescenceMap:it,iridescenceThicknessMap:ft,sheen:V,sheenColorMap:It,sheenRoughnessMap:pt,specularMap:mt,specularColorMap:Lt,specularIntensityMap:Nt,transmission:Y,transmissionMap:Wt,thicknessMap:O,gradientMap:lt,opaque:h.transparent===!1&&h.blending===ms&&h.alphaToCoverage===!1,alphaMap:nt,alphaTest:ht,alphaHash:vt,combine:h.combine,mapUv:qt&&y(h.map.channel),aoMapUv:te&&y(h.aoMap.channel),lightMapUv:ce&&y(h.lightMap.channel),bumpMapUv:Jt&&y(h.bumpMap.channel),normalMapUv:ie&&y(h.normalMap.channel),displacementMapUv:Ee&&y(h.displacementMap.channel),emissiveMapUv:Ne&&y(h.emissiveMap.channel),metalnessMapUv:xe&&y(h.metalnessMap.channel),roughnessMapUv:re&&y(h.roughnessMap.channel),anisotropyMapUv:K&&y(h.anisotropyMap.channel),clearcoatMapUv:ot&&y(h.clearcoatMap.channel),clearcoatNormalMapUv:ut&&y(h.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:tt&&y(h.clearcoatRoughnessMap.channel),iridescenceMapUv:it&&y(h.iridescenceMap.channel),iridescenceThicknessMapUv:ft&&y(h.iridescenceThicknessMap.channel),sheenColorMapUv:It&&y(h.sheenColorMap.channel),sheenRoughnessMapUv:pt&&y(h.sheenRoughnessMap.channel),specularMapUv:mt&&y(h.specularMap.channel),specularColorMapUv:Lt&&y(h.specularColorMap.channel),specularIntensityMapUv:Nt&&y(h.specularIntensityMap.channel),transmissionMapUv:Wt&&y(h.transmissionMap.channel),thicknessMapUv:O&&y(h.thicknessMap.channel),alphaMapUv:nt&&y(h.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(ie||z),vertexNormals:!!N.attributes.normal,vertexColors:h.vertexColors,vertexAlphas:h.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!N.attributes.uv&&(qt||nt),fog:!!L,useFog:h.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:h.wireframe===!1&&(h.flatShading===!0||N.attributes.normal===void 0&&ie===!1&&(h.isMeshLambertMaterial||h.isMeshPhongMaterial||h.isMeshStandardMaterial||h.isMeshPhysicalMaterial)),sizeAttenuation:h.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:ct,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Mt,numSunLights:x.sun.length,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numSunLightShadows:x.sunShadowMap.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:h.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Dt,decodeVideoTexture:qt&&h.map.isVideoTexture===!0&&Qt.getTransfer(h.map.colorSpace)===le,decodeVideoTextureEmissive:Ne&&h.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(h.emissiveMap.colorSpace)===le,premultipliedAlpha:h.premultipliedAlpha,doubleSided:h.side===Nn,flipSided:h.side===Ke,useDepthPacking:h.depthPacking>=0,depthPacking:h.depthPacking||0,index0AttributeName:h.index0AttributeName,extensionClipCullDistance:rt&&h.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(rt&&h.extensions.multiDraw===!0||bt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:h.customProgramCacheKey()};return At.vertexUv1s=c.has(1),At.vertexUv2s=c.has(2),At.vertexUv3s=c.has(3),c.clear(),At}function m(h){let x=[];if(h.shaderID?x.push(h.shaderID):(x.push(h.customVertexShaderID),x.push(h.customFragmentShaderID)),h.defines!==void 0)for(let E in h.defines)x.push(E),x.push(h.defines[E]);return h.isRawShaderMaterial===!1&&(f(x,h),w(x,h),x.push(i.outputColorSpace)),x.push(h.customProgramCacheKey),x.join()}function f(h,x){h.push(x.precision),h.push(x.outputColorSpace),h.push(x.envMapMode),h.push(x.envMapCubeUVHeight),h.push(x.mapUv),h.push(x.alphaMapUv),h.push(x.lightMapUv),h.push(x.aoMapUv),h.push(x.bumpMapUv),h.push(x.normalMapUv),h.push(x.displacementMapUv),h.push(x.emissiveMapUv),h.push(x.metalnessMapUv),h.push(x.roughnessMapUv),h.push(x.anisotropyMapUv),h.push(x.clearcoatMapUv),h.push(x.clearcoatNormalMapUv),h.push(x.clearcoatRoughnessMapUv),h.push(x.iridescenceMapUv),h.push(x.iridescenceThicknessMapUv),h.push(x.sheenColorMapUv),h.push(x.sheenRoughnessMapUv),h.push(x.specularMapUv),h.push(x.specularColorMapUv),h.push(x.specularIntensityMapUv),h.push(x.transmissionMapUv),h.push(x.thicknessMapUv),h.push(x.combine),h.push(x.fogExp2),h.push(x.sizeAttenuation),h.push(x.morphTargetsCount),h.push(x.morphAttributeCount),h.push(x.numSunLights),h.push(x.numDirLights),h.push(x.numPointLights),h.push(x.numSpotLights),h.push(x.numSpotLightMaps),h.push(x.numHemiLights),h.push(x.numRectAreaLights),h.push(x.numSunLightShadows),h.push(x.numDirLightShadows),h.push(x.numPointLightShadows),h.push(x.numSpotLightShadows),h.push(x.numSpotLightShadowsWithMaps),h.push(x.numLightProbes),h.push(x.shadowMapType),h.push(x.toneMapping),h.push(x.numClippingPlanes),h.push(x.numClipIntersection),h.push(x.depthPacking)}function w(h,x){a.disableAll(),x.instancing&&a.enable(0),x.instancingColor&&a.enable(1),x.instancingMorph&&a.enable(2),x.matcap&&a.enable(3),x.envMap&&a.enable(4),x.normalMapObjectSpace&&a.enable(5),x.normalMapTangentSpace&&a.enable(6),x.clearcoat&&a.enable(7),x.iridescence&&a.enable(8),x.alphaTest&&a.enable(9),x.vertexColors&&a.enable(10),x.vertexAlphas&&a.enable(11),x.vertexUv1s&&a.enable(12),x.vertexUv2s&&a.enable(13),x.vertexUv3s&&a.enable(14),x.vertexTangents&&a.enable(15),x.anisotropy&&a.enable(16),x.alphaHash&&a.enable(17),x.batching&&a.enable(18),x.dispersion&&a.enable(19),x.retroreflection&&a.enable(24),x.batchingColor&&a.enable(20),x.gradientMap&&a.enable(21),x.packedNormalMap&&a.enable(22),x.vertexNormals&&a.enable(23),h.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),x.numLightProbeGrids>0&&a.enable(22),x.hasPositionAttribute&&a.enable(23),h.push(a.mask)}function C(h){let x=g[h.type],E;if(x){let P=Bn[x];E=Lh.clone(P.uniforms)}else E=h.uniforms;return E}function S(h,x){let E=u.get(x);return E!==void 0?++E.usedTimes:(E=new t0(i,x,h,s),l.push(E),u.set(x,E)),E}function b(h){if(--h.usedTimes===0){let x=l.indexOf(h);l[x]=l[l.length-1],l.pop(),u.delete(h.cacheKey),h.destroy()}}function v(h){o.remove(h)}function A(){o.dispose()}return{getParameters:T,getProgramCacheKey:m,getUniforms:C,acquireProgram:S,releaseProgram:b,releaseShaderCache:v,programs:l,dispose:A}}function s0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function r0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function jh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Qh(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,y,T,m,f){let w=i[t];return w===void 0?(w={id:d.id,object:d,geometry:g,material:y,materialVariant:a(d),groupOrder:T,renderOrder:d.renderOrder,z:m,group:f},i[t]=w):(w.id=d.id,w.object=d,w.geometry=g,w.material=y,w.materialVariant=a(d),w.groupOrder=T,w.renderOrder=d.renderOrder,w.z=m,w.group=f),t++,w}function c(d,g,y,T,m,f,w){w.reversedDepth===!0&&(m=-m);let C=o(d,g,y,T,m,f);y.transmission>0?n.push(C):y.transparent===!0?s.push(C):e.push(C)}function l(d,g,y,T,m,f){let w=o(d,g,y,T,m,f);y.transmission>0?n.unshift(w):y.transparent===!0?s.unshift(w):e.unshift(w)}function u(d,g){e.length>1&&e.sort(d||r0),n.length>1&&n.sort(g||jh),s.length>1&&s.sort(g||jh)}function p(){for(let d=t,g=i.length;d<g;d++){let y=i[d];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:p,sort:u}}function a0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new Qh,i.set(n,[a])):s>=r.length?(a=new Qh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function o0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Bt};break;case"SpotLight":e={position:new B,direction:new B,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new B,halfWidth:new B,halfHeight:new B};break}return i[t.id]=e,e}}}function l0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var c0=0;function h0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function u0(i){let t=new o0,e=l0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new B);let s=new B,r=new he,a=new he;function o(l){let u=0,p=0,d=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let g=0,y=0,T=0,m=0,f=0,w=0,C=0,S=0,b=0,v=0,A=0,h=0,x=0,E=0;l.sort(h0);for(let D=0,F=l.length;D<F;D++){let L=l[D],N=L.color,G=L.intensity,q=L.distance,j=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===di?j=L.shadow.map.texture:j=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=N.r*G,p+=N.g*G,d+=N.b*G;else if(L.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(L.sh.coefficients[Z],G);E++}else if(L.isSunLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,J=e.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize.copy($.mapSize).multiply($.getFrameExtents()),n.sunShadow[y]=J,n.sunShadowMap[y]=j;let dt=$.getViewportCount();for(let Mt=0;Mt<dt;Mt++)n.sunShadowMatrix[T+Mt]=$.getMatrix(Mt),n.sunShadowCascade[T+Mt]=$._cascadeData[Mt];T+=dt,y++}n.sun[g]=Z,g++}else if(L.isDirectionalLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let $=L.shadow,J=e.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.directionalShadow[m]=J,n.directionalShadowMap[m]=j,n.directionalShadowMatrix[m]=L.shadow.matrix,b++}n.directional[m]=Z,m++}else if(L.isSpotLight){let Z=t.get(L);Z.position.setFromMatrixPosition(L.matrixWorld),Z.color.copy(N).multiplyScalar(G),Z.distance=q,Z.coneCos=Math.cos(L.angle),Z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Z.decay=L.decay,n.spot[w]=Z;let $=L.shadow;if(L.map&&(n.spotLightMap[h]=L.map,h++,$.updateMatrices(L),L.castShadow&&x++),n.spotLightMatrix[w]=$.matrix,L.castShadow){let J=e.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,n.spotShadow[w]=J,n.spotShadowMap[w]=j,A++}w++}else if(L.isRectAreaLight){let Z=t.get(L);Z.color.copy(N).multiplyScalar(G),Z.halfWidth.set(L.width*.5,0,0),Z.halfHeight.set(0,L.height*.5,0),n.rectArea[C]=Z,C++}else if(L.isPointLight){let Z=t.get(L);if(Z.color.copy(L.color).multiplyScalar(L.intensity),Z.distance=L.distance,Z.decay=L.decay,L.castShadow){let $=L.shadow,J=e.get(L);J.shadowIntensity=$.intensity,J.shadowBias=$.bias,J.shadowNormalBias=$.normalBias,J.shadowRadius=$.radius,J.shadowMapSize=$.mapSize,J.shadowCameraNear=$.camera.near,J.shadowCameraFar=$.camera.far,n.pointShadow[f]=J,n.pointShadowMap[f]=j,n.pointShadowMatrix[f]=L.shadow.matrix,v++}n.point[f]=Z,f++}else if(L.isHemisphereLight){let Z=t.get(L);Z.skyColor.copy(L.color).multiplyScalar(G),Z.groundColor.copy(L.groundColor).multiplyScalar(G),n.hemi[S]=Z,S++}}C>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=yt.LTC_FLOAT_1,n.rectAreaLTC2=yt.LTC_FLOAT_2):(n.rectAreaLTC1=yt.LTC_HALF_1,n.rectAreaLTC2=yt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=p,n.ambient[2]=d;let P=n.hash;(P.sunLength!==g||P.directionalLength!==m||P.pointLength!==f||P.spotLength!==w||P.rectAreaLength!==C||P.hemiLength!==S||P.numSunShadows!==y||P.numDirectionalShadows!==b||P.numPointShadows!==v||P.numSpotShadows!==A||P.numSpotMaps!==h||P.numLightProbes!==E)&&(n.sun.length=g,n.directional.length=m,n.spot.length=w,n.rectArea.length=C,n.point.length=f,n.hemi.length=S,n.sunShadow.length=y,n.sunShadowMap.length=y,n.sunShadowMatrix.length=T,n.sunShadowCascade.length=T,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.directionalShadowMatrix.length=b,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+h-x,n.spotLightMap.length=h,n.numSpotLightShadowsWithMaps=x,n.numLightProbes=E,P.sunLength=g,P.directionalLength=m,P.pointLength=f,P.spotLength=w,P.rectAreaLength=C,P.hemiLength=S,P.numSunShadows=y,P.numDirectionalShadows=b,P.numPointShadows=v,P.numSpotShadows=A,P.numSpotMaps=h,P.numLightProbes=E,n.version=c0++)}function c(l,u){let p=0,d=0,g=0,y=0,T=0,m=0,f=u.matrixWorldInverse;for(let w=0,C=l.length;w<C;w++){let S=l[w];if(S.isSunLight){let b=n.sun[p];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),p++}else if(S.isDirectionalLight){let b=n.directional[d];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),d++}else if(S.isSpotLight){let b=n.spot[y];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(f),y++}else if(S.isRectAreaLight){let b=n.rectArea[T];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),a.identity(),r.copy(S.matrixWorld),r.premultiply(f),a.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),T++}else if(S.isPointLight){let b=n.point[g];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(f),g++}else if(S.isHemisphereLight){let b=n.hemi[m];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(f),m++}}}return{setup:o,setupView:c,state:n}}function tu(i){let t=new u0(i),e=[],n=[],s=[];function r(d){p.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function u(d){t.setupView(e,d)}let p={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:p,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function d0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new tu(i),t.set(s,[o])):r>=a.length?(o=new tu(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var f0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,m0=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],g0=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],eu=new he,yr=new B,Xl=new B;function _0(i,t,e){let n=new ls,s=new Ut,r=new Ut,a=new Se,o=new us,c=new ca,l={},u=e.maxTextureSize,p={[ci]:Ke,[Ke]:ci,[Nn]:Nn},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:f0,fragmentShader:p0}),g=d.clone();g.defines.HORIZONTAL_PASS=1;let y=new Be;y.setAttribute("position",new on(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let T=new Re(y,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ai;let f=this.type;this.render=function(v,A,h){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||v.length===0)return;this.type===Xc&&(zt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ai);let x=i.getRenderTarget(),E=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Un),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let F=f!==this.type;F&&A.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(N=>N.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,N=v.length;L<N;L++){let G=v[L],q=G.shadow;if(q===void 0){zt("WebGLShadowMap:",G,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let j=q.getFrameExtents();s.multiply(j),r.copy(q.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,q.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,q.mapSize.y=r.y));let Z=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=Z,q.map===null||F===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ps){if(G.isPointLight){zt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new je(s.x,s.y,{format:di,type:An,minFilter:Ce,magFilter:Ce,generateMipmaps:!1}),q.map.texture.name=G.name+".shadowMap",q.map.depthTexture=new ri(s.x,s.y,pn),q.map.depthTexture.name=G.name+".shadowMapDepth",q.map.depthTexture.format=Ln,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Oe,q.map.depthTexture.magFilter=Oe}else G.isPointLight?(q.map=new xo(s.x),q.map.depthTexture=new aa(s.x,Tn)):(q.map=new je(s.x,s.y),q.map.depthTexture=new ri(s.x,s.y,Tn)),q.map.depthTexture.name=G.name+".shadowMap",q.map.depthTexture.format=Ln,this.type===Ai?(q.map.depthTexture.compareFunction=Z?po:fo,q.map.depthTexture.minFilter=Ce,q.map.depthTexture.magFilter=Ce):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Oe,q.map.depthTexture.magFilter=Oe);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let $=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();G.isPointLight!==!0&&q.updateMatrices(G,h);for(let J=0;J<$;J++){let dt=q.getCamera(J);if(G.isPointLight){let Mt=q.camera,Ot=q.matrix,Zt=G.distance||Mt.far;Zt!==Mt.far&&(Mt.far=Zt,Mt.updateProjectionMatrix()),yr.setFromMatrixPosition(G.matrixWorld),Mt.position.copy(yr),Xl.copy(Mt.position),Xl.add(m0[J]),Mt.up.copy(g0[J]),Mt.lookAt(Xl),Mt.updateMatrixWorld(),Ot.makeTranslation(-yr.x,-yr.y,-yr.z),eu.multiplyMatrices(Mt.projectionMatrix,Mt.matrixWorldInverse),q._frustum.setFromProjectionMatrix(eu,Mt.coordinateSystem,Mt.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,J),i.clear();else{J===0&&(i.setRenderTarget(q.map),i.clear());let Mt=q.getViewport(J);a.set(r.x*Mt.x,r.y*Mt.y,r.x*Mt.z,r.y*Mt.w),D.viewport(a)}n=q.getFrustum(J),S(A,h,dt,G,this.type)}q.isPointLightShadow!==!0&&this.type===ps&&w(q,h),q.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(x,E,P)};function w(v,A){let h=t.update(T);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,g.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),v.mapPass===null?v.mapPass=new je(s.x,s.y,{format:di,type:An}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),d.uniforms.shadow_pass.value=v.map.depthTexture,d.uniforms.resolution.value.set(v.map.width,v.map.height),d.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(A,null,h,d,T,null),g.uniforms.shadow_pass.value=v.mapPass.texture,g.uniforms.resolution.value.set(v.map.width,v.map.height),g.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(A,null,h,g,T,null)}function C(v,A,h,x){let E=null,P=h.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(P!==void 0)E=P;else if(E=h.isPointLight===!0?c:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let D=E.uuid,F=A.uuid,L=l[D];L===void 0&&(L={},l[D]=L);let N=L[F];N===void 0&&(N=E.clone(),L[F]=N,A.addEventListener("dispose",b)),E=N}if(E.visible=A.visible,E.wireframe=A.wireframe,x===ps?E.side=A.shadowSide!==null?A.shadowSide:A.side:E.side=A.shadowSide!==null?A.shadowSide:p[A.side],E.alphaMap=A.alphaMap,E.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,E.map=A.map,E.clipShadows=A.clipShadows,E.clippingPlanes=A.clippingPlanes,E.clipIntersection=A.clipIntersection,E.displacementMap=A.displacementMap,E.displacementScale=A.displacementScale,E.displacementBias=A.displacementBias,E.wireframeLinewidth=A.wireframeLinewidth,E.linewidth=A.linewidth,h.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let D=i.properties.get(E);D.light=h}return E}function S(v,A,h,x,E){if(v.visible===!1)return;if(v.layers.test(A.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&E===ps)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(h.matrixWorldInverse,v.matrixWorld);let F=t.update(v),L=v.material;if(Array.isArray(L)){let N=F.groups;for(let G=0,q=N.length;G<q;G++){let j=N[G],Z=L[j.materialIndex];if(Z&&Z.visible){let $=C(v,Z,x,E);v.onBeforeShadow(i,v,A,h,F,$,j),i.renderBufferDirect(h,null,F,$,v,j),v.onAfterShadow(i,v,A,h,F,$,j)}}}else if(L.visible){let N=C(v,L,x,E);v.onBeforeShadow(i,v,A,h,F,N,null),i.renderBufferDirect(h,null,F,N,v,null),v.onAfterShadow(i,v,A,h,F,N,null)}}let D=v.children;for(let F=0,L=D.length;F<L;F++)S(D[F],A,h,x,E)}function b(v){v.target.removeEventListener("dispose",b);for(let h in l){let x=l[h],E=v.target.uuid;E in x&&(x[E].dispose(),delete x[E])}}}function x0(i,t){function e(){let O=!1,lt=new Se,nt=null,ht=new Se(0,0,0,0);return{setMask:function(vt){nt!==vt&&!O&&(i.colorMask(vt,vt,vt,vt),nt=vt)},setLocked:function(vt){O=vt},setClear:function(vt,rt,Dt,At,fe){fe===!0&&(vt*=At,rt*=At,Dt*=At),lt.set(vt,rt,Dt,At),ht.equals(lt)===!1&&(i.clearColor(vt,rt,Dt,At),ht.copy(lt))},reset:function(){O=!1,nt=null,ht.set(-1,0,0,0)}}}function n(){let O=!1,lt=!1,nt=null,ht=null,vt=null;return{setReversed:function(rt){if(lt!==rt){let Dt=t.get("EXT_clip_control");rt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),lt=rt;let At=vt;vt=null,this.setClear(At)}},getReversed:function(){return lt},setTest:function(rt){rt?st(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(rt){nt!==rt&&!O&&(i.depthMask(rt),nt=rt)},setFunc:function(rt){if(lt&&(rt=Th[rt]),ht!==rt){switch(rt){case Zr:i.depthFunc(i.NEVER);break;case $r:i.depthFunc(i.ALWAYS);break;case Jr:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case Kr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=rt}},setLocked:function(rt){O=rt},setClear:function(rt){vt!==rt&&(vt=rt,lt&&(rt=1-rt),i.clearDepth(rt))},reset:function(){O=!1,nt=null,ht=null,vt=null,lt=!1}}}function s(){let O=!1,lt=null,nt=null,ht=null,vt=null,rt=null,Dt=null,At=null,fe=null;return{setTest:function(ne){O||(ne?st(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(ne){lt!==ne&&!O&&(i.stencilMask(ne),lt=ne)},setFunc:function(ne,en,nn){(nt!==ne||ht!==en||vt!==nn)&&(i.stencilFunc(ne,en,nn),nt=ne,ht=en,vt=nn)},setOp:function(ne,en,nn){(rt!==ne||Dt!==en||At!==nn)&&(i.stencilOp(ne,en,nn),rt=ne,Dt=en,At=nn)},setLocked:function(ne){O=ne},setClear:function(ne){fe!==ne&&(i.clearStencil(ne),fe=ne)},reset:function(){O=!1,lt=null,nt=null,ht=null,vt=null,rt=null,Dt=null,At=null,fe=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},p={},d={},g=new WeakMap,y=[],T=null,m=!1,f=null,w=null,C=null,S=null,b=null,v=null,A=null,h=new Bt(0,0,0),x=0,E=!1,P=null,D=null,F=null,L=null,N=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,j=0,Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=j>=1):Z.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=j>=2);let $=null,J={},dt=i.getParameter(i.SCISSOR_BOX),Mt=i.getParameter(i.VIEWPORT),Ot=new Se().fromArray(dt),Zt=new Se().fromArray(Mt);function ee(O,lt,nt,ht){let vt=new Uint8Array(4),rt=i.createTexture();i.bindTexture(O,rt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<nt;Dt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,vt):i.texImage2D(lt+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,vt);return rt}let Q={};Q[i.TEXTURE_2D]=ee(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=ee(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=ee(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=ee(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(ts),Jt(!1),ie(ll),st(i.CULL_FACE),te(Un);function st(O){u[O]!==!0&&(i.enable(O),u[O]=!0)}function ct(O){u[O]!==!1&&(i.disable(O),u[O]=!1)}function Vt(O,lt){return d[O]!==lt?(i.bindFramebuffer(O,lt),d[O]=lt,O===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=lt),O===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function bt(O,lt){let nt=y,ht=!1;if(O){nt=g.get(lt),nt===void 0&&(nt=[],g.set(lt,nt));let vt=O.textures;if(nt.length!==vt.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let rt=0,Dt=vt.length;rt<Dt;rt++)nt[rt]=i.COLOR_ATTACHMENT0+rt;nt.length=vt.length,ht=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,ht=!0);ht&&i.drawBuffers(nt)}function qt(O){return T!==O?(i.useProgram(O),T=O,!0):!1}let be={[Ci]:i.FUNC_ADD,[Yc]:i.FUNC_SUBTRACT,[Zc]:i.FUNC_REVERSE_SUBTRACT};be[$c]=i.MIN,be[Jc]=i.MAX;let Yt={[Kc]:i.ZERO,[jc]:i.ONE,[Qc]:i.SRC_COLOR,[dl]:i.SRC_ALPHA,[rh]:i.SRC_ALPHA_SATURATE,[ih]:i.DST_COLOR,[eh]:i.DST_ALPHA,[th]:i.ONE_MINUS_SRC_COLOR,[fl]:i.ONE_MINUS_SRC_ALPHA,[sh]:i.ONE_MINUS_DST_COLOR,[nh]:i.ONE_MINUS_DST_ALPHA,[ah]:i.CONSTANT_COLOR,[oh]:i.ONE_MINUS_CONSTANT_COLOR,[lh]:i.CONSTANT_ALPHA,[ch]:i.ONE_MINUS_CONSTANT_ALPHA};function te(O,lt,nt,ht,vt,rt,Dt,At,fe,ne){if(O===Un){m===!0&&(ct(i.BLEND),m=!1);return}if(m===!1&&(st(i.BLEND),m=!0),O!==qc){if(O!==f||ne!==E){if((w!==Ci||b!==Ci)&&(i.blendEquation(i.FUNC_ADD),w=Ci,b=Ci),ne)switch(O){case ms:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFunc(i.ONE,i.ONE);break;case hl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ul:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",O);break}else switch(O){case ms:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case hl:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ul:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",O);break}C=null,S=null,v=null,A=null,h.set(0,0,0),x=0,f=O,E=ne}return}vt=vt||lt,rt=rt||nt,Dt=Dt||ht,(lt!==w||vt!==b)&&(i.blendEquationSeparate(be[lt],be[vt]),w=lt,b=vt),(nt!==C||ht!==S||rt!==v||Dt!==A)&&(i.blendFuncSeparate(Yt[nt],Yt[ht],Yt[rt],Yt[Dt]),C=nt,S=ht,v=rt,A=Dt),(At.equals(h)===!1||fe!==x)&&(i.blendColor(At.r,At.g,At.b,fe),h.copy(At),x=fe),f=O,E=!1}function ce(O,lt){O.side===Nn?ct(i.CULL_FACE):st(i.CULL_FACE);let nt=O.side===Ke;lt&&(nt=!nt),Jt(nt),O.blending===ms&&O.transparent===!1?te(Un):te(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let ht=O.stencilWrite;o.setTest(ht),ht&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ne(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(O){P!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),P=O)}function ie(O){O!==Hc?(st(i.CULL_FACE),O!==D&&(O===ll?i.cullFace(i.BACK):O===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),D=O}function Ee(O){O!==F&&(q&&i.lineWidth(O),F=O)}function Ne(O,lt,nt){O?(st(i.POLYGON_OFFSET_FILL),(L!==lt||N!==nt)&&(L=lt,N=nt,a.getReversed()&&(lt=-lt),i.polygonOffset(lt,nt))):ct(i.POLYGON_OFFSET_FILL)}function xe(O){O?st(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function re(O){O===void 0&&(O=i.TEXTURE0+G-1),$!==O&&(i.activeTexture(O),$=O)}function z(O,lt,nt){nt===void 0&&($===null?nt=i.TEXTURE0+G-1:nt=$);let ht=J[nt];ht===void 0&&(ht={type:void 0,texture:void 0},J[nt]=ht),(ht.type!==O||ht.texture!==lt)&&($!==nt&&(i.activeTexture(nt),$=nt),i.bindTexture(O,lt||Q[O]),ht.type=O,ht.texture=lt)}function Ue(){let O=J[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function _(){try{i.texSubImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function V(){try{i.texSubImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function Y(){try{i.compressedTexSubImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function ot(){try{i.texStorage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function ut(){try{i.texStorage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function tt(){try{i.texImage2D(...arguments)}catch(O){kt("WebGLState:",O)}}function it(){try{i.texImage3D(...arguments)}catch(O){kt("WebGLState:",O)}}function ft(O){return p[O]!==void 0?p[O]:i.getParameter(O)}function It(O,lt){p[O]!==lt&&(i.pixelStorei(O,lt),p[O]=lt)}function pt(O){Ot.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ot.copy(O))}function mt(O){Zt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Zt.copy(O))}function Lt(O,lt){let nt=l.get(lt);nt===void 0&&(nt=new WeakMap,l.set(lt,nt));let ht=nt.get(O);ht===void 0&&(ht=i.getUniformBlockIndex(lt,O.name),nt.set(O,ht))}function Nt(O,lt){let ht=l.get(lt).get(O);c.get(lt)!==ht&&(i.uniformBlockBinding(lt,ht,O.__bindingPointIndex),c.set(lt,ht))}function Wt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},p={},$=null,J={},d={},g=new WeakMap,y=[],T=null,m=!1,f=null,w=null,C=null,S=null,b=null,v=null,A=null,h=new Bt(0,0,0),x=0,E=!1,P=null,D=null,F=null,L=null,N=null,Ot.set(0,0,i.canvas.width,i.canvas.height),Zt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:st,disable:ct,bindFramebuffer:Vt,drawBuffers:bt,useProgram:qt,setBlending:te,setMaterial:ce,setFlipSided:Jt,setCullFace:ie,setLineWidth:Ee,setPolygonOffset:Ne,setScissorTest:xe,activeTexture:re,bindTexture:z,unbindTexture:Ue,compressedTexImage2D:Ft,compressedTexImage3D:R,texImage2D:tt,texImage3D:it,pixelStorei:It,getParameter:ft,updateUBOMapping:Lt,uniformBlockBinding:Nt,texStorage2D:ot,texStorage3D:ut,texSubImage2D:_,texSubImage3D:V,compressedTexSubImage2D:Y,compressedTexSubImage3D:K,scissor:pt,viewport:mt,reset:Wt}}function y0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ut,u=new WeakMap,p=new Set,d,g=new WeakMap,y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(R,_){return y?new OffscreenCanvas(R,_):ks("canvas")}function m(R,_,V){let Y=1,K=Ft(R);if((K.width>V||K.height>V)&&(Y=V/Math.max(K.width,K.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ot=Math.floor(Y*K.width),ut=Math.floor(Y*K.height);d===void 0&&(d=T(ot,ut));let tt=_?T(ot,ut):d;return tt.width=ot,tt.height=ut,tt.getContext("2d").drawImage(R,0,0,ot,ut),zt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+ut+")."),tt}else return"data"in R&&zt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function f(R){return R.generateMipmaps}function w(R){i.generateMipmap(R)}function C(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(R,_,V,Y,K,ot=!1){if(R!==null){if(i[R]!==void 0)return i[R];zt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ut;Y&&(ut=t.get("EXT_texture_norm16"),ut||zt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let tt=_;if(_===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8),V===i.UNSIGNED_SHORT&&ut&&(tt=ut.R16_EXT),V===i.SHORT&&ut&&(tt=ut.R16_SNORM_EXT)),_===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),_===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8),V===i.UNSIGNED_SHORT&&ut&&(tt=ut.RG16_EXT),V===i.SHORT&&ut&&(tt=ut.RG16_SNORM_EXT)),_===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),_===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),_===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),_===i.RGB&&(V===i.UNSIGNED_SHORT&&ut&&(tt=ut.RGB16_EXT),V===i.SHORT&&ut&&(tt=ut.RGB16_SNORM_EXT),V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),V===i.UNSIGNED_INT_10F_11F_11F_REV&&(tt=i.R11F_G11F_B10F)),_===i.RGBA){let it=ot?zs:Qt.getTransfer(K);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=it===le?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT&&ut&&(tt=ut.RGBA16_EXT),V===i.SHORT&&ut&&(tt=ut.RGBA16_SNORM_EXT),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function b(R,_){let V;return R?_===null||_===Tn||_===_s?V=i.DEPTH24_STENCIL8:_===pn?V=i.DEPTH32F_STENCIL8:_===gs&&(V=i.DEPTH24_STENCIL8,zt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Tn||_===_s?V=i.DEPTH_COMPONENT24:_===pn?V=i.DEPTH_COMPONENT32F:_===gs&&(V=i.DEPTH_COMPONENT16),V}function v(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Oe&&R.minFilter!==Ce?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function A(R){let _=R.target;_.removeEventListener("dispose",A),x(_),_.isVideoTexture&&u.delete(_),_.isHTMLTexture&&p.delete(_)}function h(R){let _=R.target;_.removeEventListener("dispose",h),P(_)}function x(R){let _=n.get(R);if(_.__webglInit===void 0)return;let V=R.source,Y=g.get(V);if(Y){let K=Y[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&E(R),Object.keys(Y).length===0&&g.delete(V)}n.remove(R)}function E(R){let _=n.get(R);i.deleteTexture(_.__webglTexture);let V=R.source,Y=g.get(V);delete Y[_.__cacheKey],a.memory.textures--}function P(R){let _=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let K=0;K<_.__webglFramebuffer[Y].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[Y][K]);else i.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)i.deleteFramebuffer(_.__webglFramebuffer[Y]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let V=R.textures;for(let Y=0,K=V.length;Y<K;Y++){let ot=n.get(V[Y]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),a.memory.textures--),n.remove(V[Y])}n.remove(R)}let D=0;function F(){D=0}function L(){return D}function N(R){D=R}function G(){let R=D;return R>=s.maxTextures&&zt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,R}function q(R){let _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function j(R,_){let V=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let Y=R.image;if(Y===null)zt("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)zt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(V,R,_);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+_)}function Z(R,_){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ct(V,R,_);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+_)}function $(R,_){let V=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){ct(V,R,_);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+_)}function J(R,_){let V=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){Vt(V,R,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+_)}let dt={[Si]:i.REPEAT,[dn]:i.CLAMP_TO_EDGE,[ea]:i.MIRRORED_REPEAT},Mt={[Oe]:i.NEAREST,[dh]:i.NEAREST_MIPMAP_NEAREST,[ur]:i.NEAREST_MIPMAP_LINEAR,[Ce]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Ot={[gh]:i.NEVER,[Sh]:i.ALWAYS,[_h]:i.LESS,[fo]:i.LEQUAL,[xh]:i.EQUAL,[po]:i.GEQUAL,[yh]:i.GREATER,[vh]:i.NOTEQUAL};function Zt(R,_){if(_.type===pn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Ce||_.magFilter===Aa||_.magFilter===ur||_.magFilter===Fn||_.minFilter===Ce||_.minFilter===Aa||_.minFilter===ur||_.minFilter===Fn)&&zt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,dt[_.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,dt[_.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,dt[_.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Mt[_.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ot[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Oe||_.minFilter!==ur&&_.minFilter!==Fn||_.type===pn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ee(R,_){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",A));let Y=_.source,K=g.get(Y);K===void 0&&(K={},g.set(Y,K));let ot=q(_);if(ot!==R.__cacheKey){K[ot]===void 0&&(K[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,V=!0),K[ot].usedTimes++;let ut=K[R.__cacheKey];ut!==void 0&&(K[R.__cacheKey].usedTimes--,ut.usedTimes===0&&E(_)),R.__cacheKey=ot,R.__webglTexture=K[ot].texture}return V}function Q(R,_,V){return Math.floor(Math.floor(R/V)/_)}function st(R,_,V,Y){let ot=R.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,V,Y,_.data);else{ot.sort((It,pt)=>It.start-pt.start);let ut=0;for(let It=1;It<ot.length;It++){let pt=ot[ut],mt=ot[It],Lt=pt.start+pt.count,Nt=Q(mt.start,_.width,4),Wt=Q(pt.start,_.width,4);mt.start<=Lt+1&&Nt===Wt&&Q(mt.start+mt.count-1,_.width,4)===Nt?pt.count=Math.max(pt.count,mt.start+mt.count-pt.start):(++ut,ot[ut]=mt)}ot.length=ut+1;let tt=e.getParameter(i.UNPACK_ROW_LENGTH),it=e.getParameter(i.UNPACK_SKIP_PIXELS),ft=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let It=0,pt=ot.length;It<pt;It++){let mt=ot[It],Lt=Math.floor(mt.start/4),Nt=Math.ceil(mt.count/4),Wt=Lt%_.width,O=Math.floor(Lt/_.width),lt=Nt,nt=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,Wt),e.pixelStorei(i.UNPACK_SKIP_ROWS,O),e.texSubImage2D(i.TEXTURE_2D,0,Wt,O,lt,nt,V,Y,_.data)}R.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,tt),e.pixelStorei(i.UNPACK_SKIP_PIXELS,it),e.pixelStorei(i.UNPACK_SKIP_ROWS,ft)}}function ct(R,_,V){let Y=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=i.TEXTURE_3D);let K=ee(R,_),ot=_.source;e.bindTexture(Y,R.__webglTexture,i.TEXTURE0+V);let ut=n.get(ot);if(ot.version!==ut.__version||K===!0){if(e.activeTexture(i.TEXTURE0+V),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let nt=Qt.getPrimaries(Qt.workingColorSpace),ht=_.colorSpace===qn?null:Qt.getPrimaries(_.colorSpace),vt=_.colorSpace===qn||nt===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment);let it=m(_.image,!1,s.maxTextureSize);it=Ue(_,it);let ft=r.convert(_.format,_.colorSpace),It=r.convert(_.type),pt=S(_.internalFormat,ft,It,_.normalized,_.colorSpace,_.isVideoTexture);Zt(Y,_);let mt,Lt=_.mipmaps,Nt=_.isVideoTexture!==!0,Wt=ut.__version===void 0||K===!0,O=ot.dataReady,lt=v(_,it);if(_.isDepthTexture)pt=b(_.format===ui,_.type),Wt&&(Nt?e.texStorage2D(i.TEXTURE_2D,1,pt,it.width,it.height):e.texImage2D(i.TEXTURE_2D,0,pt,it.width,it.height,0,ft,It,null));else if(_.isDataTexture)if(Lt.length>0){Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,lt,pt,Lt[0].width,Lt[0].height);for(let nt=0,ht=Lt.length;nt<ht;nt++)mt=Lt[nt],Nt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,ft,It,mt.data):e.texImage2D(i.TEXTURE_2D,nt,pt,mt.width,mt.height,0,ft,It,mt.data);_.generateMipmaps=!1}else Nt?(Wt&&e.texStorage2D(i.TEXTURE_2D,lt,pt,it.width,it.height),O&&st(_,it,ft,It)):e.texImage2D(i.TEXTURE_2D,0,pt,it.width,it.height,0,ft,It,it.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Nt&&Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,pt,Lt[0].width,Lt[0].height,it.depth);for(let nt=0,ht=Lt.length;nt<ht;nt++)if(mt=Lt[nt],_.format!==mn)if(ft!==null)if(Nt){if(O)if(_.layerUpdates.size>0){let vt=Nl(mt.width,mt.height,_.format,_.type);for(let rt of _.layerUpdates){let Dt=mt.data.subarray(rt*vt/mt.data.BYTES_PER_ELEMENT,(rt+1)*vt/mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,rt,mt.width,mt.height,1,ft,Dt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,it.depth,ft,mt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,pt,mt.width,mt.height,it.depth,0,mt.data,0,0);else zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Nt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,mt.width,mt.height,it.depth,ft,It,mt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,pt,mt.width,mt.height,it.depth,0,ft,It,mt.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Nt&&Wt&&e.texStorage2D(i.TEXTURE_2D,lt,pt,Lt[0].width,Lt[0].height);for(let nt=0,ht=Lt.length;nt<ht;nt++)mt=Lt[nt],_.format!==mn?ft!==null?Nt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,ft,mt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,pt,mt.width,mt.height,0,mt.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Nt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,mt.width,mt.height,ft,It,mt.data):e.texImage2D(i.TEXTURE_2D,nt,pt,mt.width,mt.height,0,ft,It,mt.data)}else if(_.isDataArrayTexture)if(Nt){if(Wt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,pt,it.width,it.height,it.depth),O)if(_.layerUpdates.size>0){let nt=Nl(it.width,it.height,_.format,_.type);for(let ht of _.layerUpdates){let vt=it.data.subarray(ht*nt/it.data.BYTES_PER_ELEMENT,(ht+1)*nt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,it.width,it.height,1,ft,It,vt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ft,It,it.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,pt,it.width,it.height,it.depth,0,ft,It,it.data);else if(_.isData3DTexture)Nt?(Wt&&e.texStorage3D(i.TEXTURE_3D,lt,pt,it.width,it.height,it.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ft,It,it.data)):e.texImage3D(i.TEXTURE_3D,0,pt,it.width,it.height,it.depth,0,ft,It,it.data);else if(_.isFramebufferTexture){if(Wt)if(Nt)e.texStorage2D(i.TEXTURE_2D,lt,pt,it.width,it.height);else{let nt=it.width,ht=it.height;for(let vt=0;vt<lt;vt++)e.texImage2D(i.TEXTURE_2D,vt,pt,nt,ht,0,ft,It,null),nt>>=1,ht>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in i){let nt=i.canvas;if(nt.hasAttribute("layoutsubtree")||nt.setAttribute("layoutsubtree","true"),it.parentNode!==nt){nt.appendChild(it),p.add(_),nt.onpaint=ht=>{let vt=ht.changedElements;for(let rt of p)vt.includes(rt.image)&&(rt.needsUpdate=!0)},nt.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,it);else{let vt=i.RGBA,rt=i.RGBA,Dt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,vt,rt,Dt,it)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Lt.length>0){if(Nt&&Wt){let nt=Ft(Lt[0]);e.texStorage2D(i.TEXTURE_2D,lt,pt,nt.width,nt.height)}for(let nt=0,ht=Lt.length;nt<ht;nt++)mt=Lt[nt],Nt?O&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,ft,It,mt):e.texImage2D(i.TEXTURE_2D,nt,pt,ft,It,mt);_.generateMipmaps=!1}else if(Nt){if(Wt){let nt=Ft(it);e.texStorage2D(i.TEXTURE_2D,lt,pt,nt.width,nt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft,It,it)}else e.texImage2D(i.TEXTURE_2D,0,pt,ft,It,it);f(_)&&w(Y),ut.__version=ot.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function Vt(R,_,V){if(_.image.length!==6)return;let Y=ee(R,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+V);let ot=n.get(K);if(K.version!==ot.__version||Y===!0){e.activeTexture(i.TEXTURE0+V);let ut=Qt.getPrimaries(Qt.workingColorSpace),tt=_.colorSpace===qn?null:Qt.getPrimaries(_.colorSpace),it=_.colorSpace===qn||ut===tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,it);let ft=_.isCompressedTexture||_.image[0].isCompressedTexture,It=_.image[0]&&_.image[0].isDataTexture,pt=[];for(let rt=0;rt<6;rt++)!ft&&!It?pt[rt]=m(_.image[rt],!0,s.maxCubemapSize):pt[rt]=It?_.image[rt].image:_.image[rt],pt[rt]=Ue(_,pt[rt]);let mt=pt[0],Lt=r.convert(_.format,_.colorSpace),Nt=r.convert(_.type),Wt=S(_.internalFormat,Lt,Nt,_.normalized,_.colorSpace),O=_.isVideoTexture!==!0,lt=ot.__version===void 0||Y===!0,nt=K.dataReady,ht=v(_,mt);Zt(i.TEXTURE_CUBE_MAP,_);let vt;if(ft){O&&lt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,mt.width,mt.height);for(let rt=0;rt<6;rt++){vt=pt[rt].mipmaps;for(let Dt=0;Dt<vt.length;Dt++){let At=vt[Dt];_.format!==mn?Lt!==null?O?nt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,At.width,At.height,Lt,At.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,Wt,At.width,At.height,0,At.data):zt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,0,0,At.width,At.height,Lt,Nt,At.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt,Wt,At.width,At.height,0,Lt,Nt,At.data)}}}else{if(vt=_.mipmaps,O&&lt){vt.length>0&&ht++;let rt=Ft(pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ht,Wt,rt.width,rt.height)}for(let rt=0;rt<6;rt++)if(It){O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,pt[rt].width,pt[rt].height,Lt,Nt,pt[rt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,pt[rt].width,pt[rt].height,0,Lt,Nt,pt[rt].data);for(let Dt=0;Dt<vt.length;Dt++){let fe=vt[Dt].image[rt].image;O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,fe.width,fe.height,Lt,Nt,fe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,Wt,fe.width,fe.height,0,Lt,Nt,fe.data)}}else{O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,0,0,Lt,Nt,pt[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,0,Wt,Lt,Nt,pt[rt]);for(let Dt=0;Dt<vt.length;Dt++){let At=vt[Dt];O?nt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,0,0,Lt,Nt,At.image[rt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+rt,Dt+1,Wt,Lt,Nt,At.image[rt])}}}f(_)&&w(i.TEXTURE_CUBE_MAP),ot.__version=K.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function bt(R,_,V,Y,K,ot){let ut=r.convert(V.format,V.colorSpace),tt=r.convert(V.type),it=S(V.internalFormat,ut,tt,V.normalized,V.colorSpace),ft=n.get(_),It=n.get(V);if(It.__renderTarget=_,!ft.__hasExternalTextures){let pt=Math.max(1,_.width>>ot),mt=Math.max(1,_.height>>ot);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,it,pt,mt,_.depth,0,ut,tt,null):e.texImage2D(K,ot,it,pt,mt,0,ut,tt,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,K,It.__webglTexture,0,xe(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,K,It.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(R,_,V){if(i.bindRenderbuffer(i.RENDERBUFFER,R),_.depthBuffer){let Y=_.depthTexture,K=Y&&Y.isDepthTexture?Y.type:null,ot=b(_.stencilBuffer,K),ut=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(_),ot,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(_),ot,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,ot,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ut,i.RENDERBUFFER,R)}else{let Y=_.textures;for(let K=0;K<Y.length;K++){let ot=Y[K],ut=r.convert(ot.format,ot.colorSpace),tt=r.convert(ot.type),it=S(ot.internalFormat,ut,tt,ot.normalized,ot.colorSpace);re(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xe(_),it,_.width,_.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,xe(_),it,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,it,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function be(R,_,V){let Y=_.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(_.depthTexture);if(K.__renderTarget=_,(!K.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(K.__webglInit===void 0&&(K.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_.depthTexture);let ft=r.convert(_.depthTexture.format),It=r.convert(_.depthTexture.type),pt;_.depthTexture.format===Ln?pt=i.DEPTH_COMPONENT24:_.depthTexture.format===ui&&(pt=i.DEPTH24_STENCIL8);for(let mt=0;mt<6;mt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0,pt,_.width,_.height,0,ft,It,null)}}else j(_.depthTexture,0);let ot=K.__webglTexture,ut=xe(_),tt=Y?i.TEXTURE_CUBE_MAP_POSITIVE_X+V:i.TEXTURE_2D,it=_.depthTexture.format===ui?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ln)re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,ot,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,ot,0);else if(_.depthTexture.format===ui)re(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,it,tt,ot,0,ut):i.framebufferTexture2D(i.FRAMEBUFFER,it,tt,ot,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Yt(R){let _=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){let Y=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){let K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",K)};Y.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=Y}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(V)for(let Y=0;Y<6;Y++)be(_.__webglFramebuffer[Y],R,Y);else{let Y=R.texture.mipmaps;Y&&Y.length>0?be(_.__webglFramebuffer[0],R,0):be(_.__webglFramebuffer,R,0)}else if(V){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=i.createRenderbuffer(),qt(_.__webglDepthbuffer[Y],R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}}else{let Y=R.texture.mipmaps;if(Y&&Y.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),qt(_.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function te(R,_,V){let Y=n.get(R);_!==void 0&&bt(Y.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&Yt(R)}function ce(R){let _=R.texture,V=n.get(R),Y=n.get(_);R.addEventListener("dispose",h);let K=R.textures,ot=R.isWebGLCubeRenderTarget===!0,ut=K.length>1;if(ut||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=_.version,a.memory.textures++),ot){V.__webglFramebuffer=[];for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer[tt]=[];for(let it=0;it<_.mipmaps.length;it++)V.__webglFramebuffer[tt][it]=i.createFramebuffer()}else V.__webglFramebuffer[tt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){V.__webglFramebuffer=[];for(let tt=0;tt<_.mipmaps.length;tt++)V.__webglFramebuffer[tt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(ut)for(let tt=0,it=K.length;tt<it;tt++){let ft=n.get(K[tt]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&re(R)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let tt=0;tt<K.length;tt++){let it=K[tt];V.__webglColorRenderbuffer[tt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[tt]);let ft=r.convert(it.format,it.colorSpace),It=r.convert(it.type),pt=S(it.internalFormat,ft,It,it.normalized,it.colorSpace,R.isXRRenderTarget===!0),mt=xe(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,pt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+tt,i.RENDERBUFFER,V.__webglColorRenderbuffer[tt])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),Zt(i.TEXTURE_CUBE_MAP,_);for(let tt=0;tt<6;tt++)if(_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)bt(V.__webglFramebuffer[tt][it],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,it);else bt(V.__webglFramebuffer[tt],R,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0);f(_)&&w(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let tt=0,it=K.length;tt<it;tt++){let ft=K[tt],It=n.get(ft),pt=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,It.__webglTexture),Zt(pt,ft),bt(V.__webglFramebuffer,R,ft,i.COLOR_ATTACHMENT0+tt,pt,0),f(ft)&&w(pt)}e.unbindTexture()}else{let tt=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(tt=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(tt,Y.__webglTexture),Zt(tt,_),_.mipmaps&&_.mipmaps.length>0)for(let it=0;it<_.mipmaps.length;it++)bt(V.__webglFramebuffer[it],R,_,i.COLOR_ATTACHMENT0,tt,it);else bt(V.__webglFramebuffer,R,_,i.COLOR_ATTACHMENT0,tt,0);f(_)&&w(tt),e.unbindTexture()}R.depthBuffer&&Yt(R)}function Jt(R){let _=R.textures;for(let V=0,Y=_.length;V<Y;V++){let K=_[V];if(f(K)){let ot=C(R),ut=n.get(K).__webglTexture;e.bindTexture(ot,ut),w(ot),e.unbindTexture()}}}let ie=[],Ee=[];function Ne(R){if(R.samples>0){if(re(R)===!1){let _=R.textures,V=R.width,Y=R.height,K=i.COLOR_BUFFER_BIT,ot=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(R),tt=_.length>1;if(tt)for(let ft=0;ft<_.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer);let it=R.texture.mipmaps;it&&it.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let ft=0;ft<_.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),tt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let It=n.get(_[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,It,0)}i.blitFramebuffer(0,0,V,Y,0,0,V,Y,K,i.NEAREST),c===!0&&(ie.length=0,Ee.length=0,ie.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(ie.push(ot),Ee.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Ee)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ie))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),tt)for(let ft=0;ft<_.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,ut.__webglColorRenderbuffer[ft]);let It=n.get(_[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,It,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let _=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function xe(R){return Math.min(s.maxSamples,R.samples)}function re(R){let _=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function z(R){let _=a.render.frame;u.get(R)!==_&&(u.set(R,_),R.update())}function Ue(R,_){let V=R.colorSpace,Y=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Bs&&V!==qn&&(Qt.getTransfer(V)===le?(Y!==mn||K!==Qe)&&zt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",V)),_}function Ft(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=F,this.getTextureUnits=L,this.setTextureUnits=N,this.setTexture2D=j,this.setTexture2DArray=Z,this.setTexture3D=$,this.setTextureCube=J,this.rebindTextures=te,this.setupRenderTarget=ce,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=Ne,this.setupDepthRenderbuffer=Yt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=re,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function v0(i,t){function e(n,s=qn){let r,a=Qt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===Ra)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Pa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===bl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===wl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Sl)return i.BYTE;if(n===Ml)return i.SHORT;if(n===gs)return i.UNSIGNED_SHORT;if(n===Ca)return i.INT;if(n===Tn)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===An)return i.HALF_FLOAT;if(n===El)return i.ALPHA;if(n===Tl)return i.RGB;if(n===mn)return i.RGBA;if(n===Ln)return i.DEPTH_COMPONENT;if(n===ui)return i.DEPTH_STENCIL;if(n===Ia)return i.RED;if(n===La)return i.RED_INTEGER;if(n===di)return i.RG;if(n===Da)return i.RG_INTEGER;if(n===Na)return i.RGBA_INTEGER;if(n===dr||n===fr||n===pr||n===mr)if(a===le)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===dr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===dr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===pr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===mr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ua||n===Fa||n===Oa||n===Ba)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ua)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Oa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ba)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===za||n===ka||n===Va||n===Ga||n===Ha||n===gr||n===Wa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===za||n===ka)return a===le?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Va)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ga)return r.COMPRESSED_R11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_R11_EAC;if(n===gr)return r.COMPRESSED_RG11_EAC;if(n===Wa)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Xa||n===qa||n===Ya||n===Za||n===$a||n===Ja||n===Ka||n===ja||n===Qa||n===to||n===eo||n===no||n===io||n===so)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Xa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ya)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Za)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===$a)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ka)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ja)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Qa)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===to)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===no)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===io)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===so)return a===le?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ro||n===ao||n===oo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ro)return a===le?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===oo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lo||n===co||n===_r||n===ho)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_r)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===_s?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var S0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,M0=`
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

}`,Ql=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new $s(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new ln({vertexShader:S0,fragmentShader:M0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new Ti(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},tc=class extends Mn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,p=null,d=null,g=null,y=null,T=typeof XRWebGLBinding<"u",m=new Ql,f={},w=e.getContextAttributes(),C=null,S=null,b=[],v=[],A=new Ut,h=null,x=null,E=new He;E.viewport=new Se;let P=new He;P.viewport=new Se;let D=[E,P],F=new Ma,L=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let st=b[Q];return st===void 0&&(st=new as,b[Q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(Q){let st=b[Q];return st===void 0&&(st=new as,b[Q]=st),st.getGripSpace()},this.getHand=function(Q){let st=b[Q];return st===void 0&&(st=new as,b[Q]=st),st.getHandSpace()};function G(Q){let st=v.indexOf(Q.inputSource);if(st===-1)return;let ct=b[st];ct!==void 0&&(ct.update(Q.inputSource,Q.frame,l||a),ct.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",j);for(let Q=0;Q<b.length;Q++){let st=v[Q];st!==null&&(v[Q]=null,b[Q].disconnect(st))}L=null,N=null,m.reset();for(let Q in f)delete f[Q];if(t.setRenderTarget(C),g=null,d=null,p=null,s=null,S=null,ee.stop(),n.isPresenting=!1,t.setPixelRatio(h),t.setSize(A.width,A.height,!1),x!==null){let Q=x.camera;Q.fov=x.fov,Q.zoom=x.zoom,Q.updateProjectionMatrix(),x=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&zt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&zt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&T&&(p=new XRWebGLBinding(s,e)),p},this.getFrame=function(){return y},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(C=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",q),s.addEventListener("inputsourceschange",j),w.xrCompatible!==!0&&await e.makeXRCompatible(),h=t.getPixelRatio(),t.getSize(A),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,Vt=null,bt=null;w.depth&&(bt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=w.stencil?ui:Ln,Vt=w.stencil?_s:Tn);let qt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};p=this.getBinding(),d=p.createProjectionLayer(qt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new je(d.textureWidth,d.textureHeight,{format:mn,type:Qe,depthTexture:new ri(d.textureWidth,d.textureHeight,Vt,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};g=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:g}),t.setPixelRatio(1),t.setSize(g.framebufferWidth,g.framebufferHeight,!1),S=new je(g.framebufferWidth,g.framebufferHeight,{format:mn,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ee.setContext(s),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function j(Q){for(let st=0;st<Q.removed.length;st++){let ct=Q.removed[st],Vt=v.indexOf(ct);Vt>=0&&(v[Vt]=null,b[Vt].disconnect(ct))}for(let st=0;st<Q.added.length;st++){let ct=Q.added[st],Vt=v.indexOf(ct);if(Vt===-1){for(let qt=0;qt<b.length;qt++)if(qt>=v.length){v.push(ct),Vt=qt;break}else if(v[qt]===null){v[qt]=ct,Vt=qt;break}if(Vt===-1)break}let bt=b[Vt];bt&&bt.connect(ct)}}let Z=new B,$=new B;function J(Q,st,ct){Z.setFromMatrixPosition(st.matrixWorld),$.setFromMatrixPosition(ct.matrixWorld);let Vt=Z.distanceTo($),bt=st.projectionMatrix.elements,qt=ct.projectionMatrix.elements,be=bt[14]/(bt[10]-1),Yt=bt[14]/(bt[10]+1),te=(bt[9]+1)/bt[5],ce=(bt[9]-1)/bt[5],Jt=(bt[8]-1)/bt[0],ie=(qt[8]+1)/qt[0],Ee=be*Jt,Ne=be*ie,xe=Vt/(-Jt+ie),re=xe*-Jt;if(st.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(re),Q.translateZ(xe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),bt[10]===-1)Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let z=be+xe,Ue=Yt+xe,Ft=Ee-re,R=Ne+(Vt-re),_=te*Yt/Ue*z,V=ce*Yt/Ue*z;Q.projectionMatrix.makePerspective(Ft,R,_,V,z,Ue),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function dt(Q,st){st===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(st.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let st=Q.near,ct=Q.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(ct=m.depthFar)),F.near=P.near=E.near=st,F.far=P.far=E.far=ct,(L!==F.near||N!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),L=F.near,N=F.far),F.layers.mask=Q.layers.mask|6,E.layers.mask=F.layers.mask&-5,P.layers.mask=F.layers.mask&-3;let Vt=Q.parent,bt=F.cameras;dt(F,Vt);for(let qt=0;qt<bt.length;qt++)dt(bt[qt],Vt);bt.length===2?J(F,E,P):F.projectionMatrix.copy(E.projectionMatrix),x===null&&Q.isPerspectiveCamera&&(x={camera:Q,fov:Q.fov,zoom:Q.zoom}),Mt(Q,F,Vt)};function Mt(Q,st,ct){ct===null?Q.matrix.copy(st.matrixWorld):(Q.matrix.copy(ct.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(st.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(st.projectionMatrix),Q.projectionMatrixInverse.copy(st.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=is*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=Q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(F)},this.getCameraTexture=function(Q){return f[Q]};let Ot=null;function Zt(Q,st){if(u=st.getViewerPose(l||a),y=st,u!==null){let ct=u.views;g!==null&&(t.setRenderTargetFramebuffer(S,g.framebuffer),t.setRenderTarget(S));let Vt=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,Vt=!0);for(let Yt=0;Yt<ct.length;Yt++){let te=ct[Yt],ce=null;if(g!==null)ce=g.getViewport(te);else{let ie=p.getViewSubImage(d,te);ce=ie.viewport,Yt===0&&(t.setRenderTargetTextures(S,ie.colorTexture,ie.depthStencilTexture),t.setRenderTarget(S))}let Jt=D[Yt];Jt===void 0&&(Jt=new He,Jt.layers.enable(Yt),Jt.viewport=new Se,D[Yt]=Jt),Jt.matrix.fromArray(te.transform.matrix),Jt.matrix.decompose(Jt.position,Jt.quaternion,Jt.scale),Jt.projectionMatrix.fromArray(te.projectionMatrix),Jt.projectionMatrixInverse.copy(Jt.projectionMatrix).invert(),Jt.viewport.set(ce.x,ce.y,ce.width,ce.height),Yt===0&&(F.matrix.copy(Jt.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Vt===!0&&F.cameras.push(Jt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&T){p=n.getBinding();let Yt=p.getDepthInformation(ct[0]);Yt&&Yt.isValid&&Yt.texture&&m.init(Yt,s.renderState)}if(bt&&bt.includes("camera-access")&&T){t.state.unbindTexture(),p=n.getBinding();for(let Yt=0;Yt<ct.length;Yt++){let te=ct[Yt].camera;if(te){let ce=f[te];ce||(ce=new $s,f[te]=ce);let Jt=p.getCameraImage(te);ce.sourceTexture=Jt}}}}for(let ct=0;ct<b.length;ct++){let Vt=v[ct],bt=b[ct];Vt!==null&&bt!==void 0&&bt.update(Vt,st,l||a)}Ot&&Ot(Q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),y=null}let ee=new nu;ee.setAnimationLoop(Zt),this.setAnimationLoop=function(Q){Ot=Q},this.dispose=function(){}}},b0=new he,lu=new Ht;lu.set(-1,0,0,0,1,0,0,0,1);function w0(i,t){function e(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Il(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,w,C,S){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?r(m,f):f.isMeshLambertMaterial?(r(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(r(m,f),p(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&g(m,f,S)):f.isMeshMatcapMaterial?(r(m,f),y(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),T(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?c(m,f,w,C):f.isSpriteMaterial?l(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,e(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ke&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,e(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ke&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,e(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,e(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let w=t.get(f),C=w.envMap,S=w.envMapRotation;C&&(m.envMap.value=C,m.envMapRotation.value.setFromMatrix4(b0.makeRotationFromEuler(S)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(lu),m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function c(m,f,w,C){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*w,m.scale.value=C*.5,f.map&&(m.map.value=f.map,e(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function l(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,e(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,e(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function p(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function g(m,f,w){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ke&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.retroreflectivity>0&&(m.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,m.specularIntensityMapTransform))}function y(m,f){f.matcap&&(m.matcap.value=f.matcap)}function T(m,f){let w=t.get(f).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function E0(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,b){let v=b.program;n.uniformBlockBinding(S,v)}function l(S,b){let v=s[S.id];v===void 0&&(m(S),v=u(S),s[S.id]=v,S.addEventListener("dispose",w));let A=b.program;n.updateUBOMapping(S,A);let h=t.render.frame;r[S.id]!==h&&(d(S),r[S.id]=h)}function u(S){let b=p();S.__bindingPointIndex=b;let v=i.createBuffer(),A=S.__size,h=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,A,h),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,v),v}function p(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){let b=s[S.id],v=S.uniforms,A=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let h=0,x=v.length;h<x;h++){let E=v[h];if(Array.isArray(E))for(let P=0,D=E.length;P<D;P++)g(E[P],h,P,A);else g(E,h,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(S,b,v,A){if(T(S,b,v,A)===!0){let h=S.__offset,x=S.value;if(Array.isArray(x)){let E=0;for(let P=0;P<x.length;P++){let D=x[P],F=f(D);y(D,S.__data,E),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(E+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else y(x,S.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,h,S.__data)}}function y(S,b,v){typeof S=="number"||typeof S=="boolean"?b[0]=S:S.isMatrix3?(b[0]=S.elements[0],b[1]=S.elements[1],b[2]=S.elements[2],b[3]=0,b[4]=S.elements[3],b[5]=S.elements[4],b[6]=S.elements[5],b[7]=0,b[8]=S.elements[6],b[9]=S.elements[7],b[10]=S.elements[8],b[11]=0):ArrayBuffer.isView(S)?b.set(new S.constructor(S.buffer,S.byteOffset,b.length)):S.toArray(b,v)}function T(S,b,v,A){let h=S.value,x=b+"_"+v;if(A[x]===void 0)return typeof h=="number"||typeof h=="boolean"?A[x]=h:ArrayBuffer.isView(h)?A[x]=h.slice():A[x]=h.clone(),!0;{let E=A[x];if(typeof h=="number"||typeof h=="boolean"){if(E!==h)return A[x]=h,!0}else{if(ArrayBuffer.isView(h))return!0;if(E.equals(h)===!1)return E.copy(h),!0}}return!1}function m(S){let b=S.uniforms,v=0,A=16;for(let x=0,E=b.length;x<E;x++){let P=Array.isArray(b[x])?b[x]:[b[x]];for(let D=0,F=P.length;D<F;D++){let L=P[D],N=Array.isArray(L.value)?L.value:[L.value];for(let G=0,q=N.length;G<q;G++){let j=N[G],Z=f(j),$=v%A,J=$%Z.boundary,dt=$+J;v+=J,dt!==0&&A-dt<Z.storage&&(v+=A-dt),L.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=v,v+=Z.storage}}}let h=v%A;return h>0&&(v+=A-h),S.__size=v,S.__cache={},this}function f(S){let b={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(b.boundary=4,b.storage=4):S.isVector2?(b.boundary=8,b.storage=8):S.isVector3||S.isColor?(b.boundary=16,b.storage=12):S.isVector4?(b.boundary=16,b.storage=16):S.isMatrix3?(b.boundary=48,b.storage=48):S.isMatrix4?(b.boundary=64,b.storage=64):S.isTexture?zt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(b.boundary=16,b.storage=S.byteLength):zt("WebGLRenderer: Unsupported uniform value type.",S),b}function w(S){let b=S.target;b.removeEventListener("dispose",w);let v=a.indexOf(b.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function C(){for(let S in s)i.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:c,update:l,dispose:C}}var T0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function A0(){return On===null&&(On=new Xs(T0,16,16,di,An),On.name="DFG_LUT",On.minFilter=Ce,On.magFilter=Ce,On.wrapS=dn,On.wrapT=dn,On.generateMipmaps=!1,On.needsUpdate=!0),On}var yo=class{constructor(t={}){let{canvas:e=bh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Qe}=t;this.isWebGLRenderer=!0;let y;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=n.getContextAttributes().alpha}else y=a;let T=g,m=new Set([Na,Da,La]),f=new Set([Qe,Tn,gs,_s,Ra,Pa]),w=new Uint32Array(4),C=new Int32Array(4),S=new B,b=null,v=null,A=[],h=[],x=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,P=!1,D=null,F=null,L=null,N=null;this._outputColorSpace=ze;let G=0,q=0,j=null,Z=-1,$=null,J=new Se,dt=new Se,Mt=null,Ot=new Bt(0),Zt=0,ee=e.width,Q=e.height,st=1,ct=null,Vt=null,bt=new Se(0,0,ee,Q),qt=new Se(0,0,ee,Q),be=!1,Yt=new ls,te=!1,ce=!1,Jt=new he,ie=new B,Ee=new Se,Ne={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function re(){return j===null?st:1}let z=n;function Ue(M,U){return e.getContext(M,U)}let Ft,R,_,V,Y,K,ot,ut,tt,it,ft,It,pt,mt,Lt,Nt,Wt,O,lt,nt,ht,vt,rt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:p};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",ne,!1),e.addEventListener("webglcontextcreationerror",en,!1),z===null){let U="webgl2";if(z=Ue(U,M),z===null)throw Ue(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Dt()}catch(M){throw e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",en,!1),kt("WebGLRenderer: "+M.message),M}function Dt(){Ft=new Nm(z),Ft.init(),ht=new v0(z,Ft),R=new wm(z,Ft,t,ht),_=new x0(z,Ft),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),F=z.createFramebuffer(),L=z.createFramebuffer(),N=z.createFramebuffer(),V=new Om(z),Y=new s0,K=new y0(z,Ft,_,Y,R,ht,V),ot=new Dm(E),ut=new Bd(z),vt=new Mm(z,ut),tt=new Um(z,ut,V,vt),it=new zm(z,tt,ut,vt,V),O=new Bm(z,R,K),Lt=new Em(Y),ft=new i0(E,ot,Ft,R,vt,Lt),It=new w0(E,Y),pt=new a0,mt=new d0(Ft),Wt=new Sm(E,ot,_,it,y,c),Nt=new _0(E,it,R),rt=new E0(z,V,R,_),lt=new bm(z,Ft,V),nt=new Fm(z,Ft,V),V.programs=ft.programs,E.capabilities=R,E.extensions=Ft,E.properties=Y,E.renderLists=pt,E.shadowMap=Nt,E.state=_,E.info=V}T!==Qe&&(x=new Vm(T,e.width,e.height,o,s,r));let At=new tc(E,z);this.xr=At,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){let M=Ft.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ft.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(M){M!==void 0&&(st=M,this.setSize(ee,Q,!1))},this.getSize=function(M){return M.set(ee,Q)},this.setSize=function(M,U,X=!0){if(At.isPresenting){zt("WebGLRenderer: Can't change size while VR device is presenting.");return}ee=M,Q=U,e.width=Math.floor(M*st),e.height=Math.floor(U*st),X===!0&&(e.style.width=M+"px",e.style.height=U+"px"),x!==null&&x.setSize(e.width,e.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(ee*st,Q*st).floor()},this.setDrawingBufferSize=function(M,U,X){ee=M,Q=U,st=X,e.width=Math.floor(M*X),e.height=Math.floor(U*X),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(T===Qe){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){zt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}x.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(J)},this.getViewport=function(M){return M.copy(bt)},this.setViewport=function(M,U,X,H){M.isVector4?bt.set(M.x,M.y,M.z,M.w):bt.set(M,U,X,H),_.viewport(J.copy(bt).multiplyScalar(st).round())},this.getScissor=function(M){return M.copy(qt)},this.setScissor=function(M,U,X,H){M.isVector4?qt.set(M.x,M.y,M.z,M.w):qt.set(M,U,X,H),_.scissor(dt.copy(qt).multiplyScalar(st).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(M){_.setScissorTest(be=M)},this.setOpaqueSort=function(M){ct=M},this.setTransparentSort=function(M){Vt=M},this.getClearColor=function(M){return M.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor(...arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,X=!0){let H=0;if(M){let W=!1;if(j!==null){let xt=j.texture.format;W=m.has(xt)}if(W){let xt=j.texture.type,St=f.has(xt),gt=Wt.getClearColor(),wt=Wt.getClearAlpha(),Rt=gt.r,Xt=gt.g,Kt=gt.b;St?(w[0]=Rt,w[1]=Xt,w[2]=Kt,w[3]=wt,z.clearBufferuiv(z.COLOR,0,w)):(C[0]=Rt,C[1]=Xt,C[2]=Kt,C[3]=wt,z.clearBufferiv(z.COLOR,0,C))}else H|=z.COLOR_BUFFER_BIT}U&&(H|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(H|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),D=M},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",ne,!1),e.removeEventListener("webglcontextcreationerror",en,!1),Wt.dispose(),pt.dispose(),mt.dispose(),Y.dispose(),ot.dispose(),it.dispose(),vt.dispose(),rt.dispose(),ft.dispose(),At.dispose(),At.removeEventListener("sessionstart",Ni),At.removeEventListener("sessionend",_n),Rn.stop()};function fe(M){M.preventDefault(),Cl("WebGLRenderer: Context Lost."),P=!0}function ne(){Cl("WebGLRenderer: Context Restored."),P=!1;let M=V.autoReset,U=Nt.enabled,X=Nt.autoUpdate,H=Nt.needsUpdate,W=Nt.type;Dt(),V.autoReset=M,Nt.enabled=U,Nt.autoUpdate=X,Nt.needsUpdate=H,Nt.type=W}function en(M){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function nn(M){let U=M.target;U.removeEventListener("dispose",nn),Co(U)}function Co(M){Ro(M),Y.remove(M)}function Ro(M){let U=Y.get(M).programs;U!==void 0&&(U.forEach(function(X){ft.releaseProgram(X)}),M.isShaderMaterial&&ft.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,X,H,W,xt){U===null&&(U=Ne);let St=W.isMesh&&W.matrixWorld.determinantAffine()<0,gt=Et(M,U,X,H,W);_.setMaterial(H,St);let wt=X.index,Rt=1;if(H.wireframe===!0){if(wt=tt.getWireframeAttribute(X),wt===void 0)return;Rt=2}let Xt=X.drawRange,Kt=X.attributes.position,Ct=Xt.start*Rt,oe=(Xt.start+Xt.count)*Rt;xt!==null&&(Ct=Math.max(Ct,xt.start*Rt),oe=Math.min(oe,(xt.start+xt.count)*Rt)),wt!==null?(Ct=Math.max(Ct,0),oe=Math.min(oe,wt.count)):Kt!=null&&(Ct=Math.max(Ct,0),oe=Math.min(oe,Kt.count));let Te=oe-Ct;if(Te<0||Te===1/0)return;vt.setup(W,H,gt,X,wt);let ye,me=lt;if(wt!==null&&(ye=ut.get(wt),me=nt,me.setIndex(ye)),W.isMesh)H.wireframe===!0?(_.setLineWidth(H.wireframeLinewidth*re()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(W.isLine){let ke=H.linewidth;ke===void 0&&(ke=1),_.setLineWidth(ke*re()),W.isLineSegments?me.setMode(z.LINES):W.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else W.isPoints?me.setMode(z.POINTS):W.isSprite&&me.setMode(z.TRIANGLES);if(W.isBatchedMesh)if(Ft.get("WEBGL_multi_draw"))me.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let ke=W._multiDrawStarts,Tt=W._multiDrawCounts,Ye=W._multiDrawCount,se=wt?ut.get(wt).bytesPerElement:1,hn=Y.get(H).currentProgram.getUniforms();for(let Pn=0;Pn<Ye;Pn++)hn.setValue(z,"_gl_DrawID",Pn),me.render(ke[Pn]/se,Tt[Pn])}else if(W.isInstancedMesh)me.renderInstances(Ct,Te,W.count);else if(X.isInstancedBufferGeometry){let ke=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Tt=Math.min(X.instanceCount,ke);me.renderInstances(Ct,Te,Tt)}else me.render(Ct,Te)};function Cn(M,U,X,H){D!==null&&M.isNodeMaterial&&D.setObject(H,M),te===!0&&Lt.setState(M,X,!1),M.transparent===!0&&M.side===Nn&&M.forceSinglePass===!1?(M.side=Ke,M.needsUpdate=!0,k(M,U,H),M.side=ci,M.needsUpdate=!0,k(M,U,H),M.side=Nn):k(M,U,H)}this.compile=function(M,U,X=null){X===null&&(X=M),D!==null&&D.renderStart(M,U,X),v=mt.get(X),v.init(U),h.push(v),X.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),M!==X&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(v.pushLight(W),W.castShadow&&v.pushShadow(W))}),v.setupLights(),D!==null&&D.updateLights(v.state.lightsArray),ce=this.localClippingEnabled,te=Lt.init(this.clippingPlanes,ce),te===!0&&Lt.setGlobalState(this.clippingPlanes,U),D!==null&&Nt.render(v.state.shadowsArray,X,U);let H=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let xt=W.material;if(xt)if(Array.isArray(xt))for(let St=0;St<xt.length;St++){let gt=xt[St];Cn(gt,X,U,W),H.add(gt)}else Cn(xt,X,U,W),H.add(xt)}),v=h.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(M,U,X=null){let H=this.compile(M,U,X);return new Promise(W=>{function xt(){if(H.forEach(function(St){let wt=Y.get(St).currentProgram;(wt===void 0||wt.isReady())&&H.delete(St)}),H.size===0){W(M);return}setTimeout(xt,10)}Ft.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let Yn=null;function Es(M){Yn&&Yn(M)}function Ni(){Rn.stop()}function _n(){Rn.start()}let Rn=new nu;Rn.setAnimationLoop(Es),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(M){Yn=M,At.setAnimationLoop(M),M===null?Rn.stop():Rn.start()},At.addEventListener("sessionstart",Ni),At.addEventListener("sessionend",_n),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;D!==null&&D.renderStart(M,U);let X=At.enabled===!0&&At.isPresenting===!0,H=x!==null&&(j===null||X)&&x.begin(E,j);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),At.enabled===!0&&At.isPresenting===!0&&(x===null||x.isCompositing()===!1)&&(At.cameraAutoUpdate===!0&&At.updateCamera(U),U=At.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,U,j),v=mt.get(M,h.length),v.init(U),v.state.textureUnits=K.getTextureUnits(),h.push(v),Jt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Yt.setFromProjectionMatrix(Jt,Sn,U.reversedDepth),ce=this.localClippingEnabled,te=Lt.init(this.clippingPlanes,ce),b=pt.get(M,A.length),b.init(),A.push(b),At.enabled===!0&&At.isPresenting===!0){let St=E.xr.getDepthSensingMesh();St!==null&&Ui(St,U,-1/0,E.sortObjects)}Ui(M,U,0,E.sortObjects),b.finish(),D!==null&&D.updateLights(v.state.lightsArray),E.sortObjects===!0&&b.sort(ct,Vt),xe=At.enabled===!1||At.isPresenting===!1||At.hasDepthSensing()===!1,xe&&Wt.addToRenderList(b,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),te===!0&&Lt.beginShadows();let W=v.state.shadowsArray;if(Nt.render(W,M,U),te===!0&&Lt.endShadows(),(H&&x.hasRenderPass())===!1){let St=b.opaque,gt=b.transmissive;if(v.setupLights(),U.isArrayCamera){let wt=U.cameras;if(gt.length>0)for(let Rt=0,Xt=wt.length;Rt<Xt;Rt++){let Kt=wt[Rt];As(St,gt,M,Kt)}xe&&Wt.render(M);for(let Rt=0,Xt=wt.length;Rt<Xt;Rt++){let Kt=wt[Rt];Ts(b,M,Kt,Kt.viewport)}}else gt.length>0&&As(St,gt,M,U),xe&&Wt.render(M),Ts(b,M,U)}j!==null&&q===0&&(K.updateMultisampleRenderTarget(j),K.updateRenderTargetMipmap(j)),H&&x.end(E),M.isScene===!0&&M.onAfterRender(E,M,U),vt.resetDefaultState(),Z=-1,$=null,h.pop(),h.length>0?(v=h[h.length-1],K.setTextureUnits(v.state.textureUnits),te===!0&&Lt.setGlobalState(E.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,D!==null&&D.renderEnd()};function Ui(M,U,X,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)v.pushLightProbeGrid(M);else if(M.isLight)v.pushLight(M),M.castShadow&&v.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(Yt)){H&&Ee.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Jt);let St=it.update(M),gt=M.material;gt.visible&&b.push(M,St,gt,X,Ee.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(Yt))){let St=it.update(M),gt=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Ee.copy(M.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ee.copy(St.boundingSphere.center)),Ee.applyMatrix4(M.matrixWorld).applyMatrix4(Jt)),Array.isArray(gt)){let wt=St.groups;for(let Rt=0,Xt=wt.length;Rt<Xt;Rt++){let Kt=wt[Rt],Ct=gt[Kt.materialIndex];Ct&&Ct.visible&&b.push(M,St,Ct,X,Ee.z,Kt,U)}}else gt.visible&&b.push(M,St,gt,X,Ee.z,null,U)}}let xt=M.children;for(let St=0,gt=xt.length;St<gt;St++)Ui(xt[St],U,X,H)}function Ts(M,U,X,H){let{opaque:W,transmissive:xt,transparent:St}=M;v.setupLightsView(X),te===!0&&Lt.setGlobalState(E.clippingPlanes,X),H&&_.viewport(J.copy(H)),W.length>0&&pi(W,U,X),xt.length>0&&pi(xt,U,X),St.length>0&&pi(St,U,X),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function As(M,U,X,H){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[H.id]===void 0){let Ct=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[H.id]=new je(1,1,{generateMipmaps:!0,type:Ct?An:Qe,minFilter:Fn,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Qt.workingColorSpace})}let xt=v.state.transmissionRenderTarget[H.id],St=H.viewport||J;xt.setSize(St.z*E.transmissionResolutionScale,St.w*E.transmissionResolutionScale);let gt=E.getRenderTarget(),wt=E.getActiveCubeFace(),Rt=E.getActiveMipmapLevel();E.setRenderTarget(xt),E.getClearColor(Ot),Zt=E.getClearAlpha(),Zt<1&&E.setClearColor(16777215,.5),E.clear(),xe&&Wt.render(X);let Xt=E.toneMapping;E.toneMapping=En;let Kt=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),v.setupLightsView(H),te===!0&&Lt.setGlobalState(E.clippingPlanes,H),pi(M,X,H),K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Ct=!1;for(let oe=0,Te=U.length;oe<Te;oe++){let ye=U[oe],{object:me,geometry:ke,material:Tt,group:Ye}=ye;if(Tt.side===Nn&&me.layers.test(H.layers)){let se=Tt.side;Tt.side=Ke,Tt.needsUpdate=!0,I(me,X,H,ke,Tt,Ye),Tt.side=se,Tt.needsUpdate=!0,Ct=!0}}Ct===!0&&(K.updateMultisampleRenderTarget(xt),K.updateRenderTargetMipmap(xt))}E.setRenderTarget(gt,wt,Rt),E.setClearColor(Ot,Zt),Kt!==void 0&&(H.viewport=Kt),E.toneMapping=Xt}function pi(M,U,X){let H=U.isScene===!0?U.overrideMaterial:null;for(let W=0,xt=M.length;W<xt;W++){let St=M[W],{object:gt,geometry:wt,group:Rt}=St,Xt=St.material;Xt.allowOverride===!0&&H!==null&&(Xt=H),gt.layers.test(X.layers)&&I(gt,U,X,wt,Xt,Rt)}}function I(M,U,X,H,W,xt){D!==null&&W.isNodeMaterial&&D.setObject(M,W),M.onBeforeRender(E,U,X,H,W,xt),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(E,U,X,H,M,xt),W.transparent===!0&&W.side===Nn&&W.forceSinglePass===!1?(W.side=Ke,W.needsUpdate=!0,E.renderBufferDirect(X,U,H,W,M,xt),W.side=ci,W.needsUpdate=!0,E.renderBufferDirect(X,U,H,W,M,xt),W.side=Nn):E.renderBufferDirect(X,U,H,W,M,xt),M.onAfterRender(E,U,X,H,W,xt)}function k(M,U,X){U.isScene!==!0&&(U=Ne);let H=Y.get(M),W=v.state.lights,xt=v.state.shadowsArray,St=W.state.version,gt=ft.getParameters(M,W.state,xt,U,X,v.state.lightProbeGridArray),wt=ft.getProgramCacheKey(gt),Rt=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let Xt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=ot.get(M.envMap||H.environment,Xt),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Rt===void 0&&(M.addEventListener("dispose",nn),Rt=new Map,H.programs=Rt);let Kt=Rt.get(wt);if(Kt!==void 0){if(H.currentProgram===Kt&&H.lightsStateVersion===St)return at(M,gt),Kt}else gt.uniforms=ft.getUniforms(M),D!==null&&M.isNodeMaterial&&D.build(M,X,gt),M.onBeforeCompile(gt,E),Kt=ft.acquireProgram(gt,wt),Rt.set(wt,Kt),H.uniforms=gt.uniforms;let Ct=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ct.clippingPlanes=Lt.uniform),at(M,gt),H.needsLights=Gt(M),H.lightsStateVersion=St,H.needsLights&&(Ct.ambientLightColor.value=W.state.ambient,Ct.lightProbe.value=W.state.probe,Ct.sunLights.value=W.state.sun,Ct.sunLightShadows.value=W.state.sunShadow,Ct.directionalLights.value=W.state.directional,Ct.directionalLightShadows.value=W.state.directionalShadow,Ct.spotLights.value=W.state.spot,Ct.spotLightShadows.value=W.state.spotShadow,Ct.rectAreaLights.value=W.state.rectArea,Ct.ltc_1.value=W.state.rectAreaLTC1,Ct.ltc_2.value=W.state.rectAreaLTC2,Ct.pointLights.value=W.state.point,Ct.pointLightShadows.value=W.state.pointShadow,Ct.hemisphereLights.value=W.state.hemi,Ct.sunShadowMatrix.value=W.state.sunShadowMatrix,Ct.sunShadowCascade.value=W.state.sunShadowCascade,Ct.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ct.spotLightMatrix.value=W.state.spotLightMatrix,Ct.spotLightMap.value=W.state.spotLightMap,Ct.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=v.state.lightProbeGridArray.length>0,H.currentProgram=Kt,H.uniformsList=null,Kt}function et(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=Ss.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function at(M,U){let X=Y.get(M);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function _t(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;S.setFromMatrixPosition(U.matrixWorld);for(let X=0,H=M.length;X<H;X++){let W=M[X];if(W.texture!==null&&W.boundingBox.containsPoint(S))return W}return null}function Et(M,U,X,H,W){U.isScene!==!0&&(U=Ne),K.resetTextureUnits();let xt=U.fog,St=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,gt=j===null?E.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qt.workingColorSpace,wt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Rt=ot.get(H.envMap||St,wt),Xt=H.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Kt=!!X.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ct=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,Te=!!X.morphAttributes.color,ye=En;H.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ye=E.toneMapping);let me=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ke=me!==void 0?me.length:0,Tt=Y.get(H),Ye=v.state.lights;if(te===!0&&(ce===!0||M!==$)){let _e=M===$&&H.id===Z;Lt.setState(H,M,_e)}let se=!1;H.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==Ye.state.version||Tt.outputColorSpace!==gt||W.isBatchedMesh&&Tt.batching===!1||!W.isBatchedMesh&&Tt.batching===!0||W.isBatchedMesh&&Tt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&Tt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&Tt.instancing===!1||!W.isInstancedMesh&&Tt.instancing===!0||W.isSkinnedMesh&&Tt.skinning===!1||!W.isSkinnedMesh&&Tt.skinning===!0||W.isInstancedMesh&&Tt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Tt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Tt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Tt.instancingMorph===!1&&W.morphTexture!==null||Tt.envMap!==Rt||H.fog===!0&&Tt.fog!==xt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==Lt.numPlanes||Tt.numIntersection!==Lt.numIntersection)||Tt.vertexAlphas!==Xt||Tt.vertexTangents!==Kt||Tt.morphTargets!==Ct||Tt.morphNormals!==oe||Tt.morphColors!==Te||Tt.toneMapping!==ye||Tt.morphTargetsCount!==ke||!!Tt.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(se=!0):(se=!0,Tt.__version=H.version);let hn=Tt.currentProgram;se===!0&&(hn=k(H,U,W),D&&H.isNodeMaterial&&D.onUpdateProgram(H,hn,Tt));let Pn=!1,Zn=!1,Fi=!1,pe=hn.getUniforms(),we=Tt.uniforms;if(_.useProgram(hn.program)&&(Pn=!0,Zn=!0,Fi=!0),H.id!==Z&&(Z=H.id,Zn=!0),Tt.needsLights){let _e=_t(v.state.lightProbeGridArray,W);Tt.lightProbeGrid!==_e&&(Tt.lightProbeGrid=_e,Zn=!0)}if(Pn||$!==M){_.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),pe.setValue(z,"projectionMatrix",M.projectionMatrix),pe.setValue(z,"viewMatrix",M.matrixWorldInverse);let Jn=pe.map.cameraPosition;Jn!==void 0&&Jn.setValue(z,ie.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&pe.setValue(z,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&pe.setValue(z,"isOrthographic",M.isOrthographicCamera===!0),$!==M&&($=M,Zn=!0,Fi=!0)}if(Tt.needsLights&&(Ye.state.sunShadowMap.length>0&&pe.setValue(z,"sunShadowMap",Ye.state.sunShadowMap,K),Ye.state.directionalShadowMap.length>0&&pe.setValue(z,"directionalShadowMap",Ye.state.directionalShadowMap,K),Ye.state.spotShadowMap.length>0&&pe.setValue(z,"spotShadowMap",Ye.state.spotShadowMap,K),Ye.state.pointShadowMap.length>0&&pe.setValue(z,"pointShadowMap",Ye.state.pointShadowMap,K)),W.isSkinnedMesh){pe.setOptional(z,W,"bindMatrix"),pe.setOptional(z,W,"bindMatrixInverse");let _e=W.skeleton;_e&&(_e.boneTexture===null&&_e.computeBoneTexture(),pe.setValue(z,"boneTexture",_e.boneTexture,K))}W.isBatchedMesh&&(pe.setOptional(z,W,"batchingTexture"),pe.setValue(z,"batchingTexture",W._matricesTexture,K),pe.setOptional(z,W,"batchingIdTexture"),pe.setValue(z,"batchingIdTexture",W._indirectTexture,K),pe.setOptional(z,W,"batchingColorTexture"),W._colorsTexture!==null&&pe.setValue(z,"batchingColorTexture",W._colorsTexture,K));let $n=X.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&O.update(W,X,hn),(Zn||Tt.receiveShadow!==W.receiveShadow)&&(Tt.receiveShadow=W.receiveShadow,pe.setValue(z,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(we.envMapIntensity.value=U.environmentIntensity),we.dfgLUT!==void 0&&(we.dfgLUT.value=A0()),Zn){if(pe.setValue(z,"toneMappingExposure",E.toneMappingExposure),Tt.needsLights&&Pt(we,Fi),xt&&H.fog===!0&&It.refreshFogUniforms(we,xt),It.refreshMaterialUniforms(we,H,st,Q,v.state.transmissionRenderTarget[M.id]),Tt.needsLights&&Tt.lightProbeGrid){let _e=Tt.lightProbeGrid;we.probesSH.value=_e.texture,we.probesMin.value.copy(_e.boundingBox.min),we.probesMax.value.copy(_e.boundingBox.max),we.probesResolution.value.copy(_e.resolution)}Ss.upload(z,et(Tt),we,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Ss.upload(z,et(Tt),we,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&pe.setValue(z,"center",W.center),pe.setValue(z,"modelViewMatrix",W.modelViewMatrix),pe.setValue(z,"normalMatrix",W.normalMatrix),pe.setValue(z,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let _e=H.uniformsGroups;for(let Jn=0,Oi=_e.length;Jn<Oi;Jn++){let fc=_e[Jn];rt.update(fc,hn),rt.bind(fc,hn)}}return hn}function Pt(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function Gt(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(M,U,X){let H=Y.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),Y.get(M.texture).__webglTexture=U,Y.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:X,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let X=Y.get(M);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,X=0){j=M,G=U,q=X;let H=null,W=!1,xt=!1;if(M){let gt=Y.get(M);if(gt.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(z.FRAMEBUFFER,gt.__webglFramebuffer),J.copy(M.viewport),dt.copy(M.scissor),Mt=M.scissorTest,_.viewport(J),_.scissor(dt),_.setScissorTest(Mt),Z=-1;return}else if(gt.__webglFramebuffer===void 0)K.setupRenderTarget(M);else if(gt.__hasExternalTextures)K.rebindTextures(M,Y.get(M.texture).__webglTexture,Y.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Xt=M.depthTexture;if(gt.__boundDepthTexture!==Xt){if(Xt!==null&&Y.has(Xt)&&(M.width!==Xt.image.width||M.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(M)}}let wt=M.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(xt=!0);let Rt=Y.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Rt[U])?H=Rt[U][X]:H=Rt[U],W=!0):M.samples>0&&K.useMultisampledRTT(M)===!1?H=Y.get(M).__webglMultisampledFramebuffer:Array.isArray(Rt)?H=Rt[X]:H=Rt,J.copy(M.viewport),dt.copy(M.scissor),Mt=M.scissorTest}else J.copy(bt).multiplyScalar(st).floor(),dt.copy(qt).multiplyScalar(st).floor(),Mt=be;if(X!==0&&(H=F),_.bindFramebuffer(z.FRAMEBUFFER,H)&&_.drawBuffers(M,H),_.viewport(J),_.scissor(dt),_.setScissorTest(Mt),W){let gt=Y.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+U,gt.__webglTexture,X)}else if(xt){let gt=U;for(let wt=0;wt<M.textures.length;wt++){let Rt=Y.get(M.textures[wt]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+wt,Rt.__webglTexture,X,gt)}}else if(M!==null&&X!==0){let gt=Y.get(M.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,gt.__webglTexture,X)}Z=-1};function ge(M){let U=Y.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=R.textureFormatReadable(M.format),U.__typeReadable=R.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,X,H,W,xt,St,gt=0){if(!(M&&M.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt){_.bindFramebuffer(z.FRAMEBUFFER,wt);try{let Rt=M.textures[gt],Xt=Rt.format,Kt=Rt.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+gt);let Ct=ge(Rt);if(Ct.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ct.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&X>=0&&X<=M.height-W&&z.readPixels(U,X,H,W,ht.convert(Xt),ht.convert(Kt),xt)}finally{let Rt=j!==null?Y.get(j).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Rt)}}},this.readRenderTargetPixelsAsync=async function(M,U,X,H,W,xt,St,gt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Y.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&St!==void 0&&(wt=wt[St]),wt)if(U>=0&&U<=M.width-H&&X>=0&&X<=M.height-W){_.bindFramebuffer(z.FRAMEBUFFER,wt);let Rt=M.textures[gt],Xt=Rt.format,Kt=Rt.type;M.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+gt);let Ct=ge(Rt);if(Ct.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ct.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let oe=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.bufferData(z.PIXEL_PACK_BUFFER,xt.byteLength,z.STREAM_READ),z.readPixels(U,X,H,W,ht.convert(Xt),ht.convert(Kt),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);let Te=j!==null?Y.get(j).__webglFramebuffer:null;_.bindFramebuffer(z.FRAMEBUFFER,Te);let ye=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Eh(z,ye,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,oe),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,xt),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(oe),z.deleteSync(ye),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,X=0){let H=Math.pow(2,-X),W=Math.floor(M.image.width*H),xt=Math.floor(M.image.height*H),St=U!==null?U.x:0,gt=U!==null?U.y:0;K.setTexture2D(M,0),z.copyTexSubImage2D(z.TEXTURE_2D,X,0,0,St,gt,W,xt),_.unbindTexture()},this.copyTextureToTexture=function(M,U,X=null,H=null,W=0,xt=0){let St,gt,wt,Rt,Xt,Kt,Ct,oe,Te,ye=M.isCompressedTexture?M.mipmaps[xt]:M.image;if(X!==null)St=X.max.x-X.min.x,gt=X.max.y-X.min.y,wt=X.isBox3?X.max.z-X.min.z:1,Rt=X.min.x,Xt=X.min.y,Kt=X.isBox3?X.min.z:0;else{let we=Math.pow(2,-W);St=Math.floor(ye.width*we),gt=Math.floor(ye.height*we),M.isDataArrayTexture?wt=ye.depth:M.isData3DTexture?wt=Math.floor(ye.depth*we):wt=1,Rt=0,Xt=0,Kt=0}H!==null?(Ct=H.x,oe=H.y,Te=H.z):(Ct=0,oe=0,Te=0);let me=ht.convert(U.format),ke=ht.convert(U.type),Tt;U.isData3DTexture?(K.setTexture3D(U,0),Tt=z.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),Tt=z.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),Tt=z.TEXTURE_2D),_.activeTexture(z.TEXTURE0),_.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(z.UNPACK_ALIGNMENT,U.unpackAlignment);let Ye=_.getParameter(z.UNPACK_ROW_LENGTH),se=_.getParameter(z.UNPACK_IMAGE_HEIGHT),hn=_.getParameter(z.UNPACK_SKIP_PIXELS),Pn=_.getParameter(z.UNPACK_SKIP_ROWS),Zn=_.getParameter(z.UNPACK_SKIP_IMAGES);_.pixelStorei(z.UNPACK_ROW_LENGTH,ye.width),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ye.height),_.pixelStorei(z.UNPACK_SKIP_PIXELS,Rt),_.pixelStorei(z.UNPACK_SKIP_ROWS,Xt),_.pixelStorei(z.UNPACK_SKIP_IMAGES,Kt);let Fi=M.isDataArrayTexture||M.isData3DTexture,pe=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let we=Y.get(M),$n=Y.get(U),_e=Y.get(we.__renderTarget),Jn=Y.get($n.__renderTarget);_.bindFramebuffer(z.READ_FRAMEBUFFER,_e.__webglFramebuffer),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,Jn.__webglFramebuffer);for(let Oi=0;Oi<wt;Oi++)Fi&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(M).__webglTexture,W,Kt+Oi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,xt,Te+Oi)),z.blitFramebuffer(Rt,Xt,St,gt,Ct,oe,St,gt,z.DEPTH_BUFFER_BIT,z.NEAREST);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||Y.has(M)){let we=Y.get(M),$n=Y.get(U);_.bindFramebuffer(z.READ_FRAMEBUFFER,L),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,N);for(let _e=0;_e<wt;_e++)Fi?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,we.__webglTexture,W,Kt+_e):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,we.__webglTexture,W),pe?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,$n.__webglTexture,xt,Te+_e):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,$n.__webglTexture,xt),W!==0?z.blitFramebuffer(Rt,Xt,St,gt,Ct,oe,St,gt,z.COLOR_BUFFER_BIT,z.NEAREST):pe?z.copyTexSubImage3D(Tt,xt,Ct,oe,Te+_e,Rt,Xt,St,gt):z.copyTexSubImage2D(Tt,xt,Ct,oe,Rt,Xt,St,gt);_.bindFramebuffer(z.READ_FRAMEBUFFER,null),_.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else pe?M.isDataTexture||M.isData3DTexture?z.texSubImage3D(Tt,xt,Ct,oe,Te,St,gt,wt,me,ke,ye.data):U.isCompressedArrayTexture?z.compressedTexSubImage3D(Tt,xt,Ct,oe,Te,St,gt,wt,me,ye.data):z.texSubImage3D(Tt,xt,Ct,oe,Te,St,gt,wt,me,ke,ye):M.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,xt,Ct,oe,St,gt,me,ke,ye.data):M.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,xt,Ct,oe,ye.width,ye.height,me,ye.data):z.texSubImage2D(z.TEXTURE_2D,xt,Ct,oe,St,gt,me,ke,ye);_.pixelStorei(z.UNPACK_ROW_LENGTH,Ye),_.pixelStorei(z.UNPACK_IMAGE_HEIGHT,se),_.pixelStorei(z.UNPACK_SKIP_PIXELS,hn),_.pixelStorei(z.UNPACK_SKIP_ROWS,Pn),_.pixelStorei(z.UNPACK_SKIP_IMAGES,Zn),xt===0&&U.generateMipmaps&&z.generateMipmap(Tt),_.unbindTexture()},this.initRenderTarget=function(M){Y.get(M).__webglFramebuffer===void 0&&K.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?K.setTextureCube(M,0):M.isData3DTexture?K.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?K.setTexture2DArray(M,0):K.setTexture2D(M,0),_.unbindTexture()},this.resetState=function(){G=0,q=0,j=null,_.reset(),vt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}};var cu={type:"change"},nc={type:"start"},uu={type:"end"},Mo=new bi,hu=new an,C0=Math.cos(70*Pl.DEG2RAD),Le=new B,tn=2*Math.PI,de={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ec=1e-6,bo=class extends lr{constructor(t,e=null){super(t,e),this.state=de.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},this.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new $e,this._lastTargetPosition=new B,this._quat=new $e().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new fs,this._sphericalDelta=new fs,this._scale=1,this._panOffset=new B,this._rotateStart=new Ut,this._rotateEnd=new Ut,this._rotateDelta=new Ut,this._panStart=new Ut,this._panEnd=new Ut,this._panDelta=new Ut,this._dollyStart=new Ut,this._dollyEnd=new Ut,this._dollyDelta=new Ut,this._dollyDirection=new B,this._mouse=new Ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=P0.bind(this),this._onPointerDown=R0.bind(this),this._onPointerUp=I0.bind(this),this._onContextMenu=B0.bind(this),this._onMouseWheel=N0.bind(this),this._onKeyDown=U0.bind(this),this._onTouchStart=F0.bind(this),this._onTouchMove=O0.bind(this),this._onMouseDown=L0.bind(this),this._onMouseMove=D0.bind(this),this._interceptControlDown=z0.bind(this),this._interceptControlUp=k0.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=de.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(cu),this.update(),this.state=de.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Le.copy(e).sub(this.target),Le.applyQuaternion(this._quat),this._spherical.setFromVector3(Le),this.autoRotate&&this.state===de.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=tn:n>Math.PI&&(n-=tn),s<-Math.PI?s+=tn:s>Math.PI&&(s-=tn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Le.setFromSpherical(this._spherical),Le.applyQuaternion(this._quatInverse),e.copy(this.target).add(Le),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Le.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new B(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new B(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Le.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Mo.origin.copy(this.object.position),Mo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Mo.direction))<C0?this.object.lookAt(this.target):(hu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Mo.intersectPlane(hu,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ec||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ec||this._lastTargetPosition.distanceToSquared(this.target)>ec?(this.dispatchEvent(cu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?tn/60*this.autoRotateSpeed*t:tn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Le.setFromMatrixColumn(e,0),Le.multiplyScalar(-t),this._panOffset.add(Le)}_panUp(t,e){this.screenSpacePanning===!0?Le.setFromMatrixColumn(e,1):(Le.setFromMatrixColumn(e,0),Le.crossVectors(this.object.up,Le)),Le.multiplyScalar(t),this._panOffset.add(Le)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Le.copy(s).sub(this.target);let r=Le.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-tn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/e.clientHeight),this._rotateUp(tn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function R0(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function P0(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function I0(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(uu),this.state=de.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function L0(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case fn.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=de.DOLLY;break;case fn.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}break;case fn.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=de.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=de.PAN}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(nc)}function D0(i){switch(this.state){case de.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case de.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case de.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function N0(i){this.enabled===!1||this.enableZoom===!1||this.state!==de.NONE||(i.preventDefault(),this.dispatchEvent(nc),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(uu))}function U0(i){this.enabled!==!1&&this._handleKeyDown(i)}function F0(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case wn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=de.TOUCH_ROTATE;break;case wn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=de.TOUCH_PAN;break;default:this.state=de.NONE}break;case 2:switch(this.touches.TWO){case wn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=de.TOUCH_DOLLY_PAN;break;case wn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=de.TOUCH_DOLLY_ROTATE;break;default:this.state=de.NONE}break;default:this.state=de.NONE}this.state!==de.NONE&&this.dispatchEvent(nc)}function O0(i){switch(this._trackPointer(i),this.state){case de.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case de.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case de.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case de.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=de.NONE}}function B0(i){this.enabled!==!1&&i.preventDefault()}function z0(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function k0(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var du=[316,497],Sr=[.418,-.908],Mr=[{wing:1,type:"pavilion",r:[126,176,329,379]},{wing:1,type:"body",r:[135,174,379,483]},{wing:2,type:"body",r:[176,259,340,379]},{wing:3,type:"body",r:[259,284,340,380]},{wing:3,type:"pavilion",r:[284,343,331.5,380]},{wing:3,type:"body",r:[343,451,340,380]},{wing:4,type:"pavilion",r:[451,502,329,385]},{wing:4,type:"body",r:[451,497,385,487]},{wing:5,type:"body",r:[293,332,380,487],finish:"plaster"},{wing:5,type:"pavilion",r:[287,338,487,509],finish:"plaster"},{wing:6,type:"body",r:[451,497,509,615]},{wing:6,type:"pavilion",r:[451,500,615,663]},{wing:7,type:"pavilion",r:[312,342,614.5,658]},{wing:7,type:"body",r:[342,451,617,655]},{wing:8,type:"body",r:[174,283,617,655]},{wing:8,type:"pavilion",r:[283,312,614.5,658]},{wing:9,type:"body",r:[135,174,509,613]},{wing:9,type:"pavilion",r:[125,174,613,663]},{wing:0,type:"link",r:[135,174,483,509]},{wing:0,type:"link",r:[451,497,487,509]}],wo=[{y:0,h:4.4},{y:4.4,h:3.9},{y:8.3,h:3.9},{y:12.2,h:3.9},{y:16.1,h:3.4}],ic=19.9,fu=16.1,sc=[{id:"cs13",at:[477,329],face:"n",wings:[4]},{id:"cs15",at:[316,331.5],face:"n",wings:[3]},{id:"ah1",at:[126,354],face:"w",wings:[1]},{id:"ah3",at:[135,496],face:"w",wings:[]},{id:"ah5",at:[125,639],face:"w",wings:[9]},{id:"hl14",at:[313,658],face:"s",wings:[7,8]}],bs=[{name:"ADOLF-HEYDEN-STRASSE",width:17,path:[[104,80],[104,880]],label:[104,560]},{name:"CARL-SPINDLER-STRASSE",width:15,path:[[104,316],[500,316],[517,333],[517,690]],label:[300,316]},{name:"HENRIETTE-LUSTIG-STRASSE",width:15,path:[[20,690],[517,690]],label:[300,690]}],Eo=[[592,60],[598,200],[603,300],[608,420],[614,550],[622,680],[632,820],[640,960]],gn=(i,t)=>[(i-du[0])*.45,(t-du[1])*.45];var Li=["ground","upper","cornice","top","attic"].flatMap(i=>["brick","plaster"].map(t=>`${t}:${i}`)),ac=(i,t)=>Li.indexOf(`${i}:${t}`);function pu(i){let t=i>>>0;return()=>(t=t*1664525+1013904223>>>0)/4294967296}var De={brick:["#c97f67","#c3775f","#ce8870","#bd715a"],mortar:"rgba(255, 236, 222, 0.09)",stone:"#f1e8dc",plinth:"#a8624d",frame:"#f8f3ec",glassTop:"#9aabb3",glassBottom:"#788c96",attic:"#f3efe9",atticLine:"#d9d0c4",plaster:"#ead8b4",plasterLine:"rgba(150, 115, 60, 0.12)",surround:"#f6eddb",lit:["#ffc56f","#ffd596","#ffb85c","#ffe1ae"]};function rc(i,t,e,n,s,r){i.beginPath(),i.moveTo(t,e+s),i.lineTo(t,e+r),r>0?i.quadraticCurveTo(t+n/2,e-r*.9,t+n,e+r):i.lineTo(t+n,e),i.lineTo(t+n,e+s),i.closePath()}function V0(i,t,e,n=1,s=1){let r=document.createElement("canvas");r.width=Math.round(1024*s),r.height=Math.round(128*s);let a=r.getContext("2d");a.scale(s,s);let o=pu(n*7919+i.length*31+(t==="plaster"?17:0)),c=1024/8;if(a.fillStyle=e?"#000":i==="attic"?De.attic:t==="plaster"?De.plaster:De.brick[0],a.fillRect(0,0,1024,128),!e&&i!=="attic"){if(t==="brick"){for(let l=0;l<260;l++)a.fillStyle=De.brick[1+Math.floor(o()*3)],a.globalAlpha=.5,a.fillRect(o()*1024,Math.floor(o()*128/3)*3,6+o()*14,3);a.globalAlpha=1,a.fillStyle=De.mortar;for(let l=0;l<128;l+=3)a.fillRect(0,l,1024,1)}else if(a.fillStyle=De.plasterLine,i==="ground")for(let l=10;l<128;l+=14)a.fillRect(0,l,1024,2)}for(let l=0;l<8;l++){let u=l*c,p=o()<.42,d=De.lit[Math.floor(o()*De.lit.length)];if(i==="attic"){if(e){p&&(a.fillStyle=d,a.fillRect(u+4,30.72,c-8,64));continue}let v=a.createLinearGradient(0,30.72,0,30.72+64);v.addColorStop(0,De.glassTop),v.addColorStop(1,De.glassBottom),a.fillStyle=v,a.fillRect(u+4,30.72,c-8,64),a.fillStyle=De.atticLine,a.fillRect(u+c/2-1,30.72,2,64),a.fillRect(u,123,c,5);continue}let g=i==="ground",y=c*(g?.42:i==="top"?.32:.36),T=128*(g?.66:i==="top"?.46:.56),m=u+(c-y)/2,f=i==="cornice"?128*.3:g?128*.16:128*.2,w=t==="brick"?y*.16:0;if(e){p&&(a.fillStyle=d,rc(a,m,f,y,T,w),a.fill());continue}t==="plaster"?(a.fillStyle=De.surround,a.fillRect(m-5,f-6,y+10,T+12)):(a.fillStyle="rgba(95, 40, 28, 0.22)",rc(a,m-4,f-3,y+8,T+6,w),a.fill());let C=a.createLinearGradient(0,f,0,f+T);C.addColorStop(0,De.glassTop),C.addColorStop(1,De.glassBottom),a.fillStyle=C,rc(a,m,f,y,T,w),a.fill(),a.strokeStyle=De.frame,a.lineWidth=3,a.stroke(),a.fillStyle=De.frame,a.fillRect(m+y/2-1,f+w,2,T-w),a.fillStyle=De.stone,a.fillRect(m-5,f+T,y+10,4)}if(!e){if(i==="ground"){t==="brick"&&(a.fillStyle=De.plinth,a.fillRect(0,118,1024,10));let l=a.createLinearGradient(0,128,0,128*.55);l.addColorStop(0,"rgba(60, 35, 25, 0.18)"),l.addColorStop(1,"rgba(60, 35, 25, 0)"),a.fillStyle=l,a.fillRect(0,128*.55,1024,128*.45)}if(i==="cornice"){a.fillStyle=De.stone,a.fillRect(0,0,1024,14),a.fillStyle=t==="plaster"?"rgba(150, 120, 70, 0.25)":"rgba(120, 60, 45, 0.35)";for(let l=2;l<1024;l+=10)a.fillRect(l,16,5,6)}}return r}function oc(i,t){let e=Math.round(1024*t),n=Math.round(128*t),s=new Uint8Array(e*n*4*Li.length);return Li.forEach((r,a)=>{let[o,c]=r.split(":"),l=["ground","upper","cornice","top","attic"].indexOf(c)+1,u=V0(c,o,i,l,t);s.set(u.getContext("2d").getImageData(0,0,e,n).data,a*e*n*4)}),{data:s,width:e,height:n,depth:Li.length}}function lc(i){let t=document.createElement("canvas");t.width=t.height=512;let e=t.getContext("2d");e.scale(2,2),e.fillStyle=i?"#2a2f30":"#7c8684",e.fillRect(0,0,256,256);let n=pu(99);for(let s=0;s<900;s++)e.fillStyle=i?"rgba(255,255,255,0.03)":`rgba(${n()<.5?"30,36,38":"255,255,255"},0.05)`,e.fillRect(n()*256,n()*256,2,2);e.fillStyle=i?"#363c3d":"#c3cac9";for(let s=20;s<256;s+=64)for(let r=10;r<256;r+=32)e.fillRect(r,s,13,18);return t}var fi=6,ws=10*fi,To=(i,t)=>i*fi+t,W0=-1,cc=-2,qe={FACADE:0,ROOF:1,PLATE:2,CORNICE:3,CAP:4,ROOFBOX:5,ROOFBOX_TOP:6};function X0(i){let[t,e,n,s]=i.r,r={n:0,s:0,w:0,e:0},a=(o,c,l,u)=>Math.max(0,Math.min(c,u)-Math.max(o,l));return Mr.forEach(o=>{if(o===i)return;let[c,l,u,p]=o.r;Math.abs(p-n)<.8&&(r.n+=a(t,e,c,l)),Math.abs(u-s)<.8&&(r.s+=a(t,e,c,l)),Math.abs(l-t)<.8&&(r.w+=a(n,s,u,p)),Math.abs(c-e)<.8&&(r.e+=a(n,s,u,p))}),{n:r.n>(e-t)*.5,s:r.s>(e-t)*.5,w:r.w>(s-n)*.5,e:r.e>(s-n)*.5}}function mu(){let i=[],t=[],e=[],n=[],s=[],r=[],a=[],o=new Map,c=0,l=cc,u=qe.PLATE,p=(v,A,h)=>{i.push(v[0],v[1],v[2]),t.push(A[0],A[1],A[2]),e.push(h[0],h[1]),n.push(c),s.push(l),r.push(u)},d=(v,A,h)=>{let x=A[0]-v[0],E=A[1]-v[1],P=A[2]-v[2],D=h[0]-v[0],F=h[1]-v[1],L=h[2]-v[2],N=E*L-P*F,G=P*D-x*L,q=x*F-E*D,j=Math.hypot(N,G,q)||1;return[N/j,G/j,q/j]},g=(v,A,h,x,E,P,D,F)=>{let L=d(v,A,h);p(v,L,E),p(A,L,P),p(h,L,D),p(v,L,E),p(h,L,D),p(x,L,F)},y=(v,A,h,x,E,P)=>{let D=d(v,A,h);p(v,D,x),p(A,D,E),p(h,D,P)},T=[0,0],m=v=>v/(8*4.2);function f(v,A,h,x,E,P,D=0,F=1,L=!1){let N=1-D,G=1-F;[[[v,E,x],[A,E,x],[A,P,x],[v,P,x],m(v),m(A)],[[A,E,h],[v,E,h],[v,P,h],[A,P,h],m(A),m(v)],[[v,E,h],[v,E,x],[v,P,x],[v,P,h],m(h),m(x)],[[A,E,x],[A,E,h],[A,P,h],[A,P,x],m(x),m(h)]].forEach(([q,j,Z,$,J,dt])=>{L?g(j,q,$,Z,[dt,N],[J,N],[J,G],[dt,G]):g(q,j,Z,$,[J,N],[dt,N],[dt,G],[J,G])})}function w(v,A,h,x,E,P){g([v,P,x],[A,P,x],[A,P,h],[v,P,h],T,T,T,T),g([v,E,h],[A,E,h],[A,E,x],[v,E,x],T,T,T,T)}function C(v,A,h,x,E,P){let D=.045454545454545456,F=$=>[$[0]*D,$[2]*D],L=($,J,dt,Mt)=>g($,J,dt,Mt,F($),F(J),F(dt),F(Mt)),N=($,J,dt)=>y($,J,dt,F($),F(J),F(dt)),G=A-v,q=x-h,j=(v+A)/2,Z=(h+x)/2;if(G>=q){let $=q/2,J=[v+$,E+P,Z],dt=[A-$,E+P,Z];L([v,E,x],[A,E,x],dt,J),L([A,E,h],[v,E,h],J,dt),N([v,E,h],[v,E,x],J),N([A,E,x],[A,E,h],dt)}else{let $=G/2,J=[j,E+P,h+$],dt=[j,E+P,x-$];L([A,E,x],[A,E,h],J,dt),L([v,E,h],[v,E,x],dt,J),N([v,E,x],[A,E,x],dt),N([A,E,h],[v,E,h],J)}}let S=(v,A,h,x,E,P,D,F)=>a.push({wing:v,part:To(v,A),min:[h,x,E],max:[P,D,F]});Mr.forEach(v=>{let[A,h]=gn(v.r[0],v.r[2]),[x,E]=gn(v.r[1],v.r[3]),P=v.finish||"brick",D=X0(v),F=o.get(v.wing)||{x0:1/0,x1:-1/0,z0:1/0,z1:-1/0};o.set(v.wing,{x0:Math.min(F.x0,A),x1:Math.max(F.x1,x),z0:Math.min(F.z0,h),z1:Math.max(F.z1,E)});let L=v.type==="link"?4:5;for(let N=0;N<L;N++){let G=wo[N],q=G.y,j=G.y+G.h,Z=N===0?"ground":N===3?"cornice":"upper",[$,J,dt,Mt]=[A,x,h,E];if(N===4)if(v.type==="pavilion")Z="top",j=ic;else{Z="attic";let Ot=1;D.w||($+=Ot),D.e||(J-=Ot),D.n||(dt+=Ot),D.s||(Mt-=Ot)}if(c=To(v.wing,N),l=ac(Z==="attic"?"brick":P,Z),u=qe.FACADE,f($,J,dt,Mt,q,j),l=cc,u=qe.PLATE,w($,J,dt,Mt,q+.02,j-.02),S(v.wing,N,$,q,dt,J,j,Mt),N===3&&v.type==="body"&&(u=qe.CORNICE,w(A-.35,x+.35,h-.35,E+.35,j-.45,j),f(A-.35,x+.35,h-.35,E+.35,j-.45,j)),N===4&&v.type==="body"){let Ot=Math.min(2.2,Math.min(J-$,Mt-dt)*.12);c=To(v.wing,5),l=W0,u=qe.ROOF,C($-.3,J+.3,dt-.3,Mt+.3,j,Ot),S(v.wing,5,$-.3,j,dt-.3,J+.3,j+Ot,Mt+.3)}}if(v.type!=="body"){let N=v.type==="pavilion"?ic:fu;if(c=To(v.wing,5),l=ac(P,"upper"),u=qe.FACADE,f(A,x,h,E,N,N+.9,.02,.16),f(A,x,h,E,N,N+.9,.02,.16,!0),l=cc,u=qe.CAP,w(A+.3,x-.3,h+.3,E-.3,N,N+.05),S(v.wing,5,A,N,h,x,N+.9,E),v.type==="pavilion"&&x-A>12&&E-h>12){let G=(A+x)/2,q=(h+E)/2;u=qe.ROOFBOX,f(G-3,G+3,q-2.2,q+2.2,N,N+2.8),u=qe.ROOFBOX_TOP,w(G-3,G+3,q-2.2,q+2.2,N,N+2.8),S(v.wing,5,G-3,N,q-2.2,G+3,N+2.8,q+2.2)}}});let b=new Be;return b.setAttribute("position",new ue(i,3)),b.setAttribute("normal",new ue(t,3)),b.setAttribute("uv",new ue(e,2)),b.setAttribute("color",new ue(new Float32Array(r.length*3),3)),b.setAttribute("aPart",new ue(n,1)),b.setAttribute("aKind",new ue(s,1)),b.computeBoundingSphere(),{geometry:b,roles:Uint8Array.from(r),boxes:a,wingBoxes:o}}function gu(i,t,e){let n=[];n[qe.FACADE]=n[qe.ROOF]=new Bt(1,1,1),n[qe.PLATE]=new Bt(e.plate),n[qe.CORNICE]=new Bt(e.cornice),n[qe.CAP]=new Bt(e.cap),n[qe.ROOFBOX]=new Bt(e.roofbox),n[qe.ROOFBOX_TOP]=new Bt(e.roofboxTop);let s=i.attributes.color;t.forEach((r,a)=>s.setXYZ(a,n[r].r,n[r].g,n[r].b)),s.needsUpdate=!0}function _u(i){let t={uPart:{value:new Float32Array(ws*4)},uWingColor:{value:Array.from({length:ws/fi},()=>new B(1,1,1))},uClay:{value:new B(.9,.88,.85)},uGlow:{value:0},uFacade:{value:i.facade},uGlowMap:{value:i.glow},uRoof:{value:i.roof}},e=`#define B3D_PARTS ${ws}
attribute float aPart; attribute float aKind;
uniform vec4 uPart[B3D_PARTS]; uniform vec3 uWingColor[${ws/fi}];
varying float vFade; varying float vTint; varying float vDim; varying float vKind; varying vec2 vTexUv; varying vec3 vTintColor;
`,n=`#include <begin_vertex>
vec4 partState = uPart[int(aPart + 0.5)];
transformed.y += partState.x;
vFade = partState.y; vTint = partState.z; vDim = partState.w; vKind = aKind; vTexUv = uv;
vec3 wingColor = uWingColor[int(aPart + 0.5) / ${fi}];
vTintColor = partState.z < 0.0 ? mix(wingColor, vec3(1.0), 0.45) : wingColor;`,s=`uniform sampler2DArray uFacade; uniform sampler2DArray uGlowMap; uniform sampler2D uRoof;
uniform float uGlow; uniform vec3 uClay;
varying float vFade; varying float vTint; varying float vDim; varying float vKind; varying vec2 vTexUv; varying vec3 vTintColor;
`,r=(l,u)=>(l.onBeforeCompile=p=>{Object.assign(p.uniforms,t),p.vertexShader=e+p.vertexShader.replace("#include <begin_vertex>",n),p.fragmentShader=s+p.fragmentShader.replace("void main() {",`void main() {
  if (${u?"vFade < 0.001":"vFade > 0.001"}) discard;`).replace("#include <map_fragment>",`
  vec2 uvDx = dFdx(vTexUv), uvDy = dFdy(vTexUv);
  if (vKind > -0.5) diffuseColor.rgb *= textureGrad(uFacade, vec3(vTexUv, vKind), uvDx, uvDy).rgb;
  else if (vKind > -1.5) diffuseColor.rgb *= textureGrad(uRoof, vTexUv, uvDx, uvDy).rgb;`).replace("#include <emissivemap_fragment>",`
  totalEmissiveRadiance = (uGlow > 0.0 && vKind > -0.5) ? textureGrad(uGlowMap, vec3(vTexUv, vKind), uvDx, uvDy).rgb * uGlow : vec3(0.0);`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vTintColor * (0.5 + 0.5 * dot(gl_FragColor.rgb, vec3(0.333))), abs(vTint));
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uClay, vDim);${u?`
  gl_FragColor.a *= 1.0 - 0.86 * vFade;`:""}`)},l.customProgramCacheKey=()=>u?"b3d-ghost":"b3d-solid",l),a=r(new bn({vertexColors:!0,emissive:16777215}),!1),o=r(new bn({vertexColors:!0,emissive:16777215,transparent:!0,depthWrite:!1}),!0),c=new us;return c.onBeforeCompile=l=>{Object.assign(l.uniforms,t),l.vertexShader=e+l.vertexShader.replace("#include <begin_vertex>",n),l.fragmentShader=`varying float vFade;
`+l.fragmentShader.replace("void main() {",`void main() {
  if (vFade > 0.5) discard;`)},c.customProgramCacheKey=()=>"b3d-depth",{solid:a,ghost:o,depth:c,uniforms:t}}function hc(i,t,e,n){let s=0,r=1/0;for(let a=0;a<3;a++){let o=e.min[a]+(a===1?n:0),c=e.max[a]+(a===1?n:0);if(Math.abs(t[a])<1e-9){if(i[a]<o||i[a]>c)return 1/0;continue}let l=(o-i[a])/t[a],u=(c-i[a])/t[a];if(l>u&&([l,u]=[u,l]),l>s&&(s=l),u<r&&(r=u),s>r)return 1/0}return s}var Y0={day:{base:"#e9e2d6",walk:"#f4efe7",road:"#dad2c5",lane:"#fbf8f3",plaza:"#efe9df",lawn:"#cddbb6",lawnEdge:"#bccd9f",sand:"#ecd9b6",river:"#a9cad6",river2:"#8fb7c7",bank:"#d6e0c4",footprint:"#d8cfc1"},night:{base:"#494235",walk:"#585043",road:"#36302a",lane:"#8a8070",plaza:"#524a3d",lawn:"#3b4e34",lawnEdge:"#46603e",sand:"#64563f",river:"#21465e",river2:"#1b3a4f",bank:"#3c4b33",footprint:"#433b31"}};function xu(i){let t=Object.fromEntries(Object.entries(Y0[i]).map(([f,w])=>[f,new Bt(w)])),e=[],n=[],s=(f,w)=>gn(f,w),r=(f,w,C,S)=>{e.push(f,C,w),n.push(S.r,S.g,S.b)};function a(f,w,C){tr.triangulateShape(f.map(([b,v])=>new Ut(b,v)),[]).forEach(b=>{let[v,A,h]=b.map(E=>f[E]);((A[0]-v[0])*(h[1]-v[1])-(A[1]-v[1])*(h[0]-v[0])<0?b:[b[0],b[2],b[1]]).forEach(E=>r(f[E][0],f[E][1],w,Array.isArray(C)?C[E]:C))})}let o=(f,w,C,S,b,v)=>a([[f,w],[C,w],[C,S],[f,S]],b,v);function c(f,w,C,S,b,v,A){let h=[],x=(E,P,D)=>{for(let F=0;F<=6;F++){let L=D+F/6*(Math.PI/2);h.push([E+Math.cos(L)*b,P+Math.sin(L)*b])}};x(C-b,S-b,0),x(f+b,S-b,Math.PI/2),x(f+b,w+b,Math.PI),x(C-b,w+b,Math.PI*1.5),a(h,v,A)}function l(f,w,C,S){let b=w/2;for(let v=0;v<f.length-1;v++){let[A,h]=f[v],[x,E]=f[v+1],P=Math.hypot(x-A,E-h),D=-(E-h)/P*b,F=(x-A)/P*b;if(a([[A+D,h+F],[x+D,E+F],[x-D,E-F],[A-D,h-F]],C,S),v>0){let L=[];for(let N=0;N<16;N++){let G=N/16*Math.PI*2;L.push([A+Math.cos(G)*b,h+Math.sin(G)*b])}a(L,C,S)}}}function u(f,w,C,S,b,v){let A=w/2;for(let h=0;h<f.length-1;h++){let[x,E]=f[h],[P,D]=f[h+1],F=Math.hypot(P-x,D-E),L=(P-x)/F,N=(D-E)/F;for(let G=0;G+C<=F;G+=C+S){let q=x+L*G,j=E+N*G,Z=q+L*C,$=j+N*C;a([[q-N*A,j+L*A],[Z-N*A,$+L*A],[Z+N*A,$-L*A],[q+N*A,j-L*A]],b,v)}}}let p=f=>f*.45;o(-280,-280,280,280,0,t.base);let d=Eo.map(([f,w])=>s(f,w)),g=420,y=[...d,[g,d[d.length-1][1]],[g,d[0][1]]];a(y,.02,y.map(([f])=>t.river.clone().lerp(t.river2,Math.min(1,Math.max(0,(f-d[3][0])/(g-d[3][0])))))),a([...d,...d.slice().reverse().map(([f,w])=>[f-p(62),w])],.02,t.bank),bs.forEach(f=>l(f.path.map(([w,C])=>s(w,C)),p(f.width+16),.04,t.walk)),bs.forEach(f=>l(f.path.map(([w,C])=>s(w,C)),p(f.width),.06,t.road)),bs.forEach(f=>u(f.path.map(([w,C])=>s(w,C)),p(.7),p(5),p(6),.08,t.lane));let T=(f,w,C,S)=>{let[b,v]=s(f,C),[A,h]=s(w,S);return[b,v,A,h]};o(...T(174,451,380,617),.02,t.plaza),[[182,286,388,476],[339,443,388,476],[182,302,524,607],[322,443,524,607]].forEach(([f,w,C,S])=>{c(...T(f,w,C,S),p(7),.04,t.lawnEdge),c(...T(f+1.5,w-1.5,C+1.5,S-1.5),p(6),.06,t.lawn)}),c(...T(386,432,540,590),p(10),.08,t.sand),Mr.forEach(({r:[f,w,C,S]})=>o(...T(f-1.5,w+1.5,C-1.5,S+1.5),.03,t.footprint));let m=new Be;return m.setAttribute("position",new ue(e,3)),m.setAttribute("normal",new ue(new Float32Array(e.length).map((f,w)=>w%3===1?1:0),3)),m.setAttribute("color",new ue(n,3)),m}function yu(){let i={value:new B(.93,.91,.87)},t=new bn({vertexColors:!0});return t.onBeforeCompile=e=>{e.uniforms.uBg=i,e.vertexShader=`varying vec2 vGroundXZ;
`+e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vGroundXZ = (modelMatrix * vec4(transformed, 1.0)).xz;`),e.fragmentShader=`uniform vec3 uBg; varying vec2 vGroundXZ;
`+e.fragmentShader.replace("#include <dithering_fragment>",`#include <dithering_fragment>
  gl_FragColor.rgb = mix(gl_FragColor.rgb, uBg, smoothstep(165.0, 275.0, length(vGroundXZ)));`)},t.customProgramCacheKey=()=>"b3d-ground",{material:t,uBg:i}}var Z0={en:{empty:"Type a door number like 1.2.3, or just a wing number.",digits:"Door numbers only use digits, like 1.2.3 (wing, floor, door).",shape:"Door numbers look like 1.2.3: wing, floor, door.",wing:"Wing numbers go from 1 to 9.",top:(i,t)=>`The model shows floors 0 to ${i}, so floor ${t} is drawn as the top floor.`},de:{empty:"Gib eine T\xFCrnummer wie 1.2.3 ein oder nur die Nummer eines Fl\xFCgels.",digits:"T\xFCrnummern bestehen nur aus Ziffern, zum Beispiel 1.2.3 (Fl\xFCgel, Etage, T\xFCr).",shape:"Eine T\xFCrnummer sieht so aus: 1.2.3, also Fl\xFCgel, Etage, T\xFCr.",wing:"Die Fl\xFCgel sind von 1 bis 9 nummeriert.",top:(i,t)=>`Das Modell zeigt die Etagen 0 bis ${i}, deshalb wird Etage ${t} als oberste Etage gezeigt.`}},br=()=>Z0[typeof document<"u"&&document.documentElement.lang==="de"?"de":"en"];function uc(i,t=4){let e=String(i||"").trim().toLowerCase().replace(/^(wing|flügel|fluegel|wg\.?|door|tür|tuer)\s*/,"");if(!e)return{error:br().empty};if(/[^0-9.,;:\s/\-–—_]/.test(e))return{error:br().digits};let n=e.split(/[^0-9]+/).filter(Boolean);if(n.length===1&&n[0].length>=2){let o=n[0];n=o.length===2?[o[0],o[1]]:[o[0],o[1],o.slice(2)]}if(!n.length||n.length>3)return{error:br().shape};let s=Number(n[0]);if(!(s>=1&&s<=9))return{error:br().wing};if(n.length===1)return{wing:s,floor:null,door:null};let r=Number(n[1]),a=n.length===3?Number(n[2]):null;return r>t?{wing:s,floor:t,door:a,floorNote:br().top(t,r)}:{wing:s,floor:r,door:a}}function vu(i){return i.floor!=null?`${i.wing}.${i.floor}${i.door!=null?`.${i.door}`:""}`:`wing-${i.wing}`}var $0='<rect x="4.5" y="3" width="15" height="18" rx="2.5"/><path d="M4.5 7.5h15"/><circle cx="12" cy="14" r="4.25"/><path d="M7.5 5.25h.01M10.5 5.25h.01"/>',J0=()=>`<svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${$0}</svg>`,dc=document.documentElement.lang==="de"?"de":"en",ae={en:{wing:"Wing",floor:"Floor",door:"Door",doorInline:"door",entrance:"Street entrance",pickFloor:"Pick a floor below the model to see where it is.",share:"Share this location",copy:"Copy link",copied:"Link copied",clear:"Clear",colour:"Wing colour",laundry:"Laundry room",laundryPlate:"Laundry",at:i=>`At ${i}`,laundryAt:i=>`Laundry room at ${i}`,washers:"Washing machines",dryers:"Dryers",vending:"Vending machines",none:"None"},de:{wing:"Fl\xFCgel",floor:"Etage",door:"T\xFCr",doorInline:"T\xFCr",entrance:"Hauseingang",pickFloor:"W\xE4hle unten eine Etage, dann siehst du, wo sie liegt.",share:"Ort teilen",copy:"Link kopieren",copied:"Link kopiert",clear:"Zur\xFCcksetzen",colour:"Fl\xFCgelfarbe",laundry:"Waschraum",laundryPlate:"Waschraum",at:i=>`Am Eingang ${i}`,laundryAt:i=>`Waschraum am Eingang ${i}`,washers:"Waschmaschinen",dryers:"Trockner",vending:"Automaten",none:"Keine"}}[dc],Su=i=>{!i.animate||matchMedia("(prefers-reduced-motion: reduce)").matches||i.animate({opacity:[0,1],transform:["translateY(8px)","none"]},{duration:300,easing:"cubic-bezier(0.2, 0.75, 0.25, 1)"})},Di=(i,t)=>dc==="de"&&i.de&&i.de[t]||i[t],Ao=i=>dc==="de"?i.de_long||i.de:i.en,Mu=document.getElementById("building-3d");Mu&&K0(Mu);function K0(i){let t=JSON.parse(i.querySelector("#b3d-data").textContent),e=j0(i,t),n=null,s=matchMedia("(prefers-reduced-motion: reduce)").matches;try{n=t_(i,t,e,s),i.dataset.state="ready"}catch(r){console.warn("3D map unavailable:",r),i.dataset.state="fallback"}e.attach(n),e.readHash(!0),window.addEventListener("hashchange",()=>e.readHash(!1))}function j0(i,t){let e=new Map(t.wings.map(h=>[h.n,h])),n=new Map(t.entrances.map(h=>[h.id,h])),s=new Map((t.laundry||[]).map(h=>[h.entrance,h])),r=i.querySelector(".b3d-finder"),a=r.querySelector("input"),o=r.querySelector(".b3d-help"),c=o.innerHTML,l=i.querySelector(".b3d-wings"),u=i.querySelector(".b3d-card"),p=u.innerHTML,d=i.querySelector(".b3d-floors"),g=d.querySelector(".b3d-floors-steps");t.floors.forEach(h=>{let x=document.createElement("button");x.type="button",x.className="b3d-step",x.dataset.floor=h.n,x.textContent=h.n,x.setAttribute("aria-label",`${Ao(h)} (${h.de})`),x.setAttribute("aria-pressed","false"),x.addEventListener("click",()=>{m.wing!=null&&v({wing:m.wing,floor:m.floor===h.n?null:h.n,door:null},"stepper")}),g.appendChild(x)});function y(h){if(d.hidden=h.wing==null,h.wing==null)return;let x=e.get(h.wing);d.style.setProperty("--swatch",x.color),d.style.setProperty("--plate-ink",x.ink),g.querySelectorAll(".b3d-step").forEach(E=>{let P=Number(E.dataset.floor);E.classList.toggle("is-current",h.floor===P),E.classList.toggle("is-below",h.floor!=null&&P<h.floor),E.classList.toggle("is-above",h.floor!=null&&P>h.floor),E.setAttribute("aria-pressed",String(h.floor===P))})}let T=null,m={wing:null,floor:null,door:null,laundry:null};t.wings.forEach(h=>{let x=document.createElement("button");x.type="button",x.className="b3d-chip",x.dataset.wing=h.n,x.style.setProperty("--swatch",h.color),x.style.setProperty("--plate-ink",h.ink),x.setAttribute("aria-pressed","false"),x.innerHTML=`<span class="b3d-chip-n">${h.n}</span><span class="sr-only">${ae.wing} ${h.n}</span>`,x.addEventListener("click",()=>v({wing:m.wing===h.n&&m.floor==null?null:h.n,floor:null,door:null},"chip")),l.appendChild(x)});let f=[...i.querySelectorAll(".b3d-place")];f.forEach(h=>h.addEventListener("click",()=>v(m.laundry===h.dataset.laundry?{wing:null}:{laundry:h.dataset.laundry},"chip"))),r.addEventListener("submit",h=>{h.preventDefault();let x=uc(a.value,t.floors.length-1);if(x.error){o.textContent=x.error,r.classList.add("has-error");return}r.classList.remove("has-error"),o.innerHTML=c,a.blur(),v(x,"finder")}),a.addEventListener("input",()=>{r.classList.contains("has-error")&&(r.classList.remove("has-error"),o.innerHTML=c)});function w(h){return t.floors[h]?Ao(t.floors[h]):`${ae.floor} ${h}`}function C(h){let x=Di(n.get(h.entrance),"label");u.dataset.state="laundry";let E=[[ae.washers,h.washers],[ae.dryers,h.dryers],[ae.vending,h.vending&&h.vending.length?Di(h,"vending").join(" \xB7 "):ae.none]];u.innerHTML=`
      <div class="sign" aria-hidden="true"><span class="sign-seg is-laundry"><b>${J0()}</b><em>${ae.laundryPlate}</em></span></div>
      <h3 class="b3d-card-title">${ae.laundry}</h3>
      <p class="b3d-card-where">${ae.at(x)}</p>
      <ul class="facts panel">${E.map(([P,D])=>`<li><div class="fact"><span class="fact-k">${P}</span><span class="fact-v">${D}</span></div></li>`).join("")}</ul>
      <div class="b3d-card-actions">
        <button type="button" class="btn b3d-share">${navigator.share?ae.share:ae.copy}</button>
        <button type="button" class="btn btn-quiet b3d-clear">${ae.clear}</button>
      </div>`,u.querySelector(".b3d-clear").addEventListener("click",()=>v({wing:null},"clear")),u.querySelector(".b3d-share").addEventListener("click",b),Su(u)}function S(h){if(h.laundry){C(s.get(h.laundry));return}if(h.wing==null){u.innerHTML=p,u.dataset.state="empty";return}let x=e.get(h.wing),E=t.entrances.filter(G=>(G.wings||[]).includes(h.wing)),P=h.floor!=null?t.floors[h.floor]:null;u.dataset.state="wing",u.style.setProperty("--swatch",x.color);let D=`<span class="sign-seg is-wing" style="--swatch:${x.color};--plate-ink:${x.ink}"><b>${x.n}</b><em>${ae.wing}</em></span>`,F=h.floor!=null?`${D}<span class="sign-seg"><b>${h.floor}</b><em>${ae.floor}</em></span><span class="sign-seg"><b>${h.door!=null?h.door:"\u2013"}</b><em>${ae.door}</em></span>`:D,L=[`${ae.wing} ${x.n}`,P?Ao(P):null,h.door!=null?`${ae.doorInline} ${h.door}`:null].filter(Boolean).join(", "),N=[P?[ae.floor,`${Ao(P)} \xB7 ${P.de}`]:null,...E.map(G=>[ae.entrance,Di(G,"label")])].filter(Boolean);u.innerHTML=`
      <div class="sign" aria-hidden="true">${F}</div>
      <h3 class="b3d-card-title">${L}</h3>
      <p class="b3d-card-where">${Di(x,"where")}</p>
      ${N.length?`<ul class="facts panel">${N.map(([G,q])=>`<li><div class="fact"><span class="fact-k">${G}</span><span class="fact-v">${q}</span></div></li>`).join("")}</ul>`:""}
      ${h.floorNote?`<p class="b3d-card-note">${h.floorNote}</p>`:""}
      ${h.floor==null?`<p class="b3d-card-note">${ae.pickFloor}</p>`:""}
      <div class="b3d-card-actions">
        <button type="button" class="btn b3d-share">${navigator.share?ae.share:ae.copy}</button>
        <button type="button" class="btn btn-quiet b3d-clear">${ae.clear}</button>
      </div>
      <p class="b3d-swatch-note"><span class="b3d-swatch" aria-hidden="true"></span>${ae.colour}: ${Di(x,"dye")}</p>`,u.querySelector(".b3d-clear").addEventListener("click",()=>v({wing:null},"clear")),u.querySelector(".b3d-share").addEventListener("click",b),Su(u)}async function b(h){let x=h.currentTarget,E=location.href,P=e.get(m.wing),D=m.laundry?ae.laundryAt(Di(n.get(m.laundry),"label")):m.floor!=null?`${ae.wing} ${P.n}, ${w(m.floor)}${m.door!=null?`, ${ae.doorInline} ${m.door}`:""}`:`${ae.wing} ${P.n}`;if(navigator.share)try{await navigator.share({title:"Wasserstadt Spindlersfeld",text:D,url:E});return}catch(F){if(F&&F.name==="AbortError")return}try{await navigator.clipboard.writeText(E),x.textContent=ae.copied,x.animate&&!matchMedia("(prefers-reduced-motion: reduce)").matches&&x.animate({scale:[.94,1]},{duration:260,easing:"cubic-bezier(0.2, 0.75, 0.25, 1)"})}catch{let F=document.createElement("input");F.value=E,F.readOnly=!0,F.className="b3d-copyfield",x.replaceWith(F),F.select()}}function v(h,x){if(m=h.laundry&&s.has(h.laundry)?{wing:null,floor:null,door:null,laundry:h.laundry}:{wing:h.wing??null,floor:h.wing!=null?h.floor??null:null,door:h.wing!=null?h.door??null:null,floorNote:h.floorNote,laundry:null},l.querySelectorAll(".b3d-chip").forEach(E=>E.setAttribute("aria-pressed",String(Number(E.dataset.wing)===m.wing))),f.forEach(E=>E.setAttribute("aria-pressed",String(E.dataset.laundry===m.laundry))),S(m),y(m),x!=="hash"){let E=m.laundry?`#laundry-${m.laundry}`:m.wing!=null?`#${vu(m)}`:"";history.replaceState(null,"",E||location.pathname+location.search)}if(x==="finder"&&(a.value=m.wing==null?"":A(m)),x==="hash"&&(a.value=m.floor!=null?A(m):""),T){if(T.select(m,x),x==="finder"||x==="chip"){let E=i.querySelector(".b3d-stage"),P=E.getBoundingClientRect();(P.top<0||P.bottom>window.innerHeight)&&E.scrollIntoView({block:"start",behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth"})}}else(x==="finder"||x==="chip")&&u.scrollIntoView({block:"nearest",behavior:"smooth"})}function A(h){return h.floor!=null?`${h.wing}.${h.floor}${h.door!=null?`.${h.door}`:""}`:String(h.wing)}return{attach(h){T=h},select:v,readHash(){let h=decodeURIComponent(location.hash.slice(1));if(!h)return;let x=/^laundry-([a-z0-9]+)$/i.exec(h);if(x){s.has(x[1])&&v({laundry:x[1]},"hash");return}let E=/^wing-(\d)$/.exec(h),P=E?{wing:Number(E[1]),floor:null,door:null}:uc(h,t.floors.length-1);!P.error&&P.wing&&v(P,"hash")},entranceLabel:h=>n.has(h)?Di(n.get(h),"label"):"",wing:h=>e.get(h)}}function Q0(){try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function t_(i,t,e,n){if(!Q0())throw new Error("WebGL2 not available");let s=i.querySelector(".b3d-stage"),r=s.querySelector("canvas"),a=s.querySelector(".b3d-labels"),o=s.querySelector(".b3d-compass-needle"),c=Math.min(window.innerWidth,window.innerHeight)<700,l=I=>{let k={};return new Bt(I).getRGB(k,ze),new B(k.r,k.g,k.b)},u=new yo({canvas:r,antialias:!0,powerPreference:"low-power"});u.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),u.shadowMap.enabled=!0,u.shadowMap.type=Ai,u.shadowMap.autoUpdate=!1,u.toneMapping=cr;let p=Math.min(8,u.capabilities.getMaxAnisotropy()),d=new Gs,g=new He(20,1,10,4e3),y=new sr(16777215,15327186,2);d.add(y);let T=new ar(16774116,1.7);T.position.set(-130,210,150),T.castShadow=!0,T.shadow.mapSize.set(2048,2048),Object.assign(T.shadow.camera,{left:-160,right:160,top:160,bottom:-160,near:50,far:600}),T.shadow.bias=-4e-4,T.shadow.normalBias=.6,T.shadow.radius=3,"intensity"in T.shadow&&(T.shadow.intensity=.5),d.add(T),d.add(T.target);let m=({data:I,width:k,height:et,depth:at})=>{let _t=new Mi(I,k,et,at);return _t.colorSpace=ze,_t.wrapS=Si,_t.wrapT=dn,_t.minFilter=Fn,_t.magFilter=Ce,_t.generateMipmaps=!0,_t.anisotropy=p,_t.needsUpdate=!0,_t},f=c?1:2,w=m(oc(!1,f)),C=null,S=m({data:new Uint8Array(4*Li.length),width:1,height:1,depth:Li.length}),b=new Zs(lc(!1));b.colorSpace=ze,b.wrapS=b.wrapT=Si,b.anisotropy=p;let v=mu(),{boxes:A,wingBoxes:h}=v,x=_u({facade:w,glow:S,roof:b});t.wings.forEach(I=>x.uniforms.uWingColor.value[I.n].copy(l(I.color)));let E=new Re(v.geometry,x.solid);E.castShadow=!0,E.receiveShadow=!0,E.customDepthMaterial=x.depth;let P=new Re(v.geometry,x.ghost);P.receiveShadow=!0,P.visible=!1,E.frustumCulled=P.frustumCulled=!1,d.add(E,P);let D=yu(),F=new Re(new Be,D.material);F.receiveShadow=!0,d.add(F);let L=new Re(new Ti(6e3,6e3),new wi);L.rotation.x=-Math.PI/2,L.position.y=-.08,d.add(L);let N=[];for(let I=300;I<=780;I+=24)N.push([90,I]),(I<320||I>672)&&N.push([119,I]);for(let I=140;I<=500;I+=26)N.push([I,706]);for(let I=130;I<=490;I+=30)N.push([I,300]);[[200,400],[262,455],[362,404],[420,460],[205,560],[270,590],[350,548],[430,600],[240,520]].forEach(I=>N.push(I));for(let I=120;I<=900;I+=19)N.push([548+I*37%40,I]);let G=new os(new er(3,2),new bn,N.length),q=new os(new Js(.22,.3,3.2,6),new bn,N.length),j=new he,Z=new $e,$=new B,J=new B,dt=new Bt;N.forEach(([I,k],et)=>{let[at,_t]=gn(I,k),Et=.75+(I*13+k*7)%10/20;j.compose(J.set(at,3.4+2.6*Et,_t),Z.identity(),$.set(Et,Et,Et)),G.setMatrixAt(et,j),j.compose(J.set(at,1.5,_t),Z.identity(),$.set(1,1,1)),q.setMatrixAt(et,j),G.setColorAt(et,dt.setHSL(.26+(I+k)%7*.008,.28,.62-(I*3+k)%5*.025))}),G.castShadow=!0,q.castShadow=!0,d.add(G,q);let Mt={day:{plate:"#efe7dc",cornice:"#f1e8dc",cap:"#8d9694",roofbox:"#ece6dd",roofboxTop:"#c9c3b9",clay:"#ebe4d9",trunk:"#9c8670"},night:{plate:"#2a2521",cornice:"#3a332d",cap:"#2b2f2f",roofbox:"#302b27",roofboxTop:"#24211e",clay:"#221e1b",trunk:"#3b332b"}},Ot=null,Zt=s.querySelector(".b3d-scene");function ee(){let I=document.documentElement.dataset.theme;return I==="dark"?!0:I==="light"?!1:matchMedia("(prefers-color-scheme: dark)").matches}function Q(){let I=s.dataset.scene;return I==="night"?!0:I==="day"?!1:ee()}function st(){let I=Q();if(Zt&&Zt.setAttribute("aria-pressed",String(I)),I===Ot)return;Ot=I;let k=Mt[Ot?"night":"day"],et=getComputedStyle(s).getPropertyValue("--b3d-bg").trim()||(Ot?"#141110":"#ece5da");d.background=new Bt(et),d.fog=new Vs(et,700,1500),L.material.color.set(et),D.uBg.value.copy(l(et)),F.geometry.dispose(),F.geometry=xu(Ot?"night":"day"),y.color.set(Ot?8027276:16777215),y.groundColor.set(Ot?2367259:15327186),y.intensity=Ot?2.4:2,T.color.set(Ot?13160672:16774116),T.intensity=Ot?1:1.7,Ot&&!C&&(C=m(oc(!0,f/2))),x.uniforms.uGlowMap.value=Ot?C:S,x.uniforms.uGlow.value=Ot?1.25:0,x.uniforms.uClay.value.copy(l(k.clay)),gu(v.geometry,v.roles,k),G.material.color.set(Ot?4872774:16777215),q.material.color.set(k.trunk),b.image=lc(Ot),b.needsUpdate=!0,u.shadowMap.needsUpdate=!0,_n()}let ct=new bo(g,r);ct.enableDamping=!0,ct.dampingFactor=.09,ct.enablePan=!c,ct.screenSpacePanning=!1,ct.minDistance=70,ct.maxDistance=900,ct.minPolarAngle=.05,ct.maxPolarAngle=1.32,ct.rotateSpeed=.7,ct.touches={ONE:wn.ROTATE,TWO:wn.DOLLY_ROTATE},ct.mouseButtons={LEFT:fn.ROTATE,MIDDLE:fn.DOLLY,RIGHT:fn.PAN},r.style.touchAction="none";let Vt=s.querySelector(".b3d-hint"),bt=0;s.addEventListener("wheel",I=>{I.ctrlKey||I.metaKey||(I.stopImmediatePropagation(),Vt.dataset.show="wheel",clearTimeout(bt),bt=setTimeout(()=>{Vt.dataset.show=""},1400))},{capture:!0,passive:!0});function qt(I){let k=g.fov*Math.PI/180,et=2*Math.atan(Math.tan(k/2)*g.aspect);return I/Math.sin(Math.min(k,et)/2)}let be={n:Math.PI,s:0,w:-Math.PI/2,e:Math.PI/2};function Yt(I){let k=I.laundry&&sc.find(M=>M.id===I.laundry);if(k){let[M,U]=gn(k.at[0],k.at[1]);return{target:new B(M,4,U),dist:175,polar:.95,azim:be[k.face]+.5,shift:ce()}}if(I.wing==null)return{target:new B(0,3,4),dist:qt(112)*.93,polar:.98,azim:-1.1};let et=h.get(I.wing),at=(et.x0+et.x1)/2,_t=(et.z0+et.z1)/2,Et=Math.hypot(et.x1-et.x0,et.z1-et.z0)/2+14,Pt=Math.atan2(at,_t),Gt=1;I.wing===5&&(Pt=Math.atan2(-.35,1),Gt=.86);let ge=I.floor!=null?wo[Math.min(I.floor,4)].y+2:6;return{target:new B(at,ge,_t),dist:Math.max(200,qt(Et)*.95),polar:Gt,azim:Pt+.42,shift:ce()}}let te=i.querySelector(".b3d-card");function ce(){if(te.dataset.state==="empty")return 0;let I=te.getBoundingClientRect(),k=s.getBoundingClientRect();return!I.width||I.left<k.left+k.width/2||I.top>k.bottom||I.bottom<k.top?0:(k.right-I.left)/2}function Jt(I){let k=new B(Math.sin(I.polar)*Math.sin(I.azim),Math.cos(I.polar),Math.sin(I.polar)*Math.cos(I.azim)),et=I.target.clone(),at=I.shift||0;if(at){let _t=s.clientHeight||1,Et=at*2*I.dist*Math.tan(g.fov*Math.PI/360)/_t,Pt=new B().crossVectors(k.clone().negate(),new B(0,1,0)).normalize();et.addScaledVector(Pt,Et)}return{target:et,position:et.clone().add(k.multiplyScalar(I.dist))}}let ie=new Set,Ee=I=>I<.5?4*I*I*I:1-Math.pow(-2*I+2,3)/2;function Ne(I,k,et){let at={t0:performance.now(),duration:n?0:I,onUpdate:k,onDone:et};return ie.add(at),_n(),at}function xe(I){return ie.forEach(k=>{let et=k.duration?Math.min(1,(I-k.t0)/k.duration):1;k.onUpdate(Ee(et),et),et>=1&&(ie.delete(k),k.onDone&&k.onDone())}),ie.size>0}let re=null;function z(I,k=1200){let et=Jt(I);Nt.forEach(Et=>{Et.cur=null});let at=g.position.clone(),_t=ct.target.clone();re&&ie.delete(re),re=Ne(k,Et=>{g.position.lerpVectors(at,et.position,Et),ct.target.lerpVectors(_t,et.target,Et)},()=>{re=null})}ct.addEventListener("start",()=>{re&&(ie.delete(re),re=null)});let Ue=8,Ft={wing:null,floor:null,laundry:null},R=null,_=Array.from({length:ws},()=>({lift:0,fade:0,tint:0,dim:0,pastel:!1}));function V(I){let k=Math.floor(I/fi),et=I%fi,at=Ft.wing!=null,_t=at&&k===Ft.wing,Et=_t&&Ft.floor!=null,Pt=_t?Et?et===Ft.floor?.62:et<Ft.floor?.35:0:.55:0;return{dim:at&&!_t?k?.62:.7:0,lift:Et&&et>Ft.floor?Ue:0,fade:Et&&et>Ft.floor?1:0,tint:Pt}}function Y(){let I=x.uniforms.uPart.value,k=!1;_.forEach((et,at)=>{I[at*4]=et.lift,I[at*4+1]=et.fade,I[at*4+2]=et.pastel?-et.tint:et.tint,I[at*4+3]=et.dim,et.fade>.001&&(k=!0)}),P.visible=k}function K(){let I=_.map(et=>({...et})),k=_.map((et,at)=>V(at));_.forEach((et,at)=>{k[at].tint&&(et.pastel=k[at].tint<.5)}),R&&ie.delete(R),R=Ne(700,et=>{_.forEach((at,_t)=>{let Et=I[_t],Pt=k[_t];at.dim=Et.dim+(Pt.dim-Et.dim)*et,at.lift=Et.lift+(Pt.lift-Et.lift)*et,at.fade=Et.fade+(Pt.fade-Et.fade)*et,at.tint=Et.tint+(Pt.tint-Et.tint)*et}),Y(),u.shadowMap.needsUpdate=!0},()=>{R=null})}let ot=[0,0,0],ut=[0,0,0];function tt(I,k){let et=k.x-I.x,at=k.y-I.y,_t=k.z-I.z,Et=Math.hypot(et,at,_t);return ot[0]=I.x,ot[1]=I.y,ot[2]=I.z,ut[0]=et/Et,ut[1]=at/Et,ut[2]=_t/Et,Et}function it(I){let k=tt(g.position,I)-1.5;for(let et=0;et<A.length;et++){let at=_[A[et].part];if(at.fade<.5&&hc(ot,ut,A[et],at.lift)<k)return!0}return!1}let ft=new Map;t.wings.forEach(I=>{let k=document.createElement("button");k.type="button",k.className="b3d-badge",k.style.setProperty("--swatch",I.color),k.style.setProperty("--plate-ink",I.ink),k.textContent=I.n,k.setAttribute("aria-label",`${ae.wing} ${I.n}`),k.addEventListener("click",()=>e.select({wing:Ft.wing===I.n&&Ft.floor==null?null:I.n},"badge")),a.appendChild(k);let et=h.get(I.n);ft.set(I.n,{el:k,pos:new B((et.x0+et.x1)/2,I.n===5?26:25,(et.z0+et.z1)/2),at:{hidden:!0}})});let It=I=>`<svg class="b3d-pin-mark" viewBox="0 0 26 34" aria-hidden="true"><path d="M13 33C13 33 1.5 21.6 1.5 12.6a11.5 11.5 0 0 1 23 0C24.5 21.6 13 33 13 33z" fill="currentColor" stroke="#fff" stroke-width="2"/><g fill="none" stroke="#fff" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${I}</g></svg>`,pt=sc.map(I=>{let k=document.createElement("div");k.className="b3d-pin",k.dataset.id=I.id,k.innerHTML=`${It('<path d="M9.2 18.2V7.8h7.6v10.4M7.6 18.2h10.8M14.2 13.2v.4"/>')}<span class="b3d-pin-label">${e.entranceLabel(I.id)}</span>`,a.appendChild(k);let[et,at]=gn(I.at[0],I.at[1]),_t={n:[0,-1.2],s:[0,1.2],w:[-1.2,0],e:[1.2,0]}[I.face];return{el:k,label:k.querySelector(".b3d-pin-label"),data:I,pos:new B(et+_t[0]*2,4.5,at+_t[1]*2)}}),mt=24;(t.laundry||[]).forEach(I=>{let k=pt.find(at=>at.data.id===I.entrance);if(!k)return;let et=document.createElement("button");et.type="button",et.className="b3d-pin is-laundry",et.setAttribute("aria-label",ae.laundryAt(e.entranceLabel(I.entrance))),et.setAttribute("aria-pressed","false"),et.innerHTML=`<span class="b3d-pin-hit">${It('<rect x="8.3" y="6.4" width="9.4" height="11.2" rx="1.6"/><path d="M8.3 9.2h9.4"/><circle cx="13" cy="13.5" r="2.5"/>')}</span><span class="b3d-pin-label">${ae.laundry}</span>`,et.addEventListener("click",()=>e.select(Ft.laundry===I.entrance?{wing:null}:{laundry:I.entrance},"tap")),a.appendChild(et),pt.push({el:et,label:et.querySelector(".b3d-pin-label"),data:k.data,laundry:I.entrance,pos:k.pos,dx:mt,on:!1})});function Lt(I,k,et,at){let _t=[];return I.slice(1).forEach((Et,Pt)=>{let Gt=I[Pt],ge=Math.hypot(Et[0]-Gt[0],Et[1]-Gt[1]),[M,U]=gn(Gt[0],Gt[1]),[X,H]=gn(Et[0],Et[1]),W=new B(X-M,0,H-U).normalize(),xt=wt=>{let Rt=Gt[0]+(Et[0]-Gt[0])*wt,Xt=Gt[1]+(Et[1]-Gt[1])*wt,[Kt,Ct]=gn(Rt,Xt);_t.push({pos:new B(Kt,.6,Ct),dir:W,d:Math.hypot(Rt-k[0],Xt-k[1])})},St=((k[0]-Gt[0])*(Et[0]-Gt[0])+(k[1]-Gt[1])*(Et[1]-Gt[1]))/(ge*ge);if(St>=0&&St<=1&&Math.hypot(Gt[0]+(Et[0]-Gt[0])*St-k[0],Gt[1]+(Et[1]-Gt[1])*St-k[1])<1&&xt(St),ge<at*2+20)return;let gt=Math.max(1,Math.round((ge-at*2)/et));for(let wt=0;wt<=gt;wt++)xt((at+(ge-at*2)*wt/gt)/ge)}),_t.sort((Et,Pt)=>Et.d-Pt.d)}let Nt=bs.map(I=>({name:I.name,spots:Lt(I.path,I.label,50,40)}));Nt.push({name:"Spree",river:!0,spots:Lt(Eo.map(([I,k])=>[I+82,k]),[690,470],60,10)}),Nt.forEach(I=>{I.el=document.createElement("div"),I.el.className=I.river?"b3d-street is-river":"b3d-street",I.el.textContent=I.name,I.cur=null,a.appendChild(I.el)});let Wt=[s.querySelector(".b3d-compass"),Zt,s.querySelector(".b3d-tools"),i.querySelector(".b3d-floors"),i.querySelector(".b3d-finder"),i.querySelector(".b3d-card")].filter(Boolean),O=null,lt=new B,nt=new or,ht=new Ut;function vt(I,k,et){lt.copy(k).project(g);let at=(lt.x*.5+.5)*ht.x,_t=(-lt.y*.5+.5)*ht.y,Et=at<-30||_t<-40||at>ht.x+30||_t>ht.y+40,Pt=!(lt.z>-1&&lt.z<1)||Et||et&&it(k);return I.style.setProperty("--x",`${at.toFixed(1)}px`),I.style.setProperty("--y",`${_t.toFixed(1)}px`),I.classList.toggle("is-hidden",Pt),{x:at,y:_t,hidden:Pt}}let rt=(I,k,et,at,_t=0)=>({x:I,y:k,hw:et,hh:at,ang:_t,cos:Math.cos(_t),sin:Math.sin(_t)});function Dt(I,k){let et=k.x-I.x,at=k.y-I.y;return[[I.cos,I.sin],[-I.sin,I.cos],[k.cos,k.sin],[-k.sin,k.cos]].every(([_t,Et])=>{let Pt=I.hw*Math.abs(_t*I.cos+Et*I.sin)+I.hh*Math.abs(Et*I.cos-_t*I.sin),Gt=k.hw*Math.abs(_t*k.cos+Et*k.sin)+k.hh*Math.abs(Et*k.cos-_t*k.sin);return Math.abs(et*_t+at*Et)<=Pt+Gt})}function At(I){let k=I.hw*Math.abs(I.cos)+I.hh*Math.abs(I.sin),et=I.hw*Math.abs(I.sin)+I.hh*Math.abs(I.cos);return I.x-k>=0&&I.y-et>=0&&I.x+k<=ht.x&&I.y+et<=ht.y}function fe(){if(!O){let k=a.getBoundingClientRect();O=[],Wt.forEach(et=>{let at=et.getBoundingClientRect();at.width&&O.push(rt(at.left-k.left+at.width/2,at.top-k.top+at.height/2,at.width/2+2,at.height/2+2))})}let I=O.slice();return ft.forEach(({at:k},et)=>{if(k.hidden)return;let at=(Ft.wing===et?15*1.25:15)+4;I.push(rt(k.x,k.y,at,at))}),I}let ne=["","is-flipped","is-below"];function en(I,k,et,at){I.lw||(I.lw=I.label.offsetWidth,I.lh=I.label.offsetHeight);let _t=I.lw/2+3,Et=I.lh/2+3,Pt=k.y-31+I.lh/2,Gt=Math.min(Math.max(k.x,_t+2),ht.x-_t-2);I.el.style.setProperty("--dx",`${(Gt-k.x).toFixed(1)}px`);let ge={"":rt(k.x+18+I.lw/2,Pt,_t,Et),"is-flipped":rt(k.x-18-I.lw/2,Pt,_t,Et),"is-below":rt(Gt,k.y+8+I.lh/2,_t,Et)},M=X=>At(ge[X])&&!at.some(H=>H!==et&&Dt(ge[X],H)),U=[I.side,...ne].find(X=>X!=null&&M(X))??ne.find(X=>At(ge[X]))??"";I.side=U,ne.forEach(X=>{X&&I.el.classList.toggle(X,X===U)}),at.push(ge[U])}function nn(I,k,et){if(lt.copy(k.pos).project(g),!(lt.z>-1&&lt.z<1))return null;let at=(lt.x*.5+.5)*ht.x,_t=(-lt.y*.5+.5)*ht.y;lt.copy(k.pos).addScaledVector(k.dir,20).project(g);let Et=lt.x,Pt=lt.y;lt.copy(k.pos).addScaledVector(k.dir,-20).project(g);let Gt=Math.atan2(-(Pt-lt.y)*ht.y,(Et-lt.x)*ht.x);Gt>Math.PI/2&&(Gt-=Math.PI),Gt<-Math.PI/2&&(Gt+=Math.PI);let ge=rt(at,_t,I.w/2+6,I.h/2+3,Gt);return!At(ge)||et.some(M=>Dt(ge,M))||it(k.pos)?null:ge}function Co(I){Nt.forEach(k=>{k.w||(k.w=k.el.offsetWidth,k.h=k.el.offsetHeight);let et=k.cur,at=et!=null?nn(k,k.spots[et],I):null;for(let _t=0;!at&&_t<k.spots.length;_t++)_t!==k.cur&&(et=_t,at=nn(k,k.spots[_t],I));k.el.classList.toggle("is-hidden",!at),at&&(k.cur=et,I.push(at),k.el.style.setProperty("--x",`${at.x.toFixed(1)}px`),k.el.style.setProperty("--y",`${at.y.toFixed(1)}px`),k.el.style.setProperty("--r",`${(at.ang*180/Math.PI).toFixed(1)}deg`))})}function Ro(){u.getSize(ht),ft.forEach((Pt,Gt)=>{Pt.at=vt(Pt.el,Pt.pos,!1),Pt.el.classList.toggle("is-active",Ft.wing===Gt),Pt.el.classList.toggle("is-muted",Ft.wing!=null&&Ft.wing!==Gt)});let I=pt.map(Pt=>{let Gt=Pt.laundry?Ft.laundry===Pt.laundry:Ft.wing!=null&&Pt.data.wings.includes(Ft.wing)||Ft.laundry===Pt.data.id;Pt.el.classList.toggle("is-active",Gt),Pt.laundry&&Pt.on!==Gt&&(Pt.on=Gt,Pt.el.setAttribute("aria-pressed",String(Gt)));let ge=vt(Pt.el,Pt.pos,!0);return Pt.dx&&(ge.x+=Pt.dx),ge}),k=fe(),et=I.map(Pt=>Pt.hidden?null:rt(Pt.x,Pt.y-17,15,19));et.forEach(Pt=>{Pt&&k.push(Pt)}),pt.forEach((Pt,Gt)=>{et[Gt]&&Pt.el.classList.contains("is-active")&&en(Pt,I[Gt],et[Gt],k)}),Co(k);let at=ct.getAzimuthalAngle(),_t=[-Math.sin(at),-Math.cos(at)],Et=Math.atan2(_t[0]*Sr[1]-_t[1]*Sr[0],_t[0]*Sr[0]+_t[1]*Sr[1]);o.style.transform=`rotate(${-Et*180/Math.PI}deg)`}let Cn=null;r.addEventListener("pointerdown",I=>{Cn={x:I.clientX,y:I.clientY,t:performance.now()},s.dataset.touched="true"}),r.addEventListener("pointerup",I=>{if(!Cn||Math.hypot(I.clientX-Cn.x,I.clientY-Cn.y)>7||performance.now()-Cn.t>450){Cn=null;return}Cn=null;let k=r.getBoundingClientRect();nt.setFromCamera(new Ut((I.clientX-k.left)/k.width*2-1,-((I.clientY-k.top)/k.height)*2+1),g);let et=nt.ray.origin,at=nt.ray.direction;ot[0]=et.x,ot[1]=et.y,ot[2]=et.z,ut[0]=at.x,ut[1]=at.y,ut[2]=at.z;let _t=1/0,Et=0;A.forEach(Pt=>{let Gt=_[Pt.part];if(Gt.fade>.5)return;let ge=hc(ot,ut,Pt,Gt.lift);ge<_t&&(_t=ge,Et=Pt.wing)}),Et?e.select({wing:Et},"tap"):Ft.wing!=null&&e.select({wing:null},"tap")}),Zt&&Zt.addEventListener("click",()=>{let I=!Q();I===ee()?delete s.dataset.scene:s.dataset.scene=I?"night":"day";try{s.dataset.scene?localStorage.setItem("map-scene",s.dataset.scene):localStorage.removeItem("map-scene")}catch{}st()}),s.querySelector(".b3d-reset").addEventListener("click",()=>e.select({wing:null},"reset")),s.querySelectorAll(".b3d-zoom").forEach(I=>I.addEventListener("click",()=>{let k=I.dataset.dir==="in"?.72:1.38,et=ct.target.clone().add(g.position.clone().sub(ct.target).multiplyScalar(k)),at=et.distanceTo(ct.target);if(at<ct.minDistance||at>ct.maxDistance)return;let _t=g.position.clone();re&&ie.delete(re),re=Ne(380,Et=>g.position.lerpVectors(_t,et,Et),()=>{re=null})}));let Yn=0,Es=!0,Ni=!0;function _n(){Es=!0,!Yn&&Ni&&(Yn=requestAnimationFrame(Rn))}function Rn(I){Yn=0;let k=xe(I),et=ct.update();if(k||et||Es){Es=!1;let at=g.position.distanceTo(ct.target);d.fog&&(d.fog.near=at*1.3,d.fog.far=at*2.6),u.render(d,g),Ro()}(k||et)&&(Yn=requestAnimationFrame(Rn))}ct.addEventListener("change",_n),new IntersectionObserver(([I])=>{Ni=I.isIntersecting,Ni&&_n()}).observe(s);function Ui(){let I=s.clientWidth,k=s.clientHeight;O=null,!(!I||!k)&&(u.setSize(I,k,!1),g.aspect=I/k,g.updateProjectionMatrix(),_n())}new ResizeObserver(Ui).observe(s),Ui(),st(),document.fonts&&document.fonts.ready.then(()=>{Nt.forEach(I=>{I.w=0}),pt.forEach(I=>{I.lw=0}),O=null,_n()}),matchMedia("(prefers-color-scheme: dark)").addEventListener("change",st),new MutationObserver(st).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});let Ts=Jt(Yt({wing:null}));g.position.copy(Ts.target).add(new B(.01,qt(118)*1.02,.4)),ct.target.copy(Ts.target),ct.update();let As=!1,pi=null;return setTimeout(()=>{s.dataset.quiet="true"},9e3),setTimeout(()=>{z(Yt(pi||{wing:null}),1900),setTimeout(()=>{As=!0},n?0:1900)},n?0:350),{select(I,k){Ft={wing:I.wing,floor:I.wing!=null?I.floor:null,laundry:I.laundry||null},O=null,K();let et=Ft.wing!=null||Ft.laundry!=null;if(!As){pi=et?Ft:null;return}if(k==="tap"&&et){_n();return}z(Yt(Ft))},render:_n}}
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
