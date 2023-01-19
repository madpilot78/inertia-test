## About this repo

Minimal app to test errors in @inertiajs/vue3 v1.0.0 when testing with jest.

No backend functionality, no styling.

## Hot to use

### Running:

```sh
git clone https://github.com/madpilot78/inertia-test.git
cd inertia-test
composer install; npm ci
cp .env.example .env
php artisan key:generate
npm run dev (in another terminal)
php artisan serve
```

### Testing

```
npm test
```

## Description of the issue

When running the app everything works fine, all elements are rendered.

When running tests:

- The `Link` element fails to render.

A workaround is applying the following change to the vue component:

```javascript
<script setup>
import 'vue'
import { Head, Link } from '@inertiajs/vue3'
</script>
```

- The `useForm` method fails to read its own properties. No workaround found.
