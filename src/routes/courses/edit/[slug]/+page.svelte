<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import CourseComponent from '$lib/components/course/Course.svelte';
	import { fail } from '@sveltejs/kit';
	import { updateCourse } from '../../../../api/course.api';
	import { courseStore } from '../../../../store/courseStore';
	import { authToken } from '../../../../store/store';

	$: course = $courseStore.find((course) => course.id == $page.params.slug) as Course;
	const title = 'Update Course';
	const handleSubmit = async () => {
		updateCourse(course as Course, $authToken)
			.then((resp) => {
				if (resp.successful) {
					const courses = $courseStore.slice();
					const index = courses.findIndex(($course) => $course.id === resp.result.id);
					courses.splice(index, 1, resp.result);
					courseStore.update(() => courses);
					goto('/courses');
				}
			})
			.catch((e) => fail(500, e));
	};
</script>

<div class="border-solid border-2 border-indigo-500 m-4">
	<CourseComponent {title} {handleSubmit} {course} />
</div>
