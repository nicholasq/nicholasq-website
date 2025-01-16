<script lang="ts">
	import type { PageData } from './$types';
	import Card from '$lib/ui/components/Card.svelte';

	const { data }: { data: PageData } = $props();

	const paragraphs = data.post.content.split('\n\n');
</script>

<div class="m-auto flex w-full flex-col items-center gap-4 p-2 lg:w-[1200px] lg:p-0">
	<Card bgColor="bg-secondary text-lg">
		<div class="flex flex-col p-4">
			<h1 class="self-center text-4xl font-bold">{data.post.title}</h1>
			<div class="flex flex-col items-center gap-4 lg:w-[600px]">
				<p class="text-2xl">{data.post.pubDate}</p>
				<p class="text-2xl">{data.post.description}</p>

				{#each paragraphs as paragraph}
					<p class="font-ezread text-xl md:text-2xl lg:text-lg">{paragraph}</p>
				{/each}
			</div>
		</div>
	</Card>
</div>
