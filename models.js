const mongoose = requre('mongoose'); 

//schema for material 

const materialSchema = mongoose.schema({
	vendor: {type: String, required: true},
	quantity: {tyep: String, required: true},
	product_name: {type: String, required: true},
	catalog_number: {type: String, required: true},
	unit_size: {type: String, required: true}
})

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const Material = mongoose.model('Material', restaurantSchema);

module.exports = {Material};