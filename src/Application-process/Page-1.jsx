import { useState } from 'react';
import FaceCapture from '../Components/Facecapture';
import AppForm from './AppForm';

const Page1 = ({ onNextPage }) => {
  const [isFaceCaptureOpen, setIsFaceCaptureOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      {/* Registration Form */}
      <AppForm />

      {/* Face Capture Section */}
      <div className="mx-auto max-w-4xl mt-8">
        <div className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200">
          <h1 className="text-3xl font-bold text-slate-900">Application Process</h1>
          <p className="mt-3 text-slate-600">
            Click the button below to begin the face capture flow. You can retake the photo if needed.
          </p>

          <button
            onClick={() => setIsFaceCaptureOpen(true)}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-white shadow hover:bg-blue-700 transition"
          >
            Take Face Capture
          </button>

          {isFaceCaptureOpen && (
            <div className="mt-8">
              <FaceCapture />
            </div>
          )}

          <div className="mt-8 text-right">
            <button
              onClick={onNextPage}
              className="inline-flex items-center justify-center rounded-full bg-emerald-600 px-6 py-3 text-white shadow hover:bg-emerald-700 transition"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page1;
