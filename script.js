function myFunction() {
  var square = prompt("Please enter square size in px");
  var squareSize = parseInt(square);
  if (square != null) {
   var wrapperWidth = $('.wrapper').width();
   var wrapperHeight = $('.wrapper').height();
   console.log(wrapperWidth + ' wrapperWidth');
   console.log(wrapperHeight + ' wrapperHeight');
   var elements = Math.floor(wrapperWidth / squareSize) * Math.floor(wrapperHeight / squareSize);
   console.log(elements + ' elements');
   console.log(Math.floor(wrapperWidth / squareSize));
   console.log((wrapperWidth / squareSize));
   console.log( Math.floor(wrapperHeight / squareSize));
   console.log( (wrapperHeight / squareSize))
   var lineItems = wrapperWidth / squareSize |0;
   var columnItems = wrapperHeight / squareSize |0,
        $html = '',
        $wrapper = $('.wrapper');

   for (var i = 0; i < elements; i++) {
    $html += '<div class="child"></div>';   
  };

  $wrapper.append($html);
    var hue = 'rgb(' + (Math.floor((256-256)*Math.random()) + 50) + ',' + (Math.floor((256-200)*Math.random()) + 100) + ',' + (Math.floor((256-50)*Math.random()) + 100) + ')';
    $('head').append('<style>.child{ width:'+squareSize+'px; height: '+squareSize+'px;} .click{background: '+hue+';} .child:hover{background: '+hue+';} .random-coor{background: '+hue+';}</style>');
  $('.child').on({
    click: function() {

      var indexCount = $('.wrapper .child');
      var n = indexCount.index(this) + 1;
      var indexPos = $('.wrapper .child:nth-child('+ n +')').position();
      var positionX = (indexPos.left / squareSize) - 1;
      var positionX2 = lineItems - positionX - 1;
      var positionY = (indexPos.top / squareSize) + 1;
      var positionY2 = columnItems - (indexPos.top / squareSize);
      var topY = n - lineItems;
      var bottomY = n + lineItems;
      var topCount = 0;
      var lrTop = 0;
      var lrBottom = 0;
      var bottomCount = 0;
      arr = [];
      var select = $('.wrapper .child:nth-child('+ n +')');
      arr.push(select);
      var indexEl = select.position();
      //------------------------left right top level------------------//
      var interval = setInterval(function () {
        var prevX = n - lrTop;
        var prev = $('.wrapper .child:nth-child('+ prevX +')');
        for (var q = 0; q < lrTop; q++) {
              //---left top--//
              var prevX2 = n - (lineItems * q)  - lrTop;
              var prev2 = $('.wrapper .child:nth-child('+ prevX2 +')');
              //---left bottom--//
              var nextX2 = n + (lineItems * q)  - lrTop;
              var next2 = $('.wrapper .child:nth-child('+ nextX2 +')');
              arr.push(prev2, next2);
            };
            
            
            if(lrTop <= positionX){
              arr.push(prev);
              lrTop++;
            }
            //arr.push(prev);
            //start();

      //------------------------left right bottom level------------------//

      var nextX = n + lrBottom;
      console.log(lrBottom + ' lrBottom');
      console.log(positionX + ' positionX' )
      var next = $('.wrapper .child:nth-child('+ nextX +')');
      for (var q = 0; q < lrBottom; q++) {
              //---right top--// 
              var prevX3 = n - (lineItems * q)  + lrBottom;
              var prev3 = $('.wrapper .child:nth-child('+ prevX3 +')');
              //---right bottom--//
              var nextX3 = n + (lineItems * q)  + lrBottom;
              var next3 = $('.wrapper .child:nth-child('+ nextX3 +')');
              arr.push(prev3, next3);
            };
            
            if(lrBottom < (positionX2 - 1)){
              arr.push(next);
              lrBottom++;
            }
            
            
            //start();
      //------------------------top ++ ------------------//

      topY = n - (lineItems * topCount);
      var top = $('.wrapper .child:nth-child('+ topY +')');
      arr.push(top);
      for (var k = 1; k <= topCount; k++) {
        var topRightY2 = n - (lineItems * topCount) + k;
        var topRight2 = $('.wrapper .child:nth-child('+ topRightY2 +')');
        if(topRight2.length){
          var topLine =  topRight2.position();
          var trLimit = topLine.left / squareSize;              

          var trLimit2 = (indexEl.left / squareSize) + 1;
          if (trLimit >= trLimit2 && trLimit <= lineItems) {
            arr.push(topRight2);
          }  
        }              
      };
      for (var kk = 1; kk <= topCount; kk++) {
        var topLeftY2 = n - (lineItems * topCount) - kk;
        var topLeft2 = $('.wrapper .child:nth-child('+ topLeftY2 +')');
        if(topLeft2.length){
          var topLine2 = topLeft2.position();
          var tlLimit = topLine2.left / squareSize;
          var tlLimit2 = (indexEl.left / squareSize) + 1;
          if (tlLimit <= tlLimit2 ) {
            arr.push(topLeft2);
          }  
        }              
      };
      topCount++;
      start();

      //------------------------bottom ------------------//

      bottomY = n + (lineItems * bottomCount);
      var bottom = $('.wrapper .child:nth-child('+ bottomY +')');
      arr.push(bottom);
      for (var kk = 1; kk <= bottomCount; kk++) {
        var bottomLeftY2 = n + (lineItems * bottomCount) - kk;
        var bottomLeft2 = $('.wrapper .child:nth-child('+ bottomLeftY2 +')');
        if(bottomLeft2.length) {
          var bottomLine = bottomLeft2.position();
          var blLimit = bottomLine.left / squareSize;
          var blLimit2 = (indexEl.left / squareSize) + 1;
          if (blLimit <= blLimit2 ) {
            arr.push(bottomLeft2);
          }
        }

      };
      for (var k = 1; k <= bottomCount; k++) {
        var bottomRightY2 = n + (lineItems * bottomCount) + k;
        var bottomRight2 = $('.wrapper .child:nth-child('+ bottomRightY2 +')');
        if(bottomRight2.length) {
          var bottomLine2 = bottomRight2.position();
          var brLimit = bottomLine2.left / squareSize;
          var brLimit2 = (indexEl.left / squareSize) + 1;
          if (brLimit >= brLimit2 && brLimit <= lineItems) {
           arr.push(bottomRight2);
         }
       }

     };
     bottomCount++;
     start();

      if ($('.click').length >= elements){
        clearInterval(interval);
        console.log('exit');
      }
    },300);

$('.reset').on({
      click: function() {
        $('.child').removeClass('click');
        clearInterval(interval);
      }
    })
}

})
}
}

function start () {
  jQuery.each(arr, function() {
    $(this).addClass('click');
  })
}

function randomColor () {
  var hue = 'rgb(' + (Math.floor((256-256)*Math.random()) + 50) + ',' + (Math.floor((256-200)*Math.random()) + 100) + ',' + (Math.floor((256-50)*Math.random()) + 100) + ')';
   $('head').append('<style>.click{background: '+hue+';} .random-coor{background: '+hue+';} .child:hover{background: '+hue+';}</style>');
}

function setRadius () {
  $('.child').toggleClass('radius');
  if($('.child').hasClass('radius')){
    $('.rad').text('Set Square');
  }
  else {
    $('.rad').text('Set Radius');
  }
  
}