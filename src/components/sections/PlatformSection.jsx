import createAd from '../../../assets/create-ad.png'

export default function PlatformSection() {
  return (
    <section className="platform section" id="platform"><div className="container"><div className="platform-bottom"><div className="platform-text reveal"><span className="kicker">İNTUİTİV İDARƏETMƏ</span><h3>Kampaniya yaratmaq indi daha sadədir.</h3><p>Reklam adı, tarix aralığı, reklam tipi və media faylını seçin. Qalan prosesi Adwave ilə rahat idarə edin.</p><div className="checks"><span>✓ Video və statik reklamlar</span><span>✓ Kampaniya tarixlərinin planlaşdırılması</span><span>✓ Aktiv və deaktiv statusların idarəsi</span></div><a href="#contact" className="text-link">Platformanı yaxından tanıyın ↗</a></div><div className="modal-image reveal"><div className="platform-orbit" aria-hidden="true"></div><div className="product-badge badge-live"><i></i><span><strong>Kampaniya aktivdir</strong><small>Yayıma hazır</small></span></div><img src={createAd} alt="Adwave reklam əlavə etmə forması" loading="lazy" /><div className="product-badge badge-form"><span className="badge-icon">✓</span><span><strong>3 sadə addım</strong><small>Yarat · Planlaşdır · Yayımla</small></span></div></div></div></div></section>
  )
}
