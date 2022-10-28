const body = document.querySelector('body')
body.addEventListener("mousemove", function(event) {
    mouseMove(event);
});

const ball = document.querySelectorAll('.ball')
const ans = document.querySelector('.answer')
let width = window.innerWidth;
let height = window.innerHeight;
window.addEventListener("resize", function() {
    width = window.innerWidth;
    height = window.innerHeight;
  });
function changeBalls(){
  ball.forEach(b => {
    let c = Math.floor(Math.random()*16777215).toString(16);
    let w = Math.floor(Math.random() * (width - 0 + 1) + 0) - 100
    let h = Math.floor(Math.random() * (height - 0 + 1) + 0) - 100
    b.style.transform = `translate(${w}px,${h}px)`
    b.style.backgroundColor = `#${c}`
});
}
setInterval(changeBalls, 2450)

function mouseMove(e){
    let x = e.clientX;
    let y = e.clientY;
}
function findMiddleIndex(arr, n)
{
    let leftSum = 0 ;
    for (let i = 0; i <= n; i++)
    {
        leftSum += +arr[i];
        let rightSum = 0;    
        for(let c = i+2; c <= n; c++){
            rightSum += +arr[c]
        }
        if(rightSum == leftSum){
            return i+1
        }
    }
    return -1;
}
function determineWetherThereAreTwoSubarrays(){
    const arrString = document.getElementById("arrayInput").value;
    const arr = arrString.split(' ')
   
    n = arr.length -1;
    const index = findMiddleIndex(arr,n)
    let message;
    if(index === -1 || index === n || n == 0){
        message = "Cannot be found, invalid array" 
    }
    else{
        message = "Position of middle index beetween two arrays is " + index; 
    }
    ans.innerHTML = message;
    ball.forEach(b => {
        b.innerHTML = message
    })
}