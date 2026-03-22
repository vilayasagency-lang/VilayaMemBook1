// ==========================================
// 1. FIREBASE CONFIGURATION & INITIALIZATION
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

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firebaseAuth = firebase.auth();
const database = firebase.database();
const storage = firebase.storage();

// ==========================================
// 2. AUTHENTICATION MANAGER MODULE
// ==========================================
const auth = {
    currentUser: null,
    userData: null,

    // Switch between Login, Signup, Forgot Password screens
    showScreen(screenId) {
        document.querySelectorAll('.auth-box').forEach(box => box.classList.remove('active'));
        document.getElementById(screenId).classList.add('active');
    },

    // Set Loading State on Buttons
    setLoading(btnId, isLoading, originalText) {
        const btn = document.getElementById(btnId);
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

    // ------------------------------------------
    // SIGNUP LOGIC (With Validation & DB Write)
    // ------------------------------------------
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
            app.showToast("Passwords do not match!", "fa-exclamation-circle");
            return;
        }

        this.setLoading('btn-signup', true, 'Create Account');

        try {
            // Check if Username is Unique
            const usernameCheck = await database.ref('users').orderByChild('username').equalTo(username).once('value');
            if (usernameCheck.exists()) {
                app.showToast("Username already taken. Try another.", "fa-times-circle");
                this.setLoading('btn-signup', false, '<i class="fas fa-user-plus"></i> Create Account');
                return;
            }

            // Create Auth Account
            const userCredential = await firebaseAuth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            // Save Full Profile Data to Database
            const userProfile = {
                userID: user.uid,
                name: name,
                username: username,
                email: email,
                mobile: mobile,
                dob: dob,
                gender: gender,
                profileImage: '',
                subscriptionStatus: 'free',
                accountCreatedDate: new Date().toISOString()
            };

            await database.ref('users/' + user.uid).set(userProfile);
            app.showToast("Account Created Successfully!", "fa-check-circle");
            
        } catch (error) {
            app.showToast(error.message, "fa-exclamation-triangle");
            this.setLoading('btn-signup', false, '<i class="fas fa-user-plus"></i> Create Account');
        }
    },

    // ------------------------------------------
    // LOGIN LOGIC
    // ------------------------------------------
    async login() {
        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value;

        this.setLoading('btn-login', true, 'Sign In');

        try {
            await firebaseAuth.signInWithEmailAndPassword(email, password);
            app.showToast("Logged in successfully!", "fa-check-circle");
        } catch (error) {
            app.showToast("Invalid credentials. Please try again.", "fa-exclamation-triangle");
            this.setLoading('btn-login', false, '<i class="fas fa-sign-in-alt"></i> Sign In');
        }
    },

    // ------------------------------------------
    // FORGOT PASSWORD LOGIC
    // ------------------------------------------
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

    // ------------------------------------------
    // LOGOUT LOGIC
    // ------------------------------------------
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
            'warning', 'Logout', 'Stay'
        );
    },

    // ------------------------------------------
    // LOAD PROFILE DATA & SYNC BOOKS FROM CLOUD
    // ------------------------------------------
    async loadProfileData(uid) {
        try {
            const snapshot = await database.ref('users/' + uid).once('value');
            if (snapshot.exists()) {
                this.userData = snapshot.val();
                const data = this.userData;

                // Update Profile View Displays
                document.getElementById('profile-name-display').innerText = data.name;
                document.getElementById('profile-username-display').innerText = '@' + data.username;
                
                const defaultImage = "https://via.placeholder.com/120?text=Upload+Pic";
                const displayImg = data.profileImage && data.profileImage !== '' ? data.profileImage : defaultImage;
                
                // Show Image
                document.getElementById('profile-image-display').src = displayImg;
                document.getElementById('nav-profile-pic').src = displayImg;

                // Update Badges based on Subscription
                const badgeDisplay = document.getElementById('profile-badge-display');
                if(data.subscriptionStatus === 'pro') {
                    badgeDisplay.innerHTML = '<i class="fas fa-crown"></i> PRO MEMBER';
                    badgeDisplay.style.background = 'linear-gradient(135deg, #FFD700, #FFA500)';
                    badgeDisplay.style.color = '#000';
                } else {
                    badgeDisplay.innerHTML = 'FREE TRIAL';
                    badgeDisplay.style.background = 'linear-gradient(135deg, #bdc3c7, #95a5a6)';
                    badgeDisplay.style.color = '#fff';
                }

                // Fill Edit Form Fields
                document.getElementById('edit-name').value = data.name;
                document.getElementById('edit-username').value = data.username;
                document.getElementById('edit-email').value = data.email;
                document.getElementById('edit-mobile').value = data.mobile;
                document.getElementById('edit-dob').value = data.dob;
                document.getElementById('edit-gender').value = data.gender;
                
                // 🚀 NEW: SYNC USER'S BOOKS FROM CLOUD 🚀
                try {
                    const booksSnap = await database.ref('user_books/' + uid).once('value');
                    if (booksSnap.exists()) {
                        const booksObj = booksSnap.val();
                        // Convert Firebase Object to Array
                        app.state.books = Object.keys(booksObj).map(key => booksObj[key]);
                        // Save back to local storage for quick offline access
                        localStorage.setItem('memoryflip_data', JSON.stringify(app.state.books));
                    } else {
                        // Migration: If cloud is empty but local has books, upload them to cloud safely
                        const localData = localStorage.getItem('memoryflip_data');
                        if (localData && JSON.parse(localData).length > 0) {
                            app.state.books = JSON.parse(localData);
                            app.state.books.forEach(b => {
                                database.ref('user_books/' + uid + '/' + b.id).set(b);
                            });
                        } else {
                            app.state.books = [];
                            localStorage.setItem('memoryflip_data', JSON.stringify([]));
                        }
                    }
                } catch(e) {
                    console.error("Cloud Books Sync Error:", e);
                }

                // Hide Splash and Show Main App
                document.getElementById('splash-screen').style.opacity = '0';
                setTimeout(() => {
                    document.getElementById('splash-screen').style.display = 'none';
                    document.getElementById('auth-container').style.display = 'none';
                    document.getElementById('app').style.display = 'block';
                    
                    const urlParams = new URLSearchParams(window.location.search);
                    if (!urlParams.get('view')) {
                        // Normal login -> Render the dashboard with downloaded books
                        if(app.state.books.length > 0) app.navigateTo('dashboard');
                        else app.navigateTo('home');
                    }
                    
                    if(typeof sub !== 'undefined') sub.applyFeatureLocks();
                }, 500);
            }
        } catch (error) {
            console.error("Error loading profile:", error);
            app.showToast("Failed to load profile data", "fa-times");
        }
    },

    // ------------------------------------------
    // UPDATE PROFILE DATA
    // ------------------------------------------
    async updateProfile() {
        if(!this.currentUser) return;
        
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
            document.getElementById('profile-name-display').innerText = updatedData.name;
        } catch (error) {
            app.showToast("Failed to update profile.", "fa-times-circle");
        } finally {
            this.setLoading('btn-update-profile', false, '<i class="fas fa-save"></i> Save Changes');
        }
    },

    // ------------------------------------------
    // PROFILE PICTURE UPLOAD
    // ------------------------------------------
    async uploadProfileImage(event) {
        const file = event.target.files[0];
        if (!file || !this.currentUser) return;

        if (!file.type.match('image.*')) {
            app.showToast("Please select a valid image file", "fa-exclamation");
            return;
        }

        const localPreviewUrl = URL.createObjectURL(file);
        document.getElementById('profile-image-display').src = localPreviewUrl;
        document.getElementById('nav-profile-pic').src = localPreviewUrl;
        
        app.showToast("Uploading Image... Please wait", "fa-spinner fa-spin");
        
        const storageRef = storage.ref(`profile_images/${this.currentUser.uid}_${Date.now()}`);
        
        try {
            const snapshot = await storageRef.put(file);
            const downloadURL = await snapshot.ref.getDownloadURL();

            await database.ref('users/' + this.currentUser.uid).update({ profileImage: downloadURL });
            
            this.userData.profileImage = downloadURL;
            app.showToast("Profile Picture Updated!", "fa-image");
            
        } catch (error) {
            app.showToast("Image upload failed. Ensure Storage Rules allow uploads.", "fa-times");
            console.error("Storage Error:", error);
        }
    }
};

// ==========================================
// 3. GLOBAL ENTRY PROTECTION & URL ROUTING
// ==========================================
firebaseAuth.onAuthStateChanged(user => {
    const urlParams = new URLSearchParams(window.location.search);
    const viewBookId = urlParams.get('view');

    if (viewBookId) {
        // We are in Viewer Mode - Bypass login
        document.getElementById('auth-container').style.display = 'none';
        document.getElementById('app').style.display = 'block';
        
        document.body.classList.add('hide-bottom-nav');
        
        setTimeout(() => {
            document.getElementById('splash-screen').style.opacity = '0';
            setTimeout(() => document.getElementById('splash-screen').style.display = 'none', 500);
            
            if (window.app && app.loadSharedBookFromCloud) {
                app.loadSharedBookFromCloud(viewBookId);
            }
        }, 1000);

    } else if (user) {
        auth.currentUser = user;
        auth.loadProfileData(user.uid);
    } else {
        auth.currentUser = null;
        auth.userData = null;
        
        document.getElementById('app').style.display = 'none';
        document.getElementById('auth-container').style.display = 'flex';
        auth.showScreen('login-box');
        
        setTimeout(() => {
            const splash = document.getElementById('splash-screen');
            splash.style.opacity = '0';
            setTimeout(() => splash.style.display = 'none', 500);
        }, 1000);
    }
});