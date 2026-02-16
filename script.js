function addItem() {
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const desc = document.getElementById("desc").value;

  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML =
    "<img src='" + image + "'>" +
    "<h3>" + name + "</h3>" +
    "<p>$" + price + "</p>" +
    "<p>" + desc + "</p>";

  document.getElementById("items").appendChild(card);
}
