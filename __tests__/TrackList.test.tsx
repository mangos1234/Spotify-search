import { render, screen } from '@testing-library/react';
import TrackList from '@/app/components/TrackList';
import Track from '@/app/types/Track';
import '@testing-library/jest-dom';

const mockTrackList: Track[] = [
    {
        name: 'Track 1',
        album: {
            images: [{ url: 'https://example.com/image1.jpg', height: 30, width: 40 }]
        },
        artists: [
            { name: 'Artist 1', href: '' },
            { name: 'Artist 2', href: '' }
        ]
    },
    {
        name: 'Track 2',
        album: {
            images: [{ url: 'https://example.com/image2.jpg', height: 30, width: 40 }]
        },
        artists: [
            { name: 'Artist 3', href: '' }
        ]
    }
];

test('renders comma between artists if there is more than one', () => {
    render(<TrackList trackList={mockTrackList} />);

    const artistText = screen.getByText((content, element) => {
        return element?.textContent === 'Artist 1, Artist 2';
    });
    expect(artistText).toBeInTheDocument();
});