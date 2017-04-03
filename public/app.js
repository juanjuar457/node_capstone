
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
//loop through units, append an option to the select list

function  init_main_form () {

	for(i=0; i < state.form_data.units.length; i++){
		$('#units').append('<option value="' + state.form_data.units[i].value +'">' + state.form_data.units[i].name +'</option>') 
	};	

	$('#add_material').click(add_material_click); 

};
//this will be moved, login 1st etc.... don't know where quite yet. 
init_main_form();

//func is like control arm. 
function add_material_click (event) {
	event.preventDefault();
	add_material(); 
	render_material_list();
}

function add_material () {. //fill me out!!!!! 
	var material = {};
	material.vendor = $('#vendor').val(); //do same for rest, quantity prod cat and units 
	state.requested_materials.push(material);
}

function render_material_list () {
	var dom = $('#requested_materials');
	dom.empty(); //flushes out material

	for(i=0; i < state.requested_materials; i++){
		dom.append('<p class="example_entry">'+state.requested_materials[i].product +'/ ct:'+ state.requested_materials[i].quantity +
		'/'+ state.requested_materials[i].vendor +'/' + state.requested_materials[i].unit_size + state.requested_materials[i].units + '</p>')
	}
}

//put together the size and the units glue with css 1 big block...

//NEED TO ADD MOCK DATA HERE AS WELL!!!


//on enter keyboard stroke, or Add item will submit!! 

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
