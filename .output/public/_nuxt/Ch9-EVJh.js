import{_ as b,a as v,b as k,c as V}from"./O1jS-TbB.js";import{p as w}from"./DKepketX.js";import{r as d,o as x,t as r,v as a,L as o,x as _,M as h,z as s,N as m,O as l,P as t}from"./C4MlAiGu.js";const M={class:"c-video-border"},$={key:0},P={class:"flex justify-center"},A={key:0,class:"b-solid b-detail"},G=["src"],W={key:1},j={class:"flex justify-center"},B={key:0,class:"b-solid b-2 b-detail"},N=["src"],i={__name:"VideoBorder",props:{laptop:Object,mobile:Object},setup(n){const e=d(null),u=()=>{e.value.paused?e.value.play():e.value.pause()},c=d(!1);return x(()=>{window.innerWidth<768&&(c.value=!0)}),(p,g)=>(r(),a("div",M,[o(c)?(r(),a("div",$,[_("div",P,[n.mobile.src?(r(),a("div",A,[_("video",{ref_key:"videoPlayer",ref:e,src:n.mobile.src,class:"w-[330px] cursor-pointer m-[8px]",onClick:u,autoplay:"",muted:"",loop:""},null,8,G)])):h("",!0)])])):(r(),a("div",W,[_("div",j,[n.laptop.src?(r(),a("div",B,[_("video",{ref_key:"videoPlayer",ref:e,src:n.laptop.src,class:"w-[1100px] cursor-pointer m-[14px]",onClick:u,autoplay:"",muted:"",loop:""},null,8,N)])):h("",!0)])]))]))}},z={class:"afterAugust bg-primary"},C={key:0,class:"flex flex-col gap-y-[165px] pb-[165px]"},I={key:1,class:"flex flex-col gap-y-[360px] pb-[360px]"},D={__name:"AfterAugust",setup(n){const e=d(w.afterAugust),u=d("max-w-27ch"),c=d(!1),p=()=>{c.value=window.innerWidth<768};return x(()=>{p(),window.addEventListener("resize",p)}),(g,O)=>{const f=k,y=V;return r(),a("div",z,[o(c)?(r(),a("div",C,[s(b,m({...o(e).hero},{teaserMaxWidth:o(u)}),null,16,["teaserMaxWidth"]),s(i,l(t({...o(e).borderVideo.intro})),null,16),s(f,l(t({...o(e).imageSlider})),null,16),s(v,l(t({...o(e).scrollGallery})),null,16),s(i,l(t({...o(e).borderVideo.story})),null,16),s(y,m({...o(e).imageGallery},{sliceAmount:2}),null,16),s(i,l(t({...o(e).borderVideo.outro})),null,16)])):(r(),a("div",I,[s(b,l(t({...o(e).hero})),null,16),s(i,l(t({...o(e).borderVideo.intro})),null,16),s(f,l(t({...o(e).imageSlider})),null,16),s(v,l(t({...o(e).scrollGallery})),null,16),s(i,l(t({...o(e).borderVideo.story})),null,16),s(y,m({...o(e).imageGallery},{sliceAmount:3}),null,16),s(i,l(t({...o(e).borderVideo.outro})),null,16)]))])}}};export{D as default};