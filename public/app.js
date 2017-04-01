
// state = {

// }

//NEED TO ADD MOCK DATA HERE AS WELL!!!


//on enter keyboard stroke, or Add item will submit!! 

//JQUERY IS BROKEN!!!!
console.log('hello');
$('.submit_button').click(function () {
	console.log('test');
});



$('form').submit(function(event) {
	event.preventDefault(); 
	console.log(prog) //no console log??!?
	$('p').html("prog");
});


var mock_added_items = {
	items_ordered: [
		{
			vendor: "",
			quantity: 0,
			product_name: "",
			catalog_number: 0,
			unit_size: 0,
		}
	],

	user: {
		id: 9181,
		name: "Rebecca",	
		type: 'admin' //say admin or guest
	},

	company: {
		id: 7744,
		name: "Solutions"	
	}
}; 


//from thinkful ex on building client with mock data: 

function getRecentStatusUpdates(callbackFn) {
    setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 100);
}

// this function stays the same when we connect
// to real API later
function displayStatusUpdates(data) {
    for (index in data.statusUpdates) {
       $('body').append(
        '<p>' + data.statusUpdates[index].text + '</p>');
    }
}

// this function can stay the same even when we
// are connecting to real API
function getAndDisplayStatusUpdates() {
    getRecentStatusUpdates(displayStatusUpdates);
}

$(function() {
    getAndDisplayStatusUpdates();
})