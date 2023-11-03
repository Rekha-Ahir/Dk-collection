import React, { useState } from "react";
import img0 from "./IMG-20230922-WA0012.jpg"
import img2 from "./IMG-20230926-WA0010.jpg"
import img1 from "./IMG-20230922-WA0022.jpg"
import img4 from "./IMG-20230928-WA0001.jpg"

//************ */ jeans

import img5 from "./IMG-20230930-WA0001.jpg"
import img6 from "./IMG-20230928-WA0013.jpg"
import img7 from "./IMG-20231004-WA0007.jpg"
import img8 from "./IMG-20231101-WA0006.jpg"
import img9 from "./IMG-20231101-WA0057.jpg"
import img10 from "./IMG-20231101-WA0056.jpg"
import img11 from "./IMG-20231101-WA0055.jpg"
import img12 from "./IMG-20231101-WA0054.jpg"
import img13 from "./IMG-20231101-WA0053.jpg"
import img14 from "./IMG-20231101-WA0052.jpg"
import img15 from "./IMG-20231101-WA0051.jpg"
import img16 from "./IMG-20231101-WA0050.jpg"
import img17 from "./IMG-20231101-WA0049.jpg"
import img18 from "./IMG-20231101-WA0048.jpg"
import img19 from "./IMG-20231101-WA0047.jpg"
import img20 from "./IMG-20231101-WA0046.jpg"
import img21 from "./IMG-20231101-WA0045.jpg"
import img22 from "./IMG-20231101-WA0044.jpg"
import img23 from "./IMG-20231101-WA0043.jpg"
import img24 from "./IMG-20231101-WA0042.jpg"
import img25 from "./IMG-20231101-WA0041.jpg"
import img26 from "./IMG-20231101-WA0036.jpg"
import img27 from "./IMG-20231101-WA0035.jpg"
import img28 from "./IMG-20231101-WA0034.jpg"
import img29 from "./IMG-20231101-WA0033.jpg"
import img30 from "./IMG-20231101-WA0032.jpg"
import img31 from "./IMG-20231101-WA0031.jpg" //acha
import img32 from "./IMG-20231101-WA0030.jpg"
import img33 from "./IMG-20231101-WA0029.jpg"
import img34 from "./IMG-20231101-WA0027.jpg"
import img35 from "./IMG-20231101-WA0026.jpg"
import img36 from "./IMG-20231101-WA0025.jpg"
import img37 from "./IMG-20231101-WA0024.jpg"
import img38 from "./IMG-20231101-WA0023.jpg"
import img39 from "./IMG-20231101-WA0022.jpg"
import img40 from "./IMG-20231101-WA0020.jpg"
import img41 from "./IMG-20231101-WA0019.jpg"
import img42 from "./IMG-20231101-WA0018.jpg"
import img43 from "./IMG-20231101-WA0017.jpg"
import img44 from "./IMG-20231101-WA0016.jpg"
import img45 from "./IMG-20231101-WA0015.jpg"
import img46 from "./IMG-20231101-WA0014.jpg"
import img47 from "./IMG-20231101-WA0013.jpg"
import img48 from "./IMG-20231101-WA0011.jpg"
import img49 from "./IMG-20231101-WA0009.jpg"
import img50 from "./IMG-20231101-WA0008.jpg"

// import img6 from"./IMG"
// import img7 from"./IMG"
import AppContext from "./Context"
const ContState = (props) => {

    const pro = {


        shirt: [{ category: 'white shirt', price: "600₹", key: "1", rating: "4.5", name: "round tshirt", id: "n1", img: img32 }, { category: "white shirt", price: "500₹", key: "1", rating: "4.5", name: "round tshirt", id: "n1", img: img7 }, { category: "jeans shirt", price: "410₹", key: "2", name: "printed shirt", id: "n2", img: img5 }, { category: "printed shirt", price: "400₹", key: "3", id: "n3", rating: "4.5", name: "round shirt", img: img2 }, { category: "printed  box shirt", price: "600₹", key: "4", id: "n4", rating: "4.5", name: "printed shirt", img: img17 }, { category: "linning shirt", price: "600₹", key: "5", id: "n5", rating: "4.5", name: "lining shirt", img: img28 }, { category: "fam shirt", price: "600₹", key: "6", id: "n6", rating: "4.5", name: "round shirt", img: img24 }, { category: " black shirt", price: "1000₹", key: "1", name: "black shirt", rating:'4.5',img: img12 },{category: "Brown shirt", price: "1000₹", key: "1", name: "Brown shirt", rating:'4.5', img: img16 }]

        , jeans: [
            { category: "jeans", price: "1000₹", key: "1", name: "jeans", img: img6 }, { category: "jeans1", price: "600₹", key: "2", name: "jeans", img: img1 }, { category: "jeans2", price: "600₹", key: "3", name: "Jeans", img: img26 }, { category: "jeans3", price: "600₹", key: "4", name: "jeans", img: img49 }, { category: "fam", price: "600₹", key: "5", name: "round tshirt", img: img19 }, { category: "jeans", price: "800₹", key: "3", name: "light blue", img: img21 }, {category: "damage blue jeans", price: "1000₹", key: "1", name: "damage blue jeans", rating:'4.5', img: img26 }, {category: "Light  blue jeans", price: "1000₹", key: "8", name: "light blue jeans", rating:'4.5', img: img27 }, { category: "Black bottom jeans", price: "1000₹", key: "1", name: "Black bottom jeans", rating:'4.5',img: img30 }, { category: "damage blue jeans", price: "1000₹", key: "1", name: "damage blue jeans", rating:'4.5',img: img42 }, { category: "Lower bread jeans", price: "1000₹", key: "10", name: "Lower bread jeans", rating:'4.5',img: img47 }, { category: "light color blue jeans", price: "1000₹", key: "11", name: "light blue jeans", rating:'4.5',img: img48 }, { img: img49 }

        ]
        , tshirt: [
            { category: "round neck t-shirt", price: "600₹", key: "1", name: "round tshirt", img: img31 }, { category: "half sleeves t-shirt", price: "600₹", key: "2", name: "round tshirt", img: img8 }, { category: "full black & white", price: "600₹", key: "3", name: "round tshirt", img: img9 }, { category: "round-neck t-shirt", price: "600₹", key: "3", name: "round tshirt", img: img0 }, { category: "yellow t-shirt", price: "400₹", key: "3", name: "yellow tshirt", img: img14 }, { category: "soft tshirt", price: "500₹", key: "3", name: "soft tshirt", img: img13 }, { category: "half cartoon tshirt", price: "400₹", key: "3", name: "round tshirt", img: img29 }, { category: "BV tshirt", price: "500₹", key: "1", rating: "4.5", name: " BV round tshirt", img: img23 }, { category: "Be happy t-shirt", price: "500₹", key: "1", rating: "4.5", name: " Be happy tshirt", id: "n1", img: img22 }

        ]
        , dress: [
            {  category: "fam", price: "600₹", key: "3", name: "round tshirt", img: img8 }, { category: "fam", price: "600₹", key: "3", name: "round tshirt", img: img9 }, { category: "fam", price: "600₹", key: "3", name: "round tshirt", img: img10 }, { category: "adidas", price: "500₹", key: "1", rating: "4.5", name: "round tshirt", id: "n1", img: img45 },{category :"many more to come"}

        ]
        , jacket: [{ category: "adidas", price: "500₹", key: "1", rating: "4.5", name: "round tshirt", id: "n1", img: img28 }, { category: "jacket", price: "800₹", key: "1", rating: "4.5", name: "zip jacket", id: "n1", img: img46 }]
    }
    // const update = () => {


    //         pro[0].map((element) => {


    //             return element;
    //         })

    // }


    const [state, setState] = useState(pro)
    return (<AppContext.Provider value={pro}>

        {props.children}

    </AppContext.Provider>)
}

export default ContState;