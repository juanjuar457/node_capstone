
// state = {

// }



//on enter keyboard stroke, or Add item will submit!! 

$('.submit_button').click(function {
	console.log('test');
});

// $('button').click($('ul').html(
// 		"<li>" + 'prog ' + "</li>"
 
// 		 // <li>Progesterone</li>`
// 		);
// });

$('form').submit(function(event) {
	event.preventDefault(); 
	console.log(prog) //no console log??!?
	$('p').html("prog");
});
