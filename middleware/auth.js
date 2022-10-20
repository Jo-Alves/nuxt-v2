export default ({redirect}) => {
    console.log("middleware auth")
    const logged = false

    if(!logged)
    return redirect("/")
}