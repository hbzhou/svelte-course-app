<script lang="ts">
	import { onMount } from 'svelte';
	import { authToken, authorList, user } from '../../store/store';
	import { goto } from '$app/navigation';
	import { deleteAuthor, getAuthors } from '../../api/author.api';
	import EditAuthor from '$lib/components/author/EditAuthor.svelte';
	import { fail } from '@sveltejs/kit';

	let showModal = false;
	let showRemoveConfirmModal = false;

	const handleRemove = (id: string) => {
		deleteAuthor(id, $authToken)
			.then((_) => {
				authorList.update((authors) => authors.filter((author) => author.id !== id));
			})
			.catch((error) => fail(500, error));
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
			on:click={() => (showModal = true)}
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
					on:click={() => (showModal = true)}>Edit</button
				>
				<button
					class="border-2 border-solid p-1 border-purple-400 w-28 mx-2 rounded-md"
					on:click={() => handleRemove(author.id)}>Remove</button
				>
			</div>
		{/each}
	</div>
	<EditAuthor {showModal} handleClose={() => (showModal = false)} />
</div>
