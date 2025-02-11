$(document).ready(function() {
    // Create seats programmatically
    const rows = ['firstRow', 'secondRow', 'thirdRow', 'fourthRow'];
    rows.forEach(row => {
        for(let i = 0; i < 6; i++) {
            $(`#${row}`).append(`<div class="seat">Seat ${i+1}</div>`);
        }
    });

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

    // Position logging
    $(document).on('click', event => {
        const element = $(event.target);
        if(element.hasClass('seat')) {
            const pos = element.position();
            console.log(`Seat Position: Left: ${pos.left}, Top: ${pos.top}`);
        }
    });
});