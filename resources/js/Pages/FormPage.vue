<template>
  <h1>Form</h1>
  <hr>
  <label for="field">Field</label>
  <input
    id="field"
    v-model="form.field"
    type="text"
    autofocus
  />
</template>

<script setup>
import { useForm } from '@inertiajs/vue3'

const form = useForm({
  field: null
})
</script>
