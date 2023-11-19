import { useNavigate } from 'react-router-dom'
import Button from '../../shared/buttons'
import useForm from '../../shared/useform/useform'
import styles from './ItemForm.module.scss'

function ItemForm(props) {

  const navigate = useNavigate()

  const submit = () => {
    console.log(values)
    alert("SUBMIT")
  }

  const initialState = {
    type: "",
    amount: 0,
    paymentDate: "",
    periodStart: "",
    periodEnd: "",
    receiver: ""
  }

  const {values, handleChange, handleSubmit } = useForm(submit, initialState, false)

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div>
     <form onSubmit={handleSubmit}>
        <div className={styles.itemform}>
        <div className={styles.itemform_row}>
            <div>
            <label htmlFor='type'>Kulutyyppi</label>
            <select name='type' onChange={handleChange} value={values.type}>
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
              <input type='number' name='amount' step='0.01' onChange={handleChange} value={values.amount} />
            </div>
            <div>
              <label htmlFor='paymentDate'>Hankintapäivä</label>
              <input type='date' name='paymentDate' onChange={handleChange} value={values.paymentDate} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='periodStart'>Kulun alkupäivä</label>
              <input type='date' name='periodStart' onChange={handleChange} value={values.periodStart} />
            </div>
            <div>
              <label htmlFor='periodEnd'>Kulun loppupäivä</label>
              <input type='date' name='periodEnd' onChange={handleChange} value={values.periodEnd} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <label htmlFor='receiver'>Ostopaikka</label>
              <input type='text' name='receiver' onChange={handleChange} value={values.receiver} />
            </div>
          </div>
          <div className={styles.itemform_row}>
            <div>
              <Button onClick={handleCancel}>PERUUTA</Button>
            </div>
            <div>
              <Button primary type='submit'>LISÄÄ</Button>
            </div>
          </div>
        </div>
      </form>

    </div>
  )

}

export default ItemForm
