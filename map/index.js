const dates = ["2023-3-2", "2023-3-3", "2023-3-4", "2023-3-5", "2023-3-6"];

const formattedDates = dates.map(formatDate);
console.log(formattedDates);    
 
function formatDate(date) {
    const parts = date.split("-");
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}