<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import Edit from './Edit.svelte';
	import Delete from './Delete.svelte';
	import { deleteAuthor, updateAuthor, createAuthor } from '../../../api/author.api';
	import { authToken, authorList } from '../../../store/store';
	import { fail } from '@sveltejs/kit';

	export let mode: Mode;
	export let showModal = false;
	export let handleClose: () => void;
	export let author: Partial<Author> = {};

	const titleDic: { [key in Mode]: string } = {
		CREATE: 'Create Author',
		UPDATE: 'Update Author',
		DELETE: 'Delete Author'
	};

	const handleDelete = () => {
		deleteAuthor(author.id as string, $authToken)
			.then((_) => {
				authorList.update((authors) => authors.filter(($author) => $author.id !== author.id));
			})
			.catch((error) => fail(500, error));
	};

	const handleEdit = () => {
		const mutation = author.id ? updateAuthor : createAuthor;
		const updaterCurry = (newAuthor: Author) => (authors: Author[]) => {
			const index = authors.findIndex(($author) => $author.id === author.id);
			if (index > -1) {
				authors.splice(index, 1, newAuthor);
			} else {
				authors = authors.concat(newAuthor);
			}
			return authors;
		};
		mutation(author as Author, $authToken)
			.then((resp) => {
				if (resp.successful) {
					author.name = undefined;
					const updater = updaterCurry(resp.result);
					authorList.update(updater);
				} else {
					fail(500, resp);
				}
			})
			.catch((error) => fail(500, error));
	};

	$: title = titleDic[mode];
	$: deleteMode = mode === 'DELETE';
	$: handleSubmit = deleteMode ? handleDelete : handleEdit;
</script>

<Modal bind:showModal on:close={handleClose} on:submit={handleSubmit}>
	<div slot="header" class="flex justify-between items-center">
		<h2 class=" text-2xl font-bold">{title}</h2>
		<button class="text-2xl">x</button>
	</div>
	{#if deleteMode}
		<Delete authorName={author.name} />
	{:else}
		<Edit {author} />
	{/if}
</Modal>
