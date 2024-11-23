import{a as W,i as q,A as E,g as h,S as j,b as B}from"./assets/vendor-BBS8Dfhk.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=a(t);fetch(t.href,e)}})();const S="light-favicon.svg",J="dark-favicon.svg",v=document.querySelector(".theme-checkbox"),w=document.querySelector("body"),g=document.querySelector('link[rel="icon"]');let b=!1;const C=localStorage.getItem("dark-theme");function D(){C==="true"?(w.classList.add("dark-theme"),g.href=J,v.checked=!0):(w.classList.remove("dark-theme"),g.href=S,v.checked=!1)}D();v.addEventListener("change",()=>{w.classList.toggle("dark-theme"),b=!b,b?(localStorage.setItem("dark-theme","true"),g.href=J):(localStorage.removeItem("dark-theme"),g.href=S)});const G="/team-project-blendet_09/assets/power-D8v261SK.webp",I="/team-project-blendet_09/assets/power-2x-qGSdex4r.webp",N="/team-project-blendet_09/assets/power-min-DHN4sxI7.jpg",T="/team-project-blendet_09/assets/power-2x-min-C8O7L-3c.jpg",R="/team-project-blendet_09/assets/mimino-5WcD388n.webp",M="/team-project-blendet_09/assets/mimino-2x-Ba-CZ-9u.webp",P="/team-project-blendet_09/assets/mimino-min-Cea-nbd9.jpg",O="/team-project-blendet_09/assets/mimino-2x-min-DdJvPJkX.jpg",$="/team-project-blendet_09/assets/vyshyvanka-DwJ4vP4u.webp",A="/team-project-blendet_09/assets/vyshyvanka-2x-BKCmYviZ.webp",K="/team-project-blendet_09/assets/vyshyvanka-min-y2QnJMVg.jpg",X="/team-project-blendet_09/assets/vyshyvanka-2x-min-D_Alk9e4.jpg",H="/team-project-blendet_09/assets/green-BXBvmxpb.webp",Q="/team-project-blendet_09/assets/green-2x-BXH4WKTp.webp",Z="/team-project-blendet_09/assets/green-min-CsVqii2E.jpg",F="/team-project-blendet_09/assets/green-2x-min-Dr77DX0y.jpg",V="/team-project-blendet_09/assets/wallet-BG686fSw.webp",Y="/team-project-blendet_09/assets/wallet-2x-BJo8Iqwe.webp",U="/team-project-blendet_09/assets/wallet-min-WRM1WUI8.jpg",z="/team-project-blendet_09/assets/wallet-2x-min-rwuvK4al.jpg",ee="/team-project-blendet_09/assets/chego-kTjtJvCP.webp",te="/team-project-blendet_09/assets/chego-2x-BIYQwmMK.webp",se="/team-project-blendet_09/assets/chego-min-DGm3HGgu.jpg",oe="/team-project-blendet_09/assets/chego-2x-min-DZ8pIicM.jpg",re="/team-project-blendet_09/assets/energy-DPn3SP4j.webp",ae="/team-project-blendet_09/assets/energy-2x-B_s1YTWE.webp",ne="/team-project-blendet_09/assets/energy-min-LwbX2IV5.jpg",ce="/team-project-blendet_09/assets/energy-2x-min-BNwxXkJU.jpg",ie="/team-project-blendet_09/assets/fruitbox-BCP33x6e.webp",le="/team-project-blendet_09/assets/fruitbox-2x-c2YO1ZGj.webp",pe="/team-project-blendet_09/assets/fruitbox-min-NhFWfZ_m.jpg",de="/team-project-blendet_09/assets/fruitbox-2x-min-9cEX_XRK.jpg",me="/team-project-blendet_09/assets/english-JJvQ0KRM.webp",ge="/team-project-blendet_09/assets/english-2x-Cku1kiBg.webp",be="/team-project-blendet_09/assets/english-min-BlWWQWj8.jpg",xe="/team-project-blendet_09/assets/english-2x-min-C3MAOs2u.jpg",ue="/team-project-blendet_09/assets/starlight-D5BGdaC7.webp",ye="/team-project-blendet_09/assets/starlight-2x-0Qd4atD0.webp",he="/team-project-blendet_09/assets/starlight-min-C4yRWEpc.jpg",je="/team-project-blendet_09/assets/starlight-2x-min-DckbGWca.jpg",_=[{images:{webp:{"1x":G,"2x":I},jpg:{"1x":N,"2x":T}},skills:"React, JavaScript, Node JS, Git",title:"power pulse webservice"},{images:{webp:{"1x":R,"2x":M},jpg:{"1x":P,"2x":O}},skills:"React, JavaScript, Node JS, Git",title:"mimino website"},{images:{webp:{"1x":$,"2x":A},jpg:{"1x":K,"2x":X}},skills:"React, JavaScript, Node JS, Git",title:"vyshyvanka vibes Landing Page"},{images:{webp:{"1x":H,"2x":Q},jpg:{"1x":Z,"2x":F}},skills:"React, JavaScript, Node JS, Git",title:"green harvest online store"},{images:{webp:{"1x":V,"2x":Y},jpg:{"1x":U,"2x":z}},skills:"React, JavaScript, Node JS, Git",title:"wallet webservice"},{images:{webp:{"1x":ee,"2x":te},jpg:{"1x":se,"2x":oe}},skills:"React, JavaScript, Node JS, Git",title:"chego jewelry website"},{images:{webp:{"1x":re,"2x":ae},jpg:{"1x":ne,"2x":ce}},skills:"React, JavaScript, Node JS, Git",title:"energy flow webservice"},{images:{webp:{"1x":ie,"2x":le},jpg:{"1x":pe,"2x":de}},skills:"React, JavaScript, Node JS, Git",title:"fruitbox online store"},{images:{webp:{"1x":me,"2x":ge},jpg:{"1x":be,"2x":xe}},skills:"React, JavaScript, Node JS, Git",title:"english excellence webservice"},{images:{webp:{"1x":ue,"2x":ye},jpg:{"1x":he,"2x":je}},skills:"React, JavaScript, Node JS, Git",title:"starlight studio landing page"}],ve="/team-project-blendet_09/assets/sprite-CMHK1lie.svg",f=document.querySelector(".projects-list"),l=document.querySelector(".projects-load-btn");let p=0;const L=(s,o)=>{const a=s+o,r=_.slice(s,a),t=r.map(e=>`
    <li class="projects-item">
      <picture>
        <source class="projects-item-img" srcset="${e.images.webp["1x"]} 1x, ${e.images.webp["2x"]} 2x" type="image/webp">
        <source class="projects-item-img" srcset="${e.images.jpg["1x"]} 1x, ${e.images.jpg["2x"]} 2x" type="image/jpeg">
        <img class="projects-item-img" src="${e.images.jpg["1x"]}" alt="${e.title}">
      </picture>
      <p class="projects-item-skills">${e.skills}</p>
      <div class="projects-item-bottom">
        <h3 class="projects-item-title">${e.title}</h3>
        <a href="https://github.com/daniilbelik94/team-project-blendet_09" target="_blank" class="projects-item-btn">
          VISIT
          <svg class="projects-item-btn-icon">
            <use href="${ve}#icon-arrow-visit"></use>
          </svg>
        </a>
      </div>
    </li>
  `).join("");f.insertAdjacentHTML("beforeend",t),r.forEach((e,n)=>{setTimeout(()=>{f.querySelector(`li:nth-child(${s+n+1})`).classList.add("show")},100*n)})},we=s=>{l.classList.add("load"),setTimeout(()=>{l.classList.remove("load"),p+=3,L(p,3),p>=_.length-1&&(l.style.display="none"),setTimeout(()=>{window.scrollBy({top:300,behavior:"smooth"})},100)},1e3)};L(p,3);l.addEventListener("click",we);const k=document.querySelector(".work-together-form"),c=document.querySelector(".work-together-input"),x=document.querySelector(".work-together-message"),d=document.querySelector(".work-together-success"),m=document.querySelector(".work-together-errorInput"),u=document.querySelector(".work-together-errorMessage"),fe=document.querySelector(".work-together-close"),i=document.querySelector(".work-together-backdrop"),y=document.querySelector(".work-together-loader");fe.addEventListener("click",()=>{i.classList.remove("is-open"),document.body.style.overflow="auto"});window.addEventListener("keydown",s=>{s.key==="Escape"&&(i.classList.remove("is-open"),document.body.style.overflow="auto")});i.addEventListener("click",s=>{s.target===s.currentTarget&&(i.classList.remove("is-open"),document.body.style.overflow="auto")});const ke=()=>{c.validity.valid?(d.style.display="block",m.style.display="none"):d.style.display="none",c.value===""&&(d.style.display="none")};c.addEventListener("input",ke);k.addEventListener("submit",s=>{s.preventDefault(),c.value.trim()===""&&(m.style.display="block",m.textContent="the field must be filled"),x.value.trim()===""?u.style.display="block":u.style.display="none",c.value.trim()!==""&&x.value.trim()!==""&&(y.classList.remove("is-hide"),W.post("https://portfolio-js.b.goit.study/api/requests",{email:c.value,comment:x.value}).then(o=>{y.classList.add("is-hide"),i.classList.add("is-open"),elScrollBtn.classList.remove("is-active-scroll"),document.body.style.overflow="hidden";const a=document.querySelector(".work-together-modal-title"),r=document.querySelector(".work-together-modal-text");a.textContent=o.data.title,r.textContent=o.data.message,m.style.display="none",u.style.display="none",d.style.display="none",k.reset()}).catch(o=>{y.classList.add("is-hide"),q.error({title:"Error",message:o.message,position:"center"})}))});new E(".accordion-container",{openOnInit:[0]});h.registerPlugin(j);document.addEventListener("DOMContentLoaded",s=>{new B(".text-split",{types:"words, chars",tagName:"span"});const o=(a,r)=>{j.create({trigger:a,start:"top bottom",onLeaveBack:()=>{r.progress(0),r.pause()}}),j.create({trigger:a,start:"top 90%",onEnter:()=>r.play()})};document.querySelectorAll(".letters-fade-in-random").forEach((a,r)=>{let t=h.timeline({paused:!0});t.from(a.querySelectorAll(".char"),{opacity:0,duration:.5,ease:"expo.in",stagger:{amount:.8,from:"start"}}),o(a,t)}),h.set(".text-split",{opacity:1})});
//# sourceMappingURL=index.js.map
