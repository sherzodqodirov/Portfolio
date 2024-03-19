import Link from "next/link";

function NavBar() {
    return (
        <div className='nav_bar'>
            <ul className={'nav_item'}>
                <Link href={"/"}><li>home</li></Link>
                <Link href={"/server"}><li>server component</li></Link>
                <Link href={"/client"}><li>client component</li></Link>
                <Link href={"/about"}><li>about</li></Link>
            </ul>
        </div>
    );
}

export default NavBar;