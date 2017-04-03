
var state = {
	form_data: {
		units: [
		{
			name: "grams",
			value: "gm"
		},
		{
			name: "killograms",
			value: "kg"
		},
		{
			name: "milliliters",
			value: "ml"
		}
		], //call to api gets units for you
	},
	requested_materials: []

}

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

	user: [
		{
			id: 9181,
			name: "Rebecca",	
			type: 'admin'
		}, //say admin or guest

		{
			id: 1189,
			name: "Dulcemar",
			type: 'guest',
		}
	],

	company: {
		id: 7744,
		name: "Solutions Pharmacy"	
	}
}; 

//set up conditional to check for password entered client side in the index/admin.html
function init_index_form () {
	if()
}


function  init_main_form () {

	for(i=0; i < state.form_data.units.length; i++){  //sets up the drop down with the units. 
		$('#units').append('<option value="' + state.form_data.units[i].value +'">' + state.form_data.units[i].name +'</option>') 
	};	

	$('#add_material').click(add_material_click); 

};

function render_alert_index () {

}

//this will be moved, login 1st etc.... don't know where quite yet. 
init_main_form();

//func is like control arm basically middle man for functions listed... 
function add_material_click (event) {
	event.preventDefault();
	add_material(); 
	render_material_list();
}

function add_material () { 
	var material = {};	
	
	material.product = $('#product').val();
	state.requested_materials.push(material);

	material.quantity = $('#quantity').val();
	// state.requested_materials.push(material); OOOOPS

	material.vendor = $('#vendor').val(); //do same for rest, quantity prod cat and units 
	// state.requested_materials.push(material);

	material.catalog_number = $('#catalog_number').val(); 
	// state.requested_materials.push(material);

	material.units = $('#units').val();

}

function render_material_list () {
	var dom = $('#requested_materials');
	dom.empty(); //flushes out material

	for(i=0; i < state.requested_materials.length; i++){
		dom.append('<p class="example_entry">'+ state.requested_materials[i].product +'/ count:'+ state.requested_materials[i].quantity + '/' + 
			state.requested_materials[i].catalog_number + '/'+ state.requested_materials[i].vendor + '/' + state.requested_materials[i].units + '</p>')
	}
}

//put together the size and the units glue with css 1 big block...

//NEED TO ADD MOCK DATA HERE AS WELL!!!

//on enter keyboard stroke, or Add item will submit!! 

// console.log('hello');
// $('.submit_button').click(function () {
// 	console.log('test');
// });
// $('form').submit(function(event) {
// 	event.preventDefault(); 
// 	console.log(prog) //no console log??!?
// 	$('p').html("prog");
// });

//from thinkful ex on building client with mock data: 

// function getRecentStatusUpdates(callbackFn) {
// //     setTimeout(function(){ callbackFn(MOCK_STATUS_UPDATES)}, 100);
// // }

// // this function stays the same when we connect
// // to real API later
// function displayStatusUpdates(data) {
//     for (index in data.statusUpdates) {
//        $('body').append(
//         '<p>' + data.statusUpdates[index].text + '</p>');
//     }
// }

// // this function can stay the same even when we
// // are connecting to real API
// function getAndDisplayStatusUpdates() {
//     getRecentStatusUpdates(displayStatusUpdates);
// }

// $(function() {
//     getAndDisplayStatusUpdates();
