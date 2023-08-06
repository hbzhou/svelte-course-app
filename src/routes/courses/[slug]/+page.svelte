<script lang="ts">
	import { mockedCoursesList } from '../../../constant';
	import { page } from '$app/stores';

	const id = $page.params.slug;
	const course = mockedCoursesList.find((item) => {
		return item.id === id;
	});
</script>

{#if !!course}
	<div class=" border-solid border-2 border-blue-300 m-4">
		<h1>{course.title}</h1>
		<div class="flex">
			<div class=" w-1/2 m-4">{course.description}</div>
			<div class="m-4">
				<div>
					<span class="font-bold mr-3">ID:</span>
					<span>{course.id}</span>
				</div>
				<div>
					<span class="font-bold mr-3">Duration:</span>
					<span>{course.duration} hours</span>
				</div>
				<div>
					<span class="font-bold mr-3">Created:</span>
					<span>{course.creationDate}</span>
				</div>
				<div class="flex">
					<div class="font-bold mr-3">Authors:</div>
					<div />
				</div>
			</div>
		</div>
	</div>
{/if}
