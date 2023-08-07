<script lang="ts">
	export let menu: { path: string; name: string };
</script>

<a href={menu.path} class=" text-2xl font-mono font-bold mx-4 hover:opacity-50">{menu.name}</a>
