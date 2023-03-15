var CRNerror = document.getElementById("CRN-error");
var CRNerror1 = document.getElementById("CRN-error1");
var CRNerror2 = document.getElementById("CRN-error2");
var CRNerror3 = document.getElementById("CRN-error3");
var CRNerror4 = document.getElementById("CRN-error4");
var CRNerror5 = document.getElementById("CRN-error5");
var CRNerror6 = document.getElementById("CRN-error6");
var CRNerror7 = document.getElementById("CRN-error7");
var CRNerror8 = document.getElementById("CRN-error8");
var CRNerror9 = document.getElementById("CRN-error9");
var CRNerror10 = document.getElementById("CRN-error10");
var CRNerror11 = document.getElementById("CRN-error11");
var CRNerror12 = document.getElementById("CRN-error12");


function validateCRN() {

	var CRN = document.getElementById("CRN-number").value;

	if (CRN.length == 0) {
		CRNerror.innerHTML = "You must input your CRN / SS Number";
		return false;
	}
	if (CRN.length !== 12) {
		CRNerror.innerHTML = "CRN should be 12 Digits";
		return false;
	}
	if (!CRN.match(/^[0-9]{12}$/)) {
		CRNerror.innerHTML = "Only digits please";
		return false;
	}
	CRNerror.innerHTML = "";
	return true;
}

function validateCRN1() {
	var CRN1 = document.getElementById("CRN-number1").value;

	if (CRN1.length == 0) {
		CRNerror1.innerHTML = "You must input your Email address";
		return false;
	}
	if (!CRN1.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
		CRNerror1.innerHTML = "Email address is not valid";
		return false;
	}
	CRNerror1.innerHTML = "";
	return true;
}

function validateCRN2() {
	var CRN2 = document.getElementById("CRN-number2").value;

	if (CRN2.length == 0) {
		CRNerror2.innerHTML = "Confirm Email address";
		return false;
	}
	if (!CRN2.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,3}$/)) {
		CRNerror2.innerHTML = "Email does not match";
		return false;
	}
	CRNerror2.innerHTML = "";
	return true;	
}

function validateCRN3() {
	var CRN3 = document.getElementById("CRN-number3").value;

	if (CRN3.length == 0) {
		CRNerror3.innerHTML = "You must input your Preferred User ID.";
		return false;
	}
	if (CRN3.length !== 8) {
		CRNerror3.innerHTML = "Atleast 1 number, 1 uppercase and lowercase letter, and at least 8 characters.";
		return false;
	}
	if (!CRN3.match(/^[A-Za-z\._\-[0-9]{8}$/)) {
		CRNerror3.innerHTML = "No special character.";
		return false;
	}
	CRNerror3.innerHTML = "";
	return true;
}

function validateCRN4() {
	var CRN4 = document.getElementById("CRN-number4").value;

	if (CRN4.length == 0) {
		CRNerror4.innerHTML = "Confirmed Preferred User ID.";
		return false;
	}
	if (CRN4.length !== 8) {
		CRNerror4.innerHTML = "Please match User ID";
		return false;
	}
	if (!CRN4.match(/^[A-Za-z\._\-[0-9]{8}$/)) {
		CRNerror4.innerHTML = "No special character.";
		return false;
	}
	CRNerror4.innerHTML = "";
	return true;
}

function validateCRN5() {
	var CRN50 = /^[A-Za-z]+$/;
	var CRN5 = document.getElementById("CRN-number5").value;

	if (CRN5.length == 0) {
		CRNerror5.innerHTML = "You must input your Surename/Last Name.";
		return false;
	}
	if (CRN5.match(CRN50)) 
		true;
	    else{
		CRNerror5.innerHTML = "Must contain uppercase, lowercase Letters, and no special characters";
		return false;
	}
	
}

function validateCRN6() {
	var CRN51 = /^[A-Za-z]+$/;
	var CRN6 = document.getElementById("CRN-number6").value;

	if (CRN6.length == 0) {
		CRNerror6.innerHTML = "You must input your Given Name.";
		return false;
	}
	if (CRN6.match(CRN51)) 
		true;
	    else{
		CRNerror6.innerHTML = "Must contain uppercase, lowercase Letters, and no special characters.";
		return false;
	}
	
}

function validateCRN7() {
	var CRN52 = /^[A-Za-z]+$/;
	var CRN7 = document.getElementById("CRN-number7").value;

	if (CRN7.length == 0) {
		CRNerror7.innerHTML = "You must input your Middle Name.";
		return false;
	}
	if (CRN7.match(CRN52)) 
		true;
	    else{
		CRNerror7.innerHTML = "Must contain uppercase, lowercase Letters, and no special characters.";
		return false;
	}
	
}

function validateCRN8() {
	var CRN8 = document.getElementById("CRN-number8").value;

	if (CRN8.length == 0) {
		CRNerror8.innerHTML = "You must input your Birthdate.";
		return false;
	}
	CRNerror8.innerHTML = "";
	return true;
}



function validateForm() {
	if(validateCRN() || validateCRN1() || validateCRN2() || validateCRN3() || validateCRN4() || validateCRN5() || validateCRN6() || validateCRN7() || validateCRN8()) {
		Submiterror.innerHTML = '';
		return false;
	}
}