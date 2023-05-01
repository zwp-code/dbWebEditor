var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,a)=>{for(var l in a||(a={}))r.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&i(e,l,a[l]);return e},o=(e,t)=>a(e,l(t));import{_ as c}from"./notfound-fa5cb960.js";import{_ as d}from"./notflag-60268a62.js";import{_ as u}from"./team_notfound-5b1be68a.js";import{d as p,_ as m,o as y,e as f,b as g,r as v,k as h,l as b,t as D,L as x,i as w,q as k,g as C,a as P,h as T,f as S,w as $,J as _,I as N,c as V,M as O,N as j,j as F,F as E,p as L,O as M,P as q,Q as B,R as A,G as z,A as J}from"./index-3f54ad2e.js";import{u as I}from"./editSpace-7ff4689f.js";import{t as R,u as U}from"./teamSelector-1e550c0c.js";import{u as W}from"./usePlayers-73c7bc55.js";import{_ as X}from"./plugin-vue_export-helper-46f75680.js";import{c as Y,d as H}from"./util-58ae84c9.js";const G=p({name:"ArrowRightBold"}),Q={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},K=[g("path",{fill:"currentColor",d:"M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"},null,-1)];var Z=m(G,[["render",function(e,a,l,t,r,s){return y(),f("svg",Q,K)}]]);const ee=p({name:"Marquees",components:{},props:{},setup(e,a){const{proxy:l}=C();let t=v({needToScroll:!1,text:"",_checkTimer:null}),r={check(){l.$nextTick((()=>{let e=r.isOverflow();t.needToScroll=e}))},isOverflow(){let e=l.$refs.outer,a=l.$refs.inner,t=r.getWidth(e);return r.getWidth(a)>t},getWidth(e){let{width:a}=e.getBoundingClientRect();return a},startCheck(){t._checkTimer=setInterval(r.check,1e3),r.check()},stopCheck(){clearInterval(t._checkTimer)}};return h((()=>{r.startCheck()})),b((()=>{r.stopCheck()})),n(n({},D(t)),r)}}),ae={class:"scrollText",ref:"outer"},le={class:"st-section",ref:"inner"},te={key:0,class:"st-section"};var re=X(ee,[["render",function(e,a,l,t,r,s){return y(),f("div",ae,[g("div",{class:k(["st-inner",{"st-scrolling":e.needToScroll}])},[g("span",le,[x(e.$slots,"default",{},void 0,!0)],512),e.needToScroll?(y(),f("span",te,[x(e.$slots,"default",{},void 0,!0)])):w("",!0)],2)],512)}],["__scopeId","data-v-25aae93a"]]);var se=X(p({name:"playerMenu",props:{visible:{type:Boolean,default:!1},left:{type:Number,default:0},top:{type:Number,default:0},contextData:{type:Object,default:null},isEdit:{type:Boolean,default:!0}},components:{},emits:["updateNumber","delete"],setup(e,a){const{proxy:l}=C();let t=v({timer:null,newTop:e.top,newLeft:e.left}),r={handleTransfer(){},handleCopy(){Y(e.contextData.value)},handleEditNumber(){let l={jerseynumber:e.contextData.lineupData.jerseynumber,id:e.contextData.value};a.emit("updateNumber",l)},handleEdit(){l.$router.push({name:"playerEdit",query:{playerid:e.contextData.value}})},handleDelete(){a.emit("delete",e.contextData.value)}};return h((()=>{let a=document.body.offsetHeight,l=document.body.offsetWidth,r=document.querySelector("#app-contextMenu");e.top+r.offsetHeight>a?t.newTop=a-r.offsetHeight:e.left+r.offsetWidth>l&&(t.newLeft=l-70-r.offsetWidth)})),n(n({},D(t)),r)}}),[["render",function(e,a,l,t,r,s){const i=P("CopyDocument"),n=P("el-icon"),o=P("EditPen");P("Edit");const c=P("Delete");return e.visible?(y(),f("ul",{key:0,id:"app-contextMenu",style:_({left:e.newLeft+"px",top:e.newTop+"px"}),class:"contextmenu"},[g("li",{class:"flex-between",onClick:a[0]||(a[0]=(...a)=>e.handleCopy&&e.handleCopy(...a))},[g("span",null,T(e.$t("message.copyid")),1),S(n,null,{default:$((()=>[S(i)])),_:1})]),e.isEdit?(y(),f("li",{key:0,class:"flex-between",onClick:a[1]||(a[1]=(...a)=>e.handleEditNumber&&e.handleEditNumber(...a))},[g("span",null,T(e.$t("message.editnumber")),1),S(n,null,{default:$((()=>[S(o)])),_:1})])):w("",!0),w("",!0),g("li",{class:"flex-between",onClick:a[3]||(a[3]=(...a)=>e.handleDelete&&e.handleDelete(...a))},[g("span",null,T(e.$t("message.deleteplayer")),1),S(n,null,{default:$((()=>[S(c)])),_:1})])],4)):w("",!0)}],["__scopeId","data-v-776baa6f"]]);const ie=p({name:"playerSelector",components:{},props:{modelValue:{type:String,default:""},filterable:{type:Boolean,default:!0},remote:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,a){const l=I();W();let t=v({selectOptions:[],valueName:"",selectLoading:!1,cloneSelectOptions:[]}),r={remoteMethod(e){if(""!==e){let l;t.selectLoading=!0,l&&clearTimeout(l),l=setTimeout((()=>{t.selectLoading=!1,!isNaN(parseFloat(e))&&isFinite(e)&&(t.selectOptions=t.cloneSelectOptions.filter((a=>a.label==e)))}),500),a.emit("update:modelValue",t.valueName)}else t.selectOptions=[]},handleChange(e){a.emit("update:modelValue",e),a.emit("change",e)}};return N((()=>e.modelValue),(a=>{t.valueName=e.modelValue})),h((()=>{t.cloneSelectOptions=l.getAllPlayerList(),t.valueName=e.modelValue})),n(n(n({},D(t)),r),W())}}),ne={style:{"margin-right":"8px"}},oe={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}};var ce=X(ie,[["render",function(e,a,l,t,r,s){const i=P("el-select-v2");return y(),V(i,{modelValue:e.valueName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.valueName=a),filterable:e.filterable,remote:e.remote,multiple:e.multiple,clearable:e.clearable,disabled:e.disabled,options:e.selectOptions,placeholder:e.$t("message.selectPlayerPlaceholder"),onChange:e.handleChange,"remote-method":e.remoteMethod,"value-key":"value.playerid",loading:e.selectLoading},{default:$((({item:a})=>[g("span",ne,T(a.label),1),g("span",oe,T(e.getPlayerName(a.value.firstnameid,a.value.lastnameid,a.value.commonnameid)),1)])),_:1},8,["modelValue","filterable","remote","multiple","clearable","disabled","options","placeholder","onChange","remote-method","loading"])}]]);const de=p({name:"TransferDialog",components:{teamSelector:R,playerMenu:se,Marquees:re,playerSelector:ce},props:{visible:{type:Boolean,default:!1}},emits:["close","save"],setup(e,a){const{proxy:l}=C(),t=I(),r=U(),s=W();let i=v({dialogVisible:e.visible,selectTeamData:"",selectPlayerData:"",lineupData:[],pendingTransferData:[],activeData:[],menuVisible:!1,contextData:null,left:0,top:0,loading:!1,filterOptions:[{label:"teams",value:"1"},{label:"players",value:"2"}],filterType:""}),c={handleDelete(e){i.pendingTransferData.forEach(((a,l)=>{a.value==e&&i.pendingTransferData.splice(l,1)}))},handleClose(){i.dialogVisible=!1,a.emit("close")},handleConfirm(){a.emit("save",i.pendingTransferData)},handleLoadLineup1(){if(i.selectTeamData==l.$route.query.teamid)return i.loading=!1,l.$message.warning(l.$t("message.transferError1"));i.activeData.length=0,i.lineupData.length=0,t.data.teamplayerlinks?(t.data.teamplayerlinks.forEach((e=>{if(e.teamid==i.selectTeamData){let a=t.data.players.find((a=>a.playerid==e.playerid));if(a){let l=s.getPlayerName.value(a.firstnameid,a.lastnameid,a.commonnameid);i.lineupData.push({label:l,value:e.playerid,playerdata:a,lineupData:e})}}})),i.loading=!1):l.$message.warning(`${l.$t("message.notfound")}`)},handleLoadLineup2(){i.activeData.length=0,i.lineupData.length=0,t.data.teamplayerlinks?(t.data.teamplayerlinks.forEach((e=>{if(e.playerid==i.selectPlayerData){let a=t.data.players.find((a=>a.playerid==e.playerid));if(a){let l=s.getPlayerName.value(a.firstnameid,a.lastnameid,a.commonnameid);i.lineupData.push({label:l,value:e.playerid,playerdata:a,lineupData:e})}}})),i.loading=!1):l.$message.warning(`${l.$t("message.notfound")}`)},handleClick(e){for(let a=0;a<i.activeData.length;a++)if(i.activeData[a].value==e.value&&i.activeData[a].lineupData.teamid==e.lineupData.teamid)return void i.activeData.splice(a,1);i.activeData.push(e)},handleToRight(){for(let a=0;a<i.activeData.length;a++)if(i.activeData[a].lineupData.teamid==l.$route.query.teamid)return l.$message.warning(l.$t("message.transferError2"));let e=new Set([...i.pendingTransferData,...i.activeData]);i.pendingTransferData=Array.from(e),i.activeData=[]},handleMenu(e,a,l=null){i.menuVisible=!1,setTimeout((()=>{i[a]=!0,i.left=e.pageX,i.top=e.pageY,i.contextData=l}),100)},closeMenu(){i.menuVisible=!1},handleTeamChange(){""!==i.selectTeamData&&(i.loading=!0,setTimeout((()=>{c.handleLoadLineup1()}),200))},handlePlayerChange(){""!==i.selectPlayerData&&(i.loading=!0,setTimeout((()=>{c.handleLoadLineup2()}),200))}};return h((()=>{document.addEventListener("click",c.closeMenu)})),b((()=>{document.removeEventListener("click",c.closeMenu)})),o(n(n(n(n({},D(i)),c),r),s),{ArrowRightBold:Z,ArrowLeftBold:O})}}),ue={class:"flex-start",style:{"margin-bottom":"10px"}},pe={class:"flex-center"},me={class:"scrollAuto scrollbar lineup-box flex-start flex-warp"},ye=["onClick","title"],fe={class:"flex-start full-w"},ge={class:"player-ability"},ve={class:"player-position"},he={class:"flex-center"},be={class:"flex-column-center"},De=["src"],xe=["src"],we={class:"player-avatar"},ke={class:"image-slot"},Ce=["src"],Pe={class:"image-slot"},Te=["src"],Se={class:"player-name-1"},$e={class:"flex-column-center",style:{width:"100px"}},_e={class:"scrollAuto scrollbar lineup-box flex-start flex-warp"},Ne=["onContextmenu","title"],Ve={class:"flex-start full-w"},Oe={class:"player-ability"},je={class:"player-position"},Fe={class:"flex-center"},Ee={class:"flex-column-center"},Le=["src"],Me=["src"],qe={class:"player-avatar"},Be={class:"image-slot"},Ae=["src"],ze={class:"image-slot"},Je=["src"],Ie={class:"player-name-1"},Re={class:"dialog-footer"};var Ue=X(de,[["render",function(e,a,l,t,r,s){const i=P("el-option"),n=P("el-select"),o=P("teamSelector"),p=P("playerSelector"),m=P("el-avatar"),v=P("el-tooltip"),h=P("el-image"),b=P("Marquees"),D=P("el-button"),x=P("el-dialog"),C=P("playerMenu"),_=j("loading");return y(),f(E,null,[S(x,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[4]||(a[4]=a=>e.dialogVisible=a),title:e.$t("message.transfer"),"before-close":e.handleClose,top:"5vh","custom-class":"z-dialog",center:"",width:"80%"},{footer:$((()=>[g("span",Re,[S(D,{onClick:e.handleClose},{default:$((()=>[F(T(e.$t("message.cancel")),1)])),_:1},8,["onClick"]),S(D,{type:"primary",onClick:e.handleConfirm},{default:$((()=>[F(T(e.$t("message.confirm")),1)])),_:1},8,["onClick"])])])),default:$((()=>[g("div",null,[g("div",ue,[S(n,{modelValue:e.filterType,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filterType=a),placeholder:e.$t("message.filter"),clearable:"",onChange:a[1]||(a[1]=a=>{e.selectTeamData="",e.selectPlayerData=""}),style:{width:"200px","margin-right":"10px"}},{default:$((()=>[(y(!0),f(E,null,L(e.filterOptions,(a=>(y(),V(i,{key:a.value,label:e.$t(`message.${a.label}`),value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"]),M(S(o,{modelValue:e.selectTeamData,"onUpdate:modelValue":a[2]||(a[2]=a=>e.selectTeamData=a),onChange:e.handleTeamChange},null,8,["modelValue","onChange"]),[[q,"1"===e.filterType]]),M(S(p,{modelValue:e.selectPlayerData,"onUpdate:modelValue":a[3]||(a[3]=a=>e.selectPlayerData=a),onChange:e.handlePlayerChange},null,8,["modelValue","onChange"]),[[q,"2"===e.filterType]])]),g("div",pe,[M((y(),f("div",me,[(y(!0),f(E,null,L(e.lineupData,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.activeData.length&&e.activeData.find((e=>e.value==a.value&&e.lineupData.teamid==a.lineupData.teamid))}]),onClick:l=>e.handleClick(a),title:a.label+"("+a.value+")",key:a.value},[g("div",fe,[g("span",ge,T(a.playerdata.overallrating),1),g("div",ve,T(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),g("div",he,[g("div",be,[S(v,{effect:"dark",content:e.getTeamName(a.lineupData.teamid),placement:"top"},{default:$((()=>[S(m,{shape:"square",size:24,fit:"cover",src:e.getTeamAvatar(a.lineupData.teamid,60),onError:e=>!0},{default:$((()=>[g("img",{src:u},null,8,De)])),_:2},1032,["src"])])),_:2},1032,["content"]),S(m,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,xe)])),_:2},1032,["src"])]),g("div",we,[S(h,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:$((()=>[g("div",ke,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Ce)])])),error:$((()=>[g("div",Pe,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Te)])])),_:2},1032,["src"])])]),g("div",Se,[S(b,null,{default:$((()=>[F(T(a.label),1)])),_:2},1024)])],10,ye)))),128))])),[[_,e.loading]]),g("div",$e,[S(D,{type:"primary",icon:e.ArrowRightBold,onClick:e.handleToRight},null,8,["icon","onClick"])]),g("div",_e,[(y(!0),f(E,null,L(e.pendingTransferData,(a=>(y(),f("div",{class:"player-card flex-column-center",onContextmenu:B((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),title:a.label+"("+a.value+")",key:a.value},[g("div",Ve,[g("span",Oe,T(a.playerdata.overallrating),1),g("div",je,T(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),g("div",Fe,[g("div",Ee,[S(v,{effect:"dark",content:e.getTeamName(a.lineupData.teamid),placement:"top"},{default:$((()=>[S(m,{shape:"square",size:24,fit:"cover",src:e.getTeamAvatar(a.lineupData.teamid,60),onError:e=>!0},{default:$((()=>[g("img",{src:u},null,8,Le)])),_:2},1032,["src"])])),_:2},1032,["content"]),S(m,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,Me)])),_:2},1032,["src"])]),g("div",qe,[S(h,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:$((()=>[g("div",Be,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Ae)])])),error:$((()=>[g("div",ze,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Je)])])),_:2},1032,["src"])])]),g("div",Ie,[S(b,null,{default:$((()=>[F(T(a.label),1)])),_:2},1024)])],40,Ne)))),128))])])])])),_:1},8,["modelValue","title","before-close"]),e.menuVisible?(y(),V(C,{key:0,visible:e.menuVisible,left:e.left,top:e.top,isEdit:!1,onDelete:e.handleDelete,contextData:e.contextData},null,8,["visible","left","top","onDelete","contextData"])):w("",!0)],64)}],["__scopeId","data-v-136a0bf6"]]);const We=p({name:"SaveState",components:{},props:{state:{type:Object,default:function(){return{text:"saving",status:"loading"}}}},setup(e,a){let l=v({});return n(n({},D(l)),{})}}),Xe={class:"save-box flex-center"};var Ye=X(We,[["render",function(e,a,l,t,r,s){const i=P("Loading"),n=P("el-icon"),o=P("CircleCheck"),c=P("CircleClose");return y(),f("div",Xe,[g("p",null,T(e.$t(`message.${e.state.text}`)),1),"loading"===e.state.status?(y(),V(n,{key:0,class:"is-loading"},{default:$((()=>[S(i)])),_:1})):"success"===e.state.status?(y(),V(n,{key:1},{default:$((()=>[S(o)])),_:1})):"error"===e.state.status?(y(),V(n,{key:2},{default:$((()=>[S(c)])),_:1})):w("",!0)])}],["__scopeId","data-v-ad6064ea"]]);const He=p({name:"TransferFreeDialog",components:{playerSelector:ce},props:{visible:{type:Boolean,default:!1},row:{type:Object,default:null}},emits:["close","save"],setup(e,a){const{proxy:l}=C(),t=I(),r=W();let s=v({dialogVisible:e.visible,selectPlayerData:{jerseynumber:"",position:"29",teamid:"",playerid:""},playerdata:{}}),i={handleClose(){s.dialogVisible=!1,a.emit("close")},async handleConfirm(){if(""==s.selectPlayerData.playerid||""==s.selectPlayerData.jerseynumber)return;s.selectPlayerData.teamid=l.$route.query.teamid;let e=[{label:r.getPlayerName.value(s.playerdata.firstnameid,s.playerdata.lastnameid,s.playerdata.commonnameid),value:s.playerdata.playerid,playerdata:s.playerdata,lineupData:n({},s.selectPlayerData)}];a.emit("save",e)}};return A((()=>{""!=s.selectPlayerData.playerid&&(s.playerdata=t.data.players.find((e=>e.playerid==s.selectPlayerData.playerid)))})),h((()=>{})),n(n(n(n({},D(s)),i),W()),U())}}),Ge={class:"flex-column-center"},Qe={class:"flex-center"},Ke={style:{"padding-right":"20px"}},Ze={class:"flex-center",style:{"margin-top":"20px"}},ea={style:{"padding-right":"8px"}},aa={key:0,class:"transfer-player-box"},la={class:"player-team"},ta={class:"image-slot"},ra=["src"],sa={class:"image-slot"},ia=["src"],na={class:"player-avatar"},oa={class:"image-slot"},ca=["src"],da={class:"image-slot"},ua=["src"],pa={class:"dialog-footer"};const ma=p({name:"TeamLineupEdit",components:{Marquees:re,playerMenu:se,TransferDialog:Ue,SaveState:Ye,TransferFreeDialog:X(He,[["render",function(e,a,l,t,r,s){const i=P("playerSelector"),n=P("el-input"),o=P("el-image"),d=P("el-button"),p=P("el-dialog");return y(),V(p,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[2]||(a[2]=a=>e.dialogVisible=a),title:e.$t("message.free"),"before-close":e.handleClose,"custom-class":"z-dialog",center:"",width:500},{footer:$((()=>[g("span",pa,[S(d,{onClick:e.handleClose},{default:$((()=>[F(T(e.$t("message.cancel")),1)])),_:1},8,["onClick"]),S(d,{type:"primary",onClick:e.handleConfirm},{default:$((()=>[F(T(e.$t("message.confirm")),1)])),_:1},8,["onClick"])])])),default:$((()=>[g("div",Ge,[g("div",Qe,[g("span",Ke,T(e.$t("message.playerids")),1),S(i,{modelValue:e.selectPlayerData.playerid,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectPlayerData.playerid=a),style:{width:"200px"}},null,8,["modelValue"])]),g("div",Ze,[g("span",ea,T(e.$t("message.kitNumber")),1),S(n,{modelValue:e.selectPlayerData.jerseynumber,"onUpdate:modelValue":a[1]||(a[1]=a=>e.selectPlayerData.jerseynumber=a),style:{width:"200px"},placeholder:e.$t("message.editNumber")},null,8,["modelValue","placeholder"])]),e.playerdata.playerid?(y(),f("div",aa,[g("div",la,[S(o,{style:{height:"100%",width:"100%"},lazy:"",src:e.getTeamAvatar(e.$route.query.teamid,120),fit:"cover"},{placeholder:$((()=>[g("div",ta,[g("img",{src:u,style:{"object-fit":"cover"}},null,8,ra)])])),error:$((()=>[g("div",sa,[g("img",{src:u,style:{"object-fit":"cover"}},null,8,ia)])])),_:1},8,["src"])]),g("div",na,[S(o,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(e.playerdata.playerid,120),fit:"cover"},{placeholder:$((()=>[g("div",oa,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,ca)])])),error:$((()=>[g("div",da,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,ua)])])),_:1},8,["src"])]),g("p",null,T(e.getPlayerName(e.playerdata.firstnameid,e.playerdata.lastnameid,e.playerdata.commonnameid)),1)])):w("",!0)])])),_:1},8,["modelValue","title","before-close"])}],["__scopeId","data-v-3e37d8bf"]])},props:{},setup(e,a){const l=I(),{proxy:t}=C(),r=U(),s=W();let i=v({lineupData:[],isNotFound:!1,isSwap:!1,transferPlayer:!1,addPlayer:!1,currentTeamFormation:{},selectOptions:[],cloneSelectOptions:[],startingLineups:[],teamFormationData:{},swapData:[],menuVisible:!1,left:0,top:0,contextData:null,savingState:{text:"saving",status:"loading"},autoSaveVisible:!1,timer:null,count:0,saveloading:!1}),c=z((()=>i.lineupData.slice(0,11))),d=z((()=>11===c.value.length?i.lineupData.slice(11,18):[])),u=z((()=>d.value.length>=7?i.lineupData.slice(18):[])),p={handleUpdateNumber(e){i.menuVisible=!1,J.prompt(t.$t("message.editNumber"),t.$t("message.edit"),{confirmButtonText:t.$t("message.confirm"),cancelButtonText:t.$t("message.cancel"),inputPattern:/^[0-9]*$/,inputValue:e.jerseynumber,inputErrorMessage:t.$t("message.inputError")}).then((({value:a})=>{i.lineupData.forEach((l=>{l.value==e.id&&(l.lineupData.jerseynumber=a)}))})).catch((e=>{}))},handleDelete(e){J.confirm(t.$t("message.isReleaseContract"),t.$t("message.warning"),{confirmButtonText:t.$t("message.confirm"),cancelButtonText:t.$t("message.cancel"),type:"warning"}).then((()=>{let a=i.lineupData.findIndex((a=>a.value==e));a>=0&&i.lineupData.splice(a,1);let l=i.swapData.findIndex((a=>a.value==e));l>=0&&i.swapData.splice(l,1),p.updateFormationModel()})).catch((()=>{})),i.menuVisible=!1},closeMenu(){i.menuVisible=!1},handleMenu(e,a,l=null){p.closeMenu(),setTimeout((()=>{i[a]=!0,i.left=e.pageX,i.top=e.pageY,i.contextData=l}),100)},getTeamPlayerLineup(){const e=t.$route.query.teamid;if(!l.data.teamplayerlinks)return void(i.isNotFound=!0);let a=l.data.teamplayerlinks.map((a=>{let t=null,r=null;a.teamid==e&&(t=l.data.players.find((e=>e.playerid==a.playerid)),r=a);let i=t?s.getPlayerName.value(t.firstnameid,t.lastnameid,t.commonnameid):"";return t?{label:i,value:a.playerid,playerdata:t,lineupData:r}:null}));i.lineupData=JSON.parse(JSON.stringify(a.filter(Boolean))),i.lineupData.length?p.updateFormationModel():i.isNotFound=!0},handleSave(){i.lineupData.length&&(i.timer&&clearTimeout(i.timer),i.saveloading=!0,i.autoSaveVisible=!0,i.timer=setTimeout((()=>{let e=[];JSON.parse(JSON.stringify(H(i.lineupData))).forEach((a=>{e.push(a.lineupData)}));let a=JSON.parse(JSON.stringify(r.getTeamRelativeFormation.value(i.currentTeamFormation.formationid)));a.teamid=t.$route.query.teamid,i.teamFormationData.teamid?a.formationid=i.teamFormationData.formationid:a.formationid=l.data.formations.length+1;const s=l.saveLineupData("teamplayerlinks",e,t.$route.query.teamid,a);i.savingState=s?{text:"saveSucceeded",status:"success"}:{text:"saveFailed",status:"error"},i.saveloading=!1,setTimeout((()=>{i.autoSaveVisible=!1,i.savingState={text:"saving",status:"loading"}}),1500)}),500))},handleChange(e){i.currentTeamFormation=JSON.parse(JSON.stringify(r.getTeamFormationById.value(e))),p.updateFormationModel()},updateFormationModel(){if("{}"===JSON.stringify(i.currentTeamFormation))return;let e=H(c.value),a=JSON.parse(JSON.stringify(r.getTeamRelativeFormation.value(i.currentTeamFormation.formationid)));e.forEach(((e,l)=>{e.lineupData.position=a[`position${l}`]})),i.startingLineups=e.map(((e,a)=>{let l=Number(e.lineupData.position);return n({offsetX:t.$config.formationPos[l].x,offsetY:t.$config.formationPos[l].y},e)}))},handleClick(e){for(let a=0;a<i.swapData.length;a++)if(i.swapData[a].value==e.value)return void i.swapData.splice(a,1);i.swapData.length>=2||i.swapData.push(e)},handleSwap(){if(!i.swapData.length)return;let e=i.swapData[0].lineupData.position;i.swapData[0].lineupData.position=i.swapData[1].lineupData.position,i.swapData[1].lineupData.position=e;let a=i.lineupData.findIndex((e=>e.value==i.swapData[0].value)),l=i.lineupData.findIndex((e=>e.value==i.swapData[1].value)),t=JSON.parse(JSON.stringify(i.lineupData));t[a]=t.splice(l,1,t[a])[0],i.lineupData=t,i.swapData.length=0,p.updateFormationModel()},handleTransfer(e){if(!e.length)return;e.forEach((e=>{e.lineupData.position="29"})),i.transferPlayer=!1,i.addPlayer=!1;let a=p.handleRemoveRepeat(e);i.lineupData.push(...a),i.lineupData.length>=11&&p.updateFormationModel()},handleRemoveRepeat(e){let a=[];return e.forEach((e=>{i.lineupData.find((a=>a.value==e.value))||a.push(e)})),a}};return h((()=>{i.currentTeamFormation=JSON.parse(JSON.stringify(r.getTeamFormation.value(t.$route.query.teamid,0))),i.teamFormationData=JSON.parse(JSON.stringify(r.getTeamFormation.value(t.$route.query.teamid,1))),i.selectOptions=l.getAllFormationList(),i.cloneSelectOptions=JSON.parse(JSON.stringify(i.selectOptions)),p.getTeamPlayerLineup(),document.addEventListener("keydown",(e=>{let a=e||window.event||arguments.callee.caller.arguments[0];(a&&13==a.keyCode||"Enter"==a.key)&&p.handleSwap()})),document.addEventListener("click",p.closeMenu)})),b((()=>{document.removeEventListener("keydown",(e=>{let a=e||window.event||arguments.callee.caller.arguments[0];(a&&13==a.keyCode||"Enter"==a.key)&&p.handleSwap()})),document.removeEventListener("click",p.closeMenu),i.timer&&clearTimeout(i.timer)})),A((()=>{i.lineupData.length&&(i.isNotFound=!1)})),o(n(n(o(n(n({},D(i)),p),{editSpaceStore:l}),r),s),{getStarting11Players:c,getSubPlayers:d,getResPlayers:u})}}),ya={class:"full-layout flex-column-center scrollbar routerview",style:{"overflow-y":"auto"}},fa={class:"flex-between full-w edit-header"},ga={class:"flex-end",style:{"margin-left":"10px"}},va={class:"player-box full-layout"},ha={class:"flex-between flex-warp"},ba={class:"flex-start",style:{"align-items":"flex-end"}},Da={class:"team-avatar"},xa={class:"image-slot"},wa=["src"],ka={class:"image-slot"},Ca=["src"],Pa={class:"flex-column-end player-info"},Ta={class:"player-name text-left"},Sa={class:"flex-start"},$a=["src"],_a={class:"player-formation"},Na={style:{"margin-left":"10px"}},Va={class:"flex-end select-box"},Oa={key:0,class:"flex-start flex-warp",style:{"margin-top":"20px","justify-content":"flex-start","align-items":"flex-start"}},ja={class:"field-large margin-1"},Fa=["src"],Ea=["title","onClick"],La={class:"flex-start full-w"},Ma={class:"player-ability"},qa={class:"player-position"},Ba={class:"flex-center"},Aa={class:"flex-column-center"},za=["src"],Ja={class:"player-number"},Ia={class:"player-avatar"},Ra={class:"image-slot"},Ua=["src"],Wa={class:"image-slot"},Xa=["src"],Ya={class:"player-name-1"},Ha={style:{flex:"1"}},Ga={class:"tab-1"},Qa={class:"flex-start flex-warp lineup-box starting11-box full-w margin-1 scrollAuto scrollbar"},Ka=["title","onClick","onContextmenu"],Za={class:"flex-start full-w"},el={class:"player-ability"},al={class:"player-position"},ll={class:"flex-center"},tl={class:"flex-column-center"},rl=["src"],sl={class:"player-number"},il={class:"player-avatar"},nl={class:"image-slot"},ol=["src"],cl={class:"image-slot"},dl=["src"],ul={class:"player-name-1"},pl={class:"full-w"},ml={class:"tab-1"},yl={class:"flex-start flex-warp lineup-box sub-box full-w margin-1"},fl=["onClick","onContextmenu","title"],gl={class:"flex-start full-w"},vl={class:"player-ability"},hl={class:"player-position"},bl={class:"flex-center"},Dl={class:"flex-column-center"},xl=["src"],wl={class:"player-number"},kl={class:"player-avatar"},Cl={class:"image-slot"},Pl=["src"],Tl={class:"image-slot"},Sl=["src"],$l={class:"player-name-1"},_l={class:"full-w"},Nl={class:"tab-1"},Vl={class:"flex-start flex-warp lineup-box res-box full-w margin-1"},Ol=["onClick","title","onContextmenu"],jl={class:"flex-start full-w"},Fl={class:"player-ability"},El={class:"player-position"},Ll={class:"flex-center"},Ml={class:"flex-column-center"},ql=["src"],Bl={class:"player-number"},Al={class:"player-avatar"},zl={class:"image-slot"},Jl=["src"],Il={class:"image-slot"},Rl=["src"],Ul={class:"player-name-1"};var Wl=X(ma,[["render",function(e,a,l,t,r,s){const i=P("ArrowLeftBold"),n=P("el-icon"),o=P("el-button"),p=P("el-skeleton"),m=P("el-empty"),v=P("el-image"),h=P("el-avatar"),b=P("el-select-v2"),D=P("Marquees"),x=P("playerMenu"),C=P("TransferDialog"),N=P("TransferFreeDialog"),O=P("SaveState");return y(),f("div",ya,[e.editSpaceStore.isUpload?(y(),f(E,{key:0},[g("div",fa,[S(n,{class:"back-icon",onClick:a[0]||(a[0]=a=>e.$router.go(-1))},{default:$((()=>[S(i)])),_:1}),g("div",ga,[2===e.swapData.length?(y(),V(o,{key:0,type:"primary",onClick:e.handleSwap},{default:$((()=>[F(T(e.$t("message.swap")),1)])),_:1},8,["onClick"])):w("",!0),S(o,{type:"warning",onClick:a[1]||(a[1]=a=>e.transferPlayer=!0)},{default:$((()=>[F(T(e.$t("message.transfer")),1)])),_:1}),S(o,{type:"danger",onClick:a[2]||(a[2]=a=>e.addPlayer=!0)},{default:$((()=>[F(T(e.$t("message.addPlayer")),1)])),_:1}),S(o,{type:"success",onClick:e.handleSave,loading:e.saveloading},{default:$((()=>[F(T(e.$t("message.save")),1)])),_:1},8,["onClick","loading"])])]),g("div",va,[e.lineupData.length||e.isNotFound?!e.lineupData.length&&e.isNotFound?(y(),V(m,{key:1,description:e.$t("message.notfound")},null,8,["description"])):(y(),f(E,{key:2},[g("div",ha,[g("div",ba,[g("div",Da,[S(v,{style:{height:"100%",width:"100%"},lazy:"",src:e.getTeamAvatar(e.$route.query.teamid,120),fit:"cover"},{placeholder:$((()=>[g("div",xa,[g("img",{src:u,style:{"object-fit":"cover"}},null,8,wa)])])),error:$((()=>[g("div",ka,[g("img",{src:u,style:{"object-fit":"cover"}},null,8,Ca)])])),_:1},8,["src"])]),g("div",Pa,[g("p",Ta,T(e.getTeamName(e.$route.query.teamid)),1),g("div",Sa,[S(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getTeamNationFlag(e.$route.query.teamid),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,$a)])),_:1},8,["src"]),g("span",_a,T(e.getTeamLeagueName(e.$route.query.teamid)),1),g("span",Na,"(球员人数) "+T(e.lineupData.length)+"人",1)])])]),g("div",Va,[S(b,{modelValue:e.currentTeamFormation.formationid,"onUpdate:modelValue":a[3]||(a[3]=a=>e.currentTeamFormation.formationid=a),filterable:"",options:e.selectOptions,onVisibleChange:a[4]||(a[4]=a=>e.selectOptions=e.cloneSelectOptions),onChange:e.handleChange,"value-key":"value.formationid",placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onChange","placeholder"])])]),e.lineupData&&e.lineupData.length>0?(y(),f("div",Oa,[g("div",ja,[g("img",{src:"/static/png/field-4e1fdc65.png"},null,8,Fa),(y(!0),f(E,null,L(e.startingLineups,(a=>(y(),f("div",{class:k(["player-card player-card-1 flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),style:_({left:a.offsetX+"%",bottom:a.offsetY+"%"}),title:a.label+"("+a.value+")",onClick:l=>e.handleClick(a),key:a.value},[g("div",La,[g("span",Ma,T(a.playerdata.overallrating),1),g("div",qa,T(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),g("div",Ba,[g("div",Aa,[S(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,za)])),_:2},1032,["src"]),g("p",Ja,T(a.lineupData.jerseynumber),1)]),g("div",Ia,[S(v,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:$((()=>[g("div",Ra,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Ua)])])),error:$((()=>[g("div",Wa,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Xa)])])),_:2},1032,["src"])])]),g("div",Ya,[S(D,null,{default:$((()=>[F(T(a.label),1)])),_:2},1024)])],14,Ea)))),128))]),g("div",Ha,[g("div",Ga,T(e.$t("message.starting")),1),g("div",Qa,[(y(!0),f(E,null,L(e.getStarting11Players,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),title:a.label+"("+a.value+")",onClick:l=>e.handleClick(a),onContextmenu:B((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),key:a.value},[g("div",Za,[g("span",el,T(a.playerdata.overallrating),1),g("div",al,T(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),g("div",ll,[g("div",tl,[S(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,rl)])),_:2},1032,["src"]),g("p",sl,T(a.lineupData.jerseynumber),1)]),g("div",il,[S(v,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:$((()=>[g("div",nl,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,ol)])])),error:$((()=>[g("div",cl,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,dl)])])),_:2},1032,["src"])])]),g("div",ul,[S(D,null,{default:$((()=>[F(T(a.label),1)])),_:2},1024)])],42,Ka)))),128))])]),g("div",pl,[g("div",ml,T(e.$t("message.sub")),1),g("div",yl,[(y(!0),f(E,null,L(e.getSubPlayers,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),onClick:l=>e.handleClick(a),onContextmenu:B((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),title:a.label+"("+a.value+")",key:a.value},[g("div",gl,[g("span",vl,T(a.playerdata.overallrating),1),g("div",hl,T(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),g("div",bl,[g("div",Dl,[S(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,xl)])),_:2},1032,["src"]),g("p",wl,T(a.lineupData.jerseynumber),1)]),g("div",kl,[S(v,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:$((()=>[g("div",Cl,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Pl)])])),error:$((()=>[g("div",Tl,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Sl)])])),_:2},1032,["src"])])]),g("div",$l,[S(D,null,{default:$((()=>[F(T(a.label),1)])),_:2},1024)])],42,fl)))),128))])]),g("div",_l,[g("div",Nl,T(e.$t("message.res")),1),g("div",Vl,[(y(!0),f(E,null,L(e.getResPlayers,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),onClick:l=>e.handleClick(a),title:a.label+"("+a.value+")",onContextmenu:B((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),key:a.value},[g("div",jl,[g("span",Fl,T(a.playerdata.overallrating),1),g("div",El,T(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),g("div",Ll,[g("div",Ml,[S(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:$((()=>[g("img",{src:d},null,8,ql)])),_:2},1032,["src"]),g("p",Bl,T(a.lineupData.jerseynumber),1)]),g("div",Al,[S(v,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:$((()=>[g("div",zl,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Jl)])])),error:$((()=>[g("div",Il,[g("img",{src:c,style:{"object-fit":"cover"}},null,8,Rl)])])),_:2},1032,["src"])])]),g("div",Ul,[S(D,null,{default:$((()=>[F(T(a.label),1)])),_:2},1024)])],42,Ol)))),128))])])])):w("",!0)],64)):(y(),V(p,{key:0,rows:20,animated:""}))])],64)):(y(),V(m,{key:1,description:e.$t("message.errorInfo")},null,8,["description"])),e.menuVisible?(y(),V(x,{key:2,visible:e.menuVisible,left:e.left,top:e.top,onUpdateNumber:e.handleUpdateNumber,onDelete:e.handleDelete,contextData:e.contextData},null,8,["visible","left","top","onUpdateNumber","onDelete","contextData"])):w("",!0),e.transferPlayer?(y(),V(C,{key:3,visible:e.transferPlayer,onSave:e.handleTransfer,onClose:a[5]||(a[5]=a=>e.transferPlayer=!1)},null,8,["visible","onSave"])):w("",!0),e.addPlayer?(y(),V(N,{key:4,visible:e.addPlayer,onSave:e.handleTransfer,onClose:a[6]||(a[6]=a=>e.addPlayer=!1)},null,8,["visible","onSave"])):w("",!0),e.autoSaveVisible?(y(),V(O,{key:5,state:e.savingState},null,8,["state"])):w("",!0)])}],["__scopeId","data-v-161973a4"]]);export{Wl as default};
