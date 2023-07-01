import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#1b1734', color: 'white', textAlign: 'center' }}>
      <Image
        src="/logo.png" // Replace with the path to your logo image
        alt="KIMBLE.SHOP Logo"
        width={200} // Adjust as needed
        height={200} // Adjust as needed
        priority
      />
      <h1 style={{ marginTop: '20px' }}>KIMBLE.SHOP</h1>
    </div>
  )
}
