function dataTypes (arg){ 
	/*A function that takes an argument,compares and returns results basedon the argument supplied to the function */


	if ( typeof arg === 'string'){
		return arg.length;
	}
	if (( arg === null) ||( arg === undefined)){

	     return 'no value';
	}
		
	if ( typeof arg === 'boolean'){
		return arg;
	}

	if ( typeof arg === 'number'){
		if ( arg < 100 ){
			return "less than 100";
		}
		else if ( arg > 100 ){
			return "more than 100";
		}
		else
			return "equal to 100";

		}


	if ( arg instanceof Array){
		if (arg[2] === undefined){
			return undefined;
		}
		else {
			return arg[2];		
		}	
	}

	if ( typeof arg === 'function'){
			return 'called callback';
		}
}

module.exports = dataTypes;