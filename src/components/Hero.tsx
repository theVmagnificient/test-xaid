const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact-us');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden bg-background">
      {/* Spline 3D Background */}
      <div className="absolute inset-0 z-0">
        <spline-viewer
          url="https://prod.spline.design/gJ1DETcTJKYEDidA/scene.splinecode"
          style={{ width: '100%', height: '100%', display: 'block' }}
        ></spline-viewer>

        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container-xaid relative z-10 pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px]">
        <div className="max-w-[780px]">
          <h1 className="font-['Poppins'] text-[42px] md:text-[56px] lg:text-[72px] font-normal text-white leading-[1.1] tracking-[-0.02em] mb-8 animate-fade-in-up">
            Ready-to-sign AI reports<br />
            you can trust. Each is<br />
            human-validated
          </h1>
          <p
            className="font-['Poppins'] text-white/60 text-lg md:text-xl max-w-[520px] leading-relaxed mb-12 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '150ms' }}
          >
            Solution for US radiology groups. Scale coverage, improve accuracy, reduce costs — without hiring more radiologists
          </p>
          <button
            onClick={scrollToContact}
            className="bg-xaid-blue hover:bg-xaid-blue/90 text-white text-lg font-medium px-12 py-5 rounded-full transition-all duration-200 opacity-0 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
