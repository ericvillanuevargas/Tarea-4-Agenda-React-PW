
function Agregar(){
    return(
<form>
    
  <label>
    Nombre :
    <input type="text" id="TxtNom"/>
    Apellido :
    <input type="text" id="TxtlastName"/>
    Telefono :
    <input type="text" id="Txtnumber"/>
  </label>
  <input type="submit" onClick={EnviarContacto} />
</form>

    );

}

function EnviarContacto(){
    var Nombre = document.getElementById('TxtNom')
    var Apellido = document.getElementById('Txtlastname')
    var Telefono = document.getElementById('Txtnumber')
        const requestOptions = {
            method: 'POST',
            body: JSON.stringify({
                apellido: Apellido.value,
                telefono: Telefono.value,
                nombre: Nombre.value
            })
        };
        fetch('http://www.raydelto.org/agenda.php', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data.id }));
        alert("Contacto agregado")
}
export default Agregar;