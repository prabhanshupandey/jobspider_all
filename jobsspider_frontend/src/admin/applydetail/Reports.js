import MaterialTable from "@material-table/core";
import { useState } from "react";
import { useEffect } from "react";
import { comStyles} from "./ApplyCss";
import { getData,serverURL} from "../../services/FetchNodeServices";
import Swal from 'sweetalert2'

export default function Report(){
  const classes = comStyles();
          const [report,setReport]=useState([])
               const fetchAlldetails = async () => {
                  var response = await getData("applydetails/display_all_apply");
                if(response.status){
                  setReport(response.data);
                }else{
                   Swal.fire({
                          icon: "error",
                          text: response.message,
                          toast:true,
                          // position:'top-left'
                         
                        });
                  
                      }
                };
                useEffect(() => {
                  fetchAlldetails();
                }, []);
     return(<div className ={classes.root}  style={{}}>
               <MaterialTable
        title="Applicants List"
        
        columns={[
          { title: "Candidate ID", field: "candidateid" },
          { title: "Job ID", field: "jobid" },
          { title: "Candidate Name", field: "fullname" },

          
         {title: "DOB/Gender" , render:rowData=><div>
            {rowData.dob}<br/>
           {rowData.gender}
          </div>},

        { title: "Email/Mobile No", render:rowData=><div>     
          {rowData.email}<br/>
           {rowData.mobileno}
         </div>},
         {
      title: "Resume",
       field: "resume",
  render: rowData => (
    <iframe
      src={`${serverURL}/images/${rowData.resume}`}
      width="100"
      height="120"
      style={{ border: 'none' }}
      title="Resume Preview"
    />
  )
},

          
          
        ]}
        
        data={report}
        options={{
          pageSize: 3,
          pageSizeOptions: [5, 10, 20, 30 ,50, 75, 100 ],
          toolbar: true,
          paging: true
      }}
       
      />
     </div>)         
              
              
}