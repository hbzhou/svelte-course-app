<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';
	import { goto } from '$app/navigation';
	onMount(() => {
		goto('/login');
	});
</script>
