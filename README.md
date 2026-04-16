# React Gantt Chart Demo

A React app demo showing a Syncfusion Gantt chart with editable tasks, custom timelines, event markers, and holiday support.

## Overview

This repository includes a small React application that renders a Gantt chart using `@syncfusion/ej2-react-gantt`.
It demonstrates task hierarchy, toolbar actions, sorting, filtering, selection, and timeline markers.

## Features

- Task hierarchy with subtasks
- Add/Edit/Delete dialog editing
- Sorting, filtering, and multiple selection
- Context menu support
- Project start/end dates, holidays, and event markers

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
- Update `taskFields`, `timelineSettings`, or `editSettings` in `App.js` to customize the chart.
- The app is built with Create React App and uses Syncfusion React Gantt for UI rendering.

## Dependencies

- `react` `^16.11.0`
- `react-dom` `^16.11.0`
- `react-scripts` `3.2.0`
- `@syncfusion/ej2-react-gantt` `^17.3.19`
