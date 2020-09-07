input.onButtonPressed(Button.A, function () {
    Choice += -1
    basic.showString("" + (text_list[Choice]))
})
input.onButtonPressed(Button.AB, function () {
    Player_choice = text_list[Choice]
    if (Computer_choice == "Rock" && Player_choice == "Scissors") {
        Win = "Computer Wins"
    } else if (Computer_choice == "Scissors " && Player_choice == "Paper") {
        Win = "Computer Wins"
    } else if (Computer_choice == "Paper" && Player_choice == "Rock") {
        Win = "Computer Wins"
    } else if (Computer_choice == "Rock" && Player_choice == "Paper") {
        Win = "You Win!"
    } else if (Computer_choice == "Paper" && Player_choice == "Scissors ") {
        Win = "You Win!"
    } else if (Computer_choice == "Rock" && Player_choice == "Paper") {
        Win = "You Win!"
    } else {
        Win = "Tie"
    }
})
input.onButtonPressed(Button.B, function () {
    Choice += 1
    basic.showString("" + (text_list[Choice]))
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.SmallSquare)
    basic.showIcon(IconNames.Scissors)
    basic.showIcon(IconNames.Square)
    basic.clearScreen()
    Choice = 0
    Computer_choice = text_list[randint(0, 2)]
    basic.showString("" + (text_list[Choice]))
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
text_list = ["Rock", "Scissors", "Paper"]
