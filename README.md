<h1>Cargom Express: Kontrol Merkezi Projesi</h1>
  <p>Uygulama basit bir kontrol projesi olarak sunulmukta. Uygulamanın amacı kullanıcının Türkiyede'ki cihazlarının, nerede bulunduğu, son kullanma tarihi, doluluk oranı, hata olup olmadığı gibi bilgilerini görüntülemesi. Ayrıca kullanıcı harita üzerinde yeni cihaz eklemesi yapabilir veya var olan cihazları silebilir.
Kullanıcı Ana Sayfa'dan giriş yaptıktan sonra, Türkiye'deki ve dünyadaki xihazlarının durumlarını öğrenmesi için haritanın bulunduğu sayfaya yönlendirilir. Burada tüm cihazlar online bir JSON Server'dan çekilir ve kullanıcıya harita üzerinde gösterilir. </p>
<h2>Desktop - Mobile Design</h2>
<p> Uygulama hem Mobil hem de Desktop'da responsive bir şekilde çalışabilmekte.</p>


<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/web1.png" style = "width:100%"></img>
<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/web2.png" style = "width:100%"></img>

<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/mobil1.jpg" style = "width:33%"></img>
<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/mobil2.jpg" style = "width:33%"></img>
<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/mobil3.jpg" style = "width:33%"></img>

<h2>Color-Font-Icon Choices and Styling</h2>
<h4>Choices</h4>
<p>uygulama boyunca BeeVision şirket ambleminin ana rengi olan turuncu renk tonları kullanılmaktadır. Ayrıca uygulama renkleri ve fontları olabildiğince baist tutulmakta olup, Keep It Simple prensibine uygun olarak hazırlanmaktadır. Uygulamadaki cihaz ikonları yine BeeVision şirketinin amblemi olan arı peteğidir.</p>
<h4>Styling</h4>
<p>Uygulamanın tasarımında ağırlıklı olarak Bootstrap kütühanesine yer verilmektedir. Bunun sebebi hızlı olması ve tasarım açısından kaliteli ürünler ortaya çıkarması. Ayrıca Bootstrap kütüphanesi içerisindeki Navbar, Cards ve diğer elementlerden faydalanılmaktadır. Bunun haricinde linkleri stillendirmek ve layoutu hazırlamak için harici CSS dosyaları kullanılmaktadır</p>

<h2>Pages</h2>
Uygulama 2 sayfadan oluşmaktadır: 
<ul>
  <li>Home</li>
  <li>Map</li>
</ul>
<h4>Home Page</h4>
<p>Home Page kullanıcının siteye girdiğinde ilk karşılaşacağı sayfadır ve burada giriş kısmı ve kayıt olma kısmı yer almakta.</p>
<h4>Map Page</h4>
<p>Map Page uygulamanın asıl olduğu yer. Bu kısımda harita bulunmaktadır ve bu haritanın üzerinde kullanıcın takip ettiği cihazlar yer almaktadır. Ayrıca kullanıcı bu kısımda yeni cihaz ekleyebilir veya var olan cihazı silebilir.</p>

<h2>Components and Toastify Notifications</h2>
<p>Uygulama boyunca Toastify Notification kullanılmaktadır. Bunun sebebi bu kütüphanenin bildirimlerinin çok daha iyi görünmesi ve UI/UX açısından daha başarılı olmasıdır. Ayrıca uygulama içinde bu bildirimleri vermek kolay ve şekillendirmek basittir.</p>
<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/noti1.png"> </img>
<img src="https://github.com/SammCro/cargom_express/blob/master/src/imgs_of_app/noti2.png"> </img>

<h2>JSON Database and Axios Library</h2>
<p>Uygulama server tabanlı çalışmakta olup, JSON server üzerinden işlemler yapılmaktadır. Ama server ücretsiz olduğundan requetler çok geç iletilmektedir, dolayısıyla uygulama üzerinde gözükememektedir, bunun diğer sebebi ise Github'daki JSON file üzerinden çektiği için server Github'daki JSON dosyasına bağlı işlem yapmaktadır. GET,POST,DELETE işlemleri için Axios kütüphanesi kullanılmaktadır. Çünkü bu kütüphane kullanım ve kod temizliği açısından çok iyi performans göstermektedir.</p>
<p>Uygulama için kullanılan JSON Servera <a href="https://my-json-server.typicode.com/SammCro/cargom_express/devices">buradan </a>ulaşılabilmektedir.</p>
