function Login(){
    const [show, setShow]            =React.useState(true);
    const [email, getEmail]          =React.useState('');
    const [password, getPassword]    =React.useState('');
    const ctx = React.useContext(UserContext);
     function validate(field, label){
             if(!field) {
                 getStatus('Error: ' + label + ' field missing');
                 setTimeout(() => setStatus(''),5000);
                 return false;
             }
             return true;
         }
     
         function handleCreate(){
             console.log(email,password);
             if (!validate(email,     'Email')) return;
             if (!validate(password,  'Password')) return;
             ctx.users.push({email, password, balance:100});
             setShow(false);
         }
     
        return(
         <Card
            bgcolor="dark"
            txtcolor="white"
            header="Login"
            body={show ? (
                <>
                Email Address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => getEmail(e.currentTarget.value)} /><br/>
                
                Password<br/>
                <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => getPassword(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light" onClick={handleCreate}>Login</button>
                </>
            ):(
                <>
                <h5>Success</h5>
                </>
            )}
         />
        )
     }