function myFunction() {
  var square = prompt("Please enter square size in px");
  var squareSize = parseInt(square);
  if (square != null) {
   var wrapper = $('.wrapper').width();
   var wrapperHeight = $('.wrapper').height();
   var a = (wrapper / squareSize |0) * (wrapperHeight / squareSize |0);
   var items = wrapper / squareSize |0;
   var b = 1;
   for (var i = 0; i < a; i++) {
    $('.wrapper').append('<div class="child">' + i +'<div>');
    $('.child').css({
     width: squareSize,
     height: squareSize
   });
  };
  var count = $('.child').length;
  $('.child').on({
    click: function() {
      var ind = $('.wrapper .child');
      var n = ind.index(this) + 1;
      var items = wrapper / squareSize |0;

      var x = items;
      var y = items;

      for (var i = 0; i <= (a / 2); i++) {
        (function () {
          setTimeout(function() {
        var select = $('.wrapper .child:nth-child('+ n +')');
        var next = $('.wrapper .child:nth-child('+ (n+b) +')');
        var prev = $('.wrapper .child:nth-child('+ (n-b) +')');
        var top = $('.wrapper .child:nth-child('+ (n - x) +')');
        var top2 = $('.wrapper .child:nth-child('+ (n - x + 1) +')');
        var top3 = $('.wrapper .child:nth-child('+ (n - x - 1) +')');
        var bottom = $('.wrapper .child:nth-child('+ (n + y) +')');
        var bottom2 = $('.wrapper .child:nth-child('+ (n + y + 1) +')');
        var bottom3 = $('.wrapper .child:nth-child('+ (n + y - 1) +')');
        b++;
        x++;
        y++;
        var arr = [];
        arr.push(top, bottom, prev, next, select, top2, top3, bottom2, bottom3);
        jQuery.each(arr, function() {
          $(this).css({background: 'red'});
        })
      }, i * 100);
        })(i);
      };
    }
  })
}
}











// var select = $('.wrapper .child:nth-child('+ n +')');
//             var next = $('.wrapper .child:nth-child('+ (n+1) +')');
//             var prev = $('.wrapper .child:nth-child('+ (n-1) +')');
//             var bottom = $('.wrapper .child:nth-child('+ (n - items) +')');
//             var top = $('.wrapper .child:nth-child('+ (n + items) +')');
//             select.css({background: 'red'});
//             next.css({background: 'blue'});
//             prev.css({background: 'green'});
//             bottom.css({background: 'gold'});
//             top.css({background: 'tomato'});

// var position = $(this).position();
//             var  squarePosY = (position.top / squareSize) + 1;
//             console.log(squarePosY);
//             var  squarePosX = (position.left / squareSize) + 1;
//             console.log(squarePosX);

// var sq = squareSize - 1;
//             var elem1 = document.elementFromPoint(((squarePosX - 1) * sq), ((squarePosY - 1) * sq));
//             var elem2 = document.elementFromPoint((squarePosX * sq), ((squarePosY - 1) * sq));
//             var elem5 = document.elementFromPoint((squarePosX * sq), (squarePosY * sq));
//             $(elem1).css({background: 'green'});
//             $(elem2).css({background: 'green'});
//             $(elem5).css({background: 'green'});

// click: function() {
//             var position = $(this).position();
//             var  squarePosY = (position.top / square) + 1;
//             console.log(squarePosY);
//             var  squarePosX = (position.left / square) + 1;
//             console.log(squarePosX);
//             var elem = '90px';
//             var el = $('.child').position();
//             console.log(el.top);
//             //if ($('.child').position())

//         }

// mousedown: function() {
//                 var ind = $('.wrapper .child');
//             var n = ind.index(this) + 1;
//                 for (var i = 0; i <= a; i++) {
//                     (function () {
//                         setTimeout(function() {
//                             var select = $('.wrapper .child:nth-child('+ n +')');
//                             console.log(n);
//                             var prev = select.prev();
//                             prev.css({background: 'gold'});
//                             n--;
//                         }, i * 100);
//                     })(i);
//                 };
//             },
            // click: function() {
            // var ind = $('.wrapper .child');
            // var n = ind.index(this) + 1;
            //     for (var i = 0; i <= a; i++) {
            //         (function () {
            //             setTimeout(function() {
            //                 var select = $('.wrapper .child:nth-child('+ n +')');
            //                 console.log(n);
            //                 var prev = select.next();
            //                 prev.css({background: 'gold'});
            //                 n++;
            //             }, i * 100);
            //         })(i);
            //     };
            // }