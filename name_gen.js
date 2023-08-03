//this program will generate names for role playing games.

//This section will determine the first name of the character 
let firstName = ['Hamelen', 'Jimothy', 'Krokid', 'Gregory', 'Bhomm', 'Valdriprath', 'Mith', 'Fido'];

let selectFirstName = firstName[Math.floor(Math.random() * firstName.length)];

//console.log(selectFirstName);

//This section will determine the last name of the character
let lastName = ['Vaz', 'Drinan', 'Lafer', 'Grimke', 'Balder', 'Algry'];

let selectLastName = lastName[Math.floor(Math.random() * lastName.length)];

//console.log(selectLastName);

//This section will determine the character's title
let title = ['the Great', 'the Bearded', 'the Weak', 'the Destroyer', 'the Fearful', 'the Fearless', 'the Tall', 'the Short'];

let selectTitle = title[Math.floor(Math.random() * title.length)];

//console.log(selectTitle);

//This section strings together the three parts to give a name

let fullName = selectFirstName + ' ' + selectLastName + ' ' + selectTitle;
console.log(fullName);