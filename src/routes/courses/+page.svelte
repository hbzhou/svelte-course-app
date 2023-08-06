<script lang="ts">
	import SearchBar from '$lib/components/course/SearchBar.svelte';
	import Course from '$lib/components/course/Course.svelte';
	import { mockedCoursesList } from '../../constant';
</script>

<main class="border-solid border-2 border-green-300 m-4">
	<div class="flex justify-between m-4">
		<SearchBar />
		<button class="border border-solid w-48 p-1 bg-cyan-600">Add new Course</button>
	</div>
	{#each mockedCoursesList as course (course.id)}
		<Course {course} />
	{/each}
</main>
