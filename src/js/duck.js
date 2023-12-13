import $ from 'jquery';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

const duckUrl = new URL('../assets/duck.glb', import.meta.url);

const pixelRatio = window.devicePixelRatio;
let AA = true;
if (pixelRatio > 1) {
    AA = false;
}

const renderer = new THREE.WebGLRenderer({
    antialias: AA,
    powerPreference: "high-performance",
    alpha: true
});

export function init() {
    $('#duck-container').append(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
        70,
        $('#duck-container').width() / $('#duck-container').height(),
        10,
        40
    );
    camera.position.set(20, 5, 20);
    camera.lookAt(0, 0, 0);

    renderer.setSize($('#duck-container').width(), $('#duck-container').height());
    renderer.setPixelRatio(window.devicePixelRatio * 1);
    renderer.setClearColor(0xffffff, 0);

    const orbit = new OrbitControls(camera, renderer.domElement);
    orbit.autoRotate = true;
    orbit.enablePan = false;
    orbit.enableRotate = false;
    orbit.enableZoom = false;
    orbit.autoRotateSpeed = -5;
    orbit.update();

    const gridHelper = new THREE.GridHelper(18, 3);
    gridHelper.position.y -= 7.5001;
    gridHelper.rotation.y = Math.PI * .2;
    scene.add(gridHelper);

    const light = new THREE.RectAreaLight(0xffffff, 3, 50, 50);
    light.position.set(0, 30, 10);
    light.lookAt(0, -10, 0)
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load(duckUrl.href, function (object) {
        const duck = object.scene;
        scene.add(duck);
        duck.position.y = -2.5;
        duck.rotation.y = -.8 * Math.PI;
    }, undefined, function (error) {
        console.error(error);
    });

    function animate(_time) {
        orbit.update();
        renderer.render(scene, camera);
    }

    renderer.setAnimationLoop(animate);

    $(window).on('resize', () => {
        camera.aspect = $('#duck-container').width() / $('#duck-container').height();
        renderer.setSize($('#duck-container').width(), $('#duck-container').height());
        camera.updateProjectionMatrix();
    });

    $('#duck-container').on('resize', () => {
        $(window).trigger('resize');
    });
}