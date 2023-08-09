<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Course from '$lib/components/course/Course.svelte';
	import SearchBar from '$lib/components/course/SearchBar.svelte';
	import { getCourses } from '../../api/course.api';
	import { authToken } from '../../store/store';
</script>

{#await getCourses($authToken) then response}
	{#if response.successful}
		<main class="border-solid border-2 border-green-300 m-4">
			<div class="flex justify-between m-4">
				<SearchBar />
				<button
					class="border border-solid w-48 p-1 bg-cyan-600 rounded-md"
					on:click={() => goto(`${$page.url.pathname}/edit`)}>Add new Course</button
				>
			</div>
			{#each response.result as course (course.id)}
				<Course {course} />
			{/each}
		</main>
	{/if}
{/await}
