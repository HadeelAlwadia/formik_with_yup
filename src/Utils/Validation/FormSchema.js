
const validateFormSchema = values => {
    const errors = {}

    if (!values.name) {
      errors.name = 'Required'
    } 
    
    if (!values.address) {
      errors.address = 'Required'
    } 
    
    if (!values.size) {
      errors.size = 'Required'
    } 
    
    if (!values.sector) {
      errors.sector = 'Required'
    } 
    if (!values.description) {
      errors.description = 'Required'
    }
    if (!values.supervisorname) {
      errors.supervisorname = 'Required'
    }
    if (!values.supervisorofemployeesbyyou) {
      errors.supervisorofemployeesbyyou = 'Required'
    }
    
    if (!values.reasonofleaving) {
      errors.reasonofleaving = 'Required'
    }
    
    if (!values.startsalary) {
      errors.startsalary = 'Required'
    }
    if (!values.currentsalary) {
      errors.currentsalary = 'Required'
    }
    if (!values.startdate) {
      errors.startdate = 'Required'
    }
    if (!values.enddate) {
      errors.enddate = 'Required'
    }
    
    
    return errors
  }
  export default validateFormSchema;
