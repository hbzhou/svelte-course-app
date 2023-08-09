<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Course from '$lib/components/course/Course.svelte';
	import SearchBar from '$lib/components/course/SearchBar.svelte';
	import { onMount } from 'svelte';
	import { authToken, courseList } from '../../store/store';
	import { user } from '../../store/store';
	import { getCourses } from '../../api/course.api';
	onMount(() => {
		if (!$user.isAuth) {
			goto('/login');
			return;
		}
		getCourses($authToken).then((resp) => {
			if (resp.successful) {
				courseList.set(resp.result);
			}
		});
	});
</script>

<main class="border-solid border-2 border-green-300 m-4">
	<div class="flex justify-between m-4">
		<SearchBar />
		<button
			class="border border-solid w-48 p-1 bg-cyan-600 rounded-md"
			on:click={() => goto(`${$page.url.pathname}/edit`)}>Add new Course</button
		>
	</div>
	{#each $courseList as course (course.id)}
		<Course {course} />
	{/each}
</main>
