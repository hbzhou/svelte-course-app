<script lang="ts">
	import { goto } from '$app/navigation';
	import Modal from '$lib/components/author/Modal.svelte';
	import { onMount } from 'svelte';
	import { getAuthors } from '../../api/author.api';
	import { authToken, authorList, user } from '../../store/store';

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
		getAuthors($authToken).then((resp) => {
			if (resp.successful) {
				authorList.set(resp.result);
			}
		});
	});
</script>

<div class="border-solid border-2 border-pink-400 m-4 py-4">
	<div class="flex items-center justify-center my-8">
		<div class="font-bold text-2xl col-span-2">Authors</div>
		<button
			class="border-2 border-solid w-36 h-10 rounded-md border-purple-400 ml-28"
			on:click={() => handleClick('CREATE')}
		>
			Create author
		</button>
	</div>
	<div class="grid grid-cols-2 grid-flow-dense gap-4 place-items-center">
		{#each $authorList as author (author.id)}
			<div class="text-2xl">{author.name}</div>
			<div>
				<button
					class="border-solid border-2 p-1 border-purple-400 w-28 mx-2 rounded-md"
					on:click={() => handleClick('UPDATE', author)}>Edit</button
				>
				<button
					class="border-2 border-solid p-1 border-purple-400 w-28 mx-2 rounded-md"
					on:click={() => handleClick('DELETE', author)}>Delete</button
				>
			</div>
		{/each}
	</div>
	<Modal {mode} {showModal} {author} handleClose={() => (showModal = false)} />
</div>
