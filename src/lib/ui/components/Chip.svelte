<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		bgColor: string;
		children: Snippet;
	}

	const { bgColor, children }: Props = $props();
</script>

<div
	class="flex w-fit items-center justify-center rounded-full border-2 border-black {bgColor} p-8 shadow-[5px_5px_0_0]"
>
	{@render children()}
</div>
