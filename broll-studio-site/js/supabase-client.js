// Shared Supabase client for B-Roll Studio
// Loaded via CDN in each page's <head>: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2

const SUPABASE_URL = "https://jctjfwoihtygvlhqmifs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_YduQv5B_vdZfCtvPBq8xxA_DM0pvusx";

let supabase;
try {
  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    throw new Error(
      "Supabase library failed to load from the CDN (window.supabase is missing). " +
      "Check your internet connection, ad blocker, or that you're loading this page " +
      "over http(s):// rather than a local file:// path."
    );
  }
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
} catch (err) {
  console.error("[B-Roll Studio] Failed to initialize Supabase client:", err);
  // Surface it visibly instead of failing silently, so forms don't just "do nothing."
  window.addEventListener("DOMContentLoaded", () => {
    const banner = document.createElement("div");
    banner.style.cssText = "position:fixed;top:0;left:0;right:0;z-index:99999;background:#ba1a1a;color:#fff;padding:10px 16px;font-family:sans-serif;font-size:13px;";
    banner.textContent = "Setup error: " + err.message;
    document.body.prepend(banner);
  });
}

// Catch any other uncaught error on auth pages and show it in the on-page message
// element (id="formMessage") if one exists, instead of leaving the user with a
// button that silently does nothing.
window.addEventListener("error", (event) => {
  console.error("[B-Roll Studio] Uncaught error:", event.error || event.message);
  const msgEl = document.getElementById("formMessage");
  if (msgEl) {
    msgEl.style.display = "block";
    msgEl.style.color = "#ba1a1a";
    msgEl.textContent = "Something went wrong loading this page: " + (event.error?.message || event.message) +
      ". Open your browser console (F12) for details.";
  }
});

// ---- Auth helpers used across pages ----

// Redirects to log-in.html if there is no active session. Call at the top of
// any page that requires the user to be signed in.
async function requireAuth() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) {
    window.location.href = "log-in.html";
    return null;
  }
  return session;
}

// Sends signed-in users away from auth pages (sign-up / log-in) straight to the dashboard.
async function redirectIfSignedIn() {
  const { data: { session } } = await supabase.auth.getSession();
  if (session) {
    window.location.href = "dashboard.html";
  }
}

async function signOut() {
  await supabase.auth.signOut();
  window.location.href = "log-in.html";
}

// Small helper to show inline error/success text under a form.
function showFormMessage(el, message, isError = true) {
  if (!el) return;
  el.textContent = message;
  el.style.display = "block";
  el.style.color = isError ? "#ba1a1a" : "#00677d";
}
