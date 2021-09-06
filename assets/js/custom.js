var hour = new Date().getHours()
var isNight = hour < 6 || hour > 19
if (isNight) {
  var html = document.getElementsByTagName('html')[0]
  html.classList.add('dark-appearance')
}