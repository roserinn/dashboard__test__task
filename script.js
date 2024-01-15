document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('.burger__menu');
  const aside = document.querySelector('.aside');
  const overlay = document.querySelector('.overlay');
  const wrapper = document.querySelector('.wrapper');

  burger.addEventListener('click', () => {
    wrapper.style.overflow = 'hidden';
    aside.style.display = 'block';
    overlay.style.display = 'block';

    setTimeout(() => {
      aside.style.opacity = '1';
      overlay.style.opacity = '1';
    }, 200)
  })

  overlay.addEventListener('click', () => {
    wrapper.style.overflow = 'scroll';
    aside.style.opacity = '0';
    overlay.style.opacity = '0';

    setTimeout(() => {
      aside.style.display = 'none';
      overlay.style.display = 'none';
    }, 200)
  })
})
