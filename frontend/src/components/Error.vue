<template>
    <div>
        <h4 v-if="error">{{ error }}</h4>
    </div>
</template>

<script>
export default {
    name: 'Error',
    props: ['error']
}
</script>