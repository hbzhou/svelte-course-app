<script lang="ts">
	import { mockedAuthorsList } from '../../../constant';

	const handleSubmit = () => {};
</script>

<div class="border-solid border-2 border-indigo-500 m-4">
	<h1 class="text-3xl font-bold text-center my-2">Create Course</h1>
	<form on:submit={handleSubmit}>
		<div class="flex justify-between items-center m-4">
			<div>
				<div>Title</div>
				<input class="border border-solid h-8 border-amber-300 rounded-md" name="title" />
			</div>
			<div>
				<button class="mr-4 w-40 border-2 border-solid p-1 border-purple-700">Create Course</button>
			</div>
		</div>
		<div class="m-4">
			<div>Duration</div>
			<input
				type="number"
				class="border border-solid h-8 border-amber-300 rounded-md"
				name="duration"
			/>
		</div>
		<div class="m-4">
			<div>Authors</div>
			<select name="authors" class="border border-solid h-8 w-44 border-amber-300 rounded-md">
				{#each mockedAuthorsList as author (author.id)}
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
			/>
		</div>
	</form>
</div>
