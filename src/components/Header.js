export default function Header() {
    const header = document.createElement('header');
    header.innerHTML = `
        <h1>Interaktivna Stranica za Ekološki Otisak</h1>
        <nav>
            <ul>
                <li><a href="#" onclick="loadPage('home')">Početna</a></li>
                <li><a href="#" onclick="loadPage('form')">Unos Podataka</a></li>
                <li><a href="#" onclick="loadPage('results')">Rezultati</a></li>
                <li><a href="#" onclick="loadPage('about')">O projektu</a></li>
            </ul>
        </nav>
    `;
    return header;
}
