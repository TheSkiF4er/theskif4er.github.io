(function(){
  function initReveal(){
    const els = document.querySelectorAll('.fade-in');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el)=>io.observe(el));
  }
  document.addEventListener('DOMContentLoaded', initReveal);
})();
