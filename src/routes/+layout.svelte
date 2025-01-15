<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<nav>
	<ul
		class="m-auto mb-4 flex w-full items-center justify-center gap-4 rounded-lg border-2 border-black bg-white p-4 text-lg shadow-[5px_5px_0_0] lg:mb-8 lg:w-[1200px]"
	>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/links">Links</a></li>
	</ul>
</nav>

{@render children()}

<style>
	:global(body) {
		background: var(--color4);
	}
</style>
