const HomeServices = function () {
  return (
    <section className="w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <h3 className="text-2xl font-bold text-[#0c1a1d] dark:text-white mb-12 text-center">
        Services
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Service 1 --> */}
        <div className="flex flex-col items-start p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-surface-dark transition-all">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">code</span>
          </div>
          <h4 className="text-lg font-bold text-[#0c1a1d] dark:text-white mb-2">
            SPA Development
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Building complex Single Page Applications with React that feel like
            native apps.
          </p>
        </div>
        {/* <!-- Service 2 --> */}
        <div className="flex flex-col items-start p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-surface-dark transition-all">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">palette</span>
          </div>
          <h4 className="text-lg font-bold text-[#0c1a1d] dark:text-white mb-2">
            Design Systems
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Creating scalable UI kits and component libraries to ensure
            consistency.
          </p>
        </div>
        {/* <!-- Service 3 --> */}
        <div className="flex flex-col items-start p-6 rounded-xl border border-transparent hover:border-gray-200 dark:hover:border-gray-700 hover:bg-white dark:hover:bg-surface-dark transition-all">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <span className="material-symbols-outlined">speed</span>
          </div>
          <h4 className="text-lg font-bold text-[#0c1a1d] dark:text-white mb-2">
            Performance Opt.
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Auditing and improving web performance for better SEO and user
            retention.
          </p>
        </div>
      </div>
    </section>
  );
};
export default HomeServices;
