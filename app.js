// ==========================================
// CATEGORIES CONFIG
// ==========================================
const CATEGORIES = {
    wedding:  { name:'Wedding',         emoji:'💍', color:'#e84393', g1:'#f093fb', g2:'#f5576c', theme:'wedding-elegance', title:"Our Wedding Day",       subtitle:"A Day to Remember Forever",    author:"The Happy Couple" },
    baby:     { name:'Baby Milestones', emoji:'👶', color:'#fd79a8', g1:'#fbc2eb', g2:'#a6c1ee', theme:'pastel-dream',      title:"Baby's First Year",     subtitle:"Every Little Moment Counts",   author:"Proud Parents"    },
    birthday: { name:'Birthday',        emoji:'🎂', color:'#e17055', g1:'#f7971e', g2:'#ffd200', theme:'neon-party',        title:"Happy Birthday!",        subtitle:"Another Year of Memories",     author:"With Love"        },
    travel:   { name:'Travel Diary',    emoji:'✈️', color:'#0984e3', g1:'#0ba360', g2:'#3cba92', theme:'tropical',          title:"My Travel Diary",        subtitle:"Adventures Around the World",  author:"The Explorer"     },
    school:   { name:'School/College',  emoji:'🎓', color:'#6c5ce7', g1:'#5f27cd', g2:'#341f97', theme:'royal-purple',      title:"School Memories",        subtitle:"The Best Days of Our Lives",   author:"Class of 2025"    },
    family:   { name:'Family Album',    emoji:'👨‍👩‍👧', color:'#d35400', g1:'#f46b45', g2:'#eea849', theme:'autumn-leaves',    title:"Our Family Album",       subtitle:"Moments That Matter Most",     author:"Our Family"       },
    festival: { name:'Festival Special',emoji:'🪔', color:'#f1c40f', g1:'#f1c40f', g2:'#e67e22', theme:'gold-luxury',       title:"Festival Memories",      subtitle:"Joy, Light & Togetherness",    author:"Our Family"       },
    business: { name:'Business Portfolio',emoji:'💼',color:'#2d3436',g1:'#2c3e50', g2:'#4ca1af', theme:'corporate-clean',   title:"My Portfolio",           subtitle:"Work That Speaks for Itself",  author:"Professional"     }
};

// ==========================================
// 30 PATTERNS, FONTS, TEXTURES, THEMES
// ==========================================
const PATTERNS = [
    {id:'stripes-v',name:'Vertical Stripes'},{id:'stripes-h',name:'Horizontal Stripes'},{id:'stripes-d1',name:'Diagonal Right'},{id:'stripes-d2',name:'Diagonal Left'},{id:'stripes-thick',name:'Thick Stripes'},{id:'grid-s',name:'Small Grid'},{id:'grid-m',name:'Medium Grid'},{id:'grid-thick',name:'Thick Grid'},{id:'dots-s',name:'Small Dots'},{id:'dots-m',name:'Medium Dots'},{id:'dots-l',name:'Large Dots'},{id:'checker-s',name:'Small Checker'},{id:'checker-m',name:'Medium Checker'},{id:'zigzag',name:'ZigZag Waves'},{id:'bricks',name:'Classic Bricks'},{id:'half-rombes',name:'Half Rhombus'},{id:'cross',name:'Cross Grid'},{id:'stairs',name:'Stairs'},{id:'weave',name:'Basket Weave'},{id:'tartan',name:'Tartan Plaid'},{id:'blueprint',name:'Blueprint'},{id:'carbon',name:'Carbon Fiber'},{id:'diagonal-checker',name:'Diagonal Checker'},{id:'polka-alt',name:'Offset Dots'},{id:'triangles',name:'Triangles'},{id:'rhombus',name:'Rhombus Grid'},{id:'isometric',name:'Isometric'},{id:'waves',name:'Ocean Waves'},{id:'lined-paper',name:'Lined Paper'},{id:'honeycomb',name:'Honeycomb'}
];

const FONTS = ["Roboto","Arial","'Times New Roman'","'Montserrat'","'Oswald'","'Dancing Script'","'Pacifico'","'Abril Fatface'","'Anton'","'Bebas Neue'","'Cinzel'","'Dosis'","'Fira Sans'","'Inconsolata'","'Josefin Sans'","'Lato'","'Lobster'","'Lora'","'Merriweather'","'Noto Serif'","'Nunito'","'Open Sans'","'Playfair Display'","'Poppins'","'PT Serif'","'Quicksand'","'Raleway'","'Righteous'","'Titillium Web'","'Ubuntu'"];

const TEXTURES = {
    'leather':{'bg':'#2c1a12','url':'https://www.transparenttextures.com/patterns/leather.png','color':'#ffffff'},
    'vintage':{'bg':'#f4e8d2','url':'https://www.transparenttextures.com/patterns/old-wall.png','color':'#2c1a12'},
    'kraft':{'bg':'#d0b48f','url':'https://www.transparenttextures.com/patterns/cardboard-flat.png','color':'#333333'},
    'crumpled':{'bg':'#ffffff','url':'https://www.transparenttextures.com/patterns/crumpled-paper.png','color':'#000000'},
    'wood-grain':{'bg':'#8B5A2B','url':'https://www.transparenttextures.com/patterns/wood-pattern.png','color':'#ffffff'},
    'marble':{'bg':'#fcfcfc','url':'https://www.transparenttextures.com/patterns/white-marble.png','color':'#2d3436'},
    'concrete':{'bg':'#95a5a6','url':'https://www.transparenttextures.com/patterns/concrete-wall.png','color':'#ffffff'},
    'canvas':{'bg':'#e8dece','url':'https://www.transparenttextures.com/patterns/stucco.png','color':'#2c3e50'},
    'silk':{'bg':'#ffb8b8','url':'https://www.transparenttextures.com/patterns/woven.png','color':'#833471'},
    'denim':{'bg':'#2980b9','url':'https://www.transparenttextures.com/patterns/denim.png','color':'#ffffff'},
    'carbon-fiber':{'bg':'#2c3e50','url':'https://www.transparenttextures.com/patterns/carbon-fibre.png','color':'#00ffff'},
    'brushed-metal':{'bg':'#bdc3c7','url':'https://www.transparenttextures.com/patterns/brushed-alum.png','color':'#2c3e50'},
    'brick-wall':{'bg':'#c0392b','url':'https://www.transparenttextures.com/patterns/brick-wall.png','color':'#f1c40f'},
    'sandpaper':{'bg':'#e67e22','url':'https://www.transparenttextures.com/patterns/sandpaper.png','color':'#ffffff'},
    'water-ripples':{'bg':'#3498db','url':'https://www.transparenttextures.com/patterns/pool-table.png','color':'#ffffff'},
    'frost-glass':{'bg':'#ecf0f1','url':'https://www.transparenttextures.com/patterns/dust.png','color':'#2980b9'},
    'cork-board':{'bg':'#d2b48c','url':'https://www.transparenttextures.com/patterns/cork-board.png','color':'#3e2723'},
    'woven-basket':{'bg':'#f39c12','url':'https://www.transparenttextures.com/patterns/woven.png','color':'#ffffff'},
    'chalkboard':{'bg':'#2c3e50','url':'https://www.transparenttextures.com/patterns/dark-matter.png','color':'#ffffff'},
    'linen':{'bg':'#ecf0f1','url':'https://www.transparenttextures.com/patterns/linen.png','color':'#7f8c8d'},
    'rusty-metal':{'bg':'#8e44ad','url':'https://www.transparenttextures.com/patterns/purty-wood.png','color':'#f1c40f'},
    'stucco':{'bg':'#f1c40f','url':'https://www.transparenttextures.com/patterns/stucco.png','color':'#c0392b'},
    'granite':{'bg':'#34495e','url':'https://www.transparenttextures.com/patterns/rocky-wall.png','color':'#ecf0f1'},
    'watercolor':{'bg':'#ff9ff3','url':'https://www.transparenttextures.com/patterns/watercolor.png','color':'#5f27cd'},
    'gold-foil':{'bg':'#f1c40f','url':'https://www.transparenttextures.com/patterns/cubes.png','color':'#2c3e50'},
    'silver-foil':{'bg':'#bdc3c7','url':'https://www.transparenttextures.com/patterns/cubes.png','color':'#2c3e50'},
    'holo-foil':{'bg':'#fd79a8','url':'https://www.transparenttextures.com/patterns/diamonds.png','color':'#ffffff'},
    'velvet':{'bg':'#833471','url':'https://www.transparenttextures.com/patterns/fabric-plaid.png','color':'#f1c40f'},
    'snake-skin':{'bg':'#27ae60','url':'https://www.transparenttextures.com/patterns/snake-skin.png','color':'#ffffff'},
    'dragon-scale':{'bg':'#c0392b','url':'https://www.transparenttextures.com/patterns/squares-in-squares.png','color':'#f1c40f'}
};

const THEMES = {
    'romantic':{cType:'gradient',cg1:'#ff9a9e',cg2:'#fad0c4',pType:'solid',pBg:'#fff0f5',pPart:'hearts',pFrame:'polaroid',font:"'Dancing Script'",color:'#d63031'},
    'vintage':{cType:'texture',cTex:'leather',pType:'texture',pTex:'vintage',pPart:'none',pFrame:'film',font:"'Playfair Display'",color:'#2c1a12'},
    'dark-academia':{cType:'texture',cTex:'leather',pType:'texture',pTex:'chalkboard',pPart:'none',pFrame:'torn',font:"'Cinzel'",color:'#d4af37'},
    'cyberpunk':{cType:'gradient',cg1:'#000000',cg2:'#111111',pType:'texture',pTex:'carbon-fiber',pPart:'stars',pFrame:'neon',font:"'Righteous'",color:'#00ffff'},
    'minimalist':{cType:'solid',cBg:'#ffffff',pType:'solid',pBg:'#f8f9fa',pPart:'none',pFrame:'none',font:"'Montserrat'",color:'#2d3436'},
    'neon-party':{cType:'gradient',cg1:'#ff00ff',cg2:'#00ffff',pType:'solid',pBg:'#111111',pPart:'confetti',pFrame:'neon',font:"'Anton'",color:'#ff00ff'},
    'wedding-elegance':{cType:'texture',cTex:'silk',pType:'texture',pTex:'marble',pPart:'snow',pFrame:'museum',font:"'Lora'",color:'#833471'},
    'classic-noir':{cType:'solid',cBg:'#000000',pType:'solid',pBg:'#eeeeee',pPart:'none',pFrame:'film',font:"'Abril Fatface'",color:'#000000'},
    'retro-80s':{cType:'pattern',cPat:'checker-m',pType:'pattern',pPat:'zigzag',pPart:'none',pFrame:'polaroid',font:"'Bebas Neue'",color:'#e74c3c'},
    'sci-fi':{cType:'texture',cTex:'brushed-metal',pType:'texture',pTex:'carbon-fiber',pPart:'stars',pFrame:'none',font:"'Inconsolata'",color:'#00ff00'},
    'nature-bliss':{cType:'gradient',cg1:'#badc58',cg2:'#6ab04c',pType:'solid',pBg:'#f6e58d',pPart:'none',pFrame:'floral',font:"'Quicksand'",color:'#22a6b3'},
    'ocean-breeze':{cType:'texture',cTex:'water-ripples',pType:'gradient',pg1:'#82ccdd',pg2:'#60a3bc',pPart:'snow',pFrame:'watercolor',font:"'Ubuntu'",color:'#0a3d62'},
    'sunset-glow':{cType:'gradient',cg1:'#ff7e5f',cg2:'#feb47b',pType:'solid',pBg:'#fff3e0',pPart:'none',pFrame:'polaroid',font:"'Lobster'",color:'#d35400'},
    'pastel-dream':{cType:'gradient',cg1:'#a1c4fd',cg2:'#c2e9fb',pType:'solid',pBg:'#fdfbfb',pPart:'hearts',pFrame:'brush',font:"'Nunito'",color:'#b71540'},
    'gold-luxury':{cType:'texture',cTex:'gold-foil',pType:'texture',pTex:'silk',pPart:'stars',pFrame:'gold',font:"'PT Serif'",color:'#2c3e50'},
    'gothic':{cType:'texture',cTex:'velvet',pType:'texture',pTex:'granite',pPart:'none',pFrame:'burnt',font:"'Cinzel'",color:'#c0392b'},
    'space-galaxy':{cType:'gradient',cg1:'#0f2027',cg2:'#203a43',pType:'texture',pTex:'carbon-fiber',pPart:'stars',pFrame:'none',font:"'Titillium Web'",color:'#f1c40f'},
    'autumn-leaves':{cType:'texture',cTex:'wood-grain',pType:'solid',pBg:'#ffebd2',pPart:'none',pFrame:'wood',font:"'Merriweather'",color:'#d35400'},
    'winter-chill':{cType:'texture',cTex:'frost-glass',pType:'gradient',pg1:'#e0c3fc',pg2:'#8ec5fc',pPart:'snow',pFrame:'frosted',font:"'Raleway'",color:'#2980b9'},
    'spring-blossom':{cType:'solid',cBg:'#ff9a9e',pType:'solid',pBg:'#fdfbfb',pPart:'confetti',pFrame:'floral',font:"'Pacifico'",color:'#e84393'},
    'royal-purple':{cType:'gradient',cg1:'#5f27cd',cg2:'#341f97',pType:'texture',pTex:'velvet',pPart:'stars',pFrame:'gold',font:"'Josefin Sans'",color:'#f1c40f'},
    'steampunk':{cType:'texture',cTex:'rusty-metal',pType:'texture',pTex:'kraft',pPart:'none',pFrame:'stitched',font:"'Oswald'",color:'#d35400'},
    'boho-chic':{cType:'texture',cTex:'woven-basket',pType:'solid',pBg:'#f8efd4',pPart:'none',pFrame:'stamp',font:"'Lora'",color:'#cc8e35'},
    'comic-book':{cType:'pattern',cPat:'dots-m',pType:'pattern',pPat:'dots-s',pPart:'none',pFrame:'none',font:"'Bebas Neue'",color:'#e74c3c'},
    'polaroid-memories':{cType:'solid',cBg:'#bdc3c7',pType:'texture',pTex:'cork-board',pPart:'none',pFrame:'polaroid',font:"'Roboto'",color:'#2c3e50'},
    'corporate-clean':{cType:'solid',cBg:'#34495e',pType:'solid',pBg:'#ffffff',pPart:'none',pFrame:'museum',font:"'Roboto'",color:'#2980b9'},
    'art-deco':{cType:'pattern',cPat:'rhombus',pType:'texture',pTex:'marble',pPart:'stars',pFrame:'gold',font:"'Playfair Display'",color:'#f1c40f'},
    'holographic':{cType:'texture',cTex:'holo-foil',pType:'gradient',pg1:'#fbc2eb',pg2:'#a6c1ee',pPart:'stars',pFrame:'frosted',font:"'Poppins'",color:'#8e44ad'},
    'grunge':{cType:'texture',cTex:'concrete',pType:'texture',pTex:'crumpled',pPart:'none',pFrame:'burnt',font:"'Anton'",color:'#c0392b'},
    'tropical':{cType:'gradient',cg1:'#0ba360',cg2:'#3cba92',pType:'texture',pTex:'water-ripples',pPart:'none',pFrame:'wood',font:"'Ubuntu'",color:'#0a3d62'}
};

const defStyle = () => ({
    font:'Roboto', fill:'solid', color:'#ffffff', g1:'#ff0000', g2:'#0000ff',
    strokeW:0, strokeC:'#000000', shadowB:0, shadowC:'#000000',
    borderS:'none', borderW:0, borderC:'#000000',
    align:'center', weight:'700', style:'normal', spacing:0, marginTop:0, marginBottom:0
});

// ==========================================
// MAIN APP OBJECT
// ==========================================

// =============================================
// VILAYAMEMBOOK — Custom Modal System
// No browser confirm/alert/prompt ever!
// =============================================
const VMB = {
    show({ title='VilayaMemBook', message='', type='info', buttons=[], input=null, onConfirm=null, onCancel=null }) {
        // Remove existing
        const old = document.getElementById('vmb-modal');
        if (old) old.remove();

        const icons = { info:'💡', success:'✅', danger:'🗑️', warning:'⚠️', question:'❓', lock:'🔒', star:'⭐' };
        const colors = {
            info:    'linear-gradient(135deg,#6c5ce7,#a29bfe)',
            success: 'linear-gradient(135deg,#00b894,#00cec9)',
            danger:  'linear-gradient(135deg,#ff4757,#ff6b81)',
            warning: 'linear-gradient(135deg,#f39c12,#f1c40f)',
            question:'linear-gradient(135deg,#6c5ce7,#fd79a8)',
            lock:    'linear-gradient(135deg,#2d3436,#636e72)',
            star:    'linear-gradient(135deg,#f1c40f,#e17055)'
        };
        const icon  = icons[type]  || icons.info;
        const color = colors[type] || colors.info;

        const defaultBtns = buttons.length ? buttons : [
            {label:'OK', style:'primary', value:true},
            {label:'Cancel', style:'ghost', value:false}
        ];

        const btnHtml = defaultBtns.map(b => `
            <button class="vmb-btn vmb-btn-${b.style||'primary'}" data-val="${b.value}">
                ${b.icon?`<i class="fas ${b.icon}"></i>`:''}${b.label}
            </button>`).join('');

        const inputHtml = input
            ? `<input class="vmb-input" type="${input.type||'text'}" placeholder="${input.placeholder||''}" id="vmb-input-field">`
            : '';

        const overlay = document.createElement('div');
        overlay.id = 'vmb-modal';
        overlay.className = 'vmb-overlay';
        overlay.innerHTML = `
            <div class="vmb-card">
                <div class="vmb-icon-wrap" style="background:${color}">
                    <span class="vmb-icon">${icon}</span>
                    <div class="vmb-shimmer"></div>
                </div>
                <div class="vmb-app-name">VilayaMemBook</div>
                <div class="vmb-title">${title}</div>
                <div class="vmb-message">${message}</div>
                ${inputHtml}
                <div class="vmb-btns">${btnHtml}</div>
            </div>`;

        document.body.appendChild(overlay);
        requestAnimationFrame(() => overlay.classList.add('vmb-visible'));

        // Bind buttons
        overlay.querySelectorAll('.vmb-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const val = btn.dataset.val;
                const parsed = val === 'true' ? true : val === 'false' ? false : val;
                overlay.classList.remove('vmb-visible');
                setTimeout(() => overlay.remove(), 300);
                if (parsed === true && onConfirm) {
                    const inp = document.getElementById('vmb-input-field');
                    onConfirm(inp ? inp.value : true);
                } else if (parsed !== true && onCancel) {
                    onCancel();
                }
            });
        });
    },

    confirm(title, message, onConfirm, type='question') {
        VMB.show({ title, message, type,
            buttons:[
                {label:'Confirm', style:'primary', value:true, icon:'fa-check'},
                {label:'Cancel',  style:'ghost',   value:false}
            ],
            onConfirm
        });
    },

    delete(title, message, onConfirm) {
        VMB.show({ title, message, type:'danger',
            buttons:[
                {label:'Delete', style:'danger', value:true, icon:'fa-trash'},
                {label:'Cancel', style:'ghost',  value:false}
            ],
            onConfirm
        });
    },

    prompt(title, message, placeholder, onConfirm, type='lock') {
        VMB.show({ title, message, type,
            input:{ placeholder },
            buttons:[
                {label:'Submit', style:'primary', value:true, icon:'fa-check'},
                {label:'Cancel', style:'ghost',   value:false}
            ],
            onConfirm
        });
    },

    alert(title, message, type='info') {
        VMB.show({ title, message, type,
            buttons:[{label:'OK', style:'primary', value:true}]
        });
    }
};

// Module-level tab state (survives navigateTo resets)
let _activeDashTab = 'created';

const app = {
    state: {
        books: [], currentBookId: null, currentPageIndex: -1, viewerPageIndex: 0,
        filterCategory: 'all'
    },
    _isFlipping: false,
    _autoPlayInterval: null,
    _mapInstance: null,
    _mapMarkers: [],

    DYNAMIC_THEMES: {...THEMES},
    DYNAMIC_TEXTURES: {...TEXTURES},
    DYNAMIC_PATTERNS: {},
    DYNAMIC_PARTICLES: {
        'hearts':['❤️','💖','💕'], 'snow':['❄️','🌨️','🤍'],
        'confetti':['🎉','🎊','🎈'], 'stars':['✨','⭐','🌟']
    },
    defaultHTML: {},

    init() {
        this.initTheme();
        this.cacheDefaultHTML();
        this.populateSelects();
        this.loadData();
        this.listenToAdminConfig();
    },

    // Load shared book from cloud (WhatsApp link)
    async loadSharedBookFromCloud(bookId) {
        const loader = document.getElementById('global-loader');
        if (loader) loader.classList.remove('hidden');
        try {
            const snap = await firebase.database().ref('public_books/' + bookId).once('value');
            if (snap.exists()) {
                const book = snap.val();
                this.state.books = [book];
                this.state.currentBookId = book.id;
                if (loader) loader.classList.add('hidden');
                this.openViewer(true);
            } else {
                VMB.alert("Book Not Found", "This memory book doesn't exist or the link is broken.", "warning");
                window.location.href = window.location.pathname;
            }
        } catch (error) {
            VMB.alert("Error", "Error loading the memory book. Please try again.", "danger");
            window.location.href = window.location.pathname;
        }
    },

    cacheDefaultHTML() {
        const g = (id) => document.getElementById(id);
        this.defaultHTML = {
            fonts: FONTS.map(f=>`<option value="${f}" style="font-family:${f}">${f.replace(/'/g,'')}</option>`).join(''),
            themes: g('smart-theme-select')?.innerHTML || '',
            textures: g('cover-bg-texture')?.innerHTML || '',
            patterns: g('cover-bg-pattern')?.innerHTML || '',
            guestbook: g('cover-guestbook-design')?.innerHTML || '',
            layouts: g('page-layout')?.innerHTML || '',
            scrapbook: g('page-scrapbook')?.innerHTML || '',
            frames: g('page-img-frame')?.innerHTML || '',
            particles: g('page-particles')?.innerHTML || ''
        };
    },

    listenToAdminConfig() {
        if (typeof firebase === 'undefined' || !firebase.database) return;
        let styleTag = document.getElementById('admin-injected-styles');
        if (!styleTag) {
            styleTag = document.createElement('style');
            styleTag.id = 'admin-injected-styles';
            document.head.appendChild(styleTag);
        }
        firebase.database().ref('app_config').on('value', snap => {
            if (!snap.exists()) return;
            const config = snap.val();
            let customCSS = '';
            if (config.fonts) {
                let html = this.defaultHTML.fonts;
                Object.keys(config.fonts).forEach(k => {
                    const f = config.fonts[k];
                    html += `<option value="${f.value}" style="font-family:${f.value}">✨ ${f.name}</option>`;
                    if (f.url) customCSS += `\n${f.url}\n`;
                });
                document.querySelectorAll('.s-font-master').forEach(el => el.innerHTML = html);
            }
            if (config.themes) {
                this.DYNAMIC_THEMES = {...THEMES};
                let html = this.defaultHTML.themes;
                Object.keys(config.themes).forEach(k => {
                    this.DYNAMIC_THEMES[k] = config.themes[k].config;
                    html += `<option value="${k}">✨ ${config.themes[k].name}</option>`;
                });
                const el = document.getElementById('smart-theme-select');
                if (el) el.innerHTML = html;
            }
            if (config.textures) {
                this.DYNAMIC_TEXTURES = {...TEXTURES};
                let html = this.defaultHTML.textures;
                Object.keys(config.textures).forEach(k => {
                    const t = config.textures[k];
                    this.DYNAMIC_TEXTURES[k] = {bg: t.bg, url: t.url, color: t.color};
                    html += `<option value="${k}">✨ ${t.name}</option>`;
                });
                ['cover-bg-texture','page-bg-texture'].forEach(id => { const el=document.getElementById(id); if(el) el.innerHTML=html; });
            }
            if (config.particles) {
                this.DYNAMIC_PARTICLES = {'hearts':['❤️','💖','💕'],'snow':['❄️','🌨️','🤍'],'confetti':['🎉','🎊','🎈'],'stars':['✨','⭐','🌟']};
                let html = this.defaultHTML.particles;
                Object.keys(config.particles).forEach(k => {
                    this.DYNAMIC_PARTICLES[k] = config.particles[k].emojis || ['✨'];
                    html += `<option value="${k}">✨ ${config.particles[k].name}</option>`;
                });
                const el = document.getElementById('page-particles'); if(el) el.innerHTML = html;
            }
            ['frames','layouts','scrapbook','guestbook','patterns'].forEach(cat => {
                if (!config[cat]) return;
                let html = this.defaultHTML[cat] || '';
                Object.keys(config[cat]).forEach(k => {
                    const item = config[cat][k];
                    html += `<option value="${k}">✨ ${item.name}</option>`;
                    if (item.css) { customCSS += `\n${item.css}\n`; }
                    if (cat === 'patterns') this.DYNAMIC_PATTERNS[k] = item.css;
                });
                const idMap = {guestbook:'cover-guestbook-design',layouts:'page-layout',scrapbook:'page-scrapbook',frames:'page-img-frame'};
                if (cat === 'patterns') {
                    ['cover-bg-pattern','page-bg-pattern'].forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML=html; });
                } else if (idMap[cat]) {
                    const el=document.getElementById(idMap[cat]); if(el) el.innerHTML=html;
                }
            });
            styleTag.innerHTML = customCSS;
        });
    },

    populateSelects() {
        const patternHTML = PATTERNS.map(p=>`<option value="${p.id}">${p.name}</option>`).join('');
        ['cover-bg-pattern','page-bg-pattern'].forEach(id=>{ const el=document.getElementById(id); if(el) el.innerHTML=patternHTML; });
        const fontHTML = FONTS.map(f=>`<option value="${f}" style="font-family:${f}">${f.replace(/'/g,'')}</option>`).join('');
        document.querySelectorAll('.s-font-master').forEach(el => el.innerHTML = fontHTML);
    },

    vibrate() { if (navigator.vibrate) navigator.vibrate(40); },

    initTheme() {
        const isDark = localStorage.getItem('memoryflip_darkmode') === 'true';
        if (isDark) document.body.classList.add('dark-theme');
        // Sync toggle after DOM is ready
        setTimeout(() => {
            const toggle = document.getElementById('theme-toggle');
            if (toggle) toggle.checked = isDark;
            const icon = document.getElementById('theme-icon-wrap');
            if (icon) icon.innerText = isDark ? '🌙' : '☀️';
            const title = document.querySelector('.psc-title');
            if (title) title.innerText = isDark ? 'Night Mode' : 'Day Mode';
        }, 500);
    },

    toggleTheme() {
        const isDark = document.body.classList.toggle('dark-theme');
        localStorage.setItem('memoryflip_darkmode', isDark);
        this._syncThemeUI(isDark);
    },

    toggleThemeProfile(isDark) {
        if (isDark) document.body.classList.add('dark-theme');
        else document.body.classList.remove('dark-theme');
        localStorage.setItem('memoryflip_darkmode', isDark);
        this._syncThemeUI(isDark);
    },

    _syncThemeUI(isDark) {
        // Sync toggle checkbox
        const toggle = document.getElementById('theme-toggle');
        if (toggle) toggle.checked = isDark;
        // Sync icon
        const icon = document.getElementById('theme-icon-wrap');
        if (icon) icon.innerText = isDark ? '🌙' : '☀️';
        // Sync title
        const title = icon?.nextElementSibling?.querySelector('.psc-title');
        if (title) title.innerText = isDark ? 'Night Mode' : 'Day Mode';
        this.showToast(isDark ? "🌙 Night Mode" : "☀️ Day Mode", isDark ? "fa-moon" : "fa-sun");
    },

    showToast(message, icon = "fa-info-circle") {
        const container = document.getElementById('toast-container');
        if (!container) return;
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas ${icon} text-primary"></i> <span>${message}</span>`;
        container.appendChild(toast);
        setTimeout(() => { if(container.contains(toast)) toast.remove(); }, 3500);
    },

    navigateTo(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        const target = document.getElementById(`view-${viewId}`);
        if (!target) return;
        target.classList.add('active');
        if (viewId === 'editor' || viewId === 'viewer') document.body.classList.add('hide-bottom-nav');
        else document.body.classList.remove('hide-bottom-nav');
        document.querySelectorAll('.nav-item').forEach(btn => btn.classList.remove('active'));
        const activeNav = document.querySelector(`.nav-item[data-view="${viewId}"]`);
        if (activeNav) activeNav.classList.add('active');
        if (viewId === 'dashboard') {
            // Sync tab button UI
            const tab = _activeDashTab;
            document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
            const tabEl = document.getElementById('tab-' + tab);
            if (tabEl) tabEl.classList.add('active');
            this.renderDashboard();
        }
    },

    loadDashboard() {
        this.renderDashboard();
    },

    // ==========================================
    // DASHBOARD — 2 TABS: Created | Imported
    // ==========================================
    switchDashTab(tab) {
        _activeDashTab = tab;
        document.querySelectorAll('.dash-tab').forEach(t => t.classList.remove('active'));
        const el = document.getElementById('tab-' + tab);
        if (el) el.classList.add('active');
        this.renderDashboard();
    },

    renderDashboard() {
        const grid = document.getElementById('books-grid');
        if (!grid) return;
        grid.innerHTML = '';

        const tab = _activeDashTab;
        const books = tab === 'imported'
            ? this.state.books.filter(b => b._imported === true)
            : this.state.books.filter(b => b._imported !== true);

        if (books.length === 0) {
            const msg = tab === 'imported'
                ? `<p>No imported books yet.<br>Tap the <i class="fas fa-file-import"></i> button to import a .mfb file.</p>`
                : `<p>No books yet.<br>Tap <b>+</b> to create your first memory book!</p>`;
            grid.innerHTML = `<div class="empty-state"><div class="empty-icon">${tab==='imported'?'📥':'📖'}</div>${msg}</div>`;
            return;
        }

        // Group by category
        const grouped = {};
        books.forEach(book => {
            const cat = book.category || 'family';
            if (!grouped[cat]) grouped[cat] = [];
            grouped[cat].push(book);
        });

        Object.keys(grouped).forEach(catKey => {
            const cat = CATEGORIES[catKey] || {name: catKey, emoji: '📖'};
            const catBooks = grouped[catKey];

            // Category header
            const hdr = document.createElement('div');
            hdr.className = 'cat-section-header';
            hdr.innerHTML = `<span>${cat.emoji} ${cat.name}</span><span class="cat-count-badge">${catBooks.length}</span>`;
            grid.appendChild(hdr);

            catBooks.forEach(book => {
                // Use cached style for speed, recompute only if needed
                let bgStyle = book._cachedThumb;
                if (!bgStyle) {
                    if (book.cover.bgType === 'image' && book.cover.image)
                        bgStyle = `background-image:url(${book.cover.image});background-size:cover;background-position:center;`;
                    else if (book.cover.bgType === 'gradient')
                        bgStyle = `background:linear-gradient(135deg,${book.cover.bgGradient.c1},${book.cover.bgGradient.c2});`;
                    else if (book.cover.bgType === 'solid')
                        bgStyle = `background-color:${book.cover.bgColor};`;
                    else
                        bgStyle = this.getBgCSS(book.cover.bgType, book.cover.bgColor,
                            book.cover.bgGradient.c1, book.cover.bgGradient.c2,
                            book.cover.bgPattern, book.cover.bgGradType, book.cover.bgTexture);
                    book._cachedThumb = bgStyle;
                }

                const card = document.createElement('div');
                card.className = 'book-row-card';
                card.innerHTML = `
                    <div class="book-row-thumb" style="${bgStyle}"
                         onclick="app.vibrate();app.previewFromDashboard('${book.id}')">
                        ${book.cover.bgType==='image'?`<div class="thumb-overlay" style="opacity:${book.cover.overlayOpacity/10}"></div>`:''}
                        <div class="book-spine-thin"></div>
                        <div class="book-row-title-mini">${book.cover.title||''}</div>
                    </div>
                    <div class="book-row-info">
                        <div class="book-row-name">${book.cover.title||'Untitled Book'}</div>
                        <div class="book-row-meta">
                            ${book.pages.length} page${book.pages.length!==1?'s':''}
                            ${book.cover.password?'<i class="fas fa-lock" style="color:var(--primary);margin-left:4px;"></i>':''}
                            ${book.cover.livingPhoto?'<span class="mini-tag">🎭</span>':''}
                            ${(book.pages?.filter(p=>p.weather).length)?`<span class="mini-tag">🌦️</span>`:''}
                        </div>
                        <div class="book-row-actions">
                            <button class="bra-edit" onclick="app.vibrate();app.openEditor('${book.id}')">
                                <i class="fas fa-pen"></i> Edit
                            </button>
                            <button class="bra-view" onclick="app.vibrate();app.previewFromDashboard('${book.id}')">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <button class="bra-del" onclick="app.vibrate();app.deleteBook('${book.id}')">
                                <i class="fas fa-trash"></i>
                            </button>
                        </div>
                    </div>`;
                grid.appendChild(card);
            });
        });
    },

    renderCategoryFilterTabs() {},
    setCatFilter() {},
    init3DCards() {},


    loadData() {
        const saved = localStorage.getItem('memoryflip_data');
        if (!saved) return;
        try {
            let data = JSON.parse(saved);
            data = data.filter(b => b && b.id && b.cover && b.pages);
            data.forEach(book => this.migrateBook(book));
            this.state.books = data;
        } catch(e) { console.error("LoadData error:", e); }
    },

    migrateBook(book) {
        const c = book.cover;
        if (!c.bgType) c.bgType = 'gradient';
        if (!c.bgColor) c.bgColor = '#6c5ce7';
        if (!c.bgGradient) c.bgGradient = {c1:'#6c5ce7', c2:'#a29bfe'};
        if (!c.bgPattern) c.bgPattern = 'stripes-v';
        if (!c.bgGradType) c.bgGradType = 'linear-135';
        if (!c.bgTexture) c.bgTexture = 'vintage';
        if (c.overlayOpacity === undefined) c.overlayOpacity = 4;
        if (!c.styles) c.styles = {title:defStyle(), subtitle:defStyle(), author:defStyle()};
        if (c.password === undefined) c.password = '';
        if (c.watermark === undefined) c.watermark = 'true';
        if (c.guestbook === undefined) c.guestbook = 'false';
        if (!c.guestbookDesign) c.guestbookDesign = 'cork-yellow';
        if (!c.customWatermark) c.customWatermark = {text:'My Memories',font:'Roboto',pos:'bottom-right',fill:'solid',c1:'#ffffff',c2:'#aaaaaa'};
        if (!c.livingPhoto) c.livingPhoto = false;
        if (!book.category) book.category = 'family';
        if (!book.capsuleLetters) book.capsuleLetters = [];
        ['title','subtitle','author'].forEach(k => {
            if (!c.styles[k]) c.styles[k] = defStyle();
            if (c.styles[k].marginTop === undefined) { c.styles[k].marginTop = 0; c.styles[k].marginBottom = 0; c.styles[k].align = 'center'; c.styles[k].weight = '700'; c.styles[k].style = 'normal'; c.styles[k].spacing = 0; }
        });
        book.pages.forEach(p => {
            if (!p.imageFit) p.imageFit = 'cover';
            if (!p.filters) p.filters = {bright:100,contrast:100,gray:0,sepia:0};
            if (p.imageRadius === undefined) p.imageRadius = 0;
            if (p.imageShadow === undefined) p.imageShadow = 0;
            if (!p.frame) p.frame = 'none';
            if (!p.particles) p.particles = 'none';
            if (!p.layout) p.layout = 'top-img';
            if (!p.scrapbook) p.scrapbook = 'none';
            if (!p.unlockDate) p.unlockDate = '';
            if (!p.bgType) p.bgType = 'solid';
            if (!p.bgColor) p.bgColor = '#ffffff';
            if (!p.bgTexture) p.bgTexture = 'vintage';
            if (!p.bgGradient) p.bgGradient = {c1:'#ffffff',c2:'#f0f0f0'};
            if (!p.bgPattern) p.bgPattern = 'stripes-v';
            if (!p.bgGradType) p.bgGradType = 'linear-135';
            if (!p.styles) p.styles = {title:defStyle(),desc:defStyle(),meta:defStyle()};
            if (!p.weather) p.weather = null;
            ['title','desc','meta'].forEach(k => {
                if (!p.styles[k]) p.styles[k] = defStyle();
                if (p.styles[k].marginTop === undefined) { p.styles[k].marginTop=0; p.styles[k].marginBottom=0; p.styles[k].align='center'; p.styles[k].weight='700'; p.styles[k].style='normal'; p.styles[k].spacing=0; }
            });
        });
    },

    saveData() {
        // Clear thumbnail cache so edited books re-render correctly
        if (this.state.currentBookId) {
            const b = this.getCurrentBook();
            if (b) delete b._cachedThumb;
        }
        localStorage.setItem('memoryflip_data', JSON.stringify(this.state.books));
        const status = document.getElementById('save-status');
        if (status) { status.innerText = "Saving..."; setTimeout(() => { status.innerText = "Saved ✓"; }, 800); }
    },

    async forceSave() {
        this.saveData();
        await this.syncToCloud();
        this.showToast("Saved to Cloud!", "fa-cloud-upload-alt");
    },

    async syncToCloud() {
        if (!auth.currentUser || !this.state.currentBookId) return;
        const book = this.getCurrentBook();
        if (!book || typeof firebase === 'undefined') return;
        try {
            const updates = {};
            updates[`user_books/${auth.currentUser.uid}/${book.id}`] = book;
            updates[`public_books/${book.id}`] = book;
            await firebase.database().ref().update(updates);
        } catch(e) { console.log("Cloud sync error", e); }
    },

    async syncAllBooksToCloud() {
        if (!auth.currentUser || typeof firebase === 'undefined') return;
        try {
            const updates = {};
            this.state.books.forEach(b => {
                updates[`user_books/${auth.currentUser.uid}/${b.id}`] = b;
                updates[`public_books/${b.id}`] = b;
            });
            await firebase.database().ref().update(updates);
        } catch(e) { console.log("Sync all error", e); }
    },

    // ==========================================
    // CATEGORY PICKER
    // ==========================================
    openCategoryPicker() {
        const modal = document.getElementById('category-picker-modal');
        if (modal) modal.classList.add('active');
    },



    previewFromDashboard(id) {
        this.state.currentBookId = id;
        this.openViewer();
    },

    // ==========================================
    // CREATE NEW BOOK (with category)
    // ==========================================
    async createNewBook(categoryId) {
        // Free plan: max 1 created book (not counting imported)
        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            const createdCount = this.state.books.filter(b => !b._imported).length;
            if (createdCount >= 1) {
                this.showToast("Free Plan: Max 1 Created Book. Upgrade to PRO!", "fa-crown");
                this.closeModal('category-picker-modal');
                this.navigateTo('subscription');
                return;
            }
        }
        this.closeModal('category-picker-modal');

        const cat = CATEGORIES[categoryId] || CATEGORIES['family'];
        const newBook = {
            id: 'book_' + Date.now(),
            category: categoryId || 'family',
            _imported: false,
            capsuleLetters: [],
            cover: {
                title: cat.title, subtitle: cat.subtitle, author: cat.author,
                image: '', bgType: 'gradient', bgColor: cat.color,
                bgTexture: 'vintage',
                bgGradient: {c1: cat.g1, c2: cat.g2},
                bgPattern: 'stripes-v', bgGradType: 'linear-135', overlayOpacity: 4,
                styles: {title: defStyle(), subtitle: defStyle(), author: defStyle()},
                password: '', watermark: 'true', guestbook: 'false',
                guestbookDesign: 'cork-yellow', livingPhoto: false,
                customWatermark: {text: cat.title, font: 'Roboto', pos: 'bottom-right', fill: 'solid', c1: '#ffffff', c2: '#aaaaaa'}
            },
            pages: []
        };
        ['title','subtitle','author'].forEach(k => { newBook.cover.styles[k].color = '#ffffff'; });

        this.state.books.push(newBook);
        this.state.currentBookId = newBook.id;
        this.saveData();
        // Open editor immediately — sync in background
        this.openEditor(newBook.id);
        // Apply theme
        if (cat.theme && this.DYNAMIC_THEMES[cat.theme]) {
            this.applySmartTheme(cat.theme);
        }
        this.showToast(`${cat.emoji} ${cat.name} Book Created!`, "fa-book");
        this.syncToCloud(); // background, no await
    },

    // ==========================================
    // IMPORT / EXPORT .mfb
    // ==========================================
    importBook(event) {
        const file = event.target.files[0];
        if (!file) return;
        if (!file.name.toLowerCase().endsWith('.mfb') && !file.name.toLowerCase().endsWith('.json')) {
            this.showToast("Please select a valid .mfb file!", "fa-times-circle");
            event.target.value = ''; return;
        }
        const reader = new FileReader();
        reader.onload = async (e) => {
            try {
                let importedBook = JSON.parse(e.target.result);
                if (!importedBook.cover || !Array.isArray(importedBook.pages)) {
                    this.showToast("Invalid .mfb file format!", "fa-times-circle"); return;
                }
                importedBook.id = 'book_' + Date.now();
                importedBook._imported = true; // mark as imported
                if (!importedBook.category) importedBook.category = 'family';
                if (!importedBook.capsuleLetters) importedBook.capsuleLetters = [];
                this.migrateBook(importedBook);

                if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
                    const createdCount = this.state.books.filter(b => !b._imported).length;
                    if (createdCount >= 1) {
                        this.showToast("Free Plan: Max 1 Book. Upgrade to PRO!", "fa-crown");
                        this.navigateTo('subscription'); return;
                    }
                    if (importedBook.pages.length > 3) {
                        this.showToast("Book has >3 pages. Upgrade to PRO!", "fa-crown");
                        this.navigateTo('subscription'); return;
                    }
                }

                this.state.books.push(importedBook);
                this.state.currentBookId = importedBook.id;
                this.saveData();
                await this.syncToCloud();
                // Switch to Imported tab to show it
                _activeDashTab = 'imported';
                this.navigateTo('dashboard');
                this.showToast("✅ Book Imported!", "fa-check-circle");
            } catch (error) {
                this.showToast("Invalid .mfb file! Could not parse.", "fa-times-circle");
            }
            event.target.value = '';
        };
        reader.readAsText(file);
    },

    exportProject() {
        const book = this.getCurrentBook();
        if (!book) return;
        try {
            const json = JSON.stringify(book);
            const blob = new Blob([json], {type: 'application/json'});
            const filename = (book.cover.title || 'memoryflip').replace(/[^a-z0-9\-_]/gi,'_') + '.mfb';

            // Try modern File System Access API first (Android Chrome)
            if (window.showSaveFilePicker) {
                window.showSaveFilePicker({
                    suggestedName: filename,
                    types: [{ description: 'MemoryFlip Book', accept: {'application/json': ['.mfb']} }]
                }).then(async handle => {
                    const w = await handle.createWritable();
                    await w.write(blob); await w.close();
                    this.showToast("Book saved to device!", "fa-check-circle");
                }).catch(() => this._fallbackDownload(blob, filename));
            } else {
                this._fallbackDownload(blob, filename);
            }
            this.closeModal('share-modal');
        } catch(e) {
            this.showToast("Export failed!", "fa-times");
        }
    },

    _fallbackDownload(blob, filename) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url; a.download = filename;
        document.body.appendChild(a); a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        this.showToast("Book exported to Downloads!", "fa-download");
    },

    async deleteBook(id) {
        const book = this.state.books.find(b => b.id === id);
        if (!book) return;
        VMB.delete(
            'Delete Book',
            `Are you sure you want to delete <b>"${book.cover.title || 'this book'}"</b>? This cannot be undone.`,
            async () => {
                this.state.books = this.state.books.filter(b => b.id !== id);
                localStorage.removeItem('gb_' + id);
                this.saveData();
                if (auth.currentUser && typeof firebase !== 'undefined') {
                    try {
                        await firebase.database().ref(`user_books/${auth.currentUser.uid}/${id}`).remove();
                        await firebase.database().ref(`public_books/${id}`).remove();
                    } catch(e) {}
                }
                this.renderDashboard();
                this.showToast("Book deleted", "fa-trash");
            }
        );
    },

    // ==========================================
    // EDITOR
    // ==========================================
    openEditor(id) {
        this.state.currentBookId = id;
        this.navigateTo('editor');
        this.switchEditorTab('cover');
    },

    getCurrentBook() {
        return this.state.books.find(b => b.id === this.state.currentBookId);
    },

    switchEditorTab(tab) {
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        const tabBtn = document.querySelector(`.tab[onclick*="${tab}"]`);
        if (tabBtn) tabBtn.classList.add('active');
        const tabContent = document.getElementById(`tab-${tab}`);
        if (tabContent) tabContent.classList.add('active');

        if (tab === 'cover') {
            this.state.currentPageIndex = -1;
            const pef = document.getElementById('page-editor-fields');
            if(pef) pef.classList.add('hidden');
            const book = this.getCurrentBook();
            const s = (id, val) => { const el=document.getElementById(id); if(el) el.value=val; };
            s('cover-title', book.cover.title);
            s('cover-subtitle', book.cover.subtitle);
            s('cover-author', book.cover.author);
            s('cover-bg-type', book.cover.bgType);
            s('cover-bg-texture', book.cover.bgTexture);
            s('cover-bg-pattern', book.cover.bgPattern);
            s('cover-bg-grad-type', book.cover.bgGradType);
            s('cover-bg-color', book.cover.bgColor);
            s('cover-bg-grad1', book.cover.bgGradient.c1);
            s('cover-bg-grad2', book.cover.bgGradient.c2);
            s('cover-overlay-op', book.cover.overlayOpacity);
            s('cover-password', book.cover.password || '');
            s('cover-watermark', book.cover.watermark || 'true');
            s('cover-guestbook', book.cover.guestbook || 'false');
            s('cover-guestbook-design', book.cover.guestbookDesign || 'cork-yellow');
            s('cw-text', book.cover.customWatermark.text);
            s('cw-font', book.cover.customWatermark.font);
            s('cw-position', book.cover.customWatermark.pos);
            s('cw-fill', book.cover.customWatermark.fill);
            s('cw-color1', book.cover.customWatermark.c1);
            s('cw-color2', book.cover.customWatermark.c2);
            // Living photo status
            const lps = document.getElementById('living-photo-status');
            if(lps) { lps.innerText = book.cover.livingPhoto ? '✅ Living Photo ON' : 'Off'; lps.style.color = book.cover.livingPhoto ? 'var(--success)' : 'var(--text-light)'; }
            this.toggleBgInputs('cover');
            this.loadStyleInputs('cover');
        } else {
            this.renderPagesList();
        }
        this.renderPreview();
    },

    toggleBgInputs(ctx) {
        const type = document.getElementById(`${ctx}-bg-type`)?.value;
        if (!type) return;
        const toggle = (id, show) => { const el=document.getElementById(id); if(el) el.classList.toggle('hidden', !show); };
        if (ctx === 'cover') toggle('cover-bg-image-box', type === 'image');
        toggle(`${ctx}-bg-pattern-box`, type === 'pattern');
        toggle(`${ctx}-bg-texture-box`, type === 'texture');
        toggle(`${ctx}-bg-grad-type-box`, type === 'gradient');
        toggle(`${ctx}-bg-color-box`, type === 'solid');
        toggle(`${ctx}-bg-gradient-box`, type === 'gradient' || type === 'pattern');
        if (ctx === 'cover') {
            toggle('custom-watermark-box', document.getElementById('cover-watermark')?.value === 'custom');
            toggle('guestbook-design-box', document.getElementById('cover-guestbook')?.value === 'true');
            toggle('cw-grad-box', document.getElementById('cw-fill')?.value === 'gradient');
        }
    },

    updateBookData() {
        const book = this.getCurrentBook();
        if (!book) return;
        const g = id => document.getElementById(id)?.value;
        book.cover.title = g('cover-title') || '';
        book.cover.subtitle = g('cover-subtitle') || '';
        book.cover.author = g('cover-author') || '';
        book.cover.bgType = g('cover-bg-type') || 'gradient';
        book.cover.bgTexture = g('cover-bg-texture') || 'vintage';
        book.cover.bgPattern = g('cover-bg-pattern') || 'stripes-v';
        book.cover.bgGradType = g('cover-bg-grad-type') || 'linear-135';
        book.cover.bgColor = g('cover-bg-color') || '#6c5ce7';
        book.cover.bgGradient.c1 = g('cover-bg-grad1') || '#6c5ce7';
        book.cover.bgGradient.c2 = g('cover-bg-grad2') || '#a29bfe';
        book.cover.overlayOpacity = g('cover-overlay-op') || 4;
        book.cover.password = g('cover-password') || '';
        book.cover.watermark = g('cover-watermark') || 'true';
        book.cover.guestbook = g('cover-guestbook') || 'false';
        book.cover.guestbookDesign = g('cover-guestbook-design') || 'cork-yellow';
        book.cover.customWatermark.text = g('cw-text') || '';
        book.cover.customWatermark.font = g('cw-font') || 'Roboto';
        book.cover.customWatermark.pos = g('cw-position') || 'bottom-right';
        book.cover.customWatermark.fill = g('cw-fill') || 'solid';
        book.cover.customWatermark.c1 = g('cw-color1') || '#ffffff';
        book.cover.customWatermark.c2 = g('cw-color2') || '#aaaaaa';
        this.toggleBgInputs('cover');
        this.saveData();
        this.renderPreview();
    },

    updatePageBackground() {
        if (this.state.currentPageIndex === -1) return;
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        const g = id => document.getElementById(id)?.value;
        page.bgType = g('page-bg-type') || 'solid';
        page.bgTexture = g('page-bg-texture') || 'vintage';
        page.bgPattern = g('page-bg-pattern') || 'stripes-v';
        page.bgGradType = g('page-bg-grad-type') || 'linear-135';
        page.bgColor = g('page-bg-color') || '#ffffff';
        page.bgGradient.c1 = g('page-bg-grad1') || '#ffffff';
        page.bgGradient.c2 = g('page-bg-grad2') || '#f0f0f0';
        this.toggleBgInputs('page');
        this.saveData();
        this.renderPreview();
    },

    updatePageFilters() {
        if (this.state.currentPageIndex === -1) return;
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        const g = id => document.getElementById(id)?.value;
        page.filters.bright = g('f-bright') || 100;
        page.filters.contrast = g('f-contrast') || 100;
        page.filters.gray = g('f-gray') || 0;
        page.filters.sepia = g('f-sepia') || 0;
        page.imageRadius = g('f-radius') || 0;
        page.imageShadow = g('f-shadow') || 0;
        this.saveData();
        this.renderPreview();
    },

    updatePageData() {
        if (this.state.currentPageIndex === -1) return;
        const page = this.getCurrentBook().pages[this.state.currentPageIndex];
        const g = id => document.getElementById(id)?.value;
        page.title = g('page-title') || '';
        page.date = g('page-date') || '';
        page.place = g('page-place') || '';
        page.desc = g('page-desc') || '';
        page.mood = g('page-mood') || 'Happy 😊';
        page.imageFit = g('page-img-fit') || 'cover';
        page.frame = g('page-img-frame') || 'none';
        page.particles = g('page-particles') || 'none';
        page.layout = g('page-layout') || 'top-img';
        page.scrapbook = g('page-scrapbook') || 'none';
        page.unlockDate = g('page-unlock-date') || '';
        // Restore weather display
        const wd = document.getElementById('weather-display');
        if (wd && page.weather) { wd.innerHTML = `${page.weather.emoji} ${page.weather.desc} · ${Math.round(page.weather.temp)}°C`; wd.style.display='block'; }
        else if (wd) wd.style.display='none';
        this.saveData();
        this.renderPagesList();
        this.renderPreview();
    },

    applySmartTheme(theme) {
        const book = this.getCurrentBook();
        const conf = this.DYNAMIC_THEMES[theme] || this.DYNAMIC_THEMES['minimalist'];
        book.cover.bgType = conf.cType;
        if (conf.cTex) book.cover.bgTexture = conf.cTex;
        if (conf.cBg) book.cover.bgColor = conf.cBg;
        if (conf.cg1) { book.cover.bgGradient.c1 = conf.cg1; book.cover.bgGradient.c2 = conf.cg2; }
        if (conf.cPat) book.cover.bgPattern = conf.cPat;
        ['title','subtitle','author'].forEach(k => {
            book.cover.styles[k].font = conf.font;
            book.cover.styles[k].fill = 'solid';
            book.cover.styles[k].color = (conf.cType==='solid' && conf.cBg==='#ffffff') ? '#2d3436' : '#ffffff';
        });
        book.pages.forEach(p => {
            p.bgType = conf.pType;
            if (conf.pBg) p.bgColor = conf.pBg;
            if (conf.pTex) p.bgTexture = conf.pTex;
            if (conf.pg1) { p.bgGradient.c1 = conf.pg1; p.bgGradient.c2 = conf.pg2; }
            if (conf.pPat) p.bgPattern = conf.pPat;
            p.particles = conf.pPart; p.frame = conf.pFrame;
            ['title','desc','meta'].forEach(k => { p.styles[k].font = conf.font; p.styles[k].fill = 'solid'; p.styles[k].color = conf.color; });
        });
        this.saveData();
        this.switchEditorTab('cover');
    },

    loadStyleInputs(ctx) {
        const book = this.getCurrentBook();
        const tabEl = ctx === 'cover' ? document.getElementById('tab-cover') : document.getElementById('page-editor-fields');
        if (!tabEl) return;
        const targetEl = document.getElementById(`style-target-${ctx}`);
        const targetKey = targetEl?.value || 'title';
        const repKey = targetKey === 'all' ? 'title' : targetKey;
        let stylesObj = ctx === 'cover' ? book.cover.styles[repKey] : (this.state.currentPageIndex >= 0 ? book.pages[this.state.currentPageIndex].styles[repKey] : null);
        if (!stylesObj) return;
        const qs = (sel) => tabEl.querySelector(sel);
        const sv = (sel,val) => { const el=qs(sel); if(el) el.value=val; };
        sv('.s-font', stylesObj.font); sv('.s-align', stylesObj.align); sv('.s-weight', stylesObj.weight);
        sv('.s-style', stylesObj.style); sv('.s-spacing', stylesObj.spacing);
        sv('.s-margin-top', stylesObj.marginTop); sv('.s-margin-bottom', stylesObj.marginBottom);
        sv('.s-fill', stylesObj.fill); sv('.s-color', stylesObj.color);
        sv('.s-g1', stylesObj.g1); sv('.s-g2', stylesObj.g2);
        sv('.s-stroke-w', stylesObj.strokeW); sv('.s-stroke-c', stylesObj.strokeC);
        sv('.s-shadow-blur', stylesObj.shadowB); sv('.s-shadow-c', stylesObj.shadowC);
        sv('.s-border-s', stylesObj.borderS); sv('.s-border-w', stylesObj.borderW); sv('.s-border-c', stylesObj.borderC);
        const cb = qs('.s-color-box'); if(cb) cb.classList.toggle('hidden', stylesObj.fill==='gradient');
        const gb = qs('.s-gradient-box'); if(gb) gb.classList.toggle('hidden', stylesObj.fill==='solid');
    },

    updateStyleData(ctx) {
        const book = this.getCurrentBook();
        const tabEl = ctx === 'cover' ? document.getElementById('tab-cover') : document.getElementById('page-editor-fields');
        if (!tabEl) return;
        const targetEl = document.getElementById(`style-target-${ctx}`);
        const targetKey = targetEl?.value || 'all';
        const keys = targetKey === 'all' ? (ctx==='cover'?['title','subtitle','author']:['title','desc','meta']) : [targetKey];
        const qs = sel => tabEl.querySelector(sel);
        const gv = sel => { const el=qs(sel); return el?el.value:''; };
        keys.forEach(key => {
            let so = ctx==='cover' ? book.cover.styles[key] : book.pages[this.state.currentPageIndex].styles[key];
            if (!so) return;
            so.font=gv('.s-font'); so.align=gv('.s-align'); so.weight=gv('.s-weight'); so.style=gv('.s-style');
            so.spacing=gv('.s-spacing'); so.marginTop=gv('.s-margin-top'); so.marginBottom=gv('.s-margin-bottom');
            so.fill=gv('.s-fill'); so.color=gv('.s-color'); so.g1=gv('.s-g1'); so.g2=gv('.s-g2');
            so.strokeW=gv('.s-stroke-w'); so.strokeC=gv('.s-stroke-c');
            so.shadowB=gv('.s-shadow-blur'); so.shadowC=gv('.s-shadow-c');
            so.borderS=gv('.s-border-s'); so.borderW=gv('.s-border-w'); so.borderC=gv('.s-border-c');
        });
        const cb=qs('.s-color-box'); if(cb) cb.classList.toggle('hidden', gv('.s-fill')==='gradient');
        const gb=qs('.s-gradient-box'); if(gb) gb.classList.toggle('hidden', gv('.s-fill')==='solid');
        this.saveData(); this.renderPreview();
    },

    applyStyles(ctx) {
        this.updateStyleData(ctx);
        const det = document.getElementById(`${ctx}-style-details`);
        if (det) det.removeAttribute('open');
        this.forceSave();
    },

    buildCSS(so) {
        if (!so) return '';
        let css = `font-family:${so.font};text-align:${so.align};font-weight:${so.weight};font-style:${so.style};letter-spacing:${so.spacing}px;margin-top:${so.marginTop}px;margin-bottom:${so.marginBottom}px;paint-order:stroke fill;`;
        if (so.fill==='gradient') css += `background:linear-gradient(45deg,${so.g1},${so.g2});-webkit-background-clip:text;-webkit-text-fill-color:transparent;`;
        else css += `color:${so.color};`;
        if (so.strokeW > 0) css += `-webkit-text-stroke:${so.strokeW}px ${so.strokeC};`;
        if (so.shadowB > 0) css += `filter:drop-shadow(2px 2px ${so.shadowB}px ${so.shadowC});`;
        if (so.borderS !== 'none' && so.borderW > 0) css += `border:${so.borderW}px ${so.borderS} ${so.borderC};padding:10px;border-radius:8px;background:rgba(128,128,128,0.1);backdrop-filter:blur(2px);`;
        return css;
    },

    getBgCSS(type, color, g1, g2, pattern, gradType, texture) {
        if (type === 'solid') return `background-color:${color};`;
        if (type === 'gradient') {
            const gt = gradType || 'linear-135';
            const gradMap = {'linear-135':`linear-gradient(135deg,${g1},${g2})`,'linear-to-bottom':`linear-gradient(to bottom,${g1},${g2})`,'linear-to-top':`linear-gradient(to top,${g1},${g2})`,'linear-to-right':`linear-gradient(to right,${g1},${g2})`,'linear-to-left':`linear-gradient(to left,${g1},${g2})`,'linear-45':`linear-gradient(45deg,${g1},${g2})`,'radial-center':`radial-gradient(circle at center,${g1},${g2})`,'radial-tl':`radial-gradient(circle at top left,${g1},${g2})`,'radial-tr':`radial-gradient(circle at top right,${g1},${g2})`,'radial-bl':`radial-gradient(circle at bottom left,${g1},${g2})`,'radial-br':`radial-gradient(circle at bottom right,${g1},${g2})`,'conic-center':`conic-gradient(from 0deg at center,${g1},${g2},${g1})`};
            return `background:${gradMap[gt]||gradMap['linear-135']};`;
        }
        if (type === 'texture') {
            const tex = this.DYNAMIC_TEXTURES[texture] || this.DYNAMIC_TEXTURES['vintage'];
            return `background-color:${tex.bg};background-image:url('${tex.url}');color:${tex.color};`;
        }
        if (type === 'pattern') {
            if (this.DYNAMIC_PATTERNS?.[pattern]) {
                return this.DYNAMIC_PATTERNS[pattern].replace(/\$\{c1\}/g,g1).replace(/\$\{bg\}/g,g2);
            }
            const patMap = {
                'stripes-v':`background-color:${g2};background-image:repeating-linear-gradient(90deg,transparent,transparent 10px,${g1} 10px,${g1} 20px);`,
                'dots-m':`background-color:${g2};background-image:radial-gradient(${g1} 20%,transparent 21%),radial-gradient(${g1} 20%,transparent 21%);background-size:30px 30px;background-position:0 0,15px 15px;`,
                'checker-m':`background-color:${g2};background-image:conic-gradient(${g1} 90deg,transparent 90deg 180deg,${g1} 180deg 270deg,transparent 270deg);background-size:40px 40px;`
            };
            return patMap[pattern] || `background-color:${g2};background-image:repeating-linear-gradient(45deg,transparent,transparent 10px,${g1} 10px,${g1} 20px);`;
        }
        return '';
    },

    // ==========================================
    // PAGES MANAGEMENT
    // ==========================================
    renderPagesList() {
        const book = this.getCurrentBook();
        const list = document.getElementById('pages-list');
        const cnt = document.getElementById('page-count');
        if (!list || !book) return;
        if (cnt) cnt.innerText = book.pages.length;
        list.innerHTML = '';
        book.pages.forEach((page, index) => {
            const item = document.createElement('div');
            item.className = `page-item ${this.state.currentPageIndex === index ? 'active' : ''}`;
            const weatherIcon = page.weather ? page.weather.emoji : '';
            item.innerHTML = `
                <span class="page-item-title" onclick="app.vibrate();app.selectPage(${index})">
                    ${index+1}. ${page.title||'Untitled Memory'} ${weatherIcon}
                </span>
                <div class="page-actions">
                    <button class="btn-move" onclick="app.vibrate();app.movePage(${index},-1)" title="Move Up"><i class="fas fa-chevron-up"></i></button>
                    <button class="btn-move" onclick="app.vibrate();app.movePage(${index},1)" title="Move Down"><i class="fas fa-chevron-down"></i></button>
                    <button class="btn-edit" onclick="app.vibrate();app.selectPage(${index})" title="Edit"><i class="fas fa-pen"></i></button>
                    <button class="btn-reset" onclick="app.vibrate();app.resetPage(${index})" title="Reset"><i class="fas fa-undo"></i></button>
                    <button class="btn-delete" onclick="app.vibrate();app.deletePage(${index})" title="Delete"><i class="fas fa-trash"></i></button>
                </div>`;
            list.appendChild(item);
        });
    },

    movePage(index, dir) {
        const book = this.getCurrentBook();
        if (index+dir < 0 || index+dir >= book.pages.length) return;
        [book.pages[index], book.pages[index+dir]] = [book.pages[index+dir], book.pages[index]];
        if (this.state.currentPageIndex===index) this.state.currentPageIndex+=dir;
        else if (this.state.currentPageIndex===index+dir) this.state.currentPageIndex-=dir;
        this.saveData(); this.renderPagesList(); this.renderPreview();
    },

    async addMemoryPage() {
        const book = this.getCurrentBook();
        if (auth.userData && auth.userData.subscriptionStatus !== 'pro') {
            if (book.pages.length >= 3) {
                this.showToast("Free Plan: Max 3 Pages. Upgrade to PRO!", "fa-crown");
                this.navigateTo('subscription'); return;
            }
        }
        book.pages.push({
            title:'', date:'', place:'', desc:'', mood:'Happy 😊',
            image:'', imageFit:'cover', frame:'none', particles:'none',
            layout:'top-img', scrapbook:'none', unlockDate:'',
            bgType:'solid', bgColor:'#ffffff', bgTexture:'vintage',
            bgGradient:{c1:'#ffffff',c2:'#f0f0f0'}, bgPattern:'stripes-v', bgGradType:'linear-135',
            filters:{bright:100,contrast:100,gray:0,sepia:0},
            imageRadius:0, imageShadow:0,
            styles:{title:defStyle(),desc:defStyle(),meta:defStyle()},
            weather: null
        });
        this.saveData();
        await this.syncToCloud();
        this.selectPage(book.pages.length - 1);
        this.showToast("New Page Added!", "fa-file-medical");
    },

    selectPage(index) {
        this.state.currentPageIndex = index;
        const page = this.getCurrentBook().pages[index];
        const pef = document.getElementById('page-editor-fields');
        if(pef) pef.classList.remove('hidden');
        const s = (id, val) => { const el=document.getElementById(id); if(el) el.value=val; };
        const spn = document.getElementById('current-page-num'); if(spn) spn.innerText=index+1;
        s('page-title', page.title); s('page-date', page.date);
        s('page-place', page.place); s('page-desc', page.desc);
        s('page-mood', page.mood); s('page-img-fit', page.imageFit);
        s('page-img-frame', page.frame||'none'); s('page-particles', page.particles||'none');
        s('page-layout', page.layout||'top-img'); s('page-scrapbook', page.scrapbook||'none');
        s('page-unlock-date', page.unlockDate||'');
        s('page-bg-type', page.bgType); s('page-bg-texture', page.bgTexture);
        s('page-bg-pattern', page.bgPattern); s('page-bg-grad-type', page.bgGradType);
        s('page-bg-color', page.bgColor);
        s('page-bg-grad1', page.bgGradient.c1); s('page-bg-grad2', page.bgGradient.c2);
        s('f-bright', page.filters.bright); s('f-contrast', page.filters.contrast);
        s('f-gray', page.filters.gray); s('f-sepia', page.filters.sepia);
        s('f-radius', page.imageRadius); s('f-shadow', page.imageShadow);
        // Weather display
        const wd = document.getElementById('weather-display');
        if (wd && page.weather) { wd.innerHTML=`${page.weather.emoji} ${page.weather.desc} · ${Math.round(page.weather.temp)}°C`; wd.style.display='block'; }
        else if(wd) wd.style.display='none';
        this.toggleBgInputs('page');
        this.loadStyleInputs('page');
        this.renderPagesList();
        this.renderPreview();
    },

    resetPage(index) {
        VMB.confirm('Reset Page', 'Reset this page to default design?<br><small style="color:var(--success)">✅ Your text and photo will be safe.</small>', () => {
            const p = this.getCurrentBook().pages[index];
            p.bgType='solid'; p.bgColor='#ffffff'; p.bgTexture='vintage';
            p.bgGradient={c1:'#ffffff',c2:'#f0f0f0'}; p.bgPattern='stripes-v'; p.bgGradType='linear-135';
            p.filters={bright:100,contrast:100,gray:0,sepia:0}; p.imageRadius=0; p.imageShadow=0;
            p.frame='none'; p.particles='none'; p.layout='top-img'; p.scrapbook='none';
            p.styles={title:defStyle(),desc:defStyle(),meta:defStyle()};
            this.saveData();
            if (this.state.currentPageIndex===index) this.selectPage(index);
            else this.renderPreview();
            this.showToast("Page Reset", "fa-undo");
        }
    },

    async deletePage(index) {
        if (index<0 || index>=this.getCurrentBook().pages.length) return;
        VMB.delete("Delete Page", "Delete this memory page permanently?<br><small>This cannot be undone.</small>", async () => {
            const book = this.getCurrentBook();
            book.pages.splice(index, 1);
            if (this.state.currentPageIndex===index) { this.state.currentPageIndex=-1; this.switchEditorTab('pages'); }
            else if (this.state.currentPageIndex>index) this.state.currentPageIndex--;
            this.saveData(); await this.syncToCloud();
            this.renderPagesList(); this.renderPreview();
            this.showToast("Page Deleted", "fa-trash");
        }
    },

    // ==========================================
    // RENDER
    // ==========================================
    getCustomWatermarkHTML(book) {
        if (book.cover.watermark !== 'custom') return '';
        const cw = book.cover.customWatermark;
        if (!cw.text) return '';
        let style = `font-family:${cw.font};`;
        if (cw.fill==='gradient') style += `background:linear-gradient(45deg,${cw.c1},${cw.c2});-webkit-background-clip:text;-webkit-text-fill-color:transparent;font-weight:bold;`;
        else style += `color:${cw.c1};font-weight:bold;`;
        return `<div class="custom-watermark wm-pos-${cw.pos}" style="${style}">${cw.text}</div>`;
    },

    getCoverHTML(book) {
        let bgStyle = '';
        if (book.cover.bgType==='image') bgStyle = `background-image:url(${book.cover.image||''});`;
        else bgStyle = this.getBgCSS(book.cover.bgType, book.cover.bgColor, book.cover.bgGradient.c1, book.cover.bgGradient.c2, book.cover.bgPattern, book.cover.bgGradType, book.cover.bgTexture);
        const wm = this.getCustomWatermarkHTML(book);
        const livingClass = (book.cover.livingPhoto && book.cover.bgType==='image') ? 'living-photo-active' : '';
        const livingParticles = (book.cover.livingPhoto && book.cover.bgType==='image') ? `<div class="living-particles"><span>✨</span><span>✨</span><span>✨</span></div>` : '';
        return `<div class="cover-layout ${livingClass}" style="${bgStyle}">
            ${wm}
            ${book.cover.bgType==='image'?`<div class="cover-overlay" style="background:rgba(0,0,0,${book.cover.overlayOpacity/10});"></div>`:''}
            ${livingParticles}
            <div class="cover-content flex-col">
                <h1 class="text-style" style="${this.buildCSS(book.cover.styles.title)}">${book.cover.title||'Title'}</h1>
                <h3 class="text-style" style="${this.buildCSS(book.cover.styles.subtitle)}">${book.cover.subtitle||''}</h3>
                <p class="text-style" style="${this.buildCSS(book.cover.styles.author)}">${book.cover.author||''}</p>
            </div>
        </div>`;
    },

    getWeatherOverlayHTML(weather) {
        if (!weather) return '';
        const overlays = {0:'rgba(255,200,50,0.12)',1:'rgba(255,200,50,0.08)',2:'rgba(150,150,200,0.1)',3:'rgba(100,100,150,0.15)',61:'rgba(50,100,200,0.15)',71:'rgba(200,220,255,0.2)',95:'rgba(30,30,60,0.25)'};
        const key = Object.keys(overlays).sort((a,b)=>b-a).find(k=>weather.code>=parseInt(k));
        const color = key ? overlays[key] : 'rgba(255,200,50,0.08)';
        return `<div class="weather-overlay" style="background:linear-gradient(to bottom,${color},transparent);position:absolute;inset:0;pointer-events:none;z-index:1;"></div><div class="weather-badge">${weather.emoji} ${Math.round(weather.temp)}°C · ${weather.desc}</div>`;
    },

    getPageHTML(page) {
        const book = this.getCurrentBook();
        const wm = this.getCustomWatermarkHTML(book);
        let isLocked = page.unlockDate && new Date(page.unlockDate) > new Date();
        let bgStyle = this.getBgCSS(page.bgType, page.bgColor, page.bgGradient.c1, page.bgGradient.c2, page.bgPattern, page.bgGradType, page.bgTexture);
        let filterStyle = `filter:brightness(${page.filters.bright}%) contrast(${page.filters.contrast}%) grayscale(${page.filters.gray}%) sepia(${page.filters.sepia}%);border-radius:${page.imageRadius}px;box-shadow:0px 4px ${page.imageShadow}px rgba(0,0,0,0.5);`;
        const imgTag = page.image ? `<img src="${page.image}" style="object-fit:${page.imageFit};${filterStyle}">` : `<span style="color:#888;font-weight:bold;display:flex;flex-direction:column;align-items:center;"><i class="fas fa-image" style="font-size:2rem;margin-bottom:10px;"></i>No Photo</span>`;
        let frameHTML = imgTag;
        if (page.frame && page.frame!=='none') frameHTML = `<div class="frame-${page.frame}">${imgTag}</div>`;
        let finalMediaHTML = frameHTML;
        if (page.scrapbook==='envelope') {
            finalMediaHTML=`<div class="scrapbook-envelope" onclick="this.classList.toggle('active')"><div class="envelope-flap"></div><div class="envelope-photo">${frameHTML}</div><div class="envelope-front"></div></div>`;
        } else if (page.scrapbook==='scratch') {
            finalMediaHTML=`<div class="scratch-container"><div class="scratch-content">${frameHTML}</div><div class="scratch-overlay-fallback">Rub to Reveal</div><canvas class="scratch-canvas"></canvas></div>`;
        } else if (page.scrapbook && page.scrapbook!=='none') {
            finalMediaHTML=`<div class="sb-element sb-${page.scrapbook}">${frameHTML}</div>`;
        }
        const memoryHTML=`<div class="memory-header"><h3 class="text-style" style="${this.buildCSS(page.styles.title)}">${page.title||'Memory Title'}</h3><div class="page-meta text-style" style="${this.buildCSS(page.styles.meta)}">${page.date}${page.place?' | '+page.place:''}${page.mood?' | '+page.mood:''}</div></div><div class="memory-body"><div class="page-desc text-style" style="${this.buildCSS(page.styles.desc)}">${page.desc||'Write your memories here...'}</div></div>`;
        let layoutClass = page.layout||'top-img';
        let wrapBg='', memBg=bgStyle;
        if (['diagonal-split','overlap-card','polaroid-scatter','circle-center','diamond-center','magazine','letterbox'].includes(layoutClass)) { wrapBg=bgStyle; memBg='background:transparent;'; }
        else if (layoutClass==='overlay-img') { wrapBg=''; memBg=''; }
        const weatherHTML = this.getWeatherOverlayHTML(page.weather);
        let layoutHTML = `<div class="layout-wrapper layout-${layoutClass}" style="${wrapBg}">${wm}${weatherHTML}<div class="page-photo-area">${finalMediaHTML}</div><div class="page-memory-area ${layoutClass==='overlay-img'?'glass-panel':''}" style="${memBg}">${memoryHTML}</div></div>`;
        if (isLocked) return `<div class="time-capsule-lock" style="height:100%;pointer-events:none;">${layoutHTML}</div><div class="capsule-overlay"><i class="fas fa-lock"></i><h2>Time Capsule</h2><p>Unlocks on<br>${page.unlockDate}</p></div>`;
        return layoutHTML;
    },

    renderPreview() {
        const book = this.getCurrentBook();
        if (!book) return;
        const container = document.getElementById('live-preview-container');
        if (!container) return;
        const html = this.state.currentPageIndex===-1 ? this.getCoverHTML(book) : this.getPageHTML(book.pages[this.state.currentPageIndex]);
        container.innerHTML = `<div class="preview-page">${html}</div>`;
        this.initScratchCards();
    },

    handleImageUpload(event, type) {
        const file = event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX = 1920;
                let w=img.width, h=img.height;
                if (w>h && w>MAX) { h*=MAX/w; w=MAX; } else if (h>MAX) { w*=MAX/h; h=MAX; }
                canvas.width=w; canvas.height=h;
                canvas.getContext('2d').drawImage(img,0,0,w,h);
                const book = this.getCurrentBook();
                if (type==='cover') { book.cover.image=canvas.toDataURL('image/jpeg',0.95); document.getElementById('cover-bg-type').value='image'; this.updateBookData(); }
                else { book.pages[this.state.currentPageIndex].image=canvas.toDataURL('image/jpeg',0.95); this.updatePageData(); }
                this.showToast("HD Image Uploaded!", "fa-image");
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    },

    startParticles(type) {
        let container = document.getElementById('particle-container');
        if (!container) {
            container = document.createElement('div');
            container.id = 'particle-container';
            container.className = 'particle-container';
            document.getElementById('view-viewer')?.appendChild(container);
        }
        container.innerHTML = '';
        if (!type || type==='none') return;
        const arr = this.DYNAMIC_PARTICLES[type];
        if (!arr) return;
        for (let i=0; i<30; i++) {
            const p = document.createElement('div');
            p.className = 'particle';
            p.innerText = arr[Math.floor(Math.random()*arr.length)];
            p.style.left = Math.random()*100+'%';
            p.style.fontSize = (Math.random()*1.5+0.8)+'rem';
            p.style.animationDuration = (Math.random()*3+2.5)+'s';
            p.style.animationDelay = (Math.random()*2)+'s';
            container.appendChild(p);
        }
    },

    initScratchCards() {
        setTimeout(() => {
            document.querySelectorAll('.scratch-canvas').forEach(canvas => {
                if (canvas.dataset.initialized) return;
                canvas.dataset.initialized = "true";
                const ctx = canvas.getContext('2d');
                canvas.width = canvas.parentElement.offsetWidth;
                canvas.height = canvas.parentElement.offsetHeight;
                const g = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
                g.addColorStop(0,'#bdc3c7'); g.addColorStop(1,'#95a5a6');
                ctx.fillStyle=g; ctx.fillRect(0,0,canvas.width,canvas.height);
                ctx.font='bold 18px sans-serif'; ctx.fillStyle='#fff'; ctx.textAlign='center';
                ctx.fillText('Rub to Reveal ✨',canvas.width/2,canvas.height/2);
                let drawing=false;
                const getCoords=e=>{ const r=canvas.getBoundingClientRect(); return {x:(e.clientX||(e.touches&&e.touches[0].clientX))-r.left,y:(e.clientY||(e.touches&&e.touches[0].clientY))-r.top}; };
                const scratch=e=>{ if(!drawing)return; e.preventDefault(); const{x,y}=getCoords(e); ctx.globalCompositeOperation='destination-out'; ctx.beginPath(); ctx.arc(x,y,25,0,Math.PI*2); ctx.fill(); };
                canvas.addEventListener('mousedown',()=>drawing=true);
                canvas.addEventListener('touchstart',e=>{drawing=true;scratch(e);});
                window.addEventListener('mouseup',()=>drawing=false);
                window.addEventListener('touchend',()=>drawing=false);
                canvas.addEventListener('mousemove',scratch);
                canvas.addEventListener('touchmove',scratch);
            });
        },100);
    },

    // ==========================================
    // VIEWER — FLIP ENGINE v4
    // ==========================================
    _recalcZIndexes() {
        const sheets = Array.from(document.querySelectorAll('.flip-page'));
        const total = sheets.length;
        sheets.forEach(s => {
            const i = parseInt(s.dataset.index);
            s.style.zIndex = s.classList.contains('flipped') ? (i+1) : (total+10-i);
        });
    },

    openViewer(isSharedMode = false) {
        const book = this.getCurrentBook();
        if (!isSharedView() && book.cover.password && book.cover.password.trim()!=='') {
            // Password handled by VMB.prompt
            const checkPwd = (entered) => {
                if (entered === book.cover.password) {
                    // proceed
                    this._openViewerAfterAuth(book, isSharedMode);
                } else {
                    VMB.alert("Wrong Password", "Incorrect password. Please try again.", "danger");
                }
            };
            VMB.prompt("🔒 Protected Book", "This memory book is password protected.", "Enter password...", checkPwd, "lock");
            return; // actual open happens in callback
        }
        this._openViewerAfterAuth(book, isSharedMode);
    },

    _openViewerAfterAuth(book, isSharedMode = false) {
        this.navigateTo('viewer');
        this._isFlipping = false;
        if (this._autoPlayInterval) { clearInterval(this._autoPlayInterval); this._autoPlayInterval=null; }

        const shared = isSharedMode || isSharedView();
        if (shared) {
            document.querySelector('.viewer-toolbar').innerHTML = `
                <button onclick="app.handleCreateBookCTA()" class="btn-primary ripple glass-btn" style="flex:1;font-size:0.85rem;"><i class="fas fa-magic"></i> Create Your Own Book Free</button>
                <button onclick="app.toggleFullscreen()" class="btn-icon glass-btn"><i class="fas fa-expand"></i></button>`;
        } else {
            document.querySelector('.viewer-toolbar').innerHTML = `
                <button onclick="app.vibrate();app.closeViewer()" class="btn-icon ripple glass-btn"><i class="fas fa-times"></i></button>
                <div id="viewer-views-count" style="color:rgba(255,255,255,0.7);font-size:0.78rem;flex:1;text-align:center;"></div>
                <button id="btn-autoplay" onclick="app.toggleAutoPlay()" class="btn-icon glass-btn" title="Auto Play"><i class="fas fa-play"></i></button>
                <button onclick="app.toggleFullscreen()" class="btn-icon glass-btn"><i class="fas fa-expand"></i></button>
                <button onclick="app.vibrate();app.openShareModal()" class="btn-whatsapp ripple glass-btn"><i class="fas fa-share-alt"></i></button>`;
        }

        this.state.viewerPageIndex = 0;
        const container = document.getElementById('flipbook-container');
        container.innerHTML = '';
        const totalSheets = 1 + book.pages.length + (book.cover.guestbook==='true'?1:0) + 1;
        let pi = 0;
        const zi = i => totalSheets+10-i;

        container.appendChild(this.createFlipSheet(this.getCoverHTML(book), pi, zi(pi++), book));
        book.pages.forEach(page => container.appendChild(this.createFlipSheet(this.getPageHTML(page), pi, zi(pi++), book)));

        if (book.cover.guestbook==='true') {
            const tc = `gb-theme-${book.cover.guestbookDesign||'cork-yellow'}`;
            const gbHTML = `<div class="guestbook-container ${tc}">${this.getCustomWatermarkHTML(book)}<h2 class="guestbook-title">Guestbook</h2><div id="gb-notes-area" style="position:absolute;inset:0;z-index:5;pointer-events:none;"></div><div class="guestbook-input-area"><input type="text" id="gb-input" placeholder="Leave a memory note..." maxlength="60"><button class="btn-primary" onclick="app.addGuestbookNote('${book.id}')"><i class="fas fa-paper-plane"></i></button></div></div>`;
            container.appendChild(this.createFlipSheet(gbHTML, pi, zi(pi++), book));
            setTimeout(()=>this.renderGuestbookNotes(book.id),200);
        }

        const viralHTML = `<div class="viral-back-cover">
            <div class="viral-logo"><i class="fas fa-book-open"></i></div>
            <h2 class="viral-title">MemoryFlip Ultra</h2>
            <p class="viral-subtitle">Loved these memories?<br>Create your own interactive flipbook for free!</p>
            <div id="reaction-bar" style="display:flex;gap:10px;justify-content:center;margin-bottom:20px;flex-wrap:wrap;"></div>
            <button class="btn-viral" onclick="app.handleCreateBookCTA()"><i class="fas fa-magic"></i> Create Your Book</button>
        </div>`;
        container.appendChild(this.createFlipSheet(viralHTML, pi, zi(pi++), book, true));

        this.updateViewerUI();
        this.initScratchCards();
        this.initViewerSwipe();
        this.loadReactions(book.id);
        if (shared) this.incrementBookViews(book.id);

        // Cinematic opening animation
        container.style.transform='scale(0.4) rotateY(-30deg)';
        container.style.opacity='0';
        container.style.filter='blur(15px)';
        container.style.transition='none';
        requestAnimationFrame(()=>requestAnimationFrame(()=>{
            container.style.transition='transform 1s cubic-bezier(0.16,1,0.3,1),opacity 0.8s ease,filter 0.8s ease';
            container.style.transform='scale(1) rotateY(0deg)';
            container.style.opacity='1';
            container.style.filter='blur(0px)';
        }));
    },



    createFlipSheet(frontHTML, index, zIndex, book, isViral=false) {
        const sheet = document.createElement('div');
        sheet.className = 'flip-page';
        sheet.dataset.index = index;
        sheet.style.zIndex = zIndex;
        let backHTML = '';
        if (isViral || book.cover.watermark==='true') {
            backHTML=`<div style="display:flex;flex-direction:column;justify-content:center;align-items:center;height:100%;background:var(--bg-color);color:var(--text-light);opacity:0.5;"><i class="fas fa-book-open" style="font-size:2.5rem;margin-bottom:10px;color:var(--primary);"></i><div style="font-weight:bold;font-size:1.4rem;">MemoryFlip<span style="font-size:0.7rem;vertical-align:top;">Ultra</span></div></div>`;
        } else if (book.cover.watermark==='custom') {
            backHTML=`<div style="width:100%;height:100%;background:var(--bg-color);position:relative;">${this.getCustomWatermarkHTML(book)}</div>`;
        } else {
            backHTML=`<div style="width:100%;height:100%;background:var(--bg-color);"></div>`;
        }
        sheet.innerHTML = `<div class="flip-front">${frontHTML}</div><div class="flip-back">${backHTML}</div>`;
        return sheet;
    },

    flipPage(dir) {
        if (this._isFlipping) return;
        const sheets = Array.from(document.querySelectorAll('.flip-page'));
        const total = sheets.length;
        if (dir==='next' && this.state.viewerPageIndex<total) {
            const sheet = sheets.find(s=>parseInt(s.dataset.index)===this.state.viewerPageIndex);
            if (!sheet) return;
            this._isFlipping = true;
            sheet.style.zIndex = total+999;
            void sheet.getBoundingClientRect();
            sheet.classList.add('flipped');
            this.state.viewerPageIndex++;
            this.updateViewerUI();
            setTimeout(()=>{ this._recalcZIndexes(); this._isFlipping=false; },950);
        } else if (dir==='prev' && this.state.viewerPageIndex>0) {
            const sheet = sheets.find(s=>parseInt(s.dataset.index)===this.state.viewerPageIndex-1);
            if (!sheet) return;
            this._isFlipping = true;
            sheet.style.zIndex = total+999;
            void sheet.getBoundingClientRect();
            sheet.classList.remove('flipped');
            this.state.viewerPageIndex--;
            this.updateViewerUI();
            setTimeout(()=>{ this._recalcZIndexes(); this._isFlipping=false; },950);
        }
    },

    updateViewerUI() {
        const book = this.getCurrentBook();
        const totalSheets = document.querySelectorAll('.flip-page').length;
        const contentPages = 1+book.pages.length+(book.cover.guestbook==='true'?1:0);
        const ctr = document.getElementById('viewer-page-counter');
        if (ctr) {
            if (this.state.viewerPageIndex===0) ctr.innerText='Cover';
            else if (this.state.viewerPageIndex>=totalSheets) ctr.innerText='End';
            else ctr.innerText=`${this.state.viewerPageIndex} / ${contentPages}`;
        }
        const pct = totalSheets>1?(this.state.viewerPageIndex/(totalSheets-1))*100:0;
        const pb=document.getElementById('viewer-progress-bar'); if(pb) pb.style.width=pct+'%';
        if (this.state.viewerPageIndex===0||this.state.viewerPageIndex>book.pages.length) this.startParticles('none');
        else { const p=book.pages[this.state.viewerPageIndex-1]; if(p) this.startParticles(p.particles); }
    },

    initViewerSwipe() {
        const c = document.getElementById('flipbook-container');
        if (!c || c._swipe) return;
        c._swipe = true;
        let sx=0,sy=0;
        c.addEventListener('touchstart',e=>{ sx=e.touches[0].clientX; sy=e.touches[0].clientY; },{passive:true});
        c.addEventListener('touchend',e=>{
            const dx=e.changedTouches[0].clientX-sx, dy=Math.abs(e.changedTouches[0].clientY-sy);
            if (Math.abs(dx)>50&&dy<80) { this.vibrate(); dx<0?this.flipPage('next'):this.flipPage('prev'); }
        },{passive:true});
    },

    toggleAutoPlay() {
        if (this._autoPlayInterval) {
            clearInterval(this._autoPlayInterval); this._autoPlayInterval=null;
            const b=document.getElementById('btn-autoplay');
            if(b){b.innerHTML='<i class="fas fa-play"></i>';b.classList.remove('active-glow');}
        } else {
            const b=document.getElementById('btn-autoplay');
            if(b){b.innerHTML='<i class="fas fa-pause"></i>';b.classList.add('active-glow');}
            this._autoPlayInterval=setInterval(()=>{
                const s=document.querySelectorAll('.flip-page');
                if(this.state.viewerPageIndex>=s.length){this.toggleAutoPlay();return;}
                this.flipPage('next');
            },3000);
        }
    },

    toggleFullscreen() {
        const el=document.getElementById('view-viewer');
        if (!document.fullscreenElement) (el.requestFullscreen||el.webkitRequestFullscreen||el.mozRequestFullScreen).call(el);
        else (document.exitFullscreen||document.webkitExitFullscreen||document.mozCancelFullScreen).call(document);
    },

    closeViewer() {
        this.startParticles('none');
        if (this._autoPlayInterval) { clearInterval(this._autoPlayInterval); this._autoPlayInterval=null; }
        this.navigateTo('editor');
    },

    addGuestbookNote(bookId) {
        const input=document.getElementById('gb-input');
        const text=input?.value.trim();
        if (!text) return;
        let notes=JSON.parse(localStorage.getItem('gb_'+bookId)||'[]');
        notes.push(text);
        localStorage.setItem('gb_'+bookId,JSON.stringify(notes));
        input.value='';
        this.renderGuestbookNotes(bookId);
    },

    renderGuestbookNotes(bookId) {
        const area=document.getElementById('gb-notes-area');
        if (!area) return;
        area.innerHTML='';
        const notes=JSON.parse(localStorage.getItem('gb_'+bookId)||'[]');
        notes.forEach((note,i)=>{
            const div=document.createElement('div');
            div.className='sticky-note';
            div.style.top=`${15+Math.random()*50}%`;
            div.style.left=`${5+Math.random()*60}%`;
            div.style.transform=`rotate(${-10+Math.random()*20}deg)`;
            div.style.animationDelay=`${i*0.1}s`;
            div.innerHTML=`<span>${note}</span><span style="font-size:0.7rem;opacity:0.7;">- Guest</span>`;
            area.appendChild(div);
        });
    },

    // ==========================================
    // VIEWS + REACTIONS
    // ==========================================
    async incrementBookViews(bookId) {
        try {
            const ref=firebase.database().ref('book_views/'+bookId);
            await ref.transaction(v=>(v||0)+1);
            const snap=await ref.once('value');
            const el=document.getElementById('viewer-views-count');
            if(el) el.innerText=`👁 ${snap.val()||1} views`;
        } catch(e) {}
    },

    async handleReaction(bookId, type) {
        const key=`reacted_${bookId}_${type}`;
        if(localStorage.getItem(key)){this.showToast("Already reacted!","fa-heart");return;}
        try {
            await firebase.database().ref(`book_reactions/${bookId}/${type}`).transaction(v=>(v||0)+1);
            localStorage.setItem(key,'1');
            this.showToast("Reaction sent! 🎉","fa-heart");
            this.loadReactions(bookId);
        } catch(e){}
    },

    async loadReactions(bookId) {
        try {
            const snap=await firebase.database().ref('book_reactions/'+bookId).once('value');
            const r=snap.val()||{};
            const bar=document.getElementById('reaction-bar');
            if(!bar) return;
            bar.innerHTML=`
                <button class="reaction-btn" onclick="app.handleReaction('${bookId}','heart')">❤️ <span>${r.heart||0}</span></button>
                <button class="reaction-btn" onclick="app.handleReaction('${bookId}','wow')">😍 <span>${r.wow||0}</span></button>
                <button class="reaction-btn" onclick="app.handleReaction('${bookId}','cry')">🥺 <span>${r.cry||0}</span></button>
                <button class="reaction-btn" onclick="app.handleReaction('${bookId}','fire')">🔥 <span>${r.fire||0}</span></button>`;
        } catch(e){}
    },

    // ==========================================
    // SHARE / EXPORT
    // ==========================================
    async openExportModal() {
        await this.syncToCloud();
        document.getElementById('share-modal').classList.add('active');
        const link=`${window.location.origin}${window.location.pathname}?view=${this.state.currentBookId}`;
        const li=document.getElementById('share-link'); if(li) li.value=link;
        const qi=document.getElementById('qr-code-img');
        if(qi) qi.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(link)}&color=6c5ce7&bgcolor=ffffff`;
        const qb=document.getElementById('qr-code-box'); if(qb) qb.classList.remove('hidden');
    },
    openShareModal() { this.openExportModal(); },
    closeModal(id) { const el=document.getElementById(id); if(el) el.classList.remove('active'); },
    copyShareLink() { navigator.clipboard.writeText(document.getElementById('share-link').value); this.showToast("Link Copied!","fa-copy"); },
    shareWhatsApp() {
        const link=document.getElementById('share-link').value;
        const book=this.getCurrentBook();
        const text=`Check out my Memory Book: *${book.cover.title}* 📖✨\n\nOpen it here: ${link}\n\nMade with MemoryFlip Ultra 🎭`;
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`,'_blank');
    },

    handleCreateBookCTA() {
        if (auth.currentUser) {
            if (isSharedView()) { localStorage.setItem('mf_pending_action','create_book'); window.location.href=window.location.pathname; }
            else { this.navigateTo('dashboard'); setTimeout(()=>this.openCategoryPicker(),300); }
        } else {
            localStorage.setItem('mf_pending_action','create_book');
            window.location.href=window.location.pathname;
        }
    },

    // ==========================================
    // FEATURE 1: 🎭 LIVING PHOTO
    // ==========================================
    enableLivingPhoto() {
        const book=this.getCurrentBook();
        if (!book.cover.image) { this.showToast("Pehle cover photo upload karo!","fa-image"); return; }
        if (auth.userData?.subscriptionStatus!=='pro') { this.showToast("Living Photo is a PRO feature!","fa-crown"); this.navigateTo('subscription'); return; }
        book.cover.livingPhoto=true;
        this.saveData(); this.renderPreview();
        const lps=document.getElementById('living-photo-status');
        if(lps){lps.innerText='✅ Living Photo ON';lps.style.color='var(--success)';}
        this.showToast("🎭 Photo ab breathe karegi!","fa-magic");
    },
    disableLivingPhoto() {
        const book=this.getCurrentBook();
        book.cover.livingPhoto=false;
        this.saveData(); this.renderPreview();
        const lps=document.getElementById('living-photo-status');
        if(lps){lps.innerText='Off';lps.style.color='var(--text-light)';}
        this.showToast("Living Photo off","fa-times");
    },

    // ==========================================
    // FEATURE 2: 🎙️ MEMORY CAPSULE LETTER
    // ==========================================
    openCapsuleModal() {
        if (auth.userData?.subscriptionStatus!=='pro') { this.showToast("Memory Capsule is a PRO feature!","fa-crown"); this.navigateTo('subscription'); return; }
        document.getElementById('capsule-modal').classList.add('active');
        this.loadCapsuleList();
    },

    async saveCapsuleLetter() {
        const msg=document.getElementById('capsule-message')?.value.trim();
        const toName=document.getElementById('capsule-to')?.value.trim();
        const date=document.getElementById('capsule-date')?.value;
        if (!msg||!date) { this.showToast("Message aur date zaroori hai!","fa-exclamation"); return; }
        const book=this.getCurrentBook();
        if (!book.capsuleLetters) book.capsuleLetters=[];
        const cap={
            id:'cap_'+Date.now(), to:toName||'My Loved One',
            message:msg, unlockDate:date,
            createdAt:new Date().toISOString(), delivered:false,
            bookId:book.id, bookTitle:book.cover.title
        };
        book.capsuleLetters.push(cap);
        if (auth.currentUser) await firebase.database().ref(`capsule_letters/${auth.currentUser.uid}/${cap.id}`).set(cap);
        this.saveData();
        const tm=document.getElementById('capsule-message'); if(tm) tm.value='';
        const tt=document.getElementById('capsule-to'); if(tt) tt.value='';
        const td=document.getElementById('capsule-date'); if(td) td.value='';
        this.loadCapsuleList();
        this.showToast(`🎙️ Capsule saved! Deliver hoga ${date} ko.`,"fa-check-circle");
    },

    loadCapsuleList() {
        const book=this.getCurrentBook();
        const list=document.getElementById('capsule-list');
        if (!list) return;
        const caps=book.capsuleLetters||[];
        if (caps.length===0) { list.innerHTML='<p class="text-light" style="font-size:0.85rem;text-align:center;padding:15px;">No capsule letters yet.</p>'; return; }
        list.innerHTML=caps.map(c=>`<div class="capsule-item"><div style="font-weight:700;font-size:0.9rem;">💌 To: ${c.to}</div><div class="text-light" style="font-size:0.78rem;">Unlocks: ${c.unlockDate}</div><div style="font-size:0.82rem;margin-top:4px;opacity:0.75;">"${c.message.substring(0,80)}${c.message.length>80?'...':''}"</div><button onclick="app.deleteCapsule('${c.id}')" class="btn-icon" style="color:var(--danger);padding:4px 0;font-size:0.78rem;margin-top:4px;"><i class="fas fa-trash"></i> Delete</button></div>`).join('');
    },

    async deleteCapsule(capId) {
        const book=this.getCurrentBook();
        book.capsuleLetters=(book.capsuleLetters||[]).filter(c=>c.id!==capId);
        if(auth.currentUser) await firebase.database().ref(`capsule_letters/${auth.currentUser.uid}/${capId}`).remove();
        this.saveData(); this.loadCapsuleList();
        this.showToast("Capsule deleted","fa-trash");
    },

    async checkPendingCapsules() {
        if (!auth.currentUser) return;
        try {
            const snap=await firebase.database().ref('capsule_letters/'+auth.currentUser.uid).once('value');
            if (!snap.exists()) return;
            const today=new Date().toISOString().split('T')[0];
            snap.forEach(child=>{
                const cap=child.val();
                if (!cap.delivered && cap.unlockDate<=today) {
                    this.showCapsuleReveal(cap);
                    firebase.database().ref(`capsule_letters/${auth.currentUser.uid}/${cap.id}`).update({delivered:true});
                }
            });
        } catch(e){}
    },

    showCapsuleReveal(cap) {
        const modal=document.getElementById('capsule-reveal-modal');
        if (!modal) return;
        const s=(id,val)=>{const el=document.getElementById(id);if(el)el.innerText=val;};
        s('reveal-to-name', cap.to);
        s('reveal-message', cap.message);
        s('reveal-book-title', 'From: '+cap.bookTitle);
        modal.classList.add('active');
        const shareBtn=document.getElementById('capsule-whatsapp-share');
        if (shareBtn) {
            const text=`💌 A Memory Capsule Letter!\n\nFor: ${cap.to}\n\n"${cap.message}"\n\n— From ${auth.userData?.name||'Someone Special'}\n\nMade with MemoryFlip Ultra 🎭\nhttps://memoryflip.app`;
            shareBtn.onclick=()=>window.open('https://api.whatsapp.com/send?text='+encodeURIComponent(text),'_blank');
        }
    },

    // ==========================================
    // FEATURE 3: 👨‍👩‍👧 FAMILY TREE BOOK
    // ==========================================
    openFamilyTreeModal() {
        document.getElementById('family-tree-modal')?.classList.add('active');
        this.renderFamilyTree();
    },

    getFamilyKey() { return 'mf_family_'+(auth.currentUser?.uid||'local'); },

    renderFamilyTree() {
        const members=JSON.parse(localStorage.getItem(this.getFamilyKey())||'[]');
        const container=document.getElementById('family-tree-container');
        if (!container) return;
        if (members.length===0) {
            container.innerHTML=`<div style="text-align:center;padding:30px;color:var(--text-light);"><div style="font-size:3rem;margin-bottom:10px;">👨‍👩‍👧</div><p>Apna pehla family member add karo!</p></div>`;
            return;
        }
        const byGen={};
        members.forEach(m=>{ if(!byGen[m.generation])byGen[m.generation]=[]; byGen[m.generation].push(m); });
        const genNames=['👴 Grandparents','👨‍👩‍👧 Parents','🧒 Children','👶 Grandchildren'];
        container.innerHTML=Object.keys(byGen).sort().map(gen=>`
            <div class="family-gen">
                <div class="gen-label">${genNames[gen]||'Generation '+gen}</div>
                <div class="gen-members">
                    ${byGen[gen].map(m=>`<div class="family-member-card" onclick="app.openFamilyMemberBook('${m.id}')">
                        <div class="family-member-photo" style="${m.photo?`background-image:url(${m.photo});background-size:cover;`:'background:var(--primary);'}">${!m.photo?`<i class="fas fa-user" style="color:white;font-size:1.2rem;"></i>`:''}</div>
                        <div class="family-member-name">${m.name}</div>
                        <div style="font-size:0.72rem;color:var(--text-light);">${m.relation}</div>
                        <div style="font-size:0.68rem;margin-top:2px;color:${m.bookId?'var(--success)':'var(--text-light)'};">${m.bookId?'📖 Has Book':'No Book'}</div>
                    </div>`).join('')}
                </div>
            </div>`).join('');
    },

    addFamilyMember() {
        const name=document.getElementById('fm-name')?.value.trim();
        const relation=document.getElementById('fm-relation')?.value;
        const gen=document.getElementById('fm-generation')?.value;
        if (!name) { this.showToast("Naam daalo!","fa-exclamation"); return; }
        const key=this.getFamilyKey();
        const members=JSON.parse(localStorage.getItem(key)||'[]');
        members.push({id:'fm_'+Date.now(),name,relation,generation:gen,photo:'',bookId:null});
        localStorage.setItem(key,JSON.stringify(members));
        const inp=document.getElementById('fm-name'); if(inp) inp.value='';
        this.renderFamilyTree();
        this.showToast(`👨‍👩‍👧 ${name} added!`,"fa-users");
    },

    openFamilyMemberBook(memberId) {
        const key=this.getFamilyKey();
        const members=JSON.parse(localStorage.getItem(key)||'[]');
        const member=members.find(m=>m.id===memberId);
        if (!member) return;
        if (member.bookId) {
            const book=this.state.books.find(b=>b.id===member.bookId);
            if (book) { this.closeModal('family-tree-modal'); this.state.currentBookId=book.id; this.openViewer(); return; }
        }
        VMB.confirm("Create Book", `Create a memory book for <b>${member.name}</b>?`, () => {
            this.createFamilyMemberBook(member);
        })
    },

    async createFamilyMemberBook(member) {
        this.closeModal('family-tree-modal');
        if (auth.userData?.subscriptionStatus!=='pro' && this.state.books.length>=1) {
            this.showToast("Free Plan: Max 1 Book. Upgrade!","fa-crown"); this.navigateTo('subscription'); return;
        }
        const newBook={
            id:'book_'+Date.now(), category:'family', capsuleLetters:[],
            cover:{
                title:member.name+"'s Memories", subtitle:member.relation, author:'Family',
                image:'', bgType:'gradient', bgColor:'#6c5ce7',
                bgTexture:'vintage', bgGradient:{c1:'#a29bfe',c2:'#6c5ce7'},
                bgPattern:'stripes-v', bgGradType:'linear-135', overlayOpacity:4,
                styles:{title:defStyle(),subtitle:defStyle(),author:defStyle()},
                password:'', watermark:'true', guestbook:'false', guestbookDesign:'cork-yellow',
                livingPhoto:false,
                customWatermark:{text:member.name,font:'Roboto',pos:'bottom-right',fill:'solid',c1:'#ffffff',c2:'#aaaaaa'}
            },
            pages:[], familyMemberId:member.id
        };
        ['title','subtitle','author'].forEach(k=>newBook.cover.styles[k].color='#ffffff');
        this.state.books.push(newBook);
        this.state.currentBookId=newBook.id;
        const key=this.getFamilyKey();
        const members=JSON.parse(localStorage.getItem(key)||'[]');
        const idx=members.findIndex(m=>m.id===member.id);
        if(idx>=0){members[idx].bookId=newBook.id;localStorage.setItem(key,JSON.stringify(members));}
        this.saveData(); await this.syncToCloud();
        this.showToast(`📖 ${member.name} ka book ready!`,"fa-book");
        this.openEditor(newBook.id);
    },

    // ==========================================
    // FEATURE 4: 🗺️ MEMORY MAP
    // ==========================================
    openMemoryMap() {
        document.getElementById('memory-map-modal')?.classList.add('active');
        setTimeout(()=>this.initMemoryMap(),350);
    },

    initMemoryMap() {
        const container=document.getElementById('memory-map-container');
        if (!container) return;

        // Collect all geo-tagged pages
        const allPins=[];
        this.state.books.forEach(book=>{
            book.pages.forEach(page=>{
                if (page.lat && page.lng) {
                    allPins.push({lat:page.lat,lng:page.lng,title:page.title||'Memory',place:page.place||'',date:page.date||'',image:page.image||'',bookId:book.id,bookTitle:book.cover.title,mood:page.mood||'',weather:page.weather});
                }
            });
        });

        this._mapPins = allPins;

        if (allPins.length === 0) {
            container.innerHTML=`<div style="padding:40px;text-align:center;color:var(--text-light);"><div style="font-size:3rem;margin-bottom:15px;">🗺️</div><h3>Koi Memory Map pe nahi hai abhi!</h3><p class="mt-1" style="font-size:0.85rem;">Pages mein Place + Date daalo aur Weather fetch karo — automatically map pe pin lagega.</p></div>`;
            return;
        }

        // Use Leaflet.js
        if (window.L) {
            container.innerHTML = '<div id="leaflet-map" style="width:100%;height:320px;border-radius:12px;"></div><div id="map-pin-popup" class="map-pin-popup hidden"></div>';
            if (this._mapInstance) { this._mapInstance.remove(); this._mapInstance=null; }
            const map = L.map('leaflet-map').setView([20,78],3);
            this._mapInstance = map;
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap',maxZoom:18}).addTo(map);
            allPins.forEach((pin,i)=>{
                const marker = L.marker([pin.lat,pin.lng]).addTo(map);
                marker.bindPopup(`<div style="min-width:160px;"><b>${pin.title}</b><br><small>${pin.place} ${pin.date?'· '+pin.date:''}</small>${pin.weather?`<br><small>${pin.weather.emoji} ${pin.weather.desc}</small>`:''}<br><br><button onclick="app.goToBookFromMap('${pin.bookId}');app.closeModal('memory-map-modal');" style="background:var(--primary);color:#fff;border:none;padding:5px 10px;border-radius:6px;cursor:pointer;font-size:0.8rem;">📖 Open Book</button></div>`);
            });
            if (allPins.length>0) map.fitBounds(allPins.map(p=>[p.lat,p.lng]),{padding:[30,30]});
        } else {
            // Fallback: Simple pin list
            container.innerHTML=`<div style="padding:15px;"><p class="text-light" style="font-size:0.82rem;margin-bottom:10px;">📍 ${allPins.length} memory locations found:</p>${allPins.map(pin=>`<div class="map-list-item" onclick="app.goToBookFromMap('${pin.bookId}');app.closeModal('memory-map-modal');">${pin.weather?pin.weather.emoji:'📍'} <b>${pin.place||pin.title}</b> — ${pin.date||''} <span class="text-light" style="font-size:0.78rem;">· ${pin.bookTitle}</span></div>`).join('')}</div>`;
        }
    },

    goToBookFromMap(bookId) {
        this.state.currentBookId=bookId;
        this.openViewer();
    },

    async savePageLocationFromPlace() {
        const place=document.getElementById('page-place')?.value.trim();
        if (!place) return;
        try {
            const res=await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=1`);
            const data=await res.json();
            if (data[0]) {
                const page=this.getCurrentBook().pages[this.state.currentPageIndex];
                if(!page) return;
                page.lat=parseFloat(data[0].lat);
                page.lng=parseFloat(data[0].lon);
                this.saveData();
            }
        } catch(e){}
    },

    // ==========================================
    // FEATURE 5: 🌦️ MEMORY WEATHER
    // ==========================================
    async fetchMemoryWeather() {
        if (this.state.currentPageIndex<0) return;
        const page=this.getCurrentBook().pages[this.state.currentPageIndex];
        const date=page.date, place=page.place;
        if (!date||!place) { this.showToast("Pehle Date aur Place daalo!","fa-exclamation"); return; }
        const btn=document.getElementById('btn-fetch-weather');
        if(btn){btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Fetching...';}
        try {
            // Geocode
            const geoRes=await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(place)}&format=json&limit=1`);
            const geoData=await geoRes.json();
            if (!geoData[0]) { this.showToast("Location nahi mila!","fa-times"); return; }
            const lat=geoData[0].lat, lng=geoData[0].lon;
            // Historical weather (Open-Meteo - free, no API key)
            const wRes=await fetch(`https://archive-api.open-meteo.com/v1/archive?latitude=${lat}&longitude=${lng}&start_date=${date}&end_date=${date}&daily=temperature_2m_max,weathercode&timezone=auto`);
            const wData=await wRes.json();
            const temp=wData.daily?.temperature_2m_max?.[0];
            const code=wData.daily?.weathercode?.[0];
            const wInfo=this.decodeWeatherCode(code,temp);
            page.weather={temp,code,emoji:wInfo.emoji,desc:wInfo.desc,lat:parseFloat(lat),lng:parseFloat(lng)};
            page.lat=parseFloat(lat); page.lng=parseFloat(lng);
            this.saveData(); this.renderPreview();
            const wd=document.getElementById('weather-display');
            if(wd){wd.innerHTML=`${wInfo.emoji} ${wInfo.desc} · ${Math.round(temp)}°C`;wd.style.display='block';}
            this.showToast(`🌦️ ${wInfo.emoji} ${date} ko ${place} mein ${wInfo.desc} tha! (${Math.round(temp)}°C)`,"fa-cloud");
        } catch(e) {
            this.showToast("Weather fetch failed. Internet check karo.","fa-exclamation");
        } finally {
            if(btn){btn.disabled=false;btn.innerHTML='<i class="fas fa-cloud"></i> Fetch Weather';}
        }
    },

    decodeWeatherCode(code, temp) {
        if (code===undefined||code===null) return {emoji:'🌤️',desc:'Clear Sky'};
        if (code===0) return {emoji:'☀️',desc:'Clear Sky'};
        if (code<=2) return {emoji:'⛅',desc:'Partly Cloudy'};
        if (code===3) return {emoji:'☁️',desc:'Overcast'};
        if (code<=49) return {emoji:'🌫️',desc:'Foggy'};
        if (code<=59) return {emoji:'🌦️',desc:'Drizzle'};
        if (code<=69) return {emoji:'🌧️',desc:'Rain'};
        if (code<=79) return {emoji:'❄️',desc:'Snow'};
        if (code<=84) return {emoji:'🌧️',desc:'Rain Showers'};
        if (code<=94) return {emoji:'⛈️',desc:'Thunderstorm'};
        if (temp&&temp<5) return {emoji:'🥶',desc:'Very Cold'};
        return {emoji:'🌤️',desc:'Clear'};
    },
};

function isSharedView() { return !!new URLSearchParams(window.location.search).get('view'); }
window.onload = () => app.init();
