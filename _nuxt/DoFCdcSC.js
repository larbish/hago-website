import{d as c,c as t,e as o,f as n,af as a,h as r,n as l}from"./BMpoVv3m.js";const i={key:0},d={key:1},u=c({__name:"Pictures",props:{cols:{type:Number,default:2}},setup(e){return(s,m)=>(t(),o("div",{class:l(["grid items-center justify-between space-x-4",`grid-cols-${e.cols}`])},[n("div",null,[a(s.$slots,"one")]),Number(e.cols)>1?(t(),o("div",i,[a(s.$slots,"two")])):r("",!0),Number(e.cols)>2?(t(),o("div",d,[a(s.$slots,"three")])):r("",!0)],2))}}),b=Object.assign(u,{__name:"Pictures"});export{b as default};