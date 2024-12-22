import React, { useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, useScroll, ScrollControls, SoftShadows } from "@react-three/drei";
import { EffectComposer, TiltShift2 } from "@react-three/postprocessing";

// Model Component
function Model(props) {
  const scroll = useScroll();
  const { nodes, materials, animations } = useGLTF("/jump-transformed.glb");
  const { ref, actions } = useAnimations(animations);

  // Reset and start animation on component mount
  useEffect(() => {
    actions.jump.reset().play().paused = true;
  }, [actions]);

  // Sync animation with scroll offset
  useFrame(() => {
    actions.jump.time = actions.jump.getClip().duration * scroll.offset;
  });

  return (
    <group {...props} ref={ref}>
      <primitive object={nodes.mixamorigHips} />
      <skinnedMesh
        castShadow
        receiveShadow
        geometry={nodes.Ch03.geometry}
        material={materials.Ch03_Body}
        skeleton={nodes.Ch03.skeleton}
      />
    </group>
  );
}

// Main App Component
export const Dev = () => (
  <div style={{ height: "100vh", position: "relative", overflow: "hidden" }}>
    <Canvas
      shadows
      gl={{ antialias: false }}
      camera={{ position: [1, 0.5, 2.5], fov: 50 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      {/* Background Color */}
      <color attach="background" args={["#f0f0f0"]} />
      {/* Fog for depth effect */}
      <fog attach="fog" args={["#f0f0f0", 0, 20]} />
      {/* Ambient Light */}
      <ambientLight intensity={0.5} />
      {/* Directional Light with Shadows */}
      <directionalLight
        intensity={2}
        position={[-5, 5, 5]}
        castShadow
        shadow-mapSize={2048}
        shadow-bias={-0.0001}
      />
      
      {/* Scroll Controls */}
      <ScrollControls damping={0.2} maxSpeed={0.5} pages={2}>
        {/* The 3D model with adjusted position, rotation, and scale */}
        <Model position={[0, -1, 0]} rotation={[Math.PI / 2, 0, 0]} scale={0.02} />
      </ScrollControls>
      
      {/* Floor with shadow */}
      <mesh rotation={[-0.5 * Math.PI, 0, 0]} position={[0, -1.01, 0]} receiveShadow>
        <planeBufferGeometry args={[10, 10, 1, 1]} />
        <shadowMaterial transparent opacity={0.75} />
      </mesh>
      
      {/* Apply soft shadows */}
      <SoftShadows size={40} samples={16} />
      
      {/* Postprocessing effects */}
      <EffectComposer disableNormalPass multisampling={4}>
        <TiltShift2 blur={1} />
      </EffectComposer>
    </Canvas>
  </div>
);
