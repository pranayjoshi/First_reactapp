function Message(){
    const name = "Pranay";
    if (name)
        return <h1> hello {name}</h1>;
    return <h1> hello World</h1>;
}

export default Message;