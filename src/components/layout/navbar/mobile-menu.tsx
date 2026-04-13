'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';

export function MobileMenu({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <button
                    className="md:hidden p-2 rounded-md hover:bg-accent transition-colors"
                    aria-label="Abrir menú"
                >
                    <Menu size={22} />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 flex flex-col">
                <SheetHeader className="border-b pb-4">
                    <SheetTitle asChild>
                        <Link href="/" className="inline-block">
                            <Image
                                src="https://mmcb.b-cdn.net/media/attachments/d/1/0/2/566d85f3e0059f4dd6e66a20e5336047fc3f69e391cb0c50ee05d483d7a9/logo.avif"
                                alt="Claro Laboratorio"
                                width={160}
                                height={80}
                                className="h-8 w-auto dark:invert"
                            />
                        </Link>
                    </SheetTitle>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>
                <div className="border-t pt-4 mt-auto">
                    <a
                        href="/page/validar-autenticidad"
                        className="flex items-center gap-2 bg-sky-500 dark:bg-sky-900 text-white px-4 py-2 rounded-md text-sm font-medium w-full justify-center"
                    >
                        <Phone size={14} />
                        Contáctanos
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    );
}
