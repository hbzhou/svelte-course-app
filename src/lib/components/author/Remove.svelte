<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import { fail } from '@sveltejs/kit';
	import { deleteAuthor } from '../../../api/author.api';
	import { authToken, authorList } from '../../../store/store';

	export let showModal: boolean;
	export let author: Author;
	export let handleClose: () => void;

	const handleSubmit = () => {
		deleteAuthor(author.id, $authToken)
			.then((_) => {
				authorList.update((authors) => authors.filter(($author) => $author.id !== author.id));
			})
			.catch((error) => fail(500, error));
	};
</script>

<Modal bind:showModal on:close={handleClose} on:submit={handleSubmit}>
	<div slot="header" class="flex justify-between items-center">
		<h2 class=" text-2xl font-bold">Delete Author</h2>
		<button class="text-2xl">x</button>
	</div>
	<div class="flex items-center my-8">
		<div class="mx-2">
			Do you want to remove author <span class=" font-bold">{author.name}</span>?
		</div>
	</div>
</Modal>
