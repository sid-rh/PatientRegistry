import React from 'react';
import { useLiveQuery } from '@electric-sql/pglite-react';

const PatientList = () => {

    const rows=useLiveQuery(
        'SELECT * FROM patients ORDER BY created_at DESC;'
    );
    console.log(rows);
    
  return (
    <div>
        {
        
      }
    </div>
  )
}

export default PatientList