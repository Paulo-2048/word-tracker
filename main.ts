const textInput = document.querySelector("#userInput") as HTMLInputElement
const textInputArea = document.querySelector(".inputArea") as HTMLInputElement
const counter = document.querySelector(".counter") as HTMLDivElement
const buttonReset = document.querySelector(
  ".buttonReset"
) as HTMLButtonElement | null
const originText = document.querySelector(
  ".textExample"
) as HTMLParagraphElement

let timer: number[] = [0, 0, 0, 0]
let interval: number
let intervalRunner: boolean = false

function leadingZero(time: number) {
  let timeModify: string
  if (time <= 9) {
    timeModify = "0" + time
  } else {
    timeModify = time.toString()
  }
  return timeModify
}

function runtTimer() {
  let currentTime = `${leadingZero(timer[0])}:${leadingZero(
    timer[1]
  )}:${leadingZero(timer[2])}`
  counter.innerHTML = currentTime
  timer[3]++

  timer[0] = Math.floor(timer[3] / 100 / 60)
  timer[1] = Math.floor(timer[3] / 100 - timer[0] * 60)
  timer[2] = Math.floor(timer[3] - timer[1] * 100 - timer[0] * 6000)
}

function start() {
  let textInputLenght = textInput?.value.length
  if (textInputLenght === 0 && !intervalRunner) {
    intervalRunner = true
    interval = setInterval(runtTimer, 10)
  }
}

function spellCheck() {
  let textEntered = textInput?.value
  let originTextMath = originText.textContent?.substring(0, textEntered?.length)
  if (textEntered == originText.textContent) {
    textInputArea.style.borderColor = "#429890"
    clearInterval(interval)
  } else {
    if (textEntered == originTextMath) {
      textInputArea.style.borderColor = "#65ccf3"
    } else {
      textInputArea.style.borderColor = "#e95f0f"
    }
  }
}

function reset() {
  clearInterval(interval)
  interval = 0
  timer = [0, 0, 0, 0]
  intervalRunner = false

  textInput.value = ""
  counter.innerHTML = "00:00:00"
  textInput.style.borderColor = "gray"
}

textInput?.addEventListener("keypress", start, false)
textInput?.addEventListener("keyup", spellCheck, false)
buttonReset?.addEventListener("click", reset, false)
