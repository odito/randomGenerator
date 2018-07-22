

$(document).ready(function(){

       var randomQuote;
        var randomNumb;
        var randomAuthor;  

  function getQuote(){

    var quotes = ["Don't let yesterday us up too much of today","Life is not a problem to be solved, but a reality to be experienced.",
"The only disability in life is a bad attitude.", "Life is really simple, but we insist on making it complicated."," There are three constants in life...change, choice and principles.",
"Life's most persistent and urgent question is, 'What are you doing for others? ","Only a life lived for others is a life worthwhile. ",
"God gave us the gift of life; it is up to us to give ourselves the gift of living well. ","We make a living by what we get, but we make a life by what we give. ",
"All life is an experiment. The more experiments you make the better. ","The biggest adventure you can take is to live the life of your dreams. ",
"In three words I can sum up everything I've learned about life: it goes on. ","Life is a daring adventure or nothing at all. ",
  "Live life to the fullest, and focus on the positive.","Each person must live their life as a model for others.", "When you have exhausted all possibilities, remember this - you haven't.",
   "Be wise today so you don't cry tomorrow.","Strong anger can only make you weaker than you already are"];


var authors = ["Will Rogers","Soren Kierkegaard","Scott Hamilton","Confucius","Stephen Covey","Martin Luther King, Jr.","Albert Einstein",
"Voltaire","Winston Churchill","Ralph Waldo Emerson","Oprah Winfrey","Robert Frost","Helen Keller","Matt Cameron","Rosa Parks","Thomas A. Edison",
" E.A. Bucchianeri","Munia Khan"];


var randomNumb= Math.floor(Math.random()*(quotes.length));
var randomQuote=quotes[randomNumb];
var randomAuthor=authors[randomNumb];

$(".quote").text(randomQuote);
$(".author").text(randomAuthor);

  }

  $("#button1").on("click", function(){

   getQuote();

  });

$("#twitt").on("click",function(){

         window.open("http://twitter.com/intent/tweet?text="+ randomQuote);


});


});




