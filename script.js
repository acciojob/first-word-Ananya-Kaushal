function firstWord(s) {
  // your code here
	let s1=s.trim();
	let substr="";
	let space=s1.indexOf(" ");
	if(space==-1)return s1;
	else
	{
		return s1.substring(0,space);
	}
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
