# Build Tools Showcase

## Project Description

This project demonstrates the use of various build tools in a modern web development workflow. The application fetches a list of popular tools from a JSON file and displays them in a grid layout on the webpage. It uses Webpack for bundling, Babel for JavaScript transpilation, Sass for styling, and Jest for testing. The project is designed to be easily extendable and serves as a foundation for learning and integrating different tools in a web development project.

## Setup Instructions

Follow these steps to set up and run the project locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/build-tools-showcase.git
   cd build-tools-showcase
   ```
2. **Deployed version:**
   Here is the deployed link https://build-showcase.netlify.app/
   Now, the setup commands are (`npm install`, `npm start`, `npm test`, `npm run lint`)

3. **Install dependencies:**
 Make sure you have Node.js and npm installed, then run:

bash
Copy code
npm install
Start the development server: To start a local development server with hot-reloading, run:

bash
Copy code
npm start
Run tests: To execute unit tests using Jest, run:

bash
Copy code
npm test
Lint the code: To check for any linting issues, run:

bash
Copy code
npm run lint
Deployed version: You can view the deployed version of the application here: Build Tools Showcase.

4. **Available npm Scripts:**
npm start - Launches the development server with live-reloading.
npm test - Runs unit tests using Jest.
npm run build - Bundles the project for production using Webpack.
npm run lint - Runs the linter (ESLint) to check for code quality issues.
npm run sass - Compiles the Sass files into CSS.
npm run clean - Removes the dist directory to clean the build files.
Build Process
The build process is handled by Webpack, a module bundler that compiles the project files into a dist folder for production. Key aspects of the build process include:

JavaScript Transpilation: Babel is used to transpile modern JavaScript (ES6+) to ensure compatibility with older browsers.
CSS Preprocessing: Sass is compiled into CSS and automatically bundled into the final production files.
Code Optimization: Webpack optimizes the code by minifying JavaScript and CSS files for production, ensuring fast load times.
Testing: Jest is used for unit testing, allowing for the verification of individual components
