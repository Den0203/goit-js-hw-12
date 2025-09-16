import{a as S,S as q,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))u(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const E="52302073-d61d50c7fb08e45dcd07f0efb",R="https://pixabay.com/api/";async function h(s,r){try{return(await S.get(R,{params:{key:E,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}catch(e){throw console.error("Error fetching images:",e),e}}const g=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".load-more"),B=new q(".gallery a");function y(s){const r=s.map(e=>`
      <ul class="wrapper">
    <li class="gallery-item">
      <a href="${e.largeImageURL}">
        <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${e.likes}</p>
        <p>Views: ${e.views}</p>
        <p>Comments: ${e.comments}</p>
        <p>Downloads: ${e.downloads}</p>
      </div>
    </li>
    </ul>
  `).join("");g.insertAdjacentHTML("beforeend",r),B.refresh()}function P(){g.innerHTML=""}function w(){m.classList.add("visible")}function a(){m.classList.remove("visible")}function L(){p.classList.remove("hidden")}function b(){p.classList.add("hidden")}const v=document.querySelector(".form"),f=v.querySelector("input[name='search-text']"),$=document.querySelector(".load-more");let l="",i=1,d=0;v.addEventListener("submit",async s=>{s.preventDefault();const r=f.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}l=r,i=1,P(),b(),w();try{const e=await h(l,i);if(a(),e.hits.length===0){n.info({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ff4d4f"});return}d=e.totalHits,y(e.hits),d>e.hits.length&&L(),f.value=""}catch{a(),n.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight",backgroundColor:"#ff4d4f"})}});$.addEventListener("click",async()=>{i+=1,b(),w();try{const s=await h(l,i);a(),y(s.hits);const{height:r}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"}),i*15<d?L():n.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}catch{a(),n.error({title:"Error",message:"Something went wrong while fetching images.",position:"topRight"})}});
//# sourceMappingURL=index.js.map
