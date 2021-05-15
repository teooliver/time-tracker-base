import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import TaskProvider from '../src/context/TaskContext';

const queryClient = new QueryClient();

const ProvidersDecorator = ({ children }) => (
  <QueryClientProvider client={queryClient}>
    <TaskProvider>
      <BrowserRouter>{children}</BrowserRouter>
    </TaskProvider>
  </QueryClientProvider>
);

export default ProvidersDecorator;
