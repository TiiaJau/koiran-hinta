import Item from '../components/Item'
import { MemoryRouter } from 'react-router-dom'

export default {
    title: 'Components/Item',
    component: Item,
    tags: ['autodocs'],
    decorators: [(Story) => <MemoryRouter><Story /></MemoryRouter>],
    argTypes: {
      data: { control: 'object' },
    }
  }

  export const Default = { 
    args: {
      data: {
        id:          "1",
        type:        "Vakuutus",
        amount:      202.50,
        paymentDate: "2023-04-01",
        periodStart: "2023-04-01",
        periodEnd:   "2023-06-30",      
        receiver:    "IF Vakuutus Oy"      
      }
    }
  }
  
  export const OnlyRequiredData = {
    args: {
      data: {
        id:          "2",
        type:        "Ulkoilu",
        amount:      20.00,
        paymentDate: "2023-11-24",
        receiver:    "Peten Koiratarvike Oy"
      }
    }  
  }
  
  