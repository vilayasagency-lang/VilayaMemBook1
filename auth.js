// ==========================================
// FIREBASE CONFIGURATION
// ==========================================
const firebaseConfig = {
    apiKey: "AIzaSyAazEnqZW7EWFXktJ5MPbU-Rf50-2V3F_E",
    authDomain: "postermaker-f6c18.firebaseapp.com",
    databaseURL: "https://postermaker-f6c18-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "postermaker-f6c18",
    storageBucket: "postermaker-f6c18.firebasestorage.app",
    messagingSenderId: "69974439362",
    appId: "1:69974439362:web:6fca32344bd079d691925b"
};

firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// ==========================================
// AUTHENTICATION MANAGER
// ==========================================
const auth = {
    currentUser: null,
    userData: null,

    showScreen(screenId) {
        document.querySelectorAll('.auth-box').forEach(box => box.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    setLoading(btnId, isLoading, originalText) {
        const btn = document.getElementById(btnId);
        if (!btn) return;
        if (isLoading) {
            btn.disabled = true;
            btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Please wait...`;
            btn.style.opacity = '0.7';
        } else {
            btn.disabled = false;
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
        }
    },

    async signup() {
        const name = document.getElementById('reg-name').value.trim();
        const username = document.getElementById('reg-username').value.trim().toLowerCase();
        const email = document.getElementById('reg-email').value.trim();
        const mobile = document.getElementById('reg-mobile').value.trim();
        const dob = document.getElementById('reg-dob').value;
        const gender = document.getElementById('reg-gender').value;
        const password = document.getElementById('reg-password').value;
        const confirmPassword = document.getElementById('reg-confirm-password').value;

        if (password !== confirmPassword) {
            app.showToast("Passwords do not match!", "fa-exclamation-circle"); return;
        }
        if (!name || !username || !email || !mobile || !dob || !gender) {
            app.showToast("Please fill all fields!", "fa-exclamation-circle"); return;
        }

        this.setLoading('btn-signup', true, 'Create Account');
        try {
            const usernameCheck = await database.ref('users').orderByChild('username').equalTo(username).once('value');
            if (usernameCheck.exists()) {
                app.showToast("Username already taken. Try another.", "fa-times-circle");
                this.setLoading('btn-signup', false, '<i class="fas fa-user-plus"></i> Create Account');
                return;
            }
            const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            const userProfile = {
                userID: user.uid, name, username, email, mobile, dob, gender,
                profileImage: '', subscriptionStatus: 'free',
                accountCreatedDate: new Date().toISOString()
            };
            await database.ref('users/' + user.uid).set(userProfile);
            app.showToast("Account Created Successfully!", "fa-check-circle");
        } catch (error) {
            app.showToast(error.message, "fa-exclamation-triangle");
            this.setLoading('btn-signup', false, '<i class="fas fa-user-plus"></i> Create Account');
        }
    },

    async login() {
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;
        if (!email || !password) { app.showToast("Email aur password daalo!", "fa-exclamation"); return; }
        this.setLoading('btn-login', true, 'Sign In');
        try {
            await firebaseAuth.signInWithEmailAndPassword(email, password);
            app.showToast("Logged in successfully!", "fa-check-circle");
        } catch (error) {
            app.showToast("Invalid credentials. Please try again.", "fa-exclamation-triangle");
            this.setLoading('btn-login', false, '<i class="fas fa-sign-in-alt"></i> Sign In');
        }
    },

    async resetPassword() {
        const email = document.getElementById('reset-email').value.trim();
        this.setLoading('btn-reset', true, 'Send Reset Link');
        try {
            await firebaseAuth.sendPasswordResetEmail(email);
            app.showToast("Password reset link sent to your email.", "fa-envelope");
            setTimeout(() => this.showScreen('login-box'), 2000);
        } catch (error) {
            app.showToast(error.message, "fa-exclamation-triangle");
        } finally {
            this.setLoading('btn-reset', false, '<i class="fas fa-paper-plane"></i> Send Reset Link');
        }
    },

    logout() {
        VMB.confirm(
            'Logout',
            'Are you sure you want to logout from <b>VilayaMemBook</b>?',
            () => {
                firebaseAuth.signOut().then(() => {
                    localStorage.removeItem('memoryflip_data');
                    app.state.books = [];
                    app.showToast("Logged out successfully", "fa-sign-out-alt");
                });
            },
            'warning'
        );
    },

    async loadProfileData(uid) {
        try {
            const snapshot = await database.ref('users/' + uid).once('value');
            if (snapshot.exists()) {
                this.userData = snapshot.val();
                const data = this.userData;

                // Update UI
                const setEl = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
                const setVal = (id, val) => { const el = document.getElementById(id); if(el) el.value = val; };
                const setSrc = (id, val) => { const el = document.getElementById(id); if(el) el.src = val; };

                setEl('profile-name-display', data.name);
                setEl('profile-username-display', '@' + data.username);

                const defaultImage = "https://ui-avatars.com/api/?name=" + encodeURIComponent(data.name) + "&background=6c5ce7&color=fff&size=120";
                const displayImg = data.profileImage && data.profileImage !== '' ? data.profileImage : defaultImage;
                setSrc('profile-image-display', displayImg);
                setSrc('nav-profile-pic', displayImg);

                const badgeDisplay = document.getElementById('profile-badge-display');
                if (badgeDisplay) {
                    if (data.subscriptionStatus === 'pro') {
                        badgeDisplay.innerHTML = '<i class="fas fa-crown"></i> PRO MEMBER';
                        badgeDisplay.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
                        badgeDisplay.style.color = '#000';
                    } else {
                        badgeDisplay.innerHTML = 'FREE PLAN';
                        badgeDisplay.style.background = 'linear-gradient(135deg, #bdc3c7, #95a5a6)';
                        badgeDisplay.style.color = '#fff';
                    }
                }

                setVal('edit-name', data.name);
                setVal('edit-username', data.username);
                setVal('edit-email', data.email);
                setVal('edit-mobile', data.mobile || '');
                setVal('edit-dob', data.dob || '');
                setVal('edit-gender', data.gender || '');

                // Sync books from cloud
                try {
                    const booksSnap = await database.ref('user_books/' + uid).once('value');
                    if (booksSnap.exists()) {
                        const booksObj = booksSnap.val();
                        let books = Object.keys(booksObj).map(key => booksObj[key]).filter(b => b && b.id);
                        let needsResave = false;
                        books.forEach(b => {
                            if (!b.category) { b.category = 'family'; needsResave = true; }
                            if (!b.capsuleLetters) b.capsuleLetters = [];
                            // KEY: set _imported explicitly so filter works
                            if (b._imported !== true) { b._imported = false; }
                            if (!b.cover) return;
                            if (!b.cover.bgType) b.cover.bgType = 'gradient';
                            if (!b.cover.bgGradient) b.cover.bgGradient = {c1:'#6c5ce7',c2:'#a29bfe'};
                            if (!b.cover.styles) b.cover.styles = {};
                            if (b.cover.overlayOpacity === undefined) b.cover.overlayOpacity = 4;
                            if (!b.cover.customWatermark) b.cover.customWatermark = {text:'My Memories',font:'Roboto',pos:'bottom-right',fill:'solid',c1:'#ffffff',c2:'#aaaaaa'};
                            if (!b.pages) b.pages = [];
                        });
                        app.state.books = books;
                        localStorage.setItem('memoryflip_data', JSON.stringify(app.state.books));
                        // Save _imported flag back to Firebase
                        if (needsResave) {
                            const updates = {};
                            books.forEach(b => { updates['user_books/' + uid + '/' + b.id] = b; });
                            database.ref().update(updates).catch(() => {});
                        }
                    } else {
                        const localData = localStorage.getItem('memoryflip_data');
                        if (localData) {
                            try {
                                let books = JSON.parse(localData).filter(b => b && b.id);
                                books.forEach(b => {
                                    if (b._imported !== true) b._imported = false;
                                    if (!b.category) b.category = 'family';
                                    if (!b.capsuleLetters) b.capsuleLetters = [];
                                });
                                app.state.books = books;
                                if (app.state.books.length > 0) {
                                    const updates = {};
                                    app.state.books.forEach(b => { updates['user_books/' + uid + '/' + b.id] = b; });
                                    await database.ref().update(updates);
                                }
                            } catch(e) { app.state.books = []; }
                        } else {
                            app.state.books = [];
                            localStorage.setItem('memoryflip_data', JSON.stringify([]));
                        }
                    }
                } catch(e) {
                    console.error("Cloud Books Sync Error:", e);
                    const localData = localStorage.getItem('memoryflip_data');
                    if (localData) {
                        try {
                            let books = JSON.parse(localData);
                            books.forEach(b => { if (b._imported !== true) b._imported = false; });
                            app.state.books = books;
                        } catch(ex) { app.state.books = []; }
                    }
                }

                // Hide splash and show app
                const splash = document.getElementById('splash-screen');
                if (splash) { splash.style.opacity = '0'; setTimeout(() => splash.style.display = 'none', 500); }
                const authCont = document.getElementById('auth-container');
                if (authCont) authCont.style.display = 'none';
                const appEl = document.getElementById('app');
                if (appEl) appEl.style.display = 'block';

                const urlParams = new URLSearchParams(window.location.search);
                if (!urlParams.get('view')) {
                    // Check pending action (from shared view CTA)
                    const pendingAction = localStorage.getItem('mf_pending_action');
                    if (pendingAction === 'create_book') {
                        localStorage.removeItem('mf_pending_action');
                        setTimeout(() => { app.navigateTo('dashboard'); app.openCategoryPicker(); }, 300);
                    } else if (app.state.books.length > 0) {
                        app.navigateTo('dashboard');
                    } else {
                        app.navigateTo('home');
                    }
                }

                if (typeof sub !== 'undefined') sub.applyFeatureLocks();

                // Check pending capsule deliveries
                setTimeout(() => app.checkPendingCapsules && app.checkPendingCapsules(), 1500);
            }
        } catch (error) {
            console.error("Error loading profile:", error);
            app.showToast("Failed to load profile data", "fa-times");
        }
    },

    async updateProfile() {
        if (!this.currentUser) return;
        this.setLoading('btn-update-profile', true, 'Save Changes');
        const updatedData = {
            name: document.getElementById('edit-name').value.trim(),
            mobile: document.getElementById('edit-mobile').value.trim(),
            dob: document.getElementById('edit-dob').value,
            gender: document.getElementById('edit-gender').value
        };
        try {
            await database.ref('users/' + this.currentUser.uid).update(updatedData);
            app.showToast("Profile Updated Successfully!", "fa-check-circle");
            this.userData.name = updatedData.name;
            const el = document.getElementById('profile-name-display');
            if(el) el.innerText = updatedData.name;
        } catch (error) {
            app.showToast("Failed to update profile.", "fa-times-circle");
        } finally {
            this.setLoading('btn-update-profile', false, '<i class="fas fa-save"></i> Save Changes');
        }
    },

    async uploadProfileImage(event) {
        const file = event.target.files[0];
        if (!file || !this.currentUser) return;
        if (!file.type.match('image.*')) { app.showToast("Please select a valid image file", "fa-exclamation"); return; }
        const localPreviewUrl = URL.createObjectURL(file);
        const pd = document.getElementById('profile-image-display');
        const np = document.getElementById('nav-profile-pic');
        if(pd) pd.src = localPreviewUrl;
        if(np) np.src = localPreviewUrl;
        app.showToast("Uploading Image...", "fa-spinner fa-spin");
        const storageRef = storage.ref(`profile_images/${this.currentUser.uid}_${Date.now()}`);
        try {
            const snapshot = await storageRef.put(file);
            const downloadURL = await snapshot.ref.getDownloadURL();
            await database.ref('users/' + this.currentUser.uid).update({ profileImage: downloadURL });
            this.userData.profileImage = downloadURL;
            app.showToast("Profile Picture Updated!", "fa-image");
        } catch (error) {
            app.showToast("Image upload failed.", "fa-times");
            console.error("Storage Error:", error);
        }
    }
};

// ==========================================
// GLOBAL AUTH STATE LISTENER
// ==========================================
firebaseAuth.onAuthStateChanged(user => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewBookId = urlParams.get('view');

    if (viewBookId) {
        // Shared book viewer mode
        const authCont = document.getElementById('auth-container');
        const appEl = document.getElementById('app');
        if(authCont) authCont.style.display = 'none';
        if(appEl) appEl.style.display = 'block';
        document.body.classList.add('hide-bottom-nav');
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if(splash) { splash.style.opacity = '0'; setTimeout(() => splash.style.display = 'none', 500); }
            if (window.app && app.loadSharedBookFromCloud) {
                app.loadSharedBookFromCloud(viewBookId);
            }
        }, 800);
    } else if (user) {
        auth.currentUser = user;
        auth.loadProfileData(user.uid);
    } else {
        auth.currentUser = null;
        auth.userData = null;
        const appEl = document.getElementById('app');
        const authCont = document.getElementById('auth-container');
        if(appEl) appEl.style.display = 'none';
        if(authCont) authCont.style.display = 'flex';
        auth.showScreen('login-box');
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            if(splash) { splash.style.opacity = '0'; setTimeout(() => splash.style.display = 'none', 500); }
        }, 1000);
    }
});
