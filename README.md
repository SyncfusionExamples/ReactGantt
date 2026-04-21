# React Gantt Chart Demo

## Repository Description
This repository contains a React application demonstrating the Syncfusion Gantt Chart component for visualizing and managing project schedules with editable tasks and timeline features.


## Overview

This project shows how to integrate the `@syncfusion/ej2-react-gantt` library into a React application. It focuses on core project‑management scenarios such as task hierarchy, scheduling, timeline visualization, and user interaction using built-in Gantt features.

## Features

- Hierarchical tasks with parent and child relationships
- Add, edit, and delete tasks using dialog editing
- Sorting, filtering, and multiple task selection
- Context menu support for task actions
- Project dates with holiday and event markers


## Installation

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open the app at:

```text
http://localhost:3000
```

## Build

Create a production build:

```bash
npm run build
```

## Deploy

This repository is configured for GitHub Pages deployment via `gh-pages`:

```bash
npm run deploy
```

## Notes

- Main Gantt chart configuration is in `src/App.js`.
- `src/index.js` uses `serviceWorker.unregister()` by default.
- Update `taskFields`, `timelineSettings`, or `editSettings` 

## Dependencies

- `react` `^17.0.1`
- `react-dom` `^17.0.1`
- `react-scripts` `5.0.1`
- `@syncfusion/ej2-react-gantt` `^17.3.19`
