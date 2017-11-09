var root = 'https://jsonplaceholder.typicode.com';
/*
$.ajax({
  url: root + '/posts/1',
  method: 'GET'
}).then(function(data) {
  console.log(data);
  //document.getElementById("content").innerHtml="<pre>"+data+"<pre/>";
});
*/

function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("content").innerHTML = "<pre>"+this.responseText+"</pre>";
    }
  };
  xhttp.open("GET", root+"/posts/1", true);
  xhttp.send();
}

loadDoc();