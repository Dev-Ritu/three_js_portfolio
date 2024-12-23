import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Developer from '../components/Developer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { workExperiences } from '../constants.js';
import  { Dev } from '../components/Dev.jsx';

const WorkExperience = () => {
    const [animationName, setAnimationName] = useState('salute');
  
    return (
      <section className="c-space my-20" id="work">
        <div className="w-full text-white-600">
          <p className="head-text">My Work Experience</p>
  
          <div className="work-container">
            <div className="work-canvas">
              <Canvas
                camera={{
                  position: [0, 0, 6], // Adjust camera distance (zoom level)
                  fov: 50, // Adjust field of view
                }}
              >
                <ambientLight intensity={7} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                <directionalLight position={[10, 10, 10]} intensity={1} />
                <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} />
  
                <Suspense fallback={<CanvasLoader />}>
                <Developer position-y={-2} scale={2} animationName={animationName} />
             </Suspense>
              </Canvas>
            </div>
  
            <div className="work-content">
              <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                {workExperiences.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOver={() => setAnimationName(item.animation.toLowerCase())}
                    onPointerOut={() => setAnimationName('idle')}
                    className="work-content_container group">
                    <div className="flex flex-col h-full justify-start items-center py-2">
                      <div className="work-content_logo">
                        <img className="w-full h-full" src={item.icon} alt="" />
                      </div>
  
                      <div className="work-content_bar" />
                    </div>
  
                    <div className="sm:p-5 px-2.5 py-5">
                      <p className="font-bold text-white-800">{item.name}</p>
                      <p className="text-sm mb-5">
                        {item.pos} -- <span>{item.duration}</span>
                      </p>
                      <p className="group-hover:text-white transition-all ease-in-out duration-500">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WorkExperience;
