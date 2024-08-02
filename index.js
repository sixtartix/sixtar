<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sixtar_tix - Développeur de bots Discord</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" />
    <style>
        :root {
            --primary-color: #00ffff;
            --secondary-color: #ff00ff;
            --background-color: #000033;
            --text-color: #ffffff;
        }

        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Roboto', sans-serif;
            background: linear-gradient(45deg, var(--background-color), #000066);
            color: var(--text-color);
            overflow-x: hidden;
        }

        .stars {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
        }

        .star {
            position: absolute;
            background: var(--text-color);
            border-radius: 50%;
            animation: twinkle 3s infinite ease-in-out;
        }

        @keyframes twinkle {
            0%, 100% { opacity: 0.5; }
            50% { opacity: 1; }
        }

        header {
            background-color: rgba(0, 0, 0, 0.7);
            padding: 20px;
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            transition: background-color 0.3s ease;
        }

        header.scrolled {
            background-color: rgba(0, 0, 51, 0.9);
        }

        nav ul {
            list-style-type: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        nav ul li {
            margin: 0 15px;
        }

        nav ul li a {
            color: var(--text-color);
            text-decoration: none;
            transition: color 0.3s ease;
            font-weight: bold;
        }

        nav ul li a:hover {
            color: var(--primary-color);
        }

        main {
            max-width: 1200px;
            margin: 80px auto 0;
            padding: 20px;
        }

        .section {
            margin-bottom: 60px;
            background-color: rgba(0, 0, 0, 0.5);
            padding: 30px;
            border-radius: 15px;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.2);
        }

        h1, h2 {
            color: var(--primary-color);
            text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        .cta-button {
            display: inline-block;
            background-color: var(--primary-color);
            color: var(--background-color);
            padding: 12px 24px;
            border-radius: 25px;
            text-decoration: none;
            transition: all 0.3s ease;
            font-weight: bold;
            text-transform: uppercase;
        }

        .cta-button:hover {
            background-color: var(--secondary-color);
            transform: scale(1.05);
            box-shadow: 0 0 15px rgba(255, 0, 255, 0.5);
        }

        .emoji {
            font-size: 1.5em;
            margin-right: 5px;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }

        .float-animation {
            animation: float 4s ease-in-out infinite;
        }

        .bot-image {
            width: 100%;
            max-width: 400px;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
            transition: transform 0.3s ease;
        }

        .bot-image:hover {
            transform: scale(1.05);
        }

        .testimonial {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }

        .testimonial:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0, 255, 255, 0.2);
        }

        form input, form textarea {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border-radius: 5px;
            border: none;
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--text-color);
        }

        form button {
            background-color: var(--primary-color);
            color: var(--background-color);
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        form button:hover {
            background-color: var(--secondary-color);
        }

        .pricing-card {
            background-color: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 20px;
            transition: transform 0.3s ease;
        }

        .pricing-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 10px 20px rgba(0, 255, 255, 0.3);
        }

        footer {
            text-align: center;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.7);
            margin-top: 40px;
        }
    </style>
</head>
<body>
    <div id="stars" class="stars"></div>

    <header>
        <h1>Sixtar_tix <span class="emoji">🤖</span></h1>
        <nav>
            <ul>
                <li><a href="#accueil">Accueil</a></li>
                <li><a href="#a-propos">À propos</a></li>
                <li><a href="#creations">Mes créations</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#tarifs">Tarifs</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <section id="accueil" class="section" data-aos="fade-up">
            <h2>Bienvenue chez Sixtar_tix <span class="emoji">👋</span></h2>
            <p>Développeur de bots Discord personnalisés pour enrichir votre expérience communautaire.</p>
            <a href="#contact" class="cta-button float-animation">Commandez votre bot sur mesure dès maintenant ! <span class="emoji">🚀</span></a>
            <img src="/api/placeholder/600/400" alt="Image d'accueil" class="bot-image" data-aos="zoom-in" data-aos-delay="300">
        </section>

        <section id="a-propos" class="section" data-aos="fade-up">
            <h2>À propos <span class="emoji">💡</span></h2>
            <p>Expert en développement de bots Discord, je crée des solutions sur mesure pour répondre à vos besoins spécifiques.</p>
            <h3>Pourquoi me choisir ?</h3>
            <ul>
                <li>Expertise technique approfondie <span class="emoji">🔧</span></li>
                <li>Solutions 100% personnalisables <span class="emoji">🎨</span></li>
                <li>Support réactif et professionnel <span class="emoji">🛠️</span></li>
            </ul>
            <h3>Témoignages clients</h3>
            <div class="testimonial" data-aos="fade-right">
                <blockquote>"Le bot créé par Sixtar_tix a révolutionné la gestion de notre serveur !" - Client A</blockquote>
            </div>
            <div class="testimonial" data-aos="fade-left">
                <blockquote>"Un service rapide et des fonctionnalités impressionnantes. Hautement recommandé !" - Client B</blockquote>
            </div>
        </section>

        <section id="creations" class="section" data-aos="fade-up">
            <h2>Mes créations <span class="emoji">✨</span></h2>
            <div data-aos="fade-right">
                <h3>Bot Sikon</h3>
                <p>Un bot Discord 100% personnalisable pour répondre à tous vos besoins.</p>
                <img src="/api/placeholder/500/300" alt="Bot Sikon" class="bot-image">
                <a href="#" class="cta-button">Découvrir Sikon <span class="emoji">🔍</span></a>
            </div>
            <div data-aos="fade-left">
                <h3>Bot Créate</h3>
                <p>Créez des maquettes de serveur Discord et mettez-les en place en seulement 10 secondes !</p>
                <img src="/api/placeholder/500/300" alt="Bot Créate" class="bot-image">
                <a href="#" class="cta-button">En savoir plus sur Créate <span class="emoji">⚡</span></a>
            </div>
        </section>

        <section id="contact" class="section" data-aos="fade-up">
            <h2>Contact <span class="emoji">📩</span></h2>
            <p>Email : sixtar_dev@gmail.com</p>
            <form data-aos="zoom-in">
                <input type="text" placeholder="Nom" required>
                <input type="email" placeholder="Email" required>
                <textarea placeholder="Message" required></textarea>
                <button type="submit" class="cta-button">Envoyer <span class="emoji">📤</span></button>
            </form>
        </section>

        <section id="blog" class="section" data-aos="fade-up">
            <h2>Blog <span class="emoji">📝</span></h2>
            <article data-aos="fade-right">
                <h3>Les dernières tendances en matière de bots Discord</h3>
                <p>Découvrez les fonctionnalités les plus demandées en 2024...</p>
                <a href="#" class="cta-button">Lire la suite</a>
            </article>
            <article data-aos="fade-left">
                <h3>Comment choisir le bon bot pour votre serveur</h3>
                <p>Guide complet pour sélectionner le bot parfait...</p>
                <a href="#" class="cta-button">Lire la suite</a>
            </article>
        </section>

        <section id="tarifs" class="section" data-aos="fade-up">
            <h2>Tarifs <span class="emoji">💰</span></h2>
            <div class="pricing-card" data-aos="flip-left">
                <h3>Bot Standard</h3>
                <p>À partir de 50€</p>
                <ul>
                    <li>Fonctionnalités de base</li>
                    <li>Support par email</li>
                </ul>
                <a href="#contact" class="cta-button">Commander</a>
            </div>
            <div class="pricing-card" data-aos="flip-right">
                <h3>Bot Personnalisé</h3>
                <p>Sur devis</p>
                <ul>
                    <li>Fonctionnalités sur mesure</li>
                    <li>Support prioritaire</li>
                </ul>
                <a href="#contact" class="cta-button">Demander un devis</a>
            </div>
        </section>
    </main>

    <footer>
        <p>&copy; 2024 Sixtar_tix. Tous droits réservés.</p>
    </footer>

    <script>
        // Création des étoiles
        function createStars() {
            const starsContainer = document.getElementById('stars');
            const numberOfStars = 200;

            for (let i = 0; i < numberOfStars; i++) {
                const star = document.createElement('div');
                star.className = 'star';
                star.style.width = `${Math.random() * 3}px`;
                star.style.height = star.style.width;
                star.style.left = `${Math.random() * 100}%`;
                star.style.top = `${Math.random() * 100}%`;
                star.style.animationDuration = `${Math.random() * 3 + 2}s`;
                star.style.animationDelay = `${Math.random() * 3}s`;
                starsContainer.appendChild(star);
            }
        }

        // Animation de défilement fluide
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Initialisation de l'effet parallaxe
        var scene = document.getElementById('stars');
        var parallaxInstance = new Parallax(scene);

        // Changement de couleur du header au défilement
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        //
