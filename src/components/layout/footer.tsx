import { getTaxonomies } from '@/lib/swipall/rest-adapter';
import { TaxonomyInterface } from '@/lib/swipall/types/types';
import { cacheLife } from 'next/cache';
import Image from "next/image";
import Link from "next/link";


async function Copyright() {
    'use cache'
    cacheLife('days');

    return (
        <div>
            © 2024 Claro Laboratorio. Todos los derechos reservados.
        </div>
    )
}

async function fetchFooterCollections() {
    try {
        const params = {
            kind: 'family',
            is_visible_on_web: true,
        }
        return await getTaxonomies(params);
    } catch (error) {
        return { results: [], count: 0, next: null, previous: null };
    }

}

export async function Footer() {
    'use cache'
    cacheLife('days');
    const collections = { results: [] } as any;

    return (
        <footer className="mt-auto bg-muted py-8">
            <div className="container mx-auto px-4 py-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto mb-10">
                    <div>
                        <h3 className="text-xl font-semibold">Información</h3>
                        <div className="flex flex-col">
                            <a href="page/terminos-y-condiciones" className="text-muted-foreground hover:text-sky-600">
                                Términos y condiciones
                            </a>
                            <a href="page/acerca-de-claro-laboratorio" className="text-muted-foreground hover:text-sky-600">
                                Acerca de nosotros
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold">Contacto</h3>
                        <div className="flex flex-col">
                            <a href="mailto:contacto@clarolaboratorio.com.mx" className="text-muted-foreground hover:text-sky-600">
                                contacto@clarolaboratorio.com.mx
                            </a>
                            <a href="tel:2281800598" className="text-muted-foreground hover:text-sky-600">
                                228-180-0598
                            </a>
                        </div>
                    </div>

                    <div>
                        <Link href="/" className="mb-4 font-bold">
                            <Image src="https://mmcb.b-cdn.net/media/attachments/d/1/0/2/566d85f3e0059f4dd6e66a20e5336047fc3f69e391cb0c50ee05d483d7a9/logo.avif" alt="Claro Laboratorio" width={200} height={100} className="h-10 w-auto dark:invert" />
                        </Link>
                        <div className="flex flex-col">
                            <p className="text-muted-foreground font-medium text-md">Fomentando la salud, optimizando la producción.</p>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div
                    className="border-border border-t pt-8 text-center flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
                    <Copyright />
                    <div className="flex items-center gap-2 hidden">
                        <span>Powered by</span>
                        <a
                            href="https://swipall.io"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-foreground transition-colors"
                        >
                            <Image src="https://cloud.swipall.io/assets/images/logo/swipall.svg" alt="Swipall" width={40} height={27} className="h-6 w-auto dark:invert" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
