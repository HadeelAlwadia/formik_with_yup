import { DELETE_ITEM_FROM_DATA_LIST,ADD_ITEM_To_DATA_LIST, Chek_Is_Go_Next, UPDITE_ITEM_FROM_DATA_LIST} from './Constants';


const  initialValuesOfForm= {
  name: '',
  address: '',
  size: '',
  sector:'',
  description:'',
  supervisorname:'',
  supervisorofemployeesbyyou:'',
  reasonofleaving:'',
  startsalary:0,
  endsalary:0,
  currentsalary:0,
  startdate:'',
  enddate:'',
  jopTitle:'',
  jopField:'',
  jopLaction:''
}

  export const dataReducer=(
      state={ 
            list:[{id:1,title:'tea'}],
           isnext:false,
           initialValuesOfForm:initialValuesOfForm
    }
      ,action)=>{
     switch(action.type){

     case DELETE_ITEM_FROM_DATA_LIST: 
       {state.list=state.list.filter((item)=>item.id!==action.payloud)
         return state;}

       case ADD_ITEM_To_DATA_LIST:
          {state.list=[action.payloud,...state.list]
            state.initialValuesOfForm= {
              name: '',
              address: '',
              size: '',
              sector:'',
              description:'',
              supervisorname:'',
              supervisorofemployeesbyyou:'',
              reasonofleaving:'',
              startsalary:0,
              endsalary:0,
              currentsalary:0,
              startdate:'',
              enddate:'',
              jopTitle:'',
              jopField:'',
              jopLaction:''
            }

          return   state;
        }

         case UPDITE_ITEM_FROM_DATA_LIST:
         {
           
            const upditeitem=state.list.find(item=> {return item.id===action.payloud})
          state.initialValuesOfForm= {
            name:upditeitem.name,
            address: upditeitem.address,
            size: upditeitem.size,
            sector:upditeitem.sector,
            description:upditeitem.description,
            supervisorname:upditeitem.supervisorname,
            supervisorofemployeesbyyou:upditeitem.supervisorofemployeesbyyou,
            reasonofleaving:upditeitem.reasonofleaving,
            startsalary:upditeitem.startsalary,
            endsalary:upditeitem.endsalary,
            currentsalary:upditeitem.currentsalary,
            startdate:upditeitem.startdate,
            enddate:upditeitem.enddate,
            jopTitle:upditeitem.jopTitle,
            jopField:upditeitem.jopField,
            jopLaction:upditeitem.jopLaction
          }
          state.list=state.list.filter((item)=>item.id!==action.payloud)

          return state;
         }  


         case   Chek_Is_Go_Next:
          { state.list.length>0&&action.payloud==='next'?state.isnext=true:state.isnext=false;
             return state;}

         default: return state;

      
     }

  }
 