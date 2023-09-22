interface IPost{
    id:number;
    userId:number;
    title:string;
    body:string;
}

const getPostsByUserId = (id:number):Promise<IPost[]> => fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
    .then(value => value.json())

const start = async ()=>{
    const url = new URL(location.href);
    const userId = url.searchParams.get('userId');
    const posts = await getPostsByUserId(+userId);
    const postContainerDiv = document.querySelector<HTMLDivElement>('#postContainer');

    posts.forEach(post=>{
        const postItemDiv = document.createElement('div');
        postItemDiv.innerText = `${post.id}) userId: ${post.userId} -- ${post.title}`
        postContainerDiv.appendChild(postItemDiv)
    })

}


start()