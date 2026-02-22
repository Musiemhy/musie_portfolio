'use client'
import { GridMarker } from './GridMarker';
import { LocalTime } from './LocalTime';

const Navbar = () => {
    return (
        <nav className="w-full flex items-center h-fit py-10 font-mono text-lg uppercase tracking-tighter">
            <div className="flex-1 flex items-center px-8 h-full">
                <LocalTime />
            </div>

            <div className="flex-1 flex items-center justify-center h-full">
                <GridMarker />
            </div>

            <div className="flex-1 flex items-center justify-end px-8 h-full">
                <button className="px-6 py-1.5 border border-white rounded-full font-bold tracking-widest hover:bg-white hover:text-black transition-all duration-300">
                    CONTACT NOW
                </button>
            </div>
        </nav>
    );
}

export default Navbar;