// Učitavanje osnovnih komponenti sajta
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './pages/Home.js';
import Form from './components/Form.js';

// Funkcija za prikaz stranica
function loadPage(page) {
    const root = document.getElementById('root');
    root.innerHTML = ''; // Čisti prethodni sadržaj
    switch (page) {
        case 'home':
            root.appendChild(Home());
            break;
        case 'results':
            // Učitavanje stranice sa rezultatima
            break;
        case 'about':
            // Učitavanje stranice "O projektu"
            break;
        case 'form':
            root.appendChild(Form());
            break;
        default:
            root.appendChild(Home()); // Početna stranica kao podrazumevana
    }
}

// Dodavanje funkcije u globalni objekat
window.loadPage = loadPage;

// Učitavanje početne stranice
loadPage('home');

