<template>
	<div class="wrapper" id="my_app" >
		<!-- Sidebar  -->
		<nav id="sidebar">
		    <div class="sidebar-header">
		        <h3>My Simpple App</h3>
		    </div>
		    <ul class="list-unstyled components">
		        <li><router-link to="/"> Home</router-link></li>
		        <li><router-link to="/page1"> Page 1</router-link></li>
		        <li><router-link to="/page2"> Page 2</router-link></li>
		    </ul>
		</nav>
		<!-- Page Content  -->
		<div id="content">
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
import router from './pages/routes';
export default {
  name: 'AppMain',
  router
}
</script>