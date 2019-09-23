function getAttribute(form,name){
	return form.elements[name].value
}
function calculateCocomo(){
// Read size in SLOC
var sloc = document.getElementById('size').value
var kloc = sloc / 1000.0
// Read mode of project
var dev_mode = document.getElementById('dev_mode')
var mode = dev_mode.elements["mode"].value

mode = mode.toLowerCase()
// calculate coeficients
a = 3.2
b = 1.05

if (mode == "semi"){
	a = 3.0
	b = 1.12
}else if(mode == "embedded"){
	a = 2.8
	b = 1.2
}

// Read Product attributes
var cost_drivers = document.getElementById('cost_drivers')
console.log(getAttribute(cost_drivers,"product"))

}

window.onload = function(){
	calculateCocomo();

}


