function Home(){
    return(
        <Card
        bgcolor="dark"
        txtcolor="white"
        header="BADBANK HOME PAGE"
        title="Welcome to BadBank"
        text="We have no security. 
        Bank at your own risk."
        body={(<img src="bank_img.png" className="img-fluid" alt="Responsive Image"/>)}
        />
    );
}
