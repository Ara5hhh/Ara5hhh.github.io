'use strict';

// This small browser preview uses the published game's real rune-to-spell mapping.
// It illustrates combinations; it does not execute the Roblox gameplay system.
const spells = [
  { runes: ['BERKANA'], name: 'PerilSight', description: 'Reveals nearby traps for a while.' },
  { runes: ['DAGAZ'], name: 'RunicSight', description: 'Reveals nearby runes for a while.' },
  { runes: ['OTHALA'], name: 'Hopscotch', description: 'A forward dash with character movement and camera effects.' },
  { runes: ['ALGIZ'], name: 'FrightPocket', description: 'Places a jumpscare trap on an interactable object.' },
  { runes: ['JERA'], name: 'FrightTrap', description: 'Conjures a hidden floor trap with a skeleton animation.' },
  { runes: ['BERKANA', 'ALGIZ'], name: 'Flashbang', description: 'Places a flashbang trap on an interactable object.' },
  { runes: ['BERKANA', 'JERA'], name: 'Tempest', description: 'An interactable trap that knocks back its target.' },
  { runes: ['ALGIZ', 'DAGAZ'], name: 'Doppelganger', description: 'Creates a moving decoy with explosion and knockback behavior.' },
  { runes: ['JERA', 'DAGAZ'], name: 'GloomShroud', description: 'Shrouds another player in darkness, unless protected by a ward.' },
  { runes: ['BERKANA', 'DAGAZ'], name: 'HauntingDecoy', description: 'Creates an approach-triggered trap that toggles an interactable.' },
  { runes: ['JERA', 'ALGIZ'], name: 'StaticCharge', description: 'Places a lightning-effect trap on an interactable object.' },
  { runes: ['BERKANA', 'OTHALA'], name: 'BlackHole', description: 'A floor trap that exiles its target into the maze.' },
  { runes: ['OTHALA', 'DAGAZ'], name: 'TellBells', description: 'Attaches a chime that responds to the target’s movement.' },
  { runes: ['OTHALA', 'ALGIZ'], name: 'CalamityWard', description: 'Grants a protective ward consumed by supported spell checks.' },
  { runes: ['JERA', 'OTHALA'], name: 'ItFollows', description: 'Summons a pursuing wisp against a server-selected enemy.' }
];
const selectedRunes = ['BERKANA', 'OTHALA'];
const runeButtons = document.querySelectorAll('[data-rune]');
const spellName = document.getElementById('spell-name');
const spellDescription = document.getElementById('spell-description');

function updatePreview() {
  const match = spells.find(spell => spell.runes.length === selectedRunes.length && spell.runes.every(rune => selectedRunes.includes(rune)));
  spellName.textContent = match ? match.name : 'Choose your runes';
  spellDescription.textContent = match ? match.description : 'Select one or two runes above to discover a spell.';
  runeButtons.forEach(button => {
    const selected = selectedRunes.includes(button.dataset.rune);
    button.classList.toggle('selected', selected);
    button.setAttribute('aria-pressed', String(selected));
  });
}
runeButtons.forEach(button => button.addEventListener('click', () => {
  const rune = button.dataset.rune;
  const index = selectedRunes.indexOf(rune);
  if (index !== -1) selectedRunes.splice(index, 1);
  else { if (selectedRunes.length === 2) selectedRunes.shift(); selectedRunes.push(rune); }
  updatePreview();
}));

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-nav');
function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) { closeMenu(); menuButton.focus(); }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.site-header')) closeMenu();
});

function enableContactCopy(buttonId, statusId, value, success, fallback) {
  const button = document.getElementById(buttonId);
  const status = document.getElementById(statusId);
  if (!navigator.clipboard || !window.isSecureContext) return;
  button.hidden = false;
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(value);
      status.textContent = success;
    } catch {
      status.textContent = fallback;
    }
  });
}
enableContactCopy('copy-email', 'copy-status', 'stefantakhayori@gmail.com',
  'Email address copied.', 'Select the email address to copy it.');
enableContactCopy('copy-discord', 'discord-copy-status', 'ara5h',
  'Discord username copied.', 'Select @ara5h to copy the username.');

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.documentElement.classList.add('js-reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
}
