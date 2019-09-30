function basicCocomo(){
	var sloc = document.getElementById('size').value
	var ksloc = sloc / 1000.0

	var modeElement = document.getElementById('mode')
	var mode = parseInt(modeElement.options[modeElement.selectedIndex].value)

	a = 2.4
	b = 1.05
	c = 2.5
	d = 0.38
	if (mode == 2){
		a = 3.0
		b = 1.12
		c = 2.5
		d = 0.35
	}else if(mode == 3){
		a = 3.6
		b = 1.2
		c = 2.5
		d = 0.32
	}
	if (ksloc != 0){
		PM = Math.pow(ksloc,b) * a
		TM = Math.pow(PM,d) * c
		SS = PM / TM
		P = ksloc / PM
		res_arr = [PM,TM,SS,P]
		conv_arr = res_arr.map(x => Math.round(x * 100) / 100)

		fields_name = ["pepmon","timemon","personal","productivity"]
		for (let i = 0;i < conv_arr.length ;i++){
			document.getElementById(fields_name[i]).value = conv_arr[i]
		}
	}else{
		alert("Please, type the size :)")
	}

}