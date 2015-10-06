var STAR_COUNT = 88;

function getRandomInt(min, max){
    var x = Math.floor(Math.random() * (max - min)) + min;
    console.log(x);
    return x;
}

function createStar(r, c){
    var height = $(document).height();
    var width = $(document).width();
    var star = document.createElement("div");
    $(star).addClass("star");
    $(star).css({top: getRandomInt(0, height), left: getRandomInt(0, width)});
    return star;
}

$(document).ready(function(){
    for(var i = 0; i < STAR_COUNT; i++){
        $("#sky").append(createStar());
    }
});
