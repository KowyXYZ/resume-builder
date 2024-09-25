// components/ResumeForm.tsx

import React, { ChangeEvent, useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/core/accordion';
import { ChevronUp } from 'lucide-react';

interface ResumeFormProps {
  formData: any;
  setFormData: (data: any) => void;
}

const ResumeForm: React.FC<ResumeFormProps> = ({ formData, setFormData }) => {
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [experience, setExperience] = useState({
    employer: '',
    jobTitle: '',
    city: '',
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData((prev: any) => ({ ...prev, profilePicture: e.target.files[0] }));
    }
  };

  const handleExperienceChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setExperience((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddExperience = () => {
    setFormData((prev: any) => ({
      ...prev,
      experience: prev.experience ? `${prev.experience}; ${experience.jobTitle} at ${experience.employer}` : `${experience.jobTitle} at ${experience.employer}`,
    }));
    setExperience({
      employer: '',
      jobTitle: '',
      city: '',
      startDate: '',
      endDate: '',
      description: '',
    });
    setExperienceVisible(false);
  };

  return (
    <div className="w-1/3 mx-auto p-4 bg-white rounded shadow">
      <Accordion
        className='flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700'
        transition={{ duration: 0.2, ease: 'easeInOut' }}
      >
        {/* Profile Section */}
        <AccordionItem value='getting-started' className='py-2'>
          <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center justify-between'>
              <div>Profile</div>
              <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
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
            <input
              type="file"
              onChange={handleFileChange}
              className="border p-2 mb-2 w-[250px]"
            />
          </AccordionContent>
        </AccordionItem>

        {/* Skills Section */}
        <AccordionItem value='skills' className='py-2'>
          <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center justify-between'>
              <div>Skills</div>
              <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <textarea
              name="skills"
              placeholder="Skills (comma-separated)"
              value={formData.skills}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
          </AccordionContent>
        </AccordionItem>

        {/* Experience Section */}
        <AccordionItem value='experience' className='py-2'>
          <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center justify-between'>
              <div>Experience</div>
              <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            {experienceVisible && (
              <div className='flex gap-2 flex-col'>
                <input
                  type="text"
                  name="employer"
                  placeholder='Employer'
                  value={experience.employer}
                  onChange={handleExperienceChange}
                />
                <input
                  type="text"
                  name="jobTitle"
                  placeholder='Job Title'
                  value={experience.jobTitle}
                  onChange={handleExperienceChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder='City'
                  value={experience.city}
                  onChange={handleExperienceChange}
                />
                <input
                  type="text"
                  name="startDate"
                  placeholder='Start Date'
                  value={experience.startDate}
                  onChange={handleExperienceChange}
                />
                <input
                  type="text"
                  name="endDate"
                  placeholder='End Date'
                  value={experience.endDate}
                  onChange={handleExperienceChange}
                />
                <textarea
                  name="description"
                  placeholder='Description'
                  value={experience.description}
                  onChange={handleExperienceChange}
                />
                <button onClick={handleAddExperience}>Add Experience</button>
              </div>
            )}
            <button onClick={() => setExperienceVisible((prev) => !prev)} className='text-black border p-2 py-1 border-black'>
              {experienceVisible ? 'Close' : '+'}
            </button>
          </AccordionContent>
        </AccordionItem>

        {/* Projects Section */}
        <AccordionItem value='projects' className='py-2'>
          <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center justify-between'>
              <div>Projects</div>
              <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <textarea
              name="projects"
              placeholder="Projects"
              value={formData.projects}
              onChange={handleChange}
              className="border p-2 mb-2 w-full"
            />
          </AccordionContent>
        </AccordionItem>

        {/* Education Section */}
        <AccordionItem value='education' className='py-2'>
          <AccordionTrigger className='w-full text-left text-zinc-950 dark:text-zinc-50'>
            <div className='flex items-center justify-between'>
              <div>Education</div>
              <ChevronUp className='h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-[expanded]:-rotate-180 dark:text-zinc-50' />
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p className='text-zinc-500 dark:text-zinc-400'>
              edu
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <h2 className="text-2xl font-bold mb-4">Resume Builder</h2>
    </div>
  );
};

export default ResumeForm;
