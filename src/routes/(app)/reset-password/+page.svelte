<script>
    let password, confirmPassword = '';
    $: formData = {password, confirmPassword}
    function resetPassword() {
        console.log('data: ', formData)
    }
</script>

<section class="mt-8 lg:mt-16">
    <h3 class="font-black text-center mb-4 text-4xl">Reset password 🤭</h3>
    <p class="text-sm text-center lg:w-1/3 lg:mx-auto">Your password should be at least 8chars long and should include a capital letter, number and a symbol</p>
    <form on:submit|preventDefault={resetPassword} class="mt-6 max-w-full px-4 md:w-1/2 mx-auto">
        <div>
            <label for="password">New password</label>
            <input type="password" id="password" bind:value={password} placeholder="Enter your new password" required>
        </div>
        <div>
            <label for="confirmPassword">Confirm passsword</label>
            <input type="password" id="confirmPassword" bind:value={confirmPassword} placeholder="Confirm your password" required>
        </div>
        <button role="button">🙏  Reset my password <button>
    </form>
</section>
