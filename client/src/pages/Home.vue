<template>
<div>
	<h1>Home</h1>
	<h3>Random Numbers</h3>
	<ul>
		<li v-for="num in numbers">{{num}}</li>
	</ul>
	
</div>
</template>
<script>
import BackEndWrapper from '../services/BackEndWrapper';
export default 
{
  name: 'Home',
  data(){
  	return ({
  		bw:new BackEndWrapper(),
  		numbers:[]
  	});
  },
  mounted()
  {
      this.loadRequests();
  },
  methods:
  {
  	loadRequests()
  	{
	  	this.bw.getRandomNumbers().then(function(res)
	  	{
	  		this.numbers = res;
	  	}.bind(this), 
	  	function(err)
        {
          //this.showError();

        }.bind(this));	
  	}
  	
  }
  
}
</script>