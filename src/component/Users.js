

const Users=({user})=>{

    return(
        <div>
            <hr/>
            <p>{`FullName ${user.name.first} ${user.name.last}`}</p>
            <p>{`Phone ${user.phone}`}</p>
        </div>
    )
}
export default Users;