import{d as $,s as q,aG as f,aH as I,aI as y,aJ as M,aK as x,C as e,c as s,ae as c,w as o,h as _,aL as h,aM as T,i as r,ag as k,f as m,t as v,e as w,ad as z,F as E,q as C,aN as F,aO as O,aP as j,aQ as G,g as J,a9 as K,ak as Q}from"./BMpoVv3m.js";import{_ as W,a as X}from"./CSwwpXum.js";import Y from"./ZMV62u0I.js";import{_ as Z,a as tt}from"./CE_dA5pn.js";import"./CsB_J3mN.js";import"./Dnd51l0P.js";const et={class:"text-gray-500 dark:text-gray-400"},nt={class:"flex flex-wrap items-center gap-3 mt-4"},at={key:1},lt=$({__name:"[slug]",async setup(ot){var p;let a,i;const u=q(),{data:t}=([a,i]=f(()=>h(u.path,()=>C(u.path).findOne(),"$MAq8HiaDf3")),a=await a,i(),a);if(!t.value)throw I({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:d}=([a,i]=f(()=>h(`${u.path}-surround`,()=>C("/documentary").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(F(u.path)),{default:()=>[]})),a=await a,i(),a);if(y({title:t.value.title,meta:[{property:"og:title",content:t.value.title},{name:"description",content:t.value.description},{property:"og:description",content:t.value.description}]}),(p=t.value.image)!=null&&p.src){const l=M();y({meta:[{property:"og:image",content:x(l.url,t.value.image.src)},{name:"twitter:image",content:x(l.url,t.value.image.src)}]})}return(l,g)=>{const U=O,b=j,B=K,N=Q,P=W,S=Y,D=Z,A=X,H=tt,L=G,R=T;return e(t)?(s(),c(R,{key:0},{default:o(()=>[r(P,{title:e(t).title,description:e(t).description},{icon:o(()=>{var n;return[(n=e(t).image)!=null&&n.src?(s(),c(U,{key:0,src:e(t).image.src,alt:e(t).image.alt,width:"200"},null,8,["src","alt"])):_("",!0)]}),headline:o(()=>[r(b,k(e(t).badge,{variant:"subtle"}),null,16),g[0]||(g[0]=m("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),m("time",et,v(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[m("div",nt,[(s(!0),w(E,null,z(e(t).directors,(n,V)=>(s(),c(N,{key:V,to:n.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r(B,k({ref_for:!0},n.avatar,{alt:n.name,size:"2xs"}),null,16,["alt"]),J(" "+v(n.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(L,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),c(H,{key:0,links:e(t).body.toc.links},null,8,["links"])):_("",!0)]),default:o(()=>[r(A,{prose:""},{default:o(()=>{var n;return[e(t)&&e(t).body?(s(),c(S,{key:0,value:e(t)},null,8,["value"])):_("",!0),(n=e(d))!=null&&n.length?(s(),w("hr",at)):_("",!0),r(D,{surround:e(d)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):_("",!0)}}});export{lt as default};
