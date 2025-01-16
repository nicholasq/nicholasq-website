<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		bgColor: string;
		children: Snippet;
		clickable?: boolean;
	}

	const { bgColor, children, clickable = false }: Props = $props();
</script>

<div
	class="{bgColor} card rounded-lg border-2 border-black p-2 shadow-[5px_5px_0_0] {clickable &&
		'clickable'}"
>
	{@render children()}
</div>

<style>
	.card {
		transition:
			transform 0.2s ease,
			box-shadow 0.2s ease;
	}
	.card.clickable:hover {
		transform: translateY(-2px);
		box-shadow: 6px 6px 0 0;
	}
</style>
