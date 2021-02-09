input.onButtonPressed(Button.A, function () {
    playTone1500()
})
input.onButtonPressed(Button.B, function () {
    playTone()
})
function playTone1500 () {
    for (let index = 1500; index <= 4000; index+=500) {
        music.playTone(index, 100)
    }
}
function playTone () {
    for (let index2 = 4000; index2 >= 1000; index2-=500) {
        music.playTone(index2, 50)
    }
}
music.setBuiltInSpeakerEnabled(true)
