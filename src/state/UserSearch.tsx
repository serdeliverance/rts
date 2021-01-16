import { useState } from 'react'

const users = [
    { name: 'Sarah', age: 20},
    { name: 'Alex', age: 20},
    { name: 'Pedro', age: 32}
]

const UserSearch: React.FC = () => {
    const [name, setName] = useState('')

    // remember, when page is load the first time or when user not found, user is undefined.
    // Because of that, we add this generic type using Union Type.
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const onClick = () => {
        const foundUser = users.find((user) => {
            return user.name === name
        })

        setUser(foundUser)
    }

    return <div>
        User Search
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={onClick}>Find User</button>
        <div>
            {user && user.name}         {/* if user is defined, then it shows user.name */}
            {user && user.age}          {/* if user is defined, then it shows user.age */}
        </div>
    </div>
}

export default UserSearch