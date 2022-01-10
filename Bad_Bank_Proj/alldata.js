function AllData(){
    const ctx = React.useContext(UserContext);
    return (
    
     <>
                
    {ctx.users.map((ctx,i) => <Card 
      key={i}        
      bgcolor="dark"
      txtcolor="white"
      header="User Info"
      text={
        "Email: " + ctx.email }
      text1={
        "Password: " +  ctx.password
     }
      body={"Balance: $" + ctx.balance}/>
         
    )} 
    </>
    );
  }