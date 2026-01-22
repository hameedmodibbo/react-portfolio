const HomeAbout = function () {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-4">
          <h3 className="text-2xl font-bold text-[#0c1a1d]  flex items-center gap-3">
            <span className="h-px w-8 bg-primary"></span>
            About Me
          </h3>
        </div>
        <div className="md:col-span-8 flex flex-col gap-6">
          <p className="text-lg text-gray-600  leading-relaxed">
            I am a passionate frontend developer with over 5 years of experience
            in building responsive web applications. I specialize in the React
            ecosystem and love crafting clean, efficient code that translates
            into smooth user experiences.
          </p>
          <p className="text-lg text-gray-600  leading-relaxed">
            Beyond coding, I focus on design systems and accessibility, ensuring
            that the web is usable for everyone.
          </p>
          <div className="pt-2">
            <a
              className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-primary-dark underline decoration-2 underline-offset-4 transition-colors"
              href="#"
            >
              Read full bio
              <span className="material-symbols-outlined text-sm">
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
