<script lang="ts">
	import { goto } from '$app/navigation';
	import { mockedAuthorsList } from '../../../constant';
	import { courseList } from '../../../store/store';
	export let course: Course = { authors: [] };

	const handleSubmit = () => {
		course = {
			...course,
			id: crypto.randomUUID(),
			creationDate: '2023-08-07'
		};
		console.log('course', course);
		courseList.update((courses) => [...courses, course]);
		goto('/courses');
	};
</script>

<div class="border-solid border-2 border-indigo-500 m-4">
	<h1 class="text-3xl font-bold text-center my-2">Create Course</h1>
	<div class="flex justify-between items-center m-4">
		<div>
			<div>Title</div>
			<input
				class="border border-solid h-8 border-amber-300 rounded-md p-2"
				name="title"
				bind:value={course.title}
			/>
		</div>
		<div>
			<button class="mr-4 w-40 border-2 border-solid p-1 border-purple-700" on:click={handleSubmit}>
				Create Course
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
		/>
	</div>
	<div class="m-4">
		<div>Authors</div>
		<select
			name="authors"
			class="border border-solid h-24 w-48 border-amber-300 rounded-md"
			multiple
			bind:value={course.authors}
		>
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
			bind:value={course.description}
		/>
	</div>
</div>
