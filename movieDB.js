app.factory('movieDB',function() {  // servis koji ide u bazu podataka da dobavi podatke

	var allMovies=movies;

	return allMovies;
})

var movies = [
	{
		name:"Me before you",
		genre:"drama"
	},
	{
		name:"Horor film",
		genre:"horor"
	},
	{
		name:"Western film",
		genre:"western"
	},
	{	name:"Komedija",
		genre:"comedy",

	},
	{
		name:"scifi",
		genre:"scifi",
	}

	];