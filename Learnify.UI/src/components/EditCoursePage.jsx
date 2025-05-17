import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { getCourseById, updateCourse, deleteCourse } from '../services/ApiService';

export default function EditCoursePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    courseName: '',
    courseDescription: '',
    category: '',
    courseImage: null
  });
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        setIsLoading(true);
        
        const courseData = await getCourseById(id);
        
        if (courseData) {
          setFormData({
            courseName: courseData.title || '',
            courseDescription: courseData.description || '',
            category: courseData.category || '',
            courseImage: null // Existing image will be shown differently
          });

          if (courseData.materials && Array.isArray(courseData.materials)) {
            setMaterials(courseData.materials);
          }
        } else {
          setError('Course not found');
        }
      } catch (err) {
        console.error('Error fetching course data:', err);
        setError('Failed to load course. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCourseData();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      setFormData({
        ...formData,
        courseImage: files[0]
      });

      const newMaterials = files.map(file => ({
        name: file.name,
        file: file,
        isNew: true
      }));
      
      setMaterials([...materials, ...newMaterials]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const courseData = {
        id: id,
        courseName: formData.courseName,
        courseDescription: formData.courseDescription,
        category: formData.category,
        courseImage: formData.courseImage,
        materials: materials.filter(m => m.isNew).map(m => ({
          name: m.name,
          file: m.file
        }))
      };

      const success = await updateCourse(id, courseData);
      
      if (success) {
        navigate(`/dashboard`);
      } else {
        setError('Failed to update course');
      }
    } catch (err) {
      console.error('Error updating course:', err);
      setError('An error occurred while updating the course');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate(`/dashboard`);
  };

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this course? This action cannot be undone.')) {
      try {
        setIsLoading(true);
        
        const success = await deleteCourse(id);
        
        if (success) {
          navigate('/courses');
        } else {
          setError('Failed to delete course');
        }
      } catch (err) {
        console.error('Error deleting course:', err);
        setError('An error occurred while deleting the course');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading course data...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="w-full min-h-screen bg-white font-inter">
      <header className="flex justify-between items-center p-4 w-full">
        <div className="flex items-center">
          <img src={Logo} alt="Learnify Logo" className="h-12" />
          <h1 className="text-blue-600 text-3xl font-bold ml-2">Learnify</h1>
        </div>
        <div className="text-blue-600 text-2xl font-semibold">
          Hello, Admin!
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-[#C6E1FF] bg-opacity-80 rounded-2xl p-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-black">Edit Course</h2>
          
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
                  accept="*"
                  multiple
                />
              </label>

              {materials.length > 0 && (
                <div className="mt-4">
                  {materials.map((material, index) => (
                    <div key={index} className="text-sm text-gray-900 mt-1">
                      {material.name}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex justify-between pt-4">
              <button
                type="submit"
                className="px-12 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                Update
              </button>
              
              <button
                type="button"
                onClick={handleCancel}
                className="px-12 py-3 bg-white text-gray-700 font-semibold rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                Cancel
              </button>
              
              <button
                type="button"
                onClick={handleDelete}
                className="px-12 py-3 bg-white text-red-600 font-semibold rounded-md border border-red-500 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                disabled={isLoading}
              >
                Delete course
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
} 