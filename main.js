jQuery.fn.supervisor = function() {

  function startSupervisor() {

    restartSupervisor();

    $.each($('[data-supervisor]'), function() {
      $elem = $(this);
      new Data_supervisor(parseParams($elem));
    });
  }

  function restartSupervisor() {
    // Prevent undbind events of the new created DOM elements.
    $(document).unbind('DOMSubtreeModified');
    $(document).bind('DOMSubtreeModified', function (e) {


      if($(e.target).attr('data-supervisor')) {
        var params = parseParams($(e.target));
        $().supervisor();
      }
    });
  }

  function parseParams(el) {
    var attributes = el.attr('data-supervisor').split('{');
    var fn = attributes[0];
    var options = '{' + attributes[1];

    return [fn, options]
  }

  function Data_supervisor(params) {

    $funcName = params[0];
    $parameters = $.parseJSON(params[1]);

    //Call the function
    eval(params[0] + "()");
  }

  startSupervisor();
};

