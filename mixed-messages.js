const firstName = ['Luke', 'Leia', 'Han', 'Bobba', 'Ben', 'Bib', 'Darth'];
const lastName = ['Skywalker', 'Organa', 'Solo', 'Fett', 'Kenobi', 'Fortuna', 'Vader'];
const homePlanet = ['Tatooine', 'Alderaan', 'Corellia', 'Naboo', 'Coruscant', 'Hoth', 'Kamino', 'Dagobah', 'Kashyyyk'];

let randomMessage = () => {

    const randomFirstName = firstName[(Math.random() * firstName.length) | 0];
    const randomSecondName = lastName[(Math.random() * lastName.length) | 0];
    const randomHomePlanet = homePlanet[(Math.random() * homePlanet.length) | 0];

    /*
    console.log('The name on your galactic passport is:');
    console.log(randomFirstName + ' ' + randomSecondName);

    console.log('You were born on the planet:');
    console.log(randomHomePlanet);
    */

    document.getElementById("nameOutput").innerHTML = randomFirstName + ' ' + randomSecondName;
    document.getElementById("planetOutput").innerHTML = randomHomePlanet;
};