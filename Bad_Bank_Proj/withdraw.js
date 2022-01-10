function Withdraw() {
    const ctx = React.useContext(UserContext); 
    const [status, setStatus]     = React.useState(true);
    const [balance,setBalance] = React.useState("");
    const [dbbalance,setdbbalance] = React.useState(0);
    const [enableButton, setEnableButton] = React.useState(false);
    let userWithdraw = 0;

    /*
    function fetchAccount() {
        if (ctx.users[0]!=='') { 
        fetch(`/account/balance/${ctx.users[0].email}`)
        .then(response => response.json())
        .then(data => {
                console.log(data);
                setdbbalance(parseInt(ctx.users[0].balance))
                setBalance('Your current balance is : $' + ctx.users[0].balance);
        });
        } 
    }

    fetchAccount(); */


    function validateAmount(e){
        if (isNaN(+e.currentTarget.value)){
            setStatus("ERROR : Amount entered should be a number");
            setEnableButton(false)
            setTimeout(() => setStatus(""), 3000);
            return;
        }

        if (e.currentTarget.value < 0) {
            setStatus("ERROR : Amount cannot be negative");
            setEnableButton(false)
            setTimeout(() => setStatus(""), 3000);
            return;
        }
        
        else{
        userWithdraw = e.currentTarget.value;
        setEnableButton(true);
        }
       
    }


    function withdrawAmount() {
        if (ctx.users[0]!=='') { 
        if (ctx.users[0].balance < userWithdraw){
            setStatus("ERROR: Transaction Failed, Amount greater than current Balance");
            setTimeout(() => setStatus(""), 3000);
            return;
        }
        else {
        setStatus(`$${userWithdraw} withdrawal successful!`);
        //setTimeout(() => setStatus(''),3000);

        ctx.users[0].balance = Number(ctx.users[0].balance) - Number(userWithdraw);
        //ctx.users[0].balance.toString();
        /*const url = `/account/withdraw/${ctx.users[0].email}/${ctx.users[0].balance}`;
        (async () => {
            var res = await fetch(url);
            var data = await res.json();
            console.log(data);
        })();*/
        setEnableButton(false)
        document.getElementById('clear-input').value = '';
        }
    } 
        
        else {
            setStatus('Login to make a withdrawal');
            setTimeout(() => setStatus(''),3000);
        }
    }
    

    return (
        <Card
            bgcolor="dark"
            header="Withdraw"
            txtcolor="white"
            text={balance}
            status={status}
            body={
                <>
                Balance:
                ${JSON.stringify(ctx.users[0].balance)}
                <br></br>
                Amount
                <br/>
                <input className="form-control" id="clear-input" placeholder="$0.00" onChange={e => validateAmount(e) }/>
                <br/>
                {<button type="submit" className="btn btn-light" onClick={withdrawAmount} disabled={!enableButton}>Withdraw</button>}
                </>
            }
        />
    )
}