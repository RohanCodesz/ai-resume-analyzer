import React from 'react';

const Details = ({ feedback }: { feedback: any }) => {
    const categories = [
        { title: 'Tone & Style', data: feedback?.Tone || feedback?.toneAndStyle },
        { title: 'Formatting', data: feedback?.Formatting || feedback?.formatting },
        { title: 'Skills & Keywords', data: feedback?.Skills || feedback?.skills },
        { title: 'Experience & Impact', data: feedback?.Experience || feedback?.experience },
    ];

    const renderContent = (data: any) => {
        if (!data) return null;
        if (typeof data === 'string') return data;
        if (Array.isArray(data)) {
            return (
                <ul className="list-disc list-inside flex flex-col gap-1">
                    {data.map((item, idx) => (
                        <li key={idx}>
                            {typeof item === 'string' ? item : (item?.tip || item?.explanation || JSON.stringify(item))}
                        </li>
                    ))}
                </ul>
            );
        }
        if (typeof data === 'object') {
            return (
                <div className="flex flex-col gap-1">
                    {Object.entries(data).map(([key, val], idx) => (
                        <p key={idx}>
                            <strong className="capitalize">{key}: </strong> 
                            {typeof val === 'object' ? JSON.stringify(val) : String(val)}
                        </p>
                    ))}
                </div>
            );
        }
        return String(data);
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-gray-900">Detailed Feedback</h3>
            {categories.map((cat, idx) => (
                cat.data && (
                    <div key={idx} className="flex flex-col gap-2 border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <h4 className="font-semibold text-gray-800">{cat.title}</h4>
                        <div className="text-sm text-gray-600 leading-relaxed">
                            {renderContent(cat.data)}
                        </div>
                    </div>
                )
            ))}
        </div>
    );
};

export default Details;