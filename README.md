# **Anmac Exports \- Portfolio Website**

This project is a fully modernized portfolio website for Anmac Exports, a business specializing in the export of agricultural products like rice, spices, and millets. The original application was rebuilt from the ground up using a modern, efficient technology stack to enhance performance, maintainability, and user experience.

## **✨ Features**

- **Modern Tech Stack**: Built with Vite, Vue 3, and TypeScript for a fast, type-safe, and maintainable codebase.
- **Responsive UI**: A clean and professional user interface built with the Vuetify 3 component library, ensuring a great experience on all devices.
- **State Management**: Centralized and predictable state management using Pinia, organized into logical stores for scalability.
- **Interactive 3D Carousel**: A custom-built, stylish 3D carousel to showcase product galleries in an engaging way.
- **Context-Aware Navigation**: A smart, reusable navigation bar that provides smooth-scrolling on the homepage and standard routing on all other pages.
- **Code Quality**: Enforced code quality and consistent styling with ESLint and Prettier, integrated directly into the development workflow.
- **Form Validation**: Robust, user-friendly form validation powered by Vuetify on the contact form.

## **🛠️ Technology Stack**

- **Framework**: [Vue 3](https://vuejs.org/) (using Composition API with <script setup>)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **UI Library**: [Vuetify 3](https://vuetifyjs.com/en/)
- **State Management**: [Pinia](https://pinia.vuejs.org/)
- **Routing**: [Vue Router](https://router.vuejs.org/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Linting/Formatting**: [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## **🚀 Getting Started**

### **Prerequisites**

- [Node.js](https://nodejs.org/en/) (version 18 or higher is recommended)
- [Git](https://git-scm.com/)

### **Installation & Setup**

1. Clone the repository:  
   Open your terminal and clone the project to your local machine using your configured SSH key.  
   `git clone git@github.com:BitanNag/anmac-exports.git`

2. **Navigate to the project directory:**  
   `cd anmac-exports`

3. Install dependencies:  
   This command will install all the necessary packages listed in package.json.  
   `npm install`

### **Running the Development Server**

To run the application locally with Vite's fast hot-reloading for development:  
`npm run dev`

The application will typically be available at http://localhost:5173.

### **Building for Production**

To compile and minify the application for a production environment:  
`npm run build`

The optimized and bundled files will be generated in the dist directory, ready for deployment to any static hosting service.
