import styles from './ItemForm.module.scss'

function ItemForm(props) {

  return (
    <div>
     <form>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Kulutyyppi</label>
              <select name='type'>
                <option>Vakuutus</option>
                <option>Lelut</option>
                <option>Ruoka</option>
                <option>Eläinlääkäri</option>
                <option>Koulutus</option>
              </select>

            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='amount'>Summa</label>
              <input type='number' name='amount' step='0.01' />
            </div>
            <div>
              <label htmlFor='paymentDate'>Hankintapäivä</label>
              <input type='date' name='paymentDate' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='periodStart'>Kulun alkupäivä</label>
              <input type='date' name='periodStart' />
            </div>
            <div>
              <label htmlFor='periodEnd'>Kulun loppupäivä</label>
              <input type='date' name='periodEnd' />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='receiver'>Ostopaikka</label>
              <input type='text' name='receiver' />
            </div>
          </div>
        </div>
      </form>

    </div>
  )

}

export default ItemForm
