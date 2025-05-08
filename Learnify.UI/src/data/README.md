# Learnify Mock Data System

This directory contains the mock data used for development and testing of the Learnify application.

## Overview

The `mockData.json` file contains a centralized collection of all mock data used throughout the application. It simulates what would be returned from various API endpoints in a production environment.

## Structure

The mock data is organized by resource type:

- **courses**: Collection of course objects with details like title, description, and materials
- **leaderboard**: User ranking data based on completed courses
- **users**: User account information
- **categories**: Course categories
- **quizzes**: Quiz data associated with specific courses
- **reviews**: User reviews for courses
- **enrollments**: Records of user enrollments in courses

## Usage

The mock data is accessed through the `MockDataService.js` service, which provides functions that simulate API calls with consistent delays. The application uses the centralized `ApiService.js` to switch between real API calls and mock data.

To use mock data in a component:

```javascript
import { getCourses, getCourseById } from '../services/ApiService';

// The ApiService will automatically use mock data based on configuration
const courses = await getCourses();
const course = await getCourseById('1');
```

## Configuration

The application can be configured to use:

1. **Mock Data Only**: All API calls use mock data
2. **Real APIs Only**: All API calls use the real backend
3. **Real APIs with Mock Fallback**: Try real APIs first, fall back to mock data on failure

To configure this behavior, modify the `CURRENT_API_MODE` in `ApiService.js`.

## Extending

To add new mock data:

1. Add the data to the appropriate section in `mockData.json`
2. Add corresponding methods in `MockDataService.js`
3. Add API handling in `ApiService.js`

## Benefits

- Enables development without a running backend
- Provides consistent test data
- Allows testing of error conditions
- Speeds up development workflow 