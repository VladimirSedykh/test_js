function consoleLog() {

  //console.log($elem, $parameters, 'data!!');
}

function clickElement() {

  $elem.click(function() {
    $elem.html($parameters['message']);
    setTimeout(function(){ $elem.html($parameters['after']); }, 1000);
  });
}

$(document).ready(function() {

  $myRequire('place', 'main.js', function() {

    $().supervisor();

    var html = $('#drag-block').html();
    $('#drag-block').html('').html(html);

    //$myRequire('remove', 'main.js');
  });


});
