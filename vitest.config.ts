/// <reference types="vitest" />
import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
export default defineConfig({
    plugins: [
        React(),
    ],
    test: {
        coverage: {
            reporter: ['text', 'lcov']
        }
    },
})