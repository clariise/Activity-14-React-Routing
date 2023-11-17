import Employee from './Employee';
import {useState,useEffect } from 'react';
import {getFirestore, collection, onSnapshot, addDoc} from "firebase/firestore";
import firebaseApp from "./firebaseConfig";


function Home (){

    const [employee, setEmployee] = useState ({
        firstname: '',
        lastname: '',
        number: '',
      });

      //Array of an object, once we hit add ag append sa studentlist
    const [employeeList, setEmployeeList] = useState([]); 

    useEffect(() => {

            //initialize Cloud firestore and get a reference to the service
            const db= getFirestore(firebaseApp);

            try  { 
                
                onSnapshot (collection(db, 'employees'), snapshot => {
         
                const newEmployeeList = [];

                snapshot.forEach(employee => {
                    newEmployeeList.push(employee.data());
                });

                setEmployeeList(newEmployeeList);

            });

            } catch(e){
                alert('Could not fetch student data.')
            }


}, [])

    const addEmployee = () => {

            //initialize Cloud firestore and get a reference to the service
            const db= getFirestore(firebaseApp);


        if (employee.firstname == '' || employee.lastname == '' || employee.number == '' ){
            alert("Missing Fields");
        } else {
        setEmployeeList (
            employeeList => [
                ...employeeList, employee
            ]
        );

      addDoc(collection(db, 'employees'), employee);

        setEmployee({
            firstname:'',
            lastname:'',
            number:'',
          });

        }

    }

    return (
        
        <section>
        <h1 className="mt-5" >👩‍🏭Employee Dashboard</h1>
        <p>A tool for HR Departments and organizations to manage employee data.</p>
    
        <div className="mb-5 p-5 border">
                <div className="row">

                    <div className="col-md-5">
                <label htmlFor="firstname">Firstname:</label>
                <input id="firstname" 
                  onChange={(e)=> setEmployee({
                  ...employee, //Short form 
                  firstname: e.target.value
              })} 
              value={employee.firstname}
              className="form-control"  
              type="text"  
                />
                </div>

                <div className="col-md-5">
                <label htmlFor="lastname">Lastname:</label>
                <input id="lastname" 
                  onChange={(e)=> setEmployee({
                  ...employee,
                  lastname: e.target.value
              })} 
              value={employee.lastname}
              className="form-control" 
                type="text" 
                />
                </div>


                <div className="col-md-2">
                <label htmlFor="number">ID number:</label>
                <input id="number" 
                  onChange={(e)=> setEmployee({
                  ...employee,
                  number: e.target.value
              })} 
              value={employee.number}
                className="form-control" 
                type="number" 
                />
                </div>

                <div className="col-md-2">
                        <button onClick={() => {addEmployee()}} className="btn btn-dark mt-3">Add Employee +</button>
                    </div>

                    <div className="alert alert-light mt-3">
                        <h3 className="fw-bold">{employee.firstname} {employee.lastname} <span className="badge bg-dark"> {employee.number} </span></h3>

                    </div>
                </div>
                <br />
                </div>

                
                {
                employeeList.map((employeeRecord) => 
                <Employee
                Key={employeeRecord.id} 
                firstname={employeeRecord.firstname}
                lastname={employeeRecord.lastname}
                number={employeeRecord.number}
                />
                )
            }

            
        </section>
  
    )
}

export default Home;