const numero = "5511999999999";
document.getElementById("btnWhats").href = `https://wa.me/${numero}`;

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));