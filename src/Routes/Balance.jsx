import React , {useEffect,useState} from 'react'
import axios from 'axios';






const Balance = () => {
    const [balance,setBalance] = useState(0);
    const [credits,setCredits] = useState(0);
    const [debit,setDebit] = useState(0);
    const [purchases,setPurchases] = useState([]);
    const [textData,setTextData] = useState(0);

    


    useEffect(() => {
        axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits')
        .then((response) => {
            setDebit(response.data);
            console.log(response);

           
        })
        .catch((err) => {
            console.log(err);
        })
    },[])
    useEffect(() => {
        axios.get('https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits')
        .then((response) => {
            setCredits(response.data);
            console.log(response);

           
        })
        .catch((err) => {
            console.log(err);

        })
    },[])

    useEffect(() => {
        setBalance(credits - debit);
    },[credits,debit])


    
    
    const showPurchases = () => {
        return purchases.map((purchase,index) => {
            return(
                <div className="transaction" key={index}>
                    <p>{purchase.description}</p>
                    <p>{purchase.amount}</p>
                </div>
            )

        })
    }



    return(
        <div>
            <p>Balance: {balance}</p>
            <p>Credits: {credits}</p>
            <p> Debits: {debit}</p>
        

            <input type="text" placeholder="Enter Amount" onChange={(e) => {
                setTextData(e.target.value);
            }}/>
            <br/>
            <button onClick={() => {
                //setBalance(balance + parseInt(textData));
                setCredits(credits + parseInt(textData));
                setPurchases(purchases.concat({description: "Credit", amount: parseInt(textData)}));
            }}>Credit</button>
            <br/>
            <button onClick={() => {
                setDebit(debit - parseInt(textData));
                setPurchases(purchases.concat({description: "Debit", amount: parseInt(textData)}));

                //setCredits(credits - parseInt(textData));
            }}>Debit</button>
            
            {showPurchases()}

        </div>
    );
}



export default Balance;