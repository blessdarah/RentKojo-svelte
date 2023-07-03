<section class="flex items-center justify-between my-4">
<h3>Tags</h3>
    <form class="flex items-center space-x-2 mb-0">
        <input type="text" placeholder="create or edit tag" />
        <button role="button">create</button>
    </form>
</section>
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Tag</th>
            <th>Action</th>
        </tr>
    </thead>
        <tbody>

    <tr>
        <td>1</td>
        <td>Tag 1</td>
        <td class="flex space-x-2">
                <a href="#" role="button" class="py-1 text-sm">Edit</a>
                <a href="#" role="button" class="py-1 text-sm bg-red-500 border-red-700 hover:bg-red-400">Delete</a>
            </td>
    </tr>
    </tbody>
</table>

<style>
    input {
        padding: 2px 30px 2px 10px;
        margin: 0;
        height: 44px;
        font-size: 14px;
    }

    form button {
        padding: 0;
        height: 44px;
        font-size: 14px;
    }
</style>
