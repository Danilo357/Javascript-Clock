setInterval(function() {
  var d = new Date()
  var hr = d.getHours()
  var min = d.getMinutes()
  var sec = d.getSeconds()
  if (hr >= 12) {
    hr = `0${hr - 12}`
  }

  if (min < 10) {
    min = `0${min}`
  }
  if (sec < 10) {
    sec = `0${sec}`
  }

  $(".clockk").html(`${hr}:${min}:${sec}`)
}, 1000)
