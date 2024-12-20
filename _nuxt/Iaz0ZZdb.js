import{_ as j,a as L}from"./DTXp9Cme.js";import{_ as P,a as A}from"./05ek8LW8.js";import{d as y,B as T,am as k,an as b,c as o,e as i,n as x,C as n,t as S,h as N,f as U,ag as V,ah as M,aH as R,aI as E,aJ as O,af as F,w as r,aM as I,aN as q,i as s,ae as d,F as u,q as H,aP as $}from"./Dv8kMk5K.js";const D=y({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(l){const e=l,c=T(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[e.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:a,attrs:g}=k("landing.logos",b(e,"ui"),c,b(e,"class"),!0);return(p,m)=>(o(),i("div",M({class:n(a).wrapper},n(g)),[l.title?(o(),i("h2",{key:0,class:x(n(a).title)},S(l.title),3)):N("",!0),U("div",{class:x(n(a).images)},[V(p.$slots,"default")],2)],16))}}),z=Object.assign(D,{__name:"ULandingLogos"}),K=y({__name:"team",async setup(l){let e,c;const{data:a}=([e,c]=R(()=>I("team",()=>H("/team").findOne())),e=await e,c(),e);if(!a.value)throw E({statusCode:404,statusMessage:"Page not found",fatal:!0});O({title:a.value.title,meta:[{property:"og:title",content:a.value.title},{name:"description",content:a.value.description},{property:"og:description",content:a.value.description}]});const g=[{name:"Constantin Briest",description:"CEO & co-founder",avatar:{src:"/team/constantin.jpeg",alt:"Constantin Briest"}},{name:"Virginie Boireaux",description:"MG & co-founder",avatar:{src:"/team/virginie.webp",alt:"Virginie Boireaux"}},{name:"Marie Besançon",description:"Buisness Affairs",avatar:{src:"/team/marie.jpeg",alt:"Marie Besançon"}},{name:"Carla Alis",description:"Administrative & Finance Assistant",avatar:{src:"/team/carla.jpeg",alt:"Carla Alis"}},{name:"Nina Phillips",description:"Marketing & Communication",avatar:{src:"/team/nina.jpeg",alt:"Nina Phillips"}}],p=[{src:"/broadcasters/aragontv.png",alt:"Aragon TV logo"},{src:"/broadcasters/betv.jpg",alt:"Be TV logo"},{src:"/broadcasters/etbsat.png",alt:"ETB Sat logo"},{src:"/broadcasters/proximus.png",alt:"Proximus logo"},{src:"/broadcasters/radiocanada.jpg",alt:"Radio Canada logo"},{src:"/broadcasters/rtlcrime.png",alt:"RTL Crime logo"},{src:"/broadcasters/rts.jpg",alt:"RTS logo"},{src:"/broadcasters/telequebec.jpg",alt:"Télé Québeclogo"},{src:"/broadcasters/tf1.jpg",alt:"TF1 logo"},{src:"/broadcasters/rtlpassion.png",alt:"RTL Passion logo"},{src:"/broadcasters/rtlvi.png",alt:"RTL vi logo"},{src:"/broadcasters/tv5.jpg",alt:"TV5 logo"},{src:"/broadcasters/walterpresent.png",alt:"Walter Present logo"},{src:"/broadcasters/ylen.png",alt:"YLEN logo"}],m=[{src:"/productions/amedia.png",alt:"Amedia logo"},{src:"/productions/beaubourgstories.png",alt:"Beaubourg Stories logo"},{src:"/productions/bigbandstory.jpg",alt:"Big Band Story logo"},{src:"/productions/cropped.png",alt:"cropped logo"},{src:"/productions/elephant.png",alt:"elephant logo"},{src:"/productions/empreinte-digitale.png",alt:"empreinte digitale logo"},{src:"/productions/encompagniedeslamas.png",alt:"en compagnie des lamas logo"},{src:"/productions/n22.png",alt:"n22"},{src:"/productions/opengraph.jpg",alt:"opengraph logo"},{src:"/productions/storyplus.png",alt:"story plus logo"},{src:"/productions/unefille.png",alt:"une fille logo"},{src:"/productions/vigofilm.png",alt:"vigo film logo"}];return(G,J)=>{const v=j,B=A,h=P,_=$,f=z,C=L,w=q;return o(),F(w,null,{default:r(()=>[s(v,{title:n(a).title,description:n(a).description,class:"py-[50px]"},null,8,["title","description"]),s(C,null,{default:r(()=>[s(h,{ui:{wrapper:"grid grid-cols-2 lg:grid-cols-5"}},{default:r(()=>[(o(),i(u,null,d(g,t=>s(B,{key:t.name,title:t.name,description:t.description,image:t.avatar,ui:{image:{wrapper:"aspect-[2/3]"}}},null,8,["title","description","image"])),64))]),_:1}),s(f,{class:"mt-32",title:"Production partners",align:"center"},{default:r(()=>[(o(),i(u,null,d(m,t=>s(_,{key:t.src,src:t.src,alt:t.alt,width:"50"},null,8,["src","alt"])),64))]),_:1}),s(f,{class:"mt-32",title:"Boradcasters partners",align:"center"},{default:r(()=>[(o(),i(u,null,d(p,t=>s(_,{key:t.src,src:t.src,alt:t.alt,width:"50"},null,8,["src","alt"])),64))]),_:1})]),_:1})]),_:1})}}});export{K as default};
