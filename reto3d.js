


const box= document.querySelector('.fomr');
const card= document.querySelector('.formcon');

box.addEventListener('mousemove', (event) => {
	let xAxis = (event.pageX - window.innerWidth / 2) / 15;
	let yAxis = (window.innerHeight / 2 - event.pageY) / 15;

		card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
		


});

box.addEventListener('mouseenter', (event) => {
     card.style.transition = `all 0.2s ease`;
     setTimeout(function(e){
     	card.style.transition = 'none';
     },400);
	
});


box.addEventListener('mouseleave', (event) => {
	card.style.transition = `transform 0.5s ease`

	card.style.transform = `rotateY(0deg) rotateX(0deg)`;
});
		
