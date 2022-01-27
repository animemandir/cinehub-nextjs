import Link from "next/link";

const Header = () => {
    return ( 
    <div className="flex mx-8 justify-center">
    <li className="list-none my-8 pr-2">
    <Link href="/" as={`/`}>
        <a className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">Home</a>
    </Link>
    </li>
    <li className="list-none my-8 pr-2">
    <Link href="/tv" as={`/tv`}>
        <a className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">TV</a>
    </Link>
    </li>
    <li className="list-none my-8 pr-2">
        <a href="https://discord.gg/Ch54KZHsUF" className="rounded-md px-4 py-2 bg-zinc-800 text-gray-300 hover:opacity-70">Contact</a>
    </li>
</div>
     );
}
 
export default Header;