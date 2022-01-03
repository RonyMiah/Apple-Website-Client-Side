import React, { useEffect, useState } from 'react';
import Service from '../Services/Service';



const Product = () => {

    const [ services, setServices ]= useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
        .then(data => setServices(data))
    }, [])
  
    // const services =
    // [
    //     {
    //       "id": 1,
    //       "name": "Leanne Graham",
    //       "username": "Bret",
    //       "email": "Sincere@april.biz",
    //       "img" : "https://i.ibb.co/GPfkpJf/16inchmacbookproinbangladesh-i-Stock-BD.jpg",
    //       "phone": "1-770-736-8031 x56442",
    //       "website": "hildegard.org"
    //     },
    //     {
    //       "id": 2,
    //       "name": "Ervin Howell",
    //       "username": "Antonette",
    //       "email": "Shanna@melissa.tv",
    //       "img" : "https://i.ibb.co/GPfkpJf/16inchmacbookproinbangladesh-i-Stock-BD.jpg",
    //       "phone": "010-692-6593 x09125",
    //       "website": "anastasia.net",
          
    //     },
    //     {
    //       "id": 3,
    //       "name": "Clementine Bauch",
    //       "username": "Samantha",
    //       "email": "Nathan@yesenia.net",
    //       "img" : "https://i.ibb.co/GPfkpJf/16inchmacbookproinbangladesh-i-Stock-BD.jpg",
    //       "phone": "1-463-123-4447",
    //       "website": "ramiro.info",
    
         
    //     },
    //     {
    //       "id": 4,
    //       "name": "Patricia Lebsack",
    //       "username": "Karianne",
    //       "email": "Julianneonner@kory.org",
    //       "img" : "https://i.ibb.co/GPfkpJf/16inchmacbookproinbangladesh-i-Stock-BD.jpg",
    //       "phone": "493-170-9623 x156",
    //       "website": "kale.biz"
    //         }
    //   ]

  



    return (
        <div className='mx-5 mt-5 '>
            
            <div className='row '>
            {
                services.map(service => <Service key={service._id} service={service}></Service>)
            }
           </div>
        </div>
    );
};

export default Product;
