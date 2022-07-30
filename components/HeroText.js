import { useAppContext } from '../contexts/AppContext';
import styles from '../styles/Home.module.css'

function HeroText(params) {
  const { user, setUser } = useAppContext();

  const handleChange = (e) => {
    setUser({
      name: e?.target?.value || 'Ale',
    });
  }

  return (
    <main className={styles.main}>
      <h1 className="title">
        CONTEXT APP {`${JSON.stringify(user)}`}
      </h1>

      <p className="description">
        Example
      </p>

      <label htmlFor="username">Change User Name
      </label>
      <input type="text" id="username" onChange={handleChange} />

    </main>
  )
}

export default HeroText
