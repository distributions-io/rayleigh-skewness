'use strict';

// MODULES //

var isPositive = require( 'validate.io-positive-primitive' );

// FUNCTIONS //

var pow = Math.pow,
	sqrt = Math.sqrt;


// CONSTANTS //

var PI = Math.PI,
	SKEWNESS = 2 * sqrt(PI) * ( PI - 3 ) / pow( 4 - PI, 3/2 );


// SKEWNESS //

/**
* FUNCTION skewness( sigma )
*	Computes the distribution skewness for a Rayleigh distribution with parameter sigma.
*
* @param {Number} sigma - scale parameter
* @returns {Number} distribution skewness
*/
function skewness( sigma ) {
	if ( !isPositive( sigma ) ) {
		return NaN;
	}
	return SKEWNESS;
} // end FUNCTION skewness()


// EXPORTS

module.exports =  skewness;
