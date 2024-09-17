'use client'
import { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db,auth } from "../../firebase";

const Create = () => {
    
    const [titleValue, setTitle] = useState("")
    const [descriptionValue, setDescription] = useState("")

    

    const handleSubmit =  async () => {
        try{


            const docRef = await addDoc(collection(db, "blogs"),{
                title: titleValue,
                description: descriptionValue,

            });
        }catch(e){
            console.log("error");
        }
    } 




    return ( 
        <div className="w-screen h-[87vh] flex items-center justify-center">
            <div className="w-[40%] h-[70%] bg-[#494854] rounded-2xl flex flex-col items-start justify-beetwen p-6">
                <div className="w-full h-[30%] flex items-start justify-around flex-col">
                    <h1 className="text-4xl">Title</h1>
                    <input type="text" className="h-[40%] w-[85%] rounded-lg text-black p-5" onChange={(e) => setTitle(e.target.value)} value={titleValue}/>
                </div>

                <div className="w-full h-[50%] flex items-start justify-around flex-col">
                    <h1 className="text-4xl">Description</h1>
                    <textarea className="w-[85%] h-[80%] rounded-xl text-black p-3" onChange={(e) => setDescription(e.target.value)} value={descriptionValue}></textarea>
                </div>
                <div className="w-full h-[20%] flex items-center justify-start">
                    <button className="w-[40%] h-[70%] bg-[#1e1e1e] text-3xl rounded-lg" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
     );
}
 
export default Create;