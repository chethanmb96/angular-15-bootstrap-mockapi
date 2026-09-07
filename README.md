# Angular 15 - Bootstrap & MockAPI.io

A simple, lightweight CRUD application built with **Angular 15** and **Bootstrap 5.3**, directly connected to **[MockAPI.io](https://mockapi.io)** for cloud-persisted RESTful data operations.

---

## Features

- **Live MockAPI Cloud Integration**:
  - Direct REST API communication

- **Clean & Simple UI**:
  - Lightweight HTML, TypeScript, and CSS for maximum readability and speed.
  - Add / Edit contact modal with form validation.
  - Delete contact with browser confirmation dialog.
- **Refined Dark / Light Mode**:
  - Theme toggle (Sun / Moon) persisted in `localStorage`.
  - Softer, modern dark mode palette (`#1e222b`) that is comfortable on the eyes.
  - Fully styled table header that matches the active theme in both dark and light modes.

---

## Project Structure

```text
angular-15-bootstrap-mockapi/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── item.model.ts          # ContactItem TypeScript interface
│   │   ├── services/
│   │   │   └── mockapi.service.ts     # Minimal HttpClient service for MockAPI
│   │   ├── app.component.ts           # Clean component controller
│   │   ├── app.component.html         # Simple Bootstrap table & modal template
│   │   ├── app.component.css          # Minimal component styles
│   │   └── app.module.ts              # Angular root module
│   ├── index.html                     # Main HTML page with Inter font
│   ├── styles.css                     # Bootstrap 5.3 & custom theme variables
│   └── main.ts                        # Application entry point
├── angular.json                       # Angular CLI configuration
├── package.json                       # Dependencies and scripts
└── tsconfig.json                      # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- Node.js (v18+)
- Angular CLI 15+

### Running the App

```powershell

# Start development server
npm start
```

Open your browser to **`http://localhost:4200/`**.

### Building for Production

```powershell
npm run build
```

The compiled output will be generated in `dist/angular-15-bootstrap-mockapi/`.

### Deploy to GitHub Pages

1. **Build with Base Href**:
   ```powershell
   npm run build:gh-pages
   ```

2. **Automated Deployment via GitHub Actions**:
   The workflow [.github/workflows/deploy.yml](file:///.github/workflows/deploy.yml) is already set up!
   - Push your code to GitHub (`main` or `master` branch).
   - In your GitHub repository, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select **GitHub Actions**.
   - Your site will automatically build and deploy!

### Releases via Git Tags

The repository includes an automated release workflow [.github/workflows/release.yml](file:///.github/workflows/release.yml) that triggers whenever a new tag is pushed.

1. **Create and push a tag**:
   ```powershell
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. **Automated Release**:
   - The workflow builds the Angular application.
   - Creates a GitHub Release for the tag.
   - Attaches all individual compiled build files (`index.html`, `main.*.js`, `polyfills.*.js`, `runtime.*.js`, `styles.*.css`, etc.) directly as individual downloadable release assets.

---

## MockAPI.io Resource Schema

If recreating the resource in your own MockAPI project:

- **Resource Name**: `contacts`
- **Fields**:
  - `id`: *Object ID*
  - `name`: *String / Full Name*
  - `email`: *String / Email*
  - `role`: *String / Job Title*
  - `department`: *String / Department*
  - `avatar`: *String / Avatar URL*
  - `status`: *String*
  - `bio`: *String*
  - `createdAt`: *Date*
