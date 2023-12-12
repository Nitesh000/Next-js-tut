import { getPostBySlug } from "@/lib/posts";

const Page = async ({ params }) => {
  const { slug } = params;

  const { content, frontmatter } = await getPostBySlug(slug);

  return (
    <section className="py-24">
      <div className="container">
        {/* Post frontmatter */}
        <header className="p-8 bg-gray-100 rounded">
          <h1 className="font-serif text-3xl">{frontmatter.title}</h1>
          <p className="text-sm font-light leading-3 uppercase">
            {frontmatter.author}
          </p>
        </header>

        {/* Post content */}
        <main className="mt-12 prose">{content}</main>
      </div>
    </section>
  );
};

export default Page;
