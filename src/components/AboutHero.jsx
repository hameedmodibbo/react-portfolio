const AboutHero = function () {
  return (
    <section class="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
      {/* <!-- Headshot --> */}
      <div class="md:col-span-5 order-first">
        <div class="relative group">
          {/* <!-- Image Container with 'Digital Craftsman' border styling --> */}
          <div class="aspect-[4/5] w-full overflow-hidden rounded-md border border-border-light dark:border-border-dark bg-slate-100 dark:bg-slate-800 shadow-soft">
            <div
              class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
              data-alt="Portrait of a male developer smiling confidently"
              style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAiyldIvAsjmHyBsiMdG6PsmJzKxUmj9-n4vomzniJyw3qdzD3ZuB7kxD4f85an6UpVZMIdZvjUANOOuX7m1pUKWhnMemsmNi6QOjedQo56tryuumPD1OA_88DT4myuxNcVRgtRjryui_4jPI-QdshXi7L_p1dLBZ9wtsz4Llrx6jlMsBop0c_Gz6_0iXiz6eWzrWY1v8Z2h3o6OZfomssQnJyfkizZu_wmcA7qwzefpEJkMtC0kwlHLYqyqiP0orM3Y_B_mn5ocPw');"
            ></div>
          </div>
          {/* <!-- Decorative Element --> */}
          <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10 blur-xl"></div>
        </div>
      </div>
      {/* <!-- Bio Content --> */}
      <div class="md:col-span-7 flex flex-col justify-center h-full space-y-6">
        <div class="space-y-2">
          <span class="inline-block text-primary font-bold tracking-wider text-xs uppercase bg-primary/10 px-2 py-1 rounded">
            Frontend Engineer
          </span>
          <h1 class="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
            Hello, I'm Hamid. <br />
            <span class="text-slate-400 dark:text-slate-500">
              I craft precise digital interfaces.
            </span>
          </h1>
        </div>
        <div class="space-y-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
          <p>
            I specialize in building accessible, performant, and responsive web
            applications using modern technologies. My philosophy centers on
            "clean code, clean design."
          </p>
          <p>
            With a background in traditional graphic design, I bridge the gap
            between Figma files and functional React components, ensuring that
            pixel-perfect implementation never sacrifices user experience.
          </p>
        </div>
        <div class="pt-2 flex flex-wrap gap-4">
          <button class="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold text-sm px-6 py-3 rounded-md transition-all shadow-md hover:shadow-lg transform active:scale-95">
            <span class="material-symbols-outlined text-[20px]">download</span>
            Download Resume
          </button>
          <button class="inline-flex items-center gap-2 bg-white dark:bg-surface-dark border border-border-light dark:border-border-dark text-slate-700 dark:text-slate-200 font-semibold text-sm px-6 py-3 rounded-md transition-all hover:bg-slate-50 dark:hover:bg-slate-800">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
