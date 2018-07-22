$(document).ready(function(){
    var quote,author;
  
  function getNewQuote(){

   $.ajax({
    url: 'http://api.forismatic.com/api/1.0/',// to codepen to thelei olo to url   "https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?"
      jsonp: 'jsonp',
      dataType: 'jsonp',

     data: {
       method: 'getQuote',
       lang: 'en',
       format: 'jsonp'

     },

     success: function(response){
     // console.log(response.quoteText);
     // console.log(response.quoteAuthor);

     quote=response.quoteText;
     author=response.quoteAuthor;

        $('#quote').hide().fadeIn(1000).text(quote);

        if (author){

        $('#author').text(author);

        }
        else{
         $('#author').text('unknown')

        }

     }

   });


  }
  

getNewQuote();

$('#newQuote').on('click',function(event){
event.preventDefault();//in order the page not to go to the top and just stay in the area that is.
  getNewQuote();
});

$('#tweet').on('click',function(event){

 event.preventDefault();//in order the page not to go to the top and just stay in the area that is.
  window.open('http://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + " << " + author + ">>" ));
  
});

});