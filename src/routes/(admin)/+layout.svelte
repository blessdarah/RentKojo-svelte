<header>
    <a href="/">
        <strong>Admin logo</strong>
    </a>
    <nav>
        <a href="/dashboard">Dashboard</a>
        <a href="/dashboard/profile">Profile</a>
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
