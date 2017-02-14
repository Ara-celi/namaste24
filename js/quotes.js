$(".register-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newChirp object
  var newQuote = {
    firstName: $(".firstName").val().trim(),
    lastName: $(".lastName").val().trim(),
    birthday: $(".birthday").val().trim(),
    emailAddress: $(".emailAddress").val().trim(),
    verifyEmailAddress: $(".verifyEmailAddress").val().trim(),
    username: $(".username").val().trim(),
    password: $(".createPassword").val().trim(),
    verifyPassword: $(".verifyPassword").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newQuote);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newQuote)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + newQuote.firstName + " chirped: </p>");
      row.append("<p>" + newQuote.lastName + "</p>");
      row.append("<p>At " + moment(newQuote.created_at).format("h:mma on dddd") + "</p>");

      $(".quote-area").prepend(row);

    });

  // Empty each input box by replacing the value with an empty string
  $(".firstName").val("");
   $(".lastName").val("");
  $(".quote-area").val("");
});

// When the page loads, grab all of our chirps
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("quote");

      row.append("<p>" + data[i].firstName + " chirped.. </p>");
      row.append("<p>" + data[i].lastName + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

      $(".quote-area").prepend(row);

    }

  }

});
