if (typeof window !== 'undefined') {
  function initAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    revealElements.forEach((el) => observer.observe(el));
    
    const counterElements = document.querySelectorAll('.counter');
    counterElements.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target') || '0');
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      
      const updateCounter = () => {
        current += step;
        if (current < target) {
          counter.textContent = Math.floor(current).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };
      
      const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          updateCounter();
          counterObserver.unobserve(entries[0].target);
        }
      }, { threshold: 0.5 });
      
      counterObserver.observe(counter);
    });
    
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.1');
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    });
  }
  
  document.addEventListener('DOMContentLoaded', initAnimations);
  document.addEventListener('astro:page-load', initAnimations);
}