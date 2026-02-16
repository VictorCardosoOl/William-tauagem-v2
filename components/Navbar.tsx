import React, { useCallback, useLayoutEffect, useRef, useState, useEffect } from 'react';
import { TEXTOS_GERAIS, REDES_SOCIAIS } from '../data';

// Injecting CSS directly to ensure it works without external CSS loaders setup
const STYLES = `
.staggered-menu-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 90;
  pointer-events: none;
}

.staggered-menu-wrapper.fixed-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 90;
  overflow: hidden;
}

.staggered-menu-header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 3rem;
  background: transparent;
  pointer-events: none;
  z-index: 20;
}

@media (max-width: 768px) {
  .staggered-menu-header {
    padding: 1.5rem;
  }
}

.staggered-menu-header > * {
  pointer-events: auto;
}

.sm-logo {
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  mix-blend-mode: difference;
  color: #F6F5F0;
  z-index: 100;
}

.sm-toggle {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: #1A1A1A;
  font-weight: 500;
  line-height: 1;
  overflow: visible;
  z-index: 100;
  mix-blend-mode: difference;
  color: #F6F5F0; /* Blend mode ensures visibility */
}

.sm-toggle:focus-visible {
  outline: none;
}

.sm-toggle-textWrap {
  position: relative;
  display: inline-block;
  height: 1em;
  overflow: hidden;
  white-space: nowrap;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-weight: 700;
  min-width: 60px;
  text-align: right;
}

.sm-toggle-textInner {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.sm-toggle-line {
  display: block;
  height: 1em;
  line-height: 1;
}

.sm-icon {
  position: relative;
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.sm-icon-line {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 100%;
  height: 1px;
  background: currentColor;
  transform: translate(-50%, -50%);
  will-change: transform;
}

.staggered-menu-panel {
  position: absolute;
  top: 0;
  right: 0;
  width: clamp(300px, 45vw, 600px);
  height: 100%;
  background: #F6F5F0; /* Paper Light */
  display: flex;
  flex-direction: column;
  padding: 8em 3em 3em 3em;
  overflow-y: auto;
  z-index: 10;
  pointer-events: auto;
  border-left: 1px solid rgba(0,0,0,0.05);
}

.dark .staggered-menu-panel {
    background: #0F0F0F; /* Paper Dark */
    border-left: 1px solid rgba(255,255,255,0.05);
}

[data-position='left'] .staggered-menu-panel {
  right: auto;
  left: 0;
  border-left: none;
  border-right: 1px solid rgba(0,0,0,0.05);
}

.sm-prelayers {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: clamp(300px, 45vw, 600px);
  pointer-events: none;
  z-index: 5;
}

[data-position='left'] .sm-prelayers {
  right: auto;
  left: 0;
}

.sm-prelayer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  transform: translateX(0);
}

.sm-panel-inner {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.sm-socials {
  margin-top: auto;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.1);
}
.dark .sm-socials {
    border-top: 1px solid rgba(255,255,255,0.1);
}

.sm-socials-title {
  margin: 0;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: var(--sm-accent, #1A1A1A);
  opacity: 0.5;
}

.sm-socials-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.sm-socials-link {
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: #1A1A1A;
  text-decoration: none;
  position: relative;
  transition: opacity 0.3s ease;
}

.dark .sm-socials-link {
    color: #F6F5F0;
}

.sm-socials-link:hover {
  color: var(--sm-accent, #1A1A1A);
  opacity: 0.6;
}

.sm-panel-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.sm-panel-itemWrap {
  position: relative;
  overflow: hidden;
  line-height: 1;
}

.sm-panel-item {
  position: relative;
  color: #1A1A1A;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 300;
  font-style: italic;
  font-size: 3.5rem;
  cursor: pointer;
  line-height: 1;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  transition: color 0.25s;
  display: inline-block;
  text-decoration: none;
  padding-right: 1.4em;
}

.dark .sm-panel-item {
    color: #F6F5F0;
}

@media (min-width: 1536px) {
    .sm-panel-item {
        font-size: 4.5rem;
    }
}

.sm-panel-itemLabel {
  display: inline-block;
  will-change: transform;
  transform-origin: 50% 100%;
}

.sm-panel-item:hover {
  color: var(--sm-accent, #1A1A1A);
}

.sm-panel-list[data-numbering] {
  counter-reset: smItem;
}

.sm-panel-list[data-numbering] .sm-panel-item::after {
  counter-increment: smItem;
  content: counter(smItem, decimal-leading-zero);
  position: absolute;
  top: 0.3em;
  right: 1em;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 700;
  color: var(--sm-accent, #1A1A1A);
  letter-spacing: 0.1em;
  pointer-events: none;
  user-select: none;
  opacity: var(--sm-num-opacity, 0);
}
.dark .sm-panel-list[data-numbering] .sm-panel-item::after {
    color: #F6F5F0;
}

@media (max-width: 640px) {
  .staggered-menu-panel {
    width: 100%;
  }
  .sm-panel-item {
    font-size: 3rem;
  }
}
`;

interface MenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
}

interface SocialItem {
  label: string;
  link: string;
}

interface StaggeredMenuProps {
  items: MenuItem[];
  socialItems: SocialItem[];
  position?: 'right' | 'left';
  colors?: string[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
}

export const StaggeredMenu: React.FC<StaggeredMenuProps> = ({
  position = 'right',
  colors = ['#1A1A1A', '#333333'],
  items = [],
  socialItems = [],
  displaySocials = true,
  displayItemNumbering = true,
  menuButtonColor = '#F6F5F0',
  openMenuButtonColor = '#1A1A1A',
  accentColor = '#1A1A1A',
  changeMenuColorOnOpen = true,
  isFixed = true,
  closeOnClickAway = true,
  onMenuOpen,
  onMenuClose
}) => {
  const [open, setOpen] = useState(false);
  const openRef = useRef(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const preLayersRef = useRef<HTMLDivElement>(null);
  const preLayerElsRef = useRef<Element[]>([]);
  const plusHRef = useRef<HTMLSpanElement>(null);
  const plusVRef = useRef<HTMLSpanElement>(null);
  const iconRef = useRef<HTMLSpanElement>(null);
  const textInnerRef = useRef<HTMLSpanElement>(null);
  const textWrapRef = useRef<HTMLSpanElement>(null);
  const toggleBtnRef = useRef<HTMLButtonElement>(null);
  const [textLines, setTextLines] = useState(['Menu', 'Close']);

  const openTlRef = useRef<any | null>(null);
  const closeTweenRef = useRef<any | null>(null);
  const spinTweenRef = useRef<any | null>(null);
  const textCycleAnimRef = useRef<any | null>(null);
  const colorTweenRef = useRef<any | null>(null);
  const busyRef = useRef(false);
  const itemEntranceTweenRef = useRef<any | null>(null);

  // Use global GSAP from window to avoid import issues
  const gsap = window.gsap;

  useLayoutEffect(() => {
    if (!gsap) return;

    const ctx = gsap.context(() => {
      const panel = panelRef.current;
      const preContainer = preLayersRef.current;
      const plusH = plusHRef.current;
      const plusV = plusVRef.current;
      const icon = iconRef.current;
      const textInner = textInnerRef.current;
      if (!panel || !plusH || !plusV || !icon || !textInner) return;

      let preLayers: Element[] = [];
      if (preContainer) {
        preLayers = Array.from(preContainer.querySelectorAll('.sm-prelayer'));
      }
      preLayerElsRef.current = preLayers;

      const offscreen = position === 'left' ? -100 : 100;
      gsap.set([panel, ...preLayers], { xPercent: offscreen });
      gsap.set(plusH, { transformOrigin: '50% 50%', rotate: 0 });
      gsap.set(plusV, { transformOrigin: '50% 50%', rotate: 90 });
      gsap.set(icon, { rotate: 0, transformOrigin: '50% 50%' });
      gsap.set(textInner, { yPercent: 0 });
      // Keep initial color as provided
      if (toggleBtnRef.current) {
          // No op, handle in css mix-blend
      }
    });
    return () => ctx.revert();
  }, [menuButtonColor, position, gsap]);

  const buildOpenTimeline = useCallback(() => {
    if (!gsap) return null;
    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return null;

    openTlRef.current?.kill();
    if (closeTweenRef.current) {
      closeTweenRef.current.kill();
      closeTweenRef.current = null;
    }
    itemEntranceTweenRef.current?.kill();

    const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
    const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
    const socialTitle = panel.querySelector('.sm-socials-title');
    const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));

    const layerStates = layers.map(el => ({ el, start: Number(gsap.getProperty(el, 'xPercent')) }));
    const panelStart = Number(gsap.getProperty(panel, 'xPercent'));

    if (itemEls.length) {
      gsap.set(itemEls, { yPercent: 140, rotate: 10 });
    }
    if (numberEls.length) {
      gsap.set(numberEls, { '--sm-num-opacity': 0 });
    }
    if (socialTitle) {
      gsap.set(socialTitle, { opacity: 0 });
    }
    if (socialLinks.length) {
      gsap.set(socialLinks, { y: 25, opacity: 0 });
    }

    const tl = gsap.timeline({ paused: true });

    layerStates.forEach((ls, i) => {
      tl.fromTo(ls.el, { xPercent: ls.start }, { xPercent: 0, duration: 0.5, ease: 'power4.out' }, i * 0.07);
    });
    const lastTime = layerStates.length ? (layerStates.length - 1) * 0.07 : 0;
    const panelInsertTime = lastTime + (layerStates.length ? 0.08 : 0);
    const panelDuration = 0.65;
    tl.fromTo(
      panel,
      { xPercent: panelStart },
      { xPercent: 0, duration: panelDuration, ease: 'power4.out' },
      panelInsertTime
    );

    if (itemEls.length) {
      const itemsStartRatio = 0.15;
      const itemsStart = panelInsertTime + panelDuration * itemsStartRatio;
      tl.to(
        itemEls,
        {
          yPercent: 0,
          rotate: 0,
          duration: 1,
          ease: 'power4.out',
          stagger: { each: 0.1, from: 'start' }
        },
        itemsStart
      );
      if (numberEls.length) {
        tl.to(
          numberEls,
          {
            duration: 0.6,
            ease: 'power2.out',
            '--sm-num-opacity': 1,
            stagger: { each: 0.08, from: 'start' }
          },
          itemsStart + 0.1
        );
      }
    }

    if (socialTitle || socialLinks.length) {
      const socialsStart = panelInsertTime + panelDuration * 0.4;
      if (socialTitle) {
        tl.to(
          socialTitle,
          {
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out'
          },
          socialsStart
        );
      }
      if (socialLinks.length) {
        tl.to(
          socialLinks,
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: 'power3.out',
            stagger: { each: 0.08, from: 'start' },
            onComplete: () => {
              gsap.set(socialLinks, { clearProps: 'opacity' });
            }
          },
          socialsStart + 0.04
        );
      }
    }

    openTlRef.current = tl;
    return tl;
  }, [gsap]);

  const playOpen = useCallback(() => {
    if (busyRef.current) return;
    busyRef.current = true;
    const tl = buildOpenTimeline();
    if (tl) {
      tl.eventCallback('onComplete', () => {
        busyRef.current = false;
      });
      tl.play(0);
    } else {
      busyRef.current = false;
    }
  }, [buildOpenTimeline]);

  const playClose = useCallback(() => {
    if (!gsap) return;
    openTlRef.current?.kill();
    openTlRef.current = null;
    itemEntranceTweenRef.current?.kill();

    const panel = panelRef.current;
    const layers = preLayerElsRef.current;
    if (!panel) return;

    const all = [...layers, panel];
    closeTweenRef.current?.kill();
    const offscreen = position === 'left' ? -100 : 100;
    closeTweenRef.current = gsap.to(all, {
      xPercent: offscreen,
      duration: 0.32,
      ease: 'power3.in',
      overwrite: 'auto',
      onComplete: () => {
        // Reset elements
        const itemEls = Array.from(panel.querySelectorAll('.sm-panel-itemLabel'));
        if (itemEls.length) {
          gsap.set(itemEls, { yPercent: 140, rotate: 10 });
        }
        const numberEls = Array.from(panel.querySelectorAll('.sm-panel-list[data-numbering] .sm-panel-item'));
        if (numberEls.length) {
          gsap.set(numberEls, { '--sm-num-opacity': 0 });
        }
        const socialTitle = panel.querySelector('.sm-socials-title');
        const socialLinks = Array.from(panel.querySelectorAll('.sm-socials-link'));
        if (socialTitle) gsap.set(socialTitle, { opacity: 0 });
        if (socialLinks.length) gsap.set(socialLinks, { y: 25, opacity: 0 });
        busyRef.current = false;
      }
    });
  }, [position, gsap]);

  const animateIcon = useCallback((opening: boolean) => {
    if (!gsap) return;
    const icon = iconRef.current;
    if (!icon) return;
    spinTweenRef.current?.kill();
    if (opening) {
      spinTweenRef.current = gsap.to(icon, { rotate: 225, duration: 0.8, ease: 'power4.out', overwrite: 'auto' });
    } else {
      spinTweenRef.current = gsap.to(icon, { rotate: 0, duration: 0.35, ease: 'power3.inOut', overwrite: 'auto' });
    }
  }, [gsap]);

  const animateColor = useCallback(
    (opening: boolean) => {
      if (!gsap) return;
      const btn = toggleBtnRef.current;
      if (!btn) return;
      colorTweenRef.current?.kill();
      if (changeMenuColorOnOpen) {
        // We use mix-blend-mode difference, so color change might not be strictly necessary 
        // if background changes significantly, but let's keep logic
        const targetColor = opening ? openMenuButtonColor : menuButtonColor;
        // colorTweenRef.current = gsap.to(btn, {
        //   color: targetColor,
        //   delay: 0.18,
        //   duration: 0.3,
        //   ease: 'power2.out'
        // });
      } else {
        // gsap.set(btn, { color: menuButtonColor });
      }
    },
    [openMenuButtonColor, menuButtonColor, changeMenuColorOnOpen, gsap]
  );

  const animateText = useCallback((opening: boolean) => {
    if (!gsap) return;
    const inner = textInnerRef.current;
    if (!inner) return;
    textCycleAnimRef.current?.kill();

    const currentLabel = opening ? 'Menu' : 'Close';
    const targetLabel = opening ? 'Close' : 'Menu';
    const cycles = 3;
    const seq = [currentLabel];
    let last = currentLabel;
    for (let i = 0; i < cycles; i++) {
      last = last === 'Menu' ? 'Close' : 'Menu';
      seq.push(last);
    }
    if (last !== targetLabel) seq.push(targetLabel);
    seq.push(targetLabel);
    setTextLines(seq);

    gsap.set(inner, { yPercent: 0 });
    const lineCount = seq.length;
    const finalShift = ((lineCount - 1) / lineCount) * 100;
    textCycleAnimRef.current = gsap.to(inner, {
      yPercent: -finalShift,
      duration: 0.5 + lineCount * 0.07,
      ease: 'power4.out'
    });
  }, [gsap]);

  const toggleMenu = useCallback(() => {
    const target = !openRef.current;
    openRef.current = target;
    setOpen(target);
    if (target) {
      onMenuOpen?.();
      playOpen();
    } else {
      onMenuClose?.();
      playClose();
    }
    animateIcon(target);
    animateColor(target);
    animateText(target);
  }, [playOpen, playClose, animateIcon, animateColor, animateText, onMenuOpen, onMenuClose]);

  const closeMenu = useCallback(() => {
    if (openRef.current) {
      openRef.current = false;
      setOpen(false);
      onMenuClose?.();
      playClose();
      animateIcon(false);
      animateColor(false);
      animateText(false);
    }
  }, [playClose, animateIcon, animateColor, animateText, onMenuClose]);

  React.useEffect(() => {
    if (!closeOnClickAway || !open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node) &&
        toggleBtnRef.current &&
        !toggleBtnRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [closeOnClickAway, open, closeMenu]);

  const handleLinkClick = (e: React.MouseEvent, link: string) => {
    e.preventDefault();
    closeMenu();
    // Smooth scroll logic
    setTimeout(() => {
        const targetId = link.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If external link or just reload
            if (link.startsWith('http')) window.open(link, '_blank');
        }
    }, 600);
  };

  return (
    <div
      className={`staggered-menu-wrapper ${isFixed ? 'fixed-wrapper' : ''}`}
      style={accentColor ? { ['--sm-accent' as any]: accentColor } : undefined}
      data-position={position}
      data-open={open || undefined}
    >
      <div ref={preLayersRef} className="sm-prelayers" aria-hidden="true">
        {colors.slice(0, 4).map((c, i) => (
            <div key={i} className="sm-prelayer" style={{ background: c }} />
        ))}
      </div>
      <header className="staggered-menu-header" aria-label="Main navigation header">
        <div 
            className="sm-logo" 
            aria-label="Logo" 
            onClick={() => { window.scrollTo({top:0, behavior:'smooth'}); closeMenu(); }}
        >
            <span className="font-serif text-2xl 3xl:text-3xl tracking-widest uppercase select-none font-bold">
               {TEXTOS_GERAIS.marca.split(' ')[0]}.S
            </span>
        </div>
        <button
          ref={toggleBtnRef}
          className="sm-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="staggered-menu-panel"
          onClick={toggleMenu}
          type="button"
        >
          <span ref={textWrapRef} className="sm-toggle-textWrap" aria-hidden="true">
            <span ref={textInnerRef} className="sm-toggle-textInner">
              {textLines.map((l, i) => (
                <span className="sm-toggle-line" key={i}>
                  {l}
                </span>
              ))}
            </span>
          </span>
          <span ref={iconRef} className="sm-icon" aria-hidden="true">
            <span ref={plusHRef} className="sm-icon-line" />
            <span ref={plusVRef} className="sm-icon-line" style={{ transform: 'translate(-50%, -50%) rotate(90deg)' }} />
          </span>
        </button>
      </header>

      <aside id="staggered-menu-panel" ref={panelRef} className="staggered-menu-panel" aria-hidden={!open}>
        <div className="sm-panel-inner">
          <ul className="sm-panel-list" role="list" data-numbering={displayItemNumbering || undefined}>
            {items.map((it, idx) => (
                <li className="sm-panel-itemWrap" key={it.label + idx}>
                  <a 
                    className="sm-panel-item" 
                    href={it.link} 
                    aria-label={it.ariaLabel} 
                    data-index={idx + 1}
                    onClick={(e) => handleLinkClick(e, it.link)}
                  >
                    <span className="sm-panel-itemLabel">{it.label}</span>
                  </a>
                </li>
            ))}
          </ul>
          {displaySocials && socialItems && socialItems.length > 0 && (
            <div className="sm-socials" aria-label="Social links">
              <h3 className="sm-socials-title">Follow Us</h3>
              <ul className="sm-socials-list" role="list">
                {socialItems.map((s, i) => (
                  <li key={s.label + i} className="sm-socials-item">
                    <a href={s.link} target="_blank" rel="noopener noreferrer" className="sm-socials-link">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
};

// Main Navbar Component that implements the StaggeredMenu
const Navbar: React.FC = () => {
    // Mapping existing app data to StaggeredMenu format
    const menuItems: MenuItem[] = [
        { label: 'Home', ariaLabel: 'Go to home', link: '#home' },
        { label: 'Work', ariaLabel: 'View Portfolio', link: '#work' },
        { label: 'About', ariaLabel: 'Artist Bio', link: '#about' },
        { label: 'Method', ariaLabel: 'Our Process', link: '#concept' },
        { label: 'Flash Day', ariaLabel: 'Events', link: '#flash' },
        { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
    ];

    const socialItems: SocialItem[] = REDES_SOCIAIS.map(s => ({
        label: s.nome,
        link: s.url
    }));

    return (
        <>
            <style>{STYLES}</style>
            <StaggeredMenu
                position="right"
                items={menuItems}
                socialItems={socialItems}
                displaySocials={true}
                displayItemNumbering={true}
                // Colors matched to the Paper & Ink Theme
                menuButtonColor="#1A1A1A"
                openMenuButtonColor="#1A1A1A"
                changeMenuColorOnOpen={false} // Handled by mix-blend-mode in CSS
                colors={['#1a1a1a', '#333333']} // Pre-layers (dark reveal)
                accentColor="#1A1A1A"
                isFixed={true}
                closeOnClickAway={true}
            />
        </>
    );
};

export default Navbar;