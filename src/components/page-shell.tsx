import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { AuthorSidebar } from "@/components/author-sidebar";

export function PageShell({
  title,
  toc,
  right,
  reserveRight = true,
  hideSidebar = false,
  children,
}: {
  title?: string;
  toc?: React.ReactNode;
  right?: React.ReactNode;
  reserveRight?: boolean;
  hideSidebar?: boolean;
  children: React.ReactNode;
}) {
  const hasRight = Boolean(toc || right);

  return (
    <>
      <SiteHeader />
      <main id="main" role="main">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-10">
          <div className="py-10 lg:flex lg:gap-x-12 lg:py-14">

            {/* ── Left author sidebar ── */}
            {!hideSidebar && (
              <aside
                className="mb-10 flex-shrink-0 lg:mb-0 lg:w-[220px] lg:self-start lg:sticky lg:top-[88px]"
              >
                <AuthorSidebar />
              </aside>
            )}

            {/* ── Content + optional right TOC ── */}
            <div className="min-w-0 flex-1 lg:flex lg:gap-x-10">
              <article className="mm-prose min-w-0 flex-1">
                {title && <h1 className="page-title">{title}</h1>}
                {children}
              </article>

              {(hasRight || reserveRight) && (
                <aside className="mt-10 hidden lg:mt-0 lg:block lg:w-[230px] lg:shrink-0">
                  {hasRight && (
                    <div className="lg:sticky lg:top-[88px]">{toc ?? right}</div>
                  )}
                </aside>
              )}
            </div>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
