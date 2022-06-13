    function myFunction1(){
        var x = document.getElementById("myText1").value;
		
		if(isNaN(x)===true){
			alert("");
		}
		else{
			if(x%2==0){
				alert("Even number");
			}
			else{
				alert("Odd number");
			}
		}
    }
	
	function myFunction2(){
		var Array  = [];
		var smth = 0;
		var indicator = true;
		var Sum = 0;
		
		for(var j = 2;j < 20; j++){
			for (var i = 2; i < j; i++) {
				if (j % i == 0) {
					indicator = false;
					break; 
				}
				else{
					indicator = true;
				}
			}
  
			if(indicator == true){
				Array.push(j);
				smth++;
			}
			if(smth === 5){
				break;
			}
		}
		document.getElementById("demo1").innerHTML =Array;
		
		for(let t = 0 ;t<5;t++){
			Sum += Array[t];
		}
		document.getElementById("demo2").innerHTML = Sum;
	}
	
	function myFunction3(){
		var f = document.getElementById("myText3").value;
		
		var s ="0";
		var transform;
		var n = 0;
		for(var i = 0;i<f;i++){
			s = s + "1";
			transform = parseInt(s);
			n = n + transform;
		}
		document.getElementById("demo").innerHTML = n;
	}