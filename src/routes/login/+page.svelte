<form action="#">
<h3>Login</h3>
    <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="password">password</label>
        <input type="password" id="password" name="password" required>
    </div>
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
    <button type="submit">Login</button>
</form>

<style>
    form {
        max-width: 600px;
        margin: 5rem auto;
    }
</style>
