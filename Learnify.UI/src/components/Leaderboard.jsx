import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
import { getLeaderboard } from '../services/ApiService';

export default function Leaderboard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboardData = async () => {
      try {
        setLoading(true);
        const data = await getLeaderboard();
        setLeaderboardData(data);
      } catch (error) {
        console.error('Error fetching leaderboard data:', error);
        setError('Failed to load leaderboard. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboardData();
  }, []);

  const renderRank = (rank) => {
    if (rank <= 3) {
      return (
        <div className="flex items-center justify-center relative">
          <span className="text-yellow-400 text-5xl">&#9733;</span>
          <span className="absolute text-indigo-900 font-bold text-xl">{rank}</span>
        </div>
      );
    }
    return <span className="text-indigo-900 font-bold text-xl">{rank}</span>;
  };

  return (
    <div className="min-h-screen bg-white font-inter">
      <header className="p-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={Logo} alt="Learnify Logo" className="h-12" />
          <h1 className="text-blue-600 text-3xl font-bold ml-2">Learnify</h1>
        </div>
        <div className="text-blue-600 text-2xl font-semibold">
          Hello, User!
        </div>
      </header>

      <nav className="flex gap-6 px-12 mt-6">
        <Link to="/" className="text-gray-800 hover:text-blue-600 text-xl">Home</Link>
        <Link to="/courses" className="text-gray-800 hover:text-blue-600 text-xl">Courses</Link>
        <Link to="/leaderboard" className="text-indigo-900 border-b-2 border-indigo-900 font-medium text-xl">Leaderboard</Link>
      </nav>

      <main className="px-12 py-8">
        <h1 className="text-5xl font-bold text-indigo-900 mb-8">Leaderboard</h1>
        
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            <p className="ml-4 text-blue-800 text-xl">Loading leaderboard data...</p>
          </div>
        )}
        
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg my-4">
            <p className="text-center">{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="overflow-hidden rounded-lg border border-blue-200">
            <div className="grid grid-cols-3 bg-blue-100 p-4 text-purple-900 font-bold text-2xl">
              <div className="ml-8">Rank</div>
              <div>Name</div>
              <div className="text-right mr-8">Courses finished</div>
            </div>

            {leaderboardData.map((user) => (
              <div 
                key={user.id} 
                className="grid grid-cols-3 bg-blue-50 p-4 border-t border-blue-200 items-center text-xl"
              >
                <div className="flex justify-center ml-8">
                  {renderRank(user.rank)}
                </div>
                <div className="text-purple-900 font-semibold">{user.student.name}</div>
                <div className="text-right text-purple-900 font-semibold mr-8">{user.coursesFinished}</div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
} 