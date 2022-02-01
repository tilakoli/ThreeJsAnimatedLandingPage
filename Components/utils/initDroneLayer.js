import * as THREE from "three";
// importing the model and texture loader
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import gsap from "gsap";

let camera, scene, renderer;
const loader = new GLTFLoader();

export function init() {
  camera = new THREE.PerspectiveCamera(
    70,
    window.innerWidth / window.innerHeight,
    0.01,
    10
  );

  camera.position.z = 5;
  camera.rotation.z = 1;
  // getting the scene from the threeJS
  scene = new THREE.Scene();

  const light = new THREE.AmbientLight(0xffffff, 2);
  scene.add(light);

  // loading the model and texture with the help of the GLTFLoader
  loader.load("/models/drone/scene.gltf", (gltf) => {
    let model = gltf.scene;
    model.scale.set(0.45, 0.45, 0.45);

    // defining the animated movement of
    // the drone with the help of GSAP
    gsap.to(camera.position, {
      z: 1,
      duration: 1,
      ease: "back.out(1.7)",
    });
    gsap.to(camera.rotation, {
      z: 0,
      duration: 1,
    });
    gsap.to(model.rotation, {
      y: Math.PI * 1.95,
      duration: 2,
      delay: 1,
    });
    gsap.to(model.scale, {
      delay: 1,
      duration: 1,
      x: 0.25,
      y: 0.25,
      z: 0.25,
    });
    gsap.to(model.position, {
      delay: 1,
      duration: 1,
      x: 0.35,
      y: 0.3,
    });
    // then adding the model to the scene that we created
    scene.add(model);
  });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setAnimationLoop(animation);
  renderer.setClearColor(0x272727, 1);
  document.body.appendChild(renderer.domElement);

  // configuring the window resize event for our canvas
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

function animation() {
  requestAnimationFrame(animation);
  renderer.render(scene, camera);
}
