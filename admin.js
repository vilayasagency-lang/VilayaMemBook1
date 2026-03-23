<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MemoryFlip Admin - Super Panel</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700;900&display=swap" rel="stylesheet">
    
    <!-- Firebase SDKs -->
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-auth-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js"></script>

    <style>
        :root { --primary: #6c5ce7; --dark: #1e1e2d; --light: #f4f6f9; --text: #333; --border: #e1e4e8; }
        body { margin: 0; font-family: 'Roboto', sans-serif; background: var(--light); display: flex; height: 100vh; overflow: hidden; }
        
        /* Login Screen */
        #admin-login { position: fixed; inset: 0; background: var(--dark); display: flex; justify-content: center; align-items: center; z-index: 1000; }
        .login-box { background: white; padding: 40px; border-radius: 12px; width: 350px; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .login-box input { width: 100%; padding: 12px; margin: 10px 0; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; }
        .btn { background: var(--primary); color: white; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; font-weight: bold; width: 100%; transition: 0.3s; }
        .btn:hover { opacity: 0.9; transform: translateY(-1px); }
        .btn-success { background: #00b894; } .btn-danger { background: #d63031; }

        /* Sidebar */
        .sidebar { width: 260px; background: var(--dark); color: white; display: flex; flex-direction: column; }
        .sidebar-logo { padding: 20px; font-size: 1.4rem; font-weight: 900; text-align: center; border-bottom: 1px solid rgba(255,255,255,0.1); color: var(--primary); }
        .nav-link { padding: 15px 20px; cursor: pointer; transition: 0.3s; display: flex; align-items: center; gap: 10px; color: #a5a5b5; border-bottom: 1px solid rgba(255,255,255,0.05); }
        .nav-link:hover, .nav-link.active { background: rgba(108, 92, 231, 0.2); color: white; border-left: 4px solid var(--primary); }
        
        /* Main Content */
        .main-content { flex: 1; padding: 30px; overflow-y: auto; }
        .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; }
        .header h1 { margin: 0; color: var(--text); }
        
        /* Dashboard Stats */
        .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 30px; }
        .stat-card { background: white; padding: 20px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); display: flex; align-items: center; gap: 15px; }
        .stat-icon { width: 50px; height: 50px; border-radius: 10px; background: rgba(108, 92, 231, 0.1); color: var(--primary); display: flex; justify-content: center; align-items: center; font-size: 1.5rem; }
        
        /* Tables */
        .admin-table-container { background: white; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); overflow: hidden; display: none; }
        .admin-table-container.active { display: block; }
        table { width: 100%; border-collapse: collapse; text-align: left; }
        th, td { padding: 15px; border-bottom: 1px solid var(--border); font-size: 0.95rem; }
        th { background: #f8f9fa; font-weight: 700; color: #555; }
        .badge { padding: 5px 10px; border-radius: 20px; font-size: 0.75rem; font-weight: bold; }
        .badge-pro { background: #ffeaa7; color: #d35400; }
        .badge-free { background: #dfe6e9; color: #2d3436; }
        .badge-pending { background: #fab1a0; color: #d63031; }

        /* Dynamic CMS Features Form */
        .config-header { display: flex; justify-content: space-between; padding: 20px; background: #f8f9fa; border-bottom: 1px solid var(--border); align-items: center; }
        .config-header select { padding: 12px; border-radius: 6px; border: 1px solid #ccc; font-size: 1rem; width: 300px; outline: none; font-weight: bold;}
        
        /* Modals */
        .modal { position: fixed; inset: 0; background: rgba(0,0,0,0.6); display: none; justify-content: center; align-items: center; z-index: 2000; backdrop-filter: blur(3px); }
        .modal.active { display: flex; }
        .modal-content { background: white; padding: 30px; border-radius: 12px; width: 550px; box-shadow: 0 10px 30px rgba(0,0,0,0.2); max-height: 90vh; overflow-y: auto;}
        .modal-content h3 { margin-top: 0; margin-bottom: 10px; color: var(--primary); }
        .helper-text { background: rgba(108, 92, 231, 0.05); padding: 12px; border-radius: 6px; border-left: 4px solid var(--primary); font-size: 0.85rem; color: #555; margin-bottom: 15px; line-height: 1.4;}
        .modal-content label { display: block; margin-top: 15px; font-weight: bold; font-size: 0.85rem; color: #333; }
        .modal-content select, .modal-content input, .modal-content textarea { width: 100%; padding: 12px; margin-top: 5px; border: 1px solid #ccc; border-radius: 6px; box-sizing: border-box; font-family: inherit; }
        .modal-content textarea { font-family: 'Inconsolata', monospace; font-size: 0.9rem; resize: vertical; background: #f8f9fa; border: 1px solid #ccc;}
        .modal-content textarea:focus { background: #fff; border-color: var(--primary); outline: none; }
    </style>
</head>
<body>

    <!-- Admin Login -->
    <div id="admin-login">
        <div class="login-box">
            <h2><i class="fas fa-lock text-primary"></i> Master Admin Access</h2>
            <p style="color:#666; font-size:0.9rem;">SaaS Control Panel</p>
            <input type="email" id="admin-email" placeholder="Admin Email">
            <input type="password" id="admin-password" placeholder="Password">
            <button class="btn" onclick="adminAuth()">Login to Dashboard</button>
            <p id="login-error" style="color:red; font-size:0.85rem; display:none; margin-top:10px;">Invalid Credentials</p>
        </div>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
        <div class="sidebar-logo">MemoryFlip Admin</div>
        <div class="nav-link active" onclick="switchTab('dashboard')"><i class="fas fa-chart-pie"></i> Dashboard Stats</div>
        <div class="nav-link" onclick="switchTab('users')"><i class="fas fa-users"></i> Manage Users</div>
        <div class="nav-link" onclick="switchTab('payments')"><i class="fas fa-money-check-alt"></i> Payment Approvals</div>
        <div class="nav-link" onclick="switchTab('config'); loadFeatures();"><i class="fas fa-cogs"></i> Dropdown Manager (CMS)</div>
        <div style="flex:1;"></div>
        <div class="nav-link" style="color:#ff7675;" onclick="firebase.auth().signOut()"><i class="fas fa-sign-out-alt"></i> Logout System</div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
        <div class="header">
            <h1 id="page-title">Dashboard Overview</h1>
            <div id="admin-email-display" style="font-weight:bold; color:var(--primary);"></div>
        </div>

        <!-- 1. Dashboard Tab -->
        <div id="tab-dashboard" class="admin-table-container active" style="background:transparent; box-shadow:none;">
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-icon"><i class="fas fa-users"></i></div>
                    <div><h2 id="stat-total-users" style="margin:0;">0</h2><p style="margin:0; color:#888;">Total Registered Users</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background:#fff3e0; color:#e67e22;"><i class="fas fa-crown"></i></div>
                    <div><h2 id="stat-pro-users" style="margin:0;">0</h2><p style="margin:0; color:#888;">Pro Subscribers</p></div>
                </div>
                <div class="stat-card">
                    <div class="stat-icon" style="background:#e8f8f5; color:#00b894;"><i class="fas fa-rupee-sign"></i></div>
                    <div><h2 id="stat-revenue" style="margin:0;">₹0</h2><p style="margin:0; color:#888;">Estimated Revenue</p></div>
                </div>
            </div>
        </div>

        <!-- 2. Users Tab -->
        <div id="tab-users" class="admin-table-container">
            <table>
                <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Status</th>
                        <th>Subscribed On</th>
                        <th>Expiry Date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody id="users-table-body">
                    <!-- Loaded dynamically via JS -->
                </tbody>
            </table>
        </div>

        <!-- 3. Payment Approvals Tab -->
        <div id="tab-payments" class="admin-table-container">
            <table>
                <thead>
                    <tr>
                        <th>User Details</th>
                        <th>Amount</th>
                        <th>Request Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="payments-table-body">
                    <!-- Loaded dynamically via JS -->
                </tbody>
            </table>
        </div>

        <!-- 4. Dynamic Features CMS Tab -->
        <div id="tab-config" class="admin-table-container">
            <div class="config-header">
                <select id="feature-category" onchange="loadFeatures()">
                    <option value="fonts">Typography Fonts</option>
                    <option value="themes">1-Click Smart Themes</option>
                    <option value="textures">Realistic Textures (Pro)</option>
                    <option value="patterns">CSS Background Patterns</option>
                    <option value="guestbook">Guestbook Themes</option>
                    <option value="layouts">Page Layouts</option>
                    <option value="scrapbook">Interactive Scrapbook Items</option>
                    <option value="frames">Aesthetic Photo Frames</option>
                    <option value="particles">3D Particle Effects</option>
                </select>
                <button class="btn btn-primary" style="width:auto;" onclick="openAddFeatureModal()"><i class="fas fa-plus"></i> Add New Option</button>
            </div>
            <table>
                <thead>
                    <tr id="feature-table-head">
                        <!-- Loaded dynamically via JS -->
                    </tr>
                </thead>
                <tbody id="feature-table-body">
                    <!-- Loaded dynamically via JS -->
                </tbody>
            </table>
        </div>

    </div>

    <!-- ============================================== -->
    <!-- MODALS SECTION -->
    <!-- ============================================== -->

    <!-- Edit User Modal -->
    <div id="edit-user-modal" class="modal">
        <div class="modal-content" style="width:400px;">
            <h3 style="margin-top:0;"><i class="fas fa-user-edit"></i> Edit User Plan</h3>
            <input type="hidden" id="edit-uid">
            <label>Subscription Status</label>
            <select id="edit-status">
                <option value="free">Free</option>
                <option value="pro">Pro</option>
            </select>
            <label>Expiry Plan</label>
            <select id="edit-expiry">
                <option value="lifetime">Lifetime Access</option>
                <option value="1year">1 Year Access</option>
                <option value="1month">1 Month Access</option>
            </select>
            <div style="display:flex; gap:10px; margin-top:20px;">
                <button class="btn btn-success" onclick="saveUserPlan()">Save Changes</button>
                <button class="btn btn-danger" onclick="closeModal('edit-user-modal')">Cancel</button>
            </div>
        </div>
    </div>

    <!-- Add Feature Modal (Dynamic Super CMS) -->
    <div id="add-feature-modal" class="modal">
        <div class="modal-content">
            <h3><i class="fas fa-magic"></i> Add New: <span id="feature-modal-title" style="text-transform: capitalize;">Feature</span></h3>
            <div id="feature-helper" class="helper-text">Helper text goes here</div>
            
            <form id="add-feature-form" onsubmit="event.preventDefault(); saveNewFeature();">
                <div id="dynamic-form-fields">
                    <!-- Fields injected automatically based on selected category -->
                </div>

                <div style="display:flex; gap:10px; margin-top:25px;">
                    <button type="submit" class="btn btn-success"><i class="fas fa-cloud-upload-alt"></i> Publish to App Live</button>
                    <button type="button" class="btn btn-danger" onclick="closeModal('add-feature-modal')">Cancel</button>
                </div>
            </form>
        </div>
    </div>

    <!-- ============================================== -->
    <!-- JAVASCRIPT ENGINE -->
    <!-- ============================================== -->
    <script>
        // --- 1. FIREBASE INITIALIZATION ---
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
        const db = firebase.database();
        const auth = firebase.auth();

        function closeModal(id) { document.getElementById(id).classList.remove('active'); }

        // --- 2. ADMIN AUTHENTICATION ---
        function adminAuth() {
            const email = document.getElementById('admin-email').value;
            const pass = document.getElementById('admin-password').value;
            auth.signInWithEmailAndPassword(email, pass).catch(e => {
                document.getElementById('login-error').style.display = 'block';
            });
        }

        auth.onAuthStateChanged(user => {
            if(user) {
                document.getElementById('admin-login').style.display = 'none';
                document.getElementById('admin-email-display').innerText = "Logged in as Admin: " + user.email;
                fetchDashboardData();
            } else {
                document.getElementById('admin-login').style.display = 'flex';
            }
        });

        // --- 3. UI TAB SWITCHER ---
        function switchTab(tabId) {
            document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
            event.currentTarget.classList.add('active');
            document.querySelectorAll('.admin-table-container').forEach(c => c.classList.remove('active'));
            document.getElementById('tab-' + tabId).classList.add('active');
            
            const titles = { 'dashboard': 'Dashboard Stats', 'users': 'Manage Users', 'payments': 'Payment Approvals', 'config': 'Dropdown Options Manager' };
            document.getElementById('page-title').innerText = titles[tabId];
        }

        // --- 4. FETCH USERS & PAYMENTS ---
        function fetchDashboardData() {
            db.ref('users').on('value', snap => {
                const users = snap.val();
                let total = 0, pro = 0, html = '';
                if(users) {
                    Object.keys(users).forEach(uid => {
                        const u = users[uid];
                        total++;
                        if(u.subscriptionStatus === 'pro') pro++;

                        const statusBadge = u.subscriptionStatus === 'pro' ? '<span class="badge badge-pro">PRO</span>' : '<span class="badge badge-free">FREE</span>';
                        const subDate = u.subscriptionDate ? new Date(u.subscriptionDate).toLocaleDateString() : '-';
                        const expDate = u.subscriptionExpiry ? u.subscriptionExpiry : (u.subscriptionStatus === 'pro' ? 'Lifetime' : '-');

                        html += `<tr><td><strong>${u.name}</strong><br><small>${u.mobile || 'No Mobile'}</small></td><td>${u.email}</td><td>${statusBadge}</td><td>${subDate}</td><td>${expDate}</td><td><button class="btn" style="padding:6px 12px; font-size:0.85rem;" onclick="openEditModal('${uid}', '${u.subscriptionStatus}')"><i class="fas fa-edit"></i> Edit</button></td></tr>`;
                    });
                }
                document.getElementById('users-table-body').innerHTML = html;
                document.getElementById('stat-total-users').innerText = total;
                document.getElementById('stat-pro-users').innerText = pro;
                document.getElementById('stat-revenue').innerText = '₹' + (pro * 499);
            });

            db.ref('payment_requests').on('value', snap => {
                const reqs = snap.val();
                let html = '';
                if(reqs) {
                    Object.keys(reqs).forEach(uid => {
                        const r = reqs[uid];
                        if(r.status === 'pending_verification' || r.status === 'paid_by_user') {
                            const date = new Date(r.timestamp).toLocaleString();
                            html += `<tr><td><strong>${r.name}</strong><br><small>${r.email}</small></td><td><strong style="color:green;">₹${r.amount}</strong></td><td>${date}</td><td><span class="badge badge-pending">PENDING</span></td><td><button class="btn btn-success" style="padding:6px 12px; font-size:0.85rem;" onclick="approvePayment('${uid}')"><i class="fas fa-check"></i> Approve Pro</button></td></tr>`;
                        }
                    });
                }
                document.getElementById('payments-table-body').innerHTML = html || '<tr><td colspan="5" class="text-center" style="color:#888; padding:30px;">No Pending Payment Requests</td></tr>';
            });
        }

        // --- 5. EDIT USER & APPROVALS ---
        function openEditModal(uid, currentStatus) {
            document.getElementById('edit-uid').value = uid;
            document.getElementById('edit-status').value = currentStatus;
            document.getElementById('edit-user-modal').classList.add('active');
        }

        function saveUserPlan() {
            const uid = document.getElementById('edit-uid').value;
            const status = document.getElementById('edit-status').value;
            const expiryPlan = document.getElementById('edit-expiry').value;

            let expText = "Lifetime";
            if(expiryPlan === '1year') {
                let d = new Date(); d.setFullYear(d.getFullYear() + 1);
                expText = d.toLocaleDateString();
            } else if(expiryPlan === '1month') {
                let d = new Date(); d.setMonth(d.getMonth() + 1);
                expText = d.toLocaleDateString();
            }

            db.ref('users/' + uid).update({
                subscriptionStatus: status,
                subscriptionDate: new Date().toISOString(),
                subscriptionExpiry: status === 'pro' ? expText : ''
            }).then(() => closeModal('edit-user-modal'));
        }

        function approvePayment(uid) {
            if(confirm("Verify payment received? This will unlock Pro features for the user immediately.")) {
                db.ref('payment_requests/' + uid).update({ status: 'approved' });
                db.ref('users/' + uid).update({ subscriptionStatus: 'pro', subscriptionDate: new Date().toISOString(), subscriptionExpiry: 'Lifetime' });
            }
        }

        // =========================================================
        // 🚀 6. DYNAMIC CMS ENGINE (Dropdown & CSS Injector)
        // =========================================================
        let currentCategory = 'fonts';

        function loadFeatures() {
            currentCategory = document.getElementById('feature-category').value;
            db.ref('app_config/' + currentCategory).on('value', snap => {
                const data = snap.val() || {};
                renderFeatureTable(data);
            });
        }

        function renderFeatureTable(data) {
            const thead = document.getElementById('feature-table-head');
            const tbody = document.getElementById('feature-table-body');
            
            let cols =['Item ID', 'Display Name', 'Custom Config / Data', 'Actions'];
            if(currentCategory === 'textures') cols =['Texture ID', 'Name', 'Base Preview', 'Actions'];
            
            thead.innerHTML = cols.map(c => `<th>${c}</th>`).join('');
            
            let html = '';
            Object.keys(data).forEach(key => {
                const item = data[key];
                let row = '';
                
                if(currentCategory === 'fonts') {
                    row = `<td>${key}</td><td><span style="font-family:${item.value || key}; font-size:1.1rem;">${item.name}</span></td><td><small style="color:#888;">${item.url || 'Default System Font'}</small></td>`;
                } else if(currentCategory === 'textures') {
                    row = `<td>${key}</td><td>${item.name}</td><td><div style="width:25px;height:25px;background:${item.bg || '#ccc'};border-radius:4px;border:1px solid #ccc;"></div></td>`;
                } else if(currentCategory === 'themes') {
                    row = `<td>${key}</td><td>${item.name}</td><td><small style="color:var(--primary); font-family:monospace;">${JSON.stringify(item.config || {}).substring(0, 45)}...</small></td>`;
                } else if(currentCategory === 'particles') {
                    row = `<td>${key}</td><td>${item.name}</td><td><span style="font-size:1.2rem;">${(item.emojis ||[]).join(' ')}</span></td>`;
                } else {
                    // CSS Categories
                    row = `<td>${key}</td><td>${item.name}</td><td><small style="color:#666; font-family:monospace;">${(item.css || '').substring(0, 45)}...</small></td>`;
                }
                
                html += `<tr>${row}<td><button class="btn btn-danger" style="padding:6px 12px; font-size:0.8rem;" onclick="deleteFeature('${key}')"><i class="fas fa-trash"></i> Remove</button></td></tr>`;
            });
            tbody.innerHTML = html || `<tr><td colspan="${cols.length}" class="text-center" style="color:#888; padding:30px;">No options added by Admin yet. Click "+ Add New Option" to start.</td></tr>`;
        }

        function openAddFeatureModal() {
            const fieldsDiv = document.getElementById('dynamic-form-fields');
            const helper = document.getElementById('feature-helper');
            document.getElementById('feature-modal-title').innerText = currentCategory;
            
            let html = '';
            
            if (currentCategory === 'fonts') {
                helper.innerHTML = "<b>How to add:</b> Go to Google Fonts, select a font, copy the `@import` url, and copy the CSS `font-family` name.";
                html = `
                    <label>Font ID / Value</label>
                    <input type="text" id="f-id" placeholder="e.g. 'Roboto', sans-serif" required>
                    <label>Display Name in Dropdown</label>
                    <input type="text" id="f-name" placeholder="e.g. Roboto Clean" required>
                    <label>Google Font @import URL (Optional)</label>
                    <input type="text" id="f-url" placeholder="e.g. @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');">
                `;
            } 
            else if (currentCategory === 'textures') {
                helper.innerHTML = "<b>How to add:</b> Provide a direct URL to a seamless texture pattern image. Set a base background color.";
                html = `
                    <label>Texture ID (Unique)</label>
                    <input type="text" id="f-id" placeholder="e.g. vintage-paper" required>
                    <label>Display Name in Dropdown</label>
                    <input type="text" id="f-name" placeholder="e.g. Vintage Parchment" required>
                    <label>Texture Image URL</label>
                    <input type="url" id="f-url" placeholder="https://www.transparenttextures.com/patterns/old-wall.png" required>
                    
                    <div style="display:flex; gap:15px; margin-top:15px;">
                        <div style="flex:1;">
                            <label style="margin-top:0;">Base Bg Color</label>
                            <input type="color" id="f-bg" value="#f4e8d2" required style="height:45px; padding:0;">
                        </div>
                        <div style="flex:1;">
                            <label style="margin-top:0;">Default Text Color</label>
                            <input type="color" id="f-color" value="#000000" required style="height:45px; padding:0;">
                        </div>
                    </div>
                `;
            } 
            else if (currentCategory === 'themes') {
                helper.innerHTML = "<b>How to add:</b> Write a strict JSON object mapping settings like cType, cBg, font, pFrame, etc.";
                html = `
                    <label>Theme ID (Unique)</label>
                    <input type="text" id="f-id" placeholder="e.g. neon-cyber" required>
                    <label>Display Name in Dropdown</label>
                    <input type="text" id="f-name" placeholder="e.g. 🦾 Neon Cyberpunk" required>
                    <label>Configuration (Strict JSON format)</label>
                    <textarea id="f-config" rows="6" placeholder='{\n  "cType": "solid",\n  "cBg": "#000000",\n  "font": "Arial",\n  "color": "#00ffff",\n  "pFrame": "neon"\n}' required></textarea>
                `;
            } 
            else if (currentCategory === 'particles') {
                helper.innerHTML = "<b>How to add:</b> Provide comma separated emojis that will fall down the screen.";
                html = `
                    <label>Particle ID (Unique)</label>
                    <input type="text" id="f-id" placeholder="e.g. autumn-leaves" required>
                    <label>Display Name in Dropdown</label>
                    <input type="text" id="f-name" placeholder="e.g. 🍁 Autumn Leaves" required>
                    <label>Emojis List (Comma separated)</label>
                    <input type="text" id="f-emojis" placeholder="e.g. 🍁,🍂,🍃" required>
                `;
            } 
            else {
                // CSS Categories: layouts, scrapbook, guestbook, frames, patterns
                let prefix = '', help = '';
                if(currentCategory === 'frames') { prefix = '.frame-[ID] {\n  padding: 10px;\n  border: 5px solid red;\n}'; help = "Write CSS for the photo frame wrapper."; }
                if(currentCategory === 'layouts') { prefix = '.layout-[ID] .page-photo-area {\n  height: 40%;\n}\n.layout-[ID] .page-memory-area {\n  height: 60%;\n}'; help = "Write CSS to divide page-photo-area and page-memory-area."; }
                if(currentCategory === 'scrapbook') { prefix = '.sb-[ID]::before {\n  content: "";\n  position: absolute;\n  /* Your tape/pin CSS */\n}'; help = "Write absolute positioned CSS for tape, pin, or clip."; }
                if(currentCategory === 'guestbook') { prefix = '.gb-theme-[ID] {\n  background: #fff;\n}\n.gb-theme-[ID] .sticky-note {\n  background: yellow;\n}'; help = "Write CSS for the board background and sticky notes."; }
                if(currentCategory === 'patterns') { prefix = 'background-color: ${bg};\nbackground-image: repeating-linear-gradient(45deg, transparent, ${c1} 10px);'; help = "Write the background CSS. Use ${c1} and ${bg} for dynamic user colors."; }

                helper.innerHTML = `<b>How to add:</b> ${help} Use raw CSS syntax. It will be injected directly into the user's browser.`;
                html = `
                    <label>Option ID</label>
                    <input type="text" id="f-id" placeholder="e.g. new-style-1" required>
                    <label>Display Name in Dropdown</label>
                    <input type="text" id="f-name" placeholder="e.g. ✨ New Style Design" required>
                    <label>Custom CSS Rules</label>
                    <textarea id="f-css" rows="8" placeholder="Example:\n${prefix}" required></textarea>
                `;
            }
            
            fieldsDiv.innerHTML = html;
            document.getElementById('add-feature-modal').classList.add('active');
        }

        function saveNewFeature() {
            const id = document.getElementById('f-id').value.trim().replace(/\s+/g, '-').toLowerCase(); 
            const name = document.getElementById('f-name').value.trim();
            let payload = { name: name };
            
            if (currentCategory === 'fonts') {
                payload.value = document.getElementById('f-id').value.trim(); 
                payload.url = document.getElementById('f-url').value.trim();
            } else if (currentCategory === 'textures') {
                payload.bg = document.getElementById('f-bg').value;
                payload.url = document.getElementById('f-url').value;
                payload.color = document.getElementById('f-color').value;
            } else if (currentCategory === 'themes') {
                try {
                    payload.config = JSON.parse(document.getElementById('f-config').value);
                } catch(e) {
                    alert("Invalid JSON format in Config Box! Please write proper JSON.\n\nMake sure keys and string values are wrapped in double quotes (\").");
                    return;
                }
            } else if (currentCategory === 'particles') {
                payload.emojis = document.getElementById('f-emojis').value.split(',').map(e => e.trim());
            } else {
                payload.css = document.getElementById('f-css').value;
            }
            
            // Push to Firebase
            db.ref('app_config/' + currentCategory + '/' + id).set(payload).then(() => {
                closeModal('add-feature-modal');
            });
        }

        function deleteFeature(key) {
            if(confirm("Are you sure you want to permanently delete this option? It will be removed from all users' dropdowns immediately.")) {
                db.ref('app_config/' + currentCategory + '/' + key).remove();
            }
        }
    </script>
</body>
</html>