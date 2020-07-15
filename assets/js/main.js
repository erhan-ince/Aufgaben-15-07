//Lev1_1_1_js-vertiefung_arrays--------------------------------------

let adresse = ['Wilhelm-Leuschner Str.28', '41464', 'Neuss', 'NRW'];
let besteFreunde = [
   'batman',
   'superman',
   'HeMan',
   'Terminator',
   'Jonas',
   'Erwin',
];
let teilnehmer = [
   'Besher',
   'Adjmal',
   'Matthias',
   'Dirg',
   'Daniel',
   'Isabelle',
   'Yahya',
   'Abdulkarim',
   'Abdulhag',
   'Emilia',
   'Yuho',
   'Ina',
];
let person = ['Jonas', 'Mayer', 'Jo', 30, 'lesen', 'Neuss', 'Bootcamp'];
console.log(adresse, besteFreunde, teilnehmer, person);
person.push(adresse, besteFreunde, teilnehmer);
console.log(person);
//--------------Lev1_1_2_js-vertiefung_arrays-length

console.log(person.length);
console.log(adresse.length);
console.log(besteFreunde.length);
console.log(teilnehmer.length);

//---------------Lev1_2_js-vertiefung_arrays_3-moglichkeiten

var meineTrainers1 = ['Sam', 'Christian', 'Anass', 'Michal'];
console.log(meineTrainers1);
var meineTrainer2 = new Array('Sam', 'Christian', 'Anass', 'Michal');
console.log(meineTrainer2);
var meineTrainer3 = new Array();
meineTrainer3[3] = 'Sam';
meineTrainer3[1] = 'Christian';
meineTrainer3[2] = 'Anass';
meineTrainer3[0] = 'Michal';
console.log(meineTrainer3);

//------------------------------Lev1_5_1_js-vertiefung_arrays_push()

let songs = ['Bohemian Rhapsody', 'Stairway to Heaven', 'Hotel California'];
songs.push('Sweet Child 0`Mine');
let totalSongs = songs;
console.log(totalSongs);
let bestenFussballerAllerZeiten = [
   'Gerd-Müller',
   'Beckenbauer',
   'Pele',
   'Maradonna',
   'Maldini',
];
bestenFussballerAllerZeiten.push('Kahn', 'Buffon', 'Ich');
console.log(bestenFussballerAllerZeiten);
totalSongs.push('Lala', 'Lulu', 'Lorem');
console.log(totalSongs);
bestenFussballerAllerZeiten.push('Beckenbauer', 'ppppp', 'Lorem Lirem');
console.log(bestenFussballerAllerZeiten);

//Lev1_5_2_js-vertiefung_arrays_push()-arrays-in-array-----------------------

let heroUndEnemy = [
   'batman',
   'The Joker',
   ['Professor X', 'Magnet'],
   [('Thor', 'Loki')],
];
console.log(heroUndEnemy);
heroUndEnemy.push(
   ['Superman', 'Lex Luther'],
   ['Wolverine', 'Sabretooth'],
   ['Ghost-Rider', 'Mephisto']
);
console.log(heroUndEnemy);

//---------------------Lev1_6_js-vertiefung_arrays_pop()
// fruits.pop();
totalSongs.pop();
let entfernterSong = totalSongs.pop();

console.log(totalSongs);
console.log(entfernterSong);
bestenFussballerAllerZeiten.pop();
let entfernterFussballer = bestenFussballerAllerZeiten.pop();
console.log(bestenFussballerAllerZeiten);
console.log(entfernterFussballer);
bestenFussballerAllerZeiten.splice(6);
console.log(bestenFussballerAllerZeiten);

let deutscheGerichte = [
   'Speckkuchen',
   'Thüringer Rostbratwurst',
   'Quarkkeulchen',
   'Sauerbraten',
];
deutscheGerichte.unshift('Gulash', 'Eintop', 'Pürree', 'Berliner', 'Milka');
console.log(deutscheGerichte);
let nichtGut = deutscheGerichte.shift();
console.log(nichtGut);
console.log(deutscheGerichte);

let number = [23, 53, 75];
number.push(5);
console.log(number);
number.unshift(5);
console.log(number);
number.pop();
number.pop();
number.shift();
number.shift();

console.log(number);

//-------------------------------Lev1_3_js-vertiefung_arrays_index
let numberArray = [5, 6, 7, 8, 9, 10];
console.log(numberArray);
console.log(numberArray[0]);
console.log(numberArray[1]);
console.log(numberArray[2]);
console.log(numberArray[3]);
console.log(numberArray[4]);
console.log(numberArray[5]);

//-----------------------Lev3_2_js-einführung_zeichenkettentrennungsapp

function trenne() {
   //    console.log('test');
   let txt1 = document.getElementById('txt1').value;
   let txt2 = document.getElementById('txt2').value;
   let fillFirst = (document.getElementById('result1').innerHTML = txt1);
   let fillLast = (document.getElementById('result2').innerHTML = txt2);
   let fillFirstRemove = fillFirst.pop();
   console.log(fillFirstRemove);
}
