<script lang="ts">
  export let size: "small" | "large" = "large";
</script>

<!-- markup (zero or more items) goes here -->
<button class="cowa-btn" class:cowa-btn--small={size === "small"}>
  <slot>Cowabunga!</slot>
</button>

<style lang="scss">
  @use "./scss/button";
</style>
