import { PGlite } from '@electric-sql/pglite'
import { worker } from '@electric-sql/pglite/worker';


worker({
    async init() {
      const db = await PGlite.create({
        dataDir: 'idb://patient-registry-db',
      });                                                     

      await db.exec(`
        CREATE TABLE IF NOT EXISTS patients (
          id SERIAL PRIMARY KEY,
          name TEXT NOT NULL,
          dob DATE,
          email TEXT,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
      `);                                                    
  
      return db;  
    },
  });