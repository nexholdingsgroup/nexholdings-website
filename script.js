const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}),{threshold:.1});
document.querySelectorAll('section, article').forEach(el=>{el.style.opacity='0';el.style.transform='translateY(22px)';el.style.transition='all .7s ease';observer.observe(el)});
document.addEventListener('scroll',()=>{});
const style=document.createElement('style');style.textContent='.show{opacity:1!important;transform:none!important}';document.head.appendChild(style);
