import s from"./tiu_6wx6.js";import{d as c,aJ as n,aH as i,aI as p,C as o,c as l,af as u,h as m,aM as d,q as _}from"./DiTxd4Vd.js";import"./D2LvTx_V.js";import"./Dnd51l0P.js";const k=c({__name:"index",async setup(f){let t,a;n({script:[{src:"https://player.vimeo.com/api/player.js",defer:!0}]});const{data:e}=([t,a]=i(()=>d("home",()=>_("/").findOne())),t=await t,a(),t);if(!e.value)throw p({statusCode:404,statusMessage:"Page not found",fatal:!0});return n({title:e.value.title,titleTemplate:"",meta:[{property:"og:title",content:e.value.title},{name:"description",content:e.value.description},{property:"og:description",content:e.value.description}]}),(y,v)=>{const r=s;return o(e)?(l(),u(r,{key:0,value:o(e)},null,8,["value"])):m("",!0)}}});export{k as default};