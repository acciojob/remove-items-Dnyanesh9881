//your JS code here. If required.
const select=document.getElementById("colorSelect");
const input=document.querySelector("input");
input.addEventListener("click", onClickRemove);

function onClickRemove(event) {

	let selectValue=select.value;
	let option=select.children;
	for(let i=0;i<option.length;i++){
		if(option[i].value===selectValue){
			option[i].remove();
			break;
		}
	}
}
