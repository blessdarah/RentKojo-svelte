<script>
   import '@picocss/pico';
   import "../../app.css";   
</script>

<header class="py-4 px-10">
    <a href="/">
        <strong>Logo</strong>
    </a>
    <nav class="text-sm flex space-x-3 items-center">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login" role="button" class="text-sm rounded-full">Login</a>
    </nav>
</header>
<main>
    <slot />
</main>

<style>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    main {
        margin-top: 2rem;
        width: 90vw;
        max-width: 100%;
        margin: 0 auto;
    }
    a[role="button"] {
        padding: .8rem 2rem;
    }
</style>
