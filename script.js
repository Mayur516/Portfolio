    // DOM Elements
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        const closeMenuButton = document.getElementById('close-menu-button');
        const themeToggle = document.getElementById('theme-toggle');
        const mobileThemeToggle = document.getElementById('mobile-theme-toggle');
        const mobileThemeToggleBall = document.getElementById('mobile-theme-toggle-ball');
        const lightIcon = document.getElementById('light-icon');
        const darkIcon = document.getElementById('dark-icon');
        const projectFilterButtons = document.querySelectorAll('.project-filter-btn');
        const projectsContainer = document.getElementById('projects-container');
        const skillsContainer = document.getElementById('skills-container');
        const contactForm = document.getElementById('contact-form');
        const navLinks = document.querySelectorAll('a[href^="#"]');
        
        // Sample project data
        const projects = [
            {
                title: "E-commerce Platform",
                description: "A full-featured e-commerce platform with shopping cart, payment processing, and admin dashboard.",
                tags: ["react", "node.js", "mongodb"],
                category: "web",
                image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/596d9597-59cc-4788-88dd-6f772cc9b605.png",
                alt: "Modern e-commerce website with product listings and shopping cart functionality"
            },
            {
                title: "Health Tracking App",
                description: "A mobile application for tracking fitness goals, nutrition, and health metrics.",
                tags: ["react native", "firebase", "redux"],
                category: "mobile",
                image: "https://placehold.co/600x400",
                alt: "Health tracker mobile app showing fitness statistics and progress charts"
            },
            {
                title: "Portfolio Website",
                description: "A responsive portfolio website designed with accessibility and performance in mind.",
                tags: ["html", "css", "javascript"],
                category: "design",
                image: "https://placehold.co/600x400",
                alt: "Clean portfolio website layout with project showcase and contact form"
            },
            {
                title: "Task Management System",
                description: "A collaborative task management tool with real-time updates and team features.",
                tags: ["vue.js", "express", "postgresql"],
                category: "web",
                image: "https://placehold.co/600x400",
                alt: "Task management interface with kanban board and team collaboration features"
            },
            {
                title: "Restaurant Finder",
                description: "An iOS and Android app for discovering local restaurants with reviews and menus.",
                tags: ["flutter", "django", "sqlite"],
                category: "mobile",
                image: "https://placehold.co/600x400",
                alt: "Mobile app displaying restaurant listings with ratings and photos"
            },
            {
                title: "Design System",
                description: "Comprehensive design system with reusable UI components and documentation.",
                tags: ["figma", "storybook", "styled-components"],
                category: "design",
                image: "https://placehold.co/600x400",
                alt: "Design system showcase with component library and usage guidelines"
            }
        ];
        
        // Sample skills data
        const skills = [
            { name: "HTML5", category: "frontend" },
            { name: "CSS3", category: "frontend" },
            { name: "JavaScript", category: "frontend" },
            { name: "TypeScript", category: "frontend" },
            { name: "React", category: "frontend" },
            { name: "Vue.js", category: "frontend" },
            { name: "Next.js", category: "frontend" },
            { name: "Tailwind CSS", category: "frontend" },
            { name: "SASS", category: "frontend" },
            { name: "Node.js", category: "backend" },
            { name: "Express", category: "backend" },
            { name: "Python", category: "backend" },
            { name: "Django", category: "backend" },
            { name: "Flask", category: "backend" },
            { name: "MongoDB", category: "database" },
            { name: "PostgreSQL", category: "database" },
            { name: "MySQL", category: "database" },
            { name: "Firebase", category: "database" },
            { name: "Git", category: "devops" },
            { name: "Docker", category: "devops" },
            { name: "AWS", category: "devops" },
            { name: "Heroku", category: "devops" },
            { name: "Jenkins", category: "devops" },
            { name: "Figma", category: "design" },
            { name: "Adobe XD", category: "design" },
            { name: "Photoshop", category: "design" },
            { name: "Illustrator", category: "design" }
        ];
        
        // Mobile menu toggle
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.remove('hidden');
        });
        
        closeMenuButton.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
        
        // Close mobile menu when clicking on a link
        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
        
        // Theme toggle
        function toggleTheme() {
            document.documentElement.classList.toggle('dark');
            
            const isDark = document.documentElement.classList.contains('dark');
            localStorage.setItem('darkMode', isDark);
            
            if (isDark) {
                darkIcon.classList.remove('hidden');
                lightIcon.classList.add('hidden');
                mobileThemeToggleBall.classList.remove('translate-x-1');
                mobileThemeToggleBall.classList.add('translate-x-6');
            } else {
                lightIcon.classList.remove('hidden');
                darkIcon.classList.add('hidden');
                mobileThemeToggleBall.classList.remove('translate-x-6');
                mobileThemeToggleBall.classList.add('translate-x-1');
            }
        }
        
        themeToggle.addEventListener('click', toggleTheme);
        mobileThemeToggle.addEventListener('click', toggleTheme);
        
        // Check for saved theme preference or use system preference
        if (localStorage.getItem('darkMode') === 'true' || 
            (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
            darkIcon.classList.remove('hidden');
            lightIcon.classList.add('hidden');
            mobileThemeToggleBall.classList.remove('translate-x-1');
            mobileThemeToggleBall.classList.add('translate-x-6');
        }
        
        // Smooth scrolling for navigation links
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Filter projects
        function filterProjects(category) {
            const filteredProjects = category === 'all' 
                ? projects 
                : projects.filter(project => project.category === category);
            
            renderProjects(filteredProjects);
            
            // Update active button
            projectFilterButtons.forEach(button => {
                if (button.dataset.filter === category) {
                    button.classList.add('bg-indigo-600', 'text-white');
                    button.classList.remove('text-slate-700', 'dark:text-slate-300');
                } else {
                    button.classList.remove('bg-indigo-600', 'text-white');
                    button.classList.add('text-slate-700', 'dark:text-slate-300');
                }
            });
        }
        
        // Render projects
        function renderProjects(projectsToRender) {
            projectsContainer.innerHTML = '';
            
            projectsToRender.forEach(project => {
                const projectCard = document.createElement('div');
                projectCard.className = 'project-card bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-md';
                projectCard.innerHTML = `
                    <div class="h-48 overflow-hidden">
                        <img src="${project.image}" alt="${project.alt}" class="w-full h-full object-cover" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-xl font-bold mb-2 text-slate-800 dark:text-white">${project.title}</h3>
                        <p class="text-slate-600 dark:text-slate-300 mb-4">${project.description}</p>
                        <div class="flex flex-wrap gap-2">
                            ${project.tags.map(tag => `<span class="px-3 py-1 bg-indigo-100 dark:bg-slate-600 text-indigo-800 dark:text-indigo-300 text-xs rounded-full">${tag}</span>`).join('')}
                        </div>
                    </div>
                `;
                
                projectsContainer.appendChild(projectCard);
            });
        }
        
        // Render skills
        function renderSkills() {
            skills.forEach(skill => {
                const skillBadge = document.createElement('div');
                skillBadge.className = 'skill-badge px-4 py-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-center';
                skillBadge.textContent = skill.name;
                skillsContainer.appendChild(skillBadge);
            });
        }
        
        // Contact form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            console.log('Form submitted:', formData);
            
            // Here you would typically send the form data to a server
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
        
        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            filterProjects('all');
            renderSkills();
            
            // Add intersection observer for animations
            const animateElements = document.querySelectorAll('.animate-fade-in');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationPlayState = 'running';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            
            animateElements.forEach(element => {
                observer.observe(element);
                element.style.animationPlayState = 'paused';
            });
        });