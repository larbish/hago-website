import{l as g,al as p,am as d,d as m,ao as f,ap as b,D as u,aZ as v,as as x,c as y,e as k,ai as h,k as S,t as _,aj as z,b8 as A,r as C,b9 as E,o as w}from"./EEMAFwUn.js";const j={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},o=p(d.ui.strategy,d.ui.kbd,j),I=m({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>o.default.size,validator(e){return Object.keys(o.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:t,attrs:a}=f("kbd",b(e,"ui"),o),n=u(()=>v(x(t.value.base,t.value.size[e.size],t.value.padding,t.value.rounded,t.value.font,t.value.background,t.value.ring),e.class));return{ui:t,attrs:a,kbdClass:n}}});function $(e,t,a,n,s,r){return y(),k("kbd",z({class:e.kbdClass},e.attrs),[h(e.$slots,"default",{},()=>[S(_(e.value),1)])],16)}const M=g(I,[["render",$]]),N=()=>{const e=u(()=>navigator&&navigator.userAgent&&navigator.userAgent.match(/Macintosh;/)),t=C(" "),a=E(),n=u(()=>{var i,l,c;const s=(i=a.value)==null?void 0:i.tagName,r=(l=a.value)==null?void 0:l.contentEditable;return s==="INPUT"||s==="TEXTAREA"||r==="true"||r==="plaintext-only"?((c=a.value)==null?void 0:c.name)||!0:!1});return w(()=>{t.value=e.value?"⌘":"Ctrl"}),{macOS:e,metaSymbol:t,activeElement:a,usingInput:n}},B=A(N);export{M as _,B as u};
