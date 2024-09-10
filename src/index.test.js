import "@testing-library/jest-dom";
import { displayTools, handleError } from "./index";

describe("fetch and display tools", () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="content"></div>
    `;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should display tools in the DOM", () => {
    const tools = {
      tools: [{ name: "Webpack" }, { name: "Babel" }, { name: "ESLint" }],
    };

    const content = document.getElementById("content");
    expect(content).not.toBeNull();

    displayTools(tools);

    const listItems = content.querySelectorAll("li");
    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent("Webpack");
    expect(listItems[1]).toHaveTextContent("Babel");
    expect(listItems[2]).toHaveTextContent("ESLint");
  });

  test("should display error message when handling error", () => {
    const content = document.getElementById("content");
    expect(content).not.toBeNull();

    handleError(new Error("Fetch error"));

    expect(content).toHaveTextContent(
      "Error loading tools. Please try again later."
    );
  });
});
