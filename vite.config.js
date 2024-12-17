import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                book: resolve(__dirname, 'book/index.html'),
                meow: resolve(__dirname, 'meow/index.html'),
            },
        },
    },
})
