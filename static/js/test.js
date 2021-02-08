var $mount, renderer, scene, camera, composer, circle, skelet, particle, cube;

window.onload = function () {
    init();
    render();
}

function init() {
    $mount = document.getElementById('webGlDiv');
    this.width = $mount.offsetWidth;
    this.height = $mount.offsetHeight;

    // Initialize renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
    renderer.setSize(this.width, this.height);
    renderer.autoClear = false;
    renderer.setClearColor(0x000000, 0.0);
    $mount.append(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, this.width / this.height);
    //camera.position.z = 400;
    scene.add(camera);

    var geometry = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xffffff });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    cube.position.z = -5;
    cube.rotation.x = 10;
    cube.rotation.y = 5;

    var ambientLight = new THREE.AmbientLight(0x999999);
    scene.add(ambientLight);

    var lights = [];
    lights[0] = new THREE.DirectionalLight(0xffffff, 1);
    lights[0].position.set(1, 0, 0);
    lights[1] = new THREE.DirectionalLight(0x11E8BB, 1);
    lights[1].position.set(0.75, 1, 0.5);
    lights[2] = new THREE.DirectionalLight(0x8200C9, 1);
    lights[2].position.set(-0.75, -1, 0.5);
    scene.add(lights[0]);
    scene.add(lights[1]);
    scene.add(lights[2]);


    renderer.render(scene, camera);
    window.addEventListener('resize', onWindowResize, false);
};

function onWindowResize() {
    this.width = $mount.offsetWidth;
    this.height = $mount.offsetHeight;

    camera.aspect = this.width / this.height;
    camera.updateProjectionMatrix();
    renderer.setSize(this.width, this.height);
}

function render() {
    requestAnimationFrame(render);
    //cube.rotation.y += 0.01;
    cube.rotation.y = 50;
    renderer.render(scene, camera);
}