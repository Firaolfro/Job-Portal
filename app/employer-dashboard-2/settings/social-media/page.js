// src/app/settings/social-links/page.jsx
'use client';
import { useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaPinterest, FaTimes, FaPlus } from 'react-icons/fa';

export default function SocialLinksPage() {
  const [socialLinks, setSocialLinks] = useState([
    { id: 1, platform: 'LinkedIn', url: '' },
    { id: 2, platform: 'Facebook', url: '' }
  ]);

  const handleUrlChange = (id, value) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? { ...link, url: value } : link
    ));
  };

  const handlePlatformChange = (id, platform) => {
    setSocialLinks(socialLinks.map(link => 
      link.id === id ? { ...link, platform } : link
    ));
  };

  const deleteLink = (id) => {
    setSocialLinks(socialLinks.filter(link => link.id !== id));
  };

  const addNewLink = () => {
    const newId = socialLinks.length > 0 ? Math.max(...socialLinks.map(link => link.id)) + 1 : 1;
    setSocialLinks([
      ...socialLinks,
      { id: newId, platform: 'Facebook', url: '' }
    ]);
  };

  const getPlatformIcon = (platform) => {
    switch(platform) {
      case 'Facebook': return <FaFacebook className="text-blue-600 text-xl mr-2" />;
      case 'Twitter': return <FaTwitter className="text-blue-400 text-xl mr-2" />;
      case 'Instagram': return <FaInstagram className="text-pink-600 text-xl mr-2" />;
      case 'Youtube': return <FaYoutube className="text-red-600 text-xl mr-2" />;
      case 'LinkedIn': return <FaLinkedin className="text-blue-700 text-xl mr-2" />;
      case 'Pinterest': return <FaPinterest className="text-red-500 text-xl mr-2" />;
      default: return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      

      {/* Social Links Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Social Media Profiles</h2>
        
        {/* Social Links List */}
        {socialLinks.map((link, index) => (
          <div key={link.id} className="space-y-2">
            <h3 className="font-medium">Social Link {index + 1}</h3>
            <div className="flex items-center space-x-2">
              <div className="flex items-center border border-gray-300 rounded-md p-2 w-40">
                {getPlatformIcon(link.platform)}
                <select 
                  className="appearance-none bg-transparent outline-none"
                  value={link.platform}
                  onChange={(e) => handlePlatformChange(link.id, e.target.value)}
                >
                  <option value="Facebook">Facebook</option>
                  <option value="Twitter">Twitter</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Youtube">Youtube</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Pinterest">Pinterest</option>
                </select>
              </div>
              <input
                type="text"
                value={link.url}
                onChange={(e) => handleUrlChange(link.id, e.target.value)}
                className="flex-1 border border-gray-300 rounded-md p-2"
                placeholder={`${link.platform} profile link/url...`}
              />
              <button 
                onClick={() => deleteLink(link.id)}
                className="p-2 text-gray-500 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>
          </div>
        ))}

        <hr className="border-gray-200 my-4" />

        {/* Add New Social Link Button */}
        <div className="flex justify-center">
          <button
            onClick={addNewLink}
            className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 px-4 py-2 border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
          >
            <FaPlus className="text-sm" />
            <span>Add New Social Link</span>
          </button>
        </div>

        {/* Save Changes Button */}
        <div className="pt-6 flex justify-end">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}