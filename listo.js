'use strict';

const cards = [

{type: "One", challenge: "90s music"}, 
{type: "Many", challenge: "Adjectives"}, 
{type: "One", challenge: "Allergens"}, 
{type: "Many", challenge: "Apps"}, 
{type: "None", challenge: "Architects"}, 
{type: "None", challenge: "Astronauts"}, 
{type: "One", challenge: "Athletes"}, 
{type: "Many", challenge: "Authors"}, 
{type: "One", challenge: "Baby equipment"}, 
{type: "None", challenge: "Banned books"}, 
{type: "One", challenge: "Bathroom things"}, 
{type: "One", challenge: "Bedroom things"}, 
{type: "One", challenge: "Beers"}, 
{type: "One", challenge: "Big ideas"}, 
{type: "None", challenge: "Billionaires"}, 
{type: "One", challenge: "Board games"}, 
{type: "Many", challenge: "Body parts"}, 
{type: "Many", challenge: "Books"}, 
{type: "One", challenge: "Books more than 1,000 years old"}, 
{type: "None", challenge: "Breakfast cereals"}, 
{type: "None", challenge: "Bridges"}, 
{type: "None", challenge: "British Prime Ministers"}, 
{type: "None", challenge: "Building materials"}, 
{type: "One", challenge: "Cake ingredients"}, 
{type: "One", challenge: "Calculator buttons"}, 
{type: "Many", challenge: "Capital cities"}, 
{type: "One", challenge: "Card games"}, 
{type: "One", challenge: "Cartoon characters"}, 
{type: "None", challenge: "Catch phrases"}, 
{type: "Many", challenge: "Celebrities"}, 
{type: "One", challenge: "Characters from mythology"}, 
{type: "Many", challenge: "Charities"}, 
{type: "One", challenge: "Cheeses"}, 
{type: "One", challenge: "Chemical elements"}, 
{type: "One", challenge: "Children's toys"}, 
{type: "Many", challenge: "Cities"}, 
{type: "One", challenge: "Colours"}, 
{type: "One", challenge: "Comedians"}, 
{type: "None", challenge: "Comic book characters"}, 
{type: "One", challenge: "Common acronyms"}, 
{type: "None", challenge: "Constants"}, 
{type: "Many", challenge: "Countries"}, 
{type: "One", challenge: "Countries in Africa"}, 
{type: "Many", challenge: "Countries in Europe"}, 
{type: "None", challenge: "Crazy laws"}, 
{type: "None", challenge: "Electronic music artists"}, 
{type: "None", challenge: "Explorers"}, 
{type: "None", challenge: "Famous pseudonyms"}, 
{type: "One", challenge: "Famous scientists"}, 
{type: "None", challenge: "Famous Scots"}, 
{type: "None", challenge: "Famous siblings"}, 
{type: "One", challenge: "Famous street names"}, 
{type: "None", challenge: "Farm animals"}, 
{type: "None", challenge: "Fashion designers"}, 
{type: "One", challenge: "Film directors"}, 
{type: "Many", challenge: "Films"}, 
{type: "One", challenge: "Flavours of ice cream"}, 
{type: "None", challenge: "Fonts"}, 
{type: "None", challenge: "Football teams"}, 
{type: "Many", challenge: "Foreign words"}, 
{type: "One", challenge: "Fruit"}, 
{type: "None", challenge: "FTSE 100 companies"}, 
{type: "One", challenge: "Garden things"}, 
{type: "One", challenge: "Greetings"}, 
{type: "One", challenge: "Guitarists"}, 
{type: "None", challenge: "Harry Potter characters"}, 
{type: "None", challenge: "Heavy Metal bands"}, 
{type: "Many", challenge: "Historical events"}, 
{type: "Many", challenge: "Historically significant years"}, 
{type: "One", challenge: "Hot things"}, 
{type: "One", challenge: "Housework tasks"}, 
{type: "None", challenge: "Inventors"}, 
{type: "None", challenge: "Irish words"}, 
{type: "None", challenge: "James Bond films"}, 
{type: "One", challenge: "Keyboard shortcuts"}, 
{type: "One", challenge: "Kings"}, 
{type: "One", challenge: "Kitchen implements"}, 
{type: "One", challenge: "Kitchen things"}, 
{type: "One", challenge: "Languages"}, 
{type: "None", challenge: "Latin in common usage"}, 
{type: "One", challenge: "Long words"}, 
{type: "One", challenge: "Lounge things"}, 
{type: "None", challenge: "Mathematical operations"}, 
{type: "None", challenge: "Mountains"}, 
{type: "One", challenge: "Musical instruments"}, 
{type: "None", challenge: "Musical terms"}, 
{type: "One", challenge: "National holidays"}, 
{type: "None", challenge: "NBA teams"}, 
{type: "Many", challenge: "Numbers"}, 
{type: "None", challenge: "Opera singers"}, 
{type: "One", challenge: "Painters"}, 
{type: "None", challenge: "Palindromes"}, 
{type: "One", challenge: "Party games"}, 
{type: "None", challenge: "Pastries"}, 
{type: "None", challenge: "Phone manufacturers"}, 
{type: "None", challenge: "Polite insults"}, 
{type: "Many", challenge: "Politicians"}, 
{type: "None", challenge: "Programming languages"}, 
{type: "One", challenge: "Queens"}, 
{type: "Many", challenge: "Recording artists"}, 
{type: "None", challenge: "Religions"}, 
{type: "None", challenge: "Sailing terms"}, 
{type: "None", challenge: "Scottish words"}, 
{type: "None", challenge: "Seas"}, 
{type: "None", challenge: "Shakespearian characters"}, 
{type: "One", challenge: "Shops"}, 
{type: "One", challenge: "Singers"}, 
{type: "One", challenge: "Soft things"}, 
{type: "None", challenge: "Songs currently in the charts"}, 
{type: "None", challenge: "Spices"}, 
{type: "One", challenge: "Sports"}, 
{type: "One", challenge: "Strong things"}, 
{type: "None", challenge: "Superheroes"}, 
{type: "One", challenge: "Sweets / candy"}, 
{type: "Many", challenge: "Tasty things"}, 
{type: "One", challenge: "Things bigger than a jumbo jet"}, 
{type: "One", challenge: "Things heavier than a whale"}, 
{type: "One", challenge: "Things smaller than a grain of sand"}, 
{type: "None", challenge: "Things you do at work"}, 
{type: "One", challenge: "Things you do on holiday"}, 
{type: "None", challenge: "Things you do to prepare for a party"}, 
{type: "One", challenge: "Things you find in a briefcase"}, 
{type: "One", challenge: "Things you find in a handbag"}, 
{type: "One", challenge: "Things you find in a hospital"}, 
{type: "None", challenge: "Things you find in a wallet"}, 
{type: "One", challenge: "Things you pack in a suitcase"}, 
{type: "None", challenge: "Things you put in a toaster"}, 
{type: "One", challenge: "Topical words"}, 
{type: "None", challenge: "TV chefs"}, 
{type: "None", challenge: "Types of building"}, 
{type: "One", challenge: "Types of car"}, 
{type: "None", challenge: "Types of dog"}, 
{type: "None", challenge: "Types of dress"}, 
{type: "None", challenge: "Types of hat"}, 
{type: "None", challenge: "Types of pasta"}, 
{type: "None", challenge: "Types of shoe"}, 
{type: "One", challenge: "Types of transportation"}, 
{type: "None", challenge: "Types of tree"}, 
{type: "None", challenge: "Units of measure"}, 
{type: "Many", challenge: "Universities"}, 
{type: "One", challenge: "Unpopular people"}, 
{type: "None", challenge: "US Presidents"}, 
{type: "One", challenge: "US States"}, 
{type: "One", challenge: "Vegetables"}, 
{type: "One", challenge: "Villains"}, 
{type: "None", challenge: "Ways to cook chicken"}, 
{type: "None", challenge: "Ways to cook egg"}, 
{type: "Many", challenge: "Websites"}, 
{type: "None", challenge: "Wines"}, 
{type: "None", challenge: "Wood working techniques"}

];
const types = {'One': {'title': 'Nines: match one', 'description': "One point per item that matches with exactly one other player. Write up to nine items."},
         'None': {'title': 'Sixes: match none', 'description': "One point per item that doesn't match with any other players. Write up to six items."},
         'Many': {'title': 'Threes: match many', 'description': "One point per player that an item matches with. Write up to three items."}};
const rand = n => Math.floor(Math.random()*n);
function shuffle(array) {
  var m = array.length, t, i;

  // While there remain elements to shuffle…
  while (m) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);

    // And swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};
var shuffledCards = shuffle(cards);
const updateCards = function(){
  var card = shuffledCards.pop();
  document.querySelector('#type_title').innerHTML = types[card.type].title;
  document.querySelector('#type_description').innerHTML = types[card.type].description;
  document.querySelector('#challenge').innerHTML = card.challenge;
};
const startTimer = function(){
  document.querySelector('#timer_button').innerHTML = "...";
  document.querySelector('#timer_button').style.opacity = 0.4;
  document.querySelector('#end_sound').play();
  var timeoutID = window.setTimeout(resetButton, 30000);
};
const resetButton = function(){
  document.querySelector('#timer_button').innerHTML = "Start timer";
  document.querySelector('#timer_button').style.opacity = 1;
};
updateCards();