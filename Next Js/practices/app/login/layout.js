'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const Layout = ({ children }) => {
    const pathName = usePathname();
    return (
        <>
            {
                pathName !== '/login/loginAdmin' ?
                    <div className="flex justify-between items-center text-white px-12 bg-[rgba(67,63,63,0.23)] ">

                        <div className="logo">
                            Loing Page
                        </div>
                        <div className="links ">
                            <ul className="list-none flex">
                                <li className="p-2">
                                    <Link href='/login/loginUsers'>
                                        Users
                                    </Link>
                                </li>
                                <li className="p-2">
                                    <Link href='/login/loginAdmin'>
                                        Admin
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    : null
            }
            {children}
        </>
    )
}
export default Layout
