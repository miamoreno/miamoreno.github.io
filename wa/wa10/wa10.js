
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

var storyText = "It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

var insertX = ["Cinderella ","Chicken Little","Shrek"];

var insertY = ["Casa Bonita","A haunted House","School"];

var insertZ = ["burst into flames","shot up into the sky", "vanished into thin air"];

randomize.addEventListener('click', result);

function result() {
   var newStory = storyText;

var xItem, yItem, zItem;

xItem = randomValueFromArray(insertX);
yItem = randomValueFromArray(insertY);
zItem = randomValueFromArray(insertZ);

newStory = newStory.replace(":insertx:",xItem);
newStory = newStory.replace(":inserty:",yItem);
newStory = newStory.replace(":insertz:",zItem);
newStory = newStory.replace(":insertx:",xItem);
  
  if(customName.value != '') {
    var name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if(document.getElementById("uk").checked) {
    var stonesPerPound = 0.0714286;
    var weight = Math.round(300*stonesPerPound)+' stone';
    var temperature =  Math.round((94-32)*5/9)+' centigrade';
    newStory = newStory.replace("94 farenheit", temperature);  
    newStory = newStory.replace("300 pounds", weight); 
  }
  
  story.textContent = newStory;
  story.style.visibility = 'visible';
}