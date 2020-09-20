$(function() {
  $(".devoure").on("click", function(event) {
    var id = $(this).data("id");
  
    var devoured = {devoured: true};

    // Send the PUT request.
    $.ajax("/api/cats/" + id, {
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
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var name = {name: $("#name").val().trim()};

    // Send the POST request.
    $.ajax("/api/cats", {
      type: "POST",
      data: name
    }).then(
      function() {
        console.log("New Brurger created");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});