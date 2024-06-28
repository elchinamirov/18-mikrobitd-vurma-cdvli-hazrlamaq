let a = 0
let ab = 0
let b = 0
input.onButtonPressed(Button.A, function () {
    a = randint(0, 10)
    basic.showNumber(a)
})
input.onButtonPressed(Button.AB, function () {
    ab = a * b
    basic.showNumber(ab)
})
input.onButtonPressed(Button.B, function () {
    b = randint(0, 10)
    basic.showNumber(b)
})
