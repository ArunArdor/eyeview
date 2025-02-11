$(document).ready(function () {
  console.log("Document is ready!");

  // Programmatically create seats in the first row
  for (let i = 0; i < 7; i++) {
    $("#firstRow").append('<div class="seat">SEAT</div>');
  }

  // Make the second row draggable
  $("#secondRow").draggable();

  // Animate the podium on click
  $("#podium").on("click", function () {
    $(this).animate({ left: "250px" });
  });

  // Log the position of clicked elements
  $(document).on("click", function (event) {
    const clickedElement = $("#" + event.target.id);
    if (clickedElement.length) {
      console.log(
        "Clicked Element ID:",
        event.target.id,
        "Position:",
        clickedElement.position()
      );
    }
  });
});
