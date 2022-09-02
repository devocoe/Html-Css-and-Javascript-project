var chardata = [];

function search() {
  let value = document.getElementById("search").value;

  data = chardata.filter((char) => {
    return (
      char.name.toLowerCase().includes(value.toLowerCase()) ||
      char.actor.toLowerCase().includes(value.toLowerCase())
    );
  });

  let container = document.getElementById("container");
  container.innerHTML = "";
  data.map((e) => {
    display(e.name, e.actor, e.house, e.image);
  });


  if (container.innerHTML == ""){
    let div = document.createElement('div')
    div.innerText = 'oops No Result Found!'
    div.classList.add('msg')
    container.append(div)
  }

}



function display(name, aname, house, image) {
  let container = document.getElementById("container");
  
  container.innerHTML += `<div class="card">
    <div>
        <h3>${name}</h3>
        <h5>${aname}</h5>
        <h6>House : ${house}</h6>
    </div>
    <img src="${image}" alt="">
    </div>`;
}

fetch("http://hp-api.herokuapp.com/api/characters")
  .then((rslt) => {
    return rslt.json();
  })
  .then((data) => {
    chardata = data;
    container.innerHTML = ''
    data.map((e) => {
      display(e.name, e.actor, e.house, e.image);
    });
  })
  .catch((err) => {
    console.log(err);
  });




  function load(){
    let loader = document.getElementById('loader')
    loader.style.display = 'none'
  }