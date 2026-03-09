
(function(){
  const key = 'site-lang';
  const initial = localStorage.getItem(key) || 'en';
  function setLang(lang){
    document.documentElement.setAttribute('data-current-lang', lang);
    localStorage.setItem(key, lang);
    document.querySelectorAll('[data-set-lang]').forEach(btn=>{
      btn.classList.toggle('active', btn.dataset.setLang === lang);
    });
    const carrier = document.querySelector('[data-title-en]');
    const metaCarrier = document.querySelector('[data-desc-en]');
    if(carrier){ document.title = lang === 'ru' ? carrier.dataset.titleRu : carrier.dataset.titleEn; }
    const meta = document.querySelector('meta[name="description"]');
    if(meta && metaCarrier){ meta.setAttribute('content', lang === 'ru' ? metaCarrier.dataset.descRu : metaCarrier.dataset.descEn); }
  }
  function initReveal(){
    const els = document.querySelectorAll('.fade-in');
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, {threshold: 0.12});
    els.forEach(el=>io.observe(el));
  }
  document.addEventListener('click', function(e){
    const btn = e.target.closest('[data-set-lang]');
    if(btn){ setLang(btn.dataset.setLang); }
  });
  document.addEventListener('DOMContentLoaded', function(){
    setLang(initial);
    initReveal();
  });
})();
