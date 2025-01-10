export default function Home() {
    const homeSection = document.createElement('section');
    homeSection.id = 'home-section';
    homeSection.innerHTML = `
        <h2>Dobrodošli na interaktivnu stranicu za praćenje i analizu ekološkog otiska!</h2>
        <p>Ova stranica omogućava korisnicima da unesu podatke o svojim svakodnevnim aktivnostima kao što su način transporta, potrošnja energije i ishrana, i dobiju analizu svog ekološkog otiska.</p>
        <p>Naš cilj je da podignemo svest o uticaju koji svakodnevne navike imaju na životnu sredinu i da pomognemo korisnicima da naprave pozitivne promene.</p>
        <button id="start-btn">Započnite</button>
    `;

    // Dodavanje event listener-a za dugme "Započnite"
    homeSection.querySelector('#start-btn').addEventListener('click', () => {
        alert('Hvala što ste odlučili da započnete analizu!');
        // Ovde možeš dodati navigaciju ka formi, npr: loadPage('form')
    });

    return homeSection;
}
