/* Nouveau Dining - Sadeleştirilmiş Ortak Footer
   Kullanım: her sayfada </body> öncesine <script src="footer.js"></script> ekle. */
(function () {
    var START_YEAR = 2020;
    var year = new Date().getFullYear();
    var years = year > START_YEAR ? START_YEAR + '–' + year : START_YEAR;

    var css = '\
    .nd-footer{background:#0f0f0f;color:#6b6b6b;border-top:1px solid #1f1f1f;font-family:"Montserrat",sans-serif;margin:0;padding:22px 24px;text-align:center;font-size:12px;clear:both}\
    .nd-footer *{box-sizing:border-box}';

    var html = '© ' + years + ' Nouveau Dining. Tüm hakları saklıdır.';

   function mount() {
        // Eski kod sayfadaki TÜM footer'ları siliyordu, bu satırı kaldırdık veya sadece kendi sınıfını silecek şekilde güncelledik:
        document.querySelectorAll('.nd-footer').forEach(function (el) { el.remove(); });

        if (!document.getElementById('nd-footer-style')) {
            var st = document.createElement('style');
            st.id = 'nd-footer-style';
            st.textContent = css;
            document.head.appendChild(st);
        }
        var f = document.createElement('footer');
        f.className = 'nd-footer';
        f.innerHTML = html;
        document.body.appendChild(f);
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
    else mount();
})();