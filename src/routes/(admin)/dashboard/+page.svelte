<script>
    import axios from 'axios'
    let users = [];

    afternNavigate = function() {
        axios.get('https://rentkojo.com/api/users')
            .then(response => response.data?.success)
        .then(result => users = [...result.data.data])
        .catch(err => console.log(err))
        console.log('users: ', users)
    }
</script>

<h3>Dashboard</h3>
<p>Users</p>
