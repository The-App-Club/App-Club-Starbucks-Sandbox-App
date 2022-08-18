import {css, cx} from '@emotion/css';

import {FiTwitter} from 'react-icons/fi';
import {FaFacebookF} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';
import {ImPinterest2} from 'react-icons/im';
import {RiAccountCircleLine} from 'react-icons/ri';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {MdOutlineLocalPolice} from 'react-icons/md';
import {GiChestnutLeaf} from 'react-icons/gi';
import {AiOutlineCopyright} from 'react-icons/ai';
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';
const Footer = () => {
  return (
    <footer
      className={cx(
        css``,
        `text-xl flex justify-center flex-col items-center gap-4`,
        `border-t-2`,
        `pt-2 pb-2`
      )}
    >
      <Link to={'/'} className={`flex items-center gap-2 `}>
        <img src={logo} alt={'logo'} className={`w-10`} />
        <h2 className="text-xl">Make YourSelf</h2>
      </Link>
      <ul className="flex items-start pb-2">
        <li className="flex items-center gap-1 hover:bg-gray-100 w-full hover:cursor-pointer p-2">
          <RiAccountCircleLine size={32} />
          <h2>MemberShip</h2>
        </li>
        <li className="flex items-center gap-1 hover:bg-gray-100 w-full hover:cursor-pointer p-2">
          <AiOutlineQuestionCircle size={32} />
          <h2>QA</h2>
        </li>
        <li className="flex items-center gap-1 hover:bg-gray-100 w-full hover:cursor-pointer p-2">
          <MdOutlineLocalPolice size={32} />
          <h2>Polycy</h2>
        </li>
        <li className="flex items-center gap-1 hover:bg-gray-100 w-full hover:cursor-pointer p-2">
          <GiChestnutLeaf size={32} />
          <h2>Allergen</h2>
        </li>
      </ul>
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-1">
          <FiTwitter
            size={24}
            className={'hover:cursor-pointer hover:text-blue-400'}
          />
          <FaFacebookF
            size={24}
            className={'hover:cursor-pointer hover:text-blue-900'}
          />
          <FaInstagram
            size={24}
            className={'hover:cursor-pointer hover:text-pink-500'}
          />
          <ImPinterest2
            size={24}
            className={'hover:cursor-pointer hover:text-red-500'}
          />
        </div>
        <div className="flex items-center">
          <AiOutlineCopyright size={24} />
          <span>Make YourSelf</span>
        </div>
      </div>
    </footer>
  );
};

export {Footer};
