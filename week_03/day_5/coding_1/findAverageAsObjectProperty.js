var student = {
    name: "Abhinav",
    marks: [60, 81, 82, 31, 41],
    average: function() {
        if(this.marks.length > 0) {
            var marksLength = this.marks.length, sum = 0;

            for(var index = 0; index < marksLength; index++) {
                sum += this.marks[index];
            }
            
            return(sum / marksLength);
        }
    }
};

console.log("The average marks of", student.name, "are", student.average(), ".");