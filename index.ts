interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
}

const getAllUsers = ():Promise<IUser[]> =>fetch('https://jsonplaceholder.typicode.com/users').then(value => value.json())


const main = async ()=>{
    const a = 'dddddd'
    const users = await getAllUsers();
    const userContainerDiv = document.querySelector<HTMLDivElement>('#userContainer');
    users.forEach(user=>{
        const userItem = document.createElement('div');
        userItem.innerText = `${user.id}) ${user.name} -- ${user.email}`
        const button = document.createElement('button');
        button.innerText ='Posts'
        button.onclick =()=>{
            location.href = `./posts.html?userId=${user.id}`
        }
        userItem.appendChild(button)
        userContainerDiv.appendChild(userItem)
    })
}

main()