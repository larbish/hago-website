import u from"./CqBHSjbT.js";import f from"./Bp-knoj9.js";import{d as m,ao as p,c as o,f as g,g as r,ac as y,n as t,C as a,h as b,t as _,e as d}from"./C8k-nlHl.js";const h=m({__name:"ProseCode",props:{code:{type:String,required:!0},icon:{type:String,default:void 0},language:{type:String,default:void 0},hideHeader:{type:Boolean,default:!1},filename:{type:String,default:void 0},highlights:{type:Array,default:void 0},meta:{type:String,default:void 0}},setup(e){const s={wrapper:"[&>pre]:!rounded-t-none [&>pre]:!my-0 my-5",header:"flex items-center gap-1.5 border border-gray-200 dark:border-gray-700 border-b-0 relative rounded-t-md px-4 py-3 not-prose",icon:{base:""},button:{base:"absolute top-2.5 right-2.5"},filename:"text-gray-700 dark:text-gray-200 text-sm/6"},{ui:n}=p("content.prose.code",void 0,s,void 0,!0);return(i,x)=>{const c=u,l=f;return d(),o("div",{class:t(["relative",!!e.filename&&a(n).wrapper])},[e.filename&&!e.hideHeader?(d(),o("div",{key:0,class:t(a(n).header)},[r(c,{icon:e.icon,filename:e.filename,class:t(a(n).icon.base)},null,8,["icon","filename","class"]),b("span",{class:t(a(n).filename)},_(e.filename),3)],2)):g("",!0),r(l,{code:e.code,class:t(a(n).button.base)},null,8,["code","class"]),y(i.$slots,"default")],2)}}}),B=Object.assign(h,{__name:"ProseCode"});export{B as default};
