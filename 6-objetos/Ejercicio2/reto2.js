const geekGirl1 = {
    name: 'Susana',
    age: 34,
    profession: 'Periodista',
};

geekGirl1.run = (phrase) => `Yo estoy ${phrase}`;
geekGirl1.runAMarathon = (numero) => ` una maraton de ${numero}`
console.log(geekGirl1.run('corriendo') + geekGirl1.runAMarathon('50km'));