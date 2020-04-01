var data = {
    list: [3, 4, 2, 5, 3, 0, 2, 4, 3, 6, 3, 9, 6, 5, 7, 8, 10, 11],
    key: 6,
    occurance: function() {
        var listLength = this.list.length, keyCount = 0;

        for(var index = 0; index < listLength; index++) {
            if(this.list[index] == this.key) {
                keyCount++;
            }
        }

        return keyCount;
    }
}

console.log(data.key, "occurs", data.occurance(), "times in the list.");