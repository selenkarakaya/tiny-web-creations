const button = document.getElementById("messageBtn");
const message = document.getElementById("message");

const generateMessage = () => {
  // fetch message data
  fetch("messageData.json")
    .then((response) => response.json())
    .then((data) => {
      // print data for control
      console.log(data);
      // invoke randomElement for generate subjects, verbs and endings
      const subjects = randomElement(data.subjects);
      const verbs = randomElement(data.verbs);
      const endings = randomElement(data.endings);

      // create message
      const mixedMessage = `${subjects}  ${verbs}  ${endings}`;

      // add mixed message in html
      message.textContent = mixedMessage;
    })
    .catch((error) => console.error("Error loading JSON:", error));
};

const randomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

generateMessage();
button.addEventListener("click", generateMessage);

//  Add animation effects to the button.
document.addEventListener("DOMContentLoaded", () => {
  button.addEventListener("click", (e) => {
    // These give the X and Y coordinates of where the user clicked, relative to the entire page.

    const x = e.pageX;
    const y = e.pageY;

    //The button's position on the page.
    const buttonTop = e.currentTarget.offsetTop;
    const buttonLeft = e.currentTarget.offsetLeft;

    // Buton içindeki tıklama koordinatları
    const xInside = x - buttonLeft;
    const yInside = y - buttonTop;

    //These calculate the position inside the button where the user clicked.
    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    // Append the ripple effect span to the button

    e.currentTarget.appendChild(circle);

    /*  
    If the circle stays in the DOM after the animation:
   A new one is added every time you click, and the old ones pile up.
   This can decrease performance and also mess up the visual appearance.
 */
    setTimeout(() => {
      circle.remove();
    }, 600);
  });
});
