function Deposit() {
    const ctx = React.useContext(UserContext); 
    const [status, setStatus]     = React.useState(true);
    const [balance,setBalance] = React.useState("");
    const [enableButton, setEnableButton] = React.useState(false);
    //const [deposit, setDeposit] = React.useState("");
    let userDeposit = 0;

    /* 
    function fetchAccount() {
        if (ctx.users[0]!=='') { 
        fetch(`/account/balance/${ctx.users[0].email}`)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                setBalance('Your current balance is : $' + ctx.users[0].balance);
        });
        } 
    }

    fetchAccount();*/

    function validateAmount(e){
        if (isNaN(+e.currentTarget.value)){
            setStatus("ERROR: Amount entered must be a number");
            setEnableButton(false)
            setTimeout(() => setStatus(""), 3000);
            return;
        }

        if (e.currentTarget.value < 0) {
            setStatus("ERROR: Amount cannot be negative");
            setEnableButton(false)
            setTimeout(() => setStatus(""), 3000);
            return;
        }
        else{
        userDeposit = e.currentTarget.value;
        setEnableButton(true);
        }
       
    }


    function depositAmount() {
        if (ctx.users[0]!=='') { 
        setStatus(`$${userDeposit} deposit successful!`);
        //setTimeout(() => setStatus(''),3000);

        ctx.users[0].balance = Number(ctx.users[0].balance) + Number(userDeposit);
        //ctx.users[0].balance.toString();
        /*const url = `/index/${ctx.users[0].email}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();*/
        setEnableButton(false)
        document.getElementById('clear-input').value = '';
        } else {
            setStatus('Login to make a deposit');
            setTimeout(() => setStatus(''),3000);
        }
    }


    return (
        <Card
            bgcolor="dark"
            txtcolor="white"
            header="Deposit"
            text={balance}
            status={status}
            body={
                <>
                Balance:
                ${JSON.stringify(ctx.users[0].balance)}
                <br/>
                Amount
                <br/>
                <input className="form-control" id="clear-input" placeholder="$0.00" onChange={e => validateAmount(e)} />
                <br/>
                {<button type="submit" className="btn btn-light" onClick={depositAmount} disabled={!enableButton}>Deposit</button>}
                </>
            }
        />
    )
}