<script lang="ts">
	import { goto } from '$app/navigation';
	import { user } from '../../../store/store';
	import authApi from '../../../api/auth';
	const handleLogin = () => goto('/login');
	const handleLogout = async () => {
		await authApi.logout($user.token as string);
		user.set({ isAuth: false });
		goto('/login');
	};

	$: username = $user.isAuth ? $user.name ?? $user.email : '';
	$: action = $user.isAuth ? handleLogout : handleLogin;
	$: btnText = $user.isAuth ? 'Logout' : 'Login';
</script>

<div class="flex items-center justify-end w-80">
	<div class="font-bold font-mono text-xl mr-4">{username}</div>
	<button
		class="border-solid border-2 p-1 mr-4 w-28 bg-fuchsia-400 rounded-md h-10"
		on:click={action}>{btnText}</button
	>
</div>
