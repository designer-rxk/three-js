import "./App.css";
import React, {Suspense} from "react";
import styled from "styled-components";
import Background from "./Components/Background";
import TextSection from "./Components/TextSection";
import Box from "./Components/Box";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import Sphere from "./Components/AnimatedSphere"
import World from "./Components/ModelDraco"

export default function App() {
  return (
    <Wrapper className="App">
      <Background />
      <TextSection />
        <Canvas className={"canvas"}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>
                <Box/>
            </Suspense>
        </Canvas>

        <Canvas className={"canvas"}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>
                <Sphere/>
            </Suspense>
        </Canvas>

        <Canvas className={"canvas"}>
            <OrbitControls enableZoom={false}/>
            <ambientLight intensity={0.5}/>
            <directionalLight position={[-2, 5, 2]} intensity={1}/>
            <Suspense fallback={null}>
                <World scale={2.5}/>
            </Suspense>
        </Canvas>
    </Wrapper>


  );
}

const Wrapper = styled.div`
  position: relative;
  background: #1f1144;
  
  canvas{
    height:500px;
  }
`;
