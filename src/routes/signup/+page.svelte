<form action="#">
<h3>Sign Up</h3>
    <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" name="email" required>
    </div>
    <div>
        <label for="phone">Phone number</label>
        <input type="tel" id="phone" name="phone" required>
    </div>
    <div>
        <label for="password">password</label>
        <input type="password" id="password" name="password" required>
    </div>
    <div>
        <label for="passwordConfirm">Confirm password</label>
        <input type="password" id="passwordConfirm" name="passwordConfirm" required>
    </div>
    <button type="submit">Login</button>
</form>

<style>
    form {
        max-width: 600px;
        margin: 5rem auto;
    }
</style>
