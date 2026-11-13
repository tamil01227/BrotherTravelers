# Admin dashboard architecture

## Current boundary

The public website is a static React application. It creates a WhatsApp draft or starts a phone call; it does not persist customer enquiries. There is no authenticated backend in this project, so an admin dashboard or customer-data store must not be added to the public frontend.

## Recommended design before implementation

- Add a server-side API and database before building dashboard screens. Keep credentials, service-role keys, and authorization decisions on the server.
- Use a managed identity provider with administrator-only accounts, MFA, short-lived sessions, and secure `HttpOnly`, `Secure`, `SameSite` cookies. Do not put admin tokens in browser storage.
- Require server-side authorization on every admin API request. Use a single-owner role initially; add roles only when the business defines them.
- Store only the information needed to follow up on a request. Define a retention period, deletion/export process, backup handling and a privacy notice before collecting enquiries.
- Validate and normalize all submitted fields server-side. Add rate limiting, CSRF protection for cookie-authenticated requests, strict CORS, audit logs for access and changes, and monitored backups.
- Do not include names, phone numbers, destinations, dates, passenger counts or message contents in analytics, application logs, or error reporting.
- Keep public booking enquiries on the existing WhatsApp/call flow until the backend, data ownership, access policy and retention requirements are approved.

## Decisions required before build

Select the backend host, database, identity provider, administrator account policy, enquiry fields, retention duration, and support process for data access/deletion. No vendor or data policy is assumed by this document.
