<script lang="ts">
    import axios from 'axios'
    import type {PageData} from './$types'

    export let data: PageData;
    console.log(data.categories)
</script>

<h3>Dashboard</h3>
<p>Users</p>

<div>{@html data.categories}</div>
