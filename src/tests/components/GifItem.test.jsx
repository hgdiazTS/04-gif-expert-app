import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';


describe('Pruebas en <GifItem/>', () => {
    const title = '';
    const url = '';
    test('debe de mostar la imagen con el url y el ALT indicado', () => {
        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    });


    test('debe de mostar la imagen con el url y el ALT indicado', () => {

        render(<GifItem title={title} url={url} />);
        //screen.debug();

        //expect (screen.getByRole('img').src).toBe(url);
        //expect (screen.getByRole('img').alt).toBe(title);

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);

    });


});