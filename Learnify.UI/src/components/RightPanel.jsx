import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarMonth } from '@mui/icons-material';
import { AuthService } from '../services/AuthService';

export default function RightPanel() {
    const [date, setDate] = useState(new Date());
    const [user, setUser] = useState(null);
    const [activityData, setActivityData] = useState([0, 0, 0, 0, 0, 0, 0]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadUserData = async () => {
            try {
                setLoading(true);
                const userData = await AuthService.getCurrentUser();
                setUser(userData);
                
                // Here you would typically call an API to get user activity data
                // For now we'll generate random data as an example
                generateRandomActivityData();
            } catch (error) {
                console.error('Error loading user data:', error);
            } finally {
                setLoading(false);
            }
        };
        
        loadUserData();
    }, []);
    
    const generateRandomActivityData = () => {
        // This is just a placeholder for actual API data
        const randomData = Array.from({ length: 7 }, () => 
            Math.floor(Math.random() * 100) + 20
        );
        setActivityData(randomData);
    };

    return (
        <div className="w-1/4 bg-blue-50 p-6 space-y-6">
            <h2 className="text-2xl font-bold text-blue-700 text-right">
                {loading ? 'Loading...' : `Hello, ${user?.email|| 'User'}!`}
            </h2>

            <div className="bg-white rounded-2xl shadow-lg p-4">
                <Calendar
                    onChange={setDate}
                    value={date}
                    className="react-calendar border-none"
                    tileClassName="react-calendar-tile"
                />
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-4">
                <h3 className="text-md font-semibold text-gray-800 mb-3">Activity</h3>
                {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, i) => (
                    <div key={i} className="flex items-center gap-3 mb-2">
                        <span className="w-10 text-sm text-gray-600">{day}</span>
                        <div
                            className="bg-blue-500 h-2 rounded-full transition-all ease-out duration-300"
                            style={{ width: `${activityData[i]}px` }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
