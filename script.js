const menu=document.getElementById('menu'),menuButton=document.getElementById('bg');
function setMenuOpen(open){menu.classList.toggle('open',open);menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Close navigation menu':'Open navigation menu')}
menuButton.onclick=()=>setMenuOpen(!menu.classList.contains('open'));
const inquiryForm=document.getElementById('inquiryForm'),formStatus=document.getElementById('formStatus');
const {url:SUPABASE_URL,publishableKey:SUPABASE_PUBLISHABLE_KEY}=window.KALINGAX_SUPABASE_CONFIG;
inquiryForm.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!inquiryForm.reportValidity())return;
  const submitButton=inquiryForm.querySelector('button[type="submit"]');
  if(submitButton.disabled)return;
  const payload={
    name:inquiryForm.elements.name.value.trim(),
    phone:inquiryForm.elements.phone.value.trim(),
    email:inquiryForm.elements.email.value.trim(),
    service:inquiryForm.elements.service.value,
    message:inquiryForm.elements.message.value.trim()
  };
  submitButton.disabled=true;
  inquiryForm.setAttribute('aria-busy','true');
  formStatus.hidden=false;
  formStatus.className='form-status sending';
  formStatus.textContent='Sending your inquiry…';
  try{
    const response=await fetch(`${SUPABASE_URL}/rest/v1/customer_inquiries`,{
      method:'POST',
      headers:{apikey:SUPABASE_PUBLISHABLE_KEY,'Content-Type':'application/json',Prefer:'return=minimal'},
      body:JSON.stringify(payload)
    });
    if(!response.ok)throw new Error('Inquiry submission failed');
    inquiryForm.reset();
    formStatus.className='form-status success';
    formStatus.textContent='Thank you. Your inquiry has been sent. We will contact you soon.';
  }catch{
    formStatus.className='form-status error';
    formStatus.textContent='We could not send your inquiry. Please contact us by phone, email, or WhatsApp and try again later.';
  }finally{
    submitButton.disabled=false;
    inquiryForm.removeAttribute('aria-busy');
  }
});
menu.addEventListener('click',event=>{if(event.target.closest('a'))setMenuOpen(false)});
addEventListener('hashchange',()=>setMenuOpen(false));
addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open')){setMenuOpen(false);menuButton.focus()}});
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.documentElement.classList.add('js-ready');
document.querySelectorAll('.rv').forEach((el,i)=>{el.style.transitionDelay=(i%4)*90+'ms';io.observe(el)});
const tr=document.getElementById('tr'),step=()=>tr.querySelector('.pc').offsetWidth+18;let hold=false;
document.getElementById('nx').onclick=()=>go(1);document.getElementById('pv').onclick=()=>go(-1);
function go(d){const end=tr.scrollLeft+tr.clientWidth>=tr.scrollWidth-4;if(d>0&&end)tr.scrollTo({left:0,behavior:'smooth'});else tr.scrollBy({left:d*step(),behavior:'smooth'})}
tr.onmouseenter=()=>hold=true;tr.onmouseleave=()=>hold=false;tr.onfocusin=()=>hold=true;tr.onfocusout=()=>hold=false;const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');setInterval(()=>{if(!hold&&!reduceMotion.matches&&!document.hidden)go(1)},3500);
const c=document.getElementById('fx'),x=c.getContext('2d');if(!x){c.hidden=true}else{let W,H,P=[];
function rs(){W=c.width=c.offsetWidth;H=c.height=c.offsetHeight}rs();addEventListener('resize',rs);
for(let i=0;i<60;i++)P.push({x:Math.random(),y:Math.random(),r:Math.random()*1.8+.4,s:Math.random()*.0006+.0002,a:Math.random()});
if(!reduceMotion.matches){(function f(){x.clearRect(0,0,W,H);for(const p of P){p.y-=p.s;p.a+=.02;if(p.y<0){p.y=1;p.x=Math.random()}x.beginPath();x.arc(p.x*W,p.y*H,p.r,0,6.3);x.fillStyle='rgba(255,200,90,'+(.25+.5*Math.abs(Math.sin(p.a)))+')';x.shadowBlur=8;x.shadowColor='#ffb84a';x.fill()}requestAnimationFrame(f)})()}else{x.clearRect(0,0,W,H)}}
