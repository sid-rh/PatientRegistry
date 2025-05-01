import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { PGliteProvider } from '@electric-sql/pglite-react'
import { PGlite } from '@electric-sql/pglite'
import { live } from '@electric-sql/pglite/live'

import './index.css'
import App from './App.jsx'


const db= await PGlite.create({
  extensions:{live},
  
});
await db.exec(
  `CREATE TABLE IF NOT EXISTS patients(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    dob DATE,
    email TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  `
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PGliteProvider db={db}>
      <App />
    </PGliteProvider>
  </StrictMode>,
)
