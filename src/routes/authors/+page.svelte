<script lang="ts">
	import { authors } from '../../store/store';
</script>

<div class="border-solid border-2 border-pink-400 m-4">
	<div class="flex items-center justify-center my-8">
		<div class="font-bold text-2xl col-span-2">Authors</div>
		<button class="border-2 border-solid w-36 h-10 rounded-md border-purple-400 ml-28">
			Create author
		</button>
	</div>
	<div class="grid grid-cols-2 grid-flow-dense gap-4 place-items-center">
		{#each $authors as author (author.id)}
			<div class="text-2xl">{author.name}</div>
			<div>
				<button class="border-solid border-2 p-1 border-purple-400 w-28 mx-2 rounded-md"
					>Edit</button
				>
				<button class="border-2 border-solid p-1 border-purple-400 w-28 mx-2 rounded-md"
					>Remove</button
				>
			</div>
		{/each}
	</div>
</div>
