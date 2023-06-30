<script>
    import axios from 'axios'
    import {goto} from '$app/navigation'

    let firstname, lastname, username, email, phoneNumber, password = '';
    $:  formData = {
        firstname, lastname, username, email, phoneNumber, password 
    }
    function signup() {
        axios.post('https://rentkojo.com/api/users', formData)
            .then(response => response.data?.success)
        .then(data => goto('/login'))
        .catch(err => console.log(err))
        console.log('values: ', formData)
    }
</script>

<form on:submit|preventDefault={signup}>
    <h3 class="font-black text-center mb-4 text-4xl">Sign Up</h3>
    <div class="flex gap-3">
        <div>
            <label for="firstname">First name</label>
            <input type="text" id="firstname" name="firtname" bind:value={firstname} placeholder="Enter your firstname" required>
        </div>
        <div>
            <label for="lastname">Last name</label>
            <input type="text" id="lastname" name="firtname" bind:value={lastname} placeholder="Enter your lastname" required>
        </div>
    </div>
    <div>
        <label for="username">😎 Username</label>
        <input type="text" id="username" name="username" bind:value={username} placeholder="Enter your username" required>
    </div>
    <div>
        <label for="email">📧 Email</label>
        <input type="email" id="email" name="email" bind:value={email} placeholder="Enter your email" required>
    </div>
    <div>
        <label for="phoneNumber">📱 Phone number</label>
        <input type="tel" id="phoneNumber" name="phoneNumber" bind:value={phoneNumber} placeholder="Provide a WhatsApp number" required>
    </div>
    <div>
        <label for="password">🔐 Password</label>
        <input type="password" id="password" name="password" bind:value={password} placeholder="*************" required>
    </div>
    <p class="text-sm mb-3">Already have an account? <a href="/login" class="text-teal-400">Login</a></p>
    <button role="button" class="">Sign Up</button>
</form>

<style>
    form {
        max-width: 600px;
        margin: 5rem auto;
    }
</style>
