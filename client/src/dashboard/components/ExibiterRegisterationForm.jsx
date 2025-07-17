import React, { useState } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ExibiterRegisterationForm = () => {
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [documents, setDocuments] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!companyName || !contactPerson || !email || !phone || !documents) {
      toast.error('Please fill all required fields & upload documents');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('companyName', companyName);
      formData.append('contactPerson', contactPerson);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('documents', documents);

      await axios.post('http://localhost:2000/register-exhibitor', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      toast.success('Registration submitted successfully');
      resetForm();
    } catch (err) {
      console.error(err);
      toast.error('Registration failed');
    }
  };

  const resetForm = () => {
    setCompanyName('');
    setContactPerson('');
    setEmail('');
    setPhone('');
    setDocuments(null);
  };

  return (
    <>
      <p className="text-2xl font-bold text-center underline mb-4">Exhibitor Expo Registration</p>
      <form onSubmit={handleSubmit} className="w-[50%] mx-auto bg-white p-6 rounded shadow space-y-4">
        <input
          type="text"
          placeholder="Company Name *"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Contact Person *"
          value={contactPerson}
          onChange={(e) => setContactPerson(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="email"
          placeholder="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Phone *"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="input input-bordered w-full"
        />
        <input
          type="file"
          accept=".pdf,.doc,.docx,.png,.jpg"
          onChange={(e) => setDocuments(e.target.files[0])}
          className="file-input file-input-bordered w-full"
        />

        <button type="submit" className="btn btn-primary w-full">
          Submit Registration
        </button>
      </form>

      <Toaster position="top-center" />
    </>
  );
};

export default ExibiterRegisterationForm;
