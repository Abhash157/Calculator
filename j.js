
let numField= document.getElementById("numField")
let numbers= document.getElementsByClassName("numbers")
let int= document.getElementsByClassName("int")
let res=document.getElementById("result")
let store= document.getElementById("store")
let mul= document.getElementById("multiply")
let div= document.getElementById("divide")
let value=false;
let clearOn=false;
let replace= false;
let button= document.getElementsByClassName("button")
let cc2Bool=false


function show(e) {
	   num=e
			
			if(cc2Bool==true) {
						cc2Bool=false
			}else {
						for(i=0;i<int.length;i++){
						int[i].removeEventListener("click",cc2)
						}
			}
			
			if(replace==false){
									numField.innerHTML+=num
						}else{
									if(clearOn==true){
													numField.innerHTML=num
									}else{
									 numField.innerHTML=res.innerHTML+num
												res.innerHTML=""
												replace=false;
									}
					 }
			
			numField.style.overflow.scroll="100%"
			numField.scrollLeft= numField.scrollWidth
			
			let stor= store.innerHTML;
			let numF= numField.innerHTML
		if(stor[stor.length-2]==")"){			
	 			stor2= stor.slice(0,-1)
				store.innerHTML=stor2+"*"+e
				numF2= numF.slice(0,-1)
				numField.innerHTML=numF2+"×"+e
		}
		
}
function push(el){
			n=el
			if(replace==false){
						store.innerHTML+=n
			}else {
						store.innerHTML=res.innerHTML+n
						
		 }
}



function result() {
			res.innerHTML=eval(store.innerHTML)
			replace= true;
			cc2Bool=true
	  	for(i=0;i<int.length;i++){
						int[i].addEventListener("click",cc2)
			}
}

function del() {
			let txt= numField.innerHTML
			let txt2= store.innerHTML
			numField.innerHTML=txt.slice(0,-1)
			store.innerHTML=txt2.slice(0,-1)
			res.innerHTML=""
			replace=false;
			if(cc2Bool==true) {
						cc2Bool=false
			}
			let stor= store.innerHTML;
						
}

let brk81= document.getElementById("bracket1")

function addMul(br) {
		let stor= store.innerHTML;
		let numF= numField.innerHTML
		if(stor[stor.length-2]!=="*"){			
	 			stor2= stor.slice(0,-1)
				store.innerHTML=stor2+"*("
				numF2= numF.slice(0,-1)
				numField.innerHTML=numF2+"×("
		}
}

function noEffect() {
					let stor= store.innerHTML;
					let numF= numField.innerHTML;
					
					if(stor[stor.length-3]==")") {
							stor2= stor.slice(0,-1)
							store.innerHTML=stor2
							numF2= numF.slice(0,-1)
							numField.innerHTML=numF2
					}
}
/*if(error) {
			console.log("a")
}*/


//---------------------------------------------


setInterval(sow,10)
function sow() {
			document.getElementById("sower").innerHTML=cc2Bool+"   "+store.innerHTML
}
