<script>
    let counter = 0;
</script>

<button on:click={() => counter++}>Increment</button>
<span>{counter}</span>
<button on:click={() => counter--}>Increment</button>
