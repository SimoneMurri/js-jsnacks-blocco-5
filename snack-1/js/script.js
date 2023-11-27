
const auto = [
    { marca: 'Toyota', modello: 'Yaris', alimentazione: 'Benzina' },
    { marca: 'Ford', modello: 'Focus', alimentazione: 'Diesel' },
    { marca: 'Tesla', modello: 'Model 3', alimentazione: 'Elettrico' },
    { marca: 'Volkswagen', modello: 'Golf', alimentazione: 'GPL' },
    { marca: 'Fiat', modello: '500', alimentazione: 'Metano' },
    { marca: 'BMW', modello: 'X5', alimentazione: 'Diesel' },
    { marca: 'Renault', modello: 'Clio', alimentazione: 'Benzina' },
    { marca: 'Hyundai', modello: 'Kona', alimentazione: 'Elettrico' },
    { marca: 'Audi', modello: 'A3', alimentazione: 'Benzina' },
    { marca: 'Mercedes-Benz', modello: 'GLC', alimentazione: 'Diesel' }
]

const filterAutoBenzina = auto.filter((automobili) => {
    if (automobili.alimentazione === 'Benzina'){
        return true;
    }
});

const filterAutoDiesel = auto.filter ((automobili) => {
    if (automobili.alimentazione === 'Diesel'){
        return true;
    }
})

const filterAuto = auto.filter ((automobili) => {
    if (automobili.alimentazione === 'Benzina'){
        return false;
    } else if (automobili.alimentazione === 'Diesel'){
        return false;
    } else {
        return true;
    }
})

console.log(filterAutoBenzina);
console.log(filterAutoDiesel);
console.log (filterAuto);