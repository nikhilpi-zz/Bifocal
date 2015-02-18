(function() {
  this.Sidebar = function(data){
    $('body').prepend('<div class="context-sidebar"><div class="context-side-clicker"></div><div id="context-body"></div></div>')
    var templates;
  
    //Get templates   
    $.ajax({
      url: 'templates/sidebar.handlebars',
      cache: true,
      success: function(data) {
        templates  = Handlebars.compile(data);
        }
    });

    function tagKeywords(data){
      for(var keyI=0; keyI < Object.keys(data).length; keyI++){
        var keyword = data[Object.keys(data)[keyI]];
        keyword.keyVariants.sort(function(a, b){
          return b.length - a.length;
        });
        var regex = '';
        for(var vI = 0; vI < keyword.keyVariants.length; vI++){
          regex += keyword.keyVariants[vI]  + '|';
        }
        regex = regex.substring(0, regex.length - 1);
        var re = new RegExp(regex,'g');
        $('#content').html($('#content').html().replace(re, function(s){
          return '<span class="context" keyword="'+ Object.keys(data)[keyI] +'">' + s + "</span>";
        }));
      }
    }
    tagKeywords(data);

    function renderKeyword(keyword){
      $('#context-body').empty();
      var sideBarData = data[keyword];
      var sideBarhtml  = templates(sideBarData);
      $('#context-body').append(sideBarhtml)
    }
    
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

  };
  

})();   