<script lang="ts">
	import { onMount } from 'svelte';
	import Card from '$lib/ui/components/Card.svelte';
	import Chip from '$lib/ui/components/Chip.svelte';
	import Terminal from '$lib/ui/components/Terminal.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();

	const prompt = '$ ';
	const terminalContent = [data.welcomeMessage, data.experience];
	let displayedCommand = $state(prompt);
	let messageIndex = $state(0);
	let charIndex = $state(0);

	function typeCommand() {
		if (messageIndex >= terminalContent.length) {
			displayedCommand = prompt;
			messageIndex = 0;
			charIndex = 0;
			setTimeout(typeCommand, 2000);
			return;
		}

		const currentMessage = terminalContent[messageIndex];
		if (charIndex < currentMessage.length) {
			displayedCommand += currentMessage[charIndex];
			charIndex++;
			setTimeout(typeCommand, 100);
		} else {
			displayedCommand += '\n' + (messageIndex === 0 ? prompt : '');
			charIndex = 0;
			messageIndex++;
			setTimeout(typeCommand, 2000);
		}
	}

	onMount(() => {
		typeCommand();
	});
</script>

<div class="m-auto flex w-full flex-col gap-8 p-2 lg:w-[1200px] lg:p-0">
	<div class="relative mb-8 flex flex-col items-center md:mb-0">
		<Chip bgColor="bg-white">
			<p
				class="text-center text-5xl text-[color:var(--color5)] sm:text-7xl lg:text-8xl"
				style="text-shadow: 3px 3px 0 black; -webkit-text-stroke: 2px black"
			>
				{data.title}
			</p>
			<div class="absolute right-16 top-36 -rotate-12 md:right-32 md:top-32">
				<Card bgColor="bg-septenary">
					<p>{data.jobTitle}</p>
				</Card>
			</div>
		</Chip>
	</div>

	<div class="m-auto w-full lg:w-1/2">
		<Terminal bgColor="bg-black">
			<pre class="whitespace-pre-wrap text-red-500">{displayedCommand}</pre>
		</Terminal>
	</div>
</div>
