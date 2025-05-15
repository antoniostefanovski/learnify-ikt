// Instead of importing from a JSON file, define the mock data directly in the code
// This bypasses any issues with Vite's JSON import
const mockData = {
  "courses": {
    "1": {
      "id": "1",
      "title": "Data Science",
      "description": "Data science courses teach an interdisciplinary field focused on extracting knowledge and insights from data. Learn data manipulation, statistical analysis and machine learning to unlock insights and enhance decision-making and predictive abilities applicable to various fields.",
      "category": "datascience",
      "materials": [
        { "name": "Book1.pdf", "id": "m1", "url": "#" },
        { "name": "Presentatnion1.pptx", "id": "m2", "url": "#" }
      ],
      "image": "/courses.png"
    },
    "2": {
      "id": "2",
      "title": "Operating Systems",
      "description": "Learn the basic operating system abstraction, mechanisms and their implementations. This course covers process management, memory management, file systems, and more.",
      "category": "programming",
      "materials": [
        { "name": "OS_Textbook.pdf", "id": "m3", "url": "#" },
        { "name": "Lab_Instructions.docx", "id": "m4", "url": "#" }
      ],
      "image": "/courses.png"
    },
    "3": {
      "id": "3",
      "title": "Web Development",
      "description": "Learn to build modern web applications using HTML, CSS, JavaScript, and popular frameworks. This course covers frontend and backend development principles and practices.",
      "category": "programming",
      "materials": [
        { "name": "HTML_CSS_Basics.pdf", "id": "m5", "url": "#" },
        { "name": "JavaScript_Examples.zip", "id": "m6", "url": "#" }
      ],
      "image": "/courses.png"
    }
  },
  "leaderboard": [
    { "id": 1, "name": "John Smith", "coursesFinished": 9, "rank": 1 },
    { "id": 2, "name": "Sarah Johnson", "coursesFinished": 7, "rank": 2 },
    { "id": 3, "name": "Michael Brown", "coursesFinished": 6, "rank": 3 },
    { "id": 4, "name": "Emily Davis", "coursesFinished": 4, "rank": 4 },
    { "id": 5, "name": "David Wilson", "coursesFinished": 3, "rank": 5 },
    { "id": 6, "name": "Jessica Taylor", "coursesFinished": 2, "rank": 6 }
  ],
  "users": [
    { "id": 1, "username": "admin", "email": "admin@learnify.com", "role": "admin", "name": "Admin User" },
    { "id": 2, "username": "john", "email": "john@example.com", "role": "student", "name": "John Smith" },
    { "id": 3, "username": "sarah", "email": "sarah@example.com", "role": "student", "name": "Sarah Johnson" }
  ],
  "categories": [
    { "id": "programming", "name": "Programming" },
    { "id": "datascience", "name": "Data Science" },
    { "id": "design", "name": "Design" },
    { "id": "business", "name": "Business" },
    { "id": "marketing", "name": "Marketing" }
  ],
  "quizzes": {
    "1": {
      "id": "1",
      "courseId": "1",
      "title": "Data Science Fundamentals Quiz",
      "questions": [
        {
          "id": "q1",
          "text": "What is the primary purpose of data cleaning?",
          "options": [
            "To make data look visually appealing",
            "To remove or correct inaccurate records",
            "To compress data for storage",
            "To encrypt sensitive information"
          ],
          "correctAnswer": 1
        },
        {
          "id": "q2",
          "text": "Which of the following is NOT a common data visualization tool?",
          "options": [
            "Tableau",
            "Power BI",
            "MongoDB",
            "D3.js"
          ],
          "correctAnswer": 2
        }
      ]
    },
    "2": {
      "id": "2",
      "courseId": "2",
      "title": "Operating Systems Quiz",
      "questions": [
        {
          "id": "q1",
          "text": "What is a process in operating systems?",
          "options": [
            "A program in execution",
            "A system call",
            "A thread",
            "A CPU register"
          ],
          "correctAnswer": 0
        },
        {
          "id": "q2",
          "text": "Which scheduling algorithm prioritizes processes with the shortest estimated processing time?",
          "options": [
            "First-Come, First-Served (FCFS)",
            "Round Robin",
            "Shortest Job First (SJF)",
            "Priority Scheduling"
          ],
          "correctAnswer": 2
        }
      ]
    }
  },
  "reviews": {
    "1": [
      { "id": "r1", "userId": 2, "username": "John Smith", "rating": 5, "comment": "Excellent course! I learned so much about data science fundamentals.", "date": "2023-09-15" },
      { "id": "r2", "userId": 3, "username": "Sarah Johnson", "rating": 4, "comment": "Very informative, but some sections could use more examples.", "date": "2023-10-02" }
    ],
    "2": [
      { "id": "r3", "userId": 2, "username": "John Smith", "rating": 4, "comment": "Great overview of operating systems concepts.", "date": "2023-08-22" }
    ]
  },
  "enrollments": [
    { "id": "e1", "userId": 2, "courseId": "1", "enrollmentDate": "2023-07-10", "completed": true, "progress": 100 },
    { "id": "e2", "userId": 2, "courseId": "2", "enrollmentDate": "2023-08-05", "completed": true, "progress": 100 },
    { "id": "e3", "userId": 3, "courseId": "1", "enrollmentDate": "2023-07-15", "completed": true, "progress": 100 },
    { "id": "e4", "userId": 3, "courseId": "3", "enrollmentDate": "2023-09-20", "completed": false, "progress": 60 }
  ]
};

console.log('Using hardcoded mock data');

// Simulate async API calls with setTimeout
const simulateDelay = (data, delay = 300) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// Courses API
export const getCourses = () => {
  console.log('MockDataService.getCourses called');
  
  try {
    // Convert the courses object to an array
    const coursesArray = Object.keys(mockData.courses).map(key => ({
      ...mockData.courses[key]
    }));
    
    console.log('Returning courses array:', coursesArray);
    return simulateDelay(coursesArray);
  } catch (error) {
    console.error('Error processing courses data:', error);
    return simulateDelay([]);
  }
};

export const getCourseById = (id) => simulateDelay(mockData.courses[id] || null);

export const createCourse = async (course) => {
  const newId = String(Object.keys(mockData.courses).length + 1);
  const newCourse = {
    id: newId,
    title: course.courseName || '',
    description: course.courseDescription || '',
    category: course.category || '',
    materials: [],
    image: course.courseImage ? URL.createObjectURL(course.courseImage) : '/courses.png'
  };
  
  // In a real app we'd save to the server, here we just simulate success
  return simulateDelay({ ...newCourse });
};

export const updateCourse = async (id, course) => {
  if (!mockData.courses[id]) {
    throw new Error('Course not found');
  }
  
  // Update course in mock data (for a real implementation, we would persist this)
  const updatedCourse = {
    ...mockData.courses[id],
    title: course.courseName || mockData.courses[id].title,
    description: course.courseDescription || mockData.courses[id].description,
    category: course.category || mockData.courses[id].category,
  };
  
  // Handle image update if provided
  if (course.courseImage) {
    updatedCourse.image = URL.createObjectURL(course.courseImage);
  }
  
  // Handle materials update if provided
  if (course.materials && course.materials.length > 0) {
    const newMaterials = course.materials.map((material, index) => ({
      id: `new_material_${index}`,
      name: material.name,
      url: material.file ? URL.createObjectURL(material.file) : '#'
    }));
    
    updatedCourse.materials = [
      ...mockData.courses[id].materials,
      ...newMaterials
    ];
  }
  
  // In a real app we'd update the server, here we just simulate success
  return simulateDelay(true);
};

export const deleteCourse = async (id) => {
  if (!mockData.courses[id]) {
    throw new Error('Course not found');
  }
  
  // In a real app we'd delete from the server, here we just simulate success
  return simulateDelay(true);
};

// Leaderboard API
export const getLeaderboard = () => simulateDelay(mockData.leaderboard);

// Reviews API
export const getCourseReviews = (courseId) => simulateDelay(mockData.reviews[courseId] || []);

// Quiz API
export const getQuizForCourse = (courseId) => simulateDelay(mockData.quizzes[courseId] || null);

// Categories API
export const getCategories = () => simulateDelay(mockData.categories);

// User API
export const getUsers = () => simulateDelay(mockData.users);

export const getUserById = (id) => {
  const user = mockData.users.find(user => user.id === Number(id));
  return simulateDelay(user || null);
};

// Enrollments API
export const getEnrollments = () => simulateDelay(mockData.enrollments);

export const getEnrollmentsForUser = (userId) => {
  const userEnrollments = mockData.enrollments.filter(
    enrollment => enrollment.userId === Number(userId)
  );
  return simulateDelay(userEnrollments);
};

export const getEnrollmentsForCourse = (courseId) => {
  const courseEnrollments = mockData.enrollments.filter(
    enrollment => enrollment.courseId === courseId
  );
  return simulateDelay(courseEnrollments);
}; 