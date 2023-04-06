import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { useNavigate } from "react-router-dom";
import Context from '../contexts/Context';



function FormUser() {
    const [usuarioEdit, setUsuarioEdit]   = useState({});
    const [usuario, setUsuarioLocal] = useState({});
    const [images, setImages] = useState([]);
    const [tipoPass, setTipoPass]=useState("password")
    const navigate = useNavigate();
    const { setUsuario: setUsuarioGlobal } = useContext(Context);

  

    const getUsuarioData = async () => {
        const urlServer = "https://ecommerce.juanpenailillo.repl.co";
        const endpoint = "/usuarios";
        const token = localStorage.getItem("token");
        console.log(token);
        debugger

        try {
        const { data } = await axios.get(urlServer + endpoint, {
            headers: { Authorization: "Bearer " + token },
        });
        setUsuarioLocal(data[0]);
        setUsuarioGlobal(data[0]);      
        } catch ({ response: { data: message } }) {
        alert(message + " No hay data");
        console.log(message);
        }
    };

  useEffect(() => {
    getUsuarioData();
  },[]);


  const handleChange = (e) => {
    setImages((images) => [...images, URL.createObjectURL(e.files[0])]);
    return URL.revokeObjectURL(e.files[0])
    }

  const deleteImage = (blob) => {
    setImages(images.filter(x => x !== blob));
    document.getElementById("cargaImg").value = "";   
  };

  const handleClickVer = () =>{
    var inputPass = 'text'
    setTipoPass(inputPass)
    }
    const handleClickOcultar = () =>{
        var inputPass = 'password'
        setTipoPass(inputPass)
    }

    const handlEditUsuario = async() => {
        const field = {};
        let campos = []
        const id = document.getElementsByName("iduser")[0]
        const nombre = document.getElementsByName("nombre")[0]
        const password = document.getElementsByName("password")[0]
        const confipassword = document.getElementsByName("passwd2")[0]
        const direcicion = document.getElementsByName("direccion")[0]
        const telefono = document.getElementsByName("telefono")[0]
        
        if (!password.value) {
            alert("campo Password esta vacio");
        }else{
            if (password.value===confipassword.value) {
                console.log("password correcto");
                campos=[nombre,direcicion,telefono,password,]

                campos.forEach((campo) => {
                    
                        field[campo.name] = campo.value
                        setUsuarioEdit({ ...usuarioEdit, ...field })
                    
                })
                console.log(usuarioEdit);
                const urlServer = "https://ecommerce.juanpenailillo.repl.co";
                const endpoint = "/usuario/"+id.value;
                console.log(usuarioEdit);
                try {
                    await axios.put(urlServer + endpoint, usuarioEdit);
                    alert("Usuario editado con éxito");
                    navigate("/");
                } catch (error) {
                    alert("Algo salió mal ...");
                    console.log(error);
                }
            } else {
                alert("Las contraseñas no son iguales");
            }
        }
      
        
      };
      const cancelar = ()=>{
        navigate("/");
      }
    

  return (
    <div name='formPerfil'>
        <div className='divPerfil'>
            {images.map((row, index) =>
                <div key={index} className='divImgPerfil'>
                    <img src={row} alt={row} className='imgPerfil'/>
                    <div class="fa-sharp fa-solid fa-trash item-delete" onClick={() => deleteImage(row)}></div>
                    </div>
                )}

                <Form.Control key="titulo" type="text" placeholder="Editar Perfil" className="mb-3 p-3 text-center" disabled readOnly />
        
        </div>
                
        <input type="text" name='iduser' defaultValue={usuario.id} hidden/>
        <FloatingLabel key="nombreComple" controlId="floatingInput" label="Nombre Completo" className="mb-3" >
            <Form.Control type="text" placeholder="Indique su nombre completo" className='nombre' name="nombre" required defaultValue={usuario.nombre} />
        </FloatingLabel>
        <Row>
            <Col>
                <FloatingLabel key="rutUser" controlId="floatingInput1" label="Rut" className="mb-3" >
                    <Form.Control type="text" placeholder="01234567-8" name='rut' required defaultValue={usuario.rut} readOnly/>
                </FloatingLabel>
            </Col>
            <Col>
                <FloatingLabel key="emailUser" controlId="floatingInput2" label="Email" className="mb-3" >
                    <Form.Control type="email" placeholder="name@example.com" name='email' required defaultValue={usuario.email} readOnly/>
                </FloatingLabel>
            </Col>
        </Row>
        { tipoPass==='password' ?
            <Row >
                <Col>
                    <FloatingLabel key="pass"   label="Password">
                        <Form.Control type="password" placeholder="Password" id='passwd' name="password" required/>
                    </FloatingLabel>
                </Col>
                <Col><span id="floatingPassword1">
                    <InputGroup className="mb-3">
                        <FloatingLabel key="pass2"  label=" Confirmar Password">
                            <Form.Control type="password" placeholder="Password" className="passwd1" name='passwd2' required/>
                        </FloatingLabel>
                            <Button variant="outline-secondary" id='revelar' onClick={() => handleClickVer()}>
                                <div class="fa-solid fa-eye"></div>
                            </Button>
                    </InputGroup>
                    </span>
                </Col>
            </Row>
        :
            <Row >
                <Col>
                    <FloatingLabel key="pass"   label="Password">
                        <Form.Control type="text" placeholder="Password" id='passwd' name="password" required />
                    </FloatingLabel>
                </Col>
                <Col><span id="floatingPassword1">
                    <InputGroup className="mb-3">
                        <FloatingLabel key="pass2"  label=" Confirmar Password">
                            <Form.Control type="text" placeholder="Password" className="passwd1" name='passwd2' required />
                        </FloatingLabel>
                            <Button variant="outline-secondary" id='revelar' onClick={() => handleClickOcultar()}>
                                <div class="fa-solid fa-eye-slash"></div>
                            </Button>
                    </InputGroup>
                    </span>
                </Col>
            </Row>
        }
        <FloatingLabel key="dir" controlId="floatingInput3" label="Direccion" className="mb-3" >
            <Form.Control type="text" placeholder="Complete su dirección" name='direccion' defaultValue={usuario.direccion}/>
        </FloatingLabel>
        <Row className="mb-3">
            <Col>
                <FloatingLabel key="telf" controlId="floatingTelefono" label="Telefono">
                    <Form.Control type="text" placeholder="+56 00000000" name='telefono' defaultValue={usuario.telefono}/>
                </FloatingLabel>
            </Col>
            <Col>
                <Form.Control key="img" id='cargaImg' type="file" name='img' placeholder="Subir un archivo en JPG" className="p-3"  onChange={(e) => handleChange(e.target) } accept=".jpg, .jpeg, .png"/>
            </Col>
            <div >
                
            </div>
        </Row>
        <Button variant="dark" onClick={handlEditUsuario} >Guardar</Button>{' '}
        <Button variant="secondary" onClick={cancelar}>Cancelar</Button>
            
        
    </div>
  );
}

export default FormUser;