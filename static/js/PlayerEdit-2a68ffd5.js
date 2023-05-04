var e=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(l,a,t)=>a in l?e(l,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[a]=t,s=(e,l)=>{for(var a in l||(l={}))o.call(l,a)&&n(e,a,l[a]);if(t)for(var a of t(l))r.call(l,a)&&n(e,a,l[a]);return e};import{_ as i}from"./team_notfound-5b1be68a.js";import{_ as d}from"./notflag-60268a62.js";import{_ as c}from"./notfound-fa5cb960.js";import{u as m}from"./editSpace-eb9d1b0f.js";import{u}from"./usePlayers-ca2e5626.js";import{f as p,a as y}from"./util-222f31f9.js";import{_ as b}from"./plugin-vue_export-helper-46f75680.js";import{d as g,r as f,k as v,t as D,e as h,F as V,b as P,f as $,w as x,c as k,h as _,p as U,i as w,a as O,o as j,j as C,J as S,g as A}from"./index-d4b5e659.js";const Y=g({name:"PlayerEdit",components:{},props:{},setup(e,n){const i=m(),{proxy:d}=A(),c=u();let b=f({playerData:null,clonePlayerData:null,isNotFound:!1,selectLoading:!1,selectOptions:[],cloneSelectOptions:[],nationOptions:[],saveloading:!1}),g={remoteMethod(e){if(""!==e){let l;b.selectLoading=!0,l&&clearTimeout(l),l=setTimeout((()=>{b.selectLoading=!1;let l=new RegExp(e,"i");b.selectOptions=b.cloneSelectOptions.filter((e=>l.test(e.label)))}),500)}else b.selectOptions=b.cloneSelectOptions},formatDateToCode(e,l){let a=new Date(1970,1,1).getTime(),t=(p(e)-a)/864e5+141459;b.clonePlayerData[l]=parseInt(t)},handleSelectVisible(e){e||(b.selectOptions=b.cloneSelectOptions)},handleTraitChange(e,l){if("traitArr1"===l||"traitArr2"===l){if(e.includes(0))return"traitArr1"===l?b.clonePlayerData.trait1=0:b.clonePlayerData.trait2=0,void(b.clonePlayerData[l]=e.filter((e=>0===e)));let a=0;for(let l=0;l<e.length;l++)a+=e[l];"traitArr1"===l?b.clonePlayerData.trait1=a:b.clonePlayerData.trait2=a}},getPlayerNameData(){i.data.playernames&&(i.data.playernames.forEach((e=>{b.selectOptions.push({label:e.name,value:parseInt(e.nameid)})})),b.cloneSelectOptions=JSON.parse(JSON.stringify(b.selectOptions)))},getPlayerNationData(){i.data.nations&&i.data.nations.forEach((e=>{""!==e.nationname.trim()&&b.nationOptions.push({label:e.nationname,value:parseInt(e.nationid)})}))},getPlayerData(){const e=d.$route.query.playerid;if(b.playerData=i.data.players&&i.data.players.find((l=>l.playerid==e)),!b.playerData)return b.isNotFound=!0,void d.$message.warning(`${d.$t("message.notfoundplayer")}`);b.clonePlayerData={},Object.keys(b.playerData).forEach((e=>{if("teamplayerlinks"!==e)if("trait1"!==e&&"trait2"!==e||("trait1"===e?b.clonePlayerData.traitArr1=c.getPlayerTrait.value(1,b.playerData[e]):b.clonePlayerData.traitArr2=c.getPlayerTrait.value(2,b.playerData[e])),"playerjointeamdate"===e||"birthdate"===e){let l=c.getPlayerCodeToDate.value(b.playerData[e]),a=e+"1";b.clonePlayerData[a]=y(l),b.clonePlayerData[e]=parseInt(b.playerData[e])}else b.clonePlayerData[e]="contractvaliduntil"===e?b.playerData[e]:parseInt(b.playerData[e])}))},handleSavedb(){b.saveloading=!0;const e=JSON.parse(JSON.stringify(b.clonePlayerData)),{playerjointeamdate1:l,birthdate1:a,traitArr1:n,traitArr2:s}=e,d=((e,l)=>{var a={};for(var n in e)o.call(e,n)&&l.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&t)for(var n of t(e))l.indexOf(n)<0&&r.call(e,n)&&(a[n]=e[n]);return a})(e,["playerjointeamdate1","birthdate1","traitArr1","traitArr2"]);i.saveData("players","playerid",d),b.saveloading=!1},handleDelete(){if(i.deleteData("players",["playerid",b.clonePlayerData.playerid]))return d.$message.success(d.$t("message.deleteSucceeded")),void d.$router.back();d.$message.error(d.$t("message.deleteFailed"))}};return v((()=>{setTimeout((()=>{g.getPlayerNationData(),g.getPlayerNameData(),g.getPlayerData();const e=document.querySelector(".scrollbar");e&&e.scrollTo(0,0)}),20)})),s((h=s(s({},D(b)),g),l(h,a({editSpaceStore:i}))),c);var h}}),T={class:"full-layout flex-column-center scrollbar routerview",style:{"overflow-y":"auto"}},N={class:"flex-between full-w edit-header"},M={class:"flex-end",style:{"margin-left":"10px"}},L={class:"player-box full-layout"},I={class:"flex-between flex-warp"},E={class:"flex-start",style:{"align-items":"flex-end"}},F={class:"player-avatar"},J={class:"image-slot"},q=["src"],z={class:"image-slot"},B=["src"],R={class:"flex-column-end player-info"},G={class:"player-name text-left"},H={class:"flex-start"},K=["src"],Q={class:"player-formation"},W={style:{"margin-left":"5px","min-width":"35px"}},X={style:{"margin-left":"2px"}},Z={style:{"margin-left":"5px"}},ee={style:{"margin-left":"5px"}},le={class:"flex-between player-team"},ae={class:"team-name"},te=["src"],oe={class:"team-position margin-1"},re={class:"team-kitnumber margin-1"},ne={class:"tab-1"},se={style:{margin:"20px 0"}},ie={class:"tab-1"},de={style:{margin:"20px 0"}},ce={class:"tab-1"},me={style:{margin:"20px 0"}},ue={class:"flex-between full-h"},pe={style:{float:"right"}},ye={class:"tab-1"},be={style:{margin:"20px 0"}},ge={class:"flex-between full-h"},fe={style:{float:"right"}},ve={class:"tab-1"},De={style:{margin:"20px 0"}},he={class:"flex-between full-h"},Ve={style:{float:"right"}},Pe={class:"tab-1"},$e={style:{margin:"20px 0"}},xe={class:"flex-start full-h"};var ke=b(Y,[["render",function(e,l,a,t,o,r){const n=O("ArrowLeftBold"),s=O("el-icon"),m=O("el-button"),u=O("el-popconfirm"),p=O("el-skeleton"),y=O("el-empty"),b=O("el-image"),g=O("el-avatar"),f=O("el-select-v2"),v=O("el-form-item"),D=O("el-input-number"),A=O("el-date-picker"),Y=O("el-rate"),ke=O("el-switch"),_e=O("el-form"),Ue=O("el-slider"),we=O("el-option"),Oe=O("el-select");return j(),h("div",T,[e.editSpaceStore.isUpload?(j(),h(V,{key:0},[P("div",N,[$(s,{class:"back-icon",onClick:l[0]||(l[0]=l=>e.$router.go(-1))},{default:x((()=>[$(n)])),_:1}),P("div",M,[$(m,{type:"success",onClick:e.handleSavedb,loading:e.saveloading},{default:x((()=>[C(_(e.$t("message.save")),1)])),_:1},8,["onClick","loading"]),$(u,{title:e.$t("message.deleteInfo"),onConfirm:e.handleDelete},{reference:x((()=>[$(m,{type:"primary",style:{"margin-left":"10px"}},{default:x((()=>[C(_(e.$t("message.delete")),1)])),_:1})])),_:1},8,["title","onConfirm"])])]),P("div",L,[e.playerData||e.isNotFound?!e.playerData&&e.isNotFound?(j(),k(y,{key:1,description:e.$t("message.notfoundplayer")},null,8,["description"])):(j(),h(V,{key:2},[P("div",I,[P("div",E,[P("div",F,[$(b,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(e.playerData.playerid,120),fit:"cover"},{placeholder:x((()=>[P("div",J,[P("img",{src:c,style:{"object-fit":"cover"}},null,8,q)])])),error:x((()=>[P("div",z,[P("img",{src:c,style:{"object-fit":"cover"}},null,8,B)])])),_:1},8,["src"])]),P("div",R,[P("p",G,_(e.getPlayerName(e.playerData.firstnameid,e.playerData.lastnameid,e.playerData.commonnameid)+`  (${e.playerData.playerid})`),1),P("div",H,[$(g,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(e.playerData.nationality),onError:e=>!0},{default:x((()=>[P("img",{src:d},null,8,K)])),_:1},8,["src"]),P("span",Q,_(e.getPlayerPreferredPosition(e.playerData.preferredposition1,e.playerData.preferredposition2)),1),P("span",W,_(e.getPlayerAge(e.playerData.birthdate)+e.$t("message.age")),1),P("span",X," ("+_(e.getPlayerCodeToDate(e.playerData.birthdate))+") ",1),P("span",Z,_(e.playerData.height)+"cm ",1),P("span",ee,_(e.playerData.weight)+"kg ",1)])])]),P("div",le,[(j(!0),h(V,null,U(e.getPlayerTeam(e.playerData.playerid),(l=>(j(),h("div",{class:"flex-column-start team-box",key:l.artificialkey},[P("p",ae,_(e.getPlayerTeamName(l.teamid)),1),$(g,{shape:"square",size:60,fit:"cover",class:"margin-1",style:{background:"transparent"},src:e.getTeamAvatar(l.teamid,60),onError:e=>!0},{default:x((()=>[P("img",{src:i},null,8,te)])),_:2},1032,["src"]),P("p",oe,[C(_(e.$t("message.position"))+" ",1),P("span",null,_(e.getPlayerPosition(l.position)),1)]),P("p",re,[C(_(e.$t("message.kitNumber"))+" ",1),P("span",null,_(l.jerseynumber),1)])])))),128))])]),e.clonePlayerData&&e.clonePlayerData.playerid?(j(),h(V,{key:0},[P("div",ne,_(e.$t("message.baseData")),1),P("div",se,[$(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:x((()=>[$(v,{label:e.$t("message.firstname")},{default:x((()=>[$(f,{modelValue:e.clonePlayerData.firstnameid,"onUpdate:modelValue":l[1]||(l[1]=l=>e.clonePlayerData.firstnameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),$(v,{label:e.$t("message.lastname")},{default:x((()=>[$(f,{modelValue:e.clonePlayerData.lastnameid,"onUpdate:modelValue":l[2]||(l[2]=l=>e.clonePlayerData.lastnameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),$(v,{label:e.$t("message.commonname")},{default:x((()=>[$(f,{modelValue:e.clonePlayerData.commonnameid,"onUpdate:modelValue":l[3]||(l[3]=l=>e.clonePlayerData.commonnameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),$(v,{label:e.$t("message.playerjerseyname")},{default:x((()=>[$(f,{modelValue:e.clonePlayerData.playerjerseynameid,"onUpdate:modelValue":l[4]||(l[4]=l=>e.clonePlayerData.playerjerseynameid=l),filterable:"",options:e.selectOptions,onVisibleChange:e.handleSelectVisible,remote:"","remote-method":e.remoteMethod,loading:e.selectLoading,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onVisibleChange","remote-method","loading","placeholder"])])),_:1},8,["label"]),$(v,{label:e.$t("message.height")},{default:x((()=>[$(D,{modelValue:e.clonePlayerData.height,"onUpdate:modelValue":l[5]||(l[5]=l=>e.clonePlayerData.height=l),min:150,max:215,"step-strictly":""},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.weight")},{default:x((()=>[$(D,{modelValue:e.clonePlayerData.weight,"onUpdate:modelValue":l[6]||(l[6]=l=>e.clonePlayerData.weight=l),min:50,max:115,"step-strictly":""},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.birthdate")},{default:x((()=>[$(A,{modelValue:e.clonePlayerData.birthdate1,"onUpdate:modelValue":l[7]||(l[7]=l=>e.clonePlayerData.birthdate1=l),type:"date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD",onChange:l[8]||(l[8]=l=>e.formatDateToCode(l,"birthdate")),clearable:!1},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.nationality")},{default:x((()=>[$(f,{modelValue:e.clonePlayerData.nationality,"onUpdate:modelValue":l[9]||(l[9]=l=>e.clonePlayerData.nationality=l),options:e.nationOptions,filterable:"",clearable:!1,placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","placeholder"])])),_:1},8,["label"]),$(v,{label:e.$t("message.internationalrep")},{default:x((()=>[$(Y,{modelValue:e.clonePlayerData.internationalrep,"onUpdate:modelValue":l[10]||(l[10]=l=>e.clonePlayerData.internationalrep=l)},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.isretiring")},{default:x((()=>[$(ke,{modelValue:e.clonePlayerData.isretiring,"onUpdate:modelValue":l[11]||(l[11]=l=>e.clonePlayerData.isretiring=l),"active-value":1,"inactive-value":0,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","active-text","inactive-text"])])),_:1},8,["label"]),$(v,{label:e.$t("message.playerjointeamdate")},{default:x((()=>[$(A,{modelValue:e.clonePlayerData.playerjointeamdate1,"onUpdate:modelValue":l[12]||(l[12]=l=>e.clonePlayerData.playerjointeamdate1=l),type:"date",format:"YYYY/MM/DD","value-format":"YYYY-MM-DD",onChange:l[13]||(l[13]=l=>e.formatDateToCode(l,"playerjointeamdate")),clearable:!1},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.contractvaliduntil")},{default:x((()=>[$(A,{modelValue:e.clonePlayerData.contractvaliduntil,"onUpdate:modelValue":l[14]||(l[14]=l=>e.clonePlayerData.contractvaliduntil=l),"value-format":"YYYY",type:"year",clearable:!1},null,8,["modelValue"])])),_:1},8,["label"])])),_:1},8,["model"])]),P("div",ie,_(e.$t("message.playerAttribute")),1),P("div",de,[$(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:x((()=>[(j(!0),h(V,null,U(e.$config.playerAttribute,(l=>(j(),k(v,{key:l,label:e.$t(`message.${l}`)},{default:x((()=>[$(Ue,{modelValue:e.clonePlayerData[l],"onUpdate:modelValue":a=>e.clonePlayerData[l]=a,min:1,max:99,step:1},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1032,["label"])))),128)),$(v,{label:e.$t("message.weakfootabilitytypecode")},{default:x((()=>[$(Y,{modelValue:e.clonePlayerData.weakfootabilitytypecode,"onUpdate:modelValue":l[15]||(l[15]=l=>e.clonePlayerData.weakfootabilitytypecode=l)},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.skillmoves")},{default:x((()=>[$(Y,{modelValue:e.clonePlayerData.skillmoves,"onUpdate:modelValue":l[16]||(l[16]=l=>e.clonePlayerData.skillmoves=l)},null,8,["modelValue"])])),_:1},8,["label"]),$(v,{label:e.$t("message.attackingworkrat")},{default:x((()=>[$(Oe,{modelValue:e.clonePlayerData.attackingworkrate,"onUpdate:modelValue":l[17]||(l[17]=l=>e.clonePlayerData.attackingworkrate=l),placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(e.$config.workrateList,(l=>(j(),k(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"]),$(v,{label:e.$t("message.defensiveworkrate")},{default:x((()=>[$(Oe,{modelValue:e.clonePlayerData.defensiveworkrate,"onUpdate:modelValue":l[18]||(l[18]=l=>e.clonePlayerData.defensiveworkrate=l),placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(e.$config.workrateList,(l=>(j(),k(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"])])),_:1},8,["label"])])),_:1},8,["model"])]),P("div",ce,_(e.$t("message.playerAppearance")),1),P("div",me,[$(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:x((()=>[(j(!0),h(V,null,U(e.$config.playerAppearance,(l=>(j(),k(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:x((()=>["number"===l.type?(j(),k(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(j(),k(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(e=>(j(),k(we,{key:e.value,label:e.label,value:e.value},{default:x((()=>[P("div",ue,[P("span",{style:S({backgroundColor:e.label}),class:"select-color"},null,4),P("span",pe,_(e.label),1)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(j(),k(ke,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):w("",!0):(j(),k(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(l=>(j(),k(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])]),P("div",ye,_(e.$t("message.playerAccessories")),1),P("div",be,[$(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:x((()=>[(j(!0),h(V,null,U(e.$config.playerAccessories,(l=>(j(),k(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:x((()=>["number"===l.type?(j(),k(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(j(),k(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(e=>(j(),k(we,{key:e.value,label:e.label,value:e.value},{default:x((()=>[P("div",ge,[P("span",{style:S({backgroundColor:e.label}),class:"select-color"},null,4),P("span",fe,_(e.label),1)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(j(),k(ke,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):w("",!0):(j(),k(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(l=>(j(),k(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])]),P("div",ve,_(e.$t("message.playerTraits")),1),P("div",De,[$(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:x((()=>[(j(!0),h(V,null,U(e.$config.playerTraits,(l=>(j(),k(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:x((()=>["number"===l.type?(j(),k(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(j(),k(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(e=>(j(),k(we,{key:e.value,label:e.label,value:e.value},{default:x((()=>[P("div",he,[P("span",{style:S({backgroundColor:e.label}),class:"select-color"},null,4),P("span",Ve,_(e.label),1)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(j(),k(ke,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):w("",!0):(j(),k(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,"collapse-tags":l.multiple,"collapse-tags-tooltip":l.multiple,"max-collapse-tags":5,clearable:l.clearable,onChange:a=>e.handleTraitChange(a,l.label),placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(l=>(j(),k(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","collapse-tags","collapse-tags-tooltip","clearable","onChange","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])]),P("div",Pe,_(e.$t("message.other")),1),P("div",$e,[$(_e,{inline:!0,model:e.clonePlayerData,class:"flex-start flex-warp"},{default:x((()=>[(j(!0),h(V,null,U(e.$config.playerOtherData,(l=>(j(),k(v,{key:l.label,label:e.$t(`message.${l.label}`)},{default:x((()=>["number"===l.type?(j(),k(D,{key:0,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,min:l.min,max:l.max},null,8,["modelValue","onUpdate:modelValue","min","max"])):"select"!==l.type||l.iscustom?"select"===l.type&&l.iscustom?(j(),k(Oe,{key:2,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(e=>(j(),k(we,{key:e.value,label:e.label,value:e.value},{default:x((()=>[P("div",xe,[P("span",{style:S({backgroundColor:e.label}),class:"select-color"},null,4)])])),_:2},1032,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"])):"switch"===l.type?(j(),k(ke,{key:3,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,"active-value":l.activeValue,"inactive-value":l.inactiveValue,"active-text":e.$t("message.yes"),"inactive-text":e.$t("message.no")},null,8,["modelValue","onUpdate:modelValue","active-value","inactive-value","active-text","inactive-text"])):w("",!0):(j(),k(Oe,{key:1,modelValue:e.clonePlayerData[l.label],"onUpdate:modelValue":a=>e.clonePlayerData[l.label]=a,multiple:l.multiple,placeholder:e.$t("message.selectPlaceholder")},{default:x((()=>[(j(!0),h(V,null,U(l.data,(l=>(j(),k(we,{key:l.value,label:e.$t(`message.${l.label}`),value:l.value},null,8,["label","value"])))),128))])),_:2},1032,["modelValue","onUpdate:modelValue","multiple","placeholder"]))])),_:2},1032,["label"])))),128))])),_:1},8,["model"])])],64)):w("",!0)],64)):(j(),k(p,{key:0,rows:20,animated:""}))])],64)):(j(),k(y,{key:1,description:e.$t("message.errorInfo")},null,8,["description"]))])}],["__scopeId","data-v-ffa98b58"]]);export{ke as default};
