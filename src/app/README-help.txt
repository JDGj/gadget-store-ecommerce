<div>
    <ul className="flex flex-row space-x-3">
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiSearch className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiShoppingCart className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiDark className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062] border-[1px] border-[#363062] rounded-full px-7 py-3">
            LOGIN
        </Link>
        </li>
    </ul>
</div>

<div className={`md:hidden ${isMenuOpen ? "flex justify-center text-center" : "hidden"} bg-white shadow-md text-white p-4`}>
    <ul className="flex flex-row space-x-3">
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiSearch className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiShoppingCart className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiDark className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062] border-[1px] border-[#363062] rounded-full px-7 py-3">
            LOGIN
        </Link>
        </li>
    </ul>
</div>

<div className={`md:hidden ${isMenuOpen ? "flex" : "hidden"} bg-black text-white p-4`}>
    <ul className="flex flex-col space-y-3">
        {links.map((link) => (
        <li
            key={link.path}
            className={pathname === link.path ? "active-link-navbar" : ""}
        >
            <Link href={link.path}>
            <div className="text-[#363062] py-1 px-2 block">{link.name}</div>
            </Link>
        </li>
        ))}
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiSearch className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiShoppingCart className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062]">
            <CiDark className="w-5 h-5" />
        </Link>
        </li>
        <li>
        <Link href={"/"} className="text-[#363062] border-[1px] border-[#363062] rounded-full px-7 py-3">
            LOGIN
        </Link>
        </li>
    </ul>
</div>