import React, { useState, useEffect } from 'react';
import { getCourses, getLeaderboard } from '../services/ApiService';

export default function DiagnosticTest() {
  const [courses, setCourses] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        console.log('Loading diagnostic data...');
        setLoading(true);

        const coursesData = await getCourses();
        console.log('Courses data:', coursesData);
        setCourses(coursesData || []);

        const leaderboardData = await getLeaderboard();
        console.log('Leaderboard data:', leaderboardData);
        setLeaderboard(leaderboardData || []);
      } catch (err) {
        console.error('Error loading diagnostic data:', err);
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    };
    
    loadData();
  }, []);

  return (
    <div className="p-8 bg-white">
      <h1 className="text-3xl font-bold mb-4 text-blue-700">Diagnostic Test</h1>
      
      {loading && (
        <div className="text-blue-500 mb-4">Loading data...</div>
      )}
      
      {error && (
        <div className="text-red-500 mb-4">
          Error loading data: {error}
        </div>
      )}
      
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2 text-blue-600">Courses Data:</h2>
        {courses.length > 0 ? (
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
            {JSON.stringify(courses, null, 2)}
          </pre>
        ) : (
          <div className="text-red-500">No courses data available</div>
        )}
      </div>
      
      <div>
        <h2 className="text-xl font-bold mb-2 text-blue-600">Leaderboard Data:</h2>
        {leaderboard.length > 0 ? (
          <pre className="bg-gray-100 p-4 rounded overflow-auto max-h-60">
            {JSON.stringify(leaderboard, null, 2)}
          </pre>
        ) : (
          <div className="text-red-500">No leaderboard data available</div>
        )}
      </div>
    </div>
  );
} 