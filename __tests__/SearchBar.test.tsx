import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '@/app/components/SearchBar';
import { QueryClient, QueryClientProvider } from 'react-query';
import '@testing-library/jest-dom';

describe('SearchBar component', () => {
    it('page displays an error message when an empty search term is submitted', () => {
        const setTrackList = jest.fn();
        const queryClient = new QueryClient();
        render(
            <QueryClientProvider client={queryClient}>
                <SearchBar token='' setTrackList={setTrackList} />
            </QueryClientProvider>
        );

        const input = screen.getByPlaceholderText('Search...');
        const form = screen.getByTestId('searchForm');

        fireEvent.change(input, { target: { value: '' } });
        fireEvent.submit(form);

        expect(screen.getByText('Please enter a valid search term.')).toBeInTheDocument();
    });
});