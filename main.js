const services = [
    {
      id: 1,
      title: 'Repair Electronics',
      description: 'Exchange a repair service for a cooking lesson.',
      image: 'https://source.unsplash.com/400x300/?electronics,repair',
      rating: 4.5,
    },
    {
      id: 2,
      title: 'Graphic Design',
      description: 'Design a logo in exchange for cleaning services.',
      image: 'https://source.unsplash.com/400x300/?graphic,design',
      rating: 4.7,
    },
    {
      id: 3,
      title: 'Language Lesson',
      description: 'Teach a language in exchange for a small task.',
      image: 'https://source.unsplash.com/400x300/?language,teaching',
      rating: 4.2,
    },
  ];
  
  // عرض الخدمات في صفحة services.html
  const servicesContainer = document.getElementById('servicesContainer');
  if (servicesContainer) {
    services.forEach(s => {
      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <img src="${s.image}" alt="${s.title}" />
        <div class="service-content">
          <h3>${s.title}</h3>
          <p>${s.description}</p>
          <div class="rating">Rating: ${s.rating}</div>
        </div>
      `;
      servicesContainer.appendChild(card);
    });
  }
  
  // صفحة index.html - إضافة خدمة جديدة
  const serviceForm = document.getElementById('serviceForm');
  if (serviceForm) {
    serviceForm.addEventListener('submit', e => {
      e.preventDefault();
      alert(`Service added: ${serviceForm.title.value}`);
      serviceForm.reset();
    });
  }
  
  // صفحة contact.html - إرسال رسالة تواصل
  const contactForm = document.getElementById('contactForm');
  const contactStatus = document.getElementById('contactStatus');
  if (contactForm) {
    contactForm.addEventListener('submit', e => {
      e.preventDefault();
      contactStatus.textContent = 'Thank you for your message, we will get back to you soon!';
      contactForm.reset();
    });
  }
  