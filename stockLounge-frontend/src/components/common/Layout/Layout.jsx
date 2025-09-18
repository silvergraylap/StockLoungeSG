import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from '../../../styles/components/common/Layout.module.css'

const Layout = ({ children }) => {
   return (
      <div className={styles.layout}>
         <Header />
         <main className={styles.main}>{children}</main>
         <Footer />
      </div>
   )
}

export default Layout
