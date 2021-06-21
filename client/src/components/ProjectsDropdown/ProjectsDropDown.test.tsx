import React, { useState } from 'react';
import { cleanup, render, fireEvent, waitFor } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';
import ProjectsDropDown from './ProjectsDropDown';
import { ISelectedProject } from '../TimeTracker/StopWatch/Stopwatch';

afterAll(cleanup);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

describe('Test ProjectsDropDown Component', () => {
  test('Render ProjectsDropDown', async () => {
    const Wrapper = () => {
      const [, setSelectedProject] = useState<ISelectedProject>({
        id: '',
        name: '',
        client: '',
        color: '',
      });
      const [, setIsProjectDropwdownOpen] = useState(true);

      return (
        <QueryClientProvider client={queryClient}>
          <ProjectsDropDown
            setIsProjectDropwdownOpen={setIsProjectDropwdownOpen}
            setSelectedProject={setSelectedProject}
          />
          ;
        </QueryClientProvider>
      );
    };

    const { getAllByText, getByTestId, getByText } = render(<Wrapper />);

    const dropdown = getByTestId('projects-dropdown');

    fireEvent.click(dropdown);

    await waitFor(() => {
      expect(getByText('Project Test 1')).toBeInTheDocument();
      expect(getByText('Project Test 2')).toBeInTheDocument();
    });

    expect(getAllByText('No Project')).toBeTruthy();
  });
});
