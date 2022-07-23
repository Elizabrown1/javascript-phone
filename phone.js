
var verify = true;
		show=()=>{
			if (verify===true) {
			$('.screen').toggleClass('active')
			verify=false;	
			console.log(verify)
			}
			else if (verify===false) {
				$('.screen').toggleClass('active')
			      verify=true;
			console.log(verify)

			}
		}

		setInterval(myname,1000);
		var totalTime
		
		function myname(){
			var date = new Date()
			totalTime = date.toLocaleTimeString();
			myresult.innerHTML=totalTime
		}
	// 	function save(){
 //     localStorage.on_off=JSON.stringify(verify);	
	// }
	// function get(){
	// 	verify=JSON.parse(localStorage.on_off)
	// 	console.log(verify)
	// 	show();
 //     	}