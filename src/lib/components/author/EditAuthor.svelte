<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	export let showModal: boolean;
	export let handleClose: () => void;
	export let author: Partial<Author> = {};
</script>

<Modal bind:showModal on:close={handleClose}>
	<div slot="header" class="flex justify-between items-center">
		<h2 class=" text-2xl font-bold">Edit Author</h2>
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
