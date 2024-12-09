import{_ as L,a as T}from"./CSwwpXum.js";import{_ as j,a as O}from"./DGid34OE.js";import{d as y,B as P,al as k,am as x,c as o,e as l,n as b,C as r,t as A,h as S,f as U,af as V,ag as D,aG as N,aH as R,aI as E,ae as I,w as n,aL as M,aM as q,i as s,ad as d,F as u,q as F,aO as H}from"./BMpoVv3m.js";const $=y({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(c){const a=c,i=P(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[a.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:e,attrs:g}=k("landing.logos",x(a,"ui"),i,x(a,"class"),!0);return(p,m)=>(o(),l("div",D({class:r(e).wrapper},r(g)),[c.title?(o(),l("h2",{key:0,class:b(r(e).title)},A(c.title),3)):S("",!0),U("div",{class:b(r(e).images)},[V(p.$slots,"default")],2)],16))}}),G=Object.assign($,{__name:"ULandingLogos"}),K=y({__name:"team",async setup(c){let a,i;const{data:e}=([a,i]=N(()=>M("team",()=>F("/team").findOne())),a=await a,i(),a);if(!e.value)throw R({statusCode:404,statusMessage:"Page not found",fatal:!0});E({title:e.value.title,meta:[{property:"og:title",content:e.value.title},{name:"description",content:e.value.description},{property:"og:description",content:e.value.description}]});const g=[{name:"Constantin Briest",description:"CEO",avatar:{src:"/team/constantin.webp"}},{name:"Virginie Boireaux",description:"DG",avatar:{src:"/team/virginie.webp"}},{name:"Marie Besançon",description:"Buisness Affairs",avatar:{src:"https://placehold.co/300x400?text=TODO"}},{name:"Carla Alis",description:"Assistante à la distribution",avatar:{src:"https://placehold.co/300x400?text=TODO"}},{name:"Nina Phillips",description:"Marketing",avatar:{src:"https://placehold.co/300x400?text=TODO"}}],p=[{src:"/broadcasters/aragontv.png",alt:"Aragon TV logo"},{src:"/broadcasters/betv.jpg",alt:"Be TV logo"},{src:"/broadcasters/etbsat.png",alt:"ETB Sat logo"},{src:"/broadcasters/proximus.png",alt:"Proximus logo"},{src:"/broadcasters/radiocanada.jpg",alt:"Radio Canada logo"},{src:"/broadcasters/rtlcrime.png",alt:"RTL Crime logo"},{src:"/broadcasters/rts.jpg",alt:"RTS logo"},{src:"/broadcasters/telequebec.jpg",alt:"Télé Québeclogo"},{src:"/broadcasters/tf1.jpg",alt:"TF1 logo"},{src:"/broadcasters/rtlpassion.png",alt:"RTL Passion logo"},{src:"/broadcasters/rtlvi.png",alt:"RTL vi logo"},{src:"/broadcasters/tv5.jpg",alt:"TV5 logo"},{src:"/broadcasters/walterpresent.png",alt:"Walter Present logo"},{src:"/broadcasters/ylen.png",alt:"YLEN logo"}],m=[{src:"/productions/amedia.png",alt:"Amedia logo"},{src:"/productions/beaubourgstories.png",alt:"Beaubourg Stories logo"},{src:"/productions/bigbandstory.jpg",alt:"Big Band Story logo"},{src:"/productions/cropped.png",alt:"cropped logo"},{src:"/productions/elephant.png",alt:"elephant logo"},{src:"/productions/empreinte-digitale.png",alt:"empreinte digitale logo"},{src:"/productions/encompagniedeslamas.png",alt:"en compagnie des lamas logo"},{src:"/productions/n22.png",alt:"n22"},{src:"/productions/opengraph.jpg",alt:"opengraph logo"},{src:"/productions/storyplus.png",alt:"story plus logo"},{src:"/productions/unefille.png",alt:"une fille logo"},{src:"/productions/vigofilm.png",alt:"vigo film logo"}];return(z,Q)=>{const h=L,v=O,w=j,_=H,f=G,B=T,C=q;return o(),I(C,null,{default:n(()=>[s(h,{title:r(e).title,description:r(e).description,class:"py-[50px]"},null,8,["title","description"]),s(B,null,{default:n(()=>[s(w,{ui:{wrapper:"grid grid-cols-2 lg:grid-cols-5"}},{default:n(()=>[(o(),l(u,null,d(g,t=>s(v,{key:t.name,title:t.name,description:t.description,image:t.avatar,ui:{image:{wrapper:"aspect-[2/3]"}}},null,8,["title","description","image"])),64))]),_:1}),s(f,{class:"mt-32",title:"Production partners",align:"center"},{default:n(()=>[(o(),l(u,null,d(m,t=>s(_,{key:t.src,src:t.src,alt:t.alt,width:"50"},null,8,["src","alt"])),64))]),_:1}),s(f,{class:"mt-32",title:"Boradcasters partners",align:"center"},{default:n(()=>[(o(),l(u,null,d(p,t=>s(_,{key:t.src,src:t.src,alt:t.alt,width:"50"},null,8,["src","alt"])),64))]),_:1})]),_:1})]),_:1})}}});export{K as default};