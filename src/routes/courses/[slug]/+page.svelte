<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { courseStore } from '../../../store/courseStore';
	import { authorStore } from '../../../store/authorStore';

	const id = $page.params.slug;
	const course = $courseStore.find((item) => {
		return item.id === id;
	});
	const authorNames = $authorStore
		.filter((author) => course?.authors.includes(author.id))
		.map((author) => author.name);
</script>

{#if !!course}
	<div class=" border-solid border-2 border-blue-300 m-4">
		<div class="flex justify-center items-center my-4">
			<h1 class=" text-2xl text-center my-2">{course.title}</h1>
			<button
				class="border border-solid h-10 w-36 bg-sky-500 rounded-md p-1 ml-10"
				on:click={() => goto(`/courses/edit/${course.id}`)}>UPDATE</button
			>
		</div>
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
						{#each authorNames as authorName (authorName)}
							<div>{authorName}</div>
						{/each}
					</div>
					<div />
				</div>
			</div>
		</div>
	</div>
{/if}
