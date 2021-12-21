import { ADD_ITEM, CHEK_TO_NEXT_PAGE, DELETE_ITEM, UPDITE_OF_ITEM } from "./Constants";




const initialState= {
    list :[
           { idItem:1,       
            nameCompany:'hadeel',
            nameAddress:'hadeel',
            industryCompany:'',
            sizeCompany:'small company',
            descraption:'',
            startDate:'22-10-2021',
            endDate:'22-10-2021',
            jobTitle:'',
            jobFiled:'',
            jobLocation:'',
            currantWork:true,
            sectorCompany:'',
            supervisorName:'hadeel',
            reasonOfLeaving:'',
            employeessupervisebyyou:'hadeel',
            startSalary:'1000',
            endSalary:'10000',
            currancySalary:'dinar'
          }
        ],

     valueOfForm:{
                idItem:0,       
                nameCompany:'',
                nameAddress:'',
                industryCompany:'',
                sizeCompany:'',
                descraption:'',
                startDate:'',
                endDate:'',
                jobTitle:'',
                jobFiled:'',
                jobLocation:'',
                currantWork:false,
                sectorCompany:'',
                supervisorName:'',
                reasonOfLeaving:'',
                employeessupervisebyyou:'',
                startSalary:'',
                endSalary:'',
                currancySalary:''
              },

    isNext:false
}



export const list=( state =initialState,action)=>{

    switch(action.type){
        case ADD_ITEM:{
             return {...state,
                list:[action.payload,...state.list.filter(item=>{  return  item.idItem!== action.payload.idItem} )]
             };
         }
         case DELETE_ITEM:{
            return {...state,list:[...state.list.filter(item=>{ return  item.idItem!== action.payload } ) ]};
         }

        case CHEK_TO_NEXT_PAGE:{
            return {...state,isNext:state.list.length&&'naxt'=== action.payload?true:false };
        }
        
         
        case UPDITE_OF_ITEM:{
         const upditeItem=state.list.find(item=>{return item.idItem===action.payload})
         console.log(upditeItem.idItem)
         return {...state,valueOfForm:{
            idItem:upditeItem.idItem,       
            nameCompany:upditeItem.nameCompany,
            nameAddress:upditeItem.nameAddress,
            industryCompany:upditeItem.industryCompany,
            sizeCompany:upditeItem.sizeCompany,
            descraption:upditeItem.descraption,
            startDate:upditeItem.startDate,
            endDate:upditeItem.endDate,
            jobTitle:upditeItem.jobTitle,
            jobFiled:upditeItem.jobFiled,
            jobLocation:upditeItem.jobLocation,
            currantWork:upditeItem.currantWork,
            sectorCompany:upditeItem.sectorCompany,
            supervisorName:upditeItem.supervisorName,
            reasonOfLeaving:upditeItem.reasonOfLeaving,
            employeessupervisebyyou:upditeItem.employeessupervisebyyou,
            startSalary:upditeItem.startSalary,
            endSalary:upditeItem.endSalary,
            currancySalary:upditeItem.currancySalary
         
         }};


        }


        default :  return  {...state};
    }


}
