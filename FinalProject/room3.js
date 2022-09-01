/**
ROOM 3: Across the surface
Navigate through the cube by using the up,down,left,right arrows
No harm no foul if u touch the cubes, it's just for interacting with the geometry
Inspired by: https://threejs.org/examples/#webgl_camera_cinematic
*/

"use strict";
let scene, camera, renderer;
let cubes = [];
let ADD = 2;
//Constant for arrow keys
const LEFT = 37, RIGHT = 39, UP = 38, DOWN = 40;

let randomInRange = function(from, to) {
	let x = Math.random() * (to - from);
	return x + from;
};

let createCube = function() {
	let w = randomInRange(1, 3);
	let h = randomInRange(1, 3);
	let d = randomInRange(1, 3);
	let geometry = new THREE.BoxGeometry(w, h, d);
	let material = new THREE.MeshLambertMaterial({color: Math.random() * 0xffffff});
	let cube = new THREE.Mesh( geometry, material );
	cube.position.x = randomInRange(-80, 80);
	cube.position.z = randomInRange(-2000, 40);
	cubes.push(cube);
};
//onKeyDown
//Move the camera position according to the arrow direction
let onKeyDown = function(e) {
	if(e.keyCode == LEFT)
	camera.position.x -= 0.2;
	else if(e.keyCode == RIGHT)
	camera.position.x += 0.2;
	else if(e.keyCode == UP)
	camera.position.y += 0.2;
	else if(e.keyCode == DOWN)
	camera.position.y -= 0.2;
};

// Set up the environment
// Initiallize scene, camera, objects and renderer
let init = function() {
	// Create the scene
	scene = new THREE.Scene();
	scene.background = new THREE.Color(0x000000);

	// Create and locate the camera
	camera = new THREE.PerspectiveCamera(50,
		window.innerWidth / window.innerHeight,
		1, 1000);
		camera.position.z = 100;
		camera.position.y = 2;

		// Add lights to see the cubes in the dark
		let light1 = new THREE.DirectionalLight(0xffffff,1);
		scene.add(light1);
		let light2 = new THREE.AmbientLight(0xffffff,1);
		scene.add(light2);


		for(let i = 1; i <= 150; i++)
		createCube();
		cubes.forEach((cube) => scene.add(cube));

		// Create the renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(renderer.domElement);
		document.addEventListener( 'keydown', onKeyDown, false );
	};


	// Main animation loop
	let mainLoop = function() {
		camera.position.z -= ADD;

		renderer.render(scene, camera);
		requestAnimationFrame(mainLoop);
	};


	init();
	mainLoop();
