import React,{ useState } from 'react';
import { usePGlite } from '@electric-sql/pglite-react';


const AddPatient = ({onClose}) => {
    const db = usePGlite();
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        console.log("submit");
      };
  return (
    <div>
        <div>
            <h2>Add Patient</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    Name
                </div>
                <div>
                    Date of Birth
                </div>
                <div>
                    Email
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