import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#1b1734', color: 'white', textAlign: 'center' }}>
      <Image
        src="http://kimble.shop.s3-website-ap-southeast-2.amazonaws.com/logo.png" 
        alt="KIMBLE.SHOP Logo"
        width={200}
        height={200} 
        priority
      />
      <h1 style={{ marginTop: '20px' }}>KIMBLE.SHOP</h1>
    </div>
  )
}
