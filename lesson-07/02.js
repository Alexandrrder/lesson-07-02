/*
 * Напишите функцию isNumeric, которая принимает строку и проверяет, представляет ли эта строка корректное числовое значение.
 * Если строка является числом, функция должна возвращать true, в противном случае - false.
 */
const isNumeric = (str) => {
    if (str.length > 0) { 
        if (!isNaN(str)) {
            return true;
        } else {
            return false;
        }
    }
    return false;
}
console.log(isNumeric('u'));