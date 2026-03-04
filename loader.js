// ── premDev Page Loader ──
(function () {
    var LOADER_STYLES = `
        #prem-loader {
            position: fixed;
            inset: 0;
            z-index: 99999;
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 18px;
        }
        #prem-loader.fade-out {
            transition: opacity 0.5s ease;
            opacity: 0;
            pointer-events: none;
        }
        .prem-loader-name { font-family: 'Segoe UI', sans-serif; font-size: 1.4rem; font-weight: 600; letter-spacing: 0.08em; color: #111; }
        .prem-loader-bar-wrap { width: 180px; height: 3px; background: #e0e0e0; border-radius: 99px; overflow: hidden; }
        .prem-loader-bar { height: 100%; width: 0%; background: linear-gradient(90deg, #6c63ff, #ff6584); border-radius: 99px; animation: premLoadBar 1.4s ease forwards; }
        @keyframes premLoadBar { 0%{width:0%} 60%{width:75%} 100%{width:100%} }
        .prem-loader-sub { font-family: 'Segoe UI', sans-serif; font-size: 0.78rem; color: #aaa; letter-spacing: 0.05em; }
    `;

    function injectStyles() {
        if (document.getElementById('prem-loader-style')) return;
        var style = document.createElement('style');
        style.id = 'prem-loader-style';
        style.textContent = LOADER_STYLES;
        document.head.appendChild(style);
    }

    function createLoader() {
        injectStyles();
        var existing = document.getElementById('prem-loader');
        if (existing) return existing;
        var el = document.createElement('div');
        el.id = 'prem-loader';
        el.innerHTML =
            '<div class="prem-loader-name">premDev</div>' +
            '<div class="prem-loader-bar-wrap"><div class="prem-loader-bar"></div></div>' +
            '<div class="prem-loader-sub">Loading…</div>';
        document.body.insertBefore(el, document.body.firstChild);
        return el;
    }

    function dismissLoader(loader) {
        if (!loader) return;
        loader.classList.add('fade-out');
        setTimeout(function () {
            if (loader.parentNode) loader.remove();
        }, 550);
    }

    function killLoader() {
        // Instantly remove loader with no animation — used on bfcache restore
        var loader = document.getElementById('prem-loader');
        if (loader && loader.parentNode) loader.remove();
    }

    function startDismiss() {
        var loader = document.getElementById('prem-loader');
        if (!loader) return;
        var isHome = !!document.getElementById('canvas');
        if (isHome) {
            // Wait for WebGL to warm up
            var frames = 0;
            function tick() {
                if (++frames >= 30) { dismissLoader(loader); }
                else { requestAnimationFrame(tick); }
            }
            requestAnimationFrame(tick);
        } else {
            // Subpage — just wait for load
            if (document.readyState === 'complete') {
                setTimeout(function () { dismissLoader(loader); }, 400);
            } else {
                window.addEventListener('load', function () {
                    setTimeout(function () { dismissLoader(loader); }, 400);
                });
            }
        }
    }

    // ── bfcache: when user hits BACK, instantly kill the loader ──
    // pageshow fires with persisted=true when restored from cache
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            // Page came from bfcache — just kill loader immediately, page is already loaded
            killLoader();
        }
    });

    // ── Normal page load ──
    document.addEventListener('DOMContentLoaded', function () {
        createLoader();
        startDismiss();
    });

    // ── Show loader when navigating AWAY (clicking buttons) ──
    // We intercept link clicks directly instead of beforeunload
    // because beforeunload + bfcache interact badly
    document.addEventListener('click', function (e) {
        var target = e.target.closest('a[href], [data-href]');
        // Also handle divs used as nav buttons (task-bar items)
        var navBtn = e.target.closest('.me, .projects, .skills, .contact');
        if (navBtn || (target && !target.href.startsWith('#'))) {
            injectStyles();
            var loader = document.getElementById('prem-loader') || createLoader();
            // Reset bar animation
            var bar = loader.querySelector('.prem-loader-bar');
            if (bar) { bar.style.animation = 'none'; bar.offsetHeight; bar.style.animation = ''; }
            loader.classList.remove('fade-out');
            loader.style.opacity = '1';
        }
    }, true);

})();
