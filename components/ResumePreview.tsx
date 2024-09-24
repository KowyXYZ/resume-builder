// components/ResumePreview.tsx
import React from 'react';

interface ResumePreviewProps {
  data: any;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="w-[650px] mx-auto p-4 border border-gray-300 bg-red rounded shadow">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p>{data.phone}</p>
      <p>{data.about}</p>
      <h3 className="font-semibold">Skills</h3>
      <p>{data.skills}</p>
      <h3 className="font-semibold">Experience</h3>
      <p>{data.experience}</p>
      <h3 className="font-semibold">Projects</h3>
      <p>{data.projects}</p>
      {data.profilePicture && (
        <img src={URL.createObjectURL(data.profilePicture)} alt="Profile" className="w-32 h-32 object-contain rounded" />
      )}
    </div>
  );
};

export default ResumePreview;
