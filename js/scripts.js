$("document").ready(function(){
  $("form#formOne").submit(function(event){
    event.preventDefault();
    const pets = [
      $("input#favorite-pets-1").val(), 
      $("input#favorite-pets-2").val(), 
      $("input#favorite-pets-3").val(), 
      $("input#favorite-pets-4").val(), 
      $("input#favorite-pets-5").val(),
    ];

    const favoritePets = pets.slice(0, 3);
    $('.output ul').empty()

    favoritePets.forEach(function (pet) {
      let sentence = "I these are my fav pet" + " " + pet
      $('.output ul').append('<li>' + sentence + '</li>')
    })
    $('.output').show()
    
  });
});