<script lang="ts">
	let loginRequest: { email?: string; password?: string } = {};
</script>

<div class="border-2 border-solid border-blue-400 flex justify-center m-4">
	<h1 class="text-3xl font-bold text-center my-2">Login</h1>
	<div class="my-2">
		<div>Email</div>
		<div>
			<input class=" border-amber-300" placeholder="Enter email" bind:value={loginRequest.email} />
		</div>
	</div>
	<div class="my-2">
		<div>Password</div>
		<div>
			<input
				class="border-amber-300"
				type="password"
				placeholder="Enter password"
				bind:value={loginRequest.password}
			/>
		</div>
		<div class="my-4 text-center">
			<button class="border-purple-500 w-36 h-10 rounded-md"> Login </button>
		</div>
		<div>
			If you don't have an account you can {''}
			<a class=" text-blue-500" href="/register"> register </a>
			{''} here
		</div>
	</div>
</div>
