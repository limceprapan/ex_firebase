serial.redirect(SerialPin.USB_TX, SerialPin.USB_RX, BaudRate.BaudRate115200)
serial.redirectToUSB()
basic.forever(function on_forever() {
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    basic.pause(5000)
})
