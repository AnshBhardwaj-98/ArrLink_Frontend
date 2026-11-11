import { useEffect, useState, type MouseEvent } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd from "@/components/JsonLd";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import BlogCard from "@/components/BlogCard";
import NotFound from "./NotFound";
import {
  blogCategoryBySlug,
  formatPostDate as formatDate,
  loadPostBody,
  postBySlug,
  preloadedBody,
  relatedPosts,
  type PostMeta,
} from "@/content/blog";
import { useSEO } from "@/hooks/use-seo";
import { SITE_URL } from "@/seo/routes";

const BODY_ID = "post-body";

/**
 * The body HTML comes from (1) the server-side registry during prerender, (2) the prerendered
 * DOM on first load, so hydration matches without downloading anything, or (3) a lazy chunk
 * on client-side navigation.
 */
const initialBody = (slug: string): string | null => {
  const ssr = preloadedBody(slug);
  if (ssr !== undefined) return ssr;
  if (typeof document === "undefined") return null;
  const el = document.getElementById(BODY_ID);
  return el?.dataset.slug === slug ? el.innerHTML : null;
};

const BlogPost = () => {
  const { slug = "" } = useParams();
  const post = postBySlug(slug);
  useSEO(post ? `/blog/${slug}` : "/404");
  if (!post) return <NotFound />;
  // Keyed so moving between posts starts with fresh state.
  return <Article key={post.slug} post={post} />;
};

const Article = ({ post }: { post: PostMeta }) => {
  const navigate = useNavigate();
  const [html, setHtml] = useState<string | null>(() => initialBody(post.slug));

  useEffect(() => {
    if (html !== null) return;
    let cancelled = false;
    loadPostBody(post.slug).then((body) => {
      if (!cancelled) setHtml(body ?? "");
    });
    return () => {
      cancelled = true;
    };
  }, [html, post.slug]);

  // Internal links inside the article use client-side navigation instead of a full reload.
  const onBodyClick = (e: MouseEvent<HTMLDivElement>) => {
    const a = (e.target as HTMLElement).closest("a");
    const href = a?.getAttribute("href");
    if (
      !a ||
      !href?.startsWith("/") ||
      a.target ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey ||
      e.button !== 0
    )
      return;
    e.preventDefault();
    navigate(href);
  };

  const url = `${SITE_URL}/blog/${post.slug}`;
  const category = blogCategoryBySlug(post.category);
  const related = relatedPosts(post);

  return (
    <div className="min-h-screen bg-background font-sans">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          headline: post.title,
          description: post.description,
          url,
          mainEntityOfPage: url,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          inLanguage: "en",
          wordCount: post.wordCount,
          keywords: [post.keyword, ...post.tags].join(", "),
          articleSection: category?.name,
          image: "https://www.arrlink.com/images/social-preview.png",
          author:
            post.author === "ArrLink Team"
              ? { "@id": `${SITE_URL}/#organization` }
              : { "@type": "Person", name: post.author },
          publisher: { "@id": `${SITE_URL}/#organization` },
        }}
      />
      <Navbar />
      <main id="main-content">
        <article>
          <header className="relative overflow-hidden px-6 pb-14 pt-36">

            <div className="relative z-10 mx-auto max-w-6xl px-4">
              <div className="max-w-4xl">
                <Breadcrumbs
                  items={[
                    { label: "Blog", to: "/blog" },
                    ...(category
                      ? [
                          {
                            label: category.name,
                            to: `/blog/category/${category.slug}`,
                          },
                        ]
                      : []),
                    { label: post.title, to: `/blog/${post.slug}` },
                  ]}
                />
                <h1 className="mb-6 text-balance font-display text-3xl font-bold leading-[1.08] tracking-tighter text-foreground md:text-5xl lg:text-6xl">
                  {post.title}
                </h1>
                <p className="mb-8 max-w-3xl text-base leading-relaxed text-foreground/65 md:text-xl">
                  {post.description}
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium uppercase tracking-[0.2em] text-foreground/50">
                  <span className="text-foreground/75">{post.author}</span>
                  <span aria-hidden>·</span>
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  {post.updated && post.updated !== post.date && (
                    <>
                      <span aria-hidden>·</span>
                      <span>
                        Updated{" "}
                        <time dateTime={post.updated}>
                          {formatDate(post.updated)}
                        </time>
                      </span>
                    </>
                  )}
                  <span aria-hidden>·</span>
                  <span>{post.readingMinutes} min read</span>
                </div>
              </div>
            </div>
          </header>

          <div className="relative px-6 pb-20">
            <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[minmax(0,1fr)_16rem]">
              <div className="min-w-0 max-w-3xl">
                {html === null ? (
                  <div
                    aria-busy="true"
                    className="min-h-[60vh] animate-pulse space-y-4"
                  >
                    {[80, 95, 70, 90, 60].map((w) => (
                      <div
                        key={w}
                        className="h-4 rounded bg-foreground/[0.06]"
                        style={{ width: `${w}%` }}
                      />
                    ))}
                  </div>
                ) : (
                  <div
                    id={BODY_ID}
                    data-slug={post.slug}
                    className="article-body"
                    onClick={onBodyClick}
                    dangerouslySetInnerHTML={{ __html: html }}
                  />
                )}

                {category && (
                  <aside className="mt-16 rounded-2xl border border-foreground/10 bg-surface-container/50 p-7 md:p-9">
                    <p className="section-marker mb-4">
                      <span className="h-px w-6 bg-foreground/40" />
                      <span>Work with ArrLink</span>
                    </p>
                    <p className="mb-6 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      Planning something like this? We build it.
                    </p>
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Link
                        to="/contact"
                        className="group inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/85"
                      >
                        Book a free strategy call
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </Link>
                      <Link
                        to={category.link.to}
                        className="inline-flex items-center justify-center gap-2 rounded-md border border-foreground/20 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-foreground/50"
                      >
                        {category.link.label}
                      </Link>
                    </div>
                  </aside>
                )}
              </div>

              {post.headings.length > 2 && (
                <nav aria-label="On this page" className="hidden lg:block">
                  <div className="sticky top-28">
                    <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-foreground/45">
                      On this page
                    </p>
                    <ol className="space-y-2.5 border-l border-foreground/10">
                      {post.headings.map((h) => (
                        <li key={h.id}>
                          <a
                            href={`#${h.id}`}
                            className="-ml-px block border-l border-transparent pl-4 text-sm leading-snug text-foreground/55 transition-colors hover:border-foreground/50 hover:text-foreground"
                          >
                            {h.text}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                </nav>
              )}
            </div>
          </div>
        </article>

        {/* Renders the FAQPage structured data from the article's "## FAQ" section. */}
        {post.faqs.length > 0 && <FAQSection faqs={post.faqs} />}

        {related.length > 0 && (
          <section className="relative border-t border-foreground/10 bg-surface-container-low px-6 py-24">
            <div className="mx-auto max-w-7xl px-4">
              <h2 className="mb-10 font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                Keep reading
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {related.map((p) => (
                  <BlogCard key={p.slug} post={p} />
                ))}
              </div>
            </div>
          </section>
        )}

        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
