// Fade in code

function fade2Content() {
  console.log('fade2Content called');
  document.body.classList.remove("blackScreen");
}


// Button Declares

const originalBtn = document.getElementById('original');
const lsaltedBtn = document.getElementById('lsalted');
const sandvBtn = document.getElementById('sandv');
const bbqBtn = document.getElementById('bbq');
const scandoBtn = document.getElementById('scando');
const dillpickleBtn = document.getElementById('dillpickle');
const candscBtn = document.getElementById('candsc');
const flaminhotBtn = document.getElementById('flaminhot');
const chilelimonBtn = document.getElementById('chilelimon');
const sandpBtn = document.getElementById('sandp');
const bakedBtn = document.getElementById('baked');
const kettlecookedBtn = document.getElementById('kettlecooked');


// Sound Declares

const originalObj = document.getElementById('sndOriginal');
const lsaltedObj = document.getElementById('sndLightlySalted');
const sandvObj = document.getElementById('sndSaltAndVinegar');
const bbqObj = document.getElementById('sndBBQ');
const scandoObj = document.getElementById('sndSourCreamAndOnion');
const dillpickleObj = document.getElementById('sndDillPickle');
const candscObj = document.getElementById('sndCheddarAndSourCream');
const flaminhotObj = document.getElementById('sndFlaminHot');
const chilelimonObj = document.getElementById('sndChileLimon');
const sandpObj = document.getElementById('sndSaltAndPepper');
const bakedObj = document.getElementById('sndBaked');
const kettlecookedObj = document.getElementById('sndKettleCooked');


// Button Functionality

originalBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Cap";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
lsaltedBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Lib";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
sandvBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Gem";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
bbqBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Leo";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
scandoBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Pis";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
dillpickleBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Can";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
candscBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sco";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
flaminhotBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Ari";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
chilelimonBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Vir";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
sandpBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Aqu";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
bakedBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sag";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
kettlecookedBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Tau";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});


// Sound Control

const speakers = document.getElementById('speakers');

function stopAllAudio() {
  originalObj.pause();
  originalObj.currentTime = 0;
  //
  lsaltedObj.pause();
  lsaltedObj.currentTime = 0;
  //
  sandvObj.pause();
  sandvObj.currentTime = 0;
  //
  bbqObj.pause();
  bbqObj.currentTime = 0;
  //
  scandoObj.pause();
  scandoObj.currentTime = 0;
  //
  dillpickleObj.pause();
  dillpickleObj.currentTime = 0;
  //
  candscObj.pause();
  candscObj.currentTime = 0;
  //
  flaminhotObj.pause();
  flaminhotObj.currentTime = 0;
  //
  chilelimonObj.pause();
  chilelimonObj.currentTime = 0;
  //
  sandpObj.pause();
  sandpObj.currentTime = 0;
  //
  bakedObj.pause();
  bakedObj.currentTime = 0;
  //
  kettlecookedObj.pause();
  kettlecookedObj.currentTime = 0;
}


// Calendar Input Code

const userSubmitObj = document.getElementById('userSubmit');

userSubmitObj.addEventListener('click', function () {
  console.log('User submit button clicked');

  // Get the user's date and extract the month of year and day of month
  const userBday = new Date(document.getElementById('bday').value);

  // Figure out the zodiac sign based on month of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);
  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  // Display custom image based on zodiac sign
  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});


// userPicked function

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  generateQuote();
  switch (whichOne) {
    case 'Cap':
      zDisplayObj.src = 'images/original.webp';
      zTitleObj.innerHTML = 'ORIGINAL';
      zDateRangeObj.innerHTML = 'December 22nd to Januard 19th';
      zMoreInfoObj.innerHTML = '<p>Others might be tempted to call Original &quot;boring&comma;&quot; or &quot;plain&comma;&quot; or &quot;just potatoes and salt.&quot; But that&apos;s the thing- you KNOW you&apos;re just potatoes and salt. And you&apos;re proud of it. Because what you&apos;re doing with just potatoes and salt is 10x better than what those seasoning dudes are doing. You&apos;re also the only flavor my little brother will eat&comma; so&comma; uh&comma; go wild with that info I guess.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      originalObj.play();
      break;
    case 'Lib':
      zDisplayObj.src = "images/lightlysalted.webp";
      zTitleObj.innerHTML = 'LIGHTLY SALTED';
      zDateRangeObj.innerHTML = 'September 23rd to October 22nd';
      zMoreInfoObj.innerHTML = '<p>Ok&comma; so you know what&comma; I&apos;m just gonna go with the obvious joke&colon; You know when to lay off the salt. You&apos;re not salty. Get it&quest; Because of the less salt. No gossip or pettiness for you- you&apos;re Lightly Salted Potato Chip Flavor baby&comma; and there&apos;s no telling how much blood pressure you&apos;ll lower out there.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      lsaltedObj.play();
      break;
    case 'Gem':
      zDisplayObj.src = "images/saltandvinegar.webp";
      zTitleObj.innerHTML = 'SALT AND VINEGAR';
      zDateRangeObj.innerHTML = 'May 21st to June 20th';
      zMoreInfoObj.innerHTML = '<p>Sometimes a little sour&comma; sometimes a little salty&comma; but beloved by all. You&apos;re an international favorite who&apos;s kinda crazy and seems to show up at every party. You smell really bad on hot days though.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      sandvObj.play();
      break;
    case 'Leo':
      zDisplayObj.src = "images/bbq.webp";
      zTitleObj.innerHTML = 'BBQ';
      zDateRangeObj.innerHTML = 'July 23rd to August 22nd';
      zMoreInfoObj.innerHTML = '<p>You&apos;re the dad friend. Slappin&apos; those meats down on the grill with an ice cold brew in your hand&comma; talking about 80s surfer rock or telling innaproriately timed jokes... I&apos;m playing real hard into the &apos;dad&apos; thing with this one&comma; huh&quest;</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      bbqObj.play();
      break;
    case 'Pis':
      zDisplayObj.src = "images/sourcreamandonion.webp";
      zTitleObj.innerHTML = 'SOUR CREAM AND ONION';
      zDateRangeObj.innerHTML = 'February 19th to March 20th';
      zMoreInfoObj.innerHTML = '<p>You&apos;re the best of both worlds. Would you eat sour cream by itself&quest; No. Onions by themselves&quest; I hope not. But mix them together and some strange alchemical reaction happens that makes them delicious. Uh&comma; you&apos;re like the personality version of that.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      scandoObj.play();
      break;
    case 'Can':
      zDisplayObj.src = "images/dillpickle.webp";
      zTitleObj.innerHTML = 'DILL PICKLE';
      zDateRangeObj.innerHTML = 'June 21st to July 22nd';
      zMoreInfoObj.innerHTML = '<p>Alright&comma; look&comma; calm down. Dill Pickle isn&apos;t THAT bad. I mean&comma; I wouldn&apos;t eat them&comma; but I know people who do&excl; And that&apos;s an honor in and of itself&comma; you know&comma; since people love to be the thing no one knows about. You&apos;re like a hipster potato&comma; which sounds like someone&apos;s Instagram username from 2010&comma; but trust me it&apos;s good. You&apos;re ahead of the curve&excl;</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      dillpickleObj.play();
      break;
    case 'Sco':
      zDisplayObj.src = "images/cheddarandsourcream.webp";
      zTitleObj.innerHTML = 'CHEDDAR AND SOUR CREAM';
      zDateRangeObj.innerHTML = 'October 23rd to November 21st';
      zMoreInfoObj.innerHTML = '<p>You might be a little <i>cheesy</i> sometimes&comma; but your company never gets <i>sour</i>.<br>And&comma; uh&comma; that&apos;s it. That&apos;s the description.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      candscObj.play();
      break;
    case 'Ari':
      zDisplayObj.src = "images/flaminhot.webp";
      zTitleObj.innerHTML = 'FLAMIN HOT';
      zDateRangeObj.innerHTML = 'March 21st to April 19th';
      zMoreInfoObj.innerHTML = '<p>The spicy member of any friend group; you&apos;ve got the heat&comma; you never back down from a challenge&comma; and you make my sensitive Irish stomach go into conniptions.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      flaminhotObj.play();
      break;
    case 'Vir':
      zDisplayObj.src = "images/chilelimon.webp";
      zTitleObj.innerHTML = 'CHILE LIMON';
      zDateRangeObj.innerHTML = 'August 23rd to September 22nd';
      zMoreInfoObj.innerHTML = '<p>Sour and spicy&comma; the ultimate combo. You&apos;ve got a zing to your smile and the spice of life in your eyes. You also have 160 calories per 1 oz &lpar;28g&sol;About 15 chips&rpar;. I am on the nutrition facts page.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      chilelimonObj.play();
      break;
    case 'Aqu':
      zDisplayObj.src = "images/saltandpepper.webp";
      zTitleObj.innerHTML = 'SALT AND PEPPER';
      zDateRangeObj.innerHTML = 'January 20th to February 18th';
      zMoreInfoObj.innerHTML = '<p>My personal favorite. You can&apos;t go wrong with a good old bag of gas station salt and pepper potato chips. Reminds me of summer days heading to the park to do God knows what on a playground for five hours. I guess I&apos;d say you&apos;re a nostalgic kind of person&comma; and no I won&apos;t expand further on that.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      sandpObj.play();
      break;
    case 'Sag':
      zDisplayObj.src = "images/baked.webp";
      zTitleObj.innerHTML = 'BAKED';
      zDateRangeObj.innerHTML = 'November 22nd to December 21st';
      zMoreInfoObj.innerHTML = '<p>The healthiest of all the flavors&comma; you&apos;re the type of person to go on a keto diet but not be obnoxious about it. To make strange dips with weird vegetables that always seem to taste good. You&apos;ve got style and taste&comma; but you could also use some salt.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      bakedObj.play();
      break;
    case 'Tau':
      zDisplayObj.src = "images/kettlecooked.webp";
      zTitleObj.innerHTML = 'KETTLE COOKED';
      zDateRangeObj.innerHTML = 'April 20th to May 20th';
      zMoreInfoObj.innerHTML = '<p>You&apos;ve got that signature crunch to your personality. What does that mean&comma; you ask&quest; I do not know.</p>'
      modal.hidden = !modal.hidden;
      stopAllAudio();
      kettlecookedObj.play();
      break;
  }
}


// Modal Controls

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');

closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
  stopAllAudio();
});


// Link modal element/objects from DOM tree to JS

const zDisplayObj = document.getElementById('zDisplayImg');
const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');
const saySomethingObj = document.getElementById('saySomething');


// Mr. Potato code

function generateQuote() {
  var quotesArray = [
    'Wow&excl; That&apos;s a good... chip.',
    'This chip describes you.',
    'Great chip&comma; buddy&excl;',
    'Wow&excl; Now that&apos;s astrology&excl;',
    'I&apos;m so glad I did my final project on potato chips.',
    'This is so cool&excl; I really like chips&excl; A lot&excl;',
    'Did you know in United Kingdom Britain they call them crisps&quest; I hate that. I really don&apos;t like that.',
    'Hope you enjoy this potato flavor&excl;',
    'Aren&apos;t you glad you inputted your birth date to this website&quest;',
    'If you enjoyed this site&comma; be sure to follow potato chips on internet&excl;',
    'If you prefer corn chips&comma; nope&excl;',
    'Who needs astronomy when you have these tasty spuds&excl;',
    'Share and tell your friends about this potato web application&excl;',
    'What',
    'The best potatoes are from Idaho&excl; This is considered a racist thing to say among potatoes.',
    'How&apos;s your chips storage looking&quest; Wouldn&apos;t hurt to stock up&excl;',
    'Popato&excl;',
    'This is your favorite food now&excl; No questions.',
    'I&apos;m Mr. Potato&excl; In case you forgot. In case you forgot my name.',
    'That&apos;s an epic flavor&excl; potato chip',
    'I like the chips alot&excl; I like them',
    'Mr. Potato love love love the tasty crunchy&excl;',
    'No one is paying me to say these things&excl;',
    'You can trust Mr. Potato. He loves you AND your family&excl;',
    'Did you know potatoes are the vegetable ever&quest;&quest;',
    'Mmm&excl; Tasty tuber image on your screen. Enjoy&excl;',
    'Did you know potato backwards is Idaho&quest; No it&apos;s not. I lied. I don&apos;t know why I lied.'
  ];
  saySomethingObj.innerHTML = quotesArray[Math.floor(Math.random() * quotesArray.length)];
}