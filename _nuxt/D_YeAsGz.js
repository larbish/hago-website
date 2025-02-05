import{d as S,B as U,as as h,ao as j,ap as $,c,e as i,ac as s,g as m,w as r,h as g,n as l,C as a,f,i as x,t as v,F as L,aa as N,ab as C,ak as O,af as b,aU as V,k as z,aR as A,aY as F}from"./C8k-nlHl.js";import{r as w}from"./CINSXy76.js";import"./Dnd51l0P.js";const I=S({inheritAttrs:!1,__name:"LandingHero",props:{title:{type:String,default:void 0},description:{type:String,default:void 0},links:{type:Array,default:()=>[]},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(t){const o=t,d=U(()=>{const e=h("gap-16 sm:gap-y-24",o.orientation==="vertical"&&"flex flex-col",o.orientation==="horizontal"&&"grid lg:grid-cols-2 lg:items-center"),_=o.orientation==="vertical"?"text-center":"",p=h("mt-10 flex flex-wrap gap-x-6 gap-y-3",o.orientation==="vertical"&&"justify-center");return{wrapper:"py-24 sm:py-32 md:py-40 relative",container:e,base:_,headline:"mb-10",title:"text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-7xl",description:"mt-6 text-lg tracking-tight text-gray-600 dark:text-gray-300",links:p}}),{ui:n,attrs:u}=j("landing.hero",$(o,"ui"),d,$(o,"class"),!0);return(e,_)=>{const p=O,B=V;return i(),c("div",b({class:a(n).wrapper},a(u)),[s(e.$slots,"top"),m(B,{class:l(a(n).container)},{default:r(()=>{var k;return[g("div",{class:l(a(n).base)},[e.$slots.headline?(i(),c("div",{key:0,class:l(a(n).headline)},[s(e.$slots,"headline")],2)):f("",!0),g("h1",{class:l(a(n).title)},[s(e.$slots,"title",{},()=>[x(v(t.title),1)])],2),t.description||e.$slots.description?(i(),c("div",{key:1,class:l(a(n).description)},[s(e.$slots,"description",{},()=>[x(v(t.description),1)])],2)):f("",!0),(k=t.links)!=null&&k.length||e.$slots.links?(i(),c("div",{key:2,class:l(a(n).links)},[s(e.$slots,"links",{},()=>[(i(!0),c(L,null,N(t.links,(y,H)=>(i(),C(p,b({key:H,ref_for:!0},y,{onClick:y.click}),null,16,["onClick"]))),128))])],2)):f("",!0)],2),s(e.$slots,"default")]}),_:3},8,["class"]),s(e.$slots,"bottom")],16)}}}),R=Object.assign(I,{__name:"ULandingHero"}),D={};function E(t,o){const d=A,n=F,u=R;return i(),C(u,null,{headline:r(()=>[m(n,null,{default:r(()=>[m(d,{size:"lg",variant:"outline",class:"rounded-full py-1 px-3 badge"},{default:r(()=>[s(t.$slots,"headline",{},void 0,!0)]),_:3})]),_:3})]),title:r(()=>[g("div",null,[w(t.$slots,"title",{},void 0,!0)])]),description:r(()=>[w(t.$slots,"description",{unwrap:"p"},void 0,!0)]),links:r(()=>[s(t.$slots,"links",{},void 0,!0)]),_:3})}const Y=Object.assign(z(D,[["render",E],["__scopeId","data-v-93b02830"]]),{__name:"HomeHero"});export{Y as default};
