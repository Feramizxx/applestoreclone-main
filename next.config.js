/** @type {import('next').NextConfig} */
const nextConfig = {
  

  reactStrictMode: true,
  styledComponents: true,
  images: {
    domains: ["rb.gy", "cdn.sanity.io", "lh3.googleusercontent.com"],
  },
 
};

module.exports = nextConfig;

// env: {
//   NEXT_PUBLIC_BASE_URL: "http://localhost:3000",
//   NEXT_PUBLIC_SANITY_DATASET: "production",
//   NEXT_PUBLIC_SANITY_PROJECT_ID: "in21gatw",
//   NEXT_PUBLIC_AUTH_SECRET: "ec72a4d61aa5f52ed4497969ae4b9302",
//   SANITY_API_TOKEN:
//     "skFfsH3Jy7Wp3eMCtfUbJ7NvWrbAIQKQri8TRG5GQfYWZtrfAn0LHk5p9TVMwMi3WQkAZL6qS8QwlxETOANdQXGjEqgTgfRMHMrG9OlNJO8gvbgKogevpA9Gk2KLdBIkLuvlUWEFCQtjdRiihtAoYf61OhoqR5j63LXOJ4LFscUVMLsRG9so",
//   GOOGLE_ID:
//     "84987978494-gm5p165mrp6bes23qs26hfon45tgrq2p.apps.googleusercontent.com",
//   GOOGLE_SECRET: "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",
// },
