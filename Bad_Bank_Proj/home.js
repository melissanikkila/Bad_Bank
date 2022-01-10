function Home(){
    return(
        <Card
        bgcolor="dark"
        txtcolor="white"
        header="BadBank Landing Page"
        title="Welcome to BadBank"
        text="You can use this bank"
        body={(<img src="bank_img.png" className="img-fluid" alt="Responsive Image"/>)}
        />
    );
}