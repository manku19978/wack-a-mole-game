let id;
let time;
let current_score = 0;
let high_score = 0;
var cancel;
var image = document.createElement('img');
image.src = "mole.png";

function fillDiv(){
	id = Math.ceil(Math.random() * 9);
	let cell = document.getElementById(id);
	cell.appendChild(image);
	time--;
    document.getElementById('TL').innerText = time;
    if(time === 0){
		clearInterval(cancel);
		image.remove();
		document.getElementById('btn').disabled = false;
        id = undefined;
        if(current_score > high_score){
            high_score = current_score;
            document.getElementById('high-score').innerText = high_score;
        }
    }
}

function startBtn(){
	cancel = setInterval(fillDiv, 2000);
	document.getElementById('btn').disabled = true;
	time = 60;
    current_score = 0;
    document.getElementById('current-score').innerText = current_score;
}

function score(e){
    if(e == id){
		current_score++;
        document.getElementById('current-score').innerText = current_score;
	}
}
