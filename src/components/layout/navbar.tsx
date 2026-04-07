import Image from "next/image";
import Link from "next/link";
import {NavbarCollections} from '@/components/layout/navbar/navbar-collections';
import {NavbarCollectionsMobile} from '@/components/layout/navbar/navbar-collections-mobile';
import {MobileMenu} from '@/components/layout/navbar/mobile-menu';
import {NavbarCart} from '@/components/layout/navbar/navbar-cart';
import {NavbarUser} from '@/components/layout/navbar/navbar-user';
import {ThemeSwitcher} from '@/components/layout/navbar/theme-switcher';
import {Suspense} from "react";
import {SearchInput} from '@/components/layout/search-input';
import {SearchInputSkeleton} from '@/components/shared/skeletons/search-input-skeleton';
import { Button } from "../ui/button";
import { Phone, ShieldCheck } from "lucide-react";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-8">
                        <Suspense>
                            <MobileMenu>
                                <NavbarCollectionsMobile />
                            </MobileMenu>
                        </Suspense>
                        <Link href="/" className="text-xl font-bold">
                            <Image src="https://mmcb.b-cdn.net/media/attachments/d/1/0/2/566d85f3e0059f4dd6e66a20e5336047fc3f69e391cb0c50ee05d483d7a9/logo.avif" alt="Claro Laboratorio" width={200} height={100} className="h-10 w-auto dark:invert" />
                        </Link>
                        <nav className="hidden md:flex items-center gap-6">
                            <Suspense>
                                <NavbarCollections/>
                            </Suspense>
                        </nav>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden">
                            <Suspense fallback={<SearchInputSkeleton />}>
                                <SearchInput/>
                            </Suspense>
                        </div>
                        <a href="/page/validar-autenticidad" className="hidden md:flex bg-sky-500 px-4 py-1 dark:bg-sky-900 rounded-md text-white items-center">
                            <Phone size={14} className="mr-2"/>
                            Contactanos
                        </a>
                        <ThemeSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
}