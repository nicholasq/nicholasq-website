<script lang="ts">
  import Card from "$lib/ui/components/Card.svelte";

  interface Props {
    bgColor: string;
    title: string;
    pubDate: string;
    description: string;
  }

  const { bgColor, title, pubDate, description }: Props = $props();
</script>

<Card {bgColor} clickable={true}>
  <h2 class="text-2xl font-bold">{title}</h2>
  <p class="text-xl">{pubDate}</p>
  <p class="text-xl">{description}</p>
</Card>
