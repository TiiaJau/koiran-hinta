import { MdNavigateNext } from 'react-icons/md'
import styles from './Item.module.scss'

function Item() {

    return (
        <div className={styles.item}>
          <div className={styles.item_data}>
            <div className={styles.item_type}>Ruoka</div>
            <div className={styles.item_amount}>89,90 €</div>
            <div className={styles.item_date}>20.3.2023</div>
            <div className={styles.item_timespan}>1.8.2023 - 31.10.2023</div>
            <div className={styles.item_receiver}>Peten koiratarvike Oy</div>
            <div className={styles.item_average}>29,97 €/kk</div>
          </div>
          <div className={styles.item_edit}>
        <MdNavigateNext />
      </div>
        </div>
      )
    
  }
  
  export default Item
  