(function() {
      const hamburger = document.getElementById('hamburger');
      const navLinks = document.getElementById('navLinks');

      if (hamburger && navLinks) {
        hamburger.addEventListener('click', function(e) {
          e.stopPropagation();
          navLinks.classList.toggle('active');
        });

        navLinks.querySelectorAll('a').forEach(link => {
          link.addEventListener('click', () => {
            navLinks.classList.remove('active');
          });
        });

        document.addEventListener('click', function(event) {
          const isClickInside = navLinks.contains(event.target) || hamburger.contains(event.target);
          if (!isClickInside && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
          }
        });
      }

      const form = document.getElementById('contactForm');
      if (form) {
        form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Thanks for your message! (demo)');
          form.reset();
        });
      }
    })();
