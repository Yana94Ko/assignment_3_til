import Link from "next/link";
import Image from "next/image";
import { FaChartLine } from "react-icons/fa";
import { TbClockExclamation } from "react-icons/tb";
import HeaderAuthButtons from "./_components/HeaderAuthButtons";
import HeaderSelect from "./_components/HeaderSelectBox";

function Header() {
  return (
    <header className="h-20 border-b flex-row items-center left-100 right-10">
      <div className="header-top flex place-content-between w-full">
        <Link href="/">
          <Image
            src="/tiltil_black.png"
            alt="띨띨로고"
            width={100}
            height={100}
          />
        </Link>
        <HeaderAuthButtons />
      </div>
      <div className="header-bottom flex place-content-between">
        <nav>
          <ul className="flex">
            <li>
              <Link href="/til/trending" className="flex gap-x-1 leading-4">
                <FaChartLine className="leading-4" />
                트랜딩
              </Link>
            </li>
            <li>
              <Link href="/til/latest" className="flex gap-x-1 leading-4">
                <TbClockExclamation className="leading-4" />
                최신
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <HeaderSelect />
        </div>
      </div>
    </header>
  );
}

export default Header;
