import React from 'react';
import { useLiveQuery } from '@electric-sql/pglite-react';

const PatientList = () => {
    const res=useLiveQuery(
        'SELECT * FROM patients ORDER BY created_at DESC;'
    );
    const data=res!==undefined?res.rows:[];
    if (data.length===0) {
      return (
        <div className="flex items-center justify-center py-10">
          <svg
            className="animate-spin h-8 w-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8H4z"
            ></path>
          </svg>
        </div>
      );
    }
  return (
    <div>
        { data&&
        (data.map((patient) => (
            <li key={patient.id}>
              <strong>{patient.name}</strong> &ndash; {patient.dob.toLocaleDateString()} &ndash; {patient.email}
            </li>
          )))
      }
    </div>
  )
}

export default PatientList