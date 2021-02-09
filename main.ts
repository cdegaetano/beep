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
})
function playTone1500 () {
    for (let index = 1500; index <= 4000; index+=500) {
        music.playTone(index, 100)
    }
}
function playTone () {
    let tones: number = []
    music.playTone(tones, 50)
}
music.setBuiltInSpeakerEnabled(true)
