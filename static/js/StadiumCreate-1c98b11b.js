var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(a,t,l)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[t]=l,i=(e,a)=>{for(var t in a||(a={}))o.call(a,t)&&d(e,t,a[t]);if(l)for(var t of l(a))s.call(a,t)&&d(e,t,a[t]);return e};import{u as m}from"./editSpace-6c14df94.js";import{t as n,u as r}from"./teamSelector-55b32fd5.js";import{u}from"./usePlayers-bc74cec5.js";import{n as c}from"./nationSelector-fe607f8e.js";import{_ as p}from"./plugin-vue_export-helper-46f75680.js";import{d as f,r as y,k as b,t as g,e as S,F as D,b as h,f as v,w as $,h as V,c as w,a as x,o as k,j,p as _,i as O,g as U}from"./index-97b52ec4.js";const I=f({name:"StadiumCreate",components:{teamSelector:n,nationSelector:c},props:{},setup(e,l){const o=m(),{proxy:s}=U(),d=r(),n=u();let c=y({satdiumData:{},cloneStadiumData:{yearbuilt:"",name:"",timeofday3:5,adboardsidelinedistance:360,stadiumgloalnetdepth:229,hometeamid:"-1",capacity:"",seatcolor:1,sectionfacedbydefault:0,policetypecode:1,timeofday4:5,stadiumpitchlength:10500,stadiumgoalnetstyle:0,tod4weather:0,countrycode:"-1",stadiummowpattern_code:1,stadiumid:"",cameraheight:15,stadiumgoalnettype:0,citycode:0,stadiumpitchwidth:6800,stadiumtype:0,stadiumgoalnettension:0,tod1weather:0,dlc:0,tod2weather:0,camerazoom:9,adboardendlinedistance:600,iseditable:0,isdynamic:1,tod3weather:0,genericrank:-1,timeofday1:1,timeofday2:3,stadiumgoalnetwidth:744,stadiumgoalnetlength:250},isNotFound:!1,saveloading:!1}),p={handleId(e){c.cloneStadiumData.stadiumid=/^[0-9]*$/.test(parseInt(e))?String(parseInt(e)).replace(".",""):"",parseInt(e)>511&&(c.cloneStadiumData.stadiumid="511")},handleValidates:e=>new Promise(((a,t)=>{if(!s.$refs[e])return a(!0),!1;s.$refs[e].validate((e=>{e?a(!0):t(new Error(s.$t("message.checkedFailed")))}))})),async handleSave(){Promise.all(["form1","form2"].map((e=>p.handleValidates(e)))).then((()=>{"-1"==c.cloneStadiumData.hometeamid&&(c.cloneStadiumData.hometeamid="0"),"-1"==c.cloneStadiumData.countrycode&&(c.cloneStadiumData.countrycode="0");if(o.addData("stadiums",c.cloneStadiumData,"stadiumid"))return s.$message.success(s.$t("message.saveSucceeded"));s.$message.error(s.$t("message.saveFailed")+"-"+s.$t("message.playeridRepeat"))})).catch((e=>{s.$message.error(s.$t("message.saveFailed")+"-"+e.message)}))},handlePaste(){let e=JSON.parse(s.$utils.cache.copyData.get());if(e&&e.stadiumid)return c.satdiumData=i({},e),c.cloneStadiumData={},Object.keys(c.satdiumData).forEach((e=>{!isNaN(parseFloat(c.satdiumData[e]))&&isFinite(c.satdiumData[e])?"countrycode"===e||e.endsWith("id")?c.cloneStadiumData[e]=c.satdiumData[e]:c.cloneStadiumData[e]=parseInt(c.satdiumData[e]):c.cloneStadiumData[e]=c.satdiumData[e]})),c.cloneStadiumData.stadiumid="",s.$message.success(s.$t("message.pasteSucceeded"));s.$message.error(s.$t("message.pasteFailed"))}};return b((()=>{})),i(i((f=i(i({},g(c)),p),a(f,t({editSpaceStore:o}))),d),n);var f}}),P={class:"full-layout flex-column-center scrollbar routerview",style:{"overflow-y":"auto"}},F={class:"flex-between full-w edit-header"},C={class:"flex-end",style:{"margin-left":"10px"}},N={class:"player-box full-layout"},q={class:"tab-1"},E={style:{margin:"20px 0"}},B={class:"tab-1"},z={style:{margin:"20px 0"}};var A=p(I,[["render",function(e,a,t,l,o,s){const d=x("ArrowLeftBold"),i=x("el-icon"),m=x("el-button"),n=x("el-input"),r=x("el-form-item"),u=x("el-input-number"),c=x("teamSelector"),p=x("nationSelector"),f=x("el-form"),y=x("el-empty");return k(),S("div",P,[e.editSpaceStore.isUpload?(k(),S(D,{key:0},[h("div",F,[v(i,{class:"back-icon",onClick:a[0]||(a[0]=a=>e.$router.go(-1))},{default:$((()=>[v(d)])),_:1}),h("div",C,[v(m,{type:"success",onClick:e.handleSave,loading:e.saveloading},{default:$((()=>[j(V(e.$t("message.save")),1)])),_:1},8,["onClick","loading"]),v(m,{type:"primary",style:{"margin-left":"10px"},onClick:e.handlePaste},{default:$((()=>[j(V(e.$t("message.paste")),1)])),_:1},8,["onClick"])])]),h("div",N,[h("div",q,V(e.$t("message.baseData")),1),h("div",E,[v(f,{inline:!0,ref:"form1","scroll-to-error":"",model:e.cloneStadiumData,"show-message":!1,"inline-message":"",class:"flex-start flex-warp"},{default:$((()=>[v(r,{label:e.$t("message.stadiumid"),required:"",prop:"stadiumid"},{default:$((()=>[v(n,{modelValue:e.cloneStadiumData.stadiumid,"onUpdate:modelValue":a[1]||(a[1]=a=>e.cloneStadiumData.stadiumid=a),onInput:e.handleId},null,8,["modelValue","onInput"])])),_:1},8,["label"]),(k(!0),S(D,null,_(e.$config.stadiumBaseData,(a=>(k(),w(r,{required:"",key:a.label,prop:a.value?a.value:a.label,label:e.$t(`message.${a.label}`)},{default:$((()=>["input"===a.type?(k(),w(n,{key:0,modelValue:e.cloneStadiumData[a.label],"onUpdate:modelValue":t=>e.cloneStadiumData[a.label]=t},null,8,["modelValue","onUpdate:modelValue"])):"number"===a.type?(k(),w(u,{key:1,modelValue:e.cloneStadiumData[a.label],"onUpdate:modelValue":t=>e.cloneStadiumData[a.label]=t,min:a.min,max:a.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"teamselect"===a.type?(k(),w(c,{key:2,modelValue:e.cloneStadiumData[a.value],"onUpdate:modelValue":t=>e.cloneStadiumData[a.value]=t},null,8,["modelValue","onUpdate:modelValue"])):"nationselect"===a.type?(k(),w(p,{key:3,modelValue:e.cloneStadiumData[a.value],"onUpdate:modelValue":t=>e.cloneStadiumData[a.value]=t},null,8,["modelValue","onUpdate:modelValue"])):O("",!0)])),_:2},1032,["prop","label"])))),128))])),_:1},8,["model"])]),h("div",B,V(e.$t("message.other")),1),h("div",z,[v(f,{ref:"form2","scroll-to-error":"",inline:!0,model:e.cloneStadiumData,"show-message":!1,"inline-message":"",class:"flex-start flex-warp"},{default:$((()=>[(k(!0),S(D,null,_(e.$config.satdiumOtherData,(a=>(k(),w(r,{required:"",key:a.label,prop:a.label,label:e.$t(`message.${a.label}`),style:{"margin-bottom":"30px"}},{default:$((()=>["number"===a.type?(k(),w(u,{key:0,modelValue:e.cloneStadiumData[a.label],"onUpdate:modelValue":t=>e.cloneStadiumData[a.label]=t,min:a.min,max:a.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):O("",!0)])),_:2},1032,["prop","label"])))),128))])),_:1},8,["model"])])])],64)):(k(),w(y,{key:1,description:e.$t("message.errorInfo")},null,8,["description"]))])}],["__scopeId","data-v-7fbb7c2b"]]);export{A as default};
