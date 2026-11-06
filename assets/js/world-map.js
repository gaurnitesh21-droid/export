/* Prime Reach Exports — horizontal world-map parallax driven by vertical scroll. */
(()=>{"use strict";
const section=document.querySelector("[data-scroll-map]");
const track=section?.querySelector("[data-map-track]");
if(!section||!track)return;
const motion=window.matchMedia("(prefers-reduced-motion: reduce)");
let queued=false;
const render=()=>{
 queued=false;
 if(motion.matches){track.style.setProperty("--map-pan","0px");return}
 const rect=section.getBoundingClientRect();
 const span=window.innerHeight+rect.height;
 const t=Math.min(1,Math.max(0,(window.innerHeight-rect.top)/span));
 // At entry the world map is shifted to the right; scrolling down pans it left.
 // Scrolling upward naturally reverses the movement.
 const travel=Math.min(205,Math.max(85,window.innerWidth*.13));
 track.style.setProperty("--map-pan",((.5-t)*2*travel).toFixed(1)+"px");
};
const schedule=()=>{if(queued)return;queued=true;requestAnimationFrame(render)};
window.addEventListener("scroll",schedule,{passive:true});
window.addEventListener("resize",schedule,{passive:true});
motion.addEventListener?.("change",schedule);
render();
/* Show a three-dimensional globe briefly when this section enters,
   then unfold the same map into the full-width cartographic view. */
if(motion.matches){section.classList.add("is-unfolded");}
else{
  section.classList.add("is-map-ready");
  let started=false;
  const unfold=()=>{
    if(started)return;
    started=true;
    // Preserve a short globe hold so visitors perceive the sphere-to-flat transformation.
    requestAnimationFrame(()=>requestAnimationFrame(()=>{
      window.setTimeout(()=>section.classList.add("is-unfolded"),180);
    }));
  };
  if("IntersectionObserver" in window){
    const introObserver=new IntersectionObserver(entries=>{
      if(entries.some(entry=>entry.isIntersecting && entry.intersectionRatio>=.11)){
        introObserver.disconnect();
        unfold();
      }
    },{threshold:[0,.11,.25]});
    introObserver.observe(section);
  }else{unfold();}
  motion.addEventListener?.("change",()=>{if(motion.matches)section.classList.add("is-unfolded");});
}
})();
