elem = $("#test")[0];
elem.click(() => console.log("hello"));
console.log(elem);

var events = (jQuery._data || jQuery.data)(elem);
console.log(`getEventListeners(document.getElementById("test"));`);
