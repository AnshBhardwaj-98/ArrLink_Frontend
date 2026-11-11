import { Link, useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import NotFound from "./NotFound";
import { activeCategories, blogCategoryBySlug, posts, postsInCategory } from "@/content/blog";
import { useSEO } from "@/hooks/use-seo";
import { SITE_URL } from "@/seo/routes";

/** /blog and /blog/category/:category share this page. */
const BlogIndex = () => {
  const { category: categorySlug } = useParams();
  const category = categorySlug ? blogCategoryBySlug(categorySlug) : undefined;
  const list = category ? postsInCategory(category.slug) : posts;
  const missing = categorySlug !== undefined && (!category || list.length === 0);
  const path = category ? `/blog/category/${category.slug}` : "/blog";
  useSEO(missing ? "/404" : path);
  if (missing) return <NotFound />;

  const crumbs: Crumb[] = [{ label: "Blog", to: "/blog" }];
  if (category) crumbs.push({ label: category.name, to: path });
  const [first, ...rest] = list;

  return (
    <div className="min-h-screen bg-background font-sans">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": category ? "CollectionPage" : "Blog",
          "@id": `${SITE_URL}${path}#blog`,
          name: category ? `${category.name} — ArrLink Blog` : "ArrLink Blog",
          url: `${SITE_URL}${path}`,
          publisher: { "@id": `${SITE_URL}/#organization` },
          [category ? "hasPart" : "blogPost"]: list.map((p) => ({
            "@type": "BlogPosting",
            headline: p.title,
            url: `${SITE_URL}/blog/${p.slug}`,
            datePublished: p.date,
          })),
        }}
      />
      <Navbar />
      <main id="main-content">
        <section className="relative overflow-hidden px-6 pb-20 pt-36">

          <div className="relative z-10 mx-auto max-w-7xl px-4">
            <Breadcrumbs items={crumbs} />
            <h1 className="mb-7 max-w-5xl text-balance font-display text-4xl font-bold leading-[1.04] tracking-tighter text-foreground md:text-6xl lg:text-7xl">
              {category ? category.name : "Engineering notes on AI"}{" "}
              <span className="font-serif text-[1.08em] font-normal">{category ? "articles." : "& software."}</span>
            </h1>
            <p className="mb-10 max-w-2xl text-base leading-relaxed text-foreground/60 md:text-xl">
              {category
                ? category.description
                : "Practical guides on AI agents, generative AI, MVPs, custom software, SaaS and manufacturing software — costs, architecture and lessons from the systems we build."}
            </p>

            {activeCategories().length > 1 && (
              <nav aria-label="Blog categories">
                <ul className="flex flex-wrap gap-2.5">
                  <li>
                    <CategoryChip to="/blog" label="All" active={!category} />
                  </li>
                  {activeCategories().map((c) => (
                    <li key={c.slug}>
                      <CategoryChip to={`/blog/category/${c.slug}`} label={c.name} active={category?.slug === c.slug} />
                    </li>
                  ))}
                </ul>
              </nav>
            )}
          </div>
        </section>

        <section className="relative px-6 pb-28">
          <div className="mx-auto max-w-7xl px-4">
            {list.length === 0 ? (
              <p className="text-foreground/60">The first articles are on their way.</p>
            ) : (
              <div className="grid gap-6 md:grid-cols-2">
                {first && <BlogCard post={first} featured />}
                {rest.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            )}
            {category && (
              <p className="mt-12 text-sm text-foreground/55">
                Need help with this?{" "}
                <Link to={category.link.to} className="font-semibold text-foreground underline decoration-foreground/30 underline-offset-4 hover:decoration-foreground">
                  See our {category.link.label.toLowerCase()} services
                </Link>
                .
              </p>
            )}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

const CategoryChip = ({ to, label, active }: { to: string; label: string; active: boolean }) => (
  <Link
    to={to}
    aria-current={active ? "page" : undefined}
    className={`inline-block rounded-md border px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
      active
        ? "border-foreground bg-foreground text-background"
        : "border-foreground/15 text-foreground/65 hover:border-foreground/40 hover:text-foreground"
    }`}
  >
    {label}
  </Link>
);

export default BlogIndex;
