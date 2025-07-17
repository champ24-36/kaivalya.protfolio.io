import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <nav>
                <a href="#projects">Projects</a>
                <a href="#skills">Skills</a>
                <a href="#achievements">Achievements</a>
                <a href="#contact">Contact</a>
            </nav>
            <Projects />
            <Skills />
            <Achievements />
            <Contact />
            <Footer />
        </div>
    );
};

const Header = () => {
    return (
        <header className="header">
            <h1>Hi</h1>
            <h1>I'm Kaivalya</h1>
            <h2>This is my Journey in the Tech World</h2>
        </header>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <h2>Projects</h2>
            <div className="project">
                <img src="project1-placeholder.jpg" alt="Project 1" />
                <h3>Shanti – Mental Health AI Companion</h3>
                <p>Voice-enabled wellness platform using Whisper, Google TTS, and LangChain.</p>
            </div>
            <div className="project">
                <img src="project2-placeholder.jpg" alt="Project 2" />
                <h3>Vakeel Saab AI – Legal Aid Chatbot</h3>
                <p>Multilingual chatbot using HuggingFace and Dialogflow.</p>
            </div>
            <div className="project">
                <img src="project3-placeholder.jpg" alt="Project 3" />
                <h3>Game Hub (.tsx Suite)</h3>
                <p>Interactive TypeScript React suite featuring various games.</p>
            </div>
        </section>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="skills">
            <h2>Skills</h2>
            <p><strong>Languages:</strong> Python, C++, Java, JavaScript, TypeScript</p>
            <p><strong>Frameworks:</strong> React, Node.js, Firebase, Flask</p>
            <p><strong>Tools:</strong> Git, MongoDB, Whisper, Dialogflow</p>
        </section>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="achievements">
            <h2>Achievements & Activities</h2>
            <ul>
                <li>Conducted a college workshop on AI fundamentals</li>
                <li>Main Editor & Columnist – College Editorial Board</li>
                <li>Participant – GDSC Hackathon, Vizag</li>
            </ul>
        </section>
    );
};

const Contact = () => {
    return (
        <section id="contact" className="contact">
            <h2>Contact</h2>
            <p>Email: <a href="mailto:iragavarapukaivalya@gmail.com">iragavarapukaivalya@gmail.com</a></p>
            <p>GitHub: <a href="https://github.com/champ24-36">champ24-36</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/iragavarapu-kaivalya-91aab930b">iragavarapu-kaivalya</a></p>
            <p><a className="button" href="https://1drv.ms/w/c/10c409c44d68d67a/EeuUq7yJWRRJi_7tiKLiEgIBkzAlgQWAw6ky5iwrN3gu9g?e=3wA9SV">Download Resume (PDF)</a></p>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="footer">
            <p>© 2025 Iragavarapu Kaivalya</p>
        </footer>
    );
};

// CSS Styles
const styles = `
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(to right, #6a1b9a, #000000);
    color: white;
    overflow-x: hidden;
}

nav {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    text-align: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

nav a {
    margin: 0 1rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.3s;
}

nav a:hover {
    color: #ffcc00;
}

.header {
    text-align: center;
    padding: 10rem 0;
}

h1, h2 {
    margin: 0;
}

h1 {
    font-size: 5rem;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

h2 {
    font-size: 2.5rem;
    opacity: 0.8;
}

section {
    padding: 4rem 2rem;
    max-width: 1200px;
    margin: auto;
}

.project {
    margin-bottom: 2rem;
    text-align: center;
    transition: transform 0.3s;
}

.project:hover {
    transform: scale(1.05);
}

.project img {
    width: 100%;
    max-width: 400px;
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
}

.footer {
    text-align: center;
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    color: #ccc;
}

.button {
    background-color: #ffcc00;
    color: black;
    padding: 0.5rem 1rem;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #e6b800;
}

@media (max-width: 768px) {
    h1 {
        font-size: 3rem;
    }
    h2 {
        font-size: 2rem;
    }
    nav a {
        display: block;
        margin: 0.5rem 0;
    }
}
`;

// Inject styles into the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

ReactDOM.render(<App />, document.getElementById('root'));
