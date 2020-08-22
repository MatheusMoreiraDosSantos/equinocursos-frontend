import React, {useState, useCallback, useEffect} from 'react';
import api from "../../api";

import {
    IoMdSearch,
    IoMdAddCircleOutline,
    IoMdCloseCircleOutline,
    IoMdHelpCircleOutline
} from 'react-icons/io';

import { 
    Container,
    Header,
    Search,
    ButtonSearch,
    ButtonRegistrar,
    HeaderMobile,
    ContainerCard,
    CardRegistrar,
    Card,
    SearchMobile,
    ButtonSearchMobile,
    ButtonRegistrarMobile,
    ContainerRegistrar,
    ButtonSave
 } from './styles';

function Home() {

    const [registrar, setRegistrar] = useState('none');
    const [cursos, setCursos] = useState([]);
    const [curso, setCurso] = useState({
        "disciplina" : "",
        "instrutor" : "",
        "local" : "",
        "inicio" : "",
        "final" : "",
        "valores" : "",
        "contato" : "",
        "img" : ""
    });
    // const [filter, setFilter] = useState("q");
    const [value, setValue] = useState("");

    function handleRegistrar(){
        if(registrar === 'none'){
            setRegistrar('block');
        }else{
            setRegistrar('none');
        }
    }

    const loadCursos = useCallback( async() => {
        api
          .get(`/cursos`)
          .then((response) => setCursos(response.data));
    }, []);

    async function searchCursos(){
        if(value === ""){
            loadCursos();
        }else{
            api
          .get(`/cursos?q=${value}`)
          .then((response) => setCursos(response.data));
        }
    }

    async function handleSave(){
        if(
            curso.disciplina === "" ||
            curso.instrutor === ""||
            curso.local === "" ||
            curso.inicio === "" ||
            curso.final === ""||
            curso.valores === "" ||
            curso.contato === "" ||
            curso.img === ""
        ){
            alert("Preencha todos os campos!")
        }else{
            try {
                await api.post(`/cursos/`, curso);
                clearForm();
                loadCursos();
                handleRegistrar();
                alert("Seu curso foi cadastrado com sucesso! ");
              } catch (error) {
                console.log(error);
                alert("Erro ao Cadastrar");
              }
        }
    }
    
    function clearForm(){
        setCurso({
            "disciplina" : "",
            "instrutor" : "",
            "local" : "",
            "inicio" : "",
            "final" : "",
            "valores" : "",
            "contato" : "",
            "img" : ""
        });
    }
    function help(){
        alert("Caso tenha alguma dúvida ou quiser entrar em contato, mande um email para matheusmoreira.santos699@gmail.com");
    }

    useEffect(() => {
      loadCursos();
    }, [loadCursos]);

  return (
      <Container>
          <Header>
            <h2>EquinoCursos</h2>
            <h4>Encontre o curso mais proximo de você</h4>
            <div>
            <Search placeholder="Buscar por..." 
                    type="search" 
                    value={value || ""}
                    onChange={(e) => setValue(e.target.value)}
            />
            <ButtonSearch onClick={() => searchCursos()}> Buscar </ButtonSearch>
            </div>
            <ButtonRegistrar onClick={() => handleRegistrar()} >Cadastrar Curso</ButtonRegistrar>
            <IoMdHelpCircleOutline onClick={() => help()} size="30" />
          </Header>
          <ContainerCard>
                {
                    cursos.map((c) => (
                        <Card key={c.id}>
                            <img src={c.img} alt={c.id} />
                            <h4>Curso de: {c.disciplina}</h4>
                            <h4>Instrutor: {c.instrutor}</h4>
                            <h4>Local: {c.local}</h4>
                            <h4>Data de Início: {c.inicio}</h4>
                            <h4>Data de Término: {c.final}</h4>
                            <h4>Valores: {c.valores}</h4>
                            <h4>Contato: {c.contato}</h4>
                         </Card>
                    ))
                }
          </ContainerCard>
          <HeaderMobile>
            <div>
            <SearchMobile placeholder="Buscar por..."  type="search"  />
                <ButtonSearchMobile> 
                    <IoMdSearch size="25" />
                </ButtonSearchMobile>
            </div>
            <ButtonRegistrarMobile onClick={() => handleRegistrar()} >
                <IoMdAddCircleOutline size="25"/>
                <IoMdHelpCircleOutline onClick={() => help()} size="25" />
            </ButtonRegistrarMobile>
          </HeaderMobile>
          <ContainerRegistrar>
            <CardRegistrar style={{display: registrar}} >
                  <h2>
                      Cadastre seu curso aqui !
                      <button onClick={() => handleRegistrar()}>
                          <IoMdCloseCircleOutline size="30" />
                      </button>
                  </h2>
                  <div>
                      <span>Curso de:</span>
                      <input 
                        type="text" 
                        placeholder="Ex: Rédeas"
                        value={curso.disciplina || ""}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             disciplina: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>Instrutor:</span>
                      <input 
                        type="text" 
                        placeholder="Ex: Marcelo Moreira"
                        value={curso.instrutor || ""}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             instrutor: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>Local:</span>
                      <input 
                        type="text"
                        placeholder="Ex: Avaré SP" 
                        value={curso.local || ""}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             local: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>Data de início:</span>
                      <input 
                        type="date" 
                        value={curso.inicio || "0000-00-00"}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             inicio: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>Data de Término:</span>
                      <input 
                        type="date" 
                        value={curso.final || "0000-00-00"}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             final: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>Valores:</span>
                      <input 
                        type="text"
                        placeholder="Ex: R$ 1000,00 Montado, R$ 400,00 Ouvinte" 
                        value={curso.valores || ""}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             valores: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>Contato:</span>
                      <input 
                        type="text" 
                        placeholder="Ex: (dd) 9 9999-9999" 
                        value={curso.contato || ""}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             contato: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <span>URL da Imagem:</span>
                      <input 
                        type="text" 
                        placeholder="Preferência 280W x 350H" 
                        value={curso.img || ""}
                        onChange={(e) =>
                        setCurso({
                             ...curso,
                             img: e.target.value,
                         })
                        }
                      />
                  </div>
                  <div>
                      <ButtonSave onClick={()=> handleSave()} >
                          Salvar
                      </ButtonSave>
                  </div>
            </CardRegistrar>
          </ContainerRegistrar>
      </Container>
  );
}

export default Home;