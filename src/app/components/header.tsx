import Link from "next/link";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Header = () => {
    return ( 
        <div className="w-screen h-[13vh] flex justify-around items-center ">
                <SignedIn>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/create">Create</Link>
                    <UserButton/>
                </SignedIn>
        </div>
     );
}
 
export default Header;