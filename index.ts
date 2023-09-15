// const asd = (arrOfNumbers:number[])=>{
// }
//
//
// asd(['1','3'])
// asd(['1','3'])
// asd(['1','3'])
// asd(['1','3'])
// asd(['1','3'])
// asd(['1','3'])
//
// interface IUser<T> {
//     id: number;
//     name: string;
//     age: number
//     work: T[]
// }
//
// const user: IUser<number> = {id: 1, name: 'Max', age: 5, work: [1, 2, 3, 4]}
// const user2: Partial<IUser<string>> = {id: 1, work: ['1', '2']}
//
// interface IUserTools{
//     sayHello():void
// }
// class User implements IUserTools{
//     constructor(private name: string, public age: number) {
//     }
//
//      getName():string{
//         return this.name
//     }
//
//     sayHello(): void {
//         console.log('hello');
//     }
// }
//
// const user = new User('Max', 15);
//
// console.log(user.getName());
// user.sayHello()
//
//


interface IUser {
    id: number;
    name: string;
    age: number
}

type IUserForm = Pick<IUser, 'name' | 'age'>

// interface IUserForm{
//     name: string;
//     age: number
// }


class UserService {
    private static readonly _usersKey = 'users'
    // constructor(private name:string) {
    // }
    private static _getAll(): IUser[] {
        return JSON.parse(localStorage.getItem(this._usersKey)) || [
            {id: 1, name: 'Max', age: 5}
        ]
    }

    // getName():string{
    //     return this.name
    // }
    static create(data: IUserForm): void {
        const users = this._getAll();
        const id = users.length ? users.slice(-1)[0].id + 1 : 1
        users.push({id,...data})
        this._setToStorage(users)
    }

    static deleteById(id:number):void{
        const users = this._getAll();
        const index = users.findIndex(user=>user.id === id);
        users.splice(index,1)
        this._setToStorage(users)
    }

    static showHtml(): void {
        const userContainer = document.querySelector('#userContainer') as HTMLDivElement;
        userContainer.innerHTML = ''
        const users = this._getAll();

        const usersHtmlContent = users.map(user => {
            const itemDiv = document.createElement('div');
            const button = document.createElement('button');
            button.onclick =()=>{
                this.deleteById(user.id)
            }
            button.innerText = 'delete'
            itemDiv.innerText = `${user.id}) ${user.name} -- ${user.age}`
            itemDiv.appendChild(button)
            return itemDiv
        });

        if (usersHtmlContent.length) {
            userContainer.append(...usersHtmlContent)
        } else {
            userContainer.innerText = 'Users not exists!!!'
        }
    }

    private static _setToStorage(data: IUser[]): void {
        localStorage.setItem(this._usersKey, JSON.stringify(data))
        this.showHtml()
    }
}

// const userService = new UserService();

UserService.showHtml()

interface IInputs{
    name:HTMLInputElement;
    age:HTMLInputElement
}

const form = document.forms['userForm'] as HTMLFormElement;

form.onsubmit = (e:SubmitEvent)=>{
    e.preventDefault()
    // const {name,age} = form as any as IInputs;
    const {name:{value:name}, age:{value:age}} = form as any as Record<keyof IUserForm, HTMLInputElement>;


    UserService.create({name,age:+age})
    form.reset()
}

