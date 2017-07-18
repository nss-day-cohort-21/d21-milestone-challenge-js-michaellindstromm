let heightOfTree = document.getElementById("treeHeight");
let symbolUsed = document.getElementById("symbolUsed");
let buildTree = document.getElementById("buildTree")
let postArea = document.getElementById("treeOutput")
let arraySym = [];

let obj ={};



buildTree.addEventListener("click", function(){
  if(heightOfTree.value === "" || symbolUsed.value === ""){
    alert("Please enter value in both fields!")
  } else {
    obj.height=heightOfTree.value;
    obj.symbol=symbolUsed.value;
    makeMyTree(obj);
  }
})

function makeMyTree(obj){
  for (var i = 0; i < obj.height; i++) {
    arraySym[i] = obj.symbol;
    console.log(" ".repeat(obj.height-i) + arraySym[i].repeat(i+1) + arraySym[i].repeat(i));
  }
}
