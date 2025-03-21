---
sidebar_label: Angular Quickstart
title: Angular Quickstart
sidebar_position: 1
---

This guide provides a quick overview to help you get started with Angular 19.

## Prerequisites

- Node.js & npm: Ensure you have Node.js (v18 or above) and npm installed.
- Code Editor: Use an editor like Visual Studio Code.

## Step 1: Install Angular CLI

Install the Angular CLI globally via npm:

    ```bash
    npm install -g @angular/cli
    ```

## Step 2: Create a New Angular Project

Generate a new Angular project by running:

    ```bash
    ng new my-angular-app
    ```

During project creation, you'll be prompted for:

- Strict Mode: Answer Yes for enhanced type safety.
- Stylesheet Format: Choose your preferred option (e.g., CSS, SCSS).
- Routing: Optionally enable Angular Routing.

## Step 3: Run the Application

Navigate to your project directory and start the development server:

    ```bash
    cd my-angular-app
    ng serve
    ```

Open your browser and visit **http://localhost:4200** to see your app in action.

## Step 4: Explore the Project Structure

- src/app: Contains your application components and modules.
- src/assets: Holds static assets (images, styles, etc.).
- angular.json: Angular CLI configuration file.

## Step 5: Generate a New Component

Create a new component using the CLI:

    ```bash
    ng generate component example
    ```

This command creates a new folder with component files (HTML, CSS, TypeScript, and spec) under src/app.

There are other [sub-commands](https://angular.dev/cli/generate).

## Step 6: Build for Production

When you're ready to deploy, build your project with:

    ```bash
    ng build --configuration=production 
    ```

The optimized build will be generated in the dist/ folder.

## Additional Resources

- [Angular Documentation](https://angular.dev/overview)
- [Angular CLI Overview](https://angular.dev/cli)
