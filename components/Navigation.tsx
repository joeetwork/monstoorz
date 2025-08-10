"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import logo from "@/lib/assets/logo.png";
import { NAVLINKS } from "@/lib/constants";

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 left-0 z-20 flex w-full items-center justify-between bg-black py-3 px-4">
            <Link href="/">
                <div className="flex items-center gap-2">
                    <Image
                        src={logo}
                        width={50}
                        className="hidden rounded sm:block"
                        alt="Monstoorz Logo"
                    />
                    <h1 className="text-lg font-bold text-yellow-500 sm:text-4xl">
                        Monstoorz
                    </h1>
                </div>
            </Link>

            <div className="flex items-center gap-6">
                {NAVLINKS.map(({ path, label }) => (
                    <Link
                        key={path}
                        href={path}
                        className={`text-xl hover:text-yellow-500 ${
                            pathname === path && "text-yellow-500"
                        }`}
                    >
                        {label}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
