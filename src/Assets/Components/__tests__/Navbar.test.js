import { render, screen} from '@testing-library/react';
import Navbar from '../Navbar/Navbar';

describe('Testing Component Navbar',()=>{
    //
    it('Make sure main menu show',()=>{
        render(<Navbar />); 
            // Gunakan getAllByText untuk menangani beberapa elemen dengan teks "Home"
            const homeLinks = screen.getAllByText(/Home/i);
            expect(homeLinks.length).toBeGreaterThan(0);
    })
})