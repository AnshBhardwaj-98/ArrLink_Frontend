import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { blogCategoryBySlug, formatPostDate as formatDate, type PostMeta } from "@/content/blog";

const BlogCard = ({ post, featured = false }: { post: PostMeta; featured?: boolean }) => {
  const category = blogCategoryBySlug(post.category);
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-foreground/10 bg-surface-container/40 p-7 md:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/25 ${
        featured ? "md:col-span-2 lg:p-10" : ""
      }`}
    >
      <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[10px] font-medium uppercase tracking-[0.25em] text-foreground/45">
        {category && <span className="text-primary">{category.name}</span>}
        <span aria-hidden>·</span>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
        <span aria-hidden>·</span>
        <span>{post.readingMinutes} min read</span>
        {post.draft && <span className="rounded bg-primary-container/20 px-2 py-0.5 text-primary-container">Draft</span>}
      </div>
      <h2
        className={`mb-4 font-display font-bold tracking-tight text-foreground text-balance ${
          featured ? "text-2xl md:text-4xl" : "text-xl md:text-2xl"
        }`}
      >
        {/* The stretched link makes the whole card clickable while keeping one link per card. */}
        <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0 after:rounded-2xl">
          {post.title}
        </Link>
      </h2>
      <p className={`mb-6 text-foreground/60 leading-relaxed ${featured ? "md:text-lg max-w-3xl" : "text-sm"}`}>{post.description}</p>
      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.2em] text-foreground/70 group-hover:text-foreground">
        Read article
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </span>
    </article>
  );
};

export default BlogCard;
