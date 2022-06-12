import * as THREE from '../../libs/three128/three.module.js';
import { OrbitControls } from '../../libs/three128/OrbitControls.js';

class App {
  constructor() {
    const container = document.createElement('div');
    document.body.appendChild(container);

    this.camera = new THREE.PerspectiveCamera(
      // focal point of view
      60,
      // aspect ratio
      window.innerWidth / window.innerHeight,
      // near plane: anything close than this will be hidden
      0.1,
      // far plane
      100
    );
    this.camera.position.set(0, 0, 10);

    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x6666);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    // to avoid blurryness: set the pixel ratio
    this.renderer.setPixelRatio(window.devicePixelRatio);
    // set the size of the renderer
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    // render on creates, it creates a dom element
    container.appendChild(this.renderer.domElement);

    // bind the renderer to app instance as we are currently in contructor
    this.renderer.setAnimationLoop(this.render.bind(this));

    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {}

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

export { App };
