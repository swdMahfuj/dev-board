// For Discover Something New Today Button
document.getElementById("discoverBtn").addEventListener("click", function(){
    window.location.href= "blog.html";
})

// For theme change
document.addEventListener("DOMContentLoaded", function(){
    const themeBtn = document.getElementById("theme-btn")
    const body = document.body;
    const colors = ["bg-blue-50", "bg-green-100", "bg-yellow-100", "bg-purple-100", "bg-gray-100", "bg-red-100", "bg-pink-100", "bg-indigo-100", "bg-teal-100", "bg-orange-100"];
    let currentIndex = 0;

    themeBtn.addEventListener("click", function(){
        body.classList.remove(colors[currentIndex]);
        currentIndex = (currentIndex + 1) % colors.length;
        body.classList.add(colors[currentIndex]);
    })
})

// Current Date
function updateDate() {
    const today = new Date();

    const options = { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);

    const parts = formattedDate.split(' ');
    const dayName = parts[0].replace(',', '');
    const month = parts[1];
    const day = parts[2].replace(',', '');
    const year = parts[3];

    document.getElementById("dayName").textContent = dayName;
    document.getElementById("fullDate").textContent = `${month} ${day} ${year}`;
}

updateDate();