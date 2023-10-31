import React, { useState } from "react";
import timg from"./IMG-20230922-WA0012.jpg"
import AppContext from "./Context"
const ContState = (props) => {

    const pro = [


        { category: "Adida", price: "500₹", key: "1", rating: "4.5", name: "round shirt" ,id:"n1",img:"/img"}, { category: "fam", price: "600₹", key: "2",name:"shirt" ,id:"n2" }, { category: "fam1", price: "600₹", key: "3",id:"n3" ,rating: "4.5", name: "round shirt"}, { category: "fam2", price: "600₹", key: "4",id:"n4",rating: "4.5", name: "round shirt" }, { category: "fam3", price: "600₹", key: "5",id:"n5" ,rating: "4.5", name: "round shirt"}, { category: "fam4", price: "600₹", key: "6",id:"n6",rating: "4.5", name: "round shirt" }]
const jeansb=
        [{ category: "", price: "500₹", key: "3" }, { category: "fam", price: "600₹", key: "3" }, { category: "fam", price: "600₹", key: "3" }, { category: "fam", price: "600₹", key: "3" }, { category: "fam", price: "600₹", key: "3" }
        // T_shirt: { category: "Vegetables", price: "500₹", key: "4" },
        //     lower: { category: "Vegetables", price: "500₹", key: "5" },
        //     name: { category: "Vegetables", price: "500₹", key: "6" },
    ]
    // const update = () => {
       
       
    //         pro[0].map((element) => {


    //             return element;
    //         })
        
    // }


    const [state, setState] = useState(pro)
    return (<AppContext.Provider value={ pro }>

        {props.children}

    </AppContext.Provider>)
}

export default ContState;