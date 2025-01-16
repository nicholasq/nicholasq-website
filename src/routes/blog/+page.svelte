<script lang="ts">
	import type { PageData } from './$types';
	import BlogPreviewCard from '$lib/ui/components/BlogPreviewCard.svelte';
	import { bgColors } from '$lib/util.ts';

	const { data }: { data: PageData } = $props();
</script>

<div class="m-auto flex w-full flex-col items-center gap-4 p-2 lg:w-[1200px] lg:p-0">
	<h1 class="text-4xl font-bold">Blog Posts</h1>
	<div class="flex w-full flex-col items-center gap-4">
		{#each data.posts as post, idx}
			<a class="w-full lg:w-96" href="/blog/{post.id}">
				<BlogPreviewCard bgColor={bgColors[idx % bgColors.length]} {...post} />
			</a>
		{/each}
	</div>
</div>
