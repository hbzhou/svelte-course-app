<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	export let showModal: boolean; // boolean

	let dialog: HTMLDialogElement;
	const dispatch = createEventDispatcher();

	$: if (dialog && showModal) dialog.showModal();

	const handleClose = () => {
		dialog.close();
		dispatch('close');
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-noninteractive-element-interactions -->
<dialog bind:this={dialog} on:close={() => (showModal = false)} on:click|self={handleClose}>
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div on:click|stopPropagation>
		<slot name="header" />
		<hr />
		<slot />
		<hr />
		<div class="flex justify-end mr-8 items-center">
			<button
				on:click={handleClose}
				class="border-2 border-solid rounded-md w-24 h-8 ml-2 mt-2 bg-teal-500">Cancel</button
			>
			<button
				on:click={handleClose}
				class="border-2 border-solid rounded-md w-24 h-8 ml-2 mt-2 bg-emerald-600">Save</button
			>
		</div>
	</div>
</dialog>

<style>
	dialog {
		max-width: 48em;
		min-width: 32em;
		max-height: 48em;
		min-height: 12em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
