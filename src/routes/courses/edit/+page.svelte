<script lang="ts">
	import { goto } from '$app/navigation';
	import { fail } from '@sveltejs/kit';
	import { createCourse } from '../../../api/course.api';
	import { authToken, courseList } from '../../../store/store';
	import { authorList } from '../../../store/store';
	export let course: Partial<Course> = { authors: [] };

	const handleSubmit = async () => {
		course = {
			...course,
			id: crypto.randomUUID(),
			creationDate: '2023-08-07'
		};
		createCourse(course, $authToken)
			.then((resp) => {
				if (resp.successful) {
					courseList.update((courses) => [...courses, resp.result]);
					goto('/courses');
				}
			})
			.catch((e) => fail(500, e));
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
				required
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
			{#each $authorList as author (author.id)}
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
</div>
