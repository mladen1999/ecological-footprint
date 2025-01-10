export default function Form() {
    const formSection = document.createElement('section');
    formSection.id = 'form-section';
    formSection.innerHTML = `
        <h2>Unesite svoje podatke</h2>
        <form id="eco-form">
            <div class="form-group">
                <label for="transport">Način transporta:</label>
                <select id="transport" name="transport" required>
                    <option value="car">Automobil</option>
                    <option value="bike">Bicikl</option>
                    <option value="bus">Autobus</option>
                    <option value="walk">Peške</option>
                </select>
            </div>

            <div class="form-group">
                <label for="energy">Potrošnja energije (kWh mesečno):</label>
                <input type="number" id="energy" name="energy" min="0" required>
            </div>

            <div class="form-group">
                <label for="meat">Ishrana - meso (puta nedeljno):</label>
                <input type="number" id="meat" name="meat" min="0" required>
            </div>

            <button type="submit">Prikaži rezultate</button>
        </form>
    `;

    // Dodajemo event listener za obradu podataka nakon submit-a
    formSection.querySelector('#eco-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            transport: formData.get('transport'),
            energy: parseInt(formData.get('energy')),
            meat: parseInt(formData.get('meat'))
        };

        console.log('Podaci uneti u formular:', data); // Provera unetih podataka
        alert('Podaci uspešno poslati!'); // Obaveštenje korisniku
    });

    return formSection;
}
