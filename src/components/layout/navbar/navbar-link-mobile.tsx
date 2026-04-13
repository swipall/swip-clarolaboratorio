'use client';

import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { ComponentProps } from 'react';
import { cn } from '@/lib/utils';

export function NavbarLinkMobile({ href, className, children, ...rest }: ComponentProps<typeof Link>) {
    const selectedLayoutSegment = useSelectedLayoutSegment();
    const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            aria-current={isActive ? 'page' : undefined}
            className={cn(
                'px-4 py-3 rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                isActive && 'bg-accent text-accent-foreground',
                className
            )}
            {...rest}
        >
            {children}
        </Link>
    );
}
