/* empty css                      */(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const u=()=>{const r=document.querySelector(".advantages-list"),n=document.querySelectorAll(".egg"),o=document.querySelectorAll(".advantages-item");function s(){let t=Math.round(r.scrollLeft/o[0].offsetWidth);n.forEach((e,i)=>{e.classList.toggle("active",i===t)})}r.addEventListener("scroll",s),n.forEach((t,e)=>{t.addEventListener("click",()=>{r.scrollTo({left:e*o[0].offsetWidth,behavior:"smooth"})})}),s()},f=()=>{const r=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&(o.target.classList.add("show"),r.unobserve(o.target))})},{threshold:.2});document.querySelectorAll(".advantages-image1.animated-image, .advantages-image2.animated-image, .start-image.animated-image").forEach(n=>r.observe(n))},m=()=>{const r=new IntersectionObserver(n=>{n.forEach(o=>{o.isIntersecting&&(o.target.classList.add("show"),r.unobserve(o.target))})},{threshold:.2});document.querySelectorAll(".footer h3.animated-footer, .footer-nav.animated-footer, .footer-reserved.animated-footer").forEach(n=>r.observe(n))},g=()=>{const r=document.querySelector(".gallery-list"),n=document.querySelectorAll(".gallery-egg"),o=document.querySelectorAll(".gallery-item"),s=document.querySelector(".left-button"),t=document.querySelector(".right-button");if(!r||!o.length||!n.length)return;let e=0;const i=window.innerWidth<768;function d(){let l=Math.round(r.scrollLeft/o[0].offsetWidth);l=Math.max(0,Math.min(l,o.length-1)),n.forEach((c,a)=>c.classList.toggle("active",a===l)),e=l}r.addEventListener("scroll",d),i&&n.forEach((l,c)=>{l.addEventListener("click",()=>{e=c,r.scrollTo({left:c*o[0].offsetWidth,behavior:"smooth"})})}),s&&s.addEventListener("click",()=>{e>0&&(e-=1,r.scrollTo({left:e*o[0].offsetWidth,behavior:"smooth"}))}),t&&t.addEventListener("click",()=>{e<o.length-1&&(e+=1,r.scrollTo({left:e*o[0].offsetWidth,behavior:"smooth"}))}),d()},h=()=>{const r=document.querySelector(".mobile-nav"),n=document.querySelector(".nav-btn"),o=document.querySelector(".close-btn"),s=document.querySelector(".header"),t=i=>{n.style.display=i?"none":"block",o.style.display=i?"block":"none",r.style.display=i?"block":"none",window.innerWidth<1200&&(s.style.backdropFilter=i?"blur(40px)":"none")},e=()=>{window.scrollY>0?s.style.backdropFilter="blur(40px)":s.style.backdropFilter="none"};n.addEventListener("click",()=>t(!0)),o.addEventListener("click",()=>t(!1)),r.addEventListener("click",()=>t(!1)),window.addEventListener("scroll",()=>{window.innerWidth>=1200?e():s.style.backdropFilter=window.scrollY>0||r.style.display==="block"?"blur(40px)":"none"}),window.addEventListener("resize",()=>{window.innerWidth>=1200?e():r.style.display==="block"?s.style.backdropFilter="blur(40px)":s.style.backdropFilter="none"})};document.addEventListener("DOMContentLoaded",()=>{window.innerWidth<1200&&u(),h(),g(),f(),m()});
//# sourceMappingURL=commonHelpers.js.map
