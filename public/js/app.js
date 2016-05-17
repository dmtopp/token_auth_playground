window.onload = function() {
  var token = sessionStorage.getItem('token');
  if (token) {
    httpChannel.setRequestHeader("Authorization", "Bearer " + token, false);
  }

  console.log('the window is loaded');
  document.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log(e.target.action);
    var nodes = e.target.childNodes;
    var url = e.target.action;
    var submitData = {};
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i].name && nodes[i].value) {
        // console.log(nodes[i].name + ": " + nodes[i].value);
        submitData[nodes[i].name] = nodes[i].value;
      }
    }

    if (token) {
      submitData.token = token;
    }
    console.log(submitData);

    var request = new XMLHttpRequest();
    request.open('POST', url, true);

    request.setRequestHeader('Content-Type', 'application/json');
    // request.setRequestHeader('Accept', 'application/json');

    request.onload = function() {
      if (request.status == 200) {
        var response = JSON.parse(request.response);
        console.log(response.message);
        sessionStorage.setItem('token', response.token);
      } else {
        console.log('Oh no! An error! ' + request.status);
        console.log(request.responseText);
      }
    }

    request.send(JSON.stringify(submitData));
  })
}

function navigate(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);

  request.setRequestHeader('Content-Type', 'text/html');
  request.setRequestHeader('Authorization', "Bearer " + token);

  request.onload = function() {
    if (request.status == 200) {
      console.log(response);
      sessionStorage.setItem('token', response.token);
    } else {
      console.log('Oh no! An error! ' + request.status);
      console.log(request.responseText);
    }
  }

  request.send(JSON.stringify(submitData));

}
