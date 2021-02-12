var countSegments = function(s) {
    var arr =  s.split(" ");
    let count = 0;
    for(let i=0; i<arr.length; i++) {
        if (arr[i] != "") {
            ++count;
        }
    }
    return count;
};


countSegments("") // 0

countSegments("  ")  // 0

countSegments(", , , ,        a, eaefa")  // 6

countSegments("Hello")   // 1
