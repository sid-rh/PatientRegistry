import React from 'react'

const ViewPatient = ({ patient, onClose }) => {
    if (!patient) return null;
    return (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={onClose}
        >
          <div
            className="bg-[var(--bg-color)] text-[var(--text-color)] rounded-lg shadow-lg p-6 w-80"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <h2 className="text-xl font-bold mb-4">Patient Details</h2>
            <p><strong>ID:</strong> {patient.id}</p>
            <p><strong>Name:</strong> {patient.name}</p>
            <p><strong>Date of Birth:</strong> {new Date(patient.dob).toLocaleDateString()}</p>
            <p><strong>Email:</strong> {patient.email}</p>
            <p><strong>Registered At:</strong> {new Date(patient.created_at).toLocaleString()}</p>
            <div className="mt-4 text-right">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
}

export default ViewPatient