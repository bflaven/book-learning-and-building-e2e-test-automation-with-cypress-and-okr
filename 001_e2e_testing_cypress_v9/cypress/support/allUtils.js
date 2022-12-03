// ******************************************************************
// Some functions that can be useful for test...
// ******************************************************************


// Check the Class UtilityWp in utilityGetStuffForWp.js
const { UtilityWp } = require('./utilityGetStuffForWp')
const verifierValue = new UtilityWp().getSelectionVerifier();
const navigation = new UtilityWp().getMainNavMenuLinkEntries();



// export utility functions
export {
    // Class
    verifierValue,
    navigation,
    // Functions
    filePathImage,
    generateRandomNum,
    doRandomString,
    doDateString,
    doRandomTime
};

/*
  * Name :: filePathImage
  * Description :: pick up a random image in the fixtures/pictures/ directory
  * Caution :: Be sure to count the image's number in your fixtures/pictures/ directory e.g 18 in my case
 */
function filePathImage() {

    // returns a random integer from 1 to 18
    const RandomImageInsertUpload =''+(Math.floor(Math.random() * 18) + 0)+''; 
    // The array for my sample images inside in the /fixtures/pictures minus the metada image
    const AnimalImageUpload =['animal_badger.jpg','animal_bear.jpg','animal_bird.jpg','animal_camel.jpg','animal_elephants.jpg','animal_fawn_deer.jpg','animal_fish_blobfish.jpg','animal_hyena.jpg','animal_nature_bird_flying_red.jpg','animal_pangolin.jpg','animal_red_panda.jpg','animal_reptile_chamaeleo.jpg','animal_rhino.jpg','animal_snake.jpg','animal_squirrel.jpg','animal_tapir_malaisie.jpg','animal_tiger.jpg','animal_zebra.jpg'];

    // The variable filepath will be concatened with the random image selected
    let filepath = 'pictures/'+AnimalImageUpload[RandomImageInsertUpload]+'';
    let filename = AnimalImageUpload[RandomImageInsertUpload];
    
    return {filepath, filename};
  }

/*
  * Name :: generateRandomNum
  * Description :: generate a number according to the length given as parameter
 */

  function generateRandomNum(length) {
    const add = 1;
    let max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.
    if (length > max) {
      return generateRandomNum(max) + generateRandomNum(length - max);
    }
    max = Math.pow(10, length + add);
    const min = max / 10; // Math.pow(10, n) basically
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    return ('' + number).substring(add);
  }

/*
  * Name :: doRandomString
  * Description :: generate a random string.
 */

function doRandomString () {
    const RandomString = ''+(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))+'';
    return RandomString;

}


/*
  * Name :: doDateString
  * Description :: generate a random date.
 */
function doDateString () { 
  const DateString = ''+(new Date().toString())+'';
  return DateString;
}

/*
  * Name :: doRandomTime
  * Description :: generate a random time.
 */
function doRandomTime() {
  
  let hrs = Math.round(Math.random() * 24);
  let mins = Math.round(Math.random() * 60); 
  let hFormat = (hrs<10 ? "0" : "");
  let mFormat = (mins<10 ? "0" : "");
  let pickUpRandomTime = String(hFormat+hrs+ ":" +mFormat+mins+ "");

  return pickUpRandomTime

}
