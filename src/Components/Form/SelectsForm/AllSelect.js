import  SelectPart from './Select';


const optionssect1 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const optionssect2 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  const optionssect3 = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]


export default function AllSelect() {
    
    return (
        <div>
            <label>Jop details</label>
            <SelectPart   Placeholder='Jop Title'  options={optionssect1} />
            <SelectPart   Placeholder='Jop Field'   options={optionssect2} />
            <SelectPart   Placeholder='Jop Laction'   options={optionssect3}/>  
        </div>
    )
}
