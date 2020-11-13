let coin = {
  state: 0,
  flip: function () {
    if (Math.random() > 0.5) {
      this.state = 0;
    } else {
      this.state = 1;
    }
  },

  toString: function () {
    if (this.state === 0) {
      return "Heads";
    } else {
      return "Tails";
    }
  },
  toHTML: function () {
    let image = document.createElement("img");
    if (this.state === 0) {
      image.src = "./Images/Heads.jpg";
    } else {
      image.src = "./Images/Tails.jpg";
    }
    return image;
  },
};
coin.flip();
console.log(coin.state);
coin.toString();
console.log(coin.toString());
coin.toHTML();
console.log(coin.toHTML());

function display20Flips() {
  // uses a loop to flip the coin 20 times. Each time the coin
  // flips, display the result of each flip as a string on the page
  // (make use of your toString() method)
  let count = 0;
  while (count < 20) {
    let paragraph = document.createElement("p");
    coin.flip();
    paragraph.innerHTML = coin.toString();
    document.body.append(paragraph);
    count++;
  }
}
display20Flips();
function display20Images() {
  let count = 0;
  while (count < 20) {
    coin.flip();
    coin.toHTML();
    document.body.append(coin.toHTML());
    count++;
  }
}
display20Images();
// again using a loop to flip the coin 20 times…but this time instead of
// displaying the result as a string, display the result
// of each flip as an HTML IMG element on the page (make use of your toHTML() method).
