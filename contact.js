var filterObject = {
    "Twitter": {},
    "Facebook": {},
    "Snapchat": {},
    "MySpace": {}
}
window.onload = function(){
    var filterSel = document.getElementById("filter");
    for (var x in this.filterObject) {
        filterSel.options[filterSel.options.length] = new Option(x, x);
      }
}