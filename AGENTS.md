<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->
- Portfolio content (profile, projects, services, FAQ) lives in `src/data/*`; pages only render it, so content edits never touch components.
- Contact form posts to Web3Forms through the server-side `/api/contact` route using the private `WEB3FORMS_ACCESS_KEY`; Consultation form POSTs JSON to the existing `VITE_CONSULTATION_WEBHOOK_URL` n8n webhook. Both show an honest error when unset; this keeps the site portable without a separate backend.
