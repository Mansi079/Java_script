// Advanced animations and interactions

class AnimationController {
  constructor() {
    this.init();
  }

  init() {
    this.setupParticleSystem();
    this.setupScrollAnimations();
    this.setupMouseEffects();
    this.setupLoadingScreen();
    this.setupTypewriterEffect();
    this.setupParallaxEffect();
    this.setupMorphingShapes();
  }

  // Particle system
  setupParticleSystem() {
    let particleCount = 0;
    const maxParticles = 50;

    document.addEventListener('mousemove', (e) => {
      if (particleCount < maxParticles && Math.random() > 0.9) {
        this.createParticle(e.clientX, e.clientY);
        particleCount++;
      }
    });

    // Create particles on scroll
    window.addEventListener('scroll', () => {
      if (particleCount < maxParticles && Math.random() > 0.95) {
        this.createParticle(
          Math.random() * window.innerWidth,
          Math.random() * window.innerHeight
        );
        particleCount++;
      }
    });
  }

  createParticle(x, y) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = x + 'px';
    particle.style.top = y + 'px';

    // Random color variations
    const colors = ['#667eea', '#764ba2', '#ff6b6b', '#4ecdc4', '#45b7d1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    particle.style.background = color;

    document.body.appendChild(particle);

    // Remove particle after animation
    setTimeout(() => {
      if (particle.parentNode) {
        particle.parentNode.removeChild(particle);
      }
    }, 3000);
  }

  // Advanced scroll animations
  setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const element = entry.target;

          // Add different animation classes based on element type
          if (element.classList.contains('skill-card')) {
            element.style.animationDelay = Math.random() * 0.5 + 's';
          }

          if (element.classList.contains('project-card')) {
            element.style.animationDelay = Math.random() * 0.3 + 's';
          }

          element.classList.add('animate');

          // Add special effects
          if (element.querySelector('.progress-bar')) {
            setTimeout(() => {
              this.animateProgressBars(element);
            }, 500);
          }
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all animated elements
    document.querySelectorAll('.skill-card, .project-card, .scroll-animation').forEach(el => {
      observer.observe(el);
    });
  }

  // Animate progress bars
  animateProgressBars(container) {
    const progressBars = container.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
      const width = bar.getAttribute('data-width');
      bar.style.width = width;

      // Add counting animation
      const percentage = parseInt(width);
      this.animateCounter(bar, percentage);
    });
  }

  animateCounter(element, target) {
    const counter = document.createElement('span');
    counter.className = 'progress-counter';
    counter.style.position = 'absolute';
    counter.style.right = '10px';
    counter.style.top = '-25px';
    counter.style.fontSize = '12px';
    counter.style.fontWeight = 'bold';
    counter.style.color = '#667eea';

    element.parentNode.style.position = 'relative';
    element.parentNode.appendChild(counter);

    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
      current += increment;
      counter.textContent = Math.round(current) + '%';

      if (current >= target) {
        clearInterval(timer);
        counter.textContent = target + '%';
      }
    }, 20);
  }

  // Mouse effects
  setupMouseEffects() {
    // Cursor trail effect
    let mouseTrail = [];

    document.addEventListener('mousemove', (e) => {
      mouseTrail.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });

      // Keep only recent positions
      mouseTrail = mouseTrail.filter(point =>
        Date.now() - point.timestamp < 1000
      );

      // Create trail effect
      if (Math.random() > 0.8) {
        this.createTrailElement(e.clientX, e.clientY);
      }
    });

    // Magnetic effect for buttons
    document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
      button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.05)';
      });

      button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
      });
    });
  }

  createTrailElement(x, y) {
    const trail = document.createElement('div');
    trail.style.position = 'fixed';
    trail.style.left = x + 'px';
    trail.style.top = y + 'px';
    trail.style.width = '6px';
    trail.style.height = '6px';
    trail.style.background = 'rgba(102, 126, 234, 0.3)';
    trail.style.borderRadius = '50%';
    trail.style.pointerEvents = 'none';
    trail.style.zIndex = '9998';
    trail.style.transition = 'all 0.5s ease';

    document.body.appendChild(trail);

    setTimeout(() => {
      trail.style.opacity = '0';
      trail.style.transform = 'scale(0)';
      setTimeout(() => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail);
        }
      }, 500);
    }, 100);
  }

  // Loading screen
  setupLoadingScreen() {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.className = 'loading-overlay';
    loadingOverlay.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loadingOverlay);

    window.addEventListener('load', () => {
      setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
          if (loadingOverlay.parentNode) {
            loadingOverlay.parentNode.removeChild(loadingOverlay);
          }
        }, 500);
      }, 1000);
    });
  }

  // Enhanced typewriter effect
  setupTypewriterEffect() {
    const typewriterElements = document.querySelectorAll('.typewriter');

    typewriterElements.forEach(element => {
      const text = element.textContent;
      element.textContent = '';
      element.style.borderRight = '2px solid #667eea';

      let index = 0;
      const speed = 100;

      const typeText = () => {
        if (index < text.length) {
          element.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, speed);
        } else {
          // Blinking cursor effect
          setInterval(() => {
            element.style.borderRight = element.style.borderRight === '2px solid transparent'
              ? '2px solid #667eea'
              : '2px solid transparent';
          }, 500);
        }
      };

      // Start typing with delay
      setTimeout(typeText, 1500);
    });
  }

  // Parallax scrolling
  setupParallaxEffect() {
    const parallaxElements = document.querySelectorAll('.parallax-element');

    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
      });
    });
  }

  // Morphing shapes
  setupMorphingShapes() {
    const hero = document.querySelector('.hero');

    // Create morphing shapes
    for (let i = 0; i < 3; i++) {
      const shape = document.createElement('div');
      shape.className = 'morphing-shape';
      shape.style.position = 'absolute';
      shape.style.opacity = '0.1';
      shape.style.animationDelay = `${i * 1.5}s`;
      shape.style.top = `${Math.random() * 80 + 10}%`;
      shape.style.left = `${Math.random() * 80 + 10}%`;

      hero.appendChild(shape);
    }
  }

  // Text reveal animation
  revealText(element) {
    element.classList.add('text-reveal');

    setTimeout(() => {
      element.style.opacity = '1';
    }, 100);
  }

  // Glitch effect
  addGlitchEffect(element, text) {
    element.setAttribute('data-text', text);
    element.classList.add('glitch');

    setTimeout(() => {
      element.classList.remove('glitch');
    }, 3000);
  }

  // Floating elements
  createFloatingElements() {
    const container = document.querySelector('.hero');
    const symbols = ['</', '>', '{', '}', '()', '[]', '&&', '||'];

    symbols.forEach((symbol, index) => {
      const element = document.createElement('div');
      element.className = 'floating-element';
      element.textContent = symbol;
      element.style.fontSize = '2rem';
      element.style.color = 'rgba(255, 255, 255, 0.1)';
      element.style.fontWeight = 'bold';
      element.style.animationDelay = `${index * 0.5}s`;

      container.appendChild(element);
    });
  }

  // Smooth page transitions
  setupPageTransitions() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Add transition effect
          document.body.style.transition = 'opacity 0.3s ease';
          document.body.style.opacity = '0.8';

          setTimeout(() => {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });

            document.body.style.opacity = '1';
          }, 150);
        }
      });
    });
  }

  // Dynamic background
  createDynamicBackground() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.zIndex = '-1';
    canvas.style.pointerEvents = 'none';

    document.body.appendChild(canvas);

    const ctx = canvas.getContext('2d');
    let animationId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const particles = [];

    class BackgroundParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.globalAlpha = this.opacity;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#667eea';
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push(new BackgroundParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
  }
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const animationController = new AnimationController();

  // Add floating elements to hero
  animationController.createFloatingElements();

  // Setup page transitions
  animationController.setupPageTransitions();

  // Create dynamic background
  animationController.createDynamicBackground();

  // Add glitch effect to hero title
  setTimeout(() => {
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
      animationController.addGlitchEffect(heroTitle, heroTitle.textContent);
    }
  }, 3000);
});

// Additional utility functions
function animateOnScroll(element, animationClass) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add(animationClass);
      }
    });
  });

  observer.observe(element);
}

function createRippleEffect(element) {
  element.addEventListener('click', function (e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 600);
  });
}

// Add ripple effect to buttons
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cta-button, .submit-btn').forEach(button => {
    createRippleEffect(button);
  });
});

// CSS for ripple effect
const rippleCSS = `
.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Add ripple CSS to document
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);
