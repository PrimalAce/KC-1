import React, { useState } from 'react';

const AppForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    driverLicenseId: '',
    driverLicenseDoc: null,
    votersCardDoc: null,
    nationalIdNumber: '',
  });

  const [selectedIdTypes, setSelectedIdTypes] = useState({
    driverLicense: false,
    votersCard: false,
    nationalId: false,
  });

  const [errors, setErrors] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files[0]
    }));
  };

  const handleIdTypeChange = (idType) => {
    setSelectedIdTypes(prev => ({
      ...prev,
      [idType]: !prev[idType]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate at least one ID is selected and filled
    const isDriverLicenseFilled = selectedIdTypes.driverLicense && formData.driverLicenseId && formData.driverLicenseDoc;
    const isVotersCardFilled = selectedIdTypes.votersCard && formData.votersCardDoc;
    const isNationalIdFilled = selectedIdTypes.nationalId && formData.nationalIdNumber;

    if (!isDriverLicenseFilled && !isVotersCardFilled && !isNationalIdFilled) {
      setErrors('Please select and fill at least ONE ID type');
      return;
    }

    setErrors('');
    console.log('Form submitted:', formData, selectedIdTypes);
    // Handle form submission here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6 py-12">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Registration Form</h1>
          <p className="text-gray-600">Please provide your information</p>
        </div>

        {/* Main Bubble Container */}
        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Personal Information Bubble */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
              <h2 className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Personal Information
              </h2>
              
              <div className="space-y-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition bg-white"
                    required
                  />
                </div>

                {/* Middle Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Middle Name
                  </label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    placeholder="Enter your middle name (optional)"
                    className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition bg-white"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 rounded-lg border-2 border-blue-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none transition bg-white"
                    required
                  />
                </div>
              </div>
            </div>

            {/* ID Bubble - Select at least 1 */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200">
              <h2 className="text-xl font-bold text-indigo-900 mb-4 flex items-center">
                <span className="w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Select ID Type (Select at least 1) *
              </h2>
              
              {errors && (
                <div className="mb-4 p-3 bg-red-100 border-2 border-red-400 text-red-700 rounded-lg text-sm">
                  {errors}
                </div>
              )}

              <div className="space-y-4">
                {/* Driver's License Checkbox */}
                <div className="bg-white rounded-lg p-4 border-2 border-indigo-200 hover:border-indigo-400 transition">
                  <label className="flex items-center mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedIdTypes.driverLicense}
                      onChange={() => handleIdTypeChange('driverLicense')}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    />
                    <span className="ml-3 font-semibold text-gray-700">Driver's License</span>
                  </label>

                  {selectedIdTypes.driverLicense && (
                    <div className="space-y-3 pl-4 border-l-3 border-indigo-300">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          License ID
                        </label>
                        <input
                          type="text"
                          name="driverLicenseId"
                          value={formData.driverLicenseId}
                          onChange={handleInputChange}
                          placeholder="Enter your driver's license ID"
                          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Scanned License
                        </label>
                        <input
                          type="file"
                          name="driverLicenseDoc"
                          onChange={handleFileChange}
                          accept="image/*,.pdf"
                          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 cursor-pointer"
                        />
                        {formData.driverLicenseDoc && (
                          <p className="text-sm text-indigo-700 mt-2">✓ {formData.driverLicenseDoc.name}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* Voters Card Checkbox */}
                <div className="bg-white rounded-lg p-4 border-2 border-indigo-200 hover:border-indigo-400 transition">
                  <label className="flex items-center mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedIdTypes.votersCard}
                      onChange={() => handleIdTypeChange('votersCard')}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    />
                    <span className="ml-3 font-semibold text-gray-700">Voters Card</span>
                  </label>

                  {selectedIdTypes.votersCard && (
                    <div className="space-y-3 pl-4 border-l-3 border-indigo-300">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Upload Voters Card
                        </label>
                        <input
                          type="file"
                          name="votersCardDoc"
                          onChange={handleFileChange}
                          accept="image/*,.pdf"
                          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 cursor-pointer"
                        />
                        {formData.votersCardDoc && (
                          <p className="text-sm text-indigo-700 mt-2">✓ {formData.votersCardDoc.name}</p>
                        )}
                      </div>
                    </div>
                  )}
                </div>

                {/* National ID Checkbox */}
                <div className="bg-white rounded-lg p-4 border-2 border-indigo-200 hover:border-indigo-400 transition">
                  <label className="flex items-center mb-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedIdTypes.nationalId}
                      onChange={() => handleIdTypeChange('nationalId')}
                      className="w-5 h-5 text-indigo-600 rounded focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                    />
                    <span className="ml-3 font-semibold text-gray-700">National ID</span>
                  </label>

                  {selectedIdTypes.nationalId && (
                    <div className="space-y-3 pl-4 border-l-3 border-indigo-300">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          National ID Number
                        </label>
                        <input
                          type="text"
                          name="nationalIdNumber"
                          value={formData.nationalIdNumber}
                          onChange={handleInputChange}
                          placeholder="Enter your national ID number"
                          className="w-full px-4 py-2 rounded-lg border-2 border-indigo-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 outline-none transition bg-white"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-4 rounded-xl hover:from-blue-600 hover:to-indigo-700 transition transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              >
                Submit Registration
              </button>
            </div>

            {/* Required Fields Note */}
            <p className="text-xs text-gray-500 text-center">* indicates required fields</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppForm;
