<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		bgColor: string;
		children: Snippet;
	}

	const { bgColor, children }: Props = $props();
</script>

<div class="{bgColor} rounded-lg border-2 border-black p-2 shadow-[5px_5px_0_0]">
	{@render children()}
</div>
