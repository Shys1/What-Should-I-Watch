let horror = ["Midsommar", "Hereditary", "Get Out"];

$(".horror").click(function() {
    for (let horrorr of horror) {
        $(".horror-recommend").append(horrorr + "<br>");
    }
    
});

let action = ["F9", "The Amazing Spider-Man 2", "Central Intelligence"];

$(".action").click(function() {
    for (let actionn of action) {
        $(".action-recommend").append(actionn + "<br>");
    }
});

let comedy = ["17 Again", "Baywatch", "Diary of a Wimpy Kid"];

$(".comedy").click(function() {
    for (let comedyy of comedy) {
        $(".comedy-recommend").append(comedyy + "<br>");
    }
});