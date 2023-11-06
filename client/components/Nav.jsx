import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from '../constants';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Image from "next/image";

const Nav = () => {
  return (
    <header>
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <Image
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Image 
            src={hamburger} 
            alt='hamburger icon' 
            width={25} height={25} 
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
