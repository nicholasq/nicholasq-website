<script lang="ts">
  import { onMount } from "svelte";
  import Card from "$lib/ui/components/Card.svelte";
  import BlogPreviewCard from "$lib/ui/components/BlogPreviewCard.svelte";
  import Chip from "$lib/ui/components/Chip.svelte";
  import Terminal from "$lib/ui/components/Terminal.svelte";
  import type { PageData } from "./$types";
  import { bgColors } from "$lib/util";

  const { data }: { data: PageData } = $props();

  const prompt = "$ ";
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
      displayedCommand += "\n" + (messageIndex === 0 ? prompt : "");
      charIndex = 0;
      messageIndex++;
      setTimeout(typeCommand, 2000);
    }
  }

  onMount(() => {
    typeCommand();
  });
</script>

<div class="m-auto flex w-full flex-col items-center gap-8 p-2 lg:w-[1200px] lg:p-0">
  <div class="relative mb-8 flex flex-col items-center md:mb-0">
    <Chip bgColor="bg-white">
      <p
        class="text-center text-5xl text-[color:var(--color5)] sm:text-7xl lg:text-8xl"
        style="text-shadow: 3px 3px 0 black; -webkit-text-stroke: 2px black"
      >
        {data.title}
      </p>
      <div class="absolute right-16 top-36 -rotate-12 sm:top-32 md:right-32">
        <Card bgColor="bg-septenary">
          <p>{data.jobTitle}</p>
        </Card>
      </div>
    </Chip>
  </div>

  <div class="w-full lg:w-1/2">
    <Terminal bgColor="bg-black">
      <pre class="h-16 whitespace-pre-wrap text-red-500">{displayedCommand}</pre>
    </Terminal>
  </div>

  <h2 class="text-center text-4xl text-black sm:text-6xl">Some of My Work</h2>

  <div class="flex w-full flex-col items-center gap-4 text-2xl lg:w-3/4">
    {#each data.projects as project, idx}
      <Card bgColor={idx % 2 === 0 ? "bg-senary" : "bg-septenary"}>
        <div class="flex h-full w-full flex-1 flex-col items-center">
          <h3 class="text-base sm:text-3xl">
            <a href={project.url}> {project.title}</a>
            <img class="inline-block" src="/external-link.svg" alt="External link icon" />
          </h3>
          <p class="w-full text-left text-base sm:text-center sm:text-lg">
            {project.content}
          </p>
        </div>
      </Card>
    {/each}
  </div>

  <h2 class="text-center text-4xl text-black sm:text-6xl">Recent Blog Posts</h2>

  <div class="mb-16 flex w-full flex-col items-center gap-4 text-2xl lg:flex-row">
    {#each data.mostRecentPosts as post, idx}
      <a class="w-full lg:w-96" href="/blog/{post.id}">
        <BlogPreviewCard bgColor={bgColors[idx]} {...post} />
      </a>
    {/each}
  </div>
</div>
