//Creare un array di oggetti di squadre di volley.
//Ogni squadra avrà diverse proprietà: nome, punti fatti e falli subiti.
//Generare numeri random al posto delle nelle proprietà:
//punti fatti e falli subit

function numeroCasuale (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const squadra = [
    {
        nome: 'Squadra A',
        puntiFatti: numeroCasuale(0, 50),
        falliSubiti: numeroCasuale(0, 20)
    },
    {
        nome: 'Squadra B',
        puntiFatti: numeroCasuale(0, 50),
        falliSubiti: numeroCasuale(0, 20)
    },
    {
        nome: 'Squadra C',
        puntiFatti: numeroCasuale(0, 50),
        falliSubiti: numeroCasuale(0, 20)
    },
    {
        nome: 'squadra D',
        puntiFatti: numeroCasuale(0, 50),
        falliSubiti: numeroCasuale(0, 20)
    }
  ];

  console.log(squadra);