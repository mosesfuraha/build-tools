import "./styles/style.scss";

export function displayTools(data) {
  const content = document.getElementById("content");
  if (!content) {
    console.error("Content element not found");
    return;
  }
  const list = document.createElement("ul");

  data.tools.forEach((tool) => {
    const listItem = document.createElement("li");
    listItem.textContent = tool.name;
    list.appendChild(listItem);
  });

  content.appendChild(list);
}

export function handleError(error) {
  console.error("Error loading JSON:", error);
  const content = document.getElementById("content");
  if (content) {
    content.textContent = "Error loading tools. Please try again later.";
  }
}

export function loadTools() {
  return fetch("./data/tools.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(displayTools)
    .catch(handleError);
}

// Only run this if we're in a browser environment
if (typeof window !== "undefined") {
  window.addEventListener("DOMContentLoaded", loadTools);
}
