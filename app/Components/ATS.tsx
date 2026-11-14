import React from 'react';

const ATS = ({ score, suggestion }: { score: number; suggestion: string[] }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-4">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-900">ATS Score</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${score >= 70 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                    {score}/100
                </span>
            </div>
            <div className="w-full bg-gray-200 h-2.5 rounded-full overflow-hidden">
                <div 
                    className={`h-full rounded-full ${score >= 70 ? 'bg-green-500' : 'bg-amber-500'}`} 
                    style={{ width: `${score}%` }}
                ></div>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <h4 className="font-semibold text-gray-800 text-sm">Suggestions for Improvement:</h4>
                <ul className="list-disc list-inside text-sm text-gray-600 flex flex-col gap-1">
                    {suggestion?.map((tip, index) => (
                        <li key={index}>{tip}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ATS;