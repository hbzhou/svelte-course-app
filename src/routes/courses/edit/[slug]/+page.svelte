<script lang="ts">
	import { goto } from '$app/navigation';
	import { fail } from '@sveltejs/kit';
	import { updateCourse } from '../../../../api/course.api';
	import { authToken, courseList } from '../../../../store/store';
	import CourseComponent from '$lib/components/course/Course.svelte';
	import { page } from '$app/stores';

	$: course = $courseList.find((course) => course.id == $page.params.slug) as Course;
	const title = 'Update Course';
	const handleSubmit = async () => {
		updateCourse(course as Course, $authToken)
			.then((resp) => {
				if (resp.successful) {
					const courses = $courseList.slice();
					const index = courses.findIndex(($course) => $course.id === resp.result.id);
					courses.splice(index, 1, resp.result);
					courseList.update(() => courses);
					goto('/courses');
				}
			})
			.catch((e) => fail(500, e));
	};
</script>

<div class="border-solid border-2 border-indigo-500 m-4">
	<CourseComponent {title} {handleSubmit} {course} />
</div>
