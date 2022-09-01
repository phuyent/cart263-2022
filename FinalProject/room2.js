/**
Udemy Three 3d library
https://concordia.udemy.com/course/3d-programming-with-javascript-and-the-threejs-3d-library/learn/lecture/10731190#overview
*/

"use strict";
//Declare all the elements needed in the scene
let scene, camera, renderer, light1, light2, rayCast, mouse;
//Balloons array
let balloons = [];
let ADD = 0.01;
//Constants for color coding in THREE.js library
const white = new THREE.Color( 0xffffff );
const black = new THREE.Color( 0x000000 );
const red = new THREE.Color( 0xff0000 );
const green = new THREE.Color( 0x00ff00 );
const blue = new THREE.Color( 0x0000ff );
//A random range function
//To generate a random number in a certain range
let randomInRange = function(from, to) {
		let x = Math.random() * (to - from);
		return x + from;
};

class Balloon {
		constructor() {
				let x = randomInRange(-30, 30);
				let z = randomInRange(20, -20);
				let geometry = new THREE.SphereGeometry(3, 30, 30);
				let material = new THREE.MeshPhongMaterial({color: Math.random() * 0Xffffff,
																shininess: 100});
				let b = new THREE.Mesh(geometry, material);
				b.position.set(x, 0, z);
				this.object = b;

				scene.add(b);

				this.ADD = randomInRange(0.05, 0.15);
				this.over = false;
				this.TOP = 50;
		}

		advance() {
				this.object.position.y += this.ADD;
				if(this.object.position.y > this.TOP)
						this.over = true;
		}
};

let onMouseClick = function(e) {
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
		mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
		mouse.z = 1;

		rayCast.setFromCamera(mouse, camera);
		let intersects = rayCast.intersectObjects(scene.children);

		if(intersects.length == 0)
				return;
		let hit = intersects[0].object;

		balloons.forEach((b,ind) => {
																if(b.object == hit) {
																		balloons.splice(ind, 1);
																		scene.remove(b.object);
																}
														});


};


// set up the environment -
// initiallize scene, camera, objects and renderer
let init = function() {
		// create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(black);

		// create an locate the camera

		camera = new THREE.PerspectiveCamera(75,
										window.innerWidth / window.innerHeight,
										1, 1000);


		camera.position.set(0, 10, 40);

		light1 = new THREE.DirectionalLight(0xffffff, 1);
		light2 = new THREE.DirectionalLight(0xffffff, 1);
		light2.position.set(0, -5, 2);
		scene.add(light1);
		scene.add(light2);


		rayCast = new THREE.Raycaster();
		mouse = new THREE.Vector2();
		mouse.x = mouse.y = -1;
		// create the renderer
		renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(renderer.domElement);

		document.addEventListener("click", onMouseClick, false);
};


// main animation loop - calls 50-60 times per second.
let mainLoop = function() {
		let rand = Math.random();
		if(rand < 0.05)
				balloons.push(new Balloon());


		balloons.forEach((b, ind) => { b.advance()
														if(b.over) {
																balloons.splice(ind, 1);
																scene.remove(b.object);
														}
													});

		renderer.render(scene, camera);
		requestAnimationFrame(mainLoop);
};

///////////////////////////////////////////////
init();
mainLoop();
