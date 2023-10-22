function Todo ({todo, index}){


    return (
        <div className="alert bg-light my-2" index={index}>{todo}</div>
    )
}

export default Todo;