/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Deep close to:
	deepCloseTo = require( './utils/deepcloseto.js' ),

	// Module to be tested:
	skewness = require( './../lib/accessor.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'accessor skewness', function tests() {

	it( 'should export a function', function test() {
		expect( skewness ).to.be.a( 'function' );
	});

	it( 'should compute the distribution skewness using an accessor', function test() {
		var sigma, actual, expected;

		sigma = [
			{'sigma':0.5},
			{'sigma':1},
			{'sigma':2},
			{'sigma':4}
		];
		actual = new Array( sigma.length );

		actual = skewness( actual, sigma, getValue );
		expected = [ 0.6311107, 0.6311107, 0.6311107, 0.6311107 ];

		assert.isTrue( deepCloseTo( actual, expected, 1e-5 ) );

		function getValue( d ) {
			return d.sigma;
		}
	});

	it( 'should return an empty array if provided an empty array', function test() {
		assert.deepEqual( skewness( [], [], getValue ), [] );
		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should handle non-numeric values by setting the element to NaN', function test() {
		var sigma, actual, expected;

		sigma = [
			{'x':true},
			{'x':null},
			{'x':[]},
			{'x':{}}
		];
		actual = new Array( sigma.length );
		actual = skewness( actual, sigma, getValue );

		expected = [ NaN, NaN, NaN, NaN ];

		assert.deepEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

});
