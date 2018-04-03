var colorPicker = document.getElementById('colorPicker');
console.log(colorPicker);

var cells = document.getElementsByClassName("cell");
console.log(cells);

for(var i = 0; i < cells.length;i++){
  cells[i].addEventListener("click",function(event){
    event.preventDefault();
    var selectedCell = event.target;
    console.log("selected Cell here: ", selectedCell)
    selectedCell.style.backgroundColor = selectedColor;
  })
}

// default black
  var selectedColor;
  colorPicker.addEventListener("input",function(){
    selectedColor = colorPicker.value;
    console.log("This is selectedColor", selectedColor);
  })
