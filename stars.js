var STAR_COUNT = 88;

function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}

function createStar(r, c){
    var height = $(document).height();
    var width = $(document).width();
    var star = document.createElement("div");

    var row = getRandomInt(0, height);
    var col = getRandomInt(0, width);
    var boxBlur = getRandomInt(0, 100);
    var boxRadius = getRandomInt(0, boxBlur);

    $(star).addClass("star");
    $(star).css({
        top: row,
        left: col,
        "box-shadow": "0px 0px " + boxBlur + "px " + boxRadius + "px #fff"
    });
    return star;
}

$(document).ready(function(){
    for(var i = 0; i < STAR_COUNT; i++){
        $("#sky").append(createStar());
    }
});
