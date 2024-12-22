import { useRef, useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import gsap from 'gsap';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const introRef = useRef();
  const techRef = useRef();
  const globeRef = useRef();
  const passionRef = useRef();

  const contactRef = useRef();

  const handleMouseEnter = (ref) => {
    gsap.to(ref.current, {
      y: -20, // Lift the card upwards
      scale: 1.1, // Slightly enlarge the card
      zIndex: 10, // Bring the card visually to the front
      boxShadow: "0px 30px 50px rgba(0, 0, 0, 0.5)", // Deep shadow for floating effect
      duration: 0.4, // Smooth transition duration
      ease: "power3.out", // Elegant easing for the hover
    });
  };
  
  const handleMouseLeave = (ref) => {
    gsap.to(ref.current, {
      y: 0, // Reset position
      scale: 1, // Reset size
      zIndex: 1, // Reset stacking order
      boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.2)", // Subtle shadow for default state
      duration: 0.4,
      ease: "power3.inOut", // Smooth reset transition
    });
  };
  
  
  
  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3"    ref={introRef}
            onMouseEnter={() => handleMouseEnter(introRef)}
            onMouseLeave={() => handleMouseLeave(introRef)}>
          <div className="grid-container">
            <img src="assets/Ritu.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain rounded-md" />

            <div>
              <p className="grid-headtext">Hi, I’m Ritu Kumari</p>
              <p className="grid-subtext">
                With more than 2 years of experience, I have honed my skills in frontend and also backend dev, creating dynamic
                and responsive websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3" ref={techRef}
            onMouseEnter={() => handleMouseEnter(techRef)}
            onMouseLeave={() => handleMouseLeave(techRef)}>
          <div className="grid-container">
            <img src="assets/tech_stack.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of libraries, frameworks, and tools that allow me to build robust and scalable
                applications
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4" ref={globeRef}
            onMouseEnter={() => handleMouseEnter(globeRef)}
            onMouseLeave={() => handleMouseLeave(globeRef)}>
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Gurgaon, Haryana and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3" ref={passionRef}
            onMouseEnter={() => handleMouseEnter(passionRef)}
            onMouseLeave={() => handleMouseLeave(passionRef)}>
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2" ref={contactRef}
            onMouseEnter={() => handleMouseEnter(contactRef)}
            onMouseLeave={() => handleMouseLeave(contactRef)}>
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">ritikasinha9958@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;