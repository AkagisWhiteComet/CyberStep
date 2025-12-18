const buttonMoveUp = document.getElementById("top-button");

window.addEventListener("scroll", () => {
	if (window.pageYOffset > 600) {
		buttonMoveUp.style.opacity = 1;
		buttonMoveUp.disabled = false;
	} else {
		buttonMoveUp.style.opacity = 0;
		buttonMoveUp.disabled = true;
	}
});

buttonMoveUp.addEventListener("click", () => {
	window.scrollTo(0, 0);
});


document.addEventListener('DOMContentLoaded', function() {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeMenu = document.querySelector('.close-menu');
  const mobileToFooter = document.querySelector('.mobile-to-footer');
  
  if (burgerMenu && mobileMenu && closeMenu) {
    burgerMenu.addEventListener('click', function() {
      mobileMenu.classList.add('active');
      burgerMenu.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    });
    
    closeMenu.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      burgerMenu.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
    
    mobileToFooter.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      burgerMenu.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
      
      const footer = document.getElementById('footer');
      if (footer) {
        footer.scrollIntoView({ behavior: 'smooth' });
      }
    });
    
    // Закрытие меню при клике вне его области
    mobileMenu.addEventListener('click', function(e) {
      if (e.target === mobileMenu) {
        mobileMenu.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
    
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        mobileMenu.classList.remove('active');
        burgerMenu.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
  
  // Функция прокрутки к футеру
  window.scrollToFooter = function() {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Отключение анимаций на мобильных устройствах
  if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
    document.documentElement.classList.add('mobile-device');
  }
});