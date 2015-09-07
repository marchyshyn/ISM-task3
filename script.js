function myFunction() {
  var square = prompt("Please enter square size in px");
  var squareSize = parseInt(square);
  if (square != null) {
   var wrapperWidth = $('.wrapper').width();
   var wrapperHeight = $('.wrapper').height();
   var elements = (wrapperWidth / squareSize |0) * (wrapperHeight / squareSize |0);
   var lineItems = wrapperWidth / squareSize |0;
   var columnItems = wrapperHeight / squareSize |0;
   for (var i = 0; i < elements; i++) {
    $('.wrapper').append('<div class="child"><div>');
    $('.child').css({
     width: squareSize,
     height: squareSize
   });
  };
  $('.child').on({
    click: function() {
      var indexCount = $('.wrapper .child');
      var n = indexCount.index(this) + 1;
      var indexPos = $('.wrapper .child:nth-child('+ n +')').position();
      var positionX = indexPos.left / squareSize;
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
      for (var i = 0; i <= positionX; i++) {
        (function () {
          setTimeout(function() {
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
            lrTop++;
            arr.push(prev);
          }, i * 500);
        })(i);
      };
      //------------------------left right bottom level------------------//
      for (var i = 0; i <= positionX2; i++) {
        (function () {
          setTimeout(function() {
            var nextX = n + lrBottom;
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
            lrBottom++;
            arr.push(next);
          }, i * 500);
        })(i);
      };
      //------------------------top ++ ------------------//
      for (var i = 0; i <= positionY; i++) {
        (function () {
          setTimeout(function() {
            topY = n - (lineItems * topCount);
            var top = $('.wrapper .child:nth-child('+ topY +')');
            arr.push(top);
            for (var k = 1; k <= topCount; k++) {
              var topRightY2 = n - (lineItems * topCount) + k;
              var topRight2 = $('.wrapper .child:nth-child('+ topRightY2 +')');
              var topLine = topRight2.position();
              var trLimit = topLine.left / squareSize;
              var trLimit2 = (indexEl.left / squareSize) + 1;
              if (trLimit >= trLimit2 && trLimit <= lineItems) {
                arr.push(topRight2);
              }
            };
            for (var kk = 1; kk <= topCount; kk++) {
              var topLeftY2 = n - (lineItems * topCount) - kk;
              var topLeft2 = $('.wrapper .child:nth-child('+ topLeftY2 +')');
              var topLine2 = topLeft2.position();
              var tlLimit = topLine2.left / squareSize;
              var tlLimit2 = (indexEl.left / squareSize) + 1;
              if (tlLimit <= tlLimit2 ) {
                arr.push(topLeft2);
              }
            };
            topCount++;
          }, i * 500);
})(i);
};
      //------------------------bottom ------------------//
      for (var i = 0; i < positionY2; i++) {
        (function () {
          setTimeout(function() {
            bottomY = n + (lineItems * bottomCount);
            var bottom = $('.wrapper .child:nth-child('+ bottomY +')');
            arr.push(bottom);
            for (var kk = 1; kk <= bottomCount; kk++) {
              var bottomLeftY2 = n + (lineItems * bottomCount) - kk;
              var bottomLeft2 = $('.wrapper .child:nth-child('+ bottomLeftY2 +')');
              var bottomLine = bottomLeft2.position();
              var blLimit = bottomLine.left / squareSize;
              var blLimit2 = (indexEl.left / squareSize) + 1;
              if (blLimit <= blLimit2 ) {
                arr.push(bottomLeft2);
              }
            };
            for (var k = 1; k <= bottomCount; k++) {
              var bottomRightY2 = n + (lineItems * bottomCount) + k;
              var bottomRight2 = $('.wrapper .child:nth-child('+ bottomRightY2 +')');
              var bottomLine2 = bottomRight2.position();
              var brLimit = bottomLine2.left / squareSize;
              var brLimit2 = (indexEl.left / squareSize) + 1;
              if (brLimit >= brLimit2 && brLimit <= lineItems) {
                arr.push(bottomRight2);
              }
            };
            bottomCount++;
          }, i * 500);
          })(i);
          };
          for (var i = 1; i < elements; i++) {
            (function () {
              setTimeout(function() {
                jQuery.each(arr, function() {
                  $(this).addClass('click')
                })
              }, i * 500);
            })(i);
          };
        }
      })
    }
}