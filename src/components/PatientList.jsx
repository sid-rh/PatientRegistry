import React from 'react';
import { usePGlite, useLiveIncrementalQuery } from '@electric-sql/pglite-react';
import Spinner from './Spinner';

const PatientList = ({onView}) => {
    const db = usePGlite();
    const res=useLiveIncrementalQuery(
        'SELECT * FROM patients ORDER BY created_at;'
    );
    const data=res!==undefined?res.rows:[];
    if (res===undefined) {
      return (
        <Spinner/>
      );
    }
    if(data.length===0) return <div className="text-center py-4">No patients found.</div>;
  return (
    <div className="overflow-auto max-h-96 border border-gray-600 rounded">
      <table className="min-w-full table-auto bg-[var(--bg-color)] text-[var(--text-color)]">
        <thead>
          <tr className="border-b border-gray-600">
            <th className="px-4 py-2 text-left">#</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          { data&&
          (data.map((patient,idx) => (
            <tr key={patient.id} className="hover:bg-[rgba(255,255,255,0.05)]">
            <td className="px-4 py-2">{idx + 1}</td>
            <td className="px-4 py-2">{patient.name}</td>
            <td className="px-4 py-2 space-x-2 text-center">
              <button
                onClick={() => onView(patient)}
                className="px-2 py-1 bg-green-600 text-white rounded text-sm"
              >
                View
              </button>
              <button
                onClick={async () => {
                  await db.query('DELETE FROM patients WHERE id = $1;', [patient.id]);
                }}
                className="px-2 py-1 bg-red-600 text-white rounded text-sm"
              >
                Delete
              </button>
            </td>
          </tr>
            )))
        }
        </tbody>
      </table>
    </div>
  )
}

export default PatientList