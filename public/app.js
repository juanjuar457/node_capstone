
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

var mock_data = {
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
			id: "9181",
			name: "Rebecca",	
			type: 'admin'
		}, //say admin or guest

		{
			id: "1189",
			name: "Dolcemar",
			type: 'guest',
		}
	],

	company: {
		id: 7744,
		name: "Solutions Pharmacy"	
	}
}; 

//set up conditional to check for password entered client side in the index/admin.html
// function init_index_form () {
// 	if()
// }


function  init_main_form () {

	for(i=0; i < state.form_data.units.length; i++){  //sets up the drop down with the units. 
		$('#units').append('<option value="' + state.form_data.units[i].value +'">' + state.form_data.units[i].name +'</option>') 
	};	

	$('#add_material').click(add_material_click); 

};

//this will be moved, login 1st etc.... don't know where quite yet. 
init_main_form();

function pass_submit_control () {}//when user hits the submit, depending on what page they are on.
//how to set that up for diff pages?? just given them the correct id to target it form the js!!! 

//need 1 for admin and 1 for guest! 

//need to use page rederection 
function check_pass_admin () {} 
function page_redirection () {} 

init_index();

function init_index () {
	//event on form submit, go to check pass 
	$('#login').click(check_pass_guest)


}

//console log works here! 
function check_pass_guest (event) {

	event.preventDefault();
	var inpass = $('#guest').val() //id for input bar on start screen
	// console.log(inpass)
	// console.log(mock_data.user[1].id)
	if (inpass === mock_data.user[1].id) {
		// $('#input_alert').append('good job!')
		alert('good job!');
		window.location.href="main_page.html"
	} else {
		alert('u suck!');
		window.location.href="index.html"
	};

}

//make alert box if correct or incorrect 
//use conditional 
function render_alert_for_Login () {

}


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


