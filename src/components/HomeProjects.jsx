const HomeProjects = function () {
  return (
    <section className="w-full bg-white  border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h3 className="text-2xl font-bold text-[#0c1a1d]  mb-2">
              Selected Projects
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Some of my recent work
            </p>
          </div>
          <a
            className="hidden sm:inline-flex items-center text-sm font-bold text-[#0c1a1d]  hover:text-primary transition-colors"
            href="#"
          >
            View all{" "}
            <span className="material-symbols-outlined text-sm ml-1">
              {/* arrow_forward */}
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Project Card 1 --> */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light  transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
              {/* <!-- Using a gradient placeholder as requested to avoid specific imagery issues but describing it clearly --> */}
              <div
                className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-300"
                data-alt="Minimalist dashboard interface mockups floating on a gradient background"
              >
                <span className="material-symbols-outlined text-6xl opacity-20">
                  {/* dashboard */}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-blue-50  px-2 py-1 text-xs font-medium text-blue-700  ring-1 ring-inset ring-blue-700/10">
                  React
                </span>
                <span className="inline-flex items-center rounded-md bg-cyan-50  px-2 py-1 text-xs font-medium text-cyan-700  ring-1 ring-inset ring-cyan-700/10">
                  Tailwind
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#0c1a1d]  mb-2 group-hover:text-primary transition-colors">
                Finance Dashboard
              </h4>
              <p className="flex-1 text-sm text-gray-600 dark:text-gray-400 mb-6">
                A comprehensive financial analytics platform with real-time data
                visualization and dark mode support.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-primary">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm ml-1">
                  {/* arrow_outward */}
                </span>
              </span>
            </div>
          </article>
          {/* <!-- Project Card 2 --> */}
          <article className="group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light  transition-all hover:border-primary/50 hover:shadow-lg hover:-translate-y-1">
            <div className="aspect-video w-full overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
              <div
                className="absolute inset-0 bg-linear-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center text-gray-300"
                data-alt="E-commerce mobile app screens showing product grid and checkout flow"
              >
                <span className="material-symbols-outlined text-6xl opacity-20">
                  {/* shopping_bag */}
                </span>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center rounded-md bg-purple-50  px-2 py-1 text-xs font-medium text-purple-500  ring-1 ring-inset ring-purple-700/10">
                  Next.js
                </span>
                <span className="inline-flex items-center rounded-md bg-green-50  px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 ring-1 ring-inset ring-green-700/10">
                  Node.js
                </span>
              </div>
              <h4 className="text-xl font-bold text-[#0c1a1d]  mb-2 group-hover:text-primary transition-colors">
                E-Commerce Storefront
              </h4>
              <p className="flex-1 text-sm text-gray-600 dark:text-gray-400 mb-6">
                Headless e-commerce solution built for speed and SEO, featuring
                instant page transitions.
              </p>
              <span className="inline-flex items-center text-sm font-bold text-primary">
                View Case Study{" "}
                <span className="material-symbols-outlined text-sm ml-1">
                  {/* arrow_outward */}
                </span>
              </span>
            </div>
          </article>
        </div>
        <div className="mt-8 text-center sm:hidden">
          <a
            className="inline-flex items-center text-sm font-bold text-[#0c1a1d]  hover:text-primary"
            href="#"
          >
            View all projects{" "}
            <span className="material-symbols-outlined text-sm ml-1">
              {/* arrow_forward */}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomeProjects;
