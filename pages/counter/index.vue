<script setup lang="ts">
    // import store counter
    import { useCounterStore } from '@/stores/counter'
    import CartItem from '@/components/cart/cartItem.vue';

    // create counter store object
    const counter = useCounterStore()

</script>

<template>
    <div>

        <!-- Cart -->
        <CartItem />

        <v-card class="mx-auto" width="400">
            <v-card-title>
                <h2>Counter</h2>
            </v-card-title>
            <v-card-text>
                <p>Counter: {{ counter.count }}</p>
            </v-card-text>
            <v-card-actions>
                <v-btn 
                    variant="text" 
                    color="teal-accent-4" 
                    @click="counter.increment">Increment</v-btn>
                <v-btn 
                    variant="text" 
                    color="red-accent-4" 
                    @click="counter.decrement">Decrement</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<style scoped>

</style>