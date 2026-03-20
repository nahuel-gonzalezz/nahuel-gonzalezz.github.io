// ===== Se me jijean los jijolines =====
(function() {
    'use strict';
    
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 Script iniciado');
        
        //INICIALIZAR EMAILJS 
        if (typeof emailjs !== 'undefined') {
            emailjs.init("GQ8RAqwZuzVetzrvv"); 
            console.log('✅ EmailJS inicializado');
        } else {
            console.error('❌ EmailJS no está cargado. Verifica que incluiste el script.');
        }
        
        // DATOS DE PROYECTOS
        const proyectos = [
            {
                titulo: "Kiosco Online",
                descripcion: "Tienda virtual para kiosco con catálogo de productos y pedidos por WhatsApp.",
                imagen: "Imagenes/proyectos/proyecto-1.png",
                tecnologias: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
                linkDemo: "#",
                linkRepo: "#"
            },
            {
                titulo: "NoteManager",
                descripcion: "Aplicación de notas con autenticación, categorías y etiquetas.",
                imagen: "Imagenes/proyectos/proyecto-2.png",
                tecnologias: ["React", "Node.js", "MongoDB", "Express"],
                linkDemo: "#",
                linkRepo: "#"
            },
            {
                titulo: "PizzaHot Landing",
                descripcion: "Landing page moderna para pizzería con menú interactivo.",
                imagen: "Imagenes/proyectos/proyecto-3.png",
                tecnologias: ["HTML5", "CSS3", "JavaScript", "API Google Maps"],
                linkDemo: "#",
                linkRepo: "#"
            }
        ];

        console.log('✅ Proyectos cargados:', proyectos.length);
        

function initMobileCarousel() {
    console.log('Iniciando carrusel móvil...');
    
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    
    if (!track) {
        console.log('No se encontró el carrusel móvil');
        return;
    }
    
    console.log('Carrusel móvil encontrado, inicializando...');
    
    const slides = Array.from(track.children);
    const totalSlides = slides.length;
    let currentIndex = 0;
    let isTransitioning = false;
    

    slides.forEach(slide => {
        slide.style.flex = '0 0 100%';
        slide.style.width = '100%';
        slide.style.height = '100%';
        slide.style.objectFit = 'contain';
        slide.style.objectPosition = 'center';
    });
    
    if (dotsContainer) {
        dotsContainer.innerHTML = '';
        
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                if (!isTransitioning) {
                    goToSlide(i);
                }
            });
            dotsContainer.appendChild(dot);
        }
    }
    
    const dots = document.querySelectorAll('.dot');
    
    function updateCarousel() {
        if (isTransitioning) return;
        
        isTransitioning = true;
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        setTimeout(() => {
            isTransitioning = false;
        }, 400);
    }
    
    function goToSlide(index) {
        if (isTransitioning) return;
        
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;
        
        currentIndex = index;
        updateCarousel();
    }
    

    if (prevBtn) {
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(currentIndex - 1);
        });
    }
    
    if (nextBtn) {
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            goToSlide(currentIndex + 1);
        });
    }
    
  
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    }, { passive: true });
    
    track.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > 50) {
            if (diff > 0) {
                goToSlide(currentIndex + 1);
            } else {
                goToSlide(currentIndex - 1);
            }
        }
    }, { passive: true });
    
 
    let autoplayInterval;
    
    function startAutoplay() {
        if (autoplayInterval) clearInterval(autoplayInterval);
        autoplayInterval = setInterval(() => {
            if (!isTransitioning) {
                goToSlide(currentIndex + 1);
            }
        }, 4000);
    }
    
    function stopAutoplay() {
        clearInterval(autoplayInterval);
    }
    
    const carousel = document.querySelector('.mobile-carousel');
    if (carousel) {
        carousel.addEventListener('mouseenter', stopAutoplay);
        carousel.addEventListener('mouseleave', startAutoplay);
        carousel.addEventListener('touchstart', stopAutoplay);
        carousel.addEventListener('touchend', startAutoplay);
        
        startAutoplay();
    }
    
    console.log('✅ Carrusel móvil inicializado correctamente');
}
        

        function initPhonesCarousel() {
            const groups = document.querySelectorAll('.scroll-group');
            
            if (!groups.length) {
                console.log('No se encontraron grupos de celulares');
                return;
            }
            
            console.log('Iniciando carrusel de celulares infinito...');
            
            // Configuración específica para cada columna
            groups.forEach((group, groupIndex) => {
                const images = Array.from(group.children);
                
                if (images.length) {
                    // Medir altura de cada imagen para cálculos precisos
                    let imageHeights = [];
                    let totalHeight = 0;
                    
                    images.forEach(img => {
                        const height = img.offsetHeight + 40; // 40px es el gap
                        imageHeights.push(height);
                        totalHeight += height;
                    });
                    
                    // Guardar datos para cálculos posteriores
                    group.dataset.totalHeight = totalHeight;
                    group.dataset.imageHeights = JSON.stringify(imageHeights);
                    
                    // DUPLICAR MÚLTIPLES VECES para tener buffer infinito
                    // Clonamos 8 veces para asegurar que nunca falte contenido
                    for (let cloneCount = 0; cloneCount < 8; cloneCount++) {
                        images.forEach(img => {
                            const clone = img.cloneNode(true);
                            clone.classList.add('phone-clone');
                            group.appendChild(clone);
                        });
                    }
                    
      
                    if (groupIndex === 0) {
                        // Columna 1: Comienza desplazada hacia ARRIBA (para que baje)
                        group.style.transform = `translateY(-${totalHeight * 2}px)`;
                    } else {
                        // Columna 2: Comienza desplazada hacia ABAJO (para que sube)
                        group.style.transform = `translateY(${totalHeight * 2}px)`;
                    }
                }
            });
            
  
            let scrollPositions = [0, 0];
            let speeds = [0.2, -0.2]; 
            let animationFrame;
            let lastTimestamp = 0;
            let totalHeights = [];
            
            groups.forEach((group, index) => {
                totalHeights[index] = parseFloat(group.dataset.totalHeight) || 1000;
            });
            
            function animatePhones(timestamp) {
                if (!lastTimestamp) {
                    lastTimestamp = timestamp;
                    animationFrame = requestAnimationFrame(animatePhones);
                    return;
                }
                
                groups.forEach((group, index) => {
                    const contentHeight = totalHeights[index];
                    
                    scrollPositions[index] += speeds[index];
                    
                    if (index === 0) {

                        if (scrollPositions[index] > 0) {
                            scrollPositions[index] = -contentHeight * 7;
                        }
                    } else {
                        if (scrollPositions[index] < -contentHeight * 8) {
                            scrollPositions[index] = 0;
                        }
                    }
                    
                    group.style.transform = `translateY(${scrollPositions[index]}px)`;
                });
                
                animationFrame = requestAnimationFrame(animatePhones);
            }
            
            const phonesContainer = document.querySelector('.phones-container');
            if (phonesContainer) {
                phonesContainer.addEventListener('mouseenter', () => {
                    speeds = [0, 0];
                });
                
                phonesContainer.addEventListener('mouseleave', () => {
                    speeds = [0.2, -0.2];
                });
            }
            
            setTimeout(() => {
                animatePhones();
            }, 100);
            

            window.addEventListener('resize', () => {
                groups.forEach((group, index) => {
                    const images = Array.from(group.children).filter(img => !img.classList.contains('phone-clone'));
                    let newTotal = 0;
                    images.forEach(img => {
                        newTotal += img.offsetHeight + 40;
                    });
                    totalHeights[index] = newTotal;
                });
            });
            
            window.addEventListener('beforeunload', () => {
                if (animationFrame) {
                    cancelAnimationFrame(animationFrame);
                }
            });
        }
        
        // ===== FORMULARIO DE CONTACTO CON EMAILJS =====
        function initContactForm() {
            const contactForm = document.querySelector('.ng-contact-card-box form');
            
            if (!contactForm) {
                console.log('❌ Formulario no encontrado');
                return;
            }
            
            console.log('✅ Formulario encontrado, configurando...');
            
            const SERVICE_ID = "service_j0r3k2h";
            const TEMPLATE_ID = "TU_TEMPLATE_ID_AQUI";
            
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const emailInput = this.querySelector('input[type="email"]');
                const subjectInput = this.querySelector('input[type="text"]');
                const messageTextarea = this.querySelector('textarea');
                
                if (!emailInput || !subjectInput || !messageTextarea) {
                    console.error('❌ No se encontraron los campos del formulario');
                    mostrarNotificacion('Error en el formulario', 'error');
                    return;
                }
                
                const email = emailInput.value;
                const asunto = subjectInput.value;
                const mensaje = messageTextarea.value;
                
                if (!email || !asunto || !mensaje) {
                    mostrarNotificacion('Por favor, completa todos los campos', 'error');
                    return;
                }
                
                const submitBtn = this.querySelector('button[type="submit"]');
                const btnText = submitBtn.textContent;
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
                
                const templateParams = {
                    from_name: email.split('@')[0],
                    from_email: email,
                    subject: asunto,
                    message: mensaje,
                    to_name: 'Nahuel'
                };
                
                console.log('📤 Enviando email...', templateParams);
                
                if (typeof emailjs === 'undefined') {
                    console.error('❌ EmailJS no está disponible');
                    mostrarNotificacion('Error: EmailJS no está cargado', 'error');
                    submitBtn.textContent = btnText;
                    submitBtn.disabled = false;
                    return;
                }
                
                emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
                    .then(function(response) {
                        console.log('✅ Email enviado:', response);
                        mostrarNotificacion('¡Mensaje enviado con éxito! Te responderé a la brevedad', 'success');
                        contactForm.reset();
                    })
                    .catch(function(error) {
                        console.error('❌ Error detallado:', error);
                        
                        let mensajeError = 'Hubo un error al enviar. ';
                        
                        if (error.text === 'Missing public key') {
                            mensajeError += 'Falta configurar la Public Key. Revisa emailjs.init()';
                        } else if (error.text && error.text.includes('service')) {
                            mensajeError += 'Service ID incorrecto.';
                        } else if (error.text && error.text.includes('template')) {
                            mensajeError += 'Template ID incorrecto.';
                        } else {
                            mensajeError += 'Podés escribirme directamente a nahuel.gonzalez@fenixsolutions.com.ar';
                        }
                        
                        mostrarNotificacion(mensajeError, 'error');
                    })
                    .finally(function() {
                        submitBtn.textContent = btnText;
                        submitBtn.disabled = false;
                    });
            });
        }
        
        // NOTIFICACIÓN 
        function mostrarNotificacion(mensaje, tipo) {
            const notificacionesPrevias = document.querySelectorAll('.notificacion');
            notificacionesPrevias.forEach(n => n.remove());
            
            const notificacion = document.createElement('div');
            notificacion.className = `notificacion notificacion-${tipo}`;
            
            const icono = tipo === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
            
            notificacion.innerHTML = `
                <div class="notificacion-contenido">
                    <i class="fas ${icono}"></i>
                    <p>${mensaje}</p>
                </div>
            `;
            
            notificacion.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${tipo === 'success' ? '#4CAF50' : '#f44336'};
                color: white;
                padding: 15px 25px;
                border-radius: 8px;
                box-shadow: 0 4px 15px rgba(0,0,0,0.2);
                z-index: 10001;
                animation: slideIn 0.3s ease;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            `;
            
            document.body.appendChild(notificacion);
            
            setTimeout(() => {
                notificacion.style.animation = 'slideOut 0.3s ease';
                setTimeout(() => notificacion.remove(), 300);
            }, 5000);
        }
        

        const styles = document.createElement('style');
        styles.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(styles);
        

        function generarCarpetasProyectos() {
            const folders = document.querySelectorAll('.folder:not(.folder-plus)');
            const primerosTres = proyectos.slice(0, 3);
            
            primerosTres.forEach((proyecto, index) => {
                if (folders[index]) {
                    const folder = folders[index];
                    const img = folder.querySelector('.web-preview img');
                    if (img) {
                        img.src = proyecto.imagen;
                        img.alt = proyecto.titulo;
                        img.loading = 'lazy';
                    }
                    const label = folder.querySelector('.label-text');
                    if (label) {
                        label.textContent = proyecto.titulo;
                    }
                    folder.dataset.proyectoIndex = index;
                }
            });
        }
        
        function initMenuHamburguesa() {
            const menuToggle = document.getElementById('menuToggle');
            const menuClose = document.getElementById('menuClose');
            const navMenu = document.getElementById('navMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            
            if (!menuToggle || !navMenu) return;
            
            function openMenu() {
                navMenu.classList.add('active');
                if (menuOverlay) menuOverlay.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function closeMenu() {
                navMenu.classList.remove('active');
                if (menuOverlay) menuOverlay.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            menuToggle.addEventListener('click', openMenu);
            if (menuClose) menuClose.addEventListener('click', closeMenu);
            if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);
            
            window.addEventListener('resize', function() {
                if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                    closeMenu();
                }
            });
        }
        
        function initScrollSuave() {
            const navLinks = document.querySelectorAll('.nav-link');
            const navMenu = document.getElementById('navMenu');
            const menuOverlay = document.getElementById('menuOverlay');
            
            navLinks.forEach(link => {
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    const targetId = this.getAttribute('data-target');
                    if (!targetId) return;
                    
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                        let offset = targetId === 'contacto' ? -300 : 100;
                        const elementPosition = targetElement.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                        
                        if (navMenu && navMenu.classList.contains('active')) {
                            navMenu.classList.remove('active');
                            if (menuOverlay) menuOverlay.classList.remove('active');
                            document.body.style.overflow = '';
                        }
                    }
                });
            });
        }
        
        function initSobreMi() {
            const bubbles = document.querySelectorAll('.info-bubble');
            const panel = document.getElementById('text-display-panel');
            const displayText = document.getElementById('display-text');
            const closeBtn = document.getElementById('close-panel');
            

            const mensajes = {
                quien: "<div style='display: flex; align-items: center; gap: 10px; margin-bottom: 15px;'><i class='fas fa-user' style='font-size: 2rem; color: #f16322;'></i><strong style='font-size: 1.5rem; color: #f16322;'>¿Quién soy?</strong></div><p style='font-size: 1rem; line-height: 1.6;'>Soy Nahuel, desarrollador web apasionado por crear soluciones digitales. Me especializo en ayudar a emprendedores y pequeñas empresas a tener presencia online efectiva.</p>",
                
                como: "<div style='display: flex; align-items: center; gap: 10px; margin-bottom: 15px;'><i class='fas fa-cogs' style='font-size: 2rem; color: #f16322;'></i><strong style='font-size: 1.5rem; color: #f16322;'>¿Cómo trabajo?</strong></div><p style='font-size: 1rem; line-height: 1.6;'>Trabajo de forma cercana y colaborativa, escuchando tus necesidades y traduciéndolas en soluciones digitales. Me adapto a tus tiempos y presupuesto.</p>",
                
                que: "<div style='display: flex; align-items: center; gap: 10px; margin-bottom: 15px;'><i class='fas fa-laptop-code' style='font-size: 2rem; color: #f16322;'></i><strong style='font-size: 1.5rem; color: #f16322;'>¿Qué hago?</strong></div><p style='font-size: 1rem; line-height: 1.6;'>Desarrollo sitios web personalizados, landing pages, tiendas online y sistemas a medida. Cada proyecto es único y diseñado para cumplir objetivos específicos.</p>",
                
                enfoque: "<div style='display: flex; align-items: center; gap: 10px; margin-bottom: 15px;'><i class='fas fa-bullseye' style='font-size: 2rem; color: #f16322;'></i><strong style='font-size: 1.5rem; color: #f16322;'>Mi enfoque</strong></div><p style='font-size: 1rem; line-height: 1.6;'>No uso plantillas genéricas. Analizo cada proyecto, diseño pensando en el usuario final y desarrollo con código limpio y optimizado.</p>",
                
                objetivo: "<div style='display: flex; align-items: center; gap: 10px; margin-bottom: 15px;'><i class='fas fa-rocket' style='font-size: 2rem; color: #f16322;'></i><strong style='font-size: 1.5rem; color: #f16322;'>Mi objetivo</strong></div><p style='font-size: 1rem; line-height: 1.6;'>Ayudar a emprendedores y negocios a tener presencia online profesional que realmente funcione y ayude a hacer crecer su proyecto.</p>"
            };
            
            if (!bubbles.length || !panel || !displayText) return;
            
            bubbles.forEach(bubble => {
                bubble.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const key = this.getAttribute('data-key');
                    
                    if (key && mensajes[key]) {
                        displayText.innerHTML = mensajes[key];
                        
                        const rect = this.getBoundingClientRect();
                        let left = rect.left;
                        const panelWidth = 350;
                        
                        if (left + panelWidth > window.innerWidth - 20) {
                            left = window.innerWidth - panelWidth - 20;
                        }
                        if (left < 20) left = 20;
                        
                        panel.style.position = 'fixed';
                        panel.style.top = (rect.bottom + 10) + 'px';
                        panel.style.left = left + 'px';
                        panel.style.display = 'block';
                        panel.classList.add('active');
                    }
                });
            });
            
            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    panel.classList.remove('active');
                    panel.style.display = 'none';
                });
            }
            
            document.addEventListener('click', function(e) {
                if (panel.classList.contains('active') && 
                    !panel.contains(e.target) && 
                    !e.target.closest('.info-bubble')) {
                    panel.classList.remove('active');
                    panel.style.display = 'none';
                }
            });
        }
        
        function initModalServicios() {
            const plusCard = document.querySelector('.plus-card');
            const servicesModal = document.getElementById('servicesModal');
            const closeServicesBtn = servicesModal?.querySelector('.close-btn');
            
            if (!plusCard || !servicesModal) return;
            
            function openModal() {
                servicesModal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
            
            function closeModal() {
                servicesModal.style.display = 'none';
                document.body.style.overflow = '';
            }
            
            plusCard.addEventListener('click', openModal);
            if (closeServicesBtn) closeServicesBtn.addEventListener('click', closeModal);
            
            servicesModal.addEventListener('click', function(e) {
                if (e.target === servicesModal) closeModal();
            });
        }
        
        function initModalProyectos() {
            const folders = document.querySelectorAll('.folder');
            const proyectosModal = document.getElementById('proyectosModal');
            const proyectosModalBody = document.getElementById('proyectosModalBody');
            const closeProyectosBtn = proyectosModal?.querySelector('.close-btn');
            
            if (!proyectosModal || !proyectosModalBody) return;
            
            function abrirModal(tipo) {
                proyectosModalBody.innerHTML = '';
                
                let proyectosAMostrar = tipo === 'todos' ? proyectos : [proyectos[parseInt(tipo)]];
                
                proyectosAMostrar.forEach(p => {
                    const techs = p.tecnologias.map(t => `<span class="tecnologia-tag">${t}</span>`).join('');
                    
                    const html = `
                        <div class="proyecto-item">
                            <div class="proyecto-imagen">
                                <img src="${p.imagen}" alt="${p.titulo}" loading="lazy" style="width:100%; height:100%; object-fit:cover;">
                            </div>
                            <div class="proyecto-info">
                                <h3>${p.titulo}</h3>
                                <p>${p.descripcion}</p>
                                <div class="proyecto-tecnologias">${techs}</div>
                                <div class="proyecto-links">
                                    <a href="${p.linkDemo}" target="_blank"><i class="fas fa-external-link-alt"></i> Visitar Web</a>
                                    <a href="${p.linkRepo}" target="_blank"><i class="fab fa-github"></i> Código</a>
                                </div>
                            </div>
                        </div>
                    `;
                    
                    proyectosModalBody.innerHTML += html;
                });
                
                proyectosModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
            
            function cerrarModal() {
                proyectosModal.classList.remove('active');
                document.body.style.overflow = '';
            }
            
            folders.forEach((folder, index) => {
                folder.addEventListener('click', function() {
                    if (folder.classList.contains('folder-plus')) {
                        abrirModal('todos');
                    } else if (folder.dataset.proyectoIndex !== undefined) {
                        abrirModal(folder.dataset.proyectoIndex);
                    }
                });
            });
            
            if (closeProyectosBtn) closeProyectosBtn.addEventListener('click', cerrarModal);
            
            proyectosModal.addEventListener('click', function(e) {
                if (e.target === proyectosModal) cerrarModal();
            });
        }
        
        function initFaq() {
            const faqItems = document.querySelectorAll('.faq-item');
            
            faqItems.forEach(item => {
                const question = item.querySelector('.faq-question');
                if (question) {
                    question.addEventListener('click', function() {
                        faqItems.forEach(other => {
                            if (other !== item) other.classList.remove('active');
                        });
                        item.classList.toggle('active');
                    });
                }
            });
        }
        

        function init() {
            generarCarpetasProyectos();
            initMenuHamburguesa();
            initScrollSuave();
            initSobreMi();
            initModalServicios();
            initModalProyectos();
            initFaq();
            initContactForm();
            initPhonesCarousel(); 
            initMobileCarousel();
            
            console.log('✅ Todos los módulos inicializados');
        }
        
        init();
    }); 
})(); 
