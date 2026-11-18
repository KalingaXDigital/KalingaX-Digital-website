const menu = document.getElementById('menu');
const menuButton = document.getElementById('bg');

function setMenuOpen(open) {
  if (!menu || !menuButton) return;
  menu.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation menu' : 'Open navigation menu');
}

menuButton?.addEventListener('click', () => setMenuOpen(!menu.classList.contains('open')));
menu?.addEventListener('click', event => {
  if (event.target.closest('a')) setMenuOpen(false);
});
addEventListener('hashchange', () => setMenuOpen(false));
addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.classList.contains('open')) {
    setMenuOpen(false);
    menuButton?.focus();
  }
});

const inquiryForm = document.getElementById('inquiryForm');
const formStatus = document.getElementById('formStatus');
const config = window.KALINGAX_SUPABASE_CONFIG;

if (inquiryForm && formStatus && config) {
  const { url: supabaseUrl, publishableKey } = config;

  inquiryForm.addEventListener('submit', async event => {
    event.preventDefault();
    if (!inquiryForm.reportValidity()) return;

    if (location.protocol === 'file:') {
      formStatus.hidden = false;
      formStatus.className = 'form-status error';
      formStatus.textContent = 'Please open the live HTTPS website to send this inquiry. A local file preview cannot submit to Supabase reliably.';
      return;
    }

    const submitButton = inquiryForm.querySelector('button[type="submit"]');
    if (!submitButton || submitButton.disabled) return;

    const payload = {
      name: inquiryForm.elements.name.value.trim(),
      phone: inquiryForm.elements.phone.value.trim(),
      email: inquiryForm.elements.email.value.trim(),
      service: inquiryForm.elements.service.value,
      message: inquiryForm.elements.message.value.trim()
    };

    submitButton.disabled = true;
    inquiryForm.setAttribute('aria-busy', 'true');
    formStatus.hidden = false;
    formStatus.className = 'form-status sending';
    formStatus.textContent = 'Sending your inquiry…';

    try {
      const response = await fetch(`${supabaseUrl}/rest/v1/customer_inquiries`, {
        method: 'POST',
        headers: {
          apikey: publishableKey,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        console.error('Supabase inquiry request failed with HTTP', response.status);
        throw new Error('Inquiry submission failed');
      }

      inquiryForm.reset();
      formStatus.className = 'form-status success';
      formStatus.textContent = 'Thank you. Your inquiry has been sent. We will contact you soon.';
    } catch (error) {
      console.error('Unable to submit inquiry to Supabase:', error);
      formStatus.className = 'form-status error';
      formStatus.textContent = 'We could not send your inquiry. Please contact us by phone, email, or WhatsApp and try again later.';
    } finally {
      submitButton.disabled = false;
      inquiryForm.removeAttribute('aria-busy');
    }
  });
  window.KALINGAX_FORM_READY = true;
}

const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)');
const revealElements = document.querySelectorAll('.rv');
document.documentElement.classList.add('js-ready');

if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealElements.forEach((element, index) => {
    element.style.transitionDelay = `${(index % 4) * 90}ms`;
    observer.observe(element);
  });
} else {
  revealElements.forEach(element => element.classList.add('in'));
}

const canvas = document.getElementById('fx');
const context = canvas?.getContext('2d');

if (canvas && context && !reduceMotion.matches) {
  let width;
  let height;
  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random(),
    y: Math.random(),
    radius: Math.random() * 1.5 + 0.4,
    speed: Math.random() * 0.0005 + 0.0002,
    phase: Math.random()
  }));

  function resizeCanvas() {
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * pixelRatio;
    canvas.height = height * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  }

  function drawParticles() {
    context.clearRect(0, 0, width, height);
    for (const particle of particles) {
      particle.y -= particle.speed;
      particle.phase += 0.02;
      if (particle.y < 0) {
        particle.y = 1;
        particle.x = Math.random();
      }
      context.beginPath();
      context.arc(particle.x * width, particle.y * height, particle.radius, 0, Math.PI * 2);
      context.fillStyle = `rgba(255, 200, 90, ${0.25 + 0.5 * Math.abs(Math.sin(particle.phase))})`;
      context.shadowBlur = 8;
      context.shadowColor = '#ffb84a';
      context.fill();
    }
    if (!document.hidden) requestAnimationFrame(drawParticles);
  }

  resizeCanvas();
  addEventListener('resize', resizeCanvas, { passive: true });
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) requestAnimationFrame(drawParticles);
  });
  requestAnimationFrame(drawParticles);
}
