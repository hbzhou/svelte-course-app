<script lang="ts">
	import { goto } from '$app/navigation';
	import authApi from '../../api/auth';
	import { user } from '../../store/store';
	let loginRequest: Partial<LoginRequest> = {};
	const handleLogin = async () => {
		const loginResponse = await authApi.login(loginRequest as LoginRequest);
		if (loginResponse.successful) {
			user.set({
				name: loginResponse.user.name,
				email: loginResponse.user.email,
				isAuth: true,
				token: loginResponse.result
			});
			console.log('user', $user);
			goto('/courses');
		}
	};
</script>

<div class="flex flex-col items-center border-2 border-solid border-blue-400 py-4 m-4">
	<div class="text-3xl font-bold my-2">Login</div>
	<div class="my-2 flex items-center gap-12">
		<div class="text-xl">Email</div>
		<input
			class="border-2 border-solid p-2 rounded-md h-10 w-72 border-amber-300"
			placeholder="Enter email"
			bind:value={loginRequest.email}
		/>
	</div>
	<div class="my-2 flex items-center gap-4">
		<div class="text-xl">Password</div>
		<input
			class="border-2 border-solid p-2 rounded-md h-10 w-72 border-amber-300"
			type="password"
			placeholder="Enter password"
			bind:value={loginRequest.password}
		/>
	</div>
	<div class="text-center my-2">
		<button class="border-2 border-solid bg-emerald-600 w-36 h-10 rounded-md" on:click={handleLogin}
			>Login</button
		>
	</div>
	<div>
		If you don't have an account you can {''}
		<a class=" text-blue-500" href="/register">register</a>
		{''} here
	</div>
</div>
