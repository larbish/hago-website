import{d as A,s as H,aG as f,aH as T,aI as y,aJ as q,aK as x,C as e,c as s,ae as i,w as a,h as u,aL as h,aM as z,i as r,ag as k,f as d,t as v,e as w,ad as E,F,q as C,aN as I,aO as M,aP as O,g as j,a9 as G,ak as J}from"./DNFxQUlz.js";import{_ as K,a as Q}from"./CJDkJqmv.js";import X from"./vf-iSADW.js";import{_ as Y,a as W}from"./BP5IzLGg.js";import"./BOwookox.js";import"./Dnd51l0P.js";const Z={class:"text-gray-500 dark:text-gray-400"},tt={class:"flex flex-wrap items-center gap-3 mt-4"},et={key:1},it=A({__name:"[slug]",async setup(nt){var m;let n,_;const c=H(),{data:t}=([n,_]=f(()=>h(c.path,()=>C(c.path).findOne(),"$Qh4t3Yy4IX")),n=await n,_(),n);if(!t.value)throw T({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:p}=([n,_]=f(()=>h(`${c.path}-surround`,()=>C("/scripted").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(I(c.path)),{default:()=>[]})),n=await n,_(),n);if(y({title:t.value.title,meta:[{property:"og:title",content:t.value.title},{name:"description",content:t.value.description},{property:"og:description",content:t.value.description}]}),(m=t.value.image)!=null&&m.src){const l=q();y({meta:[{property:"og:image",content:x(l.url,t.value.image.src)},{name:"twitter:image",content:x(l.url,t.value.image.src)}]})}return(l,g)=>{const U=M,b=G,B=J,P=K,S=X,N=Y,$=Q,D=W,L=O,R=z;return e(t)?(s(),i(R,{key:0},{default:a(()=>[r(P,{title:e(t).title,description:e(t).description},{headline:a(()=>[r(U,k(e(t).badge,{variant:"subtle"}),null,16),g[0]||(g[0]=d("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),d("time",Z,v(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:a(()=>[d("div",tt,[(s(!0),w(F,null,E(e(t).directors,(o,V)=>(s(),i(B,{key:V,to:o.to,color:"white",target:"_blank",size:"sm"},{default:a(()=>[r(b,k({ref_for:!0},o.avatar,{alt:o.name,size:"2xs"}),null,16,["alt"]),j(" "+v(o.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(L,null,{right:a(()=>[e(t).body&&e(t).body.toc?(s(),i(D,{key:0,links:e(t).body.toc.links},null,8,["links"])):u("",!0)]),default:a(()=>[r($,{prose:""},{default:a(()=>{var o;return[e(t)&&e(t).body?(s(),i(S,{key:0,value:e(t)},null,8,["value"])):u("",!0),(o=e(p))!=null&&o.length?(s(),w("hr",et)):u("",!0),r(N,{surround:e(p)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):u("",!0)}}});export{it as default};
