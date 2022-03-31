import React from "react";
import {useLoader} from "@react-three/fiber";
import {TextureLoader} from "three";
import texture from "./images/map.jpg";

export default function Box(){
    const colorMap = useLoader(TextureLoader, texture);

    //divs can not exist inside Canvas

    // <meshStandardMaterial map={colorMap}/> Adding a texture to the mesh
    return(
        <mesh rotation={[90, 0, 20]}>
            <boxBufferGeometry attach={"geometry"} args={[3,3,3]}/>

            <meshNormalMaterial attach={"material"}/>
        </mesh>
    );
}