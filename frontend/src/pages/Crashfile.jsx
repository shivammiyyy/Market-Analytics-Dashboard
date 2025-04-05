import React from 'react';
import { CrashData } from '../assets/asset';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const Crashfile = () => {
    const { id } = useParams();  
    const crash = CrashData[id];
    
    if (!crash) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 text-2xl font-medium text-red-500">
                Data Not Available
            </div>
        );
    }
    
    return (
        <div className="bg-white min-h-screen font-sans">
            <Navbar />
            <div className="max-w-5xl mx-auto px-8 py-14">
                <h2 className="text-5xl font-extrabold text-blue-700 mb-8 text-center uppercase tracking-wide drop-shadow-md">
                    {crash.name}
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-10">
                    <img className="w-full md:w-1/2 rounded-xl shadow-xl border-4 border-gray-300" src={crash.img} alt={crash.name} />
                    <div className="flex-1 text-xl text-gray-800 leading-relaxed font-light">
                        <p className="mb-6 italic">{crash.pOne}</p>
                        <p className="mb-6 font-semibold">{crash.pTwo}</p>
                    </div>
                </div>
                <p className="mt-8 text-xl text-gray-900 font-medium leading-loose border-t pt-6">
                    {crash.pThree}
                </p>
            </div>
            <Footer />
        </div>
    );
};
