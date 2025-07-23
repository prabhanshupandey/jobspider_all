const intialState={
              user:null
          }
          export default  function RootReducer( state=intialState, action){
              switch(action.type)
          {
              case"ADD_USER":
               state.user =action.payload
               localStorage.setItem("USER",JSON.stringify(action.payload))
               console.log(state.user)
             return ({ user:state.user})
             case"DELETE_USER":
                state.user=null
                localStorage.setItem("USER",state.user)
                console.log(state.user)
                return ({ user:state.user})
             
            
          
          
          default:
              return state 
              
          
          }
          
          }
          
          
          
          
          
          