const firstName = ['Luke', 'Leia', 'Han', 'R2', 'C3'];
const lastName = ['Skywalker', 'Organa', 'Solo', 'D2', 'PO'];
const homePlanet = ['Tatooine', 'Alderaan', 'Corellia', 'Naboo', 'Affa'];

let randomFirstName = firstName[(Math.random() * firstName.length) | 0];
let randomSecondName = lastName[(Math.random() * lastName.length) | 0];
let randomHomePlanet = homePlanet[(Math.random() * homePlanet.length) | 0];

let randomMessage = () => {
    console.log('The name on your galactic passport is:');
    console.log(randomFirstName + ' ' + randomSecondName);

    console.log('You were born on the planet:');
    console.log(randomHomePlanet);
};

randomMessage();