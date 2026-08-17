// Thin wrapper around localStorage so slices don't repeat try/catch logic.
// Mirrors the behavior of the old project's useLocalStorage hook, but usable
// directly inside Redux Toolkit slice initializers/reducers.

export function loadFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (err) {
    console.error(`Failed to load "${key}" from localStorage`, err);
    return fallback;
  }
}

export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(`Failed to save "${key}" to localStorage`, err);
  }
}
