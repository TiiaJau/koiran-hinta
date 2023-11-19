import { ButtonContainer } from '../../shared/buttons'
import { FloatingButton } from '../../shared/buttons'
import Content from '../Content'
import Menu from '../Menu'
import Header from '../Header'
import Item from '../Item'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <ButtonContainer>
      <div className={styles.app}>
        <Header />
        <Content>
          <Item />
          <Item />
          <Item />
          <Item />
          <FloatingButton primary>+</FloatingButton>
        </Content>
        <Menu />
      </div>
      </ButtonContainer>
    </>
  )
}

export default App
