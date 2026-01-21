const HomeAbout = function () {
  return (
    <section class="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div class="md:col-span-4">
          <h3 class="text-2xl font-bold text-[#0c1a1d]  flex items-center gap-3">
            <span class="h-px w-8 bg-primary"></span>
            About Me
          </h3>
        </div>
        <div class="md:col-span-8 flex flex-col gap-6">
          <p class="text-lg text-gray-600  leading-relaxed">
            I am a passionate frontend developer with over 5 years of experience
            in building responsive web applications. I specialize in the React
            ecosystem and love crafting clean, efficient code that translates
            into smooth user experiences.
          </p>
          <p class="text-lg text-gray-600  leading-relaxed">
            Beyond coding, I focus on design systems and accessibility, ensuring
            that the web is usable for everyone.
          </p>
          <div class="pt-2">
            <a
              class="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark underline decoration-2 underline-offset-4 transition-colors"
              href="#"
            >
              Read full bio
              <span class="material-symbols-outlined text-sm">
                {/* arrow_forward */}
                
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
