<script lang="ts">
  export let id: string;
  export let selectedValue: string;
  export let options: string[];
</script>

<div>
  <select bind:value={selectedValue} class="select-input">
    <option selected disabled value={""}>Select a prefix.</option>
    {#each options as option}
      <option value={option}>{option}</option>
    {/each}
  </select>
</div>


<style>
    .select-input {
        width: 60px;
    }
</style>
