import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';


export function Canvas({path, z}) {
    const canvasRef = useRef(null);
    const modelRef = useRef();
    const controlsRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
        const ambientLight = new THREE.AmbientLight(0xffffff, 1); // Kolor i intensywność światła
        scene.add(ambientLight);
        
        

        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setClearColor(0x000000, 0);
        renderer.setSize(innerWidth / 6, innerHeight / 6);

        const loader = new GLTFLoader();
        loader.load(path, (gltf) => {
            modelRef.current = gltf.scene;
            scene.add(gltf.scene);
        }, undefined, (error) => console.error(error));

        camera.position.z = z;;
        camera.position.y = 0.5;
        
        controlsRef.current = new OrbitControls(camera, renderer.domElement);
        controlsRef.current.enableRotate = true; // Włącz obracanie za pomocą myszki
        controlsRef.current.enableZoom = false; // Wyłącz zoom

        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);

            if (modelRef.current) {
                modelRef.current.rotation.y += 0.007;
            }
            
            controlsRef.current.update(); // Aktualizacja kontrolera Orbity
  
        };

        animate();
    }, []);

    return (
        <canvas ref={canvasRef} className="w-1/2" id="myThreeJsCanvas" />
    );
}
