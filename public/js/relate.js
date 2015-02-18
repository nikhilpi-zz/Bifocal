$(document).ready( function() {
  
  $('body').prepend('<div class="context-sidebar"><div class="context-side-clicker"></div><div id="context-body"></div></div>')
  var templates;
  var keywordData;

  function init(keyword){
    //get json
    $.getJSON("/data", function(data) {
      keywordData = data;
      console.log(data);
    });

    //get templates
    getTemplateAjax('templates/sidebar.handlebars', function(res){
      templates = res;
    });
  };

  function getTemplateAjax(path, cb) {
    var source;
    var template;
 
    $.ajax({
    url: path, //ex. js/templates/mytemplate.handlebars
        cache: true,
        success: function(data) {
            source    = data;
            template  = Handlebars.compile(source);
            cb(template);
          }
    });
  };

  var open = false;
  var peek = false;
  var currentKeyword = '';
  
  $('span.context').click(function(){
    var keyword = $(this).attr("keyword");
    if (open && currentKeyword !== keyword){
      renderKeyword(keyword);
      currentKeyword = keyword;
    } else if (open && currentKeyword === keyword) {
      open = false;
      $('.context-sidebar').toggleClass('context-show');
    } else {
      $('.context-sidebar').toggleClass('context-show');
      renderKeyword(keyword);
      currentKeyword = keyword;
      open = true;
    }
  });

  $('span.context').hover(function(){
    var keyword = $(this).attr("keyword");
    if (open && currentKeyword !== keyword){
      // renderKeyword(keyword);
      // currentKeyword = keyword;
    } else if (open && currentKeyword === keyword) {
      $('.context-sidebar').toggleClass('context-peak');
    } else if (!open){
      $('.context-sidebar').toggleClass('context-peak');
      renderKeyword(keyword);
      currentKeyword = keyword;
    }
  });

  $('.context-side-clicker').click(function(){
    if (open){
      open = false;
      $('.context-sidebar').toggleClass('context-show');
    } else {
      open = true;
      $('.context-sidebar').toggleClass('context-show');
    } 
  });
    

  function renderKeyword(keyword){
    $('#context-body').empty();
    var sideBarData = keywordData[keyword];
    var sideBarhtml  = templates(sideBarData);
    $('#context-body').append(sideBarhtml)
  }

});   