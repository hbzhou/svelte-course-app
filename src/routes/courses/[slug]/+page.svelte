<script lang="ts">
	import { page } from '$app/stores';
	import { courses } from '../../../store/store';

	const id = $page.params.slug;
	const course = $courses.find((item) => {
		return item.id === id;
	});
</script>

{#if !!course}
	<div class=" border-solid border-2 border-blue-300 m-4">
		<h1 class=" text-2xl text-center my-2">{course.title}</h1>
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
					<div>
						{#each course.authors ?? [] as author (author)}
							<div>{author}</div>
						{/each}
					</div>
					<div />
				</div>
			</div>
		</div>
	</div>
{/if}
