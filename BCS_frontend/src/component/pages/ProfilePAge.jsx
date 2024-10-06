import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaPencilAlt } from 'react-icons/fa';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main St, Anytown, USA',
    bio: 'Passionate developer with a love for creating user-friendly applications.',
    profilePicture: 'https://via.placeholder.com/150',
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically send the updated user data to your backend
    console.log('Saving user data:', user);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
      ...prevUser,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-headline mt-[6rem] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto  shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src={user.profilePicture} alt={user.name} />
          </div>
          <div className="p-8 w-full">
            <div className="flex justify-between items-start">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              {!isEditing && (
                <button
                  onClick={handleEdit}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
                >
                  <FaPencilAlt className="mr-2" /> Edit Profile
                </button>
              )}
            </div>
            <p className="mt-2 text-gray-600">{user.bio}</p>
            <div className="mt-4 space-y-2">
              <div className="flex items-center text-gray-600">
                <FaEnvelope className="mr-2" />
                {isEditing ? (
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                ) : (
                  user.email
                )}
              </div>
              <div className="flex items-center text-gray-600">
                <FaPhone className="mr-2" />
                {isEditing ? (
                  <input
                    type="tel"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                ) : (
                  user.phone
                )}
              </div>
              <div className="flex items-center text-gray-600">
                <FaMapMarkerAlt className="mr-2" />
                {isEditing ? (
                  <input
                    type="text"
                    name="address"
                    value={user.address}
                    onChange={handleChange}
                    className="border-b border-gray-300 focus:border-blue-500 outline-none"
                  />
                ) : (
                  user.address
                )}
              </div>
            </div>
          </div>
        </div>
        {isEditing && (
          <div className="px-8 py-4 bg-gray-50 text-right">
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;