export  const withAuth=(Component)=>{
    const isAuthenticated=true
    return function(props){
        if(isAuthenticated){
            return <Component {...props}/>
        }else{
            return <p>Not authenticated</p>
        }
    }
}