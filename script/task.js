document.addEventListener("DOMContentLoaded", function () { 
    let taskCount = document.getElementById("taskCount");
    let navbarCount = document.getElementById("navbarCount");
    let completeButtons = document.querySelectorAll(".complete-btn");
    let activityLog = document.querySelector(".activity-log");
    let clearHistoryBtn = document.querySelector(".clear-history-btn");

    for (let button of completeButtons) {
        button.addEventListener("click", function () {
            let taskCard = this.closest(".task-card");
            let taskName = taskCard.querySelector(".taskName").textContent.trim();

            alert("Board updated Successfully!");

            button.disabled = true;
            button.classList.add("bg-gray-400", "cursor-not-allowed");

            let currentTaskCount = parseInt(taskCount.textContent);
            if (currentTaskCount > 0) {
                taskCount.textContent = currentTaskCount - 1;
            }

            navbarCount.textContent = parseInt(navbarCount.textContent) + 1;

            let currentTime = new Date().toLocaleTimeString();

            if (activityLog) {
                let newLog = document.createElement("p");
                newLog.textContent = `You have completed '${taskName}' at ${currentTime}`;
                newLog.classList.add("text-sm", "bg-blue-50", "p-3", "rounded-lg", "mb-2");

                activityLog.appendChild(newLog);
            }

            if (parseInt(taskCount.innerText) === 0) {
                alert("Congrats!!! You have completed all the current tasks.");
            }
        });
    }

    if (clearHistoryBtn) {
        clearHistoryBtn.addEventListener("click", function () {
            if (activityLog) {
                activityLog.innerHTML = "";
            }
        });
    }
});