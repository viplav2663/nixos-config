import{r as a}from"./icon-alert--q0yLTMi.js";import{a as s}from"./authService-CGVTYYkM.js";import{l as e}from"./index-DQvfDEB6.js";const i=async()=>{await new Promise((s=>{a.appsReady?s():m.once("appsReady",s)}))},o=async()=>{a.appsReady=!1,m.appView.loadWidgets(),await i()},t=async()=>{await n((async()=>{await s.onSuccessfulUserLogin(),await o()}),1e4)},c=async()=>{await n((async()=>{await e()}),5e3)},n=async(a,s)=>{const e=setTimeout((()=>{window.location.reload()}),s);await a(),clearTimeout(e)};export{c as a,t as c,o as l,i as w};