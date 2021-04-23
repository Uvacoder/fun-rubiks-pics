import styles from "../styles/Home.module.css";
import Image from 'next/image'
import ReactAudioPlayer from 'react-audio-player';

export default function Contents() {
  return (
    <main className={styles.title}>
      <Image
        src="/yeahyeah.gif"
        alt="DABABY YEAH YEAH"
        width={500}
        height={500}
      />
<ReactAudioPlayer
  src="/vibez.mp3"
  autoPlay
  
/>
    </main>
  );
}
