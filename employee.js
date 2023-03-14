let employees=[{id:101, name:"karthik", email:"karthi@gmail.com", gender:"male"},
               {id:102, name:"prabha", email:"prabha@gmail.com", gender:"male"},
               {id:103, name:"ramesh", email:"rame@gmail.com", gender:"male"},
               {id:104, name:"mahindra", email:"mahindra@gmail.com", gender:"male"}];


               let createEmployee=(emp, callback)=>{
                  setTimeout(()=>{
                 employees.push(emp);
                    console.log(employees.length)
                 },[2000]);
               };

           let getemployees= ()=>{
                setTimeout(()=>{
                    let rows=""
                    for(emp of employees){
                     rows= rows+ `<tr>
                                  <td>${emp.id}</td>
                                  <td>${emp.name}</td>
                                  <td>${emp.email}</td>
                                  <td>${emp.gender}</td>
                     </tr>`
                    }

                    document.getElementById("karthik").innerHTML=rows
                },[1000]);

               }
              createEmployee({id:105, name:"raj", eamil:"raj@gmail.com", gender:"female"})