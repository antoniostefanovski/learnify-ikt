import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { createCourse } from '../services/ApiService';

export default function AddCoursePage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    courseName: '',
    courseDescription: '',
    category: '',
    courseImage: null,
    proffesorId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      courseImage: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      setError(null);
      
      // In a real app, we'd determine whether to use FormData or plain object
      // based on the API needs, but for simplicity, we'll create FormData
      
      // Create course data
      const courseData = {
        courseName: formData.courseName,
        courseDescription: formData.courseDescription,
        category: formData.category,
        courseImage: formData.courseImage
      };
      
      const result = await createCourse(courseData);
      
      if (result) {
        // Navigate to the course page or courses list
        navigate('/courses');
      } else {
        setError('Failed to create course');
      }
    } catch (err) {
      console.error('Error creating course:', err);
      setError('An error occurred while creating the course');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    // Navigate back to courses page
    navigate('/dashboard');
  };

  return (
    <div className="w-full bg-white font-inter">
      {/* Header */}
      <header className="flex justify-between items-center p-4 w-full">
        <div className="flex items-center">
          <img src={Logo} alt="Learnify Logo" className="h-12" />
          <h1 className="text-blue-600 text-3xl font-bold ml-2">Learnify</h1>
        </div>
        <div className="text-blue-600 text-2xl font-semibold">
          Hello, Admin!
        </div>
      </header>

      {/* Main Form */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-[#C6E1FF] bg-opacity-80 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Add New Course</h2>
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg mb-6">
              <p>{error}</p>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="courseName" className="block text-xl font-medium">
                Course Name
              </label>
              <input
                type="text"
                id="courseName"
                name="courseName"
                value={formData.courseName}
                onChange={handleInputChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="courseDescription" className="block text-xl font-medium">
                Course Description
              </label>
              <textarea
                id="courseDescription"
                name="courseDescription"
                value={formData.courseDescription}
                onChange={handleInputChange}
                rows="4"
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-xl font-medium">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
                className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white text-black"
                style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1em' }}
                required
              >
                <option value="">Select a category</option>
                <option value="programming" className="text-black">Programming</option>
                <option value="datascience" className="text-black">Data Science</option>
                <option value="design" className="text-black">Design</option>
                <option value="business" className="text-black">Business</option>
                <option value="marketing" className="text-black">Marketing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none">
                <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Choose file
                <input 
                  type="file" 
                  id="courseImage"
                  name="courseImage"
                  onChange={handleFileChange}
                  className="sr-only" 
                  accept="image/*"
                />
              </label>
              {formData.courseImage && (
                <p className="text-sm text-gray-500 mt-1">{formData.courseImage.name}</p>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="submit"
                disabled={isLoading}
                className={`px-12 py-3 ${isLoading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
              >
                {isLoading ? 'Saving...' : 'Save'}
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                disabled={isLoading}
                className="px-12 py-3 bg-white text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 