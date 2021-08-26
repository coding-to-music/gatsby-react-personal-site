import ThreeGlobe from "three-globe";
import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  AmbientLight,
  DirectionalLight,
  Color,
  Fog,
  AxesHelper,
  DirectionalLightHelper,
  CameraHelper,
  PointLight,
  SphereGeometry,
} from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createGlowMesh } from "three-glow-mesh";
import countries from "../data/globe-data-min.json";
import travelHistory from "../data/globe-travels";
import airportHistory from "../data/globe-cities";

const windowGlobal = typeof window !== "undefined" && window;

let renderer;
let camera;
let scene;
let controls;

let Globe;

const canvRef = document.getElementById("globe_canvas");

function onWindowResize() {
  camera.updateProjectionMatrix();
}

// SECTION Initializing core ThreeJS elements
function init() {
  // Initialize renderer
  renderer = new WebGLRenderer({
    antialias: true,
    alpha: true,
    canvas: canvRef,
  });
  renderer.setPixelRatio(windowGlobal.devicePixelRatio);
  renderer.setSize(windowGlobal.innerWidth, windowGlobal.innerHeight);
  renderer.setClearColor(0x000000, 0);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  //   document.body.appendChild(renderer.domElement);

  // Initialize scene, light
  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));
  //   scene.background = new Color("");

  // Initialize camera, light
  camera = new PerspectiveCamera();
  camera.aspect = windowGlobal.innerWidth / windowGlobal.innerHeight;
  camera.updateProjectionMatrix();

  const dLight = new DirectionalLight(0xffffff, 0.8);
  dLight.position.set(-800, 2000, 400);
  camera.add(dLight);

  const dLight1 = new DirectionalLight(0x7982f6, 1);
  dLight1.position.set(-200, 500, 200);
  camera.add(dLight1);

  const dLight2 = new PointLight(0x8566cc, 0.5);
  dLight2.position.set(-200, 500, 200);
  camera.add(dLight2);

  camera.position.set(0, 0, 250);

  scene.add(camera);

  // Additional effects
  scene.fog = new Fog(0x535ef3, 400, 2000);

  // Helpers
  //   const axesHelper = new AxesHelper(800);
  //   scene.add(axesHelper);
  //   const helper = new DirectionalLightHelper(dLight);
  //   scene.add(helper);
  //   const helperCamera = new CameraHelper(dLight.shadow.camera);
  //   scene.add(helperCamera);

  // Initialize controls
  controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dynamicDampingFactor = 0.01;
  controls.enablePan = false;
  controls.minDistance = 200;
  controls.maxDistance = 500;

  controls.rotateSpeed = 0.8;
  controls.zoomSpeed = 1;
  controls.autoRotate = true;
  controls.autoRotateSpeed = 0.3;

  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;

  windowGlobal.addEventListener("resize", onWindowResize, false);
}

// SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe()
    // .globeImageUrl(EarthDarkSkin)
    .arcsData(travelHistory.flights)
    .arcColor((e) => {
      return e.status ? "#ec6bc0" : "#d8c4d1";
    })
    .arcAltitude((e) => {
      return e.arcAlt;
    })
    .arcStroke((e) => {
      return e.status ? 0.5 : 0.3;
    })
    .arcDashLength(0.9)
    .arcDashGap(4)
    .arcDashAnimateTime(2000)
    .arcsTransitionDuration(2000)
    .arcDashInitialGap((e) => e.order * 1)
    .labelsData(airportHistory.cities)
    .labelColor(() => "#ea6abf")

    .labelDotRadius(0.5)
    .labelSize((e) => e.size)
    .labelText("place")
    .labelResolution(6)
    .labelAltitude(0.01)
    .pointsData(airportHistory.cities)
    .pointColor(() => "#212b66")
    .pointsMerge(true)
    .pointAltitude(0)
    .pointRadius(0.05)
    .hexPolygonsData(countries.features)
    .hexPolygonResolution(3)
    .hexPolygonMargin(0.7)
    .showAtmosphere(false)
    .hexPolygonColor(() => {
      return "rgba(255,255,255, 0.7)";
    });

  Globe.rotateY(-Math.PI / 2);
  Globe.rotateZ(Math.PI / 45);
  Globe.rotateX(0.45);
  const globeMaterial = Globe.globeMaterial();
  globeMaterial.color = new Color(0x3a228a);
  //   globeMaterial.emissive = new Color("#ff0000ef");
  globeMaterial.emissiveIntensity = 0.1;
  globeMaterial.shininess = 1;
  // NOTE Cool stuff
  // globeMaterial.wireframe = true;

  // Initialize the glow
  const options = {
    backside: true,
    color: "#3a228a",
    size: 3,
    power: 6,
    coefficient: 0.8,
  };
  const glowMesh = createGlowMesh(new SphereGeometry(100, 75, 75), options);
  Globe.add(glowMesh);
  scene.add(Globe);
}

function animate() {
  camera.lookAt(scene.position);
  controls.update();
  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

export const HomeGlobe = () => {
  init();
  initGlobe();
  onWindowResize();
  animate();
  return null;
};

export default HomeGlobe;
