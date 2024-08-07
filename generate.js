// Function to generate a random alphanumeric code
function generateCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get('url');
    const code = generateCode(12); // Generates a 12-character code

    if (code) {
        document.getElementById('generating').classList.remove('hidden');
        document.getElementById('completed').classList.add('hidden');

        setTimeout(() => {
            document.getElementById('generating').classList.add('hidden');
            document.getElementById('completed').classList.remove('hidden');
            document.getElementById('code').innerText = `Your Code: ${code}`;

            setTimeout(() => {
                window.location.href = redirectUrl; // Redirect to the specific URL
            }, 1000);
        }, 2000); // Adjust time as needed
    }
});
