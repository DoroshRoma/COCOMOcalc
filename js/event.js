function getAttribute(form,name){
	return form.elements[name].value
}
function getProductProd(product){
	var rel_attr = product.product
	var db_attr = product.db
	var comp_attr = product.comp  
	var reliabil_rate = {
		VL: 0.75,
		L: 0.88,
		N: 1,
		H: 1.15,
		VH: 1.4,
		XH: 1

	}
	var db_size = {
		VL: 1,
		L: 0.94,
		N: 1,
		H: 1.08,
		VH: 1.16,
		XH: 1
	}
	var comp_rate = {
		VL: 0.7,
		L: 0.85,
		N: 1,
		H: 1.15,
		VH: 1.3,
		XH: 1.65
	}
	return parseFloat(reliabil_rate[rel_attr]) * parseFloat(db_size[db_attr])* parseFloat(comp_rate[comp_attr])

}
function getSoftwareProd(software){
	var time_attr = software.time
	var storage_attr = software.storage
	var vm_attr = software.vm
	var turn_attr = software.turn
	
	var time = {
		VL: 1,
		L: 1,
		N: 1,
		H: 1.11,
		VH: 1.3,
		XH: 1.66
	}
	var storage = {
		VL: 1,
		L: 1,
		N: 1,
		H: 1.06,
		VH: 1.21,
		XH: 1.56
	}
	var vm = {
		VL: 1.0,
		L: 0.87,
		N: 1,
		H: 1.15,
		VH: 1.3,
		XH: 1
	}
	var turn = {
		VL: 1,
		L: 0.87,
		N: 1,
		H: 1.07,
		VH: 1.15,
		XH: 1
	}
	return parseFloat(time[time_attr]) * parseFloat(storage[storage_attr])
	* parseFloat(vm[vm_attr]) * parseFloat(turn[turn_attr])

}
function getTeamProd(team){
	var analyst_attr = team.analyst
	var app_attr = team.app
	var prog_attr = team.prog
	var expr_attr = team.expr
	var lang_attr = team.lang

	var analyst = {
		VL: 1.46,
		L: 1.19,
		N: 1,
		H: 0.86,
		VH: 0.71,
		XH: 1
	}
	var app = {
		VL: 1.29,
		L: 1.13,
		N: 1,
		H: 0.91,
		VH: 0.82,
		XH: 1
	}
	var prog = {
		VL: 1.42,
		L: 1.17,
		N: 1,
		H: 0.86,
		VH: 0.7,
		XH: 1
	}
	var expr = {
		VL: 1.21,
		L: 1.1,
		N: 1,
		H: 0.9,
		VH: 1,
		XH: 1
	}
	var lang = {
		VL: 1.14,
		L: 1.07,
		N: 1,
		H: 0.95,
		VH: 1,
		XH: 1
	}
	return parseFloat(analyst[analyst_attr]) * parseFloat(app[app_attr])
	* parseFloat(prog[prog_attr]) * parseFloat(expr[expr_attr]) * parseFloat(lang[lang_attr])
}
function getProjectProd(project){
	var moda_attr = project.moda
	var tools_attr = project.tools
	var dev_attr = project.dev

	var moda = {
		VL: 1.24,
		L: 1.1,
		N: 1,
		H: 0.91,
		VH: 0.82,
		XH: 1
	}
	var tools = {
		VL: 1.24,
		L: 1.1,
		N: 1,
		H: 0.91,
		VH: 0.83,
		XH: 1
	}
	var dev = {
		VL: 1.23,
		L: 1.08,
		N: 1,
		H: 1.04,
		VH: 1.1,
		XH: 1
	}
	return parseFloat(moda[moda_attr]) * parseFloat(tools[tools_attr])
	* parseFloat(dev[dev_attr])
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
var product_attr = {
	product: getAttribute(cost_drivers,"product"),
	db: getAttribute(cost_drivers,"db"),
	comp: getAttribute(cost_drivers,"comp")
	}
var software_attr = {
	time: getAttribute(cost_drivers,"time"),
	storage: getAttribute(cost_drivers,"storage"),
	vm: getAttribute(cost_drivers,"vm"),
	turn: getAttribute(cost_drivers,"turn")
	}
var team_attr = {
	analyst: getAttribute(cost_drivers,"analyst"),
	app: getAttribute(cost_drivers,"app"),
	prog: getAttribute(cost_drivers,"prog"),
	expr: getAttribute(cost_drivers,"expr"),
	lang: getAttribute(cost_drivers,"lang")
}
var project_attr = {
	moda: getAttribute(cost_drivers,"moda"),
	tools: getAttribute(cost_drivers,"tools"),
	dev: getAttribute(cost_drivers, "dev")
}
EAF = getProductProd(product_attr) * getSoftwareProd(software_attr) * getTeamProd(team_attr) * getProjectProd(project_attr)
console.log(EAF)
PM = Math.pow(kloc,b) * a * EAF
alert("Costs: "+PM)
}

window.onload = function(){
	calculateCocomo();

}


