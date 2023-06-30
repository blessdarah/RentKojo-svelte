<script>
    import axios from 'axios'
    import { goto } from '$app/navigation'

    let email = 'bayehniville@gmail.com', phoneNumber = '679988809', password = 'bayehniville@2023';
    $:  formData = {
        email, phoneNumber, password 
    }

    function login() {
        axios.post('https://rentkojo.com/auth/login', formData)
            .then(response => response.data?.success)
            .then(result => goto('/dashboard'))
        .catch(err => console.log(err))
        console.log('values: ', formData)
    }
</script>
<form on:submit|preventDefault={login}>
    <h3 class="font-black text-center mb-4 text-4xl">Login</h3>
    <div>
        <label for="phoneNumber">Phone number</label>
        <input type="text" id="phoneNumber" bind:value={phoneNumber} name="phoneNumber" required>
    </div>
    <div>
        <label for="email">Email</label>
        <input type="email" id="email" bind:value={email} required>
    </div>
    <div>
        <label for="password">password</label>
        <input type="password" id="password" bind:value={password} required>
    </div>
        <p class="text-sm mb-3">Don't have an account? <a href="/signup" class="text-teal-400">Sign up</a></p>
    <button type="submit" role="button" class="bg-teal-500 text-teal-700">Login</button>
</form>

<style>
    form {
        max-width: 600px;
        margin: 5rem auto;
    }
</style>
