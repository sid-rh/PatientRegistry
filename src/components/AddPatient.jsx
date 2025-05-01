import React,{ useState } from 'react';
import { usePGlite } from '@electric-sql/pglite-react';


const AddPatient = ({onClose}) => {
    const db = usePGlite();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({name,dob,email});
        await db.query(
        'INSERT INTO patients (name, dob, email) VALUES ($1, $2, $3);',
        [name, dob, email]
        );
        onClose();
      };
  return (
    <div>
        <div>
            <h2>Add Patient</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label>Date Of Birth</label>
                    <input
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddPatient