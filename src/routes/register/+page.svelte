<script lang="ts">
	let registerRequest: { name?: string; email?: string; password?: string } = {};
</script>

<div class="m-4 py-4 border-2 border-blue-600 border-s flex flex-col items-center">
	<div class=" text-2xl">Registration</div>
	<div class="flex items-center gap-10 my-4">
		<h1 class="text-xl">Name</h1>
		<input
			placeholder="Enter name"
			class=" border-2 border-solid p-1 h-10 w-72 rounded-md border-amber-300"
			bind:value={registerRequest.name}
		/>
	</div>
	<div class="flex items-center gap-10 my-4">
		<h1 class="text-xl">Email</h1>
		<input
			type="email"
			placeholder="Enter email"
			class="border-2 border-solid p-1 h-10 w-72 rounded-md border-amber-300"
			bind:value={registerRequest.email}
		/>
	</div>
	<div class="flex items-center gap-2 my-4">
		<h1 class="text-xl">Password</h1>
		<input
			type="password"
			placeholder="Enter password"
			class="border-2 border-solid p-1 h-10 w-72 rounded-md border-amber-300"
			bind:value={registerRequest.password}
		/>
	</div>
	<div class="my-2 text-center">
		<button class="border-2 border-solid h-10 bg-indigo-300 w-36 rounded-md">Registration</button>
	</div>
	<div>
		if you have an account you can {''}
		<a href="/login" class=" text-blue-500"> Login</a>
	</div>
</div>
