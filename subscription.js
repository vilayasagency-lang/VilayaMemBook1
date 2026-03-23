// ==========================================
// SUBSCRIPTION & PAYMENT MODULE
// ==========================================
const sub = {

    showPaymentScreen() {
        if (auth.userData && auth.userData.subscriptionStatus === 'pro') {
            app.showToast("You are already a PRO member!", "fa-check-circle"); return;
        }
        document.getElementById('payment-modal').classList.add('active');
    },

    payWithPhonePe() {
        const upiId = "debabrat1985@axl";
        const payeeName = "DEBABRAT SWAIN";
        const amount = "499.00";
        const transactionNote = "MemoryFlip Pro Upgrade";
        const upiLink = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}`;
        window.location.href = upiLink;
    },

    async processPayment() {
        if (!auth.currentUser || !auth.userData) return;
        const btn = document.getElementById('btn-i-have-paid');
        if(btn) { btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Verifying...'; btn.disabled = true; }
        try {
            await database.ref('payment_requests/' + auth.currentUser.uid).set({
                email: auth.userData.email, name: auth.userData.name,
                timestamp: new Date().toISOString(), status: 'paid_by_user', amount: '499'
            });
            document.getElementById('payment-modal').classList.remove('active');
            document.getElementById('payment-success-modal').classList.add('active');
        } catch (error) {
            app.showToast("Something went wrong. Try again.", "fa-times-circle");
        } finally {
            if(btn) { btn.innerHTML = '<i class="fas fa-check-circle"></i> I Have Paid'; btn.disabled = false; }
        }
    },

    async completeUpgradeAndReturn() {
        try {
            const btn = document.querySelector('#payment-success-modal .btn-primary');
            if(btn) btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Upgrading...';
            await database.ref('users/' + auth.currentUser.uid).update({
                subscriptionStatus: 'pro', subscriptionDate: new Date().toISOString()
            });
            auth.userData.subscriptionStatus = 'pro';
            sub.applyFeatureLocks();
            document.getElementById('payment-success-modal').classList.remove('active');
            app.navigateTo('subscription');
            app.showToast("Congratulations! You are now a PRO member.", "fa-crown");
            if(btn) btn.innerHTML = '<i class="fas fa-arrow-left"></i> Back to Application';
        } catch(e) {
            app.showToast("Error activating. Refresh the page.", "fa-times");
        }
    },

    applyFeatureLocks() {
        if (!auth.userData) return;
        const isPro = auth.userData.subscriptionStatus === 'pro';
        const badge = document.getElementById('profile-badge-display');
        if (badge) {
            if (isPro) {
                badge.innerHTML = '<i class="fas fa-crown"></i> PRO MEMBER';
                badge.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
                badge.style.color = '#000';
            } else {
                badge.innerHTML = 'FREE PLAN';
                badge.style.background = 'linear-gradient(135deg, #bdc3c7, #95a5a6)';
                badge.style.color = '#fff';
            }
        }
        const proCardBtn = document.querySelector('.pro-card button');
        if (proCardBtn) {
            if (isPro) {
                proCardBtn.innerHTML = '<i class="fas fa-check-circle"></i> PRO Activated';
                proCardBtn.classList.remove('btn-primary', 'pulse-animation');
                proCardBtn.classList.add('btn-success');
                proCardBtn.onclick = null; proCardBtn.disabled = true;
            } else {
                proCardBtn.innerHTML = '<i class="fas fa-crown"></i> Upgrade Now — ₹499';
                proCardBtn.classList.remove('btn-success');
                proCardBtn.classList.add('btn-primary', 'pulse-animation');
                proCardBtn.onclick = () => sub.showPaymentScreen();
                proCardBtn.disabled = false;
            }
        }
    }
};

window.addEventListener('load', () => {
    setTimeout(() => { if (auth.userData) sub.applyFeatureLocks(); }, 1200);
});
