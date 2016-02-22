var candy = [
	{name: 'snickers', type: 'chocolate'},
	{name: 'starburst', type: 'corn syrup'},
	{name: 'sour patch kids', type: 'corn syrup'},
	{name: 'hershys', type: 'chocolate'},
	{name: 'vines', type: 'licorice'},
	{name: 'reeses', type: 'chocolate'},
];

var filterCandy = function(choc){
	return choc.type === "chocolate";
}
var mapCandy = function(choc){
	return choc.name;
}

var candyArray = candy.filter(filterCandy).map(mapCandy);


console.log(candyArray);