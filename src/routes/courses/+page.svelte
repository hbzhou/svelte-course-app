<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import CourseCard from '$lib/components/course/CourseCard.svelte';
	import SearchBar from '$lib/components/course/SearchBar.svelte';
	import { onMount } from 'svelte';
	import { courseStore } from '../../store/courseStore';
	import { user } from '../../store/store';

	onMount(() => {
		if (!$user.isAuth) {
			goto('/login');
			return;
		}
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
	{#each $courseStore as course (course.id)}
		<CourseCard {course} />
	{/each}
</main>
