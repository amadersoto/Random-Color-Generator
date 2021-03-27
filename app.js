let box = document.getElementById('box')
let clone = document.getElementById('clone')

let starts = document.getElementById('start')
let pauses = document.getElementById('pause')
let resets = document.getElementById('reset')

let colors = ['red', 'green', 'yellow', 'black', 'blue', 'orange', 'tomato', 'purple','aqua','grey']

let i = 0
let clear = null

function start() {
  clear = setInterval(() => {
    box.style.background = colors[i]
    if (i > colors.length) {
      i = 0
    } else {
      i++
      let a = box.cloneNode(true)
      clone.appendChild(a)
    }

  }, 1000)
}

function pause() {
  clearInterval(clear)
}

function reset() {
  clone.innerHTML = ''
}

starts.addEventListener('click', start)
pauses.addEventListener('click', pause)
resets.addEventListener('click', reset)