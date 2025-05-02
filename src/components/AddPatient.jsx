import React,{ useState,useRef, useEffect } from 'react';
import { usePGlite } from '@electric-sql/pglite-react';


const AddPatient = ({onClose}) => {
    const db = usePGlite();
    const modalRef = useRef(null);
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        modalRef.current?.querySelector('input')?.focus();
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log({name,dob,email});
        await db.query(
        'INSERT INTO patients (name, dob, email) VALUES ($1, $2, $3);',
        [name, dob, email]
        );
        onClose();
      };

      const handleBackdropClick = () =>{
        onClose();
      }
  return (
    
        <div
        className="fixed inset-0 bg-black/30 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={handleBackdropClick}
        >
            <div
            ref={modalRef}
            className="bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg shadow-lg p-6 w-80"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-xl font-bold mb-4">Add Patient</h2>
                <form onSubmit={handleSubmit}>
                    <div className='py-2'>
                        <label className="block text-sm font-medium mb-1">Name</label>
                        <input
                        className="w-full border border-gray-500 rounded px-2 py-1 bg-transparent text-[var(--text-color)]"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        />
                    </div>
                    <div className='py-2'>
                        <label className="block text-sm font-medium mb-1">Date Of Birth</label>
                        <input
                         className="w-full border border-gray-500 rounded px-2 py-1 bg-transparent text-[var(--text-color)]"
                        type="date"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        />
                    </div>
                    <div className='py-2'>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                         className="w-full border border-gray-500 rounded px-2 py-1 bg-transparent text-[var(--text-color)]"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="flex justify-end space-x-2 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 border border-gray-500 rounded bg-transparent text-[var(--text-color)]"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-600 text-white rounded"
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