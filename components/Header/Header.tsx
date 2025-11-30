import Image from "next/image"
import Link from "next/link"
import NavItems from "../NavItems/NavItems"
import UserDropdown from "../UserDropdown/UserDropdown"

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href={"/"}>
          <Image src={"/assets/icons/logo.svg"} loading="eager" alt="Signlaist Logo" width={140} height={32} className="h-8 w-auto cursor-pointer" />
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropdown user={user}/>
      </div>
    </header>
  )
}

export default Header