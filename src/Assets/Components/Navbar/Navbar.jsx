
import icon from '../../images/icons.svg'
import hamburger_non_active from "../../images/hamburger-non-active.svg"
import hamburger_active from "../../images/hamburger-active.svg"
import home_icon from "../../images/home-icon.svg"
import { useState } from 'react';
import Button from '../button/Button';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false)
    /**
     * const [toggleNavbar, setToggleNavbar] = useState(false) ini disebut dengan usestage yaitu react hook  yang memungkinkan Anda menambahkan variabel status ke komponen Anda. SOURCE : https://react.dev/reference/react/useState
     * 
     *Penjelasannya
     1. Baris kode ini adalah sebuah state declaration dalam react
     2. useState(false) mendeklarasikan sebuah state variable bernama toggleNavbar yang nilai awalnya adalah false
     3. State di sini digunakan untuk menentukan apakah navbar aktif (tampil) atau tidak aktif (disembunyikan).
     */
    return (
        <div>
            <nav>
                <div className='container mx-auto px-4 sm:px-16 lg:py-0 flex justify-between items-center py-[22px] sm:py-8 font-medium '>
                    {/* // icon */}
                    <div className="order-1 sm:order-2">
                        <img src={icon} alt="icon-header" />
                    </div>
                    {/* //hamburger icon
                        * Pada properti onClick, ketika pengguna mengklik div ini, fungsi setToggleNavbar akan dipanggil.

                        setToggleNavbar(toggleNavbar ? false : true) adalah kondisi yang mengubah nilai toggleNavbar.artinya
                        * Jika toggleNavbar bernilai true, ia akan diubah menjadi false (artinya navbar disembunyikan).
                        * Jika toggleNavbar bernilai false, ia akan diubah menjadi true (artinya navbar ditampilkan)
                     */}
                    <div className='cursor-pointer lg:hidden' onClick={()=>setToggleNavbar(toggleNavbar? false : true)}>
                        {/*  */}
                        <img src={toggleNavbar? hamburger_active:hamburger_non_active} alt="toogle" />
                    </div>


                    <div className="hidden lg:block lg:order-2">
                        <ul className='flex gap-6 py-[10px] px-[18px] border-2 border-black rounded-full'> 
                            <li className='px-4 py-2 cursor-pointer bg-black text-white rounded-full flex gap-[2px]'> <img src={home_icon} alt="" />Home</li>
                            <li className='px-4 py-2 cursor-pointer'>About</li>
                            <li className='px-4 py-2 cursor-pointer'>Contact</li>
                            <li className='px-4 py-2 cursor-pointer'>Service</li>
                        </ul>
                    </div>
                    <div className="gap-3 hidden sm:block order-3">
                        {/* Before create the Button componests */}
                        {/* <button className='py-[10px] px-[10px] rounded-full mr-4'>Sign In</button>
                        <button className='py-[10px] px-[10px] border-2 border-black rounded-full'>Sign Up</button> */}
                        {/* After create the Button componests */}
                        <Button text="Sign in"></Button>
                        <Button text="Sign in" border="border-2 border-black rounded-full"></Button>
                    </div>
                </div>

                {/* menu navigation */}
                <div className={`${toggleNavbar? 'block':'hidden'} lg:hidden`} >
                    <ul className='text-lg'>
                        <li className='px-4 py-2 sm:px-16 border-b-2 border-black bg-black text-white'>Home</li>
                        <li className='px-4 py-2 sm:px-16 border-b-2 border-black bg-white text-black' >About</li>
                        <li className='px-4 py-2 sm:px-16 border-b-2 border-black bg-white text-black' >Contact</li>
                        <li className='px-4 py-2 sm:px-16 border-b-2 border-black bg-white text-black'>Service</li>
                        <li className='px-4 py-2 sm:px-16 sm:hidden border-b-2 border-black bg-white text-black'>Sign in</li>
                        <li className='px-4 py-2 sm:px-16 sm:hidden border-b-2 border-black bg-white text-black'>Sign Up</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


/**
 * mengikuti tutorial dari youtube : https://www.youtube.com/watch?v=5sPNwA6zWBo
 * untuk menampilkan web yang responsive di tailwindcss namanya breakpoint prefeix
 * 
 * Point yang  perlu dipelajari yaitu:
 * 1. Usestate
 * 2. Konsep Ternary Operator
 *  
 * 
 * */ 