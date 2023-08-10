<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import { fail } from '@sveltejs/kit';
	import { createAuthor } from '../../../api/author.api';
	import { authToken, authorList } from '../../../store/store';
	export let showModal: boolean;
	export let title: string;
	export let handleClose: () => void;
	export let author: Partial<Author> = {};

	const handleSave = () => {
		createAuthor(author, $authToken)
			.then((resp) => {
				if (resp.successful) {
					author.name = undefined;
					authorList.update((authors) => [...authors, resp.result]);
				} else {
					fail(500, resp);
				}
			})
			.catch((error) => fail(500, error));
	};
</script>

<Modal bind:showModal on:close={handleClose} on:save={handleSave}>
	<div slot="header" class="flex justify-between items-center">
		<h2 class=" text-2xl font-bold">{title}</h2>
		<button class="text-2xl">x</button>
	</div>
	<div class="flex items-center my-8">
		<div class="mx-2 font-bold">Name:</div>
		<input
			type="text"
			name="name"
			bind:value={author.name}
			class="border-2 border-solid w-72 h-8 rounded-md"
		/>
	</div>
</Modal>
