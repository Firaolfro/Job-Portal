'use client';

import { IoInformationCircleOutline } from "react-icons/io5";
import { BookmarkIcon } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { TfiEmail } from "react-icons/tfi";
import { MdOutlineFileDownload } from "react-icons/md";
import { HiOutlineDotsVertical } from 'react-icons/hi';

const SavedCandidates = () => {
  const [bookmarkedJobs, setBookmarkedJobs] = useState<Record<number, boolean>>({});
  const [showOptionsMenu, setShowOptionsMenu] = useState<Record<number, boolean>>({});


  const toggleBookmark = (index: number) => {
    setBookmarkedJobs((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const jobs = [
    {
      name: 'Guy Hawkins',
      job: 'Technical Support Specialist',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Jakob Jones',
      job: 'Product Designer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Cameron Wiliams',
      job: 'Marketing Officer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Robert Fox',
      job: 'Marketing Manager',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Kathryn Murphy',
      job: 'Junior Graphics Designer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Darlene Robertson',
      job: 'Visual Designer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Kristin Watson',
      job: 'Senior UX Designer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Junny Wilson',
      job: 'Interaction Designer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Marvin McKinney',
      job: 'Networking Engineer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
    {
      name: 'Theresa Webb',
      job: 'Software Engineer',
      icon: '/icons/maleprofile.png',
      button: 'View Profile →',
    },
  ];

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between">
        <h3 className="font-semibold">Saved Candidates</h3>
        <div className="text-gray-600 flex justify-between items-center text-xs font-semibold">
          <IoInformationCircleOutline className="h-5 w-5" />
          <p className="pl-1">All of the candidates are visible until 24 march, 2021</p>
        </div>
      </div>
      {jobs.map((job, index) => (
        <div key={index} className="border-b border-gray-300 pb-4">
          <div className="flex items-center space-x-4 hover:border-2 hover:border-blue-500 hover:px-5 hover:rounded-md hover:py-1">
            <Image
              src={job.icon}
              alt={`${job.name} icon`}
              width={50}
              height={50}
              className="rounded-md"
            />
            <div className="flex-1">
              <h3 className="text-sm font-semibold pr-2">{job.name}</h3>
              <p className="text-xs text-gray-500 pr-3 font-semibold">{job.job}</p>
            </div>
            <div className="text-right flex items-center space-x-4">
              <button onClick={() => toggleBookmark(index)}>
                {bookmarkedJobs[index] ? (
                  <BookmarkIcon fill="#3b82f6" stroke="#3b82f6" className="w-5 h-5" />
                  ) : (
                  <BookmarkIcon className="w-5 h-5 text-gray-400" />
                )}
              </button>
              <div className="flex items-center space-x-2 relative">
                <button className="text-blue-600 font-bold bg-blue-100 p-3 rounded-md text-xs hover:bg-blue-500 hover:text-white">
                  {job.button}
                </button>
                <div className="relative">
                  <button
                    onClick={() =>
                      setShowOptionsMenu((prev) => ({
                        ...prev,
                        [index]: !prev[index],
                      }))
                    }
                    className="p-2 rounded-full hover:bg-gray-200"
                  >
                    <HiOutlineDotsVertical className="w-4 h-4 text-gray-700" />
                  </button>
                  {showOptionsMenu[index] && (
                    <div className="absolute right-0 mt-2 w-36 bg-white shadow-md rounded-md z-10 text-sm text-gray-500 font-semibold">
                      <div className="flex items-center px-3 p-2 hover:bg-gray-100 space-x-2">
                        <TfiEmail className="w-5 h-5" />
                        <button>Send Email</button>
                      </div>
                      <div className="flex items-center px-3 p-2 hover:bg-gray-100 space-x-2">
                        <MdOutlineFileDownload className="w-5 h-5" />
                        <button>Download Cv</button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>





            
          </div>
        </div>
      ))}
    </div>
  );
};

export default SavedCandidates;
