var gradeList = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII"];
var inputIds = ["name", "science", "maths", "history", "geography", "english"];

window.addEventListener("load", function() {
  createOptions("grade");
  createOptions("getGrade");
  createStudentTables();

  document.getElementById("create").addEventListener("click", function() {

    if(areInputsValid()) {
      var gradeNo = document.getElementById("grade").value;
      var table = document.getElementById("table_" + gradeNo);
      var sum = 0;

      for(var index = 0; index < inputIds.length; index++) {
        var value = document.getElementById(inputIds[index]).value;
        appendElement(table, "div", null, value, null, (inputIds[index] + ((index == 0) ? "Cell": "Marks")));

        if(index > 0) {
          sum += parseInt(value);
        }
      }

      appendElement(table, "div", null, sum, null, "totalMarks");
    }
  });

  var previousTable = null;

  document.getElementById("displayButton").addEventListener("click", function() {
    var gradeNo = document.getElementById("getGrade").value;
    var currentTable = document.getElementById("table_" + gradeNo);

    if(previousTable != null) {
      previousTable.style.display = "none";
    }

    currentTable.style.display = "grid";

    previousTable = currentTable;
  });
});

function appendElement(parent, elementType, elementId = null, data, defaultValue = null, className = null) {
  var newElement = document.createElement(elementType);
  newElement.innerHTML = data;

  if(elementId != null) {
    newElement.id = elementId;
  }

  if(className != null) {
    newElement.classList.add(className);
  }

  if(defaultValue != null) {
    newElement.value =  defaultValue;
  }

  parent.appendChild(newElement);
}

function createOptions(selectId) {
  for(var index = 0; index < gradeList.length; index++) {
    appendElement(document.getElementById(selectId), "option", null, gradeList[index], (index + 1));
  }
}

function createStudentTables() {
  var tableHeaders = ["Name", "Science", "Maths", "History", "Geography", "English", "Total"];
  var tableBox = document.getElementById("tableContainer");

  for(var gradeNo = 1; gradeNo <= 12; gradeNo++) {
    appendElement(tableBox, "div", ("table_" + gradeNo), "", null, "studentTable");

    var currentTable = document.getElementById("table_" + gradeNo);
    for(var index = 0; index < tableHeaders.length; index++) {
      appendElement(currentTable, "div", null, tableHeaders[index], null, "header");
    }
  }
}

function areInputsValid() {
  for(var index = 0; index < inputIds.length; index++) {
    var value = document.getElementById(inputIds[index]).value;

    if(value == "") {
      return false;
    }
    else if(index > 0) {
      if((value < 0) || (value > 100)) {
        return false;
      }
    }
  }

  return true;
}