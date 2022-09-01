/**
ROOM 4: RAIN OF DONUTS
A room with colorful donuts falling with music 
Non-interactive
*/

"use strict";
//Declare the elements needed for the scene
let scene, camera, renderer;
//Array to store the donut object
let donuts = [];
//Values variables
let ADD = 0.05;
let THETA = 0;

let randomInRange = function(from, to) {
		let x = Math.random() * (to - from);
		return x + from;
};

let createDonut = function() {
		let geometry = new THREE.TorusGeometry(1, 0.5, 5, 30);
		let material = new THREE.MeshBasicMaterial(
																		{color: Math.random() * 0xffffff});

		let d = new THREE.Mesh( geometry, material );

		d.position.x = randomInRange(-15, 15);
		d.position.z = randomInRange(-15, 15);
		d.position.y = 15;

		scene.add(d);
		donuts.push(d);
};


// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function() {
		// create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x000000);

		// create an locate the camera
		camera = new THREE.PerspectiveCamera(50,
										window.innerWidth / window.innerHeight,
										1, 1000);
		camera.position.z = 20;
		camera.position.y = -10;

		// create the renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(renderer.domElement);

};


// main animation loop - calls 50-60 times per second.
let mainLoop = function() {
		let x = Math.random();
		if(x < 0.1)
				createDonut();

		donuts.forEach(d => d.position.y -= ADD);


		//The camera rotating around the scene
		//camera.lookAt(new THREE.Vector3(0,0,0));
		//camera.position.x = 40 * Math.sin(THETA);
		//camera.position.z = 40 * Math.cos(THETA);
		//THETA += ADD;

		renderer.render(scene, camera);
		requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();
