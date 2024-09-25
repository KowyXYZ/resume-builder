// pages/index.tsx
"use client"


import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeForm from '@/components/ResumeForm';
import ResumePreview from '@/components/ResumePreview';
import ResumePDF from '@/components/PDF';

const Home: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    about: '',
    skills: '',
    experience: '',
    projects: '',
    profilePicture: null,
  });

  return (
    <div className="  p-5">
    <div className='flex justify-between'>
        <ResumeForm formData={formData} setFormData={setFormData} />
        <ResumePreview data={formData} />
    </div>
    <div className="mt-4 text-center">
      <PDFDownloadLink 
        document={<ResumePDF data={formData} />} 
        fileName="resume.pdf"
      >
        {({ loading } : any) => (
          loading ? (
            <button className="bg-blue-500 text-white p-2 rounded">
              Loading document...
            </button>
          ) : (
            <button className="bg-green-500 text-white p-2 rounded">
              Download Resume
            </button>
          )
        )}
      </PDFDownloadLink>
    </div>
  </div>
  );
};

export default Home;
