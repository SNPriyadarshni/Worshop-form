// Named exports
export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}

// Default export
export default function greet(name = "Guest") {
    console.log(`Hello, ${name}! Welcome to JavaScript Modules.`);
}
