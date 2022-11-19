import styles from '../styles/Home.module.css'
import About from './components/about'
import Header from './components/header'
import Footer from './components/footer'

export default function Home() {
  
  return (
    <div className={styles.container}>
      
        <Header></Header>

        <main className={styles.main}>
            Courrier des lecteurs
        </main>
        <About></About>
    </div>
  )
}