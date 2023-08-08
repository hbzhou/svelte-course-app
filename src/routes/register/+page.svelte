<script lang="ts">
	let registerRequest: { name?: string; email?: string; password?: string } = {};
</script>

<div class="m-4 border-2 border-blue-600 border-solid flex justify-center">
	<h1>Registration</h1>
	<div class="my-2">
		<h1>Name</h1>
		<input placeholder="Enter name" class=" border-amber-300" bind:value={registerRequest.name} />
	</div>
	<div class="my-2">
		<h1>Email</h1>
		<input
			type="email"
			placeholder="Enter email"
			class=" border-amber-300"
			bind:value={registerRequest.email}
		/>
	</div>
	<div class="my-2">
		<h1>Password</h1>
		<input
			type="password"
			placeholder="Enter password"
			class=" border-amber-300"
			bind:value={registerRequest.password}
		/>
	</div>
	<div class="my-2 text-center">
		<button class=" border-purple-500 w-36 rounded-md">Registration</button>
	</div>
	<div>
		if you have an account you can {''}
		<a href="/login" class=" text-blue-500"> Login</a>
	</div>
</div>
