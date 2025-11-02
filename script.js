// تبديل الصفحات بدون إعادة تحميل
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        let page = this.getAttribute('data-page');
        document.querySelectorAll('.page').forEach(sec => sec.classList.remove('active'));
        document.getElementById(page).classList.add('active');
        window.scrollTo(0, 0);
    });
});

// رسالة نجاح عند إرسال نموذج التواصل
function sendMessage(e) {
    e.preventDefault();
    document.querySelector('.contact-form').reset();
    let msg = document.getElementById('contact-success');
    msg.style.display = 'block';
    msg.textContent = "تم إرسال رسالتك بنجاح! سأقوم بالرد عليك قريباً.";
    setTimeout(() => {
        msg.style.display = 'none';
    }, 5000);
}