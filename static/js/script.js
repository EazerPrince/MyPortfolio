// Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // Scroll animations
        const animateOnScrollElements = document.querySelectorAll('.animate-on-scroll');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                }
            });
        }, {
            threshold: 0.1
        });

        animateOnScrollElements.forEach(element => {
            observer.observe(element);
        });

        // Form submission
        // document.querySelector('form').addEventListener('submit', function(e) {
        //     e.preventDefault();
        //     alert('Thank you for your message! I\'ll get back to you soon.');
        //     this.reset();
        // });

        // Dynamic typing effect for hero section
        const heroText = document.querySelector('.hero p');
        const texts = [
            'Specializing in custom Odoo modules and system integrations',
            'Turning complex business requirements into efficient software solutions',
            'Troubleshooting, Maintenance, Upgrading and Repair of Computers, Laptops, and Printers.'
        ];
        let currentTextIndex = 0;

        function changeHeroText() {
            heroText.style.opacity = '0';
            setTimeout(() => {
                heroText.textContent = texts[currentTextIndex];
                heroText.style.opacity = '1';
                currentTextIndex = (currentTextIndex + 1) % texts.length;
            }, 500);
        }

        // Change text every 4 seconds
        setInterval(changeHeroText, 4000);
