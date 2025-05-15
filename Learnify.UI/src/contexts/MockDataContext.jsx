import React, { createContext, useContext } from 'react';
import { API_MODE, CURRENT_API_MODE } from '../services/ApiService';

// Create context
const MockDataContext = createContext();

// Provider component
export const MockDataProvider = ({ children }) => {
  const isMockData = CURRENT_API_MODE === API_MODE.MOCK;
  const isRealWithFallback = CURRENT_API_MODE === API_MODE.REAL_WITH_MOCK_FALLBACK;
  
  return (
    <MockDataContext.Provider value={{ 
      isMockData, 
      isRealWithFallback, 
      apiMode: CURRENT_API_MODE 
    }}>
      {children}
    </MockDataContext.Provider>
  );
};

// Custom hooks
export const useMockDataContext = () => useContext(MockDataContext);

// Helper functions
export const useMockData = () => {
  try {
    const context = useContext(MockDataContext);
    return context?.isMockData || false;
  } catch (error) {
    // Fallback if context is not available
    return false;
  }
};

export const useApiMode = () => {
  const context = useContext(MockDataContext);
  return context?.apiMode || API_MODE.REAL;
}; 