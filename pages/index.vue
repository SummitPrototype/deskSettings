<style>
	html, body{
		background: linear-gradient(#FFF, #F1F1F1);
		height:100%;
	}
	.collapsible div{
		outline:none;
	}
	.card .card-content{
		padding:24px 0;
		font-size:0.9em;
	}
	.card-content ol{
		padding-left:30px;
	}
	.card-content li{
		padding-top:5px;
	}
	.collapsible-body.activitySettings>span, .collapsible-body.advancedSettings>span{
		margin-top:22px;
	}
	.menuItemSetting{
		margin-bottom:50px;
	}
	#lastMenuItemSetting{
		margin-bottom: 0;
	}
	.switch label span.lever{
		margin:0 5px 0 0;
	}
	.collapsible{
		background-color: #fff;
		border:none;
	}
	.row{
		margin-top:50px;
	}
</style>
<template>
<div>
	<navbar></navbar>
	<div class="container">
		<!-- <h4>Settings</h4> -->
		<div class="row">
			
			<ul class="collapsible col s8">
				<li class="active">
					<div class="collapsible-header"><i class="material-icons">filter_drama</i>General Settings</div>
					<div class="collapsible-body row activitySettings">
						<span class="col s4"><b>Activity</b></span>
						<div class="input-field col s8">
							<select>
								<option value="" selected disabled>Choose Activity</option>
								<option value="1">Test Event 1</option>
								<option value="2">Test Event 2</option>
								<option value="3">Test Event 3</option>
							</select>
						</div>
						<span class="col s4"><b>Location</b></span>
						<div class="input-field col s8">
							<select>
								<option value="" selected disabled>Choose Location</option>
								<option value="1">Test Location 1</option>
								<option value="2">Test Location 2</option>
								<option value="3">Test Location 3</option>
							</select>
						</div>
						<span class="col s4"><b>Host</b></span>
						<div class="input-field col s8">
							<select>
								<option value="" selected disabled>Choose Host</option>
								<option value="1">Test Host 1</option>
								<option value="2">Test Host 2</option>
								<option value="3">Test Host 3</option>
							</select>
						</div>
						<span class="col s4"><b>Stream</b></span>
						<div class="input-field col s8">
							<select>
								<option value="" selected disabled>Choose Stream</option>
								<option value="1">Test Stream 1</option>
								<option value="2">Test Stream 2</option>
								<option value="3">Test Stream 3</option>
							</select>
						</div>
					</div>
				</li>
				<li>
					<div class="collapsible-header"><i class="material-icons">menu</i>Menu Items</div>
					<div class="collapsible-body row">
						<div class="col s12 menuItemSetting">
							<span class="col s4"><b>Scanning</b></span>
							<div class="switch col s4">
								<label>
									<input type="checkbox">
									<span class="lever"></span>
								</label>
							</div>
							<div class="col s4">
								<label>
									<input name="group1" type="radio" checked />
									<span>Entance</span>
								</label>
								<label>
									<input name="group1" type="radio" checked />
									<span>Exit</span>
								</label>
							</div>
						</div>
						<div class="col s12 menuItemSetting">
							<span class="col s4"><b>Scan & Print</b></span>
							<div class="switch col s8">
								<label>
									<input type="checkbox">
									<span class="lever"></span>
								</label>
							</div>
						</div>
						<div class="col s12 menuItemSetting">
							<span class="col s4"><b>Register</b></span>
							<div class="switch col s8">
								<label>
									<input type="checkbox">
									<span class="lever"></span>
								</label>
							</div>
						</div>
						<div class="col s12 menuItemSetting" id="lastMenuItemSetting">
							<span class="col s4"><b>Search</b></span>
							<div class="switch col s8">
								<label>
									<input type="checkbox">
									<span class="lever"></span>
								</label>
							</div>
						</div>
						
						
					</div>
				</li>
				<li>
					<div class="collapsible-header"><i class="material-icons">info_outline</i>Advanced Info</div>
					<div class="collapsible-body row advancedSettings">
						<span class="col s4"><b>Customer</b></span>
						<div class="input-field col s8">
							<select disabled>
								<option value="" selected>Avans</option>
							</select>
						</div>
						
						<span class="col s4"><b>Production Mode</b></span>
						<div class="switch col s8" style="margin-top:22px;">
							<label>
								<input checked disabled type="checkbox">
								<span class="lever"></span>
								On
							</label>
						</div>

						<span style="margin-top:50px;" class="col s4"><b>Version</b></span>
						<div class="col s8" style="margin-top:50px;">
							<span>1.13.5558.1111</span>
						</div>
						
					</div>
				</li>
			</ul>
			<div class="col s4">
				<div class="card">
					<div class="card-image">
						<img src="qr.svg">
					</div>
					<div class="card-content">
						<ol>
							<li>Download Summit Desk via the <b>Windows Store</b></li>
							<li>Click on <b>login with QR-code</b></li>
							<li>Scan the <b>QR-code</b> above</li>
							<li>Summit Desk is <b>ready to use</b></li>
						</ol>
					</div>
				</div>
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
			$(".dropdown-trigger").dropdown();
			$('.collapsible').collapsible();
			$('select').formSelect();
		}
	}
</script>