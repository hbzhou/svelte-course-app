<script lang="ts">
	import { goto } from '$app/navigation';
	import Edit from '$lib/components/author/Edit.svelte';
	import Remove from '$lib/components/author/Remove.svelte';
	import { onMount } from 'svelte';
	import { getAuthors } from '../../api/author.api';
	import { authToken, authorList, user } from '../../store/store';

	let showModal = false;
	let title: string;
	let author: Author;
	let showConfirmModal = false;

	const handleEdit = (header: string) => {
		showModal = true;
		title = header;
	};

	const handleRemove = (authorSelected: Author) => {
		showConfirmModal = true;
		author = authorSelected;
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
			on:click={() => handleEdit('Create Author')}
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
					on:click={() => handleEdit('Edit Author')}>Edit</button
				>
				<button
					class="border-2 border-solid p-1 border-purple-400 w-28 mx-2 rounded-md"
					on:click={() => handleRemove(author)}>Remove</button
				>
			</div>
		{/each}
	</div>
	<Edit {title} {showModal} handleClose={() => (showModal = false)} />
	{#if author}
		<Remove {author} showModal={showConfirmModal} handleClose={() => (showConfirmModal = false)} />
	{/if}
</div>
