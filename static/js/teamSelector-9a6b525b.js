var s=Object.defineProperty,a=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,e=(a,g,f)=>g in a?s(a,g,{enumerable:!0,configurable:!0,writable:!0,value:f}):a[g]=f,t=(s,t)=>{for(var n in t||(t={}))g.call(t,n)&&e(s,n,t[n]);if(a)for(var n of a(t))f.call(t,n)&&e(s,n,t[n]);return s};import{_ as n,a as l,b as p,c as _,d as i,e as o,f as r,g as d,h as c,i as m,j as u,k as b,l as y,m as h,n as v,o as O,p as N,q as S,r as V,s as T,t as L,v as x,w as B,x as w,y as j,z as C,A as F,B as k,C as P,D as R,E as U,F as $,G as I,H as A,I as J,J as E,K as M,L as q,M as z,N as D,O as G,P as H,Q as K,R as Q,S as W,T as X,U as Y,V as Z,W as ss,X as as,Y as gs,Z as fs,$ as es,a0 as ts,a1 as ns,a2 as ls,a3 as ps,a4 as _s,a5 as is,a6 as os,a7 as rs,a8 as ds,a9 as cs,aa as ms,ab as us,ac as bs,ad as ys,ae as hs,af as vs,ag as Os,ah as Ns,ai as Ss,aj as Vs,ak as Ts,al as Ls,am as xs,an as Bs,ao as ws,ap as js,aq as Cs,ar as Fs,as as ks,at as Ps,au as Rs,av as Us,aw as $s,ax as Is,ay as As,az as Js,aA as Es,aB as Ms,aC as qs,aD as zs,aE as Ds,aF as Gs,aG as Hs,aH as Ks,aI as Qs,aJ as Ws,aK as Xs,aL as Ys,aM as Zs,aN as sa,aO as aa,aP as ga,aQ as fa,aR as ea,aS as ta,aT as na,aU as la,aV as pa,aW as _a,aX as ia,aY as oa,aZ as ra,a_ as da,a$ as ca,b0 as ma,b1 as ua,b2 as ba,b3 as ya,b4 as ha,b5 as va,b6 as Oa,b7 as Na,b8 as Sa,b9 as Va,ba as Ta,bb as La,bc as xa,bd as Ba,be as wa,bf as ja,bg as Ca,bh as Fa,bi as ka,bj as Pa,bk as Ra,bl as Ua,bm as $a,bn as Ia,bo as Aa,bp as Ja,bq as Ea,br as Ma,bs as qa,bt as za,bu as Da,bv as Ga,bw as Ha,bx as Ka,by as Qa,bz as Wa,bA as Xa,bB as Ya,bC as Za,bD as sg,bE as ag,bF as gg,bG as fg,bH as eg,bI as tg,bJ as ng,bK as lg,bL as pg,bM as _g,bN as ig,bO as og,bP as rg,bQ as dg,bR as cg,bS as mg,bT as ug,bU as bg,bV as yg,bW as hg,bX as vg,bY as Og,bZ as Ng,b_ as Sg,b$ as Vg,c0 as Tg,c1 as Lg,c2 as xg,c3 as Bg,c4 as wg,c5 as jg,c6 as Cg,c7 as Fg,c8 as kg,c9 as Pg,ca as Rg,cb as Ug,cc as $g,cd as Ig,ce as Ag,cf as Jg,cg as Eg,ch as Mg,ci as qg,cj as zg,ck as Dg,cl as Gg,cm as Hg,cn as Kg,co as Qg,cp as Wg,cq as Xg,cr as Yg,cs as Zg,ct as sf,cu as af,cv as gf,cw as ff,cx as ef,cy as tf}from"./usePlayers-16559a49.js";import{I as nf,B as lf,g as pf,d as _f,r as of,J as rf,k as df,t as cf,a as mf,o as uf,c as bf,w as yf,b as hf,h as vf}from"./index-23651689.js";import{u as Of}from"./editSpace-f9d228c6.js";import{_ as Nf}from"./plugin-vue_export-helper-46f75680.js";function Sf(){const{proxy:s}=pf(),a=Of(),g={getTeamAvatar:nf((()=>function(s,a){return lf.sofifaTeamAvatarBaseUrl+s+"/"+a+".png"})),getTeamName:nf((()=>function(s){const g=a.data.teams.find((a=>a.teamid==s));return g&&g.teamname||"None"})),getTeamNationFlag:nf((()=>function(s){let g=a.data.leagueteamlinks.find((a=>a.teamid==s));if(g){let s=a.data.leagues.find((s=>s.leagueid==g.leagueid)).countryid;return new URL({"../assets/flags/f_0.png":n,"../assets/flags/f_1.png":l,"../assets/flags/f_10.png":p,"../assets/flags/f_100.png":_,"../assets/flags/f_101.png":i,"../assets/flags/f_102.png":o,"../assets/flags/f_103.png":r,"../assets/flags/f_104.png":d,"../assets/flags/f_105.png":c,"../assets/flags/f_106.png":m,"../assets/flags/f_107.png":u,"../assets/flags/f_108.png":b,"../assets/flags/f_109.png":y,"../assets/flags/f_11.png":h,"../assets/flags/f_110.png":v,"../assets/flags/f_111.png":O,"../assets/flags/f_112.png":N,"../assets/flags/f_113.png":S,"../assets/flags/f_114.png":V,"../assets/flags/f_115.png":T,"../assets/flags/f_116.png":L,"../assets/flags/f_117.png":x,"../assets/flags/f_118.png":B,"../assets/flags/f_119.png":w,"../assets/flags/f_12.png":j,"../assets/flags/f_120.png":C,"../assets/flags/f_121.png":F,"../assets/flags/f_122.png":k,"../assets/flags/f_123.png":P,"../assets/flags/f_124.png":R,"../assets/flags/f_125.png":U,"../assets/flags/f_126.png":$,"../assets/flags/f_127.png":I,"../assets/flags/f_128.png":A,"../assets/flags/f_129.png":J,"../assets/flags/f_13.png":E,"../assets/flags/f_130.png":M,"../assets/flags/f_131.png":q,"../assets/flags/f_132.png":z,"../assets/flags/f_133.png":D,"../assets/flags/f_134.png":G,"../assets/flags/f_135.png":H,"../assets/flags/f_136.png":K,"../assets/flags/f_137.png":Q,"../assets/flags/f_138.png":W,"../assets/flags/f_139.png":X,"../assets/flags/f_14.png":Y,"../assets/flags/f_140.png":Z,"../assets/flags/f_141.png":ss,"../assets/flags/f_142.png":as,"../assets/flags/f_143.png":gs,"../assets/flags/f_144.png":fs,"../assets/flags/f_145.png":es,"../assets/flags/f_146.png":ts,"../assets/flags/f_147.png":ns,"../assets/flags/f_148.png":ls,"../assets/flags/f_149.png":ps,"../assets/flags/f_15.png":_s,"../assets/flags/f_150.png":is,"../assets/flags/f_151.png":os,"../assets/flags/f_152.png":rs,"../assets/flags/f_153.png":ds,"../assets/flags/f_154.png":cs,"../assets/flags/f_155.png":ms,"../assets/flags/f_157.png":us,"../assets/flags/f_158.png":bs,"../assets/flags/f_159.png":ys,"../assets/flags/f_16.png":hs,"../assets/flags/f_160.png":vs,"../assets/flags/f_161.png":Os,"../assets/flags/f_162.png":Ns,"../assets/flags/f_163.png":Ss,"../assets/flags/f_164.png":Vs,"../assets/flags/f_165.png":Ts,"../assets/flags/f_166.png":Ls,"../assets/flags/f_167.png":xs,"../assets/flags/f_168.png":Bs,"../assets/flags/f_169.png":ws,"../assets/flags/f_17.png":js,"../assets/flags/f_170.png":Cs,"../assets/flags/f_171.png":Fs,"../assets/flags/f_172.png":ks,"../assets/flags/f_173.png":Ps,"../assets/flags/f_174.png":Rs,"../assets/flags/f_175.png":Us,"../assets/flags/f_176.png":$s,"../assets/flags/f_177.png":Is,"../assets/flags/f_178.png":As,"../assets/flags/f_179.png":Js,"../assets/flags/f_18.png":Es,"../assets/flags/f_180.png":Ms,"../assets/flags/f_181.png":qs,"../assets/flags/f_182.png":zs,"../assets/flags/f_183.png":Ds,"../assets/flags/f_184.png":Gs,"../assets/flags/f_185.png":Hs,"../assets/flags/f_186.png":Ks,"../assets/flags/f_187.png":Qs,"../assets/flags/f_188.png":Ws,"../assets/flags/f_189.png":Xs,"../assets/flags/f_19.png":Ys,"../assets/flags/f_190.png":Zs,"../assets/flags/f_191.png":sa,"../assets/flags/f_192.png":aa,"../assets/flags/f_193.png":ga,"../assets/flags/f_194.png":fa,"../assets/flags/f_195.png":ea,"../assets/flags/f_196.png":ta,"../assets/flags/f_197.png":na,"../assets/flags/f_198.png":la,"../assets/flags/f_199.png":pa,"../assets/flags/f_2.png":_a,"../assets/flags/f_20.png":ia,"../assets/flags/f_200.png":oa,"../assets/flags/f_201.png":ra,"../assets/flags/f_202.png":da,"../assets/flags/f_203.png":ca,"../assets/flags/f_204.png":ma,"../assets/flags/f_205.png":ua,"../assets/flags/f_206.png":ba,"../assets/flags/f_207.png":ya,"../assets/flags/f_208.png":ha,"../assets/flags/f_21.png":va,"../assets/flags/f_211.png":Oa,"../assets/flags/f_212.png":Na,"../assets/flags/f_213.png":Sa,"../assets/flags/f_214.png":Va,"../assets/flags/f_215.png":Ta,"../assets/flags/f_218.png":La,"../assets/flags/f_219.png":xa,"../assets/flags/f_22.png":Ba,"../assets/flags/f_23.png":wa,"../assets/flags/f_24.png":ja,"../assets/flags/f_25.png":Ca,"../assets/flags/f_250.png":Fa,"../assets/flags/f_26.png":ka,"../assets/flags/f_27.png":Pa,"../assets/flags/f_28.png":Ra,"../assets/flags/f_29.png":Ua,"../assets/flags/f_3.png":$a,"../assets/flags/f_30.png":Ia,"../assets/flags/f_31.png":Aa,"../assets/flags/f_32.png":Ja,"../assets/flags/f_33.png":Ea,"../assets/flags/f_34.png":Ma,"../assets/flags/f_35.png":qa,"../assets/flags/f_36.png":za,"../assets/flags/f_37.png":Da,"../assets/flags/f_38.png":Ga,"../assets/flags/f_39.png":Ha,"../assets/flags/f_4.png":Ka,"../assets/flags/f_40.png":Qa,"../assets/flags/f_41.png":Wa,"../assets/flags/f_42.png":Xa,"../assets/flags/f_43.png":Ya,"../assets/flags/f_44.png":Za,"../assets/flags/f_45.png":sg,"../assets/flags/f_46.png":ag,"../assets/flags/f_47.png":gg,"../assets/flags/f_48.png":fg,"../assets/flags/f_49.png":eg,"../assets/flags/f_5.png":tg,"../assets/flags/f_50.png":ng,"../assets/flags/f_51.png":lg,"../assets/flags/f_52.png":pg,"../assets/flags/f_53.png":_g,"../assets/flags/f_54.png":ig,"../assets/flags/f_55.png":og,"../assets/flags/f_56.png":rg,"../assets/flags/f_57.png":dg,"../assets/flags/f_58.png":cg,"../assets/flags/f_59.png":mg,"../assets/flags/f_6.png":ug,"../assets/flags/f_60.png":bg,"../assets/flags/f_61.png":yg,"../assets/flags/f_62.png":hg,"../assets/flags/f_63.png":vg,"../assets/flags/f_64.png":Og,"../assets/flags/f_65.png":Ng,"../assets/flags/f_66.png":Sg,"../assets/flags/f_67.png":Vg,"../assets/flags/f_68.png":Tg,"../assets/flags/f_69.png":Lg,"../assets/flags/f_7.png":xg,"../assets/flags/f_70.png":Bg,"../assets/flags/f_71.png":wg,"../assets/flags/f_72.png":jg,"../assets/flags/f_73.png":Cg,"../assets/flags/f_74.png":Fg,"../assets/flags/f_75.png":kg,"../assets/flags/f_76.png":Pg,"../assets/flags/f_77.png":Rg,"../assets/flags/f_78.png":Ug,"../assets/flags/f_79.png":$g,"../assets/flags/f_8.png":Ig,"../assets/flags/f_80.png":Ag,"../assets/flags/f_81.png":Jg,"../assets/flags/f_82.png":Eg,"../assets/flags/f_83.png":Mg,"../assets/flags/f_84.png":qg,"../assets/flags/f_85.png":zg,"../assets/flags/f_86.png":Dg,"../assets/flags/f_87.png":Gg,"../assets/flags/f_88.png":Hg,"../assets/flags/f_89.png":Kg,"../assets/flags/f_9.png":Qg,"../assets/flags/f_90.png":Wg,"../assets/flags/f_91.png":Xg,"../assets/flags/f_92.png":Yg,"../assets/flags/f_93.png":Zg,"../assets/flags/f_94.png":sf,"../assets/flags/f_95.png":af,"../assets/flags/f_96.png":gf,"../assets/flags/f_97.png":ff,"../assets/flags/f_98.png":ef,"../assets/flags/f_99.png":tf}[`../assets/flags/f_${s}.png`],self.location).href}return new URL("../assets/flags/f_notfound.png",self.location).href})),getTeamLeagueName:nf((()=>function(s){let g=a.data.leagueteamlinks.find((a=>a.teamid==s));if(g){return a.data.leagues.find((s=>s.leagueid==g.leagueid)).leaguename}return"None"})),getNationFlag:nf((()=>function(s){return new URL({"../assets/flags/f_0.png":n,"../assets/flags/f_1.png":l,"../assets/flags/f_10.png":p,"../assets/flags/f_100.png":_,"../assets/flags/f_101.png":i,"../assets/flags/f_102.png":o,"../assets/flags/f_103.png":r,"../assets/flags/f_104.png":d,"../assets/flags/f_105.png":c,"../assets/flags/f_106.png":m,"../assets/flags/f_107.png":u,"../assets/flags/f_108.png":b,"../assets/flags/f_109.png":y,"../assets/flags/f_11.png":h,"../assets/flags/f_110.png":v,"../assets/flags/f_111.png":O,"../assets/flags/f_112.png":N,"../assets/flags/f_113.png":S,"../assets/flags/f_114.png":V,"../assets/flags/f_115.png":T,"../assets/flags/f_116.png":L,"../assets/flags/f_117.png":x,"../assets/flags/f_118.png":B,"../assets/flags/f_119.png":w,"../assets/flags/f_12.png":j,"../assets/flags/f_120.png":C,"../assets/flags/f_121.png":F,"../assets/flags/f_122.png":k,"../assets/flags/f_123.png":P,"../assets/flags/f_124.png":R,"../assets/flags/f_125.png":U,"../assets/flags/f_126.png":$,"../assets/flags/f_127.png":I,"../assets/flags/f_128.png":A,"../assets/flags/f_129.png":J,"../assets/flags/f_13.png":E,"../assets/flags/f_130.png":M,"../assets/flags/f_131.png":q,"../assets/flags/f_132.png":z,"../assets/flags/f_133.png":D,"../assets/flags/f_134.png":G,"../assets/flags/f_135.png":H,"../assets/flags/f_136.png":K,"../assets/flags/f_137.png":Q,"../assets/flags/f_138.png":W,"../assets/flags/f_139.png":X,"../assets/flags/f_14.png":Y,"../assets/flags/f_140.png":Z,"../assets/flags/f_141.png":ss,"../assets/flags/f_142.png":as,"../assets/flags/f_143.png":gs,"../assets/flags/f_144.png":fs,"../assets/flags/f_145.png":es,"../assets/flags/f_146.png":ts,"../assets/flags/f_147.png":ns,"../assets/flags/f_148.png":ls,"../assets/flags/f_149.png":ps,"../assets/flags/f_15.png":_s,"../assets/flags/f_150.png":is,"../assets/flags/f_151.png":os,"../assets/flags/f_152.png":rs,"../assets/flags/f_153.png":ds,"../assets/flags/f_154.png":cs,"../assets/flags/f_155.png":ms,"../assets/flags/f_157.png":us,"../assets/flags/f_158.png":bs,"../assets/flags/f_159.png":ys,"../assets/flags/f_16.png":hs,"../assets/flags/f_160.png":vs,"../assets/flags/f_161.png":Os,"../assets/flags/f_162.png":Ns,"../assets/flags/f_163.png":Ss,"../assets/flags/f_164.png":Vs,"../assets/flags/f_165.png":Ts,"../assets/flags/f_166.png":Ls,"../assets/flags/f_167.png":xs,"../assets/flags/f_168.png":Bs,"../assets/flags/f_169.png":ws,"../assets/flags/f_17.png":js,"../assets/flags/f_170.png":Cs,"../assets/flags/f_171.png":Fs,"../assets/flags/f_172.png":ks,"../assets/flags/f_173.png":Ps,"../assets/flags/f_174.png":Rs,"../assets/flags/f_175.png":Us,"../assets/flags/f_176.png":$s,"../assets/flags/f_177.png":Is,"../assets/flags/f_178.png":As,"../assets/flags/f_179.png":Js,"../assets/flags/f_18.png":Es,"../assets/flags/f_180.png":Ms,"../assets/flags/f_181.png":qs,"../assets/flags/f_182.png":zs,"../assets/flags/f_183.png":Ds,"../assets/flags/f_184.png":Gs,"../assets/flags/f_185.png":Hs,"../assets/flags/f_186.png":Ks,"../assets/flags/f_187.png":Qs,"../assets/flags/f_188.png":Ws,"../assets/flags/f_189.png":Xs,"../assets/flags/f_19.png":Ys,"../assets/flags/f_190.png":Zs,"../assets/flags/f_191.png":sa,"../assets/flags/f_192.png":aa,"../assets/flags/f_193.png":ga,"../assets/flags/f_194.png":fa,"../assets/flags/f_195.png":ea,"../assets/flags/f_196.png":ta,"../assets/flags/f_197.png":na,"../assets/flags/f_198.png":la,"../assets/flags/f_199.png":pa,"../assets/flags/f_2.png":_a,"../assets/flags/f_20.png":ia,"../assets/flags/f_200.png":oa,"../assets/flags/f_201.png":ra,"../assets/flags/f_202.png":da,"../assets/flags/f_203.png":ca,"../assets/flags/f_204.png":ma,"../assets/flags/f_205.png":ua,"../assets/flags/f_206.png":ba,"../assets/flags/f_207.png":ya,"../assets/flags/f_208.png":ha,"../assets/flags/f_21.png":va,"../assets/flags/f_211.png":Oa,"../assets/flags/f_212.png":Na,"../assets/flags/f_213.png":Sa,"../assets/flags/f_214.png":Va,"../assets/flags/f_215.png":Ta,"../assets/flags/f_218.png":La,"../assets/flags/f_219.png":xa,"../assets/flags/f_22.png":Ba,"../assets/flags/f_23.png":wa,"../assets/flags/f_24.png":ja,"../assets/flags/f_25.png":Ca,"../assets/flags/f_250.png":Fa,"../assets/flags/f_26.png":ka,"../assets/flags/f_27.png":Pa,"../assets/flags/f_28.png":Ra,"../assets/flags/f_29.png":Ua,"../assets/flags/f_3.png":$a,"../assets/flags/f_30.png":Ia,"../assets/flags/f_31.png":Aa,"../assets/flags/f_32.png":Ja,"../assets/flags/f_33.png":Ea,"../assets/flags/f_34.png":Ma,"../assets/flags/f_35.png":qa,"../assets/flags/f_36.png":za,"../assets/flags/f_37.png":Da,"../assets/flags/f_38.png":Ga,"../assets/flags/f_39.png":Ha,"../assets/flags/f_4.png":Ka,"../assets/flags/f_40.png":Qa,"../assets/flags/f_41.png":Wa,"../assets/flags/f_42.png":Xa,"../assets/flags/f_43.png":Ya,"../assets/flags/f_44.png":Za,"../assets/flags/f_45.png":sg,"../assets/flags/f_46.png":ag,"../assets/flags/f_47.png":gg,"../assets/flags/f_48.png":fg,"../assets/flags/f_49.png":eg,"../assets/flags/f_5.png":tg,"../assets/flags/f_50.png":ng,"../assets/flags/f_51.png":lg,"../assets/flags/f_52.png":pg,"../assets/flags/f_53.png":_g,"../assets/flags/f_54.png":ig,"../assets/flags/f_55.png":og,"../assets/flags/f_56.png":rg,"../assets/flags/f_57.png":dg,"../assets/flags/f_58.png":cg,"../assets/flags/f_59.png":mg,"../assets/flags/f_6.png":ug,"../assets/flags/f_60.png":bg,"../assets/flags/f_61.png":yg,"../assets/flags/f_62.png":hg,"../assets/flags/f_63.png":vg,"../assets/flags/f_64.png":Og,"../assets/flags/f_65.png":Ng,"../assets/flags/f_66.png":Sg,"../assets/flags/f_67.png":Vg,"../assets/flags/f_68.png":Tg,"../assets/flags/f_69.png":Lg,"../assets/flags/f_7.png":xg,"../assets/flags/f_70.png":Bg,"../assets/flags/f_71.png":wg,"../assets/flags/f_72.png":jg,"../assets/flags/f_73.png":Cg,"../assets/flags/f_74.png":Fg,"../assets/flags/f_75.png":kg,"../assets/flags/f_76.png":Pg,"../assets/flags/f_77.png":Rg,"../assets/flags/f_78.png":Ug,"../assets/flags/f_79.png":$g,"../assets/flags/f_8.png":Ig,"../assets/flags/f_80.png":Ag,"../assets/flags/f_81.png":Jg,"../assets/flags/f_82.png":Eg,"../assets/flags/f_83.png":Mg,"../assets/flags/f_84.png":qg,"../assets/flags/f_85.png":zg,"../assets/flags/f_86.png":Dg,"../assets/flags/f_87.png":Gg,"../assets/flags/f_88.png":Hg,"../assets/flags/f_89.png":Kg,"../assets/flags/f_9.png":Qg,"../assets/flags/f_90.png":Wg,"../assets/flags/f_91.png":Xg,"../assets/flags/f_92.png":Yg,"../assets/flags/f_93.png":Zg,"../assets/flags/f_94.png":sf,"../assets/flags/f_95.png":af,"../assets/flags/f_96.png":gf,"../assets/flags/f_97.png":ff,"../assets/flags/f_98.png":ef,"../assets/flags/f_99.png":tf}[`../assets/flags/f_${s?s+".png":"notfound.png"}`],self.location).href})),getNationConfederation:nf((()=>function(a){let g=s.$config.confederationList.find((s=>s.value==a));return g?g.label:"None"})),getTeamPlayerLineupById:nf((()=>function(s){return a.data.teamplayerlinks.map((g=>{let f=null;return g.teamid==s&&(f=a.data.players.find((s=>s.playerid==g.playerid))),f?{label:[f.firstnameid,f.lastnameid,f.commonnameid],value:g.playerid,playerdata:f}:null})).filter(Boolean)})),getStadiumBackground:nf((()=>function(s){return new URL({"../assets/stadium/s-1.png":"/static/png/s-1-8682e169.png","../assets/stadium/s1.png":"/static/png/s1-8f78d6b0.png","../assets/stadium/s13.png":"/static/png/s13-514794d1.png","../assets/stadium/s14.png":"/static/png/s14-bb8e5ed5.png","../assets/stadium/s147.png":"/static/png/s147-1760fbc5.png","../assets/stadium/s15.png":"/static/png/s15-49489ced.png","../assets/stadium/s155.png":"/static/png/s155-8741a8d4.png","../assets/stadium/s156.png":"/static/png/s156-1a0ec644.png","../assets/stadium/s172.png":"/static/png/s172-dbb602e9.png","../assets/stadium/s2.png":"/static/png/s2-73eae198.png","../assets/stadium/s229.png":"/static/png/s229-32dbd1b4.png","../assets/stadium/s28.png":"/static/png/s28-d4ef9d1f.png","../assets/stadium/s34.png":"/static/png/s34-38c06da8.png","../assets/stadium/s5.png":"/static/png/s5-48f680c4.png","../assets/stadium/s6.png":"/static/png/s6-bbf62dc8.png","../assets/stadium/sx.png":"/static/png/sx-d8a6c39e.png"}[`../assets/stadium/s${s}.png`],self.location).href})),getTeamFormation:nf((()=>function(s,g){let f=a.data.formations&&a.data.formations.find((a=>s==a.teamid));return g>0?f||{}:f&&a.data.formations.find((s=>f.relativeformationid==s.formationid))||{}})),getTeamFormationById:nf((()=>function(s){return a.data.formations&&a.data.formations.find((a=>Number(a.teamid)<0&&a.formationid==s))||{}})),getTeamRelativeFormation:nf((()=>function(s){let g=a.data.formations&&a.data.formations.find((a=>Number(a.teamid)<0&&s==a.formationid&&"1"!=a.position1)),f=a.data.formations&&a.data.formations.find((a=>Number(a.teamid)<0&&s==a.relativeformationid&&"1"!=a.position1));return g||f||{}}))};return t({},g)}const Vf=_f({name:"teamSelector",components:{},props:{modelValue:{type:String,default:""},filterable:{type:Boolean,default:!0},remote:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(s,a){const g=Of();let f=of({selectOptions:[],valueName:"",selectLoading:!1,cloneSelectOptions:[]}),e={handleSelectVisible(s){s||(f.selectOptions=f.cloneSelectOptions)},remoteMethod(s){if(""!==s){let g;f.selectLoading=!0,g&&clearTimeout(g),g=setTimeout((()=>{if(f.selectLoading=!1,!isNaN(parseFloat(s))&&isFinite(s))return void(f.selectOptions=f.cloneSelectOptions.filter((a=>a.value==s)));let a=new RegExp(s,"i");f.selectOptions=f.cloneSelectOptions.filter((s=>a.test(s.label)))}),500),a.emit("update:modelValue",f.valueName)}else f.selectOptions=f.cloneSelectOptions},handleChange(s){a.emit("update:modelValue",s),a.emit("change",s)}};return rf((()=>s.modelValue),(a=>{f.valueName=s.modelValue})),df((()=>{f.selectOptions=g.getAllTeamList(),f.cloneSelectOptions=JSON.parse(JSON.stringify(f.selectOptions)),f.valueName=s.modelValue})),t(t({},cf(f)),e)}}),Tf={style:{"margin-right":"8px"}},Lf={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}};var xf=Nf(Vf,[["render",function(s,a,g,f,e,t){const n=mf("el-select-v2");return uf(),bf(n,{modelValue:s.valueName,"onUpdate:modelValue":a[0]||(a[0]=a=>s.valueName=a),filterable:s.filterable,remote:s.remote,multiple:s.multiple,clearable:s.clearable,disabled:s.disabled,options:s.selectOptions,onVisibleChange:s.handleSelectVisible,placeholder:s.$t("message.selectTeamPlaceholder"),onChange:s.handleChange,"remote-method":s.remoteMethod,loading:s.selectLoading},{default:yf((({item:s})=>[hf("span",Tf,vf(s.value),1),hf("span",Lf,vf(s.label),1)])),_:1},8,["modelValue","filterable","remote","multiple","clearable","disabled","options","onVisibleChange","placeholder","onChange","remote-method","loading"])}]]);export{xf as t,Sf as u};
