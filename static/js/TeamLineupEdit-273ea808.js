var e=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,i=(a,l,t)=>l in a?e(a,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[l]=t,n=(e,a)=>{for(var l in a||(a={}))r.call(a,l)&&i(e,l,a[l]);if(t)for(var l of t(a))s.call(a,l)&&i(e,l,a[l]);return e},o=(e,t)=>a(e,l(t));import{_ as c}from"./notfound-fa5cb960.js";import{_ as d}from"./notflag-60268a62.js";import{_ as u}from"./team_notfound-5b1be68a.js";import{d as p,_ as m,o as y,e as f,b as v,r as g,k as h,l as b,t as D,J as x,i as w,q as k,g as C,a as P,f as T,w as S,I as $,L as _,M as V,H as N,c as j,h as O,N as F,O as E,j as L,F as M,p as q,P as B,Q as z,R as A,S as I,D as R,U}from"./index-9727b668.js";import{u as J}from"./editSpace-403198f8.js";import{t as W,u as H}from"./teamSelector-42a8b857.js";import{u as X}from"./usePlayers-c854e4e6.js";import{_ as Y}from"./plugin-vue_export-helper-46f75680.js";import{c as Q}from"./util-514ed87c.js";const G=p({name:"ArrowRightBold"}),K={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Z=[v("path",{fill:"currentColor",d:"M338.752 104.704a64 64 0 0 0 0 90.496l316.8 316.8-316.8 316.8a64 64 0 0 0 90.496 90.496l362.048-362.048a64 64 0 0 0 0-90.496L429.248 104.704a64 64 0 0 0-90.496 0z"},null,-1)];var ee=m(G,[["render",function(e,a,l,t,r,s){return y(),f("svg",K,Z)}]]);const ae=p({name:"Marquees",components:{},props:{},setup(e,a){const{proxy:l}=C();let t=g({needToScroll:!1,text:"",_checkTimer:null}),r={check(){l.$nextTick((()=>{let e=r.isOverflow();t.needToScroll=e}))},isOverflow(){let e=l.$refs.outer,a=l.$refs.inner,t=r.getWidth(e);return r.getWidth(a)>t},getWidth(e){let{width:a}=e.getBoundingClientRect();return a},startCheck(){t._checkTimer=setInterval(r.check,1e3),r.check()},stopCheck(){clearInterval(t._checkTimer)}};return h((()=>{r.startCheck()})),b((()=>{r.stopCheck()})),n(n({},D(t)),r)}}),le={class:"scrollText",ref:"outer"},te={class:"st-section",ref:"inner"},re={key:0,class:"st-section"};var se=Y(ae,[["render",function(e,a,l,t,r,s){return y(),f("div",le,[v("div",{class:k(["st-inner",{"st-scrolling":e.needToScroll}])},[v("span",te,[x(e.$slots,"default",{},void 0,!0)],512),e.needToScroll?(y(),f("span",re,[x(e.$slots,"default",{},void 0,!0)])):w("",!0)],2)],512)}],["__scopeId","data-v-25aae93a"]]);const ie={name:"playerMenu",props:{visible:{type:Boolean,default:!1},left:{type:Number,default:0},top:{type:Number,default:0},contextData:{type:Object,default:null},isEdit:{type:Boolean,default:!0}},components:{},emits:["updateNumber","delete"],setup(e,a){const{proxy:l}=C();let t=g({timer:null,newTop:e.top,newLeft:e.left}),r={handleEditNumber(){let l={jerseynumber:e.contextData.lineupData.jerseynumber,id:e.contextData.value};a.emit("updateNumber",l)},handleEdit(){l.$router.push({name:"playerEdit",query:{playerid:e.contextData.value}})},handleDelete(){a.emit("delete",e.contextData.value)}};return h((()=>{let a=document.body.offsetHeight,l=document.body.offsetWidth,r=document.querySelector("#app-contextMenu");e.top+r.offsetHeight>a?t.newTop=a-r.offsetHeight:e.left+r.offsetWidth>l&&(t.newLeft=l-70-r.offsetWidth)})),n(n({},D(t)),r)}},ne=e=>(_("data-v-27cf4b86"),e=e(),V(),e),oe=ne((()=>v("span",null,"编辑号码",-1))),ce=ne((()=>v("span",null,"删除球员",-1)));var de=Y(ie,[["render",function(e,a,l,t,r,s){const i=P("EditPen"),n=P("el-icon");P("Edit");const o=P("Delete");return l.visible?(y(),f("ul",{key:0,id:"app-contextMenu",style:$({left:e.newLeft+"px",top:e.newTop+"px"}),class:"contextmenu"},[l.isEdit?(y(),f("li",{key:0,class:"flex-between",onClick:a[0]||(a[0]=(...a)=>e.handleEditNumber&&e.handleEditNumber(...a))},[oe,T(n,null,{default:S((()=>[T(i)])),_:1})])):w("",!0),w("",!0),v("li",{class:"flex-between",onClick:a[2]||(a[2]=(...a)=>e.handleDelete&&e.handleDelete(...a))},[ce,T(n,null,{default:S((()=>[T(o)])),_:1})])],4)):w("",!0)}],["__scopeId","data-v-27cf4b86"]]);const ue=p({name:"playerSelector",components:{},props:{modelValue:{type:String,default:""},filterable:{type:Boolean,default:!0},remote:{type:Boolean,default:!0},multiple:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(e,a){const l=J();X();let t=g({selectOptions:[],valueName:"",selectLoading:!1,cloneSelectOptions:[]}),r={remoteMethod(e){if(""!==e){let l;t.selectLoading=!0,l&&clearTimeout(l),l=setTimeout((()=>{t.selectLoading=!1,!isNaN(parseFloat(e))&&isFinite(e)&&(t.selectOptions=t.cloneSelectOptions.filter((a=>a.label==e)))}),500),a.emit("update:modelValue",t.valueName)}else t.selectOptions=[]},handleChange(e){a.emit("update:modelValue",e),a.emit("change",e)}};return N((()=>e.modelValue),(a=>{t.valueName=e.modelValue})),h((()=>{t.cloneSelectOptions=l.getAllPlayerList(),t.valueName=e.modelValue})),n(n(n({},D(t)),r),X())}}),pe={style:{"margin-right":"8px"}},me={style:{color:"var(--el-text-color-secondary)","font-size":"13px"}};var ye=Y(ue,[["render",function(e,a,l,t,r,s){const i=P("el-select-v2");return y(),j(i,{modelValue:e.valueName,"onUpdate:modelValue":a[0]||(a[0]=a=>e.valueName=a),filterable:e.filterable,remote:e.remote,multiple:e.multiple,clearable:e.clearable,disabled:e.disabled,options:e.selectOptions,placeholder:e.$t("message.selectPlayerPlaceholder"),onChange:e.handleChange,"remote-method":e.remoteMethod,"value-key":"value.playerid",loading:e.selectLoading},{default:S((({item:a})=>[v("span",pe,O(a.label),1),v("span",me,O(e.getPlayerName(a.value.firstnameid,a.value.lastnameid,a.value.commonnameid)),1)])),_:1},8,["modelValue","filterable","remote","multiple","clearable","disabled","options","placeholder","onChange","remote-method","loading"])}]]);const fe=p({name:"TransferDialog",components:{teamSelector:W,playerMenu:de,Marquees:se,playerSelector:ye},props:{visible:{type:Boolean,default:!1}},emits:["close","save"],setup(e,a){const{proxy:l}=C(),t=J(),r=H(),s=X();let i=g({dialogVisible:e.visible,selectTeamData:"",selectPlayerData:"",lineupData:[],pendingTransferData:[],activeData:[],menuVisible:!1,contextData:null,left:0,top:0,loading:!1,filterOptions:[{label:"teams",value:"1"},{label:"players",value:"2"}],filterType:""}),c={handleDelete(e){i.pendingTransferData.forEach(((a,l)=>{a.value==e&&i.pendingTransferData.splice(l,1)}))},handleClose(){i.dialogVisible=!1,a.emit("close")},handleConfirm(){a.emit("save",i.pendingTransferData)},handleLoadLineup1(){if(i.selectTeamData==l.$route.query.teamid)return i.loading=!1,l.$message.warning(l.$t("message.transferError1"));i.activeData.length=0,i.lineupData.length=0,t.data.teamplayerlinks?(t.data.teamplayerlinks.forEach((e=>{if(e.teamid==i.selectTeamData){let a=t.data.players.find((a=>a.playerid==e.playerid));if(a){let l=s.getPlayerName.value(a.firstnameid,a.lastnameid,a.commonnameid);i.lineupData.push({label:l,value:e.playerid,playerdata:a,lineupData:e})}}})),i.loading=!1):l.$message.warning(`${l.$t("message.notfound")}`)},handleLoadLineup2(){i.activeData.length=0,i.lineupData.length=0,t.data.teamplayerlinks?(t.data.teamplayerlinks.forEach((e=>{if(e.playerid==i.selectPlayerData){let a=t.data.players.find((a=>a.playerid==e.playerid));if(a){let l=s.getPlayerName.value(a.firstnameid,a.lastnameid,a.commonnameid);i.lineupData.push({label:l,value:e.playerid,playerdata:a,lineupData:e})}}})),i.loading=!1):l.$message.warning(`${l.$t("message.notfound")}`)},handleClick(e){for(let a=0;a<i.activeData.length;a++)if(i.activeData[a].value==e.value&&i.activeData[a].lineupData.teamid==e.lineupData.teamid)return void i.activeData.splice(a,1);i.activeData.push(e)},handleToRight(){for(let a=0;a<i.activeData.length;a++)if(i.activeData[a].lineupData.teamid==l.$route.query.teamid)return l.$message.warning(l.$t("message.transferError2"));let e=new Set([...i.pendingTransferData,...i.activeData]);i.pendingTransferData=Array.from(e),i.activeData=[]},handleMenu(e,a,l=null){i.menuVisible=!1,setTimeout((()=>{i[a]=!0,i.left=e.pageX,i.top=e.pageY,i.contextData=l}),100)},closeMenu(){i.menuVisible=!1},handleTeamChange(){""!==i.selectTeamData&&(i.loading=!0,setTimeout((()=>{c.handleLoadLineup1()}),200))},handlePlayerChange(){""!==i.selectPlayerData&&(i.loading=!0,setTimeout((()=>{c.handleLoadLineup2()}),200))}};return h((()=>{document.addEventListener("click",c.closeMenu)})),b((()=>{document.removeEventListener("click",c.closeMenu)})),o(n(n(n(n({},D(i)),c),r),s),{ArrowRightBold:ee,ArrowLeftBold:F})}}),ve={class:"flex-start",style:{"margin-bottom":"10px"}},ge={class:"flex-center"},he={class:"scrollAuto scrollbar lineup-box flex-start flex-warp"},be=["onClick","title"],De={class:"flex-start full-w"},xe={class:"player-ability"},we={class:"player-position"},ke={class:"flex-center"},Ce={class:"flex-column-center"},Pe=["src"],Te=["src"],Se={class:"player-avatar"},$e={class:"image-slot"},_e=["src"],Ve={class:"image-slot"},Ne=["src"],je={class:"player-name-1"},Oe={class:"flex-column-center",style:{width:"100px"}},Fe={class:"scrollAuto scrollbar lineup-box flex-start flex-warp"},Ee=["onContextmenu","title"],Le={class:"flex-start full-w"},Me={class:"player-ability"},qe={class:"player-position"},Be={class:"flex-center"},ze={class:"flex-column-center"},Ae=["src"],Ie=["src"],Re={class:"player-avatar"},Ue={class:"image-slot"},Je=["src"],We={class:"image-slot"},He=["src"],Xe={class:"player-name-1"},Ye={class:"dialog-footer"};var Qe=Y(fe,[["render",function(e,a,l,t,r,s){const i=P("el-option"),n=P("el-select"),o=P("teamSelector"),p=P("playerSelector"),m=P("el-avatar"),g=P("el-tooltip"),h=P("el-image"),b=P("Marquees"),D=P("el-button"),x=P("el-dialog"),C=P("playerMenu"),$=E("loading");return y(),f(M,null,[T(x,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[4]||(a[4]=a=>e.dialogVisible=a),title:e.$t("message.transfer"),"before-close":e.handleClose,top:"5vh","custom-class":"z-dialog",center:"",width:"80%"},{footer:S((()=>[v("span",Ye,[T(D,{onClick:e.handleClose},{default:S((()=>[L(O(e.$t("message.cancel")),1)])),_:1},8,["onClick"]),T(D,{type:"primary",onClick:e.handleConfirm},{default:S((()=>[L(O(e.$t("message.confirm")),1)])),_:1},8,["onClick"])])])),default:S((()=>[v("div",null,[v("div",ve,[T(n,{modelValue:e.filterType,"onUpdate:modelValue":a[0]||(a[0]=a=>e.filterType=a),placeholder:e.$t("message.filter"),clearable:"",onChange:a[1]||(a[1]=a=>{e.selectTeamData="",e.selectPlayerData=""}),style:{width:"200px","margin-right":"10px"}},{default:S((()=>[(y(!0),f(M,null,q(e.filterOptions,(a=>(y(),j(i,{key:a.value,label:e.$t(`message.${a.label}`),value:a.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue","placeholder"]),B(T(o,{modelValue:e.selectTeamData,"onUpdate:modelValue":a[2]||(a[2]=a=>e.selectTeamData=a),onChange:e.handleTeamChange},null,8,["modelValue","onChange"]),[[z,"1"===e.filterType]]),B(T(p,{modelValue:e.selectPlayerData,"onUpdate:modelValue":a[3]||(a[3]=a=>e.selectPlayerData=a),onChange:e.handlePlayerChange},null,8,["modelValue","onChange"]),[[z,"2"===e.filterType]])]),v("div",ge,[B((y(),f("div",he,[(y(!0),f(M,null,q(e.lineupData,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.activeData.length&&e.activeData.find((e=>e.value==a.value&&e.lineupData.teamid==a.lineupData.teamid))}]),onClick:l=>e.handleClick(a),title:a.label+"("+a.value+")",key:a.value},[v("div",De,[v("span",xe,O(a.playerdata.overallrating),1),v("div",we,O(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),v("div",ke,[v("div",Ce,[T(g,{effect:"dark",content:e.getTeamName(a.lineupData.teamid),placement:"top"},{default:S((()=>[T(m,{shape:"square",size:24,fit:"cover",src:e.getTeamAvatar(a.lineupData.teamid,60),onError:e=>!0},{default:S((()=>[v("img",{src:u},null,8,Pe)])),_:2},1032,["src"])])),_:2},1032,["content"]),T(m,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,Te)])),_:2},1032,["src"])]),v("div",Se,[T(h,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:S((()=>[v("div",$e,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,_e)])])),error:S((()=>[v("div",Ve,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Ne)])])),_:2},1032,["src"])])]),v("div",je,[T(b,null,{default:S((()=>[L(O(a.label),1)])),_:2},1024)])],10,be)))),128))])),[[$,e.loading]]),v("div",Oe,[T(D,{type:"primary",icon:e.ArrowRightBold,onClick:e.handleToRight},null,8,["icon","onClick"])]),v("div",Fe,[(y(!0),f(M,null,q(e.pendingTransferData,(a=>(y(),f("div",{class:"player-card flex-column-center",onContextmenu:A((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),title:a.label+"("+a.value+")",key:a.value},[v("div",Le,[v("span",Me,O(a.playerdata.overallrating),1),v("div",qe,O(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),v("div",Be,[v("div",ze,[T(g,{effect:"dark",content:e.getTeamName(a.lineupData.teamid),placement:"top"},{default:S((()=>[T(m,{shape:"square",size:24,fit:"cover",src:e.getTeamAvatar(a.lineupData.teamid,60),onError:e=>!0},{default:S((()=>[v("img",{src:u},null,8,Ae)])),_:2},1032,["src"])])),_:2},1032,["content"]),T(m,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,Ie)])),_:2},1032,["src"])]),v("div",Re,[T(h,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:S((()=>[v("div",Ue,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Je)])])),error:S((()=>[v("div",We,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,He)])])),_:2},1032,["src"])])]),v("div",Xe,[T(b,null,{default:S((()=>[L(O(a.label),1)])),_:2},1024)])],40,Ee)))),128))])])])])),_:1},8,["modelValue","title","before-close"]),e.menuVisible?(y(),j(C,{key:0,visible:e.menuVisible,left:e.left,top:e.top,isEdit:!1,onDelete:e.handleDelete,contextData:e.contextData},null,8,["visible","left","top","onDelete","contextData"])):w("",!0)],64)}],["__scopeId","data-v-136a0bf6"]]);const Ge=p({name:"SaveState",components:{},props:{state:{type:Object,default:function(){return{text:"saving",status:"loading"}}}},setup(e,a){let l=g({});return n(n({},D(l)),{})}}),Ke={class:"save-box flex-center"};var Ze=Y(Ge,[["render",function(e,a,l,t,r,s){const i=P("Loading"),n=P("el-icon"),o=P("CircleCheck"),c=P("CircleClose");return y(),f("div",Ke,[v("p",null,O(e.$t(`message.${e.state.text}`)),1),"loading"===e.state.status?(y(),j(n,{key:0,class:"is-loading"},{default:S((()=>[T(i)])),_:1})):"success"===e.state.status?(y(),j(n,{key:1},{default:S((()=>[T(o)])),_:1})):"error"===e.state.status?(y(),j(n,{key:2},{default:S((()=>[T(c)])),_:1})):w("",!0)])}],["__scopeId","data-v-ad6064ea"]]);const ea=p({name:"TransferFreeDialog",components:{playerSelector:ye},props:{visible:{type:Boolean,default:!1},row:{type:Object,default:null}},emits:["close","save"],setup(e,a){const{proxy:l}=C(),t=J(),r=X();let s=g({dialogVisible:e.visible,selectPlayerData:{jerseynumber:"",position:"29",teamid:"",playerid:""},playerdata:{}}),i={handleClose(){s.dialogVisible=!1,a.emit("close")},async handleConfirm(){if(""==s.selectPlayerData.playerid||""==s.selectPlayerData.jerseynumber)return;s.selectPlayerData.teamid=l.$route.query.teamid;let e=[{label:r.getPlayerName.value(s.playerdata.firstnameid,s.playerdata.lastnameid,s.playerdata.commonnameid),value:s.playerdata.playerid,playerdata:s.playerdata,lineupData:n({},s.selectPlayerData)}];a.emit("save",e)}};return I((()=>{""!=s.selectPlayerData.playerid&&(s.playerdata=t.data.players.find((e=>e.playerid==s.selectPlayerData.playerid)))})),h((()=>{})),n(n(n(n({},D(s)),i),X()),H())}}),aa={class:"flex-column-center"},la={class:"flex-center"},ta={style:{"padding-right":"20px"}},ra={class:"flex-center",style:{"margin-top":"20px"}},sa={style:{"padding-right":"8px"}},ia={key:0,class:"transfer-player-box"},na={class:"player-team"},oa={class:"image-slot"},ca=["src"],da={class:"image-slot"},ua=["src"],pa={class:"player-avatar"},ma={class:"image-slot"},ya=["src"],fa={class:"image-slot"},va=["src"],ga={class:"dialog-footer"};const ha=p({name:"TeamLineupEdit",components:{Marquees:se,playerMenu:de,TransferDialog:Qe,SaveState:Ze,TransferFreeDialog:Y(ea,[["render",function(e,a,l,t,r,s){const i=P("playerSelector"),n=P("el-input"),o=P("el-image"),d=P("el-button"),p=P("el-dialog");return y(),j(p,{modelValue:e.dialogVisible,"onUpdate:modelValue":a[2]||(a[2]=a=>e.dialogVisible=a),title:e.$t("message.free"),"before-close":e.handleClose,"custom-class":"z-dialog",center:"",width:500},{footer:S((()=>[v("span",ga,[T(d,{onClick:e.handleClose},{default:S((()=>[L(O(e.$t("message.cancel")),1)])),_:1},8,["onClick"]),T(d,{type:"primary",onClick:e.handleConfirm},{default:S((()=>[L(O(e.$t("message.confirm")),1)])),_:1},8,["onClick"])])])),default:S((()=>[v("div",aa,[v("div",la,[v("span",ta,O(e.$t("message.playerids")),1),T(i,{modelValue:e.selectPlayerData.playerid,"onUpdate:modelValue":a[0]||(a[0]=a=>e.selectPlayerData.playerid=a),style:{width:"200px"}},null,8,["modelValue"])]),v("div",ra,[v("span",sa,O(e.$t("message.kitNumber")),1),T(n,{modelValue:e.selectPlayerData.jerseynumber,"onUpdate:modelValue":a[1]||(a[1]=a=>e.selectPlayerData.jerseynumber=a),style:{width:"200px"},placeholder:e.$t("message.editNumber")},null,8,["modelValue","placeholder"])]),e.playerdata.playerid?(y(),f("div",ia,[v("div",na,[T(o,{style:{height:"100%",width:"100%"},lazy:"",src:e.getTeamAvatar(e.$route.query.teamid,120),fit:"cover"},{placeholder:S((()=>[v("div",oa,[v("img",{src:u,style:{"object-fit":"cover"}},null,8,ca)])])),error:S((()=>[v("div",da,[v("img",{src:u,style:{"object-fit":"cover"}},null,8,ua)])])),_:1},8,["src"])]),v("div",pa,[T(o,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(e.playerdata.playerid,120),fit:"cover"},{placeholder:S((()=>[v("div",ma,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,ya)])])),error:S((()=>[v("div",fa,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,va)])])),_:1},8,["src"])]),v("p",null,O(e.getPlayerName(e.playerdata.firstnameid,e.playerdata.lastnameid,e.playerdata.commonnameid)),1)])):w("",!0)])])),_:1},8,["modelValue","title","before-close"])}],["__scopeId","data-v-3e37d8bf"]])},props:{},setup(e,a){const l=J(),{proxy:t}=C(),r=H(),s=X();let i=g({lineupData:[],isNotFound:!1,isSwap:!1,transferPlayer:!1,addPlayer:!1,currentTeamFormation:{},selectOptions:[],cloneSelectOptions:[],startingLineups:[],teamFormationData:{},swapData:[],menuVisible:!1,left:0,top:0,contextData:null,savingState:{text:"saving",status:"loading"},autoSaveVisible:!1,timer:null,count:0,saveloading:!1}),c=R((()=>i.lineupData.slice(0,11))),d=R((()=>11===c.value.length?i.lineupData.slice(11,18):[])),u=R((()=>d.value.length>=7?i.lineupData.slice(18):[])),p={handleUpdateNumber(e){i.menuVisible=!1,U.prompt(t.$t("message.editNumber"),t.$t("message.edit"),{confirmButtonText:t.$t("message.confirm"),cancelButtonText:t.$t("message.cancel"),inputPattern:/^[0-9]*$/,inputValue:e.jerseynumber,inputErrorMessage:t.$t("message.inputError")}).then((({value:a})=>{i.lineupData.forEach((l=>{l.value==e.id&&(l.lineupData.jerseynumber=a)}))})).catch((e=>{}))},handleDelete(e){U.confirm(t.$t("message.isReleaseContract"),t.$t("message.warning"),{confirmButtonText:t.$t("message.confirm"),cancelButtonText:t.$t("message.cancel"),type:"warning"}).then((()=>{let a=i.lineupData.findIndex((a=>a.value==e));a>=0&&i.lineupData.splice(a,1),p.updateFormationModel()})).catch((()=>{})),i.menuVisible=!1},closeMenu(){i.menuVisible=!1},handleMenu(e,a,l=null){p.closeMenu(),setTimeout((()=>{i[a]=!0,i.left=e.pageX,i.top=e.pageY,i.contextData=l}),100)},getTeamPlayerLineup(){const e=t.$route.query.teamid;if(!l.data.teamplayerlinks)return void(i.isNotFound=!0);let a=l.data.teamplayerlinks.map((a=>{let t=null,r=null;a.teamid==e&&(t=l.data.players.find((e=>e.playerid==a.playerid)),r=a);let i=t?s.getPlayerName.value(t.firstnameid,t.lastnameid,t.commonnameid):"";return t?{label:i,value:a.playerid,playerdata:t,lineupData:r}:null}));i.lineupData=JSON.parse(JSON.stringify(a.filter(Boolean))),i.lineupData.length?p.updateFormationModel():i.isNotFound=!0},handleSave(){i.lineupData.length&&(i.timer&&clearTimeout(i.timer),i.saveloading=!0,i.autoSaveVisible=!0,i.timer=setTimeout((()=>{let e=[];JSON.parse(JSON.stringify(Q(i.lineupData))).forEach((a=>{e.push(a.lineupData)}));let a=JSON.parse(JSON.stringify(i.currentTeamFormation));a.teamid=t.$route.query.teamid,a.formationid=i.teamFormationData.formationid;const r=l.saveLineupData("teamplayerlinks",e,t.$route.query.teamid,a);i.savingState=r?{text:"saveSucceeded",status:"success"}:{text:"saveFailed",status:"error"},i.saveloading=!1,setTimeout((()=>{i.autoSaveVisible=!1,i.savingState={text:"saving",status:"loading"}}),1500)}),500))},handleChange(e){i.currentTeamFormation=JSON.parse(JSON.stringify(r.getTeamFormationById.value(e))),p.updateFormationModel()},updateFormationModel(){if("{}"===JSON.stringify(i.currentTeamFormation))return;let e=Q(c.value),a=r.getTeamRelativeFormation.value(i.currentTeamFormation.relativeformationid);e.forEach(((e,l)=>{e.lineupData.position=a[`position${l}`]})),i.startingLineups=e.map(((e,a)=>{let l=Number(e.lineupData.position);return n({offsetX:t.$config.formationPos[l].x,offsetY:t.$config.formationPos[l].y},e)}))},handleClick(e){for(let a=0;a<i.swapData.length;a++)if(i.swapData[a].value==e.value)return void i.swapData.splice(a,1);i.swapData.length>=2||i.swapData.push(e)},handleSwap(){if(!i.swapData.length)return;let e=i.swapData[0].lineupData.position;i.swapData[0].lineupData.position=i.swapData[1].lineupData.position,i.swapData[1].lineupData.position=e;let a=i.lineupData.findIndex((e=>e.value==i.swapData[0].value)),l=i.lineupData.findIndex((e=>e.value==i.swapData[1].value)),t=JSON.parse(JSON.stringify(i.lineupData));t[a]=t.splice(l,1,t[a])[0],i.lineupData=t,i.swapData.length=0,p.updateFormationModel()},handleTransfer(e){if(!e.length)return;e.forEach((e=>{e.lineupData.position="29"})),i.transferPlayer=!1,i.addPlayer=!1;let a=p.handleRemoveRepeat(e);i.lineupData.push(...a),i.lineupData.length>=11&&p.updateFormationModel()},handleRemoveRepeat(e){let a=[];return e.forEach((e=>{i.lineupData.find((a=>a.value==e.value))||a.push(e)})),a}};return h((()=>{i.currentTeamFormation=r.getTeamFormation.value(t.$route.query.teamid,0),i.teamFormationData=r.getTeamFormation.value(t.$route.query.teamid,1),i.selectOptions=l.getAllFormationList(),i.cloneSelectOptions=JSON.parse(JSON.stringify(i.selectOptions)),p.getTeamPlayerLineup(),document.addEventListener("keydown",(e=>{let a=e||window.event||arguments.callee.caller.arguments[0];(a&&13==a.keyCode||"Enter"==a.key)&&p.handleSwap()})),document.addEventListener("click",p.closeMenu)})),b((()=>{document.removeEventListener("keydown",(e=>{let a=e||window.event||arguments.callee.caller.arguments[0];(a&&13==a.keyCode||"Enter"==a.key)&&p.handleSwap()})),document.removeEventListener("click",p.closeMenu),i.timer&&clearTimeout(i.timer)})),I((()=>{i.lineupData.length&&(i.isNotFound=!1)})),o(n(n(o(n(n({},D(i)),p),{editSpaceStore:l}),r),s),{getStarting11Players:c,getSubPlayers:d,getResPlayers:u})}}),ba={class:"full-layout flex-column-center scrollbar routerview",style:{"overflow-y":"auto"}},Da={class:"flex-between full-w edit-header"},xa={class:"flex-end",style:{"margin-left":"10px"}},wa={class:"player-box full-layout"},ka={class:"flex-between flex-warp"},Ca={class:"flex-start",style:{"align-items":"flex-end"}},Pa={class:"team-avatar"},Ta={class:"image-slot"},Sa=["src"],$a={class:"image-slot"},_a=["src"],Va={class:"flex-column-end player-info"},Na={class:"player-name text-left"},ja={class:"flex-start"},Oa=["src"],Fa={class:"player-formation"},Ea={style:{"margin-left":"10px"}},La={class:"flex-end select-box"},Ma={key:0,class:"flex-start flex-warp",style:{"margin-top":"20px","justify-content":"flex-start","align-items":"flex-start"}},qa={class:"field-large margin-1"},Ba=["src"],za=["title","onClick"],Aa={class:"flex-start full-w"},Ia={class:"player-ability"},Ra={class:"player-position"},Ua={class:"flex-center"},Ja={class:"flex-column-center"},Wa=["src"],Ha={class:"player-number"},Xa={class:"player-avatar"},Ya={class:"image-slot"},Qa=["src"],Ga={class:"image-slot"},Ka=["src"],Za={class:"player-name-1"},el={style:{flex:"1"}},al={class:"tab-1"},ll={class:"flex-start flex-warp lineup-box starting11-box full-w margin-1 scrollAuto scrollbar"},tl=["title","onClick","onContextmenu"],rl={class:"flex-start full-w"},sl={class:"player-ability"},il={class:"player-position"},nl={class:"flex-center"},ol={class:"flex-column-center"},cl=["src"],dl={class:"player-number"},ul={class:"player-avatar"},pl={class:"image-slot"},ml=["src"],yl={class:"image-slot"},fl=["src"],vl={class:"player-name-1"},gl={class:"full-w"},hl={class:"tab-1"},bl={class:"flex-start flex-warp lineup-box sub-box full-w margin-1"},Dl=["onClick","onContextmenu","title"],xl={class:"flex-start full-w"},wl={class:"player-ability"},kl={class:"player-position"},Cl={class:"flex-center"},Pl={class:"flex-column-center"},Tl=["src"],Sl={class:"player-number"},$l={class:"player-avatar"},_l={class:"image-slot"},Vl=["src"],Nl={class:"image-slot"},jl=["src"],Ol={class:"player-name-1"},Fl={class:"full-w"},El={class:"tab-1"},Ll={class:"flex-start flex-warp lineup-box res-box full-w margin-1"},Ml=["onClick","title","onContextmenu"],ql={class:"flex-start full-w"},Bl={class:"player-ability"},zl={class:"player-position"},Al={class:"flex-center"},Il={class:"flex-column-center"},Rl=["src"],Ul={class:"player-number"},Jl={class:"player-avatar"},Wl={class:"image-slot"},Hl=["src"],Xl={class:"image-slot"},Yl=["src"],Ql={class:"player-name-1"};var Gl=Y(ha,[["render",function(e,a,l,t,r,s){const i=P("ArrowLeftBold"),n=P("el-icon"),o=P("el-button"),p=P("el-skeleton"),m=P("el-empty"),g=P("el-image"),h=P("el-avatar"),b=P("el-select-v2"),D=P("Marquees"),x=P("playerMenu"),C=P("TransferDialog"),_=P("TransferFreeDialog"),V=P("SaveState");return y(),f("div",ba,[e.editSpaceStore.isUpload?(y(),f(M,{key:0},[v("div",Da,[T(n,{class:"back-icon",onClick:a[0]||(a[0]=a=>e.$router.go(-1))},{default:S((()=>[T(i)])),_:1}),v("div",xa,[2===e.swapData.length?(y(),j(o,{key:0,type:"primary",onClick:e.handleSwap},{default:S((()=>[L(O(e.$t("message.swap")),1)])),_:1},8,["onClick"])):w("",!0),T(o,{type:"warning",onClick:a[1]||(a[1]=a=>e.transferPlayer=!0)},{default:S((()=>[L(O(e.$t("message.transfer")),1)])),_:1}),T(o,{type:"danger",onClick:a[2]||(a[2]=a=>e.addPlayer=!0)},{default:S((()=>[L(O(e.$t("message.addPlayer")),1)])),_:1}),T(o,{type:"success",onClick:e.handleSave,loading:e.saveloading},{default:S((()=>[L(O(e.$t("message.save")),1)])),_:1},8,["onClick","loading"])])]),v("div",wa,[e.lineupData.length||e.isNotFound?!e.lineupData.length&&e.isNotFound?(y(),j(m,{key:1,description:e.$t("message.notfound")},null,8,["description"])):(y(),f(M,{key:2},[v("div",ka,[v("div",Ca,[v("div",Pa,[T(g,{style:{height:"100%",width:"100%"},lazy:"",src:e.getTeamAvatar(e.$route.query.teamid,120),fit:"cover"},{placeholder:S((()=>[v("div",Ta,[v("img",{src:u,style:{"object-fit":"cover"}},null,8,Sa)])])),error:S((()=>[v("div",$a,[v("img",{src:u,style:{"object-fit":"cover"}},null,8,_a)])])),_:1},8,["src"])]),v("div",Va,[v("p",Na,O(e.getTeamName(e.$route.query.teamid)),1),v("div",ja,[T(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getTeamNationFlag(e.$route.query.teamid),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,Oa)])),_:1},8,["src"]),v("span",Fa,O(e.getTeamLeagueName(e.$route.query.teamid)),1),v("span",Ea,"(球员人数) "+O(e.lineupData.length)+"人",1)])])]),v("div",La,[T(b,{modelValue:e.currentTeamFormation.formationid,"onUpdate:modelValue":a[3]||(a[3]=a=>e.currentTeamFormation.formationid=a),filterable:"",options:e.selectOptions,onVisibleChange:a[4]||(a[4]=a=>e.selectOptions=e.cloneSelectOptions),onChange:e.handleChange,"value-key":"value.formationid",placeholder:e.$t("message.selectPlaceholder")},null,8,["modelValue","options","onChange","placeholder"])])]),e.lineupData&&e.lineupData.length>0?(y(),f("div",Ma,[v("div",qa,[v("img",{src:"/static/png/field-4e1fdc65.png"},null,8,Ba),(y(!0),f(M,null,q(e.startingLineups,(a=>(y(),f("div",{class:k(["player-card player-card-1 flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),style:$({left:a.offsetX+"%",bottom:a.offsetY+"%"}),title:a.label+"("+a.value+")",onClick:l=>e.handleClick(a),key:a.value},[v("div",Aa,[v("span",Ia,O(a.playerdata.overallrating),1),v("div",Ra,O(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),v("div",Ua,[v("div",Ja,[T(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,Wa)])),_:2},1032,["src"]),v("p",Ha,O(a.lineupData.jerseynumber),1)]),v("div",Xa,[T(g,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:S((()=>[v("div",Ya,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Qa)])])),error:S((()=>[v("div",Ga,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Ka)])])),_:2},1032,["src"])])]),v("div",Za,[T(D,null,{default:S((()=>[L(O(a.label),1)])),_:2},1024)])],14,za)))),128))]),v("div",el,[v("div",al,O(e.$t("message.starting")),1),v("div",ll,[(y(!0),f(M,null,q(e.getStarting11Players,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),title:a.label+"("+a.value+")",onClick:l=>e.handleClick(a),onContextmenu:A((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),key:a.value},[v("div",rl,[v("span",sl,O(a.playerdata.overallrating),1),v("div",il,O(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),v("div",nl,[v("div",ol,[T(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,cl)])),_:2},1032,["src"]),v("p",dl,O(a.lineupData.jerseynumber),1)]),v("div",ul,[T(g,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:S((()=>[v("div",pl,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,ml)])])),error:S((()=>[v("div",yl,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,fl)])])),_:2},1032,["src"])])]),v("div",vl,[T(D,null,{default:S((()=>[L(O(a.label),1)])),_:2},1024)])],42,tl)))),128))])]),v("div",gl,[v("div",hl,O(e.$t("message.sub")),1),v("div",bl,[(y(!0),f(M,null,q(e.getSubPlayers,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),onClick:l=>e.handleClick(a),onContextmenu:A((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),title:a.label+"("+a.value+")",key:a.value},[v("div",xl,[v("span",wl,O(a.playerdata.overallrating),1),v("div",kl,O(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),v("div",Cl,[v("div",Pl,[T(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,Tl)])),_:2},1032,["src"]),v("p",Sl,O(a.lineupData.jerseynumber),1)]),v("div",$l,[T(g,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:S((()=>[v("div",_l,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Vl)])])),error:S((()=>[v("div",Nl,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,jl)])])),_:2},1032,["src"])])]),v("div",Ol,[T(D,null,{default:S((()=>[L(O(a.label),1)])),_:2},1024)])],42,Dl)))),128))])]),v("div",Fl,[v("div",El,O(e.$t("message.res")),1),v("div",Ll,[(y(!0),f(M,null,q(e.getResPlayers,(a=>(y(),f("div",{class:k(["player-card flex-column-center",{"player-card-active":e.swapData.length&&e.swapData.find((e=>e.value==a.value))}]),onClick:l=>e.handleClick(a),title:a.label+"("+a.value+")",onContextmenu:A((l=>e.handleMenu(l,"menuVisible",a)),["prevent"]),key:a.value},[v("div",ql,[v("span",Bl,O(a.playerdata.overallrating),1),v("div",zl,O(e.getPlayerPositionByCode(a.playerdata.preferredposition1)),1)]),v("div",Al,[v("div",Il,[T(h,{shape:"square",size:24,style:{width:"24px",height:"16px"},fit:"cover",src:e.getPlayerNationFlag(a.playerdata.nationality),onError:e=>!0},{default:S((()=>[v("img",{src:d},null,8,Rl)])),_:2},1032,["src"]),v("p",Ul,O(a.lineupData.jerseynumber),1)]),v("div",Jl,[T(g,{style:{height:"100%",width:"100%"},lazy:"",src:e.getPlayerAvatar(a.playerdata.playerid,60),fit:"cover"},{placeholder:S((()=>[v("div",Wl,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Hl)])])),error:S((()=>[v("div",Xl,[v("img",{src:c,style:{"object-fit":"cover"}},null,8,Yl)])])),_:2},1032,["src"])])]),v("div",Ql,[T(D,null,{default:S((()=>[L(O(a.label),1)])),_:2},1024)])],42,Ml)))),128))])])])):w("",!0)],64)):(y(),j(p,{key:0,rows:20,animated:""}))])],64)):(y(),j(m,{key:1,description:e.$t("message.errorInfo")},null,8,["description"])),e.menuVisible?(y(),j(x,{key:2,visible:e.menuVisible,left:e.left,top:e.top,onUpdateNumber:e.handleUpdateNumber,onDelete:e.handleDelete,contextData:e.contextData},null,8,["visible","left","top","onUpdateNumber","onDelete","contextData"])):w("",!0),e.transferPlayer?(y(),j(C,{key:3,visible:e.transferPlayer,onSave:e.handleTransfer,onClose:a[5]||(a[5]=a=>e.transferPlayer=!1)},null,8,["visible","onSave"])):w("",!0),e.addPlayer?(y(),j(_,{key:4,visible:e.addPlayer,onSave:e.handleTransfer,onClose:a[6]||(a[6]=a=>e.addPlayer=!1)},null,8,["visible","onSave"])):w("",!0),e.autoSaveVisible?(y(),j(V,{key:5,state:e.savingState},null,8,["state"])):w("",!0)])}],["__scopeId","data-v-7702aa1d"]]);export{Gl as default};
