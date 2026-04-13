import { getPosts } from '@/lib/swipall/rest-adapter';
import { CmsPost } from '@/lib/swipall/types/types';
import { cacheLife } from 'next/cache';
import { NavbarLinkMobile } from './navbar-link-mobile';

export async function NavbarCollectionsMobile() {
    "use cache";
    cacheLife('days');
    const params = { parent__slug: 'menu-principal', ordering: 'ordering' }
    const taxonomies = await getPosts(params);
    const redirectUrl = (collection: CmsPost) => {
        if (collection.link) return collection.link;
        return `/collection/${collection.slug}`;
    }
    return (
        <nav className="flex flex-col gap-1 mt-4">
            {taxonomies.results.map((collection: CmsPost) => (
                <NavbarLinkMobile key={collection.slug} href={redirectUrl(collection)}>
                    {collection.title}
                </NavbarLinkMobile>
            ))}
        </nav>
    );
}
