import{d as A,s as H,aG as f,aH as T,aI as y,aJ as j,aK as x,C as e,c as s,ae as c,w as o,h as i,aL as h,aM as q,i as r,ag as w,f as m,t as k,e as v,ad as z,F as E,q as C,aN as F,aO as M,aP as O,aQ as Q,g as G,a9 as J,ak as K}from"./BMpoVv3m.js";import{_ as X,a as Y}from"./CSwwpXum.js";import W from"./ZMV62u0I.js";import{_ as Z,a as tt}from"./CE_dA5pn.js";import"./CsB_J3mN.js";import"./Dnd51l0P.js";const et={class:"text-gray-500 dark:text-gray-400"},nt={class:"flex flex-wrap items-center gap-3 mt-4"},at={key:1},lt=A({__name:"[slug]",async setup(ot){var d;let a,_;const u=H(),{data:t}=([a,_]=f(()=>h(u.path,()=>C(u.path).findOne(),"$Qh4t3Yy4IX")),a=await a,_(),a);if(!t.value)throw T({statusCode:404,statusMessage:"Post not found",fatal:!0});const{data:p}=([a,_]=f(()=>h(`${u.path}-surround`,()=>C("/scripted").where({_extension:"md"}).without(["body","excerpt"]).sort({date:-1}).findSurround(F(u.path)),{default:()=>[]})),a=await a,_(),a);if(y({title:t.value.title,meta:[{property:"og:title",content:t.value.title},{name:"description",content:t.value.description},{property:"og:description",content:t.value.description}]}),(d=t.value.image)!=null&&d.src){const l=j();y({meta:[{property:"og:image",content:x(l.url,t.value.image.src)},{name:"twitter:image",content:x(l.url,t.value.image.src)}]})}return(l,g)=>{const U=M,b=O,B=J,N=K,P=X,S=W,D=Z,I=Y,L=tt,R=Q,V=q;return e(t)?(s(),c(V,{key:0},{default:o(()=>[r(P,{title:e(t).title,description:e(t).description,ui:{icon:{wrapper:"w-full sm:w-auto flex justify-center"}}},{icon:o(()=>{var n;return[(n=e(t).image)!=null&&n.src?(s(),c(U,{key:0,src:e(t).image.src,alt:e(t).image.alt,width:"300"},null,8,["src","alt"])):i("",!0)]}),headline:o(()=>[r(b,w(e(t).badge,{variant:"subtle"}),null,16),g[0]||(g[0]=m("span",{class:"text-gray-500 dark:text-gray-400"},"·",-1)),m("time",et,k(new Date(e(t).date).toLocaleDateString("en",{year:"numeric",month:"short",day:"numeric"})),1)]),default:o(()=>[m("div",nt,[(s(!0),v(E,null,z(e(t).directors,(n,$)=>(s(),c(N,{key:$,to:n.to,color:"white",target:"_blank",size:"sm"},{default:o(()=>[r(B,w({ref_for:!0},n.avatar,{alt:n.name,size:"2xs"}),null,16,["alt"]),G(" "+k(n.name),1)]),_:2},1032,["to"]))),128))])]),_:1},8,["title","description"]),r(R,null,{right:o(()=>[e(t).body&&e(t).body.toc?(s(),c(L,{key:0,links:e(t).body.toc.links},null,8,["links"])):i("",!0)]),default:o(()=>[r(I,{prose:""},{default:o(()=>{var n;return[e(t)&&e(t).body?(s(),c(S,{key:0,value:e(t)},null,8,["value"])):i("",!0),(n=e(p))!=null&&n.length?(s(),v("hr",at)):i("",!0),r(D,{surround:e(p)},null,8,["surround"])]}),_:1})]),_:1})]),_:1})):i("",!0)}}});export{lt as default};