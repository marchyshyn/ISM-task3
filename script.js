function myFunction() {
    var square = prompt("Please enter square size in px");
    var squareSize = parseInt(square);
    if (square != null) {
    	var wrapper = $('.wrapper').width();
    	var wrapperHeight = $('.wrapper').height();
    	var a = (wrapper / squareSize |0) * (wrapperHeight / squareSize |0);	
        var items = wrapper / squareSize |0;
        for (var i = 0; i < a; i++) {
          $('.wrapper').append('<div class="child">' + i +'<div>');
          $('.child').css({
             width: squareSize,
             height: squareSize
         });
      };
      $('.child').on({
        click: function() {
            var position = $(this).position();
            var  squarePosY = (position.top / square) + 1;
            console.log(squarePosY);
            var  squarePosX = (position.left / square) + 1;
            console.log(squarePosX);
            var elem = '90px';
            var el = $('.child').position();
            console.log(el.top);
            //if ($('.child').position())
            
        }
      })
}
}





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
//             click: function() {
//             var ind = $('.wrapper .child');
//             var n = ind.index(this) + 1;
//                 for (var i = 0; i <= a; i++) {
//                     (function () {
//                         setTimeout(function() {
//                             var select = $('.wrapper .child:nth-child('+ n +')');
//                             console.log(n);
//                             var prev = select.next();
//                             prev.css({background: 'gold'});
//                             n++;
//                         }, i * 100);
//                     })(i);
//                 };
//             }