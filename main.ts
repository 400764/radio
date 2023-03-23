radio.onReceivedNumber(function (receivedNumber) {
    radio.setGroup(2)
    radio.sendNumber(receivedNumber)
})
radio.setGroup(1)
basic.forever(function () {
	
})
