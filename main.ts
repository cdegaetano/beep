input.onButtonPressed(Button.A, function () {
    serial.writeLine("Alarm")
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
    music.playTone(2700, 50)
    basic.pause(100)
    music.playTone(2800, 50)
    basic.pause(100)
    music.playTone(2900, 50)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    playTone1500()
    playTone()
})
function playTone1500 () {
    music.playTone(1500, 100)
}
function playTone () {
    for (let index = 0; index <= 4000; index++) {
        music.playTone(index, 50)
    }
}
music.setBuiltInSpeakerEnabled(true)
