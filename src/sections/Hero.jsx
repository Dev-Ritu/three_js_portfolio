import { Leva } from 'leva';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { PerspectiveCamera } from '@react-three/drei';

import Cube from '../components/Cube.jsx';
import Rings from '../components/Rings.jsx';
import ReactLogo from '../components/ReactLogo.jsx';
import Button from '../components/Button.jsx';
import Target from '../components/Target.jsx';
import CanvasLoader from '../components/Loading.jsx';
import HeroCamera from '../components/HeroCamera.jsx';
import { calculateSizes } from '../constants.js';
import { HackerRoom } from '../components/HackerRoom.jsx';
import { JSLogo } from '../components/JSLogo.jsx';

const Hero = () => {
  // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
<section className="min-h-screen w-full flex flex-col relative" id="home">
  <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
    <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
      Hi, I am Ritu <span className="waving-hand">👋</span>
    </p>
    <p className="hero_tag text-gray_gradient">Building Web Applications</p>

    {/* Wrapper for Image and Canvas */}
    <div className="relative w-full h-80 sm:h-2/5">
      <img
        src="/assets/dev.jpg"
        alt="Developer"
        className="w-full h-full object-cover"
      />

      {/* Canvas Confined to the Image Section */}
      <div className="absolute inset-0">
      <Leva />

        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            {/* To hide controller */}
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <JSLogo  position={sizes.JSLogoPosition} />
              <Rings position={sizes.ringPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>
    </div>
  </div>

  <div className="absolute bottom-7 left-0 right-0 w-full z-10 flex justify-center c-space px-4">
  <a href="#about" className="w-fit">
    <Button
      name="Let's work together"
      isBeam
      containerClass="sm:w-auto w-full sm:min-w-96 px-6 py-3 text-center"
    />
  </a>
</div>

</section>

  );
};

export default Hero;
