const testimonials = [
  {
    name: "Miyah Myles",
    text: "Absolutely stunning destinations! This website truly captures the charm and beauty of the UK countryside. The photos, descriptions, and travel tips are super helpful for planning a memorable trip. I can’t wait to explore North Wales and the Cotswolds after reading through all this inspiring content!",
  },
  {
    name: "June Cha",
    text: "Such a peaceful vibe! Makes me want to pack my bags and escape into the hills. Beautifully presented!",
  },
  {
    name: "Iida Niskanen",
    text: "The photos are breathtaking – it’s like I’ve already visited these places. Amazing work!",
  },
  {
    name: "Renee Sims",
    text: "Thanks for the tips! I’ve added both North Wales and the Cotswolds to my travel bucket list!",
  },
  {
    name: "Jonathan Nunfiez",
    text: "The poetic descriptions really bring each location to life. This site feels like a gentle walk through a dream.",
  },
  {
    name: "Sasha Ho",
    text: "Looks like the perfect trip for families too – love the variety of suggestions and how easy it is to navigate.",
  },
  {
    name: "Veeti Seppanen",
    text: "Helpful info, especially for someone traveling on a budget. Nature, culture, and charm all in one place!",
  },
];

$(document).ready(() => {
  let index = 1;

  function testimonial() {
    $(".testimonial").text(testimonials[index].text);
    $(".username").text(testimonials[index].name);

    index++;

    if (index > testimonials.length - 1) {
      index = 0;
    }
  }

  setInterval(testimonial, 10000);
});
