// components/ResumePreview.tsx
import React from 'react';

interface ResumePreviewProps {
  data: any;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ data }) => {
  return (
    <div className="w-[650px] h-[750px] bg-[#fff] text-[#121212] flex flex-col  mx-auto p-4 border border-gray-300  rounded shadow">
      <div className='flex justify-between items-center'>
        
        <div className='flex flex-col'>
           <h2 className="text-xl font-bold">{data.name}</h2>
           <div className='flex gap-2 text-gray-500'>
            <p>{data.phone}</p> 
            <p>{data.email}</p>
           </div>
        </div>
        {data.profilePicture && (
        <img src={URL.createObjectURL(data.profilePicture)} alt="Profile" className="w-32 h-32 object-contain rounded" />
      )}
      </div>
      
      <h3 className="font-semibold">About</h3>
      <p>{data.about}</p>
    
      <h3 className="font-semibold">Skills</h3>
      <p>{data.skills}</p>


      <h3 className="font-semibold">Experience</h3>
      <p>{data.experience}</p>

      
      <h3 className="font-semibold">Projects</h3>
      <p>{data.projects}</p>
      
    </div>
  );
};

export default ResumePreview;
