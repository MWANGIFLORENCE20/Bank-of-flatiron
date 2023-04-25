import React,{useState,useEffect} from"react";
import Search from "./Search";
import AddTrascation from "./AddTransaction";
import Transaction from"./Transaction";

function App(){
    const[search,setSearch]=useState("")
    const[transactions,setTransaction]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8001/transactions"+search)
        .then(respo => respo.json())
        .then(Transaction=>setTransaction(transactions))
    },[search])
    function handleSearch(e) {
        setSearch(e.target.value)
      }
      return (
        <div className="ui raised segment"> 
          <div className="ui segment violet inverted">
            <h2>The Royal Bank of Flatiron</h2>
          </div>
          <Search handleSearch={handleSearch} />
          <AddTransaction />
          <Transaction transaction={transaction} />
        </div>
      );
}