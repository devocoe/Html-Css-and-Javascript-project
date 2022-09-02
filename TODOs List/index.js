function showitem() {
  itemarray = localStorage.getItem("itemarray");
  itemarray = JSON.parse(itemarray);
  // console.log(itemarray)
  let itemlist = document.getElementById("itemlist");
  let str = "";
  itemarray.forEach((e, i) => {
    str += `<div class="list-group-item my-2">${e} <button style="float:right;" class="btn btn-danger btn-sm" Onclick = del(${i})>Delete</button></div>`;
  });
  itemlist.innerHTML = str;
}

function additem() {
  if ((item = document.getElementById("item").value != "")) {
    if (localStorage.getItem("itemarray") == null) {
      item = document.getElementById("item").value;
      let itemarray = [];
      itemarray.push(item);
      itemstr = JSON.stringify(itemarray);
      localStorage.setItem("itemarray", itemstr);
      // console.log(localStorage)
      showitem();
      item = document.getElementById("item").value = "";
    } else {
      itemarray = [];
      item = document.getElementById("item").value;
      itemarray = localStorage.getItem("itemarray");
      itemarray = JSON.parse(itemarray);
      itemarray.push(item);
      itemstr = JSON.stringify(itemarray);
      localStorage.setItem("itemarray", itemstr);
      // console.log(localStorage)
      showitem();
      item = document.getElementById("item").value = "";
    }
  }
}

showitem();

function clean() {
  let user = confirm("Do you want to continue");
  if (user) {
    localStorage.clear();
    let itemlist = document.getElementById("itemlist");
    itemlist.innerHTML = "";
  } else {
    console.log("not delted");
  }
}

function del(i) {
  itemarray = localStorage.getItem("itemarray");
  itemarray = JSON.parse(itemarray);
  itemarray.splice(i, 1);
  itemstr = JSON.stringify(itemarray);
  localStorage.setItem("itemarray", itemstr);
  showitem();
}
