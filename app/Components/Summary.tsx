import React from 'react';

const Summary = ({ feedback }: { feedback: any }) => {
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col gap-3">
            <h3 className="text-xl font-bold text-gray-900">Summary</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
                {feedback?.summary || feedback?.Overview || "No summary provided."}
            </p>
        </div>
    );
};

export default Summary;