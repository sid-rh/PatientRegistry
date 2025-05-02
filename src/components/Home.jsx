import React,{useState} from 'react';
import PatientList from './PatientList';
import AddPatient from './AddPatient';
import ViewPatientModal from './ViewPatient';

const Home = () => {
  const [isAddOpen, setAddOpen] = useState(false);
  const [viewPatient, setViewPatient] = useState(null);
  // const [refreshKey, setRefreshKey] = useState(0);

  // const triggerRefresh = () => setRefreshKey((k) => k + 1);

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Patients</h1>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setAddOpen(true)}
        >
          Add Patient
        </button>
      </div>
      <PatientList 
       onView={(patient) => setViewPatient(patient)}
      />
      {isAddOpen && <AddPatient onClose={() => {
        setAddOpen(false);
        }} />}

      {viewPatient && (
        <ViewPatientModal
          patient={viewPatient}
          onClose={() => setViewPatient(null)}
        />
      )}
    </div>
  )
}

export default Home