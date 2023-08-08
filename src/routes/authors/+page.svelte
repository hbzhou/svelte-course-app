<script lang="ts">
	import Modal from '$lib/common/Modal.svelte';
	import { authorList } from '../../store/store';
	let showModal = false;
	let author: Author = {
		id: crypto.randomUUID(),
		name: ''
	};
</script>

<div class="border-solid border-2 border-pink-400 m-4 py-4">
	<div class="flex items-center justify-center my-8">
		<div class="font-bold text-2xl col-span-2">Authors</div>
		<button class="border-2 border-solid w-36 h-10 rounded-md border-purple-400 ml-28">
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
				<button class="border-2 border-solid p-1 border-purple-400 w-28 mx-2 rounded-md"
					>Remove</button
				>
			</div>
		{/each}
	</div>
	<Modal bind:showModal>
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
</div>
