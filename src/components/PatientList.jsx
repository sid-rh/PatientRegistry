import React,{useState} from 'react';
import { useLiveQuery,usePGlite } from '@electric-sql/pglite-react';

const PatientList = () => {

    // const [rows,setRows]=useState([]);

    // const db = usePGlite();
    // db.live.query(
    //     'SELECT * FROM patients ORDER BY created_at DESC;',
    //     [],
    //     (res)=>{
    //         setRows(res);
    //     }
    // );

    const res=useLiveQuery(
        'SELECT * FROM patients ORDER BY created_at DESC;',
    );
    const data=res!==undefined?res.rows:[];
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