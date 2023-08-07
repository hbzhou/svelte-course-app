<script>
	import Logo from './Logo.svelte';
	import Menu from './Menu.svelte';
	const menus = [
		{ path: '/courses', name: 'Courses' },
		{ path: '/authors', name: 'Authors' }
	];
</script>

<div class=" flex items-center justify-between">
	<Logo />
	{#each menus as menu (menu.path)}
		<Menu {menu} />
	{/each}
</div>
