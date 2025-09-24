// Hamburger menu for mobile
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animated counters
function animateCounters() {
  document.querySelectorAll('.counter').forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace(/,/g, '');
      const increment = Math.ceil(target / 80);
      if (count < target) {
        counter.innerText = (count + increment).toLocaleString();
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target.toLocaleString();
      }
    };
    updateCount();
  });
}
if (document.querySelector('.counter')) animateCounters();

// Accordion for programs
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', function() {
    const body = this.nextElementSibling;
    const isOpen = body.classList.contains('open');
    document.querySelectorAll('.accordion-body').forEach(b => b.classList.remove('open'));
    document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));
    if (!isOpen) {
      body.classList.add('open');
      this.classList.add('active');
    }
  });
});

// Gallery lightbox
const galleryImgs = document.querySelectorAll('.gallery-img');
const lightboxModal = document.getElementById('lightboxModal');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
if (galleryImgs.length && lightboxModal && lightboxImg) {
  galleryImgs.forEach(img => {
    img.addEventListener('click', () => {
      lightboxModal.classList.add('open');
      lightboxImg.src = img.src;
      lightboxCaption.innerText = img.alt;
    });
  });
  document.getElementById('closeLightbox').onclick = () => lightboxModal.classList.remove('open');
  lightboxModal.onclick = e => { if (e.target === lightboxModal) lightboxModal.classList.remove('open'); };
}

// Reports password protection (simple demo)
const reportLoginForm = document.getElementById('reportLoginForm');
if (reportLoginForm) {
  reportLoginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const pw = document.getElementById('reportPassword').value;
    const reportsContent = document.getElementById('reportsContent');
    const reportError = document.getElementById('reportError');
    if (pw === 'laccodev2025') {
      reportsContent.style.display = 'block';
      reportError.innerText = '';
    } else {
      reportError.innerText = 'Incorrect password.';
      reportsContent.style.display = 'none';
    }
  });
}

// Donate buttons
document.querySelectorAll('.donate-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    const amount = this.getAttribute('data-amount');
    const donateAmount = document.getElementById('donateAmount');
    if (amount === 'other') {
      donateAmount.value = '';
      donateAmount.focus();
    } else {
      donateAmount.value = amount;
    }
  });
});

// Donate form (demo only)
const donateForm = document.getElementById('donateForm');
if (donateForm) {
  donateForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your support! (Demo only, no payment processed.)');
    donateForm.reset();
  });
}

// Volunteer form
const volunteerForm = document.getElementById('volunteerForm');
if (volunteerForm) {
  volunteerForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('volunteerSuccess').innerText = 'Thank you for volunteering!';
    volunteerForm.reset();
    setTimeout(() => { document.getElementById('volunteerSuccess').innerText = ''; }, 4000);
  });
}

// Contact form
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contactSuccess').innerText = 'Message sent! We will get back to you soon.';
    contactForm.reset();
    setTimeout(() => { document.getElementById('contactSuccess').innerText = ''; }, 4000);
  });
}