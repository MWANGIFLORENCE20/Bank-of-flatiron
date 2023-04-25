import React,{useState} from "react";

function AddTrascation (){
    const[date, setDate]=useState("")
    const[description, setDescription]=useState("")
    const[category,setCategory]=useState("")
    const[amount,setAmount]=useState("")

    function dateChange(){
        setDate(e.target.value)
    }
    function descriptionChange(){
        setDescription(e.target.value)
    }
    function changeCategory(){
        setCategory(e.target.value)
    }
    function changeAmount(){
        setAmount(e.target.value)
    }

    function handleSubmit(e){
        fetch("http://localhost:8001/transactions",{
       Method:"post",
       header:{
        "content-type":"application/json"
       },
       body:JSON.stringify({
        date:date,
        description:description,
        category:category,
        amount:amount
       })
    });
    alert("Transactions have been added")
}
     return(
        <div className="ui segment">
            <form onSubmit={handleSubmit} className="ui form">
            <div className="inline fields">
                <input type="date" name="date" placeholder="Date" defaultValue={date} onChange={handleDateChange} />
                <input type="text" name="description" placeholder="Description" value={description} onChange={handleDescriptionChange}/>
                <input type="text" name="category" placeholder="Category" value={category} onChange={handleCategoryChange}/>
                <input type="number" min="1" max="1000000" name="amount" placeholder="Amount" value={amount} onChange={handleAmountChange}/>
            </div>
            <button className="ui button" type="submit">
            Add Transaction
            </button>
            </form>
        </div>
     )  
        

    }

    export default AddTrascation;







