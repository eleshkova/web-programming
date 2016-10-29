"use strict";

let information = function(){
fetch('https://api.worldofwarplanes.ru/wowp/account/info/?application_id=1fca5a750d8721c0eaef7e767ba67d62&account_id=588,555,999,667, 670, 1005')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('There was an error. Code ' +  
          response.status);  
        return;  
      }
      response.json()
      .then(function(players) {  
        console.log(players);  
        let template = Handlebars.compile( $('#template').html()  );
            $('.updates').append( template(players)  );
      });  
    }  
  )  
  .catch(function(error) {  
    console.log('Error');  
  })};
  $(document).ready(function () {
    information();
    setInterval("location.reload()", 1200000);
})