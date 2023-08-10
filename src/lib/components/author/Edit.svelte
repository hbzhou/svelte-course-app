<script lang="ts">
	export let author: Partial<Author> = {};
</script>

<div class="flex items-center my-8">
	<div class="mx-2 font-bold">Name:</div>
	<input
		type="text"
		name="name"
		bind:value={author.name}
		class="border-2 border-solid w-72 h-8 rounded-md p-1"
	/>
</div>
