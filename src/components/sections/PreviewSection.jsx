import { useState } from 'react'
import wifiStatic from '../../../assets/wifi-static.png'
import wifiVideo from '../../../assets/wifi-video.png'

export default function PreviewSection() {
  const [video, setVideo] = useState(false)
  return <section className="preview section soft"><div className="container preview-grid"><div className="preview-copy reveal"><span className="kicker">QONAQLARIN GÖRDÜYÜ EKRAN</span><h2>Reklam görünür. <span>Bağlantı davam edir.</span></h2><p>Adwave qonaq Wi-Fi girişində həm statik, həm də video reklamların göstərilməsini dəstəkləyir. Məkanın reklam təcrübəsini birbaşa görün.</p><div className="preview-switch"><button className={`switch-btn ${!video ? 'active' : ''}`} onClick={() => setVideo(false)}>Statik reklam</button><button className={`switch-btn ${video ? 'active' : ''}`} onClick={() => setVideo(true)}>Video reklam</button></div><p className="muted-small">Nümunə ekranlar real məhsul interfeysindən götürülüb.</p></div><div className="preview-window reveal"><div className="preview-window-top"><span>● ● ●</span><span>Guest Wi-Fi preview</span><span>↗</span></div><img src={video ? wifiVideo : wifiStatic} alt={video ? 'Wi-Fi video reklam ekranı' : 'Wi-Fi statik reklam ekranı'} loading="lazy" /></div></div></section>
}
