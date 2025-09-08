// Simple animation for background circles
document.addEventListener('mousemove', (e) => {
  const circles = document.querySelectorAll('.circle');
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  circles.forEach((circle, index) => {
    const moveX = (x - 0.5) * 20 * (index + 1);
    const moveY = (y - 0.5) * 20 * (index + 1);
    circle.style.transform = `translate(${moveX}px, ${moveY}px)`;
  });
});
const chatButton = document.getElementById("chatButton");
const chatPopup = document.getElementById("chatPopup");
const closeChat = document.getElementById("closeChat");
const chatBody = document.getElementById("chatBody");
const chatInput = document.getElementById("chatInput");
const chatSend = document.getElementById("chatSend");

// Open chat popup
chatButton.addEventListener("click", () => {
  chatPopup.classList.toggle("show");
});

// Close chat popup
closeChat.addEventListener("click", () => {
  chatPopup.classList.remove("show");
});
<script>
  document.addEventListener("DOMContentLoaded", () => {
    const joinButtons = document.querySelectorAll(".btn-join, .btn-download");
    const waitingList = document.getElementById("waiting-list");

    joinButtons.forEach(button => {
      button.addEventListener("click", (e) => {
        e.preventDefault();
        waitingList.classList.add("active");
        waitingList.scrollIntoView({ behavior: "smooth" });
      });
    });
  });
</script>


// Send message
function sendMessage() {
  const text = chatInput.value.trim();
  if (!text) return;

  const userMsg = document.createElement("div");
  userMsg.className = "message user";
  userMsg.textContent = text;
  chatBody.appendChild(userMsg);

  chatInput.value = "";
  chatBody.scrollTop = chatBody.scrollHeight;

  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "message bot";
    botMsg.textContent = "🤖 Demo reply: Thanks for your message!";
    chatBody.appendChild(botMsg);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 700);
}

chatSend.addEventListener("click", sendMessage);
chatInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") sendMessage();
});
      