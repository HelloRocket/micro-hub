input.onButtonPressed(Button.A, function () {
    Choice += -1
    basic.showString("" + (text_list[Choice]))
})
input.onButtonPressed(Button.AB, function () {
    let list: number[] = []
    Choice = 0
    Computer_choice = list[randint(0, 2)]
    basic.showString("" + (text_list[Choice]))
})
input.onButtonPressed(Button.B, function () {
    Choice += 1
    basic.showString("" + (text_list[Choice]))
})
let Computer_choice = 0
let Choice = 0
let text_list: string[] = []
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    # . # . .
    . # . . .
    `)
text_list = ["Rock", "Paper", "Scissors"]
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Scissors)
basic.showIcon(IconNames.Square)
basic.clearScreen()
