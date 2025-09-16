import{a as u,S as m,i as f}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",h="52314850-74672a1c95493b5a9d1e8462c";function y(r){const o=new URLSearchParams({key:h,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return u.get(`${p}?${o}`)}const a=document.querySelector(".gallery"),g=new m(".gallery-item .link",{captionsData:"alt",captionDelay:250});function L(r){const o=r.map(({webformatURL:i,largeImageURL:s,tags:e,likes:t=0,views:n=0,comments:l=0,downloads:d=0})=>`
      <li class="gallery-item">
        <a class="link" href="${s}">
          <img src="${i}" alt="${e}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${t}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${n}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${l}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${d}</p>
        </div>
      </li>
  `).join("");a.innerHTML=o,g.refresh()}function v(){a.innerHTML=""}function b(){a.insertAdjacentHTML("beforebegin",'<span class="loader">Loading</span>')}function w(){const r=document.querySelector(".loader");r.length<0||r.remove()}const c=document.querySelector(".form");c.addEventListener("submit",$);function $(r){r.preventDefault(),b();const{["search-text"]:o}=r.target.elements;y(o.value.trim()).then(({data:i})=>{L(i.hits)}).catch(i=>{v(),f.error({message:i.message,position:"topRight"})}).finally(()=>{w()}),c.reset()}
//# sourceMappingURL=index.js.map
