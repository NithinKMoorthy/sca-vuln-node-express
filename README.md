# sca-vuln-node-express

> **WARNING: Intentionally vulnerable.** Test fixture for Software Composition Analysis (SCA) tools.
> Do not deploy. Dependencies are pinned to versions with known CVEs.

**Ecosystem:** npm (Node.js)

## Expected findings (non-exhaustive)
- lodash 4.17.15: CVE-2020-8203, CVE-2021-23337 (prototype pollution / command injection)
- minimist 1.2.0: CVE-2021-44906
- axios 0.21.0: CVE-2020-28168, CVE-2021-3749
- jsonwebtoken 8.5.1: CVE-2022-23529, CVE-2022-23540
- handlebars 4.5.3: CVE-2021-23369
- marked 0.3.6: multiple ReDoS / XSS
- node-fetch 2.6.0: CVE-2022-0235
- ws 7.4.5: CVE-2021-32640
