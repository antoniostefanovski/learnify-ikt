import * as MockDataService from './MockDataService';
import * as CourseService from './CourseService';
import * as LeaderboardService from './LeaderboardService';
import * as ReviewService from './ReviewService';

export const API_MODE = {
  MOCK: 'mock',
  REAL: 'real',
  REAL_WITH_MOCK_FALLBACK: 'real_with_mock_fallback'
};

export const CURRENT_API_MODE = API_MODE.MOCK;

export const useMockData = () => CURRENT_API_MODE === API_MODE.MOCK;

export const getCourses = async () => {
  if (useMockData()) {
    return MockDataService.getCourses();
  }
  
  try {
    return await CourseService.getAllCourses();
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log('Falling back to mock data for courses');
      return MockDataService.getCourses();
    }
    throw error;
  }
};

export const getCourseById = async (id) => {
  if (useMockData()) {
    return MockDataService.getCourseById(id);
  }
  
  try {
    return await CourseService.getCourseById(id);
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log(`Falling back to mock data for course ${id}`);
      return MockDataService.getCourseById(id);
    }
    throw error;
  }
};

export const createCourse = async (course) => {
  if (useMockData()) {
    return MockDataService.createCourse(course);
  }
  
  try {
    // For real API, convert to FormData if needed
    let courseData = course;
    
    if (!(courseData instanceof FormData)) {
      const formData = new FormData();
      formData.append('title', course.courseName || '');
      formData.append('description', course.courseDescription || '');
      formData.append('category', course.category || '');
      
      if (course.courseImage) {
        formData.append('image', course.courseImage);
      }
      
      courseData = formData;
    }
    
    return await CourseService.createCourse(courseData);
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log('Falling back to mock data for course creation');
      return MockDataService.createCourse(course);
    }
    throw error;
  }
};

export const updateCourse = async (id, course) => {
  if (useMockData()) {
    return MockDataService.updateCourse(id, course);
  }
  
  try {
    // For real API, convert to FormData if needed
    let courseData = course;
    
    if (!(courseData instanceof FormData)) {
      const formData = new FormData();
      formData.append('id', id);
      formData.append('title', course.courseName || '');
      formData.append('description', course.courseDescription || '');
      formData.append('category', course.category || '');
      
      if (course.courseImage) {
        formData.append('image', course.courseImage);
      }
      
      // Handle materials
      if (course.materials && course.materials.length > 0) {
        course.materials.filter(m => m.file).forEach(material => {
          formData.append('materials', material.file);
        });
      }
      
      courseData = formData;
    }
    
    return await CourseService.updateCourse(id, courseData);
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log(`Falling back to mock data for updating course ${id}`);
      return MockDataService.updateCourse(id, course);
    }
    throw error;
  }
};

export const deleteCourse = async (id) => {
  if (useMockData()) {
    return MockDataService.deleteCourse(id);
  }
  
  try {
    return await CourseService.deleteCourse(id);
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log(`Falling back to mock data for deleting course ${id}`);
      return MockDataService.deleteCourse(id);
    }
    throw error;
  }
};

export const getLeaderboard = async () => {
  if (useMockData()) {
    return MockDataService.getLeaderboard();
  }
  
  try {
    return await LeaderboardService.getLeaderboard();
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log('Falling back to mock data for leaderboard');
      return MockDataService.getLeaderboard();
    }
    throw error;
  }
};

export const getCourseReviews = async (courseId) => {
  if (useMockData()) {
    return MockDataService.getCourseReviews(courseId);
  }
  
  try {
    return await ReviewService.getCourseReviews(courseId);
  } catch (error) {
    if (CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK) {
      console.log(`Falling back to mock data for reviews of course ${courseId}`);
      return MockDataService.getCourseReviews(courseId);
    }
    throw error;
  }
}; 