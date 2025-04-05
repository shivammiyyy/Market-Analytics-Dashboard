import React from 'react';
import Navbar from '../components/Navbar'
import {Legends} from '../components/Legends' 
import Footer from '../components/Footer';
import { Crash } from '../components/Crash';

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <Legends/>
        <Crash/>
      <Footer />
    </div>
  );
};
