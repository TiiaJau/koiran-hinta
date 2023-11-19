import ItemForm from '../ItemForm/ItemForm'
import styles from './AddItem.module.scss'

function AppItem(props) {

  return (
    <div>
      <h2>Uuden merkinnän lisääminen</h2>
      <ItemForm />
    </div> 
  )

}

export default AppItem
