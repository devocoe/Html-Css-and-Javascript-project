fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "8567faaa7bmsh43513948abe22c2p1fc920jsna198e5ebed9e",
		"x-rapidapi-host": "quotes15.p.rapidapi.com"
	}
})
.then(response => {
	return response.json()
})
.then((data)=>{
    let qoute = data.content
    qoutearea = document.getElementById('qoutearea')
    qoutearea.innerText = qoute
})

.catch(err => {
	console.error(err);
});


function newqoute(){
    location.reload()
}