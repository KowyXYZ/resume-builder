// components/ResumeForm.tsx
import React, { ChangeEvent } from 'react';

interface ResumeFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev: any) => ({ ...prev, profilePicture: e.target.files[0] }));
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="about"
        placeholder="About You"
        value={formData.about}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="skills"
        placeholder="Skills (comma-separated)"
        value={formData.skills}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="experience"
        placeholder="Experience"
        value={formData.experience}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <textarea
        name="projects"
        placeholder="Projects"
        value={formData.projects}
        onChange={handleChange}
        className="border p-2 mb-2 w-full"
      />
      <input
        type="file"
        onChange={handleFileChange}
        className="border p-2 mb-2 w-full"
      />
    </div>
  );
};

export default ResumeForm;
