import React, { useEffect } from "react";

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

import { useGlobe } from "../context/GlobeContext";
import { useLoadingUpdate } from "../context/LoadingContext";

const windowGlobal = typeof window !== "undefined" && window;

let renderer;
let camera;
let scene;
let controls;

let Globe;

// BUG: Creating a new canvas outside gatsby body
const canvRef = document.getElementById("globe_canvas");

let fpsId;
let ticks = 0;

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

  const width = "1300";
  const height = "656.1";

  renderer.setClearColor(0x000000, 0);
  // renderer.outputEncoding = THREE.sRGBEncoding;
  //   document.body.appendChild(renderer.domElement);

  // Initialize scene, light
  scene = new Scene();
  scene.add(new AmbientLight(0xbbbbbb, 0.3));

  // Initialize camera, light
  camera = new PerspectiveCamera();

  // NOTE: Seule moyen pour que l'objet conserve la meme taille
  if (canvRef.width !== width || canvRef.height !== height) {
    // you must pass false here or three.js sadly fights the browser
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    // set render target sizes here
  }
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

  // NOTE: Maybe increase it in the future
  controls.minPolarAngle = Math.PI / 3.5;
  controls.maxPolarAngle = Math.PI - Math.PI / 3;

  //   windowGlobal.addEventListener("resize", onWindowResize, false);
}

// SECTION Globe
function initGlobe() {
  // Initialize the Globe
  Globe = new ThreeGlobe()
    .arcsData(travelHistory.flights)
    .arcColor((e) => {
      return e.status ? "#1bdbe9" : "#1bdbe9";
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
    .arcDashInitialGap((e) => e.order * 0.4)
    .labelsData(airportHistory.cities)
    .labelColor(() => "#eee1e9")
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
  //   globeMaterial.wireframe = true;

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

function destroyThree() {
  cancelAnimationFrame(fpsId);
  while (scene.children.length > 0) {
    scene.remove(scene.children[0]);
  }
  renderer.clear();

  //   renderer = null;
  //   camera = null;
  //   scene = null;
  //   controls = null;

  //   Globe = null;
}

export const HomeGlobe = () => {
  const isGlobe = useGlobe();
  const setIsloaded = useLoadingUpdate();

  function animate() {
    fpsId = requestAnimationFrame(animate);
    camera.lookAt(scene.position);
    controls.update();

    renderer.render(scene, camera);

    if (ticks === 10) {
      setIsloaded(true);
    }

    ticks += 1;
  }

  useEffect(() => {
    if (isGlobe) {
      init();

      initGlobe();
      onWindowResize();
      animate();
    } else {
      destroyThree();
    }
    return () => {
      cancelAnimationFrame(fpsId);
    };
  }, []);

  return null;
};

export default React.memo(HomeGlobe);
