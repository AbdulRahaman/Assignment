
function allowDrop(ev) {
  ev.preventDefault();
}

/*
  storing dragged object text content (we can story id's in real time)
*/
function drag(ev) {
  ev.dataTransfer.setData("item", ev.target.innerText);
}

/*
  Fetching stored value while dragging and passing this value to angular
*/
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("item");
  var scope = angular.element(document.getElementById('container')).scope();
  scope.dragAndDropListner(data);
}