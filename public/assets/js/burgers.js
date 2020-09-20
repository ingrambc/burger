$(function() {
  $(".devoure").on("click", function(event) {
    var id = $(this).data("id");
  
    var devoured = {devoured: true};

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        console.log("burger has been devoured");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    console.log("Entered submit Click")
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var dataBody = {name: $("#burgName").val().trim()};

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: dataBody
    }).then(
      function() {
        console.log("New Burger created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});