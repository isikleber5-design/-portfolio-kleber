const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeModal');

document.querySelectorAll('.project img').forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    modal.classList.add('open');
  });
});

document.querySelectorAll('[data-img]').forEach(btn => {
  btn.addEventListener('click', () => {
    modalImg.src = btn.dataset.img;
    modal.classList.add('open');
  });
});

closeBtn.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', e => {
  if (e.target === modal) modal.classList.remove('open');
});

const items = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: .12 });

items.forEach(i => obs.observe(i));
