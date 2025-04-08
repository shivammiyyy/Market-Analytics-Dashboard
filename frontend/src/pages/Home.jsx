import React from 'react';
import {Legends} from '../components/Legends' 
import Footer from '../components/Footer';
import { Crash } from '../components/Crash';

export const Home = () => {
  return (
    <div>
        
        <Legends/>
        <Crash/>
      <Footer />
    </div>
  );
};
