// Shared Supabase client for B-Roll Studio
// Loaded via CDN in each page's <head>: https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2

const SUPABASE_URL = "https://jctjfwoihtygvlhqmifs.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_YduQv5B_vdZfCtvPBq8xxA_DM0pvusx";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

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
