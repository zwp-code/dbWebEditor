import{B as e,m as t,A as n,C as r}from"./index-23651689.js";const o=window.CryptoJS,c=o.enc.Utf8.parse("9096123612ABCDEF"),a=o.enc.Utf8.parse("ABCDEF1236909612");var i={encrypt:t=>{let n=o.enc.Utf8.parse(e.secretkey),r=o.enc.Utf8.parse(t);return o.AES.encrypt(r,n,{mode:o.mode.ECB,padding:o.pad.Pkcs7}).toString()},decrypt:t=>{let n=o.enc.Utf8.parse(e.secretkey),r=o.AES.decrypt(t,n,{mode:o.mode.ECB,padding:o.pad.Pkcs7});return o.enc.Utf8.stringify(r).toString()},Decrypt:function(e){let t=o.enc.Hex.parse(e),n=o.enc.Base64.stringify(t);return o.AES.decrypt(n,c,{iv:a,mode:o.mode.CBC,padding:o.pad.Pkcs7}).toString(o.enc.Utf8).toString()},Encrypt:function(e){let t=o.enc.Utf8.parse(e);return o.AES.encrypt(t,c,{iv:a,mode:o.mode.CBC,padding:o.pad.Pkcs7}).ciphertext.toString().toLowerCase()},md5encode:function(e){return o.MD5(e).toString()}};function s(e){let t=e?new Date(e):new Date;return t.getFullYear()+"-"+(t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-"+(t.getDate()<10?"0"+t.getDate():t.getDate())}function p(e){if(!e)return 0;let t=e.replace(/-/g,"/");return new Date(t).getTime()}function u(e){if(""===e.trim())return;let r=document.createElement("input");r.value=e,document.body.appendChild(r),r.select(),document.execCommand("copy"),t.success(n.global.t("message.copySucceeded")),document.body.removeChild(r)}const l=e=>{for(let t=0;t<e.length-1;t++)for(let n=0;n<e.length-1-t;n++)if(Number(e[n].lineupData.position)>Number(e[n+1].lineupData.position)){let t=e[n];e[n]=e[n+1],e[n+1]=t}return e};function d(e){if(!/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(e))return[];let t=e.toLowerCase().replace(/\#/g,""),n=t.length;if(3==n){let e="";for(let r=0;r<n;r++)e+=t.slice(r,r+1).concat(t.slice(r,r+1));t=e}let r=[];for(let o=0;o<6;o+=2){let e=t.slice(o,o+2);r.push(parseInt("0x"+e))}return r}function g(e){if(!e)return;let t=parseInt(e[0]).toString(16),n=parseInt(e[1]).toString(16),r=parseInt(e[2]).toString(16);return 1===t.length&&(t="0"+t),1===n.length&&(n="0"+n),1===r.length&&(r="0"+r),"#"+t+n+r}function f(e){let t=e||(new Date).getTime();return i.Encrypt(t)}function m(e){return i.Decrypt(e)}function y(e){let t=e;return!((new Date).getTime()-t>=6e4)}function h(){let e=r.key.get();return!!e&&!(m(e).length<13)}export{y as a,h as b,u as c,m as d,f as e,p as f,s as g,d as h,l as i,g as s};
