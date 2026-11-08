/* Prime Reach Exporters — first-homepage-visit branded opening (approximately 2.7 s). */
(()=>{"use strict";
const root=document.documentElement;
if(!root.classList.contains("is-intro-active"))return;
let done=false;
function dismiss(){
 if(done)return;done=true;
 try{sessionStorage.setItem("primeReachIntroSeen","1")}catch(e){}
 root.classList.add("is-intro-exiting");
 window.setTimeout(()=>{root.classList.remove("is-intro-active","is-intro-exiting");},540);
}
function start(){window.setTimeout(dismiss,2180)}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",start,{once:true});
else start();
// If this page is restored from history, never leave the intro blocking interaction.
window.addEventListener("pageshow",event=>{if(event.persisted)dismiss()});
})();
