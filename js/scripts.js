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

    // const favoritePets = []
    // favoritePets.push(pets[0], pets[1], pets[2])
    const favoritePets = pets.slice(0, 3);

    $("#favorite-0").text(pets[0])
    $("#favorite-1").text(pets[1])
    $("#favorite-2").text(pets[2])
  });
});