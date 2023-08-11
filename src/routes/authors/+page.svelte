<script lang="ts">
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/author/Modal.svelte';
	import { onMount } from 'svelte';
	import { user } from '../../store/store';
	import { authorStore } from '../../store/authorStore';

	let showModal = false;
	let mode: Mode;
	let author: Partial<Author> = {};

	const handleClick = (newMode: Mode, newAuthor?: Author) => {
		showModal = true;
		mode = newMode;
		if (newAuthor) {
			author = { ...newAuthor };
		} else {
			author = {};
		}
	};

	onMount(() => {
		if (!$user.isAuth) {
			goto('/login');
			return;
		}
	});
</script>

<div class="border-solid border-2 border-pink-400 m-4 py-4">
	<div class="flex items-center justify-center my-8">
		<div class="font-bold text-2xl col-span-2">Authors</div>
		<button
			class="border-2 border-solid w-36 h-10 rounded-md ml-28 bg-lime-700"
			on:click={() => handleClick('CREATE')}
		>
			Create author
		</button>
	</div>
	<div class="grid grid-cols-2 grid-flow-dense gap-4 place-items-center">
		{#each $authorStore as author (author.id)}
			<div class="text-2xl">{author.name}</div>
			<div>
				<button
					class="border-solid border-2 p-1 w-28 mx-2 rounded-md bg-fuchsia-400"
					on:click={() => handleClick('UPDATE', author)}>Edit</button
				>
				<button
					class="border-2 border-solid p-1 w-28 mx-2 rounded-md bg-red-500"
					on:click={() => handleClick('DELETE', author)}>Delete</button
				>
			</div>
		{/each}
	</div>
	<Modal {mode} {showModal} {author} handleClose={() => (showModal = false)} />
</div>
