# Patient Registry App

A frontend-only React application for patient registration and management, using ElectricSQL's PGlite (WebAssembly PostgreSQL) for in-browser SQL storage, persistence, and live queries.

## Features

* **Register New Patients**

  * Stores data in a persistent, SQL database in the browser
* **List & Query Patients**

  * Data table showing patient ID, name, and action buttons.
* **Live Updates & Multi-Tab**

  * Uses `@electric-sql/pglite-react` for live queries and reactive UI.
  * Implements a Web Worker (`PGliteWorker`) for shared state across multiple tabs.


## Prerequisites

* Node.js v18 or above
* npm (v9+) or yarn
* A modern browser with IndexedDB support (Chrome, Firefox, Safari)

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/sid-rh/PatientRegistry
   cd PatientRegistry
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open your browser at `http://localhost:5173`.


## Usage

* Click **Add Patient** to open the form. Fill in **Name**, **Date of Birth**, and **Email**, then **Submit**.
* View the live-updated list in the data table.
* Click **View** on any row to open a details dialog.
* Click **Delete** on any row to remove a patient.
* Open multiple browser tabs; data persists and syncs via IndexedDB and Multi-tab Worker.


