import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { CalendarMonth } from '@mui/icons-material';

export default function RightPanel() {
    const activityWidths = [60, 90, 40, 80, 100, 70, 50];
    const [date, setDate] = useState(new Date());

    return (
        <div className="w-1/4 bg-blue-50 p-6 space-y-6">

            <h2 className="text-2xl font-bold text-blue-700 text-right">Hello, User!</h2>


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
                            style={{ width: `${activityWidths[i]}px` }}
                        ></div>
                    </div>
                ))}
            </div>
        </div>
    );
}
