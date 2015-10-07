var STAR_COUNT = 1888;
var STAR_COLORS = ["#fff", "#e44b4b", "#9093f4", "#f3f490"];
var DEPTHS = [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0];

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function createStar(r, c){
    var height = $(document).height();
    var width = $(document).width();
    var li = document.createElement("li");
    var star = document.createElement("div");

    var row = getRandomInt(0, height);
    var col = getRandomInt(0, width);
    var boxBlur = getRandomInt(0, 10);
    var boxRadius = getRandomInt(0, boxBlur);
    var color = STAR_COLORS[getRandomInt(0, STAR_COLORS.length)];

    $(star).addClass("star");
    $(li).addClass("layer").attr("data-depth", DEPTHS[getRandomInt(0, DEPTHS.length)]);
    $(star).css({
        top: row,
        left: col,
        "box-shadow": "0px 0px " + boxBlur + "px " + boxRadius + "px " + color,
        "background-color": "#fff"
    });
    li.appendChild(star);
    return li;
}

for(var i = 0; i < STAR_COUNT; i++){
    $("#sky").append(createStar());
}
var par = new Parallax(document.getElementById("sky"));
