$(document).ready(function() {
  $("form#formOne").submit(function(event){
    var lists = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val(), $("#item5").val(), $("#item6").val()];



    lists.forEach(function(item, index) {

      var listItem = $(`#display${index+1}`);
      console.log(listItem);
      listItem.empty().text(item);

    });

    $("ul").show();


    event.preventDefault();
  });
});
