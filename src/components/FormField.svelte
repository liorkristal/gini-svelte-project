<script lang="ts">
  export let labelName: string;
  export let labelFor: string;
  export let errorMessage: string | undefined;
</script>

<div>
  <label for={labelFor}>{labelName}</label>
  <div class="form-field-children">
    <slot />
  </div>
  {#if errorMessage}
    <span style="color:red">{errorMessage}</span>
  {/if}
</div>

<style>
    .form-field-children {
        display:flex;
        justify-content: center;
        gap: 3px;
    }
</style>
