import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import logo from '../assets/azlogo.png';

const Header = () => {
  return (
    <div className="h-[60px] flex items-center bg-[#131921] sticky top-0 z-[1]">
      <img
        className="w-[100px] object-contain mx-[20px] my-[0] mb-[8px]"
        src={logo}
        alt=""
      />
      <div className="flex flex-1 items-center rounded-[24px]">
        <input className="h-[14px] p-[10px] border-none w-full rounded-tl-[5px] rounded-bl-[5px]" type="text" />
        <SearchIcon className="p-[5px] h-[22px] bg-[#ff9900] rounded-tr-[5px] rounded-br-[5px]" />
      </div>
      <div className="flex justify-evenly">
        <div className="text-white flex flex-col ml-[20px] mr-[20px]">
          <span className="text-[10px]">Hello Guest</span>
          <span className="text-[13px] font-extrabold">Sign In</span>
        </div>

        <div className="text-white flex flex-col ml-[20px] mr-[20px]">
          <span className="text-[10px]">Returns</span>
          <span className="text-[13px] font-extrabold">& Orders</span>
        </div>

        <div className="text-white flex flex-col ml-[20px] mr-[20px]">
          <span className="text-[10px]">Your</span>
          <span className="text-[13px] font-extrabold">Prime</span>
        </div>

        <div className="flex justify-evenly text-white">
          <ShoppingBasketIcon />
          <span className="text-[13px] font-extrabold ml-3 mr-3">0</span>
        </div>
      </div>
    </div>
  );
}

export default Header