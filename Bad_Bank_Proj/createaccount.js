function CreateAccount(){
   const [show, setShow]            =React.useState(true);
   const [disabled, setDisabled]    =React.useState(true);
   const [status, setStatus]        =React.useState('');
   const [name, setName]            =React.useState('');
   const [email, setEmail]          =React.useState('');
   const [password, setPassword]    =React.useState('');
   const ctx = React.useContext(UserContext);
   let pass1 = document.getElementById("password");


   // Checks password length
   function checkPass(){
    if (pass1.value.length < 8){
        setStatus("Password must be at least 8 characters");
        return;
    } else{
        setStatus("");
        return;
    }
  } 
   
  //Button Click behavior, if conditions are met, account is created and stored.  If conditions are not met, and appropriate response is shown to the user.
   function validate(field, label){
        if(!field) {
            setStatus('Error: ' + label + ' field missing');
            setTimeout(() => setStatus(''),5000);
            return false;
        }
        if(pass1.value.length < 8){
            setStatus("Error: Password must be at least 8 characters");
            return false;
        }
        if(field && pass1.value.length >= 8){
            return true;
        }
        
    }

//Decides if button should be enabled or disabled
    if (!name & !email & !password) {
		if (disabled) {
			console.log(disabled);
			console.log(`button disabled ${disabled}`);
		} else {
			setDisabled(true);
			console.log(`button disabled ${disabled}`);
		}
	} else {
		if (disabled) {
			setDisabled(false);
			console.log(`button disabled ${disabled}`);
		} else {
			console.log(`button disabled ${disabled}`);
		}
	}

    function handleCreate(){
        console.log(name,email,password);
        if (!validate(name,      'Name')) return;
        if (!validate(email,     'Email')) return;
        if (!validate(password,  'Password')) return;
        ctx.users.push({name, email, password, balance:100});
        setShow(false);
    }

   function clearForm(){
       setName('');
       setEmail('');
       setPassword('');
       setShow(true);
   }

   return(
    <Card
       bgcolor="dark"
       txtcolor="white"
       header="Create Account"
       status={status}
       body={show ? (
           <>
           Name<br/>
           <input 
           type="input" 
           className="form-control" 
           id="name" 
           placeholder="Enter Name" 
           value={name} 
           onChange={e => setName(e.currentTarget.value)} /><br/>
           
           Email Address<br/>
           <input 
           type="input" 
           className="form-control" 
           id="email" 
           placeholder="Enter Email" 
           value={email} 
           onChange={e => setEmail(e.currentTarget.value)} /><br/>
           
           Password<br/>
           <input 
           type="password" 
           className="form-control" 
           id="password" 
           placeholder="Enter Password" 
           value={password} 
           onChange={e => setPassword(e.currentTarget.value)} 
           onKeyUp={checkPass}
           /><br/>
           {disabled ? ( 
                <button 
                type="submit" 
                disabled="disabled" 
                className="btn btn-light" 
                onClick={handleCreate}>Create Account</button>
                 ) :(
                <button 
                type="submit" 
                className="btn btn-light" 
                onClick={handleCreate}>Create Account</button>
           )}
           </>
       ):(
           <>
           <h5>Success</h5>
           <button type="submit" className="btn btn-light" onClick={clearForm}>Add Another Account</button>
           </>
       )}
    />
   )
}

