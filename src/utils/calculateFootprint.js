export default function calculateFootprint(data) {
    // Emisija CO₂ u kg po kilometru za različite načine transporta
    const transportEmissions = {
        car: 0.21,  // Automobil: 0.21 kg CO₂ po km
        bus: 0.06,  // Autobus: 0.06 kg CO₂ po km
        bike: 0,    // Bicikl: 0 kg CO₂ po km
        walk: 0     // Peške: 0 kg CO₂ po km
    };

    // Izračunavanje emisije na osnovu transporta
    const transportFootprint = data.transportDistance * transportEmissions[data.transport];

    // Izračunavanje emisije na osnovu potrošnje energije
    const energyFootprint = data.energyConsumption * 0.233; // 0.233 kg CO₂ po kWh

    // Izračunavanje emisije na osnovu ishrane (meso: 7 kg CO₂ po obroku)
    const foodFootprint = data.meatMealsPerWeek * 7 * 52 / 365; // Prebacivanje u emisiju po danu

    // Ukupan ekološki otisak
    const totalFootprint = transportFootprint + energyFootprint + foodFootprint;

    return {
        transport: transportFootprint.toFixed(2),
        energy: energyFootprint.toFixed(2),
        food: foodFootprint.toFixed(2),
        total: totalFootprint.toFixed(2)
    };
}
