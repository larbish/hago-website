import{_ as B,a as C}from"./Do2GT0l2.js";import{_ as O,a as b}from"./DTrJPLn7.js";import{d as g,D,ao as U,ap as u,c as l,e as d,n as _,E as n,t as A,g as L,f as P,ai as S,aj as $,aJ as N,aK as j,aL as E,ah as M,w as c,aN as T,aO as V,h as t,ag as F,F as I,s as q,ab as z}from"./1bAB61Xb.js";const G=g({inheritAttrs:!1,__name:"LandingLogos",props:{title:{type:String,default:void 0},align:{type:String,default:"center"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(i){const a=i,o=D(()=>({wrapper:{center:"text-center",right:"text-right",left:"text-left"}[a.align],title:"text-lg font-semibold leading-8 text-gray-900 dark:text-white",images:"mx-auto mt-10 flex flex-wrap items-center justify-between gap-8"})),{ui:e,attrs:p}=U("landing.logos",u(a,"ui"),o,u(a,"class"),!0);return(m,f)=>(l(),d("div",$({class:n(e).wrapper},n(p)),[i.title?(l(),d("h2",{key:0,class:_(n(e).title)},A(i.title),3)):L("",!0),P("div",{class:_(n(e).images)},[S(m.$slots,"default")],2)],16))}}),R=g({__name:"team",async setup(i){let a,o;const{data:e}=([a,o]=N(()=>T("team",()=>q("/team").findOne())),a=await a,o(),a);if(!e.value)throw j({statusCode:404,statusMessage:"Page not found",fatal:!0});E({title:e.value.title,ogTitle:e.value.title,description:e.value.description,ogDescription:e.value.description});const p=[{name:"Constantin Briest",description:"CEO",avatar:{src:"/team/constantin.webp"}},{name:"Virginie Boireaux",description:"DG",avatar:{src:"/team/virginie.webp"}},{name:"Marie Besançon",description:"Buisness Affairs",avatar:{src:"https://placehold.co/300x400?text=TODO"}},{name:"Carla Alis",description:"Assistante à la distribution",avatar:{src:"https://placehold.co/300x400?text=TODO"}},{name:"Nina Phillips",description:"Marketing",avatar:{src:"https://placehold.co/300x400?text=TODO"}}];return(m,f)=>{const h=B,x=b,w=O,s=z,k=G,v=C,y=V;return l(),M(y,null,{default:c(()=>[t(h,{title:n(e).title,description:n(e).description,class:"py-[50px]"},null,8,["title","description"]),t(v,null,{default:c(()=>[t(w,{ui:{wrapper:"grid grid-cols-2 lg:grid-cols-5"}},{default:c(()=>[(l(),d(I,null,F(p,r=>t(x,{key:r.name,title:r.name,description:r.description,image:r.avatar,ui:{image:{wrapper:"aspect-[2/3]"}}},null,8,["title","description","image"])),64))]),_:1}),t(k,{class:"mt-32",title:"We work with them",align:"center"},{default:c(()=>[t(s,{name:"i-simple-icons-github",class:"w-10 h-10 flex-shrink-0"}),t(s,{name:"i-simple-icons-discord",class:"w-10 h-10 flex-shrink-0"}),t(s,{name:"i-simple-icons-x",class:"w-10 h-10 flex-shrink-0"}),t(s,{name:"i-simple-icons-instagram",class:"w-10 h-10 flex-shrink-0"}),t(s,{name:"i-simple-icons-linkedin",class:"w-10 h-10 flex-shrink-0"}),t(s,{name:"i-simple-icons-facebook",class:"w-10 h-10 flex-shrink-0"})]),_:1})]),_:1})]),_:1})}}});export{R as default};
