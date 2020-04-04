function pyramidRow(nodeCount, level, extraPadding = "") {
    // '0.' refers to on node.
    var printRow = "";
    printRow += extraPadding;

    for(var count1 = nodeCount; count1 <= level; count1++) { // for left dotted triangle.
        printRow += ".";
    }

    for(var count2 = 1; count2 <= nodeCount; count2++) { // for middle equilateral triangle.
        printRow += "0.";
    }

    for(var count3 = nodeCount; count3 < level; count3++) { // for right dotted triangle.
        printRow += ".";
    }

    printRow += extraPadding;
    console.log(printRow);
}

function pyramid(level) {
    for(var rowCount = 1; rowCount <= level; rowCount++) {
        pyramidRow(rowCount, level);
    }
}

function inversePyramid(level, isRhombus = false) {
    for(var rowCount = level; rowCount >= 1; rowCount--) {
        pyramidRow(rowCount, level, ((isRhombus) ? "." : ""));
    }
}

function rhombus(level) {
    pyramid(level);
    inversePyramid(level - 1, true);
}

pyramid(11);
inversePyramid(11);
rhombus(7);