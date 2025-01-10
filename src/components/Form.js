import calculateFootprint from '../utils/calculateFootprint.js';

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
                <label for="distance">Udaljenost pređena dnevno (u km):</label>
                <input type="number" id="distance" name="distance" min="0" required>
            </div>

            <div class="form-group">
                <label for="energy">Potrošnja energije (kWh mesečno):</label>
                <input type="number" id="energy" name="energy" min="0" required>
            </div>

            <div class="form-group">
                <label for="meat">Broj obroka sa mesom nedeljno:</label>
                <input type="number" id="meat" name="meat" min="0" required>
            </div>

            <button type="submit">Prikaži rezultate</button>
        </form>

        <div id="result" style="margin-top: 20px;">
            <canvas id="result-chart" width="400" height="200"></canvas>
        </div>
    `;

    formSection.querySelector('#eco-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            transport: formData.get('transport'),
            transportDistance: parseFloat(formData.get('distance')),
            energyConsumption: parseFloat(formData.get('energy')),
            meatMealsPerWeek: parseInt(formData.get('meat'))
        };

        const result = calculateFootprint(data);

        // Prikaz rezultata u tekstualnom obliku
        const resultDiv = formSection.querySelector('#result');
        resultDiv.innerHTML = `
            <h3>Rezultati:</h3>
            <p>Emisija zbog transporta: <strong>${result.transport} kg CO₂</strong></p>
            <p>Emisija zbog energije: <strong>${result.energy} kg CO₂</strong></p>
            <p>Emisija zbog ishrane: <strong>${result.food} kg CO₂</strong></p>
            <p>Ukupan ekološki otisak: <strong>${result.total} kg CO₂</strong></p>
            <canvas id="result-chart" width="400" height="200"></canvas>
        `;

        // Kreiranje grafikona pomoću Chart.js
        const ctx = document.getElementById('result-chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Transport', 'Energija', 'Ishrana'],
                datasets: [{
                    label: 'Ekološki otisak (kg CO₂)',
                    data: [result.transport, result.energy, result.food],
                    backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
                    borderColor: ['#ff6384', '#36a2eb', '#ffcd56'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    });

    return formSection;
}
