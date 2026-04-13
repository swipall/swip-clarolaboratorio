import type { CmsPost } from "@/lib/swipall/types/types";

interface HomeHtmlSectionProps {
    post: CmsPost;
}

export function HomeHtmlSection({ post }: HomeHtmlSectionProps) {
    if (!post.body) {
        return null;
    }

    return (
        <section className="py-8">
            <div
                className="container-xl mx-auto prose prose-neutral max-w-none "
                dangerouslySetInnerHTML={{ __html: post.body }}
            />
        </section>
    );
}
