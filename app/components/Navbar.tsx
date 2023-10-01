import Link from "next/link"

type Props = {}

export default function Navbar({}: Props) {
    return (
        <nav className="bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
            <div className="prose prose-xl mx-auto flex justfy-between flex-col sm:flex-row">
                <Link href={"/"} className="text-white/90 no-underline hover:text-white">
                    monkey_K1n9
                </Link>
            </div>
        </nav>
    )
}