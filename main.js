let countDisplay = document.querySelector('.count');
let count = localStorage.getItem('count');

if (count === null || count === undefined) {
  count = 0;
} else {
  count = parseInt(count);
}

countDisplay.innerText = count;

function update() {
  localStorage.setItem('count', count);
}

function increase() {
  count++;
  countDisplay.innerText = count;
  update();
}

function decrease() {
  if (count > 0) {
    count--;
    countDisplay.innerText = count;
    update();
  }
}

function reset() {
  count = 0;
  countDisplay.innerText = 0;
  update();
}
