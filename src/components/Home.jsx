import React,{useState} from 'react';
import PatientList from './PatientList';
import AddPatient from './AddPatient';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Patients</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setModalOpen(true)}
        >
          Add Patient
        </button>
      </div>
      <PatientList />
      {isModalOpen && <AddPatient onClose={() => setModalOpen(false)} />}
    </div>
  )
}

export default Home