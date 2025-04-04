export const loginUser = async (formData) => {
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
    });
    if (!response.ok) {
        throw new Error('Login failed');
    }
    return await response.json();
};
