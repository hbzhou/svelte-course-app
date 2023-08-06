<script lang="ts">
	import { mockedCoursesList } from './courses';
	import Course from './Course.svelte';
</script>

{#each mockedCoursesList as course (course.id)}
	<Course {course} />
{/each}
