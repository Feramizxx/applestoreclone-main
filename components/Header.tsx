import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectBasketItems } from "../redux/basketSlice";
// import { signIn, signOut, useSession } from "next-auth/react";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  ShoppingBagIcon,
  HeartIcon,
  UserIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

function Header() {
  const items = useSelector(selectBasketItems);
  // const { data: session } = useSession()

  return (
    <header className="sticky flex w-full top-0 items-center justify-between bg-[#E7ECEE] p-4 z-40">
      <div className="flex items-center justify-center md:w-1/5">
        <Link href="/">
          <div className="relative h-10 w-5 opacity-75 transition hover:opacity-100 cursor-pointer">
            <Image
              src="https://rb.gy/vsvv2o"
              layout="fill"
              alt="image"
              objectFit="contain"
            />
          </div>
        </Link>
      </div>

      <div className="hidden flex-1 items-center justify-center space-x-5 md:flex">
        <a className="headerLink">Products</a>
        <a className="headerLink">Explore</a>
        <a className="headerLink">Support</a>
        <a className="headerLink">Businnes</a>
      </div>

      <div className="flex  items-center justify-center gap-x-5 md:w-1/5">
        <SearchIcon className="headerIcon" />
        <Link href="/checkout">
          <div className="relative cursor-pointer">
            {items.length > 0 && (
              <span className="absolute w-4 h-4 -right-1 -top-1 z-50 flex items-center justify-center rounded-full bg-gradient-to-r text-white text-[10px] from-pink-500 to-violet-500">
                {items.length}
              </span>
            )}

            <ShoppingBagIcon className="headerIcon" />
          </div>
        </Link>

        <UserIcon className="headerIcon" />
      </div>
    </header>
  );
}
export default Header;
