import{d as A,s as M,aH as g,aI as O,aJ as y,aK as R,aL as h,C as e,af as _,w as o,h as u,aM as x,aN as T,c as s,i as r,ah as k,f as m,t as v,e as w,ae as q,F as z,q as C,aO as E,aP as F,aQ as j,g as I,aa as J,al as K}from"./cqZ7rOCV.js";import{_ as Q,a as W}from"./B4xpKrJl.js";import G from"./ByBQcS-P.js";import{_ as X,a as Y}from"./_G4sfpG3.js";import"./UFkT48X9.js";import"./C-v3KzvZ.js";import"./Dnd51l0P.js";const Z={class:"text-gray-500 dark:text-gray-400"},tt={class:"flex flex-wrap items-center gap-3 mt-4"},et={key:1},ut=A({__name:"[slug]",async setup(at){var p;let a,i;const c=M(),{data:t}=([a,i]=g(()=>x(c.path,()=>C(c.path).findOne(),"$mHNnW6MtOg")),a=await a,i(),a);if(!t.value)throw O({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:d}=([a,i]=g(()=>x(`${c.path}-surround`,()=>C("/coproduction").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(E(c.path)),{default:()=>[]})),a=await a,i(),a);if(y({title:t.value.title,meta:[{property:"og:title",content:t.value.title},{name:"description",content:t.value.description},{property:"og:description",content:t.value.description}]}),(p=t.value.image)!=null&&p.src){const l=R();y({meta:[{property:"og:image",content:h(l.url,t.value.image.src)},{name:"twitter:image",content:h(l.url,t.value.image.src)}]})}return(l,f)=>{const U=F,$=J,b=K,B=Q,N=G,P=X,S=W,D=Y,H=j,L=T;return e(t)?(s(),_(L,{key:0},{default:o(()=>[r(B,{title:e(t).title,description:e(t).description},{headline:o(()=>[r(U,k(e(t).badge,{variant:"subtle"}),null,16),f[0]||(f[0]=m("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),m("time",Z,v(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[m("div",tt,[(s(!0),w(z,null,q(e(t).directors,(n,V)=>(s(),_(b,{key:V,to:n.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r($,k({ref_for:!0},n.avatar,{alt:n.name,size:"2xs"}),null,16,["alt"]),I(" "+v(n.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(H,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),_(D,{key:0,links:e(t).body.toc.links},null,8,["links"])):u("",!0)]),default:o(()=>[r(S,{prose:""},{default:o(()=>{var n;return[e(t)&&e(t).body?(s(),_(N,{key:0,value:e(t)},null,8,["value"])):u("",!0),(n=e(d))!=null&&n.length?(s(),w("hr",et)):u("",!0),r(P,{surround:e(d)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):u("",!0)}}});export{ut as default};
