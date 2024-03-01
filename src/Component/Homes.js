import React,{useState} from 'react'
import "../../src/Homestyles.css"
import { Row,Col,Container } from 'react-bootstrap'
import { Link, useLocation } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import { FaCrown } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';

function Homes(props) {
   // document.body.style.background = 'none';
    const location=useLocation();
    const data=location.state?.data;
    const answer1=data.user1===""?"user-1":data.user1;
    const answer2=data.user2===""?"user-2":data.user2;


    const [value, setvalue] = useState(-1);
    const [tic_11, settic_11] = useState("");
    const [tic_12, settic_12] = useState("");
    const [tic_13, settic_13] = useState("");
    const [tic_21, settic_21] = useState("");
    const [tic_22, settic_22] = useState("");
    const [tic_23, settic_23] = useState("");
    const [tic_31, settic_31] = useState("");
    const [tic_32, settic_32] = useState("");
    const [tic_33, settic_33] = useState("");
    const [count0,setcount0]=useState(0);
    const [count1,setcount1]=useState(0);
   const [wino,setwino]=useState(false);
   const [winx,setwinx]=useState(false);
   const [count,setcount]=useState(0);
   
    const [mat, setMat] = useState([
        [-1, -1, -1],
        [-1, -1, -1],
        [-1, -1, -1]
    ]);
//0->O ,1->X
    const handleButtonClick = (newvalue) => {
        if(newvalue===1){
            if(count0===1){
                setcount0(0);
            }
            setvalue(1);
            setcount1(1);
            
        }
        else if(newvalue===0){
            if(count1===1){
                setcount1(0);
            }
            setvalue(0);
            setcount0(1);
        }
       
    };
    const updateCell = (rowIndex, colIndex, value) => {
        
        const newMat = [...mat];
        newMat[rowIndex][colIndex] = value;
        setMat(newMat);
        //row check O
        if(newMat[0][0]===0 && newMat[0][1]===0 && newMat[0][2]===0){
            setwino(true);
        }
        else if(newMat[1][0]===0 && newMat[1][1]===0 && newMat[1][2]===0){
            setwino(true);
        }
        else if(newMat[2][0]===0 && newMat[2][1]===0 && newMat[2][2]===0){
            setwino(true);
        }
        //row check X
        else if(newMat[0][0]===1 && newMat[0][1]===1 && newMat[0][2]===1){
            setwinx(true);
        }
        else if(newMat[1][0]===1 && newMat[1][1]===1 && newMat[1][2]===1){
            setwinx(true);
        }
        else if(newMat[2][0]===1 && newMat[2][1]===1 && newMat[2][2]===1){
            setwinx(true);
        }
        //column check O
        if(newMat[0][0]===0 && newMat[1][0]===0 && newMat[2][0]===0){
            setwino(true);
        }
        else if(newMat[0][1]===0 && newMat[1][1]===0 && newMat[2][1]===0){
            setwino(true);
        }
        else if(newMat[0][2]===0 && newMat[1][2]===0 && newMat[2][2]===0){
            setwino(true);
        }
        //column check X
        else if(newMat[0][0]===1 && newMat[1][0]===1 && newMat[2][0]===1){
            setwinx(true);
        }
        else if(newMat[0][1]===1 && newMat[1][1]===1 && newMat[2][1]===1){
            setwinx(true);
        }
        else if(newMat[0][2]===1 && newMat[1][2]===1 && newMat[2][2]===1){
            setwinx(true);
        }
        //diagonal check
        else if(newMat[0][0]===0 && newMat[1][1]===0 && newMat[2][2]===0){
            setwino(true);
        }
        else if(newMat[0][2]===0 && newMat[1][1]===0 && newMat[2][0]===0){
            setwino(true);
        }
        else if(newMat[0][0]===1 && newMat[1][1]===1 && newMat[2][2]===1){
            setwinx(true);
        }
        else if(newMat[0][2]===1 && newMat[1][1]===1 && newMat[2][0]===1){
            setwinx(true);
        }
    };
    const handlesetcolumn11 = () => {
        if (value === 1) {
            
            if(tic_11!=='X'){
            settic_11('O');
            setvalue(-1);
            setcount(count+1);
           updateCell(0,0,0);


            } // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_11!=='O'){
            settic_11('X');
            setvalue(-1);
            setcount(count+1);
            updateCell(0,0,1);
            } // Set 'X' if the button click value is 0
        }
    }

    const handlesetcolumn12 = () => {
        if (value === 1) {
            if(tic_12!=='X'){
                settic_12('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(0,1,0);
            }
             // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_12!=='O'){
                settic_12('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(0,1,1);
            }
             // Set 'X' if the button click value is 0        
        }
    }
    const handlesetcolumn13 = () => {
        if (value === 1) {
            if(tic_13!=='X'){
                settic_13('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(0,2,0);
            }
             // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_13!=='O'){
                settic_13('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(0,2,1);
            }
            // Set 'X' if the button click value is 0
            
        }

    }
    const handlesetcolumn21 = () => {
        if (value === 1) {
            if(tic_21!=='X'){
                settic_21('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(1,0,0);
            }
             // Set 'O' if the button click value is 1
        
        } else if (value === 0) {
            if(tic_21!=='O'){
                settic_21('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(1,0,1);
            }
             // Set 'X' if the button click value is 0
            
        }

    }
    const handlesetcolumn22 = () => {
        if (value === 1) {
            if(tic_22!=='X'){
                settic_22('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(1,1,0);
            }
             // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_22!=='O'){
                settic_22('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(1,1,1);
            }
             // Set 'X' if the button click value is 0
            
        }

    }
    const handlesetcolumn23 = () => {
        if (value === 1) {
            if(tic_23!=='X'){
                settic_23('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(1,2,0);
            }
             // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_23!=='O'){
                settic_23('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(1,2,1);
            }
             // Set 'X' if the button click value is 0
           
        }

    }
    const handlesetcolumn31 = () => {
        if (value === 1) {
            if(tic_31!=='X'){
                settic_31('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(2,0,0);
            }
             // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_31!=='O'){
                settic_31('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(2,0,1);
            }
             // Set 'X' if the button click value is 0
            
        }
 
    }
    const handlesetcolumn32 = () => {
        if (value === 1) {
            if(tic_32!=='X'){
                settic_32('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(2,1,0);
            }
            // Set 'O' if the button click value is 1
        
        } else if (value === 0) {
            if(tic_32!=='O'){
                settic_32('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(2,1,1);
            }
            // Set 'X' if the button click value is 0
        
        }

    }
    const handlesetcolumn33 = () => {
        if (value === 1) {
            if(tic_33!=='X'){
                settic_33('O');
                setvalue(-1);
                setcount(count+1);
                updateCell(2,2,0);
            }
             // Set 'O' if the button click value is 1
            
        } else if (value === 0) {
            if(tic_33!=='O'){
                settic_33('X');
                setvalue(-1);
                setcount(count+1);
                updateCell(2,2,1);
            }
             // Set 'X' if the button click value is 0
            
        }
    
    }
    console.log(count)
    // const reset = (event) => {
    //     event.preventDefault(); // Prevent the default behavior of form submission
    //     window.location.reload(); // Reload the page
    // };
    const reset = () => {

        setvalue(-1);
        settic_11('');
        settic_12('');
        settic_13('');
        settic_21('');
        settic_22('');
        settic_23('');
        settic_31('');
        settic_32('');
        settic_33('');
        setcount0(0);
        setcount1(0);
        setMat([
            [-1, -1, -1],
            [-1, -1, -1],
            [-1, -1, -1]
        ])
        setwino(false);
        setwinx(false);
        setcount(0);
    };

    // for reset button

  return (
    
    <div>

    <section className='main_page'>
    
    <div className='d-flex justify-content-between ms-5 me-5 mt-3 name_class'>
    <div className='input1 mb-3 d-flex align-items-center'><i class="bi bi-x-circle-fill" style={{color:"red"}}></i>&nbsp;{answer1}</div>
    <div className='input1 mb-3 d-flex align-items-center'><i class="bi bi-0-circle-fill" style={{color:"red"}}></i>&nbsp;{answer2}</div>


    </div>
    <div className='home_icon'>
    <Link to="/loginsection">
    <FaHome  size={36}  className='hom'/>
    </Link>
    
    </div>    
    <div className='winner_box d-flex justify-content-center align-items-center ms-3 me-3'>
    {wino ? <h2>Congrats {answer2} you won!!!&nbsp;<FaCrown style={{ color: "#FFD43B", fontSize: "2em" }} /></h2> : ""}
    {winx?<h2>Congrats {answer1} you won!!!&nbsp;<FaCrown style={{ color: "#FFD43B", fontSize: "2em" }} /></h2>:""}
   {wino===false&&winx===false&&count===9?<h2>Oops!Match Draw&nbsp; <FaSadTear style={{ color: 'yellow', fontSize: '1.4em' }} /></h2>:""}
   </div>
     <Container>
     
      <Row className='justify-content-center align-items-center mt-1 mr-5 ms-2 me-2 '>
       <Col  lg={8} md={10} sm={12}  xs={12} className='box_shape' >
         
       <Row className='justify-content-center mt-3 ms-3 me-3'>
       <Col lg={4} md={4} sm={4} xs={4} className="justify-content-center text-center custom-column custom-column1 point" onClick={handlesetcolumn11} >
       {tic_11 === 'O' ? <i className="bi bi-circle cross"></i> : tic_11 === 'X' ? <i className="bi bi-x-lg cross"></i>: <i></i>}
   </Col>
   
       <Col lg={4} md={4} sm={4}  xs={4} className="justify-content-center text-center custom-column custom-column2 point "
       onClick={handlesetcolumn12}>
       {tic_12 === 'O' ? <i className="bi bi-circle cross"></i> : tic_12 === 'X' ? <i className="bi bi-x-lg cross"></i> : <i></i>}
       </Col>
       <Col lg={4} md={4} sm={4}  xs={4} className="justify-content-center text-center custom-column custom-column3 point"
       onClick={handlesetcolumn13}>
       {tic_13 === 'O' ? <i className="bi bi-circle cross"></i> : tic_13 === 'X' ? <i className="bi bi-x-lg cross"></i> : <i></i>}
       </Col>
      </Row>
      <Row className='justify-content-center ms-3 me-3'>
      <Col lg={4} md={4} sm={4} xs={4} className='justify-content-center text-center custom-column custom-column4 point tic_21'
      onClick={handlesetcolumn21}>
      {tic_21 === 'O' ? <i className="bi bi-circle cross"></i> : tic_21 === 'X' ? <i className="bi bi-x-lg cross"></i> : <i></i>}
      </Col>
      <Col lg={4} md={4} sm={4}  xs={4} className='justify-content-center text-center custom-column custom-column5 point tic_22'
      onClick={handlesetcolumn22}>
      {tic_22 === 'O' ? <i className="bi bi-circle cross"></i> : tic_22 === 'X' ? <i className="bi bi-x-lg cross"></i> : <i></i>}
      </Col>
      <Col lg={4} md={4} sm={4}  xs={4} className='justify-content-center text-center custom-column custom-column6 point tic_23'
      onClick={handlesetcolumn23}>
      {tic_23=== 'O' ? <i className="bi bi-circle cross"></i> : tic_23 === 'X' ? <i className="bi bi-x-lg cross"></i> : <i></i>}
      </Col>
     </Row>
     <Row className='justify-content-center mb-3  ms-3 me-3'>
       <Col lg={4} md={4} sm={4} xs={4} className='justify-content-center text-center custom-column custom-column7 point tic_31'
       onClick={handlesetcolumn31}>
       {tic_31=== 'O' ? <i className="bi bi-circle cross"></i> : tic_31 === 'X' ? <i className="bi bi-x-lg cross"></i>: <i></i>}
       </Col>
       <Col lg={4} md={4} sm={4}  xs={4} className='justify-content-center text-center custom-column custom-column8 point tic_32'
       onClick={handlesetcolumn32}>
       {tic_32=== 'O' ? <i className="bi bi-circle cross"></i> : tic_32 === 'X' ? <i className="bi bi-x-lg cross"></i>: <i></i>}
       </Col>
       <Col lg={4} md={4} sm={4}  xs={4} className='justify-content-center text-center custom-column custom-column9 point tic_33'
       onClick={handlesetcolumn33}>
       {tic_33=== 'O' ? <i className="bi bi-circle cross"></i> : tic_33 === 'X' ? <i className="bi bi-x-lg cross"></i>: <i></i>}
       </Col>
      </Row>
       
      
       </Col>
      
      </Row>
     
     </Container>
    <Container className='mybutton mt-3 '>
    <Row>
    <Col lg={6} md={6} sm={6} xs={6} className='justify-content-center text-center mybutton1'>
    <button onClick={() => handleButtonClick(0)} disabled={count0 > count1||wino||winx||count===9}>
        <h2>{'X'}</h2>
    </button>
</Col>
<Col lg={6} md={6} sm={6} xs={6} className='justify-content-center text-center mybutton1'>
    <button onClick={() => handleButtonClick(1)} disabled={count1 > count0||wino||winx||count===9}>
        <h2>{'O'}</h2>
    </button>
</Col>
    </Row>
    <Row className='justify-content-center '>
     <Col lg={8} md={8} sm={8} xs={8} className='justify-content-center text-center mt-1'>
     <div id='reset_button'>
     <button onClick={reset}>RESTART</button>
     </div>
     </Col>
    </Row>
    </Container>
    </section>
    
    
    </div>
  )
}

export default Homes