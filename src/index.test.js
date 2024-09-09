import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        tools: [{ name: "Webpack" }, { name: "Babel" }, { name: "ESLint" }],
      }),
  })
);

describe("fetch and display tools", () => {
  beforeEach(() => {
    // Set up the DOM element to contain the fetched content
    document.body.innerHTML = `
      <main id="content"></main>
    `;
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch tools and display them in the DOM", async () => {
    await import("./index");

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith("./data/build-tools.json");

    // Check that the tools are displayed correctly in the DOM
    const content = document.getElementById("content");
    const listItems = content.querySelectorAll("li");

    expect(listItems).toHaveLength(3);
    expect(listItems[0]).toHaveTextContent("Webpack");
    expect(listItems[1]).toHaveTextContent("Babel");
    expect(listItems[2]).toHaveTextContent("ESLint");
  });

  test("should log error when fetch fails", async () => {
    global.fetch.mockImplementationOnce(() =>
      Promise.reject(new Error("Fetch error"))
    );

    const consoleSpy = jest.spyOn(console, "error").mockImplementation();

    await import("./index");

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith(
      "Error loading JSON:",
      expect.any(Error)
    );

    consoleSpy.mockRestore();
  });
});
