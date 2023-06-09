input.onButtonPressed(Button.A, function () {
    if (vyherce == 1) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        vyherce = 0
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    vyherce = 1
})
input.onButtonPressed(Button.B, function () {
    if (vyherce == 1) {
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
        vyherce = 0
    }
})
let vyherce = 0
vyherce = 1
basic.forever(function () {
	
})
