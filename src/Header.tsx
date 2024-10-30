import Link from "next/link";

export default function Header() {
    return <div>
        <ul>
            <li>
                <Link href='/'>Home</Link>
            </li>
            <li>
                <Link href='/page/1'>Dynamic page</Link>
            </li>
        </ul>
    </div>

}