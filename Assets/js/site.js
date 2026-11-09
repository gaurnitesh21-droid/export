(()=>{
 'use strict';
 const $=(s,p=document)=>p.querySelector(s), $$=(s,p=document)=>Array.from(p.querySelectorAll(s));
 const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
 const header=$('.site-header'),progress=$('.scroll-progress'),topBtn=$('.back-to-top'),menuBtn=$('.menu-toggle'),mobile=$('.mobile-menu');
 const onScroll=()=>{let y=window.scrollY;header?.classList.toggle('is-scrolled',y>42);topBtn?.classList.toggle('show',y>420);if(progress)progress.style.width=(y/Math.max(1,document.documentElement.scrollHeight-innerHeight)*100)+'%';if(!reduce){let media=$('.hero-media');if(media)media.style.transform=`scale(1.04) translateY(${Math.min(y*.10,65)}px)`;}};
 window.addEventListener('scroll',onScroll,{passive:true});onScroll();
 if('IntersectionObserver' in window&&!reduce){let io=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.12,rootMargin:'0px 0px -35px 0px'});$$('.reveal').forEach(n=>io.observe(n))}else{$$('.reveal').forEach(n=>n.classList.add('visible'))}
 $('.hero')?.classList.add('loaded');
 const setMobile=(isOpen)=>{mobile?.classList.toggle('open',isOpen);menuBtn?.setAttribute('aria-expanded',String(isOpen));menuBtn?.setAttribute('aria-label',isOpen?'Close menu':'Open menu');if(menuBtn)menuBtn.textContent=isOpen?'×':'☰';document.body.classList.toggle('lock',isOpen)};
 menuBtn?.addEventListener('click',()=>setMobile(!mobile.classList.contains('open')));$$('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>setMobile(false)));
 topBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:reduce?'instant':'smooth'}));
 // Product filters
 $$('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{let v=btn.dataset.filter;$$('.filter-btn').forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});$$('.catalog-card').forEach(card=>{card.hidden=!(v==='all'||card.dataset.category===v)})}));
 // All enquiries are handled by the buyer's own email client or WhatsApp. This demo does not claim to submit to a server.
 const backdrop=$('.drawer-backdrop'),drawer=$('.quote-drawer');let lastFocus=null;
 const openDrawer=(product)=>{if(!drawer)return;lastFocus=document.activeElement;backdrop.classList.add('open');drawer.classList.add('open');drawer.setAttribute('aria-hidden','false');document.body.classList.add('lock');if(product){let sel=$('[name="product"]',drawer);if(sel)sel.value=product}setTimeout(()=>$('.close-btn',drawer)?.focus(),80)};
 const closeDrawer=()=>{backdrop?.classList.remove('open');drawer?.classList.remove('open');drawer?.setAttribute('aria-hidden','true');document.body.classList.remove('lock');lastFocus?.focus?.()};
 $$('[data-quote]').forEach(b=>b.addEventListener('click',e=>{e.preventDefault();openDrawer(b.dataset.quote||'')}));$('.close-btn',drawer)?.addEventListener('click',closeDrawer);backdrop?.addEventListener('click',closeDrawer);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeDrawer();setMobile(false)}if(e.key==='Tab'&&drawer?.classList.contains('open')){const focusables=$$('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled])',drawer);if(focusables.length){const first=focusables[0],last=focusables[focusables.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}}});
 const createMessage=form=>{let data=new FormData(form),value=k=>(data.get(k)||'').toString().trim();return ['Hello Prime Reach Exporters,','I would like to request an export quotation.','',`Name: ${value('name')||'Not specified'}`,`Company: ${value('company')||'Not specified'}`,`Email: ${value('email')||'Not specified'}`,`Country: ${value('country')||'Not specified'}`,`Product: ${value('product')||'Not specified'}`,`Quantity: ${value('quantity')||'To discuss'}`,`Destination port: ${value('port')||'To discuss'}`,`Requirements: ${value('message')||'Please share your details.'}`,'','Please advise available specifications, commercial terms and quotation.'].join('\n')};
 const validate=form=>form.reportValidity();
 $$('form.enquiry-form').forEach(form=>{
   const note=$('.form-feedback',form);
   $('[data-action="whatsapp"]',form)?.addEventListener('click',()=>{if(!validate(form))return;const u='https://wa.me/919694681337?text='+encodeURIComponent(createMessage(form));window.open(u,'_blank','noopener,noreferrer');if(note)note.textContent='WhatsApp was opened with your enquiry. Please press Send there to complete it.'});
   $('[data-action="copy"]',form)?.addEventListener('click',async()=>{if(!validate(form))return;let msg=createMessage(form);try{await navigator.clipboard.writeText(msg);if(note)note.textContent='Enquiry copied. Paste it into your preferred email or messaging app.'}catch{let temp=document.createElement('textarea');temp.value=msg;document.body.appendChild(temp);temp.select();document.execCommand('copy');temp.remove();if(note)note.textContent='Enquiry copied.'}});
   $('[data-action="email"]',form)?.addEventListener('click',()=>{if(!validate(form))return;let subject='Export Enquiry | Prime Reach Exporters';const body=createMessage(form);window.location.href='mailto:?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);if(note)note.textContent='Your email application was opened. Enter the official company email address before sending.'});
 });
})();
