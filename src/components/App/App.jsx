import Settings from '../Settings'
import Stats from '../Stats'
import Items from '../Items'
import { ButtonContainer } from '../../shared/buttons'
import { FloatingButton } from '../../shared/buttons'
import Content from '../Content'
import Menu from '../Menu'
import Header from '../Header'
import styles from './App.module.scss'

function App() {

  return (
    <>
      <ButtonContainer>
      <div className={styles.app}>
        <Header />
        <Content>
        <Settings />
        </Content>
        <Menu />
      </div>
      </ButtonContainer>
    </>
  )
}

export default App
