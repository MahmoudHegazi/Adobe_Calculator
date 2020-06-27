
const mybject = {
	"numbers" : [],
	"myInputs" : "",
	"num1" : "",
    "num2" : "",
	"num3" : "",
	"num4" : "",
	"num5" : "",
	"num6" : "",
	"num7" : "",
	"num8" : "",
	"ope" : "",
	"result": 0,
	add : () => {
		//function add
		let inputs = mybject.numbers;
		var result = 0;
        var i;
		for (i = 0; i < inputs.length; i++) {
          result += inputs[i];
        }
		mybject.result = result;
	},
	subs : () => {
		// function substrict
		let inputs = mybject.numbers;
        var index = 0;
        var i;
        for (i = 0; i < inputs.length; i++) {
          if (i == 0) {
            inputs[i] = -inputs[i];
           }
		index -= inputs[i];
        }

		mybject.result = index;
	},
	divid : () => {
		// function divide
		//mybject.result = Number(mybject.numbers[0]) / Number(mybject.numbers[1]);
	},
	multi : () => {
		// function multiplay
		let inputs = mybject.numbers;
		var result = 1;
        var i;
		for (i = 0; i < inputs.length; i++) {
          result *= inputs[i];
        }
		mybject.result = result;
	},
	mod : () => {
		// modulu function
		mybject.result = Number(mybject.numbers[0]) % Number(mybject.numbers[1]);
	},
	ce : () => {
		// clean function empty list list = []
		mybject.numbers = [];
	},
	ae : () => {
		// remove last index of array array.pop();
		mybject.numbers.pop();
	},
	insert : function(x){
		mybject.numbers.push();
	},
	converter : () => {
		  var str = mybject.myInputs;
          var res = str.split(",");
          for (var i = 0; i < res.length; i++ ) {
            res[i] = Number(res[i]);     
          }
		  mybject.numbers = res;
	}
	
}

// start

this.num_0.addEventListener("click", num0.bind(this));
function num0() {
   //mybject.numbers.push(0);
   mybject.myInputs += "0";
   this.screen.text += "0";
}

this.num_1.addEventListener("click", num1.bind(this));
function num1() {
    mybject.myInputs += "1";
   //mybject.numbers.push(1);
   this.screen.text += "1";
}
this.num_2.addEventListener("click", num2.bind(this));
function num2() {
	mybject.myInputs += "2";
   //mybject.numbers.push(2);
   this.screen.text += "2";
}
this.num_3.addEventListener("click", num3.bind(this));
function num3() {
	mybject.myInputs += "3";
   //mybject.numbers.push(3);
   this.screen.text += "3";
}
this.num_4.addEventListener("click", num4.bind(this));
function num4() {
	mybject.myInputs += "4";
   //mybject.numbers.push(4);
   this.screen.text += "4";
}
this.num_5.addEventListener("click", num5.bind(this));
function num5() {
	mybject.myInputs += "5";
   //mybject.numbers.push(5);
   this.screen.text += "5";
}

this.num_6.addEventListener("click", num6.bind(this));
function num6() {
	mybject.myInputs += "6";
   //mybject.numbers.push(6);
   this.screen.text += "6";
}
this.num_7.addEventListener("click", num7.bind(this));
function num7() {
	mybject.myInputs += "7";
   //mybject.numbers.push(7);
   this.screen.text += "7";
}
this.num_8.addEventListener("click", num8.bind(this));
function num8() {
	mybject.myInputs += "8";
   //mybject.numbers.push(8);
   this.screen.text += "8";
}
this.num_9.addEventListener("click", num9.bind(this));
function num9() {
	mybject.myInputs += "9";
   //mybject.numbers.push(9);
   this.screen.text += "9";
}
this.ope_add.addEventListener("click", adding.bind(this));
function adding() {
   mybject.ope = "+";
   mybject.myInputs += ",";
   this.screen.text += " + ";
}
this.ope_multi.addEventListener("click", multiplaing.bind(this));
function multiplaing() {
   mybject.myInputs += ",";
   mybject.ope = "*";
   this.screen.text += " * ";
}

this.opp_subtract.addEventListener("click", subtracting.bind(this));
function subtracting() {
   mybject.myInputs += ",";
   mybject.ope = "-";
   this.screen.text += " - ";
}
// = 
this.result.addEventListener("click", final_result.bind(this));
function final_result() {
  	
  if (mybject.ope == "+") {
	  mybject.converter();
	  mybject.add();
	  this.screen.text = mybject.result;
  }
  if (mybject.ope == "*") {
	  mybject.converter();
	  mybject.multi();
	  this.screen.text = mybject.result;
  }
  if (mybject.ope == "-") {
	  mybject.converter();
	  mybject.subs();
	  this.screen.text = mybject.result;
  }  
}
