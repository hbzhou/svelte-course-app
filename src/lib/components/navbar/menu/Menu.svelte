<script lang="ts">
	export let menu: { path: string; name: string };
</script>

<a href={menu.path} class=" text-2xl mx-4 hover:opacity-50">{menu.name}</a>
