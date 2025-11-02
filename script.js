// تبديل الصفحات بدون إعادة تحميل مع تأثيرات
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // تبديل الحالة النشطة في الروابط
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        this.classList.add('active');

        // إخفاء جميع الصفحات
        document.querySelectorAll('.page').forEach(sec => {
            sec.classList.remove('active');
            sec.style.opacity = 0;
        });

        // إظهار الصفحة المطلوبة مع تأثير
        const pageId = this.getAttribute('data-page');
        const targetPage = document.getElementById(pageId);
        targetPage.classList.add('active');
        setTimeout(() => {
            targetPage.style.opacity = 1;
        }, 50);

        // تمرير لأعلى
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// رسالة نجاح عند إرسال نموذج التواصل مع تأثيرات
function sendMessage(e) {
    e.preventDefault();
    document.querySelector('.contact-form').reset();

    const msg = document.getElementById('contact-success');
    msg.style.display = 'block';
    msg.style.opacity = 0;
    msg.textContent = "✅ تم إرسال رسالتك بنجاح! سأقوم بالرد عليك قريباً.";

    setTimeout(() => {
        msg.style.opacity = 1;
    }, 100);

    setTimeout(() => {
        msg.style.opacity = 0;
        setTimeout(() => {
            msg.style.display = 'none';
        }, 500);
    }, 5000);
}

// زر الوضع الليلي مع حفظ التفضيل
const toggleDark = document.getElementById('toggle-dark');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleDark.innerHTML = '<i class="fas fa-sun"></i>';
}

toggleDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    toggleDark.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// تأثير عند تمرير الماوس على بطاقات المشاريع
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 4px 16px rgba(60, 72, 128, 0.2)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = '0 2px 8px rgba(26, 35, 126, 0.04)';
    });
});
