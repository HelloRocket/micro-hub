input.onButtonPressed(Button.A, function () {
    if (Choice > 0) {
        Choice += -1
        basic.showString("" + (text_list[Choice]))
    }
})
input.onButtonPressed(Button.AB, function () {
    Player_choice = text_list[Choice]
    if (Computer_choice == text_list[0] && Player_choice == text_list[1]) {
        Win = "MB Wins"
    } else if (Computer_choice == text_list[1] && Player_choice == text_list[2]) {
        Win = "MB Wins"
    } else if (Computer_choice == text_list[2] && Player_choice == text_list[0]) {
        Win = "MB Wins"
    } else if (Computer_choice == text_list[0] && Player_choice == text_list[2]) {
        Win = "You Win!"
    } else if (Computer_choice == text_list[2] && Player_choice == text_list[1]) {
        Win = "You Win!"
    } else if (Computer_choice == text_list[1] && Player_choice == text_list[0]) {
        Win = "You Win!"
    } else {
        Win = "Tie"
    }
    basic.showString("U")
    basic.showString("" + (Player_choice))
    basic.clearScreen()
    basic.showString("MB")
    basic.showString("" + (Computer_choice))
    basic.clearScreen()
    basic.showString(Win)
})
input.onButtonPressed(Button.B, function () {
    if (Choice < 2) {
        Choice += 1
        basic.showString("" + (text_list[Choice]))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.Scissors)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.clearScreen()
    Choice = 0
    Computer_choice = text_list[randint(0, 2)]
    basic.showString("?")
})
let Win = ""
let Computer_choice = ""
let Player_choice = ""
let Choice = 0
let text_list: string[] = []
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    # . # . .
    . # . . .
    `)
text_list = ["R", "S", "P"]
basic.clearScreen()
basic.showString("Shake!")
