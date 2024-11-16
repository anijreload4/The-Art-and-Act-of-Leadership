css
/* Global Variables */
:root {
    --primary-color: #2c3e50;
    --secondary-color: #3498db;
    --accent-color: #e74c3c;
    --text-color: #333;
    --light-text: #fff;
    --background-color: #f5f6fa;
    --border-radius: 8px;
    --box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Base Styles */
body {
    font-family: 'Arial', sans-serif;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    background-color: var(--background-color);
    color: var(--text-color);
}

/* Header Styles */
.main-header {
    background-color: var(--primary-color);
    color: var(--light-text);
    padding: 2rem;
    text-align: center;
}

/* Navigation */
.main-nav {
    background-color: var(--secondary-color);
    padding: 1rem;
}

.main-nav ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
}

.main-nav a {
    color: var(--light-text);
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    transition: background-color 0.3s;
}

.main-nav a:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

/* Content Sections */
.session-content {
    max-width: 1200px;
    margin: 2rem auto;
    padding: 2rem;
    background-color: white;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
}

/* Scripture Boxes */
.scripture-box {
    background-color: #f8f9fa;
    border-left: 4px solid var(--accent-color);
    padding: 1rem;
    margin: 1rem 0;
}

/* Activities and Exercises */
.activity {
    background-color: #e8f4f8;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin: 1rem 0;
}

/* Reflection Sections */
.reflection {
    background-color: #fff3e0;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    margin: 1rem 0;
}

/* Footer */
.main-footer {
    background-color: var(--primary-color);
    color: var(--light-text);
    text-align: center;
    padding: 1rem;
    margin-top: 2rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .main-nav ul {
        flex-direction: column;
        align-items: center;
    }
    
    .session-content {
        margin: 1rem;
        padding: 1rem;
    }
}