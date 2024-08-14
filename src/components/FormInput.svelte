<script lang="ts">
  export let id: string;
  export let currentValue: string;
  export let type: string;
  function typeAction(node: HTMLInputElement) {
    node.type = type;
  }
</script>

<div>
  <input use:typeAction {id} bind:value={currentValue} />
</div>
