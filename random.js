function randomNB (NBinput, floor, plus1, $_$) {
    if (plus1) {
        NBinput ++;
    }
    if (floor) {
        $_$ = Math.floor(Math.random()*NBinput);
    }else{
        $_$ = Math.random()*NBinput
    }
    return $_$;
};
// Math.random()
