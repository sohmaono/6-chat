import axios from "axios";
import { useEffect } from "react";

export default function MyComponent() {
    const getAll = async function (newOne) {
            const result = await axios.put("http://localhost:3003/chatroom0"+"/"+newOne.id,newOne);
            
        }
    

    useEffect(() => {
        getAll({"id": 134, "content": "helllo"});
    }, []);

    return (
        <p>async</p>
    );
}