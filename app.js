const colors = ["green", "red", "rgba(133,122,200)", "#f15025","yellow","orange","golden"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener('click', ()=>{
    const randomColor = getRandomColor()
    document.body.style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
});

function getRandomColor(){
    return Math.floor(Math.random()* colors.length);
}
