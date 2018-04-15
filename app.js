
var inputName = document.getElementById("input-name");
var submitButton = document.getElementById("submit-button");
var textArea = document.getElementById("text-area");
var clearButton = document.getElementById("clear-button");
var clearBox = textArea.innerHTML;
var phrases1 = 
["You will be a successful business person",
"Your friendship will be a saving grace for another person",
"You need to look to the sky when you feel sad and then be still as the wind blows across your face",
"You will find inspiration from sitting in the park and watching the birds and the squirrels play",
"You will be presented with a business opportunity that will change your life",
"You must start saying your prayers once a day again",
"You must expect more from yourself than You expect from others",
"Life was meant to be a little difficult at times",
"Life is a mixture of adversity and opportunity",
"Don't wish life was easier, Wish for more skills",
"If you are willing to pay the price, then I promise you will get all you want",
"If you help enough people get what they want, you will get all that you want"];

var getRandomNumber = function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    var ranNum = Math.random();

    return Math.floor(ranNum * (max - min + 1) + min);
}

submitButton.addEventListener('click', function() {
    let ranNum = getRandomNumber(0,11);
    var results = phrases1[ranNum];
    let fortuneSentence = inputName.value.toUpperCase() + ", " + results;
    textArea.innerHTML = fortuneSentence;
});
clearButton.addEventListener('click', function() {
    textArea.innerHTML = "";
    inputName.value = "";
});



