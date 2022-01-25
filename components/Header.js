import Link from "next/link";

const Header = () => {
    return ( 
        <div className="flex mx-8 justify-center">
    <li className="list-none my-8">
    <Link href="/" as={`/`}>
        <a className="rounded-md px-4 py-2 mr-4  text-gray-300 hover:opacity-70">Home</a>
    </Link>
    </li>
    <li className="list-none my-8">
        <a href="https://github.com/parnexcodes/tmdb-movie-website-svelte" className="rounded-md px-4 py-2 mr-4  text-gray-300 hover:opacity-70">GitHub</a>
    </li>
    <li className="list-none my-8">
    <Link href="/api" as={`/api`}>
        <a className="rounded-md px-4 py-2 mr-4  text-gray-300 hover:opacity-70">API</a>
    </Link>
    </li>
    <li className="list-none my-8">
        <a href="https://discord.gg/Ch54KZHsUF" className="rounded-md px-4 py-2 mr-4  text-gray-300 hover:opacity-70">Contact</a>
    </li>
</div>
     );
}
 
export default Header;