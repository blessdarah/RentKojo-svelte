<script>
    import '@picocss/pico'
</script>

<header>
    <a href="/">
        <strong>Logo</strong>
    </a>
    <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/dashboard">Dashboard</a>
        <a href="/login" role="button">Login</a>
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
        padding: 10px 3rem;
    }
    nav {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }
    main {
        margin-top: 2rem;
        width: 90vw;
        max-width: 100%;
        margin: 0 auto;
    }
</style>
