// let startTime, endTime;
// let imageSize = "";
// let image = new Image();

// let bitSpeed = document.getElementsById("bits"),
//     kbpsSpeed = document.getElementsById("kbps"),
//     mbpsSpeed = document.getElementsById("mbps"),
//     info = document.getElementsById("info");

// let totalBitSpeed = 0;
// let totalKbSpeed = 0;
// let totalMbSpeed = 0;
// let numTests = 1;
// let testCompletado = 0;

// let imageApi = "https://source.unsplash.com/random?topic=nature";

// image.onload = async function () {
//     endTime = new Date().getTime();

//     await fetch(imageApi).then((response)=>{
//         imageSize = response.headers.get("content-length");
//         calcularVelocidad();
//     });
// };

// function calcularVelocidad(){
//     let timeDuration = (endTime - startTime) / 1000;
//     let bitsCargados = imageSize * 8;
//     let speedInBps = bitsCargados / timeDuration;
//     let speedInKbps = speedInBps / 1024;
//     let speedInMbps = speedInKbps / 1024;

//     totalBitSpeed += speedInBps;
//     totalKbSpeed += speedInKbps;
//     totalMbSpeed += speedInMbps;

//     testCompletado ++;

//     if(testCompletado === numTests){
//         let averageSpeedInBps = (totalBitSpeed/numTests).toFixed(2);
//         let averageSpeedInKbps = (totalKbSpeed/numTests).toFixed(2);
//         let averageSpeedInMbps = (totalMbSpeed/numTests).toFixed(2);
    
//         bitSpeed.innerHTML += `${averageSpeedInBps}`;
//         kbpsSpeed.innerHTML += `${averageSpeedInKbps}`;
//         mbpsSpeed.innerHTML += `${averageSpeedInMbps}`;
//         info.innerHTML = "Test Finalizado!";

//     }else{
//         startTime = new Date().getTime();
//         image.src = imageApi;
//     } 
// }

// const init = async() => {
//     info.innerHTML = "Testeando...";
//     startTime = new Date().getTime();
//     image.src = imageApi;
// };

// window.onload = () =>{
//     for(let i = 0; i < numTests; i++){
//         init();
//     }
// };

let startTime, endTime;
let imageSize = "";
let image = new Image();
let bitSpeed = document.getElementById("bits"),
    kbSpeed = document.getElementById("kbs"),
    mbSpeed = document.getElementById("mbs"),
    info = document.getElementById("info");

let totalBitSpeed = 0;
let totalKbSpeed = 0;
let totalMbSpeed = 0;
let numTests = 2;
let testCompleted = 0;

// Get random image from unsplash.com
let imageApi = "https://source.unsplash.com/random?topic=nature";

// When image loads
image.onload = async function () {
    endTime = new Date().getTime();

    // Get image size
    await fetch(imageApi).then((response) => {
        imageSize = response.headers.get("content-length");
        calculateSpeed();
    });
};

// Function to calculate speed
function calculateSpeed() {
    // Time taken in seconds
    let timeDuration = (endTime - startTime) / 1000;
    // Total bits
    let loadedBits = imageSize * 8;
    let speedInBts = loadedBits / timeDuration;
    let speedInKbs = speedInBts / 1024;
    let speedInMbs = speedInKbs / 1024;

    totalBitSpeed += speedInBts;
    totalKbSpeed += speedInKbs;
    totalMbSpeed += speedInMbs;

    testCompleted++;

    // If all tests completed (we get 5 image then calculate average)
    if (testCompleted === numTests) {
        let averageSpeedInBps = (totalBitSpeed / numTests).toFixed(2);
        let averageSpeedInKbps = (totalKbSpeed / numTests).toFixed(2);
        let averageSpeedInMbps = (totalMbSpeed / numTests).toFixed(2);

        // Display average speeds
        bitSpeed.innerHTML += `${averageSpeedInBps}`;
        kbSpeed.innerHTML += `${averageSpeedInKbps}`;
        mbSpeed.innerHTML += `${averageSpeedInMbps}`;
        info.innerHTML = "Testeo Finalizado!";
    } else {
        // Run the next test
        startTime = new Date().getTime();
        image.src = imageApi;
    }
}

// Initial function to start tests
const init = async () => {
    info.innerHTML = "Testeando...";
    startTime = new Date().getTime();
    image.src = imageApi;
};

// Run tests when window loads
window.onload = () => {
    for (let i = 0; i < numTests; i++) {
        init();
    }
};