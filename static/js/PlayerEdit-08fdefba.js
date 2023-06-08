var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,s=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&n(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&n(e,a,l[a]);return e};import{_ as i}from"./team_notfound-5b1be68a.js";import{_ as d}from"./notflag-60268a62.js";import{_ as c}from"./notfound-fa5cb960.js";import{u as m}from"./editSpace-f67dccbd.js";import{u}from"./usePlayers-5c9db15e.js";import{f as p,a as y}from"./util-5d4d90a3.js";import{_ as b}from"./plugin-vue_export-helper-46f75680.js";import{d as g,r as f,k as v,I as D,t as h,e as V,F as P,b as $,f as x,w as k,c as _,h as U,p as w,i as O,g as j,a as C,o as S,j as A,J as T}from"./index-ccaceecc.js";const Y=g({name:"PlayerEdit",components:{},props:{playerID:{type:[String,Number],default:0}},emits:["close","save"],setup(e,n){const i=m(),{proxy:d}=j(),c=u();let b=f({playerData:null,clonePlayerData:null,isNotFound:!1,selectLoading:!1,selectOptions:[],cloneSelectOptions:[],nationOptions:[],saveloading:!1}),g={remoteMethod(e){if(""!==e){let l;b.selectLoading=!0,l&&clearTimeout(l),l=setTimeout((()=>{b.selectLoading=!1;let l=new RegExp(e,"i");b.selectOptions=b.cloneSelectOptions.filter((e=>l.test(e.label)))}),500)}else b.selectOptions=b.cloneSelectOptions},formatDateToCode(e,l){let a=new Date(1970,1,1).getTime(),t=(p(e)-a)/864e5+141459;b.clonePlayerData[l]=parseInt(t)},handleSelectVisible(e){e||(b.selectOptions=b.cloneSelectOptions)},handleTraitChange(e,l){if("traitArr1"===l||"traitArr2"===l){if(e.includes(0))return"traitArr1"===l?b.clonePlayerData.trait1=0:b.clonePlayerData.trait2=0,void(b.clonePlayerData[l]=e.filter((e=>0===e)));let a=0;for(let l=0;l<e.length;l++)a+=e[l];"traitArr1"===l?b.clonePlayerData.trait1=a:b.clonePlayerData.trait2=a}},getPlayerNameData(){i.data.playernames&&(i.data.playernames.forEach((e=>{b.selectOptions.push({label:e.name,value:parseInt(e.nameid)})})),b.cloneSelectOptions=JSON.parse(JSON.stringify(b.selectOptions)))},getPlayerNationData(){i.data.nations&&i.data.nations.forEach((e=>{""!==e.nationname.trim()&&b.nationOptions.push({label:e.nationname,value:parseInt(e.nationid)})}))},getPlayerData(e){const l=e;if(b.playerData=i.data.players&&i.data.players.find((e=>e.playerid==l)),!b.playerData)return b.isNotFound=!0,void d.$message.warning(`${d.$t("message.notfoundplayer")}`);b.clonePlayerData={},Object.keys(b.playerData).forEach((e=>{if("teamplayerlinks"!==e)if("trait1"!==e&&"trait2"!==e||("trait1"===e?b.clonePlayerData.traitArr1=c.getPlayerTrait.value(1,b.playerData[e]):b.clonePlayerData.traitArr2=c.getPlayerTrait.value(2,b.playerData[e])),"playerjointeamdate"===e||"birthdate"===e){let l=c.getPlayerCodeToDate.value(b.playerData[e]),a=e+"1";b.clonePlayerData[a]=y(l),b.clonePlayerData[e]=parseInt(b.playerData[e])}else b.clonePlayerData[e]="contractvaliduntil"===e?b.playerData[e]:parseInt(b.playerData[e])}))},handleSavedb(){b.saveloading=!0;const e=JSON.parse(JSON.stringify(b.clonePlayerData)),{playerjointeamdate1:l,birthdate1:a,traitArr1:s,traitArr2:d}=e,c=((e,l)=>{var a={};for(var n in e)o.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&t)for(var n of t(e))l.indexOf(n)<0&&r.call(e,n)&&(a[n]=e[n]);return a})(e,["playerjointeamdate1","birthdate1","traitArr1","traitArr2"]);i.saveData("players","playerid",c),b.saveloading=!1,n.emit("save")},handleDelete(){if(i.deleteData("players",["playerid",b.clonePlayerData.playerid]))return d.$message.success(d.$t("message.deleteSucceeded")),n.emit("save"),void g.handleBack();d.$message.error(d.$t("message.deleteFailed"))},handleBack(){e.playerID&&0!=e.playerID?(n.emit("close"),b.playerData=null):d.$router.go(-1)}};return v((()=>{setTimeout((()=>{g.getPlayerNationData(),g.getPlayerNameData(),e.playerID&&0!=e.playerID?g.getPlayerData(e.playerID):g.getPlayerData(d.$route.query.playerid);const l=document.querySelector(".scrollbar");l&&l.scrollTo(0,0)}),20)})),D((()=>e.playerID),(l=>{l&&0!=l&&(b.playerData=null,setTimeout((()=>{g.getPlayerData(e.playerID)}),40))})),s((V=s(s({},h(b)),g),l(V,a({editSpaceStore:i}))),c);var V}}),I={class:"full-layout flex-column-center scrollbar routerview",style:{"overflow-y":"auto"}},N={class:"flex-between full-w edit-header"},M={class:"flex-end",style:{"margin-left":"10px"}},L={class:"player-box full-layout"},E={class:"flex-between flex-warp"},F={class:"flex-start",style:{"align-items":"flex-end"}},J={class:"player-avatar"},q={class:"image-slot"},B=["src"],z={class:"image-slot"},R=["src"],G={class:"flex-column-end player-info"},H={class:"player-name text-left"},K={class:"flex-start"},Q=["src"],W={class:"player-formation"},X={style:{"margin-left":"5px","min-width":"35px"}},Z={style:{"margin-left":"2px"}},ee={style:{"margin-left":"5px"}},le={style:{"margin-left":"5px"}},ae={class:"flex-between player-team"},te={class:"team-name"},oe=["src"],re={class:"team-position margin-1"},ne={class:"team-kitnumber margin-1"},se={class:"tab-1"},ie={style:{margin:"20px 0"}},de={class:"tab-1"},ce={style:{margin:"20px 0"}},me={class:"tab-1"},ue={style:{margin:"20px 0"}},pe={class:"flex-between full-h"},ye={style:{float:"right"}},be={class:"tab-1"},ge={style:{margin:"20px 0"}},fe={class:"flex-between full-h"},ve={style:{float:"right"}},De={class:"tab-1"},he={style:{margin:"20px 0"}},Ve={class:"flex-between full-h"},Pe={style:{float:"right"}},$e={class:"tab-1"},xe={style:{margin:"20px 0"}},ke={class:"flex-start full-h"};var _e=b(Y,[["render",function(e,l,a,t,o,r){const n=C("ArrowLeftBold"),s=C("el-icon"),m=C("el-button"),u=C("el-popconfirm"),p=C("el-skeleton"),y=C("el-empty"),b=C("el-image"),g=C("el-avatar"),f=C("el-select-v2"),v=C("el-form-item"),D=C("el-input-number"),h=C("el-date-picker"),j=C("el-rate"),Y=C("el-switch"),_e=C("el-form"),Ue=C("el-slider"),we=C("el-option"),Oe=C("el-select");return S(),V("div",I,[e.editSpaceStore.isUpload?(S(),V(P,{key:0},[$("div",N,[x(s,{class:"back-icon",onClick:e.handleBack},{default:k((()=>[x(n)])),_:1},8,["onClick"]),$("div",M,[x(m,{type:"success",onClick:e.handleSavedb,loading:e.saveloading},{default:k((()=>[A(U(e.$t("message.save")),1)])),_:1},8,["onClick","loading"]),x(u,{title:e.$t("message.deleteInfo"),onConfirm:e.handleDelete},{reference:k((()=>[x(m,{type:"primary",style:{"margin-left":"10px"}},{default:k((()=>[A(U(e.$t("message.delete")),1)])),_:1})])),_:1},8,["title","onConfirm"])])]),$("div",L,[e.playerData||e.isNotFound?!e.playerData&&e.isNotFound?(S(),_(y,{key:1,description:e.$t("message.notfoundplayer")},null,8,["description"])):(S(),V(P,{key:2},[$("div",E,[$("div",F,[$("div",J,[x(b,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(e.playerData.playerid,120),fit:"cover"},{placeholder:k((()=>[$("div",q,[$("img",{src:c,style:{"object-fit":"cover"}},null,8,B)])])),error:k((()=>[$("div",z,[$("img",{src:c,style:{"object-fit":"cover"}},null,8,R)])])),_:1},8,["src"])]),$("div",G,[$("p",H,U(e.getPlayerName(e.playerData.firstnameid,e.playerData.lastnameid,e.playerData.commonnameid)+`  (${e.playerData.playerid})`),1),$("div",K,[x(g,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(e.playerData.nationality),onError:e=>!0},{default:k((()=>[$("img",{src:d},null,8,Q)])),_:1},8,["src"]),$("span",W,U(e.getPlayerPreferredPosition(e.playerData.preferredposition1,e.playerData.preferredposition2)),1),$("span",X,U(e.getPlayerAge(e.playerData.birthdate)+e.$t("message.age")),1),$("span",Z," ("+U(e.getPlayerCodeToDate(e.playerData.birthdate))+") ",1),$("span",ee,U(e.playerData.height)+"cm ",1),$("span",le,U(e.playerData.weight)+"kg ",1)])])]),$("div",ae,[(S(!0),V(P,null,w(e.getPlayerTeam(e.playerData.playerid),(l=>(S(),V("div",{class:"flex-column-start team-box",key:l.artificialkey},[$("p",te,U(e.getPlayerTeamName(l.teamid)),1),x(g,{shape:"square",size:60,fit:"cover",class:"margin-1",style:{background:"transparent"},src:e.getTeamAvatar(l.teamid,60),onError:e=>!0},{default:k((()=>[$("img",{src:i},null,8,oe)])),_:2},1032,["src"]),$("p",re,[A(U(e.$t("message.position"))+" ",1),$("span",null,U(e.getPlayerPosition(l.position)),1)]),$("p",ne,[A(U(e.$t("message.kitNumber"))+" ",1),$("span",null,U(l.jerseynumber),1)])])))),128))])]),e.clonePlayerData&&e.clonePlayerData.playerid?(S(),V(P,{key:0},[$("div",se,U(e.$t("message.baseData")),1),$("div",ie,[x(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:k((()=>[x(v,{label:e.$t("message.firstname")},{default:k((()=>[x(f,{modelValue:e.clonePlayerData.firstnameid,"onUpdate:modelValue":l[0]||(l[0]=l=>e.clonePlayerData.firstnameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),x(v,{label:e.$t("message.lastname")},{default:k((()=>[x(f,{modelValue:e.clonePlayerData.lastnameid,"onUpdate:modelValue":l[1]||(l[1]=l=>e.clonePlayerData.lastnameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),x(v,{label:e.$t("message.commonname")},{default:k((()=>[x(f,{modelValue:e.clonePlayerData.commonnameid,"onUpdate:modelValue":l[2]||(l[2]=l=>e.clonePlayerData.commonnameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),x(v,{label:e.$t("message.playerjerseyname")},{default:k((()=>[x(f,{modelValue:e.clonePlayerData.playerjerseynameid,"onUpdate:modelValue":l[3]||(l[3]=l=>e.clonePlayerData.playerjerseynameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),x(v,{label:e.$t("message.height")},{default:k((()=>[x(D,{modelValue:e.clonePlayerData.height,"onUpdate:modelValue":l[4]||(l[4]=l=>e.clonePlayerData.height=l),min:150,max:215,"step-strictly":""},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.weight")},{default:k((()=>[x(D,{modelValue:e.clonePlayerData.weight,"onUpdate:modelValue":l[5]||(l[5]=l=>e.clonePlayerData.weight=l),min:50,max:115,"step-strictly":""},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.birthdate")},{default:k((()=>[x(h,{modelValue:e.clonePlayerData.birthdate1,"onUpdate:modelValue":l[6]||(l[6]=l=>e.clonePlayerData.birthdate1=l),type:"date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD",onChange:l[7]||(l[7]=l=>e.formatDateToCode(l,"birthdate")),clearable:!1},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.nationality")},{default:k((()=>[x(f,{modelValue:e.clonePlayerData.nationality,"onUpdate:modelValue":l[8]||(l[8]=l=>e.clonePlayerData.nationality=l),options:e.nationOptions,filterable:"",clearable:!1,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","placeholder"])])),_:1},8,["label"]),x(v,{label:e.$t("message.internationalrep")},{default:k((()=>[x(j,{modelValue:e.clonePlayerData.internationalrep,"onUpdate:modelValue":l[9]||(l[9]=l=>e.clonePlayerData.internationalrep=l)},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.isretiring")},{default:k((()=>[x(Y,{modelValue:e.clonePlayerData.isretiring,"onUpdate:modelValue":l[10]||(l[10]=l=>e.clonePlayerData.isretiring=l),"active-value":1,"inactive-value":0,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),x(v,{label:e.$t("message.playerjointeamdate")},{default:k((()=>[x(h,{modelValue:e.clonePlayerData.playerjointeamdate1,"onUpdate:modelValue":l[11]||(l[11]=l=>e.clonePlayerData.playerjointeamdate1=l),type:"date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD",onChange:l[12]||(l[12]=l=>e.formatDateToCode(l,"playerjointeamdate")),clearable:!1},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.contractvaliduntil")},{default:k((()=>[x(h,{modelValue:e.clonePlayerData.contractvaliduntil,"onUpdate:modelValue":l[13]||(l[13]=l=>e.clonePlayerData.contractvaliduntil=l),"value-format":"YYYY",type:"year",clearable:!1},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["model"])]),$("div",de,U(e.$t("message.playerAttribute")),1),$("div",ce,[x(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:k((()=>[(S(!0),V(P,null,w(e.$config.playerAttribute,(l=>(S(),_(v,{key:l,label:e.$t(`message.${l}`)},{default:k((()=>[x(Ue,{modelValue:e.clonePlayerData[l],"onUpdate:modelValue":a=>e.clonePlayerData[l]=a,min:1,max:99,step:1},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128)),x(v,{label:e.$t("message.weakfootabilitytypecode")},{default:k((()=>[x(j,{modelValue:e.clonePlayerData.weakfootabilitytypecode,"onUpdate:modelValue":l[14]||(l[14]=l=>e.clonePlayerData.weakfootabilitytypecode=l)},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.skillmoves")},{default:k((()=>[x(j,{modelValue:e.clonePlayerData.skillmoves,"onUpdate:modelValue":l[15]||(l[15]=l=>e.clonePlayerData.skillmoves=l)},null,8,["modelValue"])])),_:1},8,["label"]),x(v,{label:e.$t("message.attackingworkrat")},{default:k((()=>[x(Oe,{modelValue:e.clonePlayerData.attackingworkrate,"onUpdate:modelValue":l[16]||(l[16]=l=>e.clonePlayerData.attackingworkrate=l),placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(e.$config.workrateList,(l=>(S(),_(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),x(v,{label:e.$t("message.defensiveworkrate")},{default:k((()=>[x(Oe,{modelValue:e.clonePlayerData.defensiveworkrate,"onUpdate:modelValue":l[17]||(l[17]=l=>e.clonePlayerData.defensiveworkrate=l),placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(e.$config.workrateList,(l=>(S(),_(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"])]),$("div",me,U(e.$t("message.playerAppearance")),1),$("div",ue,[x(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:k((()=>[(S(!0),V(P,null,w(e.$config.playerAppearance,(l=>(S(),_(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:k((()=>["number"===l.type?(S(),_(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(S(),_(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(e=>(S(),_(we,{key:e.value,label:e.label,value:e.value},{default:k((()=>[$("div",pe,[$("span",{style:T({backgroundColor:e.label}),class:"select-color"},null,4),$("span",ye,U(e.label),1)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(S(),_(Y,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):O("",!0):(S(),_(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(l=>(S(),_(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])]),$("div",be,U(e.$t("message.playerAccessories")),1),$("div",ge,[x(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:k((()=>[(S(!0),V(P,null,w(e.$config.playerAccessories,(l=>(S(),_(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:k((()=>["number"===l.type?(S(),_(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(S(),_(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(e=>(S(),_(we,{key:e.value,label:e.label,value:e.value},{default:k((()=>[$("div",fe,[$("span",{style:T({backgroundColor:e.label}),class:"select-color"},null,4),$("span",ve,U(e.label),1)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(S(),_(Y,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):O("",!0):(S(),_(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(l=>(S(),_(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])]),$("div",De,U(e.$t("message.playerTraits")),1),$("div",he,[x(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:k((()=>[(S(!0),V(P,null,w(e.$config.playerTraits,(l=>(S(),_(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:k((()=>["number"===l.type?(S(),_(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(S(),_(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(e=>(S(),_(we,{key:e.value,label:e.label,value:e.value},{default:k((()=>[$("div",Ve,[$("span",{style:T({backgroundColor:e.label}),class:"select-color"},null,4),$("span",Pe,U(e.label),1)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(S(),_(Y,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):O("",!0):(S(),_(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,"collapse-tags":l.multiple,"collapse-tags-tooltip":l.multiple,"max-collapse-tags":5,clearable:l.clearable,onChange:a=>e.handleTraitChange(a,l.label),placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(l=>(S(),_(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","collapse-tags","collapse-tags-tooltip","clearable","onChange","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])]),$("div",$e,U(e.$t("message.other")),1),$("div",xe,[x(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:k((()=>[(S(!0),V(P,null,w(e.$config.playerOtherData,(l=>(S(),_(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:k((()=>["number"===l.type?(S(),_(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(S(),_(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(e=>(S(),_(we,{key:e.value,label:e.label,value:e.value},{default:k((()=>[$("div",ke,[$("span",{style:T({backgroundColor:e.label}),class:"select-color"},null,4)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(S(),_(Y,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):O("",!0):(S(),_(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:k((()=>[(S(!0),V(P,null,w(l.data,(l=>(S(),_(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])])],64)):O("",!0)],64)):(S(),_(p,{key:0,rows:20,animated:""}))])],64)):(S(),_(y,{key:1,description:e.$t("message.errorInfo")},null,8,["description"]))])}],["__scopeId","data-v-3758b576"]]);export{_e as default};
