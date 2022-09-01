/**
ROOM 2: Ballons
Interactive popping balloons room for fun
Inspired by: https://threejs.org/examples/#webgl_effects_parallaxbarrier
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

//Use a class to add additional attributes to the ballons
class Balloon {
	constructor() {
		//Creating the balloons properties
		let x = randomInRange(-60, 60);
		let z = randomInRange(40, -40);
		let geometry = new THREE.SphereGeometry(3, 30, 30);
		let material = new THREE.MeshPhongMaterial({color: Math.random() * white,
			shininess: 100});
			let b = new THREE.Mesh(geometry, material);
			b.position.set(x, 0, z);
			this.object = b;

			//Add the balloon on the scene
			scene.add(b);
			//Give random speed parameter to each balloon
			this.ADD = randomInRange(0.05, 0.15);
			//Track if the balloon finish travelling from bottom to top of the screen
			this.over = false;
			//The highest value of y on screen
			this.TOP = 50;
		}

		//Advance() function
		//Keep track of the y position of the balloons
		//Remove the balloons if it goes over the top
		advance() {
			this.object.position.y += this.ADD;
			if(this.object.position.y > this.TOP)
			this.over = true;
		}
	};

	//onMouseClick()
	//Track if the mouse and the balloon intersects
	//Then remove the balloon selected
	let onMouseClick = function(e) {
		mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
		mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;
		mouse.z = 1;

		//Cast a ray from the camera
		rayCast.setFromCamera(mouse, camera);
		let intersects = rayCast.intersectObjects(scene.children);

		if(intersects.length == 0)
		return;
		let hit = intersects[0].object;

		//For each balloon
		//If the balloon is the same as the balloon pressed
		//Then remove the object
		balloons.forEach((b,ind) => {
			if(b.object == hit) {
				balloons.splice(ind, 1);
				scene.remove(b.object);
			}
		});


	};


	// Set up the environment
	// Initiallize scene, camera, objects and renderer
	let init = function() {
		// Create the scene
		scene = new THREE.Scene();
		scene.background = new THREE.Color(black);

		// Create an locate the camera

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
			// Create the renderer
			renderer = new THREE.WebGLRenderer();
			renderer.setSize(window.innerWidth, window.innerHeight);

			document.body.appendChild(renderer.domElement);

			//Add onMouseClick function for the balloon to react with a click
			document.addEventListener("click", onMouseClick, false);
		};


		// Main animation loop
		//Whenever the main loop is happening, if a balloon travel to the top of the screen, it will be remove.
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


		init();
		mainLoop();
