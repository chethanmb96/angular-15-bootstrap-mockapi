<div align="center">

# ⚡ Angular 15 & Bootstrap with MockAPI.io

<p align="center">
  <strong>A lightweight, responsive web application built with Angular 15, Bootstrap 5.3, and cloud persistence via MockAPI.io.</strong>
</p>

<p align="center">
  <a href="https://chethanmb96.github.io/angular-15-bootstrap-mockapi/">
    <img src="https://img.shields.io/badge/🌐%20Live%20Demo-GitHub%20Pages-2ea44f?style=for-the-badge&logo=githubpages&logoColor=white" alt="Live Demo" />
  </a>
  <a href="https://github.com/chethanmb96/angular-15-bootstrap-mockapi/releases/latest">
    <img src="https://img.shields.io/github/v/release/chethanmb96/angular-15-bootstrap-mockapi?color=8b5cf6&label=Release&style=for-the-badge&logo=github" alt="Latest Release" />
  </a>
</p>

<p align="center">
  <a href="https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/deploy.yml">
    <img src="https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/deploy.yml/badge.svg" alt="Deploy to GitHub Pages" />
  </a>
  <a href="https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/release.yml">
    <img src="https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/release.yml/badge.svg" alt="Release Workflow" />
  </a>
  <img src="https://img.shields.io/badge/Angular-15.2-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-4.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=flat-square&logo=bootstrap&logoColor=white" alt="Bootstrap" />
  <img src="https://img.shields.io/badge/MockAPI.io-REST%20Cloud-06B6D4?style=flat-square&logo=fastapi&logoColor=white" alt="MockAPI" />
</p>

</div>

---

## 🌐 Live Demo & CI/CD Status

> [!TIP]
> 🚀 **Live Site**: **[https://chethanmb96.github.io/angular-15-bootstrap-mockapi/](https://chethanmb96.github.io/angular-15-bootstrap-mockapi/)**  
> Every commit pushed to `main` automatically builds and deploys to GitHub Pages in seconds.

| Pipeline / Target | Status | Target URL | Description |
| :--- | :---: | :--- | :--- |
| **GitHub Pages** | [![Deploy to GitHub Pages](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/deploy.yml/badge.svg)](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/deploy.yml) | [Live Application](https://chethanmb96.github.io/angular-15-bootstrap-mockapi/) | Automated CI/CD deployment on push to `main` |
| **Tag Release** | [![Release](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/release.yml/badge.svg)](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/actions/workflows/release.yml) | [GitHub Releases](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/releases) | Automated build and asset distribution upon tag push |
| **Latest Release** | [![Latest Release](https://img.shields.io/github/v/release/chethanmb96/angular-15-bootstrap-mockapi?color=10b981&label=Version&logo=github)](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/releases/latest) | [v1.0.0 Release](https://github.com/chethanmb96/angular-15-bootstrap-mockapi/releases/tag/v1.0.0) | Production bundle containing individual build files |

---

## ✨ Key Features

- ☁️ **Live MockAPI.io Cloud Integration**: Real-time HTTP GET, POST, PUT, and DELETE operations connected to an online MockAPI resource.
- 🌓 **Refined Dark / Light Theme**:
  - Theme toggle (☀️ / 🌙) persisted in browser `localStorage`.
  - Modern, eye-friendly slate dark palette (`#1e222b`) with matched table headers and modals.
- 📋 **Intuitive Contact Management**:
  - Interactive table displaying avatars, roles, department tags, and status badges.
  - Create and Edit modal dialogues with validation checks.
  - Delete contact confirmation prompts.
- 📦 **Automated Tag-Based Releases**:
  - Releases automatically compile and upload all individual output JS/HTML files directly as downloadable assets.

---

## 🏷️ Releases & Individual Build Files

Whenever a new version tag is pushed (e.g. `v1.0.0`), the [release.yml](.github/workflows/release.yml) workflow builds the production Angular application and attaches each compiled asset individually to the GitHub Release.

### Published Asset Breakdown

| File Name | Type | Description |
| :--- | :--- | :--- |
| `index.html` | <img src="https://img.shields.io/badge/HTML-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML"/> | Production entry HTML host page |
| `main.<hash>.js` | <img src="https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JS"/> | Compiled Angular application components & services |
| `polyfills.<hash>.js` | <img src="https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JS"/> | Browser polyfills & Zone.js runtime |
| `runtime.<hash>.js` | <img src="https://img.shields.io/badge/JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JS"/> | Webpack runtime bootstrapper |
| `styles.<hash>.css` | <img src="https://img.shields.io/badge/CSS-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS"/> | Minified Bootstrap 5.3 and custom theme styles |
| `favicon.ico` | <img src="https://img.shields.io/badge/ICO-6B7280?style=flat-square" alt="ICO"/> | Application browser tab icon |
| `3rdpartylicenses.txt` | <img src="https://img.shields.io/badge/TXT-4B5563?style=flat-square" alt="TXT"/> | Third-party open source dependency licenses |

### How to Trigger a Release

```powershell
# 1. Create a version tag
git tag v1.0.1

# 2. Push tag to GitHub
git push origin v1.0.1
```

---

## 📁 Project Structure

```text
angular-15-bootstrap-mockapi/
├── .github/
│   └── workflows/
│       ├── deploy.yml            # Automated GitHub Pages CI/CD
│       └── release.yml           # Tag-triggered release & asset uploader
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── item.model.ts     # ContactItem TypeScript model
│   │   ├── services/
│   │   │   └── mockapi.service.ts # HttpClient REST service
│   │   ├── app.component.ts      # Component controller & modal handlers
│   │   ├── app.component.html    # Bootstrap 5 responsive layout & modal
│   │   ├── app.component.css     # Component-specific styles
│   │   └── app.module.ts         # Root Angular NgModule
│   ├── index.html                # Entry HTML with Inter typography
│   ├── styles.css                # Global theme variables & Bootstrap import
│   └── main.ts                   # Angular platform bootstrap
├── angular.json                  # Angular CLI build configuration
├── package.json                  # Dependencies & npm scripts
└── tsconfig.json                 # TypeScript compiler configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher
- **Angular CLI**: `15.x`

### Local Development

```powershell
# 1. Clone repository
git clone https://github.com/chethanmb96/angular-15-bootstrap-mockapi.git
cd angular-15-bootstrap-mockapi

# 2. Install dependencies
npm install

# 3. Start local dev server
npm start
```

Navigate to `http://localhost:4200/` in your browser.

### Building for Production

```powershell
# Standard production build (outputs to dist/angular-15-bootstrap-mockapi/)
npm run build

# GitHub Pages build with base-href configuration
npm run build:gh-pages
```

---

## 🗄️ MockAPI.io Resource Schema

If configuring or cloning the schema in MockAPI.io:

| Field Name | Type | Description |
| :--- | :--- | :--- |
| `id` | <img src="https://img.shields.io/badge/ObjectId-3B82F6?style=flat-square" alt="ObjectId" /> | Auto-generated unique identifier |
| `name` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Contact full name |
| `email` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Email address |
| `role` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Job role / title |
| `department` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Department name |
| `avatar` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Avatar image URL |
| `status` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Active / Inactive status |
| `bio` | <img src="https://img.shields.io/badge/String-10B981?style=flat-square" alt="String" /> | Short biography |
| `createdAt` | <img src="https://img.shields.io/badge/Date-8B5CF6?style=flat-square" alt="Date" /> | Timestamp of creation |

---

<div align="center">
  <sub>Built with ❤️ using Angular 15 & Bootstrap 5</sub>
</div>
