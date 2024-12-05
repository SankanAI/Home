
"use client";

import { button } from "framer-motion/client";

export default function More(){
  var buttonVal=[
    {
        "name":"Finace",
        "images":"https://cdn-icons-png.flaticon.com/128/781/781760.png"
    }
  ]
  return <>
  <button>
    <img src={buttonVal[0].images} width={'100%'}/>
    {buttonVal[0].name}
  </button>
  </>
}