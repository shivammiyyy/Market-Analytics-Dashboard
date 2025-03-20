import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import socket from '../services/socket';
import api from '../services/api';
import Chart from './Chart';
import { Container, Typography, Button } from '@mui/material';

function Dashboard() {
  const { token, logout } = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    // Set token for Socket.IO
    socket.auth.token = token;
    socket.connect();

    // Fetch initial data
    const fetchInitialData = async () => {
      try {
        const response = await api.get('/api/data/latest', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData([response.data]);
      } catch (error) {
        console.error('Error fetching initial data:', error);
      }
    };

    fetchInitialData();

    // Listen for real-time updates
    socket.on('new_data', (newData) => {
      setData((prev) => [...prev.slice(-19), newData]); // Keep last 20 points
    });

    return () => {
      socket.off('new_data');
      socket.disconnect();
    };
  }, [token, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Market Data Dashboard</Typography>
      <Button variant="outlined" onClick={handleLogout} sx={{ mb: 2 }}>Logout</Button>
      <Chart data={data} />
    </Container>
  );
}

export default Dashboard;