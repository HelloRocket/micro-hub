input.onButtonPressed(Button.A, function () {
    basic.showNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)
basic.showString("Hello Rocket")
basic.showNumber(5)
