angular.module('primeiraApp').factory('gridSystem', [ function() {
	function toCssClasses(numbers) {
		const cols = numbers ? numbers.split(' ') : []
		let classes = ''

		if(cols[0]) classes += `cols-xs-${cols[0]}`
		if(cols[1]) classes += ` cols-sm-${cols[1]}`
		if(cols[2]) classes += ` cols-md-${cols[2]}`
		if(cols[3]) classes += ` cols-lg-${cols[3]}`

		return classes
	}

	return { toCssClasses }

}])