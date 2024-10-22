import{aj as I,ak as S,aV as E,d as C,am as B,an as m,B as g,aW as J,aX as M,aq as j,a2 as W,S as L,aa as U,aY as X,aZ as Y,a_ as P,a$ as Z,c as n,e as u,n as c,C as a,ag as d,i as H,ah as f,h as l,f as w,af as p,w as $,g as V,t as z,F as K,ae as Q,b0 as _,aR as ee,aP as te}from"./cqZ7rOCV.js";const ae={wrapper:"inline-flex flex-row-reverse justify-end",ring:"ring-2 ring-white dark:ring-gray-900",margin:"-me-1.5 first:me-0"},G=I(S.ui.strategy,S.ui.avatar,E),re=I(S.ui.strategy,S.ui.avatarGroup,ae),se=C({inheritAttrs:!1,props:{size:{type:String,default:null,validator(e){return Object.keys(G.size).includes(e)}},max:{type:Number,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e,{slots:o}){const{ui:s,attrs:v}=B("avatarGroup",m(e,"ui"),re,m(e,"class")),r=g(()=>J(o)),i=g(()=>typeof e.max=="string"?parseInt(e.max,10):e.max),y=g(()=>r.value.map((b,x)=>{const t={};return!e.max||i.value&&x<i.value?(e.size&&(t.size=e.size),t.class=b.props.class||"",t.class=M(j(t.class,s.value.ring,s.value.margin),t.class),W(b,t)):i.value!==void 0&&x===i.value?L(U,{size:e.size||G.default.size,text:`+${r.value.length-i.value}`,class:j(s.value.ring,s.value.margin)}):null}).filter(Boolean).reverse());return()=>L("div",{class:s.value.wrapper,...v.value},y.value)}}),ne=["datetime"],le=C({inheritAttrs:!1,__name:"BlogPost",props:{...X,title:{type:String,default:void 0},description:{type:String,default:void 0},date:{type:[String,Date],default:void 0},image:{type:[String,Object],default:void 0},badge:{type:Object,default:void 0},authors:{type:Array,default:void 0},orientation:{type:String,default:"vertical"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const o=Y(),s=e,v=g(()=>({wrapper:j("relative group flex flex-col w-full gap-y-6",s.orientation==="horizontal"&&(s.image||o.image)?"lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-center":void 0),image:{wrapper:"ring-1 ring-gray-200 dark:ring-gray-800 relative overflow-hidden aspect-[16/9] w-full rounded-lg pointer-events-none",base:"object-cover object-top w-full h-full transform transition-transform duration-200 group-hover:scale-105"},container:"flex flex-col justify-between flex-1",inner:"flex-1",badge:{wrapper:"mb-3",base:""},title:"text-gray-900 dark:text-white text-xl font-semibold truncate group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200",description:"text-base text-gray-500 dark:text-gray-400 mt-1",date:"text-sm text-gray-500 dark:text-gray-400 font-medium pointer-events-none",authors:{wrapper:"relative flex items-center gap-x-3 mt-4",avatar:{base:"relative ring-1 lg:hover:scale-105 lg:hover:ring-primary-500 dark:lg:hover:ring-primary-400 transition-transform",size:"xs"}}})),{ui:r,attrs:i}=B("blog.post",m(s,"ui"),v,m(s,"class"),!0),y=g(()=>P(s)),b=g(()=>(s.title||o.title&&Z(o.title())||"Post link").trim()),x=g(()=>{if(s.date)try{return new Date(s.date).toISOString()}catch{return}});return(t,h)=>{var A;const D=_,O=ee,F=te,R=U,T=se;return n(),u("article",f({class:a(r).wrapper},a(i)),[e.image||t.$slots.image?(n(),u("div",{key:0,class:c(a(r).image.wrapper)},[d(t.$slots,"image",{},()=>[H(D,f(typeof e.image=="string"?{src:e.image,alt:e.title}:{alt:e.title,...e.image},{class:a(r).image.base}),null,16,["class"])])],2)):l("",!0),w("div",{class:c(a(r).container)},[w("div",{class:c(a(r).inner)},[t.to?(n(),p(O,f({key:0,"aria-label":a(b)},a(y),{class:"focus:outline-none",tabindex:"-1"}),{default:$(()=>h[0]||(h[0]=[w("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:1},16,["aria-label"])):l("",!0),e.badge||t.$slots.badge?(n(),u("div",{key:1,class:c(a(r).badge.wrapper)},[d(t.$slots,"badge",{},()=>[e.badge?(n(),p(F,f({key:0},{variant:"subtle",...e.badge},{class:a(r).badge.base}),null,16,["class"])):l("",!0)])],2)):l("",!0),e.title||t.$slots.title?(n(),u("h2",{key:2,class:c(a(r).title)},[d(t.$slots,"title",{},()=>[V(z(e.title),1)])],2)):l("",!0),e.description||t.$slots.description?(n(),u("div",{key:3,class:c(a(r).description)},[d(t.$slots,"description",{},()=>[V(z(e.description),1)])],2)):l("",!0),d(t.$slots,"default")],2),(A=e.authors)!=null&&A.length||t.$slots.authors||e.date||t.$slots.date?(n(),u("div",{key:0,class:c(a(r).authors.wrapper)},[d(t.$slots,"authors",{},()=>{var N;return[(N=e.authors)!=null&&N.length?(n(),p(T,{key:0},{default:$(()=>[(n(!0),u(K,null,Q(e.authors,(k,q)=>(n(),p(R,f({key:q,alt:k.name,class:a(r).authors.avatar.base,ref_for:!0},{size:a(r).authors.avatar.size,...k.avatar}),{default:$(()=>[k.to?(n(),p(O,f({key:0,ref_for:!0},{target:"_blank",...a(P)(k)},{class:"focus:outline-none",tabindex:"-1"}),{default:$(()=>h[1]||(h[1]=[w("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1)])),_:2},1040)):l("",!0)]),_:2},1040,["alt","class"]))),128))]),_:1})):l("",!0)]}),d(t.$slots,"date",{},()=>[e.date?(n(),u("time",{key:0,datetime:a(x),class:c(a(r).date)},z(e.date),11,ne)):l("",!0)])],2)):l("",!0)],2)],16)}}}),oe=C({inheritAttrs:!1,__name:"BlogList",props:{orientation:{type:String,default:"horizontal"},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:()=>({})}},setup(e){const o=e,s=g(()=>({wrapper:{horizontal:"flex flex-col lg:grid lg:grid-cols-3 gap-x-8 gap-y-16",vertical:"flex flex-col gap-y-16 w-full"}[o.orientation]})),{ui:v,attrs:r}=B("blog.list",m(o,"ui"),s,m(o,"class"),!0);return(i,y)=>(n(),u("div",f({class:a(v).wrapper},a(r)),[d(i.$slots,"default")],16))}});export{oe as _,le as a};
