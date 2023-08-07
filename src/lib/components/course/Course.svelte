<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let course: Course;
	const { id, title, description, duration, authors, creationDate } = course;
</script>

<div class="flex justify-between items-center m-4 border-solid border-2 border-green-500">
	<div class="flex flex-col m-4 w-1/2">
		<h1 class="text-2xl text-left my-2">{title}</h1>
		<div>{description}</div>
	</div>
	<div class="flex flex-col justify-evenly flex-grow m-4 min-w-fit">
		<div class="m-2">
			<span>Authors:</span>
			<span>{authors?.join(',')}</span>
		</div>
		<div class="m-2">
			<span>Duration:</span>
			<span>{duration} hours</span>
		</div>
		<div class="m-2">
			<span>Created:</span>
			<span>{creationDate}</span>
		</div>
		<div class="m-2 text-center">
			<button
				class="border border-solid w-36 p-1 bg-sky-500"
				on:click={() => goto(`${$page.url.pathname}/${id}`)}
			>
				Show course
			</button>
		</div>
	</div>
</div>
