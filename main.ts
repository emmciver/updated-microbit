pins.setPull(DigitalPin.P5, PinPullMode.PullUp)
pins.setPull(DigitalPin.P1, PinPullMode.PullUp)
pins.setPull(DigitalPin.P11, PinPullMode.PullUp)
pins.setPull(DigitalPin.P2, PinPullMode.PullUp)
let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
strip.show()
strip.showColor(neopixel.colors(NeoPixelColors.Black))
strip.setBrightness(150)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P5) == 0) {
        for (let index = 0; index < 2; index++) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . # # # .
                . # . # .
                . # # # .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . . . .
                . . # . .
                . # . # .
                . . # . .
                . . . . .
                `)
            basic.pause(200)
            basic.showLeds(`
                . . # . .
                . # . # .
                # . . . #
                . # . # .
                . . # . .
                `)
            basic.pause(200)
            basic.showLeds(`
                # . # . #
                . # . # .
                # . # . #
                . # . # .
                # . # . #
                `)
            basic.pause(200)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(200)
        }
    } else {
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 0) {
        strip.showRainbow(1, 360)
        strip.rotate(1)
    } else {
        strip.clear()
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P11) == 0) {
        music.playMelody("C5 B A G F E D C ", 350)
        music.playMelody("C D E F G A B C5 ", 350)
        music.playMelody("C5 B B A A G G F ", 350)
        music.playMelody("F G A B C5 C - C ", 350)
    } else {
        music.stopAllSounds()
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P2) == 0) {
        basic.showString("IT'S OKAY")
    } else {
        basic.clearScreen()
    }
})
