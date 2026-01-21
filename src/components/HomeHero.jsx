const HomeHero = function () {
  return (
    <>
      <section className="font-inter mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20  sm:py-32 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-3 py-1 text-xs font-medium text-primary dark:border-primary/20 dark:bg-primary/10">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Available for new projects
        </div>
        <h1 className="max-w-3xl text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#333] ">
          Frontend Developer &amp; <br className="hidden sm:block" />
          <span className="text-primary">UI Specialist</span>
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 mb-10 leading-relaxed py-3">
          I build accessible, pixel-perfect web experiences with React and
          Tailwind CSS. My philosophy is simple: clarity in code leads to
          clarity in design.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="flex h-12 min-w-40 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-md hover:bg-primary-dark hover:shadow-lg transition-all hover:-translate-y-1">
            View Projects
          </button>
          <button className="flex h-12 min-w-40 items-center justify-center rounded-lg bg-gray-200 text-primary hover:text-white px-6 text-base font-bold shadow-md hover:bg-primary hover:shadow-lg transition-all hover:-translate-y-1">
            Contact Me
          </button>
        </div>
      </section>

      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent max-w-5xl mx-auto"></div>
    </>
  );
};

export default HomeHero;
