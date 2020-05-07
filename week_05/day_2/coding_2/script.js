var inputIds = ["pName", "pPrice", "pQuantity"];
var styleList = ["fSize", "fColor", "bColor"];

window.addEventListener("load", function() {
  var table = document.getElementById("productList");

  document.getElementById("saveData").addEventListener("click", function() {
    if(checkValidity(inputIds)) {
      for(var index = 0; index < inputIds.length; index++) {
        var inputData = document.getElementById(inputIds[index]).value;
        pushElementTo(table, "div", inputData);
      }
    }
  });

  var styleButtons = document.getElementsByClassName("changeStyle");

  for(var index = 0; index < styleButtons.length; index++) {
    styleButtons[index].addEventListener("click", function() {
      var dataElement = this.parentElement.querySelector("input");
      if(checkValidity([dataElement.id])) {
        switch(dataElement.id) {
          case "fSize":
            table.style.fontSize = dataElement.value + "px";
            break;
          case "fColor":
            table.style.color = dataElement.value;
            break;
          case "bColor":
            var altTableCells = table.querySelectorAll(":nth-child(odd)");
            for(var index = 0; index < altTableCells.length; index++) {
              altTableCells[index].style.backgroundColor = dataElement.value;
            }
            break;
          default:
        }
      }
    });
  }
});

function pushElementTo(parent, tagName, data) {
  var newElement = document.createElement(tagName);

  newElement.innerHTML = data;

  parent.appendChild(newElement);
}

function checkValidity(idList = []) {
  for(var index = 0; index < idList.length; index++) {
    var element = document.getElementById(idList[index]);

    if(element.value == "") {
      return false;
    }

    if(element.type == "number") {
      var min = parseInt(element.min);
      var max = parseInt(element.max);
      var value = parseInt(element.value);

      if((value < min) || (value > max)) {
        return false;
      }
    }
  }

  return true;
}