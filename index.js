let msg = document.getElementById("store");
let mytxt = [];
let unlis = document.getElementById("uorder");
const intxt = document.getElementById("txt");
const delbtn = document.getElementById("del");
const itemfromLocalStorage = JSON.parse( localStorage.getItem("mytxt") );
const tabbtn = document.getElementById("save");

if(itemfromLocalStorage){
mytxt = itemfromLocalStorage;
lists(mytxt);
}

tabbtn.addEventListener('click', function(){

  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    mytxt.push(tabs[0].url);
    localStorage.setItem("mytxt", JSON.stringify(mytxt));
    lists(mytxt);
  })

})

function lists(txt){
  let listItem = "";
  for(let i=0; i< txt.length; i++){
  listItem += `<li>
  <a href= '${txt[i]}' target= '_blank'>${txt[i]} </a>
  </li>`;
}
  unlis.innerHTML = listItem;
}


msg.addEventListener('click', function(){
  mytxt.push(intxt.value);
  intxt.value = "";
  localStorage.setItem("mytxt", JSON.stringify(mytxt));
  lists(mytxt);
});



delbtn.addEventListener('dblclick', function(){
  localStorage.clear();
  mytxt = [];
  lists(mytxt);
})