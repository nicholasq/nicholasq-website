<script lang="ts">
	import { type Snippet } from 'svelte';

	interface Props {
		bgColor: string;
		children: Snippet;
	}

	const { bgColor, children }: Props = $props();
</script>

<div
	class="min-w-[200px] overflow-clip rounded-lg border-2 border-black bg-gray-100 shadow-[5px_5px_0_0]"
>
	<div class="flex items-center gap-2 border-b border-gray-200 p-2">
		<div class="h-3 w-3 rounded-full bg-red-500"></div>
		<div class="h-3 w-3 rounded-full bg-yellow-500"></div>
		<div class="h-3 w-3 rounded-full bg-green-500"></div>
	</div>
	<div class="p-4 {bgColor}">
		{@render children()}
	</div>
</div>
