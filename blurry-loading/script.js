const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  // for stop that interval
  if (load > 99) {
    clearInterval(int);
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

/*
Parameters:
num: The number we want to map (in this case, load).

in_min and in_max: The input range. This is the original range where num is located.

out_min and out_max: The output range. This is the range where we want to map the value of num.

Why we use scale():
It maps a number (num) from one range (in_min to in_max) to another range (out_min to out_max). This helps in adjusting values for things like visual effects, where you need a specific range for better control.

For example, if load ranges from 0 to 100, and you want to map it to a range from 30 to 0 for the blur effect, scale() will adjust it accordingly.

*/
