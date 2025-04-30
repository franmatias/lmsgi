document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    // Menú Hamburguesa
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
     // Botón Top
    const backToTopButton = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('show');
        } else {
             backToTopButton.classList.remove('show');
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Control de sliders
    const sliders = [
        { slider: document.getElementById('slider1'), valueSpan: document.getElementById('value1') },
        { slider: document.getElementById('slider2'), valueSpan: document.getElementById('value2') },
        { slider: document.getElementById('slider3'), valueSpan: document.getElementById('value3') },
        { slider: document.getElementById('slider4'), valueSpan: document.getElementById('value4') },
        { slider: document.getElementById('slider5'), valueSpan: document.getElementById('value5') }
    ];

    sliders.forEach((s, index) => {
        s.slider.addEventListener('input', function() {
            updateSliders(index);
        });
    });

    function updateSliders(changedIndex) {
        let total = sliders.reduce((sum, s) => sum + parseInt(s.slider.value), 0);
        if (total != 100) {
            let difference = 100 - total;
            let others = sliders.filter((_, idx) => idx !== changedIndex);
            let totalOthers = others.reduce((sum, s) => sum + parseInt(s.slider.value), 0);

            others.forEach(s => {
                let value = parseInt(s.slider.value);
                let adjustment = totalOthers > 0 ? (value / totalOthers) * difference : difference / (sliders.length - 1);
                s.slider.value = Math.max(0, Math.min(100, value + adjustment));
                s.valueSpan.textContent = Math.round(s.slider.value);
            });
        }
        sliders.forEach(s => {
            s.valueSpan.textContent = s.slider.value;
        });
    }
    
    // Inicializar los valores de los sliders
    sliders.forEach(s => {
        s.valueSpan.textContent = s.slider.value;
    });

    // Scroll suave para los enlaces del menú
    document.querySelectorAll('.nav-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Si el menú móvil está abierto, cerrarlo después de hacer clic
            navLinks.classList.remove('active');
        });
    });
});