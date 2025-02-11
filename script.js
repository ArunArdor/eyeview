$(document).ready(function() {
    $("#classroom").empty();

    // Add podium at the top
    $("#classroom").append(`<div id="podium">🙃🦭</div>`);

    // Create a 4x6 grid of seats
    for (let i = 0; i < 24; i++) {
        $("#classroom").append(`<div class="seat">Seat ${i + 1}</div>`);
    }

    // Make seats draggable
    $(".seat").draggable({
        containment: "#classroom",
        stop: function(event, ui) {
            console.log(`New position: (${ui.position.left}, ${ui.position.top})`);
        }
    });

    // Podium animation
    $("#podium").click(function() {
        $(this).animate({ left: '250px' }, 500);
    });
});
