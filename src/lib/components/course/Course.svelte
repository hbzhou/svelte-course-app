<script lang="ts">
	import { authorStore } from '../../../store/authorStore';

	export let title: string;
	export let course: Partial<Course> | Course = { authors: [] };
	export let handleSubmit: () => void;
</script>

<h1 class="text-3xl font-bold text-center my-2">{title}</h1>
<div class="flex justify-between items-center m-4">
	<div>
		<div>Title</div>
		<input
			class="border border-solid h-8 border-amber-300 rounded-md p-2"
			name="title"
			bind:value={course.title}
			required
		/>
	</div>
	<div>
		<button
			class="mr-4 w-36 border-2 border-solid p-1 bg-amber-500 rounded-md"
			on:click={handleSubmit}
		>
			{title}
		</button>
	</div>
</div>
<div class="m-4">
	<div>Duration</div>
	<input
		type="number"
		class="border border-solid h-8 border-amber-300 rounded-md p-2"
		name="duration"
		bind:value={course.duration}
		required
	/>
</div>
<div class="m-4">
	<div>Authors</div>
	<select
		name="authors"
		class="border border-solid h-24 w-48 border-amber-300 rounded-md"
		multiple
		bind:value={course.authors}
		required
	>
		{#each $authorStore as author (author.id)}
			<option value={author.id}>{author.name}</option>
		{/each}
	</select>
</div>
<div class="m-4">
	<div>Description</div>
	<textarea
		rows={4}
		class="block p-2.5 w-full rounded-md border-solid border-2 border-amber-300"
		name="description"
		bind:value={course.description}
		required
	/>
</div>
