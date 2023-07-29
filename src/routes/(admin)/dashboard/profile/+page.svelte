<script lang="ts">
	import type { User } from '../../../../models/user';
	import { userStore } from '../../../../store';
	let user: User;
	userStore.subscribe((value) => (user = value));

	console.log('user: ', user);
</script>

<div class="lg:mx-auto mx-4 lg:w-8/12 my-4 lg:my-8">
	<div>
		<h3>{user.email}</h3>
		<p>{user.firstname} {user.lastname} (@{user.username})</p>
		<img class="rounded-full relative -top-1/2" src="https://picsum.photos/80" alt="avatar" />
	</div>
</div>
