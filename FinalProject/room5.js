/**
Udemy Three 3d library
https://concordia.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/learn/lecture/10731190#overview
*/

"use strict";
//Declare the elements needed to create a scene
let scene, camera, renderer, spotLight1, spotLight2;
//Declare variables as the objects
let plane, target1, target2;
//An array of cubes
let cubes = [];
//The values used in THREE js geometry
let ADD = 0.01;


let randomInRange = function(from, to) {
		let x = Math.random() * (to - from);
		return x + from;
};

let createCube = function() {
		let w = randomInRange(5, 8);
		let h = randomInRange(5, 8);
		let d = randomInRange(5, 8);
		let geometry = new THREE.BoxGeometry(w, h, d);
		let material = new THREE.MeshPhongMaterial(
																{ color: Math.random() * 0xffffff });
		let cube = new THREE.Mesh( geometry, material );
		cube.position.x = randomInRange(-20, 20);
		cube.position.z = randomInRange(-20, 20);
		cubes.push(cube);
};

let createGeometry = function() {
		let geometry = new THREE.BoxGeometry(2000, 1, 2000);
		let material = new THREE.MeshPhongMaterial({color: 0X693421, side: THREE.DoubleSide});
		plane = new THREE.Mesh(geometry, material);
		plane.position.y = -1;

		for(let i = 1; i <= 10; i++)
				createCube();

		cubes.forEach(cube => scene.add(cube));
		scene.add(plane);

};

// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function() {
		// create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(0x000000);

		// create an locate the camera
		camera = new THREE.PerspectiveCamera(100,
										window.innerWidth / window.innerHeight,
										1, 1000);
		camera.position.set(0, 10, 20);

		spotLight1 = new THREE.SpotLight(0xffffff, 1);
		spotLight1.position.set(15, 50, 50);
		spotLight1.angle = Math.PI / 20;
		spotLight1.penumbra = 0.05;
		spotLight1.decay = 2;
		spotLight1.distance = 200;

		scene.add(spotLight1);

		target1 = new THREE.Object3D();
		target1.position.set(20, 0, 0);
		spotLight1.target = target1;

		scene.add(target1);

		spotLight2 = new THREE.SpotLight(0xffffff, 1);
		spotLight2.position.set(-15, 20, 10);
		spotLight2.angle = Math.PI / 20;
		spotLight2.penumbra = 0.05;
		spotLight2.decay = 2;
		spotLight2.distance = 200;

		scene.add(spotLight2);

		target2 = new THREE.Object3D();
		target1.position.set(-10, 0, 0);
		spotLight2.target = target2;

		scene.add(target2);


		createGeometry();


		// create the renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(renderer.domElement);

};


// main animation loop
let mainLoop = function() {

		target1.position.x -= ADD;
		target2.position.x += ADD;
		if(target1.position.x < -20 || target1.position.x > 20)
				ADD *= -1;



		renderer.render(scene, camera);
		requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();
