//your JS code here. If required.
const select=document.getElementById("colorSelect");

select.addEventListener("click", onClickRemove);

function onClickRemove(event) {

	let selectValue=select.value;
	let option=select.children;
	for(let i=0;i<option.length;i++){
		if(option[i].innerText===selectValue){
			option[i].remove();
			break;
		}
	}
}
