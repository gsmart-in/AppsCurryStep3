'use strict';



class MockBackEnd
{
	constructor()
	{
		
	}
	getRandomNumbers()
	{
		return this.later([12,33,45,2,3,11,56,66]);
	}
	later(value) 
	{
		return new Promise(function(resolve) 
		{
			setTimeout(function() 
			{
			    resolve(value);
			}, 500);
		});
	}
};

export default MockBackEnd;