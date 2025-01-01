// Tugmani bosganda natija chiqarish
document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('result').textContent = 'Davom etamiz!';
});
// Maxsus kodni belgilash
const secretCode = '12345'; // Sizning maxsus kodingiz

// Kodni tekshirish
document.getElementById('checkCodeButton').addEventListener('click', function() {
    const userCode = document.getElementById('codeInput').value; // Foydalanuvchining kiritgan kodi
    const resultElement = document.getElementById('codeResult');

    if (userCode === secretCode) {
        resultElement.textContent = 'Tabriklaymiz! Kod to‘g‘ri.';
        resultElement.className = 'success';
    } else {
        resultElement.textContent = 'Kiritilgan kod noto‘g‘ri. Iltimos, qayta urinib ko‘ring.';
        resultElement.className = 'error';
    }
});