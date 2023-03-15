<script lang="ts">
  import Button from "../lib/Button.svelte";
  export let slotContent: string;
</script>

<Button {...$$props}>
  {@html slotContent}
</Button>
