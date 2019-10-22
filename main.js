var clock = document.getElementById("clock")
var hexColor = document.getElementById("hex-color")
// hexcolor.textContent = "hello"
function hexClock() {
  var time = new Date()
  var hours = time.getHours().toString()
  var minutes = time.getMinutes().toString()
  var seconds = time.getSeconds().toString()

  if (hours.lenght < 2) {
    hours = "0" + hours
  }

  if (minutes.lenght < 2) {
    minutes = "0" + minutes
  }

  if (seconds.lenght < 2) {
    seconds = "0" + seconds
  }
  var clockStr = hours + ":" + minutes + ":" + seconds
  var hexColorStr = "#" + hours + minutes + seconds

  clock.textContent = clockStr
  hexColor.textContent = hexColorStr

  document.body.style.backgroundColor = hexColorStr
}

hexClock()
setInterval(hexClock, 1000)
