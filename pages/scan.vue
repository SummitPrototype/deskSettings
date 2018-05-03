<style>
	html, body{
		background: linear-gradient(#FFF, #F1F1F1);
		height:100%;
	}
	ul.collection.with-header{
		margin-top:0;
	}
	#entranceGif{
		padding-left: 0;
	}
	.row{
		margin-top:50px;
	}
</style>
<template>
<div>
<navbar></navbar>
<div class="container">
	<!-- <h4>Scanning: Entrance</h4> -->
	<div class="row">
		<div class="col s6" id="entranceGif">
			<img style="width:100%" src="entranceGif.gif">
		</div>
		<div class="col s6">
			
			<ul class="collection with-header">
				<li class="collection-header"><h5>Last 10 scans</h5></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i style="color:red;" class="secondary-content material-icons">thumb_down</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i class="secondary-content material-icons">thumb_up</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i class="secondary-content material-icons">thumb_up</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i style="color:red;" class="secondary-content material-icons">thumb_down</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i style="color:red;" class="secondary-content material-icons">thumb_down</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i class="secondary-content material-icons">thumb_up</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i class="secondary-content material-icons">thumb_up</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i style="color:red;" class="secondary-content material-icons">thumb_down</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i style="color:red;" class="secondary-content material-icons">thumb_down</i></div></li>
				<li class="collection-item"><div>1234567, 20-04-2018, 10:00:25<i class="secondary-content material-icons">thumb_up</i></div></li>
			</ul>
			
		</div>
	</div>
</div>
</div>
</template>
<script>
	import navbar from '~/src/navbar.vue';
	export default{
		components:{
			navbar
		},
		mounted(){
			$('#scanPage').addClass('active');
		}
	}
</script>