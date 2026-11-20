(() => {
'use strict';
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];

/* ===== CONFIGURACIÓN: completá estos datos ===== */
const EMAILJS = { service: 'service_j0r3k2h', template: 'TU_TEMPLATE_ID_AQUI', key: 'TU_PUBLIC_KEY_AQUI' };
const MAIL = 'nahuel.gonzalez@fenixsolutions.com.ar';

/* ===== DATOS ===== */
const about = {
  quien: ['fa-user', '¿Quién soy?', 'Soy Nahuel, desarrollador web apasionado por crear soluciones digitales. Ayudo a emprendedores y pequeñas empresas a tener presencia online efectiva.'],
  como: ['fa-cogs', '¿Cómo trabajo?', 'De forma cercana y colaborativa: escucho tus necesidades y las traduzco en soluciones digitales. Me adapto a tus tiempos y presupuesto.'],
  que: ['fa-laptop-code', '¿Qué hago?', 'Desarrollo sitios web personalizados, landing pages, tiendas online y sistemas a medida. Cada proyecto es único y cumple objetivos específicos.'],
  enfoque: ['fa-bullseye', 'Mi enfoque', 'No uso plantillas genéricas. Analizo cada proyecto, diseño pensando en el usuario final y desarrollo con código limpio y optimizado.'],
  objetivo: ['fa-rocket', 'Mi objetivo', 'Ayudar a emprendedores y negocios a tener una presencia online profesional que funcione y haga crecer su proyecto.']
};

const services = [
  ['fa-code', 'Desarrollo web a medida', 'Sitios personalizados desde cero, adaptados a tu negocio.'],
  ['fa-shopping-cart', 'Tiendas online', 'Catálogo, carrito y contacto por WhatsApp para vender rápido.'],
  ['fa-calendar-alt', 'Sistemas de reservas', 'Para restaurantes, peluquerías, clínicas o gimnasios: turnos online.'],
  ['fa-map-marker-alt', 'Páginas para negocios locales', 'Mostrá servicios, ubicación y contacto de forma profesional.'],
  ['fa-brain', 'Integración con IA', 'Asistentes automáticos, recomendaciones y respuestas inteligentes.'],
  ['fa-star', 'Sistemas de reseñas', 'Opiniones de clientes para generar confianza.'],
  ['fa-search-dollar', 'SEO básico', 'Configuración para que tu sitio aparezca en Google.'],
  ['fa-share-alt', 'Redes sociales', 'Conectá tu web con Instagram o Facebook.'],
  ['fa-newspaper', 'Blogs y secciones de contenido', 'Compartí artículos y noticias para mejorar tu posicionamiento.'],
  ['fa-book-open', 'Catálogos digitales', 'Para mayoristas o proveedores que quieren mostrar productos sin tienda completa.'],
  ['fa-robot', 'Automatizaciones', 'Respuestas automáticas y derivación eficiente de consultas.'],
  ['fa-chart-bar', 'Paneles simples', 'Visualizá información y administrá contenido con herramientas a medida.'],
  ['fa-edit', 'Formularios inteligentes', 'Captá consultas o presupuestos con validaciones a medida.'],
  ['fa-bell', 'Notificaciones', 'Alertas y confirmaciones automáticas inmediatas.']
];

const projects = [
  { titulo: 'Boedo Salud - Sitio oficial', imagen: 'Imagenes/proyectos/proyecto-1.png', link: 'https://www.boedosalud.com.ar/',
    descripcion: 'Sitio oficial de una prepaga del sector salud. Plataforma moderna, responsive e intuitiva con planes, beneficios, cartilla médica y contacto. Transmite confianza y profesionalismo, reflejando casi 20 años de trayectoria.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Responsive', 'UX/UI'] },
  { titulo: 'Fenix Solutions - Sitio corporativo', imagen: 'Imagenes/proyectos/proyecto-2.png', link: 'https://fenixsi.ar/',
    descripcion: 'Sitio profesional para una empresa de telecomunicaciones con más de 15 años de trayectoria. Presenta los servicios de forma estructurada, enfocado en generar confianza y consultas comerciales.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'Responsive', 'UX/UI'] },
  { titulo: 'Clínica Boedo - CMS personalizable', imagen: 'Imagenes/proyectos/proyecto-3.png',
    descripcion: 'Sistema tipo Google Sites exclusivo para Clínica Boedo. Permite editar contenido, secciones, novedades y servicios médicos sin conocimientos técnicos, para que el cliente gestione su propio sitio.',
    tecnologias: ['JavaScript', 'PHP', 'MySQL', 'CMS propio'] },
  { titulo: 'Clínica Boedo - Sitio oficial', imagen: 'Imagenes/proyectos/proyecto-4.png', link: 'https://www.clinicaboedo.com.ar/',
    descripcion: 'Rediseño completo: de un sitio desactualizado a una plataforma profesional mobile-first, con mejores tiempos de carga, mejor experiencia de usuario e información médica y de contacto bien organizada.',
    tecnologias: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'Mobile first'] },
  { titulo: 'Gonzagapalooza - Festival web', imagen: 'Imagenes/proyectos/proyecto-5.png', link: 'https://sites.google.com/view/gonzagapalooza-2024/inicio',
    descripcion: 'Sitio oficial del festival con compra de entradas integrada, análisis de tráfico con Google Analytics y un sistema para que las familias suban fotos y videos con Firebase. Excelente feedback de la comunidad.',
    tecnologias: ['Google Sites', 'Firebase', 'Google Analytics', 'HTML5', 'CSS3'] }
];

const faqs = [
  ['¿Cuánto tiempo tarda en desarrollarse un sitio web?', 'Depende del proyecto. Un sitio simple puede estar listo en una o dos semanas; los más completos pueden tardar un poco más según las funcionalidades.'],
  ['¿Qué pasa si algo falla después de entregar el sitio?', 'No te dejo solo. Una vez lanzado el proyecto ofrezco un período de soporte para que todo funcione bien y resolver cualquier duda técnica.'],
  ['¿Puedo actualizar el contenido del sitio?', 'Sí. Según el proyecto, el sitio puede diseñarse para que cambies textos, imágenes o información fácilmente, sin tocar código.'],
  ['¿Necesito tener dominio y hosting?', 'Si todavía no los tenés, te ayudo a elegir y configurar el dominio y el hosting para que tu sitio esté online de forma segura.'],
  ['¿Qué información necesito para empezar un proyecto?', 'Generalmente se necesita:<ul><li>Información sobre tu negocio o servicio.</li><li>Textos descriptivos para las secciones.</li><li>Imágenes propias o logotipo, si los tenés.</li><li>Referencias de sitios que te gusten.</li></ul>Con eso ya podemos empezar.'],
  ['¿Puedo vender productos en mi web?', 'Sí. Puedo integrar una tienda online con método de pago, gestión de stock y carrito para que tu negocio venda las 24 horas.']
];

/* ===== UTILIDADES ===== */
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const phone = n => `Imagenes/celu${n}.png`;

function toast(msg, type) {
  $('.toast')?.remove();
  const t = Object.assign(document.createElement('div'), { className: `toast ${type}`, textContent: msg });
  t.setAttribute('role', 'status');
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 5000);
}

/* ===== CARGA ===== */
function initLoader() {
  const out = () => {
    const l = $('#loader');
    l.classList.add('out');
    document.body.classList.remove('loading');
    setTimeout(() => l.remove(), 900);
  };
  let done = false;
  const finish = () => { if (!done) { done = true; setTimeout(out, 250); } };
  if (document.readyState === 'complete') finish();
  else window.addEventListener('load', finish);
  setTimeout(finish, 4000); // tope de seguridad
}

/* ===== MENÚ ===== */
function initMenu() {
  const btn = $('#menuBtn'), nav = $('#nav'), ov = $('#overlay');
  const set = open => {
    nav.classList.toggle('open', open);
    ov.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };
  btn.addEventListener('click', () => set(!nav.classList.contains('open')));
  ov.addEventListener('click', () => set(false));
  $$('a', nav).forEach(a => a.addEventListener('click', () => set(false)));
  addEventListener('resize', () => innerWidth > 768 && set(false));

  // Resalta la sección activa
  const links = $$('a', nav);
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (e.isIntersecting) links.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  }), { rootMargin: '-40% 0px -55% 0px' });
  ['inicio', 'sobre-mi', 'servicios', 'proyectos', 'contacto'].forEach(id => { const el = document.getElementById(id); el && io.observe(el); });
}

/* ===== HERO: teléfonos y tecnologías (loop infinito en CSS) ===== */
function initMarquees() {
  $$('.scroll-group').forEach(g => {
    const from = +g.dataset.from;
    g.innerHTML = Array.from({ length: 5 }, (_, i) => `<img src="${phone(from + i)}" alt="">`).join('');
    g.innerHTML += g.innerHTML;
  });
  const t = $('#techTrack');
  t.innerHTML += t.innerHTML;
  $$('div', t).slice(10).forEach(d => d.setAttribute('aria-hidden', 'true'));
}

/* ===== SOBRE MÍ ===== */
function initAbout() {
  const panel = $('#aboutPanel'), text = $('#aboutText');
  const close = () => { panel.hidden = true; $$('.info-bubble').forEach(b => b.classList.remove('on')); };
  $$('.info-bubble').forEach(b => b.addEventListener('click', e => {
    e.stopPropagation();
    const [icon, title, body] = about[b.dataset.key];
    text.innerHTML = `<h3><i class="fas ${icon}"></i>${title}</h3><p>${body}</p>`;
    $$('.info-bubble').forEach(x => x.classList.toggle('on', x === b));
    panel.hidden = false;
  }));
  $('#panelClose').addEventListener('click', close);
  document.addEventListener('click', e => { if (!panel.hidden && !panel.contains(e.target)) close(); });
  document.addEventListener('keydown', e => e.key === 'Escape' && close());
}

/* ===== MODALES ===== */
function openModal(m) {
  m.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.modal-x', m).focus();
}
function closeModal(m) {
  m.hidden = true;
  document.body.style.overflow = '';
}
function initModals() {
  $$('.modal').forEach(m => {
    $('.modal-x', m).addEventListener('click', () => closeModal(m));
    m.addEventListener('click', e => e.target === m && closeModal(m));
  });
  document.addEventListener('keydown', e => e.key === 'Escape' && $$('.modal').forEach(m => !m.hidden && closeModal(m)));

  // Servicios
  const sm = $('#servicesModal');
  $('#servicesBody').innerHTML = services.map(([i, t, d]) =>
    `<div class="svc"><i class="fas ${i}"></i><div><h4>${t}</h4><p>${d}</p></div></div>`).join('');
  $('#servicesMore').addEventListener('click', () => openModal(sm));

  // Proyectos
  const pm = $('#projectsModal');
  const card = p => `
    <article class="proj">
      <div class="proj-img"><img src="${p.imagen}" alt="${esc(p.titulo)}" loading="lazy"></div>
      <div>
        <h3>${esc(p.titulo)}</h3>
        <p>${esc(p.descripcion)}</p>
        <div class="tags">${p.tecnologias.map(t => `<span>${esc(t)}</span>`).join('')}</div>
        ${p.link ? `<a class="visit" href="${p.link}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> Visitar sitio</a>` : ''}
      </div>
    </article>`;
  $$('.folder').forEach(f => {
    const idx = f.dataset.i;
    if (idx !== 'all') $('.name', f).textContent = projects[idx].titulo;
    f.addEventListener('click', () => {
      $('#projectsBody').innerHTML = (idx === 'all' ? projects : [projects[idx]]).map(card).join('');
      openModal(pm);
    });
  });
}

/* ===== FAQ ===== */
function initFaq() {
  const list = $('#faqList');
  list.innerHTML = faqs.map(([q, a], i) => `
    <div class="faq-item">
      <button class="faq-q" aria-expanded="false" aria-controls="fa${i}">${q}<span class="faq-ico"><i class="fas fa-chevron-down"></i></span></button>
      <div class="faq-a" id="fa${i}" role="region"><div>${a}</div></div>
    </div>`).join('');
  $$('.faq-item', list).forEach(item => $('.faq-q', item).addEventListener('click', () => {
    const open = !item.classList.contains('open');
    $$('.faq-item', list).forEach(o => { o.classList.remove('open'); $('.faq-q', o).setAttribute('aria-expanded', 'false'); });
    item.classList.toggle('open', open);
    $('.faq-q', item).setAttribute('aria-expanded', open);
  }));
}

/* ===== CARRUSEL MÓVIL (scroll-snap nativo) ===== */
function initCarousel() {
  const track = $('#carouselTrack');
  track.innerHTML = Array.from({ length: 10 }, (_, i) => `<img src="${phone(i + 1)}" alt="Ejemplo de sitio ${i + 1}" loading="lazy">`).join('');
  const go = dir => {
    const max = track.scrollWidth - track.clientWidth;
    const next = track.scrollLeft + dir * track.clientWidth;
    track.scrollTo({ left: next > max + 5 ? 0 : next < 0 ? max : next, behavior: 'smooth' });
  };
  $('#prevBtn').addEventListener('click', () => go(-1));
  $('#nextBtn').addEventListener('click', () => go(1));
}

/* ===== FORMULARIO ===== */
function initForm() {
  const form = $('#contactForm');
  const ready = !EMAILJS.template.startsWith('TU_') && !EMAILJS.key.startsWith('TU_') && typeof emailjs !== 'undefined';
  if (ready) emailjs.init(EMAILJS.key);

  form.addEventListener('submit', e => {
    e.preventDefault();
    const { email, subject, message } = form.elements;
    let ok = true;
    [email, subject, message].forEach(f => {
      const valid = f.value.trim() && (f !== email || /^\S+@\S+\.\S+$/.test(f.value));
      f.classList.toggle('invalid', !valid);
      ok = ok && valid;
    });
    if (!ok) return toast('Revisá los campos marcados e intentá de nuevo.', 'err');

    // Sin EmailJS configurado: abre el correo del usuario como alternativa
    if (!ready) {
      location.href = `mailto:${MAIL}?subject=${encodeURIComponent(subject.value)}&body=${encodeURIComponent(message.value + '\n\n' + email.value)}`;
      return;
    }
    const btn = $('.send', form), label = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    emailjs.send(EMAILJS.service, EMAILJS.template, {
      from_name: email.value.split('@')[0], from_email: email.value,
      subject: subject.value, message: message.value, to_name: 'Nahuel'
    })
      .then(() => { toast('Mensaje enviado. Te respondo a la brevedad.', 'ok'); form.reset(); })
      .catch(err => { console.error(err); toast(`No se pudo enviar. Escribime a ${MAIL}`, 'err'); })
      .finally(() => { btn.textContent = label; btn.disabled = false; });
  });
  $$('input,textarea', form).forEach(f => f.addEventListener('input', () => f.classList.remove('invalid')));
}

/* ===== INICIO ===== */
initLoader();
document.addEventListener('DOMContentLoaded', () => {
  initMarquees();
  initMenu();
  initAbout();
  initModals();
  initFaq();
  initCarousel();
  initForm();
});
})();
