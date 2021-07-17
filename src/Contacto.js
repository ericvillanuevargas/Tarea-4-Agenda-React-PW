import React,{useState,useEffect} from 'react';
function Contacto(){
    const [contacto, setContacto] = useState([]);
    const getContacto=()=>{
      fetch("http://www.raydelto.org/agenda.php"
      )
        .then(function(response){
          return response.json();
        })
        .then(function(myJson) {
          setContacto(myJson)
        });
    }
    useEffect(()=>{
        getContacto()
      },[])
    return (
        
        <div >
        {
            
             contacto.map((contacto)=><p>{contacto.nombre} {contacto.apellido}, {contacto.telefono}</p>)
        }
        </div>

);
}
export default Contacto;