# SocietySphere
A modern society security and management system designed to bring safety, transparency, and calm control to residential communities through a clean, aurora-inspired digital experience.

## Current changes/situation:
- Clerk user data and Supabase database is synchronized using the *Webhooks* API.
- Using the Service Role Key, it gives the power to the server to bypass the **RLS** in the table.
- Using the webhooks, are able to *create*, *update* and *delete* the user in synchronization with the Clerk Auth.