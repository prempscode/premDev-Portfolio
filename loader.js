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
            transition: opacity 0.5s ease;
        }
        #prem-loader.fade-out { opacity: 0; pointer-events: none; }
        .prem-loader-name { font-family: 'Segoe UI', sans-serif; font-size: 1.4rem; font-weight: 600; letter-spacing: 0.08em; color: #111; }
        .prem-loader-bar-wrap { width: 180px; height: 3px; background: #e0e0e0; border-radius: 99px; overflow: hidden; }
        .prem-loader-bar { height: 100%; width: 0%; background: linear-gradient(90deg, #6c63ff, #ff6584); border-radius: 99px; animation: premLoadBar 1.4s ease forwards; }
        @keyframes premLoadBar { 0%{width:0%} 60%{width:75%} 100%{width:100%} }
        .prem-loader-sub { font-family: 'Segoe UI', sans-serif; font-size: 0.78rem; color: #aaa; letter-spacing: 0.05em; }
    `;

    function createLoader() {
        if (document.getElementById('prem-loader')) return document.getElementById('prem-loader');
        var style = document.createElement('style');
        style.textContent = LOADER_STYLES;
        document.head.appendChild(style);
        var el = document.createElement('div');
        el.id = 'prem-loader';
        el.innerHTML =
            '<div class="prem-loader-name">premDev</div>' +
            '<div class="prem-loader-bar-wrap"><div class="prem-loader-bar"></div></div>' +
            '<div class="prem-loader-sub">Loading…</div>';
        document.body.insertBefore(el, document.body.firstChild);
        return el;
    }

    function resetBar(loader) {
        var bar = loader.querySelector('.prem-loader-bar');
        if (bar) {
            bar.style.animation = 'none';
            bar.offsetHeight; // force reflow
            bar.style.animation = '';
        }
        loader.style.transition = 'none';
        loader.style.opacity = '1';
        loader.classList.remove('fade-out');
    }

    function dismissLoader(loader) {
        loader.style.transition = 'opacity 0.5s ease';
        loader.classList.add('fade-out');
        setTimeout(function () { if (loader.parentNode) loader.remove(); }, 550);
    }

    function startDismissTimer() {
        var loader = document.getElementById('prem-loader');
        if (!loader) return;
        var isHome = !!document.getElementById('canvas');
        if (isHome) {
            var frameCount = 0;
            function waitForGL() {
                frameCount++;
                if (frameCount >= 30) {
                    dismissLoader(loader);
                } else {
                    requestAnimationFrame(waitForGL);
                }
            }
            requestAnimationFrame(waitForGL);
        } else {
            setTimeout(function () { dismissLoader(loader); }, 500);
        }
    }

    // ── Handle bfcache (back/forward navigation) ──
    // When browser restores a frozen page, pageshow fires with persisted=true
    window.addEventListener('pageshow', function (e) {
        if (e.persisted) {
            // Page was restored from bfcache — show loader then dismiss
            var loader = createLoader();
            resetBar(loader);
            startDismissTimer();
        }
    });

    // Show loader on leaving
    window.addEventListener('beforeunload', function () {
        var loader = createLoader();
        resetBar(loader);
    });

    // Normal page load
    document.addEventListener('DOMContentLoaded', function () {
        var loader = createLoader();
        startDismissTimer();
    });
})();
