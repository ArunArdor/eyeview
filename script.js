$(document).ready(function() {
    $("#classroom").empty();

    // Add podium at the top
    $("#classroom").append(`<div id="podium">🙃🦭</div>`);

    // Create 4 rows of 6 seats each
    for (let row = 1; row <= 4; row++) {
        for (let seat = 1; seat <= 6; seat++) {
            $("#classroom").append(`<div class="seat">Seat ${seat}</div>`);
        }
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
