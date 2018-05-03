<style>
	.left{
		margin-left:13%;
	}
	i.material-icons.large{
		font-size:25pt;
	}
	nav{
		background-color: #263238;
	}
	#noWifi{
		color: red;
	}
	#navSearch{
		margin-top:-6px;
		margin-left:10px;
	}
	#navSearch .prefix{
		font-size:24px;
	}
	#navSearchLabel{
		margin-top:-5px;
	}
	nav .brand-logo{
		font-size:20pt;
	}
</style>
<template>
<div>
	
	<ul id="dropdown1" class="dropdown-content">
		<li><a href="#!">English</a></li>
		<li><a href="#!">Nederlands</a></li>
	</ul>
	<ul id="dropdownSettings" class="dropdown-content">
		<li><a href="index">Settings</a></li>
		<li><a href="#!">SyncData</a></li>
		<li class="divider"></li>
		<li><a href="#!">Log Out</a></li>
	</ul>
	<nav>
		<div class="nav-wrapper">
			<a href="#!" class="brand-logo" style="padding-left:10px;"><b>Summit</b>Desk</a>
			<ul class="left hide-on-med-and-down">
				<li id="scanPage"><a href="./scan"><i class="material-icons">crop_free</i></a></li>
				<li><a href="#!"><i class="material-icons">local_printshop</i></a></li>
				<li><a href="#!"><i class="material-icons">person_add</i></a></li>
				<li>
					<div id="navSearch" class="input-field">
						<i class="material-icons prefix">search</i>
						<input id="icon_prefix" type="text">
						<label id="navSearchLabel" for="icon_prefix">Search</label>
					</div>
				</li>
				<li>
					<span style="color:#444; font-size:24pt;">Settings</span>
				</li>
			</ul>
			<ul class="right hide-on-med-and-down">
				<li><a class="dropdown-trigger" href="#!" data-target="dropdown1">English<i class="material-icons right">arrow_drop_down</i></a></li>
				<li><a href="#!"><i id="noWifi" class="material-icons">signal_wifi_off</i></a></li>
				<li><a class="dropdown-trigger" href="#!" data-target="dropdownSettings"><i class="material-icons">more_vert</i></a></li>
			</ul>
		</div>
	</nav>
</div>
</template>

<script>
	export default{
		mounted(){
			$(".dropdown-trigger").dropdown();
			$('.collapsible').collapsible();
			$('select').formSelect();
		}
	}
</script>