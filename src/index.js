import "./styles/style.scss";

fetch("./data/tools.json")
  .then((response) => response.json())
  .then((data) => {
    const content = document.getElementById("content");
    const list = document.createElement("ul");

    data.tools.forEach((tool) => {
      const listItem = document.createElement("li");
      listItem.textContent = tool.name;
      list.appendChild(listItem);
    });

    content.appendChild(list);
  })
  .catch((err) => console.error("Error loading JSON:", err));
